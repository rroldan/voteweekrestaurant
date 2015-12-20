define('voteweekrestaurant/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'voteweekrestaurant/tests/helpers/start-app', 'voteweekrestaurant/tests/helpers/destroy-app'], function (exports, _qunit, _voteweekrestaurantTestsHelpersStartApp, _voteweekrestaurantTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _voteweekrestaurantTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _voteweekrestaurantTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});