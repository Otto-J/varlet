import { reactive as Le, onMounted as no, nextTick as ze, onActivated as Pr, isRef as Bv, watch as oe, onBeforeUnmount as Ct, onDeactivated as _n, unref as it, inject as Ev, getCurrentInstance as _a, computed as R, provide as Iv, isVNode as St, Comment as Nv, Fragment as Ve, ref as B, createApp as Dv, h as fs, onBeforeMount as Av, onUnmounted as xa, defineComponent as Q, createVNode as Z, Teleport as Aa, Transition as Ue, withDirectives as ke, vShow as Sr, mergeProps as Ne, openBlock as p, createBlock as ge, resolveDynamicComponent as et, normalizeClass as c, normalizeStyle as G, resolveComponent as ae, resolveDirective as De, withCtx as ve, createElementVNode as A, renderSlot as F, toDisplayString as re, createElementBlock as P, renderList as Fe, createCommentVNode as x, onUpdated as kt, createTextVNode as Ce, pushScopeId as za, popScopeId as La, withModifiers as kn, normalizeProps as $t, guardReactiveProps as ro, vModelText as zv, toRefs as Lv, withKeys as Xi, toRaw as Ki, TransitionGroup as Rv } from "vue";
var cs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, dS = Le(cs);
const hn = Le(cs), je = (e) => typeof e == "string", Po = (e) => typeof e == "boolean", an = (e) => typeof e == "number", wi = (e) => Object.prototype.toString.call(e) === "[object Object]", Uv = (e) => typeof e == "object" && e !== null, Tt = (e) => typeof e == "function", Te = (e) => Array.isArray(e), Hv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, dr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, ms = (e) => e === window, L = (e) => e == null ? 0 : je(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Po(e) ? Number(e) : e, Wt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Ci = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, Ot = () => typeof window < "u", Zi = (e) => [...new Set(e)], ps = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Fv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Yv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
}, Vo = (e) => Te(e) ? e : [e];
var Ji = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Qi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), jv = (e) => {
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
      this.has(r) && Wt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Mo = (e) => e, _i = (e) => Math.pow(e, 3), hs = (e) => e < 0.5 ? _i(e * 2) / 2 : 1 - _i((1 - e) * 2) / 2, ao = (e, n) => e ?? n, gs = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Ea = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function $n(e, n) {
  throw Error("Varlet [" + e + "]: " + n);
}
function xi(e, n) {
  console.warn("Varlet [" + e + "]: " + n);
}
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
function ft(e) {
  return window.getComputedStyle(e);
}
function An(e) {
  if (ms(e)) {
    var n = e.innerWidth, r = e.innerHeight, a = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: n,
      bottom: r,
      width: n,
      height: r
    };
    return Bo({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function Wv(e) {
  var {
    left: n
  } = An(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function el(e) {
  var {
    top: n
  } = An(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function ct(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Si(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Gv(e) {
  var {
    top: n,
    bottom: r,
    left: a,
    right: t
  } = An(e), {
    width: o,
    height: l
  } = An(window), i = a <= o && t >= 0, s = n <= l && r >= 0;
  return i && s;
}
function Co(e) {
  var {
    transform: n
  } = ft(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function kr(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = ft(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function qv(e) {
  for (var n = [], r = e; !ms(r); )
    r = kr(r), n.push(r);
  return n;
}
function ys(e, n) {
  if (je(e)) {
    var r = document.querySelector(e);
    return r || $n(n, "target element cannot found"), r;
  }
  if (Uv(e))
    return e;
  $n(n, 'type of prop "target" should be a selector or an element object');
}
function nl() {
  var {
    width: e,
    height: n
  } = An(window);
  return e > n ? {
    vMin: n,
    vMax: e
  } : {
    vMin: e,
    vMax: n
  };
}
var bs = (e) => je(e) && e.endsWith("rem"), Xv = (e) => je(e) && e.endsWith("px") || an(e), Kv = (e) => je(e) && e.endsWith("%"), ws = (e) => je(e) && e.endsWith("vw"), Cs = (e) => je(e) && e.endsWith("vh"), Ss = (e) => je(e) && e.endsWith("vmin"), ks = (e) => je(e) && e.endsWith("vmax"), Zv = (e) => je(e) && e.startsWith("calc("), Jv = (e) => je(e) && e.startsWith("var("), Ye = (e) => {
  if (an(e))
    return e;
  if (Xv(e))
    return +e.replace("px", "");
  var {
    width: n,
    height: r
  } = An(window);
  if (ws(e))
    return +e.replace("vw", "") * n / 100;
  if (Cs(e))
    return +e.replace("vh", "") * r / 100;
  if (bs(e)) {
    var a = +e.replace("rem", ""), t = ft(document.documentElement).fontSize;
    return a * parseFloat(t);
  }
  return Ss(e) ? nl().vMin : ks(e) ? nl().vMax : je(e) ? L(e) : 0;
}, he = (e) => {
  if (e != null)
    return Kv(e) || ws(e) || Cs(e) || bs(e) || Zv(e) || Jv(e) || Ss(e) || ks(e) ? e : Ye(e) + "px";
}, nn = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = he(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function bn(e) {
  var n = gs();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function rl(e) {
  var n = gs();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function to(e) {
  bn(() => {
    bn(e);
  });
}
function zn() {
  return new Promise((e) => {
    bn(() => {
      bn(e);
    });
  });
}
function Qv() {
  return new Promise((e) => {
    bn(e);
  });
}
function mt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = ct(e), s = Si(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (r - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), bn(d);
      } else
        e.scrollTo(a, r), u();
    };
    bn(d);
  });
}
function $s(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Fv(a);
    return n[o] = t, n;
  }, {});
}
function _v() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Gt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function tn(e) {
  let n = !1;
  no(() => {
    e(), ze(() => {
      n = !0;
    });
  }), Pr(() => {
    n && e();
  });
}
function Kn(e, n, r, a = {}) {
  if (!Ot())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => Tt(m) ? m() : it(m), u = (m) => {
    if (l || i)
      return;
    const h = s(m);
    h && (h.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, d = (m) => {
    if (!l || i)
      return;
    const h = s(m);
    h && (h.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let v;
  Bv(e) && (v = oe(() => e.value, (m, h) => {
    d(h), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return tn(() => {
    u(e);
  }), Ct(() => {
    d(e);
  }), _n(() => {
    d(e);
  }), f;
}
function Ts(e, n, r) {
  if (!Ot())
    return;
  Kn(document, n, (t) => {
    const o = it(e);
    o && !o.contains(t.target) && r(t);
  });
}
var xv = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function ef(e) {
  const n = _a();
  return e in n.provides;
}
function fn(e) {
  if (!ef(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = Ev(e), { childInstances: r, collect: a, clear: t } = n, o = xv(n, ["childInstances", "collect", "clear"]), l = _a();
  return {
    index: R(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      no(() => {
        ze().then(() => {
          a(l, u);
        });
      }), Ct(() => {
        ze().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function nf(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      St(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function cn(e) {
  const n = _a(), r = Le([]), a = [], t = R(() => r.length), o = () => {
    const u = nf(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    Wt(r, u), Wt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Iv(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function al(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function tl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        al(o, a, t, l, i, "next", s);
      }
      function i(s) {
        al(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
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
function Ke(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function rf(e) {
  var n = Dv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function nt(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => fs(e, Eo({}, n, r));
    }
  }, {
    unmount: t
  } = rf(a);
  return {
    unmountInstance: t
  };
}
function Os(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== Nv) {
      if (r.type === Ve && Te(r.children)) {
        r.children.forEach((a) => {
          n.push(a);
        });
        return;
      }
      n.push(r);
    }
  }), n;
}
function Tn() {
  var e = B(""), n = /* @__PURE__ */ function() {
    var t = tl(function* (o, l, i) {
      if (!Te(o) || !o.length)
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
    var t = tl(function* (o, l, i, s, u) {
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
function af(e) {
  Kn(() => window, "hashchange", e), Kn(() => window, "popstate", e);
}
function oo() {
  var e = B(!1);
  return Pr(() => {
    e.value = !1;
  }), _n(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function _(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (Te(s)) {
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
function k(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (Te(e))
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
function mn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), "var-elevation--" + e);
}
function Ps(e, n, r) {
  r === void 0 && (r = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = r, i = t ?? "onUpdate:" + n.toString(), s = () => e[n] != null ? e[n] : o;
  if (!a)
    return R({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : k(e[i], d);
      }
    });
  var u = B(s());
  return oe(() => e[n], () => {
    u.value = s();
  }), oe(() => u.value, (d) => {
    l ? l(i, d) : k(e[i], d);
  }), u;
}
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
var {
  n: Vs
} = _("ripple"), ol = 250;
function tf(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function of(e, n) {
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
function Ms(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker || !hn.enableRipple)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = of(this, e), s = document.createElement("div");
      s.classList.add(Vs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), tf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Io() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Vs());
    if (r.length) {
      var a = r[r.length - 1], t = ol - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, ol);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Bs() {
  if (!(!_v() || !hn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function lf(e, n) {
  var r;
  e._ripple = qt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    removeRipple: Io.bind(e)
  }), e.addEventListener("touchstart", Ms, {
    passive: !0
  }), e.addEventListener("touchmove", Bs, {
    passive: !0
  }), e.addEventListener("dragstart", Io, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function sf(e) {
  e.removeEventListener("touchstart", Ms), e.removeEventListener("touchmove", Bs), e.removeEventListener("dragstart", Io), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function uf(e, n) {
  var r, a, t, o, l = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (a = n.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = qt({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Es = {
  mounted: lf,
  unmounted: sf,
  updated: uf,
  install(e) {
    e.directive("ripple", this);
  }
}, vS = Es;
const We = Es;
function df(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var Pt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: df
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
  safeArea: {
    type: Boolean,
    default: !1
  },
  safeAreaTop: {
    type: Boolean,
    default: !1
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
function Is() {
  var e = Object.keys(hn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Bt(e) {
  hn.locks[e] = 1, Is();
}
function Et(e) {
  delete hn.locks[e], Is();
}
function io(e, n) {
  var {
    uid: r
  } = _a();
  n && oe(n, (a) => {
    a === !1 ? Et(r) : a === !0 && e() === !0 && Bt(r);
  }), oe(e, (a) => {
    n && n() === !1 || (a === !0 ? Bt(r) : Et(r));
  }), Av(() => {
    n && n() === !1 || e() === !0 && Bt(r);
  }), xa(() => {
    n && n() === !1 || e() === !0 && Et(r);
  }), Pr(() => {
    n && n() === !1 || e() === !0 && Bt(r);
  }), _n(() => {
    n && n() === !1 || e() === !0 && Et(r);
  });
}
function Vt(e, n) {
  var r = B(hn.zIndex);
  return oe(e, (a) => {
    a && (hn.zIndex += n, r.value = hn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
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
function vf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var {
  n: Vn,
  classes: So
} = _("popup");
const wn = Q({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Pt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Vt(() => e.show, 3), {
      disabled: o
    } = oo(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      k(v), d && k(e["onUpdate:show"], !1);
    };
    io(() => e.show, () => e.lockScroll), oe(() => e.show, (d) => {
      k(d ? e.onOpen : e.onClose);
    }), af(() => k(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return Z("div", {
        class: So(Vn("overlay"), d),
        style: No({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => Z("div", Ne({
      class: So(Vn("content"), Vn("--" + e.position), [e.defaultStyle, Vn("--content-background-color")], [e.defaultStyle, Vn("$-elevation--3")], [e.safeArea, Vn("--safe-area")], [e.safeAreaTop, Vn("--safe-area-top")]),
      style: {
        zIndex: t.value
      }
    }, a), [k(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: h,
        position: b
      } = e;
      return Z(Ue, {
        name: Vn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(Z("div", {
          class: So(Vn("$--box"), Vn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), Z(Ue, {
          name: h || Vn("$-pop-" + b)
        }, {
          default: () => [f && s()]
        })]), [[Sr, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return Z(Aa, {
          to: d,
          disabled: o.value
        }, vf(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
wn.install = function(e) {
  e.component(wn.name, wn);
};
var fS = wn, Ns = {
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
function il(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ff(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        il(o, a, t, l, i, "next", s);
      }
      function i(s) {
        il(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: cf,
  classes: mf
} = _("icon");
function pf(e, n) {
  return p(), ge(
    et(e.isURL(e.name) ? "img" : "i"),
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
var Ds = Q({
  name: "VarIcon",
  props: Ns,
  setup(e) {
    var n = B(""), r = B(!1), a = /* @__PURE__ */ function() {
      var t = ff(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield ze(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, L(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return oe(() => e.name, a, {
      immediate: !0
    }), {
      n: cf,
      classes: mf,
      nextName: n,
      animateInProgress: r,
      isURL: Hv,
      toNumber: L,
      toSizeUnit: he
    };
  }
});
Ds.render = pf;
const Oe = Ds;
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
var cS = Oe;
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
var hf = Do({
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
}, Ke(Pt, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "safeArea",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
const ki = {
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
}, As = {
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
function Ao() {
  return Ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ao.apply(this, arguments);
}
function $i() {
  var e = {}, n = B({}), r = (o, l) => {
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
    e[o] = Ao({}, e[o], l), a(o);
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
  packs: zs,
  pack: Xe,
  add: Ti,
  use: Oi,
  merge: Ls
} = $i();
Ti("zh-CN", ki);
Oi("zh-CN");
var mS = {
  zhCN: ki,
  enUS: As,
  packs: zs,
  pack: Xe,
  add: Ti,
  use: Oi,
  merge: Ls,
  useLocale: $i
};
const zo = {
  zhCN: ki,
  enUS: As,
  packs: zs,
  pack: Xe,
  add: Ti,
  use: Oi,
  merge: Ls,
  useLocale: $i
};
var {
  n: gf,
  classes: yf
} = _("action-sheet"), bf = ["onClick"];
function wf(e, n) {
  var r = ae("var-icon"), a = ae("var-popup"), t = De("ripple");
  return p(), ge(
    a,
    Ne({
      class: e.n("popup-radius"),
      position: "bottom",
      show: e.popupShow,
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.closeOnClickOverlay,
      teleport: e.teleport,
      "safe-area": e.safeArea
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
        Ne({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [F(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: c(e.n("title"))
          },
          re(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), F(e.$slots, "actions", {}, () => [(p(!0), P(
          Ve,
          null,
          Fe(e.actions, (o) => ke((p(), P(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: G({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (p(), ge(
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
            bf
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
    ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "safe-area", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var Rs = Q({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: wn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: hf,
  setup(e) {
    var n = B(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        k(l, t), o && k(e["onUpdate:show"], !1);
      }
    }, a = (t) => k(e["onUpdate:show"], t);
    return oe(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: gf,
      classes: yf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Xe,
      dt: ao,
      handleSelect: r
    };
  }
});
Rs.render = wf;
const vr = Rs;
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Lo.apply(this, arguments);
}
var tr, Pi = {};
function Cf(e) {
  return e === void 0 && (e = {}), Lo({}, Pi, e);
}
function Zn(e) {
  return Ot() ? new Promise((n) => {
    Zn.close();
    var r = Le(Cf(e));
    r.teleport = "body", tr = r;
    var {
      unmountInstance: a
    } = nt(vr, r, {
      onSelect: (t) => {
        k(r.onSelect, t), n(t);
      },
      onClose: () => {
        k(r.onClose), n("close");
      },
      onClosed: () => {
        k(r.onClosed), a(), tr === r && (tr = null);
      },
      onRouteChange: () => {
        a(), tr === r && (tr = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
Zn.setDefaultOptions = function(e) {
  Pi = e;
};
Zn.resetDefaultOptions = function() {
  Pi = {};
};
Zn.close = function() {
  if (tr != null) {
    var e = tr;
    tr = null, ze().then(() => {
      e.show = !1;
    });
  }
};
Zn.Component = vr;
vr.install = function(e) {
  e.component(vr.name, vr);
};
Zn.install = function(e) {
  e.component(vr.name, vr);
};
var pS = vr;
function Sf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var kf = {
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
    validator: Sf
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
  },
  safeAreaTop: {
    type: Boolean,
    default: !1
  }
}, {
  n: $f,
  classes: Tf
} = _("app-bar");
function Of(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: G(e.rootStyles)
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
        [F(e.$slots, "left"), e.titlePosition === "left" ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingLeft: e.paddingLeft
            })
          },
          [F(e.$slots, "default", {}, () => [Ce(
            re(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [F(e.$slots, "default", {}, () => [Ce(
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
        [e.titlePosition === "right" ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingRight: e.paddingRight
            })
          },
          [F(e.$slots, "default", {}, () => [Ce(
            re(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0), F(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), F(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var Us = Q({
  name: "VarAppBar",
  props: kf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = B(), t = B(), o = () => {
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
    return tn(o), kt(o), {
      n: $f,
      classes: Tf,
      formatElevation: mn,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Us.render = Of;
const Ir = Us;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var hS = Ir;
function ll(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function lo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ll(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ll(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
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
var Pf = "background-image", Vf = "lazy-loading", Mf = "lazy-error", sl = "lazy-attempt", Bf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Uo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", qa = [], Xt = [], Hs = jv(100), Ge = {
  loading: Uo,
  error: Uo,
  attempt: 3,
  throttleWait: 300,
  events: Bf
}, Vi = Ci(Mt, Ge.throttleWait);
function so(e, n) {
  e._lazy.arg === Pf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Ef(e) {
  e._lazy.loading && so(e, e._lazy.loading), Mt();
}
function If(e) {
  e._lazy.error && so(e, e._lazy.error), e._lazy.state = "error", Bi(e), Mt();
}
function Fs(e, n) {
  so(e, n), e._lazy.state = "success", Bi(e), Mt();
}
function Nf(e) {
  var n;
  Xt.includes(e) || (Xt.push(e), (n = Ge.events) == null || n.forEach((r) => {
    e.addEventListener(r, Vi, {
      passive: !0
    });
  }));
}
function Df() {
  Xt.forEach((e) => {
    var n;
    (n = Ge.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Vi);
    });
  }), Xt.length = 0;
}
function Af(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Vf)) != null ? r : Ge.loading,
    error: (a = e.getAttribute(Mf)) != null ? a : Ge.error,
    attempt: e.getAttribute(sl) ? Number(e.getAttribute(sl)) : Ge.attempt
  };
  e._lazy = Ro({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), so(e, Uo), k(Ge.filter, e._lazy);
}
function zf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Hs.add(n), Fs(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? If(e) : Ys(e);
  });
}
function Ys(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Hs.has(n)) {
      Fs(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Ef(e), zf(e, n);
  }
}
function Mi(e) {
  return Ho.apply(this, arguments);
}
function Ho() {
  return Ho = lo(function* (e) {
    yield zn(), Gv(e) && Ys(e);
  }), Ho.apply(this, arguments);
}
function Mt() {
  qa.forEach((e) => Mi(e));
}
function Lf(e) {
  return Fo.apply(this, arguments);
}
function Fo() {
  return Fo = lo(function* (e) {
    !qa.includes(e) && qa.push(e), qv(e).forEach(Nf), yield Mi(e);
  }), Fo.apply(this, arguments);
}
function Bi(e) {
  Wt(qa, e), qa.length === 0 && Df();
}
function Rf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function js(e, n) {
  return Yo.apply(this, arguments);
}
function Yo() {
  return Yo = lo(function* (e, n) {
    Af(e, n), yield Lf(e);
  }), Yo.apply(this, arguments);
}
function Uf(e, n) {
  return jo.apply(this, arguments);
}
function jo() {
  return jo = lo(function* (e, n) {
    if (!Rf(e, n)) {
      qa.includes(e) && (yield Mi(e));
      return;
    }
    yield js(e, n);
  }), jo.apply(this, arguments);
}
function Hf(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  Ge.events = n ?? Ge.events, Ge.loading = r ?? Ge.loading, Ge.error = a ?? Ge.error, Ge.attempt = t ?? Ge.attempt, Ge.throttleWait = o ?? Ge.throttleWait, Ge.filter = l;
}
var Ws = {
  mounted: js,
  unmounted: Bi,
  updated: Uf,
  install(e, n) {
    Hf(n), Vi = Ci(Mt, Ge.throttleWait), e.directive("lazy", this);
  }
}, gS = Ws;
const pt = Ws;
function Ff(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Gs = (e) => ["mini", "small", "normal", "large"].includes(e);
function qs(e) {
  return Gs(e) || an(e) || je(e);
}
var Yf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: qs,
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
    validator: Ff,
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
  n: jf,
  classes: Wf
} = _("avatar"), Gf = ["src", "lazy-loading", "lazy-error"], qf = ["src"];
function Xf(e, n) {
  var r = De("lazy");
  return p(), P(
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
    [e.src ? (p(), P(
      Ve,
      {
        key: 0
      },
      [e.lazy ? ke((p(), P(
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
        Gf
      )), [[r, e.src]]) : (p(), P(
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
        qf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (p(), P(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: G({
          transform: "scale(" + e.scale + ")"
        })
      },
      [F(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var Xs = Q({
  name: "VarAvatar",
  directives: {
    Lazy: pt
  },
  props: Yf,
  setup(e) {
    var n = B(null), r = B(null), a = B(1), t = () => {
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
      d ? (u._lazy.state === "success" && k(v, s), u._lazy.state === "error" && k(f, s)) : k(v, s);
    }, l = (s) => {
      k(e.onError, s);
    }, i = (s) => {
      k(e.onClick, s);
    };
    return tn(t), kt(t), {
      internalSizeValidator: Gs,
      sizeValidator: qs,
      toSizeUnit: he,
      n: jf,
      classes: Wf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Xs.render = Xf;
const Nr = Xs;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var yS = Nr, Kf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Zf,
  classes: Jf
} = _("avatar-group");
function Qf(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: G(e.rootStyles)
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ks = Q({
  name: "VarAvatarGroup",
  props: Kf,
  setup(e) {
    var n = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": he(e.offset)
    });
    return {
      n: Zf,
      classes: Jf,
      toSizeUnit: he,
      rootStyles: n
    };
  }
});
Ks.render = Qf;
const Dr = Ks;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var bS = Dr;
function _f(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function xf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var lr = {
  type: {
    type: String,
    default: "circle",
    validator: _f
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: xf
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
  n: ec,
  classes: nc
} = _("loading"), rc = (e) => (za(""), e = e(), La(), e), ac = /* @__PURE__ */ rc(() => /* @__PURE__ */ A(
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
)), tc = [ac];
function oc(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [F(e.$slots, "default"), e.loading ? (p(), P(
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
    )) : x("v-if", !0), e.isShow ? (p(), P(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [A(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: G({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          tc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (p(!0), P(
        Ve,
        null,
        Fe(e.loadingTypeDict, (r, a) => (p(), P(
          Ve,
          {
            key: a
          },
          [e.type === a ? (p(), P(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), P(
              Ve,
              null,
              Fe(r, (t) => (p(), P(
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
          )) : x("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (p(), P(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: G({
            color: e.color
          })
        },
        [F(e.$slots, "description", {}, () => [Ce(
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
var Zs = Q({
  name: "VarLoading",
  props: lr,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = R(() => k(r.default) ? e.loading : !0);
    return {
      n: ec,
      classes: nc,
      multiplySizeUnit: nn,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Zs.render = oc;
const En = Zs;
En.install = function(e) {
  e.component(En.name, En);
};
var wS = En, ic = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: lc,
  classes: sc
} = _("hover-overlay");
function uc(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var Js = Q({
  name: "VarHoverOverlay",
  props: ic,
  setup() {
    return {
      n: lc,
      classes: sc
    };
  }
});
Js.render = uc;
const dn = Js;
dn.install = function(e) {
  e.component(dn.name, dn);
};
function $r() {
  var e = B(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var CS = dn;
function Qs(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function dc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[ps(t)] = o, r;
  }, {}) : {};
}
function vc(e) {
  var {
    value: n
  } = e._hover, r = dc(e);
  Object.keys(n).forEach((a) => {
    var t = ps(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Ei(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function fc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function _s(e) {
  fc(e), Ei(e, e._hover.rawStyle);
}
function xs() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, Tt(e)) {
    e(this._hover.hovering);
    return;
  }
  Ei(this, e);
}
function eu() {
  if (this._hover.hovering = !1, Tt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  _s(this);
}
function nu(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Qs(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, vc(e), e.addEventListener("mouseenter", xs), e.addEventListener("mouseleave", eu));
}
function ru(e, n) {
  Qs(n.arg) || (_s(e), e.removeEventListener("mouseenter", xs), e.removeEventListener("mouseleave", eu));
}
function cc(e, n) {
  e._hover && ru(e, n);
}
function mc(e, n) {
  return !Tt(n.value) && e._hover.hovering;
}
function pc(e, n) {
  nu(e, n), mc(e, n) && Ei(e, n.value);
}
var au = {
  mounted: nu,
  unmounted: ru,
  beforeUpdate: cc,
  updated: pc,
  install(e) {
    e.directive("hover", this);
  }
}, SS = au;
const Ln = au;
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
function tu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function hc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function gc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var yc = {
  type: {
    type: String,
    validator: tu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: gc
  },
  size: {
    type: String,
    validator: hc
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
  loadingType: Ke(lr, "type"),
  loadingSize: Ke(lr, "size"),
  loadingColor: Wo({}, Ke(lr, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, ou = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function bc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = cn(ou);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function wc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = fn(ou);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: Cc,
  classes: Sc
} = _("button"), kc = ["type", "disabled"];
function $c(e, n) {
  var r = ae("var-loading"), a = ae("var-hover-overlay"), t = De("ripple"), o = De("hover");
  return ke((p(), P(
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
    [e.loading || e.pending ? (p(), ge(
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
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), Z(
      a,
      {
        hovering: e.hovering
      },
      null,
      8,
      ["hovering"]
    )],
    46,
    kc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var iu = Q({
  name: "VarButton",
  components: {
    VarLoading: En,
    VarHoverOverlay: dn
  },
  directives: {
    Ripple: We,
    Hover: Ln
  },
  props: yc,
  setup(e) {
    var n = B(!1), {
      buttonGroup: r
    } = wc(), {
      hovering: a,
      handleHovering: t
    } = $r(), o = R(() => {
      if (!r)
        return {
          elevation: mn(e.elevation, 2),
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
    }), l = (u) => {
      e.autoLoading && (n.value = !0, u = Te(u) ? u : [u], Promise.all(u).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, i = (u) => {
      var {
        loading: d,
        disabled: v,
        onClick: f
      } = e;
      !f || d || v || n.value || l(k(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || l(k(f, u));
    };
    return {
      n: Cc,
      classes: Sc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
iu.render = $c;
const _e = iu;
_e.install = function(e) {
  e.component(_e.name, _e);
};
var kS = _e, Tc = {
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
  n: Oc,
  classes: Pc
} = _("back-top");
function Vc(e, n) {
  var r = ae("var-icon"), a = ae("var-button");
  return p(), ge(
    Aa,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
      "div",
      Ne({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = kn(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [F(e.$slots, "default", {}, () => [Z(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: ve(() => [Z(r, {
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
var lu = Q({
  name: "VarBackTop",
  components: {
    VarButton: _e,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Tc,
  setup(e) {
    var n = B(!1), r = B(null), a = B(!0), t, o = (d) => {
      k(e.onClick, d);
      var v = Si(t);
      mt(t, {
        left: v,
        duration: e.duration,
        animation: hs
      });
    }, l = Ci(() => {
      n.value = ct(t) >= Ye(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? ys(e.target, "BackTop") : kr(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return no(() => {
      i(), s(), a.value = !1;
    }), Pr(s), Ct(u), _n(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: he,
      n: Oc,
      classes: Pc,
      handleClick: o
    };
  }
});
lu.render = Vc;
const Ar = lu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var $S = Ar;
function Mc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Bc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Ec = {
  type: {
    type: String,
    default: "default",
    validator: Mc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Bc
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
  n: Ic,
  classes: Nc
} = _("badge");
function Dc(e, n) {
  var r = ae("var-icon");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [F(e.$slots, "default"), Z(
      Ue,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ve(() => [ke(A(
          "span",
          Ne({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (p(), ge(
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
          )) : x("v-if", !0), F(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), P(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            re(e.value),
            3
            /* TEXT, CLASS */
          )) : x("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[Sr, !e.hidden]])]),
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
var su = Q({
  name: "VarBadge",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Ec,
  setup(e) {
    var n = R(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: Ic,
      classes: Nc,
      value: n
    };
  }
});
su.render = Dc;
const fr = su;
fr.install = function(e) {
  e.component(fr.name, fr);
};
var TS = fr, Ac = {
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
}, uu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function zc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = cn(uu);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
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
var {
  n: Lc,
  classes: Rc
} = _("bottom-navigation"), {
  n: uo
} = _("bottom-navigation-item"), ul = uo("--right-half-space"), dl = uo("--left-half-space"), vl = uo("--right-space"), Uc = {
  type: "primary"
};
function Hc(e, n) {
  var r = ae("var-button");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [F(e.$slots, "default"), e.$slots.fab ? (p(), ge(
      r,
      Ne({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ve(() => [F(e.$slots, "fab")]),
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
var du = Q({
  name: "VarBottomNavigation",
  components: {
    VarButton: _e
  },
  props: Ac,
  setup(e, n) {
    var {
      slots: r
    } = n, a = B(null), t = R(() => e.active), o = R(() => e.activeColor), l = R(() => e.inactiveColor), i = B({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = zc(), v = () => {
      s.value === 0 || f() || m() || h();
    }, f = () => u.find((y) => {
      var {
        name: M
      } = y;
      return t.value === M.value;
    }), m = () => u.find((y) => {
      var {
        index: M
      } = y;
      return t.value === M.value;
    }), h = () => {
      an(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > s.value - 1 && k(e["onUpdate:active"], s.value - 1));
    }, b = (y) => {
      t.value !== y && (e.onBeforeChange ? g(y) : w(y));
    }, g = (y) => {
      var M = Vo(k(e.onBeforeChange, y));
      Promise.all(M).then((D) => {
        D.every(Boolean) && w(y);
      });
    }, w = (y) => {
      k(e["onUpdate:active"], y), k(e.onChange, y);
    }, V = () => {
      var y = E();
      y.forEach((M) => {
        M.classList.remove(ul, dl, vl);
      });
    }, S = (y) => {
      var M = E(), D = M.length, C = y % 2 === 0;
      M.forEach(($, z) => {
        T(C, $, z, D);
      });
    }, T = (y, M, D, C) => {
      var $ = D === C - 1;
      if (!y && $) {
        M.classList.add(vl);
        return;
      }
      var z = D === C / 2 - 1, K = D === C / 2;
      z ? M.classList.add(ul) : K && M.classList.add(dl);
    }, E = () => Array.from(a.value.querySelectorAll("." + uo())), O = () => {
      k(e.onFabClick);
    }, I = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: b
    };
    return d(I), oe(() => s.value, v), oe(() => e.fabProps, (y) => {
      i.value = Go({}, Uc, y);
    }, {
      immediate: !0,
      deep: !0
    }), tn(() => {
      r.fab && S(s.value);
    }), kt(() => {
      V(), r.fab && S(s.value);
    }), {
      n: Lc,
      classes: Rc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: O,
      fabProps: i
    };
  }
});
du.render = Hc;
const zr = du;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var OS = zr, Fc = {
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
function Yc() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn(uu);
  return r || $n("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: jc,
  classes: Wc
} = _("bottom-navigation-item"), Gc = {
  type: "danger",
  dot: !0
};
function qc(e, n) {
  var r = ae("var-icon"), a = ae("var-badge"), t = De("ripple");
  return ke((p(), P(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: G({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (p(), ge(
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
    )) : x("v-if", !0), F(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), ge(
      a,
      Ne({
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
      [e.$slots.default ? x("v-if", !0) : (p(), P(
        Ve,
        {
          key: 0
        },
        [Ce(
          re(e.label),
          1
          /* TEXT */
        )],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )), F(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var vu = Q({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: fr,
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: Fc,
  setup(e) {
    var n = R(() => e.name), r = R(() => e.badge), a = B({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = Yc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, h = (m = n.value) != null ? m : t.value;
      k(e.onClick, h), k(o.onToggle, h);
    };
    return l(d), oe(() => r.value, (m) => {
      a.value = m === !0 ? Gc : r.value;
    }, {
      immediate: !0
    }), {
      n: jc,
      classes: Wc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
vu.render = qc;
const Lr = vu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var PS = Lr, Xc = {
  separator: {
    type: String
  },
  onClick: U()
}, fu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Kc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = cn(fu);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Zc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = fn(fu);
  return n || $n("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Jc,
  classes: Qc
} = _("breadcrumb");
function _c(e, n) {
  return p(), P(
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
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? x("v-if", !0) : F(e.$slots, "separator", {
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
var cu = Q({
  name: "VarBreadcrumb",
  props: Xc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Zc(), t = R(() => n.value === r.length.value - 1), o = R(() => r.separator.value), l = (i) => {
      t.value || k(e.onClick, i);
    };
    return a(null), {
      n: Jc,
      classes: Qc,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
cu.render = _c;
const Rr = cu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var VS = Rr, xc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: em
} = _("breadcrumbs");
function nm(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var mu = Q({
  name: "VarBreadcrumbs",
  props: xc,
  setup(e) {
    var n = R(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Kc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: em
    };
  }
});
mu.render = nm;
const Ur = mu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var MS = Ur;
function rm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function am(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function tm(e) {
  return ["normal", "text", "outline"].includes(e);
}
var om = {
  type: {
    type: String,
    default: "default",
    validator: rm
  },
  size: {
    type: String,
    default: "normal",
    validator: am
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
    validator: tm
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
  n: im,
  classes: lm
} = _("button-group");
function sm(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var pu = Q({
  name: "VarButtonGroup",
  props: om,
  setup(e) {
    var {
      bindButtons: n
    } = bc(), r = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return n(r), {
      n: im,
      classes: lm,
      formatElevation: mn
    };
  }
});
pu.render = sm;
const Hr = pu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var BS = Hr;
function um(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var dm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: um,
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
function fl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function cl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        fl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        fl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: vm,
  classes: fm
} = _("card"), cm = 500, mm = ["src", "alt"];
function pm(e, n) {
  var r = ae("var-icon"), a = ae("var-button"), t = De("ripple");
  return ke((p(), P(
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
    [A(
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
      [F(e.$slots, "image", {}, () => [e.src ? (p(), P(
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
        mm
      )) : x("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("container"))
        },
        [F(e.$slots, "title", {}, () => [e.title ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), F(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          re(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [F(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), P(
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
          [F(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), P(
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
        [F(e.$slots, "close-button", {}, () => [Z(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: kn(e.close, ["stop"])
          },
          {
            default: ve(() => [Z(
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
var hu = Q({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: Oe,
    VarButton: _e
  },
  props: dm,
  setup(e) {
    var n = B(null), r = B(null), a = B("auto"), t = B("auto"), o = B("100%"), l = B("100%"), i = B("auto"), s = B("auto"), u = B(void 0), d = B("hidden"), v = B("0px"), f = B("0"), m = R(() => e.layout === "row"), h = B(!1), b = B(!1), {
      zIndex: g
    } = Vt(() => e.floating, 1);
    io(() => e.floating, () => !m.value);
    var w = "auto", V = "auto", S = null, T = B(null), E = /* @__PURE__ */ function() {
      var M = cl(function* () {
        clearTimeout(T.value), clearTimeout(S), T.value = null, T.value = setTimeout(/* @__PURE__ */ cl(function* () {
          var {
            width: D,
            height: C,
            left: $,
            top: z
          } = n.value.getBoundingClientRect();
          a.value = he(D), t.value = he(C), o.value = a.value, l.value = t.value, i.value = he(z), s.value = he($), u.value = "fixed", w = i.value, V = s.value, h.value = !0, yield zn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? cm : 0);
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), O = () => {
      clearTimeout(S), clearTimeout(T.value), T.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = V, v.value = "0px", f.value = "0", h.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", V = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, I = () => {
      k(e["onUpdate:floating"], !1);
    }, y = (M) => {
      k(e.onClick, M);
    };
    return oe(() => e.floating, (M) => {
      m.value || ze(() => {
        M ? E() : O();
      });
    }, {
      immediate: !0
    }), {
      n: vm,
      classes: fm,
      toSizeUnit: he,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: T,
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
      close: I,
      showFloatingButtons: h,
      floated: b,
      formatElevation: mn,
      handleClick: y
    };
  }
});
hu.render = pm;
const Fr = hu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var ES = Fr, hm = {
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
  n: gm,
  classes: ym
} = _("cell");
function bm(e, n) {
  var r = ae("var-icon"), a = De("ripple");
  return ke((p(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "icon", {}, () => [e.icon ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [Z(
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
      [F(e.$slots, "default", {}, () => [e.title ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        re(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), P(
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
    ), e.$slots.extra ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [F(e.$slots, "extra")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var gu = Q({
  name: "VarCell",
  components: {
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: hm,
  setup(e) {
    var n = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": he(e.borderOffset),
      "--cell-border-right": he(e.borderOffset)
    }), r = (a) => {
      k(e.onClick, a);
    };
    return {
      n: gm,
      classes: ym,
      toSizeUnit: he,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
gu.render = bm;
const cr = gu;
cr.install = function(e) {
  e.component(cr.name, cr);
};
var IS = cr, wm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Cm
} = _("form-details"), Sm = {
  key: 0
}, km = {
  key: 0
};
function $m(e, n) {
  return p(), ge(
    Ue,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (p(), P(
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
          [Z(
            Ue,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (p(), P(
                "div",
                Sm,
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
          [Z(
            Ue,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (p(), P(
                "div",
                km,
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
var yu = Q({
  name: "VarFormDetails",
  props: wm,
  setup: () => ({
    n: Cm
  })
});
yu.render = $m;
const Je = yu;
Je.install = function(e) {
  e.component(Je.name, Je);
};
var NS = Je, Tm = {
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
}, bu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Om() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = cn(bu);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Pm() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = fn(bu);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
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
var wu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function On() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn(wu), a = _a(), t = r ? (o) => {
    r(qo({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: n,
    form: e,
    bindForm: t
  };
}
function Vm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = cn(wu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: Mm,
  classes: Bm
} = _("checkbox");
function Em(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = De("hover"), l = De("ripple");
  return p(), P(
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
      [ke((p(), P(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? F(e.$slots, "checked-icon", {
          key: 0
        }, () => [Z(
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
        )]) : F(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [Z(
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
        )]), Z(
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
      )), [[o, e.handleHovering, "desktop"], [l, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), Z(
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
var Cu = Q({
  name: "VarCheckbox",
  directives: {
    Ripple: We,
    Hover: Ln
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  props: Tm,
  setup(e) {
    var n = B(!1), r = R(() => n.value === e.checkedValue), a = R(() => e.checkedValue), t = B(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Pm(), {
      hovering: i,
      handleHovering: s
    } = $r(), {
      form: u,
      bindForm: d
    } = On(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: h
    } = Tn(), b = (y) => {
      ze(() => {
        var {
          validateTrigger: M,
          rules: D,
          modelValue: C
        } = e;
        f(M, y, D, C);
      });
    }, g = (y) => {
      n.value = y;
      var {
        checkedValue: M,
        onChange: D
      } = e;
      k(e["onUpdate:modelValue"], n.value), k(D, n.value), b("onChange"), y === M ? o == null || o.onChecked(M) : o == null || o.onUnchecked(M);
    }, w = (y) => {
      var {
        disabled: M,
        readonly: D,
        checkedValue: C,
        uncheckedValue: $,
        onClick: z
      } = e;
      if (!(u != null && u.disabled.value || M) && (k(z, y), !(u != null && u.readonly.value || D))) {
        t.value = !0;
        var K = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && K || g(r.value ? $ : C);
      }
    }, V = (y) => {
      var {
        checkedValue: M,
        uncheckedValue: D
      } = e;
      n.value = y.includes(M) ? M : D;
    }, S = () => {
      t.value = !1;
    }, T = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), h();
    }, E = (y) => {
      var {
        checkedValue: M,
        uncheckedValue: D
      } = e, C = ![M, D].includes(y);
      C && (y = r.value ? D : M), g(y);
    }, O = () => m(e.rules, e.modelValue);
    oe(() => e.modelValue, (y) => {
      n.value = y;
    }, {
      immediate: !0
    });
    var I = {
      checkedValue: a,
      checked: r,
      sync: V,
      validate: O,
      resetValidation: h,
      reset: T,
      resetWithAnimation: S
    };
    return k(l, I), k(d, I), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Mm,
      classes: Bm,
      handleClick: w,
      toggle: E,
      reset: T,
      validate: O,
      resetValidation: h
    };
  }
});
Cu.render = Em;
const mr = Cu;
mr.install = function(e) {
  e.component(mr.name, mr);
};
var DS = mr;
function Im(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Nm = {
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
    validator: Im
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
  n: Dm,
  classes: Am
} = _("checkbox-group");
function zm(e, n) {
  var r = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), Z(
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
var Su = Q({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: Je
  },
  props: Nm,
  setup(e) {
    var n = R(() => e.max), r = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Om(), {
      bindForm: l
    } = On(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Tn(), v = R(() => i.value), f = (I) => {
      ze(() => {
        var {
          validateTrigger: y,
          rules: M,
          modelValue: D
        } = e;
        s(y, I, M, D);
      });
    }, m = (I) => {
      k(e["onUpdate:modelValue"], I), k(e.onChange, I), f("onChange");
    }, h = (I) => {
      var {
        modelValue: y
      } = e;
      y.includes(I) || m([...y, I]);
    }, b = (I) => {
      var {
        modelValue: y
      } = e;
      y.includes(I) && m(y.filter((M) => M !== I));
    }, g = () => t.forEach((I) => {
      var {
        sync: y
      } = I;
      return y(e.modelValue);
    }), w = () => {
      t.forEach((I) => I.resetWithAnimation());
    }, V = () => {
      var I = t.map((M) => {
        var {
          checkedValue: D
        } = M;
        return D.value;
      }), y = Zi(I);
      return w(), k(e["onUpdate:modelValue"], y), y;
    }, S = () => {
      var I = t.filter((M) => {
        var {
          checked: D
        } = M;
        return !D.value;
      }).map((M) => {
        var {
          checkedValue: D
        } = M;
        return D.value;
      }), y = Zi(I);
      return w(), k(e["onUpdate:modelValue"], y), y;
    }, T = () => {
      k(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    oe(() => e.modelValue, g, {
      deep: !0
    }), oe(() => a.value, g);
    var O = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: b,
      validate: E,
      resetValidation: d,
      reset: T,
      errorMessage: v
    };
    return o(O), k(l, O), {
      errorMessage: i,
      n: Dm,
      classes: Am,
      checkAll: V,
      inverseAll: S,
      reset: T,
      validate: E,
      resetValidation: d
    };
  }
});
Su.render = zm;
const Yr = Su;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var AS = Yr;
function Lm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Rm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Um = {
  type: {
    type: String,
    default: "default",
    validator: Lm
  },
  size: {
    type: String,
    default: "normal",
    validator: Rm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Ke(Ns, "name"),
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
  n: xn,
  classes: Hm
} = _("chip");
function Fm(e, n) {
  var r = ae("var-icon");
  return p(), ge(
    Ue,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [A(
        "span",
        Ne({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [F(e.$slots, "left"), A(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [F(e.$slots, "default")],
          2
          /* CLASS */
        ), F(e.$slots, "right"), e.closable ? (p(), P(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [Z(
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
var ku = Q({
  name: "VarChip",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Um,
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
      } = e, u = xn(o ? "$--flex" : "$--inline-flex"), d = i ? xn("plain") + " " + xn("plain-" + l) : xn("--" + l), v = s ? xn("--round") : null;
      return [xn("--" + t), u, d, v];
    }), a = (t) => {
      k(e.onClose, t);
    };
    return {
      n: xn,
      classes: Hm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
ku.render = Fm;
const pr = ku;
pr.install = function(e) {
  e.component(pr.name, pr);
};
var zS = pr;
function Ym(e) {
  return ["row", "column"].includes(e);
}
function jm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Wm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Gm = {
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
    validator: Ym
  },
  justify: {
    type: String,
    validator: jm
  },
  align: {
    type: String,
    validator: Wm
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
}, $u = Symbol("ROW_BIND_COL_KEY");
function qm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = cn($u);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Xm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn($u);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: It,
  classes: Km
} = _("col");
function Zm(e, n) {
  return p(), P(
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
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Tu = Q({
  name: "VarCol",
  props: Gm,
  setup(e) {
    var n = B({
      left: 0,
      right: 0
    }), r = R(() => L(e.span)), a = R(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Xm(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (wi(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(It("--span-" + u + "-" + m)), f && v.push(It("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(It("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      k(e.onClick, u);
    };
    return oe([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), k(o, l), {
      n: It,
      classes: Km,
      padding: n,
      toNumber: L,
      toSizeUnit: he,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Gt
    };
  }
});
Tu.render = Zm;
const jr = Tu;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var LS = jr, Ou = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Jm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = cn(Ou);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var Qm = {
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
  divider: {
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
  n: _m
} = _("collapse");
function xm(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Pu = Q({
  name: "VarCollapse",
  props: Qm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Jm(), t = R(() => e.modelValue), o = R(() => e.offset), l = R(() => e.divider), i = R(() => e.elevation), s = () => !e.accordion && !Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (b, g) => s() ? g ? e.accordion ? b : [...e.modelValue, b] : e.accordion ? null : e.modelValue.filter((w) => w !== b) : null, d = (b, g) => {
      var w = u(b, g);
      k(e["onUpdate:modelValue"], w), k(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return r.find((g) => {
          var {
            name: w
          } = g;
          return e.modelValue === w.value;
        });
      var b = r.filter((g) => {
        var {
          name: w
        } = g;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return b.length ? b : void 0;
    }, f = () => e.accordion ? r.find((b) => {
      var {
        index: g,
        name: w
      } = b;
      return w.value === void 0 && e.modelValue === g.value;
    }) : r.filter((b) => {
      var {
        index: g,
        name: w
      } = b;
      return w.value === void 0 && e.modelValue.includes(g.value);
    }), m = () => {
      if (s()) {
        var b = v() || f();
        if (e.accordion && !b || !e.accordion && !b.length) {
          r.forEach((g) => {
            g.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((g) => {
          var w = e.accordion ? b === g : b.includes(g);
          g.init(e.accordion, w);
        });
      }
    }, h = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(h), oe(() => n.value, () => ze().then(m)), oe(() => e.modelValue, () => ze().then(m)), {
      n: _m,
      divider: l
    };
  }
});
Pu.render = xm;
const Wr = Pu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var RS = Wr;
function ep() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn(Ou);
  return r || $n("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var np = {
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
  n: rp,
  classes: ap
} = _("collapse-item");
function tp(e, n) {
  var r = ae("var-icon");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: G("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
      },
      null,
      2
      /* CLASS */
    ), A(
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
        [F(e.$slots, "title", {}, () => [Ce(
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
        [F(e.$slots, "icon", {}, () => [Z(
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
    ), ke(A(
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
        [F(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[Sr, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Vu = Q({
  name: "VarCollapseItem",
  components: {
    VarIcon: Oe
  },
  props: np,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = ep(), t = !0, o = B(null), l = B(!1), i = B(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = r, m = R(() => e.name), h = (E, O) => {
      s.value === void 0 || E && Te(s.value) || O === i.value || (i.value = O, b(!0));
    }, b = (E) => {
      e.disabled || E || f(e.name || n.value, !i.value);
    }, g = () => {
      o.value && (o.value.style.height = "", l.value = !0, bn(() => {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = "0px", bn(() => {
          o.value.style.height = E + "px", t && to(() => {
            t && S();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, V = () => {
      if (o.value) {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = E + "px", bn(() => {
          o.value.style.height = "0px";
        });
      }
    }, S = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, T = {
      index: n,
      name: m,
      init: h
    };
    return a(T), oe(i, (E) => {
      E ? g() : V();
    }), {
      n: rp,
      start: w,
      classes: ap,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: b,
      contentEl: o,
      transitionend: S,
      formatElevation: mn
    };
  }
});
Vu.render = tp;
const Gr = Vu;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var US = Gr, op = {
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
  n: ip
} = _("countdown"), Xo = 1e3, Ko = 60 * Xo, Zo = 60 * Ko, ml = 24 * Zo;
function lp(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default", $t(ro(e.timeData)), () => [Ce(
      re(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Mu = Q({
  name: "VarCountdown",
  props: op,
  setup(e) {
    var n = B(""), r = B({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (h, b) => {
      var g = Object.values(b), w = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if (w.forEach((T, E) => {
        h.includes(T) ? h = h.replace(T, Ea("" + g[E], 2, "0")) : g[E + 1] += g[E] * V[E];
      }), h.includes("S")) {
        var S = Ea("" + g[g.length - 1], 3, "0");
        h.includes("SSS") ? h = h.replace("SSS", S) : h.includes("SS") ? h = h.replace("SS", S.slice(0, 2)) : h = h.replace("S", S.slice(0, 1));
      }
      return h;
    }, u = (h) => {
      var b = Math.floor(h / ml), g = Math.floor(h % ml / Zo), w = Math.floor(h % Zo / Ko), V = Math.floor(h % Ko / Xo), S = Math.floor(h % Xo), T = {
        days: b,
        hours: g,
        minutes: w,
        seconds: V,
        milliseconds: S
      };
      r.value = T, k(e.onChange, r.value), n.value = s(e.format, T);
    }, d = () => {
      var {
        time: h,
        onEnd: b
      } = e, g = performance.now();
      if (a || (a = g + L(h)), l = a - g, l < 0 && (l = 0), u(l), l === 0) {
        k(b);
        return;
      }
      t && (o = bn(d));
    }, v = function(h) {
      h === void 0 && (h = !1), !(t && !h) && (t = !0, a = performance.now() + (l || L(e.time)), d());
    }, f = () => {
      t = !1, rl(o);
    }, m = () => {
      a = 0, t = !1, rl(o), d();
    };
    return oe(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Pr(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), _n(() => {
      i = t, f();
    }), xa(f), {
      showTime: n,
      timeData: r,
      n: ip,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Mu.render = lp;
const qr = Mu;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var HS = qr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ha = 9e15, Vr = 1e9, Jo = "0123456789abcdef", Kt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Zt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Qo = {
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
  minE: -Ha,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ha,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Bu, Hn, pe = !0, vo = "[DecimalError] ", Tr = vo + "Invalid argument: ", Eu = vo + "Precision limit exceeded", Iu = vo + "crypto unavailable", Nu = "[object Decimal]", xe = Math.floor, qe = Math.pow, sp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, up = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, dp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Du = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, In = 1e7, ce = 7, vp = 9007199254740991, fp = Kt.length - 1, _o = Zt.length - 1, X = { toStringTag: Nu };
X.absoluteValue = X.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), fe(e);
};
X.ceil = function() {
  return fe(new this.constructor(this), this.e + 1, 2);
};
X.clampedTo = X.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(Tr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
X.comparedTo = X.cmp = function(e) {
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
X.cosine = X.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ce, a.rounding = 1, r = cp(a, Uu(a, r)), a.precision = e, a.rounding = n, fe(Hn == 2 || Hn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
X.cubeRoot = X.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (pe = !1, o = d.s * qe(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Qe(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = qe(r, 1 / 3), e = xe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Ee(u.plus(d).times(i), u.plus(s), l + 2, 1), Qe(i.d).slice(0, l) === (r = Qe(a.d)).slice(0, l))
      if (r = r.slice(l - 3, l + 1), r == "9999" || !t && r == "4999") {
        if (!t && (fe(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (fe(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return pe = !0, fe(a, e, v.rounding, n);
};
X.decimalPlaces = X.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - xe(this.e / ce)) * ce, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
X.dividedBy = X.div = function(e) {
  return Ee(this, new this.constructor(e));
};
X.dividedToIntegerBy = X.divToInt = function(e) {
  var n = this, r = n.constructor;
  return fe(Ee(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
X.equals = X.eq = function(e) {
  return this.cmp(e) === 0;
};
X.floor = function() {
  return fe(new this.constructor(this), this.e + 1, 3);
};
X.greaterThan = X.gt = function(e) {
  return this.cmp(e) > 0;
};
X.greaterThanOrEqualTo = X.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
X.hyperbolicCosine = X.cosh = function() {
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / co(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Xa(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return fe(o, l.precision = r, l.rounding = a, !0);
};
X.hyperbolicSine = X.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Xa(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / co(5, e)), t = Xa(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, fe(t, n, r, !0);
};
X.hyperbolicTangent = X.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Ee(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
X.inverseCosine = X.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Bn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Bn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Bn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
X.inverseHyperbolicCosine = X.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, pe = !1, r = r.times(r).minus(1).sqrt().plus(r), pe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
X.inverseHyperbolicSine = X.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, pe = !1, r = r.times(r).plus(1).sqrt().plus(r), pe = !0, a.precision = e, a.rounding = n, r.ln());
};
X.inverseHyperbolicTangent = X.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? fe(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Ee(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
X.inverseSine = X.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Bn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
X.inverseTangent = X.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= _o)
      return l = Bn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= _o)
      return l = Bn(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / ce + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (pe = !1, n = Math.ceil(i / ce), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), pe = !0, fe(l, d.precision = v, d.rounding = f, !0);
};
X.isFinite = function() {
  return !!this.d;
};
X.isInteger = X.isInt = function() {
  return !!this.d && xe(this.e / ce) > this.d.length - 2;
};
X.isNaN = function() {
  return !this.s;
};
X.isNegative = X.isNeg = function() {
  return this.s < 0;
};
X.isPositive = X.isPos = function() {
  return this.s > 0;
};
X.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
X.lessThan = X.lt = function(e) {
  return this.cmp(e) < 0;
};
X.lessThanOrEqualTo = X.lte = function(e) {
  return this.cmp(e) < 1;
};
X.logarithm = X.log = function(e) {
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
  if (pe = !1, i = v + m, l = sr(u, i), a = n ? Jt(d, i + 10) : sr(e, i), s = Ee(l, a, i, 1), ht(s.d, t = v, f))
    do
      if (i += 10, l = sr(u, i), a = n ? Jt(d, i + 10) : sr(e, i), s = Ee(l, a, i, 1), !o) {
        +Qe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = fe(s, v + 1, 0));
        break;
      }
    while (ht(s.d, t += 10, f));
  return pe = !0, fe(s, v, f);
};
X.minus = X.sub = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, h = m.constructor;
  if (e = new h(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new h(NaN) : m.d ? e.s = -e.s : e = new h(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, i = h.precision, s = h.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new h(m);
    else
      return new h(s === 3 ? -0 : 0);
    return pe ? fe(e, i, s) : e;
  }
  if (r = xe(e.e / ce), d = xe(m.e / ce), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, l = f.length) : (n = f, r = d, l = u.length), a = Math.max(Math.ceil(i / ce), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
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
        u[t] = In - 1;
      --u[t], u[a] += In;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = fo(u, r), pe ? fe(e, i, s) : e) : new h(s === 3 ? -0 : 0);
};
X.modulo = X.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? fe(new a(r), a.precision, a.rounding) : (pe = !1, a.modulo == 9 ? (n = Ee(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Ee(r, e, 0, a.modulo, 1), n = n.times(e), pe = !0, r.minus(n));
};
X.naturalExponential = X.exp = function() {
  return xo(this);
};
X.naturalLogarithm = X.ln = function() {
  return sr(this);
};
X.negated = X.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, fe(e);
};
X.plus = X.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), pe ? fe(e, i, s) : e;
  if (o = xe(v.e / ce), a = xe(e.e / ce), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / ce), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / In | 0, u[t] %= In;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = fo(u, a), pe ? fe(e, i, s) : e;
};
X.precision = X.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Tr + e);
  return r.d ? (n = Au(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
X.round = function() {
  var e = this, n = e.constructor;
  return fe(new n(e), e.e + 1, n.rounding);
};
X.sine = X.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ce, a.rounding = 1, r = pp(a, Uu(a, r)), a.precision = e, a.rounding = n, fe(Hn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.squareRoot = X.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (pe = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = Qe(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = xe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Ee(l, o, r + 2, 1)).times(0.5), Qe(o.d).slice(0, r) === (n = Qe(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (fe(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (fe(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return pe = !0, fe(a, s, d.rounding, e);
};
X.tangent = X.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Ee(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, fe(Hn == 2 || Hn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.times = X.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = xe(d.e / ce) + xe(e.e / ce), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + n, o[t--] = i % In | 0, n = i / In | 0;
    o[t] = (o[t] + n) % In | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = fo(o, r), pe ? fe(e, v.precision, v.rounding) : e;
};
X.toBinary = function(e, n) {
  return Ii(this, 2, e, n);
};
X.toDecimalPlaces = X.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (vn(e, 0, Vr), n === void 0 ? n = a.rounding : vn(n, 0, 8), fe(r, e + r.e + 1, n));
};
X.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Rn(a, !0) : (vn(e, 0, Vr), n === void 0 ? n = t.rounding : vn(n, 0, 8), a = fe(new t(a), e + 1, n), r = Rn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Rn(t) : (vn(e, 0, Vr), n === void 0 ? n = o.rounding : vn(n, 0, 8), a = fe(new o(t), e + t.e + 1, n), r = Rn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
X.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, h = m.d, b = m.constructor;
  if (!h)
    return new b(m);
  if (u = r = new b(1), a = s = new b(0), n = new b(a), o = n.e = Au(h) - m.e - 1, l = o % ce, n.d[0] = qe(10, l < 0 ? ce + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new b(e), !i.isInt() || i.lt(u))
      throw Error(Tr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (pe = !1, i = new b(Qe(h)), d = b.precision, b.precision = o = h.length * ce * 2; v = Ee(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Ee(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Ee(u, a, o, 1).minus(m).abs().cmp(Ee(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], b.precision = d, pe = !0, f;
};
X.toHexadecimal = X.toHex = function(e, n) {
  return Ii(this, 16, e, n);
};
X.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : vn(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (pe = !1, r = Ee(r, e, 0, n, 1).times(e), pe = !0, fe(r)) : (e.s = r.s, r = e), r;
};
X.toNumber = function() {
  return +this;
};
X.toOctal = function(e, n) {
  return Ii(this, 8, e, n);
};
X.toPower = X.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(qe(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return fe(i, a, o);
  if (n = xe(e.e / ce), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= vp)
    return t = zu(s, i, r, a), e.s < 0 ? new s(1).div(t) : fe(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = qe(+i, u), n = r == 0 || !isFinite(r) ? xe(u * (Math.log("0." + Qe(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (pe = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = xo(e.times(sr(i, a + r)), a), t.d && (t = fe(t, a + 5, 1), ht(t.d, a, o) && (n = a + 10, t = fe(xo(e.times(sr(i, n + r)), n), n + 5, 1), +Qe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = fe(t, a + 1, 0)))), t.s = l, pe = !0, s.rounding = o, fe(t, a, o));
};
X.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Rn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (vn(e, 1, Vr), n === void 0 ? n = t.rounding : vn(n, 0, 8), a = fe(new t(a), e, n), r = Rn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toSignificantDigits = X.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (vn(e, 1, Vr), n === void 0 ? n = a.rounding : vn(n, 0, 8)), fe(new a(r), e, n);
};
X.toString = function() {
  var e = this, n = e.constructor, r = Rn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
X.truncated = X.trunc = function() {
  return fe(new this.constructor(this), this.e + 1, 1);
};
X.valueOf = X.toJSON = function() {
  var e = this, n = e.constructor, r = Rn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Qe(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = ce - a.length, r && (o += nr(r)), o += a;
    l = e[n], a = l + "", r = ce - a.length, r && (o += nr(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function vn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(Tr + e);
}
function ht(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += ce, t = 0) : (t = Math.ceil((n + 1) / ce), n %= ce), o = qe(10, ce - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == qe(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == qe(10, n - 3) - 1, l;
}
function Ut(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Jo.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function cp(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / co(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Xa(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var l = n.times(n);
    n = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Ee = function() {
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
    var u, d, v, f, m, h, b, g, w, V, S, T, E, O, I, y, M, D, C, $, z = a.constructor, K = a.s == t.s ? 1 : -1, J = a.d, Y = t.d;
    if (!J || !J[0] || !Y || !Y[0])
      return new z(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (J ? Y && J[0] == Y[0] : !Y) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          J && J[0] == 0 || !Y ? K * 0 : K / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = In, m = ce, d = xe(a.e / m) - xe(t.e / m)), C = Y.length, M = J.length, w = new z(K), V = w.d = [], v = 0; Y[v] == (J[v] || 0); v++)
      ;
    if (Y[v] > (J[v] || 0) && d--, o == null ? (O = o = z.precision, l = z.rounding) : i ? O = o + (a.e - t.e) + 1 : O = o, O < 0)
      V.push(1), h = !0;
    else {
      if (O = O / m + 2 | 0, v = 0, C == 1) {
        for (f = 0, Y = Y[0], O++; (v < M || f) && O--; v++)
          I = f * s + (J[v] || 0), V[v] = I / Y | 0, f = I % Y | 0;
        h = f || v < M;
      } else {
        for (f = s / (Y[0] + 1) | 0, f > 1 && (Y = e(Y, f, s), J = e(J, f, s), C = Y.length, M = J.length), y = C, S = J.slice(0, C), T = S.length; T < C; )
          S[T++] = 0;
        $ = Y.slice(), $.unshift(0), D = Y[0], Y[1] >= s / 2 && ++D;
        do
          f = 0, u = n(Y, S, C, T), u < 0 ? (E = S[0], C != T && (E = E * s + (S[1] || 0)), f = E / D | 0, f > 1 ? (f >= s && (f = s - 1), b = e(Y, f, s), g = b.length, T = S.length, u = n(b, S, g, T), u == 1 && (f--, r(b, C < g ? $ : Y, g, s))) : (f == 0 && (u = f = 1), b = Y.slice()), g = b.length, g < T && b.unshift(0), r(S, b, T, s), u == -1 && (T = S.length, u = n(Y, S, C, T), u < 1 && (f++, r(S, C < T ? $ : Y, T, s))), T = S.length) : u === 0 && (f++, S = [0]), V[v++] = f, u && S[0] ? S[T++] = J[y] || 0 : (S = [J[y]], T = 1);
        while ((y++ < M || S[0] !== void 0) && O--);
        h = S[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      w.e = d, Bu = h;
    else {
      for (v = 1, f = V[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, fe(w, i ? o + w.e + 1 : o, l, h);
    }
    return w;
  };
}();
function fe(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = n - t, o < 0)
        o += ce, l = n, d = v[f = 0], s = d / qe(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / ce), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= ce, l = o - ce + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= ce, l = o - ce + t, s = l < 0 ? 0 : d / qe(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % qe(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / qe(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = qe(10, (ce - n % ce) % ce), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = qe(10, ce - o), v[f] = l > 0 ? (d / qe(10, t - l) % qe(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == In && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != In)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return pe && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Rn(e, n, r) {
  if (!e.isFinite())
    return Ru(e);
  var a, t = e.e, o = Qe(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + nr(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + nr(-t - 1) + o, r && (a = r - l) > 0 && (o += nr(a))) : t >= l ? (o += nr(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + nr(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += nr(a))), o;
}
function fo(e, n) {
  var r = e[0];
  for (n *= ce; r >= 10; r /= 10)
    n++;
  return n;
}
function Jt(e, n, r) {
  if (n > fp)
    throw pe = !0, r && (e.precision = r), Error(Eu);
  return fe(new e(Kt), n, 1, !0);
}
function Bn(e, n, r) {
  if (n > _o)
    throw Error(Eu);
  return fe(new e(Zt), n, r, !0);
}
function Au(e) {
  var n = e.length - 1, r = n * ce + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function nr(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function zu(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / ce + 4);
  for (pe = !1; ; ) {
    if (r % 2 && (o = o.times(n), hl(o.d, l) && (t = !0)), r = xe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), hl(n.d, l);
  }
  return pe = !0, o;
}
function pl(e) {
  return e.d[e.d.length - 1] & 1;
}
function Lu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function xo(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (pe = !1, s = h) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(qe(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = fe(o.times(e), s, 1), r = r.times(++d), i = l.plus(Ee(o, r, s, 1)), Qe(i.d).slice(0, s) === Qe(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = fe(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && ht(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return fe(l, f.precision = h, m, pe = !0);
      else
        return f.precision = h, l;
    }
    l = i;
  }
}
function sr(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, h = 10, b = e, g = b.d, w = b.constructor, V = w.rounding, S = w.precision;
  if (b.s < 0 || !g || !g[0] || !b.e && g[0] == 1 && g.length == 1)
    return new w(g && !g[0] ? -1 / 0 : b.s != 1 ? NaN : g ? 0 : b);
  if (n == null ? (pe = !1, d = S) : d = n, w.precision = d += h, r = Qe(g), a = r.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      b = b.times(e), r = Qe(b.d), a = r.charAt(0), m++;
    o = b.e, a > 1 ? (b = new w("0." + r), o++) : b = new w(a + "." + r.slice(1));
  } else
    return u = Jt(w, d + 2, S).times(o + ""), b = sr(new w(a + "." + r.slice(1)), d - h).plus(u), w.precision = S, n == null ? fe(b, S, V, pe = !0) : b;
  for (v = b, s = l = b = Ee(b.minus(1), b.plus(1), d, 1), f = fe(b.times(b), d, 1), t = 3; ; ) {
    if (l = fe(l.times(f), d, 1), u = s.plus(Ee(l, new w(t), d, 1)), Qe(u.d).slice(0, d) === Qe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Jt(w, d + 2, S).times(o + ""))), s = Ee(s, new w(m), d, 1), n == null)
        if (ht(s.d, d - h, V, i))
          w.precision = d += h, u = l = b = Ee(v.minus(1), v.plus(1), d, 1), f = fe(b.times(b), d, 1), t = i = 1;
        else
          return fe(s, w.precision = S, V, pe = !0);
      else
        return w.precision = S, s;
    s = u, t += 2;
  }
}
function Ru(e) {
  return String(e.s * e.s / 0);
}
function ei(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % ce, r < 0 && (a += ce), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= ce; a < t; )
        e.d.push(+n.slice(a, a += ce));
      n = n.slice(a), a = ce - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), pe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function mp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Du.test(n))
      return ei(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (up.test(n))
    r = 16, n = n.toLowerCase();
  else if (sp.test(n))
    r = 2;
  else if (dp.test(n))
    r = 8;
  else
    throw Error(Tr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = zu(a, new a(r), o, o * 2)), u = Ut(n, r, In), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = fo(u, d), e.d = u, pe = !1, l && (e = Ee(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? qe(2, s) : ur.pow(2, s))), pe = !0, e);
}
function pp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Xa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / co(5, r)), n = Xa(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Xa(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / ce);
  for (pe = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Ee(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Ee(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return pe = !0, l.d.length = d + 1, l;
}
function co(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Uu(e, n) {
  var r, a = n.s < 0, t = Bn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Hn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Hn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Hn = pl(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Hn = pl(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ii(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, h = r !== void 0;
  if (h ? (vn(r, 1, Vr), a === void 0 ? a = m.rounding : vn(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Ru(e);
  else {
    for (d = Rn(e), l = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Ut(Rn(f), 10, t), f.e = f.d.length), v = Ut(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Ee(e, f, r, a, 0, t), v = e.d, o = e.e, u = Bu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Jo.charAt(v[l]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ut(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Jo.charAt(v[l]);
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
function hl(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function hp(e) {
  return new this(e).abs();
}
function gp(e) {
  return new this(e).acos();
}
function yp(e) {
  return new this(e).acosh();
}
function bp(e, n) {
  return new this(e).plus(n);
}
function wp(e) {
  return new this(e).asin();
}
function Cp(e) {
  return new this(e).asinh();
}
function Sp(e) {
  return new this(e).atan();
}
function kp(e) {
  return new this(e).atanh();
}
function $p(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Bn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Bn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Bn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Ee(e, n, o, 1)), n = Bn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Ee(e, n, o, 1)), r;
}
function Tp(e) {
  return new this(e).cbrt();
}
function Op(e) {
  return fe(e = new this(e), e.e + 1, 2);
}
function Pp(e, n, r) {
  return new this(e).clamp(n, r);
}
function Vp(e) {
  if (!e || typeof e != "object")
    throw Error(vo + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Vr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ha,
    0,
    "toExpPos",
    0,
    Ha,
    "maxE",
    0,
    Ha,
    "minE",
    -Ha,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = Qo[r]), (a = e[r]) !== void 0)
      if (xe(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(Tr + r + ": " + a);
  if (r = "crypto", t && (this[r] = Qo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Iu);
      else
        this[r] = !1;
    else
      throw Error(Tr + r + ": " + a);
  return this;
}
function Mp(e) {
  return new this(e).cos();
}
function Bp(e) {
  return new this(e).cosh();
}
function Hu(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, gl(o)) {
      u.s = o.s, pe ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        pe ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return ei(u, o.toString());
    } else if (s !== "string")
      throw Error(Tr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Du.test(o) ? ei(u, o) : mp(u, o);
  }
  if (t.prototype = X, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Vp, t.clone = Hu, t.isDecimal = gl, t.abs = hp, t.acos = gp, t.acosh = yp, t.add = bp, t.asin = wp, t.asinh = Cp, t.atan = Sp, t.atanh = kp, t.atan2 = $p, t.cbrt = Tp, t.ceil = Op, t.clamp = Pp, t.cos = Mp, t.cosh = Bp, t.div = Ep, t.exp = Ip, t.floor = Np, t.hypot = Dp, t.ln = Ap, t.log = zp, t.log10 = Rp, t.log2 = Lp, t.max = Up, t.min = Hp, t.mod = Fp, t.mul = Yp, t.pow = jp, t.random = Wp, t.round = Gp, t.sign = qp, t.sin = Xp, t.sinh = Kp, t.sqrt = Zp, t.sub = Jp, t.sum = Qp, t.tan = _p, t.tanh = xp, t.trunc = eh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Ep(e, n) {
  return new this(e).div(n);
}
function Ip(e) {
  return new this(e).exp();
}
function Np(e) {
  return fe(e = new this(e), e.e + 1, 3);
}
function Dp() {
  var e, n, r = new this(0);
  for (pe = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return pe = !0, new this(1 / 0);
      r = n;
    }
  return pe = !0, r.sqrt();
}
function gl(e) {
  return e instanceof ur || e && e.toStringTag === Nu || !1;
}
function Ap(e) {
  return new this(e).ln();
}
function zp(e, n) {
  return new this(e).log(n);
}
function Lp(e) {
  return new this(e).log(2);
}
function Rp(e) {
  return new this(e).log(10);
}
function Up() {
  return Lu(this, arguments, "lt");
}
function Hp() {
  return Lu(this, arguments, "gt");
}
function Fp(e, n) {
  return new this(e).mod(n);
}
function Yp(e, n) {
  return new this(e).mul(n);
}
function jp(e, n) {
  return new this(e).pow(n);
}
function Wp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : vn(e, 1, Vr), a = Math.ceil(e / ce), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Iu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= ce, a && e && (t = qe(10, ce - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= ce)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < ce && (r -= ce - a);
  }
  return l.e = r, l.d = i, l;
}
function Gp(e) {
  return fe(e = new this(e), e.e + 1, this.rounding);
}
function qp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Xp(e) {
  return new this(e).sin();
}
function Kp(e) {
  return new this(e).sinh();
}
function Zp(e) {
  return new this(e).sqrt();
}
function Jp(e, n) {
  return new this(e).sub(n);
}
function Qp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (pe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return pe = !0, fe(r, this.precision, this.rounding);
}
function _p(e) {
  return new this(e).tan();
}
function xp(e) {
  return new this(e).tanh();
}
function eh(e) {
  return fe(e = new this(e), e.e + 1, 1);
}
X[Symbol.for("nodejs.util.inspect.custom")] = X.toString;
X[Symbol.toStringTag] = "Decimal";
var ur = X.constructor = Hu(Qo);
Kt = new ur(Kt);
Zt = new ur(Zt);
var nh = {
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
  elevation: {
    type: [Boolean, Number, String],
    default: !0
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
  n: rh,
  classes: ah
} = _("counter"), yl = 100, bl = 600, th = ["inputmode", "readonly", "disabled"];
function oh(e, n) {
  var r = ae("var-icon"), a = ae("var-button"), t = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      Ne({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Z(
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
          default: ve(() => [Z(r, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), ke(A(
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
        th
      ), [[zv, e.inputValue]]), Z(
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
          default: ve(() => [Z(r, {
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
    ), Z(
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
var Fu = Q({
  name: "VarCounter",
  components: {
    VarButton: _e,
    VarIcon: Oe,
    VarFormDetails: Je
  },
  directives: {
    Ripple: We
  },
  inheritAttrs: !1,
  props: nh,
  setup(e) {
    var n = B(""), {
      bindForm: r,
      form: a
    } = On(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: l,
      // expose
      resetValidation: i
    } = Tn(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, h = () => l(e.rules, e.modelValue), b = (Y) => {
      ze(() => {
        var {
          validateTrigger: j,
          rules: se,
          modelValue: q
        } = e;
        o(j, Y, se, q);
      });
    }, g = () => {
      var {
        min: Y
      } = e;
      k(e["onUpdate:modelValue"], Y != null ? L(Y) : 0), i();
    }, w = {
      reset: g,
      validate: h,
      resetValidation: i
    }, V = R(() => {
      var {
        max: Y,
        modelValue: j
      } = e;
      return Y != null && L(j) >= L(Y);
    }), S = R(() => {
      var {
        min: Y,
        modelValue: j
      } = e;
      return Y != null && L(j) <= L(Y);
    }), T = (Y) => {
      var {
        decimalLength: j,
        max: se,
        min: q
      } = e, H = L(Y);
      return se != null && H > L(se) && (H = L(se)), q != null && H < L(q) && (H = L(q)), Y = String(H), j != null && (Y = H.toFixed(L(j))), Y;
    }, E = (Y) => {
      var {
        lazyChange: j,
        onBeforeChange: se
      } = e, {
        value: q
      } = Y.target, H = T(q);
      j ? k(se, L(H), J) : K(H), b("onInputChange");
    }, O = () => {
      var {
        disabled: Y,
        readonly: j,
        disableDecrement: se,
        decrementButton: q,
        lazyChange: H,
        step: N,
        modelValue: W,
        onDecrement: ne,
        onBeforeChange: le
      } = e;
      if (!(u != null && u.value || s != null && s.value || Y || j || se || !q) && !S.value) {
        var de = new ur(L(W)).minus(new ur(L(N))).toString(), be = T(de), Pe = L(be);
        k(ne, Pe), H ? k(le, Pe, J) : (K(be), b("onDecrement"));
      }
    }, I = () => {
      var {
        disabled: Y,
        readonly: j,
        disableIncrement: se,
        incrementButton: q,
        lazyChange: H,
        step: N,
        modelValue: W,
        onIncrement: ne,
        onBeforeChange: le
      } = e;
      if (!(u != null && u.value || s != null && s.value || Y || j || se || !q) && !V.value) {
        var de = new ur(L(W)).plus(new ur(L(N))).toString(), be = T(de), Pe = L(be);
        k(ne, Pe), H ? k(le, Pe, J) : (K(be), b("onIncrement"));
      }
    }, y = () => {
      var {
        press: Y,
        lazyChange: j
      } = e;
      !Y || j || (m = window.setTimeout(() => {
        z();
      }, bl));
    }, M = () => {
      var {
        press: Y,
        lazyChange: j
      } = e;
      !Y || j || (f = window.setTimeout(() => {
        $();
      }, bl));
    }, D = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, C = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, $ = () => {
      d = window.setTimeout(() => {
        I(), $();
      }, yl);
    }, z = () => {
      v = window.setTimeout(() => {
        O(), z();
      }, yl);
    }, K = (Y) => {
      n.value = Y;
      var j = L(Y);
      k(e["onUpdate:modelValue"], j);
    }, J = (Y) => {
      K(T(String(Y))), b("onLazyChange");
    };
    return k(r, w), oe(() => e.modelValue, (Y) => {
      K(T(String(Y))), k(e.onChange, L(Y));
    }), K(T(String(e.modelValue))), {
      n: rh,
      classes: ah,
      formatElevation: mn,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: S,
      validate: h,
      reset: g,
      resetValidation: i,
      handleChange: E,
      decrement: O,
      increment: I,
      pressDecrement: y,
      pressIncrement: M,
      releaseDecrement: D,
      releaseIncrement: C,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
Fu.render = oh;
const Xr = Fu;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var FS = Xr, Yu = 60, ju = Yu * 60, Wu = ju * 24, ih = Wu * 7, Ka = 1e3, ko = Yu * Ka, wl = ju * Ka, lh = Wu * Ka, sh = ih * Ka, Ni = "millisecond", Fa = "second", Ya = "minute", ja = "hour", rr = "day", Ht = "week", Mn = "month", Gu = "quarter", ar = "year", Wa = "date", uh = "YYYY-MM-DDTHH:mm:ssZ", Cl = "Invalid Date", dh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, vh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const fh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ni = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, ch = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + ni(t, 2, "0") + ":" + ni(o, 2, "0");
}, mh = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Mn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Mn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, ph = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, hh = function(n) {
  var r = {
    M: Mn,
    y: ar,
    w: Ht,
    d: rr,
    D: Wa,
    h: ja,
    m: Ya,
    s: Fa,
    ms: Ni,
    Q: Gu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, gh = function(n) {
  return n === void 0;
};
const yh = {
  s: ni,
  z: ch,
  m: mh,
  a: ph,
  p: hh,
  u: gh
};
var lt = "en", Kr = {};
Kr[lt] = fh;
var Di = function(n) {
  return n instanceof mo;
}, Qt = function e(n, r, a) {
  var t;
  if (!n)
    return lt;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Kr[o] && (t = o), r && (Kr[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Kr[i] = n, t = i;
  }
  return !a && t && (lt = t), t || !a && lt;
}, te = function(n, r) {
  if (Di(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new mo(a);
}, bh = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Be = yh;
Be.l = Qt;
Be.i = Di;
Be.w = bh;
var wh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Be.u(r))
    return /* @__PURE__ */ new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(dh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, mo = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Qt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = wh(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Be;
  }, n.isValid = function() {
    return this.$d.toString() !== Cl;
  }, n.isSame = function(a, t) {
    var o = te(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return te(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < te(a);
  }, n.$g = function(a, t, o) {
    return Be.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Be.u(t) ? !0 : t, i = Be.p(a), s = function(w, V) {
      var S = Be.w(o.$u ? Date.UTC(o.$y, V, w) : new Date(o.$y, V, w), o);
      return l ? S : S.endOf(rr);
    }, u = function(w, V) {
      var S = [0, 0, 0, 0], T = [23, 59, 59, 999];
      return Be.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? S : T).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case ar:
        return l ? s(1, 0) : s(31, 11);
      case Mn:
        return l ? s(1, v) : s(0, v + 1);
      case Ht: {
        var h = this.$locale().weekStart || 0, b = (d < h ? d + 7 : d) - h;
        return s(l ? f - b : f + (6 - b), v);
      }
      case rr:
      case Wa:
        return u(m + "Hours", 0);
      case ja:
        return u(m + "Minutes", 1);
      case Ya:
        return u(m + "Seconds", 2);
      case Fa:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Be.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[rr] = i + "Date", o[Wa] = i + "Date", o[Mn] = i + "Month", o[ar] = i + "FullYear", o[ja] = i + "Hours", o[Ya] = i + "Minutes", o[Fa] = i + "Seconds", o[Ni] = i + "Milliseconds", o)[l], u = l === rr ? this.$D + (t - this.$W) : t;
    if (l === Mn || l === ar) {
      var d = this.clone().set(Wa, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Wa, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Be.p(a)]();
  }, n.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Be.p(t), s = function(f) {
      var m = te(o);
      return Be.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Mn)
      return this.set(Mn, this.$M + a);
    if (i === ar)
      return this.set(ar, this.$y + a);
    if (i === rr)
      return s(1);
    if (i === Ht)
      return s(7);
    var u = (l = {}, l[Ya] = ko, l[ja] = wl, l[Fa] = Ka, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Be.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Cl;
    var l = a || uh, i = Be.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, h = function(S, T, E, O) {
      return S && (S[T] || S(t, l)) || E[T].slice(0, O);
    }, b = function(S) {
      return Be.s(s % 12 || 12, S, "0");
    }, g = m || function(V, S, T) {
      var E = V < 12 ? "AM" : "PM";
      return T ? E.toLowerCase() : E;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Be.s(d + 1, 2, "0"),
      MMM: h(o.monthsShort, d, f, 3),
      MMMM: h(f, d),
      D: this.$D,
      DD: Be.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: h(o.weekdaysMin, this.$W, v, 2),
      ddd: h(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Be.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Be.s(u, 2, "0"),
      s: String(this.$s),
      ss: Be.s(this.$s, 2, "0"),
      SSS: Be.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(vh, function(V, S) {
      return S || w[V] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Be.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * ko, d = this - s, v = Be.m(this, s);
    return v = (l = {}, l[ar] = v / 12, l[Mn] = v, l[Gu] = v / 3, l[Ht] = (d - u) / sh, l[rr] = (d - u) / lh, l[ja] = d / wl, l[Ya] = d / ko, l[Fa] = d / Ka, l)[i] || d, o ? v : Be.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Mn).$D;
  }, n.$locale = function() {
    return Kr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Qt(a, t, !0);
    return l && (o.$L = l), o;
  }, n.clone = function() {
    return Be.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), qu = mo.prototype;
te.prototype = qu;
[["$ms", Ni], ["$s", Fa], ["$m", Ya], ["$H", ja], ["$W", rr], ["$M", Mn], ["$y", ar], ["$D", Wa]].forEach(function(e) {
  qu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, mo, te), e.$i = !0), te;
};
te.locale = Qt;
te.isDayjs = Di;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Kr[lt];
te.Ls = Kr;
te.p = {};
const Xu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Ku = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Ch(e) {
  return ["date", "month"].includes(e);
}
var Ft = [{
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
}], ot = [{
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
}], Sh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Ch
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
  n: kh
} = _("picker-header");
function $h(e, n) {
  var r = ae("var-icon"), a = ae("var-button");
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [Z(
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
        default: ve(() => [Z(r, {
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
      [Z(
        Ue,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), P(
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
    ), Z(
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
        default: ve(() => [Z(r, {
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
var Zu = Q({
  name: "PanelHeader",
  components: {
    VarButton: _e,
    VarIcon: Oe
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
    } = n, a = B(!1), t = B(0), o = R(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (i = Xe.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return Xe.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return oe(() => e.date, () => {
      t.value = 0;
    }), {
      n: kh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Zu.render = $h;
const Ju = Zu;
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ri.apply(this, arguments);
}
te.extend(Xu);
te.extend(Ku);
var {
  n: Nt,
  classes: Th
} = _("month-picker"), {
  n: Dt
} = _("date-picker");
function Oh(e, n) {
  var r = ae("panel-header"), a = ae("var-button");
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [Z(
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
      ), Z(
        Ue,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), P("ul", {
            key: e.panelKey
          }, [(p(!0), P(
            Ve,
            null,
            Fe(e.MONTH_LIST, (t) => (p(), P("li", {
              key: t.index
            }, [Z(
              a,
              Ne({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, ri({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [Ce(
                  re(e.getMonthAbbr(t.index)),
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
var Qu = Q({
  name: "MonthPickerPanel",
  components: {
    VarButton: _e,
    PanelHeader: Ju
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
    } = n, [a, t] = e.current.split("-"), o = B(!1), l = B(0), i = B(null), s = Le({
      left: !1,
      right: !1
    }), u = R(() => e.choose.chooseYear === e.preview.previewYear), d = R(() => e.preview.previewYear === a), v = (V) => {
      var S, T;
      return (S = (T = Xe.value.datePickerMonthDict) == null ? void 0 : T[V].abbr) != null ? S : "";
    }, f = (V) => {
      var {
        preview: {
          previewYear: S
        },
        componentProps: {
          min: T,
          max: E
        }
      } = e, O = !0, I = !0, y = S + "-" + V;
      return E && (O = te(y).isSameOrBefore(te(E), "month")), T && (I = te(y).isSameOrAfter(te(T), "month")), O && I;
    }, m = (V) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: T,
          chooseRangeMonth: E
        },
        componentProps: {
          type: O,
          range: I
        }
      } = e;
      if (I) {
        if (!E.length)
          return !1;
        var y = te(V).isSameOrBefore(te(E[1]), "month"), M = te(V).isSameOrAfter(te(E[0]), "month");
        return y && M;
      }
      return O === "month" ? S.includes(V) : T.some((D) => D.includes(V));
    }, h = (V) => {
      var {
        choose: {
          chooseMonth: S
        },
        preview: {
          previewYear: T
        },
        componentProps: {
          allowedDates: E,
          color: O,
          multiple: I,
          range: y
        }
      } = e, M = T + "-" + V, D = () => y || I ? m(M) : (S == null ? void 0 : S.index) === V && u.value, C = () => f(V) ? E ? !E(M) : !1 : !0, $ = C(), z = () => $ ? !0 : y || I ? !m(M) : !u.value || (S == null ? void 0 : S.index) !== V, K = () => d.value && t === V && e.componentProps.showCurrent ? (y || I || u.value) && $ ? !0 : y || I ? !m(M) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, J = () => $ ? "" : K() ? O ?? "" : D() ? "" : Dt() + "-color-cover", Y = J().startsWith(Dt());
      return {
        outline: K(),
        text: z(),
        color: z() ? "" : O,
        textColor: Y ? "" : J(),
        [Dt() + "-color-cover"]: Y,
        class: Th(Nt("button"), [$, Nt("button--disabled")]),
        disabled: $
      };
    }, b = (V, S) => {
      var T = S.currentTarget;
      T.classList.contains(Nt("button--disabled")) || r("choose-month", V);
    }, g = (V) => {
      o.value = V === "prev", l.value += V === "prev" ? -1 : 1, r("check-preview", "year", V);
    }, w = (V) => {
      i.value.checkDate(V);
    };
    return oe(() => e.preview.previewYear, (V) => {
      var {
        componentProps: {
          min: S,
          max: T
        }
      } = e;
      T && (s.right = !te("" + (L(V) + 1)).isSameOrBefore(te(T), "year")), S && (s.left = !te("" + (L(V) - 1)).isSameOrAfter(te(S), "year"));
    }, {
      immediate: !0
    }), {
      n: Nt,
      nDate: Dt,
      pack: Xe,
      MONTH_LIST: Ft,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: w,
      buttonProps: h,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: g
    };
  }
});
Qu.render = Oh;
const Ph = Qu;
var {
  n: Sl,
  classes: Vh
} = _("year-picker"), Mh = ["onClick"];
function Bh(e, n) {
  return p(), P(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), P(
      Ve,
      null,
      Fe(e.yearList, (r) => (p(), P(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: G({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        re(r),
        15,
        Mh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var _u = Q({
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
      for (var h = u[0]; h >= u[1]; h--)
        o.push(h);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return tn(() => {
      var o = document.querySelector("." + Sl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Sl,
      classes: Vh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
_u.render = Bh;
const Eh = _u;
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
te.extend(Xu);
te.extend(Ku);
var {
  n: Ua,
  classes: Ih
} = _("day-picker"), {
  n: At
} = _("date-picker");
function Nh(e, n) {
  var r = ae("panel-header"), a = ae("var-button");
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [Z(
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
      ), Z(
        Ue,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), P("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(p(!0), P(
              Ve,
              null,
              Fe(e.sortWeekList, (t) => (p(), P(
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
            [(p(!0), P(
              Ve,
              null,
              Fe(e.days, (t, o) => (p(), P("li", {
                key: o
              }, [Z(
                a,
                Ne({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, ai({}, e.buttonProps(t)), {
                  onClick: (l) => e.chooseDay(t, l)
                }),
                {
                  default: ve(() => [Ce(
                    re(e.filterDay(t)),
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
var xu = Q({
  name: "DayPickerPanel",
  components: {
    VarButton: _e,
    PanelHeader: Ju
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
    } = n, [a, t, o] = e.current.split("-"), l = B([]), i = B(!1), s = B(0), u = B(null), d = Le({
      left: !1,
      right: !1
    }), v = R(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = R(() => {
      var y;
      return e.choose.chooseYear === e.preview.previewYear && ((y = e.choose.chooseMonth) == null ? void 0 : y.index) === e.preview.previewMonth.index;
    }), m = R(() => {
      var y = ot.findIndex((M) => M.index === e.componentProps.firstDayOfWeek);
      return y === -1 || y === 0 ? ot : ot.slice(y).concat(ot.slice(0, y));
    }), h = (y) => {
      var M, D;
      return (M = (D = Xe.value.datePickerWeekDict) == null ? void 0 : D[y].abbr) != null ? M : "";
    }, b = (y) => y > 0 ? y : "", g = () => {
      var {
        preview: {
          previewMonth: y,
          previewYear: M
        }
      } = e, D = te(M + "-" + y.index).daysInMonth(), C = te(M + "-" + y.index + "-01").day(), $ = m.value.findIndex((z) => z.index === "" + C);
      l.value = [...Array($).fill(-1), ...Array.from(Array(D + 1).keys())].filter((z) => z);
    }, w = () => {
      var {
        preview: {
          previewYear: y,
          previewMonth: M
        },
        componentProps: {
          max: D,
          min: C
        }
      } = e;
      if (D) {
        var $ = y + "-" + (L(M.index) + 1);
        d.right = !te($).isSameOrBefore(te(D), "month");
      }
      if (C) {
        var z = y + "-" + (L(M.index) - 1);
        d.left = !te(z).isSameOrAfter(te(C), "month");
      }
    }, V = (y) => {
      var {
        preview: {
          previewYear: M,
          previewMonth: D
        },
        componentProps: {
          min: C,
          max: $
        }
      } = e, z = !0, K = !0, J = M + "-" + D.index + "-" + y;
      return $ && (z = te(J).isSameOrBefore(te($), "day")), C && (K = te(J).isSameOrAfter(te(C), "day")), z && K;
    }, S = (y) => {
      var {
        choose: {
          chooseDays: M,
          chooseRangeDay: D
        },
        componentProps: {
          range: C
        }
      } = e;
      if (C) {
        if (!D.length)
          return !1;
        var $ = te(y).isSameOrBefore(te(D[1]), "day"), z = te(y).isSameOrAfter(te(D[0]), "day");
        return $ && z;
      }
      return M.includes(y);
    }, T = (y) => {
      if (y < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ua("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: M
        },
        preview: {
          previewYear: D,
          previewMonth: C
        },
        componentProps: {
          allowedDates: $,
          color: z,
          multiple: K,
          range: J
        }
      } = e, Y = D + "-" + C.index + "-" + y, j = () => J || K ? S(Y) : L(M) === y && f.value, se = () => V(y) ? $ ? !$(Y) : !1 : !0, q = se(), H = () => q ? !0 : J || K ? !S(Y) : !f.value || L(M) !== y, N = () => v.value && L(o) === y && e.componentProps.showCurrent ? (J || K || f.value) && q ? !0 : J || K ? !S(Y) : f.value ? M !== o : !0 : !1, W = () => q ? "" : N() ? z ?? "" : j() ? "" : At() + "-color-cover", ne = W().startsWith(At());
      return {
        text: H(),
        outline: N(),
        textColor: ne ? "" : W(),
        [At() + "-color-cover"]: ne,
        class: Ih(Ua("button"), Ua("button--usable"), [q, Ua("button--disabled")]),
        disabled: q
      };
    }, E = (y) => {
      i.value = y === "prev", s.value += y === "prev" ? -1 : 1, r("check-preview", "month", y);
    }, O = (y, M) => {
      var D = M.currentTarget;
      D.classList.contains(Ua("button--disabled")) || r("choose-day", y);
    }, I = (y) => {
      u.value.checkDate(y);
    };
    return tn(() => {
      g(), w();
    }), oe(() => e.preview, () => {
      g(), w();
    }), {
      n: Ua,
      nDate: At,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: I,
      filterDay: b,
      getDayAbbr: h,
      checkDate: E,
      chooseDay: O,
      buttonProps: T
    };
  }
});
xu.render = Nh;
const Dh = xu;
var {
  n: Ah,
  classes: zh
} = _("date-picker");
function Lh(e, n) {
  var r = ae("year-picker-panel"), a = ae("month-picker-panel"), t = ae("day-picker-panel");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [A(
      "div",
      {
        class: c(e.n("title")),
        style: G({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [F(e.$slots, "year", {
          year: e.chooseYear
        }, () => [Ce(
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
        [Z(
          Ue,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (p(), P("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? F(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [Ce(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? F(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [Ce(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )]) : F(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [Ce(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (p(), P("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? F(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [Ce(
                re(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? F(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [Ce(
                re(e.getDateTitle),
                1
                /* TEXT */
              )]) : F(e.$slots, "date", $t(Ne({
                key: 2
              }, e.slotProps)), () => [Ce(
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
      [Z(
        Ue,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (p(), ge(
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
          )) : e.getPanelType === "month" ? (p(), ge(
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
          )) : e.getPanelType === "date" ? (p(), ge(
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
var ed = Q({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Ph,
    YearPickerPanel: Eh,
    DayPickerPanel: Dh
  },
  props: Sh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Ft.find((ie) => ie.index === i), u = B(!1), d = B(!1), v = B(!0), f = B(), m = B(), h = B(), b = B(s), g = B(l), w = B(!1), V = B([]), S = B([]), T = B([]), E = B([]), O = B(null), I = B(null), y = Le({
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
    }), M = R(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: h.value,
      chooseMonths: V.value,
      chooseDays: S.value,
      chooseRangeMonth: T.value,
      chooseRangeDay: E.value
    })), D = R(() => ({
      previewMonth: b.value,
      previewYear: g.value
    })), C = R(() => {
      var {
        multiple: ie,
        range: we
      } = e;
      if (we)
        return T.value.length ? T.value[0] + " ~ " + T.value[1] : "";
      var me = "";
      if (f.value) {
        var Se, $e;
        me = (Se = ($e = Xe.value.datePickerMonthDict) == null ? void 0 : $e[f.value.index].name) != null ? Se : "";
      }
      return ie ? "" + V.value.length + Xe.value.datePickerSelected : me;
    }), $ = R(() => {
      var ie, we, me, Se, {
        multiple: $e,
        range: He
      } = e;
      if (He) {
        var en = E.value.map((wo) => te(wo).format("YYYY-MM-DD"));
        return en.length ? en[0] + " ~ " + en[1] : "";
      }
      if ($e)
        return "" + S.value.length + Xe.value.datePickerSelected;
      if (!m.value || !f.value || !h.value)
        return "";
      var gn = te(m.value + "-" + f.value.index + "-" + h.value).day(), Ra = ot.find((wo) => wo.index === "" + gn), qi = (ie = (we = Xe.value.datePickerWeekDict) == null ? void 0 : we[Ra.index].name) != null ? ie : "", Vv = (me = (Se = Xe.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? me : "", Mv = Ea(h.value, 2, "0");
      return Xe.value.lang === "zh-CN" ? f.value.index + "-" + Mv + " " + qi.slice(0, 3) : qi.slice(0, 3) + ", " + Vv.slice(0, 3) + " " + h.value;
    }), z = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), K = R(() => !e.touchable || ["", "year"].includes(z.value)), J = R(() => {
      var ie, we, me, Se, $e = te(m.value + "-" + ((ie = f.value) == null ? void 0 : ie.index) + "-" + h.value).day(), He = h.value ? Ea(h.value, 2, "0") : "";
      return {
        week: "" + $e,
        year: (we = m.value) != null ? we : "",
        month: (me = (Se = f.value) == null ? void 0 : Se.index) != null ? me : "",
        date: He
      };
    }), Y = R(() => M.value.chooseRangeDay.map((ie) => te(ie).format("YYYY-MM-DD"))), j = R(() => m.value === g.value), se = R(() => {
      var ie;
      return ((ie = f.value) == null ? void 0 : ie.index) === b.value.index;
    }), q = (ie) => {
      ie === "year" ? u.value = !0 : ie === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, H = (ie) => {
      if (!K.value) {
        var {
          clientX: we,
          clientY: me
        } = ie.touches[0];
        n = we, r = me;
      }
    }, N = (ie, we) => ie >= we && ie > 20 ? "x" : "y", W = (ie) => {
      if (!K.value) {
        var {
          clientX: we,
          clientY: me
        } = ie.touches[0], Se = we - n, $e = me - r;
        t = N(Math.abs(Se), Math.abs($e)), a = Se > 0 ? "prev" : "next";
      }
    }, ne = () => {
      if (!(K.value || t !== "x")) {
        var ie = z.value === "month" ? O : I;
        to(() => {
          ie.value.forwardRef(a), rt();
        });
      }
    }, le = (ie, we) => {
      var me = we === "month" ? T : E;
      if (me.value = v.value ? [ie, ie] : [me.value[0], ie], v.value = !v.value, v.value) {
        var Se = te(me.value[0]).isAfter(me.value[1]), $e = Se ? [me.value[1], me.value[0]] : [...me.value];
        k(e["onUpdate:modelValue"], $e), k(e.onChange, $e);
      }
    }, de = (ie, we) => {
      var me = we === "month" ? V : S, Se = we === "month" ? "YYYY-MM" : "YYYY-MM-DD", $e = me.value.map((en) => te(en).format(Se)), He = $e.findIndex((en) => en === ie);
      He === -1 ? $e.push(ie) : $e.splice(He, 1), k(e["onUpdate:modelValue"], $e), k(e.onChange, $e);
    }, be = (ie, we) => !m.value || !f.value ? !1 : j.value ? ie === "month" ? we.index < f.value.index : se.value ? we < L(h.value) : f.value.index > b.value.index : m.value > g.value, Pe = (ie) => {
      var {
        readonly: we,
        range: me,
        multiple: Se,
        onChange: $e,
        "onUpdate:modelValue": He
      } = e;
      if (!(ie < 0 || we)) {
        w.value = be("day", ie);
        var en = g.value + "-" + b.value.index + "-" + ie, gn = te(en).format("YYYY-MM-DD");
        me ? le(gn, "day") : Se ? de(gn, "day") : (k(He, gn), k($e, gn));
      }
    }, on = (ie) => {
      var {
        type: we,
        readonly: me,
        range: Se,
        multiple: $e,
        onChange: He,
        onPreview: en,
        "onUpdate:modelValue": gn
      } = e;
      if (w.value = be("month", ie), we === "month" && !me) {
        var Ra = g.value + "-" + ie.index;
        Se ? le(Ra, "month") : $e ? de(Ra, "month") : (k(gn, Ra), k(He, Ra));
      } else
        b.value = ie, k(en, L(g.value), L(b.value.index));
      d.value = !1;
    }, ee = (ie) => {
      g.value = "" + ie, u.value = !1, d.value = !0, k(e.onPreview, L(g.value), L(b.value.index));
    }, ue = (ie, we) => {
      var me = we === "prev" ? -1 : 1;
      if (ie === "year")
        g.value = "" + (L(g.value) + me);
      else {
        var Se = L(b.value.index) + me;
        Se < 1 && (g.value = "" + (L(g.value) - 1), Se = 12), Se > 12 && (g.value = "" + (L(g.value) + 1), Se = 1), b.value = Ft.find(($e) => L($e.index) === Se);
      }
      k(e.onPreview, L(g.value), L(b.value.index));
    }, ye = () => (e.multiple || e.range) && !Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Ae = (ie) => Te(ie) ? !1 : ie === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Me = (ie, we) => {
      var me = we === "month" ? T : E, Se = we === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = ie.map((gn) => te(gn).format(Se)).slice(0, 2), He = me.value.some((gn) => Ae(gn));
      if (!He) {
        me.value = $e;
        var en = te(me.value[0]).isAfter(me.value[1]);
        me.value.length === 2 && en && (me.value = [me.value[1], me.value[0]]);
      }
    }, Ie = (ie, we) => {
      var me = we === "month" ? V : S, Se = we === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = Array.from(new Set(ie.map((He) => te(He).format(Se))));
      me.value = $e.filter((He) => He !== "Invalid Date");
    }, Br = (ie) => {
      var we = te(ie).format("YYYY-MM-D");
      if (!Ae(we)) {
        var [me, Se, $e] = we.split("-"), He = Ft.find((en) => en.index === Se);
        f.value = He, m.value = me, h.value = $e, b.value = He, g.value = me;
      }
    }, rt = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return oe(() => e.modelValue, (ie) => {
      if (!(!ye() || Ae(ie) || !ie))
        if (e.range) {
          if (!Te(ie))
            return;
          v.value = ie.length !== 1, Me(ie, e.type);
        } else if (e.multiple) {
          if (!Te(ie))
            return;
          Ie(ie, e.type);
        } else
          Br(ie);
    }, {
      immediate: !0
    }), oe(z, rt), {
      n: Ah,
      classes: zh,
      monthPanelEl: O,
      dayPanelEl: I,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: h,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: $,
      getPanelType: z,
      getChoose: M,
      getPreview: D,
      componentProps: y,
      slotProps: J,
      formatRange: Y,
      clickEl: q,
      handleTouchstart: H,
      handleTouchmove: W,
      handleTouchend: ne,
      getChooseDay: Pe,
      getChooseMonth: on,
      getChooseYear: ee,
      checkPreview: ue,
      formatElevation: mn
    };
  }
});
ed.render = Lh;
const Zr = ed;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var YS = Zr;
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
function Rh(e) {
  return ["left", "center", "right"].includes(e);
}
var Uh = ti({
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
    validator: Rh
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
}, Ke(Pt, [
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
function oi() {
  return oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, oi.apply(this, arguments);
}
var {
  n: Hh,
  classes: Fh
} = _("dialog");
function Yh(e, n) {
  var r = ae("var-button"), a = ae("var-popup");
  return p(), ge(
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
        Ne({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: oi({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
          "div",
          {
            class: c(e.n("title"))
          },
          [F(e.$slots, "title", {}, () => [Ce(
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
            style: G({
              textAlign: e.messageAlign
            })
          },
          [F(e.$slots, "default", {}, () => [Ce(
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
          [e.cancelButton ? (p(), ge(
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
              default: ve(() => [Ce(
                re(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0), e.confirmButton ? (p(), ge(
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
              default: ve(() => [Ce(
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
var nd = Q({
  name: "VarDialog",
  components: {
    VarPopup: wn,
    VarButton: _e
  },
  inheritAttrs: !1,
  props: Uh,
  setup(e) {
    var n = B(!1), r = B(!1), a = () => k(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (k(s), !!i) {
        if (u != null) {
          k(u, "close", a);
          return;
        }
        k(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if (k(s), i != null) {
        k(i, "confirm", a);
        return;
      }
      k(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if (k(s), i != null) {
        k(i, "cancel", a);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return oe(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), oe(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: Hh,
      classes: Fh,
      pack: Xe,
      dt: ao,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: he
    };
  }
});
nd.render = Yh;
const hr = nd;
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _t.apply(this, arguments);
}
var or, xt = {};
function jh(e) {
  return e === void 0 && (e = {}), je(e) ? _t({}, xt, {
    message: e
  }) : _t({}, xt, e);
}
function Jn(e) {
  return Ot() ? new Promise((n) => {
    Jn.close();
    var r = jh(e), a = Le(r);
    a.teleport = "body", or = a;
    var {
      unmountInstance: t
    } = nt(hr, a, {
      onConfirm: () => {
        k(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        k(a.onCancel), n("cancel");
      },
      onClose: () => {
        k(a.onClose), n("close");
      },
      onClosed: () => {
        k(a.onClosed), t(), or === a && (or = null);
      },
      onRouteChange: () => {
        t(), or === a && (or = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
Jn.setDefaultOptions = function(e) {
  xt = e;
};
Jn.resetDefaultOptions = function() {
  xt = {};
};
Jn.close = function() {
  if (or != null) {
    var e = or;
    or = null, ze().then(() => {
      e.show = !1;
    });
  }
};
hr.install = function(e) {
  e.component(hr.name, hr);
};
Jn.install = function(e) {
  e.component(hr.name, hr);
};
Jn.Component = hr;
var jS = hr, Wh = {
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
function Ga() {
  return Ga = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ga.apply(this, arguments);
}
var {
  n: Gh,
  classes: qh
} = _("divider");
function Xh(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [F(e.$slots, "default", {}, () => [e.description ? (p(), P(
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
var rd = Q({
  name: "VarDivider",
  props: Wh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Le({
      withText: !1
    }), t = R(() => Po(e.inset) ? e.inset : !0), o = R(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Po(i) || i === 0)
        return Ga({}, d);
      var v = L(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Ga({}, d, {
        height: "calc(80% - " + he(f) + ")"
      }) : Ga({}, d, {
        width: "calc(100% - " + he(f) + ")",
        left: v > 0 ? he(f) : he(0)
      });
    }), l = () => {
      a.withText = !!r.default || !!e.description;
    };
    return tn(() => {
      l();
    }), kt(() => {
      l();
    }), Ga({
      n: Gh,
      classes: qh
    }, Lv(a), {
      style: o,
      isInset: t
    });
  }
});
rd.render = Xh;
const Jr = rd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var WS = Jr, Kh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Yt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Kh[n];
  });
}
var Fn = "top", Or = "bottom", Ia = "right", gr = "left", po = "auto", ho = [Fn, Or, Ia, gr], go = "start", gt = "end", Zh = "clippingParents", ad = "viewport", at = "popper", Jh = "reference", kl = /* @__PURE__ */ ho.reduce(function(e, n) {
  return e.concat([n + "-" + go, n + "-" + gt]);
}, []), td = /* @__PURE__ */ [].concat(ho, [po]).reduce(function(e, n) {
  return e.concat([n, n + "-" + go, n + "-" + gt]);
}, []), Qh = "beforeRead", _h = "read", xh = "afterRead", eg = "beforeMain", ng = "main", rg = "afterMain", ag = "beforeWrite", tg = "write", og = "afterWrite", ii = [Qh, _h, xh, eg, ng, rg, ag, tg, og];
function Yn(e) {
  return e.split("-")[0];
}
var ig = {
  start: "end",
  end: "start"
};
function $l(e) {
  return e.replace(/start|end/g, function(n) {
    return ig[n];
  });
}
function Pn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Na(e) {
  var n = Pn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Cn(e) {
  var n = Pn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Ai(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Pn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Mr(e) {
  return ((Na(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var st = Math.max, Tl = Math.min, Za = Math.round;
function li() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function od() {
  return !/^((?!chrome|android).)*safari/i.test(li());
}
function Ja(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && Cn(e) && (t = e.offsetWidth > 0 && Za(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Za(a.height) / e.offsetHeight || 1);
  var l = Na(e) ? Pn(e) : window, i = l.visualViewport, s = !od() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function zi(e) {
  var n = Pn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Li(e) {
  return Ja(Mr(e)).left + zi(e).scrollLeft;
}
function lg(e, n) {
  var r = Pn(e), a = Mr(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = od();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Li(e),
    y: s
  };
}
function Nn(e) {
  return Pn(e).getComputedStyle(e);
}
function sg(e) {
  var n, r = Mr(e), a = zi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = st(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = st(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Li(e), s = -a.scrollTop;
  return Nn(t || r).direction === "rtl" && (i += st(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Un(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function yo(e) {
  return Un(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ai(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mr(e)
  );
}
function Ri(e) {
  var n = Nn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function id(e) {
  return ["html", "body", "#document"].indexOf(Un(e)) >= 0 ? e.ownerDocument.body : Cn(e) && Ri(e) ? e : id(yo(e));
}
function ut(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = id(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Pn(a), l = t ? [o].concat(o.visualViewport || [], Ri(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ut(yo(l)))
  );
}
function ug(e) {
  return ["table", "td", "th"].indexOf(Un(e)) >= 0;
}
function Ol(e) {
  return !Cn(e) || // https://github.com/popperjs/popper-core/issues/837
  Nn(e).position === "fixed" ? null : e.offsetParent;
}
function dg(e) {
  var n = /firefox/i.test(li()), r = /Trident/i.test(li());
  if (r && Cn(e)) {
    var a = Nn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = yo(e);
  for (Ai(t) && (t = t.host); Cn(t) && ["html", "body"].indexOf(Un(t)) < 0; ) {
    var o = Nn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ui(e) {
  for (var n = Pn(e), r = Ol(e); r && ug(r) && Nn(r).position === "static"; )
    r = Ol(r);
  return r && (Un(r) === "html" || Un(r) === "body" && Nn(r).position === "static") ? n : r || dg(e) || n;
}
function vg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Ai(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function si(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function fg(e, n) {
  var r = Ja(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Pl(e, n, r) {
  return n === ad ? si(lg(e, r)) : Na(n) ? fg(n, r) : si(sg(Mr(e)));
}
function cg(e) {
  var n = ut(yo(e)), r = ["absolute", "fixed"].indexOf(Nn(e).position) >= 0, a = r && Cn(e) ? Ui(e) : e;
  return Na(a) ? n.filter(function(t) {
    return Na(t) && vg(t, a) && Un(t) !== "body";
  }) : [];
}
function mg(e, n, r, a) {
  var t = n === "clippingParents" ? cg(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = Pl(e, u, a);
    return s.top = st(d.top, s.top), s.right = Tl(d.right, s.right), s.bottom = Tl(d.bottom, s.bottom), s.left = st(d.left, s.left), s;
  }, Pl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function yt(e) {
  return e.split("-")[1];
}
function pg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ld(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Yn(a) : null, o = a ? yt(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Fn:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case Or:
      s = {
        x: l,
        y: n.y + n.height
      };
      break;
    case Ia:
      s = {
        x: n.x + n.width,
        y: i
      };
      break;
    case gr:
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
  var u = t ? pg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case go:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case gt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function hg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gg(e) {
  return Object.assign({}, hg(), e);
}
function yg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function sd(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Zh : i, u = r.rootBoundary, d = u === void 0 ? ad : u, v = r.elementContext, f = v === void 0 ? at : v, m = r.altBoundary, h = m === void 0 ? !1 : m, b = r.padding, g = b === void 0 ? 0 : b, w = gg(typeof g != "number" ? g : yg(g, ho)), V = f === at ? Jh : at, S = e.rects.popper, T = e.elements[h ? V : f], E = mg(Na(T) ? T : T.contextElement || Mr(e.elements.popper), s, d, l), O = Ja(e.elements.reference), I = ld({
    reference: O,
    element: S,
    strategy: "absolute",
    placement: t
  }), y = si(Object.assign({}, S, I)), M = f === at ? y : O, D = {
    top: E.top - M.top + w.top,
    bottom: M.bottom - E.bottom + w.bottom,
    left: E.left - M.left + w.left,
    right: M.right - E.right + w.right
  }, C = e.modifiersData.offset;
  if (f === at && C) {
    var $ = C[t];
    Object.keys(D).forEach(function(z) {
      var K = [Ia, Or].indexOf(z) >= 0 ? 1 : -1, J = [Fn, Or].indexOf(z) >= 0 ? "y" : "x";
      D[z] += $[J] * K;
    });
  }
  return D;
}
function bg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? td : s, d = yt(a), v = d ? i ? kl : kl.filter(function(h) {
    return yt(h) === d;
  }) : ho, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(h, b) {
    return h[b] = sd(e, {
      placement: b,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Yn(b)], h;
  }, {});
  return Object.keys(m).sort(function(h, b) {
    return m[h] - m[b];
  });
}
function wg(e) {
  if (Yn(e) === po)
    return [];
  var n = Yt(e);
  return [$l(e), n, $l(n)];
}
function Cg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, h = m === void 0 ? !0 : m, b = r.allowedAutoPlacements, g = n.options.placement, w = Yn(g), V = w === g, S = s || (V || !h ? [Yt(g)] : wg(g)), T = [g].concat(S).reduce(function(le, de) {
      return le.concat(Yn(de) === po ? bg(n, {
        placement: de,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: b
      }) : de);
    }, []), E = n.rects.reference, O = n.rects.popper, I = /* @__PURE__ */ new Map(), y = !0, M = T[0], D = 0; D < T.length; D++) {
      var C = T[D], $ = Yn(C), z = yt(C) === go, K = [Fn, Or].indexOf($) >= 0, J = K ? "width" : "height", Y = sd(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), j = K ? z ? Ia : gr : z ? Or : Fn;
      E[J] > O[J] && (j = Yt(j));
      var se = Yt(j), q = [];
      if (o && q.push(Y[$] <= 0), i && q.push(Y[j] <= 0, Y[se] <= 0), q.every(function(le) {
        return le;
      })) {
        M = C, y = !1;
        break;
      }
      I.set(C, q);
    }
    if (y)
      for (var H = h ? 3 : 1, N = function(de) {
        var be = T.find(function(Pe) {
          var on = I.get(Pe);
          if (on)
            return on.slice(0, de).every(function(ee) {
              return ee;
            });
        });
        if (be)
          return M = be, "break";
      }, W = H; W > 0; W--) {
        var ne = N(W);
        if (ne === "break")
          break;
      }
    n.placement !== M && (n.modifiersData[a]._skip = !0, n.placement = M, n.reset = !0);
  }
}
const Sg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Cg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function kg(e, n, r) {
  var a = Yn(e), t = [gr, Fn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [gr, Ia].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function $g(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = td.reduce(function(d, v) {
    return d[v] = kg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const Tg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: $g
};
function Og(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Pg(e) {
  return e === Pn(e) || !Cn(e) ? zi(e) : Og(e);
}
function Vg(e) {
  var n = e.getBoundingClientRect(), r = Za(n.width) / e.offsetWidth || 1, a = Za(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Mg(e, n, r) {
  r === void 0 && (r = !1);
  var a = Cn(n), t = Cn(n) && Vg(n), o = Mr(n), l = Ja(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Un(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ri(o)) && (i = Pg(n)), Cn(n) ? (s = Ja(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Li(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Bg(e) {
  var n = Ja(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Eg(e) {
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
function Ig(e) {
  var n = Eg(e);
  return ii.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Ng(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function er(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Er = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Dg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Vl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ag(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Vl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(er(Er, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(er(Er, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          ii.indexOf(n.phase) < 0 && console.error(er(Er, n.name, '"phase"', "either " + ii.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(er(Er, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(er(Er, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(er(Er, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(er(Er, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Vl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(er(Dg, String(n.name), a, a));
      });
    });
  });
}
function zg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Lg(e) {
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
var Ml = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Rg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Bl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function El() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Ug(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Bl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Bl, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(w) {
        var V = typeof w == "function" ? w(d.options) : w;
        b(), d.options = Object.assign({}, o, d.options, V), d.scrollParents = {
          reference: Na(i) ? ut(i) : i.contextElement ? ut(i.contextElement) : [],
          popper: ut(s)
        };
        var S = Ig(Lg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var T = zg([].concat(S, d.options.modifiers), function(C) {
            var $ = C.name;
            return $;
          });
          if (Ag(T), Yn(d.options.placement) === po) {
            var E = d.orderedModifiers.find(function(C) {
              var $ = C.name;
              return $ === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var O = Nn(s), I = O.marginTop, y = O.marginRight, M = O.marginBottom, D = O.marginLeft;
          [I, y, M, D].some(function(C) {
            return parseFloat(C);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var w = d.elements, V = w.reference, S = w.popper;
          if (!El(V, S)) {
            process.env.NODE_ENV !== "production" && console.error(Ml);
            return;
          }
          d.rects = {
            reference: Mg(V, Ui(S), d.options.strategy === "fixed"),
            popper: Bg(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var T = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (T += 1, T > 100)) {
              console.error(Rg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var O = d.orderedModifiers[E], I = O.fn, y = O.options, M = y === void 0 ? {} : y, D = O.name;
            typeof I == "function" && (d = I({
              state: d,
              options: M,
              name: D,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ng(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!El(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Ml), m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      d.orderedModifiers.forEach(function(g) {
        var w = g.name, V = g.options, S = V === void 0 ? {} : V, T = g.effect;
        if (typeof T == "function") {
          var E = T({
            state: d,
            name: w,
            instance: m,
            options: S
          }), O = function() {
          };
          v.push(E || O);
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
var zt = {
  passive: !0
};
function Hg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Pn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, zt);
  }), i && s.addEventListener("resize", r.update, zt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, zt);
    }), i && s.removeEventListener("resize", r.update, zt);
  };
}
const Fg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Hg,
  data: {}
};
function Yg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = ld({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const jg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Yg,
  data: {}
};
var Wg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Gg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Za(n * t) / t || 0,
    y: Za(r * t) / t || 0
  };
}
function Il(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, h = l.y, b = h === void 0 ? 0 : h, g = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = g.x, b = g.y;
  var w = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), S = gr, T = Fn, E = window;
  if (u) {
    var O = Ui(r), I = "clientHeight", y = "clientWidth";
    if (O === Pn(r) && (O = Mr(r), Nn(O).position !== "static" && i === "absolute" && (I = "scrollHeight", y = "scrollWidth")), O = O, t === Fn || (t === gr || t === Ia) && o === gt) {
      T = Or;
      var M = v && O === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[I]
      );
      b -= M - a.height, b *= s ? 1 : -1;
    }
    if (t === gr || (t === Fn || t === Or) && o === gt) {
      S = Ia;
      var D = v && O === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[y]
      );
      m -= D - a.width, m *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: i
  }, u && Wg), $ = d === !0 ? Gg({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  if (m = $.x, b = $.y, s) {
    var z;
    return Object.assign({}, C, (z = {}, z[T] = V ? "0" : "", z[S] = w ? "0" : "", z.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", z));
  }
  return Object.assign({}, C, (n = {}, n[T] = V ? b + "px" : "", n[S] = w ? m + "px" : "", n.transform = "", n));
}
function qg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = Nn(n.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Yn(n.placement),
    variation: yt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Il(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Il(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Xg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: qg,
  data: {}
};
function Kg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !Cn(o) || !Un(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Zg(e) {
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
      !Cn(t) || !Un(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Jg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Kg,
  effect: Zg,
  requires: ["computeStyles"]
};
var Qg = [Fg, jg, Xg, Jg], _g = /* @__PURE__ */ Ug({
  defaultModifiers: Qg
});
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, eo.apply(this, arguments);
}
function Nl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Dl(e) {
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
function ud(e) {
  var n = B(null), r = B(null), a = B({
    width: 0,
    height: 0
  }), t = Ps(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(O, I) {
      I ? (S(), k(e.onOpen)) : k(e.onClose);
    }
  }), {
    zIndex: o
  } = Vt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: O,
      height: I
    } = window.getComputedStyle(n.value);
    a.value = {
      width: Ye(O),
      height: Ye(I)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, T());
  }, v = /* @__PURE__ */ function() {
    var O = Dl(function* () {
      e.trigger === "hover" && (s = !1, yield zn(), !i && E());
    });
    return function() {
      return O.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var O = Dl(function* () {
      e.trigger === "hover" && (i = !1, yield zn(), !s && E());
    });
    return function() {
      return O.apply(this, arguments);
    };
  }(), h = () => {
    T();
  }, b = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  }, g = () => {
    e.trigger === "click" && b();
  }, w = () => {
    u();
    var O = {
      x: Ye(e.offsetX),
      y: Ye(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: O.x,
          distance: O.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: O.x,
          distance: O.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: O.x,
          distance: O.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: O.x,
          distance: -O.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: O.x,
          distance: -O.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: O.x,
          distance: -O.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: O.y,
          distance: O.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: O.y,
          distance: -O.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: O.y,
          distance: -O.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: O.x,
          distance: -O.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: O.x,
          distance: O.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: O.y,
          distance: O.x
        };
    }
  }, V = () => {
    var {
      placement: O,
      skidding: I,
      distance: y
    } = w(), M = [eo({}, Sg, {
      enabled: t.value
    }), eo({}, Tg, {
      options: {
        offset: [I, y]
      }
    })];
    return {
      placement: O,
      modifiers: M
    };
  }, S = () => {
    l.setOptions(V());
  }, T = () => {
    var {
      disabled: O
    } = e;
    O || (t.value = !0, k(e["onUpdate:show"], !0));
  }, E = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  };
  return Ts(n, "click", g), oe(() => e.offsetX, S), oe(() => e.offsetY, S), oe(() => e.placement, S), oe(() => e.disabled, E), no(() => {
    var O, I = e.reference ? (O = n.value) == null ? void 0 : O.querySelector(e.reference) : n.value;
    l = _g(I ?? n.value, r.value, V());
  }), xa(() => {
    l.destroy();
  }), {
    show: t,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: a,
    handleHostClick: h,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: b,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: S,
    open: T,
    close: E
  };
}
function xg(e) {
  return ["click", "hover"].includes(e);
}
function ey(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function ny(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var ry = {
  type: {
    type: String,
    default: "default",
    validator: ny
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
    validator: xg
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: ey
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
  n: ay,
  classes: ty
} = _("tooltip");
function oy(e, n) {
  return p(), P(
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
    [F(e.$slots, "default"), (p(), ge(
      Aa,
      {
        to: e.teleport
      },
      [Z(
        Ue,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [ke(A(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: G({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = kn(() => {
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
                style: G({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [F(e.$slots, "content", {}, () => [Ce(
                re(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Sr, e.show]])]),
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
var dd = Q({
  name: "VarTooltip",
  props: ry,
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
      resize: h
    } = ud(e);
    return {
      toSizeUnit: he,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: ay,
      classes: ty,
      handleHostClick: l,
      handlePopoverClose: v,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: h,
      open: f,
      close: m
    };
  }
});
dd.render = oy;
const yr = dd;
yr.install = function(e) {
  e.component(yr.name, yr);
};
var GS = yr;
function iy(e) {
  return ["click"].includes(e);
}
var ly = {
  expandTrigger: {
    type: String,
    validator: iy
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ui.apply(this, arguments);
}
var {
  n: sy,
  classes: uy
} = _("ellipsis"), dy = {
  key: 0
};
function vy(e, n) {
  var r = ae("var-tooltip");
  return p(), ge(
    r,
    $t(ro(e.tooltip)),
    {
      content: ve(() => [F(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), P(
          "span",
          dy,
          re(e.tooltip.content),
          1
          /* TEXT */
        )) : F(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [A(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: G(e.rootStyles),
          onClick: n[0] || (n[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [F(e.$slots, "default")],
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
var vd = Q({
  name: "VarEllipsis",
  components: {
    VarTooltip: yr
  },
  props: ly,
  setup(e) {
    var n = B(!1), r = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : ui({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: sy,
      classes: uy,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
vd.render = vy;
const Qr = vd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var qS = Qr;
function fy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function cy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function my(e) {
  return ["click", "hover"].includes(e);
}
var py = {
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
    validator: tu
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: fy
  },
  direction: {
    type: String,
    default: "top",
    validator: cy
  },
  trigger: {
    type: String,
    default: "click",
    validator: my
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
function Al(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var {
  classes: zl,
  n: ln
} = _("fab");
const _r = Q({
  name: "VarFab",
  inheritAttrs: !1,
  props: py,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = Ps(e, "active"), o = B(null), {
      disabled: l
    } = oo(), i = (f, m, h) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (h === 0) {
          k(e.onClick, t.value, f);
          return;
        }
        t.value = m, k(e.onClick, t.value, f), k(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, k(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, k(e.onClose));
    }, d = () => r.trigger ? e.show ? r.trigger({
      active: t.value
    }) : null : ke(Z(_e, {
      "var-fab-cover": !0,
      class: ln("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [Z(Oe, {
        "var-fab-cover": !0,
        class: zl([t.value, ln("trigger-active-icon"), ln("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: ln("--trigger-icon-animation")
      }, null)]
    }), [[Sr, e.show]]), v = () => {
      var f, m, h = Os((m = r.default == null ? void 0 : r.default()) != null ? m : []);
      return Z("div", Ne({
        class: zl(ln(), ln("--position-" + e.position), ln("--direction-" + e.direction), [e.fixed, ln("--fixed"), ln("--absolute")], [e.safeArea, ln("--safe-area")]),
        style: {
          zIndex: L(e.zIndex),
          top: he(e.top),
          bottom: he(e.bottom),
          left: he(e.left),
          right: he(e.right)
        },
        ref: o,
        onClick: (b) => i(b, !t.value, h.length),
        onMouseleave: () => s(!1, h.length),
        onMouseenter: () => s(!0, h.length)
      }, a), [Z(Ue, {
        name: ln("--active-transition")
      }, Al(f = d()) ? f : {
        default: () => [f]
      }), Z(Ue, {
        name: ln("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(Z("div", {
          class: ln("actions"),
          onClick: (b) => b.stopPropagation()
        }, [h.map((b) => Z("div", {
          class: ln("action")
        }, [b]))]), [[Sr, e.show && t.value && h.length]])]
      })]);
    };
    return oe(() => e.trigger, () => {
      t.value = !1;
    }), oe(() => e.disabled, () => {
      t.value = !1;
    }), Ts(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Z(Aa, {
          to: f,
          disabled: l.value
        }, Al(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var XS = _r;
function hy(e) {
  return ["start", "end"].includes(e);
}
var gy = {
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
    validator: hy
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Ll(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function yy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ll(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ll(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: by
} = _("form");
function wy(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var fd = Q({
  name: "VarForm",
  props: gy,
  setup(e) {
    var n = R(() => e.disabled), r = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Vm(), o = (d) => {
      setTimeout(() => {
        var v = kr(d), f = v === window ? 0 : el(v), m = el(d) - f - Ye(e.scrollToErrorOffsetY);
        mt(v, {
          top: m,
          animation: Mo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = yy(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: w
          } = g;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = Yv(v, (g) => g === !1, e.scrollToError), m = f > -1;
          if (m) {
            var h, b = (h = a[f].instance.proxy) == null ? void 0 : h.$el;
            o(b);
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
      n: by,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
fd.render = wy;
const jn = fd;
jn.install = function(e) {
  e.component(jn.name, jn);
};
jn.useValidation = Tn;
jn.useForm = On;
var KS = jn;
function Cy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Sy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Cy,
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
  n: ky,
  classes: $y
} = _("image"), Ty = ["alt", "title", "lazy-error", "lazy-loading"], Oy = ["alt", "title", "src"];
function Py(e, n) {
  var r = De("lazy"), a = De("ripple");
  return ke((p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((p(), P(
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
      Ty
    )), [[r, e.src]]) : (p(), P(
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
      Oy
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var cd = Q({
  name: "VarImage",
  directives: {
    Lazy: pt,
    Ripple: We
  },
  props: Sy,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && k(i, t), o._lazy.state === "error" && k(s, t)) : k(i, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && k(l, t);
    }, a = (t) => {
      k(e.onClick, t);
    };
    return {
      n: ky,
      classes: $y,
      toSizeUnit: he,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
cd.render = Py;
const xr = cd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var ZS = xr, md = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Vy() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = cn(md);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var pd = {
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
function Rl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function My(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Rl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Rl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var By = 250, Ey = 20, {
  n: Iy,
  classes: Ny
} = _("swipe"), Dy = ["onClick"];
function Ay(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [A(
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
      [F(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), F(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), P(
        Ve,
        null,
        Fe(e.length, (r, a) => (p(), P(
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
          Dy
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
var hd = Q({
  name: "VarSwipe",
  props: pd,
  setup(e) {
    var n = B(null), r = B(0), a = R(() => e.vertical), t = B(0), o = B(0), l = B(!1), i = B(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Vy(), v = !1, f = !1, m = -1, h, b, g, w, V, S = (N) => s.find((W) => {
      var {
        index: ne
      } = W;
      return ne.value === N;
    }), T = () => {
      e.loop && (o.value >= 0 && S(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && S(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (S(d.value - 1).setTranslate(0), S(0).setTranslate(0)));
    }, E = (N) => {
      var W = an(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: ne
      } = e;
      return W <= -1 ? ne ? -1 : 0 : W >= d.value ? ne ? d.value : d.value - 1 : W;
    }, O = (N) => {
      var {
        loop: W
      } = e;
      return N === -1 ? W ? d.value - 1 : 0 : N === d.value ? W ? 0 : d.value - 1 : N;
    }, I = (N) => {
      var {
        loop: W
      } = e;
      return N < 0 ? W ? d.value - 1 : 0 : N > d.value - 1 ? W ? 0 : d.value - 1 : N;
    }, y = (N) => {
      var W = o.value >= r.value, ne = o.value <= -t.value, le = 0, de = -(t.value - r.value);
      l.value = !0, (W || ne) && (l.value = !0, o.value = ne ? le : de, S(0).setTranslate(0), S(d.value - 1).setTranslate(0)), to(() => {
        l.value = !1, k(N);
      });
    }, M = () => {
      v || (i.value = I(L(e.initialIndex)), v = !0);
    }, D = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (C(), m = window.setTimeout(() => {
        j(), D();
      }, L(N)));
    }, C = () => {
      m && clearTimeout(m);
    }, $ = (N, W) => {
      if (N > W && N > 10)
        return "horizontal";
      if (W > N && W > 10)
        return "vertical";
    }, z = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: W,
          clientY: ne
        } = N.touches[0];
        h = W, b = ne, g = performance.now(), f = !0, C(), y(() => {
          l.value = !0;
        });
      }
    }, K = (N) => {
      var {
        touchable: W,
        vertical: ne
      } = e;
      if (!(!f || !W)) {
        var {
          clientX: le,
          clientY: de
        } = N.touches[0], be = Math.abs(le - h), Pe = Math.abs(de - b), on = $(be, Pe), ee = ne ? "vertical" : "horizontal";
        if (on === ee) {
          N.preventDefault();
          var ue = w !== void 0 ? le - w : 0, ye = V !== void 0 ? de - V : 0;
          w = le, V = de, o.value += ne ? ye : ue, T();
        }
      }
    }, J = () => {
      if (f) {
        var {
          vertical: N,
          onChange: W
        } = e, ne = N ? V < b : w < h, le = Math.abs(N ? b - V : h - w), de = performance.now() - g <= By && le >= Ey, be = de ? E(ne ? i.value + 1 : i.value - 1) : E();
        f = !1, l.value = !1, w = void 0, V = void 0, o.value = be * -r.value;
        var Pe = i.value;
        i.value = O(be), D(), Pe !== i.value && k(W, i.value);
      }
    }, Y = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), D(), setTimeout(() => {
        l.value = !1;
      }));
    }, j = (N) => {
      if (!(d.value <= 1)) {
        M();
        var {
          loop: W,
          onChange: ne
        } = e, le = i.value;
        i.value = I(le + 1), (N == null ? void 0 : N.event) !== !1 && k(ne, i.value), y(() => {
          if (le === d.value - 1 && W) {
            S(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          le !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, se = (N) => {
      if (!(d.value <= 1)) {
        M();
        var {
          loop: W,
          onChange: ne
        } = e, le = i.value;
        i.value = I(le - 1), (N == null ? void 0 : N.event) !== !1 && k(ne, i.value), y(() => {
          if (le === 0 && W) {
            S(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          le !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, q = (N, W) => {
      if (!(d.value <= 1 || N === i.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var ne = N > i.value ? j : se, le = Math.abs(N - i.value);
        Array.from({
          length: le
        }).forEach((de, be) => {
          ne({
            event: be === le - 1 ? W == null ? void 0 : W.event : !1
          });
        });
      }
    }, H = {
      size: r,
      vertical: a
    };
    return u(H), oe(() => d.value, /* @__PURE__ */ My(function* () {
      yield zn(), M(), Y();
    })), Pr(Y), _n(C), xa(C), Kn(() => window, "resize", Y), {
      n: Iy,
      classes: Ny,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: z,
      handleTouchmove: K,
      handleTouchend: J,
      next: j,
      prev: se,
      to: q,
      resize: Y,
      toNumber: L
    };
  }
});
hd.render = Ay;
const Wn = hd;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var JS = Wn;
function zy() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = fn(md);
  return e || $n("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: Ly
} = _("swipe-item");
function Ry(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n()),
      style: G({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var gd = Q({
  name: "VarSwipeItem",
  setup() {
    var e = B(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = zy(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Ly,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
gd.render = Ry;
const Gn = gd;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var QS = Gn;
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
var Uy = di({
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
}, Ke(pd, ["loop", "indicator", "onChange"]), Ke(Pt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Ul,
  classes: Hy
} = _("image-preview"), Hl = 12, Fl = 200, Fy = 350, Yl = 200, Yy = ["src", "alt"];
function jy(e, n) {
  var r = ae("var-swipe-item"), a = ae("var-swipe"), t = ae("var-icon"), o = ae("var-popup");
  return p(), ge(
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
      default: ve(() => [Z(
        a,
        Ne({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ve(() => [(p(!0), P(
            Ve,
            null,
            Fe(e.images, (l) => (p(), ge(
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
                  [A(
                    "img",
                    {
                      class: c(e.n("image")),
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    Yy
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
            return [F(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (p(), P(
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
      ), F(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), ge(
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
        [F(e.$slots, "extra")],
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
var yd = Q({
  name: "VarImagePreview",
  components: {
    VarSwipe: Wn,
    VarSwipeItem: Gn,
    VarPopup: wn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Uy,
  setup(e) {
    var n = B(!1), r = R(() => {
      var {
        images: D,
        current: C
      } = e, $ = D.findIndex((z) => z === C);
      return $ >= 0 ? $ : 0;
    }), a = B(1), t = B(0), o = B(0), l = B(void 0), i = B(void 0), s = B(!0), u = null, d = null, v = null, f = (D, C) => {
      var {
        clientX: $,
        clientY: z
      } = D, {
        clientX: K,
        clientY: J
      } = C;
      return Math.abs(Math.sqrt(Math.pow(K - $, 2) + Math.pow(J - z, 2)));
    }, m = (D, C) => ({
      clientX: D.clientX,
      clientY: D.clientY,
      timestamp: Date.now(),
      target: C
    }), h = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Yl);
    }, b = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, g = (D) => d ? f(d, D) <= Hl && D.timestamp - d.timestamp <= Fl && d.target === D.target : !1, w = (D) => !D || !u || !d ? !1 : f(u, d) <= Hl && Date.now() - d.timestamp < Fy && (D === u.target || D.parentNode === u.target), V = (D) => {
      v = window.setTimeout(() => {
        w(D.target) && M(), u = null;
      }, Fl);
    }, S = (D) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = D, $ = m(C[0], D.currentTarget);
      if (u = $, g($)) {
        a.value > 1 ? b() : h();
        return;
      }
      d = $;
    }, T = (D) => {
      var {
        offsetWidth: C,
        offsetHeight: $
      } = D, {
        naturalWidth: z,
        naturalHeight: K
      } = D.querySelector("." + Ul("image"));
      return {
        width: C,
        height: $,
        imageRadio: K / z,
        rootRadio: $ / C,
        zoom: L(e.zoom)
      };
    }, E = (D) => {
      var {
        zoom: C,
        imageRadio: $,
        rootRadio: z,
        width: K,
        height: J
      } = T(D);
      if (!$)
        return 0;
      var Y = $ > z ? J / $ : K;
      return Math.max(0, (C * Y - K) / 2) / C;
    }, O = (D) => {
      var {
        zoom: C,
        imageRadio: $,
        rootRadio: z,
        width: K,
        height: J
      } = T(D);
      if (!$)
        return 0;
      var Y = $ > z ? J : K * $;
      return Math.max(0, (C * Y - J) / 2) / C;
    }, I = (D, C, $) => D + C >= $ ? $ : D + C <= -$ ? -$ : D + C, y = (D) => {
      if (d) {
        var C = D.currentTarget, {
          touches: $
        } = D, z = m($[0], C);
        if (a.value > 1) {
          var K = z.clientX - d.clientX, J = z.clientY - d.clientY, Y = E(C), j = O(C);
          t.value = I(t.value, K, Y), o.value = I(o.value, J, j);
        }
        d = z;
      }
    }, M = () => {
      if (a.value > 1) {
        b(), setTimeout(() => k(e["onUpdate:show"], !1), Yl);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return oe(() => e.show, (D) => {
      n.value = D;
    }, {
      immediate: !0
    }), {
      n: Ul,
      classes: Hy,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: S,
      handleTouchmove: y,
      handleTouchend: V,
      close: M
    };
  }
});
yd.render = jy;
const br = yd;
function dt() {
  return dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, dt.apply(this, arguments);
}
var ir, vt = {};
function Wy(e) {
  return e === void 0 && (e = {}), je(e) ? dt({}, vt, {
    images: [e]
  }) : Te(e) ? dt({}, vt, {
    images: e
  }) : dt({}, vt, e);
}
function Dn(e) {
  if (Ot()) {
    Dn.close();
    var n = Wy(e), r = Le(n);
    r.teleport = "body", ir = r;
    var {
      unmountInstance: a
    } = nt(br, r, {
      onClose: () => k(r.onClose),
      onClosed: () => {
        k(r.onClosed), a(), ir === r && (ir = null);
      },
      onRouteChange: () => {
        a(), ir === r && (ir = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Dn.close = () => {
  if (ir != null) {
    var e = ir;
    ir = null, ze().then(() => {
      e.show = !1;
    });
  }
};
Dn.setDefaultOptions = (e) => {
  vt = e;
};
Dn.resetDefaultOptions = () => {
  vt = {};
};
br.install = function(e) {
  e.component(br.name, br);
};
Dn.install = function(e) {
  e.component(br.name, br);
};
Dn.Component = br;
var _S = br, jt = {
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
function jl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Wl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        jl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        jl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Gy,
  classes: qy
} = _("sticky");
function Xy(e, n) {
  return p(), P(
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
    [A(
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
      [F(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var bd = Q({
  name: "VarSticky",
  props: jt,
  setup(e) {
    var n = B(null), r = B(null), a = B(!1), t = B("0px"), o = B("0px"), l = B("auto"), i = B("auto"), s = B("auto"), u = B("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => Ye(e.offsetTop)), m, h = () => {
      var {
        cssMode: S,
        disabled: T
      } = e;
      if (!T) {
        var E = 0;
        if (m !== window) {
          var {
            top: O
          } = m.getBoundingClientRect();
          E = O;
        }
        var I = r.value, y = n.value, {
          top: M,
          left: D
        } = y.getBoundingClientRect(), C = M - E;
        return C <= f.value ? (S || (l.value = y.offsetWidth + "px", i.value = y.offsetHeight + "px", t.value = E + f.value + "px", o.value = D + "px", s.value = I.offsetWidth + "px", u.value = I.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: C,
          isFixed: !1
        });
      }
    }, b = () => {
      if (m) {
        var S = h();
        S && k(e.onScroll, S.offsetTop, S.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var S = Wl(function* () {
        a.value = !1, yield Qv(), h();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var S = Wl(function* () {
        yield zn(), m = kr(n.value), m !== window && m.addEventListener("scroll", b), b();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", b);
    };
    return oe(() => e.disabled, g), tn(w), xa(V), _n(V), Kn(() => window, "scroll", b), Kn(() => window, "resize", g), {
      n: Gy,
      classes: qy,
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
bd.render = Xy;
const qn = bd;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var xS = qn, wd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Ky() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = cn(wd);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function Zy() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn(wd);
  return r || $n("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var Jy = {
  index: {
    type: [Number, String]
  }
}, {
  n: Qy,
  classes: _y
} = _("index-anchor");
function xy(e, n) {
  return p(), ge(
    et(e.sticky ? e.n("$-sticky") : e.Transition),
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
        Ne({
          class: e.n()
        }, e.$attrs),
        [F(e.$slots, "default", {}, () => [Ce(
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
var Cd = Q({
  name: "VarIndexAnchor",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Jy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Zy(), t = B(0), o = B(!1), l = R(() => e.index), i = B(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, h = (g) => {
      o.value = g;
    }, b = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: h
    };
    return a(b), {
      n: Qy,
      classes: _y,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Ue
    };
  }
});
Cd.render = xy;
const ea = Cd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var ek = ea, eb = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  /** @deprecated Use stickyCssMode to instead. */
  cssMode: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: {
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
function Gl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Lt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Gl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Gl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: nb,
  classes: rb
} = _("index-bar"), ab = ["onClick"];
function tb(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [F(e.$slots, "default"), A(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: G({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), P(
        Ve,
        null,
        Fe(e.anchorNameList, (r) => (p(), P(
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
          re(r),
          15,
          ab
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
var Sd = Q({
  name: "VarIndexBar",
  props: eb,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Ky(), t = B(""), o = B(null), l = B([]), i = B(), s = R(() => e.sticky), u = R(() => e.stickyCssMode || e.cssMode), d = R(() => Ye(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, m = !1, h = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(h);
    var b = (I, y) => {
      var M = wi(I) ? I.name.value : I;
      M === i.value || M === void 0 || (i.value = M, (y == null ? void 0 : y.event) !== !1 && k(e.onChange, M));
    }, g = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: I
      } = f.getBoundingClientRect(), {
        scrollTop: y
      } = f, {
        top: M
      } = o.value.getBoundingClientRect();
      return y - I + M;
    }, w = () => {
      var I = ct(f), y = f === window ? document.body.scrollHeight : f.scrollHeight, M = g();
      r.forEach((D, C) => {
        var $ = D.ownTop.value, z = I - $ + d.value - M, K = C === r.length - 1 ? y : r[C + 1].ownTop.value - D.ownTop.value;
        D.setDisabled(!0), z >= 0 && z < K && t.value === "" && (D.setDisabled(!1), b(D));
      });
    }, V = /* @__PURE__ */ function() {
      var I = Lt(function* (y) {
        var {
          anchorName: M,
          manualCall: D = !1,
          options: C
        } = y;
        if (D && k(e.onClick, M), !(M === i.value && !m)) {
          var $ = r.find((Y) => {
            var {
              name: j
            } = Y;
            return M === j.value;
          });
          if ($) {
            var z = g(), K = $.ownTop.value - d.value + z, J = Si(f);
            t.value = M, b(M, C), yield mt(f, {
              left: J,
              top: K,
              animation: hs,
              duration: L(e.duration)
            }), to(() => {
              t.value = "";
            });
          }
        }
      });
      return function(M) {
        return I.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var I = Lt(function* () {
        yield zn(), f = kr(o.value);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), T = () => {
      f.addEventListener("scroll", w);
    }, E = () => {
      f.removeEventListener("scroll", w);
    }, O = (I, y) => {
      bn(() => V({
        anchorName: I,
        options: y
      }));
    };
    return oe(() => n.value, /* @__PURE__ */ Lt(function* () {
      yield zn(), r.forEach((I) => {
        var {
          name: y,
          setOwnTop: M
        } = I;
        y.value && l.value.push(y.value), M();
      });
    })), tn(/* @__PURE__ */ Lt(function* () {
      yield S(), T();
    })), Ct(E), _n(() => {
      m = !0, E();
    }), Pr(() => {
      !m || i.value === void 0 || (V({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: nb,
      classes: rb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: O,
      anchorClick: V
    };
  }
});
Sd.render = tb;
const na = Sd;
na.install = function(e) {
  e.component(na.name, na);
};
var nk = na;
function ob(e) {
  return ["small", "normal"].includes(e);
}
function ib(e) {
  return ["outlined", "standard"].includes(e);
}
var Hi = {
  value: {
    type: null,
    required: !0
  },
  id: {
    type: String,
    default: ""
  },
  isFocus: {
    type: Boolean
  },
  size: {
    type: String,
    default: "normal",
    validator: ob
  },
  variant: {
    type: String,
    default: "standard",
    validator: ib
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
  errorMessage: {
    type: String
  },
  formDisabled: {
    type: Boolean
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  cursor: {
    type: String
  },
  composing: {
    type: Boolean,
    default: !1
  },
  alwaysCustomPlaceholder: {
    type: Boolean,
    default: !0
  },
  onClick: U(),
  onClear: U()
}, {
  n: ql,
  classes: lb
} = _("field-decorator"), sb = ["for"];
function ub(e, n) {
  var r = ae("var-icon");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        ref: "controllerEl",
        style: G({
          color: e.color,
          cursor: e.cursor,
          overflow: e.isFloating ? "visible" : "hidden"
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [F(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          ref: "middleEl",
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      ), (e.hint || e.alwaysCustomPlaceholder) && e.placeholderTransform ? (p(), P(
        "label",
        {
          key: 0,
          class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [!e.hint, e.n("--placeholder-non-hint")], e.computePlaceholderState())),
          style: G({
            color: e.color,
            transform: e.placeholderTransform,
            maxWidth: e.placeholderMaxWidth
          }),
          for: e.id
        },
        [A(
          "span",
          null,
          re(e.placeholder),
          1
          /* TEXT */
        )],
        14,
        sb
      )) : x("v-if", !0), e.variant === "outlined" ? (p(), P(
        "span",
        {
          key: 1,
          ref: "placeholderTextEl",
          class: c([e.n("placeholder-text"), e.n("$--ellipsis")])
        },
        re(e.placeholder),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0), A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (p(), ge(
          r,
          {
            key: 0,
            class: c(e.n("clear-icon")),
            "var-field-decorator-cover": "",
            name: "close-circle",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : x("v-if", !0), F(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), P(
      Ve,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), P(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: G({
            borderColor: e.color
          })
        },
        [A(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: G({
              width: e.legendWidth
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )) : (p(), P(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: G({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [A(
          "div",
          {
            class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
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
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var kd = Q({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Oe
  },
  props: Hi,
  setup(e) {
    var n = B(null), r = B(null), a = B(null), t = B(""), o = B(""), l = B(""), i = R(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), s = R(() => e.hint && (!dr(e.value) || e.isFocus)), u = () => {
      var {
        hint: m,
        value: h,
        composing: b
      } = e;
      if (!m && (!dr(h) || b))
        return ql("--placeholder-hidden");
    }, d = () => {
      var {
        size: m,
        hint: h,
        placeholder: b,
        variant: g
      } = e;
      if (!s.value || !b) {
        var w = An(n.value), V = An(r.value), S = V.left - w.left + "px";
        o.value = h ? "translate(" + S + ", calc(var(--field-decorator-" + g + "-" + m + "-placeholder-translate-y) + var(--field-decorator-middle-offset-y))) scale(1)" : "translate(" + S + ", -50%)", l.value = V.width + "px";
        return;
      }
      var T = ft(n.value), E = g === "outlined" ? "-50%" : "0";
      if (o.value = "translate(" + T.paddingLeft + ", " + E + ") scale(0.75)", g === "outlined") {
        var O = ft(a.value), I = "var(--field-decorator-outlined-" + m + "-placeholder-space)";
        t.value = "calc(" + O.width + " * 0.75 + " + I + " * 2)", l.value = "calc((100% - var(--field-decorator-outlined-" + m + "-padding-left) - var(--field-decorator-outlined-" + m + "-padding-right)) * 1.33)";
      } else
        l.value = "133%";
    }, v = (m) => {
      k(e.onClear, m);
    }, f = (m) => {
      k(e.onClick, m);
    };
    return kt(d), tn(d), Kn(() => window, "resize", d), {
      controllerEl: n,
      middleEl: r,
      placeholderTextEl: a,
      placeholderTransform: o,
      placeholderMaxWidth: l,
      color: i,
      legendWidth: t,
      isFloating: s,
      computePlaceholderState: u,
      n: ql,
      classes: lb,
      isEmpty: dr,
      handleClear: v,
      handleClick: f
    };
  }
});
kd.render = ub;
const $d = kd;
function vi() {
  return vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, vi.apply(this, arguments);
}
function db(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var vb = vi({
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
    validator: db
  },
  textarea: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: [String, Number],
    default: 8
  },
  maxlength: {
    type: [String, Number]
  },
  readonly: {
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
  enterkeyhint: {
    type: String
  },
  onFocus: U(),
  onBlur: U(),
  onInput: U(),
  onChange: U(),
  onClear: U(),
  "onUpdate:modelValue": U()
}, Ke(Hi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: fb,
  classes: cb
} = _("input"), mb = ["placeholder", "enterkeyhint"], pb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], hb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function gb(e, n) {
  var r = ae("var-field-decorator"), a = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[15] || (n[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Z(
      r,
      $t(ro({
        value: e.modelValue,
        id: e.id,
        size: e.size,
        variant: e.variant,
        placeholder: e.placeholder,
        line: e.line,
        hint: e.hint,
        textColor: e.textColor,
        focusColor: e.focusColor,
        blurColor: e.blurColor,
        isFocus: e.isFocus,
        errorMessage: e.errorMessage,
        formDisabled: e.formDisabled,
        disabled: e.disabled,
        clearable: e.clearable,
        cursor: e.cursor,
        composing: e.isComposing,
        alwaysCustomPlaceholder: !1,
        onClick: e.handleClick,
        onClear: e.handleClear
      })),
      {
        "prepend-icon": ve(() => [F(e.$slots, "prepend-icon")]),
        "append-icon": ve(() => [F(e.$slots, "append-icon")]),
        default: ve(() => [e.normalizedType === "password" ? (p(), P(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete")),
            placeholder: e.hint ? void 0 : e.placeholder,
            style: G({
              "--input-placeholder-color": e.placeholderColor
            }),
            enterkeyhint: e.enterkeyhint
          },
          null,
          14,
          mb
        )) : x("v-if", !0), e.textarea ? (p(), P(
          "textarea",
          {
            key: 1,
            class: c(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.normalizedType,
            value: e.modelValue,
            placeholder: e.hint ? void 0 : e.placeholder,
            maxlength: e.maxlength,
            rows: e.rows,
            enterkeyhint: e.enterkeyhint,
            inputmode: e.type === "number" ? "numeric" : void 0,
            style: G({
              color: e.errorMessage ? void 0 : e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              resize: e.resize ? "vertical" : "none",
              "--input-placeholder-color": e.placeholderColor
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
          pb
        )) : (p(), P(
          "input",
          {
            key: 2,
            class: c(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.normalizedType,
            value: e.modelValue,
            placeholder: e.hint ? void 0 : e.placeholder,
            maxlength: e.maxlength,
            enterkeyhint: e.enterkeyhint,
            inputmode: e.type === "number" ? "numeric" : void 0,
            style: G({
              color: e.errorMessage ? void 0 : e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              "--input-placeholder-color": e.placeholderColor
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
          hb
        ))]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ), Z(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[14] || (n[14] = kn(() => {
        }, ["stop"]))
      },
      null,
      8,
      ["error-message", "extra-message"]
    )],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Td = Q({
  name: "VarInput",
  components: {
    VarFormDetails: Je,
    VarFieldDecorator: $d
  },
  props: vb,
  setup(e) {
    var n = B("var-input-" + _a().uid), r = B(null), a = B(!1), t = B(!1), o = R(() => e.type === "number" ? "text" : e.type), l = R(() => {
      var {
        maxlength: q,
        modelValue: H
      } = e;
      return q ? dr(H) ? "0 / " + q : String(H).length + "/" + q : "";
    }), i = R(() => e.disabled || e.readonly ? "" : "text"), s = R(() => {
      var {
        hint: q,
        blurColor: H,
        focusColor: N
      } = e;
      if (!q)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? N || "var(--field-decorator-focus-color)" : H || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = On(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: h
    } = Tn(), b = (q) => {
      ze(() => {
        var {
          validateTrigger: H,
          rules: N,
          modelValue: W
        } = e;
        f(H, q, N, W);
      });
    }, g = (q) => {
      a.value = !0, k(e.onFocus, q), b("onFocus");
    }, w = (q) => {
      a.value = !1, k(e.onBlur, q), b("onBlur");
    }, V = (q) => {
      var H = q.target, {
        value: N
      } = H;
      return e.type === "number" && (N = M(N)), C(D(N));
    }, S = () => {
      t.value = !0;
    }, T = (q) => {
      t.value && (t.value = !1, q.target.dispatchEvent(new Event("input")));
    }, E = (q) => {
      if (!t.value) {
        var H = V(q);
        k(e["onUpdate:modelValue"], H), k(e.onInput, H, q), b("onInput");
      }
    }, O = (q) => {
      var H = V(q);
      k(e.onChange, H, q), b("onChange");
    }, I = () => {
      var {
        disabled: q,
        readonly: H,
        clearable: N,
        onClear: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || q || H || !N || (k(e["onUpdate:modelValue"], ""), k(W, ""), b("onClear"));
    }, y = (q) => {
      var {
        disabled: H,
        onClick: N
      } = e;
      d != null && d.disabled.value || H || (k(N, q), b("onClick"));
    }, M = (q) => {
      var H = q.indexOf("-"), N = q.indexOf(".");
      return H > -1 && (q = H === 0 ? "-" + q.replace(/-/g, "") : q.replace(/-/g, "")), N > -1 && (q = q.slice(0, N + 1) + q.slice(N).replace(/\./g, "")), q.replace(/[^-0-9.]/g, "");
    }, D = (q) => e.modelModifiers.trim ? q.trim() : q, C = (q) => e.maxlength ? q.slice(0, L(e.maxlength)) : q, $ = (q) => {
      var {
        disabled: H,
        readonly: N
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || N || q.stopPropagation();
    };
    function z(q) {
      var {
        disabled: H
      } = e;
      d != null && d.disabled.value || H || q.target === r.value || (Y(), q.preventDefault());
    }
    var K = () => {
      k(e["onUpdate:modelValue"], ""), h();
    }, J = () => m(e.rules, e.modelValue), Y = () => {
      var q;
      (q = r.value) == null || q.focus();
    }, j = () => {
      r.value.blur();
    }, se = {
      reset: K,
      validate: J,
      resetValidation: h
    };
    return k(u, se), tn(() => {
      e.autofocus && Y();
    }), {
      el: r,
      id: n,
      isFocus: a,
      isComposing: t,
      errorMessage: v,
      placeholderColor: s,
      normalizedType: o,
      cursor: i,
      maxlengthText: l,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      n: fb,
      classes: cb,
      isEmpty: dr,
      handleFocus: g,
      handleBlur: w,
      handleInput: E,
      handleChange: O,
      handleClear: I,
      handleClick: y,
      handleTouchstart: $,
      handleCompositionStart: S,
      handleCompositionEnd: T,
      handleMousedown: z,
      validate: J,
      resetValidation: h,
      reset: K,
      focus: Y,
      blur: j
    };
  }
});
Td.render = gb;
const wr = Td;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var rk = wr;
function yb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function bb(e) {
  return ["always", "hover", "none"].includes(e);
}
var wb = {
  type: {
    type: String,
    default: "default",
    validator: yb
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
    validator: bb
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
  n: Cb,
  classes: Sb
} = _("link");
function kb(e, n) {
  return p(), ge(
    et(e.tag),
    Ne(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ve(() => [F(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var Od = Q({
  name: "VarLink",
  props: wb,
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
      o || k(l, t);
    };
    return {
      n: Cb,
      classes: Sb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: he
    };
  }
});
Od.render = kb;
const ra = Od;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var ak = ra, $b = {
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
function Xl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Tb(e) {
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
  n: Ob,
  classes: Pb
} = _("list");
function Vb(e, n) {
  var r = ae("var-loading"), a = De("ripple");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [F(e.$slots, "default"), e.loading ? F(e.$slots, "loading", {
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
      ), Z(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : x("v-if", !0), e.finished ? F(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: c(e.n("finished"))
      },
      re(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? F(e.$slots, "error", {
      key: 2
    }, () => [ke((p(), P(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [Ce(
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
var Pd = Q({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: En
  },
  props: $b,
  setup(e) {
    var n = B(null), r = B(null), a, t = () => {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }, o = () => {
      var {
        bottom: s
      } = An(a), {
        bottom: u
      } = An(r.value);
      return Math.floor(u) - Ye(e.offset) <= s;
    }, l = () => {
      a.removeEventListener("scroll", i);
    }, i = /* @__PURE__ */ function() {
      var s = Tb(function* () {
        yield ze();
        var {
          loading: u,
          finished: d,
          error: v
        } = e;
        !u && !d && !v && o() && t();
      });
      return function() {
        return s.apply(this, arguments);
      };
    }();
    return tn(() => {
      a = kr(n.value), a.addEventListener("scroll", i), e.immediateCheck && i();
    }), _n(l), xa(l), {
      pack: Xe,
      listEl: n,
      detectorEl: r,
      dt: ao,
      isNumber: an,
      load: t,
      check: i,
      n: Ob,
      classes: Pb
    };
  }
});
Pd.render = Vb;
const aa = Pd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var tk = aa, Mb = {
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
  classes: Bb,
  n: Kl
} = _("loading-bar");
const Eb = Q({
  name: "VarLoadingBar",
  props: Mb,
  setup(e) {
    return () => Z("div", {
      class: Bb(Kl(), [e.error, Kl("--error")]),
      style: {
        zIndex: hn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: he(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: he(e.top)
      }
    }, null);
  }
});
var Vd, Md, bo, Bd, Zl, Ed = {}, Ib = {
  value: 0,
  opacity: 0,
  error: !1
}, Ze = Le(Ib), Nb = (e) => {
  Object.assign(Ze, e);
}, Db = (e) => {
  Object.assign(Ze, e), Ed = e;
}, Ab = () => {
  Object.keys(Ed).forEach((e) => {
    Ze[e] !== void 0 && (Ze[e] = void 0);
  });
}, Id = () => {
  Zl || (Zl = !0, nt(Eb, Ze));
}, Fi = () => {
  Vd = window.setTimeout(() => {
    if (!(Ze.value >= 95)) {
      var e = Math.random();
      Ze.value < 70 && (e = Math.round(5 * Math.random())), Ze.value += e, Fi();
    }
  }, 200);
}, Yi = () => {
  window.clearTimeout(Md), window.clearTimeout(Vd), window.clearTimeout(bo), window.clearTimeout(Bd);
}, zb = () => {
  Yi(), Ze.error = !1, Ze.value = 0, Id(), bo = window.setTimeout(() => {
    Ze.opacity = 1;
  }, 200), Fi();
}, Nd = () => {
  Yi(), Ze.value = 100, bo = window.setTimeout(() => {
    Ze.opacity = 0, Md = window.setTimeout(() => {
      Ze.error = !1;
    }, 250);
  }, 300);
}, Lb = () => {
  Yi(), Ze.error = !0, Ze.value === 100 && (Ze.value = 0), Id(), bo = window.setTimeout(() => {
    Ze.opacity = 1;
  }, 200), Fi(), Bd = window.setTimeout(Nd, 300);
}, Dd = {
  start: zb,
  finish: Nd,
  error: Lb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Nb,
  setDefaultOptions: Db,
  resetDefaultOptions: Ab
}, ok = Dd;
const fi = Dd;
function Rb(e) {
  return ["click", "hover"].includes(e);
}
function Ub(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Hb = {
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
    validator: Rb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Ub
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
  n: Fb,
  classes: Yb
} = _("menu");
function jb(e, n) {
  return p(), P(
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
    [F(e.$slots, "default"), (p(), ge(
      Aa,
      {
        to: e.teleport
      },
      [Z(
        Ue,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [ke(A(
            "div",
            {
              ref: "popover",
              style: G({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
              onClick: n[0] || (n[0] = kn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [F(e.$slots, "menu")],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Sr, e.show]])]),
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
var Ad = Q({
  name: "VarMenu",
  props: Hb,
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
      resize: h
    } = ud(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: mn,
      toSizeUnit: he,
      n: Fb,
      classes: Yb,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: h,
      open: f,
      close: m
    };
  }
});
Ad.render = jb;
const Xn = Ad;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var ik = Xn, zd = Symbol("SELECT_BIND_OPTION_KEY");
function Wb() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = cn(zd);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function Gb() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = fn(zd);
  return r || $n("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var qb = {
  label: {},
  value: {}
}, {
  n: Xb,
  classes: Kb
} = _("option");
function Zb(e, n) {
  var r = ae("var-checkbox"), a = De("ripple");
  return ke((p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: G({
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
        style: G({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (p(), ge(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = kn(() => {
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
      [F(e.$slots, "default", {}, () => [Ce(
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
var Ld = Q({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: mr
  },
  props: qb,
  setup(e) {
    var n = B(!1), r = R(() => n.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: l
    } = Gb(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      n.value = !n.value, u(h);
    }, f = () => u(h), m = (b) => {
      n.value = b;
    }, h = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return oe([() => e.label, () => e.value], d), l(h), {
      n: Xb,
      classes: Kb,
      optionSelected: n,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Ld.render = Zb;
const ta = Ld;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var lk = ta, Jb = {
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
function Qb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var {
  n: Jl
} = _("overlay");
const oa = Q({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Jb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Vt(() => e.show, 1), {
      disabled: o
    } = oo(), l = () => {
      k(e.onClick), k(e["onUpdate:show"], !1);
    };
    io(() => e.show, () => e.lockScroll);
    var i = () => Z("div", Ne({
      class: Jl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [k(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return Z(Ue, {
        name: Jl("--fade")
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
        return Z(Aa, {
          to: u,
          disabled: o.value
        }, Qb(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
var sk = oa, _b = {
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
  n: xb,
  classes: e0
} = _("pagination"), n0 = ["item-mode", "onClick"];
function r0(e, n) {
  var r = ae("var-icon"), a = ae("var-input"), t = ae("var-cell"), o = ae("var-menu"), l = De("ripple");
  return p(), P(
    "ul",
    {
      class: c(e.n())
    },
    [ke((p(), P(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [F(e.$slots, "prev", {}, () => [Z(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), P(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [Z(
        a,
        {
          "var-pagination-cover": "",
          hint: !1,
          disabled: e.disabled,
          modelValue: e.simpleCurrentValue,
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleCurrentValue = i),
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
          onKeydown: n[3] || (n[3] = Xi((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
        },
        null,
        8,
        ["disabled", "modelValue"]
      ), A("span", null, [Ce(
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
    )) : (p(!0), P(
      Ve,
      {
        key: 1
      },
      Fe(e.pageList, (i, s) => ke((p(), P(
        "li",
        {
          key: s,
          "item-mode": e.getMode(i, s),
          class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [Ce(
          re(i),
          1
          /* TEXT */
        )],
        10,
        n0
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), ke((p(), P(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [F(e.$slots, "next", {}, () => [Z(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), P(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [Z(
        o,
        {
          disabled: e.disabled,
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(p(!0), P(
            Ve,
            null,
            Fe(e.sizeOption, (i, s) => ke((p(), ge(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ve(() => [Ce(
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
              onClick: n[5] || (n[5] = kn(function() {
                return e.showMenu && e.showMenu(...arguments);
              }, ["stop"]))
            },
            [A(
              "span",
              null,
              re(e.size) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
              1
              /* TEXT */
            ), Z(
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
        ["disabled", "show"]
      )],
      2
      /* CLASS */
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (p(), P(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [Ce(
        re(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), Z(
        a,
        {
          modelValue: e.quickJumperValue,
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.quickJumperValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
          onKeydown: n[9] || (n[9] = Xi((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : x("v-if", !0), e.totalText ? (p(), P(
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
var Rd = Q({
  name: "VarPagination",
  components: {
    VarMenu: Xn,
    VarIcon: Oe,
    VarCell: cr,
    VarInput: wr
  },
  directives: {
    Ripple: We
  },
  props: _b,
  setup(e) {
    var n = B(!1), r = B(""), a = B("1"), t = B(!1), o = B(!1), l = B(L(e.current) || 1), i = B(L(e.size) || 10), s = B([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(L(e.total) / L(i.value))), v = R(() => {
      var T = i.value * (l.value - 1) + 1, E = Math.min(i.value * l.value, L(e.total));
      return [T, E];
    }), f = R(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (T, E) => an(T) ? !1 : E === 1 ? t.value : o.value, h = (T, E) => an(T) ? "basic" : E === 1 ? "head" : "tail", b = (T, E) => {
      if (!(T === l.value || e.disabled)) {
        if (T === "...") {
          l.value = E === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
          return;
        }
        if (T === "prev") {
          l.value = V(l.value - 1);
          return;
        }
        if (T === "next") {
          l.value = V(l.value + 1);
          return;
        }
        an(T) && (l.value = T);
      }
    }, g = () => {
      e.disabled || (n.value = !0);
    }, w = (T) => {
      i.value = T, n.value = !1;
      var E = V(l.value);
      a.value = String(E), l.value = E;
    }, V = (T) => T > d.value ? d.value : T < 1 ? 1 : T, S = (T, E, O) => {
      O.target.blur();
      var I = V(L(E));
      a.value = String(I), l.value = I, T === "quick" && (r.value = "");
    };
    return oe([() => e.current, () => e.size], (T) => {
      var [E, O] = T;
      l.value = L(E) || 1, i.value = L(O || 10);
    }), oe([l, i, d], (T, E) => {
      var [O, I, y] = T, [M, D] = E, C = [], {
        maxPagerCount: $,
        total: z,
        onChange: K
      } = e, J = Math.ceil(L(z) / L(D)), Y = y - ($ - u.value) - 1;
      if (a.value = "" + O, y - 2 > $) {
        if (M === void 0 || y !== J)
          for (var j = 2; j < $ + 2; j++)
            C.push(j);
        if (O <= $ && O < Y) {
          C = [];
          for (var se = 1; se < $ + 1; se++)
            C.push(se + 1);
          t.value = !0, o.value = !1;
        }
        if (O > $ && O < Y) {
          C = [];
          for (var q = 1; q < $ + 1; q++)
            C.push(O + q - u.value);
          t.value = O === 2 && $ === 1, o.value = !1;
        }
        if (O >= Y) {
          C = [];
          for (var H = 1; H < $ + 1; H++)
            C.push(y - ($ - H) - 1);
          t.value = !1, o.value = !0;
        }
        C = [1, "...", ...C, "...", y];
      } else
        for (var N = 1; N <= y; N++)
          C.push(N);
      s.value = C, M != null && y > 0 && k(K, O, I), k(e["onUpdate:current"], O), k(e["onUpdate:size"], I);
    }, {
      immediate: !0
    }), {
      n: xb,
      classes: e0,
      pack: Xe,
      current: l,
      menuVisible: n,
      size: i,
      pageCount: d,
      pageList: s,
      quickJumperValue: r,
      simpleCurrentValue: a,
      totalText: f,
      getMode: h,
      isHideEllipsis: m,
      clickItem: b,
      showMenu: g,
      clickSize: w,
      setPage: S,
      toNumber: L,
      formatElevation: mn
    };
  }
});
Rd.render = r0;
const ia = Rd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var uk = ia, a0 = {
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
  n: t0,
  classes: o0
} = _("paper");
function i0(e, n) {
  var r = De("ripple");
  return ke((p(), P(
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
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var Ud = Q({
  name: "VarPaper",
  directives: {
    Ripple: We
  },
  props: a0,
  setup(e) {
    var n = (r) => {
      k(e.onClick, r);
    };
    return {
      n: t0,
      classes: o0,
      formatElevation: mn,
      toSizeUnit: he,
      handleClick: n
    };
  }
});
Ud.render = i0;
const la = Ud;
la.install = function(e) {
  e.component(la.name, la);
};
var dk = la;
function ci() {
  return ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ci.apply(this, arguments);
}
var l0 = ci({
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
}, Ke(Pt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: s0,
  classes: u0
} = _("picker"), Ql = 300, d0 = 15, _l = 0, v0 = ["onTouchstart", "onTouchmove", "onTouchend"], f0 = ["onTransitionend"];
function c0(e, n) {
  var r = ae("var-button");
  return p(), ge(
    et(e.dynamic ? e.n("$-popup") : e.Transition),
    Ne(e.dynamic ? {
      onOpen: e.onOpen,
      onOpened: e.onOpened,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onClickOverlay: e.onClickOverlay,
      onRouteChange: e.onRouteChange,
      closeOnClickOverlay: e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.show,
      safeArea: e.safeArea,
      "onUpdate:show": e.handlePopupUpdateShow,
      position: "bottom",
      class: e.n("popup")
    } : null, {
      "var-picker-cover": ""
    }),
    {
      default: ve(() => [A(
        "div",
        Ne({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [F(e.$slots, "cancel", {}, () => [Z(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [Ce(
                re(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), F(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: c(e.n("title"))
            },
            re(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), F(e.$slots, "confirm", {}, () => [Z(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [Ce(
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
            style: G({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), P(
            Ve,
            null,
            Fe(e.scrollColumns, (a) => (p(), P(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: kn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [A(
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
                [(p(!0), P(
                  Ve,
                  null,
                  Fe(a.column.texts, (t) => (p(), P(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: G({
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
                f0
              )],
              42,
              v0
            ))),
            128
            /* KEYED_FRAGMENT */
          )), A(
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
          ), A(
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
var Hd = Q({
  name: "VarPicker",
  components: {
    VarButton: _e,
    VarPopup: wn
  },
  inheritAttrs: !1,
  props: l0,
  setup(e) {
    var n = B([]), r = R(() => Ye(e.optionHeight)), a = R(() => Ye(e.optionCount)), t = R(() => a.value * r.value / 2 - r.value / 2), o = R(() => a.value * r.value), l = [], i = (C, $) => {
      $.scrollEl = C;
    }, s = (C) => {
      k(e["onUpdate:show"], C);
    }, u = (C) => {
      var $ = r.value + t.value, z = t.value - C.column.texts.length * r.value;
      C.translate >= $ && (C.translate = $), C.translate <= z && (C.translate = z);
    }, d = (C, $) => {
      var {
        length: z
      } = C.column.texts;
      return $ = $ >= z ? z - 1 : $, $ = $ <= 0 ? 0 : $, $;
    }, v = (C) => {
      var $ = Math.round((t.value - C.translate) / r.value);
      return d(C, $);
    }, f = () => {
      var C = n.value.map((z) => z.column.texts[z.index]), $ = n.value.map((z) => z.index);
      return {
        texts: C,
        indexes: $
      };
    }, m = function(C, $, z, K) {
      K === void 0 && (K = !1);
      var J = t.value - d(C, $) * r.value;
      J === C.translate && (C.scrolling = !1, !K && I(C)), C.translate = J, C.duration = z;
    }, h = (C, $, z) => {
      C.translate += Math.abs($ / z) / 3e-3 * ($ < 0 ? -1 : 1);
    }, b = (C, $) => {
      $.touching = !0, $.scrolling = !1, $.duration = 0, $.translate = Co($.scrollEl);
    }, g = (C, $) => {
      if ($.touching) {
        var {
          clientY: z
        } = C.touches[0], K = $.prevY !== void 0 ? z - $.prevY : 0;
        $.prevY = z, $.translate += K, u($);
        var J = performance.now();
        J - $.momentumTime > Ql && ($.momentumTime = J, $.momentumPrevY = $.translate);
      }
    }, w = (C, $) => {
      $.touching = !1, $.scrolling = !0, $.prevY = void 0;
      var z = $.translate - $.momentumPrevY, K = performance.now() - $.momentumTime, J = Math.abs(z) >= d0 && K <= Ql;
      J && h($, z, K), $.index = v($), m($, $.index, J ? 1e3 : 200);
    }, V = (C) => {
      C.scrolling = !1, I(C);
    }, S = (C) => C.map(($, z) => {
      var K, J = Te($) ? {
        texts: $
      } : $, Y = {
        id: _l++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (K = J.initialIndex) != null ? K : 0,
        columnIndex: z,
        duration: 0,
        momentumTime: 0,
        column: J,
        scrollEl: null,
        scrolling: !1
      };
      return m(Y, Y.index, 0, !0), Y;
    }), T = (C) => {
      var $ = [];
      return E($, C, 0, !0), $;
    }, E = function(C, $, z, K) {
      if (K === void 0 && (K = !1), Te($) && $.length) {
        var J, Y = K && (J = e.cascadeInitialIndexes[C.length]) != null ? J : 0, j = {
          id: _l++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: Y,
          columnIndex: z,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: $.map((se) => se[e.textKey])
          },
          columns: $,
          scrollEl: null,
          scrolling: !1
        };
        C.push(j), m(j, j.index, 0, !0), E(C, j.columns[j.index].children, z + 1, K);
      }
    }, O = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), E(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, I = (C) => {
      var {
        cascade: $,
        onChange: z
      } = e;
      $ && O(C);
      var K = n.value.some((se) => se.scrolling);
      if (!K) {
        var {
          texts: J,
          indexes: Y
        } = f(), j = Y.every((se, q) => se === l[q]);
        j || (l = [...Y], k(z, J, Y));
      }
    }, y = () => {
      if (e.cascade) {
        var C = n.value.find(($) => $.scrolling);
        C && (C.translate = Co(C.scrollEl), C.index = v(C), m(C, C.index, 0, !0), C.scrolling = !1, O(C));
      } else
        n.value.forEach(($) => {
          $.translate = Co($.scrollEl), $.index = v($), m($, $.index, 0);
        });
    }, M = () => {
      y();
      var {
        texts: C,
        indexes: $
      } = f();
      l = [...$], k(e.onConfirm, C, $);
    }, D = () => {
      y();
      var {
        texts: C,
        indexes: $
      } = f();
      l = [...$], k(e.onCancel, C, $);
    };
    return oe(() => e.columns, (C) => {
      n.value = e.cascade ? T(Ki(C)) : S(Ki(C));
      var {
        indexes: $
      } = f();
      l = [...$];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: s0,
      classes: u0,
      pack: Xe,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Ue,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: b,
      handleTouchmove: g,
      handleTouchend: w,
      handleTransitionend: V,
      confirm: M,
      cancel: D,
      dt: ao
    };
  }
});
Hd.render = c0;
const Cr = Hd;
var sn;
function Da(e) {
  return new Promise((n) => {
    Da.close();
    var r = Te(e) ? {
      columns: e
    } : e, a = Le(r);
    a.dynamic = !0, a.teleport = "body", sn = a;
    var {
      unmountInstance: t
    } = nt(Cr, a, {
      onConfirm: (o, l) => {
        k(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, sn === a && (sn = null);
      },
      onCancel: (o, l) => {
        k(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, sn === a && (sn = null);
      },
      onClose: () => {
        k(a.onClose), n({
          state: "close"
        }), sn === a && (sn = null);
      },
      onClosed: () => {
        k(a.onClosed), t(), sn === a && (sn = null);
      },
      onRouteChange: () => {
        t(), sn === a && (sn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
Da.Component = Cr;
Da.install = function(e) {
  e.component(Cr.name, Cr);
};
Da.close = function() {
  if (sn != null) {
    var e = sn;
    sn = null, ze().then(() => {
      e.show = !1;
    });
  }
};
var vk = Cr;
function m0(e) {
  return ["linear", "circle"].includes(e);
}
var p0 = {
  mode: {
    type: String,
    default: "linear",
    validator: m0
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
  n: h0,
  classes: g0
} = _("progress"), y0 = ["viewBox"], b0 = ["cx", "cy", "r", "stroke-width"], w0 = ["cx", "cy", "r", "stroke-width"];
function C0(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [A(
        "div",
        {
          class: c(e.n("linear-block")),
          style: G({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (p(), P(
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
        )) : x("v-if", !0), A(
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
      ), e.label ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [Ce(
          re(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.mode === "circle" ? (p(), P(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), P(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: G({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (p(), P(
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
          b0
        )) : x("v-if", !0), A(
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
          w0
        )],
        14,
        y0
      )), e.label ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [Ce(
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
var Fd = Q({
  name: "VarProgress",
  props: p0,
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
      } = e, l = "0 0 " + Ye(a) + " " + Ye(a), i = L(o) > 100 ? 100 : Math.round(L(o)), s = (Ye(a) - Ye(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: h0,
      classes: g0,
      toSizeUnit: he,
      multiplySizeUnit: nn,
      linearProps: n,
      circleProps: r
    };
  }
});
Fd.render = C0;
const sa = Fd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var fk = sa, S0 = {
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
function xl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function es(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        xl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        xl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: ns,
  classes: k0
} = _("pull-refresh"), rs = 150;
function $0(e, n) {
  var r = ae("var-icon");
  return p(), P(
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
        style: G(e.controlStyle)
      },
      [Z(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: c(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
          "var-pull-refresh-cover": ""
        },
        null,
        8,
        ["name", "transition", "class"]
      )],
      6
      /* CLASS, STYLE */
    ), F(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Yd = Q({
  name: "VarPullRefresh",
  components: {
    VarIcon: Oe
  },
  props: S0,
  setup(e) {
    var n = B(0), r = B(null), a = B(null), t = B(0), o = B("-125%"), l = B("arrow-down"), i = B("default"), s = B(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var y = es(function* (M) {
        if (l.value !== M)
          return l.value = M, new Promise((D) => {
            window.setTimeout(D, rs);
          });
      });
      return function(D) {
        return y.apply(this, arguments);
      };
    }(), h = R(() => i.value !== "loading" && i.value !== "success" && !e.disabled), b = R(() => ({
      transform: "translate3d(0px, " + (je(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), g = R(() => Math.abs(2 * n.value)), w = R(() => i.value === "success"), V = (y) => {
      var M = "classList" in u ? u : document.body;
      M.classList[y](ns() + "--lock");
    }, S = (y) => {
      if (n.value === 0) {
        var {
          width: M
        } = a.value.getBoundingClientRect();
        n.value = -(M + M * 0.25);
      }
      v = y.touches[0].clientY, f = 0, d = kr(y.target);
    }, T = (y) => {
      if (h.value && !(d !== u && ct(d) > 0)) {
        var M = ct(u);
        if (!(M > 0)) {
          var D = M === 0, C = y.touches[0];
          f = C.clientY - v, D && f >= 0 && y.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = y.touches[0].clientY), D && o.value > n.value && V("add");
          var $ = (y.touches[0].clientY - t.value) / 2 + n.value;
          o.value = $ >= g.value ? g.value : $, m(o.value >= g.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, E = /* @__PURE__ */ function() {
      var y = es(function* () {
        h.value && (s.value = !0, o.value >= g.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = g.value * 0.3, k(e["onUpdate:modelValue"], !0), ze(() => {
          k(e.onRefresh);
        }), V("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, V("remove");
        }, L(e.animationDuration))), d = null);
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), O = () => {
      u = e.target ? ys(e.target, "PullRefresh") : kr(r.value);
    }, I = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    };
    return oe(() => e.modelValue, (y) => {
      y === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, I();
      }, L(e.successDuration)));
    }), tn(O), Kn(r, "touchmove", T), {
      n: ns,
      classes: k0,
      ICON_TRANSITION: rs,
      refreshStatus: i,
      freshNode: r,
      controlNode: a,
      touchStart: S,
      touchMove: T,
      touchEnd: E,
      iconName: l,
      controlStyle: b,
      isSuccess: w
    };
  }
});
Yd.render = $0;
const ua = Yd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var ck = ua, T0 = {
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
}, jd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function O0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = cn(jd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function P0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = fn(jd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: V0,
  classes: M0
} = _("radio");
function B0(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = De("ripple"), l = De("hover");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      Ne({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((p(), P(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? F(e.$slots, "checked-icon", {
          key: 0
        }, () => [Z(
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
        )]) : F(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [Z(
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
        )]), Z(
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
      }], [l, e.handleHovering, "desktop"]]), A(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), Z(
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
var Wd = Q({
  name: "VarRadio",
  directives: {
    Ripple: We,
    Hover: Ln
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  inheritAttrs: !1,
  props: T0,
  setup(e) {
    var n = B(!1), r = R(() => n.value === e.checkedValue), a = B(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = P0(), {
      hovering: l,
      handleHovering: i
    } = $r(), {
      form: s,
      bindForm: u
    } = On(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Tn(), h = (O) => {
      ze(() => {
        var {
          validateTrigger: I,
          rules: y,
          modelValue: M
        } = e;
        v(I, O, y, M);
      });
    }, b = (O) => {
      var {
        checkedValue: I,
        onChange: y
      } = e;
      t && n.value === I || (n.value = O, k(e["onUpdate:modelValue"], n.value), k(y, n.value), t == null || t.onToggle(I), h("onChange"));
    }, g = (O) => {
      var {
        disabled: I,
        readonly: y,
        uncheckedValue: M,
        checkedValue: D,
        onClick: C
      } = e;
      s != null && s.disabled.value || I || (k(C, O), !(s != null && s.readonly.value || y) && (a.value = !0, b(r.value ? M : D)));
    }, w = (O) => {
      var {
        checkedValue: I,
        uncheckedValue: y
      } = e;
      n.value = O === I ? I : y;
    }, V = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, S = () => f(e.rules, e.modelValue), T = (O) => {
      var {
        uncheckedValue: I,
        checkedValue: y
      } = e, M = ![I, y].includes(O);
      M && (O = r.value ? I : y), b(O);
    };
    oe(() => e.modelValue, (O) => {
      n.value = O;
    }, {
      immediate: !0
    });
    var E = {
      sync: w,
      validate: S,
      resetValidation: m,
      reset: V
    };
    return k(o, E), k(u, E), {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: V0,
      classes: M0,
      handleClick: g,
      toggle: T,
      reset: V,
      validate: S,
      resetValidation: m
    };
  }
});
Wd.render = B0;
const da = Wd;
da.install = function(e) {
  e.component(da.name, da);
};
var mk = da;
function E0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var I0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: E0
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
  n: N0,
  classes: D0
} = _("radio-group");
function A0(e, n) {
  var r = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), Z(
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
var Gd = Q({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: Je
  },
  props: I0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = O0(), {
      bindForm: t
    } = On(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Tn(), u = R(() => o.value), d = (g) => {
      ze(() => {
        var {
          validateTrigger: w,
          rules: V,
          modelValue: S
        } = e;
        l(w, g, V, S);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: w
      } = g;
      return w(e.modelValue);
    }), f = (g) => {
      k(e["onUpdate:modelValue"], g), k(e.onChange, g), d("onChange");
    }, m = () => i(e.rules, e.modelValue), h = () => {
      k(e["onUpdate:modelValue"], void 0), s();
    };
    oe(() => e.modelValue, v), oe(() => n.value, v);
    var b = {
      onToggle: f,
      validate: m,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return k(t, b), a(b), {
      errorMessage: o,
      n: N0,
      classes: D0,
      reset: h,
      validate: m,
      resetValidation: s
    };
  }
});
Gd.render = A0;
const va = Gd;
va.install = function(e) {
  e.component(va.name, va);
};
var pk = va, z0 = {
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
  n: tt
} = _("rate"), L0 = ["onClick"];
function R0(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = De("ripple"), l = De("hover");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), P(
        Ve,
        null,
        Fe(e.toNumber(e.count), (i) => ke((p(), P(
          "div",
          {
            key: i,
            style: G(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (s) => e.handleClick(i, s)
          },
          [Z(
            r,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(i).name,
              style: G({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          ), Z(
            a,
            {
              hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          L0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Z(
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
var qd = Q({
  name: "VarRate",
  components: {
    VarIcon: Oe,
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  directives: {
    Ripple: We,
    Hover: Ln
  },
  props: z0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = On(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Tn(), {
      hovering: i
    } = $r(), s = B(-1), u = (S) => {
      var {
        count: T,
        gap: E
      } = e;
      return {
        color: v(S).color,
        marginRight: S !== L(T) ? he(E) : 0
      };
    }, d = (S) => {
      var {
        name: T,
        color: E
      } = v(S);
      return {
        [tt("content")]: !0,
        [tt("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [tt("--error")]: a.value,
        [tt("--primary")]: T !== e.emptyIcon && !E
      };
    }, v = (S) => {
      var {
        modelValue: T,
        disabled: E,
        disabledColor: O,
        color: I,
        half: y,
        emptyColor: M,
        icon: D,
        halfIcon: C,
        emptyIcon: $
      } = e, z = I;
      return (E || n != null && n.disabled.value) && (z = O), S <= L(T) ? {
        color: z,
        name: D
      } : y && S <= L(T) + 0.5 ? {
        color: z,
        name: C
      } : {
        color: E || n != null && n.disabled.value ? O : M,
        name: $
      };
    }, f = (S, T) => {
      if (e.half) {
        var {
          offsetWidth: E
        } = T.target;
        T.offsetX <= Math.floor(E / 2) && (S -= 0.5);
      }
      k(e["onUpdate:modelValue"], S);
    }, m = () => o(e.rules, L(e.modelValue)), h = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), b = (S, T) => {
      var {
        readonly: E,
        disabled: O,
        onChange: I
      } = e;
      E || O || n != null && n.disabled.value || n != null && n.readonly.value || (f(S, T), k(I, S), h());
    }, g = (S) => (T) => {
      s.value = S, i.value = T;
    }, w = () => {
      k(e["onUpdate:modelValue"], 0), l();
    }, V = {
      reset: w,
      validate: m,
      resetValidation: l
    };
    return k(r, V), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: b,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: g,
      reset: w,
      validate: m,
      resetValidation: l,
      toSizeUnit: he,
      toNumber: L,
      n: tt
    };
  }
});
qd.render = R0;
const fa = qd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var hk = fa;
function U0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var H0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: U0
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
}, F0 = (e) => (za(""), e = e(), La(), e), Y0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, j0 = /* @__PURE__ */ F0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), W0 = [j0];
function G0(e, n) {
  return p(), P("svg", Y0, W0);
}
var Xd = Q({});
Xd.render = G0;
const q0 = Xd;
var X0 = (e) => (za(""), e = e(), La(), e), K0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, Z0 = /* @__PURE__ */ X0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), J0 = [Z0];
function Q0(e, n) {
  return p(), P("svg", K0, J0);
}
var Kd = Q({});
Kd.render = Q0;
const _0 = Kd;
var x0 = (e) => (za(""), e = e(), La(), e), e1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, n1 = /* @__PURE__ */ x0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), r1 = [n1];
function a1(e, n) {
  return p(), P("svg", e1, r1);
}
var Zd = Q({});
Zd.render = a1;
const t1 = Zd;
var {
  n: o1,
  classes: i1
} = _("result");
function l1(e, n) {
  return p(), P(
    Ve,
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
        style: G({
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
        style: G({
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
        style: G({
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
var Jd = Q({
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
      n: o1,
      classes: i1,
      toNumber: L
    };
  }
});
Jd.render = l1;
const s1 = Jd;
var u1 = (e) => (za(""), e = e(), La(), e), d1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, v1 = /* @__PURE__ */ u1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), f1 = [v1];
function c1(e, n) {
  return p(), P("svg", d1, f1);
}
var Qd = Q({});
Qd.render = c1;
const m1 = Qd;
var p1 = (e) => (za(""), e = e(), La(), e), h1 = {
  viewBox: "-4 -4 32 32"
}, g1 = /* @__PURE__ */ p1(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), y1 = [g1];
function b1(e, n) {
  return p(), P("svg", h1, y1);
}
var _d = Q({});
_d.render = b1;
const w1 = _d;
var {
  n: C1,
  classes: S1
} = _("result");
function k1(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [F(e.$slots, "image", {}, () => [e.type ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: G({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(p(), ge(
          et(e.type),
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
    )) : x("v-if", !0)]), F(e.$slots, "title", {}, () => [e.title ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      re(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var xd = Q({
  name: "VarResult",
  components: {
    Info: q0,
    Success: s1,
    Warning: t1,
    Error: _0,
    Question: m1,
    Empty: w1
  },
  props: H0,
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
      n: C1,
      classes: S1,
      toNumber: L,
      toPxNum: Ye,
      toSizeUnit: he,
      circleSize: n,
      borderSize: r
    };
  }
});
xd.render = k1;
const ca = xd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var gk = ca;
function $1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function T1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var O1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: $1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: T1
  },
  onClick: U()
}, {
  n: P1,
  classes: V1
} = _("row");
function M1(e, n) {
  return p(), P(
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
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var ev = Q({
  name: "VarRow",
  props: O1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = qm(), t = R(() => {
      var s = Ye(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      k(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return oe(() => a.value, o), oe(() => e.gutter, o), r(i), {
      n: P1,
      classes: V1,
      average: t,
      handleClick: l,
      padStartFlex: Gt
    };
  }
});
ev.render = M1;
const ma = ev;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var yk = ma;
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, mi.apply(this, arguments);
}
function B1(e) {
  return ["left", "right", "center"].includes(e);
}
var E1 = mi({
  modelValue: {
    default: void 0
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
  readonly: {
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
    validator: B1
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
  onClose: U(),
  onChange: U(),
  onClear: U(),
  "onUpdate:modelValue": U()
}, Ke(Hi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: I1,
  classes: N1
} = _("select"), D1 = {
  key: 1
};
function A1(e, n) {
  var r = ae("var-chip"), a = ae("var-icon"), t = ae("var-field-decorator"), o = ae("var-menu"), l = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [Z(
      o,
      {
        class: c(e.n("menu")),
        "var-select-cover": "",
        "same-width": "",
        "offset-y": e.offsetY,
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
        placement: e.placement,
        "default-style": !1,
        show: e.isFocus,
        "onUpdate:show": n[1] || (n[1] = (i) => e.isFocus = i),
        onClose: e.handleBlur
      },
      {
        menu: ve(() => [A(
          "div",
          {
            ref: "menuEl",
            class: c(e.classes(e.n("scroller"), e.n("--scroller-" + e.variant), e.n("$-elevation--3"), [!e.hint, e.n("--scroller-non-hint")]))
          },
          [F(e.$slots, "default")],
          2
          /* CLASS */
        )]),
        default: ve(() => [Z(
          t,
          $t(ro({
            value: e.modelValue,
            size: e.size,
            variant: e.variant,
            placeholder: e.placeholder,
            line: e.line,
            hint: e.hint,
            textColor: e.textColor,
            focusColor: e.focusColor,
            blurColor: e.blurColor,
            isFocus: e.isFocus,
            errorMessage: e.errorMessage,
            formDisabled: e.formDisabled,
            disabled: e.disabled,
            clearable: e.clearable,
            cursor: e.cursor,
            onClick: e.handleClick,
            onClear: e.handleClear
          })),
          {
            "prepend-icon": ve(() => [F(e.$slots, "prepend-icon")]),
            "append-icon": ve(() => [F(e.$slots, "append-icon")]),
            default: ve(() => [A(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: G({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [A(
                "div",
                {
                  class: c(e.n("label"))
                },
                [e.isEmptyModelValue ? x("v-if", !0) : F(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), P(
                  Ve,
                  {
                    key: 0
                  },
                  [e.chip ? (p(), P(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(p(!0), P(
                      Ve,
                      null,
                      Fe(e.labels, (i) => (p(), ge(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = kn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: ve(() => [Ce(
                            re(i),
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
                  )) : (p(), P(
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
                )) : (p(), P(
                  "span",
                  D1,
                  re(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), F(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [Z(
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
            )]),
            _: 3
            /* FORWARDED */
          },
          16
          /* FULL_PROPS */
        )]),
        _: 3
        /* FORWARDED */
      },
      8,
      ["class", "offset-y", "disabled", "placement", "show", "onClose"]
    ), Z(
      l,
      {
        "error-message": e.errorMessage,
        onClick: n[2] || (n[2] = kn(() => {
        }, ["stop"]))
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var nv = Q({
  name: "VarSelect",
  components: {
    VarIcon: Oe,
    VarMenu: Xn,
    VarChip: pr,
    VarFieldDecorator: $d,
    VarFormDetails: Je
  },
  props: E1,
  setup(e) {
    var n = B(!1), r = R(() => e.multiple), a = R(() => e.focusColor), t = B(""), o = B([]), l = R(() => dr(e.modelValue)), i = R(() => e.disabled || e.readonly ? "" : "pointer"), s = B(0), {
      bindForm: u,
      form: d
    } = On(), {
      length: v,
      options: f,
      bindOptions: m
    } = Wb(), {
      errorMessage: h,
      validateWithTrigger: b,
      validate: g,
      // expose
      resetValidation: w
    } = Tn(), V = B(null), S = R(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), T = () => {
      var {
        multiple: H,
        modelValue: N
      } = e;
      if (H) {
        var W = N;
        o.value = W.map(I);
      }
      !H && !dr(N) && (t.value = I(N)), !H && dr(N) && (t.value = "");
    }, E = (H) => {
      ze(() => {
        var {
          validateTrigger: N,
          rules: W,
          modelValue: ne
        } = e;
        b(N, H, W, ne);
      });
    }, O = (H) => {
      var {
        value: N,
        label: W
      } = H;
      return N.value != null ? N.value : W.value;
    }, I = (H) => {
      var N, W, ne = f.find((le) => {
        var {
          value: de
        } = le;
        return de.value === H;
      });
      return ne || (ne = f.find((le) => {
        var {
          label: de
        } = le;
        return de.value === H;
      })), (N = (W = ne) == null ? void 0 : W.label.value) != null ? N : "";
    }, y = () => {
      var {
        disabled: H,
        readonly: N,
        onFocus: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || N || (s.value = Ye(e.offsetY), n.value = !0, k(W), E("onFocus"));
    }, M = () => {
      var {
        disabled: H,
        readonly: N,
        onBlur: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || N || (k(W), E("onBlur"));
    }, D = (H) => {
      var {
        disabled: N,
        readonly: W,
        multiple: ne,
        onChange: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || N || W)) {
        var de = ne ? f.filter((be) => {
          var {
            selected: Pe
          } = be;
          return Pe.value;
        }).map(O) : O(H);
        k(e["onUpdate:modelValue"], de), k(le, de), E("onChange"), !ne && (n.value = !1);
      }
    }, C = () => {
      var {
        disabled: H,
        readonly: N,
        multiple: W,
        clearable: ne,
        onClear: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || H || N || !ne)) {
        var de = W ? [] : void 0;
        k(e["onUpdate:modelValue"], de), k(le, de), E("onClear");
      }
    }, $ = (H) => {
      var {
        disabled: N,
        onClick: W
      } = e;
      d != null && d.disabled.value || N || (k(W, H), E("onClick"));
    }, z = (H) => {
      var {
        disabled: N,
        readonly: W,
        modelValue: ne,
        onClose: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || N || W)) {
        var de = ne, be = f.find((on) => {
          var {
            label: ee
          } = on;
          return ee.value === H;
        }), Pe = de.filter((on) => {
          var ee;
          return on !== ((ee = be.value.value) != null ? ee : be.label.value);
        });
        k(e["onUpdate:modelValue"], Pe), k(le, Pe), E("onClose");
      }
    }, K = () => {
      var {
        multiple: H,
        modelValue: N
      } = e;
      if (H) {
        var W = N;
        f.forEach((ne) => ne.sync(W.includes(O(ne))));
      } else
        f.forEach((ne) => ne.sync(N === O(ne)));
      T();
    }, J = () => {
      s.value = Ye(e.offsetY), n.value = !0;
    }, Y = () => {
      n.value = !1;
    }, j = () => g(e.rules, e.modelValue), se = () => {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), w();
    };
    oe(() => e.multiple, () => {
      var {
        multiple: H,
        modelValue: N
      } = e;
      H && !Te(N) && $n("Select", "The modelValue must be an array when multiple is true");
    }), oe(() => e.modelValue, K, {
      deep: !0
    }), oe(() => v.value, K);
    var q = {
      multiple: r,
      focusColor: a,
      computeLabel: T,
      onSelect: D,
      reset: se,
      validate: j,
      resetValidation: w
    };
    return m(q), k(u, q), {
      offsetY: s,
      isFocus: n,
      errorMessage: h,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: V,
      placement: S,
      cursor: i,
      n: I1,
      classes: N1,
      handleFocus: y,
      handleBlur: M,
      handleClear: C,
      handleClick: $,
      handleClose: z,
      reset: se,
      validate: j,
      resetValidation: w,
      focus: J,
      blur: Y
    };
  }
});
nv.render = A1;
const pa = nv;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var bk = pa, z1 = {
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
  n: L1,
  classes: R1
} = _("skeleton");
function U1(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), P(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: G({
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), P(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: G({
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), P(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (p(), P(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: G({
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
          )) : x("v-if", !0), (p(!0), P(
            Ve,
            null,
            Fe(e.toNumber(e.rows), (r, a) => (p(), P(
              "div",
              {
                class: c(e.n("row")),
                key: r,
                style: G({
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
    )) : x("v-if", !0), e.loading && e.fullscreen ? (p(), P(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: G({
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
var rv = Q({
  name: "VarSkeleton",
  props: z1,
  setup() {
    return {
      n: L1,
      classes: R1,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
rv.render = U1;
const ha = rv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var wk = ha;
function H1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Re;
(function(e) {
  e.First = "1", e.Second = "2";
})(Re || (Re = {}));
var F1 = {
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
    validator: H1
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
  direction: {
    type: String,
    default: "horizontal"
  },
  rules: {
    type: Array
  },
  onChange: U(),
  onStart: U(),
  onEnd: U(),
  "onUpdate:modelValue": U()
}, {
  n: as,
  classes: Y1
} = _("slider"), j1 = ["onTouchstart"];
function W1(e, n) {
  var r = ae("var-hover-overlay"), a = ae("var-form-details"), t = De("hover");
  return p(), P(
    "div",
    {
      class: c(e.n(e.direction))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [A(
        "div",
        {
          class: c(e.n(e.direction + "-track"))
        },
        [A(
          "div",
          {
            class: c(e.n(e.direction + "-track-background")),
            style: G({
              background: e.trackColor,
              height: e.isVertical ? "100%" : e.multiplySizeUnit(e.trackHeight),
              width: e.isVertical ? e.multiplySizeUnit(e.trackHeight) : "100%"
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: c(e.n(e.direction + "-track-fill")),
            style: G(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), P(
        Ve,
        null,
        Fe(e.thumbList, (o) => (p(), P(
          "div",
          {
            class: c(e.n(e.direction + "-thumb")),
            key: o.enumValue,
            style: G(e.thumbStyle(o)),
            onTouchstart: kn((l) => e.start(l, o.enumValue), ["stop"])
          },
          [F(e.$slots, "button", {
            currentValue: o.text
          }, () => [ke(A(
            "div",
            {
              class: c(e.n(e.direction + "-thumb-block")),
              style: G({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), [[t, (l) => e.hover(l, o), "desktop"]]), A(
            "div",
            {
              class: c(e.classes(e.n(e.direction + "-thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n(e.direction + "-thumb-ripple--active")])),
              style: G({
                background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
              })
            },
            [Z(
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
          ), A(
            "div",
            {
              class: c(e.classes(e.n(e.direction + "-thumb-label"), [e.showLabel(o.enumValue), e.n(e.direction + "-thumb-label--active")])),
              style: G({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [A(
              "span",
              null,
              re(o.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          j1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Z(
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
var av = Q({
  name: "VarSlider",
  components: {
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  directives: {
    Hover: Ln
  },
  props: F1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = On(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Tn(), {
      hovering: i,
      handleHovering: s
    } = $r(), {
      hovering: u,
      handleHovering: d
    } = $r(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = B(null), b = B(0), g = B(!1), w = Le({
      [Re.First]: f(),
      [Re.Second]: f()
    }), V = R(() => L(e.max) - L(e.min)), S = R(() => b.value / V.value * L(e.step)), T = R(() => {
      var {
        modelValue: ee,
        range: ue
      } = e, ye = [];
      return ue && Te(ee) ? ye = [{
        value: z(ee[0]),
        enumValue: Re.First,
        text: K(ee[0]),
        hovering: it(i),
        handleHovering: s
      }, {
        value: z(ee[1]),
        enumValue: Re.Second,
        text: K(ee[1]),
        hovering: it(u),
        handleHovering: d
      }] : an(ee) && (ye = [{
        value: z(ee),
        enumValue: Re.First,
        text: K(ee),
        hovering: it(i),
        handleHovering: s
      }]), ye;
    }), E = R(() => {
      var {
        activeColor: ee,
        range: ue,
        modelValue: ye
      } = e, Ae = ue && Te(ye) ? z(Math.min(ye[0], ye[1])) : 0, Me = ue && Te(ye) ? z(Math.max(ye[0], ye[1])) - Ae : z(ye);
      return y.value ? {
        left: "0px",
        height: Me + "%",
        bottom: Ae + "%",
        background: ee
      } : {
        top: "0px",
        width: Me + "%",
        left: Ae + "%",
        background: ee
      };
    }), O = R(() => e.disabled || (r == null ? void 0 : r.disabled.value)), I = R(() => e.readonly || (r == null ? void 0 : r.readonly.value)), y = R(() => e.direction === "vertical"), M, D = (ee) => {
      var ue = ee.currentTarget;
      return ue ? y.value ? b.value - (ee.clientY - ue.getBoundingClientRect().top) : ee.clientX - Wv(ue) : 0;
    }, C = (ee) => {
      var ue = y.value ? "bottom" : "left";
      return {
        [ue]: ee.value + "%",
        zIndex: w[ee.enumValue].active ? 1 : void 0
      };
    }, $ = (ee) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[ee].active, z = (ee) => {
      var {
        min: ue,
        max: ye
      } = e;
      return ee < L(ue) ? 0 : ee > L(ye) ? 100 : (ee - L(ue)) / V.value * 100;
    }, K = (ee) => {
      if (!an(ee))
        return 0;
      var ue = ee;
      ue < Number(e.min) && (ue = Number(e.min)), ue > Number(e.max) && (ue = Number(e.max));
      var ye = parseInt("" + ue, 10) === ue;
      return ye ? ue : L(ue.toPrecision(5));
    }, J = (ee, ue) => {
      O.value || ue.handleHovering(ee);
    }, Y = (ee, ue) => {
      var ye = [], {
        step: Ae,
        range: Me,
        modelValue: Ie,
        onChange: Br,
        min: rt
      } = e, ie = L(Ae), we = Math.round(ee / S.value), me = we * ie + L(rt), Se = w[ue].percentValue * ie + L(rt);
      if (w[ue].percentValue = we, Me && Te(Ie) && (ye = ue === Re.First ? [me, Ie[1]] : [Ie[0], me]), Se !== me) {
        var $e = Me ? ye.map((He) => K(He)) : K(me);
        k(Br, $e), k(e["onUpdate:modelValue"], $e), m();
      }
    }, j = (ee) => {
      if (!e.range)
        return Re.First;
      var ue = w[Re.First].percentValue * S.value, ye = w[Re.Second].percentValue * S.value, Ae = Math.abs(ee - ue), Me = Math.abs(ee - ye);
      return Ae <= Me ? Re.First : Re.Second;
    }, se = () => {
      document.addEventListener("touchmove", N, {
        passive: !1
      }), document.addEventListener("touchend", W), document.addEventListener("touchcancel", W);
    }, q = () => {
      document.removeEventListener("touchmove", N), document.removeEventListener("touchend", W), document.removeEventListener("touchcancel", W);
    }, H = (ee, ue) => {
      if (b.value || (b.value = h.value.offsetWidth), O.value || (w[ue].active = !0), M = ue, se(), !(O.value || I.value)) {
        k(e.onStart), g.value = !0;
        var {
          clientX: ye,
          clientY: Ae
        } = ee.touches[0];
        w[ue].startPosition = y.value ? Ae : ye;
      }
    }, N = (ee) => {
      if (ee.preventDefault(), !(O.value || I.value || !g.value)) {
        var {
          startPosition: ue,
          currentOffset: ye
        } = w[M], {
          clientX: Ae,
          clientY: Me
        } = ee.touches[0], Ie = (y.value ? ue - Me : Ae - ue) + ye;
        Ie <= 0 ? Ie = 0 : Ie >= b.value && (Ie = b.value), Y(Ie, M);
      }
    }, W = () => {
      q();
      var {
        range: ee,
        modelValue: ue,
        onEnd: ye,
        step: Ae,
        min: Me
      } = e;
      if (O.value || (w[M].active = !1), !(O.value || I.value)) {
        var Ie = [];
        w[M].currentOffset = w[M].percentValue * S.value;
        var Br = w[M].percentValue * L(Ae) + L(Me);
        ee && Te(ue) && (Ie = M === Re.First ? [Br, ue[1]] : [ue[0], Br]), k(ye, ee ? Ie : Br), g.value = !1;
      }
    }, ne = (ee) => {
      if (!(O.value || I.value) && !ee.target.closest("." + as("thumb"))) {
        var ue = D(ee), ye = j(ue);
        M = ye, Y(ue, ye), W();
      }
    }, le = () => {
      var ee = L(e.step);
      return isNaN(ee) ? (xi("Slider", 'type of prop "step" should be Number'), !1) : ee < 0 ? (xi("Slider", '"step" should be > 0'), !1) : !0;
    }, de = () => {
      var {
        range: ee,
        modelValue: ue
      } = e;
      return ee && !Te(ue) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !ee && Te(ue) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : ee && Te(ue) && ue.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, be = function(ee, ue) {
      ee === void 0 && (ee = e.modelValue), ue === void 0 && (ue = L(e.step));
      var ye = (Ae) => {
        var {
          min: Me,
          max: Ie
        } = e;
        return Ae < L(Me) ? 0 : Ae > L(Ie) ? V.value / ue : (Ae - L(Me)) / ue;
      };
      e.range && Te(ee) ? (w[Re.First].percentValue = ye(ee[0]), w[Re.First].currentOffset = w[Re.First].percentValue * S.value, w[Re.Second].percentValue = ye(ee[1]), w[Re.Second].currentOffset = w[Re.Second].percentValue * S.value) : an(ee) && (w[Re.First].currentOffset = ye(ee) * S.value);
    }, Pe = () => {
      var ee = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], ee), l();
    }, on = {
      reset: Pe,
      validate: v,
      resetValidation: l
    };
    return k(n, on), oe([() => e.modelValue, () => e.step], (ee) => {
      var [ue, ye] = ee;
      !le() || !de() || g.value || be(ue, L(ye));
    }), oe(b, () => be()), tn(() => {
      !le() || !de() || (b.value = h.value[y.value ? "offsetHeight" : "offsetWidth"]);
    }), Ct(() => {
      q();
    }), {
      n: as,
      classes: Y1,
      Thumbs: Re,
      sliderEl: h,
      getFillStyle: E,
      isDisabled: O,
      isVertical: y,
      thumbStyle: C,
      errorMessage: a,
      thumbsProps: w,
      thumbList: T,
      hover: J,
      multiplySizeUnit: nn,
      toNumber: L,
      showLabel: $,
      start: H,
      move: N,
      end: W,
      click: ne
    };
  }
});
av.render = W1;
const ga = av;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Ck = ga;
function pi() {
  return pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, pi.apply(this, arguments);
}
function G1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function q1(e) {
  return ji.includes(e);
}
var tv = {
  type: {
    type: String,
    validator: q1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: G1
  },
  // content内容
  content: {
    type: [String, Function, Object]
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
  loadingType: Ke(lr, "type"),
  loadingSize: Ke(lr, "size"),
  loadingRadius: Ke(lr, "radius"),
  loadingColor: pi({}, Ke(lr, "color"), {
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
  n: X1,
  classes: K1
} = _("snackbar"), Z1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function J1(e, n) {
  var r = ae("var-icon"), a = ae("var-loading");
  return ke((p(), P(
    "div",
    {
      class: c(e.n()),
      style: G({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: G({
          zIndex: e.zIndex
        })
      },
      [A(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [F(e.$slots, "default", {}, () => [Ce(
          re(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c([e.n("icon")])
        },
        [F(e.$slots, "icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (p(), ge(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : x("v-if", !0), e.type === "loading" ? (p(), ge(
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
        )) : x("v-if", !0), F(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Sr, e.show]]);
}
var ov = Q({
  name: "VarSnackbarCore",
  components: {
    VarLoading: En,
    VarIcon: Oe
  },
  props: tv,
  setup(e) {
    var n = B(null), {
      zIndex: r
    } = Vt(() => e.show, 1);
    io(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? Z1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return oe(() => e.show, (l) => {
      l ? (k(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), k(e.onClose));
    }), oe(() => e._update, () => {
      clearTimeout(n.value), o();
    }), tn(() => {
      e.show && (k(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: ji,
      n: X1,
      classes: K1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
ov.render = J1;
const iv = ov;
var {
  n: Q1
} = _("snackbar");
function _1(e, n) {
  var r = ae("var-snackbar-core");
  return p(), ge(
    Aa,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [Z(
      Ue,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [Z(
          r,
          Ne(e.$props, {
            class: e.n("transition")
          }),
          {
            icon: ve(() => [F(e.$slots, "icon")]),
            action: ve(() => [F(e.$slots, "action")]),
            default: ve(() => [F(e.$slots, "default", {}, () => [Ce(
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
var lv = Q({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: iv
  },
  props: tv,
  setup() {
    var {
      disabled: e
    } = oo();
    return {
      n: Q1,
      disabled: e
    };
  }
});
lv.render = _1;
const ya = lv;
function bt() {
  return bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, bt.apply(this, arguments);
}
function x1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var ji = ["loading", "success", "warning", "info", "error"], ts = 0, hi = !1, sv, Qa = !1, uv = {
  type: void 0,
  content: "",
  icon: "",
  action: "",
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
}, Sn = Le([]), Wi = uv, ew = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, $o = (e) => () => Tt(e) ? e() : e, nw = {
  setup() {
    return () => {
      var e = Sn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Qa && (a.position = "top");
        var l = Qa ? "relative" : "absolute", i = bt({
          position: l
        }, lw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: $o(s),
          icon: $o(u),
          action: $o(d)
        };
        return Z(iv, Ne(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Z(Rv, Ne(ew, {
        style: {
          zIndex: hn.zIndex
        },
        onAfterEnter: rw,
        onAfterLeave: aw
      }), x1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Qn = function(e) {
  var n = ow(e), r = Le(bt({}, Wi, n));
  r.show = !0, hi || (hi = !0, sv = nt(nw).unmountInstance);
  var {
    length: a
  } = Sn, t = {
    id: ts++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Qa)
    tw(t);
  else {
    var o = "update-" + ts;
    iw(r, o);
  }
  return {
    clear() {
      !Qa && Sn.length ? Sn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
ji.forEach((e) => {
  Qn[e] = (n) => (wi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Qn(n));
});
Qn.install = function(e) {
  e.component(ya.name, ya);
};
Qn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Qa && (Sn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Qa = e);
};
Qn.clear = function() {
  Sn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Qn.setDefaultOptions = function(e) {
  Wi = e;
};
Qn.resetDefaultOptions = function() {
  Wi = uv;
};
Qn.Component = ya;
function rw(e) {
  var n = e.getAttribute("data-id"), r = Sn.find((a) => a.id === L(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function aw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = Sn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed));
  var a = Sn.every((t) => t.animationEnd);
  a && (k(sv), Sn = Le([]), hi = !1);
}
function tw(e) {
  Sn.push(e);
}
function ow(e) {
  return e === void 0 && (e = {}), je(e) ? {
    content: e
  } : e;
}
function iw(e, n) {
  var [r] = Sn;
  r.reactiveSnackOptions = bt({}, r.reactiveSnackOptions, e), r._update = n;
}
function lw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Sk = ya;
const gi = Qn;
var dv = (e) => ["mini", "small", "normal", "large"].includes(e), sw = (e) => dv(e) || Te(e) || an(e) || je(e), uw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), dw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), vw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: sw
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
    validator: uw
  },
  align: {
    type: String,
    validator: dw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function pn(e) {
  return "calc(" + e + " / 2)";
}
function fw(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = pn(e) + " " + n + " " + pn(e) + " 0" : i = pn(e) + " 0" : t === "space-around" ? i = pn(e) + " " + pn(n) : t === "space-between" && (o === 0 ? i = pn(e) + " " + pn(n) + " " + pn(e) + " 0" : o === l ? i = pn(e) + " 0 " + pn(e) + " " + pn(n) : i = pn(e) + " " + pn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: To,
  classes: cw
} = _("space");
const ba = Q({
  name: "VarSpace",
  props: vw,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Te(t) ? t.map(he) : [he(t), he(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = k(r.default)) != null ? t : [], f = dv(d), [m, h] = a(d, f);
      v = Os(v);
      var b = v.length - 1, g = v.map((w, V) => {
        var S = fw(m, h, {
          direction: u,
          justify: l,
          index: V,
          lastIndex: b
        });
        return Z("div", {
          style: {
            margin: S
          }
        }, [w]);
      });
      return Z("div", {
        class: cw(To(), To("$--box"), [o, To("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Gt(l),
          alignItems: Gt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [g]);
    };
  }
});
ba.install = function(e) {
  e.component(ba.name, ba);
};
var kk = ba, mw = {
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
}, vv = Symbol("STEPS_BIND_STEP_KEY");
function pw() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = cn(vv);
  return {
    length: n,
    step: r,
    bindStep: e
  };
}
function hw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn(vv);
  return r || $n("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: gw,
  classes: yw
} = _("step"), bw = {
  key: 3
};
function ww(e, n) {
  var r = ae("var-icon");
  return p(), P(
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
            style: G({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (p(), ge(
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
          )) : e.isCurrent && e.currentIcon ? (p(), ge(
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
          )) : e.inactiveIcon ? (p(), ge(
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
          )) : (p(), P(
            "span",
            bw,
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
          [F(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? x("v-if", !0) : (p(), P(
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
var fv = Q({
  name: "VarStep",
  components: {
    VarIcon: Oe
  },
  props: mw,
  setup() {
    var e = B(null), n = B(""), r = B(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = hw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = R(() => l.value === a.value), m = R(() => a.value !== -1 && l.value > a.value), h = {
      index: a
    }, b = () => v(a.value), g = (w) => {
      d.value === "horizontal" && (e.value = w);
    };
    return o(h), oe(i, (w) => {
      if (r.value = w - 1 === a.value, e.value) {
        var V = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + V + "px";
      }
    }), {
      n: gw,
      classes: yw,
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
fv.render = ww;
const wa = fv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var $k = wa;
function Cw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Sw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Cw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: kw
} = _("steps");
function $w(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n()),
      style: G({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var cv = Q({
  name: "VarSteps",
  props: Sw,
  setup(e) {
    var n = R(() => e.active), r = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      length: o,
      bindStep: l
    } = pw(), i = (u) => {
      k(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: kw
    };
  }
});
cv.render = $w;
const Ca = cv;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var Tk = Ca, Tw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Ow
} = _("style-provider"), Pw = Q({
  name: "VarStyleProvider",
  props: Tw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => fs(e.tag, {
      class: Ow(),
      style: $s(e.styleVars)
    }, k(r.default));
  }
});
const Sa = Pw;
var Oo = [];
function wt(e) {
  Oo.forEach((r) => document.documentElement.style.removeProperty(r)), Oo.length = 0;
  var n = $s(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Oo.push(a);
  });
}
wt.Component = Sa;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
wt.install = function(e) {
  e.component(Sa.name, Sa);
};
var Ok = Sa, Vw = {
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
  n: Mw,
  classes: Bw
} = _("switch");
function Ew(e, n) {
  var r = ae("var-loading"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = De("ripple"), l = De("hover");
  return ke((p(), P(
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
        style: G(e.styleComputed.switch)
      },
      [A(
        "div",
        {
          style: G(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), ke((p(), P(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: G(e.styleComputed.ripple)
        },
        [A(
          "div",
          {
            style: G(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (p(), ge(
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
        ), Z(
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
    ), Z(
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
  )), [[l, e.hover, "desktop"]]);
}
var mv = Q({
  name: "VarSwitch",
  components: {
    VarLoading: En,
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  directives: {
    Ripple: We,
    Hover: Ln
  },
  props: Vw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = On(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Tn(), {
      hovering: i,
      handleHovering: s
    } = $r(), u = () => o(e.rules, e.modelValue), d = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = R(() => {
      var {
        size: w,
        modelValue: V,
        color: S,
        closeColor: T,
        loadingColor: E,
        activeValue: O
      } = e;
      return {
        handle: {
          width: nn(w),
          height: nn(w),
          backgroundColor: V === O ? S : T,
          color: E
        },
        ripple: {
          left: V === O ? nn(w, 0.5) : "-" + nn(w, 0.5),
          color: V === O ? S : T || "#999",
          width: nn(w, 2),
          height: nn(w, 2)
        },
        track: {
          height: nn(w, 0.72),
          width: nn(w, 1.9),
          borderRadius: nn(w, 2 / 3),
          filter: V === O || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === O ? S : T
        },
        switch: {
          height: nn(w, 1.2),
          width: nn(w, 2)
        }
      };
    }), f = R(() => {
      var {
        size: w = "5.333vw"
      } = e;
      return nn(w, 0.4);
    }), m = (w) => {
      var {
        onClick: V,
        onChange: S,
        disabled: T,
        loading: E,
        readonly: O,
        modelValue: I,
        activeValue: y,
        inactiveValue: M,
        "onUpdate:modelValue": D
      } = e;
      if (k(V, w), !(T || E || O || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var C = I === y ? M : y;
        k(S, C), k(D, C), d();
      }
    }, h = (w) => {
      e.disabled || r != null && r.disabled.value || s(w);
    }, b = () => {
      k(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, g = {
      reset: b,
      validate: u,
      resetValidation: l
    };
    return k(n, g), {
      n: Mw,
      classes: Bw,
      switchActive: m,
      hovering: i,
      hover: h,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
mv.render = Ew;
const ka = mv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Pk = ka, Iw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, pv = Symbol("TABS_BIND_TAB_KEY");
function Nw() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = cn(pv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Dw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = fn(pv);
  return n || $n("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Rt,
  classes: Aw
} = _("tab");
function zw(e, n) {
  var r = De("ripple");
  return ke((p(), P(
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
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var hv = Q({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: Iw,
  setup(e) {
    var n = B(null), r = R(() => e.name), a = R(() => e.disabled), t = R(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = Dw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: h
    } = l, b = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(b);
    var g = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : g() ? d.value : v.value, V = () => e.disabled ? Rt("$-tab--disabled") : g() ? Rt("$-tab--active") : Rt("$-tab--inactive"), S = (T) => {
      var {
        disabled: E,
        name: O,
        onClick: I
      } = e;
      E || (k(I, O ?? o.value, T), s(b));
    };
    return oe(() => e.name, h), oe(() => e.disabled, h), {
      n: Rt,
      classes: Aw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: V,
      handleClick: S
    };
  }
});
hv.render = zw;
const $a = hv;
$a.install = function(e) {
  e.component($a.name, $a);
};
var Vk = $a, gv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Lw() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = cn(gv);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Rw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = fn(gv);
  return n || $n("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Uw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Hw,
  classes: Fw
} = _("tab-item");
function Yw(e, n) {
  var r = ae("var-swipe-item");
  return p(), ge(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [F(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var yv = Q({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Gn
  },
  props: Uw,
  setup(e) {
    var n = B(!1), r = R(() => e.name), {
      index: a,
      bindTabsItems: t
    } = Rw(), o = (i) => {
      n.value = i;
    }, l = {
      index: a,
      name: r,
      setCurrent: o
    };
    return t(l), {
      n: Hw,
      classes: Fw,
      current: n
    };
  }
});
yv.render = Yw;
const Ta = yv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Mk = Ta, jw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: Ww,
  classes: Gw
} = _("table");
function qw(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
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
          style: G({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [F(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var bv = Q({
  name: "VarTable",
  props: jw,
  setup() {
    return {
      toSizeUnit: he,
      n: Ww,
      classes: Gw,
      formatElevation: mn
    };
  }
});
bv.render = qw;
const Oa = bv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Bk = Oa;
function os(e) {
  return ["horizontal", "vertical"].includes(e);
}
function Xw(e) {
  return ["auto", "always"].includes(e);
}
function Kw(e) {
  return ["normal", "reverse"].includes(e);
}
var Zw = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: os
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: os
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
    validator: Xw
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: Kw
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Ke(jt, "cssMode"),
  stickyZIndex: Ke(jt, "zIndex"),
  offsetTop: Ke(jt, "offsetTop"),
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
};
function is(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ls(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        is(o, a, t, l, i, "next", s);
      }
      function i(s) {
        is(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Jw,
  classes: Qw
} = _("tabs");
function _w(e, n) {
  return p(), ge(
    et(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [A(
        "div",
        Ne({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [A(
          "div",
          {
            ref: "scrollerEl",
            class: c(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [F(e.$slots, "default"), A(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
              style: G({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
              })
            },
            [A(
              "div",
              {
                class: c(e.classes(e.n("indicator-inner"), e.n("--layout-" + e.layoutDirection + "-indicator-inner"))),
                style: G({
                  background: e.indicatorColor || e.activeColor
                })
              },
              null,
              6
              /* CLASS, STYLE */
            )],
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
var wv = Q({
  name: "VarTabs",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Zw,
  setup(e) {
    var n = B("0px"), r = B("0px"), a = B("0px"), t = B("0px"), o = B(!1), l = B(null), i = R(() => e.active), s = R(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = R(() => e.activeColor), d = R(() => e.inactiveColor), v = R(() => e.disabledColor), f = R(() => e.itemDirection), m = B(null), {
      tabList: h,
      bindTabList: b,
      length: g
    } = Nw(), w = (C) => {
      var $, z = ($ = C.name.value) != null ? $ : C.index.value, {
        active: K,
        onChange: J,
        onClick: Y
      } = e;
      k(e["onUpdate:active"], z), k(Y, z), z !== K && k(J, z);
    }, V = () => h.find((C) => {
      var {
        name: $
      } = C;
      return e.active === $.value;
    }), S = (C) => h.find(($) => {
      var {
        index: z
      } = $;
      return (C ?? e.active) === z.value;
    }), T = () => {
      if (g.value !== 0) {
        var {
          active: C
        } = e;
        if (an(C)) {
          var $ = C > g.value - 1 ? g.value - 1 : 0;
          return k(e["onUpdate:active"], $), S($);
        }
      }
    }, E = () => {
      o.value = e.scrollable === "always" || h.length >= 5;
    }, O = (C) => {
      var {
        element: $
      } = C, z = $.value;
      z && (e.layoutDirection === "horizontal" ? (n.value = z.offsetWidth + "px", a.value = z.offsetLeft + "px") : (r.value = z.offsetHeight + "px", t.value = z.offsetTop + "px"));
    }, I = (C) => {
      var {
        element: $
      } = C;
      if (o.value) {
        var z = l.value, K = $.value;
        if (e.layoutDirection === "horizontal") {
          var J = K.offsetLeft + K.offsetWidth / 2 - z.offsetWidth / 2;
          mt(z, {
            left: J,
            animation: Mo
          });
        } else {
          var Y = K.offsetTop + K.offsetHeight / 2 - z.offsetHeight / 2;
          mt(z, {
            top: Y,
            animation: Mo
          });
        }
      }
    }, y = () => {
      var C = V() || S() || T();
      !C || C.disabled.value || (E(), O(C), I(C));
    }, M = /* @__PURE__ */ function() {
      var C = ls(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), D = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: y,
      onTabClick: w
    };
    return b(D), oe(() => g.value, /* @__PURE__ */ ls(function* () {
      yield zn(), y();
    })), oe(() => e.active, y), oe(() => e.scrollable, y), Pr(y), Kn(() => window, "resize", y), {
      stickyComponent: m,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: Ue,
      toSizeUnit: he,
      n: Jw,
      classes: Qw,
      resize: y,
      resizeSticky: M,
      formatElevation: mn
    };
  }
});
wv.render = _w;
const Pa = wv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Ek = Pa, xw = {
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
function ss(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function eC(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ss(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ss(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: nC
} = _("tabs-items");
function rC(e, n) {
  var r = ae("var-swipe");
  return p(), ge(
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
      default: ve(() => [F(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var Cv = Q({
  name: "VarTabsItems",
  components: {
    VarSwipe: Wn
  },
  props: xw,
  setup(e) {
    var n = B(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Lw(), o = (f) => r.find((m) => {
      var {
        name: h
      } = m;
      return f === h.value;
    }), l = (f) => r.find((m) => {
      var {
        index: h
      } = m;
      return f === h.value;
    }), i = (f) => o(f) || l(f), s = (f) => {
      var m, h = i(f);
      h && (r.forEach((b) => {
        var {
          setCurrent: g
        } = b;
        return g(!1);
      }), h.setCurrent(!0), (m = n.value) == null || m.to(h.index.value));
    }, u = (f) => {
      var m, h = r.find((g) => {
        var {
          index: w
        } = g;
        return w.value === f;
      }), b = (m = h.name.value) != null ? m : h.index.value;
      k(e["onUpdate:active"], b);
    }, d = () => n.value, v = {};
    return a(v), oe(() => e.active, s), oe(() => t.value, /* @__PURE__ */ eC(function* () {
      yield zn(), s(e.active);
    })), {
      swipe: n,
      n: nC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Cv.render = rC;
const Va = Cv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Ik = Va;
const aC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, tC = {
  "--badge-default-color": "#555"
}, oC = {
  "--button-default-color": "#303030"
}, iC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, lC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, sC = {
  "--checkbox-unchecked-color": "#fff"
}, uC = {
  "--chip-default-color": "#555"
}, dC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, vC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, fC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, cC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, mC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, pC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, hC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, gC = {
  "--popup-content-background-color": "#1e1e1e"
}, yC = {
  "--pull-refresh-background": "#303030"
}, bC = {
  "--radio-unchecked-color": "#fff"
}, wC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, CC = {
  "--select-scroller-background": "#303030"
}, SC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, kC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, $C = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, TC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, OC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, PC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, VC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, MC = {
  "--tabs-background": "#1e1e1e"
}, BC = {
  "--app-bar-color": "#272727"
}, EC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, IC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, NC = {
  "--menu-background-color": "#272727"
}, DC = {
  "--breadcrumb-inactive-color": "#aaa"
}, AC = {
  "--paper-background": "#303030"
}, zC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, yi.apply(this, arguments);
}
const LC = yi({
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
}, oC, lC, iC, PC, vC, SC, MC, TC, gC, fC, aC, uC, tC, VC, dC, yC, $C, kC, pC, OC, mC, CC, bC, sC, cC, hC, BC, EC, IC, NC, wC, DC, AC, zC);
var RC = {
  dark: LC
}, Nk = null;
const bi = RC;
var yn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], rn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], us = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function UC(e) {
  return ["ampm", "24hr"].includes(e);
}
var HC = {
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
    validator: UC
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
}, Sv = (e, n) => e === "24hr" || n === "am", Gi = (e, n, r) => {
  var a = yn.findIndex((o) => L(o) === L(r)), t = Sv(e, n) ? r : rn[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, un = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, kv = (e) => {
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
  } = Gi(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: h,
      minute: b
    } = un(i);
    f = h === v && a > b;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: w
    } = un(s);
    f = g === v && a < w;
  }
  if (i && s) {
    var {
      hour: V,
      minute: S
    } = un(i), {
      hour: T,
      minute: E
    } = un(s);
    f = T === v && a < E || V === v && a > S;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, $v = (e) => {
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
  } = Gi(t, o, l), m = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: g,
      second: w
    } = un(s);
    m = b === f && g < i || g === i && a > w;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: S,
      second: T
    } = un(u);
    m = V === f && S > i || S === i && a > T;
  }
  if (s && u) {
    var {
      hour: E,
      minute: O,
      second: I
    } = un(s), {
      hour: y,
      minute: M,
      second: D
    } = un(u);
    m = E === f && O < i || y === f && M > i || E === f && O === i && a > I || y === f && M === i && a < D;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || h;
}, {
  n: FC,
  classes: YC
} = _("time-picker");
function jC(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n("clock"))
    },
    [A(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: G(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (p(!0), P(
      Ve,
      null,
      Fe(e.timeScales, (r, a) => (p(), P(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: G(e.getStyle(a, r, !1))
        },
        re(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), P(
        Ve,
        null,
        Fe(e.hours24, (r, a) => (p(), P(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: G(e.getStyle(a, r, !0))
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
var Tv = Q({
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
    } = n, a = B(null), t = B([]), o = B([]), l = R(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = R(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = R(() => e.type === "hour" ? yn : us), u = (g, w) => {
      var V;
      g = (V = g) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? kv : $v, T = {
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
      return w && e.type === "minute" && Reflect.deleteProperty(T, "minute"), S(T);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var g = e.isInner ? rn[i.value] : s.value[i.value];
      return s.value === us ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, w) => w ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (Sv(e.format, e.ampm))
          return t.value.includes(g);
        var w = yn.findIndex((V) => V === g);
        return o.value.includes(w);
      }
      return u(g, !0);
    }, m = (g, w, V) => {
      var S = 2 * Math.PI / 12 * g - Math.PI / 2, T = 50 * (1 + Math.cos(S)), E = 50 * (1 + Math.sin(S)), O = () => v(g, V) ? f(w) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: I,
        color: y
      } = O();
      return {
        left: T + "%",
        top: E + "%",
        backgroundColor: I,
        color: y
      };
    }, h = () => {
      var {
        width: g,
        height: w
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: w
      };
    }, b = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? yn : rn;
        return Ea(g[i.value], 2, "0");
      }
    };
    return oe([i, () => e.isInner], (g, w) => {
      var [V, S] = g, [T, E] = w, O = V === T && S === E;
      if (!(O || e.type !== "hour" || i.value === void 0)) {
        var I = S ? rn[i.value] : b(), y = e.useSeconds ? ":" + e.time.second : "", M = I + ":" + e.time.minute + y;
        e.preventNextUpdate || r("update", M), r("change-prevent-update");
      }
    }), oe(() => e.rad, (g, w) => {
      if (!(e.type === "hour" || g === void 0 || w === void 0)) {
        var V = g / 6 >= 0 ? g / 6 : g / 6 + 60, S = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (V !== S) {
          var T, {
            hourStr: E
          } = Gi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var O = te().minute(V).format("mm"), I = e.useSeconds ? ":" + e.time.second : "";
            T = E + ":" + O + I;
          }
          if (e.type === "second") {
            var y = te().second(V).format("ss"), M = e.useSeconds ? ":" + y : "";
            T = E + ":" + e.time.minute + M;
          }
          r("update", T);
        }
      }
    }), oe([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [w, V, S] = g;
      if (t.value = [], w && !V) {
        var {
          hour: T
        } = un(w), E = yn.filter((j) => L(j) > T), O = rn.filter((j) => L(j) > T);
        t.value = [...E, ...O];
      }
      if (!w && V) {
        var {
          hour: I
        } = un(V), y = yn.filter((j) => L(j) < I), M = rn.filter((j) => L(j) < I);
        t.value = [...y, ...M];
      }
      if (w && V) {
        var {
          hour: D
        } = un(w), {
          hour: C
        } = un(V), $ = yn.filter((j) => L(j) < C || L(j) > D), z = rn.filter((j) => L(j) < C || L(j) > D);
        t.value = [...$, ...z];
      }
      if (S != null && S.hours) {
        var {
          hours: K
        } = S, J = yn.filter((j) => !K(L(j))), Y = rn.filter((j) => !K(L(j)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...J, ...Y])];
      }
      o.value = t.value.map((j) => rn.findIndex((se) => j === se)).filter((j) => j >= 0);
    }, {
      immediate: !0
    }), {
      n: FC,
      classes: YC,
      hours24: rn,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: h,
      getStyle: m,
      activeItemIndex: i
    };
  }
});
Tv.render = jC;
const WC = Tv;
var {
  n: GC,
  classes: qC
} = _("time-picker"), XC = (e) => (za(""), e = e(), La(), e), KC = /* @__PURE__ */ XC(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), ZC = {
  key: 0
};
function JC(e, n) {
  var r = ae("clock");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [A(
      "div",
      {
        class: c(e.n("title")),
        style: G({
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
        ), KC, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          re(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), P("span", ZC, ":")) : x("v-if", !0), e.useSeconds ? (p(), P(
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
      ), e.format === "ampm" ? (p(), P(
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
        [Z(
          Ue,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(p(), ge(
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
var Ov = Q({
  name: "VarTimePicker",
  components: {
    Clock: WC
  },
  props: HC,
  setup(e) {
    var n = B(null), r = B(null), a = B(null), t = B(!1), o = B(!1), l = B(!1), i = B(!1), s = B(!1), u = B(void 0), d = B(0), v = B(0), f = B("hour"), m = B("am"), h = B(!1), b = B(!1), g = B({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Le({
      x: 0,
      y: 0
    }), V = Le({
      x: [],
      y: []
    }), S = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), T = (H) => {
      k(e["onUpdate:modelValue"], H), k(e.onChange, H);
    }, E = (H) => H * 57.29577951308232, O = (H) => {
      i.value = !1, b.value = !1, f.value = H;
    }, I = (H) => {
      var {
        disableHour: N
      } = a.value, W = yn.findIndex((de) => L(de) === L(g.value.hour)), ne = H === "am" ? yn : rn, le = [...ne.slice(W), ...ne.slice(0, W)];
      return le.find((de, be) => (o.value = be !== 0, !N.includes(de)));
    }, y = (H) => {
      if (!e.readonly) {
        m.value = H;
        var N = I(H);
        if (N) {
          var W = e.useSeconds ? ":" + g.value.second : "", ne = Ea(N, 2, "0") + ":" + g.value.minute + W;
          T(ne);
        }
      }
    }, M = (H, N) => {
      var W = H >= V.x[0] && H <= V.x[1], ne = N >= V.y[0] && N <= V.y[1];
      return W && ne;
    }, D = (H) => {
      var N = e.format === "24hr" ? "HH" : "hh", {
        hour: W,
        minute: ne,
        second: le
      } = un(H);
      return {
        hour: te().hour(W).format(N),
        minute: te().minute(ne).format("mm"),
        second: te().second(le).format("ss")
      };
    }, C = (H) => {
      var N = H / 30;
      return N >= 0 ? N : N + 12;
    }, $ = () => {
      var {
        width: H,
        height: N
      } = a.value.getSize(), W = w.x - H / 2 - 8, ne = w.x + H / 2 + 8, le = w.y - N / 2 - 8, de = w.y + N / 2 + 8;
      return {
        rangeXMin: W,
        rangeXMax: ne,
        rangeYMin: le,
        rangeYMax: de
      };
    }, z = (H, N, W) => {
      var {
        disableHour: ne
      } = a.value;
      l.value = M(H, N);
      var le = Math.round(W / 30) * 30 + 90, de = C(le), be = t.value ? yn[de] : rn[de];
      if (ne.includes(be) || (t.value = e.format === "24hr" ? M(H, N) : !1), t.value === l.value) {
        var Pe = t.value || m.value === "pm" ? rn[de] : yn[de];
        h.value = ne.includes(Pe), !h.value && (u.value = le, i.value = !0);
      }
    }, K = (H) => {
      var {
        disableHour: N
      } = a.value, W = Math.round(H / 6) * 6 + 90, ne = W / 6 >= 0 ? W / 6 : W / 6 + 60, le = {
        time: ne,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: N,
        allowedTime: e.allowedTime
      };
      b.value = kv(le), !b.value && (d.value = W, s.value = !0);
    }, J = (H) => {
      var {
        disableHour: N
      } = a.value, W = Math.round(H / 6) * 6 + 90, ne = W / 6 >= 0 ? W / 6 : W / 6 + 60, le = {
        time: ne,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        minute: L(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: N,
        allowedTime: e.allowedTime
      };
      $v(le) || (v.value = W);
    }, Y = () => {
      var {
        left: H,
        top: N,
        width: W,
        height: ne
      } = n.value.getBoundingClientRect();
      if (w.x = H + W / 2, w.y = N + ne / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: le,
          rangeXMax: de,
          rangeYMin: be,
          rangeYMax: Pe
        } = $();
        V.x = [le, de], V.y = [be, Pe];
      }
    }, j = (H) => {
      if (H.preventDefault(), !e.readonly) {
        Y();
        var {
          clientX: N,
          clientY: W
        } = H.touches[0], ne = N - w.x, le = W - w.y, de = Math.round(E(Math.atan2(le, ne)));
        f.value === "hour" ? z(N, W, de) : f.value === "minute" ? K(de) : J(de);
      }
    }, se = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, q = () => {
      o.value = !1;
    };
    return oe(() => e.modelValue, (H) => {
      if (H) {
        var {
          hour: N,
          minute: W,
          second: ne
        } = un(H), le = te().hour(N).format("hh"), de = te().hour(N).format("HH"), be = te().minute(W).format("mm"), Pe = te().second(ne).format("ss");
        u.value = (le === "12" ? 0 : L(le)) * 30, d.value = L(be) * 6, v.value = L(Pe) * 6, g.value = D(H), e.format !== "24hr" && (m.value = Ea("" + N, 2, "0") === de && rn.includes(de) ? "pm" : "am"), t.value = e.format === "24hr" && rn.includes(de);
      }
    }, {
      immediate: !0
    }), {
      n: GC,
      classes: qC,
      getRad: S,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: j,
      checkPanel: O,
      checkAmpm: y,
      end: se,
      update: T,
      changePreventUpdate: q,
      formatElevation: mn
    };
  }
});
Ov.render = JC;
const Ma = Ov;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var Dk = Ma, QC = {
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
  elevation: {
    type: [Boolean, Number, String],
    default: !0
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
function ds(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vs(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ds(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ds(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: _C,
  classes: xC
} = _("uploader"), eS = 0, nS = ["onClick"], rS = ["onClick"], aS = ["src", "alt"], tS = ["multiple", "accept", "capture", "disabled"], oS = ["src"];
function iS(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = ae("var-popup"), l = De("ripple"), i = De("hover");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), P(
        Ve,
        null,
        Fe(e.files, (s) => ke((p(), P(
          "div",
          {
            class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
            key: s.id,
            onClick: (u) => e.preview(s)
          },
          [A(
            "div",
            {
              class: c(e.n("file-name"))
            },
            re(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (p(), P(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: kn((u) => e.handleRemove(s), ["stop"])
            },
            [Z(
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
            rS
          )) : x("v-if", !0), s.cover ? (p(), P(
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
            aS
          )) : x("v-if", !0), A(
            "div",
            {
              class: c(e.n("file-indicator"))
            },
            [A(
              "div",
              {
                class: c(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
                style: G({
                  width: s.state === "success" || s.state === "error" ? "100%" : s.progress + "%"
                })
              },
              null,
              6
              /* CLASS, STYLE */
            )],
            2
            /* CLASS */
          )],
          10,
          nS
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((p(), P(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
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
          tS
        ), F(e.$slots, "default", {}, () => [Z(
          r,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        ), Z(
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
      )), [[l, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }], [i, e.handleHovering, "desktop"]]) : x("v-if", !0)],
      2
      /* CLASS */
    ), Z(
      t,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), Z(
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
        default: ve(() => {
          var s, u;
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), P(
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
            oS
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
var Pv = Q({
  name: "VarUploader",
  directives: {
    Ripple: We,
    Hover: Ln
  },
  components: {
    VarIcon: Oe,
    VarPopup: wn,
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  props: QC,
  setup(e) {
    var n = B(null), r = B(!1), a = B(null), t = R(() => {
      var {
        maxlength: j,
        modelValue: {
          length: se
        }
      } = e;
      return an(j) ? se + " / " + j : "";
    }), {
      form: o,
      bindForm: l
    } = On(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Tn(), {
      hovering: v,
      handleHovering: f
    } = $r(), m = R(() => {
      var {
        modelValue: j,
        hideList: se
      } = e;
      return se ? [] : j;
    }), h = (j) => {
      var {
        disabled: se,
        readonly: q,
        previewed: H
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || se || q || !H)) {
        var {
          url: N
        } = j;
        if (je(N) && Ji(N)) {
          Dn(N);
          return;
        }
        je(N) && Qi(N) && (a.value = j, r.value = !0);
      }
    }, b = (j) => ({
      id: eS++,
      url: "",
      cover: "",
      name: j.name,
      file: j,
      progress: 0
    }), g = (j) => {
      var se = j.target, {
        files: q
      } = se;
      return Array.from(q);
    }, w = (j) => new Promise((se) => {
      if (!j.file.type.startsWith("image")) {
        se(j);
        return;
      }
      var q = new FileReader();
      q.onload = () => {
        var H = q.result;
        j.cover = H, j.url = H, se(j);
      }, q.readAsDataURL(j.file);
    }), V = (j) => j.map(w), S = (j) => {
      var {
        onBeforeRead: se
      } = e;
      return j.map((q) => new Promise((H) => {
        se || H({
          valid: !0,
          varFile: q
        });
        var N = Vo(k(se, Le(q)));
        Promise.all(N).then((W) => {
          H({
            valid: W.every(Boolean),
            varFile: q
          });
        });
      }));
    }, T = /* @__PURE__ */ function() {
      var j = vs(function* (se) {
        var {
          maxsize: q,
          maxlength: H,
          modelValue: N,
          onOversize: W,
          onAfterRead: ne,
          readonly: le,
          disabled: de
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || de || le)) {
          var be = (Me) => Me.filter((Ie) => Ie.file.size > L(q) ? (k(W, Le(Ie)), !1) : !0), Pe = (Me) => {
            var Ie = Math.min(Me.length, L(H) - N.length);
            return Me.slice(0, Ie);
          }, on = g(se), ee = on.map(b);
          ee = q != null ? be(ee) : ee, ee = H != null ? Pe(ee) : ee;
          var ue = yield Promise.all(V(ee)), ye = yield Promise.all(S(ue)), Ae = ye.filter((Me) => {
            var {
              valid: Ie
            } = Me;
            return Ie;
          }).map((Me) => {
            var {
              varFile: Ie
            } = Me;
            return Ie;
          });
          k(e["onUpdate:modelValue"], [...N, ...Ae]), se.target.value = "", Ae.forEach((Me) => k(ne, Le(Me)));
        }
      });
      return function(q) {
        return j.apply(this, arguments);
      };
    }(), E = /* @__PURE__ */ function() {
      var j = vs(function* (se) {
        var {
          disabled: q,
          readonly: H,
          modelValue: N,
          onBeforeRemove: W,
          onRemove: ne
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || q || H)) {
          if (W) {
            var le = Vo(k(W, Le(se)));
            if ((yield Promise.all(le)).some((be) => !be))
              return;
          }
          var de = N.filter((be) => be !== se);
          k(ne, Le(se)), $("onRemove"), k(e["onUpdate:modelValue"], de);
        }
      });
      return function(q) {
        return j.apply(this, arguments);
      };
    }(), O = () => e.modelValue.filter((j) => j.state === "success"), I = () => e.modelValue.filter((j) => j.state === "error"), y = () => e.modelValue.filter((j) => j.state === "loading"), M = () => {
      n.value.click();
    }, D = () => {
      a.value = null, r.value = !1, Dn.close();
    }, C = {
      getSuccess: O,
      getError: I,
      getLoading: y
    }, $ = (j) => {
      ze(() => {
        var {
          validateTrigger: se,
          rules: q,
          modelValue: H
        } = e;
        s(se, j, q, H, C);
      });
    }, z = !1, K = () => u(e.rules, e.modelValue, C), J = () => {
      z = !0, k(e["onUpdate:modelValue"], []), d();
    }, Y = {
      validate: K,
      resetValidation: d,
      reset: J
    };
    return k(l, Y), oe(() => e.modelValue, () => {
      !z && $("onChange"), z = !1;
    }, {
      deep: !0
    }), {
      n: _C,
      classes: xC,
      formatElevation: mn,
      input: n,
      files: m,
      showPreview: r,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      hovering: v,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      handleHovering: f,
      isHTMLSupportVideo: Qi,
      isHTMLSupportImage: Ji,
      preview: h,
      handleChange: T,
      handleRemove: E,
      getSuccess: O,
      getError: I,
      getLoading: y,
      validate: K,
      resetValidation: d,
      reset: J,
      chooseFile: M,
      closePreview: D,
      toSizeUnit: he
    };
  }
});
Pv.render = iS;
const Ba = Pv;
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
var Ak = Ba;
const lS = "2.10.2";
function sS(e) {
  Zn.install && e.use(Zn), Ir.install && e.use(Ir), Nr.install && e.use(Nr), Dr.install && e.use(Dr), Ar.install && e.use(Ar), fr.install && e.use(fr), zr.install && e.use(zr), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), _e.install && e.use(_e), Hr.install && e.use(Hr), Fr.install && e.use(Fr), cr.install && e.use(cr), mr.install && e.use(mr), Yr.install && e.use(Yr), pr.install && e.use(pr), jr.install && e.use(jr), Wr.install && e.use(Wr), Gr.install && e.use(Gr), hn.install && e.use(hn), qr.install && e.use(qr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jn.install && e.use(Jn), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), jn.install && e.use(jn), Je.install && e.use(Je), Ln.install && e.use(Ln), dn.install && e.use(dn), Oe.install && e.use(Oe), xr.install && e.use(xr), Dn.install && e.use(Dn), ea.install && e.use(ea), na.install && e.use(na), wr.install && e.use(wr), pt.install && e.use(pt), ra.install && e.use(ra), aa.install && e.use(aa), En.install && e.use(En), fi.install && e.use(fi), zo.install && e.use(zo), Xn.install && e.use(Xn), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), Da.install && e.use(Da), wn.install && e.use(wn), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), We.install && e.use(We), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), gi.install && e.use(gi), ba.install && e.use(ba), wa.install && e.use(wa), Ca.install && e.use(Ca), qn.install && e.use(qn), wt.install && e.use(wt), Wn.install && e.use(Wn), Gn.install && e.use(Gn), ka.install && e.use(ka), $a.install && e.use($a), Ta.install && e.use(Ta), Oa.install && e.use(Oa), Pa.install && e.use(Pa), Va.install && e.use(Va), bi.install && e.use(bi), Ma.install && e.use(Ma), yr.install && e.use(yr), Ba.install && e.use(Ba);
}
const zk = {
  version: lS,
  install: sS,
  ActionSheet: Zn,
  AppBar: Ir,
  Avatar: Nr,
  AvatarGroup: Dr,
  BackTop: Ar,
  Badge: fr,
  BottomNavigation: zr,
  BottomNavigationItem: Lr,
  Breadcrumb: Rr,
  Breadcrumbs: Ur,
  Button: _e,
  ButtonGroup: Hr,
  Card: Fr,
  Cell: cr,
  Checkbox: mr,
  CheckboxGroup: Yr,
  Chip: pr,
  Col: jr,
  Collapse: Wr,
  CollapseItem: Gr,
  Context: hn,
  Countdown: qr,
  Counter: Xr,
  DatePicker: Zr,
  Dialog: Jn,
  Divider: Jr,
  Ellipsis: Qr,
  Fab: _r,
  Form: jn,
  FormDetails: Je,
  Hover: Ln,
  HoverOverlay: dn,
  Icon: Oe,
  Image: xr,
  ImagePreview: Dn,
  IndexAnchor: ea,
  IndexBar: na,
  Input: wr,
  Lazy: pt,
  Link: ra,
  List: aa,
  Loading: En,
  LoadingBar: fi,
  Locale: zo,
  Menu: Xn,
  Option: ta,
  Overlay: oa,
  Pagination: ia,
  Paper: la,
  Picker: Da,
  Popup: wn,
  Progress: sa,
  PullRefresh: ua,
  Radio: da,
  RadioGroup: va,
  Rate: fa,
  Result: ca,
  Ripple: We,
  Row: ma,
  Select: pa,
  Skeleton: ha,
  Slider: ga,
  Snackbar: gi,
  Space: ba,
  Step: wa,
  Steps: Ca,
  Sticky: qn,
  StyleProvider: wt,
  Swipe: Wn,
  SwipeItem: Gn,
  Switch: ka,
  Tab: $a,
  TabItem: Ta,
  Table: Oa,
  Tabs: Pa,
  TabsItems: Va,
  Themes: bi,
  TimePicker: Ma,
  Tooltip: yr,
  Uploader: Ba
};
export {
  Zn as ActionSheet,
  Ir as AppBar,
  Nr as Avatar,
  Dr as AvatarGroup,
  Ar as BackTop,
  fr as Badge,
  zr as BottomNavigation,
  Lr as BottomNavigationItem,
  Rr as Breadcrumb,
  Ur as Breadcrumbs,
  _e as Button,
  Hr as ButtonGroup,
  Fr as Card,
  cr as Cell,
  mr as Checkbox,
  Yr as CheckboxGroup,
  pr as Chip,
  jr as Col,
  Wr as Collapse,
  Gr as CollapseItem,
  hn as Context,
  qr as Countdown,
  Xr as Counter,
  Zr as DatePicker,
  Jn as Dialog,
  Jr as Divider,
  Qr as Ellipsis,
  _r as Fab,
  jn as Form,
  Je as FormDetails,
  Ln as Hover,
  dn as HoverOverlay,
  Oe as Icon,
  xr as Image,
  Dn as ImagePreview,
  ea as IndexAnchor,
  na as IndexBar,
  wr as Input,
  pt as Lazy,
  ra as Link,
  aa as List,
  En as Loading,
  fi as LoadingBar,
  zo as Locale,
  Xn as Menu,
  ta as Option,
  oa as Overlay,
  Uo as PIXEL,
  ia as Pagination,
  la as Paper,
  Da as Picker,
  wn as Popup,
  sa as Progress,
  ua as PullRefresh,
  da as Radio,
  va as RadioGroup,
  fa as Rate,
  ca as Result,
  We as Ripple,
  ma as Row,
  ji as SNACKBAR_TYPE,
  pa as Select,
  ha as Skeleton,
  ga as Slider,
  gi as Snackbar,
  ba as Space,
  wa as Step,
  Ca as Steps,
  qn as Sticky,
  wt as StyleProvider,
  Wn as Swipe,
  Gn as SwipeItem,
  ka as Switch,
  $a as Tab,
  Ta as TabItem,
  Oa as Table,
  Pa as Tabs,
  Va as TabsItems,
  bi as Themes,
  Ma as TimePicker,
  yr as Tooltip,
  Ba as Uploader,
  pS as _ActionSheetComponent,
  hS as _AppBarComponent,
  yS as _AvatarComponent,
  bS as _AvatarGroupComponent,
  $S as _BackTopComponent,
  TS as _BadgeComponent,
  OS as _BottomNavigationComponent,
  PS as _BottomNavigationItemComponent,
  VS as _BreadcrumbComponent,
  MS as _BreadcrumbsComponent,
  kS as _ButtonComponent,
  BS as _ButtonGroupComponent,
  ES as _CardComponent,
  IS as _CellComponent,
  DS as _CheckboxComponent,
  AS as _CheckboxGroupComponent,
  zS as _ChipComponent,
  LS as _ColComponent,
  RS as _CollapseComponent,
  US as _CollapseItemComponent,
  dS as _ContextComponent,
  HS as _CountdownComponent,
  FS as _CounterComponent,
  YS as _DatePickerComponent,
  jS as _DialogComponent,
  WS as _DividerComponent,
  qS as _EllipsisComponent,
  XS as _FabComponent,
  KS as _FormComponent,
  NS as _FormDetailsComponent,
  SS as _HoverComponent,
  CS as _HoverOverlayComponent,
  cS as _IconComponent,
  ZS as _ImageComponent,
  _S as _ImagePreviewComponent,
  ek as _IndexAnchorComponent,
  nk as _IndexBarComponent,
  rk as _InputComponent,
  gS as _LazyComponent,
  ak as _LinkComponent,
  tk as _ListComponent,
  ok as _LoadingBarComponent,
  wS as _LoadingComponent,
  mS as _LocaleComponent,
  ik as _MenuComponent,
  lk as _OptionComponent,
  sk as _OverlayComponent,
  uk as _PaginationComponent,
  dk as _PaperComponent,
  vk as _PickerComponent,
  fS as _PopupComponent,
  fk as _ProgressComponent,
  ck as _PullRefreshComponent,
  mk as _RadioComponent,
  pk as _RadioGroupComponent,
  hk as _RateComponent,
  gk as _ResultComponent,
  vS as _RippleComponent,
  yk as _RowComponent,
  bk as _SelectComponent,
  wk as _SkeletonComponent,
  Ck as _SliderComponent,
  Sk as _SnackbarComponent,
  kk as _SpaceComponent,
  $k as _StepComponent,
  Tk as _StepsComponent,
  xS as _StickyComponent,
  Ok as _StyleProviderComponent,
  JS as _SwipeComponent,
  QS as _SwipeItemComponent,
  Pk as _SwitchComponent,
  Vk as _TabComponent,
  Mk as _TabItemComponent,
  Bk as _TableComponent,
  Ek as _TabsComponent,
  Ik as _TabsItemsComponent,
  Nk as _ThemesComponent,
  Dk as _TimePickerComponent,
  GS as _TooltipComponent,
  Ak as _UploaderComponent,
  hf as actionSheetProps,
  Ti as add,
  kf as appBarProps,
  Kf as avatarGroupProps,
  Yf as avatarProps,
  Tc as backTopProps,
  Ec as badgeProps,
  Fc as bottomNavigationItemProps,
  Ac as bottomNavigationProps,
  Xc as breadcrumbProps,
  xc as breadcrumbsProps,
  yc as buttonProps,
  dm as cardProps,
  hm as cellProps,
  Nm as checkboxGroupProps,
  Tm as checkboxProps,
  Um as chipProps,
  Gm as colProps,
  np as collapseItemProps,
  Qm as collapseProps,
  op as countdownProps,
  nh as counterProps,
  Sh as datePickerProps,
  zk as default,
  Ge as defaultLazyOptions,
  Uh as dialogProps,
  Wh as dividerProps,
  As as enUS,
  wm as formDetailsProps,
  gy as formProps,
  Ns as iconProps,
  Hs as imageCache,
  Uy as imagePreviewProps,
  Sy as imageProps,
  Jy as indexAnchorProps,
  eb as indexBarProps,
  vb as inputProps,
  sS as install,
  wb as linkProps,
  $b as listProps,
  Mb as loadingBarProps,
  lr as loadingProps,
  Hb as menuProps,
  Ls as merge,
  qb as optionProps,
  Jb as overlayProps,
  Xe as pack,
  zs as packs,
  _b as paginationProps,
  a0 as paperProps,
  l0 as pickerProps,
  Pt as popupProps,
  p0 as progressProps,
  S0 as pullRefreshProps,
  I0 as radioGroupProps,
  T0 as radioProps,
  z0 as rateProps,
  H0 as resultProps,
  O1 as rowProps,
  E1 as selectProps,
  z1 as skeletonProps,
  F1 as sliderProps,
  tv as snackbarProps,
  vw as spaceProps,
  mw as stepProps,
  Sw as stepsProps,
  jt as stickyProps,
  Tw as styleProviderProps,
  pd as swipeProps,
  Vw as switchProps,
  Uw as tabItemProps,
  Iw as tabProps,
  jw as tableProps,
  xw as tabsItemsProps,
  Zw as tabsProps,
  HC as timePickerProps,
  ry as tooltipProps,
  QC as uploaderProps,
  Oi as use,
  $r as useHoverOverlay,
  $i as useLocale,
  lS as version,
  ki as zhCN
};
