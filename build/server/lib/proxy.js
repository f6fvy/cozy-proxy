// Generated by CoffeeScript 1.9.0
var async, config, errorHandler, fs, http, httpProxy, localization, logger, passport, proxy, router;

http = require('http');

fs = require('graceful-fs');

httpProxy = require('http-proxy');

async = require('async');

passport = require('passport');

config = require('../config');

logger = require('printit')({
  date: false,
  prefix: 'lib:proxy'
});

router = require('./router');

localization = require('./localization_manager');

errorHandler = require('../middlewares/errors');

proxy = null;

module.exports.getProxy = function() {
  return proxy;
};

module.exports.initializeProxy = function(app, server) {
  proxy = httpProxy.createProxyServer({
    agent: new http.Agent()
  });
  proxy.on('error', function(err, req, res) {
    console.log(err);
    err = new Error(err);
    err.statusCode = 500;
    err.template = {
      name: 'error',
      params: {
        polyglot: localization.getPolyglot()
      }
    };
    return errorHandler(err, req, res);
  });
  return server.on('upgrade', function(req, socket, head) {
    var cookieParser, fakeRes, initialize, session, sessionParser, _ref;
    req.originalUrl = req.url;
    fakeRes = {
      on: function() {}
    };
    _ref = config.authSteps, cookieParser = _ref[0], sessionParser = _ref[1], initialize = _ref[2], session = _ref[3];
    return async.series([
      function(callback) {
        return cookieParser(req, fakeRes, callback);
      }, function(callback) {
        return sessionParser(req, fakeRes, callback);
      }, function(callback) {
        return initialize(req, fakeRes, callback);
      }, function(callback) {
        return session(req, fakeRes, callback);
      }
    ], function(err) {
      var fail, proxyWS, publicOrPrivate, routes, slug, _, _ref1;
      proxyWS = function(port) {
        return proxy.ws(req, socket, head, {
          target: "ws://localhost:" + port,
          ws: true
        });
      };
      fail = function(err) {
        if (err != null) {
          logger.error(err);
        }
        logger.error("Socket unauthorized");
        return socket.end("HTTP/1.1 400 Connection Refused \r\n" + "Connection: close\r\n\r\n", 'ascii');
      };
      if (err) {
        return fail(err);
      }
      _ref1 = req.url.split('/'), _ = _ref1[0], publicOrPrivate = _ref1[1], slug = _ref1[2];
      routes = router.getRoutes();
      if (publicOrPrivate === 'public') {
        req.url = req.url.replace("/public/" + slug, '/public');
        return proxyWS(routes[slug].port);
      } else if (publicOrPrivate === 'apps' && req.isAuthenticated()) {
        req.url = req.url.replace("/apps/" + slug, '');
        return proxyWS(routes[slug].port);
      } else if (req.isAuthenticated()) {
        return proxyWS(process.env.DEFAULT_REDIRECT_PORT);
      } else {
        return fail(new Error('socket not authorized'));
      }
    });
  });
};
