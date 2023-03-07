import { reactive as Ee, onMounted as Ka, nextTick as Ve, onActivated as Xa, isRef as yv, watch as le, onBeforeUnmount as vt, onDeactivated as gr, unref as po, inject as ii, getCurrentInstance as Wn, computed as R, provide as li, isVNode as ft, createTextVNode as be, Fragment as Te, ref as I, createApp as bv, onUnmounted as Pa, h as _l, onBeforeMount as Cv, defineComponent as _, createVNode as ne, Teleport as Za, Transition as Be, withDirectives as we, vShow as Va, mergeProps as Me, openBlock as h, createBlock as me, resolveDynamicComponent as Ja, normalizeClass as c, normalizeStyle as q, resolveComponent as oe, resolveDirective as Ae, withCtx as ve, createElementVNode as A, renderSlot as W, toDisplayString as re, createElementBlock as T, renderList as Ne, createCommentVNode as x, onUpdated as Wt, pushScopeId as Ea, popScopeId as Ma, withModifiers as On, normalizeProps as si, guardReactiveProps as xl, vModelText as wv, toRefs as Sv, withKeys as Ri, toRaw as Ui, TransitionGroup as kv, Comment as $v } from "vue";
var es = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, Kw = Ee(es);
const sn = Ee(es), qe = (e) => typeof e == "string", ho = (e) => typeof e == "boolean", xe = (e) => typeof e == "number", ui = (e) => Object.prototype.toString.call(e) === "[object Object]", Tv = (e) => typeof e == "object" && e !== null, di = (e) => typeof e == "function", Ce = (e) => Array.isArray(e), Ov = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : ho(e) ? Number(e) : e, Ya = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, vi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, ct = () => typeof window < "u", Yi = (e) => [...new Set(e)], ns = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Pv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Vv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Fi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Hi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Ev = (e) => {
  var n = [];
  return {
    cache: n,
    has(r) {
      return this.cache.includes(r);
    },
    add(r) {
      this.has(r) || (this.cache.length === e && n.shift(), this.cache.push(r));
    },
    remove(r) {
      this.has(r) && Ya(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, go = (e) => e, ji = (e) => Math.pow(e, 3), rs = (e) => e < 0.5 ? ji(e * 2) / 2 : 1 - ji((1 - e) * 2) / 2, Gt = (e, n) => e ?? n, as = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Ca = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Wi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Mv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Wi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Wi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Iv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Gi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function qt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function fi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Bv(e) {
  return yo.apply(this, arguments);
}
function yo() {
  return yo = Mv(function* (e) {
    yield Pn();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: o,
      innerHeight: l
    } = window, i = a <= o && t >= 0, s = n <= l && r >= 0;
    return i && s;
  }), yo.apply(this, arguments);
}
function lo(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Ia(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = window.getComputedStyle(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function Nv(e) {
  for (var n = [], r = e; r !== window; )
    r = Ia(r), n.push(r);
  return n;
}
function ts(e, n) {
  if (qe(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (Tv(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var os = (e) => qe(e) && e.endsWith("rem"), Dv = (e) => qe(e) && e.endsWith("px") || xe(e), Av = (e) => qe(e) && e.endsWith("%"), is = (e) => qe(e) && e.endsWith("vw"), ls = (e) => qe(e) && e.endsWith("vh"), zv = (e) => qe(e) && e.startsWith("calc("), Lv = (e) => qe(e) && e.startsWith("var("), De = (e) => {
  if (xe(e))
    return e;
  if (Dv(e))
    return +e.replace("px", "");
  if (is(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (ls(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (os(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return qe(e) ? L(e) : 0;
}, he = (e) => {
  if (e != null)
    return Av(e) || is(e) || ls(e) || os(e) || zv(e) || Lv(e) ? e : De(e) + "px";
}, Qe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = he(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Sn(e) {
  var n = as();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function qi(e) {
  var n = as();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Kt(e) {
  Sn(() => {
    Sn(e);
  });
}
function Pn() {
  return new Promise((e) => {
    Sn(() => {
      Sn(e);
    });
  });
}
function Rv() {
  return new Promise((e) => {
    Sn(e);
  });
}
function tt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = qt(e), s = fi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (r - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), Sn(d);
      } else
        e.scrollTo(a, r), u();
    };
    Sn(d);
  });
}
function ss(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Pv(a);
    return n[o] = t, n;
  }, {});
}
function Uv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function It(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function tn(e) {
  let n = !1;
  Ka(() => {
    e(), Ve(() => {
      n = !0;
    });
  }), Xa(() => {
    n && e();
  });
}
function wa(e, n, r, a = {}) {
  if (!ct())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (f) => {
    if (l || i)
      return;
    const m = po(f);
    m && (m.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, u = (f) => {
    if (!l || i)
      return;
    const m = po(f);
    m && (m.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let d;
  yv(e) && (d = le(() => e.value, (f, m) => {
    u(m), s(f);
  }));
  const v = () => {
    d == null || d(), u(e), i = !0;
  };
  return tn(() => {
    s(e);
  }), vt(() => {
    u(e);
  }), gr(() => {
    u(e);
  }), v;
}
function us(e, n, r) {
  if (!ct())
    return;
  wa(document, n, (t) => {
    const o = po(e);
    o && !o.contains(t.target) && r(t);
  });
}
var Yv = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function Fv(e) {
  const n = Wn();
  return e in n.provides;
}
function ci(e) {
  if (!Fv(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = ii(e), { childInstances: r, collect: a, clear: t } = n, o = Yv(n, ["childInstances", "collect", "clear"]), l = Wn();
  return {
    index: R(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      Ka(() => {
        Ve().then(() => {
          a(l, u);
        });
      }), vt(() => {
        Ve().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function Hv(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      ft(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function mi(e) {
  const n = Wn(), r = Ee([]), a = [], t = R(() => r.length), o = () => {
    const u = Hv(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    Ya(r, u), Ya(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      li(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
var jv = ["collect", "clear"];
function Ki(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Xi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ki(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ki(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Wv(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Bt.apply(this, arguments);
}
function Xe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function Gv(e) {
  var n = bv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Qa(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => _l(e, Bt({}, n, r));
    }
  }, {
    unmount: t
  } = Gv(a);
  return {
    unmountInstance: t
  };
}
function bo(e, n, r) {
  return e === void 0 && (e = []), n === void 0 && (n = !0), r === void 0 && (r = []), e.forEach((a) => {
    if (a !== null) {
      if (typeof a != "object") {
        (typeof a == "string" || typeof a == "number") && r.push(be(String(a)));
        return;
      }
      if (Array.isArray(a)) {
        bo(a, n, r);
        return;
      }
      if (a.type === Te) {
        if (a.children === null)
          return;
        Array.isArray(a.children) && bo(a.children, n, r);
      } else
        a.type !== Comment && r.push(a);
    }
  }), r;
}
function qv(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      ft(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function Mn(e) {
  var n = Ee([]), r = Wn(), a = () => {
    var i = qv(r.subTree);
    n.sort((s, u) => i.indexOf(s.vnode) - i.indexOf(u.vnode));
  }, t = (i) => {
    n.push(i), a();
  }, o = (i) => {
    Ya(n, i);
  };
  li(e, {
    collect: t,
    clear: o,
    instances: n
  });
  var l = R(() => n.length);
  return {
    length: l
  };
}
function In(e) {
  if (!ds(e))
    return {
      index: null
    };
  var n = ii(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Wn();
  Ka(() => {
    Ve().then(() => r(o));
  }), Pa(() => {
    Ve().then(() => a(o));
  });
  var l = R(() => t.indexOf(o));
  return {
    index: l
  };
}
function $n(e) {
  var n = [], r = (o) => {
    n.push(o);
  }, a = (o) => {
    Ya(n, o);
  }, t = (o) => {
    li(e, Bt({
      collect: r,
      clear: a
    }, o));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function Tn(e) {
  if (!ds(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = ii(e), {
    collect: r,
    clear: a
  } = n, t = Wv(n, jv), o = (l) => {
    Ka(() => r(l)), vt(() => a(l));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function ds(e) {
  var n = Wn();
  return e in n.provides;
}
function pn() {
  var e = I(""), n = /* @__PURE__ */ function() {
    var t = Xi(function* (o, l, i) {
      if (!Ce(o) || !o.length)
        return !0;
      var s = yield Promise.all(o.map((u) => u(l, i)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(l, i, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = Xi(function* (o, l, i, s, u) {
      o.includes(l) && (yield n(i, s, u)) && (e.value = "");
    });
    return function(l, i, s, u, d) {
      return t.apply(this, arguments);
    };
  }();
  return {
    errorMessage: e,
    validate: n,
    resetValidation: r,
    validateWithTrigger: a
  };
}
function Kv(e) {
  wa(window, "hashchange", e), wa(window, "popstate", e);
}
function pi() {
  var e = I(!1);
  return Xa(() => {
    e.value = !1;
  }), gr(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ee(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (Ce(s)) {
        var [u, d, v = null] = s;
        return u ? d : v;
      }
      return s;
    });
  };
  return {
    n: a,
    classes: t
  };
}
function $(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (Ce(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function Y(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Nt.apply(this, arguments);
}
var {
  n: vs
} = ee("ripple"), Zi = 250;
function Xv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Zv(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: o
  } = e, l = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, i = l * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - l * 2) / 2, v = (o - l * 2) / 2, f = s - l, m = u - l;
  return {
    x: f,
    y: m,
    centerX: d,
    centerY: v,
    size: i
  };
}
function fs(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = Zv(this, e), s = document.createElement("div");
      s.classList.add(vs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Xv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Co() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + vs());
    if (r.length) {
      var a = r[r.length - 1], t = Zi - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Zi);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 30) : n();
}
function cs() {
  var e = this._ripple;
  Uv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Jv(e, n) {
  var r, a, t;
  e._ripple = Nt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : sn.touchmoveForbid,
    removeRipple: Co.bind(e)
  }), e.addEventListener("touchstart", fs, {
    passive: !0
  }), e.addEventListener("touchmove", cs, {
    passive: !0
  }), e.addEventListener("dragstart", Co, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Qv(e) {
  e.removeEventListener("touchstart", fs), e.removeEventListener("touchmove", cs), e.removeEventListener("dragstart", Co), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function _v(e, n) {
  var r, a, t, o, l, i, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : sn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((l = e._ripple) == null ? void 0 : l.touchmoveForbid) || u.color !== ((i = e._ripple) == null ? void 0 : i.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = Nt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var ms = {
  mounted: Jv,
  unmounted: Qv,
  updated: _v,
  install(e) {
    e.directive("ripple", this);
  }
}, Xw = ms;
const ze = ms;
function xv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var mt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: xv
  },
  transition: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: {
    type: String
  },
  overlayStyle: {
    type: Object
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  onClickOverlay: Y(),
  "onUpdate:show": Y(),
  // internal for Dialog
  onRouteChange: Y()
};
function ps() {
  var e = Object.keys(sn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function gt(e) {
  sn.locks[e] = 1, ps();
}
function yt(e) {
  delete sn.locks[e], ps();
}
function Xt(e, n) {
  var {
    uid: r
  } = Wn();
  n && le(n, (a) => {
    a === !1 ? yt(r) : a === !0 && e() === !0 && gt(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? gt(r) : yt(r));
  }), Cv(() => {
    n && n() === !1 || e() === !0 && gt(r);
  }), Pa(() => {
    n && n() === !1 || e() === !0 && yt(r);
  }), Xa(() => {
    n && n() === !1 || e() === !0 && gt(r);
  }), gr(() => {
    n && n() === !1 || e() === !0 && yt(r);
  });
}
function pt(e, n) {
  var r = I(sn.zIndex);
  return le(e, (a) => {
    a && (sn.zIndex += n, r.value = sn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function wo() {
  return wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, wo.apply(this, arguments);
}
function ef(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ft(e);
}
var {
  n: Bn,
  classes: so
} = ee("popup");
const fn = _({
  name: "VarPopup",
  inheritAttrs: !1,
  props: mt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = pt(() => e.show, 3), {
      disabled: o
    } = pi(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      $(v), d && $(e["onUpdate:show"], !1);
    };
    Xt(() => e.show, () => e.lockScroll), le(() => e.show, (d) => {
      $(d ? e.onOpen : e.onClose);
    }), Kv(() => $(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return ne("div", {
        class: so(Bn("overlay"), d),
        style: wo({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => ne("div", Me({
      class: so(Bn("content"), Bn("--" + e.position), [e.defaultStyle, Bn("--content-background-color")], [e.defaultStyle, Bn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [$(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: p,
        position: y
      } = e;
      return ne(Be, {
        name: Bn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [we(ne("div", {
          class: so(Bn("$--box"), Bn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), ne(Be, {
          name: p || Bn("$-pop-" + y)
        }, {
          default: () => [f && s()]
        })]), [[Va, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return ne(Za, {
          to: d,
          disabled: o.value
        }, ef(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
fn.install = function(e) {
  e.component(fn.name, fn);
};
var Zw = fn, hs = {
  name: {
    type: String
  },
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  animationClass: {
    type: String
  },
  onClick: Y()
};
function Ji(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function nf(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ji(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ji(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: rf,
  classes: af
} = ee("icon");
function tf(e, n) {
  return h(), me(
    Ja(e.isURL(e.name) ? "img" : "i"),
    {
      class: c(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
      style: q({
        color: e.color,
        "transition-duration": e.toNumber(e.transition) + "ms",
        width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        fontSize: e.toSizeUnit(e.size)
      }),
      src: e.isURL(e.name) ? e.nextName : null,
      onClick: e.onClick
    },
    null,
    8,
    ["class", "style", "src", "onClick"]
  );
}
var gs = _({
  name: "VarIcon",
  props: hs,
  setup(e) {
    var n = I(""), r = I(!1), a = /* @__PURE__ */ function() {
      var t = nf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Ve(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, L(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return le(() => e.name, a, {
      immediate: !0
    }), {
      n: rf,
      classes: af,
      nextName: n,
      animateInProgress: r,
      isURL: Ov,
      toNumber: L,
      toSizeUnit: he
    };
  }
});
gs.render = tf;
const ke = gs;
ke.install = function(e) {
  e.component(ke.name, ke);
};
var Jw = ke;
function So() {
  return So = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, So.apply(this, arguments);
}
var of = So({
  show: {
    type: Boolean,
    default: !1
  },
  actions: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: Y(),
  "onUpdate:show": Y()
}, Xe(mt, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
const hi = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "确认",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "请选择",
  // List
  listLoadingText: "加载中",
  listFinishedText: "没有更多了",
  listErrorText: "加载失败",
  // Picker
  pickerTitle: "请选择",
  pickerConfirmButtonText: "确认",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "个被选择",
  // pagination
  paginationItem: "条",
  paginationPage: "页",
  paginationJump: "前往"
}, ys = {
  // Dialog
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  // ActionSheet
  actionSheetTitle: "Select One",
  // List
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  // Picker
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  // pagination
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to"
};
function ko() {
  return ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ko.apply(this, arguments);
}
function gi() {
  var e = {}, n = I({}), r = (o, l) => {
    l.lang = o, e[o] = l;
  }, a = (o) => {
    if (!e[o])
      return console.warn("The " + o + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[o];
  }, t = (o, l) => {
    if (!e[o]) {
      console.warn("The " + o + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[o] = ko({}, e[o], l), a(o);
  };
  return {
    packs: e,
    pack: n,
    add: r,
    use: a,
    merge: t
  };
}
var {
  packs: bs,
  pack: He,
  add: yi,
  use: bi,
  merge: Cs
} = gi();
yi("zh-CN", hi);
bi("zh-CN");
var Qw = {
  zhCN: hi,
  enUS: ys,
  packs: bs,
  pack: He,
  add: yi,
  use: bi,
  merge: Cs,
  useLocale: gi
};
const $o = {
  zhCN: hi,
  enUS: ys,
  packs: bs,
  pack: He,
  add: yi,
  use: bi,
  merge: Cs,
  useLocale: gi
};
var {
  n: lf,
  classes: sf
} = ee("action-sheet"), uf = ["onClick"];
function df(e, n) {
  var r = oe("var-icon"), a = oe("var-popup"), t = Ae("ripple");
  return h(), me(
    a,
    Me({
      class: e.n("popup-radius"),
      position: "bottom",
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.popupShow
    }, {
      "onUpdate:show": e.handlePopupUpdateShow
    }, {
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    }),
    {
      default: ve(() => [A(
        "div",
        Me({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [W(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: c(e.n("title"))
          },
          re(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), W(e.$slots, "actions", {}, () => [(h(!0), T(
          Te,
          null,
          Ne(e.actions, (o) => we((h(), T(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: q({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (h(), me(
              r,
              {
                key: 0,
                class: c(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: o.icon,
                size: o.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : x("v-if", !0), A(
              "div",
              {
                class: c(e.n("action-name"))
              },
              re(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            uf
          )), [[t, {
            disabled: o.disabled
          }]])),
          128
          /* KEYED_FRAGMENT */
        ))])],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var ws = _({
  name: "VarActionSheet",
  directives: {
    Ripple: ze
  },
  components: {
    VarPopup: fn,
    VarIcon: ke
  },
  inheritAttrs: !1,
  props: of,
  setup(e) {
    var n = I(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        $(l, t), o && $(e["onUpdate:show"], !1);
      }
    }, a = (t) => $(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: lf,
      classes: sf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: He,
      dt: Gt,
      handleSelect: r
    };
  }
});
ws.render = df;
const tr = ws;
function To() {
  return To = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, To.apply(this, arguments);
}
var _n, Ci = {};
function vf(e) {
  return e === void 0 && (e = {}), To({}, Ci, e);
}
function Sa(e) {
  return ct() ? new Promise((n) => {
    Sa.close();
    var r = Ee(vf(e));
    r.teleport = "body", _n = r;
    var {
      unmountInstance: a
    } = Qa(tr, r, {
      onSelect: (t) => {
        $(r.onSelect, t), n(t);
      },
      onClose: () => {
        $(r.onClose), n("close");
      },
      onClosed: () => {
        $(r.onClosed), a(), _n === r && (_n = null);
      },
      onRouteChange: () => {
        a(), _n === r && (_n = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
function ff(e) {
  Ci = e;
}
function cf() {
  Ci = {};
}
function mf() {
  if (_n != null) {
    var e = _n;
    _n = null, Ve().then(() => {
      e.show = !1;
    });
  }
}
Sa.Component = tr;
tr.install = function(e) {
  e.component(tr.name, tr);
};
Sa.install = function(e) {
  e.component(tr.name, tr);
};
Object.assign(Sa, {
  setDefaultOptions: ff,
  resetDefaultOptions: cf,
  close: mf
});
var _w = tr;
function pf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var hf = {
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  title: {
    type: String
  },
  titlePosition: {
    type: String,
    default: "left",
    validator: pf
  },
  elevation: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  },
  image: {
    type: String
  },
  imageLinearGradient: {
    type: String
  }
}, {
  n: gf,
  classes: yf
} = ee("app-bar");
function bf(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: q(e.rootStyles)
    },
    [A(
      "div",
      {
        class: c(e.n("toolbar"))
      },
      [A(
        "div",
        {
          class: c(e.n("left"))
        },
        [W(e.$slots, "left"), e.titlePosition === "left" ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingLeft: e.paddingLeft
            })
          },
          [W(e.$slots, "default", {}, () => [be(
            re(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [W(e.$slots, "default", {}, () => [be(
          re(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0), A(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingRight: e.paddingRight
            })
          },
          [W(e.$slots, "default", {}, () => [be(
            re(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0), W(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), W(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var Ss = _({
  name: "VarAppBar",
  props: hf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = I(), t = I(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, l = R(() => {
      var {
        image: i,
        color: s,
        textColor: u,
        imageLinearGradient: d
      } = e;
      if (i != null) {
        var v = d ? "linear-gradient(" + d + "), " : "";
        return {
          "background-image": v + "url(" + i + ")",
          "background-position": "center center",
          "background-size": "cover"
        };
      }
      return {
        background: s,
        color: u
      };
    });
    return tn(o), Wt(o), {
      n: gf,
      classes: yf,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ss.render = bf;
const wr = Ss;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var xw = wr;
function Qi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Qi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Qi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Oo() {
  return Oo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Oo.apply(this, arguments);
}
var Cf = "background-image", wf = "lazy-loading", Sf = "lazy-error", _i = "lazy-attempt", kf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Po = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Fa = [], Dt = [], ks = Ev(100), Ue = {
  loading: Po,
  error: Po,
  attempt: 3,
  throttleWait: 300,
  events: kf
}, wi = vi(ht, Ue.throttleWait);
function Jt(e, n) {
  e._lazy.arg === Cf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function $f(e) {
  e._lazy.loading && Jt(e, e._lazy.loading), ht();
}
function Tf(e) {
  e._lazy.error && Jt(e, e._lazy.error), e._lazy.state = "error", ki(e), ht();
}
function $s(e, n) {
  Jt(e, n), e._lazy.state = "success", ki(e), ht();
}
function Of(e) {
  var n;
  Dt.includes(e) || (Dt.push(e), (n = Ue.events) == null || n.forEach((r) => {
    e.addEventListener(r, wi, {
      passive: !0
    });
  }));
}
function Pf() {
  Dt.forEach((e) => {
    var n;
    (n = Ue.events) == null || n.forEach((r) => {
      e.removeEventListener(r, wi);
    });
  }), Dt.length = 0;
}
function Vf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(wf)) != null ? r : Ue.loading,
    error: (a = e.getAttribute(Sf)) != null ? a : Ue.error,
    attempt: e.getAttribute(_i) ? Number(e.getAttribute(_i)) : Ue.attempt
  };
  e._lazy = Oo({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Jt(e, Po), $(Ue.filter, e._lazy);
}
function Ef(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ks.add(n), $s(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Tf(e) : Ts(e);
  });
}
function Ts(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (ks.has(n)) {
      $s(e, n), e._lazy.attemptLock = !1;
      return;
    }
    $f(e), Ef(e, n);
  }
}
function Si(e) {
  return Vo.apply(this, arguments);
}
function Vo() {
  return Vo = Zt(function* (e) {
    (yield Bv(e)) && Ts(e);
  }), Vo.apply(this, arguments);
}
function ht() {
  Fa.forEach((e) => Si(e));
}
function Mf(e) {
  return Eo.apply(this, arguments);
}
function Eo() {
  return Eo = Zt(function* (e) {
    !Fa.includes(e) && Fa.push(e), Nv(e).forEach(Of), yield Si(e);
  }), Eo.apply(this, arguments);
}
function ki(e) {
  Ya(Fa, e), Fa.length === 0 && Pf();
}
function If(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Os(e, n) {
  return Mo.apply(this, arguments);
}
function Mo() {
  return Mo = Zt(function* (e, n) {
    Vf(e, n), yield Mf(e);
  }), Mo.apply(this, arguments);
}
function Bf(e, n) {
  return Io.apply(this, arguments);
}
function Io() {
  return Io = Zt(function* (e, n) {
    if (!If(e, n)) {
      Fa.includes(e) && (yield Si(e));
      return;
    }
    yield Os(e, n);
  }), Io.apply(this, arguments);
}
function Nf(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  Ue.events = n ?? Ue.events, Ue.loading = r ?? Ue.loading, Ue.error = a ?? Ue.error, Ue.attempt = t ?? Ue.attempt, Ue.throttleWait = o ?? Ue.throttleWait, Ue.filter = l;
}
var Ps = {
  mounted: Os,
  unmounted: ki,
  updated: Bf,
  install(e, n) {
    Nf(n), wi = vi(ht, Ue.throttleWait), e.directive("lazy", this);
  }
}, eS = Ps;
const ot = Ps;
function Df(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Vs = (e) => ["mini", "small", "normal", "large"].includes(e);
function Es(e) {
  return Vs(e) || xe(e) || qe(e);
}
var Af = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Es,
    default: "normal"
  },
  color: {
    type: String
  },
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Df,
    default: "cover"
  },
  bordered: {
    type: Boolean,
    default: !1
  },
  borderColor: {
    type: String
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: !1
  },
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: zf,
  classes: Lf
} = ee("avatar"), Rf = ["src", "lazy-loading", "lazy-error"], Uf = ["src"];
function Yf(e, n) {
  var r = Ae("lazy");
  return h(), T(
    "div",
    {
      ref: "avatarElement",
      class: c(e.classes(e.n(), e.n("$--box"), [e.internalSizeValidator(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: q({
        width: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (h(), T(
      Te,
      {
        key: 0
      },
      [e.lazy ? we((h(), T(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          src: e.src,
          style: q({
            objectFit: e.fit
          }),
          "lazy-loading": e.loading,
          "lazy-error": e.error,
          onLoad: n[0] || (n[0] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          })
        },
        null,
        46,
        Rf
      )), [[r, e.src]]) : (h(), T(
        "img",
        {
          key: 1,
          class: c(e.n("image")),
          src: e.src,
          style: q({
            objectFit: e.fit
          }),
          onLoad: n[1] || (n[1] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          }),
          onError: n[2] || (n[2] = function() {
            return e.handleError && e.handleError(...arguments);
          })
        },
        null,
        46,
        Uf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (h(), T(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: q({
          transform: "scale(" + e.scale + ")"
        })
      },
      [W(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var Ms = _({
  name: "VarAvatar",
  directives: {
    Lazy: ot
  },
  props: Af,
  setup(e) {
    var n = I(null), r = I(null), a = I(1), t = () => {
      if (!n.value || !r.value) {
        a.value = 1;
        return;
      }
      var s = n.value.offsetWidth, u = r.value.offsetWidth;
      s > u ? a.value = 1 : a.value = s / u;
    }, o = (s) => {
      var u = s.currentTarget, {
        lazy: d,
        onLoad: v,
        onError: f
      } = e;
      d ? (u._lazy.state === "success" && $(v, s), u._lazy.state === "error" && $(f, s)) : $(v, s);
    }, l = (s) => {
      $(e.onError, s);
    }, i = (s) => {
      $(e.onClick, s);
    };
    return tn(t), Wt(t), {
      internalSizeValidator: Vs,
      sizeValidator: Es,
      toSizeUnit: he,
      n: zf,
      classes: Lf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Ms.render = Yf;
const Sr = Ms;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var nS = Sr, Ff = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Hf,
  classes: jf
} = ee("avatar-group");
function Wf(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: q(e.rootStyles)
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Is = _({
  name: "VarAvatarGroup",
  props: Ff,
  setup(e) {
    var n = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": he(e.offset)
    });
    return {
      n: Hf,
      classes: jf,
      toSizeUnit: he,
      rootStyles: n
    };
  }
});
Is.render = Wf;
const kr = Is;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var rS = kr;
function Gf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function qf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var nr = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: Gf
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: qf
  },
  // loading颜色
  color: {
    type: String
  },
  description: {
    type: String
  },
  loading: {
    type: Boolean,
    default: !1
  }
}, {
  n: Kf,
  classes: Xf
} = ee("loading"), Zf = (e) => (Ea(""), e = e(), Ma(), e), Jf = /* @__PURE__ */ Zf(() => /* @__PURE__ */ A(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ A("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), Qf = [Jf];
function _f(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [W(e.$slots, "default"), e.loading ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.isShow ? (h(), T(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [A(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: q({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Qf,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (h(!0), T(
        Te,
        null,
        Ne(e.loadingTypeDict, (r, a) => (h(), T(
          Te,
          {
            key: a
          },
          [e.type === a ? (h(), T(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), T(
              Te,
              null,
              Ne(r, (t) => (h(), T(
                "div",
                {
                  key: t + a,
                  style: q({
                    backgroundColor: e.color
                  }),
                  class: c(e.classes(e.n(a + "-item"), e.n(a + "-item--" + e.size)))
                },
                null,
                6
                /* CLASS, STYLE */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          )) : x("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (h(), T(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: q({
            color: e.color
          })
        },
        [W(e.$slots, "description", {}, () => [be(
          re(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Bs = _({
  name: "VarLoading",
  props: nr,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = R(() => $(r.default) ? e.loading : !0);
    return {
      n: Kf,
      classes: Xf,
      multiplySizeUnit: Qe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Bs.render = _f;
const Cn = Bs;
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
var aS = Cn;
function Bo() {
  return Bo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Bo.apply(this, arguments);
}
function xf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ec(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function nc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var rc = {
  type: {
    type: String,
    validator: xf
  },
  nativeType: {
    type: String,
    default: "button",
    validator: nc
  },
  size: {
    type: String,
    validator: ec
  },
  loading: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  outline: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  autoLoading: {
    type: Boolean,
    default: !1
  },
  loadingRadius: {
    type: [Number, String]
  },
  loadingType: Xe(nr, "type"),
  loadingSize: Xe(nr, "size"),
  loadingColor: Bo({}, Xe(nr, "color"), {
    default: "currentColor"
  }),
  onClick: Y(),
  onTouchstart: Y()
}, Ns = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY"), Ds = Symbol("BUTTON_GROUP_COUNT_BUTTON_KEY");
function ac() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(Ns), {
    length: r
  } = Mn(Ds);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function tc() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(Ns), {
    index: r
  } = In(Ds);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
function As(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function oc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[ns(t)] = o, r;
  }, {}) : {};
}
function ic(e) {
  var {
    value: n
  } = e._hover, r = oc(e);
  Object.keys(n).forEach((a) => {
    var t = ns(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function $i(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function lc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function zs(e) {
  lc(e), $i(e, e._hover.rawStyle);
}
function Ls() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, di(e)) {
    e(this._hover.hovering);
    return;
  }
  $i(this, e);
}
function Rs() {
  if (this._hover.hovering = !1, di(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  zs(this);
}
function Us(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  As(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, ic(e), e.addEventListener("mouseenter", Ls), e.addEventListener("mouseleave", Rs));
}
function Ys(e, n) {
  As(n.arg) || (zs(e), e.removeEventListener("mouseenter", Ls), e.removeEventListener("mouseleave", Rs));
}
function sc(e, n) {
  Ys(e, n);
}
function uc(e, n) {
  return !di(n.value) && e._hover.hovering;
}
function dc(e, n) {
  Us(e, n), uc(e, n) && $i(e, n.value);
}
var Fs = {
  mounted: Us,
  unmounted: Ys,
  beforeUpdate: sc,
  updated: dc,
  install(e) {
    e.directive("hover", this);
  }
}, tS = Fs;
const At = Fs;
var {
  n: vc,
  classes: fc
} = ee("button"), cc = ["type", "disabled"];
function mc(e, n) {
  var r = oe("var-loading"), a = Ae("ripple"), t = Ae("hover");
  return we((h(), T(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.n("$-elevation--" + e.states.elevation)], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
      style: q({
        color: e.states.textColor,
        background: e.states.color
      }),
      type: e.nativeType,
      disabled: e.disabled,
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onTouchstart: n[1] || (n[1] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      })
    },
    [e.loading || e.pending ? (h(), me(
      r,
      {
        key: 0,
        class: c(e.n("loading")),
        "var-button-cover": "",
        color: e.loadingColor,
        type: e.loadingType,
        size: e.loadingSize,
        radius: e.loadingRadius
      },
      null,
      8,
      ["class", "color", "type", "size", "radius"]
    )) : x("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), A(
      "div",
      {
        class: c(e.classes(e.n("overlay"), [e.hovering, e.n("--hovering")]))
      },
      null,
      2
      /* CLASS */
    )],
    46,
    cc
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }], [t, e.handleHover, "desktop"]]);
}
var Hs = _({
  name: "VarButton",
  components: {
    VarLoading: Cn
  },
  directives: {
    Ripple: ze,
    Hover: At
  },
  props: rc,
  setup(e) {
    var n = I(!1), r = I(!1), {
      buttonGroup: a
    } = tc(), t = R(() => {
      if (!a)
        return {
          elevation: 2,
          type: e.type != null ? e.type : "default",
          size: e.size != null ? e.size : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline
        };
      var {
        type: u,
        size: d,
        color: v,
        textColor: f,
        mode: m
      } = a;
      return {
        elevation: 0,
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : v.value,
        textColor: e.textColor != null ? e.textColor : f.value,
        text: m.value !== "normal",
        outline: m.value === "outline"
      };
    }), o = (u) => {
      e.autoLoading && (n.value = !0, u = Ce(u) ? u : [u], Promise.all(u).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, l = (u) => {
      var {
        loading: d,
        disabled: v,
        onClick: f
      } = e;
      !f || d || v || n.value || o($(f, u));
    }, i = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || o($(f, u));
    }, s = (u) => {
      r.value = u;
    };
    return {
      n: vc,
      classes: fc,
      pending: n,
      states: t,
      hovering: r,
      handleHover: s,
      handleClick: l,
      handleTouchstart: i
    };
  }
});
Hs.render = mc;
const Ge = Hs;
Ge.install = function(e) {
  e.component(Ge.name, Ge);
};
var oS = Ge, pc = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: Y()
}, {
  n: hc,
  classes: gc
} = ee("back-top");
function yc(e, n) {
  var r = oe("var-icon"), a = oe("var-button");
  return h(), me(
    Za,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
      "div",
      Me({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = On(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [W(e.$slots, "default", {}, () => [ne(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ve(() => [ne(r, {
          name: "chevron-up"
        })]),
        _: 1
        /* STABLE */
      })])],
      16
      /* FULL_PROPS */
    )],
    8,
    ["disabled"]
  );
}
var js = _({
  name: "VarBackTop",
  components: {
    VarButton: Ge,
    VarIcon: ke
  },
  inheritAttrs: !1,
  props: pc,
  setup(e) {
    var n = I(!1), r = I(null), a = I(!0), t, o = (d) => {
      $(e.onClick, d);
      var v = fi(t);
      tt(t, {
        left: v,
        duration: e.duration,
        animation: rs
      });
    }, l = vi(() => {
      n.value = qt(t) >= De(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? ts(e.target, "BackTop") : Ia(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return Ka(() => {
      i(), s(), a.value = !1;
    }), Xa(s), vt(u), gr(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: he,
      n: hc,
      classes: gc,
      handleClick: o
    };
  }
});
js.render = yc;
const $r = js;
$r.install = function(e) {
  e.component($r.name, $r);
};
var iS = $r;
function bc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Cc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var wc = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: bc
  },
  // 是否隐藏徽标
  hidden: {
    type: Boolean,
    default: !1
  },
  // 是否是小圆点
  dot: {
    type: Boolean,
    default: !1
  },
  // 显示的值
  value: {
    type: [String, Number],
    default: 0
  },
  // 显示最大值
  maxValue: {
    type: [String, Number]
  },
  // 自定义徽标颜色
  color: {
    type: String
  },
  // 定位位置
  position: {
    type: String,
    default: "right-top",
    validator: Cc
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: Gn,
  classes: Sc
} = ee("badge"), kc = {
  key: 1
};
function $c(e, n) {
  var r = oe("var-icon");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [ne(
      Be,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ve(() => [we(A(
          "span",
          Me(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (h(), me(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (h(), T(
            "span",
            kc,
            re(e.values),
            1
            /* TEXT */
          ))],
          16
          /* FULL_PROPS */
        ), [[Va, !e.hidden]])]),
        _: 1
        /* STABLE */
      },
      8,
      ["name"]
    ), W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Ws = _({
  name: "VarBadge",
  components: {
    VarIcon: ke
  },
  inheritAttrs: !1,
  props: wc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = R(() => {
      var {
        type: l,
        position: i,
        dot: s,
        icon: u
      } = e, d = r.default && Gn("position") + " " + Gn("--" + i), v = s ? Gn("dot") : null, f = o(), m = u ? Gn("icon") : null;
      return [Gn("--" + l), d, v, f, m];
    }), t = R(() => {
      var {
        dot: l,
        value: i,
        maxValue: s
      } = e;
      return l ? "" : i !== void 0 && s !== void 0 && L(i) > s ? s + "+" : i;
    }), o = () => {
      var {
        position: l,
        dot: i
      } = e;
      if (i) {
        if (l.includes("right"))
          return Gn("dot--right");
        if (l.includes("left"))
          return Gn("dot--left");
      }
    };
    return {
      n: Gn,
      classes: Sc,
      values: t,
      contentClass: a
    };
  }
});
Ws.render = $c;
const or = Ws;
or.install = function(e) {
  e.component(or.name, or);
};
var lS = or, Tc = {
  active: {
    type: [Number, String],
    default: 0
  },
  fixed: {
    type: Boolean,
    default: !1
  },
  border: {
    type: Boolean,
    default: !1
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onChange: Y(),
  "onUpdate:active": Y(),
  onBeforeChange: Y(),
  onFabClick: Y(),
  fabProps: {
    type: Object
  }
}, Gs = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), qs = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function Oc() {
  var {
    childProviders: e,
    bindChildren: n
  } = $n(Gs), {
    length: r
  } = Mn(qs);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function No() {
  return No = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, No.apply(this, arguments);
}
var {
  n: Pc,
  classes: Vc
} = ee("bottom-navigation"), {
  n: Qt
} = ee("bottom-navigation-item"), xi = Qt("--right-half-space"), el = Qt("--left-half-space"), nl = Qt("--right-space"), Ec = {
  type: "primary"
};
function Mc(e, n) {
  var r = oe("var-button");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [W(e.$slots, "default"), e.$slots.fab ? (h(), me(
      r,
      Me({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ve(() => [W(e.$slots, "fab")]),
        _: 3
        /* FORWARDED */
      },
      16,
      ["class", "onClick"]
    )) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var Ks = _({
  name: "VarBottomNavigation",
  components: {
    VarButton: Ge
  },
  props: Tc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = I(null), t = R(() => e.active), o = R(() => e.activeColor), l = R(() => e.inactiveColor), i = I({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Oc(), v = () => {
      s.value === 0 || f() || m() || p();
    }, f = () => u.find((O) => {
      var {
        name: z
      } = O;
      return t.value === z.value;
    }), m = () => u.find((O) => {
      var {
        index: z
      } = O;
      return t.value === z.value;
    }), p = () => {
      xe(t.value) && (t.value < 0 ? $(e["onUpdate:active"], 0) : t.value > s.value - 1 && $(e["onUpdate:active"], s.value - 1));
    }, y = (O) => {
      t.value !== O && (e.onBeforeChange ? g(O) : V(O));
    }, g = (O) => {
      var z = $(e.onBeforeChange, O);
      z = Ce(z) ? z : [z], Promise.all(z).then((M) => {
        M.some((b) => !b) || V(O);
      });
    }, V = (O) => {
      $(e["onUpdate:active"], O), $(e.onChange, O);
    }, P = () => {
      var O = B();
      O.forEach((z) => {
        z.classList.remove(xi, el, nl);
      });
    }, C = (O) => {
      var z = B(), M = z.length, b = O % 2 === 0;
      z.forEach((k, j) => {
        w(b, k, j, M);
      });
    }, w = (O, z, M, b) => {
      var k = M === b - 1;
      if (!O && k) {
        z.classList.add(nl);
        return;
      }
      var j = M === b / 2 - 1, Q = M === b / 2;
      j ? z.classList.add(xi) : Q && z.classList.add(el);
    }, B = () => Array.from(a.value.querySelectorAll("." + Qt())), S = () => {
      $(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: y
    };
    return d(D), le(() => s.value, v), le(() => e.fabProps, (O) => {
      i.value = No({}, Ec, O);
    }, {
      immediate: !0,
      deep: !0
    }), tn(() => {
      r.fab && C(s.value);
    }), Wt(() => {
      P(), r.fab && C(s.value);
    }), {
      n: Pc,
      classes: Vc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: S,
      fabProps: i
    };
  }
});
Ks.render = Mc;
const Tr = Ks;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var sS = Tr, Ic = {
  name: {
    type: String
  },
  icon: {
    type: String
  },
  label: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: Y()
};
function Bc() {
  var {
    parentProvider: e,
    bindParent: n
  } = Tn(Gs), {
    index: r
  } = In(qs);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Nc,
  classes: Dc
} = ee("bottom-navigation-item"), Ac = {
  type: "danger",
  dot: !0
};
function zc(e, n) {
  var r = oe("var-icon"), a = oe("var-badge"), t = Ae("ripple");
  return we((h(), T(
    "button",
    {
      class: c(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: q({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (h(), me(
      r,
      {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: c(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      },
      null,
      8,
      ["name", "namespace", "class"]
    )) : x("v-if", !0), W(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), me(
      a,
      Me({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : x("v-if", !0), A(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (h(), T(
        Te,
        {
          key: 0
        },
        [be(
          re(e.label),
          1
          /* TEXT */
        )],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )), W(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var Xs = _({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: or,
    VarIcon: ke
  },
  directives: {
    Ripple: ze
  },
  props: Ic,
  setup(e) {
    var n = R(() => e.name), r = R(() => e.badge), a = I({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = Bc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, p = (m = n.value) != null ? m : t.value;
      $(e.onClick, p), $(o.onToggle, p);
    };
    return l(d), le(() => r.value, (m) => {
      a.value = m === !0 ? Ac : r.value;
    }, {
      immediate: !0
    }), {
      n: Nc,
      classes: Dc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Xs.render = zc;
const Or = Xs;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var uS = Or, Lc = {
  separator: {
    type: String
  },
  onClick: Y()
}, Zs = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Rc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = mi(Zs);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Uc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ci(Zs);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Yc,
  classes: Fc
} = ee("breadcrumb");
function Hc(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? x("v-if", !0) : W(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [A(
        "div",
        {
          class: c(e.n("separator"))
        },
        re((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var Js = _({
  name: "VarBreadcrumb",
  props: Lc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Uc(), t = R(() => n.value === r.length.value - 1), o = R(() => r.separator.value), l = (i) => {
      t.value || $(e.onClick, i);
    };
    return a(null), {
      n: Yc,
      classes: Fc,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
Js.render = Hc;
const Pr = Js;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var dS = Pr, jc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Wc
} = ee("breadcrumbs");
function Gc(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Qs = _({
  name: "VarBreadcrumbs",
  props: jc,
  setup(e) {
    var n = R(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Rc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Wc
    };
  }
});
Qs.render = Gc;
const Vr = Qs;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var vS = Vr;
function qc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Kc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Xc(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Zc = {
  type: {
    type: String,
    default: "default",
    validator: qc
  },
  size: {
    type: String,
    default: "normal",
    validator: Kc
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  mode: {
    type: String,
    default: "normal",
    validator: Xc
  },
  elevation: {
    type: [Number, String],
    default: 2
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Jc,
  classes: Qc
} = ee("button-group");
function _c(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.n("$-elevation--" + e.elevation)]))
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var _s = _({
  name: "VarButtonGroup",
  props: Zc,
  setup(e) {
    var {
      bindButtons: n
    } = ac(), r = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return n(r), {
      n: Jc,
      classes: Qc
    };
  }
});
_s.render = _c;
const Er = _s;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var fS = Er;
function xc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var em = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: xc,
    default: "cover"
  },
  imageHeight: {
    type: [String, Number]
  },
  imageWidth: {
    type: [String, Number]
  },
  outline: {
    type: Boolean,
    default: !1
  },
  layout: {
    type: String,
    default: "column"
  },
  floating: {
    type: Boolean,
    default: !1
  },
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: Y(),
  "onUpdate:floating": Y()
};
function rl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function al(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        rl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        rl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: nm,
  classes: rm
} = ee("card"), am = 500, tm = ["src", "alt"];
function om(e, n) {
  var r = oe("var-icon"), a = oe("var-button"), t = Ae("ripple");
  return we((h(), T(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
      style: q({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        ref: "cardFloater",
        class: c(e.n("floater")),
        style: q({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [W(e.$slots, "image", {}, () => [e.src ? (h(), T(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          style: q({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        tm
      )) : x("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("container"))
        },
        [W(e.$slots, "title", {}, () => [e.title ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), W(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          re(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [W(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), T(
          "div",
          {
            key: 1,
            class: c(e.n("floating-content")),
            style: q({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [W(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: q({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [W(e.$slots, "close-button", {}, () => [ne(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: On(e.close, ["stop"])
          },
          {
            default: ve(() => [ne(
              r,
              {
                "var-card-cover": "",
                name: "window-close",
                class: c(e.n("close-button-icon"))
              },
              null,
              8,
              ["class"]
            )]),
            _: 1
            /* STABLE */
          },
          8,
          ["class", "onClick"]
        )])],
        6
        /* CLASS, STYLE */
      )) : x("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), A(
      "div",
      {
        class: c(e.n("holder")),
        style: q({
          width: e.holderWidth,
          height: e.holderHeight
        })
      },
      null,
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[t, {
    disabled: !e.ripple || e.floater
  }]]);
}
var xs = _({
  name: "VarCard",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: ke,
    VarButton: Ge
  },
  props: em,
  setup(e) {
    var n = I(null), r = I(null), a = I("auto"), t = I("auto"), o = I("100%"), l = I("100%"), i = I("auto"), s = I("auto"), u = I(void 0), d = I("hidden"), v = I("0px"), f = I("0"), m = R(() => e.layout === "row"), p = I(!1), y = I(!1), {
      zIndex: g
    } = pt(() => e.floating, 1);
    Xt(() => e.floating, () => !m.value);
    var V = "auto", P = "auto", C = null, w = I(null), B = /* @__PURE__ */ function() {
      var z = al(function* () {
        clearTimeout(w.value), clearTimeout(C), w.value = null, w.value = setTimeout(/* @__PURE__ */ al(function* () {
          var {
            width: M,
            height: b,
            left: k,
            top: j
          } = n.value.getBoundingClientRect();
          a.value = he(M), t.value = he(b), o.value = a.value, l.value = t.value, i.value = he(j), s.value = he(k), u.value = "fixed", V = i.value, P = s.value, p.value = !0, yield Pn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? am : 0);
      });
      return function() {
        return z.apply(this, arguments);
      };
    }(), S = () => {
      clearTimeout(C), clearTimeout(w.value), w.value = null, o.value = a.value, l.value = t.value, i.value = V, s.value = P, v.value = "0px", f.value = "0", p.value = !1, C = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", V = "auto", P = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      $(e["onUpdate:floating"], !1);
    }, O = (z) => {
      $(e.onClick, z);
    };
    return le(() => e.floating, (z) => {
      m.value || Ve(() => {
        z ? B() : S();
      });
    }, {
      immediate: !0
    }), {
      n: nm,
      classes: rm,
      toSizeUnit: he,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: w,
      floaterWidth: o,
      floaterHeight: l,
      floaterTop: i,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: g,
      isRow: m,
      close: D,
      showFloatingButtons: p,
      floated: y,
      handleClick: O
    };
  }
});
xs.render = om;
const Mr = xs;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var cS = Mr, im = {
  title: {
    type: [Number, String]
  },
  icon: {
    type: String
  },
  description: {
    type: String
  },
  border: {
    type: Boolean,
    default: !1
  },
  borderOffset: {
    type: [Number, String]
  },
  iconClass: {
    type: String
  },
  titleClass: {
    type: String
  },
  descriptionClass: {
    type: String
  },
  extraClass: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, {
  n: lm,
  classes: sm
} = ee("cell");
function um(e, n) {
  var r = oe("var-icon"), a = Ae("ripple");
  return we((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "icon", {}, () => [e.icon ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [ne(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )) : x("v-if", !0)]), A(
      "div",
      {
        class: c(e.n("content"))
      },
      [W(e.$slots, "default", {}, () => [e.title ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        re(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        re(e.description),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [W(e.$slots, "extra")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var eu = _({
  name: "VarCell",
  components: {
    VarIcon: ke
  },
  directives: {
    Ripple: ze
  },
  props: im,
  setup(e) {
    var n = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": he(e.borderOffset),
      "--cell-border-right": he(e.borderOffset)
    }), r = (a) => {
      $(e.onClick, a);
    };
    return {
      n: lm,
      classes: sm,
      toSizeUnit: he,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
eu.render = um;
const ir = eu;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var mS = ir, dm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: vm
} = ee("form-details"), fm = {
  key: 0
}, cm = {
  key: 0
};
function mm(e, n) {
  return h(), me(
    Be,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n())
        },
        [A(
          "div",
          {
            class: c(e.n("error-message"))
          },
          [ne(
            Be,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (h(), T(
                "div",
                fm,
                re(e.errorMessage),
                1
                /* TEXT */
              )) : x("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        ), A(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [ne(
            Be,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (h(), T(
                "div",
                cm,
                re(e.extraMessage),
                1
                /* TEXT */
              )) : x("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var nu = _({
  name: "VarFormDetails",
  props: dm,
  setup: () => ({
    n: vm
  })
});
nu.render = mm;
const je = nu;
je.install = function(e) {
  e.component(je.name, je);
};
var pS = je, pm = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, ru = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), au = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function hm() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(ru), {
    length: r
  } = Mn(au);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function gm() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(ru), {
    index: r
  } = In(au);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function Do() {
  return Do = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Do.apply(this, arguments);
}
var tu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function hn() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(tu), r = Wn(), a = e ? (t) => {
    e(Do({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function ym() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(tu);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: bm,
  classes: Cm
} = ee("checkbox");
function wm(e, n) {
  var r = oe("var-icon"), a = oe("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: c(e.n())
      },
      [we((h(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [ne(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : W(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ne(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), ne(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var ou = _({
  name: "VarCheckbox",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: ke,
    VarFormDetails: je
  },
  props: pm,
  setup(e) {
    var n = I(!1), r = R(() => n.value === e.checkedValue), a = R(() => e.checkedValue), t = I(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = gm(), {
      form: i,
      bindForm: s
    } = hn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = pn(), m = (S) => {
      Ve(() => {
        var {
          validateTrigger: D,
          rules: O,
          modelValue: z
        } = e;
        d(D, S, O, z);
      });
    }, p = (S) => {
      n.value = S;
      var {
        checkedValue: D,
        onChange: O
      } = e;
      $(e["onUpdate:modelValue"], n.value), $(O, n.value), m("onChange"), S === D ? o == null || o.onChecked(D) : o == null || o.onUnchecked(D);
    }, y = (S) => {
      var {
        disabled: D,
        readonly: O,
        checkedValue: z,
        uncheckedValue: M,
        onClick: b
      } = e;
      if (!(i != null && i.disabled.value || D) && ($(b, S), !(i != null && i.readonly.value || O))) {
        t.value = !0;
        var k = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && k || p(r.value ? M : z);
      }
    }, g = (S) => {
      var {
        checkedValue: D,
        uncheckedValue: O
      } = e;
      n.value = S.includes(D) ? D : O;
    }, V = () => {
      t.value = !1;
    }, P = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, C = (S) => {
      var {
        checkedValue: D,
        uncheckedValue: O
      } = e, z = ![D, O].includes(S);
      z && (S = r.value ? O : D), p(S);
    }, w = () => v(e.rules, e.modelValue);
    le(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var B = {
      checkedValue: a,
      checked: r,
      sync: g,
      validate: w,
      resetValidation: f,
      reset: P,
      resetWithAnimation: V
    };
    return $(l, B), $(s, B), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: bm,
      classes: Cm,
      handleClick: y,
      toggle: C,
      reset: P,
      validate: w,
      resetValidation: f
    };
  }
});
ou.render = wm;
const lr = ou;
lr.install = function(e) {
  e.component(lr.name, lr);
};
var hS = lr;
function Sm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var km = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: {
    type: [String, Number]
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Sm
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: $m,
  classes: Tm
} = ee("checkbox-group");
function Om(e, n) {
  var r = oe("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), ne(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var iu = _({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: je
  },
  props: km,
  setup(e) {
    var n = R(() => e.max), r = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = hm(), {
      bindForm: l
    } = hn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = pn(), v = R(() => i.value), f = (D) => {
      Ve(() => {
        var {
          validateTrigger: O,
          rules: z,
          modelValue: M
        } = e;
        s(O, D, z, M);
      });
    }, m = (D) => {
      $(e["onUpdate:modelValue"], D), $(e.onChange, D), f("onChange");
    }, p = (D) => {
      var {
        modelValue: O
      } = e;
      O.includes(D) || m([...O, D]);
    }, y = (D) => {
      var {
        modelValue: O
      } = e;
      O.includes(D) && m(O.filter((z) => z !== D));
    }, g = () => t.forEach((D) => {
      var {
        sync: O
      } = D;
      return O(e.modelValue);
    }), V = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, P = () => {
      var D = t.map((z) => {
        var {
          checkedValue: M
        } = z;
        return M.value;
      }), O = Yi(D);
      return V(), $(e["onUpdate:modelValue"], O), O;
    }, C = () => {
      var D = t.filter((z) => {
        var {
          checked: M
        } = z;
        return !M.value;
      }).map((z) => {
        var {
          checkedValue: M
        } = z;
        return M.value;
      }), O = Yi(D);
      return V(), $(e["onUpdate:modelValue"], O), O;
    }, w = () => {
      $(e["onUpdate:modelValue"], []), d();
    }, B = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, g, {
      deep: !0
    }), le(() => a.value, g);
    var S = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: y,
      validate: B,
      resetValidation: d,
      reset: w,
      errorMessage: v
    };
    return o(S), $(l, S), {
      errorMessage: i,
      n: $m,
      classes: Tm,
      checkAll: P,
      inverseAll: C,
      reset: w,
      validate: B,
      resetValidation: d
    };
  }
});
iu.render = Om;
const Ir = iu;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var gS = Ir;
function Pm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Vm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Em = {
  type: {
    type: String,
    default: "default",
    validator: Pm
  },
  size: {
    type: String,
    default: "normal",
    validator: Vm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Xe(hs, "name"),
  plain: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !0
  },
  block: {
    type: Boolean,
    default: !1
  },
  closable: {
    type: Boolean,
    default: !1
  },
  onClose: Y()
}, {
  n: qn,
  classes: Mm
} = ee("chip");
function Im(e, n) {
  var r = oe("var-icon");
  return h(), me(
    Be,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [A(
        "span",
        Me({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [W(e.$slots, "left"), A(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [W(e.$slots, "default")],
          2
          /* CLASS */
        ), W(e.$slots, "right"), e.closable ? (h(), T(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [ne(
            r,
            {
              name: "" + (e.iconName ? e.iconName : "close-circle")
            },
            null,
            8,
            ["name"]
          )],
          2
          /* CLASS */
        )) : x("v-if", !0)],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["name"]
  );
}
var lu = _({
  name: "VarChip",
  components: {
    VarIcon: ke
  },
  inheritAttrs: !1,
  props: Em,
  setup(e) {
    var n = R(() => {
      var {
        plain: t,
        textColor: o,
        color: l
      } = e;
      return t ? {
        color: o || l,
        borderColor: l
      } : {
        color: o,
        background: l
      };
    }), r = R(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = qn(o ? "$--flex" : "$--inline-flex"), d = i ? qn("plain") + " " + qn("plain-" + l) : qn("--" + l), v = s ? qn("--round") : null;
      return [qn("--" + t), u, d, v];
    }), a = (t) => {
      $(e.onClose, t);
    };
    return {
      n: qn,
      classes: Mm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
lu.render = Im;
const sr = lu;
sr.install = function(e) {
  e.component(sr.name, sr);
};
var yS = sr;
function Bm(e) {
  return ["row", "column"].includes(e);
}
function Nm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Dm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Am = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "row",
    validator: Bm
  },
  justify: {
    type: String,
    validator: Nm
  },
  align: {
    type: String,
    validator: Dm
  },
  xs: {
    type: [Object, Number, String]
  },
  sm: {
    type: [Object, Number, String]
  },
  md: {
    type: [Object, Number, String]
  },
  lg: {
    type: [Object, Number, String]
  },
  xl: {
    type: [Object, Number, String]
  },
  onClick: Y()
}, su = Symbol("ROW_BIND_COL_KEY"), uu = Symbol("ROW_COUNT_COL_KEY");
function zm() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(su), {
    length: r
  } = Mn(uu);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Lm() {
  var {
    parentProvider: e,
    bindParent: n
  } = Tn(su), {
    index: r
  } = In(uu);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: bt,
  classes: Rm
} = ee("col");
function Um(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: q({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var du = _({
  name: "VarCol",
  props: Am,
  setup(e) {
    var n = I({
      left: 0,
      right: 0
    }), r = R(() => L(e.span)), a = R(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Lm(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (ui(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(bt("--span-" + u + "-" + m)), f && v.push(bt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(bt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      $(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), $(o, l), {
      n: bt,
      classes: Rm,
      padding: n,
      toNumber: L,
      toSizeUnit: he,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: It
    };
  }
});
du.render = Um;
const Br = du;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var bS = Br, vu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), fu = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Ym() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(vu), {
    length: r
  } = Mn(fu);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Fm = {
  modelValue: {
    type: [Array, String, Number]
  },
  accordion: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: Boolean,
    default: !0
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Hm
} = ee("collapse");
function jm(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var cu = _({
  name: "VarCollapse",
  props: Fm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Ym(), t = R(() => e.modelValue), o = R(() => e.offset), l = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, i = (m, p) => l() ? p ? e.accordion ? m : [...e.modelValue, m] : e.accordion ? null : e.modelValue.filter((y) => y !== m) : null, s = (m, p) => {
      var y = i(m, p);
      $(e["onUpdate:modelValue"], y), $(e.onChange, y);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: y
          } = p;
          return e.modelValue === y.value;
        });
      var m = r.filter((p) => {
        var {
          name: y
        } = p;
        return y.value === void 0 ? !1 : e.modelValue.includes(y.value);
      });
      return m.length ? m : void 0;
    }, d = () => e.accordion ? r.find((m) => {
      var {
        index: p,
        name: y
      } = m;
      return y.value === void 0 && e.modelValue === p.value;
    }) : r.filter((m) => {
      var {
        index: p,
        name: y
      } = m;
      return y.value === void 0 && e.modelValue.includes(p.value);
    }), v = () => {
      if (l()) {
        var m = u() || d();
        if (e.accordion && !m || !e.accordion && !m.length) {
          r.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((p) => {
          var y = e.accordion ? m === p : m.includes(p);
          p.init(e.accordion, y);
        });
      }
    }, f = {
      active: t,
      offset: o,
      updateItem: s
    };
    return a(f), le(() => n.value, () => Ve().then(v)), le(() => e.modelValue, () => Ve().then(v)), {
      n: Hm
    };
  }
});
cu.render = jm;
const Nr = cu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var CS = Nr;
function Wm() {
  var {
    parentProvider: e,
    bindParent: n
  } = Tn(vu), {
    index: r
  } = In(fu);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Gm = {
  name: {
    type: [String, Number]
  },
  title: {
    type: String
  },
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, {
  n: qm,
  classes: Km
} = ee("collapse-item");
function Xm(e, n) {
  var r = oe("var-icon");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [A(
      "div",
      {
        class: c(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [A(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [W(e.$slots, "title", {}, () => [be(
          re(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.n("header-icon"))
        },
        [W(e.$slots, "icon", {}, () => [ne(
          r,
          {
            name: e.icon,
            transition: 250,
            class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
          },
          null,
          8,
          ["name", "class"]
        )])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), we(A(
      "div",
      {
        class: c(e.n("content")),
        ref: "contentEl",
        onTransitionend: n[1] || (n[1] = function() {
          return e.transitionend && e.transitionend(...arguments);
        }),
        onTransitionstart: n[2] || (n[2] = function() {
          return e.start && e.start(...arguments);
        })
      },
      [A(
        "div",
        {
          class: c(e.n("content-wrap"))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[Va, e.show]])],
    2
    /* CLASS */
  );
}
var mu = _({
  name: "VarCollapseItem",
  components: {
    VarIcon: ke
  },
  props: Gm,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Wm(), t = !0, o = I(null), l = I(!1), i = I(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = R(() => e.name), f = (C, w) => {
      s.value === void 0 || C && Ce(s.value) || w === i.value || (i.value = w, m(!0));
    }, m = (C) => {
      e.disabled || C || d(e.name || n.value, !i.value);
    }, p = () => {
      o.value && (o.value.style.height = "", l.value = !0, Ve(() => {
        var {
          offsetHeight: C
        } = o.value;
        o.value.style.height = 0 + "px", Sn(() => {
          o.value.style.height = C + "px", t && Kt(() => {
            t && V();
          });
        });
      }));
    }, y = () => {
      t = !1;
    }, g = () => {
      if (o.value) {
        var {
          offsetHeight: C
        } = o.value;
        o.value.style.height = C + "px", Sn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, V = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, P = {
      index: n,
      name: v,
      init: f
    };
    return a(P), le(i, (C) => {
      C ? p() : g();
    }), {
      n: qm,
      start: y,
      classes: Km,
      show: l,
      isShow: i,
      offset: u,
      toggle: m,
      contentEl: o,
      transitionend: V
    };
  }
});
mu.render = Xm;
const Dr = mu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var wS = Dr, Zm = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: Y(),
  onChange: Y()
}, {
  n: Jm
} = ee("countdown"), Ao = 1e3, zo = 60 * Ao, Lo = 60 * zo, tl = 24 * Lo;
function Qm(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default", si(xl(e.timeData)), () => [be(
      re(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var pu = _({
  name: "VarCountdown",
  props: Zm,
  setup(e) {
    var n = I(""), r = I({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (p, y) => {
      var g = Object.values(y), V = ["DD", "HH", "mm", "ss"], P = [24, 60, 60, 1e3];
      if (V.forEach((w, B) => {
        p.includes(w) ? p = p.replace(w, Ca("" + g[B], 2, "0")) : g[B + 1] += g[B] * P[B];
      }), p.includes("S")) {
        var C = Ca("" + g[g.length - 1], 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", C) : p.includes("SS") ? p = p.replace("SS", C.slice(0, 2)) : p = p.replace("S", C.slice(0, 1));
      }
      return p;
    }, u = (p) => {
      var y = Math.floor(p / tl), g = Math.floor(p % tl / Lo), V = Math.floor(p % Lo / zo), P = Math.floor(p % zo / Ao), C = Math.floor(p % Ao), w = {
        days: y,
        hours: g,
        minutes: V,
        seconds: P,
        milliseconds: C
      };
      r.value = w, $(e.onChange, r.value), n.value = s(e.format, w);
    }, d = () => {
      var {
        time: p,
        onEnd: y
      } = e, g = performance.now();
      if (a || (a = g + L(p)), l = a - g, l < 0 && (l = 0), u(l), l === 0) {
        $(y);
        return;
      }
      t && (o = Sn(d));
    }, v = function(p) {
      p === void 0 && (p = !1), !(t && !p) && (t = !0, a = performance.now() + (l || L(e.time)), d());
    }, f = () => {
      t = !1, qi(o);
    }, m = () => {
      a = 0, t = !1, qi(o), d();
    };
    return le(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Xa(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), gr(() => {
      i = t, f();
    }), Pa(f), {
      showTime: n,
      timeData: r,
      n: Jm,
      start: v,
      pause: f,
      reset: m
    };
  }
});
pu.render = Qm;
const Ar = pu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var SS = Ar;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Da = 9e15, yr = 1e9, Ro = "0123456789abcdef", zt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Lt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Uo = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -Da,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Da,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, hu, Dn, fe = !0, _t = "[DecimalError] ", pr = _t + "Invalid argument: ", gu = _t + "Precision limit exceeded", yu = _t + "crypto unavailable", bu = "[object Decimal]", Ze = Math.floor, Ye = Math.pow, _m = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, xm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ep = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Cu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, wn = 1e7, de = 7, np = 9007199254740991, rp = zt.length - 1, Yo = Lt.length - 1, K = { toStringTag: bu };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
K.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(pr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
K.comparedTo = K.cmp = function(e) {
  var n, r, a, t, o = this, l = o.d, i = (e = new o.constructor(e)).d, s = o.s, u = e.s;
  if (!l || !i)
    return !s || !u ? NaN : s !== u ? s : l === i ? 0 : !l ^ s < 0 ? 1 : -1;
  if (!l[0] || !i[0])
    return l[0] ? s : i[0] ? -u : 0;
  if (s !== u)
    return s;
  if (o.e !== e.e)
    return o.e > e.e ^ s < 0 ? 1 : -1;
  for (a = l.length, t = i.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (l[n] !== i[n])
      return l[n] > i[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
K.cosine = K.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = ap(a, Tu(a, r)), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Ye(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = We(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ye(r, 1 / 3), e = Ze((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Pe(u.plus(d).times(i), u.plus(s), l + 2, 1), We(i.d).slice(0, l) === (r = We(a.d)).slice(0, l))
      if (r = r.slice(l - 3, l + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ue(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ue(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return fe = !0, ue(a, e, v.rounding, n);
};
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Ze(this.e / de)) * de, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
K.dividedBy = K.div = function(e) {
  return Pe(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Pe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
K.greaterThan = K.gt = function(e) {
  return this.cmp(e) > 0;
};
K.greaterThanOrEqualTo = K.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
K.hyperbolicCosine = K.cosh = function() {
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / eo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ha(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return ue(o, l.precision = r, l.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ha(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / eo(5, e)), t = Ha(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Pe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? bn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? bn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = bn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, fe = !1, r = r.times(r).minus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, fe = !1, r = r.times(r).plus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Pe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
K.inverseSine = K.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = bn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Yo)
      return l = bn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Yo)
      return l = bn(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(i / de), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), fe = !0, ue(l, d.precision = v, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && Ze(this.e / de) > this.d.length - 2;
};
K.isNaN = function() {
  return !this.s;
};
K.isNegative = K.isNeg = function() {
  return this.s < 0;
};
K.isPositive = K.isPos = function() {
  return this.s > 0;
};
K.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
K.lessThan = K.lt = function(e) {
  return this.cmp(e) < 0;
};
K.lessThanOrEqualTo = K.lte = function(e) {
  return this.cmp(e) < 1;
};
K.logarithm = K.log = function(e) {
  var n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, m = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new d(NaN);
    n = e.eq(10);
  }
  if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
    return new d(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (n)
    if (r.length > 1)
      o = !0;
    else {
      for (t = r[0]; t % 10 === 0; )
        t /= 10;
      o = t !== 1;
    }
  if (fe = !1, i = v + m, l = rr(u, i), a = n ? Rt(d, i + 10) : rr(e, i), s = Pe(l, a, i, 1), it(s.d, t = v, f))
    do
      if (i += 10, l = rr(u, i), a = n ? Rt(d, i + 10) : rr(e, i), s = Pe(l, a, i, 1), !o) {
        +We(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (it(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
K.minus = K.sub = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, p = m.constructor;
  if (e = new p(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new p(NaN) : m.d ? e.s = -e.s : e = new p(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, i = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(m);
    else
      return new p(s === 3 ? -0 : 0);
    return fe ? ue(e, i, s) : e;
  }
  if (r = Ze(e.e / de), d = Ze(m.e / de), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, l = f.length) : (n = f, r = d, l = u.length), a = Math.max(Math.ceil(i / de), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, l = f.length, v = a < l, v && (l = a), a = 0; a < l; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    o = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), l = u.length, a = f.length - l; a > 0; --a)
    u[l++] = 0;
  for (a = f.length; a > o; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = wn - 1;
      --u[t], u[a] += wn;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = xt(u, r), fe ? ue(e, i, s) : e) : new p(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Pe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Pe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
K.naturalExponential = K.exp = function() {
  return Fo(this);
};
K.naturalLogarithm = K.ln = function() {
  return rr(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
K.plus = K.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), fe ? ue(e, i, s) : e;
  if (o = Ze(v.e / de), a = Ze(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / de), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / wn | 0, u[t] %= wn;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = xt(u, a), fe ? ue(e, i, s) : e;
};
K.precision = K.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(pr + e);
  return r.d ? (n = wu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = op(a, Tu(a, r)), a.precision = e, a.rounding = n, ue(Dn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (fe = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = We(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ze((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Pe(l, o, r + 2, 1)).times(0.5), We(o.d).slice(0, r) === (n = We(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ue(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ue(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return fe = !0, ue(a, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.times = K.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Ze(d.e / de) + Ze(e.e / de), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + n, o[t--] = i % wn | 0, n = i / wn | 0;
    o[t] = (o[t] + n) % wn | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = xt(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, n) {
  return Ti(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (an(e, 0, yr), n === void 0 ? n = a.rounding : an(n, 0, 8), ue(r, e + r.e + 1, n));
};
K.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Vn(a, !0) : (an(e, 0, yr), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e + 1, n), r = Vn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Vn(t) : (an(e, 0, yr), n === void 0 ? n = o.rounding : an(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = Vn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
K.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, p = m.d, y = m.constructor;
  if (!p)
    return new y(m);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = wu(p) - m.e - 1, l = o % de, n.d[0] = Ye(10, l < 0 ? de + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new y(e), !i.isInt() || i.lt(u))
      throw Error(pr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (fe = !1, i = new y(We(p)), d = y.precision, y.precision = o = p.length * de * 2; v = Pe(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Pe(u, a, o, 1).minus(m).abs().cmp(Pe(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], y.precision = d, fe = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return Ti(this, 16, e, n);
};
K.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : an(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (fe = !1, r = Pe(r, e, 0, n, 1).times(e), fe = !0, ue(r)) : (e.s = r.s, r = e), r;
};
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, n) {
  return Ti(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ye(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(i, a, o);
  if (n = Ze(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= np)
    return t = Su(s, i, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Ye(+i, u), n = r == 0 || !isFinite(r) ? Ze(u * (Math.log("0." + We(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (fe = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = Fo(e.times(rr(i, a + r)), a), t.d && (t = ue(t, a + 5, 1), it(t.d, a, o) && (n = a + 10, t = ue(Fo(e.times(rr(i, n + r)), n), n + 5, 1), +We(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = l, fe = !0, s.rounding = o, ue(t, a, o));
};
K.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Vn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (an(e, 1, yr), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e, n), r = Vn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (an(e, 1, yr), n === void 0 ? n = a.rounding : an(n, 0, 8)), ue(new a(r), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, r = Vn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
K.truncated = K.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, r = Vn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function We(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += Zn(r)), o += a;
    l = e[n], a = l + "", r = de - a.length, r && (o += Zn(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function an(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(pr + e);
}
function it(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Ye(10, de - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ye(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ye(10, n - 3) - 1, l;
}
function Ot(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Ro.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function ap(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / eo(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ha(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var l = n.times(n);
    n = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Pe = function() {
  function e(a, t, o) {
    var l, i = 0, s = a.length;
    for (a = a.slice(); s--; )
      l = a[s] * t + i, a[s] = l % o | 0, i = l / o | 0;
    return i && a.unshift(i), a;
  }
  function n(a, t, o, l) {
    var i, s;
    if (o != l)
      s = o > l ? 1 : -1;
    else
      for (i = s = 0; i < o; i++)
        if (a[i] != t[i]) {
          s = a[i] > t[i] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, o, l) {
    for (var i = 0; o--; )
      a[o] -= i, i = a[o] < t[o] ? 1 : 0, a[o] = i * l + a[o] - t[o];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, o, l, i, s) {
    var u, d, v, f, m, p, y, g, V, P, C, w, B, S, D, O, z, M, b, k, j = a.constructor, Q = a.s == t.s ? 1 : -1, F = a.d, E = t.d;
    if (!F || !F[0] || !E || !E[0])
      return new j(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (F ? E && F[0] == E[0] : !E) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          F && F[0] == 0 || !E ? Q * 0 : Q / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = wn, m = de, d = Ze(a.e / m) - Ze(t.e / m)), b = E.length, z = F.length, V = new j(Q), P = V.d = [], v = 0; E[v] == (F[v] || 0); v++)
      ;
    if (E[v] > (F[v] || 0) && d--, o == null ? (S = o = j.precision, l = j.rounding) : i ? S = o + (a.e - t.e) + 1 : S = o, S < 0)
      P.push(1), p = !0;
    else {
      if (S = S / m + 2 | 0, v = 0, b == 1) {
        for (f = 0, E = E[0], S++; (v < z || f) && S--; v++)
          D = f * s + (F[v] || 0), P[v] = D / E | 0, f = D % E | 0;
        p = f || v < z;
      } else {
        for (f = s / (E[0] + 1) | 0, f > 1 && (E = e(E, f, s), F = e(F, f, s), b = E.length, z = F.length), O = b, C = F.slice(0, b), w = C.length; w < b; )
          C[w++] = 0;
        k = E.slice(), k.unshift(0), M = E[0], E[1] >= s / 2 && ++M;
        do
          f = 0, u = n(E, C, b, w), u < 0 ? (B = C[0], b != w && (B = B * s + (C[1] || 0)), f = B / M | 0, f > 1 ? (f >= s && (f = s - 1), y = e(E, f, s), g = y.length, w = C.length, u = n(y, C, g, w), u == 1 && (f--, r(y, b < g ? k : E, g, s))) : (f == 0 && (u = f = 1), y = E.slice()), g = y.length, g < w && y.unshift(0), r(C, y, w, s), u == -1 && (w = C.length, u = n(E, C, b, w), u < 1 && (f++, r(C, b < w ? k : E, w, s))), w = C.length) : u === 0 && (f++, C = [0]), P[v++] = f, u && C[0] ? C[w++] = F[O] || 0 : (C = [F[O]], w = 1);
        while ((O++ < z || C[0] !== void 0) && S--);
        p = C[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (m == 1)
      V.e = d, hu = p;
    else {
      for (v = 1, f = P[0]; f >= 10; f /= 10)
        v++;
      V.e = v + d * m - 1, ue(V, i ? o + V.e + 1 : o, l, p);
    }
    return V;
  };
}();
function ue(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = n - t, o < 0)
        o += de, l = n, d = v[f = 0], s = d / Ye(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / de), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= de, l = o - de + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= de, l = o - de + t, s = l < 0 ? 0 : d / Ye(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Ye(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? l > 0 ? d / Ye(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ye(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Ye(10, de - o), v[f] = l > 0 ? (d / Ye(10, t - l) % Ye(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == wn && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != wn)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return fe && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Vn(e, n, r) {
  if (!e.isFinite())
    return $u(e);
  var a, t = e.e, o = We(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Zn(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Zn(-t - 1) + o, r && (a = r - l) > 0 && (o += Zn(a))) : t >= l ? (o += Zn(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + Zn(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += Zn(a))), o;
}
function xt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function Rt(e, n, r) {
  if (n > rp)
    throw fe = !0, r && (e.precision = r), Error(gu);
  return ue(new e(zt), n, 1, !0);
}
function bn(e, n, r) {
  if (n > Yo)
    throw Error(gu);
  return ue(new e(Lt), n, r, !0);
}
function wu(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Zn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Su(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), il(o.d, l) && (t = !0)), r = Ze(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), il(n.d, l);
  }
  return fe = !0, o;
}
function ol(e) {
  return e.d[e.d.length - 1] & 1;
}
function ku(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Fo(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = p) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ye(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), i = l.plus(Pe(o, r, s, 1)), We(i.d).slice(0, s) === We(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = ue(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && it(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return ue(l, f.precision = p, m, fe = !0);
      else
        return f.precision = p, l;
    }
    l = i;
  }
}
function rr(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, p = 10, y = e, g = y.d, V = y.constructor, P = V.rounding, C = V.precision;
  if (y.s < 0 || !g || !g[0] || !y.e && g[0] == 1 && g.length == 1)
    return new V(g && !g[0] ? -1 / 0 : y.s != 1 ? NaN : g ? 0 : y);
  if (n == null ? (fe = !1, d = C) : d = n, V.precision = d += p, r = We(g), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = We(y.d), a = r.charAt(0), m++;
    o = y.e, a > 1 ? (y = new V("0." + r), o++) : y = new V(a + "." + r.slice(1));
  } else
    return u = Rt(V, d + 2, C).times(o + ""), y = rr(new V(a + "." + r.slice(1)), d - p).plus(u), V.precision = C, n == null ? ue(y, C, P, fe = !0) : y;
  for (v = y, s = l = y = Pe(y.minus(1), y.plus(1), d, 1), f = ue(y.times(y), d, 1), t = 3; ; ) {
    if (l = ue(l.times(f), d, 1), u = s.plus(Pe(l, new V(t), d, 1)), We(u.d).slice(0, d) === We(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Rt(V, d + 2, C).times(o + ""))), s = Pe(s, new V(m), d, 1), n == null)
        if (it(s.d, d - p, P, i))
          V.precision = d += p, u = l = y = Pe(v.minus(1), v.plus(1), d, 1), f = ue(y.times(y), d, 1), t = i = 1;
        else
          return ue(s, V.precision = C, P, fe = !0);
      else
        return V.precision = C, s;
    s = u, t += 2;
  }
}
function $u(e) {
  return String(e.s * e.s / 0);
}
function Ho(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % de, r < 0 && (a += de), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= de; a < t; )
        e.d.push(+n.slice(a, a += de));
      n = n.slice(a), a = de - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), fe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function tp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Cu.test(n))
      return Ho(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (xm.test(n))
    r = 16, n = n.toLowerCase();
  else if (_m.test(n))
    r = 2;
  else if (ep.test(n))
    r = 8;
  else
    throw Error(pr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = Su(a, new a(r), o, o * 2)), u = Ot(n, r, wn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = xt(u, d), e.d = u, fe = !1, l && (e = Pe(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ye(2, s) : ar.pow(2, s))), fe = !0, e);
}
function op(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ha(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / eo(5, r)), n = Ha(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Ha(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / de);
  for (fe = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Pe(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Pe(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return fe = !0, l.d.length = d + 1, l;
}
function eo(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Tu(e, n) {
  var r, a = n.s < 0, t = bn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Dn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Dn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Dn = ol(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Dn = ol(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ti(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, p = r !== void 0;
  if (p ? (an(r, 1, yr), a === void 0 ? a = m.rounding : an(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = $u(e);
  else {
    for (d = Vn(e), l = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Ot(Vn(f), 10, t), f.e = f.d.length), v = Ot(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = hu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Ro.charAt(v[l]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ot(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Ro.charAt(v[l]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; )
          d = "0" + d;
        d = "0." + d;
      } else if (++o > s)
        for (o -= s; o--; )
          d += "0";
      else
        o < s && (d = d.slice(0, o) + "." + d.slice(o));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function il(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function ip(e) {
  return new this(e).abs();
}
function lp(e) {
  return new this(e).acos();
}
function sp(e) {
  return new this(e).acosh();
}
function up(e, n) {
  return new this(e).plus(n);
}
function dp(e) {
  return new this(e).asin();
}
function vp(e) {
  return new this(e).asinh();
}
function fp(e) {
  return new this(e).atan();
}
function cp(e) {
  return new this(e).atanh();
}
function mp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = bn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? bn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = bn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = bn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function pp(e) {
  return new this(e).cbrt();
}
function hp(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function gp(e, n, r) {
  return new this(e).clamp(n, r);
}
function yp(e) {
  if (!e || typeof e != "object")
    throw Error(_t + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    yr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Da,
    0,
    "toExpPos",
    0,
    Da,
    "maxE",
    0,
    Da,
    "minE",
    -Da,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = Uo[r]), (a = e[r]) !== void 0)
      if (Ze(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(pr + r + ": " + a);
  if (r = "crypto", t && (this[r] = Uo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(yu);
      else
        this[r] = !1;
    else
      throw Error(pr + r + ": " + a);
  return this;
}
function bp(e) {
  return new this(e).cos();
}
function Cp(e) {
  return new this(e).cosh();
}
function Ou(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, ll(o)) {
      u.s = o.s, fe ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (s = typeof o, s === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (l = 0, i = o; i >= 10; i /= 10)
          l++;
        fe ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Ho(u, o.toString());
    } else if (s !== "string")
      throw Error(pr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Cu.test(o) ? Ho(u, o) : tp(u, o);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = yp, t.clone = Ou, t.isDecimal = ll, t.abs = ip, t.acos = lp, t.acosh = sp, t.add = up, t.asin = dp, t.asinh = vp, t.atan = fp, t.atanh = cp, t.atan2 = mp, t.cbrt = pp, t.ceil = hp, t.clamp = gp, t.cos = bp, t.cosh = Cp, t.div = wp, t.exp = Sp, t.floor = kp, t.hypot = $p, t.ln = Tp, t.log = Op, t.log10 = Vp, t.log2 = Pp, t.max = Ep, t.min = Mp, t.mod = Ip, t.mul = Bp, t.pow = Np, t.random = Dp, t.round = Ap, t.sign = zp, t.sin = Lp, t.sinh = Rp, t.sqrt = Up, t.sub = Yp, t.sum = Fp, t.tan = Hp, t.tanh = jp, t.trunc = Wp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function wp(e, n) {
  return new this(e).div(n);
}
function Sp(e) {
  return new this(e).exp();
}
function kp(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function $p() {
  var e, n, r = new this(0);
  for (fe = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return fe = !0, new this(1 / 0);
      r = n;
    }
  return fe = !0, r.sqrt();
}
function ll(e) {
  return e instanceof ar || e && e.toStringTag === bu || !1;
}
function Tp(e) {
  return new this(e).ln();
}
function Op(e, n) {
  return new this(e).log(n);
}
function Pp(e) {
  return new this(e).log(2);
}
function Vp(e) {
  return new this(e).log(10);
}
function Ep() {
  return ku(this, arguments, "lt");
}
function Mp() {
  return ku(this, arguments, "gt");
}
function Ip(e, n) {
  return new this(e).mod(n);
}
function Bp(e, n) {
  return new this(e).mul(n);
}
function Np(e, n) {
  return new this(e).pow(n);
}
function Dp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : an(e, 1, yr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(yu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= de, a && e && (t = Ye(10, de - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= de)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < de && (r -= de - a);
  }
  return l.e = r, l.d = i, l;
}
function Ap(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function zp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Lp(e) {
  return new this(e).sin();
}
function Rp(e) {
  return new this(e).sinh();
}
function Up(e) {
  return new this(e).sqrt();
}
function Yp(e, n) {
  return new this(e).sub(n);
}
function Fp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function Hp(e) {
  return new this(e).tan();
}
function jp(e) {
  return new this(e).tanh();
}
function Wp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var ar = K.constructor = Ou(Uo);
zt = new ar(zt);
Lt = new ar(Lt);
var Gp = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: [String, Number]
  },
  max: {
    type: [String, Number]
  },
  step: {
    type: [String, Number],
    default: 1
  },
  color: {
    type: String
  },
  inputWidth: {
    type: [String, Number]
  },
  inputTextSize: {
    type: [String, Number]
  },
  buttonSize: {
    type: [String, Number]
  },
  decimalLength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disableIncrement: {
    type: Boolean,
    default: !1
  },
  disableDecrement: {
    type: Boolean,
    default: !1
  },
  disableInput: {
    type: Boolean,
    default: !1
  },
  lazyChange: {
    type: Boolean,
    default: !1
  },
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: {
    type: Array
  },
  onBeforeChange: Y(),
  onChange: Y(),
  onIncrement: Y(),
  onDecrement: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: qp,
  classes: Kp
} = ee("counter"), sl = 100, ul = 600, Xp = ["inputmode", "readonly", "disabled"];
function Zp(e, n) {
  var r = oe("var-icon"), a = oe("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      Me({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [we(ne(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: c(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: q({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.decrement,
          onTouchstart: e.pressDecrement,
          onTouchend: e.releaseDecrement,
          onTouchcancel: e.releaseDecrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.formDisabled || e.readonly || e.formReadonly || e.disableDecrement || !e.decrementButton || e.isMin
      }]]), we(A(
        "input",
        {
          class: c(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: q({
            width: e.toSizeUnit(e.inputWidth),
            fontSize: e.toSizeUnit(e.inputTextSize)
          }),
          inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
          readonly: e.readonly || e.formReadonly,
          disabled: e.disabled || e.formDisabled || e.disableInput,
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.inputValue = o),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        Xp
      ), [[wv, e.inputValue]]), we(ne(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: q({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.increment,
          onTouchstart: e.pressIncrement,
          onTouchend: e.releaseIncrement,
          onTouchcancel: e.releaseIncrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.readonly || e.formDisabled || e.formReadonly || e.disableIncrement || !e.incrementButton || e.isMax
      }]])],
      16
      /* FULL_PROPS */
    ), ne(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Pu = _({
  name: "VarCounter",
  components: {
    VarIcon: ke,
    VarFormDetails: je
  },
  directives: {
    Ripple: ze
  },
  inheritAttrs: !1,
  props: Gp,
  setup(e) {
    var n = I(""), r, a, t, o, {
      bindForm: l,
      form: i
    } = hn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = pn(), {
      readonly: f,
      disabled: m
    } = i ?? {}, p = () => d(e.rules, e.modelValue), y = (E) => {
      Ve(() => {
        var {
          validateTrigger: H,
          rules: U,
          modelValue: X
        } = e;
        u(H, E, U, X);
      });
    }, g = () => {
      var {
        min: E
      } = e;
      $(e["onUpdate:modelValue"], E != null ? L(E) : 0), v();
    }, V = {
      reset: g,
      validate: p,
      resetValidation: v
    }, P = R(() => {
      var {
        max: E,
        modelValue: H
      } = e;
      return E != null && L(H) >= L(E);
    }), C = R(() => {
      var {
        min: E,
        modelValue: H
      } = e;
      return E != null && L(H) <= L(E);
    }), w = (E) => {
      var {
        decimalLength: H,
        max: U,
        min: X
      } = e, N = L(E);
      return U != null && N > L(U) && (N = L(U)), X != null && N < L(X) && (N = L(X)), E = String(N), H != null && (E = N.toFixed(L(H))), E;
    }, B = (E) => {
      var {
        lazyChange: H,
        onBeforeChange: U
      } = e, {
        value: X
      } = E.target, N = w(X);
      H ? $(U, L(N), F) : Q(N), y("onInputChange");
    }, S = () => {
      var {
        disabled: E,
        readonly: H,
        disableDecrement: U,
        decrementButton: X,
        lazyChange: N,
        step: Z,
        modelValue: G,
        onDecrement: J,
        onBeforeChange: ae
      } = e;
      if (!(m != null && m.value || f != null && f.value || E || H || U || !X) && !C.value) {
        var ie = new ar(L(G)).minus(new ar(L(Z))).toString(), ge = w(ie), pe = L(ge);
        $(J, pe), N ? $(ae, pe, F) : (Q(ge), y("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: E,
        readonly: H,
        disableIncrement: U,
        incrementButton: X,
        lazyChange: N,
        step: Z,
        modelValue: G,
        onIncrement: J,
        onBeforeChange: ae
      } = e;
      if (!(m != null && m.value || f != null && f.value || E || H || U || !X) && !P.value) {
        var ie = new ar(L(G)).plus(new ar(L(Z))).toString(), ge = w(ie), pe = L(ge);
        $(J, pe), N ? $(ae, pe, F) : (Q(ge), y("onIncrement"));
      }
    }, O = () => {
      var {
        press: E,
        lazyChange: H
      } = e;
      !E || H || (o = window.setTimeout(() => {
        j();
      }, ul));
    }, z = () => {
      var {
        press: E,
        lazyChange: H
      } = e;
      !E || H || (t = window.setTimeout(() => {
        k();
      }, ul));
    }, M = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, b = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, k = () => {
      r = window.setTimeout(() => {
        D(), k();
      }, sl);
    }, j = () => {
      a = window.setTimeout(() => {
        S(), j();
      }, sl);
    }, Q = (E) => {
      n.value = E;
      var H = L(E);
      $(e["onUpdate:modelValue"], H);
    }, F = (E) => {
      Q(w(String(E))), y("onLazyChange");
    };
    return $(l, V), le(() => e.modelValue, (E) => {
      Q(w(String(E))), $(e.onChange, L(E));
    }), Q(w(String(e.modelValue))), {
      n: qp,
      classes: Kp,
      inputValue: n,
      errorMessage: s,
      formDisabled: m,
      formReadonly: f,
      isMax: P,
      isMin: C,
      validate: p,
      reset: g,
      resetValidation: v,
      handleChange: B,
      decrement: S,
      increment: D,
      pressDecrement: O,
      pressIncrement: z,
      releaseDecrement: M,
      releaseIncrement: b,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
Pu.render = Zp;
const zr = Pu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var kS = zr, Vu = 60, Eu = Vu * 60, Mu = Eu * 24, Jp = Mu * 7, ja = 1e3, uo = Vu * ja, dl = Eu * ja, Qp = Mu * ja, _p = Jp * ja, Oi = "millisecond", Aa = "second", za = "minute", La = "hour", Jn = "day", Pt = "week", yn = "month", Iu = "quarter", Qn = "year", Ra = "date", xp = "YYYY-MM-DDTHH:mm:ssZ", vl = "Invalid Date", eh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, nh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const rh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var jo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, ah = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + jo(t, 2, "0") + ":" + jo(o, 2, "0");
}, th = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, yn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), yn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, oh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, ih = function(n) {
  var r = {
    M: yn,
    y: Qn,
    w: Pt,
    d: Jn,
    D: Ra,
    h: La,
    m: za,
    s: Aa,
    ms: Oi,
    Q: Iu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, lh = function(n) {
  return n === void 0;
};
const sh = {
  s: jo,
  z: ah,
  m: th,
  a: oh,
  p: ih,
  u: lh
};
var nt = "en", Lr = {};
Lr[nt] = rh;
var Pi = function(n) {
  return n instanceof no;
}, Ut = function e(n, r, a) {
  var t;
  if (!n)
    return nt;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Lr[o] && (t = o), r && (Lr[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Lr[i] = n, t = i;
  }
  return !a && t && (nt = t), t || !a && nt;
}, te = function(n, r) {
  if (Pi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new no(a);
}, uh = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Oe = sh;
Oe.l = Ut;
Oe.i = Pi;
Oe.w = uh;
var dh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Oe.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(eh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, no = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Ut(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = dh(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Oe;
  }, n.isValid = function() {
    return this.$d.toString() !== vl;
  }, n.isSame = function(a, t) {
    var o = te(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return te(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < te(a);
  }, n.$g = function(a, t, o) {
    return Oe.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Oe.u(t) ? !0 : t, i = Oe.p(a), s = function(V, P) {
      var C = Oe.w(o.$u ? Date.UTC(o.$y, P, V) : new Date(o.$y, P, V), o);
      return l ? C : C.endOf(Jn);
    }, u = function(V, P) {
      var C = [0, 0, 0, 0], w = [23, 59, 59, 999];
      return Oe.w(o.toDate()[V].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? C : w).slice(P)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case Qn:
        return l ? s(1, 0) : s(31, 11);
      case yn:
        return l ? s(1, v) : s(0, v + 1);
      case Pt: {
        var p = this.$locale().weekStart || 0, y = (d < p ? d + 7 : d) - p;
        return s(l ? f - y : f + (6 - y), v);
      }
      case Jn:
      case Ra:
        return u(m + "Hours", 0);
      case La:
        return u(m + "Minutes", 1);
      case za:
        return u(m + "Seconds", 2);
      case Aa:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Oe.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Jn] = i + "Date", o[Ra] = i + "Date", o[yn] = i + "Month", o[Qn] = i + "FullYear", o[La] = i + "Hours", o[za] = i + "Minutes", o[Aa] = i + "Seconds", o[Oi] = i + "Milliseconds", o)[l], u = l === Jn ? this.$D + (t - this.$W) : t;
    if (l === yn || l === Qn) {
      var d = this.clone().set(Ra, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Ra, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Oe.p(a)]();
  }, n.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Oe.p(t), s = function(f) {
      var m = te(o);
      return Oe.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === yn)
      return this.set(yn, this.$M + a);
    if (i === Qn)
      return this.set(Qn, this.$y + a);
    if (i === Jn)
      return s(1);
    if (i === Pt)
      return s(7);
    var u = (l = {}, l[za] = uo, l[La] = dl, l[Aa] = ja, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Oe.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || vl;
    var l = a || xp, i = Oe.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, p = function(C, w, B, S) {
      return C && (C[w] || C(t, l)) || B[w].slice(0, S);
    }, y = function(C) {
      return Oe.s(s % 12 || 12, C, "0");
    }, g = m || function(P, C, w) {
      var B = P < 12 ? "AM" : "PM";
      return w ? B.toLowerCase() : B;
    }, V = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Oe.s(d + 1, 2, "0"),
      MMM: p(o.monthsShort, d, f, 3),
      MMMM: p(f, d),
      D: this.$D,
      DD: Oe.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(o.weekdaysMin, this.$W, v, 2),
      ddd: p(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Oe.s(s, 2, "0"),
      h: y(1),
      hh: y(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Oe.s(u, 2, "0"),
      s: String(this.$s),
      ss: Oe.s(this.$s, 2, "0"),
      SSS: Oe.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(nh, function(P, C) {
      return C || V[P] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Oe.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * uo, d = this - s, v = Oe.m(this, s);
    return v = (l = {}, l[Qn] = v / 12, l[yn] = v, l[Iu] = v / 3, l[Pt] = (d - u) / _p, l[Jn] = (d - u) / Qp, l[La] = d / dl, l[za] = d / uo, l[Aa] = d / ja, l)[i] || d, o ? v : Oe.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(yn).$D;
  }, n.$locale = function() {
    return Lr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Ut(a, t, !0);
    return l && (o.$L = l), o;
  }, n.clone = function() {
    return Oe.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Bu = no.prototype;
te.prototype = Bu;
[["$ms", Oi], ["$s", Aa], ["$m", za], ["$H", La], ["$W", Jn], ["$M", yn], ["$y", Qn], ["$D", Ra]].forEach(function(e) {
  Bu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, no, te), e.$i = !0), te;
};
te.locale = Ut;
te.isDayjs = Pi;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Lr[nt];
te.Ls = Lr;
te.p = {};
const Nu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Du = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function vh(e) {
  return ["date", "month"].includes(e);
}
var Vt = [{
  index: "01"
}, {
  index: "02"
}, {
  index: "03"
}, {
  index: "04"
}, {
  index: "05"
}, {
  index: "06"
}, {
  index: "07"
}, {
  index: "08"
}, {
  index: "09"
}, {
  index: "10"
}, {
  index: "11"
}, {
  index: "12"
}], et = [{
  index: "0"
}, {
  index: "1"
}, {
  index: "2"
}, {
  index: "3"
}, {
  index: "4"
}, {
  index: "5"
}, {
  index: "6"
}], fh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: vh
  },
  allowedDates: {
    type: Function
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  range: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: ch
} = ee("picker-header");
function mh(e, n) {
  var r = oe("var-icon"), a = oe("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [ne(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
      },
      {
        default: ve(() => [ne(r, {
          name: "chevron-left"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    ), A(
      "div",
      {
        class: c(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [ne(
        Be,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T(
            "div",
            {
              key: e.showDate
            },
            re(e.showDate),
            1
            /* TEXT */
          ))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    ), ne(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
      },
      {
        default: ve(() => [ne(r, {
          name: "chevron-right"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    )],
    2
    /* CLASS */
  );
}
var Au = _({
  name: "PanelHeader",
  components: {
    VarButton: Ge,
    VarIcon: ke
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = I(!1), t = I(0), o = R(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (i = He.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return He.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: ch,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Au.render = mh;
const zu = Au;
function Wo() {
  return Wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wo.apply(this, arguments);
}
te.extend(Nu);
te.extend(Du);
var {
  n: Ct,
  classes: ph
} = ee("month-picker"), {
  n: wt
} = ee("date-picker");
function hh(e, n) {
  var r = oe("panel-header"), a = oe("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [ne(
        r,
        {
          ref: "headerEl",
          type: "month",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickYear,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), ne(
        Be,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("ul", {
            key: e.panelKey
          }, [(h(!0), T(
            Te,
            null,
            Ne(e.MONTH_LIST, (t) => (h(), T("li", {
              key: t.index
            }, [ne(
              a,
              Me({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, Wo({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [be(
                  re(e.getMonthAbbr(t.index)),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1040,
              ["onClick"]
            )]))),
            128
            /* KEYED_FRAGMENT */
          ))]))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var Lu = _({
  name: "MonthPickerPanel",
  components: {
    VarButton: Ge,
    PanelHeader: zu
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t] = e.current.split("-"), o = I(!1), l = I(0), i = I(null), s = Ee({
      left: !1,
      right: !1
    }), u = R(() => e.choose.chooseYear === e.preview.previewYear), d = R(() => e.preview.previewYear === a), v = (P) => {
      var C, w;
      return (C = (w = He.value.datePickerMonthDict) == null ? void 0 : w[P].abbr) != null ? C : "";
    }, f = (P) => {
      var {
        preview: {
          previewYear: C
        },
        componentProps: {
          min: w,
          max: B
        }
      } = e, S = !0, D = !0, O = C + "-" + P;
      return B && (S = te(O).isSameOrBefore(te(B), "month")), w && (D = te(O).isSameOrAfter(te(w), "month")), S && D;
    }, m = (P) => {
      var {
        choose: {
          chooseMonths: C,
          chooseDays: w,
          chooseRangeMonth: B
        },
        componentProps: {
          type: S,
          range: D
        }
      } = e;
      if (D) {
        if (!B.length)
          return !1;
        var O = te(P).isSameOrBefore(te(B[1]), "month"), z = te(P).isSameOrAfter(te(B[0]), "month");
        return O && z;
      }
      return S === "month" ? C.includes(P) : w.some((M) => M.includes(P));
    }, p = (P) => {
      var {
        choose: {
          chooseMonth: C
        },
        preview: {
          previewYear: w
        },
        componentProps: {
          allowedDates: B,
          color: S,
          multiple: D,
          range: O
        }
      } = e, z = w + "-" + P, M = () => O || D ? m(z) : (C == null ? void 0 : C.index) === P && u.value, b = () => f(P) ? B ? !B(z) : !1 : !0, k = b(), j = () => k ? !0 : O || D ? !m(z) : !u.value || (C == null ? void 0 : C.index) !== P, Q = () => d.value && t === P && e.componentProps.showCurrent ? (O || D || u.value) && k ? !0 : O || D ? !m(z) : u.value ? (C == null ? void 0 : C.index) !== t : !0 : !1, F = () => k ? "" : Q() ? S ?? "" : M() ? "" : wt() + "-color-cover", E = F().startsWith(wt());
      return {
        outline: Q(),
        text: j(),
        color: j() ? "" : S,
        textColor: E ? "" : F(),
        [wt() + "-color-cover"]: E,
        class: ph(Ct("button"), [k, Ct("button--disabled")])
      };
    }, y = (P, C) => {
      var w = C.currentTarget;
      w.classList.contains(Ct("button--disabled")) || r("choose-month", P);
    }, g = (P) => {
      o.value = P === "prev", l.value += P === "prev" ? -1 : 1, r("check-preview", "year", P);
    }, V = (P) => {
      i.value.checkDate(P);
    };
    return le(() => e.preview.previewYear, (P) => {
      var {
        componentProps: {
          min: C,
          max: w
        }
      } = e;
      w && (s.right = !te("" + (L(P) + 1)).isSameOrBefore(te(w), "year")), C && (s.left = !te("" + (L(P) - 1)).isSameOrAfter(te(C), "year"));
    }, {
      immediate: !0
    }), {
      n: Ct,
      nDate: wt,
      pack: He,
      MONTH_LIST: Vt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: V,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: g
    };
  }
});
Lu.render = hh;
const gh = Lu;
var {
  n: fl,
  classes: yh
} = ee("year-picker"), bh = ["onClick"];
function Ch(e, n) {
  return h(), T(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), T(
      Te,
      null,
      Ne(e.yearList, (r) => (h(), T(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: q({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        re(r),
        15,
        bh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Ru = _({
  name: "YearPickerPanel",
  props: {
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = R(() => {
      var o = [], {
        preview: l,
        componentProps: {
          max: i,
          min: s
        }
      } = e;
      if (!l)
        return o;
      var u = [L(l) + 100, L(l) - 100];
      if (i) {
        var d = te(i).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = te(s).format("YYYY-MM-D"), m = L(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var p = u[0]; p >= u[1]; p--)
        o.push(p);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return tn(() => {
      var o = document.querySelector("." + fl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: fl,
      classes: yh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Ru.render = Ch;
const wh = Ru;
function Go() {
  return Go = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Go.apply(this, arguments);
}
te.extend(Nu);
te.extend(Du);
var {
  n: Na,
  classes: Sh
} = ee("day-picker"), {
  n: St
} = ee("date-picker");
function kh(e, n) {
  var r = oe("panel-header"), a = oe("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [ne(
        r,
        {
          ref: "headerEl",
          type: "day",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickMonth,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), ne(
        Be,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(h(!0), T(
              Te,
              null,
              Ne(e.sortWeekList, (t) => (h(), T(
                "li",
                {
                  key: t.index
                },
                re(e.getDayAbbr(t.index)),
                1
                /* TEXT */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          ), A(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(h(!0), T(
              Te,
              null,
              Ne(e.days, (t, o) => (h(), T("li", {
                key: o
              }, [ne(
                a,
                Me({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, Go({}, e.buttonProps(t)), {
                  onClick: (l) => e.chooseDay(t, l)
                }),
                {
                  default: ve(() => [be(
                    re(e.filterDay(t)),
                    1
                    /* TEXT */
                  )]),
                  _: 2
                  /* DYNAMIC */
                },
                1040,
                ["onClick"]
              )]))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          )]))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var Uu = _({
  name: "DayPickerPanel",
  components: {
    VarButton: Ge,
    PanelHeader: zu
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t, o] = e.current.split("-"), l = I([]), i = I(!1), s = I(0), u = I(null), d = Ee({
      left: !1,
      right: !1
    }), v = R(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = R(() => {
      var O;
      return e.choose.chooseYear === e.preview.previewYear && ((O = e.choose.chooseMonth) == null ? void 0 : O.index) === e.preview.previewMonth.index;
    }), m = R(() => {
      var O = et.findIndex((z) => z.index === e.componentProps.firstDayOfWeek);
      return O === -1 || O === 0 ? et : et.slice(O).concat(et.slice(0, O));
    }), p = (O) => {
      var z, M;
      return (z = (M = He.value.datePickerWeekDict) == null ? void 0 : M[O].abbr) != null ? z : "";
    }, y = (O) => O > 0 ? O : "", g = () => {
      var {
        preview: {
          previewMonth: O,
          previewYear: z
        }
      } = e, M = te(z + "-" + O.index).daysInMonth(), b = te(z + "-" + O.index + "-01").day(), k = m.value.findIndex((j) => j.index === "" + b);
      l.value = [...Array(k).fill(-1), ...Array.from(Array(M + 1).keys())].filter((j) => j);
    }, V = () => {
      var {
        preview: {
          previewYear: O,
          previewMonth: z
        },
        componentProps: {
          max: M,
          min: b
        }
      } = e;
      if (M) {
        var k = O + "-" + (L(z.index) + 1);
        d.right = !te(k).isSameOrBefore(te(M), "month");
      }
      if (b) {
        var j = O + "-" + (L(z.index) - 1);
        d.left = !te(j).isSameOrAfter(te(b), "month");
      }
    }, P = (O) => {
      var {
        preview: {
          previewYear: z,
          previewMonth: M
        },
        componentProps: {
          min: b,
          max: k
        }
      } = e, j = !0, Q = !0, F = z + "-" + M.index + "-" + O;
      return k && (j = te(F).isSameOrBefore(te(k), "day")), b && (Q = te(F).isSameOrAfter(te(b), "day")), j && Q;
    }, C = (O) => {
      var {
        choose: {
          chooseDays: z,
          chooseRangeDay: M
        },
        componentProps: {
          range: b
        }
      } = e;
      if (b) {
        if (!M.length)
          return !1;
        var k = te(O).isSameOrBefore(te(M[1]), "day"), j = te(O).isSameOrAfter(te(M[0]), "day");
        return k && j;
      }
      return z.includes(O);
    }, w = (O) => {
      if (O < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Na("button")
        };
      var {
        choose: {
          chooseDay: z
        },
        preview: {
          previewYear: M,
          previewMonth: b
        },
        componentProps: {
          allowedDates: k,
          color: j,
          multiple: Q,
          range: F
        }
      } = e, E = M + "-" + b.index + "-" + O, H = () => F || Q ? C(E) : L(z) === O && f.value, U = () => P(O) ? k ? !k(E) : !1 : !0, X = U(), N = () => X ? !0 : F || Q ? !C(E) : !f.value || L(z) !== O, Z = () => v.value && L(o) === O && e.componentProps.showCurrent ? (F || Q || f.value) && X ? !0 : F || Q ? !C(E) : f.value ? z !== o : !0 : !1, G = () => X ? "" : Z() ? j ?? "" : H() ? "" : St() + "-color-cover", J = G().startsWith(St());
      return {
        text: N(),
        outline: Z(),
        textColor: J ? "" : G(),
        [St() + "-color-cover"]: J,
        class: Sh(Na("button"), Na("button--usable"), [X, Na("button--disabled")])
      };
    }, B = (O) => {
      i.value = O === "prev", s.value += O === "prev" ? -1 : 1, r("check-preview", "month", O);
    }, S = (O, z) => {
      var M = z.currentTarget;
      M.classList.contains(Na("button--disabled")) || r("choose-day", O);
    }, D = (O) => {
      u.value.checkDate(O);
    };
    return tn(() => {
      g(), V();
    }), le(() => e.preview, () => {
      g(), V();
    }), {
      n: Na,
      nDate: St,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: y,
      getDayAbbr: p,
      checkDate: B,
      chooseDay: S,
      buttonProps: w
    };
  }
});
Uu.render = kh;
const $h = Uu;
var {
  n: Th,
  classes: Oh
} = ee("date-picker");
function Ph(e, n) {
  var r = oe("year-picker-panel"), a = oe("month-picker-panel"), t = oe("day-picker-panel");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [A(
      "div",
      {
        class: c(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [W(e.$slots, "year", {
          year: e.chooseYear
        }, () => [be(
          re(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (o) => e.clickEl("date"))
        },
        [ne(
          Be,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (h(), T("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? W(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [be(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? W(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [be(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )]) : W(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [be(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (h(), T("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? W(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [be(
                re(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? W(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [be(
                re(e.getDateTitle),
                1
                /* TEXT */
              )]) : W(e.$slots, "date", si(Me({
                key: 2
              }, e.slotProps)), () => [be(
                re(e.getDateTitle),
                1
                /* TEXT */
              )])]))];
            }),
            _: 3
            /* FORWARDED */
          },
          8,
          ["name"]
        )],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), A(
      "div",
      {
        class: c(e.n("body")),
        onTouchstart: n[2] || (n[2] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[3] || (n[3] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[4] || (n[4] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [ne(
        Be,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (h(), me(
            r,
            {
              key: 0,
              "component-props": e.componentProps,
              preview: e.previewYear,
              onChooseYear: e.getChooseYear
            },
            null,
            8,
            ["component-props", "preview", "onChooseYear"]
          )) : e.getPanelType === "month" ? (h(), me(
            a,
            {
              key: 1,
              ref: "monthPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "click-year": () => e.clickEl("year"),
              "component-props": e.componentProps,
              onChooseMonth: e.getChooseMonth,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"]
          )) : e.getPanelType === "date" ? (h(), me(
            t,
            {
              key: 2,
              ref: "dayPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "component-props": e.componentProps,
              "click-month": () => e.clickEl("month"),
              onChooseDay: e.getChooseDay,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"]
          )) : x("v-if", !0)]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    )],
    2
    /* CLASS */
  );
}
var Yu = _({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: gh,
    YearPickerPanel: wh,
    DayPickerPanel: $h
  },
  props: fh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Vt.find((se) => se.index === i), u = I(!1), d = I(!1), v = I(!0), f = I(), m = I(), p = I(), y = I(s), g = I(l), V = I(!1), P = I([]), C = I([]), w = I([]), B = I([]), S = I(null), D = I(null), O = Ee({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), z = R(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: p.value,
      chooseMonths: P.value,
      chooseDays: C.value,
      chooseRangeMonth: w.value,
      chooseRangeDay: B.value
    })), M = R(() => ({
      previewMonth: y.value,
      previewYear: g.value
    })), b = R(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return w.value.length ? w.value[0] + " ~ " + w.value[1] : "";
      var ce = "";
      if (f.value) {
        var Se, $e;
        ce = (Se = ($e = He.value.datePickerMonthDict) == null ? void 0 : $e[f.value.index].name) != null ? Se : "";
      }
      return se ? "" + P.value.length + He.value.datePickerSelected : ce;
    }), k = R(() => {
      var se, ye, ce, Se, {
        multiple: $e,
        range: Re
      } = e;
      if (Re) {
        var Je = B.value.map((io) => te(io).format("YYYY-MM-DD"));
        return Je.length ? Je[0] + " ~ " + Je[1] : "";
      }
      if ($e)
        return "" + C.value.length + He.value.datePickerSelected;
      if (!m.value || !f.value || !p.value)
        return "";
      var dn = te(m.value + "-" + f.value.index + "-" + p.value).day(), Ba = et.find((io) => io.index === "" + dn), Li = (se = (ye = He.value.datePickerWeekDict) == null ? void 0 : ye[Ba.index].name) != null ? se : "", hv = (ce = (Se = He.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? ce : "", gv = Ca(p.value, 2, "0");
      return He.value.lang === "zh-CN" ? f.value.index + "-" + gv + " " + Li.slice(0, 3) : Li.slice(0, 3) + ", " + hv.slice(0, 3) + " " + p.value;
    }), j = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = R(() => !e.touchable || ["", "year"].includes(j.value)), F = R(() => {
      var se, ye, ce, Se, $e = te(m.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + p.value).day(), Re = p.value ? Ca(p.value, 2, "0") : "";
      return {
        week: "" + $e,
        year: (ye = m.value) != null ? ye : "",
        month: (ce = (Se = f.value) == null ? void 0 : Se.index) != null ? ce : "",
        date: Re
      };
    }), E = R(() => z.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), H = R(() => m.value === g.value), U = R(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === y.value.index;
    }), X = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0];
        n = ye, r = ce;
      }
    }, Z = (se, ye) => se >= ye && se > 20 ? "x" : "y", G = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0], Se = ye - n, $e = ce - r;
        t = Z(Math.abs(Se), Math.abs($e)), a = Se > 0 ? "prev" : "next";
      }
    }, J = () => {
      if (!(Q.value || t !== "x")) {
        var se = j.value === "month" ? S : D;
        Kt(() => {
          se.value.forwardRef(a), zi();
        });
      }
    }, ae = (se, ye) => {
      var ce = ye === "month" ? w : B;
      if (ce.value = v.value ? [se, se] : [ce.value[0], se], v.value = !v.value, v.value) {
        var Se = te(ce.value[0]).isAfter(ce.value[1]), $e = Se ? [ce.value[1], ce.value[0]] : [...ce.value];
        $(e["onUpdate:modelValue"], $e), $(e.onChange, $e);
      }
    }, ie = (se, ye) => {
      var ce = ye === "month" ? P : C, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", $e = ce.value.map((Je) => te(Je).format(Se)), Re = $e.findIndex((Je) => Je === se);
      Re === -1 ? $e.push(se) : $e.splice(Re, 1), $(e["onUpdate:modelValue"], $e), $(e.onChange, $e);
    }, ge = (se, ye) => !m.value || !f.value ? !1 : H.value ? se === "month" ? ye.index < f.value.index : U.value ? ye < L(p.value) : f.value.index > y.value.index : m.value > g.value, pe = (se) => {
      var {
        readonly: ye,
        range: ce,
        multiple: Se,
        onChange: $e,
        "onUpdate:modelValue": Re
      } = e;
      if (!(se < 0 || ye)) {
        V.value = ge("day", se);
        var Je = g.value + "-" + y.value.index + "-" + se, dn = te(Je).format("YYYY-MM-DD");
        ce ? ae(dn, "day") : Se ? ie(dn, "day") : ($(Re, dn), $($e, dn));
      }
    }, Fe = (se) => {
      var {
        type: ye,
        readonly: ce,
        range: Se,
        multiple: $e,
        onChange: Re,
        onPreview: Je,
        "onUpdate:modelValue": dn
      } = e;
      if (V.value = ge("month", se), ye === "month" && !ce) {
        var Ba = g.value + "-" + se.index;
        Se ? ae(Ba, "month") : $e ? ie(Ba, "month") : ($(dn, Ba), $(Re, Ba));
      } else
        y.value = se, $(Je, L(g.value), L(y.value.index));
      d.value = !1;
    }, en = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, $(e.onPreview, L(g.value), L(y.value.index));
    }, on = (se, ye) => {
      var ce = ye === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (L(g.value) + ce);
      else {
        var Se = L(y.value.index) + ce;
        Se < 1 && (g.value = "" + (L(g.value) - 1), Se = 12), Se > 12 && (g.value = "" + (L(g.value) + 1), Se = 1), y.value = Vt.find(($e) => L($e.index) === Se);
      }
      $(e.onPreview, L(g.value), L(y.value.index));
    }, Le = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, un = (se) => Ce(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, cv = (se, ye) => {
      var ce = ye === "month" ? w : B, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = se.map((dn) => te(dn).format(Se)).slice(0, 2), Re = ce.value.some((dn) => un(dn));
      if (!Re) {
        ce.value = $e;
        var Je = te(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Je && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, mv = (se, ye) => {
      var ce = ye === "month" ? P : C, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = Array.from(new Set(se.map((Re) => te(Re).format(Se))));
      ce.value = $e.filter((Re) => Re !== "Invalid Date");
    }, pv = (se) => {
      var ye = te(se).format("YYYY-MM-D");
      if (!un(ye)) {
        var [ce, Se, $e] = ye.split("-"), Re = Vt.find((Je) => Je.index === Se);
        f.value = Re, m.value = ce, p.value = $e, y.value = Re, g.value = ce;
      }
    }, zi = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!Le() || un(se) || !se))
        if (e.range) {
          if (!Ce(se))
            return;
          v.value = se.length !== 1, cv(se, e.type);
        } else if (e.multiple) {
          if (!Ce(se))
            return;
          mv(se, e.type);
        } else
          pv(se);
    }, {
      immediate: !0
    }), le(j, zi), {
      n: Th,
      classes: Oh,
      monthPanelEl: S,
      dayPanelEl: D,
      reverse: V,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: p,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: b,
      getDateTitle: k,
      getPanelType: j,
      getChoose: z,
      getPreview: M,
      componentProps: O,
      slotProps: F,
      formatRange: E,
      clickEl: X,
      handleTouchstart: N,
      handleTouchmove: G,
      handleTouchend: J,
      getChooseDay: pe,
      getChooseMonth: Fe,
      getChooseYear: en,
      checkPreview: on
    };
  }
});
Yu.render = Ph;
const Rr = Yu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var $S = Rr;
function qo() {
  return qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, qo.apply(this, arguments);
}
function Vh(e) {
  return ["left", "center", "right"].includes(e);
}
var Eh = qo({
  show: {
    type: Boolean,
    default: !1
  },
  width: {
    type: [Number, String]
  },
  title: {
    type: String
  },
  message: {
    type: String
  },
  messageAlign: {
    type: String,
    default: "left",
    validator: Vh
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  confirmButtonColor: {
    type: String
  },
  cancelButtonColor: {
    type: String
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  },
  onBeforeClose: Y(),
  onConfirm: Y(),
  onCancel: Y(),
  "onUpdate:show": Y()
}, Xe(mt, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
function Ko() {
  return Ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ko.apply(this, arguments);
}
var {
  n: Mh,
  classes: Ih
} = ee("dialog");
function Bh(e, n) {
  var r = oe("var-button"), a = oe("var-popup");
  return h(), me(
    a,
    {
      class: c(e.n("popup")),
      "var-dialog-cover": "",
      show: e.popupShow,
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.popupCloseOnClickOverlay,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange,
      onClickOverlay: e.handleClickOverlay
    },
    {
      default: ve(() => [A(
        "div",
        Me({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Ko({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
          "div",
          {
            class: c(e.n("title"))
          },
          [W(e.$slots, "title", {}, () => [be(
            re(e.dt(e.title, e.pack.dialogTitle)),
            1
            /* TEXT */
          )])],
          2
          /* CLASS */
        ), A(
          "div",
          {
            class: c(e.n("message")),
            style: q({
              textAlign: e.messageAlign
            })
          },
          [W(e.$slots, "default", {}, () => [be(
            re(e.message),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: c(e.n("actions"))
          },
          [e.cancelButton ? (h(), me(
            r,
            {
              key: 0,
              class: c(e.classes(e.n("button"), e.n("cancel-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              color: e.cancelButtonColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [be(
                re(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0), e.confirmButton ? (h(), me(
            r,
            {
              key: 1,
              class: c(e.classes(e.n("button"), e.n("confirm-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.confirmButtonTextColor,
              color: e.confirmButtonColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [be(
                re(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0)],
          2
          /* CLASS */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]
  );
}
var Fu = _({
  name: "VarDialog",
  components: {
    VarPopup: fn,
    VarButton: Ge
  },
  inheritAttrs: !1,
  props: Eh,
  setup(e) {
    var n = I(!1), r = I(!1), a = () => $(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if ($(s), !!i) {
        if (u != null) {
          u("close", a);
          return;
        }
        $(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if ($(s), i != null) {
        i("confirm", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if ($(s), i != null) {
        i("cancel", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), le(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: Mh,
      classes: Ih,
      pack: He,
      dt: Gt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: he
    };
  }
});
Fu.render = Bh;
const ur = Fu;
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Yt.apply(this, arguments);
}
var xn, Ft = {};
function Nh(e) {
  return e === void 0 && (e = {}), qe(e) ? Yt({}, Ft, {
    message: e
  }) : Yt({}, Ft, e);
}
function ka(e) {
  return ct() ? new Promise((n) => {
    ka.close();
    var r = Nh(e), a = Ee(r);
    a.teleport = "body", xn = a;
    var {
      unmountInstance: t
    } = Qa(ur, a, {
      onConfirm: () => {
        $(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        $(a.onCancel), n("cancel");
      },
      onClose: () => {
        $(a.onClose), n("close");
      },
      onClosed: () => {
        $(a.onClosed), t(), xn === a && (xn = null);
      },
      onRouteChange: () => {
        t(), xn === a && (xn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
function Dh(e) {
  Ft = e;
}
function Ah() {
  Ft = {};
}
function zh() {
  if (xn != null) {
    var e = xn;
    xn = null, Ve().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(ka, {
  setDefaultOptions: Dh,
  resetDefaultOptions: Ah,
  close: zh
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
ka.install = function(e) {
  e.component(ur.name, ur);
};
ka.Component = ur;
var TS = ur, Lh = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  description: {
    type: String
  },
  margin: {
    type: String
  },
  dashed: {
    type: Boolean,
    default: !1
  },
  hairline: {
    type: Boolean,
    default: !1
  }
};
function Ua() {
  return Ua = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ua.apply(this, arguments);
}
var {
  n: Rh,
  classes: Uh
} = ee("divider");
function Yh(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [W(e.$slots, "default", {}, () => [e.description ? (h(), T(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var Hu = _({
  name: "VarDivider",
  props: Lh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ee({
      withText: !1
    }), t = R(() => ho(e.inset) ? e.inset : !0), o = R(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (ho(i) || i === 0)
        return Ua({}, d);
      var v = L(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Ua({}, d, {
        height: "calc(80% - " + he(f) + ")"
      }) : Ua({}, d, {
        width: "calc(100% - " + he(f) + ")",
        left: v > 0 ? he(f) : he(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return tn(() => {
      l();
    }), Wt(() => {
      l();
    }), Ua({
      n: Rh,
      classes: Uh
    }, Sv(a), {
      style: o,
      isInset: t
    });
  }
});
Hu.render = Yh;
const Ur = Hu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var OS = Ur, Fh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Et(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Fh[n];
  });
}
var An = "top", hr = "bottom", $a = "right", dr = "left", ro = "auto", ao = [An, hr, $a, dr], to = "start", lt = "end", Hh = "clippingParents", ju = "viewport", _a = "popper", jh = "reference", cl = /* @__PURE__ */ ao.reduce(function(e, n) {
  return e.concat([n + "-" + to, n + "-" + lt]);
}, []), Wu = /* @__PURE__ */ [].concat(ao, [ro]).reduce(function(e, n) {
  return e.concat([n, n + "-" + to, n + "-" + lt]);
}, []), Wh = "beforeRead", Gh = "read", qh = "afterRead", Kh = "beforeMain", Xh = "main", Zh = "afterMain", Jh = "beforeWrite", Qh = "write", _h = "afterWrite", Xo = [Wh, Gh, qh, Kh, Xh, Zh, Jh, Qh, _h];
function zn(e) {
  return e.split("-")[0];
}
var xh = {
  start: "end",
  end: "start"
};
function ml(e) {
  return e.replace(/start|end/g, function(n) {
    return xh[n];
  });
}
function gn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ta(e) {
  var n = gn(e).Element;
  return e instanceof n || e instanceof Element;
}
function cn(e) {
  var n = gn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Vi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = gn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function br(e) {
  return ((Ta(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var rt = Math.max, pl = Math.min, Wa = Math.round;
function Zo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Gu() {
  return !/^((?!chrome|android).)*safari/i.test(Zo());
}
function Ga(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && cn(e) && (t = e.offsetWidth > 0 && Wa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Wa(a.height) / e.offsetHeight || 1);
  var l = Ta(e) ? gn(e) : window, i = l.visualViewport, s = !Gu() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
  return {
    width: v,
    height: f,
    top: d,
    right: u + v,
    bottom: d + f,
    left: u,
    x: u,
    y: d
  };
}
function Ei(e) {
  var n = gn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Mi(e) {
  return Ga(br(e)).left + Ei(e).scrollLeft;
}
function eg(e, n) {
  var r = gn(e), a = br(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = Gu();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Mi(e),
    y: s
  };
}
function kn(e) {
  return gn(e).getComputedStyle(e);
}
function ng(e) {
  var n, r = br(e), a = Ei(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = rt(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = rt(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Mi(e), s = -a.scrollTop;
  return kn(t || r).direction === "rtl" && (i += rt(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function En(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function oo(e) {
  return En(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Vi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    br(e)
  );
}
function Ii(e) {
  var n = kn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function qu(e) {
  return ["html", "body", "#document"].indexOf(En(e)) >= 0 ? e.ownerDocument.body : cn(e) && Ii(e) ? e : qu(oo(e));
}
function at(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = qu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = gn(a), l = t ? [o].concat(o.visualViewport || [], Ii(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(at(oo(l)))
  );
}
function rg(e) {
  return ["table", "td", "th"].indexOf(En(e)) >= 0;
}
function hl(e) {
  return !cn(e) || // https://github.com/popperjs/popper-core/issues/837
  kn(e).position === "fixed" ? null : e.offsetParent;
}
function ag(e) {
  var n = /firefox/i.test(Zo()), r = /Trident/i.test(Zo());
  if (r && cn(e)) {
    var a = kn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = oo(e);
  for (Vi(t) && (t = t.host); cn(t) && ["html", "body"].indexOf(En(t)) < 0; ) {
    var o = kn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Bi(e) {
  for (var n = gn(e), r = hl(e); r && rg(r) && kn(r).position === "static"; )
    r = hl(r);
  return r && (En(r) === "html" || En(r) === "body" && kn(r).position === "static") ? n : r || ag(e) || n;
}
function tg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Vi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Jo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function og(e, n) {
  var r = Ga(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function gl(e, n, r) {
  return n === ju ? Jo(eg(e, r)) : Ta(n) ? og(n, r) : Jo(ng(br(e)));
}
function ig(e) {
  var n = at(oo(e)), r = ["absolute", "fixed"].indexOf(kn(e).position) >= 0, a = r && cn(e) ? Bi(e) : e;
  return Ta(a) ? n.filter(function(t) {
    return Ta(t) && tg(t, a) && En(t) !== "body";
  }) : [];
}
function lg(e, n, r, a) {
  var t = n === "clippingParents" ? ig(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = gl(e, u, a);
    return s.top = rt(d.top, s.top), s.right = pl(d.right, s.right), s.bottom = pl(d.bottom, s.bottom), s.left = rt(d.left, s.left), s;
  }, gl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function st(e) {
  return e.split("-")[1];
}
function sg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ku(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? zn(a) : null, o = a ? st(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case An:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case hr:
      s = {
        x: l,
        y: n.y + n.height
      };
      break;
    case $a:
      s = {
        x: n.x + n.width,
        y: i
      };
      break;
    case dr:
      s = {
        x: n.x - r.width,
        y: i
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? sg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case to:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case lt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function ug() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function dg(e) {
  return Object.assign({}, ug(), e);
}
function vg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Xu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Hh : i, u = r.rootBoundary, d = u === void 0 ? ju : u, v = r.elementContext, f = v === void 0 ? _a : v, m = r.altBoundary, p = m === void 0 ? !1 : m, y = r.padding, g = y === void 0 ? 0 : y, V = dg(typeof g != "number" ? g : vg(g, ao)), P = f === _a ? jh : _a, C = e.rects.popper, w = e.elements[p ? P : f], B = lg(Ta(w) ? w : w.contextElement || br(e.elements.popper), s, d, l), S = Ga(e.elements.reference), D = Ku({
    reference: S,
    element: C,
    strategy: "absolute",
    placement: t
  }), O = Jo(Object.assign({}, C, D)), z = f === _a ? O : S, M = {
    top: B.top - z.top + V.top,
    bottom: z.bottom - B.bottom + V.bottom,
    left: B.left - z.left + V.left,
    right: z.right - B.right + V.right
  }, b = e.modifiersData.offset;
  if (f === _a && b) {
    var k = b[t];
    Object.keys(M).forEach(function(j) {
      var Q = [$a, hr].indexOf(j) >= 0 ? 1 : -1, F = [An, hr].indexOf(j) >= 0 ? "y" : "x";
      M[j] += k[F] * Q;
    });
  }
  return M;
}
function fg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Wu : s, d = st(a), v = d ? i ? cl : cl.filter(function(p) {
    return st(p) === d;
  }) : ao, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(p, y) {
    return p[y] = Xu(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[zn(y)], p;
  }, {});
  return Object.keys(m).sort(function(p, y) {
    return m[p] - m[y];
  });
}
function cg(e) {
  if (zn(e) === ro)
    return [];
  var n = Et(e);
  return [ml(e), n, ml(n)];
}
function mg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, y = r.allowedAutoPlacements, g = n.options.placement, V = zn(g), P = V === g, C = s || (P || !p ? [Et(g)] : cg(g)), w = [g].concat(C).reduce(function(ae, ie) {
      return ae.concat(zn(ie) === ro ? fg(n, {
        placement: ie,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: y
      }) : ie);
    }, []), B = n.rects.reference, S = n.rects.popper, D = /* @__PURE__ */ new Map(), O = !0, z = w[0], M = 0; M < w.length; M++) {
      var b = w[M], k = zn(b), j = st(b) === to, Q = [An, hr].indexOf(k) >= 0, F = Q ? "width" : "height", E = Xu(n, {
        placement: b,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), H = Q ? j ? $a : dr : j ? hr : An;
      B[F] > S[F] && (H = Et(H));
      var U = Et(H), X = [];
      if (o && X.push(E[k] <= 0), i && X.push(E[H] <= 0, E[U] <= 0), X.every(function(ae) {
        return ae;
      })) {
        z = b, O = !1;
        break;
      }
      D.set(b, X);
    }
    if (O)
      for (var N = p ? 3 : 1, Z = function(ie) {
        var ge = w.find(function(pe) {
          var Fe = D.get(pe);
          if (Fe)
            return Fe.slice(0, ie).every(function(en) {
              return en;
            });
        });
        if (ge)
          return z = ge, "break";
      }, G = N; G > 0; G--) {
        var J = Z(G);
        if (J === "break")
          break;
      }
    n.placement !== z && (n.modifiersData[a]._skip = !0, n.placement = z, n.reset = !0);
  }
}
const pg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: mg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function hg(e, n, r) {
  var a = zn(e), t = [dr, An].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [dr, $a].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function gg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = Wu.reduce(function(d, v) {
    return d[v] = hg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const yg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: gg
};
function bg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Cg(e) {
  return e === gn(e) || !cn(e) ? Ei(e) : bg(e);
}
function wg(e) {
  var n = e.getBoundingClientRect(), r = Wa(n.width) / e.offsetWidth || 1, a = Wa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Sg(e, n, r) {
  r === void 0 && (r = !1);
  var a = cn(n), t = cn(n) && wg(n), o = br(n), l = Ga(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((En(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ii(o)) && (i = Cg(n)), cn(n) ? (s = Ga(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Mi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function kg(e) {
  var n = Ga(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function $g(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(o) {
    n.set(o.name, o);
  });
  function t(o) {
    r.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function(i) {
      if (!r.has(i)) {
        var s = n.get(i);
        s && t(s);
      }
    }), a.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || t(o);
  }), a;
}
function Tg(e) {
  var n = $g(e);
  return Xo.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Og(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Kn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Cr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Pg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', yl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Vg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), yl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Kn(Cr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Kn(Cr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Xo.indexOf(n.phase) < 0 && console.error(Kn(Cr, n.name, '"phase"', "either " + Xo.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Kn(Cr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Kn(Cr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Kn(Cr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Kn(Cr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + yl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Kn(Pg, String(n.name), a, a));
      });
    });
  });
}
function Eg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Mg(e) {
  var n = e.reduce(function(r, a) {
    var t = r[a.name];
    return r[a.name] = t ? Object.assign({}, t, a, {
      options: Object.assign({}, t.options, a.options),
      data: Object.assign({}, t.data, a.data)
    }) : a, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var bl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Ig = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Cl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function wl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Bg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Cl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Cl, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(V) {
        var P = typeof V == "function" ? V(d.options) : V;
        y(), d.options = Object.assign({}, o, d.options, P), d.scrollParents = {
          reference: Ta(i) ? at(i) : i.contextElement ? at(i.contextElement) : [],
          popper: at(s)
        };
        var C = Tg(Mg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = C.filter(function(b) {
          return b.enabled;
        }), process.env.NODE_ENV !== "production") {
          var w = Eg([].concat(C, d.options.modifiers), function(b) {
            var k = b.name;
            return k;
          });
          if (Vg(w), zn(d.options.placement) === ro) {
            var B = d.orderedModifiers.find(function(b) {
              var k = b.name;
              return k === "flip";
            });
            B || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = kn(s), D = S.marginTop, O = S.marginRight, z = S.marginBottom, M = S.marginLeft;
          [D, O, z, M].some(function(b) {
            return parseFloat(b);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var V = d.elements, P = V.reference, C = V.popper;
          if (!wl(P, C)) {
            process.env.NODE_ENV !== "production" && console.error(bl);
            return;
          }
          d.rects = {
            reference: Sg(P, Bi(C), d.options.strategy === "fixed"),
            popper: kg(C)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(b) {
            return d.modifiersData[b.name] = Object.assign({}, b.data);
          });
          for (var w = 0, B = 0; B < d.orderedModifiers.length; B++) {
            if (process.env.NODE_ENV !== "production" && (w += 1, w > 100)) {
              console.error(Ig);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, B = -1;
              continue;
            }
            var S = d.orderedModifiers[B], D = S.fn, O = S.options, z = O === void 0 ? {} : O, M = S.name;
            typeof D == "function" && (d = D({
              state: d,
              options: z,
              name: M,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Og(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!wl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(bl), m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var V = g.name, P = g.options, C = P === void 0 ? {} : P, w = g.effect;
        if (typeof w == "function") {
          var B = w({
            state: d,
            name: V,
            instance: m,
            options: C
          }), S = function() {
          };
          v.push(B || S);
        }
      });
    }
    function y() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return m;
  };
}
var kt = {
  passive: !0
};
function Ng(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = gn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, kt);
  }), i && s.addEventListener("resize", r.update, kt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, kt);
    }), i && s.removeEventListener("resize", r.update, kt);
  };
}
const Dg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ng,
  data: {}
};
function Ag(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Ku({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const zg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ag,
  data: {}
};
var Lg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Rg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Wa(n * t) / t || 0,
    y: Wa(r * t) / t || 0
  };
}
function Sl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, p = l.y, y = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = g.x, y = g.y;
  var V = l.hasOwnProperty("x"), P = l.hasOwnProperty("y"), C = dr, w = An, B = window;
  if (u) {
    var S = Bi(r), D = "clientHeight", O = "clientWidth";
    if (S === gn(r) && (S = br(r), kn(S).position !== "static" && i === "absolute" && (D = "scrollHeight", O = "scrollWidth")), S = S, t === An || (t === dr || t === $a) && o === lt) {
      w = hr;
      var z = v && S === B && B.visualViewport ? B.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[D]
      );
      y -= z - a.height, y *= s ? 1 : -1;
    }
    if (t === dr || (t === An || t === hr) && o === lt) {
      C = $a;
      var M = v && S === B && B.visualViewport ? B.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[O]
      );
      m -= M - a.width, m *= s ? 1 : -1;
    }
  }
  var b = Object.assign({
    position: i
  }, u && Lg), k = d === !0 ? Rg({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  if (m = k.x, y = k.y, s) {
    var j;
    return Object.assign({}, b, (j = {}, j[w] = P ? "0" : "", j[C] = V ? "0" : "", j.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, b, (n = {}, n[w] = P ? y + "px" : "", n[C] = V ? m + "px" : "", n.transform = "", n));
}
function Ug(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = kn(n.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: zn(n.placement),
    variation: st(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Sl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Sl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Yg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ug,
  data: {}
};
function Fg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !cn(o) || !En(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Hg(e) {
  var n = e.state, r = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow), function() {
    Object.keys(n.elements).forEach(function(a) {
      var t = n.elements[a], o = n.attributes[a] || {}, l = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), i = l.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !cn(t) || !En(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const jg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Fg,
  effect: Hg,
  requires: ["computeStyles"]
};
var Wg = [Dg, zg, Yg, jg], Gg = /* @__PURE__ */ Bg({
  defaultModifiers: Wg
});
function Ht() {
  return Ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ht.apply(this, arguments);
}
function kl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function $l(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        kl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        kl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Zu(e) {
  var n = I(null), r = I(null), a = I(!1), t = I({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = pt(() => a.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: S,
      height: D
    } = window.getComputedStyle(n.value);
    t.value = {
      width: De(S),
      height: De(D)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, w());
  }, v = /* @__PURE__ */ function() {
    var S = $l(function* () {
      e.trigger === "hover" && (s = !1, yield Pn(), !i && B());
    });
    return function() {
      return S.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var S = $l(function* () {
      e.trigger === "hover" && (i = !1, yield Pn(), !s && B());
    });
    return function() {
      return S.apply(this, arguments);
    };
  }(), p = () => {
    w();
  }, y = () => {
    a.value = !1, $(e["onUpdate:show"], !1);
  }, g = () => {
    e.trigger === "click" && y();
  }, V = () => {
    u();
    var S = {
      x: De(e.offsetX),
      y: De(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: S.x,
          distance: S.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: S.x,
          distance: S.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: S.x,
          distance: S.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: S.x,
          distance: -S.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: S.x,
          distance: -S.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: S.x,
          distance: -S.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: S.y,
          distance: S.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: S.y,
          distance: -S.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: S.y,
          distance: -S.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: S.x,
          distance: -S.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: S.x,
          distance: S.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: S.y,
          distance: S.x
        };
    }
  }, P = () => {
    var {
      placement: S,
      skidding: D,
      distance: O
    } = V(), z = [Ht({}, pg, {
      enabled: a.value
    }), Ht({}, yg, {
      options: {
        offset: [D, O]
      }
    })];
    return {
      placement: S,
      modifiers: z
    };
  }, C = () => {
    l.setOptions(P());
  }, w = () => {
    var {
      disabled: S
    } = e;
    S || (a.value = !0, $(e["onUpdate:show"], !0));
  }, B = () => {
    a.value = !1, $(e["onUpdate:show"], !1);
  };
  return us(n, "click", g), le(() => e.show, (S) => {
    a.value = S ?? !1;
  }, {
    immediate: !0
  }), le(() => e.offsetX, C), le(() => e.offsetY, C), le(() => e.placement, C), le(() => a.value, (S) => {
    S ? (C(), $(e.onOpen)) : $(e.onClose);
  }), le(() => e.disabled, B), Ka(() => {
    l = Gg(n.value, r.value, P());
  }), Pa(() => {
    l.destroy();
  }), {
    show: a,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: t,
    handleHostClick: p,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: y,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: C,
    open: w,
    close: B
  };
}
function qg(e) {
  return ["click", "hover"].includes(e);
}
function Kg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Xg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Zg = {
  type: {
    type: String,
    default: "default",
    validator: Xg
  },
  color: {
    type: String
  },
  content: {
    type: String
  },
  show: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "hover",
    validator: qg
  },
  placement: {
    type: String,
    default: "bottom",
    validator: Kg
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object],
    default: "body"
  },
  sameWidth: {
    type: Boolean,
    default: !1
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y()
}, {
  n: Jg,
  classes: Qg
} = ee("tooltip");
function _g(e, n) {
  return h(), T(
    "div",
    {
      ref: "host",
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleHostClick && e.handleHostClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleHostMouseenter && e.handleHostMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleHostMouseleave && e.handleHostMouseleave(...arguments);
      })
    },
    [W(e.$slots, "default"), (h(), me(
      Za,
      {
        to: e.teleport
      },
      [ne(
        Be,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [we(A(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: q({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = On(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [A(
              "div",
              {
                style: q({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [W(e.$slots, "content", {}, () => [be(
                re(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Va, e.show]])]),
          _: 3
          /* FORWARDED */
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Ju = _({
  name: "VarTooltip",
  props: Zg,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: m,
      // expose
      resize: p
    } = Zu(e);
    return {
      toSizeUnit: he,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Jg,
      classes: Qg,
      handleHostClick: l,
      handlePopoverClose: v,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: p,
      open: f,
      close: m
    };
  }
});
Ju.render = _g;
const vr = Ju;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var PS = vr;
function xg(e) {
  return ["click"].includes(e);
}
var ey = {
  expandTrigger: {
    type: String,
    validator: xg
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
function Qo() {
  return Qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Qo.apply(this, arguments);
}
var {
  n: ny,
  classes: ry
} = ee("ellipsis"), ay = {
  key: 0
};
function ty(e, n) {
  var r = oe("var-tooltip");
  return h(), me(
    r,
    si(xl(e.tooltip)),
    {
      content: ve(() => [W(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), T(
          "span",
          ay,
          re(e.tooltip.content),
          1
          /* TEXT */
        )) : W(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [A(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: q(e.rootStyles),
          onClick: n[0] || (n[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [W(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
var Qu = _({
  name: "VarEllipsis",
  components: {
    VarTooltip: vr
  },
  props: ey,
  setup(e) {
    var n = I(!1), r = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Qo({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: ny,
      classes: ry,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
Qu.render = ty;
const Yr = Qu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var VS = Yr, oy = {
  active: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  icon: {
    type: String,
    default: "plus"
  },
  iconSize: {
    type: [Number, String],
    default: "24px"
  },
  type: {
    type: String,
    default: "primary",
    validator: (e) => ["default", "primary", "info", "success", "warning", "danger"].includes(e)
  },
  direction: {
    type: String,
    default: "top",
    validator: (e) => ["top", "right", "bottom", "left"].includes(e)
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: (e) => ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e)
  },
  trigger: {
    type: String,
    default: "click",
    validator: (e) => ["click", "hover"].includes(e)
  },
  "onUpdate:modelValue": Y()
}, {
  classes: iy,
  n: Xn
} = ee("fab");
const Fr = _({
  name: "VarFab",
  components: {
    [Ge.name]: Ge,
    [ke.name]: ke
  },
  props: oy,
  setup(e, n) {
    var {
      slots: r
    } = n, a = I(e.active), t = I(null);
    le(() => e.active, (v) => {
      a.value = v;
    });
    var o = R({
      get() {
        return a.value;
      },
      set(v) {
        a.value = v, $(e["onUpdate:active"], v);
      }
    }), l = R(() => iy(Xn(), Xn("--fixed"), Xn("--" + e.position), Xn("--direction-" + e.direction), [o.value, Xn("--is-active")])), i = (v) => {
      o.value = v;
    }, s = (v, f) => {
      v.stopPropagation(), e.trigger === "click" && i(f);
    }, u = (v) => {
      e.trigger === "hover" && i(v);
    }, d = () => {
      e.trigger === "click" && i(!1);
    };
    return us(t, "click", d), () => {
      var v = bo(r.default == null ? void 0 : r.default());
      return ne("div", {
        ref: t,
        class: l.value,
        onClick: (f) => s(f, !o.value),
        onMouseleave: () => u(!1),
        onMouseenter: () => u(!0)
      }, [ne(Be, {
        name: Xn("--active-transition")
      }, {
        default: () => [r.activator ? r.activator == null ? void 0 : r.activator() : ne(oe("var-button"), {
          type: e.type,
          color: e.color,
          textColor: e.textColor,
          round: !0
        }, {
          default: () => [ne(oe("var-icon"), {
            name: e.icon,
            size: e.iconSize
          }, null)]
        })]
      }), ne(Be, {
        name: Xn("--actions-transition"),
        appear: !0
      }, {
        default: () => [we(ne("div", {
          class: Xn("list")
        }, [v.map((f, m) => ne("div", {
          style: {
            transitionDelay: m * 0.05 + "s"
          }
        }, [f]))]), [[Va, o.value && v.length]])]
      })]);
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var ES = Fr;
function ly(e) {
  return ["start", "end"].includes(e);
}
var sy = {
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  scrollToError: {
    type: String,
    validator: ly
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Tl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function uy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Tl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Tl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: dy
} = ee("form");
function vy(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var _u = _({
  name: "VarForm",
  props: sy,
  setup(e) {
    var n = R(() => e.disabled), r = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = ym(), o = (d, v) => {
      setTimeout(() => {
        var f = Ia(v), m = f === window ? 0 : Gi(f), p = Gi(v) - m - De(e.scrollToErrorOffsetY);
        tt(f, {
          top: p,
          animation: go
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = uy(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: V
          } = g;
          return V();
        }));
        if (e.scrollToError) {
          var [, f] = Vv(v, (g) => g === !1, e.scrollToError), m = f > -1;
          if (m) {
            var p, y = (p = a[f].instance.proxy) == null ? void 0 : p.$el;
            o(f, y);
          }
          return !m;
        }
        return v.every((g) => g === !0);
      });
      return function() {
        return d.apply(this, arguments);
      };
    }(), i = () => a.forEach((d) => {
      var {
        reset: v
      } = d;
      return v();
    }), s = () => a.forEach((d) => {
      var {
        resetValidation: v
      } = d;
      return v();
    }), u = {
      disabled: n,
      readonly: r
    };
    return t(u), {
      n: dy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
_u.render = vy;
const Ln = _u;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
Ln.useValidation = pn;
Ln.useForm = hn;
var MS = Ln;
function fy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var cy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: fy,
    default: "fill"
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  },
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !0
  },
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: my,
  classes: py
} = ee("image"), hy = ["alt", "title", "lazy-error", "lazy-loading"], gy = ["alt", "title", "src"];
function yy(e, n) {
  var r = Ae("lazy"), a = Ae("ripple");
  return we((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? we((h(), T(
      "img",
      {
        key: 0,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: q({
          objectFit: e.fit
        }),
        onLoad: n[0] || (n[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[1] || (n[1] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[2] || (n[2] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      hy
    )), [[r, e.src]]) : (h(), T(
      "img",
      {
        key: 1,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: q({
          objectFit: e.fit
        }),
        src: e.src,
        onLoad: n[3] || (n[3] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[4] || (n[4] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[5] || (n[5] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      gy
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var xu = _({
  name: "VarImage",
  directives: {
    Lazy: ot,
    Ripple: ze
  },
  props: cy,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && $(i, t), o._lazy.state === "error" && $(s, t)) : $(i, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && $(l, t);
    }, a = (t) => {
      $(e.onClick, t);
    };
    return {
      n: my,
      classes: py,
      toSizeUnit: he,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
xu.render = yy;
const Hr = xu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var IS = Hr, ed = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), nd = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function by() {
  var {
    childProviders: e,
    bindChildren: n
  } = $n(ed), {
    length: r
  } = Mn(nd);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var rd = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: {
    type: [String, Number]
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: {
    type: String
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: Y()
};
function Ol(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Cy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ol(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ol(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var wy = 250, Sy = 20, {
  n: ky,
  classes: $y
} = ee("swipe"), Ty = ["onClick"];
function Oy(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: q({
          width: e.vertical ? void 0 : e.trackSize + "px",
          height: e.vertical ? e.trackSize + "px" : void 0,
          transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)",
          transitionDuration: e.lockDuration ? "0ms" : e.toNumber(e.duration) + "ms"
        }),
        onTouchstart: n[0] || (n[0] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[1] || (n[1] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[2] || (n[2] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [W(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), W(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), T(
        Te,
        null,
        Ne(e.length, (r, a) => (h(), T(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: q({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Ty
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : x("v-if", !0)])],
    2
    /* CLASS */
  );
}
var ad = _({
  name: "VarSwipe",
  props: rd,
  setup(e) {
    var n = I(null), r = I(0), a = R(() => e.vertical), t = I(0), o = I(0), l = I(!1), i = I(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = by(), v = !1, f = -1, m, p, y, g, V, P = (N) => s.find((Z) => {
      var {
        index: G
      } = Z;
      return G.value === N;
    }), C = () => {
      e.loop && (o.value >= 0 && P(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && P(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (P(d.value - 1).setTranslate(0), P(0).setTranslate(0)));
    }, w = (N) => {
      var Z = xe(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: G
      } = e;
      return Z <= -1 ? G ? -1 : 0 : Z >= d.value ? G ? d.value : d.value - 1 : Z;
    }, B = (N) => {
      var {
        loop: Z
      } = e;
      return N === -1 ? Z ? d.value - 1 : 0 : N === d.value ? Z ? 0 : d.value - 1 : N;
    }, S = (N) => {
      var {
        loop: Z
      } = e;
      return N < 0 ? Z ? d.value - 1 : 0 : N > d.value - 1 ? Z ? 0 : d.value - 1 : N;
    }, D = (N) => {
      var Z = o.value >= r.value, G = o.value <= -t.value, J = 0, ae = -(t.value - r.value);
      l.value = !0, (Z || G) && (l.value = !0, o.value = G ? J : ae, P(0).setTranslate(0), P(d.value - 1).setTranslate(0)), Kt(() => {
        l.value = !1, $(N);
      });
    }, O = () => {
      i.value = S(L(e.initialIndex));
    }, z = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (M(), f = window.setTimeout(() => {
        E(), z();
      }, L(N)));
    }, M = () => {
      f && clearTimeout(f);
    }, b = (N, Z) => {
      if (N > Z && N > 10)
        return "horizontal";
      if (Z > N && Z > 10)
        return "vertical";
    }, k = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: G
        } = N.touches[0];
        m = Z, p = G, y = performance.now(), v = !0, M(), D(() => {
          l.value = !0;
        });
      }
    }, j = (N) => {
      var {
        touchable: Z,
        vertical: G
      } = e;
      if (!(!v || !Z)) {
        var {
          clientX: J,
          clientY: ae
        } = N.touches[0], ie = Math.abs(J - m), ge = Math.abs(ae - p), pe = b(ie, ge), Fe = G ? "vertical" : "horizontal";
        if (pe === Fe) {
          N.preventDefault();
          var en = g !== void 0 ? J - g : 0, on = V !== void 0 ? ae - V : 0;
          g = J, V = ae, o.value += G ? on : en, C();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: N,
          onChange: Z
        } = e, G = N ? V < p : g < m, J = Math.abs(N ? p - V : m - g), ae = performance.now() - y <= wy && J >= Sy, ie = ae ? w(G ? i.value + 1 : i.value - 1) : w();
        v = !1, l.value = !1, g = void 0, V = void 0, o.value = ie * -r.value;
        var ge = i.value;
        i.value = B(ie), z(), ge !== i.value && $(Z, i.value);
      }
    }, F = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), z(), setTimeout(() => {
        l.value = !1;
      }));
    }, E = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = i.value;
        i.value = S(J + 1), (N == null ? void 0 : N.event) !== !1 && $(G, i.value), D(() => {
          if (J === d.value - 1 && Z) {
            P(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          J !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, H = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = i.value;
        i.value = S(J - 1), (N == null ? void 0 : N.event) !== !1 && $(G, i.value), D(() => {
          if (J === 0 && Z) {
            P(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          J !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, U = (N, Z) => {
      if (!(d.value <= 1 || N === i.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var G = N > i.value ? E : H, J = Math.abs(N - i.value);
        Array.from({
          length: J
        }).forEach((ae, ie) => {
          G({
            event: ie === J - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, X = {
      size: r,
      vertical: a
    };
    return u(X), le(() => d.value, /* @__PURE__ */ Cy(function* () {
      yield Pn(), O(), F();
    })), Xa(F), gr(M), Pa(M), wa(window, "resize", F), {
      n: ky,
      classes: $y,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: k,
      handleTouchmove: j,
      handleTouchend: Q,
      next: E,
      prev: H,
      to: U,
      resize: F,
      toNumber: L
    };
  }
});
ad.render = Oy;
const Rn = ad;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var BS = Rn;
function Py() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(ed), {
    index: r
  } = In(nd);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Vy
} = ee("swipe-item");
function Ey(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n()),
      style: q({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var td = _({
  name: "VarSwipeItem",
  setup() {
    var e = I(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Py(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Vy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
td.render = Ey;
const Un = td;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var NS = Un;
function _o() {
  return _o = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _o.apply(this, arguments);
}
var My = _o({
  show: {
    type: Boolean,
    default: !1
  },
  images: {
    type: Array,
    default: () => []
  },
  current: {
    type: String
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  "onUpdate:show": Y()
}, Xe(rd, ["loop", "indicator", "onChange"]), Xe(mt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Pl,
  classes: Iy
} = ee("image-preview"), Vl = 12, El = 200, By = 350, Ml = 200, Ny = ["src", "alt"];
function Dy(e, n) {
  var r = oe("var-swipe-item"), a = oe("var-swipe"), t = oe("var-icon"), o = oe("var-popup");
  return h(), me(
    o,
    {
      class: c(e.n("popup")),
      "var-image-preview-cover": "",
      transition: e.n("$-fade"),
      show: e.popupShow,
      overlay: !1,
      "close-on-click-overlay": !1,
      "lock-scroll": e.lockScroll,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    },
    {
      default: ve(() => [ne(
        a,
        Me({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ve(() => [(h(!0), T(
            Te,
            null,
            Ne(e.images, (l) => (h(), me(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ve(() => [A(
                  "div",
                  {
                    class: c(e.n("zoom-container")),
                    style: q({
                      transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
                      transitionTimingFunction: e.transitionTimingFunction,
                      transitionDuration: e.transitionDuration
                    }),
                    onTouchstart: n[0] || (n[0] = function() {
                      return e.handleTouchstart && e.handleTouchstart(...arguments);
                    }),
                    onTouchmove: n[1] || (n[1] = function() {
                      return e.handleTouchmove && e.handleTouchmove(...arguments);
                    }),
                    onTouchend: n[2] || (n[2] = function() {
                      return e.handleTouchend && e.handleTouchend(...arguments);
                    })
                  },
                  [A(
                    "img",
                    {
                      class: c(e.n("image")),
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    Ny
                  )],
                  38
                  /* CLASS, STYLE, HYDRATE_EVENTS */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class"]
            ))),
            128
            /* KEYED_FRAGMENT */
          ))]),
          indicator: ve((l) => {
            var {
              index: i,
              length: s
            } = l;
            return [W(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (h(), T(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              re(i + 1) + " / " + re(s),
              3
              /* TEXT, CLASS */
            )) : x("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), W(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), me(
        t,
        {
          key: 0,
          class: c(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        },
        null,
        8,
        ["class", "onClick"]
      )) : x("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("extra"))
        },
        [W(e.$slots, "extra")],
        2
        /* CLASS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var od = _({
  name: "VarImagePreview",
  components: {
    VarSwipe: Rn,
    VarSwipeItem: Un,
    VarPopup: fn,
    VarIcon: ke
  },
  inheritAttrs: !1,
  props: My,
  setup(e) {
    var n = I(!1), r = R(() => {
      var {
        images: M,
        current: b
      } = e, k = M.findIndex((j) => j === b);
      return k >= 0 ? k : 0;
    }), a = I(1), t = I(0), o = I(0), l = I(void 0), i = I(void 0), s = I(!0), u = null, d = null, v = null, f = (M, b) => {
      var {
        clientX: k,
        clientY: j
      } = M, {
        clientX: Q,
        clientY: F
      } = b;
      return Math.abs(Math.sqrt(Math.pow(Q - k, 2) + Math.pow(F - j, 2)));
    }, m = (M, b) => ({
      clientX: M.clientX,
      clientY: M.clientY,
      timestamp: Date.now(),
      target: b
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Ml);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, g = (M) => d ? f(d, M) <= Vl && M.timestamp - d.timestamp <= El && d.target === M.target : !1, V = (M) => !M || !u || !d ? !1 : f(u, d) <= Vl && Date.now() - d.timestamp < By && (M === u.target || M.parentNode === u.target), P = (M) => {
      v = window.setTimeout(() => {
        V(M.target) && z(), u = null;
      }, El);
    }, C = (M) => {
      v && window.clearTimeout(v);
      var {
        touches: b
      } = M, k = m(b[0], M.currentTarget);
      if (u = k, g(k)) {
        a.value > 1 ? y() : p();
        return;
      }
      d = k;
    }, w = (M) => {
      var {
        offsetWidth: b,
        offsetHeight: k
      } = M, {
        naturalWidth: j,
        naturalHeight: Q
      } = M.querySelector("." + Pl("image"));
      return {
        width: b,
        height: k,
        imageRadio: Q / j,
        rootRadio: k / b,
        zoom: L(e.zoom)
      };
    }, B = (M) => {
      var {
        zoom: b,
        imageRadio: k,
        rootRadio: j,
        width: Q,
        height: F
      } = w(M);
      if (!k)
        return 0;
      var E = k > j ? F / k : Q;
      return Math.max(0, (b * E - Q) / 2) / b;
    }, S = (M) => {
      var {
        zoom: b,
        imageRadio: k,
        rootRadio: j,
        width: Q,
        height: F
      } = w(M);
      if (!k)
        return 0;
      var E = k > j ? F : Q * k;
      return Math.max(0, (b * E - F) / 2) / b;
    }, D = (M, b, k) => M + b >= k ? k : M + b <= -k ? -k : M + b, O = (M) => {
      if (d) {
        var b = M.currentTarget, {
          touches: k
        } = M, j = m(k[0], b);
        if (a.value > 1) {
          var Q = j.clientX - d.clientX, F = j.clientY - d.clientY, E = B(b), H = S(b);
          t.value = D(t.value, Q, E), o.value = D(o.value, F, H);
        }
        d = j;
      }
    }, z = () => {
      if (a.value > 1) {
        y(), setTimeout(() => $(e["onUpdate:show"], !1), Ml);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (M) => {
      n.value = M;
    }, {
      immediate: !0
    }), {
      n: Pl,
      classes: Iy,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: C,
      handleTouchmove: O,
      handleTouchend: P,
      close: z
    };
  }
});
od.render = Dy;
const fr = od;
var er;
function Hn(e) {
  if (ct()) {
    Hn.close();
    var n = qe(e) ? {
      images: [e]
    } : Ce(e) ? {
      images: e
    } : e, r = Ee(n);
    r.teleport = "body", er = r;
    var {
      unmountInstance: a
    } = Qa(fr, r, {
      onClose: () => $(r.onClose),
      onClosed: () => {
        $(r.onClosed), a(), er === r && (er = null);
      },
      onRouteChange: () => {
        a(), er === r && (er = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Hn.close = () => {
  if (er != null) {
    var e = er;
    er = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
fr.install = function(e) {
  e.component(fr.name, fr);
};
Hn.install = function(e) {
  e.component(fr.name, fr);
};
Hn.Component = fr;
var DS = fr, Mt = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onScroll: Y()
};
function Il(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Bl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Il(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Il(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Ay,
  classes: zy
} = ee("sticky");
function Ly(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: q({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [A(
      "div",
      {
        class: c(e.n("wrapper")),
        ref: "wrapperEl",
        style: q({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [W(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var id = _({
  name: "VarSticky",
  props: Mt,
  setup(e) {
    var n = I(null), r = I(null), a = I(!1), t = I("0px"), o = I("0px"), l = I("auto"), i = I("auto"), s = I("auto"), u = I("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => De(e.offsetTop)), m, p = () => {
      var {
        cssMode: C,
        disabled: w
      } = e;
      if (!w) {
        var B = 0;
        if (m !== window) {
          var {
            top: S
          } = m.getBoundingClientRect();
          B = S;
        }
        var D = r.value, O = n.value, {
          top: z,
          left: M
        } = O.getBoundingClientRect(), b = z - B;
        return b <= f.value ? (C || (l.value = O.offsetWidth + "px", i.value = O.offsetHeight + "px", t.value = B + f.value + "px", o.value = M + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: b,
          isFixed: !1
        });
      }
    }, y = () => {
      if (m) {
        var C = p();
        C && $(e.onScroll, C.offsetTop, C.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var C = Bl(function* () {
        a.value = !1, yield Rv(), p();
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), V = /* @__PURE__ */ function() {
      var C = Bl(function* () {
        yield Pn(), m = Ia(n.value), m !== window && m.addEventListener("scroll", y), y();
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), P = () => {
      m !== window && m.removeEventListener("scroll", y);
    };
    return le(() => e.disabled, g), tn(V), Pa(P), gr(P), wa(window, "scroll", y), {
      n: Ay,
      classes: zy,
      resize: g,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: o,
      fixedWidth: l,
      fixedHeight: i,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: L
    };
  }
});
id.render = Ly;
const Yn = id;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var AS = Yn, ld = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), sd = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function Ry() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(ld), {
    length: r
  } = Mn(sd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Uy() {
  var {
    parentProvider: e,
    bindParent: n
  } = Tn(ld), {
    index: r
  } = In(sd);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Yy = {
  index: {
    type: [Number, String]
  }
}, {
  n: Fy,
  classes: Hy
} = ee("index-anchor");
function jy(e, n) {
  return h(), me(
    Ja(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [A(
        "div",
        Me({
          class: e.n()
        }, e.$attrs),
        [W(e.$slots, "default", {}, () => [be(
          re(e.name),
          1
          /* TEXT */
        )])],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["offset-top", "z-index", "disabled", "css-mode"]
  );
}
var ud = _({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: Yy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Uy(), t = I(0), o = I(!1), l = R(() => e.index), i = I(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, p = (g) => {
      o.value = g;
    }, y = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: p
    };
    return a(y), {
      n: Fy,
      classes: Hy,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Be
    };
  }
});
ud.render = jy;
const jr = ud;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var zS = jr, Wy = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: {
    type: String
  },
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: Y(),
  onChange: Y()
};
function Nl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function $t(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Nl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Nl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Gy,
  classes: qy
} = ee("index-bar"), Ky = ["onClick"];
function Xy(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [W(e.$slots, "default"), A(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: q({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), T(
        Te,
        null,
        Ne(e.anchorNameList, (r) => (h(), T(
          "li",
          {
            key: r,
            class: c(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: q({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: r,
              manualCall: !0
            })
          },
          re(r),
          15,
          Ky
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      6
      /* CLASS, STYLE */
    )],
    2
    /* CLASS */
  );
}
var dd = _({
  name: "VarIndexBar",
  props: Wy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Ry(), t = I(""), o = I(null), l = I([]), i = I(), s = R(() => e.sticky), u = R(() => e.cssMode), d = R(() => De(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, m = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(m);
    var p = (S, D) => {
      var O = ui(S) ? S.name.value : S;
      O === i.value || O === void 0 || (i.value = O, (D == null ? void 0 : D.event) !== !1 && $(e.onChange, O));
    }, y = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: S
      } = f.getBoundingClientRect(), {
        scrollTop: D
      } = f, {
        top: O
      } = o.value.getBoundingClientRect();
      return D - S + O;
    }, g = () => {
      var S = qt(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, O = y();
      r.forEach((z, M) => {
        var b = z.ownTop.value, k = S - b + d.value - O, j = M === r.length - 1 ? D : r[M + 1].ownTop.value - z.ownTop.value;
        k >= 0 && k < j && t.value === "" && (M && !e.cssMode && r[M - 1].setDisabled(!0), z.setDisabled(!1), p(z));
      });
    }, V = /* @__PURE__ */ function() {
      var S = $t(function* (D) {
        var {
          anchorName: O,
          manualCall: z = !1,
          options: M
        } = D;
        if (z && $(e.onClick, O), O !== i.value) {
          var b = r.find((F) => {
            var {
              name: E
            } = F;
            return O === E.value;
          });
          if (b) {
            var k = y(), j = b.ownTop.value - d.value + k, Q = fi(f);
            t.value = O, p(O, M), yield tt(f, {
              left: Q,
              top: j,
              animation: rs,
              duration: L(e.duration)
            }), Kt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(O) {
        return S.apply(this, arguments);
      };
    }(), P = /* @__PURE__ */ function() {
      var S = $t(function* () {
        yield Pn(), f = Ia(o.value);
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), C = () => {
      f.addEventListener("scroll", g);
    }, w = () => {
      f.removeEventListener("scroll", g);
    }, B = (S, D) => {
      Sn(() => V({
        anchorName: S,
        options: D
      }));
    };
    return le(() => n.value, /* @__PURE__ */ $t(function* () {
      yield Pn(), r.forEach((S) => {
        var {
          name: D,
          setOwnTop: O
        } = S;
        D.value && l.value.push(D.value), O();
      });
    })), tn(/* @__PURE__ */ $t(function* () {
      yield P(), C();
    })), vt(w), gr(w), {
      n: Gy,
      classes: qy,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: B,
      anchorClick: V
    };
  }
});
dd.render = Xy;
const Wr = dd;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var LS = Wr;
function Zy(e) {
  return ["text", "password", "number"].includes(e);
}
var Jy = {
  modelValue: {
    type: String
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text",
    validator: Zy
  },
  textarea: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: [String, Number],
    default: 8
  },
  placeholder: {
    type: String
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  maxlength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  resize: {
    type: Boolean,
    default: !1
  },
  autofocus: {
    type: Boolean,
    default: !1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: {
    type: Array
  },
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onInput: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: vo,
  classes: Qy
} = ee("input"), _y = ["id", "disabled", "type", "value", "maxlength", "rows"], xy = ["id", "disabled", "type", "value", "maxlength"], eb = ["for"];
function nb(e, n) {
  var r = oe("var-icon"), a = oe("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[14] || (n[14] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (h(), T(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : x("v-if", !0), e.textarea ? (h(), T(
          "textarea",
          {
            key: 1,
            class: c(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            rows: e.rows,
            style: q({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              resize: e.resize ? "vertical" : "none"
            }),
            onFocus: n[0] || (n[0] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[1] || (n[1] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[2] || (n[2] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[3] || (n[3] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[4] || (n[4] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            }),
            onCompositionstart: n[5] || (n[5] = function() {
              return e.handleCompositionStart && e.handleCompositionStart(...arguments);
            }),
            onCompositionend: n[6] || (n[6] = function() {
              return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
            })
          },
          `
        `,
          46,
          _y
        )) : (h(), T(
          "input",
          {
            key: 2,
            class: c(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            style: q({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor
            }),
            onFocus: n[7] || (n[7] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[8] || (n[8] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[9] || (n[9] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[10] || (n[10] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[11] || (n[11] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            }),
            onCompositionstart: n[12] || (n[12] = function() {
              return e.handleCompositionStart && e.handleCompositionStart(...arguments);
            }),
            onCompositionend: n[13] || (n[13] = function() {
              return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
            })
          },
          null,
          46,
          xy
        )), A(
          "label",
          {
            class: c(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: q({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          re(e.placeholder),
          15,
          eb
        )],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), me(
          r,
          {
            key: 0,
            class: c(e.n("clear-icon")),
            "var-input-cover": "",
            name: "close-circle",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : x("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: q({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : x("v-if", !0), ne(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    )],
    2
    /* CLASS */
  );
}
var vd = _({
  name: "VarInput",
  components: {
    VarIcon: ke,
    VarFormDetails: je
  },
  props: Jy,
  setup(e) {
    var n = I("var-input-" + Wn().uid), r = I(null), a = I(!1), t = R(() => e.type === "number" ? "text" : e.type), o = R(() => {
      var {
        maxlength: E,
        modelValue: H
      } = e;
      return E ? Nn(H) ? "0 / " + E : String(H).length + "/" + E : "";
    }), {
      bindForm: l,
      form: i
    } = hn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = pn(), f = (E) => {
      Ve(() => {
        var {
          validateTrigger: H,
          rules: U,
          modelValue: X
        } = e;
        u(H, E, U, X);
      });
    }, m = () => {
      var {
        hint: E,
        modelValue: H
      } = e;
      if (!E && !Nn(H))
        return vo("--placeholder-hidden");
      if (E && (!Nn(H) || a.value))
        return vo("--placeholder-hint");
    }, p = (E) => {
      a.value = !0, $(e.onFocus, E), f("onFocus");
    }, y = (E) => {
      a.value = !1, $(e.onBlur, E), f("onBlur");
    }, g = (E) => {
      var H = E.target, {
        value: U
      } = H;
      return e.type === "number" && (U = D(U)), U = z(O(U)), H.value = U, U;
    }, V = (E) => {
      Object.assign(E.target, {
        composing: !0
      });
    }, P = (E) => {
      var H = E.target;
      H.composing && (H.composing = !1, H.dispatchEvent(new Event("input")));
    }, C = (E) => {
      var {
        composing: H
      } = E.target;
      if (!H) {
        var U = g(E);
        $(e["onUpdate:modelValue"], U), $(e.onInput, U, E), f("onInput");
      }
    }, w = (E) => {
      var H = g(E);
      $(e.onChange, H, E), f("onChange");
    }, B = () => {
      var {
        disabled: E,
        readonly: H,
        clearable: U,
        onClear: X
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || E || H || !U || ($(e["onUpdate:modelValue"], ""), $(X, ""), f("onClear"));
    }, S = (E) => {
      var {
        disabled: H,
        onClick: U
      } = e;
      i != null && i.disabled.value || H || ($(U, E), f("onClick"));
    }, D = (E) => {
      var H = E.indexOf("-"), U = E.indexOf(".");
      return H > -1 && (E = H === 0 ? "-" + E.replace(/-/g, "") : E.replace(/-/g, "")), U > -1 && (E = E.slice(0, U + 1) + E.slice(U).replace(/\./g, "")), E.replace(/[^-0-9.]/g, "");
    }, O = (E) => e.modelModifiers.trim ? E.trim() : E, z = (E) => e.maxlength ? E.slice(0, L(e.maxlength)) : E, M = (E) => {
      var {
        disabled: H,
        readonly: U
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || H || U || E.stopPropagation();
    }, b = () => {
      $(e["onUpdate:modelValue"], ""), v();
    }, k = () => d(e.rules, e.modelValue), j = () => {
      var E;
      (E = r.value) == null || E.focus();
    }, Q = () => {
      r.value.blur();
    }, F = {
      reset: b,
      validate: k,
      resetValidation: v
    };
    return $(l, F), tn(() => {
      e.autofocus && j();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: s,
      type: t,
      maxlengthText: o,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: vo,
      classes: Qy,
      isEmpty: Nn,
      computePlaceholderState: m,
      handleFocus: p,
      handleBlur: y,
      handleInput: C,
      handleChange: w,
      handleClear: B,
      handleClick: S,
      handleTouchstart: M,
      handleCompositionStart: V,
      handleCompositionEnd: P,
      validate: k,
      resetValidation: v,
      reset: b,
      focus: j,
      blur: Q
    };
  }
});
vd.render = nb;
const cr = vd;
cr.install = function(e) {
  e.component(cr.name, cr);
};
var RS = cr;
function rb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ab(e) {
  return ["always", "hover", "none"].includes(e);
}
var tb = {
  type: {
    type: String,
    default: "default",
    validator: rb
  },
  href: {
    type: String
  },
  target: {
    type: String
  },
  to: {
    type: [String, Object]
  },
  replace: {
    type: Boolean,
    default: !1
  },
  underline: {
    type: String,
    default: "always",
    validator: ab
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  textSize: {
    type: [String, Number]
  },
  textColor: {
    type: String
  },
  onClick: Y()
}, {
  n: ob,
  classes: ib
} = ee("link");
function lb(e, n) {
  return h(), me(
    Ja(e.tag),
    Me(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ve(() => [W(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var fd = _({
  name: "VarLink",
  props: tb,
  setup(e) {
    var n = R(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = R(() => {
      var {
        disabled: t,
        href: o,
        target: l,
        to: i,
        replace: s
      } = e;
      return t ? {} : o ? {
        href: o,
        target: l
      } : i ? {
        to: i,
        target: l,
        replace: s
      } : {};
    }), a = (t) => {
      var {
        disabled: o,
        onClick: l
      } = e;
      o || $(l, t);
    };
    return {
      n: ob,
      classes: ib,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: he
    };
  }
});
fd.render = lb;
const Gr = fd;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var US = Gr, sb = {
  loading: {
    type: Boolean,
    default: !1
  },
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: {
    type: Boolean,
    default: !1
  },
  error: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: {
    type: String
  },
  finishedText: {
    type: String
  },
  errorText: {
    type: String
  },
  onLoad: Y(),
  "onUpdate:loading": Y(),
  "onUpdate:error": Y()
};
function Dl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ub(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Dl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Dl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: db,
  classes: vb
} = ee("list");
function fb(e, n) {
  var r = oe("var-loading"), a = Ae("ripple");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [W(e.$slots, "default"), e.loading ? W(e.$slots, "loading", {
      key: 0
    }, () => [A(
      "div",
      {
        class: c(e.n("loading"))
      },
      [A(
        "div",
        {
          class: c(e.n("loading-text"))
        },
        re(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), ne(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : x("v-if", !0), e.finished ? W(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: c(e.n("finished"))
      },
      re(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? W(e.$slots, "error", {
      key: 2
    }, () => [we((h(), T(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [be(
        re(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : x("v-if", !0), A(
      "div",
      {
        class: c(e.n("detector")),
        ref: "detectorEl"
      },
      null,
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var cd = _({
  name: "VarList",
  directives: {
    Ripple: ze
  },
  components: {
    VarLoading: Cn
  },
  props: sb,
  setup(e) {
    var n = I(null), r = I(null), a, t = () => {
      $(e["onUpdate:error"], !1), $(e["onUpdate:loading"], !0), $(e.onLoad);
    }, o = () => {
      var i = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - De(e.offset) <= i;
    }, l = /* @__PURE__ */ function() {
      var i = ub(function* () {
        yield Ve();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && o() && t();
      });
      return function() {
        return i.apply(this, arguments);
      };
    }();
    return tn(() => {
      a = Ia(n.value), e.immediateCheck && l(), a.addEventListener("scroll", l);
    }), Pa(() => {
      a.removeEventListener("scroll", l);
    }), {
      pack: He,
      listEl: n,
      detectorEl: r,
      dt: Gt,
      isNumber: xe,
      load: t,
      check: l,
      n: db,
      classes: vb
    };
  }
});
cd.render = fb;
const qr = cd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var YS = qr, cb = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  errorColor: {
    type: String
  },
  height: {
    type: [Number, String]
  },
  top: {
    type: [Number, String]
  }
}, {
  classes: mb,
  n: Al
} = ee("loading-bar");
const pb = _({
  name: "VarLoadingBar",
  props: cb,
  setup(e) {
    return () => ne("div", {
      class: mb(Al(), [e.error, Al("--error")]),
      style: {
        zIndex: sn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: he(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: he(e.top)
      }
    }, null);
  }
});
var md, zl, pd = {}, hb = {
  value: 0,
  opacity: 0,
  error: !1
}, Ke = Ee(hb), gb = (e) => {
  Object.assign(Ke, e);
}, yb = (e) => {
  Object.assign(Ke, e), pd = e;
}, bb = () => {
  Object.keys(pd).forEach((e) => {
    Ke[e] !== void 0 && (Ke[e] = void 0);
  });
}, hd = () => {
  md = window.setTimeout(() => {
    if (!(Ke.value >= 95)) {
      var e = Math.random();
      Ke.value < 70 && (e = Math.round(5 * Math.random())), Ke.value += e, hd();
    }
  }, 200);
}, Cb = () => {
  zl || (zl = !0, Qa(pb, Ke)), (!Ke.error || Ke.value === 100) && (Ke.value = 0), setTimeout(() => {
    Ke.opacity = 1;
  }, 200), hd();
}, wb = () => {
  Ke.value = 100, setTimeout(() => {
    Ke.opacity = 0, setTimeout(() => {
      Ke.error = !1;
    }, 250);
  }, 300), window.clearTimeout(md);
}, Sb = () => {
  Ke.error = !0, jt.start(), setTimeout(jt.finish, 300);
}, jt = {
  start: Cb,
  finish: wb,
  error: Sb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: gb,
  setDefaultOptions: yb,
  resetDefaultOptions: bb
}, FS = jt;
const xo = jt;
function kb(e) {
  return ["click", "hover"].includes(e);
}
function $b(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Tb = {
  show: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "click",
    validator: kb
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: $b
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object],
    default: "body"
  },
  sameWidth: {
    type: Boolean,
    default: !1
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y()
}, {
  n: Ob,
  classes: Pb
} = ee("menu");
function Vb(e, n) {
  return h(), T(
    "div",
    {
      ref: "host",
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleHostClick && e.handleHostClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleHostMouseenter && e.handleHostMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleHostMouseleave && e.handleHostMouseleave(...arguments);
      })
    },
    [W(e.$slots, "default"), (h(), me(
      Za,
      {
        to: e.teleport
      },
      [ne(
        Be,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [we(A(
            "div",
            {
              ref: "popover",
              style: q({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = On(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [W(e.$slots, "menu")],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Va, e.show]])]),
          _: 3
          /* FORWARDED */
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var gd = _({
  name: "VarMenu",
  props: Tb,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: m,
      // expose
      resize: p
    } = Zu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: he,
      n: Ob,
      classes: Pb,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: p,
      open: f,
      close: m
    };
  }
});
gd.render = Vb;
const Fn = gd;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var HS = Fn, yd = Symbol("SELECT_BIND_OPTION_KEY"), bd = Symbol("SELECT_COUNT_OPTION_KEY");
function Eb() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(yd), {
    length: r
  } = Mn(bd);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Mb() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(yd), {
    index: r
  } = In(bd);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Ib = {
  label: {},
  value: {}
}, {
  n: Bb,
  classes: Nb
} = ee("option");
function Db(e, n) {
  var r = oe("var-checkbox"), a = Ae("ripple");
  return we((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: q({
        width: e.wrapWidth,
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: q({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (h(), me(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = On(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : x("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [W(e.$slots, "default", {}, () => [be(
        re(e.label),
        1
        /* TEXT */
      )])],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[a]]);
}
var Cd = _({
  name: "VarOption",
  directives: {
    Ripple: ze
  },
  components: {
    VarCheckbox: lr
  },
  props: Ib,
  setup(e) {
    var n = I(!1), r = R(() => n.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: l
    } = Mb(), {
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = o, v = () => {
      n.value = !n.value, d(p);
    }, f = () => d(p), m = (y) => {
      n.value = y;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return le([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), l(p), {
      n: Bb,
      classes: Nb,
      optionSelected: n,
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
Cd.render = Db;
const Kr = Cd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var jS = Kr, Ab = {
  show: {
    type: Boolean,
    default: !1
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onClick: Y(),
  "onUpdate:show": Y()
};
function zb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ft(e);
}
var {
  n: Ll
} = ee("overlay");
const Xr = _({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Ab,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = pt(() => e.show, 1), {
      disabled: o
    } = pi(), l = () => {
      $(e.onClick), $(e["onUpdate:show"], !1);
    };
    Xt(() => e.show, () => e.lockScroll);
    var i = () => ne("div", Me({
      class: Ll(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [$(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return ne(Be, {
        name: Ll("--fade")
      }, {
        default: () => [u && i()]
      });
    };
    return () => {
      var {
        teleport: u
      } = e;
      if (u) {
        var d;
        return ne(Za, {
          to: u,
          disabled: o.value
        }, zb(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var WS = Xr, Lb = {
  current: {
    type: [Number, String]
  },
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: {
    type: Boolean,
    default: !1
  },
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: {
    type: Function
  },
  onChange: Y(),
  "onUpdate:current": Y(),
  "onUpdate:size": Y()
}, {
  n: Rb,
  classes: Ub
} = ee("pagination"), Yb = ["item-mode", "onClick"];
function Fb(e, n) {
  var r = oe("var-icon"), a = oe("var-input"), t = oe("var-cell"), o = oe("var-menu"), l = Ae("ripple");
  return h(), T(
    "ul",
    {
      class: c(e.n())
    },
    [we((h(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [W(e.$slots, "prev", {}, () => [ne(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), T(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [ne(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleValue, i)),
          onKeydown: n[3] || (n[3] = Ri((i) => e.setPage("simple", e.simpleValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), A("span", null, [be(
        " / " + re(e.pageCount) + " ",
        1
        /* TEXT */
      ), A(
        "div",
        {
          class: c(e.n("simple-line"))
        },
        null,
        2
        /* CLASS */
      )])],
      2
      /* CLASS */
    )) : (h(!0), T(
      Te,
      {
        key: 1
      },
      Ne(e.pageList, (i, s) => we((h(), T(
        "li",
        {
          key: e.toNumber(i) + s,
          "item-mode": e.getMode(i, s),
          class: c(e.classes(e.n("item"), e.n("$-elevation--2"), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [be(
          re(i),
          1
          /* TEXT */
        )],
        10,
        Yb
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), we((h(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [W(e.$slots, "next", {}, () => [ne(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), T(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [ne(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(h(!0), T(
            Te,
            null,
            Ne(e.sizeOption, (i, s) => we((h(), me(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ve(() => [be(
                  re(i) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class", "onClick"]
            )), [[l]])),
            128
            /* KEYED_FRAGMENT */
          ))]),
          default: ve(() => [A(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [A(
              "span",
              null,
              re(e.size) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
              1
              /* TEXT */
            ), ne(
              r,
              {
                class: c(e.n("size--open-icon")),
                "var-pagination-cover": "",
                name: "menu-down"
              },
              null,
              8,
              ["class"]
            )],
            2
            /* CLASS */
          )]),
          _: 1
          /* STABLE */
        },
        8,
        ["show"]
      )],
      2
      /* CLASS */
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (h(), T(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [be(
        re(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), ne(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.inputValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.inputValue, i)),
          onKeydown: n[9] || (n[9] = Ri((i) => e.setPage("quick", e.inputValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : x("v-if", !0), e.totalText ? (h(), T(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      re(e.totalText),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var wd = _({
  name: "VarPagination",
  components: {
    VarMenu: Fn,
    VarIcon: ke,
    VarCell: ir,
    VarInput: cr
  },
  directives: {
    Ripple: ze
  },
  props: Lb,
  setup(e) {
    var n = I(!1), r = I(""), a = I("1"), t = I(!1), o = I(!1), l = I(L(e.current) || 1), i = I(L(e.size) || 10), s = I([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(L(e.total) / L(i.value))), v = R(() => {
      var w = i.value * (l.value - 1) + 1, B = Math.min(i.value * l.value, L(e.total));
      return [w, B];
    }), f = R(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (w, B) => xe(w) ? !1 : B === 1 ? t.value : o.value, p = (w, B) => xe(w) ? "basic" : B === 1 ? "head" : "tail", y = (w, B) => {
      w === l.value || e.disabled || (xe(w) ? l.value = w : w === "prev" ? l.value > 1 && (l.value -= 1) : w === "next" ? l.value < d.value && (l.value += 1) : w === "..." && (B === 1 ? l.value = Math.max(l.value - e.maxPagerCount, 1) : l.value = Math.min(l.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, V = (w) => {
      i.value = w, n.value = !1;
    }, P = (w) => {
      var B = /^[1-9][0-9]*$/;
      return B.test(w);
    }, C = (w, B, S) => {
      if (S.target.blur(), P(B)) {
        var D = L(B);
        D > d.value && (D = d.value, a.value = "" + D), D !== l.value && (l.value = D);
      }
      w === "quick" && (r.value = ""), w === "simple" && !P(B) && (a.value = "" + l.value);
    };
    return le([() => e.current, () => e.size], (w) => {
      var [B, S] = w;
      l.value = L(B) || 1, i.value = L(S || 10);
    }), le([l, i, d], (w, B) => {
      var [S, D, O] = w, [z, M] = B, b = [], {
        maxPagerCount: k,
        total: j,
        onChange: Q
      } = e, F = Math.ceil(L(j) / L(M)), E = O - (k - u.value) - 1;
      if (a.value = "" + S, O - 2 > k) {
        if (z === void 0 || O !== F)
          for (var H = 2; H < k + 2; H++)
            b.push(H);
        if (S <= k && S < E) {
          b = [];
          for (var U = 1; U < k + 1; U++)
            b.push(U + 1);
          t.value = !0, o.value = !1;
        }
        if (S > k && S < E) {
          b = [];
          for (var X = 1; X < k + 1; X++)
            b.push(S + X - u.value);
          t.value = S === 2 && k === 1, o.value = !1;
        }
        if (S >= E) {
          b = [];
          for (var N = 1; N < k + 1; N++)
            b.push(O - (k - N) - 1);
          t.value = !1, o.value = !0;
        }
        b = [1, "...", ...b, "...", O];
      } else
        for (var Z = 1; Z <= O; Z++)
          b.push(Z);
      s.value = b, z !== void 0 && O > 0 && $(Q, S, D), $(e["onUpdate:current"], S), $(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: Rb,
      classes: Ub,
      pack: He,
      current: l,
      menuVisible: n,
      size: i,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: p,
      isHideEllipsis: m,
      clickItem: y,
      showMenu: g,
      clickSize: V,
      setPage: C,
      toNumber: L
    };
  }
});
wd.render = Fb;
const Zr = wd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var GS = Zr, Hb = {
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  radius: {
    type: [Number, String]
  },
  width: {
    type: [Number, String]
  },
  height: {
    type: [Number, String]
  },
  round: {
    type: Boolean,
    default: !1
  },
  inline: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, {
  n: jb,
  classes: Wb
} = ee("paper");
function Gb(e, n) {
  var r = Ae("ripple");
  return we((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.elevation != null, e.n("$-elevation--" + e.elevation)], [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var Sd = _({
  name: "VarPaper",
  directives: {
    Ripple: ze
  },
  props: Hb,
  setup(e) {
    var n = (r) => {
      $(e.onClick, r);
    };
    return {
      n: jb,
      classes: Wb,
      toSizeUnit: he,
      handleClick: n
    };
  }
});
Sd.render = Gb;
const Jr = Sd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var qS = Jr;
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ei.apply(this, arguments);
}
var qb = ei({
  columns: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  textKey: {
    type: String,
    default: "text"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: {
    type: Boolean,
    default: !1
  },
  cascadeInitialIndexes: {
    type: Array,
    default: () => []
  },
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  // dynamic internal
  dynamic: {
    type: Boolean,
    default: !1
  },
  textFormatter: {
    type: Function,
    default: (e) => e
  },
  onChange: Y(),
  onConfirm: Y(),
  onCancel: Y()
}, Xe(mt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Kb,
  classes: Xb
} = ee("picker"), Rl = 300, Zb = 15, Ul = 0, Jb = ["onTouchstart", "onTouchmove", "onTouchend"], Qb = ["onTransitionend"];
function _b(e, n) {
  var r = oe("var-button");
  return h(), me(
    Ja(e.dynamic ? e.n("$-popup") : e.Transition),
    Me(e.dynamic ? {
      onOpen: e.onOpen,
      onOpened: e.onOpened,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onClickOverlay: e.onClickOverlay,
      onRouteChange: e.onRouteChange,
      closeOnClickOverlay: e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.show,
      "onUpdate:show": e.handlePopupUpdateShow,
      position: "bottom",
      class: e.n("popup")
    } : null, {
      "var-picker-cover": ""
    }),
    {
      default: ve(() => [A(
        "div",
        Me({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [W(e.$slots, "cancel", {}, () => [ne(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [be(
                re(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), W(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: c(e.n("title"))
            },
            re(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), W(e.$slots, "confirm", {}, () => [ne(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [be(
                re(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )])],
          2
          /* CLASS */
        )) : x("v-if", !0), A(
          "div",
          {
            class: c(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), T(
            Te,
            null,
            Ne(e.scrollColumns, (a) => (h(), T(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: On((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [A(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: q({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(h(!0), T(
                  Te,
                  null,
                  Ne(a.column.texts, (t) => (h(), T(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: q({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [A(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      re(e.textFormatter(t, a.columnIndex)),
                      3
                      /* TEXT, CLASS */
                    )],
                    6
                    /* CLASS, STYLE */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                Qb
              )],
              42,
              Jb
            ))),
            128
            /* KEYED_FRAGMENT */
          )), A(
            "div",
            {
              class: c(e.n("picked")),
              style: q({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: c(e.n("mask")),
              style: q({
                backgroundSize: "100% " + (e.columnHeight - e.optionHeight) / 2 + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          6
          /* CLASS, STYLE */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
var kd = _({
  name: "VarPicker",
  components: {
    VarButton: Ge,
    VarPopup: fn
  },
  inheritAttrs: !1,
  props: qb,
  setup(e) {
    var n = I([]), r = R(() => De(e.optionHeight)), a = R(() => De(e.optionCount)), t = R(() => a.value * r.value / 2 - r.value / 2), o = R(() => a.value * r.value), l = [], i = (b, k) => {
      k.scrollEl = b;
    }, s = (b) => {
      $(e["onUpdate:show"], b);
    }, u = (b) => {
      var k = r.value + t.value, j = t.value - b.column.texts.length * r.value;
      b.translate >= k && (b.translate = k), b.translate <= j && (b.translate = j);
    }, d = (b, k) => {
      var {
        length: j
      } = b.column.texts;
      return k = k >= j ? j - 1 : k, k = k <= 0 ? 0 : k, k;
    }, v = (b) => {
      var k = Math.round((t.value - b.translate) / r.value);
      return d(b, k);
    }, f = () => {
      var b = n.value.map((j) => j.column.texts[j.index]), k = n.value.map((j) => j.index);
      return {
        texts: b,
        indexes: k
      };
    }, m = function(b, k, j, Q) {
      Q === void 0 && (Q = !1);
      var F = t.value - d(b, k) * r.value;
      F === b.translate && (b.scrolling = !1, !Q && D(b)), b.translate = F, b.duration = j;
    }, p = (b, k, j) => {
      b.translate += Math.abs(k / j) / 3e-3 * (k < 0 ? -1 : 1);
    }, y = (b, k) => {
      k.touching = !0, k.scrolling = !1, k.duration = 0, k.translate = lo(k.scrollEl);
    }, g = (b, k) => {
      if (k.touching) {
        var {
          clientY: j
        } = b.touches[0], Q = k.prevY !== void 0 ? j - k.prevY : 0;
        k.prevY = j, k.translate += Q, u(k);
        var F = performance.now();
        F - k.momentumTime > Rl && (k.momentumTime = F, k.momentumPrevY = k.translate);
      }
    }, V = (b, k) => {
      k.touching = !1, k.scrolling = !0, k.prevY = void 0;
      var j = k.translate - k.momentumPrevY, Q = performance.now() - k.momentumTime, F = Math.abs(j) >= Zb && Q <= Rl;
      F && p(k, j, Q), k.index = v(k), m(k, k.index, F ? 1e3 : 200);
    }, P = (b) => {
      b.scrolling = !1, D(b);
    }, C = (b) => b.map((k, j) => {
      var Q, F = Ce(k) ? {
        texts: k
      } : k, E = {
        id: Ul++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = F.initialIndex) != null ? Q : 0,
        columnIndex: j,
        duration: 0,
        momentumTime: 0,
        column: F,
        scrollEl: null,
        scrolling: !1
      };
      return m(E, E.index, 0, !0), E;
    }), w = (b) => {
      var k = [];
      return B(k, b, 0, !0), k;
    }, B = function(b, k, j, Q) {
      if (Q === void 0 && (Q = !1), Ce(k) && k.length) {
        var F, E = Q && (F = e.cascadeInitialIndexes[b.length]) != null ? F : 0, H = {
          id: Ul++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: E,
          columnIndex: j,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: k.map((U) => U[e.textKey])
          },
          columns: k,
          scrollEl: null,
          scrolling: !1
        };
        b.push(H), m(H, H.index, 0, !0), B(b, H.columns[H.index].children, j + 1, Q);
      }
    }, S = (b) => {
      n.value.splice(n.value.indexOf(b) + 1), B(n.value, b.columns[b.index].children, b.columnIndex + 1);
    }, D = (b) => {
      var {
        cascade: k,
        onChange: j
      } = e;
      k && S(b);
      var Q = n.value.some((U) => U.scrolling);
      if (!Q) {
        var {
          texts: F,
          indexes: E
        } = f(), H = E.every((U, X) => U === l[X]);
        H || (l = [...E], $(j, F, E));
      }
    }, O = () => {
      if (e.cascade) {
        var b = n.value.find((k) => k.scrolling);
        b && (b.translate = lo(b.scrollEl), b.index = v(b), m(b, b.index, 0, !0), b.scrolling = !1, S(b));
      } else
        n.value.forEach((k) => {
          k.translate = lo(k.scrollEl), k.index = v(k), m(k, k.index, 0);
        });
    }, z = () => {
      O();
      var {
        texts: b,
        indexes: k
      } = f();
      l = [...k], $(e.onConfirm, b, k);
    }, M = () => {
      O();
      var {
        texts: b,
        indexes: k
      } = f();
      l = [...k], $(e.onCancel, b, k);
    };
    return le(() => e.columns, (b) => {
      n.value = e.cascade ? w(Ui(b)) : C(Ui(b));
      var {
        indexes: k
      } = f();
      l = [...k];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Kb,
      classes: Xb,
      pack: He,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Be,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: g,
      handleTouchend: V,
      handleTransitionend: P,
      confirm: z,
      cancel: M,
      dt: Gt
    };
  }
});
kd.render = _b;
const mr = kd;
var nn;
function Oa(e) {
  return new Promise((n) => {
    Oa.close();
    var r = Ce(e) ? {
      columns: e
    } : e, a = Ee(r);
    a.dynamic = !0, a.teleport = "body", nn = a;
    var {
      unmountInstance: t
    } = Qa(mr, a, {
      onConfirm: (o, l) => {
        $(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, nn === a && (nn = null);
      },
      onCancel: (o, l) => {
        $(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, nn === a && (nn = null);
      },
      onClose: () => {
        $(a.onClose), n({
          state: "close"
        }), nn === a && (nn = null);
      },
      onClosed: () => {
        $(a.onClosed), t(), nn === a && (nn = null);
      },
      onRouteChange: () => {
        t(), nn === a && (nn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
mr.install = function(e) {
  e.component(mr.name, mr);
};
Oa.Component = mr;
Oa.install = function(e) {
  e.component(mr.name, mr);
};
Oa.close = () => {
  if (nn != null) {
    var e = nn;
    nn = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
var KS = mr;
function xb(e) {
  return ["linear", "circle"].includes(e);
}
var e0 = {
  mode: {
    type: String,
    default: "linear",
    validator: xb
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: {
    type: String
  },
  trackColor: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [Number, String],
    default: 0
  },
  label: {
    type: Boolean,
    default: !1
  },
  labelClass: {
    type: String
  },
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  }
}, {
  n: n0,
  classes: r0
} = ee("progress"), a0 = ["viewBox"], t0 = ["cx", "cy", "r", "stroke-width"], o0 = ["cx", "cy", "r", "stroke-width"];
function i0(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [A(
        "div",
        {
          class: c(e.n("linear-block")),
          style: q({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("linear-background")),
            style: q({
              background: e.trackColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0), A(
          "div",
          {
            class: c(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: q({
              background: e.color,
              width: e.linearProps.width
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      ), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [be(
          re(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.mode === "circle" ? (h(), T(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), T(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: q({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), T(
          "circle",
          {
            key: 0,
            class: c(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: q({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          t0
        )) : x("v-if", !0), A(
          "circle",
          {
            class: c(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: q({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          o0
        )],
        14,
        a0
      )), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [be(
          re(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var $d = _({
  name: "VarProgress",
  props: e0,
  setup(e) {
    var n = R(() => {
      var a = L(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = R(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + De(a) + " " + De(a), i = L(o) > 100 ? 100 : Math.round(L(o)), s = (De(a) - De(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: n0,
      classes: r0,
      toSizeUnit: he,
      multiplySizeUnit: Qe,
      linearProps: n,
      circleProps: r
    };
  }
});
$d.render = i0;
const Qr = $d;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var XS = Qr, l0 = {
  modelValue: {
    type: Boolean
  },
  // 是否禁用下拉刷新
  disabled: {
    type: Boolean,
    default: !1
  },
  // 动画时长
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  // 成功提示展示时长
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  // control 的背景颜色
  bgColor: {
    type: String
  },
  // 成功状态下 control 的背景颜色
  successBgColor: {
    type: String
  },
  // control 的颜色
  color: {
    type: String
  },
  // 成功状态下 control 的颜色
  successColor: {
    type: String
  },
  target: {
    type: [String, Object]
  },
  onRefresh: Y(),
  "onUpdate:modelValue": Y()
};
function Yl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function s0(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Yl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Yl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Fl,
  classes: u0
} = ee("pull-refresh"), Hl = 150;
function d0(e, n) {
  var r = oe("var-icon");
  return h(), T(
    "div",
    {
      ref: "freshNode",
      class: c(e.n()),
      onTouchstart: n[0] || (n[0] = function() {
        return e.touchStart && e.touchStart(...arguments);
      }),
      onTouchend: n[1] || (n[1] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      }),
      onTouchcancel: n[2] || (n[2] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      })
    },
    [A(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: q(e.controlStyle)
      },
      [ne(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: c(e.classes(e.n("icon"), [e.refreshStatus === "loading" && e.iconHasChanged, e.n("animation")])),
          "var-pull-refresh-cover": ""
        },
        null,
        8,
        ["name", "transition", "class"]
      )],
      6
      /* CLASS, STYLE */
    ), W(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Td = _({
  name: "VarPullRefresh",
  components: {
    VarIcon: ke
  },
  props: l0,
  setup(e) {
    var n, r, a = I(0), t = I(null), o = I(null), l = I(0), i = I(-999), s = I("arrow-down"), u = I("default"), d = I(!1), v = 0, f = 0, m = I(!0), p = R(() => u.value !== "loading" && u.value !== "success" && !e.disabled), y = R(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: V.value ? e.successBgColor : e.bgColor,
      color: V.value ? e.successColor : e.color
    })), g = R(() => Math.abs(2 * a.value)), V = R(() => u.value === "success"), P = () => new Promise((M) => {
      window.setTimeout(() => {
        m.value = !0, M();
      }, Hl);
    }), C = (M) => {
      var b = "classList" in n ? n : document.body;
      b.classList[M](Fl() + "--lock");
    }, w = (M) => {
      v = M.touches[0].clientY, f = 0;
    }, B = (M) => {
      if (p.value) {
        var b = qt(n);
        if (!(b > 0)) {
          var k = b === 0, j = M.touches[0];
          f = j.clientY - v, k && f >= 0 && M.preventDefault(), u.value !== "pulling" && (u.value = "pulling", l.value = M.touches[0].clientY), k && i.value > a.value && C("add");
          var Q = (M.touches[0].clientY - l.value) / 2 + a.value;
          i.value = Q >= g.value ? g.value : Q, i.value >= g.value * 0.2 ? (m.value = !1, s.value = "refresh", r = P()) : s.value = "arrow-down";
        }
      }
    }, S = /* @__PURE__ */ function() {
      var M = s0(function* () {
        p.value && (d.value = !0, i.value >= g.value * 0.2 ? (yield r, u.value = "loading", i.value = g.value * 0.3, $(e["onUpdate:modelValue"], !0), $(e.onRefresh), C("remove")) : (u.value = "loosing", s.value = "arrow-down", i.value = a.value, setTimeout(() => {
          d.value = !1, C("remove");
        }, L(e.animationDuration))));
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), D = () => {
      var {
        width: M
      } = o.value.getBoundingClientRect();
      i.value = -(M + M * 0.25), a.value = -(M + M * 0.25);
    }, O = () => {
      n = e.target ? ts(e.target, "PullRefresh") : Ia(t.value);
    }, z = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return le(() => e.modelValue, (M) => {
      M === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = a.value, z();
      }, L(e.successDuration)));
    }), tn(() => {
      O(), D();
    }), wa(t, "touchmove", B), {
      n: Fl,
      classes: u0,
      iconHasChanged: m,
      ICON_TRANSITION: Hl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: w,
      touchMove: B,
      touchEnd: S,
      iconName: s,
      controlStyle: y,
      isSuccess: V
    };
  }
});
Td.render = d0;
const _r = Td;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var ZS = _r, v0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, Od = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Pd = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function f0() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(Od), {
    length: r
  } = Mn(Pd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function c0() {
  var {
    bindParent: e,
    parentProvider: n
  } = Tn(Od), {
    index: r
  } = In(Pd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: m0,
  classes: p0
} = ee("radio");
function h0(e, n) {
  var r = oe("var-icon"), a = oe("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      Me({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [we((h(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [ne(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : W(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ne(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), ne(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Vd = _({
  name: "VarRadio",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: ke,
    VarFormDetails: je
  },
  inheritAttrs: !1,
  props: v0,
  setup(e) {
    var n = I(!1), r = R(() => n.value === e.checkedValue), a = I(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = c0(), {
      form: l,
      bindForm: i
    } = hn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = pn(), f = (w) => {
      Ve(() => {
        var {
          validateTrigger: B,
          rules: S,
          modelValue: D
        } = e;
        u(B, w, S, D);
      });
    }, m = (w) => {
      var {
        checkedValue: B,
        onChange: S
      } = e;
      t && n.value === B || (n.value = w, $(e["onUpdate:modelValue"], n.value), $(S, n.value), t == null || t.onToggle(B), f("onChange"));
    }, p = (w) => {
      var {
        disabled: B,
        readonly: S,
        uncheckedValue: D,
        checkedValue: O,
        onClick: z
      } = e;
      l != null && l.disabled.value || B || ($(z, w), !(l != null && l.readonly.value || S) && (a.value = !0, m(r.value ? D : O)));
    }, y = (w) => {
      var {
        checkedValue: B,
        uncheckedValue: S
      } = e;
      n.value = w === B ? B : S;
    }, g = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, V = () => d(e.rules, e.modelValue), P = (w) => {
      var {
        uncheckedValue: B,
        checkedValue: S
      } = e, D = ![B, S].includes(w);
      D && (w = r.value ? B : S), m(w);
    };
    le(() => e.modelValue, (w) => {
      n.value = w;
    }, {
      immediate: !0
    });
    var C = {
      sync: y,
      validate: V,
      resetValidation: v,
      reset: g
    };
    return $(o, C), $(i, C), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: m0,
      classes: p0,
      handleClick: p,
      toggle: P,
      reset: g,
      validate: V,
      resetValidation: v
    };
  }
});
Vd.render = h0;
const xr = Vd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var JS = xr;
function g0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var y0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: g0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: b0,
  classes: C0
} = ee("radio-group");
function w0(e, n) {
  var r = oe("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), ne(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Ed = _({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: je
  },
  props: y0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = f0(), {
      bindForm: t
    } = hn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = pn(), u = R(() => o.value), d = (g) => {
      Ve(() => {
        var {
          validateTrigger: V,
          rules: P,
          modelValue: C
        } = e;
        l(V, g, P, C);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: V
      } = g;
      return V(e.modelValue);
    }), f = (g) => {
      $(e["onUpdate:modelValue"], g), $(e.onChange, g), d("onChange");
    }, m = () => i(e.rules, e.modelValue), p = () => {
      $(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var y = {
      onToggle: f,
      validate: m,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return $(t, y), a(y), {
      errorMessage: o,
      n: b0,
      classes: C0,
      reset: p,
      validate: m,
      resetValidation: s
    };
  }
});
Ed.render = w0;
const ea = Ed;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var QS = ea, S0 = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: {
    type: String
  },
  icon: {
    type: String,
    default: "star"
  },
  emptyColor: {
    type: String
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  size: {
    type: [String, Number]
  },
  gap: {
    type: [String, Number]
  },
  namespace: {
    type: String
  },
  half: {
    type: Boolean,
    default: !1
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  disabledColor: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: xa
} = ee("rate"), k0 = ["onClick"];
function $0(e, n) {
  var r = oe("var-icon"), a = oe("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), T(
        Te,
        null,
        Ne(e.toNumber(e.count), (o) => we((h(), T(
          "div",
          {
            key: o,
            style: q(e.getStyle(o)),
            class: c(e.getClass(o)),
            onClick: (l) => e.handleClick(o, l)
          },
          [ne(
            r,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(o).name,
              style: q({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          k0
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), ne(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Md = _({
  name: "VarRate",
  components: {
    VarIcon: ke,
    VarFormDetails: je
  },
  directives: {
    Ripple: ze
  },
  props: S0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = pn(), i = (g) => {
      var {
        count: V,
        gap: P
      } = e;
      return {
        color: u(g).color,
        marginRight: g !== L(V) ? he(P) : 0
      };
    }, s = (g) => {
      var {
        name: V,
        color: P
      } = u(g);
      return {
        [xa("content")]: !0,
        [xa("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [xa("--error")]: a.value,
        [xa("--primary")]: V !== e.emptyIcon && !P
      };
    }, u = (g) => {
      var {
        modelValue: V,
        disabled: P,
        disabledColor: C,
        color: w,
        half: B,
        emptyColor: S,
        icon: D,
        halfIcon: O,
        emptyIcon: z
      } = e, M = w;
      return (P || n != null && n.disabled.value) && (M = C), g <= L(V) ? {
        color: M,
        name: D
      } : B && g <= L(V) + 0.5 ? {
        color: M,
        name: O
      } : {
        color: P || n != null && n.disabled.value ? C : S,
        name: z
      };
    }, d = (g, V) => {
      if (e.half) {
        var {
          offsetWidth: P
        } = V.target;
        V.offsetX <= Math.floor(P / 2) && (g -= 0.5);
      }
      $(e["onUpdate:modelValue"], g);
    }, v = () => o(e.rules, L(e.modelValue)), f = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), m = (g, V) => {
      var {
        readonly: P,
        disabled: C,
        onChange: w
      } = e;
      P || C || n != null && n.disabled.value || n != null && n.readonly.value || (d(g, V), $(w, g), f());
    }, p = () => {
      $(e["onUpdate:modelValue"], 0), l();
    }, y = {
      reset: p,
      validate: v,
      resetValidation: l
    };
    return $(r, y), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: i,
      getClass: s,
      getCurrentState: u,
      handleClick: m,
      reset: p,
      validate: v,
      resetValidation: l,
      toSizeUnit: he,
      toNumber: L,
      n: xa
    };
  }
});
Md.render = $0;
const na = Md;
na.install = function(e) {
  e.component(na.name, na);
};
var _S = na;
function T0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var O0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: T0
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  animation: {
    type: Boolean,
    default: !0
  }
}, P0 = (e) => (Ea(""), e = e(), Ma(), e), V0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, E0 = /* @__PURE__ */ P0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), M0 = [E0];
function I0(e, n) {
  return h(), T("svg", V0, M0);
}
var Id = _({});
Id.render = I0;
const B0 = Id;
var N0 = (e) => (Ea(""), e = e(), Ma(), e), D0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, A0 = /* @__PURE__ */ N0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), z0 = [A0];
function L0(e, n) {
  return h(), T("svg", D0, z0);
}
var Bd = _({});
Bd.render = L0;
const R0 = Bd;
var U0 = (e) => (Ea(""), e = e(), Ma(), e), Y0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, F0 = /* @__PURE__ */ U0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), H0 = [F0];
function j0(e, n) {
  return h(), T("svg", Y0, H0);
}
var Nd = _({});
Nd.render = j0;
const W0 = Nd;
var {
  n: G0,
  classes: q0
} = ee("result");
function K0(e, n) {
  return h(), T(
    Te,
    null,
    [A(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), A(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-tip"))),
        style: q({
          animationDuration: e.animation ? "760ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), A(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-long"))),
        style: q({
          animationDuration: e.animation ? "770ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), A(
      "span",
      {
        ref: "circle",
        class: c(e.n("success-circle")),
        style: q({
          left: "-" + e.borderSize,
          top: "-" + e.borderSize,
          borderWidth: e.borderSize
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), A(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), A(
      "span",
      {
        class: c(e.n("success-cover-right")),
        style: q({
          animationDuration: e.animation ? "4250ms" : "0ms"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    )],
    64
    /* STABLE_FRAGMENT */
  );
}
var Dd = _({
  props: {
    animation: {
      type: Boolean
    },
    borderSize: {
      type: String
    }
  },
  setup() {
    return {
      n: G0,
      classes: q0,
      toNumber: L
    };
  }
});
Dd.render = K0;
const X0 = Dd;
var Z0 = (e) => (Ea(""), e = e(), Ma(), e), J0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Q0 = /* @__PURE__ */ Z0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), _0 = [Q0];
function x0(e, n) {
  return h(), T("svg", J0, _0);
}
var Ad = _({});
Ad.render = x0;
const e1 = Ad;
var n1 = (e) => (Ea(""), e = e(), Ma(), e), r1 = {
  viewBox: "-4 -4 32 32"
}, a1 = /* @__PURE__ */ n1(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), t1 = [a1];
function o1(e, n) {
  return h(), T("svg", r1, t1);
}
var zd = _({});
zd.render = o1;
const i1 = zd;
var {
  n: l1,
  classes: s1
} = ee("result");
function u1(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "image", {}, () => [e.type ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: q({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), me(
          Ja(e.type),
          {
            "border-size": e.borderSize,
            animation: e.animation
          },
          null,
          8,
          ["border-size", "animation"]
        ))],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : x("v-if", !0)]), W(e.$slots, "title", {}, () => [e.title ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      re(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ld = _({
  name: "VarResult",
  components: {
    Info: B0,
    Success: X0,
    Warning: W0,
    Error: R0,
    Question: e1,
    Empty: i1
  },
  props: O0,
  setup(e) {
    var n = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: l1,
      classes: s1,
      toNumber: L,
      toPxNum: De,
      toSizeUnit: he,
      circleSize: n,
      borderSize: r
    };
  }
});
Ld.render = u1;
const ra = Ld;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var xS = ra;
function d1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function v1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var f1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: d1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: v1
  },
  onClick: Y()
}, {
  n: c1,
  classes: m1
} = ee("row");
function p1(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: q({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Rd = _({
  name: "VarRow",
  props: f1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = zm(), t = R(() => {
      var s = De(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      $(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), r(i), {
      n: c1,
      classes: m1,
      average: t,
      handleClick: l,
      padStartFlex: It
    };
  }
});
Rd.render = p1;
const aa = Rd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var ek = aa;
function h1(e) {
  return ["left", "right", "center"].includes(e);
}
var g1 = {
  modelValue: {
    default: void 0
  },
  placeholder: {
    type: String
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: {
    type: Boolean,
    default: !1
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left",
    validator: h1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onClose: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: fo,
  classes: y1
} = ee("select"), b1 = {
  key: 1
};
function C1(e, n) {
  var r = oe("var-chip"), a = oe("var-icon"), t = oe("var-menu"), o = oe("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [ne(
          t,
          {
            "var-select-cover": "",
            class: c(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (l) => e.isFocus = l),
            onClose: e.handleBlur
          },
          {
            menu: ve(() => [A(
              "div",
              {
                ref: "menuEl",
                class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [W(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: ve(() => [A(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: q({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [A(
                "div",
                {
                  class: c(e.n("label"))
                },
                [e.isEmptyModelValue ? x("v-if", !0) : W(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (h(), T(
                  Te,
                  {
                    key: 0
                  },
                  [e.chip ? (h(), T(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(h(!0), T(
                      Te,
                      null,
                      Ne(e.labels, (l) => (h(), me(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: l,
                          onClick: n[0] || (n[0] = On(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(l)
                        },
                        {
                          default: ve(() => [be(
                            re(l),
                            1
                            /* TEXT */
                          )]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1032,
                        ["class", "type", "onClose"]
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))],
                    2
                    /* CLASS */
                  )) : (h(), T(
                    "div",
                    {
                      key: 1,
                      class: c(e.n("values"))
                    },
                    re(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                )) : (h(), T(
                  "span",
                  b1,
                  re(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), W(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [ne(
                a,
                {
                  class: c(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
                  "var-select-cover": "",
                  name: "menu-down",
                  transition: 300
                },
                null,
                8,
                ["class"]
              )])],
              6
              /* CLASS, STYLE */
            ), A(
              "label",
              {
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: q({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              re(e.placeholder),
              7
              /* TEXT, CLASS, STYLE */
            )]),
            _: 3
            /* FORWARDED */
          },
          8,
          ["class", "offset-y", "disabled", "show", "onClose"]
        )],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), me(
          a,
          {
            key: 0,
            class: c(e.n("clear-icon")),
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : x("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: q({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : x("v-if", !0), ne(
      o,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Ud = _({
  name: "VarSelect",
  components: {
    VarIcon: ke,
    VarMenu: Fn,
    VarChip: sr,
    VarFormDetails: je
  },
  props: g1,
  setup(e) {
    var n = I(null), r = I(!1), a = R(() => e.multiple), t = R(() => e.focusColor), o = I(""), l = I([]), i = R(() => Nn(e.modelValue)), s = I("0px"), u = I(0), {
      bindForm: d,
      form: v
    } = hn(), {
      length: f,
      options: m,
      bindOptions: p
    } = Eb(), {
      errorMessage: y,
      validateWithTrigger: g,
      validate: V,
      // expose
      resetValidation: P
    } = pn(), C = I(null), w = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        l.value = ae.map(D);
      }
      !G && !Nn(J) && (o.value = D(J)), !G && Nn(J) && (o.value = "");
    }, B = (G) => {
      Ve(() => {
        var {
          validateTrigger: J,
          rules: ae,
          modelValue: ie
        } = e;
        g(J, G, ae, ie);
      });
    }, S = (G) => {
      var {
        value: J,
        label: ae
      } = G;
      return J.value != null ? J.value : ae.value;
    }, D = (G) => {
      var J, ae, ie = m.find((ge) => {
        var {
          value: pe
        } = ge;
        return pe.value === G;
      });
      return ie || (ie = m.find((ge) => {
        var {
          label: pe
        } = ge;
        return pe.value === G;
      })), (J = (ae = ie) == null ? void 0 : ae.label.value) != null ? J : "";
    }, O = () => {
      var {
        hint: G,
        modelValue: J
      } = e;
      if (!G && !Nn(J))
        return fo("--placeholder-hidden");
      if (G && (!Nn(J) || r.value))
        return fo("--placeholder-hint");
    }, z = () => n.value && window.getComputedStyle(n.value).width || "0px", M = () => {
      var {
        disabled: G,
        readonly: J,
        onFocus: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || G || J || (s.value = z(), u.value = De(e.offsetY), r.value = !0, $(ae), B("onFocus"));
    }, b = () => {
      var {
        disabled: G,
        readonly: J,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || G || J || ($(ae), B("onBlur"));
    }, k = (G) => {
      var {
        disabled: J,
        readonly: ae,
        multiple: ie,
        onChange: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var pe = ie ? m.filter((Fe) => {
          var {
            selected: en
          } = Fe;
          return en.value;
        }).map(S) : S(G);
        $(e["onUpdate:modelValue"], pe), $(ge, pe), B("onChange"), !ie && (r.value = !1);
      }
    }, j = () => {
      var {
        disabled: G,
        readonly: J,
        multiple: ae,
        clearable: ie,
        onClear: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || G || J || !ie)) {
        var pe = ae ? [] : void 0;
        $(e["onUpdate:modelValue"], pe), $(ge, pe), B("onClear");
      }
    }, Q = (G) => {
      var {
        disabled: J,
        onClick: ae
      } = e;
      v != null && v.disabled.value || J || ($(ae, G), B("onClick"));
    }, F = (G) => {
      var {
        disabled: J,
        readonly: ae,
        modelValue: ie,
        onClose: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var pe = ie, Fe = m.find((on) => {
          var {
            label: Le
          } = on;
          return Le.value === G;
        }), en = pe.filter((on) => {
          var Le;
          return on !== ((Le = Fe.value.value) != null ? Le : Fe.label.value);
        });
        $(e["onUpdate:modelValue"], en), $(ge, en), B("onClose");
      }
    }, E = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        m.forEach((ie) => ie.sync(ae.includes(S(ie))));
      } else
        m.forEach((ie) => ie.sync(J === S(ie)));
      w();
    }, H = () => {
      s.value = z(), u.value = De(e.offsetY), r.value = !0;
    }, U = () => {
      r.value = !1;
    }, X = () => V(e.rules, e.modelValue), N = () => {
      $(e["onUpdate:modelValue"], e.multiple ? [] : void 0), P();
    };
    le(() => e.multiple, () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G && !Ce(J))
        throw Error("The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, E, {
      deep: !0
    }), le(() => f.value, E);
    var Z = {
      wrapWidth: R(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: k,
      reset: N,
      validate: X,
      resetValidation: P
    };
    return p(Z), $(d, Z), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: y,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: C,
      n: fo,
      classes: y1,
      computePlaceholderState: O,
      handleFocus: M,
      handleBlur: b,
      handleClear: j,
      handleClick: Q,
      handleClose: F,
      reset: N,
      validate: X,
      resetValidation: P,
      focus: H,
      blur: U
    };
  }
});
Ud.render = C1;
const ta = Ud;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var nk = ta, w1 = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: {
    type: Boolean,
    default: !1
  },
  card: {
    type: Boolean,
    default: !1
  },
  avatar: {
    type: Boolean,
    default: !1
  },
  fullscreen: {
    type: Boolean,
    default: !1
  },
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: {
    type: [Number, String]
  },
  cardHeight: {
    type: [Number, String]
  },
  avatarSize: {
    type: [Number, String]
  },
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, {
  n: S1,
  classes: k1
} = ee("skeleton");
function $1(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), T(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: q({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [A(
          "div",
          {
            class: c(e.n("--animation"))
          },
          null,
          2
          /* CLASS */
        )],
        6
        /* CLASS, STYLE */
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), T(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: q({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [A(
            "div",
            {
              class: c(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), T(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (h(), T(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: q({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [A(
              "div",
              {
                class: c(e.n("--animation"))
              },
              null,
              2
              /* CLASS */
            )],
            6
            /* CLASS, STYLE */
          )) : x("v-if", !0), (h(!0), T(
            Te,
            null,
            Ne(e.toNumber(e.rows), (r, a) => (h(), T(
              "div",
              {
                class: c(e.n("row")),
                key: r,
                style: q({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [A(
                "div",
                {
                  class: c(e.n("--animation"))
                },
                null,
                2
                /* CLASS */
              )],
              6
              /* CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.loading && e.fullscreen ? (h(), T(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: q({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [A(
        "div",
        {
          class: c(e.n("--animation"))
        },
        null,
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Yd = _({
  name: "VarSkeleton",
  props: w1,
  setup() {
    return {
      n: S1,
      classes: k1,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
Yd.render = $1;
const oa = Yd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var rk = oa;
function T1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var O1 = {
  // 当前进度百分比
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  // 步长
  step: {
    type: [Number, String],
    default: 1
  },
  // 是否开启双滑块模式
  range: {
    type: Boolean,
    default: !1
  },
  labelVisible: {
    type: String,
    default: "normal",
    validator: T1
  },
  activeColor: {
    type: String
  },
  trackColor: {
    type: String
  },
  thumbColor: {
    type: String
  },
  labelColor: {
    type: String
  },
  labelTextColor: {
    type: String
  },
  trackHeight: {
    type: [String, Number]
  },
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  // 是否只读
  readonly: {
    type: Boolean,
    default: !1
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  onStart: Y(),
  onEnd: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: jl,
  classes: P1
} = ee("slider"), V1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function E1(e, n) {
  var r = oe("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [A(
        "div",
        {
          class: c(e.n("track"))
        },
        [A(
          "div",
          {
            class: c(e.n("track-background")),
            style: q({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: c(e.n("track-fill")),
            style: q(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (h(!0), T(
        Te,
        null,
        Ne(e.thumbList, (a) => (h(), T(
          "div",
          {
            class: c(e.n("thumb")),
            key: a.enumValue,
            style: q({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: On((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: On((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [W(e.$slots, "button", {
            currentValue: a.text
          }, () => [A(
            "div",
            {
              class: c(e.n("thumb-block")),
              style: q({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: c(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: q({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: c(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
              style: q({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [A(
              "span",
              null,
              re(a.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          V1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), ne(
      r,
      {
        "error-message": e.errorMessage,
        class: c(e.n("form")),
        "var-slider-cover": ""
      },
      null,
      8,
      ["error-message", "class"]
    )],
    2
    /* CLASS */
  );
}
var Fd = _({
  name: "VarSlider",
  components: {
    VarFormDetails: je
  },
  props: O1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = pn(), i = () => o(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = I(null), v = I(0), f = I(!1), m = Ee({
      [Ie.First]: s(),
      [Ie.Second]: s()
    }), p = R(() => L(e.max) - L(e.min)), y = R(() => v.value / p.value * L(e.step)), g = R(() => {
      var {
        modelValue: U,
        range: X
      } = e, N = [];
      return X && Ce(U) ? N = [{
        value: B(U[0]),
        enumValue: Ie.First,
        text: S(U[0])
      }, {
        value: B(U[1]),
        enumValue: Ie.Second,
        text: S(U[1])
      }] : xe(U) && (N = [{
        value: B(U),
        enumValue: Ie.First,
        text: S(U)
      }]), N;
    }), V = R(() => {
      var {
        activeColor: U,
        range: X,
        modelValue: N
      } = e, Z = X && Ce(N) ? B(Math.min(N[0], N[1])) : 0, G = X && Ce(N) ? B(Math.max(N[0], N[1])) - Z : B(N);
      return {
        width: G + "%",
        left: Z + "%",
        background: U
      };
    }), P = R(() => e.disabled || (r == null ? void 0 : r.disabled.value)), C = R(() => e.readonly || (r == null ? void 0 : r.readonly.value)), w = (U) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : m[U].active, B = (U) => {
      var {
        min: X,
        max: N
      } = e;
      return U < L(X) ? 0 : U > L(N) ? 100 : (U - L(X)) / p.value * 100;
    }, S = (U) => {
      if (!xe(U))
        return 0;
      var X = U;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var N = parseInt("" + X, 10) === X;
      return N ? X : L(X.toPrecision(5));
    }, D = (U, X) => {
      var N = [], {
        step: Z,
        range: G,
        modelValue: J,
        onChange: ae,
        min: ie
      } = e, ge = L(Z), pe = Math.round(U / y.value), Fe = pe * ge + L(ie), en = m[X].percentValue * ge + L(ie);
      if (m[X].percentValue = pe, G && Ce(J) && (N = X === Ie.First ? [Fe, J[1]] : [J[0], Fe]), en !== Fe) {
        var on = G ? N.map((Le) => S(Le)) : S(Fe);
        $(ae, on), $(e["onUpdate:modelValue"], on), u();
      }
    }, O = (U) => {
      if (!e.range)
        return Ie.First;
      var X = m[Ie.First].percentValue * y.value, N = m[Ie.Second].percentValue * y.value, Z = Math.abs(U - X), G = Math.abs(U - N);
      return Z <= G ? Ie.First : Ie.Second;
    }, z = (U, X) => {
      v.value || (v.value = d.value.offsetWidth), !(P.value || C.value) && ($(e.onStart), f.value = !0, m[X].startPosition = U.touches[0].clientX);
    }, M = (U, X) => {
      if (!(P.value || C.value || !f.value)) {
        var N = U.touches[0].clientX - m[X].startPosition + m[X].currentLeft;
        m[X].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), D(N, X);
      }
    }, b = (U) => {
      var {
        range: X,
        modelValue: N,
        onEnd: Z,
        step: G,
        min: J
      } = e;
      if (!(P.value || C.value)) {
        var ae = [];
        m[U].currentLeft = m[U].percentValue * y.value, m[U].active = !1;
        var ie = m[U].percentValue * L(G) + L(J);
        X && Ce(N) && (ae = U === Ie.First ? [ie, N[1]] : [N[0], ie]), $(Z, X ? ae : ie), f.value = !1;
      }
    }, k = (U) => {
      if (!(P.value || C.value) && !U.target.closest("." + jl("thumb"))) {
        var X = U.clientX - Iv(U.currentTarget), N = O(X);
        D(X, N), b(N);
      }
    }, j = () => {
      var U = L(e.step);
      return isNaN(U) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : U < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Q = () => {
      var {
        range: U,
        modelValue: X
      } = e;
      return U && !Ce(X) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !U && Ce(X) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : U && Ce(X) && X.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, F = function(U, X) {
      U === void 0 && (U = e.modelValue), X === void 0 && (X = L(e.step));
      var N = (Z) => {
        var {
          min: G,
          max: J
        } = e;
        return Z < L(G) ? 0 : Z > L(J) ? p.value / X : (Z - L(G)) / X;
      };
      e.range && Ce(U) ? (m[Ie.First].percentValue = N(U[0]), m[Ie.First].currentLeft = m[Ie.First].percentValue * y.value, m[Ie.Second].percentValue = N(U[1]), m[Ie.Second].currentLeft = m[Ie.Second].percentValue * y.value) : xe(U) && (m[Ie.First].currentLeft = N(U) * y.value);
    }, E = () => {
      var U = e.range ? [0, 0] : 0;
      $(e["onUpdate:modelValue"], U), l();
    }, H = {
      reset: E,
      validate: i,
      resetValidation: l
    };
    return $(n, H), le([() => e.modelValue, () => e.step], (U) => {
      var [X, N] = U;
      !j() || !Q() || f.value || F(X, L(N));
    }), le(v, () => F()), tn(() => {
      !j() || !Q() || (v.value = d.value.offsetWidth);
    }), {
      n: jl,
      classes: P1,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: V,
      isDisabled: P,
      errorMessage: a,
      thumbsProps: m,
      thumbList: g,
      multiplySizeUnit: Qe,
      toNumber: L,
      showLabel: w,
      start: z,
      move: M,
      end: b,
      click: k
    };
  }
});
Fd.render = E1;
const ia = Fd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var ak = ia;
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ni.apply(this, arguments);
}
function M1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function I1(e) {
  return Ni.includes(e);
}
var Hd = {
  type: {
    type: String,
    validator: I1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: M1
  },
  // content内容
  content: {
    type: String
  },
  // 为snackbar content添加自定义类名
  contentClass: {
    type: String
  },
  // snackbar 持续时间
  duration: {
    type: Number,
    default: 3e3
  },
  // 是否将消息条内容堆叠在操作（按钮）之上
  vertical: {
    type: Boolean,
    default: !1
  },
  loadingType: Xe(nr, "type"),
  loadingSize: Xe(nr, "size"),
  loadingRadius: Xe(nr, "radius"),
  loadingColor: ni({}, Xe(nr, "color"), {
    default: "currentColor"
  }),
  // 是否禁止滚动穿透
  lockScroll: {
    type: Boolean,
    default: !1
  },
  // 控制组件可见还是隐藏
  show: {
    type: Boolean,
    default: !1
  },
  // teleport
  teleport: {
    type: String,
    default: "body"
  },
  // 是否禁止点击背景
  forbidClick: {
    type: Boolean,
    default: !1
  },
  // 打开时的回调函数
  onOpen: Y(),
  // 打开动画结束时的回调
  onOpened: Y(),
  // 关闭时的回调函数
  onClose: Y(),
  // 关闭动画结束时的回调
  onClosed: Y(),
  "onUpdate:show": Y(),
  _update: {
    type: String
  }
}, {
  n: B1,
  classes: N1
} = ee("snackbar"), D1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function A1(e, n) {
  var r = oe("var-icon"), a = oe("var-loading");
  return we((h(), T(
    "div",
    {
      class: c(e.n()),
      style: q({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: q({
          zIndex: e.zIndex
        })
      },
      [A(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [W(e.$slots, "default", {}, () => [be(
          re(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (h(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : x("v-if", !0), e.type === "loading" ? (h(), me(
          a,
          {
            key: 1,
            type: e.loadingType,
            size: e.loadingSize,
            color: e.loadingColor,
            radius: e.loadingRadius
          },
          null,
          8,
          ["type", "size", "color", "radius"]
        )) : x("v-if", !0), W(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Va, e.show]]);
}
var jd = _({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Cn,
    VarIcon: ke
  },
  props: Hd,
  setup(e) {
    var n = I(null), {
      zIndex: r
    } = pt(() => e.show, 1);
    Xt(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? D1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && $(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (l) => {
      l ? ($(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), $(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(n.value), o();
    }), tn(() => {
      e.show && ($(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Ni,
      n: B1,
      classes: N1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
jd.render = A1;
const Wd = jd;
var {
  n: z1
} = ee("snackbar");
function L1(e, n) {
  var r = oe("var-snackbar-core");
  return h(), me(
    Za,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [ne(
      Be,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [ne(
          r,
          Me(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ve(() => [W(e.$slots, "action")]),
            default: ve(() => [W(e.$slots, "default", {}, () => [be(
              re(e.content),
              1
              /* TEXT */
            )])]),
            _: 3
            /* FORWARDED */
          },
          16,
          ["class"]
        )]),
        _: 3
        /* FORWARDED */
      },
      8,
      ["name", "onAfterEnter", "onAfterLeave"]
    )],
    8,
    ["to", "disabled"]
  );
}
var Gd = _({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Wd
  },
  props: Hd,
  setup() {
    var {
      disabled: e
    } = pi();
    return {
      n: z1,
      disabled: e
    };
  }
});
Gd.render = L1;
const la = Gd;
function ut() {
  return ut = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ut.apply(this, arguments);
}
function R1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ft(e);
}
var Ni = ["loading", "success", "warning", "info", "error"], Wl = 0, ri = !1, qd, qa = !1, Kd = {
  type: void 0,
  content: "",
  position: "top",
  duration: 3e3,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
}, mn = Ee([]), Di = Kd, U1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Y1 = {
  setup() {
    return () => {
      var e = mn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), qa && (a.position = "top");
        var l = qa ? "relative" : "absolute", i = ut({
          position: l
        }, q1(a.position));
        return ne(Wd, Me(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return ne(kv, Me(U1, {
        style: {
          zIndex: sn.zIndex
        },
        onAfterEnter: F1,
        onAfterLeave: H1
      }), R1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, jn = function(e) {
  var n = W1(e), r = Ee(ut({}, Di, n));
  r.show = !0, ri || (ri = !0, qd = Qa(Y1).unmountInstance);
  var {
    length: a
  } = mn, t = {
    id: Wl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || qa)
    j1(t);
  else {
    var o = "update-" + Wl;
    G1(r, o);
  }
  return {
    clear() {
      !qa && mn.length ? mn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Ni.forEach((e) => {
  jn[e] = (n) => (ui(n) ? n.type = e : n = {
    content: n,
    type: e
  }, jn(n));
});
jn.install = function(e) {
  e.component(la.name, la);
};
jn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== qa && (mn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), qa = e);
};
jn.clear = function() {
  mn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
jn.setDefaultOptions = function(e) {
  Di = e;
};
jn.resetDefaultOptions = function() {
  Di = Kd;
};
jn.Component = la;
function F1(e) {
  var n = e.getAttribute("data-id"), r = mn.find((a) => a.id === L(n));
  r && $(r.reactiveSnackOptions.onOpened);
}
function H1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = mn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, $(r.reactiveSnackOptions.onClosed));
  var a = mn.every((t) => t.animationEnd);
  a && ($(qd), mn = Ee([]), ri = !1);
}
function j1(e) {
  mn.push(e);
}
function W1(e) {
  return e === void 0 && (e = {}), qe(e) ? {
    content: e
  } : e;
}
function G1(e, n) {
  var [r] = mn;
  r.reactiveSnackOptions = ut({}, r.reactiveSnackOptions, e), r._update = n;
}
function q1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
la.install = function(e) {
  e.component(la.name, la);
};
var tk = la;
const ai = jn;
var Xd = (e) => ["mini", "small", "normal", "large"].includes(e), K1 = (e) => Xd(e) || Ce(e) || xe(e) || qe(e), X1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Z1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), J1 = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: K1
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: X1
  },
  align: {
    type: String,
    validator: Z1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function ln(e) {
  return "calc(" + e + " / 2)";
}
function Q1(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = ln(e) + " " + n + " " + ln(e) + " 0" : i = ln(e) + " 0" : t === "space-around" ? i = ln(e) + " " + ln(n) : t === "space-between" && (o === 0 ? i = ln(e) + " " + ln(n) + " " + ln(e) + " 0" : o === l ? i = ln(e) + " 0 " + ln(e) + " " + ln(n) : i = ln(e) + " " + ln(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: co,
  classes: _1
} = ee("space");
const sa = _({
  name: "VarSpace",
  props: J1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Ce(t) ? t.map(he) : [he(t), he(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = $(r.default)) != null ? t : [], f = Xd(d), [m, p] = a(d, f), y = (P) => {
        var C = [];
        return P.forEach((w) => {
          if (w.type !== $v) {
            if (w.type === Te && Ce(w.children)) {
              w.children.forEach((B) => {
                C.push(B);
              });
              return;
            }
            C.push(w);
          }
        }), C;
      };
      v = y(v);
      var g = v.length - 1, V = v.map((P, C) => {
        var w = Q1(m, p, {
          direction: u,
          justify: l,
          index: C,
          lastIndex: g
        });
        return ne("div", {
          style: {
            margin: w
          }
        }, [P]);
      });
      return ne("div", {
        class: _1(co(), co("$--box"), [o, co("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: It(l),
          alignItems: It(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [V]);
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
var ok = sa, x1 = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: {
    type: String
  },
  inactiveIcon: {
    type: String
  }
}, Zd = Symbol("STEPS_BIND_STEP_KEY"), Jd = Symbol("STEPS_COUNT_STEP_KEY");
function eC() {
  var {
    bindChildren: e,
    childProviders: n
  } = $n(Zd), {
    length: r
  } = Mn(Jd);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function nC() {
  var {
    parentProvider: e,
    bindParent: n
  } = Tn(Zd), {
    index: r
  } = In(Jd);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: rC,
  classes: aC
} = ee("step"), tC = {
  key: 3
};
function oC(e, n) {
  var r = oe("var-icon");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [A(
        "div",
        {
          class: c(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [A(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: q({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (h(), me(
            r,
            {
              key: 0,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (h(), me(
            r,
            {
              key: 1,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (h(), me(
            r,
            {
              key: 2,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (h(), T(
            "span",
            tC,
            re(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [W(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? x("v-if", !0) : (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n(e.direction + "-line")),
          style: q({
            margin: e.lineMargin
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ))],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var Qd = _({
  name: "VarStep",
  components: {
    VarIcon: ke
  },
  props: x1,
  setup() {
    var e = I(null), n = I(""), r = I(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = nC(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = R(() => l.value === a.value), m = R(() => a.value !== -1 && l.value > a.value), p = {
      index: a
    }, y = () => v(a.value), g = (V) => {
      d.value === "horizontal" && (e.value = V);
    };
    return o(p), le(i, (V) => {
      if (r.value = V - 1 === a.value, e.value) {
        var P = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + P + "px";
      }
    }), {
      n: rC,
      classes: aC,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: y,
      getRef: g
    };
  }
});
Qd.render = oC;
const ua = Qd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var ik = ua;
function iC(e) {
  return ["horizontal", "vertical"].includes(e);
}
var lC = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: iC
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: Y()
}, {
  n: sC
} = ee("steps");
function uC(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n()),
      style: q({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var _d = _({
  name: "VarSteps",
  props: lC,
  setup(e) {
    var n = R(() => e.active), r = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      length: o,
      bindStep: l
    } = eC(), i = (u) => {
      $(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: sC
    };
  }
});
_d.render = uC;
const da = _d;
da.install = function(e) {
  e.component(da.name, da);
};
var lk = da, dC = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: vC
} = ee("style-provider"), fC = _({
  name: "VarStyleProvider",
  props: dC,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => _l(e.tag, {
      class: vC(),
      style: ss(e.styleVars)
    }, $(r.default));
  }
});
const va = fC;
var mo = [];
function dt(e) {
  mo.forEach((r) => document.documentElement.style.removeProperty(r)), mo.length = 0;
  var n = ss(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), mo.push(a);
  });
}
dt.Component = va;
va.install = function(e) {
  e.component(va.name, va);
};
dt.install = function(e) {
  e.component(va.name, va);
};
var sk = va, cC = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  loadingColor: {
    type: String
  },
  closeColor: {
    type: String
  },
  size: {
    type: [String, Number]
  },
  rules: {
    type: Array
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: mC,
  classes: pC
} = ee("switch");
function hC(e, n) {
  var r = oe("var-loading"), a = oe("var-form-details"), t = Ae("ripple");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: q(e.styleComputed.switch)
      },
      [A(
        "div",
        {
          style: q(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), we((h(), T(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: q(e.styleComputed.ripple)
        },
        [A(
          "div",
          {
            style: q(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (h(), me(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : x("v-if", !0)],
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), ne(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var xd = _({
  name: "VarSwitch",
  components: {
    VarLoading: Cn,
    VarFormDetails: je
  },
  directives: {
    Ripple: ze
  },
  props: cC,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = pn(), i = () => o(e.rules, e.modelValue), s = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = R(() => {
      var {
        size: p,
        modelValue: y,
        color: g,
        closeColor: V,
        loadingColor: P,
        activeValue: C
      } = e;
      return {
        handle: {
          width: Qe(p),
          height: Qe(p),
          backgroundColor: y === C ? g : V,
          color: P
        },
        ripple: {
          left: y === C ? Qe(p, 0.5) : "-" + Qe(p, 0.5),
          color: y === C ? g : V || "#999",
          width: Qe(p, 2),
          height: Qe(p, 2)
        },
        track: {
          height: Qe(p, 0.72),
          width: Qe(p, 1.9),
          borderRadius: Qe(p, 2 / 3),
          filter: y === C || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: y === C ? g : V
        },
        switch: {
          height: Qe(p, 1.2),
          width: Qe(p, 2)
        }
      };
    }), d = R(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return Qe(p, 0.4);
    }), v = (p) => {
      var {
        onClick: y,
        onChange: g,
        disabled: V,
        loading: P,
        readonly: C,
        modelValue: w,
        activeValue: B,
        inactiveValue: S,
        "onUpdate:modelValue": D
      } = e;
      if ($(y, p), !(V || P || C || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var O = w === B ? S : B;
        $(g, O), $(D, O), s();
      }
    }, f = () => {
      $(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, m = {
      reset: f,
      validate: i,
      resetValidation: l
    };
    return $(n, m), {
      n: mC,
      classes: pC,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
xd.render = hC;
const fa = xd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var uk = fa, gC = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, ev = Symbol("TABS_BIND_TAB_KEY");
function yC() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = mi(ev);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function bC() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ci(ev);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Tt,
  classes: CC
} = ee("tab");
function wC(e, n) {
  var r = Ae("ripple");
  return we((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: q({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var nv = _({
  name: "VarTab",
  directives: {
    Ripple: ze
  },
  props: gC,
  setup(e) {
    var n = I(null), r = R(() => e.name), a = R(() => e.disabled), t = R(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = bC(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: p
    } = l, y = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(y);
    var g = () => {
      var {
        disabled: C,
        name: w
      } = e;
      return C ? f.value : u.value === w || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, V = () => {
      var {
        disabled: C,
        name: w
      } = e;
      return C ? Tt("$-tab--disabled") : u.value === w || u.value === (o == null ? void 0 : o.value) ? Tt("$-tab--active") : Tt("$-tab--inactive");
    }, P = (C) => {
      var {
        disabled: w,
        name: B,
        onClick: S
      } = e;
      w || ($(S, B ?? o.value, C), s(y));
    };
    return le(() => e.name, p), le(() => e.disabled, p), {
      n: Tt,
      classes: CC,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: g,
      computeColorClass: V,
      handleClick: P
    };
  }
});
nv.render = wC;
const ca = nv;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var dk = ca, rv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function SC() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = mi(rv);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function kC() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ci(rv);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var $C = {
  name: {
    type: [String, Number]
  }
}, {
  n: TC,
  classes: OC
} = ee("tab-item");
function PC(e, n) {
  var r = oe("var-swipe-item");
  return h(), me(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [e.initSlot ? W(e.$slots, "default", {
        key: 0
      }) : x("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var av = _({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Un
  },
  props: $C,
  setup(e) {
    var n = I(!1), r = I(!1), a = R(() => e.name), {
      index: t,
      bindTabsItems: o
    } = kC(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: TC,
      classes: OC,
      current: n,
      initSlot: r
    };
  }
});
av.render = PC;
const ma = av;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var vk = ma, VC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: EC,
  classes: MC
} = ee("table");
function IC(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: c(e.n("main"))
      },
      [A(
        "table",
        {
          class: c(e.n("table")),
          style: q({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [W(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var tv = _({
  name: "VarTable",
  props: VC,
  setup() {
    return {
      toSizeUnit: he,
      n: EC,
      classes: MC
    };
  }
});
tv.render = IC;
const pa = tv;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var fk = pa;
function Gl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var BC = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: Gl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: Gl
  },
  fixedBottom: {
    type: Boolean,
    default: !1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  disabledColor: {
    type: String
  },
  color: {
    type: String
  },
  indicatorColor: {
    type: String
  },
  indicatorSize: {
    type: [String, Number]
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Xe(Mt, "cssMode"),
  stickyZIndex: Xe(Mt, "zIndex"),
  offsetTop: Xe(Mt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:active": Y()
};
function ql(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Kl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ql(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ql(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: NC,
  classes: DC
} = ee("tabs");
function AC(e, n) {
  return h(), me(
    Ja(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [A(
        "div",
        Me({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [A(
          "div",
          {
            ref: "scrollerEl",
            class: c(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [W(e.$slots, "default"), A(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: q({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")",
                background: e.indicatorColor || e.activeColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          2
          /* CLASS */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["css-mode", "offset-top", "z-index"]
  );
}
var ov = _({
  name: "VarTabs",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: BC,
  setup(e) {
    var n = I("0px"), r = I("0px"), a = I("0px"), t = I("0px"), o = I(!1), l = I(null), i = R(() => e.active), s = R(() => e.activeColor), u = R(() => e.inactiveColor), d = R(() => e.disabledColor), v = R(() => e.itemDirection), f = I(null), {
      tabList: m,
      bindTabList: p,
      length: y
    } = yC(), g = (M) => {
      var b, k = (b = M.name.value) != null ? b : M.index.value, {
        active: j,
        onChange: Q,
        onClick: F
      } = e;
      $(e["onUpdate:active"], k), $(F, k), k !== j && $(Q, k);
    }, V = () => m.find((M) => {
      var {
        name: b
      } = M;
      return e.active === b.value;
    }), P = (M) => m.find((b) => {
      var {
        index: k
      } = b;
      return (M ?? e.active) === k.value;
    }), C = () => {
      if (y.value !== 0) {
        var {
          active: M
        } = e;
        if (xe(M)) {
          var b = M > y.value - 1 ? y.value - 1 : 0;
          return $(e["onUpdate:active"], b), P(b);
        }
      }
    }, w = () => {
      o.value = m.length >= 5;
    }, B = (M) => {
      var {
        element: b
      } = M, k = b.value;
      k && (e.layoutDirection === "horizontal" ? (n.value = k.offsetWidth + "px", a.value = k.offsetLeft + "px") : (r.value = k.offsetHeight + "px", t.value = k.offsetTop + "px"));
    }, S = (M) => {
      var {
        element: b
      } = M;
      if (o.value) {
        var k = l.value, j = b.value;
        if (e.layoutDirection === "horizontal") {
          var Q = j.offsetLeft + j.offsetWidth / 2 - k.offsetWidth / 2;
          tt(k, {
            left: Q,
            animation: go
          });
        } else {
          var F = j.offsetTop + j.offsetHeight / 2 - k.offsetHeight / 2;
          tt(k, {
            top: F,
            animation: go
          });
        }
      }
    }, D = () => {
      var M = V() || P() || C();
      !M || M.disabled.value || (w(), B(M), S(M));
    }, O = /* @__PURE__ */ function() {
      var M = Kl(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), z = {
      active: i,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: D,
      onTabClick: g
    };
    return p(z), le(() => y.value, /* @__PURE__ */ Kl(function* () {
      yield Pn(), D();
    })), le(() => e.active, D), wa(window, "resize", D), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: l,
      Transition: Be,
      toSizeUnit: he,
      n: NC,
      classes: DC,
      resize: D,
      resizeSticky: O
    };
  }
});
ov.render = AC;
const ha = ov;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var ck = ha, zC = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !1
  },
  "onUpdate:active": Y()
};
function Xl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function LC(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Xl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Xl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: RC
} = ee("tabs-items");
function UC(e, n) {
  var r = oe("var-swipe");
  return h(), me(
    r,
    {
      class: c(e.n()),
      ref: "swipe",
      loop: e.loop,
      touchable: e.canSwipe,
      indicator: !1,
      onChange: e.handleSwipeChange
    },
    {
      default: ve(() => [W(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var iv = _({
  name: "VarTabsItems",
  components: {
    VarSwipe: Rn
  },
  props: zC,
  setup(e) {
    var n = I(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = SC(), o = (f) => r.find((m) => {
      var {
        name: p
      } = m;
      return f === p.value;
    }), l = (f) => r.find((m) => {
      var {
        index: p
      } = m;
      return f === p.value;
    }), i = (f) => o(f) || l(f), s = (f) => {
      var m, p = i(f);
      p && (r.forEach((y) => {
        var {
          setCurrent: g
        } = y;
        return g(!1);
      }), p.setCurrent(!0), (m = n.value) == null || m.to(p.index.value));
    }, u = (f) => {
      var m, p = r.find((g) => {
        var {
          index: V
        } = g;
        return V.value === f;
      }), y = (m = p.name.value) != null ? m : p.index.value;
      $(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ LC(function* () {
      yield Pn(), s(e.active);
    })), {
      swipe: n,
      n: RC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
iv.render = UC;
const ga = iv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var mk = ga;
const YC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, FC = {
  "--badge-default-color": "#555"
}, HC = {
  "--button-default-color": "#303030"
}, jC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, WC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, GC = {
  "--checkbox-unchecked-color": "#fff"
}, qC = {
  "--chip-default-color": "#555"
}, KC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, XC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, ZC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, JC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, QC = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, _C = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, xC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, ew = {
  "--popup-content-background-color": "#1e1e1e"
}, nw = {
  "--pull-refresh-background": "#303030"
}, rw = {
  "--radio-unchecked-color": "#fff"
}, aw = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, tw = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, ow = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, iw = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, lw = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, sw = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, uw = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, dw = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, vw = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, fw = {
  "--tabs-background": "#1e1e1e"
}, cw = {
  "--app-bar-color": "#272727"
}, mw = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, pw = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, hw = {
  "--menu-background-color": "#272727"
}, gw = {
  "--breadcrumb-inactive-color": "#aaa"
}, yw = {
  "--paper-background": "#303030"
}, bw = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ti.apply(this, arguments);
}
const Cw = ti({
  // common
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, HC, WC, jC, dw, XC, ow, fw, sw, ew, ZC, YC, qC, FC, vw, KC, nw, lw, iw, _C, uw, QC, tw, rw, GC, JC, xC, cw, mw, pw, hw, aw, gw, yw, bw);
var ww = {
  dark: Cw
}, pk = null;
const oi = ww;
var vn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], _e = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Zl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function Sw(e) {
  return ["ampm", "24hr"].includes(e);
}
var kw = {
  modelValue: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  format: {
    type: String,
    default: "ampm",
    validator: Sw
  },
  allowedTime: {
    type: Object
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  useSeconds: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  "onUpdate:modelValue": Y(),
  onChange: Y()
}, lv = (e, n) => e === "24hr" || n === "am", Ai = (e, n, r) => {
  var a = vn.findIndex((o) => L(o) === L(r)), t = lv(e, n) ? r : _e[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, rn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, sv = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: l,
    max: i,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = Ai(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: p,
      minute: y
    } = rn(i);
    f = p === v && a > y;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: V
    } = rn(s);
    f = g === v && a < V;
  }
  if (i && s) {
    var {
      hour: P,
      minute: C
    } = rn(i), {
      hour: w,
      minute: B
    } = rn(s);
    f = w === v && a < B || P === v && a > C;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, uv = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: l,
    minute: i,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = Ai(t, o, l), m = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: g,
      second: V
    } = rn(s);
    m = y === f && g < i || g === i && a > V;
  }
  if (!s && u) {
    var {
      hour: P,
      minute: C,
      second: w
    } = rn(u);
    m = P === f && C > i || C === i && a > w;
  }
  if (s && u) {
    var {
      hour: B,
      minute: S,
      second: D
    } = rn(s), {
      hour: O,
      minute: z,
      second: M
    } = rn(u);
    m = B === f && S < i || O === f && z > i || B === f && S === i && a > D || O === f && z === i && a < M;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: $w,
  classes: Tw
} = ee("time-picker");
function Ow(e, n) {
  return h(), T(
    "div",
    {
      class: c(e.n("clock"))
    },
    [A(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: q(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (h(!0), T(
      Te,
      null,
      Ne(e.timeScales, (r, a) => (h(), T(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: q(e.getStyle(a, r, !1))
        },
        re(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), T(
        Te,
        null,
        Ne(e.hours24, (r, a) => (h(), T(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: q(e.getStyle(a, r, !0))
          },
          re(r),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var dv = _({
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean,
      default: !1
    },
    preventNextUpdate: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = I(null), t = I([]), o = I([]), l = R(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = R(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = R(() => e.type === "hour" ? vn : Zl), u = (g, V) => {
      var P;
      g = (P = g) != null ? P : e.type === "minute" ? e.time.minute : e.time.second;
      var C = e.type === "minute" ? sv : uv, w = {
        time: L(g),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return V && e.type === "minute" && Reflect.deleteProperty(w, "minute"), C(w);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var g = e.isInner ? _e[i.value] : s.value[i.value];
      return s.value === Zl ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, V) => V ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (lv(e.format, e.ampm))
          return t.value.includes(g);
        var V = vn.findIndex((P) => P === g);
        return o.value.includes(V);
      }
      return u(g, !0);
    }, m = (g, V, P) => {
      var C = 2 * Math.PI / 12 * g - Math.PI / 2, w = 50 * (1 + Math.cos(C)), B = 50 * (1 + Math.sin(C)), S = () => v(g, P) ? f(V) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: D,
        color: O
      } = S();
      return {
        left: w + "%",
        top: B + "%",
        backgroundColor: D,
        color: O
      };
    }, p = () => {
      var {
        width: g,
        height: V
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: V
      };
    }, y = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? vn : _e;
        return Ca(g[i.value], 2, "0");
      }
    };
    return le([i, () => e.isInner], (g, V) => {
      var [P, C] = g, [w, B] = V, S = P === w && C === B;
      if (!(S || e.type !== "hour" || i.value === void 0)) {
        var D = C ? _e[i.value] : y(), O = e.useSeconds ? ":" + e.time.second : "", z = D + ":" + e.time.minute + O;
        e.preventNextUpdate || r("update", z), r("change-prevent-update");
      }
    }), le(() => e.rad, (g, V) => {
      if (!(e.type === "hour" || g === void 0 || V === void 0)) {
        var P = g / 6 >= 0 ? g / 6 : g / 6 + 60, C = V / 6 >= 0 ? V / 6 : V / 6 + 60;
        if (P !== C) {
          var w, {
            hourStr: B
          } = Ai(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var S = te().minute(P).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            w = B + ":" + S + D;
          }
          if (e.type === "second") {
            var O = te().second(P).format("ss"), z = e.useSeconds ? ":" + O : "";
            w = B + ":" + e.time.minute + z;
          }
          r("update", w);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [V, P, C] = g;
      if (t.value = [], V && !P) {
        var {
          hour: w
        } = rn(V), B = vn.filter((H) => L(H) > w), S = _e.filter((H) => L(H) > w);
        t.value = [...B, ...S];
      }
      if (!V && P) {
        var {
          hour: D
        } = rn(P), O = vn.filter((H) => L(H) < D), z = _e.filter((H) => L(H) < D);
        t.value = [...O, ...z];
      }
      if (V && P) {
        var {
          hour: M
        } = rn(V), {
          hour: b
        } = rn(P), k = vn.filter((H) => L(H) < b || L(H) > M), j = _e.filter((H) => L(H) < b || L(H) > M);
        t.value = [...k, ...j];
      }
      if (C != null && C.hours) {
        var {
          hours: Q
        } = C, F = vn.filter((H) => !Q(L(H))), E = _e.filter((H) => !Q(L(H)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...F, ...E])];
      }
      o.value = t.value.map((H) => _e.findIndex((U) => H === U)).filter((H) => H >= 0);
    }, {
      immediate: !0
    }), {
      n: $w,
      classes: Tw,
      hours24: _e,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: p,
      getStyle: m,
      activeItemIndex: i
    };
  }
});
dv.render = Ow;
const Pw = dv;
var {
  n: Vw,
  classes: Ew
} = ee("time-picker"), Mw = (e) => (Ea(""), e = e(), Ma(), e), Iw = /* @__PURE__ */ Mw(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), Bw = {
  key: 0
};
function Nw(e, n) {
  var r = oe("clock");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [A(
      "div",
      {
        class: c(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          re(e.time.hour),
          3
          /* TEXT, CLASS */
        ), Iw, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          re(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), T("span", Bw, ":")) : x("v-if", !0), e.useSeconds ? (h(), T(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          re(e.time.second),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), A(
      "div",
      {
        class: c(e.n("body"))
      },
      [A(
        "div",
        {
          class: c(e.n("clock-container")),
          onTouchstart: n[5] || (n[5] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchmove: n[6] || (n[6] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchend: n[7] || (n[7] = function() {
            return e.end && e.end(...arguments);
          }),
          ref: "container"
        },
        [ne(
          Be,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(h(), me(
              r,
              {
                key: e.type,
                ref: "inner",
                type: e.type,
                ampm: e.ampm,
                color: e.color,
                "is-inner": e.isInner,
                format: e.format,
                "allowed-time": e.allowedTime,
                rad: e.getRad,
                time: e.time,
                "prevent-next-update": e.isPreventNextUpdate,
                "use-seconds": e.useSeconds,
                max: e.max,
                min: e.min,
                onUpdate: e.update,
                onChangePreventUpdate: e.changePreventUpdate
              },
              null,
              8,
              ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]
            ))]),
            _: 1
            /* STABLE */
          },
          8,
          ["name"]
        )],
        34
        /* CLASS, HYDRATE_EVENTS */
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var vv = _({
  name: "VarTimePicker",
  components: {
    Clock: Pw
  },
  props: kw,
  setup(e) {
    var n = I(null), r = I(null), a = I(null), t = I(!1), o = I(!1), l = I(!1), i = I(!1), s = I(!1), u = I(void 0), d = I(0), v = I(0), f = I("hour"), m = I("am"), p = I(!1), y = I(!1), g = I({
      hour: "00",
      minute: "00",
      second: "00"
    }), V = Ee({
      x: 0,
      y: 0
    }), P = Ee({
      x: [],
      y: []
    }), C = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), w = (N) => {
      $(e["onUpdate:modelValue"], N), $(e.onChange, N);
    }, B = (N) => N * 57.29577951308232, S = (N) => {
      i.value = !1, y.value = !1, f.value = N;
    }, D = (N) => {
      var {
        disableHour: Z
      } = a.value, G = vn.findIndex((ie) => L(ie) === L(g.value.hour)), J = N === "am" ? vn : _e, ae = [...J.slice(G), ...J.slice(0, G)];
      return ae.find((ie, ge) => (o.value = ge !== 0, !Z.includes(ie)));
    }, O = (N) => {
      if (!e.readonly) {
        m.value = N;
        var Z = D(N);
        if (Z) {
          var G = e.useSeconds ? ":" + g.value.second : "", J = Ca(Z, 2, "0") + ":" + g.value.minute + G;
          w(J);
        }
      }
    }, z = (N, Z) => {
      var G = N >= P.x[0] && N <= P.x[1], J = Z >= P.y[0] && Z <= P.y[1];
      return G && J;
    }, M = (N) => {
      var Z = e.format === "24hr" ? "HH" : "hh", {
        hour: G,
        minute: J,
        second: ae
      } = rn(N);
      return {
        hour: te().hour(G).format(Z),
        minute: te().minute(J).format("mm"),
        second: te().second(ae).format("ss")
      };
    }, b = (N) => {
      var Z = N / 30;
      return Z >= 0 ? Z : Z + 12;
    }, k = () => {
      var {
        width: N,
        height: Z
      } = a.value.getSize(), G = V.x - N / 2 - 8, J = V.x + N / 2 + 8, ae = V.y - Z / 2 - 8, ie = V.y + Z / 2 + 8;
      return {
        rangeXMin: G,
        rangeXMax: J,
        rangeYMin: ae,
        rangeYMax: ie
      };
    }, j = (N, Z, G) => {
      var {
        disableHour: J
      } = a.value;
      l.value = z(N, Z);
      var ae = Math.round(G / 30) * 30 + 90, ie = b(ae), ge = t.value ? vn[ie] : _e[ie];
      if (J.includes(ge) || (t.value = e.format === "24hr" ? z(N, Z) : !1), t.value === l.value) {
        var pe = t.value || m.value === "pm" ? _e[ie] : vn[ie];
        p.value = J.includes(pe), !p.value && (u.value = ae, i.value = !0);
      }
    }, Q = (N) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(N / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      y.value = sv(ae), !y.value && (d.value = G, s.value = !0);
    }, F = (N) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(N / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        minute: L(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      uv(ae) || (v.value = G);
    }, E = () => {
      var {
        left: N,
        top: Z,
        width: G,
        height: J
      } = n.value.getBoundingClientRect();
      if (V.x = N + G / 2, V.y = Z + J / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ae,
          rangeXMax: ie,
          rangeYMin: ge,
          rangeYMax: pe
        } = k();
        P.x = [ae, ie], P.y = [ge, pe];
      }
    }, H = (N) => {
      if (N.preventDefault(), !e.readonly) {
        E();
        var {
          clientX: Z,
          clientY: G
        } = N.touches[0], J = Z - V.x, ae = G - V.y, ie = Math.round(B(Math.atan2(ae, J)));
        f.value === "hour" ? j(Z, G, ie) : f.value === "minute" ? Q(ie) : F(ie);
      }
    }, U = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, X = () => {
      o.value = !1;
    };
    return le(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: Z,
          minute: G,
          second: J
        } = rn(N), ae = te().hour(Z).format("hh"), ie = te().hour(Z).format("HH"), ge = te().minute(G).format("mm"), pe = te().second(J).format("ss");
        u.value = (ae === "12" ? 0 : L(ae)) * 30, d.value = L(ge) * 6, v.value = L(pe) * 6, g.value = M(N), e.format !== "24hr" && (m.value = Ca("" + Z, 2, "0") === ie && _e.includes(ie) ? "pm" : "am"), t.value = e.format === "24hr" && _e.includes(ie);
      }
    }, {
      immediate: !0
    }), {
      n: Vw,
      classes: Ew,
      getRad: C,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: H,
      checkPanel: S,
      checkAmpm: O,
      end: U,
      update: w,
      changePreventUpdate: X
    };
  }
});
vv.render = Nw;
const ya = vv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var hk = ya, Dw = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: {
    type: [Number, String]
  },
  maxsize: {
    type: [Number, String]
  },
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: {
    type: Array
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  onBeforeRead: Y(),
  onAfterRead: Y(),
  onBeforeRemove: Y(),
  onRemove: Y(),
  onOversize: Y(),
  "onUpdate:modelValue": Y()
};
function Jl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ql(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Jl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Jl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Aw,
  classes: zw
} = ee("uploader"), Lw = 0, Rw = ["onClick"], Uw = ["onClick"], Yw = ["src", "alt"], Fw = ["multiple", "accept", "capture", "disabled"], Hw = ["src"];
function jw(e, n) {
  var r = oe("var-icon"), a = oe("var-form-details"), t = oe("var-popup"), o = Ae("ripple");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), T(
        Te,
        null,
        Ne(e.files, (l) => we((h(), T(
          "div",
          {
            class: c(e.classes(e.n("file"), e.n("$-elevation--2"), [l.state === "loading", e.n("--loading")])),
            key: l.id,
            onClick: (i) => e.preview(l)
          },
          [A(
            "div",
            {
              class: c(e.n("file-name"))
            },
            re(l.name || l.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (h(), T(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: On((i) => e.handleRemove(l), ["stop"])
            },
            [ne(
              r,
              {
                class: c(e.n("file-close-icon")),
                "var-uploader-cover": "",
                name: "delete"
              },
              null,
              8,
              ["class"]
            )],
            10,
            Uw
          )) : x("v-if", !0), l.cover ? (h(), T(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: q({
                objectFit: l.fit
              }),
              src: l.cover,
              alt: l.name
            },
            null,
            14,
            Yw
          )) : x("v-if", !0), A(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [l.state === "success", e.n("--success")], [l.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          Rw
        )), [[o, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? we((h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [A(
          "input",
          {
            ref: "input",
            type: "file",
            class: c(e.n("action-input")),
            multiple: e.multiple,
            accept: e.accept,
            capture: e.capture,
            disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
            onChange: n[0] || (n[0] = function() {
              return e.handleChange && e.handleChange(...arguments);
            })
          },
          null,
          42,
          Fw
        ), W(e.$slots, "default", {}, () => [ne(
          r,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        )])],
        2
        /* CLASS */
      )), [[o, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }]]) : x("v-if", !0)],
      2
      /* CLASS */
    ), ne(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), ne(
      t,
      {
        class: c(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (l) => e.showPreview = l),
        onClosed: n[3] || (n[3] = (l) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var l, i;
          return [e.currentPreview && e.isHTMLSupportVideo((l = e.currentPreview) == null ? void 0 : l.url) ? (h(), T(
            "video",
            {
              key: 0,
              class: c(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (i = e.currentPreview) == null ? void 0 : i.url
            },
            null,
            10,
            Hw
          )) : x("v-if", !0)];
        }),
        _: 1
        /* STABLE */
      },
      8,
      ["class", "show"]
    )],
    2
    /* CLASS */
  );
}
var fv = _({
  name: "VarUploader",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: ke,
    VarPopup: fn,
    VarFormDetails: je
  },
  props: Dw,
  setup(e) {
    var n = I(null), r = I(!1), a = I(null), t = R(() => {
      var {
        maxlength: F,
        modelValue: {
          length: E
        }
      } = e;
      return xe(F) ? E + " / " + F : "";
    }), {
      form: o,
      bindForm: l
    } = hn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = pn(), v = R(() => {
      var {
        modelValue: F,
        hideList: E
      } = e;
      return E ? [] : F;
    }), f = (F) => {
      var {
        disabled: E,
        readonly: H,
        previewed: U
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || E || H || !U)) {
        var {
          url: X
        } = F;
        if (qe(X) && Fi(X)) {
          Hn(X);
          return;
        }
        qe(X) && Hi(X) && (a.value = F, r.value = !0);
      }
    }, m = (F) => ({
      id: Lw++,
      url: "",
      cover: "",
      name: F.name,
      file: F
    }), p = (F) => {
      var E = F.target, {
        files: H
      } = E;
      return Array.from(H);
    }, y = (F) => new Promise((E) => {
      var H = new FileReader();
      H.onload = () => {
        var U = H.result;
        F.file.type.startsWith("image") && (F.cover = U), F.url = U, E(F);
      }, H.readAsDataURL(F.file);
    }), g = (F) => F.map(y), V = (F) => {
      var {
        onBeforeRead: E
      } = e;
      return F.map((H) => new Promise((U) => {
        E || U({
          valid: !0,
          varFile: H
        });
        var X = $(E, Ee(H));
        X = Ce(X) ? X : [X], Promise.all(X).then((N) => {
          U({
            valid: !N.some((Z) => !Z),
            varFile: H
          });
        });
      }));
    }, P = /* @__PURE__ */ function() {
      var F = Ql(function* (E) {
        var {
          maxsize: H,
          maxlength: U,
          modelValue: X,
          onOversize: N,
          onAfterRead: Z,
          readonly: G,
          disabled: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || G)) {
          var ae = (Le) => Le.filter((un) => un.file.size > L(H) ? ($(N, Ee(un)), !1) : !0), ie = (Le) => {
            var un = Math.min(Le.length, L(U) - X.length);
            return Le.slice(0, un);
          }, ge = p(E), pe = ge.map(m);
          pe = H != null ? ae(pe) : pe, pe = U != null ? ie(pe) : pe;
          var Fe = yield Promise.all(g(pe)), en = yield Promise.all(V(Fe)), on = en.filter((Le) => {
            var {
              valid: un
            } = Le;
            return un;
          }).map((Le) => {
            var {
              varFile: un
            } = Le;
            return un;
          });
          $(e["onUpdate:modelValue"], [...X, ...on]), E.target.value = "", on.forEach((Le) => $(Z, Ee(Le)));
        }
      });
      return function(H) {
        return F.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var F = Ql(function* (E) {
        var {
          disabled: H,
          readonly: U,
          modelValue: X,
          onBeforeRemove: N,
          onRemove: Z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || H || U)) {
          if (N) {
            var G = $(N, Ee(E));
            if (G = Ce(G) ? G : [G], (yield Promise.all(G)).some((ae) => !ae))
              return;
          }
          var J = X.filter((ae) => ae !== E);
          $(Z, Ee(E)), M("onRemove"), $(e["onUpdate:modelValue"], J);
        }
      });
      return function(H) {
        return F.apply(this, arguments);
      };
    }(), w = () => e.modelValue.filter((F) => F.state === "success"), B = () => e.modelValue.filter((F) => F.state === "error"), S = () => e.modelValue.filter((F) => F.state === "loading"), D = () => {
      n.value.click();
    }, O = () => {
      a.value = null, r.value = !1, Hn.close();
    }, z = {
      getSuccess: w,
      getError: B,
      getLoading: S
    }, M = (F) => {
      Ve(() => {
        var {
          validateTrigger: E,
          rules: H,
          modelValue: U
        } = e;
        s(E, F, H, U, z);
      });
    }, b = !1, k = () => u(e.rules, e.modelValue, z), j = () => {
      b = !0, $(e["onUpdate:modelValue"], []), d();
    }, Q = {
      validate: k,
      resetValidation: d,
      reset: j
    };
    return $(l, Q), le(() => e.modelValue, () => {
      !b && M("onChange"), b = !1;
    }, {
      deep: !0
    }), {
      n: Aw,
      classes: zw,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      isHTMLSupportVideo: Hi,
      isHTMLSupportImage: Fi,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: P,
      handleRemove: C,
      getSuccess: w,
      getError: B,
      getLoading: S,
      validate: k,
      resetValidation: d,
      reset: j,
      chooseFile: D,
      closePreview: O
    };
  }
});
fv.render = jw;
const ba = fv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var gk = ba;
const Ww = "2.8.6";
function Gw(e) {
  Sa.install && e.use(Sa), wr.install && e.use(wr), Sr.install && e.use(Sr), kr.install && e.use(kr), $r.install && e.use($r), or.install && e.use(or), Tr.install && e.use(Tr), Or.install && e.use(Or), Pr.install && e.use(Pr), Vr.install && e.use(Vr), Ge.install && e.use(Ge), Er.install && e.use(Er), Mr.install && e.use(Mr), ir.install && e.use(ir), lr.install && e.use(lr), Ir.install && e.use(Ir), sr.install && e.use(sr), Br.install && e.use(Br), Nr.install && e.use(Nr), Dr.install && e.use(Dr), sn.install && e.use(sn), Ar.install && e.use(Ar), zr.install && e.use(zr), Rr.install && e.use(Rr), ka.install && e.use(ka), Ur.install && e.use(Ur), Yr.install && e.use(Yr), Fr.install && e.use(Fr), Ln.install && e.use(Ln), je.install && e.use(je), At.install && e.use(At), ke.install && e.use(ke), Hr.install && e.use(Hr), Hn.install && e.use(Hn), jr.install && e.use(jr), Wr.install && e.use(Wr), cr.install && e.use(cr), ot.install && e.use(ot), Gr.install && e.use(Gr), qr.install && e.use(qr), Cn.install && e.use(Cn), xo.install && e.use(xo), $o.install && e.use($o), Fn.install && e.use(Fn), Kr.install && e.use(Kr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Oa.install && e.use(Oa), fn.install && e.use(fn), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), ze.install && e.use(ze), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), ai.install && e.use(ai), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), Yn.install && e.use(Yn), dt.install && e.use(dt), Rn.install && e.use(Rn), Un.install && e.use(Un), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), oi.install && e.use(oi), ya.install && e.use(ya), vr.install && e.use(vr), ba.install && e.use(ba);
}
const yk = {
  version: Ww,
  install: Gw,
  ActionSheet: Sa,
  AppBar: wr,
  Avatar: Sr,
  AvatarGroup: kr,
  BackTop: $r,
  Badge: or,
  BottomNavigation: Tr,
  BottomNavigationItem: Or,
  Breadcrumb: Pr,
  Breadcrumbs: Vr,
  Button: Ge,
  ButtonGroup: Er,
  Card: Mr,
  Cell: ir,
  Checkbox: lr,
  CheckboxGroup: Ir,
  Chip: sr,
  Col: Br,
  Collapse: Nr,
  CollapseItem: Dr,
  Context: sn,
  Countdown: Ar,
  Counter: zr,
  DatePicker: Rr,
  Dialog: ka,
  Divider: Ur,
  Ellipsis: Yr,
  Fab: Fr,
  Form: Ln,
  FormDetails: je,
  Hover: At,
  Icon: ke,
  Image: Hr,
  ImagePreview: Hn,
  IndexAnchor: jr,
  IndexBar: Wr,
  Input: cr,
  Lazy: ot,
  Link: Gr,
  List: qr,
  Loading: Cn,
  LoadingBar: xo,
  Locale: $o,
  Menu: Fn,
  Option: Kr,
  Overlay: Xr,
  Pagination: Zr,
  Paper: Jr,
  Picker: Oa,
  Popup: fn,
  Progress: Qr,
  PullRefresh: _r,
  Radio: xr,
  RadioGroup: ea,
  Rate: na,
  Result: ra,
  Ripple: ze,
  Row: aa,
  Select: ta,
  Skeleton: oa,
  Slider: ia,
  Snackbar: ai,
  Space: sa,
  Step: ua,
  Steps: da,
  Sticky: Yn,
  StyleProvider: dt,
  Swipe: Rn,
  SwipeItem: Un,
  Switch: fa,
  Tab: ca,
  TabItem: ma,
  Table: pa,
  Tabs: ha,
  TabsItems: ga,
  Themes: oi,
  TimePicker: ya,
  Tooltip: vr,
  Uploader: ba
};
export {
  Sa as ActionSheet,
  wr as AppBar,
  Sr as Avatar,
  kr as AvatarGroup,
  $r as BackTop,
  or as Badge,
  Tr as BottomNavigation,
  Or as BottomNavigationItem,
  Pr as Breadcrumb,
  Vr as Breadcrumbs,
  Ge as Button,
  Er as ButtonGroup,
  Mr as Card,
  ir as Cell,
  lr as Checkbox,
  Ir as CheckboxGroup,
  sr as Chip,
  Br as Col,
  Nr as Collapse,
  Dr as CollapseItem,
  sn as Context,
  Ar as Countdown,
  zr as Counter,
  Rr as DatePicker,
  ka as Dialog,
  Ur as Divider,
  Yr as Ellipsis,
  Fr as Fab,
  Ln as Form,
  je as FormDetails,
  At as Hover,
  ke as Icon,
  Hr as Image,
  Hn as ImagePreview,
  jr as IndexAnchor,
  Wr as IndexBar,
  cr as Input,
  ot as Lazy,
  Gr as Link,
  qr as List,
  Cn as Loading,
  xo as LoadingBar,
  $o as Locale,
  Fn as Menu,
  Kr as Option,
  Xr as Overlay,
  Po as PIXEL,
  Zr as Pagination,
  Jr as Paper,
  Oa as Picker,
  fn as Popup,
  Qr as Progress,
  _r as PullRefresh,
  xr as Radio,
  ea as RadioGroup,
  na as Rate,
  ra as Result,
  ze as Ripple,
  aa as Row,
  Ni as SNACKBAR_TYPE,
  ta as Select,
  oa as Skeleton,
  ia as Slider,
  ai as Snackbar,
  sa as Space,
  ua as Step,
  da as Steps,
  Yn as Sticky,
  dt as StyleProvider,
  Rn as Swipe,
  Un as SwipeItem,
  fa as Switch,
  ca as Tab,
  ma as TabItem,
  pa as Table,
  ha as Tabs,
  ga as TabsItems,
  oi as Themes,
  ya as TimePicker,
  vr as Tooltip,
  ba as Uploader,
  _w as _ActionSheetComponent,
  xw as _AppBarComponent,
  nS as _AvatarComponent,
  rS as _AvatarGroupComponent,
  iS as _BackTopComponent,
  lS as _BadgeComponent,
  sS as _BottomNavigationComponent,
  uS as _BottomNavigationItemComponent,
  dS as _BreadcrumbComponent,
  vS as _BreadcrumbsComponent,
  oS as _ButtonComponent,
  fS as _ButtonGroupComponent,
  cS as _CardComponent,
  mS as _CellComponent,
  hS as _CheckboxComponent,
  gS as _CheckboxGroupComponent,
  yS as _ChipComponent,
  bS as _ColComponent,
  CS as _CollapseComponent,
  wS as _CollapseItemComponent,
  Kw as _ContextComponent,
  SS as _CountdownComponent,
  kS as _CounterComponent,
  $S as _DatePickerComponent,
  TS as _DialogComponent,
  OS as _DividerComponent,
  VS as _EllipsisComponent,
  ES as _FabComponent,
  MS as _FormComponent,
  pS as _FormDetailsComponent,
  tS as _HoverComponent,
  Jw as _IconComponent,
  IS as _ImageComponent,
  DS as _ImagePreviewComponent,
  zS as _IndexAnchorComponent,
  LS as _IndexBarComponent,
  RS as _InputComponent,
  eS as _LazyComponent,
  US as _LinkComponent,
  YS as _ListComponent,
  FS as _LoadingBarComponent,
  aS as _LoadingComponent,
  Qw as _LocaleComponent,
  HS as _MenuComponent,
  jS as _OptionComponent,
  WS as _OverlayComponent,
  GS as _PaginationComponent,
  qS as _PaperComponent,
  KS as _PickerComponent,
  Zw as _PopupComponent,
  XS as _ProgressComponent,
  ZS as _PullRefreshComponent,
  JS as _RadioComponent,
  QS as _RadioGroupComponent,
  _S as _RateComponent,
  xS as _ResultComponent,
  Xw as _RippleComponent,
  ek as _RowComponent,
  nk as _SelectComponent,
  rk as _SkeletonComponent,
  ak as _SliderComponent,
  tk as _SnackbarComponent,
  ok as _SpaceComponent,
  ik as _StepComponent,
  lk as _StepsComponent,
  AS as _StickyComponent,
  sk as _StyleProviderComponent,
  BS as _SwipeComponent,
  NS as _SwipeItemComponent,
  uk as _SwitchComponent,
  dk as _TabComponent,
  vk as _TabItemComponent,
  fk as _TableComponent,
  ck as _TabsComponent,
  mk as _TabsItemsComponent,
  pk as _ThemesComponent,
  hk as _TimePickerComponent,
  PS as _TooltipComponent,
  gk as _UploaderComponent,
  of as actionSheetProps,
  yi as add,
  hf as appBarProps,
  Ff as avatarGroupProps,
  Af as avatarProps,
  pc as backTopProps,
  wc as badgeProps,
  Ic as bottomNavigationItemProps,
  Tc as bottomNavigationProps,
  Lc as breadcrumbProps,
  jc as breadcrumbsProps,
  rc as buttonProps,
  em as cardProps,
  im as cellProps,
  km as checkboxGroupProps,
  pm as checkboxProps,
  Em as chipProps,
  Am as colProps,
  Gm as collapseItemProps,
  Fm as collapseProps,
  Zm as countdownProps,
  Gp as counterProps,
  fh as datePickerProps,
  yk as default,
  Ue as defaultLazyOptions,
  Eh as dialogProps,
  Lh as dividerProps,
  ys as enUS,
  dm as formDetailsProps,
  sy as formProps,
  hs as iconProps,
  ks as imageCache,
  My as imagePreviewProps,
  cy as imageProps,
  Yy as indexAnchorProps,
  Wy as indexBarProps,
  Jy as inputProps,
  Gw as install,
  tb as linkProps,
  sb as listProps,
  cb as loadingBarProps,
  nr as loadingProps,
  Tb as menuProps,
  Cs as merge,
  Ib as optionProps,
  Ab as overlayProps,
  He as pack,
  bs as packs,
  Lb as paginationProps,
  Hb as paperProps,
  qb as pickerProps,
  mt as popupProps,
  e0 as progressProps,
  l0 as pullRefreshProps,
  y0 as radioGroupProps,
  v0 as radioProps,
  S0 as rateProps,
  O0 as resultProps,
  f1 as rowProps,
  g1 as selectProps,
  w1 as skeletonProps,
  O1 as sliderProps,
  Hd as snackbarProps,
  J1 as spaceProps,
  x1 as stepProps,
  lC as stepsProps,
  Mt as stickyProps,
  dC as styleProviderProps,
  rd as swipeProps,
  cC as switchProps,
  $C as tabItemProps,
  gC as tabProps,
  VC as tableProps,
  zC as tabsItemsProps,
  BC as tabsProps,
  kw as timePickerProps,
  Zg as tooltipProps,
  Dw as uploaderProps,
  bi as use,
  gi as useLocale,
  Ww as version,
  hi as zhCN
};
