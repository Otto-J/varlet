import { reactive as Ie, onMounted as gt, nextTick as Be, onActivated as $r, isRef as Vv, watch as ie, onBeforeUnmount as _t, onDeactivated as Tr, unref as at, inject as Mv, getCurrentInstance as Ja, computed as R, provide as Bv, isVNode as yt, Comment as Ev, Fragment as Te, ref as B, createApp as Iv, h as vs, onBeforeMount as Nv, onUnmounted as Qa, defineComponent as ee, createVNode as _, Teleport as Ia, Transition as De, withDirectives as we, vShow as yr, mergeProps as Ve, openBlock as p, createBlock as he, resolveDynamicComponent as _a, normalizeClass as c, normalizeStyle as q, resolveComponent as te, resolveDirective as Me, withCtx as ue, createElementVNode as A, renderSlot as Y, toDisplayString as ae, createElementBlock as O, renderList as Ae, createCommentVNode as re, onUpdated as xt, createTextVNode as be, pushScopeId as Na, popScopeId as Da, withModifiers as cn, normalizeProps as bt, guardReactiveProps as eo, vModelText as Dv, toRefs as Av, watchEffect as zv, withKeys as qi, toRaw as Xi, TransitionGroup as Lv } from "vue";
var fs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, dS = Ie(fs);
const fn = Ie(fs), Re = (e) => typeof e == "string", Po = (e) => typeof e == "boolean", en = (e) => typeof e == "number", bi = (e) => Object.prototype.toString.call(e) === "[object Object]", Rv = (e) => typeof e == "object" && e !== null, wt = (e) => typeof e == "function", Se = (e) => Array.isArray(e), Uv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Rn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : Re(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Po(e) ? Number(e) : e, Ft = (e, n) => {
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
}, Oo = (e) => Se(e) ? e : [e];
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
      this.has(r) && Ft(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Vo = (e) => e, Qi = (e) => Math.pow(e, 3), ms = (e) => e < 0.5 ? Qi(e * 2) / 2 : 1 - Qi((1 - e) * 2) / 2, no = (e, n) => e ?? n, ps = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Va = function(e, n, r) {
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
function ut(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Ci(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Gv(e) {
  return Mo.apply(this, arguments);
}
function Mo() {
  return Mo = jv(function* (e) {
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
  }), Mo.apply(this, arguments);
}
function bo(e) {
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
function qv(e) {
  for (var n = [], r = e; r !== window; )
    r = br(r), n.push(r);
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
var gs = (e) => Re(e) && e.endsWith("rem"), Xv = (e) => Re(e) && e.endsWith("px") || en(e), Kv = (e) => Re(e) && e.endsWith("%"), ys = (e) => Re(e) && e.endsWith("vw"), bs = (e) => Re(e) && e.endsWith("vh"), ws = (e) => Re(e) && e.endsWith("vmin"), Cs = (e) => Re(e) && e.endsWith("vmax"), Zv = (e) => Re(e) && e.startsWith("calc("), Jv = (e) => Re(e) && e.startsWith("var("), Le = (e) => {
  if (en(e))
    return e;
  if (Xv(e))
    return +e.replace("px", "");
  if (ys(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (bs(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (gs(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return ws(e) ? nl().vMin : Cs(e) ? nl().vMax : Re(e) ? z(e) : 0;
}, me = (e) => {
  if (e != null)
    return Kv(e) || ys(e) || bs(e) || gs(e) || Zv(e) || Jv(e) || ws(e) || Cs(e) ? e : Le(e) + "px";
}, _e = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = me(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
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
function In() {
  return new Promise((e) => {
    yn(() => {
      yn(e);
    });
  });
}
function Qv() {
  return new Promise((e) => {
    yn(e);
  });
}
function dt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = ut(e), s = Ci(e);
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
function Ss(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Hv(a);
    return n[o] = t, n;
  }, {});
}
function _v() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Yt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function ln(e) {
  let n = !1;
  gt(() => {
    e(), Be(() => {
      n = !0;
    });
  }), $r(() => {
    n && e();
  });
}
function wr(e, n, r, a = {}) {
  if (!Ct())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => wt(m) ? m() : at(m), u = (m) => {
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
  Vv(e) && (v = ie(() => e.value, (m, h) => {
    d(h), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return ln(() => {
    u(e);
  }), _t(() => {
    d(e);
  }), Tr(() => {
    d(e);
  }), f;
}
function ks(e, n, r) {
  if (!Ct())
    return;
  wr(document, n, (t) => {
    const o = at(e);
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
  const n = Ja();
  return e in n.provides;
}
function sn(e) {
  if (!ef(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = Mv(e), { childInstances: r, collect: a, clear: t } = n, o = xv(n, ["childInstances", "collect", "clear"]), l = Ja();
  return {
    index: R(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      gt(() => {
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
function nf(e) {
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
  const n = Ja(), r = Ie([]), a = [], t = R(() => r.length), o = () => {
    const u = nf(n.subTree);
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
function We(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function rf(e) {
  var n = Iv(e), r = document.createElement("div");
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
      return () => vs(e, Bo({}, n, r));
    }
  }, {
    unmount: t
  } = rf(a);
  return {
    unmountInstance: t
  };
}
function $s(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== Ev) {
      if (r.type === Te && Se(r.children)) {
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
    var t = tl(function* (o, l, i) {
      if (!Se(o) || !o.length)
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
  wr(() => window, "hashchange", e), wr(() => window, "popstate", e);
}
function ao() {
  var e = B(!1);
  return $r(() => {
    e.value = !1;
  }), Tr(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ne(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (Se(s)) {
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
  if (Se(e))
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
        l ? l(i, d) : S(e[i], d);
      }
    });
  var u = B(s());
  return ie(() => e[n], () => {
    u.value = s();
  }), ie(() => u.value, (d) => {
    l ? l(i, d) : S(e[i], d);
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
} = ne("ripple"), ol = 250;
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
function Os(e) {
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
      } = of(this, e), s = document.createElement("div");
      s.classList.add(Ps()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), tf(this), this.appendChild(s), window.setTimeout(() => {
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
  if (!(!_v() || !fn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function lf(e, n) {
  var r;
  e._ripple = jt({
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
function sf(e) {
  e.removeEventListener("touchstart", Os), e.removeEventListener("touchmove", Vs), e.removeEventListener("dragstart", Eo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function uf(e, n) {
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
  mounted: lf,
  unmounted: sf,
  updated: uf,
  install(e) {
    e.directive("ripple", this);
  }
}, vS = Ms;
const Ue = Ms;
function df(e) {
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
function Bs() {
  var e = Object.keys(fn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Ot(e) {
  fn.locks[e] = 1, Bs();
}
function Vt(e) {
  delete fn.locks[e], Bs();
}
function to(e, n) {
  var {
    uid: r
  } = Ja();
  n && ie(n, (a) => {
    a === !1 ? Vt(r) : a === !0 && e() === !0 && Ot(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? Ot(r) : Vt(r));
  }), Nv(() => {
    n && n() === !1 || e() === !0 && Ot(r);
  }), Qa(() => {
    n && n() === !1 || e() === !0 && Vt(r);
  }), $r(() => {
    n && n() === !1 || e() === !0 && Ot(r);
  }), Tr(() => {
    n && n() === !1 || e() === !0 && Vt(r);
  });
}
function kt(e, n) {
  var r = B(fn.zIndex);
  return ie(e, (a) => {
    a && (fn.zIndex += n, r.value = fn.zIndex);
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
function vf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: Ln,
  classes: wo
} = ne("popup");
const bn = ee({
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
        onClickOverlay: v
      } = e;
      S(v), d && S(e["onUpdate:show"], !1);
    };
    to(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      S(d ? e.onOpen : e.onClose);
    }), af(() => S(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return _("div", {
        class: wo(Ln("overlay"), d),
        style: Io({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => _("div", Ve({
      class: wo(Ln("content"), Ln("--" + e.position), [e.defaultStyle, Ln("--content-background-color")], [e.defaultStyle, Ln("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [S(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: h,
        position: y
      } = e;
      return _(De, {
        name: Ln("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [we(_("div", {
          class: wo(Ln("$--box"), Ln()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), _(De, {
          name: h || Ln("$-pop-" + y)
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
        return _(Ia, {
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
bn.install = function(e) {
  e.component(bn.name, bn);
};
var fS = bn, Es = {
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
} = ne("icon");
function pf(e, n) {
  return p(), he(
    _a(e.isURL(e.name) ? "img" : "i"),
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
var Is = ee({
  name: "VarIcon",
  props: Es,
  setup(e) {
    var n = B(""), r = B(!1), a = /* @__PURE__ */ function() {
      var t = ff(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || z(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Be(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, z(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return ie(() => e.name, a, {
      immediate: !0
    }), {
      n: cf,
      classes: mf,
      nextName: n,
      animateInProgress: r,
      isURL: Uv,
      toNumber: z,
      toSizeUnit: me
    };
  }
});
Is.render = pf;
const $e = Is;
$e.install = function(e) {
  e.component($e.name, $e);
};
var cS = $e;
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
var hf = No({
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
}, We(St, [
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
  pack: je,
  add: $i,
  use: Ti,
  merge: As
} = ki();
$i("zh-CN", Si);
Ti("zh-CN");
var mS = {
  zhCN: Si,
  enUS: Ns,
  packs: Ds,
  pack: je,
  add: $i,
  use: Ti,
  merge: As,
  useLocale: ki
};
const Ao = {
  zhCN: Si,
  enUS: Ns,
  packs: Ds,
  pack: je,
  add: $i,
  use: Ti,
  merge: As,
  useLocale: ki
};
var {
  n: gf,
  classes: yf
} = ne("action-sheet"), bf = ["onClick"];
function wf(e, n) {
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
          Te,
          null,
          Ae(e.actions, (o) => we((p(), O(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: q({
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
            )) : re("v-if", !0), A(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ae(o.name),
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
    ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var zs = ee({
  name: "VarActionSheet",
  directives: {
    Ripple: Ue
  },
  components: {
    VarPopup: bn,
    VarIcon: $e
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
        S(l, t), o && S(e["onUpdate:show"], !1);
      }
    }, a = (t) => S(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: gf,
      classes: yf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: je,
      dt: no,
      handleSelect: r
    };
  }
});
zs.render = wf;
const lr = zs;
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
var nr, Pi = {};
function Cf(e) {
  return e === void 0 && (e = {}), zo({}, Pi, e);
}
function Xn(e) {
  return Ct() ? new Promise((n) => {
    Xn.close();
    var r = Ie(Cf(e));
    r.teleport = "body", nr = r;
    var {
      unmountInstance: a
    } = xa(lr, r, {
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
  Pi = e;
};
Xn.resetDefaultOptions = function() {
  Pi = {};
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
var pS = lr;
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
} = ne("app-bar");
function Pf(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
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
        [Y(e.$slots, "left"), e.titlePosition === "left" ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
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
        )) : re("v-if", !0)],
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
      )) : re("v-if", !0), A(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
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
        )) : re("v-if", !0), Y(e.$slots, "right")],
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
var Ls = ee({
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
    return ln(o), xt(o), {
      n: $f,
      classes: Tf,
      formatElevation: dn,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ls.render = Pf;
const Mr = Ls;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var hS = Mr;
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
var Of = "background-image", Vf = "lazy-loading", Mf = "lazy-error", sl = "lazy-attempt", Bf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ro = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Wa = [], Wt = [], Rs = Yv(100), Fe = {
  loading: Ro,
  error: Ro,
  attempt: 3,
  throttleWait: 300,
  events: Bf
}, Oi = wi($t, Fe.throttleWait);
function io(e, n) {
  e._lazy.arg === Of ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Ef(e) {
  e._lazy.loading && io(e, e._lazy.loading), $t();
}
function If(e) {
  e._lazy.error && io(e, e._lazy.error), e._lazy.state = "error", Mi(e), $t();
}
function Us(e, n) {
  io(e, n), e._lazy.state = "success", Mi(e), $t();
}
function Nf(e) {
  var n;
  Wt.includes(e) || (Wt.push(e), (n = Fe.events) == null || n.forEach((r) => {
    e.addEventListener(r, Oi, {
      passive: !0
    });
  }));
}
function Df() {
  Wt.forEach((e) => {
    var n;
    (n = Fe.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Oi);
    });
  }), Wt.length = 0;
}
function Af(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Vf)) != null ? r : Fe.loading,
    error: (a = e.getAttribute(Mf)) != null ? a : Fe.error,
    attempt: e.getAttribute(sl) ? Number(e.getAttribute(sl)) : Fe.attempt
  };
  e._lazy = Lo({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), io(e, Ro), S(Fe.filter, e._lazy);
}
function zf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Rs.add(n), Us(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? If(e) : Hs(e);
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
    Ef(e), zf(e, n);
  }
}
function Vi(e) {
  return Uo.apply(this, arguments);
}
function Uo() {
  return Uo = oo(function* (e) {
    (yield Gv(e)) && Hs(e);
  }), Uo.apply(this, arguments);
}
function $t() {
  Wa.forEach((e) => Vi(e));
}
function Lf(e) {
  return Ho.apply(this, arguments);
}
function Ho() {
  return Ho = oo(function* (e) {
    !Wa.includes(e) && Wa.push(e), qv(e).forEach(Nf), yield Vi(e);
  }), Ho.apply(this, arguments);
}
function Mi(e) {
  Ft(Wa, e), Wa.length === 0 && Df();
}
function Rf(e, n) {
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
    Af(e, n), yield Lf(e);
  }), Fo.apply(this, arguments);
}
function Uf(e, n) {
  return Yo.apply(this, arguments);
}
function Yo() {
  return Yo = oo(function* (e, n) {
    if (!Rf(e, n)) {
      Wa.includes(e) && (yield Vi(e));
      return;
    }
    yield Fs(e, n);
  }), Yo.apply(this, arguments);
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
  Fe.events = n ?? Fe.events, Fe.loading = r ?? Fe.loading, Fe.error = a ?? Fe.error, Fe.attempt = t ?? Fe.attempt, Fe.throttleWait = o ?? Fe.throttleWait, Fe.filter = l;
}
var Ys = {
  mounted: Fs,
  unmounted: Mi,
  updated: Uf,
  install(e, n) {
    Hf(n), Oi = wi($t, Fe.throttleWait), e.directive("lazy", this);
  }
}, gS = Ys;
const vt = Ys;
function Ff(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var js = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ws(e) {
  return js(e) || en(e) || Re(e);
}
var Yf = {
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
  onClick: F(),
  onLoad: F(),
  onError: F()
}, {
  n: jf,
  classes: Wf
} = ne("avatar"), Gf = ["src", "lazy-loading", "lazy-error"], qf = ["src"];
function Xf(e, n) {
  var r = Me("lazy");
  return p(), O(
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
    [e.src ? (p(), O(
      Te,
      {
        key: 0
      },
      [e.lazy ? we((p(), O(
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
        Gf
      )), [[r, e.src]]) : (p(), O(
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
        qf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (p(), O(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: q({
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
var Gs = ee({
  name: "VarAvatar",
  directives: {
    Lazy: vt
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
      d ? (u._lazy.state === "success" && S(v, s), u._lazy.state === "error" && S(f, s)) : S(v, s);
    }, l = (s) => {
      S(e.onError, s);
    }, i = (s) => {
      S(e.onClick, s);
    };
    return ln(t), xt(t), {
      internalSizeValidator: js,
      sizeValidator: Ws,
      toSizeUnit: me,
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
Gs.render = Xf;
const Br = Gs;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var yS = Br, Kf = {
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
} = ne("avatar-group");
function Qf(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: q(e.rootStyles)
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var qs = ee({
  name: "VarAvatarGroup",
  props: Kf,
  setup(e) {
    var n = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": me(e.offset)
    });
    return {
      n: Zf,
      classes: Jf,
      toSizeUnit: me,
      rootStyles: n
    };
  }
});
qs.render = Qf;
const Er = qs;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var bS = Er;
function _f(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function xf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var tr = {
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
} = ne("loading"), rc = (e) => (Na(""), e = e(), Da(), e), ac = /* @__PURE__ */ rc(() => /* @__PURE__ */ A(
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
      )) : re("v-if", !0)],
      2
      /* CLASS */
    )) : re("v-if", !0), e.isShow ? (p(), O(
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
            style: q({
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
      )) : re("v-if", !0), (p(!0), O(
        Te,
        null,
        Ae(e.loadingTypeDict, (r, a) => (p(), O(
          Te,
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
              Te,
              null,
              Ae(r, (t) => (p(), O(
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
          )) : re("v-if", !0)],
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
          style: q({
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
      )) : re("v-if", !0)],
      2
      /* CLASS */
    )) : re("v-if", !0)],
    2
    /* CLASS */
  );
}
var Xs = ee({
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
      n: ec,
      classes: nc,
      multiplySizeUnit: _e,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Xs.render = oc;
const Vn = Xs;
Vn.install = function(e) {
  e.component(Vn.name, Vn);
};
var wS = Vn, ic = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: lc,
  classes: sc
} = ne("hover-overlay");
function uc(e, n) {
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
var Ks = ee({
  name: "VarHoverOverlay",
  props: ic,
  setup() {
    return {
      n: lc,
      classes: sc
    };
  }
});
Ks.render = uc;
const tn = Ks;
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
var CS = tn;
function Zs(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function dc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[cs(t)] = o, r;
  }, {}) : {};
}
function vc(e) {
  var {
    value: n
  } = e._hover, r = dc(e);
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
function fc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function Js(e) {
  fc(e), Bi(e, e._hover.rawStyle);
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
  }, vc(e), e.addEventListener("mouseenter", Qs), e.addEventListener("mouseleave", _s));
}
function eu(e, n) {
  Zs(n.arg) || (Js(e), e.removeEventListener("mouseenter", Qs), e.removeEventListener("mouseleave", _s));
}
function cc(e, n) {
  e._hover && eu(e, n);
}
function mc(e, n) {
  return !wt(n.value) && e._hover.hovering;
}
function pc(e, n) {
  xs(e, n), mc(e, n) && Bi(e, n.value);
}
var nu = {
  mounted: xs,
  unmounted: eu,
  beforeUpdate: cc,
  updated: pc,
  install(e) {
    e.directive("hover", this);
  }
}, SS = nu;
const Nn = nu;
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
function hc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function gc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var yc = {
  type: {
    type: String,
    validator: ru
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
  loadingType: We(tr, "type"),
  loadingSize: We(tr, "size"),
  loadingColor: jo({}, We(tr, "color"), {
    default: "currentColor"
  }),
  onClick: F(),
  onTouchstart: F()
}, au = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function bc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(au);
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
  } = sn(au);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: Cc,
  classes: Sc
} = ne("button"), kc = ["type", "disabled"];
function $c(e, n) {
  var r = te("var-loading"), a = te("var-hover-overlay"), t = Me("ripple"), o = Me("hover");
  return we((p(), O(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.states.elevation], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
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
    )) : re("v-if", !0), A(
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
    kc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var tu = ee({
  name: "VarButton",
  components: {
    VarLoading: Vn,
    VarHoverOverlay: tn
  },
  directives: {
    Ripple: Ue,
    Hover: Nn
  },
  props: yc,
  setup(e) {
    var n = B(!1), {
      buttonGroup: r
    } = wc(), {
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
      e.autoLoading && (n.value = !0, u = Se(u) ? u : [u], Promise.all(u).then(() => {
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
tu.render = $c;
const Ze = tu;
Ze.install = function(e) {
  e.component(Ze.name, Ze);
};
var kS = Ze, Tc = {
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
  n: Pc,
  classes: Oc
} = ne("back-top");
function Vc(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return p(), he(
    Ia,
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
var ou = ee({
  name: "VarBackTop",
  components: {
    VarButton: Ze,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Tc,
  setup(e) {
    var n = B(!1), r = B(null), a = B(!0), t, o = (d) => {
      S(e.onClick, d);
      var v = Ci(t);
      dt(t, {
        left: v,
        duration: e.duration,
        animation: ms
      });
    }, l = wi(() => {
      n.value = ut(t) >= Le(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? hs(e.target, "BackTop") : br(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return gt(() => {
      i(), s(), a.value = !1;
    }), $r(s), _t(u), Tr(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: me,
      n: Pc,
      classes: Oc,
      handleClick: o
    };
  }
});
ou.render = Vc;
const Ir = ou;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var $S = Ir;
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
} = ne("badge");
function Dc(e, n) {
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
          )) : re("v-if", !0), Y(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), O(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            ae(e.value),
            3
            /* TEXT, CLASS */
          )) : re("v-if", !0)])],
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
var iu = ee({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Ec,
  setup(e) {
    var n = R(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && z(r) > z(a) ? a + "+" : r;
    });
    return {
      n: Ic,
      classes: Nc,
      value: n
    };
  }
});
iu.render = Dc;
const sr = iu;
sr.install = function(e) {
  e.component(sr.name, sr);
};
var TS = sr, Ac = {
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
}, lu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function zc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(lu);
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
  n: Lc,
  classes: Rc
} = ne("bottom-navigation"), {
  n: lo
} = ne("bottom-navigation-item"), ul = lo("--right-half-space"), dl = lo("--left-half-space"), vl = lo("--right-space"), Uc = {
  type: "primary"
};
function Hc(e, n) {
  var r = te("var-button");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
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
    )) : re("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var su = ee({
  name: "VarBottomNavigation",
  components: {
    VarButton: Ze
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
    }, f = () => u.find((w) => {
      var {
        name: M
      } = w;
      return t.value === M.value;
    }), m = () => u.find((w) => {
      var {
        index: M
      } = w;
      return t.value === M.value;
    }), h = () => {
      en(t.value) && (t.value < 0 ? S(e["onUpdate:active"], 0) : t.value > s.value - 1 && S(e["onUpdate:active"], s.value - 1));
    }, y = (w) => {
      t.value !== w && (e.onBeforeChange ? g(w) : b(w));
    }, g = (w) => {
      var M = Oo(S(e.onBeforeChange, w));
      Promise.all(M).then((N) => {
        N.every(Boolean) && b(w);
      });
    }, b = (w) => {
      S(e["onUpdate:active"], w), S(e.onChange, w);
    }, V = () => {
      var w = I();
      w.forEach((M) => {
        M.classList.remove(ul, dl, vl);
      });
    }, $ = (w) => {
      var M = I(), N = M.length, C = w % 2 === 0;
      M.forEach((k, U) => {
        T(C, k, U, N);
      });
    }, T = (w, M, N, C) => {
      var k = N === C - 1;
      if (!w && k) {
        M.classList.add(vl);
        return;
      }
      var U = N === C / 2 - 1, Q = N === C / 2;
      U ? M.classList.add(ul) : Q && M.classList.add(dl);
    }, I = () => Array.from(a.value.querySelectorAll("." + lo())), P = () => {
      S(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: y
    };
    return d(D), ie(() => s.value, v), ie(() => e.fabProps, (w) => {
      i.value = Wo({}, Uc, w);
    }, {
      immediate: !0,
      deep: !0
    }), ln(() => {
      r.fab && $(s.value);
    }), xt(() => {
      V(), r.fab && $(s.value);
    }), {
      n: Lc,
      classes: Rc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: P,
      fabProps: i
    };
  }
});
su.render = Hc;
const Nr = su;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var PS = Nr, Fc = {
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
function Yc() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(lu);
  return r || Sn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: jc,
  classes: Wc
} = ne("bottom-navigation-item"), Gc = {
  type: "danger",
  dot: !0
};
function qc(e, n) {
  var r = te("var-icon"), a = te("var-badge"), t = Me("ripple");
  return we((p(), O(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: q({
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
    )) : re("v-if", !0), Y(e.$slots, "icon", {
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
    )) : re("v-if", !0), A(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? re("v-if", !0) : (p(), O(
        Te,
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
var uu = ee({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: sr,
    VarIcon: $e
  },
  directives: {
    Ripple: Ue
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
      S(e.onClick, h), S(o.onToggle, h);
    };
    return l(d), ie(() => r.value, (m) => {
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
uu.render = qc;
const Dr = uu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var OS = Dr, Xc = {
  separator: {
    type: String
  },
  onClick: F()
}, du = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Kc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(du);
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
  } = sn(du);
  return n || Sn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Jc,
  classes: Qc
} = ne("breadcrumb");
function _c(e, n) {
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
    ), e.isLast ? re("v-if", !0) : Y(e.$slots, "separator", {
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
var vu = ee({
  name: "VarBreadcrumb",
  props: Xc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Zc(), t = R(() => n.value === r.length.value - 1), o = R(() => r.separator.value), l = (i) => {
      t.value || S(e.onClick, i);
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
vu.render = _c;
const Ar = vu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var VS = Ar, xc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: em
} = ne("breadcrumbs");
function nm(e, n) {
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
var fu = ee({
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
fu.render = nm;
const zr = fu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var MS = zr;
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
} = ne("button-group");
function sm(e, n) {
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
var cu = ee({
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
      formatElevation: dn
    };
  }
});
cu.render = sm;
const Lr = cu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var BS = Lr;
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
  onClick: F(),
  "onUpdate:floating": F()
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
} = ne("card"), cm = 500, mm = ["src", "alt"];
function pm(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = Me("ripple");
  return we((p(), O(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
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
      [Y(e.$slots, "image", {}, () => [e.src ? (p(), O(
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
        mm
      )) : re("v-if", !0)]), A(
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
        )) : re("v-if", !0)]), Y(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ae(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : re("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : re("v-if", !0)]), e.$slots.extra ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [Y(e.$slots, "extra")],
          2
          /* CLASS */
        )) : re("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), O(
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
          [Y(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : re("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), O(
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
      )) : re("v-if", !0)],
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
var mu = ee({
  name: "VarCard",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: $e,
    VarButton: Ze
  },
  props: dm,
  setup(e) {
    var n = B(null), r = B(null), a = B("auto"), t = B("auto"), o = B("100%"), l = B("100%"), i = B("auto"), s = B("auto"), u = B(void 0), d = B("hidden"), v = B("0px"), f = B("0"), m = R(() => e.layout === "row"), h = B(!1), y = B(!1), {
      zIndex: g
    } = kt(() => e.floating, 1);
    to(() => e.floating, () => !m.value);
    var b = "auto", V = "auto", $ = null, T = B(null), I = /* @__PURE__ */ function() {
      var M = cl(function* () {
        clearTimeout(T.value), clearTimeout($), T.value = null, T.value = setTimeout(/* @__PURE__ */ cl(function* () {
          var {
            width: N,
            height: C,
            left: k,
            top: U
          } = n.value.getBoundingClientRect();
          a.value = me(N), t.value = me(C), o.value = a.value, l.value = t.value, i.value = me(U), s.value = me(k), u.value = "fixed", b = i.value, V = s.value, h.value = !0, yield In(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? cm : 0);
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), P = () => {
      clearTimeout($), clearTimeout(T.value), T.value = null, o.value = a.value, l.value = t.value, i.value = b, s.value = V, v.value = "0px", f.value = "0", h.value = !1, $ = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", b = "auto", V = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      S(e["onUpdate:floating"], !1);
    }, w = (M) => {
      S(e.onClick, M);
    };
    return ie(() => e.floating, (M) => {
      m.value || Be(() => {
        M ? I() : P();
      });
    }, {
      immediate: !0
    }), {
      n: vm,
      classes: fm,
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
      zIndex: g,
      isRow: m,
      close: D,
      showFloatingButtons: h,
      floated: y,
      formatElevation: dn,
      handleClick: w
    };
  }
});
mu.render = pm;
const Rr = mu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var ES = Rr, hm = {
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
  n: gm,
  classes: ym
} = ne("cell");
function bm(e, n) {
  var r = te("var-icon"), a = Me("ripple");
  return we((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
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
    )) : re("v-if", !0)]), A(
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
      )) : re("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ae(e.description),
        3
        /* TEXT, CLASS */
      )) : re("v-if", !0)])],
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
    )) : re("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var pu = ee({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: Ue
  },
  props: hm,
  setup(e) {
    var n = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": me(e.borderOffset),
      "--cell-border-right": me(e.borderOffset)
    }), r = (a) => {
      S(e.onClick, a);
    };
    return {
      n: gm,
      classes: ym,
      toSizeUnit: me,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
pu.render = bm;
const ur = pu;
ur.install = function(e) {
  e.component(ur.name, ur);
};
var IS = ur, wm = {
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
} = ne("form-details"), Sm = {
  key: 0
}, km = {
  key: 0
};
function $m(e, n) {
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
                Sm,
                ae(e.errorMessage),
                1
                /* TEXT */
              )) : re("v-if", !0)]),
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
                km,
                ae(e.extraMessage),
                1
                /* TEXT */
              )) : re("v-if", !0)]),
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
      )) : re("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var hu = ee({
  name: "VarFormDetails",
  props: wm,
  setup: () => ({
    n: Cm
  })
});
hu.render = $m;
const qe = hu;
qe.install = function(e) {
  e.component(qe.name, qe);
};
var NS = qe, Tm = {
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
}, gu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Pm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(gu);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Om() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(gu);
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
  } = sn(yu), a = Ja(), t = r ? (o) => {
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
function Vm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(yu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: Mm,
  classes: Bm
} = ne("checkbox");
function Em(e, n) {
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
          style: q({
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
var bu = ee({
  name: "VarCheckbox",
  directives: {
    Ripple: Ue,
    Hover: Nn
  },
  components: {
    VarIcon: $e,
    VarFormDetails: qe,
    VarHoverOverlay: tn
  },
  props: Tm,
  setup(e) {
    var n = B(!1), r = R(() => n.value === e.checkedValue), a = R(() => e.checkedValue), t = B(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Om(), {
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
      resetValidation: h
    } = kn(), y = (w) => {
      Be(() => {
        var {
          validateTrigger: M,
          rules: N,
          modelValue: C
        } = e;
        f(M, w, N, C);
      });
    }, g = (w) => {
      n.value = w;
      var {
        checkedValue: M,
        onChange: N
      } = e;
      S(e["onUpdate:modelValue"], n.value), S(N, n.value), y("onChange"), w === M ? o == null || o.onChecked(M) : o == null || o.onUnchecked(M);
    }, b = (w) => {
      var {
        disabled: M,
        readonly: N,
        checkedValue: C,
        uncheckedValue: k,
        onClick: U
      } = e;
      if (!(u != null && u.disabled.value || M) && (S(U, w), !(u != null && u.readonly.value || N))) {
        t.value = !0;
        var Q = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && Q || g(r.value ? k : C);
      }
    }, V = (w) => {
      var {
        checkedValue: M,
        uncheckedValue: N
      } = e;
      n.value = w.includes(M) ? M : N;
    }, $ = () => {
      t.value = !1;
    }, T = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), h();
    }, I = (w) => {
      var {
        checkedValue: M,
        uncheckedValue: N
      } = e, C = ![M, N].includes(w);
      C && (w = r.value ? N : M), g(w);
    }, P = () => m(e.rules, e.modelValue);
    ie(() => e.modelValue, (w) => {
      n.value = w;
    }, {
      immediate: !0
    });
    var D = {
      checkedValue: a,
      checked: r,
      sync: V,
      validate: P,
      resetValidation: h,
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
      n: Mm,
      classes: Bm,
      handleClick: b,
      toggle: I,
      reset: T,
      validate: P,
      resetValidation: h
    };
  }
});
bu.render = Em;
const dr = bu;
dr.install = function(e) {
  e.component(dr.name, dr);
};
var DS = dr;
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Dm,
  classes: Am
} = ne("checkbox-group");
function zm(e, n) {
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
var wu = ee({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: qe
  },
  props: Nm,
  setup(e) {
    var n = R(() => e.max), r = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Pm(), {
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
          validateTrigger: w,
          rules: M,
          modelValue: N
        } = e;
        s(w, D, M, N);
      });
    }, m = (D) => {
      S(e["onUpdate:modelValue"], D), S(e.onChange, D), f("onChange");
    }, h = (D) => {
      var {
        modelValue: w
      } = e;
      w.includes(D) || m([...w, D]);
    }, y = (D) => {
      var {
        modelValue: w
      } = e;
      w.includes(D) && m(w.filter((M) => M !== D));
    }, g = () => t.forEach((D) => {
      var {
        sync: w
      } = D;
      return w(e.modelValue);
    }), b = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, V = () => {
      var D = t.map((M) => {
        var {
          checkedValue: N
        } = M;
        return N.value;
      }), w = Ki(D);
      return b(), S(e["onUpdate:modelValue"], w), w;
    }, $ = () => {
      var D = t.filter((M) => {
        var {
          checked: N
        } = M;
        return !N.value;
      }).map((M) => {
        var {
          checkedValue: N
        } = M;
        return N.value;
      }), w = Ki(D);
      return b(), S(e["onUpdate:modelValue"], w), w;
    }, T = () => {
      S(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, g, {
      deep: !0
    }), ie(() => a.value, g);
    var P = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: y,
      validate: I,
      resetValidation: d,
      reset: T,
      errorMessage: v
    };
    return o(P), S(l, P), {
      errorMessage: i,
      n: Dm,
      classes: Am,
      checkAll: V,
      inverseAll: $,
      reset: T,
      validate: I,
      resetValidation: d
    };
  }
});
wu.render = zm;
const Ur = wu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var AS = Ur;
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
  iconName: We(Es, "name"),
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
  classes: Hm
} = ne("chip");
function Fm(e, n) {
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
        )) : re("v-if", !0)],
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
var Cu = ee({
  name: "VarChip",
  components: {
    VarIcon: $e
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
      } = e, u = Jn(o ? "$--flex" : "$--inline-flex"), d = i ? Jn("plain") + " " + Jn("plain-" + l) : Jn("--" + l), v = s ? Jn("--round") : null;
      return [Jn("--" + t), u, d, v];
    }), a = (t) => {
      S(e.onClose, t);
    };
    return {
      n: Jn,
      classes: Hm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Cu.render = Fm;
const vr = Cu;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var zS = vr;
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
  onClick: F()
}, Su = Symbol("ROW_BIND_COL_KEY");
function qm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Su);
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
  } = sn(Su);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: Mt,
  classes: Km
} = ne("col");
function Zm(e, n) {
  return p(), O(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var ku = ee({
  name: "VarCol",
  props: Gm,
  setup(e) {
    var n = B({
      left: 0,
      right: 0
    }), r = R(() => z(e.span)), a = R(() => z(e.offset)), {
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
      if (bi(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Mt("--span-" + u + "-" + m)), f && v.push(Mt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Mt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      S(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), S(o, l), {
      n: Mt,
      classes: Km,
      padding: n,
      toNumber: z,
      toSizeUnit: me,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Yt
    };
  }
});
ku.render = Zm;
const Hr = ku;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var LS = Hr, $u = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Jm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un($u);
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: _m
} = ne("collapse");
function xm(e, n) {
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
var Tu = ee({
  name: "VarCollapse",
  props: Qm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Jm(), t = R(() => e.modelValue), o = R(() => e.offset), l = R(() => e.divider), i = R(() => e.elevation), s = () => !e.accordion && !Se(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Se(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (y, g) => s() ? g ? e.accordion ? y : [...e.modelValue, y] : e.accordion ? null : e.modelValue.filter((b) => b !== y) : null, d = (y, g) => {
      var b = u(y, g);
      S(e["onUpdate:modelValue"], b), S(e.onChange, b);
    }, v = () => {
      if (e.accordion)
        return r.find((g) => {
          var {
            name: b
          } = g;
          return e.modelValue === b.value;
        });
      var y = r.filter((g) => {
        var {
          name: b
        } = g;
        return b.value === void 0 ? !1 : e.modelValue.includes(b.value);
      });
      return y.length ? y : void 0;
    }, f = () => e.accordion ? r.find((y) => {
      var {
        index: g,
        name: b
      } = y;
      return b.value === void 0 && e.modelValue === g.value;
    }) : r.filter((y) => {
      var {
        index: g,
        name: b
      } = y;
      return b.value === void 0 && e.modelValue.includes(g.value);
    }), m = () => {
      if (s()) {
        var y = v() || f();
        if (e.accordion && !y || !e.accordion && !y.length) {
          r.forEach((g) => {
            g.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((g) => {
          var b = e.accordion ? y === g : y.includes(g);
          g.init(e.accordion, b);
        });
      }
    }, h = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(h), ie(() => n.value, () => Be().then(m)), ie(() => e.modelValue, () => Be().then(m)), {
      n: _m,
      divider: l
    };
  }
});
Tu.render = xm;
const Fr = Tu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var RS = Fr;
function ep() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn($u);
  return r || Sn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
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
} = ne("collapse-item");
function tp(e, n) {
  var r = te("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: q("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
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
var Pu = ee({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
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
    } = r, m = R(() => e.name), h = (I, P) => {
      s.value === void 0 || I && Se(s.value) || P === i.value || (i.value = P, y(!0));
    }, y = (I) => {
      e.disabled || I || f(e.name || n.value, !i.value);
    }, g = () => {
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
      init: h
    };
    return a(T), ie(i, (I) => {
      I ? g() : V();
    }), {
      n: rp,
      start: b,
      classes: ap,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: y,
      contentEl: o,
      transitionend: $,
      formatElevation: dn
    };
  }
});
Pu.render = tp;
const Yr = Pu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var US = Yr, op = {
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
  n: ip
} = ne("countdown"), qo = 1e3, Xo = 60 * qo, Ko = 60 * Xo, ml = 24 * Ko;
function lp(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default", bt(eo(e.timeData)), () => [be(
      ae(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Ou = ee({
  name: "VarCountdown",
  props: op,
  setup(e) {
    var n = B(""), r = B({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (h, y) => {
      var g = Object.values(y), b = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if (b.forEach((T, I) => {
        h.includes(T) ? h = h.replace(T, Va("" + g[I], 2, "0")) : g[I + 1] += g[I] * V[I];
      }), h.includes("S")) {
        var $ = Va("" + g[g.length - 1], 3, "0");
        h.includes("SSS") ? h = h.replace("SSS", $) : h.includes("SS") ? h = h.replace("SS", $.slice(0, 2)) : h = h.replace("S", $.slice(0, 1));
      }
      return h;
    }, u = (h) => {
      var y = Math.floor(h / ml), g = Math.floor(h % ml / Ko), b = Math.floor(h % Ko / Xo), V = Math.floor(h % Xo / qo), $ = Math.floor(h % qo), T = {
        days: y,
        hours: g,
        minutes: b,
        seconds: V,
        milliseconds: $
      };
      r.value = T, S(e.onChange, r.value), n.value = s(e.format, T);
    }, d = () => {
      var {
        time: h,
        onEnd: y
      } = e, g = performance.now();
      if (a || (a = g + z(h)), l = a - g, l < 0 && (l = 0), u(l), l === 0) {
        S(y);
        return;
      }
      t && (o = yn(d));
    }, v = function(h) {
      h === void 0 && (h = !1), !(t && !h) && (t = !0, a = performance.now() + (l || z(e.time)), d());
    }, f = () => {
      t = !1, rl(o);
    }, m = () => {
      a = 0, t = !1, rl(o), d();
    };
    return ie(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), $r(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), Tr(() => {
      i = t, f();
    }), Qa(f), {
      showTime: n,
      timeData: r,
      n: ip,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Ou.render = lp;
const jr = Ou;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var HS = jr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ra = 9e15, Pr = 1e9, Zo = "0123456789abcdef", Gt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", qt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Jo = {
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
  minE: -Ra,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ra,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Vu, Un, ce = !0, so = "[DecimalError] ", Sr = so + "Invalid argument: ", Mu = so + "Precision limit exceeded", Bu = so + "crypto unavailable", Eu = "[object Decimal]", Je = Math.floor, Ye = Math.pow, sp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, up = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, dp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Iu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Mn = 1e7, ve = 7, vp = 9007199254740991, fp = Gt.length - 1, Qo = qt.length - 1, X = { toStringTag: Eu };
X.absoluteValue = X.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), de(e);
};
X.ceil = function() {
  return de(new this.constructor(this), this.e + 1, 2);
};
X.clampedTo = X.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(Sr + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = cp(a, Lu(a, r)), a.precision = e, a.rounding = n, de(Un == 2 || Un == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
X.cubeRoot = X.cbrt = function() {
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
X.decimalPlaces = X.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Je(this.e / ve)) * ve, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
X.dividedBy = X.div = function(e) {
  return Oe(this, new this.constructor(e));
};
X.dividedToIntegerBy = X.divToInt = function(e) {
  var n = this, r = n.constructor;
  return de(Oe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
X.equals = X.eq = function(e) {
  return this.cmp(e) === 0;
};
X.floor = function() {
  return de(new this.constructor(this), this.e + 1, 3);
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
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / vo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ga(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return de(o, l.precision = r, l.rounding = a, !0);
};
X.hyperbolicSine = X.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ga(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / vo(5, e)), t = Ga(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, de(t, n, r, !0);
};
X.hyperbolicTangent = X.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Oe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
X.inverseCosine = X.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? On(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? On(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = On(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
X.inverseHyperbolicCosine = X.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, ce = !1, r = r.times(r).minus(1).sqrt().plus(r), ce = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
X.inverseHyperbolicSine = X.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, ce = !1, r = r.times(r).plus(1).sqrt().plus(r), ce = !0, a.precision = e, a.rounding = n, r.ln());
};
X.inverseHyperbolicTangent = X.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? de(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Oe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
X.inverseSine = X.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = On(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
X.inverseTangent = X.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Qo)
      return l = On(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Qo)
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
X.isFinite = function() {
  return !!this.d;
};
X.isInteger = X.isInt = function() {
  return !!this.d && Je(this.e / ve) > this.d.length - 2;
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
  if (ce = !1, i = v + m, l = or(u, i), a = n ? Xt(d, i + 10) : or(e, i), s = Oe(l, a, i, 1), ft(s.d, t = v, f))
    do
      if (i += 10, l = or(u, i), a = n ? Xt(d, i + 10) : or(e, i), s = Oe(l, a, i, 1), !o) {
        +Ke(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = de(s, v + 1, 0));
        break;
      }
    while (ft(s.d, t += 10, f));
  return ce = !0, de(s, v, f);
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
  return u[0] ? (e.d = u, e.e = uo(u, r), ce ? de(e, i, s) : e) : new h(s === 3 ? -0 : 0);
};
X.modulo = X.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? de(new a(r), a.precision, a.rounding) : (ce = !1, a.modulo == 9 ? (n = Oe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Oe(r, e, 0, a.modulo, 1), n = n.times(e), ce = !0, r.minus(n));
};
X.naturalExponential = X.exp = function() {
  return _o(this);
};
X.naturalLogarithm = X.ln = function() {
  return or(this);
};
X.negated = X.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, de(e);
};
X.plus = X.add = function(e) {
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
  return e.d = u, e.e = uo(u, a), ce ? de(e, i, s) : e;
};
X.precision = X.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Sr + e);
  return r.d ? (n = Nu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
X.round = function() {
  var e = this, n = e.constructor;
  return de(new n(e), e.e + 1, n.rounding);
};
X.sine = X.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = pp(a, Lu(a, r)), a.precision = e, a.rounding = n, de(Un > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.squareRoot = X.sqrt = function() {
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
X.tangent = X.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Oe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, de(Un == 2 || Un == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.times = X.mul = function(e) {
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
  return n ? ++r : o.shift(), e.d = o, e.e = uo(o, r), ce ? de(e, v.precision, v.rounding) : e;
};
X.toBinary = function(e, n) {
  return Ei(this, 2, e, n);
};
X.toDecimalPlaces = X.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (on(e, 0, Pr), n === void 0 ? n = a.rounding : on(n, 0, 8), de(r, e + r.e + 1, n));
};
X.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Dn(a, !0) : (on(e, 0, Pr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = de(new t(a), e + 1, n), r = Dn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Dn(t) : (on(e, 0, Pr), n === void 0 ? n = o.rounding : on(n, 0, 8), a = de(new o(t), e + t.e + 1, n), r = Dn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
X.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, h = m.d, y = m.constructor;
  if (!h)
    return new y(m);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = Nu(h) - m.e - 1, l = o % ve, n.d[0] = Ye(10, l < 0 ? ve + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new y(e), !i.isInt() || i.lt(u))
      throw Error(Sr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (ce = !1, i = new y(Ke(h)), d = y.precision, y.precision = o = h.length * ve * 2; v = Oe(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Oe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Oe(u, a, o, 1).minus(m).abs().cmp(Oe(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], y.precision = d, ce = !0, f;
};
X.toHexadecimal = X.toHex = function(e, n) {
  return Ei(this, 16, e, n);
};
X.toNearest = function(e, n) {
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
X.toNumber = function() {
  return +this;
};
X.toOctal = function(e, n) {
  return Ei(this, 8, e, n);
};
X.toPower = X.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ye(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return de(i, a, o);
  if (n = Je(e.e / ve), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= vp)
    return t = Du(s, i, r, a), e.s < 0 ? new s(1).div(t) : de(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Ye(+i, u), n = r == 0 || !isFinite(r) ? Je(u * (Math.log("0." + Ke(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (ce = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = _o(e.times(or(i, a + r)), a), t.d && (t = de(t, a + 5, 1), ft(t.d, a, o) && (n = a + 10, t = de(_o(e.times(or(i, n + r)), n), n + 5, 1), +Ke(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = de(t, a + 1, 0)))), t.s = l, ce = !0, s.rounding = o, de(t, a, o));
};
X.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Dn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (on(e, 1, Pr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = de(new t(a), e, n), r = Dn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toSignificantDigits = X.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (on(e, 1, Pr), n === void 0 ? n = a.rounding : on(n, 0, 8)), de(new a(r), e, n);
};
X.toString = function() {
  var e = this, n = e.constructor, r = Dn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
X.truncated = X.trunc = function() {
  return de(new this.constructor(this), this.e + 1, 1);
};
X.valueOf = X.toJSON = function() {
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
function ft(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += ve, t = 0) : (t = Math.ceil((n + 1) / ve), n %= ve), o = Ye(10, ve - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ye(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ye(10, n - 3) - 1, l;
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
function cp(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / vo(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ga(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, m, h, y, g, b, V, $, T, I, P, D, w, M, N, C, k, U = a.constructor, Q = a.s == t.s ? 1 : -1, x = a.d, j = t.d;
    if (!x || !x[0] || !j || !j[0])
      return new U(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (x ? j && x[0] == j[0] : !j) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          x && x[0] == 0 || !j ? Q * 0 : Q / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Mn, m = ve, d = Je(a.e / m) - Je(t.e / m)), C = j.length, M = x.length, b = new U(Q), V = b.d = [], v = 0; j[v] == (x[v] || 0); v++)
      ;
    if (j[v] > (x[v] || 0) && d--, o == null ? (P = o = U.precision, l = U.rounding) : i ? P = o + (a.e - t.e) + 1 : P = o, P < 0)
      V.push(1), h = !0;
    else {
      if (P = P / m + 2 | 0, v = 0, C == 1) {
        for (f = 0, j = j[0], P++; (v < M || f) && P--; v++)
          D = f * s + (x[v] || 0), V[v] = D / j | 0, f = D % j | 0;
        h = f || v < M;
      } else {
        for (f = s / (j[0] + 1) | 0, f > 1 && (j = e(j, f, s), x = e(x, f, s), C = j.length, M = x.length), w = C, $ = x.slice(0, C), T = $.length; T < C; )
          $[T++] = 0;
        k = j.slice(), k.unshift(0), N = j[0], j[1] >= s / 2 && ++N;
        do
          f = 0, u = n(j, $, C, T), u < 0 ? (I = $[0], C != T && (I = I * s + ($[1] || 0)), f = I / N | 0, f > 1 ? (f >= s && (f = s - 1), y = e(j, f, s), g = y.length, T = $.length, u = n(y, $, g, T), u == 1 && (f--, r(y, C < g ? k : j, g, s))) : (f == 0 && (u = f = 1), y = j.slice()), g = y.length, g < T && y.unshift(0), r($, y, T, s), u == -1 && (T = $.length, u = n(j, $, C, T), u < 1 && (f++, r($, C < T ? k : j, T, s))), T = $.length) : u === 0 && (f++, $ = [0]), V[v++] = f, u && $[0] ? $[T++] = x[w] || 0 : ($ = [x[w]], T = 1);
        while ((w++ < M || $[0] !== void 0) && P--);
        h = $[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      b.e = d, Vu = h;
    else {
      for (v = 1, f = V[0]; f >= 10; f /= 10)
        v++;
      b.e = v + d * m - 1, de(b, i ? o + b.e + 1 : o, l, h);
    }
    return b;
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
    return zu(e);
  var a, t = e.e, o = Ke(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + _n(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + _n(-t - 1) + o, r && (a = r - l) > 0 && (o += _n(a))) : t >= l ? (o += _n(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + _n(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += _n(a))), o;
}
function uo(e, n) {
  var r = e[0];
  for (n *= ve; r >= 10; r /= 10)
    n++;
  return n;
}
function Xt(e, n, r) {
  if (n > fp)
    throw ce = !0, r && (e.precision = r), Error(Mu);
  return de(new e(Gt), n, 1, !0);
}
function On(e, n, r) {
  if (n > Qo)
    throw Error(Mu);
  return de(new e(qt), n, r, !0);
}
function Nu(e) {
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
function Du(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / ve + 4);
  for (ce = !1; ; ) {
    if (r % 2 && (o = o.times(n), hl(o.d, l) && (t = !0)), r = Je(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), hl(n.d, l);
  }
  return ce = !0, o;
}
function pl(e) {
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
function _o(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ce = !1, s = h) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ye(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = de(o.times(e), s, 1), r = r.times(++d), i = l.plus(Oe(o, r, s, 1)), Ke(i.d).slice(0, s) === Ke(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = de(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && ft(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return de(l, f.precision = h, m, ce = !0);
      else
        return f.precision = h, l;
    }
    l = i;
  }
}
function or(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, h = 10, y = e, g = y.d, b = y.constructor, V = b.rounding, $ = b.precision;
  if (y.s < 0 || !g || !g[0] || !y.e && g[0] == 1 && g.length == 1)
    return new b(g && !g[0] ? -1 / 0 : y.s != 1 ? NaN : g ? 0 : y);
  if (n == null ? (ce = !1, d = $) : d = n, b.precision = d += h, r = Ke(g), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = Ke(y.d), a = r.charAt(0), m++;
    o = y.e, a > 1 ? (y = new b("0." + r), o++) : y = new b(a + "." + r.slice(1));
  } else
    return u = Xt(b, d + 2, $).times(o + ""), y = or(new b(a + "." + r.slice(1)), d - h).plus(u), b.precision = $, n == null ? de(y, $, V, ce = !0) : y;
  for (v = y, s = l = y = Oe(y.minus(1), y.plus(1), d, 1), f = de(y.times(y), d, 1), t = 3; ; ) {
    if (l = de(l.times(f), d, 1), u = s.plus(Oe(l, new b(t), d, 1)), Ke(u.d).slice(0, d) === Ke(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Xt(b, d + 2, $).times(o + ""))), s = Oe(s, new b(m), d, 1), n == null)
        if (ft(s.d, d - h, V, i))
          b.precision = d += h, u = l = y = Oe(v.minus(1), v.plus(1), d, 1), f = de(y.times(y), d, 1), t = i = 1;
        else
          return de(s, b.precision = $, V, ce = !0);
      else
        return b.precision = $, s;
    s = u, t += 2;
  }
}
function zu(e) {
  return String(e.s * e.s / 0);
}
function xo(e, n) {
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
function mp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Iu.test(n))
      return xo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (up.test(n))
    r = 16, n = n.toLowerCase();
  else if (sp.test(n))
    r = 2;
  else if (dp.test(n))
    r = 8;
  else
    throw Error(Sr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = Du(a, new a(r), o, o * 2)), u = zt(n, r, Mn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = uo(u, d), e.d = u, ce = !1, l && (e = Oe(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ye(2, s) : ir.pow(2, s))), ce = !0, e);
}
function pp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ga(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / vo(5, r)), n = Ga(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Ga(e, n, r, a, t) {
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
function vo(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Lu(e, n) {
  var r, a = n.s < 0, t = On(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Un = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Un = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Un = pl(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Un = pl(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ei(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, h = r !== void 0;
  if (h ? (on(r, 1, Pr), a === void 0 ? a = m.rounding : on(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = zu(e);
  else {
    for (d = Dn(e), l = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = zt(Dn(f), 10, t), f.e = f.d.length), v = zt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Oe(e, f, r, a, 0, t), v = e.d, o = e.e, u = Vu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Zo.charAt(v[l]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = zt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Zo.charAt(v[l]);
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
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = On(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? On(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = On(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Oe(e, n, o, 1)), n = On(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Oe(e, n, o, 1)), r;
}
function Tp(e) {
  return new this(e).cbrt();
}
function Pp(e) {
  return de(e = new this(e), e.e + 1, 2);
}
function Op(e, n, r) {
  return new this(e).clamp(n, r);
}
function Vp(e) {
  if (!e || typeof e != "object")
    throw Error(so + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Pr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ra,
    0,
    "toExpPos",
    0,
    Ra,
    "maxE",
    0,
    Ra,
    "minE",
    -Ra,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = Jo[r]), (a = e[r]) !== void 0)
      if (Je(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(Sr + r + ": " + a);
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
      throw Error(Sr + r + ": " + a);
  return this;
}
function Mp(e) {
  return new this(e).cos();
}
function Bp(e) {
  return new this(e).cosh();
}
function Ru(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, gl(o)) {
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
      return xo(u, o.toString());
    } else if (s !== "string")
      throw Error(Sr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Iu.test(o) ? xo(u, o) : mp(u, o);
  }
  if (t.prototype = X, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Vp, t.clone = Ru, t.isDecimal = gl, t.abs = hp, t.acos = gp, t.acosh = yp, t.add = bp, t.asin = wp, t.asinh = Cp, t.atan = Sp, t.atanh = kp, t.atan2 = $p, t.cbrt = Tp, t.ceil = Pp, t.clamp = Op, t.cos = Mp, t.cosh = Bp, t.div = Ep, t.exp = Ip, t.floor = Np, t.hypot = Dp, t.ln = Ap, t.log = zp, t.log10 = Rp, t.log2 = Lp, t.max = Up, t.min = Hp, t.mod = Fp, t.mul = Yp, t.pow = jp, t.random = Wp, t.round = Gp, t.sign = qp, t.sin = Xp, t.sinh = Kp, t.sqrt = Zp, t.sub = Jp, t.sum = Qp, t.tan = _p, t.tanh = xp, t.trunc = eh, e === void 0 && (e = {}), e && e.defaults !== !0)
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
  return de(e = new this(e), e.e + 1, 3);
}
function Dp() {
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
function gl(e) {
  return e instanceof ir || e && e.toStringTag === Eu || !1;
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
  return Au(this, arguments, "lt");
}
function Hp() {
  return Au(this, arguments, "gt");
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
  if (e === void 0 ? e = this.precision : on(e, 1, Pr), a = Math.ceil(e / ve), this.crypto)
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
function Gp(e) {
  return de(e = new this(e), e.e + 1, this.rounding);
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
  for (ce = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ce = !0, de(r, this.precision, this.rounding);
}
function _p(e) {
  return new this(e).tan();
}
function xp(e) {
  return new this(e).tanh();
}
function eh(e) {
  return de(e = new this(e), e.e + 1, 1);
}
X[Symbol.for("nodejs.util.inspect.custom")] = X.toString;
X[Symbol.toStringTag] = "Decimal";
var ir = X.constructor = Ru(Jo);
Gt = new ir(Gt);
qt = new ir(qt);
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
  onBeforeChange: F(),
  onChange: F(),
  onIncrement: F(),
  onDecrement: F(),
  "onUpdate:modelValue": F()
}, {
  n: rh,
  classes: ah
} = ne("counter"), yl = 100, bl = 600, th = ["inputmode", "readonly", "disabled"];
function oh(e, n) {
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
          style: q({
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
        th
      ), [[Dv, e.inputValue]]), _(
        a,
        {
          class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: q({
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
var Uu = ee({
  name: "VarCounter",
  components: {
    VarButton: Ze,
    VarIcon: $e,
    VarFormDetails: qe
  },
  directives: {
    Ripple: Ue
  },
  inheritAttrs: !1,
  props: nh,
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
    } = a ?? {}, d, v, f, m, h = () => l(e.rules, e.modelValue), y = (j) => {
      Be(() => {
        var {
          validateTrigger: W,
          rules: le,
          modelValue: G
        } = e;
        o(W, j, le, G);
      });
    }, g = () => {
      var {
        min: j
      } = e;
      S(e["onUpdate:modelValue"], j != null ? z(j) : 0), i();
    }, b = {
      reset: g,
      validate: h,
      resetValidation: i
    }, V = R(() => {
      var {
        max: j,
        modelValue: W
      } = e;
      return j != null && z(W) >= z(j);
    }), $ = R(() => {
      var {
        min: j,
        modelValue: W
      } = e;
      return j != null && z(W) <= z(j);
    }), T = (j) => {
      var {
        decimalLength: W,
        max: le,
        min: G
      } = e, E = z(j);
      return le != null && E > z(le) && (E = z(le)), G != null && E < z(G) && (E = z(G)), j = String(E), W != null && (j = E.toFixed(z(W))), j;
    }, I = (j) => {
      var {
        lazyChange: W,
        onBeforeChange: le
      } = e, {
        value: G
      } = j.target, E = T(G);
      W ? S(le, z(E), x) : Q(E), y("onInputChange");
    }, P = () => {
      var {
        disabled: j,
        readonly: W,
        disableDecrement: le,
        decrementButton: G,
        lazyChange: E,
        step: L,
        modelValue: Z,
        onDecrement: H,
        onBeforeChange: K
      } = e;
      if (!(u != null && u.value || s != null && s.value || j || W || le || !G) && !$.value) {
        var J = new ir(z(Z)).minus(new ir(z(L))).toString(), fe = T(J), ge = z(fe);
        S(H, ge), E ? S(K, ge, x) : (Q(fe), y("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: j,
        readonly: W,
        disableIncrement: le,
        incrementButton: G,
        lazyChange: E,
        step: L,
        modelValue: Z,
        onIncrement: H,
        onBeforeChange: K
      } = e;
      if (!(u != null && u.value || s != null && s.value || j || W || le || !G) && !V.value) {
        var J = new ir(z(Z)).plus(new ir(z(L))).toString(), fe = T(J), ge = z(fe);
        S(H, ge), E ? S(K, ge, x) : (Q(fe), y("onIncrement"));
      }
    }, w = () => {
      var {
        press: j,
        lazyChange: W
      } = e;
      !j || W || (m = window.setTimeout(() => {
        U();
      }, bl));
    }, M = () => {
      var {
        press: j,
        lazyChange: W
      } = e;
      !j || W || (f = window.setTimeout(() => {
        k();
      }, bl));
    }, N = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, C = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, k = () => {
      d = window.setTimeout(() => {
        D(), k();
      }, yl);
    }, U = () => {
      v = window.setTimeout(() => {
        P(), U();
      }, yl);
    }, Q = (j) => {
      n.value = j;
      var W = z(j);
      S(e["onUpdate:modelValue"], W);
    }, x = (j) => {
      Q(T(String(j))), y("onLazyChange");
    };
    return S(r, b), ie(() => e.modelValue, (j) => {
      Q(T(String(j))), S(e.onChange, z(j));
    }), Q(T(String(e.modelValue))), {
      n: rh,
      classes: ah,
      formatElevation: dn,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: $,
      validate: h,
      reset: g,
      resetValidation: i,
      handleChange: I,
      decrement: P,
      increment: D,
      pressDecrement: w,
      pressIncrement: M,
      releaseDecrement: N,
      releaseIncrement: C,
      toSizeUnit: me,
      toNumber: z
    };
  }
});
Uu.render = oh;
const Wr = Uu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var FS = Wr, Hu = 60, Fu = Hu * 60, Yu = Fu * 24, ih = Yu * 7, qa = 1e3, Co = Hu * qa, wl = Fu * qa, lh = Yu * qa, sh = ih * qa, Ii = "millisecond", Ua = "second", Ha = "minute", Fa = "hour", xn = "day", Lt = "week", Pn = "month", ju = "quarter", er = "year", Ya = "date", uh = "YYYY-MM-DDTHH:mm:ssZ", Cl = "Invalid Date", dh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, vh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const fh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ei = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, ch = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + ei(t, 2, "0") + ":" + ei(o, 2, "0");
}, mh = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Pn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Pn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, ph = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, hh = function(n) {
  var r = {
    M: Pn,
    y: er,
    w: Lt,
    d: xn,
    D: Ya,
    h: Fa,
    m: Ha,
    s: Ua,
    ms: Ii,
    Q: ju
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, gh = function(n) {
  return n === void 0;
};
const yh = {
  s: ei,
  z: ch,
  m: mh,
  a: ph,
  p: hh,
  u: gh
};
var tt = "en", Gr = {};
Gr[tt] = fh;
var Ni = function(n) {
  return n instanceof fo;
}, Kt = function e(n, r, a) {
  var t;
  if (!n)
    return tt;
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
  return !a && t && (tt = t), t || !a && tt;
}, oe = function(n, r) {
  if (Ni(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new fo(a);
}, bh = function(n, r) {
  return oe(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Pe = yh;
Pe.l = Kt;
Pe.i = Ni;
Pe.w = bh;
var wh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Pe.u(r))
    return new Date();
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
}, fo = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Kt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = wh(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Pe;
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
    return Pe.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Pe.u(t) ? !0 : t, i = Pe.p(a), s = function(b, V) {
      var $ = Pe.w(o.$u ? Date.UTC(o.$y, V, b) : new Date(o.$y, V, b), o);
      return l ? $ : $.endOf(xn);
    }, u = function(b, V) {
      var $ = [0, 0, 0, 0], T = [23, 59, 59, 999];
      return Pe.w(o.toDate()[b].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? $ : T).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case er:
        return l ? s(1, 0) : s(31, 11);
      case Pn:
        return l ? s(1, v) : s(0, v + 1);
      case Lt: {
        var h = this.$locale().weekStart || 0, y = (d < h ? d + 7 : d) - h;
        return s(l ? f - y : f + (6 - y), v);
      }
      case xn:
      case Ya:
        return u(m + "Hours", 0);
      case Fa:
        return u(m + "Minutes", 1);
      case Ha:
        return u(m + "Seconds", 2);
      case Ua:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Pe.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[xn] = i + "Date", o[Ya] = i + "Date", o[Pn] = i + "Month", o[er] = i + "FullYear", o[Fa] = i + "Hours", o[Ha] = i + "Minutes", o[Ua] = i + "Seconds", o[Ii] = i + "Milliseconds", o)[l], u = l === xn ? this.$D + (t - this.$W) : t;
    if (l === Pn || l === er) {
      var d = this.clone().set(Ya, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Ya, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (i === Lt)
      return s(7);
    var u = (l = {}, l[Ha] = Co, l[Fa] = wl, l[Ua] = qa, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Pe.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Cl;
    var l = a || uh, i = Pe.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, h = function($, T, I, P) {
      return $ && ($[T] || $(t, l)) || I[T].slice(0, P);
    }, y = function($) {
      return Pe.s(s % 12 || 12, $, "0");
    }, g = m || function(V, $, T) {
      var I = V < 12 ? "AM" : "PM";
      return T ? I.toLowerCase() : I;
    }, b = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Pe.s(d + 1, 2, "0"),
      MMM: h(o.monthsShort, d, f, 3),
      MMMM: h(f, d),
      D: this.$D,
      DD: Pe.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: h(o.weekdaysMin, this.$W, v, 2),
      ddd: h(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Pe.s(s, 2, "0"),
      h: y(1),
      hh: y(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Pe.s(u, 2, "0"),
      s: String(this.$s),
      ss: Pe.s(this.$s, 2, "0"),
      SSS: Pe.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(vh, function(V, $) {
      return $ || b[V] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Pe.p(t), s = oe(a), u = (s.utcOffset() - this.utcOffset()) * Co, d = this - s, v = Pe.m(this, s);
    return v = (l = {}, l[er] = v / 12, l[Pn] = v, l[ju] = v / 3, l[Lt] = (d - u) / sh, l[xn] = (d - u) / lh, l[Fa] = d / wl, l[Ha] = d / Co, l[Ua] = d / qa, l)[i] || d, o ? v : Pe.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Pn).$D;
  }, n.$locale = function() {
    return Gr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Kt(a, t, !0);
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
}(), Wu = fo.prototype;
oe.prototype = Wu;
[["$ms", Ii], ["$s", Ua], ["$m", Ha], ["$H", Fa], ["$W", xn], ["$M", Pn], ["$y", er], ["$D", Ya]].forEach(function(e) {
  Wu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
oe.extend = function(e, n) {
  return e.$i || (e(n, fo, oe), e.$i = !0), oe;
};
oe.locale = Kt;
oe.isDayjs = Ni;
oe.unix = function(e) {
  return oe(e * 1e3);
};
oe.en = Gr[tt];
oe.Ls = Gr;
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
function Ch(e) {
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
  onPreview: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: kh
} = ne("picker-header");
function $h(e, n) {
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
var Xu = ee({
  name: "PanelHeader",
  components: {
    VarButton: Ze,
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
    } = n, a = B(!1), t = B(0), o = R(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return z(v) + t.value;
      var f = (i = je.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return je.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return ie(() => e.date, () => {
      t.value = 0;
    }), {
      n: kh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Xu.render = $h;
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
  n: Bt,
  classes: Th
} = ne("month-picker"), {
  n: Et
} = ne("date-picker");
function Ph(e, n) {
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
            Te,
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
              }, ni({}, e.buttonProps(t.index)), {
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
var Zu = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: Ze,
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
    } = n, [a, t] = e.current.split("-"), o = B(!1), l = B(0), i = B(null), s = Ie({
      left: !1,
      right: !1
    }), u = R(() => e.choose.chooseYear === e.preview.previewYear), d = R(() => e.preview.previewYear === a), v = (V) => {
      var $, T;
      return ($ = (T = je.value.datePickerMonthDict) == null ? void 0 : T[V].abbr) != null ? $ : "";
    }, f = (V) => {
      var {
        preview: {
          previewYear: $
        },
        componentProps: {
          min: T,
          max: I
        }
      } = e, P = !0, D = !0, w = $ + "-" + V;
      return I && (P = oe(w).isSameOrBefore(oe(I), "month")), T && (D = oe(w).isSameOrAfter(oe(T), "month")), P && D;
    }, m = (V) => {
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
        var w = oe(V).isSameOrBefore(oe(I[1]), "month"), M = oe(V).isSameOrAfter(oe(I[0]), "month");
        return w && M;
      }
      return P === "month" ? $.includes(V) : T.some((N) => N.includes(V));
    }, h = (V) => {
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
          range: w
        }
      } = e, M = T + "-" + V, N = () => w || D ? m(M) : ($ == null ? void 0 : $.index) === V && u.value, C = () => f(V) ? I ? !I(M) : !1 : !0, k = C(), U = () => k ? !0 : w || D ? !m(M) : !u.value || ($ == null ? void 0 : $.index) !== V, Q = () => d.value && t === V && e.componentProps.showCurrent ? (w || D || u.value) && k ? !0 : w || D ? !m(M) : u.value ? ($ == null ? void 0 : $.index) !== t : !0 : !1, x = () => k ? "" : Q() ? P ?? "" : N() ? "" : Et() + "-color-cover", j = x().startsWith(Et());
      return {
        outline: Q(),
        text: U(),
        color: U() ? "" : P,
        textColor: j ? "" : x(),
        [Et() + "-color-cover"]: j,
        class: Th(Bt("button"), [k, Bt("button--disabled")]),
        disabled: k
      };
    }, y = (V, $) => {
      var T = $.currentTarget;
      T.classList.contains(Bt("button--disabled")) || r("choose-month", V);
    }, g = (V) => {
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
      T && (s.right = !oe("" + (z(V) + 1)).isSameOrBefore(oe(T), "year")), $ && (s.left = !oe("" + (z(V) - 1)).isSameOrAfter(oe($), "year"));
    }, {
      immediate: !0
    }), {
      n: Bt,
      nDate: Et,
      pack: je,
      MONTH_LIST: Rt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: b,
      buttonProps: h,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: g
    };
  }
});
Zu.render = Ph;
const Oh = Zu;
var {
  n: Sl,
  classes: Vh
} = ne("year-picker"), Mh = ["onClick"];
function Bh(e, n) {
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), O(
      Te,
      null,
      Ae(e.yearList, (r) => (p(), O(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: q({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ae(r),
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
var Ju = ee({
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
      var u = [z(l) + 100, z(l) - 100];
      if (i) {
        var d = oe(i).format("YYYY-MM-D"), v = z(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = oe(s).format("YYYY-MM-D"), m = z(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var h = u[0]; h >= u[1]; h--)
        o.push(h);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return ln(() => {
      var o = document.querySelector("." + Sl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Sl,
      classes: Vh,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
Ju.render = Bh;
const Eh = Ju;
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
  n: La,
  classes: Ih
} = ne("day-picker"), {
  n: It
} = ne("date-picker");
function Nh(e, n) {
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
              Te,
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
              Te,
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
                }, ri({}, e.buttonProps(t)), {
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
var Qu = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: Ze,
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
    } = n, [a, t, o] = e.current.split("-"), l = B([]), i = B(!1), s = B(0), u = B(null), d = Ie({
      left: !1,
      right: !1
    }), v = R(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = R(() => {
      var w;
      return e.choose.chooseYear === e.preview.previewYear && ((w = e.choose.chooseMonth) == null ? void 0 : w.index) === e.preview.previewMonth.index;
    }), m = R(() => {
      var w = rt.findIndex((M) => M.index === e.componentProps.firstDayOfWeek);
      return w === -1 || w === 0 ? rt : rt.slice(w).concat(rt.slice(0, w));
    }), h = (w) => {
      var M, N;
      return (M = (N = je.value.datePickerWeekDict) == null ? void 0 : N[w].abbr) != null ? M : "";
    }, y = (w) => w > 0 ? w : "", g = () => {
      var {
        preview: {
          previewMonth: w,
          previewYear: M
        }
      } = e, N = oe(M + "-" + w.index).daysInMonth(), C = oe(M + "-" + w.index + "-01").day(), k = m.value.findIndex((U) => U.index === "" + C);
      l.value = [...Array(k).fill(-1), ...Array.from(Array(N + 1).keys())].filter((U) => U);
    }, b = () => {
      var {
        preview: {
          previewYear: w,
          previewMonth: M
        },
        componentProps: {
          max: N,
          min: C
        }
      } = e;
      if (N) {
        var k = w + "-" + (z(M.index) + 1);
        d.right = !oe(k).isSameOrBefore(oe(N), "month");
      }
      if (C) {
        var U = w + "-" + (z(M.index) - 1);
        d.left = !oe(U).isSameOrAfter(oe(C), "month");
      }
    }, V = (w) => {
      var {
        preview: {
          previewYear: M,
          previewMonth: N
        },
        componentProps: {
          min: C,
          max: k
        }
      } = e, U = !0, Q = !0, x = M + "-" + N.index + "-" + w;
      return k && (U = oe(x).isSameOrBefore(oe(k), "day")), C && (Q = oe(x).isSameOrAfter(oe(C), "day")), U && Q;
    }, $ = (w) => {
      var {
        choose: {
          chooseDays: M,
          chooseRangeDay: N
        },
        componentProps: {
          range: C
        }
      } = e;
      if (C) {
        if (!N.length)
          return !1;
        var k = oe(w).isSameOrBefore(oe(N[1]), "day"), U = oe(w).isSameOrAfter(oe(N[0]), "day");
        return k && U;
      }
      return M.includes(w);
    }, T = (w) => {
      if (w < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: La("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: M
        },
        preview: {
          previewYear: N,
          previewMonth: C
        },
        componentProps: {
          allowedDates: k,
          color: U,
          multiple: Q,
          range: x
        }
      } = e, j = N + "-" + C.index + "-" + w, W = () => x || Q ? $(j) : z(M) === w && f.value, le = () => V(w) ? k ? !k(j) : !1 : !0, G = le(), E = () => G ? !0 : x || Q ? !$(j) : !f.value || z(M) !== w, L = () => v.value && z(o) === w && e.componentProps.showCurrent ? (x || Q || f.value) && G ? !0 : x || Q ? !$(j) : f.value ? M !== o : !0 : !1, Z = () => G ? "" : L() ? U ?? "" : W() ? "" : It() + "-color-cover", H = Z().startsWith(It());
      return {
        text: E(),
        outline: L(),
        textColor: H ? "" : Z(),
        [It() + "-color-cover"]: H,
        class: Ih(La("button"), La("button--usable"), [G, La("button--disabled")]),
        disabled: G
      };
    }, I = (w) => {
      i.value = w === "prev", s.value += w === "prev" ? -1 : 1, r("check-preview", "month", w);
    }, P = (w, M) => {
      var N = M.currentTarget;
      N.classList.contains(La("button--disabled")) || r("choose-day", w);
    }, D = (w) => {
      u.value.checkDate(w);
    };
    return ln(() => {
      g(), b();
    }), ie(() => e.preview, () => {
      g(), b();
    }), {
      n: La,
      nDate: It,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: y,
      getDayAbbr: h,
      checkDate: I,
      chooseDay: P,
      buttonProps: T
    };
  }
});
Qu.render = Nh;
const Dh = Qu;
var {
  n: Ah,
  classes: zh
} = ne("date-picker");
function Lh(e, n) {
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
          )) : re("v-if", !0)]),
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
var _u = ee({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Oh,
    YearPickerPanel: Eh,
    DayPickerPanel: Dh
  },
  props: Sh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = oe().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Rt.find((se) => se.index === i), u = B(!1), d = B(!1), v = B(!0), f = B(), m = B(), h = B(), y = B(s), g = B(l), b = B(!1), V = B([]), $ = B([]), T = B([]), I = B([]), P = B(null), D = B(null), w = Ie({
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
      chooseDays: $.value,
      chooseRangeMonth: T.value,
      chooseRangeDay: I.value
    })), N = R(() => ({
      previewMonth: y.value,
      previewYear: g.value
    })), C = R(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return T.value.length ? T.value[0] + " ~ " + T.value[1] : "";
      var pe = "";
      if (f.value) {
        var Ce, ke;
        pe = (Ce = (ke = je.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Ce : "";
      }
      return se ? "" + V.value.length + je.value.datePickerSelected : pe;
    }), k = R(() => {
      var se, ye, pe, Ce, {
        multiple: ke,
        range: He
      } = e;
      if (He) {
        var Qe = I.value.map((yo) => oe(yo).format("YYYY-MM-DD"));
        return Qe.length ? Qe[0] + " ~ " + Qe[1] : "";
      }
      if (ke)
        return "" + $.value.length + je.value.datePickerSelected;
      if (!m.value || !f.value || !h.value)
        return "";
      var hn = oe(m.value + "-" + f.value.index + "-" + h.value).day(), za = rt.find((yo) => yo.index === "" + hn), Gi = (se = (ye = je.value.datePickerWeekDict) == null ? void 0 : ye[za.index].name) != null ? se : "", Pv = (pe = (Ce = je.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? pe : "", Ov = Va(h.value, 2, "0");
      return je.value.lang === "zh-CN" ? f.value.index + "-" + Ov + " " + Gi.slice(0, 3) : Gi.slice(0, 3) + ", " + Pv.slice(0, 3) + " " + h.value;
    }), U = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = R(() => !e.touchable || ["", "year"].includes(U.value)), x = R(() => {
      var se, ye, pe, Ce, ke = oe(m.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + h.value).day(), He = h.value ? Va(h.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = m.value) != null ? ye : "",
        month: (pe = (Ce = f.value) == null ? void 0 : Ce.index) != null ? pe : "",
        date: He
      };
    }), j = R(() => M.value.chooseRangeDay.map((se) => oe(se).format("YYYY-MM-DD"))), W = R(() => m.value === g.value), le = R(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === y.value.index;
    }), G = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, E = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: pe
        } = se.touches[0];
        n = ye, r = pe;
      }
    }, L = (se, ye) => se >= ye && se > 20 ? "x" : "y", Z = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: pe
        } = se.touches[0], Ce = ye - n, ke = pe - r;
        t = L(Math.abs(Ce), Math.abs(ke)), a = Ce > 0 ? "prev" : "next";
      }
    }, H = () => {
      if (!(Q.value || t !== "x")) {
        var se = U.value === "month" ? P : D;
        ro(() => {
          se.value.forwardRef(a), Pt();
        });
      }
    }, K = (se, ye) => {
      var pe = ye === "month" ? T : I;
      if (pe.value = v.value ? [se, se] : [pe.value[0], se], v.value = !v.value, v.value) {
        var Ce = oe(pe.value[0]).isAfter(pe.value[1]), ke = Ce ? [pe.value[1], pe.value[0]] : [...pe.value];
        S(e["onUpdate:modelValue"], ke), S(e.onChange, ke);
      }
    }, J = (se, ye) => {
      var pe = ye === "month" ? V : $, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = pe.value.map((Qe) => oe(Qe).format(Ce)), He = ke.findIndex((Qe) => Qe === se);
      He === -1 ? ke.push(se) : ke.splice(He, 1), S(e["onUpdate:modelValue"], ke), S(e.onChange, ke);
    }, fe = (se, ye) => !m.value || !f.value ? !1 : W.value ? se === "month" ? ye.index < f.value.index : le.value ? ye < z(h.value) : f.value.index > y.value.index : m.value > g.value, ge = (se) => {
      var {
        readonly: ye,
        range: pe,
        multiple: Ce,
        onChange: ke,
        "onUpdate:modelValue": He
      } = e;
      if (!(se < 0 || ye)) {
        b.value = fe("day", se);
        var Qe = g.value + "-" + y.value.index + "-" + se, hn = oe(Qe).format("YYYY-MM-DD");
        pe ? K(hn, "day") : Ce ? J(hn, "day") : (S(He, hn), S(ke, hn));
      }
    }, ze = (se) => {
      var {
        type: ye,
        readonly: pe,
        range: Ce,
        multiple: ke,
        onChange: He,
        onPreview: Qe,
        "onUpdate:modelValue": hn
      } = e;
      if (b.value = fe("month", se), ye === "month" && !pe) {
        var za = g.value + "-" + se.index;
        Ce ? K(za, "month") : ke ? J(za, "month") : (S(hn, za), S(He, za));
      } else
        y.value = se, S(Qe, z(g.value), z(y.value.index));
      d.value = !1;
    }, Ee = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, S(e.onPreview, z(g.value), z(y.value.index));
    }, mn = (se, ye) => {
      var pe = ye === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (z(g.value) + pe);
      else {
        var Ce = z(y.value.index) + pe;
        Ce < 1 && (g.value = "" + (z(g.value) - 1), Ce = 12), Ce > 12 && (g.value = "" + (z(g.value) + 1), Ce = 1), y.value = Rt.find((ke) => z(ke.index) === Ce);
      }
      S(e.onPreview, z(g.value), z(y.value.index));
    }, Aa = () => (e.multiple || e.range) && !Se(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Se(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, zn = (se) => Se(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Xe = (se, ye) => {
      var pe = ye === "month" ? T : I, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((hn) => oe(hn).format(Ce)).slice(0, 2), He = pe.value.some((hn) => zn(hn));
      if (!He) {
        pe.value = ke;
        var Qe = oe(pe.value[0]).isAfter(pe.value[1]);
        pe.value.length === 2 && Qe && (pe.value = [pe.value[1], pe.value[0]]);
      }
    }, pn = (se, ye) => {
      var pe = ye === "month" ? V : $, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((He) => oe(He).format(Ce))));
      pe.value = ke.filter((He) => He !== "Invalid Date");
    }, Tt = (se) => {
      var ye = oe(se).format("YYYY-MM-D");
      if (!zn(ye)) {
        var [pe, Ce, ke] = ye.split("-"), He = Rt.find((Qe) => Qe.index === Ce);
        f.value = He, m.value = pe, h.value = ke, y.value = He, g.value = pe;
      }
    }, Pt = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (se) => {
      if (!(!Aa() || zn(se) || !se))
        if (e.range) {
          if (!Se(se))
            return;
          v.value = se.length !== 1, Xe(se, e.type);
        } else if (e.multiple) {
          if (!Se(se))
            return;
          pn(se, e.type);
        } else
          Tt(se);
    }, {
      immediate: !0
    }), ie(U, Pt), {
      n: Ah,
      classes: zh,
      monthPanelEl: P,
      dayPanelEl: D,
      reverse: b,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: h,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: k,
      getPanelType: U,
      getChoose: M,
      getPreview: N,
      componentProps: w,
      slotProps: x,
      formatRange: j,
      clickEl: G,
      handleTouchstart: E,
      handleTouchmove: Z,
      handleTouchend: H,
      getChooseDay: ge,
      getChooseMonth: ze,
      getChooseYear: Ee,
      checkPreview: mn,
      formatElevation: dn
    };
  }
});
_u.render = Lh;
const qr = _u;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var YS = qr;
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
function Rh(e) {
  return ["left", "center", "right"].includes(e);
}
var Uh = ai({
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
  onBeforeClose: F(),
  onConfirm: F(),
  onCancel: F(),
  "onUpdate:show": F()
}, We(St, [
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
  n: Hh,
  classes: Fh
} = ne("dialog");
function Yh(e, n) {
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
          style: ti({
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
            style: q({
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
          )) : re("v-if", !0), e.confirmButton ? (p(), he(
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
          )) : re("v-if", !0)],
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
var xu = ee({
  name: "VarDialog",
  components: {
    VarPopup: bn,
    VarButton: Ze
  },
  inheritAttrs: !1,
  props: Uh,
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
      n: Hh,
      classes: Fh,
      pack: je,
      dt: no,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: me
    };
  }
});
xu.render = Yh;
const fr = xu;
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
var rr, Jt = {};
function jh(e) {
  return e === void 0 && (e = {}), Re(e) ? Zt({}, Jt, {
    message: e
  }) : Zt({}, Jt, e);
}
function Kn(e) {
  return Ct() ? new Promise((n) => {
    Kn.close();
    var r = jh(e), a = Ie(r);
    a.teleport = "body", rr = a;
    var {
      unmountInstance: t
    } = xa(fr, a, {
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
  Jt = e;
};
Kn.resetDefaultOptions = function() {
  Jt = {};
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
var jS = fr, Wh = {
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
function ja() {
  return ja = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ja.apply(this, arguments);
}
var {
  n: Gh,
  classes: qh
} = ne("divider");
function Xh(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
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
    )) : re("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var ed = ee({
  name: "VarDivider",
  props: Wh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ie({
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
        return ja({}, d);
      var v = z(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? ja({}, d, {
        height: "calc(80% - " + me(f) + ")"
      }) : ja({}, d, {
        width: "calc(100% - " + me(f) + ")",
        left: v > 0 ? me(f) : me(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return ln(() => {
      l();
    }), xt(() => {
      l();
    }), ja({
      n: Gh,
      classes: qh
    }, Av(a), {
      style: o,
      isInset: t
    });
  }
});
ed.render = Xh;
const Xr = ed;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var WS = Xr, Kh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ut(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Kh[n];
  });
}
var Hn = "top", kr = "bottom", Ma = "right", cr = "left", co = "auto", mo = [Hn, kr, Ma, cr], po = "start", ct = "end", Zh = "clippingParents", nd = "viewport", et = "popper", Jh = "reference", kl = /* @__PURE__ */ mo.reduce(function(e, n) {
  return e.concat([n + "-" + po, n + "-" + ct]);
}, []), rd = /* @__PURE__ */ [].concat(mo, [co]).reduce(function(e, n) {
  return e.concat([n, n + "-" + po, n + "-" + ct]);
}, []), Qh = "beforeRead", _h = "read", xh = "afterRead", eg = "beforeMain", ng = "main", rg = "afterMain", ag = "beforeWrite", tg = "write", og = "afterWrite", oi = [Qh, _h, xh, eg, ng, rg, ag, tg, og];
function Fn(e) {
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
function Di(e) {
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
var ot = Math.max, Tl = Math.min, Xa = Math.round;
function ii() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ad() {
  return !/^((?!chrome|android).)*safari/i.test(ii());
}
function Ka(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && wn(e) && (t = e.offsetWidth > 0 && Xa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Xa(a.height) / e.offsetHeight || 1);
  var l = Ba(e) ? Tn(e) : window, i = l.visualViewport, s = !ad() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Ai(e) {
  var n = Tn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function zi(e) {
  return Ka(Or(e)).left + Ai(e).scrollLeft;
}
function lg(e, n) {
  var r = Tn(e), a = Or(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = ad();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + zi(e),
    y: s
  };
}
function Bn(e) {
  return Tn(e).getComputedStyle(e);
}
function sg(e) {
  var n, r = Or(e), a = Ai(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = ot(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = ot(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + zi(e), s = -a.scrollTop;
  return Bn(t || r).direction === "rtl" && (i += ot(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function An(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ho(e) {
  return An(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Di(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Or(e)
  );
}
function Li(e) {
  var n = Bn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function td(e) {
  return ["html", "body", "#document"].indexOf(An(e)) >= 0 ? e.ownerDocument.body : wn(e) && Li(e) ? e : td(ho(e));
}
function it(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = td(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Tn(a), l = t ? [o].concat(o.visualViewport || [], Li(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(it(ho(l)))
  );
}
function ug(e) {
  return ["table", "td", "th"].indexOf(An(e)) >= 0;
}
function Pl(e) {
  return !wn(e) || // https://github.com/popperjs/popper-core/issues/837
  Bn(e).position === "fixed" ? null : e.offsetParent;
}
function dg(e) {
  var n = /firefox/i.test(ii()), r = /Trident/i.test(ii());
  if (r && wn(e)) {
    var a = Bn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = ho(e);
  for (Di(t) && (t = t.host); wn(t) && ["html", "body"].indexOf(An(t)) < 0; ) {
    var o = Bn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ri(e) {
  for (var n = Tn(e), r = Pl(e); r && ug(r) && Bn(r).position === "static"; )
    r = Pl(r);
  return r && (An(r) === "html" || An(r) === "body" && Bn(r).position === "static") ? n : r || dg(e) || n;
}
function vg(e, n) {
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
function fg(e, n) {
  var r = Ka(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ol(e, n, r) {
  return n === nd ? li(lg(e, r)) : Ba(n) ? fg(n, r) : li(sg(Or(e)));
}
function cg(e) {
  var n = it(ho(e)), r = ["absolute", "fixed"].indexOf(Bn(e).position) >= 0, a = r && wn(e) ? Ri(e) : e;
  return Ba(a) ? n.filter(function(t) {
    return Ba(t) && vg(t, a) && An(t) !== "body";
  }) : [];
}
function mg(e, n, r, a) {
  var t = n === "clippingParents" ? cg(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = Ol(e, u, a);
    return s.top = ot(d.top, s.top), s.right = Tl(d.right, s.right), s.bottom = Tl(d.bottom, s.bottom), s.left = ot(d.left, s.left), s;
  }, Ol(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function mt(e) {
  return e.split("-")[1];
}
function pg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function od(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Fn(a) : null, o = a ? mt(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
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
  var u = t ? pg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case po:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case ct:
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
function id(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Zh : i, u = r.rootBoundary, d = u === void 0 ? nd : u, v = r.elementContext, f = v === void 0 ? et : v, m = r.altBoundary, h = m === void 0 ? !1 : m, y = r.padding, g = y === void 0 ? 0 : y, b = gg(typeof g != "number" ? g : yg(g, mo)), V = f === et ? Jh : et, $ = e.rects.popper, T = e.elements[h ? V : f], I = mg(Ba(T) ? T : T.contextElement || Or(e.elements.popper), s, d, l), P = Ka(e.elements.reference), D = od({
    reference: P,
    element: $,
    strategy: "absolute",
    placement: t
  }), w = li(Object.assign({}, $, D)), M = f === et ? w : P, N = {
    top: I.top - M.top + b.top,
    bottom: M.bottom - I.bottom + b.bottom,
    left: I.left - M.left + b.left,
    right: M.right - I.right + b.right
  }, C = e.modifiersData.offset;
  if (f === et && C) {
    var k = C[t];
    Object.keys(N).forEach(function(U) {
      var Q = [Ma, kr].indexOf(U) >= 0 ? 1 : -1, x = [Hn, kr].indexOf(U) >= 0 ? "y" : "x";
      N[U] += k[x] * Q;
    });
  }
  return N;
}
function bg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? rd : s, d = mt(a), v = d ? i ? kl : kl.filter(function(h) {
    return mt(h) === d;
  }) : mo, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(h, y) {
    return h[y] = id(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Fn(y)], h;
  }, {});
  return Object.keys(m).sort(function(h, y) {
    return m[h] - m[y];
  });
}
function wg(e) {
  if (Fn(e) === co)
    return [];
  var n = Ut(e);
  return [$l(e), n, $l(n)];
}
function Cg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, h = m === void 0 ? !0 : m, y = r.allowedAutoPlacements, g = n.options.placement, b = Fn(g), V = b === g, $ = s || (V || !h ? [Ut(g)] : wg(g)), T = [g].concat($).reduce(function(K, J) {
      return K.concat(Fn(J) === co ? bg(n, {
        placement: J,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: y
      }) : J);
    }, []), I = n.rects.reference, P = n.rects.popper, D = /* @__PURE__ */ new Map(), w = !0, M = T[0], N = 0; N < T.length; N++) {
      var C = T[N], k = Fn(C), U = mt(C) === po, Q = [Hn, kr].indexOf(k) >= 0, x = Q ? "width" : "height", j = id(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), W = Q ? U ? Ma : cr : U ? kr : Hn;
      I[x] > P[x] && (W = Ut(W));
      var le = Ut(W), G = [];
      if (o && G.push(j[k] <= 0), i && G.push(j[W] <= 0, j[le] <= 0), G.every(function(K) {
        return K;
      })) {
        M = C, w = !1;
        break;
      }
      D.set(C, G);
    }
    if (w)
      for (var E = h ? 3 : 1, L = function(J) {
        var fe = T.find(function(ge) {
          var ze = D.get(ge);
          if (ze)
            return ze.slice(0, J).every(function(Ee) {
              return Ee;
            });
        });
        if (fe)
          return M = fe, "break";
      }, Z = E; Z > 0; Z--) {
        var H = L(Z);
        if (H === "break")
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
function $g(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = rd.reduce(function(d, v) {
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
function Pg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Og(e) {
  return e === Tn(e) || !wn(e) ? Ai(e) : Pg(e);
}
function Vg(e) {
  var n = e.getBoundingClientRect(), r = Xa(n.width) / e.offsetWidth || 1, a = Xa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Mg(e, n, r) {
  r === void 0 && (r = !1);
  var a = wn(n), t = wn(n) && Vg(n), o = Or(n), l = Ka(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((An(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Li(o)) && (i = Og(n)), wn(n) ? (s = Ka(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = zi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Bg(e) {
  var n = Ka(e), r = e.offsetWidth, a = e.offsetHeight;
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
  return oi.reduce(function(r, a) {
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
function Qn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Vr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Dg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Vl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ag(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Vl).filter(function(r, a, t) {
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
          oi.indexOf(n.phase) < 0 && console.error(Qn(Vr, n.name, '"phase"', "either " + oi.join(", "), '"' + String(n.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Vl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Qn(Dg, String(n.name), a, a));
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
      setOptions: function(b) {
        var V = typeof b == "function" ? b(d.options) : b;
        y(), d.options = Object.assign({}, o, d.options, V), d.scrollParents = {
          reference: Ba(i) ? it(i) : i.contextElement ? it(i.contextElement) : [],
          popper: it(s)
        };
        var $ = Ig(Lg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = $.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var T = zg([].concat($, d.options.modifiers), function(C) {
            var k = C.name;
            return k;
          });
          if (Ag(T), Fn(d.options.placement) === co) {
            var I = d.orderedModifiers.find(function(C) {
              var k = C.name;
              return k === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var P = Bn(s), D = P.marginTop, w = P.marginRight, M = P.marginBottom, N = P.marginLeft;
          [D, w, M, N].some(function(C) {
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
          var b = d.elements, V = b.reference, $ = b.popper;
          if (!El(V, $)) {
            process.env.NODE_ENV !== "production" && console.error(Ml);
            return;
          }
          d.rects = {
            reference: Mg(V, Ri($), d.options.strategy === "fixed"),
            popper: Bg($)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var T = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (T += 1, T > 100)) {
              console.error(Rg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var P = d.orderedModifiers[I], D = P.fn, w = P.options, M = w === void 0 ? {} : w, N = P.name;
            typeof D == "function" && (d = D({
              state: d,
              options: M,
              name: N,
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
        y(), f = !0;
      }
    };
    if (!El(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Ml), m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      d.orderedModifiers.forEach(function(g) {
        var b = g.name, V = g.options, $ = V === void 0 ? {} : V, T = g.effect;
        if (typeof T == "function") {
          var I = T({
            state: d,
            name: b,
            instance: m,
            options: $
          }), P = function() {
          };
          v.push(I || P);
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
var Nt = {
  passive: !0
};
function Hg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Tn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Nt);
  }), i && s.addEventListener("resize", r.update, Nt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Nt);
    }), i && s.removeEventListener("resize", r.update, Nt);
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
  n.modifiersData[r] = od({
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
    x: Xa(n * t) / t || 0,
    y: Xa(r * t) / t || 0
  };
}
function Il(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, h = l.y, y = h === void 0 ? 0 : h, g = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = g.x, y = g.y;
  var b = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), $ = cr, T = Hn, I = window;
  if (u) {
    var P = Ri(r), D = "clientHeight", w = "clientWidth";
    if (P === Tn(r) && (P = Or(r), Bn(P).position !== "static" && i === "absolute" && (D = "scrollHeight", w = "scrollWidth")), P = P, t === Hn || (t === cr || t === Ma) && o === ct) {
      T = kr;
      var M = v && P === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[D]
      );
      y -= M - a.height, y *= s ? 1 : -1;
    }
    if (t === cr || (t === Hn || t === kr) && o === ct) {
      $ = Ma;
      var N = v && P === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[w]
      );
      m -= N - a.width, m *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: i
  }, u && Wg), k = d === !0 ? Gg({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  if (m = k.x, y = k.y, s) {
    var U;
    return Object.assign({}, C, (U = {}, U[T] = V ? "0" : "", U[$] = b ? "0" : "", U.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", U));
  }
  return Object.assign({}, C, (n = {}, n[T] = V ? y + "px" : "", n[$] = b ? m + "px" : "", n.transform = "", n));
}
function qg(e) {
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
    variation: mt(n.placement),
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
    !wn(o) || !An(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
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
      !wn(t) || !An(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
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
  var n = B(null), r = B(null), a = B({
    width: 0,
    height: 0
  }), t = Ts(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(P, D) {
      D ? ($(), S(e.onOpen)) : S(e.onClose);
    }
  }), {
    zIndex: o
  } = kt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
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
    var P = Dl(function* () {
      e.trigger === "hover" && (s = !1, yield In(), !i && I());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var P = Dl(function* () {
      e.trigger === "hover" && (i = !1, yield In(), !s && I());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), h = () => {
    T();
  }, y = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  }, g = () => {
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
      skidding: D,
      distance: w
    } = b(), M = [Qt({}, Sg, {
      enabled: t.value
    }), Qt({}, Tg, {
      options: {
        offset: [D, w]
      }
    })];
    return {
      placement: P,
      modifiers: M
    };
  }, $ = () => {
    l.setOptions(V());
  }, T = () => {
    var {
      disabled: P
    } = e;
    P || (t.value = !0, S(e["onUpdate:show"], !0));
  }, I = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  };
  return ks(n, "click", g), ie(() => e.offsetX, $), ie(() => e.offsetY, $), ie(() => e.placement, $), ie(() => e.disabled, I), gt(() => {
    var P, D = e.reference ? (P = n.value) == null ? void 0 : P.querySelector(e.reference) : n.value;
    l = _g(D ?? n.value, r.value, V());
  }), Qa(() => {
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
    handlePopoverClose: y,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: $,
    open: T,
    close: I
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F()
}, {
  n: ay,
  classes: ty
} = ne("tooltip");
function oy(e, n) {
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
      Ia,
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
              style: q({
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
                style: q({
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
var sd = ee({
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
    } = ld(e);
    return {
      toSizeUnit: me,
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
sd.render = oy;
const mr = sd;
mr.install = function(e) {
  e.component(mr.name, mr);
};
var GS = mr;
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
  n: sy,
  classes: uy
} = ne("ellipsis"), dy = {
  key: 0
};
function vy(e, n) {
  var r = te("var-tooltip");
  return p(), he(
    r,
    bt(eo(e.tooltip)),
    {
      content: ue(() => [Y(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), O(
          "span",
          dy,
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
          style: q(e.rootStyles),
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
var ud = ee({
  name: "VarEllipsis",
  components: {
    VarTooltip: mr
  },
  props: ly,
  setup(e) {
    var n = B(!1), r = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : si({
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
ud.render = vy;
const Kr = ud;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var qS = Kr;
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
    validator: ru
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
  onClick: F(),
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:active": F()
};
function Al(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  classes: zl,
  n: nn
} = ne("fab");
const Zr = ee({
  name: "VarFab",
  inheritAttrs: !1,
  props: py,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = Ts(e, "active"), o = B(null), {
      disabled: l
    } = ao(), i = (f, m, h) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (h === 0) {
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
      default: () => [_($e, {
        "var-fab-cover": !0,
        class: zl([t.value, nn("trigger-active-icon"), nn("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: nn("--trigger-icon-animation")
      }, null)]
    }), [[yr, e.show]]), v = () => {
      var f, m, h = $s((m = r.default == null ? void 0 : r.default()) != null ? m : []);
      return _("div", Ve({
        class: zl(nn(), nn("--position-" + e.position), nn("--direction-" + e.direction), [e.fixed, nn("--fixed"), nn("--absolute")], [e.safeArea, nn("--safe-area")]),
        style: {
          zIndex: z(e.zIndex),
          top: me(e.top),
          bottom: me(e.bottom),
          left: me(e.left),
          right: me(e.right)
        },
        ref: o,
        onClick: (y) => i(y, !t.value, h.length),
        onMouseleave: () => s(!1, h.length),
        onMouseenter: () => s(!0, h.length)
      }, a), [_(De, {
        name: nn("--active-transition")
      }, Al(f = d()) ? f : {
        default: () => [f]
      }), _(De, {
        name: nn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [we(_("div", {
          class: nn("actions"),
          onClick: (y) => y.stopPropagation()
        }, [h.map((y) => _("div", {
          class: nn("action")
        }, [y]))]), [[yr, e.show && t.value && h.length]])]
      })]);
    };
    return ie(() => e.trigger, () => {
      t.value = !1;
    }), ie(() => e.disabled, () => {
      t.value = !1;
    }), ks(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return _(Ia, {
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
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var XS = Zr;
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
} = ne("form");
function wy(e, n) {
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
var dd = ee({
  name: "VarForm",
  props: gy,
  setup(e) {
    var n = R(() => e.disabled), r = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Vm(), o = (d) => {
      setTimeout(() => {
        var v = br(d), f = v === window ? 0 : el(v), m = el(d) - f - Le(e.scrollToErrorOffsetY);
        dt(v, {
          top: m,
          animation: Vo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = yy(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: b
          } = g;
          return b();
        }));
        if (e.scrollToError) {
          var [, f] = Fv(v, (g) => g === !1, e.scrollToError), m = f > -1;
          if (m) {
            var h, y = (h = a[f].instance.proxy) == null ? void 0 : h.$el;
            o(y);
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
dd.render = wy;
const Yn = dd;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
Yn.useValidation = kn;
Yn.useForm = $n;
var KS = Yn;
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
  onClick: F(),
  onLoad: F(),
  onError: F()
}, {
  n: ky,
  classes: $y
} = ne("image"), Ty = ["alt", "title", "lazy-error", "lazy-loading"], Py = ["alt", "title", "src"];
function Oy(e, n) {
  var r = Me("lazy"), a = Me("ripple");
  return we((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
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
      Ty
    )), [[r, e.src]]) : (p(), O(
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
      Py
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var vd = ee({
  name: "VarImage",
  directives: {
    Lazy: vt,
    Ripple: Ue
  },
  props: Sy,
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
      n: ky,
      classes: $y,
      toSizeUnit: me,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
vd.render = Oy;
const Jr = vd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var ZS = Jr, fd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Vy() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(fd);
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
  onChange: F()
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
} = ne("swipe"), Dy = ["onClick"];
function Ay(e, n) {
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
        Te,
        null,
        Ae(e.length, (r, a) => (p(), O(
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
          Dy
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : re("v-if", !0)])],
    2
    /* CLASS */
  );
}
var md = ee({
  name: "VarSwipe",
  props: cd,
  setup(e) {
    var n = B(null), r = B(0), a = R(() => e.vertical), t = B(0), o = B(0), l = B(!1), i = B(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Vy(), v = !1, f = -1, m, h, y, g, b, V = (E) => s.find((L) => {
      var {
        index: Z
      } = L;
      return Z.value === E;
    }), $ = () => {
      e.loop && (o.value >= 0 && V(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && V(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (V(d.value - 1).setTranslate(0), V(0).setTranslate(0)));
    }, T = (E) => {
      var L = en(E) ? E : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: Z
      } = e;
      return L <= -1 ? Z ? -1 : 0 : L >= d.value ? Z ? d.value : d.value - 1 : L;
    }, I = (E) => {
      var {
        loop: L
      } = e;
      return E === -1 ? L ? d.value - 1 : 0 : E === d.value ? L ? 0 : d.value - 1 : E;
    }, P = (E) => {
      var {
        loop: L
      } = e;
      return E < 0 ? L ? d.value - 1 : 0 : E > d.value - 1 ? L ? 0 : d.value - 1 : E;
    }, D = (E) => {
      var L = o.value >= r.value, Z = o.value <= -t.value, H = 0, K = -(t.value - r.value);
      l.value = !0, (L || Z) && (l.value = !0, o.value = Z ? H : K, V(0).setTranslate(0), V(d.value - 1).setTranslate(0)), ro(() => {
        l.value = !1, S(E);
      });
    }, w = () => {
      i.value = P(z(e.initialIndex));
    }, M = () => {
      var {
        autoplay: E
      } = e;
      !E || d.value <= 1 || (N(), f = window.setTimeout(() => {
        j(), M();
      }, z(E)));
    }, N = () => {
      f && clearTimeout(f);
    }, C = (E, L) => {
      if (E > L && E > 10)
        return "horizontal";
      if (L > E && L > 10)
        return "vertical";
    }, k = (E) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: L,
          clientY: Z
        } = E.touches[0];
        m = L, h = Z, y = performance.now(), v = !0, N(), D(() => {
          l.value = !0;
        });
      }
    }, U = (E) => {
      var {
        touchable: L,
        vertical: Z
      } = e;
      if (!(!v || !L)) {
        var {
          clientX: H,
          clientY: K
        } = E.touches[0], J = Math.abs(H - m), fe = Math.abs(K - h), ge = C(J, fe), ze = Z ? "vertical" : "horizontal";
        if (ge === ze) {
          E.preventDefault();
          var Ee = g !== void 0 ? H - g : 0, mn = b !== void 0 ? K - b : 0;
          g = H, b = K, o.value += Z ? mn : Ee, $();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: E,
          onChange: L
        } = e, Z = E ? b < h : g < m, H = Math.abs(E ? h - b : m - g), K = performance.now() - y <= By && H >= Ey, J = K ? T(Z ? i.value + 1 : i.value - 1) : T();
        v = !1, l.value = !1, g = void 0, b = void 0, o.value = J * -r.value;
        var fe = i.value;
        i.value = I(J), M(), fe !== i.value && S(L, i.value);
      }
    }, x = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((E) => {
        E.setTranslate(0);
      }), M(), setTimeout(() => {
        l.value = !1;
      }));
    }, j = (E) => {
      if (!(d.value <= 1)) {
        var {
          loop: L,
          onChange: Z
        } = e, H = i.value;
        i.value = P(H + 1), (E == null ? void 0 : E.event) !== !1 && S(Z, i.value), D(() => {
          if (H === d.value - 1 && L) {
            V(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          H !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, W = (E) => {
      if (!(d.value <= 1)) {
        var {
          loop: L,
          onChange: Z
        } = e, H = i.value;
        i.value = P(H - 1), (E == null ? void 0 : E.event) !== !1 && S(Z, i.value), D(() => {
          if (H === 0 && L) {
            V(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          H !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, le = (E, L) => {
      if (!(d.value <= 1 || E === i.value)) {
        E = E < 0 ? 0 : E, E = E >= d.value ? d.value : E;
        var Z = E > i.value ? j : W, H = Math.abs(E - i.value);
        Array.from({
          length: H
        }).forEach((K, J) => {
          Z({
            event: J === H - 1 ? L == null ? void 0 : L.event : !1
          });
        });
      }
    }, G = {
      size: r,
      vertical: a
    };
    return u(G), ie(() => d.value, /* @__PURE__ */ My(function* () {
      yield In(), w(), x();
    })), $r(x), Tr(N), Qa(N), wr(() => window, "resize", x), {
      n: Iy,
      classes: Ny,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: k,
      handleTouchmove: U,
      handleTouchend: Q,
      next: j,
      prev: W,
      to: le,
      resize: x,
      toNumber: z
    };
  }
});
md.render = Ay;
const jn = md;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var JS = jn;
function zy() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = sn(fd);
  return e || Sn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: Ly
} = ne("swipe-item");
function Ry(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      style: q({
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
var pd = ee({
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
pd.render = Ry;
const Wn = pd;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var QS = Wn;
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
var Uy = ui({
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
}, We(cd, ["loop", "indicator", "onChange"]), We(St, [
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
} = ne("image-preview"), Hl = 12, Fl = 200, Fy = 350, Yl = 200, Yy = ["src", "alt"];
function jy(e, n) {
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
            Te,
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
            )) : re("v-if", !0)])];
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
      )) : re("v-if", !0)]), A(
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
var hd = ee({
  name: "VarImagePreview",
  components: {
    VarSwipe: jn,
    VarSwipeItem: Wn,
    VarPopup: bn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Uy,
  setup(e) {
    var n = B(!1), r = R(() => {
      var {
        images: N,
        current: C
      } = e, k = N.findIndex((U) => U === C);
      return k >= 0 ? k : 0;
    }), a = B(1), t = B(0), o = B(0), l = B(void 0), i = B(void 0), s = B(!0), u = null, d = null, v = null, f = (N, C) => {
      var {
        clientX: k,
        clientY: U
      } = N, {
        clientX: Q,
        clientY: x
      } = C;
      return Math.abs(Math.sqrt(Math.pow(Q - k, 2) + Math.pow(x - U, 2)));
    }, m = (N, C) => ({
      clientX: N.clientX,
      clientY: N.clientY,
      timestamp: Date.now(),
      target: C
    }), h = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Yl);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, g = (N) => d ? f(d, N) <= Hl && N.timestamp - d.timestamp <= Fl && d.target === N.target : !1, b = (N) => !N || !u || !d ? !1 : f(u, d) <= Hl && Date.now() - d.timestamp < Fy && (N === u.target || N.parentNode === u.target), V = (N) => {
      v = window.setTimeout(() => {
        b(N.target) && M(), u = null;
      }, Fl);
    }, $ = (N) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = N, k = m(C[0], N.currentTarget);
      if (u = k, g(k)) {
        a.value > 1 ? y() : h();
        return;
      }
      d = k;
    }, T = (N) => {
      var {
        offsetWidth: C,
        offsetHeight: k
      } = N, {
        naturalWidth: U,
        naturalHeight: Q
      } = N.querySelector("." + Ul("image"));
      return {
        width: C,
        height: k,
        imageRadio: Q / U,
        rootRadio: k / C,
        zoom: z(e.zoom)
      };
    }, I = (N) => {
      var {
        zoom: C,
        imageRadio: k,
        rootRadio: U,
        width: Q,
        height: x
      } = T(N);
      if (!k)
        return 0;
      var j = k > U ? x / k : Q;
      return Math.max(0, (C * j - Q) / 2) / C;
    }, P = (N) => {
      var {
        zoom: C,
        imageRadio: k,
        rootRadio: U,
        width: Q,
        height: x
      } = T(N);
      if (!k)
        return 0;
      var j = k > U ? x : Q * k;
      return Math.max(0, (C * j - x) / 2) / C;
    }, D = (N, C, k) => N + C >= k ? k : N + C <= -k ? -k : N + C, w = (N) => {
      if (d) {
        var C = N.currentTarget, {
          touches: k
        } = N, U = m(k[0], C);
        if (a.value > 1) {
          var Q = U.clientX - d.clientX, x = U.clientY - d.clientY, j = I(C), W = P(C);
          t.value = D(t.value, Q, j), o.value = D(o.value, x, W);
        }
        d = U;
      }
    }, M = () => {
      if (a.value > 1) {
        y(), setTimeout(() => S(e["onUpdate:show"], !1), Yl);
        return;
      }
      S(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (N) => {
      n.value = N;
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
      handleTouchstart: $,
      handleTouchmove: w,
      handleTouchend: V,
      close: M
    };
  }
});
hd.render = jy;
const pr = hd;
function lt() {
  return lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, lt.apply(this, arguments);
}
var ar, st = {};
function Wy(e) {
  return e === void 0 && (e = {}), Re(e) ? lt({}, st, {
    images: [e]
  }) : Se(e) ? lt({}, st, {
    images: e
  }) : lt({}, st, e);
}
function En(e) {
  if (Ct()) {
    En.close();
    var n = Wy(e), r = Ie(n);
    r.teleport = "body", ar = r;
    var {
      unmountInstance: a
    } = xa(pr, r, {
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
  st = e;
};
En.resetDefaultOptions = () => {
  st = {};
};
pr.install = function(e) {
  e.component(pr.name, pr);
};
En.install = function(e) {
  e.component(pr.name, pr);
};
En.Component = pr;
var _S = pr, Ht = {
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
} = ne("sticky");
function Xy(e, n) {
  return p(), O(
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
      [Y(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var gd = ee({
  name: "VarSticky",
  props: Ht,
  setup(e) {
    var n = B(null), r = B(null), a = B(!1), t = B("0px"), o = B("0px"), l = B("auto"), i = B("auto"), s = B("auto"), u = B("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => Le(e.offsetTop)), m, h = () => {
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
        var D = r.value, w = n.value, {
          top: M,
          left: N
        } = w.getBoundingClientRect(), C = M - I;
        return C <= f.value ? ($ || (l.value = w.offsetWidth + "px", i.value = w.offsetHeight + "px", t.value = I + f.value + "px", o.value = N + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: C,
          isFixed: !1
        });
      }
    }, y = () => {
      if (m) {
        var $ = h();
        $ && S(e.onScroll, $.offsetTop, $.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var $ = Wl(function* () {
        a.value = !1, yield Qv(), h();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), b = /* @__PURE__ */ function() {
      var $ = Wl(function* () {
        yield In(), m = br(n.value), m !== window && m.addEventListener("scroll", y), y();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", y);
    };
    return ie(() => e.disabled, g), ln(b), Qa(V), Tr(V), wr(() => window, "scroll", y), wr(() => window, "resize", g), {
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
      toNumber: z
    };
  }
});
gd.render = Xy;
const Gn = gd;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var xS = Gn, yd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Ky() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(yd);
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
  } = sn(yd);
  return r || Sn("IndexAnchor", 'You should use this component in "IndexBar"'), {
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
} = ne("index-anchor");
function xy(e, n) {
  return p(), he(
    _a(e.sticky ? e.n("$-sticky") : e.Transition),
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
var bd = ee({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Gn
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
    }, y = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: h
    };
    return a(y), {
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
      Transition: De
    };
  }
});
bd.render = xy;
const Qr = bd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var ek = Qr, eb = {
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
function Gl(e, n, r, a, t, o, l) {
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
} = ne("index-bar"), ab = ["onClick"];
function tb(e, n) {
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
        style: q({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), O(
        Te,
        null,
        Ae(e.anchorNameList, (r) => (p(), O(
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
          ae(r),
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
var wd = ee({
  name: "VarIndexBar",
  props: eb,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Ky(), t = B(""), o = B(null), l = B([]), i = B(), s = R(() => e.sticky), u = R(() => e.stickyCssMode || e.cssMode), d = R(() => Le(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, m = !1, h = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(h);
    var y = (D, w) => {
      var M = bi(D) ? D.name.value : D;
      M === i.value || M === void 0 || (i.value = M, (w == null ? void 0 : w.event) !== !1 && S(e.onChange, M));
    }, g = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: D
      } = f.getBoundingClientRect(), {
        scrollTop: w
      } = f, {
        top: M
      } = o.value.getBoundingClientRect();
      return w - D + M;
    }, b = () => {
      var D = ut(f), w = f === window ? document.body.scrollHeight : f.scrollHeight, M = g();
      r.forEach((N, C) => {
        var k = N.ownTop.value, U = D - k + d.value - M, Q = C === r.length - 1 ? w : r[C + 1].ownTop.value - N.ownTop.value;
        N.setDisabled(!0), U >= 0 && U < Q && t.value === "" && (N.setDisabled(!1), y(N));
      });
    }, V = /* @__PURE__ */ function() {
      var D = Dt(function* (w) {
        var {
          anchorName: M,
          manualCall: N = !1,
          options: C
        } = w;
        if (N && S(e.onClick, M), !(M === i.value && !m)) {
          var k = r.find((j) => {
            var {
              name: W
            } = j;
            return M === W.value;
          });
          if (k) {
            var U = g(), Q = k.ownTop.value - d.value + U, x = Ci(f);
            t.value = M, y(M, C), yield dt(f, {
              left: x,
              top: Q,
              animation: ms,
              duration: z(e.duration)
            }), ro(() => {
              t.value = "";
            });
          }
        }
      });
      return function(M) {
        return D.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var D = Dt(function* () {
        yield In(), f = br(o.value);
      });
      return function() {
        return D.apply(this, arguments);
      };
    }(), T = () => {
      f.addEventListener("scroll", b);
    }, I = () => {
      f.removeEventListener("scroll", b);
    }, P = (D, w) => {
      yn(() => V({
        anchorName: D,
        options: w
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ Dt(function* () {
      yield In(), r.forEach((D) => {
        var {
          name: w,
          setOwnTop: M
        } = D;
        w.value && l.value.push(w.value), M();
      });
    })), ln(/* @__PURE__ */ Dt(function* () {
      yield $(), T();
    })), _t(I), Tr(() => {
      m = !0, I();
    }), $r(() => {
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
      toNumber: z,
      scrollTo: P,
      anchorClick: V
    };
  }
});
wd.render = tb;
const _r = wd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var nk = _r;
function ob(e) {
  return ["small", "normal"].includes(e);
}
function ib(e) {
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
  onClick: F(),
  onClear: F()
}, {
  n: So,
  classes: lb
} = ne("field-decorator"), sb = ["for"];
function ub(e, n) {
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
        style: q({
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
            class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [!e.hint, e.n("--placeholder-non-hint")], e.computePlaceholderState())),
            style: q({
              transform: e.placeholderTransform,
              color: e.color
            }),
            for: e.id
          },
          [A(
            "span",
            {
              ref: "placeholderEl"
            },
            ae(e.placeholder),
            513
            /* TEXT, NEED_PATCH */
          )],
          14,
          sb
        )) : re("v-if", !0)],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (p(), he(
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
        )) : re("v-if", !0), Y(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), O(
      Te,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), O(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), e.n("$--box"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")]))
        },
        [A(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.hint && (!e.isEmpty(e.value) || e.isFocus), e.n("line-legend--hint")])),
            style: q({
              width: e.legendWidth
            })
          },
          [A(
            "span",
            {
              class: c(e.n("line-legend-placeholder"))
            },
            ae(e.placeholder),
            3
            /* TEXT, CLASS */
          )],
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
          style: q({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [A(
          "div",
          {
            class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
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
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : re("v-if", !0)],
    2
    /* CLASS */
  );
}
var Cd = ee({
  name: "VarFieldDecorator",
  components: {
    VarIcon: $e
  },
  props: Ui,
  setup(e) {
    var n = B(null), r = B(null), a = B(""), t = B(""), o = R(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = () => {
      var {
        hint: u,
        value: d,
        isFocus: v,
        composing: f
      } = e;
      if (!u && (!Rn(d) || f))
        return So("--placeholder-hidden");
      if (u && (!Rn(d) || v))
        return So("--placeholder-hint");
    }, i = (u) => {
      S(e.onClear, u);
    }, s = (u) => {
      S(e.onClick, u);
    };
    return zv(() => {
      var {
        hint: u,
        value: d,
        isFocus: v,
        variant: f
      } = e;
      if (n.value) {
        if (u && (!Rn(d) || v)) {
          var m, h = ((m = window.getComputedStyle(n.value)) == null ? void 0 : m.width) || 0, y = f === "outlined" ? "-50%" : 0;
          t.value = "translate(-" + h + ", " + y + ") scale(0.75)";
          return;
        }
        t.value = "";
      }
    }), gt(() => {
      if (r.value) {
        var {
          width: u
        } = r.value.getBoundingClientRect(), d = window.getComputedStyle(r.value).getPropertyValue("--field-decorator-outlined-normal-placeholder-space");
        a.value = "calc(" + u * 0.75 + "px + 2 * " + d + ")";
      }
    }), {
      prependIconEl: n,
      placeholderEl: r,
      placeholderTransform: t,
      color: o,
      legendWidth: a,
      computePlaceholderState: l,
      n: So,
      classes: lb,
      isEmpty: Rn,
      handleClear: i,
      handleClick: s
    };
  }
});
Cd.render = ub;
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
function db(e) {
  return ["text", "password", "number"].includes(e);
}
var vb = di({
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
  onFocus: F(),
  onBlur: F(),
  onInput: F(),
  onChange: F(),
  onClear: F(),
  "onUpdate:modelValue": F()
}, We(Ui, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: fb,
  classes: cb
} = ne("input"), mb = ["placeholder"], pb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows"], hb = ["id", "disabled", "type", "value", "placeholder", "maxlength"];
function gb(e, n) {
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
        "prepend-icon": ue(() => [Y(e.$slots, "prepend-icon")]),
        "append-icon": ue(() => [Y(e.$slots, "append-icon")]),
        default: ue(() => [e.type === "password" ? (p(), O(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete")),
            placeholder: e.hint ? void 0 : e.placeholder,
            style: q({
              "--input-placeholder-color": e.placeholderColor
            })
          },
          null,
          14,
          mb
        )) : re("v-if", !0), e.textarea ? (p(), O(
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
            style: q({
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
            style: q({
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
var kd = ee({
  name: "VarInput",
  components: {
    VarFormDetails: qe,
    VarFieldDecorator: Sd
  },
  props: vb,
  setup(e) {
    var n = B("var-input-" + Ja().uid), r = B(null), a = B(!1), t = B(!1), o = R(() => e.type === "number" ? "text" : e.type), l = R(() => {
      var {
        maxlength: G,
        modelValue: E
      } = e;
      return G ? Rn(E) ? "0 / " + G : String(E).length + "/" + G : "";
    }), i = R(() => e.disabled || e.readonly ? "" : "text"), s = R(() => {
      var {
        hint: G,
        blurColor: E,
        focusColor: L
      } = e;
      if (!G)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? L || "var(--field-decorator-focus-color)" : E || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = $n(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: h
    } = kn(), y = (G) => {
      Be(() => {
        var {
          validateTrigger: E,
          rules: L,
          modelValue: Z
        } = e;
        f(E, G, L, Z);
      });
    }, g = (G) => {
      a.value = !0, S(e.onFocus, G), y("onFocus");
    }, b = (G) => {
      a.value = !1, S(e.onBlur, G), y("onBlur");
    }, V = (G) => {
      var E = G.target, {
        value: L
      } = E;
      return e.type === "number" && (L = M(L)), C(N(L));
    }, $ = () => {
      t.value = !0;
    }, T = (G) => {
      t.value && (t.value = !1, G.target.dispatchEvent(new Event("input")));
    }, I = (G) => {
      if (!t.value) {
        var E = V(G);
        S(e["onUpdate:modelValue"], E), S(e.onInput, E, G), y("onInput");
      }
    }, P = (G) => {
      var E = V(G);
      S(e.onChange, E, G), y("onChange");
    }, D = () => {
      var {
        disabled: G,
        readonly: E,
        clearable: L,
        onClear: Z
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || G || E || !L || (S(e["onUpdate:modelValue"], ""), S(Z, ""), y("onClear"));
    }, w = (G) => {
      var {
        disabled: E,
        onClick: L
      } = e;
      d != null && d.disabled.value || E || (S(L, G), y("onClick"));
    }, M = (G) => {
      var E = G.indexOf("-"), L = G.indexOf(".");
      return E > -1 && (G = E === 0 ? "-" + G.replace(/-/g, "") : G.replace(/-/g, "")), L > -1 && (G = G.slice(0, L + 1) + G.slice(L).replace(/\./g, "")), G.replace(/[^-0-9.]/g, "");
    }, N = (G) => e.modelModifiers.trim ? G.trim() : G, C = (G) => e.maxlength ? G.slice(0, z(e.maxlength)) : G, k = (G) => {
      var {
        disabled: E,
        readonly: L
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || E || L || G.stopPropagation();
    };
    function U(G) {
      var {
        disabled: E
      } = e;
      d != null && d.disabled.value || E || G.target === r.value || (j(), G.preventDefault());
    }
    var Q = () => {
      S(e["onUpdate:modelValue"], ""), h();
    }, x = () => m(e.rules, e.modelValue), j = () => {
      var G;
      (G = r.value) == null || G.focus();
    }, W = () => {
      r.value.blur();
    }, le = {
      reset: Q,
      validate: x,
      resetValidation: h
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
      n: fb,
      classes: cb,
      isEmpty: Rn,
      handleFocus: g,
      handleBlur: b,
      handleInput: I,
      handleChange: P,
      handleClear: D,
      handleClick: w,
      handleTouchstart: k,
      handleCompositionStart: $,
      handleCompositionEnd: T,
      handleMousedown: U,
      validate: x,
      resetValidation: h,
      reset: Q,
      focus: j,
      blur: W
    };
  }
});
kd.render = gb;
const hr = kd;
hr.install = function(e) {
  e.component(hr.name, hr);
};
var rk = hr;
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
  onClick: F()
}, {
  n: Cb,
  classes: Sb
} = ne("link");
function kb(e, n) {
  return p(), he(
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
      default: ue(() => [Y(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var $d = ee({
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
      o || S(l, t);
    };
    return {
      n: Cb,
      classes: Sb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: me
    };
  }
});
$d.render = kb;
const xr = $d;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var ak = xr, $b = {
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
function ql(e, n, r, a, t, o, l) {
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
  n: Pb,
  classes: Ob
} = ne("list");
function Vb(e, n) {
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
    )]) : re("v-if", !0), e.finished ? Y(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: c(e.n("finished"))
      },
      ae(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : re("v-if", !0), e.error ? Y(e.$slots, "error", {
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
    )), [[a]])]) : re("v-if", !0), A(
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
var Td = ee({
  name: "VarList",
  directives: {
    Ripple: Ue
  },
  components: {
    VarLoading: Vn
  },
  props: $b,
  setup(e) {
    var n = B(null), r = B(null), a, t = () => {
      S(e["onUpdate:error"], !1), S(e["onUpdate:loading"], !0), S(e.onLoad);
    }, o = () => {
      var i = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Le(e.offset) <= i;
    }, l = /* @__PURE__ */ function() {
      var i = Tb(function* () {
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
    }), Qa(() => {
      a.removeEventListener("scroll", l);
    }), {
      pack: je,
      listEl: n,
      detectorEl: r,
      dt: no,
      isNumber: en,
      load: t,
      check: l,
      n: Pb,
      classes: Ob
    };
  }
});
Td.render = Vb;
const ea = Td;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var tk = ea, Mb = {
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
  n: Xl
} = ne("loading-bar");
const Eb = ee({
  name: "VarLoadingBar",
  props: Mb,
  setup(e) {
    return () => _("div", {
      class: Bb(Xl(), [e.error, Xl("--error")]),
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
var Pd, Od, go, Vd, Kl, Md = {}, Ib = {
  value: 0,
  opacity: 0,
  error: !1
}, Ge = Ie(Ib), Nb = (e) => {
  Object.assign(Ge, e);
}, Db = (e) => {
  Object.assign(Ge, e), Md = e;
}, Ab = () => {
  Object.keys(Md).forEach((e) => {
    Ge[e] !== void 0 && (Ge[e] = void 0);
  });
}, Bd = () => {
  Kl || (Kl = !0, xa(Eb, Ge));
}, Hi = () => {
  Pd = window.setTimeout(() => {
    if (!(Ge.value >= 95)) {
      var e = Math.random();
      Ge.value < 70 && (e = Math.round(5 * Math.random())), Ge.value += e, Hi();
    }
  }, 200);
}, Fi = () => {
  window.clearTimeout(Od), window.clearTimeout(Pd), window.clearTimeout(go), window.clearTimeout(Vd);
}, zb = () => {
  Fi(), Ge.error = !1, Ge.value = 0, Bd(), go = window.setTimeout(() => {
    Ge.opacity = 1;
  }, 200), Hi();
}, Ed = () => {
  Fi(), Ge.value = 100, go = window.setTimeout(() => {
    Ge.opacity = 0, Od = window.setTimeout(() => {
      Ge.error = !1;
    }, 250);
  }, 300);
}, Lb = () => {
  Fi(), Ge.error = !0, Ge.value === 100 && (Ge.value = 0), Bd(), go = window.setTimeout(() => {
    Ge.opacity = 1;
  }, 200), Hi(), Vd = window.setTimeout(Ed, 300);
}, Id = {
  start: zb,
  finish: Ed,
  error: Lb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Nb,
  setDefaultOptions: Db,
  resetDefaultOptions: Ab
}, ok = Id;
const vi = Id;
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F()
}, {
  n: Fb,
  classes: Yb
} = ne("menu");
function jb(e, n) {
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
      Ia,
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
              style: q({
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
var Nd = ee({
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
    } = ld(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: dn,
      toSizeUnit: me,
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
Nd.render = jb;
const qn = Nd;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var ik = qn, Dd = Symbol("SELECT_BIND_OPTION_KEY");
function Wb() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = un(Dd);
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
  } = sn(Dd);
  return r || Sn("Option", "<var-option/> must in <var-select/>"), {
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
} = ne("option");
function Zb(e, n) {
  var r = te("var-checkbox"), a = Me("ripple");
  return we((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: q({
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
    )) : re("v-if", !0), A(
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
var Ad = ee({
  name: "VarOption",
  directives: {
    Ripple: Ue
  },
  components: {
    VarCheckbox: dr
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
    }, f = () => u(h), m = (y) => {
      n.value = y;
    }, h = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return ie([() => e.label, () => e.value], d), l(h), {
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
Ad.render = Zb;
const na = Ad;
na.install = function(e) {
  e.component(na.name, na);
};
var lk = na, Jb = {
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
function Qb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: Zl
} = ne("overlay");
const ra = ee({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Jb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = kt(() => e.show, 1), {
      disabled: o
    } = ao(), l = () => {
      S(e.onClick), S(e["onUpdate:show"], !1);
    };
    to(() => e.show, () => e.lockScroll);
    var i = () => _("div", Ve({
      class: Zl(),
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
        return _(Ia, {
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
ra.install = function(e) {
  e.component(ra.name, ra);
};
var sk = ra, _b = {
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
  n: xb,
  classes: e0
} = ne("pagination"), n0 = ["item-mode", "onClick"];
function r0(e, n) {
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
          onKeydown: n[3] || (n[3] = qi((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
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
      Te,
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
        n0
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
            Te,
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
    )) : re("v-if", !0), e.showQuickJumper && !e.simple ? (p(), O(
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
          onKeydown: n[9] || (n[9] = qi((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : re("v-if", !0), e.totalText ? (p(), O(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      ae(e.totalText),
      3
      /* TEXT, CLASS */
    )) : re("v-if", !0)],
    2
    /* CLASS */
  );
}
var zd = ee({
  name: "VarPagination",
  components: {
    VarMenu: qn,
    VarIcon: $e,
    VarCell: ur,
    VarInput: hr
  },
  directives: {
    Ripple: Ue
  },
  props: _b,
  setup(e) {
    var n = B(!1), r = B(""), a = B("1"), t = B(!1), o = B(!1), l = B(z(e.current) || 1), i = B(z(e.size) || 10), s = B([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(z(e.total) / z(i.value))), v = R(() => {
      var T = i.value * (l.value - 1) + 1, I = Math.min(i.value * l.value, z(e.total));
      return [T, I];
    }), f = R(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), m = (T, I) => en(T) ? !1 : I === 1 ? t.value : o.value, h = (T, I) => en(T) ? "basic" : I === 1 ? "head" : "tail", y = (T, I) => {
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
        en(T) && (l.value = T);
      }
    }, g = () => {
      e.disabled || (n.value = !0);
    }, b = (T) => {
      i.value = T, n.value = !1;
      var I = V(l.value);
      a.value = String(I), l.value = I;
    }, V = (T) => T > d.value ? d.value : T < 1 ? 1 : T, $ = (T, I, P) => {
      P.target.blur();
      var D = V(z(I));
      a.value = String(D), l.value = D, T === "quick" && (r.value = "");
    };
    return ie([() => e.current, () => e.size], (T) => {
      var [I, P] = T;
      l.value = z(I) || 1, i.value = z(P || 10);
    }), ie([l, i, d], (T, I) => {
      var [P, D, w] = T, [M, N] = I, C = [], {
        maxPagerCount: k,
        total: U,
        onChange: Q
      } = e, x = Math.ceil(z(U) / z(N)), j = w - (k - u.value) - 1;
      if (a.value = "" + P, w - 2 > k) {
        if (M === void 0 || w !== x)
          for (var W = 2; W < k + 2; W++)
            C.push(W);
        if (P <= k && P < j) {
          C = [];
          for (var le = 1; le < k + 1; le++)
            C.push(le + 1);
          t.value = !0, o.value = !1;
        }
        if (P > k && P < j) {
          C = [];
          for (var G = 1; G < k + 1; G++)
            C.push(P + G - u.value);
          t.value = P === 2 && k === 1, o.value = !1;
        }
        if (P >= j) {
          C = [];
          for (var E = 1; E < k + 1; E++)
            C.push(w - (k - E) - 1);
          t.value = !1, o.value = !0;
        }
        C = [1, "...", ...C, "...", w];
      } else
        for (var L = 1; L <= w; L++)
          C.push(L);
      s.value = C, M != null && w > 0 && S(Q, P, D), S(e["onUpdate:current"], P), S(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: xb,
      classes: e0,
      pack: je,
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
      clickItem: y,
      showMenu: g,
      clickSize: b,
      setPage: $,
      toNumber: z,
      formatElevation: dn
    };
  }
});
zd.render = r0;
const aa = zd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var uk = aa, a0 = {
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
  n: t0,
  classes: o0
} = ne("paper");
function i0(e, n) {
  var r = Me("ripple");
  return we((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: q({
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
var Ld = ee({
  name: "VarPaper",
  directives: {
    Ripple: Ue
  },
  props: a0,
  setup(e) {
    var n = (r) => {
      S(e.onClick, r);
    };
    return {
      n: t0,
      classes: o0,
      formatElevation: dn,
      toSizeUnit: me,
      handleClick: n
    };
  }
});
Ld.render = i0;
const ta = Ld;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var dk = ta;
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
var l0 = fi({
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
}, We(St, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: s0,
  classes: u0
} = ne("picker"), Jl = 300, d0 = 15, Ql = 0, v0 = ["onTouchstart", "onTouchmove", "onTouchend"], f0 = ["onTransitionend"];
function c0(e, n) {
  var r = te("var-button");
  return p(), he(
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
        )) : re("v-if", !0), A(
          "div",
          {
            class: c(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), O(
            Te,
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
                  style: q({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(p(!0), O(
                  Te,
                  null,
                  Ae(a.column.texts, (t) => (p(), O(
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
var Rd = ee({
  name: "VarPicker",
  components: {
    VarButton: Ze,
    VarPopup: bn
  },
  inheritAttrs: !1,
  props: l0,
  setup(e) {
    var n = B([]), r = R(() => Le(e.optionHeight)), a = R(() => Le(e.optionCount)), t = R(() => a.value * r.value / 2 - r.value / 2), o = R(() => a.value * r.value), l = [], i = (C, k) => {
      k.scrollEl = C;
    }, s = (C) => {
      S(e["onUpdate:show"], C);
    }, u = (C) => {
      var k = r.value + t.value, U = t.value - C.column.texts.length * r.value;
      C.translate >= k && (C.translate = k), C.translate <= U && (C.translate = U);
    }, d = (C, k) => {
      var {
        length: U
      } = C.column.texts;
      return k = k >= U ? U - 1 : k, k = k <= 0 ? 0 : k, k;
    }, v = (C) => {
      var k = Math.round((t.value - C.translate) / r.value);
      return d(C, k);
    }, f = () => {
      var C = n.value.map((U) => U.column.texts[U.index]), k = n.value.map((U) => U.index);
      return {
        texts: C,
        indexes: k
      };
    }, m = function(C, k, U, Q) {
      Q === void 0 && (Q = !1);
      var x = t.value - d(C, k) * r.value;
      x === C.translate && (C.scrolling = !1, !Q && D(C)), C.translate = x, C.duration = U;
    }, h = (C, k, U) => {
      C.translate += Math.abs(k / U) / 3e-3 * (k < 0 ? -1 : 1);
    }, y = (C, k) => {
      k.touching = !0, k.scrolling = !1, k.duration = 0, k.translate = bo(k.scrollEl);
    }, g = (C, k) => {
      if (k.touching) {
        var {
          clientY: U
        } = C.touches[0], Q = k.prevY !== void 0 ? U - k.prevY : 0;
        k.prevY = U, k.translate += Q, u(k);
        var x = performance.now();
        x - k.momentumTime > Jl && (k.momentumTime = x, k.momentumPrevY = k.translate);
      }
    }, b = (C, k) => {
      k.touching = !1, k.scrolling = !0, k.prevY = void 0;
      var U = k.translate - k.momentumPrevY, Q = performance.now() - k.momentumTime, x = Math.abs(U) >= d0 && Q <= Jl;
      x && h(k, U, Q), k.index = v(k), m(k, k.index, x ? 1e3 : 200);
    }, V = (C) => {
      C.scrolling = !1, D(C);
    }, $ = (C) => C.map((k, U) => {
      var Q, x = Se(k) ? {
        texts: k
      } : k, j = {
        id: Ql++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = x.initialIndex) != null ? Q : 0,
        columnIndex: U,
        duration: 0,
        momentumTime: 0,
        column: x,
        scrollEl: null,
        scrolling: !1
      };
      return m(j, j.index, 0, !0), j;
    }), T = (C) => {
      var k = [];
      return I(k, C, 0, !0), k;
    }, I = function(C, k, U, Q) {
      if (Q === void 0 && (Q = !1), Se(k) && k.length) {
        var x, j = Q && (x = e.cascadeInitialIndexes[C.length]) != null ? x : 0, W = {
          id: Ql++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: j,
          columnIndex: U,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: k.map((le) => le[e.textKey])
          },
          columns: k,
          scrollEl: null,
          scrolling: !1
        };
        C.push(W), m(W, W.index, 0, !0), I(C, W.columns[W.index].children, U + 1, Q);
      }
    }, P = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), I(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, D = (C) => {
      var {
        cascade: k,
        onChange: U
      } = e;
      k && P(C);
      var Q = n.value.some((le) => le.scrolling);
      if (!Q) {
        var {
          texts: x,
          indexes: j
        } = f(), W = j.every((le, G) => le === l[G]);
        W || (l = [...j], S(U, x, j));
      }
    }, w = () => {
      if (e.cascade) {
        var C = n.value.find((k) => k.scrolling);
        C && (C.translate = bo(C.scrollEl), C.index = v(C), m(C, C.index, 0, !0), C.scrolling = !1, P(C));
      } else
        n.value.forEach((k) => {
          k.translate = bo(k.scrollEl), k.index = v(k), m(k, k.index, 0);
        });
    }, M = () => {
      w();
      var {
        texts: C,
        indexes: k
      } = f();
      l = [...k], S(e.onConfirm, C, k);
    }, N = () => {
      w();
      var {
        texts: C,
        indexes: k
      } = f();
      l = [...k], S(e.onCancel, C, k);
    };
    return ie(() => e.columns, (C) => {
      n.value = e.cascade ? T(Xi(C)) : $(Xi(C));
      var {
        indexes: k
      } = f();
      l = [...k];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: s0,
      classes: u0,
      pack: je,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: De,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: g,
      handleTouchend: b,
      handleTransitionend: V,
      confirm: M,
      cancel: N,
      dt: no
    };
  }
});
Rd.render = c0;
const gr = Rd;
var rn;
function Ea(e) {
  return new Promise((n) => {
    Ea.close();
    var r = Se(e) ? {
      columns: e
    } : e, a = Ie(r);
    a.dynamic = !0, a.teleport = "body", rn = a;
    var {
      unmountInstance: t
    } = xa(gr, a, {
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
var vk = gr;
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
} = ne("progress"), y0 = ["viewBox"], b0 = ["cx", "cy", "r", "stroke-width"], w0 = ["cx", "cy", "r", "stroke-width"];
function C0(e, n) {
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
          style: q({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (p(), O(
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
        )) : re("v-if", !0), A(
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
      )) : re("v-if", !0)],
      2
      /* CLASS */
    )) : re("v-if", !0), e.mode === "circle" ? (p(), O(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), O(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: q({
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
            style: q({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          b0
        )) : re("v-if", !0), A(
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
          w0
        )],
        14,
        y0
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
      )) : re("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : re("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ud = ee({
  name: "VarProgress",
  props: p0,
  setup(e) {
    var n = R(() => {
      var a = z(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = R(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + Le(a) + " " + Le(a), i = z(o) > 100 ? 100 : Math.round(z(o)), s = (Le(a) - Le(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
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
      toSizeUnit: me,
      multiplySizeUnit: _e,
      linearProps: n,
      circleProps: r
    };
  }
});
Ud.render = C0;
const oa = Ud;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var fk = oa, S0 = {
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
  classes: k0
} = ne("pull-refresh"), ns = 150;
function $0(e, n) {
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
        style: q(e.controlStyle)
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
var Hd = ee({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: S0,
  setup(e) {
    var n = B(0), r = B(null), a = B(null), t = B(0), o = B("-125%"), l = B("arrow-down"), i = B("default"), s = B(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var w = xl(function* (M) {
        if (l.value !== M)
          return l.value = M, new Promise((N) => {
            window.setTimeout(N, ns);
          });
      });
      return function(N) {
        return w.apply(this, arguments);
      };
    }(), h = R(() => i.value !== "loading" && i.value !== "success" && !e.disabled), y = R(() => ({
      transform: "translate3d(0px, " + (Re(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: b.value ? e.successBgColor : e.bgColor,
      color: b.value ? e.successColor : e.color
    })), g = R(() => Math.abs(2 * n.value)), b = R(() => i.value === "success"), V = (w) => {
      var M = "classList" in u ? u : document.body;
      M.classList[w](es() + "--lock");
    }, $ = (w) => {
      if (n.value === 0) {
        var {
          width: M
        } = a.value.getBoundingClientRect();
        n.value = -(M + M * 0.25);
      }
      v = w.touches[0].clientY, f = 0, d = br(w.target);
    }, T = (w) => {
      if (h.value && !(d !== u && ut(d) > 0)) {
        var M = ut(u);
        if (!(M > 0)) {
          var N = M === 0, C = w.touches[0];
          f = C.clientY - v, N && f >= 0 && w.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = w.touches[0].clientY), N && o.value > n.value && V("add");
          var k = (w.touches[0].clientY - t.value) / 2 + n.value;
          o.value = k >= g.value ? g.value : k, m(o.value >= g.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, I = /* @__PURE__ */ function() {
      var w = xl(function* () {
        h.value && (s.value = !0, o.value >= g.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = g.value * 0.3, S(e["onUpdate:modelValue"], !0), Be(() => {
          S(e.onRefresh);
        }), V("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, V("remove");
        }, z(e.animationDuration))), d = null);
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), P = () => {
      u = e.target ? hs(e.target, "PullRefresh") : br(r.value);
    }, D = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, z(e.animationDuration));
    };
    return ie(() => e.modelValue, (w) => {
      w === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, D();
      }, z(e.successDuration)));
    }), ln(P), wr(r, "touchmove", T), {
      n: es,
      classes: k0,
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
Hd.render = $0;
const ia = Hd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var ck = ia, T0 = {
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
}, Fd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function P0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Fd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function O0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(Fd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: V0,
  classes: M0
} = ne("radio");
function B0(e, n) {
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
          style: q({
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
var Yd = ee({
  name: "VarRadio",
  directives: {
    Ripple: Ue,
    Hover: Nn
  },
  components: {
    VarIcon: $e,
    VarFormDetails: qe,
    VarHoverOverlay: tn
  },
  inheritAttrs: !1,
  props: T0,
  setup(e) {
    var n = B(!1), r = R(() => n.value === e.checkedValue), a = B(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = O0(), {
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
    } = kn(), h = (P) => {
      Be(() => {
        var {
          validateTrigger: D,
          rules: w,
          modelValue: M
        } = e;
        v(D, P, w, M);
      });
    }, y = (P) => {
      var {
        checkedValue: D,
        onChange: w
      } = e;
      t && n.value === D || (n.value = P, S(e["onUpdate:modelValue"], n.value), S(w, n.value), t == null || t.onToggle(D), h("onChange"));
    }, g = (P) => {
      var {
        disabled: D,
        readonly: w,
        uncheckedValue: M,
        checkedValue: N,
        onClick: C
      } = e;
      s != null && s.disabled.value || D || (S(C, P), !(s != null && s.readonly.value || w) && (a.value = !0, y(r.value ? M : N)));
    }, b = (P) => {
      var {
        checkedValue: D,
        uncheckedValue: w
      } = e;
      n.value = P === D ? D : w;
    }, V = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, $ = () => f(e.rules, e.modelValue), T = (P) => {
      var {
        uncheckedValue: D,
        checkedValue: w
      } = e, M = ![D, w].includes(P);
      M && (P = r.value ? D : w), y(P);
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
    return S(o, I), S(u, I), {
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
      validate: $,
      resetValidation: m
    };
  }
});
Yd.render = B0;
const la = Yd;
la.install = function(e) {
  e.component(la.name, la);
};
var mk = la;
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: N0,
  classes: D0
} = ne("radio-group");
function A0(e, n) {
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
var jd = ee({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: qe
  },
  props: I0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = P0(), {
      bindForm: t
    } = $n(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = kn(), u = R(() => o.value), d = (g) => {
      Be(() => {
        var {
          validateTrigger: b,
          rules: V,
          modelValue: $
        } = e;
        l(b, g, V, $);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: b
      } = g;
      return b(e.modelValue);
    }), f = (g) => {
      S(e["onUpdate:modelValue"], g), S(e.onChange, g), d("onChange");
    }, m = () => i(e.rules, e.modelValue), h = () => {
      S(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => n.value, v);
    var y = {
      onToggle: f,
      validate: m,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return S(t, y), a(y), {
      errorMessage: o,
      n: N0,
      classes: D0,
      reset: h,
      validate: m,
      resetValidation: s
    };
  }
});
jd.render = A0;
const sa = jd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var pk = sa, z0 = {
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
  n: nt
} = ne("rate"), L0 = ["onClick"];
function R0(e, n) {
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
        Te,
        null,
        Ae(e.toNumber(e.count), (i) => we((p(), O(
          "div",
          {
            key: i,
            style: q(e.getStyle(i)),
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
              style: q({
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
          L0
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
var Wd = ee({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: qe,
    VarHoverOverlay: tn
  },
  directives: {
    Ripple: Ue,
    Hover: Nn
  },
  props: z0,
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
        marginRight: $ !== z(T) ? me(I) : 0
      };
    }, d = ($) => {
      var {
        name: T,
        color: I
      } = v($);
      return {
        [nt("content")]: !0,
        [nt("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [nt("--error")]: a.value,
        [nt("--primary")]: T !== e.emptyIcon && !I
      };
    }, v = ($) => {
      var {
        modelValue: T,
        disabled: I,
        disabledColor: P,
        color: D,
        half: w,
        emptyColor: M,
        icon: N,
        halfIcon: C,
        emptyIcon: k
      } = e, U = D;
      return (I || n != null && n.disabled.value) && (U = P), $ <= z(T) ? {
        color: U,
        name: N
      } : w && $ <= z(T) + 0.5 ? {
        color: U,
        name: C
      } : {
        color: I || n != null && n.disabled.value ? P : M,
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
    }, m = () => o(e.rules, z(e.modelValue)), h = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = ($, T) => {
      var {
        readonly: I,
        disabled: P,
        onChange: D
      } = e;
      I || P || n != null && n.disabled.value || n != null && n.readonly.value || (f($, T), S(D, $), h());
    }, g = ($) => (T) => {
      s.value = $, i.value = T;
    }, b = () => {
      S(e["onUpdate:modelValue"], 0), l();
    }, V = {
      reset: b,
      validate: m,
      resetValidation: l
    };
    return S(r, V), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: y,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: g,
      reset: b,
      validate: m,
      resetValidation: l,
      toSizeUnit: me,
      toNumber: z,
      n: nt
    };
  }
});
Wd.render = R0;
const ua = Wd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var hk = ua;
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
}, F0 = (e) => (Na(""), e = e(), Da(), e), Y0 = {
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
  return p(), O("svg", Y0, W0);
}
var Gd = ee({});
Gd.render = G0;
const q0 = Gd;
var X0 = (e) => (Na(""), e = e(), Da(), e), K0 = {
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
  return p(), O("svg", K0, J0);
}
var qd = ee({});
qd.render = Q0;
const _0 = qd;
var x0 = (e) => (Na(""), e = e(), Da(), e), e1 = {
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
  return p(), O("svg", e1, r1);
}
var Xd = ee({});
Xd.render = a1;
const t1 = Xd;
var {
  n: o1,
  classes: i1
} = ne("result");
function l1(e, n) {
  return p(), O(
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
var Kd = ee({
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
      toNumber: z
    };
  }
});
Kd.render = l1;
const s1 = Kd;
var u1 = (e) => (Na(""), e = e(), Da(), e), d1 = {
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
  return p(), O("svg", d1, f1);
}
var Zd = ee({});
Zd.render = c1;
const m1 = Zd;
var p1 = (e) => (Na(""), e = e(), Da(), e), h1 = {
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
  return p(), O("svg", h1, y1);
}
var Jd = ee({});
Jd.render = b1;
const w1 = Jd;
var {
  n: C1,
  classes: S1
} = ne("result");
function k1(e, n) {
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
          style: q({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(p(), he(
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
    )) : re("v-if", !0)]), Y(e.$slots, "title", {}, () => [e.title ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ae(e.title),
      3
      /* TEXT, CLASS */
    )) : re("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : re("v-if", !0)]), e.$slots.footer ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [Y(e.$slots, "footer")],
      2
      /* CLASS */
    )) : re("v-if", !0)],
    2
    /* CLASS */
  );
}
var Qd = ee({
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
      return "calc(" + (a ? me(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? me(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: C1,
      classes: S1,
      toNumber: z,
      toPxNum: Le,
      toSizeUnit: me,
      circleSize: n,
      borderSize: r
    };
  }
});
Qd.render = k1;
const da = Qd;
da.install = function(e) {
  e.component(da.name, da);
};
var gk = da;
function $1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function T1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var P1 = {
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
  onClick: F()
}, {
  n: O1,
  classes: V1
} = ne("row");
function M1(e, n) {
  return p(), O(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var _d = ee({
  name: "VarRow",
  props: P1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = qm(), t = R(() => {
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
      n: O1,
      classes: V1,
      average: t,
      handleClick: l,
      padStartFlex: Yt
    };
  }
});
_d.render = M1;
const va = _d;
va.install = function(e) {
  e.component(va.name, va);
};
var yk = va;
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
function B1(e) {
  return ["left", "right", "center"].includes(e);
}
var E1 = ci({
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
  onFocus: F(),
  onBlur: F(),
  onClose: F(),
  onChange: F(),
  onClear: F(),
  "onUpdate:modelValue": F()
}, We(Ui, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: I1,
  classes: N1
} = ne("select"), D1 = {
  key: 1
};
function A1(e, n) {
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
            "prepend-icon": ue(() => [Y(e.$slots, "prepend-icon")]),
            "append-icon": ue(() => [Y(e.$slots, "append-icon")]),
            default: ue(() => [A(
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
                [e.isEmptyModelValue ? re("v-if", !0) : Y(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), O(
                  Te,
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
                      Te,
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
                  D1,
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
var xd = ee({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: qn,
    VarChip: vr,
    VarFieldDecorator: Sd,
    VarFormDetails: qe
  },
  props: E1,
  setup(e) {
    var n = B(!1), r = R(() => e.multiple), a = R(() => e.focusColor), t = B(""), o = B([]), l = R(() => Rn(e.modelValue)), i = R(() => e.disabled || e.readonly ? "" : "pointer"), s = B(0), {
      bindForm: u,
      form: d
    } = $n(), {
      length: v,
      options: f,
      bindOptions: m
    } = Wb(), {
      errorMessage: h,
      validateWithTrigger: y,
      validate: g,
      // expose
      resetValidation: b
    } = kn(), V = B(null), $ = R(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), T = () => {
      var {
        multiple: E,
        modelValue: L
      } = e;
      if (E) {
        var Z = L;
        o.value = Z.map(D);
      }
      !E && !Rn(L) && (t.value = D(L)), !E && Rn(L) && (t.value = "");
    }, I = (E) => {
      Be(() => {
        var {
          validateTrigger: L,
          rules: Z,
          modelValue: H
        } = e;
        y(L, E, Z, H);
      });
    }, P = (E) => {
      var {
        value: L,
        label: Z
      } = E;
      return L.value != null ? L.value : Z.value;
    }, D = (E) => {
      var L, Z, H = f.find((K) => {
        var {
          value: J
        } = K;
        return J.value === E;
      });
      return H || (H = f.find((K) => {
        var {
          label: J
        } = K;
        return J.value === E;
      })), (L = (Z = H) == null ? void 0 : Z.label.value) != null ? L : "";
    }, w = () => {
      var {
        disabled: E,
        readonly: L,
        onFocus: Z
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || E || L || (s.value = Le(e.offsetY), n.value = !0, S(Z), I("onFocus"));
    }, M = () => {
      var {
        disabled: E,
        readonly: L,
        onBlur: Z
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || E || L || (S(Z), I("onBlur"));
    }, N = (E) => {
      var {
        disabled: L,
        readonly: Z,
        multiple: H,
        onChange: K
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || L || Z)) {
        var J = H ? f.filter((fe) => {
          var {
            selected: ge
          } = fe;
          return ge.value;
        }).map(P) : P(E);
        S(e["onUpdate:modelValue"], J), S(K, J), I("onChange"), !H && (n.value = !1);
      }
    }, C = () => {
      var {
        disabled: E,
        readonly: L,
        multiple: Z,
        clearable: H,
        onClear: K
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || E || L || !H)) {
        var J = Z ? [] : void 0;
        S(e["onUpdate:modelValue"], J), S(K, J), I("onClear");
      }
    }, k = (E) => {
      var {
        disabled: L,
        onClick: Z
      } = e;
      d != null && d.disabled.value || L || (S(Z, E), I("onClick"));
    }, U = (E) => {
      var {
        disabled: L,
        readonly: Z,
        modelValue: H,
        onClose: K
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || L || Z)) {
        var J = H, fe = f.find((ze) => {
          var {
            label: Ee
          } = ze;
          return Ee.value === E;
        }), ge = J.filter((ze) => {
          var Ee;
          return ze !== ((Ee = fe.value.value) != null ? Ee : fe.label.value);
        });
        S(e["onUpdate:modelValue"], ge), S(K, ge), I("onClose");
      }
    }, Q = () => {
      var {
        multiple: E,
        modelValue: L
      } = e;
      if (E) {
        var Z = L;
        f.forEach((H) => H.sync(Z.includes(P(H))));
      } else
        f.forEach((H) => H.sync(L === P(H)));
      T();
    }, x = () => {
      s.value = Le(e.offsetY), n.value = !0;
    }, j = () => {
      n.value = !1;
    }, W = () => g(e.rules, e.modelValue), le = () => {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), b();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: E,
        modelValue: L
      } = e;
      E && !Se(L) && Sn("Select", "The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, Q, {
      deep: !0
    }), ie(() => v.value, Q);
    var G = {
      multiple: r,
      focusColor: a,
      computeLabel: T,
      onSelect: N,
      reset: le,
      validate: W,
      resetValidation: b
    };
    return m(G), S(u, G), {
      offsetY: s,
      isFocus: n,
      errorMessage: h,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: V,
      placement: $,
      cursor: i,
      n: I1,
      classes: N1,
      handleFocus: w,
      handleBlur: M,
      handleClear: C,
      handleClick: k,
      handleClose: U,
      reset: le,
      validate: W,
      resetValidation: b,
      focus: x,
      blur: j
    };
  }
});
xd.render = A1;
const fa = xd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var bk = fa, z1 = {
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
} = ne("skeleton");
function U1(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? re("v-if", !0) : (p(), O(
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
      )) : re("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), O(
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
        )) : re("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), O(
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
          )) : re("v-if", !0), (p(!0), O(
            Te,
            null,
            Ae(e.toNumber(e.rows), (r, a) => (p(), O(
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
        )) : re("v-if", !0)],
        2
        /* CLASS */
      )) : re("v-if", !0)],
      2
      /* CLASS */
    )) : re("v-if", !0), e.loading && e.fullscreen ? (p(), O(
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
    )) : re("v-if", !0)],
    2
    /* CLASS */
  );
}
var ev = ee({
  name: "VarSkeleton",
  props: z1,
  setup() {
    return {
      n: L1,
      classes: R1,
      toSizeUnit: me,
      toNumber: z
    };
  }
});
ev.render = U1;
const ca = ev;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var wk = ca;
function H1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ne;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ne || (Ne = {}));
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
  rules: {
    type: Array
  },
  onChange: F(),
  onStart: F(),
  onEnd: F(),
  "onUpdate:modelValue": F()
}, {
  n: rs,
  classes: Y1
} = ne("slider"), j1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function W1(e, n) {
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
      ), (p(!0), O(
        Te,
        null,
        Ae(e.thumbList, (o) => (p(), O(
          "div",
          {
            class: c(e.n("thumb")),
            key: o.enumValue,
            style: q({
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
              style: q({
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
              style: q({
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
              ae(o.text),
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
var nv = ee({
  name: "VarSlider",
  components: {
    VarFormDetails: qe,
    VarHoverOverlay: tn
  },
  directives: {
    Hover: Nn
  },
  props: F1,
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
    }), m = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = B(null), y = B(0), g = B(!1), b = Ie({
      [Ne.First]: f(),
      [Ne.Second]: f()
    }), V = R(() => z(e.max) - z(e.min)), $ = R(() => y.value / V.value * z(e.step)), T = R(() => {
      var {
        modelValue: H,
        range: K
      } = e, J = [];
      return K && Se(H) ? J = [{
        value: M(H[0]),
        enumValue: Ne.First,
        text: N(H[0]),
        hovering: at(i),
        handleHovering: s
      }, {
        value: M(H[1]),
        enumValue: Ne.Second,
        text: N(H[1]),
        hovering: at(u),
        handleHovering: d
      }] : en(H) && (J = [{
        value: M(H),
        enumValue: Ne.First,
        text: N(H),
        hovering: at(i),
        handleHovering: s
      }]), J;
    }), I = R(() => {
      var {
        activeColor: H,
        range: K,
        modelValue: J
      } = e, fe = K && Se(J) ? M(Math.min(J[0], J[1])) : 0, ge = K && Se(J) ? M(Math.max(J[0], J[1])) - fe : M(J);
      return {
        width: ge + "%",
        left: fe + "%",
        background: H
      };
    }), P = R(() => e.disabled || (r == null ? void 0 : r.disabled.value)), D = R(() => e.readonly || (r == null ? void 0 : r.readonly.value)), w = (H) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : b[H].active, M = (H) => {
      var {
        min: K,
        max: J
      } = e;
      return H < z(K) ? 0 : H > z(J) ? 100 : (H - z(K)) / V.value * 100;
    }, N = (H) => {
      if (!en(H))
        return 0;
      var K = H;
      K < Number(e.min) && (K = Number(e.min)), K > Number(e.max) && (K = Number(e.max));
      var J = parseInt("" + K, 10) === K;
      return J ? K : z(K.toPrecision(5));
    }, C = (H, K) => {
      P.value || K.handleHovering(H);
    }, k = (H, K) => {
      var J = [], {
        step: fe,
        range: ge,
        modelValue: ze,
        onChange: Ee,
        min: mn
      } = e, Aa = z(fe), zn = Math.round(H / $.value), Xe = zn * Aa + z(mn), pn = b[K].percentValue * Aa + z(mn);
      if (b[K].percentValue = zn, ge && Se(ze) && (J = K === Ne.First ? [Xe, ze[1]] : [ze[0], Xe]), pn !== Xe) {
        var Tt = ge ? J.map((Pt) => N(Pt)) : N(Xe);
        S(Ee, Tt), S(e["onUpdate:modelValue"], Tt), m();
      }
    }, U = (H) => {
      if (!e.range)
        return Ne.First;
      var K = b[Ne.First].percentValue * $.value, J = b[Ne.Second].percentValue * $.value, fe = Math.abs(H - K), ge = Math.abs(H - J);
      return fe <= ge ? Ne.First : Ne.Second;
    }, Q = (H, K) => {
      y.value || (y.value = h.value.offsetWidth), P.value || (b[K].active = !0), !(P.value || D.value) && (S(e.onStart), g.value = !0, b[K].startPosition = H.touches[0].clientX);
    }, x = (H, K) => {
      if (!(P.value || D.value || !g.value)) {
        var J = H.touches[0].clientX - b[K].startPosition + b[K].currentLeft;
        J <= 0 ? J = 0 : J >= y.value && (J = y.value), k(J, K);
      }
    }, j = (H) => {
      var {
        range: K,
        modelValue: J,
        onEnd: fe,
        step: ge,
        min: ze
      } = e;
      if (P.value || (b[H].active = !1), !(P.value || D.value)) {
        var Ee = [];
        b[H].currentLeft = b[H].percentValue * $.value;
        var mn = b[H].percentValue * z(ge) + z(ze);
        K && Se(J) && (Ee = H === Ne.First ? [mn, J[1]] : [J[0], mn]), S(fe, K ? Ee : mn), g.value = !1;
      }
    }, W = (H) => {
      if (!(P.value || D.value) && !H.target.closest("." + rs("thumb"))) {
        var K = H.clientX - Wv(H.currentTarget), J = U(K);
        k(K, J), j(J);
      }
    }, le = () => {
      var H = z(e.step);
      return isNaN(H) ? (_i("Slider", 'type of prop "step" should be Number'), !1) : H < 0 ? (_i("Slider", '"step" should be > 0'), !1) : !0;
    }, G = () => {
      var {
        range: H,
        modelValue: K
      } = e;
      return H && !Se(K) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !H && Se(K) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : H && Se(K) && K.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, E = function(H, K) {
      H === void 0 && (H = e.modelValue), K === void 0 && (K = z(e.step));
      var J = (fe) => {
        var {
          min: ge,
          max: ze
        } = e;
        return fe < z(ge) ? 0 : fe > z(ze) ? V.value / K : (fe - z(ge)) / K;
      };
      e.range && Se(H) ? (b[Ne.First].percentValue = J(H[0]), b[Ne.First].currentLeft = b[Ne.First].percentValue * $.value, b[Ne.Second].percentValue = J(H[1]), b[Ne.Second].currentLeft = b[Ne.Second].percentValue * $.value) : en(H) && (b[Ne.First].currentLeft = J(H) * $.value);
    }, L = () => {
      var H = e.range ? [0, 0] : 0;
      S(e["onUpdate:modelValue"], H), l();
    }, Z = {
      reset: L,
      validate: v,
      resetValidation: l
    };
    return S(n, Z), ie([() => e.modelValue, () => e.step], (H) => {
      var [K, J] = H;
      !le() || !G() || g.value || E(K, z(J));
    }), ie(y, () => E()), ln(() => {
      !le() || !G() || (y.value = h.value.offsetWidth);
    }), {
      n: rs,
      classes: Y1,
      Thumbs: Ne,
      sliderEl: h,
      getFillStyle: I,
      isDisabled: P,
      errorMessage: a,
      thumbsProps: b,
      thumbList: T,
      hover: C,
      multiplySizeUnit: _e,
      toNumber: z,
      showLabel: w,
      start: Q,
      move: x,
      end: j,
      click: W
    };
  }
});
nv.render = W1;
const ma = nv;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Ck = ma;
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
function G1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function q1(e) {
  return Yi.includes(e);
}
var rv = {
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
  loadingType: We(tr, "type"),
  loadingSize: We(tr, "size"),
  loadingRadius: We(tr, "radius"),
  loadingColor: mi({}, We(tr, "color"), {
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
  n: X1,
  classes: K1
} = ne("snackbar"), Z1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function J1(e, n) {
  var r = te("var-icon"), a = te("var-loading");
  return we((p(), O(
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
          class: c([e.n("icon")])
        },
        [Y(e.$slots, "icon")],
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
        )) : re("v-if", !0), e.type === "loading" ? (p(), he(
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
        )) : re("v-if", !0), Y(e.$slots, "action")],
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
var av = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Vn,
    VarIcon: $e
  },
  props: rv,
  setup(e) {
    var n = B(null), {
      zIndex: r
    } = kt(() => e.show, 1);
    to(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? Z1[e.type] : ""), o = () => {
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
      SNACKBAR_TYPE: Yi,
      n: X1,
      classes: K1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
av.render = J1;
const tv = av;
var {
  n: Q1
} = ne("snackbar");
function _1(e, n) {
  var r = te("var-snackbar-core");
  return p(), he(
    Ia,
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
            icon: ue(() => [Y(e.$slots, "icon")]),
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
var ov = ee({
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
      n: Q1,
      disabled: e
    };
  }
});
ov.render = _1;
const pa = ov;
function pt() {
  return pt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, pt.apply(this, arguments);
}
function x1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var Yi = ["loading", "success", "warning", "info", "error"], as = 0, pi = !1, iv, Za = !1, lv = {
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
}, Cn = Ie([]), ji = lv, ew = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, ko = (e) => () => wt(e) ? e() : e, nw = {
  setup() {
    return () => {
      var e = Cn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Za && (a.position = "top");
        var l = Za ? "relative" : "absolute", i = pt({
          position: l
        }, lw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: ko(s),
          icon: ko(u),
          action: ko(d)
        };
        return _(tv, Ve(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return _(Lv, Ve(ew, {
        style: {
          zIndex: fn.zIndex
        },
        onAfterEnter: rw,
        onAfterLeave: aw
      }), x1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Zn = function(e) {
  var n = ow(e), r = Ie(pt({}, ji, n));
  r.show = !0, pi || (pi = !0, iv = xa(nw).unmountInstance);
  var {
    length: a
  } = Cn, t = {
    id: as++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Za)
    tw(t);
  else {
    var o = "update-" + as;
    iw(r, o);
  }
  return {
    clear() {
      !Za && Cn.length ? Cn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Yi.forEach((e) => {
  Zn[e] = (n) => (bi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Zn(n));
});
Zn.install = function(e) {
  e.component(pa.name, pa);
};
Zn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Za && (Cn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Za = e);
};
Zn.clear = function() {
  Cn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Zn.setDefaultOptions = function(e) {
  ji = e;
};
Zn.resetDefaultOptions = function() {
  ji = lv;
};
Zn.Component = pa;
function rw(e) {
  var n = e.getAttribute("data-id"), r = Cn.find((a) => a.id === z(n));
  r && S(r.reactiveSnackOptions.onOpened);
}
function aw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = Cn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, S(r.reactiveSnackOptions.onClosed));
  var a = Cn.every((t) => t.animationEnd);
  a && (S(iv), Cn = Ie([]), pi = !1);
}
function tw(e) {
  Cn.push(e);
}
function ow(e) {
  return e === void 0 && (e = {}), Re(e) ? {
    content: e
  } : e;
}
function iw(e, n) {
  var [r] = Cn;
  r.reactiveSnackOptions = pt({}, r.reactiveSnackOptions, e), r._update = n;
}
function lw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Sk = pa;
const hi = Zn;
var sv = (e) => ["mini", "small", "normal", "large"].includes(e), sw = (e) => sv(e) || Se(e) || en(e) || Re(e), uw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), dw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), vw = {
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
function vn(e) {
  return "calc(" + e + " / 2)";
}
function fw(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = vn(e) + " " + n + " " + vn(e) + " 0" : i = vn(e) + " 0" : t === "space-around" ? i = vn(e) + " " + vn(n) : t === "space-between" && (o === 0 ? i = vn(e) + " " + vn(n) + " " + vn(e) + " 0" : o === l ? i = vn(e) + " 0 " + vn(e) + " " + vn(n) : i = vn(e) + " " + vn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: $o,
  classes: cw
} = ne("space");
const ha = ee({
  name: "VarSpace",
  props: vw,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Se(t) ? t.map(me) : [me(t), me(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = S(r.default)) != null ? t : [], f = sv(d), [m, h] = a(d, f);
      v = $s(v);
      var y = v.length - 1, g = v.map((b, V) => {
        var $ = fw(m, h, {
          direction: u,
          justify: l,
          index: V,
          lastIndex: y
        });
        return _("div", {
          style: {
            margin: $
          }
        }, [b]);
      });
      return _("div", {
        class: cw($o(), $o("$--box"), [o, $o("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Yt(l),
          alignItems: Yt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [g]);
    };
  }
});
ha.install = function(e) {
  e.component(ha.name, ha);
};
var kk = ha, mw = {
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
function pw() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(uv);
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
  } = sn(uv);
  return r || Sn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: gw,
  classes: yw
} = ne("step"), bw = {
  key: 3
};
function ww(e, n) {
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
            style: q({
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
            bw,
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
      ), e.isLastChild ? re("v-if", !0) : (p(), O(
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
var dv = ee({
  name: "VarStep",
  components: {
    VarIcon: $e
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
    }, y = () => v(a.value), g = (b) => {
      d.value === "horizontal" && (e.value = b);
    };
    return o(h), ie(i, (b) => {
      if (r.value = b - 1 === a.value, e.value) {
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
      click: y,
      getRef: g
    };
  }
});
dv.render = ww;
const ga = dv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var $k = ga;
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
  onClickStep: F()
}, {
  n: kw
} = ne("steps");
function $w(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      style: q({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var vv = ee({
  name: "VarSteps",
  props: Sw,
  setup(e) {
    var n = R(() => e.active), r = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      length: o,
      bindStep: l
    } = pw(), i = (u) => {
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
      n: kw
    };
  }
});
vv.render = $w;
const ya = vv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Tk = ya, Tw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Pw
} = ne("style-provider"), Ow = ee({
  name: "VarStyleProvider",
  props: Tw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => vs(e.tag, {
      class: Pw(),
      style: Ss(e.styleVars)
    }, S(r.default));
  }
});
const ba = Ow;
var To = [];
function ht(e) {
  To.forEach((r) => document.documentElement.style.removeProperty(r)), To.length = 0;
  var n = Ss(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), To.push(a);
  });
}
ht.Component = ba;
ba.install = function(e) {
  e.component(ba.name, ba);
};
ht.install = function(e) {
  e.component(ba.name, ba);
};
var Pk = ba, Vw = {
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
  n: Mw,
  classes: Bw
} = ne("switch");
function Ew(e, n) {
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
      ), we((p(), O(
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
          )) : re("v-if", !0)],
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
var fv = ee({
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
  props: Vw,
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
        size: b,
        modelValue: V,
        color: $,
        closeColor: T,
        loadingColor: I,
        activeValue: P
      } = e;
      return {
        handle: {
          width: _e(b),
          height: _e(b),
          backgroundColor: V === P ? $ : T,
          color: I
        },
        ripple: {
          left: V === P ? _e(b, 0.5) : "-" + _e(b, 0.5),
          color: V === P ? $ : T || "#999",
          width: _e(b, 2),
          height: _e(b, 2)
        },
        track: {
          height: _e(b, 0.72),
          width: _e(b, 1.9),
          borderRadius: _e(b, 2 / 3),
          filter: V === P || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === P ? $ : T
        },
        switch: {
          height: _e(b, 1.2),
          width: _e(b, 2)
        }
      };
    }), f = R(() => {
      var {
        size: b = "5.333vw"
      } = e;
      return _e(b, 0.4);
    }), m = (b) => {
      var {
        onClick: V,
        onChange: $,
        disabled: T,
        loading: I,
        readonly: P,
        modelValue: D,
        activeValue: w,
        inactiveValue: M,
        "onUpdate:modelValue": N
      } = e;
      if (S(V, b), !(T || I || P || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var C = D === w ? M : w;
        S($, C), S(N, C), d();
      }
    }, h = (b) => {
      e.disabled || r != null && r.disabled.value || s(b);
    }, y = () => {
      S(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, g = {
      reset: y,
      validate: u,
      resetValidation: l
    };
    return S(n, g), {
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
fv.render = Ew;
const wa = fv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Ok = wa, Iw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: F()
}, cv = Symbol("TABS_BIND_TAB_KEY");
function Nw() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(cv);
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
  } = sn(cv);
  return n || Sn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: At,
  classes: Aw
} = ne("tab");
function zw(e, n) {
  var r = Me("ripple");
  return we((p(), O(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var mv = ee({
  name: "VarTab",
  directives: {
    Ripple: Ue
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
    } = l, y = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(y);
    var g = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), b = () => e.disabled ? f.value : g() ? d.value : v.value, V = () => e.disabled ? At("$-tab--disabled") : g() ? At("$-tab--active") : At("$-tab--inactive"), $ = (T) => {
      var {
        disabled: I,
        name: P,
        onClick: D
      } = e;
      I || (S(D, P ?? o.value, T), s(y));
    };
    return ie(() => e.name, h), ie(() => e.disabled, h), {
      n: At,
      classes: Aw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: b,
      computeColorClass: V,
      handleClick: $
    };
  }
});
mv.render = zw;
const Ca = mv;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var Vk = Ca, pv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Lw() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(pv);
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
  } = sn(pv);
  return n || Sn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
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
} = ne("tab-item");
function Yw(e, n) {
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
      }) : re("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var hv = ee({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Wn
  },
  props: Uw,
  setup(e) {
    var n = B(!1), r = B(!1), a = R(() => e.name), {
      index: t,
      bindTabsItems: o
    } = Rw(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: Hw,
      classes: Fw,
      current: n,
      initSlot: r
    };
  }
});
hv.render = Yw;
const Sa = hv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Mk = Sa, jw = {
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
} = ne("table");
function qw(e, n) {
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
          style: q({
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
    )) : re("v-if", !0)],
    2
    /* CLASS */
  );
}
var gv = ee({
  name: "VarTable",
  props: jw,
  setup() {
    return {
      toSizeUnit: me,
      n: Ww,
      classes: Gw,
      formatElevation: dn
    };
  }
});
gv.render = qw;
const ka = gv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Bk = ka;
function ts(e) {
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
  stickyCssMode: We(Ht, "cssMode"),
  stickyZIndex: We(Ht, "zIndex"),
  offsetTop: We(Ht, "offsetTop"),
  onClick: F(),
  onChange: F(),
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
  n: Jw,
  classes: Qw
} = ne("tabs");
function _w(e, n) {
  return p(), he(
    _a(e.sticky ? e.n("$-sticky") : e.Transition),
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
              style: q({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
              })
            },
            [A(
              "div",
              {
                class: c(e.classes(e.n("indicator-inner"), e.n("--layout-" + e.layoutDirection + "-indicator-inner"))),
                style: q({
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
var yv = ee({
  name: "VarTabs",
  components: {
    VarSticky: Gn
  },
  inheritAttrs: !1,
  props: Zw,
  setup(e) {
    var n = B("0px"), r = B("0px"), a = B("0px"), t = B("0px"), o = B(!1), l = B(null), i = R(() => e.active), s = R(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = R(() => e.activeColor), d = R(() => e.inactiveColor), v = R(() => e.disabledColor), f = R(() => e.itemDirection), m = B(null), {
      tabList: h,
      bindTabList: y,
      length: g
    } = Nw(), b = (C) => {
      var k, U = (k = C.name.value) != null ? k : C.index.value, {
        active: Q,
        onChange: x,
        onClick: j
      } = e;
      S(e["onUpdate:active"], U), S(j, U), U !== Q && S(x, U);
    }, V = () => h.find((C) => {
      var {
        name: k
      } = C;
      return e.active === k.value;
    }), $ = (C) => h.find((k) => {
      var {
        index: U
      } = k;
      return (C ?? e.active) === U.value;
    }), T = () => {
      if (g.value !== 0) {
        var {
          active: C
        } = e;
        if (en(C)) {
          var k = C > g.value - 1 ? g.value - 1 : 0;
          return S(e["onUpdate:active"], k), $(k);
        }
      }
    }, I = () => {
      o.value = e.scrollable === "always" || h.length >= 5;
    }, P = (C) => {
      var {
        element: k
      } = C, U = k.value;
      U && (e.layoutDirection === "horizontal" ? (n.value = U.offsetWidth + "px", a.value = U.offsetLeft + "px") : (r.value = U.offsetHeight + "px", t.value = U.offsetTop + "px"));
    }, D = (C) => {
      var {
        element: k
      } = C;
      if (o.value) {
        var U = l.value, Q = k.value;
        if (e.layoutDirection === "horizontal") {
          var x = Q.offsetLeft + Q.offsetWidth / 2 - U.offsetWidth / 2;
          dt(U, {
            left: x,
            animation: Vo
          });
        } else {
          var j = Q.offsetTop + Q.offsetHeight / 2 - U.offsetHeight / 2;
          dt(U, {
            top: j,
            animation: Vo
          });
        }
      }
    }, w = () => {
      var C = V() || $() || T();
      !C || C.disabled.value || (I(), P(C), D(C));
    }, M = /* @__PURE__ */ function() {
      var C = is(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), N = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: w,
      onTabClick: b
    };
    return y(N), ie(() => g.value, /* @__PURE__ */ is(function* () {
      yield In(), w();
    })), ie(() => e.active, w), ie(() => e.scrollable, w), $r(w), wr(() => window, "resize", w), {
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
      n: Jw,
      classes: Qw,
      resize: w,
      resizeSticky: M,
      formatElevation: dn
    };
  }
});
yv.render = _w;
const $a = yv;
$a.install = function(e) {
  e.component($a.name, $a);
};
var Ek = $a, xw = {
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
function ls(e, n, r, a, t, o, l) {
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
  n: nC
} = ne("tabs-items");
function rC(e, n) {
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
var bv = ee({
  name: "VarTabsItems",
  components: {
    VarSwipe: jn
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
      h && (r.forEach((y) => {
        var {
          setCurrent: g
        } = y;
        return g(!1);
      }), h.setCurrent(!0), (m = n.value) == null || m.to(h.index.value));
    }, u = (f) => {
      var m, h = r.find((g) => {
        var {
          index: b
        } = g;
        return b.value === f;
      }), y = (m = h.name.value) != null ? m : h.index.value;
      S(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ eC(function* () {
      yield In(), s(e.active);
    })), {
      swipe: n,
      n: nC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
bv.render = rC;
const Ta = bv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Ik = Ta;
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
}, PC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, OC = {
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
const LC = gi({
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
}, oC, lC, iC, OC, vC, SC, MC, TC, gC, fC, aC, uC, tC, VC, dC, yC, $C, kC, pC, PC, mC, CC, bC, sC, cC, hC, BC, EC, IC, NC, wC, DC, AC, zC);
var RC = {
  dark: LC
}, Nk = null;
const yi = RC;
var gn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], xe = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ss = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
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
  "onUpdate:modelValue": F(),
  onChange: F()
}, wv = (e, n) => e === "24hr" || n === "am", Wi = (e, n, r) => {
  var a = gn.findIndex((o) => z(o) === z(r)), t = wv(e, n) ? r : xe[a];
  return {
    hourStr: t,
    hourNum: z(t)
  };
}, an = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: z(n),
    minute: z(r),
    second: z(a)
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
  } = Wi(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: h,
      minute: y
    } = an(i);
    f = h === v && a > y;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: b
    } = an(s);
    f = g === v && a < b;
  }
  if (i && s) {
    var {
      hour: V,
      minute: $
    } = an(i), {
      hour: T,
      minute: I
    } = an(s);
    f = T === v && a < I || V === v && a > $;
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
  } = Wi(t, o, l), m = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: g,
      second: b
    } = an(s);
    m = y === f && g < i || g === i && a > b;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: $,
      second: T
    } = an(u);
    m = V === f && $ > i || $ === i && a > T;
  }
  if (s && u) {
    var {
      hour: I,
      minute: P,
      second: D
    } = an(s), {
      hour: w,
      minute: M,
      second: N
    } = an(u);
    m = I === f && P < i || w === f && M > i || I === f && P === i && a > D || w === f && M === i && a < N;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || h;
}, {
  n: FC,
  classes: YC
} = ne("time-picker");
function jC(e, n) {
  return p(), O(
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
    ), (p(!0), O(
      Te,
      null,
      Ae(e.timeScales, (r, a) => (p(), O(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: q(e.getStyle(a, r, !1))
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
        Te,
        null,
        Ae(e.hours24, (r, a) => (p(), O(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: q(e.getStyle(a, r, !0))
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
    )) : re("v-if", !0)],
    2
    /* CLASS */
  );
}
var kv = ee({
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
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = R(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = R(() => e.type === "hour" ? gn : ss), u = (g, b) => {
      var V;
      g = (V = g) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var $ = e.type === "minute" ? Cv : Sv, T = {
        time: z(g),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return b && e.type === "minute" && Reflect.deleteProperty(T, "minute"), $(T);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var g = e.isInner ? xe[i.value] : s.value[i.value];
      return s.value === ss ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, b) => b ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (wv(e.format, e.ampm))
          return t.value.includes(g);
        var b = gn.findIndex((V) => V === g);
        return o.value.includes(b);
      }
      return u(g, !0);
    }, m = (g, b, V) => {
      var $ = 2 * Math.PI / 12 * g - Math.PI / 2, T = 50 * (1 + Math.cos($)), I = 50 * (1 + Math.sin($)), P = () => v(g, V) ? f(b) ? {
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
        color: w
      } = P();
      return {
        left: T + "%",
        top: I + "%",
        backgroundColor: D,
        color: w
      };
    }, h = () => {
      var {
        width: g,
        height: b
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: b
      };
    }, y = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? gn : xe;
        return Va(g[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (g, b) => {
      var [V, $] = g, [T, I] = b, P = V === T && $ === I;
      if (!(P || e.type !== "hour" || i.value === void 0)) {
        var D = $ ? xe[i.value] : y(), w = e.useSeconds ? ":" + e.time.second : "", M = D + ":" + e.time.minute + w;
        e.preventNextUpdate || r("update", M), r("change-prevent-update");
      }
    }), ie(() => e.rad, (g, b) => {
      if (!(e.type === "hour" || g === void 0 || b === void 0)) {
        var V = g / 6 >= 0 ? g / 6 : g / 6 + 60, $ = b / 6 >= 0 ? b / 6 : b / 6 + 60;
        if (V !== $) {
          var T, {
            hourStr: I
          } = Wi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var P = oe().minute(V).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            T = I + ":" + P + D;
          }
          if (e.type === "second") {
            var w = oe().second(V).format("ss"), M = e.useSeconds ? ":" + w : "";
            T = I + ":" + e.time.minute + M;
          }
          r("update", T);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [b, V, $] = g;
      if (t.value = [], b && !V) {
        var {
          hour: T
        } = an(b), I = gn.filter((W) => z(W) > T), P = xe.filter((W) => z(W) > T);
        t.value = [...I, ...P];
      }
      if (!b && V) {
        var {
          hour: D
        } = an(V), w = gn.filter((W) => z(W) < D), M = xe.filter((W) => z(W) < D);
        t.value = [...w, ...M];
      }
      if (b && V) {
        var {
          hour: N
        } = an(b), {
          hour: C
        } = an(V), k = gn.filter((W) => z(W) < C || z(W) > N), U = xe.filter((W) => z(W) < C || z(W) > N);
        t.value = [...k, ...U];
      }
      if ($ != null && $.hours) {
        var {
          hours: Q
        } = $, x = gn.filter((W) => !Q(z(W))), j = xe.filter((W) => !Q(z(W)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...x, ...j])];
      }
      o.value = t.value.map((W) => xe.findIndex((le) => W === le)).filter((W) => W >= 0);
    }, {
      immediate: !0
    }), {
      n: FC,
      classes: YC,
      hours24: xe,
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
kv.render = jC;
const WC = kv;
var {
  n: GC,
  classes: qC
} = ne("time-picker"), XC = (e) => (Na(""), e = e(), Da(), e), KC = /* @__PURE__ */ XC(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), ZC = {
  key: 0
};
function JC(e, n) {
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
          ae(e.time.hour),
          3
          /* TEXT, CLASS */
        ), KC, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ae(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), O("span", ZC, ":")) : re("v-if", !0), e.useSeconds ? (p(), O(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ae(e.time.second),
          3
          /* TEXT, CLASS */
        )) : re("v-if", !0)],
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
      )) : re("v-if", !0)],
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
var $v = ee({
  name: "VarTimePicker",
  components: {
    Clock: WC
  },
  props: HC,
  setup(e) {
    var n = B(null), r = B(null), a = B(null), t = B(!1), o = B(!1), l = B(!1), i = B(!1), s = B(!1), u = B(void 0), d = B(0), v = B(0), f = B("hour"), m = B("am"), h = B(!1), y = B(!1), g = B({
      hour: "00",
      minute: "00",
      second: "00"
    }), b = Ie({
      x: 0,
      y: 0
    }), V = Ie({
      x: [],
      y: []
    }), $ = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), T = (E) => {
      S(e["onUpdate:modelValue"], E), S(e.onChange, E);
    }, I = (E) => E * 57.29577951308232, P = (E) => {
      i.value = !1, y.value = !1, f.value = E;
    }, D = (E) => {
      var {
        disableHour: L
      } = a.value, Z = gn.findIndex((J) => z(J) === z(g.value.hour)), H = E === "am" ? gn : xe, K = [...H.slice(Z), ...H.slice(0, Z)];
      return K.find((J, fe) => (o.value = fe !== 0, !L.includes(J)));
    }, w = (E) => {
      if (!e.readonly) {
        m.value = E;
        var L = D(E);
        if (L) {
          var Z = e.useSeconds ? ":" + g.value.second : "", H = Va(L, 2, "0") + ":" + g.value.minute + Z;
          T(H);
        }
      }
    }, M = (E, L) => {
      var Z = E >= V.x[0] && E <= V.x[1], H = L >= V.y[0] && L <= V.y[1];
      return Z && H;
    }, N = (E) => {
      var L = e.format === "24hr" ? "HH" : "hh", {
        hour: Z,
        minute: H,
        second: K
      } = an(E);
      return {
        hour: oe().hour(Z).format(L),
        minute: oe().minute(H).format("mm"),
        second: oe().second(K).format("ss")
      };
    }, C = (E) => {
      var L = E / 30;
      return L >= 0 ? L : L + 12;
    }, k = () => {
      var {
        width: E,
        height: L
      } = a.value.getSize(), Z = b.x - E / 2 - 8, H = b.x + E / 2 + 8, K = b.y - L / 2 - 8, J = b.y + L / 2 + 8;
      return {
        rangeXMin: Z,
        rangeXMax: H,
        rangeYMin: K,
        rangeYMax: J
      };
    }, U = (E, L, Z) => {
      var {
        disableHour: H
      } = a.value;
      l.value = M(E, L);
      var K = Math.round(Z / 30) * 30 + 90, J = C(K), fe = t.value ? gn[J] : xe[J];
      if (H.includes(fe) || (t.value = e.format === "24hr" ? M(E, L) : !1), t.value === l.value) {
        var ge = t.value || m.value === "pm" ? xe[J] : gn[J];
        h.value = H.includes(ge), !h.value && (u.value = K, i.value = !0);
      }
    }, Q = (E) => {
      var {
        disableHour: L
      } = a.value, Z = Math.round(E / 6) * 6 + 90, H = Z / 6 >= 0 ? Z / 6 : Z / 6 + 60, K = {
        time: H,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: L,
        allowedTime: e.allowedTime
      };
      y.value = Cv(K), !y.value && (d.value = Z, s.value = !0);
    }, x = (E) => {
      var {
        disableHour: L
      } = a.value, Z = Math.round(E / 6) * 6 + 90, H = Z / 6 >= 0 ? Z / 6 : Z / 6 + 60, K = {
        time: H,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        minute: z(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: L,
        allowedTime: e.allowedTime
      };
      Sv(K) || (v.value = Z);
    }, j = () => {
      var {
        left: E,
        top: L,
        width: Z,
        height: H
      } = n.value.getBoundingClientRect();
      if (b.x = E + Z / 2, b.y = L + H / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: K,
          rangeXMax: J,
          rangeYMin: fe,
          rangeYMax: ge
        } = k();
        V.x = [K, J], V.y = [fe, ge];
      }
    }, W = (E) => {
      if (E.preventDefault(), !e.readonly) {
        j();
        var {
          clientX: L,
          clientY: Z
        } = E.touches[0], H = L - b.x, K = Z - b.y, J = Math.round(I(Math.atan2(K, H)));
        f.value === "hour" ? U(L, Z, J) : f.value === "minute" ? Q(J) : x(J);
      }
    }, le = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, G = () => {
      o.value = !1;
    };
    return ie(() => e.modelValue, (E) => {
      if (E) {
        var {
          hour: L,
          minute: Z,
          second: H
        } = an(E), K = oe().hour(L).format("hh"), J = oe().hour(L).format("HH"), fe = oe().minute(Z).format("mm"), ge = oe().second(H).format("ss");
        u.value = (K === "12" ? 0 : z(K)) * 30, d.value = z(fe) * 6, v.value = z(ge) * 6, g.value = N(E), e.format !== "24hr" && (m.value = Va("" + L, 2, "0") === J && xe.includes(J) ? "pm" : "am"), t.value = e.format === "24hr" && xe.includes(J);
      }
    }, {
      immediate: !0
    }), {
      n: GC,
      classes: qC,
      getRad: $,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: W,
      checkPanel: P,
      checkAmpm: w,
      end: le,
      update: T,
      changePreventUpdate: G,
      formatElevation: dn
    };
  }
});
$v.render = JC;
const Pa = $v;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Dk = Pa, QC = {
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
  n: _C,
  classes: xC
} = ne("uploader"), eS = 0, nS = ["onClick"], rS = ["onClick"], aS = ["src", "alt"], tS = ["multiple", "accept", "capture", "disabled"], oS = ["src"];
function iS(e, n) {
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
        Te,
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
            rS
          )) : re("v-if", !0), s.cover ? (p(), O(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: q({
                objectFit: s.fit
              }),
              src: s.cover,
              alt: s.name
            },
            null,
            14,
            aS
          )) : re("v-if", !0), A(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")]))
            },
            null,
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
          tS
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
      }], [i, e.handleHovering, "desktop"]]) : re("v-if", !0)],
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
            oS
          )) : re("v-if", !0)];
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
var Tv = ee({
  name: "VarUploader",
  directives: {
    Ripple: Ue,
    Hover: Nn
  },
  components: {
    VarIcon: $e,
    VarPopup: bn,
    VarFormDetails: qe,
    VarHoverOverlay: tn
  },
  props: QC,
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
    }), h = (W) => {
      var {
        disabled: le,
        readonly: G,
        previewed: E
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || le || G || !E)) {
        var {
          url: L
        } = W;
        if (Re(L) && Zi(L)) {
          En(L);
          return;
        }
        Re(L) && Ji(L) && (a.value = W, r.value = !0);
      }
    }, y = (W) => ({
      id: eS++,
      url: "",
      cover: "",
      name: W.name,
      file: W
    }), g = (W) => {
      var le = W.target, {
        files: G
      } = le;
      return Array.from(G);
    }, b = (W) => new Promise((le) => {
      var G = new FileReader();
      G.onload = () => {
        var E = G.result;
        W.file.type.startsWith("image") && (W.cover = E), W.url = E, le(W);
      }, G.readAsDataURL(W.file);
    }), V = (W) => W.map(b), $ = (W) => {
      var {
        onBeforeRead: le
      } = e;
      return W.map((G) => new Promise((E) => {
        le || E({
          valid: !0,
          varFile: G
        });
        var L = Oo(S(le, Ie(G)));
        Promise.all(L).then((Z) => {
          E({
            valid: Z.every(Boolean),
            varFile: G
          });
        });
      }));
    }, T = /* @__PURE__ */ function() {
      var W = ds(function* (le) {
        var {
          maxsize: G,
          maxlength: E,
          modelValue: L,
          onOversize: Z,
          onAfterRead: H,
          readonly: K,
          disabled: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || K)) {
          var fe = (Xe) => Xe.filter((pn) => pn.file.size > z(G) ? (S(Z, Ie(pn)), !1) : !0), ge = (Xe) => {
            var pn = Math.min(Xe.length, z(E) - L.length);
            return Xe.slice(0, pn);
          }, ze = g(le), Ee = ze.map(y);
          Ee = G != null ? fe(Ee) : Ee, Ee = E != null ? ge(Ee) : Ee;
          var mn = yield Promise.all(V(Ee)), Aa = yield Promise.all($(mn)), zn = Aa.filter((Xe) => {
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
          S(e["onUpdate:modelValue"], [...L, ...zn]), le.target.value = "", zn.forEach((Xe) => S(H, Ie(Xe)));
        }
      });
      return function(G) {
        return W.apply(this, arguments);
      };
    }(), I = /* @__PURE__ */ function() {
      var W = ds(function* (le) {
        var {
          disabled: G,
          readonly: E,
          modelValue: L,
          onBeforeRemove: Z,
          onRemove: H
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || G || E)) {
          if (Z) {
            var K = Oo(S(Z, Ie(le)));
            if ((yield Promise.all(K)).some((fe) => !fe))
              return;
          }
          var J = L.filter((fe) => fe !== le);
          S(H, Ie(le)), k("onRemove"), S(e["onUpdate:modelValue"], J);
        }
      });
      return function(G) {
        return W.apply(this, arguments);
      };
    }(), P = () => e.modelValue.filter((W) => W.state === "success"), D = () => e.modelValue.filter((W) => W.state === "error"), w = () => e.modelValue.filter((W) => W.state === "loading"), M = () => {
      n.value.click();
    }, N = () => {
      a.value = null, r.value = !1, En.close();
    }, C = {
      getSuccess: P,
      getError: D,
      getLoading: w
    }, k = (W) => {
      Be(() => {
        var {
          validateTrigger: le,
          rules: G,
          modelValue: E
        } = e;
        s(le, W, G, E, C);
      });
    }, U = !1, Q = () => u(e.rules, e.modelValue, C), x = () => {
      U = !0, S(e["onUpdate:modelValue"], []), d();
    }, j = {
      validate: Q,
      resetValidation: d,
      reset: x
    };
    return S(l, j), ie(() => e.modelValue, () => {
      !U && k("onChange"), U = !1;
    }, {
      deep: !0
    }), {
      n: _C,
      classes: xC,
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
      isHTMLSupportVideo: Ji,
      isHTMLSupportImage: Zi,
      preview: h,
      handleChange: T,
      handleRemove: I,
      getSuccess: P,
      getError: D,
      getLoading: w,
      validate: Q,
      resetValidation: d,
      reset: x,
      chooseFile: M,
      closePreview: N
    };
  }
});
Tv.render = iS;
const Oa = Tv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Ak = Oa;
const lS = "2.9.6";
function sS(e) {
  Xn.install && e.use(Xn), Mr.install && e.use(Mr), Br.install && e.use(Br), Er.install && e.use(Er), Ir.install && e.use(Ir), sr.install && e.use(sr), Nr.install && e.use(Nr), Dr.install && e.use(Dr), Ar.install && e.use(Ar), zr.install && e.use(zr), Ze.install && e.use(Ze), Lr.install && e.use(Lr), Rr.install && e.use(Rr), ur.install && e.use(ur), dr.install && e.use(dr), Ur.install && e.use(Ur), vr.install && e.use(vr), Hr.install && e.use(Hr), Fr.install && e.use(Fr), Yr.install && e.use(Yr), fn.install && e.use(fn), jr.install && e.use(jr), Wr.install && e.use(Wr), qr.install && e.use(qr), Kn.install && e.use(Kn), Xr.install && e.use(Xr), Kr.install && e.use(Kr), Zr.install && e.use(Zr), Yn.install && e.use(Yn), qe.install && e.use(qe), Nn.install && e.use(Nn), tn.install && e.use(tn), $e.install && e.use($e), Jr.install && e.use(Jr), En.install && e.use(En), Qr.install && e.use(Qr), _r.install && e.use(_r), hr.install && e.use(hr), vt.install && e.use(vt), xr.install && e.use(xr), ea.install && e.use(ea), Vn.install && e.use(Vn), vi.install && e.use(vi), Ao.install && e.use(Ao), qn.install && e.use(qn), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), Ea.install && e.use(Ea), bn.install && e.use(bn), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), Ue.install && e.use(Ue), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), hi.install && e.use(hi), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), Gn.install && e.use(Gn), ht.install && e.use(ht), jn.install && e.use(jn), Wn.install && e.use(Wn), wa.install && e.use(wa), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), $a.install && e.use($a), Ta.install && e.use(Ta), yi.install && e.use(yi), Pa.install && e.use(Pa), mr.install && e.use(mr), Oa.install && e.use(Oa);
}
const zk = {
  version: lS,
  install: sS,
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
  Icon: $e,
  Image: Jr,
  ImagePreview: En,
  IndexAnchor: Qr,
  IndexBar: _r,
  Input: hr,
  Lazy: vt,
  Link: xr,
  List: ea,
  Loading: Vn,
  LoadingBar: vi,
  Locale: Ao,
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
  Snackbar: hi,
  Space: ha,
  Step: ga,
  Steps: ya,
  Sticky: Gn,
  StyleProvider: ht,
  Swipe: jn,
  SwipeItem: Wn,
  Switch: wa,
  Tab: Ca,
  TabItem: Sa,
  Table: ka,
  Tabs: $a,
  TabsItems: Ta,
  Themes: yi,
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
  $e as Icon,
  Jr as Image,
  En as ImagePreview,
  Qr as IndexAnchor,
  _r as IndexBar,
  hr as Input,
  vt as Lazy,
  xr as Link,
  ea as List,
  Vn as Loading,
  vi as LoadingBar,
  Ao as Locale,
  qn as Menu,
  na as Option,
  ra as Overlay,
  Ro as PIXEL,
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
  Yi as SNACKBAR_TYPE,
  fa as Select,
  ca as Skeleton,
  ma as Slider,
  hi as Snackbar,
  ha as Space,
  ga as Step,
  ya as Steps,
  Gn as Sticky,
  ht as StyleProvider,
  jn as Swipe,
  Wn as SwipeItem,
  wa as Switch,
  Ca as Tab,
  Sa as TabItem,
  ka as Table,
  $a as Tabs,
  Ta as TabsItems,
  yi as Themes,
  Pa as TimePicker,
  mr as Tooltip,
  Oa as Uploader,
  pS as _ActionSheetComponent,
  hS as _AppBarComponent,
  yS as _AvatarComponent,
  bS as _AvatarGroupComponent,
  $S as _BackTopComponent,
  TS as _BadgeComponent,
  PS as _BottomNavigationComponent,
  OS as _BottomNavigationItemComponent,
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
  Pk as _StyleProviderComponent,
  JS as _SwipeComponent,
  QS as _SwipeItemComponent,
  Ok as _SwitchComponent,
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
  $i as add,
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
  Fe as defaultLazyOptions,
  Uh as dialogProps,
  Wh as dividerProps,
  Ns as enUS,
  wm as formDetailsProps,
  gy as formProps,
  Es as iconProps,
  Rs as imageCache,
  Uy as imagePreviewProps,
  Sy as imageProps,
  Jy as indexAnchorProps,
  eb as indexBarProps,
  vb as inputProps,
  sS as install,
  wb as linkProps,
  $b as listProps,
  Mb as loadingBarProps,
  tr as loadingProps,
  Hb as menuProps,
  As as merge,
  qb as optionProps,
  Jb as overlayProps,
  je as pack,
  Ds as packs,
  _b as paginationProps,
  a0 as paperProps,
  l0 as pickerProps,
  St as popupProps,
  p0 as progressProps,
  S0 as pullRefreshProps,
  I0 as radioGroupProps,
  T0 as radioProps,
  z0 as rateProps,
  H0 as resultProps,
  P1 as rowProps,
  E1 as selectProps,
  z1 as skeletonProps,
  F1 as sliderProps,
  rv as snackbarProps,
  vw as spaceProps,
  mw as stepProps,
  Sw as stepsProps,
  Ht as stickyProps,
  Tw as styleProviderProps,
  cd as swipeProps,
  Vw as switchProps,
  Uw as tabItemProps,
  Iw as tabProps,
  jw as tableProps,
  xw as tabsItemsProps,
  Zw as tabsProps,
  HC as timePickerProps,
  ry as tooltipProps,
  QC as uploaderProps,
  Ti as use,
  Cr as useHoverOverlay,
  ki as useLocale,
  lS as version,
  Si as zhCN
};
