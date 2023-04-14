import { reactive as Ie, onMounted as Jt, nextTick as Be, onActivated as $r, isRef as Pv, watch as ie, onBeforeUnmount as Qt, onDeactivated as Tr, unref as Ga, inject as Ov, getCurrentInstance as Ia, computed as R, provide as Vv, isVNode as yt, ref as B, Comment as Mv, Fragment as $e, createApp as Bv, h as us, onBeforeMount as Ev, onUnmounted as _a, defineComponent as ee, createVNode as _, Teleport as Na, Transition as De, withDirectives as we, vShow as yr, mergeProps as Ve, openBlock as p, createBlock as he, resolveDynamicComponent as xa, normalizeClass as c, normalizeStyle as G, resolveComponent as te, resolveDirective as Me, withCtx as ue, createElementVNode as A, renderSlot as Y, toDisplayString as ae, createElementBlock as O, renderList as Ae, createCommentVNode as ne, onUpdated as _t, createTextVNode as be, pushScopeId as Da, popScopeId as Aa, withModifiers as cn, normalizeProps as bt, guardReactiveProps as xt, vModelText as Iv, toRefs as Nv, watchEffect as Dv, withKeys as Wi, toRaw as Gi, TransitionGroup as Av } from "vue";
var ds = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, sS = Ie(ds);
const fn = Ie(ds), Re = (e) => typeof e == "string", $o = (e) => typeof e == "boolean", en = (e) => typeof e == "number", hi = (e) => Object.prototype.toString.call(e) === "[object Object]", zv = (e) => typeof e == "object" && e !== null, gi = (e) => typeof e == "function", Ce = (e) => Array.isArray(e), Lv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Rn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Re(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : $o(e) ? Number(e) : e, Ut = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, yi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, et = () => typeof window < "u", qi = (e) => [...new Set(e)], vs = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Rv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Uv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Xi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ki = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Hv = (e) => {
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
      this.has(r) && Ut(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, To = (e) => e, Zi = (e) => Math.pow(e, 3), fs = (e) => e < 0.5 ? Zi(e * 2) / 2 : 1 - Zi((1 - e) * 2) / 2, eo = (e, n) => e ?? n, cs = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Va = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Sn(e, n) {
  throw Error("Varlet [" + e + "]: " + n);
}
function Ji(e, n) {
  console.warn("Varlet [" + e + "]: " + n);
}
function Qi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Fv(e) {
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
function Yv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function _i(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function dt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function bi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function jv(e) {
  return Po.apply(this, arguments);
}
function Po() {
  return Po = Fv(function* (e) {
    yield In();
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
  }), Po.apply(this, arguments);
}
function yo(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function br(e) {
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
function Wv(e) {
  for (var n = [], r = e; r !== window; )
    r = br(r), n.push(r);
  return n;
}
function ms(e, n) {
  if (Re(e)) {
    var r = document.querySelector(e);
    return r || Sn(n, "target element cannot found"), r;
  }
  if (zv(e))
    return e;
  Sn(n, 'type of prop "target" should be a selector or an element object');
}
function xi() {
  var {
    innerWidth: e,
    innerHeight: n
  } = window;
  return e > n ? {
    vMin: n,
    vMax: e
  } : {
    vMin: e,
    vMax: n
  };
}
var ps = (e) => Re(e) && e.endsWith("rem"), Gv = (e) => Re(e) && e.endsWith("px") || en(e), qv = (e) => Re(e) && e.endsWith("%"), hs = (e) => Re(e) && e.endsWith("vw"), gs = (e) => Re(e) && e.endsWith("vh"), ys = (e) => Re(e) && e.endsWith("vmin"), bs = (e) => Re(e) && e.endsWith("vmax"), Xv = (e) => Re(e) && e.startsWith("calc("), Kv = (e) => Re(e) && e.startsWith("var("), Le = (e) => {
  if (en(e))
    return e;
  if (Gv(e))
    return +e.replace("px", "");
  if (hs(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (gs(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (ps(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return ys(e) ? xi().vMin : bs(e) ? xi().vMax : Re(e) ? L(e) : 0;
}, me = (e) => {
  if (e != null)
    return qv(e) || hs(e) || gs(e) || ps(e) || Xv(e) || Kv(e) || ys(e) || bs(e) ? e : Le(e) + "px";
}, _e = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = me(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function yn(e) {
  var n = cs();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function el(e) {
  var n = cs();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function no(e) {
  yn(() => {
    yn(e);
  });
}
function In() {
  return new Promise((e) => {
    yn(() => {
      yn(e);
    });
  });
}
function Zv() {
  return new Promise((e) => {
    yn(e);
  });
}
function vt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = dt(e), s = bi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (r - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), yn(d);
      } else
        e.scrollTo(a, r), u();
    };
    yn(d);
  });
}
function ws(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Rv(a);
    return n[o] = t, n;
  }, {});
}
function Jv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Ht(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function ln(e) {
  let n = !1;
  Jt(() => {
    e(), Be(() => {
      n = !0;
    });
  }), $r(() => {
    n && e();
  });
}
function wr(e, n, r, a = {}) {
  if (!et())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (f) => {
    if (l || i)
      return;
    const m = Ga(f);
    m && (m.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, u = (f) => {
    if (!l || i)
      return;
    const m = Ga(f);
    m && (m.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let d;
  Pv(e) && (d = ie(() => e.value, (f, m) => {
    u(m), s(f);
  }));
  const v = () => {
    d == null || d(), u(e), i = !0;
  };
  return ln(() => {
    s(e);
  }), Qt(() => {
    u(e);
  }), Tr(() => {
    u(e);
  }), v;
}
function Cs(e, n, r) {
  if (!et())
    return;
  wr(document, n, (t) => {
    const o = Ga(e);
    o && !o.contains(t.target) && r(t);
  });
}
var Qv = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function _v(e) {
  const n = Ia();
  return e in n.provides;
}
function sn(e) {
  if (!_v(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = Ov(e), { childInstances: r, collect: a, clear: t } = n, o = Qv(n, ["childInstances", "collect", "clear"]), l = Ia();
  return {
    index: R(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      Jt(() => {
        Be().then(() => {
          a(l, u);
        });
      }), Qt(() => {
        Be().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function xv(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      yt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function un(e) {
  const n = Ia(), r = Ie([]), a = [], t = R(() => r.length), o = () => {
    const u = xv(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    Ut(r, u), Ut(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Vv(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function Ss(e, n, r = {}) {
  const a = Ia(), { passive: t = !0, eventName: o, defaultValue: l, emit: i = a == null ? void 0 : a.emit } = r, s = o ?? `update:${n.toString()}`, u = () => e[n] != null ? e[n] : l;
  if (!t)
    return R({
      get() {
        return u();
      },
      set(v) {
        i(s, v);
      }
    });
  const d = B(u());
  return ie(() => e[n], () => {
    d.value = u();
  }), ie(() => d.value, (v) => {
    i(s, v);
  }), d;
}
function nl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function rl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        nl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        nl(o, a, t, l, i, "throw", s);
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
function We(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function ef(e) {
  var n = Bv(e), r = document.createElement("div");
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
      return () => us(e, Oo({}, n, r));
    }
  }, {
    unmount: t
  } = ef(a);
  return {
    unmountInstance: t
  };
}
function ks(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== Mv) {
      if (r.type === $e && Ce(r.children)) {
        r.children.forEach((a) => {
          n.push(a);
        });
        return;
      }
      n.push(r);
    }
  }), n;
}
function kn() {
  var e = B(""), n = /* @__PURE__ */ function() {
    var t = rl(function* (o, l, i) {
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
    var t = rl(function* (o, l, i, s, u) {
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
function nf(e) {
  et() && (wr(window, "hashchange", e), wr(window, "popstate", e));
}
function ro() {
  var e = B(!1);
  return $r(() => {
    e.value = !1;
  }), Tr(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function re(e) {
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
function S(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (Ce(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function F(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function dn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), "var-elevation--" + e);
}
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ft.apply(this, arguments);
}
var {
  n: $s
} = re("ripple"), al = 250;
function rf(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function af(e, n) {
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
function Ts(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker || !fn.enableRipple)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = af(this, e), s = document.createElement("div");
      s.classList.add($s()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), rf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Vo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + $s());
    if (r.length) {
      var a = r[r.length - 1], t = al - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, al);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Ps() {
  if (!(!Jv() || !fn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function tf(e, n) {
  var r;
  e._ripple = Ft({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    removeRipple: Vo.bind(e)
  }), e.addEventListener("touchstart", Ts, {
    passive: !0
  }), e.addEventListener("touchmove", Ps, {
    passive: !0
  }), e.addEventListener("dragstart", Vo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function of(e) {
  e.removeEventListener("touchstart", Ts), e.removeEventListener("touchmove", Ps), e.removeEventListener("dragstart", Vo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function lf(e, n) {
  var r, a, t, o, l = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (a = n.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = Ft({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Os = {
  mounted: tf,
  unmounted: of,
  updated: lf,
  install(e) {
    e.directive("ripple", this);
  }
}, uS = Os;
const Ue = Os;
function sf(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var wt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: sf
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  onClickOverlay: F(),
  "onUpdate:show": F(),
  // internal for Dialog
  onRouteChange: F()
};
function Vs() {
  var e = Object.keys(fn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Tt(e) {
  fn.locks[e] = 1, Vs();
}
function Pt(e) {
  delete fn.locks[e], Vs();
}
function ao(e, n) {
  var {
    uid: r
  } = Ia();
  n && ie(n, (a) => {
    a === !1 ? Pt(r) : a === !0 && e() === !0 && Tt(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? Tt(r) : Pt(r));
  }), Ev(() => {
    n && n() === !1 || e() === !0 && Tt(r);
  }), _a(() => {
    n && n() === !1 || e() === !0 && Pt(r);
  }), $r(() => {
    n && n() === !1 || e() === !0 && Tt(r);
  }), Tr(() => {
    n && n() === !1 || e() === !0 && Pt(r);
  });
}
function Ct(e, n) {
  var r = B(fn.zIndex);
  return ie(e, (a) => {
    a && (fn.zIndex += n, r.value = fn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
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
function uf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: Ln,
  classes: bo
} = re("popup");
const bn = ee({
  name: "VarPopup",
  inheritAttrs: !1,
  props: wt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Ct(() => e.show, 3), {
      disabled: o
    } = ro(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      S(v), d && S(e["onUpdate:show"], !1);
    };
    ao(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      S(d ? e.onOpen : e.onClose);
    }), nf(() => S(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return _("div", {
        class: bo(Ln("overlay"), d),
        style: Mo({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => _("div", Ve({
      class: bo(Ln("content"), Ln("--" + e.position), [e.defaultStyle, Ln("--content-background-color")], [e.defaultStyle, Ln("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [S(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: g,
        position: C
      } = e;
      return _(De, {
        name: Ln("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [we(_("div", {
          class: bo(Ln("$--box"), Ln()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), _(De, {
          name: g || Ln("$-pop-" + C)
        }, {
          default: () => [f && s()]
        })]), [[yr, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return _(Na, {
          to: d,
          disabled: o.value
        }, uf(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
bn.install = function(e) {
  e.component(bn.name, bn);
};
var dS = bn, Ms = {
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
  onClick: F()
};
function tl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function df(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        tl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        tl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: vf,
  classes: ff
} = re("icon");
function cf(e, n) {
  return p(), he(
    xa(e.isURL(e.name) ? "img" : "i"),
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
var Bs = ee({
  name: "VarIcon",
  props: Ms,
  setup(e) {
    var n = B(""), r = B(!1), a = /* @__PURE__ */ function() {
      var t = df(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Be(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, L(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return ie(() => e.name, a, {
      immediate: !0
    }), {
      n: vf,
      classes: ff,
      nextName: n,
      animateInProgress: r,
      isURL: Lv,
      toNumber: L,
      toSizeUnit: me
    };
  }
});
Bs.render = cf;
const Te = Bs;
Te.install = function(e) {
  e.component(Te.name, Te);
};
var vS = Te;
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
var mf = Bo({
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
  onSelect: F(),
  "onUpdate:show": F()
}, We(wt, [
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
const wi = {
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
}, Es = {
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
function Ci() {
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
    e[o] = Eo({}, e[o], l), a(o);
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
  packs: Is,
  pack: je,
  add: Si,
  use: ki,
  merge: Ns
} = Ci();
Si("zh-CN", wi);
ki("zh-CN");
var fS = {
  zhCN: wi,
  enUS: Es,
  packs: Is,
  pack: je,
  add: Si,
  use: ki,
  merge: Ns,
  useLocale: Ci
};
const Io = {
  zhCN: wi,
  enUS: Es,
  packs: Is,
  pack: je,
  add: Si,
  use: ki,
  merge: Ns,
  useLocale: Ci
};
var {
  n: pf,
  classes: hf
} = re("action-sheet"), gf = ["onClick"];
function yf(e, n) {
  var r = te("var-icon"), a = te("var-popup"), t = Me("ripple");
  return p(), he(
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
      default: ue(() => [A(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [Y(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: c(e.n("title"))
          },
          ae(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), Y(e.$slots, "actions", {}, () => [(p(!0), O(
          $e,
          null,
          Ae(e.actions, (o) => we((p(), O(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: G({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (p(), he(
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
            )) : ne("v-if", !0), A(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ae(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            gf
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
var Ds = ee({
  name: "VarActionSheet",
  directives: {
    Ripple: Ue
  },
  components: {
    VarPopup: bn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: mf,
  setup(e) {
    var n = B(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        S(l, t), o && S(e["onUpdate:show"], !1);
      }
    }, a = (t) => S(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: pf,
      classes: hf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: je,
      dt: eo,
      handleSelect: r
    };
  }
});
Ds.render = yf;
const lr = Ds;
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
var nr, $i = {};
function bf(e) {
  return e === void 0 && (e = {}), No({}, $i, e);
}
function Xn(e) {
  return et() ? new Promise((n) => {
    Xn.close();
    var r = Ie(bf(e));
    r.teleport = "body", nr = r;
    var {
      unmountInstance: a
    } = nt(lr, r, {
      onSelect: (t) => {
        S(r.onSelect, t), n(t);
      },
      onClose: () => {
        S(r.onClose), n("close");
      },
      onClosed: () => {
        S(r.onClosed), a(), nr === r && (nr = null);
      },
      onRouteChange: () => {
        a(), nr === r && (nr = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
Xn.setDefaultOptions = function(e) {
  $i = e;
};
Xn.resetDefaultOptions = function() {
  $i = {};
};
Xn.close = function() {
  if (nr != null) {
    var e = nr;
    nr = null, Be().then(() => {
      e.show = !1;
    });
  }
};
Xn.Component = lr;
lr.install = function(e) {
  e.component(lr.name, lr);
};
Xn.install = function(e) {
  e.component(lr.name, lr);
};
var cS = lr;
function wf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Cf = {
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
    validator: wf
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
  n: Sf,
  classes: kf
} = re("app-bar");
function $f(e, n) {
  return p(), O(
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
        [Y(e.$slots, "left"), e.titlePosition === "left" ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingLeft: e.paddingLeft
            })
          },
          [Y(e.$slots, "default", {}, () => [be(
            ae(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ne("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [Y(e.$slots, "default", {}, () => [be(
          ae(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ne("v-if", !0), A(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingRight: e.paddingRight
            })
          },
          [Y(e.$slots, "default", {}, () => [be(
            ae(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ne("v-if", !0), Y(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), Y(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var As = ee({
  name: "VarAppBar",
  props: Cf,
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
    return ln(o), _t(o), {
      n: Sf,
      classes: kf,
      formatElevation: dn,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
As.render = $f;
const Mr = As;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var mS = Mr;
function ol(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function to(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ol(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ol(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
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
var Tf = "background-image", Pf = "lazy-loading", Of = "lazy-error", il = "lazy-attempt", Vf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ao = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", qa = [], Yt = [], zs = Hv(100), Fe = {
  loading: Ao,
  error: Ao,
  attempt: 3,
  throttleWait: 300,
  events: Vf
}, Ti = yi(St, Fe.throttleWait);
function oo(e, n) {
  e._lazy.arg === Tf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Mf(e) {
  e._lazy.loading && oo(e, e._lazy.loading), St();
}
function Bf(e) {
  e._lazy.error && oo(e, e._lazy.error), e._lazy.state = "error", Oi(e), St();
}
function Ls(e, n) {
  oo(e, n), e._lazy.state = "success", Oi(e), St();
}
function Ef(e) {
  var n;
  Yt.includes(e) || (Yt.push(e), (n = Fe.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ti, {
      passive: !0
    });
  }));
}
function If() {
  Yt.forEach((e) => {
    var n;
    (n = Fe.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ti);
    });
  }), Yt.length = 0;
}
function Nf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Pf)) != null ? r : Fe.loading,
    error: (a = e.getAttribute(Of)) != null ? a : Fe.error,
    attempt: e.getAttribute(il) ? Number(e.getAttribute(il)) : Fe.attempt
  };
  e._lazy = Do({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), oo(e, Ao), S(Fe.filter, e._lazy);
}
function Df(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, zs.add(n), Ls(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Bf(e) : Rs(e);
  });
}
function Rs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (zs.has(n)) {
      Ls(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Mf(e), Df(e, n);
  }
}
function Pi(e) {
  return zo.apply(this, arguments);
}
function zo() {
  return zo = to(function* (e) {
    (yield jv(e)) && Rs(e);
  }), zo.apply(this, arguments);
}
function St() {
  qa.forEach((e) => Pi(e));
}
function Af(e) {
  return Lo.apply(this, arguments);
}
function Lo() {
  return Lo = to(function* (e) {
    !qa.includes(e) && qa.push(e), Wv(e).forEach(Ef), yield Pi(e);
  }), Lo.apply(this, arguments);
}
function Oi(e) {
  Ut(qa, e), qa.length === 0 && If();
}
function zf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Us(e, n) {
  return Ro.apply(this, arguments);
}
function Ro() {
  return Ro = to(function* (e, n) {
    Nf(e, n), yield Af(e);
  }), Ro.apply(this, arguments);
}
function Lf(e, n) {
  return Uo.apply(this, arguments);
}
function Uo() {
  return Uo = to(function* (e, n) {
    if (!zf(e, n)) {
      qa.includes(e) && (yield Pi(e));
      return;
    }
    yield Us(e, n);
  }), Uo.apply(this, arguments);
}
function Rf(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  Fe.events = n ?? Fe.events, Fe.loading = r ?? Fe.loading, Fe.error = a ?? Fe.error, Fe.attempt = t ?? Fe.attempt, Fe.throttleWait = o ?? Fe.throttleWait, Fe.filter = l;
}
var Hs = {
  mounted: Us,
  unmounted: Oi,
  updated: Lf,
  install(e, n) {
    Rf(n), Ti = yi(St, Fe.throttleWait), e.directive("lazy", this);
  }
}, pS = Hs;
const ft = Hs;
function Uf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Fs = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ys(e) {
  return Fs(e) || en(e) || Re(e);
}
var Hf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Ys,
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
    validator: Uf,
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
  onClick: F(),
  onLoad: F(),
  onError: F()
}, {
  n: Ff,
  classes: Yf
} = re("avatar"), jf = ["src", "lazy-loading", "lazy-error"], Wf = ["src"];
function Gf(e, n) {
  var r = Me("lazy");
  return p(), O(
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
    [e.src ? (p(), O(
      $e,
      {
        key: 0
      },
      [e.lazy ? we((p(), O(
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
        jf
      )), [[r, e.src]]) : (p(), O(
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
        Wf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (p(), O(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: G({
          transform: "scale(" + e.scale + ")"
        })
      },
      [Y(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var js = ee({
  name: "VarAvatar",
  directives: {
    Lazy: ft
  },
  props: Hf,
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
      d ? (u._lazy.state === "success" && S(v, s), u._lazy.state === "error" && S(f, s)) : S(v, s);
    }, l = (s) => {
      S(e.onError, s);
    }, i = (s) => {
      S(e.onClick, s);
    };
    return ln(t), _t(t), {
      internalSizeValidator: Fs,
      sizeValidator: Ys,
      toSizeUnit: me,
      n: Ff,
      classes: Yf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
js.render = Gf;
const Br = js;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var hS = Br, qf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Xf,
  classes: Kf
} = re("avatar-group");
function Zf(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: G(e.rootStyles)
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ws = ee({
  name: "VarAvatarGroup",
  props: qf,
  setup(e) {
    var n = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": me(e.offset)
    });
    return {
      n: Xf,
      classes: Kf,
      toSizeUnit: me,
      rootStyles: n
    };
  }
});
Ws.render = Zf;
const Er = Ws;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var gS = Er;
function Jf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Qf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var tr = {
  type: {
    type: String,
    default: "circle",
    validator: Jf
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Qf
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
  n: _f,
  classes: xf
} = re("loading"), ec = (e) => (Da(""), e = e(), Aa(), e), nc = /* @__PURE__ */ ec(() => /* @__PURE__ */ A(
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
)), rc = [nc];
function ac(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [Y(e.$slots, "default"), e.loading ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : ne("v-if", !0)],
      2
      /* CLASS */
    )) : ne("v-if", !0), e.isShow ? (p(), O(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), O(
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
          rc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : ne("v-if", !0), (p(!0), O(
        $e,
        null,
        Ae(e.loadingTypeDict, (r, a) => (p(), O(
          $e,
          {
            key: a
          },
          [e.type === a ? (p(), O(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), O(
              $e,
              null,
              Ae(r, (t) => (p(), O(
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
          )) : ne("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (p(), O(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: G({
            color: e.color
          })
        },
        [Y(e.$slots, "description", {}, () => [be(
          ae(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : ne("v-if", !0)],
      2
      /* CLASS */
    )) : ne("v-if", !0)],
    2
    /* CLASS */
  );
}
var Gs = ee({
  name: "VarLoading",
  props: tr,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = R(() => S(r.default) ? e.loading : !0);
    return {
      n: _f,
      classes: xf,
      multiplySizeUnit: _e,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Gs.render = ac;
const Vn = Gs;
Vn.install = function(e) {
  e.component(Vn.name, Vn);
};
var yS = Vn, tc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: oc,
  classes: ic
} = re("hover-overlay");
function lc(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var qs = ee({
  name: "VarHoverOverlay",
  props: tc,
  setup() {
    return {
      n: oc,
      classes: ic
    };
  }
});
qs.render = lc;
const tn = qs;
tn.install = function(e) {
  e.component(tn.name, tn);
};
function Cr() {
  var e = B(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var bS = tn;
function Xs(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function sc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[vs(t)] = o, r;
  }, {}) : {};
}
function uc(e) {
  var {
    value: n
  } = e._hover, r = sc(e);
  Object.keys(n).forEach((a) => {
    var t = vs(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Vi(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function dc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function Ks(e) {
  dc(e), Vi(e, e._hover.rawStyle);
}
function Zs() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, gi(e)) {
    e(this._hover.hovering);
    return;
  }
  Vi(this, e);
}
function Js() {
  if (this._hover.hovering = !1, gi(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Ks(this);
}
function Qs(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Xs(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, uc(e), e.addEventListener("mouseenter", Zs), e.addEventListener("mouseleave", Js));
}
function _s(e, n) {
  Xs(n.arg) || (Ks(e), e.removeEventListener("mouseenter", Zs), e.removeEventListener("mouseleave", Js));
}
function vc(e, n) {
  e._hover && _s(e, n);
}
function fc(e, n) {
  return !gi(n.value) && e._hover.hovering;
}
function cc(e, n) {
  Qs(e, n), fc(e, n) && Vi(e, n.value);
}
var xs = {
  mounted: Qs,
  unmounted: _s,
  beforeUpdate: vc,
  updated: cc,
  install(e) {
    e.directive("hover", this);
  }
}, wS = xs;
const Nn = xs;
function Ho() {
  return Ho = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ho.apply(this, arguments);
}
function eu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function mc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function pc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var hc = {
  type: {
    type: String,
    validator: eu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: pc
  },
  size: {
    type: String,
    validator: mc
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
  loadingType: We(tr, "type"),
  loadingSize: We(tr, "size"),
  loadingColor: Ho({}, We(tr, "color"), {
    default: "currentColor"
  }),
  onClick: F(),
  onTouchstart: F()
}, nu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function gc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(nu);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function yc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(nu);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: bc,
  classes: wc
} = re("button"), Cc = ["type", "disabled"];
function Sc(e, n) {
  var r = te("var-loading"), a = te("var-hover-overlay"), t = Me("ripple"), o = Me("hover");
  return we((p(), O(
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
    [e.loading || e.pending ? (p(), he(
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
    )) : ne("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), _(
      a,
      {
        hovering: e.hovering
      },
      null,
      8,
      ["hovering"]
    )],
    46,
    Cc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var ru = ee({
  name: "VarButton",
  components: {
    VarLoading: Vn,
    VarHoverOverlay: tn
  },
  directives: {
    Ripple: Ue,
    Hover: Nn
  },
  props: hc,
  setup(e) {
    var n = B(!1), {
      buttonGroup: r
    } = yc(), {
      hovering: a,
      handleHovering: t
    } = Cr(), o = R(() => {
      if (!r)
        return {
          elevation: dn(e.elevation, 2),
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
      e.autoLoading && (n.value = !0, u = Ce(u) ? u : [u], Promise.all(u).then(() => {
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
      !f || d || v || n.value || l(S(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || l(S(f, u));
    };
    return {
      n: bc,
      classes: wc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
ru.render = Sc;
const Ze = ru;
Ze.install = function(e) {
  e.component(Ze.name, Ze);
};
var CS = Ze, kc = {
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
  onClick: F()
}, {
  n: $c,
  classes: Tc
} = re("back-top");
function Pc(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return p(), he(
    Na,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
      "div",
      Ve({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = cn(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [Y(e.$slots, "default", {}, () => [_(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: ue(() => [_(r, {
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
var au = ee({
  name: "VarBackTop",
  components: {
    VarButton: Ze,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: kc,
  setup(e) {
    var n = B(!1), r = B(null), a = B(!0), t, o = (d) => {
      S(e.onClick, d);
      var v = bi(t);
      vt(t, {
        left: v,
        duration: e.duration,
        animation: fs
      });
    }, l = yi(() => {
      n.value = dt(t) >= Le(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? ms(e.target, "BackTop") : br(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return Jt(() => {
      i(), s(), a.value = !1;
    }), $r(s), Qt(u), Tr(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: me,
      n: $c,
      classes: Tc,
      handleClick: o
    };
  }
});
au.render = Pc;
const Ir = au;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var SS = Ir;
function Oc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Vc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Mc = {
  type: {
    type: String,
    default: "default",
    validator: Oc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Vc
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
  n: Bc,
  classes: Ec
} = re("badge");
function Ic(e, n) {
  var r = te("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "default"), _(
      De,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ue(() => [we(A(
          "span",
          Ve({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (p(), he(
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
          )) : ne("v-if", !0), Y(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), O(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            ae(e.value),
            3
            /* TEXT, CLASS */
          )) : ne("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[yr, !e.hidden]])]),
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
var tu = ee({
  name: "VarBadge",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: Mc,
  setup(e) {
    var n = R(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: Bc,
      classes: Ec,
      value: n
    };
  }
});
tu.render = Ic;
const sr = tu;
sr.install = function(e) {
  e.component(sr.name, sr);
};
var kS = sr, Nc = {
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
  onChange: F(),
  "onUpdate:active": F(),
  onBeforeChange: F(),
  onFabClick: F(),
  fabProps: {
    type: Object
  }
}, ou = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Dc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(ou);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
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
var {
  n: Ac,
  classes: zc
} = re("bottom-navigation"), {
  n: io
} = re("bottom-navigation-item"), ll = io("--right-half-space"), sl = io("--left-half-space"), ul = io("--right-space"), Lc = {
  type: "primary"
};
function Rc(e, n) {
  var r = te("var-button");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [Y(e.$slots, "default"), e.$slots.fab ? (p(), he(
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
        default: ue(() => [Y(e.$slots, "fab")]),
        _: 3
        /* FORWARDED */
      },
      16,
      ["class", "onClick"]
    )) : ne("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var iu = ee({
  name: "VarBottomNavigation",
  components: {
    VarButton: Ze
  },
  props: Nc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = B(null), t = R(() => e.active), o = R(() => e.activeColor), l = R(() => e.inactiveColor), i = B({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Dc(), v = () => {
      s.value === 0 || f() || m() || g();
    }, f = () => u.find((b) => {
      var {
        name: V
      } = b;
      return t.value === V.value;
    }), m = () => u.find((b) => {
      var {
        index: V
      } = b;
      return t.value === V.value;
    }), g = () => {
      en(t.value) && (t.value < 0 ? S(e["onUpdate:active"], 0) : t.value > s.value - 1 && S(e["onUpdate:active"], s.value - 1));
    }, C = (b) => {
      t.value !== b && (e.onBeforeChange ? h(b) : y(b));
    }, h = (b) => {
      var V = S(e.onBeforeChange, b);
      V = Ce(V) ? V : [V], Promise.all(V).then((N) => {
        N.some((w) => !w) || y(b);
      });
    }, y = (b) => {
      S(e["onUpdate:active"], b), S(e.onChange, b);
    }, M = () => {
      var b = I();
      b.forEach((V) => {
        V.classList.remove(ll, sl, ul);
      });
    }, $ = (b) => {
      var V = I(), N = V.length, w = b % 2 === 0;
      V.forEach((k, H) => {
        T(w, k, H, N);
      });
    }, T = (b, V, N, w) => {
      var k = N === w - 1;
      if (!b && k) {
        V.classList.add(ul);
        return;
      }
      var H = N === w / 2 - 1, Q = N === w / 2;
      H ? V.classList.add(ll) : Q && V.classList.add(sl);
    }, I = () => Array.from(a.value.querySelectorAll("." + io())), P = () => {
      S(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: C
    };
    return d(D), ie(() => s.value, v), ie(() => e.fabProps, (b) => {
      i.value = Fo({}, Lc, b);
    }, {
      immediate: !0,
      deep: !0
    }), ln(() => {
      r.fab && $(s.value);
    }), _t(() => {
      M(), r.fab && $(s.value);
    }), {
      n: Ac,
      classes: zc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: P,
      fabProps: i
    };
  }
});
iu.render = Rc;
const Nr = iu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var $S = Nr, Uc = {
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
  onClick: F()
};
function Hc() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(ou);
  return r || Sn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: Fc,
  classes: Yc
} = re("bottom-navigation-item"), jc = {
  type: "danger",
  dot: !0
};
function Wc(e, n) {
  var r = te("var-icon"), a = te("var-badge"), t = Me("ripple");
  return we((p(), O(
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
    [e.icon && !e.$slots.icon ? (p(), he(
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
    )) : ne("v-if", !0), Y(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), he(
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
    )) : ne("v-if", !0), A(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? ne("v-if", !0) : (p(), O(
        $e,
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
      )), Y(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var lu = ee({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: sr,
    VarIcon: Te
  },
  directives: {
    Ripple: Ue
  },
  props: Uc,
  setup(e) {
    var n = R(() => e.name), r = R(() => e.badge), a = B({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = Hc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, g = (m = n.value) != null ? m : t.value;
      S(e.onClick, g), S(o.onToggle, g);
    };
    return l(d), ie(() => r.value, (m) => {
      a.value = m === !0 ? jc : r.value;
    }, {
      immediate: !0
    }), {
      n: Fc,
      classes: Yc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
lu.render = Wc;
const Dr = lu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var TS = Dr, Gc = {
  separator: {
    type: String
  },
  onClick: F()
}, su = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function qc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(su);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Xc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(su);
  return n || Sn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Kc,
  classes: Zc
} = re("breadcrumb");
function Jc(e, n) {
  return p(), O(
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
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? ne("v-if", !0) : Y(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [A(
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
var uu = ee({
  name: "VarBreadcrumb",
  props: Gc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Xc(), t = R(() => n.value === r.length.value - 1), o = R(() => r.separator.value), l = (i) => {
      t.value || S(e.onClick, i);
    };
    return a(null), {
      n: Kc,
      classes: Zc,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
uu.render = Jc;
const Ar = uu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var PS = Ar, Qc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: _c
} = re("breadcrumbs");
function xc(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var du = ee({
  name: "VarBreadcrumbs",
  props: Qc,
  setup(e) {
    var n = R(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = qc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: _c
    };
  }
});
du.render = xc;
const zr = du;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var OS = zr;
function em(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function nm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function rm(e) {
  return ["normal", "text", "outline"].includes(e);
}
var am = {
  type: {
    type: String,
    default: "default",
    validator: em
  },
  size: {
    type: String,
    default: "normal",
    validator: nm
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
    validator: rm
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
  n: tm,
  classes: om
} = re("button-group");
function im(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var vu = ee({
  name: "VarButtonGroup",
  props: am,
  setup(e) {
    var {
      bindButtons: n
    } = gc(), r = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return n(r), {
      n: tm,
      classes: om,
      formatElevation: dn
    };
  }
});
vu.render = im;
const Lr = vu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var VS = Lr;
function lm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var sm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: lm,
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
  onClick: F(),
  "onUpdate:floating": F()
};
function dl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        dl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        dl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: um,
  classes: dm
} = re("card"), vm = 500, fm = ["src", "alt"];
function cm(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = Me("ripple");
  return we((p(), O(
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
      [Y(e.$slots, "image", {}, () => [e.src ? (p(), O(
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
        fm
      )) : ne("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("container"))
        },
        [Y(e.$slots, "title", {}, () => [e.title ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ae(e.title),
          3
          /* TEXT, CLASS */
        )) : ne("v-if", !0)]), Y(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ae(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ne("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : ne("v-if", !0)]), e.$slots.extra ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [Y(e.$slots, "extra")],
          2
          /* CLASS */
        )) : ne("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), O(
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
          [Y(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : ne("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), O(
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
        [Y(e.$slots, "close-button", {}, () => [_(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: cn(e.close, ["stop"])
          },
          {
            default: ue(() => [_(
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
      )) : ne("v-if", !0)],
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
var fu = ee({
  name: "VarCard",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarButton: Ze
  },
  props: sm,
  setup(e) {
    var n = B(null), r = B(null), a = B("auto"), t = B("auto"), o = B("100%"), l = B("100%"), i = B("auto"), s = B("auto"), u = B(void 0), d = B("hidden"), v = B("0px"), f = B("0"), m = R(() => e.layout === "row"), g = B(!1), C = B(!1), {
      zIndex: h
    } = Ct(() => e.floating, 1);
    ao(() => e.floating, () => !m.value);
    var y = "auto", M = "auto", $ = null, T = B(null), I = /* @__PURE__ */ function() {
      var V = vl(function* () {
        clearTimeout(T.value), clearTimeout($), T.value = null, T.value = setTimeout(/* @__PURE__ */ vl(function* () {
          var {
            width: N,
            height: w,
            left: k,
            top: H
          } = n.value.getBoundingClientRect();
          a.value = me(N), t.value = me(w), o.value = a.value, l.value = t.value, i.value = me(H), s.value = me(k), u.value = "fixed", y = i.value, M = s.value, g.value = !0, yield In(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", C.value = !0;
        }), e.ripple ? vm : 0);
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), P = () => {
      clearTimeout($), clearTimeout(T.value), T.value = null, o.value = a.value, l.value = t.value, i.value = y, s.value = M, v.value = "0px", f.value = "0", g.value = !1, $ = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", y = "auto", M = "auto", d.value = "hidden", u.value = void 0, C.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      S(e["onUpdate:floating"], !1);
    }, b = (V) => {
      S(e.onClick, V);
    };
    return ie(() => e.floating, (V) => {
      m.value || Be(() => {
        V ? I() : P();
      });
    }, {
      immediate: !0
    }), {
      n: um,
      classes: dm,
      toSizeUnit: me,
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
      zIndex: h,
      isRow: m,
      close: D,
      showFloatingButtons: g,
      floated: C,
      formatElevation: dn,
      handleClick: b
    };
  }
});
fu.render = cm;
const Rr = fu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var MS = Rr, mm = {
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
  onClick: F()
}, {
  n: pm,
  classes: hm
} = re("cell");
function gm(e, n) {
  var r = te("var-icon"), a = Me("ripple");
  return we((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "icon", {}, () => [e.icon ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [_(
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
    )) : ne("v-if", !0)]), A(
      "div",
      {
        class: c(e.n("content"))
      },
      [Y(e.$slots, "default", {}, () => [e.title ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ae(e.title),
        3
        /* TEXT, CLASS */
      )) : ne("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ae(e.description),
        3
        /* TEXT, CLASS */
      )) : ne("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [Y(e.$slots, "extra")],
      2
      /* CLASS */
    )) : ne("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var cu = ee({
  name: "VarCell",
  components: {
    VarIcon: Te
  },
  directives: {
    Ripple: Ue
  },
  props: mm,
  setup(e) {
    var n = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": me(e.borderOffset),
      "--cell-border-right": me(e.borderOffset)
    }), r = (a) => {
      S(e.onClick, a);
    };
    return {
      n: pm,
      classes: hm,
      toSizeUnit: me,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
cu.render = gm;
const ur = cu;
ur.install = function(e) {
  e.component(ur.name, ur);
};
var BS = ur, ym = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: bm
} = re("form-details"), wm = {
  key: 0
}, Cm = {
  key: 0
};
function Sm(e, n) {
  return p(), he(
    De,
    {
      name: e.n()
    },
    {
      default: ue(() => [e.errorMessage || e.extraMessage ? (p(), O(
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
          [_(
            De,
            {
              name: e.n("message")
            },
            {
              default: ue(() => [e.errorMessage ? (p(), O(
                "div",
                wm,
                ae(e.errorMessage),
                1
                /* TEXT */
              )) : ne("v-if", !0)]),
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
          [_(
            De,
            {
              name: e.n("message")
            },
            {
              default: ue(() => [e.extraMessage ? (p(), O(
                "div",
                Cm,
                ae(e.extraMessage),
                1
                /* TEXT */
              )) : ne("v-if", !0)]),
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
      )) : ne("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var mu = ee({
  name: "VarFormDetails",
  props: ym,
  setup: () => ({
    n: bm
  })
});
mu.render = Sm;
const qe = mu;
qe.install = function(e) {
  e.component(qe.name, qe);
};
var ES = qe, km = {
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
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, pu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function $m() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(pu);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Tm() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(pu);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function Yo() {
  return Yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Yo.apply(this, arguments);
}
var hu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function $n() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(hu), a = Ia(), t = r ? (o) => {
    r(Yo({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: n,
    form: e,
    bindForm: t
  };
}
function Pm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(hu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: Om,
  classes: Vm
} = re("checkbox");
function Mm(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Me("hover"), l = Me("ripple");
  return p(), O(
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
      [we((p(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [_(
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
        )]) : Y(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [_(
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
        )]), _(
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
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), _(
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
var gu = ee({
  name: "VarCheckbox",
  directives: {
    Ripple: Ue,
    Hover: Nn
  },
  components: {
    VarIcon: Te,
    VarFormDetails: qe,
    VarHoverOverlay: tn
  },
  props: km,
  setup(e) {
    var n = B(!1), r = R(() => n.value === e.checkedValue), a = R(() => e.checkedValue), t = B(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Tm(), {
      hovering: i,
      handleHovering: s
    } = Cr(), {
      form: u,
      bindForm: d
    } = $n(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = kn(), C = (b) => {
      Be(() => {
        var {
          validateTrigger: V,
          rules: N,
          modelValue: w
        } = e;
        f(V, b, N, w);
      });
    }, h = (b) => {
      n.value = b;
      var {
        checkedValue: V,
        onChange: N
      } = e;
      S(e["onUpdate:modelValue"], n.value), S(N, n.value), C("onChange"), b === V ? o == null || o.onChecked(V) : o == null || o.onUnchecked(V);
    }, y = (b) => {
      var {
        disabled: V,
        readonly: N,
        checkedValue: w,
        uncheckedValue: k,
        onClick: H
      } = e;
      if (!(u != null && u.disabled.value || V) && (S(H, b), !(u != null && u.readonly.value || N))) {
        t.value = !0;
        var Q = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && Q || h(r.value ? k : w);
      }
    }, M = (b) => {
      var {
        checkedValue: V,
        uncheckedValue: N
      } = e;
      n.value = b.includes(V) ? V : N;
    }, $ = () => {
      t.value = !1;
    }, T = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), g();
    }, I = (b) => {
      var {
        checkedValue: V,
        uncheckedValue: N
      } = e, w = ![V, N].includes(b);
      w && (b = r.value ? N : V), h(b);
    }, P = () => m(e.rules, e.modelValue);
    ie(() => e.modelValue, (b) => {
      n.value = b;
    }, {
      immediate: !0
    });
    var D = {
      checkedValue: a,
      checked: r,
      sync: M,
      validate: P,
      resetValidation: g,
      reset: T,
      resetWithAnimation: $
    };
    return S(l, D), S(d, D), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Om,
      classes: Vm,
      handleClick: y,
      toggle: I,
      reset: T,
      validate: P,
      resetValidation: g
    };
  }
});
gu.render = Mm;
const dr = gu;
dr.install = function(e) {
  e.component(dr.name, dr);
};
var IS = dr;
function Bm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Em = {
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
    validator: Bm
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Im,
  classes: Nm
} = re("checkbox-group");
function Dm(e, n) {
  var r = te("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), _(
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
var yu = ee({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: qe
  },
  props: Em,
  setup(e) {
    var n = R(() => e.max), r = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = $m(), {
      bindForm: l
    } = $n(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = kn(), v = R(() => i.value), f = (D) => {
      Be(() => {
        var {
          validateTrigger: b,
          rules: V,
          modelValue: N
        } = e;
        s(b, D, V, N);
      });
    }, m = (D) => {
      S(e["onUpdate:modelValue"], D), S(e.onChange, D), f("onChange");
    }, g = (D) => {
      var {
        modelValue: b
      } = e;
      b.includes(D) || m([...b, D]);
    }, C = (D) => {
      var {
        modelValue: b
      } = e;
      b.includes(D) && m(b.filter((V) => V !== D));
    }, h = () => t.forEach((D) => {
      var {
        sync: b
      } = D;
      return b(e.modelValue);
    }), y = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, M = () => {
      var D = t.map((V) => {
        var {
          checkedValue: N
        } = V;
        return N.value;
      }), b = qi(D);
      return y(), S(e["onUpdate:modelValue"], b), b;
    }, $ = () => {
      var D = t.filter((V) => {
        var {
          checked: N
        } = V;
        return !N.value;
      }).map((V) => {
        var {
          checkedValue: N
        } = V;
        return N.value;
      }), b = qi(D);
      return y(), S(e["onUpdate:modelValue"], b), b;
    }, T = () => {
      S(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, h, {
      deep: !0
    }), ie(() => a.value, h);
    var P = {
      max: n,
      checkedCount: r,
      onChecked: g,
      onUnchecked: C,
      validate: I,
      resetValidation: d,
      reset: T,
      errorMessage: v
    };
    return o(P), S(l, P), {
      errorMessage: i,
      n: Im,
      classes: Nm,
      checkAll: M,
      inverseAll: $,
      reset: T,
      validate: I,
      resetValidation: d
    };
  }
});
yu.render = Dm;
const Ur = yu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var NS = Ur;
function Am(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function zm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Lm = {
  type: {
    type: String,
    default: "default",
    validator: Am
  },
  size: {
    type: String,
    default: "normal",
    validator: zm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: We(Ms, "name"),
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
  onClose: F()
}, {
  n: Jn,
  classes: Rm
} = re("chip");
function Um(e, n) {
  var r = te("var-icon");
  return p(), he(
    De,
    {
      name: e.n("$-fade")
    },
    {
      default: ue(() => [A(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [Y(e.$slots, "left"), A(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [Y(e.$slots, "default")],
          2
          /* CLASS */
        ), Y(e.$slots, "right"), e.closable ? (p(), O(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [_(
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
        )) : ne("v-if", !0)],
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
var bu = ee({
  name: "VarChip",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: Lm,
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
      } = e, u = Jn(o ? "$--flex" : "$--inline-flex"), d = i ? Jn("plain") + " " + Jn("plain-" + l) : Jn("--" + l), v = s ? Jn("--round") : null;
      return [Jn("--" + t), u, d, v];
    }), a = (t) => {
      S(e.onClose, t);
    };
    return {
      n: Jn,
      classes: Rm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
bu.render = Um;
const vr = bu;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var DS = vr;
function Hm(e) {
  return ["row", "column"].includes(e);
}
function Fm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Ym(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var jm = {
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
    validator: Hm
  },
  justify: {
    type: String,
    validator: Fm
  },
  align: {
    type: String,
    validator: Ym
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
  onClick: F()
}, wu = Symbol("ROW_BIND_COL_KEY");
function Wm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(wu);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Gm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(wu);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: Ot,
  classes: qm
} = re("col");
function Xm(e, n) {
  return p(), O(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Cu = ee({
  name: "VarCol",
  props: jm,
  setup(e) {
    var n = B({
      left: 0,
      right: 0
    }), r = R(() => L(e.span)), a = R(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Gm(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (hi(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Ot("--span-" + u + "-" + m)), f && v.push(Ot("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Ot("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      S(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), S(o, l), {
      n: Ot,
      classes: qm,
      padding: n,
      toNumber: L,
      toSizeUnit: me,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Ht
    };
  }
});
Cu.render = Xm;
const Hr = Cu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var AS = Hr, Su = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Km() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(Su);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var Zm = {
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Jm
} = re("collapse");
function Qm(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var ku = ee({
  name: "VarCollapse",
  props: Zm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Km(), t = R(() => e.modelValue), o = R(() => e.offset), l = R(() => e.divider), i = R(() => e.elevation), s = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (C, h) => s() ? h ? e.accordion ? C : [...e.modelValue, C] : e.accordion ? null : e.modelValue.filter((y) => y !== C) : null, d = (C, h) => {
      var y = u(C, h);
      S(e["onUpdate:modelValue"], y), S(e.onChange, y);
    }, v = () => {
      if (e.accordion)
        return r.find((h) => {
          var {
            name: y
          } = h;
          return e.modelValue === y.value;
        });
      var C = r.filter((h) => {
        var {
          name: y
        } = h;
        return y.value === void 0 ? !1 : e.modelValue.includes(y.value);
      });
      return C.length ? C : void 0;
    }, f = () => e.accordion ? r.find((C) => {
      var {
        index: h,
        name: y
      } = C;
      return y.value === void 0 && e.modelValue === h.value;
    }) : r.filter((C) => {
      var {
        index: h,
        name: y
      } = C;
      return y.value === void 0 && e.modelValue.includes(h.value);
    }), m = () => {
      if (s()) {
        var C = v() || f();
        if (e.accordion && !C || !e.accordion && !C.length) {
          r.forEach((h) => {
            h.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((h) => {
          var y = e.accordion ? C === h : C.includes(h);
          h.init(e.accordion, y);
        });
      }
    }, g = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(g), ie(() => n.value, () => Be().then(m)), ie(() => e.modelValue, () => Be().then(m)), {
      n: Jm,
      divider: l
    };
  }
});
ku.render = Qm;
const Fr = ku;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var zS = Fr;
function _m() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(Su);
  return r || Sn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var xm = {
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
  n: ep,
  classes: np
} = re("collapse-item");
function rp(e, n) {
  var r = te("var-icon");
  return p(), O(
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
        [Y(e.$slots, "title", {}, () => [be(
          ae(e.title),
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
        [Y(e.$slots, "icon", {}, () => [_(
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
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[yr, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var $u = ee({
  name: "VarCollapseItem",
  components: {
    VarIcon: Te
  },
  props: xm,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = _m(), t = !0, o = B(null), l = B(!1), i = B(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = r, m = R(() => e.name), g = (I, P) => {
      s.value === void 0 || I && Ce(s.value) || P === i.value || (i.value = P, C(!0));
    }, C = (I) => {
      e.disabled || I || f(e.name || n.value, !i.value);
    }, h = () => {
      o.value && (o.value.style.height = "", l.value = !0, yn(() => {
        var {
          offsetHeight: I
        } = o.value;
        o.value.style.height = 0 + "px", yn(() => {
          o.value.style.height = I + "px", t && no(() => {
            t && $();
          });
        });
      }));
    }, y = () => {
      t = !1;
    }, M = () => {
      if (o.value) {
        var {
          offsetHeight: I
        } = o.value;
        o.value.style.height = I + "px", yn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, $ = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, T = {
      index: n,
      name: m,
      init: g
    };
    return a(T), ie(i, (I) => {
      I ? h() : M();
    }), {
      n: ep,
      start: y,
      classes: np,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: C,
      contentEl: o,
      transitionend: $,
      formatElevation: dn
    };
  }
});
$u.render = rp;
const Yr = $u;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var LS = Yr, ap = {
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
  onEnd: F(),
  onChange: F()
}, {
  n: tp
} = re("countdown"), jo = 1e3, Wo = 60 * jo, Go = 60 * Wo, fl = 24 * Go;
function op(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default", bt(xt(e.timeData)), () => [be(
      ae(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Tu = ee({
  name: "VarCountdown",
  props: ap,
  setup(e) {
    var n = B(""), r = B({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (g, C) => {
      var h = Object.values(C), y = ["DD", "HH", "mm", "ss"], M = [24, 60, 60, 1e3];
      if (y.forEach((T, I) => {
        g.includes(T) ? g = g.replace(T, Va("" + h[I], 2, "0")) : h[I + 1] += h[I] * M[I];
      }), g.includes("S")) {
        var $ = Va("" + h[h.length - 1], 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", $) : g.includes("SS") ? g = g.replace("SS", $.slice(0, 2)) : g = g.replace("S", $.slice(0, 1));
      }
      return g;
    }, u = (g) => {
      var C = Math.floor(g / fl), h = Math.floor(g % fl / Go), y = Math.floor(g % Go / Wo), M = Math.floor(g % Wo / jo), $ = Math.floor(g % jo), T = {
        days: C,
        hours: h,
        minutes: y,
        seconds: M,
        milliseconds: $
      };
      r.value = T, S(e.onChange, r.value), n.value = s(e.format, T);
    }, d = () => {
      var {
        time: g,
        onEnd: C
      } = e, h = performance.now();
      if (a || (a = h + L(g)), l = a - h, l < 0 && (l = 0), u(l), l === 0) {
        S(C);
        return;
      }
      t && (o = yn(d));
    }, v = function(g) {
      g === void 0 && (g = !1), !(t && !g) && (t = !0, a = performance.now() + (l || L(e.time)), d());
    }, f = () => {
      t = !1, el(o);
    }, m = () => {
      a = 0, t = !1, el(o), d();
    };
    return ie(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), $r(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), Tr(() => {
      i = t, f();
    }), _a(f), {
      showTime: n,
      timeData: r,
      n: tp,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Tu.render = op;
const jr = Tu;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var RS = jr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ua = 9e15, Pr = 1e9, qo = "0123456789abcdef", jt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Wt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Xo = {
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
  minE: -Ua,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ua,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Pu, Un, ce = !0, lo = "[DecimalError] ", Sr = lo + "Invalid argument: ", Ou = lo + "Precision limit exceeded", Vu = lo + "crypto unavailable", Mu = "[object Decimal]", Je = Math.floor, Ye = Math.pow, ip = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, lp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, sp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Bu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Mn = 1e7, ve = 7, up = 9007199254740991, dp = jt.length - 1, Ko = Wt.length - 1, K = { toStringTag: Mu };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), de(e);
};
K.ceil = function() {
  return de(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(Sr + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = vp(a, Au(a, r)), a.precision = e, a.rounding = n, de(Un == 2 || Un == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ce = !1, o = d.s * Ye(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Ke(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ye(r, 1 / 3), e = Je((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Oe(u.plus(d).times(i), u.plus(s), l + 2, 1), Ke(i.d).slice(0, l) === (r = Ke(a.d)).slice(0, l))
      if (r = r.slice(l - 3, l + 1), r == "9999" || !t && r == "4999") {
        if (!t && (de(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (de(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return ce = !0, de(a, e, v.rounding, n);
};
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Je(this.e / ve)) * ve, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
K.dividedBy = K.div = function(e) {
  return Oe(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var n = this, r = n.constructor;
  return de(Oe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return de(new this.constructor(this), this.e + 1, 3);
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
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / uo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Xa(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return de(o, l.precision = r, l.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Xa(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / uo(5, e)), t = Xa(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, de(t, n, r, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Oe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? On(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? On(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = On(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, ce = !1, r = r.times(r).minus(1).sqrt().plus(r), ce = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, ce = !1, r = r.times(r).plus(1).sqrt().plus(r), ce = !0, a.precision = e, a.rounding = n, r.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? de(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Oe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
K.inverseSine = K.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = On(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Ko)
      return l = On(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Ko)
      return l = On(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / ve + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ce = !1, n = Math.ceil(i / ve), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), ce = !0, de(l, d.precision = v, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && Je(this.e / ve) > this.d.length - 2;
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
  if (ce = !1, i = v + m, l = or(u, i), a = n ? Gt(d, i + 10) : or(e, i), s = Oe(l, a, i, 1), ct(s.d, t = v, f))
    do
      if (i += 10, l = or(u, i), a = n ? Gt(d, i + 10) : or(e, i), s = Oe(l, a, i, 1), !o) {
        +Ke(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = de(s, v + 1, 0));
        break;
      }
    while (ct(s.d, t += 10, f));
  return ce = !0, de(s, v, f);
};
K.minus = K.sub = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, g = m.constructor;
  if (e = new g(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new g(NaN) : m.d ? e.s = -e.s : e = new g(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, i = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new g(m);
    else
      return new g(s === 3 ? -0 : 0);
    return ce ? de(e, i, s) : e;
  }
  if (r = Je(e.e / ve), d = Je(m.e / ve), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, l = f.length) : (n = f, r = d, l = u.length), a = Math.max(Math.ceil(i / ve), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
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
        u[t] = Mn - 1;
      --u[t], u[a] += Mn;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = so(u, r), ce ? de(e, i, s) : e) : new g(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? de(new a(r), a.precision, a.rounding) : (ce = !1, a.modulo == 9 ? (n = Oe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Oe(r, e, 0, a.modulo, 1), n = n.times(e), ce = !0, r.minus(n));
};
K.naturalExponential = K.exp = function() {
  return Zo(this);
};
K.naturalLogarithm = K.ln = function() {
  return or(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, de(e);
};
K.plus = K.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), ce ? de(e, i, s) : e;
  if (o = Je(v.e / ve), a = Je(e.e / ve), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / ve), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Mn | 0, u[t] %= Mn;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = so(u, a), ce ? de(e, i, s) : e;
};
K.precision = K.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Sr + e);
  return r.d ? (n = Eu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return de(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = cp(a, Au(a, r)), a.precision = e, a.rounding = n, de(Un > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (ce = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = Ke(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Je((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Oe(l, o, r + 2, 1)).times(0.5), Ke(o.d).slice(0, r) === (n = Ke(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (de(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (de(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return ce = !0, de(a, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Oe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, de(Un == 2 || Un == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.times = K.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Je(d.e / ve) + Je(e.e / ve), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + n, o[t--] = i % Mn | 0, n = i / Mn | 0;
    o[t] = (o[t] + n) % Mn | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = so(o, r), ce ? de(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, n) {
  return Mi(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (on(e, 0, Pr), n === void 0 ? n = a.rounding : on(n, 0, 8), de(r, e + r.e + 1, n));
};
K.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Dn(a, !0) : (on(e, 0, Pr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = de(new t(a), e + 1, n), r = Dn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Dn(t) : (on(e, 0, Pr), n === void 0 ? n = o.rounding : on(n, 0, 8), a = de(new o(t), e + t.e + 1, n), r = Dn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
K.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, g = m.d, C = m.constructor;
  if (!g)
    return new C(m);
  if (u = r = new C(1), a = s = new C(0), n = new C(a), o = n.e = Eu(g) - m.e - 1, l = o % ve, n.d[0] = Ye(10, l < 0 ? ve + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new C(e), !i.isInt() || i.lt(u))
      throw Error(Sr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (ce = !1, i = new C(Ke(g)), d = C.precision, C.precision = o = g.length * ve * 2; v = Oe(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Oe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Oe(u, a, o, 1).minus(m).abs().cmp(Oe(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], C.precision = d, ce = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return Mi(this, 16, e, n);
};
K.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : on(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (ce = !1, r = Oe(r, e, 0, n, 1).times(e), ce = !0, de(r)) : (e.s = r.s, r = e), r;
};
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, n) {
  return Mi(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ye(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return de(i, a, o);
  if (n = Je(e.e / ve), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= up)
    return t = Iu(s, i, r, a), e.s < 0 ? new s(1).div(t) : de(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Ye(+i, u), n = r == 0 || !isFinite(r) ? Je(u * (Math.log("0." + Ke(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (ce = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = Zo(e.times(or(i, a + r)), a), t.d && (t = de(t, a + 5, 1), ct(t.d, a, o) && (n = a + 10, t = de(Zo(e.times(or(i, n + r)), n), n + 5, 1), +Ke(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = de(t, a + 1, 0)))), t.s = l, ce = !0, s.rounding = o, de(t, a, o));
};
K.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Dn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (on(e, 1, Pr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = de(new t(a), e, n), r = Dn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (on(e, 1, Pr), n === void 0 ? n = a.rounding : on(n, 0, 8)), de(new a(r), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, r = Dn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
K.truncated = K.trunc = function() {
  return de(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, r = Dn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Ke(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = ve - a.length, r && (o += _n(r)), o += a;
    l = e[n], a = l + "", r = ve - a.length, r && (o += _n(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function on(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(Sr + e);
}
function ct(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += ve, t = 0) : (t = Math.ceil((n + 1) / ve), n %= ve), o = Ye(10, ve - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ye(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ye(10, n - 3) - 1, l;
}
function Dt(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += qo.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function vp(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / uo(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Xa(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var l = n.times(n);
    n = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Oe = function() {
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
    var u, d, v, f, m, g, C, h, y, M, $, T, I, P, D, b, V, N, w, k, H = a.constructor, Q = a.s == t.s ? 1 : -1, x = a.d, j = t.d;
    if (!x || !x[0] || !j || !j[0])
      return new H(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (x ? j && x[0] == j[0] : !j) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          x && x[0] == 0 || !j ? Q * 0 : Q / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Mn, m = ve, d = Je(a.e / m) - Je(t.e / m)), w = j.length, V = x.length, y = new H(Q), M = y.d = [], v = 0; j[v] == (x[v] || 0); v++)
      ;
    if (j[v] > (x[v] || 0) && d--, o == null ? (P = o = H.precision, l = H.rounding) : i ? P = o + (a.e - t.e) + 1 : P = o, P < 0)
      M.push(1), g = !0;
    else {
      if (P = P / m + 2 | 0, v = 0, w == 1) {
        for (f = 0, j = j[0], P++; (v < V || f) && P--; v++)
          D = f * s + (x[v] || 0), M[v] = D / j | 0, f = D % j | 0;
        g = f || v < V;
      } else {
        for (f = s / (j[0] + 1) | 0, f > 1 && (j = e(j, f, s), x = e(x, f, s), w = j.length, V = x.length), b = w, $ = x.slice(0, w), T = $.length; T < w; )
          $[T++] = 0;
        k = j.slice(), k.unshift(0), N = j[0], j[1] >= s / 2 && ++N;
        do
          f = 0, u = n(j, $, w, T), u < 0 ? (I = $[0], w != T && (I = I * s + ($[1] || 0)), f = I / N | 0, f > 1 ? (f >= s && (f = s - 1), C = e(j, f, s), h = C.length, T = $.length, u = n(C, $, h, T), u == 1 && (f--, r(C, w < h ? k : j, h, s))) : (f == 0 && (u = f = 1), C = j.slice()), h = C.length, h < T && C.unshift(0), r($, C, T, s), u == -1 && (T = $.length, u = n(j, $, w, T), u < 1 && (f++, r($, w < T ? k : j, T, s))), T = $.length) : u === 0 && (f++, $ = [0]), M[v++] = f, u && $[0] ? $[T++] = x[b] || 0 : ($ = [x[b]], T = 1);
        while ((b++ < V || $[0] !== void 0) && P--);
        g = $[0] !== void 0;
      }
      M[0] || M.shift();
    }
    if (m == 1)
      y.e = d, Pu = g;
    else {
      for (v = 1, f = M[0]; f >= 10; f /= 10)
        v++;
      y.e = v + d * m - 1, de(y, i ? o + y.e + 1 : o, l, g);
    }
    return y;
  };
}();
function de(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = n - t, o < 0)
        o += ve, l = n, d = v[f = 0], s = d / Ye(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / ve), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= ve, l = o - ve + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= ve, l = o - ve + t, s = l < 0 ? 0 : d / Ye(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Ye(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? l > 0 ? d / Ye(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ye(10, (ve - n % ve) % ve), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Ye(10, ve - o), v[f] = l > 0 ? (d / Ye(10, t - l) % Ye(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == Mn && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != Mn)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return ce && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Dn(e, n, r) {
  if (!e.isFinite())
    return Du(e);
  var a, t = e.e, o = Ke(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + _n(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + _n(-t - 1) + o, r && (a = r - l) > 0 && (o += _n(a))) : t >= l ? (o += _n(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + _n(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += _n(a))), o;
}
function so(e, n) {
  var r = e[0];
  for (n *= ve; r >= 10; r /= 10)
    n++;
  return n;
}
function Gt(e, n, r) {
  if (n > dp)
    throw ce = !0, r && (e.precision = r), Error(Ou);
  return de(new e(jt), n, 1, !0);
}
function On(e, n, r) {
  if (n > Ko)
    throw Error(Ou);
  return de(new e(Wt), n, r, !0);
}
function Eu(e) {
  var n = e.length - 1, r = n * ve + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function _n(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Iu(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / ve + 4);
  for (ce = !1; ; ) {
    if (r % 2 && (o = o.times(n), ml(o.d, l) && (t = !0)), r = Je(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), ml(n.d, l);
  }
  return ce = !0, o;
}
function cl(e) {
  return e.d[e.d.length - 1] & 1;
}
function Nu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Zo(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ce = !1, s = g) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ye(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = de(o.times(e), s, 1), r = r.times(++d), i = l.plus(Oe(o, r, s, 1)), Ke(i.d).slice(0, s) === Ke(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = de(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && ct(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return de(l, f.precision = g, m, ce = !0);
      else
        return f.precision = g, l;
    }
    l = i;
  }
}
function or(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, g = 10, C = e, h = C.d, y = C.constructor, M = y.rounding, $ = y.precision;
  if (C.s < 0 || !h || !h[0] || !C.e && h[0] == 1 && h.length == 1)
    return new y(h && !h[0] ? -1 / 0 : C.s != 1 ? NaN : h ? 0 : C);
  if (n == null ? (ce = !1, d = $) : d = n, y.precision = d += g, r = Ke(h), a = r.charAt(0), Math.abs(o = C.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      C = C.times(e), r = Ke(C.d), a = r.charAt(0), m++;
    o = C.e, a > 1 ? (C = new y("0." + r), o++) : C = new y(a + "." + r.slice(1));
  } else
    return u = Gt(y, d + 2, $).times(o + ""), C = or(new y(a + "." + r.slice(1)), d - g).plus(u), y.precision = $, n == null ? de(C, $, M, ce = !0) : C;
  for (v = C, s = l = C = Oe(C.minus(1), C.plus(1), d, 1), f = de(C.times(C), d, 1), t = 3; ; ) {
    if (l = de(l.times(f), d, 1), u = s.plus(Oe(l, new y(t), d, 1)), Ke(u.d).slice(0, d) === Ke(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Gt(y, d + 2, $).times(o + ""))), s = Oe(s, new y(m), d, 1), n == null)
        if (ct(s.d, d - g, M, i))
          y.precision = d += g, u = l = C = Oe(v.minus(1), v.plus(1), d, 1), f = de(C.times(C), d, 1), t = i = 1;
        else
          return de(s, y.precision = $, M, ce = !0);
      else
        return y.precision = $, s;
    s = u, t += 2;
  }
}
function Du(e) {
  return String(e.s * e.s / 0);
}
function Jo(e, n) {
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
function fp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Bu.test(n))
      return Jo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (lp.test(n))
    r = 16, n = n.toLowerCase();
  else if (ip.test(n))
    r = 2;
  else if (sp.test(n))
    r = 8;
  else
    throw Error(Sr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = Iu(a, new a(r), o, o * 2)), u = Dt(n, r, Mn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = so(u, d), e.d = u, ce = !1, l && (e = Oe(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ye(2, s) : ir.pow(2, s))), ce = !0, e);
}
function cp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Xa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / uo(5, r)), n = Xa(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Xa(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / ve);
  for (ce = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Oe(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Oe(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return ce = !0, l.d.length = d + 1, l;
}
function uo(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Au(e, n) {
  var r, a = n.s < 0, t = On(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Un = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Un = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Un = cl(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Un = cl(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Mi(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, g = r !== void 0;
  if (g ? (on(r, 1, Pr), a === void 0 ? a = m.rounding : on(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Du(e);
  else {
    for (d = Dn(e), l = d.indexOf("."), g ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Dt(Dn(f), 10, t), f.e = f.d.length), v = Dt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Oe(e, f, r, a, 0, t), v = e.d, o = e.e, u = Pu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += qo.charAt(v[l]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Dt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += qo.charAt(v[l]);
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
function ml(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function mp(e) {
  return new this(e).abs();
}
function pp(e) {
  return new this(e).acos();
}
function hp(e) {
  return new this(e).acosh();
}
function gp(e, n) {
  return new this(e).plus(n);
}
function yp(e) {
  return new this(e).asin();
}
function bp(e) {
  return new this(e).asinh();
}
function wp(e) {
  return new this(e).atan();
}
function Cp(e) {
  return new this(e).atanh();
}
function Sp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = On(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? On(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = On(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Oe(e, n, o, 1)), n = On(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Oe(e, n, o, 1)), r;
}
function kp(e) {
  return new this(e).cbrt();
}
function $p(e) {
  return de(e = new this(e), e.e + 1, 2);
}
function Tp(e, n, r) {
  return new this(e).clamp(n, r);
}
function Pp(e) {
  if (!e || typeof e != "object")
    throw Error(lo + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Pr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ua,
    0,
    "toExpPos",
    0,
    Ua,
    "maxE",
    0,
    Ua,
    "minE",
    -Ua,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = Xo[r]), (a = e[r]) !== void 0)
      if (Je(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(Sr + r + ": " + a);
  if (r = "crypto", t && (this[r] = Xo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Vu);
      else
        this[r] = !1;
    else
      throw Error(Sr + r + ": " + a);
  return this;
}
function Op(e) {
  return new this(e).cos();
}
function Vp(e) {
  return new this(e).cosh();
}
function zu(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, pl(o)) {
      u.s = o.s, ce ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        ce ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Jo(u, o.toString());
    } else if (s !== "string")
      throw Error(Sr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Bu.test(o) ? Jo(u, o) : fp(u, o);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Pp, t.clone = zu, t.isDecimal = pl, t.abs = mp, t.acos = pp, t.acosh = hp, t.add = gp, t.asin = yp, t.asinh = bp, t.atan = wp, t.atanh = Cp, t.atan2 = Sp, t.cbrt = kp, t.ceil = $p, t.clamp = Tp, t.cos = Op, t.cosh = Vp, t.div = Mp, t.exp = Bp, t.floor = Ep, t.hypot = Ip, t.ln = Np, t.log = Dp, t.log10 = zp, t.log2 = Ap, t.max = Lp, t.min = Rp, t.mod = Up, t.mul = Hp, t.pow = Fp, t.random = Yp, t.round = jp, t.sign = Wp, t.sin = Gp, t.sinh = qp, t.sqrt = Xp, t.sub = Kp, t.sum = Zp, t.tan = Jp, t.tanh = Qp, t.trunc = _p, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Mp(e, n) {
  return new this(e).div(n);
}
function Bp(e) {
  return new this(e).exp();
}
function Ep(e) {
  return de(e = new this(e), e.e + 1, 3);
}
function Ip() {
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
function pl(e) {
  return e instanceof ir || e && e.toStringTag === Mu || !1;
}
function Np(e) {
  return new this(e).ln();
}
function Dp(e, n) {
  return new this(e).log(n);
}
function Ap(e) {
  return new this(e).log(2);
}
function zp(e) {
  return new this(e).log(10);
}
function Lp() {
  return Nu(this, arguments, "lt");
}
function Rp() {
  return Nu(this, arguments, "gt");
}
function Up(e, n) {
  return new this(e).mod(n);
}
function Hp(e, n) {
  return new this(e).mul(n);
}
function Fp(e, n) {
  return new this(e).pow(n);
}
function Yp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : on(e, 1, Pr), a = Math.ceil(e / ve), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Vu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= ve, a && e && (t = Ye(10, ve - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= ve)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < ve && (r -= ve - a);
  }
  return l.e = r, l.d = i, l;
}
function jp(e) {
  return de(e = new this(e), e.e + 1, this.rounding);
}
function Wp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Gp(e) {
  return new this(e).sin();
}
function qp(e) {
  return new this(e).sinh();
}
function Xp(e) {
  return new this(e).sqrt();
}
function Kp(e, n) {
  return new this(e).sub(n);
}
function Zp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ce = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ce = !0, de(r, this.precision, this.rounding);
}
function Jp(e) {
  return new this(e).tan();
}
function Qp(e) {
  return new this(e).tanh();
}
function _p(e) {
  return de(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var ir = K.constructor = zu(Xo);
jt = new ir(jt);
Wt = new ir(Wt);
var xp = {
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
  onBeforeChange: F(),
  onChange: F(),
  onIncrement: F(),
  onDecrement: F(),
  "onUpdate:modelValue": F()
}, {
  n: eh,
  classes: nh
} = re("counter"), hl = 100, gl = 600, rh = ["inputmode", "readonly", "disabled"];
function ah(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = te("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      Ve({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [_(
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
          default: ue(() => [_(r, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), we(A(
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
        rh
      ), [[Iv, e.inputValue]]), _(
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
          default: ue(() => [_(r, {
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
    ), _(
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
var Lu = ee({
  name: "VarCounter",
  components: {
    VarButton: Ze,
    VarIcon: Te,
    VarFormDetails: qe
  },
  directives: {
    Ripple: Ue
  },
  inheritAttrs: !1,
  props: xp,
  setup(e) {
    var n = B(""), {
      bindForm: r,
      form: a
    } = $n(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: l,
      // expose
      resetValidation: i
    } = kn(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, g = () => l(e.rules, e.modelValue), C = (j) => {
      Be(() => {
        var {
          validateTrigger: W,
          rules: le,
          modelValue: q
        } = e;
        o(W, j, le, q);
      });
    }, h = () => {
      var {
        min: j
      } = e;
      S(e["onUpdate:modelValue"], j != null ? L(j) : 0), i();
    }, y = {
      reset: h,
      validate: g,
      resetValidation: i
    }, M = R(() => {
      var {
        max: j,
        modelValue: W
      } = e;
      return j != null && L(W) >= L(j);
    }), $ = R(() => {
      var {
        min: j,
        modelValue: W
      } = e;
      return j != null && L(W) <= L(j);
    }), T = (j) => {
      var {
        decimalLength: W,
        max: le,
        min: q
      } = e, E = L(j);
      return le != null && E > L(le) && (E = L(le)), q != null && E < L(q) && (E = L(q)), j = String(E), W != null && (j = E.toFixed(L(W))), j;
    }, I = (j) => {
      var {
        lazyChange: W,
        onBeforeChange: le
      } = e, {
        value: q
      } = j.target, E = T(q);
      W ? S(le, L(E), x) : Q(E), C("onInputChange");
    }, P = () => {
      var {
        disabled: j,
        readonly: W,
        disableDecrement: le,
        decrementButton: q,
        lazyChange: E,
        step: z,
        modelValue: Z,
        onDecrement: U,
        onBeforeChange: X
      } = e;
      if (!(u != null && u.value || s != null && s.value || j || W || le || !q) && !$.value) {
        var J = new ir(L(Z)).minus(new ir(L(z))).toString(), fe = T(J), ge = L(fe);
        S(U, ge), E ? S(X, ge, x) : (Q(fe), C("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: j,
        readonly: W,
        disableIncrement: le,
        incrementButton: q,
        lazyChange: E,
        step: z,
        modelValue: Z,
        onIncrement: U,
        onBeforeChange: X
      } = e;
      if (!(u != null && u.value || s != null && s.value || j || W || le || !q) && !M.value) {
        var J = new ir(L(Z)).plus(new ir(L(z))).toString(), fe = T(J), ge = L(fe);
        S(U, ge), E ? S(X, ge, x) : (Q(fe), C("onIncrement"));
      }
    }, b = () => {
      var {
        press: j,
        lazyChange: W
      } = e;
      !j || W || (m = window.setTimeout(() => {
        H();
      }, gl));
    }, V = () => {
      var {
        press: j,
        lazyChange: W
      } = e;
      !j || W || (f = window.setTimeout(() => {
        k();
      }, gl));
    }, N = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, w = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, k = () => {
      d = window.setTimeout(() => {
        D(), k();
      }, hl);
    }, H = () => {
      v = window.setTimeout(() => {
        P(), H();
      }, hl);
    }, Q = (j) => {
      n.value = j;
      var W = L(j);
      S(e["onUpdate:modelValue"], W);
    }, x = (j) => {
      Q(T(String(j))), C("onLazyChange");
    };
    return S(r, y), ie(() => e.modelValue, (j) => {
      Q(T(String(j))), S(e.onChange, L(j));
    }), Q(T(String(e.modelValue))), {
      n: eh,
      classes: nh,
      formatElevation: dn,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: M,
      isMin: $,
      validate: g,
      reset: h,
      resetValidation: i,
      handleChange: I,
      decrement: P,
      increment: D,
      pressDecrement: b,
      pressIncrement: V,
      releaseDecrement: N,
      releaseIncrement: w,
      toSizeUnit: me,
      toNumber: L
    };
  }
});
Lu.render = ah;
const Wr = Lu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var US = Wr, Ru = 60, Uu = Ru * 60, Hu = Uu * 24, th = Hu * 7, Ka = 1e3, wo = Ru * Ka, yl = Uu * Ka, oh = Hu * Ka, ih = th * Ka, Bi = "millisecond", Ha = "second", Fa = "minute", Ya = "hour", xn = "day", At = "week", Pn = "month", Fu = "quarter", er = "year", ja = "date", lh = "YYYY-MM-DDTHH:mm:ssZ", bl = "Invalid Date", sh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, uh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const dh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Qo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, vh = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Qo(t, 2, "0") + ":" + Qo(o, 2, "0");
}, fh = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Pn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Pn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, ch = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, mh = function(n) {
  var r = {
    M: Pn,
    y: er,
    w: At,
    d: xn,
    D: ja,
    h: Ya,
    m: Fa,
    s: Ha,
    ms: Bi,
    Q: Fu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, ph = function(n) {
  return n === void 0;
};
const hh = {
  s: Qo,
  z: vh,
  m: fh,
  a: ch,
  p: mh,
  u: ph
};
var ot = "en", Gr = {};
Gr[ot] = dh;
var Ei = function(n) {
  return n instanceof vo;
}, qt = function e(n, r, a) {
  var t;
  if (!n)
    return ot;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Gr[o] && (t = o), r && (Gr[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Gr[i] = n, t = i;
  }
  return !a && t && (ot = t), t || !a && ot;
}, oe = function(n, r) {
  if (Ei(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new vo(a);
}, gh = function(n, r) {
  return oe(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Pe = hh;
Pe.l = qt;
Pe.i = Ei;
Pe.w = gh;
var yh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Pe.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(sh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, vo = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = qt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = yh(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Pe;
  }, n.isValid = function() {
    return this.$d.toString() !== bl;
  }, n.isSame = function(a, t) {
    var o = oe(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return oe(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < oe(a);
  }, n.$g = function(a, t, o) {
    return Pe.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Pe.u(t) ? !0 : t, i = Pe.p(a), s = function(y, M) {
      var $ = Pe.w(o.$u ? Date.UTC(o.$y, M, y) : new Date(o.$y, M, y), o);
      return l ? $ : $.endOf(xn);
    }, u = function(y, M) {
      var $ = [0, 0, 0, 0], T = [23, 59, 59, 999];
      return Pe.w(o.toDate()[y].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? $ : T).slice(M)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case er:
        return l ? s(1, 0) : s(31, 11);
      case Pn:
        return l ? s(1, v) : s(0, v + 1);
      case At: {
        var g = this.$locale().weekStart || 0, C = (d < g ? d + 7 : d) - g;
        return s(l ? f - C : f + (6 - C), v);
      }
      case xn:
      case ja:
        return u(m + "Hours", 0);
      case Ya:
        return u(m + "Minutes", 1);
      case Fa:
        return u(m + "Seconds", 2);
      case Ha:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Pe.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[xn] = i + "Date", o[ja] = i + "Date", o[Pn] = i + "Month", o[er] = i + "FullYear", o[Ya] = i + "Hours", o[Fa] = i + "Minutes", o[Ha] = i + "Seconds", o[Bi] = i + "Milliseconds", o)[l], u = l === xn ? this.$D + (t - this.$W) : t;
    if (l === Pn || l === er) {
      var d = this.clone().set(ja, 1);
      d.$d[s](u), d.init(), this.$d = d.set(ja, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Pe.p(a)]();
  }, n.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Pe.p(t), s = function(f) {
      var m = oe(o);
      return Pe.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Pn)
      return this.set(Pn, this.$M + a);
    if (i === er)
      return this.set(er, this.$y + a);
    if (i === xn)
      return s(1);
    if (i === At)
      return s(7);
    var u = (l = {}, l[Fa] = wo, l[Ya] = yl, l[Ha] = Ka, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Pe.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || bl;
    var l = a || lh, i = Pe.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, g = function($, T, I, P) {
      return $ && ($[T] || $(t, l)) || I[T].slice(0, P);
    }, C = function($) {
      return Pe.s(s % 12 || 12, $, "0");
    }, h = m || function(M, $, T) {
      var I = M < 12 ? "AM" : "PM";
      return T ? I.toLowerCase() : I;
    }, y = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Pe.s(d + 1, 2, "0"),
      MMM: g(o.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: Pe.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(o.weekdaysMin, this.$W, v, 2),
      ddd: g(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Pe.s(s, 2, "0"),
      h: C(1),
      hh: C(2),
      a: h(s, u, !0),
      A: h(s, u, !1),
      m: String(u),
      mm: Pe.s(u, 2, "0"),
      s: String(this.$s),
      ss: Pe.s(this.$s, 2, "0"),
      SSS: Pe.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(uh, function(M, $) {
      return $ || y[M] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Pe.p(t), s = oe(a), u = (s.utcOffset() - this.utcOffset()) * wo, d = this - s, v = Pe.m(this, s);
    return v = (l = {}, l[er] = v / 12, l[Pn] = v, l[Fu] = v / 3, l[At] = (d - u) / ih, l[xn] = (d - u) / oh, l[Ya] = d / yl, l[Fa] = d / wo, l[Ha] = d / Ka, l)[i] || d, o ? v : Pe.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Pn).$D;
  }, n.$locale = function() {
    return Gr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = qt(a, t, !0);
    return l && (o.$L = l), o;
  }, n.clone = function() {
    return Pe.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Yu = vo.prototype;
oe.prototype = Yu;
[["$ms", Bi], ["$s", Ha], ["$m", Fa], ["$H", Ya], ["$W", xn], ["$M", Pn], ["$y", er], ["$D", ja]].forEach(function(e) {
  Yu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
oe.extend = function(e, n) {
  return e.$i || (e(n, vo, oe), e.$i = !0), oe;
};
oe.locale = qt;
oe.isDayjs = Ei;
oe.unix = function(e) {
  return oe(e * 1e3);
};
oe.en = Gr[ot];
oe.Ls = Gr;
oe.p = {};
const ju = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Wu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function bh(e) {
  return ["date", "month"].includes(e);
}
var zt = [{
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
}], tt = [{
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
}], wh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: bh
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
  onPreview: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Ch
} = re("picker-header");
function Sh(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [_(
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
        default: ue(() => [_(r, {
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
      [_(
        De,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ue(() => [(p(), O(
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
    ), _(
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
        default: ue(() => [_(r, {
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
var Gu = ee({
  name: "PanelHeader",
  components: {
    VarButton: Ze,
    VarIcon: Te
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
      var f = (i = je.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return je.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return ie(() => e.date, () => {
      t.value = 0;
    }), {
      n: Ch,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Gu.render = Sh;
const qu = Gu;
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
oe.extend(ju);
oe.extend(Wu);
var {
  n: Vt,
  classes: kh
} = re("month-picker"), {
  n: Mt
} = re("date-picker");
function $h(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [_(
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
      ), _(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ue(() => [(p(), O("ul", {
            key: e.panelKey
          }, [(p(!0), O(
            $e,
            null,
            Ae(e.MONTH_LIST, (t) => (p(), O("li", {
              key: t.index
            }, [_(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, _o({}, e.buttonProps(t.index)), {
                onClick: n[0] || (n[0] = (o) => chooseMonth(t, o))
              }),
              {
                default: ue(() => [be(
                  ae(e.getMonthAbbr(t.index)),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1040,
              ["elevation"]
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
var Xu = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: Ze,
    PanelHeader: qu
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
    } = n, [a, t] = e.current.split("-"), o = B(!1), l = B(0), i = B(null), s = Ie({
      left: !1,
      right: !1
    }), u = R(() => e.choose.chooseYear === e.preview.previewYear), d = R(() => e.preview.previewYear === a), v = (M) => {
      var $, T;
      return ($ = (T = je.value.datePickerMonthDict) == null ? void 0 : T[M].abbr) != null ? $ : "";
    }, f = (M) => {
      var {
        preview: {
          previewYear: $
        },
        componentProps: {
          min: T,
          max: I
        }
      } = e, P = !0, D = !0, b = $ + "-" + M;
      return I && (P = oe(b).isSameOrBefore(oe(I), "month")), T && (D = oe(b).isSameOrAfter(oe(T), "month")), P && D;
    }, m = (M) => {
      var {
        choose: {
          chooseMonths: $,
          chooseDays: T,
          chooseRangeMonth: I
        },
        componentProps: {
          type: P,
          range: D
        }
      } = e;
      if (D) {
        if (!I.length)
          return !1;
        var b = oe(M).isSameOrBefore(oe(I[1]), "month"), V = oe(M).isSameOrAfter(oe(I[0]), "month");
        return b && V;
      }
      return P === "month" ? $.includes(M) : T.some((N) => N.includes(M));
    }, g = (M) => {
      var {
        choose: {
          chooseMonth: $
        },
        preview: {
          previewYear: T
        },
        componentProps: {
          allowedDates: I,
          color: P,
          multiple: D,
          range: b
        }
      } = e, V = T + "-" + M, N = () => b || D ? m(V) : ($ == null ? void 0 : $.index) === M && u.value, w = () => f(M) ? I ? !I(V) : !1 : !0, k = w(), H = () => k ? !0 : b || D ? !m(V) : !u.value || ($ == null ? void 0 : $.index) !== M, Q = () => d.value && t === M && e.componentProps.showCurrent ? (b || D || u.value) && k ? !0 : b || D ? !m(V) : u.value ? ($ == null ? void 0 : $.index) !== t : !0 : !1, x = () => k ? "" : Q() ? P ?? "" : N() ? "" : Mt() + "-color-cover", j = x().startsWith(Mt());
      return {
        outline: Q(),
        text: H(),
        color: H() ? "" : P,
        textColor: j ? "" : x(),
        [Mt() + "-color-cover"]: j,
        class: kh(Vt("button"), [k, Vt("button--disabled")]),
        disabled: k
      };
    }, C = (M, $) => {
      var T = $.currentTarget;
      T.classList.contains(Vt("button--disabled")) || r("choose-month", M);
    }, h = (M) => {
      o.value = M === "prev", l.value += M === "prev" ? -1 : 1, r("check-preview", "year", M);
    }, y = (M) => {
      i.value.checkDate(M);
    };
    return ie(() => e.preview.previewYear, (M) => {
      var {
        componentProps: {
          min: $,
          max: T
        }
      } = e;
      T && (s.right = !oe("" + (L(M) + 1)).isSameOrBefore(oe(T), "year")), $ && (s.left = !oe("" + (L(M) - 1)).isSameOrAfter(oe($), "year"));
    }, {
      immediate: !0
    }), {
      n: Vt,
      nDate: Mt,
      pack: je,
      MONTH_LIST: zt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: y,
      buttonProps: g,
      getMonthAbbr: v,
      chooseMonth: C,
      checkDate: h
    };
  }
});
Xu.render = $h;
const Th = Xu;
var {
  n: wl,
  classes: Ph
} = re("year-picker"), Oh = ["onClick"];
function Vh(e, n) {
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), O(
      $e,
      null,
      Ae(e.yearList, (r) => (p(), O(
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
        Oh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Ku = ee({
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
        var d = oe(i).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = oe(s).format("YYYY-MM-D"), m = L(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var g = u[0]; g >= u[1]; g--)
        o.push(g);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return ln(() => {
      var o = document.querySelector("." + wl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: wl,
      classes: Ph,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Ku.render = Vh;
const Mh = Ku;
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
oe.extend(ju);
oe.extend(Wu);
var {
  n: Ra,
  classes: Bh
} = re("day-picker"), {
  n: Bt
} = re("date-picker");
function Eh(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [_(
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
      ), _(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ue(() => [(p(), O("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(p(!0), O(
              $e,
              null,
              Ae(e.sortWeekList, (t) => (p(), O(
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
          ), A(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(p(!0), O(
              $e,
              null,
              Ae(e.days, (t, o) => (p(), O("li", {
                key: o
              }, [_(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, xo({}, e.buttonProps(t)), {
                  onClick: n[0] || (n[0] = (l) => chooseDay(t, l))
                }),
                {
                  default: ue(() => [be(
                    ae(e.filterDay(t)),
                    1
                    /* TEXT */
                  )]),
                  _: 2
                  /* DYNAMIC */
                },
                1040,
                ["elevation"]
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
var Zu = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: Ze,
    PanelHeader: qu
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
    } = n, [a, t, o] = e.current.split("-"), l = B([]), i = B(!1), s = B(0), u = B(null), d = Ie({
      left: !1,
      right: !1
    }), v = R(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = R(() => {
      var b;
      return e.choose.chooseYear === e.preview.previewYear && ((b = e.choose.chooseMonth) == null ? void 0 : b.index) === e.preview.previewMonth.index;
    }), m = R(() => {
      var b = tt.findIndex((V) => V.index === e.componentProps.firstDayOfWeek);
      return b === -1 || b === 0 ? tt : tt.slice(b).concat(tt.slice(0, b));
    }), g = (b) => {
      var V, N;
      return (V = (N = je.value.datePickerWeekDict) == null ? void 0 : N[b].abbr) != null ? V : "";
    }, C = (b) => b > 0 ? b : "", h = () => {
      var {
        preview: {
          previewMonth: b,
          previewYear: V
        }
      } = e, N = oe(V + "-" + b.index).daysInMonth(), w = oe(V + "-" + b.index + "-01").day(), k = m.value.findIndex((H) => H.index === "" + w);
      l.value = [...Array(k).fill(-1), ...Array.from(Array(N + 1).keys())].filter((H) => H);
    }, y = () => {
      var {
        preview: {
          previewYear: b,
          previewMonth: V
        },
        componentProps: {
          max: N,
          min: w
        }
      } = e;
      if (N) {
        var k = b + "-" + (L(V.index) + 1);
        d.right = !oe(k).isSameOrBefore(oe(N), "month");
      }
      if (w) {
        var H = b + "-" + (L(V.index) - 1);
        d.left = !oe(H).isSameOrAfter(oe(w), "month");
      }
    }, M = (b) => {
      var {
        preview: {
          previewYear: V,
          previewMonth: N
        },
        componentProps: {
          min: w,
          max: k
        }
      } = e, H = !0, Q = !0, x = V + "-" + N.index + "-" + b;
      return k && (H = oe(x).isSameOrBefore(oe(k), "day")), w && (Q = oe(x).isSameOrAfter(oe(w), "day")), H && Q;
    }, $ = (b) => {
      var {
        choose: {
          chooseDays: V,
          chooseRangeDay: N
        },
        componentProps: {
          range: w
        }
      } = e;
      if (w) {
        if (!N.length)
          return !1;
        var k = oe(b).isSameOrBefore(oe(N[1]), "day"), H = oe(b).isSameOrAfter(oe(N[0]), "day");
        return k && H;
      }
      return V.includes(b);
    }, T = (b) => {
      if (b < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ra("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: V
        },
        preview: {
          previewYear: N,
          previewMonth: w
        },
        componentProps: {
          allowedDates: k,
          color: H,
          multiple: Q,
          range: x
        }
      } = e, j = N + "-" + w.index + "-" + b, W = () => x || Q ? $(j) : L(V) === b && f.value, le = () => M(b) ? k ? !k(j) : !1 : !0, q = le(), E = () => q ? !0 : x || Q ? !$(j) : !f.value || L(V) !== b, z = () => v.value && L(o) === b && e.componentProps.showCurrent ? (x || Q || f.value) && q ? !0 : x || Q ? !$(j) : f.value ? V !== o : !0 : !1, Z = () => q ? "" : z() ? H ?? "" : W() ? "" : Bt() + "-color-cover", U = Z().startsWith(Bt());
      return {
        text: E(),
        outline: z(),
        textColor: U ? "" : Z(),
        [Bt() + "-color-cover"]: U,
        class: Bh(Ra("button"), Ra("button--usable"), [q, Ra("button--disabled")]),
        disabled: q
      };
    }, I = (b) => {
      i.value = b === "prev", s.value += b === "prev" ? -1 : 1, r("check-preview", "month", b);
    }, P = (b, V) => {
      var N = V.currentTarget;
      N.classList.contains(Ra("button--disabled")) || r("choose-day", b);
    }, D = (b) => {
      u.value.checkDate(b);
    };
    return ln(() => {
      h(), y();
    }), ie(() => e.preview, () => {
      h(), y();
    }), {
      n: Ra,
      nDate: Bt,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: C,
      getDayAbbr: g,
      checkDate: I,
      chooseDay: P,
      buttonProps: T
    };
  }
});
Zu.render = Eh;
const Ih = Zu;
var {
  n: Nh,
  classes: Dh
} = re("date-picker");
function Ah(e, n) {
  var r = te("year-picker-panel"), a = te("month-picker-panel"), t = te("day-picker-panel");
  return p(), O(
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
        [Y(e.$slots, "year", {
          year: e.chooseYear
        }, () => [be(
          ae(e.chooseYear),
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
        [_(
          De,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ue(() => {
              var o, l, i;
              return [e.type === "month" ? (p(), O("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? Y(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [be(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? Y(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [be(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : Y(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [be(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (p(), O("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? Y(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [be(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? Y(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [be(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : Y(e.$slots, "date", bt(Ve({
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
      [_(
        De,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ue(() => [e.getPanelType === "year" ? (p(), he(
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
          )) : e.getPanelType === "month" ? (p(), he(
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
          )) : e.getPanelType === "date" ? (p(), he(
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
          )) : ne("v-if", !0)]),
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
var Ju = ee({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Th,
    YearPickerPanel: Mh,
    DayPickerPanel: Ih
  },
  props: wh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = oe().format("YYYY-MM-D"), [l, i] = o.split("-"), s = zt.find((se) => se.index === i), u = B(!1), d = B(!1), v = B(!0), f = B(), m = B(), g = B(), C = B(s), h = B(l), y = B(!1), M = B([]), $ = B([]), T = B([]), I = B([]), P = B(null), D = B(null), b = Ie({
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
    }), V = R(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: g.value,
      chooseMonths: M.value,
      chooseDays: $.value,
      chooseRangeMonth: T.value,
      chooseRangeDay: I.value
    })), N = R(() => ({
      previewMonth: C.value,
      previewYear: h.value
    })), w = R(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return T.value.length ? T.value[0] + " ~ " + T.value[1] : "";
      var pe = "";
      if (f.value) {
        var Se, ke;
        pe = (Se = (ke = je.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Se : "";
      }
      return se ? "" + M.value.length + je.value.datePickerSelected : pe;
    }), k = R(() => {
      var se, ye, pe, Se, {
        multiple: ke,
        range: He
      } = e;
      if (He) {
        var Qe = I.value.map((go) => oe(go).format("YYYY-MM-DD"));
        return Qe.length ? Qe[0] + " ~ " + Qe[1] : "";
      }
      if (ke)
        return "" + $.value.length + je.value.datePickerSelected;
      if (!m.value || !f.value || !g.value)
        return "";
      var hn = oe(m.value + "-" + f.value.index + "-" + g.value).day(), La = tt.find((go) => go.index === "" + hn), ji = (se = (ye = je.value.datePickerWeekDict) == null ? void 0 : ye[La.index].name) != null ? se : "", $v = (pe = (Se = je.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? pe : "", Tv = Va(g.value, 2, "0");
      return je.value.lang === "zh-CN" ? f.value.index + "-" + Tv + " " + ji.slice(0, 3) : ji.slice(0, 3) + ", " + $v.slice(0, 3) + " " + g.value;
    }), H = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = R(() => !e.touchable || ["", "year"].includes(H.value)), x = R(() => {
      var se, ye, pe, Se, ke = oe(m.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + g.value).day(), He = g.value ? Va(g.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = m.value) != null ? ye : "",
        month: (pe = (Se = f.value) == null ? void 0 : Se.index) != null ? pe : "",
        date: He
      };
    }), j = R(() => V.value.chooseRangeDay.map((se) => oe(se).format("YYYY-MM-DD"))), W = R(() => m.value === h.value), le = R(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === C.value.index;
    }), q = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, E = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: pe
        } = se.touches[0];
        n = ye, r = pe;
      }
    }, z = (se, ye) => se >= ye && se > 20 ? "x" : "y", Z = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: pe
        } = se.touches[0], Se = ye - n, ke = pe - r;
        t = z(Math.abs(Se), Math.abs(ke)), a = Se > 0 ? "prev" : "next";
      }
    }, U = () => {
      if (!(Q.value || t !== "x")) {
        var se = H.value === "month" ? P : D;
        no(() => {
          se.value.forwardRef(a), $t();
        });
      }
    }, X = (se, ye) => {
      var pe = ye === "month" ? T : I;
      if (pe.value = v.value ? [se, se] : [pe.value[0], se], v.value = !v.value, v.value) {
        var Se = oe(pe.value[0]).isAfter(pe.value[1]), ke = Se ? [pe.value[1], pe.value[0]] : [...pe.value];
        S(e["onUpdate:modelValue"], ke), S(e.onChange, ke);
      }
    }, J = (se, ye) => {
      var pe = ye === "month" ? M : $, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = pe.value.map((Qe) => oe(Qe).format(Se)), He = ke.findIndex((Qe) => Qe === se);
      He === -1 ? ke.push(se) : ke.splice(He, 1), S(e["onUpdate:modelValue"], ke), S(e.onChange, ke);
    }, fe = (se, ye) => !m.value || !f.value ? !1 : W.value ? se === "month" ? ye.index < f.value.index : le.value ? ye < L(g.value) : f.value.index > C.value.index : m.value > h.value, ge = (se) => {
      var {
        readonly: ye,
        range: pe,
        multiple: Se,
        onChange: ke,
        "onUpdate:modelValue": He
      } = e;
      if (!(se < 0 || ye)) {
        y.value = fe("day", se);
        var Qe = h.value + "-" + C.value.index + "-" + se, hn = oe(Qe).format("YYYY-MM-DD");
        pe ? X(hn, "day") : Se ? J(hn, "day") : (S(He, hn), S(ke, hn));
      }
    }, ze = (se) => {
      var {
        type: ye,
        readonly: pe,
        range: Se,
        multiple: ke,
        onChange: He,
        onPreview: Qe,
        "onUpdate:modelValue": hn
      } = e;
      if (y.value = fe("month", se), ye === "month" && !pe) {
        var La = h.value + "-" + se.index;
        Se ? X(La, "month") : ke ? J(La, "month") : (S(hn, La), S(He, La));
      } else
        C.value = se, S(Qe, L(h.value), L(C.value.index));
      d.value = !1;
    }, Ee = (se) => {
      h.value = "" + se, u.value = !1, d.value = !0, S(e.onPreview, L(h.value), L(C.value.index));
    }, mn = (se, ye) => {
      var pe = ye === "prev" ? -1 : 1;
      if (se === "year")
        h.value = "" + (L(h.value) + pe);
      else {
        var Se = L(C.value.index) + pe;
        Se < 1 && (h.value = "" + (L(h.value) - 1), Se = 12), Se > 12 && (h.value = "" + (L(h.value) + 1), Se = 1), C.value = zt.find((ke) => L(ke.index) === Se);
      }
      S(e.onPreview, L(h.value), L(C.value.index));
    }, za = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, zn = (se) => Ce(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Xe = (se, ye) => {
      var pe = ye === "month" ? T : I, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((hn) => oe(hn).format(Se)).slice(0, 2), He = pe.value.some((hn) => zn(hn));
      if (!He) {
        pe.value = ke;
        var Qe = oe(pe.value[0]).isAfter(pe.value[1]);
        pe.value.length === 2 && Qe && (pe.value = [pe.value[1], pe.value[0]]);
      }
    }, pn = (se, ye) => {
      var pe = ye === "month" ? M : $, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((He) => oe(He).format(Se))));
      pe.value = ke.filter((He) => He !== "Invalid Date");
    }, kt = (se) => {
      var ye = oe(se).format("YYYY-MM-D");
      if (!zn(ye)) {
        var [pe, Se, ke] = ye.split("-"), He = zt.find((Qe) => Qe.index === Se);
        f.value = He, m.value = pe, g.value = ke, C.value = He, h.value = pe;
      }
    }, $t = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (se) => {
      if (!(!za() || zn(se) || !se))
        if (e.range) {
          if (!Ce(se))
            return;
          v.value = se.length !== 1, Xe(se, e.type);
        } else if (e.multiple) {
          if (!Ce(se))
            return;
          pn(se, e.type);
        } else
          kt(se);
    }, {
      immediate: !0
    }), ie(H, $t), {
      n: Nh,
      classes: Dh,
      monthPanelEl: P,
      dayPanelEl: D,
      reverse: y,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: g,
      previewYear: h,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: w,
      getDateTitle: k,
      getPanelType: H,
      getChoose: V,
      getPreview: N,
      componentProps: b,
      slotProps: x,
      formatRange: j,
      clickEl: q,
      handleTouchstart: E,
      handleTouchmove: Z,
      handleTouchend: U,
      getChooseDay: ge,
      getChooseMonth: ze,
      getChooseYear: Ee,
      checkPreview: mn,
      formatElevation: dn
    };
  }
});
Ju.render = Ah;
const qr = Ju;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var HS = qr;
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
function zh(e) {
  return ["left", "center", "right"].includes(e);
}
var Lh = ei({
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
    validator: zh
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
  onBeforeClose: F(),
  onConfirm: F(),
  onCancel: F(),
  "onUpdate:show": F()
}, We(wt, [
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
var {
  n: Rh,
  classes: Uh
} = re("dialog");
function Hh(e, n) {
  var r = te("var-button"), a = te("var-popup");
  return p(), he(
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
      default: ue(() => [A(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: ni({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
          "div",
          {
            class: c(e.n("title"))
          },
          [Y(e.$slots, "title", {}, () => [be(
            ae(e.dt(e.title, e.pack.dialogTitle)),
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
          [Y(e.$slots, "default", {}, () => [be(
            ae(e.message),
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
          [e.cancelButton ? (p(), he(
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
              default: ue(() => [be(
                ae(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : ne("v-if", !0), e.confirmButton ? (p(), he(
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
              default: ue(() => [be(
                ae(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : ne("v-if", !0)],
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
var Qu = ee({
  name: "VarDialog",
  components: {
    VarPopup: bn,
    VarButton: Ze
  },
  inheritAttrs: !1,
  props: Lh,
  setup(e) {
    var n = B(!1), r = B(!1), a = () => S(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (S(s), !!i) {
        if (u != null) {
          S(u, "close", a);
          return;
        }
        S(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if (S(s), i != null) {
        S(i, "confirm", a);
        return;
      }
      S(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if (S(s), i != null) {
        S(i, "cancel", a);
        return;
      }
      S(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), ie(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: Rh,
      classes: Uh,
      pack: je,
      dt: eo,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: me
    };
  }
});
Qu.render = Hh;
const fr = Qu;
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Xt.apply(this, arguments);
}
var rr, Kt = {};
function Fh(e) {
  return e === void 0 && (e = {}), Re(e) ? Xt({}, Kt, {
    message: e
  }) : Xt({}, Kt, e);
}
function Kn(e) {
  return et() ? new Promise((n) => {
    Kn.close();
    var r = Fh(e), a = Ie(r);
    a.teleport = "body", rr = a;
    var {
      unmountInstance: t
    } = nt(fr, a, {
      onConfirm: () => {
        S(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        S(a.onCancel), n("cancel");
      },
      onClose: () => {
        S(a.onClose), n("close");
      },
      onClosed: () => {
        S(a.onClosed), t(), rr === a && (rr = null);
      },
      onRouteChange: () => {
        t(), rr === a && (rr = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
Kn.setDefaultOptions = function(e) {
  Kt = e;
};
Kn.resetDefaultOptions = function() {
  Kt = {};
};
Kn.close = function() {
  if (rr != null) {
    var e = rr;
    rr = null, Be().then(() => {
      e.show = !1;
    });
  }
};
fr.install = function(e) {
  e.component(fr.name, fr);
};
Kn.install = function(e) {
  e.component(fr.name, fr);
};
Kn.Component = fr;
var FS = fr, Yh = {
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
function Wa() {
  return Wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wa.apply(this, arguments);
}
var {
  n: jh,
  classes: Wh
} = re("divider");
function Gh(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [Y(e.$slots, "default", {}, () => [e.description ? (p(), O(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : ne("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var _u = ee({
  name: "VarDivider",
  props: Yh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ie({
      withText: !1
    }), t = R(() => $o(e.inset) ? e.inset : !0), o = R(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if ($o(i) || i === 0)
        return Wa({}, d);
      var v = L(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Wa({}, d, {
        height: "calc(80% - " + me(f) + ")"
      }) : Wa({}, d, {
        width: "calc(100% - " + me(f) + ")",
        left: v > 0 ? me(f) : me(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return ln(() => {
      l();
    }), _t(() => {
      l();
    }), Wa({
      n: jh,
      classes: Wh
    }, Nv(a), {
      style: o,
      isInset: t
    });
  }
});
_u.render = Gh;
const Xr = _u;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var YS = Xr, qh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Lt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return qh[n];
  });
}
var Hn = "top", kr = "bottom", Ma = "right", cr = "left", fo = "auto", co = [Hn, kr, Ma, cr], mo = "start", mt = "end", Xh = "clippingParents", xu = "viewport", rt = "popper", Kh = "reference", Cl = /* @__PURE__ */ co.reduce(function(e, n) {
  return e.concat([n + "-" + mo, n + "-" + mt]);
}, []), ed = /* @__PURE__ */ [].concat(co, [fo]).reduce(function(e, n) {
  return e.concat([n, n + "-" + mo, n + "-" + mt]);
}, []), Zh = "beforeRead", Jh = "read", Qh = "afterRead", _h = "beforeMain", xh = "main", eg = "afterMain", ng = "beforeWrite", rg = "write", ag = "afterWrite", ri = [Zh, Jh, Qh, _h, xh, eg, ng, rg, ag];
function Fn(e) {
  return e.split("-")[0];
}
var tg = {
  start: "end",
  end: "start"
};
function Sl(e) {
  return e.replace(/start|end/g, function(n) {
    return tg[n];
  });
}
function Tn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ba(e) {
  var n = Tn(e).Element;
  return e instanceof n || e instanceof Element;
}
function wn(e) {
  var n = Tn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Ii(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Tn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Or(e) {
  return ((Ba(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var it = Math.max, kl = Math.min, Za = Math.round;
function ai() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function nd() {
  return !/^((?!chrome|android).)*safari/i.test(ai());
}
function Ja(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && wn(e) && (t = e.offsetWidth > 0 && Za(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Za(a.height) / e.offsetHeight || 1);
  var l = Ba(e) ? Tn(e) : window, i = l.visualViewport, s = !nd() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Ni(e) {
  var n = Tn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Di(e) {
  return Ja(Or(e)).left + Ni(e).scrollLeft;
}
function og(e, n) {
  var r = Tn(e), a = Or(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = nd();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Di(e),
    y: s
  };
}
function Bn(e) {
  return Tn(e).getComputedStyle(e);
}
function ig(e) {
  var n, r = Or(e), a = Ni(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = it(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = it(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Di(e), s = -a.scrollTop;
  return Bn(t || r).direction === "rtl" && (i += it(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function An(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function po(e) {
  return An(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ii(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Or(e)
  );
}
function Ai(e) {
  var n = Bn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function rd(e) {
  return ["html", "body", "#document"].indexOf(An(e)) >= 0 ? e.ownerDocument.body : wn(e) && Ai(e) ? e : rd(po(e));
}
function lt(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = rd(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Tn(a), l = t ? [o].concat(o.visualViewport || [], Ai(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(lt(po(l)))
  );
}
function lg(e) {
  return ["table", "td", "th"].indexOf(An(e)) >= 0;
}
function $l(e) {
  return !wn(e) || // https://github.com/popperjs/popper-core/issues/837
  Bn(e).position === "fixed" ? null : e.offsetParent;
}
function sg(e) {
  var n = /firefox/i.test(ai()), r = /Trident/i.test(ai());
  if (r && wn(e)) {
    var a = Bn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = po(e);
  for (Ii(t) && (t = t.host); wn(t) && ["html", "body"].indexOf(An(t)) < 0; ) {
    var o = Bn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function zi(e) {
  for (var n = Tn(e), r = $l(e); r && lg(r) && Bn(r).position === "static"; )
    r = $l(r);
  return r && (An(r) === "html" || An(r) === "body" && Bn(r).position === "static") ? n : r || sg(e) || n;
}
function ug(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Ii(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function ti(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function dg(e, n) {
  var r = Ja(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Tl(e, n, r) {
  return n === xu ? ti(og(e, r)) : Ba(n) ? dg(n, r) : ti(ig(Or(e)));
}
function vg(e) {
  var n = lt(po(e)), r = ["absolute", "fixed"].indexOf(Bn(e).position) >= 0, a = r && wn(e) ? zi(e) : e;
  return Ba(a) ? n.filter(function(t) {
    return Ba(t) && ug(t, a) && An(t) !== "body";
  }) : [];
}
function fg(e, n, r, a) {
  var t = n === "clippingParents" ? vg(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = Tl(e, u, a);
    return s.top = it(d.top, s.top), s.right = kl(d.right, s.right), s.bottom = kl(d.bottom, s.bottom), s.left = it(d.left, s.left), s;
  }, Tl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function pt(e) {
  return e.split("-")[1];
}
function cg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ad(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Fn(a) : null, o = a ? pt(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Hn:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case kr:
      s = {
        x: l,
        y: n.y + n.height
      };
      break;
    case Ma:
      s = {
        x: n.x + n.width,
        y: i
      };
      break;
    case cr:
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
  var u = t ? cg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case mo:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case mt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function mg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function pg(e) {
  return Object.assign({}, mg(), e);
}
function hg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function td(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Xh : i, u = r.rootBoundary, d = u === void 0 ? xu : u, v = r.elementContext, f = v === void 0 ? rt : v, m = r.altBoundary, g = m === void 0 ? !1 : m, C = r.padding, h = C === void 0 ? 0 : C, y = pg(typeof h != "number" ? h : hg(h, co)), M = f === rt ? Kh : rt, $ = e.rects.popper, T = e.elements[g ? M : f], I = fg(Ba(T) ? T : T.contextElement || Or(e.elements.popper), s, d, l), P = Ja(e.elements.reference), D = ad({
    reference: P,
    element: $,
    strategy: "absolute",
    placement: t
  }), b = ti(Object.assign({}, $, D)), V = f === rt ? b : P, N = {
    top: I.top - V.top + y.top,
    bottom: V.bottom - I.bottom + y.bottom,
    left: I.left - V.left + y.left,
    right: V.right - I.right + y.right
  }, w = e.modifiersData.offset;
  if (f === rt && w) {
    var k = w[t];
    Object.keys(N).forEach(function(H) {
      var Q = [Ma, kr].indexOf(H) >= 0 ? 1 : -1, x = [Hn, kr].indexOf(H) >= 0 ? "y" : "x";
      N[H] += k[x] * Q;
    });
  }
  return N;
}
function gg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? ed : s, d = pt(a), v = d ? i ? Cl : Cl.filter(function(g) {
    return pt(g) === d;
  }) : co, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(g, C) {
    return g[C] = td(e, {
      placement: C,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Fn(C)], g;
  }, {});
  return Object.keys(m).sort(function(g, C) {
    return m[g] - m[C];
  });
}
function yg(e) {
  if (Fn(e) === fo)
    return [];
  var n = Lt(e);
  return [Sl(e), n, Sl(n)];
}
function bg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, g = m === void 0 ? !0 : m, C = r.allowedAutoPlacements, h = n.options.placement, y = Fn(h), M = y === h, $ = s || (M || !g ? [Lt(h)] : yg(h)), T = [h].concat($).reduce(function(X, J) {
      return X.concat(Fn(J) === fo ? gg(n, {
        placement: J,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: C
      }) : J);
    }, []), I = n.rects.reference, P = n.rects.popper, D = /* @__PURE__ */ new Map(), b = !0, V = T[0], N = 0; N < T.length; N++) {
      var w = T[N], k = Fn(w), H = pt(w) === mo, Q = [Hn, kr].indexOf(k) >= 0, x = Q ? "width" : "height", j = td(n, {
        placement: w,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), W = Q ? H ? Ma : cr : H ? kr : Hn;
      I[x] > P[x] && (W = Lt(W));
      var le = Lt(W), q = [];
      if (o && q.push(j[k] <= 0), i && q.push(j[W] <= 0, j[le] <= 0), q.every(function(X) {
        return X;
      })) {
        V = w, b = !1;
        break;
      }
      D.set(w, q);
    }
    if (b)
      for (var E = g ? 3 : 1, z = function(J) {
        var fe = T.find(function(ge) {
          var ze = D.get(ge);
          if (ze)
            return ze.slice(0, J).every(function(Ee) {
              return Ee;
            });
        });
        if (fe)
          return V = fe, "break";
      }, Z = E; Z > 0; Z--) {
        var U = z(Z);
        if (U === "break")
          break;
      }
    n.placement !== V && (n.modifiersData[a]._skip = !0, n.placement = V, n.reset = !0);
  }
}
const wg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: bg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Cg(e, n, r) {
  var a = Fn(e), t = [cr, Hn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [cr, Ma].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Sg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = ed.reduce(function(d, v) {
    return d[v] = Cg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const kg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Sg
};
function $g(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Tg(e) {
  return e === Tn(e) || !wn(e) ? Ni(e) : $g(e);
}
function Pg(e) {
  var n = e.getBoundingClientRect(), r = Za(n.width) / e.offsetWidth || 1, a = Za(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Og(e, n, r) {
  r === void 0 && (r = !1);
  var a = wn(n), t = wn(n) && Pg(n), o = Or(n), l = Ja(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((An(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ai(o)) && (i = Tg(n)), wn(n) ? (s = Ja(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Di(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Vg(e) {
  var n = Ja(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Mg(e) {
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
function Bg(e) {
  var n = Mg(e);
  return ri.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Eg(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Qn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Vr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ig = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Pl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ng(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Pl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Qn(Vr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Qn(Vr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          ri.indexOf(n.phase) < 0 && console.error(Qn(Vr, n.name, '"phase"', "either " + ri.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Qn(Vr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Qn(Vr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Qn(Vr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Qn(Vr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Pl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Qn(Ig, String(n.name), a, a));
      });
    });
  });
}
function Dg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Ag(e) {
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
var Ol = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", zg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Vl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ml() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Lg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Vl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Vl, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(y) {
        var M = typeof y == "function" ? y(d.options) : y;
        C(), d.options = Object.assign({}, o, d.options, M), d.scrollParents = {
          reference: Ba(i) ? lt(i) : i.contextElement ? lt(i.contextElement) : [],
          popper: lt(s)
        };
        var $ = Bg(Ag([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = $.filter(function(w) {
          return w.enabled;
        }), process.env.NODE_ENV !== "production") {
          var T = Dg([].concat($, d.options.modifiers), function(w) {
            var k = w.name;
            return k;
          });
          if (Ng(T), Fn(d.options.placement) === fo) {
            var I = d.orderedModifiers.find(function(w) {
              var k = w.name;
              return k === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var P = Bn(s), D = P.marginTop, b = P.marginRight, V = P.marginBottom, N = P.marginLeft;
          [D, b, V, N].some(function(w) {
            return parseFloat(w);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var y = d.elements, M = y.reference, $ = y.popper;
          if (!Ml(M, $)) {
            process.env.NODE_ENV !== "production" && console.error(Ol);
            return;
          }
          d.rects = {
            reference: Og(M, zi($), d.options.strategy === "fixed"),
            popper: Vg($)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(w) {
            return d.modifiersData[w.name] = Object.assign({}, w.data);
          });
          for (var T = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (T += 1, T > 100)) {
              console.error(zg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var P = d.orderedModifiers[I], D = P.fn, b = P.options, V = b === void 0 ? {} : b, N = P.name;
            typeof D == "function" && (d = D({
              state: d,
              options: V,
              name: N,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Eg(function() {
        return new Promise(function(h) {
          m.forceUpdate(), h(d);
        });
      }),
      destroy: function() {
        C(), f = !0;
      }
    };
    if (!Ml(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Ol), m;
    m.setOptions(u).then(function(h) {
      !f && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function g() {
      d.orderedModifiers.forEach(function(h) {
        var y = h.name, M = h.options, $ = M === void 0 ? {} : M, T = h.effect;
        if (typeof T == "function") {
          var I = T({
            state: d,
            name: y,
            instance: m,
            options: $
          }), P = function() {
          };
          v.push(I || P);
        }
      });
    }
    function C() {
      v.forEach(function(h) {
        return h();
      }), v = [];
    }
    return m;
  };
}
var Et = {
  passive: !0
};
function Rg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Tn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Et);
  }), i && s.addEventListener("resize", r.update, Et), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Et);
    }), i && s.removeEventListener("resize", r.update, Et);
  };
}
const Ug = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Rg,
  data: {}
};
function Hg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = ad({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Fg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Hg,
  data: {}
};
var Yg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function jg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Za(n * t) / t || 0,
    y: Za(r * t) / t || 0
  };
}
function Bl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, g = l.y, C = g === void 0 ? 0 : g, h = typeof d == "function" ? d({
    x: m,
    y: C
  }) : {
    x: m,
    y: C
  };
  m = h.x, C = h.y;
  var y = l.hasOwnProperty("x"), M = l.hasOwnProperty("y"), $ = cr, T = Hn, I = window;
  if (u) {
    var P = zi(r), D = "clientHeight", b = "clientWidth";
    if (P === Tn(r) && (P = Or(r), Bn(P).position !== "static" && i === "absolute" && (D = "scrollHeight", b = "scrollWidth")), P = P, t === Hn || (t === cr || t === Ma) && o === mt) {
      T = kr;
      var V = v && P === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[D]
      );
      C -= V - a.height, C *= s ? 1 : -1;
    }
    if (t === cr || (t === Hn || t === kr) && o === mt) {
      $ = Ma;
      var N = v && P === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[b]
      );
      m -= N - a.width, m *= s ? 1 : -1;
    }
  }
  var w = Object.assign({
    position: i
  }, u && Yg), k = d === !0 ? jg({
    x: m,
    y: C
  }) : {
    x: m,
    y: C
  };
  if (m = k.x, C = k.y, s) {
    var H;
    return Object.assign({}, w, (H = {}, H[T] = M ? "0" : "", H[$] = y ? "0" : "", H.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + C + "px)" : "translate3d(" + m + "px, " + C + "px, 0)", H));
  }
  return Object.assign({}, w, (n = {}, n[T] = M ? C + "px" : "", n[$] = y ? m + "px" : "", n.transform = "", n));
}
function Wg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = Bn(n.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Fn(n.placement),
    variation: pt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Bl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Bl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Gg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Wg,
  data: {}
};
function qg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !wn(o) || !An(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Xg(e) {
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
      !wn(t) || !An(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Kg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qg,
  effect: Xg,
  requires: ["computeStyles"]
};
var Zg = [Ug, Fg, Gg, Kg], Jg = /* @__PURE__ */ Lg({
  defaultModifiers: Zg
});
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Zt.apply(this, arguments);
}
function El(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Il(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        El(o, a, t, l, i, "next", s);
      }
      function i(s) {
        El(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function od(e) {
  var n = B(null), r = B(null), a = B({
    width: 0,
    height: 0
  }), t = Ss(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(P, D) {
      D ? ($(), S(e.onOpen)) : S(e.onClose);
    }
  }), {
    zIndex: o
  } = Ct(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: P,
      height: D
    } = window.getComputedStyle(n.value);
    a.value = {
      width: Le(P),
      height: Le(D)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, T());
  }, v = /* @__PURE__ */ function() {
    var P = Il(function* () {
      e.trigger === "hover" && (s = !1, yield In(), !i && I());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var P = Il(function* () {
      e.trigger === "hover" && (i = !1, yield In(), !s && I());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), g = () => {
    T();
  }, C = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  }, h = () => {
    e.trigger === "click" && C();
  }, y = () => {
    u();
    var P = {
      x: Le(e.offsetX),
      y: Le(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: P.x,
          distance: P.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: P.x,
          distance: P.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: P.x,
          distance: P.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: P.x,
          distance: -P.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: P.x,
          distance: -P.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: P.x,
          distance: -P.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: P.y,
          distance: P.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: P.y,
          distance: -P.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: P.y,
          distance: -P.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: P.x,
          distance: -P.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: P.x,
          distance: P.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: P.y,
          distance: P.x
        };
    }
  }, M = () => {
    var {
      placement: P,
      skidding: D,
      distance: b
    } = y(), V = [Zt({}, wg, {
      enabled: t.value
    }), Zt({}, kg, {
      options: {
        offset: [D, b]
      }
    })];
    return {
      placement: P,
      modifiers: V
    };
  }, $ = () => {
    l.setOptions(M());
  }, T = () => {
    var {
      disabled: P
    } = e;
    P || (t.value = !0, S(e["onUpdate:show"], !0));
  }, I = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  };
  return Cs(n, "click", h), ie(() => e.offsetX, $), ie(() => e.offsetY, $), ie(() => e.placement, $), ie(() => e.disabled, I), Jt(() => {
    var P, D = e.reference ? (P = n.value) == null ? void 0 : P.querySelector(e.reference) : n.value;
    l = Jg(D ?? n.value, r.value, M());
  }), _a(() => {
    l.destroy();
  }), {
    show: t,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: a,
    handleHostClick: g,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: C,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: $,
    open: T,
    close: I
  };
}
function Qg(e) {
  return ["click", "hover"].includes(e);
}
function _g(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function xg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var ey = {
  type: {
    type: String,
    default: "default",
    validator: xg
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
    validator: Qg
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: _g
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F()
}, {
  n: ny,
  classes: ry
} = re("tooltip");
function ay(e, n) {
  return p(), O(
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
    [Y(e.$slots, "default"), (p(), he(
      Na,
      {
        to: e.teleport
      },
      [_(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ue(() => [we(A(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: G({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = cn(() => {
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
              [Y(e.$slots, "content", {}, () => [be(
                ae(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[yr, e.show]])]),
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
var id = ee({
  name: "VarTooltip",
  props: ey,
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
      resize: g
    } = od(e);
    return {
      toSizeUnit: me,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: ny,
      classes: ry,
      handleHostClick: l,
      handlePopoverClose: v,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: g,
      open: f,
      close: m
    };
  }
});
id.render = ay;
const mr = id;
mr.install = function(e) {
  e.component(mr.name, mr);
};
var jS = mr;
function ty(e) {
  return ["click"].includes(e);
}
var oy = {
  expandTrigger: {
    type: String,
    validator: ty
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
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
  n: iy,
  classes: ly
} = re("ellipsis"), sy = {
  key: 0
};
function uy(e, n) {
  var r = te("var-tooltip");
  return p(), he(
    r,
    bt(xt(e.tooltip)),
    {
      content: ue(() => [Y(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), O(
          "span",
          sy,
          ae(e.tooltip.content),
          1
          /* TEXT */
        )) : Y(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ue(() => [A(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: G(e.rootStyles),
          onClick: n[0] || (n[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [Y(e.$slots, "default")],
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
var ld = ee({
  name: "VarEllipsis",
  components: {
    VarTooltip: mr
  },
  props: oy,
  setup(e) {
    var n = B(!1), r = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : oi({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: iy,
      classes: ly,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
ld.render = uy;
const Kr = ld;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var WS = Kr;
function dy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function vy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function fy(e) {
  return ["click", "hover"].includes(e);
}
var cy = {
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
    validator: eu
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: dy
  },
  direction: {
    type: String,
    default: "top",
    validator: vy
  },
  trigger: {
    type: String,
    default: "click",
    validator: fy
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
  onClick: F(),
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:active": F()
};
function Nl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  classes: Dl,
  n: nn
} = re("fab");
const Zr = ee({
  name: "VarFab",
  inheritAttrs: !1,
  props: cy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = Ss(e, "active", {
      emit: (f, m) => S(e["onUpdate:active"], m)
    }), o = B(null), {
      disabled: l
    } = ro(), i = (f, m, g) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (g === 0) {
          S(e.onClick, t.value, f);
          return;
        }
        t.value = m, S(e.onClick, t.value, f), S(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, S(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, S(e.onClose));
    }, d = () => r.trigger ? e.show ? r.trigger({
      active: t.value
    }) : null : we(_(Ze, {
      "var-fab-cover": !0,
      class: nn("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [_(Te, {
        "var-fab-cover": !0,
        class: Dl([t.value, nn("trigger-active-icon"), nn("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: nn("--trigger-icon-animation")
      }, null)]
    }), [[yr, e.show]]), v = () => {
      var f, m, g = ks((m = r.default == null ? void 0 : r.default()) != null ? m : []);
      return _("div", Ve({
        class: Dl(nn(), nn("--position-" + e.position), nn("--direction-" + e.direction), [e.fixed, nn("--fixed"), nn("--absolute")], [e.safeArea, nn("--safe-area")]),
        style: {
          zIndex: L(e.zIndex),
          top: me(e.top),
          bottom: me(e.bottom),
          left: me(e.left),
          right: me(e.right)
        },
        ref: o,
        onClick: (C) => i(C, !t.value, g.length),
        onMouseleave: () => s(!1, g.length),
        onMouseenter: () => s(!0, g.length)
      }, a), [_(De, {
        name: nn("--active-transition")
      }, Nl(f = d()) ? f : {
        default: () => [f]
      }), _(De, {
        name: nn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [we(_("div", {
          class: nn("actions"),
          onClick: (C) => C.stopPropagation()
        }, [g.map((C) => _("div", {
          class: nn("action")
        }, [C]))]), [[yr, e.show && t.value && g.length]])]
      })]);
    };
    return ie(() => e.trigger, () => {
      t.value = !1;
    }), ie(() => e.disabled, () => {
      t.value = !1;
    }), Cs(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return _(Na, {
          to: f,
          disabled: l.value
        }, Nl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var GS = Zr;
function my(e) {
  return ["start", "end"].includes(e);
}
var py = {
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
    validator: my
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Al(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function hy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Al(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Al(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: gy
} = re("form");
function yy(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var sd = ee({
  name: "VarForm",
  props: py,
  setup(e) {
    var n = R(() => e.disabled), r = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Pm(), o = (d) => {
      setTimeout(() => {
        var v = br(d), f = v === window ? 0 : _i(v), m = _i(d) - f - Le(e.scrollToErrorOffsetY);
        vt(v, {
          top: m,
          animation: To
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = hy(function* () {
        var v = yield Promise.all(a.map((h) => {
          var {
            validate: y
          } = h;
          return y();
        }));
        if (e.scrollToError) {
          var [, f] = Uv(v, (h) => h === !1, e.scrollToError), m = f > -1;
          if (m) {
            var g, C = (g = a[f].instance.proxy) == null ? void 0 : g.$el;
            o(C);
          }
          return !m;
        }
        return v.every((h) => h === !0);
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
      n: gy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
sd.render = yy;
const Yn = sd;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
Yn.useValidation = kn;
Yn.useForm = $n;
var qS = Yn;
function by(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var wy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: by,
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
  onClick: F(),
  onLoad: F(),
  onError: F()
}, {
  n: Cy,
  classes: Sy
} = re("image"), ky = ["alt", "title", "lazy-error", "lazy-loading"], $y = ["alt", "title", "src"];
function Ty(e, n) {
  var r = Me("lazy"), a = Me("ripple");
  return we((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? we((p(), O(
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
      ky
    )), [[r, e.src]]) : (p(), O(
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
      $y
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var ud = ee({
  name: "VarImage",
  directives: {
    Lazy: ft,
    Ripple: Ue
  },
  props: wy,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && S(i, t), o._lazy.state === "error" && S(s, t)) : S(i, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && S(l, t);
    }, a = (t) => {
      S(e.onClick, t);
    };
    return {
      n: Cy,
      classes: Sy,
      toSizeUnit: me,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
ud.render = Ty;
const Jr = ud;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var XS = Jr, dd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Py() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(dd);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var vd = {
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
  onChange: F()
};
function zl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Oy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        zl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        zl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var Vy = 250, My = 20, {
  n: By,
  classes: Ey
} = re("swipe"), Iy = ["onClick"];
function Ny(e, n) {
  return p(), O(
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
      [Y(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), Y(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), O(
        $e,
        null,
        Ae(e.length, (r, a) => (p(), O(
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
          Iy
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : ne("v-if", !0)])],
    2
    /* CLASS */
  );
}
var fd = ee({
  name: "VarSwipe",
  props: vd,
  setup(e) {
    var n = B(null), r = B(0), a = R(() => e.vertical), t = B(0), o = B(0), l = B(!1), i = B(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Py(), v = !1, f = -1, m, g, C, h, y, M = (E) => s.find((z) => {
      var {
        index: Z
      } = z;
      return Z.value === E;
    }), $ = () => {
      e.loop && (o.value >= 0 && M(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && M(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (M(d.value - 1).setTranslate(0), M(0).setTranslate(0)));
    }, T = (E) => {
      var z = en(E) ? E : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: Z
      } = e;
      return z <= -1 ? Z ? -1 : 0 : z >= d.value ? Z ? d.value : d.value - 1 : z;
    }, I = (E) => {
      var {
        loop: z
      } = e;
      return E === -1 ? z ? d.value - 1 : 0 : E === d.value ? z ? 0 : d.value - 1 : E;
    }, P = (E) => {
      var {
        loop: z
      } = e;
      return E < 0 ? z ? d.value - 1 : 0 : E > d.value - 1 ? z ? 0 : d.value - 1 : E;
    }, D = (E) => {
      var z = o.value >= r.value, Z = o.value <= -t.value, U = 0, X = -(t.value - r.value);
      l.value = !0, (z || Z) && (l.value = !0, o.value = Z ? U : X, M(0).setTranslate(0), M(d.value - 1).setTranslate(0)), no(() => {
        l.value = !1, S(E);
      });
    }, b = () => {
      i.value = P(L(e.initialIndex));
    }, V = () => {
      var {
        autoplay: E
      } = e;
      !E || d.value <= 1 || (N(), f = window.setTimeout(() => {
        j(), V();
      }, L(E)));
    }, N = () => {
      f && clearTimeout(f);
    }, w = (E, z) => {
      if (E > z && E > 10)
        return "horizontal";
      if (z > E && z > 10)
        return "vertical";
    }, k = (E) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: z,
          clientY: Z
        } = E.touches[0];
        m = z, g = Z, C = performance.now(), v = !0, N(), D(() => {
          l.value = !0;
        });
      }
    }, H = (E) => {
      var {
        touchable: z,
        vertical: Z
      } = e;
      if (!(!v || !z)) {
        var {
          clientX: U,
          clientY: X
        } = E.touches[0], J = Math.abs(U - m), fe = Math.abs(X - g), ge = w(J, fe), ze = Z ? "vertical" : "horizontal";
        if (ge === ze) {
          E.preventDefault();
          var Ee = h !== void 0 ? U - h : 0, mn = y !== void 0 ? X - y : 0;
          h = U, y = X, o.value += Z ? mn : Ee, $();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: E,
          onChange: z
        } = e, Z = E ? y < g : h < m, U = Math.abs(E ? g - y : m - h), X = performance.now() - C <= Vy && U >= My, J = X ? T(Z ? i.value + 1 : i.value - 1) : T();
        v = !1, l.value = !1, h = void 0, y = void 0, o.value = J * -r.value;
        var fe = i.value;
        i.value = I(J), V(), fe !== i.value && S(z, i.value);
      }
    }, x = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((E) => {
        E.setTranslate(0);
      }), V(), setTimeout(() => {
        l.value = !1;
      }));
    }, j = (E) => {
      if (!(d.value <= 1)) {
        var {
          loop: z,
          onChange: Z
        } = e, U = i.value;
        i.value = P(U + 1), (E == null ? void 0 : E.event) !== !1 && S(Z, i.value), D(() => {
          if (U === d.value - 1 && z) {
            M(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          U !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, W = (E) => {
      if (!(d.value <= 1)) {
        var {
          loop: z,
          onChange: Z
        } = e, U = i.value;
        i.value = P(U - 1), (E == null ? void 0 : E.event) !== !1 && S(Z, i.value), D(() => {
          if (U === 0 && z) {
            M(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          U !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, le = (E, z) => {
      if (!(d.value <= 1 || E === i.value)) {
        E = E < 0 ? 0 : E, E = E >= d.value ? d.value : E;
        var Z = E > i.value ? j : W, U = Math.abs(E - i.value);
        Array.from({
          length: U
        }).forEach((X, J) => {
          Z({
            event: J === U - 1 ? z == null ? void 0 : z.event : !1
          });
        });
      }
    }, q = {
      size: r,
      vertical: a
    };
    return u(q), ie(() => d.value, /* @__PURE__ */ Oy(function* () {
      yield In(), b(), x();
    })), $r(x), Tr(N), _a(N), wr(window, "resize", x), {
      n: By,
      classes: Ey,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: k,
      handleTouchmove: H,
      handleTouchend: Q,
      next: j,
      prev: W,
      to: le,
      resize: x,
      toNumber: L
    };
  }
});
fd.render = Ny;
const jn = fd;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var KS = jn;
function Dy() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = sn(dd);
  return e || Sn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: Ay
} = re("swipe-item");
function zy(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      style: G({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var cd = ee({
  name: "VarSwipeItem",
  setup() {
    var e = B(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Dy(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Ay,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
cd.render = zy;
const Wn = cd;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var ZS = Wn;
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
var Ly = ii({
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
  "onUpdate:show": F()
}, We(vd, ["loop", "indicator", "onChange"]), We(wt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Ll,
  classes: Ry
} = re("image-preview"), Rl = 12, Ul = 200, Uy = 350, Hl = 200, Hy = ["src", "alt"];
function Fy(e, n) {
  var r = te("var-swipe-item"), a = te("var-swipe"), t = te("var-icon"), o = te("var-popup");
  return p(), he(
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
      default: ue(() => [_(
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
          default: ue(() => [(p(!0), O(
            $e,
            null,
            Ae(e.images, (l) => (p(), he(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ue(() => [A(
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
                    Hy
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
          indicator: ue((l) => {
            var {
              index: i,
              length: s
            } = l;
            return [Y(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (p(), O(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ae(i + 1) + " / " + ae(s),
              3
              /* TEXT, CLASS */
            )) : ne("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), Y(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), he(
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
      )) : ne("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("extra"))
        },
        [Y(e.$slots, "extra")],
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
var md = ee({
  name: "VarImagePreview",
  components: {
    VarSwipe: jn,
    VarSwipeItem: Wn,
    VarPopup: bn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: Ly,
  setup(e) {
    var n = B(!1), r = R(() => {
      var {
        images: N,
        current: w
      } = e, k = N.findIndex((H) => H === w);
      return k >= 0 ? k : 0;
    }), a = B(1), t = B(0), o = B(0), l = B(void 0), i = B(void 0), s = B(!0), u = null, d = null, v = null, f = (N, w) => {
      var {
        clientX: k,
        clientY: H
      } = N, {
        clientX: Q,
        clientY: x
      } = w;
      return Math.abs(Math.sqrt(Math.pow(Q - k, 2) + Math.pow(x - H, 2)));
    }, m = (N, w) => ({
      clientX: N.clientX,
      clientY: N.clientY,
      timestamp: Date.now(),
      target: w
    }), g = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Hl);
    }, C = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, h = (N) => d ? f(d, N) <= Rl && N.timestamp - d.timestamp <= Ul && d.target === N.target : !1, y = (N) => !N || !u || !d ? !1 : f(u, d) <= Rl && Date.now() - d.timestamp < Uy && (N === u.target || N.parentNode === u.target), M = (N) => {
      v = window.setTimeout(() => {
        y(N.target) && V(), u = null;
      }, Ul);
    }, $ = (N) => {
      v && window.clearTimeout(v);
      var {
        touches: w
      } = N, k = m(w[0], N.currentTarget);
      if (u = k, h(k)) {
        a.value > 1 ? C() : g();
        return;
      }
      d = k;
    }, T = (N) => {
      var {
        offsetWidth: w,
        offsetHeight: k
      } = N, {
        naturalWidth: H,
        naturalHeight: Q
      } = N.querySelector("." + Ll("image"));
      return {
        width: w,
        height: k,
        imageRadio: Q / H,
        rootRadio: k / w,
        zoom: L(e.zoom)
      };
    }, I = (N) => {
      var {
        zoom: w,
        imageRadio: k,
        rootRadio: H,
        width: Q,
        height: x
      } = T(N);
      if (!k)
        return 0;
      var j = k > H ? x / k : Q;
      return Math.max(0, (w * j - Q) / 2) / w;
    }, P = (N) => {
      var {
        zoom: w,
        imageRadio: k,
        rootRadio: H,
        width: Q,
        height: x
      } = T(N);
      if (!k)
        return 0;
      var j = k > H ? x : Q * k;
      return Math.max(0, (w * j - x) / 2) / w;
    }, D = (N, w, k) => N + w >= k ? k : N + w <= -k ? -k : N + w, b = (N) => {
      if (d) {
        var w = N.currentTarget, {
          touches: k
        } = N, H = m(k[0], w);
        if (a.value > 1) {
          var Q = H.clientX - d.clientX, x = H.clientY - d.clientY, j = I(w), W = P(w);
          t.value = D(t.value, Q, j), o.value = D(o.value, x, W);
        }
        d = H;
      }
    }, V = () => {
      if (a.value > 1) {
        C(), setTimeout(() => S(e["onUpdate:show"], !1), Hl);
        return;
      }
      S(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (N) => {
      n.value = N;
    }, {
      immediate: !0
    }), {
      n: Ll,
      classes: Ry,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: $,
      handleTouchmove: b,
      handleTouchend: M,
      close: V
    };
  }
});
md.render = Fy;
const pr = md;
function st() {
  return st = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, st.apply(this, arguments);
}
var ar, ut = {};
function Yy(e) {
  return e === void 0 && (e = {}), Re(e) ? st({}, ut, {
    images: [e]
  }) : Ce(e) ? st({}, ut, {
    images: e
  }) : st({}, ut, e);
}
function En(e) {
  if (et()) {
    En.close();
    var n = Yy(e), r = Ie(n);
    r.teleport = "body", ar = r;
    var {
      unmountInstance: a
    } = nt(pr, r, {
      onClose: () => S(r.onClose),
      onClosed: () => {
        S(r.onClosed), a(), ar === r && (ar = null);
      },
      onRouteChange: () => {
        a(), ar === r && (ar = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
En.close = () => {
  if (ar != null) {
    var e = ar;
    ar = null, Be().then(() => {
      e.show = !1;
    });
  }
};
En.setDefaultOptions = (e) => {
  ut = e;
};
En.resetDefaultOptions = () => {
  ut = {};
};
pr.install = function(e) {
  e.component(pr.name, pr);
};
En.install = function(e) {
  e.component(pr.name, pr);
};
En.Component = pr;
var JS = pr, Rt = {
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
  onScroll: F()
};
function Fl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Yl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Fl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Fl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: jy,
  classes: Wy
} = re("sticky");
function Gy(e, n) {
  return p(), O(
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
      [Y(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var pd = ee({
  name: "VarSticky",
  props: Rt,
  setup(e) {
    var n = B(null), r = B(null), a = B(!1), t = B("0px"), o = B("0px"), l = B("auto"), i = B("auto"), s = B("auto"), u = B("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => Le(e.offsetTop)), m, g = () => {
      var {
        cssMode: $,
        disabled: T
      } = e;
      if (!T) {
        var I = 0;
        if (m !== window) {
          var {
            top: P
          } = m.getBoundingClientRect();
          I = P;
        }
        var D = r.value, b = n.value, {
          top: V,
          left: N
        } = b.getBoundingClientRect(), w = V - I;
        return w <= f.value ? ($ || (l.value = b.offsetWidth + "px", i.value = b.offsetHeight + "px", t.value = I + f.value + "px", o.value = N + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: w,
          isFixed: !1
        });
      }
    }, C = () => {
      if (m) {
        var $ = g();
        $ && S(e.onScroll, $.offsetTop, $.isFixed);
      }
    }, h = /* @__PURE__ */ function() {
      var $ = Yl(function* () {
        a.value = !1, yield Zv(), g();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), y = /* @__PURE__ */ function() {
      var $ = Yl(function* () {
        yield In(), m = br(n.value), m !== window && m.addEventListener("scroll", C), C();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), M = () => {
      m !== window && m.removeEventListener("scroll", C);
    };
    return ie(() => e.disabled, h), ln(y), _a(M), Tr(M), wr(window, "scroll", C), wr(window, "resize", h), {
      n: jy,
      classes: Wy,
      resize: h,
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
pd.render = Gy;
const Gn = pd;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var QS = Gn, hd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function qy() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(hd);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function Xy() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(hd);
  return r || Sn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var Ky = {
  index: {
    type: [Number, String]
  }
}, {
  n: Zy,
  classes: Jy
} = re("index-anchor");
function Qy(e, n) {
  return p(), he(
    xa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ue(() => [A(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [Y(e.$slots, "default", {}, () => [be(
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
var gd = ee({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Gn
  },
  inheritAttrs: !1,
  props: Ky,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Xy(), t = B(0), o = B(!1), l = R(() => e.index), i = B(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, g = (h) => {
      o.value = h;
    }, C = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: g
    };
    return a(C), {
      n: Zy,
      classes: Jy,
      name: l,
      anchorEl: i,
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
gd.render = Qy;
const Qr = gd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var _S = Qr, _y = {
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
  onClick: F(),
  onChange: F()
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
function It(e) {
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
  n: xy,
  classes: eb
} = re("index-bar"), nb = ["onClick"];
function rb(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [Y(e.$slots, "default"), A(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: G({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), O(
        $e,
        null,
        Ae(e.anchorNameList, (r) => (p(), O(
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
          nb
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
var yd = ee({
  name: "VarIndexBar",
  props: _y,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = qy(), t = B(""), o = B(null), l = B([]), i = B(), s = R(() => e.sticky), u = R(() => e.stickyCssMode || e.cssMode), d = R(() => Le(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, m = !1, g = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(g);
    var C = (D, b) => {
      var V = hi(D) ? D.name.value : D;
      V === i.value || V === void 0 || (i.value = V, (b == null ? void 0 : b.event) !== !1 && S(e.onChange, V));
    }, h = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: D
      } = f.getBoundingClientRect(), {
        scrollTop: b
      } = f, {
        top: V
      } = o.value.getBoundingClientRect();
      return b - D + V;
    }, y = () => {
      var D = dt(f), b = f === window ? document.body.scrollHeight : f.scrollHeight, V = h();
      r.forEach((N, w) => {
        var k = N.ownTop.value, H = D - k + d.value - V, Q = w === r.length - 1 ? b : r[w + 1].ownTop.value - N.ownTop.value;
        N.setDisabled(!0), H >= 0 && H < Q && t.value === "" && (N.setDisabled(!1), C(N));
      });
    }, M = /* @__PURE__ */ function() {
      var D = It(function* (b) {
        var {
          anchorName: V,
          manualCall: N = !1,
          options: w
        } = b;
        if (N && S(e.onClick, V), !(V === i.value && !m)) {
          var k = r.find((j) => {
            var {
              name: W
            } = j;
            return V === W.value;
          });
          if (k) {
            var H = h(), Q = k.ownTop.value - d.value + H, x = bi(f);
            t.value = V, C(V, w), yield vt(f, {
              left: x,
              top: Q,
              animation: fs,
              duration: L(e.duration)
            }), no(() => {
              t.value = "";
            });
          }
        }
      });
      return function(V) {
        return D.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var D = It(function* () {
        yield In(), f = br(o.value);
      });
      return function() {
        return D.apply(this, arguments);
      };
    }(), T = () => {
      f.addEventListener("scroll", y);
    }, I = () => {
      f.removeEventListener("scroll", y);
    }, P = (D, b) => {
      yn(() => M({
        anchorName: D,
        options: b
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ It(function* () {
      yield In(), r.forEach((D) => {
        var {
          name: b,
          setOwnTop: V
        } = D;
        b.value && l.value.push(b.value), V();
      });
    })), ln(/* @__PURE__ */ It(function* () {
      yield $(), T();
    })), Qt(I), Tr(() => {
      m = !0, I();
    }), $r(() => {
      !m || i.value === void 0 || (M({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: xy,
      classes: eb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: P,
      anchorClick: M
    };
  }
});
yd.render = rb;
const _r = yd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var xS = _r;
function ab(e) {
  return ["small", "normal"].includes(e);
}
function tb(e) {
  return ["outlined", "standard"].includes(e);
}
var Li = {
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
    validator: ab
  },
  variant: {
    type: String,
    default: "standard",
    validator: tb
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
  textarea: {
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
  onClick: F(),
  onClear: F()
}, {
  n: Co,
  classes: ob
} = re("field-decorator"), ib = ["for"];
function lb(e, n) {
  var r = te("var-icon");
  return p(), O(
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
        style: G({
          color: e.color,
          cursor: e.cursor
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")])),
          ref: "prependIconEl"
        },
        [Y(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--wrap-non-hint")]))
        },
        [Y(e.$slots, "default"), e.hint || e.alwaysCustomPlaceholder ? (p(), O(
          "label",
          {
            key: 0,
            class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.textarea, e.n("placeholder-textarea")], [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [!e.hint, e.n("--placeholder-non-hint")], e.computePlaceholderState())),
            style: G({
              color: e.color,
              transform: e.placeholderTransform
            }),
            for: e.id
          },
          ae(e.placeholder),
          15,
          ib
        )) : ne("v-if", !0)],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [Y(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.value) ? (p(), he(
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
        )) : ne("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), O(
      $e,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")]))
        },
        [e.formDisabled || e.disabled ? ne("v-if", !0) : (p(), O(
          $e,
          {
            key: 0
          },
          [A(
            "div",
            {
              class: c(e.classes(e.n("line-start"), [e.errorMessage, e.n("--line-error")])),
              style: G({
                borderColor: e.color
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: c(e.classes(e.n("line-notch"), [e.hint && (!e.isEmpty(e.value) || e.isFocus), e.n("line-notch--hint")], [e.errorMessage, e.n("--line-error")])),
              style: G({
                borderColor: e.color
              })
            },
            [A(
              "div",
              {
                class: c(e.classes(e.n("line-placeholder"), e.n("$--ellipsis")))
              },
              ae(e.placeholder),
              3
              /* TEXT, CLASS */
            )],
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: c(e.classes(e.n("line-end"), [e.errorMessage, e.n("--line-error")])),
              style: G({
                borderColor: e.color
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          64
          /* STABLE_FRAGMENT */
        ))],
        2
        /* CLASS */
      )) : (p(), O(
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
    )) : ne("v-if", !0)],
    2
    /* CLASS */
  );
}
var bd = ee({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Te
  },
  props: Li,
  setup(e) {
    var n = B(null), r = B(""), a = R(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), t = () => {
      var {
        hint: i,
        value: s,
        isFocus: u,
        composing: d
      } = e;
      if (!i && (!Rn(s) || d))
        return Co("--placeholder-hidden");
      if (i && (!Rn(s) || u))
        return Co("--placeholder-hint");
    }, o = (i) => {
      S(e.onClear, i);
    }, l = (i) => {
      S(e.onClick, i);
    };
    return Dv(() => {
      var {
        hint: i,
        value: s,
        isFocus: u,
        variant: d
      } = e;
      if (n.value) {
        if (i && (!Rn(s) || u)) {
          var v, f = ((v = window.getComputedStyle(n.value)) == null ? void 0 : v.width) || 0;
          r.value = "translate(-" + f + ", " + (d === "outlined" ? "-50%" : 0) + ")";
          return;
        }
        r.value = "";
      }
    }), {
      prependIconEl: n,
      placeholderTransform: r,
      color: a,
      computePlaceholderState: t,
      n: Co,
      classes: ob,
      isEmpty: Rn,
      handleClear: o,
      handleClick: l
    };
  }
});
bd.render = lb;
const wd = bd;
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
function sb(e) {
  return ["text", "password", "number"].includes(e);
}
var ub = li({
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
    validator: sb
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
  onFocus: F(),
  onBlur: F(),
  onInput: F(),
  onChange: F(),
  onClear: F(),
  "onUpdate:modelValue": F()
}, We(Li, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: db,
  classes: vb
} = re("input"), fb = ["placeholder"], cb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows"], mb = ["id", "disabled", "type", "value", "placeholder", "maxlength"];
function pb(e, n) {
  var r = te("var-field-decorator"), a = te("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[15] || (n[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [_(
      r,
      bt(xt({
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
        textarea: e.textarea,
        cursor: e.cursor,
        composing: e.isComposing,
        alwaysCustomPlaceholder: !1,
        onClick: e.handleClick,
        onClear: e.handleClear
      })),
      {
        "prepend-icon": ue(() => [Y(e.$slots, "prepend-icon")]),
        "append-icon": ue(() => [Y(e.$slots, "append-icon")]),
        default: ue(() => [e.type === "password" ? (p(), O(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete")),
            placeholder: e.hint ? void 0 : e.placeholder,
            style: G({
              "--input-placeholder-color": e.placeholderColor
            })
          },
          null,
          14,
          fb
        )) : ne("v-if", !0), e.textarea ? (p(), O(
          "textarea",
          {
            key: 1,
            class: c(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            placeholder: e.hint ? void 0 : e.placeholder,
            maxlength: e.maxlength,
            rows: e.rows,
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
          cb
        )) : (p(), O(
          "input",
          {
            key: 2,
            class: c(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            placeholder: e.hint ? void 0 : e.placeholder,
            maxlength: e.maxlength,
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
          mb
        ))]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ), _(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[14] || (n[14] = cn(() => {
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
var Cd = ee({
  name: "VarInput",
  components: {
    VarFormDetails: qe,
    VarFieldDecorator: wd
  },
  props: ub,
  setup(e) {
    var n = B("var-input-" + Ia().uid), r = B(null), a = B(!1), t = B(!1), o = R(() => e.type === "number" ? "text" : e.type), l = R(() => {
      var {
        maxlength: q,
        modelValue: E
      } = e;
      return q ? Rn(E) ? "0 / " + q : String(E).length + "/" + q : "";
    }), i = R(() => e.disabled || e.readonly ? "" : "text"), s = R(() => {
      var {
        hint: q,
        blurColor: E,
        focusColor: z
      } = e;
      if (!q)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? z || "var(--field-decorator-focus-color)" : E || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = $n(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = kn(), C = (q) => {
      Be(() => {
        var {
          validateTrigger: E,
          rules: z,
          modelValue: Z
        } = e;
        f(E, q, z, Z);
      });
    }, h = (q) => {
      a.value = !0, S(e.onFocus, q), C("onFocus");
    }, y = (q) => {
      a.value = !1, S(e.onBlur, q), C("onBlur");
    }, M = (q) => {
      var E = q.target, {
        value: z
      } = E;
      return e.type === "number" && (z = V(z)), w(N(z));
    }, $ = () => {
      t.value = !0;
    }, T = (q) => {
      t.value && (t.value = !1, q.target.dispatchEvent(new Event("input")));
    }, I = (q) => {
      if (!t.value) {
        var E = M(q);
        S(e["onUpdate:modelValue"], E), S(e.onInput, E, q), C("onInput");
      }
    }, P = (q) => {
      var E = M(q);
      S(e.onChange, E, q), C("onChange");
    }, D = () => {
      var {
        disabled: q,
        readonly: E,
        clearable: z,
        onClear: Z
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || q || E || !z || (S(e["onUpdate:modelValue"], ""), S(Z, ""), C("onClear"));
    }, b = (q) => {
      var {
        disabled: E,
        onClick: z
      } = e;
      d != null && d.disabled.value || E || (S(z, q), C("onClick"));
    }, V = (q) => {
      var E = q.indexOf("-"), z = q.indexOf(".");
      return E > -1 && (q = E === 0 ? "-" + q.replace(/-/g, "") : q.replace(/-/g, "")), z > -1 && (q = q.slice(0, z + 1) + q.slice(z).replace(/\./g, "")), q.replace(/[^-0-9.]/g, "");
    }, N = (q) => e.modelModifiers.trim ? q.trim() : q, w = (q) => e.maxlength ? q.slice(0, L(e.maxlength)) : q, k = (q) => {
      var {
        disabled: E,
        readonly: z
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || E || z || q.stopPropagation();
    };
    function H(q) {
      var {
        disabled: E
      } = e;
      d != null && d.disabled.value || E || q.target === r.value || (j(), q.preventDefault());
    }
    var Q = () => {
      S(e["onUpdate:modelValue"], ""), g();
    }, x = () => m(e.rules, e.modelValue), j = () => {
      var q;
      (q = r.value) == null || q.focus();
    }, W = () => {
      r.value.blur();
    }, le = {
      reset: Q,
      validate: x,
      resetValidation: g
    };
    return S(u, le), ln(() => {
      e.autofocus && j();
    }), {
      el: r,
      id: n,
      isFocus: a,
      isComposing: t,
      errorMessage: v,
      placeholderColor: s,
      type: o,
      cursor: i,
      maxlengthText: l,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      n: db,
      classes: vb,
      isEmpty: Rn,
      handleFocus: h,
      handleBlur: y,
      handleInput: I,
      handleChange: P,
      handleClear: D,
      handleClick: b,
      handleTouchstart: k,
      handleCompositionStart: $,
      handleCompositionEnd: T,
      handleMousedown: H,
      validate: x,
      resetValidation: g,
      reset: Q,
      focus: j,
      blur: W
    };
  }
});
Cd.render = pb;
const hr = Cd;
hr.install = function(e) {
  e.component(hr.name, hr);
};
var ek = hr;
function hb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function gb(e) {
  return ["always", "hover", "none"].includes(e);
}
var yb = {
  type: {
    type: String,
    default: "default",
    validator: hb
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
    validator: gb
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
  onClick: F()
}, {
  n: bb,
  classes: wb
} = re("link");
function Cb(e, n) {
  return p(), he(
    xa(e.tag),
    Ve(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ue(() => [Y(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var Sd = ee({
  name: "VarLink",
  props: yb,
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
      o || S(l, t);
    };
    return {
      n: bb,
      classes: wb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: me
    };
  }
});
Sd.render = Cb;
const xr = Sd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var nk = xr, Sb = {
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
  onLoad: F(),
  "onUpdate:loading": F(),
  "onUpdate:error": F()
};
function Wl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function kb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Wl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Wl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: $b,
  classes: Tb
} = re("list");
function Pb(e, n) {
  var r = te("var-loading"), a = Me("ripple");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [Y(e.$slots, "default"), e.loading ? Y(e.$slots, "loading", {
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
        ae(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), _(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : ne("v-if", !0), e.finished ? Y(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: c(e.n("finished"))
      },
      ae(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : ne("v-if", !0), e.error ? Y(e.$slots, "error", {
      key: 2
    }, () => [we((p(), O(
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
    )), [[a]])]) : ne("v-if", !0), A(
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
var kd = ee({
  name: "VarList",
  directives: {
    Ripple: Ue
  },
  components: {
    VarLoading: Vn
  },
  props: Sb,
  setup(e) {
    var n = B(null), r = B(null), a, t = () => {
      S(e["onUpdate:error"], !1), S(e["onUpdate:loading"], !0), S(e.onLoad);
    }, o = () => {
      var i = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Le(e.offset) <= i;
    }, l = /* @__PURE__ */ function() {
      var i = kb(function* () {
        yield Be();
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
    return ln(() => {
      a = br(n.value), e.immediateCheck && l(), a.addEventListener("scroll", l);
    }), _a(() => {
      a.removeEventListener("scroll", l);
    }), {
      pack: je,
      listEl: n,
      detectorEl: r,
      dt: eo,
      isNumber: en,
      load: t,
      check: l,
      n: $b,
      classes: Tb
    };
  }
});
kd.render = Pb;
const ea = kd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var rk = ea, Ob = {
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
  classes: Vb,
  n: Gl
} = re("loading-bar");
const Mb = ee({
  name: "VarLoadingBar",
  props: Ob,
  setup(e) {
    return () => _("div", {
      class: Vb(Gl(), [e.error, Gl("--error")]),
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
var $d, Td, ho, Pd, ql, Od = {}, Bb = {
  value: 0,
  opacity: 0,
  error: !1
}, Ge = Ie(Bb), Eb = (e) => {
  Object.assign(Ge, e);
}, Ib = (e) => {
  Object.assign(Ge, e), Od = e;
}, Nb = () => {
  Object.keys(Od).forEach((e) => {
    Ge[e] !== void 0 && (Ge[e] = void 0);
  });
}, Vd = () => {
  ql || (ql = !0, nt(Mb, Ge));
}, Ri = () => {
  $d = window.setTimeout(() => {
    if (!(Ge.value >= 95)) {
      var e = Math.random();
      Ge.value < 70 && (e = Math.round(5 * Math.random())), Ge.value += e, Ri();
    }
  }, 200);
}, Ui = () => {
  window.clearTimeout(Td), window.clearTimeout($d), window.clearTimeout(ho), window.clearTimeout(Pd);
}, Db = () => {
  Ui(), Ge.error = !1, Ge.value = 0, Vd(), ho = window.setTimeout(() => {
    Ge.opacity = 1;
  }, 200), Ri();
}, Md = () => {
  Ui(), Ge.value = 100, ho = window.setTimeout(() => {
    Ge.opacity = 0, Td = window.setTimeout(() => {
      Ge.error = !1;
    }, 250);
  }, 300);
}, Ab = () => {
  Ui(), Ge.error = !0, Ge.value === 100 && (Ge.value = 0), Vd(), ho = window.setTimeout(() => {
    Ge.opacity = 1;
  }, 200), Ri(), Pd = window.setTimeout(Md, 300);
}, Bd = {
  start: Db,
  finish: Md,
  error: Ab,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Eb,
  setDefaultOptions: Ib,
  resetDefaultOptions: Nb
}, ak = Bd;
const si = Bd;
function zb(e) {
  return ["click", "hover"].includes(e);
}
function Lb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Rb = {
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
    validator: zb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Lb
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F()
}, {
  n: Ub,
  classes: Hb
} = re("menu");
function Fb(e, n) {
  return p(), O(
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
    [Y(e.$slots, "default"), (p(), he(
      Na,
      {
        to: e.teleport
      },
      [_(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ue(() => [we(A(
            "div",
            {
              ref: "popover",
              style: G({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
              onClick: n[0] || (n[0] = cn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [Y(e.$slots, "menu")],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[yr, e.show]])]),
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
var Ed = ee({
  name: "VarMenu",
  props: Rb,
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
      resize: g
    } = od(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: dn,
      toSizeUnit: me,
      n: Ub,
      classes: Hb,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: g,
      open: f,
      close: m
    };
  }
});
Ed.render = Fb;
const qn = Ed;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var tk = qn, Id = Symbol("SELECT_BIND_OPTION_KEY");
function Yb() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = un(Id);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function jb() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = sn(Id);
  return r || Sn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var Wb = {
  label: {},
  value: {}
}, {
  n: Gb,
  classes: qb
} = re("option");
function Xb(e, n) {
  var r = te("var-checkbox"), a = Me("ripple");
  return we((p(), O(
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
    ), e.multiple ? (p(), he(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = cn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : ne("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [Y(e.$slots, "default", {}, () => [be(
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
var Nd = ee({
  name: "VarOption",
  directives: {
    Ripple: Ue
  },
  components: {
    VarCheckbox: dr
  },
  props: Wb,
  setup(e) {
    var n = B(!1), r = R(() => n.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: l
    } = jb(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      n.value = !n.value, u(g);
    }, f = () => u(g), m = (C) => {
      n.value = C;
    }, g = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return ie([() => e.label, () => e.value], d), l(g), {
      n: Gb,
      classes: qb,
      optionSelected: n,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Nd.render = Xb;
const na = Nd;
na.install = function(e) {
  e.component(na.name, na);
};
var ok = na, Kb = {
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
  onClick: F(),
  "onUpdate:show": F()
};
function Zb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: Xl
} = re("overlay");
const ra = ee({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Kb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Ct(() => e.show, 1), {
      disabled: o
    } = ro(), l = () => {
      S(e.onClick), S(e["onUpdate:show"], !1);
    };
    ao(() => e.show, () => e.lockScroll);
    var i = () => _("div", Ve({
      class: Xl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [S(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return _(De, {
        name: Xl("--fade")
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
        return _(Na, {
          to: u,
          disabled: o.value
        }, Zb(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
var ik = ra, Jb = {
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
  onChange: F(),
  "onUpdate:current": F(),
  "onUpdate:size": F()
}, {
  n: Qb,
  classes: _b
} = re("pagination"), xb = ["item-mode", "onClick"];
function e0(e, n) {
  var r = te("var-icon"), a = te("var-input"), t = te("var-cell"), o = te("var-menu"), l = Me("ripple");
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [we((p(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [Y(e.$slots, "prev", {}, () => [_(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), O(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [_(
        a,
        {
          modelValue: e.simpleCurrentValue,
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleCurrentValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
          onKeydown: n[3] || (n[3] = Wi((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), A("span", null, [be(
        " / " + ae(e.pageCount) + " ",
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
    )) : (p(!0), O(
      $e,
      {
        key: 1
      },
      Ae(e.pageList, (i, s) => we((p(), O(
        "li",
        {
          key: e.toNumber(i) + s,
          "item-mode": e.getMode(i, s),
          class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [be(
          ae(i),
          1
          /* TEXT */
        )],
        10,
        xb
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), we((p(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [Y(e.$slots, "next", {}, () => [_(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), O(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [_(
        o,
        {
          disabled: e.disabled,
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ue(() => [(p(!0), O(
            $e,
            null,
            Ae(e.sizeOption, (i, s) => we((p(), he(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ue(() => [be(
                  ae(i) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
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
          default: ue(() => [A(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = cn(function() {
                return e.showMenu && e.showMenu(...arguments);
              }, ["stop"]))
            },
            [A(
              "span",
              null,
              ae(e.size) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
              1
              /* TEXT */
            ), _(
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
    )) : ne("v-if", !0), e.showQuickJumper && !e.simple ? (p(), O(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [be(
        ae(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), _(
        a,
        {
          modelValue: e.quickJumperValue,
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.quickJumperValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
          onKeydown: n[9] || (n[9] = Wi((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : ne("v-if", !0), e.totalText ? (p(), O(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      ae(e.totalText),
      3
      /* TEXT, CLASS */
    )) : ne("v-if", !0)],
    2
    /* CLASS */
  );
}
var Dd = ee({
  name: "VarPagination",
  components: {
    VarMenu: qn,
    VarIcon: Te,
    VarCell: ur,
    VarInput: hr
  },
  directives: {
    Ripple: Ue
  },
  props: Jb,
  setup(e) {
    var n = B(!1), r = B(""), a = B("1"), t = B(!1), o = B(!1), l = B(L(e.current) || 1), i = B(L(e.size) || 10), s = B([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(L(e.total) / L(i.value))), v = R(() => {
      var T = i.value * (l.value - 1) + 1, I = Math.min(i.value * l.value, L(e.total));
      return [T, I];
    }), f = R(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (T, I) => en(T) ? !1 : I === 1 ? t.value : o.value, g = (T, I) => en(T) ? "basic" : I === 1 ? "head" : "tail", C = (T, I) => {
      if (!(T === l.value || e.disabled)) {
        if (T === "...") {
          l.value = I === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
          return;
        }
        if (T === "prev") {
          l.value = M(l.value - 1);
          return;
        }
        if (T === "next") {
          l.value = M(l.value + 1);
          return;
        }
        en(T) && (l.value = T);
      }
    }, h = () => {
      e.disabled || (n.value = !0);
    }, y = (T) => {
      i.value = T, n.value = !1;
      var I = M(l.value);
      a.value = String(I), l.value = I;
    }, M = (T) => T > d.value ? d.value : T < 1 ? 1 : T, $ = (T, I, P) => {
      P.target.blur();
      var D = M(L(I));
      a.value = String(D), l.value = D, T === "quick" && (r.value = "");
    };
    return ie([() => e.current, () => e.size], (T) => {
      var [I, P] = T;
      l.value = L(I) || 1, i.value = L(P || 10);
    }), ie([l, i, d], (T, I) => {
      var [P, D, b] = T, [V, N] = I, w = [], {
        maxPagerCount: k,
        total: H,
        onChange: Q
      } = e, x = Math.ceil(L(H) / L(N)), j = b - (k - u.value) - 1;
      if (a.value = "" + P, b - 2 > k) {
        if (V === void 0 || b !== x)
          for (var W = 2; W < k + 2; W++)
            w.push(W);
        if (P <= k && P < j) {
          w = [];
          for (var le = 1; le < k + 1; le++)
            w.push(le + 1);
          t.value = !0, o.value = !1;
        }
        if (P > k && P < j) {
          w = [];
          for (var q = 1; q < k + 1; q++)
            w.push(P + q - u.value);
          t.value = P === 2 && k === 1, o.value = !1;
        }
        if (P >= j) {
          w = [];
          for (var E = 1; E < k + 1; E++)
            w.push(b - (k - E) - 1);
          t.value = !1, o.value = !0;
        }
        w = [1, "...", ...w, "...", b];
      } else
        for (var z = 1; z <= b; z++)
          w.push(z);
      s.value = w, V != null && b > 0 && S(Q, P, D), S(e["onUpdate:current"], P), S(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: Qb,
      classes: _b,
      pack: je,
      current: l,
      menuVisible: n,
      size: i,
      pageCount: d,
      pageList: s,
      quickJumperValue: r,
      simpleCurrentValue: a,
      totalText: f,
      getMode: g,
      isHideEllipsis: m,
      clickItem: C,
      showMenu: h,
      clickSize: y,
      setPage: $,
      toNumber: L,
      formatElevation: dn
    };
  }
});
Dd.render = e0;
const aa = Dd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var lk = aa, n0 = {
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
  onClick: F()
}, {
  n: r0,
  classes: a0
} = re("paper");
function t0(e, n) {
  var r = Me("ripple");
  return we((p(), O(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var Ad = ee({
  name: "VarPaper",
  directives: {
    Ripple: Ue
  },
  props: n0,
  setup(e) {
    var n = (r) => {
      S(e.onClick, r);
    };
    return {
      n: r0,
      classes: a0,
      formatElevation: dn,
      toSizeUnit: me,
      handleClick: n
    };
  }
});
Ad.render = t0;
const ta = Ad;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var sk = ta;
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
var o0 = ui({
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
  onChange: F(),
  onConfirm: F(),
  onCancel: F()
}, We(wt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: i0,
  classes: l0
} = re("picker"), Kl = 300, s0 = 15, Zl = 0, u0 = ["onTouchstart", "onTouchmove", "onTouchend"], d0 = ["onTransitionend"];
function v0(e, n) {
  var r = te("var-button");
  return p(), he(
    xa(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ue(() => [A(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [Y(e.$slots, "cancel", {}, () => [_(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ue(() => [be(
                ae(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), Y(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: c(e.n("title"))
            },
            ae(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), Y(e.$slots, "confirm", {}, () => [_(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ue(() => [be(
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
        )) : ne("v-if", !0), A(
          "div",
          {
            class: c(e.n("columns")),
            style: G({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), O(
            $e,
            null,
            Ae(e.scrollColumns, (a) => (p(), O(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: cn((t) => e.handleTouchmove(t, a), ["prevent"]),
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
                [(p(!0), O(
                  $e,
                  null,
                  Ae(a.column.texts, (t) => (p(), O(
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
                d0
              )],
              42,
              u0
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
var zd = ee({
  name: "VarPicker",
  components: {
    VarButton: Ze,
    VarPopup: bn
  },
  inheritAttrs: !1,
  props: o0,
  setup(e) {
    var n = B([]), r = R(() => Le(e.optionHeight)), a = R(() => Le(e.optionCount)), t = R(() => a.value * r.value / 2 - r.value / 2), o = R(() => a.value * r.value), l = [], i = (w, k) => {
      k.scrollEl = w;
    }, s = (w) => {
      S(e["onUpdate:show"], w);
    }, u = (w) => {
      var k = r.value + t.value, H = t.value - w.column.texts.length * r.value;
      w.translate >= k && (w.translate = k), w.translate <= H && (w.translate = H);
    }, d = (w, k) => {
      var {
        length: H
      } = w.column.texts;
      return k = k >= H ? H - 1 : k, k = k <= 0 ? 0 : k, k;
    }, v = (w) => {
      var k = Math.round((t.value - w.translate) / r.value);
      return d(w, k);
    }, f = () => {
      var w = n.value.map((H) => H.column.texts[H.index]), k = n.value.map((H) => H.index);
      return {
        texts: w,
        indexes: k
      };
    }, m = function(w, k, H, Q) {
      Q === void 0 && (Q = !1);
      var x = t.value - d(w, k) * r.value;
      x === w.translate && (w.scrolling = !1, !Q && D(w)), w.translate = x, w.duration = H;
    }, g = (w, k, H) => {
      w.translate += Math.abs(k / H) / 3e-3 * (k < 0 ? -1 : 1);
    }, C = (w, k) => {
      k.touching = !0, k.scrolling = !1, k.duration = 0, k.translate = yo(k.scrollEl);
    }, h = (w, k) => {
      if (k.touching) {
        var {
          clientY: H
        } = w.touches[0], Q = k.prevY !== void 0 ? H - k.prevY : 0;
        k.prevY = H, k.translate += Q, u(k);
        var x = performance.now();
        x - k.momentumTime > Kl && (k.momentumTime = x, k.momentumPrevY = k.translate);
      }
    }, y = (w, k) => {
      k.touching = !1, k.scrolling = !0, k.prevY = void 0;
      var H = k.translate - k.momentumPrevY, Q = performance.now() - k.momentumTime, x = Math.abs(H) >= s0 && Q <= Kl;
      x && g(k, H, Q), k.index = v(k), m(k, k.index, x ? 1e3 : 200);
    }, M = (w) => {
      w.scrolling = !1, D(w);
    }, $ = (w) => w.map((k, H) => {
      var Q, x = Ce(k) ? {
        texts: k
      } : k, j = {
        id: Zl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = x.initialIndex) != null ? Q : 0,
        columnIndex: H,
        duration: 0,
        momentumTime: 0,
        column: x,
        scrollEl: null,
        scrolling: !1
      };
      return m(j, j.index, 0, !0), j;
    }), T = (w) => {
      var k = [];
      return I(k, w, 0, !0), k;
    }, I = function(w, k, H, Q) {
      if (Q === void 0 && (Q = !1), Ce(k) && k.length) {
        var x, j = Q && (x = e.cascadeInitialIndexes[w.length]) != null ? x : 0, W = {
          id: Zl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: j,
          columnIndex: H,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: k.map((le) => le[e.textKey])
          },
          columns: k,
          scrollEl: null,
          scrolling: !1
        };
        w.push(W), m(W, W.index, 0, !0), I(w, W.columns[W.index].children, H + 1, Q);
      }
    }, P = (w) => {
      n.value.splice(n.value.indexOf(w) + 1), I(n.value, w.columns[w.index].children, w.columnIndex + 1);
    }, D = (w) => {
      var {
        cascade: k,
        onChange: H
      } = e;
      k && P(w);
      var Q = n.value.some((le) => le.scrolling);
      if (!Q) {
        var {
          texts: x,
          indexes: j
        } = f(), W = j.every((le, q) => le === l[q]);
        W || (l = [...j], S(H, x, j));
      }
    }, b = () => {
      if (e.cascade) {
        var w = n.value.find((k) => k.scrolling);
        w && (w.translate = yo(w.scrollEl), w.index = v(w), m(w, w.index, 0, !0), w.scrolling = !1, P(w));
      } else
        n.value.forEach((k) => {
          k.translate = yo(k.scrollEl), k.index = v(k), m(k, k.index, 0);
        });
    }, V = () => {
      b();
      var {
        texts: w,
        indexes: k
      } = f();
      l = [...k], S(e.onConfirm, w, k);
    }, N = () => {
      b();
      var {
        texts: w,
        indexes: k
      } = f();
      l = [...k], S(e.onCancel, w, k);
    };
    return ie(() => e.columns, (w) => {
      n.value = e.cascade ? T(Gi(w)) : $(Gi(w));
      var {
        indexes: k
      } = f();
      l = [...k];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: i0,
      classes: l0,
      pack: je,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: De,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: C,
      handleTouchmove: h,
      handleTouchend: y,
      handleTransitionend: M,
      confirm: V,
      cancel: N,
      dt: eo
    };
  }
});
zd.render = v0;
const gr = zd;
var rn;
function Ea(e) {
  return new Promise((n) => {
    Ea.close();
    var r = Ce(e) ? {
      columns: e
    } : e, a = Ie(r);
    a.dynamic = !0, a.teleport = "body", rn = a;
    var {
      unmountInstance: t
    } = nt(gr, a, {
      onConfirm: (o, l) => {
        S(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, rn === a && (rn = null);
      },
      onCancel: (o, l) => {
        S(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, rn === a && (rn = null);
      },
      onClose: () => {
        S(a.onClose), n({
          state: "close"
        }), rn === a && (rn = null);
      },
      onClosed: () => {
        S(a.onClosed), t(), rn === a && (rn = null);
      },
      onRouteChange: () => {
        t(), rn === a && (rn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
gr.install = function(e) {
  e.component(gr.name, gr);
};
Ea.Component = gr;
Ea.install = function(e) {
  e.component(gr.name, gr);
};
Ea.close = function() {
  if (rn != null) {
    var e = rn;
    rn = null, Be().then(() => {
      e.show = !1;
    });
  }
};
var uk = gr;
function f0(e) {
  return ["linear", "circle"].includes(e);
}
var c0 = {
  mode: {
    type: String,
    default: "linear",
    validator: f0
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
  n: m0,
  classes: p0
} = re("progress"), h0 = ["viewBox"], g0 = ["cx", "cy", "r", "stroke-width"], y0 = ["cx", "cy", "r", "stroke-width"];
function b0(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (p(), O(
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
        [e.track ? (p(), O(
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
        )) : ne("v-if", !0), A(
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
      ), e.label ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [be(
          ae(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ne("v-if", !0)],
      2
      /* CLASS */
    )) : ne("v-if", !0), e.mode === "circle" ? (p(), O(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), O(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: G({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (p(), O(
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
          g0
        )) : ne("v-if", !0), A(
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
          y0
        )],
        14,
        h0
      )), e.label ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [be(
          ae(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ne("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : ne("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ld = ee({
  name: "VarProgress",
  props: c0,
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
      } = e, l = "0 0 " + Le(a) + " " + Le(a), i = L(o) > 100 ? 100 : Math.round(L(o)), s = (Le(a) - Le(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: m0,
      classes: p0,
      toSizeUnit: me,
      multiplySizeUnit: _e,
      linearProps: n,
      circleProps: r
    };
  }
});
Ld.render = b0;
const oa = Ld;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var dk = oa, w0 = {
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
  onRefresh: F(),
  "onUpdate:modelValue": F()
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
  n: _l,
  classes: C0
} = re("pull-refresh"), xl = 150;
function S0(e, n) {
  var r = te("var-icon");
  return p(), O(
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
      [_(
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
    ), Y(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Rd = ee({
  name: "VarPullRefresh",
  components: {
    VarIcon: Te
  },
  props: w0,
  setup(e) {
    var n = B(0), r = B(null), a = B(null), t = B(0), o = B("-125%"), l = B("arrow-down"), i = B("default"), s = B(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var b = Ql(function* (V) {
        if (l.value !== V)
          return l.value = V, new Promise((N) => {
            window.setTimeout(N, xl);
          });
      });
      return function(N) {
        return b.apply(this, arguments);
      };
    }(), g = R(() => i.value !== "loading" && i.value !== "success" && !e.disabled), C = R(() => ({
      transform: "translate3d(0px, " + (Re(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: y.value ? e.successBgColor : e.bgColor,
      color: y.value ? e.successColor : e.color
    })), h = R(() => Math.abs(2 * n.value)), y = R(() => i.value === "success"), M = (b) => {
      var V = "classList" in u ? u : document.body;
      V.classList[b](_l() + "--lock");
    }, $ = (b) => {
      if (n.value === 0) {
        var {
          width: V
        } = a.value.getBoundingClientRect();
        n.value = -(V + V * 0.25);
      }
      v = b.touches[0].clientY, f = 0, d = br(b.target);
    }, T = (b) => {
      if (g.value && !(d !== u && dt(d) > 0)) {
        var V = dt(u);
        if (!(V > 0)) {
          var N = V === 0, w = b.touches[0];
          f = w.clientY - v, N && f >= 0 && b.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = b.touches[0].clientY), N && o.value > n.value && M("add");
          var k = (b.touches[0].clientY - t.value) / 2 + n.value;
          o.value = k >= h.value ? h.value : k, m(o.value >= h.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, I = /* @__PURE__ */ function() {
      var b = Ql(function* () {
        g.value && (s.value = !0, o.value >= h.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = h.value * 0.3, S(e["onUpdate:modelValue"], !0), Be(() => {
          S(e.onRefresh);
        }), M("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, M("remove");
        }, L(e.animationDuration))), d = null);
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), P = () => {
      u = e.target ? ms(e.target, "PullRefresh") : br(r.value);
    }, D = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    };
    return ie(() => e.modelValue, (b) => {
      b === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, D();
      }, L(e.successDuration)));
    }), ln(P), wr(r, "touchmove", T), {
      n: _l,
      classes: C0,
      ICON_TRANSITION: xl,
      refreshStatus: i,
      freshNode: r,
      controlNode: a,
      touchStart: $,
      touchMove: T,
      touchEnd: I,
      iconName: l,
      controlStyle: C,
      isSuccess: y
    };
  }
});
Rd.render = S0;
const ia = Rd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var vk = ia, k0 = {
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
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, Ud = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function $0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Ud);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function T0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(Ud);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: P0,
  classes: O0
} = re("radio");
function V0(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Me("ripple"), l = Me("hover");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [we((p(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [_(
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
        )]) : Y(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [_(
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
        )]), _(
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
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), _(
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
var Hd = ee({
  name: "VarRadio",
  directives: {
    Ripple: Ue,
    Hover: Nn
  },
  components: {
    VarIcon: Te,
    VarFormDetails: qe,
    VarHoverOverlay: tn
  },
  inheritAttrs: !1,
  props: k0,
  setup(e) {
    var n = B(!1), r = R(() => n.value === e.checkedValue), a = B(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = T0(), {
      hovering: l,
      handleHovering: i
    } = Cr(), {
      form: s,
      bindForm: u
    } = $n(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = kn(), g = (P) => {
      Be(() => {
        var {
          validateTrigger: D,
          rules: b,
          modelValue: V
        } = e;
        v(D, P, b, V);
      });
    }, C = (P) => {
      var {
        checkedValue: D,
        onChange: b
      } = e;
      t && n.value === D || (n.value = P, S(e["onUpdate:modelValue"], n.value), S(b, n.value), t == null || t.onToggle(D), g("onChange"));
    }, h = (P) => {
      var {
        disabled: D,
        readonly: b,
        uncheckedValue: V,
        checkedValue: N,
        onClick: w
      } = e;
      s != null && s.disabled.value || D || (S(w, P), !(s != null && s.readonly.value || b) && (a.value = !0, C(r.value ? V : N)));
    }, y = (P) => {
      var {
        checkedValue: D,
        uncheckedValue: b
      } = e;
      n.value = P === D ? D : b;
    }, M = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, $ = () => f(e.rules, e.modelValue), T = (P) => {
      var {
        uncheckedValue: D,
        checkedValue: b
      } = e, V = ![D, b].includes(P);
      V && (P = r.value ? D : b), C(P);
    };
    ie(() => e.modelValue, (P) => {
      n.value = P;
    }, {
      immediate: !0
    });
    var I = {
      sync: y,
      validate: $,
      resetValidation: m,
      reset: M
    };
    return S(o, I), S(u, I), {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: P0,
      classes: O0,
      handleClick: h,
      toggle: T,
      reset: M,
      validate: $,
      resetValidation: m
    };
  }
});
Hd.render = V0;
const la = Hd;
la.install = function(e) {
  e.component(la.name, la);
};
var fk = la;
function M0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var B0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: M0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: E0,
  classes: I0
} = re("radio-group");
function N0(e, n) {
  var r = te("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), _(
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
var Fd = ee({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: qe
  },
  props: B0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = $0(), {
      bindForm: t
    } = $n(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = kn(), u = R(() => o.value), d = (h) => {
      Be(() => {
        var {
          validateTrigger: y,
          rules: M,
          modelValue: $
        } = e;
        l(y, h, M, $);
      });
    }, v = () => r.forEach((h) => {
      var {
        sync: y
      } = h;
      return y(e.modelValue);
    }), f = (h) => {
      S(e["onUpdate:modelValue"], h), S(e.onChange, h), d("onChange");
    }, m = () => i(e.rules, e.modelValue), g = () => {
      S(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => n.value, v);
    var C = {
      onToggle: f,
      validate: m,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return S(t, C), a(C), {
      errorMessage: o,
      n: E0,
      classes: I0,
      reset: g,
      validate: m,
      resetValidation: s
    };
  }
});
Fd.render = N0;
const sa = Fd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var ck = sa, D0 = {
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: at
} = re("rate"), A0 = ["onClick"];
function z0(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Me("ripple"), l = Me("hover");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), O(
        $e,
        null,
        Ae(e.toNumber(e.count), (i) => we((p(), O(
          "div",
          {
            key: i,
            style: G(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (s) => e.handleClick(i, s)
          },
          [_(
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
          ), _(
            a,
            {
              hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          A0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), _(
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
var Yd = ee({
  name: "VarRate",
  components: {
    VarIcon: Te,
    VarFormDetails: qe,
    VarHoverOverlay: tn
  },
  directives: {
    Ripple: Ue,
    Hover: Nn
  },
  props: D0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = $n(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = kn(), {
      hovering: i
    } = Cr(), s = B(-1), u = ($) => {
      var {
        count: T,
        gap: I
      } = e;
      return {
        color: v($).color,
        marginRight: $ !== L(T) ? me(I) : 0
      };
    }, d = ($) => {
      var {
        name: T,
        color: I
      } = v($);
      return {
        [at("content")]: !0,
        [at("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [at("--error")]: a.value,
        [at("--primary")]: T !== e.emptyIcon && !I
      };
    }, v = ($) => {
      var {
        modelValue: T,
        disabled: I,
        disabledColor: P,
        color: D,
        half: b,
        emptyColor: V,
        icon: N,
        halfIcon: w,
        emptyIcon: k
      } = e, H = D;
      return (I || n != null && n.disabled.value) && (H = P), $ <= L(T) ? {
        color: H,
        name: N
      } : b && $ <= L(T) + 0.5 ? {
        color: H,
        name: w
      } : {
        color: I || n != null && n.disabled.value ? P : V,
        name: k
      };
    }, f = ($, T) => {
      if (e.half) {
        var {
          offsetWidth: I
        } = T.target;
        T.offsetX <= Math.floor(I / 2) && ($ -= 0.5);
      }
      S(e["onUpdate:modelValue"], $);
    }, m = () => o(e.rules, L(e.modelValue)), g = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), C = ($, T) => {
      var {
        readonly: I,
        disabled: P,
        onChange: D
      } = e;
      I || P || n != null && n.disabled.value || n != null && n.readonly.value || (f($, T), S(D, $), g());
    }, h = ($) => (T) => {
      s.value = $, i.value = T;
    }, y = () => {
      S(e["onUpdate:modelValue"], 0), l();
    }, M = {
      reset: y,
      validate: m,
      resetValidation: l
    };
    return S(r, M), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: C,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: h,
      reset: y,
      validate: m,
      resetValidation: l,
      toSizeUnit: me,
      toNumber: L,
      n: at
    };
  }
});
Yd.render = z0;
const ua = Yd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var mk = ua;
function L0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var R0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: L0
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
}, U0 = (e) => (Da(""), e = e(), Aa(), e), H0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, F0 = /* @__PURE__ */ U0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), Y0 = [F0];
function j0(e, n) {
  return p(), O("svg", H0, Y0);
}
var jd = ee({});
jd.render = j0;
const W0 = jd;
var G0 = (e) => (Da(""), e = e(), Aa(), e), q0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, X0 = /* @__PURE__ */ G0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), K0 = [X0];
function Z0(e, n) {
  return p(), O("svg", q0, K0);
}
var Wd = ee({});
Wd.render = Z0;
const J0 = Wd;
var Q0 = (e) => (Da(""), e = e(), Aa(), e), _0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, x0 = /* @__PURE__ */ Q0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), e1 = [x0];
function n1(e, n) {
  return p(), O("svg", _0, e1);
}
var Gd = ee({});
Gd.render = n1;
const r1 = Gd;
var {
  n: a1,
  classes: t1
} = re("result");
function o1(e, n) {
  return p(), O(
    $e,
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
var qd = ee({
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
      n: a1,
      classes: t1,
      toNumber: L
    };
  }
});
qd.render = o1;
const i1 = qd;
var l1 = (e) => (Da(""), e = e(), Aa(), e), s1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, u1 = /* @__PURE__ */ l1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), d1 = [u1];
function v1(e, n) {
  return p(), O("svg", s1, d1);
}
var Xd = ee({});
Xd.render = v1;
const f1 = Xd;
var c1 = (e) => (Da(""), e = e(), Aa(), e), m1 = {
  viewBox: "-4 -4 32 32"
}, p1 = /* @__PURE__ */ c1(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), h1 = [p1];
function g1(e, n) {
  return p(), O("svg", m1, h1);
}
var Kd = ee({});
Kd.render = g1;
const y1 = Kd;
var {
  n: b1,
  classes: w1
} = re("result");
function C1(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "image", {}, () => [e.type ? (p(), O(
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
        [(p(), he(
          xa(e.type),
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
    )) : ne("v-if", !0)]), Y(e.$slots, "title", {}, () => [e.title ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ae(e.title),
      3
      /* TEXT, CLASS */
    )) : ne("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : ne("v-if", !0)]), e.$slots.footer ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [Y(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ne("v-if", !0)],
    2
    /* CLASS */
  );
}
var Zd = ee({
  name: "VarResult",
  components: {
    Info: W0,
    Success: i1,
    Warning: r1,
    Error: J0,
    Question: f1,
    Empty: y1
  },
  props: R0,
  setup(e) {
    var n = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? me(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? me(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: b1,
      classes: w1,
      toNumber: L,
      toPxNum: Le,
      toSizeUnit: me,
      circleSize: n,
      borderSize: r
    };
  }
});
Zd.render = C1;
const da = Zd;
da.install = function(e) {
  e.component(da.name, da);
};
var pk = da;
function S1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function k1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var $1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: S1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: k1
  },
  onClick: F()
}, {
  n: T1,
  classes: P1
} = re("row");
function O1(e, n) {
  return p(), O(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Jd = ee({
  name: "VarRow",
  props: $1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Wm(), t = R(() => {
      var s = Le(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      S(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return ie(() => a.value, o), ie(() => e.gutter, o), r(i), {
      n: T1,
      classes: P1,
      average: t,
      handleClick: l,
      padStartFlex: Ht
    };
  }
});
Jd.render = O1;
const va = Jd;
va.install = function(e) {
  e.component(va.name, va);
};
var hk = va;
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
function V1(e) {
  return ["left", "right", "center"].includes(e);
}
var M1 = di({
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
    validator: V1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: F(),
  onBlur: F(),
  onClose: F(),
  onChange: F(),
  onClear: F(),
  "onUpdate:modelValue": F()
}, We(Li, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: B1,
  classes: E1
} = re("select"), I1 = {
  key: 1
};
function N1(e, n) {
  var r = te("var-chip"), a = te("var-icon"), t = te("var-field-decorator"), o = te("var-menu"), l = te("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [_(
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
        menu: ue(() => [A(
          "div",
          {
            ref: "menuEl",
            class: c(e.classes(e.n("scroller"), e.n("scroller-" + e.variant), [!e.hint, e.n("scroller-non-hint")], e.n("$-elevation--3")))
          },
          [Y(e.$slots, "default")],
          2
          /* CLASS */
        )]),
        default: ue(() => [_(
          t,
          bt(xt({
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
            "prepend-icon": ue(() => [Y(e.$slots, "prepend-icon")]),
            "append-icon": ue(() => [Y(e.$slots, "append-icon")]),
            default: ue(() => [A(
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
                [e.isEmptyModelValue ? ne("v-if", !0) : Y(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), O(
                  $e,
                  {
                    key: 0
                  },
                  [e.chip ? (p(), O(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(p(!0), O(
                      $e,
                      null,
                      Ae(e.labels, (i) => (p(), he(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = cn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: ue(() => [be(
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
                  )) : (p(), O(
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
                )) : (p(), O(
                  "span",
                  I1,
                  ae(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), Y(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [_(
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
    ), _(
      l,
      {
        "error-message": e.errorMessage,
        onClick: n[2] || (n[2] = cn(() => {
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
var Qd = ee({
  name: "VarSelect",
  components: {
    VarIcon: Te,
    VarMenu: qn,
    VarChip: vr,
    VarFieldDecorator: wd,
    VarFormDetails: qe
  },
  props: M1,
  setup(e) {
    var n = B(!1), r = R(() => e.multiple), a = R(() => e.focusColor), t = B(""), o = B([]), l = R(() => Rn(e.modelValue)), i = R(() => e.disabled || e.readonly ? "" : "pointer"), s = B(0), {
      bindForm: u,
      form: d
    } = $n(), {
      length: v,
      options: f,
      bindOptions: m
    } = Yb(), {
      errorMessage: g,
      validateWithTrigger: C,
      validate: h,
      // expose
      resetValidation: y
    } = kn(), M = B(null), $ = R(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), T = () => {
      var {
        multiple: E,
        modelValue: z
      } = e;
      if (E) {
        var Z = z;
        o.value = Z.map(D);
      }
      !E && !Rn(z) && (t.value = D(z)), !E && Rn(z) && (t.value = "");
    }, I = (E) => {
      Be(() => {
        var {
          validateTrigger: z,
          rules: Z,
          modelValue: U
        } = e;
        C(z, E, Z, U);
      });
    }, P = (E) => {
      var {
        value: z,
        label: Z
      } = E;
      return z.value != null ? z.value : Z.value;
    }, D = (E) => {
      var z, Z, U = f.find((X) => {
        var {
          value: J
        } = X;
        return J.value === E;
      });
      return U || (U = f.find((X) => {
        var {
          label: J
        } = X;
        return J.value === E;
      })), (z = (Z = U) == null ? void 0 : Z.label.value) != null ? z : "";
    }, b = () => {
      var {
        disabled: E,
        readonly: z,
        onFocus: Z
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || E || z || (s.value = Le(e.offsetY), n.value = !0, S(Z), I("onFocus"));
    }, V = () => {
      var {
        disabled: E,
        readonly: z,
        onBlur: Z
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || E || z || (S(Z), I("onBlur"));
    }, N = (E) => {
      var {
        disabled: z,
        readonly: Z,
        multiple: U,
        onChange: X
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || z || Z)) {
        var J = U ? f.filter((fe) => {
          var {
            selected: ge
          } = fe;
          return ge.value;
        }).map(P) : P(E);
        S(e["onUpdate:modelValue"], J), S(X, J), I("onChange"), !U && (n.value = !1);
      }
    }, w = () => {
      var {
        disabled: E,
        readonly: z,
        multiple: Z,
        clearable: U,
        onClear: X
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || E || z || !U)) {
        var J = Z ? [] : void 0;
        S(e["onUpdate:modelValue"], J), S(X, J), I("onClear");
      }
    }, k = (E) => {
      var {
        disabled: z,
        onClick: Z
      } = e;
      d != null && d.disabled.value || z || (S(Z, E), I("onClick"));
    }, H = (E) => {
      var {
        disabled: z,
        readonly: Z,
        modelValue: U,
        onClose: X
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || z || Z)) {
        var J = U, fe = f.find((ze) => {
          var {
            label: Ee
          } = ze;
          return Ee.value === E;
        }), ge = J.filter((ze) => {
          var Ee;
          return ze !== ((Ee = fe.value.value) != null ? Ee : fe.label.value);
        });
        S(e["onUpdate:modelValue"], ge), S(X, ge), I("onClose");
      }
    }, Q = () => {
      var {
        multiple: E,
        modelValue: z
      } = e;
      if (E) {
        var Z = z;
        f.forEach((U) => U.sync(Z.includes(P(U))));
      } else
        f.forEach((U) => U.sync(z === P(U)));
      T();
    }, x = () => {
      s.value = Le(e.offsetY), n.value = !0;
    }, j = () => {
      n.value = !1;
    }, W = () => h(e.rules, e.modelValue), le = () => {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), y();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: E,
        modelValue: z
      } = e;
      E && !Ce(z) && Sn("Select", "The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, Q, {
      deep: !0
    }), ie(() => v.value, Q);
    var q = {
      multiple: r,
      focusColor: a,
      computeLabel: T,
      onSelect: N,
      reset: le,
      validate: W,
      resetValidation: y
    };
    return m(q), S(u, q), {
      offsetY: s,
      isFocus: n,
      errorMessage: g,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: M,
      placement: $,
      cursor: i,
      n: B1,
      classes: E1,
      handleFocus: b,
      handleBlur: V,
      handleClear: w,
      handleClick: k,
      handleClose: H,
      reset: le,
      validate: W,
      resetValidation: y,
      focus: x,
      blur: j
    };
  }
});
Qd.render = N1;
const fa = Qd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var gk = fa, D1 = {
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
  n: A1,
  classes: z1
} = re("skeleton");
function L1(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? ne("v-if", !0) : (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), O(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (p(), O(
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
      )) : ne("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), O(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (p(), O(
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
        )) : ne("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), O(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (p(), O(
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
          )) : ne("v-if", !0), (p(!0), O(
            $e,
            null,
            Ae(e.toNumber(e.rows), (r, a) => (p(), O(
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
        )) : ne("v-if", !0)],
        2
        /* CLASS */
      )) : ne("v-if", !0)],
      2
      /* CLASS */
    )) : ne("v-if", !0), e.loading && e.fullscreen ? (p(), O(
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
    )) : ne("v-if", !0)],
    2
    /* CLASS */
  );
}
var _d = ee({
  name: "VarSkeleton",
  props: D1,
  setup() {
    return {
      n: A1,
      classes: z1,
      toSizeUnit: me,
      toNumber: L
    };
  }
});
_d.render = L1;
const ca = _d;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var yk = ca;
function R1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ne;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ne || (Ne = {}));
var U1 = {
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
    validator: R1
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
  onChange: F(),
  onStart: F(),
  onEnd: F(),
  "onUpdate:modelValue": F()
}, {
  n: es,
  classes: H1
} = re("slider"), F1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function Y1(e, n) {
  var r = te("var-hover-overlay"), a = te("var-form-details"), t = Me("hover");
  return p(), O(
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
            style: G({
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
            style: G(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), O(
        $e,
        null,
        Ae(e.thumbList, (o) => (p(), O(
          "div",
          {
            class: c(e.n("thumb")),
            key: o.enumValue,
            style: G({
              left: o.value + "%",
              zIndex: e.thumbsProps[o.enumValue].active ? 1 : void 0
            }),
            onTouchstart: cn((l) => e.start(l, o.enumValue), ["stop"]),
            onTouchmove: cn((l) => e.move(l, o.enumValue), ["stop"]),
            onTouchend: (l) => e.end(o.enumValue),
            onTouchcancel: (l) => e.end(o.enumValue)
          },
          [Y(e.$slots, "button", {
            currentValue: o.text
          }, () => [we(A(
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
          ), [[t, (l) => e.hover(l, o), "desktop"]]), A(
            "div",
            {
              class: c(e.classes(e.n("thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n("thumb-ripple--active")])),
              style: G({
                background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
              })
            },
            [_(
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
              class: c(e.classes(e.n("thumb-label"), [e.showLabel(o.enumValue), e.n("thumb-label--active")])),
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
              ae(o.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          F1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), _(
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
var xd = ee({
  name: "VarSlider",
  components: {
    VarFormDetails: qe,
    VarHoverOverlay: tn
  },
  directives: {
    Hover: Nn
  },
  props: U1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = $n(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = kn(), {
      hovering: i,
      handleHovering: s
    } = Cr(), {
      hovering: u,
      handleHovering: d
    } = Cr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), m = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = B(null), C = B(0), h = B(!1), y = Ie({
      [Ne.First]: f(),
      [Ne.Second]: f()
    }), M = R(() => L(e.max) - L(e.min)), $ = R(() => C.value / M.value * L(e.step)), T = R(() => {
      var {
        modelValue: U,
        range: X
      } = e, J = [];
      return X && Ce(U) ? J = [{
        value: V(U[0]),
        enumValue: Ne.First,
        text: N(U[0]),
        hovering: Ga(i),
        handleHovering: s
      }, {
        value: V(U[1]),
        enumValue: Ne.Second,
        text: N(U[1]),
        hovering: Ga(u),
        handleHovering: d
      }] : en(U) && (J = [{
        value: V(U),
        enumValue: Ne.First,
        text: N(U),
        hovering: Ga(i),
        handleHovering: s
      }]), J;
    }), I = R(() => {
      var {
        activeColor: U,
        range: X,
        modelValue: J
      } = e, fe = X && Ce(J) ? V(Math.min(J[0], J[1])) : 0, ge = X && Ce(J) ? V(Math.max(J[0], J[1])) - fe : V(J);
      return {
        width: ge + "%",
        left: fe + "%",
        background: U
      };
    }), P = R(() => e.disabled || (r == null ? void 0 : r.disabled.value)), D = R(() => e.readonly || (r == null ? void 0 : r.readonly.value)), b = (U) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : y[U].active, V = (U) => {
      var {
        min: X,
        max: J
      } = e;
      return U < L(X) ? 0 : U > L(J) ? 100 : (U - L(X)) / M.value * 100;
    }, N = (U) => {
      if (!en(U))
        return 0;
      var X = U;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var J = parseInt("" + X, 10) === X;
      return J ? X : L(X.toPrecision(5));
    }, w = (U, X) => {
      P.value || X.handleHovering(U);
    }, k = (U, X) => {
      var J = [], {
        step: fe,
        range: ge,
        modelValue: ze,
        onChange: Ee,
        min: mn
      } = e, za = L(fe), zn = Math.round(U / $.value), Xe = zn * za + L(mn), pn = y[X].percentValue * za + L(mn);
      if (y[X].percentValue = zn, ge && Ce(ze) && (J = X === Ne.First ? [Xe, ze[1]] : [ze[0], Xe]), pn !== Xe) {
        var kt = ge ? J.map(($t) => N($t)) : N(Xe);
        S(Ee, kt), S(e["onUpdate:modelValue"], kt), m();
      }
    }, H = (U) => {
      if (!e.range)
        return Ne.First;
      var X = y[Ne.First].percentValue * $.value, J = y[Ne.Second].percentValue * $.value, fe = Math.abs(U - X), ge = Math.abs(U - J);
      return fe <= ge ? Ne.First : Ne.Second;
    }, Q = (U, X) => {
      C.value || (C.value = g.value.offsetWidth), P.value || (y[X].active = !0), !(P.value || D.value) && (S(e.onStart), h.value = !0, y[X].startPosition = U.touches[0].clientX);
    }, x = (U, X) => {
      if (!(P.value || D.value || !h.value)) {
        var J = U.touches[0].clientX - y[X].startPosition + y[X].currentLeft;
        J <= 0 ? J = 0 : J >= C.value && (J = C.value), k(J, X);
      }
    }, j = (U) => {
      var {
        range: X,
        modelValue: J,
        onEnd: fe,
        step: ge,
        min: ze
      } = e;
      if (P.value || (y[U].active = !1), !(P.value || D.value)) {
        var Ee = [];
        y[U].currentLeft = y[U].percentValue * $.value;
        var mn = y[U].percentValue * L(ge) + L(ze);
        X && Ce(J) && (Ee = U === Ne.First ? [mn, J[1]] : [J[0], mn]), S(fe, X ? Ee : mn), h.value = !1;
      }
    }, W = (U) => {
      if (!(P.value || D.value) && !U.target.closest("." + es("thumb"))) {
        var X = U.clientX - Yv(U.currentTarget), J = H(X);
        k(X, J), j(J);
      }
    }, le = () => {
      var U = L(e.step);
      return isNaN(U) ? (Ji("Slider", 'type of prop "step" should be Number'), !1) : U < 0 ? (Ji("Slider", '"step" should be > 0'), !1) : !0;
    }, q = () => {
      var {
        range: U,
        modelValue: X
      } = e;
      return U && !Ce(X) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !U && Ce(X) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : U && Ce(X) && X.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, E = function(U, X) {
      U === void 0 && (U = e.modelValue), X === void 0 && (X = L(e.step));
      var J = (fe) => {
        var {
          min: ge,
          max: ze
        } = e;
        return fe < L(ge) ? 0 : fe > L(ze) ? M.value / X : (fe - L(ge)) / X;
      };
      e.range && Ce(U) ? (y[Ne.First].percentValue = J(U[0]), y[Ne.First].currentLeft = y[Ne.First].percentValue * $.value, y[Ne.Second].percentValue = J(U[1]), y[Ne.Second].currentLeft = y[Ne.Second].percentValue * $.value) : en(U) && (y[Ne.First].currentLeft = J(U) * $.value);
    }, z = () => {
      var U = e.range ? [0, 0] : 0;
      S(e["onUpdate:modelValue"], U), l();
    }, Z = {
      reset: z,
      validate: v,
      resetValidation: l
    };
    return S(n, Z), ie([() => e.modelValue, () => e.step], (U) => {
      var [X, J] = U;
      !le() || !q() || h.value || E(X, L(J));
    }), ie(C, () => E()), ln(() => {
      !le() || !q() || (C.value = g.value.offsetWidth);
    }), {
      n: es,
      classes: H1,
      Thumbs: Ne,
      sliderEl: g,
      getFillStyle: I,
      isDisabled: P,
      errorMessage: a,
      thumbsProps: y,
      thumbList: T,
      hover: w,
      multiplySizeUnit: _e,
      toNumber: L,
      showLabel: b,
      start: Q,
      move: x,
      end: j,
      click: W
    };
  }
});
xd.render = Y1;
const ma = xd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var bk = ma;
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
function j1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function W1(e) {
  return Hi.includes(e);
}
var ev = {
  type: {
    type: String,
    validator: W1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: j1
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
  loadingType: We(tr, "type"),
  loadingSize: We(tr, "size"),
  loadingRadius: We(tr, "radius"),
  loadingColor: vi({}, We(tr, "color"), {
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
  onOpen: F(),
  // 打开动画结束时的回调
  onOpened: F(),
  // 关闭时的回调函数
  onClose: F(),
  // 关闭动画结束时的回调
  onClosed: F(),
  "onUpdate:show": F(),
  _update: {
    type: String
  }
}, {
  n: G1,
  classes: q1
} = re("snackbar"), X1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function K1(e, n) {
  var r = te("var-icon"), a = te("var-loading");
  return we((p(), O(
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
        [Y(e.$slots, "default", {}, () => [be(
          ae(e.content),
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
        [e.iconName ? (p(), he(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : ne("v-if", !0), e.type === "loading" ? (p(), he(
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
        )) : ne("v-if", !0), Y(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[yr, e.show]]);
}
var nv = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Vn,
    VarIcon: Te
  },
  props: ev,
  setup(e) {
    var n = B(null), {
      zIndex: r
    } = Ct(() => e.show, 1);
    ao(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? X1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && S(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (l) => {
      l ? (S(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), S(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(n.value), o();
    }), ln(() => {
      e.show && (S(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Hi,
      n: G1,
      classes: q1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
nv.render = K1;
const rv = nv;
var {
  n: Z1
} = re("snackbar");
function J1(e, n) {
  var r = te("var-snackbar-core");
  return p(), he(
    Na,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [_(
      De,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ue(() => [_(
          r,
          Ve(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ue(() => [Y(e.$slots, "action")]),
            default: ue(() => [Y(e.$slots, "default", {}, () => [be(
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
var av = ee({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: rv
  },
  props: ev,
  setup() {
    var {
      disabled: e
    } = ro();
    return {
      n: Z1,
      disabled: e
    };
  }
});
av.render = J1;
const pa = av;
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ht.apply(this, arguments);
}
function Q1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var Hi = ["loading", "success", "warning", "info", "error"], ns = 0, fi = !1, tv, Qa = !1, ov = {
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
}, Cn = Ie([]), Fi = ov, _1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, x1 = {
  setup() {
    return () => {
      var e = Cn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Qa && (a.position = "top");
        var l = Qa ? "relative" : "absolute", i = ht({
          position: l
        }, ow(a.position));
        return _(rv, Ve(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return _(Av, Ve(_1, {
        style: {
          zIndex: fn.zIndex
        },
        onAfterEnter: ew,
        onAfterLeave: nw
      }), Q1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Zn = function(e) {
  var n = aw(e), r = Ie(ht({}, Fi, n));
  r.show = !0, fi || (fi = !0, tv = nt(x1).unmountInstance);
  var {
    length: a
  } = Cn, t = {
    id: ns++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Qa)
    rw(t);
  else {
    var o = "update-" + ns;
    tw(r, o);
  }
  return {
    clear() {
      !Qa && Cn.length ? Cn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Hi.forEach((e) => {
  Zn[e] = (n) => (hi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Zn(n));
});
Zn.install = function(e) {
  e.component(pa.name, pa);
};
Zn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Qa && (Cn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Qa = e);
};
Zn.clear = function() {
  Cn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Zn.setDefaultOptions = function(e) {
  Fi = e;
};
Zn.resetDefaultOptions = function() {
  Fi = ov;
};
Zn.Component = pa;
function ew(e) {
  var n = e.getAttribute("data-id"), r = Cn.find((a) => a.id === L(n));
  r && S(r.reactiveSnackOptions.onOpened);
}
function nw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = Cn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, S(r.reactiveSnackOptions.onClosed));
  var a = Cn.every((t) => t.animationEnd);
  a && (S(tv), Cn = Ie([]), fi = !1);
}
function rw(e) {
  Cn.push(e);
}
function aw(e) {
  return e === void 0 && (e = {}), Re(e) ? {
    content: e
  } : e;
}
function tw(e, n) {
  var [r] = Cn;
  r.reactiveSnackOptions = ht({}, r.reactiveSnackOptions, e), r._update = n;
}
function ow(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
pa.install = function(e) {
  e.component(pa.name, pa);
};
var wk = pa;
const ci = Zn;
var iv = (e) => ["mini", "small", "normal", "large"].includes(e), iw = (e) => iv(e) || Ce(e) || en(e) || Re(e), lw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), sw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), uw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: iw
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
    validator: lw
  },
  align: {
    type: String,
    validator: sw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function vn(e) {
  return "calc(" + e + " / 2)";
}
function dw(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = vn(e) + " " + n + " " + vn(e) + " 0" : i = vn(e) + " 0" : t === "space-around" ? i = vn(e) + " " + vn(n) : t === "space-between" && (o === 0 ? i = vn(e) + " " + vn(n) + " " + vn(e) + " 0" : o === l ? i = vn(e) + " 0 " + vn(e) + " " + vn(n) : i = vn(e) + " " + vn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: So,
  classes: vw
} = re("space");
const ha = ee({
  name: "VarSpace",
  props: uw,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Ce(t) ? t.map(me) : [me(t), me(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = S(r.default)) != null ? t : [], f = iv(d), [m, g] = a(d, f);
      v = ks(v);
      var C = v.length - 1, h = v.map((y, M) => {
        var $ = dw(m, g, {
          direction: u,
          justify: l,
          index: M,
          lastIndex: C
        });
        return _("div", {
          style: {
            margin: $
          }
        }, [y]);
      });
      return _("div", {
        class: vw(So(), So("$--box"), [o, So("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Ht(l),
          alignItems: Ht(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [h]);
    };
  }
});
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Ck = ha, fw = {
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
}, lv = Symbol("STEPS_BIND_STEP_KEY");
function cw() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(lv);
  return {
    length: n,
    step: r,
    bindStep: e
  };
}
function mw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(lv);
  return r || Sn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: pw,
  classes: hw
} = re("step"), gw = {
  key: 3
};
function yw(e, n) {
  var r = te("var-icon");
  return p(), O(
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
          [e.isActive ? (p(), he(
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
          )) : e.isCurrent && e.currentIcon ? (p(), he(
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
          )) : e.inactiveIcon ? (p(), he(
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
          )) : (p(), O(
            "span",
            gw,
            ae(e.index + 1),
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
          [Y(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? ne("v-if", !0) : (p(), O(
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
var sv = ee({
  name: "VarStep",
  components: {
    VarIcon: Te
  },
  props: fw,
  setup() {
    var e = B(null), n = B(""), r = B(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = mw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = R(() => l.value === a.value), m = R(() => a.value !== -1 && l.value > a.value), g = {
      index: a
    }, C = () => v(a.value), h = (y) => {
      d.value === "horizontal" && (e.value = y);
    };
    return o(g), ie(i, (y) => {
      if (r.value = y - 1 === a.value, e.value) {
        var M = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + M + "px";
      }
    }), {
      n: pw,
      classes: hw,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: C,
      getRef: h
    };
  }
});
sv.render = yw;
const ga = sv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Sk = ga;
function bw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var ww = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: bw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: F()
}, {
  n: Cw
} = re("steps");
function Sw(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      style: G({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var uv = ee({
  name: "VarSteps",
  props: ww,
  setup(e) {
    var n = R(() => e.active), r = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      length: o,
      bindStep: l
    } = cw(), i = (u) => {
      S(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: Cw
    };
  }
});
uv.render = Sw;
const ya = uv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var kk = ya, kw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: $w
} = re("style-provider"), Tw = ee({
  name: "VarStyleProvider",
  props: kw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => us(e.tag, {
      class: $w(),
      style: ws(e.styleVars)
    }, S(r.default));
  }
});
const ba = Tw;
var ko = [];
function gt(e) {
  ko.forEach((r) => document.documentElement.style.removeProperty(r)), ko.length = 0;
  var n = ws(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), ko.push(a);
  });
}
gt.Component = ba;
ba.install = function(e) {
  e.component(ba.name, ba);
};
gt.install = function(e) {
  e.component(ba.name, ba);
};
var $k = ba, Pw = {
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
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Ow,
  classes: Vw
} = re("switch");
function Mw(e, n) {
  var r = te("var-loading"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Me("ripple"), l = Me("hover");
  return we((p(), O(
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
      ), we((p(), O(
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
          [e.loading ? (p(), he(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : ne("v-if", !0)],
          6
          /* CLASS, STYLE */
        ), _(
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
    ), _(
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
var dv = ee({
  name: "VarSwitch",
  components: {
    VarLoading: Vn,
    VarFormDetails: qe,
    VarHoverOverlay: tn
  },
  directives: {
    Ripple: Ue,
    Hover: Nn
  },
  props: Pw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = $n(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = kn(), {
      hovering: i,
      handleHovering: s
    } = Cr(), u = () => o(e.rules, e.modelValue), d = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = R(() => {
      var {
        size: y,
        modelValue: M,
        color: $,
        closeColor: T,
        loadingColor: I,
        activeValue: P
      } = e;
      return {
        handle: {
          width: _e(y),
          height: _e(y),
          backgroundColor: M === P ? $ : T,
          color: I
        },
        ripple: {
          left: M === P ? _e(y, 0.5) : "-" + _e(y, 0.5),
          color: M === P ? $ : T || "#999",
          width: _e(y, 2),
          height: _e(y, 2)
        },
        track: {
          height: _e(y, 0.72),
          width: _e(y, 1.9),
          borderRadius: _e(y, 2 / 3),
          filter: M === P || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: M === P ? $ : T
        },
        switch: {
          height: _e(y, 1.2),
          width: _e(y, 2)
        }
      };
    }), f = R(() => {
      var {
        size: y = "5.333vw"
      } = e;
      return _e(y, 0.4);
    }), m = (y) => {
      var {
        onClick: M,
        onChange: $,
        disabled: T,
        loading: I,
        readonly: P,
        modelValue: D,
        activeValue: b,
        inactiveValue: V,
        "onUpdate:modelValue": N
      } = e;
      if (S(M, y), !(T || I || P || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var w = D === b ? V : b;
        S($, w), S(N, w), d();
      }
    }, g = (y) => {
      e.disabled || r != null && r.disabled.value || s(y);
    }, C = () => {
      S(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, h = {
      reset: C,
      validate: u,
      resetValidation: l
    };
    return S(n, h), {
      n: Ow,
      classes: Vw,
      switchActive: m,
      hovering: i,
      hover: g,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
dv.render = Mw;
const wa = dv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Tk = wa, Bw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: F()
}, vv = Symbol("TABS_BIND_TAB_KEY");
function Ew() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(vv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Iw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(vv);
  return n || Sn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Nt,
  classes: Nw
} = re("tab");
function Dw(e, n) {
  var r = Me("ripple");
  return we((p(), O(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var fv = ee({
  name: "VarTab",
  directives: {
    Ripple: Ue
  },
  props: Bw,
  setup(e) {
    var n = B(null), r = R(() => e.name), a = R(() => e.disabled), t = R(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = Iw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: g
    } = l, C = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(C);
    var h = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), y = () => e.disabled ? f.value : h() ? d.value : v.value, M = () => e.disabled ? Nt("$-tab--disabled") : h() ? Nt("$-tab--active") : Nt("$-tab--inactive"), $ = (T) => {
      var {
        disabled: I,
        name: P,
        onClick: D
      } = e;
      I || (S(D, P ?? o.value, T), s(C));
    };
    return ie(() => e.name, g), ie(() => e.disabled, g), {
      n: Nt,
      classes: Nw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: y,
      computeColorClass: M,
      handleClick: $
    };
  }
});
fv.render = Dw;
const Ca = fv;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var Pk = Ca, cv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Aw() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(cv);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function zw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(cv);
  return n || Sn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Lw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Rw,
  classes: Uw
} = re("tab-item");
function Hw(e, n) {
  var r = te("var-swipe-item");
  return p(), he(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ue(() => [e.initSlot ? Y(e.$slots, "default", {
        key: 0
      }) : ne("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var mv = ee({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Wn
  },
  props: Lw,
  setup(e) {
    var n = B(!1), r = B(!1), a = R(() => e.name), {
      index: t,
      bindTabsItems: o
    } = zw(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: Rw,
      classes: Uw,
      current: n,
      initSlot: r
    };
  }
});
mv.render = Hw;
const Sa = mv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Ok = Sa, Fw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: Yw,
  classes: jw
} = re("table");
function Ww(e, n) {
  return p(), O(
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
        [Y(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [Y(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ne("v-if", !0)],
    2
    /* CLASS */
  );
}
var pv = ee({
  name: "VarTable",
  props: Fw,
  setup() {
    return {
      toSizeUnit: me,
      n: Yw,
      classes: jw,
      formatElevation: dn
    };
  }
});
pv.render = Ww;
const ka = pv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Vk = ka;
function rs(e) {
  return ["horizontal", "vertical"].includes(e);
}
function Gw(e) {
  return ["auto", "always"].includes(e);
}
function qw(e) {
  return ["normal", "reverse"].includes(e);
}
var Xw = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: rs
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: rs
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
    validator: Gw
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: qw
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: We(Rt, "cssMode"),
  stickyZIndex: We(Rt, "zIndex"),
  offsetTop: We(Rt, "offsetTop"),
  onClick: F(),
  onChange: F(),
  "onUpdate:active": F()
};
function as(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ts(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        as(o, a, t, l, i, "next", s);
      }
      function i(s) {
        as(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Kw,
  classes: Zw
} = re("tabs");
function Jw(e, n) {
  return p(), he(
    xa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ue(() => [A(
        "div",
        Ve({
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
          [Y(e.$slots, "default"), A(
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
var hv = ee({
  name: "VarTabs",
  components: {
    VarSticky: Gn
  },
  inheritAttrs: !1,
  props: Xw,
  setup(e) {
    var n = B("0px"), r = B("0px"), a = B("0px"), t = B("0px"), o = B(!1), l = B(null), i = R(() => e.active), s = R(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = R(() => e.activeColor), d = R(() => e.inactiveColor), v = R(() => e.disabledColor), f = R(() => e.itemDirection), m = B(null), {
      tabList: g,
      bindTabList: C,
      length: h
    } = Ew(), y = (w) => {
      var k, H = (k = w.name.value) != null ? k : w.index.value, {
        active: Q,
        onChange: x,
        onClick: j
      } = e;
      S(e["onUpdate:active"], H), S(j, H), H !== Q && S(x, H);
    }, M = () => g.find((w) => {
      var {
        name: k
      } = w;
      return e.active === k.value;
    }), $ = (w) => g.find((k) => {
      var {
        index: H
      } = k;
      return (w ?? e.active) === H.value;
    }), T = () => {
      if (h.value !== 0) {
        var {
          active: w
        } = e;
        if (en(w)) {
          var k = w > h.value - 1 ? h.value - 1 : 0;
          return S(e["onUpdate:active"], k), $(k);
        }
      }
    }, I = () => {
      o.value = e.scrollable === "always" || g.length >= 5;
    }, P = (w) => {
      var {
        element: k
      } = w, H = k.value;
      H && (e.layoutDirection === "horizontal" ? (n.value = H.offsetWidth + "px", a.value = H.offsetLeft + "px") : (r.value = H.offsetHeight + "px", t.value = H.offsetTop + "px"));
    }, D = (w) => {
      var {
        element: k
      } = w;
      if (o.value) {
        var H = l.value, Q = k.value;
        if (e.layoutDirection === "horizontal") {
          var x = Q.offsetLeft + Q.offsetWidth / 2 - H.offsetWidth / 2;
          vt(H, {
            left: x,
            animation: To
          });
        } else {
          var j = Q.offsetTop + Q.offsetHeight / 2 - H.offsetHeight / 2;
          vt(H, {
            top: j,
            animation: To
          });
        }
      }
    }, b = () => {
      var w = M() || $() || T();
      !w || w.disabled.value || (I(), P(w), D(w));
    }, V = /* @__PURE__ */ function() {
      var w = ts(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), N = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: b,
      onTabClick: y
    };
    return C(N), ie(() => h.value, /* @__PURE__ */ ts(function* () {
      yield In(), b();
    })), ie(() => e.active, b), ie(() => e.scrollable, b), wr(window, "resize", b), $r(b), {
      stickyComponent: m,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: De,
      toSizeUnit: me,
      n: Kw,
      classes: Zw,
      resize: b,
      resizeSticky: V,
      formatElevation: dn
    };
  }
});
hv.render = Jw;
const $a = hv;
$a.install = function(e) {
  e.component($a.name, $a);
};
var Mk = $a, Qw = {
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
  "onUpdate:active": F()
};
function os(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function _w(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        os(o, a, t, l, i, "next", s);
      }
      function i(s) {
        os(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: xw
} = re("tabs-items");
function eC(e, n) {
  var r = te("var-swipe");
  return p(), he(
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
      default: ue(() => [Y(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var gv = ee({
  name: "VarTabsItems",
  components: {
    VarSwipe: jn
  },
  props: Qw,
  setup(e) {
    var n = B(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Aw(), o = (f) => r.find((m) => {
      var {
        name: g
      } = m;
      return f === g.value;
    }), l = (f) => r.find((m) => {
      var {
        index: g
      } = m;
      return f === g.value;
    }), i = (f) => o(f) || l(f), s = (f) => {
      var m, g = i(f);
      g && (r.forEach((C) => {
        var {
          setCurrent: h
        } = C;
        return h(!1);
      }), g.setCurrent(!0), (m = n.value) == null || m.to(g.index.value));
    }, u = (f) => {
      var m, g = r.find((h) => {
        var {
          index: y
        } = h;
        return y.value === f;
      }), C = (m = g.name.value) != null ? m : g.index.value;
      S(e["onUpdate:active"], C);
    }, d = () => n.value, v = {};
    return a(v), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ _w(function* () {
      yield In(), s(e.active);
    })), {
      swipe: n,
      n: xw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
gv.render = eC;
const Ta = gv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Bk = Ta;
const nC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, rC = {
  "--badge-default-color": "#555"
}, aC = {
  "--button-default-color": "#303030"
}, tC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, oC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, iC = {
  "--checkbox-unchecked-color": "#fff"
}, lC = {
  "--chip-default-color": "#555"
}, sC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, uC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, dC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, vC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, fC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, cC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, mC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, pC = {
  "--popup-content-background-color": "#1e1e1e"
}, hC = {
  "--pull-refresh-background": "#303030"
}, gC = {
  "--radio-unchecked-color": "#fff"
}, yC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, bC = {
  "--select-scroller-background": "#303030"
}, wC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, CC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, SC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, kC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, $C = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, TC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, PC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, OC = {
  "--tabs-background": "#1e1e1e"
}, VC = {
  "--app-bar-color": "#272727"
}, MC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, BC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, EC = {
  "--menu-background-color": "#272727"
}, IC = {
  "--breadcrumb-inactive-color": "#aaa"
}, NC = {
  "--paper-background": "#303030"
}, DC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
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
const AC = mi({
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
}, aC, oC, tC, TC, uC, wC, OC, kC, pC, dC, nC, lC, rC, PC, sC, hC, SC, CC, cC, $C, fC, bC, gC, iC, vC, mC, VC, MC, BC, EC, yC, IC, NC, DC);
var zC = {
  dark: AC
}, Ek = null;
const pi = zC;
var gn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], xe = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], is = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function LC(e) {
  return ["ampm", "24hr"].includes(e);
}
var RC = {
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
    validator: LC
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
  "onUpdate:modelValue": F(),
  onChange: F()
}, yv = (e, n) => e === "24hr" || n === "am", Yi = (e, n, r) => {
  var a = gn.findIndex((o) => L(o) === L(r)), t = yv(e, n) ? r : xe[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, an = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, bv = (e) => {
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
  } = Yi(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: g,
      minute: C
    } = an(i);
    f = g === v && a > C;
  }
  if (!i && s) {
    var {
      hour: h,
      minute: y
    } = an(s);
    f = h === v && a < y;
  }
  if (i && s) {
    var {
      hour: M,
      minute: $
    } = an(i), {
      hour: T,
      minute: I
    } = an(s);
    f = T === v && a < I || M === v && a > $;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, wv = (e) => {
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
  } = Yi(t, o, l), m = !1, g = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: C,
      minute: h,
      second: y
    } = an(s);
    m = C === f && h < i || h === i && a > y;
  }
  if (!s && u) {
    var {
      hour: M,
      minute: $,
      second: T
    } = an(u);
    m = M === f && $ > i || $ === i && a > T;
  }
  if (s && u) {
    var {
      hour: I,
      minute: P,
      second: D
    } = an(s), {
      hour: b,
      minute: V,
      second: N
    } = an(u);
    m = I === f && P < i || b === f && V > i || I === f && P === i && a > D || b === f && V === i && a < N;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || g;
}, {
  n: UC,
  classes: HC
} = re("time-picker");
function FC(e, n) {
  return p(), O(
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
    ), (p(!0), O(
      $e,
      null,
      Ae(e.timeScales, (r, a) => (p(), O(
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
    )), e.format === "24hr" && e.type === "hour" ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), O(
        $e,
        null,
        Ae(e.hours24, (r, a) => (p(), O(
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
    )) : ne("v-if", !0)],
    2
    /* CLASS */
  );
}
var Cv = ee({
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
        var h = e.rad / 30;
        return h >= 0 ? h : h + 12;
      }
    }), s = R(() => e.type === "hour" ? gn : is), u = (h, y) => {
      var M;
      h = (M = h) != null ? M : e.type === "minute" ? e.time.minute : e.time.second;
      var $ = e.type === "minute" ? bv : wv, T = {
        time: L(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return y && e.type === "minute" && Reflect.deleteProperty(T, "minute"), $(T);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var h = e.isInner ? xe[i.value] : s.value[i.value];
      return s.value === is ? u() ? "#bdbdbd" : e.color : f(h) ? "#bdbdbd" : e.color;
    }, v = (h, y) => y ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), f = (h) => {
      if (e.type === "hour") {
        if (yv(e.format, e.ampm))
          return t.value.includes(h);
        var y = gn.findIndex((M) => M === h);
        return o.value.includes(y);
      }
      return u(h, !0);
    }, m = (h, y, M) => {
      var $ = 2 * Math.PI / 12 * h - Math.PI / 2, T = 50 * (1 + Math.cos($)), I = 50 * (1 + Math.sin($)), P = () => v(h, M) ? f(y) ? {
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
        color: b
      } = P();
      return {
        left: T + "%",
        top: I + "%",
        backgroundColor: D,
        color: b
      };
    }, g = () => {
      var {
        width: h,
        height: y
      } = a.value.getBoundingClientRect();
      return {
        width: h,
        height: y
      };
    }, C = () => {
      if (i.value !== void 0) {
        var h = e.ampm === "am" ? gn : xe;
        return Va(h[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (h, y) => {
      var [M, $] = h, [T, I] = y, P = M === T && $ === I;
      if (!(P || e.type !== "hour" || i.value === void 0)) {
        var D = $ ? xe[i.value] : C(), b = e.useSeconds ? ":" + e.time.second : "", V = D + ":" + e.time.minute + b;
        e.preventNextUpdate || r("update", V), r("change-prevent-update");
      }
    }), ie(() => e.rad, (h, y) => {
      if (!(e.type === "hour" || h === void 0 || y === void 0)) {
        var M = h / 6 >= 0 ? h / 6 : h / 6 + 60, $ = y / 6 >= 0 ? y / 6 : y / 6 + 60;
        if (M !== $) {
          var T, {
            hourStr: I
          } = Yi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var P = oe().minute(M).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            T = I + ":" + P + D;
          }
          if (e.type === "second") {
            var b = oe().second(M).format("ss"), V = e.useSeconds ? ":" + b : "";
            T = I + ":" + e.time.minute + V;
          }
          r("update", T);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (h) => {
      var [y, M, $] = h;
      if (t.value = [], y && !M) {
        var {
          hour: T
        } = an(y), I = gn.filter((W) => L(W) > T), P = xe.filter((W) => L(W) > T);
        t.value = [...I, ...P];
      }
      if (!y && M) {
        var {
          hour: D
        } = an(M), b = gn.filter((W) => L(W) < D), V = xe.filter((W) => L(W) < D);
        t.value = [...b, ...V];
      }
      if (y && M) {
        var {
          hour: N
        } = an(y), {
          hour: w
        } = an(M), k = gn.filter((W) => L(W) < w || L(W) > N), H = xe.filter((W) => L(W) < w || L(W) > N);
        t.value = [...k, ...H];
      }
      if ($ != null && $.hours) {
        var {
          hours: Q
        } = $, x = gn.filter((W) => !Q(L(W))), j = xe.filter((W) => !Q(L(W)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...x, ...j])];
      }
      o.value = t.value.map((W) => xe.findIndex((le) => W === le)).filter((W) => W >= 0);
    }, {
      immediate: !0
    }), {
      n: UC,
      classes: HC,
      hours24: xe,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: g,
      getStyle: m,
      activeItemIndex: i
    };
  }
});
Cv.render = FC;
const YC = Cv;
var {
  n: jC,
  classes: WC
} = re("time-picker"), GC = (e) => (Da(""), e = e(), Aa(), e), qC = /* @__PURE__ */ GC(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), XC = {
  key: 0
};
function KC(e, n) {
  var r = te("clock");
  return p(), O(
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
          ae(e.time.hour),
          3
          /* TEXT, CLASS */
        ), qC, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ae(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), O("span", XC, ":")) : ne("v-if", !0), e.useSeconds ? (p(), O(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ae(e.time.second),
          3
          /* TEXT, CLASS */
        )) : ne("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), O(
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
      )) : ne("v-if", !0)],
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
        [_(
          De,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ue(() => [(p(), he(
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
var Sv = ee({
  name: "VarTimePicker",
  components: {
    Clock: YC
  },
  props: RC,
  setup(e) {
    var n = B(null), r = B(null), a = B(null), t = B(!1), o = B(!1), l = B(!1), i = B(!1), s = B(!1), u = B(void 0), d = B(0), v = B(0), f = B("hour"), m = B("am"), g = B(!1), C = B(!1), h = B({
      hour: "00",
      minute: "00",
      second: "00"
    }), y = Ie({
      x: 0,
      y: 0
    }), M = Ie({
      x: [],
      y: []
    }), $ = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), T = (E) => {
      S(e["onUpdate:modelValue"], E), S(e.onChange, E);
    }, I = (E) => E * 57.29577951308232, P = (E) => {
      i.value = !1, C.value = !1, f.value = E;
    }, D = (E) => {
      var {
        disableHour: z
      } = a.value, Z = gn.findIndex((J) => L(J) === L(h.value.hour)), U = E === "am" ? gn : xe, X = [...U.slice(Z), ...U.slice(0, Z)];
      return X.find((J, fe) => (o.value = fe !== 0, !z.includes(J)));
    }, b = (E) => {
      if (!e.readonly) {
        m.value = E;
        var z = D(E);
        if (z) {
          var Z = e.useSeconds ? ":" + h.value.second : "", U = Va(z, 2, "0") + ":" + h.value.minute + Z;
          T(U);
        }
      }
    }, V = (E, z) => {
      var Z = E >= M.x[0] && E <= M.x[1], U = z >= M.y[0] && z <= M.y[1];
      return Z && U;
    }, N = (E) => {
      var z = e.format === "24hr" ? "HH" : "hh", {
        hour: Z,
        minute: U,
        second: X
      } = an(E);
      return {
        hour: oe().hour(Z).format(z),
        minute: oe().minute(U).format("mm"),
        second: oe().second(X).format("ss")
      };
    }, w = (E) => {
      var z = E / 30;
      return z >= 0 ? z : z + 12;
    }, k = () => {
      var {
        width: E,
        height: z
      } = a.value.getSize(), Z = y.x - E / 2 - 8, U = y.x + E / 2 + 8, X = y.y - z / 2 - 8, J = y.y + z / 2 + 8;
      return {
        rangeXMin: Z,
        rangeXMax: U,
        rangeYMin: X,
        rangeYMax: J
      };
    }, H = (E, z, Z) => {
      var {
        disableHour: U
      } = a.value;
      l.value = V(E, z);
      var X = Math.round(Z / 30) * 30 + 90, J = w(X), fe = t.value ? gn[J] : xe[J];
      if (U.includes(fe) || (t.value = e.format === "24hr" ? V(E, z) : !1), t.value === l.value) {
        var ge = t.value || m.value === "pm" ? xe[J] : gn[J];
        g.value = U.includes(ge), !g.value && (u.value = X, i.value = !0);
      }
    }, Q = (E) => {
      var {
        disableHour: z
      } = a.value, Z = Math.round(E / 6) * 6 + 90, U = Z / 6 >= 0 ? Z / 6 : Z / 6 + 60, X = {
        time: U,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        max: e.max,
        min: e.min,
        disableHour: z,
        allowedTime: e.allowedTime
      };
      C.value = bv(X), !C.value && (d.value = Z, s.value = !0);
    }, x = (E) => {
      var {
        disableHour: z
      } = a.value, Z = Math.round(E / 6) * 6 + 90, U = Z / 6 >= 0 ? Z / 6 : Z / 6 + 60, X = {
        time: U,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        minute: L(h.value.minute),
        max: e.max,
        min: e.min,
        disableHour: z,
        allowedTime: e.allowedTime
      };
      wv(X) || (v.value = Z);
    }, j = () => {
      var {
        left: E,
        top: z,
        width: Z,
        height: U
      } = n.value.getBoundingClientRect();
      if (y.x = E + Z / 2, y.y = z + U / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: X,
          rangeXMax: J,
          rangeYMin: fe,
          rangeYMax: ge
        } = k();
        M.x = [X, J], M.y = [fe, ge];
      }
    }, W = (E) => {
      if (E.preventDefault(), !e.readonly) {
        j();
        var {
          clientX: z,
          clientY: Z
        } = E.touches[0], U = z - y.x, X = Z - y.y, J = Math.round(I(Math.atan2(X, U)));
        f.value === "hour" ? H(z, Z, J) : f.value === "minute" ? Q(J) : x(J);
      }
    }, le = () => {
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
    return ie(() => e.modelValue, (E) => {
      if (E) {
        var {
          hour: z,
          minute: Z,
          second: U
        } = an(E), X = oe().hour(z).format("hh"), J = oe().hour(z).format("HH"), fe = oe().minute(Z).format("mm"), ge = oe().second(U).format("ss");
        u.value = (X === "12" ? 0 : L(X)) * 30, d.value = L(fe) * 6, v.value = L(ge) * 6, h.value = N(E), e.format !== "24hr" && (m.value = Va("" + z, 2, "0") === J && xe.includes(J) ? "pm" : "am"), t.value = e.format === "24hr" && xe.includes(J);
      }
    }, {
      immediate: !0
    }), {
      n: jC,
      classes: WC,
      getRad: $,
      time: h,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: W,
      checkPanel: P,
      checkAmpm: b,
      end: le,
      update: T,
      changePreventUpdate: q,
      formatElevation: dn
    };
  }
});
Sv.render = KC;
const Pa = Sv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Ik = Pa, ZC = {
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
  onBeforeRead: F(),
  onAfterRead: F(),
  onBeforeRemove: F(),
  onRemove: F(),
  onOversize: F(),
  "onUpdate:modelValue": F()
};
function ls(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ss(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ls(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ls(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: JC,
  classes: QC
} = re("uploader"), _C = 0, xC = ["onClick"], eS = ["onClick"], nS = ["src", "alt"], rS = ["multiple", "accept", "capture", "disabled"], aS = ["src"];
function tS(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = te("var-popup"), l = Me("ripple"), i = Me("hover");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), O(
        $e,
        null,
        Ae(e.files, (s) => we((p(), O(
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
            ae(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (p(), O(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: cn((u) => e.handleRemove(s), ["stop"])
            },
            [_(
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
            eS
          )) : ne("v-if", !0), s.cover ? (p(), O(
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
            nS
          )) : ne("v-if", !0), A(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          xC
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? we((p(), O(
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
          rS
        ), Y(e.$slots, "default", {}, () => [_(
          r,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        ), _(
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
      }], [i, e.handleHovering, "desktop"]]) : ne("v-if", !0)],
      2
      /* CLASS */
    ), _(
      t,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), _(
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
        default: ue(() => {
          var s, u;
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), O(
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
            aS
          )) : ne("v-if", !0)];
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
var kv = ee({
  name: "VarUploader",
  directives: {
    Ripple: Ue,
    Hover: Nn
  },
  components: {
    VarIcon: Te,
    VarPopup: bn,
    VarFormDetails: qe,
    VarHoverOverlay: tn
  },
  props: ZC,
  setup(e) {
    var n = B(null), r = B(!1), a = B(null), t = R(() => {
      var {
        maxlength: W,
        modelValue: {
          length: le
        }
      } = e;
      return en(W) ? le + " / " + W : "";
    }), {
      form: o,
      bindForm: l
    } = $n(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = kn(), {
      hovering: v,
      handleHovering: f
    } = Cr(), m = R(() => {
      var {
        modelValue: W,
        hideList: le
      } = e;
      return le ? [] : W;
    }), g = (W) => {
      var {
        disabled: le,
        readonly: q,
        previewed: E
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || le || q || !E)) {
        var {
          url: z
        } = W;
        if (Re(z) && Xi(z)) {
          En(z);
          return;
        }
        Re(z) && Ki(z) && (a.value = W, r.value = !0);
      }
    }, C = (W) => ({
      id: _C++,
      url: "",
      cover: "",
      name: W.name,
      file: W
    }), h = (W) => {
      var le = W.target, {
        files: q
      } = le;
      return Array.from(q);
    }, y = (W) => new Promise((le) => {
      var q = new FileReader();
      q.onload = () => {
        var E = q.result;
        W.file.type.startsWith("image") && (W.cover = E), W.url = E, le(W);
      }, q.readAsDataURL(W.file);
    }), M = (W) => W.map(y), $ = (W) => {
      var {
        onBeforeRead: le
      } = e;
      return W.map((q) => new Promise((E) => {
        le || E({
          valid: !0,
          varFile: q
        });
        var z = S(le, Ie(q));
        z = Ce(z) ? z : [z], Promise.all(z).then((Z) => {
          E({
            valid: !Z.some((U) => !U),
            varFile: q
          });
        });
      }));
    }, T = /* @__PURE__ */ function() {
      var W = ss(function* (le) {
        var {
          maxsize: q,
          maxlength: E,
          modelValue: z,
          onOversize: Z,
          onAfterRead: U,
          readonly: X,
          disabled: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || X)) {
          var fe = (Xe) => Xe.filter((pn) => pn.file.size > L(q) ? (S(Z, Ie(pn)), !1) : !0), ge = (Xe) => {
            var pn = Math.min(Xe.length, L(E) - z.length);
            return Xe.slice(0, pn);
          }, ze = h(le), Ee = ze.map(C);
          Ee = q != null ? fe(Ee) : Ee, Ee = E != null ? ge(Ee) : Ee;
          var mn = yield Promise.all(M(Ee)), za = yield Promise.all($(mn)), zn = za.filter((Xe) => {
            var {
              valid: pn
            } = Xe;
            return pn;
          }).map((Xe) => {
            var {
              varFile: pn
            } = Xe;
            return pn;
          });
          S(e["onUpdate:modelValue"], [...z, ...zn]), le.target.value = "", zn.forEach((Xe) => S(U, Ie(Xe)));
        }
      });
      return function(q) {
        return W.apply(this, arguments);
      };
    }(), I = /* @__PURE__ */ function() {
      var W = ss(function* (le) {
        var {
          disabled: q,
          readonly: E,
          modelValue: z,
          onBeforeRemove: Z,
          onRemove: U
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || q || E)) {
          if (Z) {
            var X = S(Z, Ie(le));
            if (X = Ce(X) ? X : [X], (yield Promise.all(X)).some((fe) => !fe))
              return;
          }
          var J = z.filter((fe) => fe !== le);
          S(U, Ie(le)), k("onRemove"), S(e["onUpdate:modelValue"], J);
        }
      });
      return function(q) {
        return W.apply(this, arguments);
      };
    }(), P = () => e.modelValue.filter((W) => W.state === "success"), D = () => e.modelValue.filter((W) => W.state === "error"), b = () => e.modelValue.filter((W) => W.state === "loading"), V = () => {
      n.value.click();
    }, N = () => {
      a.value = null, r.value = !1, En.close();
    }, w = {
      getSuccess: P,
      getError: D,
      getLoading: b
    }, k = (W) => {
      Be(() => {
        var {
          validateTrigger: le,
          rules: q,
          modelValue: E
        } = e;
        s(le, W, q, E, w);
      });
    }, H = !1, Q = () => u(e.rules, e.modelValue, w), x = () => {
      H = !0, S(e["onUpdate:modelValue"], []), d();
    }, j = {
      validate: Q,
      resetValidation: d,
      reset: x
    };
    return S(l, j), ie(() => e.modelValue, () => {
      !H && k("onChange"), H = !1;
    }, {
      deep: !0
    }), {
      n: JC,
      classes: QC,
      formatElevation: dn,
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
      isHTMLSupportVideo: Ki,
      isHTMLSupportImage: Xi,
      preview: g,
      handleChange: T,
      handleRemove: I,
      getSuccess: P,
      getError: D,
      getLoading: b,
      validate: Q,
      resetValidation: d,
      reset: x,
      chooseFile: V,
      closePreview: N
    };
  }
});
kv.render = tS;
const Oa = kv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Nk = Oa;
const oS = "2.9.6";
function iS(e) {
  Xn.install && e.use(Xn), Mr.install && e.use(Mr), Br.install && e.use(Br), Er.install && e.use(Er), Ir.install && e.use(Ir), sr.install && e.use(sr), Nr.install && e.use(Nr), Dr.install && e.use(Dr), Ar.install && e.use(Ar), zr.install && e.use(zr), Ze.install && e.use(Ze), Lr.install && e.use(Lr), Rr.install && e.use(Rr), ur.install && e.use(ur), dr.install && e.use(dr), Ur.install && e.use(Ur), vr.install && e.use(vr), Hr.install && e.use(Hr), Fr.install && e.use(Fr), Yr.install && e.use(Yr), fn.install && e.use(fn), jr.install && e.use(jr), Wr.install && e.use(Wr), qr.install && e.use(qr), Kn.install && e.use(Kn), Xr.install && e.use(Xr), Kr.install && e.use(Kr), Zr.install && e.use(Zr), Yn.install && e.use(Yn), qe.install && e.use(qe), Nn.install && e.use(Nn), tn.install && e.use(tn), Te.install && e.use(Te), Jr.install && e.use(Jr), En.install && e.use(En), Qr.install && e.use(Qr), _r.install && e.use(_r), hr.install && e.use(hr), ft.install && e.use(ft), xr.install && e.use(xr), ea.install && e.use(ea), Vn.install && e.use(Vn), si.install && e.use(si), Io.install && e.use(Io), qn.install && e.use(qn), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), Ea.install && e.use(Ea), bn.install && e.use(bn), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), Ue.install && e.use(Ue), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), ci.install && e.use(ci), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), Gn.install && e.use(Gn), gt.install && e.use(gt), jn.install && e.use(jn), Wn.install && e.use(Wn), wa.install && e.use(wa), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), $a.install && e.use($a), Ta.install && e.use(Ta), pi.install && e.use(pi), Pa.install && e.use(Pa), mr.install && e.use(mr), Oa.install && e.use(Oa);
}
const Dk = {
  version: oS,
  install: iS,
  ActionSheet: Xn,
  AppBar: Mr,
  Avatar: Br,
  AvatarGroup: Er,
  BackTop: Ir,
  Badge: sr,
  BottomNavigation: Nr,
  BottomNavigationItem: Dr,
  Breadcrumb: Ar,
  Breadcrumbs: zr,
  Button: Ze,
  ButtonGroup: Lr,
  Card: Rr,
  Cell: ur,
  Checkbox: dr,
  CheckboxGroup: Ur,
  Chip: vr,
  Col: Hr,
  Collapse: Fr,
  CollapseItem: Yr,
  Context: fn,
  Countdown: jr,
  Counter: Wr,
  DatePicker: qr,
  Dialog: Kn,
  Divider: Xr,
  Ellipsis: Kr,
  Fab: Zr,
  Form: Yn,
  FormDetails: qe,
  Hover: Nn,
  HoverOverlay: tn,
  Icon: Te,
  Image: Jr,
  ImagePreview: En,
  IndexAnchor: Qr,
  IndexBar: _r,
  Input: hr,
  Lazy: ft,
  Link: xr,
  List: ea,
  Loading: Vn,
  LoadingBar: si,
  Locale: Io,
  Menu: qn,
  Option: na,
  Overlay: ra,
  Pagination: aa,
  Paper: ta,
  Picker: Ea,
  Popup: bn,
  Progress: oa,
  PullRefresh: ia,
  Radio: la,
  RadioGroup: sa,
  Rate: ua,
  Result: da,
  Ripple: Ue,
  Row: va,
  Select: fa,
  Skeleton: ca,
  Slider: ma,
  Snackbar: ci,
  Space: ha,
  Step: ga,
  Steps: ya,
  Sticky: Gn,
  StyleProvider: gt,
  Swipe: jn,
  SwipeItem: Wn,
  Switch: wa,
  Tab: Ca,
  TabItem: Sa,
  Table: ka,
  Tabs: $a,
  TabsItems: Ta,
  Themes: pi,
  TimePicker: Pa,
  Tooltip: mr,
  Uploader: Oa
};
export {
  Xn as ActionSheet,
  Mr as AppBar,
  Br as Avatar,
  Er as AvatarGroup,
  Ir as BackTop,
  sr as Badge,
  Nr as BottomNavigation,
  Dr as BottomNavigationItem,
  Ar as Breadcrumb,
  zr as Breadcrumbs,
  Ze as Button,
  Lr as ButtonGroup,
  Rr as Card,
  ur as Cell,
  dr as Checkbox,
  Ur as CheckboxGroup,
  vr as Chip,
  Hr as Col,
  Fr as Collapse,
  Yr as CollapseItem,
  fn as Context,
  jr as Countdown,
  Wr as Counter,
  qr as DatePicker,
  Kn as Dialog,
  Xr as Divider,
  Kr as Ellipsis,
  Zr as Fab,
  Yn as Form,
  qe as FormDetails,
  Nn as Hover,
  tn as HoverOverlay,
  Te as Icon,
  Jr as Image,
  En as ImagePreview,
  Qr as IndexAnchor,
  _r as IndexBar,
  hr as Input,
  ft as Lazy,
  xr as Link,
  ea as List,
  Vn as Loading,
  si as LoadingBar,
  Io as Locale,
  qn as Menu,
  na as Option,
  ra as Overlay,
  Ao as PIXEL,
  aa as Pagination,
  ta as Paper,
  Ea as Picker,
  bn as Popup,
  oa as Progress,
  ia as PullRefresh,
  la as Radio,
  sa as RadioGroup,
  ua as Rate,
  da as Result,
  Ue as Ripple,
  va as Row,
  Hi as SNACKBAR_TYPE,
  fa as Select,
  ca as Skeleton,
  ma as Slider,
  ci as Snackbar,
  ha as Space,
  ga as Step,
  ya as Steps,
  Gn as Sticky,
  gt as StyleProvider,
  jn as Swipe,
  Wn as SwipeItem,
  wa as Switch,
  Ca as Tab,
  Sa as TabItem,
  ka as Table,
  $a as Tabs,
  Ta as TabsItems,
  pi as Themes,
  Pa as TimePicker,
  mr as Tooltip,
  Oa as Uploader,
  cS as _ActionSheetComponent,
  mS as _AppBarComponent,
  hS as _AvatarComponent,
  gS as _AvatarGroupComponent,
  SS as _BackTopComponent,
  kS as _BadgeComponent,
  $S as _BottomNavigationComponent,
  TS as _BottomNavigationItemComponent,
  PS as _BreadcrumbComponent,
  OS as _BreadcrumbsComponent,
  CS as _ButtonComponent,
  VS as _ButtonGroupComponent,
  MS as _CardComponent,
  BS as _CellComponent,
  IS as _CheckboxComponent,
  NS as _CheckboxGroupComponent,
  DS as _ChipComponent,
  AS as _ColComponent,
  zS as _CollapseComponent,
  LS as _CollapseItemComponent,
  sS as _ContextComponent,
  RS as _CountdownComponent,
  US as _CounterComponent,
  HS as _DatePickerComponent,
  FS as _DialogComponent,
  YS as _DividerComponent,
  WS as _EllipsisComponent,
  GS as _FabComponent,
  qS as _FormComponent,
  ES as _FormDetailsComponent,
  wS as _HoverComponent,
  bS as _HoverOverlayComponent,
  vS as _IconComponent,
  XS as _ImageComponent,
  JS as _ImagePreviewComponent,
  _S as _IndexAnchorComponent,
  xS as _IndexBarComponent,
  ek as _InputComponent,
  pS as _LazyComponent,
  nk as _LinkComponent,
  rk as _ListComponent,
  ak as _LoadingBarComponent,
  yS as _LoadingComponent,
  fS as _LocaleComponent,
  tk as _MenuComponent,
  ok as _OptionComponent,
  ik as _OverlayComponent,
  lk as _PaginationComponent,
  sk as _PaperComponent,
  uk as _PickerComponent,
  dS as _PopupComponent,
  dk as _ProgressComponent,
  vk as _PullRefreshComponent,
  fk as _RadioComponent,
  ck as _RadioGroupComponent,
  mk as _RateComponent,
  pk as _ResultComponent,
  uS as _RippleComponent,
  hk as _RowComponent,
  gk as _SelectComponent,
  yk as _SkeletonComponent,
  bk as _SliderComponent,
  wk as _SnackbarComponent,
  Ck as _SpaceComponent,
  Sk as _StepComponent,
  kk as _StepsComponent,
  QS as _StickyComponent,
  $k as _StyleProviderComponent,
  KS as _SwipeComponent,
  ZS as _SwipeItemComponent,
  Tk as _SwitchComponent,
  Pk as _TabComponent,
  Ok as _TabItemComponent,
  Vk as _TableComponent,
  Mk as _TabsComponent,
  Bk as _TabsItemsComponent,
  Ek as _ThemesComponent,
  Ik as _TimePickerComponent,
  jS as _TooltipComponent,
  Nk as _UploaderComponent,
  mf as actionSheetProps,
  Si as add,
  Cf as appBarProps,
  qf as avatarGroupProps,
  Hf as avatarProps,
  kc as backTopProps,
  Mc as badgeProps,
  Uc as bottomNavigationItemProps,
  Nc as bottomNavigationProps,
  Gc as breadcrumbProps,
  Qc as breadcrumbsProps,
  hc as buttonProps,
  sm as cardProps,
  mm as cellProps,
  Em as checkboxGroupProps,
  km as checkboxProps,
  Lm as chipProps,
  jm as colProps,
  xm as collapseItemProps,
  Zm as collapseProps,
  ap as countdownProps,
  xp as counterProps,
  wh as datePickerProps,
  Dk as default,
  Fe as defaultLazyOptions,
  Lh as dialogProps,
  Yh as dividerProps,
  Es as enUS,
  ym as formDetailsProps,
  py as formProps,
  Ms as iconProps,
  zs as imageCache,
  Ly as imagePreviewProps,
  wy as imageProps,
  Ky as indexAnchorProps,
  _y as indexBarProps,
  ub as inputProps,
  iS as install,
  yb as linkProps,
  Sb as listProps,
  Ob as loadingBarProps,
  tr as loadingProps,
  Rb as menuProps,
  Ns as merge,
  Wb as optionProps,
  Kb as overlayProps,
  je as pack,
  Is as packs,
  Jb as paginationProps,
  n0 as paperProps,
  o0 as pickerProps,
  wt as popupProps,
  c0 as progressProps,
  w0 as pullRefreshProps,
  B0 as radioGroupProps,
  k0 as radioProps,
  D0 as rateProps,
  R0 as resultProps,
  $1 as rowProps,
  M1 as selectProps,
  D1 as skeletonProps,
  U1 as sliderProps,
  ev as snackbarProps,
  uw as spaceProps,
  fw as stepProps,
  ww as stepsProps,
  Rt as stickyProps,
  kw as styleProviderProps,
  vd as swipeProps,
  Pw as switchProps,
  Lw as tabItemProps,
  Bw as tabProps,
  Fw as tableProps,
  Qw as tabsItemsProps,
  Xw as tabsProps,
  RC as timePickerProps,
  ey as tooltipProps,
  ZC as uploaderProps,
  ki as use,
  Cr as useHoverOverlay,
  Ci as useLocale,
  oS as version,
  wi as zhCN
};
