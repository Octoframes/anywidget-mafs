function ef(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var F1 = { exports: {} }, aa = {}, H1 = { exports: {} }, te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var An = Symbol.for("react.element"), tf = Symbol.for("react.portal"), rf = Symbol.for("react.fragment"), nf = Symbol.for("react.strict_mode"), af = Symbol.for("react.profiler"), lf = Symbol.for("react.provider"), sf = Symbol.for("react.context"), of = Symbol.for("react.forward_ref"), uf = Symbol.for("react.suspense"), cf = Symbol.for("react.memo"), ff = Symbol.for("react.lazy"), Oo = Symbol.iterator;
function df(t) {
  return t === null || typeof t != "object" ? null : (t = Oo && t[Oo] || t["@@iterator"], typeof t == "function" ? t : null);
}
var j1 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, V1 = Object.assign, U1 = {};
function Ir(t, e, r) {
  this.props = t, this.context = e, this.refs = U1, this.updater = r || j1;
}
Ir.prototype.isReactComponent = {};
Ir.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
Ir.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function $1() {
}
$1.prototype = Ir.prototype;
function ws(t, e, r) {
  this.props = t, this.context = e, this.refs = U1, this.updater = r || j1;
}
var xs = ws.prototype = new $1();
xs.constructor = ws;
V1(xs, Ir.prototype);
xs.isPureReactComponent = !0;
var Fo = Array.isArray, q1 = Object.prototype.hasOwnProperty, Ss = { current: null }, W1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Y1(t, e, r) {
  var n, i = {}, a = null, l = null;
  if (e != null)
    for (n in e.ref !== void 0 && (l = e.ref), e.key !== void 0 && (a = "" + e.key), e)
      q1.call(e, n) && !W1.hasOwnProperty(n) && (i[n] = e[n]);
  var o = arguments.length - 2;
  if (o === 1)
    i.children = r;
  else if (1 < o) {
    for (var u = Array(o), d = 0; d < o; d++)
      u[d] = arguments[d + 2];
    i.children = u;
  }
  if (t && t.defaultProps)
    for (n in o = t.defaultProps, o)
      i[n] === void 0 && (i[n] = o[n]);
  return { $$typeof: An, type: t, key: a, ref: l, props: i, _owner: Ss.current };
}
function hf(t, e) {
  return { $$typeof: An, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function ks(t) {
  return typeof t == "object" && t !== null && t.$$typeof === An;
}
function mf(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(r) {
    return e[r];
  });
}
var Ho = /\/+/g;
function Da(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? mf("" + t.key) : e.toString(36);
}
function hi(t, e, r, n, i) {
  var a = typeof t;
  (a === "undefined" || a === "boolean") && (t = null);
  var l = !1;
  if (t === null)
    l = !0;
  else
    switch (a) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case An:
          case tf:
            l = !0;
        }
    }
  if (l)
    return l = t, i = i(l), t = n === "" ? "." + Da(l, 0) : n, Fo(i) ? (r = "", t != null && (r = t.replace(Ho, "$&/") + "/"), hi(i, e, r, "", function(d) {
      return d;
    })) : i != null && (ks(i) && (i = hf(i, r + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Ho, "$&/") + "/") + t)), e.push(i)), 1;
  if (l = 0, n = n === "" ? "." : n + ":", Fo(t))
    for (var o = 0; o < t.length; o++) {
      a = t[o];
      var u = n + Da(a, o);
      l += hi(a, e, r, u, i);
    }
  else if (u = df(t), typeof u == "function")
    for (t = u.call(t), o = 0; !(a = t.next()).done; )
      a = a.value, u = n + Da(a, o++), l += hi(a, e, r, u, i);
  else if (a === "object")
    throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Un(t, e, r) {
  if (t == null)
    return t;
  var n = [], i = 0;
  return hi(t, n, "", "", function(a) {
    return e.call(r, a, i++);
  }), n;
}
function pf(t) {
  if (t._status === -1) {
    var e = t._result;
    e = e(), e.then(function(r) {
      (t._status === 0 || t._status === -1) && (t._status = 1, t._result = r);
    }, function(r) {
      (t._status === 0 || t._status === -1) && (t._status = 2, t._result = r);
    }), t._status === -1 && (t._status = 0, t._result = e);
  }
  if (t._status === 1)
    return t._result.default;
  throw t._result;
}
var Ge = { current: null }, mi = { transition: null }, vf = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: mi, ReactCurrentOwner: Ss };
te.Children = { map: Un, forEach: function(t, e, r) {
  Un(t, function() {
    e.apply(this, arguments);
  }, r);
}, count: function(t) {
  var e = 0;
  return Un(t, function() {
    e++;
  }), e;
}, toArray: function(t) {
  return Un(t, function(e) {
    return e;
  }) || [];
}, only: function(t) {
  if (!ks(t))
    throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
te.Component = Ir;
te.Fragment = rf;
te.Profiler = af;
te.PureComponent = ws;
te.StrictMode = nf;
te.Suspense = uf;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vf;
te.cloneElement = function(t, e, r) {
  if (t == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var n = V1({}, t.props), i = t.key, a = t.ref, l = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (a = e.ref, l = Ss.current), e.key !== void 0 && (i = "" + e.key), t.type && t.type.defaultProps)
      var o = t.type.defaultProps;
    for (u in e)
      q1.call(e, u) && !W1.hasOwnProperty(u) && (n[u] = e[u] === void 0 && o !== void 0 ? o[u] : e[u]);
  }
  var u = arguments.length - 2;
  if (u === 1)
    n.children = r;
  else if (1 < u) {
    o = Array(u);
    for (var d = 0; d < u; d++)
      o[d] = arguments[d + 2];
    n.children = o;
  }
  return { $$typeof: An, type: t.type, key: i, ref: a, props: n, _owner: l };
};
te.createContext = function(t) {
  return t = { $$typeof: sf, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: lf, _context: t }, t.Consumer = t;
};
te.createElement = Y1;
te.createFactory = function(t) {
  var e = Y1.bind(null, t);
  return e.type = t, e;
};
te.createRef = function() {
  return { current: null };
};
te.forwardRef = function(t) {
  return { $$typeof: of, render: t };
};
te.isValidElement = ks;
te.lazy = function(t) {
  return { $$typeof: ff, _payload: { _status: -1, _result: t }, _init: pf };
};
te.memo = function(t, e) {
  return { $$typeof: cf, type: t, compare: e === void 0 ? null : e };
};
te.startTransition = function(t) {
  var e = mi.transition;
  mi.transition = {};
  try {
    t();
  } finally {
    mi.transition = e;
  }
};
te.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
te.useCallback = function(t, e) {
  return Ge.current.useCallback(t, e);
};
te.useContext = function(t) {
  return Ge.current.useContext(t);
};
te.useDebugValue = function() {
};
te.useDeferredValue = function(t) {
  return Ge.current.useDeferredValue(t);
};
te.useEffect = function(t, e) {
  return Ge.current.useEffect(t, e);
};
te.useId = function() {
  return Ge.current.useId();
};
te.useImperativeHandle = function(t, e, r) {
  return Ge.current.useImperativeHandle(t, e, r);
};
te.useInsertionEffect = function(t, e) {
  return Ge.current.useInsertionEffect(t, e);
};
te.useLayoutEffect = function(t, e) {
  return Ge.current.useLayoutEffect(t, e);
};
te.useMemo = function(t, e) {
  return Ge.current.useMemo(t, e);
};
te.useReducer = function(t, e, r) {
  return Ge.current.useReducer(t, e, r);
};
te.useRef = function(t) {
  return Ge.current.useRef(t);
};
te.useState = function(t) {
  return Ge.current.useState(t);
};
te.useSyncExternalStore = function(t, e, r) {
  return Ge.current.useSyncExternalStore(t, e, r);
};
te.useTransition = function() {
  return Ge.current.useTransition();
};
te.version = "18.2.0";
H1.exports = te;
var Z = H1.exports;
const pi = /* @__PURE__ */ ef(Z);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yf = Z, gf = Symbol.for("react.element"), wf = Symbol.for("react.fragment"), xf = Object.prototype.hasOwnProperty, Sf = yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function K1(t, e, r) {
  var n, i = {}, a = null, l = null;
  r !== void 0 && (a = "" + r), e.key !== void 0 && (a = "" + e.key), e.ref !== void 0 && (l = e.ref);
  for (n in e)
    xf.call(e, n) && !kf.hasOwnProperty(n) && (i[n] = e[n]);
  if (t && t.defaultProps)
    for (n in e = t.defaultProps, e)
      i[n] === void 0 && (i[n] = e[n]);
  return { $$typeof: gf, type: t, key: a, ref: l, props: i, _owner: Sf.current };
}
aa.Fragment = wf;
aa.jsx = K1;
aa.jsxs = K1;
F1.exports = aa;
var $ = F1.exports, gl = {}, G1 = { exports: {} }, ft = {}, Q1 = { exports: {} }, X1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
  function e(L, B) {
    var j = L.length;
    L.push(B);
    e:
      for (; 0 < j; ) {
        var q = j - 1 >>> 1, K = L[q];
        if (0 < i(K, B))
          L[q] = B, L[j] = K, j = q;
        else
          break e;
      }
  }
  function r(L) {
    return L.length === 0 ? null : L[0];
  }
  function n(L) {
    if (L.length === 0)
      return null;
    var B = L[0], j = L.pop();
    if (j !== B) {
      L[0] = j;
      e:
        for (var q = 0, K = L.length, ze = K >>> 1; q < ze; ) {
          var Ae = 2 * (q + 1) - 1, pt = L[Ae], vt = Ae + 1, lt = L[vt];
          if (0 > i(pt, j))
            vt < K && 0 > i(lt, pt) ? (L[q] = lt, L[vt] = j, q = vt) : (L[q] = pt, L[Ae] = j, q = Ae);
          else if (vt < K && 0 > i(lt, j))
            L[q] = lt, L[vt] = j, q = vt;
          else
            break e;
        }
    }
    return B;
  }
  function i(L, B) {
    var j = L.sortIndex - B.sortIndex;
    return j !== 0 ? j : L.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    t.unstable_now = function() {
      return a.now();
    };
  } else {
    var l = Date, o = l.now();
    t.unstable_now = function() {
      return l.now() - o;
    };
  }
  var u = [], d = [], h = 1, m = null, p = 3, S = !1, M = !1, z = !1, A = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(L) {
    for (var B = r(d); B !== null; ) {
      if (B.callback === null)
        n(d);
      else if (B.startTime <= L)
        n(d), B.sortIndex = B.expirationTime, e(u, B);
      else
        break;
      B = r(d);
    }
  }
  function E(L) {
    if (z = !1, x(L), !M)
      if (r(u) !== null)
        M = !0, qe(k);
      else {
        var B = r(d);
        B !== null && at(E, B.startTime - L);
      }
  }
  function k(L, B) {
    M = !1, z && (z = !1, y(_), _ = -1), S = !0;
    var j = p;
    try {
      for (x(B), m = r(u); m !== null && (!(m.expirationTime > B) || L && !ee()); ) {
        var q = m.callback;
        if (typeof q == "function") {
          m.callback = null, p = m.priorityLevel;
          var K = q(m.expirationTime <= B);
          B = t.unstable_now(), typeof K == "function" ? m.callback = K : m === r(u) && n(u), x(B);
        } else
          n(u);
        m = r(u);
      }
      if (m !== null)
        var ze = !0;
      else {
        var Ae = r(d);
        Ae !== null && at(E, Ae.startTime - B), ze = !1;
      }
      return ze;
    } finally {
      m = null, p = j, S = !1;
    }
  }
  var C = !1, N = null, _ = -1, F = 5, U = -1;
  function ee() {
    return !(t.unstable_now() - U < F);
  }
  function re() {
    if (N !== null) {
      var L = t.unstable_now();
      U = L;
      var B = !0;
      try {
        B = N(!0, L);
      } finally {
        B ? Me() : (C = !1, N = null);
      }
    } else
      C = !1;
  }
  var Me;
  if (typeof v == "function")
    Me = function() {
      v(re);
    };
  else if (typeof MessageChannel < "u") {
    var ne = new MessageChannel(), He = ne.port2;
    ne.port1.onmessage = re, Me = function() {
      He.postMessage(null);
    };
  } else
    Me = function() {
      A(re, 0);
    };
  function qe(L) {
    N = L, C || (C = !0, Me());
  }
  function at(L, B) {
    _ = A(function() {
      L(t.unstable_now());
    }, B);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(L) {
    L.callback = null;
  }, t.unstable_continueExecution = function() {
    M || S || (M = !0, qe(k));
  }, t.unstable_forceFrameRate = function(L) {
    0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < L ? Math.floor(1e3 / L) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, t.unstable_getFirstCallbackNode = function() {
    return r(u);
  }, t.unstable_next = function(L) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var B = 3;
        break;
      default:
        B = p;
    }
    var j = p;
    p = B;
    try {
      return L();
    } finally {
      p = j;
    }
  }, t.unstable_pauseExecution = function() {
  }, t.unstable_requestPaint = function() {
  }, t.unstable_runWithPriority = function(L, B) {
    switch (L) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        L = 3;
    }
    var j = p;
    p = L;
    try {
      return B();
    } finally {
      p = j;
    }
  }, t.unstable_scheduleCallback = function(L, B, j) {
    var q = t.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? q + j : q) : j = q, L) {
      case 1:
        var K = -1;
        break;
      case 2:
        K = 250;
        break;
      case 5:
        K = 1073741823;
        break;
      case 4:
        K = 1e4;
        break;
      default:
        K = 5e3;
    }
    return K = j + K, L = { id: h++, callback: B, priorityLevel: L, startTime: j, expirationTime: K, sortIndex: -1 }, j > q ? (L.sortIndex = j, e(d, L), r(u) === null && L === r(d) && (z ? (y(_), _ = -1) : z = !0, at(E, j - q))) : (L.sortIndex = K, e(u, L), M || S || (M = !0, qe(k))), L;
  }, t.unstable_shouldYield = ee, t.unstable_wrapCallback = function(L) {
    var B = p;
    return function() {
      var j = p;
      p = B;
      try {
        return L.apply(this, arguments);
      } finally {
        p = j;
      }
    };
  };
})(X1);
Q1.exports = X1;
var bf = Q1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z1 = Z, ct = bf;
function D(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++)
    e += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var J1 = /* @__PURE__ */ new Set(), fn = {};
function Q0(t, e) {
  Mr(t, e), Mr(t + "Capture", e);
}
function Mr(t, e) {
  for (fn[t] = e, t = 0; t < e.length; t++)
    J1.add(e[t]);
}
var t0 = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wl = Object.prototype.hasOwnProperty, Mf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, jo = {}, Vo = {};
function zf(t) {
  return wl.call(Vo, t) ? !0 : wl.call(jo, t) ? !1 : Mf.test(t) ? Vo[t] = !0 : (jo[t] = !0, !1);
}
function Cf(t, e, r, n) {
  if (r !== null && r.type === 0)
    return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Tf(t, e, r, n) {
  if (e === null || typeof e > "u" || Cf(t, e, r, n))
    return !0;
  if (n)
    return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Qe(t, e, r, n, i, a, l) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = t, this.type = e, this.sanitizeURL = a, this.removeEmptyString = l;
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
  Oe[t] = new Qe(t, 0, !1, t, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
  var e = t[0];
  Oe[e] = new Qe(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
  Oe[t] = new Qe(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  Oe[t] = new Qe(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
  Oe[t] = new Qe(t, 3, !1, t.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
  Oe[t] = new Qe(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function(t) {
  Oe[t] = new Qe(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(t) {
  Oe[t] = new Qe(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function(t) {
  Oe[t] = new Qe(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var bs = /[\-:]([a-z])/g;
function Ms(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(
    bs,
    Ms
  );
  Oe[e] = new Qe(e, 1, !1, t, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(bs, Ms);
  Oe[e] = new Qe(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(bs, Ms);
  Oe[e] = new Qe(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  Oe[t] = new Qe(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Qe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
  Oe[t] = new Qe(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function zs(t, e, r, n) {
  var i = Oe.hasOwnProperty(e) ? Oe[e] : null;
  (i !== null ? i.type !== 0 : n || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Tf(e, r, i, n) && (r = null), n || i === null ? zf(e) && (r === null ? t.removeAttribute(e) : t.setAttribute(e, "" + r)) : i.mustUseProperty ? t[i.propertyName] = r === null ? i.type === 3 ? !1 : "" : r : (e = i.attributeName, n = i.attributeNamespace, r === null ? t.removeAttribute(e) : (i = i.type, r = i === 3 || i === 4 && r === !0 ? "" : "" + r, n ? t.setAttributeNS(n, e, r) : t.setAttribute(e, r))));
}
var l0 = Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $n = Symbol.for("react.element"), ir = Symbol.for("react.portal"), ar = Symbol.for("react.fragment"), Cs = Symbol.for("react.strict_mode"), xl = Symbol.for("react.profiler"), e4 = Symbol.for("react.provider"), t4 = Symbol.for("react.context"), Ts = Symbol.for("react.forward_ref"), Sl = Symbol.for("react.suspense"), kl = Symbol.for("react.suspense_list"), Es = Symbol.for("react.memo"), f0 = Symbol.for("react.lazy"), r4 = Symbol.for("react.offscreen"), Uo = Symbol.iterator;
function Hr(t) {
  return t === null || typeof t != "object" ? null : (t = Uo && t[Uo] || t["@@iterator"], typeof t == "function" ? t : null);
}
var xe = Object.assign, Ra;
function Kr(t) {
  if (Ra === void 0)
    try {
      throw Error();
    } catch (r) {
      var e = r.stack.trim().match(/\n( *(at )?)/);
      Ra = e && e[1] || "";
    }
  return `
` + Ra + t;
}
var Ia = !1;
function La(t, e) {
  if (!t || Ia)
    return "";
  Ia = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (e = function() {
        throw Error();
      }, Object.defineProperty(e.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(e, []);
        } catch (d) {
          var n = d;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (d) {
          n = d;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        n = d;
      }
      t();
    }
  } catch (d) {
    if (d && n && typeof d.stack == "string") {
      for (var i = d.stack.split(`
`), a = n.stack.split(`
`), l = i.length - 1, o = a.length - 1; 1 <= l && 0 <= o && i[l] !== a[o]; )
        o--;
      for (; 1 <= l && 0 <= o; l--, o--)
        if (i[l] !== a[o]) {
          if (l !== 1 || o !== 1)
            do
              if (l--, o--, 0 > o || i[l] !== a[o]) {
                var u = `
` + i[l].replace(" at new ", " at ");
                return t.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", t.displayName)), u;
              }
            while (1 <= l && 0 <= o);
          break;
        }
    }
  } finally {
    Ia = !1, Error.prepareStackTrace = r;
  }
  return (t = t ? t.displayName || t.name : "") ? Kr(t) : "";
}
function Ef(t) {
  switch (t.tag) {
    case 5:
      return Kr(t.type);
    case 16:
      return Kr("Lazy");
    case 13:
      return Kr("Suspense");
    case 19:
      return Kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t = La(t.type, !1), t;
    case 11:
      return t = La(t.type.render, !1), t;
    case 1:
      return t = La(t.type, !0), t;
    default:
      return "";
  }
}
function bl(t) {
  if (t == null)
    return null;
  if (typeof t == "function")
    return t.displayName || t.name || null;
  if (typeof t == "string")
    return t;
  switch (t) {
    case ar:
      return "Fragment";
    case ir:
      return "Portal";
    case xl:
      return "Profiler";
    case Cs:
      return "StrictMode";
    case Sl:
      return "Suspense";
    case kl:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case t4:
        return (t.displayName || "Context") + ".Consumer";
      case e4:
        return (t._context.displayName || "Context") + ".Provider";
      case Ts:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case Es:
        return e = t.displayName || null, e !== null ? e : bl(t.type) || "Memo";
      case f0:
        e = t._payload, t = t._init;
        try {
          return bl(t(e));
        } catch {
        }
    }
  return null;
}
function Nf(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(e);
    case 8:
      return e === Cs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
  }
  return null;
}
function z0(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function n4(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function Af(t) {
  var e = n4(t) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), n = "" + t[e];
  if (!t.hasOwnProperty(e) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var i = r.get, a = r.set;
    return Object.defineProperty(t, e, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(l) {
      n = "" + l, a.call(this, l);
    } }), Object.defineProperty(t, e, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(l) {
      n = "" + l;
    }, stopTracking: function() {
      t._valueTracker = null, delete t[e];
    } };
  }
}
function qn(t) {
  t._valueTracker || (t._valueTracker = Af(t));
}
function i4(t) {
  if (!t)
    return !1;
  var e = t._valueTracker;
  if (!e)
    return !0;
  var r = e.getValue(), n = "";
  return t && (n = n4(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== r ? (e.setValue(t), !0) : !1;
}
function Ei(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u")
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Ml(t, e) {
  var r = e.checked;
  return xe({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? t._wrapperState.initialChecked });
}
function $o(t, e) {
  var r = e.defaultValue == null ? "" : e.defaultValue, n = e.checked != null ? e.checked : e.defaultChecked;
  r = z0(e.value != null ? e.value : r), t._wrapperState = { initialChecked: n, initialValue: r, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function a4(t, e) {
  e = e.checked, e != null && zs(t, "checked", e, !1);
}
function zl(t, e) {
  a4(t, e);
  var r = z0(e.value), n = e.type;
  if (r != null)
    n === "number" ? (r === 0 && t.value === "" || t.value != r) && (t.value = "" + r) : t.value !== "" + r && (t.value = "" + r);
  else if (n === "submit" || n === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? Cl(t, e.type, r) : e.hasOwnProperty("defaultValue") && Cl(t, e.type, z0(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function qo(t, e, r) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var n = e.type;
    if (!(n !== "submit" && n !== "reset" || e.value !== void 0 && e.value !== null))
      return;
    e = "" + t._wrapperState.initialValue, r || e === t.value || (t.value = e), t.defaultValue = e;
  }
  r = t.name, r !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, r !== "" && (t.name = r);
}
function Cl(t, e, r) {
  (e !== "number" || Ei(t.ownerDocument) !== t) && (r == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + r && (t.defaultValue = "" + r));
}
var Gr = Array.isArray;
function yr(t, e, r, n) {
  if (t = t.options, e) {
    e = {};
    for (var i = 0; i < r.length; i++)
      e["$" + r[i]] = !0;
    for (r = 0; r < t.length; r++)
      i = e.hasOwnProperty("$" + t[r].value), t[r].selected !== i && (t[r].selected = i), i && n && (t[r].defaultSelected = !0);
  } else {
    for (r = "" + z0(r), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === r) {
        t[i].selected = !0, n && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Tl(t, e) {
  if (e.dangerouslySetInnerHTML != null)
    throw Error(D(91));
  return xe({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function Wo(t, e) {
  var r = e.value;
  if (r == null) {
    if (r = e.children, e = e.defaultValue, r != null) {
      if (e != null)
        throw Error(D(92));
      if (Gr(r)) {
        if (1 < r.length)
          throw Error(D(93));
        r = r[0];
      }
      e = r;
    }
    e == null && (e = ""), r = e;
  }
  t._wrapperState = { initialValue: z0(r) };
}
function l4(t, e) {
  var r = z0(e.value), n = z0(e.defaultValue);
  r != null && (r = "" + r, r !== t.value && (t.value = r), e.defaultValue == null && t.defaultValue !== r && (t.defaultValue = r)), n != null && (t.defaultValue = "" + n);
}
function Yo(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function s4(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function El(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? s4(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
}
var Wn, o4 = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, r, n, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return t(e, r, n, i);
    });
  } : t;
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
    t.innerHTML = e;
  else {
    for (Wn = Wn || document.createElement("div"), Wn.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Wn.firstChild; t.firstChild; )
      t.removeChild(t.firstChild);
    for (; e.firstChild; )
      t.appendChild(e.firstChild);
  }
});
function dn(t, e) {
  if (e) {
    var r = t.firstChild;
    if (r && r === t.lastChild && r.nodeType === 3) {
      r.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Jr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, _f = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jr).forEach(function(t) {
  _f.forEach(function(e) {
    e = e + t.charAt(0).toUpperCase() + t.substring(1), Jr[e] = Jr[t];
  });
});
function u4(t, e, r) {
  return e == null || typeof e == "boolean" || e === "" ? "" : r || typeof e != "number" || e === 0 || Jr.hasOwnProperty(t) && Jr[t] ? ("" + e).trim() : e + "px";
}
function c4(t, e) {
  t = t.style;
  for (var r in e)
    if (e.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, i = u4(r, e[r], n);
      r === "float" && (r = "cssFloat"), n ? t.setProperty(r, i) : t[r] = i;
    }
}
var Pf = xe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Nl(t, e) {
  if (e) {
    if (Pf[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(D(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null)
        throw Error(D(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML))
        throw Error(D(61));
    }
    if (e.style != null && typeof e.style != "object")
      throw Error(D(62));
  }
}
function Al(t, e) {
  if (t.indexOf("-") === -1)
    return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _l = null;
function Ns(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var Pl = null, gr = null, wr = null;
function Ko(t) {
  if (t = Dn(t)) {
    if (typeof Pl != "function")
      throw Error(D(280));
    var e = t.stateNode;
    e && (e = ca(e), Pl(t.stateNode, t.type, e));
  }
}
function f4(t) {
  gr ? wr ? wr.push(t) : wr = [t] : gr = t;
}
function d4() {
  if (gr) {
    var t = gr, e = wr;
    if (wr = gr = null, Ko(t), e)
      for (t = 0; t < e.length; t++)
        Ko(e[t]);
  }
}
function h4(t, e) {
  return t(e);
}
function m4() {
}
var Ba = !1;
function p4(t, e, r) {
  if (Ba)
    return t(e, r);
  Ba = !0;
  try {
    return h4(t, e, r);
  } finally {
    Ba = !1, (gr !== null || wr !== null) && (m4(), d4());
  }
}
function hn(t, e) {
  var r = t.stateNode;
  if (r === null)
    return null;
  var n = ca(r);
  if (n === null)
    return null;
  r = n[e];
  e:
    switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break e;
      default:
        t = !1;
    }
  if (t)
    return null;
  if (r && typeof r != "function")
    throw Error(D(231, e, typeof r));
  return r;
}
var Dl = !1;
if (t0)
  try {
    var jr = {};
    Object.defineProperty(jr, "passive", { get: function() {
      Dl = !0;
    } }), window.addEventListener("test", jr, jr), window.removeEventListener("test", jr, jr);
  } catch {
    Dl = !1;
  }
function Df(t, e, r, n, i, a, l, o, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(r, d);
  } catch (h) {
    this.onError(h);
  }
}
var en = !1, Ni = null, Ai = !1, Rl = null, Rf = { onError: function(t) {
  en = !0, Ni = t;
} };
function If(t, e, r, n, i, a, l, o, u) {
  en = !1, Ni = null, Df.apply(Rf, arguments);
}
function Lf(t, e, r, n, i, a, l, o, u) {
  if (If.apply(this, arguments), en) {
    if (en) {
      var d = Ni;
      en = !1, Ni = null;
    } else
      throw Error(D(198));
    Ai || (Ai = !0, Rl = d);
  }
}
function X0(t) {
  var e = t, r = t;
  if (t.alternate)
    for (; e.return; )
      e = e.return;
  else {
    t = e;
    do
      e = t, e.flags & 4098 && (r = e.return), t = e.return;
    while (t);
  }
  return e.tag === 3 ? r : null;
}
function v4(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null)
      return e.dehydrated;
  }
  return null;
}
function Go(t) {
  if (X0(t) !== t)
    throw Error(D(188));
}
function Bf(t) {
  var e = t.alternate;
  if (!e) {
    if (e = X0(t), e === null)
      throw Error(D(188));
    return e !== t ? null : t;
  }
  for (var r = t, n = e; ; ) {
    var i = r.return;
    if (i === null)
      break;
    var a = i.alternate;
    if (a === null) {
      if (n = i.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === r)
          return Go(i), t;
        if (a === n)
          return Go(i), e;
        a = a.sibling;
      }
      throw Error(D(188));
    }
    if (r.return !== n.return)
      r = i, n = a;
    else {
      for (var l = !1, o = i.child; o; ) {
        if (o === r) {
          l = !0, r = i, n = a;
          break;
        }
        if (o === n) {
          l = !0, n = i, r = a;
          break;
        }
        o = o.sibling;
      }
      if (!l) {
        for (o = a.child; o; ) {
          if (o === r) {
            l = !0, r = a, n = i;
            break;
          }
          if (o === n) {
            l = !0, n = a, r = i;
            break;
          }
          o = o.sibling;
        }
        if (!l)
          throw Error(D(189));
      }
    }
    if (r.alternate !== n)
      throw Error(D(190));
  }
  if (r.tag !== 3)
    throw Error(D(188));
  return r.stateNode.current === r ? t : e;
}
function y4(t) {
  return t = Bf(t), t !== null ? g4(t) : null;
}
function g4(t) {
  if (t.tag === 5 || t.tag === 6)
    return t;
  for (t = t.child; t !== null; ) {
    var e = g4(t);
    if (e !== null)
      return e;
    t = t.sibling;
  }
  return null;
}
var w4 = ct.unstable_scheduleCallback, Qo = ct.unstable_cancelCallback, Of = ct.unstable_shouldYield, Ff = ct.unstable_requestPaint, ke = ct.unstable_now, Hf = ct.unstable_getCurrentPriorityLevel, As = ct.unstable_ImmediatePriority, x4 = ct.unstable_UserBlockingPriority, _i = ct.unstable_NormalPriority, jf = ct.unstable_LowPriority, S4 = ct.unstable_IdlePriority, la = null, Ft = null;
function Vf(t) {
  if (Ft && typeof Ft.onCommitFiberRoot == "function")
    try {
      Ft.onCommitFiberRoot(la, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
}
var Pt = Math.clz32 ? Math.clz32 : qf, Uf = Math.log, $f = Math.LN2;
function qf(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (Uf(t) / $f | 0) | 0;
}
var Yn = 64, Kn = 4194304;
function Qr(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Pi(t, e) {
  var r = t.pendingLanes;
  if (r === 0)
    return 0;
  var n = 0, i = t.suspendedLanes, a = t.pingedLanes, l = r & 268435455;
  if (l !== 0) {
    var o = l & ~i;
    o !== 0 ? n = Qr(o) : (a &= l, a !== 0 && (n = Qr(a)));
  } else
    l = r & ~i, l !== 0 ? n = Qr(l) : a !== 0 && (n = Qr(a));
  if (n === 0)
    return 0;
  if (e !== 0 && e !== n && !(e & i) && (i = n & -n, a = e & -e, i >= a || i === 16 && (a & 4194240) !== 0))
    return e;
  if (n & 4 && (n |= r & 16), e = t.entangledLanes, e !== 0)
    for (t = t.entanglements, e &= n; 0 < e; )
      r = 31 - Pt(e), i = 1 << r, n |= t[r], e &= ~i;
  return n;
}
function Wf(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Yf(t, e) {
  for (var r = t.suspendedLanes, n = t.pingedLanes, i = t.expirationTimes, a = t.pendingLanes; 0 < a; ) {
    var l = 31 - Pt(a), o = 1 << l, u = i[l];
    u === -1 ? (!(o & r) || o & n) && (i[l] = Wf(o, e)) : u <= e && (t.expiredLanes |= o), a &= ~o;
  }
}
function Il(t) {
  return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function k4() {
  var t = Yn;
  return Yn <<= 1, !(Yn & 4194240) && (Yn = 64), t;
}
function Oa(t) {
  for (var e = [], r = 0; 31 > r; r++)
    e.push(t);
  return e;
}
function _n(t, e, r) {
  t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - Pt(e), t[e] = r;
}
function Kf(t, e) {
  var r = t.pendingLanes & ~e;
  t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
  var n = t.eventTimes;
  for (t = t.expirationTimes; 0 < r; ) {
    var i = 31 - Pt(r), a = 1 << i;
    e[i] = 0, n[i] = -1, t[i] = -1, r &= ~a;
  }
}
function _s(t, e) {
  var r = t.entangledLanes |= e;
  for (t = t.entanglements; r; ) {
    var n = 31 - Pt(r), i = 1 << n;
    i & e | t[n] & e && (t[n] |= e), r &= ~i;
  }
}
var se = 0;
function b4(t) {
  return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
}
var M4, Ps, z4, C4, T4, Ll = !1, Gn = [], y0 = null, g0 = null, w0 = null, mn = /* @__PURE__ */ new Map(), pn = /* @__PURE__ */ new Map(), h0 = [], Gf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Xo(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      y0 = null;
      break;
    case "dragenter":
    case "dragleave":
      g0 = null;
      break;
    case "mouseover":
    case "mouseout":
      w0 = null;
      break;
    case "pointerover":
    case "pointerout":
      mn.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pn.delete(e.pointerId);
  }
}
function Vr(t, e, r, n, i, a) {
  return t === null || t.nativeEvent !== a ? (t = { blockedOn: e, domEventName: r, eventSystemFlags: n, nativeEvent: a, targetContainers: [i] }, e !== null && (e = Dn(e), e !== null && Ps(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
}
function Qf(t, e, r, n, i) {
  switch (e) {
    case "focusin":
      return y0 = Vr(y0, t, e, r, n, i), !0;
    case "dragenter":
      return g0 = Vr(g0, t, e, r, n, i), !0;
    case "mouseover":
      return w0 = Vr(w0, t, e, r, n, i), !0;
    case "pointerover":
      var a = i.pointerId;
      return mn.set(a, Vr(mn.get(a) || null, t, e, r, n, i)), !0;
    case "gotpointercapture":
      return a = i.pointerId, pn.set(a, Vr(pn.get(a) || null, t, e, r, n, i)), !0;
  }
  return !1;
}
function E4(t) {
  var e = F0(t.target);
  if (e !== null) {
    var r = X0(e);
    if (r !== null) {
      if (e = r.tag, e === 13) {
        if (e = v4(r), e !== null) {
          t.blockedOn = e, T4(t.priority, function() {
            z4(r);
          });
          return;
        }
      } else if (e === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function vi(t) {
  if (t.blockedOn !== null)
    return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var r = Bl(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (r === null) {
      r = t.nativeEvent;
      var n = new r.constructor(r.type, r);
      _l = n, r.target.dispatchEvent(n), _l = null;
    } else
      return e = Dn(r), e !== null && Ps(e), t.blockedOn = r, !1;
    e.shift();
  }
  return !0;
}
function Zo(t, e, r) {
  vi(t) && r.delete(e);
}
function Xf() {
  Ll = !1, y0 !== null && vi(y0) && (y0 = null), g0 !== null && vi(g0) && (g0 = null), w0 !== null && vi(w0) && (w0 = null), mn.forEach(Zo), pn.forEach(Zo);
}
function Ur(t, e) {
  t.blockedOn === e && (t.blockedOn = null, Ll || (Ll = !0, ct.unstable_scheduleCallback(ct.unstable_NormalPriority, Xf)));
}
function vn(t) {
  function e(i) {
    return Ur(i, t);
  }
  if (0 < Gn.length) {
    Ur(Gn[0], t);
    for (var r = 1; r < Gn.length; r++) {
      var n = Gn[r];
      n.blockedOn === t && (n.blockedOn = null);
    }
  }
  for (y0 !== null && Ur(y0, t), g0 !== null && Ur(g0, t), w0 !== null && Ur(w0, t), mn.forEach(e), pn.forEach(e), r = 0; r < h0.length; r++)
    n = h0[r], n.blockedOn === t && (n.blockedOn = null);
  for (; 0 < h0.length && (r = h0[0], r.blockedOn === null); )
    E4(r), r.blockedOn === null && h0.shift();
}
var xr = l0.ReactCurrentBatchConfig, Di = !0;
function Zf(t, e, r, n) {
  var i = se, a = xr.transition;
  xr.transition = null;
  try {
    se = 1, Ds(t, e, r, n);
  } finally {
    se = i, xr.transition = a;
  }
}
function Jf(t, e, r, n) {
  var i = se, a = xr.transition;
  xr.transition = null;
  try {
    se = 4, Ds(t, e, r, n);
  } finally {
    se = i, xr.transition = a;
  }
}
function Ds(t, e, r, n) {
  if (Di) {
    var i = Bl(t, e, r, n);
    if (i === null)
      Ka(t, e, n, Ri, r), Xo(t, n);
    else if (Qf(i, t, e, r, n))
      n.stopPropagation();
    else if (Xo(t, n), e & 4 && -1 < Gf.indexOf(t)) {
      for (; i !== null; ) {
        var a = Dn(i);
        if (a !== null && M4(a), a = Bl(t, e, r, n), a === null && Ka(t, e, n, Ri, r), a === i)
          break;
        i = a;
      }
      i !== null && n.stopPropagation();
    } else
      Ka(t, e, n, null, r);
  }
}
var Ri = null;
function Bl(t, e, r, n) {
  if (Ri = null, t = Ns(n), t = F0(t), t !== null)
    if (e = X0(t), e === null)
      t = null;
    else if (r = e.tag, r === 13) {
      if (t = v4(e), t !== null)
        return t;
      t = null;
    } else if (r === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else
      e !== t && (t = null);
  return Ri = t, null;
}
function N4(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Hf()) {
        case As:
          return 1;
        case x4:
          return 4;
        case _i:
        case jf:
          return 16;
        case S4:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var p0 = null, Rs = null, yi = null;
function A4() {
  if (yi)
    return yi;
  var t, e = Rs, r = e.length, n, i = "value" in p0 ? p0.value : p0.textContent, a = i.length;
  for (t = 0; t < r && e[t] === i[t]; t++)
    ;
  var l = r - t;
  for (n = 1; n <= l && e[r - n] === i[a - n]; n++)
    ;
  return yi = i.slice(t, 1 < n ? 1 - n : void 0);
}
function gi(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function Qn() {
  return !0;
}
function Jo() {
  return !1;
}
function dt(t) {
  function e(r, n, i, a, l) {
    this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null;
    for (var o in t)
      t.hasOwnProperty(o) && (r = t[o], this[o] = r ? r(a) : a[o]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Qn : Jo, this.isPropagationStopped = Jo, this;
  }
  return xe(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Qn);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Qn);
  }, persist: function() {
  }, isPersistent: Qn }), e;
}
var Lr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
  return t.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Is = dt(Lr), Pn = xe({}, Lr, { view: 0, detail: 0 }), ed = dt(Pn), Fa, Ha, $r, sa = xe({}, Pn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ls, button: 0, buttons: 0, relatedTarget: function(t) {
  return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
}, movementX: function(t) {
  return "movementX" in t ? t.movementX : (t !== $r && ($r && t.type === "mousemove" ? (Fa = t.screenX - $r.screenX, Ha = t.screenY - $r.screenY) : Ha = Fa = 0, $r = t), Fa);
}, movementY: function(t) {
  return "movementY" in t ? t.movementY : Ha;
} }), eu = dt(sa), td = xe({}, sa, { dataTransfer: 0 }), rd = dt(td), nd = xe({}, Pn, { relatedTarget: 0 }), ja = dt(nd), id = xe({}, Lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ad = dt(id), ld = xe({}, Lr, { clipboardData: function(t) {
  return "clipboardData" in t ? t.clipboardData : window.clipboardData;
} }), sd = dt(ld), od = xe({}, Lr, { data: 0 }), tu = dt(od), ud = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, cd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, fd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function dd(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = fd[t]) ? !!e[t] : !1;
}
function Ls() {
  return dd;
}
var hd = xe({}, Pn, { key: function(t) {
  if (t.key) {
    var e = ud[t.key] || t.key;
    if (e !== "Unidentified")
      return e;
  }
  return t.type === "keypress" ? (t = gi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? cd[t.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ls, charCode: function(t) {
  return t.type === "keypress" ? gi(t) : 0;
}, keyCode: function(t) {
  return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
}, which: function(t) {
  return t.type === "keypress" ? gi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
} }), md = dt(hd), pd = xe({}, sa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ru = dt(pd), vd = xe({}, Pn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ls }), yd = dt(vd), gd = xe({}, Lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wd = dt(gd), xd = xe({}, sa, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Sd = dt(xd), kd = [9, 13, 27, 32], Bs = t0 && "CompositionEvent" in window, tn = null;
t0 && "documentMode" in document && (tn = document.documentMode);
var bd = t0 && "TextEvent" in window && !tn, _4 = t0 && (!Bs || tn && 8 < tn && 11 >= tn), nu = String.fromCharCode(32), iu = !1;
function P4(t, e) {
  switch (t) {
    case "keyup":
      return kd.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function D4(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var lr = !1;
function Md(t, e) {
  switch (t) {
    case "compositionend":
      return D4(e);
    case "keypress":
      return e.which !== 32 ? null : (iu = !0, nu);
    case "textInput":
      return t = e.data, t === nu && iu ? null : t;
    default:
      return null;
  }
}
function zd(t, e) {
  if (lr)
    return t === "compositionend" || !Bs && P4(t, e) ? (t = A4(), yi = Rs = p0 = null, lr = !1, t) : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length)
          return e.char;
        if (e.which)
          return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return _4 && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Cd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function au(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Cd[t.type] : e === "textarea";
}
function R4(t, e, r, n) {
  f4(n), e = Ii(e, "onChange"), 0 < e.length && (r = new Is("onChange", "change", null, r, n), t.push({ event: r, listeners: e }));
}
var rn = null, yn = null;
function Td(t) {
  q4(t, 0);
}
function oa(t) {
  var e = ur(t);
  if (i4(e))
    return t;
}
function Ed(t, e) {
  if (t === "change")
    return e;
}
var I4 = !1;
if (t0) {
  var Va;
  if (t0) {
    var Ua = "oninput" in document;
    if (!Ua) {
      var lu = document.createElement("div");
      lu.setAttribute("oninput", "return;"), Ua = typeof lu.oninput == "function";
    }
    Va = Ua;
  } else
    Va = !1;
  I4 = Va && (!document.documentMode || 9 < document.documentMode);
}
function su() {
  rn && (rn.detachEvent("onpropertychange", L4), yn = rn = null);
}
function L4(t) {
  if (t.propertyName === "value" && oa(yn)) {
    var e = [];
    R4(e, yn, t, Ns(t)), p4(Td, e);
  }
}
function Nd(t, e, r) {
  t === "focusin" ? (su(), rn = e, yn = r, rn.attachEvent("onpropertychange", L4)) : t === "focusout" && su();
}
function Ad(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return oa(yn);
}
function _d(t, e) {
  if (t === "click")
    return oa(e);
}
function Pd(t, e) {
  if (t === "input" || t === "change")
    return oa(e);
}
function Dd(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var Rt = typeof Object.is == "function" ? Object.is : Dd;
function gn(t, e) {
  if (Rt(t, e))
    return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var r = Object.keys(t), n = Object.keys(e);
  if (r.length !== n.length)
    return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!wl.call(e, i) || !Rt(t[i], e[i]))
      return !1;
  }
  return !0;
}
function ou(t) {
  for (; t && t.firstChild; )
    t = t.firstChild;
  return t;
}
function uu(t, e) {
  var r = ou(t);
  t = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = t + r.textContent.length, t <= e && n >= e)
        return { node: r, offset: e - t };
      t = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = ou(r);
  }
}
function B4(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? B4(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function O4() {
  for (var t = window, e = Ei(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var r = typeof e.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r)
      t = e.contentWindow;
    else
      break;
    e = Ei(t.document);
  }
  return e;
}
function Os(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
function Rd(t) {
  var e = O4(), r = t.focusedElem, n = t.selectionRange;
  if (e !== r && r && r.ownerDocument && B4(r.ownerDocument.documentElement, r)) {
    if (n !== null && Os(r)) {
      if (e = n.start, t = n.end, t === void 0 && (t = e), "selectionStart" in r)
        r.selectionStart = e, r.selectionEnd = Math.min(t, r.value.length);
      else if (t = (e = r.ownerDocument || document) && e.defaultView || window, t.getSelection) {
        t = t.getSelection();
        var i = r.textContent.length, a = Math.min(n.start, i);
        n = n.end === void 0 ? a : Math.min(n.end, i), !t.extend && a > n && (i = n, n = a, a = i), i = uu(r, a);
        var l = uu(
          r,
          n
        );
        i && l && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== l.node || t.focusOffset !== l.offset) && (e = e.createRange(), e.setStart(i.node, i.offset), t.removeAllRanges(), a > n ? (t.addRange(e), t.extend(l.node, l.offset)) : (e.setEnd(l.node, l.offset), t.addRange(e)));
      }
    }
    for (e = [], t = r; t = t.parentNode; )
      t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < e.length; r++)
      t = e[r], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
  }
}
var Id = t0 && "documentMode" in document && 11 >= document.documentMode, sr = null, Ol = null, nn = null, Fl = !1;
function cu(t, e, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Fl || sr == null || sr !== Ei(n) || (n = sr, "selectionStart" in n && Os(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), nn && gn(nn, n) || (nn = n, n = Ii(Ol, "onSelect"), 0 < n.length && (e = new Is("onSelect", "select", null, e, r), t.push({ event: e, listeners: n }), e.target = sr)));
}
function Xn(t, e) {
  var r = {};
  return r[t.toLowerCase()] = e.toLowerCase(), r["Webkit" + t] = "webkit" + e, r["Moz" + t] = "moz" + e, r;
}
var or = { animationend: Xn("Animation", "AnimationEnd"), animationiteration: Xn("Animation", "AnimationIteration"), animationstart: Xn("Animation", "AnimationStart"), transitionend: Xn("Transition", "TransitionEnd") }, $a = {}, F4 = {};
t0 && (F4 = document.createElement("div").style, "AnimationEvent" in window || (delete or.animationend.animation, delete or.animationiteration.animation, delete or.animationstart.animation), "TransitionEvent" in window || delete or.transitionend.transition);
function ua(t) {
  if ($a[t])
    return $a[t];
  if (!or[t])
    return t;
  var e = or[t], r;
  for (r in e)
    if (e.hasOwnProperty(r) && r in F4)
      return $a[t] = e[r];
  return t;
}
var H4 = ua("animationend"), j4 = ua("animationiteration"), V4 = ua("animationstart"), U4 = ua("transitionend"), $4 = /* @__PURE__ */ new Map(), fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function A0(t, e) {
  $4.set(t, e), Q0(e, [t]);
}
for (var qa = 0; qa < fu.length; qa++) {
  var Wa = fu[qa], Ld = Wa.toLowerCase(), Bd = Wa[0].toUpperCase() + Wa.slice(1);
  A0(Ld, "on" + Bd);
}
A0(H4, "onAnimationEnd");
A0(j4, "onAnimationIteration");
A0(V4, "onAnimationStart");
A0("dblclick", "onDoubleClick");
A0("focusin", "onFocus");
A0("focusout", "onBlur");
A0(U4, "onTransitionEnd");
Mr("onMouseEnter", ["mouseout", "mouseover"]);
Mr("onMouseLeave", ["mouseout", "mouseover"]);
Mr("onPointerEnter", ["pointerout", "pointerover"]);
Mr("onPointerLeave", ["pointerout", "pointerover"]);
Q0("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Q0("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Q0("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Q0("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Q0("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Q0("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Od = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));
function du(t, e, r) {
  var n = t.type || "unknown-event";
  t.currentTarget = r, Lf(n, e, void 0, t), t.currentTarget = null;
}
function q4(t, e) {
  e = (e & 4) !== 0;
  for (var r = 0; r < t.length; r++) {
    var n = t[r], i = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (e)
        for (var l = n.length - 1; 0 <= l; l--) {
          var o = n[l], u = o.instance, d = o.currentTarget;
          if (o = o.listener, u !== a && i.isPropagationStopped())
            break e;
          du(i, o, d), a = u;
        }
      else
        for (l = 0; l < n.length; l++) {
          if (o = n[l], u = o.instance, d = o.currentTarget, o = o.listener, u !== a && i.isPropagationStopped())
            break e;
          du(i, o, d), a = u;
        }
    }
  }
  if (Ai)
    throw t = Rl, Ai = !1, Rl = null, t;
}
function ce(t, e) {
  var r = e[$l];
  r === void 0 && (r = e[$l] = /* @__PURE__ */ new Set());
  var n = t + "__bubble";
  r.has(n) || (W4(e, t, 2, !1), r.add(n));
}
function Ya(t, e, r) {
  var n = 0;
  e && (n |= 4), W4(r, t, n, e);
}
var Zn = "_reactListening" + Math.random().toString(36).slice(2);
function wn(t) {
  if (!t[Zn]) {
    t[Zn] = !0, J1.forEach(function(r) {
      r !== "selectionchange" && (Od.has(r) || Ya(r, !1, t), Ya(r, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Zn] || (e[Zn] = !0, Ya("selectionchange", !1, e));
  }
}
function W4(t, e, r, n) {
  switch (N4(e)) {
    case 1:
      var i = Zf;
      break;
    case 4:
      i = Jf;
      break;
    default:
      i = Ds;
  }
  r = i.bind(null, e, r, t), i = void 0, !Dl || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), n ? i !== void 0 ? t.addEventListener(e, r, { capture: !0, passive: i }) : t.addEventListener(e, r, !0) : i !== void 0 ? t.addEventListener(e, r, { passive: i }) : t.addEventListener(e, r, !1);
}
function Ka(t, e, r, n, i) {
  var a = n;
  if (!(e & 1) && !(e & 2) && n !== null)
    e:
      for (; ; ) {
        if (n === null)
          return;
        var l = n.tag;
        if (l === 3 || l === 4) {
          var o = n.stateNode.containerInfo;
          if (o === i || o.nodeType === 8 && o.parentNode === i)
            break;
          if (l === 4)
            for (l = n.return; l !== null; ) {
              var u = l.tag;
              if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i))
                return;
              l = l.return;
            }
          for (; o !== null; ) {
            if (l = F0(o), l === null)
              return;
            if (u = l.tag, u === 5 || u === 6) {
              n = a = l;
              continue e;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
  p4(function() {
    var d = a, h = Ns(r), m = [];
    e: {
      var p = $4.get(t);
      if (p !== void 0) {
        var S = Is, M = t;
        switch (t) {
          case "keypress":
            if (gi(r) === 0)
              break e;
          case "keydown":
          case "keyup":
            S = md;
            break;
          case "focusin":
            M = "focus", S = ja;
            break;
          case "focusout":
            M = "blur", S = ja;
            break;
          case "beforeblur":
          case "afterblur":
            S = ja;
            break;
          case "click":
            if (r.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = rd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = yd;
            break;
          case H4:
          case j4:
          case V4:
            S = ad;
            break;
          case U4:
            S = wd;
            break;
          case "scroll":
            S = ed;
            break;
          case "wheel":
            S = Sd;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = sd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = ru;
        }
        var z = (e & 4) !== 0, A = !z && t === "scroll", y = z ? p !== null ? p + "Capture" : null : p;
        z = [];
        for (var v = d, x; v !== null; ) {
          x = v;
          var E = x.stateNode;
          if (x.tag === 5 && E !== null && (x = E, y !== null && (E = hn(v, y), E != null && z.push(xn(v, E, x)))), A)
            break;
          v = v.return;
        }
        0 < z.length && (p = new S(p, M, null, r, h), m.push({ event: p, listeners: z }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (p = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout", p && r !== _l && (M = r.relatedTarget || r.fromElement) && (F0(M) || M[r0]))
          break e;
        if ((S || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (M = r.relatedTarget || r.toElement, S = d, M = M ? F0(M) : null, M !== null && (A = X0(M), M !== A || M.tag !== 5 && M.tag !== 6) && (M = null)) : (S = null, M = d), S !== M)) {
          if (z = eu, E = "onMouseLeave", y = "onMouseEnter", v = "mouse", (t === "pointerout" || t === "pointerover") && (z = ru, E = "onPointerLeave", y = "onPointerEnter", v = "pointer"), A = S == null ? p : ur(S), x = M == null ? p : ur(M), p = new z(E, v + "leave", S, r, h), p.target = A, p.relatedTarget = x, E = null, F0(h) === d && (z = new z(y, v + "enter", M, r, h), z.target = x, z.relatedTarget = A, E = z), A = E, S && M)
            t: {
              for (z = S, y = M, v = 0, x = z; x; x = er(x))
                v++;
              for (x = 0, E = y; E; E = er(E))
                x++;
              for (; 0 < v - x; )
                z = er(z), v--;
              for (; 0 < x - v; )
                y = er(y), x--;
              for (; v--; ) {
                if (z === y || y !== null && z === y.alternate)
                  break t;
                z = er(z), y = er(y);
              }
              z = null;
            }
          else
            z = null;
          S !== null && hu(m, p, S, z, !1), M !== null && A !== null && hu(m, A, M, z, !0);
        }
      }
      e: {
        if (p = d ? ur(d) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file")
          var k = Ed;
        else if (au(p))
          if (I4)
            k = Pd;
          else {
            k = Ad;
            var C = Nd;
          }
        else
          (S = p.nodeName) && S.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (k = _d);
        if (k && (k = k(t, d))) {
          R4(m, k, r, h);
          break e;
        }
        C && C(t, p, d), t === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && Cl(p, "number", p.value);
      }
      switch (C = d ? ur(d) : window, t) {
        case "focusin":
          (au(C) || C.contentEditable === "true") && (sr = C, Ol = d, nn = null);
          break;
        case "focusout":
          nn = Ol = sr = null;
          break;
        case "mousedown":
          Fl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Fl = !1, cu(m, r, h);
          break;
        case "selectionchange":
          if (Id)
            break;
        case "keydown":
        case "keyup":
          cu(m, r, h);
      }
      var N;
      if (Bs)
        e: {
          switch (t) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        lr ? P4(t, r) && (_ = "onCompositionEnd") : t === "keydown" && r.keyCode === 229 && (_ = "onCompositionStart");
      _ && (_4 && r.locale !== "ko" && (lr || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && lr && (N = A4()) : (p0 = h, Rs = "value" in p0 ? p0.value : p0.textContent, lr = !0)), C = Ii(d, _), 0 < C.length && (_ = new tu(_, t, null, r, h), m.push({ event: _, listeners: C }), N ? _.data = N : (N = D4(r), N !== null && (_.data = N)))), (N = bd ? Md(t, r) : zd(t, r)) && (d = Ii(d, "onBeforeInput"), 0 < d.length && (h = new tu("onBeforeInput", "beforeinput", null, r, h), m.push({ event: h, listeners: d }), h.data = N));
    }
    q4(m, e);
  });
}
function xn(t, e, r) {
  return { instance: t, listener: e, currentTarget: r };
}
function Ii(t, e) {
  for (var r = e + "Capture", n = []; t !== null; ) {
    var i = t, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = hn(t, r), a != null && n.unshift(xn(t, a, i)), a = hn(t, e), a != null && n.push(xn(t, a, i))), t = t.return;
  }
  return n;
}
function er(t) {
  if (t === null)
    return null;
  do
    t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function hu(t, e, r, n, i) {
  for (var a = e._reactName, l = []; r !== null && r !== n; ) {
    var o = r, u = o.alternate, d = o.stateNode;
    if (u !== null && u === n)
      break;
    o.tag === 5 && d !== null && (o = d, i ? (u = hn(r, a), u != null && l.unshift(xn(r, u, o))) : i || (u = hn(r, a), u != null && l.push(xn(r, u, o)))), r = r.return;
  }
  l.length !== 0 && t.push({ event: e, listeners: l });
}
var Fd = /\r\n?/g, Hd = /\u0000|\uFFFD/g;
function mu(t) {
  return (typeof t == "string" ? t : "" + t).replace(Fd, `
`).replace(Hd, "");
}
function Jn(t, e, r) {
  if (e = mu(e), mu(t) !== e && r)
    throw Error(D(425));
}
function Li() {
}
var Hl = null, jl = null;
function Vl(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var Ul = typeof setTimeout == "function" ? setTimeout : void 0, jd = typeof clearTimeout == "function" ? clearTimeout : void 0, pu = typeof Promise == "function" ? Promise : void 0, Vd = typeof queueMicrotask == "function" ? queueMicrotask : typeof pu < "u" ? function(t) {
  return pu.resolve(null).then(t).catch(Ud);
} : Ul;
function Ud(t) {
  setTimeout(function() {
    throw t;
  });
}
function Ga(t, e) {
  var r = e, n = 0;
  do {
    var i = r.nextSibling;
    if (t.removeChild(r), i && i.nodeType === 8)
      if (r = i.data, r === "/$") {
        if (n === 0) {
          t.removeChild(i), vn(e);
          return;
        }
        n--;
      } else
        r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = i;
  } while (r);
  vn(e);
}
function x0(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3)
      break;
    if (e === 8) {
      if (e = t.data, e === "$" || e === "$!" || e === "$?")
        break;
      if (e === "/$")
        return null;
    }
  }
  return t;
}
function vu(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var r = t.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (e === 0)
          return t;
        e--;
      } else
        r === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Br = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + Br, Sn = "__reactProps$" + Br, r0 = "__reactContainer$" + Br, $l = "__reactEvents$" + Br, $d = "__reactListeners$" + Br, qd = "__reactHandles$" + Br;
function F0(t) {
  var e = t[Ot];
  if (e)
    return e;
  for (var r = t.parentNode; r; ) {
    if (e = r[r0] || r[Ot]) {
      if (r = e.alternate, e.child !== null || r !== null && r.child !== null)
        for (t = vu(t); t !== null; ) {
          if (r = t[Ot])
            return r;
          t = vu(t);
        }
      return e;
    }
    t = r, r = t.parentNode;
  }
  return null;
}
function Dn(t) {
  return t = t[Ot] || t[r0], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
}
function ur(t) {
  if (t.tag === 5 || t.tag === 6)
    return t.stateNode;
  throw Error(D(33));
}
function ca(t) {
  return t[Sn] || null;
}
var ql = [], cr = -1;
function _0(t) {
  return { current: t };
}
function fe(t) {
  0 > cr || (t.current = ql[cr], ql[cr] = null, cr--);
}
function ue(t, e) {
  cr++, ql[cr] = t.current, t.current = e;
}
var C0 = {}, $e = _0(C0), rt = _0(!1), $0 = C0;
function zr(t, e) {
  var r = t.type.contextTypes;
  if (!r)
    return C0;
  var n = t.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === e)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in r)
    i[a] = e[a];
  return n && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = i), i;
}
function nt(t) {
  return t = t.childContextTypes, t != null;
}
function Bi() {
  fe(rt), fe($e);
}
function yu(t, e, r) {
  if ($e.current !== C0)
    throw Error(D(168));
  ue($e, e), ue(rt, r);
}
function Y4(t, e, r) {
  var n = t.stateNode;
  if (e = e.childContextTypes, typeof n.getChildContext != "function")
    return r;
  n = n.getChildContext();
  for (var i in n)
    if (!(i in e))
      throw Error(D(108, Nf(t) || "Unknown", i));
  return xe({}, r, n);
}
function Oi(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || C0, $0 = $e.current, ue($e, t), ue(rt, rt.current), !0;
}
function gu(t, e, r) {
  var n = t.stateNode;
  if (!n)
    throw Error(D(169));
  r ? (t = Y4(t, e, $0), n.__reactInternalMemoizedMergedChildContext = t, fe(rt), fe($e), ue($e, t)) : fe(rt), ue(rt, r);
}
var Kt = null, fa = !1, Qa = !1;
function K4(t) {
  Kt === null ? Kt = [t] : Kt.push(t);
}
function Wd(t) {
  fa = !0, K4(t);
}
function P0() {
  if (!Qa && Kt !== null) {
    Qa = !0;
    var t = 0, e = se;
    try {
      var r = Kt;
      for (se = 1; t < r.length; t++) {
        var n = r[t];
        do
          n = n(!0);
        while (n !== null);
      }
      Kt = null, fa = !1;
    } catch (i) {
      throw Kt !== null && (Kt = Kt.slice(t + 1)), w4(As, P0), i;
    } finally {
      se = e, Qa = !1;
    }
  }
  return null;
}
var fr = [], dr = 0, Fi = null, Hi = 0, yt = [], gt = 0, q0 = null, Gt = 1, Qt = "";
function B0(t, e) {
  fr[dr++] = Hi, fr[dr++] = Fi, Fi = t, Hi = e;
}
function G4(t, e, r) {
  yt[gt++] = Gt, yt[gt++] = Qt, yt[gt++] = q0, q0 = t;
  var n = Gt;
  t = Qt;
  var i = 32 - Pt(n) - 1;
  n &= ~(1 << i), r += 1;
  var a = 32 - Pt(e) + i;
  if (30 < a) {
    var l = i - i % 5;
    a = (n & (1 << l) - 1).toString(32), n >>= l, i -= l, Gt = 1 << 32 - Pt(e) + i | r << i | n, Qt = a + t;
  } else
    Gt = 1 << a | r << i | n, Qt = t;
}
function Fs(t) {
  t.return !== null && (B0(t, 1), G4(t, 1, 0));
}
function Hs(t) {
  for (; t === Fi; )
    Fi = fr[--dr], fr[dr] = null, Hi = fr[--dr], fr[dr] = null;
  for (; t === q0; )
    q0 = yt[--gt], yt[gt] = null, Qt = yt[--gt], yt[gt] = null, Gt = yt[--gt], yt[gt] = null;
}
var ut = null, ot = null, he = !1, At = null;
function Q4(t, e) {
  var r = xt(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = e, r.return = t, e = t.deletions, e === null ? (t.deletions = [r], t.flags |= 16) : e.push(r);
}
function wu(t, e) {
  switch (t.tag) {
    case 5:
      var r = t.type;
      return e = e.nodeType !== 1 || r.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, ut = t, ot = x0(e.firstChild), !0) : !1;
    case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, ut = t, ot = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (r = q0 !== null ? { id: Gt, overflow: Qt } : null, t.memoizedState = { dehydrated: e, treeContext: r, retryLane: 1073741824 }, r = xt(18, null, null, 0), r.stateNode = e, r.return = t, t.child = r, ut = t, ot = null, !0) : !1;
    default:
      return !1;
  }
}
function Wl(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Yl(t) {
  if (he) {
    var e = ot;
    if (e) {
      var r = e;
      if (!wu(t, e)) {
        if (Wl(t))
          throw Error(D(418));
        e = x0(r.nextSibling);
        var n = ut;
        e && wu(t, e) ? Q4(n, r) : (t.flags = t.flags & -4097 | 2, he = !1, ut = t);
      }
    } else {
      if (Wl(t))
        throw Error(D(418));
      t.flags = t.flags & -4097 | 2, he = !1, ut = t;
    }
  }
}
function xu(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  ut = t;
}
function ei(t) {
  if (t !== ut)
    return !1;
  if (!he)
    return xu(t), he = !0, !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !Vl(t.type, t.memoizedProps)), e && (e = ot)) {
    if (Wl(t))
      throw X4(), Error(D(418));
    for (; e; )
      Q4(t, e), e = x0(e.nextSibling);
  }
  if (xu(t), t.tag === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
      throw Error(D(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var r = t.data;
          if (r === "/$") {
            if (e === 0) {
              ot = x0(t.nextSibling);
              break e;
            }
            e--;
          } else
            r !== "$" && r !== "$!" && r !== "$?" || e++;
        }
        t = t.nextSibling;
      }
      ot = null;
    }
  } else
    ot = ut ? x0(t.stateNode.nextSibling) : null;
  return !0;
}
function X4() {
  for (var t = ot; t; )
    t = x0(t.nextSibling);
}
function Cr() {
  ot = ut = null, he = !1;
}
function js(t) {
  At === null ? At = [t] : At.push(t);
}
var Yd = l0.ReactCurrentBatchConfig;
function Tt(t, e) {
  if (t && t.defaultProps) {
    e = xe({}, e), t = t.defaultProps;
    for (var r in t)
      e[r] === void 0 && (e[r] = t[r]);
    return e;
  }
  return e;
}
var ji = _0(null), Vi = null, hr = null, Vs = null;
function Us() {
  Vs = hr = Vi = null;
}
function $s(t) {
  var e = ji.current;
  fe(ji), t._currentValue = e;
}
function Kl(t, e, r) {
  for (; t !== null; ) {
    var n = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === r)
      break;
    t = t.return;
  }
}
function Sr(t, e) {
  Vi = t, Vs = hr = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (tt = !0), t.firstContext = null);
}
function bt(t) {
  var e = t._currentValue;
  if (Vs !== t)
    if (t = { context: t, memoizedValue: e, next: null }, hr === null) {
      if (Vi === null)
        throw Error(D(308));
      hr = t, Vi.dependencies = { lanes: 0, firstContext: t };
    } else
      hr = hr.next = t;
  return e;
}
var H0 = null;
function qs(t) {
  H0 === null ? H0 = [t] : H0.push(t);
}
function Z4(t, e, r, n) {
  var i = e.interleaved;
  return i === null ? (r.next = r, qs(e)) : (r.next = i.next, i.next = r), e.interleaved = r, n0(t, n);
}
function n0(t, e) {
  t.lanes |= e;
  var r = t.alternate;
  for (r !== null && (r.lanes |= e), r = t, t = t.return; t !== null; )
    t.childLanes |= e, r = t.alternate, r !== null && (r.childLanes |= e), r = t, t = t.return;
  return r.tag === 3 ? r.stateNode : null;
}
var d0 = !1;
function Ws(t) {
  t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function J4(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
}
function Zt(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function S0(t, e, r) {
  var n = t.updateQueue;
  if (n === null)
    return null;
  if (n = n.shared, ie & 2) {
    var i = n.pending;
    return i === null ? e.next = e : (e.next = i.next, i.next = e), n.pending = e, n0(t, r);
  }
  return i = n.interleaved, i === null ? (e.next = e, qs(n)) : (e.next = i.next, i.next = e), n.interleaved = e, n0(t, r);
}
function wi(t, e, r) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (r & 4194240) !== 0)) {
    var n = e.lanes;
    n &= t.pendingLanes, r |= n, e.lanes = r, _s(t, r);
  }
}
function Su(t, e) {
  var r = t.updateQueue, n = t.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var i = null, a = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var l = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        a === null ? i = a = l : a = a.next = l, r = r.next;
      } while (r !== null);
      a === null ? i = a = e : a = a.next = e;
    } else
      i = a = e;
    r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: n.shared, effects: n.effects }, t.updateQueue = r;
    return;
  }
  t = r.lastBaseUpdate, t === null ? r.firstBaseUpdate = e : t.next = e, r.lastBaseUpdate = e;
}
function Ui(t, e, r, n) {
  var i = t.updateQueue;
  d0 = !1;
  var a = i.firstBaseUpdate, l = i.lastBaseUpdate, o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var u = o, d = u.next;
    u.next = null, l === null ? a = d : l.next = d, l = u;
    var h = t.alternate;
    h !== null && (h = h.updateQueue, o = h.lastBaseUpdate, o !== l && (o === null ? h.firstBaseUpdate = d : o.next = d, h.lastBaseUpdate = u));
  }
  if (a !== null) {
    var m = i.baseState;
    l = 0, h = d = u = null, o = a;
    do {
      var p = o.lane, S = o.eventTime;
      if ((n & p) === p) {
        h !== null && (h = h.next = {
          eventTime: S,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var M = t, z = o;
          switch (p = e, S = r, z.tag) {
            case 1:
              if (M = z.payload, typeof M == "function") {
                m = M.call(S, m, p);
                break e;
              }
              m = M;
              break e;
            case 3:
              M.flags = M.flags & -65537 | 128;
            case 0:
              if (M = z.payload, p = typeof M == "function" ? M.call(S, m, p) : M, p == null)
                break e;
              m = xe({}, m, p);
              break e;
            case 2:
              d0 = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (t.flags |= 64, p = i.effects, p === null ? i.effects = [o] : p.push(o));
      } else
        S = { eventTime: S, lane: p, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, h === null ? (d = h = S, u = m) : h = h.next = S, l |= p;
      if (o = o.next, o === null) {
        if (o = i.shared.pending, o === null)
          break;
        p = o, o = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
      }
    } while (1);
    if (h === null && (u = m), i.baseState = u, i.firstBaseUpdate = d, i.lastBaseUpdate = h, e = i.shared.interleaved, e !== null) {
      i = e;
      do
        l |= i.lane, i = i.next;
      while (i !== e);
    } else
      a === null && (i.shared.lanes = 0);
    Y0 |= l, t.lanes = l, t.memoizedState = m;
  }
}
function ku(t, e, r) {
  if (t = e.effects, e.effects = null, t !== null)
    for (e = 0; e < t.length; e++) {
      var n = t[e], i = n.callback;
      if (i !== null) {
        if (n.callback = null, n = r, typeof i != "function")
          throw Error(D(191, i));
        i.call(n);
      }
    }
}
var ec = new Z1.Component().refs;
function Gl(t, e, r, n) {
  e = t.memoizedState, r = r(n, e), r = r == null ? e : xe({}, e, r), t.memoizedState = r, t.lanes === 0 && (t.updateQueue.baseState = r);
}
var da = { isMounted: function(t) {
  return (t = t._reactInternals) ? X0(t) === t : !1;
}, enqueueSetState: function(t, e, r) {
  t = t._reactInternals;
  var n = Ke(), i = b0(t), a = Zt(n, i);
  a.payload = e, r != null && (a.callback = r), e = S0(t, a, i), e !== null && (Dt(e, t, i, n), wi(e, t, i));
}, enqueueReplaceState: function(t, e, r) {
  t = t._reactInternals;
  var n = Ke(), i = b0(t), a = Zt(n, i);
  a.tag = 1, a.payload = e, r != null && (a.callback = r), e = S0(t, a, i), e !== null && (Dt(e, t, i, n), wi(e, t, i));
}, enqueueForceUpdate: function(t, e) {
  t = t._reactInternals;
  var r = Ke(), n = b0(t), i = Zt(r, n);
  i.tag = 2, e != null && (i.callback = e), e = S0(t, i, n), e !== null && (Dt(e, t, n, r), wi(e, t, n));
} };
function bu(t, e, r, n, i, a, l) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, a, l) : e.prototype && e.prototype.isPureReactComponent ? !gn(r, n) || !gn(i, a) : !0;
}
function tc(t, e, r) {
  var n = !1, i = C0, a = e.contextType;
  return typeof a == "object" && a !== null ? a = bt(a) : (i = nt(e) ? $0 : $e.current, n = e.contextTypes, a = (n = n != null) ? zr(t, i) : C0), e = new e(r, a), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = da, t.stateNode = e, e._reactInternals = t, n && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = a), e;
}
function Mu(t, e, r, n) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(r, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(r, n), e.state !== t && da.enqueueReplaceState(e, e.state, null);
}
function Ql(t, e, r, n) {
  var i = t.stateNode;
  i.props = r, i.state = t.memoizedState, i.refs = ec, Ws(t);
  var a = e.contextType;
  typeof a == "object" && a !== null ? i.context = bt(a) : (a = nt(e) ? $0 : $e.current, i.context = zr(t, a)), i.state = t.memoizedState, a = e.getDerivedStateFromProps, typeof a == "function" && (Gl(t, e, a, r), i.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && da.enqueueReplaceState(i, i.state, null), Ui(t, r, i, n), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function qr(t, e, r) {
  if (t = r.ref, t !== null && typeof t != "function" && typeof t != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1)
          throw Error(D(309));
        var n = r.stateNode;
      }
      if (!n)
        throw Error(D(147, t));
      var i = n, a = "" + t;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === a ? e.ref : (e = function(l) {
        var o = i.refs;
        o === ec && (o = i.refs = {}), l === null ? delete o[a] : o[a] = l;
      }, e._stringRef = a, e);
    }
    if (typeof t != "string")
      throw Error(D(284));
    if (!r._owner)
      throw Error(D(290, t));
  }
  return t;
}
function ti(t, e) {
  throw t = Object.prototype.toString.call(e), Error(D(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
}
function zu(t) {
  var e = t._init;
  return e(t._payload);
}
function rc(t) {
  function e(y, v) {
    if (t) {
      var x = y.deletions;
      x === null ? (y.deletions = [v], y.flags |= 16) : x.push(v);
    }
  }
  function r(y, v) {
    if (!t)
      return null;
    for (; v !== null; )
      e(y, v), v = v.sibling;
    return null;
  }
  function n(y, v) {
    for (y = /* @__PURE__ */ new Map(); v !== null; )
      v.key !== null ? y.set(v.key, v) : y.set(v.index, v), v = v.sibling;
    return y;
  }
  function i(y, v) {
    return y = M0(y, v), y.index = 0, y.sibling = null, y;
  }
  function a(y, v, x) {
    return y.index = x, t ? (x = y.alternate, x !== null ? (x = x.index, x < v ? (y.flags |= 2, v) : x) : (y.flags |= 2, v)) : (y.flags |= 1048576, v);
  }
  function l(y) {
    return t && y.alternate === null && (y.flags |= 2), y;
  }
  function o(y, v, x, E) {
    return v === null || v.tag !== 6 ? (v = nl(x, y.mode, E), v.return = y, v) : (v = i(v, x), v.return = y, v);
  }
  function u(y, v, x, E) {
    var k = x.type;
    return k === ar ? h(y, v, x.props.children, E, x.key) : v !== null && (v.elementType === k || typeof k == "object" && k !== null && k.$$typeof === f0 && zu(k) === v.type) ? (E = i(v, x.props), E.ref = qr(y, v, x), E.return = y, E) : (E = zi(x.type, x.key, x.props, null, y.mode, E), E.ref = qr(y, v, x), E.return = y, E);
  }
  function d(y, v, x, E) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== x.containerInfo || v.stateNode.implementation !== x.implementation ? (v = il(x, y.mode, E), v.return = y, v) : (v = i(v, x.children || []), v.return = y, v);
  }
  function h(y, v, x, E, k) {
    return v === null || v.tag !== 7 ? (v = U0(x, y.mode, E, k), v.return = y, v) : (v = i(v, x), v.return = y, v);
  }
  function m(y, v, x) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return v = nl("" + v, y.mode, x), v.return = y, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case $n:
          return x = zi(v.type, v.key, v.props, null, y.mode, x), x.ref = qr(y, null, v), x.return = y, x;
        case ir:
          return v = il(v, y.mode, x), v.return = y, v;
        case f0:
          var E = v._init;
          return m(y, E(v._payload), x);
      }
      if (Gr(v) || Hr(v))
        return v = U0(v, y.mode, x, null), v.return = y, v;
      ti(y, v);
    }
    return null;
  }
  function p(y, v, x, E) {
    var k = v !== null ? v.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return k !== null ? null : o(y, v, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case $n:
          return x.key === k ? u(y, v, x, E) : null;
        case ir:
          return x.key === k ? d(y, v, x, E) : null;
        case f0:
          return k = x._init, p(
            y,
            v,
            k(x._payload),
            E
          );
      }
      if (Gr(x) || Hr(x))
        return k !== null ? null : h(y, v, x, E, null);
      ti(y, x);
    }
    return null;
  }
  function S(y, v, x, E, k) {
    if (typeof E == "string" && E !== "" || typeof E == "number")
      return y = y.get(x) || null, o(v, y, "" + E, k);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case $n:
          return y = y.get(E.key === null ? x : E.key) || null, u(v, y, E, k);
        case ir:
          return y = y.get(E.key === null ? x : E.key) || null, d(v, y, E, k);
        case f0:
          var C = E._init;
          return S(y, v, x, C(E._payload), k);
      }
      if (Gr(E) || Hr(E))
        return y = y.get(x) || null, h(v, y, E, k, null);
      ti(v, E);
    }
    return null;
  }
  function M(y, v, x, E) {
    for (var k = null, C = null, N = v, _ = v = 0, F = null; N !== null && _ < x.length; _++) {
      N.index > _ ? (F = N, N = null) : F = N.sibling;
      var U = p(y, N, x[_], E);
      if (U === null) {
        N === null && (N = F);
        break;
      }
      t && N && U.alternate === null && e(y, N), v = a(U, v, _), C === null ? k = U : C.sibling = U, C = U, N = F;
    }
    if (_ === x.length)
      return r(y, N), he && B0(y, _), k;
    if (N === null) {
      for (; _ < x.length; _++)
        N = m(y, x[_], E), N !== null && (v = a(N, v, _), C === null ? k = N : C.sibling = N, C = N);
      return he && B0(y, _), k;
    }
    for (N = n(y, N); _ < x.length; _++)
      F = S(N, y, _, x[_], E), F !== null && (t && F.alternate !== null && N.delete(F.key === null ? _ : F.key), v = a(F, v, _), C === null ? k = F : C.sibling = F, C = F);
    return t && N.forEach(function(ee) {
      return e(y, ee);
    }), he && B0(y, _), k;
  }
  function z(y, v, x, E) {
    var k = Hr(x);
    if (typeof k != "function")
      throw Error(D(150));
    if (x = k.call(x), x == null)
      throw Error(D(151));
    for (var C = k = null, N = v, _ = v = 0, F = null, U = x.next(); N !== null && !U.done; _++, U = x.next()) {
      N.index > _ ? (F = N, N = null) : F = N.sibling;
      var ee = p(y, N, U.value, E);
      if (ee === null) {
        N === null && (N = F);
        break;
      }
      t && N && ee.alternate === null && e(y, N), v = a(ee, v, _), C === null ? k = ee : C.sibling = ee, C = ee, N = F;
    }
    if (U.done)
      return r(
        y,
        N
      ), he && B0(y, _), k;
    if (N === null) {
      for (; !U.done; _++, U = x.next())
        U = m(y, U.value, E), U !== null && (v = a(U, v, _), C === null ? k = U : C.sibling = U, C = U);
      return he && B0(y, _), k;
    }
    for (N = n(y, N); !U.done; _++, U = x.next())
      U = S(N, y, _, U.value, E), U !== null && (t && U.alternate !== null && N.delete(U.key === null ? _ : U.key), v = a(U, v, _), C === null ? k = U : C.sibling = U, C = U);
    return t && N.forEach(function(re) {
      return e(y, re);
    }), he && B0(y, _), k;
  }
  function A(y, v, x, E) {
    if (typeof x == "object" && x !== null && x.type === ar && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case $n:
          e: {
            for (var k = x.key, C = v; C !== null; ) {
              if (C.key === k) {
                if (k = x.type, k === ar) {
                  if (C.tag === 7) {
                    r(y, C.sibling), v = i(C, x.props.children), v.return = y, y = v;
                    break e;
                  }
                } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === f0 && zu(k) === C.type) {
                  r(y, C.sibling), v = i(C, x.props), v.ref = qr(y, C, x), v.return = y, y = v;
                  break e;
                }
                r(y, C);
                break;
              } else
                e(y, C);
              C = C.sibling;
            }
            x.type === ar ? (v = U0(x.props.children, y.mode, E, x.key), v.return = y, y = v) : (E = zi(x.type, x.key, x.props, null, y.mode, E), E.ref = qr(y, v, x), E.return = y, y = E);
          }
          return l(y);
        case ir:
          e: {
            for (C = x.key; v !== null; ) {
              if (v.key === C)
                if (v.tag === 4 && v.stateNode.containerInfo === x.containerInfo && v.stateNode.implementation === x.implementation) {
                  r(y, v.sibling), v = i(v, x.children || []), v.return = y, y = v;
                  break e;
                } else {
                  r(y, v);
                  break;
                }
              else
                e(y, v);
              v = v.sibling;
            }
            v = il(x, y.mode, E), v.return = y, y = v;
          }
          return l(y);
        case f0:
          return C = x._init, A(y, v, C(x._payload), E);
      }
      if (Gr(x))
        return M(y, v, x, E);
      if (Hr(x))
        return z(y, v, x, E);
      ti(y, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, v !== null && v.tag === 6 ? (r(y, v.sibling), v = i(v, x), v.return = y, y = v) : (r(y, v), v = nl(x, y.mode, E), v.return = y, y = v), l(y)) : r(y, v);
  }
  return A;
}
var Tr = rc(!0), nc = rc(!1), Rn = {}, Ht = _0(Rn), kn = _0(Rn), bn = _0(Rn);
function j0(t) {
  if (t === Rn)
    throw Error(D(174));
  return t;
}
function Ys(t, e) {
  switch (ue(bn, e), ue(kn, t), ue(Ht, Rn), t = e.nodeType, t) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : El(null, "");
      break;
    default:
      t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = El(e, t);
  }
  fe(Ht), ue(Ht, e);
}
function Er() {
  fe(Ht), fe(kn), fe(bn);
}
function ic(t) {
  j0(bn.current);
  var e = j0(Ht.current), r = El(e, t.type);
  e !== r && (ue(kn, t), ue(Ht, r));
}
function Ks(t) {
  kn.current === t && (fe(Ht), fe(kn));
}
var ve = _0(0);
function $i(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var r = e.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!"))
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128)
        return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === t)
      break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t)
        return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
var Xa = [];
function Gs() {
  for (var t = 0; t < Xa.length; t++)
    Xa[t]._workInProgressVersionPrimary = null;
  Xa.length = 0;
}
var xi = l0.ReactCurrentDispatcher, Za = l0.ReactCurrentBatchConfig, W0 = 0, we = null, _e = null, De = null, qi = !1, an = !1, Mn = 0, Kd = 0;
function je() {
  throw Error(D(321));
}
function Qs(t, e) {
  if (e === null)
    return !1;
  for (var r = 0; r < e.length && r < t.length; r++)
    if (!Rt(t[r], e[r]))
      return !1;
  return !0;
}
function Xs(t, e, r, n, i, a) {
  if (W0 = a, we = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, xi.current = t === null || t.memoizedState === null ? Zd : Jd, t = r(n, i), an) {
    a = 0;
    do {
      if (an = !1, Mn = 0, 25 <= a)
        throw Error(D(301));
      a += 1, De = _e = null, e.updateQueue = null, xi.current = e5, t = r(n, i);
    } while (an);
  }
  if (xi.current = Wi, e = _e !== null && _e.next !== null, W0 = 0, De = _e = we = null, qi = !1, e)
    throw Error(D(300));
  return t;
}
function Zs() {
  var t = Mn !== 0;
  return Mn = 0, t;
}
function Lt() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? we.memoizedState = De = t : De = De.next = t, De;
}
function Mt() {
  if (_e === null) {
    var t = we.alternate;
    t = t !== null ? t.memoizedState : null;
  } else
    t = _e.next;
  var e = De === null ? we.memoizedState : De.next;
  if (e !== null)
    De = e, _e = t;
  else {
    if (t === null)
      throw Error(D(310));
    _e = t, t = { memoizedState: _e.memoizedState, baseState: _e.baseState, baseQueue: _e.baseQueue, queue: _e.queue, next: null }, De === null ? we.memoizedState = De = t : De = De.next = t;
  }
  return De;
}
function zn(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Ja(t) {
  var e = Mt(), r = e.queue;
  if (r === null)
    throw Error(D(311));
  r.lastRenderedReducer = t;
  var n = _e, i = n.baseQueue, a = r.pending;
  if (a !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = a.next, a.next = l;
    }
    n.baseQueue = i = a, r.pending = null;
  }
  if (i !== null) {
    a = i.next, n = n.baseState;
    var o = l = null, u = null, d = a;
    do {
      var h = d.lane;
      if ((W0 & h) === h)
        u !== null && (u = u.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), n = d.hasEagerState ? d.eagerState : t(n, d.action);
      else {
        var m = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        u === null ? (o = u = m, l = n) : u = u.next = m, we.lanes |= h, Y0 |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    u === null ? l = n : u.next = o, Rt(n, e.memoizedState) || (tt = !0), e.memoizedState = n, e.baseState = l, e.baseQueue = u, r.lastRenderedState = n;
  }
  if (t = r.interleaved, t !== null) {
    i = t;
    do
      a = i.lane, we.lanes |= a, Y0 |= a, i = i.next;
    while (i !== t);
  } else
    i === null && (r.lanes = 0);
  return [e.memoizedState, r.dispatch];
}
function el(t) {
  var e = Mt(), r = e.queue;
  if (r === null)
    throw Error(D(311));
  r.lastRenderedReducer = t;
  var n = r.dispatch, i = r.pending, a = e.memoizedState;
  if (i !== null) {
    r.pending = null;
    var l = i = i.next;
    do
      a = t(a, l.action), l = l.next;
    while (l !== i);
    Rt(a, e.memoizedState) || (tt = !0), e.memoizedState = a, e.baseQueue === null && (e.baseState = a), r.lastRenderedState = a;
  }
  return [a, n];
}
function ac() {
}
function lc(t, e) {
  var r = we, n = Mt(), i = e(), a = !Rt(n.memoizedState, i);
  if (a && (n.memoizedState = i, tt = !0), n = n.queue, Js(uc.bind(null, r, n, t), [t]), n.getSnapshot !== e || a || De !== null && De.memoizedState.tag & 1) {
    if (r.flags |= 2048, Cn(9, oc.bind(null, r, n, i, e), void 0, null), Re === null)
      throw Error(D(349));
    W0 & 30 || sc(r, e, i);
  }
  return i;
}
function sc(t, e, r) {
  t.flags |= 16384, t = { getSnapshot: e, value: r }, e = we.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, we.updateQueue = e, e.stores = [t]) : (r = e.stores, r === null ? e.stores = [t] : r.push(t));
}
function oc(t, e, r, n) {
  e.value = r, e.getSnapshot = n, cc(e) && fc(t);
}
function uc(t, e, r) {
  return r(function() {
    cc(e) && fc(t);
  });
}
function cc(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var r = e();
    return !Rt(t, r);
  } catch {
    return !0;
  }
}
function fc(t) {
  var e = n0(t, 1);
  e !== null && Dt(e, t, 1, -1);
}
function Cu(t) {
  var e = Lt();
  return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: zn, lastRenderedState: t }, e.queue = t, t = t.dispatch = Xd.bind(null, we, t), [e.memoizedState, t];
}
function Cn(t, e, r, n) {
  return t = { tag: t, create: e, destroy: r, deps: n, next: null }, e = we.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, we.updateQueue = e, e.lastEffect = t.next = t) : (r = e.lastEffect, r === null ? e.lastEffect = t.next = t : (n = r.next, r.next = t, t.next = n, e.lastEffect = t)), t;
}
function dc() {
  return Mt().memoizedState;
}
function Si(t, e, r, n) {
  var i = Lt();
  we.flags |= t, i.memoizedState = Cn(1 | e, r, void 0, n === void 0 ? null : n);
}
function ha(t, e, r, n) {
  var i = Mt();
  n = n === void 0 ? null : n;
  var a = void 0;
  if (_e !== null) {
    var l = _e.memoizedState;
    if (a = l.destroy, n !== null && Qs(n, l.deps)) {
      i.memoizedState = Cn(e, r, a, n);
      return;
    }
  }
  we.flags |= t, i.memoizedState = Cn(1 | e, r, a, n);
}
function Tu(t, e) {
  return Si(8390656, 8, t, e);
}
function Js(t, e) {
  return ha(2048, 8, t, e);
}
function hc(t, e) {
  return ha(4, 2, t, e);
}
function mc(t, e) {
  return ha(4, 4, t, e);
}
function pc(t, e) {
  if (typeof e == "function")
    return t = t(), e(t), function() {
      e(null);
    };
  if (e != null)
    return t = t(), e.current = t, function() {
      e.current = null;
    };
}
function vc(t, e, r) {
  return r = r != null ? r.concat([t]) : null, ha(4, 4, pc.bind(null, e, t), r);
}
function eo() {
}
function yc(t, e) {
  var r = Mt();
  e = e === void 0 ? null : e;
  var n = r.memoizedState;
  return n !== null && e !== null && Qs(e, n[1]) ? n[0] : (r.memoizedState = [t, e], t);
}
function gc(t, e) {
  var r = Mt();
  e = e === void 0 ? null : e;
  var n = r.memoizedState;
  return n !== null && e !== null && Qs(e, n[1]) ? n[0] : (t = t(), r.memoizedState = [t, e], t);
}
function wc(t, e, r) {
  return W0 & 21 ? (Rt(r, e) || (r = k4(), we.lanes |= r, Y0 |= r, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, tt = !0), t.memoizedState = r);
}
function Gd(t, e) {
  var r = se;
  se = r !== 0 && 4 > r ? r : 4, t(!0);
  var n = Za.transition;
  Za.transition = {};
  try {
    t(!1), e();
  } finally {
    se = r, Za.transition = n;
  }
}
function xc() {
  return Mt().memoizedState;
}
function Qd(t, e, r) {
  var n = b0(t);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, Sc(t))
    kc(e, r);
  else if (r = Z4(t, e, r, n), r !== null) {
    var i = Ke();
    Dt(r, t, n, i), bc(r, e, n);
  }
}
function Xd(t, e, r) {
  var n = b0(t), i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Sc(t))
    kc(e, i);
  else {
    var a = t.alternate;
    if (t.lanes === 0 && (a === null || a.lanes === 0) && (a = e.lastRenderedReducer, a !== null))
      try {
        var l = e.lastRenderedState, o = a(l, r);
        if (i.hasEagerState = !0, i.eagerState = o, Rt(o, l)) {
          var u = e.interleaved;
          u === null ? (i.next = i, qs(e)) : (i.next = u.next, u.next = i), e.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    r = Z4(t, e, i, n), r !== null && (i = Ke(), Dt(r, t, n, i), bc(r, e, n));
  }
}
function Sc(t) {
  var e = t.alternate;
  return t === we || e !== null && e === we;
}
function kc(t, e) {
  an = qi = !0;
  var r = t.pending;
  r === null ? e.next = e : (e.next = r.next, r.next = e), t.pending = e;
}
function bc(t, e, r) {
  if (r & 4194240) {
    var n = e.lanes;
    n &= t.pendingLanes, r |= n, e.lanes = r, _s(t, r);
  }
}
var Wi = { readContext: bt, useCallback: je, useContext: je, useEffect: je, useImperativeHandle: je, useInsertionEffect: je, useLayoutEffect: je, useMemo: je, useReducer: je, useRef: je, useState: je, useDebugValue: je, useDeferredValue: je, useTransition: je, useMutableSource: je, useSyncExternalStore: je, useId: je, unstable_isNewReconciler: !1 }, Zd = { readContext: bt, useCallback: function(t, e) {
  return Lt().memoizedState = [t, e === void 0 ? null : e], t;
}, useContext: bt, useEffect: Tu, useImperativeHandle: function(t, e, r) {
  return r = r != null ? r.concat([t]) : null, Si(
    4194308,
    4,
    pc.bind(null, e, t),
    r
  );
}, useLayoutEffect: function(t, e) {
  return Si(4194308, 4, t, e);
}, useInsertionEffect: function(t, e) {
  return Si(4, 2, t, e);
}, useMemo: function(t, e) {
  var r = Lt();
  return e = e === void 0 ? null : e, t = t(), r.memoizedState = [t, e], t;
}, useReducer: function(t, e, r) {
  var n = Lt();
  return e = r !== void 0 ? r(e) : e, n.memoizedState = n.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, n.queue = t, t = t.dispatch = Qd.bind(null, we, t), [n.memoizedState, t];
}, useRef: function(t) {
  var e = Lt();
  return t = { current: t }, e.memoizedState = t;
}, useState: Cu, useDebugValue: eo, useDeferredValue: function(t) {
  return Lt().memoizedState = t;
}, useTransition: function() {
  var t = Cu(!1), e = t[0];
  return t = Gd.bind(null, t[1]), Lt().memoizedState = t, [e, t];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t, e, r) {
  var n = we, i = Lt();
  if (he) {
    if (r === void 0)
      throw Error(D(407));
    r = r();
  } else {
    if (r = e(), Re === null)
      throw Error(D(349));
    W0 & 30 || sc(n, e, r);
  }
  i.memoizedState = r;
  var a = { value: r, getSnapshot: e };
  return i.queue = a, Tu(uc.bind(
    null,
    n,
    a,
    t
  ), [t]), n.flags |= 2048, Cn(9, oc.bind(null, n, a, r, e), void 0, null), r;
}, useId: function() {
  var t = Lt(), e = Re.identifierPrefix;
  if (he) {
    var r = Qt, n = Gt;
    r = (n & ~(1 << 32 - Pt(n) - 1)).toString(32) + r, e = ":" + e + "R" + r, r = Mn++, 0 < r && (e += "H" + r.toString(32)), e += ":";
  } else
    r = Kd++, e = ":" + e + "r" + r.toString(32) + ":";
  return t.memoizedState = e;
}, unstable_isNewReconciler: !1 }, Jd = {
  readContext: bt,
  useCallback: yc,
  useContext: bt,
  useEffect: Js,
  useImperativeHandle: vc,
  useInsertionEffect: hc,
  useLayoutEffect: mc,
  useMemo: gc,
  useReducer: Ja,
  useRef: dc,
  useState: function() {
    return Ja(zn);
  },
  useDebugValue: eo,
  useDeferredValue: function(t) {
    var e = Mt();
    return wc(e, _e.memoizedState, t);
  },
  useTransition: function() {
    var t = Ja(zn)[0], e = Mt().memoizedState;
    return [t, e];
  },
  useMutableSource: ac,
  useSyncExternalStore: lc,
  useId: xc,
  unstable_isNewReconciler: !1
}, e5 = { readContext: bt, useCallback: yc, useContext: bt, useEffect: Js, useImperativeHandle: vc, useInsertionEffect: hc, useLayoutEffect: mc, useMemo: gc, useReducer: el, useRef: dc, useState: function() {
  return el(zn);
}, useDebugValue: eo, useDeferredValue: function(t) {
  var e = Mt();
  return _e === null ? e.memoizedState = t : wc(e, _e.memoizedState, t);
}, useTransition: function() {
  var t = el(zn)[0], e = Mt().memoizedState;
  return [t, e];
}, useMutableSource: ac, useSyncExternalStore: lc, useId: xc, unstable_isNewReconciler: !1 };
function Nr(t, e) {
  try {
    var r = "", n = e;
    do
      r += Ef(n), n = n.return;
    while (n);
    var i = r;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function tl(t, e, r) {
  return { value: t, source: null, stack: r ?? null, digest: e ?? null };
}
function Xl(t, e) {
  try {
    console.error(e.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var t5 = typeof WeakMap == "function" ? WeakMap : Map;
function Mc(t, e, r) {
  r = Zt(-1, r), r.tag = 3, r.payload = { element: null };
  var n = e.value;
  return r.callback = function() {
    Ki || (Ki = !0, ss = n), Xl(t, e);
  }, r;
}
function zc(t, e, r) {
  r = Zt(-1, r), r.tag = 3;
  var n = t.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = e.value;
    r.payload = function() {
      return n(i);
    }, r.callback = function() {
      Xl(t, e);
    };
  }
  var a = t.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (r.callback = function() {
    Xl(t, e), typeof n != "function" && (k0 === null ? k0 = /* @__PURE__ */ new Set([this]) : k0.add(this));
    var l = e.stack;
    this.componentDidCatch(e.value, { componentStack: l !== null ? l : "" });
  }), r;
}
function Eu(t, e, r) {
  var n = t.pingCache;
  if (n === null) {
    n = t.pingCache = new t5();
    var i = /* @__PURE__ */ new Set();
    n.set(e, i);
  } else
    i = n.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(e, i));
  i.has(r) || (i.add(r), t = p5.bind(null, t, e, r), e.then(t, t));
}
function Nu(t) {
  do {
    var e;
    if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e)
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Au(t, e, r, n, i) {
  return t.mode & 1 ? (t.flags |= 65536, t.lanes = i, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (e = Zt(-1, 1), e.tag = 2, S0(r, e, 1))), r.lanes |= 1), t);
}
var r5 = l0.ReactCurrentOwner, tt = !1;
function We(t, e, r, n) {
  e.child = t === null ? nc(e, null, r, n) : Tr(e, t.child, r, n);
}
function _u(t, e, r, n, i) {
  r = r.render;
  var a = e.ref;
  return Sr(e, i), n = Xs(t, e, r, n, a, i), r = Zs(), t !== null && !tt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, i0(t, e, i)) : (he && r && Fs(e), e.flags |= 1, We(t, e, n, i), e.child);
}
function Pu(t, e, r, n, i) {
  if (t === null) {
    var a = r.type;
    return typeof a == "function" && !oo(a) && a.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (e.tag = 15, e.type = a, Cc(t, e, a, n, i)) : (t = zi(r.type, null, n, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (a = t.child, !(t.lanes & i)) {
    var l = a.memoizedProps;
    if (r = r.compare, r = r !== null ? r : gn, r(l, n) && t.ref === e.ref)
      return i0(t, e, i);
  }
  return e.flags |= 1, t = M0(a, n), t.ref = e.ref, t.return = e, e.child = t;
}
function Cc(t, e, r, n, i) {
  if (t !== null) {
    var a = t.memoizedProps;
    if (gn(a, n) && t.ref === e.ref)
      if (tt = !1, e.pendingProps = n = a, (t.lanes & i) !== 0)
        t.flags & 131072 && (tt = !0);
      else
        return e.lanes = t.lanes, i0(t, e, i);
  }
  return Zl(t, e, r, n, i);
}
function Tc(t, e, r) {
  var n = e.pendingProps, i = n.children, a = t !== null ? t.memoizedState : null;
  if (n.mode === "hidden")
    if (!(e.mode & 1))
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ue(pr, st), st |= r;
    else {
      if (!(r & 1073741824))
        return t = a !== null ? a.baseLanes | r : r, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, ue(pr, st), st |= t, null;
      e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = a !== null ? a.baseLanes : r, ue(pr, st), st |= n;
    }
  else
    a !== null ? (n = a.baseLanes | r, e.memoizedState = null) : n = r, ue(pr, st), st |= n;
  return We(t, e, i, r), e.child;
}
function Ec(t, e) {
  var r = e.ref;
  (t === null && r !== null || t !== null && t.ref !== r) && (e.flags |= 512, e.flags |= 2097152);
}
function Zl(t, e, r, n, i) {
  var a = nt(r) ? $0 : $e.current;
  return a = zr(e, a), Sr(e, i), r = Xs(t, e, r, n, a, i), n = Zs(), t !== null && !tt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, i0(t, e, i)) : (he && n && Fs(e), e.flags |= 1, We(t, e, r, i), e.child);
}
function Du(t, e, r, n, i) {
  if (nt(r)) {
    var a = !0;
    Oi(e);
  } else
    a = !1;
  if (Sr(e, i), e.stateNode === null)
    ki(t, e), tc(e, r, n), Ql(e, r, n, i), n = !0;
  else if (t === null) {
    var l = e.stateNode, o = e.memoizedProps;
    l.props = o;
    var u = l.context, d = r.contextType;
    typeof d == "object" && d !== null ? d = bt(d) : (d = nt(r) ? $0 : $e.current, d = zr(e, d));
    var h = r.getDerivedStateFromProps, m = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== n || u !== d) && Mu(e, l, n, d), d0 = !1;
    var p = e.memoizedState;
    l.state = p, Ui(e, n, l, i), u = e.memoizedState, o !== n || p !== u || rt.current || d0 ? (typeof h == "function" && (Gl(e, r, h, n), u = e.memoizedState), (o = d0 || bu(e, r, o, n, p, u, d)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = u), l.props = n, l.state = u, l.context = d, n = o) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
  } else {
    l = e.stateNode, J4(t, e), o = e.memoizedProps, d = e.type === e.elementType ? o : Tt(e.type, o), l.props = d, m = e.pendingProps, p = l.context, u = r.contextType, typeof u == "object" && u !== null ? u = bt(u) : (u = nt(r) ? $0 : $e.current, u = zr(e, u));
    var S = r.getDerivedStateFromProps;
    (h = typeof S == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== m || p !== u) && Mu(e, l, n, u), d0 = !1, p = e.memoizedState, l.state = p, Ui(e, n, l, i);
    var M = e.memoizedState;
    o !== m || p !== M || rt.current || d0 ? (typeof S == "function" && (Gl(e, r, S, n), M = e.memoizedState), (d = d0 || bu(e, r, d, n, p, M, u) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(n, M, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(n, M, u)), typeof l.componentDidUpdate == "function" && (e.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || o === t.memoizedProps && p === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && p === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = M), l.props = n, l.state = M, l.context = u, n = d) : (typeof l.componentDidUpdate != "function" || o === t.memoizedProps && p === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && p === t.memoizedState || (e.flags |= 1024), n = !1);
  }
  return Jl(t, e, r, n, a, i);
}
function Jl(t, e, r, n, i, a) {
  Ec(t, e);
  var l = (e.flags & 128) !== 0;
  if (!n && !l)
    return i && gu(e, r, !1), i0(t, e, a);
  n = e.stateNode, r5.current = e;
  var o = l && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return e.flags |= 1, t !== null && l ? (e.child = Tr(e, t.child, null, a), e.child = Tr(e, null, o, a)) : We(t, e, o, a), e.memoizedState = n.state, i && gu(e, r, !0), e.child;
}
function Nc(t) {
  var e = t.stateNode;
  e.pendingContext ? yu(t, e.pendingContext, e.pendingContext !== e.context) : e.context && yu(t, e.context, !1), Ys(t, e.containerInfo);
}
function Ru(t, e, r, n, i) {
  return Cr(), js(i), e.flags |= 256, We(t, e, r, n), e.child;
}
var es = { dehydrated: null, treeContext: null, retryLane: 0 };
function ts(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Ac(t, e, r) {
  var n = e.pendingProps, i = ve.current, a = !1, l = (e.flags & 128) !== 0, o;
  if ((o = l) || (o = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0), o ? (a = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1), ue(ve, i & 1), t === null)
    return Yl(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (l = n.children, t = n.fallback, a ? (n = e.mode, a = e.child, l = { mode: "hidden", children: l }, !(n & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = l) : a = va(l, n, 0, null), t = U0(t, n, r, null), a.return = e, t.return = e, a.sibling = t, e.child = a, e.child.memoizedState = ts(r), e.memoizedState = es, t) : to(e, l));
  if (i = t.memoizedState, i !== null && (o = i.dehydrated, o !== null))
    return n5(t, e, l, n, o, i, r);
  if (a) {
    a = n.fallback, l = e.mode, i = t.child, o = i.sibling;
    var u = { mode: "hidden", children: n.children };
    return !(l & 1) && e.child !== i ? (n = e.child, n.childLanes = 0, n.pendingProps = u, e.deletions = null) : (n = M0(i, u), n.subtreeFlags = i.subtreeFlags & 14680064), o !== null ? a = M0(o, a) : (a = U0(a, l, r, null), a.flags |= 2), a.return = e, n.return = e, n.sibling = a, e.child = n, n = a, a = e.child, l = t.child.memoizedState, l = l === null ? ts(r) : { baseLanes: l.baseLanes | r, cachePool: null, transitions: l.transitions }, a.memoizedState = l, a.childLanes = t.childLanes & ~r, e.memoizedState = es, n;
  }
  return a = t.child, t = a.sibling, n = M0(a, { mode: "visible", children: n.children }), !(e.mode & 1) && (n.lanes = r), n.return = e, n.sibling = null, t !== null && (r = e.deletions, r === null ? (e.deletions = [t], e.flags |= 16) : r.push(t)), e.child = n, e.memoizedState = null, n;
}
function to(t, e) {
  return e = va({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e;
}
function ri(t, e, r, n) {
  return n !== null && js(n), Tr(e, t.child, null, r), t = to(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
}
function n5(t, e, r, n, i, a, l) {
  if (r)
    return e.flags & 256 ? (e.flags &= -257, n = tl(Error(D(422))), ri(t, e, l, n)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (a = n.fallback, i = e.mode, n = va({ mode: "visible", children: n.children }, i, 0, null), a = U0(a, i, l, null), a.flags |= 2, n.return = e, a.return = e, n.sibling = a, e.child = n, e.mode & 1 && Tr(e, t.child, null, l), e.child.memoizedState = ts(l), e.memoizedState = es, a);
  if (!(e.mode & 1))
    return ri(t, e, l, null);
  if (i.data === "$!") {
    if (n = i.nextSibling && i.nextSibling.dataset, n)
      var o = n.dgst;
    return n = o, a = Error(D(419)), n = tl(a, n, void 0), ri(t, e, l, n);
  }
  if (o = (l & t.childLanes) !== 0, tt || o) {
    if (n = Re, n !== null) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (n.suspendedLanes | l) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, n0(t, i), Dt(n, t, i, -1));
    }
    return so(), n = tl(Error(D(421))), ri(t, e, l, n);
  }
  return i.data === "$?" ? (e.flags |= 128, e.child = t.child, e = v5.bind(null, t), i._reactRetry = e, null) : (t = a.treeContext, ot = x0(i.nextSibling), ut = e, he = !0, At = null, t !== null && (yt[gt++] = Gt, yt[gt++] = Qt, yt[gt++] = q0, Gt = t.id, Qt = t.overflow, q0 = e), e = to(e, n.children), e.flags |= 4096, e);
}
function Iu(t, e, r) {
  t.lanes |= e;
  var n = t.alternate;
  n !== null && (n.lanes |= e), Kl(t.return, e, r);
}
function rl(t, e, r, n, i) {
  var a = t.memoizedState;
  a === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i } : (a.isBackwards = e, a.rendering = null, a.renderingStartTime = 0, a.last = n, a.tail = r, a.tailMode = i);
}
function _c(t, e, r) {
  var n = e.pendingProps, i = n.revealOrder, a = n.tail;
  if (We(t, e, n.children, r), n = ve.current, n & 2)
    n = n & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128)
      e:
        for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Iu(t, r, e);
          else if (t.tag === 19)
            Iu(t, r, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e)
            break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break e;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
    n &= 1;
  }
  if (ue(ve, n), !(e.mode & 1))
    e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = e.child, i = null; r !== null; )
          t = r.alternate, t !== null && $i(t) === null && (i = r), r = r.sibling;
        r = i, r === null ? (i = e.child, e.child = null) : (i = r.sibling, r.sibling = null), rl(e, !1, i, r, a);
        break;
      case "backwards":
        for (r = null, i = e.child, e.child = null; i !== null; ) {
          if (t = i.alternate, t !== null && $i(t) === null) {
            e.child = i;
            break;
          }
          t = i.sibling, i.sibling = r, r = i, i = t;
        }
        rl(e, !0, r, null, a);
        break;
      case "together":
        rl(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function ki(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2);
}
function i0(t, e, r) {
  if (t !== null && (e.dependencies = t.dependencies), Y0 |= e.lanes, !(r & e.childLanes))
    return null;
  if (t !== null && e.child !== t.child)
    throw Error(D(153));
  if (e.child !== null) {
    for (t = e.child, r = M0(t, t.pendingProps), e.child = r, r.return = e; t.sibling !== null; )
      t = t.sibling, r = r.sibling = M0(t, t.pendingProps), r.return = e;
    r.sibling = null;
  }
  return e.child;
}
function i5(t, e, r) {
  switch (e.tag) {
    case 3:
      Nc(e), Cr();
      break;
    case 5:
      ic(e);
      break;
    case 1:
      nt(e.type) && Oi(e);
      break;
    case 4:
      Ys(e, e.stateNode.containerInfo);
      break;
    case 10:
      var n = e.type._context, i = e.memoizedProps.value;
      ue(ji, n._currentValue), n._currentValue = i;
      break;
    case 13:
      if (n = e.memoizedState, n !== null)
        return n.dehydrated !== null ? (ue(ve, ve.current & 1), e.flags |= 128, null) : r & e.child.childLanes ? Ac(t, e, r) : (ue(ve, ve.current & 1), t = i0(t, e, r), t !== null ? t.sibling : null);
      ue(ve, ve.current & 1);
      break;
    case 19:
      if (n = (r & e.childLanes) !== 0, t.flags & 128) {
        if (n)
          return _c(t, e, r);
        e.flags |= 128;
      }
      if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ue(ve, ve.current), n)
        break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, Tc(t, e, r);
  }
  return i0(t, e, r);
}
var Pc, rs, Dc, Rc;
Pc = function(t, e) {
  for (var r = e.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6)
      t.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === e)
      break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === e)
        return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
rs = function() {
};
Dc = function(t, e, r, n) {
  var i = t.memoizedProps;
  if (i !== n) {
    t = e.stateNode, j0(Ht.current);
    var a = null;
    switch (r) {
      case "input":
        i = Ml(t, i), n = Ml(t, n), a = [];
        break;
      case "select":
        i = xe({}, i, { value: void 0 }), n = xe({}, n, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = Tl(t, i), n = Tl(t, n), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (t.onclick = Li);
    }
    Nl(r, n);
    var l;
    r = null;
    for (d in i)
      if (!n.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
        if (d === "style") {
          var o = i[d];
          for (l in o)
            o.hasOwnProperty(l) && (r || (r = {}), r[l] = "");
        } else
          d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (fn.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in n) {
      var u = n[d];
      if (o = i != null ? i[d] : void 0, n.hasOwnProperty(d) && u !== o && (u != null || o != null))
        if (d === "style")
          if (o) {
            for (l in o)
              !o.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (r || (r = {}), r[l] = "");
            for (l in u)
              u.hasOwnProperty(l) && o[l] !== u[l] && (r || (r = {}), r[l] = u[l]);
          } else
            r || (a || (a = []), a.push(
              d,
              r
            )), r = u;
        else
          d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (a = a || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (a = a || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (fn.hasOwnProperty(d) ? (u != null && d === "onScroll" && ce("scroll", t), a || o === u || (a = [])) : (a = a || []).push(d, u));
    }
    r && (a = a || []).push("style", r);
    var d = a;
    (e.updateQueue = d) && (e.flags |= 4);
  }
};
Rc = function(t, e, r, n) {
  r !== n && (e.flags |= 4);
};
function Wr(t, e) {
  if (!he)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var r = null; e !== null; )
          e.alternate !== null && (r = e), e = e.sibling;
        r === null ? t.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = t.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), r = r.sibling;
        n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
    }
}
function Ve(t) {
  var e = t.alternate !== null && t.alternate.child === t.child, r = 0, n = 0;
  if (e)
    for (var i = t.child; i !== null; )
      r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = t, i = i.sibling;
  else
    for (i = t.child; i !== null; )
      r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = t, i = i.sibling;
  return t.subtreeFlags |= n, t.childLanes = r, e;
}
function a5(t, e, r) {
  var n = e.pendingProps;
  switch (Hs(e), e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ve(e), null;
    case 1:
      return nt(e.type) && Bi(), Ve(e), null;
    case 3:
      return n = e.stateNode, Er(), fe(rt), fe($e), Gs(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (ei(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, At !== null && (cs(At), At = null))), rs(t, e), Ve(e), null;
    case 5:
      Ks(e);
      var i = j0(bn.current);
      if (r = e.type, t !== null && e.stateNode != null)
        Dc(t, e, r, n, i), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!n) {
          if (e.stateNode === null)
            throw Error(D(166));
          return Ve(e), null;
        }
        if (t = j0(Ht.current), ei(e)) {
          n = e.stateNode, r = e.type;
          var a = e.memoizedProps;
          switch (n[Ot] = e, n[Sn] = a, t = (e.mode & 1) !== 0, r) {
            case "dialog":
              ce("cancel", n), ce("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Xr.length; i++)
                ce(Xr[i], n);
              break;
            case "source":
              ce("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ce(
                "error",
                n
              ), ce("load", n);
              break;
            case "details":
              ce("toggle", n);
              break;
            case "input":
              $o(n, a), ce("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!a.multiple }, ce("invalid", n);
              break;
            case "textarea":
              Wo(n, a), ce("invalid", n);
          }
          Nl(r, a), i = null;
          for (var l in a)
            if (a.hasOwnProperty(l)) {
              var o = a[l];
              l === "children" ? typeof o == "string" ? n.textContent !== o && (a.suppressHydrationWarning !== !0 && Jn(n.textContent, o, t), i = ["children", o]) : typeof o == "number" && n.textContent !== "" + o && (a.suppressHydrationWarning !== !0 && Jn(
                n.textContent,
                o,
                t
              ), i = ["children", "" + o]) : fn.hasOwnProperty(l) && o != null && l === "onScroll" && ce("scroll", n);
            }
          switch (r) {
            case "input":
              qn(n), qo(n, a, !0);
              break;
            case "textarea":
              qn(n), Yo(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (n.onclick = Li);
          }
          n = i, e.updateQueue = n, n !== null && (e.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = s4(r)), t === "http://www.w3.org/1999/xhtml" ? r === "script" ? (t = l.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof n.is == "string" ? t = l.createElement(r, { is: n.is }) : (t = l.createElement(r), r === "select" && (l = t, n.multiple ? l.multiple = !0 : n.size && (l.size = n.size))) : t = l.createElementNS(t, r), t[Ot] = e, t[Sn] = n, Pc(t, e, !1, !1), e.stateNode = t;
          e: {
            switch (l = Al(r, n), r) {
              case "dialog":
                ce("cancel", t), ce("close", t), i = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", t), i = n;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Xr.length; i++)
                  ce(Xr[i], t);
                i = n;
                break;
              case "source":
                ce("error", t), i = n;
                break;
              case "img":
              case "image":
              case "link":
                ce(
                  "error",
                  t
                ), ce("load", t), i = n;
                break;
              case "details":
                ce("toggle", t), i = n;
                break;
              case "input":
                $o(t, n), i = Ml(t, n), ce("invalid", t);
                break;
              case "option":
                i = n;
                break;
              case "select":
                t._wrapperState = { wasMultiple: !!n.multiple }, i = xe({}, n, { value: void 0 }), ce("invalid", t);
                break;
              case "textarea":
                Wo(t, n), i = Tl(t, n), ce("invalid", t);
                break;
              default:
                i = n;
            }
            Nl(r, i), o = i;
            for (a in o)
              if (o.hasOwnProperty(a)) {
                var u = o[a];
                a === "style" ? c4(t, u) : a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && o4(t, u)) : a === "children" ? typeof u == "string" ? (r !== "textarea" || u !== "") && dn(t, u) : typeof u == "number" && dn(t, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (fn.hasOwnProperty(a) ? u != null && a === "onScroll" && ce("scroll", t) : u != null && zs(t, a, u, l));
              }
            switch (r) {
              case "input":
                qn(t), qo(t, n, !1);
                break;
              case "textarea":
                qn(t), Yo(t);
                break;
              case "option":
                n.value != null && t.setAttribute("value", "" + z0(n.value));
                break;
              case "select":
                t.multiple = !!n.multiple, a = n.value, a != null ? yr(t, !!n.multiple, a, !1) : n.defaultValue != null && yr(
                  t,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = Li);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (e.flags |= 4);
        }
        e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
      }
      return Ve(e), null;
    case 6:
      if (t && e.stateNode != null)
        Rc(t, e, t.memoizedProps, n);
      else {
        if (typeof n != "string" && e.stateNode === null)
          throw Error(D(166));
        if (r = j0(bn.current), j0(Ht.current), ei(e)) {
          if (n = e.stateNode, r = e.memoizedProps, n[Ot] = e, (a = n.nodeValue !== r) && (t = ut, t !== null))
            switch (t.tag) {
              case 3:
                Jn(n.nodeValue, r, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && Jn(n.nodeValue, r, (t.mode & 1) !== 0);
            }
          a && (e.flags |= 4);
        } else
          n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Ot] = e, e.stateNode = n;
      }
      return Ve(e), null;
    case 13:
      if (fe(ve), n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (he && ot !== null && e.mode & 1 && !(e.flags & 128))
          X4(), Cr(), e.flags |= 98560, a = !1;
        else if (a = ei(e), n !== null && n.dehydrated !== null) {
          if (t === null) {
            if (!a)
              throw Error(D(318));
            if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a)
              throw Error(D(317));
            a[Ot] = e;
          } else
            Cr(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          Ve(e), a = !1;
        } else
          At !== null && (cs(At), At = null), a = !0;
        if (!a)
          return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = r, e) : (n = n !== null, n !== (t !== null && t.memoizedState !== null) && n && (e.child.flags |= 8192, e.mode & 1 && (t === null || ve.current & 1 ? Pe === 0 && (Pe = 3) : so())), e.updateQueue !== null && (e.flags |= 4), Ve(e), null);
    case 4:
      return Er(), rs(t, e), t === null && wn(e.stateNode.containerInfo), Ve(e), null;
    case 10:
      return $s(e.type._context), Ve(e), null;
    case 17:
      return nt(e.type) && Bi(), Ve(e), null;
    case 19:
      if (fe(ve), a = e.memoizedState, a === null)
        return Ve(e), null;
      if (n = (e.flags & 128) !== 0, l = a.rendering, l === null)
        if (n)
          Wr(a, !1);
        else {
          if (Pe !== 0 || t !== null && t.flags & 128)
            for (t = e.child; t !== null; ) {
              if (l = $i(t), l !== null) {
                for (e.flags |= 128, Wr(a, !1), n = l.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), e.subtreeFlags = 0, n = r, r = e.child; r !== null; )
                  a = r, t = n, a.flags &= 14680066, l = a.alternate, l === null ? (a.childLanes = 0, a.lanes = t, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, a.type = l.type, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), r = r.sibling;
                return ue(ve, ve.current & 1 | 2), e.child;
              }
              t = t.sibling;
            }
          a.tail !== null && ke() > Ar && (e.flags |= 128, n = !0, Wr(a, !1), e.lanes = 4194304);
        }
      else {
        if (!n)
          if (t = $i(l), t !== null) {
            if (e.flags |= 128, n = !0, r = t.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), Wr(a, !0), a.tail === null && a.tailMode === "hidden" && !l.alternate && !he)
              return Ve(e), null;
          } else
            2 * ke() - a.renderingStartTime > Ar && r !== 1073741824 && (e.flags |= 128, n = !0, Wr(a, !1), e.lanes = 4194304);
        a.isBackwards ? (l.sibling = e.child, e.child = l) : (r = a.last, r !== null ? r.sibling = l : e.child = l, a.last = l);
      }
      return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ke(), e.sibling = null, r = ve.current, ue(ve, n ? r & 1 | 2 : r & 1), e) : (Ve(e), null);
    case 22:
    case 23:
      return lo(), n = e.memoizedState !== null, t !== null && t.memoizedState !== null !== n && (e.flags |= 8192), n && e.mode & 1 ? st & 1073741824 && (Ve(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ve(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, e.tag));
}
function l5(t, e) {
  switch (Hs(e), e.tag) {
    case 1:
      return nt(e.type) && Bi(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return Er(), fe(rt), fe($e), Gs(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 5:
      return Ks(e), null;
    case 13:
      if (fe(ve), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null)
          throw Error(D(340));
        Cr();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return fe(ve), null;
    case 4:
      return Er(), null;
    case 10:
      return $s(e.type._context), null;
    case 22:
    case 23:
      return lo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ni = !1, Ue = !1, s5 = typeof WeakSet == "function" ? WeakSet : Set, V = null;
function mr(t, e) {
  var r = t.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Se(t, e, n);
      }
    else
      r.current = null;
}
function ns(t, e, r) {
  try {
    r();
  } catch (n) {
    Se(t, e, n);
  }
}
var Lu = !1;
function o5(t, e) {
  if (Hl = Di, t = O4(), Os(t)) {
    if ("selectionStart" in t)
      var r = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        r = (r = t.ownerDocument) && r.defaultView || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset, a = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, a.nodeType;
          } catch {
            r = null;
            break e;
          }
          var l = 0, o = -1, u = -1, d = 0, h = 0, m = t, p = null;
          t:
            for (; ; ) {
              for (var S; m !== r || i !== 0 && m.nodeType !== 3 || (o = l + i), m !== a || n !== 0 && m.nodeType !== 3 || (u = l + n), m.nodeType === 3 && (l += m.nodeValue.length), (S = m.firstChild) !== null; )
                p = m, m = S;
              for (; ; ) {
                if (m === t)
                  break t;
                if (p === r && ++d === i && (o = l), p === a && ++h === n && (u = l), (S = m.nextSibling) !== null)
                  break;
                m = p, p = m.parentNode;
              }
              m = S;
            }
          r = o === -1 || u === -1 ? null : { start: o, end: u };
        } else
          r = null;
      }
    r = r || { start: 0, end: 0 };
  } else
    r = null;
  for (jl = { focusedElem: t, selectionRange: r }, Di = !1, V = e; V !== null; )
    if (e = V, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
      t.return = e, V = t;
    else
      for (; V !== null; ) {
        e = V;
        try {
          var M = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (M !== null) {
                  var z = M.memoizedProps, A = M.memoizedState, y = e.stateNode, v = y.getSnapshotBeforeUpdate(e.elementType === e.type ? z : Tt(e.type, z), A);
                  y.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var x = e.stateNode.containerInfo;
                x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (E) {
          Se(e, e.return, E);
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, V = t;
          break;
        }
        V = e.return;
      }
  return M = Lu, Lu = !1, M;
}
function ln(t, e, r) {
  var n = e.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
      if ((i.tag & t) === t) {
        var a = i.destroy;
        i.destroy = void 0, a !== void 0 && ns(e, r, a);
      }
      i = i.next;
    } while (i !== n);
  }
}
function ma(t, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var r = e = e.next;
    do {
      if ((r.tag & t) === t) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== e);
  }
}
function is(t) {
  var e = t.ref;
  if (e !== null) {
    var r = t.stateNode;
    switch (t.tag) {
      case 5:
        t = r;
        break;
      default:
        t = r;
    }
    typeof e == "function" ? e(t) : e.current = t;
  }
}
function Ic(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, Ic(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[Ot], delete e[Sn], delete e[$l], delete e[$d], delete e[qd])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
function Lc(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Bu(t) {
  e:
    for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Lc(t.return))
          return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4)
          continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2))
        return t.stateNode;
    }
}
function as(t, e, r) {
  var n = t.tag;
  if (n === 5 || n === 6)
    t = t.stateNode, e ? r.nodeType === 8 ? r.parentNode.insertBefore(t, e) : r.insertBefore(t, e) : (r.nodeType === 8 ? (e = r.parentNode, e.insertBefore(t, r)) : (e = r, e.appendChild(t)), r = r._reactRootContainer, r != null || e.onclick !== null || (e.onclick = Li));
  else if (n !== 4 && (t = t.child, t !== null))
    for (as(t, e, r), t = t.sibling; t !== null; )
      as(t, e, r), t = t.sibling;
}
function ls(t, e, r) {
  var n = t.tag;
  if (n === 5 || n === 6)
    t = t.stateNode, e ? r.insertBefore(t, e) : r.appendChild(t);
  else if (n !== 4 && (t = t.child, t !== null))
    for (ls(t, e, r), t = t.sibling; t !== null; )
      ls(t, e, r), t = t.sibling;
}
var Ie = null, Et = !1;
function o0(t, e, r) {
  for (r = r.child; r !== null; )
    Bc(t, e, r), r = r.sibling;
}
function Bc(t, e, r) {
  if (Ft && typeof Ft.onCommitFiberUnmount == "function")
    try {
      Ft.onCommitFiberUnmount(la, r);
    } catch {
    }
  switch (r.tag) {
    case 5:
      Ue || mr(r, e);
    case 6:
      var n = Ie, i = Et;
      Ie = null, o0(t, e, r), Ie = n, Et = i, Ie !== null && (Et ? (t = Ie, r = r.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(r) : t.removeChild(r)) : Ie.removeChild(r.stateNode));
      break;
    case 18:
      Ie !== null && (Et ? (t = Ie, r = r.stateNode, t.nodeType === 8 ? Ga(t.parentNode, r) : t.nodeType === 1 && Ga(t, r), vn(t)) : Ga(Ie, r.stateNode));
      break;
    case 4:
      n = Ie, i = Et, Ie = r.stateNode.containerInfo, Et = !0, o0(t, e, r), Ie = n, Et = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ue && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        i = n = n.next;
        do {
          var a = i, l = a.destroy;
          a = a.tag, l !== void 0 && (a & 2 || a & 4) && ns(r, e, l), i = i.next;
        } while (i !== n);
      }
      o0(t, e, r);
      break;
    case 1:
      if (!Ue && (mr(r, e), n = r.stateNode, typeof n.componentWillUnmount == "function"))
        try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (o) {
          Se(r, e, o);
        }
      o0(t, e, r);
      break;
    case 21:
      o0(t, e, r);
      break;
    case 22:
      r.mode & 1 ? (Ue = (n = Ue) || r.memoizedState !== null, o0(t, e, r), Ue = n) : o0(t, e, r);
      break;
    default:
      o0(t, e, r);
  }
}
function Ou(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var r = t.stateNode;
    r === null && (r = t.stateNode = new s5()), e.forEach(function(n) {
      var i = y5.bind(null, t, n);
      r.has(n) || (r.add(n), n.then(i, i));
    });
  }
}
function Ct(t, e) {
  var r = e.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var a = t, l = e, o = l;
        e:
          for (; o !== null; ) {
            switch (o.tag) {
              case 5:
                Ie = o.stateNode, Et = !1;
                break e;
              case 3:
                Ie = o.stateNode.containerInfo, Et = !0;
                break e;
              case 4:
                Ie = o.stateNode.containerInfo, Et = !0;
                break e;
            }
            o = o.return;
          }
        if (Ie === null)
          throw Error(D(160));
        Bc(a, l, i), Ie = null, Et = !1;
        var u = i.alternate;
        u !== null && (u.return = null), i.return = null;
      } catch (d) {
        Se(i, e, d);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; )
      Oc(e, t), e = e.sibling;
}
function Oc(t, e) {
  var r = t.alternate, n = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ct(e, t), It(t), n & 4) {
        try {
          ln(3, t, t.return), ma(3, t);
        } catch (z) {
          Se(t, t.return, z);
        }
        try {
          ln(5, t, t.return);
        } catch (z) {
          Se(t, t.return, z);
        }
      }
      break;
    case 1:
      Ct(e, t), It(t), n & 512 && r !== null && mr(r, r.return);
      break;
    case 5:
      if (Ct(e, t), It(t), n & 512 && r !== null && mr(r, r.return), t.flags & 32) {
        var i = t.stateNode;
        try {
          dn(i, "");
        } catch (z) {
          Se(t, t.return, z);
        }
      }
      if (n & 4 && (i = t.stateNode, i != null)) {
        var a = t.memoizedProps, l = r !== null ? r.memoizedProps : a, o = t.type, u = t.updateQueue;
        if (t.updateQueue = null, u !== null)
          try {
            o === "input" && a.type === "radio" && a.name != null && a4(i, a), Al(o, l);
            var d = Al(o, a);
            for (l = 0; l < u.length; l += 2) {
              var h = u[l], m = u[l + 1];
              h === "style" ? c4(i, m) : h === "dangerouslySetInnerHTML" ? o4(i, m) : h === "children" ? dn(i, m) : zs(i, h, m, d);
            }
            switch (o) {
              case "input":
                zl(i, a);
                break;
              case "textarea":
                l4(i, a);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var S = a.value;
                S != null ? yr(i, !!a.multiple, S, !1) : p !== !!a.multiple && (a.defaultValue != null ? yr(
                  i,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                ) : yr(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[Sn] = a;
          } catch (z) {
            Se(t, t.return, z);
          }
      }
      break;
    case 6:
      if (Ct(e, t), It(t), n & 4) {
        if (t.stateNode === null)
          throw Error(D(162));
        i = t.stateNode, a = t.memoizedProps;
        try {
          i.nodeValue = a;
        } catch (z) {
          Se(t, t.return, z);
        }
      }
      break;
    case 3:
      if (Ct(e, t), It(t), n & 4 && r !== null && r.memoizedState.isDehydrated)
        try {
          vn(e.containerInfo);
        } catch (z) {
          Se(t, t.return, z);
        }
      break;
    case 4:
      Ct(e, t), It(t);
      break;
    case 13:
      Ct(e, t), It(t), i = t.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (io = ke())), n & 4 && Ou(t);
      break;
    case 22:
      if (h = r !== null && r.memoizedState !== null, t.mode & 1 ? (Ue = (d = Ue) || h, Ct(e, t), Ue = d) : Ct(e, t), It(t), n & 8192) {
        if (d = t.memoizedState !== null, (t.stateNode.isHidden = d) && !h && t.mode & 1)
          for (V = t, h = t.child; h !== null; ) {
            for (m = V = h; V !== null; ) {
              switch (p = V, S = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ln(4, p, p.return);
                  break;
                case 1:
                  mr(p, p.return);
                  var M = p.stateNode;
                  if (typeof M.componentWillUnmount == "function") {
                    n = p, r = p.return;
                    try {
                      e = n, M.props = e.memoizedProps, M.state = e.memoizedState, M.componentWillUnmount();
                    } catch (z) {
                      Se(n, r, z);
                    }
                  }
                  break;
                case 5:
                  mr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Hu(m);
                    continue;
                  }
              }
              S !== null ? (S.return = p, V = S) : Hu(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = t; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  i = m.stateNode, d ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (o = m.stateNode, u = m.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = u4("display", l));
                } catch (z) {
                  Se(t, t.return, z);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = d ? "" : m.memoizedProps;
                } catch (z) {
                  Se(t, t.return, z);
                }
            } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === t) && m.child !== null) {
              m.child.return = m, m = m.child;
              continue;
            }
            if (m === t)
              break e;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === t)
                break e;
              h === m && (h = null), m = m.return;
            }
            h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
          }
      }
      break;
    case 19:
      Ct(e, t), It(t), n & 4 && Ou(t);
      break;
    case 21:
      break;
    default:
      Ct(
        e,
        t
      ), It(t);
  }
}
function It(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var r = t.return; r !== null; ) {
          if (Lc(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(D(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (dn(i, ""), n.flags &= -33);
          var a = Bu(t);
          ls(t, a, i);
          break;
        case 3:
        case 4:
          var l = n.stateNode.containerInfo, o = Bu(t);
          as(t, o, l);
          break;
        default:
          throw Error(D(161));
      }
    } catch (u) {
      Se(t, t.return, u);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function u5(t, e, r) {
  V = t, Fc(t);
}
function Fc(t, e, r) {
  for (var n = (t.mode & 1) !== 0; V !== null; ) {
    var i = V, a = i.child;
    if (i.tag === 22 && n) {
      var l = i.memoizedState !== null || ni;
      if (!l) {
        var o = i.alternate, u = o !== null && o.memoizedState !== null || Ue;
        o = ni;
        var d = Ue;
        if (ni = l, (Ue = u) && !d)
          for (V = i; V !== null; )
            l = V, u = l.child, l.tag === 22 && l.memoizedState !== null ? ju(i) : u !== null ? (u.return = l, V = u) : ju(i);
        for (; a !== null; )
          V = a, Fc(a), a = a.sibling;
        V = i, ni = o, Ue = d;
      }
      Fu(t);
    } else
      i.subtreeFlags & 8772 && a !== null ? (a.return = i, V = a) : Fu(t);
  }
}
function Fu(t) {
  for (; V !== null; ) {
    var e = V;
    if (e.flags & 8772) {
      var r = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ue || ma(5, e);
              break;
            case 1:
              var n = e.stateNode;
              if (e.flags & 4 && !Ue)
                if (r === null)
                  n.componentDidMount();
                else {
                  var i = e.elementType === e.type ? r.memoizedProps : Tt(e.type, r.memoizedProps);
                  n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var a = e.updateQueue;
              a !== null && ku(e, a, n);
              break;
            case 3:
              var l = e.updateQueue;
              if (l !== null) {
                if (r = null, e.child !== null)
                  switch (e.child.tag) {
                    case 5:
                      r = e.child.stateNode;
                      break;
                    case 1:
                      r = e.child.stateNode;
                  }
                ku(e, l, r);
              }
              break;
            case 5:
              var o = e.stateNode;
              if (r === null && e.flags & 4) {
                r = o;
                var u = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && r.focus();
                    break;
                  case "img":
                    u.src && (r.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var d = e.alternate;
                if (d !== null) {
                  var h = d.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && vn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        Ue || e.flags & 512 && is(e);
      } catch (p) {
        Se(e, e.return, p);
      }
    }
    if (e === t) {
      V = null;
      break;
    }
    if (r = e.sibling, r !== null) {
      r.return = e.return, V = r;
      break;
    }
    V = e.return;
  }
}
function Hu(t) {
  for (; V !== null; ) {
    var e = V;
    if (e === t) {
      V = null;
      break;
    }
    var r = e.sibling;
    if (r !== null) {
      r.return = e.return, V = r;
      break;
    }
    V = e.return;
  }
}
function ju(t) {
  for (; V !== null; ) {
    var e = V;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var r = e.return;
          try {
            ma(4, e);
          } catch (u) {
            Se(e, r, u);
          }
          break;
        case 1:
          var n = e.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = e.return;
            try {
              n.componentDidMount();
            } catch (u) {
              Se(e, i, u);
            }
          }
          var a = e.return;
          try {
            is(e);
          } catch (u) {
            Se(e, a, u);
          }
          break;
        case 5:
          var l = e.return;
          try {
            is(e);
          } catch (u) {
            Se(e, l, u);
          }
      }
    } catch (u) {
      Se(e, e.return, u);
    }
    if (e === t) {
      V = null;
      break;
    }
    var o = e.sibling;
    if (o !== null) {
      o.return = e.return, V = o;
      break;
    }
    V = e.return;
  }
}
var c5 = Math.ceil, Yi = l0.ReactCurrentDispatcher, ro = l0.ReactCurrentOwner, kt = l0.ReactCurrentBatchConfig, ie = 0, Re = null, Ee = null, Le = 0, st = 0, pr = _0(0), Pe = 0, Tn = null, Y0 = 0, pa = 0, no = 0, sn = null, et = null, io = 0, Ar = 1 / 0, Yt = null, Ki = !1, ss = null, k0 = null, ii = !1, v0 = null, Gi = 0, on = 0, os = null, bi = -1, Mi = 0;
function Ke() {
  return ie & 6 ? ke() : bi !== -1 ? bi : bi = ke();
}
function b0(t) {
  return t.mode & 1 ? ie & 2 && Le !== 0 ? Le & -Le : Yd.transition !== null ? (Mi === 0 && (Mi = k4()), Mi) : (t = se, t !== 0 || (t = window.event, t = t === void 0 ? 16 : N4(t.type)), t) : 1;
}
function Dt(t, e, r, n) {
  if (50 < on)
    throw on = 0, os = null, Error(D(185));
  _n(t, r, n), (!(ie & 2) || t !== Re) && (t === Re && (!(ie & 2) && (pa |= r), Pe === 4 && m0(t, Le)), it(t, n), r === 1 && ie === 0 && !(e.mode & 1) && (Ar = ke() + 500, fa && P0()));
}
function it(t, e) {
  var r = t.callbackNode;
  Yf(t, e);
  var n = Pi(t, t === Re ? Le : 0);
  if (n === 0)
    r !== null && Qo(r), t.callbackNode = null, t.callbackPriority = 0;
  else if (e = n & -n, t.callbackPriority !== e) {
    if (r != null && Qo(r), e === 1)
      t.tag === 0 ? Wd(Vu.bind(null, t)) : K4(Vu.bind(null, t)), Vd(function() {
        !(ie & 6) && P0();
      }), r = null;
    else {
      switch (b4(n)) {
        case 1:
          r = As;
          break;
        case 4:
          r = x4;
          break;
        case 16:
          r = _i;
          break;
        case 536870912:
          r = S4;
          break;
        default:
          r = _i;
      }
      r = Yc(r, Hc.bind(null, t));
    }
    t.callbackPriority = e, t.callbackNode = r;
  }
}
function Hc(t, e) {
  if (bi = -1, Mi = 0, ie & 6)
    throw Error(D(327));
  var r = t.callbackNode;
  if (kr() && t.callbackNode !== r)
    return null;
  var n = Pi(t, t === Re ? Le : 0);
  if (n === 0)
    return null;
  if (n & 30 || n & t.expiredLanes || e)
    e = Qi(t, n);
  else {
    e = n;
    var i = ie;
    ie |= 2;
    var a = Vc();
    (Re !== t || Le !== e) && (Yt = null, Ar = ke() + 500, V0(t, e));
    do
      try {
        h5();
        break;
      } catch (o) {
        jc(t, o);
      }
    while (1);
    Us(), Yi.current = a, ie = i, Ee !== null ? e = 0 : (Re = null, Le = 0, e = Pe);
  }
  if (e !== 0) {
    if (e === 2 && (i = Il(t), i !== 0 && (n = i, e = us(t, i))), e === 1)
      throw r = Tn, V0(t, 0), m0(t, n), it(t, ke()), r;
    if (e === 6)
      m0(t, n);
    else {
      if (i = t.current.alternate, !(n & 30) && !f5(i) && (e = Qi(t, n), e === 2 && (a = Il(t), a !== 0 && (n = a, e = us(t, a))), e === 1))
        throw r = Tn, V0(t, 0), m0(t, n), it(t, ke()), r;
      switch (t.finishedWork = i, t.finishedLanes = n, e) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          O0(t, et, Yt);
          break;
        case 3:
          if (m0(t, n), (n & 130023424) === n && (e = io + 500 - ke(), 10 < e)) {
            if (Pi(t, 0) !== 0)
              break;
            if (i = t.suspendedLanes, (i & n) !== n) {
              Ke(), t.pingedLanes |= t.suspendedLanes & i;
              break;
            }
            t.timeoutHandle = Ul(O0.bind(null, t, et, Yt), e);
            break;
          }
          O0(t, et, Yt);
          break;
        case 4:
          if (m0(t, n), (n & 4194240) === n)
            break;
          for (e = t.eventTimes, i = -1; 0 < n; ) {
            var l = 31 - Pt(n);
            a = 1 << l, l = e[l], l > i && (i = l), n &= ~a;
          }
          if (n = i, n = ke() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * c5(n / 1960)) - n, 10 < n) {
            t.timeoutHandle = Ul(O0.bind(null, t, et, Yt), n);
            break;
          }
          O0(t, et, Yt);
          break;
        case 5:
          O0(t, et, Yt);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return it(t, ke()), t.callbackNode === r ? Hc.bind(null, t) : null;
}
function us(t, e) {
  var r = sn;
  return t.current.memoizedState.isDehydrated && (V0(t, e).flags |= 256), t = Qi(t, e), t !== 2 && (e = et, et = r, e !== null && cs(e)), t;
}
function cs(t) {
  et === null ? et = t : et.push.apply(et, t);
}
function f5(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var r = e.updateQueue;
      if (r !== null && (r = r.stores, r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n], a = i.getSnapshot;
          i = i.value;
          try {
            if (!Rt(a(), i))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (r = e.child, e.subtreeFlags & 16384 && r !== null)
      r.return = e, e = r;
    else {
      if (e === t)
        break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t)
          return !0;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return !0;
}
function m0(t, e) {
  for (e &= ~no, e &= ~pa, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var r = 31 - Pt(e), n = 1 << r;
    t[r] = -1, e &= ~n;
  }
}
function Vu(t) {
  if (ie & 6)
    throw Error(D(327));
  kr();
  var e = Pi(t, 0);
  if (!(e & 1))
    return it(t, ke()), null;
  var r = Qi(t, e);
  if (t.tag !== 0 && r === 2) {
    var n = Il(t);
    n !== 0 && (e = n, r = us(t, n));
  }
  if (r === 1)
    throw r = Tn, V0(t, 0), m0(t, e), it(t, ke()), r;
  if (r === 6)
    throw Error(D(345));
  return t.finishedWork = t.current.alternate, t.finishedLanes = e, O0(t, et, Yt), it(t, ke()), null;
}
function ao(t, e) {
  var r = ie;
  ie |= 1;
  try {
    return t(e);
  } finally {
    ie = r, ie === 0 && (Ar = ke() + 500, fa && P0());
  }
}
function K0(t) {
  v0 !== null && v0.tag === 0 && !(ie & 6) && kr();
  var e = ie;
  ie |= 1;
  var r = kt.transition, n = se;
  try {
    if (kt.transition = null, se = 1, t)
      return t();
  } finally {
    se = n, kt.transition = r, ie = e, !(ie & 6) && P0();
  }
}
function lo() {
  st = pr.current, fe(pr);
}
function V0(t, e) {
  t.finishedWork = null, t.finishedLanes = 0;
  var r = t.timeoutHandle;
  if (r !== -1 && (t.timeoutHandle = -1, jd(r)), Ee !== null)
    for (r = Ee.return; r !== null; ) {
      var n = r;
      switch (Hs(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && Bi();
          break;
        case 3:
          Er(), fe(rt), fe($e), Gs();
          break;
        case 5:
          Ks(n);
          break;
        case 4:
          Er();
          break;
        case 13:
          fe(ve);
          break;
        case 19:
          fe(ve);
          break;
        case 10:
          $s(n.type._context);
          break;
        case 22:
        case 23:
          lo();
      }
      r = r.return;
    }
  if (Re = t, Ee = t = M0(t.current, null), Le = st = e, Pe = 0, Tn = null, no = pa = Y0 = 0, et = sn = null, H0 !== null) {
    for (e = 0; e < H0.length; e++)
      if (r = H0[e], n = r.interleaved, n !== null) {
        r.interleaved = null;
        var i = n.next, a = r.pending;
        if (a !== null) {
          var l = a.next;
          a.next = i, n.next = l;
        }
        r.pending = n;
      }
    H0 = null;
  }
  return t;
}
function jc(t, e) {
  do {
    var r = Ee;
    try {
      if (Us(), xi.current = Wi, qi) {
        for (var n = we.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), n = n.next;
        }
        qi = !1;
      }
      if (W0 = 0, De = _e = we = null, an = !1, Mn = 0, ro.current = null, r === null || r.return === null) {
        Pe = 1, Tn = e, Ee = null;
        break;
      }
      e: {
        var a = t, l = r.return, o = r, u = e;
        if (e = Le, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var d = u, h = o, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var S = Nu(l);
          if (S !== null) {
            S.flags &= -257, Au(S, l, o, a, e), S.mode & 1 && Eu(a, d, e), e = S, u = d;
            var M = e.updateQueue;
            if (M === null) {
              var z = /* @__PURE__ */ new Set();
              z.add(u), e.updateQueue = z;
            } else
              M.add(u);
            break e;
          } else {
            if (!(e & 1)) {
              Eu(a, d, e), so();
              break e;
            }
            u = Error(D(426));
          }
        } else if (he && o.mode & 1) {
          var A = Nu(l);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256), Au(A, l, o, a, e), js(Nr(u, o));
            break e;
          }
        }
        a = u = Nr(u, o), Pe !== 4 && (Pe = 2), sn === null ? sn = [a] : sn.push(a), a = l;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, e &= -e, a.lanes |= e;
              var y = Mc(a, u, e);
              Su(a, y);
              break e;
            case 1:
              o = u;
              var v = a.type, x = a.stateNode;
              if (!(a.flags & 128) && (typeof v.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (k0 === null || !k0.has(x)))) {
                a.flags |= 65536, e &= -e, a.lanes |= e;
                var E = zc(a, o, e);
                Su(a, E);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      $c(r);
    } catch (k) {
      e = k, Ee === r && r !== null && (Ee = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function Vc() {
  var t = Yi.current;
  return Yi.current = Wi, t === null ? Wi : t;
}
function so() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), Re === null || !(Y0 & 268435455) && !(pa & 268435455) || m0(Re, Le);
}
function Qi(t, e) {
  var r = ie;
  ie |= 2;
  var n = Vc();
  (Re !== t || Le !== e) && (Yt = null, V0(t, e));
  do
    try {
      d5();
      break;
    } catch (i) {
      jc(t, i);
    }
  while (1);
  if (Us(), ie = r, Yi.current = n, Ee !== null)
    throw Error(D(261));
  return Re = null, Le = 0, Pe;
}
function d5() {
  for (; Ee !== null; )
    Uc(Ee);
}
function h5() {
  for (; Ee !== null && !Of(); )
    Uc(Ee);
}
function Uc(t) {
  var e = Wc(t.alternate, t, st);
  t.memoizedProps = t.pendingProps, e === null ? $c(t) : Ee = e, ro.current = null;
}
function $c(t) {
  var e = t;
  do {
    var r = e.alternate;
    if (t = e.return, e.flags & 32768) {
      if (r = l5(r, e), r !== null) {
        r.flags &= 32767, Ee = r;
        return;
      }
      if (t !== null)
        t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      else {
        Pe = 6, Ee = null;
        return;
      }
    } else if (r = a5(r, e, st), r !== null) {
      Ee = r;
      return;
    }
    if (e = e.sibling, e !== null) {
      Ee = e;
      return;
    }
    Ee = e = t;
  } while (e !== null);
  Pe === 0 && (Pe = 5);
}
function O0(t, e, r) {
  var n = se, i = kt.transition;
  try {
    kt.transition = null, se = 1, m5(t, e, r, n);
  } finally {
    kt.transition = i, se = n;
  }
  return null;
}
function m5(t, e, r, n) {
  do
    kr();
  while (v0 !== null);
  if (ie & 6)
    throw Error(D(327));
  r = t.finishedWork;
  var i = t.finishedLanes;
  if (r === null)
    return null;
  if (t.finishedWork = null, t.finishedLanes = 0, r === t.current)
    throw Error(D(177));
  t.callbackNode = null, t.callbackPriority = 0;
  var a = r.lanes | r.childLanes;
  if (Kf(t, a), t === Re && (Ee = Re = null, Le = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || ii || (ii = !0, Yc(_i, function() {
    return kr(), null;
  })), a = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || a) {
    a = kt.transition, kt.transition = null;
    var l = se;
    se = 1;
    var o = ie;
    ie |= 4, ro.current = null, o5(t, r), Oc(r, t), Rd(jl), Di = !!Hl, jl = Hl = null, t.current = r, u5(r), Ff(), ie = o, se = l, kt.transition = a;
  } else
    t.current = r;
  if (ii && (ii = !1, v0 = t, Gi = i), a = t.pendingLanes, a === 0 && (k0 = null), Vf(r.stateNode), it(t, ke()), e !== null)
    for (n = t.onRecoverableError, r = 0; r < e.length; r++)
      i = e[r], n(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ki)
    throw Ki = !1, t = ss, ss = null, t;
  return Gi & 1 && t.tag !== 0 && kr(), a = t.pendingLanes, a & 1 ? t === os ? on++ : (on = 0, os = t) : on = 0, P0(), null;
}
function kr() {
  if (v0 !== null) {
    var t = b4(Gi), e = kt.transition, r = se;
    try {
      if (kt.transition = null, se = 16 > t ? 16 : t, v0 === null)
        var n = !1;
      else {
        if (t = v0, v0 = null, Gi = 0, ie & 6)
          throw Error(D(331));
        var i = ie;
        for (ie |= 4, V = t.current; V !== null; ) {
          var a = V, l = a.child;
          if (V.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var d = o[u];
                for (V = d; V !== null; ) {
                  var h = V;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ln(8, h, a);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, V = m;
                  else
                    for (; V !== null; ) {
                      h = V;
                      var p = h.sibling, S = h.return;
                      if (Ic(h), h === d) {
                        V = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = S, V = p;
                        break;
                      }
                      V = S;
                    }
                }
              }
              var M = a.alternate;
              if (M !== null) {
                var z = M.child;
                if (z !== null) {
                  M.child = null;
                  do {
                    var A = z.sibling;
                    z.sibling = null, z = A;
                  } while (z !== null);
                }
              }
              V = a;
            }
          }
          if (a.subtreeFlags & 2064 && l !== null)
            l.return = a, V = l;
          else
            e:
              for (; V !== null; ) {
                if (a = V, a.flags & 2048)
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ln(9, a, a.return);
                  }
                var y = a.sibling;
                if (y !== null) {
                  y.return = a.return, V = y;
                  break e;
                }
                V = a.return;
              }
        }
        var v = t.current;
        for (V = v; V !== null; ) {
          l = V;
          var x = l.child;
          if (l.subtreeFlags & 2064 && x !== null)
            x.return = l, V = x;
          else
            e:
              for (l = v; V !== null; ) {
                if (o = V, o.flags & 2048)
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ma(9, o);
                    }
                  } catch (k) {
                    Se(o, o.return, k);
                  }
                if (o === l) {
                  V = null;
                  break e;
                }
                var E = o.sibling;
                if (E !== null) {
                  E.return = o.return, V = E;
                  break e;
                }
                V = o.return;
              }
        }
        if (ie = i, P0(), Ft && typeof Ft.onPostCommitFiberRoot == "function")
          try {
            Ft.onPostCommitFiberRoot(la, t);
          } catch {
          }
        n = !0;
      }
      return n;
    } finally {
      se = r, kt.transition = e;
    }
  }
  return !1;
}
function Uu(t, e, r) {
  e = Nr(r, e), e = Mc(t, e, 1), t = S0(t, e, 1), e = Ke(), t !== null && (_n(t, 1, e), it(t, e));
}
function Se(t, e, r) {
  if (t.tag === 3)
    Uu(t, t, r);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Uu(e, t, r);
        break;
      } else if (e.tag === 1) {
        var n = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (k0 === null || !k0.has(n))) {
          t = Nr(r, t), t = zc(e, t, 1), e = S0(e, t, 1), t = Ke(), e !== null && (_n(e, 1, t), it(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function p5(t, e, r) {
  var n = t.pingCache;
  n !== null && n.delete(e), e = Ke(), t.pingedLanes |= t.suspendedLanes & r, Re === t && (Le & r) === r && (Pe === 4 || Pe === 3 && (Le & 130023424) === Le && 500 > ke() - io ? V0(t, 0) : no |= r), it(t, e);
}
function qc(t, e) {
  e === 0 && (t.mode & 1 ? (e = Kn, Kn <<= 1, !(Kn & 130023424) && (Kn = 4194304)) : e = 1);
  var r = Ke();
  t = n0(t, e), t !== null && (_n(t, e, r), it(t, r));
}
function v5(t) {
  var e = t.memoizedState, r = 0;
  e !== null && (r = e.retryLane), qc(t, r);
}
function y5(t, e) {
  var r = 0;
  switch (t.tag) {
    case 13:
      var n = t.stateNode, i = t.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = t.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  n !== null && n.delete(e), qc(t, r);
}
var Wc;
Wc = function(t, e, r) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || rt.current)
      tt = !0;
    else {
      if (!(t.lanes & r) && !(e.flags & 128))
        return tt = !1, i5(t, e, r);
      tt = !!(t.flags & 131072);
    }
  else
    tt = !1, he && e.flags & 1048576 && G4(e, Hi, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var n = e.type;
      ki(t, e), t = e.pendingProps;
      var i = zr(e, $e.current);
      Sr(e, r), i = Xs(null, e, n, t, i, r);
      var a = Zs();
      return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, nt(n) ? (a = !0, Oi(e)) : a = !1, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ws(e), i.updater = da, e.stateNode = i, i._reactInternals = e, Ql(e, n, t, r), e = Jl(null, e, n, !0, a, r)) : (e.tag = 0, he && a && Fs(e), We(null, e, i, r), e = e.child), e;
    case 16:
      n = e.elementType;
      e: {
        switch (ki(t, e), t = e.pendingProps, i = n._init, n = i(n._payload), e.type = n, i = e.tag = w5(n), t = Tt(n, t), i) {
          case 0:
            e = Zl(null, e, n, t, r);
            break e;
          case 1:
            e = Du(null, e, n, t, r);
            break e;
          case 11:
            e = _u(null, e, n, t, r);
            break e;
          case 14:
            e = Pu(null, e, n, Tt(n.type, t), r);
            break e;
        }
        throw Error(D(
          306,
          n,
          ""
        ));
      }
      return e;
    case 0:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Tt(n, i), Zl(t, e, n, i, r);
    case 1:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Tt(n, i), Du(t, e, n, i, r);
    case 3:
      e: {
        if (Nc(e), t === null)
          throw Error(D(387));
        n = e.pendingProps, a = e.memoizedState, i = a.element, J4(t, e), Ui(e, n, null, r);
        var l = e.memoizedState;
        if (n = l.element, a.isDehydrated)
          if (a = { element: n, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, e.updateQueue.baseState = a, e.memoizedState = a, e.flags & 256) {
            i = Nr(Error(D(423)), e), e = Ru(t, e, n, r, i);
            break e;
          } else if (n !== i) {
            i = Nr(Error(D(424)), e), e = Ru(t, e, n, r, i);
            break e;
          } else
            for (ot = x0(e.stateNode.containerInfo.firstChild), ut = e, he = !0, At = null, r = nc(e, null, n, r), e.child = r; r; )
              r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (Cr(), n === i) {
            e = i0(t, e, r);
            break e;
          }
          We(t, e, n, r);
        }
        e = e.child;
      }
      return e;
    case 5:
      return ic(e), t === null && Yl(e), n = e.type, i = e.pendingProps, a = t !== null ? t.memoizedProps : null, l = i.children, Vl(n, i) ? l = null : a !== null && Vl(n, a) && (e.flags |= 32), Ec(t, e), We(t, e, l, r), e.child;
    case 6:
      return t === null && Yl(e), null;
    case 13:
      return Ac(t, e, r);
    case 4:
      return Ys(e, e.stateNode.containerInfo), n = e.pendingProps, t === null ? e.child = Tr(e, null, n, r) : We(t, e, n, r), e.child;
    case 11:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Tt(n, i), _u(t, e, n, i, r);
    case 7:
      return We(t, e, e.pendingProps, r), e.child;
    case 8:
      return We(t, e, e.pendingProps.children, r), e.child;
    case 12:
      return We(t, e, e.pendingProps.children, r), e.child;
    case 10:
      e: {
        if (n = e.type._context, i = e.pendingProps, a = e.memoizedProps, l = i.value, ue(ji, n._currentValue), n._currentValue = l, a !== null)
          if (Rt(a.value, l)) {
            if (a.children === i.children && !rt.current) {
              e = i0(t, e, r);
              break e;
            }
          } else
            for (a = e.child, a !== null && (a.return = e); a !== null; ) {
              var o = a.dependencies;
              if (o !== null) {
                l = a.child;
                for (var u = o.firstContext; u !== null; ) {
                  if (u.context === n) {
                    if (a.tag === 1) {
                      u = Zt(-1, r & -r), u.tag = 2;
                      var d = a.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var h = d.pending;
                        h === null ? u.next = u : (u.next = h.next, h.next = u), d.pending = u;
                      }
                    }
                    a.lanes |= r, u = a.alternate, u !== null && (u.lanes |= r), Kl(
                      a.return,
                      r,
                      e
                    ), o.lanes |= r;
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10)
                l = a.type === e.type ? null : a.child;
              else if (a.tag === 18) {
                if (l = a.return, l === null)
                  throw Error(D(341));
                l.lanes |= r, o = l.alternate, o !== null && (o.lanes |= r), Kl(l, r, e), l = a.sibling;
              } else
                l = a.child;
              if (l !== null)
                l.return = a;
              else
                for (l = a; l !== null; ) {
                  if (l === e) {
                    l = null;
                    break;
                  }
                  if (a = l.sibling, a !== null) {
                    a.return = l.return, l = a;
                    break;
                  }
                  l = l.return;
                }
              a = l;
            }
        We(t, e, i.children, r), e = e.child;
      }
      return e;
    case 9:
      return i = e.type, n = e.pendingProps.children, Sr(e, r), i = bt(i), n = n(i), e.flags |= 1, We(t, e, n, r), e.child;
    case 14:
      return n = e.type, i = Tt(n, e.pendingProps), i = Tt(n.type, i), Pu(t, e, n, i, r);
    case 15:
      return Cc(t, e, e.type, e.pendingProps, r);
    case 17:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Tt(n, i), ki(t, e), e.tag = 1, nt(n) ? (t = !0, Oi(e)) : t = !1, Sr(e, r), tc(e, n, i), Ql(e, n, i, r), Jl(null, e, n, !0, t, r);
    case 19:
      return _c(t, e, r);
    case 22:
      return Tc(t, e, r);
  }
  throw Error(D(156, e.tag));
};
function Yc(t, e) {
  return w4(t, e);
}
function g5(t, e, r, n) {
  this.tag = t, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xt(t, e, r, n) {
  return new g5(t, e, r, n);
}
function oo(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function w5(t) {
  if (typeof t == "function")
    return oo(t) ? 1 : 0;
  if (t != null) {
    if (t = t.$$typeof, t === Ts)
      return 11;
    if (t === Es)
      return 14;
  }
  return 2;
}
function M0(t, e) {
  var r = t.alternate;
  return r === null ? (r = xt(t.tag, e, t.key, t.mode), r.elementType = t.elementType, r.type = t.type, r.stateNode = t.stateNode, r.alternate = t, t.alternate = r) : (r.pendingProps = e, r.type = t.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = t.flags & 14680064, r.childLanes = t.childLanes, r.lanes = t.lanes, r.child = t.child, r.memoizedProps = t.memoizedProps, r.memoizedState = t.memoizedState, r.updateQueue = t.updateQueue, e = t.dependencies, r.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, r.sibling = t.sibling, r.index = t.index, r.ref = t.ref, r;
}
function zi(t, e, r, n, i, a) {
  var l = 2;
  if (n = t, typeof t == "function")
    oo(t) && (l = 1);
  else if (typeof t == "string")
    l = 5;
  else
    e:
      switch (t) {
        case ar:
          return U0(r.children, i, a, e);
        case Cs:
          l = 8, i |= 8;
          break;
        case xl:
          return t = xt(12, r, e, i | 2), t.elementType = xl, t.lanes = a, t;
        case Sl:
          return t = xt(13, r, e, i), t.elementType = Sl, t.lanes = a, t;
        case kl:
          return t = xt(19, r, e, i), t.elementType = kl, t.lanes = a, t;
        case r4:
          return va(r, i, a, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case e4:
                l = 10;
                break e;
              case t4:
                l = 9;
                break e;
              case Ts:
                l = 11;
                break e;
              case Es:
                l = 14;
                break e;
              case f0:
                l = 16, n = null;
                break e;
            }
          throw Error(D(130, t == null ? t : typeof t, ""));
      }
  return e = xt(l, r, e, i), e.elementType = t, e.type = n, e.lanes = a, e;
}
function U0(t, e, r, n) {
  return t = xt(7, t, n, e), t.lanes = r, t;
}
function va(t, e, r, n) {
  return t = xt(22, t, n, e), t.elementType = r4, t.lanes = r, t.stateNode = { isHidden: !1 }, t;
}
function nl(t, e, r) {
  return t = xt(6, t, null, e), t.lanes = r, t;
}
function il(t, e, r) {
  return e = xt(4, t.children !== null ? t.children : [], t.key, e), e.lanes = r, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
}
function x5(t, e, r, n, i) {
  this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Oa(0), this.expirationTimes = Oa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oa(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function uo(t, e, r, n, i, a, l, o, u) {
  return t = new x5(t, e, r, o, u), e === 1 ? (e = 1, a === !0 && (e |= 8)) : e = 0, a = xt(3, null, null, e), t.current = a, a.stateNode = t, a.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ws(a), t;
}
function S5(t, e, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ir, key: n == null ? null : "" + n, children: t, containerInfo: e, implementation: r };
}
function Kc(t) {
  if (!t)
    return C0;
  t = t._reactInternals;
  e: {
    if (X0(t) !== t || t.tag !== 1)
      throw Error(D(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (nt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(D(171));
  }
  if (t.tag === 1) {
    var r = t.type;
    if (nt(r))
      return Y4(t, r, e);
  }
  return e;
}
function Gc(t, e, r, n, i, a, l, o, u) {
  return t = uo(r, n, !0, t, i, a, l, o, u), t.context = Kc(null), r = t.current, n = Ke(), i = b0(r), a = Zt(n, i), a.callback = e ?? null, S0(r, a, i), t.current.lanes = i, _n(t, i, n), it(t, n), t;
}
function ya(t, e, r, n) {
  var i = e.current, a = Ke(), l = b0(i);
  return r = Kc(r), e.context === null ? e.context = r : e.pendingContext = r, e = Zt(a, l), e.payload = { element: t }, n = n === void 0 ? null : n, n !== null && (e.callback = n), t = S0(i, e, l), t !== null && (Dt(t, i, l, a), wi(t, i, l)), l;
}
function Xi(t) {
  if (t = t.current, !t.child)
    return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function $u(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var r = t.retryLane;
    t.retryLane = r !== 0 && r < e ? r : e;
  }
}
function co(t, e) {
  $u(t, e), (t = t.alternate) && $u(t, e);
}
function k5() {
  return null;
}
var Qc = typeof reportError == "function" ? reportError : function(t) {
  console.error(t);
};
function fo(t) {
  this._internalRoot = t;
}
ga.prototype.render = fo.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null)
    throw Error(D(409));
  ya(t, e, null, null);
};
ga.prototype.unmount = fo.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    K0(function() {
      ya(null, t, null, null);
    }), e[r0] = null;
  }
};
function ga(t) {
  this._internalRoot = t;
}
ga.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = C4();
    t = { blockedOn: null, target: t, priority: e };
    for (var r = 0; r < h0.length && e !== 0 && e < h0[r].priority; r++)
      ;
    h0.splice(r, 0, t), r === 0 && E4(t);
  }
};
function ho(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function wa(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
}
function qu() {
}
function b5(t, e, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var a = n;
      n = function() {
        var d = Xi(l);
        a.call(d);
      };
    }
    var l = Gc(e, n, t, 0, null, !1, !1, "", qu);
    return t._reactRootContainer = l, t[r0] = l.current, wn(t.nodeType === 8 ? t.parentNode : t), K0(), l;
  }
  for (; i = t.lastChild; )
    t.removeChild(i);
  if (typeof n == "function") {
    var o = n;
    n = function() {
      var d = Xi(u);
      o.call(d);
    };
  }
  var u = uo(t, 0, !1, null, null, !1, !1, "", qu);
  return t._reactRootContainer = u, t[r0] = u.current, wn(t.nodeType === 8 ? t.parentNode : t), K0(function() {
    ya(e, u, r, n);
  }), u;
}
function xa(t, e, r, n, i) {
  var a = r._reactRootContainer;
  if (a) {
    var l = a;
    if (typeof i == "function") {
      var o = i;
      i = function() {
        var u = Xi(l);
        o.call(u);
      };
    }
    ya(e, l, t, i);
  } else
    l = b5(r, e, t, i, n);
  return Xi(l);
}
M4 = function(t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var r = Qr(e.pendingLanes);
        r !== 0 && (_s(e, r | 1), it(e, ke()), !(ie & 6) && (Ar = ke() + 500, P0()));
      }
      break;
    case 13:
      K0(function() {
        var n = n0(t, 1);
        if (n !== null) {
          var i = Ke();
          Dt(n, t, 1, i);
        }
      }), co(t, 1);
  }
};
Ps = function(t) {
  if (t.tag === 13) {
    var e = n0(t, 134217728);
    if (e !== null) {
      var r = Ke();
      Dt(e, t, 134217728, r);
    }
    co(t, 134217728);
  }
};
z4 = function(t) {
  if (t.tag === 13) {
    var e = b0(t), r = n0(t, e);
    if (r !== null) {
      var n = Ke();
      Dt(r, t, e, n);
    }
    co(t, e);
  }
};
C4 = function() {
  return se;
};
T4 = function(t, e) {
  var r = se;
  try {
    return se = t, e();
  } finally {
    se = r;
  }
};
Pl = function(t, e, r) {
  switch (e) {
    case "input":
      if (zl(t, r), e = r.name, r.type === "radio" && e != null) {
        for (r = t; r.parentNode; )
          r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < r.length; e++) {
          var n = r[e];
          if (n !== t && n.form === t.form) {
            var i = ca(n);
            if (!i)
              throw Error(D(90));
            i4(n), zl(n, i);
          }
        }
      }
      break;
    case "textarea":
      l4(t, r);
      break;
    case "select":
      e = r.value, e != null && yr(t, !!r.multiple, e, !1);
  }
};
h4 = ao;
m4 = K0;
var M5 = { usingClientEntryPoint: !1, Events: [Dn, ur, ca, f4, d4, ao] }, Yr = { findFiberByHostInstance: F0, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, z5 = { bundleType: Yr.bundleType, version: Yr.version, rendererPackageName: Yr.rendererPackageName, rendererConfig: Yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: l0.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
  return t = y4(t), t === null ? null : t.stateNode;
}, findFiberByHostInstance: Yr.findFiberByHostInstance || k5, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ai.isDisabled && ai.supportsFiber)
    try {
      la = ai.inject(z5), Ft = ai;
    } catch {
    }
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M5;
ft.createPortal = function(t, e) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ho(e))
    throw Error(D(200));
  return S5(t, e, null, r);
};
ft.createRoot = function(t, e) {
  if (!ho(t))
    throw Error(D(299));
  var r = !1, n = "", i = Qc;
  return e != null && (e.unstable_strictMode === !0 && (r = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = uo(t, 1, !1, null, null, r, !1, n, i), t[r0] = e.current, wn(t.nodeType === 8 ? t.parentNode : t), new fo(e);
};
ft.findDOMNode = function(t) {
  if (t == null)
    return null;
  if (t.nodeType === 1)
    return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(D(188)) : (t = Object.keys(t).join(","), Error(D(268, t)));
  return t = y4(e), t = t === null ? null : t.stateNode, t;
};
ft.flushSync = function(t) {
  return K0(t);
};
ft.hydrate = function(t, e, r) {
  if (!wa(e))
    throw Error(D(200));
  return xa(null, t, e, !0, r);
};
ft.hydrateRoot = function(t, e, r) {
  if (!ho(t))
    throw Error(D(405));
  var n = r != null && r.hydratedSources || null, i = !1, a = "", l = Qc;
  if (r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (a = r.identifierPrefix), r.onRecoverableError !== void 0 && (l = r.onRecoverableError)), e = Gc(e, null, t, 1, r ?? null, i, !1, a, l), t[r0] = e.current, wn(t), n)
    for (t = 0; t < n.length; t++)
      r = n[t], i = r._getVersion, i = i(r._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [r, i] : e.mutableSourceEagerHydrationData.push(
        r,
        i
      );
  return new ga(e);
};
ft.render = function(t, e, r) {
  if (!wa(e))
    throw Error(D(200));
  return xa(null, t, e, !1, r);
};
ft.unmountComponentAtNode = function(t) {
  if (!wa(t))
    throw Error(D(40));
  return t._reactRootContainer ? (K0(function() {
    xa(null, null, t, !1, function() {
      t._reactRootContainer = null, t[r0] = null;
    });
  }), !0) : !1;
};
ft.unstable_batchedUpdates = ao;
ft.unstable_renderSubtreeIntoContainer = function(t, e, r, n) {
  if (!wa(r))
    throw Error(D(200));
  if (t == null || t._reactInternals === void 0)
    throw Error(D(38));
  return xa(t, e, r, !1, n);
};
ft.version = "18.2.0-next-9e3b772b8-20220608";
function Xc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc);
    } catch (t) {
      console.error(t);
    }
}
Xc(), G1.exports = ft;
var C5 = G1.exports, Wu = C5;
gl.createRoot = Wu.createRoot, gl.hydrateRoot = Wu.hydrateRoot;
var T5 = "Invariant failed";
function vr(t, e) {
  if (!t)
    throw new Error(T5);
}
function E5(t, e) {
  var r = Z.useRef(null), n = Z.useRef(null);
  n.current = e;
  var i = Z.useRef(null);
  Z.useEffect(function() {
    a();
  });
  var a = Z.useCallback(function() {
    var l = i.current, o = n.current, u = l || (o ? o instanceof Element ? o : o.current : null);
    r.current && r.current.element === u && r.current.subscriber === t || (r.current && r.current.cleanup && r.current.cleanup(), r.current = {
      element: u,
      subscriber: t,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: u ? t(u) : void 0
    });
  }, [t]);
  return Z.useEffect(function() {
    return function() {
      r.current && r.current.cleanup && (r.current.cleanup(), r.current = null);
    };
  }, []), Z.useCallback(function(l) {
    i.current = l, a();
  }, [a]);
}
function Yu(t, e, r) {
  return t[e] ? t[e][0] ? t[e][0][r] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    t[e][r]
  ) : e === "contentBoxSize" ? t.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
function N5(t) {
  t === void 0 && (t = {});
  var e = t.onResize, r = Z.useRef(void 0);
  r.current = e;
  var n = t.round || Math.round, i = Z.useRef(), a = Z.useState({
    width: void 0,
    height: void 0
  }), l = a[0], o = a[1], u = Z.useRef(!1);
  Z.useEffect(function() {
    return u.current = !1, function() {
      u.current = !0;
    };
  }, []);
  var d = Z.useRef({
    width: void 0,
    height: void 0
  }), h = E5(Z.useCallback(function(m) {
    return (!i.current || i.current.box !== t.box || i.current.round !== n) && (i.current = {
      box: t.box,
      round: n,
      instance: new ResizeObserver(function(p) {
        var S = p[0], M = t.box === "border-box" ? "borderBoxSize" : t.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", z = Yu(S, M, "inlineSize"), A = Yu(S, M, "blockSize"), y = z ? n(z) : void 0, v = A ? n(A) : void 0;
        if (d.current.width !== y || d.current.height !== v) {
          var x = {
            width: y,
            height: v
          };
          d.current.width = y, d.current.height = v, r.current ? r.current(x) : u.current || o(x);
        }
      })
    }), i.current.instance.observe(m, {
      box: t.box
    }), function() {
      i.current && i.current.instance.unobserve(m);
    };
  }, [t.box, n]), t.ref);
  return Z.useMemo(function() {
    return {
      ref: h,
      width: l.width,
      height: l.height
    };
  }, [h, l.width, l.height]);
}
function A5(t, e, r) {
  return Math.max(e, Math.min(t, r));
}
const de = {
  toVector(t, e) {
    return t === void 0 && (t = e), Array.isArray(t) ? t : [t, t];
  },
  add(t, e) {
    return [t[0] + e[0], t[1] + e[1]];
  },
  sub(t, e) {
    return [t[0] - e[0], t[1] - e[1]];
  },
  addTo(t, e) {
    t[0] += e[0], t[1] += e[1];
  },
  subTo(t, e) {
    t[0] -= e[0], t[1] -= e[1];
  }
};
function Ku(t, e, r) {
  return e === 0 || Math.abs(e) === 1 / 0 ? Math.pow(t, r * 5) : t * e * r / (e + r * t);
}
function Gu(t, e, r, n = 0.15) {
  return n === 0 ? A5(t, e, r) : t < e ? -Ku(e - t, r - e, n) + e : t > r ? +Ku(t - r, r - e, n) + r : t;
}
function _5(t, [e, r], [n, i]) {
  const [[a, l], [o, u]] = t;
  return [Gu(e, a, l, n), Gu(r, o, u, i)];
}
function P5(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function D5(t) {
  var e = P5(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Te(t, e, r) {
  return e = D5(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Qu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ge(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Qu(Object(r), !0).forEach(function(n) {
      Te(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Qu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
const Zc = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function Xu(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
const R5 = ["enter", "leave"];
function I5(t = !1, e) {
  return t && !R5.includes(e);
}
function L5(t, e = "", r = !1) {
  const n = Zc[t], i = n && n[e] || e;
  return "on" + Xu(t) + Xu(i) + (I5(r, i) ? "Capture" : "");
}
const B5 = ["gotpointercapture", "lostpointercapture"];
function O5(t) {
  let e = t.substring(2).toLowerCase();
  const r = !!~e.indexOf("passive");
  r && (e = e.replace("passive", ""));
  const n = B5.includes(e) ? "capturecapture" : "capture", i = !!~e.indexOf(n);
  return i && (e = e.replace("capture", "")), {
    device: e,
    capture: i,
    passive: r
  };
}
function F5(t, e = "") {
  const r = Zc[t], n = r && r[e] || e;
  return t + n;
}
function Sa(t) {
  return "touches" in t;
}
function Jc(t) {
  return Sa(t) ? "touch" : "pointerType" in t ? t.pointerType : "mouse";
}
function H5(t) {
  return Array.from(t.touches).filter((e) => {
    var r, n;
    return e.target === t.currentTarget || ((r = t.currentTarget) === null || r === void 0 || (n = r.contains) === null || n === void 0 ? void 0 : n.call(r, e.target));
  });
}
function j5(t) {
  return t.type === "touchend" || t.type === "touchcancel" ? t.changedTouches : t.targetTouches;
}
function e2(t) {
  return Sa(t) ? j5(t)[0] : t;
}
function fs(t, e) {
  try {
    const r = e.clientX - t.clientX, n = e.clientY - t.clientY, i = (e.clientX + t.clientX) / 2, a = (e.clientY + t.clientY) / 2, l = Math.hypot(r, n);
    return {
      angle: -(Math.atan2(r, n) * 180) / Math.PI,
      distance: l,
      origin: [i, a]
    };
  } catch {
  }
  return null;
}
function V5(t) {
  return H5(t).map((e) => e.identifier);
}
function Zu(t, e) {
  const [r, n] = Array.from(t.touches).filter((i) => e.includes(i.identifier));
  return fs(r, n);
}
function al(t) {
  const e = e2(t);
  return Sa(t) ? e.identifier : e.pointerId;
}
function _r(t) {
  const e = e2(t);
  return [e.clientX, e.clientY];
}
const Ju = 40, e1 = 800;
function t2(t) {
  let {
    deltaX: e,
    deltaY: r,
    deltaMode: n
  } = t;
  return n === 1 ? (e *= Ju, r *= Ju) : n === 2 && (e *= e1, r *= e1), [e, r];
}
function U5(t) {
  var e, r;
  const {
    scrollX: n,
    scrollY: i,
    scrollLeft: a,
    scrollTop: l
  } = t.currentTarget;
  return [(e = n ?? a) !== null && e !== void 0 ? e : 0, (r = i ?? l) !== null && r !== void 0 ? r : 0];
}
function $5(t) {
  const e = {};
  if ("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t) {
    const {
      shiftKey: r,
      altKey: n,
      metaKey: i,
      ctrlKey: a
    } = t;
    Object.assign(e, {
      shiftKey: r,
      altKey: n,
      metaKey: i,
      ctrlKey: a
    });
  }
  return e;
}
function Zi(t, ...e) {
  return typeof t == "function" ? t(...e) : t;
}
function q5() {
}
function W5(...t) {
  return t.length === 0 ? q5 : t.length === 1 ? t[0] : function() {
    let e;
    for (const r of t)
      e = r.apply(this, arguments) || e;
    return e;
  };
}
function t1(t, e) {
  return Object.assign({}, e, t || {});
}
const Y5 = 32;
class r2 {
  constructor(e, r, n) {
    this.ctrl = e, this.args = r, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(e) {
    this.ctrl.state[this.key] = e;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state: e,
      shared: r,
      ingKey: n,
      args: i
    } = this;
    r[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], e.args = i, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0;
  }
  start(e) {
    const r = this.state, n = this.config;
    r._active || (this.reset(), this.computeInitial(), r._active = !0, r.target = e.target, r.currentTarget = e.currentTarget, r.lastOffset = n.from ? Zi(n.from, r) : r.offset, r.offset = r.lastOffset, r.startTime = r.timeStamp = e.timeStamp);
  }
  computeValues(e) {
    const r = this.state;
    r._values = e, r.values = this.config.transform(e);
  }
  computeInitial() {
    const e = this.state;
    e._initial = e._values, e.initial = e.values;
  }
  compute(e) {
    const {
      state: r,
      config: n,
      shared: i
    } = this;
    r.args = this.args;
    let a = 0;
    if (e && (r.event = e, n.preventDefault && e.cancelable && r.event.preventDefault(), r.type = e.type, i.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, i.locked = !!document.pointerLockElement, Object.assign(i, $5(e)), i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0, a = e.timeStamp - r.timeStamp, r.timeStamp = e.timeStamp, r.elapsedTime = r.timeStamp - r.startTime), r._active) {
      const C = r._delta.map(Math.abs);
      de.addTo(r._distance, C);
    }
    this.axisIntent && this.axisIntent(e);
    const [l, o] = r._movement, [u, d] = n.threshold, {
      _step: h,
      values: m
    } = r;
    if (n.hasCustomTransform ? (h[0] === !1 && (h[0] = Math.abs(l) >= u && m[0]), h[1] === !1 && (h[1] = Math.abs(o) >= d && m[1])) : (h[0] === !1 && (h[0] = Math.abs(l) >= u && Math.sign(l) * u), h[1] === !1 && (h[1] = Math.abs(o) >= d && Math.sign(o) * d)), r.intentional = h[0] !== !1 || h[1] !== !1, !r.intentional)
      return;
    const p = [0, 0];
    if (n.hasCustomTransform) {
      const [C, N] = m;
      p[0] = h[0] !== !1 ? C - h[0] : 0, p[1] = h[1] !== !1 ? N - h[1] : 0;
    } else
      p[0] = h[0] !== !1 ? l - h[0] : 0, p[1] = h[1] !== !1 ? o - h[1] : 0;
    this.restrictToAxis && !r._blocked && this.restrictToAxis(p);
    const S = r.offset, M = r._active && !r._blocked || r.active;
    M && (r.first = r._active && !r.active, r.last = !r._active && r.active, r.active = i[this.ingKey] = r._active, e && (r.first && ("bounds" in n && (r._bounds = Zi(n.bounds, r)), this.setup && this.setup()), r.movement = p, this.computeOffset()));
    const [z, A] = r.offset, [[y, v], [x, E]] = r._bounds;
    r.overflow = [z < y ? -1 : z > v ? 1 : 0, A < x ? -1 : A > E ? 1 : 0], r._movementBound[0] = r.overflow[0] ? r._movementBound[0] === !1 ? r._movement[0] : r._movementBound[0] : !1, r._movementBound[1] = r.overflow[1] ? r._movementBound[1] === !1 ? r._movement[1] : r._movementBound[1] : !1;
    const k = r._active ? n.rubberband || [0, 0] : [0, 0];
    if (r.offset = _5(r._bounds, r.offset, k), r.delta = de.sub(r.offset, S), this.computeMovement(), M && (!r.last || a > Y5)) {
      r.delta = de.sub(r.offset, S);
      const C = r.delta.map(Math.abs);
      de.addTo(r.distance, C), r.direction = r.delta.map(Math.sign), r._direction = r._delta.map(Math.sign), !r.first && a > 0 && (r.velocity = [C[0] / a, C[1] / a], r.timeDelta = a);
    }
  }
  emit() {
    const e = this.state, r = this.shared, n = this.config;
    if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents)
      return;
    const i = this.handler(ge(ge(ge({}, r), e), {}, {
      [this.aliasKey]: e.values
    }));
    i !== void 0 && (e.memo = i);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function K5([t, e], r) {
  const n = Math.abs(t), i = Math.abs(e);
  if (n > i && n > r)
    return "x";
  if (i > n && i > r)
    return "y";
}
class In extends r2 {
  constructor(...e) {
    super(...e), Te(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = de.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = de.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(e) {
    const r = this.state, n = this.config;
    if (!r.axis && e) {
      const i = typeof n.axisThreshold == "object" ? n.axisThreshold[Jc(e)] : n.axisThreshold;
      r.axis = K5(r._movement, i);
    }
    r._blocked = (n.lockDirection || !!n.axis) && !r.axis || !!n.axis && n.axis !== r.axis;
  }
  restrictToAxis(e) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          e[1] = 0;
          break;
        case "y":
          e[0] = 0;
          break;
      }
  }
}
const G5 = (t) => t, r1 = 0.15, n2 = {
  enabled(t = !0) {
    return t;
  },
  eventOptions(t, e, r) {
    return ge(ge({}, r.shared.eventOptions), t);
  },
  preventDefault(t = !1) {
    return t;
  },
  triggerAllEvents(t = !1) {
    return t;
  },
  rubberband(t = 0) {
    switch (t) {
      case !0:
        return [r1, r1];
      case !1:
        return [0, 0];
      default:
        return de.toVector(t);
    }
  },
  from(t) {
    if (typeof t == "function")
      return t;
    if (t != null)
      return de.toVector(t);
  },
  transform(t, e, r) {
    const n = t || r.shared.transform;
    return this.hasCustomTransform = !!n, n || G5;
  },
  threshold(t) {
    return de.toVector(t, 0);
  }
}, Q5 = 0, Z0 = ge(ge({}, n2), {}, {
  axis(t, e, {
    axis: r
  }) {
    if (this.lockDirection = r === "lock", !this.lockDirection)
      return r;
  },
  axisThreshold(t = Q5) {
    return t;
  },
  bounds(t = {}) {
    if (typeof t == "function")
      return (a) => Z0.bounds(t(a));
    if ("current" in t)
      return () => t.current;
    if (typeof HTMLElement == "function" && t instanceof HTMLElement)
      return t;
    const {
      left: e = -1 / 0,
      right: r = 1 / 0,
      top: n = -1 / 0,
      bottom: i = 1 / 0
    } = t;
    return [[e, r], [n, i]];
  }
}), n1 = {
  ArrowRight: (t, e = 1) => [t * e, 0],
  ArrowLeft: (t, e = 1) => [-1 * t * e, 0],
  ArrowUp: (t, e = 1) => [0, -1 * t * e],
  ArrowDown: (t, e = 1) => [0, t * e]
};
class X5 extends In {
  constructor(...e) {
    super(...e), Te(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const e = this.state;
    e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this);
  }
  setup() {
    const e = this.state;
    if (e._bounds instanceof HTMLElement) {
      const r = e._bounds.getBoundingClientRect(), n = e.currentTarget.getBoundingClientRect(), i = {
        left: r.left - n.left + e.offset[0],
        right: r.right - n.right + e.offset[0],
        top: r.top - n.top + e.offset[1],
        bottom: r.bottom - n.bottom + e.offset[1]
      };
      e._bounds = Z0.bounds(i);
    }
  }
  cancel() {
    const e = this.state;
    e.canceled || (e.canceled = !0, e._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(e) {
    const r = this.config, n = this.state;
    if (e.buttons != null && (Array.isArray(r.pointerButtons) ? !r.pointerButtons.includes(e.buttons) : r.pointerButtons !== -1 && r.pointerButtons !== e.buttons))
      return;
    const i = this.ctrl.setEventIds(e);
    r.pointerCapture && e.target.setPointerCapture(e.pointerId), !(i && i.size > 1 && n._pointerActive) && (this.start(e), this.setupPointer(e), n._pointerId = al(e), n._pointerActive = !0, this.computeValues(_r(e)), this.computeInitial(), r.preventScrollAxis && Jc(e) !== "mouse" ? (n._active = !1, this.setupScrollPrevention(e)) : r.delay > 0 ? (this.setupDelayTrigger(e), r.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e));
  }
  startPointerDrag(e) {
    const r = this.state;
    r._active = !0, r._preventScroll = !0, r._delayed = !1, this.compute(e), this.emit();
  }
  pointerMove(e) {
    const r = this.state, n = this.config;
    if (!r._pointerActive)
      return;
    const i = al(e);
    if (r._pointerId !== void 0 && i !== r._pointerId)
      return;
    const a = _r(e);
    if (document.pointerLockElement === e.target ? r._delta = [e.movementX, e.movementY] : (r._delta = de.sub(a, r._values), this.computeValues(a)), de.addTo(r._movement, r._delta), this.compute(e), r._delayed && r.intentional) {
      this.timeoutStore.remove("dragDelay"), r.active = !1, this.startPointerDrag(e);
      return;
    }
    if (n.preventScrollAxis && !r._preventScroll)
      if (r.axis)
        if (r.axis === n.preventScrollAxis || n.preventScrollAxis === "xy") {
          r._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(e);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(e) {
    this.ctrl.setEventIds(e);
    try {
      this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId);
    } catch {
    }
    const r = this.state, n = this.config;
    if (!r._active || !r._pointerActive)
      return;
    const i = al(e);
    if (r._pointerId !== void 0 && i !== r._pointerId)
      return;
    this.state._pointerActive = !1, this.setActive(), this.compute(e);
    const [a, l] = r._distance;
    if (r.tap = a <= n.tapsThreshold && l <= n.tapsThreshold, r.tap && n.filterTaps)
      r._force = !0;
    else {
      const [o, u] = r._delta, [d, h] = r._movement, [m, p] = n.swipe.velocity, [S, M] = n.swipe.distance, z = n.swipe.duration;
      if (r.elapsedTime < z) {
        const A = Math.abs(o / r.timeDelta), y = Math.abs(u / r.timeDelta);
        A > m && Math.abs(d) > S && (r.swipe[0] = Math.sign(o)), y > p && Math.abs(h) > M && (r.swipe[1] = Math.sign(u));
      }
    }
    this.emit();
  }
  pointerClick(e) {
    !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation());
  }
  setupPointer(e) {
    const r = this.config, n = r.device;
    r.pointerLock && e.currentTarget.requestPointerLock(), r.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(e) {
    this.state._preventScroll && e.cancelable && e.preventDefault();
  }
  setupScrollPrevention(e) {
    this.state._preventScroll = !1, Z5(e);
    const r = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", r), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", r), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e);
  }
  setupDelayTrigger(e) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(e);
    }, this.config.delay);
  }
  keyDown(e) {
    const r = n1[e.key];
    if (r) {
      const n = this.state, i = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
      this.start(e), n._delta = r(this.config.keyboardDisplacement, i), n._keyboardActive = !0, de.addTo(n._movement, n._delta), this.compute(e), this.emit();
    }
  }
  keyUp(e) {
    e.key in n1 && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit());
  }
  bind(e) {
    const r = this.config.device;
    e(r, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(r, "change", this.pointerMove.bind(this)), e(r, "end", this.pointerUp.bind(this)), e(r, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function Z5(t) {
  "persist" in t && typeof t.persist == "function" && t.persist();
}
const Ln = typeof window < "u" && window.document && window.document.createElement;
function J5() {
  return Ln && "ontouchstart" in window;
}
function i1() {
  return J5() || Ln && window.navigator.maxTouchPoints > 1;
}
function e3() {
  return Ln && "onpointerdown" in window;
}
function t3() {
  return Ln && "exitPointerLock" in window.document;
}
function r3() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const wt = {
  isBrowser: Ln,
  gesture: r3(),
  touch: i1(),
  touchscreen: i1(),
  pointer: e3(),
  pointerLock: t3()
}, n3 = 250, i3 = 180, a3 = 0.5, l3 = 50, s3 = 250, o3 = 10, a1 = {
  mouse: 0,
  touch: 0,
  pen: 8
}, u3 = ge(ge({}, Z0), {}, {
  device(t, e, {
    pointer: {
      touch: r = !1,
      lock: n = !1,
      mouse: i = !1
    } = {}
  }) {
    return this.pointerLock = n && wt.pointerLock, wt.touch && r ? "touch" : this.pointerLock ? "mouse" : wt.pointer && !i ? "pointer" : wt.touch ? "touch" : "mouse";
  },
  preventScrollAxis(t, e, {
    preventScroll: r
  }) {
    if (this.preventScrollDelay = typeof r == "number" ? r : r || r === void 0 && t ? n3 : void 0, !(!wt.touchscreen || r === !1))
      return t || (r !== void 0 ? "y" : void 0);
  },
  pointerCapture(t, e, {
    pointer: {
      capture: r = !0,
      buttons: n = 1,
      keys: i = !0
    } = {}
  }) {
    return this.pointerButtons = n, this.keys = i, !this.pointerLock && this.device === "pointer" && r;
  },
  threshold(t, e, {
    filterTaps: r = !1,
    tapsThreshold: n = 3,
    axis: i = void 0
  }) {
    const a = de.toVector(t, r ? n : i ? 1 : 0);
    return this.filterTaps = r, this.tapsThreshold = n, a;
  },
  swipe({
    velocity: t = a3,
    distance: e = l3,
    duration: r = s3
  } = {}) {
    return {
      velocity: this.transform(de.toVector(t)),
      distance: this.transform(de.toVector(e)),
      duration: r
    };
  },
  delay(t = 0) {
    switch (t) {
      case !0:
        return i3;
      case !1:
        return 0;
      default:
        return t;
    }
  },
  axisThreshold(t) {
    return t ? ge(ge({}, a1), t) : a1;
  },
  keyboardDisplacement(t = o3) {
    return t;
  }
});
function i2(t) {
  const [e, r] = t.overflow, [n, i] = t._delta, [a, l] = t._direction;
  (e < 0 && n > 0 && a < 0 || e > 0 && n < 0 && a > 0) && (t._movement[0] = t._movementBound[0]), (r < 0 && i > 0 && l < 0 || r > 0 && i < 0 && l > 0) && (t._movement[1] = t._movementBound[1]);
}
const c3 = 30, f3 = 100;
class d3 extends r2 {
  constructor(...e) {
    super(...e), Te(this, "ingKey", "pinching"), Te(this, "aliasKey", "da");
  }
  init() {
    this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = /* @__PURE__ */ new Map();
  }
  reset() {
    super.reset();
    const e = this.state;
    e._touchIds = [], e.canceled = !1, e.cancel = this.cancel.bind(this), e.turns = 0;
  }
  computeOffset() {
    const {
      type: e,
      movement: r,
      lastOffset: n
    } = this.state;
    e === "wheel" ? this.state.offset = de.add(r, n) : this.state.offset = [(1 + r[0]) * n[0], r[1] + n[1]];
  }
  computeMovement() {
    const {
      offset: e,
      lastOffset: r
    } = this.state;
    this.state.movement = [e[0] / r[0], e[1] - r[1]];
  }
  axisIntent() {
    const e = this.state, [r, n] = e._movement;
    if (!e.axis) {
      const i = Math.abs(r) * c3 - Math.abs(n);
      i < 0 ? e.axis = "angle" : i > 0 && (e.axis = "scale");
    }
  }
  restrictToAxis(e) {
    this.config.lockDirection && (this.state.axis === "scale" ? e[1] = 0 : this.state.axis === "angle" && (e[0] = 0));
  }
  cancel() {
    const e = this.state;
    e.canceled || setTimeout(() => {
      e.canceled = !0, e._active = !1, this.compute(), this.emit();
    }, 0);
  }
  touchStart(e) {
    this.ctrl.setEventIds(e);
    const r = this.state, n = this.ctrl.touchIds;
    if (r._active && r._touchIds.every((a) => n.has(a)) || n.size < 2)
      return;
    this.start(e), r._touchIds = Array.from(n).slice(0, 2);
    const i = Zu(e, r._touchIds);
    i && this.pinchStart(e, i);
  }
  pointerStart(e) {
    if (e.buttons != null && e.buttons % 2 !== 1)
      return;
    this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
    const r = this.state, n = r._pointerEvents, i = this.ctrl.pointerIds;
    if (r._active && Array.from(n.keys()).every((l) => i.has(l)) || (n.size < 2 && n.set(e.pointerId, e), r._pointerEvents.size < 2))
      return;
    this.start(e);
    const a = fs(...Array.from(n.values()));
    a && this.pinchStart(e, a);
  }
  pinchStart(e, r) {
    const n = this.state;
    n.origin = r.origin, this.computeValues([r.distance, r.angle]), this.computeInitial(), this.compute(e), this.emit();
  }
  touchMove(e) {
    if (!this.state._active)
      return;
    const r = Zu(e, this.state._touchIds);
    r && this.pinchMove(e, r);
  }
  pointerMove(e) {
    const r = this.state._pointerEvents;
    if (r.has(e.pointerId) && r.set(e.pointerId, e), !this.state._active)
      return;
    const n = fs(...Array.from(r.values()));
    n && this.pinchMove(e, n);
  }
  pinchMove(e, r) {
    const n = this.state, i = n._values[1], a = r.angle - i;
    let l = 0;
    Math.abs(a) > 270 && (l += Math.sign(a)), this.computeValues([r.distance, r.angle - 360 * l]), n.origin = r.origin, n.turns = l, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(e), this.emit();
  }
  touchEnd(e) {
    this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some((r) => !this.ctrl.touchIds.has(r)) && (this.state._active = !1, this.compute(e), this.emit());
  }
  pointerEnd(e) {
    const r = this.state;
    this.ctrl.setEventIds(e);
    try {
      e.target.releasePointerCapture(e.pointerId);
    } catch {
    }
    r._pointerEvents.has(e.pointerId) && r._pointerEvents.delete(e.pointerId), r._active && r._pointerEvents.size < 2 && (r._active = !1, this.compute(e), this.emit());
  }
  gestureStart(e) {
    e.cancelable && e.preventDefault();
    const r = this.state;
    r._active || (this.start(e), this.computeValues([e.scale, e.rotation]), r.origin = [e.clientX, e.clientY], this.compute(e), this.emit());
  }
  gestureMove(e) {
    if (e.cancelable && e.preventDefault(), !this.state._active)
      return;
    const r = this.state;
    this.computeValues([e.scale, e.rotation]), r.origin = [e.clientX, e.clientY];
    const n = r._movement;
    r._movement = [e.scale - 1, e.rotation], r._delta = de.sub(r._movement, n), this.compute(e), this.emit();
  }
  gestureEnd(e) {
    this.state._active && (this.state._active = !1, this.compute(e), this.emit());
  }
  wheel(e) {
    const r = this.config.modifierKey;
    r && !e[r] || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
  }
  wheelStart(e) {
    this.start(e), this.wheelChange(e);
  }
  wheelChange(e) {
    "uv" in e || e.cancelable && e.preventDefault();
    const n = this.state;
    n._delta = [-t2(e)[1] / f3 * n.offset[0], 0], de.addTo(n._movement, n._delta), i2(n), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(e) {
    const r = this.config.device;
    r && (e(r, "start", this[r + "Start"].bind(this)), e(r, "change", this[r + "Move"].bind(this)), e(r, "end", this[r + "End"].bind(this)), e(r, "cancel", this[r + "End"].bind(this)), e("lostPointerCapture", "", this[r + "End"].bind(this))), this.config.pinchOnWheel && e("wheel", "", this.wheel.bind(this), {
      passive: !1
    });
  }
}
const h3 = ge(ge({}, n2), {}, {
  device(t, e, {
    shared: r,
    pointer: {
      touch: n = !1
    } = {}
  }) {
    if (r.target && !wt.touch && wt.gesture)
      return "gesture";
    if (wt.touch && n)
      return "touch";
    if (wt.touchscreen) {
      if (wt.pointer)
        return "pointer";
      if (wt.touch)
        return "touch";
    }
  },
  bounds(t, e, {
    scaleBounds: r = {},
    angleBounds: n = {}
  }) {
    const i = (l) => {
      const o = t1(Zi(r, l), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [o.min, o.max];
    }, a = (l) => {
      const o = t1(Zi(n, l), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [o.min, o.max];
    };
    return typeof r != "function" && typeof n != "function" ? [i(), a()] : (l) => [i(l), a(l)];
  },
  threshold(t, e, r) {
    return this.lockDirection = r.axis === "lock", de.toVector(t, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(t) {
    return t === void 0 ? "ctrlKey" : t;
  },
  pinchOnWheel(t = !0) {
    return t;
  }
});
class m3 extends In {
  constructor(...e) {
    super(...e), Te(this, "ingKey", "moving");
  }
  move(e) {
    this.config.mouseOnly && e.pointerType !== "mouse" || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(e) {
    this.start(e), this.computeValues(_r(e)), this.compute(e), this.computeInitial(), this.emit();
  }
  moveChange(e) {
    if (!this.state._active)
      return;
    const r = _r(e), n = this.state;
    n._delta = de.sub(r, n._values), de.addTo(n._movement, n._delta), this.computeValues(r), this.compute(e), this.emit();
  }
  moveEnd(e) {
    this.state._active && (this.state._active = !1, this.compute(e), this.emit());
  }
  bind(e) {
    e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this));
  }
}
const p3 = ge(ge({}, Z0), {}, {
  mouseOnly: (t = !0) => t
});
class v3 extends In {
  constructor(...e) {
    super(...e), Te(this, "ingKey", "scrolling");
  }
  scroll(e) {
    this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(e) {
    e.cancelable && e.preventDefault();
    const r = this.state, n = U5(e);
    r._delta = de.sub(n, r._values), de.addTo(r._movement, r._delta), this.computeValues(n), this.compute(e), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(e) {
    e("scroll", "", this.scroll.bind(this));
  }
}
const y3 = Z0;
class g3 extends In {
  constructor(...e) {
    super(...e), Te(this, "ingKey", "wheeling");
  }
  wheel(e) {
    this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(e) {
    const r = this.state;
    r._delta = t2(e), de.addTo(r._movement, r._delta), i2(r), this.compute(e), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(e) {
    e("wheel", "", this.wheel.bind(this));
  }
}
const w3 = Z0;
class x3 extends In {
  constructor(...e) {
    super(...e), Te(this, "ingKey", "hovering");
  }
  enter(e) {
    this.config.mouseOnly && e.pointerType !== "mouse" || (this.start(e), this.computeValues(_r(e)), this.compute(e), this.emit());
  }
  leave(e) {
    if (this.config.mouseOnly && e.pointerType !== "mouse")
      return;
    const r = this.state;
    if (!r._active)
      return;
    r._active = !1;
    const n = _r(e);
    r._movement = r._delta = de.sub(n, r._values), this.computeValues(n), this.compute(e), r.delta = r.movement, this.emit();
  }
  bind(e) {
    e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this));
  }
}
const S3 = ge(ge({}, Z0), {}, {
  mouseOnly: (t = !0) => t
}), mo = /* @__PURE__ */ new Map(), ds = /* @__PURE__ */ new Map();
function k3(t) {
  mo.set(t.key, t.engine), ds.set(t.key, t.resolver);
}
const b3 = {
  key: "drag",
  engine: X5,
  resolver: u3
}, M3 = {
  key: "hover",
  engine: x3,
  resolver: S3
}, z3 = {
  key: "move",
  engine: m3,
  resolver: p3
}, C3 = {
  key: "pinch",
  engine: d3,
  resolver: h3
}, T3 = {
  key: "scroll",
  engine: v3,
  resolver: y3
}, E3 = {
  key: "wheel",
  engine: g3,
  resolver: w3
};
function N3(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function A3(t, e) {
  if (t == null)
    return {};
  var r = N3(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
const _3 = {
  target(t) {
    if (t)
      return () => "current" in t ? t.current : t;
  },
  enabled(t = !0) {
    return t;
  },
  window(t = wt.isBrowser ? window : void 0) {
    return t;
  },
  eventOptions({
    passive: t = !0,
    capture: e = !1
  } = {}) {
    return {
      passive: t,
      capture: e
    };
  },
  transform(t) {
    return t;
  }
}, P3 = ["target", "eventOptions", "window", "enabled", "transform"];
function Ci(t = {}, e) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    switch (typeof i) {
      case "function":
        r[n] = i.call(r, t[n], n, t);
        break;
      case "object":
        r[n] = Ci(t[n], i);
        break;
      case "boolean":
        i && (r[n] = t[n]);
        break;
    }
  return r;
}
function D3(t, e, r = {}) {
  const n = t, {
    target: i,
    eventOptions: a,
    window: l,
    enabled: o,
    transform: u
  } = n, d = A3(n, P3);
  if (r.shared = Ci({
    target: i,
    eventOptions: a,
    window: l,
    enabled: o,
    transform: u
  }, _3), e) {
    const h = ds.get(e);
    r[e] = Ci(ge({
      shared: r.shared
    }, d), h);
  } else
    for (const h in d) {
      const m = ds.get(h);
      m && (r[h] = Ci(ge({
        shared: r.shared
      }, d[h]), m));
    }
  return r;
}
class a2 {
  constructor(e, r) {
    Te(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = e, this._gestureKey = r;
  }
  add(e, r, n, i, a) {
    const l = this._listeners, o = F5(r, n), u = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, d = ge(ge({}, u), a);
    e.addEventListener(o, i, d);
    const h = () => {
      e.removeEventListener(o, i, d), l.delete(h);
    };
    return l.add(h), h;
  }
  clean() {
    this._listeners.forEach((e) => e()), this._listeners.clear();
  }
}
class R3 {
  constructor() {
    Te(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(e, r, n = 140, ...i) {
    this.remove(e), this._timeouts.set(e, window.setTimeout(r, n, ...i));
  }
  remove(e) {
    const r = this._timeouts.get(e);
    r && window.clearTimeout(r);
  }
  clean() {
    this._timeouts.forEach((e) => void window.clearTimeout(e)), this._timeouts.clear();
  }
}
class I3 {
  constructor(e) {
    Te(this, "gestures", /* @__PURE__ */ new Set()), Te(this, "_targetEventStore", new a2(this)), Te(this, "gestureEventStores", {}), Te(this, "gestureTimeoutStores", {}), Te(this, "handlers", {}), Te(this, "config", {}), Te(this, "pointerIds", /* @__PURE__ */ new Set()), Te(this, "touchIds", /* @__PURE__ */ new Set()), Te(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), L3(this, e);
  }
  setEventIds(e) {
    if (Sa(e))
      return this.touchIds = new Set(V5(e)), this.touchIds;
    if ("pointerId" in e)
      return e.type === "pointerup" || e.type === "pointercancel" ? this.pointerIds.delete(e.pointerId) : e.type === "pointerdown" && this.pointerIds.add(e.pointerId), this.pointerIds;
  }
  applyHandlers(e, r) {
    this.handlers = e, this.nativeHandlers = r;
  }
  applyConfig(e, r) {
    this.config = D3(e, r, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const e of this.gestures)
      this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean();
  }
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  bind(...e) {
    const r = this.config.shared, n = {};
    let i;
    if (!(r.target && (i = r.target(), !i))) {
      if (r.enabled) {
        for (const l of this.gestures) {
          const o = this.config[l], u = l1(n, o.eventOptions, !!i);
          if (o.enabled) {
            const d = mo.get(l);
            new d(this, e, l).bind(u);
          }
        }
        const a = l1(n, r.eventOptions, !!i);
        for (const l in this.nativeHandlers)
          a(l, "", (o) => this.nativeHandlers[l](ge(ge({}, this.state.shared), {}, {
            event: o,
            args: e
          })), void 0, !0);
      }
      for (const a in n)
        n[a] = W5(...n[a]);
      if (!i)
        return n;
      for (const a in n) {
        const {
          device: l,
          capture: o,
          passive: u
        } = O5(a);
        this._targetEventStore.add(i, l, "", n[a], {
          capture: o,
          passive: u
        });
      }
    }
  }
}
function tr(t, e) {
  t.gestures.add(e), t.gestureEventStores[e] = new a2(t, e), t.gestureTimeoutStores[e] = new R3();
}
function L3(t, e) {
  e.drag && tr(t, "drag"), e.wheel && tr(t, "wheel"), e.scroll && tr(t, "scroll"), e.move && tr(t, "move"), e.pinch && tr(t, "pinch"), e.hover && tr(t, "hover");
}
const l1 = (t, e, r) => (n, i, a, l = {}, o = !1) => {
  var u, d;
  const h = (u = l.capture) !== null && u !== void 0 ? u : e.capture, m = (d = l.passive) !== null && d !== void 0 ? d : e.passive;
  let p = o ? n : L5(n, i, h);
  r && m && (p += "Passive"), t[p] = t[p] || [], t[p].push(a);
}, B3 = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function O3(t) {
  const e = {}, r = {}, n = /* @__PURE__ */ new Set();
  for (let i in t)
    B3.test(i) ? (n.add(RegExp.lastMatch), r[i] = t[i]) : e[i] = t[i];
  return [r, e, n];
}
function rr(t, e, r, n, i, a) {
  if (!t.has(r) || !mo.has(n))
    return;
  const l = r + "Start", o = r + "End", u = (d) => {
    let h;
    return d.first && l in e && e[l](d), r in e && (h = e[r](d)), d.last && o in e && e[o](d), h;
  };
  i[n] = u, a[n] = a[n] || {};
}
function F3(t, e) {
  const [r, n, i] = O3(t), a = {};
  return rr(i, r, "onDrag", "drag", a, e), rr(i, r, "onWheel", "wheel", a, e), rr(i, r, "onScroll", "scroll", a, e), rr(i, r, "onPinch", "pinch", a, e), rr(i, r, "onMove", "move", a, e), rr(i, r, "onHover", "hover", a, e), {
    handlers: a,
    config: e,
    nativeHandlers: n
  };
}
function H3(t, e = {}, r, n) {
  const i = pi.useMemo(() => new I3(t), []);
  if (i.applyHandlers(t, n), i.applyConfig(e, r), pi.useEffect(i.effect.bind(i)), pi.useEffect(() => i.clean.bind(i), []), e.target === void 0)
    return i.bind.bind(i);
}
function j3(t) {
  return t.forEach(k3), function(r, n) {
    const {
      handlers: i,
      nativeHandlers: a,
      config: l
    } = F3(r, n || {});
    return H3(i, l, void 0, a);
  };
}
function V3(t, e) {
  return j3([b3, C3, T3, E3, z3, M3])(t, e || {});
}
class po {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, r, n) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = r, this.end = n;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, r) {
    return r ? !e || !e.loc || !r.loc || e.loc.lexer !== r.loc.lexer ? null : new po(e.loc.lexer, e.loc.start, r.loc.end) : e && e.loc;
  }
}
class vo {
  // don't expand the token
  // used in \noexpand
  constructor(e, r) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = r;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, r) {
    return new vo(r, po.range(this, e));
  }
}
class G {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, r) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var n = "KaTeX parse error: " + e, i, a, l = r && r.loc;
    if (l && l.start <= l.end) {
      var o = l.lexer.input;
      i = l.start, a = l.end, i === o.length ? n += " at end of input: " : n += " at position " + (i + 1) + ": ";
      var u = o.slice(i, a).replace(/[^]/g, "$&̲"), d;
      i > 15 ? d = "…" + o.slice(i - 15, i) : d = o.slice(0, i);
      var h;
      a + 15 < o.length ? h = o.slice(a, a + 15) + "…" : h = o.slice(a), n += d + u + h;
    }
    var m = new Error(n);
    return m.name = "ParseError", m.__proto__ = G.prototype, m.position = i, i != null && a != null && (m.length = a - i), m.rawMessage = e, m;
  }
}
G.prototype.__proto__ = Error.prototype;
var U3 = function(e, r) {
  return e.indexOf(r) !== -1;
}, $3 = function(e, r) {
  return e === void 0 ? r : e;
}, q3 = /([A-Z])/g, W3 = function(e) {
  return e.replace(q3, "-$1").toLowerCase();
}, Y3 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, K3 = /[&><"']/g;
function G3(t) {
  return String(t).replace(K3, (e) => Y3[e]);
}
var l2 = function t(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? t(e.body[0]) : e : e.type === "font" ? t(e.body) : e;
}, Q3 = function(e) {
  var r = l2(e);
  return r.type === "mathord" || r.type === "textord" || r.type === "atom";
}, X3 = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, Z3 = function(e) {
  var r = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
  return r != null ? r[1] : "_relative";
}, X = {
  contains: U3,
  deflt: $3,
  escape: G3,
  hyphenate: W3,
  getBaseElem: l2,
  isCharacterBox: Q3,
  protocolFromUrl: Z3
};
class u0 {
  constructor(e, r, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = r, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Bt[J3[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Bt[e6[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Bt[t6[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Bt[r6[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Bt[n6[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Bt[i6[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var yo = 0, Ji = 1, br = 2, Jt = 3, En = 4, St = 5, Pr = 6, Ye = 7, Bt = [new u0(yo, 0, !1), new u0(Ji, 0, !0), new u0(br, 1, !1), new u0(Jt, 1, !0), new u0(En, 2, !1), new u0(St, 2, !0), new u0(Pr, 3, !1), new u0(Ye, 3, !0)], J3 = [En, St, En, St, Pr, Ye, Pr, Ye], e6 = [St, St, St, St, Ye, Ye, Ye, Ye], t6 = [br, Jt, En, St, Pr, Ye, Pr, Ye], r6 = [Jt, Jt, St, St, Ye, Ye, Ye, Ye], n6 = [Ji, Ji, Jt, Jt, St, St, Ye, Ye], i6 = [yo, Ji, br, Jt, br, Jt, br, Jt], Y = {
  DISPLAY: Bt[yo],
  TEXT: Bt[br],
  SCRIPT: Bt[En],
  SCRIPTSCRIPT: Bt[Pr]
}, hs = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function a6(t) {
  for (var e = 0; e < hs.length; e++)
    for (var r = hs[e], n = 0; n < r.blocks.length; n++) {
      var i = r.blocks[n];
      if (t >= i[0] && t <= i[1])
        return r.name;
    }
  return null;
}
var Ti = [];
hs.forEach((t) => t.blocks.forEach((e) => Ti.push(...e)));
function l6(t) {
  for (var e = 0; e < Ti.length; e += 2)
    if (t >= Ti[e] && t <= Ti[e + 1])
      return !0;
  return !1;
}
var nr = 80, s6 = function(e, r) {
  return "M95," + (622 + e + r) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + r + "h400000v" + (40 + e) + "h-400000z";
}, o6 = function(e, r) {
  return "M263," + (601 + e + r) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + r + "h400000v" + (40 + e) + "h-400000z";
}, u6 = function(e, r) {
  return "M983 " + (10 + e + r) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + r + "h400000v" + (40 + e) + "h-400000z";
}, c6 = function(e, r) {
  return "M424," + (2398 + e + r) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + r + `
h400000v` + (40 + e) + "h-400000z";
}, f6 = function(e, r) {
  return "M473," + (2713 + e + r) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + r + "h400000v" + (40 + e) + "H1017.7z";
}, d6 = function(e) {
  var r = e / 2;
  return "M400000 " + e + " H0 L" + r + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, h6 = function(e, r, n) {
  var i = n - 54 - r - e;
  return "M702 " + (e + r) + "H400000" + (40 + e) + `
H742v` + i + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + r + "H400000v" + (40 + e) + "H742z";
}, m6 = function(e, r, n) {
  r = 1e3 * r;
  var i = "";
  switch (e) {
    case "sqrtMain":
      i = s6(r, nr);
      break;
    case "sqrtSize1":
      i = o6(r, nr);
      break;
    case "sqrtSize2":
      i = u6(r, nr);
      break;
    case "sqrtSize3":
      i = c6(r, nr);
      break;
    case "sqrtSize4":
      i = f6(r, nr);
      break;
    case "sqrtTall":
      i = h6(r, nr, n);
  }
  return i;
}, p6 = function(e, r) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + r + " H291z M291 0 H417 V" + r + " H291z";
    case "∣":
      return "M145 0 H188 V" + r + " H145z M145 0 H188 V" + r + " H145z";
    case "∥":
      return "M145 0 H188 V" + r + " H145z M145 0 H188 V" + r + " H145z" + ("M367 0 H410 V" + r + " H367z M367 0 H410 V" + r + " H367z");
    case "⎟":
      return "M457 0 H583 V" + r + " H457z M457 0 H583 V" + r + " H457z";
    case "⎢":
      return "M319 0 H403 V" + r + " H319z M319 0 H403 V" + r + " H319z";
    case "⎥":
      return "M263 0 H347 V" + r + " H263z M263 0 H347 V" + r + " H263z";
    case "⎪":
      return "M384 0 H504 V" + r + " H384z M384 0 H504 V" + r + " H384z";
    case "⏐":
      return "M312 0 H355 V" + r + " H312z M312 0 H355 V" + r + " H312z";
    case "‖":
      return "M257 0 H300 V" + r + " H257z M257 0 H300 V" + r + " H257z" + ("M478 0 H521 V" + r + " H478z M478 0 H521 V" + r + " H478z");
    default:
      return "";
  }
}, s1 = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, v6 = function(e, r) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + r + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + r + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + r + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + r + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + r + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -r + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + r + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + r + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -r + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + r + ` v585 h43z
M367 15 v585 v` + r + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -r + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + r + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + r + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + r + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + r + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + r + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + r + ` v602 h84z
M403 1759 V0 H319 V1759 v` + r + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + r + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + r + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (r + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (r + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (r + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (r + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class Bn {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return X.contains(this.classes, e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), r = 0; r < this.children.length; r++)
      e.appendChild(this.children[r].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (r) => r.toText();
    return this.children.map(e).join("");
  }
}
var Xt = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, o1 = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function go(t, e, r) {
  if (!Xt[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = t.charCodeAt(0), i = Xt[e][n];
  if (!i && t[0] in o1 && (n = o1[t[0]].charCodeAt(0), i = Xt[e][n]), !i && r === "text" && l6(n) && (i = Xt[e][77]), i)
    return {
      depth: i[0],
      height: i[1],
      italic: i[2],
      skew: i[3],
      width: i[4]
    };
}
var ms = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, y6 = {
  ex: !0,
  em: !0,
  mu: !0
}, g6 = function(e) {
  return typeof e != "string" && (e = e.unit), e in ms || e in y6 || e === "ex";
}, ye = function(e, r) {
  var n;
  if (e.unit in ms)
    n = ms[e.unit] / r.fontMetrics().ptPerEm / r.sizeMultiplier;
  else if (e.unit === "mu")
    n = r.fontMetrics().cssEmPerMu;
  else {
    var i;
    if (r.style.isTight() ? i = r.havingStyle(r.style.text()) : i = r, e.unit === "ex")
      n = i.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = i.fontMetrics().quad;
    else
      throw new G("Invalid unit: '" + e.unit + "'");
    i !== r && (n *= i.sizeMultiplier / r.sizeMultiplier);
  }
  return Math.min(e.number * n, r.maxSize);
}, I = function(e) {
  return +e.toFixed(4) + "em";
}, T0 = function(e) {
  return e.filter((r) => r).join(" ");
}, s2 = function(e, r, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, r) {
    r.style.isTight() && this.classes.push("mtight");
    var i = r.getColor();
    i && (this.style.color = i);
  }
}, o2 = function(e) {
  var r = document.createElement(e);
  r.className = T0(this.classes);
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (r.style[n] = this.style[n]);
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && r.setAttribute(i, this.attributes[i]);
  for (var a = 0; a < this.children.length; a++)
    r.appendChild(this.children[a].toNode());
  return r;
}, u2 = function(e) {
  var r = "<" + e;
  this.classes.length && (r += ' class="' + X.escape(T0(this.classes)) + '"');
  var n = "";
  for (var i in this.style)
    this.style.hasOwnProperty(i) && (n += X.hyphenate(i) + ":" + this.style[i] + ";");
  n && (r += ' style="' + X.escape(n) + '"');
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && (r += " " + a + '="' + X.escape(this.attributes[a]) + '"');
  r += ">";
  for (var l = 0; l < this.children.length; l++)
    r += this.children[l].toMarkup();
  return r += "</" + e + ">", r;
};
class ka {
  constructor(e, r, n, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, s2.call(this, e, n, i), this.children = r || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, r) {
    this.attributes[e] = r;
  }
  hasClass(e) {
    return X.contains(this.classes, e);
  }
  toNode() {
    return o2.call(this, "span");
  }
  toMarkup() {
    return u2.call(this, "span");
  }
}
class c2 {
  constructor(e, r, n, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, s2.call(this, r, i), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, r) {
    this.attributes[e] = r;
  }
  hasClass(e) {
    return X.contains(this.classes, e);
  }
  toNode() {
    return o2.call(this, "a");
  }
  toMarkup() {
    return u2.call(this, "a");
  }
}
class w6 {
  constructor(e, r, n) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = r, this.src = e, this.classes = ["mord"], this.style = n;
  }
  hasClass(e) {
    return X.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (e.style[r] = this.style[r]);
    return e;
  }
  toMarkup() {
    var e = "<img  src='" + this.src + " 'alt='" + this.alt + "' ", r = "";
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (r += X.hyphenate(n) + ":" + this.style[n] + ";");
    return r && (e += ' style="' + X.escape(r) + '"'), e += "'/>", e;
  }
}
var x6 = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class jt {
  constructor(e, r, n, i, a, l, o, u) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = r || 0, this.depth = n || 0, this.italic = i || 0, this.skew = a || 0, this.width = l || 0, this.classes = o || [], this.style = u || {}, this.maxFontSize = 0;
    var d = a6(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = x6[this.text]);
  }
  hasClass(e) {
    return X.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), r = null;
    this.italic > 0 && (r = document.createElement("span"), r.style.marginRight = I(this.italic)), this.classes.length > 0 && (r = r || document.createElement("span"), r.className = T0(this.classes));
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (r = r || document.createElement("span"), r.style[n] = this.style[n]);
    return r ? (r.appendChild(e), r) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, r = "<span";
    this.classes.length && (e = !0, r += ' class="', r += X.escape(T0(this.classes)), r += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
    for (var i in this.style)
      this.style.hasOwnProperty(i) && (n += X.hyphenate(i) + ":" + this.style[i] + ";");
    n && (e = !0, r += ' style="' + X.escape(n) + '"');
    var a = X.escape(this.text);
    return e ? (r += ">", r += a, r += "</span>", r) : a;
  }
}
class E0 {
  constructor(e, r) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = r || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", r = document.createElementNS(e, "svg");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && r.setAttribute(n, this.attributes[n]);
    for (var i = 0; i < this.children.length; i++)
      r.appendChild(this.children[i].toNode());
    return r;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + "='" + this.attributes[r] + "'");
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class G0 {
  constructor(e, r) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = r;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", r = document.createElementNS(e, "path");
    return this.alternate ? r.setAttribute("d", this.alternate) : r.setAttribute("d", s1[this.pathName]), r;
  }
  toMarkup() {
    return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + s1[this.pathName] + "'/>";
  }
}
class u1 {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", r = document.createElementNS(e, "line");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && r.setAttribute(n, this.attributes[n]);
    return r;
  }
  toMarkup() {
    var e = "<line";
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + "='" + this.attributes[r] + "'");
    return e += "/>", e;
  }
}
function c1(t) {
  if (t instanceof jt)
    return t;
  throw new Error("Expected symbolNode but got " + String(t) + ".");
}
function S6(t) {
  if (t instanceof ka)
    return t;
  throw new Error("Expected span<HtmlDomNode> but got " + String(t) + ".");
}
var k6 = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, Be = {
  math: {},
  text: {}
};
function s(t, e, r, n, i, a) {
  Be[t][i] = {
    font: e,
    group: r,
    replace: n
  }, a && n && (Be[t][n] = Be[t][i]);
}
var c = "math", P = "text", f = "main", g = "ams", me = "accent-token", H = "bin", Xe = "close", Or = "inner", W = "mathord", Ne = "op-token", ht = "open", ba = "punct", w = "rel", s0 = "spacing", b = "textord";
s(c, f, w, "≡", "\\equiv", !0);
s(c, f, w, "≺", "\\prec", !0);
s(c, f, w, "≻", "\\succ", !0);
s(c, f, w, "∼", "\\sim", !0);
s(c, f, w, "⊥", "\\perp");
s(c, f, w, "⪯", "\\preceq", !0);
s(c, f, w, "⪰", "\\succeq", !0);
s(c, f, w, "≃", "\\simeq", !0);
s(c, f, w, "∣", "\\mid", !0);
s(c, f, w, "≪", "\\ll", !0);
s(c, f, w, "≫", "\\gg", !0);
s(c, f, w, "≍", "\\asymp", !0);
s(c, f, w, "∥", "\\parallel");
s(c, f, w, "⋈", "\\bowtie", !0);
s(c, f, w, "⌣", "\\smile", !0);
s(c, f, w, "⊑", "\\sqsubseteq", !0);
s(c, f, w, "⊒", "\\sqsupseteq", !0);
s(c, f, w, "≐", "\\doteq", !0);
s(c, f, w, "⌢", "\\frown", !0);
s(c, f, w, "∋", "\\ni", !0);
s(c, f, w, "∝", "\\propto", !0);
s(c, f, w, "⊢", "\\vdash", !0);
s(c, f, w, "⊣", "\\dashv", !0);
s(c, f, w, "∋", "\\owns");
s(c, f, ba, ".", "\\ldotp");
s(c, f, ba, "⋅", "\\cdotp");
s(c, f, b, "#", "\\#");
s(P, f, b, "#", "\\#");
s(c, f, b, "&", "\\&");
s(P, f, b, "&", "\\&");
s(c, f, b, "ℵ", "\\aleph", !0);
s(c, f, b, "∀", "\\forall", !0);
s(c, f, b, "ℏ", "\\hbar", !0);
s(c, f, b, "∃", "\\exists", !0);
s(c, f, b, "∇", "\\nabla", !0);
s(c, f, b, "♭", "\\flat", !0);
s(c, f, b, "ℓ", "\\ell", !0);
s(c, f, b, "♮", "\\natural", !0);
s(c, f, b, "♣", "\\clubsuit", !0);
s(c, f, b, "℘", "\\wp", !0);
s(c, f, b, "♯", "\\sharp", !0);
s(c, f, b, "♢", "\\diamondsuit", !0);
s(c, f, b, "ℜ", "\\Re", !0);
s(c, f, b, "♡", "\\heartsuit", !0);
s(c, f, b, "ℑ", "\\Im", !0);
s(c, f, b, "♠", "\\spadesuit", !0);
s(c, f, b, "§", "\\S", !0);
s(P, f, b, "§", "\\S");
s(c, f, b, "¶", "\\P", !0);
s(P, f, b, "¶", "\\P");
s(c, f, b, "†", "\\dag");
s(P, f, b, "†", "\\dag");
s(P, f, b, "†", "\\textdagger");
s(c, f, b, "‡", "\\ddag");
s(P, f, b, "‡", "\\ddag");
s(P, f, b, "‡", "\\textdaggerdbl");
s(c, f, Xe, "⎱", "\\rmoustache", !0);
s(c, f, ht, "⎰", "\\lmoustache", !0);
s(c, f, Xe, "⟯", "\\rgroup", !0);
s(c, f, ht, "⟮", "\\lgroup", !0);
s(c, f, H, "∓", "\\mp", !0);
s(c, f, H, "⊖", "\\ominus", !0);
s(c, f, H, "⊎", "\\uplus", !0);
s(c, f, H, "⊓", "\\sqcap", !0);
s(c, f, H, "∗", "\\ast");
s(c, f, H, "⊔", "\\sqcup", !0);
s(c, f, H, "◯", "\\bigcirc", !0);
s(c, f, H, "∙", "\\bullet", !0);
s(c, f, H, "‡", "\\ddagger");
s(c, f, H, "≀", "\\wr", !0);
s(c, f, H, "⨿", "\\amalg");
s(c, f, H, "&", "\\And");
s(c, f, w, "⟵", "\\longleftarrow", !0);
s(c, f, w, "⇐", "\\Leftarrow", !0);
s(c, f, w, "⟸", "\\Longleftarrow", !0);
s(c, f, w, "⟶", "\\longrightarrow", !0);
s(c, f, w, "⇒", "\\Rightarrow", !0);
s(c, f, w, "⟹", "\\Longrightarrow", !0);
s(c, f, w, "↔", "\\leftrightarrow", !0);
s(c, f, w, "⟷", "\\longleftrightarrow", !0);
s(c, f, w, "⇔", "\\Leftrightarrow", !0);
s(c, f, w, "⟺", "\\Longleftrightarrow", !0);
s(c, f, w, "↦", "\\mapsto", !0);
s(c, f, w, "⟼", "\\longmapsto", !0);
s(c, f, w, "↗", "\\nearrow", !0);
s(c, f, w, "↩", "\\hookleftarrow", !0);
s(c, f, w, "↪", "\\hookrightarrow", !0);
s(c, f, w, "↘", "\\searrow", !0);
s(c, f, w, "↼", "\\leftharpoonup", !0);
s(c, f, w, "⇀", "\\rightharpoonup", !0);
s(c, f, w, "↙", "\\swarrow", !0);
s(c, f, w, "↽", "\\leftharpoondown", !0);
s(c, f, w, "⇁", "\\rightharpoondown", !0);
s(c, f, w, "↖", "\\nwarrow", !0);
s(c, f, w, "⇌", "\\rightleftharpoons", !0);
s(c, g, w, "≮", "\\nless", !0);
s(c, g, w, "", "\\@nleqslant");
s(c, g, w, "", "\\@nleqq");
s(c, g, w, "⪇", "\\lneq", !0);
s(c, g, w, "≨", "\\lneqq", !0);
s(c, g, w, "", "\\@lvertneqq");
s(c, g, w, "⋦", "\\lnsim", !0);
s(c, g, w, "⪉", "\\lnapprox", !0);
s(c, g, w, "⊀", "\\nprec", !0);
s(c, g, w, "⋠", "\\npreceq", !0);
s(c, g, w, "⋨", "\\precnsim", !0);
s(c, g, w, "⪹", "\\precnapprox", !0);
s(c, g, w, "≁", "\\nsim", !0);
s(c, g, w, "", "\\@nshortmid");
s(c, g, w, "∤", "\\nmid", !0);
s(c, g, w, "⊬", "\\nvdash", !0);
s(c, g, w, "⊭", "\\nvDash", !0);
s(c, g, w, "⋪", "\\ntriangleleft");
s(c, g, w, "⋬", "\\ntrianglelefteq", !0);
s(c, g, w, "⊊", "\\subsetneq", !0);
s(c, g, w, "", "\\@varsubsetneq");
s(c, g, w, "⫋", "\\subsetneqq", !0);
s(c, g, w, "", "\\@varsubsetneqq");
s(c, g, w, "≯", "\\ngtr", !0);
s(c, g, w, "", "\\@ngeqslant");
s(c, g, w, "", "\\@ngeqq");
s(c, g, w, "⪈", "\\gneq", !0);
s(c, g, w, "≩", "\\gneqq", !0);
s(c, g, w, "", "\\@gvertneqq");
s(c, g, w, "⋧", "\\gnsim", !0);
s(c, g, w, "⪊", "\\gnapprox", !0);
s(c, g, w, "⊁", "\\nsucc", !0);
s(c, g, w, "⋡", "\\nsucceq", !0);
s(c, g, w, "⋩", "\\succnsim", !0);
s(c, g, w, "⪺", "\\succnapprox", !0);
s(c, g, w, "≆", "\\ncong", !0);
s(c, g, w, "", "\\@nshortparallel");
s(c, g, w, "∦", "\\nparallel", !0);
s(c, g, w, "⊯", "\\nVDash", !0);
s(c, g, w, "⋫", "\\ntriangleright");
s(c, g, w, "⋭", "\\ntrianglerighteq", !0);
s(c, g, w, "", "\\@nsupseteqq");
s(c, g, w, "⊋", "\\supsetneq", !0);
s(c, g, w, "", "\\@varsupsetneq");
s(c, g, w, "⫌", "\\supsetneqq", !0);
s(c, g, w, "", "\\@varsupsetneqq");
s(c, g, w, "⊮", "\\nVdash", !0);
s(c, g, w, "⪵", "\\precneqq", !0);
s(c, g, w, "⪶", "\\succneqq", !0);
s(c, g, w, "", "\\@nsubseteqq");
s(c, g, H, "⊴", "\\unlhd");
s(c, g, H, "⊵", "\\unrhd");
s(c, g, w, "↚", "\\nleftarrow", !0);
s(c, g, w, "↛", "\\nrightarrow", !0);
s(c, g, w, "⇍", "\\nLeftarrow", !0);
s(c, g, w, "⇏", "\\nRightarrow", !0);
s(c, g, w, "↮", "\\nleftrightarrow", !0);
s(c, g, w, "⇎", "\\nLeftrightarrow", !0);
s(c, g, w, "△", "\\vartriangle");
s(c, g, b, "ℏ", "\\hslash");
s(c, g, b, "▽", "\\triangledown");
s(c, g, b, "◊", "\\lozenge");
s(c, g, b, "Ⓢ", "\\circledS");
s(c, g, b, "®", "\\circledR");
s(P, g, b, "®", "\\circledR");
s(c, g, b, "∡", "\\measuredangle", !0);
s(c, g, b, "∄", "\\nexists");
s(c, g, b, "℧", "\\mho");
s(c, g, b, "Ⅎ", "\\Finv", !0);
s(c, g, b, "⅁", "\\Game", !0);
s(c, g, b, "‵", "\\backprime");
s(c, g, b, "▲", "\\blacktriangle");
s(c, g, b, "▼", "\\blacktriangledown");
s(c, g, b, "■", "\\blacksquare");
s(c, g, b, "⧫", "\\blacklozenge");
s(c, g, b, "★", "\\bigstar");
s(c, g, b, "∢", "\\sphericalangle", !0);
s(c, g, b, "∁", "\\complement", !0);
s(c, g, b, "ð", "\\eth", !0);
s(P, f, b, "ð", "ð");
s(c, g, b, "╱", "\\diagup");
s(c, g, b, "╲", "\\diagdown");
s(c, g, b, "□", "\\square");
s(c, g, b, "□", "\\Box");
s(c, g, b, "◊", "\\Diamond");
s(c, g, b, "¥", "\\yen", !0);
s(P, g, b, "¥", "\\yen", !0);
s(c, g, b, "✓", "\\checkmark", !0);
s(P, g, b, "✓", "\\checkmark");
s(c, g, b, "ℶ", "\\beth", !0);
s(c, g, b, "ℸ", "\\daleth", !0);
s(c, g, b, "ℷ", "\\gimel", !0);
s(c, g, b, "ϝ", "\\digamma", !0);
s(c, g, b, "ϰ", "\\varkappa");
s(c, g, ht, "┌", "\\@ulcorner", !0);
s(c, g, Xe, "┐", "\\@urcorner", !0);
s(c, g, ht, "└", "\\@llcorner", !0);
s(c, g, Xe, "┘", "\\@lrcorner", !0);
s(c, g, w, "≦", "\\leqq", !0);
s(c, g, w, "⩽", "\\leqslant", !0);
s(c, g, w, "⪕", "\\eqslantless", !0);
s(c, g, w, "≲", "\\lesssim", !0);
s(c, g, w, "⪅", "\\lessapprox", !0);
s(c, g, w, "≊", "\\approxeq", !0);
s(c, g, H, "⋖", "\\lessdot");
s(c, g, w, "⋘", "\\lll", !0);
s(c, g, w, "≶", "\\lessgtr", !0);
s(c, g, w, "⋚", "\\lesseqgtr", !0);
s(c, g, w, "⪋", "\\lesseqqgtr", !0);
s(c, g, w, "≑", "\\doteqdot");
s(c, g, w, "≓", "\\risingdotseq", !0);
s(c, g, w, "≒", "\\fallingdotseq", !0);
s(c, g, w, "∽", "\\backsim", !0);
s(c, g, w, "⋍", "\\backsimeq", !0);
s(c, g, w, "⫅", "\\subseteqq", !0);
s(c, g, w, "⋐", "\\Subset", !0);
s(c, g, w, "⊏", "\\sqsubset", !0);
s(c, g, w, "≼", "\\preccurlyeq", !0);
s(c, g, w, "⋞", "\\curlyeqprec", !0);
s(c, g, w, "≾", "\\precsim", !0);
s(c, g, w, "⪷", "\\precapprox", !0);
s(c, g, w, "⊲", "\\vartriangleleft");
s(c, g, w, "⊴", "\\trianglelefteq");
s(c, g, w, "⊨", "\\vDash", !0);
s(c, g, w, "⊪", "\\Vvdash", !0);
s(c, g, w, "⌣", "\\smallsmile");
s(c, g, w, "⌢", "\\smallfrown");
s(c, g, w, "≏", "\\bumpeq", !0);
s(c, g, w, "≎", "\\Bumpeq", !0);
s(c, g, w, "≧", "\\geqq", !0);
s(c, g, w, "⩾", "\\geqslant", !0);
s(c, g, w, "⪖", "\\eqslantgtr", !0);
s(c, g, w, "≳", "\\gtrsim", !0);
s(c, g, w, "⪆", "\\gtrapprox", !0);
s(c, g, H, "⋗", "\\gtrdot");
s(c, g, w, "⋙", "\\ggg", !0);
s(c, g, w, "≷", "\\gtrless", !0);
s(c, g, w, "⋛", "\\gtreqless", !0);
s(c, g, w, "⪌", "\\gtreqqless", !0);
s(c, g, w, "≖", "\\eqcirc", !0);
s(c, g, w, "≗", "\\circeq", !0);
s(c, g, w, "≜", "\\triangleq", !0);
s(c, g, w, "∼", "\\thicksim");
s(c, g, w, "≈", "\\thickapprox");
s(c, g, w, "⫆", "\\supseteqq", !0);
s(c, g, w, "⋑", "\\Supset", !0);
s(c, g, w, "⊐", "\\sqsupset", !0);
s(c, g, w, "≽", "\\succcurlyeq", !0);
s(c, g, w, "⋟", "\\curlyeqsucc", !0);
s(c, g, w, "≿", "\\succsim", !0);
s(c, g, w, "⪸", "\\succapprox", !0);
s(c, g, w, "⊳", "\\vartriangleright");
s(c, g, w, "⊵", "\\trianglerighteq");
s(c, g, w, "⊩", "\\Vdash", !0);
s(c, g, w, "∣", "\\shortmid");
s(c, g, w, "∥", "\\shortparallel");
s(c, g, w, "≬", "\\between", !0);
s(c, g, w, "⋔", "\\pitchfork", !0);
s(c, g, w, "∝", "\\varpropto");
s(c, g, w, "◀", "\\blacktriangleleft");
s(c, g, w, "∴", "\\therefore", !0);
s(c, g, w, "∍", "\\backepsilon");
s(c, g, w, "▶", "\\blacktriangleright");
s(c, g, w, "∵", "\\because", !0);
s(c, g, w, "⋘", "\\llless");
s(c, g, w, "⋙", "\\gggtr");
s(c, g, H, "⊲", "\\lhd");
s(c, g, H, "⊳", "\\rhd");
s(c, g, w, "≂", "\\eqsim", !0);
s(c, f, w, "⋈", "\\Join");
s(c, g, w, "≑", "\\Doteq", !0);
s(c, g, H, "∔", "\\dotplus", !0);
s(c, g, H, "∖", "\\smallsetminus");
s(c, g, H, "⋒", "\\Cap", !0);
s(c, g, H, "⋓", "\\Cup", !0);
s(c, g, H, "⩞", "\\doublebarwedge", !0);
s(c, g, H, "⊟", "\\boxminus", !0);
s(c, g, H, "⊞", "\\boxplus", !0);
s(c, g, H, "⋇", "\\divideontimes", !0);
s(c, g, H, "⋉", "\\ltimes", !0);
s(c, g, H, "⋊", "\\rtimes", !0);
s(c, g, H, "⋋", "\\leftthreetimes", !0);
s(c, g, H, "⋌", "\\rightthreetimes", !0);
s(c, g, H, "⋏", "\\curlywedge", !0);
s(c, g, H, "⋎", "\\curlyvee", !0);
s(c, g, H, "⊝", "\\circleddash", !0);
s(c, g, H, "⊛", "\\circledast", !0);
s(c, g, H, "⋅", "\\centerdot");
s(c, g, H, "⊺", "\\intercal", !0);
s(c, g, H, "⋒", "\\doublecap");
s(c, g, H, "⋓", "\\doublecup");
s(c, g, H, "⊠", "\\boxtimes", !0);
s(c, g, w, "⇢", "\\dashrightarrow", !0);
s(c, g, w, "⇠", "\\dashleftarrow", !0);
s(c, g, w, "⇇", "\\leftleftarrows", !0);
s(c, g, w, "⇆", "\\leftrightarrows", !0);
s(c, g, w, "⇚", "\\Lleftarrow", !0);
s(c, g, w, "↞", "\\twoheadleftarrow", !0);
s(c, g, w, "↢", "\\leftarrowtail", !0);
s(c, g, w, "↫", "\\looparrowleft", !0);
s(c, g, w, "⇋", "\\leftrightharpoons", !0);
s(c, g, w, "↶", "\\curvearrowleft", !0);
s(c, g, w, "↺", "\\circlearrowleft", !0);
s(c, g, w, "↰", "\\Lsh", !0);
s(c, g, w, "⇈", "\\upuparrows", !0);
s(c, g, w, "↿", "\\upharpoonleft", !0);
s(c, g, w, "⇃", "\\downharpoonleft", !0);
s(c, f, w, "⊶", "\\origof", !0);
s(c, f, w, "⊷", "\\imageof", !0);
s(c, g, w, "⊸", "\\multimap", !0);
s(c, g, w, "↭", "\\leftrightsquigarrow", !0);
s(c, g, w, "⇉", "\\rightrightarrows", !0);
s(c, g, w, "⇄", "\\rightleftarrows", !0);
s(c, g, w, "↠", "\\twoheadrightarrow", !0);
s(c, g, w, "↣", "\\rightarrowtail", !0);
s(c, g, w, "↬", "\\looparrowright", !0);
s(c, g, w, "↷", "\\curvearrowright", !0);
s(c, g, w, "↻", "\\circlearrowright", !0);
s(c, g, w, "↱", "\\Rsh", !0);
s(c, g, w, "⇊", "\\downdownarrows", !0);
s(c, g, w, "↾", "\\upharpoonright", !0);
s(c, g, w, "⇂", "\\downharpoonright", !0);
s(c, g, w, "⇝", "\\rightsquigarrow", !0);
s(c, g, w, "⇝", "\\leadsto");
s(c, g, w, "⇛", "\\Rrightarrow", !0);
s(c, g, w, "↾", "\\restriction");
s(c, f, b, "‘", "`");
s(c, f, b, "$", "\\$");
s(P, f, b, "$", "\\$");
s(P, f, b, "$", "\\textdollar");
s(c, f, b, "%", "\\%");
s(P, f, b, "%", "\\%");
s(c, f, b, "_", "\\_");
s(P, f, b, "_", "\\_");
s(P, f, b, "_", "\\textunderscore");
s(c, f, b, "∠", "\\angle", !0);
s(c, f, b, "∞", "\\infty", !0);
s(c, f, b, "′", "\\prime");
s(c, f, b, "△", "\\triangle");
s(c, f, b, "Γ", "\\Gamma", !0);
s(c, f, b, "Δ", "\\Delta", !0);
s(c, f, b, "Θ", "\\Theta", !0);
s(c, f, b, "Λ", "\\Lambda", !0);
s(c, f, b, "Ξ", "\\Xi", !0);
s(c, f, b, "Π", "\\Pi", !0);
s(c, f, b, "Σ", "\\Sigma", !0);
s(c, f, b, "Υ", "\\Upsilon", !0);
s(c, f, b, "Φ", "\\Phi", !0);
s(c, f, b, "Ψ", "\\Psi", !0);
s(c, f, b, "Ω", "\\Omega", !0);
s(c, f, b, "A", "Α");
s(c, f, b, "B", "Β");
s(c, f, b, "E", "Ε");
s(c, f, b, "Z", "Ζ");
s(c, f, b, "H", "Η");
s(c, f, b, "I", "Ι");
s(c, f, b, "K", "Κ");
s(c, f, b, "M", "Μ");
s(c, f, b, "N", "Ν");
s(c, f, b, "O", "Ο");
s(c, f, b, "P", "Ρ");
s(c, f, b, "T", "Τ");
s(c, f, b, "X", "Χ");
s(c, f, b, "¬", "\\neg", !0);
s(c, f, b, "¬", "\\lnot");
s(c, f, b, "⊤", "\\top");
s(c, f, b, "⊥", "\\bot");
s(c, f, b, "∅", "\\emptyset");
s(c, g, b, "∅", "\\varnothing");
s(c, f, W, "α", "\\alpha", !0);
s(c, f, W, "β", "\\beta", !0);
s(c, f, W, "γ", "\\gamma", !0);
s(c, f, W, "δ", "\\delta", !0);
s(c, f, W, "ϵ", "\\epsilon", !0);
s(c, f, W, "ζ", "\\zeta", !0);
s(c, f, W, "η", "\\eta", !0);
s(c, f, W, "θ", "\\theta", !0);
s(c, f, W, "ι", "\\iota", !0);
s(c, f, W, "κ", "\\kappa", !0);
s(c, f, W, "λ", "\\lambda", !0);
s(c, f, W, "μ", "\\mu", !0);
s(c, f, W, "ν", "\\nu", !0);
s(c, f, W, "ξ", "\\xi", !0);
s(c, f, W, "ο", "\\omicron", !0);
s(c, f, W, "π", "\\pi", !0);
s(c, f, W, "ρ", "\\rho", !0);
s(c, f, W, "σ", "\\sigma", !0);
s(c, f, W, "τ", "\\tau", !0);
s(c, f, W, "υ", "\\upsilon", !0);
s(c, f, W, "ϕ", "\\phi", !0);
s(c, f, W, "χ", "\\chi", !0);
s(c, f, W, "ψ", "\\psi", !0);
s(c, f, W, "ω", "\\omega", !0);
s(c, f, W, "ε", "\\varepsilon", !0);
s(c, f, W, "ϑ", "\\vartheta", !0);
s(c, f, W, "ϖ", "\\varpi", !0);
s(c, f, W, "ϱ", "\\varrho", !0);
s(c, f, W, "ς", "\\varsigma", !0);
s(c, f, W, "φ", "\\varphi", !0);
s(c, f, H, "∗", "*", !0);
s(c, f, H, "+", "+");
s(c, f, H, "−", "-", !0);
s(c, f, H, "⋅", "\\cdot", !0);
s(c, f, H, "∘", "\\circ", !0);
s(c, f, H, "÷", "\\div", !0);
s(c, f, H, "±", "\\pm", !0);
s(c, f, H, "×", "\\times", !0);
s(c, f, H, "∩", "\\cap", !0);
s(c, f, H, "∪", "\\cup", !0);
s(c, f, H, "∖", "\\setminus", !0);
s(c, f, H, "∧", "\\land");
s(c, f, H, "∨", "\\lor");
s(c, f, H, "∧", "\\wedge", !0);
s(c, f, H, "∨", "\\vee", !0);
s(c, f, b, "√", "\\surd");
s(c, f, ht, "⟨", "\\langle", !0);
s(c, f, ht, "∣", "\\lvert");
s(c, f, ht, "∥", "\\lVert");
s(c, f, Xe, "?", "?");
s(c, f, Xe, "!", "!");
s(c, f, Xe, "⟩", "\\rangle", !0);
s(c, f, Xe, "∣", "\\rvert");
s(c, f, Xe, "∥", "\\rVert");
s(c, f, w, "=", "=");
s(c, f, w, ":", ":");
s(c, f, w, "≈", "\\approx", !0);
s(c, f, w, "≅", "\\cong", !0);
s(c, f, w, "≥", "\\ge");
s(c, f, w, "≥", "\\geq", !0);
s(c, f, w, "←", "\\gets");
s(c, f, w, ">", "\\gt", !0);
s(c, f, w, "∈", "\\in", !0);
s(c, f, w, "", "\\@not");
s(c, f, w, "⊂", "\\subset", !0);
s(c, f, w, "⊃", "\\supset", !0);
s(c, f, w, "⊆", "\\subseteq", !0);
s(c, f, w, "⊇", "\\supseteq", !0);
s(c, g, w, "⊈", "\\nsubseteq", !0);
s(c, g, w, "⊉", "\\nsupseteq", !0);
s(c, f, w, "⊨", "\\models");
s(c, f, w, "←", "\\leftarrow", !0);
s(c, f, w, "≤", "\\le");
s(c, f, w, "≤", "\\leq", !0);
s(c, f, w, "<", "\\lt", !0);
s(c, f, w, "→", "\\rightarrow", !0);
s(c, f, w, "→", "\\to");
s(c, g, w, "≱", "\\ngeq", !0);
s(c, g, w, "≰", "\\nleq", !0);
s(c, f, s0, " ", "\\ ");
s(c, f, s0, " ", "\\space");
s(c, f, s0, " ", "\\nobreakspace");
s(P, f, s0, " ", "\\ ");
s(P, f, s0, " ", " ");
s(P, f, s0, " ", "\\space");
s(P, f, s0, " ", "\\nobreakspace");
s(c, f, s0, null, "\\nobreak");
s(c, f, s0, null, "\\allowbreak");
s(c, f, ba, ",", ",");
s(c, f, ba, ";", ";");
s(c, g, H, "⊼", "\\barwedge", !0);
s(c, g, H, "⊻", "\\veebar", !0);
s(c, f, H, "⊙", "\\odot", !0);
s(c, f, H, "⊕", "\\oplus", !0);
s(c, f, H, "⊗", "\\otimes", !0);
s(c, f, b, "∂", "\\partial", !0);
s(c, f, H, "⊘", "\\oslash", !0);
s(c, g, H, "⊚", "\\circledcirc", !0);
s(c, g, H, "⊡", "\\boxdot", !0);
s(c, f, H, "△", "\\bigtriangleup");
s(c, f, H, "▽", "\\bigtriangledown");
s(c, f, H, "†", "\\dagger");
s(c, f, H, "⋄", "\\diamond");
s(c, f, H, "⋆", "\\star");
s(c, f, H, "◃", "\\triangleleft");
s(c, f, H, "▹", "\\triangleright");
s(c, f, ht, "{", "\\{");
s(P, f, b, "{", "\\{");
s(P, f, b, "{", "\\textbraceleft");
s(c, f, Xe, "}", "\\}");
s(P, f, b, "}", "\\}");
s(P, f, b, "}", "\\textbraceright");
s(c, f, ht, "{", "\\lbrace");
s(c, f, Xe, "}", "\\rbrace");
s(c, f, ht, "[", "\\lbrack", !0);
s(P, f, b, "[", "\\lbrack", !0);
s(c, f, Xe, "]", "\\rbrack", !0);
s(P, f, b, "]", "\\rbrack", !0);
s(c, f, ht, "(", "\\lparen", !0);
s(c, f, Xe, ")", "\\rparen", !0);
s(P, f, b, "<", "\\textless", !0);
s(P, f, b, ">", "\\textgreater", !0);
s(c, f, ht, "⌊", "\\lfloor", !0);
s(c, f, Xe, "⌋", "\\rfloor", !0);
s(c, f, ht, "⌈", "\\lceil", !0);
s(c, f, Xe, "⌉", "\\rceil", !0);
s(c, f, b, "\\", "\\backslash");
s(c, f, b, "∣", "|");
s(c, f, b, "∣", "\\vert");
s(P, f, b, "|", "\\textbar", !0);
s(c, f, b, "∥", "\\|");
s(c, f, b, "∥", "\\Vert");
s(P, f, b, "∥", "\\textbardbl");
s(P, f, b, "~", "\\textasciitilde");
s(P, f, b, "\\", "\\textbackslash");
s(P, f, b, "^", "\\textasciicircum");
s(c, f, w, "↑", "\\uparrow", !0);
s(c, f, w, "⇑", "\\Uparrow", !0);
s(c, f, w, "↓", "\\downarrow", !0);
s(c, f, w, "⇓", "\\Downarrow", !0);
s(c, f, w, "↕", "\\updownarrow", !0);
s(c, f, w, "⇕", "\\Updownarrow", !0);
s(c, f, Ne, "∐", "\\coprod");
s(c, f, Ne, "⋁", "\\bigvee");
s(c, f, Ne, "⋀", "\\bigwedge");
s(c, f, Ne, "⨄", "\\biguplus");
s(c, f, Ne, "⋂", "\\bigcap");
s(c, f, Ne, "⋃", "\\bigcup");
s(c, f, Ne, "∫", "\\int");
s(c, f, Ne, "∫", "\\intop");
s(c, f, Ne, "∬", "\\iint");
s(c, f, Ne, "∭", "\\iiint");
s(c, f, Ne, "∏", "\\prod");
s(c, f, Ne, "∑", "\\sum");
s(c, f, Ne, "⨂", "\\bigotimes");
s(c, f, Ne, "⨁", "\\bigoplus");
s(c, f, Ne, "⨀", "\\bigodot");
s(c, f, Ne, "∮", "\\oint");
s(c, f, Ne, "∯", "\\oiint");
s(c, f, Ne, "∰", "\\oiiint");
s(c, f, Ne, "⨆", "\\bigsqcup");
s(c, f, Ne, "∫", "\\smallint");
s(P, f, Or, "…", "\\textellipsis");
s(c, f, Or, "…", "\\mathellipsis");
s(P, f, Or, "…", "\\ldots", !0);
s(c, f, Or, "…", "\\ldots", !0);
s(c, f, Or, "⋯", "\\@cdots", !0);
s(c, f, Or, "⋱", "\\ddots", !0);
s(c, f, b, "⋮", "\\varvdots");
s(c, f, me, "ˊ", "\\acute");
s(c, f, me, "ˋ", "\\grave");
s(c, f, me, "¨", "\\ddot");
s(c, f, me, "~", "\\tilde");
s(c, f, me, "ˉ", "\\bar");
s(c, f, me, "˘", "\\breve");
s(c, f, me, "ˇ", "\\check");
s(c, f, me, "^", "\\hat");
s(c, f, me, "⃗", "\\vec");
s(c, f, me, "˙", "\\dot");
s(c, f, me, "˚", "\\mathring");
s(c, f, W, "", "\\@imath");
s(c, f, W, "", "\\@jmath");
s(c, f, b, "ı", "ı");
s(c, f, b, "ȷ", "ȷ");
s(P, f, b, "ı", "\\i", !0);
s(P, f, b, "ȷ", "\\j", !0);
s(P, f, b, "ß", "\\ss", !0);
s(P, f, b, "æ", "\\ae", !0);
s(P, f, b, "œ", "\\oe", !0);
s(P, f, b, "ø", "\\o", !0);
s(P, f, b, "Æ", "\\AE", !0);
s(P, f, b, "Œ", "\\OE", !0);
s(P, f, b, "Ø", "\\O", !0);
s(P, f, me, "ˊ", "\\'");
s(P, f, me, "ˋ", "\\`");
s(P, f, me, "ˆ", "\\^");
s(P, f, me, "˜", "\\~");
s(P, f, me, "ˉ", "\\=");
s(P, f, me, "˘", "\\u");
s(P, f, me, "˙", "\\.");
s(P, f, me, "¸", "\\c");
s(P, f, me, "˚", "\\r");
s(P, f, me, "ˇ", "\\v");
s(P, f, me, "¨", '\\"');
s(P, f, me, "˝", "\\H");
s(P, f, me, "◯", "\\textcircled");
var f2 = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
s(P, f, b, "–", "--", !0);
s(P, f, b, "–", "\\textendash");
s(P, f, b, "—", "---", !0);
s(P, f, b, "—", "\\textemdash");
s(P, f, b, "‘", "`", !0);
s(P, f, b, "‘", "\\textquoteleft");
s(P, f, b, "’", "'", !0);
s(P, f, b, "’", "\\textquoteright");
s(P, f, b, "“", "``", !0);
s(P, f, b, "“", "\\textquotedblleft");
s(P, f, b, "”", "''", !0);
s(P, f, b, "”", "\\textquotedblright");
s(c, f, b, "°", "\\degree", !0);
s(P, f, b, "°", "\\degree");
s(P, f, b, "°", "\\textdegree", !0);
s(c, f, b, "£", "\\pounds");
s(c, f, b, "£", "\\mathsterling", !0);
s(P, f, b, "£", "\\pounds");
s(P, f, b, "£", "\\textsterling", !0);
s(c, g, b, "✠", "\\maltese");
s(P, g, b, "✠", "\\maltese");
var f1 = '0123456789/@."';
for (var ll = 0; ll < f1.length; ll++) {
  var d1 = f1.charAt(ll);
  s(c, f, b, d1, d1);
}
var h1 = '0123456789!@*()-=+";:?/.,';
for (var sl = 0; sl < h1.length; sl++) {
  var m1 = h1.charAt(sl);
  s(P, f, b, m1, m1);
}
var ea = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var ol = 0; ol < ea.length; ol++) {
  var li = ea.charAt(ol);
  s(c, f, W, li, li), s(P, f, b, li, li);
}
s(c, g, b, "C", "ℂ");
s(P, g, b, "C", "ℂ");
s(c, g, b, "H", "ℍ");
s(P, g, b, "H", "ℍ");
s(c, g, b, "N", "ℕ");
s(P, g, b, "N", "ℕ");
s(c, g, b, "P", "ℙ");
s(P, g, b, "P", "ℙ");
s(c, g, b, "Q", "ℚ");
s(P, g, b, "Q", "ℚ");
s(c, g, b, "R", "ℝ");
s(P, g, b, "R", "ℝ");
s(c, g, b, "Z", "ℤ");
s(P, g, b, "Z", "ℤ");
s(c, f, W, "h", "ℎ");
s(P, f, W, "h", "ℎ");
var Q = "";
for (var Ze = 0; Ze < ea.length; Ze++) {
  var Ce = ea.charAt(Ze);
  Q = String.fromCharCode(55349, 56320 + Ze), s(c, f, W, Ce, Q), s(P, f, b, Ce, Q), Q = String.fromCharCode(55349, 56372 + Ze), s(c, f, W, Ce, Q), s(P, f, b, Ce, Q), Q = String.fromCharCode(55349, 56424 + Ze), s(c, f, W, Ce, Q), s(P, f, b, Ce, Q), Q = String.fromCharCode(55349, 56580 + Ze), s(c, f, W, Ce, Q), s(P, f, b, Ce, Q), Q = String.fromCharCode(55349, 56736 + Ze), s(c, f, W, Ce, Q), s(P, f, b, Ce, Q), Q = String.fromCharCode(55349, 56788 + Ze), s(c, f, W, Ce, Q), s(P, f, b, Ce, Q), Q = String.fromCharCode(55349, 56840 + Ze), s(c, f, W, Ce, Q), s(P, f, b, Ce, Q), Q = String.fromCharCode(55349, 56944 + Ze), s(c, f, W, Ce, Q), s(P, f, b, Ce, Q), Ze < 26 && (Q = String.fromCharCode(55349, 56632 + Ze), s(c, f, W, Ce, Q), s(P, f, b, Ce, Q), Q = String.fromCharCode(55349, 56476 + Ze), s(c, f, W, Ce, Q), s(P, f, b, Ce, Q));
}
Q = String.fromCharCode(55349, 56668);
s(c, f, W, "k", Q);
s(P, f, b, "k", Q);
for (var R0 = 0; R0 < 10; R0++) {
  var c0 = R0.toString();
  Q = String.fromCharCode(55349, 57294 + R0), s(c, f, W, c0, Q), s(P, f, b, c0, Q), Q = String.fromCharCode(55349, 57314 + R0), s(c, f, W, c0, Q), s(P, f, b, c0, Q), Q = String.fromCharCode(55349, 57324 + R0), s(c, f, W, c0, Q), s(P, f, b, c0, Q), Q = String.fromCharCode(55349, 57334 + R0), s(c, f, W, c0, Q), s(P, f, b, c0, Q);
}
var p1 = "ÐÞþ";
for (var ul = 0; ul < p1.length; ul++) {
  var si = p1.charAt(ul);
  s(c, f, W, si, si), s(P, f, b, si, si);
}
var oi = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  ["", "", ""],
  // A-Z bold Fraktur No font metrics
  ["", "", ""],
  // a-z bold Fraktur.   No font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], v1 = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], b6 = function(e, r) {
  var n = e.charCodeAt(0), i = e.charCodeAt(1), a = (n - 55296) * 1024 + (i - 56320) + 65536, l = r === "math" ? 0 : 1;
  if (119808 <= a && a < 120484) {
    var o = Math.floor((a - 119808) / 26);
    return [oi[o][2], oi[o][l]];
  } else if (120782 <= a && a <= 120831) {
    var u = Math.floor((a - 120782) / 10);
    return [v1[u][2], v1[u][l]];
  } else {
    if (a === 120485 || a === 120486)
      return [oi[0][2], oi[0][l]];
    if (120486 < a && a < 120782)
      return ["", ""];
    throw new G("Unsupported character: " + e);
  }
}, Ma = function(e, r, n) {
  return Be[n][e] && Be[n][e].replace && (e = Be[n][e].replace), {
    value: e,
    metrics: go(e, r, n)
  };
}, Nt = function(e, r, n, i, a) {
  var l = Ma(e, r, n), o = l.metrics;
  e = l.value;
  var u;
  if (o) {
    var d = o.italic;
    (n === "text" || i && i.font === "mathit") && (d = 0), u = new jt(e, o.height, o.depth, d, o.skew, o.width, a);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + r + "' and mode '" + n + "'")), u = new jt(e, 0, 0, 0, 0, 0, a);
  if (i) {
    u.maxFontSize = i.sizeMultiplier, i.style.isTight() && u.classes.push("mtight");
    var h = i.getColor();
    h && (u.style.color = h);
  }
  return u;
}, M6 = function(e, r, n, i) {
  return i === void 0 && (i = []), n.font === "boldsymbol" && Ma(e, "Main-Bold", r).metrics ? Nt(e, "Main-Bold", r, n, i.concat(["mathbf"])) : e === "\\" || Be[r][e].font === "main" ? Nt(e, "Main-Regular", r, n, i) : Nt(e, "AMS-Regular", r, n, i.concat(["amsrm"]));
}, z6 = function(e, r, n, i, a) {
  return a !== "textord" && Ma(e, "Math-BoldItalic", r).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, C6 = function(e, r, n) {
  var i = e.mode, a = e.text, l = ["mord"], o = i === "math" || i === "text" && r.font, u = o ? r.font : r.fontFamily;
  if (a.charCodeAt(0) === 55349) {
    var [d, h] = b6(a, i);
    return Nt(a, d, i, r, l.concat(h));
  } else if (u) {
    var m, p;
    if (u === "boldsymbol") {
      var S = z6(a, i, r, l, n);
      m = S.fontName, p = [S.fontClass];
    } else
      o ? (m = m2[u].fontName, p = [u]) : (m = ui(u, r.fontWeight, r.fontShape), p = [u, r.fontWeight, r.fontShape]);
    if (Ma(a, m, i).metrics)
      return Nt(a, m, i, r, l.concat(p));
    if (f2.hasOwnProperty(a) && m.slice(0, 10) === "Typewriter") {
      for (var M = [], z = 0; z < a.length; z++)
        M.push(Nt(a[z], m, i, r, l.concat(p)));
      return h2(M);
    }
  }
  if (n === "mathord")
    return Nt(a, "Math-Italic", i, r, l.concat(["mathnormal"]));
  if (n === "textord") {
    var A = Be[i][a] && Be[i][a].font;
    if (A === "ams") {
      var y = ui("amsrm", r.fontWeight, r.fontShape);
      return Nt(a, y, i, r, l.concat("amsrm", r.fontWeight, r.fontShape));
    } else if (A === "main" || !A) {
      var v = ui("textrm", r.fontWeight, r.fontShape);
      return Nt(a, v, i, r, l.concat(r.fontWeight, r.fontShape));
    } else {
      var x = ui(A, r.fontWeight, r.fontShape);
      return Nt(a, x, i, r, l.concat(x, r.fontWeight, r.fontShape));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, T6 = (t, e) => {
  if (T0(t.classes) !== T0(e.classes) || t.skew !== e.skew || t.maxFontSize !== e.maxFontSize)
    return !1;
  if (t.classes.length === 1) {
    var r = t.classes[0];
    if (r === "mbin" || r === "mord")
      return !1;
  }
  for (var n in t.style)
    if (t.style.hasOwnProperty(n) && t.style[n] !== e.style[n])
      return !1;
  for (var i in e.style)
    if (e.style.hasOwnProperty(i) && t.style[i] !== e.style[i])
      return !1;
  return !0;
}, E6 = (t) => {
  for (var e = 0; e < t.length - 1; e++) {
    var r = t[e], n = t[e + 1];
    r instanceof jt && n instanceof jt && T6(r, n) && (r.text += n.text, r.height = Math.max(r.height, n.height), r.depth = Math.max(r.depth, n.depth), r.italic = n.italic, t.splice(e + 1, 1), e--);
  }
  return t;
}, wo = function(e) {
  for (var r = 0, n = 0, i = 0, a = 0; a < e.children.length; a++) {
    var l = e.children[a];
    l.height > r && (r = l.height), l.depth > n && (n = l.depth), l.maxFontSize > i && (i = l.maxFontSize);
  }
  e.height = r, e.depth = n, e.maxFontSize = i;
}, Je = function(e, r, n, i) {
  var a = new ka(e, r, n, i);
  return wo(a), a;
}, d2 = (t, e, r, n) => new ka(t, e, r, n), N6 = function(e, r, n) {
  var i = Je([e], [], r);
  return i.height = Math.max(n || r.fontMetrics().defaultRuleThickness, r.minRuleThickness), i.style.borderBottomWidth = I(i.height), i.maxFontSize = 1, i;
}, A6 = function(e, r, n, i) {
  var a = new c2(e, r, n, i);
  return wo(a), a;
}, h2 = function(e) {
  var r = new Bn(e);
  return wo(r), r;
}, _6 = function(e, r) {
  return e instanceof Bn ? Je([], [e], r) : e;
}, P6 = function(e) {
  if (e.positionType === "individualShift") {
    for (var r = e.children, n = [r[0]], i = -r[0].shift - r[0].elem.depth, a = i, l = 1; l < r.length; l++) {
      var o = -r[l].shift - a - r[l].elem.depth, u = o - (r[l - 1].elem.height + r[l - 1].elem.depth);
      a = a + o, n.push({
        type: "kern",
        size: u
      }), n.push(r[l]);
    }
    return {
      children: n,
      depth: i
    };
  }
  var d;
  if (e.positionType === "top") {
    for (var h = e.positionData, m = 0; m < e.children.length; m++) {
      var p = e.children[m];
      h -= p.type === "kern" ? p.size : p.elem.height + p.elem.depth;
    }
    d = h;
  } else if (e.positionType === "bottom")
    d = -e.positionData;
  else {
    var S = e.children[0];
    if (S.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      d = -S.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      d = -S.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: d
  };
}, D6 = function(e, r) {
  for (var {
    children: n,
    depth: i
  } = P6(e), a = 0, l = 0; l < n.length; l++) {
    var o = n[l];
    if (o.type === "elem") {
      var u = o.elem;
      a = Math.max(a, u.maxFontSize, u.height);
    }
  }
  a += 2;
  var d = Je(["pstrut"], []);
  d.style.height = I(a);
  for (var h = [], m = i, p = i, S = i, M = 0; M < n.length; M++) {
    var z = n[M];
    if (z.type === "kern")
      S += z.size;
    else {
      var A = z.elem, y = z.wrapperClasses || [], v = z.wrapperStyle || {}, x = Je(y, [d, A], void 0, v);
      x.style.top = I(-a - S - A.depth), z.marginLeft && (x.style.marginLeft = z.marginLeft), z.marginRight && (x.style.marginRight = z.marginRight), h.push(x), S += A.height + A.depth;
    }
    m = Math.min(m, S), p = Math.max(p, S);
  }
  var E = Je(["vlist"], h);
  E.style.height = I(p);
  var k;
  if (m < 0) {
    var C = Je([], []), N = Je(["vlist"], [C]);
    N.style.height = I(-m);
    var _ = Je(["vlist-s"], [new jt("​")]);
    k = [Je(["vlist-r"], [E, _]), Je(["vlist-r"], [N])];
  } else
    k = [Je(["vlist-r"], [E])];
  var F = Je(["vlist-t"], k);
  return k.length === 2 && F.classes.push("vlist-t2"), F.height = p, F.depth = -m, F;
}, R6 = (t, e) => {
  var r = Je(["mspace"], [], e), n = ye(t, e);
  return r.style.marginRight = I(n), r;
}, ui = function(e, r, n) {
  var i = "";
  switch (e) {
    case "amsrm":
      i = "AMS";
      break;
    case "textrm":
      i = "Main";
      break;
    case "textsf":
      i = "SansSerif";
      break;
    case "texttt":
      i = "Typewriter";
      break;
    default:
      i = e;
  }
  var a;
  return r === "textbf" && n === "textit" ? a = "BoldItalic" : r === "textbf" ? a = "Bold" : r === "textit" ? a = "Italic" : a = "Regular", i + "-" + a;
}, m2 = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, p2 = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, I6 = function(e, r) {
  var [n, i, a] = p2[e], l = new G0(n), o = new E0([l], {
    width: I(i),
    height: I(a),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + I(i),
    viewBox: "0 0 " + 1e3 * i + " " + 1e3 * a,
    preserveAspectRatio: "xMinYMin"
  }), u = d2(["overlay"], [o], r);
  return u.height = a, u.style.height = I(a), u.style.width = I(i), u;
}, T = {
  fontMap: m2,
  makeSymbol: Nt,
  mathsym: M6,
  makeSpan: Je,
  makeSvgSpan: d2,
  makeLineSpan: N6,
  makeAnchor: A6,
  makeFragment: h2,
  wrapFragment: _6,
  makeVList: D6,
  makeOrd: C6,
  makeGlue: R6,
  staticSvg: I6,
  svgData: p2,
  tryCombineChars: E6
}, pe = {
  number: 3,
  unit: "mu"
}, I0 = {
  number: 4,
  unit: "mu"
}, Wt = {
  number: 5,
  unit: "mu"
}, L6 = {
  mord: {
    mop: pe,
    mbin: I0,
    mrel: Wt,
    minner: pe
  },
  mop: {
    mord: pe,
    mop: pe,
    mrel: Wt,
    minner: pe
  },
  mbin: {
    mord: I0,
    mop: I0,
    mopen: I0,
    minner: I0
  },
  mrel: {
    mord: Wt,
    mop: Wt,
    mopen: Wt,
    minner: Wt
  },
  mopen: {},
  mclose: {
    mop: pe,
    mbin: I0,
    mrel: Wt,
    minner: pe
  },
  mpunct: {
    mord: pe,
    mop: pe,
    mrel: Wt,
    mopen: pe,
    mclose: pe,
    mpunct: pe,
    minner: pe
  },
  minner: {
    mord: pe,
    mop: pe,
    mbin: I0,
    mrel: Wt,
    mopen: pe,
    mpunct: pe,
    minner: pe
  }
}, B6 = {
  mord: {
    mop: pe
  },
  mop: {
    mord: pe,
    mop: pe
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: pe
  },
  mpunct: {},
  minner: {
    mop: pe
  }
}, O6 = {}, ta = {}, ra = {};
function O(t) {
  for (var {
    type: e,
    names: r,
    props: n,
    handler: i,
    htmlBuilder: a,
    mathmlBuilder: l
  } = t, o = {
    type: e,
    numArgs: n.numArgs,
    argTypes: n.argTypes,
    allowedInArgument: !!n.allowedInArgument,
    allowedInText: !!n.allowedInText,
    allowedInMath: n.allowedInMath === void 0 ? !0 : n.allowedInMath,
    numOptionalArgs: n.numOptionalArgs || 0,
    infix: !!n.infix,
    primitive: !!n.primitive,
    handler: i
  }, u = 0; u < r.length; ++u)
    O6[r[u]] = o;
  e && (a && (ta[e] = a), l && (ra[e] = l));
}
function J0(t) {
  var {
    type: e,
    htmlBuilder: r,
    mathmlBuilder: n
  } = t;
  O({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: r,
    mathmlBuilder: n
  });
}
var na = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, be = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Dr = T.makeSpan, F6 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], H6 = ["rightmost", "mrel", "mclose", "mpunct"], j6 = {
  display: Y.DISPLAY,
  text: Y.TEXT,
  script: Y.SCRIPT,
  scriptscript: Y.SCRIPTSCRIPT
}, V6 = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, Fe = function(e, r, n, i) {
  i === void 0 && (i = [null, null]);
  for (var a = [], l = 0; l < e.length; l++) {
    var o = ae(e[l], r);
    if (o instanceof Bn) {
      var u = o.children;
      a.push(...u);
    } else
      a.push(o);
  }
  if (T.tryCombineChars(a), !n)
    return a;
  var d = r;
  if (e.length === 1) {
    var h = e[0];
    h.type === "sizing" ? d = r.havingSize(h.size) : h.type === "styling" && (d = r.havingStyle(j6[h.style]));
  }
  var m = Dr([i[0] || "leftmost"], [], r), p = Dr([i[1] || "rightmost"], [], r), S = n === "root";
  return y1(a, (M, z) => {
    var A = z.classes[0], y = M.classes[0];
    A === "mbin" && X.contains(H6, y) ? z.classes[0] = "mord" : y === "mbin" && X.contains(F6, A) && (M.classes[0] = "mord");
  }, {
    node: m
  }, p, S), y1(a, (M, z) => {
    var A = ps(z), y = ps(M), v = A && y ? M.hasClass("mtight") ? B6[A][y] : L6[A][y] : null;
    if (v)
      return T.makeGlue(v, d);
  }, {
    node: m
  }, p, S), a;
}, y1 = function t(e, r, n, i, a) {
  i && e.push(i);
  for (var l = 0; l < e.length; l++) {
    var o = e[l], u = v2(o);
    if (u) {
      t(u.children, r, n, null, a);
      continue;
    }
    var d = !o.hasClass("mspace");
    if (d) {
      var h = r(o, n.node);
      h && (n.insertAfter ? n.insertAfter(h) : (e.unshift(h), l++));
    }
    d ? n.node = o : a && o.hasClass("newline") && (n.node = Dr(["leftmost"])), n.insertAfter = ((m) => (p) => {
      e.splice(m + 1, 0, p), l++;
    })(l);
  }
  i && e.pop();
}, v2 = function(e) {
  return e instanceof Bn || e instanceof c2 || e instanceof ka && e.hasClass("enclosing") ? e : null;
}, U6 = function t(e, r) {
  var n = v2(e);
  if (n) {
    var i = n.children;
    if (i.length) {
      if (r === "right")
        return t(i[i.length - 1], "right");
      if (r === "left")
        return t(i[0], "left");
    }
  }
  return e;
}, ps = function(e, r) {
  return e ? (r && (e = U6(e, r)), V6[e.classes[0]] || null) : null;
}, Nn = function(e, r) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return Dr(r.concat(n));
}, ae = function(e, r, n) {
  if (!e)
    return Dr();
  if (ta[e.type]) {
    var i = ta[e.type](e, r);
    if (n && r.size !== n.size) {
      i = Dr(r.sizingClasses(n), [i], r);
      var a = r.sizeMultiplier / n.sizeMultiplier;
      i.height *= a, i.depth *= a;
    }
    return i;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function y2(t) {
  return new Bn(t);
}
class _t {
  constructor(e, r, n) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = r || [], this.classes = n || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, r) {
    this.attributes[e] = r;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
    this.classes.length > 0 && (e.className = T0(this.classes));
    for (var n = 0; n < this.children.length; n++)
      e.appendChild(this.children[n].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="', e += X.escape(this.attributes[r]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + X.escape(T0(this.classes)) + '"'), e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class un {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return X.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class $6 {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", I(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + I(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var R = {
  MathNode: _t,
  TextNode: un,
  SpaceNode: $6,
  newDocumentFragment: y2
}, zt = function(e, r, n) {
  return Be[r][e] && Be[r][e].replace && e.charCodeAt(0) !== 55349 && !(f2.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = Be[r][e].replace), new R.TextNode(e);
}, xo = function(e) {
  return e.length === 1 ? e[0] : new R.MathNode("mrow", e);
}, So = function(e, r) {
  if (r.fontFamily === "texttt")
    return "monospace";
  if (r.fontFamily === "textsf")
    return r.fontShape === "textit" && r.fontWeight === "textbf" ? "sans-serif-bold-italic" : r.fontShape === "textit" ? "sans-serif-italic" : r.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (r.fontShape === "textit" && r.fontWeight === "textbf")
    return "bold-italic";
  if (r.fontShape === "textit")
    return "italic";
  if (r.fontWeight === "textbf")
    return "bold";
  var n = r.font;
  if (!n || n === "mathnormal")
    return null;
  var i = e.mode;
  if (n === "mathit")
    return "italic";
  if (n === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (n === "mathbf")
    return "bold";
  if (n === "mathbb")
    return "double-struck";
  if (n === "mathfrak")
    return "fraktur";
  if (n === "mathscr" || n === "mathcal")
    return "script";
  if (n === "mathsf")
    return "sans-serif";
  if (n === "mathtt")
    return "monospace";
  var a = e.text;
  if (X.contains(["\\imath", "\\jmath"], a))
    return null;
  Be[i][a] && Be[i][a].replace && (a = Be[i][a].replace);
  var l = T.fontMap[n].fontName;
  return go(a, l, i) ? T.fontMap[n].variant : null;
}, mt = function(e, r, n) {
  if (e.length === 1) {
    var i = oe(e[0], r);
    return n && i instanceof _t && i.type === "mo" && (i.setAttribute("lspace", "0em"), i.setAttribute("rspace", "0em")), [i];
  }
  for (var a = [], l, o = 0; o < e.length; o++) {
    var u = oe(e[o], r);
    if (u instanceof _t && l instanceof _t) {
      if (u.type === "mtext" && l.type === "mtext" && u.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...u.children);
        continue;
      } else if (u.type === "mn" && l.type === "mn") {
        l.children.push(...u.children);
        continue;
      } else if (u.type === "mi" && u.children.length === 1 && l.type === "mn") {
        var d = u.children[0];
        if (d instanceof un && d.text === ".") {
          l.children.push(...u.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var h = l.children[0];
        if (h instanceof un && h.text === "̸" && (u.type === "mo" || u.type === "mi" || u.type === "mn")) {
          var m = u.children[0];
          m instanceof un && m.text.length > 0 && (m.text = m.text.slice(0, 1) + "̸" + m.text.slice(1), a.pop());
        }
      }
    }
    a.push(u), l = u;
  }
  return a;
}, N0 = function(e, r, n) {
  return xo(mt(e, r, n));
}, oe = function(e, r) {
  if (!e)
    return new R.MathNode("mrow");
  if (ra[e.type]) {
    var n = ra[e.type](e, r);
    return n;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
}, q6 = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, W6 = function(e) {
  var r = new R.MathNode("mo", [new R.TextNode(q6[e.replace(/^\\/, "")])]);
  return r.setAttribute("stretchy", "true"), r;
}, Y6 = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, K6 = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, G6 = function(e, r) {
  function n() {
    var o = 4e5, u = e.label.slice(1);
    if (X.contains(["widehat", "widecheck", "widetilde", "utilde"], u)) {
      var d = e, h = K6(d.base), m, p, S;
      if (h > 5)
        u === "widehat" || u === "widecheck" ? (m = 420, o = 2364, S = 0.42, p = u + "4") : (m = 312, o = 2340, S = 0.34, p = "tilde4");
      else {
        var M = [1, 1, 2, 2, 3, 3][h];
        u === "widehat" || u === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][M], m = [0, 239, 300, 360, 420][M], S = [0, 0.24, 0.3, 0.3, 0.36, 0.42][M], p = u + M) : (o = [0, 600, 1033, 2339, 2340][M], m = [0, 260, 286, 306, 312][M], S = [0, 0.26, 0.286, 0.3, 0.306, 0.34][M], p = "tilde" + M);
      }
      var z = new G0(p), A = new E0([z], {
        width: "100%",
        height: I(S),
        viewBox: "0 0 " + o + " " + m,
        preserveAspectRatio: "none"
      });
      return {
        span: T.makeSvgSpan([], [A], r),
        minWidth: 0,
        height: S
      };
    } else {
      var y = [], v = Y6[u], [x, E, k] = v, C = k / 1e3, N = x.length, _, F;
      if (N === 1) {
        var U = v[3];
        _ = ["hide-tail"], F = [U];
      } else if (N === 2)
        _ = ["halfarrow-left", "halfarrow-right"], F = ["xMinYMin", "xMaxYMin"];
      else if (N === 3)
        _ = ["brace-left", "brace-center", "brace-right"], F = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + N + " children.");
      for (var ee = 0; ee < N; ee++) {
        var re = new G0(x[ee]), Me = new E0([re], {
          width: "400em",
          height: I(C),
          viewBox: "0 0 " + o + " " + k,
          preserveAspectRatio: F[ee] + " slice"
        }), ne = T.makeSvgSpan([_[ee]], [Me], r);
        if (N === 1)
          return {
            span: ne,
            minWidth: E,
            height: C
          };
        ne.style.height = I(C), y.push(ne);
      }
      return {
        span: T.makeSpan(["stretchy"], y, r),
        minWidth: E,
        height: C
      };
    }
  }
  var {
    span: i,
    minWidth: a,
    height: l
  } = n();
  return i.height = l, i.style.height = I(l), a > 0 && (i.style.minWidth = I(a)), i;
}, Q6 = function(e, r, n, i, a) {
  var l, o = e.height + e.depth + n + i;
  if (/fbox|color|angl/.test(r)) {
    if (l = T.makeSpan(["stretchy", r], [], a), r === "fbox") {
      var u = a.color && a.getColor();
      u && (l.style.borderColor = u);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(r) && d.push(new u1({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(r) && d.push(new u1({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var h = new E0(d, {
      width: "100%",
      height: I(o)
    });
    l = T.makeSvgSpan([], [h], a);
  }
  return l.height = o, l.style.height = I(o), l;
}, a0 = {
  encloseSpan: Q6,
  mathMLnode: W6,
  svgSpan: G6
};
function J(t, e) {
  if (!t || t.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (t ? "node of type " + t.type : String(t)));
  return t;
}
function ko(t) {
  var e = za(t);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (t ? "node of type " + t.type : String(t)));
  return e;
}
function za(t) {
  return t && (t.type === "atom" || k6.hasOwnProperty(t.type)) ? t : null;
}
var bo = (t, e) => {
  var r, n, i;
  t && t.type === "supsub" ? (n = J(t.base, "accent"), r = n.base, t.base = r, i = S6(ae(t, e)), t.base = n) : (n = J(t, "accent"), r = n.base);
  var a = ae(r, e.havingCrampedStyle()), l = n.isShifty && X.isCharacterBox(r), o = 0;
  if (l) {
    var u = X.getBaseElem(r), d = ae(u, e.havingCrampedStyle());
    o = c1(d).skew;
  }
  var h = n.label === "\\c", m = h ? a.height + a.depth : Math.min(a.height, e.fontMetrics().xHeight), p;
  if (n.isStretchy)
    p = a0.svgSpan(n, e), p = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "elem",
        elem: p,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + I(2 * o) + ")",
          marginLeft: I(2 * o)
        } : void 0
      }]
    }, e);
  else {
    var S, M;
    n.label === "\\vec" ? (S = T.staticSvg("vec", e), M = T.svgData.vec[1]) : (S = T.makeOrd({
      mode: n.mode,
      text: n.label
    }, e, "textord"), S = c1(S), S.italic = 0, M = S.width, h && (m += S.depth)), p = T.makeSpan(["accent-body"], [S]);
    var z = n.label === "\\textcircled";
    z && (p.classes.push("accent-full"), m = a.height);
    var A = o;
    z || (A -= M / 2), p.style.left = I(A), n.label === "\\textcircled" && (p.style.top = ".2em"), p = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: -m
      }, {
        type: "elem",
        elem: p
      }]
    }, e);
  }
  var y = T.makeSpan(["mord", "accent"], [p], e);
  return i ? (i.children[0] = y, i.height = Math.max(y.height, i.height), i.classes[0] = "mord", i) : y;
}, g2 = (t, e) => {
  var r = t.isStretchy ? a0.mathMLnode(t.label) : new R.MathNode("mo", [zt(t.label, t.mode)]), n = new R.MathNode("mover", [oe(t.base, e), r]);
  return n.setAttribute("accent", "true"), n;
}, X6 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((t) => "\\" + t).join("|"));
O({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (t, e) => {
    var r = na(e[0]), n = !X6.test(t.funcName), i = !n || t.funcName === "\\widehat" || t.funcName === "\\widetilde" || t.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: t.parser.mode,
      label: t.funcName,
      isStretchy: n,
      isShifty: i,
      base: r
    };
  },
  htmlBuilder: bo,
  mathmlBuilder: g2
});
O({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (t, e) => {
    var r = e[0], n = t.parser.mode;
    return n === "math" && (t.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + t.funcName + " works only in text mode"), n = "text"), {
      type: "accent",
      mode: n,
      label: t.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: r
    };
  },
  htmlBuilder: bo,
  mathmlBuilder: g2
});
O({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, i = e[0];
    return {
      type: "accentUnder",
      mode: r.mode,
      label: n,
      base: i
    };
  },
  htmlBuilder: (t, e) => {
    var r = ae(t.base, e), n = a0.svgSpan(t, e), i = t.label === "\\utilde" ? 0.12 : 0, a = T.makeVList({
      positionType: "top",
      positionData: r.height,
      children: [{
        type: "elem",
        elem: n,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: i
      }, {
        type: "elem",
        elem: r
      }]
    }, e);
    return T.makeSpan(["mord", "accentunder"], [a], e);
  },
  mathmlBuilder: (t, e) => {
    var r = a0.mathMLnode(t.label), n = new R.MathNode("munder", [oe(t.base, e), r]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var ci = (t) => {
  var e = new R.MathNode("mpadded", t ? [t] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
O({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(t, e, r) {
    var {
      parser: n,
      funcName: i
    } = t;
    return {
      type: "xArrow",
      mode: n.mode,
      label: i,
      body: e[0],
      below: r[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(t, e) {
    var r = e.style, n = e.havingStyle(r.sup()), i = T.wrapFragment(ae(t.body, n, e), e), a = t.label.slice(0, 2) === "\\x" ? "x" : "cd";
    i.classes.push(a + "-arrow-pad");
    var l;
    t.below && (n = e.havingStyle(r.sub()), l = T.wrapFragment(ae(t.below, n, e), e), l.classes.push(a + "-arrow-pad"));
    var o = a0.svgSpan(t, e), u = -e.fontMetrics().axisHeight + 0.5 * o.height, d = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (i.depth > 0.25 || t.label === "\\xleftequilibrium") && (d -= i.depth);
    var h;
    if (l) {
      var m = -e.fontMetrics().axisHeight + l.height + 0.5 * o.height + 0.111;
      h = T.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: i,
          shift: d
        }, {
          type: "elem",
          elem: o,
          shift: u
        }, {
          type: "elem",
          elem: l,
          shift: m
        }]
      }, e);
    } else
      h = T.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: i,
          shift: d
        }, {
          type: "elem",
          elem: o,
          shift: u
        }]
      }, e);
    return h.children[0].children[0].children[1].classes.push("svg-align"), T.makeSpan(["mrel", "x-arrow"], [h], e);
  },
  mathmlBuilder(t, e) {
    var r = a0.mathMLnode(t.label);
    r.setAttribute("minsize", t.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (t.body) {
      var i = ci(oe(t.body, e));
      if (t.below) {
        var a = ci(oe(t.below, e));
        n = new R.MathNode("munderover", [r, a, i]);
      } else
        n = new R.MathNode("mover", [r, i]);
    } else if (t.below) {
      var l = ci(oe(t.below, e));
      n = new R.MathNode("munder", [r, l]);
    } else
      n = ci(), n = new R.MathNode("mover", [r, n]);
    return n;
  }
});
var Z6 = T.makeSpan;
function w2(t, e) {
  var r = Fe(t.body, e, !0);
  return Z6([t.mclass], r, e);
}
function x2(t, e) {
  var r, n = mt(t.body, e);
  return t.mclass === "minner" ? r = new R.MathNode("mpadded", n) : t.mclass === "mord" ? t.isCharacterBox ? (r = n[0], r.type = "mi") : r = new R.MathNode("mi", n) : (t.isCharacterBox ? (r = n[0], r.type = "mo") : r = new R.MathNode("mo", n), t.mclass === "mbin" ? (r.attributes.lspace = "0.22em", r.attributes.rspace = "0.22em") : t.mclass === "mpunct" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0.17em") : t.mclass === "mopen" || t.mclass === "mclose" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0em") : t.mclass === "minner" && (r.attributes.lspace = "0.0556em", r.attributes.width = "+0.1111em")), r;
}
O({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, i = e[0];
    return {
      type: "mclass",
      mode: r.mode,
      mclass: "m" + n.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: be(i),
      isCharacterBox: X.isCharacterBox(i)
    };
  },
  htmlBuilder: w2,
  mathmlBuilder: x2
});
var Ca = (t) => {
  var e = t.type === "ordgroup" && t.body.length ? t.body[0] : t;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
O({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "mclass",
      mode: r.mode,
      mclass: Ca(e[0]),
      body: be(e[1]),
      isCharacterBox: X.isCharacterBox(e[1])
    };
  }
});
O({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, i = e[1], a = e[0], l;
    n !== "\\stackrel" ? l = Ca(i) : l = "mrel";
    var o = {
      type: "op",
      mode: i.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: be(i)
    }, u = {
      type: "supsub",
      mode: a.mode,
      base: o,
      sup: n === "\\underset" ? null : a,
      sub: n === "\\underset" ? a : null
    };
    return {
      type: "mclass",
      mode: r.mode,
      mclass: l,
      body: [u],
      isCharacterBox: X.isCharacterBox(u)
    };
  },
  htmlBuilder: w2,
  mathmlBuilder: x2
});
O({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "pmb",
      mode: r.mode,
      mclass: Ca(e[0]),
      body: be(e[0])
    };
  },
  htmlBuilder(t, e) {
    var r = Fe(t.body, e, !0), n = T.makeSpan([t.mclass], r, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(t, e) {
    var r = mt(t.body, e), n = new R.MathNode("mstyle", r);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var J6 = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, g1 = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), w1 = (t) => t.type === "textord" && t.text === "@", e7 = (t, e) => (t.type === "mathord" || t.type === "atom") && t.text === e;
function t7(t, e, r) {
  var n = J6[t];
  switch (n) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return r.callFunction(n, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var i = r.callFunction("\\\\cdleft", [e[0]], []), a = {
        type: "atom",
        text: n,
        mode: "math",
        family: "rel"
      }, l = r.callFunction("\\Big", [a], []), o = r.callFunction("\\\\cdright", [e[1]], []), u = {
        type: "ordgroup",
        mode: "math",
        body: [i, l, o]
      };
      return r.callFunction("\\\\cdparent", [u], []);
    }
    case "\\\\cdlongequal":
      return r.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var d = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return r.callFunction("\\Big", [d], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function r7(t) {
  var e = [];
  for (t.gullet.beginGroup(), t.gullet.macros.set("\\cr", "\\\\\\relax"), t.gullet.beginGroup(); ; ) {
    e.push(t.parseExpression(!1, "\\\\")), t.gullet.endGroup(), t.gullet.beginGroup();
    var r = t.fetch().text;
    if (r === "&" || r === "\\\\")
      t.consume();
    else if (r === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new G("Expected \\\\ or \\cr or \\end", t.nextToken);
  }
  for (var n = [], i = [n], a = 0; a < e.length; a++) {
    for (var l = e[a], o = g1(), u = 0; u < l.length; u++)
      if (!w1(l[u]))
        o.body.push(l[u]);
      else {
        n.push(o), u += 1;
        var d = ko(l[u]).text, h = new Array(2);
        if (h[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, h[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(d) > -1))
          if ("<>AV".indexOf(d) > -1)
            for (var m = 0; m < 2; m++) {
              for (var p = !0, S = u + 1; S < l.length; S++) {
                if (e7(l[S], d)) {
                  p = !1, u = S;
                  break;
                }
                if (w1(l[S]))
                  throw new G("Missing a " + d + " character to complete a CD arrow.", l[S]);
                h[m].body.push(l[S]);
              }
              if (p)
                throw new G("Missing a " + d + " character to complete a CD arrow.", l[u]);
            }
          else
            throw new G('Expected one of "<>AV=|." after @', l[u]);
        var M = t7(d, h, t), z = {
          type: "styling",
          body: [M],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        n.push(z), o = g1();
      }
    a % 2 === 0 ? n.push(o) : n.shift(), n = [], i.push(n);
  }
  t.gullet.endGroup(), t.gullet.endGroup();
  var A = new Array(i[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: i,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: A,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(i.length + 1).fill([])
  };
}
O({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t;
    return {
      type: "cdlabel",
      mode: r.mode,
      side: n.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(t, e) {
    var r = e.havingStyle(e.style.sup()), n = T.wrapFragment(ae(t.label, r, e), e);
    return n.classes.push("cd-label-" + t.side), n.style.bottom = I(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(t, e) {
    var r = new R.MathNode("mrow", [oe(t.label, e)]);
    return r = new R.MathNode("mpadded", [r]), r.setAttribute("width", "0"), t.side === "left" && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), r = new R.MathNode("mstyle", [r]), r.setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r;
  }
});
O({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "cdlabelparent",
      mode: r.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(t, e) {
    var r = T.wrapFragment(ae(t.fragment, e), e);
    return r.classes.push("cd-vert-arrow"), r;
  },
  mathmlBuilder(t, e) {
    return new R.MathNode("mrow", [oe(t.fragment, e)]);
  }
});
O({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(t, e) {
    for (var {
      parser: r
    } = t, n = J(e[0], "ordgroup"), i = n.body, a = "", l = 0; l < i.length; l++) {
      var o = J(i[l], "textord");
      a += o.text;
    }
    var u = parseInt(a), d;
    if (isNaN(u))
      throw new G("\\@char has non-numeric argument " + a);
    if (u < 0 || u >= 1114111)
      throw new G("\\@char with invalid code point " + a);
    return u <= 65535 ? d = String.fromCharCode(u) : (u -= 65536, d = String.fromCharCode((u >> 10) + 55296, (u & 1023) + 56320)), {
      type: "textord",
      mode: r.mode,
      text: d
    };
  }
});
var S2 = (t, e) => {
  var r = Fe(t.body, e.withColor(t.color), !1);
  return T.makeFragment(r);
}, k2 = (t, e) => {
  var r = mt(t.body, e.withColor(t.color)), n = new R.MathNode("mstyle", r);
  return n.setAttribute("mathcolor", t.color), n;
};
O({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(t, e) {
    var {
      parser: r
    } = t, n = J(e[0], "color-token").color, i = e[1];
    return {
      type: "color",
      mode: r.mode,
      color: n,
      body: be(i)
    };
  },
  htmlBuilder: S2,
  mathmlBuilder: k2
});
O({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(t, e) {
    var {
      parser: r,
      breakOnTokenText: n
    } = t, i = J(e[0], "color-token").color;
    r.gullet.macros.set("\\current@color", i);
    var a = r.parseExpression(!0, n);
    return {
      type: "color",
      mode: r.mode,
      color: i,
      body: a
    };
  },
  htmlBuilder: S2,
  mathmlBuilder: k2
});
O({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(t, e, r) {
    var {
      parser: n
    } = t, i = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null, a = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: n.mode,
      newLine: a,
      size: i && J(i, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(t, e) {
    var r = T.makeSpan(["mspace"], [], e);
    return t.newLine && (r.classes.push("newline"), t.size && (r.style.marginTop = I(ye(t.size, e)))), r;
  },
  mathmlBuilder(t, e) {
    var r = new R.MathNode("mspace");
    return t.newLine && (r.setAttribute("linebreak", "newline"), t.size && r.setAttribute("height", I(ye(t.size, e)))), r;
  }
});
var vs = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, b2 = (t) => {
  var e = t.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new G("Expected a control sequence", t);
  return e;
}, n7 = (t) => {
  var e = t.gullet.popToken();
  return e.text === "=" && (e = t.gullet.popToken(), e.text === " " && (e = t.gullet.popToken())), e;
}, M2 = (t, e, r, n) => {
  var i = t.gullet.macros.get(r.text);
  i == null && (r.noexpand = !0, i = {
    tokens: [r],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !t.gullet.isExpandable(r.text)
  }), t.gullet.macros.set(e, i, n);
};
O({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t;
    e.consumeSpaces();
    var n = e.fetch();
    if (vs[n.text])
      return (r === "\\global" || r === "\\\\globallong") && (n.text = vs[n.text]), J(e.parseFunction(), "internal");
    throw new G("Invalid token after macro prefix", n);
  }
});
O({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t, n = e.gullet.popToken(), i = n.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(i))
      throw new G("Expected a control sequence", n);
    for (var a = 0, l, o = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), o[a].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new G('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== a + 1)
          throw new G('Argument number "' + n.text + '" out of order');
        a++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new G("Expected a macro definition");
        o[a].push(n.text);
      }
    var {
      tokens: u
    } = e.gullet.consumeArg();
    return l && u.unshift(l), (r === "\\edef" || r === "\\xdef") && (u = e.gullet.expandTokens(u), u.reverse()), e.gullet.macros.set(i, {
      tokens: u,
      numArgs: a,
      delimiters: o
    }, r === vs[r]), {
      type: "internal",
      mode: e.mode
    };
  }
});
O({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t, n = b2(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var i = n7(e);
    return M2(e, n, i, r === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
O({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t, n = b2(e.gullet.popToken()), i = e.gullet.popToken(), a = e.gullet.popToken();
    return M2(e, n, a, r === "\\\\globalfuture"), e.gullet.pushToken(a), e.gullet.pushToken(i), {
      type: "internal",
      mode: e.mode
    };
  }
});
var Zr = function(e, r, n) {
  var i = Be.math[e] && Be.math[e].replace, a = go(i || e, r, n);
  if (!a)
    throw new Error("Unsupported symbol " + e + " and font size " + r + ".");
  return a;
}, Mo = function(e, r, n, i) {
  var a = n.havingBaseStyle(r), l = T.makeSpan(i.concat(a.sizingClasses(n)), [e], n), o = a.sizeMultiplier / n.sizeMultiplier;
  return l.height *= o, l.depth *= o, l.maxFontSize = a.sizeMultiplier, l;
}, z2 = function(e, r, n) {
  var i = r.havingBaseStyle(n), a = (1 - r.sizeMultiplier / i.sizeMultiplier) * r.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = I(a), e.height -= a, e.depth += a;
}, i7 = function(e, r, n, i, a, l) {
  var o = T.makeSymbol(e, "Main-Regular", a, i), u = Mo(o, r, i, l);
  return n && z2(u, i, r), u;
}, a7 = function(e, r, n, i) {
  return T.makeSymbol(e, "Size" + r + "-Regular", n, i);
}, C2 = function(e, r, n, i, a, l) {
  var o = a7(e, r, a, i), u = Mo(T.makeSpan(["delimsizing", "size" + r], [o], i), Y.TEXT, i, l);
  return n && z2(u, i, Y.TEXT), u;
}, cl = function(e, r, n) {
  var i;
  r === "Size1-Regular" ? i = "delim-size1" : i = "delim-size4";
  var a = T.makeSpan(["delimsizinginner", i], [T.makeSpan([], [T.makeSymbol(e, r, n)])]);
  return {
    type: "elem",
    elem: a
  };
}, fl = function(e, r, n) {
  var i = Xt["Size4-Regular"][e.charCodeAt(0)] ? Xt["Size4-Regular"][e.charCodeAt(0)][4] : Xt["Size1-Regular"][e.charCodeAt(0)][4], a = new G0("inner", p6(e, Math.round(1e3 * r))), l = new E0([a], {
    width: I(i),
    height: I(r),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + I(i),
    viewBox: "0 0 " + 1e3 * i + " " + Math.round(1e3 * r),
    preserveAspectRatio: "xMinYMin"
  }), o = T.makeSvgSpan([], [l], n);
  return o.height = r, o.style.height = I(r), o.style.width = I(i), {
    type: "elem",
    elem: o
  };
}, ys = 8e-3, fi = {
  type: "kern",
  size: -1 * ys
}, l7 = ["|", "\\lvert", "\\rvert", "\\vert"], s7 = ["\\|", "\\lVert", "\\rVert", "\\Vert"], T2 = function(e, r, n, i, a, l) {
  var o, u, d, h, m = "", p = 0;
  o = d = h = e, u = null;
  var S = "Size1-Regular";
  e === "\\uparrow" ? d = h = "⏐" : e === "\\Uparrow" ? d = h = "‖" : e === "\\downarrow" ? o = d = "⏐" : e === "\\Downarrow" ? o = d = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", d = "⏐", h = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", d = "‖", h = "\\Downarrow") : X.contains(l7, e) ? (d = "∣", m = "vert", p = 333) : X.contains(s7, e) ? (d = "∥", m = "doublevert", p = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", d = "⎢", h = "⎣", S = "Size4-Regular", m = "lbrack", p = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", d = "⎥", h = "⎦", S = "Size4-Regular", m = "rbrack", p = 667) : e === "\\lfloor" || e === "⌊" ? (d = o = "⎢", h = "⎣", S = "Size4-Regular", m = "lfloor", p = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", d = h = "⎢", S = "Size4-Regular", m = "lceil", p = 667) : e === "\\rfloor" || e === "⌋" ? (d = o = "⎥", h = "⎦", S = "Size4-Regular", m = "rfloor", p = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", d = h = "⎥", S = "Size4-Regular", m = "rceil", p = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", d = "⎜", h = "⎝", S = "Size4-Regular", m = "lparen", p = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", d = "⎟", h = "⎠", S = "Size4-Regular", m = "rparen", p = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", u = "⎨", h = "⎩", d = "⎪", S = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", u = "⎬", h = "⎭", d = "⎪", S = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", h = "⎩", d = "⎪", S = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", h = "⎭", d = "⎪", S = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", h = "⎭", d = "⎪", S = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", h = "⎩", d = "⎪", S = "Size4-Regular");
  var M = Zr(o, S, a), z = M.height + M.depth, A = Zr(d, S, a), y = A.height + A.depth, v = Zr(h, S, a), x = v.height + v.depth, E = 0, k = 1;
  if (u !== null) {
    var C = Zr(u, S, a);
    E = C.height + C.depth, k = 2;
  }
  var N = z + x + E, _ = Math.max(0, Math.ceil((r - N) / (k * y))), F = N + _ * k * y, U = i.fontMetrics().axisHeight;
  n && (U *= i.sizeMultiplier);
  var ee = F / 2 - U, re = [];
  if (m.length > 0) {
    var Me = F - z - x, ne = Math.round(F * 1e3), He = v6(m, Math.round(Me * 1e3)), qe = new G0(m, He), at = (p / 1e3).toFixed(3) + "em", L = (ne / 1e3).toFixed(3) + "em", B = new E0([qe], {
      width: at,
      height: L,
      viewBox: "0 0 " + p + " " + ne
    }), j = T.makeSvgSpan([], [B], i);
    j.height = ne / 1e3, j.style.width = at, j.style.height = L, re.push({
      type: "elem",
      elem: j
    });
  } else {
    if (re.push(cl(h, S, a)), re.push(fi), u === null) {
      var q = F - z - x + 2 * ys;
      re.push(fl(d, q, i));
    } else {
      var K = (F - z - x - E) / 2 + 2 * ys;
      re.push(fl(d, K, i)), re.push(fi), re.push(cl(u, S, a)), re.push(fi), re.push(fl(d, K, i));
    }
    re.push(fi), re.push(cl(o, S, a));
  }
  var ze = i.havingBaseStyle(Y.TEXT), Ae = T.makeVList({
    positionType: "bottom",
    positionData: ee,
    children: re
  }, ze);
  return Mo(T.makeSpan(["delimsizing", "mult"], [Ae], ze), Y.TEXT, i, l);
}, dl = 80, hl = 0.08, ml = function(e, r, n, i, a) {
  var l = m6(e, i, n), o = new G0(e, l), u = new E0([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: I(r),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return T.makeSvgSpan(["hide-tail"], [u], a);
}, o7 = function(e, r) {
  var n = r.havingBaseSizing(), i = _2("\\surd", e * n.sizeMultiplier, A2, n), a = n.sizeMultiplier, l = Math.max(0, r.minRuleThickness - r.fontMetrics().sqrtRuleThickness), o, u = 0, d = 0, h = 0, m;
  return i.type === "small" ? (h = 1e3 + 1e3 * l + dl, e < 1 ? a = 1 : e < 1.4 && (a = 0.7), u = (1 + l + hl) / a, d = (1 + l) / a, o = ml("sqrtMain", u, h, l, r), o.style.minWidth = "0.853em", m = 0.833 / a) : i.type === "large" ? (h = (1e3 + dl) * cn[i.size], d = (cn[i.size] + l) / a, u = (cn[i.size] + l + hl) / a, o = ml("sqrtSize" + i.size, u, h, l, r), o.style.minWidth = "1.02em", m = 1 / a) : (u = e + l + hl, d = e + l, h = Math.floor(1e3 * e + l) + dl, o = ml("sqrtTall", u, h, l, r), o.style.minWidth = "0.742em", m = 1.056), o.height = d, o.style.height = I(u), {
    span: o,
    advanceWidth: m,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (r.fontMetrics().sqrtRuleThickness + l) * a
  };
}, E2 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], u7 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], N2 = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], cn = [0, 1.2, 1.8, 2.4, 3], c7 = function(e, r, n, i, a) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), X.contains(E2, e) || X.contains(N2, e))
    return C2(e, r, !1, n, i, a);
  if (X.contains(u7, e))
    return T2(e, cn[r], !1, n, i, a);
  throw new G("Illegal delimiter: '" + e + "'");
}, f7 = [{
  type: "small",
  style: Y.SCRIPTSCRIPT
}, {
  type: "small",
  style: Y.SCRIPT
}, {
  type: "small",
  style: Y.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], d7 = [{
  type: "small",
  style: Y.SCRIPTSCRIPT
}, {
  type: "small",
  style: Y.SCRIPT
}, {
  type: "small",
  style: Y.TEXT
}, {
  type: "stack"
}], A2 = [{
  type: "small",
  style: Y.SCRIPTSCRIPT
}, {
  type: "small",
  style: Y.SCRIPT
}, {
  type: "small",
  style: Y.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], h7 = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, _2 = function(e, r, n, i) {
  for (var a = Math.min(2, 3 - i.style.size), l = a; l < n.length && n[l].type !== "stack"; l++) {
    var o = Zr(e, h7(n[l]), "math"), u = o.height + o.depth;
    if (n[l].type === "small") {
      var d = i.havingBaseStyle(n[l].style);
      u *= d.sizeMultiplier;
    }
    if (u > r)
      return n[l];
  }
  return n[n.length - 1];
}, P2 = function(e, r, n, i, a, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  X.contains(N2, e) ? o = f7 : X.contains(E2, e) ? o = A2 : o = d7;
  var u = _2(e, r, o, i);
  return u.type === "small" ? i7(e, u.style, n, i, a, l) : u.type === "large" ? C2(e, u.size, n, i, a, l) : T2(e, r, n, i, a, l);
}, m7 = function(e, r, n, i, a, l) {
  var o = i.fontMetrics().axisHeight * i.sizeMultiplier, u = 901, d = 5 / i.fontMetrics().ptPerEm, h = Math.max(r - o, n + o), m = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    h / 500 * u,
    2 * h - d
  );
  return P2(e, m, !0, i, a, l);
}, e0 = {
  sqrtImage: o7,
  sizedDelim: c7,
  sizeToMaxHeight: cn,
  customSizedDelim: P2,
  leftRightDelim: m7
}, x1 = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, p7 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Ta(t, e) {
  var r = za(t);
  if (r && X.contains(p7, r.text))
    return r;
  throw r ? new G("Invalid delimiter '" + r.text + "' after '" + e.funcName + "'", t) : new G("Invalid delimiter type '" + t.type + "'", t);
}
O({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (t, e) => {
    var r = Ta(e[0], t);
    return {
      type: "delimsizing",
      mode: t.parser.mode,
      size: x1[t.funcName].size,
      mclass: x1[t.funcName].mclass,
      delim: r.text
    };
  },
  htmlBuilder: (t, e) => t.delim === "." ? T.makeSpan([t.mclass]) : e0.sizedDelim(t.delim, t.size, e, t.mode, [t.mclass]),
  mathmlBuilder: (t) => {
    var e = [];
    t.delim !== "." && e.push(zt(t.delim, t.mode));
    var r = new R.MathNode("mo", e);
    t.mclass === "mopen" || t.mclass === "mclose" ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true");
    var n = I(e0.sizeToMaxHeight[t.size]);
    return r.setAttribute("minsize", n), r.setAttribute("maxsize", n), r;
  }
});
function S1(t) {
  if (!t.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
O({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (t, e) => {
    var r = t.parser.gullet.macros.get("\\current@color");
    if (r && typeof r != "string")
      throw new G("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: t.parser.mode,
      delim: Ta(e[0], t).text,
      color: r
      // undefined if not set via \color
    };
  }
});
O({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (t, e) => {
    var r = Ta(e[0], t), n = t.parser;
    ++n.leftrightDepth;
    var i = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var a = J(n.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: n.mode,
      body: i,
      left: r.text,
      right: a.delim,
      rightColor: a.color
    };
  },
  htmlBuilder: (t, e) => {
    S1(t);
    for (var r = Fe(t.body, e, !0, ["mopen", "mclose"]), n = 0, i = 0, a = !1, l = 0; l < r.length; l++)
      r[l].isMiddle ? a = !0 : (n = Math.max(r[l].height, n), i = Math.max(r[l].depth, i));
    n *= e.sizeMultiplier, i *= e.sizeMultiplier;
    var o;
    if (t.left === "." ? o = Nn(e, ["mopen"]) : o = e0.leftRightDelim(t.left, n, i, e, t.mode, ["mopen"]), r.unshift(o), a)
      for (var u = 1; u < r.length; u++) {
        var d = r[u], h = d.isMiddle;
        h && (r[u] = e0.leftRightDelim(h.delim, n, i, h.options, t.mode, []));
      }
    var m;
    if (t.right === ".")
      m = Nn(e, ["mclose"]);
    else {
      var p = t.rightColor ? e.withColor(t.rightColor) : e;
      m = e0.leftRightDelim(t.right, n, i, p, t.mode, ["mclose"]);
    }
    return r.push(m), T.makeSpan(["minner"], r, e);
  },
  mathmlBuilder: (t, e) => {
    S1(t);
    var r = mt(t.body, e);
    if (t.left !== ".") {
      var n = new R.MathNode("mo", [zt(t.left, t.mode)]);
      n.setAttribute("fence", "true"), r.unshift(n);
    }
    if (t.right !== ".") {
      var i = new R.MathNode("mo", [zt(t.right, t.mode)]);
      i.setAttribute("fence", "true"), t.rightColor && i.setAttribute("mathcolor", t.rightColor), r.push(i);
    }
    return xo(r);
  }
});
O({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (t, e) => {
    var r = Ta(e[0], t);
    if (!t.parser.leftrightDepth)
      throw new G("\\middle without preceding \\left", r);
    return {
      type: "middle",
      mode: t.parser.mode,
      delim: r.text
    };
  },
  htmlBuilder: (t, e) => {
    var r;
    if (t.delim === ".")
      r = Nn(e, []);
    else {
      r = e0.sizedDelim(t.delim, 1, e, t.mode, []);
      var n = {
        delim: t.delim,
        options: e
      };
      r.isMiddle = n;
    }
    return r;
  },
  mathmlBuilder: (t, e) => {
    var r = t.delim === "\\vert" || t.delim === "|" ? zt("|", "text") : zt(t.delim, t.mode), n = new R.MathNode("mo", [r]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var zo = (t, e) => {
  var r = T.wrapFragment(ae(t.body, e), e), n = t.label.slice(1), i = e.sizeMultiplier, a, l = 0, o = X.isCharacterBox(t.body);
  if (n === "sout")
    a = T.makeSpan(["stretchy", "sout"]), a.height = e.fontMetrics().defaultRuleThickness / i, l = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var u = ye({
      number: 0.6,
      unit: "pt"
    }, e), d = ye({
      number: 0.35,
      unit: "ex"
    }, e), h = e.havingBaseSizing();
    i = i / h.sizeMultiplier;
    var m = r.height + r.depth + u + d;
    r.style.paddingLeft = I(m / 2 + u);
    var p = Math.floor(1e3 * m * i), S = d6(p), M = new E0([new G0("phase", S)], {
      width: "400em",
      height: I(p / 1e3),
      viewBox: "0 0 400000 " + p,
      preserveAspectRatio: "xMinYMin slice"
    });
    a = T.makeSvgSpan(["hide-tail"], [M], e), a.style.height = I(m), l = r.depth + u + d;
  } else {
    /cancel/.test(n) ? o || r.classes.push("cancel-pad") : n === "angl" ? r.classes.push("anglpad") : r.classes.push("boxpad");
    var z = 0, A = 0, y = 0;
    /box/.test(n) ? (y = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), z = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : y), A = z) : n === "angl" ? (y = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), z = 4 * y, A = Math.max(0, 0.25 - r.depth)) : (z = o ? 0.2 : 0, A = z), a = a0.encloseSpan(r, n, z, A, e), /fbox|boxed|fcolorbox/.test(n) ? (a.style.borderStyle = "solid", a.style.borderWidth = I(y)) : n === "angl" && y !== 0.049 && (a.style.borderTopWidth = I(y), a.style.borderRightWidth = I(y)), l = r.depth + A, t.backgroundColor && (a.style.backgroundColor = t.backgroundColor, t.borderColor && (a.style.borderColor = t.borderColor));
  }
  var v;
  if (t.backgroundColor)
    v = T.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: a,
          shift: l
        },
        {
          type: "elem",
          elem: r,
          shift: 0
        }
      ]
    }, e);
  else {
    var x = /cancel|phase/.test(n) ? ["svg-align"] : [];
    v = T.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: r,
          shift: 0
        },
        {
          type: "elem",
          elem: a,
          shift: l,
          wrapperClasses: x
        }
      ]
    }, e);
  }
  return /cancel/.test(n) && (v.height = r.height, v.depth = r.depth), /cancel/.test(n) && !o ? T.makeSpan(["mord", "cancel-lap"], [v], e) : T.makeSpan(["mord"], [v], e);
}, Co = (t, e) => {
  var r = 0, n = new R.MathNode(t.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [oe(t.body, e)]);
  switch (t.label) {
    case "\\cancel":
      n.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      n.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      n.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      n.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      n.setAttribute("notation", "box");
      break;
    case "\\angl":
      n.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (r = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * r + "pt"), n.setAttribute("height", "+" + 2 * r + "pt"), n.setAttribute("lspace", r + "pt"), n.setAttribute("voffset", r + "pt"), t.label === "\\fcolorbox") {
        var i = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        n.setAttribute("style", "border: " + i + "em solid " + String(t.borderColor));
      }
      break;
    case "\\xcancel":
      n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return t.backgroundColor && n.setAttribute("mathbackground", t.backgroundColor), n;
};
O({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(t, e, r) {
    var {
      parser: n,
      funcName: i
    } = t, a = J(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: i,
      backgroundColor: a,
      body: l
    };
  },
  htmlBuilder: zo,
  mathmlBuilder: Co
});
O({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(t, e, r) {
    var {
      parser: n,
      funcName: i
    } = t, a = J(e[0], "color-token").color, l = J(e[1], "color-token").color, o = e[2];
    return {
      type: "enclose",
      mode: n.mode,
      label: i,
      backgroundColor: l,
      borderColor: a,
      body: o
    };
  },
  htmlBuilder: zo,
  mathmlBuilder: Co
});
O({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "enclose",
      mode: r.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
O({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, i = e[0];
    return {
      type: "enclose",
      mode: r.mode,
      label: n,
      body: i
    };
  },
  htmlBuilder: zo,
  mathmlBuilder: Co
});
O({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "enclose",
      mode: r.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var D2 = {};
function Vt(t) {
  for (var {
    type: e,
    names: r,
    props: n,
    handler: i,
    htmlBuilder: a,
    mathmlBuilder: l
  } = t, o = {
    type: e,
    numArgs: n.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: i
  }, u = 0; u < r.length; ++u)
    D2[r[u]] = o;
  a && (ta[e] = a), l && (ra[e] = l);
}
function k1(t) {
  var e = [];
  t.consumeSpaces();
  var r = t.fetch().text;
  for (r === "\\relax" && (t.consume(), t.consumeSpaces(), r = t.fetch().text); r === "\\hline" || r === "\\hdashline"; )
    t.consume(), e.push(r === "\\hdashline"), t.consumeSpaces(), r = t.fetch().text;
  return e;
}
var Ea = (t) => {
  var e = t.parser.settings;
  if (!e.displayMode)
    throw new G("{" + t.envName + "} can be used only in display mode.");
};
function To(t) {
  if (t.indexOf("ed") === -1)
    return t.indexOf("*") === -1;
}
function D0(t, e, r) {
  var {
    hskipBeforeAndAfter: n,
    addJot: i,
    cols: a,
    arraystretch: l,
    colSeparationType: o,
    autoTag: u,
    singleRow: d,
    emptySingleRow: h,
    maxNumCols: m,
    leqno: p
  } = e;
  if (t.gullet.beginGroup(), d || t.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var S = t.gullet.expandMacroAsText("\\arraystretch");
    if (S == null)
      l = 1;
    else if (l = parseFloat(S), !l || l < 0)
      throw new G("Invalid \\arraystretch: " + S);
  }
  t.gullet.beginGroup();
  var M = [], z = [M], A = [], y = [], v = u != null ? [] : void 0;
  function x() {
    u && t.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function E() {
    v && (t.gullet.macros.get("\\df@tag") ? (v.push(t.subparse([new vo("\\df@tag")])), t.gullet.macros.set("\\df@tag", void 0, !0)) : v.push(!!u && t.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (x(), y.push(k1(t)); ; ) {
    var k = t.parseExpression(!1, d ? "\\end" : "\\\\");
    t.gullet.endGroup(), t.gullet.beginGroup(), k = {
      type: "ordgroup",
      mode: t.mode,
      body: k
    }, r && (k = {
      type: "styling",
      mode: t.mode,
      style: r,
      body: [k]
    }), M.push(k);
    var C = t.fetch().text;
    if (C === "&") {
      if (m && M.length === m) {
        if (d || o)
          throw new G("Too many tab characters: &", t.nextToken);
        t.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      t.consume();
    } else if (C === "\\end") {
      E(), M.length === 1 && k.type === "styling" && k.body[0].body.length === 0 && (z.length > 1 || !h) && z.pop(), y.length < z.length + 1 && y.push([]);
      break;
    } else if (C === "\\\\") {
      t.consume();
      var N = void 0;
      t.gullet.future().text !== " " && (N = t.parseSizeGroup(!0)), A.push(N ? N.value : null), E(), y.push(k1(t)), M = [], z.push(M), x();
    } else
      throw new G("Expected & or \\\\ or \\cr or \\end", t.nextToken);
  }
  return t.gullet.endGroup(), t.gullet.endGroup(), {
    type: "array",
    mode: t.mode,
    addJot: i,
    arraystretch: l,
    body: z,
    cols: a,
    rowGaps: A,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: y,
    colSeparationType: o,
    tags: v,
    leqno: p
  };
}
function Eo(t) {
  return t.slice(0, 1) === "d" ? "display" : "text";
}
var Ut = function(e, r) {
  var n, i, a = e.body.length, l = e.hLinesBeforeRow, o = 0, u = new Array(a), d = [], h = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    r.fontMetrics().arrayRuleWidth,
    r.minRuleThickness
    // User override.
  ), m = 1 / r.fontMetrics().ptPerEm, p = 5 * m;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var S = r.havingStyle(Y.SCRIPT).sizeMultiplier;
    p = 0.2778 * (S / r.sizeMultiplier);
  }
  var M = e.colSeparationType === "CD" ? ye({
    number: 3,
    unit: "ex"
  }, r) : 12 * m, z = 3 * m, A = e.arraystretch * M, y = 0.7 * A, v = 0.3 * A, x = 0;
  function E(jn) {
    for (var Vn = 0; Vn < jn.length; ++Vn)
      Vn > 0 && (x += 0.25), d.push({
        pos: x,
        isDashed: jn[Vn]
      });
  }
  for (E(l[0]), n = 0; n < e.body.length; ++n) {
    var k = e.body[n], C = y, N = v;
    o < k.length && (o = k.length);
    var _ = new Array(k.length);
    for (i = 0; i < k.length; ++i) {
      var F = ae(k[i], r);
      N < F.depth && (N = F.depth), C < F.height && (C = F.height), _[i] = F;
    }
    var U = e.rowGaps[n], ee = 0;
    U && (ee = ye(U, r), ee > 0 && (ee += v, N < ee && (N = ee), ee = 0)), e.addJot && (N += z), _.height = C, _.depth = N, x += C, _.pos = x, x += N + ee, u[n] = _, E(l[n + 1]);
  }
  var re = x / 2 + r.fontMetrics().axisHeight, Me = e.cols || [], ne = [], He, qe, at = [];
  if (e.tags && e.tags.some((jn) => jn))
    for (n = 0; n < a; ++n) {
      var L = u[n], B = L.pos - re, j = e.tags[n], q = void 0;
      j === !0 ? q = T.makeSpan(["eqn-num"], [], r) : j === !1 ? q = T.makeSpan([], [], r) : q = T.makeSpan([], Fe(j, r, !0), r), q.depth = L.depth, q.height = L.height, at.push({
        type: "elem",
        elem: q,
        shift: B
      });
    }
  for (
    i = 0, qe = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    i < o || qe < Me.length;
    ++i, ++qe
  ) {
    for (var K = Me[qe] || {}, ze = !0; K.type === "separator"; ) {
      if (ze || (He = T.makeSpan(["arraycolsep"], []), He.style.width = I(r.fontMetrics().doubleRuleSep), ne.push(He)), K.separator === "|" || K.separator === ":") {
        var Ae = K.separator === "|" ? "solid" : "dashed", pt = T.makeSpan(["vertical-separator"], [], r);
        pt.style.height = I(x), pt.style.borderRightWidth = I(h), pt.style.borderRightStyle = Ae, pt.style.margin = "0 " + I(-h / 2);
        var vt = x - re;
        vt && (pt.style.verticalAlign = I(-vt)), ne.push(pt);
      } else
        throw new G("Invalid separator type: " + K.separator);
      qe++, K = Me[qe] || {}, ze = !1;
    }
    if (!(i >= o)) {
      var lt = void 0;
      (i > 0 || e.hskipBeforeAndAfter) && (lt = X.deflt(K.pregap, p), lt !== 0 && (He = T.makeSpan(["arraycolsep"], []), He.style.width = I(lt), ne.push(He)));
      var qt = [];
      for (n = 0; n < a; ++n) {
        var Fn = u[n], Hn = Fn[i];
        if (Hn) {
          var X2 = Fn.pos - re;
          Hn.depth = Fn.depth, Hn.height = Fn.height, qt.push({
            type: "elem",
            elem: Hn,
            shift: X2
          });
        }
      }
      qt = T.makeVList({
        positionType: "individualShift",
        children: qt
      }, r), qt = T.makeSpan(["col-align-" + (K.align || "c")], [qt]), ne.push(qt), (i < o - 1 || e.hskipBeforeAndAfter) && (lt = X.deflt(K.postgap, p), lt !== 0 && (He = T.makeSpan(["arraycolsep"], []), He.style.width = I(lt), ne.push(He)));
    }
  }
  if (u = T.makeSpan(["mtable"], ne), d.length > 0) {
    for (var Z2 = T.makeLineSpan("hline", r, h), J2 = T.makeLineSpan("hdashline", r, h), _a = [{
      type: "elem",
      elem: u,
      shift: 0
    }]; d.length > 0; ) {
      var Lo = d.pop(), Bo = Lo.pos - re;
      Lo.isDashed ? _a.push({
        type: "elem",
        elem: J2,
        shift: Bo
      }) : _a.push({
        type: "elem",
        elem: Z2,
        shift: Bo
      });
    }
    u = T.makeVList({
      positionType: "individualShift",
      children: _a
    }, r);
  }
  if (at.length === 0)
    return T.makeSpan(["mord"], [u], r);
  var Pa = T.makeVList({
    positionType: "individualShift",
    children: at
  }, r);
  return Pa = T.makeSpan(["tag"], [Pa], r), T.makeFragment([u, Pa]);
}, v7 = {
  c: "center ",
  l: "left ",
  r: "right "
}, $t = function(e, r) {
  for (var n = [], i = new R.MathNode("mtd", [], ["mtr-glue"]), a = new R.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var o = e.body[l], u = [], d = 0; d < o.length; d++)
      u.push(new R.MathNode("mtd", [oe(o[d], r)]));
    e.tags && e.tags[l] && (u.unshift(i), u.push(i), e.leqno ? u.unshift(a) : u.push(a)), n.push(new R.MathNode("mtr", u));
  }
  var h = new R.MathNode("mtable", n), m = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", I(m));
  var p = "", S = "";
  if (e.cols && e.cols.length > 0) {
    var M = e.cols, z = "", A = !1, y = 0, v = M.length;
    M[0].type === "separator" && (p += "top ", y = 1), M[M.length - 1].type === "separator" && (p += "bottom ", v -= 1);
    for (var x = y; x < v; x++)
      M[x].type === "align" ? (S += v7[M[x].align], A && (z += "none "), A = !0) : M[x].type === "separator" && A && (z += M[x].separator === "|" ? "solid " : "dashed ", A = !1);
    h.setAttribute("columnalign", S.trim()), /[sd]/.test(z) && h.setAttribute("columnlines", z.trim());
  }
  if (e.colSeparationType === "align") {
    for (var E = e.cols || [], k = "", C = 1; C < E.length; C++)
      k += C % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", k.trim());
  } else
    e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var N = "", _ = e.hLinesBeforeRow;
  p += _[0].length > 0 ? "left " : "", p += _[_.length - 1].length > 0 ? "right " : "";
  for (var F = 1; F < _.length - 1; F++)
    N += _[F].length === 0 ? "none " : _[F][0] ? "dashed " : "solid ";
  return /[sd]/.test(N) && h.setAttribute("rowlines", N.trim()), p !== "" && (h = new R.MathNode("menclose", [h]), h.setAttribute("notation", p.trim())), e.arraystretch && e.arraystretch < 1 && (h = new R.MathNode("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, R2 = function(e, r) {
  e.envName.indexOf("ed") === -1 && Ea(e);
  var n = [], i = e.envName.indexOf("at") > -1 ? "alignat" : "align", a = e.envName === "split", l = D0(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: a ? void 0 : To(e.envName),
    emptySingleRow: !0,
    colSeparationType: i,
    maxNumCols: a ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), o, u = 0, d = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (r[0] && r[0].type === "ordgroup") {
    for (var h = "", m = 0; m < r[0].body.length; m++) {
      var p = J(r[0].body[m], "textord");
      h += p.text;
    }
    o = Number(h), u = o * 2;
  }
  var S = !u;
  l.body.forEach(function(y) {
    for (var v = 1; v < y.length; v += 2) {
      var x = J(y[v], "styling"), E = J(x.body[0], "ordgroup");
      E.body.unshift(d);
    }
    if (S)
      u < y.length && (u = y.length);
    else {
      var k = y.length / 2;
      if (o < k)
        throw new G("Too many math in a row: " + ("expected " + o + ", but got " + k), y[0]);
    }
  });
  for (var M = 0; M < u; ++M) {
    var z = "r", A = 0;
    M % 2 === 1 ? z = "l" : M > 0 && S && (A = 1), n[M] = {
      type: "align",
      align: z,
      pregap: A,
      postgap: 0
    };
  }
  return l.colSeparationType = S ? "align" : "alignat", l;
};
Vt({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(t, e) {
    var r = za(e[0]), n = r ? [e[0]] : J(e[0], "ordgroup").body, i = n.map(function(l) {
      var o = ko(l), u = o.text;
      if ("lcr".indexOf(u) !== -1)
        return {
          type: "align",
          align: u
        };
      if (u === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (u === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new G("Unknown column alignment: " + u, l);
    }), a = {
      cols: i,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: i.length
    };
    return D0(t.parser, a, Eo(t.envName));
  },
  htmlBuilder: Ut,
  mathmlBuilder: $t
});
Vt({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(t) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[t.envName.replace("*", "")], r = "c", n = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: r
      }]
    };
    if (t.envName.charAt(t.envName.length - 1) === "*") {
      var i = t.parser;
      if (i.consumeSpaces(), i.fetch().text === "[") {
        if (i.consume(), i.consumeSpaces(), r = i.fetch().text, "lcr".indexOf(r) === -1)
          throw new G("Expected l or c or r", i.nextToken);
        i.consume(), i.consumeSpaces(), i.expect("]"), i.consume(), n.cols = [{
          type: "align",
          align: r
        }];
      }
    }
    var a = D0(t.parser, n, Eo(t.envName)), l = Math.max(0, ...a.body.map((o) => o.length));
    return a.cols = new Array(l).fill({
      type: "align",
      align: r
    }), e ? {
      type: "leftright",
      mode: t.mode,
      body: [a],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : a;
  },
  htmlBuilder: Ut,
  mathmlBuilder: $t
});
Vt({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(t) {
    var e = {
      arraystretch: 0.5
    }, r = D0(t.parser, e, "script");
    return r.colSeparationType = "small", r;
  },
  htmlBuilder: Ut,
  mathmlBuilder: $t
});
Vt({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(t, e) {
    var r = za(e[0]), n = r ? [e[0]] : J(e[0], "ordgroup").body, i = n.map(function(l) {
      var o = ko(l), u = o.text;
      if ("lc".indexOf(u) !== -1)
        return {
          type: "align",
          align: u
        };
      throw new G("Unknown column alignment: " + u, l);
    });
    if (i.length > 1)
      throw new G("{subarray} can contain only one column");
    var a = {
      cols: i,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (a = D0(t.parser, a, "script"), a.body.length > 0 && a.body[0].length > 1)
      throw new G("{subarray} can contain only one column");
    return a;
  },
  htmlBuilder: Ut,
  mathmlBuilder: $t
});
Vt({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(t) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, r = D0(t.parser, e, Eo(t.envName));
    return {
      type: "leftright",
      mode: t.mode,
      body: [r],
      left: t.envName.indexOf("r") > -1 ? "." : "\\{",
      right: t.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Ut,
  mathmlBuilder: $t
});
Vt({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: R2,
  htmlBuilder: Ut,
  mathmlBuilder: $t
});
Vt({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(t) {
    X.contains(["gather", "gather*"], t.envName) && Ea(t);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: To(t.envName),
      emptySingleRow: !0,
      leqno: t.parser.settings.leqno
    };
    return D0(t.parser, e, "display");
  },
  htmlBuilder: Ut,
  mathmlBuilder: $t
});
Vt({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: R2,
  htmlBuilder: Ut,
  mathmlBuilder: $t
});
Vt({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(t) {
    Ea(t);
    var e = {
      autoTag: To(t.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: t.parser.settings.leqno
    };
    return D0(t.parser, e, "display");
  },
  htmlBuilder: Ut,
  mathmlBuilder: $t
});
Vt({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(t) {
    return Ea(t), r7(t.parser);
  },
  htmlBuilder: Ut,
  mathmlBuilder: $t
});
O({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(t, e) {
    throw new G(t.funcName + " valid only within array environment");
  }
});
var b1 = D2;
O({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, i = e[0];
    if (i.type !== "ordgroup")
      throw new G("Invalid environment name", i);
    for (var a = "", l = 0; l < i.body.length; ++l)
      a += J(i.body[l], "textord").text;
    if (n === "\\begin") {
      if (!b1.hasOwnProperty(a))
        throw new G("No such environment: " + a, i);
      var o = b1[a], {
        args: u,
        optArgs: d
      } = r.parseArguments("\\begin{" + a + "}", o), h = {
        mode: r.mode,
        envName: a,
        parser: r
      }, m = o.handler(h, u, d);
      r.expect("\\end", !1);
      var p = r.nextToken, S = J(r.parseFunction(), "environment");
      if (S.name !== a)
        throw new G("Mismatch: \\begin{" + a + "} matched by \\end{" + S.name + "}", p);
      return m;
    }
    return {
      type: "environment",
      mode: r.mode,
      name: a,
      nameGroup: i
    };
  }
});
var I2 = (t, e) => {
  var r = t.font, n = e.withFont(r);
  return ae(t.body, n);
}, L2 = (t, e) => {
  var r = t.font, n = e.withFont(r);
  return oe(t.body, n);
}, M1 = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
O({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, i = na(e[0]), a = n;
    return a in M1 && (a = M1[a]), {
      type: "font",
      mode: r.mode,
      font: a.slice(1),
      body: i
    };
  },
  htmlBuilder: I2,
  mathmlBuilder: L2
});
O({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = e[0], i = X.isCharacterBox(n);
    return {
      type: "mclass",
      mode: r.mode,
      mclass: Ca(n),
      body: [{
        type: "font",
        mode: r.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: i
    };
  }
});
O({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n,
      breakOnTokenText: i
    } = t, {
      mode: a
    } = r, l = r.parseExpression(!0, i), o = "math" + n.slice(1);
    return {
      type: "font",
      mode: a,
      font: o,
      body: {
        type: "ordgroup",
        mode: r.mode,
        body: l
      }
    };
  },
  htmlBuilder: I2,
  mathmlBuilder: L2
});
var B2 = (t, e) => {
  var r = e;
  return t === "display" ? r = r.id >= Y.SCRIPT.id ? r.text() : Y.DISPLAY : t === "text" && r.size === Y.DISPLAY.size ? r = Y.TEXT : t === "script" ? r = Y.SCRIPT : t === "scriptscript" && (r = Y.SCRIPTSCRIPT), r;
}, No = (t, e) => {
  var r = B2(t.size, e.style), n = r.fracNum(), i = r.fracDen(), a;
  a = e.havingStyle(n);
  var l = ae(t.numer, a, e);
  if (t.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, u = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < o ? o : l.height, l.depth = l.depth < u ? u : l.depth;
  }
  a = e.havingStyle(i);
  var d = ae(t.denom, a, e), h, m, p;
  t.hasBarLine ? (t.barSize ? (m = ye(t.barSize, e), h = T.makeLineSpan("frac-line", e, m)) : h = T.makeLineSpan("frac-line", e), m = h.height, p = h.height) : (h = null, m = 0, p = e.fontMetrics().defaultRuleThickness);
  var S, M, z;
  r.size === Y.DISPLAY.size || t.size === "display" ? (S = e.fontMetrics().num1, m > 0 ? M = 3 * p : M = 7 * p, z = e.fontMetrics().denom1) : (m > 0 ? (S = e.fontMetrics().num2, M = p) : (S = e.fontMetrics().num3, M = 3 * p), z = e.fontMetrics().denom2);
  var A;
  if (h) {
    var v = e.fontMetrics().axisHeight;
    S - l.depth - (v + 0.5 * m) < M && (S += M - (S - l.depth - (v + 0.5 * m))), v - 0.5 * m - (d.height - z) < M && (z += M - (v - 0.5 * m - (d.height - z)));
    var x = -(v - 0.5 * m);
    A = T.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: z
      }, {
        type: "elem",
        elem: h,
        shift: x
      }, {
        type: "elem",
        elem: l,
        shift: -S
      }]
    }, e);
  } else {
    var y = S - l.depth - (d.height - z);
    y < M && (S += 0.5 * (M - y), z += 0.5 * (M - y)), A = T.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: z
      }, {
        type: "elem",
        elem: l,
        shift: -S
      }]
    }, e);
  }
  a = e.havingStyle(r), A.height *= a.sizeMultiplier / e.sizeMultiplier, A.depth *= a.sizeMultiplier / e.sizeMultiplier;
  var E;
  r.size === Y.DISPLAY.size ? E = e.fontMetrics().delim1 : r.size === Y.SCRIPTSCRIPT.size ? E = e.havingStyle(Y.SCRIPT).fontMetrics().delim2 : E = e.fontMetrics().delim2;
  var k, C;
  return t.leftDelim == null ? k = Nn(e, ["mopen"]) : k = e0.customSizedDelim(t.leftDelim, E, !0, e.havingStyle(r), t.mode, ["mopen"]), t.continued ? C = T.makeSpan([]) : t.rightDelim == null ? C = Nn(e, ["mclose"]) : C = e0.customSizedDelim(t.rightDelim, E, !0, e.havingStyle(r), t.mode, ["mclose"]), T.makeSpan(["mord"].concat(a.sizingClasses(e)), [k, T.makeSpan(["mfrac"], [A]), C], e);
}, Ao = (t, e) => {
  var r = new R.MathNode("mfrac", [oe(t.numer, e), oe(t.denom, e)]);
  if (!t.hasBarLine)
    r.setAttribute("linethickness", "0px");
  else if (t.barSize) {
    var n = ye(t.barSize, e);
    r.setAttribute("linethickness", I(n));
  }
  var i = B2(t.size, e.style);
  if (i.size !== e.style.size) {
    r = new R.MathNode("mstyle", [r]);
    var a = i.size === Y.DISPLAY.size ? "true" : "false";
    r.setAttribute("displaystyle", a), r.setAttribute("scriptlevel", "0");
  }
  if (t.leftDelim != null || t.rightDelim != null) {
    var l = [];
    if (t.leftDelim != null) {
      var o = new R.MathNode("mo", [new R.TextNode(t.leftDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), l.push(o);
    }
    if (l.push(r), t.rightDelim != null) {
      var u = new R.MathNode("mo", [new R.TextNode(t.rightDelim.replace("\\", ""))]);
      u.setAttribute("fence", "true"), l.push(u);
    }
    return xo(l);
  }
  return r;
};
O({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, i = e[0], a = e[1], l, o = null, u = null, d = "auto";
    switch (n) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        l = !1, o = "(", u = ")";
        break;
      case "\\\\bracefrac":
        l = !1, o = "\\{", u = "\\}";
        break;
      case "\\\\brackfrac":
        l = !1, o = "[", u = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (n) {
      case "\\dfrac":
      case "\\dbinom":
        d = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        d = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: r.mode,
      continued: !1,
      numer: i,
      denom: a,
      hasBarLine: l,
      leftDelim: o,
      rightDelim: u,
      size: d,
      barSize: null
    };
  },
  htmlBuilder: No,
  mathmlBuilder: Ao
});
O({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, i = e[0], a = e[1];
    return {
      type: "genfrac",
      mode: r.mode,
      continued: !0,
      numer: i,
      denom: a,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
O({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(t) {
    var {
      parser: e,
      funcName: r,
      token: n
    } = t, i;
    switch (r) {
      case "\\over":
        i = "\\frac";
        break;
      case "\\choose":
        i = "\\binom";
        break;
      case "\\atop":
        i = "\\\\atopfrac";
        break;
      case "\\brace":
        i = "\\\\bracefrac";
        break;
      case "\\brack":
        i = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: i,
      token: n
    };
  }
});
var z1 = ["display", "text", "script", "scriptscript"], C1 = function(e) {
  var r = null;
  return e.length > 0 && (r = e, r = r === "." ? null : r), r;
};
O({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(t, e) {
    var {
      parser: r
    } = t, n = e[4], i = e[5], a = na(e[0]), l = a.type === "atom" && a.family === "open" ? C1(a.text) : null, o = na(e[1]), u = o.type === "atom" && o.family === "close" ? C1(o.text) : null, d = J(e[2], "size"), h, m = null;
    d.isBlank ? h = !0 : (m = d.value, h = m.number > 0);
    var p = "auto", S = e[3];
    if (S.type === "ordgroup") {
      if (S.body.length > 0) {
        var M = J(S.body[0], "textord");
        p = z1[Number(M.text)];
      }
    } else
      S = J(S, "textord"), p = z1[Number(S.text)];
    return {
      type: "genfrac",
      mode: r.mode,
      numer: n,
      denom: i,
      continued: !1,
      hasBarLine: h,
      barSize: m,
      leftDelim: l,
      rightDelim: u,
      size: p
    };
  },
  htmlBuilder: No,
  mathmlBuilder: Ao
});
O({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(t, e) {
    var {
      parser: r,
      funcName: n,
      token: i
    } = t;
    return {
      type: "infix",
      mode: r.mode,
      replaceWith: "\\\\abovefrac",
      size: J(e[0], "size").value,
      token: i
    };
  }
});
O({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, i = e[0], a = X3(J(e[1], "infix").size), l = e[2], o = a.number > 0;
    return {
      type: "genfrac",
      mode: r.mode,
      numer: i,
      denom: l,
      continued: !1,
      hasBarLine: o,
      barSize: a,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: No,
  mathmlBuilder: Ao
});
var O2 = (t, e) => {
  var r = e.style, n, i;
  t.type === "supsub" ? (n = t.sup ? ae(t.sup, e.havingStyle(r.sup()), e) : ae(t.sub, e.havingStyle(r.sub()), e), i = J(t.base, "horizBrace")) : i = J(t, "horizBrace");
  var a = ae(i.base, e.havingBaseStyle(Y.DISPLAY)), l = a0.svgSpan(i, e), o;
  if (i.isOver ? (o = T.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: a
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: l
    }]
  }, e), o.children[0].children[0].children[1].classes.push("svg-align")) : (o = T.makeVList({
    positionType: "bottom",
    positionData: a.depth + 0.1 + l.height,
    children: [{
      type: "elem",
      elem: l
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: a
    }]
  }, e), o.children[0].children[0].children[0].classes.push("svg-align")), n) {
    var u = T.makeSpan(["mord", i.isOver ? "mover" : "munder"], [o], e);
    i.isOver ? o = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: u
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: n
      }]
    }, e) : o = T.makeVList({
      positionType: "bottom",
      positionData: u.depth + 0.2 + n.height + n.depth,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: u
      }]
    }, e);
  }
  return T.makeSpan(["mord", i.isOver ? "mover" : "munder"], [o], e);
}, y7 = (t, e) => {
  var r = a0.mathMLnode(t.label);
  return new R.MathNode(t.isOver ? "mover" : "munder", [oe(t.base, e), r]);
};
O({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t;
    return {
      type: "horizBrace",
      mode: r.mode,
      label: n,
      isOver: /^\\over/.test(n),
      base: e[0]
    };
  },
  htmlBuilder: O2,
  mathmlBuilder: y7
});
O({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = e[1], i = J(e[0], "url").url;
    return r.settings.isTrusted({
      command: "\\href",
      url: i
    }) ? {
      type: "href",
      mode: r.mode,
      href: i,
      body: be(n)
    } : r.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (t, e) => {
    var r = Fe(t.body, e, !1);
    return T.makeAnchor(t.href, [], r, e);
  },
  mathmlBuilder: (t, e) => {
    var r = N0(t.body, e);
    return r instanceof _t || (r = new _t("mrow", [r])), r.setAttribute("href", t.href), r;
  }
});
O({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = J(e[0], "url").url;
    if (!r.settings.isTrusted({
      command: "\\url",
      url: n
    }))
      return r.formatUnsupportedCmd("\\url");
    for (var i = [], a = 0; a < n.length; a++) {
      var l = n[a];
      l === "~" && (l = "\\textasciitilde"), i.push({
        type: "textord",
        mode: "text",
        text: l
      });
    }
    var o = {
      type: "text",
      mode: r.mode,
      font: "\\texttt",
      body: i
    };
    return {
      type: "href",
      mode: r.mode,
      href: n,
      body: be(o)
    };
  }
});
O({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "hbox",
      mode: r.mode,
      body: be(e[0])
    };
  },
  htmlBuilder(t, e) {
    var r = Fe(t.body, e, !1);
    return T.makeFragment(r);
  },
  mathmlBuilder(t, e) {
    return new R.MathNode("mrow", mt(t.body, e));
  }
});
O({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n,
      token: i
    } = t, a = J(e[0], "raw").string, l = e[1];
    r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var o, u = {};
    switch (n) {
      case "\\htmlClass":
        u.class = a, o = {
          command: "\\htmlClass",
          class: a
        };
        break;
      case "\\htmlId":
        u.id = a, o = {
          command: "\\htmlId",
          id: a
        };
        break;
      case "\\htmlStyle":
        u.style = a, o = {
          command: "\\htmlStyle",
          style: a
        };
        break;
      case "\\htmlData": {
        for (var d = a.split(","), h = 0; h < d.length; h++) {
          var m = d[h].split("=");
          if (m.length !== 2)
            throw new G("Error parsing key-value for \\htmlData");
          u["data-" + m[0].trim()] = m[1].trim();
        }
        o = {
          command: "\\htmlData",
          attributes: u
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return r.settings.isTrusted(o) ? {
      type: "html",
      mode: r.mode,
      attributes: u,
      body: be(l)
    } : r.formatUnsupportedCmd(n);
  },
  htmlBuilder: (t, e) => {
    var r = Fe(t.body, e, !1), n = ["enclosing"];
    t.attributes.class && n.push(...t.attributes.class.trim().split(/\s+/));
    var i = T.makeSpan(n, r, e);
    for (var a in t.attributes)
      a !== "class" && t.attributes.hasOwnProperty(a) && i.setAttribute(a, t.attributes[a]);
    return i;
  },
  mathmlBuilder: (t, e) => N0(t.body, e)
});
O({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (t, e) => {
    var {
      parser: r
    } = t;
    return {
      type: "htmlmathml",
      mode: r.mode,
      html: be(e[0]),
      mathml: be(e[1])
    };
  },
  htmlBuilder: (t, e) => {
    var r = Fe(t.html, e, !1);
    return T.makeFragment(r);
  },
  mathmlBuilder: (t, e) => N0(t.mathml, e)
});
var pl = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var r = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!r)
    throw new G("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(r[1] + r[2]),
    // sign + magnitude, cast to number
    unit: r[3]
  };
  if (!g6(n))
    throw new G("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
O({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (t, e, r) => {
    var {
      parser: n
    } = t, i = {
      number: 0,
      unit: "em"
    }, a = {
      number: 0.9,
      unit: "em"
    }, l = {
      number: 0,
      unit: "em"
    }, o = "";
    if (r[0])
      for (var u = J(r[0], "raw").string, d = u.split(","), h = 0; h < d.length; h++) {
        var m = d[h].split("=");
        if (m.length === 2) {
          var p = m[1].trim();
          switch (m[0].trim()) {
            case "alt":
              o = p;
              break;
            case "width":
              i = pl(p);
              break;
            case "height":
              a = pl(p);
              break;
            case "totalheight":
              l = pl(p);
              break;
            default:
              throw new G("Invalid key: '" + m[0] + "' in \\includegraphics.");
          }
        }
      }
    var S = J(e[0], "url").url;
    return o === "" && (o = S, o = o.replace(/^.*[\\/]/, ""), o = o.substring(0, o.lastIndexOf("."))), n.settings.isTrusted({
      command: "\\includegraphics",
      url: S
    }) ? {
      type: "includegraphics",
      mode: n.mode,
      alt: o,
      width: i,
      height: a,
      totalheight: l,
      src: S
    } : n.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (t, e) => {
    var r = ye(t.height, e), n = 0;
    t.totalheight.number > 0 && (n = ye(t.totalheight, e) - r);
    var i = 0;
    t.width.number > 0 && (i = ye(t.width, e));
    var a = {
      height: I(r + n)
    };
    i > 0 && (a.width = I(i)), n > 0 && (a.verticalAlign = I(-n));
    var l = new w6(t.src, t.alt, a);
    return l.height = r, l.depth = n, l;
  },
  mathmlBuilder: (t, e) => {
    var r = new R.MathNode("mglyph", []);
    r.setAttribute("alt", t.alt);
    var n = ye(t.height, e), i = 0;
    if (t.totalheight.number > 0 && (i = ye(t.totalheight, e) - n, r.setAttribute("valign", I(-i))), r.setAttribute("height", I(n + i)), t.width.number > 0) {
      var a = ye(t.width, e);
      r.setAttribute("width", I(a));
    }
    return r.setAttribute("src", t.src), r;
  }
});
O({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, i = J(e[0], "size");
    if (r.settings.strict) {
      var a = n[1] === "m", l = i.value.unit === "mu";
      a ? (l || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, " + ("not " + i.value.unit + " units")), r.mode !== "math" && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : l && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: r.mode,
      dimension: i.value
    };
  },
  htmlBuilder(t, e) {
    return T.makeGlue(t.dimension, e);
  },
  mathmlBuilder(t, e) {
    var r = ye(t.dimension, e);
    return new R.SpaceNode(r);
  }
});
O({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, i = e[0];
    return {
      type: "lap",
      mode: r.mode,
      alignment: n.slice(5),
      body: i
    };
  },
  htmlBuilder: (t, e) => {
    var r;
    t.alignment === "clap" ? (r = T.makeSpan([], [ae(t.body, e)]), r = T.makeSpan(["inner"], [r], e)) : r = T.makeSpan(["inner"], [ae(t.body, e)]);
    var n = T.makeSpan(["fix"], []), i = T.makeSpan([t.alignment], [r, n], e), a = T.makeSpan(["strut"]);
    return a.style.height = I(i.height + i.depth), i.depth && (a.style.verticalAlign = I(-i.depth)), i.children.unshift(a), i = T.makeSpan(["thinbox"], [i], e), T.makeSpan(["mord", "vbox"], [i], e);
  },
  mathmlBuilder: (t, e) => {
    var r = new R.MathNode("mpadded", [oe(t.body, e)]);
    if (t.alignment !== "rlap") {
      var n = t.alignment === "llap" ? "-1" : "-0.5";
      r.setAttribute("lspace", n + "width");
    }
    return r.setAttribute("width", "0px"), r;
  }
});
O({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(t, e) {
    var {
      funcName: r,
      parser: n
    } = t, i = n.mode;
    n.switchMode("math");
    var a = r === "\\(" ? "\\)" : "$", l = n.parseExpression(!1, a);
    return n.expect(a), n.switchMode(i), {
      type: "styling",
      mode: n.mode,
      style: "text",
      body: l
    };
  }
});
O({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(t, e) {
    throw new G("Mismatched " + t.funcName);
  }
});
var T1 = (t, e) => {
  switch (e.style.size) {
    case Y.DISPLAY.size:
      return t.display;
    case Y.TEXT.size:
      return t.text;
    case Y.SCRIPT.size:
      return t.script;
    case Y.SCRIPTSCRIPT.size:
      return t.scriptscript;
    default:
      return t.text;
  }
};
O({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (t, e) => {
    var {
      parser: r
    } = t;
    return {
      type: "mathchoice",
      mode: r.mode,
      display: be(e[0]),
      text: be(e[1]),
      script: be(e[2]),
      scriptscript: be(e[3])
    };
  },
  htmlBuilder: (t, e) => {
    var r = T1(t, e), n = Fe(r, e, !1);
    return T.makeFragment(n);
  },
  mathmlBuilder: (t, e) => {
    var r = T1(t, e);
    return N0(r, e);
  }
});
var F2 = (t, e, r, n, i, a, l) => {
  t = T.makeSpan([], [t]);
  var o = r && X.isCharacterBox(r), u, d;
  if (e) {
    var h = ae(e, n.havingStyle(i.sup()), n);
    d = {
      elem: h,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - h.depth)
    };
  }
  if (r) {
    var m = ae(r, n.havingStyle(i.sub()), n);
    u = {
      elem: m,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - m.height)
    };
  }
  var p;
  if (d && u) {
    var S = n.fontMetrics().bigOpSpacing5 + u.elem.height + u.elem.depth + u.kern + t.depth + l;
    p = T.makeVList({
      positionType: "bottom",
      positionData: S,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: I(-a)
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: I(a)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else if (u) {
    var M = t.height - l;
    p = T.makeVList({
      positionType: "top",
      positionData: M,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: I(-a)
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: t
      }]
    }, n);
  } else if (d) {
    var z = t.depth + l;
    p = T.makeVList({
      positionType: "bottom",
      positionData: z,
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: I(a)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else
    return t;
  var A = [p];
  if (u && a !== 0 && !o) {
    var y = T.makeSpan(["mspace"], [], n);
    y.style.marginRight = I(a), A.unshift(y);
  }
  return T.makeSpan(["mop", "op-limits"], A, n);
}, H2 = ["\\smallint"], Fr = (t, e) => {
  var r, n, i = !1, a;
  t.type === "supsub" ? (r = t.sup, n = t.sub, a = J(t.base, "op"), i = !0) : a = J(t, "op");
  var l = e.style, o = !1;
  l.size === Y.DISPLAY.size && a.symbol && !X.contains(H2, a.name) && (o = !0);
  var u;
  if (a.symbol) {
    var d = o ? "Size2-Regular" : "Size1-Regular", h = "";
    if ((a.name === "\\oiint" || a.name === "\\oiiint") && (h = a.name.slice(1), a.name = h === "oiint" ? "\\iint" : "\\iiint"), u = T.makeSymbol(a.name, d, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), h.length > 0) {
      var m = u.italic, p = T.staticSvg(h + "Size" + (o ? "2" : "1"), e);
      u = T.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: u,
          shift: 0
        }, {
          type: "elem",
          elem: p,
          shift: o ? 0.08 : 0
        }]
      }, e), a.name = "\\" + h, u.classes.unshift("mop"), u.italic = m;
    }
  } else if (a.body) {
    var S = Fe(a.body, e, !0);
    S.length === 1 && S[0] instanceof jt ? (u = S[0], u.classes[0] = "mop") : u = T.makeSpan(["mop"], S, e);
  } else {
    for (var M = [], z = 1; z < a.name.length; z++)
      M.push(T.mathsym(a.name[z], a.mode, e));
    u = T.makeSpan(["mop"], M, e);
  }
  var A = 0, y = 0;
  return (u instanceof jt || a.name === "\\oiint" || a.name === "\\oiiint") && !a.suppressBaseShift && (A = (u.height - u.depth) / 2 - e.fontMetrics().axisHeight, y = u.italic), i ? F2(u, r, n, e, l, y, A) : (A && (u.style.position = "relative", u.style.top = I(A)), u);
}, On = (t, e) => {
  var r;
  if (t.symbol)
    r = new _t("mo", [zt(t.name, t.mode)]), X.contains(H2, t.name) && r.setAttribute("largeop", "false");
  else if (t.body)
    r = new _t("mo", mt(t.body, e));
  else {
    r = new _t("mi", [new un(t.name.slice(1))]);
    var n = new _t("mo", [zt("⁡", "text")]);
    t.parentIsSupSub ? r = new _t("mrow", [r, n]) : r = y2([r, n]);
  }
  return r;
}, g7 = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
O({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, i = n;
    return i.length === 1 && (i = g7[i]), {
      type: "op",
      mode: r.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: i
    };
  },
  htmlBuilder: Fr,
  mathmlBuilder: On
});
O({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = e[0];
    return {
      type: "op",
      mode: r.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: be(n)
    };
  },
  htmlBuilder: Fr,
  mathmlBuilder: On
});
var w7 = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
O({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: r
    };
  },
  htmlBuilder: Fr,
  mathmlBuilder: On
});
O({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: r
    };
  },
  htmlBuilder: Fr,
  mathmlBuilder: On
});
O({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t, n = r;
    return n.length === 1 && (n = w7[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: Fr,
  mathmlBuilder: On
});
var j2 = (t, e) => {
  var r, n, i = !1, a;
  t.type === "supsub" ? (r = t.sup, n = t.sub, a = J(t.base, "operatorname"), i = !0) : a = J(t, "operatorname");
  var l;
  if (a.body.length > 0) {
    for (var o = a.body.map((m) => {
      var p = m.text;
      return typeof p == "string" ? {
        type: "textord",
        mode: m.mode,
        text: p
      } : m;
    }), u = Fe(o, e.withFont("mathrm"), !0), d = 0; d < u.length; d++) {
      var h = u[d];
      h instanceof jt && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = T.makeSpan(["mop"], u, e);
  } else
    l = T.makeSpan(["mop"], [], e);
  return i ? F2(l, r, n, e, e.style, 0, 0) : l;
}, x7 = (t, e) => {
  for (var r = mt(t.body, e.withFont("mathrm")), n = !0, i = 0; i < r.length; i++) {
    var a = r[i];
    if (!(a instanceof R.SpaceNode))
      if (a instanceof R.MathNode)
        switch (a.type) {
          case "mi":
          case "mn":
          case "ms":
          case "mspace":
          case "mtext":
            break;
          case "mo": {
            var l = a.children[0];
            a.children.length === 1 && l instanceof R.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
            break;
          }
          default:
            n = !1;
        }
      else
        n = !1;
  }
  if (n) {
    var o = r.map((h) => h.toText()).join("");
    r = [new R.TextNode(o)];
  }
  var u = new R.MathNode("mi", r);
  u.setAttribute("mathvariant", "normal");
  var d = new R.MathNode("mo", [zt("⁡", "text")]);
  return t.parentIsSupSub ? new R.MathNode("mrow", [u, d]) : R.newDocumentFragment([u, d]);
};
O({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, i = e[0];
    return {
      type: "operatorname",
      mode: r.mode,
      body: be(i),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: j2,
  mathmlBuilder: x7
});
J0({
  type: "ordgroup",
  htmlBuilder(t, e) {
    return t.semisimple ? T.makeFragment(Fe(t.body, e, !1)) : T.makeSpan(["mord"], Fe(t.body, e, !0), e);
  },
  mathmlBuilder(t, e) {
    return N0(t.body, e, !0);
  }
});
O({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(t, e) {
    var {
      parser: r
    } = t, n = e[0];
    return {
      type: "overline",
      mode: r.mode,
      body: n
    };
  },
  htmlBuilder(t, e) {
    var r = ae(t.body, e.havingCrampedStyle()), n = T.makeLineSpan("overline-line", e), i = e.fontMetrics().defaultRuleThickness, a = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 3 * i
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: i
      }]
    }, e);
    return T.makeSpan(["mord", "overline"], [a], e);
  },
  mathmlBuilder(t, e) {
    var r = new R.MathNode("mo", [new R.TextNode("‾")]);
    r.setAttribute("stretchy", "true");
    var n = new R.MathNode("mover", [oe(t.body, e), r]);
    return n.setAttribute("accent", "true"), n;
  }
});
O({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = e[0];
    return {
      type: "phantom",
      mode: r.mode,
      body: be(n)
    };
  },
  htmlBuilder: (t, e) => {
    var r = Fe(t.body, e.withPhantom(), !1);
    return T.makeFragment(r);
  },
  mathmlBuilder: (t, e) => {
    var r = mt(t.body, e);
    return new R.MathNode("mphantom", r);
  }
});
O({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = e[0];
    return {
      type: "hphantom",
      mode: r.mode,
      body: n
    };
  },
  htmlBuilder: (t, e) => {
    var r = T.makeSpan([], [ae(t.body, e.withPhantom())]);
    if (r.height = 0, r.depth = 0, r.children)
      for (var n = 0; n < r.children.length; n++)
        r.children[n].height = 0, r.children[n].depth = 0;
    return r = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }]
    }, e), T.makeSpan(["mord"], [r], e);
  },
  mathmlBuilder: (t, e) => {
    var r = mt(be(t.body), e), n = new R.MathNode("mphantom", r), i = new R.MathNode("mpadded", [n]);
    return i.setAttribute("height", "0px"), i.setAttribute("depth", "0px"), i;
  }
});
O({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = e[0];
    return {
      type: "vphantom",
      mode: r.mode,
      body: n
    };
  },
  htmlBuilder: (t, e) => {
    var r = T.makeSpan(["inner"], [ae(t.body, e.withPhantom())]), n = T.makeSpan(["fix"], []);
    return T.makeSpan(["mord", "rlap"], [r, n], e);
  },
  mathmlBuilder: (t, e) => {
    var r = mt(be(t.body), e), n = new R.MathNode("mphantom", r), i = new R.MathNode("mpadded", [n]);
    return i.setAttribute("width", "0px"), i;
  }
});
O({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(t, e) {
    var {
      parser: r
    } = t, n = J(e[0], "size").value, i = e[1];
    return {
      type: "raisebox",
      mode: r.mode,
      dy: n,
      body: i
    };
  },
  htmlBuilder(t, e) {
    var r = ae(t.body, e), n = ye(t.dy, e);
    return T.makeVList({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: r
      }]
    }, e);
  },
  mathmlBuilder(t, e) {
    var r = new R.MathNode("mpadded", [oe(t.body, e)]), n = t.dy.number + t.dy.unit;
    return r.setAttribute("voffset", n), r;
  }
});
O({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(t) {
    var {
      parser: e
    } = t;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
O({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: ["size", "size", "size"]
  },
  handler(t, e, r) {
    var {
      parser: n
    } = t, i = r[0], a = J(e[0], "size"), l = J(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: i && J(i, "size").value,
      width: a.value,
      height: l.value
    };
  },
  htmlBuilder(t, e) {
    var r = T.makeSpan(["mord", "rule"], [], e), n = ye(t.width, e), i = ye(t.height, e), a = t.shift ? ye(t.shift, e) : 0;
    return r.style.borderRightWidth = I(n), r.style.borderTopWidth = I(i), r.style.bottom = I(a), r.width = n, r.height = i + a, r.depth = -a, r.maxFontSize = i * 1.125 * e.sizeMultiplier, r;
  },
  mathmlBuilder(t, e) {
    var r = ye(t.width, e), n = ye(t.height, e), i = t.shift ? ye(t.shift, e) : 0, a = e.color && e.getColor() || "black", l = new R.MathNode("mspace");
    l.setAttribute("mathbackground", a), l.setAttribute("width", I(r)), l.setAttribute("height", I(n));
    var o = new R.MathNode("mpadded", [l]);
    return i >= 0 ? o.setAttribute("height", I(i)) : (o.setAttribute("height", I(i)), o.setAttribute("depth", I(-i))), o.setAttribute("voffset", I(i)), o;
  }
});
function V2(t, e, r) {
  for (var n = Fe(t, e, !1), i = e.sizeMultiplier / r.sizeMultiplier, a = 0; a < n.length; a++) {
    var l = n[a].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(n[a].classes, e.sizingClasses(r)) : n[a].classes[l + 1] === "reset-size" + e.size && (n[a].classes[l + 1] = "reset-size" + r.size), n[a].height *= i, n[a].depth *= i;
  }
  return T.makeFragment(n);
}
var E1 = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], S7 = (t, e) => {
  var r = e.havingSize(t.size);
  return V2(t.body, r, e);
};
O({
  type: "sizing",
  names: E1,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (t, e) => {
    var {
      breakOnTokenText: r,
      funcName: n,
      parser: i
    } = t, a = i.parseExpression(!1, r);
    return {
      type: "sizing",
      mode: i.mode,
      // Figure out what size to use based on the list of functions above
      size: E1.indexOf(n) + 1,
      body: a
    };
  },
  htmlBuilder: S7,
  mathmlBuilder: (t, e) => {
    var r = e.havingSize(t.size), n = mt(t.body, r), i = new R.MathNode("mstyle", n);
    return i.setAttribute("mathsize", I(r.sizeMultiplier)), i;
  }
});
O({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (t, e, r) => {
    var {
      parser: n
    } = t, i = !1, a = !1, l = r[0] && J(r[0], "ordgroup");
    if (l)
      for (var o = "", u = 0; u < l.body.length; ++u) {
        var d = l.body[u];
        if (o = d.text, o === "t")
          i = !0;
        else if (o === "b")
          a = !0;
        else {
          i = !1, a = !1;
          break;
        }
      }
    else
      i = !0, a = !0;
    var h = e[0];
    return {
      type: "smash",
      mode: n.mode,
      body: h,
      smashHeight: i,
      smashDepth: a
    };
  },
  htmlBuilder: (t, e) => {
    var r = T.makeSpan([], [ae(t.body, e)]);
    if (!t.smashHeight && !t.smashDepth)
      return r;
    if (t.smashHeight && (r.height = 0, r.children))
      for (var n = 0; n < r.children.length; n++)
        r.children[n].height = 0;
    if (t.smashDepth && (r.depth = 0, r.children))
      for (var i = 0; i < r.children.length; i++)
        r.children[i].depth = 0;
    var a = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }]
    }, e);
    return T.makeSpan(["mord"], [a], e);
  },
  mathmlBuilder: (t, e) => {
    var r = new R.MathNode("mpadded", [oe(t.body, e)]);
    return t.smashHeight && r.setAttribute("height", "0px"), t.smashDepth && r.setAttribute("depth", "0px"), r;
  }
});
O({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(t, e, r) {
    var {
      parser: n
    } = t, i = r[0], a = e[0];
    return {
      type: "sqrt",
      mode: n.mode,
      body: a,
      index: i
    };
  },
  htmlBuilder(t, e) {
    var r = ae(t.body, e.havingCrampedStyle());
    r.height === 0 && (r.height = e.fontMetrics().xHeight), r = T.wrapFragment(r, e);
    var n = e.fontMetrics(), i = n.defaultRuleThickness, a = i;
    e.style.id < Y.TEXT.id && (a = e.fontMetrics().xHeight);
    var l = i + a / 4, o = r.height + r.depth + l + i, {
      span: u,
      ruleWidth: d,
      advanceWidth: h
    } = e0.sqrtImage(o, e), m = u.height - d;
    m > r.height + r.depth + l && (l = (l + m - r.height - r.depth) / 2);
    var p = u.height - r.height - l - d;
    r.style.paddingLeft = I(h);
    var S = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(r.height + p)
      }, {
        type: "elem",
        elem: u
      }, {
        type: "kern",
        size: d
      }]
    }, e);
    if (t.index) {
      var M = e.havingStyle(Y.SCRIPTSCRIPT), z = ae(t.index, M, e), A = 0.6 * (S.height - S.depth), y = T.makeVList({
        positionType: "shift",
        positionData: -A,
        children: [{
          type: "elem",
          elem: z
        }]
      }, e), v = T.makeSpan(["root"], [y]);
      return T.makeSpan(["mord", "sqrt"], [v, S], e);
    } else
      return T.makeSpan(["mord", "sqrt"], [S], e);
  },
  mathmlBuilder(t, e) {
    var {
      body: r,
      index: n
    } = t;
    return n ? new R.MathNode("mroot", [oe(r, e), oe(n, e)]) : new R.MathNode("msqrt", [oe(r, e)]);
  }
});
var N1 = {
  display: Y.DISPLAY,
  text: Y.TEXT,
  script: Y.SCRIPT,
  scriptscript: Y.SCRIPTSCRIPT
};
O({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(t, e) {
    var {
      breakOnTokenText: r,
      funcName: n,
      parser: i
    } = t, a = i.parseExpression(!0, r), l = n.slice(1, n.length - 5);
    return {
      type: "styling",
      mode: i.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: l,
      body: a
    };
  },
  htmlBuilder(t, e) {
    var r = N1[t.style], n = e.havingStyle(r).withFont("");
    return V2(t.body, n, e);
  },
  mathmlBuilder(t, e) {
    var r = N1[t.style], n = e.havingStyle(r), i = mt(t.body, n), a = new R.MathNode("mstyle", i), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = l[t.style];
    return a.setAttribute("scriptlevel", o[0]), a.setAttribute("displaystyle", o[1]), a;
  }
});
var k7 = function(e, r) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var i = n.limits && (r.style.size === Y.DISPLAY.size || n.alwaysHandleSupSub);
      return i ? Fr : null;
    } else if (n.type === "operatorname") {
      var a = n.alwaysHandleSupSub && (r.style.size === Y.DISPLAY.size || n.limits);
      return a ? j2 : null;
    } else {
      if (n.type === "accent")
        return X.isCharacterBox(n.base) ? bo : null;
      if (n.type === "horizBrace") {
        var l = !e.sub;
        return l === n.isOver ? O2 : null;
      } else
        return null;
    }
  else
    return null;
};
J0({
  type: "supsub",
  htmlBuilder(t, e) {
    var r = k7(t, e);
    if (r)
      return r(t, e);
    var {
      base: n,
      sup: i,
      sub: a
    } = t, l = ae(n, e), o, u, d = e.fontMetrics(), h = 0, m = 0, p = n && X.isCharacterBox(n);
    if (i) {
      var S = e.havingStyle(e.style.sup());
      o = ae(i, S, e), p || (h = l.height - S.fontMetrics().supDrop * S.sizeMultiplier / e.sizeMultiplier);
    }
    if (a) {
      var M = e.havingStyle(e.style.sub());
      u = ae(a, M, e), p || (m = l.depth + M.fontMetrics().subDrop * M.sizeMultiplier / e.sizeMultiplier);
    }
    var z;
    e.style === Y.DISPLAY ? z = d.sup1 : e.style.cramped ? z = d.sup3 : z = d.sup2;
    var A = e.sizeMultiplier, y = I(0.5 / d.ptPerEm / A), v = null;
    if (u) {
      var x = t.base && t.base.type === "op" && t.base.name && (t.base.name === "\\oiint" || t.base.name === "\\oiiint");
      (l instanceof jt || x) && (v = I(-l.italic));
    }
    var E;
    if (o && u) {
      h = Math.max(h, z, o.depth + 0.25 * d.xHeight), m = Math.max(m, d.sub2);
      var k = d.defaultRuleThickness, C = 4 * k;
      if (h - o.depth - (u.height - m) < C) {
        m = C - (h - o.depth) + u.height;
        var N = 0.8 * d.xHeight - (h - o.depth);
        N > 0 && (h += N, m -= N);
      }
      var _ = [{
        type: "elem",
        elem: u,
        shift: m,
        marginRight: y,
        marginLeft: v
      }, {
        type: "elem",
        elem: o,
        shift: -h,
        marginRight: y
      }];
      E = T.makeVList({
        positionType: "individualShift",
        children: _
      }, e);
    } else if (u) {
      m = Math.max(m, d.sub1, u.height - 0.8 * d.xHeight);
      var F = [{
        type: "elem",
        elem: u,
        marginLeft: v,
        marginRight: y
      }];
      E = T.makeVList({
        positionType: "shift",
        positionData: m,
        children: F
      }, e);
    } else if (o)
      h = Math.max(h, z, o.depth + 0.25 * d.xHeight), E = T.makeVList({
        positionType: "shift",
        positionData: -h,
        children: [{
          type: "elem",
          elem: o,
          marginRight: y
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var U = ps(l, "right") || "mord";
    return T.makeSpan([U], [l, T.makeSpan(["msupsub"], [E])], e);
  },
  mathmlBuilder(t, e) {
    var r = !1, n, i;
    t.base && t.base.type === "horizBrace" && (i = !!t.sup, i === t.base.isOver && (r = !0, n = t.base.isOver)), t.base && (t.base.type === "op" || t.base.type === "operatorname") && (t.base.parentIsSupSub = !0);
    var a = [oe(t.base, e)];
    t.sub && a.push(oe(t.sub, e)), t.sup && a.push(oe(t.sup, e));
    var l;
    if (r)
      l = n ? "mover" : "munder";
    else if (t.sub)
      if (t.sup) {
        var d = t.base;
        d && d.type === "op" && d.limits && e.style === Y.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === Y.DISPLAY || d.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var u = t.base;
        u && u.type === "op" && u.limits && (e.style === Y.DISPLAY || u.alwaysHandleSupSub) || u && u.type === "operatorname" && u.alwaysHandleSupSub && (u.limits || e.style === Y.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var o = t.base;
      o && o.type === "op" && o.limits && (e.style === Y.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === Y.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new R.MathNode(l, a);
  }
});
J0({
  type: "atom",
  htmlBuilder(t, e) {
    return T.mathsym(t.text, t.mode, e, ["m" + t.family]);
  },
  mathmlBuilder(t, e) {
    var r = new R.MathNode("mo", [zt(t.text, t.mode)]);
    if (t.family === "bin") {
      var n = So(t, e);
      n === "bold-italic" && r.setAttribute("mathvariant", n);
    } else
      t.family === "punct" ? r.setAttribute("separator", "true") : (t.family === "open" || t.family === "close") && r.setAttribute("stretchy", "false");
    return r;
  }
});
var U2 = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
J0({
  type: "mathord",
  htmlBuilder(t, e) {
    return T.makeOrd(t, e, "mathord");
  },
  mathmlBuilder(t, e) {
    var r = new R.MathNode("mi", [zt(t.text, t.mode, e)]), n = So(t, e) || "italic";
    return n !== U2[r.type] && r.setAttribute("mathvariant", n), r;
  }
});
J0({
  type: "textord",
  htmlBuilder(t, e) {
    return T.makeOrd(t, e, "textord");
  },
  mathmlBuilder(t, e) {
    var r = zt(t.text, t.mode, e), n = So(t, e) || "normal", i;
    return t.mode === "text" ? i = new R.MathNode("mtext", [r]) : /[0-9]/.test(t.text) ? i = new R.MathNode("mn", [r]) : t.text === "\\prime" ? i = new R.MathNode("mo", [r]) : i = new R.MathNode("mi", [r]), n !== U2[i.type] && i.setAttribute("mathvariant", n), i;
  }
});
var vl = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, yl = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
J0({
  type: "spacing",
  htmlBuilder(t, e) {
    if (yl.hasOwnProperty(t.text)) {
      var r = yl[t.text].className || "";
      if (t.mode === "text") {
        var n = T.makeOrd(t, e, "textord");
        return n.classes.push(r), n;
      } else
        return T.makeSpan(["mspace", r], [T.mathsym(t.text, t.mode, e)], e);
    } else {
      if (vl.hasOwnProperty(t.text))
        return T.makeSpan(["mspace", vl[t.text]], [], e);
      throw new G('Unknown type of space "' + t.text + '"');
    }
  },
  mathmlBuilder(t, e) {
    var r;
    if (yl.hasOwnProperty(t.text))
      r = new R.MathNode("mtext", [new R.TextNode(" ")]);
    else {
      if (vl.hasOwnProperty(t.text))
        return new R.MathNode("mspace");
      throw new G('Unknown type of space "' + t.text + '"');
    }
    return r;
  }
});
var A1 = () => {
  var t = new R.MathNode("mtd", []);
  return t.setAttribute("width", "50%"), t;
};
J0({
  type: "tag",
  mathmlBuilder(t, e) {
    var r = new R.MathNode("mtable", [new R.MathNode("mtr", [A1(), new R.MathNode("mtd", [N0(t.body, e)]), A1(), new R.MathNode("mtd", [N0(t.tag, e)])])]);
    return r.setAttribute("width", "100%"), r;
  }
});
var _1 = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, P1 = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, b7 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, D1 = (t, e) => {
  var r = t.font;
  return r ? _1[r] ? e.withTextFontFamily(_1[r]) : P1[r] ? e.withTextFontWeight(P1[r]) : e.withTextFontShape(b7[r]) : e;
};
O({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, i = e[0];
    return {
      type: "text",
      mode: r.mode,
      body: be(i),
      font: n
    };
  },
  htmlBuilder(t, e) {
    var r = D1(t, e), n = Fe(t.body, r, !0);
    return T.makeSpan(["mord", "text"], n, r);
  },
  mathmlBuilder(t, e) {
    var r = D1(t, e);
    return N0(t.body, r);
  }
});
O({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "underline",
      mode: r.mode,
      body: e[0]
    };
  },
  htmlBuilder(t, e) {
    var r = ae(t.body, e), n = T.makeLineSpan("underline-line", e), i = e.fontMetrics().defaultRuleThickness, a = T.makeVList({
      positionType: "top",
      positionData: r.height,
      children: [{
        type: "kern",
        size: i
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 3 * i
      }, {
        type: "elem",
        elem: r
      }]
    }, e);
    return T.makeSpan(["mord", "underline"], [a], e);
  },
  mathmlBuilder(t, e) {
    var r = new R.MathNode("mo", [new R.TextNode("‾")]);
    r.setAttribute("stretchy", "true");
    var n = new R.MathNode("munder", [oe(t.body, e), r]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
O({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "vcenter",
      mode: r.mode,
      body: e[0]
    };
  },
  htmlBuilder(t, e) {
    var r = ae(t.body, e), n = e.fontMetrics().axisHeight, i = 0.5 * (r.height - n - (r.depth + n));
    return T.makeVList({
      positionType: "shift",
      positionData: i,
      children: [{
        type: "elem",
        elem: r
      }]
    }, e);
  },
  mathmlBuilder(t, e) {
    return new R.MathNode("mpadded", [oe(t.body, e)], ["vcenter"]);
  }
});
O({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(t, e, r) {
    throw new G("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(t, e) {
    for (var r = R1(t), n = [], i = e.havingStyle(e.style.text()), a = 0; a < r.length; a++) {
      var l = r[a];
      l === "~" && (l = "\\textasciitilde"), n.push(T.makeSymbol(l, "Typewriter-Regular", t.mode, i, ["mord", "texttt"]));
    }
    return T.makeSpan(["mord", "text"].concat(i.sizingClasses(e)), T.tryCombineChars(n), i);
  },
  mathmlBuilder(t, e) {
    var r = new R.TextNode(R1(t)), n = new R.MathNode("mtext", [r]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var R1 = (t) => t.body.replace(/ /g, t.star ? "␣" : " ");
I(Xt["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * Xt["Main-Regular"]["A".charCodeAt(0)][1]);
typeof document < "u" && document.compatMode !== "CSS1Compat" && typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.");
var _o = Z.createContext(null);
_o.displayName = "CoordinateContext";
function M7() {
  const t = Z.useContext(_o);
  return vr(
    t
  ), t;
}
var z7 = _o;
function di(t, e = 0) {
  const r = Math.pow(10, e || 0);
  return Math.round(t * r) / r;
}
function Rr(t, e, r = 1) {
  const n = [];
  for (let a = t; a < e - r / 2; a += r)
    n.push(a);
  const i = n[n.length - 1] + r;
  return Math.abs(e - i) < r / 1e-6 ? n.push(e) : n.push(i), n;
}
function C7(t, e, r) {
  return Math.min(Math.max(t, e), r);
}
var { round: I1, ceil: L1, floor: B1, log2: O1 } = Math, Po = Z.createContext({
  xPanes: [],
  yPanes: [],
  xPaneRange: [0, 0],
  yPaneRange: [0, 0]
});
Po.displayName = "PaneContext";
function Na() {
  return Z.useContext(Po);
}
function $2({ children: t }) {
  const { xMin: e, xMax: r, yMin: n, yMax: i } = M7(), a = 2 ** I1(O1(r - e) - 1), l = 2 ** I1(O1(i - n) - 1), o = 1 / 8, u = a * B1(e / a - o), d = a * L1(r / a + o), h = l * B1(n / l - o), m = l * L1(i / l + o), p = Z.useMemo(
    () => Rr(u, d - a, a).map(
      (z) => [z, z + a]
    ),
    [u, d, a]
  ), S = Z.useMemo(
    () => Rr(h, m - l, l).map(
      (z) => [z, z + l]
    ),
    [h, m, l]
  ), M = Z.useMemo(
    () => ({
      xPanes: p,
      yPanes: S,
      xPaneRange: [u, d],
      yPaneRange: [h, m]
    }),
    [p, S, u, d, h, m]
  );
  return /* @__PURE__ */ $.jsx(Po.Provider, { value: M, children: t });
}
$2.displayName = "PaneManager";
var T7 = $2, le;
((t) => {
  function e(k, C) {
    return [k[0] + C[0], k[1] + C[1]];
  }
  t.add = e;
  function r(k, C) {
    return [k[0] - C[0], k[1] - C[1]];
  }
  t.sub = r;
  function n(k) {
    return Math.sqrt(k[0] * k[0] + k[1] * k[1]);
  }
  t.mag = n;
  function i(k) {
    return [-k[1], k[0]];
  }
  t.normal = i;
  function a(k, C, N) {
    const _ = r(C, k), F = n(_);
    return e(k, l(_, N * F));
  }
  t.lerp = a;
  function l(k, C) {
    const N = n(k);
    return u(k, C / N);
  }
  t.withMag = l;
  function o(k) {
    return l(k, 1);
  }
  t.normalize = o;
  function u(k, C) {
    return [k[0] * C, k[1] * C];
  }
  t.scale = u;
  function d(k, C) {
    return [k[0] * C[0] + k[1] * C[1] + C[2], k[0] * C[3] + k[1] * C[4] + C[5]];
  }
  t.transform = d;
  function h(k, C) {
    return L0(
      k[0] * C[0] + k[1] * C[3],
      k[3] * C[0] + k[4] * C[3],
      k[0] * C[1] + k[1] * C[4],
      k[3] * C[1] + k[4] * C[4],
      k[0] * C[2] + k[1] * C[5] + k[2],
      k[3] * C[2] + k[4] * C[5] + k[5]
    );
  }
  t.matrixMult = h;
  function m(k, C) {
    const N = Math.cos(C), _ = Math.sin(C);
    return [k[0] * N - k[1] * _, k[0] * _ + k[1] * N];
  }
  t.rotate = m;
  function p(k, C, N) {
    const _ = r(k, C);
    return e(C, m(_, N));
  }
  t.rotateAbout = p;
  function S(k, C) {
    return a(k, C, 0.5);
  }
  t.midpoint = S;
  function M(k, C) {
    return Math.sqrt(z(k, C));
  }
  t.dist = M;
  function z(k, C) {
    return Math.pow(C[0] - k[0], 2) + Math.pow(C[1] - k[1], 2);
  }
  t.squareDist = z;
  function A(k, C) {
    return k[0] * C[0] + k[1] * C[1];
  }
  t.dot = A;
  function y(k) {
    return k[0] * k[4] - k[3] * k[1];
  }
  t.det = y;
  function v(k) {
    const C = y(k);
    if (!C)
      return null;
    const N = 1 / C, _ = k[0], F = k[1], U = k[2], ee = k[3], re = k[4], Me = k[5];
    return L0(
      N * re,
      N * -ee,
      N * -F,
      N * _,
      N * (Me * F - U * re),
      N * (-Me * _ + U * ee)
    );
  }
  t.matrixInvert = v;
  function x(k = null) {
    const C = k || L0();
    return {
      mult: (N) => x(h(N, C)),
      translate: (N, _) => x(h(L0(1, 0, 0, 1, N, _), C)),
      rotate: (N) => {
        const _ = Math.cos(N), F = Math.sin(N);
        return x(h(L0(_, F, -F, _), C));
      },
      scale: (N, _) => x(h(L0(N, 0, 0, _), C)),
      shear: (N, _) => x(h(L0(1, _, N, 1), C)),
      get: () => [...C]
    };
  }
  t.matrixBuilder = x;
  function E(k) {
    const [C, N, _, F, U, ee] = k;
    return `matrix(${C}, ${F}, ${N}, ${U}, ${_}, ${ee})`;
  }
  t.toCSS = E, t.identity = x().get();
})(le || (le = {}));
function L0(t = 1, e = 0, r = 0, n = 1, i = 0, a = 0) {
  return [t, r, i, e, n, a];
}
var Do = Z.createContext(null);
Do.displayName = "TransformContext";
function Aa() {
  const t = Z.useContext(Do);
  return vr(
    t
  ), t;
}
var q2 = Z.createContext({
  xSpan: 0,
  ySpan: 0
});
q2.displayName = "SpanContext";
function E7({ minZoom: t, maxZoom: e }) {
  const [r, n] = Z.useState(le.identity), i = Z.useRef(le.identity);
  return {
    matrix: r,
    setBase() {
      i.current = r;
    },
    move({ zoom: a, pan: l }) {
      const o = 1 / ((a == null ? void 0 : a.scale) ?? 1), u = (a == null ? void 0 : a.at) ?? [0, 0], d = i.current[0], h = 1 / e / d, m = 1 / t / d, p = C7(o, h, m), S = le.matrixBuilder(i.current).translate(...le.scale(u, -1)).scale(p, p).translate(...le.scale(u, 1)).translate(...l ?? [0, 0]).get();
      n(S);
    }
  };
}
function N7(t) {
  const [e, r] = Z.useState(!1), n = Z.useRef(0);
  return Z.useEffect(() => {
    if (!t)
      return;
    function i() {
      r(!1), clearTimeout(n.current), n.current = setTimeout(() => {
        r(!0);
      }, 500);
    }
    return window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i);
  }, [t]), {
    wheelEnabled: t ? e : !1,
    handleMouseMove() {
      r(!0);
    }
  };
}
var W2 = Z.createContext({
  overrideHeight: void 0
});
W2.Provider;
function Y2({
  width: t = "auto",
  height: e = 500,
  pan: r = !0,
  zoom: n = !1,
  viewBox: i = { x: [-3, 3], y: [-3, 3] },
  preserveAspectRatio: a = "contain",
  children: l,
  ssr: o = !1,
  onClick: u = void 0
}) {
  const h = Z.useContext(W2).overrideHeight ?? e, m = t === "auto" ? "100%" : `${t}px`, p = Z.useRef(null), { width: S = t === "auto" ? o ? 500 : 0 : t } = N5({
    ref: t === "auto" ? p : null
  });
  return /* @__PURE__ */ $.jsx(
    "div",
    {
      className: "MafsView",
      style: { width: m, height: h },
      tabIndex: r || n ? 0 : -1,
      ref: p,
      children: S > 0 && /* @__PURE__ */ $.jsx(
        A7,
        {
          width: S,
          height: h,
          desiredCssWidth: m,
          rootRef: p,
          pan: r,
          zoom: n,
          viewBox: i,
          preserveAspectRatio: a,
          ssr: o,
          onClick: u,
          children: l
        }
      )
    }
  );
}
function A7({
  width: t,
  height: e,
  desiredCssWidth: r,
  rootRef: n,
  pan: i,
  zoom: a,
  viewBox: l,
  preserveAspectRatio: o,
  children: u,
  onClick: d
}) {
  var He, qe, at, L;
  let h = 1, m = 1;
  typeof a == "object" ? (vr(a.min > 0 && a.min <= 1), vr(a.max >= 1), h = a.min, m = a.max) : a && (h = 0.5, m = 5);
  const p = E7({ minZoom: h, maxZoom: m }), S = (l == null ? void 0 : l.padding) ?? 0.5;
  let M = (((He = l == null ? void 0 : l.x) == null ? void 0 : He[0]) ?? 0) - S, z = (((qe = l == null ? void 0 : l.x) == null ? void 0 : qe[1]) ?? 0) + S, A = (((at = l == null ? void 0 : l.y) == null ? void 0 : at[0]) ?? 0) - S, y = (((L = l == null ? void 0 : l.y) == null ? void 0 : L[1]) ?? 0) + S;
  if (o === "contain") {
    const B = t / e;
    if ((z - M) / (y - A) > B) {
      const q = (y + A) / 2, K = (z - M) / B / 2;
      A = q - K, y = q + K;
    } else {
      const q = (z + M) / 2, K = (y - A) * B / 2;
      M = q - K, z = q + K;
    }
  }
  [M, A] = le.transform([M, A], p.matrix), [z, y] = le.transform([z, y], p.matrix);
  const v = z - M, x = y - A, E = Z.useMemo(() => {
    const B = di(1 / v * t, 5), j = di(-1 / x * e, 5);
    return le.matrixBuilder().scale(B, j).get();
  }, [e, t, v, x]), k = di(M / (z - M) * t, 10), C = di(y / (A - y) * e, 10), N = le.matrixInvert(E), _ = Z.useRef([0, 0]), F = Z.useRef([0, 0]);
  function U(B) {
    const j = n.current;
    vr(j), vr(N);
    const q = j.getBoundingClientRect();
    return le.transform(
      [B[0] - q.left + k, B[1] - q.top + C],
      N
    );
  }
  const ee = N7(!!a), re = Z.useRef(!1);
  V3(
    {
      onDrag: ({ movement: B, first: j, event: q, type: K, pinching: ze, memo: Ae = [0, 0], last: pt }) => {
        if (ze)
          return B;
        j && p.setBase();
        const [vt, lt] = le.sub(B, Ae);
        p.move({ pan: [-vt / t * v, lt / e * x] });
        const qt = K.includes("key");
        return qt && (q == null || q.preventDefault()), pt && (re.current = !0, setTimeout(() => re.current = !1, 10)), !qt && j ? B : Ae;
      },
      onPinch: ({ first: B, movement: [j], origin: q, event: K, last: ze }) => {
        if (!K.currentTarget || !N)
          return;
        B && (p.setBase(), _.current = q, F.current = i ? U(q) : [(M + z) / 2, (A + y) / 2]);
        let Ae = [0, 0];
        i && (Ae = le.transform(le.sub(q, _.current), N)), p.move({ zoom: { at: F.current, scale: j }, pan: le.scale(Ae, -1) }), ze && p.setBase();
      },
      onWheel: ({ pinching: B, event: j, delta: [, q] }) => {
        if (B)
          return;
        const K = 2 / (1 + Math.exp(-q / 300)), ze = U([j.clientX, j.clientY]);
        p.setBase(), p.move({ zoom: { at: ze, scale: 1 / K } });
      },
      onKeyDown: ({ event: B }) => {
        if (B.metaKey)
          return;
        const j = { Equal: 1, Minus: -1 }[B.code] ?? 0;
        if (!j)
          return;
        let q = 0.1;
        (B.altKey || B.metaKey) && (q = 0.01), B.shiftKey && (q = 0.3);
        const K = 1 + j * q, ze = [(z + M) / 2, (y + A) / 2];
        p.setBase(), p.move({ zoom: { at: ze, scale: K } });
      },
      onMouseMove: () => {
        ee.handleMouseMove();
      },
      onClick: ({ event: B }) => {
        if (!d || !n.current || re.current)
          return;
        const j = n.current.getBoundingClientRect(), q = B.clientX - j.left, K = j.bottom - B.clientY, ze = q / t * v + M, Ae = K / e * x + A;
        d([ze, Ae], B);
      }
    },
    {
      drag: { enabled: i, eventOptions: { passive: !1 }, threshold: 1 },
      pinch: { enabled: !!a, eventOptions: { passive: !1 } },
      wheel: {
        enabled: ee.wheelEnabled,
        preventDefault: !0,
        eventOptions: { passive: !1 }
      },
      target: n
    }
  );
  const Me = le.toCSS(E), ne = Z.useMemo(
    () => ({ xMin: M, xMax: z, yMin: A, yMax: y, height: e, width: t }),
    [M, z, A, y, e, t]
  );
  return /* @__PURE__ */ $.jsx(z7.Provider, { value: ne, children: /* @__PURE__ */ $.jsx(q2.Provider, { value: { xSpan: v, ySpan: x }, children: /* @__PURE__ */ $.jsx(
    Do.Provider,
    {
      value: { userTransform: le.identity, viewTransform: E },
      children: /* @__PURE__ */ $.jsx(T7, { children: /* @__PURE__ */ $.jsx(
        "svg",
        {
          width: t,
          height: e,
          viewBox: `${k} ${C} ${t} ${e}`,
          preserveAspectRatio: "xMidYMin",
          style: {
            width: r,
            touchAction: i ? "none" : "auto",
            "--mafs-view-transform": Me,
            "--mafs-user-transform": "translate(0, 0)"
          },
          children: u
        }
      ) })
    }
  ) }) });
}
Y2.displayName = "Mafs";
var gs = (t) => /* @__PURE__ */ $.jsxs($.Fragment, { children: [
  t,
  t < 0 && /* @__PURE__ */ $.jsx("tspan", { visibility: "hidden", children: "-" })
] }), ia = {
  axis: !0,
  lines: 1,
  labels: gs
};
function Ro({ separation: t, labelMaker: e }) {
  const { viewTransform: r } = Aa(), { xPanes: n } = Na();
  return /* @__PURE__ */ $.jsx("g", { className: "mafs-axis", children: n.map(([i, a]) => /* @__PURE__ */ $.jsx("g", { children: G2(i, a, t).filter((l) => Math.abs(l) > t / 1e6).map((l) => /* @__PURE__ */ $.jsx(
    "text",
    {
      x: le.transform([l, 0], r)[0],
      y: 5,
      dominantBaseline: "hanging",
      textAnchor: "middle",
      style: { fill: "var(--mafs-origin-color)", paintOrder: "stroke" },
      children: e(l)
    },
    l
  )) }, `${i},${a}`)) });
}
Ro.displayName = "CartesianCoordinates.XLabels";
function Io({ separation: t, labelMaker: e }) {
  const { viewTransform: r } = Aa(), { yPanes: n } = Na();
  return /* @__PURE__ */ $.jsx("g", { className: "mafs-axis", children: n.map(([i, a]) => /* @__PURE__ */ $.jsx("g", { children: G2(i, a, t).filter((l) => Math.abs(l) > t / 1e6).map((l) => /* @__PURE__ */ $.jsx(
    "text",
    {
      x: 5,
      y: le.transform([0, l], r)[1],
      dominantBaseline: "central",
      style: { fill: "var(--mafs-origin-color)", paintOrder: "stroke" },
      children: e(l)
    },
    l
  )) }, `${i},${a}`)) });
}
Io.displayName = "CartesianCoordinates.YLabels";
var _7 = 0;
function K2({
  xAxis: t,
  yAxis: e,
  subdivisions: r = !1
}) {
  const n = t !== !1, i = e !== !1, a = { subdivisions: r, ...ia, ...t }, l = { subdivisions: r, ...ia, ...e }, o = `cartesian-${_7++}`, { viewTransform: u } = Aa(), { xPaneRange: d, yPaneRange: h } = Na(), [m, p] = d, [S, M] = h, [z, A] = le.transform([m, S], u), [y, v] = le.transform([p, M], u), x = a.lines || 1, E = l.lines || 1, [k, C] = le.transform([x, -E], u), N = a.subdivisions || 1, _ = l.subdivisions || 1, F = k / N, U = C / _;
  return /* @__PURE__ */ $.jsxs("g", { fill: "none", children: [
    /* @__PURE__ */ $.jsxs("pattern", { x: 0, y: 0, width: k, height: C, id: o, patternUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ $.jsx(
        "pattern",
        {
          width: F,
          height: U,
          id: `${o}-subdivision`,
          patternUnits: "userSpaceOnUse",
          children: /* @__PURE__ */ $.jsxs("g", { stroke: "var(--grid-line-subdivision-color)", children: [
            n !== !1 && N > 1 && /* @__PURE__ */ $.jsxs($.Fragment, { children: [
              /* @__PURE__ */ $.jsx("line", { x1: 0, y1: 0, x2: 0, y2: U }),
              /* @__PURE__ */ $.jsx("line", { x1: F, y1: 0, x2: F, y2: U })
            ] }),
            i !== !1 && _ > 1 && /* @__PURE__ */ $.jsxs($.Fragment, { children: [
              /* @__PURE__ */ $.jsx("line", { x1: 0, y1: 0, x2: F, y2: 0 }),
              /* @__PURE__ */ $.jsx("line", { x1: 0, y1: U, x2: F, y2: U })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ $.jsx("rect", { width: k, height: C, fill: `url(#${o}-subdivision)` }),
      /* @__PURE__ */ $.jsxs("g", { stroke: "var(--mafs-line-color)", children: [
        i && a.lines && /* @__PURE__ */ $.jsxs($.Fragment, { children: [
          /* @__PURE__ */ $.jsx("line", { x1: 0, y1: 0, x2: k, y2: 0 }),
          /* @__PURE__ */ $.jsx("line", { x1: 0, y1: C, x2: k, y2: C })
        ] }),
        n && l.lines && /* @__PURE__ */ $.jsxs($.Fragment, { children: [
          /* @__PURE__ */ $.jsx("line", { x1: 0, y1: 0, x2: 0, y2: C }),
          /* @__PURE__ */ $.jsx("line", { x1: k, y1: 0, x2: k, y2: C })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ $.jsx("rect", { x: z, y: v, width: y - z, height: A - v, fill: `url(#${o})` }),
    /* @__PURE__ */ $.jsxs("g", { stroke: "var(--mafs-origin-color)", children: [
      n && a.axis && /* @__PURE__ */ $.jsx("line", { x1: z, y1: 0, x2: y, y2: 0 }),
      i && l.axis && /* @__PURE__ */ $.jsx("line", { x1: 0, y1: A, x2: 0, y2: v })
    ] }),
    /* @__PURE__ */ $.jsxs("g", { className: "mafs-shadow", children: [
      n && a.labels && /* @__PURE__ */ $.jsx(Ro, { separation: a.lines || 1, labelMaker: a.labels }),
      i && l.labels && /* @__PURE__ */ $.jsx(Io, { separation: l.lines || 1, labelMaker: l.labels })
    ] })
  ] });
}
function G2(t, e, r) {
  const n = Math.floor(t / r) * r, i = Math.ceil(e / r) * r;
  return n === i - r ? [n] : Rr(n, i - r, r);
}
var P7 = Rr(0, 2 * Math.PI, Math.PI / 12);
function Q2({
  xAxis: t,
  yAxis: e,
  lines: r = 1,
  subdivisions: n
}) {
  const i = t !== !1, a = e !== !1, l = { ...ia, ...t }, o = { ...ia, ...e }, { viewTransform: u } = Aa(), { xPaneRange: d, yPaneRange: h } = Na(), [m, p] = d, [S, M] = h, z = [
    le.mag([m, S]),
    le.mag([m, M]),
    le.mag([p, S]),
    le.mag([p, M]),
    le.mag([(m + p) / 2, (S + M) / 2])
  ], A = r, v = Math.min(...z) < Math.max(p - m, M - S) ? 0 : Math.min(...z), x = Math.max(...z), E = Math.floor(v / A) * A, k = Math.ceil(x / A) * A, [C, N] = le.transform([m, S], u), [_, F] = le.transform([p, M], u), [U, ee] = le.transform([1, -1], u), re = Rr(E, k, A), Me = n != null ? Rr(E, k, A / n) : [];
  return /* @__PURE__ */ $.jsxs("g", { fill: "none", children: [
    /* @__PURE__ */ $.jsx("g", { stroke: "var(--grid-line-subdivision-color)", children: P7.map((ne) => /* @__PURE__ */ $.jsx(
      "line",
      {
        x1: 0,
        y1: 0,
        x2: Math.cos(ne) * k * U,
        y2: -Math.sin(ne) * k * ee
      },
      ne
    )) }),
    Me.map((ne) => /* @__PURE__ */ $.jsx(
      "ellipse",
      {
        "data-r": ne,
        cx: 0,
        cy: 0,
        rx: ne * U,
        ry: ne * ee,
        stroke: "var(--grid-line-subdivision-color)"
      },
      ne
    )),
    re.map((ne) => /* @__PURE__ */ $.jsx(
      "ellipse",
      {
        "data-r": ne,
        cx: 0,
        cy: 0,
        rx: ne * U,
        ry: ne * ee,
        stroke: "var(--mafs-line-color)"
      },
      ne
    )),
    /* @__PURE__ */ $.jsxs("g", { stroke: "var(--mafs-origin-color)", children: [
      i && l.axis && /* @__PURE__ */ $.jsx("line", { x1: C, y1: 0, x2: _, y2: 0 }),
      a && o.axis && /* @__PURE__ */ $.jsx("line", { x1: 0, y1: N, x2: 0, y2: F })
    ] }),
    /* @__PURE__ */ $.jsxs("g", { className: "mafs-shadow", children: [
      i && l.labels && /* @__PURE__ */ $.jsx(
        Ro,
        {
          separation: (t == null ? void 0 : t.lines) || r || 1,
          labelMaker: l.labels || gs
        }
      ),
      a && o.labels && /* @__PURE__ */ $.jsx(
        Io,
        {
          separation: (e == null ? void 0 : e.lines) || r || 1,
          labelMaker: o.labels || gs
        }
      )
    ] })
  ] });
}
Q2.displayName = "Coordinates.Polar";
K2.displayName = "Coordinates.Cartesian";
var D7 = {
  Cartesian: K2,
  Polar: Q2
};
function R7() {
  return /* @__PURE__ */ $.jsx(Y2, { children: /* @__PURE__ */ $.jsx(D7.Cartesian, {}) });
}
function I7({ model: t, el: e }) {
  let r = gl.createRoot(e);
  return r.render(
    /* @__PURE__ */ $.jsx(pi.StrictMode, { children: /* @__PURE__ */ $.jsx(R7, {}) })
  ), () => r.unmount();
}
export {
  I7 as render
};
