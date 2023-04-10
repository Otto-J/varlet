import { reactive as Ie, onMounted as Zt, nextTick as Be, onActivated as Tr, isRef as Sv, watch as le, onBeforeUnmount as Jt, onDeactivated as Pr, unref as Ga, inject as kv, getCurrentInstance as Na, computed as U, provide as $v, isVNode as yt, ref as B, Comment as Tv, Fragment as Oe, createApp as Pv, h as is, onBeforeMount as Ov, onUnmounted as _a, defineComponent as ne, createVNode as Q, Teleport as Da, Transition as De, withDirectives as we, vShow as br, mergeProps as Ve, openBlock as h, createBlock as ge, resolveDynamicComponent as xa, normalizeClass as c, normalizeStyle as G, resolveComponent as oe, resolveDirective as Me, withCtx as fe, createElementVNode as A, renderSlot as j, toDisplayString as ae, createElementBlock as O, renderList as ze, createCommentVNode as ee, onUpdated as Qt, createTextVNode as be, pushScopeId as Aa, popScopeId as za, withModifiers as Bn, normalizeProps as ci, guardReactiveProps as ls, vModelText as Vv, toRefs as Mv, withKeys as Fi, toRaw as Yi, TransitionGroup as Bv } from "vue";
var ss = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, JC = Ie(ss);
const cn = Ie(ss), Re = (e) => typeof e == "string", ko = (e) => typeof e == "boolean", nn = (e) => typeof e == "number", mi = (e) => Object.prototype.toString.call(e) === "[object Object]", Ev = (e) => typeof e == "object" && e !== null, pi = (e) => typeof e == "function", Ce = (e) => Array.isArray(e), Iv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Un = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Re(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : ko(e) ? Number(e) : e, Rt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, hi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, et = () => typeof window < "u", ji = (e) => [...new Set(e)], us = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Nv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Dv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Wi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Gi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Av = (e) => {
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
      this.has(r) && Rt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, $o = (e) => e, qi = (e) => Math.pow(e, 3), ds = (e) => e < 0.5 ? qi(e * 2) / 2 : 1 - qi((1 - e) * 2) / 2, _t = (e, n) => e ?? n, vs = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Ma = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Cn(e, n) {
  throw Error("Varlet [" + e + "]: " + n);
}
function Xi(e, n) {
  console.warn("Varlet [" + e + "]: " + n);
}
function Ki(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function zv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ki(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ki(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Lv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Zi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function dt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function gi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Rv(e) {
  return To.apply(this, arguments);
}
function To() {
  return To = zv(function* (e) {
    yield Nn();
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
  }), To.apply(this, arguments);
}
function ho(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function wr(e) {
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
function Uv(e) {
  for (var n = [], r = e; r !== window; )
    r = wr(r), n.push(r);
  return n;
}
function fs(e, n) {
  if (Re(e)) {
    var r = document.querySelector(e);
    return r || Cn(n, "target element cannot found"), r;
  }
  if (Ev(e))
    return e;
  Cn(n, 'type of prop "target" should be a selector or an element object');
}
function Ji() {
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
var cs = (e) => Re(e) && e.endsWith("rem"), Hv = (e) => Re(e) && e.endsWith("px") || nn(e), Fv = (e) => Re(e) && e.endsWith("%"), ms = (e) => Re(e) && e.endsWith("vw"), ps = (e) => Re(e) && e.endsWith("vh"), hs = (e) => Re(e) && e.endsWith("vmin"), gs = (e) => Re(e) && e.endsWith("vmax"), Yv = (e) => Re(e) && e.startsWith("calc("), jv = (e) => Re(e) && e.startsWith("var("), Le = (e) => {
  if (nn(e))
    return e;
  if (Hv(e))
    return +e.replace("px", "");
  if (ms(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (ps(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (cs(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return hs(e) ? Ji().vMin : gs(e) ? Ji().vMax : Re(e) ? L(e) : 0;
}, me = (e) => {
  if (e != null)
    return Fv(e) || ms(e) || ps(e) || cs(e) || Yv(e) || jv(e) || hs(e) || gs(e) ? e : Le(e) + "px";
}, xe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = me(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function gn(e) {
  var n = vs();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Qi(e) {
  var n = vs();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function xt(e) {
  gn(() => {
    gn(e);
  });
}
function Nn() {
  return new Promise((e) => {
    gn(() => {
      gn(e);
    });
  });
}
function Wv() {
  return new Promise((e) => {
    gn(e);
  });
}
function vt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, i = Date.now(), l = dt(e), s = gi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - i) / t;
      if (v < 1) {
        var f = l + (r - l) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), gn(d);
      } else
        e.scrollTo(a, r), u();
    };
    gn(d);
  });
}
function ys(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Nv(a);
    return n[o] = t, n;
  }, {});
}
function Gv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Ut(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function sn(e) {
  let n = !1;
  Zt(() => {
    e(), Be(() => {
      n = !0;
    });
  }), Tr(() => {
    n && e();
  });
}
function Cr(e, n, r, a = {}) {
  if (!et())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let i = !1, l = !1;
  const s = (f) => {
    if (i || l)
      return;
    const m = Ga(f);
    m && (m.addEventListener(n, r, {
      passive: t,
      capture: o
    }), i = !0);
  }, u = (f) => {
    if (!i || l)
      return;
    const m = Ga(f);
    m && (m.removeEventListener(n, r, {
      capture: o
    }), i = !1);
  };
  let d;
  Sv(e) && (d = le(() => e.value, (f, m) => {
    u(m), s(f);
  }));
  const v = () => {
    d == null || d(), u(e), l = !0;
  };
  return sn(() => {
    s(e);
  }), Jt(() => {
    u(e);
  }), Pr(() => {
    u(e);
  }), v;
}
function bs(e, n, r) {
  if (!et())
    return;
  Cr(document, n, (t) => {
    const o = Ga(e);
    o && !o.contains(t.target) && r(t);
  });
}
var qv = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function Xv(e) {
  const n = Na();
  return e in n.provides;
}
function un(e) {
  if (!Xv(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = kv(e), { childInstances: r, collect: a, clear: t } = n, o = qv(n, ["childInstances", "collect", "clear"]), i = Na();
  return {
    index: U(() => r.indexOf(i)),
    parentProvider: o,
    bindParent: (u) => {
      Zt(() => {
        Be().then(() => {
          a(i, u);
        });
      }), Jt(() => {
        Be().then(() => {
          t(i, u);
        });
      });
    }
  };
}
function Kv(e) {
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
  const n = Na(), r = Ie([]), a = [], t = U(() => r.length), o = () => {
    const u = Kv(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, i = (u, d) => {
    r.push(u), a.push(d), o();
  }, l = (u, d) => {
    Rt(r, u), Rt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      $v(e, Object.assign({
        childInstances: r,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function ws(e, n, r = {}) {
  const a = Na(), { passive: t = !0, eventName: o, defaultValue: i, emit: l = a == null ? void 0 : a.emit } = r, s = o ?? `update:${n.toString()}`, u = () => e[n] != null ? e[n] : i;
  if (!t)
    return U({
      get() {
        return u();
      },
      set(v) {
        l(s, v);
      }
    });
  const d = B(u());
  return le(() => e[n], () => {
    d.value = u();
  }), le(() => d.value, (v) => {
    l(s, v);
  }), d;
}
function _i(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function xi(e) {
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
function Po() {
  return Po = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Po.apply(this, arguments);
}
function Je(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function Zv(e) {
  var n = Pv(e), r = document.createElement("div");
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
      return () => is(e, Po({}, n, r));
    }
  }, {
    unmount: t
  } = Zv(a);
  return {
    unmountInstance: t
  };
}
function Cs(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== Tv) {
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
function Sn() {
  var e = B(""), n = /* @__PURE__ */ function() {
    var t = xi(function* (o, i, l) {
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
    var t = xi(function* (o, i, l, s, u) {
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
function Jv(e) {
  et() && (Cr(window, "hashchange", e), Cr(window, "popstate", e));
}
function eo() {
  var e = B(!1);
  return Tr(() => {
    e.value = !1;
  }), Pr(() => {
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
function k(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (Ce(e))
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
var {
  n: Ss
} = re("ripple"), el = 250;
function Qv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function _v(e, n) {
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
function ks(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker || !cn.enableRipple)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: i,
        size: l
      } = _v(this, e), s = document.createElement("div");
      s.classList.add(Ss()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Qv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Oo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Ss());
    if (r.length) {
      var a = r[r.length - 1], t = el - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, el);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function $s() {
  if (!(!Gv() || !cn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function xv(e, n) {
  var r;
  e._ripple = Ht({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    removeRipple: Oo.bind(e)
  }), e.addEventListener("touchstart", ks, {
    passive: !0
  }), e.addEventListener("touchmove", $s, {
    passive: !0
  }), e.addEventListener("dragstart", Oo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function ef(e) {
  e.removeEventListener("touchstart", ks), e.removeEventListener("touchmove", $s), e.removeEventListener("dragstart", Oo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function nf(e, n) {
  var r, a, t, o, i = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (a = n.value) == null ? void 0 : a.disabled
  }, l = i.color !== ((t = e._ripple) == null ? void 0 : t.color) || i.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (l) {
    var s, u;
    e._ripple = Ht({
      tasker: i.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, i);
  }
}
var Ts = {
  mounted: xv,
  unmounted: ef,
  updated: nf,
  install(e) {
    e.directive("ripple", this);
  }
}, QC = Ts;
const Ue = Ts;
function rf(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var bt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: rf
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
function Ps() {
  var e = Object.keys(cn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function $t(e) {
  cn.locks[e] = 1, Ps();
}
function Tt(e) {
  delete cn.locks[e], Ps();
}
function no(e, n) {
  var {
    uid: r
  } = Na();
  n && le(n, (a) => {
    a === !1 ? Tt(r) : a === !0 && e() === !0 && $t(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? $t(r) : Tt(r));
  }), Ov(() => {
    n && n() === !1 || e() === !0 && $t(r);
  }), _a(() => {
    n && n() === !1 || e() === !0 && Tt(r);
  }), Tr(() => {
    n && n() === !1 || e() === !0 && $t(r);
  }), Pr(() => {
    n && n() === !1 || e() === !0 && Tt(r);
  });
}
function wt(e, n) {
  var r = B(cn.zIndex);
  return le(e, (a) => {
    a && (cn.zIndex += n, r.value = cn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
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
function af(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: Rn,
  classes: go
} = re("popup");
const yn = ne({
  name: "VarPopup",
  inheritAttrs: !1,
  props: bt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = wt(() => e.show, 3), {
      disabled: o
    } = eo(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      k(v), d && k(e["onUpdate:show"], !1);
    };
    no(() => e.show, () => e.lockScroll), le(() => e.show, (d) => {
      k(d ? e.onOpen : e.onClose);
    }), Jv(() => k(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return Q("div", {
        class: go(Rn("overlay"), d),
        style: Vo({
          zIndex: t.value - 1
        }, v),
        onClick: i
      }, null);
    }, s = () => Q("div", Ve({
      class: go(Rn("content"), Rn("--" + e.position), [e.defaultStyle, Rn("--content-background-color")], [e.defaultStyle, Rn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [k(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: w,
        position: C
      } = e;
      return Q(De, {
        name: Rn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [we(Q("div", {
          class: go(Rn("$--box"), Rn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && l(), Q(De, {
          name: w || Rn("$-pop-" + C)
        }, {
          default: () => [f && s()]
        })]), [[br, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return Q(Da, {
          to: d,
          disabled: o.value
        }, af(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
yn.install = function(e) {
  e.component(yn.name, yn);
};
var _C = yn, Os = {
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
function nl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function tf(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        nl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        nl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: of,
  classes: lf
} = re("icon");
function sf(e, n) {
  return h(), ge(
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
var Vs = ne({
  name: "VarIcon",
  props: Os,
  setup(e) {
    var n = B(""), r = B(!1), a = /* @__PURE__ */ function() {
      var t = tf(function* (o, i) {
        var {
          transition: l
        } = e;
        if (i == null || L(l) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Be(), setTimeout(() => {
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
      n: of,
      classes: lf,
      nextName: n,
      animateInProgress: r,
      isURL: Iv,
      toNumber: L,
      toSizeUnit: me
    };
  }
});
Vs.render = sf;
const $e = Vs;
$e.install = function(e) {
  e.component($e.name, $e);
};
var xC = $e;
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
var uf = Mo({
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
}, Je(bt, [
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
const yi = {
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
}, Ms = {
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
function bi() {
  var e = {}, n = B({}), r = (o, i) => {
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
    e[o] = Bo({}, e[o], i), a(o);
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
  packs: Bs,
  pack: je,
  add: wi,
  use: Ci,
  merge: Es
} = bi();
wi("zh-CN", yi);
Ci("zh-CN");
var eS = {
  zhCN: yi,
  enUS: Ms,
  packs: Bs,
  pack: je,
  add: wi,
  use: Ci,
  merge: Es,
  useLocale: bi
};
const Eo = {
  zhCN: yi,
  enUS: Ms,
  packs: Bs,
  pack: je,
  add: wi,
  use: Ci,
  merge: Es,
  useLocale: bi
};
var {
  n: df,
  classes: vf
} = re("action-sheet"), ff = ["onClick"];
function cf(e, n) {
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
      default: fe(() => [A(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [j(e.$slots, "title", {}, () => [A(
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
            )) : ee("v-if", !0), A(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ae(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            ff
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
var Is = ne({
  name: "VarActionSheet",
  directives: {
    Ripple: Ue
  },
  components: {
    VarPopup: yn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: uf,
  setup(e) {
    var n = B(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: i
        } = e;
        k(i, t), o && k(e["onUpdate:show"], !1);
      }
    }, a = (t) => k(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: df,
      classes: vf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: je,
      dt: _t,
      handleSelect: r
    };
  }
});
Is.render = cf;
const sr = Is;
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
var rr, Si = {};
function mf(e) {
  return e === void 0 && (e = {}), Io({}, Si, e);
}
function Kn(e) {
  return et() ? new Promise((n) => {
    Kn.close();
    var r = Ie(mf(e));
    r.teleport = "body", rr = r;
    var {
      unmountInstance: a
    } = nt(sr, r, {
      onSelect: (t) => {
        k(r.onSelect, t), n(t);
      },
      onClose: () => {
        k(r.onClose), n("close");
      },
      onClosed: () => {
        k(r.onClosed), a(), rr === r && (rr = null);
      },
      onRouteChange: () => {
        a(), rr === r && (rr = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
Kn.setDefaultOptions = function(e) {
  Si = e;
};
Kn.resetDefaultOptions = function() {
  Si = {};
};
Kn.close = function() {
  if (rr != null) {
    var e = rr;
    rr = null, Be().then(() => {
      e.show = !1;
    });
  }
};
Kn.Component = sr;
sr.install = function(e) {
  e.component(sr.name, sr);
};
Kn.install = function(e) {
  e.component(sr.name, sr);
};
var nS = sr;
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
  n: gf,
  classes: yf
} = re("app-bar");
function bf(e, n) {
  return h(), O(
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
      )) : ee("v-if", !0), A(
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
var Ns = ne({
  name: "VarAppBar",
  props: hf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = B(), t = B(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, i = U(() => {
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
    return sn(o), Qt(o), {
      n: gf,
      classes: yf,
      formatElevation: vn,
      rootStyles: i,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ns.render = bf;
const Br = Ns;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var rS = Br;
function rl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ro(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        rl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        rl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
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
var wf = "background-image", Cf = "lazy-loading", Sf = "lazy-error", al = "lazy-attempt", kf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Do = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", qa = [], Ft = [], Ds = Av(100), Fe = {
  loading: Do,
  error: Do,
  attempt: 3,
  throttleWait: 300,
  events: kf
}, ki = hi(Ct, Fe.throttleWait);
function ao(e, n) {
  e._lazy.arg === wf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function $f(e) {
  e._lazy.loading && ao(e, e._lazy.loading), Ct();
}
function Tf(e) {
  e._lazy.error && ao(e, e._lazy.error), e._lazy.state = "error", Ti(e), Ct();
}
function As(e, n) {
  ao(e, n), e._lazy.state = "success", Ti(e), Ct();
}
function Pf(e) {
  var n;
  Ft.includes(e) || (Ft.push(e), (n = Fe.events) == null || n.forEach((r) => {
    e.addEventListener(r, ki, {
      passive: !0
    });
  }));
}
function Of() {
  Ft.forEach((e) => {
    var n;
    (n = Fe.events) == null || n.forEach((r) => {
      e.removeEventListener(r, ki);
    });
  }), Ft.length = 0;
}
function Vf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Cf)) != null ? r : Fe.loading,
    error: (a = e.getAttribute(Sf)) != null ? a : Fe.error,
    attempt: e.getAttribute(al) ? Number(e.getAttribute(al)) : Fe.attempt
  };
  e._lazy = No({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), ao(e, Do), k(Fe.filter, e._lazy);
}
function Mf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Ds.add(n), As(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Tf(e) : zs(e);
  });
}
function zs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Ds.has(n)) {
      As(e, n), e._lazy.attemptLock = !1;
      return;
    }
    $f(e), Mf(e, n);
  }
}
function $i(e) {
  return Ao.apply(this, arguments);
}
function Ao() {
  return Ao = ro(function* (e) {
    (yield Rv(e)) && zs(e);
  }), Ao.apply(this, arguments);
}
function Ct() {
  qa.forEach((e) => $i(e));
}
function Bf(e) {
  return zo.apply(this, arguments);
}
function zo() {
  return zo = ro(function* (e) {
    !qa.includes(e) && qa.push(e), Uv(e).forEach(Pf), yield $i(e);
  }), zo.apply(this, arguments);
}
function Ti(e) {
  Rt(qa, e), qa.length === 0 && Of();
}
function Ef(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Ls(e, n) {
  return Lo.apply(this, arguments);
}
function Lo() {
  return Lo = ro(function* (e, n) {
    Vf(e, n), yield Bf(e);
  }), Lo.apply(this, arguments);
}
function If(e, n) {
  return Ro.apply(this, arguments);
}
function Ro() {
  return Ro = ro(function* (e, n) {
    if (!Ef(e, n)) {
      qa.includes(e) && (yield $i(e));
      return;
    }
    yield Ls(e, n);
  }), Ro.apply(this, arguments);
}
function Nf(e) {
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
var Rs = {
  mounted: Ls,
  unmounted: Ti,
  updated: If,
  install(e, n) {
    Nf(n), ki = hi(Ct, Fe.throttleWait), e.directive("lazy", this);
  }
}, aS = Rs;
const ft = Rs;
function Df(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Us = (e) => ["mini", "small", "normal", "large"].includes(e);
function Hs(e) {
  return Us(e) || nn(e) || Re(e);
}
var Af = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Hs,
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
  onClick: H(),
  onLoad: H(),
  onError: H()
}, {
  n: zf,
  classes: Lf
} = re("avatar"), Rf = ["src", "lazy-loading", "lazy-error"], Uf = ["src"];
function Hf(e, n) {
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
        Rf
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
        Uf
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
var Fs = ne({
  name: "VarAvatar",
  directives: {
    Lazy: ft
  },
  props: Af,
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
    }, i = (s) => {
      k(e.onError, s);
    }, l = (s) => {
      k(e.onClick, s);
    };
    return sn(t), Qt(t), {
      internalSizeValidator: Us,
      sizeValidator: Hs,
      toSizeUnit: me,
      n: zf,
      classes: Lf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: i,
      handleClick: l
    };
  }
});
Fs.render = Hf;
const Er = Fs;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var tS = Er, Ff = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Yf,
  classes: jf
} = re("avatar-group");
function Wf(e, n) {
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
var Ys = ne({
  name: "VarAvatarGroup",
  props: Ff,
  setup(e) {
    var n = U(() => e.offset == null ? {} : {
      "--avatar-group-offset": me(e.offset)
    });
    return {
      n: Yf,
      classes: jf,
      toSizeUnit: me,
      rootStyles: n
    };
  }
});
Ys.render = Wf;
const Ir = Ys;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var oS = Ir;
function Gf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function qf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var or = {
  type: {
    type: String,
    default: "circle",
    validator: Gf
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: qf
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
  n: Xf,
  classes: Kf
} = re("loading"), Zf = (e) => (Aa(""), e = e(), za(), e), Jf = /* @__PURE__ */ Zf(() => /* @__PURE__ */ A(
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
          Qf,
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
var js = ne({
  name: "VarLoading",
  props: or,
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
      n: Xf,
      classes: Kf,
      multiplySizeUnit: xe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
js.render = _f;
const Vn = js;
Vn.install = function(e) {
  e.component(Vn.name, Vn);
};
var iS = Vn, xf = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: ec,
  classes: nc
} = re("hover-overlay");
function rc(e, n) {
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
var Ws = ne({
  name: "VarHoverOverlay",
  props: xf,
  setup() {
    return {
      n: ec,
      classes: nc
    };
  }
});
Ws.render = rc;
const on = Ws;
on.install = function(e) {
  e.component(on.name, on);
};
function Sr() {
  var e = B(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var lS = on;
function Gs(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function ac(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((i) => i.trim());
    return r[us(t)] = o, r;
  }, {}) : {};
}
function tc(e) {
  var {
    value: n
  } = e._hover, r = ac(e);
  Object.keys(n).forEach((a) => {
    var t = us(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Pi(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function oc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function qs(e) {
  oc(e), Pi(e, e._hover.rawStyle);
}
function Xs() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, pi(e)) {
    e(this._hover.hovering);
    return;
  }
  Pi(this, e);
}
function Ks() {
  if (this._hover.hovering = !1, pi(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  qs(this);
}
function Zs(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Gs(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, tc(e), e.addEventListener("mouseenter", Xs), e.addEventListener("mouseleave", Ks));
}
function Js(e, n) {
  Gs(n.arg) || (qs(e), e.removeEventListener("mouseenter", Xs), e.removeEventListener("mouseleave", Ks));
}
function ic(e, n) {
  e._hover && Js(e, n);
}
function lc(e, n) {
  return !pi(n.value) && e._hover.hovering;
}
function sc(e, n) {
  Zs(e, n), lc(e, n) && Pi(e, n.value);
}
var Qs = {
  mounted: Zs,
  unmounted: Js,
  beforeUpdate: ic,
  updated: sc,
  install(e) {
    e.directive("hover", this);
  }
}, sS = Qs;
const Dn = Qs;
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
function _s(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function uc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function dc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var vc = {
  type: {
    type: String,
    validator: _s
  },
  nativeType: {
    type: String,
    default: "button",
    validator: dc
  },
  size: {
    type: String,
    validator: uc
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
  loadingType: Je(or, "type"),
  loadingSize: Je(or, "size"),
  loadingColor: Uo({}, Je(or, "color"), {
    default: "currentColor"
  }),
  onClick: H(),
  onTouchstart: H()
}, xs = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function fc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(xs);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function cc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = un(xs);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: mc,
  classes: pc
} = re("button"), hc = ["type", "disabled"];
function gc(e, n) {
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
    )) : ee("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(
      a,
      {
        hovering: e.hovering
      },
      null,
      8,
      ["hovering"]
    )],
    46,
    hc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var eu = ne({
  name: "VarButton",
  components: {
    VarLoading: Vn,
    VarHoverOverlay: on
  },
  directives: {
    Ripple: Ue,
    Hover: Dn
  },
  props: vc,
  setup(e) {
    var n = B(!1), {
      buttonGroup: r
    } = cc(), {
      hovering: a,
      handleHovering: t
    } = Sr(), o = U(() => {
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
      !f || d || v || n.value || i(k(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || i(k(f, u));
    };
    return {
      n: mc,
      classes: pc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
eu.render = gc;
const Ke = eu;
Ke.install = function(e) {
  e.component(Ke.name, Ke);
};
var uS = Ke, yc = {
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
  n: bc,
  classes: wc
} = re("back-top");
function Cc(e, n) {
  var r = oe("var-icon"), a = oe("var-button");
  return h(), ge(
    Da,
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
        onClick: n[0] || (n[0] = Bn(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [j(e.$slots, "default", {}, () => [Q(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: fe(() => [Q(r, {
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
var nu = ne({
  name: "VarBackTop",
  components: {
    VarButton: Ke,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: yc,
  setup(e) {
    var n = B(!1), r = B(null), a = B(!0), t, o = (d) => {
      k(e.onClick, d);
      var v = gi(t);
      vt(t, {
        left: v,
        duration: e.duration,
        animation: ds
      });
    }, i = hi(() => {
      n.value = dt(t) >= Le(e.visibilityHeight);
    }, 200), l = () => {
      t = e.target ? fs(e.target, "BackTop") : wr(r.value);
    }, s = () => {
      t.addEventListener("scroll", i);
    }, u = () => {
      t.removeEventListener("scroll", i);
    };
    return Zt(() => {
      l(), s(), a.value = !1;
    }), Tr(s), Jt(u), Pr(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: me,
      n: bc,
      classes: wc,
      handleClick: o
    };
  }
});
nu.render = Cc;
const Nr = nu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var dS = Nr;
function Sc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function kc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var $c = {
  type: {
    type: String,
    default: "default",
    validator: Sc
  },
  position: {
    type: String,
    default: "right-top",
    validator: kc
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
  n: Tc,
  classes: Pc
} = re("badge");
function Oc(e, n) {
  var r = oe("var-icon");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "default"), Q(
      De,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: fe(() => [we(A(
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
        ), [[br, !e.hidden]])]),
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
var ru = ne({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: $c,
  setup(e) {
    var n = U(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: Tc,
      classes: Pc,
      value: n
    };
  }
});
ru.render = Oc;
const ur = ru;
ur.install = function(e) {
  e.component(ur.name, ur);
};
var vS = ur, Vc = {
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
}, au = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Mc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn(au);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
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
var {
  n: Bc,
  classes: Ec
} = re("bottom-navigation"), {
  n: to
} = re("bottom-navigation-item"), tl = to("--right-half-space"), ol = to("--left-half-space"), il = to("--right-space"), Ic = {
  type: "primary"
};
function Nc(e, n) {
  var r = oe("var-button");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
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
var tu = ne({
  name: "VarBottomNavigation",
  components: {
    VarButton: Ke
  },
  props: Vc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = B(null), t = U(() => e.active), o = U(() => e.activeColor), i = U(() => e.inactiveColor), l = B({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Mc(), v = () => {
      s.value === 0 || f() || m() || w();
    }, f = () => u.find((g) => {
      var {
        name: V
      } = g;
      return t.value === V.value;
    }), m = () => u.find((g) => {
      var {
        index: V
      } = g;
      return t.value === V.value;
    }), w = () => {
      nn(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > s.value - 1 && k(e["onUpdate:active"], s.value - 1));
    }, C = (g) => {
      t.value !== g && (e.onBeforeChange ? p(g) : b(g));
    }, p = (g) => {
      var V = k(e.onBeforeChange, g);
      V = Ce(V) ? V : [V], Promise.all(V).then((I) => {
        I.some((y) => !y) || b(g);
      });
    }, b = (g) => {
      k(e["onUpdate:active"], g), k(e.onChange, g);
    }, M = () => {
      var g = E();
      g.forEach((V) => {
        V.classList.remove(tl, ol, il);
      });
    }, $ = (g) => {
      var V = E(), I = V.length, y = g % 2 === 0;
      V.forEach((S, R) => {
        T(y, S, R, I);
      });
    }, T = (g, V, I, y) => {
      var S = I === y - 1;
      if (!g && S) {
        V.classList.add(il);
        return;
      }
      var R = I === y / 2 - 1, J = I === y / 2;
      R ? V.classList.add(tl) : J && V.classList.add(ol);
    }, E = () => Array.from(a.value.querySelectorAll("." + to())), P = () => {
      k(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: C
    };
    return d(D), le(() => s.value, v), le(() => e.fabProps, (g) => {
      l.value = Ho({}, Ic, g);
    }, {
      immediate: !0,
      deep: !0
    }), sn(() => {
      r.fab && $(s.value);
    }), Qt(() => {
      M(), r.fab && $(s.value);
    }), {
      n: Bc,
      classes: Ec,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: P,
      fabProps: l
    };
  }
});
tu.render = Nc;
const Dr = tu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var fS = Dr, Dc = {
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
function Ac() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(au);
  return r || Cn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: zc,
  classes: Lc
} = re("bottom-navigation-item"), Rc = {
  type: "danger",
  dot: !0
};
function Uc(e, n) {
  var r = oe("var-icon"), a = oe("var-badge"), t = Me("ripple");
  return we((h(), O(
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
    )) : ee("v-if", !0), A(
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
var ou = ne({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ur,
    VarIcon: $e
  },
  directives: {
    Ripple: Ue
  },
  props: Dc,
  setup(e) {
    var n = U(() => e.name), r = U(() => e.badge), a = B({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = Ac(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var m, w = (m = n.value) != null ? m : t.value;
      k(e.onClick, w), k(o.onToggle, w);
    };
    return i(d), le(() => r.value, (m) => {
      a.value = m === !0 ? Rc : r.value;
    }, {
      immediate: !0
    }), {
      n: zc,
      classes: Lc,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
ou.render = Uc;
const Ar = ou;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var cS = Ar, Hc = {
  separator: {
    type: String
  },
  onClick: H()
}, iu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Fc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = dn(iu);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Yc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = un(iu);
  return n || Cn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: jc,
  classes: Wc
} = re("breadcrumb");
function Gc(e, n) {
  return h(), O(
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
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? ee("v-if", !0) : j(e.$slots, "separator", {
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
var lu = ne({
  name: "VarBreadcrumb",
  props: Hc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Yc(), t = U(() => n.value === r.length.value - 1), o = U(() => r.separator.value), i = (l) => {
      t.value || k(e.onClick, l);
    };
    return a(null), {
      n: jc,
      classes: Wc,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
lu.render = Gc;
const zr = lu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var mS = zr, qc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Xc
} = re("breadcrumbs");
function Kc(e, n) {
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
var su = ne({
  name: "VarBreadcrumbs",
  props: qc,
  setup(e) {
    var n = U(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Fc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Xc
    };
  }
});
su.render = Kc;
const Lr = su;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var pS = Lr;
function Zc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Jc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Qc(e) {
  return ["normal", "text", "outline"].includes(e);
}
var _c = {
  type: {
    type: String,
    default: "default",
    validator: Zc
  },
  size: {
    type: String,
    default: "normal",
    validator: Jc
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
    validator: Qc
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
  n: xc,
  classes: em
} = re("button-group");
function nm(e, n) {
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
var uu = ne({
  name: "VarButtonGroup",
  props: _c,
  setup(e) {
    var {
      bindButtons: n
    } = fc(), r = {
      elevation: U(() => e.elevation),
      type: U(() => e.type),
      size: U(() => e.size),
      color: U(() => e.color),
      textColor: U(() => e.textColor),
      mode: U(() => e.mode)
    };
    return n(r), {
      n: xc,
      classes: em,
      formatElevation: vn
    };
  }
});
uu.render = nm;
const Rr = uu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var hS = Rr;
function rm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var am = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: rm,
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
function ll(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function sl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ll(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ll(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: tm,
  classes: om
} = re("card"), im = 500, lm = ["src", "alt"];
function sm(e, n) {
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
        lm
      )) : ee("v-if", !0)]), A(
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
        [j(e.$slots, "close-button", {}, () => [Q(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Bn(e.close, ["stop"])
          },
          {
            default: fe(() => [Q(
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
var du = ne({
  name: "VarCard",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: $e,
    VarButton: Ke
  },
  props: am,
  setup(e) {
    var n = B(null), r = B(null), a = B("auto"), t = B("auto"), o = B("100%"), i = B("100%"), l = B("auto"), s = B("auto"), u = B(void 0), d = B("hidden"), v = B("0px"), f = B("0"), m = U(() => e.layout === "row"), w = B(!1), C = B(!1), {
      zIndex: p
    } = wt(() => e.floating, 1);
    no(() => e.floating, () => !m.value);
    var b = "auto", M = "auto", $ = null, T = B(null), E = /* @__PURE__ */ function() {
      var V = sl(function* () {
        clearTimeout(T.value), clearTimeout($), T.value = null, T.value = setTimeout(/* @__PURE__ */ sl(function* () {
          var {
            width: I,
            height: y,
            left: S,
            top: R
          } = n.value.getBoundingClientRect();
          a.value = me(I), t.value = me(y), o.value = a.value, i.value = t.value, l.value = me(R), s.value = me(S), u.value = "fixed", b = l.value, M = s.value, w.value = !0, yield Nn(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", C.value = !0;
        }), e.ripple ? im : 0);
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), P = () => {
      clearTimeout($), clearTimeout(T.value), T.value = null, o.value = a.value, i.value = t.value, l.value = b, s.value = M, v.value = "0px", f.value = "0", w.value = !1, $ = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", b = "auto", M = "auto", d.value = "hidden", u.value = void 0, C.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      k(e["onUpdate:floating"], !1);
    }, g = (V) => {
      k(e.onClick, V);
    };
    return le(() => e.floating, (V) => {
      m.value || Be(() => {
        V ? E() : P();
      });
    }, {
      immediate: !0
    }), {
      n: tm,
      classes: om,
      toSizeUnit: me,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: T,
      floaterWidth: o,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: p,
      isRow: m,
      close: D,
      showFloatingButtons: w,
      floated: C,
      formatElevation: vn,
      handleClick: g
    };
  }
});
du.render = sm;
const Ur = du;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var gS = Ur, um = {
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
  n: dm,
  classes: vm
} = re("cell");
function fm(e, n) {
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
      [Q(
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
    )) : ee("v-if", !0)]), A(
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
var vu = ne({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: Ue
  },
  props: um,
  setup(e) {
    var n = U(() => e.borderOffset == null ? {} : {
      "--cell-border-left": me(e.borderOffset),
      "--cell-border-right": me(e.borderOffset)
    }), r = (a) => {
      k(e.onClick, a);
    };
    return {
      n: dm,
      classes: vm,
      toSizeUnit: me,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
vu.render = fm;
const dr = vu;
dr.install = function(e) {
  e.component(dr.name, dr);
};
var yS = dr, cm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: mm
} = re("form-details"), pm = {
  key: 0
}, hm = {
  key: 0
};
function gm(e, n) {
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
        [A(
          "div",
          {
            class: c(e.n("error-message"))
          },
          [Q(
            De,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.errorMessage ? (h(), O(
                "div",
                pm,
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
        ), A(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [Q(
            De,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.extraMessage ? (h(), O(
                "div",
                hm,
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
var fu = ne({
  name: "VarFormDetails",
  props: cm,
  setup: () => ({
    n: mm
  })
});
fu.render = gm;
const Ge = fu;
Ge.install = function(e) {
  e.component(Ge.name, Ge);
};
var bS = Ge, ym = {
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
}, cu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function bm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(cu);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function wm() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = un(cu);
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
var mu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function kn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(mu), a = Na(), t = r ? (o) => {
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
function Cm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn(mu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: Sm,
  classes: km
} = re("checkbox");
function $m(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("hover"), i = Me("ripple");
  return h(), O(
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
        }, () => [Q(
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
        }, () => [Q(
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
        )]), Q(
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
      }]]), A(
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
    ), Q(
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
var pu = ne({
  name: "VarCheckbox",
  directives: {
    Ripple: Ue,
    Hover: Dn
  },
  components: {
    VarIcon: $e,
    VarFormDetails: Ge,
    VarHoverOverlay: on
  },
  props: ym,
  setup(e) {
    var n = B(!1), r = U(() => n.value === e.checkedValue), a = U(() => e.checkedValue), t = B(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = wm(), {
      hovering: l,
      handleHovering: s
    } = Sr(), {
      form: u,
      bindForm: d
    } = kn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: w
    } = Sn(), C = (g) => {
      Be(() => {
        var {
          validateTrigger: V,
          rules: I,
          modelValue: y
        } = e;
        f(V, g, I, y);
      });
    }, p = (g) => {
      n.value = g;
      var {
        checkedValue: V,
        onChange: I
      } = e;
      k(e["onUpdate:modelValue"], n.value), k(I, n.value), C("onChange"), g === V ? o == null || o.onChecked(V) : o == null || o.onUnchecked(V);
    }, b = (g) => {
      var {
        disabled: V,
        readonly: I,
        checkedValue: y,
        uncheckedValue: S,
        onClick: R
      } = e;
      if (!(u != null && u.disabled.value || V) && (k(R, g), !(u != null && u.readonly.value || I))) {
        t.value = !0;
        var J = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && J || p(r.value ? S : y);
      }
    }, M = (g) => {
      var {
        checkedValue: V,
        uncheckedValue: I
      } = e;
      n.value = g.includes(V) ? V : I;
    }, $ = () => {
      t.value = !1;
    }, T = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), w();
    }, E = (g) => {
      var {
        checkedValue: V,
        uncheckedValue: I
      } = e, y = ![V, I].includes(g);
      y && (g = r.value ? I : V), p(g);
    }, P = () => m(e.rules, e.modelValue);
    le(() => e.modelValue, (g) => {
      n.value = g;
    }, {
      immediate: !0
    });
    var D = {
      checkedValue: a,
      checked: r,
      sync: M,
      validate: P,
      resetValidation: w,
      reset: T,
      resetWithAnimation: $
    };
    return k(i, D), k(d, D), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: l,
      handleHovering: s,
      n: Sm,
      classes: km,
      handleClick: b,
      toggle: E,
      reset: T,
      validate: P,
      resetValidation: w
    };
  }
});
pu.render = $m;
const vr = pu;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var wS = vr;
function Tm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Pm = {
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
    validator: Tm
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
  n: Om,
  classes: Vm
} = re("checkbox-group");
function Mm(e, n) {
  var r = oe("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(
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
var hu = ne({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: Ge
  },
  props: Pm,
  setup(e) {
    var n = U(() => e.max), r = U(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = bm(), {
      bindForm: i
    } = kn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Sn(), v = U(() => l.value), f = (D) => {
      Be(() => {
        var {
          validateTrigger: g,
          rules: V,
          modelValue: I
        } = e;
        s(g, D, V, I);
      });
    }, m = (D) => {
      k(e["onUpdate:modelValue"], D), k(e.onChange, D), f("onChange");
    }, w = (D) => {
      var {
        modelValue: g
      } = e;
      g.includes(D) || m([...g, D]);
    }, C = (D) => {
      var {
        modelValue: g
      } = e;
      g.includes(D) && m(g.filter((V) => V !== D));
    }, p = () => t.forEach((D) => {
      var {
        sync: g
      } = D;
      return g(e.modelValue);
    }), b = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, M = () => {
      var D = t.map((V) => {
        var {
          checkedValue: I
        } = V;
        return I.value;
      }), g = ji(D);
      return b(), k(e["onUpdate:modelValue"], g), g;
    }, $ = () => {
      var D = t.filter((V) => {
        var {
          checked: I
        } = V;
        return !I.value;
      }).map((V) => {
        var {
          checkedValue: I
        } = V;
        return I.value;
      }), g = ji(D);
      return b(), k(e["onUpdate:modelValue"], g), g;
    }, T = () => {
      k(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, p, {
      deep: !0
    }), le(() => a.value, p);
    var P = {
      max: n,
      checkedCount: r,
      onChecked: w,
      onUnchecked: C,
      validate: E,
      resetValidation: d,
      reset: T,
      errorMessage: v
    };
    return o(P), k(i, P), {
      errorMessage: l,
      n: Om,
      classes: Vm,
      checkAll: M,
      inverseAll: $,
      reset: T,
      validate: E,
      resetValidation: d
    };
  }
});
hu.render = Mm;
const Hr = hu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var CS = Hr;
function Bm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Em(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Im = {
  type: {
    type: String,
    default: "default",
    validator: Bm
  },
  size: {
    type: String,
    default: "normal",
    validator: Em
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Je(Os, "name"),
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
  n: Qn,
  classes: Nm
} = re("chip");
function Dm(e, n) {
  var r = oe("var-icon");
  return h(), ge(
    De,
    {
      name: e.n("$-fade")
    },
    {
      default: fe(() => [A(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [j(e.$slots, "left"), A(
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
          [Q(
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
var gu = ne({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Im,
  setup(e) {
    var n = U(() => {
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
    }), r = U(() => {
      var {
        size: t,
        block: o,
        type: i,
        plain: l,
        round: s
      } = e, u = Qn(o ? "$--flex" : "$--inline-flex"), d = l ? Qn("plain") + " " + Qn("plain-" + i) : Qn("--" + i), v = s ? Qn("--round") : null;
      return [Qn("--" + t), u, d, v];
    }), a = (t) => {
      k(e.onClose, t);
    };
    return {
      n: Qn,
      classes: Nm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
gu.render = Dm;
const fr = gu;
fr.install = function(e) {
  e.component(fr.name, fr);
};
var SS = fr;
function Am(e) {
  return ["row", "column"].includes(e);
}
function zm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Lm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Rm = {
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
    validator: Am
  },
  justify: {
    type: String,
    validator: zm
  },
  align: {
    type: String,
    validator: Lm
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
}, yu = Symbol("ROW_BIND_COL_KEY");
function Um() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(yu);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Hm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(yu);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: Pt,
  classes: Fm
} = re("col");
function Ym(e, n) {
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
var bu = ne({
  name: "VarCol",
  props: Rm,
  setup(e) {
    var n = B({
      left: 0,
      right: 0
    }), r = U(() => L(e.span)), a = U(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Hm(), i = {
      setPadding(u) {
        n.value = u;
      }
    }, l = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (mi(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Pt("--span-" + u + "-" + m)), f && v.push(Pt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Pt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      k(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), k(o, i), {
      n: Pt,
      classes: Fm,
      padding: n,
      toNumber: L,
      toSizeUnit: me,
      getSize: l,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Ut
    };
  }
});
bu.render = Ym;
const Fr = bu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var kS = Fr, wu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function jm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn(wu);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var Wm = {
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
  n: Gm
} = re("collapse");
function qm(e, n) {
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
var Cu = ne({
  name: "VarCollapse",
  props: Wm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = jm(), t = U(() => e.modelValue), o = U(() => e.offset), i = U(() => e.divider), l = U(() => e.elevation), s = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (C, p) => s() ? p ? e.accordion ? C : [...e.modelValue, C] : e.accordion ? null : e.modelValue.filter((b) => b !== C) : null, d = (C, p) => {
      var b = u(C, p);
      k(e["onUpdate:modelValue"], b), k(e.onChange, b);
    }, v = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: b
          } = p;
          return e.modelValue === b.value;
        });
      var C = r.filter((p) => {
        var {
          name: b
        } = p;
        return b.value === void 0 ? !1 : e.modelValue.includes(b.value);
      });
      return C.length ? C : void 0;
    }, f = () => e.accordion ? r.find((C) => {
      var {
        index: p,
        name: b
      } = C;
      return b.value === void 0 && e.modelValue === p.value;
    }) : r.filter((C) => {
      var {
        index: p,
        name: b
      } = C;
      return b.value === void 0 && e.modelValue.includes(p.value);
    }), m = () => {
      if (s()) {
        var C = v() || f();
        if (e.accordion && !C || !e.accordion && !C.length) {
          r.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((p) => {
          var b = e.accordion ? C === p : C.includes(p);
          p.init(e.accordion, b);
        });
      }
    }, w = {
      active: t,
      offset: o,
      divider: i,
      elevation: l,
      updateItem: d
    };
    return a(w), le(() => n.value, () => Be().then(m)), le(() => e.modelValue, () => Be().then(m)), {
      n: Gm,
      divider: i
    };
  }
});
Cu.render = qm;
const Yr = Cu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var $S = Yr;
function Xm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(wu);
  return r || Cn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var Km = {
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
  n: Zm,
  classes: Jm
} = re("collapse-item");
function Qm(e, n) {
  var r = oe("var-icon");
  return h(), O(
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
        [j(e.$slots, "title", {}, () => [be(
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
        [j(e.$slots, "icon", {}, () => [Q(
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
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[br, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Su = ne({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Km,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Xm(), t = !0, o = B(null), i = B(!1), l = B(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = r, m = U(() => e.name), w = (E, P) => {
      s.value === void 0 || E && Ce(s.value) || P === l.value || (l.value = P, C(!0));
    }, C = (E) => {
      e.disabled || E || f(e.name || n.value, !l.value);
    }, p = () => {
      o.value && (o.value.style.height = "", i.value = !0, gn(() => {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = 0 + "px", gn(() => {
          o.value.style.height = E + "px", t && xt(() => {
            t && $();
          });
        });
      }));
    }, b = () => {
      t = !1;
    }, M = () => {
      if (o.value) {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = E + "px", gn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, $ = () => {
      l.value || (i.value = !1), o.value.style.height = "";
    }, T = {
      index: n,
      name: m,
      init: w
    };
    return a(T), le(l, (E) => {
      E ? p() : M();
    }), {
      n: Zm,
      start: b,
      classes: Jm,
      showContent: i,
      isShow: l,
      offset: u,
      divider: d,
      elevation: v,
      toggle: C,
      contentEl: o,
      transitionend: $,
      formatElevation: vn
    };
  }
});
Su.render = Qm;
const jr = Su;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var TS = jr, _m = {
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
  n: xm
} = re("countdown"), Yo = 1e3, jo = 60 * Yo, Wo = 60 * jo, ul = 24 * Wo;
function ep(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default", ci(ls(e.timeData)), () => [be(
      ae(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var ku = ne({
  name: "VarCountdown",
  props: _m,
  setup(e) {
    var n = B(""), r = B({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, i = 0, l, s = (w, C) => {
      var p = Object.values(C), b = ["DD", "HH", "mm", "ss"], M = [24, 60, 60, 1e3];
      if (b.forEach((T, E) => {
        w.includes(T) ? w = w.replace(T, Ma("" + p[E], 2, "0")) : p[E + 1] += p[E] * M[E];
      }), w.includes("S")) {
        var $ = Ma("" + p[p.length - 1], 3, "0");
        w.includes("SSS") ? w = w.replace("SSS", $) : w.includes("SS") ? w = w.replace("SS", $.slice(0, 2)) : w = w.replace("S", $.slice(0, 1));
      }
      return w;
    }, u = (w) => {
      var C = Math.floor(w / ul), p = Math.floor(w % ul / Wo), b = Math.floor(w % Wo / jo), M = Math.floor(w % jo / Yo), $ = Math.floor(w % Yo), T = {
        days: C,
        hours: p,
        minutes: b,
        seconds: M,
        milliseconds: $
      };
      r.value = T, k(e.onChange, r.value), n.value = s(e.format, T);
    }, d = () => {
      var {
        time: w,
        onEnd: C
      } = e, p = performance.now();
      if (a || (a = p + L(w)), i = a - p, i < 0 && (i = 0), u(i), i === 0) {
        k(C);
        return;
      }
      t && (o = gn(d));
    }, v = function(w) {
      w === void 0 && (w = !1), !(t && !w) && (t = !0, a = performance.now() + (i || L(e.time)), d());
    }, f = () => {
      t = !1, Qi(o);
    }, m = () => {
      a = 0, t = !1, Qi(o), d();
    };
    return le(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Tr(() => {
      l != null && (t = l, t === !0 && v(!0));
    }), Pr(() => {
      l = t, f();
    }), _a(f), {
      showTime: n,
      timeData: r,
      n: xm,
      start: v,
      pause: f,
      reset: m
    };
  }
});
ku.render = ep;
const Wr = ku;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var PS = Wr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ua = 9e15, Or = 1e9, Go = "0123456789abcdef", Yt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", jt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", qo = {
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
}, $u, Hn, ce = !0, oo = "[DecimalError] ", kr = oo + "Invalid argument: ", Tu = oo + "Precision limit exceeded", Pu = oo + "crypto unavailable", Ou = "[object Decimal]", Qe = Math.floor, Ye = Math.pow, np = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, rp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ap = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Vu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Mn = 1e7, ve = 7, tp = 9007199254740991, op = Yt.length - 1, Xo = jt.length - 1, q = { toStringTag: Ou };
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
    throw Error(kr + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = ip(a, Nu(a, r)), a.precision = e, a.rounding = n, ue(Hn == 2 || Hn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ce = !1, o = d.s * Ye(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Xe(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ye(r, 1 / 3), e = Qe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
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
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / lo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Xa(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return ue(o, i.precision = r, i.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Xa(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / lo(5, e)), t = Xa(o, 2, t, t, !0);
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
  return a !== -1 ? a === 0 ? n.isNeg() ? On(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? On(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = On(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
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
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = On(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Xo)
      return i = On(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Xo)
      return i = On(d, v + 4, f).times(0.5), i.s = u.s, i;
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
  if (ce = !1, l = v + m, i = ir(u, l), a = n ? Wt(d, l + 10) : ir(e, l), s = Pe(i, a, l, 1), ct(s.d, t = v, f))
    do
      if (l += 10, i = ir(u, l), a = n ? Wt(d, l + 10) : ir(e, l), s = Pe(i, a, l, 1), !o) {
        +Xe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (ct(s.d, t += 10, f));
  return ce = !0, ue(s, v, f);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, w = m.constructor;
  if (e = new w(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new w(NaN) : m.d ? e.s = -e.s : e = new w(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = w.precision, s = w.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new w(m);
    else
      return new w(s === 3 ? -0 : 0);
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
        u[t] = Mn - 1;
      --u[t], u[a] += Mn;
    }
    u[a] -= f[a];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = io(u, r), ce ? ue(e, l, s) : e) : new w(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (ce = !1, a.modulo == 9 ? (n = Pe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Pe(r, e, 0, a.modulo, 1), n = n.times(e), ce = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return Ko(this);
};
q.naturalLogarithm = q.ln = function() {
  return ir(this);
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
    n = (u[--t] = u[t] + d[t] + n) / Mn | 0, u[t] %= Mn;
  for (n && (u.unshift(n), ++a), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = io(u, a), ce ? ue(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(kr + e);
  return r.d ? (n = Mu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = sp(a, Nu(a, r)), a.precision = e, a.rounding = n, ue(Hn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
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
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Hn == 2 || Hn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, o, i, l, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Qe(d.e / ve) + Qe(e.e / ve), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, i = s, s = u, u = i), o = [], i = s + u, a = i; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = o[t] + m[a] * f[t - a - 1] + n, o[t--] = l % Mn | 0, n = l / Mn | 0;
    o[t] = (o[t] + n) % Mn | 0;
  }
  for (; !o[--i]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = io(o, r), ce ? ue(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return Oi(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (ln(e, 0, Or), n === void 0 ? n = a.rounding : ln(n, 0, 8), ue(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = An(a, !0) : (ln(e, 0, Or), n === void 0 ? n = t.rounding : ln(n, 0, 8), a = ue(new t(a), e + 1, n), r = An(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = An(t) : (ln(e, 0, Or), n === void 0 ? n = o.rounding : ln(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = An(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, w = m.d, C = m.constructor;
  if (!w)
    return new C(m);
  if (u = r = new C(1), a = s = new C(0), n = new C(a), o = n.e = Mu(w) - m.e - 1, i = o % ve, n.d[0] = Ye(10, i < 0 ? ve + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new C(e), !l.isInt() || l.lt(u))
      throw Error(kr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (ce = !1, l = new C(Xe(w)), d = C.precision, C.precision = o = w.length * ve * 2; v = Pe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Pe(u, a, o, 1).minus(m).abs().cmp(Pe(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], C.precision = d, ce = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return Oi(this, 16, e, n);
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
  return Oi(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Ye(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(l, a, o);
  if (n = Qe(e.e / ve), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= tp)
    return t = Bu(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Ye(+l, u), n = r == 0 || !isFinite(r) ? Qe(u * (Math.log("0." + Xe(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (ce = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = Ko(e.times(ir(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), ct(t.d, a, o) && (n = a + 10, t = ue(Ko(e.times(ir(l, n + r)), n), n + 5, 1), +Xe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = i, ce = !0, s.rounding = o, ue(t, a, o));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = An(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (ln(e, 1, Or), n === void 0 ? n = t.rounding : ln(n, 0, 8), a = ue(new t(a), e, n), r = An(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (ln(e, 1, Or), n === void 0 ? n = a.rounding : ln(n, 0, 8)), ue(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = An(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = An(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Xe(e) {
  var n, r, a, t = e.length - 1, o = "", i = e[0];
  if (t > 0) {
    for (o += i, n = 1; n < t; n++)
      a = e[n] + "", r = ve - a.length, r && (o += xn(r)), o += a;
    i = e[n], a = i + "", r = ve - a.length, r && (o += xn(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return o + i;
}
function ln(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(kr + e);
}
function ct(e, n, r, a) {
  var t, o, i, l;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += ve, t = 0) : (t = Math.ceil((n + 1) / ve), n %= ve), o = Ye(10, ve - n), l = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ye(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : i = ((a || r < 4) && l + 1 == o || !a && r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ye(10, n - 3) - 1, i;
}
function Nt(e, n, r) {
  for (var a, t = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Go.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function ip(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / lo(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Xa(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, m, w, C, p, b, M, $, T, E, P, D, g, V, I, y, S, R = a.constructor, J = a.s == t.s ? 1 : -1, _ = a.d, W = t.d;
    if (!_ || !_[0] || !W || !W[0])
      return new R(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (_ ? W && _[0] == W[0] : !W) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          _ && _[0] == 0 || !W ? J * 0 : J / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Mn, m = ve, d = Qe(a.e / m) - Qe(t.e / m)), y = W.length, V = _.length, b = new R(J), M = b.d = [], v = 0; W[v] == (_[v] || 0); v++)
      ;
    if (W[v] > (_[v] || 0) && d--, o == null ? (P = o = R.precision, i = R.rounding) : l ? P = o + (a.e - t.e) + 1 : P = o, P < 0)
      M.push(1), w = !0;
    else {
      if (P = P / m + 2 | 0, v = 0, y == 1) {
        for (f = 0, W = W[0], P++; (v < V || f) && P--; v++)
          D = f * s + (_[v] || 0), M[v] = D / W | 0, f = D % W | 0;
        w = f || v < V;
      } else {
        for (f = s / (W[0] + 1) | 0, f > 1 && (W = e(W, f, s), _ = e(_, f, s), y = W.length, V = _.length), g = y, $ = _.slice(0, y), T = $.length; T < y; )
          $[T++] = 0;
        S = W.slice(), S.unshift(0), I = W[0], W[1] >= s / 2 && ++I;
        do
          f = 0, u = n(W, $, y, T), u < 0 ? (E = $[0], y != T && (E = E * s + ($[1] || 0)), f = E / I | 0, f > 1 ? (f >= s && (f = s - 1), C = e(W, f, s), p = C.length, T = $.length, u = n(C, $, p, T), u == 1 && (f--, r(C, y < p ? S : W, p, s))) : (f == 0 && (u = f = 1), C = W.slice()), p = C.length, p < T && C.unshift(0), r($, C, T, s), u == -1 && (T = $.length, u = n(W, $, y, T), u < 1 && (f++, r($, y < T ? S : W, T, s))), T = $.length) : u === 0 && (f++, $ = [0]), M[v++] = f, u && $[0] ? $[T++] = _[g] || 0 : ($ = [_[g]], T = 1);
        while ((g++ < V || $[0] !== void 0) && P--);
        w = $[0] !== void 0;
      }
      M[0] || M.shift();
    }
    if (m == 1)
      b.e = d, $u = w;
    else {
      for (v = 1, f = M[0]; f >= 10; f /= 10)
        v++;
      b.e = v + d * m - 1, ue(b, l ? o + b.e + 1 : o, i, w);
    }
    return b;
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
        o += ve, i = n, d = v[f = 0], s = d / Ye(10, t - i - 1) % 10 | 0;
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
        o %= ve, i = o - ve + t, s = i < 0 ? 0 : d / Ye(10, t - i - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (i < 0 ? d : d % Ye(10, t - i - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? i > 0 ? d / Ye(10, t - i) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ye(10, (ve - n % ve) % ve), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = Ye(10, ve - o), v[f] = i > 0 ? (d / Ye(10, t - i) % Ye(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, i = v[0]; i >= 10; i /= 10)
              o++;
            for (i = v[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            o != l && (e.e++, v[0] == Mn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != Mn)
              break;
            v[f--] = 0, l = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return ce && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function An(e, n, r) {
  if (!e.isFinite())
    return Iu(e);
  var a, t = e.e, o = Xe(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + xn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + xn(-t - 1) + o, r && (a = r - i) > 0 && (o += xn(a))) : t >= i ? (o += xn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + xn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += xn(a))), o;
}
function io(e, n) {
  var r = e[0];
  for (n *= ve; r >= 10; r /= 10)
    n++;
  return n;
}
function Wt(e, n, r) {
  if (n > op)
    throw ce = !0, r && (e.precision = r), Error(Tu);
  return ue(new e(Yt), n, 1, !0);
}
function On(e, n, r) {
  if (n > Xo)
    throw Error(Tu);
  return ue(new e(jt), n, r, !0);
}
function Mu(e) {
  var n = e.length - 1, r = n * ve + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function xn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Bu(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / ve + 4);
  for (ce = !1; ; ) {
    if (r % 2 && (o = o.times(n), vl(o.d, i) && (t = !0)), r = Qe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), vl(n.d, i);
  }
  return ce = !0, o;
}
function dl(e) {
  return e.d[e.d.length - 1] & 1;
}
function Eu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Ko(e, n) {
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, w = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ce = !1, s = w) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Ye(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), l = i.plus(Pe(o, r, s, 1)), Xe(l.d).slice(0, s) === Xe(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = ue(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && ct(i.d, s - a, m, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return ue(i, f.precision = w, m, ce = !0);
      else
        return f.precision = w, i;
    }
    i = l;
  }
}
function ir(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, m = 1, w = 10, C = e, p = C.d, b = C.constructor, M = b.rounding, $ = b.precision;
  if (C.s < 0 || !p || !p[0] || !C.e && p[0] == 1 && p.length == 1)
    return new b(p && !p[0] ? -1 / 0 : C.s != 1 ? NaN : p ? 0 : C);
  if (n == null ? (ce = !1, d = $) : d = n, b.precision = d += w, r = Xe(p), a = r.charAt(0), Math.abs(o = C.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      C = C.times(e), r = Xe(C.d), a = r.charAt(0), m++;
    o = C.e, a > 1 ? (C = new b("0." + r), o++) : C = new b(a + "." + r.slice(1));
  } else
    return u = Wt(b, d + 2, $).times(o + ""), C = ir(new b(a + "." + r.slice(1)), d - w).plus(u), b.precision = $, n == null ? ue(C, $, M, ce = !0) : C;
  for (v = C, s = i = C = Pe(C.minus(1), C.plus(1), d, 1), f = ue(C.times(C), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Pe(i, new b(t), d, 1)), Xe(u.d).slice(0, d) === Xe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Wt(b, d + 2, $).times(o + ""))), s = Pe(s, new b(m), d, 1), n == null)
        if (ct(s.d, d - w, M, l))
          b.precision = d += w, u = i = C = Pe(v.minus(1), v.plus(1), d, 1), f = ue(C.times(C), d, 1), t = l = 1;
        else
          return ue(s, b.precision = $, M, ce = !0);
      else
        return b.precision = $, s;
    s = u, t += 2;
  }
}
function Iu(e) {
  return String(e.s * e.s / 0);
}
function Zo(e, n) {
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
function lp(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Vu.test(n))
      return Zo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (rp.test(n))
    r = 16, n = n.toLowerCase();
  else if (np.test(n))
    r = 2;
  else if (ap.test(n))
    r = 8;
  else
    throw Error(kr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = Bu(a, new a(r), o, o * 2)), u = Nt(n, r, Mn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = io(u, d), e.d = u, ce = !1, i && (e = Pe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ye(2, s) : lr.pow(2, s))), ce = !0, e);
}
function sp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Xa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / lo(5, r)), n = Xa(e, 2, n, n);
  for (var t, o = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(i.times(t).minus(l))));
  return n;
}
function Xa(e, n, r, a, t) {
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
function lo(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Nu(e, n) {
  var r, a = n.s < 0, t = On(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Hn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Hn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Hn = dl(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Hn = dl(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Oi(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, m = e.constructor, w = r !== void 0;
  if (w ? (ln(r, 1, Or), a === void 0 ? a = m.rounding : ln(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Iu(e);
  else {
    for (d = An(e), i = d.indexOf("."), w ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Nt(An(f), 10, t), f.e = f.d.length), v = Nt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = w ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = $u), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += Go.charAt(v[i]);
      if (w) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = Nt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += Go.charAt(v[i]);
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
function vl(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function up(e) {
  return new this(e).abs();
}
function dp(e) {
  return new this(e).acos();
}
function vp(e) {
  return new this(e).acosh();
}
function fp(e, n) {
  return new this(e).plus(n);
}
function cp(e) {
  return new this(e).asin();
}
function mp(e) {
  return new this(e).asinh();
}
function pp(e) {
  return new this(e).atan();
}
function hp(e) {
  return new this(e).atanh();
}
function gp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = On(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? On(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = On(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = On(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function yp(e) {
  return new this(e).cbrt();
}
function bp(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function wp(e, n, r) {
  return new this(e).clamp(n, r);
}
function Cp(e) {
  if (!e || typeof e != "object")
    throw Error(oo + "Object expected");
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
    if (r = o[n], t && (this[r] = qo[r]), (a = e[r]) !== void 0)
      if (Qe(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(kr + r + ": " + a);
  if (r = "crypto", t && (this[r] = qo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Pu);
      else
        this[r] = !1;
    else
      throw Error(kr + r + ": " + a);
  return this;
}
function Sp(e) {
  return new this(e).cos();
}
function kp(e) {
  return new this(e).cosh();
}
function Du(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, fl(o)) {
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
      return Zo(u, o.toString());
    } else if (s !== "string")
      throw Error(kr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), Vu.test(o) ? Zo(u, o) : lp(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Cp, t.clone = Du, t.isDecimal = fl, t.abs = up, t.acos = dp, t.acosh = vp, t.add = fp, t.asin = cp, t.asinh = mp, t.atan = pp, t.atanh = hp, t.atan2 = gp, t.cbrt = yp, t.ceil = bp, t.clamp = wp, t.cos = Sp, t.cosh = kp, t.div = $p, t.exp = Tp, t.floor = Pp, t.hypot = Op, t.ln = Vp, t.log = Mp, t.log10 = Ep, t.log2 = Bp, t.max = Ip, t.min = Np, t.mod = Dp, t.mul = Ap, t.pow = zp, t.random = Lp, t.round = Rp, t.sign = Up, t.sin = Hp, t.sinh = Fp, t.sqrt = Yp, t.sub = jp, t.sum = Wp, t.tan = Gp, t.tanh = qp, t.trunc = Xp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function $p(e, n) {
  return new this(e).div(n);
}
function Tp(e) {
  return new this(e).exp();
}
function Pp(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function Op() {
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
function fl(e) {
  return e instanceof lr || e && e.toStringTag === Ou || !1;
}
function Vp(e) {
  return new this(e).ln();
}
function Mp(e, n) {
  return new this(e).log(n);
}
function Bp(e) {
  return new this(e).log(2);
}
function Ep(e) {
  return new this(e).log(10);
}
function Ip() {
  return Eu(this, arguments, "lt");
}
function Np() {
  return Eu(this, arguments, "gt");
}
function Dp(e, n) {
  return new this(e).mod(n);
}
function Ap(e, n) {
  return new this(e).mul(n);
}
function zp(e, n) {
  return new this(e).pow(n);
}
function Lp(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : ln(e, 1, Or), a = Math.ceil(e / ve), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Pu);
  else
    for (; o < a; )
      l[o++] = Math.random() * 1e7 | 0;
  for (a = l[--o], e %= ve, a && e && (t = Ye(10, ve - e), l[o] = (a / t | 0) * t); l[o] === 0; o--)
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
function Rp(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Up(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Hp(e) {
  return new this(e).sin();
}
function Fp(e) {
  return new this(e).sinh();
}
function Yp(e) {
  return new this(e).sqrt();
}
function jp(e, n) {
  return new this(e).sub(n);
}
function Wp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ce = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ce = !0, ue(r, this.precision, this.rounding);
}
function Gp(e) {
  return new this(e).tan();
}
function qp(e) {
  return new this(e).tanh();
}
function Xp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var lr = q.constructor = Du(qo);
Yt = new lr(Yt);
jt = new lr(jt);
var Kp = {
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
  n: Zp,
  classes: Jp
} = re("counter"), cl = 100, ml = 600, Qp = ["inputmode", "readonly", "disabled"];
function _p(e, n) {
  var r = oe("var-icon"), a = oe("var-button"), t = oe("var-form-details");
  return h(), O(
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
      [Q(
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
          default: fe(() => [Q(r, {
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
        Qp
      ), [[Vv, e.inputValue]]), Q(
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
          default: fe(() => [Q(r, {
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
    ), Q(
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
var Au = ne({
  name: "VarCounter",
  components: {
    VarButton: Ke,
    VarIcon: $e,
    VarFormDetails: Ge
  },
  directives: {
    Ripple: Ue
  },
  inheritAttrs: !1,
  props: Kp,
  setup(e) {
    var n = B(""), {
      bindForm: r,
      form: a
    } = kn(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: i,
      // expose
      resetValidation: l
    } = Sn(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, w = () => i(e.rules, e.modelValue), C = (W) => {
      Be(() => {
        var {
          validateTrigger: N,
          rules: x,
          modelValue: te
        } = e;
        o(N, W, x, te);
      });
    }, p = () => {
      var {
        min: W
      } = e;
      k(e["onUpdate:modelValue"], W != null ? L(W) : 0), l();
    }, b = {
      reset: p,
      validate: w,
      resetValidation: l
    }, M = U(() => {
      var {
        max: W,
        modelValue: N
      } = e;
      return W != null && L(N) >= L(W);
    }), $ = U(() => {
      var {
        min: W,
        modelValue: N
      } = e;
      return W != null && L(N) <= L(W);
    }), T = (W) => {
      var {
        decimalLength: N,
        max: x,
        min: te
      } = e, F = L(W);
      return x != null && F > L(x) && (F = L(x)), te != null && F < L(te) && (F = L(te)), W = String(F), N != null && (W = F.toFixed(L(N))), W;
    }, E = (W) => {
      var {
        lazyChange: N,
        onBeforeChange: x
      } = e, {
        value: te
      } = W.target, F = T(te);
      N ? k(x, L(F), _) : J(F), C("onInputChange");
    }, P = () => {
      var {
        disabled: W,
        readonly: N,
        disableDecrement: x,
        decrementButton: te,
        lazyChange: F,
        step: Z,
        modelValue: K,
        onDecrement: z,
        onBeforeChange: Y
      } = e;
      if (!(u != null && u.value || s != null && s.value || W || N || x || !te) && !$.value) {
        var X = new lr(L(K)).minus(new lr(L(Z))).toString(), de = T(X), pe = L(de);
        k(z, pe), F ? k(Y, pe, _) : (J(de), C("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: W,
        readonly: N,
        disableIncrement: x,
        incrementButton: te,
        lazyChange: F,
        step: Z,
        modelValue: K,
        onIncrement: z,
        onBeforeChange: Y
      } = e;
      if (!(u != null && u.value || s != null && s.value || W || N || x || !te) && !M.value) {
        var X = new lr(L(K)).plus(new lr(L(Z))).toString(), de = T(X), pe = L(de);
        k(z, pe), F ? k(Y, pe, _) : (J(de), C("onIncrement"));
      }
    }, g = () => {
      var {
        press: W,
        lazyChange: N
      } = e;
      !W || N || (m = window.setTimeout(() => {
        R();
      }, ml));
    }, V = () => {
      var {
        press: W,
        lazyChange: N
      } = e;
      !W || N || (f = window.setTimeout(() => {
        S();
      }, ml));
    }, I = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, y = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, S = () => {
      d = window.setTimeout(() => {
        D(), S();
      }, cl);
    }, R = () => {
      v = window.setTimeout(() => {
        P(), R();
      }, cl);
    }, J = (W) => {
      n.value = W;
      var N = L(W);
      k(e["onUpdate:modelValue"], N);
    }, _ = (W) => {
      J(T(String(W))), C("onLazyChange");
    };
    return k(r, b), le(() => e.modelValue, (W) => {
      J(T(String(W))), k(e.onChange, L(W));
    }), J(T(String(e.modelValue))), {
      n: Zp,
      classes: Jp,
      formatElevation: vn,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: M,
      isMin: $,
      validate: w,
      reset: p,
      resetValidation: l,
      handleChange: E,
      decrement: P,
      increment: D,
      pressDecrement: g,
      pressIncrement: V,
      releaseDecrement: I,
      releaseIncrement: y,
      toSizeUnit: me,
      toNumber: L
    };
  }
});
Au.render = _p;
const Gr = Au;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var OS = Gr, zu = 60, Lu = zu * 60, Ru = Lu * 24, xp = Ru * 7, Ka = 1e3, yo = zu * Ka, pl = Lu * Ka, eh = Ru * Ka, nh = xp * Ka, Vi = "millisecond", Ha = "second", Fa = "minute", Ya = "hour", er = "day", Dt = "week", Pn = "month", Uu = "quarter", nr = "year", ja = "date", rh = "YYYY-MM-DDTHH:mm:ssZ", hl = "Invalid Date", ah = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, th = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const oh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Jo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, ih = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Jo(t, 2, "0") + ":" + Jo(o, 2, "0");
}, lh = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Pn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), Pn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, sh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, uh = function(n) {
  var r = {
    M: Pn,
    y: nr,
    w: Dt,
    d: er,
    D: ja,
    h: Ya,
    m: Fa,
    s: Ha,
    ms: Vi,
    Q: Uu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, dh = function(n) {
  return n === void 0;
};
const vh = {
  s: Jo,
  z: ih,
  m: lh,
  a: sh,
  p: uh,
  u: dh
};
var ot = "en", qr = {};
qr[ot] = oh;
var Mi = function(n) {
  return n instanceof so;
}, Gt = function e(n, r, a) {
  var t;
  if (!n)
    return ot;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    qr[o] && (t = o), r && (qr[o] = r, t = o);
    var i = n.split("-");
    if (!t && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    qr[l] = n, t = l;
  }
  return !a && t && (ot = t), t || !a && ot;
}, ie = function(n, r) {
  if (Mi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new so(a);
}, fh = function(n, r) {
  return ie(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = vh;
Te.l = Gt;
Te.i = Mi;
Te.w = fh;
var ch = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(ah);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, so = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Gt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = ch(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== hl;
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
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function(b, M) {
      var $ = Te.w(o.$u ? Date.UTC(o.$y, M, b) : new Date(o.$y, M, b), o);
      return i ? $ : $.endOf(er);
    }, u = function(b, M) {
      var $ = [0, 0, 0, 0], T = [23, 59, 59, 999];
      return Te.w(o.toDate()[b].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? $ : T).slice(M)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case nr:
        return i ? s(1, 0) : s(31, 11);
      case Pn:
        return i ? s(1, v) : s(0, v + 1);
      case Dt: {
        var w = this.$locale().weekStart || 0, C = (d < w ? d + 7 : d) - w;
        return s(i ? f - C : f + (6 - C), v);
      }
      case er:
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
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[er] = l + "Date", o[ja] = l + "Date", o[Pn] = l + "Month", o[nr] = l + "FullYear", o[Ya] = l + "Hours", o[Fa] = l + "Minutes", o[Ha] = l + "Seconds", o[Vi] = l + "Milliseconds", o)[i], u = i === er ? this.$D + (t - this.$W) : t;
    if (i === Pn || i === nr) {
      var d = this.clone().set(ja, 1);
      d.$d[s](u), d.init(), this.$d = d.set(ja, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (l === Pn)
      return this.set(Pn, this.$M + a);
    if (l === nr)
      return this.set(nr, this.$y + a);
    if (l === er)
      return s(1);
    if (l === Dt)
      return s(7);
    var u = (i = {}, i[Fa] = yo, i[Ya] = pl, i[Ha] = Ka, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || hl;
    var i = a || rh, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, w = function($, T, E, P) {
      return $ && ($[T] || $(t, i)) || E[T].slice(0, P);
    }, C = function($) {
      return Te.s(s % 12 || 12, $, "0");
    }, p = m || function(M, $, T) {
      var E = M < 12 ? "AM" : "PM";
      return T ? E.toLowerCase() : E;
    }, b = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Te.s(d + 1, 2, "0"),
      MMM: w(o.monthsShort, d, f, 3),
      MMMM: w(f, d),
      D: this.$D,
      DD: Te.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: w(o.weekdaysMin, this.$W, v, 2),
      ddd: w(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Te.s(s, 2, "0"),
      h: C(1),
      hh: C(2),
      a: p(s, u, !0),
      A: p(s, u, !1),
      m: String(u),
      mm: Te.s(u, 2, "0"),
      s: String(this.$s),
      ss: Te.s(this.$s, 2, "0"),
      SSS: Te.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(th, function(M, $) {
      return $ || b[M] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = ie(a), u = (s.utcOffset() - this.utcOffset()) * yo, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[nr] = v / 12, i[Pn] = v, i[Uu] = v / 3, i[Dt] = (d - u) / nh, i[er] = (d - u) / eh, i[Ya] = d / pl, i[Fa] = d / yo, i[Ha] = d / Ka, i)[l] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Pn).$D;
  }, n.$locale = function() {
    return qr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), i = Gt(a, t, !0);
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
}(), Hu = so.prototype;
ie.prototype = Hu;
[["$ms", Vi], ["$s", Ha], ["$m", Fa], ["$H", Ya], ["$W", er], ["$M", Pn], ["$y", nr], ["$D", ja]].forEach(function(e) {
  Hu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ie.extend = function(e, n) {
  return e.$i || (e(n, so, ie), e.$i = !0), ie;
};
ie.locale = Gt;
ie.isDayjs = Mi;
ie.unix = function(e) {
  return ie(e * 1e3);
};
ie.en = qr[ot];
ie.Ls = qr;
ie.p = {};
const Fu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Yu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function mh(e) {
  return ["date", "month"].includes(e);
}
var At = [{
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
}], ph = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: mh
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
  n: hh
} = re("picker-header");
function gh(e, n) {
  var r = oe("var-icon"), a = oe("var-button");
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [Q(
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
        default: fe(() => [Q(r, {
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
      [Q(
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
    ), Q(
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
        default: fe(() => [Q(r, {
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
var ju = ne({
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
    } = n, a = B(!1), t = B(0), o = U(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (l = je.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return je.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: hh,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
ju.render = gh;
const Wu = ju;
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
ie.extend(Fu);
ie.extend(Yu);
var {
  n: Ot,
  classes: yh
} = re("month-picker"), {
  n: Vt
} = re("date-picker");
function bh(e, n) {
  var r = oe("panel-header"), a = oe("var-button");
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [Q(
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
      ), Q(
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
            }, [Q(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, Qo({}, e.buttonProps(t.index)), {
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
var Gu = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: Ke,
    PanelHeader: Wu
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
    } = n, [a, t] = e.current.split("-"), o = B(!1), i = B(0), l = B(null), s = Ie({
      left: !1,
      right: !1
    }), u = U(() => e.choose.chooseYear === e.preview.previewYear), d = U(() => e.preview.previewYear === a), v = (M) => {
      var $, T;
      return ($ = (T = je.value.datePickerMonthDict) == null ? void 0 : T[M].abbr) != null ? $ : "";
    }, f = (M) => {
      var {
        preview: {
          previewYear: $
        },
        componentProps: {
          min: T,
          max: E
        }
      } = e, P = !0, D = !0, g = $ + "-" + M;
      return E && (P = ie(g).isSameOrBefore(ie(E), "month")), T && (D = ie(g).isSameOrAfter(ie(T), "month")), P && D;
    }, m = (M) => {
      var {
        choose: {
          chooseMonths: $,
          chooseDays: T,
          chooseRangeMonth: E
        },
        componentProps: {
          type: P,
          range: D
        }
      } = e;
      if (D) {
        if (!E.length)
          return !1;
        var g = ie(M).isSameOrBefore(ie(E[1]), "month"), V = ie(M).isSameOrAfter(ie(E[0]), "month");
        return g && V;
      }
      return P === "month" ? $.includes(M) : T.some((I) => I.includes(M));
    }, w = (M) => {
      var {
        choose: {
          chooseMonth: $
        },
        preview: {
          previewYear: T
        },
        componentProps: {
          allowedDates: E,
          color: P,
          multiple: D,
          range: g
        }
      } = e, V = T + "-" + M, I = () => g || D ? m(V) : ($ == null ? void 0 : $.index) === M && u.value, y = () => f(M) ? E ? !E(V) : !1 : !0, S = y(), R = () => S ? !0 : g || D ? !m(V) : !u.value || ($ == null ? void 0 : $.index) !== M, J = () => d.value && t === M && e.componentProps.showCurrent ? (g || D || u.value) && S ? !0 : g || D ? !m(V) : u.value ? ($ == null ? void 0 : $.index) !== t : !0 : !1, _ = () => S ? "" : J() ? P ?? "" : I() ? "" : Vt() + "-color-cover", W = _().startsWith(Vt());
      return {
        outline: J(),
        text: R(),
        color: R() ? "" : P,
        textColor: W ? "" : _(),
        [Vt() + "-color-cover"]: W,
        class: yh(Ot("button"), [S, Ot("button--disabled")]),
        disabled: S
      };
    }, C = (M, $) => {
      var T = $.currentTarget;
      T.classList.contains(Ot("button--disabled")) || r("choose-month", M);
    }, p = (M) => {
      o.value = M === "prev", i.value += M === "prev" ? -1 : 1, r("check-preview", "year", M);
    }, b = (M) => {
      l.value.checkDate(M);
    };
    return le(() => e.preview.previewYear, (M) => {
      var {
        componentProps: {
          min: $,
          max: T
        }
      } = e;
      T && (s.right = !ie("" + (L(M) + 1)).isSameOrBefore(ie(T), "year")), $ && (s.left = !ie("" + (L(M) - 1)).isSameOrAfter(ie($), "year"));
    }, {
      immediate: !0
    }), {
      n: Ot,
      nDate: Vt,
      pack: je,
      MONTH_LIST: At,
      headerEl: l,
      reverse: o,
      panelKey: i,
      panelBtnDisabled: s,
      forwardRef: b,
      buttonProps: w,
      getMonthAbbr: v,
      chooseMonth: C,
      checkDate: p
    };
  }
});
Gu.render = bh;
const wh = Gu;
var {
  n: gl,
  classes: Ch
} = re("year-picker"), Sh = ["onClick"];
function kh(e, n) {
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
        Sh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var qu = ne({
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
      for (var w = u[0]; w >= u[1]; w--)
        o.push(w);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return sn(() => {
      var o = document.querySelector("." + gl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: gl,
      classes: Ch,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
qu.render = kh;
const $h = qu;
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
ie.extend(Fu);
ie.extend(Yu);
var {
  n: Ra,
  classes: Th
} = re("day-picker"), {
  n: Mt
} = re("date-picker");
function Ph(e, n) {
  var r = oe("panel-header"), a = oe("var-button");
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [Q(
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
      ), Q(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), O("div", {
            key: e.panelKey
          }, [A(
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
          ), A(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(h(!0), O(
              Oe,
              null,
              ze(e.days, (t, o) => (h(), O("li", {
                key: o
              }, [Q(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, _o({}, e.buttonProps(t)), {
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
var Xu = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: Ke,
    PanelHeader: Wu
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
    } = n, [a, t, o] = e.current.split("-"), i = B([]), l = B(!1), s = B(0), u = B(null), d = Ie({
      left: !1,
      right: !1
    }), v = U(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = U(() => {
      var g;
      return e.choose.chooseYear === e.preview.previewYear && ((g = e.choose.chooseMonth) == null ? void 0 : g.index) === e.preview.previewMonth.index;
    }), m = U(() => {
      var g = tt.findIndex((V) => V.index === e.componentProps.firstDayOfWeek);
      return g === -1 || g === 0 ? tt : tt.slice(g).concat(tt.slice(0, g));
    }), w = (g) => {
      var V, I;
      return (V = (I = je.value.datePickerWeekDict) == null ? void 0 : I[g].abbr) != null ? V : "";
    }, C = (g) => g > 0 ? g : "", p = () => {
      var {
        preview: {
          previewMonth: g,
          previewYear: V
        }
      } = e, I = ie(V + "-" + g.index).daysInMonth(), y = ie(V + "-" + g.index + "-01").day(), S = m.value.findIndex((R) => R.index === "" + y);
      i.value = [...Array(S).fill(-1), ...Array.from(Array(I + 1).keys())].filter((R) => R);
    }, b = () => {
      var {
        preview: {
          previewYear: g,
          previewMonth: V
        },
        componentProps: {
          max: I,
          min: y
        }
      } = e;
      if (I) {
        var S = g + "-" + (L(V.index) + 1);
        d.right = !ie(S).isSameOrBefore(ie(I), "month");
      }
      if (y) {
        var R = g + "-" + (L(V.index) - 1);
        d.left = !ie(R).isSameOrAfter(ie(y), "month");
      }
    }, M = (g) => {
      var {
        preview: {
          previewYear: V,
          previewMonth: I
        },
        componentProps: {
          min: y,
          max: S
        }
      } = e, R = !0, J = !0, _ = V + "-" + I.index + "-" + g;
      return S && (R = ie(_).isSameOrBefore(ie(S), "day")), y && (J = ie(_).isSameOrAfter(ie(y), "day")), R && J;
    }, $ = (g) => {
      var {
        choose: {
          chooseDays: V,
          chooseRangeDay: I
        },
        componentProps: {
          range: y
        }
      } = e;
      if (y) {
        if (!I.length)
          return !1;
        var S = ie(g).isSameOrBefore(ie(I[1]), "day"), R = ie(g).isSameOrAfter(ie(I[0]), "day");
        return S && R;
      }
      return V.includes(g);
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
          chooseDay: V
        },
        preview: {
          previewYear: I,
          previewMonth: y
        },
        componentProps: {
          allowedDates: S,
          color: R,
          multiple: J,
          range: _
        }
      } = e, W = I + "-" + y.index + "-" + g, N = () => _ || J ? $(W) : L(V) === g && f.value, x = () => M(g) ? S ? !S(W) : !1 : !0, te = x(), F = () => te ? !0 : _ || J ? !$(W) : !f.value || L(V) !== g, Z = () => v.value && L(o) === g && e.componentProps.showCurrent ? (_ || J || f.value) && te ? !0 : _ || J ? !$(W) : f.value ? V !== o : !0 : !1, K = () => te ? "" : Z() ? R ?? "" : N() ? "" : Mt() + "-color-cover", z = K().startsWith(Mt());
      return {
        text: F(),
        outline: Z(),
        textColor: z ? "" : K(),
        [Mt() + "-color-cover"]: z,
        class: Th(Ra("button"), Ra("button--usable"), [te, Ra("button--disabled")]),
        disabled: te
      };
    }, E = (g) => {
      l.value = g === "prev", s.value += g === "prev" ? -1 : 1, r("check-preview", "month", g);
    }, P = (g, V) => {
      var I = V.currentTarget;
      I.classList.contains(Ra("button--disabled")) || r("choose-day", g);
    }, D = (g) => {
      u.value.checkDate(g);
    };
    return sn(() => {
      p(), b();
    }), le(() => e.preview, () => {
      p(), b();
    }), {
      n: Ra,
      nDate: Mt,
      days: i,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: C,
      getDayAbbr: w,
      checkDate: E,
      chooseDay: P,
      buttonProps: T
    };
  }
});
Xu.render = Ph;
const Oh = Xu;
var {
  n: Vh,
  classes: Mh
} = re("date-picker");
function Bh(e, n) {
  var r = oe("year-picker-panel"), a = oe("month-picker-panel"), t = oe("day-picker-panel");
  return h(), O(
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
        [j(e.$slots, "year", {
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
        [Q(
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
              )]) : j(e.$slots, "date", ci(Ve({
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
      [Q(
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
var Ku = ne({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: wh,
    YearPickerPanel: $h,
    DayPickerPanel: Oh
  },
  props: ph,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = ie().format("YYYY-MM-D"), [i, l] = o.split("-"), s = At.find((se) => se.index === l), u = B(!1), d = B(!1), v = B(!0), f = B(), m = B(), w = B(), C = B(s), p = B(i), b = B(!1), M = B([]), $ = B([]), T = B([]), E = B([]), P = B(null), D = B(null), g = Ie({
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
    }), V = U(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: w.value,
      chooseMonths: M.value,
      chooseDays: $.value,
      chooseRangeMonth: T.value,
      chooseRangeDay: E.value
    })), I = U(() => ({
      previewMonth: C.value,
      previewYear: p.value
    })), y = U(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return T.value.length ? T.value[0] + " ~ " + T.value[1] : "";
      var he = "";
      if (f.value) {
        var Se, ke;
        he = (Se = (ke = je.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Se : "";
      }
      return se ? "" + M.value.length + je.value.datePickerSelected : he;
    }), S = U(() => {
      var se, ye, he, Se, {
        multiple: ke,
        range: He
      } = e;
      if (He) {
        var _e = E.value.map((po) => ie(po).format("YYYY-MM-DD"));
        return _e.length ? _e[0] + " ~ " + _e[1] : "";
      }
      if (ke)
        return "" + $.value.length + je.value.datePickerSelected;
      if (!m.value || !f.value || !w.value)
        return "";
      var pn = ie(m.value + "-" + f.value.index + "-" + w.value).day(), La = tt.find((po) => po.index === "" + pn), Hi = (se = (ye = je.value.datePickerWeekDict) == null ? void 0 : ye[La.index].name) != null ? se : "", wv = (he = (Se = je.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? he : "", Cv = Ma(w.value, 2, "0");
      return je.value.lang === "zh-CN" ? f.value.index + "-" + Cv + " " + Hi.slice(0, 3) : Hi.slice(0, 3) + ", " + wv.slice(0, 3) + " " + w.value;
    }), R = U(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), J = U(() => !e.touchable || ["", "year"].includes(R.value)), _ = U(() => {
      var se, ye, he, Se, ke = ie(m.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + w.value).day(), He = w.value ? Ma(w.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = m.value) != null ? ye : "",
        month: (he = (Se = f.value) == null ? void 0 : Se.index) != null ? he : "",
        date: He
      };
    }), W = U(() => V.value.chooseRangeDay.map((se) => ie(se).format("YYYY-MM-DD"))), N = U(() => m.value === p.value), x = U(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === C.value.index;
    }), te = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, F = (se) => {
      if (!J.value) {
        var {
          clientX: ye,
          clientY: he
        } = se.touches[0];
        n = ye, r = he;
      }
    }, Z = (se, ye) => se >= ye && se > 20 ? "x" : "y", K = (se) => {
      if (!J.value) {
        var {
          clientX: ye,
          clientY: he
        } = se.touches[0], Se = ye - n, ke = he - r;
        t = Z(Math.abs(Se), Math.abs(ke)), a = Se > 0 ? "prev" : "next";
      }
    }, z = () => {
      if (!(J.value || t !== "x")) {
        var se = R.value === "month" ? P : D;
        xt(() => {
          se.value.forwardRef(a), kt();
        });
      }
    }, Y = (se, ye) => {
      var he = ye === "month" ? T : E;
      if (he.value = v.value ? [se, se] : [he.value[0], se], v.value = !v.value, v.value) {
        var Se = ie(he.value[0]).isAfter(he.value[1]), ke = Se ? [he.value[1], he.value[0]] : [...he.value];
        k(e["onUpdate:modelValue"], ke), k(e.onChange, ke);
      }
    }, X = (se, ye) => {
      var he = ye === "month" ? M : $, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = he.value.map((_e) => ie(_e).format(Se)), He = ke.findIndex((_e) => _e === se);
      He === -1 ? ke.push(se) : ke.splice(He, 1), k(e["onUpdate:modelValue"], ke), k(e.onChange, ke);
    }, de = (se, ye) => !m.value || !f.value ? !1 : N.value ? se === "month" ? ye.index < f.value.index : x.value ? ye < L(w.value) : f.value.index > C.value.index : m.value > p.value, pe = (se) => {
      var {
        readonly: ye,
        range: he,
        multiple: Se,
        onChange: ke,
        "onUpdate:modelValue": He
      } = e;
      if (!(se < 0 || ye)) {
        b.value = de("day", se);
        var _e = p.value + "-" + C.value.index + "-" + se, pn = ie(_e).format("YYYY-MM-DD");
        he ? Y(pn, "day") : Se ? X(pn, "day") : (k(He, pn), k(ke, pn));
      }
    }, Ae = (se) => {
      var {
        type: ye,
        readonly: he,
        range: Se,
        multiple: ke,
        onChange: He,
        onPreview: _e,
        "onUpdate:modelValue": pn
      } = e;
      if (b.value = de("month", se), ye === "month" && !he) {
        var La = p.value + "-" + se.index;
        Se ? Y(La, "month") : ke ? X(La, "month") : (k(pn, La), k(He, La));
      } else
        C.value = se, k(_e, L(p.value), L(C.value.index));
      d.value = !1;
    }, Ee = (se) => {
      p.value = "" + se, u.value = !1, d.value = !0, k(e.onPreview, L(p.value), L(C.value.index));
    }, Ze = (se, ye) => {
      var he = ye === "prev" ? -1 : 1;
      if (se === "year")
        p.value = "" + (L(p.value) + he);
      else {
        var Se = L(C.value.index) + he;
        Se < 1 && (p.value = "" + (L(p.value) - 1), Se = 12), Se > 12 && (p.value = "" + (L(p.value) + 1), Se = 1), C.value = At.find((ke) => L(ke.index) === Se);
      }
      k(e.onPreview, L(p.value), L(C.value.index));
    }, Tn = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Ln = (se) => Ce(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, qe = (se, ye) => {
      var he = ye === "month" ? T : E, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((pn) => ie(pn).format(Se)).slice(0, 2), He = he.value.some((pn) => Ln(pn));
      if (!He) {
        he.value = ke;
        var _e = ie(he.value[0]).isAfter(he.value[1]);
        he.value.length === 2 && _e && (he.value = [he.value[1], he.value[0]]);
      }
    }, mn = (se, ye) => {
      var he = ye === "month" ? M : $, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((He) => ie(He).format(Se))));
      he.value = ke.filter((He) => He !== "Invalid Date");
    }, St = (se) => {
      var ye = ie(se).format("YYYY-MM-D");
      if (!Ln(ye)) {
        var [he, Se, ke] = ye.split("-"), He = At.find((_e) => _e.index === Se);
        f.value = He, m.value = he, w.value = ke, C.value = He, p.value = he;
      }
    }, kt = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!Tn() || Ln(se) || !se))
        if (e.range) {
          if (!Ce(se))
            return;
          v.value = se.length !== 1, qe(se, e.type);
        } else if (e.multiple) {
          if (!Ce(se))
            return;
          mn(se, e.type);
        } else
          St(se);
    }, {
      immediate: !0
    }), le(R, kt), {
      n: Vh,
      classes: Mh,
      monthPanelEl: P,
      dayPanelEl: D,
      reverse: b,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: w,
      previewYear: p,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: y,
      getDateTitle: S,
      getPanelType: R,
      getChoose: V,
      getPreview: I,
      componentProps: g,
      slotProps: _,
      formatRange: W,
      clickEl: te,
      handleTouchstart: F,
      handleTouchmove: K,
      handleTouchend: z,
      getChooseDay: pe,
      getChooseMonth: Ae,
      getChooseYear: Ee,
      checkPreview: Ze,
      formatElevation: vn
    };
  }
});
Ku.render = Bh;
const Xr = Ku;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var VS = Xr;
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
function Eh(e) {
  return ["left", "center", "right"].includes(e);
}
var Ih = xo({
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
    validator: Eh
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
}, Je(bt, [
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
var {
  n: Nh,
  classes: Dh
} = re("dialog");
function Ah(e, n) {
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
      default: fe(() => [A(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: ei({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
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
        ), A(
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
        ), A(
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
var Zu = ne({
  name: "VarDialog",
  components: {
    VarPopup: yn,
    VarButton: Ke
  },
  inheritAttrs: !1,
  props: Ih,
  setup(e) {
    var n = B(!1), r = B(!1), a = () => k(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (k(s), !!l) {
        if (u != null) {
          k(u, "close", a);
          return;
        }
        k(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (k(s), l != null) {
        k(l, "confirm", a);
        return;
      }
      k(e["onUpdate:show"], !1);
    }, i = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (k(s), l != null) {
        k(l, "cancel", a);
        return;
      }
      k(e["onUpdate:show"], !1);
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
      n: Nh,
      classes: Dh,
      pack: je,
      dt: _t,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: me
    };
  }
});
Zu.render = Ah;
const cr = Zu;
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
var ar, Xt = {};
function zh(e) {
  return e === void 0 && (e = {}), Re(e) ? qt({}, Xt, {
    message: e
  }) : qt({}, Xt, e);
}
function Zn(e) {
  return et() ? new Promise((n) => {
    Zn.close();
    var r = zh(e), a = Ie(r);
    a.teleport = "body", ar = a;
    var {
      unmountInstance: t
    } = nt(cr, a, {
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
        k(a.onClosed), t(), ar === a && (ar = null);
      },
      onRouteChange: () => {
        t(), ar === a && (ar = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
Zn.setDefaultOptions = function(e) {
  Xt = e;
};
Zn.resetDefaultOptions = function() {
  Xt = {};
};
Zn.close = function() {
  if (ar != null) {
    var e = ar;
    ar = null, Be().then(() => {
      e.show = !1;
    });
  }
};
cr.install = function(e) {
  e.component(cr.name, cr);
};
Zn.install = function(e) {
  e.component(cr.name, cr);
};
Zn.Component = cr;
var MS = cr, Lh = {
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
  n: Rh,
  classes: Uh
} = re("divider");
function Hh(e, n) {
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
var Ju = ne({
  name: "VarDivider",
  props: Lh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ie({
      withText: !1
    }), t = U(() => ko(e.inset) ? e.inset : !0), o = U(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (ko(l) || l === 0)
        return Wa({}, d);
      var v = L(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Wa({}, d, {
        height: "calc(80% - " + me(f) + ")"
      }) : Wa({}, d, {
        width: "calc(100% - " + me(f) + ")",
        left: v > 0 ? me(f) : me(0)
      });
    }), i = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return sn(() => {
      i();
    }), Qt(() => {
      i();
    }), Wa({
      n: Rh,
      classes: Uh
    }, Mv(a), {
      style: o,
      isInset: t
    });
  }
});
Ju.render = Hh;
const Kr = Ju;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var BS = Kr, Fh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function zt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Fh[n];
  });
}
var Fn = "top", $r = "bottom", Ba = "right", mr = "left", uo = "auto", vo = [Fn, $r, Ba, mr], fo = "start", mt = "end", Yh = "clippingParents", Qu = "viewport", rt = "popper", jh = "reference", yl = /* @__PURE__ */ vo.reduce(function(e, n) {
  return e.concat([n + "-" + fo, n + "-" + mt]);
}, []), _u = /* @__PURE__ */ [].concat(vo, [uo]).reduce(function(e, n) {
  return e.concat([n, n + "-" + fo, n + "-" + mt]);
}, []), Wh = "beforeRead", Gh = "read", qh = "afterRead", Xh = "beforeMain", Kh = "main", Zh = "afterMain", Jh = "beforeWrite", Qh = "write", _h = "afterWrite", ni = [Wh, Gh, qh, Xh, Kh, Zh, Jh, Qh, _h];
function Yn(e) {
  return e.split("-")[0];
}
var xh = {
  start: "end",
  end: "start"
};
function bl(e) {
  return e.replace(/start|end/g, function(n) {
    return xh[n];
  });
}
function $n(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ea(e) {
  var n = $n(e).Element;
  return e instanceof n || e instanceof Element;
}
function bn(e) {
  var n = $n(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Bi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = $n(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Vr(e) {
  return ((Ea(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var it = Math.max, wl = Math.min, Za = Math.round;
function ri() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function xu() {
  return !/^((?!chrome|android).)*safari/i.test(ri());
}
function Ja(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && bn(e) && (t = e.offsetWidth > 0 && Za(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Za(a.height) / e.offsetHeight || 1);
  var i = Ea(e) ? $n(e) : window, l = i.visualViewport, s = !xu() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
  var n = $n(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Ii(e) {
  return Ja(Vr(e)).left + Ei(e).scrollLeft;
}
function eg(e, n) {
  var r = $n(e), a = Vr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = xu();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + Ii(e),
    y: s
  };
}
function En(e) {
  return $n(e).getComputedStyle(e);
}
function ng(e) {
  var n, r = Vr(e), a = Ei(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = it(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = it(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Ii(e), s = -a.scrollTop;
  return En(t || r).direction === "rtl" && (l += it(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function zn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function co(e) {
  return zn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Bi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Vr(e)
  );
}
function Ni(e) {
  var n = En(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function ed(e) {
  return ["html", "body", "#document"].indexOf(zn(e)) >= 0 ? e.ownerDocument.body : bn(e) && Ni(e) ? e : ed(co(e));
}
function lt(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = ed(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = $n(a), i = t ? [o].concat(o.visualViewport || [], Ni(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(lt(co(i)))
  );
}
function rg(e) {
  return ["table", "td", "th"].indexOf(zn(e)) >= 0;
}
function Cl(e) {
  return !bn(e) || // https://github.com/popperjs/popper-core/issues/837
  En(e).position === "fixed" ? null : e.offsetParent;
}
function ag(e) {
  var n = /firefox/i.test(ri()), r = /Trident/i.test(ri());
  if (r && bn(e)) {
    var a = En(e);
    if (a.position === "fixed")
      return null;
  }
  var t = co(e);
  for (Bi(t) && (t = t.host); bn(t) && ["html", "body"].indexOf(zn(t)) < 0; ) {
    var o = En(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Di(e) {
  for (var n = $n(e), r = Cl(e); r && rg(r) && En(r).position === "static"; )
    r = Cl(r);
  return r && (zn(r) === "html" || zn(r) === "body" && En(r).position === "static") ? n : r || ag(e) || n;
}
function tg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Bi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function ai(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function og(e, n) {
  var r = Ja(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Sl(e, n, r) {
  return n === Qu ? ai(eg(e, r)) : Ea(n) ? og(n, r) : ai(ng(Vr(e)));
}
function ig(e) {
  var n = lt(co(e)), r = ["absolute", "fixed"].indexOf(En(e).position) >= 0, a = r && bn(e) ? Di(e) : e;
  return Ea(a) ? n.filter(function(t) {
    return Ea(t) && tg(t, a) && zn(t) !== "body";
  }) : [];
}
function lg(e, n, r, a) {
  var t = n === "clippingParents" ? ig(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = Sl(e, u, a);
    return s.top = it(d.top, s.top), s.right = wl(d.right, s.right), s.bottom = wl(d.bottom, s.bottom), s.left = it(d.left, s.left), s;
  }, Sl(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function pt(e) {
  return e.split("-")[1];
}
function sg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function nd(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Yn(a) : null, o = a ? pt(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Fn:
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case $r:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Ba:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case mr:
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
      case fo:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case mt:
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
function rd(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? Yh : l, u = r.rootBoundary, d = u === void 0 ? Qu : u, v = r.elementContext, f = v === void 0 ? rt : v, m = r.altBoundary, w = m === void 0 ? !1 : m, C = r.padding, p = C === void 0 ? 0 : C, b = dg(typeof p != "number" ? p : vg(p, vo)), M = f === rt ? jh : rt, $ = e.rects.popper, T = e.elements[w ? M : f], E = lg(Ea(T) ? T : T.contextElement || Vr(e.elements.popper), s, d, i), P = Ja(e.elements.reference), D = nd({
    reference: P,
    element: $,
    strategy: "absolute",
    placement: t
  }), g = ai(Object.assign({}, $, D)), V = f === rt ? g : P, I = {
    top: E.top - V.top + b.top,
    bottom: V.bottom - E.bottom + b.bottom,
    left: E.left - V.left + b.left,
    right: V.right - E.right + b.right
  }, y = e.modifiersData.offset;
  if (f === rt && y) {
    var S = y[t];
    Object.keys(I).forEach(function(R) {
      var J = [Ba, $r].indexOf(R) >= 0 ? 1 : -1, _ = [Fn, $r].indexOf(R) >= 0 ? "y" : "x";
      I[R] += S[_] * J;
    });
  }
  return I;
}
function fg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? _u : s, d = pt(a), v = d ? l ? yl : yl.filter(function(w) {
    return pt(w) === d;
  }) : vo, f = v.filter(function(w) {
    return u.indexOf(w) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(w, C) {
    return w[C] = rd(e, {
      placement: C,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[Yn(C)], w;
  }, {});
  return Object.keys(m).sort(function(w, C) {
    return m[w] - m[C];
  });
}
function cg(e) {
  if (Yn(e) === uo)
    return [];
  var n = zt(e);
  return [bl(e), n, bl(n)];
}
function mg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, w = m === void 0 ? !0 : m, C = r.allowedAutoPlacements, p = n.options.placement, b = Yn(p), M = b === p, $ = s || (M || !w ? [zt(p)] : cg(p)), T = [p].concat($).reduce(function(Y, X) {
      return Y.concat(Yn(X) === uo ? fg(n, {
        placement: X,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: w,
        allowedAutoPlacements: C
      }) : X);
    }, []), E = n.rects.reference, P = n.rects.popper, D = /* @__PURE__ */ new Map(), g = !0, V = T[0], I = 0; I < T.length; I++) {
      var y = T[I], S = Yn(y), R = pt(y) === fo, J = [Fn, $r].indexOf(S) >= 0, _ = J ? "width" : "height", W = rd(n, {
        placement: y,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), N = J ? R ? Ba : mr : R ? $r : Fn;
      E[_] > P[_] && (N = zt(N));
      var x = zt(N), te = [];
      if (o && te.push(W[S] <= 0), l && te.push(W[N] <= 0, W[x] <= 0), te.every(function(Y) {
        return Y;
      })) {
        V = y, g = !1;
        break;
      }
      D.set(y, te);
    }
    if (g)
      for (var F = w ? 3 : 1, Z = function(X) {
        var de = T.find(function(pe) {
          var Ae = D.get(pe);
          if (Ae)
            return Ae.slice(0, X).every(function(Ee) {
              return Ee;
            });
        });
        if (de)
          return V = de, "break";
      }, K = F; K > 0; K--) {
        var z = Z(K);
        if (z === "break")
          break;
      }
    n.placement !== V && (n.modifiersData[a]._skip = !0, n.placement = V, n.reset = !0);
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
  var a = Yn(e), t = [mr, Fn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [mr, Ba].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function gg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = _u.reduce(function(d, v) {
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
  return e === $n(e) || !bn(e) ? Ei(e) : bg(e);
}
function Cg(e) {
  var n = e.getBoundingClientRect(), r = Za(n.width) / e.offsetWidth || 1, a = Za(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Sg(e, n, r) {
  r === void 0 && (r = !1);
  var a = bn(n), t = bn(n) && Cg(n), o = Vr(n), i = Ja(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((zn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ni(o)) && (l = wg(n)), bn(n) ? (s = Ja(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Ii(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function kg(e) {
  var n = Ja(e), r = e.offsetWidth, a = e.offsetHeight;
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
  return ni.reduce(function(r, a) {
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
function _n(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Mr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Og = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', kl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Vg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), kl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(_n(Mr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(_n(Mr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          ni.indexOf(n.phase) < 0 && console.error(_n(Mr, n.name, '"phase"', "either " + ni.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(_n(Mr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(_n(Mr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(_n(Mr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(_n(Mr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + kl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(_n(Og, String(n.name), a, a));
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
var $l = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Eg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Tl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Pl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Ig(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Tl : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Tl, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(b) {
        var M = typeof b == "function" ? b(d.options) : b;
        C(), d.options = Object.assign({}, o, d.options, M), d.scrollParents = {
          reference: Ea(l) ? lt(l) : l.contextElement ? lt(l.contextElement) : [],
          popper: lt(s)
        };
        var $ = Tg(Bg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = $.filter(function(y) {
          return y.enabled;
        }), process.env.NODE_ENV !== "production") {
          var T = Mg([].concat($, d.options.modifiers), function(y) {
            var S = y.name;
            return S;
          });
          if (Vg(T), Yn(d.options.placement) === uo) {
            var E = d.orderedModifiers.find(function(y) {
              var S = y.name;
              return S === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var P = En(s), D = P.marginTop, g = P.marginRight, V = P.marginBottom, I = P.marginLeft;
          [D, g, V, I].some(function(y) {
            return parseFloat(y);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return w(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var b = d.elements, M = b.reference, $ = b.popper;
          if (!Pl(M, $)) {
            process.env.NODE_ENV !== "production" && console.error($l);
            return;
          }
          d.rects = {
            reference: Sg(M, Di($), d.options.strategy === "fixed"),
            popper: kg($)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(y) {
            return d.modifiersData[y.name] = Object.assign({}, y.data);
          });
          for (var T = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (T += 1, T > 100)) {
              console.error(Eg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var P = d.orderedModifiers[E], D = P.fn, g = P.options, V = g === void 0 ? {} : g, I = P.name;
            typeof D == "function" && (d = D({
              state: d,
              options: V,
              name: I,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Pg(function() {
        return new Promise(function(p) {
          m.forceUpdate(), p(d);
        });
      }),
      destroy: function() {
        C(), f = !0;
      }
    };
    if (!Pl(l, s))
      return process.env.NODE_ENV !== "production" && console.error($l), m;
    m.setOptions(u).then(function(p) {
      !f && u.onFirstUpdate && u.onFirstUpdate(p);
    });
    function w() {
      d.orderedModifiers.forEach(function(p) {
        var b = p.name, M = p.options, $ = M === void 0 ? {} : M, T = p.effect;
        if (typeof T == "function") {
          var E = T({
            state: d,
            name: b,
            instance: m,
            options: $
          }), P = function() {
          };
          v.push(E || P);
        }
      });
    }
    function C() {
      v.forEach(function(p) {
        return p();
      }), v = [];
    }
    return m;
  };
}
var Bt = {
  passive: !0
};
function Ng(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = $n(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Bt);
  }), l && s.addEventListener("resize", r.update, Bt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Bt);
    }), l && s.removeEventListener("resize", r.update, Bt);
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
  n.modifiersData[r] = nd({
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
    x: Za(n * t) / t || 0,
    y: Za(r * t) / t || 0
  };
}
function Ol(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, w = i.y, C = w === void 0 ? 0 : w, p = typeof d == "function" ? d({
    x: m,
    y: C
  }) : {
    x: m,
    y: C
  };
  m = p.x, C = p.y;
  var b = i.hasOwnProperty("x"), M = i.hasOwnProperty("y"), $ = mr, T = Fn, E = window;
  if (u) {
    var P = Di(r), D = "clientHeight", g = "clientWidth";
    if (P === $n(r) && (P = Vr(r), En(P).position !== "static" && l === "absolute" && (D = "scrollHeight", g = "scrollWidth")), P = P, t === Fn || (t === mr || t === Ba) && o === mt) {
      T = $r;
      var V = v && P === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[D]
      );
      C -= V - a.height, C *= s ? 1 : -1;
    }
    if (t === mr || (t === Fn || t === $r) && o === mt) {
      $ = Ba;
      var I = v && P === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[g]
      );
      m -= I - a.width, m *= s ? 1 : -1;
    }
  }
  var y = Object.assign({
    position: l
  }, u && Lg), S = d === !0 ? Rg({
    x: m,
    y: C
  }) : {
    x: m,
    y: C
  };
  if (m = S.x, C = S.y, s) {
    var R;
    return Object.assign({}, y, (R = {}, R[T] = M ? "0" : "", R[$] = b ? "0" : "", R.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + C + "px)" : "translate3d(" + m + "px, " + C + "px, 0)", R));
  }
  return Object.assign({}, y, (n = {}, n[T] = M ? C + "px" : "", n[$] = b ? m + "px" : "", n.transform = "", n));
}
function Ug(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, i = o === void 0 ? !0 : o, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = En(n.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
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
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Ol(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Ol(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Hg = {
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
    !bn(o) || !zn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
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
      !bn(t) || !zn(t) || (Object.assign(t.style, l), Object.keys(o).forEach(function(s) {
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
  effect: Yg,
  requires: ["computeStyles"]
};
var Wg = [Dg, zg, Hg, jg], Gg = /* @__PURE__ */ Ig({
  defaultModifiers: Wg
});
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
function Vl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ml(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Vl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Vl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function ad(e) {
  var n = B(null), r = B(null), a = B({
    width: 0,
    height: 0
  }), t = ws(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(P, D) {
      D ? ($(), k(e.onOpen)) : k(e.onClose);
    }
  }), {
    zIndex: o
  } = wt(() => t.value, 1), i = null, l = !1, s = !1, u = () => {
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
    var P = Ml(function* () {
      e.trigger === "hover" && (s = !1, yield Nn(), !l && E());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (l = !0);
  }, m = /* @__PURE__ */ function() {
    var P = Ml(function* () {
      e.trigger === "hover" && (l = !1, yield Nn(), !s && E());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), w = () => {
    T();
  }, C = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  }, p = () => {
    e.trigger === "click" && C();
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
  }, M = () => {
    var {
      placement: P,
      skidding: D,
      distance: g
    } = b(), V = [Kt({}, pg, {
      enabled: t.value
    }), Kt({}, yg, {
      options: {
        offset: [D, g]
      }
    })];
    return {
      placement: P,
      modifiers: V
    };
  }, $ = () => {
    i.setOptions(M());
  }, T = () => {
    var {
      disabled: P
    } = e;
    P || (t.value = !0, k(e["onUpdate:show"], !0));
  }, E = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  };
  return bs(n, "click", p), le(() => e.offsetX, $), le(() => e.offsetY, $), le(() => e.placement, $), le(() => e.disabled, E), Zt(() => {
    var P, D = e.reference ? (P = n.value) == null ? void 0 : P.querySelector(e.reference) : n.value;
    i = Gg(D ?? n.value, r.value, M());
  }), _a(() => {
    i.destroy();
  }), {
    show: t,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: a,
    handleHostClick: w,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: C,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: $,
    open: T,
    close: E
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
  onOpen: H(),
  onOpened: H(),
  onClose: H(),
  onClosed: H(),
  "onUpdate:show": H()
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
      Da,
      {
        to: e.teleport
      },
      [Q(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: fe(() => [we(A(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: G({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = Bn(() => {
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
          ), [[br, e.show]])]),
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
var td = ne({
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
      resize: w
    } = ad(e);
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
      resize: w,
      open: f,
      close: m
    };
  }
});
td.render = _g;
const pr = td;
pr.install = function(e) {
  e.component(pr.name, pr);
};
var ES = pr;
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
  n: ny,
  classes: ry
} = re("ellipsis"), ay = {
  key: 0
};
function ty(e, n) {
  var r = oe("var-tooltip");
  return h(), ge(
    r,
    ci(ls(e.tooltip)),
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
      default: fe(() => [A(
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
var od = ne({
  name: "VarEllipsis",
  components: {
    VarTooltip: pr
  },
  props: ey,
  setup(e) {
    var n = B(!1), r = U(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = U(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : ti({
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
od.render = ty;
const Zr = od;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var IS = Zr;
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
    validator: _s
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
  onClick: H(),
  onOpen: H(),
  onOpened: H(),
  onClose: H(),
  onClosed: H(),
  "onUpdate:active": H()
};
function Bl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  classes: El,
  n: rn
} = re("fab");
const Jr = ne({
  name: "VarFab",
  inheritAttrs: !1,
  props: sy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = ws(e, "active", {
      emit: (f, m) => k(e["onUpdate:active"], m)
    }), o = B(null), {
      disabled: i
    } = eo(), l = (f, m, w) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (w === 0) {
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
    }) : null : we(Q(Ke, {
      "var-fab-cover": !0,
      class: rn("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [Q($e, {
        "var-fab-cover": !0,
        class: El([t.value, rn("trigger-active-icon"), rn("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: rn("--trigger-icon-animation")
      }, null)]
    }), [[br, e.show]]), v = () => {
      var f, m, w = Cs((m = r.default == null ? void 0 : r.default()) != null ? m : []);
      return Q("div", Ve({
        class: El(rn(), rn("--position-" + e.position), rn("--direction-" + e.direction), [e.fixed, rn("--fixed"), rn("--absolute")], [e.safeArea, rn("--safe-area")]),
        style: {
          zIndex: L(e.zIndex),
          top: me(e.top),
          bottom: me(e.bottom),
          left: me(e.left),
          right: me(e.right)
        },
        ref: o,
        onClick: (C) => l(C, !t.value, w.length),
        onMouseleave: () => s(!1, w.length),
        onMouseenter: () => s(!0, w.length)
      }, a), [Q(De, {
        name: rn("--active-transition")
      }, Bl(f = d()) ? f : {
        default: () => [f]
      }), Q(De, {
        name: rn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [we(Q("div", {
          class: rn("actions"),
          onClick: (C) => C.stopPropagation()
        }, [w.map((C) => Q("div", {
          class: rn("action")
        }, [C]))]), [[br, e.show && t.value && w.length]])]
      })]);
    };
    return le(() => e.trigger, () => {
      t.value = !1;
    }), le(() => e.disabled, () => {
      t.value = !1;
    }), bs(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Q(Da, {
          to: f,
          disabled: i.value
        }, Bl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var NS = Jr;
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
function Il(e, n, r, a, t, o, i) {
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
        Il(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Il(o, a, t, i, l, "throw", s);
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
var id = ne({
  name: "VarForm",
  props: dy,
  setup(e) {
    var n = U(() => e.disabled), r = U(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Cm(), o = (d) => {
      setTimeout(() => {
        var v = wr(d), f = v === window ? 0 : Zi(v), m = Zi(d) - f - Le(e.scrollToErrorOffsetY);
        vt(v, {
          top: m,
          animation: $o
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = vy(function* () {
        var v = yield Promise.all(a.map((p) => {
          var {
            validate: b
          } = p;
          return b();
        }));
        if (e.scrollToError) {
          var [, f] = Dv(v, (p) => p === !1, e.scrollToError), m = f > -1;
          if (m) {
            var w, C = (w = a[f].instance.proxy) == null ? void 0 : w.$el;
            o(C);
          }
          return !m;
        }
        return v.every((p) => p === !0);
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
id.render = cy;
const jn = id;
jn.install = function(e) {
  e.component(jn.name, jn);
};
jn.useValidation = Sn;
jn.useForm = kn;
var DS = jn;
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
  onClick: H(),
  onLoad: H(),
  onError: H()
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
var ld = ne({
  name: "VarImage",
  directives: {
    Lazy: ft,
    Ripple: Ue
  },
  props: py,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: i,
        onLoad: l,
        onError: s
      } = e;
      i ? (o._lazy.state === "success" && k(l, t), o._lazy.state === "error" && k(s, t)) : k(l, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: i
      } = e;
      !o && k(i, t);
    }, a = (t) => {
      k(e.onClick, t);
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
ld.render = wy;
const Qr = ld;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var AS = Qr, sd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Cy() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = dn(sd);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var ud = {
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
function Nl(e, n, r, a, t, o, i) {
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
        Nl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Nl(o, a, t, i, l, "throw", s);
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
var dd = ne({
  name: "VarSwipe",
  props: ud,
  setup(e) {
    var n = B(null), r = B(0), a = U(() => e.vertical), t = B(0), o = B(0), i = B(!1), l = B(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Cy(), v = !1, f = -1, m, w, C, p, b, M = (F) => s.find((Z) => {
      var {
        index: K
      } = Z;
      return K.value === F;
    }), $ = () => {
      e.loop && (o.value >= 0 && M(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && M(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (M(d.value - 1).setTranslate(0), M(0).setTranslate(0)));
    }, T = (F) => {
      var Z = nn(F) ? F : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: K
      } = e;
      return Z <= -1 ? K ? -1 : 0 : Z >= d.value ? K ? d.value : d.value - 1 : Z;
    }, E = (F) => {
      var {
        loop: Z
      } = e;
      return F === -1 ? Z ? d.value - 1 : 0 : F === d.value ? Z ? 0 : d.value - 1 : F;
    }, P = (F) => {
      var {
        loop: Z
      } = e;
      return F < 0 ? Z ? d.value - 1 : 0 : F > d.value - 1 ? Z ? 0 : d.value - 1 : F;
    }, D = (F) => {
      var Z = o.value >= r.value, K = o.value <= -t.value, z = 0, Y = -(t.value - r.value);
      i.value = !0, (Z || K) && (i.value = !0, o.value = K ? z : Y, M(0).setTranslate(0), M(d.value - 1).setTranslate(0)), xt(() => {
        i.value = !1, k(F);
      });
    }, g = () => {
      l.value = P(L(e.initialIndex));
    }, V = () => {
      var {
        autoplay: F
      } = e;
      !F || d.value <= 1 || (I(), f = window.setTimeout(() => {
        W(), V();
      }, L(F)));
    }, I = () => {
      f && clearTimeout(f);
    }, y = (F, Z) => {
      if (F > Z && F > 10)
        return "horizontal";
      if (Z > F && Z > 10)
        return "vertical";
    }, S = (F) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: K
        } = F.touches[0];
        m = Z, w = K, C = performance.now(), v = !0, I(), D(() => {
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
          clientX: z,
          clientY: Y
        } = F.touches[0], X = Math.abs(z - m), de = Math.abs(Y - w), pe = y(X, de), Ae = K ? "vertical" : "horizontal";
        if (pe === Ae) {
          F.preventDefault();
          var Ee = p !== void 0 ? z - p : 0, Ze = b !== void 0 ? Y - b : 0;
          p = z, b = Y, o.value += K ? Ze : Ee, $();
        }
      }
    }, J = () => {
      if (v) {
        var {
          vertical: F,
          onChange: Z
        } = e, K = F ? b < w : p < m, z = Math.abs(F ? w - b : m - p), Y = performance.now() - C <= ky && z >= $y, X = Y ? T(K ? l.value + 1 : l.value - 1) : T();
        v = !1, i.value = !1, p = void 0, b = void 0, o.value = X * -r.value;
        var de = l.value;
        l.value = E(X), V(), de !== l.value && k(Z, l.value);
      }
    }, _ = () => {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = l.value * -r.value, s.forEach((F) => {
        F.setTranslate(0);
      }), V(), setTimeout(() => {
        i.value = !1;
      }));
    }, W = (F) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: K
        } = e, z = l.value;
        l.value = P(z + 1), (F == null ? void 0 : F.event) !== !1 && k(K, l.value), D(() => {
          if (z === d.value - 1 && Z) {
            M(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          z !== d.value - 1 && (o.value = l.value * -r.value);
        });
      }
    }, N = (F) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: K
        } = e, z = l.value;
        l.value = P(z - 1), (F == null ? void 0 : F.event) !== !1 && k(K, l.value), D(() => {
          if (z === 0 && Z) {
            M(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          z !== 0 && (o.value = l.value * -r.value);
        });
      }
    }, x = (F, Z) => {
      if (!(d.value <= 1 || F === l.value)) {
        F = F < 0 ? 0 : F, F = F >= d.value ? d.value : F;
        var K = F > l.value ? W : N, z = Math.abs(F - l.value);
        Array.from({
          length: z
        }).forEach((Y, X) => {
          K({
            event: X === z - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, te = {
      size: r,
      vertical: a
    };
    return u(te), le(() => d.value, /* @__PURE__ */ Sy(function* () {
      yield Nn(), g(), _();
    })), Tr(_), Pr(I), _a(I), Cr(window, "resize", _), {
      n: Ty,
      classes: Py,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: i,
      handleTouchstart: S,
      handleTouchmove: R,
      handleTouchend: J,
      next: W,
      prev: N,
      to: x,
      resize: _,
      toNumber: L
    };
  }
});
dd.render = Vy;
const Wn = dd;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var zS = Wn;
function My() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = un(sd);
  return e || Cn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
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
var vd = ne({
  name: "VarSwipeItem",
  setup() {
    var e = B(0), {
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
vd.render = Ey;
const Gn = vd;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var LS = Gn;
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
var Iy = oi({
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
}, Je(ud, ["loop", "indicator", "onChange"]), Je(bt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Dl,
  classes: Ny
} = re("image-preview"), Al = 12, zl = 200, Dy = 350, Ll = 200, Ay = ["src", "alt"];
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
      default: fe(() => [Q(
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
                default: fe(() => [A(
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
      )) : ee("v-if", !0)]), A(
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
var fd = ne({
  name: "VarImagePreview",
  components: {
    VarSwipe: Wn,
    VarSwipeItem: Gn,
    VarPopup: yn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Iy,
  setup(e) {
    var n = B(!1), r = U(() => {
      var {
        images: I,
        current: y
      } = e, S = I.findIndex((R) => R === y);
      return S >= 0 ? S : 0;
    }), a = B(1), t = B(0), o = B(0), i = B(void 0), l = B(void 0), s = B(!0), u = null, d = null, v = null, f = (I, y) => {
      var {
        clientX: S,
        clientY: R
      } = I, {
        clientX: J,
        clientY: _
      } = y;
      return Math.abs(Math.sqrt(Math.pow(J - S, 2) + Math.pow(_ - R, 2)));
    }, m = (I, y) => ({
      clientX: I.clientX,
      clientY: I.clientY,
      timestamp: Date.now(),
      target: y
    }), w = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        i.value = "linear", l.value = "0s";
      }, Ll);
    }, C = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, p = (I) => d ? f(d, I) <= Al && I.timestamp - d.timestamp <= zl && d.target === I.target : !1, b = (I) => !I || !u || !d ? !1 : f(u, d) <= Al && Date.now() - d.timestamp < Dy && (I === u.target || I.parentNode === u.target), M = (I) => {
      v = window.setTimeout(() => {
        b(I.target) && V(), u = null;
      }, zl);
    }, $ = (I) => {
      v && window.clearTimeout(v);
      var {
        touches: y
      } = I, S = m(y[0], I.currentTarget);
      if (u = S, p(S)) {
        a.value > 1 ? C() : w();
        return;
      }
      d = S;
    }, T = (I) => {
      var {
        offsetWidth: y,
        offsetHeight: S
      } = I, {
        naturalWidth: R,
        naturalHeight: J
      } = I.querySelector("." + Dl("image"));
      return {
        width: y,
        height: S,
        imageRadio: J / R,
        rootRadio: S / y,
        zoom: L(e.zoom)
      };
    }, E = (I) => {
      var {
        zoom: y,
        imageRadio: S,
        rootRadio: R,
        width: J,
        height: _
      } = T(I);
      if (!S)
        return 0;
      var W = S > R ? _ / S : J;
      return Math.max(0, (y * W - J) / 2) / y;
    }, P = (I) => {
      var {
        zoom: y,
        imageRadio: S,
        rootRadio: R,
        width: J,
        height: _
      } = T(I);
      if (!S)
        return 0;
      var W = S > R ? _ : J * S;
      return Math.max(0, (y * W - _) / 2) / y;
    }, D = (I, y, S) => I + y >= S ? S : I + y <= -S ? -S : I + y, g = (I) => {
      if (d) {
        var y = I.currentTarget, {
          touches: S
        } = I, R = m(S[0], y);
        if (a.value > 1) {
          var J = R.clientX - d.clientX, _ = R.clientY - d.clientY, W = E(y), N = P(y);
          t.value = D(t.value, J, W), o.value = D(o.value, _, N);
        }
        d = R;
      }
    }, V = () => {
      if (a.value > 1) {
        C(), setTimeout(() => k(e["onUpdate:show"], !1), Ll);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: Dl,
      classes: Ny,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: i,
      transitionDuration: l,
      handleTouchstart: $,
      handleTouchmove: g,
      handleTouchend: M,
      close: V
    };
  }
});
fd.render = zy;
const hr = fd;
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
var tr, ut = {};
function Ly(e) {
  return e === void 0 && (e = {}), Re(e) ? st({}, ut, {
    images: [e]
  }) : Ce(e) ? st({}, ut, {
    images: e
  }) : st({}, ut, e);
}
function In(e) {
  if (et()) {
    In.close();
    var n = Ly(e), r = Ie(n);
    r.teleport = "body", tr = r;
    var {
      unmountInstance: a
    } = nt(hr, r, {
      onClose: () => k(r.onClose),
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
  }
}
In.close = () => {
  if (tr != null) {
    var e = tr;
    tr = null, Be().then(() => {
      e.show = !1;
    });
  }
};
In.setDefaultOptions = (e) => {
  ut = e;
};
In.resetDefaultOptions = () => {
  ut = {};
};
hr.install = function(e) {
  e.component(hr.name, hr);
};
In.install = function(e) {
  e.component(hr.name, hr);
};
In.Component = hr;
var RS = hr, Lt = {
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
function Rl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ul(e) {
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
  n: Ry,
  classes: Uy
} = re("sticky");
function Hy(e, n) {
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
      [j(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var cd = ne({
  name: "VarSticky",
  props: Lt,
  setup(e) {
    var n = B(null), r = B(null), a = B(!1), t = B("0px"), o = B("0px"), i = B("auto"), l = B("auto"), s = B("auto"), u = B("auto"), d = U(() => !e.disabled && e.cssMode), v = U(() => !e.disabled && !e.cssMode && a.value), f = U(() => Le(e.offsetTop)), m, w = () => {
      var {
        cssMode: $,
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
        var D = r.value, g = n.value, {
          top: V,
          left: I
        } = g.getBoundingClientRect(), y = V - E;
        return y <= f.value ? ($ || (i.value = g.offsetWidth + "px", l.value = g.offsetHeight + "px", t.value = E + f.value + "px", o.value = I + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: y,
          isFixed: !1
        });
      }
    }, C = () => {
      if (m) {
        var $ = w();
        $ && k(e.onScroll, $.offsetTop, $.isFixed);
      }
    }, p = /* @__PURE__ */ function() {
      var $ = Ul(function* () {
        a.value = !1, yield Wv(), w();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), b = /* @__PURE__ */ function() {
      var $ = Ul(function* () {
        yield Nn(), m = wr(n.value), m !== window && m.addEventListener("scroll", C), C();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), M = () => {
      m !== window && m.removeEventListener("scroll", C);
    };
    return le(() => e.disabled, p), sn(b), _a(M), Pr(M), Cr(window, "scroll", C), Cr(window, "resize", p), {
      n: Ry,
      classes: Uy,
      resize: p,
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
cd.render = Hy;
const qn = cd;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var US = qn, md = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Fy() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = dn(md);
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
  } = un(md);
  return r || Cn("IndexAnchor", 'You should use this component in "IndexBar"'), {
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
    xa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: fe(() => [A(
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
var pd = ne({
  name: "VarIndexAnchor",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: jy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Yy(), t = B(0), o = B(!1), i = U(() => e.index), l = B(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      l.value && (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, w = (p) => {
      o.value = p;
    }, C = {
      index: n,
      name: i,
      ownTop: t,
      setOwnTop: m,
      setDisabled: w
    };
    return a(C), {
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
pd.render = qy;
const _r = pd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var HS = _r, Xy = {
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
function Hl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Et(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Hl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Hl(o, a, t, i, l, "throw", s);
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
    [j(e.$slots, "default"), A(
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
var hd = ne({
  name: "VarIndexBar",
  props: Xy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Fy(), t = B(""), o = B(null), i = B([]), l = B(), s = U(() => e.sticky), u = U(() => e.stickyCssMode || e.cssMode), d = U(() => Le(e.stickyOffsetTop)), v = U(() => e.zIndex), f = null, m = !1, w = {
      active: l,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(w);
    var C = (D, g) => {
      var V = mi(D) ? D.name.value : D;
      V === l.value || V === void 0 || (l.value = V, (g == null ? void 0 : g.event) !== !1 && k(e.onChange, V));
    }, p = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: D
      } = f.getBoundingClientRect(), {
        scrollTop: g
      } = f, {
        top: V
      } = o.value.getBoundingClientRect();
      return g - D + V;
    }, b = () => {
      var D = dt(f), g = f === window ? document.body.scrollHeight : f.scrollHeight, V = p();
      r.forEach((I, y) => {
        var S = I.ownTop.value, R = D - S + d.value - V, J = y === r.length - 1 ? g : r[y + 1].ownTop.value - I.ownTop.value;
        I.setDisabled(!0), R >= 0 && R < J && t.value === "" && (I.setDisabled(!1), C(I));
      });
    }, M = /* @__PURE__ */ function() {
      var D = Et(function* (g) {
        var {
          anchorName: V,
          manualCall: I = !1,
          options: y
        } = g;
        if (I && k(e.onClick, V), !(V === l.value && !m)) {
          var S = r.find((W) => {
            var {
              name: N
            } = W;
            return V === N.value;
          });
          if (S) {
            var R = p(), J = S.ownTop.value - d.value + R, _ = gi(f);
            t.value = V, C(V, y), yield vt(f, {
              left: _,
              top: J,
              animation: ds,
              duration: L(e.duration)
            }), xt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(V) {
        return D.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var D = Et(function* () {
        yield Nn(), f = wr(o.value);
      });
      return function() {
        return D.apply(this, arguments);
      };
    }(), T = () => {
      f.addEventListener("scroll", b);
    }, E = () => {
      f.removeEventListener("scroll", b);
    }, P = (D, g) => {
      gn(() => M({
        anchorName: D,
        options: g
      }));
    };
    return le(() => n.value, /* @__PURE__ */ Et(function* () {
      yield Nn(), r.forEach((D) => {
        var {
          name: g,
          setOwnTop: V
        } = D;
        g.value && i.value.push(g.value), V();
      });
    })), sn(/* @__PURE__ */ Et(function* () {
      yield $(), T();
    })), Jt(E), Pr(() => {
      m = !0, E();
    }), Tr(() => {
      !m || l.value === void 0 || (M({
        anchorName: l.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: Ky,
      classes: Zy,
      barEl: o,
      active: l,
      zIndex: v,
      anchorNameList: i,
      toNumber: L,
      scrollTo: P,
      anchorClick: M
    };
  }
});
hd.render = Qy;
const xr = hd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var FS = xr;
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
  onFocus: H(),
  onBlur: H(),
  onClick: H(),
  onClear: H(),
  onInput: H(),
  onChange: H(),
  "onUpdate:modelValue": H()
}, {
  n: bo,
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
    [A(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: G({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [j(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
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
        )), A(
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
      ), A(
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
      [A(
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
    )) : ee("v-if", !0), Q(
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
var gd = ne({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: Ge
  },
  props: xy,
  setup(e) {
    var n = B("var-input-" + Na().uid), r = B(null), a = B(!1), t = B(!1), o = U(() => e.type === "number" ? "text" : e.type), i = U(() => {
      var {
        maxlength: N,
        modelValue: x
      } = e;
      return N ? Un(x) ? "0 / " + N : String(x).length + "/" + N : "";
    }), {
      bindForm: l,
      form: s
    } = kn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = Sn(), m = (N) => {
      Be(() => {
        var {
          validateTrigger: x,
          rules: te,
          modelValue: F
        } = e;
        d(x, N, te, F);
      });
    }, w = () => {
      var {
        hint: N,
        modelValue: x
      } = e;
      if (!N && (!Un(x) || t.value))
        return bo("--placeholder-hidden");
      if (N && (!Un(x) || a.value))
        return bo("--placeholder-hint");
    }, C = (N) => {
      a.value = !0, k(e.onFocus, N), m("onFocus");
    }, p = (N) => {
      a.value = !1, k(e.onBlur, N), m("onBlur");
    }, b = (N) => {
      var x = N.target, {
        value: te
      } = x;
      return e.type === "number" && (te = g(te)), I(V(te));
    }, M = () => {
      t.value = !0;
    }, $ = (N) => {
      t.value && (t.value = !1, N.target.dispatchEvent(new Event("input")));
    }, T = (N) => {
      if (!t.value) {
        var x = b(N);
        k(e["onUpdate:modelValue"], x), k(e.onInput, x, N), m("onInput");
      }
    }, E = (N) => {
      var x = b(N);
      k(e.onChange, x, N), m("onChange");
    }, P = () => {
      var {
        disabled: N,
        readonly: x,
        clearable: te,
        onClear: F
      } = e;
      s != null && s.disabled.value || s != null && s.readonly.value || N || x || !te || (k(e["onUpdate:modelValue"], ""), k(F, ""), m("onClear"));
    }, D = (N) => {
      var {
        disabled: x,
        onClick: te
      } = e;
      s != null && s.disabled.value || x || (k(te, N), m("onClick"));
    }, g = (N) => {
      var x = N.indexOf("-"), te = N.indexOf(".");
      return x > -1 && (N = x === 0 ? "-" + N.replace(/-/g, "") : N.replace(/-/g, "")), te > -1 && (N = N.slice(0, te + 1) + N.slice(te).replace(/\./g, "")), N.replace(/[^-0-9.]/g, "");
    }, V = (N) => e.modelModifiers.trim ? N.trim() : N, I = (N) => e.maxlength ? N.slice(0, L(e.maxlength)) : N, y = (N) => {
      var {
        disabled: x,
        readonly: te
      } = e;
      s != null && s.disabled.value || s != null && s.readonly.value || x || te || N.stopPropagation();
    }, S = () => {
      k(e["onUpdate:modelValue"], ""), f();
    }, R = () => v(e.rules, e.modelValue), J = () => {
      var N;
      (N = r.value) == null || N.focus();
    }, _ = () => {
      r.value.blur();
    }, W = {
      reset: S,
      validate: R,
      resetValidation: f
    };
    return k(l, W), sn(() => {
      e.autofocus && J();
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
      n: bo,
      classes: eb,
      isEmpty: Un,
      computePlaceholderState: w,
      handleFocus: C,
      handleBlur: p,
      handleInput: T,
      handleChange: E,
      handleClear: P,
      handleClick: D,
      handleTouchstart: y,
      handleCompositionStart: M,
      handleCompositionEnd: $,
      validate: R,
      resetValidation: f,
      reset: S,
      focus: J,
      blur: _
    };
  }
});
gd.render = tb;
const gr = gd;
gr.install = function(e) {
  e.component(gr.name, gr);
};
var YS = gr;
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
  onClick: H()
}, {
  n: sb,
  classes: ub
} = re("link");
function db(e, n) {
  return h(), ge(
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
      default: fe(() => [j(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var yd = ne({
  name: "VarLink",
  props: lb,
  setup(e) {
    var n = U(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = U(() => {
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
      o || k(i, t);
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
yd.render = db;
const ea = yd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var jS = ea, vb = {
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
function Fl(e, n, r, a, t, o, i) {
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
        Fl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Fl(o, a, t, i, l, "throw", s);
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
      ), Q(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : ee("v-if", !0), e.finished ? j(e.$slots, "finished", {
      key: 1
    }, () => [A(
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
    )), [[a]])]) : ee("v-if", !0), A(
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
var bd = ne({
  name: "VarList",
  directives: {
    Ripple: Ue
  },
  components: {
    VarLoading: Vn
  },
  props: vb,
  setup(e) {
    var n = B(null), r = B(null), a, t = () => {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Le(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = fb(function* () {
        yield Be();
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
      a = wr(n.value), e.immediateCheck && i(), a.addEventListener("scroll", i);
    }), _a(() => {
      a.removeEventListener("scroll", i);
    }), {
      pack: je,
      listEl: n,
      detectorEl: r,
      dt: _t,
      isNumber: nn,
      load: t,
      check: i,
      n: cb,
      classes: mb
    };
  }
});
bd.render = pb;
const na = bd;
na.install = function(e) {
  e.component(na.name, na);
};
var WS = na, hb = {
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
  n: Yl
} = re("loading-bar");
const yb = ne({
  name: "VarLoadingBar",
  props: hb,
  setup(e) {
    return () => Q("div", {
      class: gb(Yl(), [e.error, Yl("--error")]),
      style: {
        zIndex: cn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: me(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: me(e.top)
      }
    }, null);
  }
});
var wd, Cd, mo, Sd, jl, kd = {}, bb = {
  value: 0,
  opacity: 0,
  error: !1
}, We = Ie(bb), wb = (e) => {
  Object.assign(We, e);
}, Cb = (e) => {
  Object.assign(We, e), kd = e;
}, Sb = () => {
  Object.keys(kd).forEach((e) => {
    We[e] !== void 0 && (We[e] = void 0);
  });
}, $d = () => {
  jl || (jl = !0, nt(yb, We));
}, Ai = () => {
  wd = window.setTimeout(() => {
    if (!(We.value >= 95)) {
      var e = Math.random();
      We.value < 70 && (e = Math.round(5 * Math.random())), We.value += e, Ai();
    }
  }, 200);
}, zi = () => {
  window.clearTimeout(Cd), window.clearTimeout(wd), window.clearTimeout(mo), window.clearTimeout(Sd);
}, kb = () => {
  zi(), We.error = !1, We.value = 0, $d(), mo = window.setTimeout(() => {
    We.opacity = 1;
  }, 200), Ai();
}, Td = () => {
  zi(), We.value = 100, mo = window.setTimeout(() => {
    We.opacity = 0, Cd = window.setTimeout(() => {
      We.error = !1;
    }, 250);
  }, 300);
}, $b = () => {
  zi(), We.error = !0, We.value === 100 && (We.value = 0), $d(), mo = window.setTimeout(() => {
    We.opacity = 1;
  }, 200), Ai(), Sd = window.setTimeout(Td, 300);
}, Pd = {
  start: kb,
  finish: Td,
  error: $b,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: wb,
  setDefaultOptions: Cb,
  resetDefaultOptions: Sb
}, GS = Pd;
const ii = Pd;
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
  onOpen: H(),
  onOpened: H(),
  onClose: H(),
  onClosed: H(),
  "onUpdate:show": H()
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
      Da,
      {
        to: e.teleport
      },
      [Q(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: fe(() => [we(A(
            "div",
            {
              ref: "popover",
              style: G({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
              onClick: n[0] || (n[0] = Bn(() => {
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
          ), [[br, e.show]])]),
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
var Od = ne({
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
      resize: w
    } = ad(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: vn,
      toSizeUnit: me,
      n: Vb,
      classes: Mb,
      handleHostClick: i,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: w,
      open: f,
      close: m
    };
  }
});
Od.render = Bb;
const Xn = Od;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var qS = Xn, Vd = Symbol("SELECT_BIND_OPTION_KEY");
function Eb() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = dn(Vd);
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
  } = un(Vd);
  return r || Cn("Option", "<var-option/> must in <var-select/>"), {
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
    ), e.multiple ? (h(), ge(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Bn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : ee("v-if", !0), A(
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
var Md = ne({
  name: "VarOption",
  directives: {
    Ripple: Ue
  },
  components: {
    VarCheckbox: vr
  },
  props: Nb,
  setup(e) {
    var n = B(!1), r = U(() => n.value), a = U(() => e.label), t = U(() => e.value), {
      select: o,
      bindSelect: i
    } = Ib(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d,
      computeLabel: v
    } = o, f = () => {
      n.value = !n.value, d(C);
    }, m = () => d(C), w = (p) => {
      n.value = p;
    }, C = {
      label: a,
      value: t,
      selected: r,
      sync: w
    };
    return le([() => e.label, () => e.value], v), i(C), {
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
Md.render = zb;
const ra = Md;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var XS = ra, Lb = {
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
function Rb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: Wl
} = re("overlay");
const aa = ne({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Lb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = wt(() => e.show, 1), {
      disabled: o
    } = eo(), i = () => {
      k(e.onClick), k(e["onUpdate:show"], !1);
    };
    no(() => e.show, () => e.lockScroll);
    var l = () => Q("div", Ve({
      class: Wl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: i
    }), [k(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return Q(De, {
        name: Wl("--fade")
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
        return Q(Da, {
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
aa.install = function(e) {
  e.component(aa.name, aa);
};
var KS = aa, Ub = {
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
  n: Hb,
  classes: Fb
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
      [j(e.$slots, "prev", {}, () => [Q(r, {
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
      [Q(
        a,
        {
          modelValue: e.simpleCurrentValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
          onKeydown: n[3] || (n[3] = Fi((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
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
      [j(e.$slots, "next", {}, () => [Q(r, {
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
      [Q(
        o,
        {
          disabled: e.disabled,
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
          default: fe(() => [A(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = Bn(function() {
                return e.showMenu && e.showMenu(...arguments);
              }, ["stop"]))
            },
            [A(
              "span",
              null,
              ae(e.size) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
              1
              /* TEXT */
            ), Q(
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
      ), Q(
        a,
        {
          modelValue: e.quickJumperValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.quickJumperValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.quickJumperValue, l)),
          onKeydown: n[9] || (n[9] = Fi((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
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
var Bd = ne({
  name: "VarPagination",
  components: {
    VarMenu: Xn,
    VarIcon: $e,
    VarCell: dr,
    VarInput: gr
  },
  directives: {
    Ripple: Ue
  },
  props: Ub,
  setup(e) {
    var n = B(!1), r = B(""), a = B("1"), t = B(!1), o = B(!1), i = B(L(e.current) || 1), l = B(L(e.size) || 10), s = B([]), u = U(() => Math.ceil(e.maxPagerCount / 2)), d = U(() => Math.ceil(L(e.total) / L(l.value))), v = U(() => {
      var T = l.value * (i.value - 1) + 1, E = Math.min(l.value * i.value, L(e.total));
      return [T, E];
    }), f = U(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (T, E) => nn(T) ? !1 : E === 1 ? t.value : o.value, w = (T, E) => nn(T) ? "basic" : E === 1 ? "head" : "tail", C = (T, E) => {
      if (!(T === i.value || e.disabled)) {
        if (T === "...") {
          i.value = E === 1 ? Math.max(i.value - e.maxPagerCount, 1) : Math.min(i.value + e.maxPagerCount, d.value);
          return;
        }
        if (T === "prev") {
          i.value = M(i.value - 1);
          return;
        }
        if (T === "next") {
          i.value = M(i.value + 1);
          return;
        }
        nn(T) && (i.value = T);
      }
    }, p = () => {
      e.disabled || (n.value = !0);
    }, b = (T) => {
      l.value = T, n.value = !1;
      var E = M(i.value);
      a.value = String(E), i.value = E;
    }, M = (T) => T > d.value ? d.value : T < 1 ? 1 : T, $ = (T, E, P) => {
      P.target.blur();
      var D = M(L(E));
      a.value = String(D), i.value = D, T === "quick" && (r.value = "");
    };
    return le([() => e.current, () => e.size], (T) => {
      var [E, P] = T;
      i.value = L(E) || 1, l.value = L(P || 10);
    }), le([i, l, d], (T, E) => {
      var [P, D, g] = T, [V, I] = E, y = [], {
        maxPagerCount: S,
        total: R,
        onChange: J
      } = e, _ = Math.ceil(L(R) / L(I)), W = g - (S - u.value) - 1;
      if (a.value = "" + P, g - 2 > S) {
        if (V === void 0 || g !== _)
          for (var N = 2; N < S + 2; N++)
            y.push(N);
        if (P <= S && P < W) {
          y = [];
          for (var x = 1; x < S + 1; x++)
            y.push(x + 1);
          t.value = !0, o.value = !1;
        }
        if (P > S && P < W) {
          y = [];
          for (var te = 1; te < S + 1; te++)
            y.push(P + te - u.value);
          t.value = P === 2 && S === 1, o.value = !1;
        }
        if (P >= W) {
          y = [];
          for (var F = 1; F < S + 1; F++)
            y.push(g - (S - F) - 1);
          t.value = !1, o.value = !0;
        }
        y = [1, "...", ...y, "...", g];
      } else
        for (var Z = 1; Z <= g; Z++)
          y.push(Z);
      s.value = y, V != null && g > 0 && k(J, P, D), k(e["onUpdate:current"], P), k(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: Hb,
      classes: Fb,
      pack: je,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      quickJumperValue: r,
      simpleCurrentValue: a,
      totalText: f,
      getMode: w,
      isHideEllipsis: m,
      clickItem: C,
      showMenu: p,
      clickSize: b,
      setPage: $,
      toNumber: L,
      formatElevation: vn
    };
  }
});
Bd.render = jb;
const ta = Bd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var ZS = ta, Wb = {
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
var Ed = ne({
  name: "VarPaper",
  directives: {
    Ripple: Ue
  },
  props: Wb,
  setup(e) {
    var n = (r) => {
      k(e.onClick, r);
    };
    return {
      n: Gb,
      classes: qb,
      formatElevation: vn,
      toSizeUnit: me,
      handleClick: n
    };
  }
});
Ed.render = Xb;
const oa = Ed;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var JS = oa;
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
var Kb = li({
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
}, Je(bt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Zb,
  classes: Jb
} = re("picker"), Gl = 300, Qb = 15, ql = 0, _b = ["onTouchstart", "onTouchmove", "onTouchend"], xb = ["onTransitionend"];
function e0(e, n) {
  var r = oe("var-button");
  return h(), ge(
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
      default: fe(() => [A(
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
          [j(e.$slots, "cancel", {}, () => [Q(
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
          )]), j(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: c(e.n("title"))
            },
            ae(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), j(e.$slots, "confirm", {}, () => [Q(
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
        )) : ee("v-if", !0), A(
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
                onTouchmove: Bn((t) => e.handleTouchmove(t, a), ["prevent"]),
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
                xb
              )],
              42,
              _b
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
var Id = ne({
  name: "VarPicker",
  components: {
    VarButton: Ke,
    VarPopup: yn
  },
  inheritAttrs: !1,
  props: Kb,
  setup(e) {
    var n = B([]), r = U(() => Le(e.optionHeight)), a = U(() => Le(e.optionCount)), t = U(() => a.value * r.value / 2 - r.value / 2), o = U(() => a.value * r.value), i = [], l = (y, S) => {
      S.scrollEl = y;
    }, s = (y) => {
      k(e["onUpdate:show"], y);
    }, u = (y) => {
      var S = r.value + t.value, R = t.value - y.column.texts.length * r.value;
      y.translate >= S && (y.translate = S), y.translate <= R && (y.translate = R);
    }, d = (y, S) => {
      var {
        length: R
      } = y.column.texts;
      return S = S >= R ? R - 1 : S, S = S <= 0 ? 0 : S, S;
    }, v = (y) => {
      var S = Math.round((t.value - y.translate) / r.value);
      return d(y, S);
    }, f = () => {
      var y = n.value.map((R) => R.column.texts[R.index]), S = n.value.map((R) => R.index);
      return {
        texts: y,
        indexes: S
      };
    }, m = function(y, S, R, J) {
      J === void 0 && (J = !1);
      var _ = t.value - d(y, S) * r.value;
      _ === y.translate && (y.scrolling = !1, !J && D(y)), y.translate = _, y.duration = R;
    }, w = (y, S, R) => {
      y.translate += Math.abs(S / R) / 3e-3 * (S < 0 ? -1 : 1);
    }, C = (y, S) => {
      S.touching = !0, S.scrolling = !1, S.duration = 0, S.translate = ho(S.scrollEl);
    }, p = (y, S) => {
      if (S.touching) {
        var {
          clientY: R
        } = y.touches[0], J = S.prevY !== void 0 ? R - S.prevY : 0;
        S.prevY = R, S.translate += J, u(S);
        var _ = performance.now();
        _ - S.momentumTime > Gl && (S.momentumTime = _, S.momentumPrevY = S.translate);
      }
    }, b = (y, S) => {
      S.touching = !1, S.scrolling = !0, S.prevY = void 0;
      var R = S.translate - S.momentumPrevY, J = performance.now() - S.momentumTime, _ = Math.abs(R) >= Qb && J <= Gl;
      _ && w(S, R, J), S.index = v(S), m(S, S.index, _ ? 1e3 : 200);
    }, M = (y) => {
      y.scrolling = !1, D(y);
    }, $ = (y) => y.map((S, R) => {
      var J, _ = Ce(S) ? {
        texts: S
      } : S, W = {
        id: ql++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (J = _.initialIndex) != null ? J : 0,
        columnIndex: R,
        duration: 0,
        momentumTime: 0,
        column: _,
        scrollEl: null,
        scrolling: !1
      };
      return m(W, W.index, 0, !0), W;
    }), T = (y) => {
      var S = [];
      return E(S, y, 0, !0), S;
    }, E = function(y, S, R, J) {
      if (J === void 0 && (J = !1), Ce(S) && S.length) {
        var _, W = J && (_ = e.cascadeInitialIndexes[y.length]) != null ? _ : 0, N = {
          id: ql++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: W,
          columnIndex: R,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: S.map((x) => x[e.textKey])
          },
          columns: S,
          scrollEl: null,
          scrolling: !1
        };
        y.push(N), m(N, N.index, 0, !0), E(y, N.columns[N.index].children, R + 1, J);
      }
    }, P = (y) => {
      n.value.splice(n.value.indexOf(y) + 1), E(n.value, y.columns[y.index].children, y.columnIndex + 1);
    }, D = (y) => {
      var {
        cascade: S,
        onChange: R
      } = e;
      S && P(y);
      var J = n.value.some((x) => x.scrolling);
      if (!J) {
        var {
          texts: _,
          indexes: W
        } = f(), N = W.every((x, te) => x === i[te]);
        N || (i = [...W], k(R, _, W));
      }
    }, g = () => {
      if (e.cascade) {
        var y = n.value.find((S) => S.scrolling);
        y && (y.translate = ho(y.scrollEl), y.index = v(y), m(y, y.index, 0, !0), y.scrolling = !1, P(y));
      } else
        n.value.forEach((S) => {
          S.translate = ho(S.scrollEl), S.index = v(S), m(S, S.index, 0);
        });
    }, V = () => {
      g();
      var {
        texts: y,
        indexes: S
      } = f();
      i = [...S], k(e.onConfirm, y, S);
    }, I = () => {
      g();
      var {
        texts: y,
        indexes: S
      } = f();
      i = [...S], k(e.onCancel, y, S);
    };
    return le(() => e.columns, (y) => {
      n.value = e.cascade ? T(Yi(y)) : $(Yi(y));
      var {
        indexes: S
      } = f();
      i = [...S];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Zb,
      classes: Jb,
      pack: je,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: De,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: C,
      handleTouchmove: p,
      handleTouchend: b,
      handleTransitionend: M,
      confirm: V,
      cancel: I,
      dt: _t
    };
  }
});
Id.render = e0;
const yr = Id;
var an;
function Ia(e) {
  return new Promise((n) => {
    Ia.close();
    var r = Ce(e) ? {
      columns: e
    } : e, a = Ie(r);
    a.dynamic = !0, a.teleport = "body", an = a;
    var {
      unmountInstance: t
    } = nt(yr, a, {
      onConfirm: (o, i) => {
        k(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, an === a && (an = null);
      },
      onCancel: (o, i) => {
        k(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
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
yr.install = function(e) {
  e.component(yr.name, yr);
};
Ia.Component = yr;
Ia.install = function(e) {
  e.component(yr.name, yr);
};
Ia.close = function() {
  if (an != null) {
    var e = an;
    an = null, Be().then(() => {
      e.show = !1;
    });
  }
};
var QS = yr;
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
      [A(
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
        )) : ee("v-if", !0), A(
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
        )) : ee("v-if", !0), A(
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
var Nd = ne({
  name: "VarProgress",
  props: r0,
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
Nd.render = s0;
const ia = Nd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var _S = ia, u0 = {
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
function Xl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Kl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Xl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Xl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Zl,
  classes: d0
} = re("pull-refresh"), Jl = 150;
function v0(e, n) {
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
    [A(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: G(e.controlStyle)
      },
      [Q(
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
    ), j(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Dd = ne({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: u0,
  setup(e) {
    var n = B(0), r = B(null), a = B(null), t = B(0), o = B("-125%"), i = B("arrow-down"), l = B("default"), s = B(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var g = Kl(function* (V) {
        if (i.value !== V)
          return i.value = V, new Promise((I) => {
            window.setTimeout(I, Jl);
          });
      });
      return function(I) {
        return g.apply(this, arguments);
      };
    }(), w = U(() => l.value !== "loading" && l.value !== "success" && !e.disabled), C = U(() => ({
      transform: "translate3d(0px, " + (Re(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: b.value ? e.successBgColor : e.bgColor,
      color: b.value ? e.successColor : e.color
    })), p = U(() => Math.abs(2 * n.value)), b = U(() => l.value === "success"), M = (g) => {
      var V = "classList" in u ? u : document.body;
      V.classList[g](Zl() + "--lock");
    }, $ = (g) => {
      if (n.value === 0) {
        var {
          width: V
        } = a.value.getBoundingClientRect();
        n.value = -(V + V * 0.25);
      }
      v = g.touches[0].clientY, f = 0, d = wr(g.target);
    }, T = (g) => {
      if (w.value && !(d !== u && dt(d) > 0)) {
        var V = dt(u);
        if (!(V > 0)) {
          var I = V === 0, y = g.touches[0];
          f = y.clientY - v, I && f >= 0 && g.preventDefault(), l.value !== "pulling" && (l.value = "pulling", t.value = g.touches[0].clientY), I && o.value > n.value && M("add");
          var S = (g.touches[0].clientY - t.value) / 2 + n.value;
          o.value = S >= p.value ? p.value : S, m(o.value >= p.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, E = /* @__PURE__ */ function() {
      var g = Kl(function* () {
        w.value && (s.value = !0, o.value >= p.value * 0.2 ? (yield m("refresh"), l.value = "loading", o.value = p.value * 0.3, k(e["onUpdate:modelValue"], !0), Be(() => {
          k(e.onRefresh);
        }), M("remove")) : (l.value = "loosing", i.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, M("remove");
        }, L(e.animationDuration))), d = null);
      });
      return function() {
        return g.apply(this, arguments);
      };
    }(), P = () => {
      u = e.target ? fs(e.target, "PullRefresh") : wr(r.value);
    }, D = () => {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    };
    return le(() => e.modelValue, (g) => {
      g === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, D();
      }, L(e.successDuration)));
    }), sn(P), Cr(r, "touchmove", T), {
      n: Zl,
      classes: d0,
      ICON_TRANSITION: Jl,
      refreshStatus: l,
      freshNode: r,
      controlNode: a,
      touchStart: $,
      touchMove: T,
      touchEnd: E,
      iconName: i,
      controlStyle: C,
      isSuccess: b
    };
  }
});
Dd.render = v0;
const la = Dd;
la.install = function(e) {
  e.component(la.name, la);
};
var xS = la, f0 = {
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
}, Ad = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function c0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(Ad);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function m0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = un(Ad);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: p0,
  classes: h0
} = re("radio");
function g0(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return h(), O(
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
        }, () => [Q(
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
        }, () => [Q(
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
        )]), Q(
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
      }], [i, e.handleHovering, "desktop"]]), A(
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
    ), Q(
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
var zd = ne({
  name: "VarRadio",
  directives: {
    Ripple: Ue,
    Hover: Dn
  },
  components: {
    VarIcon: $e,
    VarFormDetails: Ge,
    VarHoverOverlay: on
  },
  inheritAttrs: !1,
  props: f0,
  setup(e) {
    var n = B(!1), r = U(() => n.value === e.checkedValue), a = B(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = m0(), {
      hovering: i,
      handleHovering: l
    } = Sr(), {
      form: s,
      bindForm: u
    } = kn(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Sn(), w = (P) => {
      Be(() => {
        var {
          validateTrigger: D,
          rules: g,
          modelValue: V
        } = e;
        v(D, P, g, V);
      });
    }, C = (P) => {
      var {
        checkedValue: D,
        onChange: g
      } = e;
      t && n.value === D || (n.value = P, k(e["onUpdate:modelValue"], n.value), k(g, n.value), t == null || t.onToggle(D), w("onChange"));
    }, p = (P) => {
      var {
        disabled: D,
        readonly: g,
        uncheckedValue: V,
        checkedValue: I,
        onClick: y
      } = e;
      s != null && s.disabled.value || D || (k(y, P), !(s != null && s.readonly.value || g) && (a.value = !0, C(r.value ? V : I)));
    }, b = (P) => {
      var {
        checkedValue: D,
        uncheckedValue: g
      } = e;
      n.value = P === D ? D : g;
    }, M = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, $ = () => f(e.rules, e.modelValue), T = (P) => {
      var {
        uncheckedValue: D,
        checkedValue: g
      } = e, V = ![D, g].includes(P);
      V && (P = r.value ? D : g), C(P);
    };
    le(() => e.modelValue, (P) => {
      n.value = P;
    }, {
      immediate: !0
    });
    var E = {
      sync: b,
      validate: $,
      resetValidation: m,
      reset: M
    };
    return k(o, E), k(u, E), {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: i,
      handleHovering: l,
      n: p0,
      classes: h0,
      handleClick: p,
      toggle: T,
      reset: M,
      validate: $,
      resetValidation: m
    };
  }
});
zd.render = g0;
const sa = zd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var ek = sa;
function y0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var b0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: y0
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
  n: w0,
  classes: C0
} = re("radio-group");
function S0(e, n) {
  var r = oe("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(
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
var Ld = ne({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: Ge
  },
  props: b0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = c0(), {
      bindForm: t
    } = kn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Sn(), u = U(() => o.value), d = (p) => {
      Be(() => {
        var {
          validateTrigger: b,
          rules: M,
          modelValue: $
        } = e;
        i(b, p, M, $);
      });
    }, v = () => r.forEach((p) => {
      var {
        sync: b
      } = p;
      return b(e.modelValue);
    }), f = (p) => {
      k(e["onUpdate:modelValue"], p), k(e.onChange, p), d("onChange");
    }, m = () => l(e.rules, e.modelValue), w = () => {
      k(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var C = {
      onToggle: f,
      validate: m,
      reset: w,
      resetValidation: s,
      errorMessage: u
    };
    return k(t, C), a(C), {
      errorMessage: o,
      n: w0,
      classes: C0,
      reset: w,
      validate: m,
      resetValidation: s
    };
  }
});
Ld.render = S0;
const ua = Ld;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var nk = ua, k0 = {
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
  n: at
} = re("rate"), $0 = ["onClick"];
function T0(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
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
          [Q(
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
          ), Q(
            a,
            {
              hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          $0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [i, e.createHoverHandler(l), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Q(
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
var Rd = ne({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: Ge,
    VarHoverOverlay: on
  },
  directives: {
    Ripple: Ue,
    Hover: Dn
  },
  props: k0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = kn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = Sn(), {
      hovering: l
    } = Sr(), s = B(-1), u = ($) => {
      var {
        count: T,
        gap: E
      } = e;
      return {
        color: v($).color,
        marginRight: $ !== L(T) ? me(E) : 0
      };
    }, d = ($) => {
      var {
        name: T,
        color: E
      } = v($);
      return {
        [at("content")]: !0,
        [at("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [at("--error")]: a.value,
        [at("--primary")]: T !== e.emptyIcon && !E
      };
    }, v = ($) => {
      var {
        modelValue: T,
        disabled: E,
        disabledColor: P,
        color: D,
        half: g,
        emptyColor: V,
        icon: I,
        halfIcon: y,
        emptyIcon: S
      } = e, R = D;
      return (E || n != null && n.disabled.value) && (R = P), $ <= L(T) ? {
        color: R,
        name: I
      } : g && $ <= L(T) + 0.5 ? {
        color: R,
        name: y
      } : {
        color: E || n != null && n.disabled.value ? P : V,
        name: S
      };
    }, f = ($, T) => {
      if (e.half) {
        var {
          offsetWidth: E
        } = T.target;
        T.offsetX <= Math.floor(E / 2) && ($ -= 0.5);
      }
      k(e["onUpdate:modelValue"], $);
    }, m = () => o(e.rules, L(e.modelValue)), w = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), C = ($, T) => {
      var {
        readonly: E,
        disabled: P,
        onChange: D
      } = e;
      E || P || n != null && n.disabled.value || n != null && n.readonly.value || (f($, T), k(D, $), w());
    }, p = ($) => (T) => {
      s.value = $, l.value = T;
    }, b = () => {
      k(e["onUpdate:modelValue"], 0), i();
    }, M = {
      reset: b,
      validate: m,
      resetValidation: i
    };
    return k(r, M), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: C,
      hovering: l,
      currentHoveringValue: s,
      createHoverHandler: p,
      reset: b,
      validate: m,
      resetValidation: i,
      toSizeUnit: me,
      toNumber: L,
      n: at
    };
  }
});
Rd.render = T0;
const da = Rd;
da.install = function(e) {
  e.component(da.name, da);
};
var rk = da;
function P0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var O0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: P0
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
}, V0 = (e) => (Aa(""), e = e(), za(), e), M0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, B0 = /* @__PURE__ */ V0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), E0 = [B0];
function I0(e, n) {
  return h(), O("svg", M0, E0);
}
var Ud = ne({});
Ud.render = I0;
const N0 = Ud;
var D0 = (e) => (Aa(""), e = e(), za(), e), A0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, z0 = /* @__PURE__ */ D0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), L0 = [z0];
function R0(e, n) {
  return h(), O("svg", A0, L0);
}
var Hd = ne({});
Hd.render = R0;
const U0 = Hd;
var H0 = (e) => (Aa(""), e = e(), za(), e), F0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, Y0 = /* @__PURE__ */ H0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), j0 = [Y0];
function W0(e, n) {
  return h(), O("svg", F0, j0);
}
var Fd = ne({});
Fd.render = W0;
const G0 = Fd;
var {
  n: q0,
  classes: X0
} = re("result");
function K0(e, n) {
  return h(), O(
    Oe,
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
var Yd = ne({
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
      n: q0,
      classes: X0,
      toNumber: L
    };
  }
});
Yd.render = K0;
const Z0 = Yd;
var J0 = (e) => (Aa(""), e = e(), za(), e), Q0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, _0 = /* @__PURE__ */ J0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), x0 = [_0];
function e1(e, n) {
  return h(), O("svg", Q0, x0);
}
var jd = ne({});
jd.render = e1;
const n1 = jd;
var r1 = (e) => (Aa(""), e = e(), za(), e), a1 = {
  viewBox: "-4 -4 32 32"
}, t1 = /* @__PURE__ */ r1(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), o1 = [t1];
function i1(e, n) {
  return h(), O("svg", a1, o1);
}
var Wd = ne({});
Wd.render = i1;
const l1 = Wd;
var {
  n: s1,
  classes: u1
} = re("result");
function d1(e, n) {
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
        [(h(), ge(
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
var Gd = ne({
  name: "VarResult",
  components: {
    Info: N0,
    Success: Z0,
    Warning: G0,
    Error: U0,
    Question: n1,
    Empty: l1
  },
  props: O0,
  setup(e) {
    var n = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? me(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? me(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: s1,
      classes: u1,
      toNumber: L,
      toPxNum: Le,
      toSizeUnit: me,
      circleSize: n,
      borderSize: r
    };
  }
});
Gd.render = d1;
const va = Gd;
va.install = function(e) {
  e.component(va.name, va);
};
var ak = va;
function v1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function f1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var c1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: v1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: f1
  },
  onClick: H()
}, {
  n: m1,
  classes: p1
} = re("row");
function h1(e, n) {
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
var qd = ne({
  name: "VarRow",
  props: c1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Um(), t = U(() => {
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
      k(e.onClick, s);
    }, l = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), r(l), {
      n: m1,
      classes: p1,
      average: t,
      handleClick: i,
      padStartFlex: Ut
    };
  }
});
qd.render = h1;
const fa = qd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var tk = fa;
function g1(e) {
  return ["left", "right", "center"].includes(e);
}
var y1 = {
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
    validator: g1
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
  onClick: H(),
  onClear: H(),
  onClose: H(),
  onChange: H(),
  "onUpdate:modelValue": H()
}, {
  n: wo,
  classes: b1
} = re("select"), w1 = {
  key: 1
};
function C1(e, n) {
  var r = oe("var-chip"), a = oe("var-icon"), t = oe("var-menu"), o = oe("var-form-details");
  return h(), O(
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
        style: G({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [j(e.$slots, "prepend-icon")],
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
        [Q(
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
            menu: fe(() => [A(
              "div",
              {
                ref: "menuEl",
                class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [j(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: fe(() => [A(
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
                          onClick: n[0] || (n[0] = Bn(() => {
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
                  w1,
                  ae(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), j(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [Q(
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
      ), A(
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
      [A(
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
    )) : ee("v-if", !0), Q(
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
var Xd = ne({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Xn,
    VarChip: fr,
    VarFormDetails: Ge
  },
  props: y1,
  setup(e) {
    var n = B(null), r = B(!1), a = U(() => e.multiple), t = U(() => e.focusColor), o = B(""), i = B([]), l = U(() => Un(e.modelValue)), s = B("0px"), u = B(0), {
      bindForm: d,
      form: v
    } = kn(), {
      length: f,
      options: m,
      bindOptions: w
    } = Eb(), {
      errorMessage: C,
      validateWithTrigger: p,
      validate: b,
      // expose
      resetValidation: M
    } = Sn(), $ = B(null), T = () => {
      var {
        multiple: K,
        modelValue: z
      } = e;
      if (K) {
        var Y = z;
        i.value = Y.map(D);
      }
      !K && !Un(z) && (o.value = D(z)), !K && Un(z) && (o.value = "");
    }, E = (K) => {
      Be(() => {
        var {
          validateTrigger: z,
          rules: Y,
          modelValue: X
        } = e;
        p(z, K, Y, X);
      });
    }, P = (K) => {
      var {
        value: z,
        label: Y
      } = K;
      return z.value != null ? z.value : Y.value;
    }, D = (K) => {
      var z, Y, X = m.find((de) => {
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
      })), (z = (Y = X) == null ? void 0 : Y.label.value) != null ? z : "";
    }, g = () => {
      var {
        hint: K,
        modelValue: z
      } = e;
      if (!K && !Un(z))
        return wo("--placeholder-hidden");
      if (K && (!Un(z) || r.value))
        return wo("--placeholder-hint");
    }, V = () => n.value && window.getComputedStyle(n.value).width || "0px", I = () => {
      var {
        disabled: K,
        readonly: z,
        onFocus: Y
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || K || z || (s.value = V(), u.value = Le(e.offsetY), r.value = !0, k(Y), E("onFocus"));
    }, y = () => {
      var {
        disabled: K,
        readonly: z,
        onBlur: Y
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || K || z || (k(Y), E("onBlur"));
    }, S = (K) => {
      var {
        disabled: z,
        readonly: Y,
        multiple: X,
        onChange: de
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || z || Y)) {
        var pe = X ? m.filter((Ae) => {
          var {
            selected: Ee
          } = Ae;
          return Ee.value;
        }).map(P) : P(K);
        k(e["onUpdate:modelValue"], pe), k(de, pe), E("onChange"), !X && (r.value = !1);
      }
    }, R = () => {
      var {
        disabled: K,
        readonly: z,
        multiple: Y,
        clearable: X,
        onClear: de
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || K || z || !X)) {
        var pe = Y ? [] : void 0;
        k(e["onUpdate:modelValue"], pe), k(de, pe), E("onClear");
      }
    }, J = (K) => {
      var {
        disabled: z,
        onClick: Y
      } = e;
      v != null && v.disabled.value || z || (k(Y, K), E("onClick"));
    }, _ = (K) => {
      var {
        disabled: z,
        readonly: Y,
        modelValue: X,
        onClose: de
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || z || Y)) {
        var pe = X, Ae = m.find((Ze) => {
          var {
            label: Tn
          } = Ze;
          return Tn.value === K;
        }), Ee = pe.filter((Ze) => {
          var Tn;
          return Ze !== ((Tn = Ae.value.value) != null ? Tn : Ae.label.value);
        });
        k(e["onUpdate:modelValue"], Ee), k(de, Ee), E("onClose");
      }
    }, W = () => {
      var {
        multiple: K,
        modelValue: z
      } = e;
      if (K) {
        var Y = z;
        m.forEach((X) => X.sync(Y.includes(P(X))));
      } else
        m.forEach((X) => X.sync(z === P(X)));
      T();
    }, N = () => {
      s.value = V(), u.value = Le(e.offsetY), r.value = !0;
    }, x = () => {
      r.value = !1;
    }, te = () => b(e.rules, e.modelValue), F = () => {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), M();
    };
    le(() => e.multiple, () => {
      var {
        multiple: K,
        modelValue: z
      } = e;
      K && !Ce(z) && Cn("Select", "The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, W, {
      deep: !0
    }), le(() => f.value, W);
    var Z = {
      wrapWidth: U(() => s.value),
      multiple: a,
      focusColor: t,
      computeLabel: T,
      onSelect: S,
      reset: F,
      validate: te,
      resetValidation: M
    };
    return w(Z), k(d, Z), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: C,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: i,
      isEmptyModelValue: l,
      menuEl: $,
      n: wo,
      classes: b1,
      computePlaceholderState: g,
      handleFocus: I,
      handleBlur: y,
      handleClear: R,
      handleClick: J,
      handleClose: _,
      reset: F,
      validate: te,
      resetValidation: M,
      focus: N,
      blur: x
    };
  }
});
Xd.render = C1;
const ca = Xd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var ok = ca, S1 = {
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
  n: k1,
  classes: $1
} = re("skeleton");
function T1(e, n) {
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
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Kd = ne({
  name: "VarSkeleton",
  props: S1,
  setup() {
    return {
      n: k1,
      classes: $1,
      toSizeUnit: me,
      toNumber: L
    };
  }
});
Kd.render = T1;
const ma = Kd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var ik = ma;
function P1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ne;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ne || (Ne = {}));
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
    validator: P1
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
  onChange: H(),
  onStart: H(),
  onEnd: H(),
  "onUpdate:modelValue": H()
}, {
  n: Ql,
  classes: V1
} = re("slider"), M1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function B1(e, n) {
  var r = oe("var-hover-overlay"), a = oe("var-form-details"), t = Me("hover");
  return h(), O(
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
            onTouchstart: Bn((i) => e.start(i, o.enumValue), ["stop"]),
            onTouchmove: Bn((i) => e.move(i, o.enumValue), ["stop"]),
            onTouchend: (i) => e.end(o.enumValue),
            onTouchcancel: (i) => e.end(o.enumValue)
          },
          [j(e.$slots, "button", {
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
          ), [[t, (i) => e.hover(i, o), "desktop"]]), A(
            "div",
            {
              class: c(e.classes(e.n("thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n("thumb-ripple--active")])),
              style: G({
                background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
              })
            },
            [Q(
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
          M1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Q(
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
var Zd = ne({
  name: "VarSlider",
  components: {
    VarFormDetails: Ge,
    VarHoverOverlay: on
  },
  directives: {
    Hover: Dn
  },
  props: O1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = kn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = Sn(), {
      hovering: l,
      handleHovering: s
    } = Sr(), {
      hovering: u,
      handleHovering: d
    } = Sr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), m = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), w = B(null), C = B(0), p = B(!1), b = Ie({
      [Ne.First]: f(),
      [Ne.Second]: f()
    }), M = U(() => L(e.max) - L(e.min)), $ = U(() => C.value / M.value * L(e.step)), T = U(() => {
      var {
        modelValue: z,
        range: Y
      } = e, X = [];
      return Y && Ce(z) ? X = [{
        value: V(z[0]),
        enumValue: Ne.First,
        text: I(z[0]),
        hovering: Ga(l),
        handleHovering: s
      }, {
        value: V(z[1]),
        enumValue: Ne.Second,
        text: I(z[1]),
        hovering: Ga(u),
        handleHovering: d
      }] : nn(z) && (X = [{
        value: V(z),
        enumValue: Ne.First,
        text: I(z),
        hovering: Ga(l),
        handleHovering: s
      }]), X;
    }), E = U(() => {
      var {
        activeColor: z,
        range: Y,
        modelValue: X
      } = e, de = Y && Ce(X) ? V(Math.min(X[0], X[1])) : 0, pe = Y && Ce(X) ? V(Math.max(X[0], X[1])) - de : V(X);
      return {
        width: pe + "%",
        left: de + "%",
        background: z
      };
    }), P = U(() => e.disabled || (r == null ? void 0 : r.disabled.value)), D = U(() => e.readonly || (r == null ? void 0 : r.readonly.value)), g = (z) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : b[z].active, V = (z) => {
      var {
        min: Y,
        max: X
      } = e;
      return z < L(Y) ? 0 : z > L(X) ? 100 : (z - L(Y)) / M.value * 100;
    }, I = (z) => {
      if (!nn(z))
        return 0;
      var Y = z;
      Y < Number(e.min) && (Y = Number(e.min)), Y > Number(e.max) && (Y = Number(e.max));
      var X = parseInt("" + Y, 10) === Y;
      return X ? Y : L(Y.toPrecision(5));
    }, y = (z, Y) => {
      P.value || Y.handleHovering(z);
    }, S = (z, Y) => {
      var X = [], {
        step: de,
        range: pe,
        modelValue: Ae,
        onChange: Ee,
        min: Ze
      } = e, Tn = L(de), Ln = Math.round(z / $.value), qe = Ln * Tn + L(Ze), mn = b[Y].percentValue * Tn + L(Ze);
      if (b[Y].percentValue = Ln, pe && Ce(Ae) && (X = Y === Ne.First ? [qe, Ae[1]] : [Ae[0], qe]), mn !== qe) {
        var St = pe ? X.map((kt) => I(kt)) : I(qe);
        k(Ee, St), k(e["onUpdate:modelValue"], St), m();
      }
    }, R = (z) => {
      if (!e.range)
        return Ne.First;
      var Y = b[Ne.First].percentValue * $.value, X = b[Ne.Second].percentValue * $.value, de = Math.abs(z - Y), pe = Math.abs(z - X);
      return de <= pe ? Ne.First : Ne.Second;
    }, J = (z, Y) => {
      C.value || (C.value = w.value.offsetWidth), P.value || (b[Y].active = !0), !(P.value || D.value) && (k(e.onStart), p.value = !0, b[Y].startPosition = z.touches[0].clientX);
    }, _ = (z, Y) => {
      if (!(P.value || D.value || !p.value)) {
        var X = z.touches[0].clientX - b[Y].startPosition + b[Y].currentLeft;
        X <= 0 ? X = 0 : X >= C.value && (X = C.value), S(X, Y);
      }
    }, W = (z) => {
      var {
        range: Y,
        modelValue: X,
        onEnd: de,
        step: pe,
        min: Ae
      } = e;
      if (P.value || (b[z].active = !1), !(P.value || D.value)) {
        var Ee = [];
        b[z].currentLeft = b[z].percentValue * $.value;
        var Ze = b[z].percentValue * L(pe) + L(Ae);
        Y && Ce(X) && (Ee = z === Ne.First ? [Ze, X[1]] : [X[0], Ze]), k(de, Y ? Ee : Ze), p.value = !1;
      }
    }, N = (z) => {
      if (!(P.value || D.value) && !z.target.closest("." + Ql("thumb"))) {
        var Y = z.clientX - Lv(z.currentTarget), X = R(Y);
        S(Y, X), W(X);
      }
    }, x = () => {
      var z = L(e.step);
      return isNaN(z) ? (Xi("Slider", 'type of prop "step" should be Number'), !1) : z < 0 ? (Xi("Slider", '"step" should be > 0'), !1) : !0;
    }, te = () => {
      var {
        range: z,
        modelValue: Y
      } = e;
      return z && !Ce(Y) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !z && Ce(Y) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : z && Ce(Y) && Y.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, F = function(z, Y) {
      z === void 0 && (z = e.modelValue), Y === void 0 && (Y = L(e.step));
      var X = (de) => {
        var {
          min: pe,
          max: Ae
        } = e;
        return de < L(pe) ? 0 : de > L(Ae) ? M.value / Y : (de - L(pe)) / Y;
      };
      e.range && Ce(z) ? (b[Ne.First].percentValue = X(z[0]), b[Ne.First].currentLeft = b[Ne.First].percentValue * $.value, b[Ne.Second].percentValue = X(z[1]), b[Ne.Second].currentLeft = b[Ne.Second].percentValue * $.value) : nn(z) && (b[Ne.First].currentLeft = X(z) * $.value);
    }, Z = () => {
      var z = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], z), i();
    }, K = {
      reset: Z,
      validate: v,
      resetValidation: i
    };
    return k(n, K), le([() => e.modelValue, () => e.step], (z) => {
      var [Y, X] = z;
      !x() || !te() || p.value || F(Y, L(X));
    }), le(C, () => F()), sn(() => {
      !x() || !te() || (C.value = w.value.offsetWidth);
    }), {
      n: Ql,
      classes: V1,
      Thumbs: Ne,
      sliderEl: w,
      getFillStyle: E,
      isDisabled: P,
      errorMessage: a,
      thumbsProps: b,
      thumbList: T,
      hover: y,
      multiplySizeUnit: xe,
      toNumber: L,
      showLabel: g,
      start: J,
      move: _,
      end: W,
      click: N
    };
  }
});
Zd.render = B1;
const pa = Zd;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var lk = pa;
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
function E1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function I1(e) {
  return Li.includes(e);
}
var Jd = {
  type: {
    type: String,
    validator: I1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: E1
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
  loadingType: Je(or, "type"),
  loadingSize: Je(or, "size"),
  loadingRadius: Je(or, "radius"),
  loadingColor: si({}, Je(or, "color"), {
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
  n: N1,
  classes: D1
} = re("snackbar"), A1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function z1(e, n) {
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
        [j(e.$slots, "default", {}, () => [be(
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
  )), [[br, e.show]]);
}
var Qd = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Vn,
    VarIcon: $e
  },
  props: Jd,
  setup(e) {
    var n = B(null), {
      zIndex: r
    } = wt(() => e.show, 1);
    no(() => e.show, () => e.lockScroll);
    var a = U(() => e.type === "loading" || e.forbidClick), t = U(() => e.type ? A1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (i) => {
      i ? (k(e.onOpen), o()) : i === !1 && (clearTimeout(n.value), k(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(n.value), o();
    }), sn(() => {
      e.show && (k(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Li,
      n: N1,
      classes: D1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
Qd.render = z1;
const _d = Qd;
var {
  n: L1
} = re("snackbar");
function R1(e, n) {
  var r = oe("var-snackbar-core");
  return h(), ge(
    Da,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [Q(
      De,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: fe(() => [Q(
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
var xd = ne({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: _d
  },
  props: Jd,
  setup() {
    var {
      disabled: e
    } = eo();
    return {
      n: L1,
      disabled: e
    };
  }
});
xd.render = R1;
const ha = xd;
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
function U1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var Li = ["loading", "success", "warning", "info", "error"], _l = 0, ui = !1, ev, Qa = !1, nv = {
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
}, wn = Ie([]), Ri = nv, H1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, F1 = {
  setup() {
    return () => {
      var e = wn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Qa && (a.position = "top");
        var i = Qa ? "relative" : "absolute", l = ht({
          position: i
        }, X1(a.position));
        return Q(_d, Ve(a, {
          key: r,
          style: l,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return Q(Bv, Ve(H1, {
        style: {
          zIndex: cn.zIndex
        },
        onAfterEnter: Y1,
        onAfterLeave: j1
      }), U1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Jn = function(e) {
  var n = G1(e), r = Ie(ht({}, Ri, n));
  r.show = !0, ui || (ui = !0, ev = nt(F1).unmountInstance);
  var {
    length: a
  } = wn, t = {
    id: _l++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Qa)
    W1(t);
  else {
    var o = "update-" + _l;
    q1(r, o);
  }
  return {
    clear() {
      !Qa && wn.length ? wn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Li.forEach((e) => {
  Jn[e] = (n) => (mi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Jn(n));
});
Jn.install = function(e) {
  e.component(ha.name, ha);
};
Jn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Qa && (wn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Qa = e);
};
Jn.clear = function() {
  wn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Jn.setDefaultOptions = function(e) {
  Ri = e;
};
Jn.resetDefaultOptions = function() {
  Ri = nv;
};
Jn.Component = ha;
function Y1(e) {
  var n = e.getAttribute("data-id"), r = wn.find((a) => a.id === L(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function j1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = wn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed));
  var a = wn.every((t) => t.animationEnd);
  a && (k(ev), wn = Ie([]), ui = !1);
}
function W1(e) {
  wn.push(e);
}
function G1(e) {
  return e === void 0 && (e = {}), Re(e) ? {
    content: e
  } : e;
}
function q1(e, n) {
  var [r] = wn;
  r.reactiveSnackOptions = ht({}, r.reactiveSnackOptions, e), r._update = n;
}
function X1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ha.install = function(e) {
  e.component(ha.name, ha);
};
var sk = ha;
const di = Jn;
var rv = (e) => ["mini", "small", "normal", "large"].includes(e), K1 = (e) => rv(e) || Ce(e) || nn(e) || Re(e), Z1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), J1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Q1 = {
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
    validator: Z1
  },
  align: {
    type: String,
    validator: J1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function fn(e) {
  return "calc(" + e + " / 2)";
}
function _1(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== i ? l = fn(e) + " " + n + " " + fn(e) + " 0" : l = fn(e) + " 0" : t === "space-around" ? l = fn(e) + " " + fn(n) : t === "space-between" && (o === 0 ? l = fn(e) + " " + fn(n) + " " + fn(e) + " 0" : o === i ? l = fn(e) + " 0 " + fn(e) + " " + fn(n) : l = fn(e) + " " + fn(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var {
  n: Co,
  classes: x1
} = re("space");
const ga = ne({
  name: "VarSpace",
  props: Q1,
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
      } = e, v = (t = k(r.default)) != null ? t : [], f = rv(d), [m, w] = a(d, f);
      v = Cs(v);
      var C = v.length - 1, p = v.map((b, M) => {
        var $ = _1(m, w, {
          direction: u,
          justify: i,
          index: M,
          lastIndex: C
        });
        return Q("div", {
          style: {
            margin: $
          }
        }, [b]);
      });
      return Q("div", {
        class: x1(Co(), Co("$--box"), [o, Co("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Ut(i),
          alignItems: Ut(l),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [p]);
    };
  }
});
ga.install = function(e) {
  e.component(ga.name, ga);
};
var uk = ga, ew = {
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
}, av = Symbol("STEPS_BIND_STEP_KEY");
function nw() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = dn(av);
  return {
    length: n,
    step: r,
    bindStep: e
  };
}
function rw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = un(av);
  return r || Cn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: aw,
  classes: tw
} = re("step"), ow = {
  key: 3
};
function iw(e, n) {
  var r = oe("var-icon");
  return h(), O(
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
            ow,
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
var tv = ne({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: ew,
  setup() {
    var e = B(null), n = B(""), r = B(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = rw(), {
      active: i,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = U(() => i.value === a.value), m = U(() => a.value !== -1 && i.value > a.value), w = {
      index: a
    }, C = () => v(a.value), p = (b) => {
      d.value === "horizontal" && (e.value = b);
    };
    return o(w), le(l, (b) => {
      if (r.value = b - 1 === a.value, e.value) {
        var M = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + M + "px";
      }
    }), {
      n: aw,
      classes: tw,
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
      getRef: p
    };
  }
});
tv.render = iw;
const ya = tv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var dk = ya;
function lw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var sw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: lw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: H()
}, {
  n: uw
} = re("steps");
function dw(e, n) {
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
var ov = ne({
  name: "VarSteps",
  props: sw,
  setup(e) {
    var n = U(() => e.active), r = U(() => e.activeColor), a = U(() => e.inactiveColor), t = U(() => e.direction), {
      length: o,
      bindStep: i
    } = nw(), l = (u) => {
      k(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return i(s), {
      n: uw
    };
  }
});
ov.render = dw;
const ba = ov;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var vk = ba, vw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: fw
} = re("style-provider"), cw = ne({
  name: "VarStyleProvider",
  props: vw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => is(e.tag, {
      class: fw(),
      style: ys(e.styleVars)
    }, k(r.default));
  }
});
const wa = cw;
var So = [];
function gt(e) {
  So.forEach((r) => document.documentElement.style.removeProperty(r)), So.length = 0;
  var n = ys(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), So.push(a);
  });
}
gt.Component = wa;
wa.install = function(e) {
  e.component(wa.name, wa);
};
gt.install = function(e) {
  e.component(wa.name, wa);
};
var fk = wa, mw = {
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
  n: pw,
  classes: hw
} = re("switch");
function gw(e, n) {
  var r = oe("var-loading"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return we((h(), O(
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
      ), we((h(), O(
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
        ), Q(
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
    ), Q(
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
var iv = ne({
  name: "VarSwitch",
  components: {
    VarLoading: Vn,
    VarFormDetails: Ge,
    VarHoverOverlay: on
  },
  directives: {
    Ripple: Ue,
    Hover: Dn
  },
  props: mw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = kn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = Sn(), {
      hovering: l,
      handleHovering: s
    } = Sr(), u = () => o(e.rules, e.modelValue), d = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = U(() => {
      var {
        size: b,
        modelValue: M,
        color: $,
        closeColor: T,
        loadingColor: E,
        activeValue: P
      } = e;
      return {
        handle: {
          width: xe(b),
          height: xe(b),
          backgroundColor: M === P ? $ : T,
          color: E
        },
        ripple: {
          left: M === P ? xe(b, 0.5) : "-" + xe(b, 0.5),
          color: M === P ? $ : T || "#999",
          width: xe(b, 2),
          height: xe(b, 2)
        },
        track: {
          height: xe(b, 0.72),
          width: xe(b, 1.9),
          borderRadius: xe(b, 2 / 3),
          filter: M === P || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: M === P ? $ : T
        },
        switch: {
          height: xe(b, 1.2),
          width: xe(b, 2)
        }
      };
    }), f = U(() => {
      var {
        size: b = "5.333vw"
      } = e;
      return xe(b, 0.4);
    }), m = (b) => {
      var {
        onClick: M,
        onChange: $,
        disabled: T,
        loading: E,
        readonly: P,
        modelValue: D,
        activeValue: g,
        inactiveValue: V,
        "onUpdate:modelValue": I
      } = e;
      if (k(M, b), !(T || E || P || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var y = D === g ? V : g;
        k($, y), k(I, y), d();
      }
    }, w = (b) => {
      e.disabled || r != null && r.disabled.value || s(b);
    }, C = () => {
      k(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, p = {
      reset: C,
      validate: u,
      resetValidation: i
    };
    return k(n, p), {
      n: pw,
      classes: hw,
      switchActive: m,
      hovering: l,
      hover: w,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
iv.render = gw;
const Ca = iv;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var ck = Ca, yw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: H()
}, lv = Symbol("TABS_BIND_TAB_KEY");
function bw() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = dn(lv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function ww() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = un(lv);
  return n || Cn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: It,
  classes: Cw
} = re("tab");
function Sw(e, n) {
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
var sv = ne({
  name: "VarTab",
  directives: {
    Ripple: Ue
  },
  props: yw,
  setup(e) {
    var n = B(null), r = U(() => e.name), a = U(() => e.disabled), t = U(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = ww(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: w
    } = i, C = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    l(C);
    var p = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), b = () => e.disabled ? f.value : p() ? d.value : v.value, M = () => e.disabled ? It("$-tab--disabled") : p() ? It("$-tab--active") : It("$-tab--inactive"), $ = (T) => {
      var {
        disabled: E,
        name: P,
        onClick: D
      } = e;
      E || (k(D, P ?? o.value, T), s(C));
    };
    return le(() => e.name, w), le(() => e.disabled, w), {
      n: It,
      classes: Cw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: b,
      computeColorClass: M,
      handleClick: $
    };
  }
});
sv.render = Sw;
const Sa = sv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var mk = Sa, uv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function kw() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = dn(uv);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function $w() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = un(uv);
  return n || Cn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Tw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Pw,
  classes: Ow
} = re("tab-item");
function Vw(e, n) {
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
var dv = ne({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Gn
  },
  props: Tw,
  setup(e) {
    var n = B(!1), r = B(!1), a = U(() => e.name), {
      index: t,
      bindTabsItems: o
    } = $w(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: Pw,
      classes: Ow,
      current: n,
      initSlot: r
    };
  }
});
dv.render = Vw;
const ka = dv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var pk = ka, Mw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: Bw,
  classes: Ew
} = re("table");
function Iw(e, n) {
  return h(), O(
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
var vv = ne({
  name: "VarTable",
  props: Mw,
  setup() {
    return {
      toSizeUnit: me,
      n: Bw,
      classes: Ew,
      formatElevation: vn
    };
  }
});
vv.render = Iw;
const $a = vv;
$a.install = function(e) {
  e.component($a.name, $a);
};
var hk = $a;
function xl(e) {
  return ["horizontal", "vertical"].includes(e);
}
function Nw(e) {
  return ["auto", "always"].includes(e);
}
function Dw(e) {
  return ["normal", "reverse"].includes(e);
}
var Aw = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: xl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: xl
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
    validator: Nw
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: Dw
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Je(Lt, "cssMode"),
  stickyZIndex: Je(Lt, "zIndex"),
  offsetTop: Je(Lt, "offsetTop"),
  onClick: H(),
  onChange: H(),
  "onUpdate:active": H()
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
  n: zw,
  classes: Lw
} = re("tabs");
function Rw(e, n) {
  return h(), ge(
    xa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: fe(() => [A(
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
          [j(e.$slots, "default"), A(
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
var fv = ne({
  name: "VarTabs",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Aw,
  setup(e) {
    var n = B("0px"), r = B("0px"), a = B("0px"), t = B("0px"), o = B(!1), i = B(null), l = U(() => e.active), s = U(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = U(() => e.activeColor), d = U(() => e.inactiveColor), v = U(() => e.disabledColor), f = U(() => e.itemDirection), m = B(null), {
      tabList: w,
      bindTabList: C,
      length: p
    } = bw(), b = (y) => {
      var S, R = (S = y.name.value) != null ? S : y.index.value, {
        active: J,
        onChange: _,
        onClick: W
      } = e;
      k(e["onUpdate:active"], R), k(W, R), R !== J && k(_, R);
    }, M = () => w.find((y) => {
      var {
        name: S
      } = y;
      return e.active === S.value;
    }), $ = (y) => w.find((S) => {
      var {
        index: R
      } = S;
      return (y ?? e.active) === R.value;
    }), T = () => {
      if (p.value !== 0) {
        var {
          active: y
        } = e;
        if (nn(y)) {
          var S = y > p.value - 1 ? p.value - 1 : 0;
          return k(e["onUpdate:active"], S), $(S);
        }
      }
    }, E = () => {
      o.value = e.scrollable === "always" || w.length >= 5;
    }, P = (y) => {
      var {
        element: S
      } = y, R = S.value;
      R && (e.layoutDirection === "horizontal" ? (n.value = R.offsetWidth + "px", a.value = R.offsetLeft + "px") : (r.value = R.offsetHeight + "px", t.value = R.offsetTop + "px"));
    }, D = (y) => {
      var {
        element: S
      } = y;
      if (o.value) {
        var R = i.value, J = S.value;
        if (e.layoutDirection === "horizontal") {
          var _ = J.offsetLeft + J.offsetWidth / 2 - R.offsetWidth / 2;
          vt(R, {
            left: _,
            animation: $o
          });
        } else {
          var W = J.offsetTop + J.offsetHeight / 2 - R.offsetHeight / 2;
          vt(R, {
            top: W,
            animation: $o
          });
        }
      }
    }, g = () => {
      var y = M() || $() || T();
      !y || y.disabled.value || (E(), P(y), D(y));
    }, V = /* @__PURE__ */ function() {
      var y = ns(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), I = {
      active: l,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: g,
      onTabClick: b
    };
    return C(I), le(() => p.value, /* @__PURE__ */ ns(function* () {
      yield Nn(), g();
    })), le(() => e.active, g), le(() => e.scrollable, g), Cr(window, "resize", g), Tr(g), {
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
      n: zw,
      classes: Lw,
      resize: g,
      resizeSticky: V,
      formatElevation: vn
    };
  }
});
fv.render = Rw;
const Ta = fv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var gk = Ta, Uw = {
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
function rs(e, n, r, a, t, o, i) {
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
        rs(o, a, t, i, l, "next", s);
      }
      function l(s) {
        rs(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Fw
} = re("tabs-items");
function Yw(e, n) {
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
var cv = ne({
  name: "VarTabsItems",
  components: {
    VarSwipe: Wn
  },
  props: Uw,
  setup(e) {
    var n = B(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = kw(), o = (f) => r.find((m) => {
      var {
        name: w
      } = m;
      return f === w.value;
    }), i = (f) => r.find((m) => {
      var {
        index: w
      } = m;
      return f === w.value;
    }), l = (f) => o(f) || i(f), s = (f) => {
      var m, w = l(f);
      w && (r.forEach((C) => {
        var {
          setCurrent: p
        } = C;
        return p(!1);
      }), w.setCurrent(!0), (m = n.value) == null || m.to(w.index.value));
    }, u = (f) => {
      var m, w = r.find((p) => {
        var {
          index: b
        } = p;
        return b.value === f;
      }), C = (m = w.name.value) != null ? m : w.index.value;
      k(e["onUpdate:active"], C);
    }, d = () => n.value, v = {};
    return a(v), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ Hw(function* () {
      yield Nn(), s(e.active);
    })), {
      swipe: n,
      n: Fw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
cv.render = Yw;
const Pa = cv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var yk = Pa;
const jw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Ww = {
  "--badge-default-color": "#555"
}, Gw = {
  "--button-default-color": "#303030"
}, qw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Xw = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Kw = {
  "--checkbox-unchecked-color": "#fff"
}, Zw = {
  "--chip-default-color": "#555"
}, Jw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Qw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, _w = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, xw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, eC = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, nC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, rC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, aC = {
  "--popup-content-background-color": "#1e1e1e"
}, tC = {
  "--pull-refresh-background": "#303030"
}, oC = {
  "--radio-unchecked-color": "#fff"
}, iC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, lC = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, sC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, uC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, dC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, vC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, fC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, cC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, mC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, pC = {
  "--tabs-background": "#1e1e1e"
}, hC = {
  "--app-bar-color": "#272727"
}, gC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, yC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, bC = {
  "--menu-background-color": "#272727"
}, wC = {
  "--breadcrumb-inactive-color": "#aaa"
}, CC = {
  "--paper-background": "#303030"
}, SC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
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
const kC = vi({
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
}, Gw, Xw, qw, cC, Qw, sC, pC, vC, aC, _w, jw, Zw, Ww, mC, Jw, tC, dC, uC, nC, fC, eC, lC, oC, Kw, xw, rC, hC, gC, yC, bC, iC, wC, CC, SC);
var $C = {
  dark: kC
}, bk = null;
const fi = $C;
var hn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], en = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], as = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function TC(e) {
  return ["ampm", "24hr"].includes(e);
}
var PC = {
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
    validator: TC
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
}, mv = (e, n) => e === "24hr" || n === "am", Ui = (e, n, r) => {
  var a = hn.findIndex((o) => L(o) === L(r)), t = mv(e, n) ? r : en[a];
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
}, pv = (e) => {
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
  } = Ui(t, o, i), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: w,
      minute: C
    } = tn(l);
    f = w === v && a > C;
  }
  if (!l && s) {
    var {
      hour: p,
      minute: b
    } = tn(s);
    f = p === v && a < b;
  }
  if (l && s) {
    var {
      hour: M,
      minute: $
    } = tn(l), {
      hour: T,
      minute: E
    } = tn(s);
    f = T === v && a < E || M === v && a > $;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, hv = (e) => {
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
  } = Ui(t, o, i), m = !1, w = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: C,
      minute: p,
      second: b
    } = tn(s);
    m = C === f && p < l || p === l && a > b;
  }
  if (!s && u) {
    var {
      hour: M,
      minute: $,
      second: T
    } = tn(u);
    m = M === f && $ > l || $ === l && a > T;
  }
  if (s && u) {
    var {
      hour: E,
      minute: P,
      second: D
    } = tn(s), {
      hour: g,
      minute: V,
      second: I
    } = tn(u);
    m = E === f && P < l || g === f && V > l || E === f && P === l && a > D || g === f && V === l && a < I;
  }
  return (n = e.allowedTime) != null && n.seconds && (w = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || w;
}, {
  n: OC,
  classes: VC
} = re("time-picker");
function MC(e, n) {
  return h(), O(
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
var gv = ne({
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
    } = n, a = B(null), t = B([]), o = B([]), i = U(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = U(() => {
      if (e.rad !== void 0) {
        var p = e.rad / 30;
        return p >= 0 ? p : p + 12;
      }
    }), s = U(() => e.type === "hour" ? hn : as), u = (p, b) => {
      var M;
      p = (M = p) != null ? M : e.type === "minute" ? e.time.minute : e.time.second;
      var $ = e.type === "minute" ? pv : hv, T = {
        time: L(p),
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
      if (l.value === void 0)
        return e.color;
      var p = e.isInner ? en[l.value] : s.value[l.value];
      return s.value === as ? u() ? "#bdbdbd" : e.color : f(p) ? "#bdbdbd" : e.color;
    }, v = (p, b) => b ? l.value === p && e.isInner : l.value === p && (!e.isInner || e.type !== "hour"), f = (p) => {
      if (e.type === "hour") {
        if (mv(e.format, e.ampm))
          return t.value.includes(p);
        var b = hn.findIndex((M) => M === p);
        return o.value.includes(b);
      }
      return u(p, !0);
    }, m = (p, b, M) => {
      var $ = 2 * Math.PI / 12 * p - Math.PI / 2, T = 50 * (1 + Math.cos($)), E = 50 * (1 + Math.sin($)), P = () => v(p, M) ? f(b) ? {
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
        color: g
      } = P();
      return {
        left: T + "%",
        top: E + "%",
        backgroundColor: D,
        color: g
      };
    }, w = () => {
      var {
        width: p,
        height: b
      } = a.value.getBoundingClientRect();
      return {
        width: p,
        height: b
      };
    }, C = () => {
      if (l.value !== void 0) {
        var p = e.ampm === "am" ? hn : en;
        return Ma(p[l.value], 2, "0");
      }
    };
    return le([l, () => e.isInner], (p, b) => {
      var [M, $] = p, [T, E] = b, P = M === T && $ === E;
      if (!(P || e.type !== "hour" || l.value === void 0)) {
        var D = $ ? en[l.value] : C(), g = e.useSeconds ? ":" + e.time.second : "", V = D + ":" + e.time.minute + g;
        e.preventNextUpdate || r("update", V), r("change-prevent-update");
      }
    }), le(() => e.rad, (p, b) => {
      if (!(e.type === "hour" || p === void 0 || b === void 0)) {
        var M = p / 6 >= 0 ? p / 6 : p / 6 + 60, $ = b / 6 >= 0 ? b / 6 : b / 6 + 60;
        if (M !== $) {
          var T, {
            hourStr: E
          } = Ui(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var P = ie().minute(M).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            T = E + ":" + P + D;
          }
          if (e.type === "second") {
            var g = ie().second(M).format("ss"), V = e.useSeconds ? ":" + g : "";
            T = E + ":" + e.time.minute + V;
          }
          r("update", T);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (p) => {
      var [b, M, $] = p;
      if (t.value = [], b && !M) {
        var {
          hour: T
        } = tn(b), E = hn.filter((N) => L(N) > T), P = en.filter((N) => L(N) > T);
        t.value = [...E, ...P];
      }
      if (!b && M) {
        var {
          hour: D
        } = tn(M), g = hn.filter((N) => L(N) < D), V = en.filter((N) => L(N) < D);
        t.value = [...g, ...V];
      }
      if (b && M) {
        var {
          hour: I
        } = tn(b), {
          hour: y
        } = tn(M), S = hn.filter((N) => L(N) < y || L(N) > I), R = en.filter((N) => L(N) < y || L(N) > I);
        t.value = [...S, ...R];
      }
      if ($ != null && $.hours) {
        var {
          hours: J
        } = $, _ = hn.filter((N) => !J(L(N))), W = en.filter((N) => !J(L(N)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ..._, ...W])];
      }
      o.value = t.value.map((N) => en.findIndex((x) => N === x)).filter((N) => N >= 0);
    }, {
      immediate: !0
    }), {
      n: OC,
      classes: VC,
      hours24: en,
      timeScales: s,
      inner: a,
      handStyle: i,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: w,
      getStyle: m,
      activeItemIndex: l
    };
  }
});
gv.render = MC;
const BC = gv;
var {
  n: EC,
  classes: IC
} = re("time-picker"), NC = (e) => (Aa(""), e = e(), za(), e), DC = /* @__PURE__ */ NC(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), AC = {
  key: 0
};
function zC(e, n) {
  var r = oe("clock");
  return h(), O(
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
        ), DC, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ae(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), O("span", AC, ":")) : ee("v-if", !0), e.useSeconds ? (h(), O(
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
      )) : ee("v-if", !0)],
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
        [Q(
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
var yv = ne({
  name: "VarTimePicker",
  components: {
    Clock: BC
  },
  props: PC,
  setup(e) {
    var n = B(null), r = B(null), a = B(null), t = B(!1), o = B(!1), i = B(!1), l = B(!1), s = B(!1), u = B(void 0), d = B(0), v = B(0), f = B("hour"), m = B("am"), w = B(!1), C = B(!1), p = B({
      hour: "00",
      minute: "00",
      second: "00"
    }), b = Ie({
      x: 0,
      y: 0
    }), M = Ie({
      x: [],
      y: []
    }), $ = U(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), T = (F) => {
      k(e["onUpdate:modelValue"], F), k(e.onChange, F);
    }, E = (F) => F * 57.29577951308232, P = (F) => {
      l.value = !1, C.value = !1, f.value = F;
    }, D = (F) => {
      var {
        disableHour: Z
      } = a.value, K = hn.findIndex((X) => L(X) === L(p.value.hour)), z = F === "am" ? hn : en, Y = [...z.slice(K), ...z.slice(0, K)];
      return Y.find((X, de) => (o.value = de !== 0, !Z.includes(X)));
    }, g = (F) => {
      if (!e.readonly) {
        m.value = F;
        var Z = D(F);
        if (Z) {
          var K = e.useSeconds ? ":" + p.value.second : "", z = Ma(Z, 2, "0") + ":" + p.value.minute + K;
          T(z);
        }
      }
    }, V = (F, Z) => {
      var K = F >= M.x[0] && F <= M.x[1], z = Z >= M.y[0] && Z <= M.y[1];
      return K && z;
    }, I = (F) => {
      var Z = e.format === "24hr" ? "HH" : "hh", {
        hour: K,
        minute: z,
        second: Y
      } = tn(F);
      return {
        hour: ie().hour(K).format(Z),
        minute: ie().minute(z).format("mm"),
        second: ie().second(Y).format("ss")
      };
    }, y = (F) => {
      var Z = F / 30;
      return Z >= 0 ? Z : Z + 12;
    }, S = () => {
      var {
        width: F,
        height: Z
      } = a.value.getSize(), K = b.x - F / 2 - 8, z = b.x + F / 2 + 8, Y = b.y - Z / 2 - 8, X = b.y + Z / 2 + 8;
      return {
        rangeXMin: K,
        rangeXMax: z,
        rangeYMin: Y,
        rangeYMax: X
      };
    }, R = (F, Z, K) => {
      var {
        disableHour: z
      } = a.value;
      i.value = V(F, Z);
      var Y = Math.round(K / 30) * 30 + 90, X = y(Y), de = t.value ? hn[X] : en[X];
      if (z.includes(de) || (t.value = e.format === "24hr" ? V(F, Z) : !1), t.value === i.value) {
        var pe = t.value || m.value === "pm" ? en[X] : hn[X];
        w.value = z.includes(pe), !w.value && (u.value = Y, l.value = !0);
      }
    }, J = (F) => {
      var {
        disableHour: Z
      } = a.value, K = Math.round(F / 6) * 6 + 90, z = K / 6 >= 0 ? K / 6 : K / 6 + 60, Y = {
        time: z,
        format: e.format,
        ampm: m.value,
        hour: p.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      C.value = pv(Y), !C.value && (d.value = K, s.value = !0);
    }, _ = (F) => {
      var {
        disableHour: Z
      } = a.value, K = Math.round(F / 6) * 6 + 90, z = K / 6 >= 0 ? K / 6 : K / 6 + 60, Y = {
        time: z,
        format: e.format,
        ampm: m.value,
        hour: p.value.hour,
        minute: L(p.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      hv(Y) || (v.value = K);
    }, W = () => {
      var {
        left: F,
        top: Z,
        width: K,
        height: z
      } = n.value.getBoundingClientRect();
      if (b.x = F + K / 2, b.y = Z + z / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Y,
          rangeXMax: X,
          rangeYMin: de,
          rangeYMax: pe
        } = S();
        M.x = [Y, X], M.y = [de, pe];
      }
    }, N = (F) => {
      if (F.preventDefault(), !e.readonly) {
        W();
        var {
          clientX: Z,
          clientY: K
        } = F.touches[0], z = Z - b.x, Y = K - b.y, X = Math.round(E(Math.atan2(Y, z)));
        f.value === "hour" ? R(Z, K, X) : f.value === "minute" ? J(X) : _(X);
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
          second: z
        } = tn(F), Y = ie().hour(Z).format("hh"), X = ie().hour(Z).format("HH"), de = ie().minute(K).format("mm"), pe = ie().second(z).format("ss");
        u.value = (Y === "12" ? 0 : L(Y)) * 30, d.value = L(de) * 6, v.value = L(pe) * 6, p.value = I(F), e.format !== "24hr" && (m.value = Ma("" + Z, 2, "0") === X && en.includes(X) ? "pm" : "am"), t.value = e.format === "24hr" && en.includes(X);
      }
    }, {
      immediate: !0
    }), {
      n: EC,
      classes: IC,
      getRad: $,
      time: p,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: N,
      checkPanel: P,
      checkAmpm: g,
      end: x,
      update: T,
      changePreventUpdate: te,
      formatElevation: vn
    };
  }
});
yv.render = zC;
const Oa = yv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var wk = Oa, LC = {
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
function ts(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function os(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ts(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ts(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: RC,
  classes: UC
} = re("uploader"), HC = 0, FC = ["onClick"], YC = ["onClick"], jC = ["src", "alt"], WC = ["multiple", "accept", "capture", "disabled"], GC = ["src"];
function qC(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = oe("var-popup"), i = Me("ripple"), l = Me("hover");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
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
          ), e.removable ? (h(), O(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Bn((u) => e.handleRemove(s), ["stop"])
            },
            [Q(
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
            YC
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
            jC
          )) : ee("v-if", !0), A(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          FC
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? we((h(), O(
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
          WC
        ), j(e.$slots, "default", {}, () => [Q(
          r,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        ), Q(
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
    ), Q(
      t,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), Q(
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
            GC
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
var bv = ne({
  name: "VarUploader",
  directives: {
    Ripple: Ue,
    Hover: Dn
  },
  components: {
    VarIcon: $e,
    VarPopup: yn,
    VarFormDetails: Ge,
    VarHoverOverlay: on
  },
  props: LC,
  setup(e) {
    var n = B(null), r = B(!1), a = B(null), t = U(() => {
      var {
        maxlength: N,
        modelValue: {
          length: x
        }
      } = e;
      return nn(N) ? x + " / " + N : "";
    }), {
      form: o,
      bindForm: i
    } = kn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Sn(), {
      hovering: v,
      handleHovering: f
    } = Sr(), m = U(() => {
      var {
        modelValue: N,
        hideList: x
      } = e;
      return x ? [] : N;
    }), w = (N) => {
      var {
        disabled: x,
        readonly: te,
        previewed: F
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || x || te || !F)) {
        var {
          url: Z
        } = N;
        if (Re(Z) && Wi(Z)) {
          In(Z);
          return;
        }
        Re(Z) && Gi(Z) && (a.value = N, r.value = !0);
      }
    }, C = (N) => ({
      id: HC++,
      url: "",
      cover: "",
      name: N.name,
      file: N
    }), p = (N) => {
      var x = N.target, {
        files: te
      } = x;
      return Array.from(te);
    }, b = (N) => new Promise((x) => {
      var te = new FileReader();
      te.onload = () => {
        var F = te.result;
        N.file.type.startsWith("image") && (N.cover = F), N.url = F, x(N);
      }, te.readAsDataURL(N.file);
    }), M = (N) => N.map(b), $ = (N) => {
      var {
        onBeforeRead: x
      } = e;
      return N.map((te) => new Promise((F) => {
        x || F({
          valid: !0,
          varFile: te
        });
        var Z = k(x, Ie(te));
        Z = Ce(Z) ? Z : [Z], Promise.all(Z).then((K) => {
          F({
            valid: !K.some((z) => !z),
            varFile: te
          });
        });
      }));
    }, T = /* @__PURE__ */ function() {
      var N = os(function* (x) {
        var {
          maxsize: te,
          maxlength: F,
          modelValue: Z,
          onOversize: K,
          onAfterRead: z,
          readonly: Y,
          disabled: X
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || X || Y)) {
          var de = (qe) => qe.filter((mn) => mn.file.size > L(te) ? (k(K, Ie(mn)), !1) : !0), pe = (qe) => {
            var mn = Math.min(qe.length, L(F) - Z.length);
            return qe.slice(0, mn);
          }, Ae = p(x), Ee = Ae.map(C);
          Ee = te != null ? de(Ee) : Ee, Ee = F != null ? pe(Ee) : Ee;
          var Ze = yield Promise.all(M(Ee)), Tn = yield Promise.all($(Ze)), Ln = Tn.filter((qe) => {
            var {
              valid: mn
            } = qe;
            return mn;
          }).map((qe) => {
            var {
              varFile: mn
            } = qe;
            return mn;
          });
          k(e["onUpdate:modelValue"], [...Z, ...Ln]), x.target.value = "", Ln.forEach((qe) => k(z, Ie(qe)));
        }
      });
      return function(te) {
        return N.apply(this, arguments);
      };
    }(), E = /* @__PURE__ */ function() {
      var N = os(function* (x) {
        var {
          disabled: te,
          readonly: F,
          modelValue: Z,
          onBeforeRemove: K,
          onRemove: z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || te || F)) {
          if (K) {
            var Y = k(K, Ie(x));
            if (Y = Ce(Y) ? Y : [Y], (yield Promise.all(Y)).some((de) => !de))
              return;
          }
          var X = Z.filter((de) => de !== x);
          k(z, Ie(x)), S("onRemove"), k(e["onUpdate:modelValue"], X);
        }
      });
      return function(te) {
        return N.apply(this, arguments);
      };
    }(), P = () => e.modelValue.filter((N) => N.state === "success"), D = () => e.modelValue.filter((N) => N.state === "error"), g = () => e.modelValue.filter((N) => N.state === "loading"), V = () => {
      n.value.click();
    }, I = () => {
      a.value = null, r.value = !1, In.close();
    }, y = {
      getSuccess: P,
      getError: D,
      getLoading: g
    }, S = (N) => {
      Be(() => {
        var {
          validateTrigger: x,
          rules: te,
          modelValue: F
        } = e;
        s(x, N, te, F, y);
      });
    }, R = !1, J = () => u(e.rules, e.modelValue, y), _ = () => {
      R = !0, k(e["onUpdate:modelValue"], []), d();
    }, W = {
      validate: J,
      resetValidation: d,
      reset: _
    };
    return k(i, W), le(() => e.modelValue, () => {
      !R && S("onChange"), R = !1;
    }, {
      deep: !0
    }), {
      n: RC,
      classes: UC,
      formatElevation: vn,
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
      isHTMLSupportVideo: Gi,
      isHTMLSupportImage: Wi,
      preview: w,
      handleChange: T,
      handleRemove: E,
      getSuccess: P,
      getError: D,
      getLoading: g,
      validate: J,
      resetValidation: d,
      reset: _,
      chooseFile: V,
      closePreview: I
    };
  }
});
bv.render = qC;
const Va = bv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Ck = Va;
const XC = "2.9.5";
function KC(e) {
  Kn.install && e.use(Kn), Br.install && e.use(Br), Er.install && e.use(Er), Ir.install && e.use(Ir), Nr.install && e.use(Nr), ur.install && e.use(ur), Dr.install && e.use(Dr), Ar.install && e.use(Ar), zr.install && e.use(zr), Lr.install && e.use(Lr), Ke.install && e.use(Ke), Rr.install && e.use(Rr), Ur.install && e.use(Ur), dr.install && e.use(dr), vr.install && e.use(vr), Hr.install && e.use(Hr), fr.install && e.use(fr), Fr.install && e.use(Fr), Yr.install && e.use(Yr), jr.install && e.use(jr), cn.install && e.use(cn), Wr.install && e.use(Wr), Gr.install && e.use(Gr), Xr.install && e.use(Xr), Zn.install && e.use(Zn), Kr.install && e.use(Kr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), jn.install && e.use(jn), Ge.install && e.use(Ge), Dn.install && e.use(Dn), on.install && e.use(on), $e.install && e.use($e), Qr.install && e.use(Qr), In.install && e.use(In), _r.install && e.use(_r), xr.install && e.use(xr), gr.install && e.use(gr), ft.install && e.use(ft), ea.install && e.use(ea), na.install && e.use(na), Vn.install && e.use(Vn), ii.install && e.use(ii), Eo.install && e.use(Eo), Xn.install && e.use(Xn), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), Ia.install && e.use(Ia), yn.install && e.use(yn), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), Ue.install && e.use(Ue), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), di.install && e.use(di), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), qn.install && e.use(qn), gt.install && e.use(gt), Wn.install && e.use(Wn), Gn.install && e.use(Gn), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), $a.install && e.use($a), Ta.install && e.use(Ta), Pa.install && e.use(Pa), fi.install && e.use(fi), Oa.install && e.use(Oa), pr.install && e.use(pr), Va.install && e.use(Va);
}
const Sk = {
  version: XC,
  install: KC,
  ActionSheet: Kn,
  AppBar: Br,
  Avatar: Er,
  AvatarGroup: Ir,
  BackTop: Nr,
  Badge: ur,
  BottomNavigation: Dr,
  BottomNavigationItem: Ar,
  Breadcrumb: zr,
  Breadcrumbs: Lr,
  Button: Ke,
  ButtonGroup: Rr,
  Card: Ur,
  Cell: dr,
  Checkbox: vr,
  CheckboxGroup: Hr,
  Chip: fr,
  Col: Fr,
  Collapse: Yr,
  CollapseItem: jr,
  Context: cn,
  Countdown: Wr,
  Counter: Gr,
  DatePicker: Xr,
  Dialog: Zn,
  Divider: Kr,
  Ellipsis: Zr,
  Fab: Jr,
  Form: jn,
  FormDetails: Ge,
  Hover: Dn,
  HoverOverlay: on,
  Icon: $e,
  Image: Qr,
  ImagePreview: In,
  IndexAnchor: _r,
  IndexBar: xr,
  Input: gr,
  Lazy: ft,
  Link: ea,
  List: na,
  Loading: Vn,
  LoadingBar: ii,
  Locale: Eo,
  Menu: Xn,
  Option: ra,
  Overlay: aa,
  Pagination: ta,
  Paper: oa,
  Picker: Ia,
  Popup: yn,
  Progress: ia,
  PullRefresh: la,
  Radio: sa,
  RadioGroup: ua,
  Rate: da,
  Result: va,
  Ripple: Ue,
  Row: fa,
  Select: ca,
  Skeleton: ma,
  Slider: pa,
  Snackbar: di,
  Space: ga,
  Step: ya,
  Steps: ba,
  Sticky: qn,
  StyleProvider: gt,
  Swipe: Wn,
  SwipeItem: Gn,
  Switch: Ca,
  Tab: Sa,
  TabItem: ka,
  Table: $a,
  Tabs: Ta,
  TabsItems: Pa,
  Themes: fi,
  TimePicker: Oa,
  Tooltip: pr,
  Uploader: Va
};
export {
  Kn as ActionSheet,
  Br as AppBar,
  Er as Avatar,
  Ir as AvatarGroup,
  Nr as BackTop,
  ur as Badge,
  Dr as BottomNavigation,
  Ar as BottomNavigationItem,
  zr as Breadcrumb,
  Lr as Breadcrumbs,
  Ke as Button,
  Rr as ButtonGroup,
  Ur as Card,
  dr as Cell,
  vr as Checkbox,
  Hr as CheckboxGroup,
  fr as Chip,
  Fr as Col,
  Yr as Collapse,
  jr as CollapseItem,
  cn as Context,
  Wr as Countdown,
  Gr as Counter,
  Xr as DatePicker,
  Zn as Dialog,
  Kr as Divider,
  Zr as Ellipsis,
  Jr as Fab,
  jn as Form,
  Ge as FormDetails,
  Dn as Hover,
  on as HoverOverlay,
  $e as Icon,
  Qr as Image,
  In as ImagePreview,
  _r as IndexAnchor,
  xr as IndexBar,
  gr as Input,
  ft as Lazy,
  ea as Link,
  na as List,
  Vn as Loading,
  ii as LoadingBar,
  Eo as Locale,
  Xn as Menu,
  ra as Option,
  aa as Overlay,
  Do as PIXEL,
  ta as Pagination,
  oa as Paper,
  Ia as Picker,
  yn as Popup,
  ia as Progress,
  la as PullRefresh,
  sa as Radio,
  ua as RadioGroup,
  da as Rate,
  va as Result,
  Ue as Ripple,
  fa as Row,
  Li as SNACKBAR_TYPE,
  ca as Select,
  ma as Skeleton,
  pa as Slider,
  di as Snackbar,
  ga as Space,
  ya as Step,
  ba as Steps,
  qn as Sticky,
  gt as StyleProvider,
  Wn as Swipe,
  Gn as SwipeItem,
  Ca as Switch,
  Sa as Tab,
  ka as TabItem,
  $a as Table,
  Ta as Tabs,
  Pa as TabsItems,
  fi as Themes,
  Oa as TimePicker,
  pr as Tooltip,
  Va as Uploader,
  nS as _ActionSheetComponent,
  rS as _AppBarComponent,
  tS as _AvatarComponent,
  oS as _AvatarGroupComponent,
  dS as _BackTopComponent,
  vS as _BadgeComponent,
  fS as _BottomNavigationComponent,
  cS as _BottomNavigationItemComponent,
  mS as _BreadcrumbComponent,
  pS as _BreadcrumbsComponent,
  uS as _ButtonComponent,
  hS as _ButtonGroupComponent,
  gS as _CardComponent,
  yS as _CellComponent,
  wS as _CheckboxComponent,
  CS as _CheckboxGroupComponent,
  SS as _ChipComponent,
  kS as _ColComponent,
  $S as _CollapseComponent,
  TS as _CollapseItemComponent,
  JC as _ContextComponent,
  PS as _CountdownComponent,
  OS as _CounterComponent,
  VS as _DatePickerComponent,
  MS as _DialogComponent,
  BS as _DividerComponent,
  IS as _EllipsisComponent,
  NS as _FabComponent,
  DS as _FormComponent,
  bS as _FormDetailsComponent,
  sS as _HoverComponent,
  lS as _HoverOverlayComponent,
  xC as _IconComponent,
  AS as _ImageComponent,
  RS as _ImagePreviewComponent,
  HS as _IndexAnchorComponent,
  FS as _IndexBarComponent,
  YS as _InputComponent,
  aS as _LazyComponent,
  jS as _LinkComponent,
  WS as _ListComponent,
  GS as _LoadingBarComponent,
  iS as _LoadingComponent,
  eS as _LocaleComponent,
  qS as _MenuComponent,
  XS as _OptionComponent,
  KS as _OverlayComponent,
  ZS as _PaginationComponent,
  JS as _PaperComponent,
  QS as _PickerComponent,
  _C as _PopupComponent,
  _S as _ProgressComponent,
  xS as _PullRefreshComponent,
  ek as _RadioComponent,
  nk as _RadioGroupComponent,
  rk as _RateComponent,
  ak as _ResultComponent,
  QC as _RippleComponent,
  tk as _RowComponent,
  ok as _SelectComponent,
  ik as _SkeletonComponent,
  lk as _SliderComponent,
  sk as _SnackbarComponent,
  uk as _SpaceComponent,
  dk as _StepComponent,
  vk as _StepsComponent,
  US as _StickyComponent,
  fk as _StyleProviderComponent,
  zS as _SwipeComponent,
  LS as _SwipeItemComponent,
  ck as _SwitchComponent,
  mk as _TabComponent,
  pk as _TabItemComponent,
  hk as _TableComponent,
  gk as _TabsComponent,
  yk as _TabsItemsComponent,
  bk as _ThemesComponent,
  wk as _TimePickerComponent,
  ES as _TooltipComponent,
  Ck as _UploaderComponent,
  uf as actionSheetProps,
  wi as add,
  hf as appBarProps,
  Ff as avatarGroupProps,
  Af as avatarProps,
  yc as backTopProps,
  $c as badgeProps,
  Dc as bottomNavigationItemProps,
  Vc as bottomNavigationProps,
  Hc as breadcrumbProps,
  qc as breadcrumbsProps,
  vc as buttonProps,
  am as cardProps,
  um as cellProps,
  Pm as checkboxGroupProps,
  ym as checkboxProps,
  Im as chipProps,
  Rm as colProps,
  Km as collapseItemProps,
  Wm as collapseProps,
  _m as countdownProps,
  Kp as counterProps,
  ph as datePickerProps,
  Sk as default,
  Fe as defaultLazyOptions,
  Ih as dialogProps,
  Lh as dividerProps,
  Ms as enUS,
  cm as formDetailsProps,
  dy as formProps,
  Os as iconProps,
  Ds as imageCache,
  Iy as imagePreviewProps,
  py as imageProps,
  jy as indexAnchorProps,
  Xy as indexBarProps,
  xy as inputProps,
  KC as install,
  lb as linkProps,
  vb as listProps,
  hb as loadingBarProps,
  or as loadingProps,
  Ob as menuProps,
  Es as merge,
  Nb as optionProps,
  Lb as overlayProps,
  je as pack,
  Bs as packs,
  Ub as paginationProps,
  Wb as paperProps,
  Kb as pickerProps,
  bt as popupProps,
  r0 as progressProps,
  u0 as pullRefreshProps,
  b0 as radioGroupProps,
  f0 as radioProps,
  k0 as rateProps,
  O0 as resultProps,
  c1 as rowProps,
  y1 as selectProps,
  S1 as skeletonProps,
  O1 as sliderProps,
  Jd as snackbarProps,
  Q1 as spaceProps,
  ew as stepProps,
  sw as stepsProps,
  Lt as stickyProps,
  vw as styleProviderProps,
  ud as swipeProps,
  mw as switchProps,
  Tw as tabItemProps,
  yw as tabProps,
  Mw as tableProps,
  Uw as tabsItemsProps,
  Aw as tabsProps,
  PC as timePickerProps,
  Zg as tooltipProps,
  LC as uploaderProps,
  Ci as use,
  Sr as useHoverOverlay,
  bi as useLocale,
  XC as version,
  yi as zhCN
};
