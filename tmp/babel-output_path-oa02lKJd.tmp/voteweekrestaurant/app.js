define('voteweekrestaurant/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'voteweekrestaurant/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _voteweekrestaurantConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _voteweekrestaurantConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _voteweekrestaurantConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _voteweekrestaurantConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});