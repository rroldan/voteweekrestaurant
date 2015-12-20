/* jshint ignore:start */

define('voteweekrestaurant/config/environment', ['ember'], function(Ember) {
  var prefix = 'voteweekrestaurant';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("voteweekrestaurant/app")["default"].create({"name":"voteweekrestaurant","version":"0.0.0+e2da648c"});
}

/* jshint ignore:end */
