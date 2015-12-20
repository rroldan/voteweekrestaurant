"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

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
define('voteweekrestaurant/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'voteweekrestaurant/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _voteweekrestaurantConfigEnvironment) {

  var name = _voteweekrestaurantConfigEnvironment['default'].APP.name;
  var version = _voteweekrestaurantConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('voteweekrestaurant/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('voteweekrestaurant/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('voteweekrestaurant/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'voteweekrestaurant/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _voteweekrestaurantConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_voteweekrestaurantConfigEnvironment['default'].APP.name, _voteweekrestaurantConfigEnvironment['default'].APP.version)
  };
});
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
define('voteweekrestaurant/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("voteweekrestaurant/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "voteweekrestaurant/templates/about.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Vote Week Restaurant");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Vota al Restaurante de la semana");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("voteweekrestaurant/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "voteweekrestaurant/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

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
//# sourceMappingURL=voteweekrestaurant.map