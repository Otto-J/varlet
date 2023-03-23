import { reactive as Ee, onMounted as Xt, nextTick as Ie, onActivated as Ja, isRef as hv, watch as le, onBeforeUnmount as Kt, onDeactivated as wr, unref as ja, inject as gv, getCurrentInstance as Ba, computed as H, provide as yv, isVNode as pt, ref as M, Comment as bv, Fragment as Oe, createApp as wv, h as rs, onBeforeMount as Cv, onUnmounted as Qa, defineComponent as ne, createVNode as J, Teleport as Ea, Transition as De, withDirectives as we, vShow as hr, mergeProps as Ve, openBlock as h, createBlock as ge, resolveDynamicComponent as _a, normalizeClass as c, normalizeStyle as G, resolveComponent as oe, resolveDirective as Me, withCtx as fe, createElementVNode as z, renderSlot as j, toDisplayString as ae, createElementBlock as O, renderList as ze, createCommentVNode as ee, onUpdated as Zt, createTextVNode as be, pushScopeId as Ia, popScopeId as Na, withModifiers as En, normalizeProps as fi, guardReactiveProps as as, vModelText as Sv, toRefs as kv, withKeys as Fi, toRaw as Hi, TransitionGroup as $v } from "vue";
var ts = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, QC = Ee(ts);
const fn = Ee(ts), Ge = (e) => typeof e == "string", So = (e) => typeof e == "boolean", nn = (e) => typeof e == "number", ci = (e) => Object.prototype.toString.call(e) === "[object Object]", Tv = (e) => typeof e == "object" && e !== null, mi = (e) => typeof e == "function", Ce = (e) => Array.isArray(e), Pv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Rn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ge(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : So(e) ? Number(e) : e, zt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, pi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, ht = () => typeof window < "u", Yi = (e) => [...new Set(e)], os = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Ov = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Vv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var ji = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Wi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Mv = (e) => {
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
      this.has(r) && zt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, ko = (e) => e, Gi = (e) => Math.pow(e, 3), is = (e) => e < 0.5 ? Gi(e * 2) / 2 : 1 - Gi((1 - e) * 2) / 2, Jt = (e, n) => e ?? n, ls = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, ka = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function qi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Bv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        qi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        qi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Ev(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Xi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Qt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function hi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Iv(e) {
  return $o.apply(this, arguments);
}
function $o() {
  return $o = Bv(function* (e) {
    yield In();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: o,
      innerHeight: i
    } = window, l = a <= o && t >= 0, s = n <= i && r >= 0;
    return l && s;
  }), $o.apply(this, arguments);
}
function po(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Da(e) {
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
    r = Da(r), n.push(r);
  return n;
}
function ss(e, n) {
  if (Ge(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (Tv(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var us = (e) => Ge(e) && e.endsWith("rem"), Dv = (e) => Ge(e) && e.endsWith("px") || nn(e), Av = (e) => Ge(e) && e.endsWith("%"), ds = (e) => Ge(e) && e.endsWith("vw"), vs = (e) => Ge(e) && e.endsWith("vh"), zv = (e) => Ge(e) && e.startsWith("calc("), Lv = (e) => Ge(e) && e.startsWith("var("), Le = (e) => {
  if (nn(e))
    return e;
  if (Dv(e))
    return +e.replace("px", "");
  if (ds(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (vs(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (us(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ge(e) ? L(e) : 0;
}, me = (e) => {
  if (e != null)
    return Av(e) || ds(e) || vs(e) || us(e) || zv(e) || Lv(e) ? e : Le(e) + "px";
}, xe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = me(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function hn(e) {
  var n = ls();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Ki(e) {
  var n = ls();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function _t(e) {
  hn(() => {
    hn(e);
  });
}
function In() {
  return new Promise((e) => {
    hn(() => {
      hn(e);
    });
  });
}
function Rv() {
  return new Promise((e) => {
    hn(e);
  });
}
function st(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, i = Date.now(), l = Qt(e), s = hi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - i) / t;
      if (v < 1) {
        var f = l + (r - l) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), hn(d);
      } else
        e.scrollTo(a, r), u();
    };
    hn(d);
  });
}
function fs(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Ov(a);
    return n[o] = t, n;
  }, {});
}
function Uv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Lt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function sn(e) {
  let n = !1;
  Xt(() => {
    e(), Ie(() => {
      n = !0;
    });
  }), Ja(() => {
    n && e();
  });
}
function $a(e, n, r, a = {}) {
  if (!ht())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let i = !1, l = !1;
  const s = (f) => {
    if (i || l)
      return;
    const m = ja(f);
    m && (m.addEventListener(n, r, {
      passive: t,
      capture: o
    }), i = !0);
  }, u = (f) => {
    if (!i || l)
      return;
    const m = ja(f);
    m && (m.removeEventListener(n, r, {
      capture: o
    }), i = !1);
  };
  let d;
  hv(e) && (d = le(() => e.value, (f, m) => {
    u(m), s(f);
  }));
  const v = () => {
    d == null || d(), u(e), l = !0;
  };
  return sn(() => {
    s(e);
  }), Kt(() => {
    u(e);
  }), wr(() => {
    u(e);
  }), v;
}
function cs(e, n, r) {
  if (!ht())
    return;
  $a(document, n, (t) => {
    const o = ja(e);
    o && !o.contains(t.target) && r(t);
  });
}
var Fv = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function Hv(e) {
  const n = Ba();
  return e in n.provides;
}
function un(e) {
  if (!Hv(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = gv(e), { childInstances: r, collect: a, clear: t } = n, o = Fv(n, ["childInstances", "collect", "clear"]), i = Ba();
  return {
    index: H(() => r.indexOf(i)),
    parentProvider: o,
    bindParent: (u) => {
      Xt(() => {
        Ie().then(() => {
          a(i, u);
        });
      }), Kt(() => {
        Ie().then(() => {
          t(i, u);
        });
      });
    }
  };
}
function Yv(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      pt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function dn(e) {
  const n = Ba(), r = Ee([]), a = [], t = H(() => r.length), o = () => {
    const u = Yv(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, i = (u, d) => {
    r.push(u), a.push(d), o();
  }, l = (u, d) => {
    zt(r, u), zt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      yv(e, Object.assign({
        childInstances: r,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function ms(e, n, r = {}) {
  const a = Ba(), { passive: t = !0, eventName: o, defaultValue: i, emit: l = a == null ? void 0 : a.emit } = r, s = o ?? `update:${n.toString()}`, u = () => e[n] != null ? e[n] : i;
  if (!t)
    return H({
      get() {
        return u();
      },
      set(v) {
        l(s, v);
      }
    });
  const d = M(u());
  return le(() => e[n], () => {
    d.value = u();
  }), le(() => d.value, (v) => {
    l(s, v);
  }), d;
}
function Zi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ji(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Zi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Zi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
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
function Je(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function jv(e) {
  var n = wv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function xa(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => rs(e, To({}, n, r));
    }
  }, {
    unmount: t
  } = jv(a);
  return {
    unmountInstance: t
  };
}
function ps(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== bv) {
      if (r.type === Oe && Ce(r.children)) {
        r.children.forEach((a) => {
          n.push(a);
        });
        return;
      }
      n.push(r);
    }
  }), n;
}
function wn() {
  var e = M(""), n = /* @__PURE__ */ function() {
    var t = Ji(function* (o, i, l) {
      if (!Ce(o) || !o.length)
        return !0;
      var s = yield Promise.all(o.map((u) => u(i, l)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(i, l, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = Ji(function* (o, i, l, s, u) {
      o.includes(i) && (yield n(l, s, u)) && (e.value = "");
    });
    return function(i, l, s, u, d) {
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
function Wv(e) {
  $a(window, "hashchange", e), $a(window, "popstate", e);
}
function xt() {
  var e = M(!1);
  return Ja(() => {
    e.value = !1;
  }), wr(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function re(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    return i.map((s) => {
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
function P(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (Ce(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function U(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function Cn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), "var-elevation--" + e);
}
function Rt() {
  return Rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Rt.apply(this, arguments);
}
var {
  n: hs
} = re("ripple"), Qi = 250;
function Gv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function qv(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: o
  } = e, i = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, l = i * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - i * 2) / 2, v = (o - i * 2) / 2, f = s - i, m = u - i;
  return {
    x: f,
    y: m,
    centerX: d,
    centerY: v,
    size: l
  };
}
function gs(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: i,
        size: l
      } = qv(this, e), s = document.createElement("div");
      s.classList.add(hs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Gv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Po() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + hs());
    if (r.length) {
      var a = r[r.length - 1], t = Qi - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Qi);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 30) : n();
}
function ys() {
  var e = this._ripple;
  Uv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Xv(e, n) {
  var r, a, t;
  e._ripple = Rt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : fn.touchmoveForbid,
    removeRipple: Po.bind(e)
  }), e.addEventListener("touchstart", gs, {
    passive: !0
  }), e.addEventListener("touchmove", ys, {
    passive: !0
  }), e.addEventListener("dragstart", Po, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Kv(e) {
  e.removeEventListener("touchstart", gs), e.removeEventListener("touchmove", ys), e.removeEventListener("dragstart", Po), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Zv(e, n) {
  var r, a, t, o, i, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : fn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((i = e._ripple) == null ? void 0 : i.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = Rt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var bs = {
  mounted: Xv,
  unmounted: Kv,
  updated: Zv,
  install(e) {
    e.directive("ripple", this);
  }
}, _C = bs;
const Re = bs;
function Jv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var gt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Jv
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOverlay: U(),
  "onUpdate:show": U(),
  // internal for Dialog
  onRouteChange: U()
};
function ws() {
  var e = Object.keys(fn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function St(e) {
  fn.locks[e] = 1, ws();
}
function kt(e) {
  delete fn.locks[e], ws();
}
function eo(e, n) {
  var {
    uid: r
  } = Ba();
  n && le(n, (a) => {
    a === !1 ? kt(r) : a === !0 && e() === !0 && St(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? St(r) : kt(r));
  }), Cv(() => {
    n && n() === !1 || e() === !0 && St(r);
  }), Qa(() => {
    n && n() === !1 || e() === !0 && kt(r);
  }), Ja(() => {
    n && n() === !1 || e() === !0 && St(r);
  }), wr(() => {
    n && n() === !1 || e() === !0 && kt(r);
  });
}
function yt(e, n) {
  var r = M(fn.zIndex);
  return le(e, (a) => {
    a && (fn.zIndex += n, r.value = fn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
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
function Qv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pt(e);
}
var {
  n: Ln,
  classes: ho
} = re("popup");
const gn = ne({
  name: "VarPopup",
  inheritAttrs: !1,
  props: gt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = yt(() => e.show, 3), {
      disabled: o
    } = xt(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      P(v), d && P(e["onUpdate:show"], !1);
    };
    eo(() => e.show, () => e.lockScroll), le(() => e.show, (d) => {
      P(d ? e.onOpen : e.onClose);
    }), Wv(() => P(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return J("div", {
        class: ho(Ln("overlay"), d),
        style: Oo({
          zIndex: t.value - 1
        }, v),
        onClick: i
      }, null);
    }, s = () => J("div", Ve({
      class: ho(Ln("content"), Ln("--" + e.position), [e.defaultStyle, Ln("--content-background-color")], [e.defaultStyle, Ln("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [P(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: p,
        position: b
      } = e;
      return J(De, {
        name: Ln("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [we(J("div", {
          class: ho(Ln("$--box"), Ln()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && l(), J(De, {
          name: p || Ln("$-pop-" + b)
        }, {
          default: () => [f && s()]
        })]), [[hr, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return J(Ea, {
          to: d,
          disabled: o.value
        }, Qv(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
gn.install = function(e) {
  e.component(gn.name, gn);
};
var xC = gn, Cs = {
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
  onClick: U()
};
function _i(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function _v(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        _i(o, a, t, i, l, "next", s);
      }
      function l(s) {
        _i(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: xv,
  classes: ef
} = re("icon");
function nf(e, n) {
  return h(), ge(
    _a(e.isURL(e.name) ? "img" : "i"),
    {
      class: c(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
      style: G({
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
var Ss = ne({
  name: "VarIcon",
  props: Cs,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = _v(function* (o, i) {
        var {
          transition: l
        } = e;
        if (i == null || L(l) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Ie(), setTimeout(() => {
          i != null && (n.value = o), r.value = !1;
        }, L(l));
      });
      return function(i, l) {
        return t.apply(this, arguments);
      };
    }();
    return le(() => e.name, a, {
      immediate: !0
    }), {
      n: xv,
      classes: ef,
      nextName: n,
      animateInProgress: r,
      isURL: Pv,
      toNumber: L,
      toSizeUnit: me
    };
  }
});
Ss.render = nf;
const $e = Ss;
$e.install = function(e) {
  e.component($e.name, $e);
};
var eS = $e;
function Vo() {
  return Vo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Vo.apply(this, arguments);
}
var rf = Vo({
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
  onSelect: U(),
  "onUpdate:show": U()
}, Je(gt, [
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
const gi = {
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
}, ks = {
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
function Mo() {
  return Mo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Mo.apply(this, arguments);
}
function yi() {
  var e = {}, n = M({}), r = (o, i) => {
    i.lang = o, e[o] = i;
  }, a = (o) => {
    if (!e[o])
      return console.warn("The " + o + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[o];
  }, t = (o, i) => {
    if (!e[o]) {
      console.warn("The " + o + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[o] = Mo({}, e[o], i), a(o);
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
  packs: $s,
  pack: Ye,
  add: bi,
  use: wi,
  merge: Ts
} = yi();
bi("zh-CN", gi);
wi("zh-CN");
var nS = {
  zhCN: gi,
  enUS: ks,
  packs: $s,
  pack: Ye,
  add: bi,
  use: wi,
  merge: Ts,
  useLocale: yi
};
const Bo = {
  zhCN: gi,
  enUS: ks,
  packs: $s,
  pack: Ye,
  add: bi,
  use: wi,
  merge: Ts,
  useLocale: yi
};
var {
  n: af,
  classes: tf
} = re("action-sheet"), of = ["onClick"];
function lf(e, n) {
  var r = oe("var-icon"), a = oe("var-popup"), t = Me("ripple");
  return h(), ge(
    a,
    Ve({
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
      default: fe(() => [z(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [j(e.$slots, "title", {}, () => [z(
          "div",
          {
            class: c(e.n("title"))
          },
          ae(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), j(e.$slots, "actions", {}, () => [(h(!0), O(
          Oe,
          null,
          ze(e.actions, (o) => we((h(), O(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: G({
                color: o.color
              }),
              onClick: (i) => e.handleSelect(o)
            },
            [o.icon ? (h(), ge(
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
            )) : ee("v-if", !0), z(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ae(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            of
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
var Ps = ne({
  name: "VarActionSheet",
  directives: {
    Ripple: Re
  },
  components: {
    VarPopup: gn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: rf,
  setup(e) {
    var n = M(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: i
        } = e;
        P(i, t), o && P(e["onUpdate:show"], !1);
      }
    }, a = (t) => P(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: af,
      classes: tf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ye,
      dt: Jt,
      handleSelect: r
    };
  }
});
Ps.render = lf;
const or = Ps;
function Eo() {
  return Eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Eo.apply(this, arguments);
}
var xn, Ci = {};
function sf(e) {
  return e === void 0 && (e = {}), Eo({}, Ci, e);
}
function Ta(e) {
  return ht() ? new Promise((n) => {
    Ta.close();
    var r = Ee(sf(e));
    r.teleport = "body", xn = r;
    var {
      unmountInstance: a
    } = xa(or, r, {
      onSelect: (t) => {
        P(r.onSelect, t), n(t);
      },
      onClose: () => {
        P(r.onClose), n("close");
      },
      onClosed: () => {
        P(r.onClosed), a(), xn === r && (xn = null);
      },
      onRouteChange: () => {
        a(), xn === r && (xn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
function uf(e) {
  Ci = e;
}
function df() {
  Ci = {};
}
function vf() {
  if (xn != null) {
    var e = xn;
    xn = null, Ie().then(() => {
      e.show = !1;
    });
  }
}
Ta.Component = or;
or.install = function(e) {
  e.component(or.name, or);
};
Ta.install = function(e) {
  e.component(or.name, or);
};
Object.assign(Ta, {
  setDefaultOptions: uf,
  resetDefaultOptions: df,
  close: vf
});
var rS = or;
function ff(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var cf = {
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
    validator: ff
  },
  elevation: {
    type: [Boolean, String, Number],
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
  n: mf,
  classes: pf
} = re("app-bar");
function hf(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: G(e.rootStyles)
    },
    [z(
      "div",
      {
        class: c(e.n("toolbar"))
      },
      [z(
        "div",
        {
          class: c(e.n("left"))
        },
        [j(e.$slots, "left"), e.titlePosition === "left" ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingLeft: e.paddingLeft
            })
          },
          [j(e.$slots, "default", {}, () => [be(
            ae(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [j(e.$slots, "default", {}, () => [be(
          ae(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0), z(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingRight: e.paddingRight
            })
          },
          [j(e.$slots, "default", {}, () => [be(
            ae(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0), j(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), j(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var Os = ne({
  name: "VarAppBar",
  props: cf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, i = H(() => {
      var {
        image: l,
        color: s,
        textColor: u,
        imageLinearGradient: d
      } = e;
      if (l != null) {
        var v = d ? "linear-gradient(" + d + "), " : "";
        return {
          "background-image": v + "url(" + l + ")",
          "background-position": "center center",
          "background-size": "cover"
        };
      }
      return {
        background: s,
        color: u
      };
    });
    return sn(o), Zt(o), {
      n: mf,
      classes: pf,
      formatElevation: Cn,
      rootStyles: i,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Os.render = hf;
const $r = Os;
$r.install = function(e) {
  e.component($r.name, $r);
};
var aS = $r;
function xi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function no(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        xi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        xi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Io() {
  return Io = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Io.apply(this, arguments);
}
var gf = "background-image", yf = "lazy-loading", bf = "lazy-error", el = "lazy-attempt", wf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], No = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Wa = [], Ut = [], Vs = Mv(100), Fe = {
  loading: No,
  error: No,
  attempt: 3,
  throttleWait: 300,
  events: wf
}, Si = pi(bt, Fe.throttleWait);
function ro(e, n) {
  e._lazy.arg === gf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Cf(e) {
  e._lazy.loading && ro(e, e._lazy.loading), bt();
}
function Sf(e) {
  e._lazy.error && ro(e, e._lazy.error), e._lazy.state = "error", $i(e), bt();
}
function Ms(e, n) {
  ro(e, n), e._lazy.state = "success", $i(e), bt();
}
function kf(e) {
  var n;
  Ut.includes(e) || (Ut.push(e), (n = Fe.events) == null || n.forEach((r) => {
    e.addEventListener(r, Si, {
      passive: !0
    });
  }));
}
function $f() {
  Ut.forEach((e) => {
    var n;
    (n = Fe.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Si);
    });
  }), Ut.length = 0;
}
function Tf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(yf)) != null ? r : Fe.loading,
    error: (a = e.getAttribute(bf)) != null ? a : Fe.error,
    attempt: e.getAttribute(el) ? Number(e.getAttribute(el)) : Fe.attempt
  };
  e._lazy = Io({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), ro(e, No), P(Fe.filter, e._lazy);
}
function Pf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Vs.add(n), Ms(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Sf(e) : Bs(e);
  });
}
function Bs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Vs.has(n)) {
      Ms(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Cf(e), Pf(e, n);
  }
}
function ki(e) {
  return Do.apply(this, arguments);
}
function Do() {
  return Do = no(function* (e) {
    (yield Iv(e)) && Bs(e);
  }), Do.apply(this, arguments);
}
function bt() {
  Wa.forEach((e) => ki(e));
}
function Of(e) {
  return Ao.apply(this, arguments);
}
function Ao() {
  return Ao = no(function* (e) {
    !Wa.includes(e) && Wa.push(e), Nv(e).forEach(kf), yield ki(e);
  }), Ao.apply(this, arguments);
}
function $i(e) {
  zt(Wa, e), Wa.length === 0 && $f();
}
function Vf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Es(e, n) {
  return zo.apply(this, arguments);
}
function zo() {
  return zo = no(function* (e, n) {
    Tf(e, n), yield Of(e);
  }), zo.apply(this, arguments);
}
function Mf(e, n) {
  return Lo.apply(this, arguments);
}
function Lo() {
  return Lo = no(function* (e, n) {
    if (!Vf(e, n)) {
      Wa.includes(e) && (yield ki(e));
      return;
    }
    yield Es(e, n);
  }), Lo.apply(this, arguments);
}
function Bf(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: i
  } = e;
  Fe.events = n ?? Fe.events, Fe.loading = r ?? Fe.loading, Fe.error = a ?? Fe.error, Fe.attempt = t ?? Fe.attempt, Fe.throttleWait = o ?? Fe.throttleWait, Fe.filter = i;
}
var Is = {
  mounted: Es,
  unmounted: $i,
  updated: Mf,
  install(e, n) {
    Bf(n), Si = pi(bt, Fe.throttleWait), e.directive("lazy", this);
  }
}, tS = Is;
const ut = Is;
function Ef(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Ns = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ds(e) {
  return Ns(e) || nn(e) || Ge(e);
}
var If = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Ds,
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
    validator: Ef,
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
  onClick: U(),
  onLoad: U(),
  onError: U()
}, {
  n: Nf,
  classes: Df
} = re("avatar"), Af = ["src", "lazy-loading", "lazy-error"], zf = ["src"];
function Lf(e, n) {
  var r = Me("lazy");
  return h(), O(
    "div",
    {
      ref: "avatarElement",
      class: c(e.classes(e.n(), e.n("$--box"), [e.internalSizeValidator(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: G({
        width: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (h(), O(
      Oe,
      {
        key: 0
      },
      [e.lazy ? we((h(), O(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          src: e.src,
          style: G({
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
        Af
      )), [[r, e.src]]) : (h(), O(
        "img",
        {
          key: 1,
          class: c(e.n("image")),
          src: e.src,
          style: G({
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
        zf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (h(), O(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: G({
          transform: "scale(" + e.scale + ")"
        })
      },
      [j(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var As = ne({
  name: "VarAvatar",
  directives: {
    Lazy: ut
  },
  props: If,
  setup(e) {
    var n = M(null), r = M(null), a = M(1), t = () => {
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
      d ? (u._lazy.state === "success" && P(v, s), u._lazy.state === "error" && P(f, s)) : P(v, s);
    }, i = (s) => {
      P(e.onError, s);
    }, l = (s) => {
      P(e.onClick, s);
    };
    return sn(t), Zt(t), {
      internalSizeValidator: Ns,
      sizeValidator: Ds,
      toSizeUnit: me,
      n: Nf,
      classes: Df,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: i,
      handleClick: l
    };
  }
});
As.render = Lf;
const Tr = As;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var oS = Tr, Rf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Uf,
  classes: Ff
} = re("avatar-group");
function Hf(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: G(e.rootStyles)
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var zs = ne({
  name: "VarAvatarGroup",
  props: Rf,
  setup(e) {
    var n = H(() => e.offset == null ? {} : {
      "--avatar-group-offset": me(e.offset)
    });
    return {
      n: Uf,
      classes: Ff,
      toSizeUnit: me,
      rootStyles: n
    };
  }
});
zs.render = Hf;
const Pr = zs;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var iS = Pr;
function Yf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function jf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var rr = {
  type: {
    type: String,
    default: "circle",
    validator: Yf
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: jf
  },
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
  n: Wf,
  classes: Gf
} = re("loading"), qf = (e) => (Ia(""), e = e(), Na(), e), Xf = /* @__PURE__ */ qf(() => /* @__PURE__ */ z(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ z("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), Kf = [Xf];
function Zf(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [j(e.$slots, "default"), e.loading ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.isShow ? (h(), O(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [z(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: G({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Kf,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : ee("v-if", !0), (h(!0), O(
        Oe,
        null,
        ze(e.loadingTypeDict, (r, a) => (h(), O(
          Oe,
          {
            key: a
          },
          [e.type === a ? (h(), O(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), O(
              Oe,
              null,
              ze(r, (t) => (h(), O(
                "div",
                {
                  key: t + a,
                  style: G({
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
          )) : ee("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (h(), O(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: G({
            color: e.color
          })
        },
        [j(e.$slots, "description", {}, () => [be(
          ae(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ls = ne({
  name: "VarLoading",
  props: rr,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = H(() => P(r.default) ? e.loading : !0);
    return {
      n: Wf,
      classes: Gf,
      multiplySizeUnit: xe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Ls.render = Zf;
const On = Ls;
On.install = function(e) {
  e.component(On.name, On);
};
var lS = On, Jf = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Qf,
  classes: _f
} = re("hover-overlay");
function xf(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var Rs = ne({
  name: "VarHoverOverlay",
  props: Jf,
  setup() {
    return {
      n: Qf,
      classes: _f
    };
  }
});
Rs.render = xf;
const on = Rs;
on.install = function(e) {
  e.component(on.name, on);
};
function gr() {
  var e = M(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var sS = on;
function Us(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function ec(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((i) => i.trim());
    return r[os(t)] = o, r;
  }, {}) : {};
}
function nc(e) {
  var {
    value: n
  } = e._hover, r = ec(e);
  Object.keys(n).forEach((a) => {
    var t = os(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Ti(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function rc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function Fs(e) {
  rc(e), Ti(e, e._hover.rawStyle);
}
function Hs() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, mi(e)) {
    e(this._hover.hovering);
    return;
  }
  Ti(this, e);
}
function Ys() {
  if (this._hover.hovering = !1, mi(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Fs(this);
}
function js(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Us(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, nc(e), e.addEventListener("mouseenter", Hs), e.addEventListener("mouseleave", Ys));
}
function Ws(e, n) {
  Us(n.arg) || (Fs(e), e.removeEventListener("mouseenter", Hs), e.removeEventListener("mouseleave", Ys));
}
function ac(e, n) {
  Ws(e, n);
}
function tc(e, n) {
  return !mi(n.value) && e._hover.hovering;
}
function oc(e, n) {
  js(e, n), tc(e, n) && Ti(e, n.value);
}
var Gs = {
  mounted: js,
  unmounted: Ws,
  beforeUpdate: ac,
  updated: oc,
  install(e) {
    e.directive("hover", this);
  }
}, uS = Gs;
const Nn = Gs;
function Ro() {
  return Ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ro.apply(this, arguments);
}
function qs(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ic(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function lc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var sc = {
  type: {
    type: String,
    validator: qs
  },
  nativeType: {
    type: String,
    default: "button",
    validator: lc
  },
  size: {
    type: String,
    validator: ic
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
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  autoLoading: {
    type: Boolean,
    default: !1
  },
  loadingRadius: {
    type: [Number, String]
  },
  loadingType: Je(rr, "type"),
  loadingSize: Je(rr, "size"),
  loadingColor: Ro({}, Je(rr, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, Xs = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function uc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(Xs);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function dc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = un(Xs);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: vc,
  classes: fc
} = re("button"), cc = ["type", "disabled"];
function mc(e, n) {
  var r = oe("var-loading"), a = oe("var-hover-overlay"), t = Me("ripple"), o = Me("hover");
  return we((h(), O(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.states.elevation], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
      style: G({
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
    [e.loading || e.pending ? (h(), ge(
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
    )) : ee("v-if", !0), z(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), J(
      a,
      {
        hovering: e.hovering
      },
      null,
      8,
      ["hovering"]
    )],
    46,
    cc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var Ks = ne({
  name: "VarButton",
  components: {
    VarLoading: On,
    VarHoverOverlay: on
  },
  directives: {
    Ripple: Re,
    Hover: Nn
  },
  props: sc,
  setup(e) {
    var n = M(!1), {
      buttonGroup: r
    } = dc(), {
      hovering: a,
      handleHovering: t
    } = gr(), o = H(() => {
      if (!r)
        return {
          elevation: Cn(e.elevation, 2),
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
      } = r;
      return {
        elevation: "",
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : v.value,
        textColor: e.textColor != null ? e.textColor : f.value,
        text: m.value !== "normal",
        outline: m.value === "outline"
      };
    }), i = (u) => {
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
      !f || d || v || n.value || i(P(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || i(P(f, u));
    };
    return {
      n: vc,
      classes: fc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
Ks.render = mc;
const Ke = Ks;
Ke.install = function(e) {
  e.component(Ke.name, Ke);
};
var dS = Ke, pc = {
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
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: U()
}, {
  n: hc,
  classes: gc
} = re("back-top");
function yc(e, n) {
  var r = oe("var-icon"), a = oe("var-button");
  return h(), ge(
    Ea,
    {
      to: "body",
      disabled: e.disabled
    },
    [z(
      "div",
      Ve({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = En(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [j(e.$slots, "default", {}, () => [J(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: fe(() => [J(r, {
            name: "chevron-up"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["elevation"]
      )])],
      16
      /* FULL_PROPS */
    )],
    8,
    ["disabled"]
  );
}
var Zs = ne({
  name: "VarBackTop",
  components: {
    VarButton: Ke,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: pc,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, o = (d) => {
      P(e.onClick, d);
      var v = hi(t);
      st(t, {
        left: v,
        duration: e.duration,
        animation: is
      });
    }, i = pi(() => {
      n.value = Qt(t) >= Le(e.visibilityHeight);
    }, 200), l = () => {
      t = e.target ? ss(e.target, "BackTop") : Da(r.value);
    }, s = () => {
      t.addEventListener("scroll", i);
    }, u = () => {
      t.removeEventListener("scroll", i);
    };
    return Xt(() => {
      l(), s(), a.value = !1;
    }), Ja(s), Kt(u), wr(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: me,
      n: hc,
      classes: gc,
      handleClick: o
    };
  }
});
Zs.render = yc;
const Or = Zs;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var vS = Or;
function bc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function wc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Cc = {
  type: {
    type: String,
    default: "default",
    validator: bc
  },
  position: {
    type: String,
    default: "right-top",
    validator: wc
  },
  hidden: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: {
    type: [String, Number]
  },
  dot: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String
  },
  color: {
    type: String
  }
}, {
  n: Sc,
  classes: kc
} = re("badge");
function $c(e, n) {
  var r = oe("var-icon");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "default"), J(
      De,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: fe(() => [we(z(
          "span",
          Ve({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (h(), ge(
            r,
            {
              key: 0,
              class: c(e.n("icon")),
              "var-badge-cover": "",
              name: e.icon
            },
            null,
            8,
            ["class", "name"]
          )) : ee("v-if", !0), j(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (h(), O(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            ae(e.value),
            3
            /* TEXT, CLASS */
          )) : ee("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[hr, !e.hidden]])]),
        _: 3
        /* FORWARDED */
      },
      8,
      ["name"]
    )],
    2
    /* CLASS */
  );
}
var Js = ne({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Cc,
  setup(e) {
    var n = H(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: Sc,
      classes: kc,
      value: n
    };
  }
});
Js.render = $c;
const ir = Js;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var fS = ir, Tc = {
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
  onChange: U(),
  "onUpdate:active": U(),
  onBeforeChange: U(),
  onFabClick: U(),
  fabProps: {
    type: Object
  }
}, Qs = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Pc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn(Qs);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
function Uo() {
  return Uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Uo.apply(this, arguments);
}
var {
  n: Oc,
  classes: Vc
} = re("bottom-navigation"), {
  n: ao
} = re("bottom-navigation-item"), nl = ao("--right-half-space"), rl = ao("--left-half-space"), al = ao("--right-space"), Mc = {
  type: "primary"
};
function Bc(e, n) {
  var r = oe("var-button");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [j(e.$slots, "default"), e.$slots.fab ? (h(), ge(
      r,
      Ve({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: fe(() => [j(e.$slots, "fab")]),
        _: 3
        /* FORWARDED */
      },
      16,
      ["class", "onClick"]
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var _s = ne({
  name: "VarBottomNavigation",
  components: {
    VarButton: Ke
  },
  props: Tc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = H(() => e.active), o = H(() => e.activeColor), i = H(() => e.inactiveColor), l = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Pc(), v = () => {
      s.value === 0 || f() || m() || p();
    }, f = () => u.find((S) => {
      var {
        name: B
      } = S;
      return t.value === B.value;
    }), m = () => u.find((S) => {
      var {
        index: B
      } = S;
      return t.value === B.value;
    }), p = () => {
      nn(t.value) && (t.value < 0 ? P(e["onUpdate:active"], 0) : t.value > s.value - 1 && P(e["onUpdate:active"], s.value - 1));
    }, b = (S) => {
      t.value !== S && (e.onBeforeChange ? g(S) : $(S));
    }, g = (S) => {
      var B = P(e.onBeforeChange, S);
      B = Ce(B) ? B : [B], Promise.all(B).then((E) => {
        E.some((y) => !y) || $(S);
      });
    }, $ = (S) => {
      P(e["onUpdate:active"], S), P(e.onChange, S);
    }, V = () => {
      var S = I();
      S.forEach((B) => {
        B.classList.remove(nl, rl, al);
      });
    }, w = (S) => {
      var B = I(), E = B.length, y = S % 2 === 0;
      B.forEach((T, R) => {
        C(y, T, R, E);
      });
    }, C = (S, B, E, y) => {
      var T = E === y - 1;
      if (!S && T) {
        B.classList.add(al);
        return;
      }
      var R = E === y / 2 - 1, Q = E === y / 2;
      R ? B.classList.add(nl) : Q && B.classList.add(rl);
    }, I = () => Array.from(a.value.querySelectorAll("." + ao())), k = () => {
      P(e.onFabClick);
    }, N = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: b
    };
    return d(N), le(() => s.value, v), le(() => e.fabProps, (S) => {
      l.value = Uo({}, Mc, S);
    }, {
      immediate: !0,
      deep: !0
    }), sn(() => {
      r.fab && w(s.value);
    }), Zt(() => {
      V(), r.fab && w(s.value);
    }), {
      n: Oc,
      classes: Vc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: k,
      fabProps: l
    };
  }
});
_s.render = Bc;
const Vr = _s;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var cS = Vr, Ec = {
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
  onClick: U()
};
function Ic() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(Qs);
  if (!r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: Nc,
  classes: Dc
} = re("bottom-navigation-item"), Ac = {
  type: "danger",
  dot: !0
};
function zc(e, n) {
  var r = oe("var-icon"), a = oe("var-badge"), t = Me("ripple");
  return we((h(), O(
    "button",
    {
      class: c(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: G({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (h(), ge(
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
    )) : ee("v-if", !0), j(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), ge(
      a,
      Ve({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : ee("v-if", !0), z(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? ee("v-if", !0) : (h(), O(
        Oe,
        {
          key: 0
        },
        [be(
          ae(e.label),
          1
          /* TEXT */
        )],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )), j(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var xs = ne({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ir,
    VarIcon: $e
  },
  directives: {
    Ripple: Re
  },
  props: Ec,
  setup(e) {
    var n = H(() => e.name), r = H(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = Ic(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var m, p = (m = n.value) != null ? m : t.value;
      P(e.onClick, p), P(o.onToggle, p);
    };
    return i(d), le(() => r.value, (m) => {
      a.value = m === !0 ? Ac : r.value;
    }, {
      immediate: !0
    }), {
      n: Nc,
      classes: Dc,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
xs.render = zc;
const Mr = xs;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var mS = Mr, Lc = {
  separator: {
    type: String
  },
  onClick: U()
}, eu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Rc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = dn(eu);
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
  } = un(eu);
  if (!n)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Fc,
  classes: Hc
} = re("breadcrumb");
function Yc(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? ee("v-if", !0) : j(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [z(
        "div",
        {
          class: c(e.n("separator"))
        },
        ae((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var nu = ne({
  name: "VarBreadcrumb",
  props: Lc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Uc(), t = H(() => n.value === r.length.value - 1), o = H(() => r.separator.value), i = (l) => {
      t.value || P(e.onClick, l);
    };
    return a(null), {
      n: Fc,
      classes: Hc,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
nu.render = Yc;
const Br = nu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var pS = Br, jc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Wc
} = re("breadcrumbs");
function Gc(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var ru = ne({
  name: "VarBreadcrumbs",
  props: jc,
  setup(e) {
    var n = H(() => e.separator), {
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
ru.render = Gc;
const Er = ru;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var hS = Er;
function qc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Xc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Kc(e) {
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
    validator: Xc
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
    validator: Kc
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Jc,
  classes: Qc
} = re("button-group");
function _c(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var au = ne({
  name: "VarButtonGroup",
  props: Zc,
  setup(e) {
    var {
      bindButtons: n
    } = uc(), r = {
      elevation: H(() => e.elevation),
      type: H(() => e.type),
      size: H(() => e.size),
      color: H(() => e.color),
      textColor: H(() => e.textColor),
      mode: H(() => e.mode)
    };
    return n(r), {
      n: Jc,
      classes: Qc,
      formatElevation: Cn
    };
  }
});
au.render = _c;
const Ir = au;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var gS = Ir;
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
    type: [Boolean, Number, String],
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  "onUpdate:floating": U()
};
function tl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ol(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        tl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        tl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: nm,
  classes: rm
} = re("card"), am = 500, tm = ["src", "alt"];
function om(e, n) {
  var r = oe("var-icon"), a = oe("var-button"), t = Me("ripple");
  return we((h(), O(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: G({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        ref: "cardFloater",
        class: c(e.n("floater")),
        style: G({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [j(e.$slots, "image", {}, () => [e.src ? (h(), O(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          style: G({
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
      )) : ee("v-if", !0)]), z(
        "div",
        {
          class: c(e.n("container"))
        },
        [j(e.$slots, "title", {}, () => [e.title ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ae(e.title),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ae(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), e.$slots.extra ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [j(e.$slots, "extra")],
          2
          /* CLASS */
        )) : ee("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), O(
          "div",
          {
            key: 1,
            class: c(e.n("floating-content")),
            style: G({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [j(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: G({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [j(e.$slots, "close-button", {}, () => [J(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: En(e.close, ["stop"])
          },
          {
            default: fe(() => [J(
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
      )) : ee("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), z(
      "div",
      {
        class: c(e.n("holder")),
        style: G({
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
var tu = ne({
  name: "VarCard",
  directives: {
    Ripple: Re
  },
  components: {
    VarIcon: $e,
    VarButton: Ke
  },
  props: em,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), o = M("100%"), i = M("100%"), l = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = H(() => e.layout === "row"), p = M(!1), b = M(!1), {
      zIndex: g
    } = yt(() => e.floating, 1);
    eo(() => e.floating, () => !m.value);
    var $ = "auto", V = "auto", w = null, C = M(null), I = /* @__PURE__ */ function() {
      var B = ol(function* () {
        clearTimeout(C.value), clearTimeout(w), C.value = null, C.value = setTimeout(/* @__PURE__ */ ol(function* () {
          var {
            width: E,
            height: y,
            left: T,
            top: R
          } = n.value.getBoundingClientRect();
          a.value = me(E), t.value = me(y), o.value = a.value, i.value = t.value, l.value = me(R), s.value = me(T), u.value = "fixed", $ = l.value, V = s.value, p.value = !0, yield In(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? am : 0);
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), k = () => {
      clearTimeout(w), clearTimeout(C.value), C.value = null, o.value = a.value, i.value = t.value, l.value = $, s.value = V, v.value = "0px", f.value = "0", p.value = !1, w = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", $ = "auto", V = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, N = () => {
      P(e["onUpdate:floating"], !1);
    }, S = (B) => {
      P(e.onClick, B);
    };
    return le(() => e.floating, (B) => {
      m.value || Ie(() => {
        B ? I() : k();
      });
    }, {
      immediate: !0
    }), {
      n: nm,
      classes: rm,
      toSizeUnit: me,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: C,
      floaterWidth: o,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: g,
      isRow: m,
      close: N,
      showFloatingButtons: p,
      floated: b,
      formatElevation: Cn,
      handleClick: S
    };
  }
});
tu.render = om;
const Nr = tu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var yS = Nr, im = {
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
  onClick: U()
}, {
  n: lm,
  classes: sm
} = re("cell");
function um(e, n) {
  var r = oe("var-icon"), a = Me("ripple");
  return we((h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "icon", {}, () => [e.icon ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [J(
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
    )) : ee("v-if", !0)]), z(
      "div",
      {
        class: c(e.n("content"))
      },
      [j(e.$slots, "default", {}, () => [e.title ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ae(e.title),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ae(e.description),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [j(e.$slots, "extra")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var ou = ne({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: Re
  },
  props: im,
  setup(e) {
    var n = H(() => e.borderOffset == null ? {} : {
      "--cell-border-left": me(e.borderOffset),
      "--cell-border-right": me(e.borderOffset)
    }), r = (a) => {
      P(e.onClick, a);
    };
    return {
      n: lm,
      classes: sm,
      toSizeUnit: me,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
ou.render = um;
const lr = ou;
lr.install = function(e) {
  e.component(lr.name, lr);
};
var bS = lr, dm = {
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
} = re("form-details"), fm = {
  key: 0
}, cm = {
  key: 0
};
function mm(e, n) {
  return h(), ge(
    De,
    {
      name: e.n()
    },
    {
      default: fe(() => [e.errorMessage || e.extraMessage ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.n())
        },
        [z(
          "div",
          {
            class: c(e.n("error-message"))
          },
          [J(
            De,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.errorMessage ? (h(), O(
                "div",
                fm,
                ae(e.errorMessage),
                1
                /* TEXT */
              )) : ee("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        ), z(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [J(
            De,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.extraMessage ? (h(), O(
                "div",
                cm,
                ae(e.extraMessage),
                1
                /* TEXT */
              )) : ee("v-if", !0)]),
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
      )) : ee("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var iu = ne({
  name: "VarFormDetails",
  props: dm,
  setup: () => ({
    n: vm
  })
});
iu.render = mm;
const We = iu;
We.install = function(e) {
  e.component(We.name, We);
};
var wS = We, pm = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, lu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function hm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(lu);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function gm() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = un(lu);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function Fo() {
  return Fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Fo.apply(this, arguments);
}
var su = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Sn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(su), a = Ba(), t = r ? (o) => {
    r(Fo({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: n,
    form: e,
    bindForm: t
  };
}
function ym() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn(su);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: bm,
  classes: wm
} = re("checkbox");
function Cm(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("hover"), i = Me("ripple");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [we((h(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
          key: 0
        }, () => [J(
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
        )]) : j(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [J(
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
        )]), J(
          a,
          {
            hovering: !e.disabled && !e.formDisabled && e.hovering
          },
          null,
          8,
          ["hovering"]
        )],
        6
        /* CLASS, STYLE */
      )), [[o, e.handleHovering, "desktop"], [i, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), z(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), J(
      t,
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
var uu = ne({
  name: "VarCheckbox",
  directives: {
    Ripple: Re,
    Hover: Nn
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We,
    VarHoverOverlay: on
  },
  props: pm,
  setup(e) {
    var n = M(!1), r = H(() => n.value === e.checkedValue), a = H(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = gm(), {
      hovering: l,
      handleHovering: s
    } = gr(), {
      form: u,
      bindForm: d
    } = Sn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: p
    } = wn(), b = (S) => {
      Ie(() => {
        var {
          validateTrigger: B,
          rules: E,
          modelValue: y
        } = e;
        f(B, S, E, y);
      });
    }, g = (S) => {
      n.value = S;
      var {
        checkedValue: B,
        onChange: E
      } = e;
      P(e["onUpdate:modelValue"], n.value), P(E, n.value), b("onChange"), S === B ? o == null || o.onChecked(B) : o == null || o.onUnchecked(B);
    }, $ = (S) => {
      var {
        disabled: B,
        readonly: E,
        checkedValue: y,
        uncheckedValue: T,
        onClick: R
      } = e;
      if (!(u != null && u.disabled.value || B) && (P(R, S), !(u != null && u.readonly.value || E))) {
        t.value = !0;
        var Q = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && Q || g(r.value ? T : y);
      }
    }, V = (S) => {
      var {
        checkedValue: B,
        uncheckedValue: E
      } = e;
      n.value = S.includes(B) ? B : E;
    }, w = () => {
      t.value = !1;
    }, C = () => {
      P(e["onUpdate:modelValue"], e.uncheckedValue), p();
    }, I = (S) => {
      var {
        checkedValue: B,
        uncheckedValue: E
      } = e, y = ![B, E].includes(S);
      y && (S = r.value ? E : B), g(S);
    }, k = () => m(e.rules, e.modelValue);
    le(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var N = {
      checkedValue: a,
      checked: r,
      sync: V,
      validate: k,
      resetValidation: p,
      reset: C,
      resetWithAnimation: w
    };
    return P(i, N), P(d, N), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: l,
      handleHovering: s,
      n: bm,
      classes: wm,
      handleClick: $,
      toggle: I,
      reset: C,
      validate: k,
      resetValidation: p
    };
  }
});
uu.render = Cm;
const sr = uu;
sr.install = function(e) {
  e.component(sr.name, sr);
};
var CS = sr;
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: $m,
  classes: Tm
} = re("checkbox-group");
function Pm(e, n) {
  var r = oe("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), J(
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
var du = ne({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: We
  },
  props: km,
  setup(e) {
    var n = H(() => e.max), r = H(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = hm(), {
      bindForm: i
    } = Sn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = wn(), v = H(() => l.value), f = (N) => {
      Ie(() => {
        var {
          validateTrigger: S,
          rules: B,
          modelValue: E
        } = e;
        s(S, N, B, E);
      });
    }, m = (N) => {
      P(e["onUpdate:modelValue"], N), P(e.onChange, N), f("onChange");
    }, p = (N) => {
      var {
        modelValue: S
      } = e;
      S.includes(N) || m([...S, N]);
    }, b = (N) => {
      var {
        modelValue: S
      } = e;
      S.includes(N) && m(S.filter((B) => B !== N));
    }, g = () => t.forEach((N) => {
      var {
        sync: S
      } = N;
      return S(e.modelValue);
    }), $ = () => {
      t.forEach((N) => N.resetWithAnimation());
    }, V = () => {
      var N = t.map((B) => {
        var {
          checkedValue: E
        } = B;
        return E.value;
      }), S = Yi(N);
      return $(), P(e["onUpdate:modelValue"], S), S;
    }, w = () => {
      var N = t.filter((B) => {
        var {
          checked: E
        } = B;
        return !E.value;
      }).map((B) => {
        var {
          checkedValue: E
        } = B;
        return E.value;
      }), S = Yi(N);
      return $(), P(e["onUpdate:modelValue"], S), S;
    }, C = () => {
      P(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, g, {
      deep: !0
    }), le(() => a.value, g);
    var k = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: b,
      validate: I,
      resetValidation: d,
      reset: C,
      errorMessage: v
    };
    return o(k), P(i, k), {
      errorMessage: l,
      n: $m,
      classes: Tm,
      checkAll: V,
      inverseAll: w,
      reset: C,
      validate: I,
      resetValidation: d
    };
  }
});
du.render = Pm;
const Dr = du;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var SS = Dr;
function Om(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Vm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Mm = {
  type: {
    type: String,
    default: "default",
    validator: Om
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
  iconName: Je(Cs, "name"),
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
  onClose: U()
}, {
  n: Kn,
  classes: Bm
} = re("chip");
function Em(e, n) {
  var r = oe("var-icon");
  return h(), ge(
    De,
    {
      name: e.n("$-fade")
    },
    {
      default: fe(() => [z(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [j(e.$slots, "left"), z(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [j(e.$slots, "default")],
          2
          /* CLASS */
        ), j(e.$slots, "right"), e.closable ? (h(), O(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [J(
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
        )) : ee("v-if", !0)],
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
var vu = ne({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Mm,
  setup(e) {
    var n = H(() => {
      var {
        plain: t,
        textColor: o,
        color: i
      } = e;
      return t ? {
        color: o || i,
        borderColor: i
      } : {
        color: o,
        background: i
      };
    }), r = H(() => {
      var {
        size: t,
        block: o,
        type: i,
        plain: l,
        round: s
      } = e, u = Kn(o ? "$--flex" : "$--inline-flex"), d = l ? Kn("plain") + " " + Kn("plain-" + i) : Kn("--" + i), v = s ? Kn("--round") : null;
      return [Kn("--" + t), u, d, v];
    }), a = (t) => {
      P(e.onClose, t);
    };
    return {
      n: Kn,
      classes: Bm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
vu.render = Em;
const ur = vu;
ur.install = function(e) {
  e.component(ur.name, ur);
};
var kS = ur;
function Im(e) {
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
    validator: Im
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
  onClick: U()
}, fu = Symbol("ROW_BIND_COL_KEY");
function zm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(fu);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Lm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(fu);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: $t,
  classes: Rm
} = re("col");
function Um(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: G({
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
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var cu = ne({
  name: "VarCol",
  props: Am,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = H(() => L(e.span)), a = H(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Lm(), i = {
      setPadding(u) {
        n.value = u;
      }
    }, l = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (ci(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push($t("--span-" + u + "-" + m)), f && v.push($t("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push($t("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      P(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), P(o, i), {
      n: $t,
      classes: Rm,
      padding: n,
      toNumber: L,
      toSizeUnit: me,
      getSize: l,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Lt
    };
  }
});
cu.render = Um;
const Ar = cu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var $S = Ar, mu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Fm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn(mu);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var Hm = {
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
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: Ym
} = re("collapse");
function jm(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var pu = ne({
  name: "VarCollapse",
  props: Hm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Fm(), t = H(() => e.modelValue), o = H(() => e.offset), i = H(() => e.elevation), l = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, s = (p, b) => l() ? b ? e.accordion ? p : [...e.modelValue, p] : e.accordion ? null : e.modelValue.filter((g) => g !== p) : null, u = (p, b) => {
      var g = s(p, b);
      P(e["onUpdate:modelValue"], g), P(e.onChange, g);
    }, d = () => {
      if (e.accordion)
        return r.find((b) => {
          var {
            name: g
          } = b;
          return e.modelValue === g.value;
        });
      var p = r.filter((b) => {
        var {
          name: g
        } = b;
        return g.value === void 0 ? !1 : e.modelValue.includes(g.value);
      });
      return p.length ? p : void 0;
    }, v = () => e.accordion ? r.find((p) => {
      var {
        index: b,
        name: g
      } = p;
      return g.value === void 0 && e.modelValue === b.value;
    }) : r.filter((p) => {
      var {
        index: b,
        name: g
      } = p;
      return g.value === void 0 && e.modelValue.includes(b.value);
    }), f = () => {
      if (l()) {
        var p = d() || v();
        if (e.accordion && !p || !e.accordion && !p.length) {
          r.forEach((b) => {
            b.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((b) => {
          var g = e.accordion ? p === b : p.includes(b);
          b.init(e.accordion, g);
        });
      }
    }, m = {
      active: t,
      offset: o,
      elevation: i,
      updateItem: u
    };
    return a(m), le(() => n.value, () => Ie().then(f)), le(() => e.modelValue, () => Ie().then(f)), {
      n: Ym
    };
  }
});
pu.render = jm;
const zr = pu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var TS = zr;
function Wm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(mu);
  if (!r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: n,
    collapse: e,
    bindCollapse: r
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
  classes: Xm
} = re("collapse-item");
function Km(e, n) {
  var r = oe("var-icon");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
      },
      null,
      2
      /* CLASS */
    ), z(
      "div",
      {
        class: c(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [z(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [j(e.$slots, "title", {}, () => [be(
          ae(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.n("header-icon"))
        },
        [j(e.$slots, "icon", {}, () => [J(
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
    ), we(z(
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
      [z(
        "div",
        {
          class: c(e.n("content-wrap"))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[hr, e.showContent]])],
    2
    /* CLASS */
  );
}
var hu = ne({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Gm,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Wm(), t = !0, o = M(null), i = M(!1), l = M(!1), {
      active: s,
      offset: u,
      elevation: d,
      updateItem: v
    } = r, f = H(() => e.name), m = (C, I) => {
      s.value === void 0 || C && Ce(s.value) || I === l.value || (l.value = I, p(!0));
    }, p = (C) => {
      e.disabled || C || v(e.name || n.value, !l.value);
    }, b = () => {
      o.value && (o.value.style.height = "", i.value = !0, hn(() => {
        var {
          offsetHeight: C
        } = o.value;
        o.value.style.height = 0 + "px", hn(() => {
          o.value.style.height = C + "px", t && _t(() => {
            t && V();
          });
        });
      }));
    }, g = () => {
      t = !1;
    }, $ = () => {
      if (o.value) {
        var {
          offsetHeight: C
        } = o.value;
        o.value.style.height = C + "px", hn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, V = () => {
      l.value || (i.value = !1), o.value.style.height = "";
    }, w = {
      index: n,
      name: f,
      init: m
    };
    return a(w), le(l, (C) => {
      C ? b() : $();
    }), {
      n: qm,
      start: g,
      classes: Xm,
      showContent: i,
      isShow: l,
      offset: u,
      elevation: d,
      toggle: p,
      contentEl: o,
      transitionend: V,
      formatElevation: Cn
    };
  }
});
hu.render = Km;
const Lr = hu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var PS = Lr, Zm = {
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
  onEnd: U(),
  onChange: U()
}, {
  n: Jm
} = re("countdown"), Ho = 1e3, Yo = 60 * Ho, jo = 60 * Yo, il = 24 * jo;
function Qm(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default", fi(as(e.timeData)), () => [be(
      ae(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var gu = ne({
  name: "VarCountdown",
  props: Zm,
  setup(e) {
    var n = M(""), r = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, i = 0, l, s = (p, b) => {
      var g = Object.values(b), $ = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if ($.forEach((C, I) => {
        p.includes(C) ? p = p.replace(C, ka("" + g[I], 2, "0")) : g[I + 1] += g[I] * V[I];
      }), p.includes("S")) {
        var w = ka("" + g[g.length - 1], 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", w) : p.includes("SS") ? p = p.replace("SS", w.slice(0, 2)) : p = p.replace("S", w.slice(0, 1));
      }
      return p;
    }, u = (p) => {
      var b = Math.floor(p / il), g = Math.floor(p % il / jo), $ = Math.floor(p % jo / Yo), V = Math.floor(p % Yo / Ho), w = Math.floor(p % Ho), C = {
        days: b,
        hours: g,
        minutes: $,
        seconds: V,
        milliseconds: w
      };
      r.value = C, P(e.onChange, r.value), n.value = s(e.format, C);
    }, d = () => {
      var {
        time: p,
        onEnd: b
      } = e, g = performance.now();
      if (a || (a = g + L(p)), i = a - g, i < 0 && (i = 0), u(i), i === 0) {
        P(b);
        return;
      }
      t && (o = hn(d));
    }, v = function(p) {
      p === void 0 && (p = !1), !(t && !p) && (t = !0, a = performance.now() + (i || L(e.time)), d());
    }, f = () => {
      t = !1, Ki(o);
    }, m = () => {
      a = 0, t = !1, Ki(o), d();
    };
    return le(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Ja(() => {
      l != null && (t = l, t === !0 && v(!0));
    }), wr(() => {
      l = t, f();
    }), Qa(f), {
      showTime: n,
      timeData: r,
      n: Jm,
      start: v,
      pause: f,
      reset: m
    };
  }
});
gu.render = Qm;
const Rr = gu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var OS = Rr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var La = 9e15, Cr = 1e9, Wo = "0123456789abcdef", Ft = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ht = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Go = {
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
  minE: -La,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: La,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, yu, Un, ce = !0, to = "[DecimalError] ", yr = to + "Invalid argument: ", bu = to + "Precision limit exceeded", wu = to + "crypto unavailable", Cu = "[object Decimal]", Qe = Math.floor, He = Math.pow, _m = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, xm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ep = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Su = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Vn = 1e7, ve = 7, np = 9007199254740991, rp = Ft.length - 1, qo = Ht.length - 1, q = { toStringTag: Cu };
q.absoluteValue = q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
q.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(yr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
q.comparedTo = q.cmp = function(e) {
  var n, r, a, t, o = this, i = o.d, l = (e = new o.constructor(e)).d, s = o.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0])
    return i[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (o.e !== e.e)
    return o.e > e.e ^ s < 0 ? 1 : -1;
  for (a = i.length, t = l.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (i[n] !== l[n])
      return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
q.cosine = q.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = ap(a, Ou(a, r)), a.precision = e, a.rounding = n, ue(Un == 2 || Un == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ce = !1, o = d.s * He(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Xe(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = He(r, 1 / 3), e = Qe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = Pe(u.plus(d).times(l), u.plus(s), i + 2, 1), Xe(l.d).slice(0, i) === (r = Xe(a.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ue(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        i += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ue(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return ce = !0, ue(a, e, v.rounding, n);
};
q.decimalPlaces = q.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Qe(this.e / ve)) * ve, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
q.dividedBy = q.div = function(e) {
  return Pe(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Pe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
q.equals = q.eq = function(e) {
  return this.cmp(e) === 0;
};
q.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
q.greaterThan = q.gt = function(e) {
  return this.cmp(e) > 0;
};
q.greaterThanOrEqualTo = q.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
q.hyperbolicCosine = q.cosh = function() {
  var e, n, r, a, t, o = this, i = o.constructor, l = new i(1);
  if (!o.isFinite())
    return new i(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return l;
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / io(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ga(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return ue(o, i.precision = r, i.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ga(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / io(5, e)), t = Ga(o, 2, t, t, !0);
    for (var i, l = new o(5), s = new o(16), u = new o(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Pe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
q.inverseCosine = q.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Pn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Pn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Pn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, ce = !1, r = r.times(r).minus(1).sqrt().plus(r), ce = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, ce = !1, r = r.times(r).plus(1).sqrt().plus(r), ce = !0, a.precision = e, a.rounding = n, r.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Pe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
q.inverseSine = q.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Pn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= qo)
      return i = Pn(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= qo)
      return i = Pn(d, v + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / ve + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ce = !1, n = Math.ceil(l / ve), a = 1, s = u.times(u), i = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = i.minus(t.div(a += 2)), t = t.times(s), i = o.plus(t.div(a += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === o.d[e] && e--; )
        ;
  return r && (i = i.times(2 << r - 1)), ce = !0, ue(i, d.precision = v, d.rounding = f, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && Qe(this.e / ve) > this.d.length - 2;
};
q.isNaN = function() {
  return !this.s;
};
q.isNegative = q.isNeg = function() {
  return this.s < 0;
};
q.isPositive = q.isPos = function() {
  return this.s > 0;
};
q.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
q.lessThan = q.lt = function(e) {
  return this.cmp(e) < 0;
};
q.lessThanOrEqualTo = q.lte = function(e) {
  return this.cmp(e) < 1;
};
q.logarithm = q.log = function(e) {
  var n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, m = 5;
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
  if (ce = !1, l = v + m, i = ar(u, l), a = n ? Yt(d, l + 10) : ar(e, l), s = Pe(i, a, l, 1), dt(s.d, t = v, f))
    do
      if (l += 10, i = ar(u, l), a = n ? Yt(d, l + 10) : ar(e, l), s = Pe(i, a, l, 1), !o) {
        +Xe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (dt(s.d, t += 10, f));
  return ce = !0, ue(s, v, f);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, p = m.constructor;
  if (e = new p(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new p(NaN) : m.d ? e.s = -e.s : e = new p(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(m);
    else
      return new p(s === 3 ? -0 : 0);
    return ce ? ue(e, l, s) : e;
  }
  if (r = Qe(e.e / ve), d = Qe(m.e / ve), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, i = f.length) : (n = f, r = d, i = u.length), a = Math.max(Math.ceil(l / ve), i) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, i = f.length, v = a < i, v && (i = a), a = 0; a < i; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    o = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), i = u.length, a = f.length - i; a > 0; --a)
    u[i++] = 0;
  for (a = f.length; a > o; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = Vn - 1;
      --u[t], u[a] += Vn;
    }
    u[a] -= f[a];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = oo(u, r), ce ? ue(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (ce = !1, a.modulo == 9 ? (n = Pe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Pe(r, e, 0, a.modulo, 1), n = n.times(e), ce = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return Xo(this);
};
q.naturalLogarithm = q.ln = function() {
  return ar(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
q.plus = q.add = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), ce ? ue(e, l, s) : e;
  if (o = Qe(v.e / ve), a = Qe(e.e / ve), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, a = o, i = u.length), o = Math.ceil(l / ve), i = o > i ? o + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Vn | 0, u[t] %= Vn;
  for (n && (u.unshift(n), ++a), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = oo(u, a), ce ? ue(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(yr + e);
  return r.d ? (n = ku(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = op(a, Ou(a, r)), a.precision = e, a.rounding = n, ue(Un > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (ce = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Xe(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Qe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Pe(i, o, r + 2, 1)).times(0.5), Xe(o.d).slice(0, r) === (n = Xe(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ue(o, s + 1, 0), o.times(o).eq(i))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ue(a, s + 1, 1), e = !a.times(a).eq(i));
        break;
      }
  return ce = !0, ue(a, s, d.rounding, e);
};
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Un == 2 || Un == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, o, i, l, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Qe(d.e / ve) + Qe(e.e / ve), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, i = s, s = u, u = i), o = [], i = s + u, a = i; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = o[t] + m[a] * f[t - a - 1] + n, o[t--] = l % Vn | 0, n = l / Vn | 0;
    o[t] = (o[t] + n) % Vn | 0;
  }
  for (; !o[--i]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = oo(o, r), ce ? ue(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return Pi(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (ln(e, 0, Cr), n === void 0 ? n = a.rounding : ln(n, 0, 8), ue(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Dn(a, !0) : (ln(e, 0, Cr), n === void 0 ? n = t.rounding : ln(n, 0, 8), a = ue(new t(a), e + 1, n), r = Dn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Dn(t) : (ln(e, 0, Cr), n === void 0 ? n = o.rounding : ln(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = Dn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, p = m.d, b = m.constructor;
  if (!p)
    return new b(m);
  if (u = r = new b(1), a = s = new b(0), n = new b(a), o = n.e = ku(p) - m.e - 1, i = o % ve, n.d[0] = He(10, i < 0 ? ve + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new b(e), !l.isInt() || l.lt(u))
      throw Error(yr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (ce = !1, l = new b(Xe(p)), d = b.precision, b.precision = o = p.length * ve * 2; v = Pe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Pe(u, a, o, 1).minus(m).abs().cmp(Pe(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], b.precision = d, ce = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return Pi(this, 16, e, n);
};
q.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : ln(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (ce = !1, r = Pe(r, e, 0, n, 1).times(e), ce = !0, ue(r)) : (e.s = r.s, r = e), r;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, n) {
  return Pi(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(He(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(l, a, o);
  if (n = Qe(e.e / ve), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= np)
    return t = $u(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = He(+l, u), n = r == 0 || !isFinite(r) ? Qe(u * (Math.log("0." + Xe(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (ce = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = Xo(e.times(ar(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), dt(t.d, a, o) && (n = a + 10, t = ue(Xo(e.times(ar(l, n + r)), n), n + 5, 1), +Xe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = i, ce = !0, s.rounding = o, ue(t, a, o));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Dn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (ln(e, 1, Cr), n === void 0 ? n = t.rounding : ln(n, 0, 8), a = ue(new t(a), e, n), r = Dn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (ln(e, 1, Cr), n === void 0 ? n = a.rounding : ln(n, 0, 8)), ue(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = Dn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = Dn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Xe(e) {
  var n, r, a, t = e.length - 1, o = "", i = e[0];
  if (t > 0) {
    for (o += i, n = 1; n < t; n++)
      a = e[n] + "", r = ve - a.length, r && (o += Jn(r)), o += a;
    i = e[n], a = i + "", r = ve - a.length, r && (o += Jn(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return o + i;
}
function ln(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(yr + e);
}
function dt(e, n, r, a) {
  var t, o, i, l;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += ve, t = 0) : (t = Math.ceil((n + 1) / ve), n %= ve), o = He(10, ve - n), l = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == He(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : i = ((a || r < 4) && l + 1 == o || !a && r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == He(10, n - 3) - 1, i;
}
function Et(e, n, r) {
  for (var a, t = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Wo.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function ap(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / io(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ga(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Pe = function() {
  function e(a, t, o) {
    var i, l = 0, s = a.length;
    for (a = a.slice(); s--; )
      i = a[s] * t + l, a[s] = i % o | 0, l = i / o | 0;
    return l && a.unshift(l), a;
  }
  function n(a, t, o, i) {
    var l, s;
    if (o != i)
      s = o > i ? 1 : -1;
    else
      for (l = s = 0; l < o; l++)
        if (a[l] != t[l]) {
          s = a[l] > t[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, o, i) {
    for (var l = 0; o--; )
      a[o] -= l, l = a[o] < t[o] ? 1 : 0, a[o] = l * i + a[o] - t[o];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, o, i, l, s) {
    var u, d, v, f, m, p, b, g, $, V, w, C, I, k, N, S, B, E, y, T, R = a.constructor, Q = a.s == t.s ? 1 : -1, _ = a.d, W = t.d;
    if (!_ || !_[0] || !W || !W[0])
      return new R(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (_ ? W && _[0] == W[0] : !W) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          _ && _[0] == 0 || !W ? Q * 0 : Q / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Vn, m = ve, d = Qe(a.e / m) - Qe(t.e / m)), y = W.length, B = _.length, $ = new R(Q), V = $.d = [], v = 0; W[v] == (_[v] || 0); v++)
      ;
    if (W[v] > (_[v] || 0) && d--, o == null ? (k = o = R.precision, i = R.rounding) : l ? k = o + (a.e - t.e) + 1 : k = o, k < 0)
      V.push(1), p = !0;
    else {
      if (k = k / m + 2 | 0, v = 0, y == 1) {
        for (f = 0, W = W[0], k++; (v < B || f) && k--; v++)
          N = f * s + (_[v] || 0), V[v] = N / W | 0, f = N % W | 0;
        p = f || v < B;
      } else {
        for (f = s / (W[0] + 1) | 0, f > 1 && (W = e(W, f, s), _ = e(_, f, s), y = W.length, B = _.length), S = y, w = _.slice(0, y), C = w.length; C < y; )
          w[C++] = 0;
        T = W.slice(), T.unshift(0), E = W[0], W[1] >= s / 2 && ++E;
        do
          f = 0, u = n(W, w, y, C), u < 0 ? (I = w[0], y != C && (I = I * s + (w[1] || 0)), f = I / E | 0, f > 1 ? (f >= s && (f = s - 1), b = e(W, f, s), g = b.length, C = w.length, u = n(b, w, g, C), u == 1 && (f--, r(b, y < g ? T : W, g, s))) : (f == 0 && (u = f = 1), b = W.slice()), g = b.length, g < C && b.unshift(0), r(w, b, C, s), u == -1 && (C = w.length, u = n(W, w, y, C), u < 1 && (f++, r(w, y < C ? T : W, C, s))), C = w.length) : u === 0 && (f++, w = [0]), V[v++] = f, u && w[0] ? w[C++] = _[S] || 0 : (w = [_[S]], C = 1);
        while ((S++ < B || w[0] !== void 0) && k--);
        p = w[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      $.e = d, yu = p;
    else {
      for (v = 1, f = V[0]; f >= 10; f /= 10)
        v++;
      $.e = v + d * m - 1, ue($, l ? o + $.e + 1 : o, i, p);
    }
    return $;
  };
}();
function ue(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, l = v[0]; l >= 10; l /= 10)
        t++;
      if (o = n - t, o < 0)
        o += ve, i = n, d = v[f = 0], s = d / He(10, t - i - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / ve), l = v.length, f >= l)
        if (a) {
          for (; l++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= ve, i = o - ve + 1;
        } else
          break e;
      else {
        for (d = l = v[f], t = 1; l >= 10; l /= 10)
          t++;
        o %= ve, i = o - ve + t, s = i < 0 ? 0 : d / He(10, t - i - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (i < 0 ? d : d % He(10, t - i - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? i > 0 ? d / He(10, t - i) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = He(10, (ve - n % ve) % ve), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = He(10, ve - o), v[f] = i > 0 ? (d / He(10, t - i) % He(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, i = v[0]; i >= 10; i /= 10)
              o++;
            for (i = v[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            o != l && (e.e++, v[0] == Vn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != Vn)
              break;
            v[f--] = 0, l = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return ce && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Dn(e, n, r) {
  if (!e.isFinite())
    return Pu(e);
  var a, t = e.e, o = Xe(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Jn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Jn(-t - 1) + o, r && (a = r - i) > 0 && (o += Jn(a))) : t >= i ? (o += Jn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + Jn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += Jn(a))), o;
}
function oo(e, n) {
  var r = e[0];
  for (n *= ve; r >= 10; r /= 10)
    n++;
  return n;
}
function Yt(e, n, r) {
  if (n > rp)
    throw ce = !0, r && (e.precision = r), Error(bu);
  return ue(new e(Ft), n, 1, !0);
}
function Pn(e, n, r) {
  if (n > qo)
    throw Error(bu);
  return ue(new e(Ht), n, r, !0);
}
function ku(e) {
  var n = e.length - 1, r = n * ve + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Jn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function $u(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / ve + 4);
  for (ce = !1; ; ) {
    if (r % 2 && (o = o.times(n), sl(o.d, i) && (t = !0)), r = Qe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), sl(n.d, i);
  }
  return ce = !0, o;
}
function ll(e) {
  return e.d[e.d.length - 1] & 1;
}
function Tu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Xo(e, n) {
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ce = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(He(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), l = i.plus(Pe(o, r, s, 1)), Xe(l.d).slice(0, s) === Xe(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = ue(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && dt(i.d, s - a, m, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return ue(i, f.precision = p, m, ce = !0);
      else
        return f.precision = p, i;
    }
    i = l;
  }
}
function ar(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, m = 1, p = 10, b = e, g = b.d, $ = b.constructor, V = $.rounding, w = $.precision;
  if (b.s < 0 || !g || !g[0] || !b.e && g[0] == 1 && g.length == 1)
    return new $(g && !g[0] ? -1 / 0 : b.s != 1 ? NaN : g ? 0 : b);
  if (n == null ? (ce = !1, d = w) : d = n, $.precision = d += p, r = Xe(g), a = r.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      b = b.times(e), r = Xe(b.d), a = r.charAt(0), m++;
    o = b.e, a > 1 ? (b = new $("0." + r), o++) : b = new $(a + "." + r.slice(1));
  } else
    return u = Yt($, d + 2, w).times(o + ""), b = ar(new $(a + "." + r.slice(1)), d - p).plus(u), $.precision = w, n == null ? ue(b, w, V, ce = !0) : b;
  for (v = b, s = i = b = Pe(b.minus(1), b.plus(1), d, 1), f = ue(b.times(b), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Pe(i, new $(t), d, 1)), Xe(u.d).slice(0, d) === Xe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Yt($, d + 2, w).times(o + ""))), s = Pe(s, new $(m), d, 1), n == null)
        if (dt(s.d, d - p, V, l))
          $.precision = d += p, u = i = b = Pe(v.minus(1), v.plus(1), d, 1), f = ue(b.times(b), d, 1), t = l = 1;
        else
          return ue(s, $.precision = w, V, ce = !0);
      else
        return $.precision = w, s;
    s = u, t += 2;
  }
}
function Pu(e) {
  return String(e.s * e.s / 0);
}
function Ko(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % ve, r < 0 && (a += ve), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= ve; a < t; )
        e.d.push(+n.slice(a, a += ve));
      n = n.slice(a), a = ve - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), ce && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function tp(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Su.test(n))
      return Ko(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (xm.test(n))
    r = 16, n = n.toLowerCase();
  else if (_m.test(n))
    r = 2;
  else if (ep.test(n))
    r = 8;
  else
    throw Error(yr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = $u(a, new a(r), o, o * 2)), u = Et(n, r, Vn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = oo(u, d), e.d = u, ce = !1, i && (e = Pe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? He(2, s) : tr.pow(2, s))), ce = !0, e);
}
function op(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ga(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / io(5, r)), n = Ga(e, 2, n, n);
  for (var t, o = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(i.times(t).minus(l))));
  return n;
}
function Ga(e, n, r, a, t) {
  var o, i, l, s, u = e.precision, d = Math.ceil(u / ve);
  for (ce = !1, s = r.times(r), l = new e(a); ; ) {
    if (i = Pe(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(i) : a.minus(i), a = Pe(i.times(s), new e(n++ * n++), u, 1), i = l.plus(a), i.d[d] !== void 0) {
      for (o = d; i.d[o] === l.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = l, l = a, a = i, i = o;
  }
  return ce = !0, i.d.length = d + 1, i;
}
function io(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Ou(e, n) {
  var r, a = n.s < 0, t = Pn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Un = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Un = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Un = ll(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Un = ll(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Pi(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, m = e.constructor, p = r !== void 0;
  if (p ? (ln(r, 1, Cr), a === void 0 ? a = m.rounding : ln(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Pu(e);
  else {
    for (d = Dn(e), i = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Et(Dn(f), 10, t), f.e = f.d.length), v = Et(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = yu), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += Wo.charAt(v[i]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = Et(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += Wo.charAt(v[i]);
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
function sl(e, n) {
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
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Pn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Pn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Pn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = Pn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
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
    throw Error(to + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Cr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -La,
    0,
    "toExpPos",
    0,
    La,
    "maxE",
    0,
    La,
    "minE",
    -La,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = Go[r]), (a = e[r]) !== void 0)
      if (Qe(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(yr + r + ": " + a);
  if (r = "crypto", t && (this[r] = Go[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(wu);
      else
        this[r] = !1;
    else
      throw Error(yr + r + ": " + a);
  return this;
}
function bp(e) {
  return new this(e).cos();
}
function wp(e) {
  return new this(e).cosh();
}
function Vu(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, ul(o)) {
      u.s = o.s, ce ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (s = typeof o, s === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (i = 0, l = o; l >= 10; l /= 10)
          i++;
        ce ? i > t.maxE ? (u.e = NaN, u.d = null) : i < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [o]) : (u.e = i, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Ko(u, o.toString());
    } else if (s !== "string")
      throw Error(yr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), Su.test(o) ? Ko(u, o) : tp(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = yp, t.clone = Vu, t.isDecimal = ul, t.abs = ip, t.acos = lp, t.acosh = sp, t.add = up, t.asin = dp, t.asinh = vp, t.atan = fp, t.atanh = cp, t.atan2 = mp, t.cbrt = pp, t.ceil = hp, t.clamp = gp, t.cos = bp, t.cosh = wp, t.div = Cp, t.exp = Sp, t.floor = kp, t.hypot = $p, t.ln = Tp, t.log = Pp, t.log10 = Vp, t.log2 = Op, t.max = Mp, t.min = Bp, t.mod = Ep, t.mul = Ip, t.pow = Np, t.random = Dp, t.round = Ap, t.sign = zp, t.sin = Lp, t.sinh = Rp, t.sqrt = Up, t.sub = Fp, t.sum = Hp, t.tan = Yp, t.tanh = jp, t.trunc = Wp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Cp(e, n) {
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
  for (ce = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return ce = !0, new this(1 / 0);
      r = n;
    }
  return ce = !0, r.sqrt();
}
function ul(e) {
  return e instanceof tr || e && e.toStringTag === Cu || !1;
}
function Tp(e) {
  return new this(e).ln();
}
function Pp(e, n) {
  return new this(e).log(n);
}
function Op(e) {
  return new this(e).log(2);
}
function Vp(e) {
  return new this(e).log(10);
}
function Mp() {
  return Tu(this, arguments, "lt");
}
function Bp() {
  return Tu(this, arguments, "gt");
}
function Ep(e, n) {
  return new this(e).mod(n);
}
function Ip(e, n) {
  return new this(e).mul(n);
}
function Np(e, n) {
  return new this(e).pow(n);
}
function Dp(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : ln(e, 1, Cr), a = Math.ceil(e / ve), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(wu);
  else
    for (; o < a; )
      l[o++] = Math.random() * 1e7 | 0;
  for (a = l[--o], e %= ve, a && e && (t = He(10, ve - e), l[o] = (a / t | 0) * t); l[o] === 0; o--)
    l.pop();
  if (o < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= ve)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < ve && (r -= ve - a);
  }
  return i.e = r, i.d = l, i;
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
function Fp(e, n) {
  return new this(e).sub(n);
}
function Hp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ce = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ce = !0, ue(r, this.precision, this.rounding);
}
function Yp(e) {
  return new this(e).tan();
}
function jp(e) {
  return new this(e).tanh();
}
function Wp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var tr = q.constructor = Vu(Go);
Ft = new tr(Ft);
Ht = new tr(Ht);
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
  onBeforeChange: U(),
  onChange: U(),
  onIncrement: U(),
  onDecrement: U(),
  "onUpdate:modelValue": U()
}, {
  n: qp,
  classes: Xp
} = re("counter"), dl = 100, vl = 600, Kp = ["inputmode", "readonly", "disabled"];
function Zp(e, n) {
  var r = oe("var-icon"), a = oe("var-button"), t = oe("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      Ve({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [J(
        a,
        {
          class: c(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: G({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          round: "",
          "var-counter-cover": "",
          ripple: e.ripple && e.decrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableDecrement && !e.isMin,
          onClick: e.decrement,
          onTouchstart: e.pressDecrement,
          onTouchend: e.releaseDecrement,
          onTouchcancel: e.releaseDecrement
        },
        {
          default: fe(() => [J(r, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), we(z(
        "input",
        {
          class: c(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: G({
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
        Kp
      ), [[Sv, e.inputValue]]), J(
        a,
        {
          class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: G({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          round: "",
          "var-counter-cover": "",
          ripple: e.ripple && e.incrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableIncrement && !e.isMax,
          onClick: e.increment,
          onTouchstart: e.pressIncrement,
          onTouchend: e.releaseIncrement,
          onTouchcancel: e.releaseIncrement
        },
        {
          default: fe(() => [J(r, {
            name: "plus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      )],
      16
      /* FULL_PROPS */
    ), J(
      t,
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
var Mu = ne({
  name: "VarCounter",
  components: {
    VarButton: Ke,
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Re
  },
  inheritAttrs: !1,
  props: Gp,
  setup(e) {
    var n = M(""), {
      bindForm: r,
      form: a
    } = Sn(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: i,
      // expose
      resetValidation: l
    } = wn(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, p = () => i(e.rules, e.modelValue), b = (W) => {
      Ie(() => {
        var {
          validateTrigger: D,
          rules: x,
          modelValue: te
        } = e;
        o(D, W, x, te);
      });
    }, g = () => {
      var {
        min: W
      } = e;
      P(e["onUpdate:modelValue"], W != null ? L(W) : 0), l();
    }, $ = {
      reset: g,
      validate: p,
      resetValidation: l
    }, V = H(() => {
      var {
        max: W,
        modelValue: D
      } = e;
      return W != null && L(D) >= L(W);
    }), w = H(() => {
      var {
        min: W,
        modelValue: D
      } = e;
      return W != null && L(D) <= L(W);
    }), C = (W) => {
      var {
        decimalLength: D,
        max: x,
        min: te
      } = e, F = L(W);
      return x != null && F > L(x) && (F = L(x)), te != null && F < L(te) && (F = L(te)), W = String(F), D != null && (W = F.toFixed(L(D))), W;
    }, I = (W) => {
      var {
        lazyChange: D,
        onBeforeChange: x
      } = e, {
        value: te
      } = W.target, F = C(te);
      D ? P(x, L(F), _) : Q(F), b("onInputChange");
    }, k = () => {
      var {
        disabled: W,
        readonly: D,
        disableDecrement: x,
        decrementButton: te,
        lazyChange: F,
        step: Z,
        modelValue: K,
        onDecrement: A,
        onBeforeChange: Y
      } = e;
      if (!(u != null && u.value || s != null && s.value || W || D || x || !te) && !w.value) {
        var X = new tr(L(K)).minus(new tr(L(Z))).toString(), de = C(X), pe = L(de);
        P(A, pe), F ? P(Y, pe, _) : (Q(de), b("onDecrement"));
      }
    }, N = () => {
      var {
        disabled: W,
        readonly: D,
        disableIncrement: x,
        incrementButton: te,
        lazyChange: F,
        step: Z,
        modelValue: K,
        onIncrement: A,
        onBeforeChange: Y
      } = e;
      if (!(u != null && u.value || s != null && s.value || W || D || x || !te) && !V.value) {
        var X = new tr(L(K)).plus(new tr(L(Z))).toString(), de = C(X), pe = L(de);
        P(A, pe), F ? P(Y, pe, _) : (Q(de), b("onIncrement"));
      }
    }, S = () => {
      var {
        press: W,
        lazyChange: D
      } = e;
      !W || D || (m = window.setTimeout(() => {
        R();
      }, vl));
    }, B = () => {
      var {
        press: W,
        lazyChange: D
      } = e;
      !W || D || (f = window.setTimeout(() => {
        T();
      }, vl));
    }, E = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, y = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, T = () => {
      d = window.setTimeout(() => {
        N(), T();
      }, dl);
    }, R = () => {
      v = window.setTimeout(() => {
        k(), R();
      }, dl);
    }, Q = (W) => {
      n.value = W;
      var D = L(W);
      P(e["onUpdate:modelValue"], D);
    }, _ = (W) => {
      Q(C(String(W))), b("onLazyChange");
    };
    return P(r, $), le(() => e.modelValue, (W) => {
      Q(C(String(W))), P(e.onChange, L(W));
    }), Q(C(String(e.modelValue))), {
      n: qp,
      classes: Xp,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: w,
      validate: p,
      reset: g,
      resetValidation: l,
      handleChange: I,
      decrement: k,
      increment: N,
      pressDecrement: S,
      pressIncrement: B,
      releaseDecrement: E,
      releaseIncrement: y,
      toSizeUnit: me,
      toNumber: L
    };
  }
});
Mu.render = Zp;
const Ur = Mu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var VS = Ur, Bu = 60, Eu = Bu * 60, Iu = Eu * 24, Jp = Iu * 7, qa = 1e3, go = Bu * qa, fl = Eu * qa, Qp = Iu * qa, _p = Jp * qa, Oi = "millisecond", Ra = "second", Ua = "minute", Fa = "hour", Qn = "day", It = "week", Tn = "month", Nu = "quarter", _n = "year", Ha = "date", xp = "YYYY-MM-DDTHH:mm:ssZ", cl = "Invalid Date", eh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, nh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const rh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Zo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, ah = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Zo(t, 2, "0") + ":" + Zo(o, 2, "0");
}, th = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Tn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), Tn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, oh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, ih = function(n) {
  var r = {
    M: Tn,
    y: _n,
    w: It,
    d: Qn,
    D: Ha,
    h: Fa,
    m: Ua,
    s: Ra,
    ms: Oi,
    Q: Nu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, lh = function(n) {
  return n === void 0;
};
const sh = {
  s: Zo,
  z: ah,
  m: th,
  a: oh,
  p: ih,
  u: lh
};
var at = "en", Fr = {};
Fr[at] = rh;
var Vi = function(n) {
  return n instanceof lo;
}, jt = function e(n, r, a) {
  var t;
  if (!n)
    return at;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Fr[o] && (t = o), r && (Fr[o] = r, t = o);
    var i = n.split("-");
    if (!t && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Fr[l] = n, t = l;
  }
  return !a && t && (at = t), t || !a && at;
}, ie = function(n, r) {
  if (Vi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new lo(a);
}, uh = function(n, r) {
  return ie(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = sh;
Te.l = jt;
Te.i = Vi;
Te.w = uh;
var dh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(eh);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, lo = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = jt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = dh(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== cl;
  }, n.isSame = function(a, t) {
    var o = ie(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return ie(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < ie(a);
  }, n.$g = function(a, t, o) {
    return Te.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function($, V) {
      var w = Te.w(o.$u ? Date.UTC(o.$y, V, $) : new Date(o.$y, V, $), o);
      return i ? w : w.endOf(Qn);
    }, u = function($, V) {
      var w = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return Te.w(o.toDate()[$].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? w : C).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case _n:
        return i ? s(1, 0) : s(31, 11);
      case Tn:
        return i ? s(1, v) : s(0, v + 1);
      case It: {
        var p = this.$locale().weekStart || 0, b = (d < p ? d + 7 : d) - p;
        return s(i ? f - b : f + (6 - b), v);
      }
      case Qn:
      case Ha:
        return u(m + "Hours", 0);
      case Fa:
        return u(m + "Minutes", 1);
      case Ua:
        return u(m + "Seconds", 2);
      case Ra:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Qn] = l + "Date", o[Ha] = l + "Date", o[Tn] = l + "Month", o[_n] = l + "FullYear", o[Fa] = l + "Hours", o[Ua] = l + "Minutes", o[Ra] = l + "Seconds", o[Oi] = l + "Milliseconds", o)[i], u = i === Qn ? this.$D + (t - this.$W) : t;
    if (i === Tn || i === _n) {
      var d = this.clone().set(Ha, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Ha, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Te.p(a)]();
  }, n.add = function(a, t) {
    var o = this, i;
    a = Number(a);
    var l = Te.p(t), s = function(f) {
      var m = ie(o);
      return Te.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (l === Tn)
      return this.set(Tn, this.$M + a);
    if (l === _n)
      return this.set(_n, this.$y + a);
    if (l === Qn)
      return s(1);
    if (l === It)
      return s(7);
    var u = (i = {}, i[Ua] = go, i[Fa] = fl, i[Ra] = qa, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || cl;
    var i = a || xp, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, p = function(w, C, I, k) {
      return w && (w[C] || w(t, i)) || I[C].slice(0, k);
    }, b = function(w) {
      return Te.s(s % 12 || 12, w, "0");
    }, g = m || function(V, w, C) {
      var I = V < 12 ? "AM" : "PM";
      return C ? I.toLowerCase() : I;
    }, $ = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Te.s(d + 1, 2, "0"),
      MMM: p(o.monthsShort, d, f, 3),
      MMMM: p(f, d),
      D: this.$D,
      DD: Te.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(o.weekdaysMin, this.$W, v, 2),
      ddd: p(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Te.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Te.s(u, 2, "0"),
      s: String(this.$s),
      ss: Te.s(this.$s, 2, "0"),
      SSS: Te.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(nh, function(V, w) {
      return w || $[V] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = ie(a), u = (s.utcOffset() - this.utcOffset()) * go, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[_n] = v / 12, i[Tn] = v, i[Nu] = v / 3, i[It] = (d - u) / _p, i[Qn] = (d - u) / Qp, i[Fa] = d / fl, i[Ua] = d / go, i[Ra] = d / qa, i)[l] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Tn).$D;
  }, n.$locale = function() {
    return Fr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), i = jt(a, t, !0);
    return i && (o.$L = i), o;
  }, n.clone = function() {
    return Te.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Du = lo.prototype;
ie.prototype = Du;
[["$ms", Oi], ["$s", Ra], ["$m", Ua], ["$H", Fa], ["$W", Qn], ["$M", Tn], ["$y", _n], ["$D", Ha]].forEach(function(e) {
  Du[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ie.extend = function(e, n) {
  return e.$i || (e(n, lo, ie), e.$i = !0), ie;
};
ie.locale = jt;
ie.isDayjs = Vi;
ie.unix = function(e) {
  return ie(e * 1e3);
};
ie.en = Fr[at];
ie.Ls = Fr;
ie.p = {};
const Au = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, zu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function vh(e) {
  return ["date", "month"].includes(e);
}
var Nt = [{
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
}], rt = [{
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
    type: [Boolean, Number, String],
    default: !1
  },
  buttonElevation: {
    type: [Boolean, Number, String],
    default: !0
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
  onPreview: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: ch
} = re("picker-header");
function mh(e, n) {
  var r = oe("var-icon"), a = oe("var-button");
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [J(
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
        default: fe(() => [J(r, {
          name: "chevron-left"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    ), z(
      "div",
      {
        class: c(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [J(
        De,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), O(
            "div",
            {
              key: e.showDate
            },
            ae(e.showDate),
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
    ), J(
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
        default: fe(() => [J(r, {
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
var Lu = ne({
  name: "PanelHeader",
  components: {
    VarButton: Ke,
    VarIcon: $e
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
    } = n, a = M(!1), t = M(0), o = H(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (l = Ye.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return Ye.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: ch,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
Lu.render = mh;
const Ru = Lu;
function Jo() {
  return Jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Jo.apply(this, arguments);
}
ie.extend(Au);
ie.extend(zu);
var {
  n: Tt,
  classes: ph
} = re("month-picker"), {
  n: Pt
} = re("date-picker");
function hh(e, n) {
  var r = oe("panel-header"), a = oe("var-button");
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.n("content"))
      },
      [J(
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
      ), J(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), O("ul", {
            key: e.panelKey
          }, [(h(!0), O(
            Oe,
            null,
            ze(e.MONTH_LIST, (t) => (h(), O("li", {
              key: t.index
            }, [J(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, Jo({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: fe(() => [be(
                  ae(e.getMonthAbbr(t.index)),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1040,
              ["elevation", "onClick"]
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
var Uu = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: Ke,
    PanelHeader: Ru
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
    } = n, [a, t] = e.current.split("-"), o = M(!1), i = M(0), l = M(null), s = Ee({
      left: !1,
      right: !1
    }), u = H(() => e.choose.chooseYear === e.preview.previewYear), d = H(() => e.preview.previewYear === a), v = (V) => {
      var w, C;
      return (w = (C = Ye.value.datePickerMonthDict) == null ? void 0 : C[V].abbr) != null ? w : "";
    }, f = (V) => {
      var {
        preview: {
          previewYear: w
        },
        componentProps: {
          min: C,
          max: I
        }
      } = e, k = !0, N = !0, S = w + "-" + V;
      return I && (k = ie(S).isSameOrBefore(ie(I), "month")), C && (N = ie(S).isSameOrAfter(ie(C), "month")), k && N;
    }, m = (V) => {
      var {
        choose: {
          chooseMonths: w,
          chooseDays: C,
          chooseRangeMonth: I
        },
        componentProps: {
          type: k,
          range: N
        }
      } = e;
      if (N) {
        if (!I.length)
          return !1;
        var S = ie(V).isSameOrBefore(ie(I[1]), "month"), B = ie(V).isSameOrAfter(ie(I[0]), "month");
        return S && B;
      }
      return k === "month" ? w.includes(V) : C.some((E) => E.includes(V));
    }, p = (V) => {
      var {
        choose: {
          chooseMonth: w
        },
        preview: {
          previewYear: C
        },
        componentProps: {
          allowedDates: I,
          color: k,
          multiple: N,
          range: S
        }
      } = e, B = C + "-" + V, E = () => S || N ? m(B) : (w == null ? void 0 : w.index) === V && u.value, y = () => f(V) ? I ? !I(B) : !1 : !0, T = y(), R = () => T ? !0 : S || N ? !m(B) : !u.value || (w == null ? void 0 : w.index) !== V, Q = () => d.value && t === V && e.componentProps.showCurrent ? (S || N || u.value) && T ? !0 : S || N ? !m(B) : u.value ? (w == null ? void 0 : w.index) !== t : !0 : !1, _ = () => T ? "" : Q() ? k ?? "" : E() ? "" : Pt() + "-color-cover", W = _().startsWith(Pt());
      return {
        outline: Q(),
        text: R(),
        color: R() ? "" : k,
        textColor: W ? "" : _(),
        [Pt() + "-color-cover"]: W,
        class: ph(Tt("button"), [T, Tt("button--disabled")])
      };
    }, b = (V, w) => {
      var C = w.currentTarget;
      C.classList.contains(Tt("button--disabled")) || r("choose-month", V);
    }, g = (V) => {
      o.value = V === "prev", i.value += V === "prev" ? -1 : 1, r("check-preview", "year", V);
    }, $ = (V) => {
      l.value.checkDate(V);
    };
    return le(() => e.preview.previewYear, (V) => {
      var {
        componentProps: {
          min: w,
          max: C
        }
      } = e;
      C && (s.right = !ie("" + (L(V) + 1)).isSameOrBefore(ie(C), "year")), w && (s.left = !ie("" + (L(V) - 1)).isSameOrAfter(ie(w), "year"));
    }, {
      immediate: !0
    }), {
      n: Tt,
      nDate: Pt,
      pack: Ye,
      MONTH_LIST: Nt,
      headerEl: l,
      reverse: o,
      panelKey: i,
      panelBtnDisabled: s,
      forwardRef: $,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: g
    };
  }
});
Uu.render = hh;
const gh = Uu;
var {
  n: ml,
  classes: yh
} = re("year-picker"), bh = ["onClick"];
function wh(e, n) {
  return h(), O(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), O(
      Oe,
      null,
      ze(e.yearList, (r) => (h(), O(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: G({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ae(r),
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
var Fu = ne({
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
    } = n, a = H(() => {
      var o = [], {
        preview: i,
        componentProps: {
          max: l,
          min: s
        }
      } = e;
      if (!i)
        return o;
      var u = [L(i) + 100, L(i) - 100];
      if (l) {
        var d = ie(l).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = ie(s).format("YYYY-MM-D"), m = L(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var p = u[0]; p >= u[1]; p--)
        o.push(p);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return sn(() => {
      var o = document.querySelector("." + ml("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: ml,
      classes: yh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Fu.render = wh;
const Ch = Fu;
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
ie.extend(Au);
ie.extend(zu);
var {
  n: za,
  classes: Sh
} = re("day-picker"), {
  n: Ot
} = re("date-picker");
function kh(e, n) {
  var r = oe("panel-header"), a = oe("var-button");
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.n("content"))
      },
      [J(
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
      ), J(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), O("div", {
            key: e.panelKey
          }, [z(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(h(!0), O(
              Oe,
              null,
              ze(e.sortWeekList, (t) => (h(), O(
                "li",
                {
                  key: t.index
                },
                ae(e.getDayAbbr(t.index)),
                1
                /* TEXT */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          ), z(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(h(!0), O(
              Oe,
              null,
              ze(e.days, (t, o) => (h(), O("li", {
                key: o
              }, [J(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, Qo({}, e.buttonProps(t)), {
                  onClick: (i) => e.chooseDay(t, i)
                }),
                {
                  default: fe(() => [be(
                    ae(e.filterDay(t)),
                    1
                    /* TEXT */
                  )]),
                  _: 2
                  /* DYNAMIC */
                },
                1040,
                ["elevation", "onClick"]
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
var Hu = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: Ke,
    PanelHeader: Ru
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
    } = n, [a, t, o] = e.current.split("-"), i = M([]), l = M(!1), s = M(0), u = M(null), d = Ee({
      left: !1,
      right: !1
    }), v = H(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = H(() => {
      var S;
      return e.choose.chooseYear === e.preview.previewYear && ((S = e.choose.chooseMonth) == null ? void 0 : S.index) === e.preview.previewMonth.index;
    }), m = H(() => {
      var S = rt.findIndex((B) => B.index === e.componentProps.firstDayOfWeek);
      return S === -1 || S === 0 ? rt : rt.slice(S).concat(rt.slice(0, S));
    }), p = (S) => {
      var B, E;
      return (B = (E = Ye.value.datePickerWeekDict) == null ? void 0 : E[S].abbr) != null ? B : "";
    }, b = (S) => S > 0 ? S : "", g = () => {
      var {
        preview: {
          previewMonth: S,
          previewYear: B
        }
      } = e, E = ie(B + "-" + S.index).daysInMonth(), y = ie(B + "-" + S.index + "-01").day(), T = m.value.findIndex((R) => R.index === "" + y);
      i.value = [...Array(T).fill(-1), ...Array.from(Array(E + 1).keys())].filter((R) => R);
    }, $ = () => {
      var {
        preview: {
          previewYear: S,
          previewMonth: B
        },
        componentProps: {
          max: E,
          min: y
        }
      } = e;
      if (E) {
        var T = S + "-" + (L(B.index) + 1);
        d.right = !ie(T).isSameOrBefore(ie(E), "month");
      }
      if (y) {
        var R = S + "-" + (L(B.index) - 1);
        d.left = !ie(R).isSameOrAfter(ie(y), "month");
      }
    }, V = (S) => {
      var {
        preview: {
          previewYear: B,
          previewMonth: E
        },
        componentProps: {
          min: y,
          max: T
        }
      } = e, R = !0, Q = !0, _ = B + "-" + E.index + "-" + S;
      return T && (R = ie(_).isSameOrBefore(ie(T), "day")), y && (Q = ie(_).isSameOrAfter(ie(y), "day")), R && Q;
    }, w = (S) => {
      var {
        choose: {
          chooseDays: B,
          chooseRangeDay: E
        },
        componentProps: {
          range: y
        }
      } = e;
      if (y) {
        if (!E.length)
          return !1;
        var T = ie(S).isSameOrBefore(ie(E[1]), "day"), R = ie(S).isSameOrAfter(ie(E[0]), "day");
        return T && R;
      }
      return B.includes(S);
    }, C = (S) => {
      if (S < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: za("button")
        };
      var {
        choose: {
          chooseDay: B
        },
        preview: {
          previewYear: E,
          previewMonth: y
        },
        componentProps: {
          allowedDates: T,
          color: R,
          multiple: Q,
          range: _
        }
      } = e, W = E + "-" + y.index + "-" + S, D = () => _ || Q ? w(W) : L(B) === S && f.value, x = () => V(S) ? T ? !T(W) : !1 : !0, te = x(), F = () => te ? !0 : _ || Q ? !w(W) : !f.value || L(B) !== S, Z = () => v.value && L(o) === S && e.componentProps.showCurrent ? (_ || Q || f.value) && te ? !0 : _ || Q ? !w(W) : f.value ? B !== o : !0 : !1, K = () => te ? "" : Z() ? R ?? "" : D() ? "" : Ot() + "-color-cover", A = K().startsWith(Ot());
      return {
        text: F(),
        outline: Z(),
        textColor: A ? "" : K(),
        [Ot() + "-color-cover"]: A,
        class: Sh(za("button"), za("button--usable"), [te, za("button--disabled")])
      };
    }, I = (S) => {
      l.value = S === "prev", s.value += S === "prev" ? -1 : 1, r("check-preview", "month", S);
    }, k = (S, B) => {
      var E = B.currentTarget;
      E.classList.contains(za("button--disabled")) || r("choose-day", S);
    }, N = (S) => {
      u.value.checkDate(S);
    };
    return sn(() => {
      g(), $();
    }), le(() => e.preview, () => {
      g(), $();
    }), {
      n: za,
      nDate: Ot,
      days: i,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: N,
      filterDay: b,
      getDayAbbr: p,
      checkDate: I,
      chooseDay: k,
      buttonProps: C
    };
  }
});
Hu.render = kh;
const $h = Hu;
var {
  n: Th,
  classes: Ph
} = re("date-picker");
function Oh(e, n) {
  var r = oe("year-picker-panel"), a = oe("month-picker-panel"), t = oe("day-picker-panel");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [z(
      "div",
      {
        class: c(e.n("title")),
        style: G({
          background: e.headerColor || e.color
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [j(e.$slots, "year", {
          year: e.chooseYear
        }, () => [be(
          ae(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (o) => e.clickEl("date"))
        },
        [J(
          De,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: fe(() => {
              var o, i, l;
              return [e.type === "month" ? (h(), O("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? j(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [be(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? j(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [be(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : j(e.$slots, "month", {
                key: 2,
                month: (i = e.chooseMonth) == null ? void 0 : i.index,
                year: e.chooseYear
              }, () => [be(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (h(), O("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? j(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [be(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? j(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [be(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : j(e.$slots, "date", fi(Ve({
                key: 2
              }, e.slotProps)), () => [be(
                ae(e.getDateTitle),
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
    ), z(
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
      [J(
        De,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: fe(() => [e.getPanelType === "year" ? (h(), ge(
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
          )) : e.getPanelType === "month" ? (h(), ge(
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
          )) : e.getPanelType === "date" ? (h(), ge(
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
          )) : ee("v-if", !0)]),
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
var Yu = ne({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: gh,
    YearPickerPanel: Ch,
    DayPickerPanel: $h
  },
  props: fh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = ie().format("YYYY-MM-D"), [i, l] = o.split("-"), s = Nt.find((se) => se.index === l), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), p = M(), b = M(s), g = M(i), $ = M(!1), V = M([]), w = M([]), C = M([]), I = M([]), k = M(null), N = M(null), S = Ee({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range,
      buttonElevation: e.buttonElevation
    }), B = H(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: p.value,
      chooseMonths: V.value,
      chooseDays: w.value,
      chooseRangeMonth: C.value,
      chooseRangeDay: I.value
    })), E = H(() => ({
      previewMonth: b.value,
      previewYear: g.value
    })), y = H(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return C.value.length ? C.value[0] + " ~ " + C.value[1] : "";
      var he = "";
      if (f.value) {
        var Se, ke;
        he = (Se = (ke = Ye.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Se : "";
      }
      return se ? "" + V.value.length + Ye.value.datePickerSelected : he;
    }), T = H(() => {
      var se, ye, he, Se, {
        multiple: ke,
        range: Ue
      } = e;
      if (Ue) {
        var _e = I.value.map((mo) => ie(mo).format("YYYY-MM-DD"));
        return _e.length ? _e[0] + " ~ " + _e[1] : "";
      }
      if (ke)
        return "" + w.value.length + Ye.value.datePickerSelected;
      if (!m.value || !f.value || !p.value)
        return "";
      var mn = ie(m.value + "-" + f.value.index + "-" + p.value).day(), Aa = rt.find((mo) => mo.index === "" + mn), Ui = (se = (ye = Ye.value.datePickerWeekDict) == null ? void 0 : ye[Aa.index].name) != null ? se : "", mv = (he = (Se = Ye.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? he : "", pv = ka(p.value, 2, "0");
      return Ye.value.lang === "zh-CN" ? f.value.index + "-" + pv + " " + Ui.slice(0, 3) : Ui.slice(0, 3) + ", " + mv.slice(0, 3) + " " + p.value;
    }), R = H(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = H(() => !e.touchable || ["", "year"].includes(R.value)), _ = H(() => {
      var se, ye, he, Se, ke = ie(m.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + p.value).day(), Ue = p.value ? ka(p.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = m.value) != null ? ye : "",
        month: (he = (Se = f.value) == null ? void 0 : Se.index) != null ? he : "",
        date: Ue
      };
    }), W = H(() => B.value.chooseRangeDay.map((se) => ie(se).format("YYYY-MM-DD"))), D = H(() => m.value === g.value), x = H(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === b.value.index;
    }), te = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, F = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: he
        } = se.touches[0];
        n = ye, r = he;
      }
    }, Z = (se, ye) => se >= ye && se > 20 ? "x" : "y", K = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: he
        } = se.touches[0], Se = ye - n, ke = he - r;
        t = Z(Math.abs(Se), Math.abs(ke)), a = Se > 0 ? "prev" : "next";
      }
    }, A = () => {
      if (!(Q.value || t !== "x")) {
        var se = R.value === "month" ? k : N;
        _t(() => {
          se.value.forwardRef(a), Ct();
        });
      }
    }, Y = (se, ye) => {
      var he = ye === "month" ? C : I;
      if (he.value = v.value ? [se, se] : [he.value[0], se], v.value = !v.value, v.value) {
        var Se = ie(he.value[0]).isAfter(he.value[1]), ke = Se ? [he.value[1], he.value[0]] : [...he.value];
        P(e["onUpdate:modelValue"], ke), P(e.onChange, ke);
      }
    }, X = (se, ye) => {
      var he = ye === "month" ? V : w, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = he.value.map((_e) => ie(_e).format(Se)), Ue = ke.findIndex((_e) => _e === se);
      Ue === -1 ? ke.push(se) : ke.splice(Ue, 1), P(e["onUpdate:modelValue"], ke), P(e.onChange, ke);
    }, de = (se, ye) => !m.value || !f.value ? !1 : D.value ? se === "month" ? ye.index < f.value.index : x.value ? ye < L(p.value) : f.value.index > b.value.index : m.value > g.value, pe = (se) => {
      var {
        readonly: ye,
        range: he,
        multiple: Se,
        onChange: ke,
        "onUpdate:modelValue": Ue
      } = e;
      if (!(se < 0 || ye)) {
        $.value = de("day", se);
        var _e = g.value + "-" + b.value.index + "-" + se, mn = ie(_e).format("YYYY-MM-DD");
        he ? Y(mn, "day") : Se ? X(mn, "day") : (P(Ue, mn), P(ke, mn));
      }
    }, Ae = (se) => {
      var {
        type: ye,
        readonly: he,
        range: Se,
        multiple: ke,
        onChange: Ue,
        onPreview: _e,
        "onUpdate:modelValue": mn
      } = e;
      if ($.value = de("month", se), ye === "month" && !he) {
        var Aa = g.value + "-" + se.index;
        Se ? Y(Aa, "month") : ke ? X(Aa, "month") : (P(mn, Aa), P(Ue, Aa));
      } else
        b.value = se, P(_e, L(g.value), L(b.value.index));
      d.value = !1;
    }, Be = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, P(e.onPreview, L(g.value), L(b.value.index));
    }, Ze = (se, ye) => {
      var he = ye === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (L(g.value) + he);
      else {
        var Se = L(b.value.index) + he;
        Se < 1 && (g.value = "" + (L(g.value) - 1), Se = 12), Se > 12 && (g.value = "" + (L(g.value) + 1), Se = 1), b.value = Nt.find((ke) => L(ke.index) === Se);
      }
      P(e.onPreview, L(g.value), L(b.value.index));
    }, $n = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, zn = (se) => Ce(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, qe = (se, ye) => {
      var he = ye === "month" ? C : I, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((mn) => ie(mn).format(Se)).slice(0, 2), Ue = he.value.some((mn) => zn(mn));
      if (!Ue) {
        he.value = ke;
        var _e = ie(he.value[0]).isAfter(he.value[1]);
        he.value.length === 2 && _e && (he.value = [he.value[1], he.value[0]]);
      }
    }, cn = (se, ye) => {
      var he = ye === "month" ? V : w, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Ue) => ie(Ue).format(Se))));
      he.value = ke.filter((Ue) => Ue !== "Invalid Date");
    }, wt = (se) => {
      var ye = ie(se).format("YYYY-MM-D");
      if (!zn(ye)) {
        var [he, Se, ke] = ye.split("-"), Ue = Nt.find((_e) => _e.index === Se);
        f.value = Ue, m.value = he, p.value = ke, b.value = Ue, g.value = he;
      }
    }, Ct = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!$n() || zn(se) || !se))
        if (e.range) {
          if (!Ce(se))
            return;
          v.value = se.length !== 1, qe(se, e.type);
        } else if (e.multiple) {
          if (!Ce(se))
            return;
          cn(se, e.type);
        } else
          wt(se);
    }, {
      immediate: !0
    }), le(R, Ct), {
      n: Th,
      classes: Ph,
      monthPanelEl: k,
      dayPanelEl: N,
      reverse: $,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: p,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: y,
      getDateTitle: T,
      getPanelType: R,
      getChoose: B,
      getPreview: E,
      componentProps: S,
      slotProps: _,
      formatRange: W,
      clickEl: te,
      handleTouchstart: F,
      handleTouchmove: K,
      handleTouchend: A,
      getChooseDay: pe,
      getChooseMonth: Ae,
      getChooseYear: Be,
      checkPreview: Ze,
      formatElevation: Cn
    };
  }
});
Yu.render = Oh;
const Hr = Yu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var MS = Hr;
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
function Vh(e) {
  return ["left", "center", "right"].includes(e);
}
var Mh = _o({
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
  onBeforeClose: U(),
  onConfirm: U(),
  onCancel: U(),
  "onUpdate:show": U()
}, Je(gt, [
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
function xo() {
  return xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, xo.apply(this, arguments);
}
var {
  n: Bh,
  classes: Eh
} = re("dialog");
function Ih(e, n) {
  var r = oe("var-button"), a = oe("var-popup");
  return h(), ge(
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
      default: fe(() => [z(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: xo({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [z(
          "div",
          {
            class: c(e.n("title"))
          },
          [j(e.$slots, "title", {}, () => [be(
            ae(e.dt(e.title, e.pack.dialogTitle)),
            1
            /* TEXT */
          )])],
          2
          /* CLASS */
        ), z(
          "div",
          {
            class: c(e.n("message")),
            style: G({
              textAlign: e.messageAlign
            })
          },
          [j(e.$slots, "default", {}, () => [be(
            ae(e.message),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        ), z(
          "div",
          {
            class: c(e.n("actions"))
          },
          [e.cancelButton ? (h(), ge(
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
              default: fe(() => [be(
                ae(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : ee("v-if", !0), e.confirmButton ? (h(), ge(
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
              default: fe(() => [be(
                ae(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : ee("v-if", !0)],
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
var ju = ne({
  name: "VarDialog",
  components: {
    VarPopup: gn,
    VarButton: Ke
  },
  inheritAttrs: !1,
  props: Mh,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => P(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (P(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        P(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (P(s), l != null) {
        l("confirm", a);
        return;
      }
      P(e["onUpdate:show"], !1);
    }, i = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (P(s), l != null) {
        l("cancel", a);
        return;
      }
      P(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), le(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: Bh,
      classes: Eh,
      pack: Ye,
      dt: Jt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: me
    };
  }
});
ju.render = Ih;
const dr = ju;
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wt.apply(this, arguments);
}
var er, Gt = {};
function Nh(e) {
  return e === void 0 && (e = {}), Ge(e) ? Wt({}, Gt, {
    message: e
  }) : Wt({}, Gt, e);
}
function Pa(e) {
  return ht() ? new Promise((n) => {
    Pa.close();
    var r = Nh(e), a = Ee(r);
    a.teleport = "body", er = a;
    var {
      unmountInstance: t
    } = xa(dr, a, {
      onConfirm: () => {
        P(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        P(a.onCancel), n("cancel");
      },
      onClose: () => {
        P(a.onClose), n("close");
      },
      onClosed: () => {
        P(a.onClosed), t(), er === a && (er = null);
      },
      onRouteChange: () => {
        t(), er === a && (er = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
function Dh(e) {
  Gt = e;
}
function Ah() {
  Gt = {};
}
function zh() {
  if (er != null) {
    var e = er;
    er = null, Ie().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(Pa, {
  setDefaultOptions: Dh,
  resetDefaultOptions: Ah,
  close: zh
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
Pa.install = function(e) {
  e.component(dr.name, dr);
};
Pa.Component = dr;
var BS = dr, Lh = {
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
function Ya() {
  return Ya = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ya.apply(this, arguments);
}
var {
  n: Rh,
  classes: Uh
} = re("divider");
function Fh(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [j(e.$slots, "default", {}, () => [e.description ? (h(), O(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var Wu = ne({
  name: "VarDivider",
  props: Lh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ee({
      withText: !1
    }), t = H(() => So(e.inset) ? e.inset : !0), o = H(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (So(l) || l === 0)
        return Ya({}, d);
      var v = L(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Ya({}, d, {
        height: "calc(80% - " + me(f) + ")"
      }) : Ya({}, d, {
        width: "calc(100% - " + me(f) + ")",
        left: v > 0 ? me(f) : me(0)
      });
    }), i = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return sn(() => {
      i();
    }), Zt(() => {
      i();
    }), Ya({
      n: Rh,
      classes: Uh
    }, kv(a), {
      style: o,
      isInset: t
    });
  }
});
Wu.render = Fh;
const Yr = Wu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var ES = Yr, Hh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Dt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Hh[n];
  });
}
var Fn = "top", br = "bottom", Oa = "right", vr = "left", so = "auto", uo = [Fn, br, Oa, vr], vo = "start", vt = "end", Yh = "clippingParents", Gu = "viewport", et = "popper", jh = "reference", pl = /* @__PURE__ */ uo.reduce(function(e, n) {
  return e.concat([n + "-" + vo, n + "-" + vt]);
}, []), qu = /* @__PURE__ */ [].concat(uo, [so]).reduce(function(e, n) {
  return e.concat([n, n + "-" + vo, n + "-" + vt]);
}, []), Wh = "beforeRead", Gh = "read", qh = "afterRead", Xh = "beforeMain", Kh = "main", Zh = "afterMain", Jh = "beforeWrite", Qh = "write", _h = "afterWrite", ei = [Wh, Gh, qh, Xh, Kh, Zh, Jh, Qh, _h];
function Hn(e) {
  return e.split("-")[0];
}
var xh = {
  start: "end",
  end: "start"
};
function hl(e) {
  return e.replace(/start|end/g, function(n) {
    return xh[n];
  });
}
function kn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Va(e) {
  var n = kn(e).Element;
  return e instanceof n || e instanceof Element;
}
function yn(e) {
  var n = kn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Mi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = kn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Sr(e) {
  return ((Va(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var tt = Math.max, gl = Math.min, Xa = Math.round;
function ni() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Xu() {
  return !/^((?!chrome|android).)*safari/i.test(ni());
}
function Ka(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && yn(e) && (t = e.offsetWidth > 0 && Xa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Xa(a.height) / e.offsetHeight || 1);
  var i = Va(e) ? kn(e) : window, l = i.visualViewport, s = !Xu() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Bi(e) {
  var n = kn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Ei(e) {
  return Ka(Sr(e)).left + Bi(e).scrollLeft;
}
function eg(e, n) {
  var r = kn(e), a = Sr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = Xu();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + Ei(e),
    y: s
  };
}
function Mn(e) {
  return kn(e).getComputedStyle(e);
}
function ng(e) {
  var n, r = Sr(e), a = Bi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = tt(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = tt(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Ei(e), s = -a.scrollTop;
  return Mn(t || r).direction === "rtl" && (l += tt(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function An(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function fo(e) {
  return An(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Mi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Sr(e)
  );
}
function Ii(e) {
  var n = Mn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Ku(e) {
  return ["html", "body", "#document"].indexOf(An(e)) >= 0 ? e.ownerDocument.body : yn(e) && Ii(e) ? e : Ku(fo(e));
}
function ot(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Ku(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = kn(a), i = t ? [o].concat(o.visualViewport || [], Ii(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(ot(fo(i)))
  );
}
function rg(e) {
  return ["table", "td", "th"].indexOf(An(e)) >= 0;
}
function yl(e) {
  return !yn(e) || // https://github.com/popperjs/popper-core/issues/837
  Mn(e).position === "fixed" ? null : e.offsetParent;
}
function ag(e) {
  var n = /firefox/i.test(ni()), r = /Trident/i.test(ni());
  if (r && yn(e)) {
    var a = Mn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = fo(e);
  for (Mi(t) && (t = t.host); yn(t) && ["html", "body"].indexOf(An(t)) < 0; ) {
    var o = Mn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ni(e) {
  for (var n = kn(e), r = yl(e); r && rg(r) && Mn(r).position === "static"; )
    r = yl(r);
  return r && (An(r) === "html" || An(r) === "body" && Mn(r).position === "static") ? n : r || ag(e) || n;
}
function tg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Mi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function ri(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function og(e, n) {
  var r = Ka(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function bl(e, n, r) {
  return n === Gu ? ri(eg(e, r)) : Va(n) ? og(n, r) : ri(ng(Sr(e)));
}
function ig(e) {
  var n = ot(fo(e)), r = ["absolute", "fixed"].indexOf(Mn(e).position) >= 0, a = r && yn(e) ? Ni(e) : e;
  return Va(a) ? n.filter(function(t) {
    return Va(t) && tg(t, a) && An(t) !== "body";
  }) : [];
}
function lg(e, n, r, a) {
  var t = n === "clippingParents" ? ig(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = bl(e, u, a);
    return s.top = tt(d.top, s.top), s.right = gl(d.right, s.right), s.bottom = gl(d.bottom, s.bottom), s.left = tt(d.left, s.left), s;
  }, bl(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ft(e) {
  return e.split("-")[1];
}
function sg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Hn(a) : null, o = a ? ft(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Fn:
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case br:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Oa:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case vr:
      s = {
        x: n.x - r.width,
        y: l
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
      case vo:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case vt:
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
function Ju(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? Yh : l, u = r.rootBoundary, d = u === void 0 ? Gu : u, v = r.elementContext, f = v === void 0 ? et : v, m = r.altBoundary, p = m === void 0 ? !1 : m, b = r.padding, g = b === void 0 ? 0 : b, $ = dg(typeof g != "number" ? g : vg(g, uo)), V = f === et ? jh : et, w = e.rects.popper, C = e.elements[p ? V : f], I = lg(Va(C) ? C : C.contextElement || Sr(e.elements.popper), s, d, i), k = Ka(e.elements.reference), N = Zu({
    reference: k,
    element: w,
    strategy: "absolute",
    placement: t
  }), S = ri(Object.assign({}, w, N)), B = f === et ? S : k, E = {
    top: I.top - B.top + $.top,
    bottom: B.bottom - I.bottom + $.bottom,
    left: I.left - B.left + $.left,
    right: B.right - I.right + $.right
  }, y = e.modifiersData.offset;
  if (f === et && y) {
    var T = y[t];
    Object.keys(E).forEach(function(R) {
      var Q = [Oa, br].indexOf(R) >= 0 ? 1 : -1, _ = [Fn, br].indexOf(R) >= 0 ? "y" : "x";
      E[R] += T[_] * Q;
    });
  }
  return E;
}
function fg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? qu : s, d = ft(a), v = d ? l ? pl : pl.filter(function(p) {
    return ft(p) === d;
  }) : uo, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(p, b) {
    return p[b] = Ju(e, {
      placement: b,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[Hn(b)], p;
  }, {});
  return Object.keys(m).sort(function(p, b) {
    return m[p] - m[b];
  });
}
function cg(e) {
  if (Hn(e) === so)
    return [];
  var n = Dt(e);
  return [hl(e), n, hl(n)];
}
function mg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, b = r.allowedAutoPlacements, g = n.options.placement, $ = Hn(g), V = $ === g, w = s || (V || !p ? [Dt(g)] : cg(g)), C = [g].concat(w).reduce(function(Y, X) {
      return Y.concat(Hn(X) === so ? fg(n, {
        placement: X,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: b
      }) : X);
    }, []), I = n.rects.reference, k = n.rects.popper, N = /* @__PURE__ */ new Map(), S = !0, B = C[0], E = 0; E < C.length; E++) {
      var y = C[E], T = Hn(y), R = ft(y) === vo, Q = [Fn, br].indexOf(T) >= 0, _ = Q ? "width" : "height", W = Ju(n, {
        placement: y,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), D = Q ? R ? Oa : vr : R ? br : Fn;
      I[_] > k[_] && (D = Dt(D));
      var x = Dt(D), te = [];
      if (o && te.push(W[T] <= 0), l && te.push(W[D] <= 0, W[x] <= 0), te.every(function(Y) {
        return Y;
      })) {
        B = y, S = !1;
        break;
      }
      N.set(y, te);
    }
    if (S)
      for (var F = p ? 3 : 1, Z = function(X) {
        var de = C.find(function(pe) {
          var Ae = N.get(pe);
          if (Ae)
            return Ae.slice(0, X).every(function(Be) {
              return Be;
            });
        });
        if (de)
          return B = de, "break";
      }, K = F; K > 0; K--) {
        var A = Z(K);
        if (A === "break")
          break;
      }
    n.placement !== B && (n.modifiersData[a]._skip = !0, n.placement = B, n.reset = !0);
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
  var a = Hn(e), t = [vr, Fn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [vr, Oa].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function gg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = qu.reduce(function(d, v) {
    return d[v] = hg(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
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
function wg(e) {
  return e === kn(e) || !yn(e) ? Bi(e) : bg(e);
}
function Cg(e) {
  var n = e.getBoundingClientRect(), r = Xa(n.width) / e.offsetWidth || 1, a = Xa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Sg(e, n, r) {
  r === void 0 && (r = !1);
  var a = yn(n), t = yn(n) && Cg(n), o = Sr(n), i = Ka(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((An(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ii(o)) && (l = wg(n)), yn(n) ? (s = Ka(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Ei(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function kg(e) {
  var n = Ka(e), r = e.offsetWidth, a = e.offsetHeight;
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
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(l) {
      if (!r.has(l)) {
        var s = n.get(l);
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
  return ei.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Pg(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Zn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var kr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Og = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', wl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Vg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), wl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Zn(kr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Zn(kr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          ei.indexOf(n.phase) < 0 && console.error(Zn(kr, n.name, '"phase"', "either " + ei.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Zn(kr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Zn(kr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Zn(kr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Zn(kr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + wl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Zn(Og, String(n.name), a, a));
      });
    });
  });
}
function Mg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Bg(e) {
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
var Cl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Eg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Sl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function kl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Ig(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Sl : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Sl, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function($) {
        var V = typeof $ == "function" ? $(d.options) : $;
        b(), d.options = Object.assign({}, o, d.options, V), d.scrollParents = {
          reference: Va(l) ? ot(l) : l.contextElement ? ot(l.contextElement) : [],
          popper: ot(s)
        };
        var w = Tg(Bg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = w.filter(function(y) {
          return y.enabled;
        }), process.env.NODE_ENV !== "production") {
          var C = Mg([].concat(w, d.options.modifiers), function(y) {
            var T = y.name;
            return T;
          });
          if (Vg(C), Hn(d.options.placement) === so) {
            var I = d.orderedModifiers.find(function(y) {
              var T = y.name;
              return T === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = Mn(s), N = k.marginTop, S = k.marginRight, B = k.marginBottom, E = k.marginLeft;
          [N, S, B, E].some(function(y) {
            return parseFloat(y);
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
          var $ = d.elements, V = $.reference, w = $.popper;
          if (!kl(V, w)) {
            process.env.NODE_ENV !== "production" && console.error(Cl);
            return;
          }
          d.rects = {
            reference: Sg(V, Ni(w), d.options.strategy === "fixed"),
            popper: kg(w)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(y) {
            return d.modifiersData[y.name] = Object.assign({}, y.data);
          });
          for (var C = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (C += 1, C > 100)) {
              console.error(Eg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var k = d.orderedModifiers[I], N = k.fn, S = k.options, B = S === void 0 ? {} : S, E = k.name;
            typeof N == "function" && (d = N({
              state: d,
              options: B,
              name: E,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Pg(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!kl(l, s))
      return process.env.NODE_ENV !== "production" && console.error(Cl), m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var $ = g.name, V = g.options, w = V === void 0 ? {} : V, C = g.effect;
        if (typeof C == "function") {
          var I = C({
            state: d,
            name: $,
            instance: m,
            options: w
          }), k = function() {
          };
          v.push(I || k);
        }
      });
    }
    function b() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return m;
  };
}
var Vt = {
  passive: !0
};
function Ng(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = kn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Vt);
  }), l && s.addEventListener("resize", r.update, Vt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Vt);
    }), l && s.removeEventListener("resize", r.update, Vt);
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
  n.modifiersData[r] = Zu({
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
    x: Xa(n * t) / t || 0,
    y: Xa(r * t) / t || 0
  };
}
function $l(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, p = i.y, b = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = g.x, b = g.y;
  var $ = i.hasOwnProperty("x"), V = i.hasOwnProperty("y"), w = vr, C = Fn, I = window;
  if (u) {
    var k = Ni(r), N = "clientHeight", S = "clientWidth";
    if (k === kn(r) && (k = Sr(r), Mn(k).position !== "static" && l === "absolute" && (N = "scrollHeight", S = "scrollWidth")), k = k, t === Fn || (t === vr || t === Oa) && o === vt) {
      C = br;
      var B = v && k === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[N]
      );
      b -= B - a.height, b *= s ? 1 : -1;
    }
    if (t === vr || (t === Fn || t === br) && o === vt) {
      w = Oa;
      var E = v && k === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[S]
      );
      m -= E - a.width, m *= s ? 1 : -1;
    }
  }
  var y = Object.assign({
    position: l
  }, u && Lg), T = d === !0 ? Rg({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  if (m = T.x, b = T.y, s) {
    var R;
    return Object.assign({}, y, (R = {}, R[C] = V ? "0" : "", R[w] = $ ? "0" : "", R.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", R));
  }
  return Object.assign({}, y, (n = {}, n[C] = V ? b + "px" : "", n[w] = $ ? m + "px" : "", n.transform = "", n));
}
function Ug(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, i = o === void 0 ? !0 : o, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = Mn(n.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Hn(n.placement),
    variation: ft(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, $l(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, $l(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Fg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ug,
  data: {}
};
function Hg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !yn(o) || !An(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Yg(e) {
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
      var t = n.elements[a], o = n.attributes[a] || {}, i = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !yn(t) || !An(t) || (Object.assign(t.style, l), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const jg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Hg,
  effect: Yg,
  requires: ["computeStyles"]
};
var Wg = [Dg, zg, Fg, jg], Gg = /* @__PURE__ */ Ig({
  defaultModifiers: Wg
});
function qt() {
  return qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, qt.apply(this, arguments);
}
function Tl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Pl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Tl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Tl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Qu(e) {
  var n = M(null), r = M(null), a = M({
    width: 0,
    height: 0
  }), t = ms(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(k, N) {
      N ? (w(), P(e.onOpen)) : P(e.onClose);
    }
  }), {
    zIndex: o
  } = yt(() => t.value, 1), i = null, l = !1, s = !1, u = () => {
    var {
      width: k,
      height: N
    } = window.getComputedStyle(n.value);
    a.value = {
      width: Le(k),
      height: Le(N)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, C());
  }, v = /* @__PURE__ */ function() {
    var k = Pl(function* () {
      e.trigger === "hover" && (s = !1, yield In(), !l && I());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (l = !0);
  }, m = /* @__PURE__ */ function() {
    var k = Pl(function* () {
      e.trigger === "hover" && (l = !1, yield In(), !s && I());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), p = () => {
    C();
  }, b = () => {
    t.value = !1, P(e["onUpdate:show"], !1);
  }, g = () => {
    e.trigger === "click" && b();
  }, $ = () => {
    u();
    var k = {
      x: Le(e.offsetX),
      y: Le(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: k.x,
          distance: k.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: k.x,
          distance: k.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: k.x,
          distance: k.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: k.x,
          distance: -k.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: k.x,
          distance: -k.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: k.x,
          distance: -k.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: k.y,
          distance: k.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: k.y,
          distance: -k.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: k.y,
          distance: -k.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: k.x,
          distance: -k.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: k.x,
          distance: k.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: k.y,
          distance: k.x
        };
    }
  }, V = () => {
    var {
      placement: k,
      skidding: N,
      distance: S
    } = $(), B = [qt({}, pg, {
      enabled: t.value
    }), qt({}, yg, {
      options: {
        offset: [N, S]
      }
    })];
    return {
      placement: k,
      modifiers: B
    };
  }, w = () => {
    i.setOptions(V());
  }, C = () => {
    var {
      disabled: k
    } = e;
    k || (t.value = !0, P(e["onUpdate:show"], !0));
  }, I = () => {
    t.value = !1, P(e["onUpdate:show"], !1);
  };
  return cs(n, "click", g), le(() => e.offsetX, w), le(() => e.offsetY, w), le(() => e.placement, w), le(() => e.disabled, I), Xt(() => {
    var k, N = e.reference ? (k = n.value) == null ? void 0 : k.querySelector(e.reference) : n.value;
    i = Gg(N ?? n.value, r.value, V());
  }), Qa(() => {
    i.destroy();
  }), {
    show: t,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: a,
    handleHostClick: p,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: b,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: w,
    open: C,
    close: I
  };
}
function qg(e) {
  return ["click", "hover"].includes(e);
}
function Xg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Kg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Zg = {
  type: {
    type: String,
    default: "default",
    validator: Kg
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
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: Xg
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: Jg,
  classes: Qg
} = re("tooltip");
function _g(e, n) {
  return h(), O(
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
    [j(e.$slots, "default"), (h(), ge(
      Ea,
      {
        to: e.teleport
      },
      [J(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: fe(() => [we(z(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: G({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = En(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [z(
              "div",
              {
                style: G({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [j(e.$slots, "content", {}, () => [be(
                ae(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[hr, e.show]])]),
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
var _u = ne({
  name: "VarTooltip",
  props: Zg,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: i,
      handleHostMouseenter: l,
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
    } = Qu(e);
    return {
      toSizeUnit: me,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Jg,
      classes: Qg,
      handleHostClick: i,
      handlePopoverClose: v,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: p,
      open: f,
      close: m
    };
  }
});
_u.render = _g;
const fr = _u;
fr.install = function(e) {
  e.component(fr.name, fr);
};
var IS = fr;
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
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ai.apply(this, arguments);
}
var {
  n: ny,
  classes: ry
} = re("ellipsis"), ay = {
  key: 0
};
function ty(e, n) {
  var r = oe("var-tooltip");
  return h(), ge(
    r,
    fi(as(e.tooltip)),
    {
      content: fe(() => [j(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), O(
          "span",
          ay,
          ae(e.tooltip.content),
          1
          /* TEXT */
        )) : j(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: fe(() => [z(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: G(e.rootStyles),
          onClick: n[0] || (n[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [j(e.$slots, "default")],
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
var xu = ne({
  name: "VarEllipsis",
  components: {
    VarTooltip: fr
  },
  props: ey,
  setup(e) {
    var n = M(!1), r = H(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = H(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : ai({
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
xu.render = ty;
const jr = xu;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var NS = jr;
function oy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function iy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function ly(e) {
  return ["click", "hover"].includes(e);
}
var sy = {
  active: {
    type: Boolean,
    default: !1
  },
  show: {
    type: Boolean,
    default: !0
  },
  type: {
    type: String,
    default: "primary",
    validator: qs
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: oy
  },
  direction: {
    type: String,
    default: "top",
    validator: iy
  },
  trigger: {
    type: String,
    default: "click",
    validator: ly
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  inactiveIcon: {
    type: String,
    default: "plus"
  },
  activeIcon: {
    type: String,
    default: "window-close"
  },
  inactiveIconSize: {
    type: [Number, String]
  },
  activeIconSize: {
    type: [Number, String]
  },
  fixed: {
    type: Boolean,
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  top: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  left: {
    type: [Number, String]
  },
  right: {
    type: [Number, String]
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  teleport: {
    type: String
  },
  onClick: U(),
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:active": U()
};
function Ol(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pt(e);
}
var {
  classes: Vl,
  n: rn
} = re("fab");
const Wr = ne({
  name: "VarFab",
  inheritAttrs: !1,
  props: sy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = ms(e, "active", {
      emit: (f, m) => P(e["onUpdate:active"], m)
    }), o = M(null), {
      disabled: i
    } = xt(), l = (f, m, p) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (p === 0) {
          P(e.onClick, t.value, f);
          return;
        }
        t.value = m, P(e.onClick, t.value, f), P(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, P(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, P(e.onClose));
    }, d = () => r.trigger ? e.show ? r.trigger({
      active: t.value
    }) : null : we(J(Ke, {
      "var-fab-cover": !0,
      class: rn("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [J($e, {
        "var-fab-cover": !0,
        class: Vl([t.value, rn("trigger-active-icon"), rn("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: rn("--trigger-icon-animation")
      }, null)]
    }), [[hr, e.show]]), v = () => {
      var f, m, p = ps((m = r.default == null ? void 0 : r.default()) != null ? m : []);
      return J("div", Ve({
        class: Vl(rn(), rn("--position-" + e.position), rn("--direction-" + e.direction), [e.fixed, rn("--fixed"), rn("--absolute")], [e.safeArea, rn("--safe-area")]),
        style: {
          zIndex: L(e.zIndex),
          top: me(e.top),
          bottom: me(e.bottom),
          left: me(e.left),
          right: me(e.right)
        },
        ref: o,
        onClick: (b) => l(b, !t.value, p.length),
        onMouseleave: () => s(!1, p.length),
        onMouseenter: () => s(!0, p.length)
      }, a), [J(De, {
        name: rn("--active-transition")
      }, Ol(f = d()) ? f : {
        default: () => [f]
      }), J(De, {
        name: rn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [we(J("div", {
          class: rn("actions"),
          onClick: (b) => b.stopPropagation()
        }, [p.map((b) => J("div", {
          class: rn("action")
        }, [b]))]), [[hr, e.show && t.value && p.length]])]
      })]);
    };
    return le(() => e.trigger, () => {
      t.value = !1;
    }), le(() => e.disabled, () => {
      t.value = !1;
    }), cs(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return J(Ea, {
          to: f,
          disabled: i.value
        }, Ol(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var DS = Wr;
function uy(e) {
  return ["start", "end"].includes(e);
}
var dy = {
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
    validator: uy
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Ml(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ml(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ml(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: fy
} = re("form");
function cy(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var ed = ne({
  name: "VarForm",
  props: dy,
  setup(e) {
    var n = H(() => e.disabled), r = H(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = ym(), o = (d) => {
      setTimeout(() => {
        var v = Da(d), f = v === window ? 0 : Xi(v), m = Xi(d) - f - Le(e.scrollToErrorOffsetY);
        st(v, {
          top: m,
          animation: ko
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = vy(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: $
          } = g;
          return $();
        }));
        if (e.scrollToError) {
          var [, f] = Vv(v, (g) => g === !1, e.scrollToError), m = f > -1;
          if (m) {
            var p, b = (p = a[f].instance.proxy) == null ? void 0 : p.$el;
            o(b);
          }
          return !m;
        }
        return v.every((g) => g === !0);
      });
      return function() {
        return d.apply(this, arguments);
      };
    }(), l = () => a.forEach((d) => {
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
      n: fy,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
ed.render = cy;
const Yn = ed;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
Yn.useValidation = wn;
Yn.useForm = Sn;
var AS = Yn;
function my(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var py = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: my,
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
  onClick: U(),
  onLoad: U(),
  onError: U()
}, {
  n: hy,
  classes: gy
} = re("image"), yy = ["alt", "title", "lazy-error", "lazy-loading"], by = ["alt", "title", "src"];
function wy(e, n) {
  var r = Me("lazy"), a = Me("ripple");
  return we((h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? we((h(), O(
      "img",
      {
        key: 0,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: G({
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
      yy
    )), [[r, e.src]]) : (h(), O(
      "img",
      {
        key: 1,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: G({
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
      by
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var nd = ne({
  name: "VarImage",
  directives: {
    Lazy: ut,
    Ripple: Re
  },
  props: py,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: i,
        onLoad: l,
        onError: s
      } = e;
      i ? (o._lazy.state === "success" && P(l, t), o._lazy.state === "error" && P(s, t)) : P(l, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: i
      } = e;
      !o && P(i, t);
    }, a = (t) => {
      P(e.onClick, t);
    };
    return {
      n: hy,
      classes: gy,
      toSizeUnit: me,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
nd.render = wy;
const Gr = nd;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var zS = Gr, rd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Cy() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn(rd);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var ad = {
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
  onChange: U()
};
function Bl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Sy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Bl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Bl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var ky = 250, $y = 20, {
  n: Ty,
  classes: Py
} = re("swipe"), Oy = ["onClick"];
function Vy(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: G({
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
      [j(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), j(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), O(
        Oe,
        null,
        ze(e.length, (r, a) => (h(), O(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: G({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Oy
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : ee("v-if", !0)])],
    2
    /* CLASS */
  );
}
var td = ne({
  name: "VarSwipe",
  props: ad,
  setup(e) {
    var n = M(null), r = M(0), a = H(() => e.vertical), t = M(0), o = M(0), i = M(!1), l = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Cy(), v = !1, f = -1, m, p, b, g, $, V = (F) => s.find((Z) => {
      var {
        index: K
      } = Z;
      return K.value === F;
    }), w = () => {
      e.loop && (o.value >= 0 && V(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && V(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (V(d.value - 1).setTranslate(0), V(0).setTranslate(0)));
    }, C = (F) => {
      var Z = nn(F) ? F : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: K
      } = e;
      return Z <= -1 ? K ? -1 : 0 : Z >= d.value ? K ? d.value : d.value - 1 : Z;
    }, I = (F) => {
      var {
        loop: Z
      } = e;
      return F === -1 ? Z ? d.value - 1 : 0 : F === d.value ? Z ? 0 : d.value - 1 : F;
    }, k = (F) => {
      var {
        loop: Z
      } = e;
      return F < 0 ? Z ? d.value - 1 : 0 : F > d.value - 1 ? Z ? 0 : d.value - 1 : F;
    }, N = (F) => {
      var Z = o.value >= r.value, K = o.value <= -t.value, A = 0, Y = -(t.value - r.value);
      i.value = !0, (Z || K) && (i.value = !0, o.value = K ? A : Y, V(0).setTranslate(0), V(d.value - 1).setTranslate(0)), _t(() => {
        i.value = !1, P(F);
      });
    }, S = () => {
      l.value = k(L(e.initialIndex));
    }, B = () => {
      var {
        autoplay: F
      } = e;
      !F || d.value <= 1 || (E(), f = window.setTimeout(() => {
        W(), B();
      }, L(F)));
    }, E = () => {
      f && clearTimeout(f);
    }, y = (F, Z) => {
      if (F > Z && F > 10)
        return "horizontal";
      if (Z > F && Z > 10)
        return "vertical";
    }, T = (F) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: K
        } = F.touches[0];
        m = Z, p = K, b = performance.now(), v = !0, E(), N(() => {
          i.value = !0;
        });
      }
    }, R = (F) => {
      var {
        touchable: Z,
        vertical: K
      } = e;
      if (!(!v || !Z)) {
        var {
          clientX: A,
          clientY: Y
        } = F.touches[0], X = Math.abs(A - m), de = Math.abs(Y - p), pe = y(X, de), Ae = K ? "vertical" : "horizontal";
        if (pe === Ae) {
          F.preventDefault();
          var Be = g !== void 0 ? A - g : 0, Ze = $ !== void 0 ? Y - $ : 0;
          g = A, $ = Y, o.value += K ? Ze : Be, w();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: F,
          onChange: Z
        } = e, K = F ? $ < p : g < m, A = Math.abs(F ? p - $ : m - g), Y = performance.now() - b <= ky && A >= $y, X = Y ? C(K ? l.value + 1 : l.value - 1) : C();
        v = !1, i.value = !1, g = void 0, $ = void 0, o.value = X * -r.value;
        var de = l.value;
        l.value = I(X), B(), de !== l.value && P(Z, l.value);
      }
    }, _ = () => {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = l.value * -r.value, s.forEach((F) => {
        F.setTranslate(0);
      }), B(), setTimeout(() => {
        i.value = !1;
      }));
    }, W = (F) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: K
        } = e, A = l.value;
        l.value = k(A + 1), (F == null ? void 0 : F.event) !== !1 && P(K, l.value), N(() => {
          if (A === d.value - 1 && Z) {
            V(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          A !== d.value - 1 && (o.value = l.value * -r.value);
        });
      }
    }, D = (F) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: K
        } = e, A = l.value;
        l.value = k(A - 1), (F == null ? void 0 : F.event) !== !1 && P(K, l.value), N(() => {
          if (A === 0 && Z) {
            V(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          A !== 0 && (o.value = l.value * -r.value);
        });
      }
    }, x = (F, Z) => {
      if (!(d.value <= 1 || F === l.value)) {
        F = F < 0 ? 0 : F, F = F >= d.value ? d.value : F;
        var K = F > l.value ? W : D, A = Math.abs(F - l.value);
        Array.from({
          length: A
        }).forEach((Y, X) => {
          K({
            event: X === A - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, te = {
      size: r,
      vertical: a
    };
    return u(te), le(() => d.value, /* @__PURE__ */ Sy(function* () {
      yield In(), S(), _();
    })), Ja(_), wr(E), Qa(E), $a(window, "resize", _), {
      n: Ty,
      classes: Py,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: i,
      handleTouchstart: T,
      handleTouchmove: R,
      handleTouchend: Q,
      next: W,
      prev: D,
      to: x,
      resize: _,
      toNumber: L
    };
  }
});
td.render = Vy;
const jn = td;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var LS = jn;
function My() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = un(rd);
  if (!e)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: By
} = re("swipe-item");
function Ey(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n()),
      style: G({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var od = ne({
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = My(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: By,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
od.render = Ey;
const Wn = od;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var RS = Wn;
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
var Iy = ti({
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
  "onUpdate:show": U()
}, Je(ad, ["loop", "indicator", "onChange"]), Je(gt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: El,
  classes: Ny
} = re("image-preview"), Il = 12, Nl = 200, Dy = 350, Dl = 200, Ay = ["src", "alt"];
function zy(e, n) {
  var r = oe("var-swipe-item"), a = oe("var-swipe"), t = oe("var-icon"), o = oe("var-popup");
  return h(), ge(
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
      default: fe(() => [J(
        a,
        Ve({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: fe(() => [(h(!0), O(
            Oe,
            null,
            ze(e.images, (i) => (h(), ge(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: i
              },
              {
                default: fe(() => [z(
                  "div",
                  {
                    class: c(e.n("zoom-container")),
                    style: G({
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
                  [z(
                    "img",
                    {
                      class: c(e.n("image")),
                      src: i,
                      alt: i
                    },
                    null,
                    10,
                    Ay
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
          indicator: fe((i) => {
            var {
              index: l,
              length: s
            } = i;
            return [j(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (h(), O(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ae(l + 1) + " / " + ae(s),
              3
              /* TEXT, CLASS */
            )) : ee("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), j(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), ge(
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
      )) : ee("v-if", !0)]), z(
        "div",
        {
          class: c(e.n("extra"))
        },
        [j(e.$slots, "extra")],
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
var id = ne({
  name: "VarImagePreview",
  components: {
    VarSwipe: jn,
    VarSwipeItem: Wn,
    VarPopup: gn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Iy,
  setup(e) {
    var n = M(!1), r = H(() => {
      var {
        images: E,
        current: y
      } = e, T = E.findIndex((R) => R === y);
      return T >= 0 ? T : 0;
    }), a = M(1), t = M(0), o = M(0), i = M(void 0), l = M(void 0), s = M(!0), u = null, d = null, v = null, f = (E, y) => {
      var {
        clientX: T,
        clientY: R
      } = E, {
        clientX: Q,
        clientY: _
      } = y;
      return Math.abs(Math.sqrt(Math.pow(Q - T, 2) + Math.pow(_ - R, 2)));
    }, m = (E, y) => ({
      clientX: E.clientX,
      clientY: E.clientY,
      timestamp: Date.now(),
      target: y
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        i.value = "linear", l.value = "0s";
      }, Dl);
    }, b = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, g = (E) => d ? f(d, E) <= Il && E.timestamp - d.timestamp <= Nl && d.target === E.target : !1, $ = (E) => !E || !u || !d ? !1 : f(u, d) <= Il && Date.now() - d.timestamp < Dy && (E === u.target || E.parentNode === u.target), V = (E) => {
      v = window.setTimeout(() => {
        $(E.target) && B(), u = null;
      }, Nl);
    }, w = (E) => {
      v && window.clearTimeout(v);
      var {
        touches: y
      } = E, T = m(y[0], E.currentTarget);
      if (u = T, g(T)) {
        a.value > 1 ? b() : p();
        return;
      }
      d = T;
    }, C = (E) => {
      var {
        offsetWidth: y,
        offsetHeight: T
      } = E, {
        naturalWidth: R,
        naturalHeight: Q
      } = E.querySelector("." + El("image"));
      return {
        width: y,
        height: T,
        imageRadio: Q / R,
        rootRadio: T / y,
        zoom: L(e.zoom)
      };
    }, I = (E) => {
      var {
        zoom: y,
        imageRadio: T,
        rootRadio: R,
        width: Q,
        height: _
      } = C(E);
      if (!T)
        return 0;
      var W = T > R ? _ / T : Q;
      return Math.max(0, (y * W - Q) / 2) / y;
    }, k = (E) => {
      var {
        zoom: y,
        imageRadio: T,
        rootRadio: R,
        width: Q,
        height: _
      } = C(E);
      if (!T)
        return 0;
      var W = T > R ? _ : Q * T;
      return Math.max(0, (y * W - _) / 2) / y;
    }, N = (E, y, T) => E + y >= T ? T : E + y <= -T ? -T : E + y, S = (E) => {
      if (d) {
        var y = E.currentTarget, {
          touches: T
        } = E, R = m(T[0], y);
        if (a.value > 1) {
          var Q = R.clientX - d.clientX, _ = R.clientY - d.clientY, W = I(y), D = k(y);
          t.value = N(t.value, Q, W), o.value = N(o.value, _, D);
        }
        d = R;
      }
    }, B = () => {
      if (a.value > 1) {
        b(), setTimeout(() => P(e["onUpdate:show"], !1), Dl);
        return;
      }
      P(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (E) => {
      n.value = E;
    }, {
      immediate: !0
    }), {
      n: El,
      classes: Ny,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: i,
      transitionDuration: l,
      handleTouchstart: w,
      handleTouchmove: S,
      handleTouchend: V,
      close: B
    };
  }
});
id.render = zy;
const cr = id;
function it() {
  return it = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, it.apply(this, arguments);
}
var nr, lt = {};
function Ly(e) {
  return e === void 0 && (e = {}), Ge(e) ? it({}, lt, {
    images: [e]
  }) : Ce(e) ? it({}, lt, {
    images: e
  }) : it({}, lt, e);
}
function Bn(e) {
  if (ht()) {
    Bn.close();
    var n = Ly(e), r = Ee(n);
    r.teleport = "body", nr = r;
    var {
      unmountInstance: a
    } = xa(cr, r, {
      onClose: () => P(r.onClose),
      onClosed: () => {
        P(r.onClosed), a(), nr === r && (nr = null);
      },
      onRouteChange: () => {
        a(), nr === r && (nr = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Bn.close = () => {
  if (nr != null) {
    var e = nr;
    nr = null, Ie().then(() => {
      e.show = !1;
    });
  }
};
Bn.setDefaultOptions = (e) => {
  lt = e;
};
Bn.resetDefaultOptions = () => {
  lt = {};
};
cr.install = function(e) {
  e.component(cr.name, cr);
};
Bn.install = function(e) {
  e.component(cr.name, cr);
};
Bn.Component = cr;
var US = cr, At = {
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
  onScroll: U()
};
function Al(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function zl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Al(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Al(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Ry,
  classes: Uy
} = re("sticky");
function Fy(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: G({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [z(
      "div",
      {
        class: c(e.n("wrapper")),
        ref: "wrapperEl",
        style: G({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [j(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var ld = ne({
  name: "VarSticky",
  props: At,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), o = M("0px"), i = M("auto"), l = M("auto"), s = M("auto"), u = M("auto"), d = H(() => !e.disabled && e.cssMode), v = H(() => !e.disabled && !e.cssMode && a.value), f = H(() => Le(e.offsetTop)), m, p = () => {
      var {
        cssMode: w,
        disabled: C
      } = e;
      if (!C) {
        var I = 0;
        if (m !== window) {
          var {
            top: k
          } = m.getBoundingClientRect();
          I = k;
        }
        var N = r.value, S = n.value, {
          top: B,
          left: E
        } = S.getBoundingClientRect(), y = B - I;
        return y <= f.value ? (w || (i.value = S.offsetWidth + "px", l.value = S.offsetHeight + "px", t.value = I + f.value + "px", o.value = E + "px", s.value = N.offsetWidth + "px", u.value = N.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: y,
          isFixed: !1
        });
      }
    }, b = () => {
      if (m) {
        var w = p();
        w && P(e.onScroll, w.offsetTop, w.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var w = zl(function* () {
        a.value = !1, yield Rv(), p();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var w = zl(function* () {
        yield In(), m = Da(n.value), m !== window && m.addEventListener("scroll", b), b();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", b);
    };
    return le(() => e.disabled, g), sn($), Qa(V), wr(V), $a(window, "scroll", b), {
      n: Ry,
      classes: Uy,
      resize: g,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: o,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: L
    };
  }
});
ld.render = Fy;
const Gn = ld;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var FS = Gn, sd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Hy() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = dn(sd);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function Yy() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(sd);
  if (!r)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var jy = {
  index: {
    type: [Number, String]
  }
}, {
  n: Wy,
  classes: Gy
} = re("index-anchor");
function qy(e, n) {
  return h(), ge(
    _a(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: fe(() => [z(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [j(e.$slots, "default", {}, () => [be(
          ae(e.name),
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
var ud = ne({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Gn
  },
  inheritAttrs: !1,
  props: jy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Yy(), t = M(0), o = M(!1), i = H(() => e.index), l = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      l.value && (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (g) => {
      o.value = g;
    }, b = {
      index: n,
      name: i,
      ownTop: t,
      setOwnTop: m,
      setDisabled: p
    };
    return a(b), {
      n: Wy,
      classes: Gy,
      name: i,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: De
    };
  }
});
ud.render = qy;
const qr = ud;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var HS = qr, Xy = {
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
  onClick: U(),
  onChange: U()
};
function Ll(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Mt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ll(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ll(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Ky,
  classes: Zy
} = re("index-bar"), Jy = ["onClick"];
function Qy(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [j(e.$slots, "default"), z(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: G({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), O(
        Oe,
        null,
        ze(e.anchorNameList, (r) => (h(), O(
          "li",
          {
            key: r,
            class: c(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: G({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: r,
              manualCall: !0
            })
          },
          ae(r),
          15,
          Jy
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
var dd = ne({
  name: "VarIndexBar",
  props: Xy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Hy(), t = M(""), o = M(null), i = M([]), l = M(), s = H(() => e.sticky), u = H(() => e.cssMode), d = H(() => Le(e.stickyOffsetTop)), v = H(() => e.zIndex), f = null, m = {
      active: l,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(m);
    var p = (k, N) => {
      var S = ci(k) ? k.name.value : k;
      S === l.value || S === void 0 || (l.value = S, (N == null ? void 0 : N.event) !== !1 && P(e.onChange, S));
    }, b = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: k
      } = f.getBoundingClientRect(), {
        scrollTop: N
      } = f, {
        top: S
      } = o.value.getBoundingClientRect();
      return N - k + S;
    }, g = () => {
      var k = Qt(f), N = f === window ? document.body.scrollHeight : f.scrollHeight, S = b();
      r.forEach((B, E) => {
        var y = B.ownTop.value, T = k - y + d.value - S, R = E === r.length - 1 ? N : r[E + 1].ownTop.value - B.ownTop.value;
        T >= 0 && T < R && t.value === "" && (E && !e.cssMode && r[E - 1].setDisabled(!0), B.setDisabled(!1), p(B));
      });
    }, $ = /* @__PURE__ */ function() {
      var k = Mt(function* (N) {
        var {
          anchorName: S,
          manualCall: B = !1,
          options: E
        } = N;
        if (B && P(e.onClick, S), S !== l.value) {
          var y = r.find((_) => {
            var {
              name: W
            } = _;
            return S === W.value;
          });
          if (y) {
            var T = b(), R = y.ownTop.value - d.value + T, Q = hi(f);
            t.value = S, p(S, E), yield st(f, {
              left: Q,
              top: R,
              animation: is,
              duration: L(e.duration)
            }), _t(() => {
              t.value = "";
            });
          }
        }
      });
      return function(S) {
        return k.apply(this, arguments);
      };
    }(), V = /* @__PURE__ */ function() {
      var k = Mt(function* () {
        yield In(), f = Da(o.value);
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), w = () => {
      f.addEventListener("scroll", g);
    }, C = () => {
      f.removeEventListener("scroll", g);
    }, I = (k, N) => {
      hn(() => $({
        anchorName: k,
        options: N
      }));
    };
    return le(() => n.value, /* @__PURE__ */ Mt(function* () {
      yield In(), r.forEach((k) => {
        var {
          name: N,
          setOwnTop: S
        } = k;
        N.value && i.value.push(N.value), S();
      });
    })), sn(/* @__PURE__ */ Mt(function* () {
      yield V(), w();
    })), Kt(C), wr(C), {
      n: Ky,
      classes: Zy,
      barEl: o,
      active: l,
      zIndex: v,
      anchorNameList: i,
      toNumber: L,
      scrollTo: I,
      anchorClick: $
    };
  }
});
dd.render = Qy;
const Xr = dd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var YS = Xr;
function _y(e) {
  return ["text", "password", "number"].includes(e);
}
var xy = {
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
    validator: _y
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
  onFocus: U(),
  onBlur: U(),
  onClick: U(),
  onClear: U(),
  onInput: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: yo,
  classes: eb
} = re("input"), nb = ["id", "disabled", "type", "value", "maxlength", "rows"], rb = ["id", "disabled", "type", "value", "maxlength"], ab = ["for"];
function tb(e, n) {
  var r = oe("var-icon"), a = oe("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[14] || (n[14] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: G({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [j(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (h(), O(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : ee("v-if", !0), e.textarea ? (h(), O(
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
            style: G({
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
          nb
        )) : (h(), O(
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
            style: G({
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
          rb
        )), z(
          "label",
          {
            class: c(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: G({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          ae(e.placeholder),
          15,
          ab
        )],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [j(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), ge(
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
        )) : ee("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: G({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: G({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : ee("v-if", !0), J(
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
var vd = ne({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: xy,
  setup(e) {
    var n = M("var-input-" + Ba().uid), r = M(null), a = M(!1), t = M(!1), o = H(() => e.type === "number" ? "text" : e.type), i = H(() => {
      var {
        maxlength: D,
        modelValue: x
      } = e;
      return D ? Rn(x) ? "0 / " + D : String(x).length + "/" + D : "";
    }), {
      bindForm: l,
      form: s
    } = Sn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = wn(), m = (D) => {
      Ie(() => {
        var {
          validateTrigger: x,
          rules: te,
          modelValue: F
        } = e;
        d(x, D, te, F);
      });
    }, p = () => {
      var {
        hint: D,
        modelValue: x
      } = e;
      if (!D && (!Rn(x) || t.value))
        return yo("--placeholder-hidden");
      if (D && (!Rn(x) || a.value))
        return yo("--placeholder-hint");
    }, b = (D) => {
      a.value = !0, P(e.onFocus, D), m("onFocus");
    }, g = (D) => {
      a.value = !1, P(e.onBlur, D), m("onBlur");
    }, $ = (D) => {
      var x = D.target, {
        value: te
      } = x;
      return e.type === "number" && (te = S(te)), E(B(te));
    }, V = () => {
      t.value = !0;
    }, w = (D) => {
      t.value && (t.value = !1, D.target.dispatchEvent(new Event("input")));
    }, C = (D) => {
      if (!t.value) {
        var x = $(D);
        P(e["onUpdate:modelValue"], x), P(e.onInput, x, D), m("onInput");
      }
    }, I = (D) => {
      var x = $(D);
      P(e.onChange, x, D), m("onChange");
    }, k = () => {
      var {
        disabled: D,
        readonly: x,
        clearable: te,
        onClear: F
      } = e;
      s != null && s.disabled.value || s != null && s.readonly.value || D || x || !te || (P(e["onUpdate:modelValue"], ""), P(F, ""), m("onClear"));
    }, N = (D) => {
      var {
        disabled: x,
        onClick: te
      } = e;
      s != null && s.disabled.value || x || (P(te, D), m("onClick"));
    }, S = (D) => {
      var x = D.indexOf("-"), te = D.indexOf(".");
      return x > -1 && (D = x === 0 ? "-" + D.replace(/-/g, "") : D.replace(/-/g, "")), te > -1 && (D = D.slice(0, te + 1) + D.slice(te).replace(/\./g, "")), D.replace(/[^-0-9.]/g, "");
    }, B = (D) => e.modelModifiers.trim ? D.trim() : D, E = (D) => e.maxlength ? D.slice(0, L(e.maxlength)) : D, y = (D) => {
      var {
        disabled: x,
        readonly: te
      } = e;
      s != null && s.disabled.value || s != null && s.readonly.value || x || te || D.stopPropagation();
    }, T = () => {
      P(e["onUpdate:modelValue"], ""), f();
    }, R = () => v(e.rules, e.modelValue), Q = () => {
      var D;
      (D = r.value) == null || D.focus();
    }, _ = () => {
      r.value.blur();
    }, W = {
      reset: T,
      validate: R,
      resetValidation: f
    };
    return P(l, W), sn(() => {
      e.autofocus && Q();
    }), {
      el: r,
      id: n,
      isFocus: a,
      isComposing: t,
      errorMessage: u,
      type: o,
      maxlengthText: i,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      n: yo,
      classes: eb,
      isEmpty: Rn,
      computePlaceholderState: p,
      handleFocus: b,
      handleBlur: g,
      handleInput: C,
      handleChange: I,
      handleClear: k,
      handleClick: N,
      handleTouchstart: y,
      handleCompositionStart: V,
      handleCompositionEnd: w,
      validate: R,
      resetValidation: f,
      reset: T,
      focus: Q,
      blur: _
    };
  }
});
vd.render = tb;
const mr = vd;
mr.install = function(e) {
  e.component(mr.name, mr);
};
var jS = mr;
function ob(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ib(e) {
  return ["always", "hover", "none"].includes(e);
}
var lb = {
  type: {
    type: String,
    default: "default",
    validator: ob
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
    validator: ib
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
  onClick: U()
}, {
  n: sb,
  classes: ub
} = re("link");
function db(e, n) {
  return h(), ge(
    _a(e.tag),
    Ve(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: fe(() => [j(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var fd = ne({
  name: "VarLink",
  props: lb,
  setup(e) {
    var n = H(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = H(() => {
      var {
        disabled: t,
        href: o,
        target: i,
        to: l,
        replace: s
      } = e;
      return t ? {} : o ? {
        href: o,
        target: i
      } : l ? {
        to: l,
        target: i,
        replace: s
      } : {};
    }), a = (t) => {
      var {
        disabled: o,
        onClick: i
      } = e;
      o || P(i, t);
    };
    return {
      n: sb,
      classes: ub,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: me
    };
  }
});
fd.render = db;
const Kr = fd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var WS = Kr, vb = {
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
  onLoad: U(),
  "onUpdate:loading": U(),
  "onUpdate:error": U()
};
function Rl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function fb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Rl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Rl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: cb,
  classes: mb
} = re("list");
function pb(e, n) {
  var r = oe("var-loading"), a = Me("ripple");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [j(e.$slots, "default"), e.loading ? j(e.$slots, "loading", {
      key: 0
    }, () => [z(
      "div",
      {
        class: c(e.n("loading"))
      },
      [z(
        "div",
        {
          class: c(e.n("loading-text"))
        },
        ae(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), J(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : ee("v-if", !0), e.finished ? j(e.$slots, "finished", {
      key: 1
    }, () => [z(
      "div",
      {
        class: c(e.n("finished"))
      },
      ae(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : ee("v-if", !0), e.error ? j(e.$slots, "error", {
      key: 2
    }, () => [we((h(), O(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [be(
        ae(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : ee("v-if", !0), z(
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
var cd = ne({
  name: "VarList",
  directives: {
    Ripple: Re
  },
  components: {
    VarLoading: On
  },
  props: vb,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      P(e["onUpdate:error"], !1), P(e["onUpdate:loading"], !0), P(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Le(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = fb(function* () {
        yield Ie();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && o() && t();
      });
      return function() {
        return l.apply(this, arguments);
      };
    }();
    return sn(() => {
      a = Da(n.value), e.immediateCheck && i(), a.addEventListener("scroll", i);
    }), Qa(() => {
      a.removeEventListener("scroll", i);
    }), {
      pack: Ye,
      listEl: n,
      detectorEl: r,
      dt: Jt,
      isNumber: nn,
      load: t,
      check: i,
      n: cb,
      classes: mb
    };
  }
});
cd.render = pb;
const Zr = cd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var GS = Zr, hb = {
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
  classes: gb,
  n: Ul
} = re("loading-bar");
const yb = ne({
  name: "VarLoadingBar",
  props: hb,
  setup(e) {
    return () => J("div", {
      class: gb(Ul(), [e.error, Ul("--error")]),
      style: {
        zIndex: fn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: me(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: me(e.top)
      }
    }, null);
  }
});
var md, pd, co, hd, Fl, gd = {}, bb = {
  value: 0,
  opacity: 0,
  error: !1
}, je = Ee(bb), wb = (e) => {
  Object.assign(je, e);
}, Cb = (e) => {
  Object.assign(je, e), gd = e;
}, Sb = () => {
  Object.keys(gd).forEach((e) => {
    je[e] !== void 0 && (je[e] = void 0);
  });
}, yd = () => {
  Fl || (Fl = !0, xa(yb, je));
}, Di = () => {
  md = window.setTimeout(() => {
    if (!(je.value >= 95)) {
      var e = Math.random();
      je.value < 70 && (e = Math.round(5 * Math.random())), je.value += e, Di();
    }
  }, 200);
}, Ai = () => {
  window.clearTimeout(pd), window.clearTimeout(md), window.clearTimeout(co), window.clearTimeout(hd);
}, kb = () => {
  Ai(), je.error = !1, je.value = 0, yd(), co = window.setTimeout(() => {
    je.opacity = 1;
  }, 200), Di();
}, bd = () => {
  Ai(), je.value = 100, co = window.setTimeout(() => {
    je.opacity = 0, pd = window.setTimeout(() => {
      je.error = !1;
    }, 250);
  }, 300);
}, $b = () => {
  Ai(), je.error = !0, je.value === 100 && (je.value = 0), yd(), co = window.setTimeout(() => {
    je.opacity = 1;
  }, 200), Di(), hd = window.setTimeout(bd, 300);
}, wd = {
  start: kb,
  finish: bd,
  error: $b,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: wb,
  setDefaultOptions: Cb,
  resetDefaultOptions: Sb
}, qS = wd;
const oi = wd;
function Tb(e) {
  return ["click", "hover"].includes(e);
}
function Pb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Ob = {
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
    validator: Tb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Pb
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
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: Vb,
  classes: Mb
} = re("menu");
function Bb(e, n) {
  return h(), O(
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
    [j(e.$slots, "default"), (h(), ge(
      Ea,
      {
        to: e.teleport
      },
      [J(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: fe(() => [we(z(
            "div",
            {
              ref: "popover",
              style: G({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
              onClick: n[0] || (n[0] = En(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [j(e.$slots, "menu")],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[hr, e.show]])]),
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
var Cd = ne({
  name: "VarMenu",
  props: Ob,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: i,
      handleHostMouseenter: l,
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
    } = Qu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: Cn,
      toSizeUnit: me,
      n: Vb,
      classes: Mb,
      handleHostClick: i,
      handleHostMouseenter: l,
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
Cd.render = Bb;
const qn = Cd;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var XS = qn, Sd = Symbol("SELECT_BIND_OPTION_KEY");
function Eb() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = dn(Sd);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function Ib() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = un(Sd);
  if (!r)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: e,
    select: n,
    bindSelect: r
  };
}
var Nb = {
  label: {},
  value: {}
}, {
  n: Db,
  classes: Ab
} = re("option");
function zb(e, n) {
  var r = oe("var-checkbox"), a = Me("ripple");
  return we((h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: G({
        width: e.wrapWidth,
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: G({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (h(), ge(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = En(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : ee("v-if", !0), z(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [j(e.$slots, "default", {}, () => [be(
        ae(e.label),
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
var kd = ne({
  name: "VarOption",
  directives: {
    Ripple: Re
  },
  components: {
    VarCheckbox: sr
  },
  props: Nb,
  setup(e) {
    var n = M(!1), r = H(() => n.value), a = H(() => e.label), t = H(() => e.value), {
      select: o,
      bindSelect: i
    } = Ib(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d,
      computeLabel: v
    } = o, f = () => {
      n.value = !n.value, d(b);
    }, m = () => d(b), p = (g) => {
      n.value = g;
    }, b = {
      label: a,
      value: t,
      selected: r,
      sync: p
    };
    return le([() => e.label, () => e.value], v), i(b), {
      n: Db,
      classes: Ab,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: f,
      handleSelect: m
    };
  }
});
kd.render = zb;
const Jr = kd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var KS = Jr, Lb = {
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
  onClick: U(),
  "onUpdate:show": U()
};
function Rb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pt(e);
}
var {
  n: Hl
} = re("overlay");
const Qr = ne({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Lb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = yt(() => e.show, 1), {
      disabled: o
    } = xt(), i = () => {
      P(e.onClick), P(e["onUpdate:show"], !1);
    };
    eo(() => e.show, () => e.lockScroll);
    var l = () => J("div", Ve({
      class: Hl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: i
    }), [P(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return J(De, {
        name: Hl("--fade")
      }, {
        default: () => [u && l()]
      });
    };
    return () => {
      var {
        teleport: u
      } = e;
      if (u) {
        var d;
        return J(Ea, {
          to: u,
          disabled: o.value
        }, Rb(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var ZS = Qr, Ub = {
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
  elevation: {
    type: [Boolean, Number, String],
    default: !0
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
  onChange: U(),
  "onUpdate:current": U(),
  "onUpdate:size": U()
}, {
  n: Fb,
  classes: Hb
} = re("pagination"), Yb = ["item-mode", "onClick"];
function jb(e, n) {
  var r = oe("var-icon"), a = oe("var-input"), t = oe("var-cell"), o = oe("var-menu"), i = Me("ripple");
  return h(), O(
    "ul",
    {
      class: c(e.n())
    },
    [we((h(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [j(e.$slots, "prev", {}, () => [J(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), O(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleValue, l)),
          onKeydown: n[3] || (n[3] = Fi((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), z("span", null, [be(
        " / " + ae(e.pageCount) + " ",
        1
        /* TEXT */
      ), z(
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
    )) : (h(!0), O(
      Oe,
      {
        key: 1
      },
      ze(e.pageList, (l, s) => we((h(), O(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [be(
          ae(l),
          1
          /* TEXT */
        )],
        10,
        Yb
      )), [[i, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), we((h(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [j(e.$slots, "next", {}, () => [J(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), O(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: fe(() => [(h(!0), O(
            Oe,
            null,
            ze(e.sizeOption, (l, s) => we((h(), ge(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: fe(() => [be(
                  ae(l) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class", "onClick"]
            )), [[i]])),
            128
            /* KEYED_FRAGMENT */
          ))]),
          default: fe(() => [z(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [z(
              "span",
              null,
              ae(e.size) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
              1
              /* TEXT */
            ), J(
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
    )) : ee("v-if", !0), e.showQuickJumper && !e.simple ? (h(), O(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [be(
        ae(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), J(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = Fi((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.totalText ? (h(), O(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      ae(e.totalText),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var $d = ne({
  name: "VarPagination",
  components: {
    VarMenu: qn,
    VarIcon: $e,
    VarCell: lr,
    VarInput: mr
  },
  directives: {
    Ripple: Re
  },
  props: Ub,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), o = M(!1), i = M(L(e.current) || 1), l = M(L(e.size) || 10), s = M([]), u = H(() => Math.ceil(e.maxPagerCount / 2)), d = H(() => Math.ceil(L(e.total) / L(l.value))), v = H(() => {
      var C = l.value * (i.value - 1) + 1, I = Math.min(l.value * i.value, L(e.total));
      return [C, I];
    }), f = H(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (C, I) => nn(C) ? !1 : I === 1 ? t.value : o.value, p = (C, I) => nn(C) ? "basic" : I === 1 ? "head" : "tail", b = (C, I) => {
      C === i.value || e.disabled || (nn(C) ? i.value = C : C === "prev" ? i.value > 1 && (i.value -= 1) : C === "next" ? i.value < d.value && (i.value += 1) : C === "..." && (I === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, $ = (C) => {
      l.value = C, n.value = !1;
    }, V = (C) => {
      var I = /^[1-9][0-9]*$/;
      return I.test(C);
    }, w = (C, I, k) => {
      if (k.target.blur(), V(I)) {
        var N = L(I);
        N > d.value && (N = d.value, a.value = "" + N), N !== i.value && (i.value = N);
      }
      C === "quick" && (r.value = ""), C === "simple" && !V(I) && (a.value = "" + i.value);
    };
    return le([() => e.current, () => e.size], (C) => {
      var [I, k] = C;
      i.value = L(I) || 1, l.value = L(k || 10);
    }), le([i, l, d], (C, I) => {
      var [k, N, S] = C, [B, E] = I, y = [], {
        maxPagerCount: T,
        total: R,
        onChange: Q
      } = e, _ = Math.ceil(L(R) / L(E)), W = S - (T - u.value) - 1;
      if (a.value = "" + k, S - 2 > T) {
        if (B === void 0 || S !== _)
          for (var D = 2; D < T + 2; D++)
            y.push(D);
        if (k <= T && k < W) {
          y = [];
          for (var x = 1; x < T + 1; x++)
            y.push(x + 1);
          t.value = !0, o.value = !1;
        }
        if (k > T && k < W) {
          y = [];
          for (var te = 1; te < T + 1; te++)
            y.push(k + te - u.value);
          t.value = k === 2 && T === 1, o.value = !1;
        }
        if (k >= W) {
          y = [];
          for (var F = 1; F < T + 1; F++)
            y.push(S - (T - F) - 1);
          t.value = !1, o.value = !0;
        }
        y = [1, "...", ...y, "...", S];
      } else
        for (var Z = 1; Z <= S; Z++)
          y.push(Z);
      s.value = y, B !== void 0 && S > 0 && P(Q, k, N), P(e["onUpdate:current"], k), P(e["onUpdate:size"], N);
    }, {
      immediate: !0
    }), {
      n: Fb,
      classes: Hb,
      pack: Ye,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: p,
      isHideEllipsis: m,
      clickItem: b,
      showMenu: g,
      clickSize: $,
      setPage: w,
      toNumber: L,
      formatElevation: Cn
    };
  }
});
$d.render = jb;
const _r = $d;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var JS = _r, Wb = {
  elevation: {
    type: [Boolean, Number, String],
    default: !1
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
  onClick: U()
}, {
  n: Gb,
  classes: qb
} = re("paper");
function Xb(e, n) {
  var r = Me("ripple");
  return we((h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var Td = ne({
  name: "VarPaper",
  directives: {
    Ripple: Re
  },
  props: Wb,
  setup(e) {
    var n = (r) => {
      P(e.onClick, r);
    };
    return {
      n: Gb,
      classes: qb,
      formatElevation: Cn,
      toSizeUnit: me,
      handleClick: n
    };
  }
});
Td.render = Xb;
const xr = Td;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var QS = xr;
function ii() {
  return ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ii.apply(this, arguments);
}
var Kb = ii({
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
  onChange: U(),
  onConfirm: U(),
  onCancel: U()
}, Je(gt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Zb,
  classes: Jb
} = re("picker"), Yl = 300, Qb = 15, jl = 0, _b = ["onTouchstart", "onTouchmove", "onTouchend"], xb = ["onTransitionend"];
function e0(e, n) {
  var r = oe("var-button");
  return h(), ge(
    _a(e.dynamic ? e.n("$-popup") : e.Transition),
    Ve(e.dynamic ? {
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
      default: fe(() => [z(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [j(e.$slots, "cancel", {}, () => [J(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: fe(() => [be(
                ae(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), j(e.$slots, "title", {}, () => [z(
            "div",
            {
              class: c(e.n("title"))
            },
            ae(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), j(e.$slots, "confirm", {}, () => [J(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: fe(() => [be(
                ae(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
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
        )) : ee("v-if", !0), z(
          "div",
          {
            class: c(e.n("columns")),
            style: G({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), O(
            Oe,
            null,
            ze(e.scrollColumns, (a) => (h(), O(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: En((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [z(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: G({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(h(!0), O(
                  Oe,
                  null,
                  ze(a.column.texts, (t) => (h(), O(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: G({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [z(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      ae(e.textFormatter(t, a.columnIndex)),
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
                xb
              )],
              42,
              _b
            ))),
            128
            /* KEYED_FRAGMENT */
          )), z(
            "div",
            {
              class: c(e.n("picked")),
              style: G({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), z(
            "div",
            {
              class: c(e.n("mask")),
              style: G({
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
var Pd = ne({
  name: "VarPicker",
  components: {
    VarButton: Ke,
    VarPopup: gn
  },
  inheritAttrs: !1,
  props: Kb,
  setup(e) {
    var n = M([]), r = H(() => Le(e.optionHeight)), a = H(() => Le(e.optionCount)), t = H(() => a.value * r.value / 2 - r.value / 2), o = H(() => a.value * r.value), i = [], l = (y, T) => {
      T.scrollEl = y;
    }, s = (y) => {
      P(e["onUpdate:show"], y);
    }, u = (y) => {
      var T = r.value + t.value, R = t.value - y.column.texts.length * r.value;
      y.translate >= T && (y.translate = T), y.translate <= R && (y.translate = R);
    }, d = (y, T) => {
      var {
        length: R
      } = y.column.texts;
      return T = T >= R ? R - 1 : T, T = T <= 0 ? 0 : T, T;
    }, v = (y) => {
      var T = Math.round((t.value - y.translate) / r.value);
      return d(y, T);
    }, f = () => {
      var y = n.value.map((R) => R.column.texts[R.index]), T = n.value.map((R) => R.index);
      return {
        texts: y,
        indexes: T
      };
    }, m = function(y, T, R, Q) {
      Q === void 0 && (Q = !1);
      var _ = t.value - d(y, T) * r.value;
      _ === y.translate && (y.scrolling = !1, !Q && N(y)), y.translate = _, y.duration = R;
    }, p = (y, T, R) => {
      y.translate += Math.abs(T / R) / 3e-3 * (T < 0 ? -1 : 1);
    }, b = (y, T) => {
      T.touching = !0, T.scrolling = !1, T.duration = 0, T.translate = po(T.scrollEl);
    }, g = (y, T) => {
      if (T.touching) {
        var {
          clientY: R
        } = y.touches[0], Q = T.prevY !== void 0 ? R - T.prevY : 0;
        T.prevY = R, T.translate += Q, u(T);
        var _ = performance.now();
        _ - T.momentumTime > Yl && (T.momentumTime = _, T.momentumPrevY = T.translate);
      }
    }, $ = (y, T) => {
      T.touching = !1, T.scrolling = !0, T.prevY = void 0;
      var R = T.translate - T.momentumPrevY, Q = performance.now() - T.momentumTime, _ = Math.abs(R) >= Qb && Q <= Yl;
      _ && p(T, R, Q), T.index = v(T), m(T, T.index, _ ? 1e3 : 200);
    }, V = (y) => {
      y.scrolling = !1, N(y);
    }, w = (y) => y.map((T, R) => {
      var Q, _ = Ce(T) ? {
        texts: T
      } : T, W = {
        id: jl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = _.initialIndex) != null ? Q : 0,
        columnIndex: R,
        duration: 0,
        momentumTime: 0,
        column: _,
        scrollEl: null,
        scrolling: !1
      };
      return m(W, W.index, 0, !0), W;
    }), C = (y) => {
      var T = [];
      return I(T, y, 0, !0), T;
    }, I = function(y, T, R, Q) {
      if (Q === void 0 && (Q = !1), Ce(T) && T.length) {
        var _, W = Q && (_ = e.cascadeInitialIndexes[y.length]) != null ? _ : 0, D = {
          id: jl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: W,
          columnIndex: R,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: T.map((x) => x[e.textKey])
          },
          columns: T,
          scrollEl: null,
          scrolling: !1
        };
        y.push(D), m(D, D.index, 0, !0), I(y, D.columns[D.index].children, R + 1, Q);
      }
    }, k = (y) => {
      n.value.splice(n.value.indexOf(y) + 1), I(n.value, y.columns[y.index].children, y.columnIndex + 1);
    }, N = (y) => {
      var {
        cascade: T,
        onChange: R
      } = e;
      T && k(y);
      var Q = n.value.some((x) => x.scrolling);
      if (!Q) {
        var {
          texts: _,
          indexes: W
        } = f(), D = W.every((x, te) => x === i[te]);
        D || (i = [...W], P(R, _, W));
      }
    }, S = () => {
      if (e.cascade) {
        var y = n.value.find((T) => T.scrolling);
        y && (y.translate = po(y.scrollEl), y.index = v(y), m(y, y.index, 0, !0), y.scrolling = !1, k(y));
      } else
        n.value.forEach((T) => {
          T.translate = po(T.scrollEl), T.index = v(T), m(T, T.index, 0);
        });
    }, B = () => {
      S();
      var {
        texts: y,
        indexes: T
      } = f();
      i = [...T], P(e.onConfirm, y, T);
    }, E = () => {
      S();
      var {
        texts: y,
        indexes: T
      } = f();
      i = [...T], P(e.onCancel, y, T);
    };
    return le(() => e.columns, (y) => {
      n.value = e.cascade ? C(Hi(y)) : w(Hi(y));
      var {
        indexes: T
      } = f();
      i = [...T];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Zb,
      classes: Jb,
      pack: Ye,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: De,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: b,
      handleTouchmove: g,
      handleTouchend: $,
      handleTransitionend: V,
      confirm: B,
      cancel: E,
      dt: Jt
    };
  }
});
Pd.render = e0;
const pr = Pd;
var an;
function Ma(e) {
  return new Promise((n) => {
    Ma.close();
    var r = Ce(e) ? {
      columns: e
    } : e, a = Ee(r);
    a.dynamic = !0, a.teleport = "body", an = a;
    var {
      unmountInstance: t
    } = xa(pr, a, {
      onConfirm: (o, i) => {
        P(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, an === a && (an = null);
      },
      onCancel: (o, i) => {
        P(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
        }), a.show = !1, an === a && (an = null);
      },
      onClose: () => {
        P(a.onClose), n({
          state: "close"
        }), an === a && (an = null);
      },
      onClosed: () => {
        P(a.onClosed), t(), an === a && (an = null);
      },
      onRouteChange: () => {
        t(), an === a && (an = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
pr.install = function(e) {
  e.component(pr.name, pr);
};
Ma.Component = pr;
Ma.install = function(e) {
  e.component(pr.name, pr);
};
Ma.close = () => {
  if (an != null) {
    var e = an;
    an = null, Ie().then(() => {
      e.show = !1;
    });
  }
};
var _S = pr;
function n0(e) {
  return ["linear", "circle"].includes(e);
}
var r0 = {
  mode: {
    type: String,
    default: "linear",
    validator: n0
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
  n: a0,
  classes: t0
} = re("progress"), o0 = ["viewBox"], i0 = ["cx", "cy", "r", "stroke-width"], l0 = ["cx", "cy", "r", "stroke-width"];
function s0(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [z(
        "div",
        {
          class: c(e.n("linear-block")),
          style: G({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("linear-background")),
            style: G({
              background: e.trackColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0), z(
          "div",
          {
            class: c(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: G({
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
      ), e.label ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [j(e.$slots, "default", {}, () => [be(
          ae(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.mode === "circle" ? (h(), O(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), O(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: G({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), O(
          "circle",
          {
            key: 0,
            class: c(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: G({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          i0
        )) : ee("v-if", !0), z(
          "circle",
          {
            class: c(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: G({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          l0
        )],
        14,
        o0
      )), e.label ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [j(e.$slots, "default", {}, () => [be(
          ae(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Od = ne({
  name: "VarProgress",
  props: r0,
  setup(e) {
    var n = H(() => {
      var a = L(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = H(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, i = "0 0 " + Le(a) + " " + Le(a), l = L(o) > 100 ? 100 : Math.round(L(o)), s = (Le(a) - Le(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: i,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: a0,
      classes: t0,
      toSizeUnit: me,
      multiplySizeUnit: xe,
      linearProps: n,
      circleProps: r
    };
  }
});
Od.render = s0;
const ea = Od;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var xS = ea, u0 = {
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
  onRefresh: U(),
  "onUpdate:modelValue": U()
};
function Wl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function d0(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Wl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Wl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Gl,
  classes: v0
} = re("pull-refresh"), ql = 150;
function f0(e, n) {
  var r = oe("var-icon");
  return h(), O(
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
    [z(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: G(e.controlStyle)
      },
      [J(
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
    ), j(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Vd = ne({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: u0,
  setup(e) {
    var n, r, a = M(0), t = M(null), o = M(null), i = M(0), l = M("-125%"), s = M("arrow-down"), u = M("default"), d = M(!1), v = 0, f = 0, m = M(!0), p = H(() => u.value !== "loading" && u.value !== "success" && !e.disabled), b = H(() => ({
      transform: "translate3d(0px, " + (Ge(l.value) ? l.value : l.value + "px") + ", 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: $.value ? e.successBgColor : e.bgColor,
      color: $.value ? e.successColor : e.color
    })), g = H(() => Math.abs(2 * a.value)), $ = H(() => u.value === "success"), V = () => new Promise((B) => {
      window.setTimeout(() => {
        m.value = !0, B();
      }, ql);
    }), w = (B) => {
      var E = "classList" in n ? n : document.body;
      E.classList[B](Gl() + "--lock");
    }, C = (B) => {
      if (a.value === 0) {
        var {
          width: E
        } = o.value.getBoundingClientRect();
        a.value = -(E + E * 0.25);
      }
      v = B.touches[0].clientY, f = 0;
    }, I = (B) => {
      if (p.value) {
        var E = Qt(n);
        if (!(E > 0)) {
          var y = E === 0, T = B.touches[0];
          f = T.clientY - v, y && f >= 0 && B.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = B.touches[0].clientY), y && l.value > a.value && w("add");
          var R = (B.touches[0].clientY - i.value) / 2 + a.value;
          l.value = R >= g.value ? g.value : R, l.value >= g.value * 0.2 ? (m.value = !1, s.value = "refresh", r = V()) : s.value = "arrow-down";
        }
      }
    }, k = /* @__PURE__ */ function() {
      var B = d0(function* () {
        p.value && (d.value = !0, l.value >= g.value * 0.2 ? (yield r, u.value = "loading", l.value = g.value * 0.3, P(e["onUpdate:modelValue"], !0), P(e.onRefresh), w("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, w("remove");
        }, L(e.animationDuration))));
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), N = () => {
      n = e.target ? ss(e.target, "PullRefresh") : Da(t.value);
    }, S = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return le(() => e.modelValue, (B) => {
      B === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, S();
      }, L(e.successDuration)));
    }), sn(N), $a(t, "touchmove", I), {
      n: Gl,
      classes: v0,
      iconHasChanged: m,
      ICON_TRANSITION: ql,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: C,
      touchMove: I,
      touchEnd: k,
      iconName: s,
      controlStyle: b,
      isSuccess: $
    };
  }
});
Vd.render = f0;
const na = Vd;
na.install = function(e) {
  e.component(na.name, na);
};
var ek = na, c0 = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, Md = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function m0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(Md);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function p0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = un(Md);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: h0,
  classes: g0
} = re("radio");
function y0(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [we((h(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
          key: 0
        }, () => [J(
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
        )]) : j(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [J(
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
        )]), J(
          a,
          {
            hovering: !e.disabled && !e.formDisabled && e.hovering
          },
          null,
          8,
          ["hovering"]
        )],
        6
        /* CLASS, STYLE */
      )), [[o, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }], [i, e.handleHovering, "desktop"]]), z(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), J(
      t,
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
var Bd = ne({
  name: "VarRadio",
  directives: {
    Ripple: Re,
    Hover: Nn
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We,
    VarHoverOverlay: on
  },
  inheritAttrs: !1,
  props: c0,
  setup(e) {
    var n = M(!1), r = H(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = p0(), {
      hovering: i,
      handleHovering: l
    } = gr(), {
      form: s,
      bindForm: u
    } = Sn(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = wn(), p = (k) => {
      Ie(() => {
        var {
          validateTrigger: N,
          rules: S,
          modelValue: B
        } = e;
        v(N, k, S, B);
      });
    }, b = (k) => {
      var {
        checkedValue: N,
        onChange: S
      } = e;
      t && n.value === N || (n.value = k, P(e["onUpdate:modelValue"], n.value), P(S, n.value), t == null || t.onToggle(N), p("onChange"));
    }, g = (k) => {
      var {
        disabled: N,
        readonly: S,
        uncheckedValue: B,
        checkedValue: E,
        onClick: y
      } = e;
      s != null && s.disabled.value || N || (P(y, k), !(s != null && s.readonly.value || S) && (a.value = !0, b(r.value ? B : E)));
    }, $ = (k) => {
      var {
        checkedValue: N,
        uncheckedValue: S
      } = e;
      n.value = k === N ? N : S;
    }, V = () => {
      P(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, w = () => f(e.rules, e.modelValue), C = (k) => {
      var {
        uncheckedValue: N,
        checkedValue: S
      } = e, B = ![N, S].includes(k);
      B && (k = r.value ? N : S), b(k);
    };
    le(() => e.modelValue, (k) => {
      n.value = k;
    }, {
      immediate: !0
    });
    var I = {
      sync: $,
      validate: w,
      resetValidation: m,
      reset: V
    };
    return P(o, I), P(u, I), {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: i,
      handleHovering: l,
      n: h0,
      classes: g0,
      handleClick: g,
      toggle: C,
      reset: V,
      validate: w,
      resetValidation: m
    };
  }
});
Bd.render = y0;
const ra = Bd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var nk = ra;
function b0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var w0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: b0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: C0,
  classes: S0
} = re("radio-group");
function k0(e, n) {
  var r = oe("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), J(
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
var Ed = ne({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: We
  },
  props: w0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = m0(), {
      bindForm: t
    } = Sn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = wn(), u = H(() => o.value), d = (g) => {
      Ie(() => {
        var {
          validateTrigger: $,
          rules: V,
          modelValue: w
        } = e;
        i($, g, V, w);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: $
      } = g;
      return $(e.modelValue);
    }), f = (g) => {
      P(e["onUpdate:modelValue"], g), P(e.onChange, g), d("onChange");
    }, m = () => l(e.rules, e.modelValue), p = () => {
      P(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var b = {
      onToggle: f,
      validate: m,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return P(t, b), a(b), {
      errorMessage: o,
      n: C0,
      classes: S0,
      reset: p,
      validate: m,
      resetValidation: s
    };
  }
});
Ed.render = k0;
const aa = Ed;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var rk = aa, $0 = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: nt
} = re("rate"), T0 = ["onClick"];
function P0(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), O(
        Oe,
        null,
        ze(e.toNumber(e.count), (l) => we((h(), O(
          "div",
          {
            key: l,
            style: G(e.getStyle(l)),
            class: c(e.getClass(l)),
            onClick: (s) => e.handleClick(l, s)
          },
          [J(
            r,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(l).name,
              style: G({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          ), J(
            a,
            {
              hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          T0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [i, e.createHoverHandler(l), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), J(
      t,
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
var Id = ne({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: We,
    VarHoverOverlay: on
  },
  directives: {
    Ripple: Re,
    Hover: Nn
  },
  props: $0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = Sn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = wn(), {
      hovering: l
    } = gr(), s = M(-1), u = (w) => {
      var {
        count: C,
        gap: I
      } = e;
      return {
        color: v(w).color,
        marginRight: w !== L(C) ? me(I) : 0
      };
    }, d = (w) => {
      var {
        name: C,
        color: I
      } = v(w);
      return {
        [nt("content")]: !0,
        [nt("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [nt("--error")]: a.value,
        [nt("--primary")]: C !== e.emptyIcon && !I
      };
    }, v = (w) => {
      var {
        modelValue: C,
        disabled: I,
        disabledColor: k,
        color: N,
        half: S,
        emptyColor: B,
        icon: E,
        halfIcon: y,
        emptyIcon: T
      } = e, R = N;
      return (I || n != null && n.disabled.value) && (R = k), w <= L(C) ? {
        color: R,
        name: E
      } : S && w <= L(C) + 0.5 ? {
        color: R,
        name: y
      } : {
        color: I || n != null && n.disabled.value ? k : B,
        name: T
      };
    }, f = (w, C) => {
      if (e.half) {
        var {
          offsetWidth: I
        } = C.target;
        C.offsetX <= Math.floor(I / 2) && (w -= 0.5);
      }
      P(e["onUpdate:modelValue"], w);
    }, m = () => o(e.rules, L(e.modelValue)), p = () => Ie(() => t(["onChange"], "onChange", e.rules, e.modelValue)), b = (w, C) => {
      var {
        readonly: I,
        disabled: k,
        onChange: N
      } = e;
      I || k || n != null && n.disabled.value || n != null && n.readonly.value || (f(w, C), P(N, w), p());
    }, g = (w) => (C) => {
      s.value = w, l.value = C;
    }, $ = () => {
      P(e["onUpdate:modelValue"], 0), i();
    }, V = {
      reset: $,
      validate: m,
      resetValidation: i
    };
    return P(r, V), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: b,
      hovering: l,
      currentHoveringValue: s,
      createHoverHandler: g,
      reset: $,
      validate: m,
      resetValidation: i,
      toSizeUnit: me,
      toNumber: L,
      n: nt
    };
  }
});
Id.render = P0;
const ta = Id;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var ak = ta;
function O0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var V0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: O0
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
}, M0 = (e) => (Ia(""), e = e(), Na(), e), B0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, E0 = /* @__PURE__ */ M0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), I0 = [E0];
function N0(e, n) {
  return h(), O("svg", B0, I0);
}
var Nd = ne({});
Nd.render = N0;
const D0 = Nd;
var A0 = (e) => (Ia(""), e = e(), Na(), e), z0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, L0 = /* @__PURE__ */ A0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), R0 = [L0];
function U0(e, n) {
  return h(), O("svg", z0, R0);
}
var Dd = ne({});
Dd.render = U0;
const F0 = Dd;
var H0 = (e) => (Ia(""), e = e(), Na(), e), Y0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, j0 = /* @__PURE__ */ H0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), W0 = [j0];
function G0(e, n) {
  return h(), O("svg", Y0, W0);
}
var Ad = ne({});
Ad.render = G0;
const q0 = Ad;
var {
  n: X0,
  classes: K0
} = re("result");
function Z0(e, n) {
  return h(), O(
    Oe,
    null,
    [z(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), z(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-tip"))),
        style: G({
          animationDuration: e.animation ? "760ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), z(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-long"))),
        style: G({
          animationDuration: e.animation ? "770ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), z(
      "span",
      {
        ref: "circle",
        class: c(e.n("success-circle")),
        style: G({
          left: "-" + e.borderSize,
          top: "-" + e.borderSize,
          borderWidth: e.borderSize
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), z(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), z(
      "span",
      {
        class: c(e.n("success-cover-right")),
        style: G({
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
var zd = ne({
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
      n: X0,
      classes: K0,
      toNumber: L
    };
  }
});
zd.render = Z0;
const J0 = zd;
var Q0 = (e) => (Ia(""), e = e(), Na(), e), _0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, x0 = /* @__PURE__ */ Q0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), e1 = [x0];
function n1(e, n) {
  return h(), O("svg", _0, e1);
}
var Ld = ne({});
Ld.render = n1;
const r1 = Ld;
var a1 = (e) => (Ia(""), e = e(), Na(), e), t1 = {
  viewBox: "-4 -4 32 32"
}, o1 = /* @__PURE__ */ a1(() => /* @__PURE__ */ z(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), i1 = [o1];
function l1(e, n) {
  return h(), O("svg", t1, i1);
}
var Rd = ne({});
Rd.render = l1;
const s1 = Rd;
var {
  n: u1,
  classes: d1
} = re("result");
function v1(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "image", {}, () => [e.type ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: G({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), ge(
          _a(e.type),
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
    )) : ee("v-if", !0)]), j(e.$slots, "title", {}, () => [e.title ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ae(e.title),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), e.$slots.footer ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [j(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ud = ne({
  name: "VarResult",
  components: {
    Info: D0,
    Success: J0,
    Warning: q0,
    Error: F0,
    Question: r1,
    Empty: s1
  },
  props: V0,
  setup(e) {
    var n = H(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? me(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = H(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? me(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: u1,
      classes: d1,
      toNumber: L,
      toPxNum: Le,
      toSizeUnit: me,
      circleSize: n,
      borderSize: r
    };
  }
});
Ud.render = v1;
const oa = Ud;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var tk = oa;
function f1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function c1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var m1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: f1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: c1
  },
  onClick: U()
}, {
  n: p1,
  classes: h1
} = re("row");
function g1(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: G({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Fd = ne({
  name: "VarRow",
  props: m1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = zm(), t = H(() => {
      var s = Le(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, i = (s) => {
      P(e.onClick, s);
    }, l = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), r(l), {
      n: p1,
      classes: h1,
      average: t,
      handleClick: i,
      padStartFlex: Lt
    };
  }
});
Fd.render = g1;
const ia = Fd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var ok = ia;
function y1(e) {
  return ["left", "right", "center"].includes(e);
}
var b1 = {
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
    validator: y1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: U(),
  onBlur: U(),
  onClick: U(),
  onClear: U(),
  onClose: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: bo,
  classes: w1
} = re("select"), C1 = {
  key: 1
};
function S1(e, n) {
  var r = oe("var-chip"), a = oe("var-icon"), t = oe("var-menu"), o = oe("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: G({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [j(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [J(
          t,
          {
            "var-select-cover": "",
            class: c(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (i) => e.isFocus = i),
            onClose: e.handleBlur
          },
          {
            menu: fe(() => [z(
              "div",
              {
                ref: "menuEl",
                class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [j(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: fe(() => [z(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: G({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [z(
                "div",
                {
                  class: c(e.n("label"))
                },
                [e.isEmptyModelValue ? ee("v-if", !0) : j(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (h(), O(
                  Oe,
                  {
                    key: 0
                  },
                  [e.chip ? (h(), O(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(h(!0), O(
                      Oe,
                      null,
                      ze(e.labels, (i) => (h(), ge(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = En(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: fe(() => [be(
                            ae(i),
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
                  )) : (h(), O(
                    "div",
                    {
                      key: 1,
                      class: c(e.n("values"))
                    },
                    ae(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                )) : (h(), O(
                  "span",
                  C1,
                  ae(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), j(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [J(
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
            ), z(
              "label",
              {
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: G({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              ae(e.placeholder),
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
      ), z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [j(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), ge(
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
        )) : ee("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: G({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: G({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : ee("v-if", !0), J(
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
var Hd = ne({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: qn,
    VarChip: ur,
    VarFormDetails: We
  },
  props: b1,
  setup(e) {
    var n = M(null), r = M(!1), a = H(() => e.multiple), t = H(() => e.focusColor), o = M(""), i = M([]), l = H(() => Rn(e.modelValue)), s = M("0px"), u = M(0), {
      bindForm: d,
      form: v
    } = Sn(), {
      length: f,
      options: m,
      bindOptions: p
    } = Eb(), {
      errorMessage: b,
      validateWithTrigger: g,
      validate: $,
      // expose
      resetValidation: V
    } = wn(), w = M(null), C = () => {
      var {
        multiple: K,
        modelValue: A
      } = e;
      if (K) {
        var Y = A;
        i.value = Y.map(N);
      }
      !K && !Rn(A) && (o.value = N(A)), !K && Rn(A) && (o.value = "");
    }, I = (K) => {
      Ie(() => {
        var {
          validateTrigger: A,
          rules: Y,
          modelValue: X
        } = e;
        g(A, K, Y, X);
      });
    }, k = (K) => {
      var {
        value: A,
        label: Y
      } = K;
      return A.value != null ? A.value : Y.value;
    }, N = (K) => {
      var A, Y, X = m.find((de) => {
        var {
          value: pe
        } = de;
        return pe.value === K;
      });
      return X || (X = m.find((de) => {
        var {
          label: pe
        } = de;
        return pe.value === K;
      })), (A = (Y = X) == null ? void 0 : Y.label.value) != null ? A : "";
    }, S = () => {
      var {
        hint: K,
        modelValue: A
      } = e;
      if (!K && !Rn(A))
        return bo("--placeholder-hidden");
      if (K && (!Rn(A) || r.value))
        return bo("--placeholder-hint");
    }, B = () => n.value && window.getComputedStyle(n.value).width || "0px", E = () => {
      var {
        disabled: K,
        readonly: A,
        onFocus: Y
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || K || A || (s.value = B(), u.value = Le(e.offsetY), r.value = !0, P(Y), I("onFocus"));
    }, y = () => {
      var {
        disabled: K,
        readonly: A,
        onBlur: Y
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || K || A || (P(Y), I("onBlur"));
    }, T = (K) => {
      var {
        disabled: A,
        readonly: Y,
        multiple: X,
        onChange: de
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || A || Y)) {
        var pe = X ? m.filter((Ae) => {
          var {
            selected: Be
          } = Ae;
          return Be.value;
        }).map(k) : k(K);
        P(e["onUpdate:modelValue"], pe), P(de, pe), I("onChange"), !X && (r.value = !1);
      }
    }, R = () => {
      var {
        disabled: K,
        readonly: A,
        multiple: Y,
        clearable: X,
        onClear: de
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || K || A || !X)) {
        var pe = Y ? [] : void 0;
        P(e["onUpdate:modelValue"], pe), P(de, pe), I("onClear");
      }
    }, Q = (K) => {
      var {
        disabled: A,
        onClick: Y
      } = e;
      v != null && v.disabled.value || A || (P(Y, K), I("onClick"));
    }, _ = (K) => {
      var {
        disabled: A,
        readonly: Y,
        modelValue: X,
        onClose: de
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || A || Y)) {
        var pe = X, Ae = m.find((Ze) => {
          var {
            label: $n
          } = Ze;
          return $n.value === K;
        }), Be = pe.filter((Ze) => {
          var $n;
          return Ze !== (($n = Ae.value.value) != null ? $n : Ae.label.value);
        });
        P(e["onUpdate:modelValue"], Be), P(de, Be), I("onClose");
      }
    }, W = () => {
      var {
        multiple: K,
        modelValue: A
      } = e;
      if (K) {
        var Y = A;
        m.forEach((X) => X.sync(Y.includes(k(X))));
      } else
        m.forEach((X) => X.sync(A === k(X)));
      C();
    }, D = () => {
      s.value = B(), u.value = Le(e.offsetY), r.value = !0;
    }, x = () => {
      r.value = !1;
    }, te = () => $(e.rules, e.modelValue), F = () => {
      P(e["onUpdate:modelValue"], e.multiple ? [] : void 0), V();
    };
    le(() => e.multiple, () => {
      var {
        multiple: K,
        modelValue: A
      } = e;
      if (K && !Ce(A))
        throw Error("The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, W, {
      deep: !0
    }), le(() => f.value, W);
    var Z = {
      wrapWidth: H(() => s.value),
      multiple: a,
      focusColor: t,
      computeLabel: C,
      onSelect: T,
      reset: F,
      validate: te,
      resetValidation: V
    };
    return p(Z), P(d, Z), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: b,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: i,
      isEmptyModelValue: l,
      menuEl: w,
      n: bo,
      classes: w1,
      computePlaceholderState: S,
      handleFocus: E,
      handleBlur: y,
      handleClear: R,
      handleClick: Q,
      handleClose: _,
      reset: F,
      validate: te,
      resetValidation: V,
      focus: D,
      blur: x
    };
  }
});
Hd.render = S1;
const la = Hd;
la.install = function(e) {
  e.component(la.name, la);
};
var ik = la, k1 = {
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
  n: $1,
  classes: T1
} = re("skeleton");
function P1(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? ee("v-if", !0) : (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), O(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: G({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [z(
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
      )) : ee("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), O(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: G({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [z(
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
        )) : ee("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), O(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (h(), O(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: G({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [z(
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
          )) : ee("v-if", !0), (h(!0), O(
            Oe,
            null,
            ze(e.toNumber(e.rows), (r, a) => (h(), O(
              "div",
              {
                class: c(e.n("row")),
                key: r,
                style: G({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [z(
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
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.loading && e.fullscreen ? (h(), O(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: G({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [z(
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
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Yd = ne({
  name: "VarSkeleton",
  props: k1,
  setup() {
    return {
      n: $1,
      classes: T1,
      toSizeUnit: me,
      toNumber: L
    };
  }
});
Yd.render = P1;
const sa = Yd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var lk = sa;
function O1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ne;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ne || (Ne = {}));
var V1 = {
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
    validator: O1
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
  onChange: U(),
  onStart: U(),
  onEnd: U(),
  "onUpdate:modelValue": U()
}, {
  n: Xl,
  classes: M1
} = re("slider"), B1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function E1(e, n) {
  var r = oe("var-hover-overlay"), a = oe("var-form-details"), t = Me("hover");
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [z(
        "div",
        {
          class: c(e.n("track"))
        },
        [z(
          "div",
          {
            class: c(e.n("track-background")),
            style: G({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), z(
          "div",
          {
            class: c(e.n("track-fill")),
            style: G(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (h(!0), O(
        Oe,
        null,
        ze(e.thumbList, (o) => (h(), O(
          "div",
          {
            class: c(e.n("thumb")),
            key: o.enumValue,
            style: G({
              left: o.value + "%",
              zIndex: e.thumbsProps[o.enumValue].active ? 1 : void 0
            }),
            onTouchstart: En((i) => e.start(i, o.enumValue), ["stop"]),
            onTouchmove: En((i) => e.move(i, o.enumValue), ["stop"]),
            onTouchend: (i) => e.end(o.enumValue),
            onTouchcancel: (i) => e.end(o.enumValue)
          },
          [j(e.$slots, "button", {
            currentValue: o.text
          }, () => [we(z(
            "div",
            {
              class: c(e.n("thumb-block")),
              style: G({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), [[t, (i) => e.hover(i, o), "desktop"]]), z(
            "div",
            {
              class: c(e.classes(e.n("thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n("thumb-ripple--active")])),
              style: G({
                background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
              })
            },
            [J(
              r,
              {
                hovering: o.hovering
              },
              null,
              8,
              ["hovering"]
            )],
            6
            /* CLASS, STYLE */
          ), z(
            "div",
            {
              class: c(e.classes(e.n("thumb-label"), [e.showLabel(o.enumValue), e.n("thumb-label--active")])),
              style: G({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [z(
              "span",
              null,
              ae(o.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          B1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), J(
      a,
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
var jd = ne({
  name: "VarSlider",
  components: {
    VarFormDetails: We,
    VarHoverOverlay: on
  },
  directives: {
    Hover: Nn
  },
  props: V1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = Sn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = wn(), {
      hovering: l,
      handleHovering: s
    } = gr(), {
      hovering: u,
      handleHovering: d
    } = gr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), m = () => Ie(() => t(["onChange"], "onChange", e.rules, e.modelValue)), p = M(null), b = M(0), g = M(!1), $ = Ee({
      [Ne.First]: f(),
      [Ne.Second]: f()
    }), V = H(() => L(e.max) - L(e.min)), w = H(() => b.value / V.value * L(e.step)), C = H(() => {
      var {
        modelValue: A,
        range: Y
      } = e, X = [];
      return Y && Ce(A) ? X = [{
        value: B(A[0]),
        enumValue: Ne.First,
        text: E(A[0]),
        hovering: ja(l),
        handleHovering: s
      }, {
        value: B(A[1]),
        enumValue: Ne.Second,
        text: E(A[1]),
        hovering: ja(u),
        handleHovering: d
      }] : nn(A) && (X = [{
        value: B(A),
        enumValue: Ne.First,
        text: E(A),
        hovering: ja(l),
        handleHovering: s
      }]), X;
    }), I = H(() => {
      var {
        activeColor: A,
        range: Y,
        modelValue: X
      } = e, de = Y && Ce(X) ? B(Math.min(X[0], X[1])) : 0, pe = Y && Ce(X) ? B(Math.max(X[0], X[1])) - de : B(X);
      return {
        width: pe + "%",
        left: de + "%",
        background: A
      };
    }), k = H(() => e.disabled || (r == null ? void 0 : r.disabled.value)), N = H(() => e.readonly || (r == null ? void 0 : r.readonly.value)), S = (A) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : $[A].active, B = (A) => {
      var {
        min: Y,
        max: X
      } = e;
      return A < L(Y) ? 0 : A > L(X) ? 100 : (A - L(Y)) / V.value * 100;
    }, E = (A) => {
      if (!nn(A))
        return 0;
      var Y = A;
      Y < Number(e.min) && (Y = Number(e.min)), Y > Number(e.max) && (Y = Number(e.max));
      var X = parseInt("" + Y, 10) === Y;
      return X ? Y : L(Y.toPrecision(5));
    }, y = (A, Y) => {
      k.value || Y.handleHovering(A);
    }, T = (A, Y) => {
      var X = [], {
        step: de,
        range: pe,
        modelValue: Ae,
        onChange: Be,
        min: Ze
      } = e, $n = L(de), zn = Math.round(A / w.value), qe = zn * $n + L(Ze), cn = $[Y].percentValue * $n + L(Ze);
      if ($[Y].percentValue = zn, pe && Ce(Ae) && (X = Y === Ne.First ? [qe, Ae[1]] : [Ae[0], qe]), cn !== qe) {
        var wt = pe ? X.map((Ct) => E(Ct)) : E(qe);
        P(Be, wt), P(e["onUpdate:modelValue"], wt), m();
      }
    }, R = (A) => {
      if (!e.range)
        return Ne.First;
      var Y = $[Ne.First].percentValue * w.value, X = $[Ne.Second].percentValue * w.value, de = Math.abs(A - Y), pe = Math.abs(A - X);
      return de <= pe ? Ne.First : Ne.Second;
    }, Q = (A, Y) => {
      b.value || (b.value = p.value.offsetWidth), k.value || ($[Y].active = !0), !(k.value || N.value) && (P(e.onStart), g.value = !0, $[Y].startPosition = A.touches[0].clientX);
    }, _ = (A, Y) => {
      if (!(k.value || N.value || !g.value)) {
        var X = A.touches[0].clientX - $[Y].startPosition + $[Y].currentLeft;
        X <= 0 ? X = 0 : X >= b.value && (X = b.value), T(X, Y);
      }
    }, W = (A) => {
      var {
        range: Y,
        modelValue: X,
        onEnd: de,
        step: pe,
        min: Ae
      } = e;
      if (k.value || ($[A].active = !1), !(k.value || N.value)) {
        var Be = [];
        $[A].currentLeft = $[A].percentValue * w.value;
        var Ze = $[A].percentValue * L(pe) + L(Ae);
        Y && Ce(X) && (Be = A === Ne.First ? [Ze, X[1]] : [X[0], Ze]), P(de, Y ? Be : Ze), g.value = !1;
      }
    }, D = (A) => {
      if (!(k.value || N.value) && !A.target.closest("." + Xl("thumb"))) {
        var Y = A.clientX - Ev(A.currentTarget), X = R(Y);
        T(Y, X), W(X);
      }
    }, x = () => {
      var A = L(e.step);
      return isNaN(A) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : A < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, te = () => {
      var {
        range: A,
        modelValue: Y
      } = e;
      return A && !Ce(Y) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !A && Ce(Y) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : A && Ce(Y) && Y.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, F = function(A, Y) {
      A === void 0 && (A = e.modelValue), Y === void 0 && (Y = L(e.step));
      var X = (de) => {
        var {
          min: pe,
          max: Ae
        } = e;
        return de < L(pe) ? 0 : de > L(Ae) ? V.value / Y : (de - L(pe)) / Y;
      };
      e.range && Ce(A) ? ($[Ne.First].percentValue = X(A[0]), $[Ne.First].currentLeft = $[Ne.First].percentValue * w.value, $[Ne.Second].percentValue = X(A[1]), $[Ne.Second].currentLeft = $[Ne.Second].percentValue * w.value) : nn(A) && ($[Ne.First].currentLeft = X(A) * w.value);
    }, Z = () => {
      var A = e.range ? [0, 0] : 0;
      P(e["onUpdate:modelValue"], A), i();
    }, K = {
      reset: Z,
      validate: v,
      resetValidation: i
    };
    return P(n, K), le([() => e.modelValue, () => e.step], (A) => {
      var [Y, X] = A;
      !x() || !te() || g.value || F(Y, L(X));
    }), le(b, () => F()), sn(() => {
      !x() || !te() || (b.value = p.value.offsetWidth);
    }), {
      n: Xl,
      classes: M1,
      Thumbs: Ne,
      sliderEl: p,
      getFillStyle: I,
      isDisabled: k,
      errorMessage: a,
      thumbsProps: $,
      thumbList: C,
      hover: y,
      multiplySizeUnit: xe,
      toNumber: L,
      showLabel: S,
      start: Q,
      move: _,
      end: W,
      click: D
    };
  }
});
jd.render = E1;
const ua = jd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var sk = ua;
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, li.apply(this, arguments);
}
function I1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function N1(e) {
  return zi.includes(e);
}
var Wd = {
  type: {
    type: String,
    validator: N1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: I1
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
  loadingType: Je(rr, "type"),
  loadingSize: Je(rr, "size"),
  loadingRadius: Je(rr, "radius"),
  loadingColor: li({}, Je(rr, "color"), {
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
  onOpen: U(),
  // 打开动画结束时的回调
  onOpened: U(),
  // 关闭时的回调函数
  onClose: U(),
  // 关闭动画结束时的回调
  onClosed: U(),
  "onUpdate:show": U(),
  _update: {
    type: String
  }
}, {
  n: D1,
  classes: A1
} = re("snackbar"), z1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function L1(e, n) {
  var r = oe("var-icon"), a = oe("var-loading");
  return we((h(), O(
    "div",
    {
      class: c(e.n()),
      style: G({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: G({
          zIndex: e.zIndex
        })
      },
      [z(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [j(e.$slots, "default", {}, () => [be(
          ae(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (h(), ge(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : ee("v-if", !0), e.type === "loading" ? (h(), ge(
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
        )) : ee("v-if", !0), j(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[hr, e.show]]);
}
var Gd = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: On,
    VarIcon: $e
  },
  props: Wd,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = yt(() => e.show, 1);
    eo(() => e.show, () => e.lockScroll);
    var a = H(() => e.type === "loading" || e.forbidClick), t = H(() => e.type ? z1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && P(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (i) => {
      i ? (P(e.onOpen), o()) : i === !1 && (clearTimeout(n.value), P(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(n.value), o();
    }), sn(() => {
      e.show && (P(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: zi,
      n: D1,
      classes: A1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
Gd.render = L1;
const qd = Gd;
var {
  n: R1
} = re("snackbar");
function U1(e, n) {
  var r = oe("var-snackbar-core");
  return h(), ge(
    Ea,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [J(
      De,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: fe(() => [J(
          r,
          Ve(e.$props, {
            class: e.n("transition")
          }),
          {
            action: fe(() => [j(e.$slots, "action")]),
            default: fe(() => [j(e.$slots, "default", {}, () => [be(
              ae(e.content),
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
var Xd = ne({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: qd
  },
  props: Wd,
  setup() {
    var {
      disabled: e
    } = xt();
    return {
      n: R1,
      disabled: e
    };
  }
});
Xd.render = U1;
const da = Xd;
function ct() {
  return ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ct.apply(this, arguments);
}
function F1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pt(e);
}
var zi = ["loading", "success", "warning", "info", "error"], Kl = 0, si = !1, Kd, Za = !1, Zd = {
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
}, bn = Ee([]), Li = Zd, H1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Y1 = {
  setup() {
    return () => {
      var e = bn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Za && (a.position = "top");
        var i = Za ? "relative" : "absolute", l = ct({
          position: i
        }, K1(a.position));
        return J(qd, Ve(a, {
          key: r,
          style: l,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return J($v, Ve(H1, {
        style: {
          zIndex: fn.zIndex
        },
        onAfterEnter: j1,
        onAfterLeave: W1
      }), F1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Xn = function(e) {
  var n = q1(e), r = Ee(ct({}, Li, n));
  r.show = !0, si || (si = !0, Kd = xa(Y1).unmountInstance);
  var {
    length: a
  } = bn, t = {
    id: Kl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Za)
    G1(t);
  else {
    var o = "update-" + Kl;
    X1(r, o);
  }
  return {
    clear() {
      !Za && bn.length ? bn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
zi.forEach((e) => {
  Xn[e] = (n) => (ci(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Xn(n));
});
Xn.install = function(e) {
  e.component(da.name, da);
};
Xn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Za && (bn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Za = e);
};
Xn.clear = function() {
  bn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Xn.setDefaultOptions = function(e) {
  Li = e;
};
Xn.resetDefaultOptions = function() {
  Li = Zd;
};
Xn.Component = da;
function j1(e) {
  var n = e.getAttribute("data-id"), r = bn.find((a) => a.id === L(n));
  r && P(r.reactiveSnackOptions.onOpened);
}
function W1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = bn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, P(r.reactiveSnackOptions.onClosed));
  var a = bn.every((t) => t.animationEnd);
  a && (P(Kd), bn = Ee([]), si = !1);
}
function G1(e) {
  bn.push(e);
}
function q1(e) {
  return e === void 0 && (e = {}), Ge(e) ? {
    content: e
  } : e;
}
function X1(e, n) {
  var [r] = bn;
  r.reactiveSnackOptions = ct({}, r.reactiveSnackOptions, e), r._update = n;
}
function K1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
da.install = function(e) {
  e.component(da.name, da);
};
var uk = da;
const ui = Xn;
var Jd = (e) => ["mini", "small", "normal", "large"].includes(e), Z1 = (e) => Jd(e) || Ce(e) || nn(e) || Ge(e), J1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Q1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), _1 = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Z1
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
    validator: J1
  },
  align: {
    type: String,
    validator: Q1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function vn(e) {
  return "calc(" + e + " / 2)";
}
function x1(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== i ? l = vn(e) + " " + n + " " + vn(e) + " 0" : l = vn(e) + " 0" : t === "space-around" ? l = vn(e) + " " + vn(n) : t === "space-between" && (o === 0 ? l = vn(e) + " " + vn(n) + " " + vn(e) + " 0" : o === i ? l = vn(e) + " 0 " + vn(e) + " " + vn(n) : l = vn(e) + " " + vn(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var {
  n: wo,
  classes: ew
} = re("space");
const va = ne({
  name: "VarSpace",
  props: _1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Ce(t) ? t.map(me) : [me(t), me(t)];
    return () => {
      var t, {
        inline: o,
        justify: i,
        align: l,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = P(r.default)) != null ? t : [], f = Jd(d), [m, p] = a(d, f);
      v = ps(v);
      var b = v.length - 1, g = v.map(($, V) => {
        var w = x1(m, p, {
          direction: u,
          justify: i,
          index: V,
          lastIndex: b
        });
        return J("div", {
          style: {
            margin: w
          }
        }, [$]);
      });
      return J("div", {
        class: ew(wo(), wo("$--box"), [o, wo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Lt(i),
          alignItems: Lt(l),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [g]);
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
};
var dk = va, nw = {
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
}, Qd = Symbol("STEPS_BIND_STEP_KEY");
function rw() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = dn(Qd);
  return {
    length: n,
    step: r,
    bindStep: e
  };
}
function aw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(Qd);
  if (!r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: tw,
  classes: ow
} = re("step"), iw = {
  key: 3
};
function lw(e, n) {
  var r = oe("var-icon");
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [z(
        "div",
        {
          class: c(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [z(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: G({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (h(), ge(
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
          )) : e.isCurrent && e.currentIcon ? (h(), ge(
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
          )) : e.inactiveIcon ? (h(), ge(
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
          )) : (h(), O(
            "span",
            iw,
            ae(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), z(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [j(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? ee("v-if", !0) : (h(), O(
        "div",
        {
          key: 0,
          class: c(e.n(e.direction + "-line")),
          style: G({
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
var _d = ne({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: nw,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = aw(), {
      active: i,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = H(() => i.value === a.value), m = H(() => a.value !== -1 && i.value > a.value), p = {
      index: a
    }, b = () => v(a.value), g = ($) => {
      d.value === "horizontal" && (e.value = $);
    };
    return o(p), le(l, ($) => {
      if (r.value = $ - 1 === a.value, e.value) {
        var V = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + V + "px";
      }
    }), {
      n: tw,
      classes: ow,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: b,
      getRef: g
    };
  }
});
_d.render = lw;
const fa = _d;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var vk = fa;
function sw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var uw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: sw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: dw
} = re("steps");
function vw(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n()),
      style: G({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var xd = ne({
  name: "VarSteps",
  props: uw,
  setup(e) {
    var n = H(() => e.active), r = H(() => e.activeColor), a = H(() => e.inactiveColor), t = H(() => e.direction), {
      length: o,
      bindStep: i
    } = rw(), l = (u) => {
      P(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return i(s), {
      n: dw
    };
  }
});
xd.render = vw;
const ca = xd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var fk = ca, fw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: cw
} = re("style-provider"), mw = ne({
  name: "VarStyleProvider",
  props: fw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => rs(e.tag, {
      class: cw(),
      style: fs(e.styleVars)
    }, P(r.default));
  }
});
const ma = mw;
var Co = [];
function mt(e) {
  Co.forEach((r) => document.documentElement.style.removeProperty(r)), Co.length = 0;
  var n = fs(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Co.push(a);
  });
}
mt.Component = ma;
ma.install = function(e) {
  e.component(ma.name, ma);
};
mt.install = function(e) {
  e.component(ma.name, ma);
};
var ck = ma, pw = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: hw,
  classes: gw
} = re("switch");
function yw(e, n) {
  var r = oe("var-loading"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return we((h(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: G(e.styleComputed.switch)
      },
      [z(
        "div",
        {
          style: G(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), we((h(), O(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: G(e.styleComputed.ripple)
        },
        [z(
          "div",
          {
            style: G(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (h(), ge(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : ee("v-if", !0)],
          6
          /* CLASS, STYLE */
        ), J(
          a,
          {
            hovering: e.hovering
          },
          null,
          8,
          ["hovering"]
        )],
        6
        /* CLASS, STYLE */
      )), [[o, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), J(
      t,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  )), [[i, e.hover, "desktop"]]);
}
var ev = ne({
  name: "VarSwitch",
  components: {
    VarLoading: On,
    VarFormDetails: We,
    VarHoverOverlay: on
  },
  directives: {
    Ripple: Re,
    Hover: Nn
  },
  props: pw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = Sn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = wn(), {
      hovering: l,
      handleHovering: s
    } = gr(), u = () => o(e.rules, e.modelValue), d = () => Ie(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = H(() => {
      var {
        size: $,
        modelValue: V,
        color: w,
        closeColor: C,
        loadingColor: I,
        activeValue: k
      } = e;
      return {
        handle: {
          width: xe($),
          height: xe($),
          backgroundColor: V === k ? w : C,
          color: I
        },
        ripple: {
          left: V === k ? xe($, 0.5) : "-" + xe($, 0.5),
          color: V === k ? w : C || "#999",
          width: xe($, 2),
          height: xe($, 2)
        },
        track: {
          height: xe($, 0.72),
          width: xe($, 1.9),
          borderRadius: xe($, 2 / 3),
          filter: V === k || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === k ? w : C
        },
        switch: {
          height: xe($, 1.2),
          width: xe($, 2)
        }
      };
    }), f = H(() => {
      var {
        size: $ = "5.333vw"
      } = e;
      return xe($, 0.4);
    }), m = ($) => {
      var {
        onClick: V,
        onChange: w,
        disabled: C,
        loading: I,
        readonly: k,
        modelValue: N,
        activeValue: S,
        inactiveValue: B,
        "onUpdate:modelValue": E
      } = e;
      if (P(V, $), !(C || I || k || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var y = N === S ? B : S;
        P(w, y), P(E, y), d();
      }
    }, p = ($) => {
      e.disabled || r != null && r.disabled.value || s($);
    }, b = () => {
      P(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, g = {
      reset: b,
      validate: u,
      resetValidation: i
    };
    return P(n, g), {
      n: hw,
      classes: gw,
      switchActive: m,
      hovering: l,
      hover: p,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
ev.render = yw;
const pa = ev;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var mk = pa, bw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, nv = Symbol("TABS_BIND_TAB_KEY");
function ww() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = dn(nv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Cw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = un(nv);
  if (!n)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Bt,
  classes: Sw
} = re("tab");
function kw(e, n) {
  var r = Me("ripple");
  return we((h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: G({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var rv = ne({
  name: "VarTab",
  directives: {
    Ripple: Re
  },
  props: bw,
  setup(e) {
    var n = M(null), r = H(() => e.name), a = H(() => e.disabled), t = H(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = Cw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: p
    } = i, b = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    l(b);
    var g = () => {
      var {
        disabled: w,
        name: C
      } = e;
      return w ? f.value : u.value === C || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, $ = () => {
      var {
        disabled: w,
        name: C
      } = e;
      return w ? Bt("$-tab--disabled") : u.value === C || u.value === (o == null ? void 0 : o.value) ? Bt("$-tab--active") : Bt("$-tab--inactive");
    }, V = (w) => {
      var {
        disabled: C,
        name: I,
        onClick: k
      } = e;
      C || (P(k, I ?? o.value, w), s(b));
    };
    return le(() => e.name, p), le(() => e.disabled, p), {
      n: Bt,
      classes: Sw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: g,
      computeColorClass: $,
      handleClick: V
    };
  }
});
rv.render = kw;
const ha = rv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var pk = ha, av = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function $w() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(av);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Tw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = un(av);
  if (!n)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Pw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Ow,
  classes: Vw
} = re("tab-item");
function Mw(e, n) {
  var r = oe("var-swipe-item");
  return h(), ge(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: fe(() => [e.initSlot ? j(e.$slots, "default", {
        key: 0
      }) : ee("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var tv = ne({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Wn
  },
  props: Pw,
  setup(e) {
    var n = M(!1), r = M(!1), a = H(() => e.name), {
      index: t,
      bindTabsItems: o
    } = Tw(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: Ow,
      classes: Vw,
      current: n,
      initSlot: r
    };
  }
});
tv.render = Mw;
const ga = tv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var hk = ga, Bw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: Ew,
  classes: Iw
} = re("table");
function Nw(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [z(
      "div",
      {
        class: c(e.n("main"))
      },
      [z(
        "table",
        {
          class: c(e.n("table")),
          style: G({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [j(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [j(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var ov = ne({
  name: "VarTable",
  props: Bw,
  setup() {
    return {
      toSizeUnit: me,
      n: Ew,
      classes: Iw,
      formatElevation: Cn
    };
  }
});
ov.render = Nw;
const ya = ov;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var gk = ya;
function Zl(e) {
  return ["horizontal", "vertical"].includes(e);
}
function Dw(e) {
  return ["auto", "always"].includes(e);
}
function Aw(e) {
  return ["normal", "reverse"].includes(e);
}
var zw = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: Zl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: Zl
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
    type: [Boolean, String, Number],
    default: !1
  },
  scrollable: {
    type: String,
    default: "auto",
    validator: Dw
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: Aw
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Je(At, "cssMode"),
  stickyZIndex: Je(At, "zIndex"),
  offsetTop: Je(At, "offsetTop"),
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
};
function Jl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ql(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Jl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Jl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Lw,
  classes: Rw
} = re("tabs");
function Uw(e, n) {
  return h(), ge(
    _a(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: fe(() => [z(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [z(
          "div",
          {
            ref: "scrollerEl",
            class: c(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [j(e.$slots, "default"), z(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
              style: G({
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
var iv = ne({
  name: "VarTabs",
  components: {
    VarSticky: Gn
  },
  inheritAttrs: !1,
  props: zw,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), i = M(null), l = H(() => e.active), s = H(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = H(() => e.activeColor), d = H(() => e.inactiveColor), v = H(() => e.disabledColor), f = H(() => e.itemDirection), m = M(null), {
      tabList: p,
      bindTabList: b,
      length: g
    } = ww(), $ = (y) => {
      var T, R = (T = y.name.value) != null ? T : y.index.value, {
        active: Q,
        onChange: _,
        onClick: W
      } = e;
      P(e["onUpdate:active"], R), P(W, R), R !== Q && P(_, R);
    }, V = () => p.find((y) => {
      var {
        name: T
      } = y;
      return e.active === T.value;
    }), w = (y) => p.find((T) => {
      var {
        index: R
      } = T;
      return (y ?? e.active) === R.value;
    }), C = () => {
      if (g.value !== 0) {
        var {
          active: y
        } = e;
        if (nn(y)) {
          var T = y > g.value - 1 ? g.value - 1 : 0;
          return P(e["onUpdate:active"], T), w(T);
        }
      }
    }, I = () => {
      o.value = e.scrollable === "always" || p.length >= 5;
    }, k = (y) => {
      var {
        element: T
      } = y, R = T.value;
      R && (e.layoutDirection === "horizontal" ? (n.value = R.offsetWidth + "px", a.value = R.offsetLeft + "px") : (r.value = R.offsetHeight + "px", t.value = R.offsetTop + "px"));
    }, N = (y) => {
      var {
        element: T
      } = y;
      if (o.value) {
        var R = i.value, Q = T.value;
        if (e.layoutDirection === "horizontal") {
          var _ = Q.offsetLeft + Q.offsetWidth / 2 - R.offsetWidth / 2;
          st(R, {
            left: _,
            animation: ko
          });
        } else {
          var W = Q.offsetTop + Q.offsetHeight / 2 - R.offsetHeight / 2;
          st(R, {
            top: W,
            animation: ko
          });
        }
      }
    }, S = () => {
      var y = V() || w() || C();
      !y || y.disabled.value || (I(), k(y), N(y));
    }, B = /* @__PURE__ */ function() {
      var y = Ql(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), E = {
      active: l,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: S,
      onTabClick: $
    };
    return b(E), le(() => g.value, /* @__PURE__ */ Ql(function* () {
      yield In(), S();
    })), le(() => e.active, S), le(() => e.scrollable, S), $a(window, "resize", S), {
      stickyComponent: m,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: i,
      Transition: De,
      toSizeUnit: me,
      n: Lw,
      classes: Rw,
      resize: S,
      resizeSticky: B,
      formatElevation: Cn
    };
  }
});
iv.render = Uw;
const ba = iv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var yk = ba, Fw = {
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
  "onUpdate:active": U()
};
function _l(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Hw(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        _l(o, a, t, i, l, "next", s);
      }
      function l(s) {
        _l(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Yw
} = re("tabs-items");
function jw(e, n) {
  var r = oe("var-swipe");
  return h(), ge(
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
      default: fe(() => [j(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var lv = ne({
  name: "VarTabsItems",
  components: {
    VarSwipe: jn
  },
  props: Fw,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = $w(), o = (f) => r.find((m) => {
      var {
        name: p
      } = m;
      return f === p.value;
    }), i = (f) => r.find((m) => {
      var {
        index: p
      } = m;
      return f === p.value;
    }), l = (f) => o(f) || i(f), s = (f) => {
      var m, p = l(f);
      p && (r.forEach((b) => {
        var {
          setCurrent: g
        } = b;
        return g(!1);
      }), p.setCurrent(!0), (m = n.value) == null || m.to(p.index.value));
    }, u = (f) => {
      var m, p = r.find((g) => {
        var {
          index: $
        } = g;
        return $.value === f;
      }), b = (m = p.name.value) != null ? m : p.index.value;
      P(e["onUpdate:active"], b);
    }, d = () => n.value, v = {};
    return a(v), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ Hw(function* () {
      yield In(), s(e.active);
    })), {
      swipe: n,
      n: Yw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
lv.render = jw;
const wa = lv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var bk = wa;
const Ww = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Gw = {
  "--badge-default-color": "#555"
}, qw = {
  "--button-default-color": "#303030"
}, Xw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Kw = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Zw = {
  "--checkbox-unchecked-color": "#fff"
}, Jw = {
  "--chip-default-color": "#555"
}, Qw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, _w = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, xw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, eC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, nC = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, rC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, aC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, tC = {
  "--popup-content-background-color": "#1e1e1e"
}, oC = {
  "--pull-refresh-background": "#303030"
}, iC = {
  "--radio-unchecked-color": "#fff"
}, lC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, sC = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, uC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, dC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, vC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, fC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, cC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, mC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, pC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, hC = {
  "--tabs-background": "#1e1e1e"
}, gC = {
  "--app-bar-color": "#272727"
}, yC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, bC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, wC = {
  "--menu-background-color": "#272727"
}, CC = {
  "--breadcrumb-inactive-color": "#aaa"
}, SC = {
  "--paper-background": "#303030"
}, kC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function di() {
  return di = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, di.apply(this, arguments);
}
const $C = di({
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
}, qw, Kw, Xw, mC, _w, uC, hC, fC, tC, xw, Ww, Jw, Gw, pC, Qw, oC, vC, dC, rC, cC, nC, sC, iC, Zw, eC, aC, gC, yC, bC, wC, lC, CC, SC, kC);
var TC = {
  dark: $C
}, wk = null;
const vi = TC;
var pn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], en = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], xl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function PC(e) {
  return ["ampm", "24hr"].includes(e);
}
var OC = {
  modelValue: {
    type: String
  },
  elevation: {
    type: [Boolean, Number, String],
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
    validator: PC
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
  "onUpdate:modelValue": U(),
  onChange: U()
}, sv = (e, n) => e === "24hr" || n === "am", Ri = (e, n, r) => {
  var a = pn.findIndex((o) => L(o) === L(r)), t = sv(e, n) ? r : en[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, tn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, uv = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: i,
    max: l,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = Ri(t, o, i), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: p,
      minute: b
    } = tn(l);
    f = p === v && a > b;
  }
  if (!l && s) {
    var {
      hour: g,
      minute: $
    } = tn(s);
    f = g === v && a < $;
  }
  if (l && s) {
    var {
      hour: V,
      minute: w
    } = tn(l), {
      hour: C,
      minute: I
    } = tn(s);
    f = C === v && a < I || V === v && a > w;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, dv = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: i,
    minute: l,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = Ri(t, o, i), m = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: g,
      second: $
    } = tn(s);
    m = b === f && g < l || g === l && a > $;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: w,
      second: C
    } = tn(u);
    m = V === f && w > l || w === l && a > C;
  }
  if (s && u) {
    var {
      hour: I,
      minute: k,
      second: N
    } = tn(s), {
      hour: S,
      minute: B,
      second: E
    } = tn(u);
    m = I === f && k < l || S === f && B > l || I === f && k === l && a > N || S === f && B === l && a < E;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: VC,
  classes: MC
} = re("time-picker");
function BC(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n("clock"))
    },
    [z(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: G(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (h(!0), O(
      Oe,
      null,
      ze(e.timeScales, (r, a) => (h(), O(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: G(e.getStyle(a, r, !1))
        },
        ae(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), O(
        Oe,
        null,
        ze(e.hours24, (r, a) => (h(), O(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: G(e.getStyle(a, r, !0))
          },
          ae(r),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var vv = ne({
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
    } = n, a = M(null), t = M([]), o = M([]), i = H(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = H(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = H(() => e.type === "hour" ? pn : xl), u = (g, $) => {
      var V;
      g = (V = g) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var w = e.type === "minute" ? uv : dv, C = {
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
      return $ && e.type === "minute" && Reflect.deleteProperty(C, "minute"), w(C);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var g = e.isInner ? en[l.value] : s.value[l.value];
      return s.value === xl ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, $) => $ ? l.value === g && e.isInner : l.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (sv(e.format, e.ampm))
          return t.value.includes(g);
        var $ = pn.findIndex((V) => V === g);
        return o.value.includes($);
      }
      return u(g, !0);
    }, m = (g, $, V) => {
      var w = 2 * Math.PI / 12 * g - Math.PI / 2, C = 50 * (1 + Math.cos(w)), I = 50 * (1 + Math.sin(w)), k = () => v(g, V) ? f($) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: N,
        color: S
      } = k();
      return {
        left: C + "%",
        top: I + "%",
        backgroundColor: N,
        color: S
      };
    }, p = () => {
      var {
        width: g,
        height: $
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: $
      };
    }, b = () => {
      if (l.value !== void 0) {
        var g = e.ampm === "am" ? pn : en;
        return ka(g[l.value], 2, "0");
      }
    };
    return le([l, () => e.isInner], (g, $) => {
      var [V, w] = g, [C, I] = $, k = V === C && w === I;
      if (!(k || e.type !== "hour" || l.value === void 0)) {
        var N = w ? en[l.value] : b(), S = e.useSeconds ? ":" + e.time.second : "", B = N + ":" + e.time.minute + S;
        e.preventNextUpdate || r("update", B), r("change-prevent-update");
      }
    }), le(() => e.rad, (g, $) => {
      if (!(e.type === "hour" || g === void 0 || $ === void 0)) {
        var V = g / 6 >= 0 ? g / 6 : g / 6 + 60, w = $ / 6 >= 0 ? $ / 6 : $ / 6 + 60;
        if (V !== w) {
          var C, {
            hourStr: I
          } = Ri(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var k = ie().minute(V).format("mm"), N = e.useSeconds ? ":" + e.time.second : "";
            C = I + ":" + k + N;
          }
          if (e.type === "second") {
            var S = ie().second(V).format("ss"), B = e.useSeconds ? ":" + S : "";
            C = I + ":" + e.time.minute + B;
          }
          r("update", C);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [$, V, w] = g;
      if (t.value = [], $ && !V) {
        var {
          hour: C
        } = tn($), I = pn.filter((D) => L(D) > C), k = en.filter((D) => L(D) > C);
        t.value = [...I, ...k];
      }
      if (!$ && V) {
        var {
          hour: N
        } = tn(V), S = pn.filter((D) => L(D) < N), B = en.filter((D) => L(D) < N);
        t.value = [...S, ...B];
      }
      if ($ && V) {
        var {
          hour: E
        } = tn($), {
          hour: y
        } = tn(V), T = pn.filter((D) => L(D) < y || L(D) > E), R = en.filter((D) => L(D) < y || L(D) > E);
        t.value = [...T, ...R];
      }
      if (w != null && w.hours) {
        var {
          hours: Q
        } = w, _ = pn.filter((D) => !Q(L(D))), W = en.filter((D) => !Q(L(D)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ..._, ...W])];
      }
      o.value = t.value.map((D) => en.findIndex((x) => D === x)).filter((D) => D >= 0);
    }, {
      immediate: !0
    }), {
      n: VC,
      classes: MC,
      hours24: en,
      timeScales: s,
      inner: a,
      handStyle: i,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: p,
      getStyle: m,
      activeItemIndex: l
    };
  }
});
vv.render = BC;
const EC = vv;
var {
  n: IC,
  classes: NC
} = re("time-picker"), DC = (e) => (Ia(""), e = e(), Na(), e), AC = /* @__PURE__ */ DC(() => /* @__PURE__ */ z(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), zC = {
  key: 0
};
function LC(e, n) {
  var r = oe("clock");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [z(
      "div",
      {
        class: c(e.n("title")),
        style: G({
          background: e.headerColor || e.color
        })
      },
      [z(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          ae(e.time.hour),
          3
          /* TEXT, CLASS */
        ), AC, z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ae(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), O("span", zC, ":")) : ee("v-if", !0), e.useSeconds ? (h(), O(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ae(e.time.second),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), z(
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
      )) : ee("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), z(
      "div",
      {
        class: c(e.n("body"))
      },
      [z(
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
        [J(
          De,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: fe(() => [(h(), ge(
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
var fv = ne({
  name: "VarTimePicker",
  components: {
    Clock: EC
  },
  props: OC,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), o = M(!1), i = M(!1), l = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), p = M(!1), b = M(!1), g = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), $ = Ee({
      x: 0,
      y: 0
    }), V = Ee({
      x: [],
      y: []
    }), w = H(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), C = (F) => {
      P(e["onUpdate:modelValue"], F), P(e.onChange, F);
    }, I = (F) => F * 57.29577951308232, k = (F) => {
      l.value = !1, b.value = !1, f.value = F;
    }, N = (F) => {
      var {
        disableHour: Z
      } = a.value, K = pn.findIndex((X) => L(X) === L(g.value.hour)), A = F === "am" ? pn : en, Y = [...A.slice(K), ...A.slice(0, K)];
      return Y.find((X, de) => (o.value = de !== 0, !Z.includes(X)));
    }, S = (F) => {
      if (!e.readonly) {
        m.value = F;
        var Z = N(F);
        if (Z) {
          var K = e.useSeconds ? ":" + g.value.second : "", A = ka(Z, 2, "0") + ":" + g.value.minute + K;
          C(A);
        }
      }
    }, B = (F, Z) => {
      var K = F >= V.x[0] && F <= V.x[1], A = Z >= V.y[0] && Z <= V.y[1];
      return K && A;
    }, E = (F) => {
      var Z = e.format === "24hr" ? "HH" : "hh", {
        hour: K,
        minute: A,
        second: Y
      } = tn(F);
      return {
        hour: ie().hour(K).format(Z),
        minute: ie().minute(A).format("mm"),
        second: ie().second(Y).format("ss")
      };
    }, y = (F) => {
      var Z = F / 30;
      return Z >= 0 ? Z : Z + 12;
    }, T = () => {
      var {
        width: F,
        height: Z
      } = a.value.getSize(), K = $.x - F / 2 - 8, A = $.x + F / 2 + 8, Y = $.y - Z / 2 - 8, X = $.y + Z / 2 + 8;
      return {
        rangeXMin: K,
        rangeXMax: A,
        rangeYMin: Y,
        rangeYMax: X
      };
    }, R = (F, Z, K) => {
      var {
        disableHour: A
      } = a.value;
      i.value = B(F, Z);
      var Y = Math.round(K / 30) * 30 + 90, X = y(Y), de = t.value ? pn[X] : en[X];
      if (A.includes(de) || (t.value = e.format === "24hr" ? B(F, Z) : !1), t.value === i.value) {
        var pe = t.value || m.value === "pm" ? en[X] : pn[X];
        p.value = A.includes(pe), !p.value && (u.value = Y, l.value = !0);
      }
    }, Q = (F) => {
      var {
        disableHour: Z
      } = a.value, K = Math.round(F / 6) * 6 + 90, A = K / 6 >= 0 ? K / 6 : K / 6 + 60, Y = {
        time: A,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      b.value = uv(Y), !b.value && (d.value = K, s.value = !0);
    }, _ = (F) => {
      var {
        disableHour: Z
      } = a.value, K = Math.round(F / 6) * 6 + 90, A = K / 6 >= 0 ? K / 6 : K / 6 + 60, Y = {
        time: A,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        minute: L(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      dv(Y) || (v.value = K);
    }, W = () => {
      var {
        left: F,
        top: Z,
        width: K,
        height: A
      } = n.value.getBoundingClientRect();
      if ($.x = F + K / 2, $.y = Z + A / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Y,
          rangeXMax: X,
          rangeYMin: de,
          rangeYMax: pe
        } = T();
        V.x = [Y, X], V.y = [de, pe];
      }
    }, D = (F) => {
      if (F.preventDefault(), !e.readonly) {
        W();
        var {
          clientX: Z,
          clientY: K
        } = F.touches[0], A = Z - $.x, Y = K - $.y, X = Math.round(I(Math.atan2(Y, A)));
        f.value === "hour" ? R(Z, K, X) : f.value === "minute" ? Q(X) : _(X);
      }
    }, x = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, te = () => {
      o.value = !1;
    };
    return le(() => e.modelValue, (F) => {
      if (F) {
        var {
          hour: Z,
          minute: K,
          second: A
        } = tn(F), Y = ie().hour(Z).format("hh"), X = ie().hour(Z).format("HH"), de = ie().minute(K).format("mm"), pe = ie().second(A).format("ss");
        u.value = (Y === "12" ? 0 : L(Y)) * 30, d.value = L(de) * 6, v.value = L(pe) * 6, g.value = E(F), e.format !== "24hr" && (m.value = ka("" + Z, 2, "0") === X && en.includes(X) ? "pm" : "am"), t.value = e.format === "24hr" && en.includes(X);
      }
    }, {
      immediate: !0
    }), {
      n: IC,
      classes: NC,
      getRad: w,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: D,
      checkPanel: k,
      checkAmpm: S,
      end: x,
      update: C,
      changePreventUpdate: te,
      formatElevation: Cn
    };
  }
});
fv.render = LC;
const Ca = fv;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var Ck = Ca, RC = {
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
  onBeforeRead: U(),
  onAfterRead: U(),
  onBeforeRemove: U(),
  onRemove: U(),
  onOversize: U(),
  "onUpdate:modelValue": U()
};
function es(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ns(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        es(o, a, t, i, l, "next", s);
      }
      function l(s) {
        es(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: UC,
  classes: FC
} = re("uploader"), HC = 0, YC = ["onClick"], jC = ["onClick"], WC = ["src", "alt"], GC = ["multiple", "accept", "capture", "disabled"], qC = ["src"];
function XC(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = oe("var-popup"), i = Me("ripple"), l = Me("hover");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), O(
        Oe,
        null,
        ze(e.files, (s) => we((h(), O(
          "div",
          {
            class: c(e.classes(e.n("file"), e.n("$-elevation--2"), [s.state === "loading", e.n("--loading")])),
            key: s.id,
            onClick: (u) => e.preview(s)
          },
          [z(
            "div",
            {
              class: c(e.n("file-name"))
            },
            ae(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (h(), O(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: En((u) => e.handleRemove(s), ["stop"])
            },
            [J(
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
            jC
          )) : ee("v-if", !0), s.cover ? (h(), O(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: G({
                objectFit: s.fit
              }),
              src: s.cover,
              alt: s.name
            },
            null,
            14,
            WC
          )) : ee("v-if", !0), z(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          YC
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? we((h(), O(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [z(
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
          GC
        ), j(e.$slots, "default", {}, () => [J(
          r,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        ), J(
          a,
          {
            hovering: e.hovering && !e.disabled && !e.formDisabled
          },
          null,
          8,
          ["hovering"]
        )])],
        2
        /* CLASS */
      )), [[i, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }], [l, e.handleHovering, "desktop"]]) : ee("v-if", !0)],
      2
      /* CLASS */
    ), J(
      t,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), J(
      o,
      {
        class: c(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (s) => e.showPreview = s),
        onClosed: n[3] || (n[3] = (s) => e.currentPreview = null)
      },
      {
        default: fe(() => {
          var s, u;
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (h(), O(
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
              src: (u = e.currentPreview) == null ? void 0 : u.url
            },
            null,
            10,
            qC
          )) : ee("v-if", !0)];
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
var cv = ne({
  name: "VarUploader",
  directives: {
    Ripple: Re,
    Hover: Nn
  },
  components: {
    VarIcon: $e,
    VarPopup: gn,
    VarFormDetails: We,
    VarHoverOverlay: on
  },
  props: RC,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = H(() => {
      var {
        maxlength: D,
        modelValue: {
          length: x
        }
      } = e;
      return nn(D) ? x + " / " + D : "";
    }), {
      form: o,
      bindForm: i
    } = Sn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = wn(), {
      hovering: v,
      handleHovering: f
    } = gr(), m = H(() => {
      var {
        modelValue: D,
        hideList: x
      } = e;
      return x ? [] : D;
    }), p = (D) => {
      var {
        disabled: x,
        readonly: te,
        previewed: F
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || x || te || !F)) {
        var {
          url: Z
        } = D;
        if (Ge(Z) && ji(Z)) {
          Bn(Z);
          return;
        }
        Ge(Z) && Wi(Z) && (a.value = D, r.value = !0);
      }
    }, b = (D) => ({
      id: HC++,
      url: "",
      cover: "",
      name: D.name,
      file: D
    }), g = (D) => {
      var x = D.target, {
        files: te
      } = x;
      return Array.from(te);
    }, $ = (D) => new Promise((x) => {
      var te = new FileReader();
      te.onload = () => {
        var F = te.result;
        D.file.type.startsWith("image") && (D.cover = F), D.url = F, x(D);
      }, te.readAsDataURL(D.file);
    }), V = (D) => D.map($), w = (D) => {
      var {
        onBeforeRead: x
      } = e;
      return D.map((te) => new Promise((F) => {
        x || F({
          valid: !0,
          varFile: te
        });
        var Z = P(x, Ee(te));
        Z = Ce(Z) ? Z : [Z], Promise.all(Z).then((K) => {
          F({
            valid: !K.some((A) => !A),
            varFile: te
          });
        });
      }));
    }, C = /* @__PURE__ */ function() {
      var D = ns(function* (x) {
        var {
          maxsize: te,
          maxlength: F,
          modelValue: Z,
          onOversize: K,
          onAfterRead: A,
          readonly: Y,
          disabled: X
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || X || Y)) {
          var de = (qe) => qe.filter((cn) => cn.file.size > L(te) ? (P(K, Ee(cn)), !1) : !0), pe = (qe) => {
            var cn = Math.min(qe.length, L(F) - Z.length);
            return qe.slice(0, cn);
          }, Ae = g(x), Be = Ae.map(b);
          Be = te != null ? de(Be) : Be, Be = F != null ? pe(Be) : Be;
          var Ze = yield Promise.all(V(Be)), $n = yield Promise.all(w(Ze)), zn = $n.filter((qe) => {
            var {
              valid: cn
            } = qe;
            return cn;
          }).map((qe) => {
            var {
              varFile: cn
            } = qe;
            return cn;
          });
          P(e["onUpdate:modelValue"], [...Z, ...zn]), x.target.value = "", zn.forEach((qe) => P(A, Ee(qe)));
        }
      });
      return function(te) {
        return D.apply(this, arguments);
      };
    }(), I = /* @__PURE__ */ function() {
      var D = ns(function* (x) {
        var {
          disabled: te,
          readonly: F,
          modelValue: Z,
          onBeforeRemove: K,
          onRemove: A
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || te || F)) {
          if (K) {
            var Y = P(K, Ee(x));
            if (Y = Ce(Y) ? Y : [Y], (yield Promise.all(Y)).some((de) => !de))
              return;
          }
          var X = Z.filter((de) => de !== x);
          P(A, Ee(x)), T("onRemove"), P(e["onUpdate:modelValue"], X);
        }
      });
      return function(te) {
        return D.apply(this, arguments);
      };
    }(), k = () => e.modelValue.filter((D) => D.state === "success"), N = () => e.modelValue.filter((D) => D.state === "error"), S = () => e.modelValue.filter((D) => D.state === "loading"), B = () => {
      n.value.click();
    }, E = () => {
      a.value = null, r.value = !1, Bn.close();
    }, y = {
      getSuccess: k,
      getError: N,
      getLoading: S
    }, T = (D) => {
      Ie(() => {
        var {
          validateTrigger: x,
          rules: te,
          modelValue: F
        } = e;
        s(x, D, te, F, y);
      });
    }, R = !1, Q = () => u(e.rules, e.modelValue, y), _ = () => {
      R = !0, P(e["onUpdate:modelValue"], []), d();
    }, W = {
      validate: Q,
      resetValidation: d,
      reset: _
    };
    return P(i, W), le(() => e.modelValue, () => {
      !R && T("onChange"), R = !1;
    }, {
      deep: !0
    }), {
      n: UC,
      classes: FC,
      input: n,
      files: m,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      hovering: v,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      handleHovering: f,
      isHTMLSupportVideo: Wi,
      isHTMLSupportImage: ji,
      preview: p,
      handleChange: C,
      handleRemove: I,
      getSuccess: k,
      getError: N,
      getLoading: S,
      validate: Q,
      resetValidation: d,
      reset: _,
      chooseFile: B,
      closePreview: E
    };
  }
});
cv.render = XC;
const Sa = cv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Sk = Sa;
const KC = "2.9.2";
function ZC(e) {
  Ta.install && e.use(Ta), $r.install && e.use($r), Tr.install && e.use(Tr), Pr.install && e.use(Pr), Or.install && e.use(Or), ir.install && e.use(ir), Vr.install && e.use(Vr), Mr.install && e.use(Mr), Br.install && e.use(Br), Er.install && e.use(Er), Ke.install && e.use(Ke), Ir.install && e.use(Ir), Nr.install && e.use(Nr), lr.install && e.use(lr), sr.install && e.use(sr), Dr.install && e.use(Dr), ur.install && e.use(ur), Ar.install && e.use(Ar), zr.install && e.use(zr), Lr.install && e.use(Lr), fn.install && e.use(fn), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Hr.install && e.use(Hr), Pa.install && e.use(Pa), Yr.install && e.use(Yr), jr.install && e.use(jr), Wr.install && e.use(Wr), Yn.install && e.use(Yn), We.install && e.use(We), Nn.install && e.use(Nn), on.install && e.use(on), $e.install && e.use($e), Gr.install && e.use(Gr), Bn.install && e.use(Bn), qr.install && e.use(qr), Xr.install && e.use(Xr), mr.install && e.use(mr), ut.install && e.use(ut), Kr.install && e.use(Kr), Zr.install && e.use(Zr), On.install && e.use(On), oi.install && e.use(oi), Bo.install && e.use(Bo), qn.install && e.use(qn), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), Ma.install && e.use(Ma), gn.install && e.use(gn), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), Re.install && e.use(Re), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), ui.install && e.use(ui), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), Gn.install && e.use(Gn), mt.install && e.use(mt), jn.install && e.use(jn), Wn.install && e.use(Wn), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), wa.install && e.use(wa), vi.install && e.use(vi), Ca.install && e.use(Ca), fr.install && e.use(fr), Sa.install && e.use(Sa);
}
const kk = {
  version: KC,
  install: ZC,
  ActionSheet: Ta,
  AppBar: $r,
  Avatar: Tr,
  AvatarGroup: Pr,
  BackTop: Or,
  Badge: ir,
  BottomNavigation: Vr,
  BottomNavigationItem: Mr,
  Breadcrumb: Br,
  Breadcrumbs: Er,
  Button: Ke,
  ButtonGroup: Ir,
  Card: Nr,
  Cell: lr,
  Checkbox: sr,
  CheckboxGroup: Dr,
  Chip: ur,
  Col: Ar,
  Collapse: zr,
  CollapseItem: Lr,
  Context: fn,
  Countdown: Rr,
  Counter: Ur,
  DatePicker: Hr,
  Dialog: Pa,
  Divider: Yr,
  Ellipsis: jr,
  Fab: Wr,
  Form: Yn,
  FormDetails: We,
  Hover: Nn,
  HoverOverlay: on,
  Icon: $e,
  Image: Gr,
  ImagePreview: Bn,
  IndexAnchor: qr,
  IndexBar: Xr,
  Input: mr,
  Lazy: ut,
  Link: Kr,
  List: Zr,
  Loading: On,
  LoadingBar: oi,
  Locale: Bo,
  Menu: qn,
  Option: Jr,
  Overlay: Qr,
  Pagination: _r,
  Paper: xr,
  Picker: Ma,
  Popup: gn,
  Progress: ea,
  PullRefresh: na,
  Radio: ra,
  RadioGroup: aa,
  Rate: ta,
  Result: oa,
  Ripple: Re,
  Row: ia,
  Select: la,
  Skeleton: sa,
  Slider: ua,
  Snackbar: ui,
  Space: va,
  Step: fa,
  Steps: ca,
  Sticky: Gn,
  StyleProvider: mt,
  Swipe: jn,
  SwipeItem: Wn,
  Switch: pa,
  Tab: ha,
  TabItem: ga,
  Table: ya,
  Tabs: ba,
  TabsItems: wa,
  Themes: vi,
  TimePicker: Ca,
  Tooltip: fr,
  Uploader: Sa
};
export {
  Ta as ActionSheet,
  $r as AppBar,
  Tr as Avatar,
  Pr as AvatarGroup,
  Or as BackTop,
  ir as Badge,
  Vr as BottomNavigation,
  Mr as BottomNavigationItem,
  Br as Breadcrumb,
  Er as Breadcrumbs,
  Ke as Button,
  Ir as ButtonGroup,
  Nr as Card,
  lr as Cell,
  sr as Checkbox,
  Dr as CheckboxGroup,
  ur as Chip,
  Ar as Col,
  zr as Collapse,
  Lr as CollapseItem,
  fn as Context,
  Rr as Countdown,
  Ur as Counter,
  Hr as DatePicker,
  Pa as Dialog,
  Yr as Divider,
  jr as Ellipsis,
  Wr as Fab,
  Yn as Form,
  We as FormDetails,
  Nn as Hover,
  on as HoverOverlay,
  $e as Icon,
  Gr as Image,
  Bn as ImagePreview,
  qr as IndexAnchor,
  Xr as IndexBar,
  mr as Input,
  ut as Lazy,
  Kr as Link,
  Zr as List,
  On as Loading,
  oi as LoadingBar,
  Bo as Locale,
  qn as Menu,
  Jr as Option,
  Qr as Overlay,
  No as PIXEL,
  _r as Pagination,
  xr as Paper,
  Ma as Picker,
  gn as Popup,
  ea as Progress,
  na as PullRefresh,
  ra as Radio,
  aa as RadioGroup,
  ta as Rate,
  oa as Result,
  Re as Ripple,
  ia as Row,
  zi as SNACKBAR_TYPE,
  la as Select,
  sa as Skeleton,
  ua as Slider,
  ui as Snackbar,
  va as Space,
  fa as Step,
  ca as Steps,
  Gn as Sticky,
  mt as StyleProvider,
  jn as Swipe,
  Wn as SwipeItem,
  pa as Switch,
  ha as Tab,
  ga as TabItem,
  ya as Table,
  ba as Tabs,
  wa as TabsItems,
  vi as Themes,
  Ca as TimePicker,
  fr as Tooltip,
  Sa as Uploader,
  rS as _ActionSheetComponent,
  aS as _AppBarComponent,
  oS as _AvatarComponent,
  iS as _AvatarGroupComponent,
  vS as _BackTopComponent,
  fS as _BadgeComponent,
  cS as _BottomNavigationComponent,
  mS as _BottomNavigationItemComponent,
  pS as _BreadcrumbComponent,
  hS as _BreadcrumbsComponent,
  dS as _ButtonComponent,
  gS as _ButtonGroupComponent,
  yS as _CardComponent,
  bS as _CellComponent,
  CS as _CheckboxComponent,
  SS as _CheckboxGroupComponent,
  kS as _ChipComponent,
  $S as _ColComponent,
  TS as _CollapseComponent,
  PS as _CollapseItemComponent,
  QC as _ContextComponent,
  OS as _CountdownComponent,
  VS as _CounterComponent,
  MS as _DatePickerComponent,
  BS as _DialogComponent,
  ES as _DividerComponent,
  NS as _EllipsisComponent,
  DS as _FabComponent,
  AS as _FormComponent,
  wS as _FormDetailsComponent,
  uS as _HoverComponent,
  sS as _HoverOverlayComponent,
  eS as _IconComponent,
  zS as _ImageComponent,
  US as _ImagePreviewComponent,
  HS as _IndexAnchorComponent,
  YS as _IndexBarComponent,
  jS as _InputComponent,
  tS as _LazyComponent,
  WS as _LinkComponent,
  GS as _ListComponent,
  qS as _LoadingBarComponent,
  lS as _LoadingComponent,
  nS as _LocaleComponent,
  XS as _MenuComponent,
  KS as _OptionComponent,
  ZS as _OverlayComponent,
  JS as _PaginationComponent,
  QS as _PaperComponent,
  _S as _PickerComponent,
  xC as _PopupComponent,
  xS as _ProgressComponent,
  ek as _PullRefreshComponent,
  nk as _RadioComponent,
  rk as _RadioGroupComponent,
  ak as _RateComponent,
  tk as _ResultComponent,
  _C as _RippleComponent,
  ok as _RowComponent,
  ik as _SelectComponent,
  lk as _SkeletonComponent,
  sk as _SliderComponent,
  uk as _SnackbarComponent,
  dk as _SpaceComponent,
  vk as _StepComponent,
  fk as _StepsComponent,
  FS as _StickyComponent,
  ck as _StyleProviderComponent,
  LS as _SwipeComponent,
  RS as _SwipeItemComponent,
  mk as _SwitchComponent,
  pk as _TabComponent,
  hk as _TabItemComponent,
  gk as _TableComponent,
  yk as _TabsComponent,
  bk as _TabsItemsComponent,
  wk as _ThemesComponent,
  Ck as _TimePickerComponent,
  IS as _TooltipComponent,
  Sk as _UploaderComponent,
  rf as actionSheetProps,
  bi as add,
  cf as appBarProps,
  Rf as avatarGroupProps,
  If as avatarProps,
  pc as backTopProps,
  Cc as badgeProps,
  Ec as bottomNavigationItemProps,
  Tc as bottomNavigationProps,
  Lc as breadcrumbProps,
  jc as breadcrumbsProps,
  sc as buttonProps,
  em as cardProps,
  im as cellProps,
  km as checkboxGroupProps,
  pm as checkboxProps,
  Mm as chipProps,
  Am as colProps,
  Gm as collapseItemProps,
  Hm as collapseProps,
  Zm as countdownProps,
  Gp as counterProps,
  fh as datePickerProps,
  kk as default,
  Fe as defaultLazyOptions,
  Mh as dialogProps,
  Lh as dividerProps,
  ks as enUS,
  dm as formDetailsProps,
  dy as formProps,
  Cs as iconProps,
  Vs as imageCache,
  Iy as imagePreviewProps,
  py as imageProps,
  jy as indexAnchorProps,
  Xy as indexBarProps,
  xy as inputProps,
  ZC as install,
  lb as linkProps,
  vb as listProps,
  hb as loadingBarProps,
  rr as loadingProps,
  Ob as menuProps,
  Ts as merge,
  Nb as optionProps,
  Lb as overlayProps,
  Ye as pack,
  $s as packs,
  Ub as paginationProps,
  Wb as paperProps,
  Kb as pickerProps,
  gt as popupProps,
  r0 as progressProps,
  u0 as pullRefreshProps,
  w0 as radioGroupProps,
  c0 as radioProps,
  $0 as rateProps,
  V0 as resultProps,
  m1 as rowProps,
  b1 as selectProps,
  k1 as skeletonProps,
  V1 as sliderProps,
  Wd as snackbarProps,
  _1 as spaceProps,
  nw as stepProps,
  uw as stepsProps,
  At as stickyProps,
  fw as styleProviderProps,
  ad as swipeProps,
  pw as switchProps,
  Pw as tabItemProps,
  bw as tabProps,
  Bw as tableProps,
  Fw as tabsItemsProps,
  zw as tabsProps,
  OC as timePickerProps,
  Zg as tooltipProps,
  RC as uploaderProps,
  wi as use,
  gr as useHoverOverlay,
  yi as useLocale,
  KC as version,
  gi as zhCN
};
