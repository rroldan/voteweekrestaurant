define('voteweekrestaurant/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'voteweekrestaurant/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _voteweekrestaurantConfigEnvironment) {

  var name = _voteweekrestaurantConfigEnvironment['default'].APP.name;
  var version = _voteweekrestaurantConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});