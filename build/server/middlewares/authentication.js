// Generated by CoffeeScript 1.9.0
var localization, passport, passwordKeys, qs;

passport = require('passport');

qs = require('querystring');

localization = require('../lib/localization_manager');

passwordKeys = require('../lib/password_keys');

module.exports.authenticate = function(req, res, next) {
  var process;
  process = function(err, user) {
    var error;
    if (err) {
      return next(new Error(localization.t('error server')));
    } else if (user === void 0 || !user) {
      error = new Error(localization.t('error bad credentials'));
      error.status = 401;
      return next(error);
    } else {
      return passwordKeys.initializeKeys(req.body.password, function(err) {
        if (err) {
          return next(new Error(localization.t('error keys not intialized')));
        } else {
          return req.logIn(user, function(err, info) {
            if (err) {
              error = new Error(localization.t("error login failed"));
              error.status = 401;
              return next(error);
            } else {
              return res.send(200, {
                success: true
              });
            }
          });
        }
      });
    }
  };
  return passport.authenticate('local', process)(req, res, next);
};

module.exports.isAuthenticated = function(req, res, next) {
  var url;
  return next();
  if (req.isAuthenticated()) {
    return next();
  } else {
    url = "/login" + req.url;
    if (req.query.length) {
      url += "?" + (qs.stringify(req.query));
    }
    return res.redirect(url);
  }
};
