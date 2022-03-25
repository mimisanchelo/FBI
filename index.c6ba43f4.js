// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7yNqf":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b1d60d25c6ba43f4";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bznnK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _profileView = require("./views/profileView");
var _profileViewDefault = parcelHelpers.interopDefault(_profileView);
var _searchView = require("./views/searchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
var _resultsView = require("./views/resultsView");
var _resultsViewDefault = parcelHelpers.interopDefault(_resultsView);
var _paginationView = require("./views/paginationView");
var _paginationViewDefault = parcelHelpers.interopDefault(_paginationView);
const controlProfile = async function() {
    try {
        //id
        const id = window.location.hash.slice(1);
        if (!id) return;
        //spinner
        _profileViewDefault.default.renderSpinner();
        await _model.loadFugitive(id);
        _profileViewDefault.default.render(_model.state.profile);
    } catch (err) {
        _profileViewDefault.default.renderError();
    }
};
const searchResults = async function() {
    try {
        _resultsViewDefault.default.renderSpinner();
        //search query
        const query = _searchViewDefault.default.getQuery();
        if (!query) return;
        // load search
        let _ = undefined;
        await _model.loadSearchFugitive(query, _);
        //render
        _resultsViewDefault.default.render(_model.state.search.results);
        // render pagination
        _paginationViewDefault.default.render(_model.state);
    } catch (err) {
        console.log(`${err}`);
    }
};
const init = function() {
    _profileViewDefault.default.addHandlerRender(controlProfile);
    _searchViewDefault.default.addHandlerSearch(searchResults);
    _paginationViewDefault.default.addHandlerClick(searchResults);
};
init(); // const selectedCategory = document.querySelector('.select__category')
 // selectedCategory.addEventListener('change', function() {
 //   const titleCrime = document.querySelector('.most__wanted-title')
 //   console.log(selectedCategory.value);
 //   if(selectedCategory.value == 'Categories') return 
 //   titleCrime.textContent = selectedCategory.value
 // })

},{"./model":"Y4A21","./views/profileView":"8Hi5l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/searchView":"9OQAM","./views/paginationView":"6z7bi","./views/resultsView":"cSbZE"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "loadFugitive", ()=>loadFugitive
);
parcelHelpers.export(exports, "loadSearchFugitive", ()=>loadSearchFugitive
);
var _config = require("./config");
var _helper = require("./helper");
const state = {
    profile: {
    },
    search: {
        query: '',
        results: [],
        resultsPerPage: _config.RES_PAGE,
        page: 1
    },
    total: ''
};
const loadFugitive = async function(id) {
    try {
        const data = await _helper.getJSON(`${_config.profileAPI}${id}`);
        let profile = data;
        state.profile = {
            title: profile.title,
            uid: profile.uid,
            description: profile.description,
            details: profile.details,
            suspects: profile.suspects,
            path: profile.path,
            images: profile.images,
            files: profile.files,
            aliases: profile.aliases,
            classification: profile.classification,
            info: [
                [
                    "Age",
                    profile.age_range
                ],
                [
                    "Eyes",
                    profile.eyes
                ],
                [
                    "Hair",
                    profile.hair
                ],
                [
                    "Height max",
                    profile.height_max
                ],
                [
                    "Height min",
                    profile.height_min
                ],
                [
                    "Languages",
                    profile.languages
                ],
                [
                    "Locations",
                    profile.locations
                ],
                [
                    "Nationality",
                    profile.nationality
                ],
                [
                    "NCIC",
                    profile.ncic
                ],
                [
                    "Occupations",
                    profile.occupations
                ],
                [
                    "Place of Birth",
                    profile.place_of_birth
                ],
                [
                    "Possible Countries",
                    profile.possible_countries
                ],
                [
                    "Possible States",
                    profile.possible_states
                ],
                [
                    "Race",
                    profile.race
                ],
                [
                    "Scars and Marks",
                    profile.scars_and_marks
                ],
                [
                    "Sex",
                    profile.sex
                ],
                [
                    "Weight",
                    profile.weight
                ], 
            ],
            warningM: profile.warning_message,
            rewardM: profile.reward_text,
            cautions: profile.cautions,
            remarks: profile.remarks,
            url: profile.url,
            subject: profile.subjects,
            fieldOffice: profile.field_offices
        };
        console.log(state.profile);
    } catch (err) {
        throw err;
    }
};
const loadSearchFugitive = async function(query, page = state.search.page) {
    try {
        state.search.query = query;
        const respond = await fetch(`https://api.fbi.gov/@wanted?pageSize=${state.search.resultsPerPage}&page=${page}&sort_order=desc&field_offices=${query}`);
        const data = await respond.json();
        console.log(respond);
        const start = (page - 1) * state.search.resultsPerPage;
        const end = page * state.search.resultsPerPage;
        state.search.results = data.items.map((rec)=>{
            return {
                title: rec.title,
                uid: rec.uid,
                path: rec.path,
                images: rec.images,
                aliases: rec.aliases,
                url: rec.url,
                subject: rec.subjects,
                audios: rec.audios,
                additional: rec.additional,
                submit: rec.submit,
                stories: rec.stories,
                fieldOffice: rec.field_offices,
                classification: rec.classification
            };
        });
        state.total = data.total;
        state.search.page = data.page;
        state.search.results.slice(start, end);
        console.log(state);
    } catch (err) {
        throw err;
    }
}; // export const getSearchResultsPage = function(page) {
 //   const start = (page -1) * 20 //0
 //   const end = page * 20 //9
 //   return state.search.results.slice(start, end)
 // }

},{"./config":"k5Hzs","./helper":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "profileAPI", ()=>profileAPI
);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC
);
parcelHelpers.export(exports, "RES_PAGE", ()=>RES_PAGE
);
const profileAPI = "https://api.fbi.gov/@wanted-person/";
const TIMEOUT_SEC = 10;
const RES_PAGE = 20;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON
);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} seconds`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const fetchPro = fetch(url);
        const respond = await Promise.race([
            fetchPro,
            timeout(_config.TIMEOUT_SEC)
        ]);
        const data = await respond.json();
        if (!respond.ok) throw new Error(`${data.message} (${respond.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Hi5l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ProfileView extends _viewDefault.default {
    _errorMessage = `We could not find this profile.<br> Please try again!`;
    _clearElements = document.querySelector('.field-wrapper');
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler)
        );
    }
    _clearLeftovers() {
        this._clearElements.innerHTML = ``;
        document.querySelector('.most__wanted-p').textContent = ``;
    }
    _generateMarkup() {
        this._clearRubbish();
        return `
    <div class="fugitive__portfolio">
        <h1 class="fugitive__name">${this._data.title}</h1>
        <p class="fugitive__description">
          ${this._data.description}
        </p>

        <div class="fugitive__top-field">
          <div class="fugitive__top-person">
            <img src="${this._data.images[0].original}" alt="" />
          </div>
          <div class="fugitive__top-poster">
            <a href='${this._data.files[0].url}' target="_blank">
              <img src='${this._data.files[0].url.slice(0, this._data.files[0].url.lastIndexOf('/'))}/@@screenshot.gif'>
            </a>
            <p>
             <a href='${this._data.files[0].url}' target="_blank">View Poster</a>
             </p>
            
          </div>
          <div class="fugitive__poster-download">
            <h3>Download Poster</h3>
            <ul>
            ${this._data.files.map((file)=>{
            return `
              <li>
                <a href="${file.url}" target="_blank">${file.name}</a>
              </li>
              `;
        }).join("")}
            </ul>
          </div>
        </div>
        <div class="fugitive__photo-gallery">
          <ul>
          ${this._data.images.map((photo)=>{
            return `
                <li>
                  <img src="${photo.thumb}" alt="" />
                </li>`;
        }).join("")}
          </ul>
        </div>
        <span class="straight__line"></span>

        ${this._data.aliases == null ? '' : `<h2 class="fugitive__aliases">Aliases:</h2>
        <p class="fugitive__aliases-names">${this._data.aliases.map(aliase)}</p>`}
        
        ${this._data.info == null ? `` : `<table>
        ${this._data.info.map((f)=>{
            if (f[1] === null || f[1] === '' || f[1] === undefined) return;
            return `
          <tr>
            <td>${f[0]}</td>
            <td>${f[1]}</td>
          </tr>
          `;
        }).join("")}
        </table>`}
        
        ${this._data.details ? `<div class="fugitive__details">
          <h2>Details:</h2>
          <p>${this._data.details}</p>
        </div>` : ``}

        ${this._data.rewardM ? `<div class="fugitive__reward">
          <h2>Reward:</h2>
          <p>${this._data.rewardM}</p>
        </div>` : ``}

        ${this._data.remarks ? `<div class="fugitive__remarks">
          <h2>Remarks: </h2>
          <p>${this._data.remarks}</p>
        </div>` : ``}

        ${this._data.cautions ? `<div class="fugitive__caution">
          <h2>Caution:</h2>
          <p>
            ${this._data.cautions}
          </p>
        </div>` : ``}

        ${this._data.warningM ? `<div class="fugitive__warning-message">
          <p>${this._data.warningM}</p>
        </div>` : ``}
        
        <div class="fugitive__tips">
          <p>
            <b>Anyone with information is requested to call the Tip Line or submit tips online. All information will be taken and followed up on by investigators. Callers can remain anonymous.</b>
          </p>
          ${this._data.fieldOffice ? `<div class="fugitive__field-office">
            <p>Field Office:</p>
            <span>${this._data.fieldOffice} </span>
          </div>
          ` : ``}
          

          <a
            class="fugitive__tips-link"
            href="https://tips.fbi.gov/"
            target="_blank"
          >
            Submit an anonymous Tip online
          </a>
        </div>

      </div>      
    `;
    }
}
exports.default = new ProfileView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./View":"5cUXS"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _remixiconCss = require("remixicon/fonts/remixicon.css");
class View {
    _parentElement = document.querySelector(".fugitive__show");
    _data;
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    _clear() {
        this._parentElement.innerHTML = ``;
    }
    renderSpinner() {
        const markup = `
        <div id="bars3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
        <div class="message__error">
        <i class="ri-file-unknow-line"></i>
          <p>${message}</p>
        </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","remixicon/fonts/remixicon.css":"5hrvo"}],"5hrvo":[function() {},{}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SearchView extends _viewDefault.default {
    _parentElement = document.querySelector(".preview__header");
    _parentFugitiveElement = document.querySelector('.preview');
    getQuery() {
        const query = this._parentElement.querySelector('.select__category-input').value;
        this._clearInput();
        let queryLow = query.split(' ').join('').toLowerCase();
        return queryLow;
    }
    _clearInput() {
        this._parentElement.querySelector('.select__category-input').value = ``;
    }
    _clear() {
        this._parentFugitiveElement.innerHTML = ``;
    }
    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._parentFugitiveElement.insertAdjacentHTML("beforeend", markup);
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
    _generateMarkup() {
        return this._data.map((d)=>{
            return `
          <li>
            <a href="${d.path.slice(0, d.path.lastIndexOf('/'))}#${d.uid}" class="preview__link" data-crime="${d.path}">
              <figure>
                <img src="${d.images[0].large}" alt="fugitive"/>
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${d.title}</h4>
                <p class="preview__crime">${d.subject[0]}</p>
              </div>
            </a>
          </li>`;
        }).join("");
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./View":"5cUXS"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _remixiconCss = require("remixicon/fonts/remixicon.css");
class PaginationView extends _viewDefault.default {
    _parentElement = document.querySelector('.pagination');
    _generateMarkup() {
        const currentPage = this._data.search.page;
        const numPages = Math.ceil(this._data.total / this._data.search.resultsPerPage);
        console.log(this._data.total, this._data.search.resultsPerPage, currentPage);
        // page 1 + other pages
        if (currentPage === 1 && numPages > 1) return ` <button data-goto='${currentPage + 1}' class="btn__next btn__page">
                      <span class="page">Page</span>
                      <span class="page__number">${currentPage + 1}</span>
                      <i class="ri-arrow-right-line"></i>
                    </button>`;
        // last page
        if (currentPage === numPages && numPages > 1) return `<button data-backto='${currentPage - 1}' class="btn__prev btn__page">
                      <i class="ri-arrow-left-line"></i>
                      <span class="page">Page</span>
                      <span class="page__number">${currentPage - 1}</span>
                    </button>`;
        // other pages
        if (currentPage < numPages) return `<button data-backto='${currentPage - 1}' class="btn__prev btn__page">
                     <i class="ri-arrow-left-line"></i>
                      <span class="page">Page</span>
                      <span class="page__number">${currentPage - 1}</span>
                    </button>
                    <button data-goto='${currentPage + 1}' class="btn__next btn__page">
                      <span class="page">Page</span>
                      <span class="page__number">${currentPage + 1}</span>
                      <i class="ri-arrow-right-line"></i>
                    </button>`;
        // page 1 + no pages
        return ' 1 page';
    }
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn__page');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
}
exports.default = new PaginationView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","remixicon/fonts/remixicon.css":"5hrvo"}],"5hrvo":[function() {},{}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ResultsView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.preview');
    _errorMessage = `No cases found! <br> Check your request out again!`;
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join("");
    }
    _generateMarkupPreview(result) {
        return `
    
          <li>
            <a href="${result.path.slice(0, result.path.lastIndexOf('/'))}#${result.uid}" class="preview__link" data-crime="${result.path}">
              <figure>
                <img src="${result.images[0].large}" alt="fugitive"/>
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__crime">${result.subject[0]}</p>
              </div>
            </a>
          </li>`;
    }
}
exports.default = new ResultsView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7yNqf","bznnK"], "bznnK", "parcelRequire27e7")

//# sourceMappingURL=index.c6ba43f4.js.map
