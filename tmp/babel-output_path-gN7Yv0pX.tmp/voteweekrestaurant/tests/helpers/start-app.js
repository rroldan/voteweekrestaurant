define('voteweekrestaurant/tests/helpers/start-app', ['exports', 'ember', 'voteweekrestaurant/app', 'voteweekrestaurant/config/environment'], function (exports, _ember, _voteweekrestaurantApp, _voteweekrestaurantConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _voteweekrestaurantConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _voteweekrestaurantApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});