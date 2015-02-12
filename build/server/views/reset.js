var jade = require('jade/runtime');
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (polyglot, resetKey) {
buf.push("<!DOCTYPE html><html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"><title>" + (jade.escape((jade_interp = polyglot.t('reset title')) == null ? '' : jade_interp)) + "</title><link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"/apple-touch-icon-57x57.png\"><link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"/apple-touch-icon-60x60.png\"><link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"/apple-touch-icon-72x72.png\"><link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"/apple-touch-icon-76x76.png\"><link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"/apple-touch-icon-114x114.png\"><link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"/apple-touch-icon-120x120.png\"><link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"/apple-touch-icon-144x144.png\"><link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"/apple-touch-icon-152x152.png\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon-180x180.png\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-32x32.png\" sizes=\"32x32\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-194x194.png\" sizes=\"194x194\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-96x96.png\" sizes=\"96x96\"><link rel=\"icon\" type=\"image/png\" href=\"/android-chrome-192x192.png\" sizes=\"192x192\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-16x16.png\" sizes=\"16x16\"><link rel=\"manifest\" href=\"/manifest.json\"><meta name=\"msapplication-TileColor\" content=\"#15a7c7\"><meta name=\"msapplication-TileImage\" content=\"/mstile-144x144.png\"><meta name=\"theme-color\" content=\"#15a7c7\"><link rel=\"stylesheet\" href=\"/fonts/fonts.css\"><link rel=\"stylesheet\" href=\"/styles/app.css\"><link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.png\"></head><body><div id=\"content\"><div id=\"header\"><a id=\"logo\" href=\"http://cozy.io\"><img src=\"/images/happycloud.png\"><span>beta</span></a></div><script>var key = \"" + (jade.escape((jade_interp = resetKey) == null ? '' : jade_interp)) + "\";</script><div class=\"proxy-form\"><h1>" + (jade.escape((jade_interp = polyglot.t('reset headline')) == null ? '' : jade_interp)) + "</h1><p>" + (jade.escape((jade_interp = polyglot.t('reset instructions')) == null ? '' : jade_interp)) + "</p><p class=\"input-wrapper\"><input id=\"password-input\" type=\"password\"" + (jade.attr("placeholder", "" + (polyglot.t('reset password placeholder')) + "", true, true)) + "></p><div id=\"btn-wrapper\"><div class=\"btn-container right single\"><button id=\"submit-btn\">" + (jade.escape((jade_interp = polyglot.t('reset button')) == null ? '' : jade_interp)) + "</button></div></div><div class=\"error-box alert alert-error\"></div><div class=\"error-box alert alert-success\"></div></div></div><script src=\"/scripts/app.js\"></script><script>require('client');</script><script>require('reset');\nvar RESET_SUCCESS_MESSAGE = \"" + (jade.escape((jade_interp = polyglot.t('reset success message')) == null ? '' : jade_interp)) + "\";\nvar RESET_BUTTON = \"" + (jade.escape((jade_interp = polyglot.t('reset button')) == null ? '' : jade_interp)) + "\";\n</script></body></html>");}.call(this,"polyglot" in locals_for_with?locals_for_with.polyglot:typeof polyglot!=="undefined"?polyglot:undefined,"resetKey" in locals_for_with?locals_for_with.resetKey:typeof resetKey!=="undefined"?resetKey:undefined));;return buf.join("");
}