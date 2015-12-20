define('voteweekrestaurant/tests/helpers/resolver', ['exports', 'ember/resolver', 'voteweekrestaurant/config/environment'], function (exports, _emberResolver, _voteweekrestaurantConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _voteweekrestaurantConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _voteweekrestaurantConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});