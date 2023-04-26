import { reactive as Ne, onMounted as Qt, nextTick as Be, onActivated as Pr, isRef as Vv, watch as ie, onBeforeUnmount as _t, onDeactivated as _n, unref as tt, inject as Mv, getCurrentInstance as Qa, computed as U, provide as Bv, isVNode as yt, Comment as Ev, Fragment as Oe, ref as M, createApp as Iv, h as vs, onBeforeMount as Nv, onUnmounted as _a, defineComponent as _, createVNode as J, Teleport as Da, Transition as ze, withDirectives as Ce, vShow as Cr, mergeProps as Ee, openBlock as g, createBlock as ye, resolveDynamicComponent as xa, normalizeClass as c, normalizeStyle as G, resolveComponent as te, resolveDirective as Ie, withCtx as de, createElementVNode as z, renderSlot as F, toDisplayString as ae, createElementBlock as O, renderList as Ae, createCommentVNode as ee, onUpdated as xt, createTextVNode as we, pushScopeId as za, popScopeId as Aa, withModifiers as pn, normalizeProps as bt, guardReactiveProps as eo, vModelText as Dv, toRefs as zv, watchEffect as Av, withKeys as qi, toRaw as Xi, TransitionGroup as Lv } from "vue";
var fs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, vS = Ne(fs);
const mn = Ne(fs), Re = (e) => typeof e == "string", Po = (e) => typeof e == "boolean", nn = (e) => typeof e == "number", bi = (e) => Object.prototype.toString.call(e) === "[object Object]", Rv = (e) => typeof e == "object" && e !== null, wt = (e) => typeof e == "function", $e = (e) => Array.isArray(e), Uv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Un = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Re(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Po(e) ? Number(e) : e, Ht = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, wi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, Ct = () => typeof window < "u", Ki = (e) => [...new Set(e)], cs = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Hv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Fv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
}, Oo = (e) => $e(e) ? e : [e];
var Zi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ji = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Yv = (e) => {
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
      this.has(r) && Ht(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Vo = (e) => e, Qi = (e) => Math.pow(e, 3), ms = (e) => e < 0.5 ? Qi(e * 2) / 2 : 1 - Qi((1 - e) * 2) / 2, no = (e, n) => e ?? n, ps = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Ba = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Sn(e, n) {
  throw Error("Varlet [" + e + "]: " + n);
}
function _i(e, n) {
  console.warn("Varlet [" + e + "]: " + n);
}
function xi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function jv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        xi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        xi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Wv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function el(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Gv(e) {
  return e.getBoundingClientRect().top;
}
function dt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Ci(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function qv(e) {
  return Mo.apply(this, arguments);
}
function Mo() {
  return Mo = jv(function* (e) {
    yield Dn();
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
  }), Mo.apply(this, arguments);
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
function Xv(e) {
  for (var n = [], r = e; r !== window; )
    r = Sr(r), n.push(r);
  return n;
}
function hs(e, n) {
  if (Re(e)) {
    var r = document.querySelector(e);
    return r || Sn(n, "target element cannot found"), r;
  }
  if (Rv(e))
    return e;
  Sn(n, 'type of prop "target" should be a selector or an element object');
}
function nl() {
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
var gs = (e) => Re(e) && e.endsWith("rem"), Kv = (e) => Re(e) && e.endsWith("px") || nn(e), Zv = (e) => Re(e) && e.endsWith("%"), ys = (e) => Re(e) && e.endsWith("vw"), bs = (e) => Re(e) && e.endsWith("vh"), ws = (e) => Re(e) && e.endsWith("vmin"), Cs = (e) => Re(e) && e.endsWith("vmax"), Jv = (e) => Re(e) && e.startsWith("calc("), Qv = (e) => Re(e) && e.startsWith("var("), Le = (e) => {
  if (nn(e))
    return e;
  if (Kv(e))
    return +e.replace("px", "");
  if (ys(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (bs(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (gs(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return ws(e) ? nl().vMin : Cs(e) ? nl().vMax : Re(e) ? L(e) : 0;
}, ge = (e) => {
  if (e != null)
    return Zv(e) || ys(e) || bs(e) || gs(e) || Jv(e) || Qv(e) || ws(e) || Cs(e) ? e : Le(e) + "px";
}, xe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = ge(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function yn(e) {
  var n = ps();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function rl(e) {
  var n = ps();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function ro(e) {
  yn(() => {
    yn(e);
  });
}
function Dn() {
  return new Promise((e) => {
    yn(() => {
      yn(e);
    });
  });
}
function _v() {
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
  } = n, l = Date.now(), i = dt(e), s = Ci(e);
  return new Promise((u) => {
    var d = () => {
      var f = (Date.now() - l) / t;
      if (f < 1) {
        var v = i + (r - i) * o(f), m = s + (a - s) * o(f);
        e.scrollTo(m, v), yn(d);
      } else
        e.scrollTo(a, r), u();
    };
    yn(d);
  });
}
function Ss(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Hv(a);
    return n[o] = t, n;
  }, {});
}
function xv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Ft(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function sn(e) {
  let n = !1;
  Qt(() => {
    e(), Be(() => {
      n = !0;
    });
  }), Pr(() => {
    n && e();
  });
}
function Kn(e, n, r, a = {}) {
  if (!Ct())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => wt(m) ? m() : tt(m), u = (m) => {
    if (l || i)
      return;
    const p = s(m);
    p && (p.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, d = (m) => {
    if (!l || i)
      return;
    const p = s(m);
    p && (p.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let f;
  Vv(e) && (f = ie(() => e.value, (m, p) => {
    d(p), u(m);
  }));
  const v = () => {
    f == null || f(), d(e), i = !0;
  };
  return sn(() => {
    u(e);
  }), _t(() => {
    d(e);
  }), _n(() => {
    d(e);
  }), v;
}
function ks(e, n, r) {
  if (!Ct())
    return;
  Kn(document, n, (t) => {
    const o = tt(e);
    o && !o.contains(t.target) && r(t);
  });
}
var ef = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function nf(e) {
  const n = Qa();
  return e in n.provides;
}
function un(e) {
  if (!nf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = Mv(e), { childInstances: r, collect: a, clear: t } = n, o = ef(n, ["childInstances", "collect", "clear"]), l = Qa();
  return {
    index: U(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      Qt(() => {
        Be().then(() => {
          a(l, u);
        });
      }), _t(() => {
        Be().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function rf(e) {
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
function dn(e) {
  const n = Qa(), r = Ne([]), a = [], t = U(() => r.length), o = () => {
    const u = rf(n.subTree);
    r.sort((d, f) => u.indexOf(d.vnode) - u.indexOf(f.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    Ht(r, u), Ht(a, d);
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
function qe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function af(e) {
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
      return () => vs(e, Bo({}, n, r));
    }
  }, {
    unmount: t
  } = af(a);
  return {
    unmountInstance: t
  };
}
function $s(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== Ev) {
      if (r.type === Oe && $e(r.children)) {
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
  var e = M(""), n = /* @__PURE__ */ function() {
    var t = tl(function* (o, l, i) {
      if (!$e(o) || !o.length)
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
function tf(e) {
  Kn(() => window, "hashchange", e), Kn(() => window, "popstate", e);
}
function ao() {
  var e = M(!1);
  return Pr(() => {
    e.value = !1;
  }), _n(() => {
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
      if ($e(s)) {
        var [u, d, f = null] = s;
        return u ? d : f;
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
  if ($e(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function H(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function vn(e, n) {
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
    return U({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : k(e[i], d);
      }
    });
  var u = M(s());
  return ie(() => e[n], () => {
    u.value = s();
  }), ie(() => u.value, (d) => {
    l ? l(i, d) : k(e[i], d);
  }), u;
}
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
var {
  n: Ps
} = x("ripple"), ol = 250;
function of(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function lf(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: o
  } = e, l = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, i = l * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - l * 2) / 2, f = (o - l * 2) / 2, v = s - l, m = u - l;
  return {
    x: v,
    y: m,
    centerX: d,
    centerY: f,
    size: i
  };
}
function Os(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker || !mn.enableRipple)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = lf(this, e), s = document.createElement("div");
      s.classList.add(Ps()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), of(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Eo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Ps());
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
function Vs() {
  if (!(!xv() || !mn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function sf(e, n) {
  var r;
  e._ripple = Yt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    removeRipple: Eo.bind(e)
  }), e.addEventListener("touchstart", Os, {
    passive: !0
  }), e.addEventListener("touchmove", Vs, {
    passive: !0
  }), e.addEventListener("dragstart", Eo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function uf(e) {
  e.removeEventListener("touchstart", Os), e.removeEventListener("touchmove", Vs), e.removeEventListener("dragstart", Eo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function df(e, n) {
  var r, a, t, o, l = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (a = n.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = Yt({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Ms = {
  mounted: sf,
  unmounted: uf,
  updated: df,
  install(e) {
    e.directive("ripple", this);
  }
}, fS = Ms;
const Ue = Ms;
function vf(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var St = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: vf
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
  onOpen: H(),
  onOpened: H(),
  onClose: H(),
  onClosed: H(),
  onClickOverlay: H(),
  "onUpdate:show": H(),
  // internal for Dialog
  onRouteChange: H()
};
function Bs() {
  var e = Object.keys(mn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Pt(e) {
  mn.locks[e] = 1, Bs();
}
function Ot(e) {
  delete mn.locks[e], Bs();
}
function to(e, n) {
  var {
    uid: r
  } = Qa();
  n && ie(n, (a) => {
    a === !1 ? Ot(r) : a === !0 && e() === !0 && Pt(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? Pt(r) : Ot(r));
  }), Nv(() => {
    n && n() === !1 || e() === !0 && Pt(r);
  }), _a(() => {
    n && n() === !1 || e() === !0 && Ot(r);
  }), Pr(() => {
    n && n() === !1 || e() === !0 && Pt(r);
  }), _n(() => {
    n && n() === !1 || e() === !0 && Ot(r);
  });
}
function kt(e, n) {
  var r = M(mn.zIndex);
  return ie(e, (a) => {
    a && (mn.zIndex += n, r.value = mn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
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
function ff(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: Rn,
  classes: wo
} = x("popup");
const bn = _({
  name: "VarPopup",
  inheritAttrs: !1,
  props: St,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = kt(() => e.show, 3), {
      disabled: o
    } = ao(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: f
      } = e;
      k(f), d && k(e["onUpdate:show"], !1);
    };
    to(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      k(d ? e.onOpen : e.onClose);
    }), tf(() => k(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: f
      } = e;
      return J("div", {
        class: wo(Rn("overlay"), d),
        style: Io({
          zIndex: t.value - 1
        }, f),
        onClick: l
      }, null);
    }, s = () => J("div", Ee({
      class: wo(Rn("content"), Rn("--" + e.position), [e.defaultStyle, Rn("--content-background-color")], [e.defaultStyle, Rn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [k(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: f,
        show: v,
        overlay: m,
        transition: p,
        position: y
      } = e;
      return J(ze, {
        name: Rn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: f
      }, {
        default: () => [Ce(J("div", {
          class: wo(Rn("$--box"), Rn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), J(ze, {
          name: p || Rn("$-pop-" + y)
        }, {
          default: () => [v && s()]
        })]), [[Cr, v]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var f;
        return J(Da, {
          to: d,
          disabled: o.value
        }, ff(f = u()) ? f : {
          default: () => [f]
        });
      }
      return u();
    };
  }
});
bn.install = function(e) {
  e.component(bn.name, bn);
};
var cS = bn, Es = {
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
  onClick: H()
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
function cf(e) {
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
  n: mf,
  classes: pf
} = x("icon");
function hf(e, n) {
  return g(), ye(
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
var Is = _({
  name: "VarIcon",
  props: Es,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = cf(function* (o, l) {
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
      n: mf,
      classes: pf,
      nextName: n,
      animateInProgress: r,
      isURL: Uv,
      toNumber: L,
      toSizeUnit: ge
    };
  }
});
Is.render = hf;
const Pe = Is;
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
var mS = Pe;
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
var gf = No({
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
  onSelect: H(),
  "onUpdate:show": H()
}, qe(St, [
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
const Si = {
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
function ki() {
  var e = {}, n = M({}), r = (o, l) => {
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
    e[o] = Do({}, e[o], l), a(o);
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
  pack: Ge,
  add: $i,
  use: Ti,
  merge: zs
} = ki();
$i("zh-CN", Si);
Ti("zh-CN");
var pS = {
  zhCN: Si,
  enUS: Ns,
  packs: Ds,
  pack: Ge,
  add: $i,
  use: Ti,
  merge: zs,
  useLocale: ki
};
const zo = {
  zhCN: Si,
  enUS: Ns,
  packs: Ds,
  pack: Ge,
  add: $i,
  use: Ti,
  merge: zs,
  useLocale: ki
};
var {
  n: yf,
  classes: bf
} = x("action-sheet"), wf = ["onClick"];
function Cf(e, n) {
  var r = te("var-icon"), a = te("var-popup"), t = Ie("ripple");
  return g(), ye(
    a,
    Ee({
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
      default: de(() => [z(
        "div",
        Ee({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [F(e.$slots, "title", {}, () => [z(
          "div",
          {
            class: c(e.n("title"))
          },
          ae(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), F(e.$slots, "actions", {}, () => [(g(!0), O(
          Oe,
          null,
          Ae(e.actions, (o) => Ce((g(), O(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: G({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (g(), ye(
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
            wf
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
var As = _({
  name: "VarActionSheet",
  directives: {
    Ripple: Ue
  },
  components: {
    VarPopup: bn,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: gf,
  setup(e) {
    var n = M(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        k(l, t), o && k(e["onUpdate:show"], !1);
      }
    }, a = (t) => k(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: yf,
      classes: bf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ge,
      dt: no,
      handleSelect: r
    };
  }
});
As.render = Cf;
const dr = As;
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
var tr, Pi = {};
function Sf(e) {
  return e === void 0 && (e = {}), Ao({}, Pi, e);
}
function Zn(e) {
  return Ct() ? new Promise((n) => {
    Zn.close();
    var r = Ne(Sf(e));
    r.teleport = "body", tr = r;
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
    tr = null, Be().then(() => {
      e.show = !1;
    });
  }
};
Zn.Component = dr;
dr.install = function(e) {
  e.component(dr.name, dr);
};
Zn.install = function(e) {
  e.component(dr.name, dr);
};
var hS = dr;
function kf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var $f = {
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
    validator: kf
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
  n: Tf,
  classes: Pf
} = x("app-bar");
function Of(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
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
        [F(e.$slots, "left"), e.titlePosition === "left" ? (g(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingLeft: e.paddingLeft
            })
          },
          [F(e.$slots, "default", {}, () => [we(
            ae(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (g(), O(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [F(e.$slots, "default", {}, () => [we(
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
        [e.titlePosition === "right" ? (g(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingRight: e.paddingRight
            })
          },
          [F(e.$slots, "default", {}, () => [we(
            ae(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0), F(e.$slots, "right")],
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
var Ls = _({
  name: "VarAppBar",
  props: $f,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, l = U(() => {
      var {
        image: i,
        color: s,
        textColor: u,
        imageLinearGradient: d
      } = e;
      if (i != null) {
        var f = d ? "linear-gradient(" + d + "), " : "";
        return {
          "background-image": f + "url(" + i + ")",
          "background-position": "center center",
          "background-size": "cover"
        };
      }
      return {
        background: s,
        color: u
      };
    });
    return sn(o), xt(o), {
      n: Tf,
      classes: Pf,
      formatElevation: vn,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ls.render = Of;
const Er = Ls;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var gS = Er;
function ll(e, n, r, a, t, o, l) {
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
        ll(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ll(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
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
var Vf = "background-image", Mf = "lazy-loading", Bf = "lazy-error", sl = "lazy-attempt", Ef = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ro = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ga = [], jt = [], Rs = Yv(100), Ye = {
  loading: Ro,
  error: Ro,
  attempt: 3,
  throttleWait: 300,
  events: Ef
}, Oi = wi($t, Ye.throttleWait);
function io(e, n) {
  e._lazy.arg === Vf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function If(e) {
  e._lazy.loading && io(e, e._lazy.loading), $t();
}
function Nf(e) {
  e._lazy.error && io(e, e._lazy.error), e._lazy.state = "error", Mi(e), $t();
}
function Us(e, n) {
  io(e, n), e._lazy.state = "success", Mi(e), $t();
}
function Df(e) {
  var n;
  jt.includes(e) || (jt.push(e), (n = Ye.events) == null || n.forEach((r) => {
    e.addEventListener(r, Oi, {
      passive: !0
    });
  }));
}
function zf() {
  jt.forEach((e) => {
    var n;
    (n = Ye.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Oi);
    });
  }), jt.length = 0;
}
function Af(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Mf)) != null ? r : Ye.loading,
    error: (a = e.getAttribute(Bf)) != null ? a : Ye.error,
    attempt: e.getAttribute(sl) ? Number(e.getAttribute(sl)) : Ye.attempt
  };
  e._lazy = Lo({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), io(e, Ro), k(Ye.filter, e._lazy);
}
function Lf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Rs.add(n), Us(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Nf(e) : Hs(e);
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
    If(e), Lf(e, n);
  }
}
function Vi(e) {
  return Uo.apply(this, arguments);
}
function Uo() {
  return Uo = oo(function* (e) {
    (yield qv(e)) && Hs(e);
  }), Uo.apply(this, arguments);
}
function $t() {
  Ga.forEach((e) => Vi(e));
}
function Rf(e) {
  return Ho.apply(this, arguments);
}
function Ho() {
  return Ho = oo(function* (e) {
    !Ga.includes(e) && Ga.push(e), Xv(e).forEach(Df), yield Vi(e);
  }), Ho.apply(this, arguments);
}
function Mi(e) {
  Ht(Ga, e), Ga.length === 0 && zf();
}
function Uf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Fs(e, n) {
  return Fo.apply(this, arguments);
}
function Fo() {
  return Fo = oo(function* (e, n) {
    Af(e, n), yield Rf(e);
  }), Fo.apply(this, arguments);
}
function Hf(e, n) {
  return Yo.apply(this, arguments);
}
function Yo() {
  return Yo = oo(function* (e, n) {
    if (!Uf(e, n)) {
      Ga.includes(e) && (yield Vi(e));
      return;
    }
    yield Fs(e, n);
  }), Yo.apply(this, arguments);
}
function Ff(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  Ye.events = n ?? Ye.events, Ye.loading = r ?? Ye.loading, Ye.error = a ?? Ye.error, Ye.attempt = t ?? Ye.attempt, Ye.throttleWait = o ?? Ye.throttleWait, Ye.filter = l;
}
var Ys = {
  mounted: Fs,
  unmounted: Mi,
  updated: Hf,
  install(e, n) {
    Ff(n), Oi = wi($t, Ye.throttleWait), e.directive("lazy", this);
  }
}, yS = Ys;
const ft = Ys;
function Yf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var js = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ws(e) {
  return js(e) || nn(e) || Re(e);
}
var jf = {
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
    validator: Yf,
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
  onClick: H(),
  onLoad: H(),
  onError: H()
}, {
  n: Wf,
  classes: Gf
} = x("avatar"), qf = ["src", "lazy-loading", "lazy-error"], Xf = ["src"];
function Kf(e, n) {
  var r = Ie("lazy");
  return g(), O(
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
    [e.src ? (g(), O(
      Oe,
      {
        key: 0
      },
      [e.lazy ? Ce((g(), O(
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
        qf
      )), [[r, e.src]]) : (g(), O(
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
        Xf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (g(), O(
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
var Gs = _({
  name: "VarAvatar",
  directives: {
    Lazy: ft
  },
  props: jf,
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
        onLoad: f,
        onError: v
      } = e;
      d ? (u._lazy.state === "success" && k(f, s), u._lazy.state === "error" && k(v, s)) : k(f, s);
    }, l = (s) => {
      k(e.onError, s);
    }, i = (s) => {
      k(e.onClick, s);
    };
    return sn(t), xt(t), {
      internalSizeValidator: js,
      sizeValidator: Ws,
      toSizeUnit: ge,
      n: Wf,
      classes: Gf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Gs.render = Kf;
const Ir = Gs;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var bS = Ir, Zf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Jf,
  classes: Qf
} = x("avatar-group");
function _f(e, n) {
  return g(), O(
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
var qs = _({
  name: "VarAvatarGroup",
  props: Zf,
  setup(e) {
    var n = U(() => e.offset == null ? {} : {
      "--avatar-group-offset": ge(e.offset)
    });
    return {
      n: Jf,
      classes: Qf,
      toSizeUnit: ge,
      rootStyles: n
    };
  }
});
qs.render = _f;
const Nr = qs;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var wS = Nr;
function xf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function ec(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var lr = {
  type: {
    type: String,
    default: "circle",
    validator: xf
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: ec
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
  n: nc,
  classes: rc
} = x("loading"), ac = (e) => (za(""), e = e(), Aa(), e), tc = /* @__PURE__ */ ac(() => /* @__PURE__ */ z(
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
)), oc = [tc];
function ic(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (g(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [F(e.$slots, "default"), e.loading ? (g(), O(
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
    )) : ee("v-if", !0), e.isShow ? (g(), O(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (g(), O(
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
          oc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : ee("v-if", !0), (g(!0), O(
        Oe,
        null,
        Ae(e.loadingTypeDict, (r, a) => (g(), O(
          Oe,
          {
            key: a
          },
          [e.type === a ? (g(), O(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(g(!0), O(
              Oe,
              null,
              Ae(r, (t) => (g(), O(
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
      )), e.$slots.description || e.description ? (g(), O(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: G({
            color: e.color
          })
        },
        [F(e.$slots, "description", {}, () => [we(
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
var Xs = _({
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
    }, t = U(() => k(r.default) ? e.loading : !0);
    return {
      n: nc,
      classes: rc,
      multiplySizeUnit: xe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Xs.render = ic;
const Bn = Xs;
Bn.install = function(e) {
  e.component(Bn.name, Bn);
};
var CS = Bn, lc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: sc,
  classes: uc
} = x("hover-overlay");
function dc(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var Ks = _({
  name: "VarHoverOverlay",
  props: lc,
  setup() {
    return {
      n: sc,
      classes: uc
    };
  }
});
Ks.render = dc;
const on = Ks;
on.install = function(e) {
  e.component(on.name, on);
};
function kr() {
  var e = M(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var SS = on;
function Zs(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function vc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[cs(t)] = o, r;
  }, {}) : {};
}
function fc(e) {
  var {
    value: n
  } = e._hover, r = vc(e);
  Object.keys(n).forEach((a) => {
    var t = cs(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Bi(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function cc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function Js(e) {
  cc(e), Bi(e, e._hover.rawStyle);
}
function Qs() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, wt(e)) {
    e(this._hover.hovering);
    return;
  }
  Bi(this, e);
}
function _s() {
  if (this._hover.hovering = !1, wt(this._hover.value)) {
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
  }, fc(e), e.addEventListener("mouseenter", Qs), e.addEventListener("mouseleave", _s));
}
function eu(e, n) {
  Zs(n.arg) || (Js(e), e.removeEventListener("mouseenter", Qs), e.removeEventListener("mouseleave", _s));
}
function mc(e, n) {
  e._hover && eu(e, n);
}
function pc(e, n) {
  return !wt(n.value) && e._hover.hovering;
}
function hc(e, n) {
  xs(e, n), pc(e, n) && Bi(e, n.value);
}
var nu = {
  mounted: xs,
  unmounted: eu,
  beforeUpdate: mc,
  updated: hc,
  install(e) {
    e.directive("hover", this);
  }
}, kS = nu;
const zn = nu;
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
function ru(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function gc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function yc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var bc = {
  type: {
    type: String,
    validator: ru
  },
  nativeType: {
    type: String,
    default: "button",
    validator: yc
  },
  size: {
    type: String,
    validator: gc
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
  loadingType: qe(lr, "type"),
  loadingSize: qe(lr, "size"),
  loadingColor: jo({}, qe(lr, "color"), {
    default: "currentColor"
  }),
  onClick: H(),
  onTouchstart: H()
}, au = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function wc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(au);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function Cc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = un(au);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: Sc,
  classes: kc
} = x("button"), $c = ["type", "disabled"];
function Tc(e, n) {
  var r = te("var-loading"), a = te("var-hover-overlay"), t = Ie("ripple"), o = Ie("hover");
  return Ce((g(), O(
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
    [e.loading || e.pending ? (g(), ye(
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
      [F(e.$slots, "default")],
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
    $c
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var tu = _({
  name: "VarButton",
  components: {
    VarLoading: Bn,
    VarHoverOverlay: on
  },
  directives: {
    Ripple: Ue,
    Hover: zn
  },
  props: bc,
  setup(e) {
    var n = M(!1), {
      buttonGroup: r
    } = Cc(), {
      hovering: a,
      handleHovering: t
    } = kr(), o = U(() => {
      if (!r)
        return {
          elevation: vn(e.elevation, 2),
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
        color: f,
        textColor: v,
        mode: m
      } = r;
      return {
        elevation: "",
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : f.value,
        textColor: e.textColor != null ? e.textColor : v.value,
        text: m.value !== "normal",
        outline: m.value === "outline"
      };
    }), l = (u) => {
      e.autoLoading && (n.value = !0, u = $e(u) ? u : [u], Promise.all(u).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, i = (u) => {
      var {
        loading: d,
        disabled: f,
        onClick: v
      } = e;
      !v || d || f || n.value || l(k(v, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: f,
        onTouchstart: v
      } = e;
      !v || d || f || n.value || l(k(v, u));
    };
    return {
      n: Sc,
      classes: kc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
tu.render = Tc;
const Je = tu;
Je.install = function(e) {
  e.component(Je.name, Je);
};
var $S = Je, Pc = {
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
  onClick: H()
}, {
  n: Oc,
  classes: Vc
} = x("back-top");
function Mc(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return g(), ye(
    Da,
    {
      to: "body",
      disabled: e.disabled
    },
    [z(
      "div",
      Ee({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = pn(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [F(e.$slots, "default", {}, () => [J(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: de(() => [J(r, {
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
var ou = _({
  name: "VarBackTop",
  components: {
    VarButton: Je,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Pc,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, o = (d) => {
      k(e.onClick, d);
      var f = Ci(t);
      vt(t, {
        left: f,
        duration: e.duration,
        animation: ms
      });
    }, l = wi(() => {
      n.value = dt(t) >= Le(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? hs(e.target, "BackTop") : Sr(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return Qt(() => {
      i(), s(), a.value = !1;
    }), Pr(s), _t(u), _n(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: ge,
      n: Oc,
      classes: Vc,
      handleClick: o
    };
  }
});
ou.render = Mc;
const Dr = ou;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var TS = Dr;
function Bc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ec(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Ic = {
  type: {
    type: String,
    default: "default",
    validator: Bc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Ec
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
  n: Nc,
  classes: Dc
} = x("badge");
function zc(e, n) {
  var r = te("var-icon");
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [F(e.$slots, "default"), J(
      ze,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: de(() => [Ce(z(
          "span",
          Ee({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (g(), ye(
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
          )) : ee("v-if", !0), F(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (g(), O(
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
var iu = _({
  name: "VarBadge",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Ic,
  setup(e) {
    var n = U(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: Nc,
      classes: Dc,
      value: n
    };
  }
});
iu.render = zc;
const vr = iu;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var PS = vr, Ac = {
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
  onChange: H(),
  "onUpdate:active": H(),
  onBeforeChange: H(),
  onFabClick: H(),
  fabProps: {
    type: Object
  }
}, lu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Lc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn(lu);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
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
var {
  n: Rc,
  classes: Uc
} = x("bottom-navigation"), {
  n: lo
} = x("bottom-navigation-item"), ul = lo("--right-half-space"), dl = lo("--left-half-space"), vl = lo("--right-space"), Hc = {
  type: "primary"
};
function Fc(e, n) {
  var r = te("var-button");
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [F(e.$slots, "default"), e.$slots.fab ? (g(), ye(
      r,
      Ee({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: de(() => [F(e.$slots, "fab")]),
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
var su = _({
  name: "VarBottomNavigation",
  components: {
    VarButton: Je
  },
  props: Ac,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = U(() => e.active), o = U(() => e.activeColor), l = U(() => e.inactiveColor), i = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Lc(), f = () => {
      s.value === 0 || v() || m() || p();
    }, v = () => u.find((w) => {
      var {
        name: B
      } = w;
      return t.value === B.value;
    }), m = () => u.find((w) => {
      var {
        index: B
      } = w;
      return t.value === B.value;
    }), p = () => {
      nn(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > s.value - 1 && k(e["onUpdate:active"], s.value - 1));
    }, y = (w) => {
      t.value !== w && (e.onBeforeChange ? h(w) : b(w));
    }, h = (w) => {
      var B = Oo(k(e.onBeforeChange, w));
      Promise.all(B).then((D) => {
        D.every(Boolean) && b(w);
      });
    }, b = (w) => {
      k(e["onUpdate:active"], w), k(e.onChange, w);
    }, V = () => {
      var w = I();
      w.forEach((B) => {
        B.classList.remove(ul, dl, vl);
      });
    }, $ = (w) => {
      var B = I(), D = B.length, C = w % 2 === 0;
      B.forEach((S, R) => {
        T(C, S, R, D);
      });
    }, T = (w, B, D, C) => {
      var S = D === C - 1;
      if (!w && S) {
        B.classList.add(vl);
        return;
      }
      var R = D === C / 2 - 1, Z = D === C / 2;
      R ? B.classList.add(ul) : Z && B.classList.add(dl);
    }, I = () => Array.from(a.value.querySelectorAll("." + lo())), P = () => {
      k(e.onFabClick);
    }, N = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: y
    };
    return d(N), ie(() => s.value, f), ie(() => e.fabProps, (w) => {
      i.value = Wo({}, Hc, w);
    }, {
      immediate: !0,
      deep: !0
    }), sn(() => {
      r.fab && $(s.value);
    }), xt(() => {
      V(), r.fab && $(s.value);
    }), {
      n: Rc,
      classes: Uc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: P,
      fabProps: i
    };
  }
});
su.render = Fc;
const zr = su;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var OS = zr, Yc = {
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
  onClick: H()
};
function jc() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(lu);
  return r || Sn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: Wc,
  classes: Gc
} = x("bottom-navigation-item"), qc = {
  type: "danger",
  dot: !0
};
function Xc(e, n) {
  var r = te("var-icon"), a = te("var-badge"), t = Ie("ripple");
  return Ce((g(), O(
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
    [e.icon && !e.$slots.icon ? (g(), ye(
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
    )) : ee("v-if", !0), F(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (g(), ye(
      a,
      Ee({
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
      [e.$slots.default ? ee("v-if", !0) : (g(), O(
        Oe,
        {
          key: 0
        },
        [we(
          ae(e.label),
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
var uu = _({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: vr,
    VarIcon: Pe
  },
  directives: {
    Ripple: Ue
  },
  props: Yc,
  setup(e) {
    var n = U(() => e.name), r = U(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = jc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, f = () => i.value === n.value || i.value === t.value ? s.value : u.value, v = () => {
      var m, p = (m = n.value) != null ? m : t.value;
      k(e.onClick, p), k(o.onToggle, p);
    };
    return l(d), ie(() => r.value, (m) => {
      a.value = m === !0 ? qc : r.value;
    }, {
      immediate: !0
    }), {
      n: Wc,
      classes: Gc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: f,
      handleClick: v
    };
  }
});
uu.render = Xc;
const Ar = uu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var VS = Ar, Kc = {
  separator: {
    type: String
  },
  onClick: H()
}, du = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Zc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = dn(du);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Jc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = un(du);
  return n || Sn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Qc,
  classes: _c
} = x("breadcrumb");
function xc(e, n) {
  return g(), O(
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
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? ee("v-if", !0) : F(e.$slots, "separator", {
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
var vu = _({
  name: "VarBreadcrumb",
  props: Kc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Jc(), t = U(() => n.value === r.length.value - 1), o = U(() => r.separator.value), l = (i) => {
      t.value || k(e.onClick, i);
    };
    return a(null), {
      n: Qc,
      classes: _c,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
vu.render = xc;
const Lr = vu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var MS = Lr, em = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: nm
} = x("breadcrumbs");
function rm(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var fu = _({
  name: "VarBreadcrumbs",
  props: em,
  setup(e) {
    var n = U(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Zc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: nm
    };
  }
});
fu.render = rm;
const Rr = fu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var BS = Rr;
function am(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function tm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function om(e) {
  return ["normal", "text", "outline"].includes(e);
}
var im = {
  type: {
    type: String,
    default: "default",
    validator: am
  },
  size: {
    type: String,
    default: "normal",
    validator: tm
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
    validator: om
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
  n: lm,
  classes: sm
} = x("button-group");
function um(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var cu = _({
  name: "VarButtonGroup",
  props: im,
  setup(e) {
    var {
      bindButtons: n
    } = wc(), r = {
      elevation: U(() => e.elevation),
      type: U(() => e.type),
      size: U(() => e.size),
      color: U(() => e.color),
      textColor: U(() => e.textColor),
      mode: U(() => e.mode)
    };
    return n(r), {
      n: lm,
      classes: sm,
      formatElevation: vn
    };
  }
});
cu.render = um;
const Ur = cu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var ES = Ur;
function dm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var vm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: dm,
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
  onClick: H(),
  "onUpdate:floating": H()
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
  n: fm,
  classes: cm
} = x("card"), mm = 500, pm = ["src", "alt"];
function hm(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = Ie("ripple");
  return Ce((g(), O(
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
      [F(e.$slots, "image", {}, () => [e.src ? (g(), O(
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
        pm
      )) : ee("v-if", !0)]), z(
        "div",
        {
          class: c(e.n("container"))
        },
        [F(e.$slots, "title", {}, () => [e.title ? (g(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ae(e.title),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), F(e.$slots, "subtitle", {}, () => [e.subtitle ? (g(), O(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ae(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (g(), O(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), e.$slots.extra ? (g(), O(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [F(e.$slots, "extra")],
          2
          /* CLASS */
        )) : ee("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (g(), O(
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
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (g(), O(
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
        [F(e.$slots, "close-button", {}, () => [J(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: pn(e.close, ["stop"])
          },
          {
            default: de(() => [J(
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
var mu = _({
  name: "VarCard",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Pe,
    VarButton: Je
  },
  props: vm,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), o = M("100%"), l = M("100%"), i = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), f = M("0px"), v = M("0"), m = U(() => e.layout === "row"), p = M(!1), y = M(!1), {
      zIndex: h
    } = kt(() => e.floating, 1);
    to(() => e.floating, () => !m.value);
    var b = "auto", V = "auto", $ = null, T = M(null), I = /* @__PURE__ */ function() {
      var B = cl(function* () {
        clearTimeout(T.value), clearTimeout($), T.value = null, T.value = setTimeout(/* @__PURE__ */ cl(function* () {
          var {
            width: D,
            height: C,
            left: S,
            top: R
          } = n.value.getBoundingClientRect();
          a.value = ge(D), t.value = ge(C), o.value = a.value, l.value = t.value, i.value = ge(R), s.value = ge(S), u.value = "fixed", b = i.value, V = s.value, p.value = !0, yield Dn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", f.value = "auto", v.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? mm : 0);
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), P = () => {
      clearTimeout($), clearTimeout(T.value), T.value = null, o.value = a.value, l.value = t.value, i.value = b, s.value = V, f.value = "0px", v.value = "0", p.value = !1, $ = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", b = "auto", V = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, N = () => {
      k(e["onUpdate:floating"], !1);
    }, w = (B) => {
      k(e.onClick, B);
    };
    return ie(() => e.floating, (B) => {
      m.value || Be(() => {
        B ? I() : P();
      });
    }, {
      immediate: !0
    }), {
      n: fm,
      classes: cm,
      toSizeUnit: ge,
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
      contentHeight: f,
      opacity: v,
      zIndex: h,
      isRow: m,
      close: N,
      showFloatingButtons: p,
      floated: y,
      formatElevation: vn,
      handleClick: w
    };
  }
});
mu.render = hm;
const Hr = mu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var IS = Hr, gm = {
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
  onClick: H()
}, {
  n: ym,
  classes: bm
} = x("cell");
function wm(e, n) {
  var r = te("var-icon"), a = Ie("ripple");
  return Ce((g(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "icon", {}, () => [e.icon ? (g(), O(
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
      [F(e.$slots, "default", {}, () => [e.title ? (g(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ae(e.title),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (g(), O(
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
    ), e.$slots.extra ? (g(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [F(e.$slots, "extra")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var pu = _({
  name: "VarCell",
  components: {
    VarIcon: Pe
  },
  directives: {
    Ripple: Ue
  },
  props: gm,
  setup(e) {
    var n = U(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ge(e.borderOffset),
      "--cell-border-right": ge(e.borderOffset)
    }), r = (a) => {
      k(e.onClick, a);
    };
    return {
      n: ym,
      classes: bm,
      toSizeUnit: ge,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
pu.render = wm;
const fr = pu;
fr.install = function(e) {
  e.component(fr.name, fr);
};
var NS = fr, Cm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Sm
} = x("form-details"), km = {
  key: 0
}, $m = {
  key: 0
};
function Tm(e, n) {
  return g(), ye(
    ze,
    {
      name: e.n()
    },
    {
      default: de(() => [e.errorMessage || e.extraMessage ? (g(), O(
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
            ze,
            {
              name: e.n("message")
            },
            {
              default: de(() => [e.errorMessage ? (g(), O(
                "div",
                km,
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
            ze,
            {
              name: e.n("message")
            },
            {
              default: de(() => [e.extraMessage ? (g(), O(
                "div",
                $m,
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
var hu = _({
  name: "VarFormDetails",
  props: Cm,
  setup: () => ({
    n: Sm
  })
});
hu.render = Tm;
const Ke = hu;
Ke.install = function(e) {
  e.component(Ke.name, Ke);
};
var DS = Ke, Pm = {
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
  onClick: H(),
  onChange: H(),
  "onUpdate:modelValue": H()
}, gu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Om() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(gu);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Vm() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = un(gu);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
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
var yu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function $n() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(yu), a = Qa(), t = r ? (o) => {
    r(Go({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: n,
    form: e,
    bindForm: t
  };
}
function Mm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn(yu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: Bm,
  classes: Em
} = x("checkbox");
function Im(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("hover"), l = Ie("ripple");
  return g(), O(
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
      [Ce((g(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? F(e.$slots, "checked-icon", {
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
        )]) : F(e.$slots, "unchecked-icon", {
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
      )), [[o, e.handleHovering, "desktop"], [l, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), z(
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
var bu = _({
  name: "VarCheckbox",
  directives: {
    Ripple: Ue,
    Hover: zn
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: Ke,
    VarHoverOverlay: on
  },
  props: Pm,
  setup(e) {
    var n = M(!1), r = U(() => n.value === e.checkedValue), a = U(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Vm(), {
      hovering: i,
      handleHovering: s
    } = kr(), {
      form: u,
      bindForm: d
    } = $n(), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: m,
      // expose
      resetValidation: p
    } = kn(), y = (w) => {
      Be(() => {
        var {
          validateTrigger: B,
          rules: D,
          modelValue: C
        } = e;
        v(B, w, D, C);
      });
    }, h = (w) => {
      n.value = w;
      var {
        checkedValue: B,
        onChange: D
      } = e;
      k(e["onUpdate:modelValue"], n.value), k(D, n.value), y("onChange"), w === B ? o == null || o.onChecked(B) : o == null || o.onUnchecked(B);
    }, b = (w) => {
      var {
        disabled: B,
        readonly: D,
        checkedValue: C,
        uncheckedValue: S,
        onClick: R
      } = e;
      if (!(u != null && u.disabled.value || B) && (k(R, w), !(u != null && u.readonly.value || D))) {
        t.value = !0;
        var Z = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && Z || h(r.value ? S : C);
      }
    }, V = (w) => {
      var {
        checkedValue: B,
        uncheckedValue: D
      } = e;
      n.value = w.includes(B) ? B : D;
    }, $ = () => {
      t.value = !1;
    }, T = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), p();
    }, I = (w) => {
      var {
        checkedValue: B,
        uncheckedValue: D
      } = e, C = ![B, D].includes(w);
      C && (w = r.value ? D : B), h(w);
    }, P = () => m(e.rules, e.modelValue);
    ie(() => e.modelValue, (w) => {
      n.value = w;
    }, {
      immediate: !0
    });
    var N = {
      checkedValue: a,
      checked: r,
      sync: V,
      validate: P,
      resetValidation: p,
      reset: T,
      resetWithAnimation: $
    };
    return k(l, N), k(d, N), {
      withAnimation: t,
      checked: r,
      errorMessage: f,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Bm,
      classes: Em,
      handleClick: b,
      toggle: I,
      reset: T,
      validate: P,
      resetValidation: p
    };
  }
});
bu.render = Im;
const cr = bu;
cr.install = function(e) {
  e.component(cr.name, cr);
};
var zS = cr;
function Nm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Dm = {
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
    validator: Nm
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: H(),
  "onUpdate:modelValue": H()
}, {
  n: zm,
  classes: Am
} = x("checkbox-group");
function Lm(e, n) {
  var r = te("var-form-details");
  return g(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
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
var wu = _({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: Ke
  },
  props: Dm,
  setup(e) {
    var n = U(() => e.max), r = U(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Om(), {
      bindForm: l
    } = $n(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = kn(), f = U(() => i.value), v = (N) => {
      Be(() => {
        var {
          validateTrigger: w,
          rules: B,
          modelValue: D
        } = e;
        s(w, N, B, D);
      });
    }, m = (N) => {
      k(e["onUpdate:modelValue"], N), k(e.onChange, N), v("onChange");
    }, p = (N) => {
      var {
        modelValue: w
      } = e;
      w.includes(N) || m([...w, N]);
    }, y = (N) => {
      var {
        modelValue: w
      } = e;
      w.includes(N) && m(w.filter((B) => B !== N));
    }, h = () => t.forEach((N) => {
      var {
        sync: w
      } = N;
      return w(e.modelValue);
    }), b = () => {
      t.forEach((N) => N.resetWithAnimation());
    }, V = () => {
      var N = t.map((B) => {
        var {
          checkedValue: D
        } = B;
        return D.value;
      }), w = Ki(N);
      return b(), k(e["onUpdate:modelValue"], w), w;
    }, $ = () => {
      var N = t.filter((B) => {
        var {
          checked: D
        } = B;
        return !D.value;
      }).map((B) => {
        var {
          checkedValue: D
        } = B;
        return D.value;
      }), w = Ki(N);
      return b(), k(e["onUpdate:modelValue"], w), w;
    }, T = () => {
      k(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, h, {
      deep: !0
    }), ie(() => a.value, h);
    var P = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: y,
      validate: I,
      resetValidation: d,
      reset: T,
      errorMessage: f
    };
    return o(P), k(l, P), {
      errorMessage: i,
      n: zm,
      classes: Am,
      checkAll: V,
      inverseAll: $,
      reset: T,
      validate: I,
      resetValidation: d
    };
  }
});
wu.render = Lm;
const Fr = wu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var AS = Fr;
function Rm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Um(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Hm = {
  type: {
    type: String,
    default: "default",
    validator: Rm
  },
  size: {
    type: String,
    default: "normal",
    validator: Um
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: qe(Es, "name"),
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
  onClose: H()
}, {
  n: xn,
  classes: Fm
} = x("chip");
function Ym(e, n) {
  var r = te("var-icon");
  return g(), ye(
    ze,
    {
      name: e.n("$-fade")
    },
    {
      default: de(() => [z(
        "span",
        Ee({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [F(e.$slots, "left"), z(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [F(e.$slots, "default")],
          2
          /* CLASS */
        ), F(e.$slots, "right"), e.closable ? (g(), O(
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
var Cu = _({
  name: "VarChip",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Hm,
  setup(e) {
    var n = U(() => {
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
    }), r = U(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = xn(o ? "$--flex" : "$--inline-flex"), d = i ? xn("plain") + " " + xn("plain-" + l) : xn("--" + l), f = s ? xn("--round") : null;
      return [xn("--" + t), u, d, f];
    }), a = (t) => {
      k(e.onClose, t);
    };
    return {
      n: xn,
      classes: Fm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Cu.render = Ym;
const mr = Cu;
mr.install = function(e) {
  e.component(mr.name, mr);
};
var LS = mr;
function jm(e) {
  return ["row", "column"].includes(e);
}
function Wm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Gm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var qm = {
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
    validator: jm
  },
  justify: {
    type: String,
    validator: Wm
  },
  align: {
    type: String,
    validator: Gm
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
  onClick: H()
}, Su = Symbol("ROW_BIND_COL_KEY");
function Xm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(Su);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Km() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(Su);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: Vt,
  classes: Zm
} = x("col");
function Jm(e, n) {
  return g(), O(
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
var ku = _({
  name: "VarCol",
  props: qm,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = U(() => L(e.span)), a = U(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Km(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var f = [];
      if (d == null)
        return f;
      if (bi(d)) {
        var {
          offset: v,
          span: m
        } = d;
        Number(m) >= 0 && f.push(Vt("--span-" + u + "-" + m)), v && f.push(Vt("--offset-" + u + "-" + v));
      } else
        Number(d) >= 0 && f.push(Vt("--span-" + u + "-" + d));
      return f;
    }, s = (u) => {
      k(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), k(o, l), {
      n: Vt,
      classes: Zm,
      padding: n,
      toNumber: L,
      toSizeUnit: ge,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Ft
    };
  }
});
ku.render = Jm;
const Yr = ku;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var RS = Yr, $u = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Qm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn($u);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var _m = {
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
  onChange: H(),
  "onUpdate:modelValue": H()
}, {
  n: xm
} = x("collapse");
function ep(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Tu = _({
  name: "VarCollapse",
  props: _m,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Qm(), t = U(() => e.modelValue), o = U(() => e.offset), l = U(() => e.divider), i = U(() => e.elevation), s = () => !e.accordion && !$e(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && $e(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (y, h) => s() ? h ? e.accordion ? y : [...e.modelValue, y] : e.accordion ? null : e.modelValue.filter((b) => b !== y) : null, d = (y, h) => {
      var b = u(y, h);
      k(e["onUpdate:modelValue"], b), k(e.onChange, b);
    }, f = () => {
      if (e.accordion)
        return r.find((h) => {
          var {
            name: b
          } = h;
          return e.modelValue === b.value;
        });
      var y = r.filter((h) => {
        var {
          name: b
        } = h;
        return b.value === void 0 ? !1 : e.modelValue.includes(b.value);
      });
      return y.length ? y : void 0;
    }, v = () => e.accordion ? r.find((y) => {
      var {
        index: h,
        name: b
      } = y;
      return b.value === void 0 && e.modelValue === h.value;
    }) : r.filter((y) => {
      var {
        index: h,
        name: b
      } = y;
      return b.value === void 0 && e.modelValue.includes(h.value);
    }), m = () => {
      if (s()) {
        var y = f() || v();
        if (e.accordion && !y || !e.accordion && !y.length) {
          r.forEach((h) => {
            h.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((h) => {
          var b = e.accordion ? y === h : y.includes(h);
          h.init(e.accordion, b);
        });
      }
    }, p = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(p), ie(() => n.value, () => Be().then(m)), ie(() => e.modelValue, () => Be().then(m)), {
      n: xm,
      divider: l
    };
  }
});
Tu.render = ep;
const jr = Tu;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var US = jr;
function np() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un($u);
  return r || Sn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var rp = {
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
  n: ap,
  classes: tp
} = x("collapse-item");
function op(e, n) {
  var r = te("var-icon");
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: G("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
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
        [F(e.$slots, "title", {}, () => [we(
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
        [F(e.$slots, "icon", {}, () => [J(
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
    ), Ce(z(
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
var Pu = _({
  name: "VarCollapseItem",
  components: {
    VarIcon: Pe
  },
  props: rp,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = np(), t = !0, o = M(null), l = M(!1), i = M(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: f,
      updateItem: v
    } = r, m = U(() => e.name), p = (I, P) => {
      s.value === void 0 || I && $e(s.value) || P === i.value || (i.value = P, y(!0));
    }, y = (I) => {
      e.disabled || I || v(e.name || n.value, !i.value);
    }, h = () => {
      o.value && (o.value.style.height = "", l.value = !0, yn(() => {
        var {
          offsetHeight: I
        } = o.value;
        o.value.style.height = 0 + "px", yn(() => {
          o.value.style.height = I + "px", t && ro(() => {
            t && $();
          });
        });
      }));
    }, b = () => {
      t = !1;
    }, V = () => {
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
      init: p
    };
    return a(T), ie(i, (I) => {
      I ? h() : V();
    }), {
      n: ap,
      start: b,
      classes: tp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: f,
      toggle: y,
      contentEl: o,
      transitionend: $,
      formatElevation: vn
    };
  }
});
Pu.render = op;
const Wr = Pu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var HS = Wr, ip = {
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
  onEnd: H(),
  onChange: H()
}, {
  n: lp
} = x("countdown"), qo = 1e3, Xo = 60 * qo, Ko = 60 * Xo, ml = 24 * Ko;
function sp(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default", bt(eo(e.timeData)), () => [we(
      ae(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Ou = _({
  name: "VarCountdown",
  props: ip,
  setup(e) {
    var n = M(""), r = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (p, y) => {
      var h = Object.values(y), b = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if (b.forEach((T, I) => {
        p.includes(T) ? p = p.replace(T, Ba("" + h[I], 2, "0")) : h[I + 1] += h[I] * V[I];
      }), p.includes("S")) {
        var $ = Ba("" + h[h.length - 1], 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", $) : p.includes("SS") ? p = p.replace("SS", $.slice(0, 2)) : p = p.replace("S", $.slice(0, 1));
      }
      return p;
    }, u = (p) => {
      var y = Math.floor(p / ml), h = Math.floor(p % ml / Ko), b = Math.floor(p % Ko / Xo), V = Math.floor(p % Xo / qo), $ = Math.floor(p % qo), T = {
        days: y,
        hours: h,
        minutes: b,
        seconds: V,
        milliseconds: $
      };
      r.value = T, k(e.onChange, r.value), n.value = s(e.format, T);
    }, d = () => {
      var {
        time: p,
        onEnd: y
      } = e, h = performance.now();
      if (a || (a = h + L(p)), l = a - h, l < 0 && (l = 0), u(l), l === 0) {
        k(y);
        return;
      }
      t && (o = yn(d));
    }, f = function(p) {
      p === void 0 && (p = !1), !(t && !p) && (t = !0, a = performance.now() + (l || L(e.time)), d());
    }, v = () => {
      t = !1, rl(o);
    }, m = () => {
      a = 0, t = !1, rl(o), d();
    };
    return ie(() => e.time, () => {
      m(), e.autoStart && f();
    }, {
      immediate: !0
    }), Pr(() => {
      i != null && (t = i, t === !0 && f(!0));
    }), _n(() => {
      i = t, v();
    }), _a(v), {
      showTime: n,
      timeData: r,
      n: lp,
      start: f,
      pause: v,
      reset: m
    };
  }
});
Ou.render = sp;
const Gr = Ou;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var FS = Gr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ua = 9e15, Or = 1e9, Zo = "0123456789abcdef", Wt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Gt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Jo = {
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
}, Vu, Hn, pe = !0, so = "[DecimalError] ", $r = so + "Invalid argument: ", Mu = so + "Precision limit exceeded", Bu = so + "crypto unavailable", Eu = "[object Decimal]", Qe = Math.floor, je = Math.pow, up = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, dp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, vp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Iu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, En = 1e7, me = 7, fp = 9007199254740991, cp = Wt.length - 1, Qo = Gt.length - 1, q = { toStringTag: Eu };
q.absoluteValue = q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ce(e);
};
q.ceil = function() {
  return ce(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error($r + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
q.comparedTo = q.cmp = function(e) {
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
q.cosine = q.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + me, a.rounding = 1, r = mp(a, Lu(a, r)), a.precision = e, a.rounding = n, ce(Hn == 2 || Hn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, f = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new f(d);
  for (pe = !1, o = d.s * je(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Ze(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = je(r, 1 / 3), e = Qe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new f(r), a.s = d.s) : a = new f(o.toString()), l = (e = f.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Me(u.plus(d).times(i), u.plus(s), l + 2, 1), Ze(i.d).slice(0, l) === (r = Ze(a.d)).slice(0, l))
      if (r = r.slice(l - 3, l + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ce(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ce(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return pe = !0, ce(a, e, f.rounding, n);
};
q.decimalPlaces = q.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Qe(this.e / me)) * me, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
q.dividedBy = q.div = function(e) {
  return Me(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ce(Me(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
q.equals = q.eq = function(e) {
  return this.cmp(e) === 0;
};
q.floor = function() {
  return ce(new this.constructor(this), this.e + 1, 3);
};
q.greaterThan = q.gt = function(e) {
  return this.cmp(e) > 0;
};
q.greaterThanOrEqualTo = q.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
q.hyperbolicCosine = q.cosh = function() {
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / vo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = qa(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return ce(o, l.precision = r, l.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
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
  return o.precision = n, o.rounding = r, ce(t, n, r, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Me(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
q.inverseCosine = q.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Mn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Mn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Mn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, pe = !1, r = r.times(r).minus(1).sqrt().plus(r), pe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, pe = !1, r = r.times(r).plus(1).sqrt().plus(r), pe = !0, a.precision = e, a.rounding = n, r.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ce(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Me(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
q.inverseSine = q.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Mn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, f = d.precision, v = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && f + 4 <= Qo)
      return l = Mn(d, f + 4, v).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (f + 4 <= Qo)
      return l = Mn(d, f + 4, v).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = f + 10, d.rounding = 1, r = Math.min(28, i / me + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (pe = !1, n = Math.ceil(i / me), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), pe = !0, ce(l, d.precision = f, d.rounding = v, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && Qe(this.e / me) > this.d.length - 2;
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
  var n, r, a, t, o, l, i, s, u = this, d = u.constructor, f = d.precision, v = d.rounding, m = 5;
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
  if (pe = !1, i = f + m, l = sr(u, i), a = n ? qt(d, i + 10) : sr(e, i), s = Me(l, a, i, 1), ct(s.d, t = f, v))
    do
      if (i += 10, l = sr(u, i), a = n ? qt(d, i + 10) : sr(e, i), s = Me(l, a, i, 1), !o) {
        +Ze(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ce(s, f + 1, 0));
        break;
      }
    while (ct(s.d, t += 10, v));
  return pe = !0, ce(s, f, v);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, o, l, i, s, u, d, f, v, m = this, p = m.constructor;
  if (e = new p(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new p(NaN) : m.d ? e.s = -e.s : e = new p(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, v = e.d, i = p.precision, s = p.rounding, !u[0] || !v[0]) {
    if (v[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(m);
    else
      return new p(s === 3 ? -0 : 0);
    return pe ? ce(e, i, s) : e;
  }
  if (r = Qe(e.e / me), d = Qe(m.e / me), u = u.slice(), o = d - r, o) {
    for (f = o < 0, f ? (n = u, o = -o, l = v.length) : (n = v, r = d, l = u.length), a = Math.max(Math.ceil(i / me), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, l = v.length, f = a < l, f && (l = a), a = 0; a < l; a++)
      if (u[a] != v[a]) {
        f = u[a] < v[a];
        break;
      }
    o = 0;
  }
  for (f && (n = u, u = v, v = n, e.s = -e.s), l = u.length, a = v.length - l; a > 0; --a)
    u[l++] = 0;
  for (a = v.length; a > o; ) {
    if (u[--a] < v[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = En - 1;
      --u[t], u[a] += En;
    }
    u[a] -= v[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = uo(u, r), pe ? ce(e, i, s) : e) : new p(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ce(new a(r), a.precision, a.rounding) : (pe = !1, a.modulo == 9 ? (n = Me(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Me(r, e, 0, a.modulo, 1), n = n.times(e), pe = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return _o(this);
};
q.naturalLogarithm = q.ln = function() {
  return sr(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ce(e);
};
q.plus = q.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, f = this, v = f.constructor;
  if (e = new v(e), !f.d || !e.d)
    return !f.s || !e.s ? e = new v(NaN) : f.d || (e = new v(e.d || f.s === e.s ? f : NaN)), e;
  if (f.s != e.s)
    return e.s = -e.s, f.minus(e);
  if (u = f.d, d = e.d, i = v.precision, s = v.rounding, !u[0] || !d[0])
    return d[0] || (e = new v(f)), pe ? ce(e, i, s) : e;
  if (o = Qe(f.e / me), a = Qe(e.e / me), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / me), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / En | 0, u[t] %= En;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = uo(u, a), pe ? ce(e, i, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error($r + e);
  return r.d ? (n = Nu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return ce(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + me, a.rounding = 1, r = hp(a, Lu(a, r)), a.precision = e, a.rounding = n, ce(Hn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (pe = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = Ze(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Qe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Me(l, o, r + 2, 1)).times(0.5), Ze(o.d).slice(0, r) === (n = Ze(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ce(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ce(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return pe = !0, ce(a, s, d.rounding, e);
};
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Me(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ce(Hn == 2 || Hn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, f = d.constructor, v = d.d, m = (e = new f(e)).d;
  if (e.s *= d.s, !v || !v[0] || !m || !m[0])
    return new f(!e.s || v && !v[0] && !m || m && !m[0] && !v ? NaN : !v || !m ? e.s / 0 : e.s * 0);
  for (r = Qe(d.e / me) + Qe(e.e / me), s = v.length, u = m.length, s < u && (o = v, v = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + m[a] * v[t - a - 1] + n, o[t--] = i % En | 0, n = i / En | 0;
    o[t] = (o[t] + n) % En | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = uo(o, r), pe ? ce(e, f.precision, f.rounding) : e;
};
q.toBinary = function(e, n) {
  return Ei(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (ln(e, 0, Or), n === void 0 ? n = a.rounding : ln(n, 0, 8), ce(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = An(a, !0) : (ln(e, 0, Or), n === void 0 ? n = t.rounding : ln(n, 0, 8), a = ce(new t(a), e + 1, n), r = An(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = An(t) : (ln(e, 0, Or), n === void 0 ? n = o.rounding : ln(n, 0, 8), a = ce(new o(t), e + t.e + 1, n), r = An(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, f, v, m = this, p = m.d, y = m.constructor;
  if (!p)
    return new y(m);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = Nu(p) - m.e - 1, l = o % me, n.d[0] = je(10, l < 0 ? me + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new y(e), !i.isInt() || i.lt(u))
      throw Error($r + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (pe = !1, i = new y(Ze(p)), d = y.precision, y.precision = o = p.length * me * 2; f = Me(i, n, 0, 1, 1), t = r.plus(f.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(f.times(t)), s = t, t = n, n = i.minus(f.times(t)), i = t;
  return t = Me(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, v = Me(u, a, o, 1).minus(m).abs().cmp(Me(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], y.precision = d, pe = !0, v;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return Ei(this, 16, e, n);
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
  return e.d[0] ? (pe = !1, r = Me(r, e, 0, n, 1).times(e), pe = !0, ce(r)) : (e.s = r.s, r = e), r;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, n) {
  return Ei(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(je(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ce(i, a, o);
  if (n = Qe(e.e / me), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= fp)
    return t = Du(s, i, r, a), e.s < 0 ? new s(1).div(t) : ce(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = je(+i, u), n = r == 0 || !isFinite(r) ? Qe(u * (Math.log("0." + Ze(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (pe = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = _o(e.times(sr(i, a + r)), a), t.d && (t = ce(t, a + 5, 1), ct(t.d, a, o) && (n = a + 10, t = ce(_o(e.times(sr(i, n + r)), n), n + 5, 1), +Ze(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ce(t, a + 1, 0)))), t.s = l, pe = !0, s.rounding = o, ce(t, a, o));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = An(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (ln(e, 1, Or), n === void 0 ? n = t.rounding : ln(n, 0, 8), a = ce(new t(a), e, n), r = An(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (ln(e, 1, Or), n === void 0 ? n = a.rounding : ln(n, 0, 8)), ce(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = An(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return ce(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = An(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Ze(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = me - a.length, r && (o += nr(r)), o += a;
    l = e[n], a = l + "", r = me - a.length, r && (o += nr(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function ln(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error($r + e);
}
function ct(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += me, t = 0) : (t = Math.ceil((n + 1) / me), n %= me), o = je(10, me - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == je(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == je(10, n - 3) - 1, l;
}
function zt(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Zo.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function mp(e, n) {
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
var Me = function() {
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
    var u, d, f, v, m, p, y, h, b, V, $, T, I, P, N, w, B, D, C, S, R = a.constructor, Z = a.s == t.s ? 1 : -1, Q = a.d, Y = t.d;
    if (!Q || !Q[0] || !Y || !Y[0])
      return new R(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (Q ? Y && Q[0] == Y[0] : !Y) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          Q && Q[0] == 0 || !Y ? Z * 0 : Z / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = En, m = me, d = Qe(a.e / m) - Qe(t.e / m)), C = Y.length, B = Q.length, b = new R(Z), V = b.d = [], f = 0; Y[f] == (Q[f] || 0); f++)
      ;
    if (Y[f] > (Q[f] || 0) && d--, o == null ? (P = o = R.precision, l = R.rounding) : i ? P = o + (a.e - t.e) + 1 : P = o, P < 0)
      V.push(1), p = !0;
    else {
      if (P = P / m + 2 | 0, f = 0, C == 1) {
        for (v = 0, Y = Y[0], P++; (f < B || v) && P--; f++)
          N = v * s + (Q[f] || 0), V[f] = N / Y | 0, v = N % Y | 0;
        p = v || f < B;
      } else {
        for (v = s / (Y[0] + 1) | 0, v > 1 && (Y = e(Y, v, s), Q = e(Q, v, s), C = Y.length, B = Q.length), w = C, $ = Q.slice(0, C), T = $.length; T < C; )
          $[T++] = 0;
        S = Y.slice(), S.unshift(0), D = Y[0], Y[1] >= s / 2 && ++D;
        do
          v = 0, u = n(Y, $, C, T), u < 0 ? (I = $[0], C != T && (I = I * s + ($[1] || 0)), v = I / D | 0, v > 1 ? (v >= s && (v = s - 1), y = e(Y, v, s), h = y.length, T = $.length, u = n(y, $, h, T), u == 1 && (v--, r(y, C < h ? S : Y, h, s))) : (v == 0 && (u = v = 1), y = Y.slice()), h = y.length, h < T && y.unshift(0), r($, y, T, s), u == -1 && (T = $.length, u = n(Y, $, C, T), u < 1 && (v++, r($, C < T ? S : Y, T, s))), T = $.length) : u === 0 && (v++, $ = [0]), V[f++] = v, u && $[0] ? $[T++] = Q[w] || 0 : ($ = [Q[w]], T = 1);
        while ((w++ < B || $[0] !== void 0) && P--);
        p = $[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      b.e = d, Vu = p;
    else {
      for (f = 1, v = V[0]; v >= 10; v /= 10)
        f++;
      b.e = f + d * m - 1, ce(b, i ? o + b.e + 1 : o, l, p);
    }
    return b;
  };
}();
function ce(e, n, r, a) {
  var t, o, l, i, s, u, d, f, v, m = e.constructor;
  e:
    if (n != null) {
      if (f = e.d, !f)
        return e;
      for (t = 1, i = f[0]; i >= 10; i /= 10)
        t++;
      if (o = n - t, o < 0)
        o += me, l = n, d = f[v = 0], s = d / je(10, t - l - 1) % 10 | 0;
      else if (v = Math.ceil((o + 1) / me), i = f.length, v >= i)
        if (a) {
          for (; i++ <= v; )
            f.push(0);
          d = s = 0, t = 1, o %= me, l = o - me + 1;
        } else
          break e;
      else {
        for (d = i = f[v], t = 1; i >= 10; i /= 10)
          t++;
        o %= me, l = o - me + t, s = l < 0 ? 0 : d / je(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || f[v + 1] !== void 0 || (l < 0 ? d : d % je(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? l > 0 ? d / je(10, t - l) : 0 : f[v - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !f[0])
        return f.length = 0, u ? (n -= e.e + 1, f[0] = je(10, (me - n % me) % me), e.e = -n || 0) : f[0] = e.e = 0, e;
      if (o == 0 ? (f.length = v, i = 1, v--) : (f.length = v + 1, i = je(10, me - o), f[v] = l > 0 ? (d / je(10, t - l) % je(10, l) | 0) * i : 0), u)
        for (; ; )
          if (v == 0) {
            for (o = 1, l = f[0]; l >= 10; l /= 10)
              o++;
            for (l = f[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, f[0] == En && (f[0] = 1));
            break;
          } else {
            if (f[v] += i, f[v] != En)
              break;
            f[v--] = 0, i = 1;
          }
      for (o = f.length; f[--o] === 0; )
        f.pop();
    }
  return pe && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function An(e, n, r) {
  if (!e.isFinite())
    return Au(e);
  var a, t = e.e, o = Ze(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + nr(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + nr(-t - 1) + o, r && (a = r - l) > 0 && (o += nr(a))) : t >= l ? (o += nr(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + nr(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += nr(a))), o;
}
function uo(e, n) {
  var r = e[0];
  for (n *= me; r >= 10; r /= 10)
    n++;
  return n;
}
function qt(e, n, r) {
  if (n > cp)
    throw pe = !0, r && (e.precision = r), Error(Mu);
  return ce(new e(Wt), n, 1, !0);
}
function Mn(e, n, r) {
  if (n > Qo)
    throw Error(Mu);
  return ce(new e(Gt), n, r, !0);
}
function Nu(e) {
  var n = e.length - 1, r = n * me + 1;
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
function Du(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / me + 4);
  for (pe = !1; ; ) {
    if (r % 2 && (o = o.times(n), hl(o.d, l) && (t = !0)), r = Qe(r / 2), r === 0) {
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
function zu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function _o(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, f = 0, v = e.constructor, m = v.rounding, p = v.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new v(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (pe = !1, s = p) : s = n, i = new v(0.03125); e.e > -2; )
    e = e.times(i), f += 5;
  for (a = Math.log(je(2, f)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new v(1), v.precision = s; ; ) {
    if (o = ce(o.times(e), s, 1), r = r.times(++d), i = l.plus(Me(o, r, s, 1)), Ze(i.d).slice(0, s) === Ze(l.d).slice(0, s)) {
      for (t = f; t--; )
        l = ce(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && ct(l.d, s - a, m, u))
          v.precision = s += 10, r = o = i = new v(1), d = 0, u++;
        else
          return ce(l, v.precision = p, m, pe = !0);
      else
        return v.precision = p, l;
    }
    l = i;
  }
}
function sr(e, n) {
  var r, a, t, o, l, i, s, u, d, f, v, m = 1, p = 10, y = e, h = y.d, b = y.constructor, V = b.rounding, $ = b.precision;
  if (y.s < 0 || !h || !h[0] || !y.e && h[0] == 1 && h.length == 1)
    return new b(h && !h[0] ? -1 / 0 : y.s != 1 ? NaN : h ? 0 : y);
  if (n == null ? (pe = !1, d = $) : d = n, b.precision = d += p, r = Ze(h), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = Ze(y.d), a = r.charAt(0), m++;
    o = y.e, a > 1 ? (y = new b("0." + r), o++) : y = new b(a + "." + r.slice(1));
  } else
    return u = qt(b, d + 2, $).times(o + ""), y = sr(new b(a + "." + r.slice(1)), d - p).plus(u), b.precision = $, n == null ? ce(y, $, V, pe = !0) : y;
  for (f = y, s = l = y = Me(y.minus(1), y.plus(1), d, 1), v = ce(y.times(y), d, 1), t = 3; ; ) {
    if (l = ce(l.times(v), d, 1), u = s.plus(Me(l, new b(t), d, 1)), Ze(u.d).slice(0, d) === Ze(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(qt(b, d + 2, $).times(o + ""))), s = Me(s, new b(m), d, 1), n == null)
        if (ct(s.d, d - p, V, i))
          b.precision = d += p, u = l = y = Me(f.minus(1), f.plus(1), d, 1), v = ce(y.times(y), d, 1), t = i = 1;
        else
          return ce(s, b.precision = $, V, pe = !0);
      else
        return b.precision = $, s;
    s = u, t += 2;
  }
}
function Au(e) {
  return String(e.s * e.s / 0);
}
function xo(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % me, r < 0 && (a += me), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= me; a < t; )
        e.d.push(+n.slice(a, a += me));
      n = n.slice(a), a = me - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), pe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function pp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Iu.test(n))
      return xo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (dp.test(n))
    r = 16, n = n.toLowerCase();
  else if (up.test(n))
    r = 2;
  else if (vp.test(n))
    r = 8;
  else
    throw Error($r + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = Du(a, new a(r), o, o * 2)), u = zt(n, r, En), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = uo(u, d), e.d = u, pe = !1, l && (e = Me(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? je(2, s) : ur.pow(2, s))), pe = !0, e);
}
function hp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : qa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / vo(5, r)), n = qa(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function qa(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / me);
  for (pe = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Me(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Me(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
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
  var r, a = n.s < 0, t = Mn(e, e.precision, 1), o = t.times(0.5);
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
function Ei(e, n, r, a) {
  var t, o, l, i, s, u, d, f, v, m = e.constructor, p = r !== void 0;
  if (p ? (ln(r, 1, Or), a === void 0 ? a = m.rounding : ln(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Au(e);
  else {
    for (d = An(e), l = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), v = new m(1), v.e = d.length - l, v.d = zt(An(v), 10, t), v.e = v.d.length), f = zt(d, 10, t), o = s = f.length; f[--s] == 0; )
      f.pop();
    if (!f[0])
      d = p ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = f, e.e = o, e = Me(e, v, r, a, 0, t), f = e.d, o = e.e, u = Vu), l = f[r], i = t / 2, u = u || f[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && f[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), f.length = r, u)
        for (; ++f[--r] > t - 1; )
          f[r] = 0, r || (++o, f.unshift(1));
      for (s = f.length; !f[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Zo.charAt(f[l]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (f = zt(d, t, n), s = f.length; !f[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Zo.charAt(f[l]);
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
function gp(e) {
  return new this(e).abs();
}
function yp(e) {
  return new this(e).acos();
}
function bp(e) {
  return new this(e).acosh();
}
function wp(e, n) {
  return new this(e).plus(n);
}
function Cp(e) {
  return new this(e).asin();
}
function Sp(e) {
  return new this(e).asinh();
}
function kp(e) {
  return new this(e).atan();
}
function $p(e) {
  return new this(e).atanh();
}
function Tp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Mn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Mn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Mn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Me(e, n, o, 1)), n = Mn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Me(e, n, o, 1)), r;
}
function Pp(e) {
  return new this(e).cbrt();
}
function Op(e) {
  return ce(e = new this(e), e.e + 1, 2);
}
function Vp(e, n, r) {
  return new this(e).clamp(n, r);
}
function Mp(e) {
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
    if (r = o[n], t && (this[r] = Jo[r]), (a = e[r]) !== void 0)
      if (Qe(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error($r + r + ": " + a);
  if (r = "crypto", t && (this[r] = Jo[r]), (a = e[r]) !== void 0)
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
function Bp(e) {
  return new this(e).cos();
}
function Ep(e) {
  return new this(e).cosh();
}
function Ru(e) {
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
      return xo(u, o.toString());
    } else if (s !== "string")
      throw Error($r + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Iu.test(o) ? xo(u, o) : pp(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Mp, t.clone = Ru, t.isDecimal = gl, t.abs = gp, t.acos = yp, t.acosh = bp, t.add = wp, t.asin = Cp, t.asinh = Sp, t.atan = kp, t.atanh = $p, t.atan2 = Tp, t.cbrt = Pp, t.ceil = Op, t.clamp = Vp, t.cos = Bp, t.cosh = Ep, t.div = Ip, t.exp = Np, t.floor = Dp, t.hypot = zp, t.ln = Ap, t.log = Lp, t.log10 = Up, t.log2 = Rp, t.max = Hp, t.min = Fp, t.mod = Yp, t.mul = jp, t.pow = Wp, t.random = Gp, t.round = qp, t.sign = Xp, t.sin = Kp, t.sinh = Zp, t.sqrt = Jp, t.sub = Qp, t.sum = _p, t.tan = xp, t.tanh = eh, t.trunc = nh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Ip(e, n) {
  return new this(e).div(n);
}
function Np(e) {
  return new this(e).exp();
}
function Dp(e) {
  return ce(e = new this(e), e.e + 1, 3);
}
function zp() {
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
  return e instanceof ur || e && e.toStringTag === Eu || !1;
}
function Ap(e) {
  return new this(e).ln();
}
function Lp(e, n) {
  return new this(e).log(n);
}
function Rp(e) {
  return new this(e).log(2);
}
function Up(e) {
  return new this(e).log(10);
}
function Hp() {
  return zu(this, arguments, "lt");
}
function Fp() {
  return zu(this, arguments, "gt");
}
function Yp(e, n) {
  return new this(e).mod(n);
}
function jp(e, n) {
  return new this(e).mul(n);
}
function Wp(e, n) {
  return new this(e).pow(n);
}
function Gp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : ln(e, 1, Or), a = Math.ceil(e / me), this.crypto)
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
  for (a = i[--o], e %= me, a && e && (t = je(10, me - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= me)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < me && (r -= me - a);
  }
  return l.e = r, l.d = i, l;
}
function qp(e) {
  return ce(e = new this(e), e.e + 1, this.rounding);
}
function Xp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Kp(e) {
  return new this(e).sin();
}
function Zp(e) {
  return new this(e).sinh();
}
function Jp(e) {
  return new this(e).sqrt();
}
function Qp(e, n) {
  return new this(e).sub(n);
}
function _p() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (pe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return pe = !0, ce(r, this.precision, this.rounding);
}
function xp(e) {
  return new this(e).tan();
}
function eh(e) {
  return new this(e).tanh();
}
function nh(e) {
  return ce(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var ur = q.constructor = Ru(Jo);
Wt = new ur(Wt);
Gt = new ur(Gt);
var rh = {
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
  onBeforeChange: H(),
  onChange: H(),
  onIncrement: H(),
  onDecrement: H(),
  "onUpdate:modelValue": H()
}, {
  n: ah,
  classes: th
} = x("counter"), yl = 100, bl = 600, oh = ["inputmode", "readonly", "disabled"];
function ih(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = te("var-form-details");
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      Ee({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
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
          default: de(() => [J(r, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), Ce(z(
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
        oh
      ), [[Dv, e.inputValue]]), J(
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
          default: de(() => [J(r, {
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
var Uu = _({
  name: "VarCounter",
  components: {
    VarButton: Je,
    VarIcon: Pe,
    VarFormDetails: Ke
  },
  directives: {
    Ripple: Ue
  },
  inheritAttrs: !1,
  props: rh,
  setup(e) {
    var n = M(""), {
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
    } = a ?? {}, d, f, v, m, p = () => l(e.rules, e.modelValue), y = (Y) => {
      Be(() => {
        var {
          validateTrigger: j,
          rules: se,
          modelValue: W
        } = e;
        o(j, Y, se, W);
      });
    }, h = () => {
      var {
        min: Y
      } = e;
      k(e["onUpdate:modelValue"], Y != null ? L(Y) : 0), i();
    }, b = {
      reset: h,
      validate: p,
      resetValidation: i
    }, V = U(() => {
      var {
        max: Y,
        modelValue: j
      } = e;
      return Y != null && L(j) >= L(Y);
    }), $ = U(() => {
      var {
        min: Y,
        modelValue: j
      } = e;
      return Y != null && L(j) <= L(Y);
    }), T = (Y) => {
      var {
        decimalLength: j,
        max: se,
        min: W
      } = e, E = L(Y);
      return se != null && E > L(se) && (E = L(se)), W != null && E < L(W) && (E = L(W)), Y = String(E), j != null && (Y = E.toFixed(L(j))), Y;
    }, I = (Y) => {
      var {
        lazyChange: j,
        onBeforeChange: se
      } = e, {
        value: W
      } = Y.target, E = T(W);
      j ? k(se, L(E), Q) : Z(E), y("onInputChange");
    }, P = () => {
      var {
        disabled: Y,
        readonly: j,
        disableDecrement: se,
        decrementButton: W,
        lazyChange: E,
        step: A,
        modelValue: K,
        onDecrement: ne,
        onBeforeChange: ve
      } = e;
      if (!(u != null && u.value || s != null && s.value || Y || j || se || !W) && !$.value) {
        var ue = new ur(L(K)).minus(new ur(L(A))).toString(), X = T(ue), re = L(X);
        k(ne, re), E ? k(ve, re, Q) : (Z(X), y("onDecrement"));
      }
    }, N = () => {
      var {
        disabled: Y,
        readonly: j,
        disableIncrement: se,
        incrementButton: W,
        lazyChange: E,
        step: A,
        modelValue: K,
        onIncrement: ne,
        onBeforeChange: ve
      } = e;
      if (!(u != null && u.value || s != null && s.value || Y || j || se || !W) && !V.value) {
        var ue = new ur(L(K)).plus(new ur(L(A))).toString(), X = T(ue), re = L(X);
        k(ne, re), E ? k(ve, re, Q) : (Z(X), y("onIncrement"));
      }
    }, w = () => {
      var {
        press: Y,
        lazyChange: j
      } = e;
      !Y || j || (m = window.setTimeout(() => {
        R();
      }, bl));
    }, B = () => {
      var {
        press: Y,
        lazyChange: j
      } = e;
      !Y || j || (v = window.setTimeout(() => {
        S();
      }, bl));
    }, D = () => {
      f && clearTimeout(f), m && clearTimeout(m);
    }, C = () => {
      d && clearTimeout(d), v && clearTimeout(v);
    }, S = () => {
      d = window.setTimeout(() => {
        N(), S();
      }, yl);
    }, R = () => {
      f = window.setTimeout(() => {
        P(), R();
      }, yl);
    }, Z = (Y) => {
      n.value = Y;
      var j = L(Y);
      k(e["onUpdate:modelValue"], j);
    }, Q = (Y) => {
      Z(T(String(Y))), y("onLazyChange");
    };
    return k(r, b), ie(() => e.modelValue, (Y) => {
      Z(T(String(Y))), k(e.onChange, L(Y));
    }), Z(T(String(e.modelValue))), {
      n: ah,
      classes: th,
      formatElevation: vn,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: $,
      validate: p,
      reset: h,
      resetValidation: i,
      handleChange: I,
      decrement: P,
      increment: N,
      pressDecrement: w,
      pressIncrement: B,
      releaseDecrement: D,
      releaseIncrement: C,
      toSizeUnit: ge,
      toNumber: L
    };
  }
});
Uu.render = ih;
const qr = Uu;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var YS = qr, Hu = 60, Fu = Hu * 60, Yu = Fu * 24, lh = Yu * 7, Xa = 1e3, Co = Hu * Xa, wl = Fu * Xa, sh = Yu * Xa, uh = lh * Xa, Ii = "millisecond", Ha = "second", Fa = "minute", Ya = "hour", rr = "day", At = "week", Vn = "month", ju = "quarter", ar = "year", ja = "date", dh = "YYYY-MM-DDTHH:mm:ssZ", Cl = "Invalid Date", vh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, fh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const ch = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ei = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, mh = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + ei(t, 2, "0") + ":" + ei(o, 2, "0");
}, ph = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Vn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Vn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, hh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, gh = function(n) {
  var r = {
    M: Vn,
    y: ar,
    w: At,
    d: rr,
    D: ja,
    h: Ya,
    m: Fa,
    s: Ha,
    ms: Ii,
    Q: ju
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, yh = function(n) {
  return n === void 0;
};
const bh = {
  s: ei,
  z: mh,
  m: ph,
  a: hh,
  p: gh,
  u: yh
};
var ot = "en", Xr = {};
Xr[ot] = ch;
var Ni = function(n) {
  return n instanceof fo;
}, Xt = function e(n, r, a) {
  var t;
  if (!n)
    return ot;
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
  return !a && t && (ot = t), t || !a && ot;
}, oe = function(n, r) {
  if (Ni(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new fo(a);
}, wh = function(n, r) {
  return oe(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ve = bh;
Ve.l = Xt;
Ve.i = Ni;
Ve.w = wh;
var Ch = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Ve.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(vh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, fo = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Xt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Ch(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Ve;
  }, n.isValid = function() {
    return this.$d.toString() !== Cl;
  }, n.isSame = function(a, t) {
    var o = oe(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return oe(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < oe(a);
  }, n.$g = function(a, t, o) {
    return Ve.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Ve.u(t) ? !0 : t, i = Ve.p(a), s = function(b, V) {
      var $ = Ve.w(o.$u ? Date.UTC(o.$y, V, b) : new Date(o.$y, V, b), o);
      return l ? $ : $.endOf(rr);
    }, u = function(b, V) {
      var $ = [0, 0, 0, 0], T = [23, 59, 59, 999];
      return Ve.w(o.toDate()[b].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? $ : T).slice(V)
      ), o);
    }, d = this.$W, f = this.$M, v = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case ar:
        return l ? s(1, 0) : s(31, 11);
      case Vn:
        return l ? s(1, f) : s(0, f + 1);
      case At: {
        var p = this.$locale().weekStart || 0, y = (d < p ? d + 7 : d) - p;
        return s(l ? v - y : v + (6 - y), f);
      }
      case rr:
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
    var o, l = Ve.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[rr] = i + "Date", o[ja] = i + "Date", o[Vn] = i + "Month", o[ar] = i + "FullYear", o[Ya] = i + "Hours", o[Fa] = i + "Minutes", o[Ha] = i + "Seconds", o[Ii] = i + "Milliseconds", o)[l], u = l === rr ? this.$D + (t - this.$W) : t;
    if (l === Vn || l === ar) {
      var d = this.clone().set(ja, 1);
      d.$d[s](u), d.init(), this.$d = d.set(ja, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Ve.p(a)]();
  }, n.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Ve.p(t), s = function(v) {
      var m = oe(o);
      return Ve.w(m.date(m.date() + Math.round(v * a)), o);
    };
    if (i === Vn)
      return this.set(Vn, this.$M + a);
    if (i === ar)
      return this.set(ar, this.$y + a);
    if (i === rr)
      return s(1);
    if (i === At)
      return s(7);
    var u = (l = {}, l[Fa] = Co, l[Ya] = wl, l[Ha] = Xa, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Ve.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Cl;
    var l = a || dh, i = Ve.z(this), s = this.$H, u = this.$m, d = this.$M, f = o.weekdays, v = o.months, m = o.meridiem, p = function($, T, I, P) {
      return $ && ($[T] || $(t, l)) || I[T].slice(0, P);
    }, y = function($) {
      return Ve.s(s % 12 || 12, $, "0");
    }, h = m || function(V, $, T) {
      var I = V < 12 ? "AM" : "PM";
      return T ? I.toLowerCase() : I;
    }, b = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Ve.s(d + 1, 2, "0"),
      MMM: p(o.monthsShort, d, v, 3),
      MMMM: p(v, d),
      D: this.$D,
      DD: Ve.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(o.weekdaysMin, this.$W, f, 2),
      ddd: p(o.weekdaysShort, this.$W, f, 3),
      dddd: f[this.$W],
      H: String(s),
      HH: Ve.s(s, 2, "0"),
      h: y(1),
      hh: y(2),
      a: h(s, u, !0),
      A: h(s, u, !1),
      m: String(u),
      mm: Ve.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ve.s(this.$s, 2, "0"),
      SSS: Ve.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(fh, function(V, $) {
      return $ || b[V] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Ve.p(t), s = oe(a), u = (s.utcOffset() - this.utcOffset()) * Co, d = this - s, f = Ve.m(this, s);
    return f = (l = {}, l[ar] = f / 12, l[Vn] = f, l[ju] = f / 3, l[At] = (d - u) / uh, l[rr] = (d - u) / sh, l[Ya] = d / wl, l[Fa] = d / Co, l[Ha] = d / Xa, l)[i] || d, o ? f : Ve.a(f);
  }, n.daysInMonth = function() {
    return this.endOf(Vn).$D;
  }, n.$locale = function() {
    return Xr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Xt(a, t, !0);
    return l && (o.$L = l), o;
  }, n.clone = function() {
    return Ve.w(this.$d, this);
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
[["$ms", Ii], ["$s", Ha], ["$m", Fa], ["$H", Ya], ["$W", rr], ["$M", Vn], ["$y", ar], ["$D", ja]].forEach(function(e) {
  Wu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
oe.extend = function(e, n) {
  return e.$i || (e(n, fo, oe), e.$i = !0), oe;
};
oe.locale = Xt;
oe.isDayjs = Ni;
oe.unix = function(e) {
  return oe(e * 1e3);
};
oe.en = Xr[ot];
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
function Sh(e) {
  return ["date", "month"].includes(e);
}
var Lt = [{
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
}], at = [{
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
}], kh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Sh
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
  onPreview: H(),
  onChange: H(),
  "onUpdate:modelValue": H()
}, {
  n: $h
} = x("picker-header");
function Th(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return g(), O(
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
        default: de(() => [J(r, {
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
        ze,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: de(() => [(g(), O(
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
        default: de(() => [J(r, {
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
var Xu = _({
  name: "PanelHeader",
  components: {
    VarButton: Je,
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
    } = n, a = M(!1), t = M(0), o = U(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: f
      } = s;
      if (u === "month")
        return L(f) + t.value;
      var v = (i = Ge.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return Ge.value.lang === "zh-CN" ? f + " " + v : v + " " + f;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return ie(() => e.date, () => {
      t.value = 0;
    }), {
      n: $h,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Xu.render = Th;
const Ku = Xu;
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
  n: Mt,
  classes: Ph
} = x("month-picker"), {
  n: Bt
} = x("date-picker");
function Oh(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return g(), O(
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
        ze,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: de(() => [(g(), O("ul", {
            key: e.panelKey
          }, [(g(!0), O(
            Oe,
            null,
            Ae(e.MONTH_LIST, (t) => (g(), O("li", {
              key: t.index
            }, [J(
              a,
              Ee({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, ni({}, e.buttonProps(t.index)), {
                onClick: n[0] || (n[0] = (o) => chooseMonth(t, o))
              }),
              {
                default: de(() => [we(
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
var Zu = _({
  name: "MonthPickerPanel",
  components: {
    VarButton: Je,
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
    } = n, [a, t] = e.current.split("-"), o = M(!1), l = M(0), i = M(null), s = Ne({
      left: !1,
      right: !1
    }), u = U(() => e.choose.chooseYear === e.preview.previewYear), d = U(() => e.preview.previewYear === a), f = (V) => {
      var $, T;
      return ($ = (T = Ge.value.datePickerMonthDict) == null ? void 0 : T[V].abbr) != null ? $ : "";
    }, v = (V) => {
      var {
        preview: {
          previewYear: $
        },
        componentProps: {
          min: T,
          max: I
        }
      } = e, P = !0, N = !0, w = $ + "-" + V;
      return I && (P = oe(w).isSameOrBefore(oe(I), "month")), T && (N = oe(w).isSameOrAfter(oe(T), "month")), P && N;
    }, m = (V) => {
      var {
        choose: {
          chooseMonths: $,
          chooseDays: T,
          chooseRangeMonth: I
        },
        componentProps: {
          type: P,
          range: N
        }
      } = e;
      if (N) {
        if (!I.length)
          return !1;
        var w = oe(V).isSameOrBefore(oe(I[1]), "month"), B = oe(V).isSameOrAfter(oe(I[0]), "month");
        return w && B;
      }
      return P === "month" ? $.includes(V) : T.some((D) => D.includes(V));
    }, p = (V) => {
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
          multiple: N,
          range: w
        }
      } = e, B = T + "-" + V, D = () => w || N ? m(B) : ($ == null ? void 0 : $.index) === V && u.value, C = () => v(V) ? I ? !I(B) : !1 : !0, S = C(), R = () => S ? !0 : w || N ? !m(B) : !u.value || ($ == null ? void 0 : $.index) !== V, Z = () => d.value && t === V && e.componentProps.showCurrent ? (w || N || u.value) && S ? !0 : w || N ? !m(B) : u.value ? ($ == null ? void 0 : $.index) !== t : !0 : !1, Q = () => S ? "" : Z() ? P ?? "" : D() ? "" : Bt() + "-color-cover", Y = Q().startsWith(Bt());
      return {
        outline: Z(),
        text: R(),
        color: R() ? "" : P,
        textColor: Y ? "" : Q(),
        [Bt() + "-color-cover"]: Y,
        class: Ph(Mt("button"), [S, Mt("button--disabled")]),
        disabled: S
      };
    }, y = (V, $) => {
      var T = $.currentTarget;
      T.classList.contains(Mt("button--disabled")) || r("choose-month", V);
    }, h = (V) => {
      o.value = V === "prev", l.value += V === "prev" ? -1 : 1, r("check-preview", "year", V);
    }, b = (V) => {
      i.value.checkDate(V);
    };
    return ie(() => e.preview.previewYear, (V) => {
      var {
        componentProps: {
          min: $,
          max: T
        }
      } = e;
      T && (s.right = !oe("" + (L(V) + 1)).isSameOrBefore(oe(T), "year")), $ && (s.left = !oe("" + (L(V) - 1)).isSameOrAfter(oe($), "year"));
    }, {
      immediate: !0
    }), {
      n: Mt,
      nDate: Bt,
      pack: Ge,
      MONTH_LIST: Lt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: b,
      buttonProps: p,
      getMonthAbbr: f,
      chooseMonth: y,
      checkDate: h
    };
  }
});
Zu.render = Oh;
const Vh = Zu;
var {
  n: Sl,
  classes: Mh
} = x("year-picker"), Bh = ["onClick"];
function Eh(e, n) {
  return g(), O(
    "ul",
    {
      class: c(e.n())
    },
    [(g(!0), O(
      Oe,
      null,
      Ae(e.yearList, (r) => (g(), O(
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
        Bh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Ju = _({
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
    } = n, a = U(() => {
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
        var d = oe(i).format("YYYY-MM-D"), f = L(d.split("-")[0]);
        if (f < u[0] && f > u[1] && (u = [f, u[1]]), f <= u[1])
          return [f];
      }
      if (s) {
        var v = oe(s).format("YYYY-MM-D"), m = L(v.split("-")[0]);
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
      var o = document.querySelector("." + Sl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Sl,
      classes: Mh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Ju.render = Eh;
const Ih = Ju;
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
oe.extend(Gu);
oe.extend(qu);
var {
  n: Ra,
  classes: Nh
} = x("day-picker"), {
  n: Et
} = x("date-picker");
function Dh(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return g(), O(
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
        ze,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: de(() => [(g(), O("div", {
            key: e.panelKey
          }, [z(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(g(!0), O(
              Oe,
              null,
              Ae(e.sortWeekList, (t) => (g(), O(
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
            [(g(!0), O(
              Oe,
              null,
              Ae(e.days, (t, o) => (g(), O("li", {
                key: o
              }, [J(
                a,
                Ee({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, ri({}, e.buttonProps(t)), {
                  onClick: n[0] || (n[0] = (l) => chooseDay(t, l))
                }),
                {
                  default: de(() => [we(
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
var Qu = _({
  name: "DayPickerPanel",
  components: {
    VarButton: Je,
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
    } = n, [a, t, o] = e.current.split("-"), l = M([]), i = M(!1), s = M(0), u = M(null), d = Ne({
      left: !1,
      right: !1
    }), f = U(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), v = U(() => {
      var w;
      return e.choose.chooseYear === e.preview.previewYear && ((w = e.choose.chooseMonth) == null ? void 0 : w.index) === e.preview.previewMonth.index;
    }), m = U(() => {
      var w = at.findIndex((B) => B.index === e.componentProps.firstDayOfWeek);
      return w === -1 || w === 0 ? at : at.slice(w).concat(at.slice(0, w));
    }), p = (w) => {
      var B, D;
      return (B = (D = Ge.value.datePickerWeekDict) == null ? void 0 : D[w].abbr) != null ? B : "";
    }, y = (w) => w > 0 ? w : "", h = () => {
      var {
        preview: {
          previewMonth: w,
          previewYear: B
        }
      } = e, D = oe(B + "-" + w.index).daysInMonth(), C = oe(B + "-" + w.index + "-01").day(), S = m.value.findIndex((R) => R.index === "" + C);
      l.value = [...Array(S).fill(-1), ...Array.from(Array(D + 1).keys())].filter((R) => R);
    }, b = () => {
      var {
        preview: {
          previewYear: w,
          previewMonth: B
        },
        componentProps: {
          max: D,
          min: C
        }
      } = e;
      if (D) {
        var S = w + "-" + (L(B.index) + 1);
        d.right = !oe(S).isSameOrBefore(oe(D), "month");
      }
      if (C) {
        var R = w + "-" + (L(B.index) - 1);
        d.left = !oe(R).isSameOrAfter(oe(C), "month");
      }
    }, V = (w) => {
      var {
        preview: {
          previewYear: B,
          previewMonth: D
        },
        componentProps: {
          min: C,
          max: S
        }
      } = e, R = !0, Z = !0, Q = B + "-" + D.index + "-" + w;
      return S && (R = oe(Q).isSameOrBefore(oe(S), "day")), C && (Z = oe(Q).isSameOrAfter(oe(C), "day")), R && Z;
    }, $ = (w) => {
      var {
        choose: {
          chooseDays: B,
          chooseRangeDay: D
        },
        componentProps: {
          range: C
        }
      } = e;
      if (C) {
        if (!D.length)
          return !1;
        var S = oe(w).isSameOrBefore(oe(D[1]), "day"), R = oe(w).isSameOrAfter(oe(D[0]), "day");
        return S && R;
      }
      return B.includes(w);
    }, T = (w) => {
      if (w < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ra("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: B
        },
        preview: {
          previewYear: D,
          previewMonth: C
        },
        componentProps: {
          allowedDates: S,
          color: R,
          multiple: Z,
          range: Q
        }
      } = e, Y = D + "-" + C.index + "-" + w, j = () => Q || Z ? $(Y) : L(B) === w && v.value, se = () => V(w) ? S ? !S(Y) : !1 : !0, W = se(), E = () => W ? !0 : Q || Z ? !$(Y) : !v.value || L(B) !== w, A = () => f.value && L(o) === w && e.componentProps.showCurrent ? (Q || Z || v.value) && W ? !0 : Q || Z ? !$(Y) : v.value ? B !== o : !0 : !1, K = () => W ? "" : A() ? R ?? "" : j() ? "" : Et() + "-color-cover", ne = K().startsWith(Et());
      return {
        text: E(),
        outline: A(),
        textColor: ne ? "" : K(),
        [Et() + "-color-cover"]: ne,
        class: Nh(Ra("button"), Ra("button--usable"), [W, Ra("button--disabled")]),
        disabled: W
      };
    }, I = (w) => {
      i.value = w === "prev", s.value += w === "prev" ? -1 : 1, r("check-preview", "month", w);
    }, P = (w, B) => {
      var D = B.currentTarget;
      D.classList.contains(Ra("button--disabled")) || r("choose-day", w);
    }, N = (w) => {
      u.value.checkDate(w);
    };
    return sn(() => {
      h(), b();
    }), ie(() => e.preview, () => {
      h(), b();
    }), {
      n: Ra,
      nDate: Et,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: N,
      filterDay: y,
      getDayAbbr: p,
      checkDate: I,
      chooseDay: P,
      buttonProps: T
    };
  }
});
Qu.render = Dh;
const zh = Qu;
var {
  n: Ah,
  classes: Lh
} = x("date-picker");
function Rh(e, n) {
  var r = te("year-picker-panel"), a = te("month-picker-panel"), t = te("day-picker-panel");
  return g(), O(
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
        [F(e.$slots, "year", {
          year: e.chooseYear
        }, () => [we(
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
          ze,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: de(() => {
              var o, l, i;
              return [e.type === "month" ? (g(), O("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? F(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [we(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? F(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [we(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : F(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [we(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (g(), O("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? F(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [we(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? F(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [we(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : F(e.$slots, "date", bt(Ee({
                key: 2
              }, e.slotProps)), () => [we(
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
        ze,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: de(() => [e.getPanelType === "year" ? (g(), ye(
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
          )) : e.getPanelType === "month" ? (g(), ye(
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
          )) : e.getPanelType === "date" ? (g(), ye(
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
var _u = _({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Vh,
    YearPickerPanel: Ih,
    DayPickerPanel: zh
  },
  props: kh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = oe().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Lt.find((le) => le.index === i), u = M(!1), d = M(!1), f = M(!0), v = M(), m = M(), p = M(), y = M(s), h = M(l), b = M(!1), V = M([]), $ = M([]), T = M([]), I = M([]), P = M(null), N = M(null), w = Ne({
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
    }), B = U(() => ({
      chooseMonth: v.value,
      chooseYear: m.value,
      chooseDay: p.value,
      chooseMonths: V.value,
      chooseDays: $.value,
      chooseRangeMonth: T.value,
      chooseRangeDay: I.value
    })), D = U(() => ({
      previewMonth: y.value,
      previewYear: h.value
    })), C = U(() => {
      var {
        multiple: le,
        range: be
      } = e;
      if (be)
        return T.value.length ? T.value[0] + " ~ " + T.value[1] : "";
      var he = "";
      if (v.value) {
        var ke, Te;
        he = (ke = (Te = Ge.value.datePickerMonthDict) == null ? void 0 : Te[v.value.index].name) != null ? ke : "";
      }
      return le ? "" + V.value.length + Ge.value.datePickerSelected : he;
    }), S = U(() => {
      var le, be, he, ke, {
        multiple: Te,
        range: Fe
      } = e;
      if (Fe) {
        var _e = I.value.map((yo) => oe(yo).format("YYYY-MM-DD"));
        return _e.length ? _e[0] + " ~ " + _e[1] : "";
      }
      if (Te)
        return "" + $.value.length + Ge.value.datePickerSelected;
      if (!m.value || !v.value || !p.value)
        return "";
      var hn = oe(m.value + "-" + v.value.index + "-" + p.value).day(), La = at.find((yo) => yo.index === "" + hn), Gi = (le = (be = Ge.value.datePickerWeekDict) == null ? void 0 : be[La.index].name) != null ? le : "", Pv = (he = (ke = Ge.value.datePickerMonthDict) == null ? void 0 : ke[v.value.index].name) != null ? he : "", Ov = Ba(p.value, 2, "0");
      return Ge.value.lang === "zh-CN" ? v.value.index + "-" + Ov + " " + Gi.slice(0, 3) : Gi.slice(0, 3) + ", " + Pv.slice(0, 3) + " " + p.value;
    }), R = U(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Z = U(() => !e.touchable || ["", "year"].includes(R.value)), Q = U(() => {
      var le, be, he, ke, Te = oe(m.value + "-" + ((le = v.value) == null ? void 0 : le.index) + "-" + p.value).day(), Fe = p.value ? Ba(p.value, 2, "0") : "";
      return {
        week: "" + Te,
        year: (be = m.value) != null ? be : "",
        month: (he = (ke = v.value) == null ? void 0 : ke.index) != null ? he : "",
        date: Fe
      };
    }), Y = U(() => B.value.chooseRangeDay.map((le) => oe(le).format("YYYY-MM-DD"))), j = U(() => m.value === h.value), se = U(() => {
      var le;
      return ((le = v.value) == null ? void 0 : le.index) === y.value.index;
    }), W = (le) => {
      le === "year" ? u.value = !0 : le === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, E = (le) => {
      if (!Z.value) {
        var {
          clientX: be,
          clientY: he
        } = le.touches[0];
        n = be, r = he;
      }
    }, A = (le, be) => le >= be && le > 20 ? "x" : "y", K = (le) => {
      if (!Z.value) {
        var {
          clientX: be,
          clientY: he
        } = le.touches[0], ke = be - n, Te = he - r;
        t = A(Math.abs(ke), Math.abs(Te)), a = ke > 0 ? "prev" : "next";
      }
    }, ne = () => {
      if (!(Z.value || t !== "x")) {
        var le = R.value === "month" ? P : N;
        ro(() => {
          le.value.forwardRef(a), Mr();
        });
      }
    }, ve = (le, be) => {
      var he = be === "month" ? T : I;
      if (he.value = f.value ? [le, le] : [he.value[0], le], f.value = !f.value, f.value) {
        var ke = oe(he.value[0]).isAfter(he.value[1]), Te = ke ? [he.value[1], he.value[0]] : [...he.value];
        k(e["onUpdate:modelValue"], Te), k(e.onChange, Te);
      }
    }, ue = (le, be) => {
      var he = be === "month" ? V : $, ke = be === "month" ? "YYYY-MM" : "YYYY-MM-DD", Te = he.value.map((_e) => oe(_e).format(ke)), Fe = Te.findIndex((_e) => _e === le);
      Fe === -1 ? Te.push(le) : Te.splice(Fe, 1), k(e["onUpdate:modelValue"], Te), k(e.onChange, Te);
    }, X = (le, be) => !m.value || !v.value ? !1 : j.value ? le === "month" ? be.index < v.value.index : se.value ? be < L(p.value) : v.value.index > y.value.index : m.value > h.value, re = (le) => {
      var {
        readonly: be,
        range: he,
        multiple: ke,
        onChange: Te,
        "onUpdate:modelValue": Fe
      } = e;
      if (!(le < 0 || be)) {
        b.value = X("day", le);
        var _e = h.value + "-" + y.value.index + "-" + le, hn = oe(_e).format("YYYY-MM-DD");
        he ? ve(hn, "day") : ke ? ue(hn, "day") : (k(Fe, hn), k(Te, hn));
      }
    }, fe = (le) => {
      var {
        type: be,
        readonly: he,
        range: ke,
        multiple: Te,
        onChange: Fe,
        onPreview: _e,
        "onUpdate:modelValue": hn
      } = e;
      if (b.value = X("month", le), be === "month" && !he) {
        var La = h.value + "-" + le.index;
        ke ? ve(La, "month") : Te ? ue(La, "month") : (k(hn, La), k(Fe, La));
      } else
        y.value = le, k(_e, L(h.value), L(y.value.index));
      d.value = !1;
    }, Se = (le) => {
      h.value = "" + le, u.value = !1, d.value = !0, k(e.onPreview, L(h.value), L(y.value.index));
    }, We = (le, be) => {
      var he = be === "prev" ? -1 : 1;
      if (le === "year")
        h.value = "" + (L(h.value) + he);
      else {
        var ke = L(y.value.index) + he;
        ke < 1 && (h.value = "" + (L(h.value) - 1), ke = 12), ke > 12 && (h.value = "" + (L(h.value) + 1), ke = 1), y.value = Lt.find((Te) => L(Te.index) === ke);
      }
      k(e.onPreview, L(h.value), L(y.value.index));
    }, Pn = () => (e.multiple || e.range) && !$e(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && $e(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, On = (le) => $e(le) ? !1 : le === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, He = (le, be) => {
      var he = be === "month" ? T : I, ke = be === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = le.map((hn) => oe(hn).format(ke)).slice(0, 2), Fe = he.value.some((hn) => On(hn));
      if (!Fe) {
        he.value = Te;
        var _e = oe(he.value[0]).isAfter(he.value[1]);
        he.value.length === 2 && _e && (he.value = [he.value[1], he.value[0]]);
      }
    }, fn = (le, be) => {
      var he = be === "month" ? V : $, ke = be === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = Array.from(new Set(le.map((Fe) => oe(Fe).format(ke))));
      he.value = Te.filter((Fe) => Fe !== "Invalid Date");
    }, Tt = (le) => {
      var be = oe(le).format("YYYY-MM-D");
      if (!On(be)) {
        var [he, ke, Te] = be.split("-"), Fe = Lt.find((_e) => _e.index === ke);
        v.value = Fe, m.value = he, p.value = Te, y.value = Fe, h.value = he;
      }
    }, Mr = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (le) => {
      if (!(!Pn() || On(le) || !le))
        if (e.range) {
          if (!$e(le))
            return;
          f.value = le.length !== 1, He(le, e.type);
        } else if (e.multiple) {
          if (!$e(le))
            return;
          fn(le, e.type);
        } else
          Tt(le);
    }, {
      immediate: !0
    }), ie(R, Mr), {
      n: Ah,
      classes: Lh,
      monthPanelEl: P,
      dayPanelEl: N,
      reverse: b,
      currentDate: o,
      chooseMonth: v,
      chooseYear: m,
      chooseDay: p,
      previewYear: h,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: S,
      getPanelType: R,
      getChoose: B,
      getPreview: D,
      componentProps: w,
      slotProps: Q,
      formatRange: Y,
      clickEl: W,
      handleTouchstart: E,
      handleTouchmove: K,
      handleTouchend: ne,
      getChooseDay: re,
      getChooseMonth: fe,
      getChooseYear: Se,
      checkPreview: We,
      formatElevation: vn
    };
  }
});
_u.render = Rh;
const Kr = _u;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var jS = Kr;
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
function Uh(e) {
  return ["left", "center", "right"].includes(e);
}
var Hh = ai({
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
    validator: Uh
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
  onBeforeClose: H(),
  onConfirm: H(),
  onCancel: H(),
  "onUpdate:show": H()
}, qe(St, [
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
var {
  n: Fh,
  classes: Yh
} = x("dialog");
function jh(e, n) {
  var r = te("var-button"), a = te("var-popup");
  return g(), ye(
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
      default: de(() => [z(
        "div",
        Ee({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: ti({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [z(
          "div",
          {
            class: c(e.n("title"))
          },
          [F(e.$slots, "title", {}, () => [we(
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
          [F(e.$slots, "default", {}, () => [we(
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
          [e.cancelButton ? (g(), ye(
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
              default: de(() => [we(
                ae(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : ee("v-if", !0), e.confirmButton ? (g(), ye(
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
              default: de(() => [we(
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
var xu = _({
  name: "VarDialog",
  components: {
    VarPopup: bn,
    VarButton: Je
  },
  inheritAttrs: !1,
  props: Hh,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => k(e["onUpdate:show"], !1), t = () => {
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
      n: Fh,
      classes: Yh,
      pack: Ge,
      dt: no,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ge
    };
  }
});
xu.render = jh;
const pr = xu;
function Kt() {
  return Kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Kt.apply(this, arguments);
}
var or, Zt = {};
function Wh(e) {
  return e === void 0 && (e = {}), Re(e) ? Kt({}, Zt, {
    message: e
  }) : Kt({}, Zt, e);
}
function Jn(e) {
  return Ct() ? new Promise((n) => {
    Jn.close();
    var r = Wh(e), a = Ne(r);
    a.teleport = "body", or = a;
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
  Zt = e;
};
Jn.resetDefaultOptions = function() {
  Zt = {};
};
Jn.close = function() {
  if (or != null) {
    var e = or;
    or = null, Be().then(() => {
      e.show = !1;
    });
  }
};
pr.install = function(e) {
  e.component(pr.name, pr);
};
Jn.install = function(e) {
  e.component(pr.name, pr);
};
Jn.Component = pr;
var WS = pr, Gh = {
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
  n: qh,
  classes: Xh
} = x("divider");
function Kh(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [F(e.$slots, "default", {}, () => [e.description ? (g(), O(
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
var ed = _({
  name: "VarDivider",
  props: Gh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ne({
      withText: !1
    }), t = U(() => Po(e.inset) ? e.inset : !0), o = U(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Po(i) || i === 0)
        return Wa({}, d);
      var f = L(i), v = Math.abs(f) + (i + "").replace(f + "", "");
      return s ? Wa({}, d, {
        height: "calc(80% - " + ge(v) + ")"
      }) : Wa({}, d, {
        width: "calc(100% - " + ge(v) + ")",
        left: f > 0 ? ge(v) : ge(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return sn(() => {
      l();
    }), xt(() => {
      l();
    }), Wa({
      n: qh,
      classes: Xh
    }, zv(a), {
      style: o,
      isInset: t
    });
  }
});
ed.render = Kh;
const Zr = ed;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var GS = Zr, Zh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Rt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Zh[n];
  });
}
var Fn = "top", Tr = "bottom", Ea = "right", hr = "left", co = "auto", mo = [Fn, Tr, Ea, hr], po = "start", mt = "end", Jh = "clippingParents", nd = "viewport", nt = "popper", Qh = "reference", kl = /* @__PURE__ */ mo.reduce(function(e, n) {
  return e.concat([n + "-" + po, n + "-" + mt]);
}, []), rd = /* @__PURE__ */ [].concat(mo, [co]).reduce(function(e, n) {
  return e.concat([n, n + "-" + po, n + "-" + mt]);
}, []), _h = "beforeRead", xh = "read", eg = "afterRead", ng = "beforeMain", rg = "main", ag = "afterMain", tg = "beforeWrite", og = "write", ig = "afterWrite", oi = [_h, xh, eg, ng, rg, ag, tg, og, ig];
function Yn(e) {
  return e.split("-")[0];
}
var lg = {
  start: "end",
  end: "start"
};
function $l(e) {
  return e.replace(/start|end/g, function(n) {
    return lg[n];
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
function Ia(e) {
  var n = Tn(e).Element;
  return e instanceof n || e instanceof Element;
}
function wn(e) {
  var n = Tn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Di(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Tn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Vr(e) {
  return ((Ia(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var it = Math.max, Tl = Math.min, Ka = Math.round;
function ii() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ad() {
  return !/^((?!chrome|android).)*safari/i.test(ii());
}
function Za(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && wn(e) && (t = e.offsetWidth > 0 && Ka(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ka(a.height) / e.offsetHeight || 1);
  var l = Ia(e) ? Tn(e) : window, i = l.visualViewport, s = !ad() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, f = a.width / t, v = a.height / o;
  return {
    width: f,
    height: v,
    top: d,
    right: u + f,
    bottom: d + v,
    left: u,
    x: u,
    y: d
  };
}
function zi(e) {
  var n = Tn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Ai(e) {
  return Za(Vr(e)).left + zi(e).scrollLeft;
}
function sg(e, n) {
  var r = Tn(e), a = Vr(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
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
function In(e) {
  return Tn(e).getComputedStyle(e);
}
function ug(e) {
  var n, r = Vr(e), a = zi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = it(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = it(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Ai(e), s = -a.scrollTop;
  return In(t || r).direction === "rtl" && (i += it(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Ln(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ho(e) {
  return Ln(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Di(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Vr(e)
  );
}
function Li(e) {
  var n = In(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function td(e) {
  return ["html", "body", "#document"].indexOf(Ln(e)) >= 0 ? e.ownerDocument.body : wn(e) && Li(e) ? e : td(ho(e));
}
function lt(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = td(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Tn(a), l = t ? [o].concat(o.visualViewport || [], Li(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(lt(ho(l)))
  );
}
function dg(e) {
  return ["table", "td", "th"].indexOf(Ln(e)) >= 0;
}
function Pl(e) {
  return !wn(e) || // https://github.com/popperjs/popper-core/issues/837
  In(e).position === "fixed" ? null : e.offsetParent;
}
function vg(e) {
  var n = /firefox/i.test(ii()), r = /Trident/i.test(ii());
  if (r && wn(e)) {
    var a = In(e);
    if (a.position === "fixed")
      return null;
  }
  var t = ho(e);
  for (Di(t) && (t = t.host); wn(t) && ["html", "body"].indexOf(Ln(t)) < 0; ) {
    var o = In(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ri(e) {
  for (var n = Tn(e), r = Pl(e); r && dg(r) && In(r).position === "static"; )
    r = Pl(r);
  return r && (Ln(r) === "html" || Ln(r) === "body" && In(r).position === "static") ? n : r || vg(e) || n;
}
function fg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Di(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function li(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function cg(e, n) {
  var r = Za(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ol(e, n, r) {
  return n === nd ? li(sg(e, r)) : Ia(n) ? cg(n, r) : li(ug(Vr(e)));
}
function mg(e) {
  var n = lt(ho(e)), r = ["absolute", "fixed"].indexOf(In(e).position) >= 0, a = r && wn(e) ? Ri(e) : e;
  return Ia(a) ? n.filter(function(t) {
    return Ia(t) && fg(t, a) && Ln(t) !== "body";
  }) : [];
}
function pg(e, n, r, a) {
  var t = n === "clippingParents" ? mg(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = Ol(e, u, a);
    return s.top = it(d.top, s.top), s.right = Tl(d.right, s.right), s.bottom = Tl(d.bottom, s.bottom), s.left = it(d.left, s.left), s;
  }, Ol(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function pt(e) {
  return e.split("-")[1];
}
function hg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function od(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Yn(a) : null, o = a ? pt(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Fn:
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
  var u = t ? hg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case po:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case mt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function gg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function yg(e) {
  return Object.assign({}, gg(), e);
}
function bg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function id(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Jh : i, u = r.rootBoundary, d = u === void 0 ? nd : u, f = r.elementContext, v = f === void 0 ? nt : f, m = r.altBoundary, p = m === void 0 ? !1 : m, y = r.padding, h = y === void 0 ? 0 : y, b = yg(typeof h != "number" ? h : bg(h, mo)), V = v === nt ? Qh : nt, $ = e.rects.popper, T = e.elements[p ? V : v], I = pg(Ia(T) ? T : T.contextElement || Vr(e.elements.popper), s, d, l), P = Za(e.elements.reference), N = od({
    reference: P,
    element: $,
    strategy: "absolute",
    placement: t
  }), w = li(Object.assign({}, $, N)), B = v === nt ? w : P, D = {
    top: I.top - B.top + b.top,
    bottom: B.bottom - I.bottom + b.bottom,
    left: I.left - B.left + b.left,
    right: B.right - I.right + b.right
  }, C = e.modifiersData.offset;
  if (v === nt && C) {
    var S = C[t];
    Object.keys(D).forEach(function(R) {
      var Z = [Ea, Tr].indexOf(R) >= 0 ? 1 : -1, Q = [Fn, Tr].indexOf(R) >= 0 ? "y" : "x";
      D[R] += S[Q] * Z;
    });
  }
  return D;
}
function wg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? rd : s, d = pt(a), f = d ? i ? kl : kl.filter(function(p) {
    return pt(p) === d;
  }) : mo, v = f.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  v.length === 0 && (v = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = v.reduce(function(p, y) {
    return p[y] = id(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Yn(y)], p;
  }, {});
  return Object.keys(m).sort(function(p, y) {
    return m[p] - m[y];
  });
}
function Cg(e) {
  if (Yn(e) === co)
    return [];
  var n = Rt(e);
  return [$l(e), n, $l(n)];
}
function Sg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, f = r.rootBoundary, v = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, y = r.allowedAutoPlacements, h = n.options.placement, b = Yn(h), V = b === h, $ = s || (V || !p ? [Rt(h)] : Cg(h)), T = [h].concat($).reduce(function(ve, ue) {
      return ve.concat(Yn(ue) === co ? wg(n, {
        placement: ue,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: y
      }) : ue);
    }, []), I = n.rects.reference, P = n.rects.popper, N = /* @__PURE__ */ new Map(), w = !0, B = T[0], D = 0; D < T.length; D++) {
      var C = T[D], S = Yn(C), R = pt(C) === po, Z = [Fn, Tr].indexOf(S) >= 0, Q = Z ? "width" : "height", Y = id(n, {
        placement: C,
        boundary: d,
        rootBoundary: f,
        altBoundary: v,
        padding: u
      }), j = Z ? R ? Ea : hr : R ? Tr : Fn;
      I[Q] > P[Q] && (j = Rt(j));
      var se = Rt(j), W = [];
      if (o && W.push(Y[S] <= 0), i && W.push(Y[j] <= 0, Y[se] <= 0), W.every(function(ve) {
        return ve;
      })) {
        B = C, w = !1;
        break;
      }
      N.set(C, W);
    }
    if (w)
      for (var E = p ? 3 : 1, A = function(ue) {
        var X = T.find(function(re) {
          var fe = N.get(re);
          if (fe)
            return fe.slice(0, ue).every(function(Se) {
              return Se;
            });
        });
        if (X)
          return B = X, "break";
      }, K = E; K > 0; K--) {
        var ne = A(K);
        if (ne === "break")
          break;
      }
    n.placement !== B && (n.modifiersData[a]._skip = !0, n.placement = B, n.reset = !0);
  }
}
const kg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Sg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function $g(e, n, r) {
  var a = Yn(e), t = [hr, Fn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
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
function Tg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = rd.reduce(function(d, f) {
    return d[f] = $g(f, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const Pg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Tg
};
function Og(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Vg(e) {
  return e === Tn(e) || !wn(e) ? zi(e) : Og(e);
}
function Mg(e) {
  var n = e.getBoundingClientRect(), r = Ka(n.width) / e.offsetWidth || 1, a = Ka(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Bg(e, n, r) {
  r === void 0 && (r = !1);
  var a = wn(n), t = wn(n) && Mg(n), o = Vr(n), l = Za(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Ln(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Li(o)) && (i = Vg(n)), wn(n) ? (s = Za(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Ai(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Eg(e) {
  var n = Za(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Ig(e) {
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
function Ng(e) {
  var n = Ig(e);
  return oi.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Dg(e) {
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
var Br = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', zg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Vl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ag(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Vl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(er(Br, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(er(Br, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          oi.indexOf(n.phase) < 0 && console.error(er(Br, n.name, '"phase"', "either " + oi.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(er(Br, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(er(Br, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(er(Br, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(er(Br, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
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
        }) == null && console.error(er(zg, String(n.name), a, a));
      });
    });
  });
}
function Lg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Rg(e) {
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
var Ml = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Ug = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Bl = {
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
function Hg(e) {
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
    }, f = [], v = !1, m = {
      state: d,
      setOptions: function(b) {
        var V = typeof b == "function" ? b(d.options) : b;
        y(), d.options = Object.assign({}, o, d.options, V), d.scrollParents = {
          reference: Ia(i) ? lt(i) : i.contextElement ? lt(i.contextElement) : [],
          popper: lt(s)
        };
        var $ = Ng(Rg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = $.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var T = Lg([].concat($, d.options.modifiers), function(C) {
            var S = C.name;
            return S;
          });
          if (Ag(T), Yn(d.options.placement) === co) {
            var I = d.orderedModifiers.find(function(C) {
              var S = C.name;
              return S === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var P = In(s), N = P.marginTop, w = P.marginRight, B = P.marginBottom, D = P.marginLeft;
          [N, w, B, D].some(function(C) {
            return parseFloat(C);
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
        if (!v) {
          var b = d.elements, V = b.reference, $ = b.popper;
          if (!El(V, $)) {
            process.env.NODE_ENV !== "production" && console.error(Ml);
            return;
          }
          d.rects = {
            reference: Bg(V, Ri($), d.options.strategy === "fixed"),
            popper: Eg($)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var T = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (T += 1, T > 100)) {
              console.error(Ug);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var P = d.orderedModifiers[I], N = P.fn, w = P.options, B = w === void 0 ? {} : w, D = P.name;
            typeof N == "function" && (d = N({
              state: d,
              options: B,
              name: D,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Dg(function() {
        return new Promise(function(h) {
          m.forceUpdate(), h(d);
        });
      }),
      destroy: function() {
        y(), v = !0;
      }
    };
    if (!El(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Ml), m;
    m.setOptions(u).then(function(h) {
      !v && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function p() {
      d.orderedModifiers.forEach(function(h) {
        var b = h.name, V = h.options, $ = V === void 0 ? {} : V, T = h.effect;
        if (typeof T == "function") {
          var I = T({
            state: d,
            name: b,
            instance: m,
            options: $
          }), P = function() {
          };
          f.push(I || P);
        }
      });
    }
    function y() {
      f.forEach(function(h) {
        return h();
      }), f = [];
    }
    return m;
  };
}
var It = {
  passive: !0
};
function Fg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Tn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, It);
  }), i && s.addEventListener("resize", r.update, It), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, It);
    }), i && s.removeEventListener("resize", r.update, It);
  };
}
const Yg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Fg,
  data: {}
};
function jg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = od({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Wg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: jg,
  data: {}
};
var Gg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ka(n * t) / t || 0,
    y: Ka(r * t) / t || 0
  };
}
function Il(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, v = l.x, m = v === void 0 ? 0 : v, p = l.y, y = p === void 0 ? 0 : p, h = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = h.x, y = h.y;
  var b = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), $ = hr, T = Fn, I = window;
  if (u) {
    var P = Ri(r), N = "clientHeight", w = "clientWidth";
    if (P === Tn(r) && (P = Vr(r), In(P).position !== "static" && i === "absolute" && (N = "scrollHeight", w = "scrollWidth")), P = P, t === Fn || (t === hr || t === Ea) && o === mt) {
      T = Tr;
      var B = f && P === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[N]
      );
      y -= B - a.height, y *= s ? 1 : -1;
    }
    if (t === hr || (t === Fn || t === Tr) && o === mt) {
      $ = Ea;
      var D = f && P === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[w]
      );
      m -= D - a.width, m *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: i
  }, u && Gg), S = d === !0 ? qg({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  if (m = S.x, y = S.y, s) {
    var R;
    return Object.assign({}, C, (R = {}, R[T] = V ? "0" : "", R[$] = b ? "0" : "", R.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", R));
  }
  return Object.assign({}, C, (n = {}, n[T] = V ? y + "px" : "", n[$] = b ? m + "px" : "", n.transform = "", n));
}
function Xg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = In(n.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Yn(n.placement),
    variation: pt(n.placement),
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
const Kg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Xg,
  data: {}
};
function Zg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !wn(o) || !Ln(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Jg(e) {
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
      !wn(t) || !Ln(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Qg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Zg,
  effect: Jg,
  requires: ["computeStyles"]
};
var _g = [Yg, Wg, Kg, Qg], xg = /* @__PURE__ */ Hg({
  defaultModifiers: _g
});
function Jt() {
  return Jt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Jt.apply(this, arguments);
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
function ld(e) {
  var n = M(null), r = M(null), a = M({
    width: 0,
    height: 0
  }), t = Ts(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(P, N) {
      N ? ($(), k(e.onOpen)) : k(e.onClose);
    }
  }), {
    zIndex: o
  } = kt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: P,
      height: N
    } = window.getComputedStyle(n.value);
    a.value = {
      width: Le(P),
      height: Le(N)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, T());
  }, f = /* @__PURE__ */ function() {
    var P = Dl(function* () {
      e.trigger === "hover" && (s = !1, yield Dn(), !i && I());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), v = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var P = Dl(function* () {
      e.trigger === "hover" && (i = !1, yield Dn(), !s && I());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), p = () => {
    T();
  }, y = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  }, h = () => {
    e.trigger === "click" && y();
  }, b = () => {
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
  }, V = () => {
    var {
      placement: P,
      skidding: N,
      distance: w
    } = b(), B = [Jt({}, kg, {
      enabled: t.value
    }), Jt({}, Pg, {
      options: {
        offset: [N, w]
      }
    })];
    return {
      placement: P,
      modifiers: B
    };
  }, $ = () => {
    l.setOptions(V());
  }, T = () => {
    var {
      disabled: P
    } = e;
    P || (t.value = !0, k(e["onUpdate:show"], !0));
  }, I = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  };
  return ks(n, "click", h), ie(() => e.offsetX, $), ie(() => e.offsetY, $), ie(() => e.placement, $), ie(() => e.disabled, I), Qt(() => {
    var P, N = e.reference ? (P = n.value) == null ? void 0 : P.querySelector(e.reference) : n.value;
    l = xg(N ?? n.value, r.value, V());
  }), _a(() => {
    l.destroy();
  }), {
    show: t,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: a,
    handleHostClick: p,
    handleHostMouseenter: d,
    handleHostMouseleave: f,
    handlePopoverClose: y,
    handlePopoverMouseenter: v,
    handlePopoverMouseleave: m,
    resize: $,
    open: T,
    close: I
  };
}
function ey(e) {
  return ["click", "hover"].includes(e);
}
function ny(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function ry(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var ay = {
  type: {
    type: String,
    default: "default",
    validator: ry
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
    validator: ey
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: ny
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
  onOpen: H(),
  onOpened: H(),
  onClose: H(),
  onClosed: H(),
  "onUpdate:show": H()
}, {
  n: ty,
  classes: oy
} = x("tooltip");
function iy(e, n) {
  return g(), O(
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
    [F(e.$slots, "default"), (g(), ye(
      Da,
      {
        to: e.teleport
      },
      [J(
        ze,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: de(() => [Ce(z(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: G({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = pn(() => {
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
              [F(e.$slots, "content", {}, () => [we(
                ae(e.content),
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
var sd = _({
  name: "VarTooltip",
  props: ay,
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
      handlePopoverClose: f,
      // expose
      open: v,
      // expose
      close: m,
      // expose
      resize: p
    } = ld(e);
    return {
      toSizeUnit: ge,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: ty,
      classes: oy,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: p,
      open: v,
      close: m
    };
  }
});
sd.render = iy;
const gr = sd;
gr.install = function(e) {
  e.component(gr.name, gr);
};
var qS = gr;
function ly(e) {
  return ["click"].includes(e);
}
var sy = {
  expandTrigger: {
    type: String,
    validator: ly
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
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
var {
  n: uy,
  classes: dy
} = x("ellipsis"), vy = {
  key: 0
};
function fy(e, n) {
  var r = te("var-tooltip");
  return g(), ye(
    r,
    bt(eo(e.tooltip)),
    {
      content: de(() => [F(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (g(), O(
          "span",
          vy,
          ae(e.tooltip.content),
          1
          /* TEXT */
        )) : F(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: de(() => [z(
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
var ud = _({
  name: "VarEllipsis",
  components: {
    VarTooltip: gr
  },
  props: sy,
  setup(e) {
    var n = M(!1), r = U(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = U(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : si({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: uy,
      classes: dy,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
ud.render = fy;
const Jr = ud;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var XS = Jr;
function cy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function my(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function py(e) {
  return ["click", "hover"].includes(e);
}
var hy = {
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
    validator: cy
  },
  direction: {
    type: String,
    default: "top",
    validator: my
  },
  trigger: {
    type: String,
    default: "click",
    validator: py
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
  onClick: H(),
  onOpen: H(),
  onOpened: H(),
  onClose: H(),
  onClosed: H(),
  "onUpdate:active": H()
};
function zl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  classes: Al,
  n: rn
} = x("fab");
const Qr = _({
  name: "VarFab",
  inheritAttrs: !1,
  props: hy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = Ts(e, "active"), o = M(null), {
      disabled: l
    } = ao(), i = (v, m, p) => {
      if (v.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (p === 0) {
          k(e.onClick, t.value, v);
          return;
        }
        t.value = m, k(e.onClick, t.value, v), k(t.value ? e.onOpen : e.onClose);
      }
    }, s = (v, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = v, k(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, k(e.onClose));
    }, d = () => r.trigger ? e.show ? r.trigger({
      active: t.value
    }) : null : Ce(J(Je, {
      "var-fab-cover": !0,
      class: rn("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [J(Pe, {
        "var-fab-cover": !0,
        class: Al([t.value, rn("trigger-active-icon"), rn("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: rn("--trigger-icon-animation")
      }, null)]
    }), [[Cr, e.show]]), f = () => {
      var v, m, p = $s((m = r.default == null ? void 0 : r.default()) != null ? m : []);
      return J("div", Ee({
        class: Al(rn(), rn("--position-" + e.position), rn("--direction-" + e.direction), [e.fixed, rn("--fixed"), rn("--absolute")], [e.safeArea, rn("--safe-area")]),
        style: {
          zIndex: L(e.zIndex),
          top: ge(e.top),
          bottom: ge(e.bottom),
          left: ge(e.left),
          right: ge(e.right)
        },
        ref: o,
        onClick: (y) => i(y, !t.value, p.length),
        onMouseleave: () => s(!1, p.length),
        onMouseenter: () => s(!0, p.length)
      }, a), [J(ze, {
        name: rn("--active-transition")
      }, zl(v = d()) ? v : {
        default: () => [v]
      }), J(ze, {
        name: rn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ce(J("div", {
          class: rn("actions"),
          onClick: (y) => y.stopPropagation()
        }, [p.map((y) => J("div", {
          class: rn("action")
        }, [y]))]), [[Cr, e.show && t.value && p.length]])]
      })]);
    };
    return ie(() => e.trigger, () => {
      t.value = !1;
    }), ie(() => e.disabled, () => {
      t.value = !1;
    }), ks(o, "click", u), () => {
      var {
        teleport: v
      } = e;
      if (v) {
        var m;
        return J(Da, {
          to: v,
          disabled: l.value
        }, zl(m = f()) ? m : {
          default: () => [m]
        });
      }
      return f();
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var KS = Qr;
function gy(e) {
  return ["start", "end"].includes(e);
}
var yy = {
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
    validator: gy
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
function by(e) {
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
  n: wy
} = x("form");
function Cy(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var dd = _({
  name: "VarForm",
  props: yy,
  setup(e) {
    var n = U(() => e.disabled), r = U(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Mm(), o = (d) => {
      setTimeout(() => {
        var f = Sr(d), v = f === window ? 0 : el(f), m = el(d) - v - Le(e.scrollToErrorOffsetY);
        vt(f, {
          top: m,
          animation: Vo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = by(function* () {
        var f = yield Promise.all(a.map((h) => {
          var {
            validate: b
          } = h;
          return b();
        }));
        if (e.scrollToError) {
          var [, v] = Fv(f, (h) => h === !1, e.scrollToError), m = v > -1;
          if (m) {
            var p, y = (p = a[v].instance.proxy) == null ? void 0 : p.$el;
            o(y);
          }
          return !m;
        }
        return f.every((h) => h === !0);
      });
      return function() {
        return d.apply(this, arguments);
      };
    }(), i = () => a.forEach((d) => {
      var {
        reset: f
      } = d;
      return f();
    }), s = () => a.forEach((d) => {
      var {
        resetValidation: f
      } = d;
      return f();
    }), u = {
      disabled: n,
      readonly: r
    };
    return t(u), {
      n: wy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
dd.render = Cy;
const jn = dd;
jn.install = function(e) {
  e.component(jn.name, jn);
};
jn.useValidation = kn;
jn.useForm = $n;
var ZS = jn;
function Sy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ky = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Sy,
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
  onClick: H(),
  onLoad: H(),
  onError: H()
}, {
  n: $y,
  classes: Ty
} = x("image"), Py = ["alt", "title", "lazy-error", "lazy-loading"], Oy = ["alt", "title", "src"];
function Vy(e, n) {
  var r = Ie("lazy"), a = Ie("ripple");
  return Ce((g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? Ce((g(), O(
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
      Py
    )), [[r, e.src]]) : (g(), O(
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
var vd = _({
  name: "VarImage",
  directives: {
    Lazy: ft,
    Ripple: Ue
  },
  props: ky,
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
      n: $y,
      classes: Ty,
      toSizeUnit: ge,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
vd.render = Vy;
const _r = vd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var JS = _r, fd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function My() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn(fd);
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
  onChange: H()
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
function By(e) {
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
var Ey = 250, Iy = 20, {
  n: Ny,
  classes: Dy
} = x("swipe"), zy = ["onClick"];
function Ay(e, n) {
  return g(), O(
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
      [F(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), F(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (g(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(g(!0), O(
        Oe,
        null,
        Ae(e.length, (r, a) => (g(), O(
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
          zy
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
var md = _({
  name: "VarSwipe",
  props: cd,
  setup(e) {
    var n = M(null), r = M(0), a = U(() => e.vertical), t = M(0), o = M(0), l = M(!1), i = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = My(), f = !1, v = -1, m, p, y, h, b, V = (E) => s.find((A) => {
      var {
        index: K
      } = A;
      return K.value === E;
    }), $ = () => {
      e.loop && (o.value >= 0 && V(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && V(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (V(d.value - 1).setTranslate(0), V(0).setTranslate(0)));
    }, T = (E) => {
      var A = nn(E) ? E : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: K
      } = e;
      return A <= -1 ? K ? -1 : 0 : A >= d.value ? K ? d.value : d.value - 1 : A;
    }, I = (E) => {
      var {
        loop: A
      } = e;
      return E === -1 ? A ? d.value - 1 : 0 : E === d.value ? A ? 0 : d.value - 1 : E;
    }, P = (E) => {
      var {
        loop: A
      } = e;
      return E < 0 ? A ? d.value - 1 : 0 : E > d.value - 1 ? A ? 0 : d.value - 1 : E;
    }, N = (E) => {
      var A = o.value >= r.value, K = o.value <= -t.value, ne = 0, ve = -(t.value - r.value);
      l.value = !0, (A || K) && (l.value = !0, o.value = K ? ne : ve, V(0).setTranslate(0), V(d.value - 1).setTranslate(0)), ro(() => {
        l.value = !1, k(E);
      });
    }, w = () => {
      i.value = P(L(e.initialIndex));
    }, B = () => {
      var {
        autoplay: E
      } = e;
      !E || d.value <= 1 || (D(), v = window.setTimeout(() => {
        Y(), B();
      }, L(E)));
    }, D = () => {
      v && clearTimeout(v);
    }, C = (E, A) => {
      if (E > A && E > 10)
        return "horizontal";
      if (A > E && A > 10)
        return "vertical";
    }, S = (E) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: A,
          clientY: K
        } = E.touches[0];
        m = A, p = K, y = performance.now(), f = !0, D(), N(() => {
          l.value = !0;
        });
      }
    }, R = (E) => {
      var {
        touchable: A,
        vertical: K
      } = e;
      if (!(!f || !A)) {
        var {
          clientX: ne,
          clientY: ve
        } = E.touches[0], ue = Math.abs(ne - m), X = Math.abs(ve - p), re = C(ue, X), fe = K ? "vertical" : "horizontal";
        if (re === fe) {
          E.preventDefault();
          var Se = h !== void 0 ? ne - h : 0, We = b !== void 0 ? ve - b : 0;
          h = ne, b = ve, o.value += K ? We : Se, $();
        }
      }
    }, Z = () => {
      if (f) {
        var {
          vertical: E,
          onChange: A
        } = e, K = E ? b < p : h < m, ne = Math.abs(E ? p - b : m - h), ve = performance.now() - y <= Ey && ne >= Iy, ue = ve ? T(K ? i.value + 1 : i.value - 1) : T();
        f = !1, l.value = !1, h = void 0, b = void 0, o.value = ue * -r.value;
        var X = i.value;
        i.value = I(ue), B(), X !== i.value && k(A, i.value);
      }
    }, Q = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((E) => {
        E.setTranslate(0);
      }), B(), setTimeout(() => {
        l.value = !1;
      }));
    }, Y = (E) => {
      if (!(d.value <= 1)) {
        var {
          loop: A,
          onChange: K
        } = e, ne = i.value;
        i.value = P(ne + 1), (E == null ? void 0 : E.event) !== !1 && k(K, i.value), N(() => {
          if (ne === d.value - 1 && A) {
            V(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          ne !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, j = (E) => {
      if (!(d.value <= 1)) {
        var {
          loop: A,
          onChange: K
        } = e, ne = i.value;
        i.value = P(ne - 1), (E == null ? void 0 : E.event) !== !1 && k(K, i.value), N(() => {
          if (ne === 0 && A) {
            V(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          ne !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, se = (E, A) => {
      if (!(d.value <= 1 || E === i.value)) {
        E = E < 0 ? 0 : E, E = E >= d.value ? d.value : E;
        var K = E > i.value ? Y : j, ne = Math.abs(E - i.value);
        Array.from({
          length: ne
        }).forEach((ve, ue) => {
          K({
            event: ue === ne - 1 ? A == null ? void 0 : A.event : !1
          });
        });
      }
    }, W = {
      size: r,
      vertical: a
    };
    return u(W), ie(() => d.value, /* @__PURE__ */ By(function* () {
      yield Dn(), w(), Q();
    })), Pr(Q), _n(D), _a(D), Kn(() => window, "resize", Q), {
      n: Ny,
      classes: Dy,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: S,
      handleTouchmove: R,
      handleTouchend: Z,
      next: Y,
      prev: j,
      to: se,
      resize: Q,
      toNumber: L
    };
  }
});
md.render = Ay;
const Wn = md;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var QS = Wn;
function Ly() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = un(fd);
  return e || Sn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: Ry
} = x("swipe-item");
function Uy(e, n) {
  return g(), O(
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
var pd = _({
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Ly(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Ry,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
pd.render = Uy;
const Gn = pd;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var _S = Gn;
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
var Hy = ui({
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
  "onUpdate:show": H()
}, qe(cd, ["loop", "indicator", "onChange"]), qe(St, [
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
  classes: Fy
} = x("image-preview"), Hl = 12, Fl = 200, Yy = 350, Yl = 200, jy = ["src", "alt"];
function Wy(e, n) {
  var r = te("var-swipe-item"), a = te("var-swipe"), t = te("var-icon"), o = te("var-popup");
  return g(), ye(
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
      default: de(() => [J(
        a,
        Ee({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: de(() => [(g(!0), O(
            Oe,
            null,
            Ae(e.images, (l) => (g(), ye(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: de(() => [z(
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
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    jy
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
          indicator: de((l) => {
            var {
              index: i,
              length: s
            } = l;
            return [F(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (g(), O(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ae(i + 1) + " / " + ae(s),
              3
              /* TEXT, CLASS */
            )) : ee("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), F(e.$slots, "close-icon", {}, () => [e.closeable ? (g(), ye(
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
var hd = _({
  name: "VarImagePreview",
  components: {
    VarSwipe: Wn,
    VarSwipeItem: Gn,
    VarPopup: bn,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Hy,
  setup(e) {
    var n = M(!1), r = U(() => {
      var {
        images: D,
        current: C
      } = e, S = D.findIndex((R) => R === C);
      return S >= 0 ? S : 0;
    }), a = M(1), t = M(0), o = M(0), l = M(void 0), i = M(void 0), s = M(!0), u = null, d = null, f = null, v = (D, C) => {
      var {
        clientX: S,
        clientY: R
      } = D, {
        clientX: Z,
        clientY: Q
      } = C;
      return Math.abs(Math.sqrt(Math.pow(Z - S, 2) + Math.pow(Q - R, 2)));
    }, m = (D, C) => ({
      clientX: D.clientX,
      clientY: D.clientY,
      timestamp: Date.now(),
      target: C
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Yl);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, h = (D) => d ? v(d, D) <= Hl && D.timestamp - d.timestamp <= Fl && d.target === D.target : !1, b = (D) => !D || !u || !d ? !1 : v(u, d) <= Hl && Date.now() - d.timestamp < Yy && (D === u.target || D.parentNode === u.target), V = (D) => {
      f = window.setTimeout(() => {
        b(D.target) && B(), u = null;
      }, Fl);
    }, $ = (D) => {
      f && window.clearTimeout(f);
      var {
        touches: C
      } = D, S = m(C[0], D.currentTarget);
      if (u = S, h(S)) {
        a.value > 1 ? y() : p();
        return;
      }
      d = S;
    }, T = (D) => {
      var {
        offsetWidth: C,
        offsetHeight: S
      } = D, {
        naturalWidth: R,
        naturalHeight: Z
      } = D.querySelector("." + Ul("image"));
      return {
        width: C,
        height: S,
        imageRadio: Z / R,
        rootRadio: S / C,
        zoom: L(e.zoom)
      };
    }, I = (D) => {
      var {
        zoom: C,
        imageRadio: S,
        rootRadio: R,
        width: Z,
        height: Q
      } = T(D);
      if (!S)
        return 0;
      var Y = S > R ? Q / S : Z;
      return Math.max(0, (C * Y - Z) / 2) / C;
    }, P = (D) => {
      var {
        zoom: C,
        imageRadio: S,
        rootRadio: R,
        width: Z,
        height: Q
      } = T(D);
      if (!S)
        return 0;
      var Y = S > R ? Q : Z * S;
      return Math.max(0, (C * Y - Q) / 2) / C;
    }, N = (D, C, S) => D + C >= S ? S : D + C <= -S ? -S : D + C, w = (D) => {
      if (d) {
        var C = D.currentTarget, {
          touches: S
        } = D, R = m(S[0], C);
        if (a.value > 1) {
          var Z = R.clientX - d.clientX, Q = R.clientY - d.clientY, Y = I(C), j = P(C);
          t.value = N(t.value, Z, Y), o.value = N(o.value, Q, j);
        }
        d = R;
      }
    }, B = () => {
      if (a.value > 1) {
        y(), setTimeout(() => k(e["onUpdate:show"], !1), Yl);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (D) => {
      n.value = D;
    }, {
      immediate: !0
    }), {
      n: Ul,
      classes: Fy,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: $,
      handleTouchmove: w,
      handleTouchend: V,
      close: B
    };
  }
});
hd.render = Wy;
const yr = hd;
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
var ir, ut = {};
function Gy(e) {
  return e === void 0 && (e = {}), Re(e) ? st({}, ut, {
    images: [e]
  }) : $e(e) ? st({}, ut, {
    images: e
  }) : st({}, ut, e);
}
function Nn(e) {
  if (Ct()) {
    Nn.close();
    var n = Gy(e), r = Ne(n);
    r.teleport = "body", ir = r;
    var {
      unmountInstance: a
    } = et(yr, r, {
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
Nn.close = () => {
  if (ir != null) {
    var e = ir;
    ir = null, Be().then(() => {
      e.show = !1;
    });
  }
};
Nn.setDefaultOptions = (e) => {
  ut = e;
};
Nn.resetDefaultOptions = () => {
  ut = {};
};
yr.install = function(e) {
  e.component(yr.name, yr);
};
Nn.install = function(e) {
  e.component(yr.name, yr);
};
Nn.Component = yr;
var xS = yr, Ut = {
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
  onScroll: H()
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
  n: qy,
  classes: Xy
} = x("sticky");
function Ky(e, n) {
  return g(), O(
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
      [F(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var gd = _({
  name: "VarSticky",
  props: Ut,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), o = M("0px"), l = M("auto"), i = M("auto"), s = M("auto"), u = M("auto"), d = U(() => !e.disabled && e.cssMode), f = U(() => !e.disabled && !e.cssMode && a.value), v = U(() => Le(e.offsetTop)), m, p = () => {
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
        var N = r.value, w = n.value, {
          top: B,
          left: D
        } = w.getBoundingClientRect(), C = B - I;
        return C <= v.value ? ($ || (l.value = w.offsetWidth + "px", i.value = w.offsetHeight + "px", t.value = I + v.value + "px", o.value = D + "px", s.value = N.offsetWidth + "px", u.value = N.offsetHeight + "px", a.value = !0), {
          offsetTop: v.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: C,
          isFixed: !1
        });
      }
    }, y = () => {
      if (m) {
        var $ = p();
        $ && k(e.onScroll, $.offsetTop, $.isFixed);
      }
    }, h = /* @__PURE__ */ function() {
      var $ = Wl(function* () {
        a.value = !1, yield _v(), p();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), b = /* @__PURE__ */ function() {
      var $ = Wl(function* () {
        yield Dn(), m = Sr(n.value), m !== window && m.addEventListener("scroll", y), y();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", y);
    };
    return ie(() => e.disabled, h), sn(b), _a(V), _n(V), Kn(() => window, "scroll", y), Kn(() => window, "resize", h), {
      n: qy,
      classes: Xy,
      resize: h,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: v,
      fixedTop: t,
      fixedLeft: o,
      fixedWidth: l,
      fixedHeight: i,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: f,
      toNumber: L
    };
  }
});
gd.render = Ky;
const qn = gd;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var ek = qn, yd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Zy() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = dn(yd);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function Jy() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(yd);
  return r || Sn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var Qy = {
  index: {
    type: [Number, String]
  }
}, {
  n: _y,
  classes: xy
} = x("index-anchor");
function eb(e, n) {
  return g(), ye(
    xa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: de(() => [z(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [F(e.$slots, "default", {}, () => [we(
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
var bd = _({
  name: "VarIndexAnchor",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Qy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Jy(), t = M(0), o = M(!1), l = U(() => e.index), i = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: f,
      zIndex: v
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, p = (h) => {
      o.value = h;
    }, y = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: p
    };
    return a(y), {
      n: _y,
      classes: xy,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: v,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: f,
      Transition: ze
    };
  }
});
bd.render = eb;
const xr = bd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var nk = xr, nb = {
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
  onClick: H(),
  onChange: H()
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
function Nt(e) {
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
  n: rb,
  classes: ab
} = x("index-bar"), tb = ["onClick"];
function ob(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [F(e.$slots, "default"), z(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: G({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(g(!0), O(
        Oe,
        null,
        Ae(e.anchorNameList, (r) => (g(), O(
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
          tb
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
var wd = _({
  name: "VarIndexBar",
  props: nb,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Zy(), t = M(""), o = M(null), l = M([]), i = M(), s = U(() => e.sticky), u = U(() => e.stickyCssMode || e.cssMode), d = U(() => Le(e.stickyOffsetTop)), f = U(() => e.zIndex), v = null, m = !1, p = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: f
    };
    a(p);
    var y = (N, w) => {
      var B = bi(N) ? N.name.value : N;
      B === i.value || B === void 0 || (i.value = B, (w == null ? void 0 : w.event) !== !1 && k(e.onChange, B));
    }, h = () => {
      if (!("getBoundingClientRect" in v))
        return 0;
      var {
        top: N
      } = v.getBoundingClientRect(), {
        scrollTop: w
      } = v, {
        top: B
      } = o.value.getBoundingClientRect();
      return w - N + B;
    }, b = () => {
      var N = dt(v), w = v === window ? document.body.scrollHeight : v.scrollHeight, B = h();
      r.forEach((D, C) => {
        var S = D.ownTop.value, R = N - S + d.value - B, Z = C === r.length - 1 ? w : r[C + 1].ownTop.value - D.ownTop.value;
        D.setDisabled(!0), R >= 0 && R < Z && t.value === "" && (D.setDisabled(!1), y(D));
      });
    }, V = /* @__PURE__ */ function() {
      var N = Nt(function* (w) {
        var {
          anchorName: B,
          manualCall: D = !1,
          options: C
        } = w;
        if (D && k(e.onClick, B), !(B === i.value && !m)) {
          var S = r.find((Y) => {
            var {
              name: j
            } = Y;
            return B === j.value;
          });
          if (S) {
            var R = h(), Z = S.ownTop.value - d.value + R, Q = Ci(v);
            t.value = B, y(B, C), yield vt(v, {
              left: Q,
              top: Z,
              animation: ms,
              duration: L(e.duration)
            }), ro(() => {
              t.value = "";
            });
          }
        }
      });
      return function(B) {
        return N.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var N = Nt(function* () {
        yield Dn(), v = Sr(o.value);
      });
      return function() {
        return N.apply(this, arguments);
      };
    }(), T = () => {
      v.addEventListener("scroll", b);
    }, I = () => {
      v.removeEventListener("scroll", b);
    }, P = (N, w) => {
      yn(() => V({
        anchorName: N,
        options: w
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ Nt(function* () {
      yield Dn(), r.forEach((N) => {
        var {
          name: w,
          setOwnTop: B
        } = N;
        w.value && l.value.push(w.value), B();
      });
    })), sn(/* @__PURE__ */ Nt(function* () {
      yield $(), T();
    })), _t(I), _n(() => {
      m = !0, I();
    }), Pr(() => {
      !m || i.value === void 0 || (V({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: rb,
      classes: ab,
      barEl: o,
      active: i,
      zIndex: f,
      anchorNameList: l,
      toNumber: L,
      scrollTo: P,
      anchorClick: V
    };
  }
});
wd.render = ob;
const ea = wd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var rk = ea;
function ib(e) {
  return ["small", "normal"].includes(e);
}
function lb(e) {
  return ["outlined", "standard"].includes(e);
}
var Ui = {
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
    validator: ib
  },
  variant: {
    type: String,
    default: "standard",
    validator: lb
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
  onClick: H(),
  onClear: H()
}, {
  n: So,
  classes: sb
} = x("field-decorator"), ub = ["for"];
function db(e, n) {
  var r = te("var-icon");
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: G({
          color: e.color,
          cursor: e.cursor
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")])),
          ref: "prependIconEl"
        },
        [F(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [F(e.$slots, "default"), e.hint || e.alwaysCustomPlaceholder ? (g(), O(
          "label",
          {
            key: 0,
            class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [!e.hint, e.n("--placeholder-non-hint")], e.computePlaceholderState())),
            style: G({
              transform: e.placeholderTransform,
              color: e.color
            }),
            for: e.id
          },
          [z(
            "span",
            {
              class: c(e.n("placeholder-text")),
              ref: "placeholderTextEl"
            },
            ae(e.placeholder),
            3
            /* TEXT, CLASS */
          )],
          14,
          ub
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (g(), ye(
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
        )) : ee("v-if", !0), F(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (g(), O(
      Oe,
      {
        key: 0
      },
      [e.variant === "outlined" ? (g(), O(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")]))
        },
        [z(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.hint && (!e.isEmpty(e.value) || e.isFocus), e.n("line-legend--hint")])),
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
      )) : (g(), O(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: G({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [z(
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
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Cd = _({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Pe
  },
  props: Ui,
  setup(e) {
    var n = M(null), r = M(null), a = M(""), t = M(""), o = U(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = () => {
      var {
        hint: v,
        value: m,
        isFocus: p,
        composing: y
      } = e;
      if (!v && (!Un(m) || y))
        return So("--placeholder-hidden");
      if (v && (!Un(m) || p))
        return So("--placeholder-hint");
    }, i = () => {
      var {
        size: v,
        placeholder: m
      } = e;
      Be().then(() => {
        var p;
        if (!r.value || !m) {
          a.value = "0";
          return;
        }
        var y = (p = window.getComputedStyle(r.value)) == null ? void 0 : p.width, h = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
        a.value = "calc(" + y + " * 0.75 + 2 * " + h + ")";
      });
    }, s = () => {
      var {
        hint: v,
        value: m,
        isFocus: p,
        variant: y
      } = e;
      Be().then(() => {
        if (n.value)
          if (v && (!Un(m) || p)) {
            var h, b = ((h = window.getComputedStyle(n.value)) == null ? void 0 : h.width) || "0", V = y === "outlined" ? "-50%" : "0";
            t.value = "translate(-" + b + ", " + V + ") scale(0.75)";
          } else
            t.value = "";
      });
    }, u = () => {
      i(), s();
    }, d = (v) => {
      k(e.onClear, v);
    }, f = (v) => {
      k(e.onClick, v);
    };
    return Av(u), Kn(() => window, "resize", u), {
      prependIconEl: n,
      placeholderTextEl: r,
      placeholderTransform: t,
      color: o,
      legendWidth: a,
      computePlaceholderState: l,
      n: So,
      classes: sb,
      isEmpty: Un,
      handleClear: d,
      handleClick: f
    };
  }
});
Cd.render = db;
const Sd = Cd;
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
function vb(e) {
  return ["text", "password", "number"].includes(e);
}
var fb = di({
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
    validator: vb
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
  onFocus: H(),
  onBlur: H(),
  onInput: H(),
  onChange: H(),
  onClear: H(),
  "onUpdate:modelValue": H()
}, qe(Ui, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: cb,
  classes: mb
} = x("input"), pb = ["placeholder"], hb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows"], gb = ["id", "disabled", "type", "value", "placeholder", "maxlength"];
function yb(e, n) {
  var r = te("var-field-decorator"), a = te("var-form-details");
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[15] || (n[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [J(
      r,
      bt(eo({
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
        "prepend-icon": de(() => [F(e.$slots, "prepend-icon")]),
        "append-icon": de(() => [F(e.$slots, "append-icon")]),
        default: de(() => [e.type === "password" ? (g(), O(
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
          pb
        )) : ee("v-if", !0), e.textarea ? (g(), O(
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
          hb
        )) : (g(), O(
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
          gb
        ))]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ), J(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[14] || (n[14] = pn(() => {
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
var kd = _({
  name: "VarInput",
  components: {
    VarFormDetails: Ke,
    VarFieldDecorator: Sd
  },
  props: fb,
  setup(e) {
    var n = M("var-input-" + Qa().uid), r = M(null), a = M(!1), t = M(!1), o = U(() => e.type === "number" ? "text" : e.type), l = U(() => {
      var {
        maxlength: W,
        modelValue: E
      } = e;
      return W ? Un(E) ? "0 / " + W : String(E).length + "/" + W : "";
    }), i = U(() => e.disabled || e.readonly ? "" : "text"), s = U(() => {
      var {
        hint: W,
        blurColor: E,
        focusColor: A
      } = e;
      if (!W)
        return f.value ? "var(--field-decorator-error-color)" : a.value ? A || "var(--field-decorator-focus-color)" : E || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = $n(), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: m,
      // expose
      resetValidation: p
    } = kn(), y = (W) => {
      Be(() => {
        var {
          validateTrigger: E,
          rules: A,
          modelValue: K
        } = e;
        v(E, W, A, K);
      });
    }, h = (W) => {
      a.value = !0, k(e.onFocus, W), y("onFocus");
    }, b = (W) => {
      a.value = !1, k(e.onBlur, W), y("onBlur");
    }, V = (W) => {
      var E = W.target, {
        value: A
      } = E;
      return e.type === "number" && (A = B(A)), C(D(A));
    }, $ = () => {
      t.value = !0;
    }, T = (W) => {
      t.value && (t.value = !1, W.target.dispatchEvent(new Event("input")));
    }, I = (W) => {
      if (!t.value) {
        var E = V(W);
        k(e["onUpdate:modelValue"], E), k(e.onInput, E, W), y("onInput");
      }
    }, P = (W) => {
      var E = V(W);
      k(e.onChange, E, W), y("onChange");
    }, N = () => {
      var {
        disabled: W,
        readonly: E,
        clearable: A,
        onClear: K
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || W || E || !A || (k(e["onUpdate:modelValue"], ""), k(K, ""), y("onClear"));
    }, w = (W) => {
      var {
        disabled: E,
        onClick: A
      } = e;
      d != null && d.disabled.value || E || (k(A, W), y("onClick"));
    }, B = (W) => {
      var E = W.indexOf("-"), A = W.indexOf(".");
      return E > -1 && (W = E === 0 ? "-" + W.replace(/-/g, "") : W.replace(/-/g, "")), A > -1 && (W = W.slice(0, A + 1) + W.slice(A).replace(/\./g, "")), W.replace(/[^-0-9.]/g, "");
    }, D = (W) => e.modelModifiers.trim ? W.trim() : W, C = (W) => e.maxlength ? W.slice(0, L(e.maxlength)) : W, S = (W) => {
      var {
        disabled: E,
        readonly: A
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || E || A || W.stopPropagation();
    };
    function R(W) {
      var {
        disabled: E
      } = e;
      d != null && d.disabled.value || E || W.target === r.value || (Y(), W.preventDefault());
    }
    var Z = () => {
      k(e["onUpdate:modelValue"], ""), p();
    }, Q = () => m(e.rules, e.modelValue), Y = () => {
      var W;
      (W = r.value) == null || W.focus();
    }, j = () => {
      r.value.blur();
    }, se = {
      reset: Z,
      validate: Q,
      resetValidation: p
    };
    return k(u, se), sn(() => {
      e.autofocus && Y();
    }), {
      el: r,
      id: n,
      isFocus: a,
      isComposing: t,
      errorMessage: f,
      placeholderColor: s,
      type: o,
      cursor: i,
      maxlengthText: l,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      n: cb,
      classes: mb,
      isEmpty: Un,
      handleFocus: h,
      handleBlur: b,
      handleInput: I,
      handleChange: P,
      handleClear: N,
      handleClick: w,
      handleTouchstart: S,
      handleCompositionStart: $,
      handleCompositionEnd: T,
      handleMousedown: R,
      validate: Q,
      resetValidation: p,
      reset: Z,
      focus: Y,
      blur: j
    };
  }
});
kd.render = yb;
const br = kd;
br.install = function(e) {
  e.component(br.name, br);
};
var ak = br;
function bb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function wb(e) {
  return ["always", "hover", "none"].includes(e);
}
var Cb = {
  type: {
    type: String,
    default: "default",
    validator: bb
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
    validator: wb
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
  onClick: H()
}, {
  n: Sb,
  classes: kb
} = x("link");
function $b(e, n) {
  return g(), ye(
    xa(e.tag),
    Ee(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: de(() => [F(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var $d = _({
  name: "VarLink",
  props: Cb,
  setup(e) {
    var n = U(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = U(() => {
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
      n: Sb,
      classes: kb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: ge
    };
  }
});
$d.render = $b;
const na = $d;
na.install = function(e) {
  e.component(na.name, na);
};
var tk = na, Tb = {
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
  onLoad: H(),
  "onUpdate:loading": H(),
  "onUpdate:error": H()
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
function Pb(e) {
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
  n: Ob,
  classes: Vb
} = x("list");
function Mb(e, n) {
  var r = te("var-loading"), a = Ie("ripple");
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [F(e.$slots, "default"), e.loading ? F(e.$slots, "loading", {
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
    )]) : ee("v-if", !0), e.finished ? F(e.$slots, "finished", {
      key: 1
    }, () => [z(
      "div",
      {
        class: c(e.n("finished"))
      },
      ae(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : ee("v-if", !0), e.error ? F(e.$slots, "error", {
      key: 2
    }, () => [Ce((g(), O(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [we(
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
var Td = _({
  name: "VarList",
  directives: {
    Ripple: Ue
  },
  components: {
    VarLoading: Bn
  },
  props: Tb,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }, o = () => {
      var s = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: u
      } = r.value.getBoundingClientRect();
      return Math.floor(u) - Le(e.offset) <= s;
    }, l = () => {
      a.removeEventListener("scroll", i);
    }, i = /* @__PURE__ */ function() {
      var s = Pb(function* () {
        yield Be();
        var {
          loading: u,
          finished: d,
          error: f
        } = e;
        !u && !d && !f && o() && t();
      });
      return function() {
        return s.apply(this, arguments);
      };
    }();
    return sn(() => {
      a = Sr(n.value), a.addEventListener("scroll", i), e.immediateCheck && i();
    }), _n(l), _a(l), {
      pack: Ge,
      listEl: n,
      detectorEl: r,
      dt: no,
      isNumber: nn,
      load: t,
      check: i,
      n: Ob,
      classes: Vb
    };
  }
});
Td.render = Mb;
const ra = Td;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var ok = ra, Bb = {
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
  classes: Eb,
  n: Xl
} = x("loading-bar");
const Ib = _({
  name: "VarLoadingBar",
  props: Bb,
  setup(e) {
    return () => J("div", {
      class: Eb(Xl(), [e.error, Xl("--error")]),
      style: {
        zIndex: mn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: ge(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ge(e.top)
      }
    }, null);
  }
});
var Pd, Od, go, Vd, Kl, Md = {}, Nb = {
  value: 0,
  opacity: 0,
  error: !1
}, Xe = Ne(Nb), Db = (e) => {
  Object.assign(Xe, e);
}, zb = (e) => {
  Object.assign(Xe, e), Md = e;
}, Ab = () => {
  Object.keys(Md).forEach((e) => {
    Xe[e] !== void 0 && (Xe[e] = void 0);
  });
}, Bd = () => {
  Kl || (Kl = !0, et(Ib, Xe));
}, Hi = () => {
  Pd = window.setTimeout(() => {
    if (!(Xe.value >= 95)) {
      var e = Math.random();
      Xe.value < 70 && (e = Math.round(5 * Math.random())), Xe.value += e, Hi();
    }
  }, 200);
}, Fi = () => {
  window.clearTimeout(Od), window.clearTimeout(Pd), window.clearTimeout(go), window.clearTimeout(Vd);
}, Lb = () => {
  Fi(), Xe.error = !1, Xe.value = 0, Bd(), go = window.setTimeout(() => {
    Xe.opacity = 1;
  }, 200), Hi();
}, Ed = () => {
  Fi(), Xe.value = 100, go = window.setTimeout(() => {
    Xe.opacity = 0, Od = window.setTimeout(() => {
      Xe.error = !1;
    }, 250);
  }, 300);
}, Rb = () => {
  Fi(), Xe.error = !0, Xe.value === 100 && (Xe.value = 0), Bd(), go = window.setTimeout(() => {
    Xe.opacity = 1;
  }, 200), Hi(), Vd = window.setTimeout(Ed, 300);
}, Id = {
  start: Lb,
  finish: Ed,
  error: Rb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Db,
  setDefaultOptions: zb,
  resetDefaultOptions: Ab
}, ik = Id;
const vi = Id;
function Ub(e) {
  return ["click", "hover"].includes(e);
}
function Hb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Fb = {
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
    validator: Ub
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Hb
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
  onOpen: H(),
  onOpened: H(),
  onClose: H(),
  onClosed: H(),
  "onUpdate:show": H()
}, {
  n: Yb,
  classes: jb
} = x("menu");
function Wb(e, n) {
  return g(), O(
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
    [F(e.$slots, "default"), (g(), ye(
      Da,
      {
        to: e.teleport
      },
      [J(
        ze,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: de(() => [Ce(z(
            "div",
            {
              ref: "popover",
              style: G({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
              onClick: n[0] || (n[0] = pn(() => {
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
var Nd = _({
  name: "VarMenu",
  props: Fb,
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
      handlePopoverClose: f,
      // expose
      open: v,
      // expose
      close: m,
      // expose
      resize: p
    } = ld(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: vn,
      toSizeUnit: ge,
      n: Yb,
      classes: jb,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      resize: p,
      open: v,
      close: m
    };
  }
});
Nd.render = Wb;
const Xn = Nd;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var lk = Xn, Dd = Symbol("SELECT_BIND_OPTION_KEY");
function Gb() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = dn(Dd);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function qb() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = un(Dd);
  return r || Sn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var Xb = {
  label: {},
  value: {}
}, {
  n: Kb,
  classes: Zb
} = x("option");
function Jb(e, n) {
  var r = te("var-checkbox"), a = Ie("ripple");
  return Ce((g(), O(
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
    ), e.multiple ? (g(), ye(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = pn(() => {
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
      [F(e.$slots, "default", {}, () => [we(
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
var zd = _({
  name: "VarOption",
  directives: {
    Ripple: Ue
  },
  components: {
    VarCheckbox: cr
  },
  props: Xb,
  setup(e) {
    var n = M(!1), r = U(() => n.value), a = U(() => e.label), t = U(() => e.value), {
      select: o,
      bindSelect: l
    } = qb(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, f = () => {
      n.value = !n.value, u(p);
    }, v = () => u(p), m = (y) => {
      n.value = y;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return ie([() => e.label, () => e.value], d), l(p), {
      n: Kb,
      classes: Zb,
      optionSelected: n,
      multiple: i,
      focusColor: s,
      handleClick: f,
      handleSelect: v
    };
  }
});
zd.render = Jb;
const aa = zd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var sk = aa, Qb = {
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
  onClick: H(),
  "onUpdate:show": H()
};
function _b(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: Zl
} = x("overlay");
const ta = _({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Qb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = kt(() => e.show, 1), {
      disabled: o
    } = ao(), l = () => {
      k(e.onClick), k(e["onUpdate:show"], !1);
    };
    to(() => e.show, () => e.lockScroll);
    var i = () => J("div", Ee({
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
      return J(ze, {
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
        return J(Da, {
          to: u,
          disabled: o.value
        }, _b(d = s()) ? d : {
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
var uk = ta, xb = {
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
  onChange: H(),
  "onUpdate:current": H(),
  "onUpdate:size": H()
}, {
  n: e0,
  classes: n0
} = x("pagination"), r0 = ["item-mode", "onClick"];
function a0(e, n) {
  var r = te("var-icon"), a = te("var-input"), t = te("var-cell"), o = te("var-menu"), l = Ie("ripple");
  return g(), O(
    "ul",
    {
      class: c(e.n())
    },
    [Ce((g(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [F(e.$slots, "prev", {}, () => [J(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (g(), O(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        a,
        {
          "var-pagination-cover": "",
          hint: !1,
          disabled: e.disabled,
          modelValue: e.simpleCurrentValue,
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleCurrentValue = i),
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
          onKeydown: n[3] || (n[3] = qi((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
        },
        null,
        8,
        ["disabled", "modelValue"]
      ), z("span", null, [we(
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
    )) : (g(!0), O(
      Oe,
      {
        key: 1
      },
      Ae(e.pageList, (i, s) => Ce((g(), O(
        "li",
        {
          key: s,
          "item-mode": e.getMode(i, s),
          class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [we(
          ae(i),
          1
          /* TEXT */
        )],
        10,
        r0
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Ce((g(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [F(e.$slots, "next", {}, () => [J(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (g(), O(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        o,
        {
          disabled: e.disabled,
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: de(() => [(g(!0), O(
            Oe,
            null,
            Ae(e.sizeOption, (i, s) => Ce((g(), ye(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: de(() => [we(
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
          default: de(() => [z(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = pn(function() {
                return e.showMenu && e.showMenu(...arguments);
              }, ["stop"]))
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
        ["disabled", "show"]
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.showQuickJumper && !e.simple ? (g(), O(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [we(
        ae(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), J(
        a,
        {
          modelValue: e.quickJumperValue,
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.quickJumperValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
          onKeydown: n[9] || (n[9] = qi((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.totalText ? (g(), O(
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
var Ad = _({
  name: "VarPagination",
  components: {
    VarMenu: Xn,
    VarIcon: Pe,
    VarCell: fr,
    VarInput: br
  },
  directives: {
    Ripple: Ue
  },
  props: xb,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), o = M(!1), l = M(L(e.current) || 1), i = M(L(e.size) || 10), s = M([]), u = U(() => Math.ceil(e.maxPagerCount / 2)), d = U(() => Math.ceil(L(e.total) / L(i.value))), f = U(() => {
      var T = i.value * (l.value - 1) + 1, I = Math.min(i.value * l.value, L(e.total));
      return [T, I];
    }), v = U(() => e.showTotal ? e.showTotal(L(e.total), f.value) : ""), m = (T, I) => nn(T) ? !1 : I === 1 ? t.value : o.value, p = (T, I) => nn(T) ? "basic" : I === 1 ? "head" : "tail", y = (T, I) => {
      if (!(T === l.value || e.disabled)) {
        if (T === "...") {
          l.value = I === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
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
        nn(T) && (l.value = T);
      }
    }, h = () => {
      e.disabled || (n.value = !0);
    }, b = (T) => {
      i.value = T, n.value = !1;
      var I = V(l.value);
      a.value = String(I), l.value = I;
    }, V = (T) => T > d.value ? d.value : T < 1 ? 1 : T, $ = (T, I, P) => {
      P.target.blur();
      var N = V(L(I));
      a.value = String(N), l.value = N, T === "quick" && (r.value = "");
    };
    return ie([() => e.current, () => e.size], (T) => {
      var [I, P] = T;
      l.value = L(I) || 1, i.value = L(P || 10);
    }), ie([l, i, d], (T, I) => {
      var [P, N, w] = T, [B, D] = I, C = [], {
        maxPagerCount: S,
        total: R,
        onChange: Z
      } = e, Q = Math.ceil(L(R) / L(D)), Y = w - (S - u.value) - 1;
      if (a.value = "" + P, w - 2 > S) {
        if (B === void 0 || w !== Q)
          for (var j = 2; j < S + 2; j++)
            C.push(j);
        if (P <= S && P < Y) {
          C = [];
          for (var se = 1; se < S + 1; se++)
            C.push(se + 1);
          t.value = !0, o.value = !1;
        }
        if (P > S && P < Y) {
          C = [];
          for (var W = 1; W < S + 1; W++)
            C.push(P + W - u.value);
          t.value = P === 2 && S === 1, o.value = !1;
        }
        if (P >= Y) {
          C = [];
          for (var E = 1; E < S + 1; E++)
            C.push(w - (S - E) - 1);
          t.value = !1, o.value = !0;
        }
        C = [1, "...", ...C, "...", w];
      } else
        for (var A = 1; A <= w; A++)
          C.push(A);
      s.value = C, B != null && w > 0 && k(Z, P, N), k(e["onUpdate:current"], P), k(e["onUpdate:size"], N);
    }, {
      immediate: !0
    }), {
      n: e0,
      classes: n0,
      pack: Ge,
      current: l,
      menuVisible: n,
      size: i,
      pageCount: d,
      pageList: s,
      quickJumperValue: r,
      simpleCurrentValue: a,
      totalText: v,
      getMode: p,
      isHideEllipsis: m,
      clickItem: y,
      showMenu: h,
      clickSize: b,
      setPage: $,
      toNumber: L,
      formatElevation: vn
    };
  }
});
Ad.render = a0;
const oa = Ad;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var dk = oa, t0 = {
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
  onClick: H()
}, {
  n: o0,
  classes: i0
} = x("paper");
function l0(e, n) {
  var r = Ie("ripple");
  return Ce((g(), O(
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
var Ld = _({
  name: "VarPaper",
  directives: {
    Ripple: Ue
  },
  props: t0,
  setup(e) {
    var n = (r) => {
      k(e.onClick, r);
    };
    return {
      n: o0,
      classes: i0,
      formatElevation: vn,
      toSizeUnit: ge,
      handleClick: n
    };
  }
});
Ld.render = l0;
const ia = Ld;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var vk = ia;
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
var s0 = fi({
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
  onChange: H(),
  onConfirm: H(),
  onCancel: H()
}, qe(St, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: u0,
  classes: d0
} = x("picker"), Jl = 300, v0 = 15, Ql = 0, f0 = ["onTouchstart", "onTouchmove", "onTouchend"], c0 = ["onTransitionend"];
function m0(e, n) {
  var r = te("var-button");
  return g(), ye(
    xa(e.dynamic ? e.n("$-popup") : e.Transition),
    Ee(e.dynamic ? {
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
      default: de(() => [z(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (g(), O(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [F(e.$slots, "cancel", {}, () => [J(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: de(() => [we(
                ae(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), F(e.$slots, "title", {}, () => [z(
            "div",
            {
              class: c(e.n("title"))
            },
            ae(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), F(e.$slots, "confirm", {}, () => [J(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: de(() => [we(
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
          [(g(!0), O(
            Oe,
            null,
            Ae(e.scrollColumns, (a) => (g(), O(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: pn((t) => e.handleTouchmove(t, a), ["prevent"]),
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
                [(g(!0), O(
                  Oe,
                  null,
                  Ae(a.column.texts, (t) => (g(), O(
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
                c0
              )],
              42,
              f0
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
var Rd = _({
  name: "VarPicker",
  components: {
    VarButton: Je,
    VarPopup: bn
  },
  inheritAttrs: !1,
  props: s0,
  setup(e) {
    var n = M([]), r = U(() => Le(e.optionHeight)), a = U(() => Le(e.optionCount)), t = U(() => a.value * r.value / 2 - r.value / 2), o = U(() => a.value * r.value), l = [], i = (C, S) => {
      S.scrollEl = C;
    }, s = (C) => {
      k(e["onUpdate:show"], C);
    }, u = (C) => {
      var S = r.value + t.value, R = t.value - C.column.texts.length * r.value;
      C.translate >= S && (C.translate = S), C.translate <= R && (C.translate = R);
    }, d = (C, S) => {
      var {
        length: R
      } = C.column.texts;
      return S = S >= R ? R - 1 : S, S = S <= 0 ? 0 : S, S;
    }, f = (C) => {
      var S = Math.round((t.value - C.translate) / r.value);
      return d(C, S);
    }, v = () => {
      var C = n.value.map((R) => R.column.texts[R.index]), S = n.value.map((R) => R.index);
      return {
        texts: C,
        indexes: S
      };
    }, m = function(C, S, R, Z) {
      Z === void 0 && (Z = !1);
      var Q = t.value - d(C, S) * r.value;
      Q === C.translate && (C.scrolling = !1, !Z && N(C)), C.translate = Q, C.duration = R;
    }, p = (C, S, R) => {
      C.translate += Math.abs(S / R) / 3e-3 * (S < 0 ? -1 : 1);
    }, y = (C, S) => {
      S.touching = !0, S.scrolling = !1, S.duration = 0, S.translate = bo(S.scrollEl);
    }, h = (C, S) => {
      if (S.touching) {
        var {
          clientY: R
        } = C.touches[0], Z = S.prevY !== void 0 ? R - S.prevY : 0;
        S.prevY = R, S.translate += Z, u(S);
        var Q = performance.now();
        Q - S.momentumTime > Jl && (S.momentumTime = Q, S.momentumPrevY = S.translate);
      }
    }, b = (C, S) => {
      S.touching = !1, S.scrolling = !0, S.prevY = void 0;
      var R = S.translate - S.momentumPrevY, Z = performance.now() - S.momentumTime, Q = Math.abs(R) >= v0 && Z <= Jl;
      Q && p(S, R, Z), S.index = f(S), m(S, S.index, Q ? 1e3 : 200);
    }, V = (C) => {
      C.scrolling = !1, N(C);
    }, $ = (C) => C.map((S, R) => {
      var Z, Q = $e(S) ? {
        texts: S
      } : S, Y = {
        id: Ql++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Z = Q.initialIndex) != null ? Z : 0,
        columnIndex: R,
        duration: 0,
        momentumTime: 0,
        column: Q,
        scrollEl: null,
        scrolling: !1
      };
      return m(Y, Y.index, 0, !0), Y;
    }), T = (C) => {
      var S = [];
      return I(S, C, 0, !0), S;
    }, I = function(C, S, R, Z) {
      if (Z === void 0 && (Z = !1), $e(S) && S.length) {
        var Q, Y = Z && (Q = e.cascadeInitialIndexes[C.length]) != null ? Q : 0, j = {
          id: Ql++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: Y,
          columnIndex: R,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: S.map((se) => se[e.textKey])
          },
          columns: S,
          scrollEl: null,
          scrolling: !1
        };
        C.push(j), m(j, j.index, 0, !0), I(C, j.columns[j.index].children, R + 1, Z);
      }
    }, P = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), I(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, N = (C) => {
      var {
        cascade: S,
        onChange: R
      } = e;
      S && P(C);
      var Z = n.value.some((se) => se.scrolling);
      if (!Z) {
        var {
          texts: Q,
          indexes: Y
        } = v(), j = Y.every((se, W) => se === l[W]);
        j || (l = [...Y], k(R, Q, Y));
      }
    }, w = () => {
      if (e.cascade) {
        var C = n.value.find((S) => S.scrolling);
        C && (C.translate = bo(C.scrollEl), C.index = f(C), m(C, C.index, 0, !0), C.scrolling = !1, P(C));
      } else
        n.value.forEach((S) => {
          S.translate = bo(S.scrollEl), S.index = f(S), m(S, S.index, 0);
        });
    }, B = () => {
      w();
      var {
        texts: C,
        indexes: S
      } = v();
      l = [...S], k(e.onConfirm, C, S);
    }, D = () => {
      w();
      var {
        texts: C,
        indexes: S
      } = v();
      l = [...S], k(e.onCancel, C, S);
    };
    return ie(() => e.columns, (C) => {
      n.value = e.cascade ? T(Xi(C)) : $(Xi(C));
      var {
        indexes: S
      } = v();
      l = [...S];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: u0,
      classes: d0,
      pack: Ge,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: ze,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: h,
      handleTouchend: b,
      handleTransitionend: V,
      confirm: B,
      cancel: D,
      dt: no
    };
  }
});
Rd.render = m0;
const wr = Rd;
var an;
function Na(e) {
  return new Promise((n) => {
    Na.close();
    var r = $e(e) ? {
      columns: e
    } : e, a = Ne(r);
    a.dynamic = !0, a.teleport = "body", an = a;
    var {
      unmountInstance: t
    } = et(wr, a, {
      onConfirm: (o, l) => {
        k(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, an === a && (an = null);
      },
      onCancel: (o, l) => {
        k(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, an === a && (an = null);
      },
      onClose: () => {
        k(a.onClose), n({
          state: "close"
        }), an === a && (an = null);
      },
      onClosed: () => {
        k(a.onClosed), t(), an === a && (an = null);
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
wr.install = function(e) {
  e.component(wr.name, wr);
};
Na.Component = wr;
Na.install = function(e) {
  e.component(wr.name, wr);
};
Na.close = function() {
  if (an != null) {
    var e = an;
    an = null, Be().then(() => {
      e.show = !1;
    });
  }
};
var fk = wr;
function p0(e) {
  return ["linear", "circle"].includes(e);
}
var h0 = {
  mode: {
    type: String,
    default: "linear",
    validator: p0
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
  n: g0,
  classes: y0
} = x("progress"), b0 = ["viewBox"], w0 = ["cx", "cy", "r", "stroke-width"], C0 = ["cx", "cy", "r", "stroke-width"];
function S0(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (g(), O(
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
        [e.track ? (g(), O(
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
      ), e.label ? (g(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [we(
          ae(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.mode === "circle" ? (g(), O(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(g(), O(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: G({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (g(), O(
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
          w0
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
          C0
        )],
        14,
        b0
      )), e.label ? (g(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [we(
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
var Ud = _({
  name: "VarProgress",
  props: h0,
  setup(e) {
    var n = U(() => {
      var a = L(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = U(() => {
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
      n: g0,
      classes: y0,
      toSizeUnit: ge,
      multiplySizeUnit: xe,
      linearProps: n,
      circleProps: r
    };
  }
});
Ud.render = S0;
const la = Ud;
la.install = function(e) {
  e.component(la.name, la);
};
var ck = la, k0 = {
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
  onRefresh: H(),
  "onUpdate:modelValue": H()
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
  classes: $0
} = x("pull-refresh"), ns = 150;
function T0(e, n) {
  var r = te("var-icon");
  return g(), O(
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
var Hd = _({
  name: "VarPullRefresh",
  components: {
    VarIcon: Pe
  },
  props: k0,
  setup(e) {
    var n = M(0), r = M(null), a = M(null), t = M(0), o = M("-125%"), l = M("arrow-down"), i = M("default"), s = M(!1), u, d, f = 0, v = 0, m = /* @__PURE__ */ function() {
      var w = xl(function* (B) {
        if (l.value !== B)
          return l.value = B, new Promise((D) => {
            window.setTimeout(D, ns);
          });
      });
      return function(D) {
        return w.apply(this, arguments);
      };
    }(), p = U(() => i.value !== "loading" && i.value !== "success" && !e.disabled), y = U(() => ({
      transform: "translate3d(0px, " + (Re(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: b.value ? e.successBgColor : e.bgColor,
      color: b.value ? e.successColor : e.color
    })), h = U(() => Math.abs(2 * n.value)), b = U(() => i.value === "success"), V = (w) => {
      var B = "classList" in u ? u : document.body;
      B.classList[w](es() + "--lock");
    }, $ = (w) => {
      if (n.value === 0) {
        var {
          width: B
        } = a.value.getBoundingClientRect();
        n.value = -(B + B * 0.25);
      }
      f = w.touches[0].clientY, v = 0, d = Sr(w.target);
    }, T = (w) => {
      if (p.value && !(d !== u && dt(d) > 0)) {
        var B = dt(u);
        if (!(B > 0)) {
          var D = B === 0, C = w.touches[0];
          v = C.clientY - f, D && v >= 0 && w.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = w.touches[0].clientY), D && o.value > n.value && V("add");
          var S = (w.touches[0].clientY - t.value) / 2 + n.value;
          o.value = S >= h.value ? h.value : S, m(o.value >= h.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, I = /* @__PURE__ */ function() {
      var w = xl(function* () {
        p.value && (s.value = !0, o.value >= h.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = h.value * 0.3, k(e["onUpdate:modelValue"], !0), Be(() => {
          k(e.onRefresh);
        }), V("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, V("remove");
        }, L(e.animationDuration))), d = null);
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), P = () => {
      u = e.target ? hs(e.target, "PullRefresh") : Sr(r.value);
    }, N = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    };
    return ie(() => e.modelValue, (w) => {
      w === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, N();
      }, L(e.successDuration)));
    }), sn(P), Kn(r, "touchmove", T), {
      n: es,
      classes: $0,
      ICON_TRANSITION: ns,
      refreshStatus: i,
      freshNode: r,
      controlNode: a,
      touchStart: $,
      touchMove: T,
      touchEnd: I,
      iconName: l,
      controlStyle: y,
      isSuccess: b
    };
  }
});
Hd.render = T0;
const sa = Hd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var mk = sa, P0 = {
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
  onClick: H(),
  onChange: H(),
  "onUpdate:modelValue": H()
}, Fd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function O0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(Fd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function V0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = un(Fd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: M0,
  classes: B0
} = x("radio");
function E0(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return g(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      Ee({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Ce((g(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? F(e.$slots, "checked-icon", {
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
        )]) : F(e.$slots, "unchecked-icon", {
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
      }], [l, e.handleHovering, "desktop"]]), z(
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
var Yd = _({
  name: "VarRadio",
  directives: {
    Ripple: Ue,
    Hover: zn
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: Ke,
    VarHoverOverlay: on
  },
  inheritAttrs: !1,
  props: P0,
  setup(e) {
    var n = M(!1), r = U(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = V0(), {
      hovering: l,
      handleHovering: i
    } = kr(), {
      form: s,
      bindForm: u
    } = $n(), {
      errorMessage: d,
      validateWithTrigger: f,
      validate: v,
      // expose
      resetValidation: m
    } = kn(), p = (P) => {
      Be(() => {
        var {
          validateTrigger: N,
          rules: w,
          modelValue: B
        } = e;
        f(N, P, w, B);
      });
    }, y = (P) => {
      var {
        checkedValue: N,
        onChange: w
      } = e;
      t && n.value === N || (n.value = P, k(e["onUpdate:modelValue"], n.value), k(w, n.value), t == null || t.onToggle(N), p("onChange"));
    }, h = (P) => {
      var {
        disabled: N,
        readonly: w,
        uncheckedValue: B,
        checkedValue: D,
        onClick: C
      } = e;
      s != null && s.disabled.value || N || (k(C, P), !(s != null && s.readonly.value || w) && (a.value = !0, y(r.value ? B : D)));
    }, b = (P) => {
      var {
        checkedValue: N,
        uncheckedValue: w
      } = e;
      n.value = P === N ? N : w;
    }, V = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, $ = () => v(e.rules, e.modelValue), T = (P) => {
      var {
        uncheckedValue: N,
        checkedValue: w
      } = e, B = ![N, w].includes(P);
      B && (P = r.value ? N : w), y(P);
    };
    ie(() => e.modelValue, (P) => {
      n.value = P;
    }, {
      immediate: !0
    });
    var I = {
      sync: b,
      validate: $,
      resetValidation: m,
      reset: V
    };
    return k(o, I), k(u, I), {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: M0,
      classes: B0,
      handleClick: h,
      toggle: T,
      reset: V,
      validate: $,
      resetValidation: m
    };
  }
});
Yd.render = E0;
const ua = Yd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var pk = ua;
function I0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var N0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: I0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: H(),
  "onUpdate:modelValue": H()
}, {
  n: D0,
  classes: z0
} = x("radio-group");
function A0(e, n) {
  var r = te("var-form-details");
  return g(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
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
var jd = _({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: Ke
  },
  props: N0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = O0(), {
      bindForm: t
    } = $n(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = kn(), u = U(() => o.value), d = (h) => {
      Be(() => {
        var {
          validateTrigger: b,
          rules: V,
          modelValue: $
        } = e;
        l(b, h, V, $);
      });
    }, f = () => r.forEach((h) => {
      var {
        sync: b
      } = h;
      return b(e.modelValue);
    }), v = (h) => {
      k(e["onUpdate:modelValue"], h), k(e.onChange, h), d("onChange");
    }, m = () => i(e.rules, e.modelValue), p = () => {
      k(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, f), ie(() => n.value, f);
    var y = {
      onToggle: v,
      validate: m,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return k(t, y), a(y), {
      errorMessage: o,
      n: D0,
      classes: z0,
      reset: p,
      validate: m,
      resetValidation: s
    };
  }
});
jd.render = A0;
const da = jd;
da.install = function(e) {
  e.component(da.name, da);
};
var hk = da, L0 = {
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
  onChange: H(),
  "onUpdate:modelValue": H()
}, {
  n: rt
} = x("rate"), R0 = ["onClick"];
function U0(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return g(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [(g(!0), O(
        Oe,
        null,
        Ae(e.toNumber(e.count), (i) => Ce((g(), O(
          "div",
          {
            key: i,
            style: G(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (s) => e.handleClick(i, s)
          },
          [J(
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
          ), J(
            a,
            {
              hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          R0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
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
var Wd = _({
  name: "VarRate",
  components: {
    VarIcon: Pe,
    VarFormDetails: Ke,
    VarHoverOverlay: on
  },
  directives: {
    Ripple: Ue,
    Hover: zn
  },
  props: L0,
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
    } = kr(), s = M(-1), u = ($) => {
      var {
        count: T,
        gap: I
      } = e;
      return {
        color: f($).color,
        marginRight: $ !== L(T) ? ge(I) : 0
      };
    }, d = ($) => {
      var {
        name: T,
        color: I
      } = f($);
      return {
        [rt("content")]: !0,
        [rt("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [rt("--error")]: a.value,
        [rt("--primary")]: T !== e.emptyIcon && !I
      };
    }, f = ($) => {
      var {
        modelValue: T,
        disabled: I,
        disabledColor: P,
        color: N,
        half: w,
        emptyColor: B,
        icon: D,
        halfIcon: C,
        emptyIcon: S
      } = e, R = N;
      return (I || n != null && n.disabled.value) && (R = P), $ <= L(T) ? {
        color: R,
        name: D
      } : w && $ <= L(T) + 0.5 ? {
        color: R,
        name: C
      } : {
        color: I || n != null && n.disabled.value ? P : B,
        name: S
      };
    }, v = ($, T) => {
      if (e.half) {
        var {
          offsetWidth: I
        } = T.target;
        T.offsetX <= Math.floor(I / 2) && ($ -= 0.5);
      }
      k(e["onUpdate:modelValue"], $);
    }, m = () => o(e.rules, L(e.modelValue)), p = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = ($, T) => {
      var {
        readonly: I,
        disabled: P,
        onChange: N
      } = e;
      I || P || n != null && n.disabled.value || n != null && n.readonly.value || (v($, T), k(N, $), p());
    }, h = ($) => (T) => {
      s.value = $, i.value = T;
    }, b = () => {
      k(e["onUpdate:modelValue"], 0), l();
    }, V = {
      reset: b,
      validate: m,
      resetValidation: l
    };
    return k(r, V), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: f,
      handleClick: y,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: h,
      reset: b,
      validate: m,
      resetValidation: l,
      toSizeUnit: ge,
      toNumber: L,
      n: rt
    };
  }
});
Wd.render = U0;
const va = Wd;
va.install = function(e) {
  e.component(va.name, va);
};
var gk = va;
function H0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var F0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: H0
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
}, Y0 = (e) => (za(""), e = e(), Aa(), e), j0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, W0 = /* @__PURE__ */ Y0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), G0 = [W0];
function q0(e, n) {
  return g(), O("svg", j0, G0);
}
var Gd = _({});
Gd.render = q0;
const X0 = Gd;
var K0 = (e) => (za(""), e = e(), Aa(), e), Z0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, J0 = /* @__PURE__ */ K0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), Q0 = [J0];
function _0(e, n) {
  return g(), O("svg", Z0, Q0);
}
var qd = _({});
qd.render = _0;
const x0 = qd;
var e1 = (e) => (za(""), e = e(), Aa(), e), n1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, r1 = /* @__PURE__ */ e1(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), a1 = [r1];
function t1(e, n) {
  return g(), O("svg", n1, a1);
}
var Xd = _({});
Xd.render = t1;
const o1 = Xd;
var {
  n: i1,
  classes: l1
} = x("result");
function s1(e, n) {
  return g(), O(
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
var Kd = _({
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
      n: i1,
      classes: l1,
      toNumber: L
    };
  }
});
Kd.render = s1;
const u1 = Kd;
var d1 = (e) => (za(""), e = e(), Aa(), e), v1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, f1 = /* @__PURE__ */ d1(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), c1 = [f1];
function m1(e, n) {
  return g(), O("svg", v1, c1);
}
var Zd = _({});
Zd.render = m1;
const p1 = Zd;
var h1 = (e) => (za(""), e = e(), Aa(), e), g1 = {
  viewBox: "-4 -4 32 32"
}, y1 = /* @__PURE__ */ h1(() => /* @__PURE__ */ z(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), b1 = [y1];
function w1(e, n) {
  return g(), O("svg", g1, b1);
}
var Jd = _({});
Jd.render = w1;
const C1 = Jd;
var {
  n: S1,
  classes: k1
} = x("result");
function $1(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [F(e.$slots, "image", {}, () => [e.type ? (g(), O(
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
        [(g(), ye(
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
    )) : ee("v-if", !0)]), F(e.$slots, "title", {}, () => [e.title ? (g(), O(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ae(e.title),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (g(), O(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), e.$slots.footer ? (g(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Qd = _({
  name: "VarResult",
  components: {
    Info: X0,
    Success: u1,
    Warning: o1,
    Error: x0,
    Question: p1,
    Empty: C1
  },
  props: F0,
  setup(e) {
    var n = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: S1,
      classes: k1,
      toNumber: L,
      toPxNum: Le,
      toSizeUnit: ge,
      circleSize: n,
      borderSize: r
    };
  }
});
Qd.render = $1;
const fa = Qd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var yk = fa;
function T1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function P1(e) {
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
    validator: T1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: P1
  },
  onClick: H()
}, {
  n: V1,
  classes: M1
} = x("row");
function B1(e, n) {
  return g(), O(
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
var _d = _({
  name: "VarRow",
  props: O1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Xm(), t = U(() => {
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
      k(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return ie(() => a.value, o), ie(() => e.gutter, o), r(i), {
      n: V1,
      classes: M1,
      average: t,
      handleClick: l,
      padStartFlex: Ft
    };
  }
});
_d.render = B1;
const ca = _d;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var bk = ca;
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
function E1(e) {
  return ["left", "right", "center"].includes(e);
}
var I1 = ci({
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
    validator: E1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: H(),
  onBlur: H(),
  onClose: H(),
  onChange: H(),
  onClear: H(),
  "onUpdate:modelValue": H()
}, qe(Ui, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: N1,
  classes: D1
} = x("select"), z1 = {
  key: 1
};
function A1(e, n) {
  var r = te("var-chip"), a = te("var-icon"), t = te("var-field-decorator"), o = te("var-menu"), l = te("var-form-details");
  return g(), O(
    "div",
    {
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [J(
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
        menu: de(() => [z(
          "div",
          {
            ref: "menuEl",
            class: c(e.classes(e.n("scroller"), e.n("--scroller-" + e.variant), e.n("$-elevation--3"), [!e.hint, e.n("--scroller-non-hint")]))
          },
          [F(e.$slots, "default")],
          2
          /* CLASS */
        )]),
        default: de(() => [J(
          t,
          bt(eo({
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
            "prepend-icon": de(() => [F(e.$slots, "prepend-icon")]),
            "append-icon": de(() => [F(e.$slots, "append-icon")]),
            default: de(() => [z(
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
                [e.isEmptyModelValue ? ee("v-if", !0) : F(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (g(), O(
                  Oe,
                  {
                    key: 0
                  },
                  [e.chip ? (g(), O(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(g(!0), O(
                      Oe,
                      null,
                      Ae(e.labels, (i) => (g(), ye(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = pn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: de(() => [we(
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
                  )) : (g(), O(
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
                )) : (g(), O(
                  "span",
                  z1,
                  ae(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), F(e.$slots, "arrow-icon", {
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
    ), J(
      l,
      {
        "error-message": e.errorMessage,
        onClick: n[2] || (n[2] = pn(() => {
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
var xd = _({
  name: "VarSelect",
  components: {
    VarIcon: Pe,
    VarMenu: Xn,
    VarChip: mr,
    VarFieldDecorator: Sd,
    VarFormDetails: Ke
  },
  props: I1,
  setup(e) {
    var n = M(!1), r = U(() => e.multiple), a = U(() => e.focusColor), t = M(""), o = M([]), l = U(() => Un(e.modelValue)), i = U(() => e.disabled || e.readonly ? "" : "pointer"), s = M(0), {
      bindForm: u,
      form: d
    } = $n(), {
      length: f,
      options: v,
      bindOptions: m
    } = Gb(), {
      errorMessage: p,
      validateWithTrigger: y,
      validate: h,
      // expose
      resetValidation: b
    } = kn(), V = M(null), $ = U(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), T = () => {
      var {
        multiple: E,
        modelValue: A
      } = e;
      if (E) {
        var K = A;
        o.value = K.map(N);
      }
      !E && !Un(A) && (t.value = N(A)), !E && Un(A) && (t.value = "");
    }, I = (E) => {
      Be(() => {
        var {
          validateTrigger: A,
          rules: K,
          modelValue: ne
        } = e;
        y(A, E, K, ne);
      });
    }, P = (E) => {
      var {
        value: A,
        label: K
      } = E;
      return A.value != null ? A.value : K.value;
    }, N = (E) => {
      var A, K, ne = v.find((ve) => {
        var {
          value: ue
        } = ve;
        return ue.value === E;
      });
      return ne || (ne = v.find((ve) => {
        var {
          label: ue
        } = ve;
        return ue.value === E;
      })), (A = (K = ne) == null ? void 0 : K.label.value) != null ? A : "";
    }, w = () => {
      var {
        disabled: E,
        readonly: A,
        onFocus: K
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || E || A || (s.value = Le(e.offsetY), n.value = !0, k(K), I("onFocus"));
    }, B = () => {
      var {
        disabled: E,
        readonly: A,
        onBlur: K
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || E || A || (k(K), I("onBlur"));
    }, D = (E) => {
      var {
        disabled: A,
        readonly: K,
        multiple: ne,
        onChange: ve
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || A || K)) {
        var ue = ne ? v.filter((X) => {
          var {
            selected: re
          } = X;
          return re.value;
        }).map(P) : P(E);
        k(e["onUpdate:modelValue"], ue), k(ve, ue), I("onChange"), !ne && (n.value = !1);
      }
    }, C = () => {
      var {
        disabled: E,
        readonly: A,
        multiple: K,
        clearable: ne,
        onClear: ve
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || E || A || !ne)) {
        var ue = K ? [] : void 0;
        k(e["onUpdate:modelValue"], ue), k(ve, ue), I("onClear");
      }
    }, S = (E) => {
      var {
        disabled: A,
        onClick: K
      } = e;
      d != null && d.disabled.value || A || (k(K, E), I("onClick"));
    }, R = (E) => {
      var {
        disabled: A,
        readonly: K,
        modelValue: ne,
        onClose: ve
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || A || K)) {
        var ue = ne, X = v.find((fe) => {
          var {
            label: Se
          } = fe;
          return Se.value === E;
        }), re = ue.filter((fe) => {
          var Se;
          return fe !== ((Se = X.value.value) != null ? Se : X.label.value);
        });
        k(e["onUpdate:modelValue"], re), k(ve, re), I("onClose");
      }
    }, Z = () => {
      var {
        multiple: E,
        modelValue: A
      } = e;
      if (E) {
        var K = A;
        v.forEach((ne) => ne.sync(K.includes(P(ne))));
      } else
        v.forEach((ne) => ne.sync(A === P(ne)));
      T();
    }, Q = () => {
      s.value = Le(e.offsetY), n.value = !0;
    }, Y = () => {
      n.value = !1;
    }, j = () => h(e.rules, e.modelValue), se = () => {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), b();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: E,
        modelValue: A
      } = e;
      E && !$e(A) && Sn("Select", "The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, Z, {
      deep: !0
    }), ie(() => f.value, Z);
    var W = {
      multiple: r,
      focusColor: a,
      computeLabel: T,
      onSelect: D,
      reset: se,
      validate: j,
      resetValidation: b
    };
    return m(W), k(u, W), {
      offsetY: s,
      isFocus: n,
      errorMessage: p,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: V,
      placement: $,
      cursor: i,
      n: N1,
      classes: D1,
      handleFocus: w,
      handleBlur: B,
      handleClear: C,
      handleClick: S,
      handleClose: R,
      reset: se,
      validate: j,
      resetValidation: b,
      focus: Q,
      blur: Y
    };
  }
});
xd.render = A1;
const ma = xd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var wk = ma, L1 = {
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
  n: R1,
  classes: U1
} = x("skeleton");
function H1(e, n) {
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? ee("v-if", !0) : (g(), O(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (g(), O(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (g(), O(
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
      )) : ee("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (g(), O(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (g(), O(
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
        )) : ee("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (g(), O(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (g(), O(
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
          )) : ee("v-if", !0), (g(!0), O(
            Oe,
            null,
            Ae(e.toNumber(e.rows), (r, a) => (g(), O(
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
    )) : ee("v-if", !0), e.loading && e.fullscreen ? (g(), O(
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
var ev = _({
  name: "VarSkeleton",
  props: L1,
  setup() {
    return {
      n: R1,
      classes: U1,
      toSizeUnit: ge,
      toNumber: L
    };
  }
});
ev.render = H1;
const pa = ev;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Ck = pa;
function F1(e) {
  return ["always", "normal", "never"].includes(e);
}
var De;
(function(e) {
  e.First = "1", e.Second = "2";
})(De || (De = {}));
var Y1 = {
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
    validator: F1
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
  onChange: H(),
  onStart: H(),
  onEnd: H(),
  "onUpdate:modelValue": H()
}, {
  n: rs,
  classes: j1
} = x("slider"), W1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function G1(e, n) {
  var r = te("var-hover-overlay"), a = te("var-form-details"), t = Ie("hover");
  return g(), O(
    "div",
    {
      class: c(e.n(e.direction))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "__block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [z(
        "div",
        {
          class: c(e.n(e.direction + "__track"))
        },
        [z(
          "div",
          {
            class: c(e.n(e.direction + "__track-background")),
            style: G({
              background: e.trackColor,
              height: e.vertical ? "100%" : e.multiplySizeUnit(e.trackHeight),
              width: e.vertical ? e.multiplySizeUnit(e.trackHeight) : "100%"
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), z(
          "div",
          {
            class: c(e.n(e.direction + "__track-fill")),
            style: G(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (g(!0), O(
        Oe,
        null,
        Ae(e.thumbList, (o) => (g(), O(
          "div",
          {
            class: c(e.n(e.direction + "__thumb")),
            key: o.enumValue,
            style: G(e.syncThumbStyle(o)),
            onTouchstart: pn((l) => e.start(l, o.enumValue), ["stop"]),
            onTouchmove: pn((l) => e.move(l, o.enumValue), ["stop"]),
            onTouchend: (l) => e.end(o.enumValue),
            onTouchcancel: (l) => e.end(o.enumValue)
          },
          [F(e.$slots, "button", {
            currentValue: o.text
          }, () => [Ce(z(
            "div",
            {
              class: c(e.n(e.direction + "__thumb-block")),
              style: G({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), [[t, (l) => hover(l, o), "desktop"]]), z(
            "div",
            {
              class: c(e.classes(e.n(e.direction + "__thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n(e.direction + "__thumb-ripple--active")])),
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
              class: c(e.classes(e.n(e.direction + "__thumb-label"), [e.showLabel(o.enumValue), e.n(e.direction + "__thumb-label--active")])),
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
          W1
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
var nv = _({
  name: "VarSlider",
  components: {
    VarFormDetails: Ke,
    VarHoverOverlay: on
  },
  directives: {
    Hover: zn
  },
  props: Y1,
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
    } = kr(), {
      hovering: u,
      handleHovering: d
    } = kr(), f = () => o(e.rules, e.modelValue), v = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), p = M(null), y = M(0), h = M(!1), b = Ne({
      [De.First]: v(),
      [De.Second]: v()
    }), V = U(() => L(e.max) - L(e.min)), $ = U(() => y.value / V.value * L(e.step)), T = U(() => {
      var {
        modelValue: X,
        range: re
      } = e, fe = [];
      return re && $e(X) ? fe = [{
        value: S(X[0]),
        enumValue: De.First,
        text: R(X[0]),
        hovering: tt(i),
        handleHovering: s
      }, {
        value: S(X[1]),
        enumValue: De.Second,
        text: R(X[1]),
        hovering: tt(u),
        handleHovering: d
      }] : nn(X) && (fe = [{
        value: S(X),
        enumValue: De.First,
        text: R(X),
        hovering: tt(i),
        handleHovering: s
      }]), fe;
    }), I = U(() => {
      var {
        activeColor: X,
        range: re,
        modelValue: fe
      } = e, Se = re && $e(fe) ? S(Math.min(fe[0], fe[1])) : 0, We = re && $e(fe) ? S(Math.max(fe[0], fe[1])) - Se : S(fe);
      return w.value ? {
        left: "0px",
        height: We + "%",
        bottom: Se + "%",
        background: X
      } : {
        top: "0px",
        width: We + "%",
        left: Se + "%",
        background: X
      };
    }), P = U(() => e.disabled || (r == null ? void 0 : r.disabled.value)), N = U(() => e.readonly || (r == null ? void 0 : r.readonly.value)), w = U(() => e.direction === "vertical"), B = (X) => {
      var {
        direction: re
      } = e, fe = X.currentTarget;
      return fe ? re === "horizontal" ? X.clientX - Wv(fe) : y.value - (X.clientY - Gv(fe)) : 0;
    }, D = (X) => w.value ? {
      bottom: X.value + "%",
      zIndex: b[X.enumValue].active ? 1 : void 0
    } : {
      left: X.value + "%",
      zIndex: b[X.enumValue].active ? 1 : void 0
    }, C = (X) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : b[X].active, S = (X) => {
      var {
        min: re,
        max: fe
      } = e;
      return X < L(re) ? 0 : X > L(fe) ? 100 : (X - L(re)) / V.value * 100;
    }, R = (X) => {
      if (!nn(X))
        return 0;
      var re = X;
      re < Number(e.min) && (re = Number(e.min)), re > Number(e.max) && (re = Number(e.max));
      var fe = parseInt("" + re, 10) === re;
      return fe ? re : L(re.toPrecision(5));
    }, Z = (X, re) => {
      P.value || re.handleHovering(X);
    }, Q = (X, re) => {
      var fe = [], {
        step: Se,
        range: We,
        modelValue: Pn,
        onChange: On,
        min: He
      } = e, fn = L(Se), Tt = Math.round(X / $.value), Mr = Tt * fn + L(He), le = b[re].percentValue * fn + L(He);
      if (b[re].percentValue = Tt, We && $e(Pn) && (fe = re === De.First ? [Mr, Pn[1]] : [Pn[0], Mr]), le !== Mr) {
        var be = We ? fe.map((he) => R(he)) : R(Mr);
        k(On, be), k(e["onUpdate:modelValue"], be), m();
      }
    }, Y = (X) => {
      if (!e.range)
        return De.First;
      var re = b[De.First].percentValue * $.value, fe = b[De.Second].percentValue * $.value, Se = Math.abs(X - re), We = Math.abs(X - fe);
      return Se <= We ? De.First : De.Second;
    }, j = (X, re) => {
      y.value || (y.value = p.value.offsetWidth), P.value || (b[re].active = !0), !(P.value || N.value) && (k(e.onStart), h.value = !0, b[re].startPosition = X.touches[0][w.value ? "clientY" : "clientX"]);
    }, se = (X, re) => {
      if (!(P.value || N.value || !h.value)) {
        var fe = (w.value ? b[re].startPosition - X.touches[0].clientY : X.touches[0].clientX - b[re].startPosition) + b[re].currentOffset;
        fe <= 0 ? fe = 0 : fe >= y.value && (fe = y.value), Q(fe, re);
      }
    }, W = (X) => {
      var {
        range: re,
        modelValue: fe,
        onEnd: Se,
        step: We,
        min: Pn
      } = e;
      if (P.value || (b[X].active = !1), !(P.value || N.value)) {
        var On = [];
        b[X].currentOffset = b[X].percentValue * $.value;
        var He = b[X].percentValue * L(We) + L(Pn);
        re && $e(fe) && (On = X === De.First ? [He, fe[1]] : [fe[0], He]), k(Se, re ? On : He), h.value = !1;
      }
    }, E = (X) => {
      if (!(P.value || N.value) && !X.target.closest("." + rs("thumb"))) {
        var re = B(X), fe = Y(re);
        Q(re, fe), W(fe);
      }
    }, A = () => {
      var X = L(e.step);
      return isNaN(X) ? (_i("Slider", 'type of prop "step" should be Number'), !1) : X < 0 ? (_i("Slider", '"step" should be > 0'), !1) : !0;
    }, K = () => {
      var {
        range: X,
        modelValue: re
      } = e;
      return X && !$e(re) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !X && $e(re) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : X && $e(re) && re.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, ne = function(X, re) {
      X === void 0 && (X = e.modelValue), re === void 0 && (re = L(e.step));
      var fe = (Se) => {
        var {
          min: We,
          max: Pn
        } = e;
        return Se < L(We) ? 0 : Se > L(Pn) ? V.value / re : (Se - L(We)) / re;
      };
      e.range && $e(X) ? (b[De.First].percentValue = fe(X[0]), b[De.First].currentOffset = b[De.First].percentValue * $.value, b[De.Second].percentValue = fe(X[1]), b[De.Second].currentOffset = b[De.Second].percentValue * $.value) : nn(X) && (b[De.First].currentOffset = fe(X) * $.value);
    }, ve = () => {
      var X = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], X), l();
    }, ue = {
      reset: ve,
      validate: f,
      resetValidation: l
    };
    return k(n, ue), ie([() => e.modelValue, () => e.step], (X) => {
      var [re, fe] = X;
      !A() || !K() || h.value || ne(re, L(fe));
    }), ie(y, () => ne()), sn(() => {
      !A() || !K() || (y.value = p.value[w.value ? "offsetHeight" : "offsetWidth"]);
    }), {
      n: rs,
      classes: j1,
      Thumbs: De,
      sliderEl: p,
      getFillStyle: I,
      isDisabled: P,
      vertical: w,
      syncThumbStyle: D,
      errorMessage: a,
      thumbsProps: b,
      thumbList: T,
      hover: Z,
      multiplySizeUnit: xe,
      toNumber: L,
      showLabel: C,
      start: j,
      move: se,
      end: W,
      click: E
    };
  }
});
nv.render = G1;
const ha = nv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Sk = ha;
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
function q1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function X1(e) {
  return Yi.includes(e);
}
var rv = {
  type: {
    type: String,
    validator: X1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: q1
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
  loadingType: qe(lr, "type"),
  loadingSize: qe(lr, "size"),
  loadingRadius: qe(lr, "radius"),
  loadingColor: mi({}, qe(lr, "color"), {
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
  onOpen: H(),
  // 打开动画结束时的回调
  onOpened: H(),
  // 关闭时的回调函数
  onClose: H(),
  // 关闭动画结束时的回调
  onClosed: H(),
  "onUpdate:show": H(),
  _update: {
    type: String
  }
}, {
  n: K1,
  classes: Z1
} = x("snackbar"), J1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Q1(e, n) {
  var r = te("var-icon"), a = te("var-loading");
  return Ce((g(), O(
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
        [F(e.$slots, "default", {}, () => [we(
          ae(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c([e.n("icon")])
        },
        [F(e.$slots, "icon")],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (g(), ye(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : ee("v-if", !0), e.type === "loading" ? (g(), ye(
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
        )) : ee("v-if", !0), F(e.$slots, "action")],
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
var av = _({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Bn,
    VarIcon: Pe
  },
  props: rv,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = kt(() => e.show, 1);
    to(() => e.show, () => e.lockScroll);
    var a = U(() => e.type === "loading" || e.forbidClick), t = U(() => e.type ? J1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (l) => {
      l ? (k(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), k(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(n.value), o();
    }), sn(() => {
      e.show && (k(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Yi,
      n: K1,
      classes: Z1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
av.render = Q1;
const tv = av;
var {
  n: _1
} = x("snackbar");
function x1(e, n) {
  var r = te("var-snackbar-core");
  return g(), ye(
    Da,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [J(
      ze,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: de(() => [J(
          r,
          Ee(e.$props, {
            class: e.n("transition")
          }),
          {
            icon: de(() => [F(e.$slots, "icon")]),
            action: de(() => [F(e.$slots, "action")]),
            default: de(() => [F(e.$slots, "default", {}, () => [we(
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
var ov = _({
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
      n: _1,
      disabled: e
    };
  }
});
ov.render = x1;
const ga = ov;
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
function ew(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var Yi = ["loading", "success", "warning", "info", "error"], as = 0, pi = !1, iv, Ja = !1, lv = {
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
}, Cn = Ne([]), ji = lv, nw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, ko = (e) => () => wt(e) ? e() : e, rw = {
  setup() {
    return () => {
      var e = Cn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ja && (a.position = "top");
        var l = Ja ? "relative" : "absolute", i = ht({
          position: l
        }, sw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, f = {
          default: ko(s),
          icon: ko(u),
          action: ko(d)
        };
        return J(tv, Ee(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (v) => a.show = v
        }), f);
      });
      return J(Lv, Ee(nw, {
        style: {
          zIndex: mn.zIndex
        },
        onAfterEnter: aw,
        onAfterLeave: tw
      }), ew(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Qn = function(e) {
  var n = iw(e), r = Ne(ht({}, ji, n));
  r.show = !0, pi || (pi = !0, iv = et(rw).unmountInstance);
  var {
    length: a
  } = Cn, t = {
    id: as++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ja)
    ow(t);
  else {
    var o = "update-" + as;
    lw(r, o);
  }
  return {
    clear() {
      !Ja && Cn.length ? Cn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Yi.forEach((e) => {
  Qn[e] = (n) => (bi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Qn(n));
});
Qn.install = function(e) {
  e.component(ga.name, ga);
};
Qn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ja && (Cn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ja = e);
};
Qn.clear = function() {
  Cn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Qn.setDefaultOptions = function(e) {
  ji = e;
};
Qn.resetDefaultOptions = function() {
  ji = lv;
};
Qn.Component = ga;
function aw(e) {
  var n = e.getAttribute("data-id"), r = Cn.find((a) => a.id === L(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function tw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = Cn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed));
  var a = Cn.every((t) => t.animationEnd);
  a && (k(iv), Cn = Ne([]), pi = !1);
}
function ow(e) {
  Cn.push(e);
}
function iw(e) {
  return e === void 0 && (e = {}), Re(e) ? {
    content: e
  } : e;
}
function lw(e, n) {
  var [r] = Cn;
  r.reactiveSnackOptions = ht({}, r.reactiveSnackOptions, e), r._update = n;
}
function sw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ga.install = function(e) {
  e.component(ga.name, ga);
};
var kk = ga;
const hi = Qn;
var sv = (e) => ["mini", "small", "normal", "large"].includes(e), uw = (e) => sv(e) || $e(e) || nn(e) || Re(e), dw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), vw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), fw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: uw
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
    validator: dw
  },
  align: {
    type: String,
    validator: vw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function cn(e) {
  return "calc(" + e + " / 2)";
}
function cw(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = cn(e) + " " + n + " " + cn(e) + " 0" : i = cn(e) + " 0" : t === "space-around" ? i = cn(e) + " " + cn(n) : t === "space-between" && (o === 0 ? i = cn(e) + " " + cn(n) + " " + cn(e) + " 0" : o === l ? i = cn(e) + " 0 " + cn(e) + " " + cn(n) : i = cn(e) + " " + cn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: $o,
  classes: mw
} = x("space");
const ya = _({
  name: "VarSpace",
  props: fw,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : $e(t) ? t.map(ge) : [ge(t), ge(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, f = (t = k(r.default)) != null ? t : [], v = sv(d), [m, p] = a(d, v);
      f = $s(f);
      var y = f.length - 1, h = f.map((b, V) => {
        var $ = cw(m, p, {
          direction: u,
          justify: l,
          index: V,
          lastIndex: y
        });
        return J("div", {
          style: {
            margin: $
          }
        }, [b]);
      });
      return J("div", {
        class: mw($o(), $o("$--box"), [o, $o("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Ft(l),
          alignItems: Ft(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [h]);
    };
  }
});
ya.install = function(e) {
  e.component(ya.name, ya);
};
var $k = ya, pw = {
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
function hw() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = dn(uv);
  return {
    length: n,
    step: r,
    bindStep: e
  };
}
function gw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(uv);
  return r || Sn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: yw,
  classes: bw
} = x("step"), ww = {
  key: 3
};
function Cw(e, n) {
  var r = te("var-icon");
  return g(), O(
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
          [e.isActive ? (g(), ye(
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
          )) : e.isCurrent && e.currentIcon ? (g(), ye(
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
          )) : e.inactiveIcon ? (g(), ye(
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
          )) : (g(), O(
            "span",
            ww,
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
          [F(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? ee("v-if", !0) : (g(), O(
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
var dv = _({
  name: "VarStep",
  components: {
    VarIcon: Pe
  },
  props: pw,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = gw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: f
    } = t, v = U(() => l.value === a.value), m = U(() => a.value !== -1 && l.value > a.value), p = {
      index: a
    }, y = () => f(a.value), h = (b) => {
      d.value === "horizontal" && (e.value = b);
    };
    return o(p), ie(i, (b) => {
      if (r.value = b - 1 === a.value, e.value) {
        var V = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + V + "px";
      }
    }), {
      n: yw,
      classes: bw,
      main: e,
      index: a,
      isActive: m,
      isCurrent: v,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: y,
      getRef: h
    };
  }
});
dv.render = Cw;
const ba = dv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Tk = ba;
function Sw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var kw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Sw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: H()
}, {
  n: $w
} = x("steps");
function Tw(e, n) {
  return g(), O(
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
var vv = _({
  name: "VarSteps",
  props: kw,
  setup(e) {
    var n = U(() => e.active), r = U(() => e.activeColor), a = U(() => e.inactiveColor), t = U(() => e.direction), {
      length: o,
      bindStep: l
    } = hw(), i = (u) => {
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
      n: $w
    };
  }
});
vv.render = Tw;
const wa = vv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Pk = wa, Pw = {
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
} = x("style-provider"), Vw = _({
  name: "VarStyleProvider",
  props: Pw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => vs(e.tag, {
      class: Ow(),
      style: Ss(e.styleVars)
    }, k(r.default));
  }
});
const Ca = Vw;
var To = [];
function gt(e) {
  To.forEach((r) => document.documentElement.style.removeProperty(r)), To.length = 0;
  var n = Ss(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), To.push(a);
  });
}
gt.Component = Ca;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
gt.install = function(e) {
  e.component(Ca.name, Ca);
};
var Ok = Ca, Mw = {
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
  onClick: H(),
  onChange: H(),
  "onUpdate:modelValue": H()
}, {
  n: Bw,
  classes: Ew
} = x("switch");
function Iw(e, n) {
  var r = te("var-loading"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return Ce((g(), O(
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
      ), Ce((g(), O(
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
          [e.loading ? (g(), ye(
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
  )), [[l, e.hover, "desktop"]]);
}
var fv = _({
  name: "VarSwitch",
  components: {
    VarLoading: Bn,
    VarFormDetails: Ke,
    VarHoverOverlay: on
  },
  directives: {
    Ripple: Ue,
    Hover: zn
  },
  props: Mw,
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
    } = kr(), u = () => o(e.rules, e.modelValue), d = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), f = U(() => {
      var {
        size: b,
        modelValue: V,
        color: $,
        closeColor: T,
        loadingColor: I,
        activeValue: P
      } = e;
      return {
        handle: {
          width: xe(b),
          height: xe(b),
          backgroundColor: V === P ? $ : T,
          color: I
        },
        ripple: {
          left: V === P ? xe(b, 0.5) : "-" + xe(b, 0.5),
          color: V === P ? $ : T || "#999",
          width: xe(b, 2),
          height: xe(b, 2)
        },
        track: {
          height: xe(b, 0.72),
          width: xe(b, 1.9),
          borderRadius: xe(b, 2 / 3),
          filter: V === P || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === P ? $ : T
        },
        switch: {
          height: xe(b, 1.2),
          width: xe(b, 2)
        }
      };
    }), v = U(() => {
      var {
        size: b = "5.333vw"
      } = e;
      return xe(b, 0.4);
    }), m = (b) => {
      var {
        onClick: V,
        onChange: $,
        disabled: T,
        loading: I,
        readonly: P,
        modelValue: N,
        activeValue: w,
        inactiveValue: B,
        "onUpdate:modelValue": D
      } = e;
      if (k(V, b), !(T || I || P || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var C = N === w ? B : w;
        k($, C), k(D, C), d();
      }
    }, p = (b) => {
      e.disabled || r != null && r.disabled.value || s(b);
    }, y = () => {
      k(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, h = {
      reset: y,
      validate: u,
      resetValidation: l
    };
    return k(n, h), {
      n: Bw,
      classes: Ew,
      switchActive: m,
      hovering: i,
      hover: p,
      radius: v,
      styleComputed: f,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
fv.render = Iw;
const Sa = fv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Vk = Sa, Nw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: H()
}, cv = Symbol("TABS_BIND_TAB_KEY");
function Dw() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = dn(cv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function zw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = un(cv);
  return n || Sn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Dt,
  classes: Aw
} = x("tab");
function Lw(e, n) {
  var r = Ie("ripple");
  return Ce((g(), O(
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
var mv = _({
  name: "VarTab",
  directives: {
    Ripple: Ue
  },
  props: Nw,
  setup(e) {
    var n = M(null), r = U(() => e.name), a = U(() => e.disabled), t = U(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = zw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: f,
      disabledColor: v,
      itemDirection: m,
      resize: p
    } = l, y = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(y);
    var h = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), b = () => e.disabled ? v.value : h() ? d.value : f.value, V = () => e.disabled ? Dt("$-tab--disabled") : h() ? Dt("$-tab--active") : Dt("$-tab--inactive"), $ = (T) => {
      var {
        disabled: I,
        name: P,
        onClick: N
      } = e;
      I || (k(N, P ?? o.value, T), s(y));
    };
    return ie(() => e.name, p), ie(() => e.disabled, p), {
      n: Dt,
      classes: Aw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: f,
      itemDirection: m,
      computeColorStyle: b,
      computeColorClass: V,
      handleClick: $
    };
  }
});
mv.render = Lw;
const ka = mv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Mk = ka, pv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Rw() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(pv);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Uw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = un(pv);
  return n || Sn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Hw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Fw,
  classes: Yw
} = x("tab-item");
function jw(e, n) {
  var r = te("var-swipe-item");
  return g(), ye(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: de(() => [e.initSlot ? F(e.$slots, "default", {
        key: 0
      }) : ee("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var hv = _({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Gn
  },
  props: Hw,
  setup(e) {
    var n = M(!1), r = M(!1), a = U(() => e.name), {
      index: t,
      bindTabsItems: o
    } = Uw(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: Fw,
      classes: Yw,
      current: n,
      initSlot: r
    };
  }
});
hv.render = jw;
const $a = hv;
$a.install = function(e) {
  e.component($a.name, $a);
};
var Bk = $a, Ww = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: Gw,
  classes: qw
} = x("table");
function Xw(e, n) {
  return g(), O(
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
        [F(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (g(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var gv = _({
  name: "VarTable",
  props: Ww,
  setup() {
    return {
      toSizeUnit: ge,
      n: Gw,
      classes: qw,
      formatElevation: vn
    };
  }
});
gv.render = Xw;
const Ta = gv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Ek = Ta;
function ts(e) {
  return ["horizontal", "vertical"].includes(e);
}
function Kw(e) {
  return ["auto", "always"].includes(e);
}
function Zw(e) {
  return ["normal", "reverse"].includes(e);
}
var Jw = {
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
    validator: Kw
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: Zw
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: qe(Ut, "cssMode"),
  stickyZIndex: qe(Ut, "zIndex"),
  offsetTop: qe(Ut, "offsetTop"),
  onClick: H(),
  onChange: H(),
  "onUpdate:active": H()
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
  n: Qw,
  classes: _w
} = x("tabs");
function xw(e, n) {
  return g(), ye(
    xa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: de(() => [z(
        "div",
        Ee({
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
          [F(e.$slots, "default"), z(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
              style: G({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
              })
            },
            [z(
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
var yv = _({
  name: "VarTabs",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Jw,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), l = M(null), i = U(() => e.active), s = U(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = U(() => e.activeColor), d = U(() => e.inactiveColor), f = U(() => e.disabledColor), v = U(() => e.itemDirection), m = M(null), {
      tabList: p,
      bindTabList: y,
      length: h
    } = Dw(), b = (C) => {
      var S, R = (S = C.name.value) != null ? S : C.index.value, {
        active: Z,
        onChange: Q,
        onClick: Y
      } = e;
      k(e["onUpdate:active"], R), k(Y, R), R !== Z && k(Q, R);
    }, V = () => p.find((C) => {
      var {
        name: S
      } = C;
      return e.active === S.value;
    }), $ = (C) => p.find((S) => {
      var {
        index: R
      } = S;
      return (C ?? e.active) === R.value;
    }), T = () => {
      if (h.value !== 0) {
        var {
          active: C
        } = e;
        if (nn(C)) {
          var S = C > h.value - 1 ? h.value - 1 : 0;
          return k(e["onUpdate:active"], S), $(S);
        }
      }
    }, I = () => {
      o.value = e.scrollable === "always" || p.length >= 5;
    }, P = (C) => {
      var {
        element: S
      } = C, R = S.value;
      R && (e.layoutDirection === "horizontal" ? (n.value = R.offsetWidth + "px", a.value = R.offsetLeft + "px") : (r.value = R.offsetHeight + "px", t.value = R.offsetTop + "px"));
    }, N = (C) => {
      var {
        element: S
      } = C;
      if (o.value) {
        var R = l.value, Z = S.value;
        if (e.layoutDirection === "horizontal") {
          var Q = Z.offsetLeft + Z.offsetWidth / 2 - R.offsetWidth / 2;
          vt(R, {
            left: Q,
            animation: Vo
          });
        } else {
          var Y = Z.offsetTop + Z.offsetHeight / 2 - R.offsetHeight / 2;
          vt(R, {
            top: Y,
            animation: Vo
          });
        }
      }
    }, w = () => {
      var C = V() || $() || T();
      !C || C.disabled.value || (I(), P(C), N(C));
    }, B = /* @__PURE__ */ function() {
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
      disabledColor: f,
      itemDirection: v,
      resize: w,
      onTabClick: b
    };
    return y(D), ie(() => h.value, /* @__PURE__ */ is(function* () {
      yield Dn(), w();
    })), ie(() => e.active, w), ie(() => e.scrollable, w), Pr(w), Kn(() => window, "resize", w), {
      stickyComponent: m,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: ze,
      toSizeUnit: ge,
      n: Qw,
      classes: _w,
      resize: w,
      resizeSticky: B,
      formatElevation: vn
    };
  }
});
yv.render = xw;
const Pa = yv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Ik = Pa, eC = {
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
  "onUpdate:active": H()
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
function nC(e) {
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
  n: rC
} = x("tabs-items");
function aC(e, n) {
  var r = te("var-swipe");
  return g(), ye(
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
      default: de(() => [F(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var bv = _({
  name: "VarTabsItems",
  components: {
    VarSwipe: Wn
  },
  props: eC,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Rw(), o = (v) => r.find((m) => {
      var {
        name: p
      } = m;
      return v === p.value;
    }), l = (v) => r.find((m) => {
      var {
        index: p
      } = m;
      return v === p.value;
    }), i = (v) => o(v) || l(v), s = (v) => {
      var m, p = i(v);
      p && (r.forEach((y) => {
        var {
          setCurrent: h
        } = y;
        return h(!1);
      }), p.setCurrent(!0), (m = n.value) == null || m.to(p.index.value));
    }, u = (v) => {
      var m, p = r.find((h) => {
        var {
          index: b
        } = h;
        return b.value === v;
      }), y = (m = p.name.value) != null ? m : p.index.value;
      k(e["onUpdate:active"], y);
    }, d = () => n.value, f = {};
    return a(f), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ nC(function* () {
      yield Dn(), s(e.active);
    })), {
      swipe: n,
      n: rC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
bv.render = aC;
const Oa = bv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Nk = Oa;
const tC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, oC = {
  "--badge-default-color": "#555"
}, iC = {
  "--button-default-color": "#303030"
}, lC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, sC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, uC = {
  "--checkbox-unchecked-color": "#fff"
}, dC = {
  "--chip-default-color": "#555"
}, vC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, fC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, cC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, mC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, pC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, hC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, gC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, yC = {
  "--popup-content-background-color": "#1e1e1e"
}, bC = {
  "--pull-refresh-background": "#303030"
}, wC = {
  "--radio-unchecked-color": "#fff"
}, CC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, SC = {
  "--select-scroller-background": "#303030"
}, kC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, $C = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, TC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, PC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, OC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, VC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, MC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, BC = {
  "--tabs-background": "#1e1e1e"
}, EC = {
  "--app-bar-color": "#272727"
}, IC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, NC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, DC = {
  "--menu-background-color": "#272727"
}, zC = {
  "--breadcrumb-inactive-color": "#aaa"
}, AC = {
  "--paper-background": "#303030"
}, LC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function gi() {
  return gi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, gi.apply(this, arguments);
}
const RC = gi({
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
}, iC, sC, lC, VC, fC, kC, BC, PC, yC, cC, tC, dC, oC, MC, vC, bC, TC, $C, hC, OC, pC, SC, wC, uC, mC, gC, EC, IC, NC, DC, CC, zC, AC, LC);
var UC = {
  dark: RC
}, Dk = null;
const yi = UC;
var gn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], en = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ss = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function HC(e) {
  return ["ampm", "24hr"].includes(e);
}
var FC = {
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
    validator: HC
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
  "onUpdate:modelValue": H(),
  onChange: H()
}, wv = (e, n) => e === "24hr" || n === "am", Wi = (e, n, r) => {
  var a = gn.findIndex((o) => L(o) === L(r)), t = wv(e, n) ? r : en[a];
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
    hourNum: f
  } = Wi(t, o, l), v = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: p,
      minute: y
    } = tn(i);
    v = p === f && a > y;
  }
  if (!i && s) {
    var {
      hour: h,
      minute: b
    } = tn(s);
    v = h === f && a < b;
  }
  if (i && s) {
    var {
      hour: V,
      minute: $
    } = tn(i), {
      hour: T,
      minute: I
    } = tn(s);
    v = T === f && a < I || V === f && a > $;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), v || m;
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
    hourStr: f,
    hourNum: v
  } = Wi(t, o, l), m = !1, p = !1;
  if (d.includes(f))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: h,
      second: b
    } = tn(s);
    m = y === v && h < i || h === i && a > b;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: $,
      second: T
    } = tn(u);
    m = V === v && $ > i || $ === i && a > T;
  }
  if (s && u) {
    var {
      hour: I,
      minute: P,
      second: N
    } = tn(s), {
      hour: w,
      minute: B,
      second: D
    } = tn(u);
    m = I === v && P < i || w === v && B > i || I === v && P === i && a > N || w === v && B === i && a < D;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: YC,
  classes: jC
} = x("time-picker");
function WC(e, n) {
  return g(), O(
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
    ), (g(!0), O(
      Oe,
      null,
      Ae(e.timeScales, (r, a) => (g(), O(
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
    )), e.format === "24hr" && e.type === "hour" ? (g(), O(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(g(!0), O(
        Oe,
        null,
        Ae(e.hours24, (r, a) => (g(), O(
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
var kv = _({
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
    } = n, a = M(null), t = M([]), o = M([]), l = U(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = U(() => {
      if (e.rad !== void 0) {
        var h = e.rad / 30;
        return h >= 0 ? h : h + 12;
      }
    }), s = U(() => e.type === "hour" ? gn : ss), u = (h, b) => {
      var V;
      h = (V = h) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var $ = e.type === "minute" ? Cv : Sv, T = {
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
      return b && e.type === "minute" && Reflect.deleteProperty(T, "minute"), $(T);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var h = e.isInner ? en[i.value] : s.value[i.value];
      return s.value === ss ? u() ? "#bdbdbd" : e.color : v(h) ? "#bdbdbd" : e.color;
    }, f = (h, b) => b ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), v = (h) => {
      if (e.type === "hour") {
        if (wv(e.format, e.ampm))
          return t.value.includes(h);
        var b = gn.findIndex((V) => V === h);
        return o.value.includes(b);
      }
      return u(h, !0);
    }, m = (h, b, V) => {
      var $ = 2 * Math.PI / 12 * h - Math.PI / 2, T = 50 * (1 + Math.cos($)), I = 50 * (1 + Math.sin($)), P = () => f(h, V) ? v(b) ? {
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
        color: w
      } = P();
      return {
        left: T + "%",
        top: I + "%",
        backgroundColor: N,
        color: w
      };
    }, p = () => {
      var {
        width: h,
        height: b
      } = a.value.getBoundingClientRect();
      return {
        width: h,
        height: b
      };
    }, y = () => {
      if (i.value !== void 0) {
        var h = e.ampm === "am" ? gn : en;
        return Ba(h[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (h, b) => {
      var [V, $] = h, [T, I] = b, P = V === T && $ === I;
      if (!(P || e.type !== "hour" || i.value === void 0)) {
        var N = $ ? en[i.value] : y(), w = e.useSeconds ? ":" + e.time.second : "", B = N + ":" + e.time.minute + w;
        e.preventNextUpdate || r("update", B), r("change-prevent-update");
      }
    }), ie(() => e.rad, (h, b) => {
      if (!(e.type === "hour" || h === void 0 || b === void 0)) {
        var V = h / 6 >= 0 ? h / 6 : h / 6 + 60, $ = b / 6 >= 0 ? b / 6 : b / 6 + 60;
        if (V !== $) {
          var T, {
            hourStr: I
          } = Wi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var P = oe().minute(V).format("mm"), N = e.useSeconds ? ":" + e.time.second : "";
            T = I + ":" + P + N;
          }
          if (e.type === "second") {
            var w = oe().second(V).format("ss"), B = e.useSeconds ? ":" + w : "";
            T = I + ":" + e.time.minute + B;
          }
          r("update", T);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (h) => {
      var [b, V, $] = h;
      if (t.value = [], b && !V) {
        var {
          hour: T
        } = tn(b), I = gn.filter((j) => L(j) > T), P = en.filter((j) => L(j) > T);
        t.value = [...I, ...P];
      }
      if (!b && V) {
        var {
          hour: N
        } = tn(V), w = gn.filter((j) => L(j) < N), B = en.filter((j) => L(j) < N);
        t.value = [...w, ...B];
      }
      if (b && V) {
        var {
          hour: D
        } = tn(b), {
          hour: C
        } = tn(V), S = gn.filter((j) => L(j) < C || L(j) > D), R = en.filter((j) => L(j) < C || L(j) > D);
        t.value = [...S, ...R];
      }
      if ($ != null && $.hours) {
        var {
          hours: Z
        } = $, Q = gn.filter((j) => !Z(L(j))), Y = en.filter((j) => !Z(L(j)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...Q, ...Y])];
      }
      o.value = t.value.map((j) => en.findIndex((se) => j === se)).filter((j) => j >= 0);
    }, {
      immediate: !0
    }), {
      n: YC,
      classes: jC,
      hours24: en,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: f,
      isDisable: v,
      getSize: p,
      getStyle: m,
      activeItemIndex: i
    };
  }
});
kv.render = WC;
const GC = kv;
var {
  n: qC,
  classes: XC
} = x("time-picker"), KC = (e) => (za(""), e = e(), Aa(), e), ZC = /* @__PURE__ */ KC(() => /* @__PURE__ */ z(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), JC = {
  key: 0
};
function QC(e, n) {
  var r = te("clock");
  return g(), O(
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
        ), ZC, z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ae(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (g(), O("span", JC, ":")) : ee("v-if", !0), e.useSeconds ? (g(), O(
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
      ), e.format === "ampm" ? (g(), O(
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
          ze,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: de(() => [(g(), ye(
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
var $v = _({
  name: "VarTimePicker",
  components: {
    Clock: GC
  },
  props: FC,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), o = M(!1), l = M(!1), i = M(!1), s = M(!1), u = M(void 0), d = M(0), f = M(0), v = M("hour"), m = M("am"), p = M(!1), y = M(!1), h = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), b = Ne({
      x: 0,
      y: 0
    }), V = Ne({
      x: [],
      y: []
    }), $ = U(() => v.value === "hour" ? u.value : v.value === "minute" ? d.value : f.value), T = (E) => {
      k(e["onUpdate:modelValue"], E), k(e.onChange, E);
    }, I = (E) => E * 57.29577951308232, P = (E) => {
      i.value = !1, y.value = !1, v.value = E;
    }, N = (E) => {
      var {
        disableHour: A
      } = a.value, K = gn.findIndex((ue) => L(ue) === L(h.value.hour)), ne = E === "am" ? gn : en, ve = [...ne.slice(K), ...ne.slice(0, K)];
      return ve.find((ue, X) => (o.value = X !== 0, !A.includes(ue)));
    }, w = (E) => {
      if (!e.readonly) {
        m.value = E;
        var A = N(E);
        if (A) {
          var K = e.useSeconds ? ":" + h.value.second : "", ne = Ba(A, 2, "0") + ":" + h.value.minute + K;
          T(ne);
        }
      }
    }, B = (E, A) => {
      var K = E >= V.x[0] && E <= V.x[1], ne = A >= V.y[0] && A <= V.y[1];
      return K && ne;
    }, D = (E) => {
      var A = e.format === "24hr" ? "HH" : "hh", {
        hour: K,
        minute: ne,
        second: ve
      } = tn(E);
      return {
        hour: oe().hour(K).format(A),
        minute: oe().minute(ne).format("mm"),
        second: oe().second(ve).format("ss")
      };
    }, C = (E) => {
      var A = E / 30;
      return A >= 0 ? A : A + 12;
    }, S = () => {
      var {
        width: E,
        height: A
      } = a.value.getSize(), K = b.x - E / 2 - 8, ne = b.x + E / 2 + 8, ve = b.y - A / 2 - 8, ue = b.y + A / 2 + 8;
      return {
        rangeXMin: K,
        rangeXMax: ne,
        rangeYMin: ve,
        rangeYMax: ue
      };
    }, R = (E, A, K) => {
      var {
        disableHour: ne
      } = a.value;
      l.value = B(E, A);
      var ve = Math.round(K / 30) * 30 + 90, ue = C(ve), X = t.value ? gn[ue] : en[ue];
      if (ne.includes(X) || (t.value = e.format === "24hr" ? B(E, A) : !1), t.value === l.value) {
        var re = t.value || m.value === "pm" ? en[ue] : gn[ue];
        p.value = ne.includes(re), !p.value && (u.value = ve, i.value = !0);
      }
    }, Z = (E) => {
      var {
        disableHour: A
      } = a.value, K = Math.round(E / 6) * 6 + 90, ne = K / 6 >= 0 ? K / 6 : K / 6 + 60, ve = {
        time: ne,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        max: e.max,
        min: e.min,
        disableHour: A,
        allowedTime: e.allowedTime
      };
      y.value = Cv(ve), !y.value && (d.value = K, s.value = !0);
    }, Q = (E) => {
      var {
        disableHour: A
      } = a.value, K = Math.round(E / 6) * 6 + 90, ne = K / 6 >= 0 ? K / 6 : K / 6 + 60, ve = {
        time: ne,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        minute: L(h.value.minute),
        max: e.max,
        min: e.min,
        disableHour: A,
        allowedTime: e.allowedTime
      };
      Sv(ve) || (f.value = K);
    }, Y = () => {
      var {
        left: E,
        top: A,
        width: K,
        height: ne
      } = n.value.getBoundingClientRect();
      if (b.x = E + K / 2, b.y = A + ne / 2, v.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ve,
          rangeXMax: ue,
          rangeYMin: X,
          rangeYMax: re
        } = S();
        V.x = [ve, ue], V.y = [X, re];
      }
    }, j = (E) => {
      if (E.preventDefault(), !e.readonly) {
        Y();
        var {
          clientX: A,
          clientY: K
        } = E.touches[0], ne = A - b.x, ve = K - b.y, ue = Math.round(I(Math.atan2(ve, ne)));
        v.value === "hour" ? R(A, K, ue) : v.value === "minute" ? Z(ue) : Q(ue);
      }
    }, se = () => {
      if (!e.readonly) {
        if (v.value === "hour" && i.value) {
          v.value = "minute";
          return;
        }
        v.value === "minute" && e.useSeconds && s.value && (v.value = "second");
      }
    }, W = () => {
      o.value = !1;
    };
    return ie(() => e.modelValue, (E) => {
      if (E) {
        var {
          hour: A,
          minute: K,
          second: ne
        } = tn(E), ve = oe().hour(A).format("hh"), ue = oe().hour(A).format("HH"), X = oe().minute(K).format("mm"), re = oe().second(ne).format("ss");
        u.value = (ve === "12" ? 0 : L(ve)) * 30, d.value = L(X) * 6, f.value = L(re) * 6, h.value = D(E), e.format !== "24hr" && (m.value = Ba("" + A, 2, "0") === ue && en.includes(ue) ? "pm" : "am"), t.value = e.format === "24hr" && en.includes(ue);
      }
    }, {
      immediate: !0
    }), {
      n: qC,
      classes: XC,
      getRad: $,
      time: h,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: v,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: j,
      checkPanel: P,
      checkAmpm: w,
      end: se,
      update: T,
      changePreventUpdate: W,
      formatElevation: vn
    };
  }
});
$v.render = QC;
const Va = $v;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var zk = Va, _C = {
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
  onBeforeRead: H(),
  onAfterRead: H(),
  onBeforeRemove: H(),
  onRemove: H(),
  onOversize: H(),
  "onUpdate:modelValue": H()
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
  n: xC,
  classes: eS
} = x("uploader"), nS = 0, rS = ["onClick"], aS = ["onClick"], tS = ["src", "alt"], oS = ["multiple", "accept", "capture", "disabled"], iS = ["src"];
function lS(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = te("var-popup"), l = Ie("ripple"), i = Ie("hover");
  return g(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(g(!0), O(
        Oe,
        null,
        Ae(e.files, (s) => Ce((g(), O(
          "div",
          {
            class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
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
          ), e.removable ? (g(), O(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: pn((u) => e.handleRemove(s), ["stop"])
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
            aS
          )) : ee("v-if", !0), s.cover ? (g(), O(
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
            tS
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
          rS
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? Ce((g(), O(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
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
          oS
        ), F(e.$slots, "default", {}, () => [J(
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
      )), [[l, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }], [i, e.handleHovering, "desktop"]]) : ee("v-if", !0)],
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
        default: de(() => {
          var s, u;
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (g(), O(
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
            iS
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
var Tv = _({
  name: "VarUploader",
  directives: {
    Ripple: Ue,
    Hover: zn
  },
  components: {
    VarIcon: Pe,
    VarPopup: bn,
    VarFormDetails: Ke,
    VarHoverOverlay: on
  },
  props: _C,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = U(() => {
      var {
        maxlength: j,
        modelValue: {
          length: se
        }
      } = e;
      return nn(j) ? se + " / " + j : "";
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
      hovering: f,
      handleHovering: v
    } = kr(), m = U(() => {
      var {
        modelValue: j,
        hideList: se
      } = e;
      return se ? [] : j;
    }), p = (j) => {
      var {
        disabled: se,
        readonly: W,
        previewed: E
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || se || W || !E)) {
        var {
          url: A
        } = j;
        if (Re(A) && Zi(A)) {
          Nn(A);
          return;
        }
        Re(A) && Ji(A) && (a.value = j, r.value = !0);
      }
    }, y = (j) => ({
      id: nS++,
      url: "",
      cover: "",
      name: j.name,
      file: j
    }), h = (j) => {
      var se = j.target, {
        files: W
      } = se;
      return Array.from(W);
    }, b = (j) => new Promise((se) => {
      var W = new FileReader();
      W.onload = () => {
        var E = W.result;
        j.file.type.startsWith("image") && (j.cover = E), j.url = E, se(j);
      }, W.readAsDataURL(j.file);
    }), V = (j) => j.map(b), $ = (j) => {
      var {
        onBeforeRead: se
      } = e;
      return j.map((W) => new Promise((E) => {
        se || E({
          valid: !0,
          varFile: W
        });
        var A = Oo(k(se, Ne(W)));
        Promise.all(A).then((K) => {
          E({
            valid: K.every(Boolean),
            varFile: W
          });
        });
      }));
    }, T = /* @__PURE__ */ function() {
      var j = ds(function* (se) {
        var {
          maxsize: W,
          maxlength: E,
          modelValue: A,
          onOversize: K,
          onAfterRead: ne,
          readonly: ve,
          disabled: ue
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || ue || ve)) {
          var X = (He) => He.filter((fn) => fn.file.size > L(W) ? (k(K, Ne(fn)), !1) : !0), re = (He) => {
            var fn = Math.min(He.length, L(E) - A.length);
            return He.slice(0, fn);
          }, fe = h(se), Se = fe.map(y);
          Se = W != null ? X(Se) : Se, Se = E != null ? re(Se) : Se;
          var We = yield Promise.all(V(Se)), Pn = yield Promise.all($(We)), On = Pn.filter((He) => {
            var {
              valid: fn
            } = He;
            return fn;
          }).map((He) => {
            var {
              varFile: fn
            } = He;
            return fn;
          });
          k(e["onUpdate:modelValue"], [...A, ...On]), se.target.value = "", On.forEach((He) => k(ne, Ne(He)));
        }
      });
      return function(W) {
        return j.apply(this, arguments);
      };
    }(), I = /* @__PURE__ */ function() {
      var j = ds(function* (se) {
        var {
          disabled: W,
          readonly: E,
          modelValue: A,
          onBeforeRemove: K,
          onRemove: ne
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || W || E)) {
          if (K) {
            var ve = Oo(k(K, Ne(se)));
            if ((yield Promise.all(ve)).some((X) => !X))
              return;
          }
          var ue = A.filter((X) => X !== se);
          k(ne, Ne(se)), S("onRemove"), k(e["onUpdate:modelValue"], ue);
        }
      });
      return function(W) {
        return j.apply(this, arguments);
      };
    }(), P = () => e.modelValue.filter((j) => j.state === "success"), N = () => e.modelValue.filter((j) => j.state === "error"), w = () => e.modelValue.filter((j) => j.state === "loading"), B = () => {
      n.value.click();
    }, D = () => {
      a.value = null, r.value = !1, Nn.close();
    }, C = {
      getSuccess: P,
      getError: N,
      getLoading: w
    }, S = (j) => {
      Be(() => {
        var {
          validateTrigger: se,
          rules: W,
          modelValue: E
        } = e;
        s(se, j, W, E, C);
      });
    }, R = !1, Z = () => u(e.rules, e.modelValue, C), Q = () => {
      R = !0, k(e["onUpdate:modelValue"], []), d();
    }, Y = {
      validate: Z,
      resetValidation: d,
      reset: Q
    };
    return k(l, Y), ie(() => e.modelValue, () => {
      !R && S("onChange"), R = !1;
    }, {
      deep: !0
    }), {
      n: xC,
      classes: eS,
      formatElevation: vn,
      input: n,
      files: m,
      showPreview: r,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      hovering: f,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      handleHovering: v,
      isHTMLSupportVideo: Ji,
      isHTMLSupportImage: Zi,
      preview: p,
      handleChange: T,
      handleRemove: I,
      getSuccess: P,
      getError: N,
      getLoading: w,
      validate: Z,
      resetValidation: d,
      reset: Q,
      chooseFile: B,
      closePreview: D
    };
  }
});
Tv.render = lS;
const Ma = Tv;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var Ak = Ma;
const sS = "2.10.0";
function uS(e) {
  Zn.install && e.use(Zn), Er.install && e.use(Er), Ir.install && e.use(Ir), Nr.install && e.use(Nr), Dr.install && e.use(Dr), vr.install && e.use(vr), zr.install && e.use(zr), Ar.install && e.use(Ar), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Je.install && e.use(Je), Ur.install && e.use(Ur), Hr.install && e.use(Hr), fr.install && e.use(fr), cr.install && e.use(cr), Fr.install && e.use(Fr), mr.install && e.use(mr), Yr.install && e.use(Yr), jr.install && e.use(jr), Wr.install && e.use(Wr), mn.install && e.use(mn), Gr.install && e.use(Gr), qr.install && e.use(qr), Kr.install && e.use(Kr), Jn.install && e.use(Jn), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), jn.install && e.use(jn), Ke.install && e.use(Ke), zn.install && e.use(zn), on.install && e.use(on), Pe.install && e.use(Pe), _r.install && e.use(_r), Nn.install && e.use(Nn), xr.install && e.use(xr), ea.install && e.use(ea), br.install && e.use(br), ft.install && e.use(ft), na.install && e.use(na), ra.install && e.use(ra), Bn.install && e.use(Bn), vi.install && e.use(vi), zo.install && e.use(zo), Xn.install && e.use(Xn), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), Na.install && e.use(Na), bn.install && e.use(bn), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), Ue.install && e.use(Ue), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), hi.install && e.use(hi), ya.install && e.use(ya), ba.install && e.use(ba), wa.install && e.use(wa), qn.install && e.use(qn), gt.install && e.use(gt), Wn.install && e.use(Wn), Gn.install && e.use(Gn), Sa.install && e.use(Sa), ka.install && e.use(ka), $a.install && e.use($a), Ta.install && e.use(Ta), Pa.install && e.use(Pa), Oa.install && e.use(Oa), yi.install && e.use(yi), Va.install && e.use(Va), gr.install && e.use(gr), Ma.install && e.use(Ma);
}
const Lk = {
  version: sS,
  install: uS,
  ActionSheet: Zn,
  AppBar: Er,
  Avatar: Ir,
  AvatarGroup: Nr,
  BackTop: Dr,
  Badge: vr,
  BottomNavigation: zr,
  BottomNavigationItem: Ar,
  Breadcrumb: Lr,
  Breadcrumbs: Rr,
  Button: Je,
  ButtonGroup: Ur,
  Card: Hr,
  Cell: fr,
  Checkbox: cr,
  CheckboxGroup: Fr,
  Chip: mr,
  Col: Yr,
  Collapse: jr,
  CollapseItem: Wr,
  Context: mn,
  Countdown: Gr,
  Counter: qr,
  DatePicker: Kr,
  Dialog: Jn,
  Divider: Zr,
  Ellipsis: Jr,
  Fab: Qr,
  Form: jn,
  FormDetails: Ke,
  Hover: zn,
  HoverOverlay: on,
  Icon: Pe,
  Image: _r,
  ImagePreview: Nn,
  IndexAnchor: xr,
  IndexBar: ea,
  Input: br,
  Lazy: ft,
  Link: na,
  List: ra,
  Loading: Bn,
  LoadingBar: vi,
  Locale: zo,
  Menu: Xn,
  Option: aa,
  Overlay: ta,
  Pagination: oa,
  Paper: ia,
  Picker: Na,
  Popup: bn,
  Progress: la,
  PullRefresh: sa,
  Radio: ua,
  RadioGroup: da,
  Rate: va,
  Result: fa,
  Ripple: Ue,
  Row: ca,
  Select: ma,
  Skeleton: pa,
  Slider: ha,
  Snackbar: hi,
  Space: ya,
  Step: ba,
  Steps: wa,
  Sticky: qn,
  StyleProvider: gt,
  Swipe: Wn,
  SwipeItem: Gn,
  Switch: Sa,
  Tab: ka,
  TabItem: $a,
  Table: Ta,
  Tabs: Pa,
  TabsItems: Oa,
  Themes: yi,
  TimePicker: Va,
  Tooltip: gr,
  Uploader: Ma
};
export {
  Zn as ActionSheet,
  Er as AppBar,
  Ir as Avatar,
  Nr as AvatarGroup,
  Dr as BackTop,
  vr as Badge,
  zr as BottomNavigation,
  Ar as BottomNavigationItem,
  Lr as Breadcrumb,
  Rr as Breadcrumbs,
  Je as Button,
  Ur as ButtonGroup,
  Hr as Card,
  fr as Cell,
  cr as Checkbox,
  Fr as CheckboxGroup,
  mr as Chip,
  Yr as Col,
  jr as Collapse,
  Wr as CollapseItem,
  mn as Context,
  Gr as Countdown,
  qr as Counter,
  Kr as DatePicker,
  Jn as Dialog,
  Zr as Divider,
  Jr as Ellipsis,
  Qr as Fab,
  jn as Form,
  Ke as FormDetails,
  zn as Hover,
  on as HoverOverlay,
  Pe as Icon,
  _r as Image,
  Nn as ImagePreview,
  xr as IndexAnchor,
  ea as IndexBar,
  br as Input,
  ft as Lazy,
  na as Link,
  ra as List,
  Bn as Loading,
  vi as LoadingBar,
  zo as Locale,
  Xn as Menu,
  aa as Option,
  ta as Overlay,
  Ro as PIXEL,
  oa as Pagination,
  ia as Paper,
  Na as Picker,
  bn as Popup,
  la as Progress,
  sa as PullRefresh,
  ua as Radio,
  da as RadioGroup,
  va as Rate,
  fa as Result,
  Ue as Ripple,
  ca as Row,
  Yi as SNACKBAR_TYPE,
  ma as Select,
  pa as Skeleton,
  ha as Slider,
  hi as Snackbar,
  ya as Space,
  ba as Step,
  wa as Steps,
  qn as Sticky,
  gt as StyleProvider,
  Wn as Swipe,
  Gn as SwipeItem,
  Sa as Switch,
  ka as Tab,
  $a as TabItem,
  Ta as Table,
  Pa as Tabs,
  Oa as TabsItems,
  yi as Themes,
  Va as TimePicker,
  gr as Tooltip,
  Ma as Uploader,
  hS as _ActionSheetComponent,
  gS as _AppBarComponent,
  bS as _AvatarComponent,
  wS as _AvatarGroupComponent,
  TS as _BackTopComponent,
  PS as _BadgeComponent,
  OS as _BottomNavigationComponent,
  VS as _BottomNavigationItemComponent,
  MS as _BreadcrumbComponent,
  BS as _BreadcrumbsComponent,
  $S as _ButtonComponent,
  ES as _ButtonGroupComponent,
  IS as _CardComponent,
  NS as _CellComponent,
  zS as _CheckboxComponent,
  AS as _CheckboxGroupComponent,
  LS as _ChipComponent,
  RS as _ColComponent,
  US as _CollapseComponent,
  HS as _CollapseItemComponent,
  vS as _ContextComponent,
  FS as _CountdownComponent,
  YS as _CounterComponent,
  jS as _DatePickerComponent,
  WS as _DialogComponent,
  GS as _DividerComponent,
  XS as _EllipsisComponent,
  KS as _FabComponent,
  ZS as _FormComponent,
  DS as _FormDetailsComponent,
  kS as _HoverComponent,
  SS as _HoverOverlayComponent,
  mS as _IconComponent,
  JS as _ImageComponent,
  xS as _ImagePreviewComponent,
  nk as _IndexAnchorComponent,
  rk as _IndexBarComponent,
  ak as _InputComponent,
  yS as _LazyComponent,
  tk as _LinkComponent,
  ok as _ListComponent,
  ik as _LoadingBarComponent,
  CS as _LoadingComponent,
  pS as _LocaleComponent,
  lk as _MenuComponent,
  sk as _OptionComponent,
  uk as _OverlayComponent,
  dk as _PaginationComponent,
  vk as _PaperComponent,
  fk as _PickerComponent,
  cS as _PopupComponent,
  ck as _ProgressComponent,
  mk as _PullRefreshComponent,
  pk as _RadioComponent,
  hk as _RadioGroupComponent,
  gk as _RateComponent,
  yk as _ResultComponent,
  fS as _RippleComponent,
  bk as _RowComponent,
  wk as _SelectComponent,
  Ck as _SkeletonComponent,
  Sk as _SliderComponent,
  kk as _SnackbarComponent,
  $k as _SpaceComponent,
  Tk as _StepComponent,
  Pk as _StepsComponent,
  ek as _StickyComponent,
  Ok as _StyleProviderComponent,
  QS as _SwipeComponent,
  _S as _SwipeItemComponent,
  Vk as _SwitchComponent,
  Mk as _TabComponent,
  Bk as _TabItemComponent,
  Ek as _TableComponent,
  Ik as _TabsComponent,
  Nk as _TabsItemsComponent,
  Dk as _ThemesComponent,
  zk as _TimePickerComponent,
  qS as _TooltipComponent,
  Ak as _UploaderComponent,
  gf as actionSheetProps,
  $i as add,
  $f as appBarProps,
  Zf as avatarGroupProps,
  jf as avatarProps,
  Pc as backTopProps,
  Ic as badgeProps,
  Yc as bottomNavigationItemProps,
  Ac as bottomNavigationProps,
  Kc as breadcrumbProps,
  em as breadcrumbsProps,
  bc as buttonProps,
  vm as cardProps,
  gm as cellProps,
  Dm as checkboxGroupProps,
  Pm as checkboxProps,
  Hm as chipProps,
  qm as colProps,
  rp as collapseItemProps,
  _m as collapseProps,
  ip as countdownProps,
  rh as counterProps,
  kh as datePickerProps,
  Lk as default,
  Ye as defaultLazyOptions,
  Hh as dialogProps,
  Gh as dividerProps,
  Ns as enUS,
  Cm as formDetailsProps,
  yy as formProps,
  Es as iconProps,
  Rs as imageCache,
  Hy as imagePreviewProps,
  ky as imageProps,
  Qy as indexAnchorProps,
  nb as indexBarProps,
  fb as inputProps,
  uS as install,
  Cb as linkProps,
  Tb as listProps,
  Bb as loadingBarProps,
  lr as loadingProps,
  Fb as menuProps,
  zs as merge,
  Xb as optionProps,
  Qb as overlayProps,
  Ge as pack,
  Ds as packs,
  xb as paginationProps,
  t0 as paperProps,
  s0 as pickerProps,
  St as popupProps,
  h0 as progressProps,
  k0 as pullRefreshProps,
  N0 as radioGroupProps,
  P0 as radioProps,
  L0 as rateProps,
  F0 as resultProps,
  O1 as rowProps,
  I1 as selectProps,
  L1 as skeletonProps,
  Y1 as sliderProps,
  rv as snackbarProps,
  fw as spaceProps,
  pw as stepProps,
  kw as stepsProps,
  Ut as stickyProps,
  Pw as styleProviderProps,
  cd as swipeProps,
  Mw as switchProps,
  Hw as tabItemProps,
  Nw as tabProps,
  Ww as tableProps,
  eC as tabsItemsProps,
  Jw as tabsProps,
  FC as timePickerProps,
  ay as tooltipProps,
  _C as uploaderProps,
  Ti as use,
  kr as useHoverOverlay,
  ki as useLocale,
  sS as version,
  Si as zhCN
};
