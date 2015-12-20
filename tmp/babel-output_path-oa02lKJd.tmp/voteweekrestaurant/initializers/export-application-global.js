define('voteweekrestaurant/initializers/export-application-global', ['exports', 'ember', 'voteweekrestaurant/config/environment'], function (exports, _ember, _voteweekrestaurantConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_voteweekrestaurantConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _voteweekrestaurantConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_voteweekrestaurantConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});