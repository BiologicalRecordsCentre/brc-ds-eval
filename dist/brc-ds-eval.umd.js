(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.brcdseval = {}, global.d3));
}(this, (function (exports, d3) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var d3__namespace = /*#__PURE__*/_interopNamespace(d3);
  var d3__default = /*#__PURE__*/_interopDefaultLegacy(d3);

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof$1(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof$1 = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof$1 = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof$1(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
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

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var dateformat = createCommonjsModule(function (module, exports) {

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    (function (global) {
      var _arguments = arguments;

      var dateFormat = function () {
        var token = /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g;
        var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
        var timezoneClip = /[^-+\dA-Z]/g;
        return function (date, mask, utc, gmt) {
          if (_arguments.length === 1 && kindOf(date) === "string" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
          }

          date = date || date === 0 ? date : new Date();

          if (!(date instanceof Date)) {
            date = new Date(date);
          }

          if (isNaN(date)) {
            throw TypeError("Invalid date");
          }

          mask = String(dateFormat.masks[mask] || mask || dateFormat.masks["default"]);
          var maskSlice = mask.slice(0, 4);

          if (maskSlice === "UTC:" || maskSlice === "GMT:") {
            mask = mask.slice(4);
            utc = true;

            if (maskSlice === "GMT:") {
              gmt = true;
            }
          }

          var _ = function _() {
            return utc ? "getUTC" : "get";
          };

          var _d = function d() {
            return date[_() + "Date"]();
          };

          var D = function D() {
            return date[_() + "Day"]();
          };

          var _m = function m() {
            return date[_() + "Month"]();
          };

          var y = function y() {
            return date[_() + "FullYear"]();
          };

          var _H = function H() {
            return date[_() + "Hours"]();
          };

          var _M = function M() {
            return date[_() + "Minutes"]();
          };

          var _s = function s() {
            return date[_() + "Seconds"]();
          };

          var _L = function L() {
            return date[_() + "Milliseconds"]();
          };

          var _o = function o() {
            return utc ? 0 : date.getTimezoneOffset();
          };

          var _W = function W() {
            return getWeek(date);
          };

          var _N = function N() {
            return getDayOfWeek(date);
          };

          var flags = {
            d: function d() {
              return _d();
            },
            dd: function dd() {
              return pad(_d());
            },
            ddd: function ddd() {
              return dateFormat.i18n.dayNames[D()];
            },
            DDD: function DDD() {
              return getDayName({
                y: y(),
                m: _m(),
                d: _d(),
                _: _(),
                dayName: dateFormat.i18n.dayNames[D()],
                "short": true
              });
            },
            dddd: function dddd() {
              return dateFormat.i18n.dayNames[D() + 7];
            },
            DDDD: function DDDD() {
              return getDayName({
                y: y(),
                m: _m(),
                d: _d(),
                _: _(),
                dayName: dateFormat.i18n.dayNames[D() + 7]
              });
            },
            m: function m() {
              return _m() + 1;
            },
            mm: function mm() {
              return pad(_m() + 1);
            },
            mmm: function mmm() {
              return dateFormat.i18n.monthNames[_m()];
            },
            mmmm: function mmmm() {
              return dateFormat.i18n.monthNames[_m() + 12];
            },
            yy: function yy() {
              return String(y()).slice(2);
            },
            yyyy: function yyyy() {
              return pad(y(), 4);
            },
            h: function h() {
              return _H() % 12 || 12;
            },
            hh: function hh() {
              return pad(_H() % 12 || 12);
            },
            H: function H() {
              return _H();
            },
            HH: function HH() {
              return pad(_H());
            },
            M: function M() {
              return _M();
            },
            MM: function MM() {
              return pad(_M());
            },
            s: function s() {
              return _s();
            },
            ss: function ss() {
              return pad(_s());
            },
            l: function l() {
              return pad(_L(), 3);
            },
            L: function L() {
              return pad(Math.floor(_L() / 10));
            },
            t: function t() {
              return _H() < 12 ? dateFormat.i18n.timeNames[0] : dateFormat.i18n.timeNames[1];
            },
            tt: function tt() {
              return _H() < 12 ? dateFormat.i18n.timeNames[2] : dateFormat.i18n.timeNames[3];
            },
            T: function T() {
              return _H() < 12 ? dateFormat.i18n.timeNames[4] : dateFormat.i18n.timeNames[5];
            },
            TT: function TT() {
              return _H() < 12 ? dateFormat.i18n.timeNames[6] : dateFormat.i18n.timeNames[7];
            },
            Z: function Z() {
              return gmt ? "GMT" : utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, "").replace(/GMT\+0000/g, "UTC");
            },
            o: function o() {
              return (_o() > 0 ? "-" : "+") + pad(Math.floor(Math.abs(_o()) / 60) * 100 + Math.abs(_o()) % 60, 4);
            },
            p: function p() {
              return (_o() > 0 ? "-" : "+") + pad(Math.floor(Math.abs(_o()) / 60), 2) + ":" + pad(Math.floor(Math.abs(_o()) % 60), 2);
            },
            S: function S() {
              return ["th", "st", "nd", "rd"][_d() % 10 > 3 ? 0 : (_d() % 100 - _d() % 10 != 10) * _d() % 10];
            },
            W: function W() {
              return _W();
            },
            WW: function WW() {
              return pad(_W());
            },
            N: function N() {
              return _N();
            }
          };
          return mask.replace(token, function (match) {
            if (match in flags) {
              return flags[match]();
            }

            return match.slice(1, match.length - 1);
          });
        };
      }();

      dateFormat.masks = {
        "default": "ddd mmm dd yyyy HH:MM:ss",
        shortDate: "m/d/yy",
        paddedShortDate: "mm/dd/yyyy",
        mediumDate: "mmm d, yyyy",
        longDate: "mmmm d, yyyy",
        fullDate: "dddd, mmmm d, yyyy",
        shortTime: "h:MM TT",
        mediumTime: "h:MM:ss TT",
        longTime: "h:MM:ss TT Z",
        isoDate: "yyyy-mm-dd",
        isoTime: "HH:MM:ss",
        isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
        expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z"
      };
      dateFormat.i18n = {
        dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]
      };

      var pad = function pad(val, len) {
        val = String(val);
        len = len || 2;

        while (val.length < len) {
          val = "0" + val;
        }

        return val;
      };

      var getDayName = function getDayName(_ref) {
        var y = _ref.y,
            m = _ref.m,
            d = _ref.d,
            _ = _ref._,
            dayName = _ref.dayName,
            _ref$short = _ref["short"],
            _short = _ref$short === void 0 ? false : _ref$short;

        var today = new Date();
        var yesterday = new Date();
        yesterday.setDate(yesterday[_ + "Date"]() - 1);
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow[_ + "Date"]() + 1);

        var today_d = function today_d() {
          return today[_ + "Date"]();
        };

        var today_m = function today_m() {
          return today[_ + "Month"]();
        };

        var today_y = function today_y() {
          return today[_ + "FullYear"]();
        };

        var yesterday_d = function yesterday_d() {
          return yesterday[_ + "Date"]();
        };

        var yesterday_m = function yesterday_m() {
          return yesterday[_ + "Month"]();
        };

        var yesterday_y = function yesterday_y() {
          return yesterday[_ + "FullYear"]();
        };

        var tomorrow_d = function tomorrow_d() {
          return tomorrow[_ + "Date"]();
        };

        var tomorrow_m = function tomorrow_m() {
          return tomorrow[_ + "Month"]();
        };

        var tomorrow_y = function tomorrow_y() {
          return tomorrow[_ + "FullYear"]();
        };

        if (today_y() === y && today_m() === m && today_d() === d) {
          return _short ? "Tdy" : "Today";
        } else if (yesterday_y() === y && yesterday_m() === m && yesterday_d() === d) {
          return _short ? "Ysd" : "Yesterday";
        } else if (tomorrow_y() === y && tomorrow_m() === m && tomorrow_d() === d) {
          return _short ? "Tmw" : "Tomorrow";
        }

        return dayName;
      };

      var getWeek = function getWeek(date) {
        var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);
        var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
        firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
        var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
        targetThursday.setHours(targetThursday.getHours() - ds);
        var weekDiff = (targetThursday - firstThursday) / (864e5 * 7);
        return 1 + Math.floor(weekDiff);
      };

      var getDayOfWeek = function getDayOfWeek(date) {
        var dow = date.getDay();

        if (dow === 0) {
          dow = 7;
        }

        return dow;
      };

      var kindOf = function kindOf(val) {
        if (val === null) {
          return "null";
        }

        if (val === undefined) {
          return "undefined";
        }

        if (_typeof(val) !== "object") {
          return _typeof(val);
        }

        if (Array.isArray(val)) {
          return "array";
        }

        return {}.toString.call(val).slice(8, -1).toLowerCase();
      };

      if ((_typeof(exports)) === "object") {
        module.exports = dateFormat;
      } else {
        global.dateFormat = dateFormat;
      }
    })(void 0);
  });

  function globals (defs) {
    defs('EPSG:4326', "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
    defs('EPSG:4269', "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees");
    defs('EPSG:3857', "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");
    defs.WGS84 = defs['EPSG:4326'];
    defs['EPSG:3785'] = defs['EPSG:3857']; // maintain backward compat, official code is 3857

    defs.GOOGLE = defs['EPSG:3857'];
    defs['EPSG:900913'] = defs['EPSG:3857'];
    defs['EPSG:102113'] = defs['EPSG:3857'];
  }

  var PJD_3PARAM = 1;
  var PJD_7PARAM = 2;
  var PJD_GRIDSHIFT = 3;
  var PJD_WGS84 = 4; // WGS84 or equivalent

  var PJD_NODATUM = 5; // WGS84 or equivalent

  var SRS_WGS84_SEMIMAJOR = 6378137.0; // only used in grid shift transforms

  var SRS_WGS84_SEMIMINOR = 6356752.314; // only used in grid shift transforms

  var SRS_WGS84_ESQUARED = 0.0066943799901413165; // only used in grid shift transforms

  var SEC_TO_RAD = 4.84813681109535993589914102357e-6;
  var HALF_PI = Math.PI / 2; // ellipoid pj_set_ell.c

  var SIXTH = 0.1666666666666666667;
  /* 1/6 */

  var RA4 = 0.04722222222222222222;
  /* 17/360 */

  var RA6 = 0.02215608465608465608;
  var EPSLN = 1.0e-10; // you'd think you could use Number.EPSILON above but that makes
  // Mollweide get into an infinate loop.

  var D2R$1 = 0.01745329251994329577;
  var R2D = 57.29577951308232088;
  var FORTPI = Math.PI / 4;
  var TWO_PI = Math.PI * 2; // SPI is slightly greater than Math.PI, so values that exceed the -180..180
  // degree range by a tiny amount don't get wrapped. This prevents points that
  // have drifted from their original location along the 180th meridian (due to
  // floating point error) from changing their sign.

  var SPI = 3.14159265359;

  var exports$3 = {};
  exports$3.greenwich = 0.0; //"0dE",

  exports$3.lisbon = -9.131906111111; //"9d07'54.862\"W",

  exports$3.paris = 2.337229166667; //"2d20'14.025\"E",

  exports$3.bogota = -74.080916666667; //"74d04'51.3\"W",

  exports$3.madrid = -3.687938888889; //"3d41'16.58\"W",

  exports$3.rome = 12.452333333333; //"12d27'8.4\"E",

  exports$3.bern = 7.439583333333; //"7d26'22.5\"E",

  exports$3.jakarta = 106.807719444444; //"106d48'27.79\"E",

  exports$3.ferro = -17.666666666667; //"17d40'W",

  exports$3.brussels = 4.367975; //"4d22'4.71\"E",

  exports$3.stockholm = 18.058277777778; //"18d3'29.8\"E",

  exports$3.athens = 23.7163375; //"23d42'58.815\"E",

  exports$3.oslo = 10.722916666667; //"10d43'22.5\"E"

  var _units = {
    ft: {
      to_meter: 0.3048
    },
    'us-ft': {
      to_meter: 1200 / 3937
    }
  };

  var ignoredChar = /[\s_\-\/\(\)]/g;
  function match(obj, key) {
    if (obj[key]) {
      return obj[key];
    }

    var keys = Object.keys(obj);
    var lkey = key.toLowerCase().replace(ignoredChar, '');
    var i = -1;
    var testkey, processedKey;

    while (++i < keys.length) {
      testkey = keys[i];
      processedKey = testkey.toLowerCase().replace(ignoredChar, '');

      if (processedKey === lkey) {
        return obj[testkey];
      }
    }
  }

  function projStr (defData) {
    var self = {};
    var paramObj = defData.split('+').map(function (v) {
      return v.trim();
    }).filter(function (a) {
      return a;
    }).reduce(function (p, a) {
      var split = a.split('=');
      split.push(true);
      p[split[0].toLowerCase()] = split[1];
      return p;
    }, {});
    var paramName, paramVal, paramOutname;
    var params = {
      proj: 'projName',
      datum: 'datumCode',
      rf: function rf(v) {
        self.rf = parseFloat(v);
      },
      lat_0: function lat_0(v) {
        self.lat0 = v * D2R$1;
      },
      lat_1: function lat_1(v) {
        self.lat1 = v * D2R$1;
      },
      lat_2: function lat_2(v) {
        self.lat2 = v * D2R$1;
      },
      lat_ts: function lat_ts(v) {
        self.lat_ts = v * D2R$1;
      },
      lon_0: function lon_0(v) {
        self.long0 = v * D2R$1;
      },
      lon_1: function lon_1(v) {
        self.long1 = v * D2R$1;
      },
      lon_2: function lon_2(v) {
        self.long2 = v * D2R$1;
      },
      alpha: function alpha(v) {
        self.alpha = parseFloat(v) * D2R$1;
      },
      gamma: function gamma(v) {
        self.rectified_grid_angle = parseFloat(v);
      },
      lonc: function lonc(v) {
        self.longc = v * D2R$1;
      },
      x_0: function x_0(v) {
        self.x0 = parseFloat(v);
      },
      y_0: function y_0(v) {
        self.y0 = parseFloat(v);
      },
      k_0: function k_0(v) {
        self.k0 = parseFloat(v);
      },
      k: function k(v) {
        self.k0 = parseFloat(v);
      },
      a: function a(v) {
        self.a = parseFloat(v);
      },
      b: function b(v) {
        self.b = parseFloat(v);
      },
      r_a: function r_a() {
        self.R_A = true;
      },
      zone: function zone(v) {
        self.zone = parseInt(v, 10);
      },
      south: function south() {
        self.utmSouth = true;
      },
      towgs84: function towgs84(v) {
        self.datum_params = v.split(",").map(function (a) {
          return parseFloat(a);
        });
      },
      to_meter: function to_meter(v) {
        self.to_meter = parseFloat(v);
      },
      units: function units(v) {
        self.units = v;
        var unit = match(_units, v);

        if (unit) {
          self.to_meter = unit.to_meter;
        }
      },
      from_greenwich: function from_greenwich(v) {
        self.from_greenwich = v * D2R$1;
      },
      pm: function pm(v) {
        var pm = match(exports$3, v);
        self.from_greenwich = (pm ? pm : parseFloat(v)) * D2R$1;
      },
      nadgrids: function nadgrids(v) {
        if (v === '@null') {
          self.datumCode = 'none';
        } else {
          self.nadgrids = v;
        }
      },
      axis: function axis(v) {
        var legalAxis = "ewnsud";

        if (v.length === 3 && legalAxis.indexOf(v.substr(0, 1)) !== -1 && legalAxis.indexOf(v.substr(1, 1)) !== -1 && legalAxis.indexOf(v.substr(2, 1)) !== -1) {
          self.axis = v;
        }
      },
      approx: function approx() {
        self.approx = true;
      }
    };

    for (paramName in paramObj) {
      paramVal = paramObj[paramName];

      if (paramName in params) {
        paramOutname = params[paramName];

        if (typeof paramOutname === 'function') {
          paramOutname(paramVal);
        } else {
          self[paramOutname] = paramVal;
        }
      } else {
        self[paramName] = paramVal;
      }
    }

    if (typeof self.datumCode === 'string' && self.datumCode !== "WGS84") {
      self.datumCode = self.datumCode.toLowerCase();
    }

    return self;
  }

  var NEUTRAL = 1;
  var KEYWORD = 2;
  var NUMBER = 3;
  var QUOTED = 4;
  var AFTERQUOTE = 5;
  var ENDED = -1;
  var whitespace = /\s/;
  var latin = /[A-Za-z]/;
  var keyword = /[A-Za-z84]/;
  var endThings = /[,\]]/;
  var digets = /[\d\.E\-\+]/; // const ignoredChar = /[\s_\-\/\(\)]/g;

  function Parser(text) {
    if (typeof text !== 'string') {
      throw new Error('not a string');
    }

    this.text = text.trim();
    this.level = 0;
    this.place = 0;
    this.root = null;
    this.stack = [];
    this.currentObject = null;
    this.state = NEUTRAL;
  }

  Parser.prototype.readCharicter = function () {
    var _char = this.text[this.place++];

    if (this.state !== QUOTED) {
      while (whitespace.test(_char)) {
        if (this.place >= this.text.length) {
          return;
        }

        _char = this.text[this.place++];
      }
    }

    switch (this.state) {
      case NEUTRAL:
        return this.neutral(_char);

      case KEYWORD:
        return this.keyword(_char);

      case QUOTED:
        return this.quoted(_char);

      case AFTERQUOTE:
        return this.afterquote(_char);

      case NUMBER:
        return this.number(_char);

      case ENDED:
        return;
    }
  };

  Parser.prototype.afterquote = function (_char2) {
    if (_char2 === '"') {
      this.word += '"';
      this.state = QUOTED;
      return;
    }

    if (endThings.test(_char2)) {
      this.word = this.word.trim();
      this.afterItem(_char2);
      return;
    }

    throw new Error('havn\'t handled "' + _char2 + '" in afterquote yet, index ' + this.place);
  };

  Parser.prototype.afterItem = function (_char3) {
    if (_char3 === ',') {
      if (this.word !== null) {
        this.currentObject.push(this.word);
      }

      this.word = null;
      this.state = NEUTRAL;
      return;
    }

    if (_char3 === ']') {
      this.level--;

      if (this.word !== null) {
        this.currentObject.push(this.word);
        this.word = null;
      }

      this.state = NEUTRAL;
      this.currentObject = this.stack.pop();

      if (!this.currentObject) {
        this.state = ENDED;
      }

      return;
    }
  };

  Parser.prototype.number = function (_char4) {
    if (digets.test(_char4)) {
      this.word += _char4;
      return;
    }

    if (endThings.test(_char4)) {
      this.word = parseFloat(this.word);
      this.afterItem(_char4);
      return;
    }

    throw new Error('havn\'t handled "' + _char4 + '" in number yet, index ' + this.place);
  };

  Parser.prototype.quoted = function (_char5) {
    if (_char5 === '"') {
      this.state = AFTERQUOTE;
      return;
    }

    this.word += _char5;
    return;
  };

  Parser.prototype.keyword = function (_char6) {
    if (keyword.test(_char6)) {
      this.word += _char6;
      return;
    }

    if (_char6 === '[') {
      var newObjects = [];
      newObjects.push(this.word);
      this.level++;

      if (this.root === null) {
        this.root = newObjects;
      } else {
        this.currentObject.push(newObjects);
      }

      this.stack.push(this.currentObject);
      this.currentObject = newObjects;
      this.state = NEUTRAL;
      return;
    }

    if (endThings.test(_char6)) {
      this.afterItem(_char6);
      return;
    }

    throw new Error('havn\'t handled "' + _char6 + '" in keyword yet, index ' + this.place);
  };

  Parser.prototype.neutral = function (_char7) {
    if (latin.test(_char7)) {
      this.word = _char7;
      this.state = KEYWORD;
      return;
    }

    if (_char7 === '"') {
      this.word = '';
      this.state = QUOTED;
      return;
    }

    if (digets.test(_char7)) {
      this.word = _char7;
      this.state = NUMBER;
      return;
    }

    if (endThings.test(_char7)) {
      this.afterItem(_char7);
      return;
    }

    throw new Error('havn\'t handled "' + _char7 + '" in neutral yet, index ' + this.place);
  };

  Parser.prototype.output = function () {
    while (this.place < this.text.length) {
      this.readCharicter();
    }

    if (this.state === ENDED) {
      return this.root;
    }

    throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
  };

  function parseString(txt) {
    var parser = new Parser(txt);
    return parser.output();
  }

  function mapit(obj, key, value) {
    if (Array.isArray(key)) {
      value.unshift(key);
      key = null;
    }

    var thing = key ? {} : obj;
    var out = value.reduce(function (newObj, item) {
      sExpr(item, newObj);
      return newObj;
    }, thing);

    if (key) {
      obj[key] = out;
    }
  }

  function sExpr(v, obj) {
    if (!Array.isArray(v)) {
      obj[v] = true;
      return;
    }

    var key = v.shift();

    if (key === 'PARAMETER') {
      key = v.shift();
    }

    if (v.length === 1) {
      if (Array.isArray(v[0])) {
        obj[key] = {};
        sExpr(v[0], obj[key]);
        return;
      }

      obj[key] = v[0];
      return;
    }

    if (!v.length) {
      obj[key] = true;
      return;
    }

    if (key === 'TOWGS84') {
      obj[key] = v;
      return;
    }

    if (key === 'AXIS') {
      if (!(key in obj)) {
        obj[key] = [];
      }

      obj[key].push(v);
      return;
    }

    if (!Array.isArray(key)) {
      obj[key] = {};
    }

    var i;

    switch (key) {
      case 'UNIT':
      case 'PRIMEM':
      case 'VERT_DATUM':
        obj[key] = {
          name: v[0].toLowerCase(),
          convert: v[1]
        };

        if (v.length === 3) {
          sExpr(v[2], obj[key]);
        }

        return;

      case 'SPHEROID':
      case 'ELLIPSOID':
        obj[key] = {
          name: v[0],
          a: v[1],
          rf: v[2]
        };

        if (v.length === 4) {
          sExpr(v[3], obj[key]);
        }

        return;

      case 'PROJECTEDCRS':
      case 'PROJCRS':
      case 'GEOGCS':
      case 'GEOCCS':
      case 'PROJCS':
      case 'LOCAL_CS':
      case 'GEODCRS':
      case 'GEODETICCRS':
      case 'GEODETICDATUM':
      case 'EDATUM':
      case 'ENGINEERINGDATUM':
      case 'VERT_CS':
      case 'VERTCRS':
      case 'VERTICALCRS':
      case 'COMPD_CS':
      case 'COMPOUNDCRS':
      case 'ENGINEERINGCRS':
      case 'ENGCRS':
      case 'FITTED_CS':
      case 'LOCAL_DATUM':
      case 'DATUM':
        v[0] = ['name', v[0]];
        mapit(obj, key, v);
        return;

      default:
        i = -1;

        while (++i < v.length) {
          if (!Array.isArray(v[i])) {
            return sExpr(v, obj[key]);
          }
        }

        return mapit(obj, key, v);
    }
  }

  var D2R = 0.01745329251994329577;

  function rename(obj, params) {
    var outName = params[0];
    var inName = params[1];

    if (!(outName in obj) && inName in obj) {
      obj[outName] = obj[inName];

      if (params.length === 3) {
        obj[outName] = params[2](obj[outName]);
      }
    }
  }

  function d2r(input) {
    return input * D2R;
  }

  function cleanWKT(wkt) {
    if (wkt.type === 'GEOGCS') {
      wkt.projName = 'longlat';
    } else if (wkt.type === 'LOCAL_CS') {
      wkt.projName = 'identity';
      wkt.local = true;
    } else {
      if (_typeof$1(wkt.PROJECTION) === 'object') {
        wkt.projName = Object.keys(wkt.PROJECTION)[0];
      } else {
        wkt.projName = wkt.PROJECTION;
      }
    }

    if (wkt.AXIS) {
      var axisOrder = '';

      for (var i = 0, ii = wkt.AXIS.length; i < ii; ++i) {
        var axis = wkt.AXIS[i];
        var descriptor = axis[0].toLowerCase();

        if (descriptor.indexOf('north') !== -1) {
          axisOrder += 'n';
        } else if (descriptor.indexOf('south') !== -1) {
          axisOrder += 's';
        } else if (descriptor.indexOf('east') !== -1) {
          axisOrder += 'e';
        } else if (descriptor.indexOf('west') !== -1) {
          axisOrder += 'w';
        }
      }

      if (axisOrder.length === 2) {
        axisOrder += 'u';
      }

      if (axisOrder.length === 3) {
        wkt.axis = axisOrder;
      }
    }

    if (wkt.UNIT) {
      wkt.units = wkt.UNIT.name.toLowerCase();

      if (wkt.units === 'metre') {
        wkt.units = 'meter';
      }

      if (wkt.UNIT.convert) {
        if (wkt.type === 'GEOGCS') {
          if (wkt.DATUM && wkt.DATUM.SPHEROID) {
            wkt.to_meter = wkt.UNIT.convert * wkt.DATUM.SPHEROID.a;
          }
        } else {
          wkt.to_meter = wkt.UNIT.convert;
        }
      }
    }

    var geogcs = wkt.GEOGCS;

    if (wkt.type === 'GEOGCS') {
      geogcs = wkt;
    }

    if (geogcs) {
      //if(wkt.GEOGCS.PRIMEM&&wkt.GEOGCS.PRIMEM.convert){
      //  wkt.from_greenwich=wkt.GEOGCS.PRIMEM.convert*D2R;
      //}
      if (geogcs.DATUM) {
        wkt.datumCode = geogcs.DATUM.name.toLowerCase();
      } else {
        wkt.datumCode = geogcs.name.toLowerCase();
      }

      if (wkt.datumCode.slice(0, 2) === 'd_') {
        wkt.datumCode = wkt.datumCode.slice(2);
      }

      if (wkt.datumCode === 'new_zealand_geodetic_datum_1949' || wkt.datumCode === 'new_zealand_1949') {
        wkt.datumCode = 'nzgd49';
      }

      if (wkt.datumCode === 'wgs_1984' || wkt.datumCode === 'world_geodetic_system_1984') {
        if (wkt.PROJECTION === 'Mercator_Auxiliary_Sphere') {
          wkt.sphere = true;
        }

        wkt.datumCode = 'wgs84';
      }

      if (wkt.datumCode.slice(-6) === '_ferro') {
        wkt.datumCode = wkt.datumCode.slice(0, -6);
      }

      if (wkt.datumCode.slice(-8) === '_jakarta') {
        wkt.datumCode = wkt.datumCode.slice(0, -8);
      }

      if (~wkt.datumCode.indexOf('belge')) {
        wkt.datumCode = 'rnb72';
      }

      if (geogcs.DATUM && geogcs.DATUM.SPHEROID) {
        wkt.ellps = geogcs.DATUM.SPHEROID.name.replace('_19', '').replace(/[Cc]larke\_18/, 'clrk');

        if (wkt.ellps.toLowerCase().slice(0, 13) === 'international') {
          wkt.ellps = 'intl';
        }

        wkt.a = geogcs.DATUM.SPHEROID.a;
        wkt.rf = parseFloat(geogcs.DATUM.SPHEROID.rf, 10);
      }

      if (geogcs.DATUM && geogcs.DATUM.TOWGS84) {
        wkt.datum_params = geogcs.DATUM.TOWGS84;
      }

      if (~wkt.datumCode.indexOf('osgb_1936')) {
        wkt.datumCode = 'osgb36';
      }

      if (~wkt.datumCode.indexOf('osni_1952')) {
        wkt.datumCode = 'osni52';
      }

      if (~wkt.datumCode.indexOf('tm65') || ~wkt.datumCode.indexOf('geodetic_datum_of_1965')) {
        wkt.datumCode = 'ire65';
      }

      if (wkt.datumCode === 'ch1903+') {
        wkt.datumCode = 'ch1903';
      }

      if (~wkt.datumCode.indexOf('israel')) {
        wkt.datumCode = 'isr93';
      }
    }

    if (wkt.b && !isFinite(wkt.b)) {
      wkt.b = wkt.a;
    }

    function toMeter(input) {
      var ratio = wkt.to_meter || 1;
      return input * ratio;
    }

    var renamer = function renamer(a) {
      return rename(wkt, a);
    };

    var list = [['standard_parallel_1', 'Standard_Parallel_1'], ['standard_parallel_2', 'Standard_Parallel_2'], ['false_easting', 'False_Easting'], ['false_northing', 'False_Northing'], ['central_meridian', 'Central_Meridian'], ['latitude_of_origin', 'Latitude_Of_Origin'], ['latitude_of_origin', 'Central_Parallel'], ['scale_factor', 'Scale_Factor'], ['k0', 'scale_factor'], ['latitude_of_center', 'Latitude_Of_Center'], ['latitude_of_center', 'Latitude_of_center'], ['lat0', 'latitude_of_center', d2r], ['longitude_of_center', 'Longitude_Of_Center'], ['longitude_of_center', 'Longitude_of_center'], ['longc', 'longitude_of_center', d2r], ['x0', 'false_easting', toMeter], ['y0', 'false_northing', toMeter], ['long0', 'central_meridian', d2r], ['lat0', 'latitude_of_origin', d2r], ['lat0', 'standard_parallel_1', d2r], ['lat1', 'standard_parallel_1', d2r], ['lat2', 'standard_parallel_2', d2r], ['azimuth', 'Azimuth'], ['alpha', 'azimuth', d2r], ['srsCode', 'name']];
    list.forEach(renamer);

    if (!wkt.long0 && wkt.longc && (wkt.projName === 'Albers_Conic_Equal_Area' || wkt.projName === 'Lambert_Azimuthal_Equal_Area')) {
      wkt.long0 = wkt.longc;
    }

    if (!wkt.lat_ts && wkt.lat1 && (wkt.projName === 'Stereographic_South_Pole' || wkt.projName === 'Polar Stereographic (variant B)')) {
      wkt.lat0 = d2r(wkt.lat1 > 0 ? 90 : -90);
      wkt.lat_ts = wkt.lat1;
    }
  }

  function wkt (wkt) {
    var lisp = parseString(wkt);
    var type = lisp.shift();
    var name = lisp.shift();
    lisp.unshift(['name', name]);
    lisp.unshift(['type', type]);
    var obj = {};
    sExpr(lisp, obj);
    cleanWKT(obj);
    return obj;
  }

  function defs(name) {
    /*global console*/
    var that = this;

    if (arguments.length === 2) {
      var def = arguments[1];

      if (typeof def === 'string') {
        if (def.charAt(0) === '+') {
          defs[name] = projStr(arguments[1]);
        } else {
          defs[name] = wkt(arguments[1]);
        }
      } else {
        defs[name] = def;
      }
    } else if (arguments.length === 1) {
      if (Array.isArray(name)) {
        return name.map(function (v) {
          if (Array.isArray(v)) {
            defs.apply(that, v);
          } else {
            defs(v);
          }
        });
      } else if (typeof name === 'string') {
        if (name in defs) {
          return defs[name];
        }
      } else if ('EPSG' in name) {
        defs['EPSG:' + name.EPSG] = name;
      } else if ('ESRI' in name) {
        defs['ESRI:' + name.ESRI] = name;
      } else if ('IAU2000' in name) {
        defs['IAU2000:' + name.IAU2000] = name;
      } else {
        console.log(name);
      }

      return;
    }
  }

  globals(defs);

  function testObj(code) {
    return typeof code === 'string';
  }

  function testDef(code) {
    return code in defs;
  }

  var codeWords = ['PROJECTEDCRS', 'PROJCRS', 'GEOGCS', 'GEOCCS', 'PROJCS', 'LOCAL_CS', 'GEODCRS', 'GEODETICCRS', 'GEODETICDATUM', 'ENGCRS', 'ENGINEERINGCRS'];

  function testWKT(code) {
    return codeWords.some(function (word) {
      return code.indexOf(word) > -1;
    });
  }

  var codes = ['3857', '900913', '3785', '102113'];

  function checkMercator(item) {
    var auth = match(item, 'authority');

    if (!auth) {
      return;
    }

    var code = match(auth, 'epsg');
    return code && codes.indexOf(code) > -1;
  }

  function checkProjStr(item) {
    var ext = match(item, 'extension');

    if (!ext) {
      return;
    }

    return match(ext, 'proj4');
  }

  function testProj(code) {
    return code[0] === '+';
  }

  function parse(code) {
    if (testObj(code)) {
      //check to see if this is a WKT string
      if (testDef(code)) {
        return defs[code];
      }

      if (testWKT(code)) {
        var out = wkt(code); // test of spetial case, due to this being a very common and often malformed

        if (checkMercator(out)) {
          return defs['EPSG:3857'];
        }

        var maybeProjStr = checkProjStr(out);

        if (maybeProjStr) {
          return projStr(maybeProjStr);
        }

        return out;
      }

      if (testProj(code)) {
        return projStr(code);
      }
    } else {
      return code;
    }
  }

  function extend (destination, source) {
    destination = destination || {};
    var value, property;

    if (!source) {
      return destination;
    }

    for (property in source) {
      value = source[property];

      if (value !== undefined) {
        destination[property] = value;
      }
    }

    return destination;
  }

  function msfnz (eccent, sinphi, cosphi) {
    var con = eccent * sinphi;
    return cosphi / Math.sqrt(1 - con * con);
  }

  function sign (x) {
    return x < 0 ? -1 : 1;
  }

  function adjust_lon (x) {
    return Math.abs(x) <= SPI ? x : x - sign(x) * TWO_PI;
  }

  function tsfnz (eccent, phi, sinphi) {
    var con = eccent * sinphi;
    var com = 0.5 * eccent;
    con = Math.pow((1 - con) / (1 + con), com);
    return Math.tan(0.5 * (HALF_PI - phi)) / con;
  }

  function phi2z (eccent, ts) {
    var eccnth = 0.5 * eccent;
    var con, dphi;
    var phi = HALF_PI - 2 * Math.atan(ts);

    for (var i = 0; i <= 15; i++) {
      con = eccent * Math.sin(phi);
      dphi = HALF_PI - 2 * Math.atan(ts * Math.pow((1 - con) / (1 + con), eccnth)) - phi;
      phi += dphi;

      if (Math.abs(dphi) <= 0.0000000001) {
        return phi;
      }
    } //console.log("phi2z has NoConvergence");


    return -9999;
  }

  function init$v() {
    var con = this.b / this.a;
    this.es = 1 - con * con;

    if (!('x0' in this)) {
      this.x0 = 0;
    }

    if (!('y0' in this)) {
      this.y0 = 0;
    }

    this.e = Math.sqrt(this.es);

    if (this.lat_ts) {
      if (this.sphere) {
        this.k0 = Math.cos(this.lat_ts);
      } else {
        this.k0 = msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
      }
    } else {
      if (!this.k0) {
        if (this.k) {
          this.k0 = this.k;
        } else {
          this.k0 = 1;
        }
      }
    }
  }
  /* Mercator forward equations--mapping lat,long to x,y
    --------------------------------------------------*/

  function forward$t(p) {
    var lon = p.x;
    var lat = p.y; // convert to radians

    if (lat * R2D > 90 && lat * R2D < -90 && lon * R2D > 180 && lon * R2D < -180) {
      return null;
    }

    var x, y;

    if (Math.abs(Math.abs(lat) - HALF_PI) <= EPSLN) {
      return null;
    } else {
      if (this.sphere) {
        x = this.x0 + this.a * this.k0 * adjust_lon(lon - this.long0);
        y = this.y0 + this.a * this.k0 * Math.log(Math.tan(FORTPI + 0.5 * lat));
      } else {
        var sinphi = Math.sin(lat);
        var ts = tsfnz(this.e, lat, sinphi);
        x = this.x0 + this.a * this.k0 * adjust_lon(lon - this.long0);
        y = this.y0 - this.a * this.k0 * Math.log(ts);
      }

      p.x = x;
      p.y = y;
      return p;
    }
  }
  /* Mercator inverse equations--mapping x,y to lat/long
    --------------------------------------------------*/

  function inverse$t(p) {
    var x = p.x - this.x0;
    var y = p.y - this.y0;
    var lon, lat;

    if (this.sphere) {
      lat = HALF_PI - 2 * Math.atan(Math.exp(-y / (this.a * this.k0)));
    } else {
      var ts = Math.exp(-y / (this.a * this.k0));
      lat = phi2z(this.e, ts);

      if (lat === -9999) {
        return null;
      }
    }

    lon = adjust_lon(this.long0 + x / (this.a * this.k0));
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$v = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
  var merc = {
    init: init$v,
    forward: forward$t,
    inverse: inverse$t,
    names: names$v
  };

  function init$u() {//no-op for longlat
  }

  function identity(pt) {
    return pt;
  }
  var names$u = ["longlat", "identity"];
  var longlat = {
    init: init$u,
    forward: identity,
    inverse: identity,
    names: names$u
  };

  var projs = [merc, longlat];
  var names$t = {};
  var projStore = [];

  function add(proj, i) {
    var len = projStore.length;

    if (!proj.names) {
      console.log(i);
      return true;
    }

    projStore[len] = proj;
    proj.names.forEach(function (n) {
      names$t[n.toLowerCase()] = len;
    });
    return this;
  }
  function get(name) {
    if (!name) {
      return false;
    }

    var n = name.toLowerCase();

    if (typeof names$t[n] !== 'undefined' && projStore[names$t[n]]) {
      return projStore[names$t[n]];
    }
  }
  function start() {
    projs.forEach(add);
  }
  var projections$1 = {
    start: start,
    add: add,
    get: get
  };

  var exports$2 = {};
  exports$2.MERIT = {
    a: 6378137.0,
    rf: 298.257,
    ellipseName: "MERIT 1983"
  };
  exports$2.SGS85 = {
    a: 6378136.0,
    rf: 298.257,
    ellipseName: "Soviet Geodetic System 85"
  };
  exports$2.GRS80 = {
    a: 6378137.0,
    rf: 298.257222101,
    ellipseName: "GRS 1980(IUGG, 1980)"
  };
  exports$2.IAU76 = {
    a: 6378140.0,
    rf: 298.257,
    ellipseName: "IAU 1976"
  };
  exports$2.airy = {
    a: 6377563.396,
    b: 6356256.910,
    ellipseName: "Airy 1830"
  };
  exports$2.APL4 = {
    a: 6378137,
    rf: 298.25,
    ellipseName: "Appl. Physics. 1965"
  };
  exports$2.NWL9D = {
    a: 6378145.0,
    rf: 298.25,
    ellipseName: "Naval Weapons Lab., 1965"
  };
  exports$2.mod_airy = {
    a: 6377340.189,
    b: 6356034.446,
    ellipseName: "Modified Airy"
  };
  exports$2.andrae = {
    a: 6377104.43,
    rf: 300.0,
    ellipseName: "Andrae 1876 (Den., Iclnd.)"
  };
  exports$2.aust_SA = {
    a: 6378160.0,
    rf: 298.25,
    ellipseName: "Australian Natl & S. Amer. 1969"
  };
  exports$2.GRS67 = {
    a: 6378160.0,
    rf: 298.2471674270,
    ellipseName: "GRS 67(IUGG 1967)"
  };
  exports$2.bessel = {
    a: 6377397.155,
    rf: 299.1528128,
    ellipseName: "Bessel 1841"
  };
  exports$2.bess_nam = {
    a: 6377483.865,
    rf: 299.1528128,
    ellipseName: "Bessel 1841 (Namibia)"
  };
  exports$2.clrk66 = {
    a: 6378206.4,
    b: 6356583.8,
    ellipseName: "Clarke 1866"
  };
  exports$2.clrk80 = {
    a: 6378249.145,
    rf: 293.4663,
    ellipseName: "Clarke 1880 mod."
  };
  exports$2.clrk58 = {
    a: 6378293.645208759,
    rf: 294.2606763692654,
    ellipseName: "Clarke 1858"
  };
  exports$2.CPM = {
    a: 6375738.7,
    rf: 334.29,
    ellipseName: "Comm. des Poids et Mesures 1799"
  };
  exports$2.delmbr = {
    a: 6376428.0,
    rf: 311.5,
    ellipseName: "Delambre 1810 (Belgium)"
  };
  exports$2.engelis = {
    a: 6378136.05,
    rf: 298.2566,
    ellipseName: "Engelis 1985"
  };
  exports$2.evrst30 = {
    a: 6377276.345,
    rf: 300.8017,
    ellipseName: "Everest 1830"
  };
  exports$2.evrst48 = {
    a: 6377304.063,
    rf: 300.8017,
    ellipseName: "Everest 1948"
  };
  exports$2.evrst56 = {
    a: 6377301.243,
    rf: 300.8017,
    ellipseName: "Everest 1956"
  };
  exports$2.evrst69 = {
    a: 6377295.664,
    rf: 300.8017,
    ellipseName: "Everest 1969"
  };
  exports$2.evrstSS = {
    a: 6377298.556,
    rf: 300.8017,
    ellipseName: "Everest (Sabah & Sarawak)"
  };
  exports$2.fschr60 = {
    a: 6378166.0,
    rf: 298.3,
    ellipseName: "Fischer (Mercury Datum) 1960"
  };
  exports$2.fschr60m = {
    a: 6378155.0,
    rf: 298.3,
    ellipseName: "Fischer 1960"
  };
  exports$2.fschr68 = {
    a: 6378150.0,
    rf: 298.3,
    ellipseName: "Fischer 1968"
  };
  exports$2.helmert = {
    a: 6378200.0,
    rf: 298.3,
    ellipseName: "Helmert 1906"
  };
  exports$2.hough = {
    a: 6378270.0,
    rf: 297.0,
    ellipseName: "Hough"
  };
  exports$2.intl = {
    a: 6378388.0,
    rf: 297.0,
    ellipseName: "International 1909 (Hayford)"
  };
  exports$2.kaula = {
    a: 6378163.0,
    rf: 298.24,
    ellipseName: "Kaula 1961"
  };
  exports$2.lerch = {
    a: 6378139.0,
    rf: 298.257,
    ellipseName: "Lerch 1979"
  };
  exports$2.mprts = {
    a: 6397300.0,
    rf: 191.0,
    ellipseName: "Maupertius 1738"
  };
  exports$2.new_intl = {
    a: 6378157.5,
    b: 6356772.2,
    ellipseName: "New International 1967"
  };
  exports$2.plessis = {
    a: 6376523.0,
    rf: 6355863.0,
    ellipseName: "Plessis 1817 (France)"
  };
  exports$2.krass = {
    a: 6378245.0,
    rf: 298.3,
    ellipseName: "Krassovsky, 1942"
  };
  exports$2.SEasia = {
    a: 6378155.0,
    b: 6356773.3205,
    ellipseName: "Southeast Asia"
  };
  exports$2.walbeck = {
    a: 6376896.0,
    b: 6355834.8467,
    ellipseName: "Walbeck"
  };
  exports$2.WGS60 = {
    a: 6378165.0,
    rf: 298.3,
    ellipseName: "WGS 60"
  };
  exports$2.WGS66 = {
    a: 6378145.0,
    rf: 298.25,
    ellipseName: "WGS 66"
  };
  exports$2.WGS7 = {
    a: 6378135.0,
    rf: 298.26,
    ellipseName: "WGS 72"
  };
  var WGS84 = exports$2.WGS84 = {
    a: 6378137.0,
    rf: 298.257223563,
    ellipseName: "WGS 84"
  };
  exports$2.sphere = {
    a: 6370997.0,
    b: 6370997.0,
    ellipseName: "Normal Sphere (r=6370997)"
  };

  function eccentricity(a, b, rf, R_A) {
    var a2 = a * a; // used in geocentric

    var b2 = b * b; // used in geocentric

    var es = (a2 - b2) / a2; // e ^ 2

    var e = 0;

    if (R_A) {
      a *= 1 - es * (SIXTH + es * (RA4 + es * RA6));
      a2 = a * a;
      es = 0;
    } else {
      e = Math.sqrt(es); // eccentricity
    }

    var ep2 = (a2 - b2) / b2; // used in geocentric

    return {
      es: es,
      e: e,
      ep2: ep2
    };
  }
  function sphere(a, b, rf, ellps, sphere) {
    if (!a) {
      // do we have an ellipsoid?
      var ellipse = match(exports$2, ellps);

      if (!ellipse) {
        ellipse = WGS84;
      }

      a = ellipse.a;
      b = ellipse.b;
      rf = ellipse.rf;
    }

    if (rf && !b) {
      b = (1.0 - 1.0 / rf) * a;
    }

    if (rf === 0 || Math.abs(a - b) < EPSLN) {
      sphere = true;
      b = a;
    }

    return {
      a: a,
      b: b,
      rf: rf,
      sphere: sphere
    };
  }

  var exports$1 = {};
  exports$1.wgs84 = {
    towgs84: "0,0,0",
    ellipse: "WGS84",
    datumName: "WGS84"
  };
  exports$1.ch1903 = {
    towgs84: "674.374,15.056,405.346",
    ellipse: "bessel",
    datumName: "swiss"
  };
  exports$1.ggrs87 = {
    towgs84: "-199.87,74.79,246.62",
    ellipse: "GRS80",
    datumName: "Greek_Geodetic_Reference_System_1987"
  };
  exports$1.nad83 = {
    towgs84: "0,0,0",
    ellipse: "GRS80",
    datumName: "North_American_Datum_1983"
  };
  exports$1.nad27 = {
    nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
    ellipse: "clrk66",
    datumName: "North_American_Datum_1927"
  };
  exports$1.potsdam = {
    towgs84: "606.0,23.0,413.0",
    ellipse: "bessel",
    datumName: "Potsdam Rauenberg 1950 DHDN"
  };
  exports$1.carthage = {
    towgs84: "-263.0,6.0,431.0",
    ellipse: "clark80",
    datumName: "Carthage 1934 Tunisia"
  };
  exports$1.hermannskogel = {
    towgs84: "653.0,-212.0,449.0",
    ellipse: "bessel",
    datumName: "Hermannskogel"
  };
  exports$1.osni52 = {
    towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
    ellipse: "airy",
    datumName: "Irish National"
  };
  exports$1.ire65 = {
    towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
    ellipse: "mod_airy",
    datumName: "Ireland 1965"
  };
  exports$1.rassadiran = {
    towgs84: "-133.63,-157.5,-158.62",
    ellipse: "intl",
    datumName: "Rassadiran"
  };
  exports$1.nzgd49 = {
    towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
    ellipse: "intl",
    datumName: "New Zealand Geodetic Datum 1949"
  };
  exports$1.osgb36 = {
    towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
    ellipse: "airy",
    datumName: "Airy 1830"
  };
  exports$1.s_jtsk = {
    towgs84: "589,76,480",
    ellipse: 'bessel',
    datumName: 'S-JTSK (Ferro)'
  };
  exports$1.beduaram = {
    towgs84: '-106,-87,188',
    ellipse: 'clrk80',
    datumName: 'Beduaram'
  };
  exports$1.gunung_segara = {
    towgs84: '-403,684,41',
    ellipse: 'bessel',
    datumName: 'Gunung Segara Jakarta'
  };
  exports$1.rnb72 = {
    towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
    ellipse: "intl",
    datumName: "Reseau National Belge 1972"
  };

  function datum(datumCode, datum_params, a, b, es, ep2, nadgrids) {
    var out = {};

    if (datumCode === undefined || datumCode === 'none') {
      out.datum_type = PJD_NODATUM;
    } else {
      out.datum_type = PJD_WGS84;
    }

    if (datum_params) {
      out.datum_params = datum_params.map(parseFloat);

      if (out.datum_params[0] !== 0 || out.datum_params[1] !== 0 || out.datum_params[2] !== 0) {
        out.datum_type = PJD_3PARAM;
      }

      if (out.datum_params.length > 3) {
        if (out.datum_params[3] !== 0 || out.datum_params[4] !== 0 || out.datum_params[5] !== 0 || out.datum_params[6] !== 0) {
          out.datum_type = PJD_7PARAM;
          out.datum_params[3] *= SEC_TO_RAD;
          out.datum_params[4] *= SEC_TO_RAD;
          out.datum_params[5] *= SEC_TO_RAD;
          out.datum_params[6] = out.datum_params[6] / 1000000.0 + 1.0;
        }
      }
    }

    if (nadgrids) {
      out.datum_type = PJD_GRIDSHIFT;
      out.grids = nadgrids;
    }

    out.a = a; //datum object also uses these values

    out.b = b;
    out.es = es;
    out.ep2 = ep2;
    return out;
  }

  /**
   * Resources for details of NTv2 file formats:
   * - https://web.archive.org/web/20140127204822if_/http://www.mgs.gov.on.ca:80/stdprodconsume/groups/content/@mgs/@iandit/documents/resourcelist/stel02_047447.pdf
   * - http://mimaka.com/help/gs/html/004_NTV2%20Data%20Format.htm
   */
  var loadedNadgrids = {};
  /**
   * Load a binary NTv2 file (.gsb) to a key that can be used in a proj string like +nadgrids=<key>. Pass the NTv2 file
   * as an ArrayBuffer.
   */

  function nadgrid(key, data) {
    var view = new DataView(data);
    var isLittleEndian = detectLittleEndian(view);
    var header = readHeader(view, isLittleEndian);

    if (header.nSubgrids > 1) {
      console.log('Only single NTv2 subgrids are currently supported, subsequent sub grids are ignored');
    }

    var subgrids = readSubgrids(view, header, isLittleEndian);
    var nadgrid = {
      header: header,
      subgrids: subgrids
    };
    loadedNadgrids[key] = nadgrid;
    return nadgrid;
  }
  /**
   * Given a proj4 value for nadgrids, return an array of loaded grids
   */

  function getNadgrids(nadgrids) {
    // Format details: http://proj.maptools.org/gen_parms.html
    if (nadgrids === undefined) {
      return null;
    }

    var grids = nadgrids.split(',');
    return grids.map(parseNadgridString);
  }

  function parseNadgridString(value) {
    if (value.length === 0) {
      return null;
    }

    var optional = value[0] === '@';

    if (optional) {
      value = value.slice(1);
    }

    if (value === 'null') {
      return {
        name: 'null',
        mandatory: !optional,
        grid: null,
        isNull: true
      };
    }

    return {
      name: value,
      mandatory: !optional,
      grid: loadedNadgrids[value] || null,
      isNull: false
    };
  }

  function secondsToRadians(seconds) {
    return seconds / 3600 * Math.PI / 180;
  }

  function detectLittleEndian(view) {
    var nFields = view.getInt32(8, false);

    if (nFields === 11) {
      return false;
    }

    nFields = view.getInt32(8, true);

    if (nFields !== 11) {
      console.warn('Failed to detect nadgrid endian-ness, defaulting to little-endian');
    }

    return true;
  }

  function readHeader(view, isLittleEndian) {
    return {
      nFields: view.getInt32(8, isLittleEndian),
      nSubgridFields: view.getInt32(24, isLittleEndian),
      nSubgrids: view.getInt32(40, isLittleEndian),
      shiftType: decodeString(view, 56, 56 + 8).trim(),
      fromSemiMajorAxis: view.getFloat64(120, isLittleEndian),
      fromSemiMinorAxis: view.getFloat64(136, isLittleEndian),
      toSemiMajorAxis: view.getFloat64(152, isLittleEndian),
      toSemiMinorAxis: view.getFloat64(168, isLittleEndian)
    };
  }

  function decodeString(view, start, end) {
    return String.fromCharCode.apply(null, new Uint8Array(view.buffer.slice(start, end)));
  }

  function readSubgrids(view, header, isLittleEndian) {
    var gridOffset = 176;
    var grids = [];

    for (var i = 0; i < header.nSubgrids; i++) {
      var subHeader = readGridHeader(view, gridOffset, isLittleEndian);
      var nodes = readGridNodes(view, gridOffset, subHeader, isLittleEndian);
      var lngColumnCount = Math.round(1 + (subHeader.upperLongitude - subHeader.lowerLongitude) / subHeader.longitudeInterval);
      var latColumnCount = Math.round(1 + (subHeader.upperLatitude - subHeader.lowerLatitude) / subHeader.latitudeInterval); // Proj4 operates on radians whereas the coordinates are in seconds in the grid

      grids.push({
        ll: [secondsToRadians(subHeader.lowerLongitude), secondsToRadians(subHeader.lowerLatitude)],
        del: [secondsToRadians(subHeader.longitudeInterval), secondsToRadians(subHeader.latitudeInterval)],
        lim: [lngColumnCount, latColumnCount],
        count: subHeader.gridNodeCount,
        cvs: mapNodes(nodes)
      });
    }

    return grids;
  }

  function mapNodes(nodes) {
    return nodes.map(function (r) {
      return [secondsToRadians(r.longitudeShift), secondsToRadians(r.latitudeShift)];
    });
  }

  function readGridHeader(view, offset, isLittleEndian) {
    return {
      name: decodeString(view, offset + 8, offset + 16).trim(),
      parent: decodeString(view, offset + 24, offset + 24 + 8).trim(),
      lowerLatitude: view.getFloat64(offset + 72, isLittleEndian),
      upperLatitude: view.getFloat64(offset + 88, isLittleEndian),
      lowerLongitude: view.getFloat64(offset + 104, isLittleEndian),
      upperLongitude: view.getFloat64(offset + 120, isLittleEndian),
      latitudeInterval: view.getFloat64(offset + 136, isLittleEndian),
      longitudeInterval: view.getFloat64(offset + 152, isLittleEndian),
      gridNodeCount: view.getInt32(offset + 168, isLittleEndian)
    };
  }

  function readGridNodes(view, offset, gridHeader, isLittleEndian) {
    var nodesOffset = offset + 176;
    var gridRecordLength = 16;
    var gridShiftRecords = [];

    for (var i = 0; i < gridHeader.gridNodeCount; i++) {
      var record = {
        latitudeShift: view.getFloat32(nodesOffset + i * gridRecordLength, isLittleEndian),
        longitudeShift: view.getFloat32(nodesOffset + i * gridRecordLength + 4, isLittleEndian),
        latitudeAccuracy: view.getFloat32(nodesOffset + i * gridRecordLength + 8, isLittleEndian),
        longitudeAccuracy: view.getFloat32(nodesOffset + i * gridRecordLength + 12, isLittleEndian)
      };
      gridShiftRecords.push(record);
    }

    return gridShiftRecords;
  }

  function Projection(srsCode, callback) {
    if (!(this instanceof Projection)) {
      return new Projection(srsCode);
    }

    callback = callback || function (error) {
      if (error) {
        throw error;
      }
    };

    var json = parse(srsCode);

    if (_typeof$1(json) !== 'object') {
      callback(srsCode);
      return;
    }

    var ourProj = Projection.projections.get(json.projName);

    if (!ourProj) {
      callback(srsCode);
      return;
    }

    if (json.datumCode && json.datumCode !== 'none') {
      var datumDef = match(exports$1, json.datumCode);

      if (datumDef) {
        json.datum_params = json.datum_params || (datumDef.towgs84 ? datumDef.towgs84.split(',') : null);
        json.ellps = datumDef.ellipse;
        json.datumName = datumDef.datumName ? datumDef.datumName : json.datumCode;
      }
    }

    json.k0 = json.k0 || 1.0;
    json.axis = json.axis || 'enu';
    json.ellps = json.ellps || 'wgs84';
    json.lat1 = json.lat1 || json.lat0; // Lambert_Conformal_Conic_1SP, for example, needs this

    var sphere_ = sphere(json.a, json.b, json.rf, json.ellps, json.sphere);
    var ecc = eccentricity(sphere_.a, sphere_.b, sphere_.rf, json.R_A);
    var nadgrids = getNadgrids(json.nadgrids);
    var datumObj = json.datum || datum(json.datumCode, json.datum_params, sphere_.a, sphere_.b, ecc.es, ecc.ep2, nadgrids);
    extend(this, json); // transfer everything over from the projection because we don't know what we'll need

    extend(this, ourProj); // transfer all the methods from the projection
    // copy the 4 things over we calulated in deriveConstants.sphere

    this.a = sphere_.a;
    this.b = sphere_.b;
    this.rf = sphere_.rf;
    this.sphere = sphere_.sphere; // copy the 3 things we calculated in deriveConstants.eccentricity

    this.es = ecc.es;
    this.e = ecc.e;
    this.ep2 = ecc.ep2; // add in the datum object

    this.datum = datumObj; // init the projection

    this.init(); // legecy callback from back in the day when it went to spatialreference.org

    callback(null, this);
  }

  Projection.projections = projections$1;
  Projection.projections.start();

  function compareDatums(source, dest) {
    if (source.datum_type !== dest.datum_type) {
      return false; // false, datums are not equal
    } else if (source.a !== dest.a || Math.abs(source.es - dest.es) > 0.000000000050) {
      // the tolerance for es is to ensure that GRS80 and WGS84
      // are considered identical
      return false;
    } else if (source.datum_type === PJD_3PARAM) {
      return source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2];
    } else if (source.datum_type === PJD_7PARAM) {
      return source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2] && source.datum_params[3] === dest.datum_params[3] && source.datum_params[4] === dest.datum_params[4] && source.datum_params[5] === dest.datum_params[5] && source.datum_params[6] === dest.datum_params[6];
    } else {
      return true; // datums are equal
    }
  } // cs_compare_datums()

  /*
   * The function Convert_Geodetic_To_Geocentric converts geodetic coordinates
   * (latitude, longitude, and height) to geocentric coordinates (X, Y, Z),
   * according to the current ellipsoid parameters.
   *
   *    Latitude  : Geodetic latitude in radians                     (input)
   *    Longitude : Geodetic longitude in radians                    (input)
   *    Height    : Geodetic height, in meters                       (input)
   *    X         : Calculated Geocentric X coordinate, in meters    (output)
   *    Y         : Calculated Geocentric Y coordinate, in meters    (output)
   *    Z         : Calculated Geocentric Z coordinate, in meters    (output)
   *
   */

  function geodeticToGeocentric(p, es, a) {
    var Longitude = p.x;
    var Latitude = p.y;
    var Height = p.z ? p.z : 0; //Z value not always supplied

    var Rn;
    /*  Earth radius at location  */

    var Sin_Lat;
    /*  Math.sin(Latitude)  */

    var Sin2_Lat;
    /*  Square of Math.sin(Latitude)  */

    var Cos_Lat;
    /*  Math.cos(Latitude)  */

    /*
     ** Don't blow up if Latitude is just a little out of the value
     ** range as it may just be a rounding issue.  Also removed longitude
     ** test, it should be wrapped by Math.cos() and Math.sin().  NFW for PROJ.4, Sep/2001.
     */

    if (Latitude < -HALF_PI && Latitude > -1.001 * HALF_PI) {
      Latitude = -HALF_PI;
    } else if (Latitude > HALF_PI && Latitude < 1.001 * HALF_PI) {
      Latitude = HALF_PI;
    } else if (Latitude < -HALF_PI) {
      /* Latitude out of range */
      //..reportError('geocent:lat out of range:' + Latitude);
      return {
        x: -Infinity,
        y: -Infinity,
        z: p.z
      };
    } else if (Latitude > HALF_PI) {
      /* Latitude out of range */
      return {
        x: Infinity,
        y: Infinity,
        z: p.z
      };
    }

    if (Longitude > Math.PI) {
      Longitude -= 2 * Math.PI;
    }

    Sin_Lat = Math.sin(Latitude);
    Cos_Lat = Math.cos(Latitude);
    Sin2_Lat = Sin_Lat * Sin_Lat;
    Rn = a / Math.sqrt(1.0e0 - es * Sin2_Lat);
    return {
      x: (Rn + Height) * Cos_Lat * Math.cos(Longitude),
      y: (Rn + Height) * Cos_Lat * Math.sin(Longitude),
      z: (Rn * (1 - es) + Height) * Sin_Lat
    };
  } // cs_geodetic_to_geocentric()

  function geocentricToGeodetic(p, es, a, b) {
    /* local defintions and variables */

    /* end-criterium of loop, accuracy of sin(Latitude) */
    var genau = 1e-12;
    var genau2 = genau * genau;
    var maxiter = 30;
    var P;
    /* distance between semi-minor axis and location */

    var RR;
    /* distance between center and location */

    var CT;
    /* sin of geocentric latitude */

    var ST;
    /* cos of geocentric latitude */

    var RX;
    var RK;
    var RN;
    /* Earth radius at location */

    var CPHI0;
    /* cos of start or old geodetic latitude in iterations */

    var SPHI0;
    /* sin of start or old geodetic latitude in iterations */

    var CPHI;
    /* cos of searched geodetic latitude */

    var SPHI;
    /* sin of searched geodetic latitude */

    var SDPHI;
    /* end-criterium: addition-theorem of sin(Latitude(iter)-Latitude(iter-1)) */

    var iter;
    /* # of continous iteration, max. 30 is always enough (s.a.) */

    var X = p.x;
    var Y = p.y;
    var Z = p.z ? p.z : 0.0; //Z value not always supplied

    var Longitude;
    var Latitude;
    var Height;
    P = Math.sqrt(X * X + Y * Y);
    RR = Math.sqrt(X * X + Y * Y + Z * Z);
    /*      special cases for latitude and longitude */

    if (P / a < genau) {
      /*  special case, if P=0. (X=0., Y=0.) */
      Longitude = 0.0;
      /*  if (X,Y,Z)=(0.,0.,0.) then Height becomes semi-minor axis
       *  of ellipsoid (=center of mass), Latitude becomes PI/2 */

      if (RR / a < genau) {
        Latitude = HALF_PI;
        Height = -b;
        return {
          x: p.x,
          y: p.y,
          z: p.z
        };
      }
    } else {
      /*  ellipsoidal (geodetic) longitude
       *  interval: -PI < Longitude <= +PI */
      Longitude = Math.atan2(Y, X);
    }
    /* --------------------------------------------------------------
     * Following iterative algorithm was developped by
     * "Institut for Erdmessung", University of Hannover, July 1988.
     * Internet: www.ife.uni-hannover.de
     * Iterative computation of CPHI,SPHI and Height.
     * Iteration of CPHI and SPHI to 10**-12 radian resp.
     * 2*10**-7 arcsec.
     * --------------------------------------------------------------
     */


    CT = Z / RR;
    ST = P / RR;
    RX = 1.0 / Math.sqrt(1.0 - es * (2.0 - es) * ST * ST);
    CPHI0 = ST * (1.0 - es) * RX;
    SPHI0 = CT * RX;
    iter = 0;
    /* loop to find sin(Latitude) resp. Latitude
     * until |sin(Latitude(iter)-Latitude(iter-1))| < genau */

    do {
      iter++;
      RN = a / Math.sqrt(1.0 - es * SPHI0 * SPHI0);
      /*  ellipsoidal (geodetic) height */

      Height = P * CPHI0 + Z * SPHI0 - RN * (1.0 - es * SPHI0 * SPHI0);
      RK = es * RN / (RN + Height);
      RX = 1.0 / Math.sqrt(1.0 - RK * (2.0 - RK) * ST * ST);
      CPHI = ST * (1.0 - RK) * RX;
      SPHI = CT * RX;
      SDPHI = SPHI * CPHI0 - CPHI * SPHI0;
      CPHI0 = CPHI;
      SPHI0 = SPHI;
    } while (SDPHI * SDPHI > genau2 && iter < maxiter);
    /*      ellipsoidal (geodetic) latitude */


    Latitude = Math.atan(SPHI / Math.abs(CPHI));
    return {
      x: Longitude,
      y: Latitude,
      z: Height
    };
  } // cs_geocentric_to_geodetic()

  /****************************************************************/
  // pj_geocentic_to_wgs84( p )
  //  p = point to transform in geocentric coordinates (x,y,z)

  /** point object, nothing fancy, just allows values to be
      passed back and forth by reference rather than by value.
      Other point classes may be used as long as they have
      x and y properties, which will get modified in the transform method.
  */

  function geocentricToWgs84(p, datum_type, datum_params) {
    if (datum_type === PJD_3PARAM) {
      // if( x[io] === HUGE_VAL )
      //    continue;
      return {
        x: p.x + datum_params[0],
        y: p.y + datum_params[1],
        z: p.z + datum_params[2]
      };
    } else if (datum_type === PJD_7PARAM) {
      var Dx_BF = datum_params[0];
      var Dy_BF = datum_params[1];
      var Dz_BF = datum_params[2];
      var Rx_BF = datum_params[3];
      var Ry_BF = datum_params[4];
      var Rz_BF = datum_params[5];
      var M_BF = datum_params[6]; // if( x[io] === HUGE_VAL )
      //    continue;

      return {
        x: M_BF * (p.x - Rz_BF * p.y + Ry_BF * p.z) + Dx_BF,
        y: M_BF * (Rz_BF * p.x + p.y - Rx_BF * p.z) + Dy_BF,
        z: M_BF * (-Ry_BF * p.x + Rx_BF * p.y + p.z) + Dz_BF
      };
    }
  } // cs_geocentric_to_wgs84

  /****************************************************************/
  // pj_geocentic_from_wgs84()
  //  coordinate system definition,
  //  point to transform in geocentric coordinates (x,y,z)

  function geocentricFromWgs84(p, datum_type, datum_params) {
    if (datum_type === PJD_3PARAM) {
      //if( x[io] === HUGE_VAL )
      //    continue;
      return {
        x: p.x - datum_params[0],
        y: p.y - datum_params[1],
        z: p.z - datum_params[2]
      };
    } else if (datum_type === PJD_7PARAM) {
      var Dx_BF = datum_params[0];
      var Dy_BF = datum_params[1];
      var Dz_BF = datum_params[2];
      var Rx_BF = datum_params[3];
      var Ry_BF = datum_params[4];
      var Rz_BF = datum_params[5];
      var M_BF = datum_params[6];
      var x_tmp = (p.x - Dx_BF) / M_BF;
      var y_tmp = (p.y - Dy_BF) / M_BF;
      var z_tmp = (p.z - Dz_BF) / M_BF; //if( x[io] === HUGE_VAL )
      //    continue;

      return {
        x: x_tmp + Rz_BF * y_tmp - Ry_BF * z_tmp,
        y: -Rz_BF * x_tmp + y_tmp + Rx_BF * z_tmp,
        z: Ry_BF * x_tmp - Rx_BF * y_tmp + z_tmp
      };
    } //cs_geocentric_from_wgs84()

  }

  function checkParams(type) {
    return type === PJD_3PARAM || type === PJD_7PARAM;
  }

  function datum_transform (source, dest, point) {
    // Short cut if the datums are identical.
    if (compareDatums(source, dest)) {
      return point; // in this case, zero is sucess,
      // whereas cs_compare_datums returns 1 to indicate TRUE
      // confusing, should fix this
    } // Explicitly skip datum transform by setting 'datum=none' as parameter for either source or dest


    if (source.datum_type === PJD_NODATUM || dest.datum_type === PJD_NODATUM) {
      return point;
    } // If this datum requires grid shifts, then apply it to geodetic coordinates.


    var source_a = source.a;
    var source_es = source.es;

    if (source.datum_type === PJD_GRIDSHIFT) {
      var gridShiftCode = applyGridShift(source, false, point);

      if (gridShiftCode !== 0) {
        return undefined;
      }

      source_a = SRS_WGS84_SEMIMAJOR;
      source_es = SRS_WGS84_ESQUARED;
    }

    var dest_a = dest.a;
    var dest_b = dest.b;
    var dest_es = dest.es;

    if (dest.datum_type === PJD_GRIDSHIFT) {
      dest_a = SRS_WGS84_SEMIMAJOR;
      dest_b = SRS_WGS84_SEMIMINOR;
      dest_es = SRS_WGS84_ESQUARED;
    } // Do we need to go through geocentric coordinates?


    if (source_es === dest_es && source_a === dest_a && !checkParams(source.datum_type) && !checkParams(dest.datum_type)) {
      return point;
    } // Convert to geocentric coordinates.


    point = geodeticToGeocentric(point, source_es, source_a); // Convert between datums

    if (checkParams(source.datum_type)) {
      point = geocentricToWgs84(point, source.datum_type, source.datum_params);
    }

    if (checkParams(dest.datum_type)) {
      point = geocentricFromWgs84(point, dest.datum_type, dest.datum_params);
    }

    point = geocentricToGeodetic(point, dest_es, dest_a, dest_b);

    if (dest.datum_type === PJD_GRIDSHIFT) {
      var destGridShiftResult = applyGridShift(dest, true, point);

      if (destGridShiftResult !== 0) {
        return undefined;
      }
    }

    return point;
  }
  function applyGridShift(source, inverse, point) {
    if (source.grids === null || source.grids.length === 0) {
      console.log('Grid shift grids not found');
      return -1;
    }

    var input = {
      x: -point.x,
      y: point.y
    };
    var output = {
      x: Number.NaN,
      y: Number.NaN
    };
    var attemptedGrids = [];

    for (var i = 0; i < source.grids.length; i++) {
      var grid = source.grids[i];
      attemptedGrids.push(grid.name);

      if (grid.isNull) {
        output = input;
        break;
      }

      grid.mandatory;

      if (grid.grid === null) {
        if (grid.mandatory) {
          console.log("Unable to find mandatory grid '" + grid.name + "'");
          return -1;
        }

        continue;
      }

      var subgrid = grid.grid.subgrids[0]; // skip tables that don't match our point at all

      var epsilon = (Math.abs(subgrid.del[1]) + Math.abs(subgrid.del[0])) / 10000.0;
      var minX = subgrid.ll[0] - epsilon;
      var minY = subgrid.ll[1] - epsilon;
      var maxX = subgrid.ll[0] + (subgrid.lim[0] - 1) * subgrid.del[0] + epsilon;
      var maxY = subgrid.ll[1] + (subgrid.lim[1] - 1) * subgrid.del[1] + epsilon;

      if (minY > input.y || minX > input.x || maxY < input.y || maxX < input.x) {
        continue;
      }

      output = applySubgridShift(input, inverse, subgrid);

      if (!isNaN(output.x)) {
        break;
      }
    }

    if (isNaN(output.x)) {
      console.log("Failed to find a grid shift table for location '" + -input.x * R2D + " " + input.y * R2D + " tried: '" + attemptedGrids + "'");
      return -1;
    }

    point.x = -output.x;
    point.y = output.y;
    return 0;
  }

  function applySubgridShift(pin, inverse, ct) {
    var val = {
      x: Number.NaN,
      y: Number.NaN
    };

    if (isNaN(pin.x)) {
      return val;
    }

    var tb = {
      x: pin.x,
      y: pin.y
    };
    tb.x -= ct.ll[0];
    tb.y -= ct.ll[1];
    tb.x = adjust_lon(tb.x - Math.PI) + Math.PI;
    var t = nadInterpolate(tb, ct);

    if (inverse) {
      if (isNaN(t.x)) {
        return val;
      }

      t.x = tb.x - t.x;
      t.y = tb.y - t.y;
      var i = 9,
          tol = 1e-12;
      var dif, del;

      do {
        del = nadInterpolate(t, ct);

        if (isNaN(del.x)) {
          console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
          break;
        }

        dif = {
          x: tb.x - (del.x + t.x),
          y: tb.y - (del.y + t.y)
        };
        t.x += dif.x;
        t.y += dif.y;
      } while (i-- && Math.abs(dif.x) > tol && Math.abs(dif.y) > tol);

      if (i < 0) {
        console.log("Inverse grid shift iterator failed to converge.");
        return val;
      }

      val.x = adjust_lon(t.x + ct.ll[0]);
      val.y = t.y + ct.ll[1];
    } else {
      if (!isNaN(t.x)) {
        val.x = pin.x + t.x;
        val.y = pin.y + t.y;
      }
    }

    return val;
  }

  function nadInterpolate(pin, ct) {
    var t = {
      x: pin.x / ct.del[0],
      y: pin.y / ct.del[1]
    };
    var indx = {
      x: Math.floor(t.x),
      y: Math.floor(t.y)
    };
    var frct = {
      x: t.x - 1.0 * indx.x,
      y: t.y - 1.0 * indx.y
    };
    var val = {
      x: Number.NaN,
      y: Number.NaN
    };
    var inx;

    if (indx.x < 0 || indx.x >= ct.lim[0]) {
      return val;
    }

    if (indx.y < 0 || indx.y >= ct.lim[1]) {
      return val;
    }

    inx = indx.y * ct.lim[0] + indx.x;
    var f00 = {
      x: ct.cvs[inx][0],
      y: ct.cvs[inx][1]
    };
    inx++;
    var f10 = {
      x: ct.cvs[inx][0],
      y: ct.cvs[inx][1]
    };
    inx += ct.lim[0];
    var f11 = {
      x: ct.cvs[inx][0],
      y: ct.cvs[inx][1]
    };
    inx--;
    var f01 = {
      x: ct.cvs[inx][0],
      y: ct.cvs[inx][1]
    };
    var m11 = frct.x * frct.y,
        m10 = frct.x * (1.0 - frct.y),
        m00 = (1.0 - frct.x) * (1.0 - frct.y),
        m01 = (1.0 - frct.x) * frct.y;
    val.x = m00 * f00.x + m10 * f10.x + m01 * f01.x + m11 * f11.x;
    val.y = m00 * f00.y + m10 * f10.y + m01 * f01.y + m11 * f11.y;
    return val;
  }

  function adjust_axis (crs, denorm, point) {
    var xin = point.x,
        yin = point.y,
        zin = point.z || 0.0;
    var v, t, i;
    var out = {};

    for (i = 0; i < 3; i++) {
      if (denorm && i === 2 && point.z === undefined) {
        continue;
      }

      if (i === 0) {
        v = xin;

        if ("ew".indexOf(crs.axis[i]) !== -1) {
          t = 'x';
        } else {
          t = 'y';
        }
      } else if (i === 1) {
        v = yin;

        if ("ns".indexOf(crs.axis[i]) !== -1) {
          t = 'y';
        } else {
          t = 'x';
        }
      } else {
        v = zin;
        t = 'z';
      }

      switch (crs.axis[i]) {
        case 'e':
          out[t] = v;
          break;

        case 'w':
          out[t] = -v;
          break;

        case 'n':
          out[t] = v;
          break;

        case 's':
          out[t] = -v;
          break;

        case 'u':
          if (point[t] !== undefined) {
            out.z = v;
          }

          break;

        case 'd':
          if (point[t] !== undefined) {
            out.z = -v;
          }

          break;

        default:
          //console.log("ERROR: unknow axis ("+crs.axis[i]+") - check definition of "+crs.projName);
          return null;
      }
    }

    return out;
  }

  function common (array) {
    var out = {
      x: array[0],
      y: array[1]
    };

    if (array.length > 2) {
      out.z = array[2];
    }

    if (array.length > 3) {
      out.m = array[3];
    }

    return out;
  }

  function checkSanity (point) {
    checkCoord(point.x);
    checkCoord(point.y);
  }

  function checkCoord(num) {
    if (typeof Number.isFinite === 'function') {
      if (Number.isFinite(num)) {
        return;
      }

      throw new TypeError('coordinates must be finite numbers');
    }

    if (typeof num !== 'number' || num !== num || !isFinite(num)) {
      throw new TypeError('coordinates must be finite numbers');
    }
  }

  function checkNotWGS(source, dest) {
    return (source.datum.datum_type === PJD_3PARAM || source.datum.datum_type === PJD_7PARAM) && dest.datumCode !== 'WGS84' || (dest.datum.datum_type === PJD_3PARAM || dest.datum.datum_type === PJD_7PARAM) && source.datumCode !== 'WGS84';
  }

  function transform(source, dest, point) {
    var wgs84;

    if (Array.isArray(point)) {
      point = common(point);
    }

    checkSanity(point); // Workaround for datum shifts towgs84, if either source or destination projection is not wgs84

    if (source.datum && dest.datum && checkNotWGS(source, dest)) {
      wgs84 = new Projection('WGS84');
      point = transform(source, wgs84, point);
      source = wgs84;
    } // DGR, 2010/11/12


    if (source.axis !== 'enu') {
      point = adjust_axis(source, false, point);
    } // Transform source points to long/lat, if they aren't already.


    if (source.projName === 'longlat') {
      point = {
        x: point.x * D2R$1,
        y: point.y * D2R$1,
        z: point.z || 0
      };
    } else {
      if (source.to_meter) {
        point = {
          x: point.x * source.to_meter,
          y: point.y * source.to_meter,
          z: point.z || 0
        };
      }

      point = source.inverse(point); // Convert Cartesian to longlat

      if (!point) {
        return;
      }
    } // Adjust for the prime meridian if necessary


    if (source.from_greenwich) {
      point.x += source.from_greenwich;
    } // Convert datums if needed, and if possible.


    point = datum_transform(source.datum, dest.datum, point);

    if (!point) {
      return;
    } // Adjust for the prime meridian if necessary


    if (dest.from_greenwich) {
      point = {
        x: point.x - dest.from_greenwich,
        y: point.y,
        z: point.z || 0
      };
    }

    if (dest.projName === 'longlat') {
      // convert radians to decimal degrees
      point = {
        x: point.x * R2D,
        y: point.y * R2D,
        z: point.z || 0
      };
    } else {
      // else project
      point = dest.forward(point);

      if (dest.to_meter) {
        point = {
          x: point.x / dest.to_meter,
          y: point.y / dest.to_meter,
          z: point.z || 0
        };
      }
    } // DGR, 2010/11/12


    if (dest.axis !== 'enu') {
      return adjust_axis(dest, true, point);
    }

    return point;
  }

  var wgs84 = Projection('WGS84');

  function transformer(from, to, coords) {
    var transformedArray, out, keys;

    if (Array.isArray(coords)) {
      transformedArray = transform(from, to, coords) || {
        x: NaN,
        y: NaN
      };

      if (coords.length > 2) {
        if (typeof from.name !== 'undefined' && from.name === 'geocent' || typeof to.name !== 'undefined' && to.name === 'geocent') {
          if (typeof transformedArray.z === 'number') {
            return [transformedArray.x, transformedArray.y, transformedArray.z].concat(coords.splice(3));
          } else {
            return [transformedArray.x, transformedArray.y, coords[2]].concat(coords.splice(3));
          }
        } else {
          return [transformedArray.x, transformedArray.y].concat(coords.splice(2));
        }
      } else {
        return [transformedArray.x, transformedArray.y];
      }
    } else {
      out = transform(from, to, coords);
      keys = Object.keys(coords);

      if (keys.length === 2) {
        return out;
      }

      keys.forEach(function (key) {
        if (typeof from.name !== 'undefined' && from.name === 'geocent' || typeof to.name !== 'undefined' && to.name === 'geocent') {
          if (key === 'x' || key === 'y' || key === 'z') {
            return;
          }
        } else {
          if (key === 'x' || key === 'y') {
            return;
          }
        }

        out[key] = coords[key];
      });
      return out;
    }
  }

  function checkProj(item) {
    if (item instanceof Projection) {
      return item;
    }

    if (item.oProj) {
      return item.oProj;
    }

    return Projection(item);
  }

  function proj4(fromProj, toProj, coord) {
    fromProj = checkProj(fromProj);
    var single = false;
    var obj;

    if (typeof toProj === 'undefined') {
      toProj = fromProj;
      fromProj = wgs84;
      single = true;
    } else if (typeof toProj.x !== 'undefined' || Array.isArray(toProj)) {
      coord = toProj;
      toProj = fromProj;
      fromProj = wgs84;
      single = true;
    }

    toProj = checkProj(toProj);

    if (coord) {
      return transformer(fromProj, toProj, coord);
    } else {
      obj = {
        forward: function forward(coords) {
          return transformer(fromProj, toProj, coords);
        },
        inverse: function inverse(coords) {
          return transformer(toProj, fromProj, coords);
        }
      };

      if (single) {
        obj.oProj = toProj;
      }

      return obj;
    }
  }

  /**
   * UTM zones are grouped, and assigned to one of a group of 6
   * sets.
   *
   * {int} @private
   */
  var NUM_100K_SETS = 6;
  /**
   * The column letters (for easting) of the lower left value, per
   * set.
   *
   * {string} @private
   */

  var SET_ORIGIN_COLUMN_LETTERS = 'AJSAJS';
  /**
   * The row letters (for northing) of the lower left value, per
   * set.
   *
   * {string} @private
   */

  var SET_ORIGIN_ROW_LETTERS = 'AFAFAF';
  var A = 65; // A

  var I = 73; // I

  var O = 79; // O

  var V = 86; // V

  var Z = 90; // Z

  var mgrs = {
    forward: forward$s,
    inverse: inverse$s,
    toPoint: toPoint
  };
  /**
   * Conversion of lat/lon to MGRS.
   *
   * @param {object} ll Object literal with lat and lon properties on a
   *     WGS84 ellipsoid.
   * @param {int} accuracy Accuracy in digits (5 for 1 m, 4 for 10 m, 3 for
   *      100 m, 2 for 1000 m or 1 for 10000 m). Optional, default is 5.
   * @return {string} the MGRS string for the given location and accuracy.
   */

  function forward$s(ll, accuracy) {
    accuracy = accuracy || 5; // default accuracy 1m

    return encode(LLtoUTM({
      lat: ll[1],
      lon: ll[0]
    }), accuracy);
  }
  /**
   * Conversion of MGRS to lat/lon.
   *
   * @param {string} mgrs MGRS string.
   * @return {array} An array with left (longitude), bottom (latitude), right
   *     (longitude) and top (latitude) values in WGS84, representing the
   *     bounding box for the provided MGRS reference.
   */

  function inverse$s(mgrs) {
    var bbox = UTMtoLL(decode(mgrs.toUpperCase()));

    if (bbox.lat && bbox.lon) {
      return [bbox.lon, bbox.lat, bbox.lon, bbox.lat];
    }

    return [bbox.left, bbox.bottom, bbox.right, bbox.top];
  }
  function toPoint(mgrs) {
    var bbox = UTMtoLL(decode(mgrs.toUpperCase()));

    if (bbox.lat && bbox.lon) {
      return [bbox.lon, bbox.lat];
    }

    return [(bbox.left + bbox.right) / 2, (bbox.top + bbox.bottom) / 2];
  }
  /**
   * Conversion from degrees to radians.
   *
   * @private
   * @param {number} deg the angle in degrees.
   * @return {number} the angle in radians.
   */

  function degToRad(deg) {
    return deg * (Math.PI / 180.0);
  }
  /**
   * Conversion from radians to degrees.
   *
   * @private
   * @param {number} rad the angle in radians.
   * @return {number} the angle in degrees.
   */


  function radToDeg(rad) {
    return 180.0 * (rad / Math.PI);
  }
  /**
   * Converts a set of Longitude and Latitude co-ordinates to UTM
   * using the WGS84 ellipsoid.
   *
   * @private
   * @param {object} ll Object literal with lat and lon properties
   *     representing the WGS84 coordinate to be converted.
   * @return {object} Object literal containing the UTM value with easting,
   *     northing, zoneNumber and zoneLetter properties, and an optional
   *     accuracy property in digits. Returns null if the conversion failed.
   */


  function LLtoUTM(ll) {
    var Lat = ll.lat;
    var Long = ll.lon;
    var a = 6378137.0; //ellip.radius;

    var eccSquared = 0.00669438; //ellip.eccsq;

    var k0 = 0.9996;
    var LongOrigin;
    var eccPrimeSquared;
    var N, T, C, A, M;
    var LatRad = degToRad(Lat);
    var LongRad = degToRad(Long);
    var LongOriginRad;
    var ZoneNumber; // (int)

    ZoneNumber = Math.floor((Long + 180) / 6) + 1; //Make sure the longitude 180.00 is in Zone 60

    if (Long === 180) {
      ZoneNumber = 60;
    } // Special zone for Norway


    if (Lat >= 56.0 && Lat < 64.0 && Long >= 3.0 && Long < 12.0) {
      ZoneNumber = 32;
    } // Special zones for Svalbard


    if (Lat >= 72.0 && Lat < 84.0) {
      if (Long >= 0.0 && Long < 9.0) {
        ZoneNumber = 31;
      } else if (Long >= 9.0 && Long < 21.0) {
        ZoneNumber = 33;
      } else if (Long >= 21.0 && Long < 33.0) {
        ZoneNumber = 35;
      } else if (Long >= 33.0 && Long < 42.0) {
        ZoneNumber = 37;
      }
    }

    LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3; //+3 puts origin
    // in middle of
    // zone

    LongOriginRad = degToRad(LongOrigin);
    eccPrimeSquared = eccSquared / (1 - eccSquared);
    N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
    T = Math.tan(LatRad) * Math.tan(LatRad);
    C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
    A = Math.cos(LatRad) * (LongRad - LongOriginRad);
    M = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad) + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad) - 35 * eccSquared * eccSquared * eccSquared / 3072 * Math.sin(6 * LatRad));
    var UTMEasting = k0 * N * (A + (1 - T + C) * A * A * A / 6.0 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120.0) + 500000.0;
    var UTMNorthing = k0 * (M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24.0 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720.0));

    if (Lat < 0.0) {
      UTMNorthing += 10000000.0; //10000000 meter offset for
      // southern hemisphere
    }

    return {
      northing: Math.round(UTMNorthing),
      easting: Math.round(UTMEasting),
      zoneNumber: ZoneNumber,
      zoneLetter: getLetterDesignator(Lat)
    };
  }
  /**
   * Converts UTM coords to lat/long, using the WGS84 ellipsoid. This is a convenience
   * class where the Zone can be specified as a single string eg."60N" which
   * is then broken down into the ZoneNumber and ZoneLetter.
   *
   * @private
   * @param {object} utm An object literal with northing, easting, zoneNumber
   *     and zoneLetter properties. If an optional accuracy property is
   *     provided (in meters), a bounding box will be returned instead of
   *     latitude and longitude.
   * @return {object} An object literal containing either lat and lon values
   *     (if no accuracy was provided), or top, right, bottom and left values
   *     for the bounding box calculated according to the provided accuracy.
   *     Returns null if the conversion failed.
   */


  function UTMtoLL(utm) {
    var UTMNorthing = utm.northing;
    var UTMEasting = utm.easting;
    var zoneLetter = utm.zoneLetter;
    var zoneNumber = utm.zoneNumber; // check the ZoneNummber is valid

    if (zoneNumber < 0 || zoneNumber > 60) {
      return null;
    }

    var k0 = 0.9996;
    var a = 6378137.0; //ellip.radius;

    var eccSquared = 0.00669438; //ellip.eccsq;

    var eccPrimeSquared;
    var e1 = (1 - Math.sqrt(1 - eccSquared)) / (1 + Math.sqrt(1 - eccSquared));
    var N1, T1, C1, R1, D, M;
    var LongOrigin;
    var mu, phi1Rad; // remove 500,000 meter offset for longitude

    var x = UTMEasting - 500000.0;
    var y = UTMNorthing; // We must know somehow if we are in the Northern or Southern
    // hemisphere, this is the only time we use the letter So even
    // if the Zone letter isn't exactly correct it should indicate
    // the hemisphere correctly

    if (zoneLetter < 'N') {
      y -= 10000000.0; // remove 10,000,000 meter offset used
      // for southern hemisphere
    } // There are 60 zones with zone 1 being at West -180 to -174


    LongOrigin = (zoneNumber - 1) * 6 - 180 + 3; // +3 puts origin
    // in middle of
    // zone

    eccPrimeSquared = eccSquared / (1 - eccSquared);
    M = y / k0;
    mu = M / (a * (1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256));
    phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * mu) + 151 * e1 * e1 * e1 / 96 * Math.sin(6 * mu); // double phi1 = ProjMath.radToDeg(phi1Rad);

    N1 = a / Math.sqrt(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad));
    T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
    C1 = eccPrimeSquared * Math.cos(phi1Rad) * Math.cos(phi1Rad);
    R1 = a * (1 - eccSquared) / Math.pow(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
    D = x / (N1 * k0);
    var lat = phi1Rad - N1 * Math.tan(phi1Rad) / R1 * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C1 * C1) * D * D * D * D * D * D / 720);
    lat = radToDeg(lat);
    var lon = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / Math.cos(phi1Rad);
    lon = LongOrigin + radToDeg(lon);
    var result;

    if (utm.accuracy) {
      var topRight = UTMtoLL({
        northing: utm.northing + utm.accuracy,
        easting: utm.easting + utm.accuracy,
        zoneLetter: utm.zoneLetter,
        zoneNumber: utm.zoneNumber
      });
      result = {
        top: topRight.lat,
        right: topRight.lon,
        bottom: lat,
        left: lon
      };
    } else {
      result = {
        lat: lat,
        lon: lon
      };
    }

    return result;
  }
  /**
   * Calculates the MGRS letter designator for the given latitude.
   *
   * @private
   * @param {number} lat The latitude in WGS84 to get the letter designator
   *     for.
   * @return {char} The letter designator.
   */


  function getLetterDesignator(lat) {
    //This is here as an error flag to show that the Latitude is
    //outside MGRS limits
    var LetterDesignator = 'Z';

    if (84 >= lat && lat >= 72) {
      LetterDesignator = 'X';
    } else if (72 > lat && lat >= 64) {
      LetterDesignator = 'W';
    } else if (64 > lat && lat >= 56) {
      LetterDesignator = 'V';
    } else if (56 > lat && lat >= 48) {
      LetterDesignator = 'U';
    } else if (48 > lat && lat >= 40) {
      LetterDesignator = 'T';
    } else if (40 > lat && lat >= 32) {
      LetterDesignator = 'S';
    } else if (32 > lat && lat >= 24) {
      LetterDesignator = 'R';
    } else if (24 > lat && lat >= 16) {
      LetterDesignator = 'Q';
    } else if (16 > lat && lat >= 8) {
      LetterDesignator = 'P';
    } else if (8 > lat && lat >= 0) {
      LetterDesignator = 'N';
    } else if (0 > lat && lat >= -8) {
      LetterDesignator = 'M';
    } else if (-8 > lat && lat >= -16) {
      LetterDesignator = 'L';
    } else if (-16 > lat && lat >= -24) {
      LetterDesignator = 'K';
    } else if (-24 > lat && lat >= -32) {
      LetterDesignator = 'J';
    } else if (-32 > lat && lat >= -40) {
      LetterDesignator = 'H';
    } else if (-40 > lat && lat >= -48) {
      LetterDesignator = 'G';
    } else if (-48 > lat && lat >= -56) {
      LetterDesignator = 'F';
    } else if (-56 > lat && lat >= -64) {
      LetterDesignator = 'E';
    } else if (-64 > lat && lat >= -72) {
      LetterDesignator = 'D';
    } else if (-72 > lat && lat >= -80) {
      LetterDesignator = 'C';
    }

    return LetterDesignator;
  }
  /**
   * Encodes a UTM location as MGRS string.
   *
   * @private
   * @param {object} utm An object literal with easting, northing,
   *     zoneLetter, zoneNumber
   * @param {number} accuracy Accuracy in digits (1-5).
   * @return {string} MGRS string for the given UTM location.
   */


  function encode(utm, accuracy) {
    // prepend with leading zeroes
    var seasting = "00000" + utm.easting,
        snorthing = "00000" + utm.northing;
    return utm.zoneNumber + utm.zoneLetter + get100kID(utm.easting, utm.northing, utm.zoneNumber) + seasting.substr(seasting.length - 5, accuracy) + snorthing.substr(snorthing.length - 5, accuracy);
  }
  /**
   * Get the two letter 100k designator for a given UTM easting,
   * northing and zone number value.
   *
   * @private
   * @param {number} easting
   * @param {number} northing
   * @param {number} zoneNumber
   * @return the two letter 100k designator for the given UTM location.
   */


  function get100kID(easting, northing, zoneNumber) {
    var setParm = get100kSetForZone(zoneNumber);
    var setColumn = Math.floor(easting / 100000);
    var setRow = Math.floor(northing / 100000) % 20;
    return getLetter100kID(setColumn, setRow, setParm);
  }
  /**
   * Given a UTM zone number, figure out the MGRS 100K set it is in.
   *
   * @private
   * @param {number} i An UTM zone number.
   * @return {number} the 100k set the UTM zone is in.
   */


  function get100kSetForZone(i) {
    var setParm = i % NUM_100K_SETS;

    if (setParm === 0) {
      setParm = NUM_100K_SETS;
    }

    return setParm;
  }
  /**
   * Get the two-letter MGRS 100k designator given information
   * translated from the UTM northing, easting and zone number.
   *
   * @private
   * @param {number} column the column index as it relates to the MGRS
   *        100k set spreadsheet, created from the UTM easting.
   *        Values are 1-8.
   * @param {number} row the row index as it relates to the MGRS 100k set
   *        spreadsheet, created from the UTM northing value. Values
   *        are from 0-19.
   * @param {number} parm the set block, as it relates to the MGRS 100k set
   *        spreadsheet, created from the UTM zone. Values are from
   *        1-60.
   * @return two letter MGRS 100k code.
   */


  function getLetter100kID(column, row, parm) {
    // colOrigin and rowOrigin are the letters at the origin of the set
    var index = parm - 1;
    var colOrigin = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(index);
    var rowOrigin = SET_ORIGIN_ROW_LETTERS.charCodeAt(index); // colInt and rowInt are the letters to build to return

    var colInt = colOrigin + column - 1;
    var rowInt = rowOrigin + row;
    var rollover = false;

    if (colInt > Z) {
      colInt = colInt - Z + A - 1;
      rollover = true;
    }

    if (colInt === I || colOrigin < I && colInt > I || (colInt > I || colOrigin < I) && rollover) {
      colInt++;
    }

    if (colInt === O || colOrigin < O && colInt > O || (colInt > O || colOrigin < O) && rollover) {
      colInt++;

      if (colInt === I) {
        colInt++;
      }
    }

    if (colInt > Z) {
      colInt = colInt - Z + A - 1;
    }

    if (rowInt > V) {
      rowInt = rowInt - V + A - 1;
      rollover = true;
    } else {
      rollover = false;
    }

    if (rowInt === I || rowOrigin < I && rowInt > I || (rowInt > I || rowOrigin < I) && rollover) {
      rowInt++;
    }

    if (rowInt === O || rowOrigin < O && rowInt > O || (rowInt > O || rowOrigin < O) && rollover) {
      rowInt++;

      if (rowInt === I) {
        rowInt++;
      }
    }

    if (rowInt > V) {
      rowInt = rowInt - V + A - 1;
    }

    var twoLetter = String.fromCharCode(colInt) + String.fromCharCode(rowInt);
    return twoLetter;
  }
  /**
   * Decode the UTM parameters from a MGRS string.
   *
   * @private
   * @param {string} mgrsString an UPPERCASE coordinate string is expected.
   * @return {object} An object literal with easting, northing, zoneLetter,
   *     zoneNumber and accuracy (in meters) properties.
   */


  function decode(mgrsString) {
    if (mgrsString && mgrsString.length === 0) {
      throw "MGRSPoint coverting from nothing";
    }

    var length = mgrsString.length;
    var hunK = null;
    var sb = "";
    var testChar;
    var i = 0; // get Zone number

    while (!/[A-Z]/.test(testChar = mgrsString.charAt(i))) {
      if (i >= 2) {
        throw "MGRSPoint bad conversion from: " + mgrsString;
      }

      sb += testChar;
      i++;
    }

    var zoneNumber = parseInt(sb, 10);

    if (i === 0 || i + 3 > length) {
      // A good MGRS string has to be 4-5 digits long,
      // ##AAA/#AAA at least.
      throw "MGRSPoint bad conversion from: " + mgrsString;
    }

    var zoneLetter = mgrsString.charAt(i++); // Should we check the zone letter here? Why not.

    if (zoneLetter <= 'A' || zoneLetter === 'B' || zoneLetter === 'Y' || zoneLetter >= 'Z' || zoneLetter === 'I' || zoneLetter === 'O') {
      throw "MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString;
    }

    hunK = mgrsString.substring(i, i += 2);
    var set = get100kSetForZone(zoneNumber);
    var east100k = getEastingFromChar(hunK.charAt(0), set);
    var north100k = getNorthingFromChar(hunK.charAt(1), set); // We have a bug where the northing may be 2000000 too low.
    // How
    // do we know when to roll over?

    while (north100k < getMinNorthing(zoneLetter)) {
      north100k += 2000000;
    } // calculate the char index for easting/northing separator


    var remainder = length - i;

    if (remainder % 2 !== 0) {
      throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + mgrsString;
    }

    var sep = remainder / 2;
    var sepEasting = 0.0;
    var sepNorthing = 0.0;
    var accuracyBonus, sepEastingString, sepNorthingString, easting, northing;

    if (sep > 0) {
      accuracyBonus = 100000.0 / Math.pow(10, sep);
      sepEastingString = mgrsString.substring(i, i + sep);
      sepEasting = parseFloat(sepEastingString) * accuracyBonus;
      sepNorthingString = mgrsString.substring(i + sep);
      sepNorthing = parseFloat(sepNorthingString) * accuracyBonus;
    }

    easting = sepEasting + east100k;
    northing = sepNorthing + north100k;
    return {
      easting: easting,
      northing: northing,
      zoneLetter: zoneLetter,
      zoneNumber: zoneNumber,
      accuracy: accuracyBonus
    };
  }
  /**
   * Given the first letter from a two-letter MGRS 100k zone, and given the
   * MGRS table set for the zone number, figure out the easting value that
   * should be added to the other, secondary easting value.
   *
   * @private
   * @param {char} e The first letter from a two-letter MGRS 100´k zone.
   * @param {number} set The MGRS table set for the zone number.
   * @return {number} The easting value for the given letter and set.
   */


  function getEastingFromChar(e, set) {
    // colOrigin is the letter at the origin of the set for the
    // column
    var curCol = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set - 1);
    var eastingValue = 100000.0;
    var rewindMarker = false;

    while (curCol !== e.charCodeAt(0)) {
      curCol++;

      if (curCol === I) {
        curCol++;
      }

      if (curCol === O) {
        curCol++;
      }

      if (curCol > Z) {
        if (rewindMarker) {
          throw "Bad character: " + e;
        }

        curCol = A;
        rewindMarker = true;
      }

      eastingValue += 100000.0;
    }

    return eastingValue;
  }
  /**
   * Given the second letter from a two-letter MGRS 100k zone, and given the
   * MGRS table set for the zone number, figure out the northing value that
   * should be added to the other, secondary northing value. You have to
   * remember that Northings are determined from the equator, and the vertical
   * cycle of letters mean a 2000000 additional northing meters. This happens
   * approx. every 18 degrees of latitude. This method does *NOT* count any
   * additional northings. You have to figure out how many 2000000 meters need
   * to be added for the zone letter of the MGRS coordinate.
   *
   * @private
   * @param {char} n Second letter of the MGRS 100k zone
   * @param {number} set The MGRS table set number, which is dependent on the
   *     UTM zone number.
   * @return {number} The northing value for the given letter and set.
   */


  function getNorthingFromChar(n, set) {
    if (n > 'V') {
      throw "MGRSPoint given invalid Northing " + n;
    } // rowOrigin is the letter at the origin of the set for the
    // column


    var curRow = SET_ORIGIN_ROW_LETTERS.charCodeAt(set - 1);
    var northingValue = 0.0;
    var rewindMarker = false;

    while (curRow !== n.charCodeAt(0)) {
      curRow++;

      if (curRow === I) {
        curRow++;
      }

      if (curRow === O) {
        curRow++;
      } // fixing a bug making whole application hang in this loop
      // when 'n' is a wrong character


      if (curRow > V) {
        if (rewindMarker) {
          // making sure that this loop ends
          throw "Bad character: " + n;
        }

        curRow = A;
        rewindMarker = true;
      }

      northingValue += 100000.0;
    }

    return northingValue;
  }
  /**
   * The function getMinNorthing returns the minimum northing value of a MGRS
   * zone.
   *
   * Ported from Geotrans' c Lattitude_Band_Value structure table.
   *
   * @private
   * @param {char} zoneLetter The MGRS zone to get the min northing for.
   * @return {number}
   */


  function getMinNorthing(zoneLetter) {
    var northing;

    switch (zoneLetter) {
      case 'C':
        northing = 1100000.0;
        break;

      case 'D':
        northing = 2000000.0;
        break;

      case 'E':
        northing = 2800000.0;
        break;

      case 'F':
        northing = 3700000.0;
        break;

      case 'G':
        northing = 4600000.0;
        break;

      case 'H':
        northing = 5500000.0;
        break;

      case 'J':
        northing = 6400000.0;
        break;

      case 'K':
        northing = 7300000.0;
        break;

      case 'L':
        northing = 8200000.0;
        break;

      case 'M':
        northing = 9100000.0;
        break;

      case 'N':
        northing = 0.0;
        break;

      case 'P':
        northing = 800000.0;
        break;

      case 'Q':
        northing = 1700000.0;
        break;

      case 'R':
        northing = 2600000.0;
        break;

      case 'S':
        northing = 3500000.0;
        break;

      case 'T':
        northing = 4400000.0;
        break;

      case 'U':
        northing = 5300000.0;
        break;

      case 'V':
        northing = 6200000.0;
        break;

      case 'W':
        northing = 7000000.0;
        break;

      case 'X':
        northing = 7900000.0;
        break;

      default:
        northing = -1.0;
    }

    if (northing >= 0.0) {
      return northing;
    } else {
      throw "Invalid zone letter: " + zoneLetter;
    }
  }

  function Point(x, y, z) {
    if (!(this instanceof Point)) {
      return new Point(x, y, z);
    }

    if (Array.isArray(x)) {
      this.x = x[0];
      this.y = x[1];
      this.z = x[2] || 0.0;
    } else if (_typeof$1(x) === 'object') {
      this.x = x.x;
      this.y = x.y;
      this.z = x.z || 0.0;
    } else if (typeof x === 'string' && typeof y === 'undefined') {
      var coords = x.split(',');
      this.x = parseFloat(coords[0], 10);
      this.y = parseFloat(coords[1], 10);
      this.z = parseFloat(coords[2], 10) || 0.0;
    } else {
      this.x = x;
      this.y = y;
      this.z = z || 0.0;
    }

    console.warn('proj4.Point will be removed in version 3, use proj4.toPoint');
  }

  Point.fromMGRS = function (mgrsStr) {
    return new Point(toPoint(mgrsStr));
  };

  Point.prototype.toMGRS = function (accuracy) {
    return forward$s([this.x, this.y], accuracy);
  };

  var C00 = 1;
  var C02 = 0.25;
  var C04 = 0.046875;
  var C06 = 0.01953125;
  var C08 = 0.01068115234375;
  var C22 = 0.75;
  var C44 = 0.46875;
  var C46 = 0.01302083333333333333;
  var C48 = 0.00712076822916666666;
  var C66 = 0.36458333333333333333;
  var C68 = 0.00569661458333333333;
  var C88 = 0.3076171875;
  function pj_enfn (es) {
    var en = [];
    en[0] = C00 - es * (C02 + es * (C04 + es * (C06 + es * C08)));
    en[1] = es * (C22 - es * (C04 + es * (C06 + es * C08)));
    var t = es * es;
    en[2] = t * (C44 - es * (C46 + es * C48));
    t *= es;
    en[3] = t * (C66 - es * C68);
    en[4] = t * es * C88;
    return en;
  }

  function pj_mlfn (phi, sphi, cphi, en) {
    cphi *= sphi;
    sphi *= sphi;
    return en[0] * phi - cphi * (en[1] + sphi * (en[2] + sphi * (en[3] + sphi * en[4])));
  }

  var MAX_ITER$3 = 20;
  function pj_inv_mlfn (arg, es, en) {
    var k = 1 / (1 - es);
    var phi = arg;

    for (var i = MAX_ITER$3; i; --i) {
      /* rarely goes over 2 iterations */
      var s = Math.sin(phi);
      var t = 1 - es * s * s; //t = this.pj_mlfn(phi, s, Math.cos(phi), en) - arg;
      //phi -= t * (t * Math.sqrt(t)) * k;

      t = (pj_mlfn(phi, s, Math.cos(phi), en) - arg) * (t * Math.sqrt(t)) * k;
      phi -= t;

      if (Math.abs(t) < EPSLN) {
        return phi;
      }
    } //..reportError("cass:pj_inv_mlfn: Convergence error");


    return phi;
  }

  // Heavily based on this tmerc projection implementation
  function init$t() {
    this.x0 = this.x0 !== undefined ? this.x0 : 0;
    this.y0 = this.y0 !== undefined ? this.y0 : 0;
    this.long0 = this.long0 !== undefined ? this.long0 : 0;
    this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;

    if (this.es) {
      this.en = pj_enfn(this.es);
      this.ml0 = pj_mlfn(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en);
    }
  }
  /**
      Transverse Mercator Forward  - long/lat to x/y
      long/lat in radians
    */

  function forward$r(p) {
    var lon = p.x;
    var lat = p.y;
    var delta_lon = adjust_lon(lon - this.long0);
    var con;
    var x, y;
    var sin_phi = Math.sin(lat);
    var cos_phi = Math.cos(lat);

    if (!this.es) {
      var b = cos_phi * Math.sin(delta_lon);

      if (Math.abs(Math.abs(b) - 1) < EPSLN) {
        return 93;
      } else {
        x = 0.5 * this.a * this.k0 * Math.log((1 + b) / (1 - b)) + this.x0;
        y = cos_phi * Math.cos(delta_lon) / Math.sqrt(1 - Math.pow(b, 2));
        b = Math.abs(y);

        if (b >= 1) {
          if (b - 1 > EPSLN) {
            return 93;
          } else {
            y = 0;
          }
        } else {
          y = Math.acos(y);
        }

        if (lat < 0) {
          y = -y;
        }

        y = this.a * this.k0 * (y - this.lat0) + this.y0;
      }
    } else {
      var al = cos_phi * delta_lon;
      var als = Math.pow(al, 2);
      var c = this.ep2 * Math.pow(cos_phi, 2);
      var cs = Math.pow(c, 2);
      var tq = Math.abs(cos_phi) > EPSLN ? Math.tan(lat) : 0;
      var t = Math.pow(tq, 2);
      var ts = Math.pow(t, 2);
      con = 1 - this.es * Math.pow(sin_phi, 2);
      al = al / Math.sqrt(con);
      var ml = pj_mlfn(lat, sin_phi, cos_phi, this.en);
      x = this.a * (this.k0 * al * (1 + als / 6 * (1 - t + c + als / 20 * (5 - 18 * t + ts + 14 * c - 58 * t * c + als / 42 * (61 + 179 * ts - ts * t - 479 * t))))) + this.x0;
      y = this.a * (this.k0 * (ml - this.ml0 + sin_phi * delta_lon * al / 2 * (1 + als / 12 * (5 - t + 9 * c + 4 * cs + als / 30 * (61 + ts - 58 * t + 270 * c - 330 * t * c + als / 56 * (1385 + 543 * ts - ts * t - 3111 * t)))))) + this.y0;
    }

    p.x = x;
    p.y = y;
    return p;
  }
  /**
      Transverse Mercator Inverse  -  x/y to long/lat
    */

  function inverse$r(p) {
    var con, phi;
    var lat, lon;
    var x = (p.x - this.x0) * (1 / this.a);
    var y = (p.y - this.y0) * (1 / this.a);

    if (!this.es) {
      var f = Math.exp(x / this.k0);
      var g = 0.5 * (f - 1 / f);
      var temp = this.lat0 + y / this.k0;
      var h = Math.cos(temp);
      con = Math.sqrt((1 - Math.pow(h, 2)) / (1 + Math.pow(g, 2)));
      lat = Math.asin(con);

      if (y < 0) {
        lat = -lat;
      }

      if (g === 0 && h === 0) {
        lon = 0;
      } else {
        lon = adjust_lon(Math.atan2(g, h) + this.long0);
      }
    } else {
      // ellipsoidal form
      con = this.ml0 + y / this.k0;
      phi = pj_inv_mlfn(con, this.es, this.en);

      if (Math.abs(phi) < HALF_PI) {
        var sin_phi = Math.sin(phi);
        var cos_phi = Math.cos(phi);
        var tan_phi = Math.abs(cos_phi) > EPSLN ? Math.tan(phi) : 0;
        var c = this.ep2 * Math.pow(cos_phi, 2);
        var cs = Math.pow(c, 2);
        var t = Math.pow(tan_phi, 2);
        var ts = Math.pow(t, 2);
        con = 1 - this.es * Math.pow(sin_phi, 2);
        var d = x * Math.sqrt(con) / this.k0;
        var ds = Math.pow(d, 2);
        con = con * tan_phi;
        lat = phi - con * ds / (1 - this.es) * 0.5 * (1 - ds / 12 * (5 + 3 * t - 9 * c * t + c - 4 * cs - ds / 30 * (61 + 90 * t - 252 * c * t + 45 * ts + 46 * c - ds / 56 * (1385 + 3633 * t + 4095 * ts + 1574 * ts * t))));
        lon = adjust_lon(this.long0 + d * (1 - ds / 6 * (1 + 2 * t + c - ds / 20 * (5 + 28 * t + 24 * ts + 8 * c * t + 6 * c - ds / 42 * (61 + 662 * t + 1320 * ts + 720 * ts * t)))) / cos_phi);
      } else {
        lat = HALF_PI * sign(y);
        lon = 0;
      }
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$s = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
  var tmerc = {
    init: init$t,
    forward: forward$r,
    inverse: inverse$r,
    names: names$s
  };

  function sinh (x) {
    var r = Math.exp(x);
    r = (r - 1 / r) / 2;
    return r;
  }

  function hypot (x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    var a = Math.max(x, y);
    var b = Math.min(x, y) / (a ? a : 1);
    return a * Math.sqrt(1 + Math.pow(b, 2));
  }

  function log1py (x) {
    var y = 1 + x;
    var z = y - 1;
    return z === 0 ? x : x * Math.log(y) / z;
  }

  function asinhy (x) {
    var y = Math.abs(x);
    y = log1py(y * (1 + y / (hypot(1, y) + 1)));
    return x < 0 ? -y : y;
  }

  function gatg (pp, B) {
    var cos_2B = 2 * Math.cos(2 * B);
    var i = pp.length - 1;
    var h1 = pp[i];
    var h2 = 0;
    var h;

    while (--i >= 0) {
      h = -h2 + cos_2B * h1 + pp[i];
      h2 = h1;
      h1 = h;
    }

    return B + h * Math.sin(2 * B);
  }

  function clens (pp, arg_r) {
    var r = 2 * Math.cos(arg_r);
    var i = pp.length - 1;
    var hr1 = pp[i];
    var hr2 = 0;
    var hr;

    while (--i >= 0) {
      hr = -hr2 + r * hr1 + pp[i];
      hr2 = hr1;
      hr1 = hr;
    }

    return Math.sin(arg_r) * hr;
  }

  function cosh (x) {
    var r = Math.exp(x);
    r = (r + 1 / r) / 2;
    return r;
  }

  function clens_cmplx (pp, arg_r, arg_i) {
    var sin_arg_r = Math.sin(arg_r);
    var cos_arg_r = Math.cos(arg_r);
    var sinh_arg_i = sinh(arg_i);
    var cosh_arg_i = cosh(arg_i);
    var r = 2 * cos_arg_r * cosh_arg_i;
    var i = -2 * sin_arg_r * sinh_arg_i;
    var j = pp.length - 1;
    var hr = pp[j];
    var hi1 = 0;
    var hr1 = 0;
    var hi = 0;
    var hr2;
    var hi2;

    while (--j >= 0) {
      hr2 = hr1;
      hi2 = hi1;
      hr1 = hr;
      hi1 = hi;
      hr = -hr2 + r * hr1 - i * hi1 + pp[j];
      hi = -hi2 + i * hr1 + r * hi1;
    }

    r = sin_arg_r * cosh_arg_i;
    i = cos_arg_r * sinh_arg_i;
    return [r * hr - i * hi, r * hi + i * hr];
  }

  // Heavily based on this etmerc projection implementation
  function init$s() {
    if (!this.approx && (isNaN(this.es) || this.es <= 0)) {
      throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
    }

    if (this.approx) {
      // When '+approx' is set, use tmerc instead
      tmerc.init.apply(this);
      this.forward = tmerc.forward;
      this.inverse = tmerc.inverse;
    }

    this.x0 = this.x0 !== undefined ? this.x0 : 0;
    this.y0 = this.y0 !== undefined ? this.y0 : 0;
    this.long0 = this.long0 !== undefined ? this.long0 : 0;
    this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;
    this.cgb = [];
    this.cbg = [];
    this.utg = [];
    this.gtu = [];
    var f = this.es / (1 + Math.sqrt(1 - this.es));
    var n = f / (2 - f);
    var np = n;
    this.cgb[0] = n * (2 + n * (-2 / 3 + n * (-2 + n * (116 / 45 + n * (26 / 45 + n * (-2854 / 675))))));
    this.cbg[0] = n * (-2 + n * (2 / 3 + n * (4 / 3 + n * (-82 / 45 + n * (32 / 45 + n * (4642 / 4725))))));
    np = np * n;
    this.cgb[1] = np * (7 / 3 + n * (-8 / 5 + n * (-227 / 45 + n * (2704 / 315 + n * (2323 / 945)))));
    this.cbg[1] = np * (5 / 3 + n * (-16 / 15 + n * (-13 / 9 + n * (904 / 315 + n * (-1522 / 945)))));
    np = np * n;
    this.cgb[2] = np * (56 / 15 + n * (-136 / 35 + n * (-1262 / 105 + n * (73814 / 2835))));
    this.cbg[2] = np * (-26 / 15 + n * (34 / 21 + n * (8 / 5 + n * (-12686 / 2835))));
    np = np * n;
    this.cgb[3] = np * (4279 / 630 + n * (-332 / 35 + n * (-399572 / 14175)));
    this.cbg[3] = np * (1237 / 630 + n * (-12 / 5 + n * (-24832 / 14175)));
    np = np * n;
    this.cgb[4] = np * (4174 / 315 + n * (-144838 / 6237));
    this.cbg[4] = np * (-734 / 315 + n * (109598 / 31185));
    np = np * n;
    this.cgb[5] = np * (601676 / 22275);
    this.cbg[5] = np * (444337 / 155925);
    np = Math.pow(n, 2);
    this.Qn = this.k0 / (1 + n) * (1 + np * (1 / 4 + np * (1 / 64 + np / 256)));
    this.utg[0] = n * (-0.5 + n * (2 / 3 + n * (-37 / 96 + n * (1 / 360 + n * (81 / 512 + n * (-96199 / 604800))))));
    this.gtu[0] = n * (0.5 + n * (-2 / 3 + n * (5 / 16 + n * (41 / 180 + n * (-127 / 288 + n * (7891 / 37800))))));
    this.utg[1] = np * (-1 / 48 + n * (-1 / 15 + n * (437 / 1440 + n * (-46 / 105 + n * (1118711 / 3870720)))));
    this.gtu[1] = np * (13 / 48 + n * (-3 / 5 + n * (557 / 1440 + n * (281 / 630 + n * (-1983433 / 1935360)))));
    np = np * n;
    this.utg[2] = np * (-17 / 480 + n * (37 / 840 + n * (209 / 4480 + n * (-5569 / 90720))));
    this.gtu[2] = np * (61 / 240 + n * (-103 / 140 + n * (15061 / 26880 + n * (167603 / 181440))));
    np = np * n;
    this.utg[3] = np * (-4397 / 161280 + n * (11 / 504 + n * (830251 / 7257600)));
    this.gtu[3] = np * (49561 / 161280 + n * (-179 / 168 + n * (6601661 / 7257600)));
    np = np * n;
    this.utg[4] = np * (-4583 / 161280 + n * (108847 / 3991680));
    this.gtu[4] = np * (34729 / 80640 + n * (-3418889 / 1995840));
    np = np * n;
    this.utg[5] = np * (-20648693 / 638668800);
    this.gtu[5] = np * (212378941 / 319334400);
    var Z = gatg(this.cbg, this.lat0);
    this.Zb = -this.Qn * (Z + clens(this.gtu, 2 * Z));
  }
  function forward$q(p) {
    var Ce = adjust_lon(p.x - this.long0);
    var Cn = p.y;
    Cn = gatg(this.cbg, Cn);
    var sin_Cn = Math.sin(Cn);
    var cos_Cn = Math.cos(Cn);
    var sin_Ce = Math.sin(Ce);
    var cos_Ce = Math.cos(Ce);
    Cn = Math.atan2(sin_Cn, cos_Ce * cos_Cn);
    Ce = Math.atan2(sin_Ce * cos_Cn, hypot(sin_Cn, cos_Cn * cos_Ce));
    Ce = asinhy(Math.tan(Ce));
    var tmp = clens_cmplx(this.gtu, 2 * Cn, 2 * Ce);
    Cn = Cn + tmp[0];
    Ce = Ce + tmp[1];
    var x;
    var y;

    if (Math.abs(Ce) <= 2.623395162778) {
      x = this.a * (this.Qn * Ce) + this.x0;
      y = this.a * (this.Qn * Cn + this.Zb) + this.y0;
    } else {
      x = Infinity;
      y = Infinity;
    }

    p.x = x;
    p.y = y;
    return p;
  }
  function inverse$q(p) {
    var Ce = (p.x - this.x0) * (1 / this.a);
    var Cn = (p.y - this.y0) * (1 / this.a);
    Cn = (Cn - this.Zb) / this.Qn;
    Ce = Ce / this.Qn;
    var lon;
    var lat;

    if (Math.abs(Ce) <= 2.623395162778) {
      var tmp = clens_cmplx(this.utg, 2 * Cn, 2 * Ce);
      Cn = Cn + tmp[0];
      Ce = Ce + tmp[1];
      Ce = Math.atan(sinh(Ce));
      var sin_Cn = Math.sin(Cn);
      var cos_Cn = Math.cos(Cn);
      var sin_Ce = Math.sin(Ce);
      var cos_Ce = Math.cos(Ce);
      Cn = Math.atan2(sin_Cn * cos_Ce, hypot(sin_Ce, cos_Ce * cos_Cn));
      Ce = Math.atan2(sin_Ce, cos_Ce * cos_Cn);
      lon = adjust_lon(Ce + this.long0);
      lat = gatg(this.cgb, Cn);
    } else {
      lon = Infinity;
      lat = Infinity;
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$r = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "tmerc"];
  var etmerc = {
    init: init$s,
    forward: forward$q,
    inverse: inverse$q,
    names: names$r
  };

  function adjust_zone (zone, lon) {
    if (zone === undefined) {
      zone = Math.floor((adjust_lon(lon) + Math.PI) * 30 / Math.PI) + 1;

      if (zone < 0) {
        return 0;
      } else if (zone > 60) {
        return 60;
      }
    }

    return zone;
  }

  var dependsOn = 'etmerc';
  function init$r() {
    var zone = adjust_zone(this.zone, this.long0);

    if (zone === undefined) {
      throw new Error('unknown utm zone');
    }

    this.lat0 = 0;
    this.long0 = (6 * Math.abs(zone) - 183) * D2R$1;
    this.x0 = 500000;
    this.y0 = this.utmSouth ? 10000000 : 0;
    this.k0 = 0.9996;
    etmerc.init.apply(this);
    this.forward = etmerc.forward;
    this.inverse = etmerc.inverse;
  }
  var names$q = ["Universal Transverse Mercator System", "utm"];
  var utm = {
    init: init$r,
    names: names$q,
    dependsOn: dependsOn
  };

  function srat (esinp, exp) {
    return Math.pow((1 - esinp) / (1 + esinp), exp);
  }

  var MAX_ITER$2 = 20;
  function init$q() {
    var sphi = Math.sin(this.lat0);
    var cphi = Math.cos(this.lat0);
    cphi *= cphi;
    this.rc = Math.sqrt(1 - this.es) / (1 - this.es * sphi * sphi);
    this.C = Math.sqrt(1 + this.es * cphi * cphi / (1 - this.es));
    this.phic0 = Math.asin(sphi / this.C);
    this.ratexp = 0.5 * this.C * this.e;
    this.K = Math.tan(0.5 * this.phic0 + FORTPI) / (Math.pow(Math.tan(0.5 * this.lat0 + FORTPI), this.C) * srat(this.e * sphi, this.ratexp));
  }
  function forward$p(p) {
    var lon = p.x;
    var lat = p.y;
    p.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * lat + FORTPI), this.C) * srat(this.e * Math.sin(lat), this.ratexp)) - HALF_PI;
    p.x = this.C * lon;
    return p;
  }
  function inverse$p(p) {
    var DEL_TOL = 1e-14;
    var lon = p.x / this.C;
    var lat = p.y;
    var num = Math.pow(Math.tan(0.5 * lat + FORTPI) / this.K, 1 / this.C);

    for (var i = MAX_ITER$2; i > 0; --i) {
      lat = 2 * Math.atan(num * srat(this.e * Math.sin(p.y), -0.5 * this.e)) - HALF_PI;

      if (Math.abs(lat - p.y) < DEL_TOL) {
        break;
      }

      p.y = lat;
    }
    /* convergence failed */


    if (!i) {
      return null;
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$p = ["gauss"];
  var gauss = {
    init: init$q,
    forward: forward$p,
    inverse: inverse$p,
    names: names$p
  };

  function init$p() {
    gauss.init.apply(this);

    if (!this.rc) {
      return;
    }

    this.sinc0 = Math.sin(this.phic0);
    this.cosc0 = Math.cos(this.phic0);
    this.R2 = 2 * this.rc;

    if (!this.title) {
      this.title = "Oblique Stereographic Alternative";
    }
  }
  function forward$o(p) {
    var sinc, cosc, cosl, k;
    p.x = adjust_lon(p.x - this.long0);
    gauss.forward.apply(this, [p]);
    sinc = Math.sin(p.y);
    cosc = Math.cos(p.y);
    cosl = Math.cos(p.x);
    k = this.k0 * this.R2 / (1 + this.sinc0 * sinc + this.cosc0 * cosc * cosl);
    p.x = k * cosc * Math.sin(p.x);
    p.y = k * (this.cosc0 * sinc - this.sinc0 * cosc * cosl);
    p.x = this.a * p.x + this.x0;
    p.y = this.a * p.y + this.y0;
    return p;
  }
  function inverse$o(p) {
    var sinc, cosc, lon, lat, rho;
    p.x = (p.x - this.x0) / this.a;
    p.y = (p.y - this.y0) / this.a;
    p.x /= this.k0;
    p.y /= this.k0;

    if (rho = Math.sqrt(p.x * p.x + p.y * p.y)) {
      var c = 2 * Math.atan2(rho, this.R2);
      sinc = Math.sin(c);
      cosc = Math.cos(c);
      lat = Math.asin(cosc * this.sinc0 + p.y * sinc * this.cosc0 / rho);
      lon = Math.atan2(p.x * sinc, rho * this.cosc0 * cosc - p.y * this.sinc0 * sinc);
    } else {
      lat = this.phic0;
      lon = 0;
    }

    p.x = lon;
    p.y = lat;
    gauss.inverse.apply(this, [p]);
    p.x = adjust_lon(p.x + this.long0);
    return p;
  }
  var names$o = ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
  var sterea = {
    init: init$p,
    forward: forward$o,
    inverse: inverse$o,
    names: names$o
  };

  function ssfn_(phit, sinphi, eccen) {
    sinphi *= eccen;
    return Math.tan(0.5 * (HALF_PI + phit)) * Math.pow((1 - sinphi) / (1 + sinphi), 0.5 * eccen);
  }
  function init$o() {
    this.coslat0 = Math.cos(this.lat0);
    this.sinlat0 = Math.sin(this.lat0);

    if (this.sphere) {
      if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= EPSLN) {
        this.k0 = 0.5 * (1 + sign(this.lat0) * Math.sin(this.lat_ts));
      }
    } else {
      if (Math.abs(this.coslat0) <= EPSLN) {
        if (this.lat0 > 0) {
          //North pole
          //trace('stere:north pole');
          this.con = 1;
        } else {
          //South pole
          //trace('stere:south pole');
          this.con = -1;
        }
      }

      this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e));

      if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= EPSLN) {
        this.k0 = 0.5 * this.cons * msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / tsfnz(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts));
      }

      this.ms1 = msfnz(this.e, this.sinlat0, this.coslat0);
      this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - HALF_PI;
      this.cosX0 = Math.cos(this.X0);
      this.sinX0 = Math.sin(this.X0);
    }
  } // Stereographic forward equations--mapping lat,long to x,y

  function forward$n(p) {
    var lon = p.x;
    var lat = p.y;
    var sinlat = Math.sin(lat);
    var coslat = Math.cos(lat);
    var A, X, sinX, cosX, ts, rh;
    var dlon = adjust_lon(lon - this.long0);

    if (Math.abs(Math.abs(lon - this.long0) - Math.PI) <= EPSLN && Math.abs(lat + this.lat0) <= EPSLN) {
      //case of the origine point
      //trace('stere:this is the origin point');
      p.x = NaN;
      p.y = NaN;
      return p;
    }

    if (this.sphere) {
      //trace('stere:sphere case');
      A = 2 * this.k0 / (1 + this.sinlat0 * sinlat + this.coslat0 * coslat * Math.cos(dlon));
      p.x = this.a * A * coslat * Math.sin(dlon) + this.x0;
      p.y = this.a * A * (this.coslat0 * sinlat - this.sinlat0 * coslat * Math.cos(dlon)) + this.y0;
      return p;
    } else {
      X = 2 * Math.atan(this.ssfn_(lat, sinlat, this.e)) - HALF_PI;
      cosX = Math.cos(X);
      sinX = Math.sin(X);

      if (Math.abs(this.coslat0) <= EPSLN) {
        ts = tsfnz(this.e, lat * this.con, this.con * sinlat);
        rh = 2 * this.a * this.k0 * ts / this.cons;
        p.x = this.x0 + rh * Math.sin(lon - this.long0);
        p.y = this.y0 - this.con * rh * Math.cos(lon - this.long0); //trace(p.toString());

        return p;
      } else if (Math.abs(this.sinlat0) < EPSLN) {
        //Eq
        //trace('stere:equateur');
        A = 2 * this.a * this.k0 / (1 + cosX * Math.cos(dlon));
        p.y = A * sinX;
      } else {
        //other case
        //trace('stere:normal case');
        A = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * sinX + this.cosX0 * cosX * Math.cos(dlon)));
        p.y = A * (this.cosX0 * sinX - this.sinX0 * cosX * Math.cos(dlon)) + this.y0;
      }

      p.x = A * cosX * Math.sin(dlon) + this.x0;
    } //trace(p.toString());


    return p;
  } //* Stereographic inverse equations--mapping x,y to lat/long

  function inverse$n(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var lon, lat, ts, ce, Chi;
    var rh = Math.sqrt(p.x * p.x + p.y * p.y);

    if (this.sphere) {
      var c = 2 * Math.atan(rh / (2 * this.a * this.k0));
      lon = this.long0;
      lat = this.lat0;

      if (rh <= EPSLN) {
        p.x = lon;
        p.y = lat;
        return p;
      }

      lat = Math.asin(Math.cos(c) * this.sinlat0 + p.y * Math.sin(c) * this.coslat0 / rh);

      if (Math.abs(this.coslat0) < EPSLN) {
        if (this.lat0 > 0) {
          lon = adjust_lon(this.long0 + Math.atan2(p.x, -1 * p.y));
        } else {
          lon = adjust_lon(this.long0 + Math.atan2(p.x, p.y));
        }
      } else {
        lon = adjust_lon(this.long0 + Math.atan2(p.x * Math.sin(c), rh * this.coslat0 * Math.cos(c) - p.y * this.sinlat0 * Math.sin(c)));
      }

      p.x = lon;
      p.y = lat;
      return p;
    } else {
      if (Math.abs(this.coslat0) <= EPSLN) {
        if (rh <= EPSLN) {
          lat = this.lat0;
          lon = this.long0;
          p.x = lon;
          p.y = lat; //trace(p.toString());

          return p;
        }

        p.x *= this.con;
        p.y *= this.con;
        ts = rh * this.cons / (2 * this.a * this.k0);
        lat = this.con * phi2z(this.e, ts);
        lon = this.con * adjust_lon(this.con * this.long0 + Math.atan2(p.x, -1 * p.y));
      } else {
        ce = 2 * Math.atan(rh * this.cosX0 / (2 * this.a * this.k0 * this.ms1));
        lon = this.long0;

        if (rh <= EPSLN) {
          Chi = this.X0;
        } else {
          Chi = Math.asin(Math.cos(ce) * this.sinX0 + p.y * Math.sin(ce) * this.cosX0 / rh);
          lon = adjust_lon(this.long0 + Math.atan2(p.x * Math.sin(ce), rh * this.cosX0 * Math.cos(ce) - p.y * this.sinX0 * Math.sin(ce)));
        }

        lat = -1 * phi2z(this.e, Math.tan(0.5 * (HALF_PI + Chi)));
      }
    }

    p.x = lon;
    p.y = lat; //trace(p.toString());

    return p;
  }
  var names$n = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"];
  var stere = {
    init: init$o,
    forward: forward$n,
    inverse: inverse$n,
    names: names$n,
    ssfn_: ssfn_
  };

  /*
    references:
      Formules et constantes pour le Calcul pour la
      projection cylindrique conforme à axe oblique et pour la transformation entre
      des systèmes de référence.
      http://www.swisstopo.admin.ch/internet/swisstopo/fr/home/topics/survey/sys/refsys/switzerland.parsysrelated1.31216.downloadList.77004.DownloadFile.tmp/swissprojectionfr.pdf
    */
  function init$n() {
    var phy0 = this.lat0;
    this.lambda0 = this.long0;
    var sinPhy0 = Math.sin(phy0);
    var semiMajorAxis = this.a;
    var invF = this.rf;
    var flattening = 1 / invF;
    var e2 = 2 * flattening - Math.pow(flattening, 2);
    var e = this.e = Math.sqrt(e2);
    this.R = this.k0 * semiMajorAxis * Math.sqrt(1 - e2) / (1 - e2 * Math.pow(sinPhy0, 2));
    this.alpha = Math.sqrt(1 + e2 / (1 - e2) * Math.pow(Math.cos(phy0), 4));
    this.b0 = Math.asin(sinPhy0 / this.alpha);
    var k1 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2));
    var k2 = Math.log(Math.tan(Math.PI / 4 + phy0 / 2));
    var k3 = Math.log((1 + e * sinPhy0) / (1 - e * sinPhy0));
    this.K = k1 - this.alpha * k2 + this.alpha * e / 2 * k3;
  }
  function forward$m(p) {
    var Sa1 = Math.log(Math.tan(Math.PI / 4 - p.y / 2));
    var Sa2 = this.e / 2 * Math.log((1 + this.e * Math.sin(p.y)) / (1 - this.e * Math.sin(p.y)));
    var S = -this.alpha * (Sa1 + Sa2) + this.K; // spheric latitude

    var b = 2 * (Math.atan(Math.exp(S)) - Math.PI / 4); // spheric longitude

    var I = this.alpha * (p.x - this.lambda0); // psoeudo equatorial rotation

    var rotI = Math.atan(Math.sin(I) / (Math.sin(this.b0) * Math.tan(b) + Math.cos(this.b0) * Math.cos(I)));
    var rotB = Math.asin(Math.cos(this.b0) * Math.sin(b) - Math.sin(this.b0) * Math.cos(b) * Math.cos(I));
    p.y = this.R / 2 * Math.log((1 + Math.sin(rotB)) / (1 - Math.sin(rotB))) + this.y0;
    p.x = this.R * rotI + this.x0;
    return p;
  }
  function inverse$m(p) {
    var Y = p.x - this.x0;
    var X = p.y - this.y0;
    var rotI = Y / this.R;
    var rotB = 2 * (Math.atan(Math.exp(X / this.R)) - Math.PI / 4);
    var b = Math.asin(Math.cos(this.b0) * Math.sin(rotB) + Math.sin(this.b0) * Math.cos(rotB) * Math.cos(rotI));
    var I = Math.atan(Math.sin(rotI) / (Math.cos(this.b0) * Math.cos(rotI) - Math.sin(this.b0) * Math.tan(rotB)));
    var lambda = this.lambda0 + I / this.alpha;
    var S = 0;
    var phy = b;
    var prevPhy = -1000;
    var iteration = 0;

    while (Math.abs(phy - prevPhy) > 0.0000001) {
      if (++iteration > 20) {
        //...reportError("omercFwdInfinity");
        return;
      } //S = Math.log(Math.tan(Math.PI / 4 + phy / 2));


      S = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + b / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(phy)) / 2));
      prevPhy = phy;
      phy = 2 * Math.atan(Math.exp(S)) - Math.PI / 2;
    }

    p.x = lambda;
    p.y = phy;
    return p;
  }
  var names$m = ["somerc"];
  var somerc = {
    init: init$n,
    forward: forward$m,
    inverse: inverse$m,
    names: names$m
  };

  var TOL = 1e-7;

  function isTypeA(P) {
    var typeAProjections = ['Hotine_Oblique_Mercator', 'Hotine_Oblique_Mercator_Azimuth_Natural_Origin'];
    var projectionName = _typeof$1(P.PROJECTION) === "object" ? Object.keys(P.PROJECTION)[0] : P.PROJECTION;
    return 'no_uoff' in P || 'no_off' in P || typeAProjections.indexOf(projectionName) !== -1;
  }
  /* Initialize the Oblique Mercator  projection
      ------------------------------------------*/


  function init$m() {
    var con,
        com,
        cosph0,
        D,
        F,
        H,
        L,
        sinph0,
        p,
        J,
        gamma = 0,
        gamma0,
        lamc = 0,
        lam1 = 0,
        lam2 = 0,
        phi1 = 0,
        phi2 = 0,
        alpha_c = 0;
   // only Type A uses the no_off or no_uoff property
    // https://github.com/OSGeo/proj.4/issues/104

    this.no_off = isTypeA(this);
    this.no_rot = 'no_rot' in this;
    var alp = false;

    if ("alpha" in this) {
      alp = true;
    }

    var gam = false;

    if ("rectified_grid_angle" in this) {
      gam = true;
    }

    if (alp) {
      alpha_c = this.alpha;
    }

    if (gam) {
      gamma = this.rectified_grid_angle * D2R$1;
    }

    if (alp || gam) {
      lamc = this.longc;
    } else {
      lam1 = this.long1;
      phi1 = this.lat1;
      lam2 = this.long2;
      phi2 = this.lat2;

      if (Math.abs(phi1 - phi2) <= TOL || (con = Math.abs(phi1)) <= TOL || Math.abs(con - HALF_PI) <= TOL || Math.abs(Math.abs(this.lat0) - HALF_PI) <= TOL || Math.abs(Math.abs(phi2) - HALF_PI) <= TOL) {
        throw new Error();
      }
    }

    var one_es = 1.0 - this.es;
    com = Math.sqrt(one_es);

    if (Math.abs(this.lat0) > EPSLN) {
      sinph0 = Math.sin(this.lat0);
      cosph0 = Math.cos(this.lat0);
      con = 1 - this.es * sinph0 * sinph0;
      this.B = cosph0 * cosph0;
      this.B = Math.sqrt(1 + this.es * this.B * this.B / one_es);
      this.A = this.B * this.k0 * com / con;
      D = this.B * com / (cosph0 * Math.sqrt(con));
      F = D * D - 1;

      if (F <= 0) {
        F = 0;
      } else {
        F = Math.sqrt(F);

        if (this.lat0 < 0) {
          F = -F;
        }
      }

      this.E = F += D;
      this.E *= Math.pow(tsfnz(this.e, this.lat0, sinph0), this.B);
    } else {
      this.B = 1 / com;
      this.A = this.k0;
      this.E = D = F = 1;
    }

    if (alp || gam) {
      if (alp) {
        gamma0 = Math.asin(Math.sin(alpha_c) / D);

        if (!gam) {
          gamma = alpha_c;
        }
      } else {
        gamma0 = gamma;
        alpha_c = Math.asin(D * Math.sin(gamma0));
      }

      this.lam0 = lamc - Math.asin(0.5 * (F - 1 / F) * Math.tan(gamma0)) / this.B;
    } else {
      H = Math.pow(tsfnz(this.e, phi1, Math.sin(phi1)), this.B);
      L = Math.pow(tsfnz(this.e, phi2, Math.sin(phi2)), this.B);
      F = this.E / H;
      p = (L - H) / (L + H);
      J = this.E * this.E;
      J = (J - L * H) / (J + L * H);
      con = lam1 - lam2;

      if (con < -Math.pi) {
        lam2 -= TWO_PI;
      } else if (con > Math.pi) {
        lam2 += TWO_PI;
      }

      this.lam0 = adjust_lon(0.5 * (lam1 + lam2) - Math.atan(J * Math.tan(0.5 * this.B * (lam1 - lam2)) / p) / this.B);
      gamma0 = Math.atan(2 * Math.sin(this.B * adjust_lon(lam1 - this.lam0)) / (F - 1 / F));
      gamma = alpha_c = Math.asin(D * Math.sin(gamma0));
    }

    this.singam = Math.sin(gamma0);
    this.cosgam = Math.cos(gamma0);
    this.sinrot = Math.sin(gamma);
    this.cosrot = Math.cos(gamma);
    this.rB = 1 / this.B;
    this.ArB = this.A * this.rB;
    this.BrA = 1 / this.ArB;
    this.A * this.B;

    if (this.no_off) {
      this.u_0 = 0;
    } else {
      this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(D * D - 1) / Math.cos(alpha_c)));

      if (this.lat0 < 0) {
        this.u_0 = -this.u_0;
      }
    }

    F = 0.5 * gamma0;
    this.v_pole_n = this.ArB * Math.log(Math.tan(FORTPI - F));
    this.v_pole_s = this.ArB * Math.log(Math.tan(FORTPI + F));
  }
  /* Oblique Mercator forward equations--mapping lat,long to x,y
      ----------------------------------------------------------*/

  function forward$l(p) {
    var coords = {};
    var S, T, U, V, W, temp, u, v;
    p.x = p.x - this.lam0;

    if (Math.abs(Math.abs(p.y) - HALF_PI) > EPSLN) {
      W = this.E / Math.pow(tsfnz(this.e, p.y, Math.sin(p.y)), this.B);
      temp = 1 / W;
      S = 0.5 * (W - temp);
      T = 0.5 * (W + temp);
      V = Math.sin(this.B * p.x);
      U = (S * this.singam - V * this.cosgam) / T;

      if (Math.abs(Math.abs(U) - 1.0) < EPSLN) {
        throw new Error();
      }

      v = 0.5 * this.ArB * Math.log((1 - U) / (1 + U));
      temp = Math.cos(this.B * p.x);

      if (Math.abs(temp) < TOL) {
        u = this.A * p.x;
      } else {
        u = this.ArB * Math.atan2(S * this.cosgam + V * this.singam, temp);
      }
    } else {
      v = p.y > 0 ? this.v_pole_n : this.v_pole_s;
      u = this.ArB * p.y;
    }

    if (this.no_rot) {
      coords.x = u;
      coords.y = v;
    } else {
      u -= this.u_0;
      coords.x = v * this.cosrot + u * this.sinrot;
      coords.y = u * this.cosrot - v * this.sinrot;
    }

    coords.x = this.a * coords.x + this.x0;
    coords.y = this.a * coords.y + this.y0;
    return coords;
  }
  function inverse$l(p) {
    var u, v, Qp, Sp, Tp, Vp, Up;
    var coords = {};
    p.x = (p.x - this.x0) * (1.0 / this.a);
    p.y = (p.y - this.y0) * (1.0 / this.a);

    if (this.no_rot) {
      v = p.y;
      u = p.x;
    } else {
      v = p.x * this.cosrot - p.y * this.sinrot;
      u = p.y * this.cosrot + p.x * this.sinrot + this.u_0;
    }

    Qp = Math.exp(-this.BrA * v);
    Sp = 0.5 * (Qp - 1 / Qp);
    Tp = 0.5 * (Qp + 1 / Qp);
    Vp = Math.sin(this.BrA * u);
    Up = (Vp * this.cosgam + Sp * this.singam) / Tp;

    if (Math.abs(Math.abs(Up) - 1) < EPSLN) {
      coords.x = 0;
      coords.y = Up < 0 ? -HALF_PI : HALF_PI;
    } else {
      coords.y = this.E / Math.sqrt((1 + Up) / (1 - Up));
      coords.y = phi2z(this.e, Math.pow(coords.y, 1 / this.B));

      if (coords.y === Infinity) {
        throw new Error();
      }

      coords.x = -this.rB * Math.atan2(Sp * this.cosgam - Vp * this.singam, Math.cos(this.BrA * u));
    }

    coords.x += this.lam0;
    return coords;
  }
  var names$l = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
  var omerc = {
    init: init$m,
    forward: forward$l,
    inverse: inverse$l,
    names: names$l
  };

  function init$l() {
    // array of:  r_maj,r_min,lat1,lat2,c_lon,c_lat,false_east,false_north
    //double c_lat;                   /* center latitude                      */
    //double c_lon;                   /* center longitude                     */
    //double lat1;                    /* first standard parallel              */
    //double lat2;                    /* second standard parallel             */
    //double r_maj;                   /* major axis                           */
    //double r_min;                   /* minor axis                           */
    //double false_east;              /* x offset in meters                   */
    //double false_north;             /* y offset in meters                   */
    if (!this.lat2) {
      this.lat2 = this.lat1;
    } //if lat2 is not defined


    if (!this.k0) {
      this.k0 = 1;
    }

    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0; // Standard Parallels cannot be equal and on opposite sides of the equator

    if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
      return;
    }

    var temp = this.b / this.a;
    this.e = Math.sqrt(1 - temp * temp);
    var sin1 = Math.sin(this.lat1);
    var cos1 = Math.cos(this.lat1);
    var ms1 = msfnz(this.e, sin1, cos1);
    var ts1 = tsfnz(this.e, this.lat1, sin1);
    var sin2 = Math.sin(this.lat2);
    var cos2 = Math.cos(this.lat2);
    var ms2 = msfnz(this.e, sin2, cos2);
    var ts2 = tsfnz(this.e, this.lat2, sin2);
    var ts0 = tsfnz(this.e, this.lat0, Math.sin(this.lat0));

    if (Math.abs(this.lat1 - this.lat2) > EPSLN) {
      this.ns = Math.log(ms1 / ms2) / Math.log(ts1 / ts2);
    } else {
      this.ns = sin1;
    }

    if (isNaN(this.ns)) {
      this.ns = sin1;
    }

    this.f0 = ms1 / (this.ns * Math.pow(ts1, this.ns));
    this.rh = this.a * this.f0 * Math.pow(ts0, this.ns);

    if (!this.title) {
      this.title = "Lambert Conformal Conic";
    }
  } // Lambert Conformal conic forward equations--mapping lat,long to x,y
  // -----------------------------------------------------------------

  function forward$k(p) {
    var lon = p.x;
    var lat = p.y; // singular cases :

    if (Math.abs(2 * Math.abs(lat) - Math.PI) <= EPSLN) {
      lat = sign(lat) * (HALF_PI - 2 * EPSLN);
    }

    var con = Math.abs(Math.abs(lat) - HALF_PI);
    var ts, rh1;

    if (con > EPSLN) {
      ts = tsfnz(this.e, lat, Math.sin(lat));
      rh1 = this.a * this.f0 * Math.pow(ts, this.ns);
    } else {
      con = lat * this.ns;

      if (con <= 0) {
        return null;
      }

      rh1 = 0;
    }

    var theta = this.ns * adjust_lon(lon - this.long0);
    p.x = this.k0 * (rh1 * Math.sin(theta)) + this.x0;
    p.y = this.k0 * (this.rh - rh1 * Math.cos(theta)) + this.y0;
    return p;
  } // Lambert Conformal Conic inverse equations--mapping x,y to lat/long
  // -----------------------------------------------------------------

  function inverse$k(p) {
    var rh1, con, ts;
    var lat, lon;
    var x = (p.x - this.x0) / this.k0;
    var y = this.rh - (p.y - this.y0) / this.k0;

    if (this.ns > 0) {
      rh1 = Math.sqrt(x * x + y * y);
      con = 1;
    } else {
      rh1 = -Math.sqrt(x * x + y * y);
      con = -1;
    }

    var theta = 0;

    if (rh1 !== 0) {
      theta = Math.atan2(con * x, con * y);
    }

    if (rh1 !== 0 || this.ns > 0) {
      con = 1 / this.ns;
      ts = Math.pow(rh1 / (this.a * this.f0), con);
      lat = phi2z(this.e, ts);

      if (lat === -9999) {
        return null;
      }
    } else {
      lat = -HALF_PI;
    }

    lon = adjust_lon(theta / this.ns + this.long0);
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$k = ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_1SP", "Lambert_Conformal_Conic_2SP", "lcc"];
  var lcc = {
    init: init$l,
    forward: forward$k,
    inverse: inverse$k,
    names: names$k
  };

  function init$k() {
    this.a = 6377397.155;
    this.es = 0.006674372230614;
    this.e = Math.sqrt(this.es);

    if (!this.lat0) {
      this.lat0 = 0.863937979737193;
    }

    if (!this.long0) {
      this.long0 = 0.7417649320975901 - 0.308341501185665;
    }
    /* if scale not set default to 0.9999 */


    if (!this.k0) {
      this.k0 = 0.9999;
    }

    this.s45 = 0.785398163397448;
    /* 45 */

    this.s90 = 2 * this.s45;
    this.fi0 = this.lat0;
    this.e2 = this.es;
    this.e = Math.sqrt(this.e2);
    this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2));
    this.uq = 1.04216856380474;
    this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa);
    this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2);
    this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g;
    this.k1 = this.k0;
    this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2));
    this.s0 = 1.37008346281555;
    this.n = Math.sin(this.s0);
    this.ro0 = this.k1 * this.n0 / Math.tan(this.s0);
    this.ad = this.s90 - this.uq;
  }
  /* ellipsoid */

  /* calculate xy from lat/lon */

  /* Constants, identical to inverse transform function */

  function forward$j(p) {
    var gfi, u, deltav, s, d, eps, ro;
    var lon = p.x;
    var lat = p.y;
    var delta_lon = adjust_lon(lon - this.long0);
    /* Transformation */

    gfi = Math.pow((1 + this.e * Math.sin(lat)) / (1 - this.e * Math.sin(lat)), this.alfa * this.e / 2);
    u = 2 * (Math.atan(this.k * Math.pow(Math.tan(lat / 2 + this.s45), this.alfa) / gfi) - this.s45);
    deltav = -delta_lon * this.alfa;
    s = Math.asin(Math.cos(this.ad) * Math.sin(u) + Math.sin(this.ad) * Math.cos(u) * Math.cos(deltav));
    d = Math.asin(Math.cos(u) * Math.sin(deltav) / Math.cos(s));
    eps = this.n * d;
    ro = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n);
    p.y = ro * Math.cos(eps) / 1;
    p.x = ro * Math.sin(eps) / 1;

    if (!this.czech) {
      p.y *= -1;
      p.x *= -1;
    }

    return p;
  }
  /* calculate lat/lon from xy */

  function inverse$j(p) {
    var u, deltav, s, d, eps, ro, fi1;
    var ok;
    /* Transformation */

    /* revert y, x*/

    var tmp = p.x;
    p.x = p.y;
    p.y = tmp;

    if (!this.czech) {
      p.y *= -1;
      p.x *= -1;
    }

    ro = Math.sqrt(p.x * p.x + p.y * p.y);
    eps = Math.atan2(p.y, p.x);
    d = eps / Math.sin(this.s0);
    s = 2 * (Math.atan(Math.pow(this.ro0 / ro, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45);
    u = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(d));
    deltav = Math.asin(Math.cos(s) * Math.sin(d) / Math.cos(u));
    p.x = this.long0 - deltav / this.alfa;
    fi1 = u;
    ok = 0;
    var iter = 0;

    do {
      p.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(u / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(fi1)) / (1 - this.e * Math.sin(fi1)), this.e / 2)) - this.s45);

      if (Math.abs(fi1 - p.y) < 0.0000000001) {
        ok = 1;
      }

      fi1 = p.y;
      iter += 1;
    } while (ok === 0 && iter < 15);

    if (iter >= 15) {
      return null;
    }

    return p;
  }
  var names$j = ["Krovak", "krovak"];
  var krovak = {
    init: init$k,
    forward: forward$j,
    inverse: inverse$j,
    names: names$j
  };

  function mlfn (e0, e1, e2, e3, phi) {
    return e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi);
  }

  function e0fn (x) {
    return 1 - 0.25 * x * (1 + x / 16 * (3 + 1.25 * x));
  }

  function e1fn (x) {
    return 0.375 * x * (1 + 0.25 * x * (1 + 0.46875 * x));
  }

  function e2fn (x) {
    return 0.05859375 * x * x * (1 + 0.75 * x);
  }

  function e3fn (x) {
    return x * x * x * (35 / 3072);
  }

  function gN (a, e, sinphi) {
    var temp = e * sinphi;
    return a / Math.sqrt(1 - temp * temp);
  }

  function adjust_lat (x) {
    return Math.abs(x) < HALF_PI ? x : x - sign(x) * Math.PI;
  }

  function imlfn (ml, e0, e1, e2, e3) {
    var phi;
    var dphi;
    phi = ml / e0;

    for (var i = 0; i < 15; i++) {
      dphi = (ml - (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi))) / (e0 - 2 * e1 * Math.cos(2 * phi) + 4 * e2 * Math.cos(4 * phi) - 6 * e3 * Math.cos(6 * phi));
      phi += dphi;

      if (Math.abs(dphi) <= 0.0000000001) {
        return phi;
      }
    } //..reportError("IMLFN-CONV:Latitude failed to converge after 15 iterations");


    return NaN;
  }

  function init$j() {
    if (!this.sphere) {
      this.e0 = e0fn(this.es);
      this.e1 = e1fn(this.es);
      this.e2 = e2fn(this.es);
      this.e3 = e3fn(this.es);
      this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
    }
  }
  /* Cassini forward equations--mapping lat,long to x,y
    -----------------------------------------------------------------------*/

  function forward$i(p) {
    /* Forward equations
        -----------------*/
    var x, y;
    var lam = p.x;
    var phi = p.y;
    lam = adjust_lon(lam - this.long0);

    if (this.sphere) {
      x = this.a * Math.asin(Math.cos(phi) * Math.sin(lam));
      y = this.a * (Math.atan2(Math.tan(phi), Math.cos(lam)) - this.lat0);
    } else {
      //ellipsoid
      var sinphi = Math.sin(phi);
      var cosphi = Math.cos(phi);
      var nl = gN(this.a, this.e, sinphi);
      var tl = Math.tan(phi) * Math.tan(phi);
      var al = lam * Math.cos(phi);
      var asq = al * al;
      var cl = this.es * cosphi * cosphi / (1 - this.es);
      var ml = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, phi);
      x = nl * al * (1 - asq * tl * (1 / 6 - (8 - tl + 8 * cl) * asq / 120));
      y = ml - this.ml0 + nl * sinphi / cosphi * asq * (0.5 + (5 - tl + 6 * cl) * asq / 24);
    }

    p.x = x + this.x0;
    p.y = y + this.y0;
    return p;
  }
  /* Inverse equations
    -----------------*/

  function inverse$i(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var x = p.x / this.a;
    var y = p.y / this.a;
    var phi, lam;

    if (this.sphere) {
      var dd = y + this.lat0;
      phi = Math.asin(Math.sin(dd) * Math.cos(x));
      lam = Math.atan2(Math.tan(x), Math.cos(dd));
    } else {
      /* ellipsoid */
      var ml1 = this.ml0 / this.a + y;
      var phi1 = imlfn(ml1, this.e0, this.e1, this.e2, this.e3);

      if (Math.abs(Math.abs(phi1) - HALF_PI) <= EPSLN) {
        p.x = this.long0;
        p.y = HALF_PI;

        if (y < 0) {
          p.y *= -1;
        }

        return p;
      }

      var nl1 = gN(this.a, this.e, Math.sin(phi1));
      var rl1 = nl1 * nl1 * nl1 / this.a / this.a * (1 - this.es);
      var tl1 = Math.pow(Math.tan(phi1), 2);
      var dl = x * this.a / nl1;
      var dsq = dl * dl;
      phi = phi1 - nl1 * Math.tan(phi1) / rl1 * dl * dl * (0.5 - (1 + 3 * tl1) * dl * dl / 24);
      lam = dl * (1 - dsq * (tl1 / 3 + (1 + 3 * tl1) * tl1 * dsq / 15)) / Math.cos(phi1);
    }

    p.x = adjust_lon(lam + this.long0);
    p.y = adjust_lat(phi);
    return p;
  }
  var names$i = ["Cassini", "Cassini_Soldner", "cass"];
  var cass = {
    init: init$j,
    forward: forward$i,
    inverse: inverse$i,
    names: names$i
  };

  function qsfnz (eccent, sinphi) {
    var con;

    if (eccent > 1.0e-7) {
      con = eccent * sinphi;
      return (1 - eccent * eccent) * (sinphi / (1 - con * con) - 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    } else {
      return 2 * sinphi;
    }
  }

  /*
    reference
      "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
      The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
    */

  var S_POLE = 1;
  var N_POLE = 2;
  var EQUIT = 3;
  var OBLIQ = 4;
  /* Initialize the Lambert Azimuthal Equal Area projection
    ------------------------------------------------------*/

  function init$i() {
    var t = Math.abs(this.lat0);

    if (Math.abs(t - HALF_PI) < EPSLN) {
      this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE;
    } else if (Math.abs(t) < EPSLN) {
      this.mode = this.EQUIT;
    } else {
      this.mode = this.OBLIQ;
    }

    if (this.es > 0) {
      var sinphi;
      this.qp = qsfnz(this.e, 1);
      this.mmf = 0.5 / (1 - this.es);
      this.apa = authset(this.es);

      switch (this.mode) {
        case this.N_POLE:
          this.dd = 1;
          break;

        case this.S_POLE:
          this.dd = 1;
          break;

        case this.EQUIT:
          this.rq = Math.sqrt(0.5 * this.qp);
          this.dd = 1 / this.rq;
          this.xmf = 1;
          this.ymf = 0.5 * this.qp;
          break;

        case this.OBLIQ:
          this.rq = Math.sqrt(0.5 * this.qp);
          sinphi = Math.sin(this.lat0);
          this.sinb1 = qsfnz(this.e, sinphi) / this.qp;
          this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1);
          this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * sinphi * sinphi) * this.rq * this.cosb1);
          this.ymf = (this.xmf = this.rq) / this.dd;
          this.xmf *= this.dd;
          break;
      }
    } else {
      if (this.mode === this.OBLIQ) {
        this.sinph0 = Math.sin(this.lat0);
        this.cosph0 = Math.cos(this.lat0);
      }
    }
  }
  /* Lambert Azimuthal Equal Area forward equations--mapping lat,long to x,y
    -----------------------------------------------------------------------*/

  function forward$h(p) {
    /* Forward equations
        -----------------*/
    var x, y, coslam, sinlam, sinphi, q, sinb, cosb, b, cosphi;
    var lam = p.x;
    var phi = p.y;
    lam = adjust_lon(lam - this.long0);

    if (this.sphere) {
      sinphi = Math.sin(phi);
      cosphi = Math.cos(phi);
      coslam = Math.cos(lam);

      if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        y = this.mode === this.EQUIT ? 1 + cosphi * coslam : 1 + this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;

        if (y <= EPSLN) {
          return null;
        }

        y = Math.sqrt(2 / y);
        x = y * cosphi * Math.sin(lam);
        y *= this.mode === this.EQUIT ? sinphi : this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
      } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
        if (this.mode === this.N_POLE) {
          coslam = -coslam;
        }

        if (Math.abs(phi + this.lat0) < EPSLN) {
          return null;
        }

        y = FORTPI - phi * 0.5;
        y = 2 * (this.mode === this.S_POLE ? Math.cos(y) : Math.sin(y));
        x = y * Math.sin(lam);
        y *= coslam;
      }
    } else {
      sinb = 0;
      cosb = 0;
      b = 0;
      coslam = Math.cos(lam);
      sinlam = Math.sin(lam);
      sinphi = Math.sin(phi);
      q = qsfnz(this.e, sinphi);

      if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        sinb = q / this.qp;
        cosb = Math.sqrt(1 - sinb * sinb);
      }

      switch (this.mode) {
        case this.OBLIQ:
          b = 1 + this.sinb1 * sinb + this.cosb1 * cosb * coslam;
          break;

        case this.EQUIT:
          b = 1 + cosb * coslam;
          break;

        case this.N_POLE:
          b = HALF_PI + phi;
          q = this.qp - q;
          break;

        case this.S_POLE:
          b = phi - HALF_PI;
          q = this.qp + q;
          break;
      }

      if (Math.abs(b) < EPSLN) {
        return null;
      }

      switch (this.mode) {
        case this.OBLIQ:
        case this.EQUIT:
          b = Math.sqrt(2 / b);

          if (this.mode === this.OBLIQ) {
            y = this.ymf * b * (this.cosb1 * sinb - this.sinb1 * cosb * coslam);
          } else {
            y = (b = Math.sqrt(2 / (1 + cosb * coslam))) * sinb * this.ymf;
          }

          x = this.xmf * b * cosb * sinlam;
          break;

        case this.N_POLE:
        case this.S_POLE:
          if (q >= 0) {
            x = (b = Math.sqrt(q)) * sinlam;
            y = coslam * (this.mode === this.S_POLE ? b : -b);
          } else {
            x = y = 0;
          }

          break;
      }
    }

    p.x = this.a * x + this.x0;
    p.y = this.a * y + this.y0;
    return p;
  }
  /* Inverse equations
    -----------------*/

  function inverse$h(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var x = p.x / this.a;
    var y = p.y / this.a;
    var lam, phi, cCe, sCe, q, rho, ab;

    if (this.sphere) {
      var cosz = 0,
          rh,
          sinz = 0;
      rh = Math.sqrt(x * x + y * y);
      phi = rh * 0.5;

      if (phi > 1) {
        return null;
      }

      phi = 2 * Math.asin(phi);

      if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        sinz = Math.sin(phi);
        cosz = Math.cos(phi);
      }

      switch (this.mode) {
        case this.EQUIT:
          phi = Math.abs(rh) <= EPSLN ? 0 : Math.asin(y * sinz / rh);
          x *= sinz;
          y = cosz * rh;
          break;

        case this.OBLIQ:
          phi = Math.abs(rh) <= EPSLN ? this.lat0 : Math.asin(cosz * this.sinph0 + y * sinz * this.cosph0 / rh);
          x *= sinz * this.cosph0;
          y = (cosz - Math.sin(phi) * this.sinph0) * rh;
          break;

        case this.N_POLE:
          y = -y;
          phi = HALF_PI - phi;
          break;

        case this.S_POLE:
          phi -= HALF_PI;
          break;
      }

      lam = y === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ) ? 0 : Math.atan2(x, y);
    } else {
      ab = 0;

      if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        x /= this.dd;
        y *= this.dd;
        rho = Math.sqrt(x * x + y * y);

        if (rho < EPSLN) {
          p.x = this.long0;
          p.y = this.lat0;
          return p;
        }

        sCe = 2 * Math.asin(0.5 * rho / this.rq);
        cCe = Math.cos(sCe);
        x *= sCe = Math.sin(sCe);

        if (this.mode === this.OBLIQ) {
          ab = cCe * this.sinb1 + y * sCe * this.cosb1 / rho;
          q = this.qp * ab;
          y = rho * this.cosb1 * cCe - y * this.sinb1 * sCe;
        } else {
          ab = y * sCe / rho;
          q = this.qp * ab;
          y = rho * cCe;
        }
      } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
        if (this.mode === this.N_POLE) {
          y = -y;
        }

        q = x * x + y * y;

        if (!q) {
          p.x = this.long0;
          p.y = this.lat0;
          return p;
        }

        ab = 1 - q / this.qp;

        if (this.mode === this.S_POLE) {
          ab = -ab;
        }
      }

      lam = Math.atan2(x, y);
      phi = authlat(Math.asin(ab), this.apa);
    }

    p.x = adjust_lon(this.long0 + lam);
    p.y = phi;
    return p;
  }
  /* determine latitude from authalic latitude */

  var P00 = 0.33333333333333333333;
  var P01 = 0.17222222222222222222;
  var P02 = 0.10257936507936507936;
  var P10 = 0.06388888888888888888;
  var P11 = 0.06640211640211640211;
  var P20 = 0.01641501294219154443;

  function authset(es) {
    var t;
    var APA = [];
    APA[0] = es * P00;
    t = es * es;
    APA[0] += t * P01;
    APA[1] = t * P10;
    t *= es;
    APA[0] += t * P02;
    APA[1] += t * P11;
    APA[2] = t * P20;
    return APA;
  }

  function authlat(beta, APA) {
    var t = beta + beta;
    return beta + APA[0] * Math.sin(t) + APA[1] * Math.sin(t + t) + APA[2] * Math.sin(t + t + t);
  }

  var names$h = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
  var laea = {
    init: init$i,
    forward: forward$h,
    inverse: inverse$h,
    names: names$h,
    S_POLE: S_POLE,
    N_POLE: N_POLE,
    EQUIT: EQUIT,
    OBLIQ: OBLIQ
  };

  function asinz (x) {
    if (Math.abs(x) > 1) {
      x = x > 1 ? 1 : -1;
    }

    return Math.asin(x);
  }

  function init$h() {
    if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
      return;
    }

    this.temp = this.b / this.a;
    this.es = 1 - Math.pow(this.temp, 2);
    this.e3 = Math.sqrt(this.es);
    this.sin_po = Math.sin(this.lat1);
    this.cos_po = Math.cos(this.lat1);
    this.t1 = this.sin_po;
    this.con = this.sin_po;
    this.ms1 = msfnz(this.e3, this.sin_po, this.cos_po);
    this.qs1 = qsfnz(this.e3, this.sin_po, this.cos_po);
    this.sin_po = Math.sin(this.lat2);
    this.cos_po = Math.cos(this.lat2);
    this.t2 = this.sin_po;
    this.ms2 = msfnz(this.e3, this.sin_po, this.cos_po);
    this.qs2 = qsfnz(this.e3, this.sin_po, this.cos_po);
    this.sin_po = Math.sin(this.lat0);
    this.cos_po = Math.cos(this.lat0);
    this.t3 = this.sin_po;
    this.qs0 = qsfnz(this.e3, this.sin_po, this.cos_po);

    if (Math.abs(this.lat1 - this.lat2) > EPSLN) {
      this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1);
    } else {
      this.ns0 = this.con;
    }

    this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1;
    this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0;
  }
  /* Albers Conical Equal Area forward equations--mapping lat,long to x,y
    -------------------------------------------------------------------*/

  function forward$g(p) {
    var lon = p.x;
    var lat = p.y;
    this.sin_phi = Math.sin(lat);
    this.cos_phi = Math.cos(lat);
    var qs = qsfnz(this.e3, this.sin_phi, this.cos_phi);
    var rh1 = this.a * Math.sqrt(this.c - this.ns0 * qs) / this.ns0;
    var theta = this.ns0 * adjust_lon(lon - this.long0);
    var x = rh1 * Math.sin(theta) + this.x0;
    var y = this.rh - rh1 * Math.cos(theta) + this.y0;
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse$g(p) {
    var rh1, qs, con, theta, lon, lat;
    p.x -= this.x0;
    p.y = this.rh - p.y + this.y0;

    if (this.ns0 >= 0) {
      rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
      con = 1;
    } else {
      rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
      con = -1;
    }

    theta = 0;

    if (rh1 !== 0) {
      theta = Math.atan2(con * p.x, con * p.y);
    }

    con = rh1 * this.ns0 / this.a;

    if (this.sphere) {
      lat = Math.asin((this.c - con * con) / (2 * this.ns0));
    } else {
      qs = (this.c - con * con) / this.ns0;
      lat = this.phi1z(this.e3, qs);
    }

    lon = adjust_lon(theta / this.ns0 + this.long0);
    p.x = lon;
    p.y = lat;
    return p;
  }
  /* Function to compute phi1, the latitude for the inverse of the
     Albers Conical Equal-Area projection.
  -------------------------------------------*/

  function phi1z(eccent, qs) {
    var sinphi, cosphi, con, com, dphi;
    var phi = asinz(0.5 * qs);

    if (eccent < EPSLN) {
      return phi;
    }

    var eccnts = eccent * eccent;

    for (var i = 1; i <= 25; i++) {
      sinphi = Math.sin(phi);
      cosphi = Math.cos(phi);
      con = eccent * sinphi;
      com = 1 - con * con;
      dphi = 0.5 * com * com / cosphi * (qs / (1 - eccnts) - sinphi / com + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
      phi = phi + dphi;

      if (Math.abs(dphi) <= 1e-7) {
        return phi;
      }
    }

    return null;
  }
  var names$g = ["Albers_Conic_Equal_Area", "Albers", "aea"];
  var aea = {
    init: init$h,
    forward: forward$g,
    inverse: inverse$g,
    names: names$g,
    phi1z: phi1z
  };

  /*
    reference:
      Wolfram Mathworld "Gnomonic Projection"
      http://mathworld.wolfram.com/GnomonicProjection.html
      Accessed: 12th November 2009
    */

  function init$g() {
    /* Place parameters in static storage for common use
        -------------------------------------------------*/
    this.sin_p14 = Math.sin(this.lat0);
    this.cos_p14 = Math.cos(this.lat0); // Approximation for projecting points to the horizon (infinity)

    this.infinity_dist = 1000 * this.a;
    this.rc = 1;
  }
  /* Gnomonic forward equations--mapping lat,long to x,y
      ---------------------------------------------------*/

  function forward$f(p) {
    var sinphi, cosphi;
    /* sin and cos value        */

    var dlon;
    /* delta longitude value      */

    var coslon;
    /* cos of longitude        */

    var ksp;
    /* scale factor          */

    var g;
    var x, y;
    var lon = p.x;
    var lat = p.y;
    /* Forward equations
        -----------------*/

    dlon = adjust_lon(lon - this.long0);
    sinphi = Math.sin(lat);
    cosphi = Math.cos(lat);
    coslon = Math.cos(dlon);
    g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
    ksp = 1;

    if (g > 0 || Math.abs(g) <= EPSLN) {
      x = this.x0 + this.a * ksp * cosphi * Math.sin(dlon) / g;
      y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon) / g;
    } else {
      // Point is in the opposing hemisphere and is unprojectable
      // We still need to return a reasonable point, so we project
      // to infinity, on a bearing
      // equivalent to the northern hemisphere equivalent
      // This is a reasonable approximation for short shapes and lines that
      // straddle the horizon.
      x = this.x0 + this.infinity_dist * cosphi * Math.sin(dlon);
      y = this.y0 + this.infinity_dist * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
    }

    p.x = x;
    p.y = y;
    return p;
  }
  function inverse$f(p) {
    var rh;
    /* Rho */

    var sinc, cosc;
    var c;
    var lon, lat;
    /* Inverse equations
        -----------------*/

    p.x = (p.x - this.x0) / this.a;
    p.y = (p.y - this.y0) / this.a;
    p.x /= this.k0;
    p.y /= this.k0;

    if (rh = Math.sqrt(p.x * p.x + p.y * p.y)) {
      c = Math.atan2(rh, this.rc);
      sinc = Math.sin(c);
      cosc = Math.cos(c);
      lat = asinz(cosc * this.sin_p14 + p.y * sinc * this.cos_p14 / rh);
      lon = Math.atan2(p.x * sinc, rh * this.cos_p14 * cosc - p.y * this.sin_p14 * sinc);
      lon = adjust_lon(this.long0 + lon);
    } else {
      lat = this.phic0;
      lon = 0;
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$f = ["gnom"];
  var gnom = {
    init: init$g,
    forward: forward$f,
    inverse: inverse$f,
    names: names$f
  };

  function iqsfnz (eccent, q) {
    var temp = 1 - (1 - eccent * eccent) / (2 * eccent) * Math.log((1 - eccent) / (1 + eccent));

    if (Math.abs(Math.abs(q) - temp) < 1.0E-6) {
      if (q < 0) {
        return -1 * HALF_PI;
      } else {
        return HALF_PI;
      }
    } //var phi = 0.5* q/(1-eccent*eccent);


    var phi = Math.asin(0.5 * q);
    var dphi;
    var sin_phi;
    var cos_phi;
    var con;

    for (var i = 0; i < 30; i++) {
      sin_phi = Math.sin(phi);
      cos_phi = Math.cos(phi);
      con = eccent * sin_phi;
      dphi = Math.pow(1 - con * con, 2) / (2 * cos_phi) * (q / (1 - eccent * eccent) - sin_phi / (1 - con * con) + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
      phi += dphi;

      if (Math.abs(dphi) <= 0.0000000001) {
        return phi;
      }
    } //console.log("IQSFN-CONV:Latitude failed to converge after 30 iterations");


    return NaN;
  }

  /*
    reference:
      "Cartographic Projection Procedures for the UNIX Environment-
      A User's Manual" by Gerald I. Evenden,
      USGS Open File Report 90-284and Release 4 Interim Reports (2003)
  */

  function init$f() {
    //no-op
    if (!this.sphere) {
      this.k0 = msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
    }
  }
  /* Cylindrical Equal Area forward equations--mapping lat,long to x,y
      ------------------------------------------------------------*/

  function forward$e(p) {
    var lon = p.x;
    var lat = p.y;
    var x, y;
    /* Forward equations
        -----------------*/

    var dlon = adjust_lon(lon - this.long0);

    if (this.sphere) {
      x = this.x0 + this.a * dlon * Math.cos(this.lat_ts);
      y = this.y0 + this.a * Math.sin(lat) / Math.cos(this.lat_ts);
    } else {
      var qs = qsfnz(this.e, Math.sin(lat));
      x = this.x0 + this.a * this.k0 * dlon;
      y = this.y0 + this.a * qs * 0.5 / this.k0;
    }

    p.x = x;
    p.y = y;
    return p;
  }
  /* Cylindrical Equal Area inverse equations--mapping x,y to lat/long
      ------------------------------------------------------------*/

  function inverse$e(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var lon, lat;

    if (this.sphere) {
      lon = adjust_lon(this.long0 + p.x / this.a / Math.cos(this.lat_ts));
      lat = Math.asin(p.y / this.a * Math.cos(this.lat_ts));
    } else {
      lat = iqsfnz(this.e, 2 * p.y * this.k0 / this.a);
      lon = adjust_lon(this.long0 + p.x / (this.a * this.k0));
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$e = ["cea"];
  var cea = {
    init: init$f,
    forward: forward$e,
    inverse: inverse$e,
    names: names$e
  };

  function init$e() {
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.lat0 = this.lat0 || 0;
    this.long0 = this.long0 || 0;
    this.lat_ts = this.lat_ts || 0;
    this.title = this.title || "Equidistant Cylindrical (Plate Carre)";
    this.rc = Math.cos(this.lat_ts);
  } // forward equations--mapping lat,long to x,y
  // -----------------------------------------------------------------

  function forward$d(p) {
    var lon = p.x;
    var lat = p.y;
    var dlon = adjust_lon(lon - this.long0);
    var dlat = adjust_lat(lat - this.lat0);
    p.x = this.x0 + this.a * dlon * this.rc;
    p.y = this.y0 + this.a * dlat;
    return p;
  } // inverse equations--mapping x,y to lat/long
  // -----------------------------------------------------------------

  function inverse$d(p) {
    var x = p.x;
    var y = p.y;
    p.x = adjust_lon(this.long0 + (x - this.x0) / (this.a * this.rc));
    p.y = adjust_lat(this.lat0 + (y - this.y0) / this.a);
    return p;
  }
  var names$d = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
  var eqc = {
    init: init$e,
    forward: forward$d,
    inverse: inverse$d,
    names: names$d
  };

  var MAX_ITER$1 = 20;
  function init$d() {
    /* Place parameters in static storage for common use
        -------------------------------------------------*/
    this.temp = this.b / this.a;
    this.es = 1 - Math.pow(this.temp, 2); // devait etre dans tmerc.js mais n y est pas donc je commente sinon retour de valeurs nulles

    this.e = Math.sqrt(this.es);
    this.e0 = e0fn(this.es);
    this.e1 = e1fn(this.es);
    this.e2 = e2fn(this.es);
    this.e3 = e3fn(this.es);
    this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0); //si que des zeros le calcul ne se fait pas
  }
  /* Polyconic forward equations--mapping lat,long to x,y
      ---------------------------------------------------*/

  function forward$c(p) {
    var lon = p.x;
    var lat = p.y;
    var x, y, el;
    var dlon = adjust_lon(lon - this.long0);
    el = dlon * Math.sin(lat);

    if (this.sphere) {
      if (Math.abs(lat) <= EPSLN) {
        x = this.a * dlon;
        y = -1 * this.a * this.lat0;
      } else {
        x = this.a * Math.sin(el) / Math.tan(lat);
        y = this.a * (adjust_lat(lat - this.lat0) + (1 - Math.cos(el)) / Math.tan(lat));
      }
    } else {
      if (Math.abs(lat) <= EPSLN) {
        x = this.a * dlon;
        y = -1 * this.ml0;
      } else {
        var nl = gN(this.a, this.e, Math.sin(lat)) / Math.tan(lat);
        x = nl * Math.sin(el);
        y = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, lat) - this.ml0 + nl * (1 - Math.cos(el));
      }
    }

    p.x = x + this.x0;
    p.y = y + this.y0;
    return p;
  }
  /* Inverse equations
    -----------------*/

  function inverse$c(p) {
    var lon, lat, x, y, i;
    var al, bl;
    var phi, dphi;
    x = p.x - this.x0;
    y = p.y - this.y0;

    if (this.sphere) {
      if (Math.abs(y + this.a * this.lat0) <= EPSLN) {
        lon = adjust_lon(x / this.a + this.long0);
        lat = 0;
      } else {
        al = this.lat0 + y / this.a;
        bl = x * x / this.a / this.a + al * al;
        phi = al;
        var tanphi;

        for (i = MAX_ITER$1; i; --i) {
          tanphi = Math.tan(phi);
          dphi = -1 * (al * (phi * tanphi + 1) - phi - 0.5 * (phi * phi + bl) * tanphi) / ((phi - al) / tanphi - 1);
          phi += dphi;

          if (Math.abs(dphi) <= EPSLN) {
            lat = phi;
            break;
          }
        }

        lon = adjust_lon(this.long0 + Math.asin(x * Math.tan(phi) / this.a) / Math.sin(lat));
      }
    } else {
      if (Math.abs(y + this.ml0) <= EPSLN) {
        lat = 0;
        lon = adjust_lon(this.long0 + x / this.a);
      } else {
        al = (this.ml0 + y) / this.a;
        bl = x * x / this.a / this.a + al * al;
        phi = al;
        var cl, mln, mlnp, ma;
        var con;

        for (i = MAX_ITER$1; i; --i) {
          con = this.e * Math.sin(phi);
          cl = Math.sqrt(1 - con * con) * Math.tan(phi);
          mln = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, phi);
          mlnp = this.e0 - 2 * this.e1 * Math.cos(2 * phi) + 4 * this.e2 * Math.cos(4 * phi) - 6 * this.e3 * Math.cos(6 * phi);
          ma = mln / this.a;
          dphi = (al * (cl * ma + 1) - ma - 0.5 * cl * (ma * ma + bl)) / (this.es * Math.sin(2 * phi) * (ma * ma + bl - 2 * al * ma) / (4 * cl) + (al - ma) * (cl * mlnp - 2 / Math.sin(2 * phi)) - mlnp);
          phi -= dphi;

          if (Math.abs(dphi) <= EPSLN) {
            lat = phi;
            break;
          }
        } //lat=phi4z(this.e,this.e0,this.e1,this.e2,this.e3,al,bl,0,0);


        cl = Math.sqrt(1 - this.es * Math.pow(Math.sin(lat), 2)) * Math.tan(lat);
        lon = adjust_lon(this.long0 + Math.asin(x * cl / this.a) / Math.sin(lat));
      }
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$c = ["Polyconic", "poly"];
  var poly = {
    init: init$d,
    forward: forward$c,
    inverse: inverse$c,
    names: names$c
  };

  function init$c() {
    this.A = [];
    this.A[1] = 0.6399175073;
    this.A[2] = -0.1358797613;
    this.A[3] = 0.063294409;
    this.A[4] = -0.02526853;
    this.A[5] = 0.0117879;
    this.A[6] = -0.0055161;
    this.A[7] = 0.0026906;
    this.A[8] = -0.001333;
    this.A[9] = 0.00067;
    this.A[10] = -0.00034;
    this.B_re = [];
    this.B_im = [];
    this.B_re[1] = 0.7557853228;
    this.B_im[1] = 0;
    this.B_re[2] = 0.249204646;
    this.B_im[2] = 0.003371507;
    this.B_re[3] = -0.001541739;
    this.B_im[3] = 0.041058560;
    this.B_re[4] = -0.10162907;
    this.B_im[4] = 0.01727609;
    this.B_re[5] = -0.26623489;
    this.B_im[5] = -0.36249218;
    this.B_re[6] = -0.6870983;
    this.B_im[6] = -1.1651967;
    this.C_re = [];
    this.C_im = [];
    this.C_re[1] = 1.3231270439;
    this.C_im[1] = 0;
    this.C_re[2] = -0.577245789;
    this.C_im[2] = -0.007809598;
    this.C_re[3] = 0.508307513;
    this.C_im[3] = -0.112208952;
    this.C_re[4] = -0.15094762;
    this.C_im[4] = 0.18200602;
    this.C_re[5] = 1.01418179;
    this.C_im[5] = 1.64497696;
    this.C_re[6] = 1.9660549;
    this.C_im[6] = 2.5127645;
    this.D = [];
    this.D[1] = 1.5627014243;
    this.D[2] = 0.5185406398;
    this.D[3] = -0.03333098;
    this.D[4] = -0.1052906;
    this.D[5] = -0.0368594;
    this.D[6] = 0.007317;
    this.D[7] = 0.01220;
    this.D[8] = 0.00394;
    this.D[9] = -0.0013;
  }
  /**
      New Zealand Map Grid Forward  - long/lat to x/y
      long/lat in radians
    */

  function forward$b(p) {
    var n;
    var lon = p.x;
    var lat = p.y;
    var delta_lat = lat - this.lat0;
    var delta_lon = lon - this.long0; // 1. Calculate d_phi and d_psi    ...                          // and d_lambda
    // For this algorithm, delta_latitude is in seconds of arc x 10-5, so we need to scale to those units. Longitude is radians.

    var d_phi = delta_lat / SEC_TO_RAD * 1E-5;
    var d_lambda = delta_lon;
    var d_phi_n = 1; // d_phi^0

    var d_psi = 0;

    for (n = 1; n <= 10; n++) {
      d_phi_n = d_phi_n * d_phi;
      d_psi = d_psi + this.A[n] * d_phi_n;
    } // 2. Calculate theta


    var th_re = d_psi;
    var th_im = d_lambda; // 3. Calculate z

    var th_n_re = 1;
    var th_n_im = 0; // theta^0

    var th_n_re1;
    var th_n_im1;
    var z_re = 0;
    var z_im = 0;

    for (n = 1; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      z_re = z_re + this.B_re[n] * th_n_re - this.B_im[n] * th_n_im;
      z_im = z_im + this.B_im[n] * th_n_re + this.B_re[n] * th_n_im;
    } // 4. Calculate easting and northing


    p.x = z_im * this.a + this.x0;
    p.y = z_re * this.a + this.y0;
    return p;
  }
  /**
      New Zealand Map Grid Inverse  -  x/y to long/lat
    */

  function inverse$b(p) {
    var n;
    var x = p.x;
    var y = p.y;
    var delta_x = x - this.x0;
    var delta_y = y - this.y0; // 1. Calculate z

    var z_re = delta_y / this.a;
    var z_im = delta_x / this.a; // 2a. Calculate theta - first approximation gives km accuracy

    var z_n_re = 1;
    var z_n_im = 0; // z^0

    var z_n_re1;
    var z_n_im1;
    var th_re = 0;
    var th_im = 0;

    for (n = 1; n <= 6; n++) {
      z_n_re1 = z_n_re * z_re - z_n_im * z_im;
      z_n_im1 = z_n_im * z_re + z_n_re * z_im;
      z_n_re = z_n_re1;
      z_n_im = z_n_im1;
      th_re = th_re + this.C_re[n] * z_n_re - this.C_im[n] * z_n_im;
      th_im = th_im + this.C_im[n] * z_n_re + this.C_re[n] * z_n_im;
    } // 2b. Iterate to refine the accuracy of the calculation
    //        0 iterations gives km accuracy
    //        1 iteration gives m accuracy -- good enough for most mapping applications
    //        2 iterations bives mm accuracy


    for (var i = 0; i < this.iterations; i++) {
      var th_n_re = th_re;
      var th_n_im = th_im;
      var th_n_re1;
      var th_n_im1;
      var num_re = z_re;
      var num_im = z_im;

      for (n = 2; n <= 6; n++) {
        th_n_re1 = th_n_re * th_re - th_n_im * th_im;
        th_n_im1 = th_n_im * th_re + th_n_re * th_im;
        th_n_re = th_n_re1;
        th_n_im = th_n_im1;
        num_re = num_re + (n - 1) * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
        num_im = num_im + (n - 1) * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
      }

      th_n_re = 1;
      th_n_im = 0;
      var den_re = this.B_re[1];
      var den_im = this.B_im[1];

      for (n = 2; n <= 6; n++) {
        th_n_re1 = th_n_re * th_re - th_n_im * th_im;
        th_n_im1 = th_n_im * th_re + th_n_re * th_im;
        th_n_re = th_n_re1;
        th_n_im = th_n_im1;
        den_re = den_re + n * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
        den_im = den_im + n * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
      } // Complex division


      var den2 = den_re * den_re + den_im * den_im;
      th_re = (num_re * den_re + num_im * den_im) / den2;
      th_im = (num_im * den_re - num_re * den_im) / den2;
    } // 3. Calculate d_phi              ...                                    // and d_lambda


    var d_psi = th_re;
    var d_lambda = th_im;
    var d_psi_n = 1; // d_psi^0

    var d_phi = 0;

    for (n = 1; n <= 9; n++) {
      d_psi_n = d_psi_n * d_psi;
      d_phi = d_phi + this.D[n] * d_psi_n;
    } // 4. Calculate latitude and longitude
    // d_phi is calcuated in second of arc * 10^-5, so we need to scale back to radians. d_lambda is in radians.


    var lat = this.lat0 + d_phi * SEC_TO_RAD * 1E5;
    var lon = this.long0 + d_lambda;
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$b = ["New_Zealand_Map_Grid", "nzmg"];
  var nzmg = {
    init: init$c,
    forward: forward$b,
    inverse: inverse$b,
    names: names$b
  };

  /*
    reference
      "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
      The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
    */

  /* Initialize the Miller Cylindrical projection
    -------------------------------------------*/

  function init$b() {//no-op
  }
  /* Miller Cylindrical forward equations--mapping lat,long to x,y
      ------------------------------------------------------------*/

  function forward$a(p) {
    var lon = p.x;
    var lat = p.y;
    /* Forward equations
        -----------------*/

    var dlon = adjust_lon(lon - this.long0);
    var x = this.x0 + this.a * dlon;
    var y = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + lat / 2.5)) * 1.25;
    p.x = x;
    p.y = y;
    return p;
  }
  /* Miller Cylindrical inverse equations--mapping x,y to lat/long
      ------------------------------------------------------------*/

  function inverse$a(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var lon = adjust_lon(this.long0 + p.x / this.a);
    var lat = 2.5 * (Math.atan(Math.exp(0.8 * p.y / this.a)) - Math.PI / 4);
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$a = ["Miller_Cylindrical", "mill"];
  var mill = {
    init: init$b,
    forward: forward$a,
    inverse: inverse$a,
    names: names$a
  };

  var MAX_ITER = 20;
  function init$a() {
    /* Place parameters in static storage for common use
      -------------------------------------------------*/
    if (!this.sphere) {
      this.en = pj_enfn(this.es);
    } else {
      this.n = 1;
      this.m = 0;
      this.es = 0;
      this.C_y = Math.sqrt((this.m + 1) / this.n);
      this.C_x = this.C_y / (this.m + 1);
    }
  }
  /* Sinusoidal forward equations--mapping lat,long to x,y
    -----------------------------------------------------*/

  function forward$9(p) {
    var x, y;
    var lon = p.x;
    var lat = p.y;
    /* Forward equations
      -----------------*/

    lon = adjust_lon(lon - this.long0);

    if (this.sphere) {
      if (!this.m) {
        lat = this.n !== 1 ? Math.asin(this.n * Math.sin(lat)) : lat;
      } else {
        var k = this.n * Math.sin(lat);

        for (var i = MAX_ITER; i; --i) {
          var V = (this.m * lat + Math.sin(lat) - k) / (this.m + Math.cos(lat));
          lat -= V;

          if (Math.abs(V) < EPSLN) {
            break;
          }
        }
      }

      x = this.a * this.C_x * lon * (this.m + Math.cos(lat));
      y = this.a * this.C_y * lat;
    } else {
      var s = Math.sin(lat);
      var c = Math.cos(lat);
      y = this.a * pj_mlfn(lat, s, c, this.en);
      x = this.a * lon * c / Math.sqrt(1 - this.es * s * s);
    }

    p.x = x;
    p.y = y;
    return p;
  }
  function inverse$9(p) {
    var lat, temp, lon, s;
    p.x -= this.x0;
    lon = p.x / this.a;
    p.y -= this.y0;
    lat = p.y / this.a;

    if (this.sphere) {
      lat /= this.C_y;
      lon = lon / (this.C_x * (this.m + Math.cos(lat)));

      if (this.m) {
        lat = asinz((this.m * lat + Math.sin(lat)) / this.n);
      } else if (this.n !== 1) {
        lat = asinz(Math.sin(lat) / this.n);
      }

      lon = adjust_lon(lon + this.long0);
      lat = adjust_lat(lat);
    } else {
      lat = pj_inv_mlfn(p.y / this.a, this.es, this.en);
      s = Math.abs(lat);

      if (s < HALF_PI) {
        s = Math.sin(lat);
        temp = this.long0 + p.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(lat)); //temp = this.long0 + p.x / (this.a * Math.cos(lat));

        lon = adjust_lon(temp);
      } else if (s - EPSLN < HALF_PI) {
        lon = this.long0;
      }
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$9 = ["Sinusoidal", "sinu"];
  var sinu = {
    init: init$a,
    forward: forward$9,
    inverse: inverse$9,
    names: names$9
  };

  function init$9() {}
  /* Mollweide forward equations--mapping lat,long to x,y
      ----------------------------------------------------*/

  function forward$8(p) {
    /* Forward equations
        -----------------*/
    var lon = p.x;
    var lat = p.y;
    var delta_lon = adjust_lon(lon - this.long0);
    var theta = lat;
    var con = Math.PI * Math.sin(lat);
    /* Iterate using the Newton-Raphson method to find theta
        -----------------------------------------------------*/

    while (true) {
      var delta_theta = -(theta + Math.sin(theta) - con) / (1 + Math.cos(theta));
      theta += delta_theta;

      if (Math.abs(delta_theta) < EPSLN) {
        break;
      }
    }

    theta /= 2;
    /* If the latitude is 90 deg, force the x coordinate to be "0 + false easting"
         this is done here because of precision problems with "cos(theta)"
         --------------------------------------------------------------------------*/

    if (Math.PI / 2 - Math.abs(lat) < EPSLN) {
      delta_lon = 0;
    }

    var x = 0.900316316158 * this.a * delta_lon * Math.cos(theta) + this.x0;
    var y = 1.4142135623731 * this.a * Math.sin(theta) + this.y0;
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse$8(p) {
    var theta;
    var arg;
    /* Inverse equations
        -----------------*/

    p.x -= this.x0;
    p.y -= this.y0;
    arg = p.y / (1.4142135623731 * this.a);
    /* Because of division by zero problems, 'arg' can not be 1.  Therefore
         a number very close to one is used instead.
         -------------------------------------------------------------------*/

    if (Math.abs(arg) > 0.999999999999) {
      arg = 0.999999999999;
    }

    theta = Math.asin(arg);
    var lon = adjust_lon(this.long0 + p.x / (0.900316316158 * this.a * Math.cos(theta)));

    if (lon < -Math.PI) {
      lon = -Math.PI;
    }

    if (lon > Math.PI) {
      lon = Math.PI;
    }

    arg = (2 * theta + Math.sin(2 * theta)) / Math.PI;

    if (Math.abs(arg) > 1) {
      arg = 1;
    }

    var lat = Math.asin(arg);
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$8 = ["Mollweide", "moll"];
  var moll = {
    init: init$9,
    forward: forward$8,
    inverse: inverse$8,
    names: names$8
  };

  function init$8() {
    /* Place parameters in static storage for common use
        -------------------------------------------------*/
    // Standard Parallels cannot be equal and on opposite sides of the equator
    if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
      return;
    }

    this.lat2 = this.lat2 || this.lat1;
    this.temp = this.b / this.a;
    this.es = 1 - Math.pow(this.temp, 2);
    this.e = Math.sqrt(this.es);
    this.e0 = e0fn(this.es);
    this.e1 = e1fn(this.es);
    this.e2 = e2fn(this.es);
    this.e3 = e3fn(this.es);
    this.sinphi = Math.sin(this.lat1);
    this.cosphi = Math.cos(this.lat1);
    this.ms1 = msfnz(this.e, this.sinphi, this.cosphi);
    this.ml1 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat1);

    if (Math.abs(this.lat1 - this.lat2) < EPSLN) {
      this.ns = this.sinphi;
    } else {
      this.sinphi = Math.sin(this.lat2);
      this.cosphi = Math.cos(this.lat2);
      this.ms2 = msfnz(this.e, this.sinphi, this.cosphi);
      this.ml2 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat2);
      this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1);
    }

    this.g = this.ml1 + this.ms1 / this.ns;
    this.ml0 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
    this.rh = this.a * (this.g - this.ml0);
  }
  /* Equidistant Conic forward equations--mapping lat,long to x,y
    -----------------------------------------------------------*/

  function forward$7(p) {
    var lon = p.x;
    var lat = p.y;
    var rh1;
    /* Forward equations
        -----------------*/

    if (this.sphere) {
      rh1 = this.a * (this.g - lat);
    } else {
      var ml = mlfn(this.e0, this.e1, this.e2, this.e3, lat);
      rh1 = this.a * (this.g - ml);
    }

    var theta = this.ns * adjust_lon(lon - this.long0);
    var x = this.x0 + rh1 * Math.sin(theta);
    var y = this.y0 + this.rh - rh1 * Math.cos(theta);
    p.x = x;
    p.y = y;
    return p;
  }
  /* Inverse equations
    -----------------*/

  function inverse$7(p) {
    p.x -= this.x0;
    p.y = this.rh - p.y + this.y0;
    var con, rh1, lat, lon;

    if (this.ns >= 0) {
      rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
      con = 1;
    } else {
      rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
      con = -1;
    }

    var theta = 0;

    if (rh1 !== 0) {
      theta = Math.atan2(con * p.x, con * p.y);
    }

    if (this.sphere) {
      lon = adjust_lon(this.long0 + theta / this.ns);
      lat = adjust_lat(this.g - rh1 / this.a);
      p.x = lon;
      p.y = lat;
      return p;
    } else {
      var ml = this.g - rh1 / this.a;
      lat = imlfn(ml, this.e0, this.e1, this.e2, this.e3);
      lon = adjust_lon(this.long0 + theta / this.ns);
      p.x = lon;
      p.y = lat;
      return p;
    }
  }
  var names$7 = ["Equidistant_Conic", "eqdc"];
  var eqdc = {
    init: init$8,
    forward: forward$7,
    inverse: inverse$7,
    names: names$7
  };

  /* Initialize the Van Der Grinten projection
    ----------------------------------------*/

  function init$7() {
    //this.R = 6370997; //Radius of earth
    this.R = this.a;
  }
  function forward$6(p) {
    var lon = p.x;
    var lat = p.y;
    /* Forward equations
      -----------------*/

    var dlon = adjust_lon(lon - this.long0);
    var x, y;

    if (Math.abs(lat) <= EPSLN) {
      x = this.x0 + this.R * dlon;
      y = this.y0;
    }

    var theta = asinz(2 * Math.abs(lat / Math.PI));

    if (Math.abs(dlon) <= EPSLN || Math.abs(Math.abs(lat) - HALF_PI) <= EPSLN) {
      x = this.x0;

      if (lat >= 0) {
        y = this.y0 + Math.PI * this.R * Math.tan(0.5 * theta);
      } else {
        y = this.y0 + Math.PI * this.R * -Math.tan(0.5 * theta);
      } //  return(OK);

    }

    var al = 0.5 * Math.abs(Math.PI / dlon - dlon / Math.PI);
    var asq = al * al;
    var sinth = Math.sin(theta);
    var costh = Math.cos(theta);
    var g = costh / (sinth + costh - 1);
    var gsq = g * g;
    var m = g * (2 / sinth - 1);
    var msq = m * m;
    var con = Math.PI * this.R * (al * (g - msq) + Math.sqrt(asq * (g - msq) * (g - msq) - (msq + asq) * (gsq - msq))) / (msq + asq);

    if (dlon < 0) {
      con = -con;
    }

    x = this.x0 + con; //con = Math.abs(con / (Math.PI * this.R));

    var q = asq + g;
    con = Math.PI * this.R * (m * q - al * Math.sqrt((msq + asq) * (asq + 1) - q * q)) / (msq + asq);

    if (lat >= 0) {
      //y = this.y0 + Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
      y = this.y0 + con;
    } else {
      //y = this.y0 - Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
      y = this.y0 - con;
    }

    p.x = x;
    p.y = y;
    return p;
  }
  /* Van Der Grinten inverse equations--mapping x,y to lat/long
    ---------------------------------------------------------*/

  function inverse$6(p) {
    var lon, lat;
    var xx, yy, xys, c1, c2, c3;
    var a1;
    var m1;
    var con;
    var th1;
    var d;
    /* inverse equations
      -----------------*/

    p.x -= this.x0;
    p.y -= this.y0;
    con = Math.PI * this.R;
    xx = p.x / con;
    yy = p.y / con;
    xys = xx * xx + yy * yy;
    c1 = -Math.abs(yy) * (1 + xys);
    c2 = c1 - 2 * yy * yy + xx * xx;
    c3 = -2 * c1 + 1 + 2 * yy * yy + xys * xys;
    d = yy * yy / c3 + (2 * c2 * c2 * c2 / c3 / c3 / c3 - 9 * c1 * c2 / c3 / c3) / 27;
    a1 = (c1 - c2 * c2 / 3 / c3) / c3;
    m1 = 2 * Math.sqrt(-a1 / 3);
    con = 3 * d / a1 / m1;

    if (Math.abs(con) > 1) {
      if (con >= 0) {
        con = 1;
      } else {
        con = -1;
      }
    }

    th1 = Math.acos(con) / 3;

    if (p.y >= 0) {
      lat = (-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
    } else {
      lat = -(-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
    }

    if (Math.abs(xx) < EPSLN) {
      lon = this.long0;
    } else {
      lon = adjust_lon(this.long0 + Math.PI * (xys - 1 + Math.sqrt(1 + 2 * (xx * xx - yy * yy) + xys * xys)) / 2 / xx);
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$6 = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
  var vandg = {
    init: init$7,
    forward: forward$6,
    inverse: inverse$6,
    names: names$6
  };

  function init$6() {
    this.sin_p12 = Math.sin(this.lat0);
    this.cos_p12 = Math.cos(this.lat0);
  }
  function forward$5(p) {
    var lon = p.x;
    var lat = p.y;
    var sinphi = Math.sin(p.y);
    var cosphi = Math.cos(p.y);
    var dlon = adjust_lon(lon - this.long0);
    var e0, e1, e2, e3, Mlp, Ml, tanphi, Nl1, Nl, psi, Az, G, H, GH, Hs, c, kp, cos_c, s, s2, s3, s4, s5;

    if (this.sphere) {
      if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
        //North Pole case
        p.x = this.x0 + this.a * (HALF_PI - lat) * Math.sin(dlon);
        p.y = this.y0 - this.a * (HALF_PI - lat) * Math.cos(dlon);
        return p;
      } else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
        //South Pole case
        p.x = this.x0 + this.a * (HALF_PI + lat) * Math.sin(dlon);
        p.y = this.y0 + this.a * (HALF_PI + lat) * Math.cos(dlon);
        return p;
      } else {
        //default case
        cos_c = this.sin_p12 * sinphi + this.cos_p12 * cosphi * Math.cos(dlon);
        c = Math.acos(cos_c);
        kp = c ? c / Math.sin(c) : 1;
        p.x = this.x0 + this.a * kp * cosphi * Math.sin(dlon);
        p.y = this.y0 + this.a * kp * (this.cos_p12 * sinphi - this.sin_p12 * cosphi * Math.cos(dlon));
        return p;
      }
    } else {
      e0 = e0fn(this.es);
      e1 = e1fn(this.es);
      e2 = e2fn(this.es);
      e3 = e3fn(this.es);

      if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
        //North Pole case
        Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
        Ml = this.a * mlfn(e0, e1, e2, e3, lat);
        p.x = this.x0 + (Mlp - Ml) * Math.sin(dlon);
        p.y = this.y0 - (Mlp - Ml) * Math.cos(dlon);
        return p;
      } else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
        //South Pole case
        Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
        Ml = this.a * mlfn(e0, e1, e2, e3, lat);
        p.x = this.x0 + (Mlp + Ml) * Math.sin(dlon);
        p.y = this.y0 + (Mlp + Ml) * Math.cos(dlon);
        return p;
      } else {
        //Default case
        tanphi = sinphi / cosphi;
        Nl1 = gN(this.a, this.e, this.sin_p12);
        Nl = gN(this.a, this.e, sinphi);
        psi = Math.atan((1 - this.es) * tanphi + this.es * Nl1 * this.sin_p12 / (Nl * cosphi));
        Az = Math.atan2(Math.sin(dlon), this.cos_p12 * Math.tan(psi) - this.sin_p12 * Math.cos(dlon));

        if (Az === 0) {
          s = Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
        } else if (Math.abs(Math.abs(Az) - Math.PI) <= EPSLN) {
          s = -Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
        } else {
          s = Math.asin(Math.sin(dlon) * Math.cos(psi) / Math.sin(Az));
        }

        G = this.e * this.sin_p12 / Math.sqrt(1 - this.es);
        H = this.e * this.cos_p12 * Math.cos(Az) / Math.sqrt(1 - this.es);
        GH = G * H;
        Hs = H * H;
        s2 = s * s;
        s3 = s2 * s;
        s4 = s3 * s;
        s5 = s4 * s;
        c = Nl1 * s * (1 - s2 * Hs * (1 - Hs) / 6 + s3 / 8 * GH * (1 - 2 * Hs) + s4 / 120 * (Hs * (4 - 7 * Hs) - 3 * G * G * (1 - 7 * Hs)) - s5 / 48 * GH);
        p.x = this.x0 + c * Math.sin(Az);
        p.y = this.y0 + c * Math.cos(Az);
        return p;
      }
    }
  }
  function inverse$5(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var rh, z, sinz, cosz, lon, lat, con, e0, e1, e2, e3, Mlp, M, N1, psi, Az, cosAz, tmp, A, B, D, Ee, F, sinpsi;

    if (this.sphere) {
      rh = Math.sqrt(p.x * p.x + p.y * p.y);

      if (rh > 2 * HALF_PI * this.a) {
        return;
      }

      z = rh / this.a;
      sinz = Math.sin(z);
      cosz = Math.cos(z);
      lon = this.long0;

      if (Math.abs(rh) <= EPSLN) {
        lat = this.lat0;
      } else {
        lat = asinz(cosz * this.sin_p12 + p.y * sinz * this.cos_p12 / rh);
        con = Math.abs(this.lat0) - HALF_PI;

        if (Math.abs(con) <= EPSLN) {
          if (this.lat0 >= 0) {
            lon = adjust_lon(this.long0 + Math.atan2(p.x, -p.y));
          } else {
            lon = adjust_lon(this.long0 - Math.atan2(-p.x, p.y));
          }
        } else {
          /*con = cosz - this.sin_p12 * Math.sin(lat);
          if ((Math.abs(con) < EPSLN) && (Math.abs(p.x) < EPSLN)) {
            //no-op, just keep the lon value as is
          } else {
            var temp = Math.atan2((p.x * sinz * this.cos_p12), (con * rh));
            lon = adjust_lon(this.long0 + Math.atan2((p.x * sinz * this.cos_p12), (con * rh)));
          }*/
          lon = adjust_lon(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p12 * cosz - p.y * this.sin_p12 * sinz));
        }
      }

      p.x = lon;
      p.y = lat;
      return p;
    } else {
      e0 = e0fn(this.es);
      e1 = e1fn(this.es);
      e2 = e2fn(this.es);
      e3 = e3fn(this.es);

      if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
        //North pole case
        Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
        rh = Math.sqrt(p.x * p.x + p.y * p.y);
        M = Mlp - rh;
        lat = imlfn(M / this.a, e0, e1, e2, e3);
        lon = adjust_lon(this.long0 + Math.atan2(p.x, -1 * p.y));
        p.x = lon;
        p.y = lat;
        return p;
      } else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
        //South pole case
        Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
        rh = Math.sqrt(p.x * p.x + p.y * p.y);
        M = rh - Mlp;
        lat = imlfn(M / this.a, e0, e1, e2, e3);
        lon = adjust_lon(this.long0 + Math.atan2(p.x, p.y));
        p.x = lon;
        p.y = lat;
        return p;
      } else {
        //default case
        rh = Math.sqrt(p.x * p.x + p.y * p.y);
        Az = Math.atan2(p.x, p.y);
        N1 = gN(this.a, this.e, this.sin_p12);
        cosAz = Math.cos(Az);
        tmp = this.e * this.cos_p12 * cosAz;
        A = -tmp * tmp / (1 - this.es);
        B = 3 * this.es * (1 - A) * this.sin_p12 * this.cos_p12 * cosAz / (1 - this.es);
        D = rh / N1;
        Ee = D - A * (1 + A) * Math.pow(D, 3) / 6 - B * (1 + 3 * A) * Math.pow(D, 4) / 24;
        F = 1 - A * Ee * Ee / 2 - D * Ee * Ee * Ee / 6;
        psi = Math.asin(this.sin_p12 * Math.cos(Ee) + this.cos_p12 * Math.sin(Ee) * cosAz);
        lon = adjust_lon(this.long0 + Math.asin(Math.sin(Az) * Math.sin(Ee) / Math.cos(psi)));
        sinpsi = Math.sin(psi);
        lat = Math.atan2((sinpsi - this.es * F * this.sin_p12) * Math.tan(psi), sinpsi * (1 - this.es));
        p.x = lon;
        p.y = lat;
        return p;
      }
    }
  }
  var names$5 = ["Azimuthal_Equidistant", "aeqd"];
  var aeqd = {
    init: init$6,
    forward: forward$5,
    inverse: inverse$5,
    names: names$5
  };

  function init$5() {
    //double temp;      /* temporary variable    */

    /* Place parameters in static storage for common use
        -------------------------------------------------*/
    this.sin_p14 = Math.sin(this.lat0);
    this.cos_p14 = Math.cos(this.lat0);
  }
  /* Orthographic forward equations--mapping lat,long to x,y
      ---------------------------------------------------*/

  function forward$4(p) {
    var sinphi, cosphi;
    /* sin and cos value        */

    var dlon;
    /* delta longitude value      */

    var coslon;
    /* cos of longitude        */

    var ksp;
    /* scale factor          */

    var g, x, y;
    var lon = p.x;
    var lat = p.y;
    /* Forward equations
        -----------------*/

    dlon = adjust_lon(lon - this.long0);
    sinphi = Math.sin(lat);
    cosphi = Math.cos(lat);
    coslon = Math.cos(dlon);
    g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
    ksp = 1;

    if (g > 0 || Math.abs(g) <= EPSLN) {
      x = this.a * ksp * cosphi * Math.sin(dlon);
      y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
    }

    p.x = x;
    p.y = y;
    return p;
  }
  function inverse$4(p) {
    var rh;
    /* height above ellipsoid      */

    var z;
    /* angle          */

    var sinz, cosz;
    /* sin of z and cos of z      */

    var con;
    var lon, lat;
    /* Inverse equations
        -----------------*/

    p.x -= this.x0;
    p.y -= this.y0;
    rh = Math.sqrt(p.x * p.x + p.y * p.y);
    z = asinz(rh / this.a);
    sinz = Math.sin(z);
    cosz = Math.cos(z);
    lon = this.long0;

    if (Math.abs(rh) <= EPSLN) {
      lat = this.lat0;
      p.x = lon;
      p.y = lat;
      return p;
    }

    lat = asinz(cosz * this.sin_p14 + p.y * sinz * this.cos_p14 / rh);
    con = Math.abs(this.lat0) - HALF_PI;

    if (Math.abs(con) <= EPSLN) {
      if (this.lat0 >= 0) {
        lon = adjust_lon(this.long0 + Math.atan2(p.x, -p.y));
      } else {
        lon = adjust_lon(this.long0 - Math.atan2(-p.x, p.y));
      }

      p.x = lon;
      p.y = lat;
      return p;
    }

    lon = adjust_lon(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p14 * cosz - p.y * this.sin_p14 * sinz));
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names$4 = ["ortho"];
  var ortho = {
    init: init$5,
    forward: forward$4,
    inverse: inverse$4,
    names: names$4
  };

  // QSC projection rewritten from the original PROJ4
  /* constants */

  var FACE_ENUM = {
    FRONT: 1,
    RIGHT: 2,
    BACK: 3,
    LEFT: 4,
    TOP: 5,
    BOTTOM: 6
  };
  var AREA_ENUM = {
    AREA_0: 1,
    AREA_1: 2,
    AREA_2: 3,
    AREA_3: 4
  };
  function init$4() {
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.lat0 = this.lat0 || 0;
    this.long0 = this.long0 || 0;
    this.lat_ts = this.lat_ts || 0;
    this.title = this.title || "Quadrilateralized Spherical Cube";
    /* Determine the cube face from the center of projection. */

    if (this.lat0 >= HALF_PI - FORTPI / 2.0) {
      this.face = FACE_ENUM.TOP;
    } else if (this.lat0 <= -(HALF_PI - FORTPI / 2.0)) {
      this.face = FACE_ENUM.BOTTOM;
    } else if (Math.abs(this.long0) <= FORTPI) {
      this.face = FACE_ENUM.FRONT;
    } else if (Math.abs(this.long0) <= HALF_PI + FORTPI) {
      this.face = this.long0 > 0.0 ? FACE_ENUM.RIGHT : FACE_ENUM.LEFT;
    } else {
      this.face = FACE_ENUM.BACK;
    }
    /* Fill in useful values for the ellipsoid <-> sphere shift
     * described in [LK12]. */


    if (this.es !== 0) {
      this.one_minus_f = 1 - (this.a - this.b) / this.a;
      this.one_minus_f_squared = this.one_minus_f * this.one_minus_f;
    }
  } // QSC forward equations--mapping lat,long to x,y
  // -----------------------------------------------------------------

  function forward$3(p) {
    var xy = {
      x: 0,
      y: 0
    };
    var lat, lon;
    var theta, phi;
    var t, mu;
    /* nu; */

    var area = {
      value: 0
    }; // move lon according to projection's lon

    p.x -= this.long0;
    /* Convert the geodetic latitude to a geocentric latitude.
     * This corresponds to the shift from the ellipsoid to the sphere
     * described in [LK12]. */

    if (this.es !== 0) {
      //if (P->es != 0) {
      lat = Math.atan(this.one_minus_f_squared * Math.tan(p.y));
    } else {
      lat = p.y;
    }
    /* Convert the input lat, lon into theta, phi as used by QSC.
     * This depends on the cube face and the area on it.
     * For the top and bottom face, we can compute theta and phi
     * directly from phi, lam. For the other faces, we must use
     * unit sphere cartesian coordinates as an intermediate step. */


    lon = p.x; //lon = lp.lam;

    if (this.face === FACE_ENUM.TOP) {
      phi = HALF_PI - lat;

      if (lon >= FORTPI && lon <= HALF_PI + FORTPI) {
        area.value = AREA_ENUM.AREA_0;
        theta = lon - HALF_PI;
      } else if (lon > HALF_PI + FORTPI || lon <= -(HALF_PI + FORTPI)) {
        area.value = AREA_ENUM.AREA_1;
        theta = lon > 0.0 ? lon - SPI : lon + SPI;
      } else if (lon > -(HALF_PI + FORTPI) && lon <= -FORTPI) {
        area.value = AREA_ENUM.AREA_2;
        theta = lon + HALF_PI;
      } else {
        area.value = AREA_ENUM.AREA_3;
        theta = lon;
      }
    } else if (this.face === FACE_ENUM.BOTTOM) {
      phi = HALF_PI + lat;

      if (lon >= FORTPI && lon <= HALF_PI + FORTPI) {
        area.value = AREA_ENUM.AREA_0;
        theta = -lon + HALF_PI;
      } else if (lon < FORTPI && lon >= -FORTPI) {
        area.value = AREA_ENUM.AREA_1;
        theta = -lon;
      } else if (lon < -FORTPI && lon >= -(HALF_PI + FORTPI)) {
        area.value = AREA_ENUM.AREA_2;
        theta = -lon - HALF_PI;
      } else {
        area.value = AREA_ENUM.AREA_3;
        theta = lon > 0.0 ? -lon + SPI : -lon - SPI;
      }
    } else {
      var q, r, s;
      var sinlat, coslat;
      var sinlon, coslon;

      if (this.face === FACE_ENUM.RIGHT) {
        lon = qsc_shift_lon_origin(lon, +HALF_PI);
      } else if (this.face === FACE_ENUM.BACK) {
        lon = qsc_shift_lon_origin(lon, +SPI);
      } else if (this.face === FACE_ENUM.LEFT) {
        lon = qsc_shift_lon_origin(lon, -HALF_PI);
      }

      sinlat = Math.sin(lat);
      coslat = Math.cos(lat);
      sinlon = Math.sin(lon);
      coslon = Math.cos(lon);
      q = coslat * coslon;
      r = coslat * sinlon;
      s = sinlat;

      if (this.face === FACE_ENUM.FRONT) {
        phi = Math.acos(q);
        theta = qsc_fwd_equat_face_theta(phi, s, r, area);
      } else if (this.face === FACE_ENUM.RIGHT) {
        phi = Math.acos(r);
        theta = qsc_fwd_equat_face_theta(phi, s, -q, area);
      } else if (this.face === FACE_ENUM.BACK) {
        phi = Math.acos(-q);
        theta = qsc_fwd_equat_face_theta(phi, s, -r, area);
      } else if (this.face === FACE_ENUM.LEFT) {
        phi = Math.acos(-r);
        theta = qsc_fwd_equat_face_theta(phi, s, q, area);
      } else {
        /* Impossible */
        phi = theta = 0;
        area.value = AREA_ENUM.AREA_0;
      }
    }
    /* Compute mu and nu for the area of definition.
     * For mu, see Eq. (3-21) in [OL76], but note the typos:
     * compare with Eq. (3-14). For nu, see Eq. (3-38). */


    mu = Math.atan(12 / SPI * (theta + Math.acos(Math.sin(theta) * Math.cos(FORTPI)) - HALF_PI));
    t = Math.sqrt((1 - Math.cos(phi)) / (Math.cos(mu) * Math.cos(mu)) / (1 - Math.cos(Math.atan(1 / Math.cos(theta)))));
    /* Apply the result to the real area. */

    if (area.value === AREA_ENUM.AREA_1) {
      mu += HALF_PI;
    } else if (area.value === AREA_ENUM.AREA_2) {
      mu += SPI;
    } else if (area.value === AREA_ENUM.AREA_3) {
      mu += 1.5 * SPI;
    }
    /* Now compute x, y from mu and nu */


    xy.x = t * Math.cos(mu);
    xy.y = t * Math.sin(mu);
    xy.x = xy.x * this.a + this.x0;
    xy.y = xy.y * this.a + this.y0;
    p.x = xy.x;
    p.y = xy.y;
    return p;
  } // QSC inverse equations--mapping x,y to lat/long
  // -----------------------------------------------------------------

  function inverse$3(p) {
    var lp = {
      lam: 0,
      phi: 0
    };
    var mu, nu, cosmu, tannu;
    var tantheta, theta, cosphi, phi;
    var t;
    var area = {
      value: 0
    };
    /* de-offset */

    p.x = (p.x - this.x0) / this.a;
    p.y = (p.y - this.y0) / this.a;
    /* Convert the input x, y to the mu and nu angles as used by QSC.
     * This depends on the area of the cube face. */

    nu = Math.atan(Math.sqrt(p.x * p.x + p.y * p.y));
    mu = Math.atan2(p.y, p.x);

    if (p.x >= 0.0 && p.x >= Math.abs(p.y)) {
      area.value = AREA_ENUM.AREA_0;
    } else if (p.y >= 0.0 && p.y >= Math.abs(p.x)) {
      area.value = AREA_ENUM.AREA_1;
      mu -= HALF_PI;
    } else if (p.x < 0.0 && -p.x >= Math.abs(p.y)) {
      area.value = AREA_ENUM.AREA_2;
      mu = mu < 0.0 ? mu + SPI : mu - SPI;
    } else {
      area.value = AREA_ENUM.AREA_3;
      mu += HALF_PI;
    }
    /* Compute phi and theta for the area of definition.
     * The inverse projection is not described in the original paper, but some
     * good hints can be found here (as of 2011-12-14):
     * http://fits.gsfc.nasa.gov/fitsbits/saf.93/saf.9302
     * (search for "Message-Id: <9302181759.AA25477 at fits.cv.nrao.edu>") */


    t = SPI / 12 * Math.tan(mu);
    tantheta = Math.sin(t) / (Math.cos(t) - 1 / Math.sqrt(2));
    theta = Math.atan(tantheta);
    cosmu = Math.cos(mu);
    tannu = Math.tan(nu);
    cosphi = 1 - cosmu * cosmu * tannu * tannu * (1 - Math.cos(Math.atan(1 / Math.cos(theta))));

    if (cosphi < -1) {
      cosphi = -1;
    } else if (cosphi > +1) {
      cosphi = +1;
    }
    /* Apply the result to the real area on the cube face.
     * For the top and bottom face, we can compute phi and lam directly.
     * For the other faces, we must use unit sphere cartesian coordinates
     * as an intermediate step. */


    if (this.face === FACE_ENUM.TOP) {
      phi = Math.acos(cosphi);
      lp.phi = HALF_PI - phi;

      if (area.value === AREA_ENUM.AREA_0) {
        lp.lam = theta + HALF_PI;
      } else if (area.value === AREA_ENUM.AREA_1) {
        lp.lam = theta < 0.0 ? theta + SPI : theta - SPI;
      } else if (area.value === AREA_ENUM.AREA_2) {
        lp.lam = theta - HALF_PI;
      } else
        /* area.value == AREA_ENUM.AREA_3 */
        {
          lp.lam = theta;
        }
    } else if (this.face === FACE_ENUM.BOTTOM) {
      phi = Math.acos(cosphi);
      lp.phi = phi - HALF_PI;

      if (area.value === AREA_ENUM.AREA_0) {
        lp.lam = -theta + HALF_PI;
      } else if (area.value === AREA_ENUM.AREA_1) {
        lp.lam = -theta;
      } else if (area.value === AREA_ENUM.AREA_2) {
        lp.lam = -theta - HALF_PI;
      } else
        /* area.value == AREA_ENUM.AREA_3 */
        {
          lp.lam = theta < 0.0 ? -theta - SPI : -theta + SPI;
        }
    } else {
      /* Compute phi and lam via cartesian unit sphere coordinates. */
      var q, r, s;
      q = cosphi;
      t = q * q;

      if (t >= 1) {
        s = 0;
      } else {
        s = Math.sqrt(1 - t) * Math.sin(theta);
      }

      t += s * s;

      if (t >= 1) {
        r = 0;
      } else {
        r = Math.sqrt(1 - t);
      }
      /* Rotate q,r,s into the correct area. */


      if (area.value === AREA_ENUM.AREA_1) {
        t = r;
        r = -s;
        s = t;
      } else if (area.value === AREA_ENUM.AREA_2) {
        r = -r;
        s = -s;
      } else if (area.value === AREA_ENUM.AREA_3) {
        t = r;
        r = s;
        s = -t;
      }
      /* Rotate q,r,s into the correct cube face. */


      if (this.face === FACE_ENUM.RIGHT) {
        t = q;
        q = -r;
        r = t;
      } else if (this.face === FACE_ENUM.BACK) {
        q = -q;
        r = -r;
      } else if (this.face === FACE_ENUM.LEFT) {
        t = q;
        q = r;
        r = -t;
      }
      /* Now compute phi and lam from the unit sphere coordinates. */


      lp.phi = Math.acos(-s) - HALF_PI;
      lp.lam = Math.atan2(r, q);

      if (this.face === FACE_ENUM.RIGHT) {
        lp.lam = qsc_shift_lon_origin(lp.lam, -HALF_PI);
      } else if (this.face === FACE_ENUM.BACK) {
        lp.lam = qsc_shift_lon_origin(lp.lam, -SPI);
      } else if (this.face === FACE_ENUM.LEFT) {
        lp.lam = qsc_shift_lon_origin(lp.lam, +HALF_PI);
      }
    }
    /* Apply the shift from the sphere to the ellipsoid as described
     * in [LK12]. */


    if (this.es !== 0) {
      var invert_sign;
      var tanphi, xa;
      invert_sign = lp.phi < 0 ? 1 : 0;
      tanphi = Math.tan(lp.phi);
      xa = this.b / Math.sqrt(tanphi * tanphi + this.one_minus_f_squared);
      lp.phi = Math.atan(Math.sqrt(this.a * this.a - xa * xa) / (this.one_minus_f * xa));

      if (invert_sign) {
        lp.phi = -lp.phi;
      }
    }

    lp.lam += this.long0;
    p.x = lp.lam;
    p.y = lp.phi;
    return p;
  }
  /* Helper function for forward projection: compute the theta angle
   * and determine the area number. */

  function qsc_fwd_equat_face_theta(phi, y, x, area) {
    var theta;

    if (phi < EPSLN) {
      area.value = AREA_ENUM.AREA_0;
      theta = 0.0;
    } else {
      theta = Math.atan2(y, x);

      if (Math.abs(theta) <= FORTPI) {
        area.value = AREA_ENUM.AREA_0;
      } else if (theta > FORTPI && theta <= HALF_PI + FORTPI) {
        area.value = AREA_ENUM.AREA_1;
        theta -= HALF_PI;
      } else if (theta > HALF_PI + FORTPI || theta <= -(HALF_PI + FORTPI)) {
        area.value = AREA_ENUM.AREA_2;
        theta = theta >= 0.0 ? theta - SPI : theta + SPI;
      } else {
        area.value = AREA_ENUM.AREA_3;
        theta += HALF_PI;
      }
    }

    return theta;
  }
  /* Helper function: shift the longitude. */


  function qsc_shift_lon_origin(lon, offset) {
    var slon = lon + offset;

    if (slon < -SPI) {
      slon += TWO_PI;
    } else if (slon > +SPI) {
      slon -= TWO_PI;
    }

    return slon;
  }

  var names$3 = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
  var qsc = {
    init: init$4,
    forward: forward$3,
    inverse: inverse$3,
    names: names$3
  };

  // Robinson projection
  var COEFS_X = [[1.0000, 2.2199e-17, -7.15515e-05, 3.1103e-06], [0.9986, -0.000482243, -2.4897e-05, -1.3309e-06], [0.9954, -0.00083103, -4.48605e-05, -9.86701e-07], [0.9900, -0.00135364, -5.9661e-05, 3.6777e-06], [0.9822, -0.00167442, -4.49547e-06, -5.72411e-06], [0.9730, -0.00214868, -9.03571e-05, 1.8736e-08], [0.9600, -0.00305085, -9.00761e-05, 1.64917e-06], [0.9427, -0.00382792, -6.53386e-05, -2.6154e-06], [0.9216, -0.00467746, -0.00010457, 4.81243e-06], [0.8962, -0.00536223, -3.23831e-05, -5.43432e-06], [0.8679, -0.00609363, -0.000113898, 3.32484e-06], [0.8350, -0.00698325, -6.40253e-05, 9.34959e-07], [0.7986, -0.00755338, -5.00009e-05, 9.35324e-07], [0.7597, -0.00798324, -3.5971e-05, -2.27626e-06], [0.7186, -0.00851367, -7.01149e-05, -8.6303e-06], [0.6732, -0.00986209, -0.000199569, 1.91974e-05], [0.6213, -0.010418, 8.83923e-05, 6.24051e-06], [0.5722, -0.00906601, 0.000182, 6.24051e-06], [0.5322, -0.00677797, 0.000275608, 6.24051e-06]];
  var COEFS_Y = [[-5.20417e-18, 0.0124, 1.21431e-18, -8.45284e-11], [0.0620, 0.0124, -1.26793e-09, 4.22642e-10], [0.1240, 0.0124, 5.07171e-09, -1.60604e-09], [0.1860, 0.0123999, -1.90189e-08, 6.00152e-09], [0.2480, 0.0124002, 7.10039e-08, -2.24e-08], [0.3100, 0.0123992, -2.64997e-07, 8.35986e-08], [0.3720, 0.0124029, 9.88983e-07, -3.11994e-07], [0.4340, 0.0123893, -3.69093e-06, -4.35621e-07], [0.4958, 0.0123198, -1.02252e-05, -3.45523e-07], [0.5571, 0.0121916, -1.54081e-05, -5.82288e-07], [0.6176, 0.0119938, -2.41424e-05, -5.25327e-07], [0.6769, 0.011713, -3.20223e-05, -5.16405e-07], [0.7346, 0.0113541, -3.97684e-05, -6.09052e-07], [0.7903, 0.0109107, -4.89042e-05, -1.04739e-06], [0.8435, 0.0103431, -6.4615e-05, -1.40374e-09], [0.8936, 0.00969686, -6.4636e-05, -8.547e-06], [0.9394, 0.00840947, -0.000192841, -4.2106e-06], [0.9761, 0.00616527, -0.000256, -4.2106e-06], [1.0000, 0.00328947, -0.000319159, -4.2106e-06]];
  var FXC = 0.8487;
  var FYC = 1.3523;
  var C1 = R2D / 5; // rad to 5-degree interval

  var RC1 = 1 / C1;
  var NODES = 18;

  var poly3_val = function poly3_val(coefs, x) {
    return coefs[0] + x * (coefs[1] + x * (coefs[2] + x * coefs[3]));
  };

  var poly3_der = function poly3_der(coefs, x) {
    return coefs[1] + x * (2 * coefs[2] + x * 3 * coefs[3]);
  };

  function newton_rapshon(f_df, start, max_err, iters) {
    var x = start;

    for (; iters; --iters) {
      var upd = f_df(x);
      x -= upd;

      if (Math.abs(upd) < max_err) {
        break;
      }
    }

    return x;
  }

  function init$3() {
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.long0 = this.long0 || 0;
    this.es = 0;
    this.title = this.title || "Robinson";
  }
  function forward$2(ll) {
    var lon = adjust_lon(ll.x - this.long0);
    var dphi = Math.abs(ll.y);
    var i = Math.floor(dphi * C1);

    if (i < 0) {
      i = 0;
    } else if (i >= NODES) {
      i = NODES - 1;
    }

    dphi = R2D * (dphi - RC1 * i);
    var xy = {
      x: poly3_val(COEFS_X[i], dphi) * lon,
      y: poly3_val(COEFS_Y[i], dphi)
    };

    if (ll.y < 0) {
      xy.y = -xy.y;
    }

    xy.x = xy.x * this.a * FXC + this.x0;
    xy.y = xy.y * this.a * FYC + this.y0;
    return xy;
  }
  function inverse$2(xy) {
    var ll = {
      x: (xy.x - this.x0) / (this.a * FXC),
      y: Math.abs(xy.y - this.y0) / (this.a * FYC)
    };

    if (ll.y >= 1) {
      // pathologic case
      ll.x /= COEFS_X[NODES][0];
      ll.y = xy.y < 0 ? -HALF_PI : HALF_PI;
    } else {
      // find table interval
      var i = Math.floor(ll.y * NODES);

      if (i < 0) {
        i = 0;
      } else if (i >= NODES) {
        i = NODES - 1;
      }

      for (;;) {
        if (COEFS_Y[i][0] > ll.y) {
          --i;
        } else if (COEFS_Y[i + 1][0] <= ll.y) {
          ++i;
        } else {
          break;
        }
      } // linear interpolation in 5 degree interval


      var coefs = COEFS_Y[i];
      var t = 5 * (ll.y - coefs[0]) / (COEFS_Y[i + 1][0] - coefs[0]); // find t so that poly3_val(coefs, t) = ll.y

      t = newton_rapshon(function (x) {
        return (poly3_val(coefs, x) - ll.y) / poly3_der(coefs, x);
      }, t, EPSLN, 100);
      ll.x /= poly3_val(COEFS_X[i], t);
      ll.y = (5 * i + t) * D2R$1;

      if (xy.y < 0) {
        ll.y = -ll.y;
      }
    }

    ll.x = adjust_lon(ll.x + this.long0);
    return ll;
  }
  var names$2 = ["Robinson", "robin"];
  var robin = {
    init: init$3,
    forward: forward$2,
    inverse: inverse$2,
    names: names$2
  };

  function init$2() {
    this.name = 'geocent';
  }
  function forward$1(p) {
    var point = geodeticToGeocentric(p, this.es, this.a);
    return point;
  }
  function inverse$1(p) {
    var point = geocentricToGeodetic(p, this.es, this.a, this.b);
    return point;
  }
  var names$1 = ["Geocentric", 'geocentric', "geocent", "Geocent"];
  var geocent = {
    init: init$2,
    forward: forward$1,
    inverse: inverse$1,
    names: names$1
  };

  var mode = {
    N_POLE: 0,
    S_POLE: 1,
    EQUIT: 2,
    OBLIQ: 3
  };
  var params = {
    h: {
      def: 100000,
      num: true
    },
    // default is Karman line, no default in PROJ.7
    azi: {
      def: 0,
      num: true,
      degrees: true
    },
    // default is North
    tilt: {
      def: 0,
      num: true,
      degrees: true
    },
    // default is Nadir
    long0: {
      def: 0,
      num: true
    },
    // default is Greenwich, conversion to rad is automatic
    lat0: {
      def: 0,
      num: true
    } // default is Equator, conversion to rad is automatic

  };
  function init$1() {
    Object.keys(params).forEach(function (p) {
      if (typeof this[p] === "undefined") {
        this[p] = params[p].def;
      } else if (params[p].num && isNaN(this[p])) {
        throw new Error("Invalid parameter value, must be numeric " + p + " = " + this[p]);
      } else if (params[p].num) {
        this[p] = parseFloat(this[p]);
      }

      if (params[p].degrees) {
        this[p] = this[p] * D2R$1;
      }
    }.bind(this));

    if (Math.abs(Math.abs(this.lat0) - HALF_PI) < EPSLN) {
      this.mode = this.lat0 < 0 ? mode.S_POLE : mode.N_POLE;
    } else if (Math.abs(this.lat0) < EPSLN) {
      this.mode = mode.EQUIT;
    } else {
      this.mode = mode.OBLIQ;
      this.sinph0 = Math.sin(this.lat0);
      this.cosph0 = Math.cos(this.lat0);
    }

    this.pn1 = this.h / this.a; // Normalize relative to the Earth's radius

    if (this.pn1 <= 0 || this.pn1 > 1e10) {
      throw new Error("Invalid height");
    }

    this.p = 1 + this.pn1;
    this.rp = 1 / this.p;
    this.h1 = 1 / this.pn1;
    this.pfact = (this.p + 1) * this.h1;
    this.es = 0;
    var omega = this.tilt;
    var gamma = this.azi;
    this.cg = Math.cos(gamma);
    this.sg = Math.sin(gamma);
    this.cw = Math.cos(omega);
    this.sw = Math.sin(omega);
  }
  function forward(p) {
    p.x -= this.long0;
    var sinphi = Math.sin(p.y);
    var cosphi = Math.cos(p.y);
    var coslam = Math.cos(p.x);
    var x, y;

    switch (this.mode) {
      case mode.OBLIQ:
        y = this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
        break;

      case mode.EQUIT:
        y = cosphi * coslam;
        break;

      case mode.S_POLE:
        y = -sinphi;
        break;

      case mode.N_POLE:
        y = sinphi;
        break;
    }

    y = this.pn1 / (this.p - y);
    x = y * cosphi * Math.sin(p.x);

    switch (this.mode) {
      case mode.OBLIQ:
        y *= this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
        break;

      case mode.EQUIT:
        y *= sinphi;
        break;

      case mode.N_POLE:
        y *= -(cosphi * coslam);
        break;

      case mode.S_POLE:
        y *= cosphi * coslam;
        break;
    } // Tilt 


    var yt, ba;
    yt = y * this.cg + x * this.sg;
    ba = 1 / (yt * this.sw * this.h1 + this.cw);
    x = (x * this.cg - y * this.sg) * this.cw * ba;
    y = yt * ba;
    p.x = x * this.a;
    p.y = y * this.a;
    return p;
  }
  function inverse(p) {
    p.x /= this.a;
    p.y /= this.a;
    var r = {
      x: p.x,
      y: p.y
    }; // Un-Tilt

    var bm, bq, yt;
    yt = 1 / (this.pn1 - p.y * this.sw);
    bm = this.pn1 * p.x * yt;
    bq = this.pn1 * p.y * this.cw * yt;
    p.x = bm * this.cg + bq * this.sg;
    p.y = bq * this.cg - bm * this.sg;
    var rh = hypot(p.x, p.y);

    if (Math.abs(rh) < EPSLN) {
      r.x = 0;
      r.y = p.y;
    } else {
      var cosz, sinz;
      sinz = 1 - rh * rh * this.pfact;
      sinz = (this.p - Math.sqrt(sinz)) / (this.pn1 / rh + rh / this.pn1);
      cosz = Math.sqrt(1 - sinz * sinz);

      switch (this.mode) {
        case mode.OBLIQ:
          r.y = Math.asin(cosz * this.sinph0 + p.y * sinz * this.cosph0 / rh);
          p.y = (cosz - this.sinph0 * Math.sin(r.y)) * rh;
          p.x *= sinz * this.cosph0;
          break;

        case mode.EQUIT:
          r.y = Math.asin(p.y * sinz / rh);
          p.y = cosz * rh;
          p.x *= sinz;
          break;

        case mode.N_POLE:
          r.y = Math.asin(cosz);
          p.y = -p.y;
          break;

        case mode.S_POLE:
          r.y = -Math.asin(cosz);
          break;
      }

      r.x = Math.atan2(p.x, p.y);
    }

    p.x = r.x + this.long0;
    p.y = r.y;
    return p;
  }
  var names = ["Tilted_Perspective", "tpers"];
  var tpers = {
    init: init$1,
    forward: forward,
    inverse: inverse,
    names: names
  };

  function includedProjections (proj4) {
    proj4.Proj.projections.add(tmerc);
    proj4.Proj.projections.add(etmerc);
    proj4.Proj.projections.add(utm);
    proj4.Proj.projections.add(sterea);
    proj4.Proj.projections.add(stere);
    proj4.Proj.projections.add(somerc);
    proj4.Proj.projections.add(omerc);
    proj4.Proj.projections.add(lcc);
    proj4.Proj.projections.add(krovak);
    proj4.Proj.projections.add(cass);
    proj4.Proj.projections.add(laea);
    proj4.Proj.projections.add(aea);
    proj4.Proj.projections.add(gnom);
    proj4.Proj.projections.add(cea);
    proj4.Proj.projections.add(eqc);
    proj4.Proj.projections.add(poly);
    proj4.Proj.projections.add(nzmg);
    proj4.Proj.projections.add(mill);
    proj4.Proj.projections.add(sinu);
    proj4.Proj.projections.add(moll);
    proj4.Proj.projections.add(eqdc);
    proj4.Proj.projections.add(vandg);
    proj4.Proj.projections.add(aeqd);
    proj4.Proj.projections.add(ortho);
    proj4.Proj.projections.add(qsc);
    proj4.Proj.projections.add(robin);
    proj4.Proj.projections.add(geocent);
    proj4.Proj.projections.add(tpers);
  }

  proj4.defaultDatum = 'WGS84'; //default datum

  proj4.Proj = Projection;
  proj4.WGS84 = new proj4.Proj('WGS84');
  proj4.Point = Point;
  proj4.toPoint = common;
  proj4.defs = defs;
  proj4.nadgrid = nadgrid;
  proj4.transform = transform;
  proj4.mgrs = mgrs;
  proj4.version = '__VERSION__';
  includedProjections(proj4);

  var flat$1 = function pointInPolygonFlat(point, vs, start, end) {
    var x = point[0],
        y = point[1];
    var inside = false;
    if (start === undefined) start = 0;
    if (end === undefined) end = vs.length;
    var len = (end - start) / 2;

    for (var i = 0, j = len - 1; i < len; j = i++) {
      var xi = vs[start + i * 2 + 0],
          yi = vs[start + i * 2 + 1];
      var xj = vs[start + j * 2 + 0],
          yj = vs[start + j * 2 + 1];
      var intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }

    return inside;
  };

  // ray-casting algorithm based on
  // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html
  var nested$1 = function pointInPolygonNested(point, vs, start, end) {
    var x = point[0],
        y = point[1];
    var inside = false;
    if (start === undefined) start = 0;
    if (end === undefined) end = vs.length;
    var len = end - start;

    for (var i = 0, j = len - 1; i < len; j = i++) {
      var xi = vs[i + start][0],
          yi = vs[i + start][1];
      var xj = vs[j + start][0],
          yj = vs[j + start][1];
      var intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }

    return inside;
  };

  var pointInPolygon = function pointInPolygon(point, vs, start, end) {
    if (vs.length > 0 && Array.isArray(vs[0])) {
      return nested$1(point, vs, start, end);
    } else {
      return flat$1(point, vs, start, end);
    }
  };

  var nested = nested$1;
  var flat = flat$1;
  pointInPolygon.nested = nested;
  pointInPolygon.flat = flat;

  /** @module src/km100 */

  /** @constant
    * @description This the array from which the default object is derived. If you
    * need to work with an array of objects where the 100 km grid reference is a property
    * of the object alongside x, y, and proj, you can use this.
    * @type {array}
  */

  var a100km = [{
    "GridRef": "SV",
    "x": 0,
    "y": 0,
    "proj": "gb"
  }, {
    "GridRef": "NL",
    "x": 0,
    "y": 7,
    "proj": "gb"
  }, {
    "GridRef": "NF",
    "x": 0,
    "y": 8,
    "proj": "gb"
  }, {
    "GridRef": "NA",
    "x": 0,
    "y": 9,
    "proj": "gb"
  }, {
    "GridRef": "SW",
    "x": 1,
    "y": 0,
    "proj": "gb"
  }, {
    "GridRef": "SR",
    "x": 1,
    "y": 1,
    "proj": "gb"
  }, {
    "GridRef": "SM",
    "x": 1,
    "y": 2,
    "proj": "gb"
  }, {
    "GridRef": "NW",
    "x": 1,
    "y": 5,
    "proj": "gb"
  }, {
    "GridRef": "NR",
    "x": 1,
    "y": 6,
    "proj": "gb"
  }, {
    "GridRef": "NM",
    "x": 1,
    "y": 7,
    "proj": "gb"
  }, {
    "GridRef": "NG",
    "x": 1,
    "y": 8,
    "proj": "gb"
  }, {
    "GridRef": "NB",
    "x": 1,
    "y": 9,
    "proj": "gb"
  }, {
    "GridRef": "HW",
    "x": 1,
    "y": 10,
    "proj": "gb"
  }, {
    "GridRef": "SX",
    "x": 2,
    "y": 0,
    "proj": "gb"
  }, {
    "GridRef": "SS",
    "x": 2,
    "y": 1,
    "proj": "gb"
  }, {
    "GridRef": "SN",
    "x": 2,
    "y": 2,
    "proj": "gb"
  }, {
    "GridRef": "SH",
    "x": 2,
    "y": 3,
    "proj": "gb"
  }, {
    "GridRef": "SC",
    "x": 2,
    "y": 4,
    "proj": "gb"
  }, {
    "GridRef": "NX",
    "x": 2,
    "y": 5,
    "proj": "gb"
  }, {
    "GridRef": "NS",
    "x": 2,
    "y": 6,
    "proj": "gb"
  }, {
    "GridRef": "NN",
    "x": 2,
    "y": 7,
    "proj": "gb"
  }, {
    "GridRef": "NH",
    "x": 2,
    "y": 8,
    "proj": "gb"
  }, {
    "GridRef": "NC",
    "x": 2,
    "y": 9,
    "proj": "gb"
  }, {
    "GridRef": "HX",
    "x": 2,
    "y": 10,
    "proj": "gb"
  }, {
    "GridRef": "SY",
    "x": 3,
    "y": 0,
    "proj": "gb"
  }, {
    "GridRef": "ST",
    "x": 3,
    "y": 1,
    "proj": "gb"
  }, {
    "GridRef": "SO",
    "x": 3,
    "y": 2,
    "proj": "gb"
  }, {
    "GridRef": "SJ",
    "x": 3,
    "y": 3,
    "proj": "gb"
  }, {
    "GridRef": "SD",
    "x": 3,
    "y": 4,
    "proj": "gb"
  }, {
    "GridRef": "NY",
    "x": 3,
    "y": 5,
    "proj": "gb"
  }, {
    "GridRef": "NT",
    "x": 3,
    "y": 6,
    "proj": "gb"
  }, {
    "GridRef": "NO",
    "x": 3,
    "y": 7,
    "proj": "gb"
  }, {
    "GridRef": "NJ",
    "x": 3,
    "y": 8,
    "proj": "gb"
  }, {
    "GridRef": "ND",
    "x": 3,
    "y": 9,
    "proj": "gb"
  }, {
    "GridRef": "HY",
    "x": 3,
    "y": 10,
    "proj": "gb"
  }, {
    "GridRef": "HT",
    "x": 3,
    "y": 11,
    "proj": "gb"
  }, {
    "GridRef": "SZ",
    "x": 4,
    "y": 0,
    "proj": "gb"
  }, {
    "GridRef": "SU",
    "x": 4,
    "y": 1,
    "proj": "gb"
  }, {
    "GridRef": "SP",
    "x": 4,
    "y": 2,
    "proj": "gb"
  }, {
    "GridRef": "SK",
    "x": 4,
    "y": 3,
    "proj": "gb"
  }, {
    "GridRef": "SE",
    "x": 4,
    "y": 4,
    "proj": "gb"
  }, {
    "GridRef": "NZ",
    "x": 4,
    "y": 5,
    "proj": "gb"
  }, {
    "GridRef": "NU",
    "x": 4,
    "y": 6,
    "proj": "gb"
  }, {
    "GridRef": "NK",
    "x": 4,
    "y": 8,
    "proj": "gb"
  }, {
    "GridRef": "HZ",
    "x": 4,
    "y": 10,
    "proj": "gb"
  }, {
    "GridRef": "HU",
    "x": 4,
    "y": 11,
    "proj": "gb"
  }, {
    "GridRef": "HP",
    "x": 4,
    "y": 12,
    "proj": "gb"
  }, {
    "GridRef": "TV",
    "x": 5,
    "y": 0,
    "proj": "gb"
  }, {
    "GridRef": "TQ",
    "x": 5,
    "y": 1,
    "proj": "gb"
  }, {
    "GridRef": "TL",
    "x": 5,
    "y": 2,
    "proj": "gb"
  }, {
    "GridRef": "TF",
    "x": 5,
    "y": 3,
    "proj": "gb"
  }, {
    "GridRef": "TA",
    "x": 5,
    "y": 4,
    "proj": "gb"
  }, {
    "GridRef": "OV",
    "x": 5,
    "y": 5,
    "proj": "gb"
  }, {
    "GridRef": "TR",
    "x": 6,
    "y": 1,
    "proj": "gb"
  }, {
    "GridRef": "TM",
    "x": 6,
    "y": 2,
    "proj": "gb"
  }, {
    "GridRef": "TG",
    "x": 6,
    "y": 3,
    "proj": "gb"
  }, {
    "GridRef": "V",
    "x": 0,
    "y": 0,
    "proj": "ir"
  }, {
    "GridRef": "Q",
    "x": 0,
    "y": 1,
    "proj": "ir"
  }, {
    "GridRef": "L",
    "x": 0,
    "y": 2,
    "proj": "ir"
  }, {
    "GridRef": "F",
    "x": 0,
    "y": 3,
    "proj": "ir"
  }, {
    "GridRef": "A",
    "x": 0,
    "y": 4,
    "proj": "ir"
  }, {
    "GridRef": "W",
    "x": 1,
    "y": 0,
    "proj": "ir"
  }, {
    "GridRef": "R",
    "x": 1,
    "y": 1,
    "proj": "ir"
  }, {
    "GridRef": "M",
    "x": 1,
    "y": 2,
    "proj": "ir"
  }, {
    "GridRef": "G",
    "x": 1,
    "y": 3,
    "proj": "ir"
  }, {
    "GridRef": "B",
    "x": 1,
    "y": 4,
    "proj": "ir"
  }, {
    "GridRef": "X",
    "x": 2,
    "y": 0,
    "proj": "ir"
  }, {
    "GridRef": "S",
    "x": 2,
    "y": 1,
    "proj": "ir"
  }, {
    "GridRef": "N",
    "x": 2,
    "y": 2,
    "proj": "ir"
  }, {
    "GridRef": "H",
    "x": 2,
    "y": 3,
    "proj": "ir"
  }, {
    "GridRef": "C",
    "x": 2,
    "y": 4,
    "proj": "ir"
  }, {
    "GridRef": "Y",
    "x": 3,
    "y": 0,
    "proj": "ir"
  }, {
    "GridRef": "T",
    "x": 3,
    "y": 1,
    "proj": "ir"
  }, {
    "GridRef": "O",
    "x": 3,
    "y": 2,
    "proj": "ir"
  }, {
    "GridRef": "J",
    "x": 3,
    "y": 3,
    "proj": "ir"
  }, {
    "GridRef": "D",
    "x": 3,
    "y": 4,
    "proj": "ir"
  }, {
    "GridRef": "Z",
    "x": 4,
    "y": 0,
    "proj": "ir"
  }, {
    "GridRef": "U",
    "x": 4,
    "y": 1,
    "proj": "ir"
  }, {
    "GridRef": "P",
    "x": 4,
    "y": 2,
    "proj": "ir"
  }, {
    "GridRef": "K",
    "x": 4,
    "y": 3,
    "proj": "ir"
  }, {
    "GridRef": "E",
    "x": 4,
    "y": 4,
    "proj": "ir"
  }, {
    "GridRef": "WV",
    "x": 5,
    "y": 54,
    "proj": "ci"
  }, {
    "GridRef": "WA",
    "x": 5,
    "y": 55,
    "proj": "ci"
  }];
  /** @constant
    * @description The default export from this module is an object with a property
    * for every 100 km square reference for Britain (Brtish National Grid),
    * Ireland (Irish National Grid) and the Channel Islands (abbreviated UTM 30N).
    * Each grid reference references an object that has properties x, y and proj.
    * The x and y coordinates represent the centroid of the 100 km square in the
    * coordinate reference system corresponding to the aforementioned areas, respectively
    * epsg:27700, epsg:29903 and epsg:32630. Another property, proj, indicates the region/CRS
    * with two letter codes, respectively gb, ir and ci.
    * <p>An example of the object referenced through the property 'SO' is shown below:</p>
    * <pre>
    * {
    *   "x": 3,
    *   "y": 2,
    *   "proj": "gb"
    * }
    * </pre>
    * @type {object}
  */

  var km100s = a100km.reduce(function (acc, km100) {
    acc[km100.GridRef] = {
      x: km100.x,
      y: km100.y,
      proj: km100.proj
    };
    return acc;
  }, {});
  /** @module src/checkGr */

  function invalidGridRef(gr) {
    throw "The value '".concat(gr, "' is not recognised as a valid grid reference.");
  }
  /**
   * Given a grid reference (British National Grid, Irish Grid or UTM zone 30N shorthand),
   * check that ths is a valid GR. If it is, return an object which includes the 
   * GR precision in metres, the prefix and the two-letter projection code.
   * If an invalid grid reference is supplied throws an error.
   * @param {string} gr - the grid reference.
   * @returns {object} Object of the form {precision: n, prefix: 'prefix', projection: 'code'}.
   */


  function checkGr(gr) {
    var r100km = RegExp('^[a-zA-Z]{1,2}$');
    var rHectad = RegExp('^[a-zA-Z]{1,2}[0-9]{2}$');
    var rQuandrant = RegExp('^[a-zA-Z]{1,2}[0-9]{2}[SsNn][WwEe]$');
    var rTetrad = RegExp('^[a-zA-Z]{1,2}[0-9]{2}[a-np-zA-NP-Z]$');
    var rMonad = RegExp('^[a-zA-Z]{1,2}[0-9]{4}$');
    var r6fig = RegExp('^[a-zA-Z]{1,2}[0-9]{6}$');
    var r8fig = RegExp('^[a-zA-Z]{1,2}[0-9]{8}$');
    var r10fig = RegExp('^[a-zA-Z]{1,2}[0-9]{10}$');
    var match = gr.match(/^[A-Za-z]+/);
    if (!match) invalidGridRef(gr);
    var prefix = match[0].toUpperCase();
    var km100 = km100s[prefix];
    if (!km100) invalidGridRef(gr);
    var ret = {
      precision: null,
      prefix: prefix,
      projection: km100.proj
    };

    if (r100km.test(gr)) {
      // The GR is a 100 km square reference
      ret.precision = 100000;
    } else if (rHectad.test(gr)) {
      // The GR is a hectad
      ret.precision = 10000;
    } else if (rQuandrant.test(gr)) {
      // The GR is a quandrant
      ret.precision = 5000;
    } else if (rTetrad.test(gr)) {
      // The GR is a tetrad
      ret.precision = 2000;
    } else if (rMonad.test(gr)) {
      // The GR is a monad
      ret.precision = 1000;
    } else if (r6fig.test(gr)) {
      // The GR is a 6 figure GR
      ret.precision = 100;
    } else if (r8fig.test(gr)) {
      // The GR is a 8 figure GR
      ret.precision = 10;
    } else if (r10fig.test(gr)) {
      // The GR is a 10 figure GR
      ret.precision = 1;
    } else {
      invalidGridRef(gr);
    }

    return ret;
  }
  /** @module src/projections */

  /** @constant
    * @description This object describes the coordinate reference systems used in this project corresponding
    * to the British National Grid, Irish Grid, UTM zone 30N (used for the Channel Islands)  and WGS 84. The object contains
    * four properties, each named with the two letter code used throughout this package to represent one of the
    * three systems: gb, ir, ci and wg. Each of these properties provides access to an object defining the name,
    * epsg code and proj4 string for the CRS.
    * @type {array}
  */


  var projections = {
    gb: {
      name: 'OSGB 1936 / British National Grid',
      epsg: '27700',
      proj4: '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs'
    },
    ir: {
      name: 'TM75 / Irish Grid',
      epsg: '29903',
      proj4: '+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1.000035 +x_0=200000 +y_0=250000 +ellps=mod_airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +units=m +no_defs'
    },
    ci: {
      name: 'WGS 84 / UTM zone 30N',
      epsg: '32630',
      proj4: '+proj=utm +zone=30 +datum=WGS84 +units=m +no_defs'
    },
    wg: {
      name: 'WGS 84',
      epsg: '4326',
      proj4: '+proj=longlat +datum=WGS84 +no_defs'
    }
  };
  /** @module src/quadrants */

  /** @constant
    * @description This object specifies the x, y offsets associated with suffixes for quandrant grid refs.
    * @type {Object}
  */

  var qOffsets = {
    sw: {
      x: 0,
      y: 0
    },
    se: {
      x: 5000,
      y: 0
    },
    nw: {
      x: 0,
      y: 5000
    },
    ne: {
      x: 5000,
      y: 5000
    }
  };
  /** @module src/tetrads */

  /** @constant
    * @description This object specifies the x, y offsets associated with suffixes for tetrad grid refs.
    * @type {Object}
  */

  var tOffsets = {
    a: {
      x: 0,
      y: 0
    },
    b: {
      x: 0,
      y: 2000
    },
    c: {
      x: 0,
      y: 4000
    },
    d: {
      x: 0,
      y: 6000
    },
    e: {
      x: 0,
      y: 8000
    },
    f: {
      x: 2000,
      y: 0
    },
    g: {
      x: 2000,
      y: 2000
    },
    h: {
      x: 2000,
      y: 4000
    },
    i: {
      x: 2000,
      y: 6000
    },
    j: {
      x: 2000,
      y: 8000
    },
    k: {
      x: 4000,
      y: 0
    },
    l: {
      x: 4000,
      y: 2000
    },
    m: {
      x: 4000,
      y: 4000
    },
    n: {
      x: 4000,
      y: 6000
    },
    p: {
      x: 4000,
      y: 8000
    },
    q: {
      x: 6000,
      y: 0
    },
    r: {
      x: 6000,
      y: 2000
    },
    s: {
      x: 6000,
      y: 4000
    },
    t: {
      x: 6000,
      y: 6000
    },
    u: {
      x: 6000,
      y: 8000
    },
    v: {
      x: 8000,
      y: 0
    },
    w: {
      x: 8000,
      y: 2000
    },
    x: {
      x: 8000,
      y: 4000
    },
    y: {
      x: 8000,
      y: 6000
    },
    z: {
      x: 8000,
      y: 8000
    }
  };
  /** @module src/getCentroid */

  /**
   * Given a grid reference (British National Grid, Irish Grid or UTM zone 30N shorthand),
   * and a two-letter code defining the requested output projection, this function
   * returns the centroid of the grid reference.
   * @param {string} gr - the grid reference
   * @param {string} toProjection - two letter code specifying the required output CRS.
   * @returns {object} - of the form {centroid: [x, y], proj: 'code'}; x and y are 
   * coordinates in CRS specified by toProjection. The proj code indicates the source projection.
   */

  function getCentroid(gr, toProjection) {
    var x, y, outCoords, suffix;
    var grType = checkGr(gr);
    var prefix = grType.prefix;
    var km100 = km100s[prefix];

    switch (grType.precision) {
      case 100000:
        x = km100.x * 100000 + 50000;
        y = km100.y * 100000 + 50000;
        break;

      case 10000:
        x = km100.x * 100000 + Number(gr.substr(prefix.length, 1)) * 10000 + 5000;
        y = km100.y * 100000 + Number(gr.substr(prefix.length + 1, 1)) * 10000 + 5000;
        break;

      case 5000:
        suffix = gr.substr(prefix.length + 2, 2).toLowerCase();
        x = km100.x * 100000 + Number(gr.substr(prefix.length, 1)) * 10000 + qOffsets[suffix].x + 2500;
        y = km100.y * 100000 + Number(gr.substr(prefix.length + 1, 1)) * 10000 + qOffsets[suffix].y + 2500;
        break;

      case 2000:
        suffix = gr.substr(prefix.length + 2, 1).toLowerCase();
        x = km100.x * 100000 + Number(gr.substr(prefix.length, 1)) * 10000 + tOffsets[suffix].x + 1000;
        y = km100.y * 100000 + Number(gr.substr(prefix.length + 1, 1)) * 10000 + tOffsets[suffix].y + 1000;
        break;

      case 1000:
        x = km100.x * 100000 + Number(gr.substr(prefix.length, 2)) * 1000 + 500;
        y = km100.y * 100000 + Number(gr.substr(prefix.length + 2, 2)) * 1000 + 500;
        break;

      case 100:
        x = km100.x * 100000 + Number(gr.substr(prefix.length, 3)) * 100 + 50;
        y = km100.y * 100000 + Number(gr.substr(prefix.length + 3, 3)) * 100 + 50;
        break;

      case 10:
        x = km100.x * 100000 + Number(gr.substr(prefix.length, 4)) * 10 + 5;
        y = km100.y * 100000 + Number(gr.substr(prefix.length + 4, 4)) * 10 + 5;
        break;

      default:
        x = km100.x * 100000 + Number(gr.substr(prefix.length, 5)) + 0.5;
        y = km100.y * 100000 + Number(gr.substr(prefix.length + 5, 5)) + 0.5;
    } // If the required output projection does not match the projection of the input GR
    // then use proj4 to reproject


    if (toProjection !== km100.proj) {
      outCoords = proj4(projections[km100.proj].proj4, projections[toProjection].proj4, [x, y]);
    } else {
      outCoords = [x, y];
    }

    return {
      centroid: outCoords,
      proj: km100.proj
    };
  }
  /** @module src/pntToArea */


  var inside = pointInPolygon;
  var polyGb = [[-5.079346, 54.356181], [-5.218856, 54.352538], [-5.238015, 54.577735], [-5.594707, 55.067578], [-5.85957, 55.233056], [-6.1989, 55.442175], [-6.754907, 55.520643], [-6.826016, 56.098271], [-8.4242, 56.025199], [-8.577402, 56.917818], [-8.739734, 57.810026], [-8.911963, 58.7018], [-7.193942, 58.782764], [-7.332053, 59.676983], [-5.560279, 59.737099], [-3.782533, 59.77326], [-3.831945, 60.670683], [-2.001839, 60.683214], [-2.0019, 61.58096], [-0.119146, 61.568018], [-0.17173, 60.67074], [-0.22103, 59.773315], [-0.267328, 58.875744], [-2.00173, 58.887355], [-2.00168, 57.989238], [-0.310874, 57.978026], [-0.351892, 57.080161], [-2.001633, 57.090993], [-2.001588, 56.192619], [-0.390579, 56.182148], [-0.427115, 55.283988], [1.145328, 55.253591], [1.076342, 54.356271], [1.011037, 53.458761], [2.513016, 53.411393], [2.420466, 52.515203], [2.332666, 51.618767], [2.249301, 50.722093], [0.834724, 50.76511], [0.781771, 49.866861], [-0.609132, 49.891897], [-2.001337, 49.900236], [-3.39354, 49.891859], [-4.784439, 49.866784], [-6.172738, 49.825069], [-7.55716, 49.766807], [-7.662447, 50.661841], [-6.252021, 50.721974], [-6.33545, 51.618645], [-5.822792, 52.024604], [-5.051366, 52.558456], [-5.051366, 52.558457], [-4.952011, 52.560978], [-5.013966, 53.458674], [-5.079346, 54.356181]];
  var polyIr = [[-10.863443, 51.218565], [-10.920638, 52.116175], [-10.980909, 53.013601], [-11.044479, 53.91084], [-11.111595, 54.80789], [-11.182531, 55.704747], [-9.592679, 55.735662], [-8.000759, 55.74598], [-6.781597, 55.739941], [-6.754907, 55.520643], [-6.419264, 55.473617], [-6.1989, 55.442175], [-5.85957, 55.233056], [-5.594707, 55.067578], [-5.413363, 54.820209], [-5.238015, 54.577735], [-5.218856, 54.352538], [-5.079346, 54.356181], [-5.046624, 53.9131], [-5.013966, 53.458674], [-5.001631, 53.283731], [-5.020559, 53.013619], [-5.051336, 52.558457], [-5.051366, 52.558457], [-5.051366, 52.558456], [-5.673366, 52.129388], [-5.822792, 52.024604], [-6.33545, 51.618645], [-6.299809, 51.241244], [-6.568641, 51.244838], [-8.000721, 51.253594], [-9.432801, 51.24483], [-10.863443, 51.218565]];
  var polyCi = [[-1.614831, 49.644257], [-1.639721, 48.744984], [-3, 48.753013], [-3, 49.652543], [-3, 49.895922], [-2.001337, 49.900236], [-1.607534, 49.899573], [-1.614831, 49.644257]];
  /**
   * Given a WGS 84 lon, lat pair, return the two letter code corresponding to the area
   * that the point is in. The three polygons describe the regions covered by the 100 km
   * squares for the British, Irish and Channel Island coordinate systems. These areas are
   * exclusive. Where they overlap, e.g. British and Irish, they have been divided by a line
   * through the Irish see roughly midway between the land masses. For the Channel Islands
   * and Britain, the CI UTM 30 grid is truncated where it overlaps the British grid. The
   * function returns the two-letter code corresponding to the area: gb, ir or ci.
   * It returns null if the point doesn't fall within any of these areas.
   * @param {number} lon - Longitude.
   * @param {number} lat - Latitude.
   * @returns {string} - Two-letter code corresponding to the area, or null.
   */

  function pntToArea(lon, lat) {
    if (inside([lon, lat], polyGb)) return 'gb';
    if (inside([lon, lat], polyIr)) return 'ir';
    if (inside([lon, lat], polyCi)) return 'ci';
    return null;
  }
  /** @module src/getGrFromCoords */

  /**
   * Given a coordinate pair (British National Grid, Irish Grid, UTM zone 30N shorthand or WGS84),
   * a two-letter code defining the projection of the passed in coordinates,
   * a two-letter code defining the required output projection, and an array of numbers
   * indicating the required output precisions, returns an object with the grid references
   * at the requested precisions in the requested projection. If the requested projection is
   * an empty string, automatic selection will be used based on location of input coords.
   * @param {number} x - the x coordinate (longitude if in WGS 84).
   * @param {number} y - the y coordinate (latitude if in WGS 84).
   * @param {string} fromProjection - two letter code for projection of the passed in coords.
   * @param {string} toProjection - two letter code specifying the required output projection - leave empty for automatic selection.
   * @param {array<number>} precisions - array of numbers corresponding to the precisions of the requested grid references.
   * @returns {object} - of the form {p10000: 'gr-hectad', p100: 'gr-6fig'} etc, with a property for each of the requested grid reference precisions.
   */


  function getGrFromCoords(x, y, fromProjection, toProjection, precisions) {
    // Set the output projection automatically if not aleady set
    if (!toProjection) {
      if (fromProjection === 'wg') {
        toProjection = pntToArea(x, y);
      } else {
        var lonlat = proj4(projections[fromProjection].proj4, projections['wg'].proj4, [x, y]);
        toProjection = pntToArea(lonlat[0], lonlat[1]);
      }
    }

    if (!toProjection) {
      var _grs = {};
      precisions.forEach(function (p) {
        _grs["p".concat(p)] = null;
      });
      return _grs;
    } // Convert input coordinates if the input projection does not match requested output projection


    if (fromProjection !== toProjection) {
      var outCoords = proj4(projections[fromProjection].proj4, projections[toProjection].proj4, [x, y]);
      x = outCoords[0];
      y = outCoords[1];
    }

    var km100;

    for (var i = 0; i < a100km.length; i++) {
      if (a100km[i].proj === toProjection && x >= a100km[i].x * 100000 && x < (a100km[i].x + 1) * 100000 && y >= a100km[i].y * 100000 && y < (a100km[i].y + 1) * 100000) {
        km100 = a100km[i];
        break;
      }
    }

    if (!km100) {
      // The output coordinates do not fall within the range of 100 km grid squares defined for the output projection.
      // Return an empty array.
      return {
        p100000: null,
        p10000: null,
        p5000: null,
        p2000: null,
        p1000: null,
        p100: null,
        p10: null,
        p1: null
      };
    }

    var grs = {};
    precisions.forEach(function (p) {
      var gr = km100.GridRef;

      if (p < 100000) {
        var divisor;

        if (p === 5000 || p === 2000) {
          divisor = 10000;
        } else {
          divisor = p;
        }

        var pad = {
          10000: 1,
          1000: 2,
          100: 3,
          10: 4,
          1: 5
        };
        var dx = Math.floor((x - km100.x * 100000) / divisor);
        var dy = Math.floor((y - km100.y * 100000) / divisor);
        var sx = String(dx).padStart(pad[divisor], '0');
        var sy = String(dy).padStart(pad[divisor], '0');
        gr = "".concat(gr).concat(sx).concat(sy);

        if (p === 5000 || p === 2000) {
          var rx = (x - km100.x * 100000) % divisor;
          var ry = (y - km100.y * 100000) % divisor;

          if (p === 5000) {
            for (var suffix in qOffsets) {
              if (rx >= qOffsets[suffix].x && rx < qOffsets[suffix].x + 5000 && ry >= qOffsets[suffix].y && ry < qOffsets[suffix].y + 5000) {
                gr = "".concat(gr).concat(suffix.toUpperCase());
                break;
              }
            }
          } else {
            for (var _suffix in tOffsets) {
              if (rx >= tOffsets[_suffix].x && rx < tOffsets[_suffix].x + 2000 && ry >= tOffsets[_suffix].y && ry < tOffsets[_suffix].y + 2000) {
                gr = "".concat(gr).concat(_suffix.toUpperCase());
                break;
              }
            }
          }
        }
      }

      grs["p".concat(p)] = gr;
    });
    return grs;
  }
  /** @module src/getLowerResGrs */

  /**
   * Given a grid reference (British National Grid, Irish Grid, UTM zone 30N shorthand),
   * return an object with a corresponsing GR for each precision. For all precisions higher
   * than the precision of the passed in GR, the return GR is set to null. In the special
   * returned Quadrant (5 km) grid references are in an array to allow for the case where
   * the input grid reference is a tetrad and overlaps more than one quadrant.
   * @param {string} gr - Grid reference.
   * @returns {object} - of the form {p100000: 'gr-100km', p10000: 'gr-hectad', p5000: ['gr_quad1', ...], p2000: 'gr-tetrad', ...}, with a property for each precisions.
   */


  function getLowerResGrs(gr) {
    var grType = checkGr(gr);
    var ret = {
      p100000: grType.prefix,
      p10000: null,
      p5000: grType.precision <= 5000 ? [] : null,
      p2000: null,
      p1000: null,
      p100: null,
      p10: null,
      p1: null
    }; // Set the passed in GR in the return value

    if (grType.precision === 5000) {
      ret.p5000.push(gr);
    } else {
      ret["p".concat(grType.precision)] = gr;
    }

    var c = getCentroid(gr, grType.projection).centroid;
    var precisions = [10000, 5000, 2000, 1000, 100, 10, 1].filter(function (p) {
      return p > grType.precision;
    });
    var grs = getGrFromCoords(c[0], c[1], grType.projection, grType.projection, precisions);
    precisions.forEach(function (p) {
      if (p === 5000) {
        if (grType.precision === 2000) {
          var hectad = gr.substring(0, gr.length - 1);

          if ('ABCFGHKLM'.indexOf(gr.substr(-1)) > -1) {
            ret.p5000.push("".concat(hectad, "SW"));
          }

          if ('KLMQRSVWX'.indexOf(gr.substr(-1)) > -1) {
            ret.p5000.push("".concat(hectad, "SE"));
          }

          if ('CDEHIJMNP'.indexOf(gr.substr(-1)) > -1) {
            ret.p5000.push("".concat(hectad, "NW"));
          }

          if ('MNPSTUXYZ'.indexOf(gr.substr(-1)) > -1) {
            ret.p5000.push("".concat(hectad, "NE"));
          }
        } else {
          ret.p5000.push(grs.p5000);
        }
      } else {
        ret["p".concat(p)] = grs["p".concat(p)];
      }
    });
    return ret;
  }

  // mapping tvk to desgination.

  d3__namespace.csv('./dist/designations.csv', function (d) {
    if (d['Reporting category'] === 'Nationally Scarce, Nationally Rare and Other Species') {
      return {
        tvk: d['Recommended taxon version'],
        designation: d['Designation']
      };
    }
  }).then(function (data) {
    window.taxonDesignations = data.reduce(function (a, d) {
      a[d.tvk] = d.designation;
      return a;
    }, {});
    d3__namespace.select('#jnccLoading').text('loaded').style('color', 'blue');
  })["catch"](function (error) {
    // handle error  
    console.log(error);
    d3__namespace.select('#jnccLoading').text('failed to load').style('color', 'red');
  }); // Standard interface functions

  function gui$6(sel) {
    // Dataset load and field mapping
    var d1 = d3__namespace.select(sel).append('div').style('overflow', 'auto');

    function splitDiv(i) {
      var d2 = d1.append('div');
      d2.classed('split2', true);
      d2.append('h3').text("Local resource - dataset ".concat(i));
      var label = d2.append('label');
      label.attr('for', "csvFile".concat(i));
      label.text("Browse for dataset ".concat(i, " CSV"));
      var input = d2.append('input');
      input.attr('type', 'file');
      input.attr('id', "csvFile".concat(i));
      input.attr('name', "csvFile".concat(i));
      input.attr('accept', '.csv');
      input.attr('onChange', "brcdseval.fileOpened(event, ".concat(i, ")"));
      input.style('margin-left', '0.5em');
      d2.append('div').attr('id', "csvLoading".concat(i)).style('margin-top', '0.5em').text('No file loaded');
      var d2a = d2.append('div').attr('id', "field-selects-".concat(i));
      configFields.forEach(function (f) {
        var d3 = d2a.append('div');
        d3.classed('field-input', true);
        var label = d3.append('label');
        label.attr('for', "".concat(f.id).concat(i));
        label.text("".concat(f.caption, ":"));
        var select = d3.append('select');
        select.attr('id', "".concat(f.id).concat(i));
        var d4 = d3.append('div');
        d4.classed('input-info', true);
        d4.attr('id', "".concat(f.id, "Info").concat(i));
      });
      var d5 = d2.append('div');
      d5.classed('config-buttons', true);
      var button1 = d5.append('button');
      button1.attr('id', "setFieldConfig".concat(i));
      button1.attr('onClick', "brcdseval.setFieldConfig(".concat(i, ")"));
      button1.attr('disabled', 'true');
      button1.text('Set config');
      var button2 = d5.append('button');
      button2.attr('id', "clearFieldConfig".concat(i));
      button2.attr('onClick', "brcdseval.clearFieldConfig(".concat(i, ")"));
      button2.attr('disabled', 'true');
      button2.text('Clear config');
      var d6 = d2.append('div');
      d6.attr('id', "configStatus".concat(i));
      d6.text('No config set');
    }

    splitDiv(1);
    splitDiv(2); // Background downloading of resources

    d3__namespace.select(sel).append('h3').text('Packaged resources');
    d3__namespace.select(sel).append('p').text("\n    These resources are packaged with the tool, you can carry on \n    specifying your local CSV datasets whilst these are downloading.\n  ");
    d3__namespace.select(sel).append('p').html('JNCC taxon designations (2020): <span id="jnccLoading">downloading...</span>');
  }
  function tabSelected$6() {}
  function dataCleared$6(i) {
    d3__namespace.select("#csvLoading".concat(i)).html('No file loaded');
    d3__namespace.select("#csvLoading".concat(i)).style('color', 'red');
    setFieldDropdowns(i);
  }
  function fieldConfigCleared$6(i) {
    d3__namespace.selectAll("#field-selects-".concat(i, " select")).property('disabled', false);
    d3__namespace.select("#setFieldConfig".concat(i)).property('disabled', false);
    d3__namespace.select("#clearFieldConfig".concat(i)).property('disabled', true);
    d3__namespace.select("#configStatus".concat(i)).html('No config set');
    d3__namespace.select("#configStatus".concat(i)).style('color', 'red');
    configFields.forEach(function (cf) {
      return d3__namespace.select("#".concat(cf.id, "Info").concat(i)).text('');
    });
  } // Exported from the library to use from html interface

  function fileOpened(event, i) {
    if (event.target.files[0] !== undefined) {
      d3__namespace.select("#csvLoading".concat(i)).html('Loading file...');
      d3__namespace.select("#csvLoading".concat(i)).style('color', 'orange');
      var reader = new FileReader();
      reader.addEventListener('load', function (event) {
        d3__namespace.csv(event.target.result).then(function (json) {
          //console.log(json)
          d3__namespace.select("#csvLoading".concat(i)).html("File loaded - ".concat(json.length, " records"));
          d3__namespace.select("#csvLoading".concat(i)).style('color', 'blue');
          data[i - 1].json = json;
          setFieldDropdowns(i);
          d3__namespace.select("#setFieldConfig".concat(i)).property('disabled', false);
        });
      });
      reader.readAsDataURL(event.target.files[0]);
      data[i - 1].name = event.target.files[0].name;
    } else {
      clearDataset(i);
    }

    clearFieldConfig(i);
    d3__namespace.select("#setFieldConfig".concat(i)).property('disabled', true);
  }
  function setFieldConfig(i) {
    var setValue = function setValue(key) {
      var value = d3__namespace.select("#".concat(key).concat(i)).property('value');
      data[i - 1].fields[key] = value; // Also store values in local storage so that they can be conveniently
      // set in future for similar dataset

      localStorage.setItem("".concat(key).concat(i), value);
    };

    data[i - 1].fields = {};
    configFields.forEach(function (f) {
      return setValue(f.id);
    });
    d3__namespace.selectAll("#field-selects-".concat(i, " select")).property('disabled', true);
    d3__namespace.select("#setFieldConfig".concat(i)).property('disabled', true);
    d3__namespace.select("#clearFieldConfig".concat(i)).property('disabled', false);
    d3__namespace.select("#configStatus".concat(i)).html('Config is set');
    d3__namespace.select("#configStatus".concat(i)).style('color', 'blue'); // Dataset stats for the configured fields

    configFields.forEach(function (cf) {
      var fcsv = data[i - 1].fields[cf.id];

      if (fcsv) {
        var unique = _toConsumableArray(new Set(data[i - 1].json.filter(function (r) {
          return r[fcsv] !== '';
        }).map(function (r) {
          return r[fcsv];
        })));

        var missing = data[i - 1].json.filter(function (r) {
          return r[fcsv] === '';
        });
        var invalid;

        if (cf.id === 'gr') {
          invalid = data[i - 1].json.filter(function (r) {
            if (!r[fcsv]) return false; // Missing values not counted as invalid

            try {
              checkGr(r[fcsv]);
            } catch (err) {
              return true;
            }

            return false;
          });
        } else if (cf.id === 'date') {
          invalid = data[i - 1].json.filter(function (r) {
            if (!r[fcsv]) return false; // Missing values not counted as invalid

            return !dateValid(r[fcsv]);
          });
        }

        if (cf.id === 'date' || cf.id === 'gr') {
          d3__namespace.select("#".concat(cf.id, "Info").concat(i)).text("Invalid: ".concat(invalid.length, ", Missing: ").concat(missing.length));
        } else {
          d3__namespace.select("#".concat(cf.id, "Info").concat(i)).text("Unique: ".concat(unique.length, ", Missing: ").concat(missing.length));
        }
      } else {
        d3__namespace.select("#".concat(cf.id, "Info").concat(i)).text('');
      }
    });
  }
  function clearFieldConfig(i) {
    data[i - 1].fields = null;
    tabs.forEach(function (t) {
      t.fns.fieldConfigCleared(i);
    });
  } // Helper functions

  function clearDataset(i) {
    data[i - 1].name = null;
    data[i - 1].json = null;
    data[i - 1].fields = null;
    tabs.forEach(function (t) {
      t.fns.dataCleared(i);
    });
  }

  function setFieldDropdowns(i) {
    // Clear existing
    configFields.forEach(function (cf) {
      return d3__namespace.select("#".concat(cf.id).concat(i)).html('');
    });
    configFields.forEach(function (cf) {
      return d3__namespace.select("#".concat(cf.id, "Info").concat(i)).text('');
    });

    if (data[i - 1].json) {
      var fields = [''].concat(_toConsumableArray(Object.keys(data[i - 1].json[0])));
      fields.forEach(function (f) {
        configFields.forEach(function (cf) {
          var opt = d3__namespace.select("#".concat(cf.id).concat(i)).append('option');
          opt.attr('value', f);
          opt.text(f);
        });
      });
      configFields.forEach(function (cf) {
        d3__namespace.select("#".concat(cf.id).concat(i)).property('value', localStorage.getItem("".concat(cf.id).concat(i)));
      });
    } else {
      configFields.forEach(function (cf) {
        return d3__namespace.select("#".concat(cf.id).concat(i)).html('');
      });
    }
  }

  var load = /*#__PURE__*/Object.freeze({
    __proto__: null,
    gui: gui$6,
    tabSelected: tabSelected$6,
    dataCleared: dataCleared$6,
    fieldConfigCleared: fieldConfigCleared$6,
    fileOpened: fileOpened,
    setFieldConfig: setFieldConfig,
    clearFieldConfig: clearFieldConfig
  });

  var _typeof=typeof Symbol==="function"&&_typeof$1(Symbol.iterator)==="symbol"?function(obj){return _typeof$1(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof$1(obj);};if(!Array.prototype.findIndex){Object.defineProperty(Array.prototype,'findIndex',{value:function value(predicate){// 1. Let O be ? ToObject(this value).
  if(this==null){throw new TypeError('"this" is null or not defined');}var o=Object(this);// 2. Let len be ? ToLength(? Get(O, "length")).
  var len=o.length>>>0;// 3. If IsCallable(predicate) is false, throw a TypeError exception.
  if(typeof predicate!=='function'){throw new TypeError('predicate must be a function');}// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
  var thisArg=arguments[1];// 5. Let k be 0.
  var k=0;// 6. Repeat, while k < len
  while(k<len){// a. Let Pk be ! ToString(k).
  // b. Let kValue be ? Get(O, Pk).
  // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
  // d. If testResult is true, return k.
  var kValue=o[k];if(predicate.call(thisArg,kValue,k,o)){return k;}// e. Increase k by 1.
  k++;}// 7. Return -1.
  return -1;}});}// https://tc39.github.io/ecma262/#sec-array.prototype.find
  if(!Array.prototype.find){Object.defineProperty(Array.prototype,'find',{value:function value(predicate){// 1. Let O be ? ToObject(this value).
  if(this==null){throw new TypeError('"this" is null or not defined');}var o=Object(this);// 2. Let len be ? ToLength(? Get(O, "length")).
  var len=o.length>>>0;// 3. If IsCallable(predicate) is false, throw a TypeError exception.
  if(typeof predicate!=='function'){throw new TypeError('predicate must be a function');}// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
  var thisArg=arguments[1];// 5. Let k be 0.
  var k=0;// 6. Repeat, while k < len
  while(k<len){// a. Let Pk be ! ToString(k).
  // b. Let kValue be ? Get(O, Pk).
  // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
  // d. If testResult is true, return kValue.
  var kValue=o[k];if(predicate.call(thisArg,kValue,k,o)){return kValue;}// e. Increase k by 1.
  k++;}// 7. Return undefined.
  return undefined;}});}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill
  if(!String.prototype.includes){String.prototype.includes=function(search,start){if(search instanceof RegExp){throw TypeError('first argument must not be a RegExp');}if(start===undefined){start=0;}return this.indexOf(search,start)!==-1;};}// https://tc39.github.io/ecma262/#sec-array.prototype.includes
  if(!Array.prototype.includes){Object.defineProperty(Array.prototype,'includes',{value:function value(searchElement,fromIndex){if(this==null){throw new TypeError('"this" is null or not defined');}// 1. Let O be ? ToObject(this value).
  var o=Object(this);// 2. Let len be ? ToLength(? Get(O, "length")).
  var len=o.length>>>0;// 3. If len is 0, return false.
  if(len===0){return false;}// 4. Let n be ? ToInteger(fromIndex).
  //    (If fromIndex is undefined, this step produces the value 0.)
  var n=fromIndex|0;// 5. If n ≥ 0, then
  //  a. Let k be n.
  // 6. Else n < 0,
  //  a. Let k be len + n.
  //  b. If k < 0, let k be 0.
  var k=Math.max(n>=0?n:len-Math.abs(n),0);function sameValueZero(x,y){return x===y||typeof x==='number'&&typeof y==='number'&&isNaN(x)&&isNaN(y);}// 7. Repeat, while k < len
  while(k<len){// a. Let elementK be the result of ? Get(O, ! ToString(k)).
  // b. If SameValueZero(searchElement, elementK) is true, return true.
  if(sameValueZero(o[k],searchElement)){return true;}// c. Increase k by 1.
  k++;}// 8. Return false
  return false;}});}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
  if(typeof Object.assign!=='function'){// Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object,"assign",{value:function assign(target,varArgs){// .length of function is 2
  if(target===null||target===undefined){throw new TypeError('Cannot convert undefined or null to object');}var to=Object(target);for(var index=1;index<arguments.length;index++){var nextSource=arguments[index];if(nextSource!==null&&nextSource!==undefined){for(var nextKey in nextSource){// Avoid bugs when hasOwnProperty is shadowed
  if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){to[nextKey]=nextSource[nextKey];}}}}return to;},writable:true,configurable:true});}var ColumnManager=function ColumnManager(table){this.table=table;//hold parent table
  this.blockHozScrollEvent=false;this.headersElement=this.createHeadersElement();this.element=this.createHeaderElement();//containing element
  this.rowManager=null;//hold row manager object
  this.columns=[];// column definition object
  this.columnsByIndex=[];//columns by index
  this.columnsByField={};//columns by field
  this.scrollLeft=0;this.element.insertBefore(this.headersElement,this.element.firstChild);};////////////// Setup Functions /////////////////
  ColumnManager.prototype.createHeadersElement=function(){var el=document.createElement("div");el.classList.add("tabulator-headers");return el;};ColumnManager.prototype.createHeaderElement=function(){var el=document.createElement("div");el.classList.add("tabulator-header");if(!this.table.options.headerVisible){el.classList.add("tabulator-header-hidden");}return el;};ColumnManager.prototype.initialize=function(){// self.element.addEventListener("scroll", function(e){
  // 	if(!self.blockHozScrollEvent){
  // 		self.table.rowManager.scrollHorizontal(self.element.scrollLeft);
  // 	}
  // });
  };//link to row manager
  ColumnManager.prototype.setRowManager=function(manager){this.rowManager=manager;};//return containing element
  ColumnManager.prototype.getElement=function(){return this.element;};//return header containing element
  ColumnManager.prototype.getHeadersElement=function(){return this.headersElement;};// ColumnManager.prototype.tempScrollBlock = function(){
  // 	clearTimeout(this.blockHozScrollEvent);
  // 	this.blockHozScrollEvent = setTimeout(() => {this.blockHozScrollEvent = false;}, 50);
  // }
  //scroll horizontally to match table body
  ColumnManager.prototype.scrollHorizontal=function(left){var hozAdjust=0,scrollWidth=this.element.scrollWidth-this.table.element.clientWidth;// this.tempScrollBlock();
  this.element.scrollLeft=left;//adjust for vertical scrollbar moving table when present
  if(left>scrollWidth){hozAdjust=left-scrollWidth;this.element.style.marginLeft=-hozAdjust+"px";}else {this.element.style.marginLeft=0;}//keep frozen columns fixed in position
  //this._calcFrozenColumnsPos(hozAdjust + 3);
  this.scrollLeft=left;if(this.table.modExists("frozenColumns")){this.table.modules.frozenColumns.scrollHorizontal();}};///////////// Column Setup Functions /////////////
  ColumnManager.prototype.generateColumnsFromRowData=function(data){var cols=[],definitions=this.table.options.autoColumnsDefinitions,row,sorter;if(data&&data.length){row=data[0];for(var key in row){var col={field:key,title:key};var value=row[key];switch(typeof value==='undefined'?'undefined':_typeof(value)){case"undefined":sorter="string";break;case"boolean":sorter="boolean";break;case"object":if(Array.isArray(value)){sorter="array";}else {sorter="string";}break;default:if(!isNaN(value)&&value!==""){sorter="number";}else {if(value.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)){sorter="alphanum";}else {sorter="string";}}break;}col.sorter=sorter;cols.push(col);}if(definitions){switch(typeof definitions==='undefined'?'undefined':_typeof(definitions)){case"function":this.table.options.columns=definitions.call(this.table,cols);break;case"object":if(Array.isArray(definitions)){cols.forEach(function(col){var match=definitions.find(function(def){return def.field===col.field;});if(match){Object.assign(col,match);}});}else {cols.forEach(function(col){if(definitions[col.field]){Object.assign(col,definitions[col.field]);}});}this.table.options.columns=cols;break;}}else {this.table.options.columns=cols;}this.setColumns(this.table.options.columns);}};ColumnManager.prototype.setColumns=function(cols,row){var self=this;while(self.headersElement.firstChild){self.headersElement.removeChild(self.headersElement.firstChild);}self.columns=[];self.columnsByIndex=[];self.columnsByField={};//reset frozen columns
  if(self.table.modExists("frozenColumns")){self.table.modules.frozenColumns.reset();}cols.forEach(function(def,i){self._addColumn(def);});self._reIndexColumns();if(self.table.options.responsiveLayout&&self.table.modExists("responsiveLayout",true)){self.table.modules.responsiveLayout.initialize();}if(this.table.options.virtualDomHoz){this.table.vdomHoz.reinitialize(false,true);}self.redraw(true);};ColumnManager.prototype._addColumn=function(definition,before,nextToColumn){var column=new Column(definition,this),colEl=column.getElement(),index=nextToColumn?this.findColumnIndex(nextToColumn):nextToColumn;if(nextToColumn&&index>-1){var parentIndex=this.columns.indexOf(nextToColumn.getTopColumn());var nextEl=nextToColumn.getElement();if(before){this.columns.splice(parentIndex,0,column);nextEl.parentNode.insertBefore(colEl,nextEl);}else {this.columns.splice(parentIndex+1,0,column);nextEl.parentNode.insertBefore(colEl,nextEl.nextSibling);}}else {if(before){this.columns.unshift(column);this.headersElement.insertBefore(column.getElement(),this.headersElement.firstChild);}else {this.columns.push(column);this.headersElement.appendChild(column.getElement());}column.columnRendered();}return column;};ColumnManager.prototype.registerColumnField=function(col){if(col.definition.field){this.columnsByField[col.definition.field]=col;}};ColumnManager.prototype.registerColumnPosition=function(col){this.columnsByIndex.push(col);};ColumnManager.prototype._reIndexColumns=function(){this.columnsByIndex=[];this.columns.forEach(function(column){column.reRegisterPosition();});};//ensure column headers take up the correct amount of space in column groups
  ColumnManager.prototype._verticalAlignHeaders=function(){var self=this,minHeight=0;self.columns.forEach(function(column){var height;column.clearVerticalAlign();height=column.getHeight();if(height>minHeight){minHeight=height;}});self.columns.forEach(function(column){column.verticalAlign(self.table.options.columnHeaderVertAlign,minHeight);});self.rowManager.adjustTableSize();};//////////////// Column Details /////////////////
  ColumnManager.prototype.findColumn=function(subject){var self=this;if((typeof subject==='undefined'?'undefined':_typeof(subject))=="object"){if(subject instanceof Column){//subject is column element
  return subject;}else if(subject instanceof ColumnComponent){//subject is public column component
  return subject._getSelf()||false;}else if(typeof HTMLElement!=="undefined"&&subject instanceof HTMLElement){//subject is a HTML element of the column header
  var match=self.columns.find(function(column){return column.element===subject;});return match||false;}}else {//subject should be treated as the field name of the column
  return this.columnsByField[subject]||false;}//catch all for any other type of input
  return false;};ColumnManager.prototype.getColumnByField=function(field){return this.columnsByField[field];};ColumnManager.prototype.getColumnsByFieldRoot=function(root){var _this=this;var matches=[];Object.keys(this.columnsByField).forEach(function(field){var fieldRoot=field.split(".")[0];if(fieldRoot===root){matches.push(_this.columnsByField[field]);}});return matches;};ColumnManager.prototype.getColumnByIndex=function(index){return this.columnsByIndex[index];};ColumnManager.prototype.getFirstVisibileColumn=function(index){var index=this.columnsByIndex.findIndex(function(col){return col.visible;});return index>-1?this.columnsByIndex[index]:false;};ColumnManager.prototype.getColumns=function(){return this.columns;};ColumnManager.prototype.findColumnIndex=function(column){return this.columnsByIndex.findIndex(function(col){return column===col;});};//return all columns that are not groups
  ColumnManager.prototype.getRealColumns=function(){return this.columnsByIndex;};//travers across columns and call action
  ColumnManager.prototype.traverse=function(callback){var self=this;self.columnsByIndex.forEach(function(column,i){callback(column,i);});};//get defintions of actual columns
  ColumnManager.prototype.getDefinitions=function(active){var self=this,output=[];self.columnsByIndex.forEach(function(column){if(!active||active&&column.visible){output.push(column.getDefinition());}});return output;};//get full nested definition tree
  ColumnManager.prototype.getDefinitionTree=function(){var self=this,output=[];self.columns.forEach(function(column){output.push(column.getDefinition(true));});return output;};ColumnManager.prototype.getComponents=function(structured){var self=this,output=[],columns=structured?self.columns:self.columnsByIndex;columns.forEach(function(column){output.push(column.getComponent());});return output;};ColumnManager.prototype.getWidth=function(){var width=0;this.columnsByIndex.forEach(function(column){if(column.visible){width+=column.getWidth();}});return width;};ColumnManager.prototype.moveColumn=function(from,to,after){this.moveColumnActual(from,to,after);if(this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){this.table.modules.responsiveLayout.initialize();}if(this.table.modExists("columnCalcs")){this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);}to.element.parentNode.insertBefore(from.element,to.element);if(after){to.element.parentNode.insertBefore(to.element,from.element);}this._verticalAlignHeaders();this.table.rowManager.reinitialize();};ColumnManager.prototype.moveColumnActual=function(from,to,after){if(from.parent.isGroup){this._moveColumnInArray(from.parent.columns,from,to,after);}else {this._moveColumnInArray(this.columns,from,to,after);}this._moveColumnInArray(this.columnsByIndex,from,to,after,true);if(this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){this.table.modules.responsiveLayout.initialize();}if(this.table.options.virtualDomHoz){this.table.vdomHoz.reinitialize(true);}if(this.table.options.columnMoved){this.table.options.columnMoved.call(this.table,from.getComponent(),this.table.columnManager.getComponents());}if(this.table.options.persistence&&this.table.modExists("persistence",true)&&this.table.modules.persistence.config.columns){this.table.modules.persistence.save("columns");}};ColumnManager.prototype._moveColumnInArray=function(columns,from,to,after,updateRows){var _this2=this;var fromIndex=columns.indexOf(from),toIndex,rows=[];if(fromIndex>-1){columns.splice(fromIndex,1);toIndex=columns.indexOf(to);if(toIndex>-1){if(after){toIndex=toIndex+1;}}else {toIndex=fromIndex;}columns.splice(toIndex,0,from);if(updateRows){if(this.table.options.dataTree&&this.table.modExists("dataTree",true)){this.table.rowManager.rows.forEach(function(row){rows=rows.concat(_this2.table.modules.dataTree.getTreeChildren(row,false,true));});}rows=rows.concat(this.table.rowManager.rows);rows.forEach(function(row){if(row.cells.length){var cell=row.cells.splice(fromIndex,1)[0];row.cells.splice(toIndex,0,cell);}});}}};ColumnManager.prototype.scrollToColumn=function(column,position,ifVisible){var _this3=this;var left=0,offset=0,adjust=0,colEl=column.getElement();return new Promise(function(resolve,reject){if(typeof position==="undefined"){position=_this3.table.options.scrollToColumnPosition;}if(typeof ifVisible==="undefined"){ifVisible=_this3.table.options.scrollToColumnIfVisible;}if(column.visible){//align to correct position
  switch(position){case"middle":case"center":adjust=-_this3.element.clientWidth/2;break;case"right":adjust=colEl.clientWidth-_this3.headersElement.clientWidth;break;}//check column visibility
  if(!ifVisible){offset=colEl.offsetLeft;if(offset>0&&offset+colEl.offsetWidth<_this3.element.clientWidth){return false;}}//calculate scroll position
  left=colEl.offsetLeft+adjust;left=Math.max(Math.min(left,_this3.table.rowManager.element.scrollWidth-_this3.table.rowManager.element.clientWidth),0);_this3.table.rowManager.scrollHorizontal(left);_this3.scrollHorizontal(left);resolve();}else {console.warn("Scroll Error - Column not visible");reject("Scroll Error - Column not visible");}});};//////////////// Cell Management /////////////////
  ColumnManager.prototype.generateCells=function(row){var self=this;var cells=[];self.columnsByIndex.forEach(function(column){cells.push(column.generateCell(row));});return cells;};//////////////// Column Management /////////////////
  ColumnManager.prototype.getFlexBaseWidth=function(){var self=this,totalWidth=self.table.element.clientWidth,//table element width
  fixedWidth=0;//adjust for vertical scrollbar if present
  if(self.rowManager.element.scrollHeight>self.rowManager.element.clientHeight){totalWidth-=self.rowManager.element.offsetWidth-self.rowManager.element.clientWidth;}this.columnsByIndex.forEach(function(column){var width,minWidth,colWidth;if(column.visible){width=column.definition.width||0;minWidth=typeof column.minWidth=="undefined"?self.table.options.columnMinWidth:parseInt(column.minWidth);if(typeof width=="string"){if(width.indexOf("%")>-1){colWidth=totalWidth/100*parseInt(width);}else {colWidth=parseInt(width);}}else {colWidth=width;}fixedWidth+=colWidth>minWidth?colWidth:minWidth;}});return fixedWidth;};ColumnManager.prototype.addColumn=function(definition,before,nextToColumn){var _this4=this;return new Promise(function(resolve,reject){var column=_this4._addColumn(definition,before,nextToColumn);_this4._reIndexColumns();if(_this4.table.options.responsiveLayout&&_this4.table.modExists("responsiveLayout",true)){_this4.table.modules.responsiveLayout.initialize();}if(_this4.table.modExists("columnCalcs")){_this4.table.modules.columnCalcs.recalc(_this4.table.rowManager.activeRows);}_this4.redraw(true);if(_this4.table.modules.layout.getMode()!="fitColumns"){column.reinitializeWidth();}_this4._verticalAlignHeaders();_this4.table.rowManager.reinitialize();if(_this4.table.options.virtualDomHoz){_this4.table.vdomHoz.reinitialize();}resolve(column);});};//remove column from system
  ColumnManager.prototype.deregisterColumn=function(column){var field=column.getField(),index;//remove from field list
  if(field){delete this.columnsByField[field];}//remove from index list
  index=this.columnsByIndex.indexOf(column);if(index>-1){this.columnsByIndex.splice(index,1);}//remove from column list
  index=this.columns.indexOf(column);if(index>-1){this.columns.splice(index,1);}if(this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){this.table.modules.responsiveLayout.initialize();}this._verticalAlignHeaders();this.redraw();};//redraw columns
  ColumnManager.prototype.redraw=function(force){if(force){if(Tabulator.prototype.helpers.elVisible(this.element)){this._verticalAlignHeaders();}this.table.rowManager.resetScroll();this.table.rowManager.reinitialize();}if(["fitColumns","fitDataStretch"].indexOf(this.table.modules.layout.getMode())>-1){this.table.modules.layout.layout();}else {if(force){this.table.modules.layout.layout();}else {if(this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){this.table.modules.responsiveLayout.update();}}}if(this.table.modExists("frozenColumns")){this.table.modules.frozenColumns.layout();}if(this.table.modExists("columnCalcs")){this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);}if(force){if(this.table.options.persistence&&this.table.modExists("persistence",true)&&this.table.modules.persistence.config.columns){this.table.modules.persistence.save("columns");}if(this.table.modExists("columnCalcs")){this.table.modules.columnCalcs.redraw();}}this.table.footerManager.redraw();};//public column object
  var ColumnComponent=function ColumnComponent(column){this._column=column;this.type="ColumnComponent";};ColumnComponent.prototype.getElement=function(){return this._column.getElement();};ColumnComponent.prototype.getDefinition=function(){return this._column.getDefinition();};ColumnComponent.prototype.getField=function(){return this._column.getField();};ColumnComponent.prototype.getCells=function(){var cells=[];this._column.cells.forEach(function(cell){cells.push(cell.getComponent());});return cells;};ColumnComponent.prototype.getVisibility=function(){console.warn("getVisibility function is deprecated, you should now use the isVisible function");return this._column.visible;};ColumnComponent.prototype.isVisible=function(){return this._column.visible;};ColumnComponent.prototype.show=function(){if(this._column.isGroup){this._column.columns.forEach(function(column){column.show();});}else {this._column.show();}};ColumnComponent.prototype.hide=function(){if(this._column.isGroup){this._column.columns.forEach(function(column){column.hide();});}else {this._column.hide();}};ColumnComponent.prototype.toggle=function(){if(this._column.visible){this.hide();}else {this.show();}};ColumnComponent.prototype["delete"]=function(){return this._column["delete"]();};ColumnComponent.prototype.getSubColumns=function(){var output=[];if(this._column.columns.length){this._column.columns.forEach(function(column){output.push(column.getComponent());});}return output;};ColumnComponent.prototype.getParentColumn=function(){return this._column.parent instanceof Column?this._column.parent.getComponent():false;};ColumnComponent.prototype._getSelf=function(){return this._column;};ColumnComponent.prototype.scrollTo=function(){return this._column.table.columnManager.scrollToColumn(this._column);};ColumnComponent.prototype.getTable=function(){return this._column.table;};ColumnComponent.prototype.headerFilterFocus=function(){if(this._column.table.modExists("filter",true)){this._column.table.modules.filter.setHeaderFilterFocus(this._column);}};ColumnComponent.prototype.reloadHeaderFilter=function(){if(this._column.table.modExists("filter",true)){this._column.table.modules.filter.reloadHeaderFilter(this._column);}};ColumnComponent.prototype.getHeaderFilterValue=function(){if(this._column.table.modExists("filter",true)){return this._column.table.modules.filter.getHeaderFilterValue(this._column);}};ColumnComponent.prototype.setHeaderFilterValue=function(value){if(this._column.table.modExists("filter",true)){this._column.table.modules.filter.setHeaderFilterValue(this._column,value);}};ColumnComponent.prototype.move=function(to,after){var toColumn=this._column.table.columnManager.findColumn(to);if(toColumn){this._column.table.columnManager.moveColumn(this._column,toColumn,after);}else {console.warn("Move Error - No matching column found:",toColumn);}};ColumnComponent.prototype.getNextColumn=function(){var nextCol=this._column.nextColumn();return nextCol?nextCol.getComponent():false;};ColumnComponent.prototype.getPrevColumn=function(){var prevCol=this._column.prevColumn();return prevCol?prevCol.getComponent():false;};ColumnComponent.prototype.updateDefinition=function(updates){return this._column.updateDefinition(updates);};ColumnComponent.prototype.getWidth=function(){return this._column.getWidth();};ColumnComponent.prototype.setWidth=function(width){var result;if(width===true){result=this._column.reinitializeWidth(true);}else {result=this._column.setWidth(width);}if(this._column.table.options.virtualDomHoz){this._column.table.vdomHoz.reinitialize(true);}return result;};ColumnComponent.prototype.validate=function(){return this._column.validate();};var Column=function Column(def,parent){var self=this;this.table=parent.table;this.definition=def;//column definition
  this.parent=parent;//hold parent object
  this.type="column";//type of element
  this.columns=[];//child columns
  this.cells=[];//cells bound to this column
  this.element=this.createElement();//column header element
  this.contentElement=false;this.titleHolderElement=false;this.titleElement=false;this.groupElement=this.createGroupElement();//column group holder element
  this.isGroup=false;this.tooltip=false;//hold column tooltip
  this.hozAlign="";//horizontal text alignment
  this.vertAlign="";//vert text alignment
  //multi dimensional filed handling
  this.field="";this.fieldStructure="";this.getFieldValue="";this.setFieldValue="";this.titleFormatterRendered=false;this.setField(this.definition.field);if(this.table.options.invalidOptionWarnings){this.checkDefinition();}this.modules={};//hold module variables;
  this.cellEvents={cellClick:false,cellDblClick:false,cellContext:false,cellTap:false,cellDblTap:false,cellTapHold:false,cellMouseEnter:false,cellMouseLeave:false,cellMouseOver:false,cellMouseOut:false,cellMouseMove:false};this.width=null;//column width
  this.widthStyled="";//column width prestyled to improve render efficiency
  this.maxWidth=null;//column maximum width
  this.maxWidthStyled="";//column maximum prestyled to improve render efficiency
  this.minWidth=null;//column minimum width
  this.minWidthStyled="";//column minimum prestyled to improve render efficiency
  this.widthFixed=false;//user has specified a width for this column
  this.visible=true;//default visible state
  this.component=null;this._mapDepricatedFunctionality();//initialize column
  if(def.columns){this.isGroup=true;def.columns.forEach(function(def,i){var newCol=new Column(def,self);self.attachColumn(newCol);});self.checkColumnVisibility();}else {parent.registerColumnField(this);}if(def.rowHandle&&this.table.options.movableRows!==false&&this.table.modExists("moveRow")){this.table.modules.moveRow.setHandle(true);}this._buildHeader();this.bindModuleColumns();};Column.prototype.createElement=function(){var el=document.createElement("div");el.classList.add("tabulator-col");el.setAttribute("role","columnheader");el.setAttribute("aria-sort","none");return el;};Column.prototype.createGroupElement=function(){var el=document.createElement("div");el.classList.add("tabulator-col-group-cols");return el;};Column.prototype.checkDefinition=function(){var _this5=this;Object.keys(this.definition).forEach(function(key){if(_this5.defaultOptionList.indexOf(key)===-1){console.warn("Invalid column definition option in '"+(_this5.field||_this5.definition.title)+"' column:",key);}});};Column.prototype.setField=function(field){this.field=field;this.fieldStructure=field?this.table.options.nestedFieldSeparator?field.split(this.table.options.nestedFieldSeparator):[field]:[];this.getFieldValue=this.fieldStructure.length>1?this._getNestedData:this._getFlatData;this.setFieldValue=this.fieldStructure.length>1?this._setNestedData:this._setFlatData;};//register column position with column manager
  Column.prototype.registerColumnPosition=function(column){this.parent.registerColumnPosition(column);};//register column position with column manager
  Column.prototype.registerColumnField=function(column){this.parent.registerColumnField(column);};//trigger position registration
  Column.prototype.reRegisterPosition=function(){if(this.isGroup){this.columns.forEach(function(column){column.reRegisterPosition();});}else {this.registerColumnPosition(this);}};Column.prototype._mapDepricatedFunctionality=function(){if(typeof this.definition.hideInHtml!=="undefined"){this.definition.htmlOutput=!this.definition.hideInHtml;console.warn("hideInHtml column definition property is deprecated, you should now use htmlOutput");}if(typeof this.definition.align!=="undefined"){this.definition.hozAlign=this.definition.align;console.warn("align column definition property is deprecated, you should now use hozAlign");}if(typeof this.definition.downloadTitle!=="undefined"){this.definition.titleDownload=this.definition.downloadTitle;console.warn("downloadTitle definition property is deprecated, you should now use titleDownload");}};Column.prototype.setTooltip=function(){var self=this,def=self.definition;//set header tooltips
  var tooltip=def.headerTooltip||def.tooltip===false?def.headerTooltip:self.table.options.tooltipsHeader;if(tooltip){if(tooltip===true){if(def.field){self.table.modules.localize.bind("columns|"+def.field,function(value){self.element.setAttribute("title",value||def.title);});}else {self.element.setAttribute("title",def.title);}}else {if(typeof tooltip=="function"){tooltip=tooltip(self.getComponent());if(tooltip===false){tooltip="";}}self.element.setAttribute("title",tooltip);}}else {self.element.setAttribute("title","");}};//build header element
  Column.prototype._buildHeader=function(){var self=this,def=self.definition;while(self.element.firstChild){self.element.removeChild(self.element.firstChild);}if(def.headerVertical){self.element.classList.add("tabulator-col-vertical");if(def.headerVertical==="flip"){self.element.classList.add("tabulator-col-vertical-flip");}}self.contentElement=self._bindEvents();self.contentElement=self._buildColumnHeaderContent();self.element.appendChild(self.contentElement);if(self.isGroup){self._buildGroupHeader();}else {self._buildColumnHeader();}self.setTooltip();//set resizable handles
  if(self.table.options.resizableColumns&&self.table.modExists("resizeColumns")){self.table.modules.resizeColumns.initializeColumn("header",self,self.element);}//set resizable handles
  if(def.headerFilter&&self.table.modExists("filter")&&self.table.modExists("edit")){if(typeof def.headerFilterPlaceholder!=="undefined"&&def.field){self.table.modules.localize.setHeaderFilterColumnPlaceholder(def.field,def.headerFilterPlaceholder);}self.table.modules.filter.initializeColumn(self);}//set resizable handles
  if(self.table.modExists("frozenColumns")){self.table.modules.frozenColumns.initializeColumn(self);}//set movable column
  if(self.table.options.movableColumns&&!self.isGroup&&self.table.modExists("moveColumn")){self.table.modules.moveColumn.initializeColumn(self);}//set calcs column
  if((def.topCalc||def.bottomCalc)&&self.table.modExists("columnCalcs")){self.table.modules.columnCalcs.initializeColumn(self);}//handle persistence
  if(self.table.modExists("persistence")&&self.table.modules.persistence.config.columns){self.table.modules.persistence.initializeColumn(self);}//update header tooltip on mouse enter
  self.element.addEventListener("mouseenter",function(e){self.setTooltip();});};Column.prototype._bindEvents=function(){var self=this,def=self.definition,dblTap,tapHold,tap;//setup header click event bindings
  if(typeof def.headerClick=="function"){self.element.addEventListener("click",function(e){def.headerClick(e,self.getComponent());});}if(typeof def.headerDblClick=="function"){self.element.addEventListener("dblclick",function(e){def.headerDblClick(e,self.getComponent());});}if(typeof def.headerContext=="function"){self.element.addEventListener("contextmenu",function(e){def.headerContext(e,self.getComponent());});}//setup header tap event bindings
  if(typeof def.headerTap=="function"){tap=false;self.element.addEventListener("touchstart",function(e){tap=true;},{passive:true});self.element.addEventListener("touchend",function(e){if(tap){def.headerTap(e,self.getComponent());}tap=false;});}if(typeof def.headerDblTap=="function"){dblTap=null;self.element.addEventListener("touchend",function(e){if(dblTap){clearTimeout(dblTap);dblTap=null;def.headerDblTap(e,self.getComponent());}else {dblTap=setTimeout(function(){clearTimeout(dblTap);dblTap=null;},300);}});}if(typeof def.headerTapHold=="function"){tapHold=null;self.element.addEventListener("touchstart",function(e){clearTimeout(tapHold);tapHold=setTimeout(function(){clearTimeout(tapHold);tapHold=null;tap=false;def.headerTapHold(e,self.getComponent());},1000);},{passive:true});self.element.addEventListener("touchend",function(e){clearTimeout(tapHold);tapHold=null;});}//store column cell click event bindings
  if(typeof def.cellClick=="function"){self.cellEvents.cellClick=def.cellClick;}if(typeof def.cellDblClick=="function"){self.cellEvents.cellDblClick=def.cellDblClick;}if(typeof def.cellContext=="function"){self.cellEvents.cellContext=def.cellContext;}//store column mouse event bindings
  if(typeof def.cellMouseEnter=="function"){self.cellEvents.cellMouseEnter=def.cellMouseEnter;}if(typeof def.cellMouseLeave=="function"){self.cellEvents.cellMouseLeave=def.cellMouseLeave;}if(typeof def.cellMouseOver=="function"){self.cellEvents.cellMouseOver=def.cellMouseOver;}if(typeof def.cellMouseOut=="function"){self.cellEvents.cellMouseOut=def.cellMouseOut;}if(typeof def.cellMouseMove=="function"){self.cellEvents.cellMouseMove=def.cellMouseMove;}//setup column cell tap event bindings
  if(typeof def.cellTap=="function"){self.cellEvents.cellTap=def.cellTap;}if(typeof def.cellDblTap=="function"){self.cellEvents.cellDblTap=def.cellDblTap;}if(typeof def.cellTapHold=="function"){self.cellEvents.cellTapHold=def.cellTapHold;}//setup column cell edit callbacks
  if(typeof def.cellEdited=="function"){self.cellEvents.cellEdited=def.cellEdited;}if(typeof def.cellEditing=="function"){self.cellEvents.cellEditing=def.cellEditing;}if(typeof def.cellEditCancelled=="function"){self.cellEvents.cellEditCancelled=def.cellEditCancelled;}};//build header element for header
  Column.prototype._buildColumnHeader=function(){var _this6=this;var def=this.definition,table=this.table;//set column sorter
  if(table.modExists("sort")){table.modules.sort.initializeColumn(this,this.titleHolderElement);}//set column header context menu
  if((def.headerContextMenu||def.headerClickMenu||def.headerMenu)&&table.modExists("menu")){table.modules.menu.initializeColumnHeader(this);}//set column formatter
  if(table.modExists("format")){table.modules.format.initializeColumn(this);}//set column editor
  if(typeof def.editor!="undefined"&&table.modExists("edit")){table.modules.edit.initializeColumn(this);}//set colum validator
  if(typeof def.validator!="undefined"&&table.modExists("validate")){table.modules.validate.initializeColumn(this);}//set column mutator
  if(table.modExists("mutator")){table.modules.mutator.initializeColumn(this);}//set column accessor
  if(table.modExists("accessor")){table.modules.accessor.initializeColumn(this);}//set respoviveLayout
  if(_typeof(table.options.responsiveLayout)&&table.modExists("responsiveLayout")){table.modules.responsiveLayout.initializeColumn(this);}//set column visibility
  if(typeof def.visible!="undefined"){if(def.visible){this.show(true);}else {this.hide(true);}}//asign additional css classes to column header
  if(def.cssClass){var classeNames=def.cssClass.split(" ");classeNames.forEach(function(className){_this6.element.classList.add(className);});}if(def.field){this.element.setAttribute("tabulator-field",def.field);}//set min width if present
  this.setMinWidth(typeof def.minWidth=="undefined"?this.table.options.columnMinWidth:parseInt(def.minWidth));if(def.maxWidth||this.table.options.columnMaxWidth){if(def.maxWidth!==false){this.setMaxWidth(typeof def.maxWidth=="undefined"?this.table.options.columnMaxWidth:parseInt(def.maxWidth));}}this.reinitializeWidth();//set tooltip if present
  this.tooltip=this.definition.tooltip||this.definition.tooltip===false?this.definition.tooltip:this.table.options.tooltips;//set orizontal text alignment
  this.hozAlign=typeof this.definition.hozAlign=="undefined"?this.table.options.cellHozAlign:this.definition.hozAlign;this.vertAlign=typeof this.definition.vertAlign=="undefined"?this.table.options.cellVertAlign:this.definition.vertAlign;this.titleElement.style.textAlign=this.definition.headerHozAlign||this.table.options.headerHozAlign;};Column.prototype._buildColumnHeaderContent=function(){this.definition;this.table;var contentElement=document.createElement("div");contentElement.classList.add("tabulator-col-content");this.titleHolderElement=document.createElement("div");this.titleHolderElement.classList.add("tabulator-col-title-holder");contentElement.appendChild(this.titleHolderElement);this.titleElement=this._buildColumnHeaderTitle();this.titleHolderElement.appendChild(this.titleElement);return contentElement;};//build title element of column
  Column.prototype._buildColumnHeaderTitle=function(){var self=this,def=self.definition,table=self.table;var titleHolderElement=document.createElement("div");titleHolderElement.classList.add("tabulator-col-title");if(def.editableTitle){var titleElement=document.createElement("input");titleElement.classList.add("tabulator-title-editor");titleElement.addEventListener("click",function(e){e.stopPropagation();titleElement.focus();});titleElement.addEventListener("change",function(){def.title=titleElement.value;table.options.columnTitleChanged.call(self.table,self.getComponent());});titleHolderElement.appendChild(titleElement);if(def.field){table.modules.localize.bind("columns|"+def.field,function(text){titleElement.value=text||def.title||"&nbsp;";});}else {titleElement.value=def.title||"&nbsp;";}}else {if(def.field){table.modules.localize.bind("columns|"+def.field,function(text){self._formatColumnHeaderTitle(titleHolderElement,text||def.title||"&nbsp;");});}else {self._formatColumnHeaderTitle(titleHolderElement,def.title||"&nbsp;");}}return titleHolderElement;};Column.prototype._formatColumnHeaderTitle=function(el,title){var _this7=this;var formatter,contents,params,mockCell,onRendered;if(this.definition.titleFormatter&&this.table.modExists("format")){formatter=this.table.modules.format.getFormatter(this.definition.titleFormatter);onRendered=function onRendered(callback){_this7.titleFormatterRendered=callback;};mockCell={getValue:function getValue(){return title;},getElement:function getElement(){return el;}};params=this.definition.titleFormatterParams||{};params=typeof params==="function"?params():params;contents=formatter.call(this.table.modules.format,mockCell,params,onRendered);switch(typeof contents==='undefined'?'undefined':_typeof(contents)){case"object":if(contents instanceof Node){el.appendChild(contents);}else {el.innerHTML="";console.warn("Format Error - Title formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:",contents);}break;case"undefined":case"null":el.innerHTML="";break;default:el.innerHTML=contents;}}else {el.innerHTML=title;}};//build header element for column group
  Column.prototype._buildGroupHeader=function(){var _this8=this;this.element.classList.add("tabulator-col-group");this.element.setAttribute("role","columngroup");this.element.setAttribute("aria-title",this.definition.title);//asign additional css classes to column header
  if(this.definition.cssClass){var classeNames=this.definition.cssClass.split(" ");classeNames.forEach(function(className){_this8.element.classList.add(className);});}//set column header context menu
  if((this.definition.headerContextMenu||this.definition.headerMenu)&&this.table.modExists("menu")){this.table.modules.menu.initializeColumnHeader(this);}this.titleElement.style.textAlign=this.definition.headerHozAlign||this.table.options.headerHozAlign;this.element.appendChild(this.groupElement);};//flat field lookup
  Column.prototype._getFlatData=function(data){return data[this.field];};//nested field lookup
  Column.prototype._getNestedData=function(data){var dataObj=data,structure=this.fieldStructure,length=structure.length,output;for(var _i=0;_i<length;_i++){dataObj=dataObj[structure[_i]];output=dataObj;if(!dataObj){break;}}return output;};//flat field set
  Column.prototype._setFlatData=function(data,value){if(this.field){data[this.field]=value;}};//nested field set
  Column.prototype._setNestedData=function(data,value){var dataObj=data,structure=this.fieldStructure,length=structure.length;for(var _i2=0;_i2<length;_i2++){if(_i2==length-1){dataObj[structure[_i2]]=value;}else {if(!dataObj[structure[_i2]]){if(typeof value!=="undefined"){dataObj[structure[_i2]]={};}else {break;}}dataObj=dataObj[structure[_i2]];}}};//attach column to this group
  Column.prototype.attachColumn=function(column){var self=this;if(self.groupElement){self.columns.push(column);self.groupElement.appendChild(column.getElement());}else {console.warn("Column Warning - Column being attached to another column instead of column group");}};//vertically align header in column
  Column.prototype.verticalAlign=function(alignment,height){//calculate height of column header and group holder element
  var parentHeight=this.parent.isGroup?this.parent.getGroupElement().clientHeight:height||this.parent.getHeadersElement().clientHeight;// var parentHeight = this.parent.isGroup ? this.parent.getGroupElement().clientHeight : this.parent.getHeadersElement().clientHeight;
  this.element.style.height=parentHeight+"px";if(this.isGroup){this.groupElement.style.minHeight=parentHeight-this.contentElement.offsetHeight+"px";}//vertically align cell contents
  if(!this.isGroup&&alignment!=="top"){if(alignment==="bottom"){this.element.style.paddingTop=this.element.clientHeight-this.contentElement.offsetHeight+"px";}else {this.element.style.paddingTop=(this.element.clientHeight-this.contentElement.offsetHeight)/2+"px";}}this.columns.forEach(function(column){column.verticalAlign(alignment);});};//clear vertical alignmenet
  Column.prototype.clearVerticalAlign=function(){this.element.style.paddingTop="";this.element.style.height="";this.element.style.minHeight="";this.groupElement.style.minHeight="";this.columns.forEach(function(column){column.clearVerticalAlign();});};Column.prototype.bindModuleColumns=function(){//check if rownum formatter is being used on a column
  if(this.definition.formatter=="rownum"){this.table.rowManager.rowNumColumn=this;}};//// Retreive Column Information ////
  //return column header element
  Column.prototype.getElement=function(){return this.element;};//return colunm group element
  Column.prototype.getGroupElement=function(){return this.groupElement;};//return field name
  Column.prototype.getField=function(){return this.field;};//return the first column in a group
  Column.prototype.getFirstColumn=function(){if(!this.isGroup){return this;}else {if(this.columns.length){return this.columns[0].getFirstColumn();}else {return false;}}};//return the last column in a group
  Column.prototype.getLastColumn=function(){if(!this.isGroup){return this;}else {if(this.columns.length){return this.columns[this.columns.length-1].getLastColumn();}else {return false;}}};//return all columns in a group
  Column.prototype.getColumns=function(){return this.columns;};//return all columns in a group
  Column.prototype.getCells=function(){return this.cells;};//retreive the top column in a group of columns
  Column.prototype.getTopColumn=function(){if(this.parent.isGroup){return this.parent.getTopColumn();}else {return this;}};//return column definition object
  Column.prototype.getDefinition=function(updateBranches){var colDefs=[];if(this.isGroup&&updateBranches){this.columns.forEach(function(column){colDefs.push(column.getDefinition(true));});this.definition.columns=colDefs;}return this.definition;};//////////////////// Actions ////////////////////
  Column.prototype.checkColumnVisibility=function(){var visible=false;this.columns.forEach(function(column){if(column.visible){visible=true;}});if(visible){this.show();this.parent.table.options.columnVisibilityChanged.call(this.table,this.getComponent(),false);}else {this.hide();}};//show column
  Column.prototype.show=function(silent,responsiveToggle){if(!this.visible){this.visible=true;this.element.style.display="";if(this.parent.isGroup){this.parent.checkColumnVisibility();}this.cells.forEach(function(cell){cell.show();});if(!this.isGroup&&this.width===null){this.reinitializeWidth();}this.table.columnManager._verticalAlignHeaders();if(this.table.options.persistence&&this.table.modExists("persistence",true)&&this.table.modules.persistence.config.columns){this.table.modules.persistence.save("columns");}if(!responsiveToggle&&this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){this.table.modules.responsiveLayout.updateColumnVisibility(this,this.visible);}if(!silent){this.table.options.columnVisibilityChanged.call(this.table,this.getComponent(),true);}if(this.parent.isGroup){this.parent.matchChildWidths();}if(!this.silent&&this.table.options.virtualDomHoz){this.table.vdomHoz.reinitialize();}}};//hide column
  Column.prototype.hide=function(silent,responsiveToggle){if(this.visible){this.visible=false;this.element.style.display="none";this.table.columnManager._verticalAlignHeaders();if(this.parent.isGroup){this.parent.checkColumnVisibility();}this.cells.forEach(function(cell){cell.hide();});if(this.table.options.persistence&&this.table.modExists("persistence",true)&&this.table.modules.persistence.config.columns){this.table.modules.persistence.save("columns");}if(!responsiveToggle&&this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){this.table.modules.responsiveLayout.updateColumnVisibility(this,this.visible);}if(!silent){this.table.options.columnVisibilityChanged.call(this.table,this.getComponent(),false);}if(this.parent.isGroup){this.parent.matchChildWidths();}if(!this.silent&&this.table.options.virtualDomHoz){this.table.vdomHoz.reinitialize();}}};Column.prototype.matchChildWidths=function(){var childWidth=0;if(this.contentElement&&this.columns.length){this.columns.forEach(function(column){if(column.visible){childWidth+=column.getWidth();}});this.contentElement.style.maxWidth=childWidth-1+"px";if(this.parent.isGroup){this.parent.matchChildWidths();}}};Column.prototype.removeChild=function(child){var index=this.columns.indexOf(child);if(index>-1){this.columns.splice(index,1);}if(!this.columns.length){this["delete"]();}};Column.prototype.setWidth=function(width){this.widthFixed=true;this.setWidthActual(width);};Column.prototype.setWidthActual=function(width){if(isNaN(width)){width=Math.floor(this.table.element.clientWidth/100*parseInt(width));}width=Math.max(this.minWidth,width);if(this.maxWidth){width=Math.min(this.maxWidth,width);}this.width=width;this.widthStyled=width?width+"px":"";this.element.style.width=this.widthStyled;if(!this.isGroup){this.cells.forEach(function(cell){cell.setWidth();});}if(this.parent.isGroup){this.parent.matchChildWidths();}//set resizable handles
  if(this.table.modExists("frozenColumns")){this.table.modules.frozenColumns.layout();}};Column.prototype.checkCellHeights=function(){var rows=[];this.cells.forEach(function(cell){if(cell.row.heightInitialized){if(cell.row.getElement().offsetParent!==null){rows.push(cell.row);cell.row.clearCellHeight();}else {cell.row.heightInitialized=false;}}});rows.forEach(function(row){row.calcHeight();});rows.forEach(function(row){row.setCellHeight();});};Column.prototype.getWidth=function(){var width=0;if(this.isGroup){this.columns.forEach(function(column){if(column.visible){width+=column.getWidth();}});}else {width=this.width;}return width;};Column.prototype.getHeight=function(){return this.element.offsetHeight;};Column.prototype.setMinWidth=function(minWidth){this.minWidth=minWidth;this.minWidthStyled=minWidth?minWidth+"px":"";this.element.style.minWidth=this.minWidthStyled;this.cells.forEach(function(cell){cell.setMinWidth();});};Column.prototype.setMaxWidth=function(maxWidth){this.maxWidth=maxWidth;this.maxWidthStyled=maxWidth?maxWidth+"px":"";this.element.style.maxWidth=this.maxWidthStyled;this.cells.forEach(function(cell){cell.setMaxWidth();});};Column.prototype["delete"]=function(){var _this9=this;return new Promise(function(resolve,reject){if(_this9.isGroup){_this9.columns.forEach(function(column){column["delete"]();});}//cancel edit if column is currently being edited
  if(_this9.table.modExists("edit")){if(_this9.table.modules.edit.currentCell.column===_this9){_this9.table.modules.edit.cancelEdit();}}var cellCount=_this9.cells.length;for(var _i3=0;_i3<cellCount;_i3++){_this9.cells[0]["delete"]();}if(_this9.element.parentNode){_this9.element.parentNode.removeChild(_this9.element);}_this9.element=false;_this9.contentElement=false;_this9.titleElement=false;_this9.groupElement=false;if(_this9.parent.isGroup){_this9.parent.removeChild(_this9);}_this9.table.columnManager.deregisterColumn(_this9);if(_this9.table.options.virtualDomHoz){_this9.table.vdomHoz.reinitialize(true);}resolve();});};Column.prototype.columnRendered=function(){if(this.titleFormatterRendered){this.titleFormatterRendered();}};Column.prototype.validate=function(){var invalid=[];this.cells.forEach(function(cell){if(!cell.validate()){invalid.push(cell.getComponent());}});return invalid.length?invalid:true;};//////////////// Cell Management /////////////////
  //generate cell for this column
  Column.prototype.generateCell=function(row){var self=this;var cell=new Cell(self,row);this.cells.push(cell);return cell;};Column.prototype.nextColumn=function(){var index=this.table.columnManager.findColumnIndex(this);return index>-1?this._nextVisibleColumn(index+1):false;};Column.prototype._nextVisibleColumn=function(index){var column=this.table.columnManager.getColumnByIndex(index);return !column||column.visible?column:this._nextVisibleColumn(index+1);};Column.prototype.prevColumn=function(){var index=this.table.columnManager.findColumnIndex(this);return index>-1?this._prevVisibleColumn(index-1):false;};Column.prototype._prevVisibleColumn=function(index){var column=this.table.columnManager.getColumnByIndex(index);return !column||column.visible?column:this._prevVisibleColumn(index-1);};Column.prototype.reinitializeWidth=function(force){this.widthFixed=false;//set width if present
  if(typeof this.definition.width!=="undefined"&&!force){this.setWidth(this.definition.width);}//hide header filters to prevent them altering column width
  if(this.table.modExists("filter")){this.table.modules.filter.hideHeaderFilterElements();}this.fitToData();//show header filters again after layout is complete
  if(this.table.modExists("filter")){this.table.modules.filter.showHeaderFilterElements();}};//set column width to maximum cell width
  Column.prototype.fitToData=function(){var self=this;if(!this.widthFixed){this.element.style.width="";self.cells.forEach(function(cell){cell.clearWidth();});}var maxWidth=this.element.offsetWidth;if(!self.width||!this.widthFixed){self.cells.forEach(function(cell){var width=cell.getWidth();if(width>maxWidth){maxWidth=width;}});if(maxWidth){self.setWidthActual(maxWidth+1);}}};Column.prototype.updateDefinition=function(updates){var _this10=this;return new Promise(function(resolve,reject){var definition;if(!_this10.isGroup){if(!_this10.parent.isGroup){definition=Object.assign({},_this10.getDefinition());definition=Object.assign(definition,updates);_this10.table.columnManager.addColumn(definition,false,_this10).then(function(column){if(definition.field==_this10.field){_this10.field=false;//cleair field name to prevent deletion of duplicate column from arrays
  }_this10["delete"]().then(function(){resolve(column.getComponent());})["catch"](function(err){reject(err);});})["catch"](function(err){reject(err);});}else {console.warn("Column Update Error - The updateDefinition function is only available on ungrouped columns");reject("Column Update Error - The updateDefinition function is only available on columns, not column groups");}}else {console.warn("Column Update Error - The updateDefinition function is only available on ungrouped columns");reject("Column Update Error - The updateDefinition function is only available on columns, not column groups");}});};Column.prototype.deleteCell=function(cell){var index=this.cells.indexOf(cell);if(index>-1){this.cells.splice(index,1);}};Column.prototype.defaultOptionList=["title","field","columns","visible","align","hozAlign","vertAlign","width","minWidth","maxWidth","widthGrow","widthShrink","resizable","frozen","responsive","tooltip","cssClass","rowHandle","hideInHtml","print","htmlOutput","sorter","sorterParams","formatter","formatterParams","variableHeight","editable","editor","editorParams","validator","mutator","mutatorParams","mutatorData","mutatorDataParams","mutatorEdit","mutatorEditParams","mutatorClipboard","mutatorClipboardParams","accessor","accessorParams","accessorData","accessorDataParams","accessorDownload","accessorDownloadParams","accessorClipboard","accessorClipboardParams","accessorPrint","accessorPrintParams","accessorHtmlOutput","accessorHtmlOutputParams","clipboard","download","downloadTitle","topCalc","topCalcParams","topCalcFormatter","topCalcFormatterParams","bottomCalc","bottomCalcParams","bottomCalcFormatter","bottomCalcFormatterParams","cellClick","cellDblClick","cellContext","cellTap","cellDblTap","cellTapHold","cellMouseEnter","cellMouseLeave","cellMouseOver","cellMouseOut","cellMouseMove","cellEditing","cellEdited","cellEditCancelled","headerSort","headerSortStartingDir","headerSortTristate","headerClick","headerDblClick","headerContext","headerTap","headerDblTap","headerTapHold","headerTooltip","headerVertical","headerHozAlign","editableTitle","titleFormatter","titleFormatterParams","headerFilter","headerFilterPlaceholder","headerFilterParams","headerFilterEmptyCheck","headerFilterFunc","headerFilterFuncParams","headerFilterLiveFilter","print","headerContextMenu","headerMenu","contextMenu",// "headerClickMenu",
  "clickMenu","formatterPrint","formatterPrintParams","formatterClipboard","formatterClipboardParams","formatterHtmlOutput","formatterHtmlOutputParams","titlePrint","titleClipboard","titleHtmlOutput","titleDownload"];//////////////// Event Bindings /////////////////
  //////////////// Object Generation /////////////////
  Column.prototype.getComponent=function(){if(!this.component){this.component=new ColumnComponent(this);}return this.component;};var RowManager=function RowManager(table){this.table=table;this.element=this.createHolderElement();//containing element
  this.tableElement=this.createTableElement();//table element
  this.heightFixer=this.createTableElement();//table element
  this.columnManager=null;//hold column manager object
  this.height=0;//hold height of table element
  this.firstRender=false;//handle first render
  this.renderMode="virtual";//current rendering mode
  this.fixedHeight=false;//current rendering mode
  this.rows=[];//hold row data objects
  this.activeRows=[];//rows currently available to on display in the table
  this.activeRowsCount=0;//count of active rows
  this.displayRows=[];//rows currently on display in the table
  this.displayRowsCount=0;//count of display rows
  this.scrollTop=0;this.scrollLeft=0;this.vDomRowHeight=20;//approximation of row heights for padding
  this.vDomTop=0;//hold position for first rendered row in the virtual DOM
  this.vDomBottom=0;//hold possition for last rendered row in the virtual DOM
  this.vDomScrollPosTop=0;//last scroll position of the vDom top;
  this.vDomScrollPosBottom=0;//last scroll position of the vDom bottom;
  this.vDomTopPad=0;//hold value of padding for top of virtual DOM
  this.vDomBottomPad=0;//hold value of padding for bottom of virtual DOM
  this.vDomMaxRenderChain=90;//the maximum number of dom elements that can be rendered in 1 go
  this.vDomWindowBuffer=0;//window row buffer before removing elements, to smooth scrolling
  this.vDomWindowMinTotalRows=20;//minimum number of rows to be generated in virtual dom (prevent buffering issues on tables with tall rows)
  this.vDomWindowMinMarginRows=5;//minimum number of rows to be generated in virtual dom margin
  this.vDomTopNewRows=[];//rows to normalize after appending to optimize render speed
  this.vDomBottomNewRows=[];//rows to normalize after appending to optimize render speed
  this.rowNumColumn=false;//hold column component for row number column
  this.redrawBlock=false;//prevent redraws to allow multiple data manipulations becore continuing
  this.redrawBlockRestoreConfig=false;//store latest redraw function calls for when redraw is needed
  this.redrawBlockRederInPosition=false;//store latest redraw function calls for when redraw is needed
  };//////////////// Setup Functions /////////////////
  RowManager.prototype.createHolderElement=function(){var el=document.createElement("div");el.classList.add("tabulator-tableHolder");el.setAttribute("tabindex",0);return el;};RowManager.prototype.createTableElement=function(){var el=document.createElement("div");el.classList.add("tabulator-table");return el;};//return containing element
  RowManager.prototype.getElement=function(){return this.element;};//return table element
  RowManager.prototype.getTableElement=function(){return this.tableElement;};//return position of row in table
  RowManager.prototype.getRowPosition=function(row,active){if(active){return this.activeRows.indexOf(row);}else {return this.rows.indexOf(row);}};//link to column manager
  RowManager.prototype.setColumnManager=function(manager){this.columnManager=manager;};RowManager.prototype.initialize=function(){var self=this;self.setRenderMode();//initialize manager
  self.element.appendChild(self.tableElement);self.firstRender=true;//scroll header along with table body
  self.element.addEventListener("scroll",function(){var left=self.element.scrollLeft;//handle horizontal scrolling
  if(self.scrollLeft!=left){self.columnManager.scrollHorizontal(left);if(self.table.options.groupBy){self.table.modules.groupRows.scrollHeaders(left);}if(self.table.modExists("columnCalcs")){self.table.modules.columnCalcs.scrollHorizontal(left);}self.table.options.scrollHorizontal(left);}self.scrollLeft=left;});//handle virtual dom scrolling
  if(this.renderMode==="virtual"){self.element.addEventListener("scroll",function(){var top=self.element.scrollTop;var dir=self.scrollTop>top;//handle verical scrolling
  if(self.scrollTop!=top){self.scrollTop=top;self.scrollVertical(dir);if(self.table.options.ajaxProgressiveLoad=="scroll"){self.table.modules.ajax.nextPage(self.element.scrollHeight-self.element.clientHeight-top);}self.table.options.scrollVertical(top);}else {self.scrollTop=top;}});}};////////////////// Row Manipulation //////////////////
  RowManager.prototype.findRow=function(subject){var self=this;if((typeof subject==='undefined'?'undefined':_typeof(subject))=="object"){if(subject instanceof Row){//subject is row element
  return subject;}else if(subject instanceof RowComponent){//subject is public row component
  return subject._getSelf()||false;}else if(typeof HTMLElement!=="undefined"&&subject instanceof HTMLElement){//subject is a HTML element of the row
  var match=self.rows.find(function(row){return row.getElement()===subject;});return match||false;}}else if(typeof subject=="undefined"||subject===null){return false;}else {//subject should be treated as the index of the row
  var _match=self.rows.find(function(row){return row.data[self.table.options.index]==subject;});return _match||false;}//catch all for any other type of input
  return false;};RowManager.prototype.getRowFromDataObject=function(data){var match=this.rows.find(function(row){return row.data===data;});return match||false;};RowManager.prototype.getRowFromPosition=function(position,active){if(active){return this.activeRows[position];}else {return this.rows[position];}};RowManager.prototype.scrollToRow=function(row,position,ifVisible){var _this11=this;var rowIndex=this.getDisplayRows().indexOf(row),rowEl=row.getElement(),rowTop,offset=0;return new Promise(function(resolve,reject){if(rowIndex>-1){if(typeof position==="undefined"){position=_this11.table.options.scrollToRowPosition;}if(typeof ifVisible==="undefined"){ifVisible=_this11.table.options.scrollToRowIfVisible;}if(position==="nearest"){switch(_this11.renderMode){case"classic":rowTop=Tabulator.prototype.helpers.elOffset(rowEl).top;position=Math.abs(_this11.element.scrollTop-rowTop)>Math.abs(_this11.element.scrollTop+_this11.element.clientHeight-rowTop)?"bottom":"top";break;case"virtual":position=Math.abs(_this11.vDomTop-rowIndex)>Math.abs(_this11.vDomBottom-rowIndex)?"bottom":"top";break;}}//check row visibility
  if(!ifVisible){if(Tabulator.prototype.helpers.elVisible(rowEl)){offset=Tabulator.prototype.helpers.elOffset(rowEl).top-Tabulator.prototype.helpers.elOffset(_this11.element).top;if(offset>0&&offset<_this11.element.clientHeight-rowEl.offsetHeight){return false;}}}//scroll to row
  switch(_this11.renderMode){case"classic":_this11.element.scrollTop=Tabulator.prototype.helpers.elOffset(rowEl).top-Tabulator.prototype.helpers.elOffset(_this11.element).top+_this11.element.scrollTop;break;case"virtual":_this11._virtualRenderFill(rowIndex,true);break;}//align to correct position
  switch(position){case"middle":case"center":if(_this11.element.scrollHeight-_this11.element.scrollTop==_this11.element.clientHeight){_this11.element.scrollTop=_this11.element.scrollTop+(rowEl.offsetTop-_this11.element.scrollTop)-(_this11.element.scrollHeight-rowEl.offsetTop)/2;}else {_this11.element.scrollTop=_this11.element.scrollTop-_this11.element.clientHeight/2;}break;case"bottom":if(_this11.element.scrollHeight-_this11.element.scrollTop==_this11.element.clientHeight){_this11.element.scrollTop=_this11.element.scrollTop-(_this11.element.scrollHeight-rowEl.offsetTop)+rowEl.offsetHeight;}else {_this11.element.scrollTop=_this11.element.scrollTop-_this11.element.clientHeight+rowEl.offsetHeight;}break;}resolve();}else {console.warn("Scroll Error - Row not visible");reject("Scroll Error - Row not visible");}});};////////////////// Data Handling //////////////////
  RowManager.prototype.setData=function(data,renderInPosition,columnsChanged){var _this12=this;var self=this;return new Promise(function(resolve,reject){if(renderInPosition&&_this12.getDisplayRows().length){if(self.table.options.pagination){self._setDataActual(data,true);}else {_this12.reRenderInPosition(function(){self._setDataActual(data);});}}else {if(_this12.table.options.autoColumns&&columnsChanged){_this12.table.columnManager.generateColumnsFromRowData(data);}_this12.resetScroll();_this12._setDataActual(data);}resolve();});};RowManager.prototype._setDataActual=function(data,renderInPosition){var self=this;self.table.options.dataLoading.call(this.table,data);this._wipeElements();if(this.table.options.history&&this.table.modExists("history")){this.table.modules.history.clear();}if(Array.isArray(data)){if(this.table.modExists("selectRow")){this.table.modules.selectRow.clearSelectionData();}if(this.table.options.reactiveData&&this.table.modExists("reactiveData",true)){this.table.modules.reactiveData.watchData(data);}data.forEach(function(def,i){if(def&&(typeof def==='undefined'?'undefined':_typeof(def))==="object"){var row=new Row(def,self);self.rows.push(row);}else {console.warn("Data Loading Warning - Invalid row data detected and ignored, expecting object but received:",def);}});self.refreshActiveData(false,false,renderInPosition);self.table.options.dataLoaded.call(this.table,data);}else {console.error("Data Loading Error - Unable to process data due to invalid data type \nExpecting: array \nReceived: ",typeof data==='undefined'?'undefined':_typeof(data),"\nData:     ",data);}};RowManager.prototype._wipeElements=function(){this.rows.forEach(function(row){row.wipe();});if(this.table.options.groupBy&&this.table.modExists("groupRows")){this.table.modules.groupRows.wipe();}this.rows=[];this.activeRows=[];this.activeRowsCount=0;this.displayRows=[];this.displayRowsCount=0;this.adjustTableSize();};RowManager.prototype.deleteRow=function(row,blockRedraw){var allIndex=this.rows.indexOf(row),activeIndex=this.activeRows.indexOf(row);if(activeIndex>-1){this.activeRows.splice(activeIndex,1);}if(allIndex>-1){this.rows.splice(allIndex,1);}this.setActiveRows(this.activeRows);this.displayRowIterator(function(rows){var displayIndex=rows.indexOf(row);if(displayIndex>-1){rows.splice(displayIndex,1);}});if(!blockRedraw){this.reRenderInPosition();}this.regenerateRowNumbers();this.table.options.rowDeleted.call(this.table,row.getComponent());if(this.table.options.dataChanged){this.table.options.dataChanged.call(this.table,this.getData());}if(this.table.options.groupBy&&this.table.modExists("groupRows")){this.table.modules.groupRows.updateGroupRows(true);}else if(this.table.options.pagination&&this.table.modExists("page")){this.refreshActiveData(false,false,true);}else {if(this.table.options.pagination&&this.table.modExists("page")){this.refreshActiveData("page");}}};RowManager.prototype.addRow=function(data,pos,index,blockRedraw){var row=this.addRowActual(data,pos,index,blockRedraw);if(this.table.options.history&&this.table.modExists("history")){this.table.modules.history.action("rowAdd",row,{data:data,pos:pos,index:index});}return row;};//add multiple rows
  RowManager.prototype.addRows=function(data,pos,index){var _this13=this;var self=this,rows=[];return new Promise(function(resolve,reject){pos=_this13.findAddRowPos(pos);if(!Array.isArray(data)){data=[data];}data.length-1;if(typeof index=="undefined"&&pos||typeof index!=="undefined"&&!pos){data.reverse();}data.forEach(function(item,i){var row=self.addRow(item,pos,index,true);rows.push(row);});if(_this13.table.options.groupBy&&_this13.table.modExists("groupRows")){_this13.table.modules.groupRows.updateGroupRows(true);}else if(_this13.table.options.pagination&&_this13.table.modExists("page")){_this13.refreshActiveData(false,false,true);}else {_this13.reRenderInPosition();}//recalc column calculations if present
  if(_this13.table.modExists("columnCalcs")){_this13.table.modules.columnCalcs.recalc(_this13.table.rowManager.activeRows);}_this13.regenerateRowNumbers();resolve(rows);});};RowManager.prototype.findAddRowPos=function(pos){if(typeof pos==="undefined"){pos=this.table.options.addRowPos;}if(pos==="pos"){pos=true;}if(pos==="bottom"){pos=false;}return pos;};RowManager.prototype.addRowActual=function(data,pos,index,blockRedraw){var row=data instanceof Row?data:new Row(data||{},this),top=this.findAddRowPos(pos),allIndex=-1,activeIndex,dispRows;if(!index&&this.table.options.pagination&&this.table.options.paginationAddRow=="page"){dispRows=this.getDisplayRows();if(top){if(dispRows.length){index=dispRows[0];}else {if(this.activeRows.length){index=this.activeRows[this.activeRows.length-1];top=false;}}}else {if(dispRows.length){index=dispRows[dispRows.length-1];top=dispRows.length<this.table.modules.page.getPageSize()?false:true;}}}if(typeof index!=="undefined"){index=this.findRow(index);}if(this.table.options.groupBy&&this.table.modExists("groupRows")){this.table.modules.groupRows.assignRowToGroup(row);var groupRows=row.getGroup().rows;if(groupRows.length>1){if(!index||index&&groupRows.indexOf(index)==-1){if(top){if(groupRows[0]!==row){index=groupRows[0];this._moveRowInArray(row.getGroup().rows,row,index,!top);}}else {if(groupRows[groupRows.length-1]!==row){index=groupRows[groupRows.length-1];this._moveRowInArray(row.getGroup().rows,row,index,!top);}}}else {this._moveRowInArray(row.getGroup().rows,row,index,!top);}}}if(index){allIndex=this.rows.indexOf(index);}if(index&&allIndex>-1){activeIndex=this.activeRows.indexOf(index);this.displayRowIterator(function(rows){var displayIndex=rows.indexOf(index);if(displayIndex>-1){rows.splice(top?displayIndex:displayIndex+1,0,row);}});if(activeIndex>-1){this.activeRows.splice(top?activeIndex:activeIndex+1,0,row);}this.rows.splice(top?allIndex:allIndex+1,0,row);}else {if(top){this.displayRowIterator(function(rows){rows.unshift(row);});this.activeRows.unshift(row);this.rows.unshift(row);}else {this.displayRowIterator(function(rows){rows.push(row);});this.activeRows.push(row);this.rows.push(row);}}this.setActiveRows(this.activeRows);this.table.options.rowAdded.call(this.table,row.getComponent());if(this.table.options.dataChanged){this.table.options.dataChanged.call(this.table,this.getData());}if(!blockRedraw){this.reRenderInPosition();}return row;};RowManager.prototype.moveRow=function(from,to,after){if(this.table.options.history&&this.table.modExists("history")){this.table.modules.history.action("rowMove",from,{posFrom:this.getRowPosition(from),posTo:this.getRowPosition(to),to:to,after:after});}this.moveRowActual(from,to,after);this.regenerateRowNumbers();this.table.options.rowMoved.call(this.table,from.getComponent());};RowManager.prototype.moveRowActual=function(from,to,after){var _this14=this;this._moveRowInArray(this.rows,from,to,after);this._moveRowInArray(this.activeRows,from,to,after);this.displayRowIterator(function(rows){_this14._moveRowInArray(rows,from,to,after);});if(this.table.options.groupBy&&this.table.modExists("groupRows")){if(!after&&to instanceof Group){to=this.table.rowManager.prevDisplayRow(from)||to;}var toGroup=to.getGroup();var fromGroup=from.getGroup();if(toGroup===fromGroup){this._moveRowInArray(toGroup.rows,from,to,after);}else {if(fromGroup){fromGroup.removeRow(from);}toGroup.insertRow(from,to,after);}}};RowManager.prototype._moveRowInArray=function(rows,from,to,after){var fromIndex,toIndex,start,end;if(from!==to){fromIndex=rows.indexOf(from);if(fromIndex>-1){rows.splice(fromIndex,1);toIndex=rows.indexOf(to);if(toIndex>-1){if(after){rows.splice(toIndex+1,0,from);}else {rows.splice(toIndex,0,from);}}else {rows.splice(fromIndex,0,from);}}//restyle rows
  if(rows===this.getDisplayRows()){start=fromIndex<toIndex?fromIndex:toIndex;end=toIndex>fromIndex?toIndex:fromIndex+1;for(var _i4=start;_i4<=end;_i4++){if(rows[_i4]){this.styleRow(rows[_i4],_i4);}}}}};RowManager.prototype.clearData=function(){this.setData([]);};RowManager.prototype.getRowIndex=function(row){return this.findRowIndex(row,this.rows);};RowManager.prototype.getDisplayRowIndex=function(row){var index=this.getDisplayRows().indexOf(row);return index>-1?index:false;};RowManager.prototype.nextDisplayRow=function(row,rowOnly){var index=this.getDisplayRowIndex(row),nextRow=false;if(index!==false&&index<this.displayRowsCount-1){nextRow=this.getDisplayRows()[index+1];}if(nextRow&&(!(nextRow instanceof Row)||nextRow.type!="row")){return this.nextDisplayRow(nextRow,rowOnly);}return nextRow;};RowManager.prototype.prevDisplayRow=function(row,rowOnly){var index=this.getDisplayRowIndex(row),prevRow=false;if(index){prevRow=this.getDisplayRows()[index-1];}if(rowOnly&&prevRow&&(!(prevRow instanceof Row)||prevRow.type!="row")){return this.prevDisplayRow(prevRow,rowOnly);}return prevRow;};RowManager.prototype.findRowIndex=function(row,list){var rowIndex;row=this.findRow(row);if(row){rowIndex=list.indexOf(row);if(rowIndex>-1){return rowIndex;}}return false;};RowManager.prototype.getData=function(active,transform){var output=[],rows=this.getRows(active);rows.forEach(function(row){if(row.type=="row"){output.push(row.getData(transform||"data"));}});return output;};RowManager.prototype.getComponents=function(active){var output=[],rows=this.getRows(active);rows.forEach(function(row){output.push(row.getComponent());});return output;};RowManager.prototype.getDataCount=function(active){var rows=this.getRows(active);return rows.length;};RowManager.prototype._genRemoteRequest=function(){var _this15=this;var table=this.table,options=table.options,params={};if(table.modExists("page")){//set sort data if defined
  if(options.ajaxSorting){var sorters=this.table.modules.sort.getSort();sorters.forEach(function(item){delete item.column;});params[this.table.modules.page.paginationDataSentNames.sorters]=sorters;}//set filter data if defined
  if(options.ajaxFiltering){var filters=this.table.modules.filter.getFilters(true,true);params[this.table.modules.page.paginationDataSentNames.filters]=filters;}this.table.modules.ajax.setParams(params,true);}table.modules.ajax.sendRequest().then(function(data){_this15._setDataActual(data,true);})["catch"](function(e){});};//choose the path to refresh data after a filter update
  RowManager.prototype.filterRefresh=function(){var table=this.table,options=table.options,left=this.scrollLeft;if(options.ajaxFiltering){if(options.pagination=="remote"&&table.modExists("page")){table.modules.page.reset(true);table.modules.page.setPage(1).then(function(){})["catch"](function(){});}else if(options.ajaxProgressiveLoad){table.modules.ajax.loadData().then(function(){})["catch"](function(){});}else {//assume data is url, make ajax call to url to get data
  this._genRemoteRequest();}}else {this.refreshActiveData("filter");}this.scrollHorizontal(left);};//choose the path to refresh data after a sorter update
  RowManager.prototype.sorterRefresh=function(loadOrignalData){var table=this.table,options=this.table.options,left=this.scrollLeft;if(options.ajaxSorting){if((options.pagination=="remote"||options.progressiveLoad)&&table.modExists("page")){table.modules.page.reset(true);table.modules.page.setPage(1).then(function(){})["catch"](function(){});}else if(options.ajaxProgressiveLoad){table.modules.ajax.loadData().then(function(){})["catch"](function(){});}else {//assume data is url, make ajax call to url to get data
  this._genRemoteRequest();}}else {this.refreshActiveData(loadOrignalData?"filter":"sort");}this.scrollHorizontal(left);};RowManager.prototype.scrollHorizontal=function(left){this.scrollLeft=left;this.element.scrollLeft=left;if(this.table.options.groupBy){this.table.modules.groupRows.scrollHeaders(left);}if(this.table.modExists("columnCalcs")){this.table.modules.columnCalcs.scrollHorizontal(left);}};//set active data set
  RowManager.prototype.refreshActiveData=function(stage,skipStage,renderInPosition){var self=this,table=this.table,cascadeOrder=["all","filter","sort","display","freeze","group","tree","page"],displayIndex;if(this.redrawBlock){if(!this.redrawBlockRestoreConfig||cascadeOrder.indexOf(stage)<cascadeOrder.indexOf(this.redrawBlockRestoreConfig.stage)){this.redrawBlockRestoreConfig={stage:stage,skipStage:skipStage,renderInPosition:renderInPosition};}return;}else {if(self.table.modExists("edit")){self.table.modules.edit.cancelEdit();}if(!stage){stage="all";}if(table.options.selectable&&!table.options.selectablePersistence&&table.modExists("selectRow")){table.modules.selectRow.deselectRows();}//cascade through data refresh stages
  switch(stage){case"all":case"filter":if(!skipStage){if(table.modExists("filter")){self.setActiveRows(table.modules.filter.filter(self.rows));}else {self.setActiveRows(self.rows.slice(0));}}else {skipStage=false;}case"sort":if(!skipStage){if(table.modExists("sort")){table.modules.sort.sort(this.activeRows);}}else {skipStage=false;}//regenerate row numbers for row number formatter if in use
  this.regenerateRowNumbers();//generic stage to allow for pipeline trigger after the data manipulation stage
  case"display":this.resetDisplayRows();case"freeze":if(!skipStage){if(this.table.modExists("frozenRows")){if(table.modules.frozenRows.isFrozen()){if(!table.modules.frozenRows.getDisplayIndex()){table.modules.frozenRows.setDisplayIndex(this.getNextDisplayIndex());}displayIndex=table.modules.frozenRows.getDisplayIndex();displayIndex=self.setDisplayRows(table.modules.frozenRows.getRows(this.getDisplayRows(displayIndex-1)),displayIndex);if(displayIndex!==true){table.modules.frozenRows.setDisplayIndex(displayIndex);}}}}else {skipStage=false;}case"group":if(!skipStage){if(table.options.groupBy&&table.modExists("groupRows")){if(!table.modules.groupRows.getDisplayIndex()){table.modules.groupRows.setDisplayIndex(this.getNextDisplayIndex());}displayIndex=table.modules.groupRows.getDisplayIndex();displayIndex=self.setDisplayRows(table.modules.groupRows.getRows(this.getDisplayRows(displayIndex-1)),displayIndex);if(displayIndex!==true){table.modules.groupRows.setDisplayIndex(displayIndex);}}}else {skipStage=false;}case"tree":if(!skipStage){if(table.options.dataTree&&table.modExists("dataTree")){if(!table.modules.dataTree.getDisplayIndex()){table.modules.dataTree.setDisplayIndex(this.getNextDisplayIndex());}displayIndex=table.modules.dataTree.getDisplayIndex();displayIndex=self.setDisplayRows(table.modules.dataTree.getRows(this.getDisplayRows(displayIndex-1)),displayIndex);if(displayIndex!==true){table.modules.dataTree.setDisplayIndex(displayIndex);}}}else {skipStage=false;}if(table.options.pagination&&table.modExists("page")&&!renderInPosition){if(table.modules.page.getMode()=="local"){table.modules.page.reset();}}case"page":if(!skipStage){if(table.options.pagination&&table.modExists("page")){if(!table.modules.page.getDisplayIndex()){table.modules.page.setDisplayIndex(this.getNextDisplayIndex());}displayIndex=table.modules.page.getDisplayIndex();if(table.modules.page.getMode()=="local"){table.modules.page.setMaxRows(this.getDisplayRows(displayIndex-1).length);}displayIndex=self.setDisplayRows(table.modules.page.getRows(this.getDisplayRows(displayIndex-1)),displayIndex);if(displayIndex!==true){table.modules.page.setDisplayIndex(displayIndex);}}}else {skipStage=false;}}if(Tabulator.prototype.helpers.elVisible(self.element)){if(renderInPosition){self.reRenderInPosition();}else {if(stage==="all"&&this.table.options.virtualDomHoz){this.table.vdomHoz.dataChange();}self.renderTable();if(table.options.layoutColumnsOnNewData){self.table.columnManager.redraw(true);}}}if(table.modExists("columnCalcs")){table.modules.columnCalcs.recalc(this.activeRows);}}};//regenerate row numbers for row number formatter if in use
  RowManager.prototype.regenerateRowNumbers=function(){var _this16=this;if(this.rowNumColumn){this.activeRows.forEach(function(row){var cell=row.getCell(_this16.rowNumColumn);if(cell){cell._generateContents();}});}};RowManager.prototype.setActiveRows=function(activeRows){this.activeRows=activeRows;this.activeRowsCount=this.activeRows.length;};//reset display rows array
  RowManager.prototype.resetDisplayRows=function(){this.displayRows=[];this.displayRows.push(this.activeRows.slice(0));this.displayRowsCount=this.displayRows[0].length;if(this.table.modExists("frozenRows")){this.table.modules.frozenRows.setDisplayIndex(0);}if(this.table.options.groupBy&&this.table.modExists("groupRows")){this.table.modules.groupRows.setDisplayIndex(0);}if(this.table.options.pagination&&this.table.modExists("page")){this.table.modules.page.setDisplayIndex(0);}};RowManager.prototype.getNextDisplayIndex=function(){return this.displayRows.length;};//set display row pipeline data
  RowManager.prototype.setDisplayRows=function(displayRows,index){var output=true;if(index&&typeof this.displayRows[index]!="undefined"){this.displayRows[index]=displayRows;output=true;}else {this.displayRows.push(displayRows);output=index=this.displayRows.length-1;}if(index==this.displayRows.length-1){this.displayRowsCount=this.displayRows[this.displayRows.length-1].length;}return output;};RowManager.prototype.getDisplayRows=function(index){if(typeof index=="undefined"){return this.displayRows.length?this.displayRows[this.displayRows.length-1]:[];}else {return this.displayRows[index]||[];}};RowManager.prototype.getVisibleRows=function(viewable){var topEdge=this.element.scrollTop,bottomEdge=this.element.clientHeight+topEdge,topFound=false,topRow=0,bottomRow=0,rows=this.getDisplayRows();if(viewable){this.getDisplayRows();for(var i=this.vDomTop;i<=this.vDomBottom;i++){if(rows[i]){if(!topFound){if(topEdge-rows[i].getElement().offsetTop>=0){topRow=i;}else {topFound=true;if(bottomEdge-rows[i].getElement().offsetTop>=0){bottomRow=i;}else {break;}}}else {if(bottomEdge-rows[i].getElement().offsetTop>=0){bottomRow=i;}else {break;}}}}}else {topRow=this.vDomTop;bottomRow=this.vDomBottom;}return rows.slice(topRow,bottomRow+1);};//repeat action accross display rows
  RowManager.prototype.displayRowIterator=function(callback){this.displayRows.forEach(callback);this.displayRowsCount=this.displayRows[this.displayRows.length-1].length;};//return only actual rows (not group headers etc)
  RowManager.prototype.getRows=function(active){var rows;switch(active){case"active":rows=this.activeRows;break;case"display":rows=this.table.rowManager.getDisplayRows();break;case"visible":rows=this.getVisibleRows(true);break;case"selected":rows=this.table.modules.selectRow.selectedRows;break;default:rows=this.rows;}return rows;};///////////////// Table Rendering /////////////////
  //trigger rerender of table in current position
  RowManager.prototype.reRenderInPosition=function(callback){if(this.getRenderMode()=="virtual"){if(this.redrawBlock){if(callback){callback();}else {this.redrawBlockRederInPosition=true;}}else {var scrollTop=this.element.scrollTop;var topRow=false;var topOffset=false;var left=this.scrollLeft;var rows=this.getDisplayRows();for(var i=this.vDomTop;i<=this.vDomBottom;i++){if(rows[i]){var diff=scrollTop-rows[i].getElement().offsetTop;if(topOffset===false||Math.abs(diff)<topOffset){topOffset=diff;topRow=i;}else {break;}}}if(callback){callback();}this._virtualRenderFill(topRow===false?this.displayRowsCount-1:topRow,true,topOffset||0);this.scrollHorizontal(left);}}else {this.renderTable();if(callback){callback();}}};RowManager.prototype.setRenderMode=function(){if(this.table.options.virtualDom){this.renderMode="virtual";if(this.table.element.clientHeight||this.table.options.height){this.fixedHeight=true;}else {this.fixedHeight=false;}}else {this.renderMode="classic";}};RowManager.prototype.getRenderMode=function(){return this.renderMode;};RowManager.prototype.renderTable=function(){this.table.options.renderStarted.call(this.table);this.element.scrollTop=0;switch(this.renderMode){case"classic":this._simpleRender();break;case"virtual":this._virtualRenderFill();break;}if(this.firstRender){if(this.displayRowsCount){this.firstRender=false;this.table.modules.layout.layout();}else {this.renderEmptyScroll();}}if(this.table.modExists("frozenColumns")){this.table.modules.frozenColumns.layout();}if(!this.displayRowsCount){if(this.table.options.placeholder){this.table.options.placeholder.setAttribute("tabulator-render-mode",this.renderMode);this.getElement().appendChild(this.table.options.placeholder);this.table.options.placeholder.style.width=this.table.columnManager.getWidth()+"px";}}this.table.options.renderComplete.call(this.table);};//simple render on heightless table
  RowManager.prototype._simpleRender=function(){this._clearVirtualDom();if(this.displayRowsCount){this.checkClassicModeGroupHeaderWidth();}else {this.renderEmptyScroll();}};RowManager.prototype.checkClassicModeGroupHeaderWidth=function(){var self=this,element=this.tableElement,onlyGroupHeaders=true;self.getDisplayRows().forEach(function(row,index){self.styleRow(row,index);element.appendChild(row.getElement());row.initialize(true);if(row.type!=="group"){onlyGroupHeaders=false;}});if(onlyGroupHeaders){element.style.minWidth=self.table.columnManager.getWidth()+"px";}else {element.style.minWidth="";}};//show scrollbars on empty table div
  RowManager.prototype.renderEmptyScroll=function(){if(this.table.options.placeholder){this.tableElement.style.display="none";}else {this.tableElement.style.minWidth=this.table.columnManager.getWidth()+"px";// this.tableElement.style.minHeight = "1px";
  // this.tableElement.style.visibility = "hidden";
  }};RowManager.prototype._clearVirtualDom=function(){var element=this.tableElement;if(this.table.options.placeholder&&this.table.options.placeholder.parentNode){this.table.options.placeholder.parentNode.removeChild(this.table.options.placeholder);}// element.children.detach();
  while(element.firstChild){element.removeChild(element.firstChild);}element.style.paddingTop="";element.style.paddingBottom="";element.style.minWidth="";element.style.minHeight="";element.style.display="";element.style.visibility="";this.scrollTop=0;this.scrollLeft=0;this.vDomTop=0;this.vDomBottom=0;this.vDomTopPad=0;this.vDomBottomPad=0;};RowManager.prototype.styleRow=function(row,index){var rowEl=row.getElement();if(index%2){rowEl.classList.add("tabulator-row-even");rowEl.classList.remove("tabulator-row-odd");}else {rowEl.classList.add("tabulator-row-odd");rowEl.classList.remove("tabulator-row-even");}};//full virtual render
  RowManager.prototype._virtualRenderFill=function(position,forceMove,offset){var self=this,element=self.tableElement,holder=self.element,topPad=0,rowsHeight=0,topPadHeight=0,i=0,onlyGroupHeaders=true,rows=self.getDisplayRows();position=position||0;offset=offset||0;if(!position){self._clearVirtualDom();}else {while(element.firstChild){element.removeChild(element.firstChild);}//check if position is too close to bottom of table
  var heightOccupied=(self.displayRowsCount-position+1)*self.vDomRowHeight;if(heightOccupied<self.height){position-=Math.ceil((self.height-heightOccupied)/self.vDomRowHeight);if(position<0){position=0;}}//calculate initial pad
  topPad=Math.min(Math.max(Math.floor(self.vDomWindowBuffer/self.vDomRowHeight),self.vDomWindowMinMarginRows),position);position-=topPad;}if(self.displayRowsCount&&Tabulator.prototype.helpers.elVisible(self.element)){self.vDomTop=position;self.vDomBottom=position-1;while((rowsHeight<=self.height+self.vDomWindowBuffer||i<self.vDomWindowMinTotalRows)&&self.vDomBottom<self.displayRowsCount-1){var index=self.vDomBottom+1,row=rows[index],rowHeight=0;self.styleRow(row,index);element.appendChild(row.getElement());row.initialize();if(!row.heightInitialized){row.normalizeHeight(true);}// if(!row.initialized){
  // 	row.initialize(true);
  // }else{
  // 	if(!row.heightInitialized){
  // 		row.normalizeHeight(true);
  // 	}
  // }
  rowHeight=row.getHeight();if(i<topPad){topPadHeight+=rowHeight;}else {rowsHeight+=rowHeight;}if(rowHeight>this.vDomWindowBuffer){this.vDomWindowBuffer=rowHeight*2;}if(row.type!=="group"){onlyGroupHeaders=false;}self.vDomBottom++;i++;}if(!position){this.vDomTopPad=0;//adjust rowheight to match average of rendered elements
  self.vDomRowHeight=Math.floor((rowsHeight+topPadHeight)/i);self.vDomBottomPad=self.vDomRowHeight*(self.displayRowsCount-self.vDomBottom-1);self.vDomScrollHeight=topPadHeight+rowsHeight+self.vDomBottomPad-self.height;}else {self.vDomTopPad=!forceMove?self.scrollTop-topPadHeight:self.vDomRowHeight*this.vDomTop+offset;self.vDomBottomPad=self.vDomBottom==self.displayRowsCount-1?0:Math.max(self.vDomScrollHeight-self.vDomTopPad-rowsHeight-topPadHeight,0);}element.style.paddingTop=self.vDomTopPad+"px";element.style.paddingBottom=self.vDomBottomPad+"px";if(forceMove){this.scrollTop=self.vDomTopPad+topPadHeight+offset-(this.element.scrollWidth>this.element.clientWidth?this.element.offsetHeight-this.element.clientHeight:0);}this.scrollTop=Math.min(this.scrollTop,this.element.scrollHeight-this.height);//adjust for horizontal scrollbar if present (and not at top of table)
  if(this.element.scrollWidth>this.element.offsetWidth&&forceMove){this.scrollTop+=this.element.offsetHeight-this.element.clientHeight;}this.vDomScrollPosTop=this.scrollTop;this.vDomScrollPosBottom=this.scrollTop;holder.scrollTop=this.scrollTop;element.style.minWidth=onlyGroupHeaders?self.table.columnManager.getWidth()+"px":"";if(self.table.options.groupBy){if(self.table.modules.layout.getMode()!="fitDataFill"&&self.displayRowsCount==self.table.modules.groupRows.countGroups()){self.tableElement.style.minWidth=self.table.columnManager.getWidth();}}}else {this.renderEmptyScroll();}if(!this.fixedHeight){this.adjustTableSize();}};//handle vertical scrolling
  RowManager.prototype.scrollVertical=function(dir){var topDiff=this.scrollTop-this.vDomScrollPosTop;var bottomDiff=this.scrollTop-this.vDomScrollPosBottom;var margin=this.vDomWindowBuffer*2;if(-topDiff>margin||bottomDiff>margin){//if big scroll redraw table;
  var left=this.scrollLeft;this._virtualRenderFill(Math.floor(this.element.scrollTop/this.element.scrollHeight*this.displayRowsCount));this.scrollHorizontal(left);}else {if(dir){//scrolling up
  if(topDiff<0){this._addTopRow(-topDiff);}if(bottomDiff<0){//hide bottom row if needed
  if(this.vDomScrollHeight-this.scrollTop>this.vDomWindowBuffer){this._removeBottomRow(-bottomDiff);}else {this.vDomScrollPosBottom=this.scrollTop;}}}else {//scrolling down
  if(topDiff>=0){//hide top row if needed
  if(this.scrollTop>this.vDomWindowBuffer){this._removeTopRow(topDiff);}else {this.vDomScrollPosTop=this.scrollTop;}}if(bottomDiff>=0){this._addBottomRow(bottomDiff);}}}};RowManager.prototype._addTopRow=function(topDiff){var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var table=this.tableElement,rows=this.getDisplayRows();if(this.vDomTop){var index=this.vDomTop-1,topRow=rows[index],topRowHeight=topRow.getHeight()||this.vDomRowHeight;//hide top row if needed
  if(topDiff>=topRowHeight){this.styleRow(topRow,index);table.insertBefore(topRow.getElement(),table.firstChild);if(!topRow.initialized||!topRow.heightInitialized){this.vDomTopNewRows.push(topRow);if(!topRow.heightInitialized){topRow.clearCellHeight();}}topRow.initialize();this.vDomTopPad-=topRowHeight;if(this.vDomTopPad<0){this.vDomTopPad=index*this.vDomRowHeight;}if(!index){this.vDomTopPad=0;}table.style.paddingTop=this.vDomTopPad+"px";this.vDomScrollPosTop-=topRowHeight;this.vDomTop--;}topDiff=-(this.scrollTop-this.vDomScrollPosTop);if(topRow.getHeight()>this.vDomWindowBuffer){this.vDomWindowBuffer=topRow.getHeight()*2;}if(i<this.vDomMaxRenderChain&&this.vDomTop&&topDiff>=(rows[this.vDomTop-1].getHeight()||this.vDomRowHeight)){this._addTopRow(topDiff,i+1);}else {this._quickNormalizeRowHeight(this.vDomTopNewRows);}}};RowManager.prototype._removeTopRow=function(topDiff){var table=this.tableElement,topRow=this.getDisplayRows()[this.vDomTop],topRowHeight=topRow.getHeight()||this.vDomRowHeight;if(topDiff>=topRowHeight){var rowEl=topRow.getElement();rowEl.parentNode.removeChild(rowEl);this.vDomTopPad+=topRowHeight;table.style.paddingTop=this.vDomTopPad+"px";this.vDomScrollPosTop+=this.vDomTop?topRowHeight:topRowHeight+this.vDomWindowBuffer;this.vDomTop++;topDiff=this.scrollTop-this.vDomScrollPosTop;this._removeTopRow(topDiff);}};RowManager.prototype._addBottomRow=function(bottomDiff){var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var table=this.tableElement,rows=this.getDisplayRows();if(this.vDomBottom<this.displayRowsCount-1){var index=this.vDomBottom+1,bottomRow=rows[index],bottomRowHeight=bottomRow.getHeight()||this.vDomRowHeight;//hide bottom row if needed
  if(bottomDiff>=bottomRowHeight){this.styleRow(bottomRow,index);table.appendChild(bottomRow.getElement());if(!bottomRow.initialized||!bottomRow.heightInitialized){this.vDomBottomNewRows.push(bottomRow);if(!bottomRow.heightInitialized){bottomRow.clearCellHeight();}}bottomRow.initialize();this.vDomBottomPad-=bottomRowHeight;if(this.vDomBottomPad<0||index==this.displayRowsCount-1){this.vDomBottomPad=0;}table.style.paddingBottom=this.vDomBottomPad+"px";this.vDomScrollPosBottom+=bottomRowHeight;this.vDomBottom++;}bottomDiff=this.scrollTop-this.vDomScrollPosBottom;if(bottomRow.getHeight()>this.vDomWindowBuffer){this.vDomWindowBuffer=bottomRow.getHeight()*2;}if(i<this.vDomMaxRenderChain&&this.vDomBottom<this.displayRowsCount-1&&bottomDiff>=(rows[this.vDomBottom+1].getHeight()||this.vDomRowHeight)){this._addBottomRow(bottomDiff,i+1);}else {this._quickNormalizeRowHeight(this.vDomBottomNewRows);}}};RowManager.prototype._removeBottomRow=function(bottomDiff){var table=this.tableElement,bottomRow=this.getDisplayRows()[this.vDomBottom],bottomRowHeight=bottomRow.getHeight()||this.vDomRowHeight;if(bottomDiff>=bottomRowHeight){var rowEl=bottomRow.getElement();if(rowEl.parentNode){rowEl.parentNode.removeChild(rowEl);}this.vDomBottomPad+=bottomRowHeight;if(this.vDomBottomPad<0){this.vDomBottomPad=0;}table.style.paddingBottom=this.vDomBottomPad+"px";this.vDomScrollPosBottom-=bottomRowHeight;this.vDomBottom--;bottomDiff=-(this.scrollTop-this.vDomScrollPosBottom);this._removeBottomRow(bottomDiff);}};RowManager.prototype._quickNormalizeRowHeight=function(rows){rows.forEach(function(row){row.calcHeight();});rows.forEach(function(row){row.setCellHeight();});rows.length=0;};//normalize height of active rows
  RowManager.prototype.normalizeHeight=function(){this.activeRows.forEach(function(row){row.normalizeHeight();});};//adjust the height of the table holder to fit in the Tabulator element
  RowManager.prototype.adjustTableSize=function(){var initialHeight=this.element.clientHeight,modExists;if(this.renderMode==="virtual"){var otherHeight=Math.floor(this.columnManager.getElement().getBoundingClientRect().height+(this.table.footerManager&&this.table.footerManager.active&&!this.table.footerManager.external?this.table.footerManager.getElement().getBoundingClientRect().height:0));if(this.fixedHeight){this.element.style.minHeight="calc(100% - "+otherHeight+"px)";this.element.style.height="calc(100% - "+otherHeight+"px)";this.element.style.maxHeight="calc(100% - "+otherHeight+"px)";}else {this.element.style.height="";this.element.style.height=this.table.element.clientHeight-otherHeight+"px";this.element.scrollTop=this.scrollTop;}this.height=this.element.clientHeight;this.vDomWindowBuffer=this.table.options.virtualDomBuffer||this.height;//check if the table has changed size when dealing with variable height tables
  if(!this.fixedHeight&&initialHeight!=this.element.clientHeight){modExists=this.table.modExists("resizeTable");if(modExists&&!this.table.modules.resizeTable.autoResize||!modExists){this.redraw();}}}};//renitialize all rows
  RowManager.prototype.reinitialize=function(){this.rows.forEach(function(row){row.reinitialize(true);});};//prevent table from being redrawn
  RowManager.prototype.blockRedraw=function(){this.redrawBlock=true;this.redrawBlockRestoreConfig=false;};//restore table redrawing
  RowManager.prototype.restoreRedraw=function(){this.redrawBlock=false;if(this.redrawBlockRestoreConfig){this.refreshActiveData(this.redrawBlockRestoreConfig.stage,this.redrawBlockRestoreConfig.skipStage,this.redrawBlockRestoreConfig.renderInPosition);this.redrawBlockRestoreConfig=false;}else {if(this.redrawBlockRederInPosition){this.reRenderInPosition();}}this.redrawBlockRederInPosition=false;};//redraw table
  RowManager.prototype.redraw=function(force){var left=this.scrollLeft;this.adjustTableSize();this.table.tableWidth=this.table.element.clientWidth;if(!force){if(this.renderMode=="classic"){if(this.table.options.groupBy){this.refreshActiveData("group",false,false);}else {this._simpleRender();}}else {this.reRenderInPosition();this.scrollHorizontal(left);}if(!this.displayRowsCount){if(this.table.options.placeholder){this.getElement().appendChild(this.table.options.placeholder);}}}else {this.renderTable();}};RowManager.prototype.resetScroll=function(){this.element.scrollLeft=0;this.element.scrollTop=0;if(this.table.browser==="ie"){var event=document.createEvent("Event");event.initEvent("scroll",false,true);this.element.dispatchEvent(event);}else {this.element.dispatchEvent(new Event('scroll'));}};var VDomHoz=function VDomHoz(table){this.table=table;this.element=this.table.rowManager.tableElement;this.holderEl=this.table.rowManager.element;this.leftCol=0;this.rightCol=0;this.scrollLeft=0;this.vDomScrollPosLeft=0;this.vDomScrollPosRight=0;this.vDomPadLeft=0;this.vDomPadRight=0;this.fitDataColAvg=0;this.window=200;//pixel margin to make column visible before it is shown on screen
  this.initialized=false;this.columns=[];if(this.compatabilityCheck()){this.initialize();}};VDomHoz.prototype.compatabilityCheck=function(){var options=this.table.options,frozen=false,ok=true;if(options.layout=="fitDataTable"){console.warn("Horizontal Vitrual DOM is not compatible with fitDataTable layout mode");ok=false;}if(options.responsiveLayout){console.warn("Horizontal Vitrual DOM is not compatible with responsive columns");ok=false;}if(this.table.rtl){console.warn("Horizontal Vitrual DOM is not currently compatible with RTL text direction");ok=false;}// if(options.rowFormatter){
  // 	console.warn("Horizontal Vitrual DOM is not compatible with row formatters");
  // 	ok = false;
  // }
  if(options.columns){frozen=options.columns.find(function(col){return col.frozen;});if(frozen){console.warn("Horizontal Vitrual DOM is not compatible with frozen columns");ok=false;}}if(!ok){options.virtualDomHoz=false;}return ok;};VDomHoz.prototype.initialize=function(){var _this17=this;this.holderEl.addEventListener("scroll",function(){var left=_this17.holderEl.scrollLeft;if(_this17.scrollLeft!=left){_this17.scrollLeft=left;_this17.scroll(left-(_this17.vDomScrollPosLeft+_this17.window));}});};VDomHoz.prototype.deinitialize=function(){this.initialized=false;};VDomHoz.prototype.clear=function(){this.columns=[];this.leftCol=-1;this.rightCol=0;this.vDomScrollPosLeft=0;this.vDomScrollPosRight=0;this.vDomPadLeft=0;this.vDomPadRight=0;};VDomHoz.prototype.dataChange=function(){var change=false,collsWidth=0,colEnd=0,group,row,rowEl;if(this.table.options.layout==="fitData"){this.table.columnManager.columnsByIndex.forEach(function(column){if(!column.definition.width&&column.visible){change=true;}});if(change){if(change&&this.table.rowManager.getDisplayRows().length){// this.table.vdomHoz.deinitialize();
  this.vDomScrollPosRight=this.scrollLeft+this.holderEl.clientWidth+this.window;if(this.table.options.groupBy){group=this.table.modules.groupRows.getGroups(false)[0];row=group.getRows(false)[0];}else {row=this.table.rowManager.getDisplayRows()[0];}if(row){rowEl=row.getElement();row.generateCells();this.element.appendChild(rowEl);for(var colEnd=0;colEnd<row.cells.length;colEnd++){var cell=row.cells[colEnd];rowEl.appendChild(cell.getElement());cell.column.reinitializeWidth();collsWidth+=cell.column.getWidth();if(collsWidth>this.vDomScrollPosRight){break;}}rowEl.parentNode.removeChild(rowEl);this.fitDataColAvg=Math.floor(collsWidth/(colEnd+1));for(colEnd;colEnd<this.table.columnManager.columnsByIndex.length;colEnd++){this.table.columnManager.columnsByIndex[colEnd].setWidth(this.fitDataColAvg);}this.reinitialize(false,true);}}}}else {if(this.table.options.layout==="fitColumns"){this.table.modules.layout.layout();this.table.vdomHoz.reinitialize(false,true);}}};VDomHoz.prototype.fitDataLayoutOverride=function(){for(var _i5=this.leftCol;_i5<=this.rightCol;_i5++){this.columns[_i5].reinitializeWidth();}};VDomHoz.prototype.reinitialize=function(update,blockRedraw){var _this18=this;var old={cols:this.columns,leftCol:this.leftCol,rightCol:this.rightCol};if(update&&!this.initialized){return;}this.clear();this.scrollLeft=this.holderEl.scrollLeft;this.vDomScrollPosLeft=this.scrollLeft-this.window;this.vDomScrollPosRight=this.scrollLeft+this.holderEl.clientWidth+this.window;var colPos=0;this.table.columnManager.columnsByIndex.forEach(function(column){var config={};if(column.visible){var width=column.getWidth();config.leftPos=colPos;config.rightPos=colPos+width;if(colPos+width>_this18.vDomScrollPosLeft&&colPos<_this18.vDomScrollPosRight){//column is visible
  if(_this18.leftCol==-1){_this18.leftCol=_this18.columns.length;_this18.vDomPadLeft=colPos;}_this18.rightCol=_this18.columns.length;}else {// column is hidden
  if(_this18.leftCol!==-1){_this18.vDomPadRight+=width;}}_this18.columns.push(column);column.modules.vdomHoz=config;colPos+=width;}});this.element.style.paddingLeft=this.vDomPadLeft+"px";this.element.style.paddingRight=this.vDomPadRight+"px";this.initialized=true;if(!blockRedraw){if(!update||this.reinitChanged(old)){this.renitializeRows();}}this.holderEl.scrollLeft=this.scrollLeft;};VDomHoz.prototype.reinitChanged=function(old){var _this19=this;var match=true;if(old.cols.length!==this.columns.length||old.leftCol!==this.leftCol||old.rightCol!==this.rightCol){return true;}old.cols.forEach(function(col,i){if(col!==_this19.columns[i]){match=false;}});return !match;};VDomHoz.prototype.renitializeRows=function(){var _this20=this;var rows=this.table.rowManager.getVisibleRows();rows.forEach(function(row){_this20.reinitializeRow(row,true);});};VDomHoz.prototype.scroll=function(diff){this.vDomScrollPosLeft+=diff;this.vDomScrollPosRight+=diff;if(diff>this.holderEl.clientWidth*.8){this.reinitialize();}else {if(diff>0){//scroll right
  this.addColRight();this.removeColLeft();}else {//scroll left
  this.addColLeft();this.removeColRight();}}};VDomHoz.prototype.colPositionAdjust=function(start,end,diff){for(var _i6=start;_i6<end;_i6++){var column=this.columns[_i6];column.modules.vdomHoz.leftPos-=diff;column.modules.vdomHoz.rightPos-=diff;}};VDomHoz.prototype.addColRight=function(){var column=this.columns[this.rightCol+1],rows,oldWidth,widthDiff;if(column&&column.modules.vdomHoz.leftPos<=this.vDomScrollPosRight){rows=this.table.rowManager.getVisibleRows();rows.forEach(function(row){if(row.type!=="group"){var cell=row.getCell(column);row.getElement().appendChild(cell.getElement());cell.cellRendered();}});if(this.fitDataColAvg){oldWidth=column.getWidth();if(oldWidth===this.fitDataColAvg){column.reinitializeWidth();widthDiff=oldWidth-column.getWidth();if(widthDiff){column.modules.vdomHoz.rightPos-=widthDiff;this.colPositionAdjust(this.rightCol+1,this.columns.length,widthDiff);}}}this.rightCol++;if(this.rightCol>=this.columns.length-1){this.vDomPadRight=0;}else {this.vDomPadRight-=column.getWidth();}this.element.style.paddingRight=this.vDomPadRight+"px";this.addColRight();}};VDomHoz.prototype.addColLeft=function(){var column=this.columns[this.leftCol-1],rows;if(column&&column.modules.vdomHoz.rightPos>=this.vDomScrollPosLeft){var rows=this.table.rowManager.getVisibleRows();rows.forEach(function(row){if(row.type!=="group"){var cell=row.getCell(column);row.getElement().prepend(cell.getElement());cell.cellRendered();}});if(!this.leftCol){this.vDomPadLeft=0;}else {this.vDomPadLeft-=column.getWidth();}this.element.style.paddingLeft=this.vDomPadLeft+"px";this.leftCol--;this.addColLeft();}};VDomHoz.prototype.removeColRight=function(column){var column=this.columns[this.rightCol],rows;if(column&&column.modules.vdomHoz.leftPos>this.vDomScrollPosRight){rows=this.table.rowManager.getVisibleRows();column.modules.vdomHoz.visible=false;rows.forEach(function(row){if(row.type!=="group"){var cell=row.getCell(column);row.getElement().removeChild(cell.getElement());}});this.vDomPadRight+=column.getWidth();this.element.style.paddingRight=this.vDomPadRight+"px";this.rightCol--;this.removeColRight();}};VDomHoz.prototype.removeColLeft=function(){var column=this.columns[this.leftCol],rows;if(column&&column.modules.vdomHoz.rightPos<this.vDomScrollPosLeft){rows=this.table.rowManager.getVisibleRows();rows.forEach(function(row){if(row.type!=="group"){var cell=row.getCell(column);row.getElement().removeChild(cell.getElement());}});this.vDomPadLeft+=column.getWidth();this.element.style.paddingLeft=this.vDomPadLeft+"px";this.leftCol++;this.removeColLeft();}};VDomHoz.prototype.initializeRow=function(row){if(row.type!=="group"){row.modules.vdomHoz={leftCol:this.leftCol,rightCol:this.rightCol};for(var _i7=this.leftCol;_i7<=this.rightCol;_i7++){var column=this.columns[_i7];if(column&&column.visible){var cell=row.getCell(column);row.getElement().appendChild(cell.getElement());cell.cellRendered();}}}};VDomHoz.prototype.reinitializeRow=function(row,force){if(row.type!=="group"){if(force||!row.modules.vdomHoz||row.modules.vdomHoz.leftCol!==this.leftCol||row.modules.vdomHoz.rightCol!==this.rightCol){var rowEl=row.getElement();while(rowEl.firstChild){rowEl.removeChild(rowEl.firstChild);}this.initializeRow(row);}}};//public row object
  var RowComponent=function RowComponent(row){this._row=row;};RowComponent.prototype.getData=function(transform){return this._row.getData(transform);};RowComponent.prototype.getElement=function(){return this._row.getElement();};RowComponent.prototype.getCells=function(){var cells=[];this._row.getCells().forEach(function(cell){cells.push(cell.getComponent());});return cells;};RowComponent.prototype.getCell=function(column){var cell=this._row.getCell(column);return cell?cell.getComponent():false;};RowComponent.prototype.getIndex=function(){return this._row.getData("data")[this._row.table.options.index];};RowComponent.prototype.getPosition=function(active){return this._row.table.rowManager.getRowPosition(this._row,active);};RowComponent.prototype["delete"]=function(){return this._row["delete"]();};RowComponent.prototype.scrollTo=function(){return this._row.table.rowManager.scrollToRow(this._row);};RowComponent.prototype.pageTo=function(){if(this._row.table.modExists("page",true)){return this._row.table.modules.page.setPageToRow(this._row);}};RowComponent.prototype.move=function(to,after){this._row.moveToRow(to,after);};RowComponent.prototype.update=function(data){return this._row.updateData(data);};RowComponent.prototype.normalizeHeight=function(){this._row.normalizeHeight(true);};RowComponent.prototype.select=function(){this._row.table.modules.selectRow.selectRows(this._row);};RowComponent.prototype.deselect=function(){this._row.table.modules.selectRow.deselectRows(this._row);};RowComponent.prototype.toggleSelect=function(){this._row.table.modules.selectRow.toggleRow(this._row);};RowComponent.prototype.isSelected=function(){return this._row.table.modules.selectRow.isRowSelected(this._row);};RowComponent.prototype._getSelf=function(){return this._row;};RowComponent.prototype.validate=function(){return this._row.validate();};RowComponent.prototype.freeze=function(){if(this._row.table.modExists("frozenRows",true)){this._row.table.modules.frozenRows.freezeRow(this._row);}};RowComponent.prototype.unfreeze=function(){if(this._row.table.modExists("frozenRows",true)){this._row.table.modules.frozenRows.unfreezeRow(this._row);}};RowComponent.prototype.isFrozen=function(){if(this._row.table.modExists("frozenRows",true)){var index=this._row.table.modules.frozenRows.rows.indexOf(this._row);return index>-1;}return false;};RowComponent.prototype.treeCollapse=function(){if(this._row.table.modExists("dataTree",true)){this._row.table.modules.dataTree.collapseRow(this._row);}};RowComponent.prototype.treeExpand=function(){if(this._row.table.modExists("dataTree",true)){this._row.table.modules.dataTree.expandRow(this._row);}};RowComponent.prototype.treeToggle=function(){if(this._row.table.modExists("dataTree",true)){this._row.table.modules.dataTree.toggleRow(this._row);}};RowComponent.prototype.getTreeParent=function(){if(this._row.table.modExists("dataTree",true)){return this._row.table.modules.dataTree.getTreeParent(this._row);}return false;};RowComponent.prototype.getTreeChildren=function(){if(this._row.table.modExists("dataTree",true)){return this._row.table.modules.dataTree.getTreeChildren(this._row,true);}return false;};RowComponent.prototype.addTreeChild=function(data,pos,index){if(this._row.table.modExists("dataTree",true)){return this._row.table.modules.dataTree.addTreeChildRow(this._row,data,pos,index);}return false;};RowComponent.prototype.reformat=function(){return this._row.reinitialize();};RowComponent.prototype.getGroup=function(){return this._row.getGroup().getComponent();};RowComponent.prototype.getTable=function(){return this._row.table;};RowComponent.prototype.getNextRow=function(){var row=this._row.nextRow();return row?row.getComponent():row;};RowComponent.prototype.getPrevRow=function(){var row=this._row.prevRow();return row?row.getComponent():row;};var Row=function Row(data,parent){var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"row";this.table=parent.table;this.parent=parent;this.data={};this.type=type;//type of element
  this.element=false;this.modules={};//hold module variables;
  this.cells=[];this.height=0;//hold element height
  this.heightStyled="";//hold element height prestyled to improve render efficiency
  this.manualHeight=false;//user has manually set row height
  this.outerHeight=0;//holde lements outer height
  this.initialized=false;//element has been rendered
  this.heightInitialized=false;//element has resized cells to fit
  this.component=null;this.created=false;this.setData(data);};Row.prototype.create=function(){if(!this.created){this.created=true;this.generateElement();}};Row.prototype.createElement=function(){var el=document.createElement("div");el.classList.add("tabulator-row");el.setAttribute("role","row");this.element=el;};Row.prototype.getElement=function(){this.create();return this.element;};Row.prototype.detachElement=function(){if(this.element&&this.element.parentNode){this.element.parentNode.removeChild(this.element);}};Row.prototype.generateElement=function(){var self=this,dblTap,tapHold,tap;this.createElement();//set row selection characteristics
  if(self.table.options.selectable!==false&&self.table.modExists("selectRow")){self.table.modules.selectRow.initializeRow(this);}//setup movable rows
  if(self.table.options.movableRows!==false&&self.table.modExists("moveRow")){self.table.modules.moveRow.initializeRow(this);}//setup data tree
  if(self.table.options.dataTree!==false&&self.table.modExists("dataTree")){self.table.modules.dataTree.initializeRow(this);}//setup column colapse container
  if(self.table.options.responsiveLayout==="collapse"&&self.table.modExists("responsiveLayout")){self.table.modules.responsiveLayout.initializeRow(this);}//set column menu
  if((self.table.options.rowContextMenu||self.table.options.rowClickMenu)&&this.table.modExists("menu")){self.table.modules.menu.initializeRow(this);}//handle row click events
  if(self.table.options.rowClick){self.element.addEventListener("click",function(e){self.table.options.rowClick(e,self.getComponent());});}if(self.table.options.rowDblClick){self.element.addEventListener("dblclick",function(e){self.table.options.rowDblClick(e,self.getComponent());});}if(self.table.options.rowContext){self.element.addEventListener("contextmenu",function(e){self.table.options.rowContext(e,self.getComponent());});}//handle mouse events
  if(self.table.options.rowMouseEnter){self.element.addEventListener("mouseenter",function(e){self.table.options.rowMouseEnter(e,self.getComponent());});}if(self.table.options.rowMouseLeave){self.element.addEventListener("mouseleave",function(e){self.table.options.rowMouseLeave(e,self.getComponent());});}if(self.table.options.rowMouseOver){self.element.addEventListener("mouseover",function(e){self.table.options.rowMouseOver(e,self.getComponent());});}if(self.table.options.rowMouseOut){self.element.addEventListener("mouseout",function(e){self.table.options.rowMouseOut(e,self.getComponent());});}if(self.table.options.rowMouseMove){self.element.addEventListener("mousemove",function(e){self.table.options.rowMouseMove(e,self.getComponent());});}if(self.table.options.rowTap){tap=false;self.element.addEventListener("touchstart",function(e){tap=true;},{passive:true});self.element.addEventListener("touchend",function(e){if(tap){self.table.options.rowTap(e,self.getComponent());}tap=false;});}if(self.table.options.rowDblTap){dblTap=null;self.element.addEventListener("touchend",function(e){if(dblTap){clearTimeout(dblTap);dblTap=null;self.table.options.rowDblTap(e,self.getComponent());}else {dblTap=setTimeout(function(){clearTimeout(dblTap);dblTap=null;},300);}});}if(self.table.options.rowTapHold){tapHold=null;self.element.addEventListener("touchstart",function(e){clearTimeout(tapHold);tapHold=setTimeout(function(){clearTimeout(tapHold);tapHold=null;tap=false;self.table.options.rowTapHold(e,self.getComponent());},1000);},{passive:true});self.element.addEventListener("touchend",function(e){clearTimeout(tapHold);tapHold=null;});}};Row.prototype.generateCells=function(){this.cells=this.table.columnManager.generateCells(this);};//functions to setup on first render
  Row.prototype.initialize=function(force){var _this21=this;this.create();if(!this.initialized||force){this.deleteCells();while(this.element.firstChild){this.element.removeChild(this.element.firstChild);}//handle frozen cells
  if(this.table.modExists("frozenColumns")){this.table.modules.frozenColumns.layoutRow(this);}this.generateCells();if(this.table.options.virtualDomHoz&&this.table.vdomHoz.initialized){this.table.vdomHoz.initializeRow(this);}else {this.cells.forEach(function(cell){_this21.element.appendChild(cell.getElement());cell.cellRendered();});}if(force){this.normalizeHeight();}//setup movable rows
  if(this.table.options.dataTree&&this.table.modExists("dataTree")){this.table.modules.dataTree.layoutRow(this);}//setup column colapse container
  if(this.table.options.responsiveLayout==="collapse"&&this.table.modExists("responsiveLayout")){this.table.modules.responsiveLayout.layoutRow(this);}if(this.table.options.rowFormatter){this.table.options.rowFormatter(this.getComponent());}//set resizable handles
  if(this.table.options.resizableRows&&this.table.modExists("resizeRows")){this.table.modules.resizeRows.initializeRow(this);}this.initialized=true;}else {if(this.table.options.virtualDomHoz){this.table.vdomHoz.reinitializeRow(this);}}};Row.prototype.reinitializeHeight=function(){this.heightInitialized=false;if(this.element&&this.element.offsetParent!==null){this.normalizeHeight(true);}};Row.prototype.reinitialize=function(children){this.initialized=false;this.heightInitialized=false;if(!this.manualHeight){this.height=0;this.heightStyled="";}if(this.element&&this.element.offsetParent!==null){this.initialize(true);}if(this.table.options.dataTree&&this.table.modExists("dataTree",true)){this.table.modules.dataTree.getTreeChildren(this,false,true).forEach(function(child){child.reinitialize(true);});}};//get heights when doing bulk row style calcs in virtual DOM
  Row.prototype.calcHeight=function(force){var maxHeight=0,minHeight=this.table.options.resizableRows?this.element.clientHeight:0;this.cells.forEach(function(cell){var height=cell.getHeight();if(height>maxHeight){maxHeight=height;}});if(force){this.height=Math.max(maxHeight,minHeight);}else {this.height=this.manualHeight?this.height:Math.max(maxHeight,minHeight);}this.heightStyled=this.height?this.height+"px":"";this.outerHeight=this.element.offsetHeight;};//set of cells
  Row.prototype.setCellHeight=function(){this.cells.forEach(function(cell){cell.setHeight();});this.heightInitialized=true;};Row.prototype.clearCellHeight=function(){this.cells.forEach(function(cell){cell.clearHeight();});};//normalize the height of elements in the row
  Row.prototype.normalizeHeight=function(force){if(force){this.clearCellHeight();}this.calcHeight(force);this.setCellHeight();};// Row.prototype.setHeight = function(height){
  // 	this.height = height;
  // 	this.setCellHeight();
  // };
  //set height of rows
  Row.prototype.setHeight=function(height,force){if(this.height!=height||force){this.manualHeight=true;this.height=height;this.heightStyled=height?height+"px":"";this.setCellHeight();// this.outerHeight = this.element.outerHeight();
  this.outerHeight=this.element.offsetHeight;}};//return rows outer height
  Row.prototype.getHeight=function(){return this.outerHeight;};//return rows outer Width
  Row.prototype.getWidth=function(){return this.element.offsetWidth;};//////////////// Cell Management /////////////////
  Row.prototype.deleteCell=function(cell){var index=this.cells.indexOf(cell);if(index>-1){this.cells.splice(index,1);}};//////////////// Data Management /////////////////
  Row.prototype.setData=function(data){if(this.table.modExists("mutator")){data=this.table.modules.mutator.transformRow(data,"data");}this.data=data;if(this.table.options.reactiveData&&this.table.modExists("reactiveData",true)){this.table.modules.reactiveData.watchRow(this);}};//update the rows data
  Row.prototype.updateData=function(updatedData){var _this22=this;var visible=this.element&&Tabulator.prototype.helpers.elVisible(this.element),tempData={},newRowData;return new Promise(function(resolve,reject){if(typeof updatedData==="string"){updatedData=JSON.parse(updatedData);}if(_this22.table.options.reactiveData&&_this22.table.modExists("reactiveData",true)){_this22.table.modules.reactiveData.block();}//mutate incomming data if needed
  if(_this22.table.modExists("mutator")){tempData=Object.assign(tempData,_this22.data);tempData=Object.assign(tempData,updatedData);newRowData=_this22.table.modules.mutator.transformRow(tempData,"data",updatedData);}else {newRowData=updatedData;}//set data
  for(var attrname in newRowData){_this22.data[attrname]=newRowData[attrname];}if(_this22.table.options.reactiveData&&_this22.table.modExists("reactiveData",true)){_this22.table.modules.reactiveData.unblock();}//update affected cells only
  for(var attrname in updatedData){var columns=_this22.table.columnManager.getColumnsByFieldRoot(attrname);columns.forEach(function(column){var cell=_this22.getCell(column.getField());if(cell){var value=column.getFieldValue(newRowData);if(cell.getValue()!=value){cell.setValueProcessData(value);if(visible){cell.cellRendered();}}}});}if(_this22.table.options.groupUpdateOnCellEdit&&_this22.table.options.groupBy&&_this22.table.modExists("groupRows")){_this22.table.modules.groupRows.reassignRowToGroup(_this22.row);}//Partial reinitialization if visible
  if(visible){_this22.normalizeHeight(true);if(_this22.table.options.rowFormatter){_this22.table.options.rowFormatter(_this22.getComponent());}}else {_this22.initialized=false;_this22.height=0;_this22.heightStyled="";}if(_this22.table.options.dataTree!==false&&_this22.table.modExists("dataTree")&&_this22.table.modules.dataTree.redrawNeeded(updatedData)){_this22.table.modules.dataTree.initializeRow(_this22);if(visible){_this22.table.modules.dataTree.layoutRow(_this22);_this22.table.rowManager.refreshActiveData("tree",false,true);}}//this.reinitialize();
  _this22.table.options.rowUpdated.call(_this22.table,_this22.getComponent());if(_this22.table.options.dataChanged){_this22.table.options.dataChanged.call(_this22.table,_this22.table.rowManager.getData());}resolve();});};Row.prototype.getData=function(transform){if(transform){if(this.table.modExists("accessor")){return this.table.modules.accessor.transformRow(this,transform);}}return this.data;};Row.prototype.getCell=function(column){var match=false;column=this.table.columnManager.findColumn(column);match=this.cells.find(function(cell){return cell.column===column;});return match;};Row.prototype.getCellIndex=function(findCell){return this.cells.findIndex(function(cell){return cell===findCell;});};Row.prototype.findNextEditableCell=function(index){var nextCell=false;if(index<this.cells.length-1){for(var i=index+1;i<this.cells.length;i++){var cell=this.cells[i];if(cell.column.modules.edit&&Tabulator.prototype.helpers.elVisible(cell.getElement())){var allowEdit=true;if(typeof cell.column.modules.edit.check=="function"){allowEdit=cell.column.modules.edit.check(cell.getComponent());}if(allowEdit){nextCell=cell;break;}}}}return nextCell;};Row.prototype.findPrevEditableCell=function(index){var prevCell=false;if(index>0){for(var i=index-1;i>=0;i--){var cell=this.cells[i],allowEdit=true;if(cell.column.modules.edit&&Tabulator.prototype.helpers.elVisible(cell.getElement())){if(typeof cell.column.modules.edit.check=="function"){allowEdit=cell.column.modules.edit.check(cell.getComponent());}if(allowEdit){prevCell=cell;break;}}}}return prevCell;};Row.prototype.getCells=function(){return this.cells;};Row.prototype.nextRow=function(){var row=this.table.rowManager.nextDisplayRow(this,true);return row||false;};Row.prototype.prevRow=function(){var row=this.table.rowManager.prevDisplayRow(this,true);return row||false;};Row.prototype.moveToRow=function(to,before){var toRow=this.table.rowManager.findRow(to);if(toRow){this.table.rowManager.moveRowActual(this,toRow,!before);this.table.rowManager.refreshActiveData("display",false,true);}else {console.warn("Move Error - No matching row found:",to);}};Row.prototype.validate=function(){var invalid=[];this.cells.forEach(function(cell){if(!cell.validate()){invalid.push(cell.getComponent());}});return invalid.length?invalid:true;};///////////////////// Actions  /////////////////////
  Row.prototype["delete"]=function(){var _this23=this;return new Promise(function(resolve,reject){var index,rows;if(_this23.table.options.history&&_this23.table.modExists("history")){if(_this23.table.options.groupBy&&_this23.table.modExists("groupRows")){rows=_this23.getGroup().rows;index=rows.indexOf(_this23);if(index){index=rows[index-1];}}else {index=_this23.table.rowManager.getRowIndex(_this23);if(index){index=_this23.table.rowManager.rows[index-1];}}_this23.table.modules.history.action("rowDelete",_this23,{data:_this23.getData(),pos:!index,index:index});}_this23.deleteActual();resolve();});};Row.prototype.deleteActual=function(blockRedraw){this.table.rowManager.getRowIndex(this);this.detatchModules();// if(this.table.options.dataTree && this.table.modExists("dataTree")){
  // 	this.table.modules.dataTree.collapseRow(this, true);
  // }
  //remove any reactive data watchers from row object
  if(this.table.options.reactiveData&&this.table.modExists("reactiveData",true));// this.table.modules.reactiveData.unwatchRow(this);
  //remove from group
  if(this.modules.group){this.modules.group.removeRow(this);}this.table.rowManager.deleteRow(this,blockRedraw);this.deleteCells();this.initialized=false;this.heightInitialized=false;this.element=false;if(this.table.options.dataTree&&this.table.modExists("dataTree",true)){this.table.modules.dataTree.rowDelete(this);}//recalc column calculations if present
  if(this.table.modExists("columnCalcs")){if(this.table.options.groupBy&&this.table.modExists("groupRows")){this.table.modules.columnCalcs.recalcRowGroup(this);}else {this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);}}};Row.prototype.detatchModules=function(){//deselect row if it is selected
  if(this.table.modExists("selectRow")){this.table.modules.selectRow._deselectRow(this,true);}//cancel edit if row is currently being edited
  if(this.table.modExists("edit")){if(this.table.modules.edit.currentCell.row===this){this.table.modules.edit.cancelEdit();}}if(this.table.modExists("frozenRows")){this.table.modules.frozenRows.detachRow(this);}};Row.prototype.deleteCells=function(){var cellCount=this.cells.length;for(var _i8=0;_i8<cellCount;_i8++){this.cells[0]["delete"]();}};Row.prototype.wipe=function(){this.detatchModules();this.deleteCells();if(this.element){while(this.element.firstChild){this.element.removeChild(this.element.firstChild);}if(this.element.parentNode){this.element.parentNode.removeChild(this.element);}}this.element=false;this.modules={};};Row.prototype.getGroup=function(){return this.modules.group||false;};//////////////// Object Generation /////////////////
  Row.prototype.getComponent=function(){if(!this.component){this.component=new RowComponent(this);}return this.component;};//public row object
  var CellComponent=function CellComponent(cell){this._cell=cell;};CellComponent.prototype.getValue=function(){return this._cell.getValue();};CellComponent.prototype.getOldValue=function(){return this._cell.getOldValue();};CellComponent.prototype.getInitialValue=function(){return this._cell.initialValue;};CellComponent.prototype.getElement=function(){return this._cell.getElement();};CellComponent.prototype.getRow=function(){return this._cell.row.getComponent();};CellComponent.prototype.getData=function(){return this._cell.row.getData();};CellComponent.prototype.getField=function(){return this._cell.column.getField();};CellComponent.prototype.getColumn=function(){return this._cell.column.getComponent();};CellComponent.prototype.setValue=function(value,mutate){if(typeof mutate=="undefined"){mutate=true;}this._cell.setValue(value,mutate);};CellComponent.prototype.restoreOldValue=function(){this._cell.setValueActual(this._cell.getOldValue());};CellComponent.prototype.restoreInitialValue=function(){this._cell.setValueActual(this._cell.initialValue);};CellComponent.prototype.edit=function(force){return this._cell.edit(force);};CellComponent.prototype.cancelEdit=function(){this._cell.cancelEdit();};CellComponent.prototype.isEdited=function(){return !!this._cell.modules.edit&&this._cell.modules.edit.edited;};CellComponent.prototype.clearEdited=function(){if(self.table.modExists("edit",true)){this._cell.table.modules.edit.clearEdited(this._cell);}};CellComponent.prototype.isValid=function(){return this._cell.modules.validate?!this._cell.modules.validate.invalid:true;};CellComponent.prototype.validate=function(){return this._cell.validate();};CellComponent.prototype.clearValidation=function(){if(this._cell.table.modExists("validate",true)){this._cell.table.modules.validate.clearValidation(this._cell);}};CellComponent.prototype.nav=function(){return this._cell.nav();};CellComponent.prototype.checkHeight=function(){this._cell.checkHeight();};CellComponent.prototype.getTable=function(){return this._cell.table;};CellComponent.prototype._getSelf=function(){return this._cell;};var Cell=function Cell(column,row){this.table=column.table;this.column=column;this.row=row;this.element=null;this.value=null;this.initialValue;this.oldValue=null;this.modules={};this.height=null;this.width=null;this.minWidth=null;this.component=null;this.loaded=false;//track if the cell has been added to the DOM yet
  this.build();};//////////////// Setup Functions /////////////////
  //generate element
  Cell.prototype.build=function(){this.generateElement();this.setWidth();this._configureCell();this.setValueActual(this.column.getFieldValue(this.row.data));this.initialValue=this.value;};Cell.prototype.generateElement=function(){this.element=document.createElement('div');this.element.className="tabulator-cell";this.element.setAttribute("role","gridcell");this.element=this.element;};Cell.prototype._configureCell=function(){var self=this,cellEvents=self.column.cellEvents,element=self.element,field=this.column.getField(),vertAligns={top:"flex-start",bottom:"flex-end",middle:"center"},hozAligns={left:"flex-start",right:"flex-end",center:"center"};//set text alignment
  element.style.textAlign=self.column.hozAlign;if(self.column.vertAlign){element.style.display="inline-flex";element.style.alignItems=vertAligns[self.column.vertAlign]||"";if(self.column.hozAlign){element.style.justifyContent=hozAligns[self.column.hozAlign]||"";}}if(field){element.setAttribute("tabulator-field",field);}//add class to cell if needed
  if(self.column.definition.cssClass){var classNames=self.column.definition.cssClass.split(" ");classNames.forEach(function(className){element.classList.add(className);});}//update tooltip on mouse enter
  if(this.table.options.tooltipGenerationMode==="hover"){element.addEventListener("mouseenter",function(e){self._generateTooltip();});}self._bindClickEvents(cellEvents);self._bindTouchEvents(cellEvents);self._bindMouseEvents(cellEvents);if(self.column.modules.edit){self.table.modules.edit.bindEditor(self);}if(self.column.definition.rowHandle&&self.table.options.movableRows!==false&&self.table.modExists("moveRow")){self.table.modules.moveRow.initializeCell(self);}//hide cell if not visible
  if(!self.column.visible){self.hide();}};Cell.prototype._bindClickEvents=function(cellEvents){var self=this,element=self.element;//set event bindings
  if(cellEvents.cellClick||self.table.options.cellClick){element.addEventListener("click",function(e){var component=self.getComponent();if(cellEvents.cellClick){cellEvents.cellClick.call(self.table,e,component);}if(self.table.options.cellClick){self.table.options.cellClick.call(self.table,e,component);}});}if(cellEvents.cellDblClick||this.table.options.cellDblClick){element.addEventListener("dblclick",function(e){var component=self.getComponent();if(cellEvents.cellDblClick){cellEvents.cellDblClick.call(self.table,e,component);}if(self.table.options.cellDblClick){self.table.options.cellDblClick.call(self.table,e,component);}});}else {element.addEventListener("dblclick",function(e){if(self.table.modExists("edit")){if(self.table.modules.edit.currentCell===self){return;//prevent instant selection of editor content
  }}e.preventDefault();try{if(document.selection){// IE
  var range=document.body.createTextRange();range.moveToElementText(self.element);range.select();}else if(window.getSelection){var range=document.createRange();range.selectNode(self.element);window.getSelection().removeAllRanges();window.getSelection().addRange(range);}}catch(e){}});}if(cellEvents.cellContext||this.table.options.cellContext){element.addEventListener("contextmenu",function(e){var component=self.getComponent();if(cellEvents.cellContext){cellEvents.cellContext.call(self.table,e,component);}if(self.table.options.cellContext){self.table.options.cellContext.call(self.table,e,component);}});}};Cell.prototype._bindMouseEvents=function(cellEvents){var self=this,element=self.element;if(cellEvents.cellMouseEnter||self.table.options.cellMouseEnter){element.addEventListener("mouseenter",function(e){var component=self.getComponent();if(cellEvents.cellMouseEnter){cellEvents.cellMouseEnter.call(self.table,e,component);}if(self.table.options.cellMouseEnter){self.table.options.cellMouseEnter.call(self.table,e,component);}});}if(cellEvents.cellMouseLeave||self.table.options.cellMouseLeave){element.addEventListener("mouseleave",function(e){var component=self.getComponent();if(cellEvents.cellMouseLeave){cellEvents.cellMouseLeave.call(self.table,e,component);}if(self.table.options.cellMouseLeave){self.table.options.cellMouseLeave.call(self.table,e,component);}});}if(cellEvents.cellMouseOver||self.table.options.cellMouseOver){element.addEventListener("mouseover",function(e){var component=self.getComponent();if(cellEvents.cellMouseOver){cellEvents.cellMouseOver.call(self.table,e,component);}if(self.table.options.cellMouseOver){self.table.options.cellMouseOver.call(self.table,e,component);}});}if(cellEvents.cellMouseOut||self.table.options.cellMouseOut){element.addEventListener("mouseout",function(e){var component=self.getComponent();if(cellEvents.cellMouseOut){cellEvents.cellMouseOut.call(self.table,e,component);}if(self.table.options.cellMouseOut){self.table.options.cellMouseOut.call(self.table,e,component);}});}if(cellEvents.cellMouseMove||self.table.options.cellMouseMove){element.addEventListener("mousemove",function(e){var component=self.getComponent();if(cellEvents.cellMouseMove){cellEvents.cellMouseMove.call(self.table,e,component);}if(self.table.options.cellMouseMove){self.table.options.cellMouseMove.call(self.table,e,component);}});}};Cell.prototype._bindTouchEvents=function(cellEvents){var self=this,element=self.element,dblTap,tapHold,tap;if(cellEvents.cellTap||this.table.options.cellTap){tap=false;element.addEventListener("touchstart",function(e){tap=true;},{passive:true});element.addEventListener("touchend",function(e){if(tap){var component=self.getComponent();if(cellEvents.cellTap){cellEvents.cellTap.call(self.table,e,component);}if(self.table.options.cellTap){self.table.options.cellTap.call(self.table,e,component);}}tap=false;});}if(cellEvents.cellDblTap||this.table.options.cellDblTap){dblTap=null;element.addEventListener("touchend",function(e){if(dblTap){clearTimeout(dblTap);dblTap=null;var component=self.getComponent();if(cellEvents.cellDblTap){cellEvents.cellDblTap.call(self.table,e,component);}if(self.table.options.cellDblTap){self.table.options.cellDblTap.call(self.table,e,component);}}else {dblTap=setTimeout(function(){clearTimeout(dblTap);dblTap=null;},300);}});}if(cellEvents.cellTapHold||this.table.options.cellTapHold){tapHold=null;element.addEventListener("touchstart",function(e){clearTimeout(tapHold);tapHold=setTimeout(function(){clearTimeout(tapHold);tapHold=null;tap=false;var component=self.getComponent();if(cellEvents.cellTapHold){cellEvents.cellTapHold.call(self.table,e,component);}if(self.table.options.cellTapHold){self.table.options.cellTapHold.call(self.table,e,component);}},1000);},{passive:true});element.addEventListener("touchend",function(e){clearTimeout(tapHold);tapHold=null;});}};//generate cell contents
  Cell.prototype._generateContents=function(){var val;if(this.table.modExists("format")){val=this.table.modules.format.formatValue(this);}else {val=this.element.innerHTML=this.value;}switch(typeof val==='undefined'?'undefined':_typeof(val)){case"object":if(val instanceof Node){//clear previous cell contents
  while(this.element.firstChild){this.element.removeChild(this.element.firstChild);}this.element.appendChild(val);}else {this.element.innerHTML="";if(val!=null){console.warn("Format Error - Formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:",val);}}break;case"undefined":case"null":this.element.innerHTML="";break;default:this.element.innerHTML=val;}};Cell.prototype.cellRendered=function(){if(this.table.modExists("format")&&this.table.modules.format.cellRendered){this.table.modules.format.cellRendered(this);}};//generate tooltip text
  Cell.prototype._generateTooltip=function(){var tooltip=this.column.tooltip;if(tooltip){if(tooltip===true){tooltip=this.value;}else if(typeof tooltip=="function"){tooltip=tooltip(this.getComponent());if(tooltip===false){tooltip="";}}if(typeof tooltip==="undefined"){tooltip="";}this.element.setAttribute("title",tooltip);}else {this.element.setAttribute("title","");}};//////////////////// Getters ////////////////////
  Cell.prototype.getElement=function(containerOnly){if(!this.loaded){this.loaded=true;if(!containerOnly){this.layoutElement();}}return this.element;};Cell.prototype.getValue=function(){return this.value;};Cell.prototype.getOldValue=function(){return this.oldValue;};//////////////////// Actions ////////////////////
  Cell.prototype.setValue=function(value,mutate){var changed=this.setValueProcessData(value,mutate),component;if(changed){if(this.table.options.history&&this.table.modExists("history")){this.table.modules.history.action("cellEdit",this,{oldValue:this.oldValue,newValue:this.value});}component=this.getComponent();if(this.column.cellEvents.cellEdited){this.column.cellEvents.cellEdited.call(this.table,component);}if(this.table.options.groupUpdateOnCellEdit&&this.table.options.groupBy&&this.table.modExists("groupRows")){this.table.modules.groupRows.reassignRowToGroup(this.row);}this.cellRendered();this.table.options.cellEdited.call(this.table,component);if(this.table.options.dataChanged){this.table.options.dataChanged.call(this.table,this.table.rowManager.getData());}}};Cell.prototype.setValueProcessData=function(value,mutate){var changed=false;if(this.value!=value){changed=true;if(mutate){if(this.column.modules.mutate){value=this.table.modules.mutator.transformCell(this,value);}}}this.setValueActual(value);if(changed&&this.table.modExists("columnCalcs")){if(this.column.definition.topCalc||this.column.definition.bottomCalc){if(this.table.options.groupBy&&this.table.modExists("groupRows")){if(this.table.options.columnCalcs=="table"||this.table.options.columnCalcs=="both"){this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);}if(this.table.options.columnCalcs!="table"){this.table.modules.columnCalcs.recalcRowGroup(this.row);}}else {this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);}}}return changed;};Cell.prototype.setValueActual=function(value){this.oldValue=this.value;this.value=value;if(this.table.options.reactiveData&&this.table.modExists("reactiveData")){this.table.modules.reactiveData.block();}this.column.setFieldValue(this.row.data,value);if(this.table.options.reactiveData&&this.table.modExists("reactiveData")){this.table.modules.reactiveData.unblock();}if(this.loaded){this.layoutElement();}};Cell.prototype.layoutElement=function(){this._generateContents();this._generateTooltip();//set resizable handles
  if(this.table.options.resizableColumns&&this.table.modExists("resizeColumns")&&this.row.type==="row"){this.table.modules.resizeColumns.initializeColumn("cell",this.column,this.element);}if((this.column.definition.contextMenu||this.column.definition.clickMenu)&&this.table.modExists("menu")){this.table.modules.menu.initializeCell(this);}//handle frozen cells
  if(this.table.modExists("frozenColumns")){this.table.modules.frozenColumns.layoutElement(this.element,this.column);}};Cell.prototype.setWidth=function(){this.width=this.column.width;this.element.style.width=this.column.widthStyled;};Cell.prototype.clearWidth=function(){this.width="";this.element.style.width="";};Cell.prototype.getWidth=function(){return this.width||this.element.offsetWidth;};Cell.prototype.setMinWidth=function(){this.minWidth=this.column.minWidth;this.element.style.minWidth=this.column.minWidthStyled;};Cell.prototype.setMaxWidth=function(){this.maxWidth=this.column.maxWidth;this.element.style.maxWidth=this.column.maxWidthStyled;};Cell.prototype.checkHeight=function(){// var height = this.element.css("height");
  this.row.reinitializeHeight();};Cell.prototype.clearHeight=function(){this.element.style.height="";this.height=null;};Cell.prototype.setHeight=function(){this.height=this.row.height;this.element.style.height=this.row.heightStyled;};Cell.prototype.getHeight=function(){return this.height||this.element.offsetHeight;};Cell.prototype.show=function(){this.element.style.display=this.column.vertAlign?"inline-flex":"";};Cell.prototype.hide=function(){this.element.style.display="none";};Cell.prototype.edit=function(force){if(this.table.modExists("edit",true)){return this.table.modules.edit.editCell(this,force);}};Cell.prototype.cancelEdit=function(){if(this.table.modExists("edit",true)){var editing=this.table.modules.edit.getCurrentCell();if(editing&&editing._getSelf()===this){this.table.modules.edit.cancelEdit();}else {console.warn("Cancel Editor Error - This cell is not currently being edited ");}}};Cell.prototype.validate=function(){if(this.column.modules.validate&&this.table.modExists("validate",true)){var valid=this.table.modules.validate.validate(this.column.modules.validate,this,this.getValue());return valid===true;}else {return true;}};Cell.prototype["delete"]=function(){if(!this.table.rowManager.redrawBlock&&this.element.parentNode){this.element.parentNode.removeChild(this.element);}if(this.modules.validate&&this.modules.validate.invalid){this.table.modules.validate.clearValidation(this);}if(this.modules.edit&&this.modules.edit.edited){this.table.modules.edit.clearEdited(this);}if(this.table.options.history){this.table.modules.history.clearComponentHistory(this);}this.element=false;this.column.deleteCell(this);this.row.deleteCell(this);this.calcs={};};//////////////// Navigation /////////////////
  Cell.prototype.nav=function(){var self=this,nextCell=false,index=this.row.getCellIndex(this);return {next:function next(){var nextCell=this.right(),nextRow;if(!nextCell){nextRow=self.table.rowManager.nextDisplayRow(self.row,true);if(nextRow){nextCell=nextRow.findNextEditableCell(-1);if(nextCell){nextCell.edit();return true;}}}else {return true;}return false;},prev:function prev(){var nextCell=this.left(),prevRow;if(!nextCell){prevRow=self.table.rowManager.prevDisplayRow(self.row,true);if(prevRow){nextCell=prevRow.findPrevEditableCell(prevRow.cells.length);if(nextCell){nextCell.edit();return true;}}}else {return true;}return false;},left:function left(){nextCell=self.row.findPrevEditableCell(index);if(nextCell){nextCell.edit();return true;}else {return false;}},right:function right(){nextCell=self.row.findNextEditableCell(index);if(nextCell){nextCell.edit();return true;}else {return false;}},up:function up(){var nextRow=self.table.rowManager.prevDisplayRow(self.row,true);if(nextRow){nextRow.cells[index].edit();}},down:function down(){var nextRow=self.table.rowManager.nextDisplayRow(self.row,true);if(nextRow){nextRow.cells[index].edit();}}};};Cell.prototype.getIndex=function(){this.row.getCellIndex(this);};//////////////// Object Generation /////////////////
  Cell.prototype.getComponent=function(){if(!this.component){this.component=new CellComponent(this);}return this.component;};var FooterManager=function FooterManager(table){this.table=table;this.active=false;this.element=this.createElement();//containing element
  this.external=false;this.links=[];this._initialize();};FooterManager.prototype.createElement=function(){var el=document.createElement("div");el.classList.add("tabulator-footer");return el;};FooterManager.prototype._initialize=function(element){if(this.table.options.footerElement){switch(_typeof(this.table.options.footerElement)){case"string":if(this.table.options.footerElement[0]==="<"){this.element.innerHTML=this.table.options.footerElement;}else {this.external=true;this.element=document.querySelector(this.table.options.footerElement);}break;default:this.element=this.table.options.footerElement;break;}}};FooterManager.prototype.getElement=function(){return this.element;};FooterManager.prototype.append=function(element,parent){this.activate(parent);this.element.appendChild(element);this.table.rowManager.adjustTableSize();};FooterManager.prototype.prepend=function(element,parent){this.activate(parent);this.element.insertBefore(element,this.element.firstChild);this.table.rowManager.adjustTableSize();};FooterManager.prototype.remove=function(element){element.parentNode.removeChild(element);this.deactivate();};FooterManager.prototype.deactivate=function(force){if(!this.element.firstChild||force){if(!this.external){this.element.parentNode.removeChild(this.element);}this.active=false;}// this.table.rowManager.adjustTableSize();
  };FooterManager.prototype.activate=function(parent){if(!this.active){this.active=true;if(!this.external){this.table.element.appendChild(this.getElement());this.table.element.style.display='';}}if(parent){this.links.push(parent);}};FooterManager.prototype.redraw=function(){this.links.forEach(function(link){link.footerRedraw();});};var Tabulator=function Tabulator(element,options){this.options={};this.columnManager=null;// hold Column Manager
  this.rowManager=null;//hold Row Manager
  this.footerManager=null;//holder Footer Manager
  this.vdomHoz=null;//holder horizontal virtual dom
  this.browser="";//hold current browser type
  this.browserSlow=false;//handle reduced functionality for slower browsers
  this.browserMobile=false;//check if running on moble, prevent resize cancelling edit on keyboard appearence
  this.rtl=false;//check if the table is in RTL mode
  this.modules={};//hold all modules bound to this table
  if(this.initializeElement(element)){this.initializeOptions(options||{});this._create();}Tabulator.prototype.comms.register(this);//register table for inderdevice communication
  };//default setup options
  Tabulator.prototype.defaultOptions={height:false,//height of tabulator
  minHeight:false,//minimum height of tabulator
  maxHeight:false,//maximum height of tabulator
  layout:"fitData",///layout type "fitColumns" | "fitData"
  layoutColumnsOnNewData:false,//update column widths on setData
  columnMinWidth:40,//minimum global width for a column
  columnMaxWidth:false,//minimum global width for a column
  columnHeaderVertAlign:"top",//vertical alignment of column headers
  columnVertAlign:false,// DEPRECATED - Left to allow warning
  resizableColumns:true,//resizable columns
  resizableRows:false,//resizable rows
  autoResize:true,//auto resize table
  columns:[],//store for colum header info
  cellHozAlign:"",//horizontal align columns
  cellVertAlign:"",//vertical align columns
  headerHozAlign:"",//horizontal header alignment
  data:[],//default starting data
  autoColumns:false,//build columns from data row structure
  autoColumnsDefinitions:false,reactiveData:false,//enable data reactivity
  nestedFieldSeparator:".",//seperatpr for nested data
  tooltips:false,//Tool tip value
  tooltipsHeader:false,//Tool tip for headers
  tooltipGenerationMode:"load",//when to generate tooltips
  initialSort:false,//initial sorting criteria
  initialFilter:false,//initial filtering criteria
  initialHeaderFilter:false,//initial header filtering criteria
  columnHeaderSortMulti:true,//multiple or single column sorting
  sortOrderReverse:false,//reverse internal sort ordering
  headerSort:true,//set default global header sort
  headerSortTristate:false,//set default tristate header sorting
  headerSortElement:"<div class='tabulator-arrow'></div>",//header sort element
  footerElement:false,//hold footer element
  index:"id",//filed for row index
  textDirection:"auto",keybindings:[],//array for keybindings
  tabEndNewRow:false,//create new row when tab to end of table
  invalidOptionWarnings:true,//allow toggling of invalid option warnings
  clipboard:false,//enable clipboard
  clipboardCopyStyled:true,//formatted table data
  clipboardCopyConfig:false,//clipboard config
  clipboardCopyFormatter:false,//DEPRICATED - REMOVE in 5.0
  clipboardCopyRowRange:"active",//restrict clipboard to visible rows only
  clipboardPasteParser:"table",//convert pasted clipboard data to rows
  clipboardPasteAction:"insert",//how to insert pasted data into the table
  clipboardCopied:function clipboardCopied(){},//data has been copied to the clipboard
  clipboardPasted:function clipboardPasted(){},//data has been pasted into the table
  clipboardPasteError:function clipboardPasteError(){},//data has not successfully been pasted into the table
  downloadDataFormatter:false,//function to manipulate table data before it is downloaded
  downloadReady:function downloadReady(data,blob){return blob;},//function to manipulate download data
  downloadComplete:false,//function to manipulate download data
  downloadConfig:{},//download config
  downloadRowRange:"active",//restrict download to active rows only
  dataTree:false,//enable data tree
  dataTreeFilter:true,//filter child rows
  dataTreeSort:true,//sort child rows
  dataTreeElementColumn:false,dataTreeBranchElement:true,//show data tree branch element
  dataTreeChildIndent:9,//data tree child indent in px
  dataTreeChildField:"_children",//data tre column field to look for child rows
  dataTreeCollapseElement:false,//data tree row collapse element
  dataTreeExpandElement:false,//data tree row expand element
  dataTreeStartExpanded:false,dataTreeRowExpanded:function dataTreeRowExpanded(){},//row has been expanded
  dataTreeRowCollapsed:function dataTreeRowCollapsed(){},//row has been collapsed
  dataTreeChildColumnCalcs:false,//include visible data tree rows in column calculations
  dataTreeSelectPropagate:false,//seleccting a parent row selects its children
  printAsHtml:false,//enable print as html
  printFormatter:false,//printing page formatter
  printHeader:false,//page header contents
  printFooter:false,//page footer contents
  printCopyStyle:true,//DEPRICATED - REMOVE in 5.0
  printStyled:true,//enable print as html styling
  printVisibleRows:true,//DEPRICATED - REMOVE in 5.0
  printRowRange:"visible",//restrict print to visible rows only
  printConfig:{},//print config options
  addRowPos:"bottom",//position to insert blank rows, top|bottom
  selectable:"highlight",//highlight rows on hover
  selectableRangeMode:"drag",//highlight rows on hover
  selectableRollingSelection:true,//roll selection once maximum number of selectable rows is reached
  selectablePersistence:true,// maintain selection when table view is updated
  selectableCheck:function selectableCheck(data,row){return true;},//check wheather row is selectable
  headerFilterLiveFilterDelay:300,//delay before updating column after user types in header filter
  headerFilterPlaceholder:false,//placeholder text to display in header filters
  headerVisible:true,//hide header
  history:false,//enable edit history
  locale:false,//current system language
  langs:{},virtualDom:true,//enable DOM virtualization
  virtualDomBuffer:0,// set virtual DOM buffer size
  virtualDomHoz:false,//enable horizontal DOM virtualization
  persistentLayout:false,//DEPRICATED - REMOVE in 5.0
  persistentSort:false,//DEPRICATED - REMOVE in 5.0
  persistentFilter:false,//DEPRICATED - REMOVE in 5.0
  persistenceID:"",//key for persistent storage
  persistenceMode:true,//mode for storing persistence information
  persistenceReaderFunc:false,//function for handling persistence data reading
  persistenceWriterFunc:false,//function for handling persistence data writing
  persistence:false,responsiveLayout:false,//responsive layout flags
  responsiveLayoutCollapseStartOpen:true,//start showing collapsed data
  responsiveLayoutCollapseUseFormatters:true,//responsive layout collapse formatter
  responsiveLayoutCollapseFormatter:false,//responsive layout collapse formatter
  pagination:false,//set pagination type
  paginationSize:false,//set number of rows to a page
  paginationInitialPage:1,//initail page to show on load
  paginationButtonCount:5,// set count of page button
  paginationSizeSelector:false,//add pagination size selector element
  paginationElement:false,//element to hold pagination numbers
  paginationDataSent:{},//pagination data sent to the server
  paginationDataReceived:{},//pagination data received from the server
  paginationAddRow:"page",//add rows on table or page
  ajaxURL:false,//url for ajax loading
  ajaxURLGenerator:false,ajaxParams:{},//params for ajax loading
  ajaxConfig:"get",//ajax request type
  ajaxContentType:"form",//ajax request type
  ajaxRequestFunc:false,//promise function
  ajaxLoader:true,//show loader
  ajaxLoaderLoading:false,//loader element
  ajaxLoaderError:false,//loader element
  ajaxFiltering:false,ajaxSorting:false,ajaxProgressiveLoad:false,//progressive loading
  ajaxProgressiveLoadDelay:0,//delay between requests
  ajaxProgressiveLoadScrollMargin:0,//margin before scroll begins
  groupBy:false,//enable table grouping and set field to group by
  groupStartOpen:true,//starting state of group
  groupValues:false,groupUpdateOnCellEdit:false,groupHeader:false,//header generation function
  groupHeaderPrint:null,groupHeaderClipboard:null,groupHeaderHtmlOutput:null,groupHeaderDownload:null,htmlOutputConfig:false,//html outypu config
  movableColumns:false,//enable movable columns
  movableRows:false,//enable movable rows
  movableRowsConnectedTables:false,//tables for movable rows to be connected to
  movableRowsConnectedElements:false,//other elements for movable rows to be connected to
  movableRowsSender:false,movableRowsReceiver:"insert",movableRowsSendingStart:function movableRowsSendingStart(){},movableRowsSent:function movableRowsSent(){},movableRowsSentFailed:function movableRowsSentFailed(){},movableRowsSendingStop:function movableRowsSendingStop(){},movableRowsReceivingStart:function movableRowsReceivingStart(){},movableRowsReceived:function movableRowsReceived(){},movableRowsReceivedFailed:function movableRowsReceivedFailed(){},movableRowsReceivingStop:function movableRowsReceivingStop(){},movableRowsElementDrop:function movableRowsElementDrop(){},scrollToRowPosition:"top",scrollToRowIfVisible:true,scrollToColumnPosition:"left",scrollToColumnIfVisible:true,rowFormatter:false,rowFormatterPrint:null,rowFormatterClipboard:null,rowFormatterHtmlOutput:null,placeholder:false,//table building callbacks
  tableBuilding:function tableBuilding(){},tableBuilt:function tableBuilt(){},//render callbacks
  renderStarted:function renderStarted(){},renderComplete:function renderComplete(){},//row callbacks
  rowClick:false,rowDblClick:false,rowContext:false,rowTap:false,rowDblTap:false,rowTapHold:false,rowMouseEnter:false,rowMouseLeave:false,rowMouseOver:false,rowMouseOut:false,rowMouseMove:false,rowContextMenu:false,rowClickMenu:false,rowAdded:function rowAdded(){},rowDeleted:function rowDeleted(){},rowMoved:function rowMoved(){},rowUpdated:function rowUpdated(){},rowSelectionChanged:function rowSelectionChanged(){},rowSelected:function rowSelected(){},rowDeselected:function rowDeselected(){},rowResized:function rowResized(){},//cell callbacks
  //row callbacks
  cellClick:false,cellDblClick:false,cellContext:false,cellTap:false,cellDblTap:false,cellTapHold:false,cellMouseEnter:false,cellMouseLeave:false,cellMouseOver:false,cellMouseOut:false,cellMouseMove:false,cellEditing:function cellEditing(){},cellEdited:function cellEdited(){},cellEditCancelled:function cellEditCancelled(){},//column callbacks
  columnMoved:false,columnResized:function columnResized(){},columnTitleChanged:function columnTitleChanged(){},columnVisibilityChanged:function columnVisibilityChanged(){},//HTML iport callbacks
  htmlImporting:function htmlImporting(){},htmlImported:function htmlImported(){},//data callbacks
  dataLoading:function dataLoading(){},dataLoaded:function dataLoaded(){},dataEdited:false,//DEPRECATED
  dataChanged:false,//ajax callbacks
  ajaxRequesting:function ajaxRequesting(){},ajaxResponse:false,ajaxError:function ajaxError(){},//filtering callbacks
  dataFiltering:false,dataFiltered:false,//sorting callbacks
  dataSorting:function dataSorting(){},dataSorted:function dataSorted(){},//grouping callbacks
  groupToggleElement:"arrow",groupClosedShowCalcs:false,dataGrouping:function dataGrouping(){},dataGrouped:false,groupVisibilityChanged:function groupVisibilityChanged(){},groupClick:false,groupDblClick:false,groupContext:false,groupContextMenu:false,groupClickMenu:false,groupTap:false,groupDblTap:false,groupTapHold:false,columnCalcs:true,//pagination callbacks
  pageLoaded:function pageLoaded(){},//localization callbacks
  localized:function localized(){},//validation callbacks
  validationMode:"blocking",validationFailed:function validationFailed(){},//history callbacks
  historyUndo:function historyUndo(){},historyRedo:function historyRedo(){},//scroll callbacks
  scrollHorizontal:function scrollHorizontal(){},scrollVertical:function scrollVertical(){}};Tabulator.prototype.initializeOptions=function(options){//warn user if option is not available
  if(options.invalidOptionWarnings!==false){for(var key in options){if(typeof this.defaultOptions[key]==="undefined"){console.warn("Invalid table constructor option:",key);}}}//assign options to table
  for(var key in this.defaultOptions){if(key in options){this.options[key]=options[key];}else {if(Array.isArray(this.defaultOptions[key])){this.options[key]=Object.assign([],this.defaultOptions[key]);}else if(_typeof(this.defaultOptions[key])==="object"&&this.defaultOptions[key]!==null){this.options[key]=Object.assign({},this.defaultOptions[key]);}else {this.options[key]=this.defaultOptions[key];}}}};Tabulator.prototype.initializeElement=function(element){if(typeof HTMLElement!=="undefined"&&element instanceof HTMLElement){this.element=element;return true;}else if(typeof element==="string"){this.element=document.querySelector(element);if(this.element){return true;}else {console.error("Tabulator Creation Error - no element found matching selector: ",element);return false;}}else {console.error("Tabulator Creation Error - Invalid element provided:",element);return false;}};Tabulator.prototype.rtlCheck=function(){var style=window.getComputedStyle(this.element);switch(this.options.textDirection){case"auto":if(style.direction!=="rtl"){break;}case"rtl":this.element.classList.add("tabulator-rtl");this.rtl=true;break;case"ltr":this.element.classList.add("tabulator-ltr");default:this.rtl=false;}};//convert depricated functionality to new functions
  Tabulator.prototype._mapDepricatedFunctionality=function(){//map depricated persistance setup options
  if(this.options.persistentLayout||this.options.persistentSort||this.options.persistentFilter){if(!this.options.persistence){this.options.persistence={};}}if(this.options.dataEdited){console.warn("DEPRECATION WARNING - dataEdited option has been deprecated, please use the dataChanged option instead");this.options.dataChanged=this.options.dataEdited;}if(this.options.downloadDataFormatter){console.warn("DEPRECATION WARNING - downloadDataFormatter option has been deprecated");}if(typeof this.options.clipboardCopyHeader!=="undefined"){this.options.columnHeaders=this.options.clipboardCopyHeader;console.warn("DEPRECATION WARNING - clipboardCopyHeader option has been deprecated, please use the columnHeaders property on the clipboardCopyConfig option");}if(this.options.printVisibleRows!==true){console.warn("printVisibleRows option is deprecated, you should now use the printRowRange option");this.options.persistence.printRowRange="active";}if(this.options.printCopyStyle!==true){console.warn("printCopyStyle option is deprecated, you should now use the printStyled option");this.options.persistence.printStyled=this.options.printCopyStyle;}if(this.options.persistentLayout){console.warn("persistentLayout option is deprecated, you should now use the persistence option");if(this.options.persistence!==true&&typeof this.options.persistence.columns==="undefined"){this.options.persistence.columns=true;}}if(this.options.persistentSort){console.warn("persistentSort option is deprecated, you should now use the persistence option");if(this.options.persistence!==true&&typeof this.options.persistence.sort==="undefined"){this.options.persistence.sort=true;}}if(this.options.persistentFilter){console.warn("persistentFilter option is deprecated, you should now use the persistence option");if(this.options.persistence!==true&&typeof this.options.persistence.filter==="undefined"){this.options.persistence.filter=true;}}if(this.options.columnVertAlign){console.warn("columnVertAlign option is deprecated, you should now use the columnHeaderVertAlign option");this.options.columnHeaderVertAlign=this.options.columnVertAlign;}};Tabulator.prototype._clearSelection=function(){this.element.classList.add("tabulator-block-select");if(window.getSelection){if(window.getSelection().empty){// Chrome
  window.getSelection().empty();}else if(window.getSelection().removeAllRanges){// Firefox
  window.getSelection().removeAllRanges();}}else if(document.selection){// IE?
  document.selection.empty();}this.element.classList.remove("tabulator-block-select");};//concreate table
  Tabulator.prototype._create=function(){this._clearObjectPointers();this._mapDepricatedFunctionality();this.bindModules();this.rtlCheck();if(this.element.tagName==="TABLE"){if(this.modExists("htmlTableImport",true)){this.modules.htmlTableImport.parseTable();}}this.columnManager=new ColumnManager(this);this.rowManager=new RowManager(this);this.footerManager=new FooterManager(this);this.columnManager.setRowManager(this.rowManager);this.rowManager.setColumnManager(this.columnManager);if(this.options.virtualDomHoz){this.vdomHoz=new VDomHoz(this);}this._buildElement();this._loadInitialData();};//clear pointers to objects in default config object
  Tabulator.prototype._clearObjectPointers=function(){this.options.columns=this.options.columns.slice(0);if(!this.options.reactiveData){this.options.data=this.options.data.slice(0);}};//build tabulator element
  Tabulator.prototype._buildElement=function(){var _this24=this;var element=this.element,mod=this.modules,options=this.options;options.tableBuilding.call(this);element.classList.add("tabulator");element.setAttribute("role","grid");//empty element
  while(element.firstChild){element.removeChild(element.firstChild);}//set table height
  if(options.height){options.height=isNaN(options.height)?options.height:options.height+"px";element.style.height=options.height;}//set table min height
  if(options.minHeight!==false){options.minHeight=isNaN(options.minHeight)?options.minHeight:options.minHeight+"px";element.style.minHeight=options.minHeight;}//set table maxHeight
  if(options.maxHeight!==false){options.maxHeight=isNaN(options.maxHeight)?options.maxHeight:options.maxHeight+"px";element.style.maxHeight=options.maxHeight;}this.columnManager.initialize();this.rowManager.initialize();this._detectBrowser();if(this.modExists("layout",true)){mod.layout.initialize(options.layout);}//set localization
  mod.localize.initialize();if(options.headerFilterPlaceholder!==false){mod.localize.setHeaderFilterPlaceholder(options.headerFilterPlaceholder);}for(var locale in options.langs){mod.localize.installLang(locale,options.langs[locale]);}mod.localize.setLocale(options.locale);//configure placeholder element
  if(typeof options.placeholder=="string"){var el=document.createElement("div");el.classList.add("tabulator-placeholder");var span=document.createElement("span");span.innerHTML=options.placeholder;el.appendChild(span);options.placeholder=el;}//build table elements
  element.appendChild(this.columnManager.getElement());element.appendChild(this.rowManager.getElement());if(options.footerElement){this.footerManager.activate();}if(options.persistence&&this.modExists("persistence",true)){mod.persistence.initialize();}if(options.movableRows&&this.modExists("moveRow")){mod.moveRow.initialize();}if(options.autoColumns&&this.options.data){this.columnManager.generateColumnsFromRowData(this.options.data);}if(this.modExists("columnCalcs")){mod.columnCalcs.initialize();}this.columnManager.setColumns(options.columns);if(options.dataTree&&this.modExists("dataTree",true)){mod.dataTree.initialize();}if(this.modExists("frozenRows")){this.modules.frozenRows.initialize();}if((options.persistence&&this.modExists("persistence",true)&&mod.persistence.config.sort||options.initialSort)&&this.modExists("sort",true)){var sorters=[];if(options.persistence&&this.modExists("persistence",true)&&mod.persistence.config.sort){sorters=mod.persistence.load("sort");if(sorters===false&&options.initialSort){sorters=options.initialSort;}}else if(options.initialSort){sorters=options.initialSort;}mod.sort.setSort(sorters);}if((options.persistence&&this.modExists("persistence",true)&&mod.persistence.config.filter||options.initialFilter)&&this.modExists("filter",true)){var filters=[];if(options.persistence&&this.modExists("persistence",true)&&mod.persistence.config.filter){filters=mod.persistence.load("filter");if(filters===false&&options.initialFilter){filters=options.initialFilter;}}else if(options.initialFilter){filters=options.initialFilter;}mod.filter.setFilter(filters);}if(options.initialHeaderFilter&&this.modExists("filter",true)){options.initialHeaderFilter.forEach(function(item){var column=_this24.columnManager.findColumn(item.field);if(column){mod.filter.setHeaderFilterValue(column,item.value);}else {console.warn("Column Filter Error - No matching column found:",item.field);return false;}});}if(this.modExists("ajax")){mod.ajax.initialize();}if(options.pagination&&this.modExists("page",true)){mod.page.initialize();}if(options.groupBy&&this.modExists("groupRows",true)){mod.groupRows.initialize();}if(this.modExists("keybindings")){mod.keybindings.initialize();}if(this.modExists("selectRow")){mod.selectRow.clearSelectionData(true);}if(options.autoResize&&this.modExists("resizeTable")){mod.resizeTable.initialize();}if(this.modExists("clipboard")){mod.clipboard.initialize();}if(options.printAsHtml&&this.modExists("print")){mod.print.initialize();}options.tableBuilt.call(this);};Tabulator.prototype._loadInitialData=function(){var self=this;if(self.options.pagination&&self.modExists("page")){self.modules.page.reset(true,true);if(self.options.pagination=="local"){if(self.options.data.length){self.rowManager.setData(self.options.data,false,true);}else {if((self.options.ajaxURL||self.options.ajaxURLGenerator)&&self.modExists("ajax")){self.modules.ajax.loadData(false,true).then(function(){})["catch"](function(){if(self.options.paginationInitialPage){self.modules.page.setPage(self.options.paginationInitialPage);}});return;}else {self.rowManager.setData(self.options.data,false,true);}}if(self.options.paginationInitialPage){self.modules.page.setPage(self.options.paginationInitialPage);}}else {if(self.options.ajaxURL){self.modules.page.setPage(self.options.paginationInitialPage).then(function(){})["catch"](function(){});}else {self.rowManager.setData([],false,true);}}}else {if(self.options.data.length){self.rowManager.setData(self.options.data);}else {if((self.options.ajaxURL||self.options.ajaxURLGenerator)&&self.modExists("ajax")){self.modules.ajax.loadData(false,true).then(function(){})["catch"](function(){});}else {self.rowManager.setData(self.options.data,false,true);}}}};//deconstructor
  Tabulator.prototype.destroy=function(){var element=this.element;Tabulator.prototype.comms.deregister(this);//deregister table from inderdevice communication
  if(this.options.reactiveData&&this.modExists("reactiveData",true)){this.modules.reactiveData.unwatchData();}//clear row data
  this.rowManager.rows.forEach(function(row){row.wipe();});this.rowManager.rows=[];this.rowManager.activeRows=[];this.rowManager.displayRows=[];//clear event bindings
  if(this.options.autoResize&&this.modExists("resizeTable")){this.modules.resizeTable.clearBindings();}if(this.modExists("keybindings")){this.modules.keybindings.clearBindings();}//clear DOM
  while(element.firstChild){element.removeChild(element.firstChild);}element.classList.remove("tabulator");};Tabulator.prototype._detectBrowser=function(){var ua=navigator.userAgent||navigator.vendor||window.opera;if(ua.indexOf("Trident")>-1){this.browser="ie";this.browserSlow=true;}else if(ua.indexOf("Edge")>-1){this.browser="edge";this.browserSlow=true;}else if(ua.indexOf("Firefox")>-1){this.browser="firefox";this.browserSlow=false;}else {this.browser="other";this.browserSlow=false;}this.browserMobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(ua)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0,4));};////////////////// Data Handling //////////////////
  //block table redrawing
  Tabulator.prototype.blockRedraw=function(){return this.rowManager.blockRedraw();};//restore table redrawing
  Tabulator.prototype.restoreRedraw=function(){return this.rowManager.restoreRedraw();};//local data from local file
  Tabulator.prototype.setDataFromLocalFile=function(extensions){var _this25=this;return new Promise(function(resolve,reject){var input=document.createElement("input");input.type="file";input.accept=extensions||".json,application/json";input.addEventListener("change",function(e){var file=input.files[0],reader=new FileReader(),data;reader.readAsText(file);reader.onload=function(e){try{data=JSON.parse(reader.result);}catch(e){console.warn("File Load Error - File contents is invalid JSON",e);reject(e);return;}_this25.setData(data).then(function(data){resolve(data);})["catch"](function(err){resolve(err);});};reader.onerror=function(e){console.warn("File Load Error - Unable to read file");reject();};});input.click();});};//load data
  Tabulator.prototype.setData=function(data,params,config){if(this.modExists("ajax")){this.modules.ajax.blockActiveRequest();}return this._setData(data,params,config,false,true);};Tabulator.prototype._setData=function(data,params,config,inPosition,columnsChanged){var self=this;if(typeof data==="string"){if(data.indexOf("{")==0||data.indexOf("[")==0){//data is a json encoded string
  return self.rowManager.setData(JSON.parse(data),inPosition,columnsChanged);}else {if(self.modExists("ajax",true)){if(params){self.modules.ajax.setParams(params);}if(config){self.modules.ajax.setConfig(config);}self.modules.ajax.setUrl(data);if(self.options.pagination=="remote"&&self.modExists("page",true)){self.modules.page.reset(true,true);return self.modules.page.setPage(1);}else {//assume data is url, make ajax call to url to get data
  return self.modules.ajax.loadData(inPosition,columnsChanged);}}}}else {if(data){//asume data is already an object
  return self.rowManager.setData(data,inPosition,columnsChanged);}else {//no data provided, check if ajaxURL is present;
  if(self.modExists("ajax")&&(self.modules.ajax.getUrl||self.options.ajaxURLGenerator)){if(self.options.pagination=="remote"&&self.modExists("page",true)){self.modules.page.reset(true,true);return self.modules.page.setPage(1);}else {return self.modules.ajax.loadData(inPosition,columnsChanged);}}else {//empty data
  return self.rowManager.setData([],inPosition,columnsChanged);}}}};//clear data
  Tabulator.prototype.clearData=function(){if(this.modExists("ajax")){this.modules.ajax.blockActiveRequest();}this.rowManager.clearData();};//get table data array
  Tabulator.prototype.getData=function(active){if(active===true){console.warn("passing a boolean to the getData function is deprecated, you should now pass the string 'active'");active="active";}return this.rowManager.getData(active);};//get table data array count
  Tabulator.prototype.getDataCount=function(active){if(active===true){console.warn("passing a boolean to the getDataCount function is deprecated, you should now pass the string 'active'");active="active";}return this.rowManager.getDataCount(active);};//search for specific row components
  Tabulator.prototype.searchRows=function(field,type,value){if(this.modExists("filter",true)){return this.modules.filter.search("rows",field,type,value);}};//search for specific data
  Tabulator.prototype.searchData=function(field,type,value){if(this.modExists("filter",true)){return this.modules.filter.search("data",field,type,value);}};//get table html
  Tabulator.prototype.getHtml=function(visible,style,config){if(this.modExists("export",true)){return this.modules["export"].getHtml(visible,style,config);}};//get print html
  Tabulator.prototype.print=function(visible,style,config){if(this.modExists("print",true)){return this.modules.print.printFullscreen(visible,style,config);}};//retrieve Ajax URL
  Tabulator.prototype.getAjaxUrl=function(){if(this.modExists("ajax",true)){return this.modules.ajax.getUrl();}};//replace data, keeping table in position with same sort
  Tabulator.prototype.replaceData=function(data,params,config){if(this.modExists("ajax")){this.modules.ajax.blockActiveRequest();}return this._setData(data,params,config,true);};//update table data
  Tabulator.prototype.updateData=function(data){var _this26=this;var self=this;var responses=0;return new Promise(function(resolve,reject){if(_this26.modExists("ajax")){_this26.modules.ajax.blockActiveRequest();}if(typeof data==="string"){data=JSON.parse(data);}if(data){data.forEach(function(item){var row=self.rowManager.findRow(item[self.options.index]);if(row){responses++;row.updateData(item).then(function(){responses--;if(!responses){resolve();}});}});}else {console.warn("Update Error - No data provided");reject("Update Error - No data provided");}});};Tabulator.prototype.addData=function(data,pos,index){var _this27=this;return new Promise(function(resolve,reject){if(_this27.modExists("ajax")){_this27.modules.ajax.blockActiveRequest();}if(typeof data==="string"){data=JSON.parse(data);}if(data){_this27.rowManager.addRows(data,pos,index).then(function(rows){var output=[];rows.forEach(function(row){output.push(row.getComponent());});resolve(output);});}else {console.warn("Update Error - No data provided");reject("Update Error - No data provided");}});};//update table data
  Tabulator.prototype.updateOrAddData=function(data){var _this28=this;var self=this,rows=[],responses=0;return new Promise(function(resolve,reject){if(_this28.modExists("ajax")){_this28.modules.ajax.blockActiveRequest();}if(typeof data==="string"){data=JSON.parse(data);}if(data){data.forEach(function(item){var row=self.rowManager.findRow(item[self.options.index]);responses++;if(row){row.updateData(item).then(function(){responses--;rows.push(row.getComponent());if(!responses){resolve(rows);}});}else {self.rowManager.addRows(item).then(function(newRows){responses--;rows.push(newRows[0].getComponent());if(!responses){resolve(rows);}});}});}else {console.warn("Update Error - No data provided");reject("Update Error - No data provided");}});};//get row object
  Tabulator.prototype.getRow=function(index){var row=this.rowManager.findRow(index);if(row){return row.getComponent();}else {console.warn("Find Error - No matching row found:",index);return false;}};//get row object
  Tabulator.prototype.getRowFromPosition=function(position,active){var row=this.rowManager.getRowFromPosition(position,active);if(row){return row.getComponent();}else {console.warn("Find Error - No matching row found:",position);return false;}};//delete row from table
  Tabulator.prototype.deleteRow=function(index){var _this29=this;return new Promise(function(resolve,reject){var self=_this29,count=0,successCount=0,foundRows=[];function doneCheck(){count++;if(count==index.length){if(successCount){self.rowManager.reRenderInPosition();resolve();}}}if(!Array.isArray(index)){index=[index];}//find matching rows
  index.forEach(function(item){var row=_this29.rowManager.findRow(item,true);if(row){foundRows.push(row);}else {console.warn("Delete Error - No matching row found:",item);reject("Delete Error - No matching row found");doneCheck();}});//sort rows into correct order to ensure smooth delete from table
  foundRows.sort(function(a,b){return _this29.rowManager.rows.indexOf(a)>_this29.rowManager.rows.indexOf(b)?1:-1;});foundRows.forEach(function(row){row["delete"]().then(function(){successCount++;doneCheck();})["catch"](function(err){doneCheck();reject(err);});});});};//add row to table
  Tabulator.prototype.addRow=function(data,pos,index){var _this30=this;return new Promise(function(resolve,reject){if(typeof data==="string"){data=JSON.parse(data);}_this30.rowManager.addRows(data,pos,index).then(function(rows){//recalc column calculations if present
  if(_this30.modExists("columnCalcs")){_this30.modules.columnCalcs.recalc(_this30.rowManager.activeRows);}resolve(rows[0].getComponent());});});};//update a row if it exitsts otherwise create it
  Tabulator.prototype.updateOrAddRow=function(index,data){var _this31=this;return new Promise(function(resolve,reject){var row=_this31.rowManager.findRow(index);if(typeof data==="string"){data=JSON.parse(data);}if(row){row.updateData(data).then(function(){//recalc column calculations if present
  if(_this31.modExists("columnCalcs")){_this31.modules.columnCalcs.recalc(_this31.rowManager.activeRows);}resolve(row.getComponent());})["catch"](function(err){reject(err);});}else {row=_this31.rowManager.addRows(data).then(function(rows){//recalc column calculations if present
  if(_this31.modExists("columnCalcs")){_this31.modules.columnCalcs.recalc(_this31.rowManager.activeRows);}resolve(rows[0].getComponent());})["catch"](function(err){reject(err);});}});};//update row data
  Tabulator.prototype.updateRow=function(index,data){var _this32=this;return new Promise(function(resolve,reject){var row=_this32.rowManager.findRow(index);if(typeof data==="string"){data=JSON.parse(data);}if(row){row.updateData(data).then(function(){resolve(row.getComponent());})["catch"](function(err){reject(err);});}else {console.warn("Update Error - No matching row found:",index);reject("Update Error - No matching row found");}});};//scroll to row in DOM
  Tabulator.prototype.scrollToRow=function(index,position,ifVisible){var _this33=this;return new Promise(function(resolve,reject){var row=_this33.rowManager.findRow(index);if(row){_this33.rowManager.scrollToRow(row,position,ifVisible).then(function(){resolve();})["catch"](function(err){reject(err);});}else {console.warn("Scroll Error - No matching row found:",index);reject("Scroll Error - No matching row found");}});};Tabulator.prototype.moveRow=function(from,to,after){var fromRow=this.rowManager.findRow(from);if(fromRow){fromRow.moveToRow(to,after);}else {console.warn("Move Error - No matching row found:",from);}};Tabulator.prototype.getRows=function(active){if(active===true){console.warn("passing a boolean to the getRows function is deprecated, you should now pass the string 'active'");active="active";}return this.rowManager.getComponents(active);};//get position of row in table
  Tabulator.prototype.getRowPosition=function(index,active){var row=this.rowManager.findRow(index);if(row){return this.rowManager.getRowPosition(row,active);}else {console.warn("Position Error - No matching row found:",index);return false;}};//copy table data to clipboard
  Tabulator.prototype.copyToClipboard=function(selector){if(this.modExists("clipboard",true)){this.modules.clipboard.copy(selector);}};/////////////// Column Functions  ///////////////
  Tabulator.prototype.setColumns=function(definition){this.columnManager.setColumns(definition);};Tabulator.prototype.getColumns=function(structured){return this.columnManager.getComponents(structured);};Tabulator.prototype.getColumn=function(field){var col=this.columnManager.findColumn(field);if(col){return col.getComponent();}else {console.warn("Find Error - No matching column found:",field);return false;}};Tabulator.prototype.getColumnDefinitions=function(){return this.columnManager.getDefinitionTree();};Tabulator.prototype.getColumnLayout=function(){if(this.modExists("persistence",true)){return this.modules.persistence.parseColumns(this.columnManager.getColumns());}};Tabulator.prototype.setColumnLayout=function(layout){if(this.modExists("persistence",true)){this.columnManager.setColumns(this.modules.persistence.mergeDefinition(this.options.columns,layout));return true;}return false;};Tabulator.prototype.showColumn=function(field){var column=this.columnManager.findColumn(field);if(column){column.show();if(this.options.responsiveLayout&&this.modExists("responsiveLayout",true)){this.modules.responsiveLayout.update();}}else {console.warn("Column Show Error - No matching column found:",field);return false;}};Tabulator.prototype.hideColumn=function(field){var column=this.columnManager.findColumn(field);if(column){column.hide();if(this.options.responsiveLayout&&this.modExists("responsiveLayout",true)){this.modules.responsiveLayout.update();}}else {console.warn("Column Hide Error - No matching column found:",field);return false;}};Tabulator.prototype.toggleColumn=function(field){var column=this.columnManager.findColumn(field);if(column){if(column.visible){column.hide();}else {column.show();}}else {console.warn("Column Visibility Toggle Error - No matching column found:",field);return false;}};Tabulator.prototype.addColumn=function(definition,before,field){var _this34=this;return new Promise(function(resolve,reject){var column=_this34.columnManager.findColumn(field);_this34.columnManager.addColumn(definition,before,column).then(function(column){resolve(column.getComponent());})["catch"](function(err){reject(err);});});};Tabulator.prototype.deleteColumn=function(field){var _this35=this;return new Promise(function(resolve,reject){var column=_this35.columnManager.findColumn(field);if(column){column["delete"]().then(function(){resolve();})["catch"](function(err){reject(err);});}else {console.warn("Column Delete Error - No matching column found:",field);reject();}});};Tabulator.prototype.updateColumnDefinition=function(field,definition){var _this36=this;return new Promise(function(resolve,reject){var column=_this36.columnManager.findColumn(field);if(column){column.updateDefinition(definition).then(function(col){resolve(col);})["catch"](function(err){reject(err);});}else {console.warn("Column Update Error - No matching column found:",field);reject();}});};Tabulator.prototype.moveColumn=function(from,to,after){var fromColumn=this.columnManager.findColumn(from);var toColumn=this.columnManager.findColumn(to);if(fromColumn){if(toColumn){this.columnManager.moveColumn(fromColumn,toColumn,after);}else {console.warn("Move Error - No matching column found:",toColumn);}}else {console.warn("Move Error - No matching column found:",from);}};//scroll to column in DOM
  Tabulator.prototype.scrollToColumn=function(field,position,ifVisible){var _this37=this;return new Promise(function(resolve,reject){var column=_this37.columnManager.findColumn(field);if(column){_this37.columnManager.scrollToColumn(column,position,ifVisible).then(function(){resolve();})["catch"](function(err){reject(err);});}else {console.warn("Scroll Error - No matching column found:",field);reject("Scroll Error - No matching column found");}});};//////////// Localization Functions  ////////////
  Tabulator.prototype.setLocale=function(locale){this.modules.localize.setLocale(locale);};Tabulator.prototype.getLocale=function(){return this.modules.localize.getLocale();};Tabulator.prototype.getLang=function(locale){return this.modules.localize.getLang(locale);};//////////// General Public Functions ////////////
  //redraw list without updating data
  Tabulator.prototype.redraw=function(force){this.columnManager.redraw(force);this.rowManager.redraw(force);};Tabulator.prototype.setHeight=function(height){if(this.rowManager.renderMode!=="classic"){this.options.height=isNaN(height)?height:height+"px";this.element.style.height=this.options.height;this.rowManager.setRenderMode();this.rowManager.redraw();}else {console.warn("setHeight function is not available in classic render mode");}};///////////////////// Sorting ////////////////////
  //trigger sort
  Tabulator.prototype.setSort=function(sortList,dir){if(this.modExists("sort",true)){this.modules.sort.setSort(sortList,dir);this.rowManager.sorterRefresh();}};Tabulator.prototype.getSorters=function(){if(this.modExists("sort",true)){return this.modules.sort.getSort();}};Tabulator.prototype.clearSort=function(){if(this.modExists("sort",true)){this.modules.sort.clear();this.rowManager.sorterRefresh();}};///////////////////// Filtering ////////////////////
  //set standard filters
  Tabulator.prototype.setFilter=function(field,type,value,params){if(this.modExists("filter",true)){this.modules.filter.setFilter(field,type,value,params);this.rowManager.filterRefresh();}};//set standard filters
  Tabulator.prototype.refreshFilter=function(){if(this.modExists("filter",true)){this.rowManager.filterRefresh();}};//add filter to array
  Tabulator.prototype.addFilter=function(field,type,value,params){if(this.modExists("filter",true)){this.modules.filter.addFilter(field,type,value,params);this.rowManager.filterRefresh();}};//get all filters
  Tabulator.prototype.getFilters=function(all){if(this.modExists("filter",true)){return this.modules.filter.getFilters(all);}};Tabulator.prototype.setHeaderFilterFocus=function(field){if(this.modExists("filter",true)){var column=this.columnManager.findColumn(field);if(column){this.modules.filter.setHeaderFilterFocus(column);}else {console.warn("Column Filter Focus Error - No matching column found:",field);return false;}}};Tabulator.prototype.getHeaderFilterValue=function(field){if(this.modExists("filter",true)){var column=this.columnManager.findColumn(field);if(column){return this.modules.filter.getHeaderFilterValue(column);}else {console.warn("Column Filter Error - No matching column found:",field);}}};Tabulator.prototype.setHeaderFilterValue=function(field,value){if(this.modExists("filter",true)){var column=this.columnManager.findColumn(field);if(column){this.modules.filter.setHeaderFilterValue(column,value);}else {console.warn("Column Filter Error - No matching column found:",field);return false;}}};Tabulator.prototype.getHeaderFilters=function(){if(this.modExists("filter",true)){return this.modules.filter.getHeaderFilters();}};//remove filter from array
  Tabulator.prototype.removeFilter=function(field,type,value){if(this.modExists("filter",true)){this.modules.filter.removeFilter(field,type,value);this.rowManager.filterRefresh();}};//clear filters
  Tabulator.prototype.clearFilter=function(all){if(this.modExists("filter",true)){this.modules.filter.clearFilter(all);this.rowManager.filterRefresh();}};//clear header filters
  Tabulator.prototype.clearHeaderFilter=function(){if(this.modExists("filter",true)){this.modules.filter.clearHeaderFilter();this.rowManager.filterRefresh();}};///////////////////// select ////////////////////
  Tabulator.prototype.selectRow=function(rows){if(this.modExists("selectRow",true)){if(rows===true){console.warn("passing a boolean to the selectRowselectRow function is deprecated, you should now pass the string 'active'");rows="active";}this.modules.selectRow.selectRows(rows);}};Tabulator.prototype.deselectRow=function(rows){if(this.modExists("selectRow",true)){this.modules.selectRow.deselectRows(rows);}};Tabulator.prototype.toggleSelectRow=function(row){if(this.modExists("selectRow",true)){this.modules.selectRow.toggleRow(row);}};Tabulator.prototype.getSelectedRows=function(){if(this.modExists("selectRow",true)){return this.modules.selectRow.getSelectedRows();}};Tabulator.prototype.getSelectedData=function(){if(this.modExists("selectRow",true)){return this.modules.selectRow.getSelectedData();}};///////////////////// validation  ////////////////////
  Tabulator.prototype.getInvalidCells=function(){if(this.modExists("validate",true)){return this.modules.validate.getInvalidCells();}};Tabulator.prototype.clearCellValidation=function(cells){var _this38=this;if(this.modExists("validate",true)){if(!cells){cells=this.modules.validate.getInvalidCells();}if(!Array.isArray(cells)){cells=[cells];}cells.forEach(function(cell){_this38.modules.validate.clearValidation(cell._getSelf());});}};Tabulator.prototype.validate=function(cells){var output=[];//clear row data
  this.rowManager.rows.forEach(function(row){var valid=row.validate();if(valid!==true){output=output.concat(valid);}});return output.length?output:true;};//////////// Pagination Functions  ////////////
  Tabulator.prototype.setMaxPage=function(max){if(this.options.pagination&&this.modExists("page")){this.modules.page.setMaxPage(max);}else {return false;}};Tabulator.prototype.setPage=function(page){if(this.options.pagination&&this.modExists("page")){return this.modules.page.setPage(page);}else {return new Promise(function(resolve,reject){reject();});}};Tabulator.prototype.setPageToRow=function(row){var _this39=this;return new Promise(function(resolve,reject){if(_this39.options.pagination&&_this39.modExists("page")){row=_this39.rowManager.findRow(row);if(row){_this39.modules.page.setPageToRow(row).then(function(){resolve();})["catch"](function(){reject();});}else {reject();}}else {reject();}});};Tabulator.prototype.setPageSize=function(size){if(this.options.pagination&&this.modExists("page")){this.modules.page.setPageSize(size);this.modules.page.setPage(1).then(function(){})["catch"](function(){});}else {return false;}};Tabulator.prototype.getPageSize=function(){if(this.options.pagination&&this.modExists("page",true)){return this.modules.page.getPageSize();}};Tabulator.prototype.previousPage=function(){if(this.options.pagination&&this.modExists("page")){this.modules.page.previousPage();}else {return false;}};Tabulator.prototype.nextPage=function(){if(this.options.pagination&&this.modExists("page")){this.modules.page.nextPage();}else {return false;}};Tabulator.prototype.getPage=function(){if(this.options.pagination&&this.modExists("page")){return this.modules.page.getPage();}else {return false;}};Tabulator.prototype.getPageMax=function(){if(this.options.pagination&&this.modExists("page")){return this.modules.page.getPageMax();}else {return false;}};///////////////// Grouping Functions ///////////////
  Tabulator.prototype.setGroupBy=function(groups){if(this.modExists("groupRows",true)){this.options.groupBy=groups;this.modules.groupRows.initialize();this.rowManager.refreshActiveData("display");if(this.options.persistence&&this.modExists("persistence",true)&&this.modules.persistence.config.group){this.modules.persistence.save("group");}}else {return false;}};Tabulator.prototype.setGroupValues=function(groupValues){if(this.modExists("groupRows",true)){this.options.groupValues=groupValues;this.modules.groupRows.initialize();this.rowManager.refreshActiveData("display");if(this.options.persistence&&this.modExists("persistence",true)&&this.modules.persistence.config.group){this.modules.persistence.save("group");}}else {return false;}};Tabulator.prototype.setGroupStartOpen=function(values){if(this.modExists("groupRows",true)){this.options.groupStartOpen=values;this.modules.groupRows.initialize();if(this.options.groupBy){this.rowManager.refreshActiveData("group");if(this.options.persistence&&this.modExists("persistence",true)&&this.modules.persistence.config.group){this.modules.persistence.save("group");}}else {console.warn("Grouping Update - cant refresh view, no groups have been set");}}else {return false;}};Tabulator.prototype.setGroupHeader=function(values){if(this.modExists("groupRows",true)){this.options.groupHeader=values;this.modules.groupRows.initialize();if(this.options.groupBy){this.rowManager.refreshActiveData("group");if(this.options.persistence&&this.modExists("persistence",true)&&this.modules.persistence.config.group){this.modules.persistence.save("group");}}else {console.warn("Grouping Update - cant refresh view, no groups have been set");}}else {return false;}};Tabulator.prototype.getGroups=function(values){if(this.modExists("groupRows",true)){return this.modules.groupRows.getGroups(true);}else {return false;}};// get grouped table data in the same format as getData()
  Tabulator.prototype.getGroupedData=function(){if(this.modExists("groupRows",true)){return this.options.groupBy?this.modules.groupRows.getGroupedData():this.getData();}};Tabulator.prototype.getEditedCells=function(){if(this.modExists("edit",true)){return this.modules.edit.getEditedCells();}};Tabulator.prototype.clearCellEdited=function(cells){var _this40=this;if(this.modExists("edit",true)){if(!cells){cells=this.modules.edit.getEditedCells();}if(!Array.isArray(cells)){cells=[cells];}cells.forEach(function(cell){_this40.modules.edit.clearEdited(cell._getSelf());});}};///////////////// Column Calculation Functions ///////////////
  Tabulator.prototype.getCalcResults=function(){if(this.modExists("columnCalcs",true)){return this.modules.columnCalcs.getResults();}else {return false;}};Tabulator.prototype.recalc=function(){if(this.modExists("columnCalcs",true)){this.modules.columnCalcs.recalcAll(this.rowManager.activeRows);}};/////////////// Navigation Management //////////////
  Tabulator.prototype.navigatePrev=function(){var cell=false;if(this.modExists("edit",true)){cell=this.modules.edit.currentCell;if(cell){return cell.nav().prev();}}return false;};Tabulator.prototype.navigateNext=function(){var cell=false;if(this.modExists("edit",true)){cell=this.modules.edit.currentCell;if(cell){return cell.nav().next();}}return false;};Tabulator.prototype.navigateLeft=function(){var cell=false;if(this.modExists("edit",true)){cell=this.modules.edit.currentCell;if(cell){e.preventDefault();return cell.nav().left();}}return false;};Tabulator.prototype.navigateRight=function(){var cell=false;if(this.modExists("edit",true)){cell=this.modules.edit.currentCell;if(cell){e.preventDefault();return cell.nav().right();}}return false;};Tabulator.prototype.navigateUp=function(){var cell=false;if(this.modExists("edit",true)){cell=this.modules.edit.currentCell;if(cell){e.preventDefault();return cell.nav().up();}}return false;};Tabulator.prototype.navigateDown=function(){var cell=false;if(this.modExists("edit",true)){cell=this.modules.edit.currentCell;if(cell){e.preventDefault();return cell.nav().down();}}return false;};/////////////// History Management //////////////
  Tabulator.prototype.undo=function(){if(this.options.history&&this.modExists("history",true)){return this.modules.history.undo();}else {return false;}};Tabulator.prototype.redo=function(){if(this.options.history&&this.modExists("history",true)){return this.modules.history.redo();}else {return false;}};Tabulator.prototype.getHistoryUndoSize=function(){if(this.options.history&&this.modExists("history",true)){return this.modules.history.getHistoryUndoSize();}else {return false;}};Tabulator.prototype.getHistoryRedoSize=function(){if(this.options.history&&this.modExists("history",true)){return this.modules.history.getHistoryRedoSize();}else {return false;}};Tabulator.prototype.clearHistory=function(){if(this.options.history&&this.modExists("history",true)){return this.modules.history.clear();}else {return false;}};/////////////// Download Management //////////////
  Tabulator.prototype.download=function(type,filename,options,active){if(this.modExists("download",true)){this.modules.download.download(type,filename,options,active);}};Tabulator.prototype.downloadToTab=function(type,filename,options,active){if(this.modExists("download",true)){this.modules.download.download(type,filename,options,active,true);}};/////////// Inter Table Communications ///////////
  Tabulator.prototype.tableComms=function(table,module,action,data){this.modules.comms.receive(table,module,action,data);};////////////// Extension Management //////////////
  //object to hold module
  Tabulator.prototype.moduleBindings={};//extend module
  Tabulator.prototype.extendModule=function(name,property,values){if(Tabulator.prototype.moduleBindings[name]){var source=Tabulator.prototype.moduleBindings[name].prototype[property];if(source){if((typeof values==='undefined'?'undefined':_typeof(values))=="object"){for(var key in values){source[key]=values[key];}}else {console.warn("Module Error - Invalid value type, it must be an object");}}else {console.warn("Module Error - property does not exist:",property);}}else {console.warn("Module Error - module does not exist:",name);}};//add module to tabulator
  Tabulator.prototype.registerModule=function(name,module){Tabulator.prototype.moduleBindings[name]=module;};//ensure that module are bound to instantiated function
  Tabulator.prototype.bindModules=function(){this.modules={};for(var name in Tabulator.prototype.moduleBindings){this.modules[name]=new Tabulator.prototype.moduleBindings[name](this);}};//Check for module
  Tabulator.prototype.modExists=function(plugin,required){if(this.modules[plugin]){return true;}else {if(required){console.error("Tabulator Module Not Installed: "+plugin);}return false;}};Tabulator.prototype.helpers={elVisible:function elVisible(el){return !(el.offsetWidth<=0&&el.offsetHeight<=0);},elOffset:function elOffset(el){var box=el.getBoundingClientRect();return {top:box.top+window.pageYOffset-document.documentElement.clientTop,left:box.left+window.pageXOffset-document.documentElement.clientLeft};},deepClone:function deepClone(obj){var clone=Object.assign(Array.isArray(obj)?[]:{},obj);for(var i in obj){if(obj[i]!=null&&_typeof(obj[i])==="object"){if(obj[i]instanceof Date){clone[i]=new Date(obj[i]);}else {clone[i]=this.deepClone(obj[i]);}}}return clone;}};Tabulator.prototype.comms={tables:[],register:function register(table){Tabulator.prototype.comms.tables.push(table);},deregister:function deregister(table){var index=Tabulator.prototype.comms.tables.indexOf(table);if(index>-1){Tabulator.prototype.comms.tables.splice(index,1);}},lookupTable:function lookupTable(query,silent){var results=[],matches,match;if(typeof query==="string"){matches=document.querySelectorAll(query);if(matches.length){for(var i=0;i<matches.length;i++){match=Tabulator.prototype.comms.matchElement(matches[i]);if(match){results.push(match);}}}}else if(typeof HTMLElement!=="undefined"&&query instanceof HTMLElement||query instanceof Tabulator){match=Tabulator.prototype.comms.matchElement(query);if(match){results.push(match);}}else if(Array.isArray(query)){query.forEach(function(item){results=results.concat(Tabulator.prototype.comms.lookupTable(item));});}else {if(!silent){console.warn("Table Connection Error - Invalid Selector",query);}}return results;},matchElement:function matchElement(element){return Tabulator.prototype.comms.tables.find(function(table){return element instanceof Tabulator?table===element:table.element===element;});}};Tabulator.prototype.findTable=function(query){var results=Tabulator.prototype.comms.lookupTable(query,true);return Array.isArray(results)&&!results.length?false:results;};var Layout=function Layout(table){this.table=table;this.mode=null;};//initialize layout system
  Layout.prototype.initialize=function(layout){if(this.modes[layout]){this.mode=layout;}else {console.warn("Layout Error - invalid mode set, defaulting to 'fitData' : "+layout);this.mode='fitData';}this.table.element.setAttribute("tabulator-layout",this.mode);};Layout.prototype.getMode=function(){return this.mode;};//trigger table layout
  Layout.prototype.layout=function(){this.modes[this.mode].call(this,this.table.columnManager.columnsByIndex);if(this.mode.indexOf("fitData")===0&&this.table.options.persistence&&this.table.modExists("persistence",true)&&this.table.modules.persistence.config.columns){this.table.modules.persistence.save("columns");}};//layout render functions
  Layout.prototype.modes={//resize columns to fit data they contain
  "fitData":function fitData(columns){if(this.table.options.virtualDomHoz){this.table.vdomHoz.fitDataLayoutOverride();}else {columns.forEach(function(column){column.reinitializeWidth();});}if(this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){this.table.modules.responsiveLayout.update();}},//resize columns to fit data they contain and stretch row to fill table
  "fitDataFill":function fitDataFill(columns){columns.forEach(function(column){column.reinitializeWidth();});if(this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){this.table.modules.responsiveLayout.update();}},//resize columns to fit data they contain
  "fitDataTable":function fitDataTable(columns){columns.forEach(function(column){column.reinitializeWidth();});if(this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){this.table.modules.responsiveLayout.update();}},//resize columns to fit data the contain and stretch last column to fill table
  "fitDataStretch":function fitDataStretch(columns){var _this41=this;var colsWidth=0,tableWidth=this.table.rowManager.element.clientWidth,gap=0,lastCol=false;columns.forEach(function(column,i){if(!column.widthFixed){column.reinitializeWidth();}if(_this41.table.options.responsiveLayout?column.modules.responsive.visible:column.visible){lastCol=column;}if(column.visible){colsWidth+=column.getWidth();}});if(lastCol){gap=tableWidth-colsWidth+lastCol.getWidth();if(this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){lastCol.setWidth(0);this.table.modules.responsiveLayout.update();}if(gap>0){lastCol.setWidth(gap);}else {lastCol.reinitializeWidth();}}else {if(this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){this.table.modules.responsiveLayout.update();}}},//resize columns to fit
  "fitColumns":function fitColumns(columns){var self=this;var totalWidth=self.table.element.clientWidth;//table element width
  var fixedWidth=0;//total width of columns with a defined width
  var flexWidth=0;//total width available to flexible columns
  var flexGrowUnits=0;//total number of widthGrow blocks accross all columns
  var flexColWidth=0;//desired width of flexible columns
  var flexColumns=[];//array of flexible width columns
  var fixedShrinkColumns=[];//array of fixed width columns that can shrink
  var flexShrinkUnits=0;//total number of widthShrink blocks accross all columns
  var overflowWidth=0;//horizontal overflow width
  var gapFill=0;//number of pixels to be added to final column to close and half pixel gaps
  function calcWidth(width){var colWidth;if(typeof width=="string"){if(width.indexOf("%")>-1){colWidth=totalWidth/100*parseInt(width);}else {colWidth=parseInt(width);}}else {colWidth=width;}return colWidth;}//ensure columns resize to take up the correct amount of space
  function scaleColumns(columns,freeSpace,colWidth,shrinkCols){var oversizeCols=[],oversizeSpace=0,remainingSpace=0,nextColWidth=0,remainingFlexGrowUnits=flexGrowUnits,gap=0,changeUnits=0,undersizeCols=[];function calcGrow(col){return colWidth*(col.column.definition.widthGrow||1);}function calcShrink(col){return calcWidth(col.width)-colWidth*(col.column.definition.widthShrink||0);}columns.forEach(function(col,i){var width=shrinkCols?calcShrink(col):calcGrow(col);if(col.column.minWidth>=width){oversizeCols.push(col);}else {if(col.column.maxWidth&&col.column.maxWidth<width){col.width=col.column.maxWidth;freeSpace-=col.column.maxWidth;remainingFlexGrowUnits-=shrinkCols?col.column.definition.widthShrink||1:col.column.definition.widthGrow||1;if(remainingFlexGrowUnits){colWidth=Math.floor(freeSpace/remainingFlexGrowUnits);}}else {undersizeCols.push(col);changeUnits+=shrinkCols?col.column.definition.widthShrink||1:col.column.definition.widthGrow||1;}}});if(oversizeCols.length){oversizeCols.forEach(function(col){oversizeSpace+=shrinkCols?col.width-col.column.minWidth:col.column.minWidth;col.width=col.column.minWidth;});remainingSpace=freeSpace-oversizeSpace;nextColWidth=changeUnits?Math.floor(remainingSpace/changeUnits):remainingSpace;gap=remainingSpace-nextColWidth*changeUnits;gap+=scaleColumns(undersizeCols,remainingSpace,nextColWidth,shrinkCols);}else {gap=changeUnits?freeSpace-Math.floor(freeSpace/changeUnits)*changeUnits:freeSpace;undersizeCols.forEach(function(column){column.width=shrinkCols?calcShrink(column):calcGrow(column);});}return gap;}if(this.table.options.responsiveLayout&&this.table.modExists("responsiveLayout",true)){this.table.modules.responsiveLayout.update();}//adjust for vertical scrollbar if present
  if(this.table.rowManager.element.scrollHeight>this.table.rowManager.element.clientHeight){totalWidth-=this.table.rowManager.element.offsetWidth-this.table.rowManager.element.clientWidth;}columns.forEach(function(column){var width,minWidth,colWidth;if(column.visible){width=column.definition.width;minWidth=parseInt(column.minWidth);if(width){colWidth=calcWidth(width);fixedWidth+=colWidth>minWidth?colWidth:minWidth;if(column.definition.widthShrink){fixedShrinkColumns.push({column:column,width:colWidth>minWidth?colWidth:minWidth});flexShrinkUnits+=column.definition.widthShrink;}}else {flexColumns.push({column:column,width:0});flexGrowUnits+=column.definition.widthGrow||1;}}});//calculate available space
  flexWidth=totalWidth-fixedWidth;//calculate correct column size
  flexColWidth=Math.floor(flexWidth/flexGrowUnits);//generate column widths
  var gapFill=scaleColumns(flexColumns,flexWidth,flexColWidth,false);//increase width of last column to account for rounding errors
  if(flexColumns.length&&gapFill>0){flexColumns[flexColumns.length-1].width+=+gapFill;}//caculate space for columns to be shrunk into
  flexColumns.forEach(function(col){flexWidth-=col.width;});overflowWidth=Math.abs(gapFill)+flexWidth;//shrink oversize columns if there is no available space
  if(overflowWidth>0&&flexShrinkUnits){gapFill=scaleColumns(fixedShrinkColumns,overflowWidth,Math.floor(overflowWidth/flexShrinkUnits),true);}//decrease width of last column to account for rounding errors
  if(fixedShrinkColumns.length){fixedShrinkColumns[fixedShrinkColumns.length-1].width-=gapFill;}flexColumns.forEach(function(col){col.column.setWidth(col.width);});fixedShrinkColumns.forEach(function(col){col.column.setWidth(col.width);});}};Tabulator.prototype.registerModule("layout",Layout);var Localize=function Localize(table){this.table=table;//hold Tabulator object
  this.locale="default";//current locale
  this.lang=false;//current language
  this.bindings={};//update events to call when locale is changed
  this.langList={};};Localize.prototype.initialize=function(){this.langList=Tabulator.prototype.helpers.deepClone(this.langs);};//set header placehoder
  Localize.prototype.setHeaderFilterPlaceholder=function(placeholder){this.langList["default"].headerFilters["default"]=placeholder;};//set header filter placeholder by column
  Localize.prototype.setHeaderFilterColumnPlaceholder=function(column,placeholder){this.langList["default"].headerFilters.columns[column]=placeholder;if(this.lang&&!this.lang.headerFilters.columns[column]){this.lang.headerFilters.columns[column]=placeholder;}};//setup a lang description object
  Localize.prototype.installLang=function(locale,lang){if(this.langList[locale]){this._setLangProp(this.langList[locale],lang);}else {this.langList[locale]=lang;}};Localize.prototype._setLangProp=function(lang,values){for(var key in values){if(lang[key]&&_typeof(lang[key])=="object"){this._setLangProp(lang[key],values[key]);}else {lang[key]=values[key];}}};//set current locale
  Localize.prototype.setLocale=function(desiredLocale){var self=this;desiredLocale=desiredLocale||"default";//fill in any matching languge values
  function traverseLang(trans,path){for(var prop in trans){if(_typeof(trans[prop])=="object"){if(!path[prop]){path[prop]={};}traverseLang(trans[prop],path[prop]);}else {path[prop]=trans[prop];}}}//determing correct locale to load
  if(desiredLocale===true&&navigator.language){//get local from system
  desiredLocale=navigator.language.toLowerCase();}if(desiredLocale){//if locale is not set, check for matching top level locale else use default
  if(!self.langList[desiredLocale]){var prefix=desiredLocale.split("-")[0];if(self.langList[prefix]){console.warn("Localization Error - Exact matching locale not found, using closest match: ",desiredLocale,prefix);desiredLocale=prefix;}else {console.warn("Localization Error - Matching locale not found, using default: ",desiredLocale);desiredLocale="default";}}}self.locale=desiredLocale;//load default lang template
  self.lang=Tabulator.prototype.helpers.deepClone(self.langList["default"]||{});if(desiredLocale!="default"){traverseLang(self.langList[desiredLocale],self.lang);}self.table.options.localized.call(self.table,self.locale,self.lang);self._executeBindings();};//get current locale
  Localize.prototype.getLocale=function(locale){return self.locale;};//get lang object for given local or current if none provided
  Localize.prototype.getLang=function(locale){return locale?this.langList[locale]:this.lang;};//get text for current locale
  Localize.prototype.getText=function(path,value){var path=value?path+"|"+value:path,pathArray=path.split("|"),text=this._getLangElement(pathArray,this.locale);// if(text === false){
  // 	console.warn("Localization Error - Matching localized text not found for given path: ", path);
  // }
  return text||"";};//traverse langs object and find localized copy
  Localize.prototype._getLangElement=function(path,locale){var self=this;var root=self.lang;path.forEach(function(level){var rootPath;if(root){rootPath=root[level];if(typeof rootPath!="undefined"){root=rootPath;}else {root=false;}}});return root;};//set update binding
  Localize.prototype.bind=function(path,callback){if(!this.bindings[path]){this.bindings[path]=[];}this.bindings[path].push(callback);callback(this.getText(path),this.lang);};//itterate through bindings and trigger updates
  Localize.prototype._executeBindings=function(){var self=this;var _loop=function _loop(path){self.bindings[path].forEach(function(binding){binding(self.getText(path),self.lang);});};for(var path in self.bindings){_loop(path);}};//Localized text listings
  Localize.prototype.langs={"default":{//hold default locale text
  "groups":{"item":"item","items":"items"},"columns":{},"ajax":{"loading":"Loading","error":"Error"},"pagination":{"page_size":"Page Size","page_title":"Show Page","first":"First","first_title":"First Page","last":"Last","last_title":"Last Page","prev":"Prev","prev_title":"Prev Page","next":"Next","next_title":"Next Page","all":"All"},"headerFilters":{"default":"filter column...","columns":{}}}};Tabulator.prototype.registerModule("localize",Localize);var Comms=function Comms(table){this.table=table;};Comms.prototype.getConnections=function(selectors){var self=this,connections=[],connection;connection=Tabulator.prototype.comms.lookupTable(selectors);connection.forEach(function(con){if(self.table!==con){connections.push(con);}});return connections;};Comms.prototype.send=function(selectors,module,action,data){var self=this,connections=this.getConnections(selectors);connections.forEach(function(connection){connection.tableComms(self.table.element,module,action,data);});if(!connections.length&&selectors){console.warn("Table Connection Error - No tables matching selector found",selectors);}};Comms.prototype.receive=function(table,module,action,data){if(this.table.modExists(module)){return this.table.modules[module].commsReceived(table,action,data);}else {console.warn("Inter-table Comms Error - no such module:",module);}};Tabulator.prototype.registerModule("comms",Comms);var Accessor=function Accessor(table){this.table=table;//hold Tabulator object
  this.allowedTypes=["","data","download","clipboard","print","htmlOutput"];//list of accessor types
  };//initialize column accessor
  Accessor.prototype.initializeColumn=function(column){var self=this,match=false,config={};this.allowedTypes.forEach(function(type){var key="accessor"+(type.charAt(0).toUpperCase()+type.slice(1)),accessor;if(column.definition[key]){accessor=self.lookupAccessor(column.definition[key]);if(accessor){match=true;config[key]={accessor:accessor,params:column.definition[key+"Params"]||{}};}}});if(match){column.modules.accessor=config;}};Accessor.prototype.lookupAccessor=function(value){var accessor=false;//set column accessor
  switch(typeof value==='undefined'?'undefined':_typeof(value)){case"string":if(this.accessors[value]){accessor=this.accessors[value];}else {console.warn("Accessor Error - No such accessor found, ignoring: ",value);}break;case"function":accessor=value;break;}return accessor;};//apply accessor to row
  Accessor.prototype.transformRow=function(row,type){var key="accessor"+(type.charAt(0).toUpperCase()+type.slice(1)),rowComponent=row.getComponent();//clone data object with deep copy to isolate internal data from returned result
  var data=Tabulator.prototype.helpers.deepClone(row.data||{});this.table.columnManager.traverse(function(column){var value,accessor,params,colCompnent;if(column.modules.accessor){accessor=column.modules.accessor[key]||column.modules.accessor.accessor||false;if(accessor){value=column.getFieldValue(data);if(value!="undefined"){colCompnent=column.getComponent();params=typeof accessor.params==="function"?accessor.params(value,data,type,colCompnent,rowComponent):accessor.params;column.setFieldValue(data,accessor.accessor(value,data,type,params,colCompnent,rowComponent));}}}});return data;},//default accessors
  Accessor.prototype.accessors={};Tabulator.prototype.registerModule("accessor",Accessor);var Ajax=function Ajax(table){this.table=table;//hold Tabulator object
  this.config=false;//hold config object for ajax request
  this.url="";//request URL
  this.urlGenerator=false;this.params=false;//request parameters
  this.loaderElement=this.createLoaderElement();//loader message div
  this.msgElement=this.createMsgElement();//message element
  this.loadingElement=false;this.errorElement=false;this.loaderPromise=false;this.progressiveLoad=false;this.loading=false;this.requestOrder=0;//prevent requests comming out of sequence if overridden by another load request
  };//initialize setup options
  Ajax.prototype.initialize=function(){var template;this.loaderElement.appendChild(this.msgElement);if(this.table.options.ajaxLoaderLoading){if(typeof this.table.options.ajaxLoaderLoading=="string"){template=document.createElement('template');template.innerHTML=this.table.options.ajaxLoaderLoading.trim();this.loadingElement=template.content.firstChild;}else {this.loadingElement=this.table.options.ajaxLoaderLoading;}}this.loaderPromise=this.table.options.ajaxRequestFunc||this.defaultLoaderPromise;this.urlGenerator=this.table.options.ajaxURLGenerator||this.defaultURLGenerator;if(this.table.options.ajaxLoaderError){if(typeof this.table.options.ajaxLoaderError=="string"){template=document.createElement('template');template.innerHTML=this.table.options.ajaxLoaderError.trim();this.errorElement=template.content.firstChild;}else {this.errorElement=this.table.options.ajaxLoaderError;}}if(this.table.options.ajaxParams){this.setParams(this.table.options.ajaxParams);}if(this.table.options.ajaxConfig){this.setConfig(this.table.options.ajaxConfig);}if(this.table.options.ajaxURL){this.setUrl(this.table.options.ajaxURL);}if(this.table.options.ajaxProgressiveLoad){if(this.table.options.pagination){this.progressiveLoad=false;console.error("Progressive Load Error - Pagination and progressive load cannot be used at the same time");}else {if(this.table.modExists("page")){this.progressiveLoad=this.table.options.ajaxProgressiveLoad;this.table.modules.page.initializeProgressive(this.progressiveLoad);}else {console.error("Pagination plugin is required for progressive ajax loading");}}}};Ajax.prototype.createLoaderElement=function(){var el=document.createElement("div");el.classList.add("tabulator-loader");return el;};Ajax.prototype.createMsgElement=function(){var el=document.createElement("div");el.classList.add("tabulator-loader-msg");el.setAttribute("role","alert");return el;};//set ajax params
  Ajax.prototype.setParams=function(params,update){if(update){this.params=this.params||{};for(var key in params){this.params[key]=params[key];}}else {this.params=params;}};Ajax.prototype.getParams=function(){return this.params||{};};//load config object
  Ajax.prototype.setConfig=function(config){this._loadDefaultConfig();if(typeof config=="string"){this.config.method=config;}else {for(var key in config){this.config[key]=config[key];}}};//create config object from default
  Ajax.prototype._loadDefaultConfig=function(force){var self=this;if(!self.config||force){self.config={};//load base config from defaults
  for(var key in self.defaultConfig){self.config[key]=self.defaultConfig[key];}}};//set request url
  Ajax.prototype.setUrl=function(url){this.url=url;};//get request url
  Ajax.prototype.getUrl=function(){return this.url;};//lstandard loading function
  Ajax.prototype.loadData=function(inPosition,columnsChanged){if(this.progressiveLoad){return this._loadDataProgressive();}else {return this._loadDataStandard(inPosition,columnsChanged);}};Ajax.prototype.nextPage=function(diff){var margin;if(!this.loading){margin=this.table.options.ajaxProgressiveLoadScrollMargin||this.table.rowManager.getElement().clientHeight*2;if(diff<margin){this.table.modules.page.nextPage().then(function(){})["catch"](function(){});}}};Ajax.prototype.blockActiveRequest=function(){this.requestOrder++;};Ajax.prototype._loadDataProgressive=function(){this.table.rowManager.setData([]);return this.table.modules.page.setPage(1);};Ajax.prototype._loadDataStandard=function(inPosition,columnsChanged){var _this42=this;return new Promise(function(resolve,reject){_this42.sendRequest(inPosition).then(function(data){_this42.table.rowManager.setData(data,inPosition,columnsChanged).then(function(){resolve();})["catch"](function(e){reject(e);});})["catch"](function(e){reject(e);});});};Ajax.prototype.generateParamsList=function(data,prefix){var self=this,output=[];prefix=prefix||"";if(Array.isArray(data)){data.forEach(function(item,i){output=output.concat(self.generateParamsList(item,prefix?prefix+"["+i+"]":i));});}else if((typeof data==='undefined'?'undefined':_typeof(data))==="object"){for(var key in data){output=output.concat(self.generateParamsList(data[key],prefix?prefix+"["+key+"]":key));}}else {output.push({key:prefix,value:data});}return output;};Ajax.prototype.serializeParams=function(params){var output=this.generateParamsList(params),encoded=[];output.forEach(function(item){encoded.push(encodeURIComponent(item.key)+"="+encodeURIComponent(item.value));});return encoded.join("&");};//send ajax request
  Ajax.prototype.sendRequest=function(silent){var _this43=this;var self=this,url=self.url,requestNo;self.requestOrder++;requestNo=self.requestOrder;self._loadDefaultConfig();return new Promise(function(resolve,reject){if(self.table.options.ajaxRequesting.call(_this43.table,self.url,self.params)!==false){self.loading=true;if(!silent){self.showLoader();}_this43.loaderPromise(url,self.config,self.params).then(function(data){if(requestNo===self.requestOrder){if(self.table.options.ajaxResponse){data=self.table.options.ajaxResponse.call(self.table,self.url,self.params,data);}resolve(data);self.hideLoader();self.loading=false;}else {console.warn("Ajax Response Blocked - An active ajax request was blocked by an attempt to change table data while the request was being made");}})["catch"](function(error){console.error("Ajax Load Error: ",error);self.table.options.ajaxError.call(self.table,error);self.showError();setTimeout(function(){self.hideLoader();},3000);self.loading=false;reject(error);});}else {reject();}});};Ajax.prototype.showLoader=function(){var shouldLoad=typeof this.table.options.ajaxLoader==="function"?this.table.options.ajaxLoader():this.table.options.ajaxLoader;if(shouldLoad){this.hideLoader();while(this.msgElement.firstChild){this.msgElement.removeChild(this.msgElement.firstChild);}this.msgElement.classList.remove("tabulator-error");this.msgElement.classList.add("tabulator-loading");if(this.loadingElement){this.msgElement.appendChild(this.loadingElement);}else {this.msgElement.innerHTML=this.table.modules.localize.getText("ajax|loading");}this.table.element.appendChild(this.loaderElement);}};Ajax.prototype.showError=function(){this.hideLoader();while(this.msgElement.firstChild){this.msgElement.removeChild(this.msgElement.firstChild);}this.msgElement.classList.remove("tabulator-loading");this.msgElement.classList.add("tabulator-error");if(this.errorElement){this.msgElement.appendChild(this.errorElement);}else {this.msgElement.innerHTML=this.table.modules.localize.getText("ajax|error");}this.table.element.appendChild(this.loaderElement);};Ajax.prototype.hideLoader=function(){if(this.loaderElement.parentNode){this.loaderElement.parentNode.removeChild(this.loaderElement);}};//default ajax config object
  Ajax.prototype.defaultConfig={method:"GET"};Ajax.prototype.defaultURLGenerator=function(url,config,params){if(url){if(params&&Object.keys(params).length){if(!config.method||config.method.toLowerCase()=="get"){config.method="get";url+=(url.includes("?")?"&":"?")+this.modules.ajax.serializeParams(params);}}}return url;};Ajax.prototype.defaultLoaderPromise=function(url,config,params){var self=this,contentType;return new Promise(function(resolve,reject){//set url
  url=self.urlGenerator.call(self.table,url,config,params);//set body content if not GET request
  if(config.method.toUpperCase()!="GET"){contentType=_typeof(self.table.options.ajaxContentType)==="object"?self.table.options.ajaxContentType:self.contentTypeFormatters[self.table.options.ajaxContentType];if(contentType){for(var key in contentType.headers){if(!config.headers){config.headers={};}if(typeof config.headers[key]==="undefined"){config.headers[key]=contentType.headers[key];}}config.body=contentType.body.call(self,url,config,params);}else {console.warn("Ajax Error - Invalid ajaxContentType value:",self.table.options.ajaxContentType);}}if(url){//configure headers
  if(typeof config.headers==="undefined"){config.headers={};}if(typeof config.headers.Accept==="undefined"){config.headers.Accept="application/json";}if(typeof config.headers["X-Requested-With"]==="undefined"){config.headers["X-Requested-With"]="XMLHttpRequest";}if(typeof config.mode==="undefined"){config.mode="cors";}if(config.mode=="cors"){if(typeof config.headers["Access-Control-Allow-Origin"]==="undefined"){config.headers["Access-Control-Allow-Origin"]=window.location.origin;}if(typeof config.credentials==="undefined"){config.credentials='same-origin';}}else {if(typeof config.credentials==="undefined"){config.credentials='include';}}//send request
  fetch(url,config).then(function(response){if(response.ok){response.json().then(function(data){resolve(data);})["catch"](function(error){reject(error);console.warn("Ajax Load Error - Invalid JSON returned",error);});}else {console.error("Ajax Load Error - Connection Error: "+response.status,response.statusText);reject(response);}})["catch"](function(error){console.error("Ajax Load Error - Connection Error: ",error);reject(error);});}else {console.warn("Ajax Load Error - No URL Set");resolve([]);}});};Ajax.prototype.contentTypeFormatters={"json":{headers:{'Content-Type':'application/json'},body:function body(url,config,params){return JSON.stringify(params);}},"form":{headers:{},body:function body(url,config,params){var output=this.generateParamsList(params),form=new FormData();output.forEach(function(item){form.append(item.key,item.value);});return form;}}};Tabulator.prototype.registerModule("ajax",Ajax);//public calc object
  var CalcComponent=function CalcComponent(row){this._row=row;};CalcComponent.prototype.getData=function(transform){return this._row.getData(transform);};CalcComponent.prototype.getElement=function(){return this._row.getElement();};CalcComponent.prototype.getTable=function(){return this._row.table;};CalcComponent.prototype.getCells=function(){var cells=[];this._row.getCells().forEach(function(cell){cells.push(cell.getComponent());});return cells;};CalcComponent.prototype.getCell=function(column){var cell=this._row.getCell(column);return cell?cell.getComponent():false;};CalcComponent.prototype._getSelf=function(){return this._row;};var ColumnCalcs=function ColumnCalcs(table){this.table=table;//hold Tabulator object
  this.topCalcs=[];this.botCalcs=[];this.genColumn=false;this.topElement=this.createElement();this.botElement=this.createElement();this.topRow=false;this.botRow=false;this.topInitialized=false;this.botInitialized=false;this.initialize();};ColumnCalcs.prototype.createElement=function(){var el=document.createElement("div");el.classList.add("tabulator-calcs-holder");return el;};ColumnCalcs.prototype.initialize=function(){this.genColumn=new Column({field:"value"},this);};//dummy functions to handle being mock column manager
  ColumnCalcs.prototype.registerColumnField=function(){};//initialize column calcs
  ColumnCalcs.prototype.initializeColumn=function(column){var def=column.definition;var config={topCalcParams:def.topCalcParams||{},botCalcParams:def.bottomCalcParams||{}};if(def.topCalc){switch(_typeof(def.topCalc)){case"string":if(this.calculations[def.topCalc]){config.topCalc=this.calculations[def.topCalc];}else {console.warn("Column Calc Error - No such calculation found, ignoring: ",def.topCalc);}break;case"function":config.topCalc=def.topCalc;break;}if(config.topCalc){column.modules.columnCalcs=config;this.topCalcs.push(column);if(this.table.options.columnCalcs!="group"){this.initializeTopRow();}}}if(def.bottomCalc){switch(_typeof(def.bottomCalc)){case"string":if(this.calculations[def.bottomCalc]){config.botCalc=this.calculations[def.bottomCalc];}else {console.warn("Column Calc Error - No such calculation found, ignoring: ",def.bottomCalc);}break;case"function":config.botCalc=def.bottomCalc;break;}if(config.botCalc){column.modules.columnCalcs=config;this.botCalcs.push(column);if(this.table.options.columnCalcs!="group"){this.initializeBottomRow();}}}};ColumnCalcs.prototype.removeCalcs=function(){var changed=false;if(this.topInitialized){this.topInitialized=false;this.topElement.parentNode.removeChild(this.topElement);changed=true;}if(this.botInitialized){this.botInitialized=false;this.table.footerManager.remove(this.botElement);changed=true;}if(changed){this.table.rowManager.adjustTableSize();}};ColumnCalcs.prototype.initializeTopRow=function(){if(!this.topInitialized){this.table.columnManager.getElement().insertBefore(this.topElement,this.table.columnManager.headersElement.nextSibling);this.topInitialized=true;}};ColumnCalcs.prototype.initializeBottomRow=function(){if(!this.botInitialized){this.table.footerManager.prepend(this.botElement);this.botInitialized=true;}};ColumnCalcs.prototype.scrollHorizontal=function(left){if(this.botInitialized&&this.botRow){this.botRow.getElement().style.marginLeft=-left+"px";}};ColumnCalcs.prototype.recalc=function(rows){var row;if(this.topInitialized||this.botInitialized){this.rowsToData(rows);if(this.topInitialized){if(this.topRow){this.topRow.deleteCells();}row=this.generateRow("top",this.rowsToData(rows));this.topRow=row;while(this.topElement.firstChild){this.topElement.removeChild(this.topElement.firstChild);}this.topElement.appendChild(row.getElement());row.initialize(true);}if(this.botInitialized){if(this.botRow){this.botRow.deleteCells();}row=this.generateRow("bottom",this.rowsToData(rows));this.botRow=row;while(this.botElement.firstChild){this.botElement.removeChild(this.botElement.firstChild);}this.botElement.appendChild(row.getElement());row.initialize(true);}this.table.rowManager.adjustTableSize();//set resizable handles
  if(this.table.modExists("frozenColumns")){this.table.modules.frozenColumns.layout();}}};ColumnCalcs.prototype.recalcRowGroup=function(row){this.recalcGroup(this.table.modules.groupRows.getRowGroup(row));};ColumnCalcs.prototype.recalcAll=function(){var _this44=this;if(this.topCalcs.length||this.botCalcs.length){if(this.table.options.columnCalcs!=="group"){this.recalc(this.table.rowManager.activeRows);}if(this.table.options.groupBy&&this.table.options.columnCalcs!=="table"){var groups=table.modules.groupRows.getChildGroups();groups.forEach(function(group){_this44.recalcGroup(group);});}}};ColumnCalcs.prototype.recalcGroup=function(group){var data,rowData;if(group){if(group.calcs){if(group.calcs.bottom){data=this.rowsToData(group.rows);rowData=this.generateRowData("bottom",data);group.calcs.bottom.updateData(rowData);group.calcs.bottom.reinitialize();}if(group.calcs.top){data=this.rowsToData(group.rows);rowData=this.generateRowData("top",data);group.calcs.top.updateData(rowData);group.calcs.top.reinitialize();}}}};//generate top stats row
  ColumnCalcs.prototype.generateTopRow=function(rows){return this.generateRow("top",this.rowsToData(rows));};//generate bottom stats row
  ColumnCalcs.prototype.generateBottomRow=function(rows){return this.generateRow("bottom",this.rowsToData(rows));};ColumnCalcs.prototype.rowsToData=function(rows){var _this45=this;var data=[];rows.forEach(function(row){data.push(row.getData());if(_this45.table.options.dataTree&&_this45.table.options.dataTreeChildColumnCalcs){if(row.modules.dataTree.open){var children=_this45.rowsToData(_this45.table.modules.dataTree.getFilteredTreeChildren(row));data=data.concat(children);}}});return data;};//generate stats row
  ColumnCalcs.prototype.generateRow=function(pos,data){var self=this,rowData=this.generateRowData(pos,data),row;if(self.table.modExists("mutator")){self.table.modules.mutator.disable();}row=new Row(rowData,this,"calc");if(self.table.modExists("mutator")){self.table.modules.mutator.enable();}row.getElement().classList.add("tabulator-calcs","tabulator-calcs-"+pos);row.component=false;row.getComponent=function(){if(!this.component){this.component=new CalcComponent(this);}return this.component;};row.generateCells=function(){var cells=[];self.table.columnManager.columnsByIndex.forEach(function(column){//set field name of mock column
  self.genColumn.setField(column.getField());self.genColumn.hozAlign=column.hozAlign;if(column.definition[pos+"CalcFormatter"]&&self.table.modExists("format")){self.genColumn.modules.format={formatter:self.table.modules.format.getFormatter(column.definition[pos+"CalcFormatter"]),params:column.definition[pos+"CalcFormatterParams"]||{}};}else {self.genColumn.modules.format={formatter:self.table.modules.format.getFormatter("plaintext"),params:{}};}//ensure css class defintion is replicated to calculation cell
  self.genColumn.definition.cssClass=column.definition.cssClass;//generate cell and assign to correct column
  var cell=new Cell(self.genColumn,row);cell.getElement();cell.column=column;cell.setWidth();column.cells.push(cell);cells.push(cell);if(!column.visible){cell.hide();}});this.cells=cells;};return row;};//generate stats row
  ColumnCalcs.prototype.generateRowData=function(pos,data){var rowData={},calcs=pos=="top"?this.topCalcs:this.botCalcs,type=pos=="top"?"topCalc":"botCalc",params,paramKey;calcs.forEach(function(column){var values=[];if(column.modules.columnCalcs&&column.modules.columnCalcs[type]){data.forEach(function(item){values.push(column.getFieldValue(item));});paramKey=type+"Params";params=typeof column.modules.columnCalcs[paramKey]==="function"?column.modules.columnCalcs[paramKey](values,data):column.modules.columnCalcs[paramKey];column.setFieldValue(rowData,column.modules.columnCalcs[type](values,data,params));}});return rowData;};ColumnCalcs.prototype.hasTopCalcs=function(){return !!this.topCalcs.length;};ColumnCalcs.prototype.hasBottomCalcs=function(){return !!this.botCalcs.length;};//handle table redraw
  ColumnCalcs.prototype.redraw=function(){if(this.topRow){this.topRow.normalizeHeight(true);}if(this.botRow){this.botRow.normalizeHeight(true);}};//return the calculated
  ColumnCalcs.prototype.getResults=function(){var self=this,results={},groups;if(this.table.options.groupBy&&this.table.modExists("groupRows")){groups=this.table.modules.groupRows.getGroups(true);groups.forEach(function(group){results[group.getKey()]=self.getGroupResults(group);});}else {results={top:this.topRow?this.topRow.getData():{},bottom:this.botRow?this.botRow.getData():{}};}return results;};//get results from a group
  ColumnCalcs.prototype.getGroupResults=function(group){var self=this,groupObj=group._getSelf(),subGroups=group.getSubGroups(),subGroupResults={},results={};subGroups.forEach(function(subgroup){subGroupResults[subgroup.getKey()]=self.getGroupResults(subgroup);});results={top:groupObj.calcs.top?groupObj.calcs.top.getData():{},bottom:groupObj.calcs.bottom?groupObj.calcs.bottom.getData():{},groups:subGroupResults};return results;};//default calculations
  ColumnCalcs.prototype.calculations={"avg":function avg(values,data,calcParams){var output=0,precision=typeof calcParams.precision!=="undefined"?calcParams.precision:2;if(values.length){output=values.reduce(function(sum,value){return Number(sum)+Number(value);});output=output/values.length;output=precision!==false?output.toFixed(precision):output;}return parseFloat(output).toString();},"max":function max(values,data,calcParams){var output=null,precision=typeof calcParams.precision!=="undefined"?calcParams.precision:false;values.forEach(function(value){value=Number(value);if(value>output||output===null){output=value;}});return output!==null?precision!==false?output.toFixed(precision):output:"";},"min":function min(values,data,calcParams){var output=null,precision=typeof calcParams.precision!=="undefined"?calcParams.precision:false;values.forEach(function(value){value=Number(value);if(value<output||output===null){output=value;}});return output!==null?precision!==false?output.toFixed(precision):output:"";},"sum":function sum(values,data,calcParams){var output=0,precision=typeof calcParams.precision!=="undefined"?calcParams.precision:false;if(values.length){values.forEach(function(value){value=Number(value);output+=!isNaN(value)?Number(value):0;});}return precision!==false?output.toFixed(precision):output;},"concat":function concat(values,data,calcParams){var output=0;if(values.length){output=values.reduce(function(sum,value){return String(sum)+String(value);});}return output;},"count":function count(values,data,calcParams){var output=0;if(values.length){values.forEach(function(value){if(value){output++;}});}return output;}};Tabulator.prototype.registerModule("columnCalcs",ColumnCalcs);var Clipboard=function Clipboard(table){this.table=table;this.mode=true;this.pasteParser=function(){};this.pasteAction=function(){};this.customSelection=false;this.rowRange=false;this.blocked=true;//block copy actions not originating from this command
  };Clipboard.prototype.initialize=function(){var _this46=this;this.mode=this.table.options.clipboard;this.rowRange=this.table.options.clipboardCopyRowRange;if(this.mode===true||this.mode==="copy"){this.table.element.addEventListener("copy",function(e){var plain,html,list;if(!_this46.blocked){e.preventDefault();if(_this46.customSelection){plain=_this46.customSelection;if(_this46.table.options.clipboardCopyFormatter){plain=_this46.table.options.clipboardCopyFormatter("plain",plain);}}else {var list=_this46.table.modules["export"].generateExportList(_this46.table.options.clipboardCopyConfig,_this46.table.options.clipboardCopyStyled,_this46.rowRange,"clipboard");html=_this46.table.modules["export"].genereateHTMLTable(list);plain=html?_this46.generatePlainContent(list):"";if(_this46.table.options.clipboardCopyFormatter){plain=_this46.table.options.clipboardCopyFormatter("plain",plain);html=_this46.table.options.clipboardCopyFormatter("html",html);}}if(window.clipboardData&&window.clipboardData.setData){window.clipboardData.setData('Text',plain);}else if(e.clipboardData&&e.clipboardData.setData){e.clipboardData.setData('text/plain',plain);if(html){e.clipboardData.setData('text/html',html);}}else if(e.originalEvent&&e.originalEvent.clipboardData.setData){e.originalEvent.clipboardData.setData('text/plain',plain);if(html){e.originalEvent.clipboardData.setData('text/html',html);}}_this46.table.options.clipboardCopied.call(_this46.table,plain,html);_this46.reset();}});}if(this.mode===true||this.mode==="paste"){this.table.element.addEventListener("paste",function(e){_this46.paste(e);});}this.setPasteParser(this.table.options.clipboardPasteParser);this.setPasteAction(this.table.options.clipboardPasteAction);};Clipboard.prototype.reset=function(){this.blocked=true;this.customSelection=false;};Clipboard.prototype.generatePlainContent=function(list){var output=[];list.forEach(function(row){var rowData=[];row.columns.forEach(function(col){var value="";if(col){if(row.type==="group"){col.value=col.component.getKey();}if(col.value===null){value="";}else {switch(_typeof(col.value)){case"object":value=JSON.stringify(col.value);break;case"undefined":value="";break;default:value=col.value;}}}rowData.push(value);});output.push(rowData.join("\t"));});return output.join("\n");};Clipboard.prototype.copy=function(range,internal){var range,sel,textRange;this.blocked=false;this.customSelection=false;if(this.mode===true||this.mode==="copy"){this.rowRange=range||this.table.options.clipboardCopyRowRange;if(typeof window.getSelection!="undefined"&&typeof document.createRange!="undefined"){range=document.createRange();range.selectNodeContents(this.table.element);sel=window.getSelection();if(sel.toString()&&internal){this.customSelection=sel.toString();}sel.removeAllRanges();sel.addRange(range);}else if(typeof document.selection!="undefined"&&typeof document.body.createTextRange!="undefined"){textRange=document.body.createTextRange();textRange.moveToElementText(this.table.element);textRange.select();}document.execCommand('copy');if(sel){sel.removeAllRanges();}}};//PASTE EVENT HANDLING
  Clipboard.prototype.setPasteAction=function(action){switch(typeof action==='undefined'?'undefined':_typeof(action)){case"string":this.pasteAction=this.pasteActions[action];if(!this.pasteAction){console.warn("Clipboard Error - No such paste action found:",action);}break;case"function":this.pasteAction=action;break;}};Clipboard.prototype.setPasteParser=function(parser){switch(typeof parser==='undefined'?'undefined':_typeof(parser)){case"string":this.pasteParser=this.pasteParsers[parser];if(!this.pasteParser){console.warn("Clipboard Error - No such paste parser found:",parser);}break;case"function":this.pasteParser=parser;break;}};Clipboard.prototype.paste=function(e){var data,rowData,rows;if(this.checkPaseOrigin(e)){data=this.getPasteData(e);rowData=this.pasteParser.call(this,data);if(rowData){e.preventDefault();if(this.table.modExists("mutator")){rowData=this.mutateData(rowData);}rows=this.pasteAction.call(this,rowData);this.table.options.clipboardPasted.call(this.table,data,rowData,rows);}else {this.table.options.clipboardPasteError.call(this.table,data);}}};Clipboard.prototype.mutateData=function(data){var self=this,output=[];if(Array.isArray(data)){data.forEach(function(row){output.push(self.table.modules.mutator.transformRow(row,"clipboard"));});}else {output=data;}return output;};Clipboard.prototype.checkPaseOrigin=function(e){var valid=true;if(e.target.tagName!="DIV"||this.table.modules.edit.currentCell){valid=false;}return valid;};Clipboard.prototype.getPasteData=function(e){var data;if(window.clipboardData&&window.clipboardData.getData){data=window.clipboardData.getData('Text');}else if(e.clipboardData&&e.clipboardData.getData){data=e.clipboardData.getData('text/plain');}else if(e.originalEvent&&e.originalEvent.clipboardData.getData){data=e.originalEvent.clipboardData.getData('text/plain');}return data;};Clipboard.prototype.pasteParsers={table:function table(clipboard){var data=[],headerFindSuccess=true,columns=this.table.columnManager.columns,columnMap=[],rows=[];//get data from clipboard into array of columns and rows.
  clipboard=clipboard.split("\n");clipboard.forEach(function(row){data.push(row.split("\t"));});if(data.length&&!(data.length===1&&data[0].length<2)){data[0].forEach(function(value){var column=columns.find(function(column){return value&&column.definition.title&&value.trim()&&column.definition.title.trim()===value.trim();});if(column){columnMap.push(column);}else {headerFindSuccess=false;}});//check if column headers are present by field
  if(!headerFindSuccess){headerFindSuccess=true;columnMap=[];data[0].forEach(function(value){var column=columns.find(function(column){return value&&column.field&&value.trim()&&column.field.trim()===value.trim();});if(column){columnMap.push(column);}else {headerFindSuccess=false;}});if(!headerFindSuccess){columnMap=this.table.columnManager.columnsByIndex;}}//remove header row if found
  if(headerFindSuccess){data.shift();}data.forEach(function(item){var row={};item.forEach(function(value,i){if(columnMap[i]){row[columnMap[i].field]=value;}});rows.push(row);});return rows;}else {return false;}}};Clipboard.prototype.pasteActions={replace:function replace(rows){return this.table.setData(rows);},update:function update(rows){return this.table.updateOrAddData(rows);},insert:function insert(rows){return this.table.addData(rows);}};Tabulator.prototype.registerModule("clipboard",Clipboard);var DataTree=function DataTree(table){this.table=table;this.indent=10;this.field="";this.collapseEl=null;this.expandEl=null;this.branchEl=null;this.elementField=false;this.startOpen=function(){};this.displayIndex=0;};DataTree.prototype.initialize=function(){var dummyEl=null,firstCol=this.table.columnManager.getFirstVisibileColumn(),options=this.table.options;this.field=options.dataTreeChildField;this.indent=options.dataTreeChildIndent;this.elementField=options.dataTreeElementColumn||(firstCol?firstCol.field:false);if(options.dataTreeBranchElement){if(options.dataTreeBranchElement===true){this.branchEl=document.createElement("div");this.branchEl.classList.add("tabulator-data-tree-branch");}else {if(typeof options.dataTreeBranchElement==="string"){dummyEl=document.createElement("div");dummyEl.innerHTML=options.dataTreeBranchElement;this.branchEl=dummyEl.firstChild;}else {this.branchEl=options.dataTreeBranchElement;}}}if(options.dataTreeCollapseElement){if(typeof options.dataTreeCollapseElement==="string"){dummyEl=document.createElement("div");dummyEl.innerHTML=options.dataTreeCollapseElement;this.collapseEl=dummyEl.firstChild;}else {this.collapseEl=options.dataTreeCollapseElement;}}else {this.collapseEl=document.createElement("div");this.collapseEl.classList.add("tabulator-data-tree-control");this.collapseEl.tabIndex=0;this.collapseEl.innerHTML="<div class='tabulator-data-tree-control-collapse'></div>";}if(options.dataTreeExpandElement){if(typeof options.dataTreeExpandElement==="string"){dummyEl=document.createElement("div");dummyEl.innerHTML=options.dataTreeExpandElement;this.expandEl=dummyEl.firstChild;}else {this.expandEl=options.dataTreeExpandElement;}}else {this.expandEl=document.createElement("div");this.expandEl.classList.add("tabulator-data-tree-control");this.expandEl.tabIndex=0;this.expandEl.innerHTML="<div class='tabulator-data-tree-control-expand'></div>";}switch(_typeof(options.dataTreeStartExpanded)){case"boolean":this.startOpen=function(row,index){return options.dataTreeStartExpanded;};break;case"function":this.startOpen=options.dataTreeStartExpanded;break;default:this.startOpen=function(row,index){return options.dataTreeStartExpanded[index];};break;}};DataTree.prototype.initializeRow=function(row){var childArray=row.getData()[this.field];var isArray=Array.isArray(childArray);var children=isArray||!isArray&&(typeof childArray==='undefined'?'undefined':_typeof(childArray))==="object"&&childArray!==null;if(!children&&row.modules.dataTree&&row.modules.dataTree.branchEl){row.modules.dataTree.branchEl.parentNode.removeChild(row.modules.dataTree.branchEl);}if(!children&&row.modules.dataTree&&row.modules.dataTree.controlEl){row.modules.dataTree.controlEl.parentNode.removeChild(row.modules.dataTree.controlEl);}row.modules.dataTree={index:row.modules.dataTree?row.modules.dataTree.index:0,open:children?row.modules.dataTree?row.modules.dataTree.open:this.startOpen(row.getComponent(),0):false,controlEl:row.modules.dataTree&&children?row.modules.dataTree.controlEl:false,branchEl:row.modules.dataTree&&children?row.modules.dataTree.branchEl:false,parent:row.modules.dataTree?row.modules.dataTree.parent:false,children:children};};DataTree.prototype.layoutRow=function(row){var cell=this.elementField?row.getCell(this.elementField):row.getCells()[0],el=cell.getElement(),config=row.modules.dataTree;if(config.branchEl){if(config.branchEl.parentNode){config.branchEl.parentNode.removeChild(config.branchEl);}config.branchEl=false;}if(config.controlEl){if(config.controlEl.parentNode){config.controlEl.parentNode.removeChild(config.controlEl);}config.controlEl=false;}this.generateControlElement(row,el);row.getElement().classList.add("tabulator-tree-level-"+config.index);if(config.index){if(this.branchEl){config.branchEl=this.branchEl.cloneNode(true);el.insertBefore(config.branchEl,el.firstChild);if(this.table.rtl){config.branchEl.style.marginRight=(config.branchEl.offsetWidth+config.branchEl.style.marginLeft)*(config.index-1)+config.index*this.indent+"px";}else {config.branchEl.style.marginLeft=(config.branchEl.offsetWidth+config.branchEl.style.marginRight)*(config.index-1)+config.index*this.indent+"px";}}else {if(this.table.rtl){el.style.paddingRight=parseInt(window.getComputedStyle(el,null).getPropertyValue('padding-right'))+config.index*this.indent+"px";}else {el.style.paddingLeft=parseInt(window.getComputedStyle(el,null).getPropertyValue('padding-left'))+config.index*this.indent+"px";}}}};DataTree.prototype.generateControlElement=function(row,el){var _this47=this;var config=row.modules.dataTree,el=el||row.getCells()[0].getElement(),oldControl=config.controlEl;if(config.children!==false){if(config.open){config.controlEl=this.collapseEl.cloneNode(true);config.controlEl.addEventListener("click",function(e){e.stopPropagation();_this47.collapseRow(row);});}else {config.controlEl=this.expandEl.cloneNode(true);config.controlEl.addEventListener("click",function(e){e.stopPropagation();_this47.expandRow(row);});}config.controlEl.addEventListener("mousedown",function(e){e.stopPropagation();});if(oldControl&&oldControl.parentNode===el){oldControl.parentNode.replaceChild(config.controlEl,oldControl);}else {el.insertBefore(config.controlEl,el.firstChild);}}};DataTree.prototype.setDisplayIndex=function(index){this.displayIndex=index;};DataTree.prototype.getDisplayIndex=function(){return this.displayIndex;};DataTree.prototype.getRows=function(rows){var _this48=this;var output=[];rows.forEach(function(row,i){var config,children;output.push(row);if(row instanceof Row){row.create();config=row.modules.dataTree.children;if(!config.index&&config.children!==false){children=_this48.getChildren(row);children.forEach(function(child){child.create();output.push(child);});}}});return output;};DataTree.prototype.getChildren=function(row,allChildren){var _this49=this;var config=row.modules.dataTree,children=[],output=[];if(config.children!==false&&(config.open||allChildren)){if(!Array.isArray(config.children)){config.children=this.generateChildren(row);}if(this.table.modExists("filter")&&this.table.options.dataTreeFilter){children=this.table.modules.filter.filter(config.children);}else {children=config.children;}if(this.table.modExists("sort")&&this.table.options.dataTreeSort){this.table.modules.sort.sort(children);}children.forEach(function(child){output.push(child);var subChildren=_this49.getChildren(child);subChildren.forEach(function(sub){output.push(sub);});});}return output;};DataTree.prototype.generateChildren=function(row){var _this50=this;var children=[];var childArray=row.getData()[this.field];if(!Array.isArray(childArray)){childArray=[childArray];}childArray.forEach(function(childData){var childRow=new Row(childData||{},_this50.table.rowManager);childRow.create();childRow.modules.dataTree.index=row.modules.dataTree.index+1;childRow.modules.dataTree.parent=row;if(childRow.modules.dataTree.children){childRow.modules.dataTree.open=_this50.startOpen(childRow.getComponent(),childRow.modules.dataTree.index);}children.push(childRow);});return children;};DataTree.prototype.expandRow=function(row,silent){var config=row.modules.dataTree;if(config.children!==false){config.open=true;row.reinitialize();this.table.rowManager.refreshActiveData("tree",false,true);this.table.options.dataTreeRowExpanded(row.getComponent(),row.modules.dataTree.index);}};DataTree.prototype.collapseRow=function(row){var config=row.modules.dataTree;if(config.children!==false){config.open=false;row.reinitialize();this.table.rowManager.refreshActiveData("tree",false,true);this.table.options.dataTreeRowCollapsed(row.getComponent(),row.modules.dataTree.index);}};DataTree.prototype.toggleRow=function(row){var config=row.modules.dataTree;if(config.children!==false){if(config.open){this.collapseRow(row);}else {this.expandRow(row);}}};DataTree.prototype.getTreeParent=function(row){return row.modules.dataTree.parent?row.modules.dataTree.parent.getComponent():false;};DataTree.prototype.getFilteredTreeChildren=function(row){var config=row.modules.dataTree,output=[],children;if(config.children){if(!Array.isArray(config.children)){config.children=this.generateChildren(row);}if(this.table.modExists("filter")&&this.table.options.dataTreeFilter){children=this.table.modules.filter.filter(config.children);}else {children=config.children;}children.forEach(function(childRow){if(childRow instanceof Row){output.push(childRow);}});}return output;};DataTree.prototype.rowDelete=function(row){var parent=row.modules.dataTree.parent,childIndex;if(parent){childIndex=this.findChildIndex(row,parent);if(childIndex!==false){parent.data[this.field].splice(childIndex,1);}if(!parent.data[this.field].length){delete parent.data[this.field];}this.initializeRow(parent);this.layoutRow(parent);}this.table.rowManager.refreshActiveData("tree",false,true);};DataTree.prototype.addTreeChildRow=function(row,data,top,index){var childIndex=false;if(typeof data==="string"){data=JSON.parse(data);}if(!Array.isArray(row.data[this.field])){row.data[this.field]=[];row.modules.dataTree.open=this.startOpen(row.getComponent(),row.modules.dataTree.index);}if(typeof index!=="undefined"){childIndex=this.findChildIndex(index,row);if(childIndex!==false){row.data[this.field].splice(top?childIndex:childIndex+1,0,data);}}if(childIndex===false){if(top){row.data[this.field].unshift(data);}else {row.data[this.field].push(data);}}this.initializeRow(row);this.layoutRow(row);this.table.rowManager.refreshActiveData("tree",false,true);};DataTree.prototype.findChildIndex=function(subject,parent){var _this51=this;var match=false;if((typeof subject==='undefined'?'undefined':_typeof(subject))=="object"){if(subject instanceof Row){//subject is row element
  match=subject.data;}else if(subject instanceof RowComponent){//subject is public row component
  match=subject._getSelf().data;}else if(typeof HTMLElement!=="undefined"&&subject instanceof HTMLElement){if(parent.modules.dataTree){match=parent.modules.dataTree.children.find(function(childRow){return childRow instanceof Row?childRow.element===subject:false;});if(match){match=match.data;}}}}else if(typeof subject=="undefined"||subject===null){match=false;}else {//subject should be treated as the index of the row
  match=parent.data[this.field].find(function(row){return row.data[_this51.table.options.index]==subject;});}if(match){if(Array.isArray(parent.data[this.field])){match=parent.data[this.field].indexOf(match);}if(match==-1){match=false;}}//catch all for any other type of input
  return match;};DataTree.prototype.getTreeChildren=function(row,component,recurse){var _this52=this;var config=row.modules.dataTree,output=[];if(config.children){if(!Array.isArray(config.children)){config.children=this.generateChildren(row);}config.children.forEach(function(childRow){if(childRow instanceof Row){output.push(component?childRow.getComponent():childRow);if(recurse){output=output.concat(_this52.getTreeChildren(childRow,component,recurse));}}});}return output;};DataTree.prototype.checkForRestyle=function(cell){if(!cell.row.cells.indexOf(cell)){cell.row.reinitialize();}};DataTree.prototype.getChildField=function(){return this.field;};DataTree.prototype.redrawNeeded=function(data){return (this.field?typeof data[this.field]!=="undefined":false)||(this.elementField?typeof data[this.elementField]!=="undefined":false);};Tabulator.prototype.registerModule("dataTree",DataTree);var Download=function Download(table){this.table=table;//hold Tabulator object
  };//trigger file download
  Download.prototype.download=function(type,filename,options,range,interceptCallback){var self=this,downloadFunc=false;function buildLink(data,mime){if(interceptCallback){if(interceptCallback===true){self.triggerDownload(data,mime,type,filename,true);}else {interceptCallback(data);}}else {self.triggerDownload(data,mime,type,filename);}}if(typeof type=="function"){downloadFunc=type;}else {if(self.downloaders[type]){downloadFunc=self.downloaders[type];}else {console.warn("Download Error - No such download type found: ",type);}}if(downloadFunc){var list=this.generateExportList(range);downloadFunc.call(this.table,list,options||{},buildLink);}};Download.prototype.generateExportList=function(range){var list=this.table.modules["export"].generateExportList(this.table.options.downloadConfig,false,range||this.table.options.downloadRowRange,"download");//assign group header formatter
  var groupHeader=this.table.options.groupHeaderDownload;if(groupHeader&&!Array.isArray(groupHeader)){groupHeader=[groupHeader];}list.forEach(function(row){var group;if(row.type==="group"){group=row.columns[0];if(groupHeader&&groupHeader[row.indent]){group.value=groupHeader[row.indent](group.value,row.component._group.getRowCount(),row.component._group.getData(),row.component);}}});return list;};Download.prototype.triggerDownload=function(data,mime,type,filename,newTab){var element=document.createElement('a'),blob=new Blob([data],{type:mime}),filename=filename||"Tabulator."+(typeof type==="function"?"txt":type);blob=this.table.options.downloadReady.call(this.table,data,blob);if(blob){if(newTab){window.open(window.URL.createObjectURL(blob));}else {if(navigator.msSaveOrOpenBlob){navigator.msSaveOrOpenBlob(blob,filename);}else {element.setAttribute('href',window.URL.createObjectURL(blob));//set file title
  element.setAttribute('download',filename);//trigger download
  element.style.display='none';document.body.appendChild(element);element.click();//remove temporary link element
  document.body.removeChild(element);}}if(this.table.options.downloadComplete){this.table.options.downloadComplete();}}};Download.prototype.commsReceived=function(table,action,data){switch(action){case"intercept":this.download(data.type,"",data.options,data.active,data.intercept);break;}};//downloaders
  Download.prototype.downloaders={csv:function csv(list,options,setFileContents){var delimiter=options&&options.delimiter?options.delimiter:",",fileContents=[],headers=[];list.forEach(function(row){var item=[];switch(row.type){case"group":console.warn("Download Warning - CSV downloader cannot process row groups");break;case"calc":console.warn("Download Warning - CSV downloader cannot process column calculations");break;case"header":row.columns.forEach(function(col,i){if(col&&col.depth===1){headers[i]=typeof col.value=="undefined"||col.value===null?"":'"'+String(col.value).split('"').join('""')+'"';}});break;case"row":row.columns.forEach(function(col){if(col){switch(_typeof(col.value)){case"object":col.value=JSON.stringify(col.value);break;case"undefined":case"null":col.value="";break;}item.push('"'+String(col.value).split('"').join('""')+'"');}});fileContents.push(item.join(delimiter));break;}});if(headers.length){fileContents.unshift(headers.join(delimiter));}fileContents=fileContents.join("\n");if(options.bom){fileContents="\uFEFF"+fileContents;}setFileContents(fileContents,"text/csv");},json:function json(list,options,setFileContents){var fileContents=[];list.forEach(function(row){var item={};switch(row.type){case"header":break;case"group":console.warn("Download Warning - JSON downloader cannot process row groups");break;case"calc":console.warn("Download Warning - JSON downloader cannot process column calculations");break;case"row":row.columns.forEach(function(col){if(col){item[col.component.getField()]=col.value;}});fileContents.push(item);break;}});fileContents=JSON.stringify(fileContents,null,'\t');setFileContents(fileContents,"application/json");},pdf:function pdf(list,options,setFileContents){var header=[],body=[],autoTableParams={},rowGroupStyles=options.rowGroupStyles||{fontStyle:"bold",fontSize:12,cellPadding:6,fillColor:220},rowCalcStyles=options.rowCalcStyles||{fontStyle:"bold",fontSize:10,cellPadding:4,fillColor:232},jsPDFParams=options.jsPDF||{},title=options&&options.title?options.title:"";if(!jsPDFParams.orientation){jsPDFParams.orientation=options.orientation||"landscape";}if(!jsPDFParams.unit){jsPDFParams.unit="pt";}//parse row list
  list.forEach(function(row){switch(row.type){case"header":header.push(parseRow(row));break;case"group":body.push(parseRow(row,rowGroupStyles));break;case"calc":body.push(parseRow(row,rowCalcStyles));break;case"row":body.push(parseRow(row));break;}});function parseRow(row,styles){var rowData=[];row.columns.forEach(function(col){var cell;if(col){switch(_typeof(col.value)){case"object":col.value=JSON.stringify(col.value);break;case"undefined":case"null":col.value="";break;}cell={content:col.value,colSpan:col.width,rowSpan:col.height};if(styles){cell.styles=styles;}rowData.push(cell);}else {rowData.push("");}});return rowData;}//configure PDF
  var doc=new jsPDF(jsPDFParams);//set document to landscape, better for most tables
  if(options&&options.autoTable){if(typeof options.autoTable==="function"){autoTableParams=options.autoTable(doc)||{};}else {autoTableParams=options.autoTable;}}if(title){autoTableParams.addPageContent=function(data){doc.text(title,40,30);};}autoTableParams.head=header;autoTableParams.body=body;doc.autoTable(autoTableParams);if(options&&options.documentProcessing){options.documentProcessing(doc);}setFileContents(doc.output("arraybuffer"),"application/pdf");},xlsx:function xlsx(list,options,setFileContents){var self=this,sheetName=options.sheetName||"Sheet1",workbook=XLSX.utils.book_new(),output;workbook.SheetNames=[];workbook.Sheets={};function generateSheet(){var rows=[],merges=[],worksheet={},range={s:{c:0,r:0},e:{c:list[0]?list[0].columns.reduce(function(a,b){return a+(b&&b.width?b.width:1);},0):0,r:list.length}};//parse row list
  list.forEach(function(row,i){var rowData=[];row.columns.forEach(function(col,j){if(col){rowData.push(!(col.value instanceof Date)&&_typeof(col.value)==="object"?JSON.stringify(col.value):col.value);if(col.width>1||col.height>-1){merges.push({s:{r:i,c:j},e:{r:i+col.height-1,c:j+col.width-1}});}}else {rowData.push("");}});rows.push(rowData);});//convert rows to worksheet
  XLSX.utils.sheet_add_aoa(worksheet,rows);worksheet['!ref']=XLSX.utils.encode_range(range);if(merges.length){worksheet["!merges"]=merges;}return worksheet;}if(options.sheetOnly){setFileContents(generateSheet());return;}if(options.sheets){for(var sheet in options.sheets){if(options.sheets[sheet]===true){workbook.SheetNames.push(sheet);workbook.Sheets[sheet]=generateSheet();}else {workbook.SheetNames.push(sheet);this.modules.comms.send(options.sheets[sheet],"download","intercept",{type:"xlsx",options:{sheetOnly:true},active:self.active,intercept:function intercept(data){workbook.Sheets[sheet]=data;}});}}}else {workbook.SheetNames.push(sheetName);workbook.Sheets[sheetName]=generateSheet();}if(options.documentProcessing){workbook=options.documentProcessing(workbook);}//convert workbook to binary array
  function s2ab(s){var buf=new ArrayBuffer(s.length);var view=new Uint8Array(buf);for(var i=0;i!=s.length;++i){view[i]=s.charCodeAt(i)&0xFF;}return buf;}output=XLSX.write(workbook,{bookType:'xlsx',bookSST:true,type:'binary'});setFileContents(s2ab(output),"application/octet-stream");},html:function html(list,options,setFileContents){if(this.modExists("export",true)){setFileContents(this.modules["export"].genereateHTMLTable(list),"text/html");}}};Tabulator.prototype.registerModule("download",Download);var Edit=function Edit(table){this.table=table;//hold Tabulator object
  this.currentCell=false;//hold currently editing cell
  this.mouseClick=false;//hold mousedown state to prevent click binding being overriden by editor opening
  this.recursionBlock=false;//prevent focus recursion
  this.invalidEdit=false;this.editedCells=[];};//initialize column editor
  Edit.prototype.initializeColumn=function(column){var self=this,config={editor:false,blocked:false,check:column.definition.editable,params:column.definition.editorParams||{}};//set column editor
  switch(_typeof(column.definition.editor)){case"string":if(column.definition.editor==="tick"){column.definition.editor="tickCross";console.warn("DEPRECATION WARNING - the tick editor has been deprecated, please use the tickCross editor");}if(self.editors[column.definition.editor]){config.editor=self.editors[column.definition.editor];}else {console.warn("Editor Error - No such editor found: ",column.definition.editor);}break;case"function":config.editor=column.definition.editor;break;case"boolean":if(column.definition.editor===true){if(typeof column.definition.formatter!=="function"){if(column.definition.formatter==="tick"){column.definition.formatter="tickCross";console.warn("DEPRECATION WARNING - the tick editor has been deprecated, please use the tickCross editor");}if(self.editors[column.definition.formatter]){config.editor=self.editors[column.definition.formatter];}else {config.editor=self.editors["input"];}}else {console.warn("Editor Error - Cannot auto lookup editor for a custom formatter: ",column.definition.formatter);}}break;}if(config.editor){column.modules.edit=config;}};Edit.prototype.getCurrentCell=function(){return this.currentCell?this.currentCell.getComponent():false;};Edit.prototype.clearEditor=function(cancel){var cell=this.currentCell,cellEl;this.invalidEdit=false;if(cell){this.currentCell=false;cellEl=cell.getElement();if(cancel){cell.validate();}else {cellEl.classList.remove("tabulator-validation-fail");}cellEl.classList.remove("tabulator-editing");while(cellEl.firstChild){cellEl.removeChild(cellEl.firstChild);}cell.row.getElement().classList.remove("tabulator-row-editing");}};Edit.prototype.cancelEdit=function(){if(this.currentCell){var cell=this.currentCell;var component=this.currentCell.getComponent();this.clearEditor(true);cell.setValueActual(cell.getValue());cell.cellRendered();if(cell.column.definition.editor=="textarea"||cell.column.definition.variableHeight){cell.row.normalizeHeight(true);}if(cell.column.cellEvents.cellEditCancelled){cell.column.cellEvents.cellEditCancelled.call(this.table,component);}this.table.options.cellEditCancelled.call(this.table,component);}};//return a formatted value for a cell
  Edit.prototype.bindEditor=function(cell){var self=this,element=cell.getElement(true);element.setAttribute("tabindex",0);element.addEventListener("click",function(e){if(!element.classList.contains("tabulator-editing")){element.focus({preventScroll:true});}});element.addEventListener("mousedown",function(e){if(e.button===2){e.preventDefault();}else {self.mouseClick=true;}});element.addEventListener("focus",function(e){if(!self.recursionBlock){self.edit(cell,e,false);}});};Edit.prototype.focusCellNoEvent=function(cell,block){this.recursionBlock=true;if(!(block&&this.table.browser==="ie")){cell.getElement().focus({preventScroll:true});}this.recursionBlock=false;};Edit.prototype.editCell=function(cell,forceEdit){this.focusCellNoEvent(cell);this.edit(cell,false,forceEdit);};Edit.prototype.focusScrollAdjust=function(cell){if(this.table.rowManager.getRenderMode()=="virtual"){var topEdge=this.table.rowManager.element.scrollTop,bottomEdge=this.table.rowManager.element.clientHeight+this.table.rowManager.element.scrollTop,rowEl=cell.row.getElement();rowEl.offsetTop;if(rowEl.offsetTop<topEdge){this.table.rowManager.element.scrollTop-=topEdge-rowEl.offsetTop;}else {if(rowEl.offsetTop+rowEl.offsetHeight>bottomEdge){this.table.rowManager.element.scrollTop+=rowEl.offsetTop+rowEl.offsetHeight-bottomEdge;}}var leftEdge=this.table.rowManager.element.scrollLeft,rightEdge=this.table.rowManager.element.clientWidth+this.table.rowManager.element.scrollLeft,cellEl=cell.getElement();cellEl.offsetLeft;if(this.table.modExists("frozenColumns")){leftEdge+=parseInt(this.table.modules.frozenColumns.leftMargin);rightEdge-=parseInt(this.table.modules.frozenColumns.rightMargin);}if(this.table.options.virtualDomHoz){leftEdge-=parseInt(this.table.vdomHoz.vDomPadLeft);rightEdge-=parseInt(this.table.vdomHoz.vDomPadLeft);}if(cellEl.offsetLeft<leftEdge){this.table.rowManager.element.scrollLeft-=leftEdge-cellEl.offsetLeft;}else {if(cellEl.offsetLeft+cellEl.offsetWidth>rightEdge){this.table.rowManager.element.scrollLeft+=cellEl.offsetLeft+cellEl.offsetWidth-rightEdge;}}}};Edit.prototype.edit=function(cell,e,forceEdit){var self=this,allowEdit=true,rendered=function rendered(){},element=cell.getElement(),cellEditor,component,params;//prevent editing if another cell is refusing to leave focus (eg. validation fail)
  if(this.currentCell){if(!this.invalidEdit){this.cancelEdit();}return;}//handle successfull value change
  function success(value){if(self.currentCell===cell){var valid=true;if(cell.column.modules.validate&&self.table.modExists("validate")&&self.table.options.validationMode!="manual"){valid=self.table.modules.validate.validate(cell.column.modules.validate,cell,value);}if(valid===true||self.table.options.validationMode==="highlight"){self.clearEditor();if(!cell.modules.edit){cell.modules.edit={};}cell.modules.edit.edited=true;if(self.editedCells.indexOf(cell)==-1){self.editedCells.push(cell);}cell.setValue(value,true);if(self.table.options.dataTree&&self.table.modExists("dataTree")){self.table.modules.dataTree.checkForRestyle(cell);}if(valid!==true){element.classList.add("tabulator-validation-fail");self.table.options.validationFailed.call(self.table,cell.getComponent(),value,valid);return false;}return true;}else {self.invalidEdit=true;element.classList.add("tabulator-validation-fail");self.focusCellNoEvent(cell,true);rendered();self.table.options.validationFailed.call(self.table,cell.getComponent(),value,valid);return false;}}}//handle aborted edit
  function cancel(){if(self.currentCell===cell){self.cancelEdit();if(self.table.options.dataTree&&self.table.modExists("dataTree")){self.table.modules.dataTree.checkForRestyle(cell);}}}function onRendered(callback){rendered=callback;}if(!cell.column.modules.edit.blocked){if(e){e.stopPropagation();}switch(_typeof(cell.column.modules.edit.check)){case"function":allowEdit=cell.column.modules.edit.check(cell.getComponent());break;case"boolean":allowEdit=cell.column.modules.edit.check;break;}if(allowEdit||forceEdit){self.cancelEdit();self.currentCell=cell;this.focusScrollAdjust(cell);component=cell.getComponent();if(this.mouseClick){this.mouseClick=false;if(cell.column.cellEvents.cellClick){cell.column.cellEvents.cellClick.call(this.table,e,component);}}if(cell.column.cellEvents.cellEditing){cell.column.cellEvents.cellEditing.call(this.table,component);}self.table.options.cellEditing.call(this.table,component);params=typeof cell.column.modules.edit.params==="function"?cell.column.modules.edit.params(component):cell.column.modules.edit.params;cellEditor=cell.column.modules.edit.editor.call(self,component,onRendered,success,cancel,params);//if editor returned, add to DOM, if false, abort edit
  if(cellEditor!==false){if(cellEditor instanceof Node){element.classList.add("tabulator-editing");cell.row.getElement().classList.add("tabulator-row-editing");while(element.firstChild){element.removeChild(element.firstChild);}element.appendChild(cellEditor);//trigger onRendered Callback
  rendered();//prevent editing from triggering rowClick event
  var children=element.children;for(var i=0;i<children.length;i++){children[i].addEventListener("click",function(e){e.stopPropagation();});}}else {console.warn("Edit Error - Editor should return an instance of Node, the editor returned:",cellEditor);element.blur();return false;}}else {element.blur();return false;}return true;}else {this.mouseClick=false;element.blur();return false;}}else {this.mouseClick=false;element.blur();return false;}};Edit.prototype.maskInput=function(el,options){var mask=options.mask,maskLetter=typeof options.maskLetterChar!=="undefined"?options.maskLetterChar:"A",maskNumber=typeof options.maskNumberChar!=="undefined"?options.maskNumberChar:"9",maskWildcard=typeof options.maskWildcardChar!=="undefined"?options.maskWildcardChar:"*";function fillSymbols(index){var symbol=mask[index];if(typeof symbol!=="undefined"&&symbol!==maskWildcard&&symbol!==maskLetter&&symbol!==maskNumber){el.value=el.value+""+symbol;fillSymbols(index+1);}}el.addEventListener("keydown",function(e){var index=el.value.length,_char=e.key;if(e.keyCode>46){if(index>=mask.length){e.preventDefault();e.stopPropagation();return false;}else {switch(mask[index]){case maskLetter:if(_char.toUpperCase()==_char.toLowerCase()){e.preventDefault();e.stopPropagation();return false;}break;case maskNumber:if(isNaN(_char)){e.preventDefault();e.stopPropagation();return false;}break;case maskWildcard:break;default:if(_char!==mask[index]){e.preventDefault();e.stopPropagation();return false;}}}}return;});el.addEventListener("keyup",function(e){if(e.keyCode>46){if(options.maskAutoFill){fillSymbols(el.value.length);}}});if(!el.placeholder){el.placeholder=mask;}if(options.maskAutoFill){fillSymbols(el.value.length);}};Edit.prototype.getEditedCells=function(){var output=[];this.editedCells.forEach(function(cell){output.push(cell.getComponent());});return output;};Edit.prototype.clearEdited=function(cell){var editIndex;if(cell.modules.edit&&cell.modules.edit.edited){cell.modules.edit.edited=false;if(cell.modules.validate){cell.modules.validate.invalid=false;}}editIndex=this.editedCells.indexOf(cell);if(editIndex>-1){this.editedCells.splice(editIndex,1);}};//default data editors
  Edit.prototype.editors={//input element
  input:function input(cell,onRendered,success,cancel,editorParams){//create and style input
  var cellValue=cell.getValue(),input=document.createElement("input");input.setAttribute("type",editorParams.search?"search":"text");input.style.padding="4px";input.style.width="100%";input.style.boxSizing="border-box";if(editorParams.elementAttributes&&_typeof(editorParams.elementAttributes)=="object"){for(var key in editorParams.elementAttributes){if(key.charAt(0)=="+"){key=key.slice(1);input.setAttribute(key,input.getAttribute(key)+editorParams.elementAttributes["+"+key]);}else {input.setAttribute(key,editorParams.elementAttributes[key]);}}}input.value=typeof cellValue!=="undefined"?cellValue:"";onRendered(function(){input.focus({preventScroll:true});input.style.height="100%";});function onChange(e){if((cellValue===null||typeof cellValue==="undefined")&&input.value!==""||input.value!==cellValue){if(success(input.value)){cellValue=input.value;//persist value if successfully validated incase editor is used as header filter
  }}else {cancel();}}//submit new value on blur or change
  input.addEventListener("change",onChange);input.addEventListener("blur",onChange);//submit new value on enter
  input.addEventListener("keydown",function(e){switch(e.keyCode){// case 9:
  case 13:onChange();break;case 27:cancel();break;case 35:case 36:e.stopPropagation();break;}});if(editorParams.mask){this.table.modules.edit.maskInput(input,editorParams);}return input;},//resizable text area element
  textarea:function textarea(cell,onRendered,success,cancel,editorParams){var cellValue=cell.getValue(),vertNav=editorParams.verticalNavigation||"hybrid",value=String(cellValue!==null&&typeof cellValue!=="undefined"?cellValue:"");(value.match(/(?:\r\n|\r|\n)/g)||[]).length+1;var input=document.createElement("textarea"),scrollHeight=0;//create and style input
  input.style.display="block";input.style.padding="2px";input.style.height="100%";input.style.width="100%";input.style.boxSizing="border-box";input.style.whiteSpace="pre-wrap";input.style.resize="none";if(editorParams.elementAttributes&&_typeof(editorParams.elementAttributes)=="object"){for(var key in editorParams.elementAttributes){if(key.charAt(0)=="+"){key=key.slice(1);input.setAttribute(key,input.getAttribute(key)+editorParams.elementAttributes["+"+key]);}else {input.setAttribute(key,editorParams.elementAttributes[key]);}}}input.value=value;onRendered(function(){input.focus({preventScroll:true});input.style.height="100%";input.scrollHeight;input.style.height=input.scrollHeight+"px";cell.getRow().normalizeHeight();});function onChange(e){if((cellValue===null||typeof cellValue==="undefined")&&input.value!==""||input.value!==cellValue){if(success(input.value)){cellValue=input.value;//persist value if successfully validated incase editor is used as header filter
  }setTimeout(function(){cell.getRow().normalizeHeight();},300);}else {cancel();}}//submit new value on blur or change
  input.addEventListener("change",onChange);input.addEventListener("blur",onChange);input.addEventListener("keyup",function(){input.style.height="";var heightNow=input.scrollHeight;input.style.height=heightNow+"px";if(heightNow!=scrollHeight){scrollHeight=heightNow;cell.getRow().normalizeHeight();}});input.addEventListener("keydown",function(e){switch(e.keyCode){case 27:cancel();break;case 38://up arrow
  if(vertNav=="editor"||vertNav=="hybrid"&&input.selectionStart){e.stopImmediatePropagation();e.stopPropagation();}break;case 40://down arrow
  if(vertNav=="editor"||vertNav=="hybrid"&&input.selectionStart!==input.value.length){e.stopImmediatePropagation();e.stopPropagation();}break;case 35:case 36:e.stopPropagation();break;}});if(editorParams.mask){this.table.modules.edit.maskInput(input,editorParams);}return input;},//input element with type of number
  number:function number(cell,onRendered,success,cancel,editorParams){var cellValue=cell.getValue(),vertNav=editorParams.verticalNavigation||"editor",input=document.createElement("input");input.setAttribute("type","number");if(typeof editorParams.max!="undefined"){input.setAttribute("max",editorParams.max);}if(typeof editorParams.min!="undefined"){input.setAttribute("min",editorParams.min);}if(typeof editorParams.step!="undefined"){input.setAttribute("step",editorParams.step);}//create and style input
  input.style.padding="4px";input.style.width="100%";input.style.boxSizing="border-box";if(editorParams.elementAttributes&&_typeof(editorParams.elementAttributes)=="object"){for(var key in editorParams.elementAttributes){if(key.charAt(0)=="+"){key=key.slice(1);input.setAttribute(key,input.getAttribute(key)+editorParams.elementAttributes["+"+key]);}else {input.setAttribute(key,editorParams.elementAttributes[key]);}}}input.value=cellValue;var blurFunc=function blurFunc(e){onChange();};onRendered(function(){//submit new value on blur
  input.removeEventListener("blur",blurFunc);input.focus({preventScroll:true});input.style.height="100%";//submit new value on blur
  input.addEventListener("blur",blurFunc);});function onChange(){var value=input.value;if(!isNaN(value)&&value!==""){value=Number(value);}if(value!==cellValue){if(success(value)){cellValue=value;//persist value if successfully validated incase editor is used as header filter
  }}else {cancel();}}//submit new value on enter
  input.addEventListener("keydown",function(e){switch(e.keyCode){case 13:// case 9:
  onChange();break;case 27:cancel();break;case 38://up arrow
  case 40://down arrow
  if(vertNav=="editor"){e.stopImmediatePropagation();e.stopPropagation();}break;case 35:case 36:e.stopPropagation();break;}});if(editorParams.mask){this.table.modules.edit.maskInput(input,editorParams);}return input;},//input element with type of number
  range:function range(cell,onRendered,success,cancel,editorParams){var cellValue=cell.getValue(),input=document.createElement("input");input.setAttribute("type","range");if(typeof editorParams.max!="undefined"){input.setAttribute("max",editorParams.max);}if(typeof editorParams.min!="undefined"){input.setAttribute("min",editorParams.min);}if(typeof editorParams.step!="undefined"){input.setAttribute("step",editorParams.step);}//create and style input
  input.style.padding="4px";input.style.width="100%";input.style.boxSizing="border-box";if(editorParams.elementAttributes&&_typeof(editorParams.elementAttributes)=="object"){for(var key in editorParams.elementAttributes){if(key.charAt(0)=="+"){key=key.slice(1);input.setAttribute(key,input.getAttribute(key)+editorParams.elementAttributes["+"+key]);}else {input.setAttribute(key,editorParams.elementAttributes[key]);}}}input.value=cellValue;onRendered(function(){input.focus({preventScroll:true});input.style.height="100%";});function onChange(){var value=input.value;if(!isNaN(value)&&value!==""){value=Number(value);}if(value!=cellValue){if(success(value)){cellValue=value;//persist value if successfully validated incase editor is used as header filter
  }}else {cancel();}}//submit new value on blur
  input.addEventListener("blur",function(e){onChange();});//submit new value on enter
  input.addEventListener("keydown",function(e){switch(e.keyCode){case 13:// case 9:
  onChange();break;case 27:cancel();break;}});return input;},//select
  select:function select(cell,onRendered,success,cancel,editorParams){var _this53=this;var self=this,cellEl=cell.getElement(),initialValue=cell.getValue(),vertNav=editorParams.verticalNavigation||"editor",initialDisplayValue=typeof initialValue!=="undefined"||initialValue===null?Array.isArray(initialValue)?initialValue:[initialValue]:typeof editorParams.defaultValue!=="undefined"?editorParams.defaultValue:[],input=document.createElement("input"),listEl=document.createElement("div"),multiselect=editorParams.multiselect,dataItems=[],currentItem={},displayItems=[],currentItems=[],blurable=true,blockListShow=false,searchWord="",searchWordTimeout=null;if(Array.isArray(editorParams)||!Array.isArray(editorParams)&&(typeof editorParams==='undefined'?'undefined':_typeof(editorParams))==="object"&&!editorParams.values){console.warn("DEPRECATION WARNING - values for the select editor must now be passed into the values property of the editorParams object, not as the editorParams object");editorParams={values:editorParams};}function getUniqueColumnValues(field){var output={},data=self.table.getData(),column;if(field){column=self.table.columnManager.getColumnByField(field);}else {column=cell.getColumn()._getSelf();}if(column){data.forEach(function(row){var val=column.getFieldValue(row);if(val!==null&&typeof val!=="undefined"&&val!==""){output[val]=true;}});}else {console.warn("unable to find matching column to create select lookup list:",field);}return Object.keys(output);}function parseItems(inputValues,curentValues){var dataList=[];var displayList=[];function processComplexListItem(item){var item={label:item.label,value:item.value,itemParams:item.itemParams,elementAttributes:item.elementAttributes,element:false};// if(item.value === curentValue || (!isNaN(parseFloat(item.value)) && !isNaN(parseFloat(item.value)) && parseFloat(item.value) === parseFloat(curentValue))){
  // 	setCurrentItem(item);
  // }
  if(curentValues.indexOf(item.value)>-1){setItem(item);}dataList.push(item);displayList.push(item);return item;}if(typeof inputValues=="function"){inputValues=inputValues(cell);}if(Array.isArray(inputValues)){inputValues.forEach(function(value){var item;if((typeof value==='undefined'?'undefined':_typeof(value))==="object"){if(value.options){item={label:value.label,group:true,itemParams:value.itemParams,elementAttributes:value.elementAttributes,element:false};displayList.push(item);value.options.forEach(function(item){processComplexListItem(item);});}else {processComplexListItem(value);}}else {item={label:value,value:value,element:false};// if(item.value === curentValue || (!isNaN(parseFloat(item.value)) && !isNaN(parseFloat(item.value)) && parseFloat(item.value) === parseFloat(curentValue))){
  // 	setCurrentItem(item);
  // }
  if(curentValues.indexOf(item.value)>-1){setItem(item);}dataList.push(item);displayList.push(item);}});}else {for(var key in inputValues){var item={label:inputValues[key],value:key,element:false};// if(item.value === curentValue || (!isNaN(parseFloat(item.value)) && !isNaN(parseFloat(item.value)) && parseFloat(item.value) === parseFloat(curentValue))){
  // 	setCurrentItem(item);
  // }
  if(curentValues.indexOf(item.value)>-1){setItem(item);}dataList.push(item);displayList.push(item);}}if(editorParams.sortValuesList){dataList.sort(function(a,b){return a.label<b.label?-1:a.label>b.label?1:0;});displayList.sort(function(a,b){return a.label<b.label?-1:a.label>b.label?1:0;});if(editorParams.sortValuesList!=="asc"){dataList.reverse();displayList.reverse();}}dataItems=dataList;displayItems=displayList;fillList();}function fillList(){while(listEl.firstChild){listEl.removeChild(listEl.firstChild);}displayItems.forEach(function(item){var el=item.element;if(!el){el=document.createElement("div");item.label=editorParams.listItemFormatter?editorParams.listItemFormatter(item.value,item.label,cell,el,item.itemParams):item.label;if(item.group){el.classList.add("tabulator-edit-select-list-group");el.tabIndex=0;el.innerHTML=item.label===""?"&nbsp;":item.label;}else {el.classList.add("tabulator-edit-select-list-item");el.tabIndex=0;el.innerHTML=item.label===""?"&nbsp;":item.label;el.addEventListener("click",function(){blockListShow=true;setTimeout(function(){blockListShow=false;},10);// setCurrentItem(item);
  // chooseItem();
  if(multiselect){toggleItem(item);input.focus();}else {chooseItem(item);}});// if(item === currentItem){
  // 	el.classList.add("active");
  // }
  if(currentItems.indexOf(item)>-1){el.classList.add("active");}}if(item.elementAttributes&&_typeof(item.elementAttributes)=="object"){for(var key in item.elementAttributes){if(key.charAt(0)=="+"){key=key.slice(1);el.setAttribute(key,input.getAttribute(key)+item.elementAttributes["+"+key]);}else {el.setAttribute(key,item.elementAttributes[key]);}}}el.addEventListener("mousedown",function(){blurable=false;setTimeout(function(){blurable=true;},10);});item.element=el;}listEl.appendChild(el);});}function setCurrentItem(item,active){if(!multiselect&&currentItem&&currentItem.element){currentItem.element.classList.remove("active");}if(currentItem&&currentItem.element){currentItem.element.classList.remove("focused");}currentItem=item;if(item.element){item.element.classList.add("focused");if(active){item.element.classList.add("active");}}if(item&&item.element&&item.element.scrollIntoView){item.element.scrollIntoView({behavior:'smooth',block:'nearest',inline:'start'});}}// function chooseItem(){
  // 	hideList();
  // 	if(initialValue !== currentItem.value){
  // 		initialValue = currentItem.value;
  // 		success(currentItem.value);
  // 	}else{
  // 		cancel();
  // 	}
  // }
  function setItem(item){var index=currentItems.indexOf(item);if(index==-1){currentItems.push(item);setCurrentItem(item,true);}fillInput();}function unsetItem(index){var item=currentItems[index];if(index>-1){currentItems.splice(index,1);if(item.element){item.element.classList.remove("active");}}}function toggleItem(item){if(!item){item=currentItem;}var index=currentItems.indexOf(item);if(index>-1){unsetItem(index);}else {if(multiselect!==true&&currentItems.length>=multiselect){unsetItem(0);}setItem(item);}fillInput();}function chooseItem(item){hideList();if(!item){item=currentItem;}if(item){input.value=item.label;success(item.value);}initialDisplayValue=[item.value];}function chooseItems(silent){if(!silent){hideList();}var output=[];currentItems.forEach(function(item){output.push(item.value);});initialDisplayValue=output;success(output);}function fillInput(){var output=[];currentItems.forEach(function(item){output.push(item.label);});input.value=output.join(", ");if(self.currentCell===false){chooseItems(true);}}function unsetItems(){var len=currentItems.length;for(var _i9=0;_i9<len;_i9++){unsetItem(0);}}function cancelItem(){hideList();cancel();}function showList(){currentItems=[];if(!listEl.parentNode){if(editorParams.values===true){parseItems(getUniqueColumnValues(),initialDisplayValue);}else if(typeof editorParams.values==="string"){parseItems(getUniqueColumnValues(editorParams.values),initialDisplayValue);}else {parseItems(editorParams.values||[],initialDisplayValue);}var offset=Tabulator.prototype.helpers.elOffset(cellEl);listEl.style.minWidth=cellEl.offsetWidth+"px";listEl.style.top=offset.top+cellEl.offsetHeight+"px";listEl.style.left=offset.left+"px";listEl.addEventListener("mousedown",function(e){blurable=false;setTimeout(function(){blurable=true;},10);});document.body.appendChild(listEl);}}function hideList(){if(listEl.parentNode){listEl.parentNode.removeChild(listEl);}removeScrollListener();}function removeScrollListener(){self.table.rowManager.element.removeEventListener("scroll",cancelItem);}function scrollTovalue(_char2){clearTimeout(searchWordTimeout);var character=String.fromCharCode(event.keyCode).toLowerCase();searchWord+=character.toLowerCase();var match=dataItems.find(function(item){return typeof item.label!=="undefined"&&item.label.toLowerCase().startsWith(searchWord);});if(match){setCurrentItem(match,!multiselect);}searchWordTimeout=setTimeout(function(){searchWord="";},800);}//style input
  input.setAttribute("type","text");input.style.padding="4px";input.style.width="100%";input.style.boxSizing="border-box";input.style.cursor="default";input.readOnly=this.currentCell!=false;if(editorParams.elementAttributes&&_typeof(editorParams.elementAttributes)=="object"){for(var key in editorParams.elementAttributes){if(key.charAt(0)=="+"){key=key.slice(1);input.setAttribute(key,input.getAttribute(key)+editorParams.elementAttributes["+"+key]);}else {input.setAttribute(key,editorParams.elementAttributes[key]);}}}input.value=typeof initialValue!=="undefined"||initialValue===null?initialValue:"";// if(editorParams.values === true){
  // 	parseItems(getUniqueColumnValues(), initialValue);
  // }else if(typeof editorParams.values === "string"){
  // 	parseItems(getUniqueColumnValues(editorParams.values), initialValue);
  // }else{
  // 	parseItems(editorParams.values || [], initialValue);
  // }
  input.addEventListener("search",function(e){if(!input.value){unsetItems();chooseItems();}});//allow key based navigation
  input.addEventListener("keydown",function(e){var index;switch(e.keyCode){case 38://up arrow
  index=dataItems.indexOf(currentItem);if(vertNav=="editor"||vertNav=="hybrid"&&index){e.stopImmediatePropagation();e.stopPropagation();e.preventDefault();if(index>0){setCurrentItem(dataItems[index-1],!multiselect);}}break;case 40://down arrow
  index=dataItems.indexOf(currentItem);if(vertNav=="editor"||vertNav=="hybrid"&&index<dataItems.length-1){e.stopImmediatePropagation();e.stopPropagation();e.preventDefault();if(index<dataItems.length-1){if(index==-1){setCurrentItem(dataItems[0],!multiselect);}else {setCurrentItem(dataItems[index+1],!multiselect);}}}break;case 37://left arrow
  case 39://right arrow
  e.stopImmediatePropagation();e.stopPropagation();e.preventDefault();break;case 13://enter
  // chooseItem();
  if(multiselect){toggleItem();}else {chooseItem();}break;case 27://escape
  cancelItem();break;case 9://tab
  break;default:if(self.currentCell===false){e.preventDefault();}if(e.keyCode>=38&&e.keyCode<=90){scrollTovalue(e.keyCode);}}});input.addEventListener("blur",function(e){if(blurable){if(multiselect){chooseItems();}else {cancelItem();}}});input.addEventListener("focus",function(e){if(!blockListShow){showList();}});//style list element
  listEl=document.createElement("div");listEl.classList.add("tabulator-edit-select-list");onRendered(function(){input.style.height="100%";input.focus({preventScroll:true});});setTimeout(function(){_this53.table.rowManager.element.addEventListener("scroll",cancelItem);},10);return input;},//autocomplete
  autocomplete:function autocomplete(cell,onRendered,success,cancel,editorParams){var _this54=this;var self=this,cellEl=cell.getElement(),initialValue=cell.getValue(),vertNav=editorParams.verticalNavigation||"editor",initialDisplayValue=typeof initialValue!=="undefined"||initialValue===null?initialValue:typeof editorParams.defaultValue!=="undefined"?editorParams.defaultValue:"",input=document.createElement("input"),listEl=document.createElement("div"),displayItems=[],currentItem=false,blurable=true,uniqueColumnValues=false;//style input
  input.setAttribute("type","search");input.style.padding="4px";input.style.width="100%";input.style.boxSizing="border-box";if(editorParams.elementAttributes&&_typeof(editorParams.elementAttributes)=="object"){for(var key in editorParams.elementAttributes){if(key.charAt(0)=="+"){key=key.slice(1);input.setAttribute(key,input.getAttribute(key)+editorParams.elementAttributes["+"+key]);}else {input.setAttribute(key,editorParams.elementAttributes[key]);}}}//style list element
  listEl.classList.add("tabulator-edit-select-list");listEl.addEventListener("mousedown",function(e){blurable=false;setTimeout(function(){blurable=true;},10);});function genUniqueColumnValues(){if(editorParams.values===true){uniqueColumnValues=getUniqueColumnValues();}else if(typeof editorParams.values==="string"){uniqueColumnValues=getUniqueColumnValues(editorParams.values);}}function getUniqueColumnValues(field){var output={},data=self.table.getData(),column;if(field){column=self.table.columnManager.getColumnByField(field);}else {column=cell.getColumn()._getSelf();}if(column){data.forEach(function(row){var val=column.getFieldValue(row);if(val!==null&&typeof val!=="undefined"&&val!==""){output[val]=true;}});if(editorParams.sortValuesList){if(editorParams.sortValuesList=="asc"){output=Object.keys(output).sort();}else {output=Object.keys(output).sort().reverse();}}else {output=Object.keys(output);}}else {console.warn("unable to find matching column to create autocomplete lookup list:",field);}return output;}function filterList(term,intialLoad){var matches=[],values,items;//lookup base values list
  if(uniqueColumnValues){values=uniqueColumnValues;}else {values=editorParams.values||[];}if(editorParams.searchFunc){matches=editorParams.searchFunc(term,values);if(matches instanceof Promise){addNotice(typeof editorParams.searchingPlaceholder!=="undefined"?editorParams.searchingPlaceholder:"Searching...");matches.then(function(result){fillListIfNotEmpty(parseItems(result),intialLoad);})["catch"](function(err){console.err("error in autocomplete search promise:",err);});}else {fillListIfNotEmpty(parseItems(matches),intialLoad);}}else {items=parseItems(values);if(term===""){if(editorParams.showListOnEmpty){matches=items;}}else {items.forEach(function(item){if(item.value!==null||typeof item.value!=="undefined"){if(String(item.value).toLowerCase().indexOf(String(term).toLowerCase())>-1||String(item.title).toLowerCase().indexOf(String(term).toLowerCase())>-1){matches.push(item);}}});}fillListIfNotEmpty(matches,intialLoad);}}function addNotice(notice){var searchEl=document.createElement("div");clearList();if(notice!==false){searchEl.classList.add("tabulator-edit-select-list-notice");searchEl.tabIndex=0;if(notice instanceof Node){searchEl.appendChild(notice);}else {searchEl.innerHTML=notice;}listEl.appendChild(searchEl);}}function parseItems(inputValues){var itemList=[];if(Array.isArray(inputValues)){inputValues.forEach(function(value){var item={};if((typeof value==='undefined'?'undefined':_typeof(value))==="object"){item.title=editorParams.listItemFormatter?editorParams.listItemFormatter(value.value,value.label):value.label;item.value=value.value;}else {item.title=editorParams.listItemFormatter?editorParams.listItemFormatter(value,value):value;item.value=value;}itemList.push(item);});}else {for(var key in inputValues){var item={title:editorParams.listItemFormatter?editorParams.listItemFormatter(key,inputValues[key]):inputValues[key],value:key};itemList.push(item);}}return itemList;}function clearList(){while(listEl.firstChild){listEl.removeChild(listEl.firstChild);}}function fillListIfNotEmpty(items,intialLoad){if(items.length){fillList(items,intialLoad);}else {if(editorParams.emptyPlaceholder){addNotice(editorParams.emptyPlaceholder);}}}function fillList(items,intialLoad){var current=false;clearList();displayItems=items;displayItems.forEach(function(item){var el=item.element;if(!el){el=document.createElement("div");el.classList.add("tabulator-edit-select-list-item");el.tabIndex=0;el.innerHTML=item.title;el.addEventListener("click",function(e){setCurrentItem(item);chooseItem();});el.addEventListener("mousedown",function(e){blurable=false;setTimeout(function(){blurable=true;},10);});item.element=el;if(intialLoad&&item.value==initialValue){input.value=item.title;item.element.classList.add("active");current=true;}if(item===currentItem){item.element.classList.add("active");current=true;}}listEl.appendChild(el);});if(!current){setCurrentItem(false);}}function chooseItem(){hideList();if(currentItem){if(initialValue!==currentItem.value){initialValue=currentItem.value;input.value=currentItem.title;success(currentItem.value);}else {cancel();}}else {if(editorParams.freetext){initialValue=input.value;success(input.value);}else {if(editorParams.allowEmpty&&input.value===""){initialValue=input.value;success(input.value);}else {cancel();}}}}function showList(){if(!listEl.parentNode){console.log("show",initialDisplayValue);while(listEl.firstChild){listEl.removeChild(listEl.firstChild);}var offset=Tabulator.prototype.helpers.elOffset(cellEl);listEl.style.minWidth=cellEl.offsetWidth+"px";listEl.style.top=offset.top+cellEl.offsetHeight+"px";listEl.style.left=offset.left+"px";document.body.appendChild(listEl);}}function setCurrentItem(item,showInputValue){if(currentItem&&currentItem.element){currentItem.element.classList.remove("active");}currentItem=item;if(item&&item.element){item.element.classList.add("active");}if(item&&item.element&&item.element.scrollIntoView){item.element.scrollIntoView({behavior:'smooth',block:'nearest',inline:'start'});}}function hideList(){if(listEl.parentNode){listEl.parentNode.removeChild(listEl);}removeScrollListener();}function cancelItem(){hideList();cancel();}function removeScrollListener(){self.table.rowManager.element.removeEventListener("scroll",cancelItem);}//allow key based navigation
  input.addEventListener("keydown",function(e){var index;switch(e.keyCode){case 38://up arrow
  index=displayItems.indexOf(currentItem);if(vertNav=="editor"||vertNav=="hybrid"&&index){e.stopImmediatePropagation();e.stopPropagation();e.preventDefault();if(index>0){setCurrentItem(displayItems[index-1]);}else {setCurrentItem(false);}}break;case 40://down arrow
  index=displayItems.indexOf(currentItem);if(vertNav=="editor"||vertNav=="hybrid"&&index<displayItems.length-1){e.stopImmediatePropagation();e.stopPropagation();e.preventDefault();if(index<displayItems.length-1){if(index==-1){setCurrentItem(displayItems[0]);}else {setCurrentItem(displayItems[index+1]);}}}break;case 37://left arrow
  case 39://right arrow
  e.stopImmediatePropagation();e.stopPropagation();// e.preventDefault();
  break;case 13://enter
  chooseItem();break;case 27://escape
  cancelItem();break;case 36://home
  case 35://end
  //prevent table navigation while using input element
  e.stopImmediatePropagation();break;}});input.addEventListener("keyup",function(e){switch(e.keyCode){case 38://up arrow
  case 37://left arrow
  case 39://up arrow
  case 40://right arrow
  case 13://enter
  case 27://escape
  break;default:filterList(input.value);}});input.addEventListener("search",function(e){filterList(input.value);});input.addEventListener("blur",function(e){if(blurable){chooseItem();}});input.addEventListener("focus",function(e){var value=initialDisplayValue;genUniqueColumnValues();showList();input.value=value;filterList(value,true);});onRendered(function(){input.style.height="100%";input.focus({preventScroll:true});});if(editorParams.mask){this.table.modules.edit.maskInput(input,editorParams);}setTimeout(function(){_this54.table.rowManager.element.addEventListener("scroll",cancelItem);},10);genUniqueColumnValues();input.value=initialDisplayValue;filterList(initialDisplayValue,true);return input;},//star rating
  star:function star(cell,onRendered,success,cancel,editorParams){var self=this,element=cell.getElement(),value=cell.getValue(),maxStars=element.getElementsByTagName("svg").length||5,size=element.getElementsByTagName("svg")[0]?element.getElementsByTagName("svg")[0].getAttribute("width"):14,stars=[],starsHolder=document.createElement("div"),star=document.createElementNS('http://www.w3.org/2000/svg',"svg");//change star type
  function starChange(val){stars.forEach(function(star,i){if(i<val){if(self.table.browser=="ie"){star.setAttribute("class","tabulator-star-active");}else {star.classList.replace("tabulator-star-inactive","tabulator-star-active");}star.innerHTML='<polygon fill="#488CE9" stroke="#014AAE" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';}else {if(self.table.browser=="ie"){star.setAttribute("class","tabulator-star-inactive");}else {star.classList.replace("tabulator-star-active","tabulator-star-inactive");}star.innerHTML='<polygon fill="#010155" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';}});}//build stars
  function buildStar(i){var starHolder=document.createElement("span");var nextStar=star.cloneNode(true);stars.push(nextStar);starHolder.addEventListener("mouseenter",function(e){e.stopPropagation();e.stopImmediatePropagation();starChange(i);});starHolder.addEventListener("mousemove",function(e){e.stopPropagation();e.stopImmediatePropagation();});starHolder.addEventListener("click",function(e){e.stopPropagation();e.stopImmediatePropagation();success(i);element.blur();});starHolder.appendChild(nextStar);starsHolder.appendChild(starHolder);}//handle keyboard navigation value change
  function changeValue(val){value=val;starChange(val);}//style cell
  element.style.whiteSpace="nowrap";element.style.overflow="hidden";element.style.textOverflow="ellipsis";//style holding element
  starsHolder.style.verticalAlign="middle";starsHolder.style.display="inline-block";starsHolder.style.padding="4px";//style star
  star.setAttribute("width",size);star.setAttribute("height",size);star.setAttribute("viewBox","0 0 512 512");star.setAttribute("xml:space","preserve");star.style.padding="0 1px";if(editorParams.elementAttributes&&_typeof(editorParams.elementAttributes)=="object"){for(var key in editorParams.elementAttributes){if(key.charAt(0)=="+"){key=key.slice(1);starsHolder.setAttribute(key,starsHolder.getAttribute(key)+editorParams.elementAttributes["+"+key]);}else {starsHolder.setAttribute(key,editorParams.elementAttributes[key]);}}}//create correct number of stars
  for(var i=1;i<=maxStars;i++){buildStar(i);}//ensure value does not exceed number of stars
  value=Math.min(parseInt(value),maxStars);// set initial styling of stars
  starChange(value);starsHolder.addEventListener("mousemove",function(e){starChange(0);});starsHolder.addEventListener("click",function(e){success(0);});element.addEventListener("blur",function(e){cancel();});//allow key based navigation
  element.addEventListener("keydown",function(e){switch(e.keyCode){case 39://right arrow
  changeValue(value+1);break;case 37://left arrow
  changeValue(value-1);break;case 13://enter
  success(value);break;case 27://escape
  cancel();break;}});return starsHolder;},//draggable progress bar
  progress:function progress(cell,onRendered,success,cancel,editorParams){var element=cell.getElement(),max=typeof editorParams.max==="undefined"?element.getElementsByTagName("div")[0].getAttribute("max")||100:editorParams.max,min=typeof editorParams.min==="undefined"?element.getElementsByTagName("div")[0].getAttribute("min")||0:editorParams.min,percent=(max-min)/100,value=cell.getValue()||0,handle=document.createElement("div"),bar=document.createElement("div"),mouseDrag,mouseDragWidth;//set new value
  function updateValue(){var style=window.getComputedStyle(element,null);var calcVal=percent*Math.round(bar.offsetWidth/((element.clientWidth-parseInt(style.getPropertyValue("padding-left"))-parseInt(style.getPropertyValue("padding-right")))/100))+min;success(calcVal);element.setAttribute("aria-valuenow",calcVal);element.setAttribute("aria-label",value);}//style handle
  handle.style.position="absolute";handle.style.right="0";handle.style.top="0";handle.style.bottom="0";handle.style.width="5px";handle.classList.add("tabulator-progress-handle");//style bar
  bar.style.display="inline-block";bar.style.position="relative";// bar.style.top = "8px";
  // bar.style.bottom = "8px";
  // bar.style.left = "4px";
  // bar.style.marginRight = "4px";
  bar.style.height="100%";bar.style.backgroundColor="#488CE9";bar.style.maxWidth="100%";bar.style.minWidth="0%";if(editorParams.elementAttributes&&_typeof(editorParams.elementAttributes)=="object"){for(var key in editorParams.elementAttributes){if(key.charAt(0)=="+"){key=key.slice(1);bar.setAttribute(key,bar.getAttribute(key)+editorParams.elementAttributes["+"+key]);}else {bar.setAttribute(key,editorParams.elementAttributes[key]);}}}//style cell
  element.style.padding="4px 4px";//make sure value is in range
  value=Math.min(parseFloat(value),max);value=Math.max(parseFloat(value),min);//workout percentage
  value=Math.round((value-min)/percent);// bar.style.right = value + "%";
  bar.style.width=value+"%";element.setAttribute("aria-valuemin",min);element.setAttribute("aria-valuemax",max);bar.appendChild(handle);handle.addEventListener("mousedown",function(e){mouseDrag=e.screenX;mouseDragWidth=bar.offsetWidth;});handle.addEventListener("mouseover",function(){handle.style.cursor="ew-resize";});element.addEventListener("mousemove",function(e){if(mouseDrag){bar.style.width=mouseDragWidth+e.screenX-mouseDrag+"px";}});element.addEventListener("mouseup",function(e){if(mouseDrag){e.stopPropagation();e.stopImmediatePropagation();mouseDrag=false;mouseDragWidth=false;updateValue();}});//allow key based navigation
  element.addEventListener("keydown",function(e){switch(e.keyCode){case 39://right arrow
  e.preventDefault();bar.style.width=bar.clientWidth+element.clientWidth/100+"px";break;case 37://left arrow
  e.preventDefault();bar.style.width=bar.clientWidth-element.clientWidth/100+"px";break;case 9://tab
  case 13://enter
  updateValue();break;case 27://escape
  cancel();break;}});element.addEventListener("blur",function(){cancel();});return bar;},//checkbox
  tickCross:function tickCross(cell,onRendered,success,cancel,editorParams){var value=cell.getValue(),input=document.createElement("input"),tristate=editorParams.tristate,indetermValue=typeof editorParams.indeterminateValue==="undefined"?null:editorParams.indeterminateValue,indetermState=false;input.setAttribute("type","checkbox");input.style.marginTop="5px";input.style.boxSizing="border-box";if(editorParams.elementAttributes&&_typeof(editorParams.elementAttributes)=="object"){for(var key in editorParams.elementAttributes){if(key.charAt(0)=="+"){key=key.slice(1);input.setAttribute(key,input.getAttribute(key)+editorParams.elementAttributes["+"+key]);}else {input.setAttribute(key,editorParams.elementAttributes[key]);}}}input.value=value;if(tristate&&(typeof value==="undefined"||value===indetermValue||value==="")){indetermState=true;input.indeterminate=true;}if(this.table.browser!="firefox"){//prevent blur issue on mac firefox
  onRendered(function(){input.focus({preventScroll:true});});}input.checked=value===true||value==="true"||value==="True"||value===1;onRendered(function(){input.focus();});function setValue(blur){if(tristate){if(!blur){if(input.checked&&!indetermState){input.checked=false;input.indeterminate=true;indetermState=true;return indetermValue;}else {indetermState=false;return input.checked;}}else {if(indetermState){return indetermValue;}else {return input.checked;}}}else {return input.checked;}}//submit new value on blur
  input.addEventListener("change",function(e){success(setValue());});input.addEventListener("blur",function(e){success(setValue(true));});//submit new value on enter
  input.addEventListener("keydown",function(e){if(e.keyCode==13){success(setValue());}if(e.keyCode==27){cancel();}});return input;}};Tabulator.prototype.registerModule("edit",Edit);var ExportRow=function ExportRow(type,columns,component,indent){this.type=type;this.columns=columns;this.component=component||false;this.indent=indent||0;};var ExportColumn=function ExportColumn(value,component,width,height,depth){this.value=value;this.component=component||false;this.width=width;this.height=height;this.depth=depth;};var Export=function Export(table){this.table=table;//hold Tabulator object
  this.config={};this.cloneTableStyle=true;this.colVisProp="";};Export.prototype.generateExportList=function(config,style,range,colVisProp){this.cloneTableStyle=style;this.config=config||{};this.colVisProp=colVisProp;var headers=this.config.columnHeaders!==false?this.headersToExportRows(this.generateColumnGroupHeaders()):[];var body=this.bodyToExportRows(this.rowLookup(range));return headers.concat(body);};Export.prototype.genereateTable=function(config,style,range,colVisProp){var list=this.generateExportList(config,style,range,colVisProp);return this.genereateTableElement(list);};Export.prototype.rowLookup=function(range){var _this55=this;var rows=[];if(typeof range=="function"){range.call(this.table).forEach(function(row){row=_this55.table.rowManager.findRow(row);if(row){rows.push(row);}});}else {switch(range){case true:case"visible":rows=this.table.rowManager.getVisibleRows(true);break;case"all":rows=this.table.rowManager.rows;break;case"selected":rows=this.table.modules.selectRow.selectedRows;break;case"active":default:if(this.table.options.pagination){rows=this.table.rowManager.getDisplayRows(this.table.rowManager.displayRows.length-2);}else {rows=this.table.rowManager.getDisplayRows();}}}return Object.assign([],rows);};Export.prototype.generateColumnGroupHeaders=function(){var _this56=this;var output=[];var columns=this.config.columnGroups!==false?this.table.columnManager.columns:this.table.columnManager.columnsByIndex;columns.forEach(function(column){var colData=_this56.processColumnGroup(column);if(colData){output.push(colData);}});return output;};Export.prototype.processColumnGroup=function(column){var _this57=this;var subGroups=column.columns,maxDepth=0,title=column.definition["title"+(this.colVisProp.charAt(0).toUpperCase()+this.colVisProp.slice(1))]||column.definition.title;var groupData={title:title,column:column,depth:1};if(subGroups.length){groupData.subGroups=[];groupData.width=0;subGroups.forEach(function(subGroup){var subGroupData=_this57.processColumnGroup(subGroup);if(subGroupData){groupData.width+=subGroupData.width;groupData.subGroups.push(subGroupData);if(subGroupData.depth>maxDepth){maxDepth=subGroupData.depth;}}});groupData.depth+=maxDepth;if(!groupData.width){return false;}}else {if(this.columnVisCheck(column)){groupData.width=1;}else {return false;}}return groupData;};Export.prototype.columnVisCheck=function(column){return column.definition[this.colVisProp]!==false&&(column.visible||!column.visible&&column.definition[this.colVisProp]);};Export.prototype.headersToExportRows=function(columns){var headers=[],headerDepth=0,exportRows=[];function parseColumnGroup(column,level){var depth=headerDepth-level;if(typeof headers[level]==="undefined"){headers[level]=[];}column.height=column.subGroups?1:depth-column.depth+1;headers[level].push(column);if(column.height>1){for(var _i10=1;_i10<column.height;_i10++){if(typeof headers[level+_i10]==="undefined"){headers[level+_i10]=[];}headers[level+_i10].push(false);}}if(column.width>1){for(var _i11=1;_i11<column.width;_i11++){headers[level].push(false);}}if(column.subGroups){column.subGroups.forEach(function(subGroup){parseColumnGroup(subGroup,level+1);});}}//calculate maximum header debth
  columns.forEach(function(column){if(column.depth>headerDepth){headerDepth=column.depth;}});columns.forEach(function(column){parseColumnGroup(column,0);});headers.forEach(function(header){var columns=[];header.forEach(function(col){if(col){columns.push(new ExportColumn(col.title,col.column.getComponent(),col.width,col.height,col.depth));}else {columns.push(null);}});exportRows.push(new ExportRow("header",columns));});return exportRows;};Export.prototype.bodyToExportRows=function(rows){var _this58=this;var columns=[];var exportRows=[];this.table.columnManager.columnsByIndex.forEach(function(column){if(_this58.columnVisCheck(column)){columns.push(column.getComponent());}});if(this.config.columnCalcs!==false&&this.table.modExists("columnCalcs")){if(this.table.modules.columnCalcs.topInitialized){rows.unshift(this.table.modules.columnCalcs.topRow);}if(this.table.modules.columnCalcs.botInitialized){rows.push(this.table.modules.columnCalcs.botRow);}}rows=rows.filter(function(row){switch(row.type){case"group":return _this58.config.rowGroups!==false;case"calc":return _this58.config.columnCalcs!==false;case"row":return !(_this58.table.options.dataTree&&_this58.config.dataTree===false&&row.modules.dataTree.parent);}return true;});rows.forEach(function(row,i){var rowData=row.getData(_this58.colVisProp);var exportCols=[];var indent=0;switch(row.type){case"group":indent=row.level;exportCols.push(new ExportColumn(row.key,row.getComponent(),columns.length,1));break;case"calc":case"row":columns.forEach(function(col){exportCols.push(new ExportColumn(col._column.getFieldValue(rowData),col,1,1));});if(_this58.table.options.dataTree&&_this58.config.dataTree!==false){indent=row.modules.dataTree.index;}break;}exportRows.push(new ExportRow(row.type,exportCols,row.getComponent(),indent));});return exportRows;};Export.prototype.genereateTableElement=function(list){var _this59=this;var table=document.createElement("table"),headerEl=document.createElement("thead"),bodyEl=document.createElement("tbody"),styles=this.lookupTableStyles(),rowFormatter=this.table.options["rowFormatter"+(this.colVisProp.charAt(0).toUpperCase()+this.colVisProp.slice(1))],setup={};setup.rowFormatter=rowFormatter!==null?rowFormatter:this.table.options.rowFormatter;if(this.table.options.dataTree&&this.config.dataTree!==false&&this.table.modExists("columnCalcs")){setup.treeElementField=this.table.modules.dataTree.elementField;}//assign group header formatter
  setup.groupHeader=this.table.options["groupHeader"+(this.colVisProp.charAt(0).toUpperCase()+this.colVisProp.slice(1))];if(setup.groupHeader&&!Array.isArray(setup.groupHeader)){setup.groupHeader=[setup.groupHeader];}table.classList.add("tabulator-print-table");this.mapElementStyles(this.table.columnManager.getHeadersElement(),headerEl,["border-top","border-left","border-right","border-bottom","background-color","color","font-weight","font-family","font-size"]);if(list.length>1000){console.warn("It may take a long time to render an HTML table with more than 1000 rows");}list.forEach(function(row,i){switch(row.type){case"header":headerEl.appendChild(_this59.genereateHeaderElement(row,setup,styles));break;case"group":bodyEl.appendChild(_this59.genereateGroupElement(row,setup,styles));break;case"calc":bodyEl.appendChild(_this59.genereateCalcElement(row,setup,styles));break;case"row":var rowEl=_this59.genereateRowElement(row,setup,styles);_this59.mapElementStyles(i%2&&styles.evenRow?styles.evenRow:styles.oddRow,rowEl,["border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","background-color"]);bodyEl.appendChild(rowEl);break;}});if(headerEl.innerHTML){table.appendChild(headerEl);}table.appendChild(bodyEl);this.mapElementStyles(this.table.element,table,["border-top","border-left","border-right","border-bottom"]);return table;};Export.prototype.lookupTableStyles=function(){var styles={};//lookup row styles
  if(this.cloneTableStyle&&window.getComputedStyle){styles.oddRow=this.table.element.querySelector(".tabulator-row-odd:not(.tabulator-group):not(.tabulator-calcs)");styles.evenRow=this.table.element.querySelector(".tabulator-row-even:not(.tabulator-group):not(.tabulator-calcs)");styles.calcRow=this.table.element.querySelector(".tabulator-row.tabulator-calcs");styles.firstRow=this.table.element.querySelector(".tabulator-row:not(.tabulator-group):not(.tabulator-calcs)");styles.firstGroup=this.table.element.getElementsByClassName("tabulator-group")[0];if(styles.firstRow){styles.styleCells=styles.firstRow.getElementsByClassName("tabulator-cell");styles.firstCell=styles.styleCells[0];styles.lastCell=styles.styleCells[styles.styleCells.length-1];}}return styles;};Export.prototype.genereateHeaderElement=function(row,setup,styles){var _this60=this;var rowEl=document.createElement("tr");row.columns.forEach(function(column){if(column){var cellEl=document.createElement("th");var classNames=column.component._column.definition.cssClass?column.component._column.definition.cssClass.split(" "):[];cellEl.colSpan=column.width;cellEl.rowSpan=column.height;cellEl.innerHTML=column.value;if(_this60.cloneTableStyle){cellEl.style.boxSizing="border-box";}classNames.forEach(function(className){cellEl.classList.add(className);});_this60.mapElementStyles(column.component.getElement(),cellEl,["text-align","border-top","border-left","border-right","border-bottom","background-color","color","font-weight","font-family","font-size"]);_this60.mapElementStyles(column.component._column.contentElement,cellEl,["padding-top","padding-left","padding-right","padding-bottom"]);if(column.component._column.visible){_this60.mapElementStyles(column.component.getElement(),cellEl,["width"]);}else {if(column.component._column.definition.width){cellEl.style.width=column.component._column.definition.width+"px";}}if(column.component._column.parent){_this60.mapElementStyles(column.component._column.parent.groupElement,cellEl,["border-top"]);}rowEl.appendChild(cellEl);}});return rowEl;};Export.prototype.genereateGroupElement=function(row,setup,styles){var rowEl=document.createElement("tr"),cellEl=document.createElement("td"),group=row.columns[0];rowEl.classList.add("tabulator-print-table-row");if(setup.groupHeader&&setup.groupHeader[row.indent]){group.value=setup.groupHeader[row.indent](group.value,row.component._group.getRowCount(),row.component._group.getData(),row.component);}else {if(setup.groupHeader===false){group.value=group.value;}else {group.value=row.component._group.generator(group.value,row.component._group.getRowCount(),row.component._group.getData(),row.component);}}cellEl.colSpan=group.width;cellEl.innerHTML=group.value;rowEl.classList.add("tabulator-print-table-group");rowEl.classList.add("tabulator-group-level-"+row.indent);if(group.component.isVisible()){rowEl.classList.add("tabulator-group-visible");}this.mapElementStyles(styles.firstGroup,rowEl,["border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","background-color"]);this.mapElementStyles(styles.firstGroup,cellEl,["padding-top","padding-left","padding-right","padding-bottom"]);rowEl.appendChild(cellEl);return rowEl;};Export.prototype.genereateCalcElement=function(row,setup,styles){var rowEl=this.genereateRowElement(row,setup,styles);rowEl.classList.add("tabulator-print-table-calcs");this.mapElementStyles(styles.calcRow,rowEl,["border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size","background-color"]);return rowEl;};Export.prototype.genereateRowElement=function(row,setup,styles){var _this61=this;var rowEl=document.createElement("tr");rowEl.classList.add("tabulator-print-table-row");row.columns.forEach(function(col){if(col){var cellEl=document.createElement("td"),column=col.component._column,value=col.value;var cellWrapper={modules:{},getValue:function getValue(){return value;},getField:function getField(){return column.definition.field;},getElement:function getElement(){return cellEl;},getColumn:function getColumn(){return column.getComponent();},getData:function getData(){return row.component.getData();},getRow:function getRow(){return row.component;},getComponent:function getComponent(){return cellWrapper;},column:column};var classNames=column.definition.cssClass?column.definition.cssClass.split(" "):[];classNames.forEach(function(className){cellEl.classList.add(className);});if(_this61.table.modExists("format")&&_this61.config.formatCells!==false){value=_this61.table.modules.format.formatExportValue(cellWrapper,_this61.colVisProp);}else {switch(typeof value==='undefined'?'undefined':_typeof(value)){case"object":value=JSON.stringify(value);break;case"undefined":case"null":value="";break;default:value=value;}}if(value instanceof Node){cellEl.appendChild(value);}else {cellEl.innerHTML=value;}if(styles.firstCell){_this61.mapElementStyles(styles.firstCell,cellEl,["padding-top","padding-left","padding-right","padding-bottom","border-top","border-left","border-right","border-bottom","color","font-weight","font-family","font-size"]);if(column.definition.align){cellEl.style.textAlign=column.definition.align;}}if(_this61.table.options.dataTree&&_this61.config.dataTree!==false){if(setup.treeElementField&&setup.treeElementField==column.field||!setup.treeElementField&&i==0){if(row.component._row.modules.dataTree.controlEl){cellEl.insertBefore(row.component._row.modules.dataTree.controlEl.cloneNode(true),cellEl.firstChild);}if(row.component._row.modules.dataTree.branchEl){cellEl.insertBefore(row.component._row.modules.dataTree.branchEl.cloneNode(true),cellEl.firstChild);}}}rowEl.appendChild(cellEl);if(cellWrapper.modules.format&&cellWrapper.modules.format.renderedCallback){cellWrapper.modules.format.renderedCallback();}if(setup.rowFormatter&&_this61.config.formatCells!==false){setup.rowFormatter(row.component);}}});return rowEl;};Export.prototype.genereateHTMLTable=function(list){var holder=document.createElement("div");holder.appendChild(this.genereateTableElement(list));return holder.innerHTML;};Export.prototype.getHtml=function(visible,style,config,colVisProp){var list=this.generateExportList(config||this.table.options.htmlOutputConfig,style,visible,colVisProp||"htmlOutput");return this.genereateHTMLTable(list);};Export.prototype.mapElementStyles=function(from,to,props){if(this.cloneTableStyle&&from&&to){var lookup={"background-color":"backgroundColor","color":"fontColor","width":"width","font-weight":"fontWeight","font-family":"fontFamily","font-size":"fontSize","text-align":"textAlign","border-top":"borderTop","border-left":"borderLeft","border-right":"borderRight","border-bottom":"borderBottom","padding-top":"paddingTop","padding-left":"paddingLeft","padding-right":"paddingRight","padding-bottom":"paddingBottom"};if(window.getComputedStyle){var fromStyle=window.getComputedStyle(from);props.forEach(function(prop){to.style[lookup[prop]]=fromStyle.getPropertyValue(prop);});}}};Tabulator.prototype.registerModule("export",Export);var Filter=function Filter(table){this.table=table;//hold Tabulator object
  this.filterList=[];//hold filter list
  this.headerFilters={};//hold column filters
  this.headerFilterColumns=[];//hold columns that use header filters
  this.prevHeaderFilterChangeCheck="";this.prevHeaderFilterChangeCheck="{}";this.changed=false;//has filtering changed since last render
  };//initialize column header filter
  Filter.prototype.initializeColumn=function(column,value){var self=this,field=column.getField();//handle successfull value change
  function success(value){var filterType=column.modules.filter.tagType=="input"&&column.modules.filter.attrType=="text"||column.modules.filter.tagType=="textarea"?"partial":"match",type="",filterChangeCheck="",filterFunc;if(typeof column.modules.filter.prevSuccess==="undefined"||column.modules.filter.prevSuccess!==value){column.modules.filter.prevSuccess=value;if(!column.modules.filter.emptyFunc(value)){column.modules.filter.value=value;switch(_typeof(column.definition.headerFilterFunc)){case"string":if(self.filters[column.definition.headerFilterFunc]){type=column.definition.headerFilterFunc;filterFunc=function filterFunc(data){var params=column.definition.headerFilterFuncParams||{};var fieldVal=column.getFieldValue(data);params=typeof params==="function"?params(value,fieldVal,data):params;return self.filters[column.definition.headerFilterFunc](value,fieldVal,data,params);};}else {console.warn("Header Filter Error - Matching filter function not found: ",column.definition.headerFilterFunc);}break;case"function":filterFunc=function filterFunc(data){var params=column.definition.headerFilterFuncParams||{};var fieldVal=column.getFieldValue(data);params=typeof params==="function"?params(value,fieldVal,data):params;return column.definition.headerFilterFunc(value,fieldVal,data,params);};type=filterFunc;break;}if(!filterFunc){switch(filterType){case"partial":filterFunc=function filterFunc(data){var colVal=column.getFieldValue(data);if(typeof colVal!=='undefined'&&colVal!==null){return String(colVal).toLowerCase().indexOf(String(value).toLowerCase())>-1;}else {return false;}};type="like";break;default:filterFunc=function filterFunc(data){return column.getFieldValue(data)==value;};type="=";}}self.headerFilters[field]={value:value,func:filterFunc,type:type,params:{}};}else {delete self.headerFilters[field];}filterChangeCheck=JSON.stringify(self.headerFilters);if(self.prevHeaderFilterChangeCheck!==filterChangeCheck){self.prevHeaderFilterChangeCheck=filterChangeCheck;self.changed=true;self.table.rowManager.filterRefresh();}}return true;}column.modules.filter={success:success,attrType:false,tagType:false,emptyFunc:false};this.generateHeaderFilterElement(column);};Filter.prototype.generateHeaderFilterElement=function(column,initialValue,reinitialize){var _this62=this;var self=this,success=column.modules.filter.success,field=column.getField(),filterElement,editor,editorElement,cellWrapper,typingTimer,searchTrigger,params;//handle aborted edit
  function cancel(){}if(column.modules.filter.headerElement&&column.modules.filter.headerElement.parentNode){column.contentElement.removeChild(column.modules.filter.headerElement.parentNode);}if(field){//set empty value function
  column.modules.filter.emptyFunc=column.definition.headerFilterEmptyCheck||function(value){return !value&&value!=="0"&&value!==0;};filterElement=document.createElement("div");filterElement.classList.add("tabulator-header-filter");//set column editor
  switch(_typeof(column.definition.headerFilter)){case"string":if(self.table.modules.edit.editors[column.definition.headerFilter]){editor=self.table.modules.edit.editors[column.definition.headerFilter];if((column.definition.headerFilter==="tick"||column.definition.headerFilter==="tickCross")&&!column.definition.headerFilterEmptyCheck){column.modules.filter.emptyFunc=function(value){return value!==true&&value!==false;};}}else {console.warn("Filter Error - Cannot build header filter, No such editor found: ",column.definition.editor);}break;case"function":editor=column.definition.headerFilter;break;case"boolean":if(column.modules.edit&&column.modules.edit.editor){editor=column.modules.edit.editor;}else {if(column.definition.formatter&&self.table.modules.edit.editors[column.definition.formatter]){editor=self.table.modules.edit.editors[column.definition.formatter];if((column.definition.formatter==="tick"||column.definition.formatter==="tickCross")&&!column.definition.headerFilterEmptyCheck){column.modules.filter.emptyFunc=function(value){return value!==true&&value!==false;};}}else {editor=self.table.modules.edit.editors["input"];}}break;}if(editor){cellWrapper={getValue:function getValue(){return typeof initialValue!=="undefined"?initialValue:"";},getField:function getField(){return column.definition.field;},getElement:function getElement(){return filterElement;},getColumn:function getColumn(){return column.getComponent();},getRow:function getRow(){return {normalizeHeight:function normalizeHeight(){}};}};params=column.definition.headerFilterParams||{};params=typeof params==="function"?params.call(self.table):params;editorElement=editor.call(this.table.modules.edit,cellWrapper,function(){},success,cancel,params);if(!editorElement){console.warn("Filter Error - Cannot add filter to "+field+" column, editor returned a value of false");return;}if(!(editorElement instanceof Node)){console.warn("Filter Error - Cannot add filter to "+field+" column, editor should return an instance of Node, the editor returned:",editorElement);return;}//set Placeholder Text
  if(field){self.table.modules.localize.bind("headerFilters|columns|"+column.definition.field,function(value){editorElement.setAttribute("placeholder",typeof value!=="undefined"&&value?value:self.table.modules.localize.getText("headerFilters|default"));});}else {self.table.modules.localize.bind("headerFilters|default",function(value){editorElement.setAttribute("placeholder",typeof self.column.definition.headerFilterPlaceholder!=="undefined"&&self.column.definition.headerFilterPlaceholder?self.column.definition.headerFilterPlaceholder:value);});}//focus on element on click
  editorElement.addEventListener("click",function(e){e.stopPropagation();editorElement.focus();});editorElement.addEventListener("focus",function(e){var left=_this62.table.columnManager.element.scrollLeft;if(left!==_this62.table.rowManager.element.scrollLeft){_this62.table.rowManager.scrollHorizontal(left);_this62.table.columnManager.scrollHorizontal(left);}});//live update filters as user types
  typingTimer=false;searchTrigger=function searchTrigger(e){if(typingTimer){clearTimeout(typingTimer);}typingTimer=setTimeout(function(){success(editorElement.value);},self.table.options.headerFilterLiveFilterDelay);};column.modules.filter.headerElement=editorElement;column.modules.filter.attrType=editorElement.hasAttribute("type")?editorElement.getAttribute("type").toLowerCase():"";column.modules.filter.tagType=editorElement.tagName.toLowerCase();if(column.definition.headerFilterLiveFilter!==false){if(!(column.definition.headerFilter==='autocomplete'||column.definition.headerFilter==='tickCross'||(column.definition.editor==='autocomplete'||column.definition.editor==='tickCross')&&column.definition.headerFilter===true)){editorElement.addEventListener("keyup",searchTrigger);editorElement.addEventListener("search",searchTrigger);//update number filtered columns on change
  if(column.modules.filter.attrType=="number"){editorElement.addEventListener("change",function(e){success(editorElement.value);});}//change text inputs to search inputs to allow for clearing of field
  if(column.modules.filter.attrType=="text"&&this.table.browser!=="ie"){editorElement.setAttribute("type","search");// editorElement.off("change blur"); //prevent blur from triggering filter and preventing selection click
  }}//prevent input and select elements from propegating click to column sorters etc
  if(column.modules.filter.tagType=="input"||column.modules.filter.tagType=="select"||column.modules.filter.tagType=="textarea"){editorElement.addEventListener("mousedown",function(e){e.stopPropagation();});}}filterElement.appendChild(editorElement);column.contentElement.appendChild(filterElement);if(!reinitialize){self.headerFilterColumns.push(column);}}}else {console.warn("Filter Error - Cannot add header filter, column has no field set:",column.definition.title);}};//hide all header filter elements (used to ensure correct column widths in "fitData" layout mode)
  Filter.prototype.hideHeaderFilterElements=function(){this.headerFilterColumns.forEach(function(column){if(column.modules.filter&&column.modules.filter.headerElement){column.modules.filter.headerElement.style.display='none';}});};//show all header filter elements (used to ensure correct column widths in "fitData" layout mode)
  Filter.prototype.showHeaderFilterElements=function(){this.headerFilterColumns.forEach(function(column){if(column.modules.filter&&column.modules.filter.headerElement){column.modules.filter.headerElement.style.display='';}});};//programatically set focus of header filter
  Filter.prototype.setHeaderFilterFocus=function(column){if(column.modules.filter&&column.modules.filter.headerElement){column.modules.filter.headerElement.focus();}else {console.warn("Column Filter Focus Error - No header filter set on column:",column.getField());}};//programmatically get value of header filter
  Filter.prototype.getHeaderFilterValue=function(column){if(column.modules.filter&&column.modules.filter.headerElement){return column.modules.filter.headerElement.value;}else {console.warn("Column Filter Error - No header filter set on column:",column.getField());}};//programatically set value of header filter
  Filter.prototype.setHeaderFilterValue=function(column,value){if(column){if(column.modules.filter&&column.modules.filter.headerElement){this.generateHeaderFilterElement(column,value,true);column.modules.filter.success(value);}else {console.warn("Column Filter Error - No header filter set on column:",column.getField());}}};Filter.prototype.reloadHeaderFilter=function(column){if(column){if(column.modules.filter&&column.modules.filter.headerElement){this.generateHeaderFilterElement(column,column.modules.filter.value,true);}else {console.warn("Column Filter Error - No header filter set on column:",column.getField());}}};//check if the filters has changed since last use
  Filter.prototype.hasChanged=function(){var changed=this.changed;this.changed=false;return changed;};//set standard filters
  Filter.prototype.setFilter=function(field,type,value,params){var self=this;self.filterList=[];if(!Array.isArray(field)){field=[{field:field,type:type,value:value,params:params}];}self.addFilter(field);};//add filter to array
  Filter.prototype.addFilter=function(field,type,value,params){var self=this;if(!Array.isArray(field)){field=[{field:field,type:type,value:value,params:params}];}field.forEach(function(filter){filter=self.findFilter(filter);if(filter){self.filterList.push(filter);self.changed=true;}});if(this.table.options.persistence&&this.table.modExists("persistence",true)&&this.table.modules.persistence.config.filter){this.table.modules.persistence.save("filter");}};Filter.prototype.findFilter=function(filter){var self=this,column;if(Array.isArray(filter)){return this.findSubFilters(filter);}var filterFunc=false;if(typeof filter.field=="function"){filterFunc=function filterFunc(data){return filter.field(data,filter.type||{});// pass params to custom filter function
  };}else {if(self.filters[filter.type]){column=self.table.columnManager.getColumnByField(filter.field);if(column){filterFunc=function filterFunc(data){return self.filters[filter.type](filter.value,column.getFieldValue(data),data,filter.params||{});};}else {filterFunc=function filterFunc(data){return self.filters[filter.type](filter.value,data[filter.field],data,filter.params||{});};}}else {console.warn("Filter Error - No such filter type found, ignoring: ",filter.type);}}filter.func=filterFunc;return filter.func?filter:false;};Filter.prototype.findSubFilters=function(filters){var self=this,output=[];filters.forEach(function(filter){filter=self.findFilter(filter);if(filter){output.push(filter);}});return output.length?output:false;};//get all filters
  Filter.prototype.getFilters=function(all,ajax){var output=[];if(all){output=this.getHeaderFilters();}if(ajax){output.forEach(function(item){if(typeof item.type=="function"){item.type="function";}});}output=output.concat(this.filtersToArray(this.filterList,ajax));return output;};//filter to Object
  Filter.prototype.filtersToArray=function(filterList,ajax){var _this63=this;var output=[];filterList.forEach(function(filter){var item;if(Array.isArray(filter)){output.push(_this63.filtersToArray(filter,ajax));}else {item={field:filter.field,type:filter.type,value:filter.value};if(ajax){if(typeof item.type=="function"){item.type="function";}}output.push(item);}});return output;};//get all filters
  Filter.prototype.getHeaderFilters=function(){var output=[];for(var key in this.headerFilters){output.push({field:key,type:this.headerFilters[key].type,value:this.headerFilters[key].value});}return output;};//remove filter from array
  Filter.prototype.removeFilter=function(field,type,value){var self=this;if(!Array.isArray(field)){field=[{field:field,type:type,value:value}];}field.forEach(function(filter){var index=-1;if(_typeof(filter.field)=="object"){index=self.filterList.findIndex(function(element){return filter===element;});}else {index=self.filterList.findIndex(function(element){return filter.field===element.field&&filter.type===element.type&&filter.value===element.value;});}if(index>-1){self.filterList.splice(index,1);self.changed=true;}else {console.warn("Filter Error - No matching filter type found, ignoring: ",filter.type);}});if(this.table.options.persistence&&this.table.modExists("persistence",true)&&this.table.modules.persistence.config.filter){this.table.modules.persistence.save("filter");}};//clear filters
  Filter.prototype.clearFilter=function(all){this.filterList=[];if(all){this.clearHeaderFilter();}this.changed=true;if(this.table.options.persistence&&this.table.modExists("persistence",true)&&this.table.modules.persistence.config.filter){this.table.modules.persistence.save("filter");}};//clear header filters
  Filter.prototype.clearHeaderFilter=function(){var self=this;this.headerFilters={};self.prevHeaderFilterChangeCheck="{}";this.headerFilterColumns.forEach(function(column){if(typeof column.modules.filter.value!=="undefined"){delete column.modules.filter.value;}column.modules.filter.prevSuccess=undefined;self.reloadHeaderFilter(column);});this.changed=true;};//search data and return matching rows
  Filter.prototype.search=function(searchType,field,type,value){var self=this,activeRows=[],filterList=[];if(!Array.isArray(field)){field=[{field:field,type:type,value:value}];}field.forEach(function(filter){filter=self.findFilter(filter);if(filter){filterList.push(filter);}});this.table.rowManager.rows.forEach(function(row){var match=true;filterList.forEach(function(filter){if(!self.filterRecurse(filter,row.getData())){match=false;}});if(match){activeRows.push(searchType==="data"?row.getData("data"):row.getComponent());}});return activeRows;};//filter row array
  Filter.prototype.filter=function(rowList,filters){var self=this,activeRows=[],activeRowComponents=[];if(self.table.options.dataFiltering){self.table.options.dataFiltering.call(self.table,self.getFilters());}if(!self.table.options.ajaxFiltering&&(self.filterList.length||Object.keys(self.headerFilters).length)){rowList.forEach(function(row){if(self.filterRow(row)){activeRows.push(row);}});}else {activeRows=rowList.slice(0);}if(self.table.options.dataFiltered){activeRows.forEach(function(row){activeRowComponents.push(row.getComponent());});self.table.options.dataFiltered.call(self.table,self.getFilters(),activeRowComponents);}return activeRows;};//filter individual row
  Filter.prototype.filterRow=function(row,filters){var self=this,match=true,data=row.getData();self.filterList.forEach(function(filter){if(!self.filterRecurse(filter,data)){match=false;}});for(var field in self.headerFilters){if(!self.headerFilters[field].func(data)){match=false;}}return match;};Filter.prototype.filterRecurse=function(filter,data){var self=this,match=false;if(Array.isArray(filter)){filter.forEach(function(subFilter){if(self.filterRecurse(subFilter,data)){match=true;}});}else {match=filter.func(data);}return match;};//list of available filters
  Filter.prototype.filters={//equal to
  "=":function _(filterVal,rowVal,rowData,filterParams){return rowVal==filterVal?true:false;},//less than
  "<":function _(filterVal,rowVal,rowData,filterParams){return rowVal<filterVal?true:false;},//less than or equal to
  "<=":function _(filterVal,rowVal,rowData,filterParams){return rowVal<=filterVal?true:false;},//greater than
  ">":function _(filterVal,rowVal,rowData,filterParams){return rowVal>filterVal?true:false;},//greater than or equal to
  ">=":function _(filterVal,rowVal,rowData,filterParams){return rowVal>=filterVal?true:false;},//not equal to
  "!=":function _(filterVal,rowVal,rowData,filterParams){return rowVal!=filterVal?true:false;},"regex":function regex(filterVal,rowVal,rowData,filterParams){if(typeof filterVal=="string"){filterVal=new RegExp(filterVal);}return filterVal.test(rowVal);},//contains the string
  "like":function like(filterVal,rowVal,rowData,filterParams){if(filterVal===null||typeof filterVal==="undefined"){return rowVal===filterVal?true:false;}else {if(typeof rowVal!=='undefined'&&rowVal!==null){return String(rowVal).toLowerCase().indexOf(filterVal.toLowerCase())>-1;}else {return false;}}},//contains the keywords
  "keywords":function keywords(filterVal,rowVal,rowData,filterParams){var keywords=filterVal.toLowerCase().split(typeof filterParams.separator==="undefined"?" ":filterParams.separator),value=String(rowVal===null||typeof rowVal==="undefined"?"":rowVal).toLowerCase(),matches=[];keywords.forEach(function(keyword){if(value.includes(keyword)){matches.push(true);}});return filterParams.matchAll?matches.length===keywords.length:!!matches.length;},//starts with the string
  "starts":function starts(filterVal,rowVal,rowData,filterParams){if(filterVal===null||typeof filterVal==="undefined"){return rowVal===filterVal?true:false;}else {if(typeof rowVal!=='undefined'&&rowVal!==null){return String(rowVal).toLowerCase().startsWith(filterVal.toLowerCase());}else {return false;}}},//ends with the string
  "ends":function ends(filterVal,rowVal,rowData,filterParams){if(filterVal===null||typeof filterVal==="undefined"){return rowVal===filterVal?true:false;}else {if(typeof rowVal!=='undefined'&&rowVal!==null){return String(rowVal).toLowerCase().endsWith(filterVal.toLowerCase());}else {return false;}}},//in array
  "in":function _in(filterVal,rowVal,rowData,filterParams){if(Array.isArray(filterVal)){return filterVal.length?filterVal.indexOf(rowVal)>-1:true;}else {console.warn("Filter Error - filter value is not an array:",filterVal);return false;}}};Tabulator.prototype.registerModule("filter",Filter);var Format=function Format(table){this.table=table;//hold Tabulator object
  };//initialize column formatter
  Format.prototype.initializeColumn=function(column){column.modules.format=this.lookupFormatter(column,"");if(typeof column.definition.formatterPrint!=="undefined"){column.modules.format.print=this.lookupFormatter(column,"Print");}if(typeof column.definition.formatterClipboard!=="undefined"){column.modules.format.clipboard=this.lookupFormatter(column,"Clipboard");}if(typeof column.definition.formatterHtmlOutput!=="undefined"){column.modules.format.htmlOutput=this.lookupFormatter(column,"HtmlOutput");}};Format.prototype.lookupFormatter=function(column,type){var config={params:column.definition["formatter"+type+"Params"]||{}},formatter=column.definition["formatter"+type];//set column formatter
  switch(typeof formatter==='undefined'?'undefined':_typeof(formatter)){case"string":if(formatter==="tick"){formatter="tickCross";if(typeof config.params.crossElement=="undefined"){config.params.crossElement=false;}console.warn("DEPRECATION WARNING - the tick formatter has been deprecated, please use the tickCross formatter with the crossElement param set to false");}if(this.formatters[formatter]){config.formatter=this.formatters[formatter];}else {console.warn("Formatter Error - No such formatter found: ",formatter);config.formatter=this.formatters.plaintext;}break;case"function":config.formatter=formatter;break;default:config.formatter=this.formatters.plaintext;break;}return config;};Format.prototype.cellRendered=function(cell){if(cell.modules.format&&cell.modules.format.renderedCallback&&!cell.modules.format.rendered){cell.modules.format.renderedCallback();cell.modules.format.rendered=true;}};//return a formatted value for a cell
  Format.prototype.formatValue=function(cell){var component=cell.getComponent(),params=typeof cell.column.modules.format.params==="function"?cell.column.modules.format.params(component):cell.column.modules.format.params;function onRendered(callback){if(!cell.modules.format){cell.modules.format={};}cell.modules.format.renderedCallback=callback;cell.modules.format.rendered=false;}return cell.column.modules.format.formatter.call(this,component,params,onRendered);};Format.prototype.formatExportValue=function(cell,type){var formatter=cell.column.modules.format[type],params;if(formatter){var onRendered=function onRendered(callback){if(!cell.modules.format){cell.modules.format={};}cell.modules.format.renderedCallback=callback;cell.modules.format.rendered=false;};params=typeof formatter.params==="function"?formatter.params(component):formatter.params;return formatter.formatter.call(this,cell.getComponent(),params,onRendered);}else {return this.formatValue(cell);}};Format.prototype.sanitizeHTML=function(value){if(value){var entityMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'};return String(value).replace(/[&<>"'`=\/]/g,function(s){return entityMap[s];});}else {return value;}};Format.prototype.emptyToSpace=function(value){return value===null||typeof value==="undefined"||value===""?"&nbsp;":value;};//get formatter for cell
  Format.prototype.getFormatter=function(formatter){var formatter;switch(typeof formatter==='undefined'?'undefined':_typeof(formatter)){case"string":if(this.formatters[formatter]){formatter=this.formatters[formatter];}else {console.warn("Formatter Error - No such formatter found: ",formatter);formatter=this.formatters.plaintext;}break;case"function":formatter=formatter;break;default:formatter=this.formatters.plaintext;break;}return formatter;};//default data formatters
  Format.prototype.formatters={//plain text value
  plaintext:function plaintext(cell,formatterParams,onRendered){return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));},//html text value
  html:function html(cell,formatterParams,onRendered){return cell.getValue();},//multiline text area
  textarea:function textarea(cell,formatterParams,onRendered){cell.getElement().style.whiteSpace="pre-wrap";return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));},//currency formatting
  money:function money(cell,formatterParams,onRendered){var floatVal=parseFloat(cell.getValue()),number,integer,decimal,rgx;var decimalSym=formatterParams.decimal||".";var thousandSym=formatterParams.thousand||",";var symbol=formatterParams.symbol||"";var after=!!formatterParams.symbolAfter;var precision=typeof formatterParams.precision!=="undefined"?formatterParams.precision:2;if(isNaN(floatVal)){return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));}number=precision!==false?floatVal.toFixed(precision):floatVal;number=String(number).split(".");integer=number[0];decimal=number.length>1?decimalSym+number[1]:"";rgx=/(\d+)(\d{3})/;while(rgx.test(integer)){integer=integer.replace(rgx,"$1"+thousandSym+"$2");}return after?integer+decimal+symbol:symbol+integer+decimal;},//clickable anchor tag
  link:function link(cell,formatterParams,onRendered){var value=cell.getValue(),urlPrefix=formatterParams.urlPrefix||"",download=formatterParams.download,label=value,el=document.createElement("a"),data;if(formatterParams.labelField){data=cell.getData();label=data[formatterParams.labelField];}if(formatterParams.label){switch(_typeof(formatterParams.label)){case"string":label=formatterParams.label;break;case"function":label=formatterParams.label(cell);break;}}if(label){if(formatterParams.urlField){data=cell.getData();value=data[formatterParams.urlField];}if(formatterParams.url){switch(_typeof(formatterParams.url)){case"string":value=formatterParams.url;break;case"function":value=formatterParams.url(cell);break;}}el.setAttribute("href",urlPrefix+value);if(formatterParams.target){el.setAttribute("target",formatterParams.target);}if(formatterParams.download){if(typeof download=="function"){download=download(cell);}else {download=download===true?"":download;}el.setAttribute("download",download);}el.innerHTML=this.emptyToSpace(this.sanitizeHTML(label));return el;}else {return "&nbsp;";}},//image element
  image:function image(cell,formatterParams,onRendered){var el=document.createElement("img"),src=cell.getValue();if(formatterParams.urlPrefix){src=formatterParams.urlPrefix+cell.getValue();}if(formatterParams.urlSuffix){src=src+formatterParams.urlSuffix;}el.setAttribute("src",src);switch(_typeof(formatterParams.height)){case"number":el.style.height=formatterParams.height+"px";break;case"string":el.style.height=formatterParams.height;break;}switch(_typeof(formatterParams.width)){case"number":el.style.width=formatterParams.width+"px";break;case"string":el.style.width=formatterParams.width;break;}el.addEventListener("load",function(){cell.getRow().normalizeHeight();});return el;},//tick or cross
  tickCross:function tickCross(cell,formatterParams,onRendered){var value=cell.getValue(),element=cell.getElement(),empty=formatterParams.allowEmpty,truthy=formatterParams.allowTruthy,tick=typeof formatterParams.tickElement!=="undefined"?formatterParams.tickElement:'<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>',cross=typeof formatterParams.crossElement!=="undefined"?formatterParams.crossElement:'<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';if(truthy&&value||value===true||value==="true"||value==="True"||value===1||value==="1"){element.setAttribute("aria-checked",true);return tick||"";}else {if(empty&&(value==="null"||value===""||value===null||typeof value==="undefined")){element.setAttribute("aria-checked","mixed");return "";}else {element.setAttribute("aria-checked",false);return cross||"";}}},datetime:function datetime(cell,formatterParams,onRendered){var inputFormat=formatterParams.inputFormat||"YYYY-MM-DD hh:mm:ss";var outputFormat=formatterParams.outputFormat||"DD/MM/YYYY hh:mm:ss";var invalid=typeof formatterParams.invalidPlaceholder!=="undefined"?formatterParams.invalidPlaceholder:"";var value=cell.getValue();var newDatetime=moment(value,inputFormat);if(newDatetime.isValid()){return formatterParams.timezone?newDatetime.tz(formatterParams.timezone).format(outputFormat):newDatetime.format(outputFormat);}else {if(invalid===true){return value;}else if(typeof invalid==="function"){return invalid(value);}else {return invalid;}}},datetimediff:function datetime(cell,formatterParams,onRendered){var inputFormat=formatterParams.inputFormat||"YYYY-MM-DD hh:mm:ss";var invalid=typeof formatterParams.invalidPlaceholder!=="undefined"?formatterParams.invalidPlaceholder:"";var suffix=typeof formatterParams.suffix!=="undefined"?formatterParams.suffix:false;var unit=typeof formatterParams.unit!=="undefined"?formatterParams.unit:undefined;var humanize=typeof formatterParams.humanize!=="undefined"?formatterParams.humanize:false;var date=typeof formatterParams.date!=="undefined"?formatterParams.date:moment();var value=cell.getValue();var newDatetime=moment(value,inputFormat);if(newDatetime.isValid()){if(humanize){return moment.duration(newDatetime.diff(date)).humanize(suffix);}else {return newDatetime.diff(date,unit)+(suffix?" "+suffix:"");}}else {if(invalid===true){return value;}else if(typeof invalid==="function"){return invalid(value);}else {return invalid;}}},//select
  lookup:function lookup(cell,formatterParams,onRendered){var value=cell.getValue();if(typeof formatterParams[value]==="undefined"){console.warn('Missing display value for '+value);return value;}return formatterParams[value];},//star rating
  star:function star(cell,formatterParams,onRendered){var value=cell.getValue(),element=cell.getElement(),maxStars=formatterParams&&formatterParams.stars?formatterParams.stars:5,stars=document.createElement("span"),star=document.createElementNS('http://www.w3.org/2000/svg',"svg"),starActive='<polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>',starInactive='<polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';//style stars holder
  stars.style.verticalAlign="middle";//style star
  star.setAttribute("width","14");star.setAttribute("height","14");star.setAttribute("viewBox","0 0 512 512");star.setAttribute("xml:space","preserve");star.style.padding="0 1px";value=value&&!isNaN(value)?parseInt(value):0;value=Math.max(0,Math.min(value,maxStars));for(var i=1;i<=maxStars;i++){var nextStar=star.cloneNode(true);nextStar.innerHTML=i<=value?starActive:starInactive;stars.appendChild(nextStar);}element.style.whiteSpace="nowrap";element.style.overflow="hidden";element.style.textOverflow="ellipsis";element.setAttribute("aria-label",value);return stars;},traffic:function traffic(cell,formatterParams,onRendered){var value=this.sanitizeHTML(cell.getValue())||0,el=document.createElement("span"),max=formatterParams&&formatterParams.max?formatterParams.max:100,min=formatterParams&&formatterParams.min?formatterParams.min:0,colors=formatterParams&&typeof formatterParams.color!=="undefined"?formatterParams.color:["red","orange","green"],color="#666666",percent,percentValue;if(isNaN(value)||typeof cell.getValue()==="undefined"){return;}el.classList.add("tabulator-traffic-light");//make sure value is in range
  percentValue=parseFloat(value)<=max?parseFloat(value):max;percentValue=parseFloat(percentValue)>=min?parseFloat(percentValue):min;//workout percentage
  percent=(max-min)/100;percentValue=Math.round((percentValue-min)/percent);//set color
  switch(typeof colors==='undefined'?'undefined':_typeof(colors)){case"string":color=colors;break;case"function":color=colors(value);break;case"object":if(Array.isArray(colors)){var unit=100/colors.length;var index=Math.floor(percentValue/unit);index=Math.min(index,colors.length-1);index=Math.max(index,0);color=colors[index];break;}}el.style.backgroundColor=color;return el;},//progress bar
  progress:function progress(cell,formatterParams,onRendered){//progress bar
  var value=this.sanitizeHTML(cell.getValue())||0,element=cell.getElement(),max=formatterParams&&formatterParams.max?formatterParams.max:100,min=formatterParams&&formatterParams.min?formatterParams.min:0,legendAlign=formatterParams&&formatterParams.legendAlign?formatterParams.legendAlign:"center",percent,percentValue,color,legend,legendColor;//make sure value is in range
  percentValue=parseFloat(value)<=max?parseFloat(value):max;percentValue=parseFloat(percentValue)>=min?parseFloat(percentValue):min;//workout percentage
  percent=(max-min)/100;percentValue=Math.round((percentValue-min)/percent);//set bar color
  switch(_typeof(formatterParams.color)){case"string":color=formatterParams.color;break;case"function":color=formatterParams.color(value);break;case"object":if(Array.isArray(formatterParams.color)){var unit=100/formatterParams.color.length;var index=Math.floor(percentValue/unit);index=Math.min(index,formatterParams.color.length-1);index=Math.max(index,0);color=formatterParams.color[index];break;}default:color="#2DC214";}//generate legend
  switch(_typeof(formatterParams.legend)){case"string":legend=formatterParams.legend;break;case"function":legend=formatterParams.legend(value);break;case"boolean":legend=value;break;default:legend=false;}//set legend color
  switch(_typeof(formatterParams.legendColor)){case"string":legendColor=formatterParams.legendColor;break;case"function":legendColor=formatterParams.legendColor(value);break;case"object":if(Array.isArray(formatterParams.legendColor)){var unit=100/formatterParams.legendColor.length;var index=Math.floor(percentValue/unit);index=Math.min(index,formatterParams.legendColor.length-1);index=Math.max(index,0);legendColor=formatterParams.legendColor[index];}break;default:legendColor="#000";}element.style.minWidth="30px";element.style.position="relative";element.setAttribute("aria-label",percentValue);var barEl=document.createElement("div");barEl.style.display="inline-block";barEl.style.position="relative";barEl.style.width=percentValue+"%";barEl.style.backgroundColor=color;barEl.style.height="100%";barEl.setAttribute('data-max',max);barEl.setAttribute('data-min',min);if(legend){var legendEl=document.createElement("div");legendEl.style.position="absolute";legendEl.style.top="4px";legendEl.style.left=0;legendEl.style.textAlign=legendAlign;legendEl.style.width="100%";legendEl.style.color=legendColor;legendEl.innerHTML=legend;}onRendered(function(){//handle custom element needed if formatter is to be included in printed/downloaded output
  if(!(cell instanceof CellComponent)){var holderEl=document.createElement("div");holderEl.style.position="absolute";holderEl.style.top="4px";holderEl.style.bottom="4px";holderEl.style.left="4px";holderEl.style.right="4px";element.appendChild(holderEl);element=holderEl;}element.appendChild(barEl);if(legend){element.appendChild(legendEl);}});return "";},//background color
  color:function color(cell,formatterParams,onRendered){cell.getElement().style.backgroundColor=this.sanitizeHTML(cell.getValue());return "";},//tick icon
  buttonTick:function buttonTick(cell,formatterParams,onRendered){return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>';},//cross icon
  buttonCross:function buttonCross(cell,formatterParams,onRendered){return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';},//current row number
  rownum:function rownum(cell,formatterParams,onRendered){return this.table.rowManager.activeRows.indexOf(cell.getRow()._getSelf())+1;},//row handle
  handle:function handle(cell,formatterParams,onRendered){cell.getElement().classList.add("tabulator-row-handle");return "<div class='tabulator-row-handle-box'><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div></div>";},responsiveCollapse:function responsiveCollapse(cell,formatterParams,onRendered){var el=document.createElement("div"),config=cell.getRow()._row.modules.responsiveLayout;el.classList.add("tabulator-responsive-collapse-toggle");el.innerHTML="<span class='tabulator-responsive-collapse-toggle-open'>+</span><span class='tabulator-responsive-collapse-toggle-close'>-</span>";cell.getElement().classList.add("tabulator-row-handle");function toggleList(isOpen){var collapseEl=config.element;config.open=isOpen;if(collapseEl){if(config.open){el.classList.add("open");collapseEl.style.display='';}else {el.classList.remove("open");collapseEl.style.display='none';}}}el.addEventListener("click",function(e){e.stopImmediatePropagation();toggleList(!config.open);});toggleList(config.open);return el;},rowSelection:function rowSelection(cell,formatterParams,onRendered){var _this64=this;var checkbox=document.createElement("input");checkbox.type='checkbox';if(this.table.modExists("selectRow",true)){checkbox.addEventListener("click",function(e){e.stopPropagation();});if(typeof cell.getRow=='function'){var row=cell.getRow();if(row instanceof RowComponent){checkbox.addEventListener("change",function(e){row.toggleSelect();});checkbox.checked=row.isSelected&&row.isSelected();this.table.modules.selectRow.registerRowSelectCheckbox(row,checkbox);}else {checkbox="";}}else {checkbox.addEventListener("change",function(e){if(_this64.table.modules.selectRow.selectedRows.length){_this64.table.deselectRow();}else {_this64.table.selectRow(formatterParams.rowRange);}});this.table.modules.selectRow.registerHeaderSelectCheckbox(checkbox);}}return checkbox;}};Tabulator.prototype.registerModule("format",Format);var FrozenColumns=function FrozenColumns(table){this.table=table;//hold Tabulator object
  this.leftColumns=[];this.rightColumns=[];this.leftMargin=0;this.rightMargin=0;this.rightPadding=0;this.initializationMode="left";this.active=false;this.scrollEndTimer=false;};//reset initial state
  FrozenColumns.prototype.reset=function(){this.initializationMode="left";this.leftColumns=[];this.rightColumns=[];this.leftMargin=0;this.rightMargin=0;this.rightMargin=0;this.active=false;this.table.columnManager.headersElement.style.marginLeft=0;this.table.columnManager.element.style.paddingRight=0;};//initialize specific column
  FrozenColumns.prototype.initializeColumn=function(column){var config={margin:0,edge:false};if(!column.isGroup){if(this.frozenCheck(column)){config.position=this.initializationMode;if(this.initializationMode=="left"){this.leftColumns.push(column);}else {this.rightColumns.unshift(column);}this.active=true;column.modules.frozen=config;}else {this.initializationMode="right";}}};FrozenColumns.prototype.frozenCheck=function(column){if(column.parent.isGroup&&column.definition.frozen){console.warn("Frozen Column Error - Parent column group must be frozen, not individual columns or sub column groups");}if(column.parent.isGroup){return this.frozenCheck(column.parent);}else {return column.definition.frozen;}};//quick layout to smooth horizontal scrolling
  FrozenColumns.prototype.scrollHorizontal=function(){var _this65=this;var rows;if(this.active){clearTimeout(this.scrollEndTimer);//layout all rows after scroll is complete
  this.scrollEndTimer=setTimeout(function(){_this65.layout();},100);rows=this.table.rowManager.getVisibleRows();this.calcMargins();this.layoutColumnPosition();this.layoutCalcRows();rows.forEach(function(row){if(row.type==="row"){_this65.layoutRow(row);}});this.table.rowManager.tableElement.style.marginRight=this.rightMargin;}};//calculate margins for rows
  FrozenColumns.prototype.calcMargins=function(){this.leftMargin=this._calcSpace(this.leftColumns,this.leftColumns.length)+"px";this.table.columnManager.headersElement.style.marginLeft=this.leftMargin;this.rightMargin=this._calcSpace(this.rightColumns,this.rightColumns.length)+"px";this.table.columnManager.element.style.paddingRight=this.rightMargin;//calculate right frozen columns
  this.rightPadding=this.table.rowManager.element.clientWidth+this.table.columnManager.scrollLeft;};//layout calculation rows
  FrozenColumns.prototype.layoutCalcRows=function(){if(this.table.modExists("columnCalcs")){if(this.table.modules.columnCalcs.topInitialized&&this.table.modules.columnCalcs.topRow){this.layoutRow(this.table.modules.columnCalcs.topRow);}if(this.table.modules.columnCalcs.botInitialized&&this.table.modules.columnCalcs.botRow){this.layoutRow(this.table.modules.columnCalcs.botRow);}}};//calculate column positions and layout headers
  FrozenColumns.prototype.layoutColumnPosition=function(allCells){var _this66=this;var leftParents=[];this.leftColumns.forEach(function(column,i){column.modules.frozen.margin=_this66._calcSpace(_this66.leftColumns,i)+_this66.table.columnManager.scrollLeft+"px";if(i==_this66.leftColumns.length-1){column.modules.frozen.edge=true;}else {column.modules.frozen.edge=false;}if(column.parent.isGroup){var parentEl=_this66.getColGroupParentElement(column);if(!leftParents.includes(parentEl)){_this66.layoutElement(parentEl,column);leftParents.push(parentEl);}if(column.modules.frozen.edge){parentEl.classList.add("tabulator-frozen-"+column.modules.frozen.position);}}else {_this66.layoutElement(column.getElement(),column);}if(allCells){column.cells.forEach(function(cell){_this66.layoutElement(cell.getElement(true),column);});}});this.rightColumns.forEach(function(column,i){column.modules.frozen.margin=_this66.rightPadding-_this66._calcSpace(_this66.rightColumns,i+1)+"px";if(i==_this66.rightColumns.length-1){column.modules.frozen.edge=true;}else {column.modules.frozen.edge=false;}if(column.parent.isGroup){_this66.layoutElement(_this66.getColGroupParentElement(column),column);}else {_this66.layoutElement(column.getElement(),column);}if(allCells){column.cells.forEach(function(cell){_this66.layoutElement(cell.getElement(true),column);});}});};FrozenColumns.prototype.getColGroupParentElement=function(column){return column.parent.isGroup?this.getColGroupParentElement(column.parent):column.getElement();};//layout columns appropropriatly
  FrozenColumns.prototype.layout=function(){var self=this;if(self.active){//calculate row padding
  this.calcMargins();// self.table.rowManager.activeRows.forEach(function(row){
  // 	self.layoutRow(row);
  // });
  // if(self.table.options.dataTree){
  self.table.rowManager.getDisplayRows().forEach(function(row){if(row.type==="row"){self.layoutRow(row);}});// }
  this.layoutCalcRows();//calculate left columns
  this.layoutColumnPosition(true);// if(tableHolder.scrollHeight > tableHolder.clientHeight){
  // 	rightMargin -= tableHolder.offsetWidth - tableHolder.clientWidth;
  // }
  this.table.rowManager.tableElement.style.marginRight=this.rightMargin;}};FrozenColumns.prototype.layoutRow=function(row){var _this67=this;var rowEl=row.getElement();rowEl.style.paddingLeft=this.leftMargin;// rowEl.style.paddingRight = this.rightMargin + "px";
  this.leftColumns.forEach(function(column){var cell=row.getCell(column);if(cell){_this67.layoutElement(cell.getElement(true),column);}});this.rightColumns.forEach(function(column){var cell=row.getCell(column);if(cell){_this67.layoutElement(cell.getElement(true),column);}});};FrozenColumns.prototype.layoutElement=function(element,column){if(column.modules.frozen){element.style.position="absolute";element.style.left=column.modules.frozen.margin;element.classList.add("tabulator-frozen");if(column.modules.frozen.edge){element.classList.add("tabulator-frozen-"+column.modules.frozen.position);}}};FrozenColumns.prototype._calcSpace=function(columns,index){var width=0;for(var _i12=0;_i12<index;_i12++){if(columns[_i12].visible){width+=columns[_i12].getWidth();}}return width;};Tabulator.prototype.registerModule("frozenColumns",FrozenColumns);var FrozenRows=function FrozenRows(table){this.table=table;//hold Tabulator object
  this.topElement=document.createElement("div");this.rows=[];this.displayIndex=0;//index in display pipeline
  };FrozenRows.prototype.initialize=function(){this.rows=[];this.topElement.classList.add("tabulator-frozen-rows-holder");// this.table.columnManager.element.append(this.topElement);
  this.table.columnManager.getElement().insertBefore(this.topElement,this.table.columnManager.headersElement.nextSibling);};FrozenRows.prototype.setDisplayIndex=function(index){this.displayIndex=index;};FrozenRows.prototype.getDisplayIndex=function(){return this.displayIndex;};FrozenRows.prototype.isFrozen=function(){return !!this.rows.length;};//filter frozen rows out of display data
  FrozenRows.prototype.getRows=function(rows){var output=rows.slice(0);this.rows.forEach(function(row){var index=output.indexOf(row);if(index>-1){output.splice(index,1);}});return output;};FrozenRows.prototype.freezeRow=function(row){if(!row.modules.frozen){row.modules.frozen=true;this.topElement.appendChild(row.getElement());row.initialize();row.normalizeHeight();this.table.rowManager.adjustTableSize();this.rows.push(row);this.table.rowManager.refreshActiveData("display");this.styleRows();}else {console.warn("Freeze Error - Row is already frozen");}};FrozenRows.prototype.unfreezeRow=function(row){this.rows.indexOf(row);if(row.modules.frozen){row.modules.frozen=false;this.detachRow(row);this.table.rowManager.adjustTableSize();this.table.rowManager.refreshActiveData("display");if(this.rows.length){this.styleRows();}}else {console.warn("Freeze Error - Row is already unfrozen");}};FrozenRows.prototype.detachRow=function(row){var index=this.rows.indexOf(row);if(index>-1){var rowEl=row.getElement();rowEl.parentNode.removeChild(rowEl);this.rows.splice(index,1);}};FrozenRows.prototype.styleRows=function(row){var self=this;this.rows.forEach(function(row,i){self.table.rowManager.styleRow(row,i);});};Tabulator.prototype.registerModule("frozenRows",FrozenRows);//public group object
  var GroupComponent=function GroupComponent(group){this._group=group;this.type="GroupComponent";};GroupComponent.prototype.getKey=function(){return this._group.key;};GroupComponent.prototype.getField=function(){return this._group.field;};GroupComponent.prototype.getElement=function(){return this._group.element;};GroupComponent.prototype.getRows=function(){return this._group.getRows(true);};GroupComponent.prototype.getSubGroups=function(){return this._group.getSubGroups(true);};GroupComponent.prototype.getParentGroup=function(){return this._group.parent?this._group.parent.getComponent():false;};GroupComponent.prototype.getVisibility=function(){console.warn("getVisibility function is deprecated, you should now use the isVisible function");return this._group.visible;};GroupComponent.prototype.isVisible=function(){return this._group.visible;};GroupComponent.prototype.show=function(){this._group.show();};GroupComponent.prototype.hide=function(){this._group.hide();};GroupComponent.prototype.toggle=function(){this._group.toggleVisibility();};GroupComponent.prototype._getSelf=function(){return this._group;};GroupComponent.prototype.getTable=function(){return this._group.groupManager.table;};//////////////////////////////////////////////////
  //////////////// Group Functions /////////////////
  //////////////////////////////////////////////////
  var Group=function Group(groupManager,parent,level,key,field,generator,oldGroup){this.groupManager=groupManager;this.parent=parent;this.key=key;this.level=level;this.field=field;this.hasSubGroups=level<groupManager.groupIDLookups.length-1;this.addRow=this.hasSubGroups?this._addRowToGroup:this._addRow;this.type="group";//type of element
  this.old=oldGroup;this.rows=[];this.groups=[];this.groupList=[];this.generator=generator;this.elementContents=false;this.height=0;this.outerHeight=0;this.initialized=false;this.calcs={};this.initialized=false;this.modules={};this.arrowElement=false;this.visible=oldGroup?oldGroup.visible:typeof groupManager.startOpen[level]!=="undefined"?groupManager.startOpen[level]:groupManager.startOpen[0];this.component=null;this.createElements();this.addBindings();this.createValueGroups();};Group.prototype.wipe=function(){if(this.groupList.length){this.groupList.forEach(function(group){group.wipe();});}else {this.element=false;this.arrowElement=false;this.elementContents=false;}};Group.prototype.createElements=function(){var arrow=document.createElement("div");arrow.classList.add("tabulator-arrow");this.element=document.createElement("div");this.element.classList.add("tabulator-row");this.element.classList.add("tabulator-group");this.element.classList.add("tabulator-group-level-"+this.level);this.element.setAttribute("role","rowgroup");this.arrowElement=document.createElement("div");this.arrowElement.classList.add("tabulator-group-toggle");this.arrowElement.appendChild(arrow);//setup movable rows
  if(this.groupManager.table.options.movableRows!==false&&this.groupManager.table.modExists("moveRow")){this.groupManager.table.modules.moveRow.initializeGroupHeader(this);}};Group.prototype.createValueGroups=function(){var _this68=this;var level=this.level+1;if(this.groupManager.allowedValues&&this.groupManager.allowedValues[level]){this.groupManager.allowedValues[level].forEach(function(value){_this68._createGroup(value,level);});}};Group.prototype.addBindings=function(){var self=this,dblTap,tapHold,tap,toggleElement;//handle group click events
  if(self.groupManager.table.options.groupClick){self.element.addEventListener("click",function(e){self.groupManager.table.options.groupClick.call(self.groupManager.table,e,self.getComponent());});}if(self.groupManager.table.options.groupDblClick){self.element.addEventListener("dblclick",function(e){self.groupManager.table.options.groupDblClick.call(self.groupManager.table,e,self.getComponent());});}if(self.groupManager.table.options.groupContext){self.element.addEventListener("contextmenu",function(e){self.groupManager.table.options.groupContext.call(self.groupManager.table,e,self.getComponent());});}if((self.groupManager.table.options.groupContextMenu||self.groupManager.table.options.groupClickMenu)&&self.groupManager.table.modExists("menu")){self.groupManager.table.modules.menu.initializeGroup.call(self.groupManager.table.modules.menu,self);}if(self.groupManager.table.options.groupTap){tap=false;self.element.addEventListener("touchstart",function(e){tap=true;},{passive:true});self.element.addEventListener("touchend",function(e){if(tap){self.groupManager.table.options.groupTap(e,self.getComponent());}tap=false;});}if(self.groupManager.table.options.groupDblTap){dblTap=null;self.element.addEventListener("touchend",function(e){if(dblTap){clearTimeout(dblTap);dblTap=null;self.groupManager.table.options.groupDblTap(e,self.getComponent());}else {dblTap=setTimeout(function(){clearTimeout(dblTap);dblTap=null;},300);}});}if(self.groupManager.table.options.groupTapHold){tapHold=null;self.element.addEventListener("touchstart",function(e){clearTimeout(tapHold);tapHold=setTimeout(function(){clearTimeout(tapHold);tapHold=null;tap=false;self.groupManager.table.options.groupTapHold(e,self.getComponent());},1000);},{passive:true});self.element.addEventListener("touchend",function(e){clearTimeout(tapHold);tapHold=null;});}if(self.groupManager.table.options.groupToggleElement){toggleElement=self.groupManager.table.options.groupToggleElement=="arrow"?self.arrowElement:self.element;toggleElement.addEventListener("click",function(e){e.stopPropagation();e.stopImmediatePropagation();self.toggleVisibility();});}};Group.prototype._createGroup=function(groupID,level){var groupKey=level+"_"+groupID;var group=new Group(this.groupManager,this,level,groupID,this.groupManager.groupIDLookups[level].field,this.groupManager.headerGenerator[level]||this.groupManager.headerGenerator[0],this.old?this.old.groups[groupKey]:false);this.groups[groupKey]=group;this.groupList.push(group);};Group.prototype._addRowToGroup=function(row){var level=this.level+1;if(this.hasSubGroups){var groupID=this.groupManager.groupIDLookups[level].func(row.getData()),groupKey=level+"_"+groupID;if(this.groupManager.allowedValues&&this.groupManager.allowedValues[level]){if(this.groups[groupKey]){this.groups[groupKey].addRow(row);}}else {if(!this.groups[groupKey]){this._createGroup(groupID,level);}this.groups[groupKey].addRow(row);}}};Group.prototype._addRow=function(row){this.rows.push(row);row.modules.group=this;};Group.prototype.insertRow=function(row,to,after){var data=this.conformRowData({});row.updateData(data);var toIndex=this.rows.indexOf(to);if(toIndex>-1){if(after){this.rows.splice(toIndex+1,0,row);}else {this.rows.splice(toIndex,0,row);}}else {if(after){this.rows.push(row);}else {this.rows.unshift(row);}}row.modules.group=this;this.generateGroupHeaderContents();if(this.groupManager.table.modExists("columnCalcs")&&this.groupManager.table.options.columnCalcs!="table"){this.groupManager.table.modules.columnCalcs.recalcGroup(this);}this.groupManager.updateGroupRows(true);};Group.prototype.scrollHeader=function(left){this.arrowElement.style.marginLeft=left;this.groupList.forEach(function(child){child.scrollHeader(left);});};Group.prototype.getRowIndex=function(row){};//update row data to match grouping contraints
  Group.prototype.conformRowData=function(data){if(this.field){data[this.field]=this.key;}else {console.warn("Data Conforming Error - Cannot conform row data to match new group as groupBy is a function");}if(this.parent){data=this.parent.conformRowData(data);}return data;};Group.prototype.removeRow=function(row){var index=this.rows.indexOf(row);var el=row.getElement();if(index>-1){this.rows.splice(index,1);}if(!this.groupManager.table.options.groupValues&&!this.rows.length){if(this.parent){this.parent.removeGroup(this);}else {this.groupManager.removeGroup(this);}this.groupManager.updateGroupRows(true);}else {if(el.parentNode){el.parentNode.removeChild(el);}this.generateGroupHeaderContents();if(this.groupManager.table.modExists("columnCalcs")&&this.groupManager.table.options.columnCalcs!="table"){this.groupManager.table.modules.columnCalcs.recalcGroup(this);}}};Group.prototype.removeGroup=function(group){var groupKey=group.level+"_"+group.key,index;if(this.groups[groupKey]){delete this.groups[groupKey];index=this.groupList.indexOf(group);if(index>-1){this.groupList.splice(index,1);}if(!this.groupList.length){if(this.parent){this.parent.removeGroup(this);}else {this.groupManager.removeGroup(this);}}}};Group.prototype.getHeadersAndRows=function(noCalc){var output=[];output.push(this);this._visSet();if(this.visible){if(this.groupList.length){this.groupList.forEach(function(group){output=output.concat(group.getHeadersAndRows(noCalc));});}else {if(!noCalc&&this.groupManager.table.options.columnCalcs!="table"&&this.groupManager.table.modExists("columnCalcs")&&this.groupManager.table.modules.columnCalcs.hasTopCalcs()){if(this.calcs.top){this.calcs.top.detachElement();this.calcs.top.deleteCells();}this.calcs.top=this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows);output.push(this.calcs.top);}output=output.concat(this.rows);if(!noCalc&&this.groupManager.table.options.columnCalcs!="table"&&this.groupManager.table.modExists("columnCalcs")&&this.groupManager.table.modules.columnCalcs.hasBottomCalcs()){if(this.calcs.bottom){this.calcs.bottom.detachElement();this.calcs.bottom.deleteCells();}this.calcs.bottom=this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows);output.push(this.calcs.bottom);}}}else {if(!this.groupList.length&&this.groupManager.table.options.columnCalcs!="table"){if(this.groupManager.table.modExists("columnCalcs")){if(!noCalc&&this.groupManager.table.modules.columnCalcs.hasTopCalcs()){if(this.calcs.top){this.calcs.top.detachElement();this.calcs.top.deleteCells();}if(this.groupManager.table.options.groupClosedShowCalcs){this.calcs.top=this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows);output.push(this.calcs.top);}}if(!noCalc&&this.groupManager.table.modules.columnCalcs.hasBottomCalcs()){if(this.calcs.bottom){this.calcs.bottom.detachElement();this.calcs.bottom.deleteCells();}if(this.groupManager.table.options.groupClosedShowCalcs){this.calcs.bottom=this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows);output.push(this.calcs.bottom);}}}}}return output;};Group.prototype.getData=function(visible,transform){var output=[];this._visSet();if(!visible||visible&&this.visible){this.rows.forEach(function(row){output.push(row.getData(transform||"data"));});}return output;};// Group.prototype.getRows = function(){
  // 	this._visSet();
  // 	return this.visible ? this.rows : [];
  // };
  Group.prototype.getRowCount=function(){var count=0;if(this.groupList.length){this.groupList.forEach(function(group){count+=group.getRowCount();});}else {count=this.rows.length;}return count;};Group.prototype.toggleVisibility=function(){if(this.visible){this.hide();}else {this.show();}};Group.prototype.hide=function(){this.visible=false;if(this.groupManager.table.rowManager.getRenderMode()=="classic"&&!this.groupManager.table.options.pagination){this.element.classList.remove("tabulator-group-visible");if(this.groupList.length){this.groupList.forEach(function(group){var rows=group.getHeadersAndRows();rows.forEach(function(row){row.detachElement();});});}else {this.rows.forEach(function(row){var rowEl=row.getElement();rowEl.parentNode.removeChild(rowEl);});}this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(),this.groupManager.getDisplayIndex());this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth();}else {this.groupManager.updateGroupRows(true);}this.groupManager.table.options.groupVisibilityChanged.call(this.table,this.getComponent(),false);};Group.prototype.show=function(){var self=this;self.visible=true;if(this.groupManager.table.rowManager.getRenderMode()=="classic"&&!this.groupManager.table.options.pagination){this.element.classList.add("tabulator-group-visible");var prev=self.getElement();if(this.groupList.length){this.groupList.forEach(function(group){var rows=group.getHeadersAndRows();rows.forEach(function(row){var rowEl=row.getElement();prev.parentNode.insertBefore(rowEl,prev.nextSibling);row.initialize();prev=rowEl;});});}else {self.rows.forEach(function(row){var rowEl=row.getElement();prev.parentNode.insertBefore(rowEl,prev.nextSibling);row.initialize();prev=rowEl;});}this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(),this.groupManager.getDisplayIndex());this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth();}else {this.groupManager.updateGroupRows(true);}this.groupManager.table.options.groupVisibilityChanged.call(this.table,this.getComponent(),true);};Group.prototype._visSet=function(){var data=[];if(typeof this.visible=="function"){this.rows.forEach(function(row){data.push(row.getData());});this.visible=this.visible(this.key,this.getRowCount(),data,this.getComponent());}};Group.prototype.getRowGroup=function(row){var match=false;if(this.groupList.length){this.groupList.forEach(function(group){var result=group.getRowGroup(row);if(result){match=result;}});}else {if(this.rows.find(function(item){return item===row;})){match=this;}}return match;};Group.prototype.getSubGroups=function(component){var output=[];this.groupList.forEach(function(child){output.push(component?child.getComponent():child);});return output;};Group.prototype.getRows=function(compoment){var output=[];this.rows.forEach(function(row){output.push(compoment?row.getComponent():row);});return output;};Group.prototype.generateGroupHeaderContents=function(){var data=[];this.rows.forEach(function(row){data.push(row.getData());});this.elementContents=this.generator(this.key,this.getRowCount(),data,this.getComponent());while(this.element.firstChild){this.element.removeChild(this.element.firstChild);}if(typeof this.elementContents==="string"){this.element.innerHTML=this.elementContents;}else {this.element.appendChild(this.elementContents);}this.element.insertBefore(this.arrowElement,this.element.firstChild);};Group.prototype.getPath=function(){var path=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];path.unshift(this.key);if(this.parent){this.parent.getPath(path);}return path;};////////////// Standard Row Functions //////////////
  Group.prototype.getElement=function(){this.addBindingsd=false;this._visSet();if(this.visible){this.element.classList.add("tabulator-group-visible");}else {this.element.classList.remove("tabulator-group-visible");}for(var i=0;i<this.element.childNodes.length;++i){this.element.childNodes[i].parentNode.removeChild(this.element.childNodes[i]);}this.generateGroupHeaderContents();// this.addBindings();
  return this.element;};Group.prototype.detachElement=function(){if(this.element&&this.element.parentNode){this.element.parentNode.removeChild(this.element);}};//normalize the height of elements in the row
  Group.prototype.normalizeHeight=function(){this.setHeight(this.element.clientHeight);};Group.prototype.initialize=function(force){if(!this.initialized||force){this.normalizeHeight();this.initialized=true;}};Group.prototype.reinitialize=function(){this.initialized=false;this.height=0;if(Tabulator.prototype.helpers.elVisible(this.element)){this.initialize(true);}};Group.prototype.setHeight=function(height){if(this.height!=height){this.height=height;this.outerHeight=this.element.offsetHeight;}};//return rows outer height
  Group.prototype.getHeight=function(){return this.outerHeight;};Group.prototype.getGroup=function(){return this;};Group.prototype.reinitializeHeight=function(){};Group.prototype.calcHeight=function(){};Group.prototype.setCellHeight=function(){};Group.prototype.clearCellHeight=function(){};//////////////// Object Generation /////////////////
  Group.prototype.getComponent=function(){if(!this.component){this.component=new GroupComponent(this);}return this.component;};//////////////////////////////////////////////////
  ////////////// Group Row Extension ///////////////
  //////////////////////////////////////////////////
  var GroupRows=function GroupRows(table){this.table=table;//hold Tabulator object
  this.groupIDLookups=false;//enable table grouping and set field to group by
  this.startOpen=[function(){return false;}];//starting state of group
  this.headerGenerator=[function(){return "";}];this.groupList=[];//ordered list of groups
  this.allowedValues=false;this.groups={};//hold row groups
  this.displayIndex=0;//index in display pipeline
  };//initialize group configuration
  GroupRows.prototype.initialize=function(){var self=this,groupBy=self.table.options.groupBy,startOpen=self.table.options.groupStartOpen,groupHeader=self.table.options.groupHeader;this.allowedValues=self.table.options.groupValues;if(Array.isArray(groupBy)&&Array.isArray(groupHeader)&&groupBy.length>groupHeader.length){console.warn("Error creating group headers, groupHeader array is shorter than groupBy array");}self.headerGenerator=[function(){return "";}];this.startOpen=[function(){return false;}];//starting state of group
  self.table.modules.localize.bind("groups|item",function(langValue,lang){self.headerGenerator[0]=function(value,count,data){//header layout function
  return (typeof value==="undefined"?"":value)+"<span>("+count+" "+(count===1?langValue:lang.groups.items)+")</span>";};});this.groupIDLookups=[];if(Array.isArray(groupBy)||groupBy){if(this.table.modExists("columnCalcs")&&this.table.options.columnCalcs!="table"&&this.table.options.columnCalcs!="both"){this.table.modules.columnCalcs.removeCalcs();}}else {if(this.table.modExists("columnCalcs")&&this.table.options.columnCalcs!="group"){var cols=this.table.columnManager.getRealColumns();cols.forEach(function(col){if(col.definition.topCalc){self.table.modules.columnCalcs.initializeTopRow();}if(col.definition.bottomCalc){self.table.modules.columnCalcs.initializeBottomRow();}});}}if(!Array.isArray(groupBy)){groupBy=[groupBy];}groupBy.forEach(function(group,i){var lookupFunc,column;if(typeof group=="function"){lookupFunc=group;}else {column=self.table.columnManager.getColumnByField(group);if(column){lookupFunc=function lookupFunc(data){return column.getFieldValue(data);};}else {lookupFunc=function lookupFunc(data){return data[group];};}}self.groupIDLookups.push({field:typeof group==="function"?false:group,func:lookupFunc,values:self.allowedValues?self.allowedValues[i]:false});});if(startOpen){if(!Array.isArray(startOpen)){startOpen=[startOpen];}startOpen.forEach(function(level){});self.startOpen=startOpen;}if(groupHeader){self.headerGenerator=Array.isArray(groupHeader)?groupHeader:[groupHeader];}this.initialized=true;};GroupRows.prototype.setDisplayIndex=function(index){this.displayIndex=index;};GroupRows.prototype.getDisplayIndex=function(){return this.displayIndex;};//return appropriate rows with group headers
  GroupRows.prototype.getRows=function(rows){if(this.groupIDLookups.length){this.table.options.dataGrouping.call(this.table);this.generateGroups(rows);if(this.table.options.dataGrouped){this.table.options.dataGrouped.call(this.table,this.getGroups(true));}return this.updateGroupRows();}else {return rows.slice(0);}};GroupRows.prototype.getGroups=function(compoment){var groupComponents=[];this.groupList.forEach(function(group){groupComponents.push(compoment?group.getComponent():group);});return groupComponents;};GroupRows.prototype.getChildGroups=function(group){var _this69=this;var groupComponents=[];if(!group){group=this;}group.groupList.forEach(function(child){if(child.groupList.length){groupComponents=groupComponents.concat(_this69.getChildGroups(child));}else {groupComponents.push(child);}});return groupComponents;};GroupRows.prototype.wipe=function(){this.groupList.forEach(function(group){group.wipe();});};GroupRows.prototype.pullGroupListData=function(groupList){var self=this;var groupListData=[];groupList.forEach(function(group){var groupHeader={};groupHeader.level=0;groupHeader.rowCount=0;groupHeader.headerContent="";var childData=[];if(group.hasSubGroups){childData=self.pullGroupListData(group.groupList);groupHeader.level=group.level;groupHeader.rowCount=childData.length-group.groupList.length;// data length minus number of sub-headers
  groupHeader.headerContent=group.generator(group.key,groupHeader.rowCount,group.rows,group);groupListData.push(groupHeader);groupListData=groupListData.concat(childData);}else {groupHeader.level=group.level;groupHeader.headerContent=group.generator(group.key,group.rows.length,group.rows,group);groupHeader.rowCount=group.getRows().length;groupListData.push(groupHeader);group.getRows().forEach(function(row){groupListData.push(row.getData("data"));});}});return groupListData;};GroupRows.prototype.getGroupedData=function(){return this.pullGroupListData(this.groupList);};GroupRows.prototype.getRowGroup=function(row){var match=false;this.groupList.forEach(function(group){var result=group.getRowGroup(row);if(result){match=result;}});return match;};GroupRows.prototype.countGroups=function(){return this.groupList.length;};GroupRows.prototype.generateGroups=function(rows){var self=this,oldGroups=self.groups;self.groups={};self.groupList=[];if(this.allowedValues&&this.allowedValues[0]){this.allowedValues[0].forEach(function(value){self.createGroup(value,0,oldGroups);});rows.forEach(function(row){self.assignRowToExistingGroup(row,oldGroups);});}else {rows.forEach(function(row){self.assignRowToGroup(row,oldGroups);});}};GroupRows.prototype.createGroup=function(groupID,level,oldGroups){var groupKey=level+"_"+groupID,group;oldGroups=oldGroups||[];group=new Group(this,false,level,groupID,this.groupIDLookups[0].field,this.headerGenerator[0],oldGroups[groupKey]);this.groups[groupKey]=group;this.groupList.push(group);};// GroupRows.prototype.assignRowToGroup = function(row, oldGroups){
  // 	var groupID = this.groupIDLookups[0].func(row.getData()),
  // 	groupKey = "0_" + groupID;
  // 	if(!this.groups[groupKey]){
  // 		this.createGroup(groupID, 0, oldGroups);
  // 	}
  // 	this.groups[groupKey].addRow(row);
  // };
  GroupRows.prototype.assignRowToExistingGroup=function(row,oldGroups){var groupID=this.groupIDLookups[0].func(row.getData()),groupKey="0_"+groupID;if(this.groups[groupKey]){this.groups[groupKey].addRow(row);}};GroupRows.prototype.assignRowToGroup=function(row,oldGroups){var groupID=this.groupIDLookups[0].func(row.getData()),newGroupNeeded=!this.groups["0_"+groupID];if(newGroupNeeded){this.createGroup(groupID,0,oldGroups);}this.groups["0_"+groupID].addRow(row);return !newGroupNeeded;};GroupRows.prototype.reassignRowToGroup=function(row){var oldRowGroup=row.getGroup(),oldGroupPath=oldRowGroup.getPath(),newGroupPath=this.getExpectedPath(row),samePath=true;// figure out if new group path is the same as old group path
  var samePath=oldGroupPath.length==newGroupPath.length&&oldGroupPath.every(function(element,index){return element===newGroupPath[index];});// refresh if they new path and old path aren't the same (aka the row's groupings have changed)
  if(!samePath){oldRowGroup.removeRow(row);this.assignRowToGroup(row,self.groups);this.table.rowManager.refreshActiveData("group",false,true);}};GroupRows.prototype.getExpectedPath=function(row){var groupPath=[],rowData=row.getData();this.groupIDLookups.forEach(function(groupId){groupPath.push(groupId.func(rowData));});return groupPath;};GroupRows.prototype.updateGroupRows=function(force){var self=this,output=[];self.groupList.forEach(function(group){output=output.concat(group.getHeadersAndRows());});//force update of table display
  if(force){var displayIndex=self.table.rowManager.setDisplayRows(output,this.getDisplayIndex());if(displayIndex!==true){this.setDisplayIndex(displayIndex);}self.table.rowManager.refreshActiveData("group",true,true);}return output;};GroupRows.prototype.scrollHeaders=function(left){if(this.table.options.virtualDomHoz){left-=this.table.vdomHoz.vDomPadLeft;}left=left+"px";this.groupList.forEach(function(group){group.scrollHeader(left);});};GroupRows.prototype.removeGroup=function(group){var groupKey=group.level+"_"+group.key,index;if(this.groups[groupKey]){delete this.groups[groupKey];index=this.groupList.indexOf(group);if(index>-1){this.groupList.splice(index,1);}}};Tabulator.prototype.registerModule("groupRows",GroupRows);var History=function History(table){this.table=table;//hold Tabulator object
  this.history=[];this.index=-1;};History.prototype.clear=function(){this.history=[];this.index=-1;};History.prototype.action=function(type,component,data){this.history=this.history.slice(0,this.index+1);this.history.push({type:type,component:component,data:data});this.index++;};History.prototype.getHistoryUndoSize=function(){return this.index+1;};History.prototype.getHistoryRedoSize=function(){return this.history.length-(this.index+1);};History.prototype.clearComponentHistory=function(component){var index=this.history.findIndex(function(item){return item.component===component;});if(index>-1){this.history.splice(index,1);if(index<=this.index){this.index--;}this.clearComponentHistory(component);}};History.prototype.undo=function(){if(this.index>-1){var action=this.history[this.index];this.undoers[action.type].call(this,action);this.index--;this.table.options.historyUndo.call(this.table,action.type,action.component.getComponent(),action.data);return true;}else {console.warn("History Undo Error - No more history to undo");return false;}};History.prototype.redo=function(){if(this.history.length-1>this.index){this.index++;var action=this.history[this.index];this.redoers[action.type].call(this,action);this.table.options.historyRedo.call(this.table,action.type,action.component.getComponent(),action.data);return true;}else {console.warn("History Redo Error - No more history to redo");return false;}};History.prototype.undoers={cellEdit:function cellEdit(action){action.component.setValueProcessData(action.data.oldValue);},rowAdd:function rowAdd(action){action.component.deleteActual();},rowDelete:function rowDelete(action){var newRow=this.table.rowManager.addRowActual(action.data.data,action.data.pos,action.data.index);if(this.table.options.groupBy&&this.table.modExists("groupRows")){this.table.modules.groupRows.updateGroupRows(true);}this._rebindRow(action.component,newRow);},rowMove:function rowMove(action){this.table.rowManager.moveRowActual(action.component,this.table.rowManager.rows[action.data.posFrom],!action.data.after);this.table.rowManager.redraw();}};History.prototype.redoers={cellEdit:function cellEdit(action){action.component.setValueProcessData(action.data.newValue);},rowAdd:function rowAdd(action){var newRow=this.table.rowManager.addRowActual(action.data.data,action.data.pos,action.data.index);if(this.table.options.groupBy&&this.table.modExists("groupRows")){this.table.modules.groupRows.updateGroupRows(true);}this._rebindRow(action.component,newRow);},rowDelete:function rowDelete(action){action.component.deleteActual();},rowMove:function rowMove(action){this.table.rowManager.moveRowActual(action.component,this.table.rowManager.rows[action.data.posTo],action.data.after);this.table.rowManager.redraw();}};//rebind rows to new element after deletion
  History.prototype._rebindRow=function(oldRow,newRow){this.history.forEach(function(action){if(action.component instanceof Row){if(action.component===oldRow){action.component=newRow;}}else if(action.component instanceof Cell){if(action.component.row===oldRow){var field=action.component.column.getField();if(field){action.component=newRow.getCell(field);}}}});};Tabulator.prototype.registerModule("history",History);var HtmlTableImport=function HtmlTableImport(table){this.table=table;//hold Tabulator object
  this.fieldIndex=[];this.hasIndex=false;};HtmlTableImport.prototype.parseTable=function(){var self=this,element=self.table.element,options=self.table.options;options.columns;var headers=element.getElementsByTagName("th"),rows=element.getElementsByTagName("tbody")[0],data=[];self.hasIndex=false;self.table.options.htmlImporting.call(this.table);rows=rows?rows.getElementsByTagName("tr"):[];//check for tablator inline options
  self._extractOptions(element,options);if(headers.length){self._extractHeaders(headers,rows);}else {self._generateBlankHeaders(headers,rows);}//iterate through table rows and build data set
  for(var index=0;index<rows.length;index++){var row=rows[index],cells=row.getElementsByTagName("td"),item={};//create index if the dont exist in table
  if(!self.hasIndex){item[options.index]=index;}for(var i=0;i<cells.length;i++){var cell=cells[i];if(typeof this.fieldIndex[i]!=="undefined"){item[this.fieldIndex[i]]=cell.innerHTML;}}//add row data to item
  data.push(item);}//create new element
  var newElement=document.createElement("div");//transfer attributes to new element
  var attributes=element.attributes;// loop through attributes and apply them on div
  for(var i in attributes){if(_typeof(attributes[i])=="object"){newElement.setAttribute(attributes[i].name,attributes[i].value);}}// replace table with div element
  element.parentNode.replaceChild(newElement,element);options.data=data;self.table.options.htmlImported.call(this.table);// // newElement.tabulator(options);
  this.table.element=newElement;};//extract tabulator attribute options
  HtmlTableImport.prototype._extractOptions=function(element,options,defaultOptions){var attributes=element.attributes;var optionsArr=defaultOptions?Object.assign([],defaultOptions):Object.keys(options);var optionsList={};optionsArr.forEach(function(item){optionsList[item.toLowerCase()]=item;});for(var index in attributes){var attrib=attributes[index];var name;if(attrib&&(typeof attrib==='undefined'?'undefined':_typeof(attrib))=="object"&&attrib.name&&attrib.name.indexOf("tabulator-")===0){name=attrib.name.replace("tabulator-","");if(typeof optionsList[name]!=="undefined"){options[optionsList[name]]=this._attribValue(attrib.value);}}}};//get value of attribute
  HtmlTableImport.prototype._attribValue=function(value){if(value==="true"){return true;}if(value==="false"){return false;}return value;};//find column if it has already been defined
  HtmlTableImport.prototype._findCol=function(title){var match=this.table.options.columns.find(function(column){return column.title===title;});return match||false;};//extract column from headers
  HtmlTableImport.prototype._extractHeaders=function(headers,rows){for(var index=0;index<headers.length;index++){var header=headers[index],exists=false,col=this._findCol(header.textContent),width;if(col){exists=true;}else {col={title:header.textContent.trim()};}if(!col.field){col.field=header.textContent.trim().toLowerCase().replace(" ","_");}width=header.getAttribute("width");if(width&&!col.width){col.width=width;}//check for tablator inline options
  header.attributes;// //check for tablator inline options
  this._extractOptions(header,col,Column.prototype.defaultOptionList);this.fieldIndex[index]=col.field;if(col.field==this.table.options.index){this.hasIndex=true;}if(!exists){this.table.options.columns.push(col);}}};//generate blank headers
  HtmlTableImport.prototype._generateBlankHeaders=function(headers,rows){for(var index=0;index<headers.length;index++){var header=headers[index],col={title:"",field:"col"+index};this.fieldIndex[index]=col.field;var width=header.getAttribute("width");if(width){col.width=width;}this.table.options.columns.push(col);}};Tabulator.prototype.registerModule("htmlTableImport",HtmlTableImport);var Keybindings=function Keybindings(table){this.table=table;//hold Tabulator object
  this.watchKeys=null;this.pressedKeys=null;this.keyupBinding=false;this.keydownBinding=false;};Keybindings.prototype.initialize=function(){var bindings=this.table.options.keybindings,mergedBindings={};this.watchKeys={};this.pressedKeys=[];if(bindings!==false){for(var key in this.bindings){mergedBindings[key]=this.bindings[key];}if(Object.keys(bindings).length){for(var _key in bindings){mergedBindings[_key]=bindings[_key];}}this.mapBindings(mergedBindings);this.bindEvents();}};Keybindings.prototype.mapBindings=function(bindings){var _this70=this;var self=this;var _loop2=function _loop2(key){if(_this70.actions[key]){if(bindings[key]){if(_typeof(bindings[key])!=="object"){bindings[key]=[bindings[key]];}bindings[key].forEach(function(binding){self.mapBinding(key,binding);});}}else {console.warn("Key Binding Error - no such action:",key);}};for(var key in bindings){_loop2(key);}};Keybindings.prototype.mapBinding=function(action,symbolsList){var self=this;var binding={action:this.actions[action],keys:[],ctrl:false,shift:false,meta:false};var symbols=symbolsList.toString().toLowerCase().split(" ").join("").split("+");symbols.forEach(function(symbol){switch(symbol){case"ctrl":binding.ctrl=true;break;case"shift":binding.shift=true;break;case"meta":binding.meta=true;break;default:symbol=parseInt(symbol);binding.keys.push(symbol);if(!self.watchKeys[symbol]){self.watchKeys[symbol]=[];}self.watchKeys[symbol].push(binding);}});};Keybindings.prototype.bindEvents=function(){var self=this;this.keyupBinding=function(e){var code=e.keyCode;var bindings=self.watchKeys[code];if(bindings){self.pressedKeys.push(code);bindings.forEach(function(binding){self.checkBinding(e,binding);});}};this.keydownBinding=function(e){var code=e.keyCode;var bindings=self.watchKeys[code];if(bindings){var index=self.pressedKeys.indexOf(code);if(index>-1){self.pressedKeys.splice(index,1);}}};this.table.element.addEventListener("keydown",this.keyupBinding);this.table.element.addEventListener("keyup",this.keydownBinding);};Keybindings.prototype.clearBindings=function(){if(this.keyupBinding){this.table.element.removeEventListener("keydown",this.keyupBinding);}if(this.keydownBinding){this.table.element.removeEventListener("keyup",this.keydownBinding);}};Keybindings.prototype.checkBinding=function(e,binding){var self=this,match=true;if(e.ctrlKey==binding.ctrl&&e.shiftKey==binding.shift&&e.metaKey==binding.meta){binding.keys.forEach(function(key){var index=self.pressedKeys.indexOf(key);if(index==-1){match=false;}});if(match){binding.action.call(self,e);}return true;}return false;};//default bindings
  Keybindings.prototype.bindings={navPrev:"shift + 9",navNext:9,navUp:38,navDown:40,scrollPageUp:33,scrollPageDown:34,scrollToStart:36,scrollToEnd:35,undo:"ctrl + 90",redo:"ctrl + 89",copyToClipboard:"ctrl + 67"};//default actions
  Keybindings.prototype.actions={keyBlock:function keyBlock(e){e.stopPropagation();e.preventDefault();},scrollPageUp:function scrollPageUp(e){var rowManager=this.table.rowManager,newPos=rowManager.scrollTop-rowManager.height;rowManager.element.scrollHeight;e.preventDefault();if(rowManager.displayRowsCount){if(newPos>=0){rowManager.element.scrollTop=newPos;}else {rowManager.scrollToRow(rowManager.getDisplayRows()[0]);}}this.table.element.focus();},scrollPageDown:function scrollPageDown(e){var rowManager=this.table.rowManager,newPos=rowManager.scrollTop+rowManager.height,scrollMax=rowManager.element.scrollHeight;e.preventDefault();if(rowManager.displayRowsCount){if(newPos<=scrollMax){rowManager.element.scrollTop=newPos;}else {rowManager.scrollToRow(rowManager.getDisplayRows()[rowManager.displayRowsCount-1]);}}this.table.element.focus();},scrollToStart:function scrollToStart(e){var rowManager=this.table.rowManager;e.preventDefault();if(rowManager.displayRowsCount){rowManager.scrollToRow(rowManager.getDisplayRows()[0]);}this.table.element.focus();},scrollToEnd:function scrollToEnd(e){var rowManager=this.table.rowManager;e.preventDefault();if(rowManager.displayRowsCount){rowManager.scrollToRow(rowManager.getDisplayRows()[rowManager.displayRowsCount-1]);}this.table.element.focus();},navPrev:function navPrev(e){var cell=false;if(this.table.modExists("edit")){cell=this.table.modules.edit.currentCell;if(cell){e.preventDefault();cell.nav().prev();}}},navNext:function navNext(e){var cell=false;var newRow=this.table.options.tabEndNewRow;var nav;if(this.table.modExists("edit")){cell=this.table.modules.edit.currentCell;if(cell){e.preventDefault();nav=cell.nav();if(!nav.next()){if(newRow){cell.getElement().firstChild.blur();if(newRow===true){newRow=this.table.addRow({});}else {if(typeof newRow=="function"){newRow=this.table.addRow(newRow(cell.row.getComponent()));}else {newRow=this.table.addRow(Object.assign({},newRow));}}newRow.then(function(){setTimeout(function(){nav.next();});});}}}}},navLeft:function navLeft(e){var cell=false;if(this.table.modExists("edit")){cell=this.table.modules.edit.currentCell;if(cell){e.preventDefault();cell.nav().left();}}},navRight:function navRight(e){var cell=false;if(this.table.modExists("edit")){cell=this.table.modules.edit.currentCell;if(cell){e.preventDefault();cell.nav().right();}}},navUp:function navUp(e){var cell=false;if(this.table.modExists("edit")){cell=this.table.modules.edit.currentCell;if(cell){e.preventDefault();cell.nav().up();}}},navDown:function navDown(e){var cell=false;if(this.table.modExists("edit")){cell=this.table.modules.edit.currentCell;if(cell){e.preventDefault();cell.nav().down();}}},undo:function undo(e){var cell=false;if(this.table.options.history&&this.table.modExists("history")&&this.table.modExists("edit")){cell=this.table.modules.edit.currentCell;if(!cell){e.preventDefault();this.table.modules.history.undo();}}},redo:function redo(e){var cell=false;if(this.table.options.history&&this.table.modExists("history")&&this.table.modExists("edit")){cell=this.table.modules.edit.currentCell;if(!cell){e.preventDefault();this.table.modules.history.redo();}}},copyToClipboard:function copyToClipboard(e){if(!this.table.modules.edit.currentCell){if(this.table.modExists("clipboard",true)){this.table.modules.clipboard.copy(false,true);}}}};Tabulator.prototype.registerModule("keybindings",Keybindings);var Menu=function Menu(table){this.table=table;//hold Tabulator object
  this.menuElements=[];this.blurEvent=this.hideMenu.bind(this);this.escEvent=this.escMenu.bind(this);this.nestedMenuBlock=false;this.positionReversedX=false;};Menu.prototype.initializeColumnHeader=function(column){var _this71=this;var headerMenuEl;if(column.definition.headerContextMenu){column.getElement().addEventListener("contextmenu",this.LoadMenuEvent.bind(this,column,column.definition.headerContextMenu));this.tapHold(column,column.definition.headerContextMenu);}// if(column.definition.headerClickMenu){
  // 	column.getElement().addEventListener("click", this.LoadMenuEvent.bind(this, column, column.definition.headerClickMenu));
  // }
  if(column.definition.headerMenu){headerMenuEl=document.createElement("span");headerMenuEl.classList.add("tabulator-header-menu-button");headerMenuEl.innerHTML="&vellip;";headerMenuEl.addEventListener("click",function(e){e.stopPropagation();e.preventDefault();_this71.LoadMenuEvent(column,column.definition.headerMenu,e);});column.titleElement.insertBefore(headerMenuEl,column.titleElement.firstChild);}};Menu.prototype.LoadMenuEvent=function(component,menu,e){menu=typeof menu=="function"?menu.call(this.table,component.getComponent(),e):menu;// if(component instanceof Cell){
  // 	e.stopImmediatePropagation();
  // }
  this.loadMenu(e,component,menu);};Menu.prototype.tapHold=function(component,menu){var _this72=this;var element=component.getElement(),tapHold=null,loaded=false;element.addEventListener("touchstart",function(e){clearTimeout(tapHold);loaded=false;tapHold=setTimeout(function(){clearTimeout(tapHold);tapHold=null;loaded=true;_this72.LoadMenuEvent(component,menu,e);},1000);},{passive:true});element.addEventListener("touchend",function(e){clearTimeout(tapHold);tapHold=null;if(loaded){e.preventDefault();}});};Menu.prototype.initializeCell=function(cell){if(cell.column.definition.contextMenu){cell.getElement(true).addEventListener("contextmenu",this.LoadMenuEvent.bind(this,cell,cell.column.definition.contextMenu));this.tapHold(cell,cell.column.definition.contextMenu);}if(cell.column.definition.clickMenu){cell.getElement(true).addEventListener("click",this.LoadMenuEvent.bind(this,cell,cell.column.definition.clickMenu));}};Menu.prototype.initializeRow=function(row){if(this.table.options.rowContextMenu){row.getElement().addEventListener("contextmenu",this.LoadMenuEvent.bind(this,row,this.table.options.rowContextMenu));this.tapHold(row,this.table.options.rowContextMenu);}if(this.table.options.rowClickMenu){row.getElement().addEventListener("click",this.LoadMenuEvent.bind(this,row,this.table.options.rowClickMenu));}};Menu.prototype.initializeGroup=function(group){if(this.table.options.groupContextMenu){group.getElement().addEventListener("contextmenu",this.LoadMenuEvent.bind(this,group,this.table.options.groupContextMenu));this.tapHold(group,this.table.options.groupContextMenu);}if(this.table.options.groupClickMenu){group.getElement().addEventListener("click",this.LoadMenuEvent.bind(this,group,this.table.options.groupClickMenu));}};Menu.prototype.loadMenu=function(e,component,menu,parentEl){var _this73=this;var touch=!(e instanceof MouseEvent);var menuEl=document.createElement("div");menuEl.classList.add("tabulator-menu");if(!touch){e.preventDefault();}//abort if no menu set
  if(!menu||!menu.length){return;}if(!parentEl){if(this.nestedMenuBlock){//abort if child menu already open
  if(this.isOpen()){return;}}else {this.nestedMenuBlock=setTimeout(function(){_this73.nestedMenuBlock=false;},100);}this.hideMenu();this.menuElements=[];}menu.forEach(function(item){var itemEl=document.createElement("div"),label=item.label,disabled=item.disabled;if(item.separator){itemEl.classList.add("tabulator-menu-separator");}else {itemEl.classList.add("tabulator-menu-item");if(typeof label=="function"){label=label.call(_this73.table,component.getComponent());}if(label instanceof Node){itemEl.appendChild(label);}else {itemEl.innerHTML=label;}if(typeof disabled=="function"){disabled=disabled.call(_this73.table,component.getComponent());}if(disabled){itemEl.classList.add("tabulator-menu-item-disabled");itemEl.addEventListener("click",function(e){e.stopPropagation();});}else {if(item.menu&&item.menu.length){itemEl.addEventListener("click",function(e){e.stopPropagation();_this73.hideOldSubMenus(menuEl);_this73.loadMenu(e,component,item.menu,itemEl);});}else {if(item.action){itemEl.addEventListener("click",function(e){item.action(e,component.getComponent());});}}}if(item.menu&&item.menu.length){itemEl.classList.add("tabulator-menu-item-submenu");}}menuEl.appendChild(itemEl);});menuEl.addEventListener("click",function(e){_this73.hideMenu();});this.menuElements.push(menuEl);this.positionMenu(menuEl,parentEl,touch,e);};Menu.prototype.hideOldSubMenus=function(menuEl){var index=this.menuElements.indexOf(menuEl);if(index>-1){for(var _i13=this.menuElements.length-1;_i13>index;_i13--){var el=this.menuElements[_i13];if(el.parentNode){el.parentNode.removeChild(el);}this.menuElements.pop();}}};Menu.prototype.positionMenu=function(element,parentEl,touch,e){var _this74=this;var docHeight=Math.max(document.body.offsetHeight,window.innerHeight),x,y,parentOffset;if(!parentEl){x=touch?e.touches[0].pageX:e.pageX;y=touch?e.touches[0].pageY:e.pageY;this.positionReversedX=false;}else {parentOffset=Tabulator.prototype.helpers.elOffset(parentEl);x=parentOffset.left+parentEl.offsetWidth;y=parentOffset.top-1;}element.style.top=y+"px";element.style.left=x+"px";setTimeout(function(){_this74.table.rowManager.element.addEventListener("scroll",_this74.blurEvent);document.body.addEventListener("click",_this74.blurEvent);document.body.addEventListener("contextmenu",_this74.blurEvent);window.addEventListener("resize",_this74.blurEvent);document.body.addEventListener("keydown",_this74.escEvent);},100);document.body.appendChild(element);//move menu to start on bottom edge if it is too close to the edge of the screen
  if(y+element.offsetHeight>=docHeight){element.style.top="";if(parentEl){element.style.bottom=docHeight-parentOffset.top-parentEl.offsetHeight-1+"px";}else {element.style.bottom=docHeight-y+"px";}}//move menu to start on right edge if it is too close to the edge of the screen
  if(x+element.offsetWidth>=document.body.offsetWidth||this.positionReversedX){element.style.left="";if(parentEl){element.style.right=document.documentElement.offsetWidth-parentOffset.left+"px";}else {element.style.right=document.documentElement.offsetWidth-x+"px";}this.positionReversedX=true;}};Menu.prototype.isOpen=function(){return !!this.menuElements.length;};Menu.prototype.escMenu=function(e){if(e.keyCode==27){this.hideMenu();}};Menu.prototype.hideMenu=function(){this.menuElements.forEach(function(menuEl){if(menuEl.parentNode){menuEl.parentNode.removeChild(menuEl);}});document.body.removeEventListener("keydown",this.escEvent);document.body.removeEventListener("click",this.blurEvent);document.body.removeEventListener("contextmenu",this.blurEvent);window.removeEventListener("resize",this.blurEvent);this.table.rowManager.element.removeEventListener("scroll",this.blurEvent);};//default accessors
  Menu.prototype.menus={};Tabulator.prototype.registerModule("menu",Menu);var MoveColumns=function MoveColumns(table){this.table=table;//hold Tabulator object
  this.placeholderElement=this.createPlaceholderElement();this.hoverElement=false;//floating column header element
  this.checkTimeout=false;//click check timeout holder
  this.checkPeriod=250;//period to wait on mousedown to consider this a move and not a click
  this.moving=false;//currently moving column
  this.toCol=false;//destination column
  this.toColAfter=false;//position of moving column relative to the desitnation column
  this.startX=0;//starting position within header element
  this.autoScrollMargin=40;//auto scroll on edge when within margin
  this.autoScrollStep=5;//auto scroll distance in pixels
  this.autoScrollTimeout=false;//auto scroll timeout
  this.touchMove=false;this.moveHover=this.moveHover.bind(this);this.endMove=this.endMove.bind(this);};MoveColumns.prototype.createPlaceholderElement=function(){var el=document.createElement("div");el.classList.add("tabulator-col");el.classList.add("tabulator-col-placeholder");return el;};MoveColumns.prototype.initializeColumn=function(column){var self=this,config={},colEl;if(!column.modules.frozen){colEl=column.getElement();config.mousemove=function(e){if(column.parent===self.moving.parent){if((self.touchMove?e.touches[0].pageX:e.pageX)-Tabulator.prototype.helpers.elOffset(colEl).left+self.table.columnManager.element.scrollLeft>column.getWidth()/2){if(self.toCol!==column||!self.toColAfter){colEl.parentNode.insertBefore(self.placeholderElement,colEl.nextSibling);self.moveColumn(column,true);}}else {if(self.toCol!==column||self.toColAfter){colEl.parentNode.insertBefore(self.placeholderElement,colEl);self.moveColumn(column,false);}}}}.bind(self);colEl.addEventListener("mousedown",function(e){self.touchMove=false;if(e.which===1){self.checkTimeout=setTimeout(function(){self.startMove(e,column);},self.checkPeriod);}});colEl.addEventListener("mouseup",function(e){if(e.which===1){if(self.checkTimeout){clearTimeout(self.checkTimeout);}}});self.bindTouchEvents(column);}column.modules.moveColumn=config;};MoveColumns.prototype.bindTouchEvents=function(column){var self=this,colEl=column.getElement(),startXMove=false,//shifting center position of the cell
  nextCol,prevCol,nextColWidth,prevColWidth,nextColWidthLast,prevColWidthLast;colEl.addEventListener("touchstart",function(e){self.checkTimeout=setTimeout(function(){self.touchMove=true;nextCol=column.nextColumn();nextColWidth=nextCol?nextCol.getWidth()/2:0;prevCol=column.prevColumn();prevColWidth=prevCol?prevCol.getWidth()/2:0;nextColWidthLast=0;prevColWidthLast=0;startXMove=false;self.startMove(e,column);},self.checkPeriod);},{passive:true});colEl.addEventListener("touchmove",function(e){var diff,moveToCol;if(self.moving){self.moveHover(e);if(!startXMove){startXMove=e.touches[0].pageX;}diff=e.touches[0].pageX-startXMove;if(diff>0){if(nextCol&&diff-nextColWidthLast>nextColWidth){moveToCol=nextCol;if(moveToCol!==column){startXMove=e.touches[0].pageX;moveToCol.getElement().parentNode.insertBefore(self.placeholderElement,moveToCol.getElement().nextSibling);self.moveColumn(moveToCol,true);}}}else {if(prevCol&&-diff-prevColWidthLast>prevColWidth){moveToCol=prevCol;if(moveToCol!==column){startXMove=e.touches[0].pageX;moveToCol.getElement().parentNode.insertBefore(self.placeholderElement,moveToCol.getElement());self.moveColumn(moveToCol,false);}}}if(moveToCol){nextCol=moveToCol.nextColumn();nextColWidthLast=nextColWidth;nextColWidth=nextCol?nextCol.getWidth()/2:0;prevCol=moveToCol.prevColumn();prevColWidthLast=prevColWidth;prevColWidth=prevCol?prevCol.getWidth()/2:0;}}},{passive:true});colEl.addEventListener("touchend",function(e){if(self.checkTimeout){clearTimeout(self.checkTimeout);}if(self.moving){self.endMove(e);}});};MoveColumns.prototype.startMove=function(e,column){var element=column.getElement();this.moving=column;this.startX=(this.touchMove?e.touches[0].pageX:e.pageX)-Tabulator.prototype.helpers.elOffset(element).left;this.table.element.classList.add("tabulator-block-select");//create placeholder
  this.placeholderElement.style.width=column.getWidth()+"px";this.placeholderElement.style.height=column.getHeight()+"px";element.parentNode.insertBefore(this.placeholderElement,element);element.parentNode.removeChild(element);//create hover element
  this.hoverElement=element.cloneNode(true);this.hoverElement.classList.add("tabulator-moving");this.table.columnManager.getElement().appendChild(this.hoverElement);this.hoverElement.style.left="0";this.hoverElement.style.bottom="0";if(!this.touchMove){this._bindMouseMove();document.body.addEventListener("mousemove",this.moveHover);document.body.addEventListener("mouseup",this.endMove);}this.moveHover(e);};MoveColumns.prototype._bindMouseMove=function(){this.table.columnManager.columnsByIndex.forEach(function(column){if(column.modules.moveColumn.mousemove){column.getElement().addEventListener("mousemove",column.modules.moveColumn.mousemove);}});};MoveColumns.prototype._unbindMouseMove=function(){this.table.columnManager.columnsByIndex.forEach(function(column){if(column.modules.moveColumn.mousemove){column.getElement().removeEventListener("mousemove",column.modules.moveColumn.mousemove);}});};MoveColumns.prototype.moveColumn=function(column,after){var movingCells=this.moving.getCells();this.toCol=column;this.toColAfter=after;if(after){column.getCells().forEach(function(cell,i){var cellEl=cell.getElement(true);cellEl.parentNode.insertBefore(movingCells[i].getElement(),cellEl.nextSibling);});}else {column.getCells().forEach(function(cell,i){var cellEl=cell.getElement(true);cellEl.parentNode.insertBefore(movingCells[i].getElement(),cellEl);});}};MoveColumns.prototype.endMove=function(e){if(e.which===1||this.touchMove){this._unbindMouseMove();this.placeholderElement.parentNode.insertBefore(this.moving.getElement(),this.placeholderElement.nextSibling);this.placeholderElement.parentNode.removeChild(this.placeholderElement);this.hoverElement.parentNode.removeChild(this.hoverElement);this.table.element.classList.remove("tabulator-block-select");if(this.toCol){this.table.columnManager.moveColumnActual(this.moving,this.toCol,this.toColAfter);}this.moving=false;this.toCol=false;this.toColAfter=false;if(!this.touchMove){document.body.removeEventListener("mousemove",this.moveHover);document.body.removeEventListener("mouseup",this.endMove);}}};MoveColumns.prototype.moveHover=function(e){var self=this,columnHolder=self.table.columnManager.getElement(),scrollLeft=columnHolder.scrollLeft,xPos=(self.touchMove?e.touches[0].pageX:e.pageX)-Tabulator.prototype.helpers.elOffset(columnHolder).left+scrollLeft,scrollPos;self.hoverElement.style.left=xPos-self.startX+"px";if(xPos-scrollLeft<self.autoScrollMargin){if(!self.autoScrollTimeout){self.autoScrollTimeout=setTimeout(function(){scrollPos=Math.max(0,scrollLeft-5);self.table.rowManager.getElement().scrollLeft=scrollPos;self.autoScrollTimeout=false;},1);}}if(scrollLeft+columnHolder.clientWidth-xPos<self.autoScrollMargin){if(!self.autoScrollTimeout){self.autoScrollTimeout=setTimeout(function(){scrollPos=Math.min(columnHolder.clientWidth,scrollLeft+5);self.table.rowManager.getElement().scrollLeft=scrollPos;self.autoScrollTimeout=false;},1);}}};Tabulator.prototype.registerModule("moveColumn",MoveColumns);var MoveRows=function MoveRows(table){this.table=table;//hold Tabulator object
  this.placeholderElement=this.createPlaceholderElement();this.hoverElement=false;//floating row header element
  this.checkTimeout=false;//click check timeout holder
  this.checkPeriod=150;//period to wait on mousedown to consider this a move and not a click
  this.moving=false;//currently moving row
  this.toRow=false;//destination row
  this.toRowAfter=false;//position of moving row relative to the desitnation row
  this.hasHandle=false;//row has handle instead of fully movable row
  this.startY=0;//starting Y position within header element
  this.startX=0;//starting X position within header element
  this.moveHover=this.moveHover.bind(this);this.endMove=this.endMove.bind(this);this.tableRowDropEvent=false;this.touchMove=false;this.connection=false;this.connectionSelectorsTables=false;this.connectionSelectorsElements=false;this.connectionElements=[];this.connections=[];this.connectedTable=false;this.connectedRow=false;};MoveRows.prototype.createPlaceholderElement=function(){var el=document.createElement("div");el.classList.add("tabulator-row");el.classList.add("tabulator-row-placeholder");return el;};MoveRows.prototype.initialize=function(handle){this.connectionSelectorsTables=this.table.options.movableRowsConnectedTables;this.connectionSelectorsElements=this.table.options.movableRowsConnectedElements;this.connection=this.connectionSelectorsTables||this.connectionSelectorsElements;};MoveRows.prototype.setHandle=function(handle){this.hasHandle=handle;};MoveRows.prototype.initializeGroupHeader=function(group){var self=this,config={};//inter table drag drop
  config.mouseup=function(e){self.tableRowDrop(e,row);}.bind(self);//same table drag drop
  config.mousemove=function(e){if(e.pageY-Tabulator.prototype.helpers.elOffset(group.element).top+self.table.rowManager.element.scrollTop>group.getHeight()/2){if(self.toRow!==group||!self.toRowAfter){var rowEl=group.getElement();rowEl.parentNode.insertBefore(self.placeholderElement,rowEl.nextSibling);self.moveRow(group,true);}}else {if(self.toRow!==group||self.toRowAfter){var rowEl=group.getElement();if(rowEl.previousSibling){rowEl.parentNode.insertBefore(self.placeholderElement,rowEl);self.moveRow(group,false);}}}}.bind(self);group.modules.moveRow=config;};MoveRows.prototype.initializeRow=function(row){var self=this,config={},rowEl;//inter table drag drop
  config.mouseup=function(e){self.tableRowDrop(e,row);}.bind(self);//same table drag drop
  config.mousemove=function(e){var rowEl=row.getElement();if(e.pageY-Tabulator.prototype.helpers.elOffset(rowEl).top+self.table.rowManager.element.scrollTop>row.getHeight()/2){if(self.toRow!==row||!self.toRowAfter){rowEl.parentNode.insertBefore(self.placeholderElement,rowEl.nextSibling);self.moveRow(row,true);}}else {if(self.toRow!==row||self.toRowAfter){rowEl.parentNode.insertBefore(self.placeholderElement,rowEl);self.moveRow(row,false);}}}.bind(self);if(!this.hasHandle){rowEl=row.getElement();rowEl.addEventListener("mousedown",function(e){if(e.which===1){self.checkTimeout=setTimeout(function(){self.startMove(e,row);},self.checkPeriod);}});rowEl.addEventListener("mouseup",function(e){if(e.which===1){if(self.checkTimeout){clearTimeout(self.checkTimeout);}}});this.bindTouchEvents(row,row.getElement());}row.modules.moveRow=config;};MoveRows.prototype.initializeCell=function(cell){var self=this,cellEl=cell.getElement(true);cellEl.addEventListener("mousedown",function(e){if(e.which===1){self.checkTimeout=setTimeout(function(){self.startMove(e,cell.row);},self.checkPeriod);}});cellEl.addEventListener("mouseup",function(e){if(e.which===1){if(self.checkTimeout){clearTimeout(self.checkTimeout);}}});this.bindTouchEvents(cell.row,cellEl);};MoveRows.prototype.bindTouchEvents=function(row,element){var self=this,startYMove=false,//shifting center position of the cell
  nextRow,prevRow,nextRowHeight,prevRowHeight,nextRowHeightLast,prevRowHeightLast;element.addEventListener("touchstart",function(e){self.checkTimeout=setTimeout(function(){self.touchMove=true;nextRow=row.nextRow();nextRowHeight=nextRow?nextRow.getHeight()/2:0;prevRow=row.prevRow();prevRowHeight=prevRow?prevRow.getHeight()/2:0;nextRowHeightLast=0;prevRowHeightLast=0;startYMove=false;self.startMove(e,row);},self.checkPeriod);},{passive:true});this.moving,this.toRow,this.toRowAfter;element.addEventListener("touchmove",function(e){var diff,moveToRow;if(self.moving){e.preventDefault();self.moveHover(e);if(!startYMove){startYMove=e.touches[0].pageY;}diff=e.touches[0].pageY-startYMove;if(diff>0){if(nextRow&&diff-nextRowHeightLast>nextRowHeight){moveToRow=nextRow;if(moveToRow!==row){startYMove=e.touches[0].pageY;moveToRow.getElement().parentNode.insertBefore(self.placeholderElement,moveToRow.getElement().nextSibling);self.moveRow(moveToRow,true);}}}else {if(prevRow&&-diff-prevRowHeightLast>prevRowHeight){moveToRow=prevRow;if(moveToRow!==row){startYMove=e.touches[0].pageY;moveToRow.getElement().parentNode.insertBefore(self.placeholderElement,moveToRow.getElement());self.moveRow(moveToRow,false);}}}if(moveToRow){nextRow=moveToRow.nextRow();nextRowHeightLast=nextRowHeight;nextRowHeight=nextRow?nextRow.getHeight()/2:0;prevRow=moveToRow.prevRow();prevRowHeightLast=prevRowHeight;prevRowHeight=prevRow?prevRow.getHeight()/2:0;}}});element.addEventListener("touchend",function(e){if(self.checkTimeout){clearTimeout(self.checkTimeout);}if(self.moving){self.endMove(e);self.touchMove=false;}});};MoveRows.prototype._bindMouseMove=function(){var self=this;self.table.rowManager.getDisplayRows().forEach(function(row){if((row.type==="row"||row.type==="group")&&row.modules.moveRow.mousemove){row.getElement().addEventListener("mousemove",row.modules.moveRow.mousemove);}});};MoveRows.prototype._unbindMouseMove=function(){var self=this;self.table.rowManager.getDisplayRows().forEach(function(row){if((row.type==="row"||row.type==="group")&&row.modules.moveRow.mousemove){row.getElement().removeEventListener("mousemove",row.modules.moveRow.mousemove);}});};MoveRows.prototype.startMove=function(e,row){var element=row.getElement();this.setStartPosition(e,row);this.moving=row;this.table.element.classList.add("tabulator-block-select");//create placeholder
  this.placeholderElement.style.width=row.getWidth()+"px";this.placeholderElement.style.height=row.getHeight()+"px";if(!this.connection){element.parentNode.insertBefore(this.placeholderElement,element);element.parentNode.removeChild(element);}else {this.table.element.classList.add("tabulator-movingrow-sending");this.connectToTables(row);}//create hover element
  this.hoverElement=element.cloneNode(true);this.hoverElement.classList.add("tabulator-moving");if(this.connection){document.body.appendChild(this.hoverElement);this.hoverElement.style.left="0";this.hoverElement.style.top="0";this.hoverElement.style.width=this.table.element.clientWidth+"px";this.hoverElement.style.whiteSpace="nowrap";this.hoverElement.style.overflow="hidden";this.hoverElement.style.pointerEvents="none";}else {this.table.rowManager.getTableElement().appendChild(this.hoverElement);this.hoverElement.style.left="0";this.hoverElement.style.top="0";this._bindMouseMove();}document.body.addEventListener("mousemove",this.moveHover);document.body.addEventListener("mouseup",this.endMove);this.moveHover(e);};MoveRows.prototype.setStartPosition=function(e,row){var pageX=this.touchMove?e.touches[0].pageX:e.pageX,pageY=this.touchMove?e.touches[0].pageY:e.pageY,element,position;element=row.getElement();if(this.connection){position=element.getBoundingClientRect();this.startX=position.left-pageX+window.pageXOffset;this.startY=position.top-pageY+window.pageYOffset;}else {this.startY=pageY-element.getBoundingClientRect().top;}};MoveRows.prototype.endMove=function(e){if(!e||e.which===1||this.touchMove){this._unbindMouseMove();if(!this.connection){this.placeholderElement.parentNode.insertBefore(this.moving.getElement(),this.placeholderElement.nextSibling);this.placeholderElement.parentNode.removeChild(this.placeholderElement);}this.hoverElement.parentNode.removeChild(this.hoverElement);this.table.element.classList.remove("tabulator-block-select");if(this.toRow){this.table.rowManager.moveRow(this.moving,this.toRow,this.toRowAfter);}this.moving=false;this.toRow=false;this.toRowAfter=false;document.body.removeEventListener("mousemove",this.moveHover);document.body.removeEventListener("mouseup",this.endMove);if(this.connection){this.table.element.classList.remove("tabulator-movingrow-sending");this.disconnectFromTables();}}};MoveRows.prototype.moveRow=function(row,after){this.toRow=row;this.toRowAfter=after;};MoveRows.prototype.moveHover=function(e){if(this.connection){this.moveHoverConnections.call(this,e);}else {this.moveHoverTable.call(this,e);}};MoveRows.prototype.moveHoverTable=function(e){var rowHolder=this.table.rowManager.getElement(),scrollTop=rowHolder.scrollTop,yPos=(this.touchMove?e.touches[0].pageY:e.pageY)-rowHolder.getBoundingClientRect().top+scrollTop;this.hoverElement.style.top=yPos-this.startY+"px";};MoveRows.prototype.moveHoverConnections=function(e){this.hoverElement.style.left=this.startX+(this.touchMove?e.touches[0].pageX:e.pageX)+"px";this.hoverElement.style.top=this.startY+(this.touchMove?e.touches[0].pageY:e.pageY)+"px";};MoveRows.prototype.elementRowDrop=function(e,element,row){if(this.table.options.movableRowsElementDrop){this.table.options.movableRowsElementDrop(e,element,row?row.getComponent():false);}};//establish connection with other tables
  MoveRows.prototype.connectToTables=function(row){var _this75=this;var connectionTables;if(this.connectionSelectorsTables){connectionTables=this.table.modules.comms.getConnections(this.connectionSelectorsTables);this.table.options.movableRowsSendingStart.call(this.table,connectionTables);this.table.modules.comms.send(this.connectionSelectorsTables,"moveRow","connect",{row:row});}if(this.connectionSelectorsElements){this.connectionElements=[];if(!Array.isArray(this.connectionSelectorsElements)){this.connectionSelectorsElements=[this.connectionSelectorsElements];}this.connectionSelectorsElements.forEach(function(query){if(typeof query==="string"){_this75.connectionElements=_this75.connectionElements.concat(Array.prototype.slice.call(document.querySelectorAll(query)));}else {_this75.connectionElements.push(query);}});this.connectionElements.forEach(function(element){var dropEvent=function dropEvent(e){_this75.elementRowDrop(e,element,_this75.moving);};element.addEventListener("mouseup",dropEvent);element.tabulatorElementDropEvent=dropEvent;element.classList.add("tabulator-movingrow-receiving");});}};//disconnect from other tables
  MoveRows.prototype.disconnectFromTables=function(){var connectionTables;if(this.connectionSelectorsTables){connectionTables=this.table.modules.comms.getConnections(this.connectionSelectorsTables);this.table.options.movableRowsSendingStop.call(this.table,connectionTables);this.table.modules.comms.send(this.connectionSelectorsTables,"moveRow","disconnect");}this.connectionElements.forEach(function(element){element.classList.remove("tabulator-movingrow-receiving");element.removeEventListener("mouseup",element.tabulatorElementDropEvent);delete element.tabulatorElementDropEvent;});};//accept incomming connection
  MoveRows.prototype.connect=function(table,row){var self=this;if(!this.connectedTable){this.connectedTable=table;this.connectedRow=row;this.table.element.classList.add("tabulator-movingrow-receiving");self.table.rowManager.getDisplayRows().forEach(function(row){if(row.type==="row"&&row.modules.moveRow&&row.modules.moveRow.mouseup){row.getElement().addEventListener("mouseup",row.modules.moveRow.mouseup);}});self.tableRowDropEvent=self.tableRowDrop.bind(self);self.table.element.addEventListener("mouseup",self.tableRowDropEvent);this.table.options.movableRowsReceivingStart.call(this.table,row,table);return true;}else {console.warn("Move Row Error - Table cannot accept connection, already connected to table:",this.connectedTable);return false;}};//close incomming connection
  MoveRows.prototype.disconnect=function(table){var self=this;if(table===this.connectedTable){this.connectedTable=false;this.connectedRow=false;this.table.element.classList.remove("tabulator-movingrow-receiving");self.table.rowManager.getDisplayRows().forEach(function(row){if(row.type==="row"&&row.modules.moveRow&&row.modules.moveRow.mouseup){row.getElement().removeEventListener("mouseup",row.modules.moveRow.mouseup);}});self.table.element.removeEventListener("mouseup",self.tableRowDropEvent);this.table.options.movableRowsReceivingStop.call(this.table,table);}else {console.warn("Move Row Error - trying to disconnect from non connected table");}};MoveRows.prototype.dropComplete=function(table,row,success){var sender=false;if(success){switch(_typeof(this.table.options.movableRowsSender)){case"string":sender=this.senders[this.table.options.movableRowsSender];break;case"function":sender=this.table.options.movableRowsSender;break;}if(sender){sender.call(this,this.moving.getComponent(),row?row.getComponent():undefined,table);}else {if(this.table.options.movableRowsSender){console.warn("Mover Row Error - no matching sender found:",this.table.options.movableRowsSender);}}this.table.options.movableRowsSent.call(this.table,this.moving.getComponent(),row?row.getComponent():undefined,table);}else {this.table.options.movableRowsSentFailed.call(this.table,this.moving.getComponent(),row?row.getComponent():undefined,table);}this.endMove();};MoveRows.prototype.tableRowDrop=function(e,row){var receiver=false,success=false;e.stopImmediatePropagation();switch(_typeof(this.table.options.movableRowsReceiver)){case"string":receiver=this.receivers[this.table.options.movableRowsReceiver];break;case"function":receiver=this.table.options.movableRowsReceiver;break;}if(receiver){success=receiver.call(this,this.connectedRow.getComponent(),row?row.getComponent():undefined,this.connectedTable);}else {console.warn("Mover Row Error - no matching receiver found:",this.table.options.movableRowsReceiver);}if(success){this.table.options.movableRowsReceived.call(this.table,this.connectedRow.getComponent(),row?row.getComponent():undefined,this.connectedTable);}else {this.table.options.movableRowsReceivedFailed.call(this.table,this.connectedRow.getComponent(),row?row.getComponent():undefined,this.connectedTable);}this.table.modules.comms.send(this.connectedTable,"moveRow","dropcomplete",{row:row,success:success});};MoveRows.prototype.receivers={insert:function insert(fromRow,toRow,fromTable){this.table.addRow(fromRow.getData(),undefined,toRow);return true;},add:function add(fromRow,toRow,fromTable){this.table.addRow(fromRow.getData());return true;},update:function update(fromRow,toRow,fromTable){if(toRow){toRow.update(fromRow.getData());return true;}return false;},replace:function replace(fromRow,toRow,fromTable){if(toRow){this.table.addRow(fromRow.getData(),undefined,toRow);toRow["delete"]();return true;}return false;}};MoveRows.prototype.senders={"delete":function _delete(fromRow,toRow,toTable){fromRow["delete"]();}};MoveRows.prototype.commsReceived=function(table,action,data){switch(action){case"connect":return this.connect(table,data.row);case"disconnect":return this.disconnect(table);case"dropcomplete":return this.dropComplete(table,data.row,data.success);}};Tabulator.prototype.registerModule("moveRow",MoveRows);var Mutator=function Mutator(table){this.table=table;//hold Tabulator object
  this.allowedTypes=["","data","edit","clipboard"];//list of muatation types
  this.enabled=true;};//initialize column mutator
  Mutator.prototype.initializeColumn=function(column){var self=this,match=false,config={};this.allowedTypes.forEach(function(type){var key="mutator"+(type.charAt(0).toUpperCase()+type.slice(1)),mutator;if(column.definition[key]){mutator=self.lookupMutator(column.definition[key]);if(mutator){match=true;config[key]={mutator:mutator,params:column.definition[key+"Params"]||{}};}}});if(match){column.modules.mutate=config;}};Mutator.prototype.lookupMutator=function(value){var mutator=false;//set column mutator
  switch(typeof value==='undefined'?'undefined':_typeof(value)){case"string":if(this.mutators[value]){mutator=this.mutators[value];}else {console.warn("Mutator Error - No such mutator found, ignoring: ",value);}break;case"function":mutator=value;break;}return mutator;};//apply mutator to row
  Mutator.prototype.transformRow=function(data,type,updatedData){var self=this,key="mutator"+(type.charAt(0).toUpperCase()+type.slice(1)),value;if(this.enabled){self.table.columnManager.traverse(function(column){var mutator,params,component;if(column.modules.mutate){mutator=column.modules.mutate[key]||column.modules.mutate.mutator||false;if(mutator){value=column.getFieldValue(typeof updatedData!=="undefined"?updatedData:data);if(type=="data"||typeof value!=="undefined"){component=column.getComponent();params=typeof mutator.params==="function"?mutator.params(value,data,type,component):mutator.params;column.setFieldValue(data,mutator.mutator(value,data,type,params,component));}}}});}return data;};//apply mutator to new cell value
  Mutator.prototype.transformCell=function(cell,value){var mutator=cell.column.modules.mutate.mutatorEdit||cell.column.modules.mutate.mutator||false,tempData={};if(mutator){tempData=Object.assign(tempData,cell.row.getData());cell.column.setFieldValue(tempData,value);return mutator.mutator(value,tempData,"edit",mutator.params,cell.getComponent());}else {return value;}};Mutator.prototype.enable=function(){this.enabled=true;};Mutator.prototype.disable=function(){this.enabled=false;};//default mutators
  Mutator.prototype.mutators={};Tabulator.prototype.registerModule("mutator",Mutator);var Page=function Page(table){this.table=table;//hold Tabulator object
  this.mode="local";this.progressiveLoad=false;this.size=0;this.page=1;this.count=5;this.max=1;this.displayIndex=0;//index in display pipeline
  this.initialLoad=true;this.pageSizes=[];this.dataReceivedNames={};this.dataSentNames={};this.createElements();};Page.prototype.createElements=function(){var button;this.element=document.createElement("span");this.element.classList.add("tabulator-paginator");this.pagesElement=document.createElement("span");this.pagesElement.classList.add("tabulator-pages");button=document.createElement("button");button.classList.add("tabulator-page");button.setAttribute("type","button");button.setAttribute("role","button");button.setAttribute("aria-label","");button.setAttribute("title","");this.firstBut=button.cloneNode(true);this.firstBut.setAttribute("data-page","first");this.prevBut=button.cloneNode(true);this.prevBut.setAttribute("data-page","prev");this.nextBut=button.cloneNode(true);this.nextBut.setAttribute("data-page","next");this.lastBut=button.cloneNode(true);this.lastBut.setAttribute("data-page","last");if(this.table.options.paginationSizeSelector){this.pageSizeSelect=document.createElement("select");this.pageSizeSelect.classList.add("tabulator-page-size");}};Page.prototype.generatePageSizeSelectList=function(){var _this76=this;var pageSizes=[];if(this.pageSizeSelect){if(Array.isArray(this.table.options.paginationSizeSelector)){pageSizes=this.table.options.paginationSizeSelector;this.pageSizes=pageSizes;if(this.pageSizes.indexOf(this.size)==-1){pageSizes.unshift(this.size);}}else {if(this.pageSizes.indexOf(this.size)==-1){pageSizes=[];for(var _i14=1;_i14<5;_i14++){pageSizes.push(this.size*_i14);}this.pageSizes=pageSizes;}else {pageSizes=this.pageSizes;}}while(this.pageSizeSelect.firstChild){this.pageSizeSelect.removeChild(this.pageSizeSelect.firstChild);}pageSizes.forEach(function(item){var itemEl=document.createElement("option");itemEl.value=item;if(item===true){_this76.table.modules.localize.bind("pagination|all",function(value){itemEl.innerHTML=value;});}else {itemEl.innerHTML=item;}_this76.pageSizeSelect.appendChild(itemEl);});this.pageSizeSelect.value=this.size;}};//setup pageination
  Page.prototype.initialize=function(hidden){var self=this,pageSelectLabel,testElRow,testElCell;//update param names
  this.dataSentNames=Object.assign({},this.paginationDataSentNames);this.dataSentNames=Object.assign(this.dataSentNames,this.table.options.paginationDataSent);this.dataReceivedNames=Object.assign({},this.paginationDataReceivedNames);this.dataReceivedNames=Object.assign(this.dataReceivedNames,this.table.options.paginationDataReceived);//build pagination element
  //bind localizations
  self.table.modules.localize.bind("pagination|first",function(value){self.firstBut.innerHTML=value;});self.table.modules.localize.bind("pagination|first_title",function(value){self.firstBut.setAttribute("aria-label",value);self.firstBut.setAttribute("title",value);});self.table.modules.localize.bind("pagination|prev",function(value){self.prevBut.innerHTML=value;});self.table.modules.localize.bind("pagination|prev_title",function(value){self.prevBut.setAttribute("aria-label",value);self.prevBut.setAttribute("title",value);});self.table.modules.localize.bind("pagination|next",function(value){self.nextBut.innerHTML=value;});self.table.modules.localize.bind("pagination|next_title",function(value){self.nextBut.setAttribute("aria-label",value);self.nextBut.setAttribute("title",value);});self.table.modules.localize.bind("pagination|last",function(value){self.lastBut.innerHTML=value;});self.table.modules.localize.bind("pagination|last_title",function(value){self.lastBut.setAttribute("aria-label",value);self.lastBut.setAttribute("title",value);});//click bindings
  self.firstBut.addEventListener("click",function(){self.setPage(1).then(function(){})["catch"](function(){});});self.prevBut.addEventListener("click",function(){self.previousPage().then(function(){})["catch"](function(){});});self.nextBut.addEventListener("click",function(){self.nextPage().then(function(){})["catch"](function(){});});self.lastBut.addEventListener("click",function(){self.setPage(self.max).then(function(){})["catch"](function(){});});if(self.table.options.paginationElement){self.element=self.table.options.paginationElement;}if(this.pageSizeSelect){pageSelectLabel=document.createElement("label");self.table.modules.localize.bind("pagination|page_size",function(value){self.pageSizeSelect.setAttribute("aria-label",value);self.pageSizeSelect.setAttribute("title",value);pageSelectLabel.innerHTML=value;});self.element.appendChild(pageSelectLabel);self.element.appendChild(self.pageSizeSelect);self.pageSizeSelect.addEventListener("change",function(e){self.setPageSize(self.pageSizeSelect.value=="true"?true:self.pageSizeSelect.value);self.setPage(1).then(function(){})["catch"](function(){});});}//append to DOM
  self.element.appendChild(self.firstBut);self.element.appendChild(self.prevBut);self.element.appendChild(self.pagesElement);self.element.appendChild(self.nextBut);self.element.appendChild(self.lastBut);if(!self.table.options.paginationElement&&!hidden){self.table.footerManager.append(self.element,self);}//set default values
  self.mode=self.table.options.pagination;if(self.table.options.paginationSize){self.size=self.table.options.paginationSize;}else {testElRow=document.createElement("div");testElRow.classList.add("tabulator-row");testElRow.style.visibility=hidden;testElCell=document.createElement("div");testElCell.classList.add("tabulator-cell");testElCell.innerHTML="Page Row Test";testElRow.appendChild(testElCell);self.table.rowManager.getTableElement().appendChild(testElRow);self.size=Math.floor(self.table.rowManager.getElement().clientHeight/testElRow.offsetHeight);self.table.rowManager.getTableElement().removeChild(testElRow);}// self.page = self.table.options.paginationInitialPage || 1;
  self.count=self.table.options.paginationButtonCount;self.generatePageSizeSelectList();};Page.prototype.initializeProgressive=function(mode){this.initialize(true);this.mode="progressive_"+mode;this.progressiveLoad=true;};Page.prototype.setDisplayIndex=function(index){this.displayIndex=index;};Page.prototype.getDisplayIndex=function(){return this.displayIndex;};//calculate maximum page from number of rows
  Page.prototype.setMaxRows=function(rowCount){if(!rowCount){this.max=1;}else {this.max=this.size===true?1:Math.ceil(rowCount/this.size);}if(this.page>this.max){this.page=this.max;}};//reset to first page without triggering action
  Page.prototype.reset=function(force,columnsChanged){if(this.mode=="local"||force){this.page=1;}if(columnsChanged){this.initialLoad=true;}return true;};//set the maxmum page
  Page.prototype.setMaxPage=function(max){max=parseInt(max);this.max=max||1;if(this.page>this.max){this.page=this.max;this.trigger();}};//set current page number
  Page.prototype.setPage=function(page){var _this77=this;var self=this;switch(page){case"first":return this.setPage(1);case"prev":return this.previousPage();case"next":return this.nextPage();case"last":return this.setPage(this.max);}return new Promise(function(resolve,reject){page=parseInt(page);if(page>0&&page<=_this77.max||_this77.mode!=="local"){_this77.page=page;_this77.trigger().then(function(){resolve();})["catch"](function(){reject();});if(self.table.options.persistence&&self.table.modExists("persistence",true)&&self.table.modules.persistence.config.page){self.table.modules.persistence.save("page");}}else {console.warn("Pagination Error - Requested page is out of range of 1 - "+_this77.max+":",page);reject();}});};Page.prototype.setPageToRow=function(row){var _this78=this;return new Promise(function(resolve,reject){var rows=_this78.table.rowManager.getDisplayRows(_this78.displayIndex-1);var index=rows.indexOf(row);if(index>-1){var page=_this78.size===true?1:Math.ceil((index+1)/_this78.size);_this78.setPage(page).then(function(){resolve();})["catch"](function(){reject();});}else {console.warn("Pagination Error - Requested row is not visible");reject();}});};Page.prototype.setPageSize=function(size){if(size!==true){size=parseInt(size);}if(size>0){this.size=size;}if(this.pageSizeSelect){// this.pageSizeSelect.value = size;
  this.generatePageSizeSelectList();}if(this.table.options.persistence&&this.table.modExists("persistence",true)&&this.table.modules.persistence.config.page){this.table.modules.persistence.save("page");}};//setup the pagination buttons
  Page.prototype._setPageButtons=function(){var self=this;var leftSize=Math.floor((this.count-1)/2);var rightSize=Math.ceil((this.count-1)/2);var min=this.max-this.page+leftSize+1<this.count?this.max-this.count+1:Math.max(this.page-leftSize,1);var max=this.page<=rightSize?Math.min(this.count,this.max):Math.min(this.page+rightSize,this.max);while(self.pagesElement.firstChild){self.pagesElement.removeChild(self.pagesElement.firstChild);}if(self.page==1){self.firstBut.disabled=true;self.prevBut.disabled=true;}else {self.firstBut.disabled=false;self.prevBut.disabled=false;}if(self.page==self.max){self.lastBut.disabled=true;self.nextBut.disabled=true;}else {self.lastBut.disabled=false;self.nextBut.disabled=false;}for(var _i15=min;_i15<=max;_i15++){if(_i15>0&&_i15<=self.max){self.pagesElement.appendChild(self._generatePageButton(_i15));}}this.footerRedraw();};Page.prototype._generatePageButton=function(page){var self=this,button=document.createElement("button");button.classList.add("tabulator-page");if(page==self.page){button.classList.add("active");}button.setAttribute("type","button");button.setAttribute("role","button");self.table.modules.localize.bind("pagination|page_title",function(value){button.setAttribute("aria-label",value+" "+page);button.setAttribute("title",value+" "+page);});button.setAttribute("data-page",page);button.textContent=page;button.addEventListener("click",function(e){self.setPage(page).then(function(){})["catch"](function(){});});return button;};//previous page
  Page.prototype.previousPage=function(){var _this79=this;return new Promise(function(resolve,reject){if(_this79.page>1){_this79.page--;_this79.trigger().then(function(){resolve();})["catch"](function(){reject();});if(_this79.table.options.persistence&&_this79.table.modExists("persistence",true)&&_this79.table.modules.persistence.config.page){_this79.table.modules.persistence.save("page");}}else {console.warn("Pagination Error - Previous page would be less than page 1:",0);reject();}});};//next page
  Page.prototype.nextPage=function(){var _this80=this;return new Promise(function(resolve,reject){if(_this80.page<_this80.max){_this80.page++;_this80.trigger().then(function(){resolve();})["catch"](function(){reject();});if(_this80.table.options.persistence&&_this80.table.modExists("persistence",true)&&_this80.table.modules.persistence.config.page){_this80.table.modules.persistence.save("page");}}else {if(!_this80.progressiveLoad){console.warn("Pagination Error - Next page would be greater than maximum page of "+_this80.max+":",_this80.max+1);}reject();}});};//return current page number
  Page.prototype.getPage=function(){return this.page;};//return max page number
  Page.prototype.getPageMax=function(){return this.max;};Page.prototype.getPageSize=function(size){return this.size;};Page.prototype.getMode=function(){return this.mode;};//return appropriate rows for current page
  Page.prototype.getRows=function(data){var output,start,end;if(this.mode=="local"){output=[];if(this.size===true){start=0;end=data.length;}else {start=this.size*(this.page-1);end=start+parseInt(this.size);}this._setPageButtons();for(var _i16=start;_i16<end;_i16++){if(data[_i16]){output.push(data[_i16]);}}return output;}else {this._setPageButtons();return data.slice(0);}};Page.prototype.trigger=function(){var _this81=this;var left;return new Promise(function(resolve,reject){switch(_this81.mode){case"local":left=_this81.table.rowManager.scrollLeft;_this81.table.rowManager.refreshActiveData("page");_this81.table.rowManager.scrollHorizontal(left);_this81.table.options.pageLoaded.call(_this81.table,_this81.getPage());resolve();break;case"remote":case"progressive_load":case"progressive_scroll":_this81.table.modules.ajax.blockActiveRequest();_this81._getRemotePage().then(function(){resolve();})["catch"](function(){reject();});break;default:console.warn("Pagination Error - no such pagination mode:",_this81.mode);reject();}});};Page.prototype._getRemotePage=function(){var _this82=this;var self=this,oldParams,pageParams;return new Promise(function(resolve,reject){if(!self.table.modExists("ajax",true)){reject();}//record old params and restore after request has been made
  oldParams=Tabulator.prototype.helpers.deepClone(self.table.modules.ajax.getParams()||{});pageParams=self.table.modules.ajax.getParams();//configure request params
  pageParams[_this82.dataSentNames.page]=self.page;//set page size if defined
  if(_this82.size){pageParams[_this82.dataSentNames.size]=_this82.size;}//set sort data if defined
  if(_this82.table.options.ajaxSorting&&_this82.table.modExists("sort")){var sorters=self.table.modules.sort.getSort();sorters.forEach(function(item){delete item.column;});pageParams[_this82.dataSentNames.sorters]=sorters;}//set filter data if defined
  if(_this82.table.options.ajaxFiltering&&_this82.table.modExists("filter")){var filters=self.table.modules.filter.getFilters(true,true);pageParams[_this82.dataSentNames.filters]=filters;}self.table.modules.ajax.setParams(pageParams);self.table.modules.ajax.sendRequest(_this82.progressiveLoad).then(function(data){self._parseRemoteData(data);resolve();})["catch"](function(e){reject();});self.table.modules.ajax.setParams(oldParams);});};Page.prototype._parseRemoteData=function(data){var self=this,left,data,margin;if(typeof data[this.dataReceivedNames.last_page]==="undefined"){console.warn("Remote Pagination Error - Server response missing '"+this.dataReceivedNames.last_page+"' property");}if(data[this.dataReceivedNames.data]){this.max=parseInt(data[this.dataReceivedNames.last_page])||1;if(this.progressiveLoad){switch(this.mode){case"progressive_load":if(this.page==1){this.table.rowManager.setData(data[this.dataReceivedNames.data],false,this.initialLoad&&this.page==1);}else {this.table.rowManager.addRows(data[this.dataReceivedNames.data]);}if(this.page<this.max){setTimeout(function(){self.nextPage().then(function(){})["catch"](function(){});},self.table.options.ajaxProgressiveLoadDelay);}break;case"progressive_scroll":data=this.table.rowManager.getData().concat(data[this.dataReceivedNames.data]);this.table.rowManager.setData(data,true,this.initialLoad&&this.page==1);margin=this.table.options.ajaxProgressiveLoadScrollMargin||this.table.rowManager.element.clientHeight*2;if(self.table.rowManager.element.scrollHeight<=self.table.rowManager.element.clientHeight+margin){self.nextPage().then(function(){})["catch"](function(){});}break;}}else {left=this.table.rowManager.scrollLeft;this.table.rowManager.setData(data[this.dataReceivedNames.data],false,this.initialLoad&&this.page==1);this.table.rowManager.scrollHorizontal(left);this.table.columnManager.scrollHorizontal(left);this.table.options.pageLoaded.call(this.table,this.getPage());}this.initialLoad=false;}else {console.warn("Remote Pagination Error - Server response missing '"+this.dataReceivedNames.data+"' property");}};//handle the footer element being redrawn
  Page.prototype.footerRedraw=function(){var footer=this.table.footerManager.element;if(Math.ceil(footer.clientWidth)-footer.scrollWidth<0){this.pagesElement.style.display='none';}else {this.pagesElement.style.display='';if(Math.ceil(footer.clientWidth)-footer.scrollWidth<0){this.pagesElement.style.display='none';}}};//set the paramter names for pagination requests
  Page.prototype.paginationDataSentNames={"page":"page","size":"size","sorters":"sorters",// "sort_dir":"sort_dir",
  "filters":"filters"// "filter_value":"filter_value",
  // "filter_type":"filter_type",
  };//set the property names for pagination responses
  Page.prototype.paginationDataReceivedNames={"current_page":"current_page","last_page":"last_page","data":"data"};Tabulator.prototype.registerModule("page",Page);var Persistence=function Persistence(table){this.table=table;//hold Tabulator object
  this.mode="";this.id="";// this.persistProps = ["field", "width", "visible"];
  this.defWatcherBlock=false;this.config={};this.readFunc=false;this.writeFunc=false;};// Test for whether localStorage is available for use.
  Persistence.prototype.localStorageTest=function(){var testKey="_tabulator_test";try{window.localStorage.setItem(testKey,testKey);window.localStorage.removeItem(testKey);return true;}catch(e){return false;}};//setup parameters
  Persistence.prototype.initialize=function(){//determine persistent layout storage type
  var mode=this.table.options.persistenceMode,id=this.table.options.persistenceID,retreivedData;this.mode=mode!==true?mode:this.localStorageTest()?"local":"cookie";if(this.table.options.persistenceReaderFunc){if(typeof this.table.options.persistenceReaderFunc==="function"){this.readFunc=this.table.options.persistenceReaderFunc;}else {if(this.readers[this.table.options.persistenceReaderFunc]){this.readFunc=this.readers[this.table.options.persistenceReaderFunc];}else {console.warn("Persistence Read Error - invalid reader set",this.table.options.persistenceReaderFunc);}}}else {if(this.readers[this.mode]){this.readFunc=this.readers[this.mode];}else {console.warn("Persistence Read Error - invalid reader set",this.mode);}}if(this.table.options.persistenceWriterFunc){if(typeof this.table.options.persistenceWriterFunc==="function"){this.writeFunc=this.table.options.persistenceWriterFunc;}else {if(this.readers[this.table.options.persistenceWriterFunc]){this.writeFunc=this.readers[this.table.options.persistenceWriterFunc];}else {console.warn("Persistence Write Error - invalid reader set",this.table.options.persistenceWriterFunc);}}}else {if(this.writers[this.mode]){this.writeFunc=this.writers[this.mode];}else {console.warn("Persistence Write Error - invalid writer set",this.mode);}}//set storage tag
  this.id="tabulator-"+(id||this.table.element.getAttribute("id")||"");this.config={sort:this.table.options.persistence===true||this.table.options.persistence.sort,filter:this.table.options.persistence===true||this.table.options.persistence.filter,group:this.table.options.persistence===true||this.table.options.persistence.group,page:this.table.options.persistence===true||this.table.options.persistence.page,columns:this.table.options.persistence===true?["title","width","visible"]:this.table.options.persistence.columns};//load pagination data if needed
  if(this.config.page){retreivedData=this.retreiveData("page");if(retreivedData){if(typeof retreivedData.paginationSize!=="undefined"&&(this.config.page===true||this.config.page.size)){this.table.options.paginationSize=retreivedData.paginationSize;}if(typeof retreivedData.paginationInitialPage!=="undefined"&&(this.config.page===true||this.config.page.page)){this.table.options.paginationInitialPage=retreivedData.paginationInitialPage;}}}//load group data if needed
  if(this.config.group){retreivedData=this.retreiveData("group");if(retreivedData){if(typeof retreivedData.groupBy!=="undefined"&&(this.config.group===true||this.config.group.groupBy)){this.table.options.groupBy=retreivedData.groupBy;}if(typeof retreivedData.groupStartOpen!=="undefined"&&(this.config.group===true||this.config.group.groupStartOpen)){this.table.options.groupStartOpen=retreivedData.groupStartOpen;}if(typeof retreivedData.groupHeader!=="undefined"&&(this.config.group===true||this.config.group.groupHeader)){this.table.options.groupHeader=retreivedData.groupHeader;}}}if(this.config.columns){this.table.options.columns=this.load("columns",this.table.options.columns);}};Persistence.prototype.initializeColumn=function(column){var self=this,def,keys;if(this.config.columns){this.defWatcherBlock=true;def=column.getDefinition();keys=this.config.columns===true?Object.keys(def):this.config.columns;keys.forEach(function(key){var props=Object.getOwnPropertyDescriptor(def,key);var value=def[key];if(props){Object.defineProperty(def,key,{set:function set(newValue){value=newValue;if(!self.defWatcherBlock){self.save("columns");}if(props.set){props.set(newValue);}},get:function get(){if(props.get){props.get();}return value;}});}});this.defWatcherBlock=false;}};//load saved definitions
  Persistence.prototype.load=function(type,current){var data=this.retreiveData(type);if(current){data=data?this.mergeDefinition(current,data):current;}return data;};//retreive data from memory
  Persistence.prototype.retreiveData=function(type){return this.readFunc?this.readFunc(this.id,type):false;};//merge old and new column definitions
  Persistence.prototype.mergeDefinition=function(oldCols,newCols){var self=this,output=[];// oldCols = oldCols || [];
  newCols=newCols||[];newCols.forEach(function(column,to){var from=self._findColumn(oldCols,column),keys;if(from){if(self.config.columns===true||self.config.columns==undefined){keys=Object.keys(from);keys.push("width");}else {keys=self.config.columns;}keys.forEach(function(key){if(key!=="columns"&&typeof column[key]!=="undefined"){from[key]=column[key];}});if(from.columns){from.columns=self.mergeDefinition(from.columns,column.columns);}output.push(from);}});oldCols.forEach(function(column,i){var from=self._findColumn(newCols,column);if(!from){if(output.length>i){output.splice(i,0,column);}else {output.push(column);}}});return output;};//find matching columns
  Persistence.prototype._findColumn=function(columns,subject){var type=subject.columns?"group":subject.field?"field":"object";return columns.find(function(col){switch(type){case"group":return col.title===subject.title&&col.columns.length===subject.columns.length;case"field":return col.field===subject.field;case"object":return col===subject;}});};//save data
  Persistence.prototype.save=function(type){var data={};switch(type){case"columns":data=this.parseColumns(this.table.columnManager.getColumns());break;case"filter":data=this.table.modules.filter.getFilters();break;case"sort":data=this.validateSorters(this.table.modules.sort.getSort());break;case"group":data=this.getGroupConfig();break;case"page":data=this.getPageConfig();break;}if(this.writeFunc){this.writeFunc(this.id,type,data);}};//ensure sorters contain no function data
  Persistence.prototype.validateSorters=function(data){data.forEach(function(item){item.column=item.field;delete item.field;});return data;};Persistence.prototype.getGroupConfig=function(){var data={};if(this.config.group){if(this.config.group===true||this.config.group.groupBy){data.groupBy=this.table.options.groupBy;}if(this.config.group===true||this.config.group.groupStartOpen){data.groupStartOpen=this.table.options.groupStartOpen;}if(this.config.group===true||this.config.group.groupHeader){data.groupHeader=this.table.options.groupHeader;}}return data;};Persistence.prototype.getPageConfig=function(){var data={};if(this.config.page){if(this.config.page===true||this.config.page.size){data.paginationSize=this.table.modules.page.getPageSize();}if(this.config.page===true||this.config.page.page){data.paginationInitialPage=this.table.modules.page.getPage();}}return data;};//parse columns for data to store
  Persistence.prototype.parseColumns=function(columns){var self=this,definitions=[],excludedKeys=["headerContextMenu","headerMenu","contextMenu","clickMenu"];columns.forEach(function(column){var defStore={},colDef=column.getDefinition(),keys;if(column.isGroup){defStore.title=colDef.title;defStore.columns=self.parseColumns(column.getColumns());}else {defStore.field=column.getField();if(self.config.columns===true||self.config.columns==undefined){keys=Object.keys(colDef);keys.push("width");}else {keys=self.config.columns;}keys.forEach(function(key){switch(key){case"width":defStore.width=column.getWidth();break;case"visible":defStore.visible=column.visible;break;default:if(typeof colDef[key]!=="function"&&excludedKeys.indexOf(key)===-1){defStore[key]=colDef[key];}}});}definitions.push(defStore);});return definitions;};// read peristence information from storage
  Persistence.prototype.readers={local:function local(id,type){var data=localStorage.getItem(id+"-"+type);return data?JSON.parse(data):false;},cookie:function cookie(id,type){var cookie=document.cookie,key=id+"-"+type,cookiePos=cookie.indexOf(key+"="),end,data;//if cookie exists, decode and load column data into tabulator
  if(cookiePos>-1){cookie=cookie.substr(cookiePos);end=cookie.indexOf(";");if(end>-1){cookie=cookie.substr(0,end);}data=cookie.replace(key+"=","");}return data?JSON.parse(data):false;}};//write persistence information to storage
  Persistence.prototype.writers={local:function local(id,type,data){localStorage.setItem(id+"-"+type,JSON.stringify(data));},cookie:function cookie(id,type,data){var expireDate=new Date();expireDate.setDate(expireDate.getDate()+10000);document.cookie=id+"-"+type+"="+JSON.stringify(data)+"; expires="+expireDate.toUTCString();}};Tabulator.prototype.registerModule("persistence",Persistence);var Print=function Print(table){this.table=table;//hold Tabulator object
  this.element=false;this.manualBlock=false;};Print.prototype.initialize=function(){window.addEventListener("beforeprint",this.replaceTable.bind(this));window.addEventListener("afterprint",this.cleanup.bind(this));};Print.prototype.replaceTable=function(){if(!this.manualBlock){this.element=document.createElement("div");this.element.classList.add("tabulator-print-table");this.element.appendChild(this.table.modules["export"].genereateTable(this.table.options.printConfig,this.table.options.printStyled,this.table.options.printRowRange,"print"));this.table.element.style.display="none";this.table.element.parentNode.insertBefore(this.element,this.table.element);}};Print.prototype.cleanup=function(){document.body.classList.remove("tabulator-print-fullscreen-hide");if(this.element&&this.element.parentNode){this.element.parentNode.removeChild(this.element);this.table.element.style.display="";}};Print.prototype.printFullscreen=function(visible,style,config){var scrollX=window.scrollX,scrollY=window.scrollY,headerEl=document.createElement("div"),footerEl=document.createElement("div"),tableEl=this.table.modules["export"].genereateTable(typeof config!="undefined"?config:this.table.options.printConfig,typeof style!="undefined"?style:this.table.options.printStyled,visible,"print"),headerContent,footerContent;this.manualBlock=true;this.element=document.createElement("div");this.element.classList.add("tabulator-print-fullscreen");if(this.table.options.printHeader){headerEl.classList.add("tabulator-print-header");headerContent=typeof this.table.options.printHeader=="function"?this.table.options.printHeader.call(this.table):this.table.options.printHeader;if(typeof headerContent=="string"){headerEl.innerHTML=headerContent;}else {headerEl.appendChild(headerContent);}this.element.appendChild(headerEl);}this.element.appendChild(tableEl);if(this.table.options.printFooter){footerEl.classList.add("tabulator-print-footer");footerContent=typeof this.table.options.printFooter=="function"?this.table.options.printFooter.call(this.table):this.table.options.printFooter;if(typeof footerContent=="string"){footerEl.innerHTML=footerContent;}else {footerEl.appendChild(footerContent);}this.element.appendChild(footerEl);}document.body.classList.add("tabulator-print-fullscreen-hide");document.body.appendChild(this.element);if(this.table.options.printFormatter){this.table.options.printFormatter(this.element,tableEl);}window.print();this.cleanup();window.scrollTo(scrollX,scrollY);this.manualBlock=false;};Tabulator.prototype.registerModule("print",Print);var ReactiveData=function ReactiveData(table){this.table=table;//hold Tabulator object
  this.data=false;this.blocked=false;//block reactivity while performing update
  this.origFuncs={};// hold original data array functions to allow replacement after data is done with
  this.currentVersion=0;};ReactiveData.prototype.watchData=function(data){var self=this,version;this.currentVersion++;version=this.currentVersion;self.unwatchData();self.data=data;//override array push function
  self.origFuncs.push=data.push;Object.defineProperty(self.data,"push",{enumerable:false,configurable:true,value:function value(){var args=Array.from(arguments);if(!self.blocked&&version===self.currentVersion){args.forEach(function(arg){self.table.rowManager.addRowActual(arg,false);});}return self.origFuncs.push.apply(data,arguments);}});//override array unshift function
  self.origFuncs.unshift=data.unshift;Object.defineProperty(self.data,"unshift",{enumerable:false,configurable:true,value:function value(){var args=Array.from(arguments);if(!self.blocked&&version===self.currentVersion){args.forEach(function(arg){self.table.rowManager.addRowActual(arg,true);});}return self.origFuncs.unshift.apply(data,arguments);}});//override array shift function
  self.origFuncs.shift=data.shift;Object.defineProperty(self.data,"shift",{enumerable:false,configurable:true,value:function value(){var row;if(!self.blocked&&version===self.currentVersion){if(self.data.length){row=self.table.rowManager.getRowFromDataObject(self.data[0]);if(row){row.deleteActual();}}}return self.origFuncs.shift.call(data);}});//override array pop function
  self.origFuncs.pop=data.pop;Object.defineProperty(self.data,"pop",{enumerable:false,configurable:true,value:function value(){var row;if(!self.blocked&&version===self.currentVersion){if(self.data.length){row=self.table.rowManager.getRowFromDataObject(self.data[self.data.length-1]);if(row){row.deleteActual();}}}return self.origFuncs.pop.call(data);}});//override array splice function
  self.origFuncs.splice=data.splice;Object.defineProperty(self.data,"splice",{enumerable:false,configurable:true,value:function value(){var args=Array.from(arguments),start=args[0]<0?data.length+args[0]:args[0],end=args[1],newRows=args[2]?args.slice(2):false,startRow;if(!self.blocked&&version===self.currentVersion){//add new rows
  if(newRows){startRow=data[start]?self.table.rowManager.getRowFromDataObject(data[start]):false;if(startRow){newRows.forEach(function(rowData){self.table.rowManager.addRowActual(rowData,true,startRow,true);});}else {newRows=newRows.slice().reverse();newRows.forEach(function(rowData){self.table.rowManager.addRowActual(rowData,true,false,true);});}}//delete removed rows
  if(end!==0){var oldRows=data.slice(start,typeof args[1]==="undefined"?args[1]:start+end);oldRows.forEach(function(rowData,i){var row=self.table.rowManager.getRowFromDataObject(rowData);if(row){row.deleteActual(i!==oldRows.length-1);}});}if(newRows||end!==0){self.table.rowManager.reRenderInPosition();}}return self.origFuncs.splice.apply(data,arguments);}});};ReactiveData.prototype.unwatchData=function(){if(this.data!==false){for(var key in this.origFuncs){Object.defineProperty(this.data,key,{enumerable:true,configurable:true,writable:true,value:this.origFuncs.key});}}};ReactiveData.prototype.watchRow=function(row){var data=row.getData();this.blocked=true;for(var key in data){this.watchKey(row,data,key);}if(this.table.options.dataTree){this.watchTreeChildren(row);}this.blocked=false;};ReactiveData.prototype.watchTreeChildren=function(row){var self=this,childField=row.getData()[this.table.options.dataTreeChildField],origFuncs={};function rebuildTree(){self.table.modules.dataTree.initializeRow(row);self.table.modules.dataTree.layoutRow(row);self.table.rowManager.refreshActiveData("tree",false,true);}if(childField){origFuncs.push=childField.push;Object.defineProperty(childField,"push",{enumerable:false,configurable:true,value:function value(){var result=origFuncs.push.apply(childField,arguments);rebuildTree();return result;}});origFuncs.unshift=childField.unshift;Object.defineProperty(childField,"unshift",{enumerable:false,configurable:true,value:function value(){var result=origFuncs.unshift.apply(childField,arguments);rebuildTree();return result;}});origFuncs.shift=childField.shift;Object.defineProperty(childField,"shift",{enumerable:false,configurable:true,value:function value(){var result=origFuncs.shift.call(childField);rebuildTree();return result;}});origFuncs.pop=childField.pop;Object.defineProperty(childField,"pop",{enumerable:false,configurable:true,value:function value(){var result=origFuncs.pop.call(childField);rebuildTree();return result;}});origFuncs.splice=childField.splice;Object.defineProperty(childField,"splice",{enumerable:false,configurable:true,value:function value(){var result=origFuncs.splice.apply(childField,arguments);rebuildTree();return result;}});}};ReactiveData.prototype.watchKey=function(row,data,key){var self=this,props=Object.getOwnPropertyDescriptor(data,key),value=data[key],version=this.currentVersion;Object.defineProperty(data,key,{set:function set(newValue){value=newValue;if(!self.blocked&&version===self.currentVersion){var update={};update[key]=newValue;row.updateData(update);}if(props.set){props.set(newValue);}},get:function get(){if(props.get){props.get();}return value;}});};ReactiveData.prototype.unwatchRow=function(row){var data=row.getData();for(var key in data){Object.defineProperty(data,key,{value:data[key]});}};ReactiveData.prototype.block=function(){this.blocked=true;};ReactiveData.prototype.unblock=function(){this.blocked=false;};Tabulator.prototype.registerModule("reactiveData",ReactiveData);var ResizeColumns=function ResizeColumns(table){this.table=table;//hold Tabulator object
  this.startColumn=false;this.startX=false;this.startWidth=false;this.handle=null;this.prevHandle=null;};ResizeColumns.prototype.initializeColumn=function(type,column,element){var self=this,variableHeight=false,mode=this.table.options.resizableColumns;//set column resize mode
  if(type==="header"){variableHeight=column.definition.formatter=="textarea"||column.definition.variableHeight;column.modules.resize={variableHeight:variableHeight};}if(mode===true||mode==type){var handle=document.createElement('div');handle.className="tabulator-col-resize-handle";var prevHandle=document.createElement('div');prevHandle.className="tabulator-col-resize-handle prev";handle.addEventListener("click",function(e){e.stopPropagation();});var handleDown=function handleDown(e){var nearestColumn=column.getLastColumn();if(nearestColumn&&self._checkResizability(nearestColumn)){self.startColumn=column;self._mouseDown(e,nearestColumn,handle);}};handle.addEventListener("mousedown",handleDown);handle.addEventListener("touchstart",handleDown,{passive:true});//reszie column on  double click
  handle.addEventListener("dblclick",function(e){var col=column.getLastColumn();if(col&&self._checkResizability(col)){e.stopPropagation();col.reinitializeWidth(true);}});prevHandle.addEventListener("click",function(e){e.stopPropagation();});var prevHandleDown=function prevHandleDown(e){var nearestColumn,colIndex,prevColumn;nearestColumn=column.getFirstColumn();if(nearestColumn){colIndex=self.table.columnManager.findColumnIndex(nearestColumn);prevColumn=colIndex>0?self.table.columnManager.getColumnByIndex(colIndex-1):false;if(prevColumn&&self._checkResizability(prevColumn)){self.startColumn=column;self._mouseDown(e,prevColumn,prevHandle);}}};prevHandle.addEventListener("mousedown",prevHandleDown);prevHandle.addEventListener("touchstart",prevHandleDown,{passive:true});//resize column on double click
  prevHandle.addEventListener("dblclick",function(e){var nearestColumn,colIndex,prevColumn;nearestColumn=column.getFirstColumn();if(nearestColumn){colIndex=self.table.columnManager.findColumnIndex(nearestColumn);prevColumn=colIndex>0?self.table.columnManager.getColumnByIndex(colIndex-1):false;if(prevColumn&&self._checkResizability(prevColumn)){e.stopPropagation();prevColumn.reinitializeWidth(true);}}});element.appendChild(handle);element.appendChild(prevHandle);}};ResizeColumns.prototype._checkResizability=function(column){return typeof column.definition.resizable!="undefined"?column.definition.resizable:this.table.options.resizableColumns;};ResizeColumns.prototype._mouseDown=function(e,column,handle){var self=this;self.table.element.classList.add("tabulator-block-select");function mouseMove(e){// self.table.columnManager.tempScrollBlock();
  if(self.table.rtl){column.setWidth(self.startWidth-((typeof e.screenX==="undefined"?e.touches[0].screenX:e.screenX)-self.startX));}else {column.setWidth(self.startWidth+((typeof e.screenX==="undefined"?e.touches[0].screenX:e.screenX)-self.startX));}if(self.table.options.virtualDomHoz){self.table.vdomHoz.reinitialize(true);}if(!self.table.browserSlow&&column.modules.resize&&column.modules.resize.variableHeight){column.checkCellHeights();}}function mouseUp(e){//block editor from taking action while resizing is taking place
  if(self.startColumn.modules.edit){self.startColumn.modules.edit.blocked=false;}if(self.table.browserSlow&&column.modules.resize&&column.modules.resize.variableHeight){column.checkCellHeights();}document.body.removeEventListener("mouseup",mouseUp);document.body.removeEventListener("mousemove",mouseMove);handle.removeEventListener("touchmove",mouseMove);handle.removeEventListener("touchend",mouseUp);self.table.element.classList.remove("tabulator-block-select");if(self.table.options.persistence&&self.table.modExists("persistence",true)&&self.table.modules.persistence.config.columns){self.table.modules.persistence.save("columns");}self.table.options.columnResized.call(self.table,column.getComponent());}e.stopPropagation();//prevent resize from interfereing with movable columns
  //block editor from taking action while resizing is taking place
  if(self.startColumn.modules.edit){self.startColumn.modules.edit.blocked=true;}self.startX=typeof e.screenX==="undefined"?e.touches[0].screenX:e.screenX;self.startWidth=column.getWidth();document.body.addEventListener("mousemove",mouseMove);document.body.addEventListener("mouseup",mouseUp);handle.addEventListener("touchmove",mouseMove,{passive:true});handle.addEventListener("touchend",mouseUp);};Tabulator.prototype.registerModule("resizeColumns",ResizeColumns);var ResizeRows=function ResizeRows(table){this.table=table;//hold Tabulator object
  this.startColumn=false;this.startY=false;this.startHeight=false;this.handle=null;this.prevHandle=null;};ResizeRows.prototype.initializeRow=function(row){var self=this,rowEl=row.getElement();var handle=document.createElement('div');handle.className="tabulator-row-resize-handle";var prevHandle=document.createElement('div');prevHandle.className="tabulator-row-resize-handle prev";handle.addEventListener("click",function(e){e.stopPropagation();});var handleDown=function handleDown(e){self.startRow=row;self._mouseDown(e,row,handle);};handle.addEventListener("mousedown",handleDown);handle.addEventListener("touchstart",handleDown,{passive:true});prevHandle.addEventListener("click",function(e){e.stopPropagation();});var prevHandleDown=function prevHandleDown(e){var prevRow=self.table.rowManager.prevDisplayRow(row);if(prevRow){self.startRow=prevRow;self._mouseDown(e,prevRow,prevHandle);}};prevHandle.addEventListener("mousedown",prevHandleDown);prevHandle.addEventListener("touchstart",prevHandleDown,{passive:true});rowEl.appendChild(handle);rowEl.appendChild(prevHandle);};ResizeRows.prototype._mouseDown=function(e,row,handle){var self=this;self.table.element.classList.add("tabulator-block-select");function mouseMove(e){row.setHeight(self.startHeight+((typeof e.screenY==="undefined"?e.touches[0].screenY:e.screenY)-self.startY));}function mouseUp(e){// //block editor from taking action while resizing is taking place
  // if(self.startColumn.modules.edit){
  // 	self.startColumn.modules.edit.blocked = false;
  // }
  document.body.removeEventListener("mouseup",mouseMove);document.body.removeEventListener("mousemove",mouseMove);handle.removeEventListener("touchmove",mouseMove);handle.removeEventListener("touchend",mouseUp);self.table.element.classList.remove("tabulator-block-select");self.table.options.rowResized.call(this.table,row.getComponent());}e.stopPropagation();//prevent resize from interfereing with movable columns
  //block editor from taking action while resizing is taking place
  // if(self.startColumn.modules.edit){
  // 	self.startColumn.modules.edit.blocked = true;
  // }
  self.startY=typeof e.screenY==="undefined"?e.touches[0].screenY:e.screenY;self.startHeight=row.getHeight();document.body.addEventListener("mousemove",mouseMove);document.body.addEventListener("mouseup",mouseUp);handle.addEventListener("touchmove",mouseMove,{passive:true});handle.addEventListener("touchend",mouseUp);};Tabulator.prototype.registerModule("resizeRows",ResizeRows);var ResizeTable=function ResizeTable(table){this.table=table;//hold Tabulator object
  this.binding=false;this.observer=false;this.containerObserver=false;this.tableHeight=0;this.tableWidth=0;this.containerHeight=0;this.containerWidth=0;this.autoResize=false;};ResizeTable.prototype.initialize=function(row){var _this83=this;var table=this.table,tableStyle;this.tableHeight=table.element.clientHeight;this.tableWidth=table.element.clientWidth;if(table.element.parentNode){this.containerHeight=table.element.parentNode.clientHeight;this.containerWidth=table.element.parentNode.clientWidth;}if(typeof ResizeObserver!=="undefined"&&table.rowManager.getRenderMode()==="virtual"){this.autoResize=true;this.observer=new ResizeObserver(function(entry){if(!table.browserMobile||table.browserMobile&&!table.modules.edit.currentCell){var nodeHeight=Math.floor(entry[0].contentRect.height);var nodeWidth=Math.floor(entry[0].contentRect.width);if(_this83.tableHeight!=nodeHeight||_this83.tableWidth!=nodeWidth){_this83.tableHeight=nodeHeight;_this83.tableWidth=nodeWidth;if(table.element.parentNode){_this83.containerHeight=table.element.parentNode.clientHeight;_this83.containerWidth=table.element.parentNode.clientWidth;}if(table.options.virtualDomHoz){table.vdomHoz.reinitialize(true);}table.redraw();}}});this.observer.observe(table.element);tableStyle=window.getComputedStyle(table.element);if(this.table.element.parentNode&&!this.table.rowManager.fixedHeight&&(tableStyle.getPropertyValue("max-height")||tableStyle.getPropertyValue("min-height"))){this.containerObserver=new ResizeObserver(function(entry){if(!table.browserMobile||table.browserMobile&&!table.modules.edit.currentCell){var nodeHeight=Math.floor(entry[0].contentRect.height);var nodeWidth=Math.floor(entry[0].contentRect.width);if(_this83.containerHeight!=nodeHeight||_this83.containerWidth!=nodeWidth){_this83.containerHeight=nodeHeight;_this83.containerWidth=nodeWidth;_this83.tableHeight=table.element.clientHeight;_this83.tableWidth=table.element.clientWidth;}if(table.options.virtualDomHoz){table.vdomHoz.reinitialize(true);}table.redraw();}});this.containerObserver.observe(this.table.element.parentNode);}}else {this.binding=function(){if(!table.browserMobile||table.browserMobile&&!table.modules.edit.currentCell){if(table.options.virtualDomHoz){table.vdomHoz.reinitialize(true);}table.redraw();}};window.addEventListener("resize",this.binding);}};ResizeTable.prototype.clearBindings=function(row){if(this.binding){window.removeEventListener("resize",this.binding);}if(this.observer){this.observer.unobserve(this.table.element);}if(this.containerObserver){this.containerObserver.unobserve(this.table.element.parentNode);}};Tabulator.prototype.registerModule("resizeTable",ResizeTable);var ResponsiveLayout=function ResponsiveLayout(table){this.table=table;//hold Tabulator object
  this.columns=[];this.hiddenColumns=[];this.mode="";this.index=0;this.collapseFormatter=[];this.collapseStartOpen=true;this.collapseHandleColumn=false;};//generate resposive columns list
  ResponsiveLayout.prototype.initialize=function(){var self=this,columns=[];this.mode=this.table.options.responsiveLayout;this.collapseFormatter=this.table.options.responsiveLayoutCollapseFormatter||this.formatCollapsedData;this.collapseStartOpen=this.table.options.responsiveLayoutCollapseStartOpen;this.hiddenColumns=[];//detemine level of responsivity for each column
  this.table.columnManager.columnsByIndex.forEach(function(column,i){if(column.modules.responsive){if(column.modules.responsive.order&&column.modules.responsive.visible){column.modules.responsive.index=i;columns.push(column);if(!column.visible&&self.mode==="collapse"){self.hiddenColumns.push(column);}}}});//sort list by responsivity
  columns=columns.reverse();columns=columns.sort(function(a,b){var diff=b.modules.responsive.order-a.modules.responsive.order;return diff||b.modules.responsive.index-a.modules.responsive.index;});this.columns=columns;if(this.mode==="collapse"){this.generateCollapsedContent();}//assign collapse column
  for(var _iterator=this.table.columnManager.columnsByIndex,_isArray=Array.isArray(_iterator),_i17=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i17>=_iterator.length)break;_ref=_iterator[_i17++];}else {_i17=_iterator.next();if(_i17.done)break;_ref=_i17.value;}var col=_ref;if(col.definition.formatter=="responsiveCollapse"){this.collapseHandleColumn=col;break;}}if(this.collapseHandleColumn){if(this.hiddenColumns.length){this.collapseHandleColumn.show();}else {this.collapseHandleColumn.hide();}}};//define layout information
  ResponsiveLayout.prototype.initializeColumn=function(column){var def=column.getDefinition();column.modules.responsive={order:typeof def.responsive==="undefined"?1:def.responsive,visible:def.visible===false?false:true};};ResponsiveLayout.prototype.initializeRow=function(row){var el;if(row.type!=="calc"){el=document.createElement("div");el.classList.add("tabulator-responsive-collapse");row.modules.responsiveLayout={element:el,open:this.collapseStartOpen};if(!this.collapseStartOpen){el.style.display='none';}}};ResponsiveLayout.prototype.layoutRow=function(row){var rowEl=row.getElement();if(row.modules.responsiveLayout){rowEl.appendChild(row.modules.responsiveLayout.element);this.generateCollapsedRowContent(row);}};//update column visibility
  ResponsiveLayout.prototype.updateColumnVisibility=function(column,visible){if(column.modules.responsive){column.modules.responsive.visible=visible;this.initialize();}};ResponsiveLayout.prototype.hideColumn=function(column){var colCount=this.hiddenColumns.length;column.hide(false,true);if(this.mode==="collapse"){this.hiddenColumns.unshift(column);this.generateCollapsedContent();if(this.collapseHandleColumn&&!colCount){this.collapseHandleColumn.show();}}};ResponsiveLayout.prototype.showColumn=function(column){var index;column.show(false,true);//set column width to prevent calculation loops on uninitialized columns
  column.setWidth(column.getWidth());if(this.mode==="collapse"){index=this.hiddenColumns.indexOf(column);if(index>-1){this.hiddenColumns.splice(index,1);}this.generateCollapsedContent();if(this.collapseHandleColumn&&!this.hiddenColumns.length){this.collapseHandleColumn.hide();}}};//redraw columns to fit space
  ResponsiveLayout.prototype.update=function(){var self=this,working=true;while(working){var width=self.table.modules.layout.getMode()=="fitColumns"?self.table.columnManager.getFlexBaseWidth():self.table.columnManager.getWidth();var diff=(self.table.options.headerVisible?self.table.columnManager.element.clientWidth:self.table.element.clientWidth)-width;if(diff<0){//table is too wide
  var column=self.columns[self.index];if(column){self.hideColumn(column);self.index++;}else {working=false;}}else {//table has spare space
  var _column=self.columns[self.index-1];if(_column){if(diff>0){if(diff>=_column.getWidth()){self.showColumn(_column);self.index--;}else {working=false;}}else {working=false;}}else {working=false;}}if(!self.table.rowManager.activeRowsCount){self.table.rowManager.renderEmptyScroll();}}};ResponsiveLayout.prototype.generateCollapsedContent=function(){var self=this,rows=this.table.rowManager.getDisplayRows();rows.forEach(function(row){self.generateCollapsedRowContent(row);});};ResponsiveLayout.prototype.generateCollapsedRowContent=function(row){var el,contents;if(row.modules.responsiveLayout){el=row.modules.responsiveLayout.element;while(el.firstChild){el.removeChild(el.firstChild);}contents=this.collapseFormatter(this.generateCollapsedRowData(row));if(contents){el.appendChild(contents);}}};ResponsiveLayout.prototype.generateCollapsedRowData=function(row){var self=this,data=row.getData(),output=[],mockCellComponent;this.hiddenColumns.forEach(function(column){var value=column.getFieldValue(data);if(column.definition.title&&column.field){if(column.modules.format&&self.table.options.responsiveLayoutCollapseUseFormatters){mockCellComponent={value:false,data:{},getValue:function getValue(){return value;},getData:function getData(){return data;},getElement:function getElement(){return document.createElement("div");},getRow:function getRow(){return row.getComponent();},getColumn:function getColumn(){return column.getComponent();}};output.push({field:column.field,title:column.definition.title,value:column.modules.format.formatter.call(self.table.modules.format,mockCellComponent,column.modules.format.params)});}else {output.push({field:column.field,title:column.definition.title,value:value});}}});return output;};ResponsiveLayout.prototype.formatCollapsedData=function(data){var list=document.createElement("table");data.forEach(function(item){var row=document.createElement("tr");var titleData=document.createElement("td");var valueData=document.createElement("td");var node_content;var titleHighlight=document.createElement("strong");titleData.appendChild(titleHighlight);this.table.modules.localize.bind("columns|"+item.field,function(text){titleHighlight.innerText=text||item.title;});if(item.value instanceof Node){node_content=document.createElement("div");node_content.appendChild(item.value);valueData.appendChild(node_content);}else {valueData.innerHTML=item.value;}row.appendChild(titleData);row.appendChild(valueData);list.appendChild(row);},this);return Object.keys(data).length?list:"";};Tabulator.prototype.registerModule("responsiveLayout",ResponsiveLayout);var SelectRow=function SelectRow(table){this.table=table;//hold Tabulator object
  this.selecting=false;//flag selecting in progress
  this.lastClickedRow=false;//last clicked row
  this.selectPrev=[];//hold previously selected element for drag drop selection
  this.selectedRows=[];//hold selected rows
  this.headerCheckboxElement=null;// hold header select element
  };SelectRow.prototype.clearSelectionData=function(silent){this.selecting=false;this.lastClickedRow=false;this.selectPrev=[];this.selectedRows=[];if(!silent){this._rowSelectionChanged();}};SelectRow.prototype.initializeRow=function(row){var self=this,element=row.getElement();// trigger end of row selection
  var endSelect=function endSelect(){setTimeout(function(){self.selecting=false;},50);document.body.removeEventListener("mouseup",endSelect);};row.modules.select={selected:false};//set row selection class
  if(self.table.options.selectableCheck.call(this.table,row.getComponent())){element.classList.add("tabulator-selectable");element.classList.remove("tabulator-unselectable");if(self.table.options.selectable&&self.table.options.selectable!="highlight"){if(self.table.options.selectableRangeMode==="click"){element.addEventListener("click",function(e){if(e.shiftKey){self.table._clearSelection();self.lastClickedRow=self.lastClickedRow||row;var lastClickedRowIdx=self.table.rowManager.getDisplayRowIndex(self.lastClickedRow);var rowIdx=self.table.rowManager.getDisplayRowIndex(row);var fromRowIdx=lastClickedRowIdx<=rowIdx?lastClickedRowIdx:rowIdx;var toRowIdx=lastClickedRowIdx>=rowIdx?lastClickedRowIdx:rowIdx;var rows=self.table.rowManager.getDisplayRows().slice(0);var toggledRows=rows.splice(fromRowIdx,toRowIdx-fromRowIdx+1);if(e.ctrlKey||e.metaKey){toggledRows.forEach(function(toggledRow){if(toggledRow!==self.lastClickedRow){if(self.table.options.selectable!==true&&!self.isRowSelected(row)){if(self.selectedRows.length<self.table.options.selectable){self.toggleRow(toggledRow);}}else {self.toggleRow(toggledRow);}}});self.lastClickedRow=row;}else {self.deselectRows(undefined,true);if(self.table.options.selectable!==true){if(toggledRows.length>self.table.options.selectable){toggledRows=toggledRows.slice(0,self.table.options.selectable);}}self.selectRows(toggledRows);}self.table._clearSelection();}else if(e.ctrlKey||e.metaKey){self.toggleRow(row);self.lastClickedRow=row;}else {self.deselectRows(undefined,true);self.selectRows(row);self.lastClickedRow=row;}});}else {element.addEventListener("click",function(e){if(!self.table.modExists("edit")||!self.table.modules.edit.getCurrentCell()){self.table._clearSelection();}if(!self.selecting){self.toggleRow(row);}});element.addEventListener("mousedown",function(e){if(e.shiftKey){self.table._clearSelection();self.selecting=true;self.selectPrev=[];document.body.addEventListener("mouseup",endSelect);document.body.addEventListener("keyup",endSelect);self.toggleRow(row);return false;}});element.addEventListener("mouseenter",function(e){if(self.selecting){self.table._clearSelection();self.toggleRow(row);if(self.selectPrev[1]==row){self.toggleRow(self.selectPrev[0]);}}});element.addEventListener("mouseout",function(e){if(self.selecting){self.table._clearSelection();self.selectPrev.unshift(row);}});}}}else {element.classList.add("tabulator-unselectable");element.classList.remove("tabulator-selectable");}};//toggle row selection
  SelectRow.prototype.toggleRow=function(row){if(this.table.options.selectableCheck.call(this.table,row.getComponent())){if(row.modules.select&&row.modules.select.selected){this._deselectRow(row);}else {this._selectRow(row);}}};//select a number of rows
  SelectRow.prototype.selectRows=function(rows){var _this84=this;var rowMatch;switch(typeof rows==='undefined'?'undefined':_typeof(rows)){case"undefined":this.table.rowManager.rows.forEach(function(row){_this84._selectRow(row,true,true);});this._rowSelectionChanged();break;case"string":rowMatch=this.table.rowManager.findRow(rows);if(rowMatch){this._selectRow(rowMatch,true,true);}else {this.table.rowManager.getRows(rows).forEach(function(row){_this84._selectRow(row,true,true);});}this._rowSelectionChanged();break;default:if(Array.isArray(rows)){rows.forEach(function(row){_this84._selectRow(row,true,true);});this._rowSelectionChanged();}else {this._selectRow(rows,false,true);}break;}};//select an individual row
  SelectRow.prototype._selectRow=function(rowInfo,silent,force){if(!isNaN(this.table.options.selectable)&&this.table.options.selectable!==true&&!force){if(this.selectedRows.length>=this.table.options.selectable){if(this.table.options.selectableRollingSelection){this._deselectRow(this.selectedRows[0]);}else {return false;}}}var row=this.table.rowManager.findRow(rowInfo);if(row){if(this.selectedRows.indexOf(row)==-1){row.getElement().classList.add("tabulator-selected");if(!row.modules.select){row.modules.select={};}row.modules.select.selected=true;if(row.modules.select.checkboxEl){row.modules.select.checkboxEl.checked=true;}this.selectedRows.push(row);if(this.table.options.dataTreeSelectPropagate){this.childRowSelection(row,true);}if(!silent){this.table.options.rowSelected.call(this.table,row.getComponent());}this._rowSelectionChanged(silent);}}else {if(!silent){console.warn("Selection Error - No such row found, ignoring selection:"+rowInfo);}}};SelectRow.prototype.isRowSelected=function(row){return this.selectedRows.indexOf(row)!==-1;};//deselect a number of rows
  SelectRow.prototype.deselectRows=function(rows,silent){var self=this,rowCount;if(typeof rows=="undefined"){rowCount=self.selectedRows.length;for(var _i18=0;_i18<rowCount;_i18++){self._deselectRow(self.selectedRows[0],true);}self._rowSelectionChanged(silent);}else {if(Array.isArray(rows)){rows.forEach(function(row){self._deselectRow(row,true);});self._rowSelectionChanged(silent);}else {self._deselectRow(rows,silent);}}};//deselect an individual row
  SelectRow.prototype._deselectRow=function(rowInfo,silent){var self=this,row=self.table.rowManager.findRow(rowInfo),index;if(row){index=self.selectedRows.findIndex(function(selectedRow){return selectedRow==row;});if(index>-1){row.getElement().classList.remove("tabulator-selected");if(!row.modules.select){row.modules.select={};}row.modules.select.selected=false;if(row.modules.select.checkboxEl){row.modules.select.checkboxEl.checked=false;}self.selectedRows.splice(index,1);if(this.table.options.dataTreeSelectPropagate){this.childRowSelection(row,false);}if(!silent){self.table.options.rowDeselected.call(this.table,row.getComponent());}self._rowSelectionChanged(silent);}}else {if(!silent){console.warn("Deselection Error - No such row found, ignoring selection:"+rowInfo);}}};SelectRow.prototype.getSelectedData=function(){var data=[];this.selectedRows.forEach(function(row){data.push(row.getData());});return data;};SelectRow.prototype.getSelectedRows=function(){var rows=[];this.selectedRows.forEach(function(row){rows.push(row.getComponent());});return rows;};SelectRow.prototype._rowSelectionChanged=function(silent){if(this.headerCheckboxElement){if(this.selectedRows.length===0){this.headerCheckboxElement.checked=false;this.headerCheckboxElement.indeterminate=false;}else if(this.table.rowManager.rows.length===this.selectedRows.length){this.headerCheckboxElement.checked=true;this.headerCheckboxElement.indeterminate=false;}else {this.headerCheckboxElement.indeterminate=true;this.headerCheckboxElement.checked=false;}}if(!silent){this.table.options.rowSelectionChanged.call(this.table,this.getSelectedData(),this.getSelectedRows());}};SelectRow.prototype.registerRowSelectCheckbox=function(row,element){if(!row._row.modules.select){row._row.modules.select={};}row._row.modules.select.checkboxEl=element;};SelectRow.prototype.registerHeaderSelectCheckbox=function(element){this.headerCheckboxElement=element;};SelectRow.prototype.childRowSelection=function(row,select){var children=this.table.modules.dataTree.getChildren(row,true);if(select){for(var _iterator2=children,_isArray2=Array.isArray(_iterator2),_i19=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i19>=_iterator2.length)break;_ref2=_iterator2[_i19++];}else {_i19=_iterator2.next();if(_i19.done)break;_ref2=_i19.value;}var child=_ref2;this._selectRow(child,true);}}else {for(var _iterator3=children,_isArray3=Array.isArray(_iterator3),_i20=0,_iterator3=_isArray3?_iterator3:_iterator3[Symbol.iterator]();;){var _ref3;if(_isArray3){if(_i20>=_iterator3.length)break;_ref3=_iterator3[_i20++];}else {_i20=_iterator3.next();if(_i20.done)break;_ref3=_i20.value;}var _child=_ref3;this._deselectRow(_child,true);}}};Tabulator.prototype.registerModule("selectRow",SelectRow);var Sort=function Sort(table){this.table=table;//hold Tabulator object
  this.sortList=[];//holder current sort
  this.changed=false;//has the sort changed since last render
  };//initialize column header for sorting
  Sort.prototype.initializeColumn=function(column,content){var self=this,sorter=false,colEl,arrowEl;switch(_typeof(column.definition.sorter)){case"string":if(self.sorters[column.definition.sorter]){sorter=self.sorters[column.definition.sorter];}else {console.warn("Sort Error - No such sorter found: ",column.definition.sorter);}break;case"function":sorter=column.definition.sorter;break;}column.modules.sort={sorter:sorter,dir:"none",params:column.definition.sorterParams||{},startingDir:column.definition.headerSortStartingDir||"asc",tristate:typeof column.definition.headerSortTristate!=="undefined"?column.definition.headerSortTristate:this.table.options.headerSortTristate};if(typeof column.definition.headerSort==="undefined"?this.table.options.headerSort!==false:column.definition.headerSort!==false){colEl=column.getElement();colEl.classList.add("tabulator-sortable");arrowEl=document.createElement("div");arrowEl.classList.add("tabulator-col-sorter");if(_typeof(this.table.options.headerSortElement)=="object"){arrowEl.appendChild(this.table.options.headerSortElement);}else {arrowEl.innerHTML=this.table.options.headerSortElement;}//create sorter arrow
  content.appendChild(arrowEl);column.modules.sort.element=arrowEl;//sort on click
  colEl.addEventListener("click",function(e){var dir="",sorters=[],match=false;if(column.modules.sort){if(column.modules.sort.tristate){if(column.modules.sort.dir=="none"){dir=column.modules.sort.startingDir;}else {if(column.modules.sort.dir==column.modules.sort.startingDir){dir=column.modules.sort.dir=="asc"?"desc":"asc";}else {dir="none";}}}else {switch(column.modules.sort.dir){case"asc":dir="desc";break;case"desc":dir="asc";break;default:dir=column.modules.sort.startingDir;}}if(self.table.options.columnHeaderSortMulti&&(e.shiftKey||e.ctrlKey)){sorters=self.getSort();match=sorters.findIndex(function(sorter){return sorter.field===column.getField();});if(match>-1){sorters[match].dir=dir;if(match!=sorters.length-1){match=sorters.splice(match,1)[0];if(dir!="none"){sorters.push(match);}}}else {if(dir!="none"){sorters.push({column:column,dir:dir});}}//add to existing sort
  self.setSort(sorters);}else {if(dir=="none"){self.clear();}else {//sort by column only
  self.setSort(column,dir);}}self.table.rowManager.sorterRefresh(!self.sortList.length);}});}};//check if the sorters have changed since last use
  Sort.prototype.hasChanged=function(){var changed=this.changed;this.changed=false;return changed;};//return current sorters
  Sort.prototype.getSort=function(){var self=this,sorters=[];self.sortList.forEach(function(item){if(item.column){sorters.push({column:item.column.getComponent(),field:item.column.getField(),dir:item.dir});}});return sorters;};//change sort list and trigger sort
  Sort.prototype.setSort=function(sortList,dir){var self=this,newSortList=[];if(!Array.isArray(sortList)){sortList=[{column:sortList,dir:dir}];}sortList.forEach(function(item){var column;column=self.table.columnManager.findColumn(item.column);if(column){item.column=column;newSortList.push(item);self.changed=true;}else {console.warn("Sort Warning - Sort field does not exist and is being ignored: ",item.column);}});self.sortList=newSortList;if(this.table.options.persistence&&this.table.modExists("persistence",true)&&this.table.modules.persistence.config.sort){this.table.modules.persistence.save("sort");}};//clear sorters
  Sort.prototype.clear=function(){this.setSort([]);};//find appropriate sorter for column
  Sort.prototype.findSorter=function(column){var row=this.table.rowManager.activeRows[0],sorter="string",field,value;if(row){row=row.getData();field=column.getField();if(field){value=column.getFieldValue(row);switch(typeof value==='undefined'?'undefined':_typeof(value)){case"undefined":sorter="string";break;case"boolean":sorter="boolean";break;default:if(!isNaN(value)&&value!==""){sorter="number";}else {if(value.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)){sorter="alphanum";}}break;}}}return this.sorters[sorter];};//work through sort list sorting data
  Sort.prototype.sort=function(data){var self=this,sortList=this.table.options.sortOrderReverse?self.sortList.slice().reverse():self.sortList,sortListActual=[],rowComponents=[];if(self.table.options.dataSorting){self.table.options.dataSorting.call(self.table,self.getSort());}self.clearColumnHeaders();if(!self.table.options.ajaxSorting){//build list of valid sorters and trigger column specific callbacks before sort begins
  sortList.forEach(function(item,i){var sortObj=item.column.modules.sort;if(item.column&&sortObj){//if no sorter has been defined, take a guess
  if(!sortObj.sorter){sortObj.sorter=self.findSorter(item.column);}item.params=typeof sortObj.params==="function"?sortObj.params(item.column.getComponent(),item.dir):sortObj.params;sortListActual.push(item);}self.setColumnHeader(item.column,item.dir);});//sort data
  if(sortListActual.length){self._sortItems(data,sortListActual);}}else {sortList.forEach(function(item,i){self.setColumnHeader(item.column,item.dir);});}if(self.table.options.dataSorted){data.forEach(function(row){rowComponents.push(row.getComponent());});self.table.options.dataSorted.call(self.table,self.getSort(),rowComponents);}};//clear sort arrows on columns
  Sort.prototype.clearColumnHeaders=function(){this.table.columnManager.getRealColumns().forEach(function(column){if(column.modules.sort){column.modules.sort.dir="none";column.getElement().setAttribute("aria-sort","none");}});};//set the column header sort direction
  Sort.prototype.setColumnHeader=function(column,dir){column.modules.sort.dir=dir;column.getElement().setAttribute("aria-sort",dir);};//sort each item in sort list
  Sort.prototype._sortItems=function(data,sortList){var _this85=this;var sorterCount=sortList.length-1;data.sort(function(a,b){var result;for(var i=sorterCount;i>=0;i--){var sortItem=sortList[i];result=_this85._sortRow(a,b,sortItem.column,sortItem.dir,sortItem.params);if(result!==0){break;}}return result;});};//process individual rows for a sort function on active data
  Sort.prototype._sortRow=function(a,b,column,dir,params){var el1Comp,el2Comp;//switch elements depending on search direction
  var el1=dir=="asc"?a:b;var el2=dir=="asc"?b:a;a=column.getFieldValue(el1.getData());b=column.getFieldValue(el2.getData());a=typeof a!=="undefined"?a:"";b=typeof b!=="undefined"?b:"";el1Comp=el1.getComponent();el2Comp=el2.getComponent();return column.modules.sort.sorter.call(this,a,b,el1Comp,el2Comp,column.getComponent(),dir,params);};//default data sorters
  Sort.prototype.sorters={//sort numbers
  number:function number(a,b,aRow,bRow,column,dir,params){var alignEmptyValues=params.alignEmptyValues;var decimal=params.decimalSeparator;var thousand=params.thousandSeparator;var emptyAlign=0;a=String(a);b=String(b);if(thousand){a=a.split(thousand).join("");b=b.split(thousand).join("");}if(decimal){a=a.split(decimal).join(".");b=b.split(decimal).join(".");}a=parseFloat(a);b=parseFloat(b);//handle non numeric values
  if(isNaN(a)){emptyAlign=isNaN(b)?0:-1;}else if(isNaN(b)){emptyAlign=1;}else {//compare valid values
  return a-b;}//fix empty values in position
  if(alignEmptyValues==="top"&&dir==="desc"||alignEmptyValues==="bottom"&&dir==="asc"){emptyAlign*=-1;}return emptyAlign;},//sort strings
  string:function string(a,b,aRow,bRow,column,dir,params){var alignEmptyValues=params.alignEmptyValues;var emptyAlign=0;var locale;//handle empty values
  if(!a){emptyAlign=!b?0:-1;}else if(!b){emptyAlign=1;}else {//compare valid values
  switch(_typeof(params.locale)){case"boolean":if(params.locale){locale=this.table.modules.localize.getLocale();}break;case"string":locale=params.locale;break;}return String(a).toLowerCase().localeCompare(String(b).toLowerCase(),locale);}//fix empty values in position
  if(alignEmptyValues==="top"&&dir==="desc"||alignEmptyValues==="bottom"&&dir==="asc"){emptyAlign*=-1;}return emptyAlign;},//sort date
  date:function date(a,b,aRow,bRow,column,dir,params){if(!params.format){params.format="DD/MM/YYYY";}return this.sorters.datetime.call(this,a,b,aRow,bRow,column,dir,params);},//sort HH:mm formatted times
  time:function time(a,b,aRow,bRow,column,dir,params){if(!params.format){params.format="HH:mm";}return this.sorters.datetime.call(this,a,b,aRow,bRow,column,dir,params);},//sort datetime
  datetime:function datetime(a,b,aRow,bRow,column,dir,params){var format=params.format||"DD/MM/YYYY HH:mm:ss",alignEmptyValues=params.alignEmptyValues,emptyAlign=0;if(typeof moment!="undefined"){a=moment(a,format);b=moment(b,format);if(!a.isValid()){emptyAlign=!b.isValid()?0:-1;}else if(!b.isValid()){emptyAlign=1;}else {//compare valid values
  return a-b;}//fix empty values in position
  if(alignEmptyValues==="top"&&dir==="desc"||alignEmptyValues==="bottom"&&dir==="asc"){emptyAlign*=-1;}return emptyAlign;}else {console.error("Sort Error - 'datetime' sorter is dependant on moment.js");}},//sort booleans
  "boolean":function _boolean(a,b,aRow,bRow,column,dir,params){var el1=a===true||a==="true"||a==="True"||a===1?1:0;var el2=b===true||b==="true"||b==="True"||b===1?1:0;return el1-el2;},//sort if element contains any data
  array:function array(a,b,aRow,bRow,column,dir,params){var el1=0;var el2=0;var type=params.type||"length";var alignEmptyValues=params.alignEmptyValues;var emptyAlign=0;function calc(value){switch(type){case"length":return value.length;case"sum":return value.reduce(function(c,d){return c+d;});case"max":return Math.max.apply(null,value);case"min":return Math.min.apply(null,value);case"avg":return value.reduce(function(c,d){return c+d;})/value.length;}}//handle non array values
  if(!Array.isArray(a)){alignEmptyValues=!Array.isArray(b)?0:-1;}else if(!Array.isArray(b)){alignEmptyValues=1;}else {//compare valid values
  el1=a?calc(a):0;el2=b?calc(b):0;return el1-el2;}//fix empty values in position
  if(alignEmptyValues==="top"&&dir==="desc"||alignEmptyValues==="bottom"&&dir==="asc"){emptyAlign*=-1;}return emptyAlign;},//sort if element contains any data
  exists:function exists(a,b,aRow,bRow,column,dir,params){var el1=typeof a=="undefined"?0:1;var el2=typeof b=="undefined"?0:1;return el1-el2;},//sort alpha numeric strings
  alphanum:function alphanum(as,bs,aRow,bRow,column,dir,params){var a,b,a1,b1,i=0,L,rx=/(\d+)|(\D+)/g,rd=/\d/;var alignEmptyValues=params.alignEmptyValues;var emptyAlign=0;//handle empty values
  if(!as&&as!==0){emptyAlign=!bs&&bs!==0?0:-1;}else if(!bs&&bs!==0){emptyAlign=1;}else {if(isFinite(as)&&isFinite(bs))return as-bs;a=String(as).toLowerCase();b=String(bs).toLowerCase();if(a===b)return 0;if(!(rd.test(a)&&rd.test(b)))return a>b?1:-1;a=a.match(rx);b=b.match(rx);L=a.length>b.length?b.length:a.length;while(i<L){a1=a[i];b1=b[i++];if(a1!==b1){if(isFinite(a1)&&isFinite(b1)){if(a1.charAt(0)==="0")a1="."+a1;if(b1.charAt(0)==="0")b1="."+b1;return a1-b1;}else return a1>b1?1:-1;}}return a.length>b.length;}//fix empty values in position
  if(alignEmptyValues==="top"&&dir==="desc"||alignEmptyValues==="bottom"&&dir==="asc"){emptyAlign*=-1;}return emptyAlign;}};Tabulator.prototype.registerModule("sort",Sort);var Validate=function Validate(table){this.table=table;this.invalidCells=[];};//validate
  Validate.prototype.initializeColumn=function(column){var self=this,config=[],validator;if(column.definition.validator){if(Array.isArray(column.definition.validator)){column.definition.validator.forEach(function(item){validator=self._extractValidator(item);if(validator){config.push(validator);}});}else {validator=this._extractValidator(column.definition.validator);if(validator){config.push(validator);}}column.modules.validate=config.length?config:false;}};Validate.prototype._extractValidator=function(value){var type,params,pos;switch(typeof value==='undefined'?'undefined':_typeof(value)){case"string":pos=value.indexOf(':');if(pos>-1){type=value.substring(0,pos);params=value.substring(pos+1);}else {type=value;}return this._buildValidator(type,params);case"function":return this._buildValidator(value);case"object":return this._buildValidator(value.type,value.parameters);}};Validate.prototype._buildValidator=function(type,params){var func=typeof type=="function"?type:this.validators[type];if(!func){console.warn("Validator Setup Error - No matching validator found:",type);return false;}else {return {type:typeof type=="function"?"function":type,func:func,params:params};}};Validate.prototype.validate=function(validators,cell,value){var self=this,valid=[],invalidIndex=this.invalidCells.indexOf(cell);if(validators){validators.forEach(function(item){if(!item.func.call(self,cell.getComponent(),value,item.params)){valid.push({type:item.type,parameters:item.params});}});}valid=valid.length?valid:true;if(!cell.modules.validate){cell.modules.validate={};}if(valid===true){cell.modules.validate.invalid=false;cell.getElement().classList.remove("tabulator-validation-fail");if(invalidIndex>-1){this.invalidCells.splice(invalidIndex,1);}}else {cell.modules.validate.invalid=true;if(this.table.options.validationMode!=="manual"){cell.getElement().classList.add("tabulator-validation-fail");}if(invalidIndex==-1){this.invalidCells.push(cell);}}return valid;};Validate.prototype.getInvalidCells=function(){var output=[];this.invalidCells.forEach(function(cell){output.push(cell.getComponent());});return output;};Validate.prototype.clearValidation=function(cell){var invalidIndex;if(cell.modules.validate&&cell.modules.validate.invalid){cell.getElement().classList.remove("tabulator-validation-fail");cell.modules.validate.invalid=false;invalidIndex=this.invalidCells.indexOf(cell);if(invalidIndex>-1){this.invalidCells.splice(invalidIndex,1);}}};Validate.prototype.validators={//is integer
  integer:function integer(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}value=Number(value);return typeof value==='number'&&isFinite(value)&&Math.floor(value)===value;},//is float
  "float":function _float(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}value=Number(value);return typeof value==='number'&&isFinite(value)&&value%1!==0;},//must be a number
  numeric:function numeric(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}return !isNaN(value);},//must be a string
  string:function string(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}return isNaN(value);},//maximum value
  max:function max(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}return parseFloat(value)<=parameters;},//minimum value
  min:function min(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}return parseFloat(value)>=parameters;},//starts with  value
  starts:function starts(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}return String(value).toLowerCase().startsWith(String(parameters).toLowerCase());},//ends with  value
  ends:function ends(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}return String(value).toLowerCase().endsWith(String(parameters).toLowerCase());},//minimum string length
  minLength:function minLength(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}return String(value).length>=parameters;},//maximum string length
  maxLength:function maxLength(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}return String(value).length<=parameters;},//in provided value list
  "in":function _in(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}if(typeof parameters=="string"){parameters=parameters.split("|");}return value===""||parameters.indexOf(value)>-1;},//must match provided regex
  regex:function regex(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}var reg=new RegExp(parameters);return reg.test(value);},//value must be unique in this column
  unique:function unique(cell,value,parameters){if(value===""||value===null||typeof value==="undefined"){return true;}var unique=true;var cellData=cell.getData();var column=cell.getColumn()._getSelf();this.table.rowManager.rows.forEach(function(row){var data=row.getData();if(data!==cellData){if(value==column.getFieldValue(data)){unique=false;}}});return unique;},//must have a value
  required:function required(cell,value,parameters){return value!==""&&value!==null&&typeof value!=="undefined";}};Tabulator.prototype.registerModule("validate",Validate);

  var summary = [null, null]; // Standard interface functions

  function gui$5(sel) {
    // Dataset checkboxes
    datasetCheckboxes(sel, 'summary-check', 'summaryDisplay'); // Record grouping

    var p = d3__namespace.select(sel).append('p');
    var fldset = p.append('fieldset');
    fldset.append('legend').text('Group records by'); // Other controls

    var p2 = d3__namespace.select(sel).append('p');
    var fldset2 = p2.append('fieldset');
    fldset2.append('legend').text('Other controls');
    button(fldset2, 'brcdseval.summaryDownloadCSV', 'Download CSV');

    function makeInput(txt, value, checked) {
      var input = fldset.append('input');
      input.attr('type', 'radio');
      input.attr('id', "rad-".concat(value ? value : 'none'));
      input.attr('name', 'rad-grouping');
      input.attr('value', value);
      input.attr('onclick', "brcdseval.redoSummaries()");

      if (checked) {
        input.property('checked', true);
      }

      var label = fldset.append('label').text(txt);
      label.attr('for', "rad-".concat(value ? value : 'none'));
    }

    makeInput('None', '', true);
    makeInput('Recorder', 'recorder');
    makeInput('Verifier', 'verifier');
    makeInput('Verified status', 'verifyStatus');
    makeInput('Source', 'source'); // Layout for summary tables

    var div = d3__namespace.select(sel).append('div');

    function tableDiv(i) {
      var tabDiv = div.append('div');
      tabDiv.attr('id', "summary-div-".concat(i));
      tabDiv.append('h4').attr('id', "summary-name-".concat(i));
      tabDiv.append('p').attr('id', "summary-message-".concat(i));
      tabDiv.append('div').attr('id', "summary-table-".concat(i));
    }

    tableDiv(1);
    tableDiv(2);
  }
  function tabSelected$5() {
    summariesTables();
  }
  function dataCleared$5(i) {
    clear$5(i);
  }
  function fieldConfigCleared$5(i) {
    clear$5(i);
  } // Exported from the library to use from html interface

  function redoSummaries() {
    clear$5(1);
    clear$5(2);
    summariesTables();
  }
  function summaryDisplay() {
    // Function responsible for display one or both tables
    var d1 = d3__namespace.select('#summary-check-1').property("checked");
    var d2 = d3__namespace.select('#summary-check-2').property("checked");

    if (d1 && d2) {
      d3__namespace.select('#summary-div-1').classed("splitx", true);
      d3__namespace.select('#summary-div-2').classed("splitx", true);
    } else {
      d3__namespace.select('#summary-div-1').classed("splitx", false);
      d3__namespace.select('#summary-div-2').classed("splitx", false);
    }

    if (d1) {
      d3__namespace.select('#summary-div-1').style("display", "");
    } else {
      d3__namespace.select('#summary-div-1').style("display", "none");
    }

    if (d2) {
      d3__namespace.select('#summary-div-2').style("display", "");
    } else {
      d3__namespace.select('#summary-div-2').style("display", "none");
    }

    if (summary[0]) summary[0].redraw(true);
    if (summary[1]) summary[1].redraw(true);
  }
  function summaryDownloadCSV() {
    var generate = function generate(i) {
      if (summary[i - 1]) {
        summary[i - 1].download("csv", "brc-ds-eval-summary-ds".concat(i, ".csv"));
      }
    };

    generate(1);
    generate(2);
  } // Helper functions

  function summarise(i) {
    var data$1 = data[i - 1];

    if (!data$1.fields.taxon) {
      d3__namespace.select("#summary-message-".concat(i)).html("\n        For the summary table, you must configure the <i>Taxon</i> column as a minimum.\n        Configuring the <i>Date</i> column will also give richer output.\n      ");
      d3__namespace.select("#summary-message-".concat(i)).style('display', '');
    } else {
      d3__namespace.select("#summary-message-".concat(i)).style('display', 'none');
      var groupCol = d3__namespace.select('input[name=rad-grouping]:checked').property('value');
      var sumData = {};
      data$1.json.forEach(function (d) {
        var rowKey = groupCol && data$1.fields[groupCol] ? "".concat(d[data$1.fields.taxon], "-").concat(d[data$1.fields[groupCol]]) : d[data$1.fields.taxon]; // Count the record against the appropriate taxon

        if (sumData[rowKey]) {
          sumData[rowKey].records++;
        } else {
          var designation = '';

          if (data$1.fields.tvk) {
            if (!d[data$1.fields.tvk]) {
              designation = "no tvk";
            } else if (window.taxonDesignations[d[data$1.fields.tvk]]) {
              designation = window.taxonDesignations[d[data$1.fields.tvk]];
            }
          }

          sumData[rowKey] = {
            taxon: d[data$1.fields.taxon],
            designation: designation,
            grouping: groupCol && data$1.fields[groupCol] ? d[data$1.fields[groupCol]] : '',
            records: 1
          };
        } // Date
        // Currently recognise these two formats yyyy*mm*dd dd*mm*yyyy


        if (data$1.fields.date) {
          var date = d[data$1.fields.date];
          var year;

          if (dateValid(date)) {
            year = dateYear(date);

            if (sumData[rowKey].minYear) {
              if (year < sumData[rowKey].minYear) {
                sumData[rowKey].minYear = year;
              }
            } else {
              sumData[rowKey].minYear = year;
            }

            if (sumData[rowKey].maxYear) {
              if (year > sumData[rowKey].maxYear) {
                sumData[rowKey].maxYear = year;
              }
            } else {
              sumData[rowKey].maxYear = year;
            }
          }
        }
      });
      var sumArray = Object.keys(sumData).map(function (k) {
        return sumData[k];
      });
      var cols = [];

      if (groupCol && data$1.fields[groupCol]) {
        cols.push({
          title: data$1.fields[groupCol],
          field: "grouping",
          headerFilter: "input"
        });
      }

      cols.push({
        title: "Taxon",
        field: "taxon",
        headerFilter: "input"
      });

      if (data$1.fields.tvk) {
        cols.push({
          title: "Designation",
          field: "designation",
          headerFilter: "input"
        });
      }

      cols.push({
        title: "Records",
        field: "records"
      });

      if (data$1.fields.date) {
        cols.push({
          title: "MinYear",
          field: "minYear"
        });
        cols.push({
          title: "MaxYear",
          field: "maxYear"
        });
      }

      console.log('cols', cols);
      console.log('sumArray', sumArray);
      return new Tabulator("#summary-table-".concat(i), {
        height: 600,
        data: sumArray,
        columns: cols,
        groupBy: groupCol ? "grouping" : ""
      });
    }
  }

  function summariesTables() {
    // Generate summary data for each table
    var generate = function generate(i) {
      if (!summary[i - 1] && data[i - 1].json && data[i - 1].fields) {
        d3__namespace.select("#summary-name-".concat(i)).text(data[i - 1].name);
        summary[i - 1] = summarise(i);
      } else if (summary[i - 1]) {
        summary[i - 1].redraw(true);
      }
    };

    generate(1);
    generate(2);
  }

  function clear$5(i) {
    if (summary[i - 1]) {
      summary[i - 1].destroy();
      summary[i - 1] = null;
      d3__namespace.select("#summary-table-".concat(i)).html('');
    }
  }

  var summary$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    gui: gui$5,
    tabSelected: tabSelected$5,
    dataCleared: dataCleared$5,
    fieldConfigCleared: fieldConfigCleared$5,
    redoSummaries: redoSummaries,
    summaryDisplay: summaryDisplay,
    summaryDownloadCSV: summaryDownloadCSV
  });

  var phenData = [null, null, null];
  var dChecked$2 = [true, false, false];
  var currentPerRow$1 = [0, 0, 0];
  var currentTaxonFilter$1 = ['', '', ''];
  var currentYtype$1 = ['', '', '']; // Standard interface functions

  function gui$4(sel) {
    datasetCheckboxes(sel, 'phenology-check', 'phenologyDisplay', true); // Layout for phenology charts

    var div = d3__namespace.select(sel).append('div');
    var fldset = div.append('fieldset');
    fldset.append('legend').text('Phenology chart options');
    fldset.style('margin-top', '0.5em'); // Taxon filter

    textInput(fldset, 'phenology-filter', 'Enter a filter for taxa', 'brcdseval.phenologyDisplay', 'Apply'); // Proportions vs counts radio buttons

    var radios = [{
      value: 'count',
      label: 'Record counts',
      checked: true
    }, {
      value: 'proportion',
      label: 'Proporation of record counts',
      checked: false
    }];
    radioButtonSet(fldset, 'rad-phen-count-type', 'rad-phen-count', 'brcdseval.phenologyDisplay', radios);

    function tableDiv(i, initDisplay) {
      var tabDiv = div.append('div');

      if (!initDisplay) {
        tabDiv.style('display', 'none');
      }

      tabDiv.attr('id', "phenology-div-".concat(i));
      tabDiv.append('h4').attr('id', "phenology-name-".concat(i));
      tabDiv.append('p').attr('id', "phenology-message-".concat(i));
      tabDiv.append('div').attr('id', "phenology-chart-".concat(i));
    }

    tableDiv(1, true);
    tableDiv(2, false); // Div for combined display

    var tabDiv = div.append('div');
    tabDiv.style('display', 'none');
    tabDiv.attr('id', "phenology-div-combine");
    tabDiv.append('h4').attr('id', "phenology-name-combine");
    tabDiv.append('p').attr('id', "phenology-message-combine");
    tabDiv.append('div').attr('id', "phenology-chart-combine");
  }
  function tabSelected$4() {
    for (var i = 0; i < 2; i++) {
      // Warn if data selected but the necessary config is not set
      if (data[i] && data[i].fields && (!data[i].fields.taxon || !data[i].fields.date)) {
        d3__namespace.select("#summary-message-".concat(i)).style('display', '');
        showMessage$2(i + 1, "To see phenology charts for dataset ".concat(i + 1, ", both <i>taxon</i> and <i>date</i> fields must be configured."));
      } else {
        showMessage$2(i + 1, null);
      }
    }

    displayData$2();
  }
  function dataCleared$4(i) {
    clear$4(i);
  }
  function fieldConfigCleared$4(i) {
    clear$4(i);
  } // Exported from the library to use from html interface

  function phenologyDisplay() {
    // Function responsible for display one or both charts
    dChecked$2[0] = d3__namespace.select('#phenology-check-1').property("checked");
    dChecked$2[1] = d3__namespace.select('#phenology-check-2').property("checked");
    dChecked$2[2] = d3__namespace.select("#phenology-check-combine").property('checked');

    if (dChecked$2[2] && dChecked$2[0] && dChecked$2[1]) {
      d3__namespace.select('#phenology-div-combine').style("display", "");
      d3__namespace.select('#phenology-div-1').style("display", "none");
      d3__namespace.select('#phenology-div-2').style("display", "none");
    } else {
      d3__namespace.select('#phenology-div-combine').style("display", "none");

      if (dChecked$2[0] && dChecked$2[1]) {
        d3__namespace.select('#phenology-div-1').classed("splitx", true);
        d3__namespace.select('#phenology-div-2').classed("splitx", true);
      } else {
        d3__namespace.select('#phenology-div-1').classed("splitx", false);
        d3__namespace.select('#phenology-div-2').classed("splitx", false);
      }

      if (dChecked$2[0]) {
        d3__namespace.select('#phenology-div-1').style("display", "");
      } else {
        d3__namespace.select('#phenology-div-1').style("display", "none");
      }

      if (dChecked$2[1]) {
        d3__namespace.select('#phenology-div-2').style("display", "");
      } else {
        d3__namespace.select('#phenology-div-2').style("display", "none");
      }
    }

    displayData$2();
  } // Helper functions

  function clear$4(i) {
    phenData[i - 1] = null;
    phenData[2] = null; // Combined data

    d3__namespace.select("#phenology-chart-".concat(i)).html('');
    d3__namespace.select("#phenology-chart-combine").html('');
  }

  function displayData$2() {
    var pLoads = [];

    var _loop = function _loop(i) {
      var p = void 0; // Generate penology data if not already exists and all the necessary config is set

      if (dChecked$2[i] && data[i] && data[i].fields && data[i].fields.taxon && data[i].fields.date) {
        if (phenData[i]) {
          makeChart$2(i);
          p = Promise.resolve();
        } else {
          showMessage$2(i + 1, "<span style='color: orange; font-weight: bold'>Configuring data for phenology display...</span>");
          setTimeout(function () {
            // Timeout required to allow GUI to update (i.e. phenology tab to show)
            p = loadData$2(i).then(function () {
              showMessage$2(i + 1, null);
              makeChart$2(i);
            });
          }, 1);
        }
      } else {
        p = Promise.resolve();
      }

      pLoads.push(p);
    };

    for (var i = 0; i < 2; i++) {
      _loop(i);
    }

    Promise.all(pLoads).then(function () {
      console.log("promises resolved"); // If combine display box is checked

      if (dChecked$2[2]) {
        if (phenData[2]) {
          makeChart$2(2);
        } else {
          showMessage$2('combine', "<span style='color: orange; font-weight: bold'>Configuring data for combined phenology display...</span>");
          setTimeout(function () {
            combineData$1();
            if (phenData[2]) makeChart$2(2);
            showMessage$2('combine', null);
          }, 1);
        }
      }
    });
  }

  function showMessage$2(i, html) {
    if (html) {
      d3__namespace.select("#phenology-message-".concat(i)).style('display', '');
      d3__namespace.select("#phenology-message-".concat(i)).html(html);
    } else {
      d3__namespace.select("#phenology-message-".concat(i)).style('display', 'none');
      d3__namespace.select("#phenology-message-".concat(i)).html('');
    }
  }

  function loadData$2(i) {
    phenData[i] = []; // Data generation is wrapped in a promise so that the interface will
    // not hang.

    return new Promise(function (resolve, reject) {
      data[i].json.forEach(function (r) {
        var date = r[data[i].fields.date];
        var taxon = r[data[i].fields.taxon];

        if (date && taxon && dateValid(date)) {
          var week = dateWeek(date);
          var pd = phenData[i].find(function (pd) {
            return pd.taxon === taxon && pd.week === week;
          });

          if (pd) {
            pd.count = pd.count + 1;
          } else {
            phenData[i].push({
              taxon: taxon,
              week: week,
              count: 1
            });
          }

          resolve();
        } else {
          reject();
        }
      });
    });
  }

  function combineData$1() {
    if (phenData[0] && phenData[1]) {
      // Combine the data into a single collection
      phenData[2] = phenData[0].map(function (pd) {
        return _objectSpread2(_objectSpread2({}, pd), {}, {
          count1: null
        });
      });
      phenData[1].forEach(function (pd1) {
        var pdcmatch = phenData[2].find(function (pdc) {
          return pdc.taxon === pd1.taxon && pdc.week === pd1.week;
        });

        if (pdcmatch) {
          pdcmatch.count1 = pd1.count;
        } else {
          phenData[2].push({
            taxon: pd1.taxon,
            week: pd1.week,
            count: null,
            count1: pd1.count
          });
        }
      });
    }
  }

  function makeChart$2(i) {
    var perRow = 4;

    if (dChecked$2[0] && dChecked$2[1] && !dChecked$2[2]) {
      perRow = 2;
    }

    var ytype = d3__namespace.select('input[name=rad-phen-count-type]:checked').property('value');
    var metrics, selector;

    if (i < 2) {
      selector = "#phenology-chart-".concat(i + 1);
      metrics = [{
        prop: 'count',
        label: data[i].name,
        colour: '#4188A3'
      }];
    } else {
      selector = "#phenology-chart-combine";
      metrics = [{
        prop: 'count',
        label: data[0].name,
        colour: '#4188A3'
      }, {
        prop: 'count1',
        label: data[1].name,
        colour: 'red'
      }];
    }

    var taxonFilter = d3__namespace.select('#phenology-filter').property('value');
    var taxaFiltered;
    var taxa = phenData[i].map(function (tw) {
      return tw.taxon;
    });

    var uniqueTaxa = _toConsumableArray(new Set(taxa)).sort();

    if (taxonFilter) {
      taxaFiltered = uniqueTaxa.filter(function (taxon) {
        return taxon.toLowerCase().includes(taxonFilter.toLowerCase());
      });
    } else {
      taxaFiltered = uniqueTaxa;
    }

    if (perRow !== currentPerRow$1[i] || !d3__namespace.select(selector).html().length || taxonFilter !== currentTaxonFilter$1[i] || currentYtype$1[i] !== ytype) {
      // Either this chart has not yet been generated or
      // the perRow value has changed.
      d3__namespace.select(selector).html('');
      var opts = {
        selector: selector,
        data: phenData[i],
        taxa: taxaFiltered,
        metrics: metrics,
        taxonLabelItalics: true,
        taxonLabelFontSize: 11,
        legendFontSize: 14,
        width: 350,
        height: 220,
        perRow: perRow,
        expand: true,
        axisLeft: 'tick',
        axisBottom: 'tick',
        axisRight: 'on',
        axisTop: 'on',
        ytype: ytype,
        interactivity: ''
      };
      console.log('phenData', opts);
      showMessage$2(i === 2 ? 'combine' : i + 1, "<span style='color: orange; font-weight: bold'>Generating phenology display...</span>");
      setTimeout(function () {
        window.brccharts.phen1(opts);
        showMessage$2(i === 2 ? 'combine' : i + 1, null);
      }, 1);
    }

    currentPerRow$1[i] = perRow;
    currentTaxonFilter$1[i] = taxonFilter;
    currentYtype$1[i] = ytype;
  }

  var phenology = /*#__PURE__*/Object.freeze({
    __proto__: null,
    gui: gui$4,
    tabSelected: tabSelected$4,
    dataCleared: dataCleared$4,
    fieldConfigCleared: fieldConfigCleared$4,
    phenologyDisplay: phenologyDisplay
  });

  var maps$1 = [null, null];
  var noTaxonText$1 = 'No taxon displayed'; // Standard interface functions

  function gui$3(sel) {
    // Options for overvie map
    var fldset = d3__namespace.select(sel).append('fieldset');
    fldset.append('legend').text('Map options');
    fldset.style('margin-top', '0.5em'); // Combined taxon selector

    taxonSelectionControl(fldset, 'overviewmap', 'brcdseval.mapoverviewClearMap', 'brcdseval.mapoverviewMap');

    function makeMapDiv(i) {
      var div = d3__namespace.select(sel).append('div');
      div.attr('id', "overviewmap-div-".concat(i));
      div.classed('split2', true);
      div.append('h4').attr('id', "overviewmap-name-".concat(i));
      div.append('p').attr('id', "overviewmap-message-".concat(i));
      div.append('p').attr('id', "overviewmap-taxon-name-".concat(i)).text(noTaxonText$1);
      div.append('div').attr('id', "overviewmap-container-".concat(i));
    }

    makeMapDiv(1);
    makeMapDiv(2);
  }
  function tabSelected$3() {
    var checkMap = function checkMap(i) {
      if (data[i - 1].fields && (!data[i - 1].fields.gr || !data[i - 1].fields.taxon)) {
        d3__namespace.select("#overviewmap-message-".concat(i)).html("\n          For the overview map, you must configure both the <i>Taxon</i> and <i>Grid ref</i> columns.\n        ");
        d3__namespace.select("#overviewmap-message-".concat(i)).style('display', '');
      } else {
        d3__namespace.select("#overviewmap-message-".concat(i)).style('display', 'none');

        if (!maps$1[i - 1] && data[i - 1].json && data[i - 1].fields) {
          // Create brc-atlas map object
          maps$1[i - 1] = window.brcatlas.svgMap({
            selector: "#overviewmap-container-".concat(i),
            mapid: "overviewmap".concat(i),
            transOptsKey: 'BI4',
            mapTypesControl: false,
            transOptsControl: false,
            mapTypesSel: {
              hectad: genHecatdMap
            },
            mapTypesKey: 'hectad'
          }); // Create taxon selection list

          populateTaxonSelectionControl('overviewmap');
        }

        d3__namespace.select("#overviewmap-div-".concat(i)).style("display", maps$1[i - 1] ? "" : "none");
        d3__namespace.select("#overviewmap-name-".concat(i)).text("D".concat(i, ": ").concat(data[i - 1].name));
      }
    };

    checkMap(1);
    checkMap(2);
  }
  function dataCleared$3(i) {
    clear$3(i);
  }
  function fieldConfigCleared$3(i) {
    clear$3(i);
  } // Exported from the library to use from html interface

  function mapoverviewMap(i) {
    var taxon = d3__namespace.select('#overviewmap-taxon').property('value'); // Strip the ds suffix

    if (taxon.endsWith('1,2')) {
      taxon = taxon.substring(0, taxon.length - 4);
    } else {
      taxon = taxon.substring(0, taxon.length - 2);
    }

    var updateMap = function updateMap(i) {
      // Taxon text
      if (taxon) {
        d3__namespace.select("#overviewmap-taxon-name-".concat(i)).text(taxon);
      } else {
        d3__namespace.select("#overviewmap-taxon-name-".concat(i)).text(noTaxonText$1);
      }

      maps$1[i - 1].setIdentfier({
        i: i,
        taxon: taxon
      });
      maps$1[i - 1].redrawMap();
    };

    if (i === 3) {
      if (maps$1[0]) updateMap(1);
      if (maps$1[1]) updateMap(2);
    } else {
      if (maps$1[i - 1]) updateMap(i);
    }
  }
  function clear$3(i) {
    maps$1[i - 1] = null;
    d3__namespace.select("#overviewmap-container-".concat(i)).html('');
    d3__namespace.select("#overviewmap-taxon-name-".concat(i)).text(noTaxonText$1);
  }
  function mapoverviewClearMap(input) {
    input.value = ''; //maps[i-1].clearMap()
  }
  function mapoverviewDisplay() {
    // Function responsible for display one or both maps
    var d1 = d3__namespace.select('#overviewmap-check-1').property("checked");
    var d2 = d3__namespace.select('#overviewmap-check-2').property("checked");

    if (d1) {
      d3__namespace.select('#overviewmap-div-1').style("display", "");
    } else {
      d3__namespace.select('#overviewmap-div-1').style("display", "none");
    }

    if (d2) {
      d3__namespace.select('#overviewmap-div-2').style("display", "");
    } else {
      d3__namespace.select('#overviewmap-div-2').style("display", "none");
    }
  } // Helper functions

  function genHecatdMap(props) {
    var i = props.i;
    var taxon = props.taxon;
    var fgr = data[i - 1].fields.gr;
    var ft = data[i - 1].fields.taxon;
    var hectads = [];
    data[i - 1].json.forEach(function (r) {
      var grcheck;

      try {
        grcheck = checkGr(r[fgr]);
      } catch (err) {
        grcheck = null;
      }

      if (grcheck && grcheck.precision <= 10000) {
        var hectad = getLowerResGrs(r[fgr]).p10000;

        if (r[ft] === taxon) {
          if (hectads.indexOf(hectad) === -1) {
            hectads.push(hectad);
          }
        }
      }
    });
    var data$1 = hectads.map(function (h) {
      return {
        gr: h,
        colour: 'black'
      };
    });
    return new Promise(function (resolve) {
      resolve({
        records: data$1,
        precision: 10000,
        shape: 'circle',
        opacity: 1,
        size: 1
      });
    });
  }

  var mapoverview = /*#__PURE__*/Object.freeze({
    __proto__: null,
    gui: gui$3,
    tabSelected: tabSelected$3,
    dataCleared: dataCleared$3,
    fieldConfigCleared: fieldConfigCleared$3,
    mapoverviewMap: mapoverviewMap,
    clear: clear$3,
    mapoverviewClearMap: mapoverviewClearMap,
    mapoverviewDisplay: mapoverviewDisplay
  });

  //import bigr from 'brc-atlas-bigr'

  var maps = [null, null, null];
  var dChecked$1 = [true, false, false];
  var mapDisplayed = [false, false, false];
  var taxa = ['', '', ''];
  var movingMap = false;
  var noTaxonText = 'No taxon displayed'; // Standard interface functions

  function gui$2(sel) {
    datasetCheckboxes(sel, 'slippymap-check', 'mapslippyDisplay', true); // Layout for the slippy maps

    var div = d3__namespace.select(sel).append('div'); // Options for slippy maps

    var fldset = div.append('fieldset');
    fldset.append('legend').text('Map options');
    fldset.style('margin-top', '0.5em'); // Combined taxon selector

    taxonSelectionControl(fldset, 'slippymap', 'brcdseval.mapslippyClearMap', 'brcdseval.mapslippyMap'); // Map type selector

    dropDown(fldset, 'input-slippymap-maptype', 'Set map type...', ['Hectad', 'Quadrant', 'Tetrad', 'Monad', 'Point'], 'Hectad', 'brcdseval.mapslippyMap'); // Height input

    numberInput(fldset, 'input-slippymap-height', 'Map height:', 300, 1200, 500, 'brcdseval.mapslippySetHeight', true); // Basemap fader

    numberInput(fldset, 'input-slippymap-basemap-opacity', 'Base opacity:', 0, 100, 50, 'brcdseval.mapslippyBasemapOpacity', true);
    checkbox(fldset, 'cluster-threshold', 'Reduce cluster at high zoom', 'brcdseval.mapslippyClusterChanged', false); // Layout for slippy maps

    var divMaps = d3__namespace.select(sel).append('div');
    var divCombined = d3__namespace.select(sel).append('div');

    function makeMapDiv(i) {
      var parent = i < 3 ? divMaps : divCombined;
      var div = parent.append('div');
      div.attr('id', "slippymap-div-".concat(i));
      div.append('h4').attr('id', "slippymap-name-".concat(i));
      div.append('p').attr('id', "slippymap-message-".concat(i));
      div.append('p').attr('id', "slippymap-taxon-name-".concat(i)).text(noTaxonText);
      var container = div.append('div').attr('id', "slippymap-container-".concat(i));
      container.style('border', '1px solid black');
    }

    makeMapDiv(1);
    makeMapDiv(2);
    makeMapDiv(3);
  }
  function tabSelected$2() {
    var moveMaps = function moveMaps(iMap) {
      if (!movingMap) {
        movingMap = true;
        var latlng = maps[iMap - 1].lmap.getCenter();
        var zoom = maps[iMap - 1].lmap.getZoom();
        maps.forEach(function (m, i) {
          if (m && i + 1 !== iMap) {
            m.lmap.setView(latlng, zoom);
          }
        });
        movingMap = false;
      }
    };

    var checkFields = function checkFields(i) {
      if (!data[i - 1].fields) {
        return "You must configure the column mappings of dataset ".concat(i, ".");
      } else if (data[i - 1].fields && (!data[i - 1].fields.gr || !data[i - 1].fields.taxon)) {
        return "For the exploration map, you must configure both the <i>Taxon</i> and <i>Grid ref</i> columns of dataset ".concat(i, ".");
      } else {
        return '';
      }
    };

    var pointClicked = function pointClicked(gr, id, caption) {
      var ids = id.split('-');
      var i = ids[0];
      var row = ids[1];
      var attrs = data[i - 1].json[row];
      var html = '';
      Object.keys(attrs).forEach(function (a) {
        html = html ? "".concat(html, "</br>") : '';
        html = "".concat(html, "<b>").concat(a, "</b>: ").concat(attrs[a]);
      });
      d3__namespace.select('#modalDialogContent').html(html);
      d3__namespace.select('#modalDialog').style('display', 'block');
      d3__namespace.select('.modal-close').on('click', function () {
        d3__namespace.select('#modalDialog').style('display', 'none');
      });
    };

    var checkMap = function checkMap(i) {
      var msg;

      if (i === 3) {
        var msg1 = checkFields(1);
        var msg2 = checkFields(2);
        msg = msg1 && msg2 ? "".concat(msg1, " ").concat(msg2) : msg1 ? msg1 : msg2 ? msg2 : '';
      } else {
        msg = checkFields(i);
      }

      if (msg) {
        d3__namespace.select("#slippymap-message-".concat(i)).html(msg);
        d3__namespace.select("#slippymap-message-".concat(i)).style('display', '');
      } else {
        d3__namespace.select("#slippymap-message-".concat(i)).style('display', 'none');

        if (!maps[i - 1]) {
          // Create brc-atlas map object
          var reduceCluster = d3__namespace.select('#cluster-threshold').property('checked');
          maps[i - 1] = window.brcatlas.leafletMap({
            selector: "#slippymap-container-".concat(i),
            mapid: "slippymap".concat(i),
            mapTypesSel: {
              atlas: atlasMap
            },
            mapTypesKey: 'atlas',
            //legendOptlegendOpts: {display: true}
            clusterZoomThreshold: reduceCluster ? 10 : 19,
            legendOpts: {
              display: i === 3 ? true : false,
              scale: 0.8,
              x: 10
            },
            onclick: pointClicked
          }); // Set opacity

          mapslippyBasemapOpacity(); // Synchronise panning/zooming

          maps[i - 1].lmap.on('zoomend', function () {
            return moveMaps(i);
          });
          maps[i - 1].lmap.on('moveend', function () {
            return moveMaps(i);
          }); // Basemaps

          addBaseMaps(i); // Reset map width to 100%

          d3__namespace.select("#slippymap".concat(i)).style('width', '100%'); // Create taxon selection list
          //gen.populateTaxonSelectionControl(i, 'slippymap')
        }

        d3__namespace.select("#slippymap-div-".concat(i)).style("display", maps[i - 1] ? "" : "none");

        if (i === 3) {
          d3__namespace.select("#slippymap-name-".concat(i)).text('Combined display');
        } else {
          d3__namespace.select("#slippymap-name-".concat(i)).text("D".concat(i, ": ").concat(data[i - 1].name));
        }
      }
    };

    populateTaxonSelectionControl('slippymap');
    checkMap(1);
    checkMap(2);
    checkMap(3);
    mapslippyDisplay();
    refreshMaps();
  }
  function dataCleared$2(i) {
    clear$2(i);
  }
  function fieldConfigCleared$2(i) {
    clear$2(i);
  } // Exported from the library to use from html interface

  function mapslippyMap(i) {
    // If no argument set, then the function has been called from
    // map type drop-down.
    var updateMap = function updateMap(i) {
      var taxon = taxa[i - 1];
      var mapType = d3__namespace.select('#input-slippymap-maptype').property('value'); // Taxon text

      if (taxon) {
        d3__namespace.select("#slippymap-taxon-name-".concat(i)).text("".concat(taxon, " - ").concat(mapType));
      } else {
        d3__namespace.select("#slippymap-taxon-name-".concat(i)).text(noTaxonText);
      } // Map


      maps[i - 1].setIdentfier({
        i: i,
        taxon: taxon,
        mapType: mapType
      });
      maps[i - 1].redrawMap();
    };

    if (i) {
      // Called from taxon selector.
      var taxon = d3__namespace.select('#slippymap-taxon').property('value'); // Strip the ds suffix

      if (taxon.endsWith('1,2')) {
        taxon = taxon.substring(0, taxon.length - 4);
      } else {
        taxon = taxon.substring(0, taxon.length - 2);
      }

      if (i === 3) {
        // 'Both' button clicked
        if (mapDisplayed[2]) {
          console.log('update 3'); // Combined map

          taxa[i - 1] = taxon;
          updateMap(3);
        } else {
          // Separate maps
          taxa[0] = taxon;
          if (mapDisplayed[0]) updateMap(1);
          taxa[1] = taxon;
          if (mapDisplayed[1]) updateMap(2);
        }
      } else {
        // D1 or D2 button clicked
        taxa[i - 1] = taxon;
        if (mapDisplayed[i - 1]) updateMap(i);
      }
    } else {
      // Map type changed
      maps.forEach(function (m, i) {
        if (m && mapDisplayed[i]) {
          updateMap(i + 1);
        }
      });
    }
  }
  function mapslippyClearMap(input) {
    input.value = ''; //maps[i-1].clearMap()
  }
  function mapslippyDisplay() {
    // Function responsible for display one or both maps
    dChecked$1[0] = d3__namespace.select('#slippymap-check-1').property("checked");
    dChecked$1[1] = d3__namespace.select('#slippymap-check-2').property("checked");
    dChecked$1[2] = d3__namespace.select("#slippymap-check-combine").property('checked');

    if (dChecked$1[2] && dChecked$1[0] && dChecked$1[1]) {
      mapDisplayed = [false, false, true];
    } else {
      mapDisplayed[0] = dChecked$1[0];
      mapDisplayed[1] = dChecked$1[1];
      mapDisplayed[2] = false;

      if (dChecked$1[0] && dChecked$1[1]) {
        d3__namespace.select('#slippymap-div-1').classed("splitx", true);
        d3__namespace.select('#slippymap-div-2').classed("splitx", true);
      } else {
        d3__namespace.select('#slippymap-div-1').classed("splitx", false);
        d3__namespace.select('#slippymap-div-2').classed("splitx", false);
      }
    }

    for (var i = 0; i < 3; i++) {
      d3__namespace.select("#slippymap-div-".concat(i + 1)).style("display", mapDisplayed[i] ? '' : 'none');
    }

    refreshMaps();
  }
  function mapslippySetHeight() {
    maps.forEach(function (m, i) {
      if (m) {
        var height = Number(d3__namespace.select('#input-slippymap-height').property('value'));

        if (!height) {
          height = 500; // This matches the default in brcatlas
        }

        var bounds = document.getElementById("slippymap".concat(i + 1)).getBoundingClientRect();
        var width = bounds.width;
        m.setSize(width, height);
        d3__namespace.select("#slippymap".concat(i)).style('width', '100%');
      }
    });
  }
  function mapslippyBasemapOpacity() {
    var opacity = Number(d3__namespace.select('#input-slippymap-basemap-opacity').property('value'));
    d3__namespace.selectAll('.leaflet-tile-pane').style('opacity', opacity / 100);
  }
  function mapslippyClusterChanged() {
    var reduceCluster = d3__namespace.select('#cluster-threshold').property('checked');
    maps.forEach(function (m) {
      if (m) {
        m.changeClusterThreshold(reduceCluster ? 10 : 19);
      }
    });
    console.log('mapslippyClusterChanged');
  } // Helper functions

  function clear$2(i) {
    maps[i - 1] = null;
    d3__namespace.select("#slippymap-container-".concat(i)).html('');
    d3__namespace.select("#slippymap-container-3").html('');
    d3__namespace.select("#slippymap-taxon-name-".concat(i)).text(noTaxonText);
    d3__namespace.select("#slippymap-taxon-name-3").html('');
  }

  function atlasMap(identifier) {
    console.log('atlasmap', identifier);

    var isCached = function isCached(i, taxon, precision) {
      return data[i - 1] && data[i - 1].atlas && data[i - 1].atlas[taxon] && data[i - 1].atlas[taxon]["p".concat(precision)];
    };

    var getCached = function getCached(i, taxon, precision) {
      if (isCached(i, taxon, precision)) {
        return data[i - 1].atlas[taxon]["p".concat(precision)];
      }
    };

    var setCache = function setCache(i, taxon, precision, data$1) {
      if (!data[i - 1]) data[i - 1] = {}; // Can be the case for combined data (i=3)

      if (!data[i - 1].atlas) data[i - 1].atlas = {};
      if (!data[i - 1].atlas[taxon]) data[i - 1].atlas[taxon] = {};
      data[i - 1].atlas[taxon]["p".concat(precision)] = data$1;
    };

    var getData = function getData(i, taxon, precision) {
      //console.log('rawdata', gen.data[i-1])
      console.log(i, taxon, precision);
      var fgr = data[i - 1].fields.gr;
      var ft = data[i - 1].fields.taxon;
      var data$1;

      if (isCached(i, taxon, precision)) {
        data$1 = getCached(i, taxon, precision);
      } else {
        // Generate data
        data$1 = [];
        data[i - 1].json.forEach(function (r, row) {
          var grcheck;

          try {
            grcheck = checkGr(r[fgr]);
          } catch (err) {
            grcheck = null;
          }

          if (grcheck && (grcheck.precision <= precision || precision === 0)) {
            var gr = precision === 0 ? r[fgr] : getLowerResGrs(r[fgr])["p".concat(precision)]; // For quadrants and array is returned

            if (precision === 5000) {
              if (gr.length === 1) {
                gr = gr[0];
              } else {
                gr = null;
              }
            }

            if (gr && r[ft] === taxon) {
              if (precision === 0) {
                // No aggregating of point data
                data$1.push({
                  id: "".concat(i, "-").concat(row),
                  gr: gr
                });
              } else {
                //Altas data is aggregated
                if (data$1.indexOf(gr) === -1) {
                  data$1.push(gr);
                }
              }
            }
          }
        });
        setCache(i, taxon, precision, data$1);
      }

      return data$1;
    };

    var i = identifier.i;
    var taxon = identifier.taxon;
    var precision;

    switch (identifier.mapType) {
      case 'Hectad':
        precision = 10000;
        break;

      case 'Quadrant':
        precision = 5000;
        break;

      case 'Tetrad':
        precision = 2000;
        break;

      case 'Monad':
        precision = 1000;
        break;

      default:
        precision = 0;
    }

    var atlas;

    if (i === 3) {
      if (isCached(3, taxon, precision)) {
        atlas = getCached(3, taxon, precision);
      } else {
        var d1 = getData(1, taxon, precision);
        var d2 = getData(2, taxon, precision);

        if (precision === 0) {
          atlas = [].concat(_toConsumableArray(d1.map(function (d) {
            return {
              gr: d.gr,
              id: d.id,
              colour: 'blue'
            };
          })), _toConsumableArray(d2.map(function (d) {
            return {
              gr: d.gr,
              id: d.id,
              colour: 'red'
            };
          })));
        } else {
          // Merge the two datasets, mapping grs to objects that
          // indicate both gr and dataset occurrence (colour)
          atlas = d1.map(function (gr) {
            return {
              gr: gr,
              colour: 'blue'
            };
          });
          d2.forEach(function (gr) {
            var match = atlas.find(function (e) {
              return e.gr === gr;
            });

            if (match) {
              match.colour = 'gold';
            } else {
              atlas.push({
                gr: gr,
                colour: 'red'
              });
            }
          });
        }

        setCache(i, taxon, precision, atlas);
        console.log(atlas);
      }
    } else {
      atlas = getData(i, taxon, precision);
    }

    console.log('atlas', atlas);
    console.log('i', i);
    var data$1, legend;

    if (i < 3) {
      if (precision === 0) {
        data$1 = atlas.map(function (r) {
          return {
            gr: r.gr,
            id: r.id,
            colour: 'blue'
          };
        });
      } else {
        data$1 = atlas.map(function (gr) {
          return {
            gr: gr,
            colour: 'blue'
          };
        });
      }

      legend = {};
    } else {
      data$1 = atlas;
      legend = {
        title: 'Dataset presence',
        size: 1,
        shape: 'square',
        precision: precision,
        opacity: 0.8,
        lines: [{
          colour: 'blue',
          text: data[0].name
        }, {
          colour: 'red',
          text: data[1].name
        }, {
          colour: 'gold',
          text: 'Both datasets'
        }]
      };
    }

    console.log('legend', legend);
    return new Promise(function (resolve) {
      resolve({
        records: data$1,
        precision: precision,
        shape: 'square',
        opacity: 0.8,
        size: 1,
        legend: legend
      });
    });
  }

  function refreshMaps() {
    maps.forEach(function (m) {
      if (m) {
        m.invalidateSize();
      }
    });
  }

  function addBaseMaps(iMap) {
    var stamentoner = {
      name: 'Stamen Toner',
      type: 'wms',
      selected: true,
      url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png',
      opts: {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        // bounds: [[49.6, -12], [61.7, 3]],
        // minZoom: 1,
        // maxZoom: 18,
        // subdomains: '0123'
        opacity: 1
      }
    };
    maps[iMap - 1].addBasemapLayer(stamentoner);
  }

  var mapslippy = /*#__PURE__*/Object.freeze({
    __proto__: null,
    gui: gui$2,
    tabSelected: tabSelected$2,
    dataCleared: dataCleared$2,
    fieldConfigCleared: fieldConfigCleared$2,
    mapslippyMap: mapslippyMap,
    mapslippyClearMap: mapslippyClearMap,
    mapslippyDisplay: mapslippyDisplay,
    mapslippySetHeight: mapslippySetHeight,
    mapslippyBasemapOpacity: mapslippyBasemapOpacity,
    mapslippyClusterChanged: mapslippyClusterChanged
  });

  var timeData = [null, null, null];
  var dChecked = [true, false, false];
  var currentPerRow = [0, 0, 0];
  var currentTaxonFilter = ['', '', ''];
  var currentYtype = ['', '', ''];
  var currentMinYear = ['', '', ''];
  var currentMaxYear = ['', '', '']; // Standard interface functions

  function gui$1(sel) {
    datasetCheckboxes(sel, 'timeseries-check', 'timeseriesDisplay', true); // Layout for time series charts

    var div = d3__namespace.select(sel).append('div');
    var fldset = div.append('fieldset');
    fldset.append('legend').text('Time series chart options');
    fldset.style('margin-top', '0.5em'); // Taxon filter

    textInput(fldset, 'timeseries-filter', 'Enter a filter for taxa', 'brcdseval.timeseriesDisplay', 'Apply'); // Records vs visits radio buttons

    var radios = [{
      value: 'count',
      label: 'Record counts',
      checked: true
    }, {
      value: 'visits',
      label: 'Unique visits',
      checked: false
    }];
    radioButtonSet(fldset, 'rad-timeseries-count-type', 'rad-timeseries-count', 'brcdseval.timeseriesDisplay', radios); // Year input

    numberInput(fldset, 'input-timeseries-minyear', 'Min year', 1980, 2021, null, 'brcdseval.timeseriesDisplay');
    numberInput(fldset, 'input-timeseries-maxyear', 'Max year', 1980, 2021, null, 'brcdseval.timeseriesDisplay');

    function tableDiv(i, initDisplay) {
      var tabDiv = div.append('div');

      if (!initDisplay) {
        tabDiv.style('display', 'none');
      }

      tabDiv.attr('id', "timeseries-div-".concat(i));
      tabDiv.append('h4').attr('id', "timeseries-name-".concat(i));
      tabDiv.append('p').attr('id', "timeseries-message-".concat(i));
      tabDiv.append('div').attr('id', "timeseries-chart-".concat(i));
    }

    tableDiv(1, true);
    tableDiv(2, false); // Div for combined display

    var tabDiv = div.append('div');
    tabDiv.style('display', 'none');
    tabDiv.attr('id', "timeseries-div-combine");
    tabDiv.append('h4').attr('id', "timeseries-name-combine");
    tabDiv.append('p').attr('id', "timeseries-message-combine");
    tabDiv.append('div').attr('id', "timeseries-chart-combine");
  }
  function tabSelected$1() {
    for (var i = 0; i < 2; i++) {
      // Warn if data selected but the necessary config is not set
      if (data[i] && data[i].fields) {
        if (!data[i].fields.taxon || !data[i].fields.date) {
          d3__namespace.select("#summary-message-".concat(i)).style('display', '');
          showMessage$1(i + 1, "To see time series charts for dataset ".concat(i + 1, ", \n          both <i>taxon</i> and <i>date</i> fields must be configured.\n        "));
        } else if (!data[i].fields.gr) {
          d3__namespace.select("#summary-message-".concat(i)).style('display', '');
          showMessage$1(i + 1, "For 'visit' counts rather than 'record' counts on the Y axis, you also\n          need to configure the <i>grid ref</i> field for dataset ".concat(i + 1, ".\n        "));
        } else {
          showMessage$1(i + 1, null);
        }
      } else {
        showMessage$1(i + 1, null);
      }
    }

    displayData$1();
  }
  function dataCleared$1(i) {
    clear$1(i);
  }
  function fieldConfigCleared$1(i) {
    clear$1(i);
  } // Exported from the library to use from html interface

  function timeseriesDisplay() {
    // Function responsible for display one or both charts
    dChecked[0] = d3__namespace.select('#timeseries-check-1').property("checked");
    dChecked[1] = d3__namespace.select('#timeseries-check-2').property("checked");
    dChecked[2] = d3__namespace.select("#timeseries-check-combine").property('checked');

    if (dChecked[2] && dChecked[0] && dChecked[1]) {
      d3__namespace.select('#timeseries-div-combine').style("display", "");
      d3__namespace.select('#timeseries-div-1').style("display", "none");
      d3__namespace.select('#timeseries-div-2').style("display", "none");
    } else {
      d3__namespace.select('#timeseries-div-combine').style("display", "none");

      if (dChecked[0] && dChecked[1]) {
        d3__namespace.select('#timeseries-div-1').classed("splitx", true);
        d3__namespace.select('#timeseries-div-2').classed("splitx", true);
      } else {
        d3__namespace.select('#timeseries-div-1').classed("splitx", false);
        d3__namespace.select('#timeseries-div-2').classed("splitx", false);
      }

      if (dChecked[0]) {
        d3__namespace.select('#timeseries-div-1').style("display", "");
      } else {
        d3__namespace.select('#timeseries-div-1').style("display", "none");
      }

      if (dChecked[1]) {
        d3__namespace.select('#timeseries-div-2').style("display", "");
      } else {
        d3__namespace.select('#timeseries-div-2').style("display", "none");
      }
    }

    displayData$1();
  } // Helper functions

  function showMessage$1(i, html) {
    if (html) {
      d3__namespace.select("#timeseries-message-".concat(i)).style('display', '');
      d3__namespace.select("#timeseries-message-".concat(i)).html(html);
    } else {
      d3__namespace.select("#timeseries-message-".concat(i)).style('display', 'none');
      d3__namespace.select("#timeseries-message-".concat(i)).html('');
    }
  }

  function displayData$1() {
    console.log("Display time series stuff");
    var pLoads = [];

    var _loop = function _loop(i) {
      var p = void 0; // Generate time series data if not already exists and all the necessary config is set

      if (dChecked[i] && data[i] && data[i].fields && data[i].fields.taxon && data[i].fields.date) {
        if (timeData[i]) {
          makeChart$1(i);
          p = Promise.resolve();
        } else {
          showMessage$1(i + 1, "<span style='color: orange; font-weight: bold'>Configuring data for time series display...</span>");
          setTimeout(function () {
            // Timeout required to allow GUI to update (i.e. time series tab to show)
            p = loadData$1(i).then(function () {
              showMessage$1(i + 1, null);
              makeChart$1(i);
            });
          }, 1);
        }
      } else {
        p = Promise.resolve();
      }

      pLoads.push(p);
    };

    for (var i = 0; i < 2; i++) {
      _loop(i);
    }

    Promise.all(pLoads).then(function () {
      console.log("promises resolved"); // If combine display box is checked

      if (dChecked[2]) {
        if (timeData[2]) {
          makeChart$1(2);
        } else {
          showMessage$1('combine', "<span style='color: orange; font-weight: bold'>Configuring data for combined time series display...</span>");
          setTimeout(function () {
            combineData();
            if (timeData[2]) makeChart$1(2);
            showMessage$1('combine', null);
          }, 1);
        }
      }
    });
  }

  function clear$1(i) {
    timeData[i - 1] = null;
    timeData[2] = null; // Combined data

    d3__namespace.select("#timeseries-chart-".concat(i)).html('');
    d3__namespace.select("#timeseries-chart-combine").html('');
  }

  function loadData$1(i) {
    timeData[i] = []; // Data generation is wrapped in a promise so that the interface will
    // not hang.

    return new Promise(function (resolve, reject) {
      data[i].json.forEach(function (r) {
        var date = r[data[i].fields.date];
        var taxon = r[data[i].fields.taxon];
        var gr = data[i].fields.gr ? r[data[i].fields.gr] : null; // If the gr and date are set, concatenate them - unique combinations
        // are considered unique visits.

        var date1km = null;

        if (gr && date) {
          var grcheck;

          try {
            grcheck = checkGr(gr);
          } catch (err) {
            grcheck = null;
          }

          if (grcheck && grcheck.precision <= 1000) {
            date1km = "".concat(getLowerResGrs(gr).p1000, "-").concat(date);
          }
        }

        if (date && taxon && dateValid(date)) {
          var year = dateYear(date);
          var pd = timeData[i].find(function (pd) {
            return pd.taxon === taxon && pd.year === year;
          });

          if (pd) {
            pd.count = pd.count + 1;

            if (date1km && pd.date1km.indexOf(date1km) === -1) {
              pd.date1km.push(date1km);
            }
          } else {
            timeData[i].push({
              taxon: taxon,
              year: year,
              count: 1,
              date1km: date1km ? [date1km] : []
            });
          }
        }
      }); // Set the visit count from array and then delete the array which
      // is no longer required

      timeData[i].forEach(function (r) {
        r['visits'] = r.date1km.length;
        delete r.date1km;
      });
      resolve();
    });
  }

  function combineData() {
    if (timeData[0] && timeData[1]) {
      // Combine the data into a single collection
      timeData[2] = timeData[0].map(function (ts) {
        return _objectSpread2(_objectSpread2({}, ts), {}, {
          count1: null,
          visits1: null
        });
      });
      timeData[1].forEach(function (ts1) {
        var tscmatch = timeData[2].find(function (tsc) {
          return tsc.taxon === ts1.taxon && tsc.year === ts1.year;
        });

        if (tscmatch) {
          tscmatch.count1 = ts1.count;
          tscmatch.visits1 = ts1.visits;
        } else {
          timeData[2].push({
            taxon: ts1.taxon,
            year: ts1.year,
            count: null,
            count1: ts1.count,
            visits: null,
            visits1: ts1.visits
          });
        }
      });
    }
  }

  function makeChart$1(i) {
    var perRow = 4;

    if (dChecked[0] && dChecked[1] && !dChecked[2]) {
      perRow = 2;
    }

    var ytype = d3__namespace.select('input[name=rad-timeseries-count-type]:checked').property('value');
    var minYear = Number(d3__namespace.select('#input-timeseries-minyear').property('value'));
    var maxYear = Number(d3__namespace.select('#input-timeseries-maxyear').property('value'));
    var selector, metrics;

    if (i < 2) {
      selector = "#timeseries-chart-".concat(i + 1);
      metrics = [{
        prop: ytype,
        label: data[i].name,
        colour: '#4188A3',
        opacity: 1
      }];
    } else {
      selector = "#timeseries-chart-combine";
      metrics = [{
        prop: ytype,
        label: data[0].name,
        colour: '#4188A3',
        opacity: 0.5
      }, {
        prop: "".concat(ytype, "1"),
        label: data[1].name,
        colour: 'red',
        opacity: 0.5
      }];
    }

    var taxonFilter = d3__namespace.select('#timeseries-filter').property('value');
    var taxaFiltered;
    var taxa = timeData[i].map(function (tw) {
      return tw.taxon;
    });

    var uniqueTaxa = _toConsumableArray(new Set(taxa)).sort();

    if (taxonFilter) {
      taxaFiltered = uniqueTaxa.filter(function (taxon) {
        return taxon.toLowerCase().includes(taxonFilter.toLowerCase());
      });
    } else {
      taxaFiltered = uniqueTaxa;
    }

    if (perRow !== currentPerRow[i] || !d3__namespace.select(selector).html().length || taxonFilter !== currentTaxonFilter[i] || currentYtype[i] !== ytype || currentMinYear[i] !== minYear || currentMaxYear[i] !== maxYear) {
      // Either this chart has not yet been generated or
      // one of the major configuration options has changed.
      d3__namespace.select(selector).html('');
      console.log('timedata', timeData[i]);
      console.log('years', minYear, maxYear);
      var opts = {
        selector: selector,
        data: timeData[i],
        metrics: metrics,
        taxa: taxaFiltered,
        taxonLabelItalics: true,
        taxonLabelFontSize: 11,
        showLegend: true,
        legendFontSize: 14,
        width: 350,
        height: 220,
        perRow: perRow,
        expand: true,
        axisLeft: 'tick',
        axisBottom: 'tick',
        axisRight: 'on',
        axisTop: 'on',
        interactivity: '',
        showCounts: 'bar',
        minYear: minYear ? minYear : null,
        maxYear: maxYear ? maxYear : null
      };
      showMessage$1(i === 2 ? 'combine' : i + 1, "<span style='color: orange; font-weight: bold'>Generating time series display...</span>");
      setTimeout(function () {
        window.brccharts.yearly(opts);
        showMessage$1(i === 2 ? 'combine' : i + 1, null);
      }, 1);
    }

    currentPerRow[i] = perRow;
    currentTaxonFilter[i] = taxonFilter;
    currentYtype[i] = ytype;
    currentMinYear[i] = minYear;
    currentMaxYear[i] = maxYear;
  }

  var timeseries = /*#__PURE__*/Object.freeze({
    __proto__: null,
    gui: gui$1,
    tabSelected: tabSelected$1,
    dataCleared: dataCleared$1,
    fieldConfigCleared: fieldConfigCleared$1,
    timeseriesDisplay: timeseriesDisplay
  });

  var visitData = [null, null];
  var combinedData = null;
  var barWidth = 200;
  var barHeight = 20;
  var tabulator = null; // Standard interface functions

  function gui(sel) {
    // Options for overvie map
    var fldset = d3__namespace.select(sel).append('fieldset');
    fldset.append('legend').text('Visit analyses controls');
    button(fldset, 'brcdseval.visitsDownloadCSV', 'Download CSV');
    fldset.style('margin-top', '0.5em');
    d3__namespace.select(sel).append('h4').attr('id', "visits-name-1");
    d3__namespace.select(sel).append('p').attr('id', "visits-message-1");
    d3__namespace.select(sel).append('h4').attr('id', "visits-name-2");
    d3__namespace.select(sel).append('p').attr('id', "visits-message-2");
    var legend = d3__namespace.select(sel).append('p').attr('id', "visits-legend");
    d3__namespace.select(sel).append('p').attr('id', "visits-table"); // Legend

    var legendItems = [{
      colour: 'blue',
      caption: 'Visits only in D1'
    }, {
      colour: 'gold',
      caption: 'Visits in D1 & D2'
    }, {
      colour: 'red',
      caption: 'Visits only in D2'
    }];
    legendItems.forEach(function (li) {
      legend.append('div').style('background-color', li.colour).style('display', 'inline-block').style('padding', '0.2em 0.4em').style('color', li.colour === 'gold' ? 'black' : 'white').style('font-weight', 'bold').style('font-size', '0.9em').text(li.caption);
    });
    legend.style('display', 'none');
  }
  function tabSelected() {
    for (var i = 0; i < 2; i++) {
      // Warn if data selected but the necessary config is not set
      if (data[i] && data[i].fields) {
        if (!data[i].fields.taxon || !data[i].fields.date || !data[i].fields.gr) {
          //d3.select(`#summary-message-${i}`).style('display', '')
          showMessage(i + 1, "To carry out visit analysis for dataset ".concat(i + 1, ", the fields\n          <i>taxon</i>, <i>date</i> and <i>gr</i> must be configured.\n        "));
        } else {
          showMessage(i + 1, null);
        }

        d3__namespace.select("#visits-name-".concat(i + 1)).text("D".concat(i + 1, ": ").concat(data[i].name));
        d3__namespace.select("#visits-name-".concat(i + 1)).style('display', '');
      } else {
        d3__namespace.select("#visits-name-".concat(i + 1)).text('');
        d3__namespace.select("#visits-name-".concat(i + 1)).style('display', 'none');
        showMessage(i + 1, null);
      }
    }

    displayData();
  }
  function dataCleared(i) {
    clear(i);
  }
  function fieldConfigCleared(i) {
    clear(i);
  } // Exported from the library to use from html interface
  // None

  function visitsDownloadCSV() {
    if (tabulator) {
      console.log('download');
      tabulator.download("csv", "brc-ds-eval-visits.csv");
    } else {
      console.log('no tabulator');
    }
  } // Helper functions

  function showMessage(i, html) {
    if (html) {
      d3__namespace.select("#visits-message-".concat(i)).style('display', '');
      d3__namespace.select("#visits-message-".concat(i)).html(html);
    } else {
      d3__namespace.select("#visits-message-".concat(i)).style('display', 'none');
      d3__namespace.select("#visits-message-".concat(i)).html('');
    }
  }

  function displayData() {
    var deferreds = [];
    var p1 = new Promise(function (resolve, reject) {
      deferreds.push({
        resolve: resolve,
        reject: reject
      });
    });
    var p2 = new Promise(function (resolve, reject) {
      deferreds.push({
        resolve: resolve,
        reject: reject
      });
    });
    var pLoads = [p1, p2];

    var _loop = function _loop(i) {
      var p = void 0; // Generate visit data if not already exists and all the necessary config is set

      if (data[i] && data[i].fields && data[i].fields.taxon && data[i].fields.date && data[i].fields.gr) {
        if (visitData[i]) {
          deferreds[i].resolve();
        } else {
          combinedData = null;
          showMessage(i + 1, "<span style='color: orange; font-weight: bold'>Configuring dataset ".concat(i + 1, " for visit analysis...</span>"));
          setTimeout(function () {
            // Timeout required to allow GUI to update (i.e. tab to show)
            loadData(i).then(function () {
              showMessage(i + 1, null);
              deferreds[i].resolve();
            });
          }, 1);
        }
      } else {
        deferreds[i].resolve();
      }

      pLoads.push(p);
    };

    for (var i = 0; i < 2; i++) {
      _loop(i);
    }

    Promise.all(pLoads).then(function () {
      if (!combinedData) {
        combinedData = [];

        var _loop2 = function _loop2(_i) {
          if (visitData[_i]) {
            visitData[_i].forEach(function (r) {
              var cd = combinedData.find(function (c) {
                return c.taxon === r.taxon;
              });

              if (cd) {
                if (_i === 0) {
                  cd.d1 = r.visits;
                } else {
                  cd.d2 = r.visits;
                }
              } else {
                combinedData.push({
                  taxon: r.taxon,
                  d1: _i === 0 ? r.visits : [],
                  d2: _i === 1 ? r.visits : []
                });
              }
            });
          }
        };

        for (var _i = 0; _i < 2; _i++) {
          _loop2(_i);
        }

        var d1 = visitData[0];
        var d2 = visitData[1];
        var both = d1 && d2;
        combinedData.forEach(function (cd) {
          if (cd.d1 && cd.d2) {
            var union = new Set([].concat(_toConsumableArray(cd.d1), _toConsumableArray(cd.d2)));
            cd.union = both ? _toConsumableArray(union).length : null;
            cd.intersect = both ? cd.d1.filter(function (v) {
              return cd.d2.indexOf(v) > -1;
            }).length : null;
            cd.d1 = d1 ? cd.d1.length : null;
            cd.d2 = d2 ? cd.d2.length : null;
            cd.ud1 = cd.d1 && both ? Math.round(cd.union / cd.d1 * 10) / 10 : null;
            cd.ud2 = cd.d2 && both ? Math.round(cd.union / cd.d2 * 10) / 10 : null;
            cd.iu = both ? Math.round(cd.intersect / cd.union * 100) / 100 : null;
            var d1Prop = (cd.d1 - cd.intersect) / cd.union;
            var d2Prop = (cd.d2 - cd.intersect) / cd.union;
            var iProp = cd.intersect / cd.union;
            cd.graphic = both ? "<div>\n            <div style=\"background-color:blue; height:".concat(barHeight, "px; width:").concat(barWidth * d1Prop, "px; float:left\"></div>\n            <div style=\"background-color:gold; height:").concat(barHeight, "px; width:").concat(barWidth * iProp, "px; float:left\"></div>\n            <div style=\"background-color:red; height:").concat(barHeight, "px; width:").concat(barWidth * d2Prop, "px; float:left\"></div>\n          </div>") : null;
          }
        });
      }

      makeChart();
    });
  }

  function loadData(i) {
    visitData[i] = [{
      taxon: 'All taxa',
      visits: []
    }]; // Data generation is wrapped in a promise so that the interface will
    // not hang.

    return new Promise(function (resolve, reject) {
      data[i].json.forEach(function (r) {
        var taxon = r[data[i].fields.taxon]; // Standardise the date

        var date = r[data[i].fields.date];

        if (date && dateValid(date)) {
          date = dateStandard(date);
        } else {
          date = null;
        } // Get the 1km gr from the gr


        var gr = r[data[i].fields.gr];

        if (gr) {
          var grcheck;

          try {
            grcheck = checkGr(gr);
          } catch (err) {
            gr = null;
          }

          if (grcheck && grcheck.precision <= 1000) {
            gr = getLowerResGrs(gr).p1000;
          } else {
            gr = null;
          }
        }

        if (gr && date && taxon) {
          var pd = visitData[i].find(function (pd) {
            return pd.taxon === taxon;
          });
          var visit = "".concat(gr, "-").concat(date);

          if (pd) {
            if (pd.visits.indexOf(visit) === -1) {
              pd.visits.push(visit);
            }
          } else {
            visitData[i].push({
              taxon: taxon,
              visits: [visit]
            });
          }
        }
      });

      for (var j = 1; j < visitData[i].length; j++) {
        visitData[i][0].visits = _toConsumableArray(new Set([].concat(_toConsumableArray(visitData[i][0].visits), _toConsumableArray(visitData[i][j].visits))));
      }

      resolve();
    });
  }

  function clear(i) {
    visitData[i - 1] = null;
    combinedData = null;
    d3__namespace.select("#visits-table").html();
    d3__namespace.select("#visits-table").style('display', 'none');
  }

  function makeChart() {
    if (visitData[0] && visitData[1]) {
      d3__namespace.select('#visits-legend').style('display', '');
    } else {
      d3__namespace.select('#visits-legend').style('display', 'none');
    }

    if (combinedData.length) {
      var cols = [{
        title: "Taxon",
        field: "taxon",
        headerFilter: "input"
      }, {
        title: "D1",
        field: "d1"
      }, {
        title: "D2",
        field: "d2"
      }, {
        title: "Union",
        field: "union"
      }, {
        title: "Intersect",
        field: "intersect"
      }, {
        title: "Intersect/Union",
        field: "iu"
      }, {
        title: "Union/D1",
        field: "ud1"
      }, {
        title: "Union/D2",
        field: "ud2"
      }, {
        title: "Graphic",
        field: "graphic",
        formatter: "html",
        minWidth: "".concat(Math.round(barWidth) * 1.1, "px"),
        headerSort: false
      }];
      d3__namespace.select("#visits-table").style('display', '');
      tabulator = new Tabulator("#visits-table", {
        height: 600,
        data: combinedData,
        columns: cols
      });
    }
  }

  var visits = /*#__PURE__*/Object.freeze({
    __proto__: null,
    gui: gui,
    tabSelected: tabSelected,
    dataCleared: dataCleared,
    fieldConfigCleared: fieldConfigCleared,
    visitsDownloadCSV: visitsDownloadCSV
  });

  window.onclick = function (event) {
    if (event.target.id === 'modalDialog') {
      d3__default['default'].select('#modalDialog').style('display', 'none');
    }
  };

  var dateFormats = [{
    re: /^\d\d\d\d.\d\d.\d\d$/,
    fnYear: function fnYear(date) {
      return date.substr(0, 4);
    },
    fnMonth: function fnMonth(date) {
      return date.substr(5, 2);
    },
    fnDay: function fnDay(date) {
      return date.substr(8, 2);
    },
    fnWeek: function fnWeek(date) {
      var year = date.substr(0, 4);
      var month = date.substr(5, 2);
      var day = date.substr(8, 2);
      var dte = new Date(year, month, day);
      return Number(dateformat(dte, 'W'));
    }
  }, {
    re: /^\d\d.\d\d.\d\d\d\d$/,
    fnYear: function fnYear(date) {
      return date.substr(6, 4);
    },
    fnMonth: function fnMonth(date) {
      return date.substr(3, 2);
    },
    fnDay: function fnDay(date) {
      return date.substr(0, 2);
    },
    fnWeek: function fnWeek(date) {
      var year = date.substr(6, 4);
      var month = date.substr(3, 2);
      var day = date.substr(0, 2);
      var dte = new Date(year, month, day);
      return Number(dateformat(dte, 'W'));
    }
  }];
  var data = [{}, {}];
  var tabs = [{
    id: 'load',
    caption: 'Load',
    fns: load
  }, {
    id: 'summary',
    caption: 'Summary',
    fns: summary$1
  }, {
    id: 'phenology',
    caption: 'Phenology',
    fns: phenology
  }, {
    id: 'timeseries',
    caption: 'Time series',
    fns: timeseries
  }, {
    id: 'mapoverview',
    caption: 'Overview map',
    fns: mapoverview
  }, {
    id: 'mapslippy',
    caption: 'Explore map',
    fns: mapslippy
  }, {
    id: 'visits',
    caption: 'Visit analyses',
    fns: visits
  }];
  var configFields = [{
    id: 'taxon',
    caption: 'Taxon'
  }, {
    id: 'tvk',
    caption: 'TVK'
  }, {
    id: 'gr',
    caption: 'Grid ref'
  }, {
    id: 'date',
    caption: 'Date'
  }, {
    id: 'recorder',
    caption: 'Recorder'
  }, {
    id: 'verifier',
    caption: 'Verifier'
  }, {
    id: 'verifyStatus',
    caption: 'Verified status'
  }, {
    id: 'source',
    caption: 'Source'
  }];
  function dropDown(fldset, id, label, values, value, fn) {
    var input = fldset.append('select');
    input.style('margin', '0 1em');
    input.attr('id', id);
    input.attr('placeholder', label);
    values.forEach(function (v) {
      var opt = input.append('option');
      opt.attr('value', v).text(v);

      if (v === value) {
        opt.property('selected', true);
      }
    });
    input.attr('onchange', "".concat(fn, "()"));
  }
  function numberInput(fldset, id, label, min, max, val, fn, slider) {
    var ctl = fldset.append('div');
    ctl.style('margin', '0 0.5em');
    ctl.style('display', 'inline-block');

    if (slider) {
      var lab = ctl.append('label').text(label);
      lab.attr('for', id);
      lab.text(label);
      lab.style('margin-right', '0.5em');
    }

    var input = ctl.append('input');

    if (slider) {
      input.attr('type', 'range');
      input.classed('slider', true);
    } else {
      input.attr('type', 'number');
      input.attr('placeholder', label);
    }

    input.attr('min', min);
    input.attr('max', max);
    input.attr('value', val);
    input.attr('id', id);
    input.style('width', '80px');
    input.attr('onchange', "".concat(fn, "()"));
  }
  function datasetCheckboxes(sel, prefix, fn, combineButton) {
    // Generic control to switch between datasets
    function makeCheckBox(id, checked) {
      var input = fldset.append('input');
      input.attr('type', 'checkbox');
      input.attr('id', "".concat(prefix, "-").concat(id));
      input.attr('onclick', "brcdseval.".concat(fn, "()"));

      if (checked) {
        input.property('checked', true);
      }

      fldset.append('label').text("Dataset ".concat(id));
    }

    var fldset = d3__default['default'].select(sel).append('fieldset');
    fldset.style('margin-top', '0.5em');
    var legend = fldset.append('legend');
    legend.text('Display dataset');
    makeCheckBox(1, true);
    makeCheckBox(2, false);

    if (combineButton) {
      var input = fldset.append('input');
      input.style('margin-left', '2em');
      input.attr('type', 'checkbox');
      input.attr('id', "".concat(prefix, "-combine"));
      input.attr('onclick', "brcdseval.".concat(fn, "()"));
      fldset.append('label').text("Combine display");
    }
  }
  function taxonSelectionControl(parent, prefix, onfocusFn, onclickFn) {
    var input = parent.append('input');
    input.attr('id', "".concat(prefix, "-taxon"));
    input.attr('list', "".concat(prefix, "-datalist"));
    input.attr('onfocus', "".concat(onfocusFn, "(this)"));
    input.attr('placeholder', 'Start typing taxon...');
    var datalist = parent.append('datalist');
    datalist.attr('id', "".concat(prefix, "-datalist"));
    datalist.attr('autocomplete', 'on');
    var b1 = parent.append('button').text('D1');
    b1.attr('onclick', "".concat(onclickFn, "(1)"));
    var b2 = parent.append('button').text('D2');
    b2.attr('onclick', "".concat(onclickFn, "(2)"));
    var b3 = parent.append('button').text('Both');
    b3.attr('onclick', "".concat(onclickFn, "(3)"));
  }
  function populateTaxonSelectionControl(prefix) {
    var getTaxa = function getTaxa(i) {
      var taxa = [];

      if (data[i - 1] && data[i - 1].fields && data[i - 1].fields.taxon && data[i - 1].json) {
        var tf = data[i - 1].fields.taxon;
        data[i - 1].json.forEach(function (r) {
          if (taxa.indexOf(r[tf]) === -1) {
            taxa.push(r[tf]);
          }
        });
      }

      return taxa;
    };

    var t1 = getTaxa(1);
    var t2 = getTaxa(2);

    var tc = _toConsumableArray(new Set([].concat(_toConsumableArray(t1), _toConsumableArray(t2)))); //[...new Set(t1, t2)] gives emtpy array if t1 empty
    // Clear the datalist if it already has options


    d3__default['default'].select("#".concat(prefix, "-datalist")).html(''); // Create the taxon options

    tc.sort().forEach(function (t) {
      var ds = [];

      if (t1.indexOf(t) > -1) {
        ds.push('1');
      }

      if (t2.indexOf(t) > -1) {
        ds.push('2');
      }

      d3__default['default'].select("#".concat(prefix, "-datalist")).append('option').text("".concat(t, " ").concat(ds.join(',')));
    });
  }
  function textInput(parent, id, placeholder, onclickFn, buttonCaption) {
    var divTs = parent.append('div');
    divTs.style('display', 'inline-block');
    var iTs = divTs.append('input');
    iTs.attr('id', id);
    iTs.attr('placeholder', placeholder);
    var bTs = divTs.append('button');
    bTs.text(buttonCaption);
    bTs.attr('onclick', "".concat(onclickFn, "()"));
  }
  function button(parent, onclickFn, buttonCaption) {
    var bTs = parent.append('button');
    bTs.text(buttonCaption);
    bTs.attr('onclick', "".concat(onclickFn, "()"));
  }
  function checkbox(parent, id, label, onchangeFn, checked) {
    var input = parent.append('input');
    input.attr('type', 'checkbox');
    input.attr('id', id);
    input.attr('onchange', "".concat(onchangeFn, "()"));

    if (checked) {
      input.property('checked', true);
    }

    parent.append('label').text(label);
  }
  function radioButtonSet(parent, name, prefix, onclickFn, data) {
    // Proportions vs counts radio buttons
    function makeRadio(value, label, checked) {
      var rad = divRads.append('input');
      rad.attr('type', 'radio');
      rad.attr('id', "".concat(prefix, "-").concat(value));
      rad.attr('name', name);
      rad.attr('value', value);
      rad.attr('onclick', "".concat(onclickFn, "()"));
      rad.property('checked', checked);
      var radlab = divRads.append('label').text(label);
      radlab.attr('for', "".concat(prefix, "-").concat(value));
    }

    var divRads = parent.append('div');
    divRads.style('margin-left', '1em');
    divRads.style('display', 'inline-block'); // The data must be an array of objects with these properties:
    // value, label and checked.

    data.forEach(function (d) {
      return makeRadio(d.value, d.label, d.checked);
    });
  }
  function dateValid(date) {
    return dateFormats.some(function (df) {
      return df.re.test(date);
    });
  }
  function dateYear(date) {
    var df = dateFormats.find(function (df) {
      return df.re.test(date);
    });

    if (df) {
      return df.fnYear(date);
    } else {
      return null;
    }
  }
  function dateMonth(date) {
    var df = dateFormats.find(function (df) {
      return df.re.test(date);
    });

    if (df) {
      return df.fnMonth(date);
    } else {
      return null;
    }
  }
  function dateDay(date) {
    var df = dateFormats.find(function (df) {
      return df.re.test(date);
    });

    if (df) {
      return df.fnDay(date);
    } else {
      return null;
    }
  }
  function dateWeek(date) {
    var df = dateFormats.find(function (df) {
      return df.re.test(date);
    });

    if (df) {
      return df.fnWeek(date);
    } else {
      return null;
    }
  }
  function dateStandard(date) {
    return "".concat(dateYear(date), "-").concat(dateMonth(date), "-").concat(dateDay(date));
  }

  var defaults$5 = createCommonjsModule(function (module) {
    function getDefaults() {
      return {
        baseUrl: null,
        breaks: false,
        extensions: null,
        gfm: true,
        headerIds: true,
        headerPrefix: '',
        highlight: null,
        langPrefix: 'language-',
        mangle: true,
        pedantic: false,
        renderer: null,
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartLists: false,
        smartypants: false,
        tokenizer: null,
        walkTokens: null,
        xhtml: false
      };
    }

    function changeDefaults(newDefaults) {
      module.exports.defaults = newDefaults;
    }

    module.exports = {
      defaults: getDefaults(),
      getDefaults: getDefaults,
      changeDefaults: changeDefaults
    };
  });

  /**
   * Helpers
   */
  var escapeTest = /[&<>"']/;
  var escapeReplace = /[&<>"']/g;
  var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  var escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  var getEscapeReplacement = function getEscapeReplacement(ch) {
    return escapeReplacements[ch];
  };

  function escape$2(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }

    return html;
  }

  var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

  function unescape$1(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(unescapeTest, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';

      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }

      return '';
    });
  }

  var caret = /(^|[^\[])\^/g;

  function edit$1(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    var obj = {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(caret, '$1');
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }

  var nonWordAndColonTest = /[^\w:]/g;
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function cleanUrl$1(sanitize, base, href) {
    if (sanitize) {
      var prot;

      try {
        prot = decodeURIComponent(unescape$1(href)).replace(nonWordAndColonTest, '').toLowerCase();
      } catch (e) {
        return null;
      }

      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }

    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }

    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }

    return href;
  }

  var baseUrls = {};
  var justDomain = /^[^:]+:\/*[^/]*$/;
  var protocol = /^([^:]+:)[\s\S]*$/;
  var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (justDomain.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim$1(base, '/', true);
      }
    }

    base = baseUrls[' ' + base];
    var relativeBase = base.indexOf(':') === -1;

    if (href.substring(0, 2) === '//') {
      if (relativeBase) {
        return href;
      }

      return base.replace(protocol, '$1') + href;
    } else if (href.charAt(0) === '/') {
      if (relativeBase) {
        return href;
      }

      return base.replace(domain, '$1') + href;
    } else {
      return base + href;
    }
  }

  var noopTest$1 = {
    exec: function noopTest() {}
  };

  function merge$2(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];

      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  function splitCells$1(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
          curr = offset;

      while (--curr >= 0 && str[curr] === '\\') {
        escaped = !escaped;
      }

      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
        cells = row.split(/ \|/);
    var i = 0;

    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push('');
      }
    }

    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }

    return cells;
  } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
  // /c*$/ is vulnerable to REDOS.
  // invert: Remove suffix of non-c chars instead. Default falsey.


  function rtrim$1(str, c, invert) {
    var l = str.length;

    if (l === 0) {
      return '';
    } // Length of suffix matching the invert condition.


    var suffLen = 0; // Step left until we fail to match the invert condition.

    while (suffLen < l) {
      var currChar = str.charAt(l - suffLen - 1);

      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }

    return str.substr(0, l - suffLen);
  }

  function findClosingBracket$1(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }

    var l = str.length;
    var level = 0,
        i = 0;

    for (; i < l; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;

        if (level < 0) {
          return i;
        }
      }
    }

    return -1;
  }

  function checkSanitizeDeprecation$1(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
  } // copied from https://stackoverflow.com/a/5450113/806777


  function repeatString$1(pattern, count) {
    if (count < 1) {
      return '';
    }

    var result = '';

    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }

      count >>= 1;
      pattern += pattern;
    }

    return result + pattern;
  }

  var helpers = {
    escape: escape$2,
    unescape: unescape$1,
    edit: edit$1,
    cleanUrl: cleanUrl$1,
    resolveUrl: resolveUrl,
    noopTest: noopTest$1,
    merge: merge$2,
    splitCells: splitCells$1,
    rtrim: rtrim$1,
    findClosingBracket: findClosingBracket$1,
    checkSanitizeDeprecation: checkSanitizeDeprecation$1,
    repeatString: repeatString$1
  };

  var defaults$4 = defaults$5.defaults;
  var rtrim = helpers.rtrim,
      splitCells = helpers.splitCells,
      _escape = helpers.escape,
      findClosingBracket = helpers.findClosingBracket;

  function outputLink(cap, link, raw) {
    var href = link.href;
    var title = link.title ? _escape(link.title) : null;
    var text = cap[1].replace(/\\([\[\]])/g, '$1');

    if (cap[0].charAt(0) !== '!') {
      return {
        type: 'link',
        raw: raw,
        href: href,
        title: title,
        text: text
      };
    } else {
      return {
        type: 'image',
        raw: raw,
        href: href,
        title: title,
        text: _escape(text)
      };
    }
  }

  function indentCodeCompensation(raw, text) {
    var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

    if (matchIndentToCode === null) {
      return text;
    }

    var indentToCode = matchIndentToCode[1];
    return text.split('\n').map(function (node) {
      var matchIndentInNode = node.match(/^\s+/);

      if (matchIndentInNode === null) {
        return node;
      }

      var _matchIndentInNode = _slicedToArray(matchIndentInNode, 1),
          indentInNode = _matchIndentInNode[0];

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    }).join('\n');
  }
  /**
   * Tokenizer
   */


  var Tokenizer_1 = /*#__PURE__*/function () {
    function Tokenizer(options) {
      _classCallCheck(this, Tokenizer);

      this.options = options || defaults$4;
    }

    _createClass(Tokenizer, [{
      key: "space",
      value: function space(src) {
        var cap = this.rules.block.newline.exec(src);

        if (cap) {
          if (cap[0].length > 1) {
            return {
              type: 'space',
              raw: cap[0]
            };
          }

          return {
            raw: '\n'
          };
        }
      }
    }, {
      key: "code",
      value: function code(src) {
        var cap = this.rules.block.code.exec(src);

        if (cap) {
          var text = cap[0].replace(/^ {1,4}/gm, '');
          return {
            type: 'code',
            raw: cap[0],
            codeBlockStyle: 'indented',
            text: !this.options.pedantic ? rtrim(text, '\n') : text
          };
        }
      }
    }, {
      key: "fences",
      value: function fences(src) {
        var cap = this.rules.block.fences.exec(src);

        if (cap) {
          var raw = cap[0];
          var text = indentCodeCompensation(raw, cap[3] || '');
          return {
            type: 'code',
            raw: raw,
            lang: cap[2] ? cap[2].trim() : cap[2],
            text: text
          };
        }
      }
    }, {
      key: "heading",
      value: function heading(src) {
        var cap = this.rules.block.heading.exec(src);

        if (cap) {
          var text = cap[2].trim(); // remove trailing #s

          if (/#$/.test(text)) {
            var trimmed = rtrim(text, '#');

            if (this.options.pedantic) {
              text = trimmed.trim();
            } else if (!trimmed || / $/.test(trimmed)) {
              // CommonMark requires space before trailing #s
              text = trimmed.trim();
            }
          }

          return {
            type: 'heading',
            raw: cap[0],
            depth: cap[1].length,
            text: text
          };
        }
      }
    }, {
      key: "nptable",
      value: function nptable(src) {
        var cap = this.rules.block.nptable.exec(src);

        if (cap) {
          var item = {
            type: 'table',
            header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
            raw: cap[0]
          };

          if (item.header.length === item.align.length) {
            var l = item.align.length;
            var i;

            for (i = 0; i < l; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }

            l = item.cells.length;

            for (i = 0; i < l; i++) {
              item.cells[i] = splitCells(item.cells[i], item.header.length);
            }

            return item;
          }
        }
      }
    }, {
      key: "hr",
      value: function hr(src) {
        var cap = this.rules.block.hr.exec(src);

        if (cap) {
          return {
            type: 'hr',
            raw: cap[0]
          };
        }
      }
    }, {
      key: "blockquote",
      value: function blockquote(src) {
        var cap = this.rules.block.blockquote.exec(src);

        if (cap) {
          var text = cap[0].replace(/^ *> ?/gm, '');
          return {
            type: 'blockquote',
            raw: cap[0],
            text: text
          };
        }
      }
    }, {
      key: "list",
      value: function list(src) {
        var cap = this.rules.block.list.exec(src);

        if (cap) {
          var raw = cap[0];
          var bull = cap[2];
          var isordered = bull.length > 1;
          var list = {
            type: 'list',
            raw: raw,
            ordered: isordered,
            start: isordered ? +bull.slice(0, -1) : '',
            loose: false,
            items: []
          }; // Get each top-level item.

          var itemMatch = cap[0].match(this.rules.block.item);
          var next = false,
              item,
              space,
              bcurr,
              bnext,
              addBack,
              loose,
              istask,
              ischecked,
              endMatch;
          var l = itemMatch.length;
          bcurr = this.rules.block.listItemStart.exec(itemMatch[0]);

          for (var i = 0; i < l; i++) {
            item = itemMatch[i];
            raw = item;

            if (!this.options.pedantic) {
              // Determine if current item contains the end of the list
              endMatch = item.match(new RegExp('\\n\\s*\\n {0,' + (bcurr[0].length - 1) + '}\\S'));

              if (endMatch) {
                addBack = item.length - endMatch.index + itemMatch.slice(i + 1).join('\n').length;
                list.raw = list.raw.substring(0, list.raw.length - addBack);
                item = item.substring(0, endMatch.index);
                raw = item;
                l = i + 1;
              }
            } // Determine whether the next list item belongs here.
            // Backpedal if it does not belong in this list.


            if (i !== l - 1) {
              bnext = this.rules.block.listItemStart.exec(itemMatch[i + 1]);

              if (!this.options.pedantic ? bnext[1].length >= bcurr[0].length || bnext[1].length > 3 : bnext[1].length > bcurr[1].length) {
                // nested list or continuation
                itemMatch.splice(i, 2, itemMatch[i] + (!this.options.pedantic && bnext[1].length < bcurr[0].length && !itemMatch[i].match(/\n$/) ? '' : '\n') + itemMatch[i + 1]);
                i--;
                l--;
                continue;
              } else if ( // different bullet style
              !this.options.pedantic || this.options.smartLists ? bnext[2][bnext[2].length - 1] !== bull[bull.length - 1] : isordered === (bnext[2].length === 1)) {
                addBack = itemMatch.slice(i + 1).join('\n').length;
                list.raw = list.raw.substring(0, list.raw.length - addBack);
                i = l - 1;
              }

              bcurr = bnext;
            } // Remove the list item's bullet
            // so it is seen as the next token.


            space = item.length;
            item = item.replace(/^ *([*+-]|\d+[.)]) ?/, ''); // Outdent whatever the
            // list item contains. Hacky.

            if (~item.indexOf('\n ')) {
              space -= item.length;
              item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
            } // trim item newlines at end


            item = rtrim(item, '\n');

            if (i !== l - 1) {
              raw = raw + '\n';
            } // Determine whether item is loose or not.
            // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
            // for discount behavior.


            loose = next || /\n\n(?!\s*$)/.test(raw);

            if (i !== l - 1) {
              next = raw.slice(-2) === '\n\n';
              if (!loose) loose = next;
            }

            if (loose) {
              list.loose = true;
            } // Check for task list items


            if (this.options.gfm) {
              istask = /^\[[ xX]\] /.test(item);
              ischecked = undefined;

              if (istask) {
                ischecked = item[1] !== ' ';
                item = item.replace(/^\[[ xX]\] +/, '');
              }
            }

            list.items.push({
              type: 'list_item',
              raw: raw,
              task: istask,
              checked: ischecked,
              loose: loose,
              text: item
            });
          }

          return list;
        }
      }
    }, {
      key: "html",
      value: function html(src) {
        var cap = this.rules.block.html.exec(src);

        if (cap) {
          return {
            type: this.options.sanitize ? 'paragraph' : 'html',
            raw: cap[0],
            pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
          };
        }
      }
    }, {
      key: "def",
      value: function def(src) {
        var cap = this.rules.block.def.exec(src);

        if (cap) {
          if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
          var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
          return {
            type: 'def',
            tag: tag,
            raw: cap[0],
            href: cap[2],
            title: cap[3]
          };
        }
      }
    }, {
      key: "table",
      value: function table(src) {
        var cap = this.rules.block.table.exec(src);

        if (cap) {
          var item = {
            type: 'table',
            header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
          };

          if (item.header.length === item.align.length) {
            item.raw = cap[0];
            var l = item.align.length;
            var i;

            for (i = 0; i < l; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }

            l = item.cells.length;

            for (i = 0; i < l; i++) {
              item.cells[i] = splitCells(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
            }

            return item;
          }
        }
      }
    }, {
      key: "lheading",
      value: function lheading(src) {
        var cap = this.rules.block.lheading.exec(src);

        if (cap) {
          return {
            type: 'heading',
            raw: cap[0],
            depth: cap[2].charAt(0) === '=' ? 1 : 2,
            text: cap[1]
          };
        }
      }
    }, {
      key: "paragraph",
      value: function paragraph(src) {
        var cap = this.rules.block.paragraph.exec(src);

        if (cap) {
          return {
            type: 'paragraph',
            raw: cap[0],
            text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
          };
        }
      }
    }, {
      key: "text",
      value: function text(src) {
        var cap = this.rules.block.text.exec(src);

        if (cap) {
          return {
            type: 'text',
            raw: cap[0],
            text: cap[0]
          };
        }
      }
    }, {
      key: "escape",
      value: function escape(src) {
        var cap = this.rules.inline.escape.exec(src);

        if (cap) {
          return {
            type: 'escape',
            raw: cap[0],
            text: _escape(cap[1])
          };
        }
      }
    }, {
      key: "tag",
      value: function tag(src, inLink, inRawBlock) {
        var cap = this.rules.inline.tag.exec(src);

        if (cap) {
          if (!inLink && /^<a /i.test(cap[0])) {
            inLink = true;
          } else if (inLink && /^<\/a>/i.test(cap[0])) {
            inLink = false;
          }

          if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            inRawBlock = true;
          } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            inRawBlock = false;
          }

          return {
            type: this.options.sanitize ? 'text' : 'html',
            raw: cap[0],
            inLink: inLink,
            inRawBlock: inRawBlock,
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
          };
        }
      }
    }, {
      key: "link",
      value: function link(src) {
        var cap = this.rules.inline.link.exec(src);

        if (cap) {
          var trimmedUrl = cap[2].trim();

          if (!this.options.pedantic && /^</.test(trimmedUrl)) {
            // commonmark requires matching angle brackets
            if (!/>$/.test(trimmedUrl)) {
              return;
            } // ending angle bracket cannot be escaped


            var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');

            if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
              return;
            }
          } else {
            // find closing parenthesis
            var lastParenIndex = findClosingBracket(cap[2], '()');

            if (lastParenIndex > -1) {
              var start = cap[0].indexOf('!') === 0 ? 5 : 4;
              var linkLen = start + cap[1].length + lastParenIndex;
              cap[2] = cap[2].substring(0, lastParenIndex);
              cap[0] = cap[0].substring(0, linkLen).trim();
              cap[3] = '';
            }
          }

          var href = cap[2];
          var title = '';

          if (this.options.pedantic) {
            // split pedantic href and title
            var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

            if (link) {
              href = link[1];
              title = link[3];
            }
          } else {
            title = cap[3] ? cap[3].slice(1, -1) : '';
          }

          href = href.trim();

          if (/^</.test(href)) {
            if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
              // pedantic allows starting angle bracket without ending angle bracket
              href = href.slice(1);
            } else {
              href = href.slice(1, -1);
            }
          }

          return outputLink(cap, {
            href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
            title: title ? title.replace(this.rules.inline._escapes, '$1') : title
          }, cap[0]);
        }
      }
    }, {
      key: "reflink",
      value: function reflink(src, links) {
        var cap;

        if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
          var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
          link = links[link.toLowerCase()];

          if (!link || !link.href) {
            var text = cap[0].charAt(0);
            return {
              type: 'text',
              raw: text,
              text: text
            };
          }

          return outputLink(cap, link, cap[0]);
        }
      }
    }, {
      key: "emStrong",
      value: function emStrong(src, maskedSrc) {
        var prevChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var match = this.rules.inline.emStrong.lDelim.exec(src);
        if (!match) return; // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well

        if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
        var nextChar = match[1] || match[2] || '';

        if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
          var lLength = match[0].length - 1;
          var rDelim,
              rLength,
              delimTotal = lLength,
              midDelimTotal = 0;
          var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
          endReg.lastIndex = 0; // Clip maskedSrc to same section of string as src (move to lexer?)

          maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

          while ((match = endReg.exec(maskedSrc)) != null) {
            rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
            if (!rDelim) continue; // skip single * in __abc*abc__

            rLength = rDelim.length;

            if (match[3] || match[4]) {
              // found another Left Delim
              delimTotal += rLength;
              continue;
            } else if (match[5] || match[6]) {
              // either Left or Right Delim
              if (lLength % 3 && !((lLength + rLength) % 3)) {
                midDelimTotal += rLength;
                continue; // CommonMark Emphasis Rules 9-10
              }
            }

            delimTotal -= rLength;
            if (delimTotal > 0) continue; // Haven't found enough closing delimiters
            // Remove extra characters. *a*** -> *a*

            rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal); // Create `em` if smallest delimiter has odd char count. *a***

            if (Math.min(lLength, rLength) % 2) {
              return {
                type: 'em',
                raw: src.slice(0, lLength + match.index + rLength + 1),
                text: src.slice(1, lLength + match.index + rLength)
              };
            } // Create 'strong' if smallest delimiter has even char count. **a***


            return {
              type: 'strong',
              raw: src.slice(0, lLength + match.index + rLength + 1),
              text: src.slice(2, lLength + match.index + rLength - 1)
            };
          }
        }
      }
    }, {
      key: "codespan",
      value: function codespan(src) {
        var cap = this.rules.inline.code.exec(src);

        if (cap) {
          var text = cap[2].replace(/\n/g, ' ');
          var hasNonSpaceChars = /[^ ]/.test(text);
          var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);

          if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
            text = text.substring(1, text.length - 1);
          }

          text = _escape(text, true);
          return {
            type: 'codespan',
            raw: cap[0],
            text: text
          };
        }
      }
    }, {
      key: "br",
      value: function br(src) {
        var cap = this.rules.inline.br.exec(src);

        if (cap) {
          return {
            type: 'br',
            raw: cap[0]
          };
        }
      }
    }, {
      key: "del",
      value: function del(src) {
        var cap = this.rules.inline.del.exec(src);

        if (cap) {
          return {
            type: 'del',
            raw: cap[0],
            text: cap[2]
          };
        }
      }
    }, {
      key: "autolink",
      value: function autolink(src, mangle) {
        var cap = this.rules.inline.autolink.exec(src);

        if (cap) {
          var text, href;

          if (cap[2] === '@') {
            text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
            href = 'mailto:' + text;
          } else {
            text = _escape(cap[1]);
            href = text;
          }

          return {
            type: 'link',
            raw: cap[0],
            text: text,
            href: href,
            tokens: [{
              type: 'text',
              raw: text,
              text: text
            }]
          };
        }
      }
    }, {
      key: "url",
      value: function url(src, mangle) {
        var cap;

        if (cap = this.rules.inline.url.exec(src)) {
          var text, href;

          if (cap[2] === '@') {
            text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
            href = 'mailto:' + text;
          } else {
            // do extended autolink path validation
            var prevCapZero;

            do {
              prevCapZero = cap[0];
              cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
            } while (prevCapZero !== cap[0]);

            text = _escape(cap[0]);

            if (cap[1] === 'www.') {
              href = 'http://' + text;
            } else {
              href = text;
            }
          }

          return {
            type: 'link',
            raw: cap[0],
            text: text,
            href: href,
            tokens: [{
              type: 'text',
              raw: text,
              text: text
            }]
          };
        }
      }
    }, {
      key: "inlineText",
      value: function inlineText(src, inRawBlock, smartypants) {
        var cap = this.rules.inline.text.exec(src);

        if (cap) {
          var text;

          if (inRawBlock) {
            text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
          } else {
            text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
          }

          return {
            type: 'text',
            raw: cap[0],
            text: text
          };
        }
      }
    }]);

    return Tokenizer;
  }();

  var noopTest = helpers.noopTest,
      edit = helpers.edit,
      merge$1 = helpers.merge;
  /**
   * Block-Level Grammar
   */

  var block$1 = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
    html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: noopTest,
    table: noopTest,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block$1._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
  block$1._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block$1.def = edit(block$1.def).replace('label', block$1._label).replace('title', block$1._title).getRegex();
  block$1.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block$1.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/;
  block$1.item = edit(block$1.item, 'gm').replace(/bull/g, block$1.bullet).getRegex();
  block$1.listItemStart = edit(/^( *)(bull) */).replace('bull', block$1.bullet).getRegex();
  block$1.list = edit(block$1.list).replace(/bull/g, block$1.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block$1.def.source + ')').getRegex();
  block$1._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block$1._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  block$1.html = edit(block$1.html, 'i').replace('comment', block$1._comment).replace('tag', block$1._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block$1.paragraph = edit(block$1._paragraph).replace('hr', block$1.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block$1._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  block$1.blockquote = edit(block$1.blockquote).replace('paragraph', block$1.paragraph).getRegex();
  /**
   * Normal Block Grammar
   */

  block$1.normal = merge$1({}, block$1);
  /**
   * GFM Block Grammar
   */

  block$1.gfm = merge$1({}, block$1.normal, {
    nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
    + ' {0,3}([-:]+ *\\|[-| :]*)' // Align
    + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    // Cells
    table: '^ *\\|(.+)\\n' // Header
    + ' {0,3}\\|?( *[-:]+[-| :]*)' // Align
    + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

  });
  block$1.gfm.nptable = edit(block$1.gfm.nptable).replace('hr', block$1.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block$1._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  block$1.gfm.table = edit(block$1.gfm.table).replace('hr', block$1.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block$1._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */

  block$1.pedantic = merge$1({}, block$1.normal, {
    html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block$1._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest,
    // fences not supported
    paragraph: edit(block$1.normal._paragraph).replace('hr', block$1.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block$1.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
  });
  /**
   * Inline-Level Grammar
   */

  var inline$1 = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    // CDATA section
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
      //        () Skip other delimiter (1) #***                   (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
      rDelimAst: /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd: /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _

    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/
  }; // list of punctuation marks from CommonMark spec
  // without * and _ to handle the different emphasis markers * and _

  inline$1._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
  inline$1.punctuation = edit(inline$1.punctuation).replace(/punctuation/g, inline$1._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

  inline$1.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
  inline$1.escapedEmSt = /\\\*|\\_/g;
  inline$1._comment = edit(block$1._comment).replace('(?:-->|$)', '-->').getRegex();
  inline$1.emStrong.lDelim = edit(inline$1.emStrong.lDelim).replace(/punct/g, inline$1._punctuation).getRegex();
  inline$1.emStrong.rDelimAst = edit(inline$1.emStrong.rDelimAst, 'g').replace(/punct/g, inline$1._punctuation).getRegex();
  inline$1.emStrong.rDelimUnd = edit(inline$1.emStrong.rDelimUnd, 'g').replace(/punct/g, inline$1._punctuation).getRegex();
  inline$1._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline$1._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline$1._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline$1.autolink = edit(inline$1.autolink).replace('scheme', inline$1._scheme).replace('email', inline$1._email).getRegex();
  inline$1._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline$1.tag = edit(inline$1.tag).replace('comment', inline$1._comment).replace('attribute', inline$1._attribute).getRegex();
  inline$1._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline$1._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  inline$1._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline$1.link = edit(inline$1.link).replace('label', inline$1._label).replace('href', inline$1._href).replace('title', inline$1._title).getRegex();
  inline$1.reflink = edit(inline$1.reflink).replace('label', inline$1._label).getRegex();
  inline$1.reflinkSearch = edit(inline$1.reflinkSearch, 'g').replace('reflink', inline$1.reflink).replace('nolink', inline$1.nolink).getRegex();
  /**
   * Normal Inline Grammar
   */

  inline$1.normal = merge$1({}, inline$1);
  /**
   * Pedantic Inline Grammar
   */

  inline$1.pedantic = merge$1({}, inline$1.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline$1._label).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline$1._label).getRegex()
  });
  /**
   * GFM Inline Grammar
   */

  inline$1.gfm = merge$1({}, inline$1.normal, {
    escape: edit(inline$1.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  });
  inline$1.gfm.url = edit(inline$1.gfm.url, 'i').replace('email', inline$1.gfm._extended_email).getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline$1.breaks = merge$1({}, inline$1.gfm, {
    br: edit(inline$1.br).replace('{2,}', '*').getRegex(),
    text: edit(inline$1.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
  });
  var rules = {
    block: block$1,
    inline: inline$1
  };

  var defaults$3 = defaults$5.defaults;
  var block = rules.block,
      inline = rules.inline;
  var repeatString = helpers.repeatString;
  /**
   * smartypants text replacement
   */

  function smartypants(text) {
    return text // em-dashes
    .replace(/---/g, "\u2014") // en-dashes
    .replace(/--/g, "\u2013") // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
    .replace(/'/g, "\u2019") // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
    .replace(/"/g, "\u201D") // ellipses
    .replace(/\.{3}/g, "\u2026");
  }
  /**
   * mangle email addresses
   */


  function mangle(text) {
    var out = '',
        i,
        ch;
    var l = text.length;

    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);

      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }

      out += '&#' + ch + ';';
    }

    return out;
  }
  /**
   * Block Lexer
   */


  var Lexer_1 = /*#__PURE__*/function () {
    function Lexer(options) {
      _classCallCheck(this, Lexer);

      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = options || defaults$3;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer_1();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      var rules = {
        block: block.normal,
        inline: inline.normal
      };

      if (this.options.pedantic) {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      } else if (this.options.gfm) {
        rules.block = block.gfm;

        if (this.options.breaks) {
          rules.inline = inline.breaks;
        } else {
          rules.inline = inline.gfm;
        }
      }

      this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */


    _createClass(Lexer, [{
      key: "lex",
      value:
      /**
       * Preprocessing
       */
      function lex(src) {
        src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
        this.blockTokens(src, this.tokens, true);
        this.inline(this.tokens);
        return this.tokens;
      }
      /**
       * Lexing
       */

    }, {
      key: "blockTokens",
      value: function blockTokens(src) {
        var _this = this;

        var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (this.options.pedantic) {
          src = src.replace(/^ +$/gm, '');
        }

        var token, i, l, lastToken, cutSrc, lastParagraphClipped;

        while (src) {
          if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function (extTokenizer) {
            if (token = extTokenizer.call(_this, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }

            return false;
          })) {
            continue;
          } // newline


          if (token = this.tokenizer.space(src)) {
            src = src.substring(token.raw.length);

            if (token.type) {
              tokens.push(token);
            }

            continue;
          } // code


          if (token = this.tokenizer.code(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

            if (lastToken && lastToken.type === 'paragraph') {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
            } else {
              tokens.push(token);
            }

            continue;
          } // fences


          if (token = this.tokenizer.fences(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // heading


          if (token = this.tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // table no leading pipe (gfm)


          if (token = this.tokenizer.nptable(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // hr


          if (token = this.tokenizer.hr(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // blockquote


          if (token = this.tokenizer.blockquote(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.blockTokens(token.text, [], top);
            tokens.push(token);
            continue;
          } // list


          if (token = this.tokenizer.list(src)) {
            src = src.substring(token.raw.length);
            l = token.items.length;

            for (i = 0; i < l; i++) {
              token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
            }

            tokens.push(token);
            continue;
          } // html


          if (token = this.tokenizer.html(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // def


          if (top && (token = this.tokenizer.def(src))) {
            src = src.substring(token.raw.length);

            if (!this.tokens.links[token.tag]) {
              this.tokens.links[token.tag] = {
                href: token.href,
                title: token.title
              };
            }

            continue;
          } // table (gfm)


          if (token = this.tokenizer.table(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // lheading


          if (token = this.tokenizer.lheading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // top-level paragraph
          // prevent paragraph consuming extensions by clipping 'src' to extension start


          cutSrc = src;

          if (this.options.extensions && this.options.extensions.startBlock) {
            (function () {
              var startIndex = Infinity;
              var tempSrc = src.slice(1);
              var tempStart = void 0;

              _this.options.extensions.startBlock.forEach(function (getStartIndex) {
                tempStart = getStartIndex.call(this, tempSrc);

                if (typeof tempStart === 'number' && tempStart >= 0) {
                  startIndex = Math.min(startIndex, tempStart);
                }
              });

              if (startIndex < Infinity && startIndex >= 0) {
                cutSrc = src.substring(0, startIndex + 1);
              }
            })();
          }

          if (top && (token = this.tokenizer.paragraph(cutSrc))) {
            lastToken = tokens[tokens.length - 1];

            if (lastParagraphClipped && lastToken.type === 'paragraph') {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
            } else {
              tokens.push(token);
            }

            lastParagraphClipped = cutSrc.length !== src.length;
            src = src.substring(token.raw.length);
            continue;
          } // text


          if (token = this.tokenizer.text(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];

            if (lastToken && lastToken.type === 'text') {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
            } else {
              tokens.push(token);
            }

            continue;
          }

          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }

        return tokens;
      }
    }, {
      key: "inline",
      value: function inline(tokens) {
        var i, j, k, l2, row, token;
        var l = tokens.length;

        for (i = 0; i < l; i++) {
          token = tokens[i];

          switch (token.type) {
            case 'paragraph':
            case 'text':
            case 'heading':
              {
                token.tokens = [];
                this.inlineTokens(token.text, token.tokens);
                break;
              }

            case 'table':
              {
                token.tokens = {
                  header: [],
                  cells: []
                }; // header

                l2 = token.header.length;

                for (j = 0; j < l2; j++) {
                  token.tokens.header[j] = [];
                  this.inlineTokens(token.header[j], token.tokens.header[j]);
                } // cells


                l2 = token.cells.length;

                for (j = 0; j < l2; j++) {
                  row = token.cells[j];
                  token.tokens.cells[j] = [];

                  for (k = 0; k < row.length; k++) {
                    token.tokens.cells[j][k] = [];
                    this.inlineTokens(row[k], token.tokens.cells[j][k]);
                  }
                }

                break;
              }

            case 'blockquote':
              {
                this.inline(token.tokens);
                break;
              }

            case 'list':
              {
                l2 = token.items.length;

                for (j = 0; j < l2; j++) {
                  this.inline(token.items[j].tokens);
                }

                break;
              }
          }
        }

        return tokens;
      }
      /**
       * Lexing/Compiling
       */

    }, {
      key: "inlineTokens",
      value: function inlineTokens(src) {
        var _this2 = this;

        var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var inLink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var inRawBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var token, lastToken, cutSrc; // String with links masked to avoid interference with em and strong

        var maskedSrc = src;
        var match;
        var keepPrevChar, prevChar; // Mask out reflinks

        if (this.tokens.links) {
          var links = Object.keys(this.tokens.links);

          if (links.length > 0) {
            while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
              if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
                maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
              }
            }
          }
        } // Mask out other blocks


        while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
          maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        } // Mask out escaped em & strong delimiters


        while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
          maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
        }

        while (src) {
          if (!keepPrevChar) {
            prevChar = '';
          }

          keepPrevChar = false; // extensions

          if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function (extTokenizer) {
            if (token = extTokenizer.call(_this2, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }

            return false;
          })) {
            continue;
          } // escape


          if (token = this.tokenizer.escape(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // tag


          if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
            src = src.substring(token.raw.length);
            inLink = token.inLink;
            inRawBlock = token.inRawBlock;
            lastToken = tokens[tokens.length - 1];

            if (lastToken && token.type === 'text' && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }

            continue;
          } // link


          if (token = this.tokenizer.link(src)) {
            src = src.substring(token.raw.length);

            if (token.type === 'link') {
              token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
            }

            tokens.push(token);
            continue;
          } // reflink, nolink


          if (token = this.tokenizer.reflink(src, this.tokens.links)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];

            if (token.type === 'link') {
              token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
              tokens.push(token);
            } else if (lastToken && token.type === 'text' && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }

            continue;
          } // em & strong


          if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
            src = src.substring(token.raw.length);
            token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
            tokens.push(token);
            continue;
          } // code


          if (token = this.tokenizer.codespan(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // br


          if (token = this.tokenizer.br(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // del (gfm)


          if (token = this.tokenizer.del(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
            tokens.push(token);
            continue;
          } // autolink


          if (token = this.tokenizer.autolink(src, mangle)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // url (gfm)


          if (!inLink && (token = this.tokenizer.url(src, mangle))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // text
          // prevent inlineText consuming extensions by clipping 'src' to extension start


          cutSrc = src;

          if (this.options.extensions && this.options.extensions.startInline) {
            (function () {
              var startIndex = Infinity;
              var tempSrc = src.slice(1);
              var tempStart = void 0;

              _this2.options.extensions.startInline.forEach(function (getStartIndex) {
                tempStart = getStartIndex.call(this, tempSrc);

                if (typeof tempStart === 'number' && tempStart >= 0) {
                  startIndex = Math.min(startIndex, tempStart);
                }
              });

              if (startIndex < Infinity && startIndex >= 0) {
                cutSrc = src.substring(0, startIndex + 1);
              }
            })();
          }

          if (token = this.tokenizer.inlineText(cutSrc, inRawBlock, smartypants)) {
            src = src.substring(token.raw.length);

            if (token.raw.slice(-1) !== '_') {
              // Track prevChar before string of ____ started
              prevChar = token.raw.slice(-1);
            }

            keepPrevChar = true;
            lastToken = tokens[tokens.length - 1];

            if (lastToken && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }

            continue;
          }

          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }

        return tokens;
      }
    }], [{
      key: "rules",
      get: function get() {
        return {
          block: block,
          inline: inline
        };
      }
      /**
       * Static Lex Method
       */

    }, {
      key: "lex",
      value: function lex(src, options) {
        var lexer = new Lexer(options);
        return lexer.lex(src);
      }
      /**
       * Static Lex Inline Method
       */

    }, {
      key: "lexInline",
      value: function lexInline(src, options) {
        var lexer = new Lexer(options);
        return lexer.inlineTokens(src);
      }
    }]);

    return Lexer;
  }();

  var defaults$2 = defaults$5.defaults;
  var cleanUrl = helpers.cleanUrl,
      escape$1 = helpers.escape;
  /**
   * Renderer
   */

  var Renderer_1 = /*#__PURE__*/function () {
    function Renderer(options) {
      _classCallCheck(this, Renderer);

      this.options = options || defaults$2;
    }

    _createClass(Renderer, [{
      key: "code",
      value: function code(_code, infostring, escaped) {
        var lang = (infostring || '').match(/\S*/)[0];

        if (this.options.highlight) {
          var out = this.options.highlight(_code, lang);

          if (out != null && out !== _code) {
            escaped = true;
            _code = out;
          }
        }

        _code = _code.replace(/\n$/, '') + '\n';

        if (!lang) {
          return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
        }

        return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
      }
    }, {
      key: "blockquote",
      value: function blockquote(quote) {
        return '<blockquote>\n' + quote + '</blockquote>\n';
      }
    }, {
      key: "html",
      value: function html(_html) {
        return _html;
      }
    }, {
      key: "heading",
      value: function heading(text, level, raw, slugger) {
        if (this.options.headerIds) {
          return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
        } // ignore IDs


        return '<h' + level + '>' + text + '</h' + level + '>\n';
      }
    }, {
      key: "hr",
      value: function hr() {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
      }
    }, {
      key: "list",
      value: function list(body, ordered, start) {
        var type = ordered ? 'ol' : 'ul',
            startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
        return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
      }
    }, {
      key: "listitem",
      value: function listitem(text) {
        return '<li>' + text + '</li>\n';
      }
    }, {
      key: "checkbox",
      value: function checkbox(checked) {
        return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
      }
    }, {
      key: "paragraph",
      value: function paragraph(text) {
        return '<p>' + text + '</p>\n';
      }
    }, {
      key: "table",
      value: function table(header, body) {
        if (body) body = '<tbody>' + body + '</tbody>';
        return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
      }
    }, {
      key: "tablerow",
      value: function tablerow(content) {
        return '<tr>\n' + content + '</tr>\n';
      }
    }, {
      key: "tablecell",
      value: function tablecell(content, flags) {
        var type = flags.header ? 'th' : 'td';
        var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
        return tag + content + '</' + type + '>\n';
      } // span level renderer

    }, {
      key: "strong",
      value: function strong(text) {
        return '<strong>' + text + '</strong>';
      }
    }, {
      key: "em",
      value: function em(text) {
        return '<em>' + text + '</em>';
      }
    }, {
      key: "codespan",
      value: function codespan(text) {
        return '<code>' + text + '</code>';
      }
    }, {
      key: "br",
      value: function br() {
        return this.options.xhtml ? '<br/>' : '<br>';
      }
    }, {
      key: "del",
      value: function del(text) {
        return '<del>' + text + '</del>';
      }
    }, {
      key: "link",
      value: function link(href, title, text) {
        href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

        if (href === null) {
          return text;
        }

        var out = '<a href="' + escape$1(href) + '"';

        if (title) {
          out += ' title="' + title + '"';
        }

        out += '>' + text + '</a>';
        return out;
      }
    }, {
      key: "image",
      value: function image(href, title, text) {
        href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

        if (href === null) {
          return text;
        }

        var out = '<img src="' + href + '" alt="' + text + '"';

        if (title) {
          out += ' title="' + title + '"';
        }

        out += this.options.xhtml ? '/>' : '>';
        return out;
      }
    }, {
      key: "text",
      value: function text(_text) {
        return _text;
      }
    }]);

    return Renderer;
  }();

  /**
   * TextRenderer
   * returns only the textual part of the token
   */
  var TextRenderer_1 = /*#__PURE__*/function () {
    function TextRenderer() {
      _classCallCheck(this, TextRenderer);
    }

    _createClass(TextRenderer, [{
      key: "strong",
      value: // no need for block level renderers
      function strong(text) {
        return text;
      }
    }, {
      key: "em",
      value: function em(text) {
        return text;
      }
    }, {
      key: "codespan",
      value: function codespan(text) {
        return text;
      }
    }, {
      key: "del",
      value: function del(text) {
        return text;
      }
    }, {
      key: "html",
      value: function html(text) {
        return text;
      }
    }, {
      key: "text",
      value: function text(_text) {
        return _text;
      }
    }, {
      key: "link",
      value: function link(href, title, text) {
        return '' + text;
      }
    }, {
      key: "image",
      value: function image(href, title, text) {
        return '' + text;
      }
    }, {
      key: "br",
      value: function br() {
        return '';
      }
    }]);

    return TextRenderer;
  }();

  /**
   * Slugger generates header id
   */
  var Slugger_1 = /*#__PURE__*/function () {
    function Slugger() {
      _classCallCheck(this, Slugger);

      this.seen = {};
    }

    _createClass(Slugger, [{
      key: "serialize",
      value: function serialize(value) {
        return value.toLowerCase().trim() // remove html tags
        .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
        .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
      }
      /**
       * Finds the next safe (unique) slug to use
       */

    }, {
      key: "getNextSafeSlug",
      value: function getNextSafeSlug(originalSlug, isDryRun) {
        var slug = originalSlug;
        var occurenceAccumulator = 0;

        if (this.seen.hasOwnProperty(slug)) {
          occurenceAccumulator = this.seen[originalSlug];

          do {
            occurenceAccumulator++;
            slug = originalSlug + '-' + occurenceAccumulator;
          } while (this.seen.hasOwnProperty(slug));
        }

        if (!isDryRun) {
          this.seen[originalSlug] = occurenceAccumulator;
          this.seen[slug] = 0;
        }

        return slug;
      }
      /**
       * Convert string to unique id
       * @param {object} options
       * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
       */

    }, {
      key: "slug",
      value: function slug(value) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var slug = this.serialize(value);
        return this.getNextSafeSlug(slug, options.dryrun);
      }
    }]);

    return Slugger;
  }();

  var defaults$1 = defaults$5.defaults;
  var unescape = helpers.unescape;
  /**
   * Parsing & Compiling
   */

  var Parser_1 = /*#__PURE__*/function () {
    function Parser(options) {
      _classCallCheck(this, Parser);

      this.options = options || defaults$1;
      this.options.renderer = this.options.renderer || new Renderer_1();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer_1();
      this.slugger = new Slugger_1();
    }
    /**
     * Static Parse Method
     */


    _createClass(Parser, [{
      key: "parse",
      value:
      /**
       * Parse Loop
       */
      function parse(tokens) {
        var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var out = '',
            i,
            j,
            k,
            l2,
            l3,
            row,
            cell,
            header,
            body,
            token,
            ordered,
            start,
            loose,
            itemBody,
            item,
            checked,
            task,
            checkbox,
            ret;
        var l = tokens.length;

        for (i = 0; i < l; i++) {
          token = tokens[i]; // Run any renderer extensions

          if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
            ret = this.options.extensions.renderers[token.type].call(this, token);

            if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
              out += ret || '';
              continue;
            }
          }

          switch (token.type) {
            case 'space':
              {
                continue;
              }

            case 'hr':
              {
                out += this.renderer.hr();
                continue;
              }

            case 'heading':
              {
                out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
                continue;
              }

            case 'code':
              {
                out += this.renderer.code(token.text, token.lang, token.escaped);
                continue;
              }

            case 'table':
              {
                header = ''; // header

                cell = '';
                l2 = token.header.length;

                for (j = 0; j < l2; j++) {
                  cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
                    header: true,
                    align: token.align[j]
                  });
                }

                header += this.renderer.tablerow(cell);
                body = '';
                l2 = token.cells.length;

                for (j = 0; j < l2; j++) {
                  row = token.tokens.cells[j];
                  cell = '';
                  l3 = row.length;

                  for (k = 0; k < l3; k++) {
                    cell += this.renderer.tablecell(this.parseInline(row[k]), {
                      header: false,
                      align: token.align[k]
                    });
                  }

                  body += this.renderer.tablerow(cell);
                }

                out += this.renderer.table(header, body);
                continue;
              }

            case 'blockquote':
              {
                body = this.parse(token.tokens);
                out += this.renderer.blockquote(body);
                continue;
              }

            case 'list':
              {
                ordered = token.ordered;
                start = token.start;
                loose = token.loose;
                l2 = token.items.length;
                body = '';

                for (j = 0; j < l2; j++) {
                  item = token.items[j];
                  checked = item.checked;
                  task = item.task;
                  itemBody = '';

                  if (item.task) {
                    checkbox = this.renderer.checkbox(checked);

                    if (loose) {
                      if (item.tokens.length > 0 && item.tokens[0].type === 'text') {
                        item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                        if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                          item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                        }
                      } else {
                        item.tokens.unshift({
                          type: 'text',
                          text: checkbox
                        });
                      }
                    } else {
                      itemBody += checkbox;
                    }
                  }

                  itemBody += this.parse(item.tokens, loose);
                  body += this.renderer.listitem(itemBody, task, checked);
                }

                out += this.renderer.list(body, ordered, start);
                continue;
              }

            case 'html':
              {
                // TODO parse inline content if parameter markdown=1
                out += this.renderer.html(token.text);
                continue;
              }

            case 'paragraph':
              {
                out += this.renderer.paragraph(this.parseInline(token.tokens));
                continue;
              }

            case 'text':
              {
                body = token.tokens ? this.parseInline(token.tokens) : token.text;

                while (i + 1 < l && tokens[i + 1].type === 'text') {
                  token = tokens[++i];
                  body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
                }

                out += top ? this.renderer.paragraph(body) : body;
                continue;
              }

            default:
              {
                var errMsg = 'Token with "' + token.type + '" type was not found.';

                if (this.options.silent) {
                  console.error(errMsg);
                  return;
                } else {
                  throw new Error(errMsg);
                }
              }
          }
        }

        return out;
      }
      /**
       * Parse Inline Tokens
       */

    }, {
      key: "parseInline",
      value: function parseInline(tokens, renderer) {
        renderer = renderer || this.renderer;
        var out = '',
            i,
            token,
            ret;
        var l = tokens.length;

        for (i = 0; i < l; i++) {
          token = tokens[i]; // Run any renderer extensions

          if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
            ret = this.options.extensions.renderers[token.type].call(this, token);

            if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
              out += ret || '';
              continue;
            }
          }

          switch (token.type) {
            case 'escape':
              {
                out += renderer.text(token.text);
                break;
              }

            case 'html':
              {
                out += renderer.html(token.text);
                break;
              }

            case 'link':
              {
                out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
                break;
              }

            case 'image':
              {
                out += renderer.image(token.href, token.title, token.text);
                break;
              }

            case 'strong':
              {
                out += renderer.strong(this.parseInline(token.tokens, renderer));
                break;
              }

            case 'em':
              {
                out += renderer.em(this.parseInline(token.tokens, renderer));
                break;
              }

            case 'codespan':
              {
                out += renderer.codespan(token.text);
                break;
              }

            case 'br':
              {
                out += renderer.br();
                break;
              }

            case 'del':
              {
                out += renderer.del(this.parseInline(token.tokens, renderer));
                break;
              }

            case 'text':
              {
                out += renderer.text(token.text);
                break;
              }

            default:
              {
                var errMsg = 'Token with "' + token.type + '" type was not found.';

                if (this.options.silent) {
                  console.error(errMsg);
                  return;
                } else {
                  throw new Error(errMsg);
                }
              }
          }
        }

        return out;
      }
    }], [{
      key: "parse",
      value: function parse(tokens, options) {
        var parser = new Parser(options);
        return parser.parse(tokens);
      }
      /**
       * Static Parse Inline Method
       */

    }, {
      key: "parseInline",
      value: function parseInline(tokens, options) {
        var parser = new Parser(options);
        return parser.parseInline(tokens);
      }
    }]);

    return Parser;
  }();

  var merge = helpers.merge,
      checkSanitizeDeprecation = helpers.checkSanitizeDeprecation,
      escape = helpers.escape;
  var getDefaults = defaults$5.getDefaults,
      changeDefaults = defaults$5.changeDefaults,
      defaults = defaults$5.defaults;
  /**
   * Marked
   */

  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    if (typeof opt === 'function') {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);

    if (callback) {
      var highlight = opt.highlight;
      var tokens;

      try {
        tokens = Lexer_1.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      var done = function done(err) {
        var out;

        if (!err) {
          try {
            if (opt.walkTokens) {
              marked.walkTokens(tokens, opt.walkTokens);
            }

            out = Parser_1.parse(tokens, opt);
          } catch (e) {
            err = e;
          }
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;
      if (!tokens.length) return done();
      var pending = 0;
      marked.walkTokens(tokens, function (token) {
        if (token.type === 'code') {
          pending++;
          setTimeout(function () {
            highlight(token.text, token.lang, function (err, code) {
              if (err) {
                return done(err);
              }

              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }

              pending--;

              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });

      if (pending === 0) {
        done();
      }

      return;
    }

    try {
      var _tokens = Lexer_1.lex(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(_tokens, opt.walkTokens);
      }

      return Parser_1.parse(_tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  }
  /**
   * Options
   */


  marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
  };

  marked.getDefaults = getDefaults;
  marked.defaults = defaults;
  /**
   * Use Extension
   */

  marked.use = function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var opts = merge.apply(void 0, [{}].concat(args));
    var extensions = marked.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    var hasExtensions;
    args.forEach(function (pack) {
      // ==-- Parse "addon" extensions --== //
      if (pack.extensions) {
        hasExtensions = true;
        pack.extensions.forEach(function (ext) {
          if (!ext.name) {
            throw new Error('extension name required');
          }

          if (ext.renderer) {
            // Renderer extensions
            var prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;

            if (prevRenderer) {
              // Replace extension with func to run new extension but fall back if false
              extensions.renderers[ext.name] = function () {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }

                var ret = ext.renderer.apply(this, args);

                if (ret === false) {
                  ret = prevRenderer.apply(this, args);
                }

                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }

          if (ext.tokenizer) {
            // Tokenizer Extensions
            if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
              throw new Error("extension level must be 'block' or 'inline'");
            }

            if (extensions[ext.level]) {
              extensions[ext.level].unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }

            if (ext.start) {
              // Function to check for start of token
              if (ext.level === 'block') {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === 'inline') {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }

          if (ext.childTokens) {
            // Child tokens to be visited by walkTokens
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
      } // ==-- Parse "overwrite" extensions --== //


      if (pack.renderer) {
        (function () {
          var renderer = marked.defaults.renderer || new Renderer_1();

          var _loop = function _loop(prop) {
            var prevRenderer = renderer[prop]; // Replace renderer with func to run extension, but fall back if false

            renderer[prop] = function () {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              var ret = pack.renderer[prop].apply(renderer, args);

              if (ret === false) {
                ret = prevRenderer.apply(renderer, args);
              }

              return ret;
            };
          };

          for (var prop in pack.renderer) {
            _loop(prop);
          }

          opts.renderer = renderer;
        })();
      }

      if (pack.tokenizer) {
        (function () {
          var tokenizer = marked.defaults.tokenizer || new Tokenizer_1();

          var _loop2 = function _loop2(prop) {
            var prevTokenizer = tokenizer[prop]; // Replace tokenizer with func to run extension, but fall back if false

            tokenizer[prop] = function () {
              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }

              var ret = pack.tokenizer[prop].apply(tokenizer, args);

              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args);
              }

              return ret;
            };
          };

          for (var prop in pack.tokenizer) {
            _loop2(prop);
          }

          opts.tokenizer = tokenizer;
        })();
      } // ==-- Parse WalkTokens extensions --== //


      if (pack.walkTokens) {
        var walkTokens = marked.defaults.walkTokens;

        opts.walkTokens = function (token) {
          pack.walkTokens.call(_this, token);

          if (walkTokens) {
            walkTokens(token);
          }
        };
      }

      if (hasExtensions) {
        opts.extensions = extensions;
      }

      marked.setOptions(opts);
    });
  };
  /**
   * Run callback for every token
   */


  marked.walkTokens = function (tokens, callback) {
    var _iterator = _createForOfIteratorHelper(tokens),
        _step;

    try {
      var _loop3 = function _loop3() {
        var token = _step.value;
        callback(token);

        switch (token.type) {
          case 'table':
            {
              var _iterator2 = _createForOfIteratorHelper(token.tokens.header),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var cell = _step2.value;
                  marked.walkTokens(cell, callback);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              var _iterator3 = _createForOfIteratorHelper(token.tokens.cells),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var row = _step3.value;

                  var _iterator4 = _createForOfIteratorHelper(row),
                      _step4;

                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      var _cell = _step4.value;
                      marked.walkTokens(_cell, callback);
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              break;
            }

          case 'list':
            {
              marked.walkTokens(token.items, callback);
              break;
            }

          default:
            {
              if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
                // Walk any extensions
                marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
                  marked.walkTokens(token[childTokens], callback);
                });
              } else if (token.tokens) {
                marked.walkTokens(token.tokens, callback);
              }
            }
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop3();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  /**
   * Parse Inline
   */


  marked.parseInline = function (src, opt) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked.parseInline(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);

    try {
      var tokens = Lexer_1.lexInline(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }

      return Parser_1.parseInline(tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  };
  /**
   * Expose
   */


  marked.Parser = Parser_1;
  marked.parser = Parser_1.parse;
  marked.Renderer = Renderer_1;
  marked.TextRenderer = TextRenderer_1;
  marked.Lexer = Lexer_1;
  marked.lexer = Lexer_1.lex;
  marked.Tokenizer = Tokenizer_1;
  marked.Slugger = Slugger_1;
  marked.parse = marked;
  var marked_1 = marked;

  function init() {
    tabs.forEach(function (t) {
      var button = d3__namespace.select('#tabbar').append('button');
      button.text(t.caption);
      button.attr('id', "tablink-".concat(t.id));
      button.classed('tablink', true);
      button.attr('onclick', "brcdseval.openPage('".concat(t.id, "')"));
      var div = d3__namespace.select('body').append('div');
      div.attr('id', t.id);
      div.classed('tabcontent', true);
      t.fns.gui("#".concat(t.id)); // Get the readme file - which is the help file for the 
      // project - and display on the Help page.

      console.log('href', window.location);
      var root;

      if (window.location.pathname === '/index.html') {
        root = window.location.href.substring(0, window.location.href.length - 10);
      } else {
        root = window.location.href;
      }

      fetch("".concat(root, "/README.md")).then(function (response) {
        return response.text();
      }).then(function (result) {
        return document.getElementById('markdown').innerHTML = marked_1(result);
      });
    }); // Initialise on help page

    openPage('help');
  }
  function openPage(id) {
    // Sort out style on the tablink buttons and display
    // the page content associated with the selected tab
    d3__namespace.selectAll(".tabcontent").style("display", "none");
    d3__namespace.select("#".concat(id)).style("display", "block");
    d3__namespace.selectAll(".tablink").style("background-color", "");
    d3__namespace.select("#tablink-".concat(id)).style("background-color", "green"); // Call the tabSelected function

    var tab = tabs.find(function (t) {
      return t.id === id;
    });
    if (tab) tab.fns.tabSelected();
  }

  var name = "brc-ds-eval";
  var version = "0.3.0";
  var description = "Javscript library for the BRC dataset evaluation tool.";
  var type = "module";
  var main = "dist/brc-ds-eval.umd.js";
  var browser = "dist/brc-ds-eval.umd.js";
  var scripts = {
  	lint: "npx eslint src",
  	test: "jest",
  	build: "rollup --config"
  };
  var author = "UKCEH Biological Records Centre";
  var license = "GPL-3.0-only";
  var files = [
  	"dist"
  ];
  var repository = {
  	type: "git",
  	url: "https://github.com/BiologicalRecordsCentre/brc-ds-eval.git"
  };
  var dependencies = {
  	"brc-atlas-bigr": "^2.1.0",
  	d3: "^5.16.0",
  	dateformat: "^4.5.1",
  	markdown: "^0.5.0",
  	marked: "^2.1.3",
  	"tabulator-tables": "^4.9.3"
  };
  var devDependencies = {
  	"@babel/core": "^7.10.4",
  	"@babel/preset-env": "^7.10.4",
  	"@rollup/plugin-babel": "^5.0.4",
  	"@rollup/plugin-commonjs": "^13.0.0",
  	"@rollup/plugin-json": "^4.1.0",
  	"@rollup/plugin-node-resolve": "^8.1.0",
  	eslint: "^7.4.0",
  	"eslint-plugin-jest": "^23.17.1",
  	jest: "^26.1.0",
  	rollup: "^2.23.0",
  	"rollup-plugin-css-only": "^2.1.0",
  	"rollup-plugin-eslint": "^7.0.0",
  	"rollup-plugin-terser": "^6.1.0"
  };
  var pkg = {
  	name: name,
  	version: version,
  	description: description,
  	type: type,
  	main: main,
  	browser: browser,
  	scripts: scripts,
  	author: author,
  	license: license,
  	files: files,
  	repository: repository,
  	dependencies: dependencies,
  	devDependencies: devDependencies
  };

  // to assist with trouble shooting.

  console.log("Running ".concat(pkg.name, " version ").concat(pkg.version));

  exports.clearFieldConfig = clearFieldConfig;
  exports.fileOpened = fileOpened;
  exports.init = init;
  exports.mapoverviewClearMap = mapoverviewClearMap;
  exports.mapoverviewDisplay = mapoverviewDisplay;
  exports.mapoverviewMap = mapoverviewMap;
  exports.mapslippyBasemapOpacity = mapslippyBasemapOpacity;
  exports.mapslippyClearMap = mapslippyClearMap;
  exports.mapslippyClusterChanged = mapslippyClusterChanged;
  exports.mapslippyDisplay = mapslippyDisplay;
  exports.mapslippyMap = mapslippyMap;
  exports.mapslippySetHeight = mapslippySetHeight;
  exports.openPage = openPage;
  exports.phenologyDisplay = phenologyDisplay;
  exports.redoSummaries = redoSummaries;
  exports.setFieldConfig = setFieldConfig;
  exports.summaryDisplay = summaryDisplay;
  exports.summaryDownloadCSV = summaryDownloadCSV;
  exports.timeseriesDisplay = timeseriesDisplay;
  exports.visitsDownloadCSV = visitsDownloadCSV;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
