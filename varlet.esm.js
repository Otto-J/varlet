import { reactive as Le, onMounted as _t, nextTick as ze, onActivated as Pr, isRef as Vv, watch as te, onBeforeUnmount as bt, onDeactivated as Qn, unref as ot, inject as Mv, getCurrentInstance as Qa, computed as R, provide as Bv, isVNode as wt, Comment as Ev, Fragment as Ve, ref as B, createApp as Iv, h as vs, onBeforeMount as Nv, onUnmounted as _a, defineComponent as Q, createVNode as Z, Teleport as Da, Transition as Ue, withDirectives as ke, vShow as Cr, mergeProps as Ne, openBlock as p, createBlock as ge, resolveDynamicComponent as xa, normalizeClass as c, normalizeStyle as G, resolveComponent as ae, resolveDirective as De, withCtx as ve, createElementVNode as A, renderSlot as F, toDisplayString as re, createElementBlock as O, renderList as Fe, createCommentVNode as _, onUpdated as xt, createTextVNode as Ce, pushScopeId as Aa, popScopeId as za, withModifiers as kn, normalizeProps as Ct, guardReactiveProps as eo, vModelText as Dv, toRefs as Av, withKeys as Gi, toRaw as qi, TransitionGroup as zv } from "vue";
var fs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, uS = Le(fs);
const hn = Le(fs), je = (e) => typeof e == "string", To = (e) => typeof e == "boolean", an = (e) => typeof e == "number", yi = (e) => Object.prototype.toString.call(e) === "[object Object]", Lv = (e) => typeof e == "object" && e !== null, St = (e) => typeof e == "function", Te = (e) => Array.isArray(e), Rv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, ur = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : je(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : To(e) ? Number(e) : e, Ft = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, bi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, kt = () => typeof window < "u", Xi = (e) => [...new Set(e)], cs = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Uv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Hv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
}, Po = (e) => Te(e) ? e : [e];
var Ki = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Zi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Fv = (e) => {
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
      this.has(r) && Ft(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Oo = (e) => e, Ji = (e) => Math.pow(e, 3), ms = (e) => e < 0.5 ? Ji(e * 2) / 2 : 1 - Ji((1 - e) * 2) / 2, no = (e, n) => e ?? n, ps = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Ba = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function $n(e, n) {
  throw Error("Varlet [" + e + "]: " + n);
}
function Qi(e, n) {
  console.warn("Varlet [" + e + "]: " + n);
}
function _i(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Yv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        _i(o, a, t, l, i, "next", s);
      }
      function i(s) {
        _i(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function jv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function xi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function vt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function wi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Wv(e) {
  return Vo.apply(this, arguments);
}
function Vo() {
  return Vo = Yv(function* (e) {
    yield An();
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
  }), Vo.apply(this, arguments);
}
function bo(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Sr(e) {
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
function Gv(e) {
  for (var n = [], r = e; r !== window; )
    r = Sr(r), n.push(r);
  return n;
}
function hs(e, n) {
  if (je(e)) {
    var r = document.querySelector(e);
    return r || $n(n, "target element cannot found"), r;
  }
  if (Lv(e))
    return e;
  $n(n, 'type of prop "target" should be a selector or an element object');
}
function el() {
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
var gs = (e) => je(e) && e.endsWith("rem"), qv = (e) => je(e) && e.endsWith("px") || an(e), Xv = (e) => je(e) && e.endsWith("%"), ys = (e) => je(e) && e.endsWith("vw"), bs = (e) => je(e) && e.endsWith("vh"), ws = (e) => je(e) && e.endsWith("vmin"), Cs = (e) => je(e) && e.endsWith("vmax"), Kv = (e) => je(e) && e.startsWith("calc("), Zv = (e) => je(e) && e.startsWith("var("), Ye = (e) => {
  if (an(e))
    return e;
  if (qv(e))
    return +e.replace("px", "");
  if (ys(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (bs(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (gs(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return ws(e) ? el().vMin : Cs(e) ? el().vMax : je(e) ? L(e) : 0;
}, he = (e) => {
  if (e != null)
    return Xv(e) || ys(e) || bs(e) || gs(e) || Kv(e) || Zv(e) || ws(e) || Cs(e) ? e : Ye(e) + "px";
}, nn = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = he(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function bn(e) {
  var n = ps();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function nl(e) {
  var n = ps();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function ro(e) {
  bn(() => {
    bn(e);
  });
}
function An() {
  return new Promise((e) => {
    bn(() => {
      bn(e);
    });
  });
}
function Jv() {
  return new Promise((e) => {
    bn(e);
  });
}
function ft(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = vt(e), s = wi(e);
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
function Ss(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Uv(a);
    return n[o] = t, n;
  }, {});
}
function Qv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Yt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function tn(e) {
  let n = !1;
  _t(() => {
    e(), ze(() => {
      n = !0;
    });
  }), Pr(() => {
    n && e();
  });
}
function Xn(e, n, r, a = {}) {
  if (!kt())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => St(m) ? m() : ot(m), u = (m) => {
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
  Vv(e) && (v = te(() => e.value, (m, h) => {
    d(h), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return tn(() => {
    u(e);
  }), bt(() => {
    d(e);
  }), Qn(() => {
    d(e);
  }), f;
}
function ks(e, n, r) {
  if (!kt())
    return;
  Xn(document, n, (t) => {
    const o = ot(e);
    o && !o.contains(t.target) && r(t);
  });
}
var _v = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function xv(e) {
  const n = Qa();
  return e in n.provides;
}
function fn(e) {
  if (!xv(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = Mv(e), { childInstances: r, collect: a, clear: t } = n, o = _v(n, ["childInstances", "collect", "clear"]), l = Qa();
  return {
    index: R(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      _t(() => {
        ze().then(() => {
          a(l, u);
        });
      }), bt(() => {
        ze().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function ef(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      wt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function cn(e) {
  const n = Qa(), r = Le([]), a = [], t = R(() => r.length), o = () => {
    const u = ef(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    Ft(r, u), Ft(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Bv(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
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
function Ke(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function nf(e) {
  var n = Iv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function et(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => vs(e, Mo({}, n, r));
    }
  }, {
    unmount: t
  } = nf(a);
  return {
    unmountInstance: t
  };
}
function $s(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== Ev) {
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
    var t = al(function* (o, l, i) {
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
    var t = al(function* (o, l, i, s, u) {
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
function rf(e) {
  Xn(() => window, "hashchange", e), Xn(() => window, "popstate", e);
}
function ao() {
  var e = B(!1);
  return Pr(() => {
    e.value = !1;
  }), Qn(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function x(e) {
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
function Ts(e, n, r) {
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
  return te(() => e[n], () => {
    u.value = s();
  }), te(() => u.value, (d) => {
    l ? l(i, d) : k(e[i], d);
  }), u;
}
function jt() {
  return jt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, jt.apply(this, arguments);
}
var {
  n: Ps
} = x("ripple"), tl = 250;
function af(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function tf(e, n) {
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
function Os(e) {
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
      } = tf(this, e), s = document.createElement("div");
      s.classList.add(Ps()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), af(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Bo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Ps());
    if (r.length) {
      var a = r[r.length - 1], t = tl - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, tl);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Vs() {
  if (!(!Qv() || !hn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function of(e, n) {
  var r;
  e._ripple = jt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    removeRipple: Bo.bind(e)
  }), e.addEventListener("touchstart", Os, {
    passive: !0
  }), e.addEventListener("touchmove", Vs, {
    passive: !0
  }), e.addEventListener("dragstart", Bo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function lf(e) {
  e.removeEventListener("touchstart", Os), e.removeEventListener("touchmove", Vs), e.removeEventListener("dragstart", Bo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function sf(e, n) {
  var r, a, t, o, l = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (a = n.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = jt({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Ms = {
  mounted: of,
  unmounted: lf,
  updated: sf,
  install(e) {
    e.directive("ripple", this);
  }
}, dS = Ms;
const We = Ms;
function uf(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var $t = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: uf
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
function Bs() {
  var e = Object.keys(hn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Ot(e) {
  hn.locks[e] = 1, Bs();
}
function Vt(e) {
  delete hn.locks[e], Bs();
}
function to(e, n) {
  var {
    uid: r
  } = Qa();
  n && te(n, (a) => {
    a === !1 ? Vt(r) : a === !0 && e() === !0 && Ot(r);
  }), te(e, (a) => {
    n && n() === !1 || (a === !0 ? Ot(r) : Vt(r));
  }), Nv(() => {
    n && n() === !1 || e() === !0 && Ot(r);
  }), _a(() => {
    n && n() === !1 || e() === !0 && Vt(r);
  }), Pr(() => {
    n && n() === !1 || e() === !0 && Ot(r);
  }), Qn(() => {
    n && n() === !1 || e() === !0 && Vt(r);
  });
}
function Tt(e, n) {
  var r = B(hn.zIndex);
  return te(e, (a) => {
    a && (hn.zIndex += n, r.value = hn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
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
function df(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !wt(e);
}
var {
  n: Vn,
  classes: wo
} = x("popup");
const wn = Q({
  name: "VarPopup",
  inheritAttrs: !1,
  props: $t,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Tt(() => e.show, 3), {
      disabled: o
    } = ao(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      k(v), d && k(e["onUpdate:show"], !1);
    };
    to(() => e.show, () => e.lockScroll), te(() => e.show, (d) => {
      k(d ? e.onOpen : e.onClose);
    }), rf(() => k(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return Z("div", {
        class: wo(Vn("overlay"), d),
        style: Eo({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => Z("div", Ne({
      class: wo(Vn("content"), Vn("--" + e.position), [e.defaultStyle, Vn("--content-background-color")], [e.defaultStyle, Vn("$-elevation--3")], [e.safeArea, Vn("--safe-area")], [e.safeAreaTop, Vn("--safe-area-top")]),
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
          class: wo(Vn("$--box"), Vn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), Z(Ue, {
          name: h || Vn("$-pop-" + b)
        }, {
          default: () => [f && s()]
        })]), [[Cr, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return Z(Da, {
          to: d,
          disabled: o.value
        }, df(v = u()) ? v : {
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
var vS = wn, Es = {
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
function ol(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vf(e) {
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
var {
  n: ff,
  classes: cf
} = x("icon");
function mf(e, n) {
  return p(), ge(
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
var Is = Q({
  name: "VarIcon",
  props: Es,
  setup(e) {
    var n = B(""), r = B(!1), a = /* @__PURE__ */ function() {
      var t = vf(function* (o, l) {
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
    return te(() => e.name, a, {
      immediate: !0
    }), {
      n: ff,
      classes: cf,
      nextName: n,
      animateInProgress: r,
      isURL: Rv,
      toNumber: L,
      toSizeUnit: he
    };
  }
});
Is.render = mf;
const Pe = Is;
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
var fS = Pe;
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
var pf = Io({
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
}, Ke($t, [
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
const Ci = {
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
}, Ns = {
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
function Si() {
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
    e[o] = No({}, e[o], l), a(o);
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
  packs: Ds,
  pack: Xe,
  add: ki,
  use: $i,
  merge: As
} = Si();
ki("zh-CN", Ci);
$i("zh-CN");
var cS = {
  zhCN: Ci,
  enUS: Ns,
  packs: Ds,
  pack: Xe,
  add: ki,
  use: $i,
  merge: As,
  useLocale: Si
};
const Do = {
  zhCN: Ci,
  enUS: Ns,
  packs: Ds,
  pack: Xe,
  add: ki,
  use: $i,
  merge: As,
  useLocale: Si
};
var {
  n: hf,
  classes: gf
} = x("action-sheet"), yf = ["onClick"];
function bf(e, n) {
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
        )]), F(e.$slots, "actions", {}, () => [(p(!0), O(
          Ve,
          null,
          Fe(e.actions, (o) => ke((p(), O(
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
            )) : _("v-if", !0), A(
              "div",
              {
                class: c(e.n("action-name"))
              },
              re(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            yf
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
var zs = Q({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: wn,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: pf,
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
    return te(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: hf,
      classes: gf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Xe,
      dt: no,
      handleSelect: r
    };
  }
});
zs.render = bf;
const dr = zs;
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
var ar, Ti = {};
function wf(e) {
  return e === void 0 && (e = {}), Ao({}, Ti, e);
}
function Kn(e) {
  return kt() ? new Promise((n) => {
    Kn.close();
    var r = Le(wf(e));
    r.teleport = "body", ar = r;
    var {
      unmountInstance: a
    } = et(dr, r, {
      onSelect: (t) => {
        k(r.onSelect, t), n(t);
      },
      onClose: () => {
        k(r.onClose), n("close");
      },
      onClosed: () => {
        k(r.onClosed), a(), ar === r && (ar = null);
      },
      onRouteChange: () => {
        a(), ar === r && (ar = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
Kn.setDefaultOptions = function(e) {
  Ti = e;
};
Kn.resetDefaultOptions = function() {
  Ti = {};
};
Kn.close = function() {
  if (ar != null) {
    var e = ar;
    ar = null, ze().then(() => {
      e.show = !1;
    });
  }
};
Kn.Component = dr;
dr.install = function(e) {
  e.component(dr.name, dr);
};
Kn.install = function(e) {
  e.component(dr.name, dr);
};
var mS = dr;
function Cf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Sf = {
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
    validator: Cf
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
  n: kf,
  classes: $f
} = x("app-bar");
function Tf(e, n) {
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
        [F(e.$slots, "left"), e.titlePosition === "left" ? (p(), O(
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
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), O(
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
      )) : _("v-if", !0), A(
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
          [F(e.$slots, "default", {}, () => [Ce(
            re(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), F(e.$slots, "right")],
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
var Ls = Q({
  name: "VarAppBar",
  props: Sf,
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
    return tn(o), xt(o), {
      n: kf,
      classes: $f,
      formatElevation: mn,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ls.render = Tf;
const Er = Ls;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var pS = Er;
function il(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function oo(e) {
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
function zo() {
  return zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, zo.apply(this, arguments);
}
var Pf = "background-image", Of = "lazy-loading", Vf = "lazy-error", ll = "lazy-attempt", Mf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Lo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ga = [], Wt = [], Rs = Fv(100), Ge = {
  loading: Lo,
  error: Lo,
  attempt: 3,
  throttleWait: 300,
  events: Mf
}, Pi = bi(Pt, Ge.throttleWait);
function io(e, n) {
  e._lazy.arg === Pf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Bf(e) {
  e._lazy.loading && io(e, e._lazy.loading), Pt();
}
function Ef(e) {
  e._lazy.error && io(e, e._lazy.error), e._lazy.state = "error", Vi(e), Pt();
}
function Us(e, n) {
  io(e, n), e._lazy.state = "success", Vi(e), Pt();
}
function If(e) {
  var n;
  Wt.includes(e) || (Wt.push(e), (n = Ge.events) == null || n.forEach((r) => {
    e.addEventListener(r, Pi, {
      passive: !0
    });
  }));
}
function Nf() {
  Wt.forEach((e) => {
    var n;
    (n = Ge.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Pi);
    });
  }), Wt.length = 0;
}
function Df(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Of)) != null ? r : Ge.loading,
    error: (a = e.getAttribute(Vf)) != null ? a : Ge.error,
    attempt: e.getAttribute(ll) ? Number(e.getAttribute(ll)) : Ge.attempt
  };
  e._lazy = zo({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), io(e, Lo), k(Ge.filter, e._lazy);
}
function Af(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Rs.add(n), Us(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Ef(e) : Hs(e);
  });
}
function Hs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Rs.has(n)) {
      Us(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Bf(e), Af(e, n);
  }
}
function Oi(e) {
  return Ro.apply(this, arguments);
}
function Ro() {
  return Ro = oo(function* (e) {
    (yield Wv(e)) && Hs(e);
  }), Ro.apply(this, arguments);
}
function Pt() {
  Ga.forEach((e) => Oi(e));
}
function zf(e) {
  return Uo.apply(this, arguments);
}
function Uo() {
  return Uo = oo(function* (e) {
    !Ga.includes(e) && Ga.push(e), Gv(e).forEach(If), yield Oi(e);
  }), Uo.apply(this, arguments);
}
function Vi(e) {
  Ft(Ga, e), Ga.length === 0 && Nf();
}
function Lf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Fs(e, n) {
  return Ho.apply(this, arguments);
}
function Ho() {
  return Ho = oo(function* (e, n) {
    Df(e, n), yield zf(e);
  }), Ho.apply(this, arguments);
}
function Rf(e, n) {
  return Fo.apply(this, arguments);
}
function Fo() {
  return Fo = oo(function* (e, n) {
    if (!Lf(e, n)) {
      Ga.includes(e) && (yield Oi(e));
      return;
    }
    yield Fs(e, n);
  }), Fo.apply(this, arguments);
}
function Uf(e) {
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
var Ys = {
  mounted: Fs,
  unmounted: Vi,
  updated: Rf,
  install(e, n) {
    Uf(n), Pi = bi(Pt, Ge.throttleWait), e.directive("lazy", this);
  }
}, hS = Ys;
const ct = Ys;
function Hf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var js = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ws(e) {
  return js(e) || an(e) || je(e);
}
var Ff = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Ws,
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
    validator: Hf,
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
  n: Yf,
  classes: jf
} = x("avatar"), Wf = ["src", "lazy-loading", "lazy-error"], Gf = ["src"];
function qf(e, n) {
  var r = De("lazy");
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
      Ve,
      {
        key: 0
      },
      [e.lazy ? ke((p(), O(
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
        Wf
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
        Gf
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
      [F(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var Gs = Q({
  name: "VarAvatar",
  directives: {
    Lazy: ct
  },
  props: Ff,
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
    return tn(t), xt(t), {
      internalSizeValidator: js,
      sizeValidator: Ws,
      toSizeUnit: he,
      n: Yf,
      classes: jf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Gs.render = qf;
const Ir = Gs;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var gS = Ir, Xf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Kf,
  classes: Zf
} = x("avatar-group");
function Jf(e, n) {
  return p(), O(
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
var qs = Q({
  name: "VarAvatarGroup",
  props: Xf,
  setup(e) {
    var n = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": he(e.offset)
    });
    return {
      n: Kf,
      classes: Zf,
      toSizeUnit: he,
      rootStyles: n
    };
  }
});
qs.render = Jf;
const Nr = qs;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var yS = Nr;
function Qf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function _f(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ir = {
  type: {
    type: String,
    default: "circle",
    validator: Qf
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: _f
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
  n: xf,
  classes: ec
} = x("loading"), nc = (e) => (Aa(""), e = e(), za(), e), rc = /* @__PURE__ */ nc(() => /* @__PURE__ */ A(
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
)), ac = [rc];
function tc(e, n) {
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
      [F(e.$slots, "default"), e.loading ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.isShow ? (p(), O(
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
          ac,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (p(!0), O(
        Ve,
        null,
        Fe(e.loadingTypeDict, (r, a) => (p(), O(
          Ve,
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
              Ve,
              null,
              Fe(r, (t) => (p(), O(
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
          )) : _("v-if", !0)],
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
        [F(e.$slots, "description", {}, () => [Ce(
          re(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Xs = Q({
  name: "VarLoading",
  props: ir,
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
      n: xf,
      classes: ec,
      multiplySizeUnit: nn,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Xs.render = tc;
const En = Xs;
En.install = function(e) {
  e.component(En.name, En);
};
var bS = En, oc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: ic,
  classes: lc
} = x("hover-overlay");
function sc(e, n) {
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
var Ks = Q({
  name: "VarHoverOverlay",
  props: oc,
  setup() {
    return {
      n: ic,
      classes: lc
    };
  }
});
Ks.render = sc;
const dn = Ks;
dn.install = function(e) {
  e.component(dn.name, dn);
};
function kr() {
  var e = B(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var wS = dn;
function Zs(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function uc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[cs(t)] = o, r;
  }, {}) : {};
}
function dc(e) {
  var {
    value: n
  } = e._hover, r = uc(e);
  Object.keys(n).forEach((a) => {
    var t = cs(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Mi(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function vc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function Js(e) {
  vc(e), Mi(e, e._hover.rawStyle);
}
function Qs() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, St(e)) {
    e(this._hover.hovering);
    return;
  }
  Mi(this, e);
}
function _s() {
  if (this._hover.hovering = !1, St(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Js(this);
}
function xs(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Zs(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, dc(e), e.addEventListener("mouseenter", Qs), e.addEventListener("mouseleave", _s));
}
function eu(e, n) {
  Zs(n.arg) || (Js(e), e.removeEventListener("mouseenter", Qs), e.removeEventListener("mouseleave", _s));
}
function fc(e, n) {
  e._hover && eu(e, n);
}
function cc(e, n) {
  return !St(n.value) && e._hover.hovering;
}
function mc(e, n) {
  xs(e, n), cc(e, n) && Mi(e, n.value);
}
var nu = {
  mounted: xs,
  unmounted: eu,
  beforeUpdate: fc,
  updated: mc,
  install(e) {
    e.directive("hover", this);
  }
}, CS = nu;
const zn = nu;
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
function ru(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function pc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function hc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var gc = {
  type: {
    type: String,
    validator: ru
  },
  nativeType: {
    type: String,
    default: "button",
    validator: hc
  },
  size: {
    type: String,
    validator: pc
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
  loadingType: Ke(ir, "type"),
  loadingSize: Ke(ir, "size"),
  loadingColor: Yo({}, Ke(ir, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, au = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function yc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = cn(au);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function bc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = fn(au);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: wc,
  classes: Cc
} = x("button"), Sc = ["type", "disabled"];
function kc(e, n) {
  var r = ae("var-loading"), a = ae("var-hover-overlay"), t = De("ripple"), o = De("hover");
  return ke((p(), O(
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
    )) : _("v-if", !0), A(
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
    Sc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var tu = Q({
  name: "VarButton",
  components: {
    VarLoading: En,
    VarHoverOverlay: dn
  },
  directives: {
    Ripple: We,
    Hover: zn
  },
  props: gc,
  setup(e) {
    var n = B(!1), {
      buttonGroup: r
    } = bc(), {
      hovering: a,
      handleHovering: t
    } = kr(), o = R(() => {
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
      n: wc,
      classes: Cc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
tu.render = kc;
const _e = tu;
_e.install = function(e) {
  e.component(_e.name, _e);
};
var SS = _e, $c = {
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
  n: Tc,
  classes: Pc
} = x("back-top");
function Oc(e, n) {
  var r = ae("var-icon"), a = ae("var-button");
  return p(), ge(
    Da,
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
var ou = Q({
  name: "VarBackTop",
  components: {
    VarButton: _e,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: $c,
  setup(e) {
    var n = B(!1), r = B(null), a = B(!0), t, o = (d) => {
      k(e.onClick, d);
      var v = wi(t);
      ft(t, {
        left: v,
        duration: e.duration,
        animation: ms
      });
    }, l = bi(() => {
      n.value = vt(t) >= Ye(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? hs(e.target, "BackTop") : Sr(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return _t(() => {
      i(), s(), a.value = !1;
    }), Pr(s), bt(u), Qn(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: he,
      n: Tc,
      classes: Pc,
      handleClick: o
    };
  }
});
ou.render = Oc;
const Dr = ou;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var kS = Dr;
function Vc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Mc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Bc = {
  type: {
    type: String,
    default: "default",
    validator: Vc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Mc
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
  n: Ec,
  classes: Ic
} = x("badge");
function Nc(e, n) {
  var r = ae("var-icon");
  return p(), O(
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
          )) : _("v-if", !0), F(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), O(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            re(e.value),
            3
            /* TEXT, CLASS */
          )) : _("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[Cr, !e.hidden]])]),
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
var iu = Q({
  name: "VarBadge",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Bc,
  setup(e) {
    var n = R(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: Ec,
      classes: Ic,
      value: n
    };
  }
});
iu.render = Nc;
const vr = iu;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var $S = vr, Dc = {
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
}, lu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Ac() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = cn(lu);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
function jo() {
  return jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, jo.apply(this, arguments);
}
var {
  n: zc,
  classes: Lc
} = x("bottom-navigation"), {
  n: lo
} = x("bottom-navigation-item"), sl = lo("--right-half-space"), ul = lo("--left-half-space"), dl = lo("--right-space"), Rc = {
  type: "primary"
};
function Uc(e, n) {
  var r = ae("var-button");
  return p(), O(
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
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var su = Q({
  name: "VarBottomNavigation",
  components: {
    VarButton: _e
  },
  props: Dc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = B(null), t = R(() => e.active), o = R(() => e.activeColor), l = R(() => e.inactiveColor), i = B({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Ac(), v = () => {
      s.value === 0 || f() || m() || h();
    }, f = () => u.find((g) => {
      var {
        name: M
      } = g;
      return t.value === M.value;
    }), m = () => u.find((g) => {
      var {
        index: M
      } = g;
      return t.value === M.value;
    }), h = () => {
      an(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > s.value - 1 && k(e["onUpdate:active"], s.value - 1));
    }, b = (g) => {
      t.value !== g && (e.onBeforeChange ? y(g) : w(g));
    }, y = (g) => {
      var M = Po(k(e.onBeforeChange, g));
      Promise.all(M).then((D) => {
        D.every(Boolean) && w(g);
      });
    }, w = (g) => {
      k(e["onUpdate:active"], g), k(e.onChange, g);
    }, V = () => {
      var g = E();
      g.forEach((M) => {
        M.classList.remove(sl, ul, dl);
      });
    }, S = (g) => {
      var M = E(), D = M.length, C = g % 2 === 0;
      M.forEach(($, z) => {
        T(C, $, z, D);
      });
    }, T = (g, M, D, C) => {
      var $ = D === C - 1;
      if (!g && $) {
        M.classList.add(dl);
        return;
      }
      var z = D === C / 2 - 1, K = D === C / 2;
      z ? M.classList.add(sl) : K && M.classList.add(ul);
    }, E = () => Array.from(a.value.querySelectorAll("." + lo())), P = () => {
      k(e.onFabClick);
    }, I = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: b
    };
    return d(I), te(() => s.value, v), te(() => e.fabProps, (g) => {
      i.value = jo({}, Rc, g);
    }, {
      immediate: !0,
      deep: !0
    }), tn(() => {
      r.fab && S(s.value);
    }), xt(() => {
      V(), r.fab && S(s.value);
    }), {
      n: zc,
      classes: Lc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: P,
      fabProps: i
    };
  }
});
su.render = Uc;
const Ar = su;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var TS = Ar, Hc = {
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
function Fc() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn(lu);
  return r || $n("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: Yc,
  classes: jc
} = x("bottom-navigation-item"), Wc = {
  type: "danger",
  dot: !0
};
function Gc(e, n) {
  var r = ae("var-icon"), a = ae("var-badge"), t = De("ripple");
  return ke((p(), O(
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
    )) : _("v-if", !0), F(e.$slots, "icon", {
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
    )) : _("v-if", !0), A(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? _("v-if", !0) : (p(), O(
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
var uu = Q({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: vr,
    VarIcon: Pe
  },
  directives: {
    Ripple: We
  },
  props: Hc,
  setup(e) {
    var n = R(() => e.name), r = R(() => e.badge), a = B({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = Fc(), {
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
    return l(d), te(() => r.value, (m) => {
      a.value = m === !0 ? Wc : r.value;
    }, {
      immediate: !0
    }), {
      n: Yc,
      classes: jc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
uu.render = Gc;
const zr = uu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var PS = zr, qc = {
  separator: {
    type: String
  },
  onClick: U()
}, du = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Xc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = cn(du);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Kc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = fn(du);
  return n || $n("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Zc,
  classes: Jc
} = x("breadcrumb");
function Qc(e, n) {
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
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? _("v-if", !0) : F(e.$slots, "separator", {
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
var vu = Q({
  name: "VarBreadcrumb",
  props: qc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Kc(), t = R(() => n.value === r.length.value - 1), o = R(() => r.separator.value), l = (i) => {
      t.value || k(e.onClick, i);
    };
    return a(null), {
      n: Zc,
      classes: Jc,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
vu.render = Qc;
const Lr = vu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var OS = Lr, _c = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: xc
} = x("breadcrumbs");
function em(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var fu = Q({
  name: "VarBreadcrumbs",
  props: _c,
  setup(e) {
    var n = R(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Xc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: xc
    };
  }
});
fu.render = em;
const Rr = fu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var VS = Rr;
function nm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function rm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function am(e) {
  return ["normal", "text", "outline"].includes(e);
}
var tm = {
  type: {
    type: String,
    default: "default",
    validator: nm
  },
  size: {
    type: String,
    default: "normal",
    validator: rm
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
    validator: am
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
  n: om,
  classes: im
} = x("button-group");
function lm(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var cu = Q({
  name: "VarButtonGroup",
  props: tm,
  setup(e) {
    var {
      bindButtons: n
    } = yc(), r = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return n(r), {
      n: om,
      classes: im,
      formatElevation: mn
    };
  }
});
cu.render = lm;
const Ur = cu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var MS = Ur;
function sm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var um = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: sm,
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
function vl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function fl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        vl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        vl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: dm,
  classes: vm
} = x("card"), fm = 500, cm = ["src", "alt"];
function mm(e, n) {
  var r = ae("var-icon"), a = ae("var-button"), t = De("ripple");
  return ke((p(), O(
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
      [F(e.$slots, "image", {}, () => [e.src ? (p(), O(
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
        cm
      )) : _("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("container"))
        },
        [F(e.$slots, "title", {}, () => [e.title ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), F(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          re(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [F(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), O(
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
        )) : _("v-if", !0)],
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
      )) : _("v-if", !0)],
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
var mu = Q({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: Pe,
    VarButton: _e
  },
  props: um,
  setup(e) {
    var n = B(null), r = B(null), a = B("auto"), t = B("auto"), o = B("100%"), l = B("100%"), i = B("auto"), s = B("auto"), u = B(void 0), d = B("hidden"), v = B("0px"), f = B("0"), m = R(() => e.layout === "row"), h = B(!1), b = B(!1), {
      zIndex: y
    } = Tt(() => e.floating, 1);
    to(() => e.floating, () => !m.value);
    var w = "auto", V = "auto", S = null, T = B(null), E = /* @__PURE__ */ function() {
      var M = fl(function* () {
        clearTimeout(T.value), clearTimeout(S), T.value = null, T.value = setTimeout(/* @__PURE__ */ fl(function* () {
          var {
            width: D,
            height: C,
            left: $,
            top: z
          } = n.value.getBoundingClientRect();
          a.value = he(D), t.value = he(C), o.value = a.value, l.value = t.value, i.value = he(z), s.value = he($), u.value = "fixed", w = i.value, V = s.value, h.value = !0, yield An(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? fm : 0);
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), P = () => {
      clearTimeout(S), clearTimeout(T.value), T.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = V, v.value = "0px", f.value = "0", h.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", V = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, I = () => {
      k(e["onUpdate:floating"], !1);
    }, g = (M) => {
      k(e.onClick, M);
    };
    return te(() => e.floating, (M) => {
      m.value || ze(() => {
        M ? E() : P();
      });
    }, {
      immediate: !0
    }), {
      n: dm,
      classes: vm,
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
      zIndex: y,
      isRow: m,
      close: I,
      showFloatingButtons: h,
      floated: b,
      formatElevation: mn,
      handleClick: g
    };
  }
});
mu.render = mm;
const Hr = mu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var BS = Hr, pm = {
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
  n: hm,
  classes: gm
} = x("cell");
function ym(e, n) {
  var r = ae("var-icon"), a = De("ripple");
  return ke((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "icon", {}, () => [e.icon ? (p(), O(
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
    )) : _("v-if", !0)]), A(
      "div",
      {
        class: c(e.n("content"))
      },
      [F(e.$slots, "default", {}, () => [e.title ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        re(e.title),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        re(e.description),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [F(e.$slots, "extra")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var pu = Q({
  name: "VarCell",
  components: {
    VarIcon: Pe
  },
  directives: {
    Ripple: We
  },
  props: pm,
  setup(e) {
    var n = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": he(e.borderOffset),
      "--cell-border-right": he(e.borderOffset)
    }), r = (a) => {
      k(e.onClick, a);
    };
    return {
      n: hm,
      classes: gm,
      toSizeUnit: he,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
pu.render = ym;
const fr = pu;
fr.install = function(e) {
  e.component(fr.name, fr);
};
var ES = fr, bm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: wm
} = x("form-details"), Cm = {
  key: 0
}, Sm = {
  key: 0
};
function km(e, n) {
  return p(), ge(
    Ue,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (p(), O(
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
              default: ve(() => [e.errorMessage ? (p(), O(
                "div",
                Cm,
                re(e.errorMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
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
              default: ve(() => [e.extraMessage ? (p(), O(
                "div",
                Sm,
                re(e.extraMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
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
      )) : _("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var hu = Q({
  name: "VarFormDetails",
  props: bm,
  setup: () => ({
    n: wm
  })
});
hu.render = km;
const Je = hu;
Je.install = function(e) {
  e.component(Je.name, Je);
};
var IS = Je, $m = {
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
}, gu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Tm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = cn(gu);
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
  } = fn(gu);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
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
var yu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Pn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn(yu), a = Qa(), t = r ? (o) => {
    r(Wo({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: n,
    form: e,
    bindForm: t
  };
}
function Om() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = cn(yu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: Vm,
  classes: Mm
} = x("checkbox");
function Bm(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = De("hover"), l = De("ripple");
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
      [ke((p(), O(
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
var bu = Q({
  name: "VarCheckbox",
  directives: {
    Ripple: We,
    Hover: zn
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  props: $m,
  setup(e) {
    var n = B(!1), r = R(() => n.value === e.checkedValue), a = R(() => e.checkedValue), t = B(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Pm(), {
      hovering: i,
      handleHovering: s
    } = kr(), {
      form: u,
      bindForm: d
    } = Pn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: h
    } = Tn(), b = (g) => {
      ze(() => {
        var {
          validateTrigger: M,
          rules: D,
          modelValue: C
        } = e;
        f(M, g, D, C);
      });
    }, y = (g) => {
      n.value = g;
      var {
        checkedValue: M,
        onChange: D
      } = e;
      k(e["onUpdate:modelValue"], n.value), k(D, n.value), b("onChange"), g === M ? o == null || o.onChecked(M) : o == null || o.onUnchecked(M);
    }, w = (g) => {
      var {
        disabled: M,
        readonly: D,
        checkedValue: C,
        uncheckedValue: $,
        onClick: z
      } = e;
      if (!(u != null && u.disabled.value || M) && (k(z, g), !(u != null && u.readonly.value || D))) {
        t.value = !0;
        var K = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && K || y(r.value ? $ : C);
      }
    }, V = (g) => {
      var {
        checkedValue: M,
        uncheckedValue: D
      } = e;
      n.value = g.includes(M) ? M : D;
    }, S = () => {
      t.value = !1;
    }, T = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), h();
    }, E = (g) => {
      var {
        checkedValue: M,
        uncheckedValue: D
      } = e, C = ![M, D].includes(g);
      C && (g = r.value ? D : M), y(g);
    }, P = () => m(e.rules, e.modelValue);
    te(() => e.modelValue, (g) => {
      n.value = g;
    }, {
      immediate: !0
    });
    var I = {
      checkedValue: a,
      checked: r,
      sync: V,
      validate: P,
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
      n: Vm,
      classes: Mm,
      handleClick: w,
      toggle: E,
      reset: T,
      validate: P,
      resetValidation: h
    };
  }
});
bu.render = Bm;
const cr = bu;
cr.install = function(e) {
  e.component(cr.name, cr);
};
var NS = cr;
function Em(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Im = {
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
    validator: Em
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
  n: Nm,
  classes: Dm
} = x("checkbox-group");
function Am(e, n) {
  var r = ae("var-form-details");
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
var wu = Q({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: Je
  },
  props: Im,
  setup(e) {
    var n = R(() => e.max), r = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Tm(), {
      bindForm: l
    } = Pn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Tn(), v = R(() => i.value), f = (I) => {
      ze(() => {
        var {
          validateTrigger: g,
          rules: M,
          modelValue: D
        } = e;
        s(g, I, M, D);
      });
    }, m = (I) => {
      k(e["onUpdate:modelValue"], I), k(e.onChange, I), f("onChange");
    }, h = (I) => {
      var {
        modelValue: g
      } = e;
      g.includes(I) || m([...g, I]);
    }, b = (I) => {
      var {
        modelValue: g
      } = e;
      g.includes(I) && m(g.filter((M) => M !== I));
    }, y = () => t.forEach((I) => {
      var {
        sync: g
      } = I;
      return g(e.modelValue);
    }), w = () => {
      t.forEach((I) => I.resetWithAnimation());
    }, V = () => {
      var I = t.map((M) => {
        var {
          checkedValue: D
        } = M;
        return D.value;
      }), g = Xi(I);
      return w(), k(e["onUpdate:modelValue"], g), g;
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
      }), g = Xi(I);
      return w(), k(e["onUpdate:modelValue"], g), g;
    }, T = () => {
      k(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    te(() => e.modelValue, y, {
      deep: !0
    }), te(() => a.value, y);
    var P = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: b,
      validate: E,
      resetValidation: d,
      reset: T,
      errorMessage: v
    };
    return o(P), k(l, P), {
      errorMessage: i,
      n: Nm,
      classes: Dm,
      checkAll: V,
      inverseAll: S,
      reset: T,
      validate: E,
      resetValidation: d
    };
  }
});
wu.render = Am;
const Fr = wu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var DS = Fr;
function zm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Lm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Rm = {
  type: {
    type: String,
    default: "default",
    validator: zm
  },
  size: {
    type: String,
    default: "normal",
    validator: Lm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Ke(Es, "name"),
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
  n: _n,
  classes: Um
} = x("chip");
function Hm(e, n) {
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
        ), F(e.$slots, "right"), e.closable ? (p(), O(
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
        )) : _("v-if", !0)],
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
var Cu = Q({
  name: "VarChip",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Rm,
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
      } = e, u = _n(o ? "$--flex" : "$--inline-flex"), d = i ? _n("plain") + " " + _n("plain-" + l) : _n("--" + l), v = s ? _n("--round") : null;
      return [_n("--" + t), u, d, v];
    }), a = (t) => {
      k(e.onClose, t);
    };
    return {
      n: _n,
      classes: Um,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Cu.render = Hm;
const mr = Cu;
mr.install = function(e) {
  e.component(mr.name, mr);
};
var AS = mr;
function Fm(e) {
  return ["row", "column"].includes(e);
}
function Ym(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function jm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Wm = {
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
    validator: Fm
  },
  justify: {
    type: String,
    validator: Ym
  },
  align: {
    type: String,
    validator: jm
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
}, Su = Symbol("ROW_BIND_COL_KEY");
function Gm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = cn(Su);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function qm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn(Su);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: Mt,
  classes: Xm
} = x("col");
function Km(e, n) {
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
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var ku = Q({
  name: "VarCol",
  props: Wm,
  setup(e) {
    var n = B({
      left: 0,
      right: 0
    }), r = R(() => L(e.span)), a = R(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = qm(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (yi(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Mt("--span-" + u + "-" + m)), f && v.push(Mt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Mt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      k(e.onClick, u);
    };
    return te([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), k(o, l), {
      n: Mt,
      classes: Xm,
      padding: n,
      toNumber: L,
      toSizeUnit: he,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Yt
    };
  }
});
ku.render = Km;
const Yr = ku;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var zS = Yr, $u = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Zm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = cn($u);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var Jm = {
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
  n: Qm
} = x("collapse");
function _m(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Tu = Q({
  name: "VarCollapse",
  props: Jm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Zm(), t = R(() => e.modelValue), o = R(() => e.offset), l = R(() => e.divider), i = R(() => e.elevation), s = () => !e.accordion && !Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (b, y) => s() ? y ? e.accordion ? b : [...e.modelValue, b] : e.accordion ? null : e.modelValue.filter((w) => w !== b) : null, d = (b, y) => {
      var w = u(b, y);
      k(e["onUpdate:modelValue"], w), k(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return r.find((y) => {
          var {
            name: w
          } = y;
          return e.modelValue === w.value;
        });
      var b = r.filter((y) => {
        var {
          name: w
        } = y;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return b.length ? b : void 0;
    }, f = () => e.accordion ? r.find((b) => {
      var {
        index: y,
        name: w
      } = b;
      return w.value === void 0 && e.modelValue === y.value;
    }) : r.filter((b) => {
      var {
        index: y,
        name: w
      } = b;
      return w.value === void 0 && e.modelValue.includes(y.value);
    }), m = () => {
      if (s()) {
        var b = v() || f();
        if (e.accordion && !b || !e.accordion && !b.length) {
          r.forEach((y) => {
            y.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((y) => {
          var w = e.accordion ? b === y : b.includes(y);
          y.init(e.accordion, w);
        });
      }
    }, h = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(h), te(() => n.value, () => ze().then(m)), te(() => e.modelValue, () => ze().then(m)), {
      n: Qm,
      divider: l
    };
  }
});
Tu.render = _m;
const jr = Tu;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var LS = jr;
function xm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn($u);
  return r || $n("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var ep = {
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
  n: np,
  classes: rp
} = x("collapse-item");
function ap(e, n) {
  var r = ae("var-icon");
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
    ), [[Cr, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Pu = Q({
  name: "VarCollapseItem",
  components: {
    VarIcon: Pe
  },
  props: ep,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = xm(), t = !0, o = B(null), l = B(!1), i = B(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = r, m = R(() => e.name), h = (E, P) => {
      s.value === void 0 || E && Te(s.value) || P === i.value || (i.value = P, b(!0));
    }, b = (E) => {
      e.disabled || E || f(e.name || n.value, !i.value);
    }, y = () => {
      o.value && (o.value.style.height = "", l.value = !0, bn(() => {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = "0px", bn(() => {
          o.value.style.height = E + "px", t && ro(() => {
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
    return a(T), te(i, (E) => {
      E ? y() : V();
    }), {
      n: np,
      start: w,
      classes: rp,
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
Pu.render = ap;
const Wr = Pu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var RS = Wr, tp = {
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
  n: op
} = x("countdown"), Go = 1e3, qo = 60 * Go, Xo = 60 * qo, cl = 24 * Xo;
function ip(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default", Ct(eo(e.timeData)), () => [Ce(
      re(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Ou = Q({
  name: "VarCountdown",
  props: tp,
  setup(e) {
    var n = B(""), r = B({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (h, b) => {
      var y = Object.values(b), w = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if (w.forEach((T, E) => {
        h.includes(T) ? h = h.replace(T, Ba("" + y[E], 2, "0")) : y[E + 1] += y[E] * V[E];
      }), h.includes("S")) {
        var S = Ba("" + y[y.length - 1], 3, "0");
        h.includes("SSS") ? h = h.replace("SSS", S) : h.includes("SS") ? h = h.replace("SS", S.slice(0, 2)) : h = h.replace("S", S.slice(0, 1));
      }
      return h;
    }, u = (h) => {
      var b = Math.floor(h / cl), y = Math.floor(h % cl / Xo), w = Math.floor(h % Xo / qo), V = Math.floor(h % qo / Go), S = Math.floor(h % Go), T = {
        days: b,
        hours: y,
        minutes: w,
        seconds: V,
        milliseconds: S
      };
      r.value = T, k(e.onChange, r.value), n.value = s(e.format, T);
    }, d = () => {
      var {
        time: h,
        onEnd: b
      } = e, y = performance.now();
      if (a || (a = y + L(h)), l = a - y, l < 0 && (l = 0), u(l), l === 0) {
        k(b);
        return;
      }
      t && (o = bn(d));
    }, v = function(h) {
      h === void 0 && (h = !1), !(t && !h) && (t = !0, a = performance.now() + (l || L(e.time)), d());
    }, f = () => {
      t = !1, nl(o);
    }, m = () => {
      a = 0, t = !1, nl(o), d();
    };
    return te(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Pr(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), Qn(() => {
      i = t, f();
    }), _a(f), {
      showTime: n,
      timeData: r,
      n: op,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Ou.render = ip;
const Gr = Ou;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var US = Gr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ua = 9e15, Or = 1e9, Ko = "0123456789abcdef", Gt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", qt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Zo = {
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
}, Vu, Un, pe = !0, so = "[DecimalError] ", $r = so + "Invalid argument: ", Mu = so + "Precision limit exceeded", Bu = so + "crypto unavailable", Eu = "[object Decimal]", xe = Math.floor, qe = Math.pow, lp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, sp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, up = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Iu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, In = 1e7, ce = 7, dp = 9007199254740991, vp = Gt.length - 1, Jo = qt.length - 1, X = { toStringTag: Eu };
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
    throw Error($r + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ce, a.rounding = 1, r = fp(a, Lu(a, r)), a.precision = e, a.rounding = n, fe(Un == 2 || Un == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
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
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / vo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = qa(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return fe(o, l.precision = r, l.rounding = a, !0);
};
X.hyperbolicSine = X.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = qa(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / vo(5, e)), t = qa(o, 2, t, t, !0);
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
    if (u.abs().eq(1) && v + 4 <= Jo)
      return l = Bn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Jo)
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
  if (pe = !1, i = v + m, l = lr(u, i), a = n ? Xt(d, i + 10) : lr(e, i), s = Ee(l, a, i, 1), mt(s.d, t = v, f))
    do
      if (i += 10, l = lr(u, i), a = n ? Xt(d, i + 10) : lr(e, i), s = Ee(l, a, i, 1), !o) {
        +Qe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = fe(s, v + 1, 0));
        break;
      }
    while (mt(s.d, t += 10, f));
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
  return u[0] ? (e.d = u, e.e = uo(u, r), pe ? fe(e, i, s) : e) : new h(s === 3 ? -0 : 0);
};
X.modulo = X.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? fe(new a(r), a.precision, a.rounding) : (pe = !1, a.modulo == 9 ? (n = Ee(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Ee(r, e, 0, a.modulo, 1), n = n.times(e), pe = !0, r.minus(n));
};
X.naturalExponential = X.exp = function() {
  return Qo(this);
};
X.naturalLogarithm = X.ln = function() {
  return lr(this);
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
  return e.d = u, e.e = uo(u, a), pe ? fe(e, i, s) : e;
};
X.precision = X.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error($r + e);
  return r.d ? (n = Nu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
X.round = function() {
  var e = this, n = e.constructor;
  return fe(new n(e), e.e + 1, n.rounding);
};
X.sine = X.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ce, a.rounding = 1, r = mp(a, Lu(a, r)), a.precision = e, a.rounding = n, fe(Un > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
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
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Ee(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, fe(Un == 2 || Un == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
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
  return n ? ++r : o.shift(), e.d = o, e.e = uo(o, r), pe ? fe(e, v.precision, v.rounding) : e;
};
X.toBinary = function(e, n) {
  return Bi(this, 2, e, n);
};
X.toDecimalPlaces = X.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (vn(e, 0, Or), n === void 0 ? n = a.rounding : vn(n, 0, 8), fe(r, e + r.e + 1, n));
};
X.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Ln(a, !0) : (vn(e, 0, Or), n === void 0 ? n = t.rounding : vn(n, 0, 8), a = fe(new t(a), e + 1, n), r = Ln(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Ln(t) : (vn(e, 0, Or), n === void 0 ? n = o.rounding : vn(n, 0, 8), a = fe(new o(t), e + t.e + 1, n), r = Ln(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
X.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, h = m.d, b = m.constructor;
  if (!h)
    return new b(m);
  if (u = r = new b(1), a = s = new b(0), n = new b(a), o = n.e = Nu(h) - m.e - 1, l = o % ce, n.d[0] = qe(10, l < 0 ? ce + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new b(e), !i.isInt() || i.lt(u))
      throw Error($r + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (pe = !1, i = new b(Qe(h)), d = b.precision, b.precision = o = h.length * ce * 2; v = Ee(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Ee(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Ee(u, a, o, 1).minus(m).abs().cmp(Ee(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], b.precision = d, pe = !0, f;
};
X.toHexadecimal = X.toHex = function(e, n) {
  return Bi(this, 16, e, n);
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
  return Bi(this, 8, e, n);
};
X.toPower = X.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(qe(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return fe(i, a, o);
  if (n = xe(e.e / ce), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= dp)
    return t = Du(s, i, r, a), e.s < 0 ? new s(1).div(t) : fe(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = qe(+i, u), n = r == 0 || !isFinite(r) ? xe(u * (Math.log("0." + Qe(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (pe = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = Qo(e.times(lr(i, a + r)), a), t.d && (t = fe(t, a + 5, 1), mt(t.d, a, o) && (n = a + 10, t = fe(Qo(e.times(lr(i, n + r)), n), n + 5, 1), +Qe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = fe(t, a + 1, 0)))), t.s = l, pe = !0, s.rounding = o, fe(t, a, o));
};
X.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Ln(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (vn(e, 1, Or), n === void 0 ? n = t.rounding : vn(n, 0, 8), a = fe(new t(a), e, n), r = Ln(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toSignificantDigits = X.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (vn(e, 1, Or), n === void 0 ? n = a.rounding : vn(n, 0, 8)), fe(new a(r), e, n);
};
X.toString = function() {
  var e = this, n = e.constructor, r = Ln(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
X.truncated = X.trunc = function() {
  return fe(new this.constructor(this), this.e + 1, 1);
};
X.valueOf = X.toJSON = function() {
  var e = this, n = e.constructor, r = Ln(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Qe(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = ce - a.length, r && (o += er(r)), o += a;
    l = e[n], a = l + "", r = ce - a.length, r && (o += er(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function vn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error($r + e);
}
function mt(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += ce, t = 0) : (t = Math.ceil((n + 1) / ce), n %= ce), o = qe(10, ce - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == qe(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == qe(10, n - 3) - 1, l;
}
function zt(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Ko.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function fp(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / vo(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = qa(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, m, h, b, y, w, V, S, T, E, P, I, g, M, D, C, $, z = a.constructor, K = a.s == t.s ? 1 : -1, J = a.d, Y = t.d;
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
    if (Y[v] > (J[v] || 0) && d--, o == null ? (P = o = z.precision, l = z.rounding) : i ? P = o + (a.e - t.e) + 1 : P = o, P < 0)
      V.push(1), h = !0;
    else {
      if (P = P / m + 2 | 0, v = 0, C == 1) {
        for (f = 0, Y = Y[0], P++; (v < M || f) && P--; v++)
          I = f * s + (J[v] || 0), V[v] = I / Y | 0, f = I % Y | 0;
        h = f || v < M;
      } else {
        for (f = s / (Y[0] + 1) | 0, f > 1 && (Y = e(Y, f, s), J = e(J, f, s), C = Y.length, M = J.length), g = C, S = J.slice(0, C), T = S.length; T < C; )
          S[T++] = 0;
        $ = Y.slice(), $.unshift(0), D = Y[0], Y[1] >= s / 2 && ++D;
        do
          f = 0, u = n(Y, S, C, T), u < 0 ? (E = S[0], C != T && (E = E * s + (S[1] || 0)), f = E / D | 0, f > 1 ? (f >= s && (f = s - 1), b = e(Y, f, s), y = b.length, T = S.length, u = n(b, S, y, T), u == 1 && (f--, r(b, C < y ? $ : Y, y, s))) : (f == 0 && (u = f = 1), b = Y.slice()), y = b.length, y < T && b.unshift(0), r(S, b, T, s), u == -1 && (T = S.length, u = n(Y, S, C, T), u < 1 && (f++, r(S, C < T ? $ : Y, T, s))), T = S.length) : u === 0 && (f++, S = [0]), V[v++] = f, u && S[0] ? S[T++] = J[g] || 0 : (S = [J[g]], T = 1);
        while ((g++ < M || S[0] !== void 0) && P--);
        h = S[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      w.e = d, Vu = h;
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
function Ln(e, n, r) {
  if (!e.isFinite())
    return zu(e);
  var a, t = e.e, o = Qe(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + er(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + er(-t - 1) + o, r && (a = r - l) > 0 && (o += er(a))) : t >= l ? (o += er(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + er(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += er(a))), o;
}
function uo(e, n) {
  var r = e[0];
  for (n *= ce; r >= 10; r /= 10)
    n++;
  return n;
}
function Xt(e, n, r) {
  if (n > vp)
    throw pe = !0, r && (e.precision = r), Error(Mu);
  return fe(new e(Gt), n, 1, !0);
}
function Bn(e, n, r) {
  if (n > Jo)
    throw Error(Mu);
  return fe(new e(qt), n, r, !0);
}
function Nu(e) {
  var n = e.length - 1, r = n * ce + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function er(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Du(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / ce + 4);
  for (pe = !1; ; ) {
    if (r % 2 && (o = o.times(n), pl(o.d, l) && (t = !0)), r = xe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), pl(n.d, l);
  }
  return pe = !0, o;
}
function ml(e) {
  return e.d[e.d.length - 1] & 1;
}
function Au(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Qo(e, n) {
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
        if (u < 3 && mt(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return fe(l, f.precision = h, m, pe = !0);
      else
        return f.precision = h, l;
    }
    l = i;
  }
}
function lr(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, h = 10, b = e, y = b.d, w = b.constructor, V = w.rounding, S = w.precision;
  if (b.s < 0 || !y || !y[0] || !b.e && y[0] == 1 && y.length == 1)
    return new w(y && !y[0] ? -1 / 0 : b.s != 1 ? NaN : y ? 0 : b);
  if (n == null ? (pe = !1, d = S) : d = n, w.precision = d += h, r = Qe(y), a = r.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      b = b.times(e), r = Qe(b.d), a = r.charAt(0), m++;
    o = b.e, a > 1 ? (b = new w("0." + r), o++) : b = new w(a + "." + r.slice(1));
  } else
    return u = Xt(w, d + 2, S).times(o + ""), b = lr(new w(a + "." + r.slice(1)), d - h).plus(u), w.precision = S, n == null ? fe(b, S, V, pe = !0) : b;
  for (v = b, s = l = b = Ee(b.minus(1), b.plus(1), d, 1), f = fe(b.times(b), d, 1), t = 3; ; ) {
    if (l = fe(l.times(f), d, 1), u = s.plus(Ee(l, new w(t), d, 1)), Qe(u.d).slice(0, d) === Qe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Xt(w, d + 2, S).times(o + ""))), s = Ee(s, new w(m), d, 1), n == null)
        if (mt(s.d, d - h, V, i))
          w.precision = d += h, u = l = b = Ee(v.minus(1), v.plus(1), d, 1), f = fe(b.times(b), d, 1), t = i = 1;
        else
          return fe(s, w.precision = S, V, pe = !0);
      else
        return w.precision = S, s;
    s = u, t += 2;
  }
}
function zu(e) {
  return String(e.s * e.s / 0);
}
function _o(e, n) {
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
function cp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Iu.test(n))
      return _o(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (sp.test(n))
    r = 16, n = n.toLowerCase();
  else if (lp.test(n))
    r = 2;
  else if (up.test(n))
    r = 8;
  else
    throw Error($r + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = Du(a, new a(r), o, o * 2)), u = zt(n, r, In), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = uo(u, d), e.d = u, pe = !1, l && (e = Ee(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? qe(2, s) : sr.pow(2, s))), pe = !0, e);
}
function mp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : qa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / vo(5, r)), n = qa(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function qa(e, n, r, a, t) {
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
function vo(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Lu(e, n) {
  var r, a = n.s < 0, t = Bn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Un = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Un = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Un = ml(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Un = ml(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Bi(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, h = r !== void 0;
  if (h ? (vn(r, 1, Or), a === void 0 ? a = m.rounding : vn(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = zu(e);
  else {
    for (d = Ln(e), l = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = zt(Ln(f), 10, t), f.e = f.d.length), v = zt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Ee(e, f, r, a, 0, t), v = e.d, o = e.e, u = Vu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Ko.charAt(v[l]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = zt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Ko.charAt(v[l]);
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
function pl(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function pp(e) {
  return new this(e).abs();
}
function hp(e) {
  return new this(e).acos();
}
function gp(e) {
  return new this(e).acosh();
}
function yp(e, n) {
  return new this(e).plus(n);
}
function bp(e) {
  return new this(e).asin();
}
function wp(e) {
  return new this(e).asinh();
}
function Cp(e) {
  return new this(e).atan();
}
function Sp(e) {
  return new this(e).atanh();
}
function kp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Bn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Bn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Bn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Ee(e, n, o, 1)), n = Bn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Ee(e, n, o, 1)), r;
}
function $p(e) {
  return new this(e).cbrt();
}
function Tp(e) {
  return fe(e = new this(e), e.e + 1, 2);
}
function Pp(e, n, r) {
  return new this(e).clamp(n, r);
}
function Op(e) {
  if (!e || typeof e != "object")
    throw Error(so + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Or,
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
    if (r = o[n], t && (this[r] = Zo[r]), (a = e[r]) !== void 0)
      if (xe(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error($r + r + ": " + a);
  if (r = "crypto", t && (this[r] = Zo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Bu);
      else
        this[r] = !1;
    else
      throw Error($r + r + ": " + a);
  return this;
}
function Vp(e) {
  return new this(e).cos();
}
function Mp(e) {
  return new this(e).cosh();
}
function Ru(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, hl(o)) {
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
      return _o(u, o.toString());
    } else if (s !== "string")
      throw Error($r + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Iu.test(o) ? _o(u, o) : cp(u, o);
  }
  if (t.prototype = X, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Op, t.clone = Ru, t.isDecimal = hl, t.abs = pp, t.acos = hp, t.acosh = gp, t.add = yp, t.asin = bp, t.asinh = wp, t.atan = Cp, t.atanh = Sp, t.atan2 = kp, t.cbrt = $p, t.ceil = Tp, t.clamp = Pp, t.cos = Vp, t.cosh = Mp, t.div = Bp, t.exp = Ep, t.floor = Ip, t.hypot = Np, t.ln = Dp, t.log = Ap, t.log10 = Lp, t.log2 = zp, t.max = Rp, t.min = Up, t.mod = Hp, t.mul = Fp, t.pow = Yp, t.random = jp, t.round = Wp, t.sign = Gp, t.sin = qp, t.sinh = Xp, t.sqrt = Kp, t.sub = Zp, t.sum = Jp, t.tan = Qp, t.tanh = _p, t.trunc = xp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Bp(e, n) {
  return new this(e).div(n);
}
function Ep(e) {
  return new this(e).exp();
}
function Ip(e) {
  return fe(e = new this(e), e.e + 1, 3);
}
function Np() {
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
function hl(e) {
  return e instanceof sr || e && e.toStringTag === Eu || !1;
}
function Dp(e) {
  return new this(e).ln();
}
function Ap(e, n) {
  return new this(e).log(n);
}
function zp(e) {
  return new this(e).log(2);
}
function Lp(e) {
  return new this(e).log(10);
}
function Rp() {
  return Au(this, arguments, "lt");
}
function Up() {
  return Au(this, arguments, "gt");
}
function Hp(e, n) {
  return new this(e).mod(n);
}
function Fp(e, n) {
  return new this(e).mul(n);
}
function Yp(e, n) {
  return new this(e).pow(n);
}
function jp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : vn(e, 1, Or), a = Math.ceil(e / ce), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Bu);
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
function Wp(e) {
  return fe(e = new this(e), e.e + 1, this.rounding);
}
function Gp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function qp(e) {
  return new this(e).sin();
}
function Xp(e) {
  return new this(e).sinh();
}
function Kp(e) {
  return new this(e).sqrt();
}
function Zp(e, n) {
  return new this(e).sub(n);
}
function Jp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (pe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return pe = !0, fe(r, this.precision, this.rounding);
}
function Qp(e) {
  return new this(e).tan();
}
function _p(e) {
  return new this(e).tanh();
}
function xp(e) {
  return fe(e = new this(e), e.e + 1, 1);
}
X[Symbol.for("nodejs.util.inspect.custom")] = X.toString;
X[Symbol.toStringTag] = "Decimal";
var sr = X.constructor = Ru(Zo);
Gt = new sr(Gt);
qt = new sr(qt);
var eh = {
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
  n: nh,
  classes: rh
} = x("counter"), gl = 100, yl = 600, ah = ["inputmode", "readonly", "disabled"];
function th(e, n) {
  var r = ae("var-icon"), a = ae("var-button"), t = ae("var-form-details");
  return p(), O(
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
        ah
      ), [[Dv, e.inputValue]]), Z(
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
var Uu = Q({
  name: "VarCounter",
  components: {
    VarButton: _e,
    VarIcon: Pe,
    VarFormDetails: Je
  },
  directives: {
    Ripple: We
  },
  inheritAttrs: !1,
  props: eh,
  setup(e) {
    var n = B(""), {
      bindForm: r,
      form: a
    } = Pn(), {
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
    }, y = () => {
      var {
        min: Y
      } = e;
      k(e["onUpdate:modelValue"], Y != null ? L(Y) : 0), i();
    }, w = {
      reset: y,
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
    }, P = () => {
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
        var de = new sr(L(W)).minus(new sr(L(N))).toString(), be = T(de), Oe = L(be);
        k(ne, Oe), H ? k(le, Oe, J) : (K(be), b("onDecrement"));
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
        var de = new sr(L(W)).plus(new sr(L(N))).toString(), be = T(de), Oe = L(be);
        k(ne, Oe), H ? k(le, Oe, J) : (K(be), b("onIncrement"));
      }
    }, g = () => {
      var {
        press: Y,
        lazyChange: j
      } = e;
      !Y || j || (m = window.setTimeout(() => {
        z();
      }, yl));
    }, M = () => {
      var {
        press: Y,
        lazyChange: j
      } = e;
      !Y || j || (f = window.setTimeout(() => {
        $();
      }, yl));
    }, D = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, C = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, $ = () => {
      d = window.setTimeout(() => {
        I(), $();
      }, gl);
    }, z = () => {
      v = window.setTimeout(() => {
        P(), z();
      }, gl);
    }, K = (Y) => {
      n.value = Y;
      var j = L(Y);
      k(e["onUpdate:modelValue"], j);
    }, J = (Y) => {
      K(T(String(Y))), b("onLazyChange");
    };
    return k(r, w), te(() => e.modelValue, (Y) => {
      K(T(String(Y))), k(e.onChange, L(Y));
    }), K(T(String(e.modelValue))), {
      n: nh,
      classes: rh,
      formatElevation: mn,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: S,
      validate: h,
      reset: y,
      resetValidation: i,
      handleChange: E,
      decrement: P,
      increment: I,
      pressDecrement: g,
      pressIncrement: M,
      releaseDecrement: D,
      releaseIncrement: C,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
Uu.render = th;
const qr = Uu;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var HS = qr, Hu = 60, Fu = Hu * 60, Yu = Fu * 24, oh = Yu * 7, Xa = 1e3, Co = Hu * Xa, bl = Fu * Xa, ih = Yu * Xa, lh = oh * Xa, Ei = "millisecond", Ha = "second", Fa = "minute", Ya = "hour", nr = "day", Lt = "week", Mn = "month", ju = "quarter", rr = "year", ja = "date", sh = "YYYY-MM-DDTHH:mm:ssZ", wl = "Invalid Date", uh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, dh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const vh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var xo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, fh = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + xo(t, 2, "0") + ":" + xo(o, 2, "0");
}, ch = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Mn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Mn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, mh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, ph = function(n) {
  var r = {
    M: Mn,
    y: rr,
    w: Lt,
    d: nr,
    D: ja,
    h: Ya,
    m: Fa,
    s: Ha,
    ms: Ei,
    Q: ju
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, hh = function(n) {
  return n === void 0;
};
const gh = {
  s: xo,
  z: fh,
  m: ch,
  a: mh,
  p: ph,
  u: hh
};
var it = "en", Xr = {};
Xr[it] = vh;
var Ii = function(n) {
  return n instanceof fo;
}, Kt = function e(n, r, a) {
  var t;
  if (!n)
    return it;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Xr[o] && (t = o), r && (Xr[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Xr[i] = n, t = i;
  }
  return !a && t && (it = t), t || !a && it;
}, oe = function(n, r) {
  if (Ii(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new fo(a);
}, yh = function(n, r) {
  return oe(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Be = gh;
Be.l = Kt;
Be.i = Ii;
Be.w = yh;
var bh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Be.u(r))
    return /* @__PURE__ */ new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(uh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, fo = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Kt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = bh(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Be;
  }, n.isValid = function() {
    return this.$d.toString() !== wl;
  }, n.isSame = function(a, t) {
    var o = oe(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return oe(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < oe(a);
  }, n.$g = function(a, t, o) {
    return Be.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Be.u(t) ? !0 : t, i = Be.p(a), s = function(w, V) {
      var S = Be.w(o.$u ? Date.UTC(o.$y, V, w) : new Date(o.$y, V, w), o);
      return l ? S : S.endOf(nr);
    }, u = function(w, V) {
      var S = [0, 0, 0, 0], T = [23, 59, 59, 999];
      return Be.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? S : T).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case rr:
        return l ? s(1, 0) : s(31, 11);
      case Mn:
        return l ? s(1, v) : s(0, v + 1);
      case Lt: {
        var h = this.$locale().weekStart || 0, b = (d < h ? d + 7 : d) - h;
        return s(l ? f - b : f + (6 - b), v);
      }
      case nr:
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
    var o, l = Be.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[nr] = i + "Date", o[ja] = i + "Date", o[Mn] = i + "Month", o[rr] = i + "FullYear", o[Ya] = i + "Hours", o[Fa] = i + "Minutes", o[Ha] = i + "Seconds", o[Ei] = i + "Milliseconds", o)[l], u = l === nr ? this.$D + (t - this.$W) : t;
    if (l === Mn || l === rr) {
      var d = this.clone().set(ja, 1);
      d.$d[s](u), d.init(), this.$d = d.set(ja, Math.min(this.$D, d.daysInMonth())).$d;
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
      var m = oe(o);
      return Be.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Mn)
      return this.set(Mn, this.$M + a);
    if (i === rr)
      return this.set(rr, this.$y + a);
    if (i === nr)
      return s(1);
    if (i === Lt)
      return s(7);
    var u = (l = {}, l[Fa] = Co, l[Ya] = bl, l[Ha] = Xa, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Be.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || wl;
    var l = a || sh, i = Be.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, h = function(S, T, E, P) {
      return S && (S[T] || S(t, l)) || E[T].slice(0, P);
    }, b = function(S) {
      return Be.s(s % 12 || 12, S, "0");
    }, y = m || function(V, S, T) {
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
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: Be.s(u, 2, "0"),
      s: String(this.$s),
      ss: Be.s(this.$s, 2, "0"),
      SSS: Be.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(dh, function(V, S) {
      return S || w[V] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Be.p(t), s = oe(a), u = (s.utcOffset() - this.utcOffset()) * Co, d = this - s, v = Be.m(this, s);
    return v = (l = {}, l[rr] = v / 12, l[Mn] = v, l[ju] = v / 3, l[Lt] = (d - u) / lh, l[nr] = (d - u) / ih, l[Ya] = d / bl, l[Fa] = d / Co, l[Ha] = d / Xa, l)[i] || d, o ? v : Be.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Mn).$D;
  }, n.$locale = function() {
    return Xr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Kt(a, t, !0);
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
}(), Wu = fo.prototype;
oe.prototype = Wu;
[["$ms", Ei], ["$s", Ha], ["$m", Fa], ["$H", Ya], ["$W", nr], ["$M", Mn], ["$y", rr], ["$D", ja]].forEach(function(e) {
  Wu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
oe.extend = function(e, n) {
  return e.$i || (e(n, fo, oe), e.$i = !0), oe;
};
oe.locale = Kt;
oe.isDayjs = Ii;
oe.unix = function(e) {
  return oe(e * 1e3);
};
oe.en = Xr[it];
oe.Ls = Xr;
oe.p = {};
const Gu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, qu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function wh(e) {
  return ["date", "month"].includes(e);
}
var Rt = [{
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
}], Ch = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: wh
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
  n: Sh
} = x("picker-header");
function kh(e, n) {
  var r = ae("var-icon"), a = ae("var-button");
  return p(), O(
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
          default: ve(() => [(p(), O(
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
var Xu = Q({
  name: "PanelHeader",
  components: {
    VarButton: _e,
    VarIcon: Pe
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
    return te(() => e.date, () => {
      t.value = 0;
    }), {
      n: Sh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Xu.render = kh;
const Ku = Xu;
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
oe.extend(Gu);
oe.extend(qu);
var {
  n: Bt,
  classes: $h
} = x("month-picker"), {
  n: Et
} = x("date-picker");
function Th(e, n) {
  var r = ae("panel-header"), a = ae("var-button");
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
          default: ve(() => [(p(), O("ul", {
            key: e.panelKey
          }, [(p(!0), O(
            Ve,
            null,
            Fe(e.MONTH_LIST, (t) => (p(), O("li", {
              key: t.index
            }, [Z(
              a,
              Ne({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, ei({}, e.buttonProps(t.index)), {
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
var Zu = Q({
  name: "MonthPickerPanel",
  components: {
    VarButton: _e,
    PanelHeader: Ku
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
      } = e, P = !0, I = !0, g = S + "-" + V;
      return E && (P = oe(g).isSameOrBefore(oe(E), "month")), T && (I = oe(g).isSameOrAfter(oe(T), "month")), P && I;
    }, m = (V) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: T,
          chooseRangeMonth: E
        },
        componentProps: {
          type: P,
          range: I
        }
      } = e;
      if (I) {
        if (!E.length)
          return !1;
        var g = oe(V).isSameOrBefore(oe(E[1]), "month"), M = oe(V).isSameOrAfter(oe(E[0]), "month");
        return g && M;
      }
      return P === "month" ? S.includes(V) : T.some((D) => D.includes(V));
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
          color: P,
          multiple: I,
          range: g
        }
      } = e, M = T + "-" + V, D = () => g || I ? m(M) : (S == null ? void 0 : S.index) === V && u.value, C = () => f(V) ? E ? !E(M) : !1 : !0, $ = C(), z = () => $ ? !0 : g || I ? !m(M) : !u.value || (S == null ? void 0 : S.index) !== V, K = () => d.value && t === V && e.componentProps.showCurrent ? (g || I || u.value) && $ ? !0 : g || I ? !m(M) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, J = () => $ ? "" : K() ? P ?? "" : D() ? "" : Et() + "-color-cover", Y = J().startsWith(Et());
      return {
        outline: K(),
        text: z(),
        color: z() ? "" : P,
        textColor: Y ? "" : J(),
        [Et() + "-color-cover"]: Y,
        class: $h(Bt("button"), [$, Bt("button--disabled")]),
        disabled: $
      };
    }, b = (V, S) => {
      var T = S.currentTarget;
      T.classList.contains(Bt("button--disabled")) || r("choose-month", V);
    }, y = (V) => {
      o.value = V === "prev", l.value += V === "prev" ? -1 : 1, r("check-preview", "year", V);
    }, w = (V) => {
      i.value.checkDate(V);
    };
    return te(() => e.preview.previewYear, (V) => {
      var {
        componentProps: {
          min: S,
          max: T
        }
      } = e;
      T && (s.right = !oe("" + (L(V) + 1)).isSameOrBefore(oe(T), "year")), S && (s.left = !oe("" + (L(V) - 1)).isSameOrAfter(oe(S), "year"));
    }, {
      immediate: !0
    }), {
      n: Bt,
      nDate: Et,
      pack: Xe,
      MONTH_LIST: Rt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: w,
      buttonProps: h,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: y
    };
  }
});
Zu.render = Th;
const Ph = Zu;
var {
  n: Cl,
  classes: Oh
} = x("year-picker"), Vh = ["onClick"];
function Mh(e, n) {
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), O(
      Ve,
      null,
      Fe(e.yearList, (r) => (p(), O(
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
        Vh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Ju = Q({
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
      for (var h = u[0]; h >= u[1]; h--)
        o.push(h);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return tn(() => {
      var o = document.querySelector("." + Cl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Cl,
      classes: Oh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Ju.render = Mh;
const Bh = Ju;
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
oe.extend(Gu);
oe.extend(qu);
var {
  n: Ra,
  classes: Eh
} = x("day-picker"), {
  n: It
} = x("date-picker");
function Ih(e, n) {
  var r = ae("panel-header"), a = ae("var-button");
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
          default: ve(() => [(p(), O("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(p(!0), O(
              Ve,
              null,
              Fe(e.sortWeekList, (t) => (p(), O(
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
            [(p(!0), O(
              Ve,
              null,
              Fe(e.days, (t, o) => (p(), O("li", {
                key: o
              }, [Z(
                a,
                Ne({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, ni({}, e.buttonProps(t)), {
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
var Qu = Q({
  name: "DayPickerPanel",
  components: {
    VarButton: _e,
    PanelHeader: Ku
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
      var g;
      return e.choose.chooseYear === e.preview.previewYear && ((g = e.choose.chooseMonth) == null ? void 0 : g.index) === e.preview.previewMonth.index;
    }), m = R(() => {
      var g = tt.findIndex((M) => M.index === e.componentProps.firstDayOfWeek);
      return g === -1 || g === 0 ? tt : tt.slice(g).concat(tt.slice(0, g));
    }), h = (g) => {
      var M, D;
      return (M = (D = Xe.value.datePickerWeekDict) == null ? void 0 : D[g].abbr) != null ? M : "";
    }, b = (g) => g > 0 ? g : "", y = () => {
      var {
        preview: {
          previewMonth: g,
          previewYear: M
        }
      } = e, D = oe(M + "-" + g.index).daysInMonth(), C = oe(M + "-" + g.index + "-01").day(), $ = m.value.findIndex((z) => z.index === "" + C);
      l.value = [...Array($).fill(-1), ...Array.from(Array(D + 1).keys())].filter((z) => z);
    }, w = () => {
      var {
        preview: {
          previewYear: g,
          previewMonth: M
        },
        componentProps: {
          max: D,
          min: C
        }
      } = e;
      if (D) {
        var $ = g + "-" + (L(M.index) + 1);
        d.right = !oe($).isSameOrBefore(oe(D), "month");
      }
      if (C) {
        var z = g + "-" + (L(M.index) - 1);
        d.left = !oe(z).isSameOrAfter(oe(C), "month");
      }
    }, V = (g) => {
      var {
        preview: {
          previewYear: M,
          previewMonth: D
        },
        componentProps: {
          min: C,
          max: $
        }
      } = e, z = !0, K = !0, J = M + "-" + D.index + "-" + g;
      return $ && (z = oe(J).isSameOrBefore(oe($), "day")), C && (K = oe(J).isSameOrAfter(oe(C), "day")), z && K;
    }, S = (g) => {
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
        var $ = oe(g).isSameOrBefore(oe(D[1]), "day"), z = oe(g).isSameOrAfter(oe(D[0]), "day");
        return $ && z;
      }
      return M.includes(g);
    }, T = (g) => {
      if (g < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ra("button"),
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
      } = e, Y = D + "-" + C.index + "-" + g, j = () => J || K ? S(Y) : L(M) === g && f.value, se = () => V(g) ? $ ? !$(Y) : !1 : !0, q = se(), H = () => q ? !0 : J || K ? !S(Y) : !f.value || L(M) !== g, N = () => v.value && L(o) === g && e.componentProps.showCurrent ? (J || K || f.value) && q ? !0 : J || K ? !S(Y) : f.value ? M !== o : !0 : !1, W = () => q ? "" : N() ? z ?? "" : j() ? "" : It() + "-color-cover", ne = W().startsWith(It());
      return {
        text: H(),
        outline: N(),
        textColor: ne ? "" : W(),
        [It() + "-color-cover"]: ne,
        class: Eh(Ra("button"), Ra("button--usable"), [q, Ra("button--disabled")]),
        disabled: q
      };
    }, E = (g) => {
      i.value = g === "prev", s.value += g === "prev" ? -1 : 1, r("check-preview", "month", g);
    }, P = (g, M) => {
      var D = M.currentTarget;
      D.classList.contains(Ra("button--disabled")) || r("choose-day", g);
    }, I = (g) => {
      u.value.checkDate(g);
    };
    return tn(() => {
      y(), w();
    }), te(() => e.preview, () => {
      y(), w();
    }), {
      n: Ra,
      nDate: It,
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
      chooseDay: P,
      buttonProps: T
    };
  }
});
Qu.render = Ih;
const Nh = Qu;
var {
  n: Dh,
  classes: Ah
} = x("date-picker");
function zh(e, n) {
  var r = ae("year-picker-panel"), a = ae("month-picker-panel"), t = ae("day-picker-panel");
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
              return [e.type === "month" ? (p(), O("div", {
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
              )])])) : (p(), O("div", {
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
              )]) : F(e.$slots, "date", Ct(Ne({
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
          )) : _("v-if", !0)]),
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
var _u = Q({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Ph,
    YearPickerPanel: Bh,
    DayPickerPanel: Nh
  },
  props: Ch,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = oe().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Rt.find((ie) => ie.index === i), u = B(!1), d = B(!1), v = B(!0), f = B(), m = B(), h = B(), b = B(s), y = B(l), w = B(!1), V = B([]), S = B([]), T = B([]), E = B([]), P = B(null), I = B(null), g = Le({
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
      previewYear: y.value
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
        var en = E.value.map((yo) => oe(yo).format("YYYY-MM-DD"));
        return en.length ? en[0] + " ~ " + en[1] : "";
      }
      if ($e)
        return "" + S.value.length + Xe.value.datePickerSelected;
      if (!m.value || !f.value || !h.value)
        return "";
      var gn = oe(m.value + "-" + f.value.index + "-" + h.value).day(), La = tt.find((yo) => yo.index === "" + gn), Wi = (ie = (we = Xe.value.datePickerWeekDict) == null ? void 0 : we[La.index].name) != null ? ie : "", Pv = (me = (Se = Xe.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? me : "", Ov = Ba(h.value, 2, "0");
      return Xe.value.lang === "zh-CN" ? f.value.index + "-" + Ov + " " + Wi.slice(0, 3) : Wi.slice(0, 3) + ", " + Pv.slice(0, 3) + " " + h.value;
    }), z = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), K = R(() => !e.touchable || ["", "year"].includes(z.value)), J = R(() => {
      var ie, we, me, Se, $e = oe(m.value + "-" + ((ie = f.value) == null ? void 0 : ie.index) + "-" + h.value).day(), He = h.value ? Ba(h.value, 2, "0") : "";
      return {
        week: "" + $e,
        year: (we = m.value) != null ? we : "",
        month: (me = (Se = f.value) == null ? void 0 : Se.index) != null ? me : "",
        date: He
      };
    }), Y = R(() => M.value.chooseRangeDay.map((ie) => oe(ie).format("YYYY-MM-DD"))), j = R(() => m.value === y.value), se = R(() => {
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
        var ie = z.value === "month" ? P : I;
        ro(() => {
          ie.value.forwardRef(a), nt();
        });
      }
    }, le = (ie, we) => {
      var me = we === "month" ? T : E;
      if (me.value = v.value ? [ie, ie] : [me.value[0], ie], v.value = !v.value, v.value) {
        var Se = oe(me.value[0]).isAfter(me.value[1]), $e = Se ? [me.value[1], me.value[0]] : [...me.value];
        k(e["onUpdate:modelValue"], $e), k(e.onChange, $e);
      }
    }, de = (ie, we) => {
      var me = we === "month" ? V : S, Se = we === "month" ? "YYYY-MM" : "YYYY-MM-DD", $e = me.value.map((en) => oe(en).format(Se)), He = $e.findIndex((en) => en === ie);
      He === -1 ? $e.push(ie) : $e.splice(He, 1), k(e["onUpdate:modelValue"], $e), k(e.onChange, $e);
    }, be = (ie, we) => !m.value || !f.value ? !1 : j.value ? ie === "month" ? we.index < f.value.index : se.value ? we < L(h.value) : f.value.index > b.value.index : m.value > y.value, Oe = (ie) => {
      var {
        readonly: we,
        range: me,
        multiple: Se,
        onChange: $e,
        "onUpdate:modelValue": He
      } = e;
      if (!(ie < 0 || we)) {
        w.value = be("day", ie);
        var en = y.value + "-" + b.value.index + "-" + ie, gn = oe(en).format("YYYY-MM-DD");
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
        var La = y.value + "-" + ie.index;
        Se ? le(La, "month") : $e ? de(La, "month") : (k(gn, La), k(He, La));
      } else
        b.value = ie, k(en, L(y.value), L(b.value.index));
      d.value = !1;
    }, ee = (ie) => {
      y.value = "" + ie, u.value = !1, d.value = !0, k(e.onPreview, L(y.value), L(b.value.index));
    }, ue = (ie, we) => {
      var me = we === "prev" ? -1 : 1;
      if (ie === "year")
        y.value = "" + (L(y.value) + me);
      else {
        var Se = L(b.value.index) + me;
        Se < 1 && (y.value = "" + (L(y.value) - 1), Se = 12), Se > 12 && (y.value = "" + (L(y.value) + 1), Se = 1), b.value = Rt.find(($e) => L($e.index) === Se);
      }
      k(e.onPreview, L(y.value), L(b.value.index));
    }, ye = () => (e.multiple || e.range) && !Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Ae = (ie) => Te(ie) ? !1 : ie === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Me = (ie, we) => {
      var me = we === "month" ? T : E, Se = we === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = ie.map((gn) => oe(gn).format(Se)).slice(0, 2), He = me.value.some((gn) => Ae(gn));
      if (!He) {
        me.value = $e;
        var en = oe(me.value[0]).isAfter(me.value[1]);
        me.value.length === 2 && en && (me.value = [me.value[1], me.value[0]]);
      }
    }, Ie = (ie, we) => {
      var me = we === "month" ? V : S, Se = we === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = Array.from(new Set(ie.map((He) => oe(He).format(Se))));
      me.value = $e.filter((He) => He !== "Invalid Date");
    }, Mr = (ie) => {
      var we = oe(ie).format("YYYY-MM-D");
      if (!Ae(we)) {
        var [me, Se, $e] = we.split("-"), He = Rt.find((en) => en.index === Se);
        f.value = He, m.value = me, h.value = $e, b.value = He, y.value = me;
      }
    }, nt = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return te(() => e.modelValue, (ie) => {
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
          Mr(ie);
    }, {
      immediate: !0
    }), te(z, nt), {
      n: Dh,
      classes: Ah,
      monthPanelEl: P,
      dayPanelEl: I,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: h,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: $,
      getPanelType: z,
      getChoose: M,
      getPreview: D,
      componentProps: g,
      slotProps: J,
      formatRange: Y,
      clickEl: q,
      handleTouchstart: H,
      handleTouchmove: W,
      handleTouchend: ne,
      getChooseDay: Oe,
      getChooseMonth: on,
      getChooseYear: ee,
      checkPreview: ue,
      formatElevation: mn
    };
  }
});
_u.render = zh;
const Kr = _u;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var FS = Kr;
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
function Lh(e) {
  return ["left", "center", "right"].includes(e);
}
var Rh = ri({
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
    validator: Lh
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
}, Ke($t, [
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
  n: Uh,
  classes: Hh
} = x("dialog");
function Fh(e, n) {
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
          style: ai({
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
          )) : _("v-if", !0), e.confirmButton ? (p(), ge(
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
          )) : _("v-if", !0)],
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
var xu = Q({
  name: "VarDialog",
  components: {
    VarPopup: wn,
    VarButton: _e
  },
  inheritAttrs: !1,
  props: Rh,
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
    return te(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), te(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: Uh,
      classes: Hh,
      pack: Xe,
      dt: no,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: he
    };
  }
});
xu.render = Fh;
const pr = xu;
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
var tr, Jt = {};
function Yh(e) {
  return e === void 0 && (e = {}), je(e) ? Zt({}, Jt, {
    message: e
  }) : Zt({}, Jt, e);
}
function Zn(e) {
  return kt() ? new Promise((n) => {
    Zn.close();
    var r = Yh(e), a = Le(r);
    a.teleport = "body", tr = a;
    var {
      unmountInstance: t
    } = et(pr, a, {
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
        k(a.onClosed), t(), tr === a && (tr = null);
      },
      onRouteChange: () => {
        t(), tr === a && (tr = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
Zn.setDefaultOptions = function(e) {
  Jt = e;
};
Zn.resetDefaultOptions = function() {
  Jt = {};
};
Zn.close = function() {
  if (tr != null) {
    var e = tr;
    tr = null, ze().then(() => {
      e.show = !1;
    });
  }
};
pr.install = function(e) {
  e.component(pr.name, pr);
};
Zn.install = function(e) {
  e.component(pr.name, pr);
};
Zn.Component = pr;
var YS = pr, jh = {
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
  n: Wh,
  classes: Gh
} = x("divider");
function qh(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [F(e.$slots, "default", {}, () => [e.description ? (p(), O(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var ed = Q({
  name: "VarDivider",
  props: jh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Le({
      withText: !1
    }), t = R(() => To(e.inset) ? e.inset : !0), o = R(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (To(i) || i === 0)
        return Wa({}, d);
      var v = L(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Wa({}, d, {
        height: "calc(80% - " + he(f) + ")"
      }) : Wa({}, d, {
        width: "calc(100% - " + he(f) + ")",
        left: v > 0 ? he(f) : he(0)
      });
    }), l = () => {
      a.withText = !!r.default || !!e.description;
    };
    return tn(() => {
      l();
    }), xt(() => {
      l();
    }), Wa({
      n: Wh,
      classes: Gh
    }, Av(a), {
      style: o,
      isInset: t
    });
  }
});
ed.render = qh;
const Zr = ed;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var jS = Zr, Xh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ut(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Xh[n];
  });
}
var Hn = "top", Tr = "bottom", Ea = "right", hr = "left", co = "auto", mo = [Hn, Tr, Ea, hr], po = "start", pt = "end", Kh = "clippingParents", nd = "viewport", rt = "popper", Zh = "reference", Sl = /* @__PURE__ */ mo.reduce(function(e, n) {
  return e.concat([n + "-" + po, n + "-" + pt]);
}, []), rd = /* @__PURE__ */ [].concat(mo, [co]).reduce(function(e, n) {
  return e.concat([n, n + "-" + po, n + "-" + pt]);
}, []), Jh = "beforeRead", Qh = "read", _h = "afterRead", xh = "beforeMain", eg = "main", ng = "afterMain", rg = "beforeWrite", ag = "write", tg = "afterWrite", ti = [Jh, Qh, _h, xh, eg, ng, rg, ag, tg];
function Fn(e) {
  return e.split("-")[0];
}
var og = {
  start: "end",
  end: "start"
};
function kl(e) {
  return e.replace(/start|end/g, function(n) {
    return og[n];
  });
}
function On(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ia(e) {
  var n = On(e).Element;
  return e instanceof n || e instanceof Element;
}
function Cn(e) {
  var n = On(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Ni(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = On(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Vr(e) {
  return ((Ia(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var lt = Math.max, $l = Math.min, Ka = Math.round;
function oi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ad() {
  return !/^((?!chrome|android).)*safari/i.test(oi());
}
function Za(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && Cn(e) && (t = e.offsetWidth > 0 && Ka(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ka(a.height) / e.offsetHeight || 1);
  var l = Ia(e) ? On(e) : window, i = l.visualViewport, s = !ad() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Di(e) {
  var n = On(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Ai(e) {
  return Za(Vr(e)).left + Di(e).scrollLeft;
}
function ig(e, n) {
  var r = On(e), a = Vr(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = ad();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Ai(e),
    y: s
  };
}
function Nn(e) {
  return On(e).getComputedStyle(e);
}
function lg(e) {
  var n, r = Vr(e), a = Di(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = lt(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = lt(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Ai(e), s = -a.scrollTop;
  return Nn(t || r).direction === "rtl" && (i += lt(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Rn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ho(e) {
  return Rn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ni(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Vr(e)
  );
}
function zi(e) {
  var n = Nn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function td(e) {
  return ["html", "body", "#document"].indexOf(Rn(e)) >= 0 ? e.ownerDocument.body : Cn(e) && zi(e) ? e : td(ho(e));
}
function st(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = td(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = On(a), l = t ? [o].concat(o.visualViewport || [], zi(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(st(ho(l)))
  );
}
function sg(e) {
  return ["table", "td", "th"].indexOf(Rn(e)) >= 0;
}
function Tl(e) {
  return !Cn(e) || // https://github.com/popperjs/popper-core/issues/837
  Nn(e).position === "fixed" ? null : e.offsetParent;
}
function ug(e) {
  var n = /firefox/i.test(oi()), r = /Trident/i.test(oi());
  if (r && Cn(e)) {
    var a = Nn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = ho(e);
  for (Ni(t) && (t = t.host); Cn(t) && ["html", "body"].indexOf(Rn(t)) < 0; ) {
    var o = Nn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Li(e) {
  for (var n = On(e), r = Tl(e); r && sg(r) && Nn(r).position === "static"; )
    r = Tl(r);
  return r && (Rn(r) === "html" || Rn(r) === "body" && Nn(r).position === "static") ? n : r || ug(e) || n;
}
function dg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Ni(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function ii(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function vg(e, n) {
  var r = Za(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Pl(e, n, r) {
  return n === nd ? ii(ig(e, r)) : Ia(n) ? vg(n, r) : ii(lg(Vr(e)));
}
function fg(e) {
  var n = st(ho(e)), r = ["absolute", "fixed"].indexOf(Nn(e).position) >= 0, a = r && Cn(e) ? Li(e) : e;
  return Ia(a) ? n.filter(function(t) {
    return Ia(t) && dg(t, a) && Rn(t) !== "body";
  }) : [];
}
function cg(e, n, r, a) {
  var t = n === "clippingParents" ? fg(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = Pl(e, u, a);
    return s.top = lt(d.top, s.top), s.right = $l(d.right, s.right), s.bottom = $l(d.bottom, s.bottom), s.left = lt(d.left, s.left), s;
  }, Pl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function ht(e) {
  return e.split("-")[1];
}
function mg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function od(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Fn(a) : null, o = a ? ht(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Hn:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case Tr:
      s = {
        x: l,
        y: n.y + n.height
      };
      break;
    case Ea:
      s = {
        x: n.x + n.width,
        y: i
      };
      break;
    case hr:
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
  var u = t ? mg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case po:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case pt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function pg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function hg(e) {
  return Object.assign({}, pg(), e);
}
function gg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function id(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Kh : i, u = r.rootBoundary, d = u === void 0 ? nd : u, v = r.elementContext, f = v === void 0 ? rt : v, m = r.altBoundary, h = m === void 0 ? !1 : m, b = r.padding, y = b === void 0 ? 0 : b, w = hg(typeof y != "number" ? y : gg(y, mo)), V = f === rt ? Zh : rt, S = e.rects.popper, T = e.elements[h ? V : f], E = cg(Ia(T) ? T : T.contextElement || Vr(e.elements.popper), s, d, l), P = Za(e.elements.reference), I = od({
    reference: P,
    element: S,
    strategy: "absolute",
    placement: t
  }), g = ii(Object.assign({}, S, I)), M = f === rt ? g : P, D = {
    top: E.top - M.top + w.top,
    bottom: M.bottom - E.bottom + w.bottom,
    left: E.left - M.left + w.left,
    right: M.right - E.right + w.right
  }, C = e.modifiersData.offset;
  if (f === rt && C) {
    var $ = C[t];
    Object.keys(D).forEach(function(z) {
      var K = [Ea, Tr].indexOf(z) >= 0 ? 1 : -1, J = [Hn, Tr].indexOf(z) >= 0 ? "y" : "x";
      D[z] += $[J] * K;
    });
  }
  return D;
}
function yg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? rd : s, d = ht(a), v = d ? i ? Sl : Sl.filter(function(h) {
    return ht(h) === d;
  }) : mo, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(h, b) {
    return h[b] = id(e, {
      placement: b,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Fn(b)], h;
  }, {});
  return Object.keys(m).sort(function(h, b) {
    return m[h] - m[b];
  });
}
function bg(e) {
  if (Fn(e) === co)
    return [];
  var n = Ut(e);
  return [kl(e), n, kl(n)];
}
function wg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, h = m === void 0 ? !0 : m, b = r.allowedAutoPlacements, y = n.options.placement, w = Fn(y), V = w === y, S = s || (V || !h ? [Ut(y)] : bg(y)), T = [y].concat(S).reduce(function(le, de) {
      return le.concat(Fn(de) === co ? yg(n, {
        placement: de,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: b
      }) : de);
    }, []), E = n.rects.reference, P = n.rects.popper, I = /* @__PURE__ */ new Map(), g = !0, M = T[0], D = 0; D < T.length; D++) {
      var C = T[D], $ = Fn(C), z = ht(C) === po, K = [Hn, Tr].indexOf($) >= 0, J = K ? "width" : "height", Y = id(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), j = K ? z ? Ea : hr : z ? Tr : Hn;
      E[J] > P[J] && (j = Ut(j));
      var se = Ut(j), q = [];
      if (o && q.push(Y[$] <= 0), i && q.push(Y[j] <= 0, Y[se] <= 0), q.every(function(le) {
        return le;
      })) {
        M = C, g = !1;
        break;
      }
      I.set(C, q);
    }
    if (g)
      for (var H = h ? 3 : 1, N = function(de) {
        var be = T.find(function(Oe) {
          var on = I.get(Oe);
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
const Cg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Sg(e, n, r) {
  var a = Fn(e), t = [hr, Hn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [hr, Ea].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function kg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = rd.reduce(function(d, v) {
    return d[v] = Sg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const $g = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: kg
};
function Tg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Pg(e) {
  return e === On(e) || !Cn(e) ? Di(e) : Tg(e);
}
function Og(e) {
  var n = e.getBoundingClientRect(), r = Ka(n.width) / e.offsetWidth || 1, a = Ka(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Vg(e, n, r) {
  r === void 0 && (r = !1);
  var a = Cn(n), t = Cn(n) && Og(n), o = Vr(n), l = Za(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Rn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  zi(o)) && (i = Pg(n)), Cn(n) ? (s = Za(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Ai(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Mg(e) {
  var n = Za(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Bg(e) {
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
function Eg(e) {
  var n = Bg(e);
  return ti.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Ig(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function xn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Br = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ng = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ol = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Dg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Ol).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(xn(Br, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(xn(Br, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          ti.indexOf(n.phase) < 0 && console.error(xn(Br, n.name, '"phase"', "either " + ti.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(xn(Br, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(xn(Br, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(xn(Br, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(xn(Br, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Ol.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(xn(Ng, String(n.name), a, a));
      });
    });
  });
}
function Ag(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function zg(e) {
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
var Vl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Lg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Ml = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Bl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Rg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Ml : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ml, o),
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
          reference: Ia(i) ? st(i) : i.contextElement ? st(i.contextElement) : [],
          popper: st(s)
        };
        var S = Eg(zg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var T = Ag([].concat(S, d.options.modifiers), function(C) {
            var $ = C.name;
            return $;
          });
          if (Dg(T), Fn(d.options.placement) === co) {
            var E = d.orderedModifiers.find(function(C) {
              var $ = C.name;
              return $ === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var P = Nn(s), I = P.marginTop, g = P.marginRight, M = P.marginBottom, D = P.marginLeft;
          [I, g, M, D].some(function(C) {
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
          if (!Bl(V, S)) {
            process.env.NODE_ENV !== "production" && console.error(Vl);
            return;
          }
          d.rects = {
            reference: Vg(V, Li(S), d.options.strategy === "fixed"),
            popper: Mg(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var T = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (T += 1, T > 100)) {
              console.error(Lg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var P = d.orderedModifiers[E], I = P.fn, g = P.options, M = g === void 0 ? {} : g, D = P.name;
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
      update: Ig(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!Bl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Vl), m;
    m.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function h() {
      d.orderedModifiers.forEach(function(y) {
        var w = y.name, V = y.options, S = V === void 0 ? {} : V, T = y.effect;
        if (typeof T == "function") {
          var E = T({
            state: d,
            name: w,
            instance: m,
            options: S
          }), P = function() {
          };
          v.push(E || P);
        }
      });
    }
    function b() {
      v.forEach(function(y) {
        return y();
      }), v = [];
    }
    return m;
  };
}
var Nt = {
  passive: !0
};
function Ug(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = On(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Nt);
  }), i && s.addEventListener("resize", r.update, Nt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Nt);
    }), i && s.removeEventListener("resize", r.update, Nt);
  };
}
const Hg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ug,
  data: {}
};
function Fg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = od({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Yg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Fg,
  data: {}
};
var jg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Wg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ka(n * t) / t || 0,
    y: Ka(r * t) / t || 0
  };
}
function El(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, h = l.y, b = h === void 0 ? 0 : h, y = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = y.x, b = y.y;
  var w = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), S = hr, T = Hn, E = window;
  if (u) {
    var P = Li(r), I = "clientHeight", g = "clientWidth";
    if (P === On(r) && (P = Vr(r), Nn(P).position !== "static" && i === "absolute" && (I = "scrollHeight", g = "scrollWidth")), P = P, t === Hn || (t === hr || t === Ea) && o === pt) {
      T = Tr;
      var M = v && P === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[I]
      );
      b -= M - a.height, b *= s ? 1 : -1;
    }
    if (t === hr || (t === Hn || t === Tr) && o === pt) {
      S = Ea;
      var D = v && P === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[g]
      );
      m -= D - a.width, m *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: i
  }, u && jg), $ = d === !0 ? Wg({
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
function Gg(e) {
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
    placement: Fn(n.placement),
    variation: ht(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, El(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, El(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const qg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Gg,
  data: {}
};
function Xg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !Cn(o) || !Rn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Kg(e) {
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
      !Cn(t) || !Rn(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Zg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Xg,
  effect: Kg,
  requires: ["computeStyles"]
};
var Jg = [Hg, Yg, qg, Zg], Qg = /* @__PURE__ */ Rg({
  defaultModifiers: Jg
});
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Qt.apply(this, arguments);
}
function Il(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Nl(e) {
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
function ld(e) {
  var n = B(null), r = B(null), a = B({
    width: 0,
    height: 0
  }), t = Ts(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(P, I) {
      I ? (S(), k(e.onOpen)) : k(e.onClose);
    }
  }), {
    zIndex: o
  } = Tt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: P,
      height: I
    } = window.getComputedStyle(n.value);
    a.value = {
      width: Ye(P),
      height: Ye(I)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, T());
  }, v = /* @__PURE__ */ function() {
    var P = Nl(function* () {
      e.trigger === "hover" && (s = !1, yield An(), !i && E());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var P = Nl(function* () {
      e.trigger === "hover" && (i = !1, yield An(), !s && E());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), h = () => {
    T();
  }, b = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  }, y = () => {
    e.trigger === "click" && b();
  }, w = () => {
    u();
    var P = {
      x: Ye(e.offsetX),
      y: Ye(e.offsetY)
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
  }, V = () => {
    var {
      placement: P,
      skidding: I,
      distance: g
    } = w(), M = [Qt({}, Cg, {
      enabled: t.value
    }), Qt({}, $g, {
      options: {
        offset: [I, g]
      }
    })];
    return {
      placement: P,
      modifiers: M
    };
  }, S = () => {
    l.setOptions(V());
  }, T = () => {
    var {
      disabled: P
    } = e;
    P || (t.value = !0, k(e["onUpdate:show"], !0));
  }, E = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  };
  return ks(n, "click", y), te(() => e.offsetX, S), te(() => e.offsetY, S), te(() => e.placement, S), te(() => e.disabled, E), _t(() => {
    var P, I = e.reference ? (P = n.value) == null ? void 0 : P.querySelector(e.reference) : n.value;
    l = Qg(I ?? n.value, r.value, V());
  }), _a(() => {
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
function _g(e) {
  return ["click", "hover"].includes(e);
}
function xg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function ey(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var ny = {
  type: {
    type: String,
    default: "default",
    validator: ey
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
    validator: _g
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: xg
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
  n: ry,
  classes: ay
} = x("tooltip");
function ty(e, n) {
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
    [F(e.$slots, "default"), (p(), ge(
      Da,
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
          ), [[Cr, e.show]])]),
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
var sd = Q({
  name: "VarTooltip",
  props: ny,
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
    } = ld(e);
    return {
      toSizeUnit: he,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: ry,
      classes: ay,
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
sd.render = ty;
const gr = sd;
gr.install = function(e) {
  e.component(gr.name, gr);
};
var WS = gr;
function oy(e) {
  return ["click"].includes(e);
}
var iy = {
  expandTrigger: {
    type: String,
    validator: oy
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
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
var {
  n: ly,
  classes: sy
} = x("ellipsis"), uy = {
  key: 0
};
function dy(e, n) {
  var r = ae("var-tooltip");
  return p(), ge(
    r,
    Ct(eo(e.tooltip)),
    {
      content: ve(() => [F(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), O(
          "span",
          uy,
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
var ud = Q({
  name: "VarEllipsis",
  components: {
    VarTooltip: gr
  },
  props: iy,
  setup(e) {
    var n = B(!1), r = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : li({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: ly,
      classes: sy,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
ud.render = dy;
const Jr = ud;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var GS = Jr;
function vy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function fy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function cy(e) {
  return ["click", "hover"].includes(e);
}
var my = {
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
    validator: ru
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: vy
  },
  direction: {
    type: String,
    default: "top",
    validator: fy
  },
  trigger: {
    type: String,
    default: "click",
    validator: cy
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
function Dl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !wt(e);
}
var {
  classes: Al,
  n: ln
} = x("fab");
const Qr = Q({
  name: "VarFab",
  inheritAttrs: !1,
  props: my,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = Ts(e, "active"), o = B(null), {
      disabled: l
    } = ao(), i = (f, m, h) => {
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
      default: () => [Z(Pe, {
        "var-fab-cover": !0,
        class: Al([t.value, ln("trigger-active-icon"), ln("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: ln("--trigger-icon-animation")
      }, null)]
    }), [[Cr, e.show]]), v = () => {
      var f, m, h = $s((m = r.default == null ? void 0 : r.default()) != null ? m : []);
      return Z("div", Ne({
        class: Al(ln(), ln("--position-" + e.position), ln("--direction-" + e.direction), [e.fixed, ln("--fixed"), ln("--absolute")], [e.safeArea, ln("--safe-area")]),
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
      }, Dl(f = d()) ? f : {
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
        }, [b]))]), [[Cr, e.show && t.value && h.length]])]
      })]);
    };
    return te(() => e.trigger, () => {
      t.value = !1;
    }), te(() => e.disabled, () => {
      t.value = !1;
    }), ks(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Z(Da, {
          to: f,
          disabled: l.value
        }, Dl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var qS = Qr;
function py(e) {
  return ["start", "end"].includes(e);
}
var hy = {
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
    validator: py
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
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
function gy(e) {
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
var {
  n: yy
} = x("form");
function by(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var dd = Q({
  name: "VarForm",
  props: hy,
  setup(e) {
    var n = R(() => e.disabled), r = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Om(), o = (d) => {
      setTimeout(() => {
        var v = Sr(d), f = v === window ? 0 : xi(v), m = xi(d) - f - Ye(e.scrollToErrorOffsetY);
        ft(v, {
          top: m,
          animation: Oo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = gy(function* () {
        var v = yield Promise.all(a.map((y) => {
          var {
            validate: w
          } = y;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = Hv(v, (y) => y === !1, e.scrollToError), m = f > -1;
          if (m) {
            var h, b = (h = a[f].instance.proxy) == null ? void 0 : h.$el;
            o(b);
          }
          return !m;
        }
        return v.every((y) => y === !0);
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
      n: yy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
dd.render = by;
const Yn = dd;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
Yn.useValidation = Tn;
Yn.useForm = Pn;
var XS = Yn;
function wy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Cy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: wy,
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
  n: Sy,
  classes: ky
} = x("image"), $y = ["alt", "title", "lazy-error", "lazy-loading"], Ty = ["alt", "title", "src"];
function Py(e, n) {
  var r = De("lazy"), a = De("ripple");
  return ke((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((p(), O(
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
      $y
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
      Ty
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var vd = Q({
  name: "VarImage",
  directives: {
    Lazy: ct,
    Ripple: We
  },
  props: Cy,
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
      n: Sy,
      classes: ky,
      toSizeUnit: he,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
vd.render = Py;
const _r = vd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var KS = _r, fd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Oy() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = cn(fd);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var cd = {
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
function Ll(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Vy(e) {
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
var My = 250, By = 20, {
  n: Ey,
  classes: Iy
} = x("swipe"), Ny = ["onClick"];
function Dy(e, n) {
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
      [F(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), F(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), O(
        Ve,
        null,
        Fe(e.length, (r, a) => (p(), O(
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
          Ny
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : _("v-if", !0)])],
    2
    /* CLASS */
  );
}
var md = Q({
  name: "VarSwipe",
  props: cd,
  setup(e) {
    var n = B(null), r = B(0), a = R(() => e.vertical), t = B(0), o = B(0), l = B(!1), i = B(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Oy(), v = !1, f = !1, m = -1, h, b, y, w, V, S = (N) => s.find((W) => {
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
    }, P = (N) => {
      var {
        loop: W
      } = e;
      return N === -1 ? W ? d.value - 1 : 0 : N === d.value ? W ? 0 : d.value - 1 : N;
    }, I = (N) => {
      var {
        loop: W
      } = e;
      return N < 0 ? W ? d.value - 1 : 0 : N > d.value - 1 ? W ? 0 : d.value - 1 : N;
    }, g = (N) => {
      var W = o.value >= r.value, ne = o.value <= -t.value, le = 0, de = -(t.value - r.value);
      l.value = !0, (W || ne) && (l.value = !0, o.value = ne ? le : de, S(0).setTranslate(0), S(d.value - 1).setTranslate(0)), ro(() => {
        l.value = !1, k(N);
      });
    }, M = () => {
      i.value = I(L(e.initialIndex));
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
        h = W, b = ne, y = performance.now(), f = !0, C(), g(() => {
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
        } = N.touches[0], be = Math.abs(le - h), Oe = Math.abs(de - b), on = $(be, Oe), ee = ne ? "vertical" : "horizontal";
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
        } = e, ne = N ? V < b : w < h, le = Math.abs(N ? b - V : h - w), de = performance.now() - y <= My && le >= By, be = de ? E(ne ? i.value + 1 : i.value - 1) : E();
        f = !1, l.value = !1, w = void 0, V = void 0, o.value = be * -r.value;
        var Oe = i.value;
        i.value = P(be), D(), Oe !== i.value && k(W, i.value);
      }
    }, Y = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), D(), setTimeout(() => {
        l.value = !1;
      }));
    }, j = (N) => {
      if (!(d.value <= 1)) {
        v = !0;
        var {
          loop: W,
          onChange: ne
        } = e, le = i.value;
        i.value = I(le + 1), (N == null ? void 0 : N.event) !== !1 && k(ne, i.value), g(() => {
          if (le === d.value - 1 && W) {
            S(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          le !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, se = (N) => {
      if (!(d.value <= 1)) {
        v = !0;
        var {
          loop: W,
          onChange: ne
        } = e, le = i.value;
        i.value = I(le - 1), (N == null ? void 0 : N.event) !== !1 && k(ne, i.value), g(() => {
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
    return u(H), te(() => d.value, /* @__PURE__ */ Vy(function* () {
      v = !1, yield An(), !v && M(), Y();
    })), Pr(Y), Qn(C), _a(C), Xn(() => window, "resize", Y), {
      n: Ey,
      classes: Iy,
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
md.render = Dy;
const jn = md;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var ZS = jn;
function Ay() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = fn(fd);
  return e || $n("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: zy
} = x("swipe-item");
function Ly(e, n) {
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
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var pd = Q({
  name: "VarSwipeItem",
  setup() {
    var e = B(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Ay(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: zy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
pd.render = Ly;
const Wn = pd;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var JS = Wn;
function si() {
  return si = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, si.apply(this, arguments);
}
var Ry = si({
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
}, Ke(cd, ["loop", "indicator", "onChange"]), Ke($t, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Rl,
  classes: Uy
} = x("image-preview"), Ul = 12, Hl = 200, Hy = 350, Fl = 200, Fy = ["src", "alt"];
function Yy(e, n) {
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
          default: ve(() => [(p(!0), O(
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
                    Fy
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
            }, () => [e.indicator && e.images.length > 1 ? (p(), O(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              re(i + 1) + " / " + re(s),
              3
              /* TEXT, CLASS */
            )) : _("v-if", !0)])];
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
      )) : _("v-if", !0)]), A(
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
var hd = Q({
  name: "VarImagePreview",
  components: {
    VarSwipe: jn,
    VarSwipeItem: Wn,
    VarPopup: wn,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Ry,
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
      }, Fl);
    }, b = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, y = (D) => d ? f(d, D) <= Ul && D.timestamp - d.timestamp <= Hl && d.target === D.target : !1, w = (D) => !D || !u || !d ? !1 : f(u, d) <= Ul && Date.now() - d.timestamp < Hy && (D === u.target || D.parentNode === u.target), V = (D) => {
      v = window.setTimeout(() => {
        w(D.target) && M(), u = null;
      }, Hl);
    }, S = (D) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = D, $ = m(C[0], D.currentTarget);
      if (u = $, y($)) {
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
      } = D.querySelector("." + Rl("image"));
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
    }, P = (D) => {
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
    }, I = (D, C, $) => D + C >= $ ? $ : D + C <= -$ ? -$ : D + C, g = (D) => {
      if (d) {
        var C = D.currentTarget, {
          touches: $
        } = D, z = m($[0], C);
        if (a.value > 1) {
          var K = z.clientX - d.clientX, J = z.clientY - d.clientY, Y = E(C), j = P(C);
          t.value = I(t.value, K, Y), o.value = I(o.value, J, j);
        }
        d = z;
      }
    }, M = () => {
      if (a.value > 1) {
        b(), setTimeout(() => k(e["onUpdate:show"], !1), Fl);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return te(() => e.show, (D) => {
      n.value = D;
    }, {
      immediate: !0
    }), {
      n: Rl,
      classes: Uy,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: S,
      handleTouchmove: g,
      handleTouchend: V,
      close: M
    };
  }
});
hd.render = Yy;
const yr = hd;
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
var or, dt = {};
function jy(e) {
  return e === void 0 && (e = {}), je(e) ? ut({}, dt, {
    images: [e]
  }) : Te(e) ? ut({}, dt, {
    images: e
  }) : ut({}, dt, e);
}
function Dn(e) {
  if (kt()) {
    Dn.close();
    var n = jy(e), r = Le(n);
    r.teleport = "body", or = r;
    var {
      unmountInstance: a
    } = et(yr, r, {
      onClose: () => k(r.onClose),
      onClosed: () => {
        k(r.onClosed), a(), or === r && (or = null);
      },
      onRouteChange: () => {
        a(), or === r && (or = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Dn.close = () => {
  if (or != null) {
    var e = or;
    or = null, ze().then(() => {
      e.show = !1;
    });
  }
};
Dn.setDefaultOptions = (e) => {
  dt = e;
};
Dn.resetDefaultOptions = () => {
  dt = {};
};
yr.install = function(e) {
  e.component(yr.name, yr);
};
Dn.install = function(e) {
  e.component(yr.name, yr);
};
Dn.Component = yr;
var QS = yr, Ht = {
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
function Yl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function jl(e) {
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
  n: Wy,
  classes: Gy
} = x("sticky");
function qy(e, n) {
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
      [F(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var gd = Q({
  name: "VarSticky",
  props: Ht,
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
            top: P
          } = m.getBoundingClientRect();
          E = P;
        }
        var I = r.value, g = n.value, {
          top: M,
          left: D
        } = g.getBoundingClientRect(), C = M - E;
        return C <= f.value ? (S || (l.value = g.offsetWidth + "px", i.value = g.offsetHeight + "px", t.value = E + f.value + "px", o.value = D + "px", s.value = I.offsetWidth + "px", u.value = I.offsetHeight + "px", a.value = !0), {
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
    }, y = /* @__PURE__ */ function() {
      var S = jl(function* () {
        a.value = !1, yield Jv(), h();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var S = jl(function* () {
        yield An(), m = Sr(n.value), m !== window && m.addEventListener("scroll", b), b();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", b);
    };
    return te(() => e.disabled, y), tn(w), _a(V), Qn(V), Xn(() => window, "scroll", b), Xn(() => window, "resize", y), {
      n: Wy,
      classes: Gy,
      resize: y,
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
gd.render = qy;
const Gn = gd;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var _S = Gn, yd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Xy() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = cn(yd);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function Ky() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn(yd);
  return r || $n("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var Zy = {
  index: {
    type: [Number, String]
  }
}, {
  n: Jy,
  classes: Qy
} = x("index-anchor");
function _y(e, n) {
  return p(), ge(
    xa(e.sticky ? e.n("$-sticky") : e.Transition),
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
var bd = Q({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Gn
  },
  inheritAttrs: !1,
  props: Zy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Ky(), t = B(0), o = B(!1), l = R(() => e.index), i = B(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, h = (y) => {
      o.value = y;
    }, b = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: h
    };
    return a(b), {
      n: Jy,
      classes: Qy,
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
bd.render = _y;
const xr = bd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var xS = xr, xy = {
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
function Wl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Dt(e) {
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
  n: eb,
  classes: nb
} = x("index-bar"), rb = ["onClick"];
function ab(e, n) {
  return p(), O(
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
      [(p(!0), O(
        Ve,
        null,
        Fe(e.anchorNameList, (r) => (p(), O(
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
          rb
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
var wd = Q({
  name: "VarIndexBar",
  props: xy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Xy(), t = B(""), o = B(null), l = B([]), i = B(), s = R(() => e.sticky), u = R(() => e.stickyCssMode || e.cssMode), d = R(() => Ye(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, m = !1, h = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(h);
    var b = (I, g) => {
      var M = yi(I) ? I.name.value : I;
      M === i.value || M === void 0 || (i.value = M, (g == null ? void 0 : g.event) !== !1 && k(e.onChange, M));
    }, y = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: I
      } = f.getBoundingClientRect(), {
        scrollTop: g
      } = f, {
        top: M
      } = o.value.getBoundingClientRect();
      return g - I + M;
    }, w = () => {
      var I = vt(f), g = f === window ? document.body.scrollHeight : f.scrollHeight, M = y();
      r.forEach((D, C) => {
        var $ = D.ownTop.value, z = I - $ + d.value - M, K = C === r.length - 1 ? g : r[C + 1].ownTop.value - D.ownTop.value;
        D.setDisabled(!0), z >= 0 && z < K && t.value === "" && (D.setDisabled(!1), b(D));
      });
    }, V = /* @__PURE__ */ function() {
      var I = Dt(function* (g) {
        var {
          anchorName: M,
          manualCall: D = !1,
          options: C
        } = g;
        if (D && k(e.onClick, M), !(M === i.value && !m)) {
          var $ = r.find((Y) => {
            var {
              name: j
            } = Y;
            return M === j.value;
          });
          if ($) {
            var z = y(), K = $.ownTop.value - d.value + z, J = wi(f);
            t.value = M, b(M, C), yield ft(f, {
              left: J,
              top: K,
              animation: ms,
              duration: L(e.duration)
            }), ro(() => {
              t.value = "";
            });
          }
        }
      });
      return function(M) {
        return I.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var I = Dt(function* () {
        yield An(), f = Sr(o.value);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), T = () => {
      f.addEventListener("scroll", w);
    }, E = () => {
      f.removeEventListener("scroll", w);
    }, P = (I, g) => {
      bn(() => V({
        anchorName: I,
        options: g
      }));
    };
    return te(() => n.value, /* @__PURE__ */ Dt(function* () {
      yield An(), r.forEach((I) => {
        var {
          name: g,
          setOwnTop: M
        } = I;
        g.value && l.value.push(g.value), M();
      });
    })), tn(/* @__PURE__ */ Dt(function* () {
      yield S(), T();
    })), bt(E), Qn(() => {
      m = !0, E();
    }), Pr(() => {
      !m || i.value === void 0 || (V({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: eb,
      classes: nb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: P,
      anchorClick: V
    };
  }
});
wd.render = ab;
const ea = wd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var ek = ea;
function tb(e) {
  return ["small", "normal"].includes(e);
}
function ob(e) {
  return ["outlined", "standard"].includes(e);
}
var Ri = {
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
    validator: tb
  },
  variant: {
    type: String,
    default: "standard",
    validator: ob
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
  n: Gl,
  classes: ib
} = x("field-decorator"), lb = ["for"];
function sb(e, n) {
  var r = ae("var-icon");
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
      ), (e.hint ? e.placeholderTransform : e.alwaysCustomPlaceholder) ? (p(), O(
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
        lb
      )) : _("v-if", !0), e.variant === "outlined" ? (p(), O(
        "span",
        {
          key: 1,
          ref: "placeholderTextEl",
          class: c([e.n("placeholder-text"), e.n("$--ellipsis")])
        },
        re(e.placeholder),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0), A(
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
        )) : _("v-if", !0), F(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), O(
      Ve,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), O(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")]))
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Cd = Q({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Pe
  },
  props: Ri,
  setup(e) {
    var n = B(null), r = B(null), a = B(null), t = B(""), o = B(""), l = B(""), i = R(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), s = R(() => e.hint && (!ur(e.value) || e.isFocus)), u = () => {
      var {
        hint: S,
        value: T,
        composing: E
      } = e;
      if (!S && (!ur(T) || E))
        return Gl("--placeholder-hidden");
    }, d = null, v = null, f = null, m = null, h = () => {
      d = n.value.getBoundingClientRect(), v = r.value.getBoundingClientRect(), f = window.getComputedStyle(n.value), e.variant === "outlined" && (m = window.getComputedStyle(a.value));
    }, b = () => {
      var {
        size: S,
        hint: T,
        placeholder: E,
        variant: P
      } = e;
      if (!s.value || !E) {
        o.value = T ? "translate(" + (v.left - d.left) + "px, calc(var(--field-decorator-" + P + "-" + S + "-placeholder-translate-y) + var(--field-decorator-middle-offset-y))) scale(1)" : "", l.value = v.width + "px";
        return;
      }
      var I = P === "outlined" ? "-50%" : "0";
      if (o.value = "translate(" + f.paddingLeft + ", " + I + ") scale(0.75)", P === "outlined") {
        var g = "var(--field-decorator-outlined-" + S + "-placeholder-space)";
        t.value = "calc(" + m.width + " * 0.75 + " + g + " * 2)", l.value = "calc((100% - var(--field-decorator-outlined-" + S + "-padding-left) - var(--field-decorator-outlined-" + S + "-padding-right)) * 1.33)";
      } else
        l.value = "133%";
    }, y = (S) => {
      k(e.onClear, S);
    }, w = (S) => {
      k(e.onClick, S);
    }, V = () => {
      h(), b();
    };
    return te(() => [e.size, e.placeholder, e.hint, e.value, e.variant], V), tn(V), Xn(() => window, "resize", V), te(s, b), {
      controllerEl: n,
      middleEl: r,
      placeholderTextEl: a,
      placeholderTransform: o,
      placeholderMaxWidth: l,
      color: i,
      legendWidth: t,
      isFloating: s,
      computePlaceholderState: u,
      n: Gl,
      classes: ib,
      isEmpty: ur,
      handleClear: y,
      handleClick: w
    };
  }
});
Cd.render = sb;
const Sd = Cd;
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
function ub(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var db = ui({
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
    validator: ub
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
}, Ke(Ri, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: vb,
  classes: fb
} = x("input"), cb = ["placeholder", "enterkeyhint"], mb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], pb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function hb(e, n) {
  var r = ae("var-field-decorator"), a = ae("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[15] || (n[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Z(
      r,
      Ct(eo({
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
        default: ve(() => [e.normalizedType === "password" ? (p(), O(
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
          cb
        )) : _("v-if", !0), e.textarea ? (p(), O(
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
          mb
        )) : (p(), O(
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
          pb
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
var kd = Q({
  name: "VarInput",
  components: {
    VarFormDetails: Je,
    VarFieldDecorator: Sd
  },
  props: db,
  setup(e) {
    var n = B("var-input-" + Qa().uid), r = B(null), a = B(!1), t = B(!1), o = R(() => e.type === "number" ? "text" : e.type), l = R(() => {
      var {
        maxlength: q,
        modelValue: H
      } = e;
      return q ? ur(H) ? "0 / " + q : String(H).length + "/" + q : "";
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
    } = Pn(), {
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
    }, y = (q) => {
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
    }, P = (q) => {
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
    }, g = (q) => {
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
      n: vb,
      classes: fb,
      isEmpty: ur,
      handleFocus: y,
      handleBlur: w,
      handleInput: E,
      handleChange: P,
      handleClear: I,
      handleClick: g,
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
kd.render = hb;
const br = kd;
br.install = function(e) {
  e.component(br.name, br);
};
var nk = br;
function gb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function yb(e) {
  return ["always", "hover", "none"].includes(e);
}
var bb = {
  type: {
    type: String,
    default: "default",
    validator: gb
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
    validator: yb
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
  n: wb,
  classes: Cb
} = x("link");
function Sb(e, n) {
  return p(), ge(
    xa(e.tag),
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
var $d = Q({
  name: "VarLink",
  props: bb,
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
      n: wb,
      classes: Cb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: he
    };
  }
});
$d.render = Sb;
const na = $d;
na.install = function(e) {
  e.component(na.name, na);
};
var rk = na, kb = {
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
function ql(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function $b(e) {
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
  n: Tb,
  classes: Pb
} = x("list");
function Ob(e, n) {
  var r = ae("var-loading"), a = De("ripple");
  return p(), O(
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
    )]) : _("v-if", !0), e.finished ? F(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: c(e.n("finished"))
      },
      re(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : _("v-if", !0), e.error ? F(e.$slots, "error", {
      key: 2
    }, () => [ke((p(), O(
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
    )), [[a]])]) : _("v-if", !0), A(
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
var Td = Q({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: En
  },
  props: kb,
  setup(e) {
    var n = B(null), r = B(null), a, t = () => {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }, o = () => {
      var s = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: u
      } = r.value.getBoundingClientRect();
      return Math.floor(u) - Ye(e.offset) <= s;
    }, l = () => {
      a.removeEventListener("scroll", i);
    }, i = /* @__PURE__ */ function() {
      var s = $b(function* () {
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
      a = Sr(n.value), a.addEventListener("scroll", i), e.immediateCheck && i();
    }), Qn(l), _a(l), {
      pack: Xe,
      listEl: n,
      detectorEl: r,
      dt: no,
      isNumber: an,
      load: t,
      check: i,
      n: Tb,
      classes: Pb
    };
  }
});
Td.render = Ob;
const ra = Td;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var ak = ra, Vb = {
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
  classes: Mb,
  n: Xl
} = x("loading-bar");
const Bb = Q({
  name: "VarLoadingBar",
  props: Vb,
  setup(e) {
    return () => Z("div", {
      class: Mb(Xl(), [e.error, Xl("--error")]),
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
var Pd, Od, go, Vd, Kl, Md = {}, Eb = {
  value: 0,
  opacity: 0,
  error: !1
}, Ze = Le(Eb), Ib = (e) => {
  Object.assign(Ze, e);
}, Nb = (e) => {
  Object.assign(Ze, e), Md = e;
}, Db = () => {
  Object.keys(Md).forEach((e) => {
    Ze[e] !== void 0 && (Ze[e] = void 0);
  });
}, Bd = () => {
  Kl || (Kl = !0, et(Bb, Ze));
}, Ui = () => {
  Pd = window.setTimeout(() => {
    if (!(Ze.value >= 95)) {
      var e = Math.random();
      Ze.value < 70 && (e = Math.round(5 * Math.random())), Ze.value += e, Ui();
    }
  }, 200);
}, Hi = () => {
  window.clearTimeout(Od), window.clearTimeout(Pd), window.clearTimeout(go), window.clearTimeout(Vd);
}, Ab = () => {
  Hi(), Ze.error = !1, Ze.value = 0, Bd(), go = window.setTimeout(() => {
    Ze.opacity = 1;
  }, 200), Ui();
}, Ed = () => {
  Hi(), Ze.value = 100, go = window.setTimeout(() => {
    Ze.opacity = 0, Od = window.setTimeout(() => {
      Ze.error = !1;
    }, 250);
  }, 300);
}, zb = () => {
  Hi(), Ze.error = !0, Ze.value === 100 && (Ze.value = 0), Bd(), go = window.setTimeout(() => {
    Ze.opacity = 1;
  }, 200), Ui(), Vd = window.setTimeout(Ed, 300);
}, Id = {
  start: Ab,
  finish: Ed,
  error: zb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Ib,
  setDefaultOptions: Nb,
  resetDefaultOptions: Db
}, tk = Id;
const di = Id;
function Lb(e) {
  return ["click", "hover"].includes(e);
}
function Rb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Ub = {
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
    validator: Lb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Rb
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
  n: Hb,
  classes: Fb
} = x("menu");
function Yb(e, n) {
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
    [F(e.$slots, "default"), (p(), ge(
      Da,
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
          ), [[Cr, e.show]])]),
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
var Nd = Q({
  name: "VarMenu",
  props: Ub,
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
    } = ld(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: mn,
      toSizeUnit: he,
      n: Hb,
      classes: Fb,
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
Nd.render = Yb;
const qn = Nd;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var ok = qn, Dd = Symbol("SELECT_BIND_OPTION_KEY");
function jb() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = cn(Dd);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function Wb() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = fn(Dd);
  return r || $n("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var Gb = {
  label: {},
  value: {}
}, {
  n: qb,
  classes: Xb
} = x("option");
function Kb(e, n) {
  var r = ae("var-checkbox"), a = De("ripple");
  return ke((p(), O(
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
    )) : _("v-if", !0), A(
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
var Ad = Q({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: cr
  },
  props: Gb,
  setup(e) {
    var n = B(!1), r = R(() => n.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: l
    } = Wb(), {
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
    return te([() => e.label, () => e.value], d), l(h), {
      n: qb,
      classes: Xb,
      optionSelected: n,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Ad.render = Kb;
const aa = Ad;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var ik = aa, Zb = {
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
function Jb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !wt(e);
}
var {
  n: Zl
} = x("overlay");
const ta = Q({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Zb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Tt(() => e.show, 1), {
      disabled: o
    } = ao(), l = () => {
      k(e.onClick), k(e["onUpdate:show"], !1);
    };
    to(() => e.show, () => e.lockScroll);
    var i = () => Z("div", Ne({
      class: Zl(),
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
        name: Zl("--fade")
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
        return Z(Da, {
          to: u,
          disabled: o.value
        }, Jb(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
var lk = ta, Qb = {
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
  n: _b,
  classes: xb
} = x("pagination"), e0 = ["item-mode", "onClick"];
function n0(e, n) {
  var r = ae("var-icon"), a = ae("var-input"), t = ae("var-cell"), o = ae("var-menu"), l = De("ripple");
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [ke((p(), O(
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
    }]]), e.simple ? (p(), O(
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
          onKeydown: n[3] || (n[3] = Gi((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
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
    )) : (p(!0), O(
      Ve,
      {
        key: 1
      },
      Fe(e.pageList, (i, s) => ke((p(), O(
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
        e0
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), ke((p(), O(
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
    }]]), e.showSizeChanger ? (p(), O(
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
          menu: ve(() => [(p(!0), O(
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
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (p(), O(
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
          onKeydown: n[9] || (n[9] = Gi((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.totalText ? (p(), O(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      re(e.totalText),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var zd = Q({
  name: "VarPagination",
  components: {
    VarMenu: qn,
    VarIcon: Pe,
    VarCell: fr,
    VarInput: br
  },
  directives: {
    Ripple: We
  },
  props: Qb,
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
    }, y = () => {
      e.disabled || (n.value = !0);
    }, w = (T) => {
      i.value = T, n.value = !1;
      var E = V(l.value);
      a.value = String(E), l.value = E;
    }, V = (T) => T > d.value ? d.value : T < 1 ? 1 : T, S = (T, E, P) => {
      P.target.blur();
      var I = V(L(E));
      a.value = String(I), l.value = I, T === "quick" && (r.value = "");
    };
    return te([() => e.current, () => e.size], (T) => {
      var [E, P] = T;
      l.value = L(E) || 1, i.value = L(P || 10);
    }), te([l, i, d], (T, E) => {
      var [P, I, g] = T, [M, D] = E, C = [], {
        maxPagerCount: $,
        total: z,
        onChange: K
      } = e, J = Math.ceil(L(z) / L(D)), Y = g - ($ - u.value) - 1;
      if (a.value = "" + P, g - 2 > $) {
        if (M === void 0 || g !== J)
          for (var j = 2; j < $ + 2; j++)
            C.push(j);
        if (P <= $ && P < Y) {
          C = [];
          for (var se = 1; se < $ + 1; se++)
            C.push(se + 1);
          t.value = !0, o.value = !1;
        }
        if (P > $ && P < Y) {
          C = [];
          for (var q = 1; q < $ + 1; q++)
            C.push(P + q - u.value);
          t.value = P === 2 && $ === 1, o.value = !1;
        }
        if (P >= Y) {
          C = [];
          for (var H = 1; H < $ + 1; H++)
            C.push(g - ($ - H) - 1);
          t.value = !1, o.value = !0;
        }
        C = [1, "...", ...C, "...", g];
      } else
        for (var N = 1; N <= g; N++)
          C.push(N);
      s.value = C, M != null && g > 0 && k(K, P, I), k(e["onUpdate:current"], P), k(e["onUpdate:size"], I);
    }, {
      immediate: !0
    }), {
      n: _b,
      classes: xb,
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
      showMenu: y,
      clickSize: w,
      setPage: S,
      toNumber: L,
      formatElevation: mn
    };
  }
});
zd.render = n0;
const oa = zd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var sk = oa, r0 = {
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
  n: a0,
  classes: t0
} = x("paper");
function o0(e, n) {
  var r = De("ripple");
  return ke((p(), O(
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
var Ld = Q({
  name: "VarPaper",
  directives: {
    Ripple: We
  },
  props: r0,
  setup(e) {
    var n = (r) => {
      k(e.onClick, r);
    };
    return {
      n: a0,
      classes: t0,
      formatElevation: mn,
      toSizeUnit: he,
      handleClick: n
    };
  }
});
Ld.render = o0;
const ia = Ld;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var uk = ia;
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
var i0 = vi({
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
}, Ke($t, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: l0,
  classes: s0
} = x("picker"), Jl = 300, u0 = 15, Ql = 0, d0 = ["onTouchstart", "onTouchmove", "onTouchend"], v0 = ["onTransitionend"];
function f0(e, n) {
  var r = ae("var-button");
  return p(), ge(
    xa(e.dynamic ? e.n("$-popup") : e.Transition),
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
        [e.toolbar ? (p(), O(
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
        )) : _("v-if", !0), A(
          "div",
          {
            class: c(e.n("columns")),
            style: G({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), O(
            Ve,
            null,
            Fe(e.scrollColumns, (a) => (p(), O(
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
                [(p(!0), O(
                  Ve,
                  null,
                  Fe(a.column.texts, (t) => (p(), O(
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
                v0
              )],
              42,
              d0
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
var Rd = Q({
  name: "VarPicker",
  components: {
    VarButton: _e,
    VarPopup: wn
  },
  inheritAttrs: !1,
  props: i0,
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
      $.touching = !0, $.scrolling = !1, $.duration = 0, $.translate = bo($.scrollEl);
    }, y = (C, $) => {
      if ($.touching) {
        var {
          clientY: z
        } = C.touches[0], K = $.prevY !== void 0 ? z - $.prevY : 0;
        $.prevY = z, $.translate += K, u($);
        var J = performance.now();
        J - $.momentumTime > Jl && ($.momentumTime = J, $.momentumPrevY = $.translate);
      }
    }, w = (C, $) => {
      $.touching = !1, $.scrolling = !0, $.prevY = void 0;
      var z = $.translate - $.momentumPrevY, K = performance.now() - $.momentumTime, J = Math.abs(z) >= u0 && K <= Jl;
      J && h($, z, K), $.index = v($), m($, $.index, J ? 1e3 : 200);
    }, V = (C) => {
      C.scrolling = !1, I(C);
    }, S = (C) => C.map(($, z) => {
      var K, J = Te($) ? {
        texts: $
      } : $, Y = {
        id: Ql++,
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
          id: Ql++,
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
    }, P = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), E(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, I = (C) => {
      var {
        cascade: $,
        onChange: z
      } = e;
      $ && P(C);
      var K = n.value.some((se) => se.scrolling);
      if (!K) {
        var {
          texts: J,
          indexes: Y
        } = f(), j = Y.every((se, q) => se === l[q]);
        j || (l = [...Y], k(z, J, Y));
      }
    }, g = () => {
      if (e.cascade) {
        var C = n.value.find(($) => $.scrolling);
        C && (C.translate = bo(C.scrollEl), C.index = v(C), m(C, C.index, 0, !0), C.scrolling = !1, P(C));
      } else
        n.value.forEach(($) => {
          $.translate = bo($.scrollEl), $.index = v($), m($, $.index, 0);
        });
    }, M = () => {
      g();
      var {
        texts: C,
        indexes: $
      } = f();
      l = [...$], k(e.onConfirm, C, $);
    }, D = () => {
      g();
      var {
        texts: C,
        indexes: $
      } = f();
      l = [...$], k(e.onCancel, C, $);
    };
    return te(() => e.columns, (C) => {
      n.value = e.cascade ? T(qi(C)) : S(qi(C));
      var {
        indexes: $
      } = f();
      l = [...$];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: l0,
      classes: s0,
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
      handleTouchmove: y,
      handleTouchend: w,
      handleTransitionend: V,
      confirm: M,
      cancel: D,
      dt: no
    };
  }
});
Rd.render = f0;
const wr = Rd;
var sn;
function Na(e) {
  return new Promise((n) => {
    Na.close();
    var r = Te(e) ? {
      columns: e
    } : e, a = Le(r);
    a.dynamic = !0, a.teleport = "body", sn = a;
    var {
      unmountInstance: t
    } = et(wr, a, {
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
wr.install = function(e) {
  e.component(wr.name, wr);
};
Na.Component = wr;
Na.install = function(e) {
  e.component(wr.name, wr);
};
Na.close = function() {
  if (sn != null) {
    var e = sn;
    sn = null, ze().then(() => {
      e.show = !1;
    });
  }
};
var dk = wr;
function c0(e) {
  return ["linear", "circle"].includes(e);
}
var m0 = {
  mode: {
    type: String,
    default: "linear",
    validator: c0
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
  n: p0,
  classes: h0
} = x("progress"), g0 = ["viewBox"], y0 = ["cx", "cy", "r", "stroke-width"], b0 = ["cx", "cy", "r", "stroke-width"];
function w0(e, n) {
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
        )) : _("v-if", !0), A(
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
        [F(e.$slots, "default", {}, () => [Ce(
          re(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.mode === "circle" ? (p(), O(
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
          y0
        )) : _("v-if", !0), A(
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
          b0
        )],
        14,
        g0
      )), e.label ? (p(), O(
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
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ud = Q({
  name: "VarProgress",
  props: m0,
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
      n: p0,
      classes: h0,
      toSizeUnit: he,
      multiplySizeUnit: nn,
      linearProps: n,
      circleProps: r
    };
  }
});
Ud.render = w0;
const la = Ud;
la.install = function(e) {
  e.component(la.name, la);
};
var vk = la, C0 = {
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
function _l(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function xl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        _l(o, a, t, l, i, "next", s);
      }
      function i(s) {
        _l(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: es,
  classes: S0
} = x("pull-refresh"), ns = 150;
function k0(e, n) {
  var r = ae("var-icon");
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
var Hd = Q({
  name: "VarPullRefresh",
  components: {
    VarIcon: Pe
  },
  props: C0,
  setup(e) {
    var n = B(0), r = B(null), a = B(null), t = B(0), o = B("-125%"), l = B("arrow-down"), i = B("default"), s = B(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var g = xl(function* (M) {
        if (l.value !== M)
          return l.value = M, new Promise((D) => {
            window.setTimeout(D, ns);
          });
      });
      return function(D) {
        return g.apply(this, arguments);
      };
    }(), h = R(() => i.value !== "loading" && i.value !== "success" && !e.disabled), b = R(() => ({
      transform: "translate3d(0px, " + (je(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), y = R(() => Math.abs(2 * n.value)), w = R(() => i.value === "success"), V = (g) => {
      var M = "classList" in u ? u : document.body;
      M.classList[g](es() + "--lock");
    }, S = (g) => {
      if (n.value === 0) {
        var {
          width: M
        } = a.value.getBoundingClientRect();
        n.value = -(M + M * 0.25);
      }
      v = g.touches[0].clientY, f = 0, d = Sr(g.target);
    }, T = (g) => {
      if (h.value && !(d !== u && vt(d) > 0)) {
        var M = vt(u);
        if (!(M > 0)) {
          var D = M === 0, C = g.touches[0];
          f = C.clientY - v, D && f >= 0 && g.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = g.touches[0].clientY), D && o.value > n.value && V("add");
          var $ = (g.touches[0].clientY - t.value) / 2 + n.value;
          o.value = $ >= y.value ? y.value : $, m(o.value >= y.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, E = /* @__PURE__ */ function() {
      var g = xl(function* () {
        h.value && (s.value = !0, o.value >= y.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = y.value * 0.3, k(e["onUpdate:modelValue"], !0), ze(() => {
          k(e.onRefresh);
        }), V("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, V("remove");
        }, L(e.animationDuration))), d = null);
      });
      return function() {
        return g.apply(this, arguments);
      };
    }(), P = () => {
      u = e.target ? hs(e.target, "PullRefresh") : Sr(r.value);
    }, I = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    };
    return te(() => e.modelValue, (g) => {
      g === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, I();
      }, L(e.successDuration)));
    }), tn(P), Xn(r, "touchmove", T), {
      n: es,
      classes: S0,
      ICON_TRANSITION: ns,
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
Hd.render = k0;
const sa = Hd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var fk = sa, $0 = {
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
}, Fd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function T0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = cn(Fd);
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
  } = fn(Fd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: O0,
  classes: V0
} = x("radio");
function M0(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = De("ripple"), l = De("hover");
  return p(), O(
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
      [ke((p(), O(
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
var Yd = Q({
  name: "VarRadio",
  directives: {
    Ripple: We,
    Hover: zn
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  inheritAttrs: !1,
  props: $0,
  setup(e) {
    var n = B(!1), r = R(() => n.value === e.checkedValue), a = B(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = P0(), {
      hovering: l,
      handleHovering: i
    } = kr(), {
      form: s,
      bindForm: u
    } = Pn(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Tn(), h = (P) => {
      ze(() => {
        var {
          validateTrigger: I,
          rules: g,
          modelValue: M
        } = e;
        v(I, P, g, M);
      });
    }, b = (P) => {
      var {
        checkedValue: I,
        onChange: g
      } = e;
      t && n.value === I || (n.value = P, k(e["onUpdate:modelValue"], n.value), k(g, n.value), t == null || t.onToggle(I), h("onChange"));
    }, y = (P) => {
      var {
        disabled: I,
        readonly: g,
        uncheckedValue: M,
        checkedValue: D,
        onClick: C
      } = e;
      s != null && s.disabled.value || I || (k(C, P), !(s != null && s.readonly.value || g) && (a.value = !0, b(r.value ? M : D)));
    }, w = (P) => {
      var {
        checkedValue: I,
        uncheckedValue: g
      } = e;
      n.value = P === I ? I : g;
    }, V = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, S = () => f(e.rules, e.modelValue), T = (P) => {
      var {
        uncheckedValue: I,
        checkedValue: g
      } = e, M = ![I, g].includes(P);
      M && (P = r.value ? I : g), b(P);
    };
    te(() => e.modelValue, (P) => {
      n.value = P;
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
      n: O0,
      classes: V0,
      handleClick: y,
      toggle: T,
      reset: V,
      validate: S,
      resetValidation: m
    };
  }
});
Yd.render = M0;
const ua = Yd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var ck = ua;
function B0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var E0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: B0
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
  n: I0,
  classes: N0
} = x("radio-group");
function D0(e, n) {
  var r = ae("var-form-details");
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
var jd = Q({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: Je
  },
  props: E0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = T0(), {
      bindForm: t
    } = Pn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Tn(), u = R(() => o.value), d = (y) => {
      ze(() => {
        var {
          validateTrigger: w,
          rules: V,
          modelValue: S
        } = e;
        l(w, y, V, S);
      });
    }, v = () => r.forEach((y) => {
      var {
        sync: w
      } = y;
      return w(e.modelValue);
    }), f = (y) => {
      k(e["onUpdate:modelValue"], y), k(e.onChange, y), d("onChange");
    }, m = () => i(e.rules, e.modelValue), h = () => {
      k(e["onUpdate:modelValue"], void 0), s();
    };
    te(() => e.modelValue, v), te(() => n.value, v);
    var b = {
      onToggle: f,
      validate: m,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return k(t, b), a(b), {
      errorMessage: o,
      n: I0,
      classes: N0,
      reset: h,
      validate: m,
      resetValidation: s
    };
  }
});
jd.render = D0;
const da = jd;
da.install = function(e) {
  e.component(da.name, da);
};
var mk = da, A0 = {
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
  n: at
} = x("rate"), z0 = ["onClick"];
function L0(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = De("ripple"), l = De("hover");
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
        Ve,
        null,
        Fe(e.toNumber(e.count), (i) => ke((p(), O(
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
          z0
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
var Wd = Q({
  name: "VarRate",
  components: {
    VarIcon: Pe,
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  directives: {
    Ripple: We,
    Hover: zn
  },
  props: A0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = Pn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Tn(), {
      hovering: i
    } = kr(), s = B(-1), u = (S) => {
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
        [at("content")]: !0,
        [at("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [at("--error")]: a.value,
        [at("--primary")]: T !== e.emptyIcon && !E
      };
    }, v = (S) => {
      var {
        modelValue: T,
        disabled: E,
        disabledColor: P,
        color: I,
        half: g,
        emptyColor: M,
        icon: D,
        halfIcon: C,
        emptyIcon: $
      } = e, z = I;
      return (E || n != null && n.disabled.value) && (z = P), S <= L(T) ? {
        color: z,
        name: D
      } : g && S <= L(T) + 0.5 ? {
        color: z,
        name: C
      } : {
        color: E || n != null && n.disabled.value ? P : M,
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
        disabled: P,
        onChange: I
      } = e;
      E || P || n != null && n.disabled.value || n != null && n.readonly.value || (f(S, T), k(I, S), h());
    }, y = (S) => (T) => {
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
      createHoverHandler: y,
      reset: w,
      validate: m,
      resetValidation: l,
      toSizeUnit: he,
      toNumber: L,
      n: at
    };
  }
});
Wd.render = L0;
const va = Wd;
va.install = function(e) {
  e.component(va.name, va);
};
var pk = va;
function R0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var U0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: R0
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
}, H0 = (e) => (Aa(""), e = e(), za(), e), F0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Y0 = /* @__PURE__ */ H0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), j0 = [Y0];
function W0(e, n) {
  return p(), O("svg", F0, j0);
}
var Gd = Q({});
Gd.render = W0;
const G0 = Gd;
var q0 = (e) => (Aa(""), e = e(), za(), e), X0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, K0 = /* @__PURE__ */ q0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), Z0 = [K0];
function J0(e, n) {
  return p(), O("svg", X0, Z0);
}
var qd = Q({});
qd.render = J0;
const Q0 = qd;
var _0 = (e) => (Aa(""), e = e(), za(), e), x0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, e1 = /* @__PURE__ */ _0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), n1 = [e1];
function r1(e, n) {
  return p(), O("svg", x0, n1);
}
var Xd = Q({});
Xd.render = r1;
const a1 = Xd;
var {
  n: t1,
  classes: o1
} = x("result");
function i1(e, n) {
  return p(), O(
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
var Kd = Q({
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
      n: t1,
      classes: o1,
      toNumber: L
    };
  }
});
Kd.render = i1;
const l1 = Kd;
var s1 = (e) => (Aa(""), e = e(), za(), e), u1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, d1 = /* @__PURE__ */ s1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), v1 = [d1];
function f1(e, n) {
  return p(), O("svg", u1, v1);
}
var Zd = Q({});
Zd.render = f1;
const c1 = Zd;
var m1 = (e) => (Aa(""), e = e(), za(), e), p1 = {
  viewBox: "-4 -4 32 32"
}, h1 = /* @__PURE__ */ m1(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), g1 = [h1];
function y1(e, n) {
  return p(), O("svg", p1, g1);
}
var Jd = Q({});
Jd.render = y1;
const b1 = Jd;
var {
  n: w1,
  classes: C1
} = x("result");
function S1(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [F(e.$slots, "image", {}, () => [e.type ? (p(), O(
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
    )) : _("v-if", !0)]), F(e.$slots, "title", {}, () => [e.title ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      re(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Qd = Q({
  name: "VarResult",
  components: {
    Info: G0,
    Success: l1,
    Warning: a1,
    Error: Q0,
    Question: c1,
    Empty: b1
  },
  props: U0,
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
      n: w1,
      classes: C1,
      toNumber: L,
      toPxNum: Ye,
      toSizeUnit: he,
      circleSize: n,
      borderSize: r
    };
  }
});
Qd.render = S1;
const fa = Qd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var hk = fa;
function k1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function $1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var T1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: k1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: $1
  },
  onClick: U()
}, {
  n: P1,
  classes: O1
} = x("row");
function V1(e, n) {
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
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var _d = Q({
  name: "VarRow",
  props: T1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Gm(), t = R(() => {
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
    return te(() => a.value, o), te(() => e.gutter, o), r(i), {
      n: P1,
      classes: O1,
      average: t,
      handleClick: l,
      padStartFlex: Yt
    };
  }
});
_d.render = V1;
const ca = _d;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var gk = ca;
function fi() {
  return fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, fi.apply(this, arguments);
}
function M1(e) {
  return ["left", "right", "center"].includes(e);
}
var B1 = fi({
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
    validator: M1
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
}, Ke(Ri, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: E1,
  classes: I1
} = x("select"), N1 = {
  key: 1
};
function D1(e, n) {
  var r = ae("var-chip"), a = ae("var-icon"), t = ae("var-field-decorator"), o = ae("var-menu"), l = ae("var-form-details");
  return p(), O(
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
          Ct(eo({
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
                [e.isEmptyModelValue ? _("v-if", !0) : F(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), O(
                  Ve,
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
                  )) : (p(), O(
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
                )) : (p(), O(
                  "span",
                  N1,
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
var xd = Q({
  name: "VarSelect",
  components: {
    VarIcon: Pe,
    VarMenu: qn,
    VarChip: mr,
    VarFieldDecorator: Sd,
    VarFormDetails: Je
  },
  props: B1,
  setup(e) {
    var n = B(!1), r = R(() => e.multiple), a = R(() => e.focusColor), t = B(""), o = B([]), l = R(() => ur(e.modelValue)), i = R(() => e.disabled || e.readonly ? "" : "pointer"), s = B(0), {
      bindForm: u,
      form: d
    } = Pn(), {
      length: v,
      options: f,
      bindOptions: m
    } = jb(), {
      errorMessage: h,
      validateWithTrigger: b,
      validate: y,
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
      !H && !ur(N) && (t.value = I(N)), !H && ur(N) && (t.value = "");
    }, E = (H) => {
      ze(() => {
        var {
          validateTrigger: N,
          rules: W,
          modelValue: ne
        } = e;
        b(N, H, W, ne);
      });
    }, P = (H) => {
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
    }, g = () => {
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
            selected: Oe
          } = be;
          return Oe.value;
        }).map(P) : P(H);
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
        }), Oe = de.filter((on) => {
          var ee;
          return on !== ((ee = be.value.value) != null ? ee : be.label.value);
        });
        k(e["onUpdate:modelValue"], Oe), k(le, Oe), E("onClose");
      }
    }, K = () => {
      var {
        multiple: H,
        modelValue: N
      } = e;
      if (H) {
        var W = N;
        f.forEach((ne) => ne.sync(W.includes(P(ne))));
      } else
        f.forEach((ne) => ne.sync(N === P(ne)));
      T();
    }, J = () => {
      s.value = Ye(e.offsetY), n.value = !0;
    }, Y = () => {
      n.value = !1;
    }, j = () => y(e.rules, e.modelValue), se = () => {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), w();
    };
    te(() => e.multiple, () => {
      var {
        multiple: H,
        modelValue: N
      } = e;
      H && !Te(N) && $n("Select", "The modelValue must be an array when multiple is true");
    }), te(() => e.modelValue, K, {
      deep: !0
    }), te(() => v.value, K);
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
      n: E1,
      classes: I1,
      handleFocus: g,
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
xd.render = D1;
const ma = xd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var yk = ma, A1 = {
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
  n: z1,
  classes: L1
} = x("skeleton");
function R1(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [F(e.$slots, "default")],
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
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), O(
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
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), O(
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
          )) : _("v-if", !0), (p(!0), O(
            Ve,
            null,
            Fe(e.toNumber(e.rows), (r, a) => (p(), O(
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
        )) : _("v-if", !0)],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.loading && e.fullscreen ? (p(), O(
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var ev = Q({
  name: "VarSkeleton",
  props: A1,
  setup() {
    return {
      n: z1,
      classes: L1,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
ev.render = R1;
const pa = ev;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var bk = pa;
function U1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Re;
(function(e) {
  e.First = "1", e.Second = "2";
})(Re || (Re = {}));
var H1 = {
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
    validator: U1
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
  n: rs,
  classes: F1
} = x("slider"), Y1 = ["onTouchstart"];
function j1(e, n) {
  var r = ae("var-hover-overlay"), a = ae("var-form-details"), t = De("hover");
  return p(), O(
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
      ), (p(!0), O(
        Ve,
        null,
        Fe(e.thumbList, (o) => (p(), O(
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
          Y1
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
var nv = Q({
  name: "VarSlider",
  components: {
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  directives: {
    Hover: zn
  },
  props: H1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = Pn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Tn(), {
      hovering: i,
      handleHovering: s
    } = kr(), {
      hovering: u,
      handleHovering: d
    } = kr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = B(null), b = B(0), y = B(!1), w = Le({
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
        hovering: ot(i),
        handleHovering: s
      }, {
        value: z(ee[1]),
        enumValue: Re.Second,
        text: K(ee[1]),
        hovering: ot(u),
        handleHovering: d
      }] : an(ee) && (ye = [{
        value: z(ee),
        enumValue: Re.First,
        text: K(ee),
        hovering: ot(i),
        handleHovering: s
      }]), ye;
    }), E = R(() => {
      var {
        activeColor: ee,
        range: ue,
        modelValue: ye
      } = e, Ae = ue && Te(ye) ? z(Math.min(ye[0], ye[1])) : 0, Me = ue && Te(ye) ? z(Math.max(ye[0], ye[1])) - Ae : z(ye);
      return g.value ? {
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
    }), P = R(() => e.disabled || (r == null ? void 0 : r.disabled.value)), I = R(() => e.readonly || (r == null ? void 0 : r.readonly.value)), g = R(() => e.direction === "vertical"), M, D = (ee) => {
      var ue = ee.currentTarget;
      return ue ? g.value ? b.value - (ee.clientY - ue.getBoundingClientRect().top) : ee.clientX - jv(ue) : 0;
    }, C = (ee) => {
      var ue = g.value ? "bottom" : "left";
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
      P.value || ue.handleHovering(ee);
    }, Y = (ee, ue) => {
      var ye = [], {
        step: Ae,
        range: Me,
        modelValue: Ie,
        onChange: Mr,
        min: nt
      } = e, ie = L(Ae), we = Math.round(ee / S.value), me = we * ie + L(nt), Se = w[ue].percentValue * ie + L(nt);
      if (w[ue].percentValue = we, Me && Te(Ie) && (ye = ue === Re.First ? [me, Ie[1]] : [Ie[0], me]), Se !== me) {
        var $e = Me ? ye.map((He) => K(He)) : K(me);
        k(Mr, $e), k(e["onUpdate:modelValue"], $e), m();
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
      if (b.value || (b.value = h.value.offsetWidth), P.value || (w[ue].active = !0), M = ue, se(), !(P.value || I.value)) {
        k(e.onStart), y.value = !0;
        var {
          clientX: ye,
          clientY: Ae
        } = ee.touches[0];
        w[ue].startPosition = g.value ? Ae : ye;
      }
    }, N = (ee) => {
      if (ee.preventDefault(), !(P.value || I.value || !y.value)) {
        var {
          startPosition: ue,
          currentOffset: ye
        } = w[M], {
          clientX: Ae,
          clientY: Me
        } = ee.touches[0], Ie = (g.value ? ue - Me : Ae - ue) + ye;
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
      if (P.value || (w[M].active = !1), !(P.value || I.value)) {
        var Ie = [];
        w[M].currentOffset = w[M].percentValue * S.value;
        var Mr = w[M].percentValue * L(Ae) + L(Me);
        ee && Te(ue) && (Ie = M === Re.First ? [Mr, ue[1]] : [ue[0], Mr]), k(ye, ee ? Ie : Mr), y.value = !1;
      }
    }, ne = (ee) => {
      if (!(P.value || I.value) && !ee.target.closest("." + rs("thumb"))) {
        var ue = D(ee), ye = j(ue);
        M = ye, Y(ue, ye), W();
      }
    }, le = () => {
      var ee = L(e.step);
      return isNaN(ee) ? (Qi("Slider", 'type of prop "step" should be Number'), !1) : ee < 0 ? (Qi("Slider", '"step" should be > 0'), !1) : !0;
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
    }, Oe = () => {
      var ee = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], ee), l();
    }, on = {
      reset: Oe,
      validate: v,
      resetValidation: l
    };
    return k(n, on), te([() => e.modelValue, () => e.step], (ee) => {
      var [ue, ye] = ee;
      !le() || !de() || y.value || be(ue, L(ye));
    }), te(b, () => be()), tn(() => {
      !le() || !de() || (b.value = h.value[g.value ? "offsetHeight" : "offsetWidth"]);
    }), bt(() => {
      q();
    }), {
      n: rs,
      classes: F1,
      Thumbs: Re,
      sliderEl: h,
      getFillStyle: E,
      isDisabled: P,
      isVertical: g,
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
nv.render = j1;
const ha = nv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var wk = ha;
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
function W1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function G1(e) {
  return Fi.includes(e);
}
var rv = {
  type: {
    type: String,
    validator: G1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: W1
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
  loadingType: Ke(ir, "type"),
  loadingSize: Ke(ir, "size"),
  loadingRadius: Ke(ir, "radius"),
  loadingColor: ci({}, Ke(ir, "color"), {
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
  n: q1,
  classes: X1
} = x("snackbar"), K1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Z1(e, n) {
  var r = ae("var-icon"), a = ae("var-loading");
  return ke((p(), O(
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
        )) : _("v-if", !0), e.type === "loading" ? (p(), ge(
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
        )) : _("v-if", !0), F(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Cr, e.show]]);
}
var av = Q({
  name: "VarSnackbarCore",
  components: {
    VarLoading: En,
    VarIcon: Pe
  },
  props: rv,
  setup(e) {
    var n = B(null), {
      zIndex: r
    } = Tt(() => e.show, 1);
    to(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? K1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return te(() => e.show, (l) => {
      l ? (k(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), k(e.onClose));
    }), te(() => e._update, () => {
      clearTimeout(n.value), o();
    }), tn(() => {
      e.show && (k(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Fi,
      n: q1,
      classes: X1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
av.render = Z1;
const tv = av;
var {
  n: J1
} = x("snackbar");
function Q1(e, n) {
  var r = ae("var-snackbar-core");
  return p(), ge(
    Da,
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
var ov = Q({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: tv
  },
  props: rv,
  setup() {
    var {
      disabled: e
    } = ao();
    return {
      n: J1,
      disabled: e
    };
  }
});
ov.render = Q1;
const ga = ov;
function gt() {
  return gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, gt.apply(this, arguments);
}
function _1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !wt(e);
}
var Fi = ["loading", "success", "warning", "info", "error"], as = 0, mi = !1, iv, Ja = !1, lv = {
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
}, Sn = Le([]), Yi = lv, x1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, So = (e) => () => St(e) ? e() : e, ew = {
  setup() {
    return () => {
      var e = Sn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ja && (a.position = "top");
        var l = Ja ? "relative" : "absolute", i = gt({
          position: l
        }, iw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: So(s),
          icon: So(u),
          action: So(d)
        };
        return Z(tv, Ne(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Z(zv, Ne(x1, {
        style: {
          zIndex: hn.zIndex
        },
        onAfterEnter: nw,
        onAfterLeave: rw
      }), _1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Jn = function(e) {
  var n = tw(e), r = Le(gt({}, Yi, n));
  r.show = !0, mi || (mi = !0, iv = et(ew).unmountInstance);
  var {
    length: a
  } = Sn, t = {
    id: as++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ja)
    aw(t);
  else {
    var o = "update-" + as;
    ow(r, o);
  }
  return {
    clear() {
      !Ja && Sn.length ? Sn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Fi.forEach((e) => {
  Jn[e] = (n) => (yi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Jn(n));
});
Jn.install = function(e) {
  e.component(ga.name, ga);
};
Jn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ja && (Sn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ja = e);
};
Jn.clear = function() {
  Sn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Jn.setDefaultOptions = function(e) {
  Yi = e;
};
Jn.resetDefaultOptions = function() {
  Yi = lv;
};
Jn.Component = ga;
function nw(e) {
  var n = e.getAttribute("data-id"), r = Sn.find((a) => a.id === L(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function rw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = Sn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed));
  var a = Sn.every((t) => t.animationEnd);
  a && (k(iv), Sn = Le([]), mi = !1);
}
function aw(e) {
  Sn.push(e);
}
function tw(e) {
  return e === void 0 && (e = {}), je(e) ? {
    content: e
  } : e;
}
function ow(e, n) {
  var [r] = Sn;
  r.reactiveSnackOptions = gt({}, r.reactiveSnackOptions, e), r._update = n;
}
function iw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Ck = ga;
const pi = Jn;
var sv = (e) => ["mini", "small", "normal", "large"].includes(e), lw = (e) => sv(e) || Te(e) || an(e) || je(e), sw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), uw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), dw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: lw
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
    validator: sw
  },
  align: {
    type: String,
    validator: uw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function pn(e) {
  return "calc(" + e + " / 2)";
}
function vw(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = pn(e) + " " + n + " " + pn(e) + " 0" : i = pn(e) + " 0" : t === "space-around" ? i = pn(e) + " " + pn(n) : t === "space-between" && (o === 0 ? i = pn(e) + " " + pn(n) + " " + pn(e) + " 0" : o === l ? i = pn(e) + " 0 " + pn(e) + " " + pn(n) : i = pn(e) + " " + pn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: ko,
  classes: fw
} = x("space");
const ya = Q({
  name: "VarSpace",
  props: dw,
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
      } = e, v = (t = k(r.default)) != null ? t : [], f = sv(d), [m, h] = a(d, f);
      v = $s(v);
      var b = v.length - 1, y = v.map((w, V) => {
        var S = vw(m, h, {
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
        class: fw(ko(), ko("$--box"), [o, ko("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Yt(l),
          alignItems: Yt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [y]);
    };
  }
});
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Sk = ya, cw = {
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
}, uv = Symbol("STEPS_BIND_STEP_KEY");
function mw() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = cn(uv);
  return {
    length: n,
    step: r,
    bindStep: e
  };
}
function pw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = fn(uv);
  return r || $n("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: hw,
  classes: gw
} = x("step"), yw = {
  key: 3
};
function bw(e, n) {
  var r = ae("var-icon");
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
          )) : (p(), O(
            "span",
            yw,
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
      ), e.isLastChild ? _("v-if", !0) : (p(), O(
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
var dv = Q({
  name: "VarStep",
  components: {
    VarIcon: Pe
  },
  props: cw,
  setup() {
    var e = B(null), n = B(""), r = B(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = pw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = R(() => l.value === a.value), m = R(() => a.value !== -1 && l.value > a.value), h = {
      index: a
    }, b = () => v(a.value), y = (w) => {
      d.value === "horizontal" && (e.value = w);
    };
    return o(h), te(i, (w) => {
      if (r.value = w - 1 === a.value, e.value) {
        var V = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + V + "px";
      }
    }), {
      n: hw,
      classes: gw,
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
      getRef: y
    };
  }
});
dv.render = bw;
const ba = dv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var kk = ba;
function ww(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Cw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: ww
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: Sw
} = x("steps");
function kw(e, n) {
  return p(), O(
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
var vv = Q({
  name: "VarSteps",
  props: Cw,
  setup(e) {
    var n = R(() => e.active), r = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      length: o,
      bindStep: l
    } = mw(), i = (u) => {
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
      n: Sw
    };
  }
});
vv.render = kw;
const wa = vv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var $k = wa, $w = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Tw
} = x("style-provider"), Pw = Q({
  name: "VarStyleProvider",
  props: $w,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => vs(e.tag, {
      class: Tw(),
      style: Ss(e.styleVars)
    }, k(r.default));
  }
});
const Ca = Pw;
var $o = [];
function yt(e) {
  $o.forEach((r) => document.documentElement.style.removeProperty(r)), $o.length = 0;
  var n = Ss(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), $o.push(a);
  });
}
yt.Component = Ca;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
yt.install = function(e) {
  e.component(Ca.name, Ca);
};
var Tk = Ca, Ow = {
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
  n: Vw,
  classes: Mw
} = x("switch");
function Bw(e, n) {
  var r = ae("var-loading"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = De("ripple"), l = De("hover");
  return ke((p(), O(
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
      ), ke((p(), O(
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
          )) : _("v-if", !0)],
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
var fv = Q({
  name: "VarSwitch",
  components: {
    VarLoading: En,
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  directives: {
    Ripple: We,
    Hover: zn
  },
  props: Ow,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = Pn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Tn(), {
      hovering: i,
      handleHovering: s
    } = kr(), u = () => o(e.rules, e.modelValue), d = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = R(() => {
      var {
        size: w,
        modelValue: V,
        color: S,
        closeColor: T,
        loadingColor: E,
        activeValue: P
      } = e;
      return {
        handle: {
          width: nn(w),
          height: nn(w),
          backgroundColor: V === P ? S : T,
          color: E
        },
        ripple: {
          left: V === P ? nn(w, 0.5) : "-" + nn(w, 0.5),
          color: V === P ? S : T || "#999",
          width: nn(w, 2),
          height: nn(w, 2)
        },
        track: {
          height: nn(w, 0.72),
          width: nn(w, 1.9),
          borderRadius: nn(w, 2 / 3),
          filter: V === P || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === P ? S : T
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
        readonly: P,
        modelValue: I,
        activeValue: g,
        inactiveValue: M,
        "onUpdate:modelValue": D
      } = e;
      if (k(V, w), !(T || E || P || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var C = I === g ? M : g;
        k(S, C), k(D, C), d();
      }
    }, h = (w) => {
      e.disabled || r != null && r.disabled.value || s(w);
    }, b = () => {
      k(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, y = {
      reset: b,
      validate: u,
      resetValidation: l
    };
    return k(n, y), {
      n: Vw,
      classes: Mw,
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
fv.render = Bw;
const Sa = fv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Pk = Sa, Ew = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, cv = Symbol("TABS_BIND_TAB_KEY");
function Iw() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = cn(cv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Nw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = fn(cv);
  return n || $n("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: At,
  classes: Dw
} = x("tab");
function Aw(e, n) {
  var r = De("ripple");
  return ke((p(), O(
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
var mv = Q({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: Ew,
  setup(e) {
    var n = B(null), r = R(() => e.name), a = R(() => e.disabled), t = R(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = Nw(), {
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
    var y = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : y() ? d.value : v.value, V = () => e.disabled ? At("$-tab--disabled") : y() ? At("$-tab--active") : At("$-tab--inactive"), S = (T) => {
      var {
        disabled: E,
        name: P,
        onClick: I
      } = e;
      E || (k(I, P ?? o.value, T), s(b));
    };
    return te(() => e.name, h), te(() => e.disabled, h), {
      n: At,
      classes: Dw,
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
mv.render = Aw;
const ka = mv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Ok = ka, pv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function zw() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = cn(pv);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Lw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = fn(pv);
  return n || $n("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Rw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Uw,
  classes: Hw
} = x("tab-item");
function Fw(e, n) {
  var r = ae("var-swipe-item");
  return p(), ge(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [e.initSlot ? F(e.$slots, "default", {
        key: 0
      }) : _("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var hv = Q({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Wn
  },
  props: Rw,
  setup(e) {
    var n = B(!1), r = B(!1), a = R(() => e.name), {
      index: t,
      bindTabsItems: o
    } = Lw(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: Uw,
      classes: Hw,
      current: n,
      initSlot: r
    };
  }
});
hv.render = Fw;
const $a = hv;
$a.install = function(e) {
  e.component($a.name, $a);
};
var Vk = $a, Yw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: jw,
  classes: Ww
} = x("table");
function Gw(e, n) {
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
        [F(e.$slots, "default")],
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
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var gv = Q({
  name: "VarTable",
  props: Yw,
  setup() {
    return {
      toSizeUnit: he,
      n: jw,
      classes: Ww,
      formatElevation: mn
    };
  }
});
gv.render = Gw;
const Ta = gv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Mk = Ta;
function ts(e) {
  return ["horizontal", "vertical"].includes(e);
}
function qw(e) {
  return ["auto", "always"].includes(e);
}
function Xw(e) {
  return ["normal", "reverse"].includes(e);
}
var Kw = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: ts
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: ts
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
    validator: qw
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: Xw
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Ke(Ht, "cssMode"),
  stickyZIndex: Ke(Ht, "zIndex"),
  offsetTop: Ke(Ht, "offsetTop"),
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
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
function is(e) {
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
  n: Zw,
  classes: Jw
} = x("tabs");
function Qw(e, n) {
  return p(), ge(
    xa(e.sticky ? e.n("$-sticky") : e.Transition),
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
var yv = Q({
  name: "VarTabs",
  components: {
    VarSticky: Gn
  },
  inheritAttrs: !1,
  props: Kw,
  setup(e) {
    var n = B("0px"), r = B("0px"), a = B("0px"), t = B("0px"), o = B(!1), l = B(null), i = R(() => e.active), s = R(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = R(() => e.activeColor), d = R(() => e.inactiveColor), v = R(() => e.disabledColor), f = R(() => e.itemDirection), m = B(null), {
      tabList: h,
      bindTabList: b,
      length: y
    } = Iw(), w = (C) => {
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
      if (y.value !== 0) {
        var {
          active: C
        } = e;
        if (an(C)) {
          var $ = C > y.value - 1 ? y.value - 1 : 0;
          return k(e["onUpdate:active"], $), S($);
        }
      }
    }, E = () => {
      o.value = e.scrollable === "always" || h.length >= 5;
    }, P = (C) => {
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
          ft(z, {
            left: J,
            animation: Oo
          });
        } else {
          var Y = K.offsetTop + K.offsetHeight / 2 - z.offsetHeight / 2;
          ft(z, {
            top: Y,
            animation: Oo
          });
        }
      }
    }, g = () => {
      var C = V() || S() || T();
      !C || C.disabled.value || (E(), P(C), I(C));
    }, M = /* @__PURE__ */ function() {
      var C = is(function* () {
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
      resize: g,
      onTabClick: w
    };
    return b(D), te(() => y.value, /* @__PURE__ */ is(function* () {
      yield An(), g();
    })), te(() => e.active, g), te(() => e.scrollable, g), Pr(g), Xn(() => window, "resize", g), {
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
      n: Zw,
      classes: Jw,
      resize: g,
      resizeSticky: M,
      formatElevation: mn
    };
  }
});
yv.render = Qw;
const Pa = yv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Bk = Pa, _w = {
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
function ls(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function xw(e) {
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
  n: eC
} = x("tabs-items");
function nC(e, n) {
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
var bv = Q({
  name: "VarTabsItems",
  components: {
    VarSwipe: jn
  },
  props: _w,
  setup(e) {
    var n = B(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = zw(), o = (f) => r.find((m) => {
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
          setCurrent: y
        } = b;
        return y(!1);
      }), h.setCurrent(!0), (m = n.value) == null || m.to(h.index.value));
    }, u = (f) => {
      var m, h = r.find((y) => {
        var {
          index: w
        } = y;
        return w.value === f;
      }), b = (m = h.name.value) != null ? m : h.index.value;
      k(e["onUpdate:active"], b);
    }, d = () => n.value, v = {};
    return a(v), te(() => e.active, s), te(() => t.value, /* @__PURE__ */ xw(function* () {
      yield An(), s(e.active);
    })), {
      swipe: n,
      n: eC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
bv.render = nC;
const Oa = bv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Ek = Oa;
const rC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, aC = {
  "--badge-default-color": "#555"
}, tC = {
  "--button-default-color": "#303030"
}, oC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, iC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, lC = {
  "--checkbox-unchecked-color": "#fff"
}, sC = {
  "--chip-default-color": "#555"
}, uC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, dC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, vC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, fC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, cC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, mC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, pC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, hC = {
  "--popup-content-background-color": "#1e1e1e"
}, gC = {
  "--pull-refresh-background": "#303030"
}, yC = {
  "--radio-unchecked-color": "#fff"
}, bC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, wC = {
  "--select-scroller-background": "#303030"
}, CC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, SC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, kC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, $C = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, TC = {
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
}, OC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, VC = {
  "--tabs-background": "#1e1e1e"
}, MC = {
  "--app-bar-color": "#272727"
}, BC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, EC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, IC = {
  "--menu-background-color": "#272727"
}, NC = {
  "--breadcrumb-inactive-color": "#aaa"
}, DC = {
  "--paper-background": "#303030"
}, AC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function hi() {
  return hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, hi.apply(this, arguments);
}
const zC = hi({
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
}, tC, iC, oC, PC, dC, CC, VC, $C, hC, vC, rC, sC, aC, OC, uC, gC, kC, SC, mC, TC, cC, wC, yC, lC, fC, pC, MC, BC, EC, IC, bC, NC, DC, AC);
var LC = {
  dark: zC
}, Ik = null;
const gi = LC;
var yn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], rn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ss = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function RC(e) {
  return ["ampm", "24hr"].includes(e);
}
var UC = {
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
    validator: RC
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
}, wv = (e, n) => e === "24hr" || n === "am", ji = (e, n, r) => {
  var a = yn.findIndex((o) => L(o) === L(r)), t = wv(e, n) ? r : rn[a];
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
}, Cv = (e) => {
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
  } = ji(t, o, l), f = !1, m = !1;
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
      hour: y,
      minute: w
    } = un(s);
    f = y === v && a < w;
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
}, Sv = (e) => {
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
  } = ji(t, o, l), m = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: y,
      second: w
    } = un(s);
    m = b === f && y < i || y === i && a > w;
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
      minute: P,
      second: I
    } = un(s), {
      hour: g,
      minute: M,
      second: D
    } = un(u);
    m = E === f && P < i || g === f && M > i || E === f && P === i && a > I || g === f && M === i && a < D;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || h;
}, {
  n: HC,
  classes: FC
} = x("time-picker");
function YC(e, n) {
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
      Ve,
      null,
      Fe(e.timeScales, (r, a) => (p(), O(
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
    )), e.format === "24hr" && e.type === "hour" ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), O(
        Ve,
        null,
        Fe(e.hours24, (r, a) => (p(), O(
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var kv = Q({
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
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = R(() => e.type === "hour" ? yn : ss), u = (y, w) => {
      var V;
      y = (V = y) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? Cv : Sv, T = {
        time: L(y),
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
      var y = e.isInner ? rn[i.value] : s.value[i.value];
      return s.value === ss ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, w) => w ? i.value === y && e.isInner : i.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (wv(e.format, e.ampm))
          return t.value.includes(y);
        var w = yn.findIndex((V) => V === y);
        return o.value.includes(w);
      }
      return u(y, !0);
    }, m = (y, w, V) => {
      var S = 2 * Math.PI / 12 * y - Math.PI / 2, T = 50 * (1 + Math.cos(S)), E = 50 * (1 + Math.sin(S)), P = () => v(y, V) ? f(w) ? {
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
        color: g
      } = P();
      return {
        left: T + "%",
        top: E + "%",
        backgroundColor: I,
        color: g
      };
    }, h = () => {
      var {
        width: y,
        height: w
      } = a.value.getBoundingClientRect();
      return {
        width: y,
        height: w
      };
    }, b = () => {
      if (i.value !== void 0) {
        var y = e.ampm === "am" ? yn : rn;
        return Ba(y[i.value], 2, "0");
      }
    };
    return te([i, () => e.isInner], (y, w) => {
      var [V, S] = y, [T, E] = w, P = V === T && S === E;
      if (!(P || e.type !== "hour" || i.value === void 0)) {
        var I = S ? rn[i.value] : b(), g = e.useSeconds ? ":" + e.time.second : "", M = I + ":" + e.time.minute + g;
        e.preventNextUpdate || r("update", M), r("change-prevent-update");
      }
    }), te(() => e.rad, (y, w) => {
      if (!(e.type === "hour" || y === void 0 || w === void 0)) {
        var V = y / 6 >= 0 ? y / 6 : y / 6 + 60, S = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (V !== S) {
          var T, {
            hourStr: E
          } = ji(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var P = oe().minute(V).format("mm"), I = e.useSeconds ? ":" + e.time.second : "";
            T = E + ":" + P + I;
          }
          if (e.type === "second") {
            var g = oe().second(V).format("ss"), M = e.useSeconds ? ":" + g : "";
            T = E + ":" + e.time.minute + M;
          }
          r("update", T);
        }
      }
    }), te([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [w, V, S] = y;
      if (t.value = [], w && !V) {
        var {
          hour: T
        } = un(w), E = yn.filter((j) => L(j) > T), P = rn.filter((j) => L(j) > T);
        t.value = [...E, ...P];
      }
      if (!w && V) {
        var {
          hour: I
        } = un(V), g = yn.filter((j) => L(j) < I), M = rn.filter((j) => L(j) < I);
        t.value = [...g, ...M];
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
      n: HC,
      classes: FC,
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
kv.render = YC;
const jC = kv;
var {
  n: WC,
  classes: GC
} = x("time-picker"), qC = (e) => (Aa(""), e = e(), za(), e), XC = /* @__PURE__ */ qC(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), KC = {
  key: 0
};
function ZC(e, n) {
  var r = ae("clock");
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
          re(e.time.hour),
          3
          /* TEXT, CLASS */
        ), XC, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          re(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), O("span", KC, ":")) : _("v-if", !0), e.useSeconds ? (p(), O(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          re(e.time.second),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)],
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
      )) : _("v-if", !0)],
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
var $v = Q({
  name: "VarTimePicker",
  components: {
    Clock: jC
  },
  props: UC,
  setup(e) {
    var n = B(null), r = B(null), a = B(null), t = B(!1), o = B(!1), l = B(!1), i = B(!1), s = B(!1), u = B(void 0), d = B(0), v = B(0), f = B("hour"), m = B("am"), h = B(!1), b = B(!1), y = B({
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
    }, E = (H) => H * 57.29577951308232, P = (H) => {
      i.value = !1, b.value = !1, f.value = H;
    }, I = (H) => {
      var {
        disableHour: N
      } = a.value, W = yn.findIndex((de) => L(de) === L(y.value.hour)), ne = H === "am" ? yn : rn, le = [...ne.slice(W), ...ne.slice(0, W)];
      return le.find((de, be) => (o.value = be !== 0, !N.includes(de)));
    }, g = (H) => {
      if (!e.readonly) {
        m.value = H;
        var N = I(H);
        if (N) {
          var W = e.useSeconds ? ":" + y.value.second : "", ne = Ba(N, 2, "0") + ":" + y.value.minute + W;
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
        hour: oe().hour(W).format(N),
        minute: oe().minute(ne).format("mm"),
        second: oe().second(le).format("ss")
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
        var Oe = t.value || m.value === "pm" ? rn[de] : yn[de];
        h.value = ne.includes(Oe), !h.value && (u.value = le, i.value = !0);
      }
    }, K = (H) => {
      var {
        disableHour: N
      } = a.value, W = Math.round(H / 6) * 6 + 90, ne = W / 6 >= 0 ? W / 6 : W / 6 + 60, le = {
        time: ne,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: N,
        allowedTime: e.allowedTime
      };
      b.value = Cv(le), !b.value && (d.value = W, s.value = !0);
    }, J = (H) => {
      var {
        disableHour: N
      } = a.value, W = Math.round(H / 6) * 6 + 90, ne = W / 6 >= 0 ? W / 6 : W / 6 + 60, le = {
        time: ne,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        minute: L(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: N,
        allowedTime: e.allowedTime
      };
      Sv(le) || (v.value = W);
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
          rangeYMax: Oe
        } = $();
        V.x = [le, de], V.y = [be, Oe];
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
    return te(() => e.modelValue, (H) => {
      if (H) {
        var {
          hour: N,
          minute: W,
          second: ne
        } = un(H), le = oe().hour(N).format("hh"), de = oe().hour(N).format("HH"), be = oe().minute(W).format("mm"), Oe = oe().second(ne).format("ss");
        u.value = (le === "12" ? 0 : L(le)) * 30, d.value = L(be) * 6, v.value = L(Oe) * 6, y.value = D(H), e.format !== "24hr" && (m.value = Ba("" + N, 2, "0") === de && rn.includes(de) ? "pm" : "am"), t.value = e.format === "24hr" && rn.includes(de);
      }
    }, {
      immediate: !0
    }), {
      n: WC,
      classes: GC,
      getRad: S,
      time: y,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: j,
      checkPanel: P,
      checkAmpm: g,
      end: se,
      update: T,
      changePreventUpdate: q,
      formatElevation: mn
    };
  }
});
$v.render = ZC;
const Va = $v;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Nk = Va, JC = {
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
function us(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ds(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        us(o, a, t, l, i, "next", s);
      }
      function i(s) {
        us(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: QC,
  classes: _C
} = x("uploader"), xC = 0, eS = ["onClick"], nS = ["onClick"], rS = ["src", "alt"], aS = ["multiple", "accept", "capture", "disabled"], tS = ["src"];
function oS(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = ae("var-popup"), l = De("ripple"), i = De("hover");
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
        Ve,
        null,
        Fe(e.files, (s) => ke((p(), O(
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
          ), e.removable ? (p(), O(
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
            nS
          )) : _("v-if", !0), s.cover ? (p(), O(
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
            rS
          )) : _("v-if", !0), A(
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
          eS
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((p(), O(
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
          aS
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
      }], [i, e.handleHovering, "desktop"]]) : _("v-if", !0)],
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
            tS
          )) : _("v-if", !0)];
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
var Tv = Q({
  name: "VarUploader",
  directives: {
    Ripple: We,
    Hover: zn
  },
  components: {
    VarIcon: Pe,
    VarPopup: wn,
    VarFormDetails: Je,
    VarHoverOverlay: dn
  },
  props: JC,
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
    } = Pn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Tn(), {
      hovering: v,
      handleHovering: f
    } = kr(), m = R(() => {
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
        if (je(N) && Ki(N)) {
          Dn(N);
          return;
        }
        je(N) && Zi(N) && (a.value = j, r.value = !0);
      }
    }, b = (j) => ({
      id: xC++,
      url: "",
      cover: "",
      name: j.name,
      file: j,
      progress: 0
    }), y = (j) => {
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
        var N = Po(k(se, Le(q)));
        Promise.all(N).then((W) => {
          H({
            valid: W.every(Boolean),
            varFile: q
          });
        });
      }));
    }, T = /* @__PURE__ */ function() {
      var j = ds(function* (se) {
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
          var be = (Me) => Me.filter((Ie) => Ie.file.size > L(q) ? (k(W, Le(Ie)), !1) : !0), Oe = (Me) => {
            var Ie = Math.min(Me.length, L(H) - N.length);
            return Me.slice(0, Ie);
          }, on = y(se), ee = on.map(b);
          ee = q != null ? be(ee) : ee, ee = H != null ? Oe(ee) : ee;
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
      var j = ds(function* (se) {
        var {
          disabled: q,
          readonly: H,
          modelValue: N,
          onBeforeRemove: W,
          onRemove: ne
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || q || H)) {
          if (W) {
            var le = Po(k(W, Le(se)));
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
    }(), P = () => e.modelValue.filter((j) => j.state === "success"), I = () => e.modelValue.filter((j) => j.state === "error"), g = () => e.modelValue.filter((j) => j.state === "loading"), M = () => {
      n.value.click();
    }, D = () => {
      a.value = null, r.value = !1, Dn.close();
    }, C = {
      getSuccess: P,
      getError: I,
      getLoading: g
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
    return k(l, Y), te(() => e.modelValue, () => {
      !z && $("onChange"), z = !1;
    }, {
      deep: !0
    }), {
      n: QC,
      classes: _C,
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
      isHTMLSupportVideo: Zi,
      isHTMLSupportImage: Ki,
      preview: h,
      handleChange: T,
      handleRemove: E,
      getSuccess: P,
      getError: I,
      getLoading: g,
      validate: K,
      resetValidation: d,
      reset: J,
      chooseFile: M,
      closePreview: D,
      toSizeUnit: he
    };
  }
});
Tv.render = oS;
const Ma = Tv;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var Dk = Ma;
const iS = "2.10.2";
function lS(e) {
  Kn.install && e.use(Kn), Er.install && e.use(Er), Ir.install && e.use(Ir), Nr.install && e.use(Nr), Dr.install && e.use(Dr), vr.install && e.use(vr), Ar.install && e.use(Ar), zr.install && e.use(zr), Lr.install && e.use(Lr), Rr.install && e.use(Rr), _e.install && e.use(_e), Ur.install && e.use(Ur), Hr.install && e.use(Hr), fr.install && e.use(fr), cr.install && e.use(cr), Fr.install && e.use(Fr), mr.install && e.use(mr), Yr.install && e.use(Yr), jr.install && e.use(jr), Wr.install && e.use(Wr), hn.install && e.use(hn), Gr.install && e.use(Gr), qr.install && e.use(qr), Kr.install && e.use(Kr), Zn.install && e.use(Zn), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), Yn.install && e.use(Yn), Je.install && e.use(Je), zn.install && e.use(zn), dn.install && e.use(dn), Pe.install && e.use(Pe), _r.install && e.use(_r), Dn.install && e.use(Dn), xr.install && e.use(xr), ea.install && e.use(ea), br.install && e.use(br), ct.install && e.use(ct), na.install && e.use(na), ra.install && e.use(ra), En.install && e.use(En), di.install && e.use(di), Do.install && e.use(Do), qn.install && e.use(qn), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), Na.install && e.use(Na), wn.install && e.use(wn), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), We.install && e.use(We), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), pi.install && e.use(pi), ya.install && e.use(ya), ba.install && e.use(ba), wa.install && e.use(wa), Gn.install && e.use(Gn), yt.install && e.use(yt), jn.install && e.use(jn), Wn.install && e.use(Wn), Sa.install && e.use(Sa), ka.install && e.use(ka), $a.install && e.use($a), Ta.install && e.use(Ta), Pa.install && e.use(Pa), Oa.install && e.use(Oa), gi.install && e.use(gi), Va.install && e.use(Va), gr.install && e.use(gr), Ma.install && e.use(Ma);
}
const Ak = {
  version: iS,
  install: lS,
  ActionSheet: Kn,
  AppBar: Er,
  Avatar: Ir,
  AvatarGroup: Nr,
  BackTop: Dr,
  Badge: vr,
  BottomNavigation: Ar,
  BottomNavigationItem: zr,
  Breadcrumb: Lr,
  Breadcrumbs: Rr,
  Button: _e,
  ButtonGroup: Ur,
  Card: Hr,
  Cell: fr,
  Checkbox: cr,
  CheckboxGroup: Fr,
  Chip: mr,
  Col: Yr,
  Collapse: jr,
  CollapseItem: Wr,
  Context: hn,
  Countdown: Gr,
  Counter: qr,
  DatePicker: Kr,
  Dialog: Zn,
  Divider: Zr,
  Ellipsis: Jr,
  Fab: Qr,
  Form: Yn,
  FormDetails: Je,
  Hover: zn,
  HoverOverlay: dn,
  Icon: Pe,
  Image: _r,
  ImagePreview: Dn,
  IndexAnchor: xr,
  IndexBar: ea,
  Input: br,
  Lazy: ct,
  Link: na,
  List: ra,
  Loading: En,
  LoadingBar: di,
  Locale: Do,
  Menu: qn,
  Option: aa,
  Overlay: ta,
  Pagination: oa,
  Paper: ia,
  Picker: Na,
  Popup: wn,
  Progress: la,
  PullRefresh: sa,
  Radio: ua,
  RadioGroup: da,
  Rate: va,
  Result: fa,
  Ripple: We,
  Row: ca,
  Select: ma,
  Skeleton: pa,
  Slider: ha,
  Snackbar: pi,
  Space: ya,
  Step: ba,
  Steps: wa,
  Sticky: Gn,
  StyleProvider: yt,
  Swipe: jn,
  SwipeItem: Wn,
  Switch: Sa,
  Tab: ka,
  TabItem: $a,
  Table: Ta,
  Tabs: Pa,
  TabsItems: Oa,
  Themes: gi,
  TimePicker: Va,
  Tooltip: gr,
  Uploader: Ma
};
export {
  Kn as ActionSheet,
  Er as AppBar,
  Ir as Avatar,
  Nr as AvatarGroup,
  Dr as BackTop,
  vr as Badge,
  Ar as BottomNavigation,
  zr as BottomNavigationItem,
  Lr as Breadcrumb,
  Rr as Breadcrumbs,
  _e as Button,
  Ur as ButtonGroup,
  Hr as Card,
  fr as Cell,
  cr as Checkbox,
  Fr as CheckboxGroup,
  mr as Chip,
  Yr as Col,
  jr as Collapse,
  Wr as CollapseItem,
  hn as Context,
  Gr as Countdown,
  qr as Counter,
  Kr as DatePicker,
  Zn as Dialog,
  Zr as Divider,
  Jr as Ellipsis,
  Qr as Fab,
  Yn as Form,
  Je as FormDetails,
  zn as Hover,
  dn as HoverOverlay,
  Pe as Icon,
  _r as Image,
  Dn as ImagePreview,
  xr as IndexAnchor,
  ea as IndexBar,
  br as Input,
  ct as Lazy,
  na as Link,
  ra as List,
  En as Loading,
  di as LoadingBar,
  Do as Locale,
  qn as Menu,
  aa as Option,
  ta as Overlay,
  Lo as PIXEL,
  oa as Pagination,
  ia as Paper,
  Na as Picker,
  wn as Popup,
  la as Progress,
  sa as PullRefresh,
  ua as Radio,
  da as RadioGroup,
  va as Rate,
  fa as Result,
  We as Ripple,
  ca as Row,
  Fi as SNACKBAR_TYPE,
  ma as Select,
  pa as Skeleton,
  ha as Slider,
  pi as Snackbar,
  ya as Space,
  ba as Step,
  wa as Steps,
  Gn as Sticky,
  yt as StyleProvider,
  jn as Swipe,
  Wn as SwipeItem,
  Sa as Switch,
  ka as Tab,
  $a as TabItem,
  Ta as Table,
  Pa as Tabs,
  Oa as TabsItems,
  gi as Themes,
  Va as TimePicker,
  gr as Tooltip,
  Ma as Uploader,
  mS as _ActionSheetComponent,
  pS as _AppBarComponent,
  gS as _AvatarComponent,
  yS as _AvatarGroupComponent,
  kS as _BackTopComponent,
  $S as _BadgeComponent,
  TS as _BottomNavigationComponent,
  PS as _BottomNavigationItemComponent,
  OS as _BreadcrumbComponent,
  VS as _BreadcrumbsComponent,
  SS as _ButtonComponent,
  MS as _ButtonGroupComponent,
  BS as _CardComponent,
  ES as _CellComponent,
  NS as _CheckboxComponent,
  DS as _CheckboxGroupComponent,
  AS as _ChipComponent,
  zS as _ColComponent,
  LS as _CollapseComponent,
  RS as _CollapseItemComponent,
  uS as _ContextComponent,
  US as _CountdownComponent,
  HS as _CounterComponent,
  FS as _DatePickerComponent,
  YS as _DialogComponent,
  jS as _DividerComponent,
  GS as _EllipsisComponent,
  qS as _FabComponent,
  XS as _FormComponent,
  IS as _FormDetailsComponent,
  CS as _HoverComponent,
  wS as _HoverOverlayComponent,
  fS as _IconComponent,
  KS as _ImageComponent,
  QS as _ImagePreviewComponent,
  xS as _IndexAnchorComponent,
  ek as _IndexBarComponent,
  nk as _InputComponent,
  hS as _LazyComponent,
  rk as _LinkComponent,
  ak as _ListComponent,
  tk as _LoadingBarComponent,
  bS as _LoadingComponent,
  cS as _LocaleComponent,
  ok as _MenuComponent,
  ik as _OptionComponent,
  lk as _OverlayComponent,
  sk as _PaginationComponent,
  uk as _PaperComponent,
  dk as _PickerComponent,
  vS as _PopupComponent,
  vk as _ProgressComponent,
  fk as _PullRefreshComponent,
  ck as _RadioComponent,
  mk as _RadioGroupComponent,
  pk as _RateComponent,
  hk as _ResultComponent,
  dS as _RippleComponent,
  gk as _RowComponent,
  yk as _SelectComponent,
  bk as _SkeletonComponent,
  wk as _SliderComponent,
  Ck as _SnackbarComponent,
  Sk as _SpaceComponent,
  kk as _StepComponent,
  $k as _StepsComponent,
  _S as _StickyComponent,
  Tk as _StyleProviderComponent,
  ZS as _SwipeComponent,
  JS as _SwipeItemComponent,
  Pk as _SwitchComponent,
  Ok as _TabComponent,
  Vk as _TabItemComponent,
  Mk as _TableComponent,
  Bk as _TabsComponent,
  Ek as _TabsItemsComponent,
  Ik as _ThemesComponent,
  Nk as _TimePickerComponent,
  WS as _TooltipComponent,
  Dk as _UploaderComponent,
  pf as actionSheetProps,
  ki as add,
  Sf as appBarProps,
  Xf as avatarGroupProps,
  Ff as avatarProps,
  $c as backTopProps,
  Bc as badgeProps,
  Hc as bottomNavigationItemProps,
  Dc as bottomNavigationProps,
  qc as breadcrumbProps,
  _c as breadcrumbsProps,
  gc as buttonProps,
  um as cardProps,
  pm as cellProps,
  Im as checkboxGroupProps,
  $m as checkboxProps,
  Rm as chipProps,
  Wm as colProps,
  ep as collapseItemProps,
  Jm as collapseProps,
  tp as countdownProps,
  eh as counterProps,
  Ch as datePickerProps,
  Ak as default,
  Ge as defaultLazyOptions,
  Rh as dialogProps,
  jh as dividerProps,
  Ns as enUS,
  bm as formDetailsProps,
  hy as formProps,
  Es as iconProps,
  Rs as imageCache,
  Ry as imagePreviewProps,
  Cy as imageProps,
  Zy as indexAnchorProps,
  xy as indexBarProps,
  db as inputProps,
  lS as install,
  bb as linkProps,
  kb as listProps,
  Vb as loadingBarProps,
  ir as loadingProps,
  Ub as menuProps,
  As as merge,
  Gb as optionProps,
  Zb as overlayProps,
  Xe as pack,
  Ds as packs,
  Qb as paginationProps,
  r0 as paperProps,
  i0 as pickerProps,
  $t as popupProps,
  m0 as progressProps,
  C0 as pullRefreshProps,
  E0 as radioGroupProps,
  $0 as radioProps,
  A0 as rateProps,
  U0 as resultProps,
  T1 as rowProps,
  B1 as selectProps,
  A1 as skeletonProps,
  H1 as sliderProps,
  rv as snackbarProps,
  dw as spaceProps,
  cw as stepProps,
  Cw as stepsProps,
  Ht as stickyProps,
  $w as styleProviderProps,
  cd as swipeProps,
  Ow as switchProps,
  Rw as tabItemProps,
  Ew as tabProps,
  Yw as tableProps,
  _w as tabsItemsProps,
  Kw as tabsProps,
  UC as timePickerProps,
  ny as tooltipProps,
  JC as uploaderProps,
  $i as use,
  kr as useHoverOverlay,
  Si as useLocale,
  iS as version,
  Ci as zhCN
};
