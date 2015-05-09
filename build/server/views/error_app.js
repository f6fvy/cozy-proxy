var jade = require('jade/runtime');
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (polyglot, className) {
buf.push("<!DOCTYPE html><html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"><title>" + (jade.escape((jade_interp = polyglot.t('error title')) == null ? '' : jade_interp)) + "</title><link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"/apple-touch-icon-57x57.png\"><link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"/apple-touch-icon-60x60.png\"><link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"/apple-touch-icon-72x72.png\"><link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"/apple-touch-icon-76x76.png\"><link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"/apple-touch-icon-114x114.png\"><link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"/apple-touch-icon-120x120.png\"><link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"/apple-touch-icon-144x144.png\"><link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"/apple-touch-icon-152x152.png\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon-180x180.png\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-32x32.png\" sizes=\"32x32\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-194x194.png\" sizes=\"194x194\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-96x96.png\" sizes=\"96x96\"><link rel=\"icon\" type=\"image/png\" href=\"/android-chrome-192x192.png\" sizes=\"192x192\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-16x16.png\" sizes=\"16x16\"><link rel=\"manifest\" href=\"/manifest.json\"><meta name=\"msapplication-TileColor\" content=\"#20a8f1\"><meta name=\"msapplication-TileImage\" content=\"/mstile-144x144.png\"><meta name=\"theme-color\" content=\"#20a8f1\"><link rel=\"stylesheet\" href=\"/fonts/fonts.css\"><link rel=\"stylesheet\" href=\"/styles/app.css\"><link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.png\"></head><body" + (jade.cls(["" + (className) + ""], [true])) + "><div id=\"content\"><img src=\"/images/spinner-white.svg\" class=\"hidden\"><div id=\"header\"><a id=\"logo\" href=\"http://cozy.io\" target=\"_blank\"><img src=\"/images/happycloud.png\"><span>beta</span></a></div><div class=\"proxy-form error\"><h1> " + (jade.escape((jade_interp = polyglot.t('error headline')) == null ? '' : jade_interp)) + "</h1><p>" + (jade.escape((jade_interp = polyglot.t('error reinsurance')) == null ? '' : jade_interp)) + "<br>" + (jade.escape((jade_interp = polyglot.t('error try to fix')) == null ? '' : jade_interp)) + "</p><ul><li>" + (jade.escape((jade_interp = polyglot.t('error wait a bit')) == null ? '' : jade_interp)) + "</li><li>" + (jade.escape((jade_interp = polyglot.t('error restart app')) == null ? '' : jade_interp)) + "</li><li>" + (jade.escape((jade_interp = polyglot.t('error reinstall app')) == null ? '' : jade_interp)) + "</li></ul><p> " + (jade.escape((jade_interp = polyglot.t('error contact developer')) == null ? '' : jade_interp)) + "</p><ul><li>" + (jade.escape((jade_interp = polyglot.t('error contact forum')) == null ? '' : jade_interp)) + "<br><a href=\"https://forum.cozy.io\">https://forum.cozy.io</a></li><li>" + (jade.escape((jade_interp = polyglot.t('error contact email')) == null ? '' : jade_interp)) + "</li><li>" + (jade.escape((jade_interp = polyglot.t('error contact irc')) == null ? '' : jade_interp)) + "</li></ul></div></div><script src=\"/scripts/app.js\"></script><script>require('client');</script></body></html>");}("polyglot" in locals_for_with?locals_for_with.polyglot:typeof polyglot!=="undefined"?polyglot:undefined,"className" in locals_for_with?locals_for_with.className:typeof className!=="undefined"?className:undefined));;return buf.join("");
}