define('voteweekrestaurant/router', ['exports', 'ember', 'voteweekrestaurant/config/environment'], function (exports, _ember, _voteweekrestaurantConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _voteweekrestaurantConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('index', { path: '/' });
    this.route('about');
  });

  exports['default'] = Router;
});