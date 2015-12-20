define('voteweekrestaurant/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'voteweekrestaurant/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _voteweekrestaurantConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_voteweekrestaurantConfigEnvironment['default'].APP.name, _voteweekrestaurantConfigEnvironment['default'].APP.version)
  };
});