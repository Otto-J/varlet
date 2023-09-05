import { reactive as Ye, onMounted as kt, nextTick as Ue, onActivated as hn, isRef as qv, watch as de, onBeforeUnmount as vo, onDeactivated as ea, unref as ua, onUnmounted as $t, inject as Xv, getCurrentInstance as ra, computed as A, provide as Kv, isVNode as Tt, ref as k, Comment as Zv, Fragment as Ve, createApp as Jv, h as Is, onBeforeMount as Qv, defineComponent as ne, createVNode as x, Teleport as Zr, Transition as je, withDirectives as Te, vShow as Lr, mergeProps as ze, openBlock as p, createBlock as Se, resolveDynamicComponent as na, normalizeClass as c, normalizeStyle as W, resolveComponent as ue, resolveDirective as Le, withCtx as me, createElementVNode as V, renderSlot as Y, toDisplayString as le, createElementBlock as T, renderList as Ge, createCommentVNode as ee, onUpdated as Pt, createTextVNode as $e, pushScopeId as pn, popScopeId as gn, withModifiers as Tr, normalizeProps as Ot, guardReactiveProps as fo, vModelText as _v, createSlots as _t, withKeys as ll, toRaw as sl, TransitionGroup as xv } from "vue";
var Ms = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, oS = Ye(Ms);
const yr = Ye(Ms), Je = (e) => typeof e == "string", Ni = (e) => typeof e == "boolean", mr = (e) => typeof e == "number", Di = (e) => Object.prototype.toString.call(e) === "[object Object]", ef = (e) => typeof e == "object" && e !== null, aa = (e) => typeof e == "function", Be = (e) => Array.isArray(e), rf = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Yr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Ai = (e) => e === window, nf = () => bn() && "ontouchstart" in window, z = (e) => e == null ? 0 : Je(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Ni(e) ? Number(e) : e, xt = (e, r) => {
  if (e.length) {
    const n = e.indexOf(r);
    if (n > -1)
      return e.splice(n, 1);
  }
}, zi = (e, r = 200) => {
  let n, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), n && window.clearTimeout(n), i >= r ? (e.apply(this, o), a = l) : n = window.setTimeout(() => {
      t.apply(this, o);
    }, r - i);
  };
}, bn = () => typeof window < "u", ul = (e) => [...new Set(e)], Bs = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), af = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), tf = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Gt = (e) => Be(e) ? e : [e], un = (e, r, n) => Math.min(n, Math.max(r, e)), of = (e, r) => un(e, 0, r.length - 1), Es = () => typeof globalThis < "u" ? globalThis : bn() ? window : typeof global < "u" ? global : self, pa = (e) => {
  const r = Es();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e);
}, dl = (e) => {
  const r = Es();
  r.cancelAnimationFrame ? r.cancelAnimationFrame(e) : r.clearTimeout(e);
}, qt = () => new Promise((e) => {
  pa(e);
}), dr = () => new Promise((e) => {
  pa(() => {
    pa(e);
  });
}), Vn = (e) => window.getComputedStyle(e), Qe = (e) => {
  if (Ai(e)) {
    const r = e.innerWidth, n = e.innerHeight, a = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: r,
      bottom: n,
      width: r,
      height: n
    };
    return Object.assign(Object.assign({}, a), { toJSON: () => a });
  }
  return e.getBoundingClientRect();
}, lf = (e) => {
  const { top: r, bottom: n, left: a, right: t } = Qe(e), { width: o, height: l } = Qe(window), i = a <= o && t >= 0, s = r <= l && n >= 0;
  return i && s;
};
function tr(e) {
  let r = !1;
  kt(() => {
    e(), Ue(() => {
      r = !0;
    });
  }), hn(() => {
    r && e();
  });
}
function dn(e, r, n, a = {}) {
  if (!bn())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => aa(m) ? m() : ua(m), u = (m) => {
    if (l || i)
      return;
    const y = s(m);
    y && (y.addEventListener(r, n, {
      passive: t,
      capture: o
    }), l = !0);
  }, d = (m) => {
    if (!l || i)
      return;
    const y = s(m);
    y && (y.removeEventListener(r, n, {
      capture: o
    }), l = !1);
  };
  let v;
  qv(e) && (v = de(() => e.value, (m, y) => {
    d(y), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return tr(() => {
    u(e);
  }), vo(() => {
    d(e);
  }), ea(() => {
    d(e);
  }), f;
}
function Vs(e, r, n) {
  if (!bn())
    return;
  dn(document, r, (t) => {
    const o = aa(e) ? e() : ua(e);
    o && !o.contains(t.target) && n(t);
  });
}
function co(e) {
  $t(() => {
    e();
  }), ea(() => {
    e();
  });
}
var sf = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function uf(e) {
  const r = ra();
  return e in r.provides;
}
function or(e) {
  if (!uf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = Xv(e), { childInstances: n, collect: a, clear: t } = r, o = sf(r, ["childInstances", "collect", "clear"]), l = ra();
  return {
    index: A(() => n.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      kt(() => {
        Ue().then(() => {
          a(l, u);
        });
      }), vo(() => {
        Ue().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function df(e) {
  const r = [], n = (a) => {
    if (a != null && a.component) {
      n(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Tt(t) && (r.push(t), n(t));
    });
  };
  return n(e), r;
}
function ir(e) {
  const r = ra(), n = Ye([]), a = [], t = A(() => n.length), o = () => {
    const u = df(r.subTree);
    n.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    n.push(u), a.push(d), o();
  }, i = (u, d) => {
    xt(n, u), xt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Kv(e, Object.assign({
        childInstances: n,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function It(e) {
  dn(() => window, "resize", e, { passive: !0 }), dn(() => window, "orientationchange", e, { passive: !0 });
}
function vf(e, r) {
  const n = k(!1);
  return de(e, (a) => {
    r === a && (n.value = !0);
  }, { immediate: !0 }), n;
}
function ff(e, r) {
  if (e > r)
    return "horizontal";
  if (r > e)
    return "vertical";
}
function mo() {
  const e = k(0), r = k(0), n = k(0), a = k(0), t = k(0), o = k(0), l = k(0), i = k(0), s = k(0), u = k(0), d = k(), v = k(!1), f = k(!1), m = k(0), y = k(0);
  let g = null;
  const h = () => {
    e.value = 0, r.value = 0, n.value = 0, a.value = 0, t.value = 0, o.value = 0, l.value = 0, i.value = 0, s.value = 0, u.value = 0, d.value = void 0, v.value = !1, f.value = !1, m.value = 0, y.value = 0;
  };
  return {
    startX: e,
    startY: r,
    deltaX: n,
    deltaY: a,
    offsetX: t,
    offsetY: o,
    prevX: l,
    prevY: i,
    moveX: s,
    moveY: u,
    direction: d,
    touching: v,
    dragging: f,
    startTime: m,
    distance: y,
    resetTouch: h,
    startTouch: (S) => {
      h();
      const { clientX: E, clientY: I } = S.touches[0];
      e.value = E, r.value = I, l.value = E, i.value = I, v.value = !0, m.value = performance.now(), f.value = !1, g && window.cancelAnimationFrame(g);
    },
    moveTouch: (S) => {
      const { clientX: E, clientY: I } = S.touches[0];
      f.value = !0, n.value = E - e.value, a.value = I - r.value, t.value = Math.abs(n.value), o.value = Math.abs(a.value), y.value = Math.sqrt(t.value ** 2 + o.value ** 2), s.value = E - l.value, u.value = I - i.value, d.value || (d.value = ff(t.value, o.value)), l.value = E, i.value = I;
    },
    endTouch: () => {
      v.value = !1, g = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    }
  };
}
function vl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function fl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
function Fo() {
  return Fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Fo.apply(this, arguments);
}
function xe(e, r) {
  return Array.isArray(r) ? r.reduce((n, a) => (n[a] = e[a], n), {}) : e[r];
}
function ie(e, r) {
  var n = r ?? e;
  return n.install = function(a) {
    var {
      name: t
    } = e;
    t && a.component(t, e);
  }, n;
}
function cf(e) {
  var r = Jv(e), n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: r.mount(n),
    unmount() {
      r.unmount(), document.body.removeChild(n);
    }
  };
}
function ta(e, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {});
  var a = {
    setup() {
      return () => Is(e, Fo({}, r, n));
    }
  }, {
    unmount: t
  } = cf(a);
  return {
    unmountInstance: t
  };
}
function Ns(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== Zv) {
      if (n.type === Ve && Be(n.children)) {
        n.children.forEach((a) => {
          r.push(a);
        });
        return;
      }
      r.push(n);
    }
  }), r;
}
function Or() {
  var e = k(""), r = /* @__PURE__ */ function() {
    var t = fl(function* (o, l, i) {
      if (!Be(o) || !o.length)
        return !0;
      var s = yield Promise.all(o.map((u) => u(l, i)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(l, i, s) {
      return t.apply(this, arguments);
    };
  }(), n = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = fl(function* (o, l, i, s, u) {
      o.includes(l) && (yield r(i, s, u)) && (e.value = "");
    });
    return function(l, i, s, u, d) {
      return t.apply(this, arguments);
    };
  }();
  return {
    errorMessage: e,
    validate: r,
    resetValidation: n,
    validateWithTrigger: a
  };
}
function mf(e) {
  dn(() => window, "hashchange", e), dn(() => window, "popstate", e);
}
function oa() {
  var e = k(!1);
  return hn(() => {
    e.value = !1;
  }), ea(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ae(e) {
  var r = "var", n = r + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", r) : o.startsWith("--") ? "" + n + o : n + "__" + o : n, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (Be(s)) {
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
function C(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  if (Be(e))
    return e.map((t) => t(...n));
  if (e)
    return e(...n);
}
function R(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function pr(e, r) {
  return e === !1 ? null : (e === !0 && r && (e = r), "var-elevation--" + e);
}
function ga(e, r, n) {
  n === void 0 && (n = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = n, i = t ?? "onUpdate:" + r.toString(), s = () => e[r] != null ? e[r] : o;
  if (!a)
    return A({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : C(e[i], d);
      }
    });
  var u = k(s());
  return de(() => e[r], () => {
    u.value = s();
  }), de(() => u.value, (d) => {
    l ? l(i, d) : C(e[i], d);
  }), u;
}
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, eo.apply(this, arguments);
}
var {
  n: Ds
} = ae("ripple"), cl = 250;
function hf(e) {
  var {
    zIndex: r,
    position: n
  } = Vn(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function pf(e, r) {
  var {
    top: n,
    left: a
  } = Qe(e), {
    clientWidth: t,
    clientHeight: o
  } = e, l = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, i = l * 2, s = r.touches[0].clientX - a, u = r.touches[0].clientY - n, d = (t - l * 2) / 2, v = (o - l * 2) / 2, f = s - l, m = u - l;
  return {
    x: f,
    y: m,
    centerX: d,
    centerY: v,
    size: i
  };
}
function As(e) {
  var r = this._ripple;
  if (r.removeRipple(), !(r.disabled || r.tasker || !yr.enableRipple)) {
    var n = () => {
      r.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = pf(this, e), s = document.createElement("div");
      s.classList.add(Ds()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), hf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function jo() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + Ds());
    if (n.length) {
      var a = n[n.length - 1], t = cl - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, cl);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(r, 30) : r();
}
function zs() {
  if (!(!nf() || !yr.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function gf(e, r) {
  var n;
  e._ripple = eo({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
    removeRipple: jo.bind(e)
  }), e.addEventListener("touchstart", As, {
    passive: !0
  }), e.addEventListener("touchmove", zs, {
    passive: !0
  }), e.addEventListener("dragstart", jo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function bf(e) {
  e.removeEventListener("touchstart", As), e.removeEventListener("touchmove", zs), e.removeEventListener("dragstart", jo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function yf(e, r) {
  var n, a, t, o, l = {
    color: (n = r.value) == null ? void 0 : n.color,
    disabled: (a = r.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = eo({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Ls = {
  mounted: gf,
  unmounted: bf,
  updated: yf,
  install(e) {
    e.directive("ripple", this);
  }
}, iS = Ls;
const Xe = Ls;
var Mt = {
  show: Boolean,
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: String,
  overlayStyle: Object,
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
  safeArea: Boolean,
  safeAreaTop: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  onClickOverlay: R(),
  "onUpdate:show": R(),
  // internal for Dialog
  onRouteChange: R()
};
function Rs() {
  var e = Object.keys(yr.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function zt(e) {
  yr.locks[e] = 1, Rs();
}
function Lt(e) {
  delete yr.locks[e], Rs();
}
function ho(e, r) {
  var {
    uid: n
  } = ra();
  r && de(r, (a) => {
    a === !1 ? Lt(n) : a === !0 && e() === !0 && zt(n);
  }), de(e, (a) => {
    r && r() === !1 || (a === !0 ? zt(n) : Lt(n));
  }), Qv(() => {
    r && r() === !1 || e() === !0 && zt(n);
  }), $t(() => {
    r && r() === !1 || e() === !0 && Lt(n);
  }), hn(() => {
    r && r() === !1 || e() === !0 && zt(n);
  }), ea(() => {
    r && r() === !1 || e() === !0 && Lt(n);
  });
}
function Bt(e, r) {
  var n = k(yr.zIndex);
  return de(e, (a) => {
    a && (yr.zIndex += r, n.value = yr.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: n
  };
}
var Us = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function wf() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = or(Us);
  return {
    index: n,
    popup: r,
    bindPopup: e
  };
}
function Cf() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(Us);
  return {
    length: n,
    popupItems: r,
    bindPopupItems: e
  };
}
function Wo() {
  return Wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Wo.apply(this, arguments);
}
function ml(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Tt(e);
}
var {
  n: Br,
  classes: Vo
} = ae("popup");
const Rr = ne({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Mt,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = vf(() => e.show, !0), {
      zIndex: o
    } = Bt(() => e.show, 3), {
      disabled: l
    } = oa(), {
      bindPopupItems: i
    } = Cf(), s = () => {
      var {
        closeOnClickOverlay: f,
        onClickOverlay: m
      } = e;
      C(m), f && C(e["onUpdate:show"], !1);
    }, u = () => {
      var {
        overlayClass: f = "",
        overlayStyle: m
      } = e;
      return x("div", {
        class: Vo(Br("overlay"), f),
        style: Wo({
          zIndex: o.value - 1
        }, m),
        onClick: s
      }, null);
    }, d = () => Te(x("div", ze({
      class: Vo(Br("content"), Br("--" + e.position), [e.defaultStyle, Br("--content-background-color")], [e.defaultStyle, Br("$-elevation--3")], [e.safeArea, Br("--safe-area")], [e.safeAreaTop, Br("--safe-area-top")]),
      style: {
        zIndex: o.value
      }
    }, a), [t.value && C(n.default)]), [[Lr, e.show]]), v = () => {
      var f;
      return x(je, {
        name: Br("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Te(x("div", {
          class: Vo(Br("$--box"), Br()),
          style: {
            zIndex: o.value - 2
          }
        }, [e.overlay && u(), x(je, {
          name: e.transition || Br("$-pop-" + e.position)
        }, ml(f = d()) ? f : {
          default: () => [f]
        })]), [[Lr, e.show]])]
      });
    };
    return ho(() => e.show, () => e.lockScroll), de(() => e.show, (f) => {
      C(f ? e.onOpen : e.onClose);
    }), i({
      show: A(() => e.show)
    }), mf(() => C(e.onRouteChange)), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return x(Zr, {
          to: f,
          disabled: l.value
        }, ml(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
ie(Rr);
var lS = Rr, Hs = {
  name: String,
  size: [Number, String],
  color: String,
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  animationClass: String,
  onClick: R()
};
function Pr(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function hl(e, r) {
  console.warn("Varlet [" + e + "]: " + r);
}
function Sf(e) {
  var {
    left: r
  } = Qe(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function pl(e) {
  var {
    top: r
  } = Qe(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function ba(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function Li(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function No(e) {
  var {
    transform: r
  } = Vn(e);
  return +r.slice(r.lastIndexOf(",") + 2, r.length - 1);
}
function vn(e) {
  for (var r = e; r && !(!r.parentNode || (r = r.parentNode, r === document.body || r === document.documentElement)); ) {
    var n = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = Vn(r);
    if (n.test(a) || n.test(t))
      return r;
  }
  return window;
}
function kf(e) {
  for (var r = [], n = e; !Ai(n); )
    n = vn(n), r.push(n);
  return r;
}
function Ys(e, r) {
  if (Je(e)) {
    var n = document.querySelector(e);
    return n || Pr(r, "target element cannot found"), n;
  }
  if (ef(e))
    return e;
  Pr(r, 'type of prop "target" should be a selector or an element object');
}
function $f() {
  var {
    width: e,
    height: r
  } = Qe(window);
  return {
    vw: e,
    vh: r,
    vMin: Math.min(e, r),
    vMax: Math.max(e, r)
  };
}
var Fs = (e) => Je(e) && e.endsWith("rem"), Tf = (e) => Je(e) && e.endsWith("em") && !e.endsWith("rem"), Pf = (e) => Je(e) && e.endsWith("px") || mr(e), Of = (e) => Je(e) && e.endsWith("%"), js = (e) => Je(e) && e.endsWith("vw"), Ws = (e) => Je(e) && e.endsWith("vh"), Gs = (e) => Je(e) && e.endsWith("vmin"), qs = (e) => Je(e) && e.endsWith("vmax"), If = (e) => Je(e) && e.startsWith("calc("), Mf = (e) => Je(e) && e.startsWith("var("), He = (e) => {
  if (mr(e))
    return e;
  if (Pf(e))
    return +e.replace("px", "");
  if (!bn())
    return 0;
  var {
    vw: r,
    vh: n,
    vMin: a,
    vMax: t
  } = $f();
  if (js(e))
    return +e.replace("vw", "") * r / 100;
  if (Ws(e))
    return +e.replace("vh", "") * n / 100;
  if (Gs(e))
    return +e.replace("vmin", "") * a / 100;
  if (qs(e))
    return +e.replace("vmax", "") * t / 100;
  if (Fs(e)) {
    var o = +e.replace("rem", ""), l = Vn(document.documentElement).fontSize;
    return o * parseFloat(l);
  }
  return Je(e) ? z(e) : 0;
}, Ce = (e) => {
  if (e != null)
    return Of(e) || js(e) || Ws(e) || Tf(e) || Fs(e) || If(e) || Mf(e) || Gs(e) || qs(e) ? e : He(e) + "px";
}, sr = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = Ce(e), a = n.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function ya(e, r) {
  var {
    top: n = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = r, l = Date.now(), i = ba(e), s = Li(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (n - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), requestAnimationFrame(d);
      } else
        e.scrollTo(a, n), u();
    };
    requestAnimationFrame(d);
  });
}
function Xs(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + af(a);
    return r[o] = t, r;
  }, {});
}
function ro(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function gl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Bf(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        gl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        gl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Ef,
  classes: Vf
} = ae("icon");
function Nf(e, r) {
  return p(), Se(na(e.isURL(e.name) ? "img" : "i"), {
    class: c(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
    style: W({
      color: e.color,
      "transition-duration": e.toNumber(e.transition) + "ms",
      width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      fontSize: e.toSizeUnit(e.size)
    }),
    src: e.isURL(e.name) ? e.nextName : null,
    onClick: e.onClick
  }, null, 8, ["class", "style", "src", "onClick"]);
}
var Ks = ne({
  name: "VarIcon",
  props: Hs,
  setup(e) {
    var r = k(""), n = k(!1), a = /* @__PURE__ */ function() {
      var t = Bf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || z(i) === 0) {
          r.value = o;
          return;
        }
        n.value = !0, yield Ue(), setTimeout(() => {
          l != null && (r.value = o), n.value = !1;
        }, z(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return de(() => e.name, a, {
      immediate: !0
    }), {
      n: Ef,
      classes: Vf,
      nextName: r,
      animateInProgress: n,
      isURL: rf,
      toNumber: z,
      toSizeUnit: Ce
    };
  }
});
Ks.render = Nf;
const Ae = Ks;
ie(Ae);
var sS = Ae;
function Go() {
  return Go = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Go.apply(this, arguments);
}
var Df = Go({
  show: Boolean,
  title: String,
  actions: {
    type: Array,
    default: () => []
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: R(),
  "onUpdate:show": R()
}, xe(Mt, [
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
])), bl = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), yl = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Af = (e) => {
  var r = [];
  return {
    cache: r,
    has(n) {
      return this.cache.includes(n);
    },
    add(n) {
      this.has(n) || (this.cache.length === e && r.shift(), this.cache.push(n));
    },
    remove(n) {
      this.has(n) && xt(this.cache, n);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, qo = (e) => e, wl = (e) => Math.pow(e, 3), Zs = (e) => e < 0.5 ? wl(e * 2) / 2 : 1 - wl((1 - e) * 2) / 2, po = (e, r) => e ?? r, kn = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
const Ri = {
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
}, Js = {
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
function Xo() {
  return Xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Xo.apply(this, arguments);
}
function Ui() {
  var e = {}, r = k({}), n = (o, l) => {
    l.lang = o, e[o] = l;
  }, a = (o) => {
    if (!e[o])
      return console.warn("The " + o + " does not exist. You can mount a language package using the add method"), {};
    r.value = e[o];
  }, t = (o, l) => {
    if (!e[o]) {
      console.warn("The " + o + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[o] = Xo({}, e[o], l), a(o);
  };
  return {
    packs: e,
    pack: r,
    add: n,
    use: a,
    merge: t
  };
}
var {
  packs: Qs,
  pack: _e,
  add: Hi,
  use: Yi,
  merge: _s
} = Ui();
Hi("zh-CN", Ri);
Yi("zh-CN");
var uS = {
  zhCN: Ri,
  enUS: Js,
  packs: Qs,
  pack: _e,
  add: Hi,
  use: Yi,
  merge: _s,
  useLocale: Ui
};
const Ko = {
  zhCN: Ri,
  enUS: Js,
  packs: Qs,
  pack: _e,
  add: Hi,
  use: Yi,
  merge: _s,
  useLocale: Ui
};
var {
  n: zf,
  classes: Lf
} = ae("action-sheet"), Rf = ["onClick"];
function Uf(e, r) {
  var n = ue("var-icon"), a = ue("var-popup"), t = Le("ripple");
  return p(), Se(a, ze({
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
  }), {
    default: me(() => [V(
      "div",
      ze({
        class: e.classes(e.n(), e.n("$--box"))
      }, e.$attrs),
      [Y(e.$slots, "title", {}, () => [V(
        "div",
        {
          class: c(e.n("title"))
        },
        le(e.dt(e.title, e.pack.actionSheetTitle)),
        3
        /* TEXT, CLASS */
      )]), Y(e.$slots, "actions", {}, () => [(p(!0), T(
        Ve,
        null,
        Ge(e.actions, (o) => Te((p(), T("div", {
          class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
          key: o.name,
          style: W({
            color: o.color
          }),
          onClick: (l) => e.handleSelect(o)
        }, [o.icon ? (p(), Se(n, {
          key: 0,
          class: c(e.n("action-icon")),
          "var-action-sheet-cover": "",
          name: o.icon,
          size: o.iconSize
        }, null, 8, ["class", "name", "size"])) : ee("v-if", !0), V(
          "div",
          {
            class: c(e.n("action-name"))
          },
          le(o.name),
          3
          /* TEXT, CLASS */
        )], 14, Rf)), [[t, {
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
  }, 16, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "safe-area", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
var xs = ne({
  name: "VarActionSheet",
  directives: {
    Ripple: Xe
  },
  components: {
    VarPopup: Rr,
    VarIcon: Ae
  },
  inheritAttrs: !1,
  props: Df,
  setup(e) {
    var r = k(!1), n = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        C(l, t), o && C(e["onUpdate:show"], !1);
      }
    }, a = (t) => C(e["onUpdate:show"], t);
    return de(() => e.show, (t) => {
      r.value = t;
    }, {
      immediate: !0
    }), {
      n: zf,
      classes: Lf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: _e,
      dt: po,
      handleSelect: n
    };
  }
});
xs.render = Uf;
const Et = xs;
function Zo() {
  return Zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Zo.apply(this, arguments);
}
var rn, Fi = {};
function Hf(e) {
  return e === void 0 && (e = {}), Zo({}, Fi, e);
}
function Gr(e) {
  return bn() ? new Promise((r) => {
    Gr.close();
    var n = Ye(Hf(e));
    n.teleport = "body", rn = n;
    var {
      unmountInstance: a
    } = ta(Et, n, {
      onSelect: (t) => {
        C(n.onSelect, t), r(t);
      },
      onClose: () => {
        C(n.onClose), r("close");
      },
      onClosed: () => {
        C(n.onClosed), a(), rn === n && (rn = null);
      },
      onRouteChange: () => {
        a(), rn === n && (rn = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }) : Promise.resolve();
}
Gr.setDefaultOptions = function(e) {
  Fi = e;
};
Gr.resetDefaultOptions = function() {
  Fi = {};
};
Gr.close = function() {
  if (rn != null) {
    var e = rn;
    rn = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
Gr.Component = Et;
ie(Et);
ie(Et, Gr);
var dS = Et, Yf = {
  color: String,
  textColor: String,
  title: String,
  titlePosition: {
    type: String,
    default: "left"
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  round: Boolean,
  image: String,
  imageLinearGradient: String,
  safeAreaTop: Boolean
}, {
  n: Ff,
  classes: jf
} = ae("app-bar");
function Wf(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: W(e.rootStyles)
    },
    [V(
      "div",
      {
        class: c(e.n("toolbar"))
      },
      [V(
        "div",
        {
          class: c(e.n("left"))
        },
        [Y(e.$slots, "left"), e.titlePosition === "left" ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: W({
              paddingLeft: e.paddingLeft
            })
          },
          [Y(e.$slots, "default", {}, () => [$e(
            le(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [Y(e.$slots, "default", {}, () => [$e(
          le(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0), V(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: W({
              paddingRight: e.paddingRight
            })
          },
          [Y(e.$slots, "default", {}, () => [$e(
            le(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0), Y(e.$slots, "right")],
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
var eu = ne({
  name: "VarAppBar",
  props: Yf,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(), t = k(), o = () => {
      a.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
    }, l = A(() => {
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
    return tr(o), Pt(o), {
      n: Ff,
      classes: jf,
      formatElevation: pr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
eu.render = Wf;
const wa = eu;
ie(wa);
var vS = wa;
function Cl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function go(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Cl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Cl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Jo() {
  return Jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Jo.apply(this, arguments);
}
var Gf = "background-image", qf = "lazy-loading", Xf = "lazy-error", Sl = "lazy-attempt", Kf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Qo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Yn = [], no = [], ru = Af(100), Ke = {
  loading: Qo,
  error: Qo,
  attempt: 3,
  throttleWait: 300,
  events: Kf
}, ji = zi(Vt, Ke.throttleWait);
function bo(e, r) {
  e._lazy.arg === Gf ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function Zf(e) {
  e._lazy.loading && bo(e, e._lazy.loading), Vt();
}
function Jf(e) {
  e._lazy.error && bo(e, e._lazy.error), e._lazy.state = "error", Gi(e), Vt();
}
function nu(e, r) {
  bo(e, r), e._lazy.state = "success", Gi(e), Vt();
}
function Qf(e) {
  var r;
  no.includes(e) || (no.push(e), (r = Ke.events) == null || r.forEach((n) => {
    e.addEventListener(n, ji, {
      passive: !0
    });
  }));
}
function _f() {
  no.forEach((e) => {
    var r;
    (r = Ke.events) == null || r.forEach((n) => {
      e.removeEventListener(n, ji);
    });
  }), no.length = 0;
}
function xf(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(qf)) != null ? n : Ke.loading,
    error: (a = e.getAttribute(Xf)) != null ? a : Ke.error,
    attempt: e.getAttribute(Sl) ? Number(e.getAttribute(Sl)) : Ke.attempt
  };
  e._lazy = Jo({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), bo(e, Qo), C(Ke.filter, e._lazy);
}
function ec(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ru.add(r), nu(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Jf(e) : au(e);
  });
}
function au(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: r
    } = e._lazy;
    if (ru.has(r)) {
      nu(e, r), e._lazy.attemptLock = !1;
      return;
    }
    Zf(e), ec(e, r);
  }
}
function Wi(e) {
  return _o.apply(this, arguments);
}
function _o() {
  return _o = go(function* (e) {
    yield dr(), lf(e) && au(e);
  }), _o.apply(this, arguments);
}
function Vt() {
  Yn.forEach((e) => Wi(e));
}
function rc(e) {
  return xo.apply(this, arguments);
}
function xo() {
  return xo = go(function* (e) {
    !Yn.includes(e) && Yn.push(e), kf(e).forEach(Qf), yield Wi(e);
  }), xo.apply(this, arguments);
}
function Gi(e) {
  xt(Yn, e), Yn.length === 0 && _f();
}
function nc(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function tu(e, r) {
  return ei.apply(this, arguments);
}
function ei() {
  return ei = go(function* (e, r) {
    xf(e, r), yield rc(e);
  }), ei.apply(this, arguments);
}
function ac(e, r) {
  return ri.apply(this, arguments);
}
function ri() {
  return ri = go(function* (e, r) {
    if (!nc(e, r)) {
      Yn.includes(e) && (yield Wi(e));
      return;
    }
    yield tu(e, r);
  }), ri.apply(this, arguments);
}
function tc(e) {
  e === void 0 && (e = {});
  var {
    events: r,
    loading: n,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  Ke.events = r ?? Ke.events, Ke.loading = n ?? Ke.loading, Ke.error = a ?? Ke.error, Ke.attempt = t ?? Ke.attempt, Ke.throttleWait = o ?? Ke.throttleWait, Ke.filter = l;
}
var ou = {
  mounted: tu,
  unmounted: Gi,
  updated: ac,
  install(e, r) {
    tc(r), ji = zi(Vt, Ke.throttleWait), e.directive("lazy", this);
  }
}, fS = ou;
const Ca = ou;
var oc = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    default: "normal"
  },
  alt: String,
  color: String,
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  bordered: Boolean,
  borderColor: String,
  loading: String,
  error: String,
  lazy: Boolean,
  onClick: R(),
  onLoad: R(),
  onError: R()
}, ic = (e) => ["mini", "small", "normal", "large"].includes(e), {
  n: lc,
  classes: sc
} = ae("avatar"), uc = ["src", "alt", "lazy-loading", "lazy-error"], dc = ["src", "alt"];
function vc(e, r) {
  var n = Le("lazy");
  return p(), T(
    "div",
    {
      ref: "avatarElement",
      class: c(e.classes(e.n(), e.n("$--box"), [e.isInternalSize(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: W({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: r[3] || (r[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (p(), T(
      Ve,
      {
        key: 0
      },
      [e.lazy ? Te((p(), T("img", {
        key: 0,
        class: c(e.n("image")),
        src: e.src,
        alt: e.alt,
        style: W({
          objectFit: e.fit
        }),
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        onLoad: r[0] || (r[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        })
      }, null, 46, uc)), [[n, e.src]]) : (p(), T("img", {
        key: 1,
        class: c(e.n("image")),
        src: e.src,
        alt: e.alt,
        style: W({
          objectFit: e.fit
        }),
        onLoad: r[1] || (r[1] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: r[2] || (r[2] = function() {
          return e.handleError && e.handleError(...arguments);
        })
      }, null, 46, dc))],
      64
      /* STABLE_FRAGMENT */
    )) : (p(), T(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: W({
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
var iu = ne({
  name: "VarAvatar",
  directives: {
    Lazy: Ca
  },
  props: oc,
  setup(e) {
    var r = k(null), n = k(null), a = k(1), t = () => {
      if (!r.value || !n.value) {
        a.value = 1;
        return;
      }
      var s = r.value.offsetWidth, u = n.value.offsetWidth;
      s > u ? a.value = 1 : a.value = s / u;
    }, o = (s) => {
      var u = s.currentTarget, {
        lazy: d,
        onLoad: v,
        onError: f
      } = e;
      d ? (u._lazy.state === "success" && C(v, s), u._lazy.state === "error" && C(f, s)) : C(v, s);
    }, l = (s) => {
      C(e.onError, s);
    }, i = (s) => {
      C(e.onClick, s);
    };
    return tr(t), Pt(t), {
      isInternalSize: ic,
      toSizeUnit: Ce,
      n: lc,
      classes: sc,
      avatarElement: r,
      textElement: n,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
iu.render = vc;
const Sa = iu;
ie(Sa);
var cS = Sa, fc = {
  offset: [Number, String],
  vertical: Boolean
}, {
  n: cc,
  classes: mc
} = ae("avatar-group");
function hc(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: W(e.rootStyles)
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var lu = ne({
  name: "VarAvatarGroup",
  props: fc,
  setup(e) {
    var r = A(() => e.offset == null ? {} : {
      "--avatar-group-offset": Ce(e.offset)
    });
    return {
      n: cc,
      classes: mc,
      toSizeUnit: Ce,
      rootStyles: r
    };
  }
});
lu.render = hc;
const ka = lu;
ie(ka);
var mS = ka, tn = {
  type: {
    type: String,
    default: "circle"
  },
  radius: [String, Number],
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  description: String,
  loading: Boolean
}, {
  n: pc,
  classes: gc
} = ae("loading"), bc = (e) => (pn(""), e = e(), gn(), e), yc = /* @__PURE__ */ bc(() => /* @__PURE__ */ V(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ V("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), wc = [yc];
function Cc(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [Y(e.$slots, "default"), e.loading ? (p(), T(
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
    )) : ee("v-if", !0), e.isShow ? (p(), T(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [V(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: W({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          wc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : ee("v-if", !0), (p(!0), T(
        Ve,
        null,
        Ge(e.loadingTypeDict, (n, a) => (p(), T(
          Ve,
          {
            key: a
          },
          [e.type === a ? (p(), T(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), T(
              Ve,
              null,
              Ge(n, (t) => (p(), T(
                "div",
                {
                  key: t + a,
                  style: W({
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
      )), e.$slots.description || e.description ? (p(), T(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: W({
            color: e.color
          })
        },
        [Y(e.$slots, "description", {}, () => [$e(
          le(e.description),
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
var su = ne({
  name: "VarLoading",
  props: tn,
  setup(e, r) {
    var {
      slots: n
    } = r, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = A(() => C(n.default) ? e.loading : !0);
    return {
      n: pc,
      classes: gc,
      multiplySizeUnit: sr,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
su.render = Cc;
const fn = su;
ie(fn);
var hS = fn, Sc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: kc,
  classes: $c
} = ae("hover-overlay");
function Tc(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var uu = ne({
  name: "VarHoverOverlay",
  props: Sc,
  setup() {
    return {
      n: kc,
      classes: $c
    };
  }
});
uu.render = Tc;
const wr = uu;
ie(wr);
function qr() {
  var e = k(!1), r = (n) => {
    e.value = n;
  };
  return {
    hovering: e,
    handleHovering: r
  };
}
var pS = wr;
function du(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function Pc(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[Bs(t)] = o, n;
  }, {}) : {};
}
function Oc(e) {
  var {
    value: r
  } = e._hover, n = Pc(e);
  Object.keys(r).forEach((a) => {
    var t = Bs(a), o = r[t];
    o != null && n[t] && (e._hover.rawStyle[t] = n[t]);
  });
}
function qi(e, r) {
  Object.keys(r).forEach((n) => {
    var a = r[n];
    a != null && (e.style[n] = a);
  });
}
function Ic(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function vu(e) {
  Ic(e), qi(e, e._hover.rawStyle);
}
function fu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, aa(e)) {
    e(this._hover.hovering);
    return;
  }
  qi(this, e);
}
function cu() {
  if (this._hover.hovering = !1, aa(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  vu(this);
}
function mu(e, r) {
  var n, a, {
    arg: t,
    value: o
  } = r;
  du(t) || (e._hover = {
    value: o,
    hovering: (n = (a = e._hover) == null ? void 0 : a.hovering) != null ? n : !1,
    rawStyle: {}
  }, Oc(e), e.addEventListener("mouseenter", fu), e.addEventListener("mouseleave", cu));
}
function hu(e, r) {
  du(r.arg) || (vu(e), e.removeEventListener("mouseenter", fu), e.removeEventListener("mouseleave", cu));
}
function Mc(e, r) {
  e._hover && hu(e, r);
}
function Bc(e, r) {
  return !aa(r.value) && e._hover.hovering;
}
function Ec(e, r) {
  mu(e, r), Bc(e, r) && qi(e, r.value);
}
var pu = {
  mounted: mu,
  unmounted: hu,
  beforeUpdate: Mc,
  updated: Ec,
  install(e) {
    e.directive("hover", this);
  }
}, gS = pu;
const Dr = pu;
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ni.apply(this, arguments);
}
var Vc = {
  type: String,
  nativeType: {
    type: String,
    default: "button"
  },
  size: String,
  loading: Boolean,
  round: Boolean,
  block: Boolean,
  text: Boolean,
  outline: Boolean,
  disabled: Boolean,
  autoLoading: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  color: String,
  textColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  loadingRadius: [Number, String],
  loadingType: xe(tn, "type"),
  loadingSize: xe(tn, "size"),
  loadingColor: ni({}, xe(tn, "color"), {
    default: "currentColor"
  }),
  onClick: R(),
  onTouchstart: R()
}, gu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Nc() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(gu);
  return {
    length: n,
    buttons: r,
    bindButtons: e
  };
}
function Dc() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = or(gu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Ac,
  classes: zc
} = ae("button"), Lc = ["type", "disabled"];
function Rc(e, r) {
  var n = ue("var-loading"), a = ue("var-hover-overlay"), t = Le("ripple"), o = Le("hover");
  return Te((p(), T("button", {
    class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.states.elevation], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
    style: W({
      color: e.states.textColor,
      background: e.states.color
    }),
    type: e.nativeType,
    disabled: e.disabled,
    onClick: r[0] || (r[0] = function() {
      return e.handleClick && e.handleClick(...arguments);
    }),
    onTouchstart: r[1] || (r[1] = function() {
      return e.handleTouchstart && e.handleTouchstart(...arguments);
    })
  }, [e.loading || e.pending ? (p(), Se(n, {
    key: 0,
    class: c(e.n("loading")),
    "var-button-cover": "",
    color: e.loadingColor,
    type: e.loadingType,
    size: e.loadingSize,
    radius: e.loadingRadius
  }, null, 8, ["class", "color", "type", "size", "radius"])) : ee("v-if", !0), V(
    "div",
    {
      class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  ), x(a, {
    hovering: e.disabled ? !1 : e.hovering
  }, null, 8, ["hovering"])], 46, Lc)), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var bu = ne({
  name: "VarButton",
  components: {
    VarLoading: fn,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: Xe,
    Hover: Dr
  },
  props: Vc,
  setup(e) {
    var r = k(!1), {
      buttonGroup: n
    } = Dc(), {
      hovering: a,
      handleHovering: t
    } = qr(), o = A(() => {
      if (!n)
        return {
          elevation: pr(e.elevation, 2),
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
      } = n;
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
      e.autoLoading && (r.value = !0, u = Be(u) ? u : [u], Promise.all(u).then(() => {
        r.value = !1;
      }).catch(() => {
        r.value = !1;
      }));
    }, i = (u) => {
      var {
        loading: d,
        disabled: v,
        onClick: f
      } = e;
      !f || d || v || r.value || l(C(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || r.value || l(C(f, u));
    };
    return {
      n: Ac,
      classes: zc,
      pending: r,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
bu.render = Rc;
const vr = bu;
ie(vr);
var bS = vr, Uc = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  bottom: [Number, String],
  target: [String, Object],
  onClick: R()
}, {
  n: Hc,
  classes: Yc
} = ae("back-top");
function Fc(e, r) {
  var n = ue("var-icon"), a = ue("var-button");
  return p(), Se(Zr, {
    to: "body",
    disabled: e.disabled
  }, [V(
    "div",
    ze({
      class: e.classes(e.n(), [e.show, e.n("--active")]),
      ref: "backTopEl",
      style: {
        right: e.toSizeUnit(e.right),
        bottom: e.toSizeUnit(e.bottom)
      }
    }, e.$attrs, {
      onClick: r[0] || (r[0] = Tr(function() {
        return e.handleClick && e.handleClick(...arguments);
      }, ["stop"]))
    }),
    [Y(e.$slots, "default", {}, () => [x(a, {
      elevation: e.elevation,
      type: "primary",
      round: "",
      "var-back-top-cover": ""
    }, {
      default: me(() => [x(n, {
        name: "chevron-up"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["elevation"])])],
    16
    /* FULL_PROPS */
  )], 8, ["disabled"]);
}
var yu = ne({
  name: "VarBackTop",
  components: {
    VarButton: vr,
    VarIcon: Ae
  },
  inheritAttrs: !1,
  props: Uc,
  setup(e) {
    var r = k(!1), n = k(null), a = k(!0), t, o = (d) => {
      C(e.onClick, d);
      var v = Li(t);
      ya(t, {
        left: v,
        duration: e.duration,
        animation: Zs
      });
    }, l = zi(() => {
      r.value = ba(t) >= He(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Ys(e.target, "BackTop") : vn(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return kt(() => {
      i(), s(), a.value = !1;
    }), hn(s), co(u), {
      disabled: a,
      show: r,
      backTopEl: n,
      toSizeUnit: Ce,
      n: Hc,
      classes: Yc,
      handleClick: o
    };
  }
});
yu.render = Fc;
const $a = yu;
ie($a);
var yS = $a, jc = {
  type: {
    type: String,
    default: "default"
  },
  position: {
    type: String,
    default: "right-top"
  },
  hidden: Boolean,
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: [String, Number],
  dot: Boolean,
  icon: String,
  color: String
}, {
  n: Wc,
  classes: Gc
} = ae("badge");
function qc(e, r) {
  var n = ue("var-icon");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "default"), x(je, {
      name: e.n("$-badge-fade"),
      persisted: ""
    }, {
      default: me(() => [Te(V(
        "span",
        ze({
          class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [e.icon ? (p(), Se(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-badge-cover": "",
          name: e.icon
        }, null, 8, ["class", "name"])) : ee("v-if", !0), Y(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), T(
          "span",
          {
            key: 0,
            class: c(e.n("value"))
          },
          le(e.value),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)])],
        16
        /* FULL_PROPS */
      ), [[Lr, !e.hidden]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name"])],
    2
    /* CLASS */
  );
}
var wu = ne({
  name: "VarBadge",
  components: {
    VarIcon: Ae
  },
  inheritAttrs: !1,
  props: jc,
  setup(e) {
    var r = A(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && z(n) > z(a) ? a + "+" : n;
    });
    return {
      n: Wc,
      classes: Gc,
      value: r
    };
  }
});
wu.render = qc;
const Fn = wu;
ie(Fn);
var wS = Fn, Xc = {
  active: {
    type: [Number, String],
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: Boolean,
  border: Boolean,
  safeArea: Boolean,
  activeColor: String,
  inactiveColor: String,
  fabProps: Object,
  onChange: R(),
  onBeforeChange: R(),
  onFabClick: R(),
  "onUpdate:active": R()
}, Cu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Kc() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ir(Cu);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ai.apply(this, arguments);
}
var {
  n: Zc,
  classes: Jc
} = ae("bottom-navigation"), {
  n: yo
} = ae("bottom-navigation-item"), kl = yo("--right-half-space"), $l = yo("--left-half-space"), Tl = yo("--right-space"), Qc = {
  type: "primary"
};
function _c(e, r) {
  var n = ue("var-button");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: W("z-index:" + e.zIndex)
    },
    [Y(e.$slots, "default"), e.$slots.fab ? (p(), Se(n, ze({
      key: 0,
      class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
      "var-bottom-navigation__fab": "",
      onClick: e.handleFabClick
    }, e.fabProps, {
      round: ""
    }), {
      default: me(() => [Y(e.$slots, "fab")]),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "onClick"])) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var Su = ne({
  name: "VarBottomNavigation",
  components: {
    VarButton: vr
  },
  props: Xc,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(null), t = A(() => e.active), o = A(() => e.activeColor), l = A(() => e.inactiveColor), i = k({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Kc(), v = () => {
      s.value === 0 || f() || m() || y();
    }, f = () => u.find((b) => {
      var {
        name: $
      } = b;
      return t.value === $.value;
    }), m = () => u.find((b) => {
      var {
        index: $
      } = b;
      return t.value === $.value;
    }), y = () => {
      mr(t.value) && (t.value < 0 ? C(e["onUpdate:active"], 0) : t.value > s.value - 1 && C(e["onUpdate:active"], s.value - 1));
    }, g = (b) => {
      t.value !== b && (e.onBeforeChange ? h(b) : w(b));
    }, h = (b) => {
      var $ = Gt(C(e.onBeforeChange, b));
      Promise.all($).then((U) => {
        U.every(Boolean) && w(b);
      });
    }, w = (b) => {
      C(e["onUpdate:active"], b), C(e.onChange, b);
    }, O = () => {
      var b = E();
      b.forEach(($) => {
        $.classList.remove(kl, $l, Tl);
      });
    }, P = (b) => {
      var $ = E(), U = $.length, D = b % 2 === 0;
      $.forEach((L, K) => {
        S(D, L, K, U);
      });
    }, S = (b, $, U, D) => {
      var L = U === D - 1;
      if (!b && L) {
        $.classList.add(Tl);
        return;
      }
      var K = U === D / 2 - 1, oe = U === D / 2;
      K ? $.classList.add(kl) : oe && $.classList.add($l);
    }, E = () => Array.from(a.value.querySelectorAll("." + yo())), I = () => {
      C(e.onFabClick);
    }, N = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: g
    };
    return d(N), de(() => s.value, v), de(() => e.fabProps, (b) => {
      i.value = ai({}, Qc, b);
    }, {
      immediate: !0,
      deep: !0
    }), tr(() => {
      n.fab && P(s.value);
    }), Pt(() => {
      O(), n.fab && P(s.value);
    }), {
      n: Zc,
      classes: Jc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: I,
      fabProps: i
    };
  }
});
Su.render = _c;
const Ta = Su;
ie(Ta);
var CS = Ta, xc = {
  name: String,
  icon: String,
  label: String,
  namespace: {
    type: String,
    default: "var-icon"
  },
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: R()
};
function em() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Cu);
  return n || Pr("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: rm,
  classes: nm
} = ae("bottom-navigation-item"), am = {
  type: "danger",
  dot: !0
};
function tm(e, r) {
  var n = ue("var-icon"), a = ue("var-badge"), t = Le("ripple");
  return Te((p(), T(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: W({
        color: e.computeColorStyle()
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (p(), Se(n, {
      key: 0,
      name: e.icon,
      namespace: e.namespace,
      class: c(e.n("icon")),
      "var-bottom-navigation-item-cover": ""
    }, null, 8, ["name", "namespace", "class"])) : ee("v-if", !0), Y(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), Se(a, ze({
      key: 1
    }, e.badgeProps, {
      class: e.n("badge"),
      "var-bottom-navigation-item-cover": ""
    }), null, 16, ["class"])) : ee("v-if", !0), V(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? ee("v-if", !0) : (p(), T(
        Ve,
        {
          key: 0
        },
        [$e(
          le(e.label),
          1
          /* TEXT */
        )],
        64
        /* STABLE_FRAGMENT */
      )), Y(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var ku = ne({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: Fn,
    VarIcon: Ae
  },
  directives: {
    Ripple: Xe
  },
  props: xc,
  setup(e) {
    var r = A(() => e.name), n = A(() => e.badge), a = k({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = em(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: r,
      index: t
    }, v = () => i.value === r.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, y = (m = r.value) != null ? m : t.value;
      C(e.onClick, y), C(o.onToggle, y);
    };
    return l(d), de(() => n.value, (m) => {
      a.value = m === !0 ? am : n.value;
    }, {
      immediate: !0
    }), {
      n: rm,
      classes: nm,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
ku.render = tm;
const Pa = ku;
ie(Pa);
var SS = Pa, om = {
  separator: String,
  onClick: R()
}, $u = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function im() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = ir($u);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function lm() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = or($u);
  return r || Pr("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: sm,
  classes: um
} = ae("breadcrumb");
function dm(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [V(
      "div",
      {
        class: c(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? ee("v-if", !0) : Y(e.$slots, "separator", {
      key: 0
    }, () => {
      var n;
      return [V(
        "div",
        {
          class: c(e.n("separator"))
        },
        le((n = e.separator) != null ? n : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var Tu = ne({
  name: "VarBreadcrumb",
  props: om,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = lm(), t = A(() => r.value === n.length.value - 1), o = A(() => n.separator.value), l = (i) => {
      t.value || C(e.onClick, i);
    };
    return a(null), {
      n: sm,
      classes: um,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
Tu.render = dm;
const Oa = Tu;
ie(Oa);
var kS = Oa, vm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: fm
} = ae("breadcrumbs");
function cm(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Pu = ne({
  name: "VarBreadcrumbs",
  props: vm,
  setup(e) {
    var r = A(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = im(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: fm
    };
  }
});
Pu.render = cm;
const Ia = Pu;
ie(Ia);
var $S = Ia, mm = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  mode: {
    type: String,
    default: "normal"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  vertical: Boolean
}, {
  n: hm,
  classes: pm
} = ae("button-group");
function gm(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Ou = ne({
  name: "VarButtonGroup",
  props: mm,
  setup(e) {
    var {
      bindButtons: r
    } = Nc(), n = {
      elevation: A(() => e.elevation),
      type: A(() => e.type),
      size: A(() => e.size),
      color: A(() => e.color),
      textColor: A(() => e.textColor),
      mode: A(() => e.mode)
    };
    return r(n), {
      n: hm,
      classes: pm,
      formatElevation: pr
    };
  }
});
Ou.render = gm;
const Ma = Ou;
ie(Ma);
var TS = Ma, bm = {
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  imageHeight: [String, Number],
  imageWidth: [String, Number],
  outline: Boolean,
  layout: {
    type: String,
    default: "column"
  },
  floating: Boolean,
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: String,
  title: String,
  subtitle: String,
  description: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  ripple: Boolean,
  onClick: R(),
  "onUpdate:floating": R()
};
function Pl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ol(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Pl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Pl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: ym,
  classes: wm
} = ae("card"), Cm = 500, Sm = ["src", "alt"];
function km(e, r) {
  var n = ue("var-icon"), a = ue("var-button"), t = Le("ripple");
  return Te((p(), T(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: W({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [V(
      "div",
      {
        ref: "cardFloater",
        class: c(e.n("floater")),
        style: W({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [Y(e.$slots, "image", {}, () => [e.src ? (p(), T("img", {
        key: 0,
        class: c(e.n("image")),
        style: W({
          objectFit: e.fit,
          height: e.toSizeUnit(e.imageHeight),
          width: e.toSizeUnit(e.imageWidth)
        }),
        src: e.src,
        alt: e.alt
      }, null, 14, Sm)) : ee("v-if", !0)]), V(
        "div",
        {
          class: c(e.n("container"))
        },
        [Y(e.$slots, "title", {}, () => [e.title ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          le(e.title),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), Y(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          le(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          le(e.description),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), e.$slots.extra ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [Y(e.$slots, "extra")],
          2
          /* CLASS */
        )) : ee("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), T(
          "div",
          {
            key: 1,
            class: c(e.n("floating-content")),
            style: W({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [Y(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: W({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [Y(e.$slots, "close-button", {}, () => [x(a, {
          "var-card-cover": "",
          round: "",
          class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
          onClick: Tr(e.close, ["stop"])
        }, {
          default: me(() => [x(n, {
            "var-card-cover": "",
            name: "window-close",
            class: c(e.n("close-button-icon"))
          }, null, 8, ["class"])]),
          _: 1
          /* STABLE */
        }, 8, ["class", "onClick"])])],
        6
        /* CLASS, STYLE */
      )) : ee("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), V(
      "div",
      {
        class: c(e.n("holder")),
        style: W({
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
var Iu = ne({
  name: "VarCard",
  directives: {
    Ripple: Xe
  },
  components: {
    VarIcon: Ae,
    VarButton: vr
  },
  props: bm,
  setup(e) {
    var r = k(null), n = k(null), a = k("auto"), t = k("auto"), o = k("100%"), l = k("100%"), i = k("auto"), s = k("auto"), u = k(void 0), d = k("hidden"), v = k("0px"), f = k("0"), m = A(() => e.layout === "row"), y = k(!1), g = k(!1), {
      zIndex: h
    } = Bt(() => e.floating, 1);
    ho(() => e.floating, () => !m.value);
    var w = "auto", O = "auto", P = null, S = k(null), E = /* @__PURE__ */ function() {
      var $ = Ol(function* () {
        clearTimeout(S.value), clearTimeout(P), S.value = null, S.value = setTimeout(/* @__PURE__ */ Ol(function* () {
          var {
            width: U,
            height: D,
            left: L,
            top: K
          } = Qe(r.value);
          a.value = Ce(U), t.value = Ce(D), o.value = a.value, l.value = t.value, i.value = Ce(K), s.value = Ce(L), u.value = "fixed", w = i.value, O = s.value, y.value = !0, yield dr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", g.value = !0;
        }), e.ripple ? Cm : 0);
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), I = () => {
      clearTimeout(P), clearTimeout(S.value), S.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = O, v.value = "0px", f.value = "0", y.value = !1, P = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", O = "auto", d.value = "hidden", u.value = void 0, g.value = !1;
      }, e.floatingDuration);
    }, N = () => {
      C(e["onUpdate:floating"], !1);
    }, b = ($) => {
      C(e.onClick, $);
    };
    return de(() => e.floating, ($) => {
      m.value || Ue(() => {
        $ ? E() : I();
      });
    }, {
      immediate: !0
    }), {
      n: ym,
      classes: wm,
      toSizeUnit: Ce,
      card: r,
      cardFloater: n,
      holderWidth: a,
      holderHeight: t,
      floater: S,
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
      close: N,
      showFloatingButtons: y,
      floated: g,
      formatElevation: pr,
      handleClick: b
    };
  }
});
Iu.render = km;
const Ba = Iu;
ie(Ba);
var PS = Ba, $m = {
  title: [Number, String],
  icon: String,
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: R()
}, {
  n: Tm,
  classes: Pm
} = ae("cell");
function Om(e, r) {
  var n = ue("var-icon"), a = Le("ripple");
  return Te((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: W(e.borderOffsetStyles),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "icon", {}, () => [e.icon ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [x(n, {
        name: e.icon
      }, null, 8, ["name"])],
      2
      /* CLASS */
    )) : ee("v-if", !0)]), V(
      "div",
      {
        class: c(e.n("content"))
      },
      [Y(e.$slots, "default", {}, () => [e.title ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        le(e.title),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        le(e.description),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [Y(e.$slots, "extra")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Mu = ne({
  name: "VarCell",
  components: {
    VarIcon: Ae
  },
  directives: {
    Ripple: Xe
  },
  props: $m,
  setup(e) {
    var r = A(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Ce(e.borderOffset),
      "--cell-border-right": Ce(e.borderOffset)
    }), n = (a) => {
      C(e.onClick, a);
    };
    return {
      n: Tm,
      classes: Pm,
      toSizeUnit: Ce,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
Mu.render = Om;
const jn = Mu;
ie(jn);
var OS = jn, Im = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Mm
} = ae("form-details"), Bm = {
  key: 0
}, Em = {
  key: 0
};
function Vm(e, r) {
  return p(), Se(je, {
    name: e.n()
  }, {
    default: me(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n())
      },
      [V(
        "div",
        {
          class: c(e.n("error-message"))
        },
        [x(je, {
          name: e.n("message")
        }, {
          default: me(() => [e.errorMessage ? (p(), T(
            "div",
            Bm,
            le(e.errorMessage),
            1
            /* TEXT */
          )) : ee("v-if", !0)]),
          _: 1
          /* STABLE */
        }, 8, ["name"])],
        2
        /* CLASS */
      ), V(
        "div",
        {
          class: c(e.n("extra-message"))
        },
        [x(je, {
          name: e.n("message")
        }, {
          default: me(() => [Y(e.$slots, "extra-message", {}, () => [e.extraMessage ? (p(), T(
            "div",
            Em,
            le(e.extraMessage),
            1
            /* TEXT */
          )) : ee("v-if", !0)])]),
          _: 3
          /* FORWARDED */
        }, 8, ["name"])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0)]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
var Bu = ne({
  name: "VarFormDetails",
  props: Im,
  setup: () => ({
    n: Mm
  })
});
Bu.render = Vm;
const nr = Bu;
ie(nr);
var IS = nr, Nm = {
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
  checkedColor: String,
  uncheckedColor: String,
  disabled: Boolean,
  readonly: Boolean,
  indeterminate: Boolean,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onClick: R(),
  onChange: R(),
  "onUpdate:modelValue": R(),
  "onUpdate:indeterminate": R()
}, Eu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Dm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(Eu);
  return {
    length: n,
    checkboxes: r,
    bindCheckboxes: e
  };
}
function Am() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = or(Eu);
  return {
    index: n,
    checkboxGroup: r,
    bindCheckboxGroup: e
  };
}
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ti.apply(this, arguments);
}
var Vu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Ir() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Vu), a = ra(), t = n ? (o) => {
    n(ti({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: r,
    form: e,
    bindForm: t
  };
}
function zm() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ir(Vu);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: Lm,
  classes: Rm
} = ae("checkbox");
function Um(e, r) {
  var n = ue("var-icon"), a = ue("var-hover-overlay"), t = ue("var-form-details"), o = Le("hover"), l = Le("ripple");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [V(
      "div",
      {
        class: c(e.n())
      },
      [Te((p(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: W({
            color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.isIndeterminate ? Y(e.$slots, "indeterminate-icon", {
          key: 0
        }, () => [x(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "minus-box",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : ee("v-if", !0), e.checked && !e.isIndeterminate ? Y(e.$slots, "checked-icon", {
          key: 1
        }, () => [x(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-marked",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : ee("v-if", !0), !e.checked && !e.isIndeterminate ? Y(e.$slots, "unchecked-icon", {
          key: 2
        }, () => [x(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-blank-outline",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : ee("v-if", !0), x(a, {
          hovering: !e.disabled && !e.formDisabled && e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[o, e.handleHovering, "desktop"], [l, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), V(
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
    ), x(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var Nu = ne({
  name: "VarCheckbox",
  directives: {
    Ripple: Xe,
    Hover: Dr
  },
  components: {
    VarIcon: Ae,
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  props: Nm,
  setup(e) {
    var r = ga(e, "modelValue"), n = A(() => r.value === e.checkedValue), a = A(() => e.checkedValue), t = k(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Am(), {
      hovering: i,
      handleHovering: s
    } = qr(), {
      form: u,
      bindForm: d
    } = Ir(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: y
    } = Or(), g = ga(e, "indeterminate"), h = ($) => {
      Ue(() => {
        var {
          validateTrigger: U,
          rules: D,
          modelValue: L
        } = e;
        f(U, $, D, L);
      });
    }, w = ($) => {
      var {
        checkedValue: U,
        onChange: D
      } = e;
      r.value = $, g.value = !1, C(D, r.value), h("onChange"), $ === U ? o == null || o.onChecked(U) : o == null || o.onUnchecked(U);
    }, O = ($) => {
      var {
        disabled: U,
        readonly: D,
        checkedValue: L,
        uncheckedValue: K,
        onClick: oe
      } = e;
      if (!(u != null && u.disabled.value || U) && (C(oe, $), !(u != null && u.readonly.value || D))) {
        t.value = !0;
        var _ = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && _ || w(n.value ? K : L);
      }
    }, P = ($) => {
      var {
        checkedValue: U,
        uncheckedValue: D
      } = e;
      r.value = $.includes(U) ? U : D;
    }, S = () => {
      t.value = !1;
    }, E = () => {
      r.value = e.uncheckedValue, y();
    }, I = ($) => {
      var {
        checkedValue: U,
        uncheckedValue: D
      } = e, L = ![U, D].includes($);
      L && ($ = n.value ? D : U), w($);
    }, N = () => m(e.rules, e.modelValue), b = {
      checkedValue: a,
      checked: n,
      sync: P,
      validate: N,
      resetValidation: y,
      reset: E,
      resetWithAnimation: S
    };
    return C(l, b), C(d, b), {
      isIndeterminate: g,
      withAnimation: t,
      checked: n,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Lm,
      classes: Rm,
      handleClick: O,
      toggle: I,
      reset: E,
      validate: N,
      resetValidation: y
    };
  }
});
Nu.render = Um;
const Wn = Nu;
ie(Wn);
var MS = Wn, Hm = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: [String, Number],
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: Ym,
  classes: Fm
} = ae("checkbox-group");
function jm(e, r) {
  var n = ue("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [V(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), x(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var Du = ne({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: nr
  },
  props: Hm,
  setup(e) {
    var r = A(() => e.max), n = A(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Dm(), {
      bindForm: l
    } = Ir(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Or(), v = A(() => i.value), f = (N) => {
      Ue(() => {
        var {
          validateTrigger: b,
          rules: $,
          modelValue: U
        } = e;
        s(b, N, $, U);
      });
    }, m = (N) => {
      C(e["onUpdate:modelValue"], N), C(e.onChange, N), f("onChange");
    }, y = (N) => {
      var {
        modelValue: b
      } = e;
      b.includes(N) || m([...b, N]);
    }, g = (N) => {
      var {
        modelValue: b
      } = e;
      b.includes(N) && m(b.filter(($) => $ !== N));
    }, h = () => t.forEach((N) => {
      var {
        sync: b
      } = N;
      return b(e.modelValue);
    }), w = () => {
      t.forEach((N) => N.resetWithAnimation());
    }, O = () => {
      var N = t.map(($) => {
        var {
          checkedValue: U
        } = $;
        return U.value;
      }), b = ul(N);
      return w(), C(e["onUpdate:modelValue"], b), b;
    }, P = () => {
      var N = t.filter(($) => {
        var {
          checked: U
        } = $;
        return !U.value;
      }).map(($) => {
        var {
          checkedValue: U
        } = $;
        return U.value;
      }), b = ul(N);
      return w(), C(e["onUpdate:modelValue"], b), b;
    }, S = () => {
      C(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    de(() => e.modelValue, h, {
      deep: !0
    }), de(() => a.value, h);
    var I = {
      max: r,
      checkedCount: n,
      onChecked: y,
      onUnchecked: g,
      validate: E,
      resetValidation: d,
      reset: S,
      errorMessage: v
    };
    return o(I), C(l, I), {
      errorMessage: i,
      n: Ym,
      classes: Fm,
      checkAll: O,
      inverseAll: P,
      reset: S,
      validate: E,
      resetValidation: d
    };
  }
});
Du.render = jm;
const Ea = Du;
ie(Ea);
var BS = Ea, Wm = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  iconName: xe(Hs, "name"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  block: Boolean,
  closable: Boolean,
  onClose: R()
}, {
  n: Jr,
  classes: Gm
} = ae("chip");
function qm(e, r) {
  var n = ue("var-icon");
  return p(), Se(je, {
    name: e.n("$-fade")
  }, {
    default: me(() => [V(
      "span",
      ze({
        class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [Y(e.$slots, "left"), V(
        "span",
        {
          class: c(e.n("text-" + e.size))
        },
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      ), Y(e.$slots, "right"), e.closable ? (p(), T(
        "span",
        {
          key: 0,
          class: c(e.n("--close")),
          onClick: r[0] || (r[0] = function() {
            return e.handleClose && e.handleClose(...arguments);
          })
        },
        [x(n, {
          name: "" + (e.iconName ? e.iconName : "close-circle")
        }, null, 8, ["name"])],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      16
      /* FULL_PROPS */
    )]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
var Au = ne({
  name: "VarChip",
  components: {
    VarIcon: Ae
  },
  inheritAttrs: !1,
  props: Wm,
  setup(e) {
    var r = A(() => {
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
    }), n = A(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = Jr(o ? "$--flex" : "$--inline-flex"), d = i ? Jr("plain") + " " + Jr("plain-" + l) : Jr("--" + l), v = s ? Jr("--round") : null;
      return [Jr("--" + t), u, d, v];
    }), a = (t) => {
      C(e.onClose, t);
    };
    return {
      n: Jr,
      classes: Gm,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
Au.render = qm;
const Gn = Au;
ie(Gn);
var ES = Gn, Xm = {
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
    default: "row"
  },
  justify: String,
  align: String,
  xs: [Object, Number, String],
  sm: [Object, Number, String],
  md: [Object, Number, String],
  lg: [Object, Number, String],
  xl: [Object, Number, String],
  onClick: R()
}, zu = Symbol("ROW_BIND_COL_KEY");
function Km() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(zu);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function Zm() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(zu);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Rt,
  classes: Jm
} = ae("col");
function Qm(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: W({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Lu = ne({
  name: "VarCol",
  props: Xm,
  setup(e) {
    var r = k({
      left: 0,
      right: 0
    }), n = A(() => z(e.span)), a = A(() => z(e.offset)), {
      row: t,
      bindRow: o
    } = Zm(), l = {
      setPadding(u) {
        r.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (Di(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Rt("--span-" + u + "-" + m)), f && v.push(Rt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Rt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      C(e.onClick, u);
    };
    return de([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), C(o, l), {
      n: Rt,
      classes: Jm,
      padding: r,
      toNumber: z,
      toSizeUnit: Ce,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: ro
    };
  }
});
Lu.render = Qm;
const Va = Lu;
ie(Va);
var VS = Va, Ru = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function _m() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ir(Ru);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
  };
}
var xm = {
  modelValue: [Array, String, Number],
  accordion: Boolean,
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
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: eh
} = ae("collapse");
function rh(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Uu = ne({
  name: "VarCollapse",
  props: xm,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = _m(), t = A(() => e.modelValue), o = A(() => e.offset), l = A(() => e.divider), i = A(() => e.elevation), s = () => !e.accordion && !Be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (g, h) => s() ? h ? e.accordion ? g : [...e.modelValue, g] : e.accordion ? null : e.modelValue.filter((w) => w !== g) : null, d = (g, h) => {
      var w = u(g, h);
      C(e["onUpdate:modelValue"], w), C(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return n.find((h) => {
          var {
            name: w
          } = h;
          return e.modelValue === w.value;
        });
      var g = n.filter((h) => {
        var {
          name: w
        } = h;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return g.length ? g : void 0;
    }, f = () => e.accordion ? n.find((g) => {
      var {
        index: h,
        name: w
      } = g;
      return w.value === void 0 && e.modelValue === h.value;
    }) : n.filter((g) => {
      var {
        index: h,
        name: w
      } = g;
      return w.value === void 0 && e.modelValue.includes(h.value);
    }), m = () => {
      if (s()) {
        var g = v() || f();
        if (e.accordion && !g || !e.accordion && !g.length) {
          n.forEach((h) => {
            h.init(e.accordion, !1);
          });
          return;
        }
        n.forEach((h) => {
          var w = e.accordion ? g === h : g.includes(h);
          h.init(e.accordion, w);
        });
      }
    }, y = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(y), de(() => r.value, () => Ue().then(m)), de(() => e.modelValue, () => Ue().then(m)), {
      n: eh,
      divider: l
    };
  }
});
Uu.render = rh;
const Na = Uu;
ie(Na);
var NS = Na;
function nh() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Ru);
  return n || Pr("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var ah = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function Il(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ml(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: th,
  classes: oh
} = ae("collapse-item");
function ih(e, r) {
  var n = ue("var-icon");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: W("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
    },
    [V(
      "div",
      {
        class: c(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
      },
      null,
      2
      /* CLASS */
    ), V(
      "div",
      {
        class: c(e.n("header")),
        onClick: r[0] || (r[0] = (a) => e.toggle())
      },
      [V(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [Y(e.$slots, "title", {}, () => [$e(
          le(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), V(
        "div",
        {
          class: c(e.n("header-icon"))
        },
        [Y(e.$slots, "icon", {}, () => [x(n, {
          name: e.icon,
          transition: 250,
          class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
        }, null, 8, ["name", "class"])])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), Te(V(
      "div",
      {
        class: c(e.n("content")),
        ref: "contentEl",
        onTransitionend: r[1] || (r[1] = function() {
          return e.transitionend && e.transitionend(...arguments);
        }),
        onTransitionstart: r[2] || (r[2] = function() {
          return e.start && e.start(...arguments);
        })
      },
      [V(
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
    ), [[Lr, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Hu = ne({
  name: "VarCollapseItem",
  components: {
    VarIcon: Ae
  },
  props: ah,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = nh(), t = !0, o = k(null), l = k(!1), i = k(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, m = A(() => e.name), y = (E, I) => {
      s.value === void 0 || E && Be(s.value) || I === i.value || (i.value = I, g(!0));
    }, g = (E) => {
      e.disabled || E || f(e.name || r.value, !i.value);
    }, h = /* @__PURE__ */ function() {
      var E = Ml(function* () {
        if (o.value && (o.value.style.height = "", l.value = !0, yield qt(), !!o.value)) {
          var {
            offsetHeight: I
          } = o.value;
          o.value.style.height = "0px", yield qt(), o.value && (o.value.style.height = I + "px", t && (yield dr(), t && P()));
        }
      });
      return function() {
        return E.apply(this, arguments);
      };
    }(), w = () => {
      t = !1;
    }, O = /* @__PURE__ */ function() {
      var E = Ml(function* () {
        if (o.value) {
          var {
            offsetHeight: I
          } = o.value;
          o.value.style.height = I + "px", yield qt(), o.value.style.height = "0px";
        }
      });
      return function() {
        return E.apply(this, arguments);
      };
    }(), P = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, S = {
      index: r,
      name: m,
      init: y
    };
    return a(S), de(i, (E) => {
      E ? h() : O();
    }), {
      n: th,
      start: w,
      classes: oh,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: g,
      contentEl: o,
      transitionend: P,
      formatElevation: pr
    };
  }
});
Hu.render = ih;
const Da = Hu;
ie(Da);
var DS = Da, lh = {
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
  onEnd: R(),
  onChange: R()
}, {
  n: sh
} = ae("countdown"), oi = 1e3, ii = 60 * oi, li = 60 * ii, Bl = 24 * li;
function uh(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default", Ot(fo(e.timeData)), () => [$e(
      le(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Yu = ne({
  name: "VarCountdown",
  props: lh,
  setup(e) {
    var r = k(""), n = k({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (y, g) => {
      var h = Object.values(g), w = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (w.forEach((S, E) => {
        y.includes(S) ? y = y.replace(S, kn("" + h[E], 2, "0")) : h[E + 1] += h[E] * O[E];
      }), y.includes("S")) {
        var P = kn("" + h[h.length - 1], 3, "0");
        y.includes("SSS") ? y = y.replace("SSS", P) : y.includes("SS") ? y = y.replace("SS", P.slice(0, 2)) : y = y.replace("S", P.slice(0, 1));
      }
      return y;
    }, u = (y) => {
      var g = Math.floor(y / Bl), h = Math.floor(y % Bl / li), w = Math.floor(y % li / ii), O = Math.floor(y % ii / oi), P = Math.floor(y % oi), S = {
        days: g,
        hours: h,
        minutes: w,
        seconds: O,
        milliseconds: P
      };
      n.value = S, C(e.onChange, n.value), r.value = s(e.format, S);
    }, d = () => {
      var {
        time: y,
        onEnd: g
      } = e, h = performance.now();
      if (a || (a = h + z(y)), l = a - h, l < 0 && (l = 0), u(l), l === 0) {
        C(g);
        return;
      }
      t && (o = pa(d));
    }, v = function(y) {
      y === void 0 && (y = !1), !(t && !y) && (t = !0, a = performance.now() + (l || z(e.time)), d());
    }, f = () => {
      t = !1, dl(o);
    }, m = () => {
      a = 0, t = !1, dl(o), d();
    };
    return de(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), hn(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), ea(() => {
      i = t, f();
    }), $t(f), {
      showTime: r,
      timeData: n,
      n: sh,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Yu.render = uh;
const Aa = Yu;
ie(Aa);
var AS = Aa;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var zn = 9e15, yn = 1e9, si = "0123456789abcdef", ao = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", to = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ui = {
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
  minE: -zn,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: zn,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Fu, Fr, ye = !0, wo = "[DecimalError] ", cn = wo + "Invalid argument: ", ju = wo + "Precision limit exceeded", Wu = wo + "crypto unavailable", Gu = "[object Decimal]", ar = Math.floor, Ze = Math.pow, dh = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, vh = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, fh = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, qu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Nr = 1e7, pe = 7, ch = 9007199254740991, mh = ao.length - 1, di = to.length - 1, Q = { toStringTag: Gu };
Q.absoluteValue = Q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), he(e);
};
Q.ceil = function() {
  return he(new this.constructor(this), this.e + 1, 2);
};
Q.clampedTo = Q.clamp = function(e, r) {
  var n, a = this, t = a.constructor;
  if (e = new t(e), r = new t(r), !e.s || !r.s)
    return new t(NaN);
  if (e.gt(r))
    throw Error(cn + r);
  return n = a.cmp(e), n < 0 ? e : a.cmp(r) > 0 ? r : new t(a);
};
Q.comparedTo = Q.cmp = function(e) {
  var r, n, a, t, o = this, l = o.d, i = (e = new o.constructor(e)).d, s = o.s, u = e.s;
  if (!l || !i)
    return !s || !u ? NaN : s !== u ? s : l === i ? 0 : !l ^ s < 0 ? 1 : -1;
  if (!l[0] || !i[0])
    return l[0] ? s : i[0] ? -u : 0;
  if (s !== u)
    return s;
  if (o.e !== e.e)
    return o.e > e.e ^ s < 0 ? 1 : -1;
  for (a = l.length, t = i.length, r = 0, n = a < t ? a : t; r < n; ++r)
    if (l[r] !== i[r])
      return l[r] > i[r] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
Q.cosine = Q.cos = function() {
  var e, r, n = this, a = n.constructor;
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + pe, a.rounding = 1, n = hh(a, Qu(a, n)), a.precision = e, a.rounding = r, he(Fr == 2 || Fr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
Q.cubeRoot = Q.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ye = !1, o = d.s * Ze(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = rr(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Ze(n, 1 / 3), e = ar((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new v(n), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = De(u.plus(d).times(i), u.plus(s), l + 2, 1), rr(i.d).slice(0, l) === (n = rr(a.d)).slice(0, l))
      if (n = n.slice(l - 3, l + 1), n == "9999" || !t && n == "4999") {
        if (!t && (he(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (he(a, e + 1, 1), r = !a.times(a).times(a).eq(d));
        break;
      }
  return ye = !0, he(a, e, v.rounding, r);
};
Q.decimalPlaces = Q.dp = function() {
  var e, r = this.d, n = NaN;
  if (r) {
    if (e = r.length - 1, n = (e - ar(this.e / pe)) * pe, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
Q.dividedBy = Q.div = function(e) {
  return De(this, new this.constructor(e));
};
Q.dividedToIntegerBy = Q.divToInt = function(e) {
  var r = this, n = r.constructor;
  return he(De(r, new n(e), 0, 1, 1), n.precision, n.rounding);
};
Q.equals = Q.eq = function(e) {
  return this.cmp(e) === 0;
};
Q.floor = function() {
  return he(new this.constructor(this), this.e + 1, 3);
};
Q.greaterThan = Q.gt = function(e) {
  return this.cmp(e) > 0;
};
Q.greaterThanOrEqualTo = Q.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
Q.hyperbolicCosine = Q.cosh = function() {
  var e, r, n, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / So(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = qn(l, 1, o.times(r), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return he(o, l.precision = n, l.rounding = a, !0);
};
Q.hyperbolicSine = Q.sinh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (r = o.precision, n = o.rounding, o.precision = r + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = qn(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / So(5, e)), t = qn(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = r, o.rounding = n, he(t, r, n, !0);
};
Q.hyperbolicTangent = Q.tanh = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 7, a.rounding = 1, De(n.sinh(), n.cosh(), a.precision = e, a.rounding = r)) : new a(n.s);
};
Q.inverseCosine = Q.acos = function() {
  var e, r = this, n = r.constructor, a = r.abs().cmp(1), t = n.precision, o = n.rounding;
  return a !== -1 ? a === 0 ? r.isNeg() ? Vr(n, t, o) : new n(0) : new n(NaN) : r.isZero() ? Vr(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, r = r.asin(), e = Vr(n, t + 4, o).times(0.5), n.precision = t, n.rounding = o, e.minus(r));
};
Q.inverseHyperbolicCosine = Q.acosh = function() {
  var e, r, n = this, a = n.constructor;
  return n.lte(1) ? new a(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, a.rounding = 1, ye = !1, n = n.times(n).minus(1).sqrt().plus(n), ye = !0, a.precision = e, a.rounding = r, n.ln()) : new a(n);
};
Q.inverseHyperbolicSine = Q.asinh = function() {
  var e, r, n = this, a = n.constructor;
  return !n.isFinite() || n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, a.rounding = 1, ye = !1, n = n.times(n).plus(1).sqrt().plus(n), ye = !0, a.precision = e, a.rounding = r, n.ln());
};
Q.inverseHyperbolicTangent = Q.atanh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? he(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = De(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
};
Q.inverseSine = Q.asin = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (r = t.abs().cmp(1), n = o.precision, a = o.rounding, r !== -1 ? r === 0 ? (e = Vr(o, n + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = a, t.times(2)));
};
Q.inverseTangent = Q.atan = function() {
  var e, r, n, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= di)
      return l = Vr(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= di)
      return l = Vr(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, n = Math.min(28, i / pe + 2 | 0), e = n; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ye = !1, r = Math.ceil(i / pe), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[r] !== void 0)
      for (e = r; l.d[e] === o.d[e] && e--; )
        ;
  return n && (l = l.times(2 << n - 1)), ye = !0, he(l, d.precision = v, d.rounding = f, !0);
};
Q.isFinite = function() {
  return !!this.d;
};
Q.isInteger = Q.isInt = function() {
  return !!this.d && ar(this.e / pe) > this.d.length - 2;
};
Q.isNaN = function() {
  return !this.s;
};
Q.isNegative = Q.isNeg = function() {
  return this.s < 0;
};
Q.isPositive = Q.isPos = function() {
  return this.s > 0;
};
Q.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
Q.lessThan = Q.lt = function(e) {
  return this.cmp(e) < 0;
};
Q.lessThanOrEqualTo = Q.lte = function(e) {
  return this.cmp(e) < 1;
};
Q.logarithm = Q.log = function(e) {
  var r, n, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, m = 5;
  if (e == null)
    e = new d(10), r = !0;
  else {
    if (e = new d(e), n = e.d, e.s < 0 || !n || !n[0] || e.eq(1))
      return new d(NaN);
    r = e.eq(10);
  }
  if (n = u.d, u.s < 0 || !n || !n[0] || u.eq(1))
    return new d(n && !n[0] ? -1 / 0 : u.s != 1 ? NaN : n ? 0 : 1 / 0);
  if (r)
    if (n.length > 1)
      o = !0;
    else {
      for (t = n[0]; t % 10 === 0; )
        t /= 10;
      o = t !== 1;
    }
  if (ye = !1, i = v + m, l = on(u, i), a = r ? oo(d, i + 10) : on(e, i), s = De(l, a, i, 1), za(s.d, t = v, f))
    do
      if (i += 10, l = on(u, i), a = r ? oo(d, i + 10) : on(e, i), s = De(l, a, i, 1), !o) {
        +rr(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = he(s, v + 1, 0));
        break;
      }
    while (za(s.d, t += 10, f));
  return ye = !0, he(s, v, f);
};
Q.minus = Q.sub = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, y = m.constructor;
  if (e = new y(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new y(NaN) : m.d ? e.s = -e.s : e = new y(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, i = y.precision, s = y.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new y(m);
    else
      return new y(s === 3 ? -0 : 0);
    return ye ? he(e, i, s) : e;
  }
  if (n = ar(e.e / pe), d = ar(m.e / pe), u = u.slice(), o = d - n, o) {
    for (v = o < 0, v ? (r = u, o = -o, l = f.length) : (r = f, n = d, l = u.length), a = Math.max(Math.ceil(i / pe), l) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; )
      r.push(0);
    r.reverse();
  } else {
    for (a = u.length, l = f.length, v = a < l, v && (l = a), a = 0; a < l; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    o = 0;
  }
  for (v && (r = u, u = f, f = r, e.s = -e.s), l = u.length, a = f.length - l; a > 0; --a)
    u[l++] = 0;
  for (a = f.length; a > o; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = Nr - 1;
      --u[t], u[a] += Nr;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --n;
  return u[0] ? (e.d = u, e.e = Co(u, n), ye ? he(e, i, s) : e) : new y(s === 3 ? -0 : 0);
};
Q.modulo = Q.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? he(new a(n), a.precision, a.rounding) : (ye = !1, a.modulo == 9 ? (r = De(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = De(n, e, 0, a.modulo, 1), r = r.times(e), ye = !0, n.minus(r));
};
Q.naturalExponential = Q.exp = function() {
  return vi(this);
};
Q.naturalLogarithm = Q.ln = function() {
  return on(this);
};
Q.negated = Q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, he(e);
};
Q.plus = Q.add = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), ye ? he(e, i, s) : e;
  if (o = ar(v.e / pe), a = ar(e.e / pe), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (n = u, t = -t, l = d.length) : (n = d, a = o, l = u.length), o = Math.ceil(i / pe), l = o > l ? o + 1 : l + 1, t > l && (t = l, n.length = 1), n.reverse(); t--; )
      n.push(0);
    n.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, n = d, d = u, u = n), r = 0; t; )
    r = (u[--t] = u[t] + d[t] + r) / Nr | 0, u[t] %= Nr;
  for (r && (u.unshift(r), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = Co(u, a), ye ? he(e, i, s) : e;
};
Q.precision = Q.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(cn + e);
  return n.d ? (r = Xu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
Q.round = function() {
  var e = this, r = e.constructor;
  return he(new r(e), e.e + 1, r.rounding);
};
Q.sine = Q.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + pe, a.rounding = 1, n = gh(a, Qu(a, n)), a.precision = e, a.rounding = r, he(Fr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
Q.squareRoot = Q.sqrt = function() {
  var e, r, n, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (ye = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (r = rr(i), (r.length + s) % 2 == 0 && (r += "0"), u = Math.sqrt(r), s = ar((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? r = "5e" + s : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + s), a = new d(r)) : a = new d(u.toString()), n = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(De(l, o, n + 2, 1)).times(0.5), rr(o.d).slice(0, n) === (r = rr(a.d)).slice(0, n))
      if (r = r.slice(n - 3, n + 1), r == "9999" || !t && r == "4999") {
        if (!t && (he(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        n += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (he(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return ye = !0, he(a, s, d.rounding, e);
};
Q.tangent = Q.tan = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = De(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, he(Fr == 2 || Fr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
Q.times = Q.mul = function(e) {
  var r, n, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (n = ar(d.e / pe) + ar(e.e / pe), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (r = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + r, o[t--] = i % Nr | 0, r = i / Nr | 0;
    o[t] = (o[t] + r) % Nr | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return r ? ++n : o.shift(), e.d = o, e.e = Co(o, n), ye ? he(e, v.precision, v.rounding) : e;
};
Q.toBinary = function(e, r) {
  return Xi(this, 2, e, r);
};
Q.toDecimalPlaces = Q.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (hr(e, 0, yn), r === void 0 ? r = a.rounding : hr(r, 0, 8), he(n, e + n.e + 1, r));
};
Q.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Ur(a, !0) : (hr(e, 0, yn), r === void 0 ? r = t.rounding : hr(r, 0, 8), a = he(new t(a), e + 1, r), n = Ur(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
Q.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Ur(t) : (hr(e, 0, yn), r === void 0 ? r = o.rounding : hr(r, 0, 8), a = he(new o(t), e + t.e + 1, r), n = Ur(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
Q.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, y = m.d, g = m.constructor;
  if (!y)
    return new g(m);
  if (u = n = new g(1), a = s = new g(0), r = new g(a), o = r.e = Xu(y) - m.e - 1, l = o % pe, r.d[0] = Ze(10, l < 0 ? pe + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new g(e), !i.isInt() || i.lt(u))
      throw Error(cn + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (ye = !1, i = new g(rr(y)), d = g.precision, g.precision = o = y.length * pe * 2; v = De(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = De(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = De(u, a, o, 1).minus(m).abs().cmp(De(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], g.precision = d, ye = !0, f;
};
Q.toHexadecimal = Q.toHex = function(e, r) {
  return Xi(this, 16, e, r);
};
Q.toNearest = function(e, r) {
  var n = this, a = n.constructor;
  if (n = new a(n), e == null) {
    if (!n.d)
      return n;
    e = new a(1), r = a.rounding;
  } else {
    if (e = new a(e), r === void 0 ? r = a.rounding : hr(r, 0, 8), !n.d)
      return e.s ? n : e;
    if (!e.d)
      return e.s && (e.s = n.s), e;
  }
  return e.d[0] ? (ye = !1, n = De(n, e, 0, r, 1).times(e), ye = !0, he(n)) : (e.s = n.s, n = e), n;
};
Q.toNumber = function() {
  return +this;
};
Q.toOctal = function(e, r) {
  return Xi(this, 8, e, r);
};
Q.toPower = Q.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ze(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return he(i, a, o);
  if (r = ar(e.e / pe), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= ch)
    return t = Ku(s, i, n, a), e.s < 0 ? new s(1).div(t) : he(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Ze(+i, u), r = n == 0 || !isFinite(n) ? ar(u * (Math.log("0." + rr(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (ye = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = vi(e.times(on(i, a + n)), a), t.d && (t = he(t, a + 5, 1), za(t.d, a, o) && (r = a + 10, t = he(vi(e.times(on(i, r + n)), r), r + 5, 1), +rr(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = he(t, a + 1, 0)))), t.s = l, ye = !0, s.rounding = o, he(t, a, o));
};
Q.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Ur(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (hr(e, 1, yn), r === void 0 ? r = t.rounding : hr(r, 0, 8), a = he(new t(a), e, r), n = Ur(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
Q.toSignificantDigits = Q.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (hr(e, 1, yn), r === void 0 ? r = a.rounding : hr(r, 0, 8)), he(new a(n), e, r);
};
Q.toString = function() {
  var e = this, r = e.constructor, n = Ur(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
Q.truncated = Q.trunc = function() {
  return he(new this.constructor(this), this.e + 1, 1);
};
Q.valueOf = Q.toJSON = function() {
  var e = this, r = e.constructor, n = Ur(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function rr(e) {
  var r, n, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, r = 1; r < t; r++)
      a = e[r] + "", n = pe - a.length, n && (o += _r(n)), o += a;
    l = e[r], a = l + "", n = pe - a.length, n && (o += _r(n));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function hr(e, r, n) {
  if (e !== ~~e || e < r || e > n)
    throw Error(cn + e);
}
function za(e, r, n, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += pe, t = 0) : (t = Math.ceil((r + 1) / pe), r %= pe), o = Ze(10, pe - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ze(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ze(10, r - 3) - 1, l;
}
function Xt(e, r, n) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= r;
    for (t[0] += si.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > n - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / n | 0, t[a] %= n);
  }
  return t.reverse();
}
function hh(e, r) {
  var n, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (n = Math.ceil(a / 3), t = (1 / So(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), e.precision += n, r = qn(e, 1, r.times(t), new e(1));
  for (var o = n; o--; ) {
    var l = r.times(r);
    r = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= n, r;
}
var De = function() {
  function e(a, t, o) {
    var l, i = 0, s = a.length;
    for (a = a.slice(); s--; )
      l = a[s] * t + i, a[s] = l % o | 0, i = l / o | 0;
    return i && a.unshift(i), a;
  }
  function r(a, t, o, l) {
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
  function n(a, t, o, l) {
    for (var i = 0; o--; )
      a[o] -= i, i = a[o] < t[o] ? 1 : 0, a[o] = i * l + a[o] - t[o];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, o, l, i, s) {
    var u, d, v, f, m, y, g, h, w, O, P, S, E, I, N, b, $, U, D, L, K = a.constructor, oe = a.s == t.s ? 1 : -1, _ = a.d, H = t.d;
    if (!_ || !_[0] || !H || !H[0])
      return new K(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (_ ? H && _[0] == H[0] : !H) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          _ && _[0] == 0 || !H ? oe * 0 : oe / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Nr, m = pe, d = ar(a.e / m) - ar(t.e / m)), D = H.length, $ = _.length, w = new K(oe), O = w.d = [], v = 0; H[v] == (_[v] || 0); v++)
      ;
    if (H[v] > (_[v] || 0) && d--, o == null ? (I = o = K.precision, l = K.rounding) : i ? I = o + (a.e - t.e) + 1 : I = o, I < 0)
      O.push(1), y = !0;
    else {
      if (I = I / m + 2 | 0, v = 0, D == 1) {
        for (f = 0, H = H[0], I++; (v < $ || f) && I--; v++)
          N = f * s + (_[v] || 0), O[v] = N / H | 0, f = N % H | 0;
        y = f || v < $;
      } else {
        for (f = s / (H[0] + 1) | 0, f > 1 && (H = e(H, f, s), _ = e(_, f, s), D = H.length, $ = _.length), b = D, P = _.slice(0, D), S = P.length; S < D; )
          P[S++] = 0;
        L = H.slice(), L.unshift(0), U = H[0], H[1] >= s / 2 && ++U;
        do
          f = 0, u = r(H, P, D, S), u < 0 ? (E = P[0], D != S && (E = E * s + (P[1] || 0)), f = E / U | 0, f > 1 ? (f >= s && (f = s - 1), g = e(H, f, s), h = g.length, S = P.length, u = r(g, P, h, S), u == 1 && (f--, n(g, D < h ? L : H, h, s))) : (f == 0 && (u = f = 1), g = H.slice()), h = g.length, h < S && g.unshift(0), n(P, g, S, s), u == -1 && (S = P.length, u = r(H, P, D, S), u < 1 && (f++, n(P, D < S ? L : H, S, s))), S = P.length) : u === 0 && (f++, P = [0]), O[v++] = f, u && P[0] ? P[S++] = _[b] || 0 : (P = [_[b]], S = 1);
        while ((b++ < $ || P[0] !== void 0) && I--);
        y = P[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (m == 1)
      w.e = d, Fu = y;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, he(w, i ? o + w.e + 1 : o, l, y);
    }
    return w;
  };
}();
function he(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (r != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = r - t, o < 0)
        o += pe, l = r, d = v[f = 0], s = d / Ze(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / pe), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= pe, l = o - pe + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= pe, l = o - pe + t, s = l < 0 ? 0 : d / Ze(10, t - l - 1) % 10 | 0;
      }
      if (a = a || r < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Ze(10, t - l - 1)), u = n < 4 ? (s || a) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || a || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Ze(10, t - l) : 0 : v[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !v[0])
        return v.length = 0, u ? (r -= e.e + 1, v[0] = Ze(10, (pe - r % pe) % pe), e.e = -r || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Ze(10, pe - o), v[f] = l > 0 ? (d / Ze(10, t - l) % Ze(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == Nr && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != Nr)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return ye && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Ur(e, r, n) {
  if (!e.isFinite())
    return Ju(e);
  var a, t = e.e, o = rr(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + _r(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + _r(-t - 1) + o, n && (a = n - l) > 0 && (o += _r(a))) : t >= l ? (o += _r(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + _r(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += _r(a))), o;
}
function Co(e, r) {
  var n = e[0];
  for (r *= pe; n >= 10; n /= 10)
    r++;
  return r;
}
function oo(e, r, n) {
  if (r > mh)
    throw ye = !0, n && (e.precision = n), Error(ju);
  return he(new e(ao), r, 1, !0);
}
function Vr(e, r, n) {
  if (r > di)
    throw Error(ju);
  return he(new e(to), r, n, !0);
}
function Xu(e) {
  var r = e.length - 1, n = r * pe + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      n--;
    for (r = e[0]; r >= 10; r /= 10)
      n++;
  }
  return n;
}
function _r(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function Ku(e, r, n, a) {
  var t, o = new e(1), l = Math.ceil(a / pe + 4);
  for (ye = !1; ; ) {
    if (n % 2 && (o = o.times(r), Vl(o.d, l) && (t = !0)), n = ar(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), Vl(r.d, l);
  }
  return ye = !0, o;
}
function El(e) {
  return e.d[e.d.length - 1] & 1;
}
function Zu(e, r, n) {
  for (var a, t = new e(r[0]), o = 0; ++o < r.length; )
    if (a = new e(r[o]), a.s)
      t[n](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function vi(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, y = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (ye = !1, s = y) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ze(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = he(o.times(e), s, 1), n = n.times(++d), i = l.plus(De(o, n, s, 1)), rr(i.d).slice(0, s) === rr(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = he(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && za(l.d, s - a, m, u))
          f.precision = s += 10, n = o = i = new f(1), d = 0, u++;
        else
          return he(l, f.precision = y, m, ye = !0);
      else
        return f.precision = y, l;
    }
    l = i;
  }
}
function on(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, y = 10, g = e, h = g.d, w = g.constructor, O = w.rounding, P = w.precision;
  if (g.s < 0 || !h || !h[0] || !g.e && h[0] == 1 && h.length == 1)
    return new w(h && !h[0] ? -1 / 0 : g.s != 1 ? NaN : h ? 0 : g);
  if (r == null ? (ye = !1, d = P) : d = r, w.precision = d += y, n = rr(h), a = n.charAt(0), Math.abs(o = g.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      g = g.times(e), n = rr(g.d), a = n.charAt(0), m++;
    o = g.e, a > 1 ? (g = new w("0." + n), o++) : g = new w(a + "." + n.slice(1));
  } else
    return u = oo(w, d + 2, P).times(o + ""), g = on(new w(a + "." + n.slice(1)), d - y).plus(u), w.precision = P, r == null ? he(g, P, O, ye = !0) : g;
  for (v = g, s = l = g = De(g.minus(1), g.plus(1), d, 1), f = he(g.times(g), d, 1), t = 3; ; ) {
    if (l = he(l.times(f), d, 1), u = s.plus(De(l, new w(t), d, 1)), rr(u.d).slice(0, d) === rr(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(oo(w, d + 2, P).times(o + ""))), s = De(s, new w(m), d, 1), r == null)
        if (za(s.d, d - y, O, i))
          w.precision = d += y, u = l = g = De(v.minus(1), v.plus(1), d, 1), f = he(g.times(g), d, 1), t = i = 1;
        else
          return he(s, w.precision = P, O, ye = !0);
      else
        return w.precision = P, s;
    s = u, t += 2;
  }
}
function Ju(e) {
  return String(e.s * e.s / 0);
}
function fi(e, r) {
  var n, a, t;
  for ((n = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (a = r.search(/e/i)) > 0 ? (n < 0 && (n = a), n += +r.slice(a + 1), r = r.substring(0, a)) : n < 0 && (n = r.length), a = 0; r.charCodeAt(a) === 48; a++)
    ;
  for (t = r.length; r.charCodeAt(t - 1) === 48; --t)
    ;
  if (r = r.slice(a, t), r) {
    if (t -= a, e.e = n = n - a - 1, e.d = [], a = (n + 1) % pe, n < 0 && (a += pe), a < t) {
      for (a && e.d.push(+r.slice(0, a)), t -= pe; a < t; )
        e.d.push(+r.slice(a, a += pe));
      r = r.slice(a), a = pe - r.length;
    } else
      a -= t;
    for (; a--; )
      r += "0";
    e.d.push(+r), ye && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function ph(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), qu.test(r))
      return fi(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (vh.test(r))
    n = 16, r = r.toLowerCase();
  else if (dh.test(r))
    n = 2;
  else if (fh.test(r))
    n = 8;
  else
    throw Error(cn + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Ku(a, new a(n), o, o * 2)), u = Xt(r, n, Nr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = Co(u, d), e.d = u, ye = !1, l && (e = De(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ze(2, s) : ln.pow(2, s))), ye = !0, e);
}
function gh(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : qn(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / So(5, n)), r = qn(e, 2, r, r);
  for (var t, o = new e(5), l = new e(16), i = new e(20); n--; )
    t = r.times(r), r = r.times(o.plus(t.times(l.times(t).minus(i))));
  return r;
}
function qn(e, r, n, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / pe);
  for (ye = !1, s = n.times(n), i = new e(a); ; ) {
    if (l = De(i.times(s), new e(r++ * r++), u, 1), i = t ? a.plus(l) : a.minus(l), a = De(l.times(s), new e(r++ * r++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return ye = !0, l.d.length = d + 1, l;
}
function So(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function Qu(e, r) {
  var n, a = r.s < 0, t = Vr(e, e.precision, 1), o = t.times(0.5);
  if (r = r.abs(), r.lte(o))
    return Fr = a ? 4 : 1, r;
  if (n = r.divToInt(t), n.isZero())
    Fr = a ? 3 : 2;
  else {
    if (r = r.minus(n.times(t)), r.lte(o))
      return Fr = El(n) ? a ? 2 : 3 : a ? 4 : 1, r;
    Fr = El(n) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function Xi(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, y = n !== void 0;
  if (y ? (hr(n, 1, yn), a === void 0 ? a = m.rounding : hr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = Ju(e);
  else {
    for (d = Ur(e), l = d.indexOf("."), y ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Xt(Ur(f), 10, t), f.e = f.d.length), v = Xt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = y ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = De(e, f, n, a, 0, t), v = e.d, o = e.e, u = Fu), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += si.charAt(v[l]);
      if (y) {
        if (s > 1)
          if (r == 16 || r == 8) {
            for (l = r == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Xt(d, t, r), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += si.charAt(v[l]);
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
    d = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function Vl(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function bh(e) {
  return new this(e).abs();
}
function yh(e) {
  return new this(e).acos();
}
function wh(e) {
  return new this(e).acosh();
}
function Ch(e, r) {
  return new this(e).plus(r);
}
function Sh(e) {
  return new this(e).asin();
}
function kh(e) {
  return new this(e).asinh();
}
function $h(e) {
  return new this(e).atan();
}
function Th(e) {
  return new this(e).atanh();
}
function Ph(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Vr(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Vr(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Vr(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(De(e, r, o, 1)), r = Vr(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(De(e, r, o, 1)), n;
}
function Oh(e) {
  return new this(e).cbrt();
}
function Ih(e) {
  return he(e = new this(e), e.e + 1, 2);
}
function Mh(e, r, n) {
  return new this(e).clamp(r, n);
}
function Bh(e) {
  if (!e || typeof e != "object")
    throw Error(wo + "Object expected");
  var r, n, a, t = e.defaults === !0, o = [
    "precision",
    1,
    yn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -zn,
    0,
    "toExpPos",
    0,
    zn,
    "maxE",
    0,
    zn,
    "minE",
    -zn,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < o.length; r += 3)
    if (n = o[r], t && (this[n] = ui[n]), (a = e[n]) !== void 0)
      if (ar(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(cn + n + ": " + a);
  if (n = "crypto", t && (this[n] = ui[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Wu);
      else
        this[n] = !1;
    else
      throw Error(cn + n + ": " + a);
  return this;
}
function Eh(e) {
  return new this(e).cos();
}
function Vh(e) {
  return new this(e).cosh();
}
function _u(e) {
  var r, n, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Nl(o)) {
      u.s = o.s, ye ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        ye ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return fi(u, o.toString());
    } else if (s !== "string")
      throw Error(cn + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), qu.test(o) ? fi(u, o) : ph(u, o);
  }
  if (t.prototype = Q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Bh, t.clone = _u, t.isDecimal = Nl, t.abs = bh, t.acos = yh, t.acosh = wh, t.add = Ch, t.asin = Sh, t.asinh = kh, t.atan = $h, t.atanh = Th, t.atan2 = Ph, t.cbrt = Oh, t.ceil = Ih, t.clamp = Mh, t.cos = Eh, t.cosh = Vh, t.div = Nh, t.exp = Dh, t.floor = Ah, t.hypot = zh, t.ln = Lh, t.log = Rh, t.log10 = Hh, t.log2 = Uh, t.max = Yh, t.min = Fh, t.mod = jh, t.mul = Wh, t.pow = Gh, t.random = qh, t.round = Xh, t.sign = Kh, t.sin = Zh, t.sinh = Jh, t.sqrt = Qh, t.sub = _h, t.sum = xh, t.tan = ep, t.tanh = rp, t.trunc = np, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function Nh(e, r) {
  return new this(e).div(r);
}
function Dh(e) {
  return new this(e).exp();
}
function Ah(e) {
  return he(e = new this(e), e.e + 1, 3);
}
function zh() {
  var e, r, n = new this(0);
  for (ye = !1, e = 0; e < arguments.length; )
    if (r = new this(arguments[e++]), r.d)
      n.d && (n = n.plus(r.times(r)));
    else {
      if (r.s)
        return ye = !0, new this(1 / 0);
      n = r;
    }
  return ye = !0, n.sqrt();
}
function Nl(e) {
  return e instanceof ln || e && e.toStringTag === Gu || !1;
}
function Lh(e) {
  return new this(e).ln();
}
function Rh(e, r) {
  return new this(e).log(r);
}
function Uh(e) {
  return new this(e).log(2);
}
function Hh(e) {
  return new this(e).log(10);
}
function Yh() {
  return Zu(this, arguments, "lt");
}
function Fh() {
  return Zu(this, arguments, "gt");
}
function jh(e, r) {
  return new this(e).mod(r);
}
function Wh(e, r) {
  return new this(e).mul(r);
}
function Gh(e, r) {
  return new this(e).pow(r);
}
function qh(e) {
  var r, n, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : hr(e, 1, yn), a = Math.ceil(e / pe), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = r[o], t >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(a *= 4); o < a; )
        t = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Wu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= pe, a && e && (t = Ze(10, pe - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    n = 0, i = [0];
  else {
    for (n = -1; i[0] === 0; n -= pe)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < pe && (n -= pe - a);
  }
  return l.e = n, l.d = i, l;
}
function Xh(e) {
  return he(e = new this(e), e.e + 1, this.rounding);
}
function Kh(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Zh(e) {
  return new this(e).sin();
}
function Jh(e) {
  return new this(e).sinh();
}
function Qh(e) {
  return new this(e).sqrt();
}
function _h(e, r) {
  return new this(e).sub(r);
}
function xh() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (ye = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return ye = !0, he(n, this.precision, this.rounding);
}
function ep(e) {
  return new this(e).tan();
}
function rp(e) {
  return new this(e).tanh();
}
function np(e) {
  return he(e = new this(e), e.e + 1, 1);
}
Q[Symbol.for("nodejs.util.inspect.custom")] = Q.toString;
Q[Symbol.toStringTag] = "Decimal";
var ln = Q.constructor = _u(ui);
ao = new ln(ao);
to = new ln(to);
var ap = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: [String, Number],
  max: [String, Number],
  step: {
    type: [String, Number],
    default: 1
  },
  color: String,
  inputWidth: [String, Number],
  inputTextSize: [String, Number],
  buttonSize: [String, Number],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  decimalLength: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  disableIncrement: Boolean,
  disableDecrement: Boolean,
  disableInput: Boolean,
  lazyChange: Boolean,
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
  rules: Array,
  onBeforeChange: R(),
  onChange: R(),
  onIncrement: R(),
  onDecrement: R(),
  "onUpdate:modelValue": R()
}, {
  n: tp,
  classes: op
} = ae("counter"), Dl = 100, Al = 600, ip = ["inputmode", "readonly", "disabled"];
function lp(e, r) {
  var n = ue("var-icon"), a = ue("var-button"), t = ue("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [V(
      "div",
      ze({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [x(a, {
        class: c(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
        style: W({
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
      }, {
        default: me(() => [x(n, {
          name: "minus"
        })]),
        _: 1
        /* STABLE */
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), Te(V("input", {
        class: c(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
        style: W({
          width: e.toSizeUnit(e.inputWidth),
          fontSize: e.toSizeUnit(e.inputTextSize)
        }),
        inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
        readonly: e.readonly || e.formReadonly,
        disabled: e.disabled || e.formDisabled || e.disableInput,
        "onUpdate:modelValue": r[0] || (r[0] = (o) => e.inputValue = o),
        onChange: r[1] || (r[1] = function() {
          return e.handleChange && e.handleChange(...arguments);
        })
      }, null, 46, ip), [[_v, e.inputValue]]), x(a, {
        class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
        style: W({
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
      }, {
        default: me(() => [x(n, {
          name: "plus"
        })]),
        _: 1
        /* STABLE */
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])],
      16
      /* FULL_PROPS */
    ), x(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var xu = ne({
  name: "VarCounter",
  components: {
    VarButton: vr,
    VarIcon: Ae,
    VarFormDetails: nr
  },
  directives: {
    Ripple: Xe
  },
  inheritAttrs: !1,
  props: ap,
  setup(e) {
    var r = k(""), {
      bindForm: n,
      form: a
    } = Ir(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: l,
      // expose
      resetValidation: i
    } = Or(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, y = () => l(e.rules, e.modelValue), g = (H) => {
      Ue(() => {
        var {
          validateTrigger: F,
          rules: j,
          modelValue: M
        } = e;
        o(F, H, j, M);
      });
    }, h = () => {
      var {
        min: H
      } = e;
      C(e["onUpdate:modelValue"], H != null ? z(H) : 0), i();
    }, w = {
      reset: h,
      validate: y,
      resetValidation: i
    }, O = A(() => {
      var {
        max: H,
        modelValue: F
      } = e;
      return H != null && z(F) >= z(H);
    }), P = A(() => {
      var {
        min: H,
        modelValue: F
      } = e;
      return H != null && z(F) <= z(H);
    }), S = (H) => {
      var {
        decimalLength: F,
        max: j,
        min: M
      } = e, B = z(H);
      return j != null && B > z(j) && (B = z(j)), M != null && B < z(M) && (B = z(M)), H = String(B), F != null && (H = B.toFixed(z(F))), H;
    }, E = (H) => {
      var {
        lazyChange: F,
        onBeforeChange: j
      } = e, {
        value: M
      } = H.target, B = S(M);
      F ? C(j, z(B), _) : oe(B), g("onInputChange");
    }, I = () => {
      var {
        disabled: H,
        readonly: F,
        disableDecrement: j,
        decrementButton: M,
        lazyChange: B,
        step: J,
        modelValue: q,
        onDecrement: X,
        onBeforeChange: Z
      } = e;
      if (!(u != null && u.value || s != null && s.value || H || F || j || !M) && !P.value) {
        var re = new ln(z(q)).minus(new ln(z(J))).toString(), ce = S(re), ke = z(ce);
        C(X, ke), B ? C(Z, ke, _) : (oe(ce), g("onDecrement"));
      }
    }, N = () => {
      var {
        disabled: H,
        readonly: F,
        disableIncrement: j,
        incrementButton: M,
        lazyChange: B,
        step: J,
        modelValue: q,
        onIncrement: X,
        onBeforeChange: Z
      } = e;
      if (!(u != null && u.value || s != null && s.value || H || F || j || !M) && !O.value) {
        var re = new ln(z(q)).plus(new ln(z(J))).toString(), ce = S(re), ke = z(ce);
        C(X, ke), B ? C(Z, ke, _) : (oe(ce), g("onIncrement"));
      }
    }, b = () => {
      var {
        press: H,
        lazyChange: F
      } = e;
      !H || F || (m = window.setTimeout(() => {
        K();
      }, Al));
    }, $ = () => {
      var {
        press: H,
        lazyChange: F
      } = e;
      !H || F || (f = window.setTimeout(() => {
        L();
      }, Al));
    }, U = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, D = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, L = () => {
      d = window.setTimeout(() => {
        N(), L();
      }, Dl);
    }, K = () => {
      v = window.setTimeout(() => {
        I(), K();
      }, Dl);
    }, oe = (H) => {
      r.value = H;
      var F = z(H);
      C(e["onUpdate:modelValue"], F);
    }, _ = (H) => {
      oe(S(String(H))), g("onLazyChange");
    };
    return C(n, w), de(() => e.modelValue, (H) => {
      oe(S(String(H))), C(e.onChange, z(H));
    }), oe(S(String(e.modelValue))), {
      n: tp,
      classes: op,
      formatElevation: pr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: O,
      isMin: P,
      validate: y,
      reset: h,
      resetValidation: i,
      handleChange: E,
      decrement: I,
      increment: N,
      pressDecrement: b,
      pressIncrement: $,
      releaseDecrement: U,
      releaseIncrement: D,
      toSizeUnit: Ce,
      toNumber: z
    };
  }
});
xu.render = lp;
const La = xu;
ie(La);
var zS = La, ed = 60, rd = ed * 60, nd = rd * 24, sp = nd * 7, Xn = 1e3, Do = ed * Xn, zl = rd * Xn, up = nd * Xn, dp = sp * Xn, Ki = "millisecond", Ln = "second", Rn = "minute", Un = "hour", xr = "day", Kt = "week", Er = "month", ad = "quarter", en = "year", Hn = "date", vp = "YYYY-MM-DDTHH:mm:ssZ", Ll = "Invalid Date", fp = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, cp = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const mp = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ci = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, hp = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + ci(t, 2, "0") + ":" + ci(o, 2, "0");
}, pp = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Er), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Er);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, gp = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, bp = function(r) {
  var n = {
    M: Er,
    y: en,
    w: Kt,
    d: xr,
    D: Hn,
    h: Un,
    m: Rn,
    s: Ln,
    ms: Ki,
    Q: ad
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, yp = function(r) {
  return r === void 0;
};
const wp = {
  s: ci,
  z: hp,
  m: pp,
  a: gp,
  p: bp,
  u: yp
};
var da = "en", Sn = {};
Sn[da] = mp;
var Zi = function(r) {
  return r instanceof ko;
}, io = function e(r, n, a) {
  var t;
  if (!r)
    return da;
  if (typeof r == "string") {
    var o = r.toLowerCase();
    Sn[o] && (t = o), n && (Sn[o] = n, t = o);
    var l = r.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = r.name;
    Sn[i] = r, t = i;
  }
  return !a && t && (da = t), t || !a && da;
}, fe = function(r, n) {
  if (Zi(r))
    return r.clone();
  var a = typeof n == "object" ? n : {};
  return a.date = r, a.args = arguments, new ko(a);
}, Cp = function(r, n) {
  return fe(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ne = wp;
Ne.l = io;
Ne.i = Zi;
Ne.w = Cp;
var Sp = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ne.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match(fp);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(n);
}, ko = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = io(n.locale, null, !0), this.parse(n);
  }
  var r = e.prototype;
  return r.parse = function(a) {
    this.$d = Sp(a), this.$x = a.x || {}, this.init();
  }, r.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, r.$utils = function() {
    return Ne;
  }, r.isValid = function() {
    return this.$d.toString() !== Ll;
  }, r.isSame = function(a, t) {
    var o = fe(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, r.isAfter = function(a, t) {
    return fe(a) < this.startOf(t);
  }, r.isBefore = function(a, t) {
    return this.endOf(t) < fe(a);
  }, r.$g = function(a, t, o) {
    return Ne.u(a) ? this[t] : this.set(o, a);
  }, r.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, r.valueOf = function() {
    return this.$d.getTime();
  }, r.startOf = function(a, t) {
    var o = this, l = Ne.u(t) ? !0 : t, i = Ne.p(a), s = function(w, O) {
      var P = Ne.w(o.$u ? Date.UTC(o.$y, O, w) : new Date(o.$y, O, w), o);
      return l ? P : P.endOf(xr);
    }, u = function(w, O) {
      var P = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Ne.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? P : S).slice(O)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case en:
        return l ? s(1, 0) : s(31, 11);
      case Er:
        return l ? s(1, v) : s(0, v + 1);
      case Kt: {
        var y = this.$locale().weekStart || 0, g = (d < y ? d + 7 : d) - y;
        return s(l ? f - g : f + (6 - g), v);
      }
      case xr:
      case Hn:
        return u(m + "Hours", 0);
      case Un:
        return u(m + "Minutes", 1);
      case Rn:
        return u(m + "Seconds", 2);
      case Ln:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, r.endOf = function(a) {
    return this.startOf(a, !1);
  }, r.$set = function(a, t) {
    var o, l = Ne.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[xr] = i + "Date", o[Hn] = i + "Date", o[Er] = i + "Month", o[en] = i + "FullYear", o[Un] = i + "Hours", o[Rn] = i + "Minutes", o[Ln] = i + "Seconds", o[Ki] = i + "Milliseconds", o)[l], u = l === xr ? this.$D + (t - this.$W) : t;
    if (l === Er || l === en) {
      var d = this.clone().set(Hn, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Hn, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, r.set = function(a, t) {
    return this.clone().$set(a, t);
  }, r.get = function(a) {
    return this[Ne.p(a)]();
  }, r.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Ne.p(t), s = function(f) {
      var m = fe(o);
      return Ne.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Er)
      return this.set(Er, this.$M + a);
    if (i === en)
      return this.set(en, this.$y + a);
    if (i === xr)
      return s(1);
    if (i === Kt)
      return s(7);
    var u = (l = {}, l[Rn] = Do, l[Un] = zl, l[Ln] = Xn, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Ne.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Ll;
    var l = a || vp, i = Ne.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, y = function(P, S, E, I) {
      return P && (P[S] || P(t, l)) || E[S].slice(0, I);
    }, g = function(P) {
      return Ne.s(s % 12 || 12, P, "0");
    }, h = m || function(O, P, S) {
      var E = O < 12 ? "AM" : "PM";
      return S ? E.toLowerCase() : E;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Ne.s(d + 1, 2, "0"),
      MMM: y(o.monthsShort, d, f, 3),
      MMMM: y(f, d),
      D: this.$D,
      DD: Ne.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: y(o.weekdaysMin, this.$W, v, 2),
      ddd: y(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Ne.s(s, 2, "0"),
      h: g(1),
      hh: g(2),
      a: h(s, u, !0),
      A: h(s, u, !1),
      m: String(u),
      mm: Ne.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ne.s(this.$s, 2, "0"),
      SSS: Ne.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(cp, function(O, P) {
      return P || w[O] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Ne.p(t), s = fe(a), u = (s.utcOffset() - this.utcOffset()) * Do, d = this - s, v = Ne.m(this, s);
    return v = (l = {}, l[en] = v / 12, l[Er] = v, l[ad] = v / 3, l[Kt] = (d - u) / dp, l[xr] = (d - u) / up, l[Un] = d / zl, l[Rn] = d / Do, l[Ln] = d / Xn, l)[i] || d, o ? v : Ne.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Er).$D;
  }, r.$locale = function() {
    return Sn[this.$L];
  }, r.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = io(a, t, !0);
    return l && (o.$L = l), o;
  }, r.clone = function() {
    return Ne.w(this.$d, this);
  }, r.toDate = function() {
    return new Date(this.valueOf());
  }, r.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, r.toISOString = function() {
    return this.$d.toISOString();
  }, r.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), td = ko.prototype;
fe.prototype = td;
[["$ms", Ki], ["$s", Ln], ["$m", Rn], ["$H", Un], ["$W", xr], ["$M", Er], ["$y", en], ["$D", Hn]].forEach(function(e) {
  td[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
fe.extend = function(e, r) {
  return e.$i || (e(r, ko, fe), e.$i = !0), fe;
};
fe.locale = io;
fe.isDayjs = Zi;
fe.unix = function(e) {
  return fe(e * 1e3);
};
fe.en = Sn[da];
fe.Ls = Sn;
fe.p = {};
const od = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, id = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
var Zt = [{
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
}], sa = [{
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
}], kp = {
  modelValue: [String, Array],
  type: {
    type: String,
    default: "date"
  },
  allowedDates: Function,
  color: String,
  headerColor: String,
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
  min: String,
  max: String,
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: Boolean,
  multiple: Boolean,
  range: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: $p
} = ae("picker-header");
function Tp(e, r) {
  var n = ue("var-icon"), a = ue("var-button");
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [x(a, {
      round: "",
      text: "",
      style: {
        filter: "opacity(0.54)"
      },
      disabled: e.disabled.left,
      onClick: r[0] || (r[0] = (t) => e.checkDate("prev"))
    }, {
      default: me(() => [x(n, {
        name: "chevron-left"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"]), V(
      "div",
      {
        class: c(e.n("value")),
        onClick: r[1] || (r[1] = (t) => e.$emit("check-panel"))
      },
      [x(je, {
        name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: me(() => [(p(), T(
          "div",
          {
            key: e.showDate
          },
          le(e.showDate),
          1
          /* TEXT */
        ))]),
        _: 1
        /* STABLE */
      }, 8, ["name"])],
      2
      /* CLASS */
    ), x(a, {
      round: "",
      text: "",
      style: {
        filter: "opacity(0.54)"
      },
      disabled: e.disabled.right,
      onClick: r[2] || (r[2] = (t) => e.checkDate("next"))
    }, {
      default: me(() => [x(n, {
        name: "chevron-right"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])],
    2
    /* CLASS */
  );
}
var ld = ne({
  name: "PanelHeader",
  components: {
    VarButton: vr,
    VarIcon: Ae
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
  setup(e, r) {
    var {
      emit: n
    } = r, a = k(!1), t = k(0), o = A(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return z(v) + t.value;
      var f = (i = _e.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return _e.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return de(() => e.date, () => {
      t.value = 0;
    }), {
      n: $p,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
ld.render = Tp;
const sd = ld;
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, mi.apply(this, arguments);
}
fe.extend(od);
fe.extend(id);
var {
  n: Ut,
  classes: Pp
} = ae("month-picker"), {
  n: Ht
} = ae("date-picker");
function Op(e, r) {
  var n = ue("panel-header"), a = ue("var-button");
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [V(
      "div",
      {
        class: c(e.n("content"))
      },
      [x(n, {
        ref: "headerEl",
        type: "month",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickYear,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), x(je, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: me(() => [(p(), T("ul", {
          key: e.panelKey
        }, [(p(!0), T(
          Ve,
          null,
          Ge(e.MONTH_LIST, (t) => (p(), T("li", {
            key: t.index
          }, [x(a, ze({
            type: "primary",
            "var-month-picker-cover": "",
            ripple: !1,
            elevation: e.componentProps.buttonElevation
          }, mi({}, e.buttonProps(t.index)), {
            onClick: (o) => e.chooseMonth(t, o)
          }), {
            default: me(() => [$e(
              le(e.getMonthAbbr(t.index)),
              1
              /* TEXT */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1040, ["elevation", "onClick"])]))),
          128
          /* KEYED_FRAGMENT */
        ))]))]),
        _: 1
        /* STABLE */
      }, 8, ["name"])],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var ud = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: sd
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
  setup(e, r) {
    var {
      emit: n
    } = r, [a, t] = e.current.split("-"), o = k(!1), l = k(0), i = k(null), s = Ye({
      left: !1,
      right: !1
    }), u = A(() => e.choose.chooseYear === e.preview.previewYear), d = A(() => e.preview.previewYear === a), v = (O) => {
      var P, S;
      return (P = (S = _e.value.datePickerMonthDict) == null ? void 0 : S[O].abbr) != null ? P : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: P
        },
        componentProps: {
          min: S,
          max: E
        }
      } = e, I = !0, N = !0, b = P + "-" + O;
      return E && (I = fe(b).isSameOrBefore(fe(E), "month")), S && (N = fe(b).isSameOrAfter(fe(S), "month")), I && N;
    }, m = (O) => {
      var {
        choose: {
          chooseMonths: P,
          chooseDays: S,
          chooseRangeMonth: E
        },
        componentProps: {
          type: I,
          range: N
        }
      } = e;
      if (N) {
        if (!E.length)
          return !1;
        var b = fe(O).isSameOrBefore(fe(E[1]), "month"), $ = fe(O).isSameOrAfter(fe(E[0]), "month");
        return b && $;
      }
      return I === "month" ? P.includes(O) : S.some((U) => U.includes(O));
    }, y = (O) => {
      var {
        choose: {
          chooseMonth: P
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: E,
          color: I,
          multiple: N,
          range: b
        }
      } = e, $ = S + "-" + O, U = () => b || N ? m($) : (P == null ? void 0 : P.index) === O && u.value, D = () => f(O) ? E ? !E($) : !1 : !0, L = D(), K = () => L ? !0 : b || N ? !m($) : !u.value || (P == null ? void 0 : P.index) !== O, oe = () => d.value && t === O && e.componentProps.showCurrent ? (b || N || u.value) && L ? !0 : b || N ? !m($) : u.value ? (P == null ? void 0 : P.index) !== t : !0 : !1, _ = () => L ? "" : oe() ? I ?? "" : U() ? "" : Ht() + "-color-cover", H = _().startsWith(Ht());
      return {
        outline: oe(),
        text: K(),
        color: K() ? "" : I,
        textColor: H ? "" : _(),
        [Ht() + "-color-cover"]: H,
        class: Pp(Ut("button"), [L, Ut("button--disabled")]),
        disabled: L
      };
    }, g = (O, P) => {
      var S = P.currentTarget;
      S.classList.contains(Ut("button--disabled")) || n("choose-month", O);
    }, h = (O) => {
      o.value = O === "prev", l.value += O === "prev" ? -1 : 1, n("check-preview", "year", O);
    }, w = (O) => {
      i.value.checkDate(O);
    };
    return de(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: P,
          max: S
        }
      } = e;
      S && (s.right = !fe("" + (z(O) + 1)).isSameOrBefore(fe(S), "year")), P && (s.left = !fe("" + (z(O) - 1)).isSameOrAfter(fe(P), "year"));
    }, {
      immediate: !0
    }), {
      n: Ut,
      nDate: Ht,
      pack: _e,
      MONTH_LIST: Zt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: w,
      buttonProps: y,
      getMonthAbbr: v,
      chooseMonth: g,
      checkDate: h
    };
  }
});
ud.render = Op;
const Ip = ud;
var {
  n: Rl,
  classes: Mp
} = ae("year-picker"), Bp = ["onClick"];
function Ep(e, r) {
  return p(), T(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), T(
      Ve,
      null,
      Ge(e.yearList, (n) => (p(), T("li", {
        key: n,
        class: c(e.classes(e.n("item"), [n === e.toNumber(e.preview), e.n("item--active")])),
        style: W({
          color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
        }),
        onClick: (a) => e.chooseYear(n)
      }, le(n), 15, Bp))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var dd = ne({
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
  setup(e, r) {
    var {
      emit: n
    } = r, a = A(() => {
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
        var d = fe(i).format("YYYY-MM-D"), v = z(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = fe(s).format("YYYY-MM-D"), m = z(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var y = u[0]; y >= u[1]; y--)
        o.push(y);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return tr(() => {
      var o = document.querySelector("." + Rl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Rl,
      classes: Mp,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
dd.render = Ep;
const Vp = dd;
function hi() {
  return hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, hi.apply(this, arguments);
}
fe.extend(od);
fe.extend(id);
var {
  n: Dn,
  classes: Np
} = ae("day-picker"), {
  n: Yt
} = ae("date-picker");
function Dp(e, r) {
  var n = ue("panel-header"), a = ue("var-button");
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [V(
      "div",
      {
        class: c(e.n("content"))
      },
      [x(n, {
        ref: "headerEl",
        type: "day",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickMonth,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), x(je, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: me(() => [(p(), T("div", {
          key: e.panelKey
        }, [V(
          "ul",
          {
            class: c(e.n("head"))
          },
          [(p(!0), T(
            Ve,
            null,
            Ge(e.sortWeekList, (t) => (p(), T(
              "li",
              {
                key: t.index
              },
              le(e.getDayAbbr(t.index)),
              1
              /* TEXT */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        ), V(
          "ul",
          {
            class: c(e.n("body"))
          },
          [(p(!0), T(
            Ve,
            null,
            Ge(e.days, (t, o) => (p(), T("li", {
              key: o
            }, [x(a, ze({
              type: "primary",
              "var-day-picker-cover": "",
              round: "",
              ripple: !1,
              elevation: e.componentProps.buttonElevation
            }, hi({}, e.buttonProps(t)), {
              onClick: (l) => e.chooseDay(t, l)
            }), {
              default: me(() => [$e(
                le(e.filterDay(t)),
                1
                /* TEXT */
              )]),
              _: 2
              /* DYNAMIC */
            }, 1040, ["elevation", "onClick"])]))),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )]))]),
        _: 1
        /* STABLE */
      }, 8, ["name"])],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var vd = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: sd
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
  setup(e, r) {
    var {
      emit: n
    } = r, [a, t, o] = e.current.split("-"), l = k([]), i = k(!1), s = k(0), u = k(null), d = Ye({
      left: !1,
      right: !1
    }), v = A(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = A(() => {
      var b;
      return e.choose.chooseYear === e.preview.previewYear && ((b = e.choose.chooseMonth) == null ? void 0 : b.index) === e.preview.previewMonth.index;
    }), m = A(() => {
      var b = sa.findIndex(($) => $.index === e.componentProps.firstDayOfWeek);
      return b === -1 || b === 0 ? sa : sa.slice(b).concat(sa.slice(0, b));
    }), y = (b) => {
      var $, U;
      return ($ = (U = _e.value.datePickerWeekDict) == null ? void 0 : U[b].abbr) != null ? $ : "";
    }, g = (b) => b > 0 ? b : "", h = () => {
      var {
        preview: {
          previewMonth: b,
          previewYear: $
        }
      } = e, U = fe($ + "-" + b.index).daysInMonth(), D = fe($ + "-" + b.index + "-01").day(), L = m.value.findIndex((K) => K.index === "" + D);
      l.value = [...Array(L).fill(-1), ...Array.from(Array(U + 1).keys())].filter((K) => K);
    }, w = () => {
      var {
        preview: {
          previewYear: b,
          previewMonth: $
        },
        componentProps: {
          max: U,
          min: D
        }
      } = e;
      if (U) {
        var L = b + "-" + (z($.index) + 1);
        d.right = !fe(L).isSameOrBefore(fe(U), "month");
      }
      if (D) {
        var K = b + "-" + (z($.index) - 1);
        d.left = !fe(K).isSameOrAfter(fe(D), "month");
      }
    }, O = (b) => {
      var {
        preview: {
          previewYear: $,
          previewMonth: U
        },
        componentProps: {
          min: D,
          max: L
        }
      } = e, K = !0, oe = !0, _ = $ + "-" + U.index + "-" + b;
      return L && (K = fe(_).isSameOrBefore(fe(L), "day")), D && (oe = fe(_).isSameOrAfter(fe(D), "day")), K && oe;
    }, P = (b) => {
      var {
        choose: {
          chooseDays: $,
          chooseRangeDay: U
        },
        componentProps: {
          range: D
        }
      } = e;
      if (D) {
        if (!U.length)
          return !1;
        var L = fe(b).isSameOrBefore(fe(U[1]), "day"), K = fe(b).isSameOrAfter(fe(U[0]), "day");
        return L && K;
      }
      return $.includes(b);
    }, S = (b) => {
      if (b < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Dn("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: $
        },
        preview: {
          previewYear: U,
          previewMonth: D
        },
        componentProps: {
          allowedDates: L,
          color: K,
          multiple: oe,
          range: _
        }
      } = e, H = U + "-" + D.index + "-" + b, F = () => _ || oe ? P(H) : z($) === b && f.value, j = () => O(b) ? L ? !L(H) : !1 : !0, M = j(), B = () => M ? !0 : _ || oe ? !P(H) : !f.value || z($) !== b, J = () => v.value && z(o) === b && e.componentProps.showCurrent ? (_ || oe || f.value) && M ? !0 : _ || oe ? !P(H) : f.value ? $ !== o : !0 : !1, q = () => M ? "" : J() ? K ?? "" : F() ? "" : Yt() + "-color-cover", X = q().startsWith(Yt());
      return {
        text: B(),
        outline: J(),
        textColor: X ? "" : q(),
        [Yt() + "-color-cover"]: X,
        class: Np(Dn("button"), Dn("button--usable"), [M, Dn("button--disabled")]),
        disabled: M
      };
    }, E = (b) => {
      i.value = b === "prev", s.value += b === "prev" ? -1 : 1, n("check-preview", "month", b);
    }, I = (b, $) => {
      var U = $.currentTarget;
      U.classList.contains(Dn("button--disabled")) || n("choose-day", b);
    }, N = (b) => {
      u.value.checkDate(b);
    };
    return tr(() => {
      h(), w();
    }), de(() => e.preview, () => {
      h(), w();
    }), {
      n: Dn,
      nDate: Yt,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: N,
      filterDay: g,
      getDayAbbr: y,
      checkDate: E,
      chooseDay: I,
      buttonProps: S
    };
  }
});
vd.render = Dp;
const Ap = vd;
function Ul(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function zp(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Ul(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ul(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Lp,
  classes: Rp
} = ae("date-picker");
function Up(e, r) {
  var n = ue("year-picker-panel"), a = ue("month-picker-panel"), t = ue("day-picker-panel");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [V(
      "div",
      {
        class: c(e.n("title")),
        style: W({
          background: e.headerColor || e.color
        })
      },
      [V(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: r[0] || (r[0] = (o) => e.clickEl("year"))
        },
        [Y(e.$slots, "year", {
          year: e.chooseYear
        }, () => [$e(
          le(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), V(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: r[1] || (r[1] = (o) => e.clickEl("date"))
        },
        [x(je, {
          name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
        }, {
          default: me(() => {
            var o, l, i;
            return [e.type === "month" ? (p(), T("div", {
              key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
            }, [e.range ? Y(e.$slots, "range", {
              key: 0,
              choose: e.getChoose.chooseRangeMonth
            }, () => [$e(
              le(e.getMonthTitle),
              1
              /* TEXT */
            )]) : e.multiple ? Y(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseMonths
            }, () => [$e(
              le(e.getMonthTitle),
              1
              /* TEXT */
            )]) : Y(e.$slots, "month", {
              key: 2,
              month: (l = e.chooseMonth) == null ? void 0 : l.index,
              year: e.chooseYear
            }, () => [$e(
              le(e.getMonthTitle),
              1
              /* TEXT */
            )])])) : (p(), T("div", {
              key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
            }, [e.range ? Y(e.$slots, "range", {
              key: 0,
              choose: e.formatRange
            }, () => [$e(
              le(e.getDateTitle),
              1
              /* TEXT */
            )]) : e.multiple ? Y(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseDays
            }, () => [$e(
              le(e.getDateTitle),
              1
              /* TEXT */
            )]) : Y(e.$slots, "date", Ot(ze({
              key: 2
            }, e.slotProps)), () => [$e(
              le(e.getDateTitle),
              1
              /* TEXT */
            )])]))];
          }),
          _: 3
          /* FORWARDED */
        }, 8, ["name"])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), V(
      "div",
      {
        class: c(e.n("body")),
        onTouchstart: r[2] || (r[2] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: r[3] || (r[3] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: r[4] || (r[4] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [x(je, {
        name: e.n() + "-panel-fade"
      }, {
        default: me(() => [e.getPanelType === "year" ? (p(), Se(n, {
          key: 0,
          "component-props": e.componentProps,
          preview: e.previewYear,
          onChooseYear: e.getChooseYear
        }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (p(), Se(a, {
          key: 1,
          ref: "monthPanelEl",
          current: e.currentDate,
          choose: e.getChoose,
          preview: e.getPreview,
          "click-year": () => e.clickEl("year"),
          "component-props": e.componentProps,
          onChooseMonth: e.getChooseMonth,
          onCheckPreview: e.checkPreview
        }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (p(), Se(t, {
          key: 2,
          ref: "dayPanelEl",
          current: e.currentDate,
          choose: e.getChoose,
          preview: e.getPreview,
          "component-props": e.componentProps,
          "click-month": () => e.clickEl("month"),
          onChooseDay: e.getChooseDay,
          onCheckPreview: e.checkPreview
        }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : ee("v-if", !0)]),
        _: 1
        /* STABLE */
      }, 8, ["name"])],
      34
      /* CLASS, HYDRATE_EVENTS */
    )],
    2
    /* CLASS */
  );
}
var fd = ne({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Ip,
    YearPickerPanel: Vp,
    DayPickerPanel: Ap
  },
  props: kp,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = fe().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Zt.find((ve) => ve.index === i), u = k(!1), d = k(!1), v = k(!0), f = k(), m = k(), y = k(), g = k(s), h = k(l), w = k(!1), O = k([]), P = k([]), S = k([]), E = k([]), I = k(null), N = k(null), b = Ye({
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
    }), $ = A(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: y.value,
      chooseMonths: O.value,
      chooseDays: P.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: E.value
    })), U = A(() => ({
      previewMonth: g.value,
      previewYear: h.value
    })), D = A(() => {
      var {
        multiple: ve,
        range: we
      } = e;
      if (we)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var be = "";
      if (f.value) {
        var Pe, Ie;
        be = (Pe = (Ie = _e.value.datePickerMonthDict) == null ? void 0 : Ie[f.value.index].name) != null ? Pe : "";
      }
      return ve ? "" + O.value.length + _e.value.datePickerSelected : be;
    }), L = A(() => {
      var ve, we, be, Pe, {
        multiple: Ie,
        range: We
      } = e;
      if (We) {
        var lr = E.value.map((Eo) => fe(Eo).format("YYYY-MM-DD"));
        return lr.length ? lr[0] + " ~ " + lr[1] : "";
      }
      if (Ie)
        return "" + P.value.length + _e.value.datePickerSelected;
      if (!m.value || !f.value || !y.value)
        return "";
      var Cr = fe(m.value + "-" + f.value.index + "-" + y.value).day(), Nn = sa.find((Eo) => Eo.index === "" + Cr), il = (ve = (we = _e.value.datePickerWeekDict) == null ? void 0 : we[Nn.index].name) != null ? ve : "", Wv = (be = (Pe = _e.value.datePickerMonthDict) == null ? void 0 : Pe[f.value.index].name) != null ? be : "", Gv = kn(y.value, 2, "0");
      return _e.value.lang === "zh-CN" ? f.value.index + "-" + Gv + " " + il.slice(0, 3) : il.slice(0, 3) + ", " + Wv.slice(0, 3) + " " + y.value;
    }), K = A(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), oe = A(() => !e.touchable || ["", "year"].includes(K.value)), _ = A(() => {
      var ve, we, be, Pe, Ie = fe(m.value + "-" + ((ve = f.value) == null ? void 0 : ve.index) + "-" + y.value).day(), We = y.value ? kn(y.value, 2, "0") : "";
      return {
        week: "" + Ie,
        year: (we = m.value) != null ? we : "",
        month: (be = (Pe = f.value) == null ? void 0 : Pe.index) != null ? be : "",
        date: We
      };
    }), H = A(() => $.value.chooseRangeDay.map((ve) => fe(ve).format("YYYY-MM-DD"))), F = A(() => m.value === h.value), j = A(() => {
      var ve;
      return ((ve = f.value) == null ? void 0 : ve.index) === g.value.index;
    }), M = (ve) => {
      ve === "year" ? u.value = !0 : ve === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, B = (ve) => {
      if (!oe.value) {
        var {
          clientX: we,
          clientY: be
        } = ve.touches[0];
        r = we, n = be;
      }
    }, J = (ve, we) => ve >= we && ve > 20 ? "x" : "y", q = (ve) => {
      if (!oe.value) {
        var {
          clientX: we,
          clientY: be
        } = ve.touches[0], Pe = we - r, Ie = be - n;
        t = J(Math.abs(Pe), Math.abs(Ie)), a = Pe > 0 ? "prev" : "next";
      }
    }, X = /* @__PURE__ */ function() {
      var ve = zp(function* () {
        if (!(oe.value || t !== "x")) {
          var we = K.value === "month" ? I : N;
          yield dr(), we.value.forwardRef(a), Fe();
        }
      });
      return function() {
        return ve.apply(this, arguments);
      };
    }(), Z = (ve, we) => {
      var be = we === "month" ? S : E;
      if (be.value = v.value ? [ve, ve] : [be.value[0], ve], v.value = !v.value, v.value) {
        var Pe = fe(be.value[0]).isAfter(be.value[1]), Ie = Pe ? [be.value[1], be.value[0]] : [...be.value];
        C(e["onUpdate:modelValue"], Ie), C(e.onChange, Ie);
      }
    }, re = (ve, we) => {
      var be = we === "month" ? O : P, Pe = we === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ie = be.value.map((lr) => fe(lr).format(Pe)), We = Ie.findIndex((lr) => lr === ve);
      We === -1 ? Ie.push(ve) : Ie.splice(We, 1), C(e["onUpdate:modelValue"], Ie), C(e.onChange, Ie);
    }, ce = (ve, we) => !m.value || !f.value ? !1 : F.value ? ve === "month" ? we.index < f.value.index : j.value ? we < z(y.value) : f.value.index > g.value.index : m.value > h.value, ke = (ve) => {
      var {
        readonly: we,
        range: be,
        multiple: Pe,
        onChange: Ie,
        "onUpdate:modelValue": We
      } = e;
      if (!(ve < 0 || we)) {
        w.value = ce("day", ve);
        var lr = h.value + "-" + g.value.index + "-" + ve, Cr = fe(lr).format("YYYY-MM-DD");
        be ? Z(Cr, "day") : Pe ? re(Cr, "day") : (C(We, Cr), C(Ie, Cr));
      }
    }, Ee = (ve) => {
      var {
        type: we,
        readonly: be,
        range: Pe,
        multiple: Ie,
        onChange: We,
        onPreview: lr,
        "onUpdate:modelValue": Cr
      } = e;
      if (w.value = ce("month", ve), we === "month" && !be) {
        var Nn = h.value + "-" + ve.index;
        Pe ? Z(Nn, "month") : Ie ? re(Nn, "month") : (C(Cr, Nn), C(We, Nn));
      } else
        g.value = ve, C(lr, z(h.value), z(g.value.index));
      d.value = !1;
    }, se = (ve) => {
      h.value = "" + ve, u.value = !1, d.value = !0, C(e.onPreview, z(h.value), z(g.value.index));
    }, G = (ve, we) => {
      var be = we === "prev" ? -1 : 1;
      if (ve === "year")
        h.value = "" + (z(h.value) + be);
      else {
        var Pe = z(g.value.index) + be;
        Pe < 1 && (h.value = "" + (z(h.value) - 1), Pe = 12), Pe > 12 && (h.value = "" + (z(h.value) + 1), Pe = 1), g.value = Zt.find((Ie) => z(Ie.index) === Pe);
      }
      C(e.onPreview, z(h.value), z(g.value.index));
    }, te = () => (e.multiple || e.range) && !Be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, ge = (ve) => Be(ve) ? !1 : ve === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Me = (ve, we) => {
      var be = we === "month" ? S : E, Pe = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Ie = ve.map((Cr) => fe(Cr).format(Pe)).slice(0, 2), We = be.value.some((Cr) => ge(Cr));
      if (!We) {
        be.value = Ie;
        var lr = fe(be.value[0]).isAfter(be.value[1]);
        be.value.length === 2 && lr && (be.value = [be.value[1], be.value[0]]);
      }
    }, Oe = (ve, we) => {
      var be = we === "month" ? O : P, Pe = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Ie = Array.from(new Set(ve.map((We) => fe(We).format(Pe))));
      be.value = Ie.filter((We) => We !== "Invalid Date");
    }, Re = (ve) => {
      var we = fe(ve).format("YYYY-MM-D");
      if (!ge(we)) {
        var [be, Pe, Ie] = we.split("-"), We = Zt.find((lr) => lr.index === Pe);
        f.value = We, m.value = be, y.value = Ie, g.value = We, h.value = be;
      }
    }, Fe = () => {
      n = 0, r = 0, a = "", t = void 0;
    };
    return de(() => e.modelValue, (ve) => {
      if (!(!te() || ge(ve) || !ve))
        if (e.range) {
          if (!Be(ve))
            return;
          v.value = ve.length !== 1, Me(ve, e.type);
        } else if (e.multiple) {
          if (!Be(ve))
            return;
          Oe(ve, e.type);
        } else
          Re(ve);
    }, {
      immediate: !0
    }), de(K, Fe), {
      n: Lp,
      classes: Rp,
      monthPanelEl: I,
      dayPanelEl: N,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: y,
      previewYear: h,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: D,
      getDateTitle: L,
      getPanelType: K,
      getChoose: $,
      getPreview: U,
      componentProps: b,
      slotProps: _,
      formatRange: H,
      clickEl: M,
      handleTouchstart: B,
      handleTouchmove: q,
      handleTouchend: X,
      getChooseDay: ke,
      getChooseMonth: Ee,
      getChooseYear: se,
      checkPreview: G,
      formatElevation: pr
    };
  }
});
fd.render = Up;
const Ra = fd;
ie(Ra);
var LS = Ra;
function pi() {
  return pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, pi.apply(this, arguments);
}
var Hp = pi({
  show: Boolean,
  width: [Number, String],
  title: String,
  message: String,
  messageAlign: {
    type: String,
    default: "left"
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  confirmButtonColor: String,
  cancelButtonColor: String,
  dialogClass: String,
  dialogStyle: Object,
  onBeforeClose: R(),
  onConfirm: R(),
  onCancel: R(),
  "onUpdate:show": R()
}, xe(Mt, [
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
function gi() {
  return gi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, gi.apply(this, arguments);
}
var {
  n: Yp,
  classes: Fp
} = ae("dialog");
function jp(e, r) {
  var n = ue("var-button"), a = ue("var-popup");
  return p(), Se(a, {
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
  }, {
    default: me(() => [V(
      "div",
      ze({
        class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
        style: gi({
          width: e.toSizeUnit(e.width)
        }, e.dialogStyle)
      }, e.$attrs),
      [V(
        "div",
        {
          class: c(e.n("title"))
        },
        [Y(e.$slots, "title", {}, () => [$e(
          le(e.dt(e.title, e.pack.dialogTitle)),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), V(
        "div",
        {
          class: c(e.n("message")),
          style: W({
            textAlign: e.messageAlign
          })
        },
        [Y(e.$slots, "default", {}, () => [$e(
          le(e.message),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      ), V(
        "div",
        {
          class: c(e.n("actions"))
        },
        [e.cancelButton ? (p(), Se(n, {
          key: 0,
          class: c(e.classes(e.n("button"), e.n("cancel-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.cancelButtonTextColor,
          color: e.cancelButtonColor,
          onClick: e.cancel
        }, {
          default: me(() => [$e(
            le(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["class", "text-color", "color", "onClick"])) : ee("v-if", !0), e.confirmButton ? (p(), Se(n, {
          key: 1,
          class: c(e.classes(e.n("button"), e.n("confirm-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.confirmButtonTextColor,
          color: e.confirmButtonColor,
          onClick: e.confirm
        }, {
          default: me(() => [$e(
            le(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["class", "text-color", "color", "onClick"])) : ee("v-if", !0)],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    )]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]);
}
var cd = ne({
  name: "VarDialog",
  components: {
    VarPopup: Rr,
    VarButton: vr
  },
  inheritAttrs: !1,
  props: Hp,
  setup(e) {
    var r = k(!1), n = k(!1), a = () => C(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (C(s), !!i) {
        if (u != null) {
          C(u, "close", a);
          return;
        }
        C(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if (C(s), i != null) {
        C(i, "confirm", a);
        return;
      }
      C(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if (C(s), i != null) {
        C(i, "cancel", a);
        return;
      }
      C(e["onUpdate:show"], !1);
    };
    return de(() => e.show, (i) => {
      r.value = i;
    }, {
      immediate: !0
    }), de(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        n.value = !1;
        return;
      }
      n.value = i;
    }, {
      immediate: !0
    }), {
      n: Yp,
      classes: Fp,
      pack: _e,
      dt: po,
      popupShow: r,
      popupCloseOnClickOverlay: n,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: Ce
    };
  }
});
cd.render = jp;
const Nt = cd;
function lo() {
  return lo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, lo.apply(this, arguments);
}
var nn, so = {};
function Wp(e) {
  return e === void 0 && (e = {}), Je(e) ? lo({}, so, {
    message: e
  }) : lo({}, so, e);
}
function Xr(e) {
  return bn() ? new Promise((r) => {
    Xr.close();
    var n = Wp(e), a = Ye(n);
    a.teleport = "body", nn = a;
    var {
      unmountInstance: t
    } = ta(Nt, a, {
      onConfirm: () => {
        C(a.onConfirm), r("confirm");
      },
      onCancel: () => {
        C(a.onCancel), r("cancel");
      },
      onClose: () => {
        C(a.onClose), r("close");
      },
      onClosed: () => {
        C(a.onClosed), t(), nn === a && (nn = null);
      },
      onRouteChange: () => {
        t(), nn === a && (nn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
Xr.setDefaultOptions = function(e) {
  so = e;
};
Xr.resetDefaultOptions = function() {
  so = {};
};
Xr.close = function() {
  if (nn != null) {
    var e = nn;
    nn = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
Xr.Component = Nt;
ie(Nt);
ie(Nt, Xr);
var RS = Nt, Gp = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, {
  n: qp,
  classes: Xp
} = ae("divider");
function Kp(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: W(e.style)
    },
    [e.vertical ? ee("v-if", !0) : Y(e.$slots, "default", {
      key: 0
    }, () => [e.description ? (p(), T(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      le(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var md = ne({
  name: "VarDivider",
  props: Gp,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(!1), t = A(() => {
      var {
        vertical: i,
        inset: s
      } = e;
      return !i && s === !0;
    }), o = A(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e;
      if (Ni(i) || s)
        return {
          margin: u
        };
      var d = z(i), v = Math.abs(d) + (i + "").replace(d + "", "");
      return {
        margin: u,
        width: "calc(100% - " + Ce(v) + ")",
        left: d > 0 ? Ce(v) : Ce(0)
      };
    }), l = () => {
      var {
        description: i,
        vertical: s
      } = e;
      a.value = (n.default || i != null) && !s;
    };
    return tr(() => {
      l();
    }), Pt(() => {
      l();
    }), {
      n: qp,
      classes: Xp,
      withText: a,
      style: o,
      withPresetInset: t
    };
  }
});
md.render = Kp;
const Ua = md;
ie(Ua);
var US = Ua, Zp = {
  direction: {
    type: String,
    default: "xy"
  },
  attraction: String,
  disabled: Boolean,
  boundary: {
    type: Object,
    default: () => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    })
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: R()
};
function uo() {
  return uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, uo.apply(this, arguments);
}
function Hl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Jp(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Hl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Hl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Qp,
  classes: _p
} = ae("drag");
function xp(e, r) {
  return p(), Se(Zr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [V(
    "div",
    ze({
      ref: "drag",
      class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
      style: {
        "z-index": e.zIndex
      },
      onTouchstart: r[0] || (r[0] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      }),
      onTouchmove: r[1] || (r[1] = function() {
        return e.handleTouchmove && e.handleTouchmove(...arguments);
      }),
      onTouchend: r[2] || (r[2] = function() {
        return e.handleTouchend && e.handleTouchend(...arguments);
      }),
      onTouchcancel: r[3] || (r[3] = function() {
        return e.handleTouchend && e.handleTouchend(...arguments);
      }),
      onClick: r[4] || (r[4] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    }, e.getAttrs()),
    [Y(e.$slots, "default")],
    16
    /* FULL_PROPS */
  )], 8, ["to", "disabled"]);
}
var hd = ne({
  name: "VarDrag",
  inheritAttrs: !1,
  props: Zp,
  setup(e, r) {
    var {
      attrs: n
    } = r, a = k(null), t = k(0), o = k(0), l = Ye({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), i = k(!1), s = k(!1), {
      touching: u,
      dragging: d,
      moveX: v,
      moveY: f,
      startTouch: m,
      moveTouch: y,
      endTouch: g,
      resetTouch: h
    } = mo(), {
      disabled: w
    } = oa(), O = (_) => {
      e.disabled || (m(_), I());
    }, P = /* @__PURE__ */ function() {
      var _ = Jp(function* (H) {
        !u.value || e.disabled || (y(H), H.preventDefault(), s.value = !1, i.value = !0, e.direction.includes("x") && (t.value += v.value), e.direction.includes("y") && (o.value += f.value), U());
      });
      return function(F) {
        return _.apply(this, arguments);
      };
    }(), S = () => {
      e.disabled || (g(), s.value = !0, $());
    }, E = (_) => {
      d.value || C(e.onClick, _);
    }, I = () => {
      var {
        left: _,
        top: H
      } = N();
      t.value = _, o.value = H;
    }, N = () => {
      var _ = Qe(a.value), H = Qe(window), F = _.top - H.top, j = H.bottom - _.bottom, M = _.left - H.left, B = H.right - _.right, {
        width: J,
        height: q
      } = _, {
        width: X,
        height: Z
      } = H;
      return {
        top: F,
        bottom: j,
        left: M,
        right: B,
        width: J,
        height: q,
        halfWidth: J / 2,
        halfHeight: q / 2,
        windowWidth: X,
        windowHeight: Z
      };
    }, b = () => {
      var _ = N(), H = l.left, F = _.windowWidth - l.right - _.width, j = l.top, M = _.windowHeight - l.bottom - _.height;
      return {
        minX: H,
        minY: j,
        // fallback the drag element overflows boundary
        maxX: H < F ? F : H,
        maxY: j < M ? M : j
      };
    }, $ = () => {
      if (e.attraction != null) {
        var {
          halfWidth: _,
          halfHeight: H,
          top: F,
          bottom: j,
          left: M,
          right: B
        } = N(), {
          minX: J,
          minY: q,
          maxX: X,
          maxY: Z
        } = b(), re = M + _ - l.left, ce = B + _ - l.right, ke = F + H - l.top, Ee = j + H - l.bottom, se = re <= ce, G = ke <= Ee;
        e.attraction.includes("x") && (t.value = se ? J : X), e.attraction.includes("y") && (o.value = G ? q : Z);
      }
    }, U = () => {
      var {
        minX: _,
        minY: H,
        maxX: F,
        maxY: j
      } = b();
      t.value = un(t.value, _, F), o.value = un(o.value, H, j);
    }, D = () => {
      var {
        top: _ = 0,
        bottom: H = 0,
        left: F = 0,
        right: j = 0
      } = e.boundary;
      l.top = He(_), l.bottom = He(H), l.left = He(F), l.right = He(j);
    }, L = () => {
      var _, H = (_ = n.style) != null ? _ : {};
      return uo({}, n, {
        style: uo({}, H, {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: i.value ? 0 : H.top,
          left: i.value ? 0 : H.left,
          right: i.value ? "auto" : H.right,
          bottom: i.value ? "auto" : H.bottom,
          transform: i.value ? "translate(" + t.value + "px, " + o.value + "px)" : H.transform
        })
      });
    }, K = () => {
      i.value && (I(), U());
    }, oe = () => {
      h(), s.value = !1, i.value = !1, t.value = 0, o.value = 0;
    };
    return de(() => e.boundary, D), It(K), tr(() => {
      D(), K();
    }), {
      drag: a,
      x: t,
      y: o,
      enableTransition: s,
      dragging: d,
      teleportDisabled: w,
      n: Qp,
      classes: _p,
      getAttrs: L,
      handleTouchstart: O,
      handleTouchmove: P,
      handleTouchend: S,
      handleClick: E,
      resize: K,
      reset: oe
    };
  }
});
hd.render = xp;
const Kn = hd;
ie(Kn);
var HS = Kn, eg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Jt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return eg[r];
  });
}
var jr = "top", mn = "bottom", $n = "right", sn = "left", $o = "auto", To = [jr, mn, $n, sn], Po = "start", Ha = "end", rg = "clippingParents", pd = "viewport", ia = "popper", ng = "reference", Yl = /* @__PURE__ */ To.reduce(function(e, r) {
  return e.concat([r + "-" + Po, r + "-" + Ha]);
}, []), gd = /* @__PURE__ */ [].concat(To, [$o]).reduce(function(e, r) {
  return e.concat([r, r + "-" + Po, r + "-" + Ha]);
}, []), ag = "beforeRead", tg = "read", og = "afterRead", ig = "beforeMain", lg = "main", sg = "afterMain", ug = "beforeWrite", dg = "write", vg = "afterWrite", bi = [ag, tg, og, ig, lg, sg, ug, dg, vg];
function Wr(e) {
  return e.split("-")[0];
}
var fg = {
  start: "end",
  end: "start"
};
function Fl(e) {
  return e.replace(/start|end/g, function(r) {
    return fg[r];
  });
}
function Mr(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var r = e.ownerDocument;
    return r && r.defaultView || window;
  }
  return e;
}
function Tn(e) {
  var r = Mr(e).Element;
  return e instanceof r || e instanceof Element;
}
function kr(e) {
  var r = Mr(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
function Ji(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Mr(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function wn(e) {
  return ((Tn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var va = Math.max, jl = Math.min, Zn = Math.round;
function yi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function bd() {
  return !/^((?!chrome|android).)*safari/i.test(yi());
}
function Jn(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && kr(e) && (t = e.offsetWidth > 0 && Zn(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Zn(a.height) / e.offsetHeight || 1);
  var l = Tn(e) ? Mr(e) : window, i = l.visualViewport, s = !bd() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Qi(e) {
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function _i(e) {
  return Jn(wn(e)).left + Qi(e).scrollLeft;
}
function cg(e, r) {
  var n = Mr(e), a = wn(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = bd();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + _i(e),
    y: s
  };
}
function Ar(e) {
  return Mr(e).getComputedStyle(e);
}
function mg(e) {
  var r, n = wn(e), a = Qi(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = va(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = va(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + _i(e), s = -a.scrollTop;
  return Ar(t || n).direction === "rtl" && (i += va(n.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Hr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Oo(e) {
  return Hr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ji(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    wn(e)
  );
}
function xi(e) {
  var r = Ar(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function yd(e) {
  return ["html", "body", "#document"].indexOf(Hr(e)) >= 0 ? e.ownerDocument.body : kr(e) && xi(e) ? e : yd(Oo(e));
}
function fa(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = yd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], xi(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(fa(Oo(l)))
  );
}
function hg(e) {
  return ["table", "td", "th"].indexOf(Hr(e)) >= 0;
}
function Wl(e) {
  return !kr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ar(e).position === "fixed" ? null : e.offsetParent;
}
function pg(e) {
  var r = /firefox/i.test(yi()), n = /Trident/i.test(yi());
  if (n && kr(e)) {
    var a = Ar(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Oo(e);
  for (Ji(t) && (t = t.host); kr(t) && ["html", "body"].indexOf(Hr(t)) < 0; ) {
    var o = Ar(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function el(e) {
  for (var r = Mr(e), n = Wl(e); n && hg(n) && Ar(n).position === "static"; )
    n = Wl(n);
  return n && (Hr(n) === "html" || Hr(n) === "body" && Ar(n).position === "static") ? r : n || pg(e) || r;
}
function gg(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && Ji(n)) {
    var a = r;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function wi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function bg(e, r) {
  var n = Jn(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Gl(e, r, n) {
  return r === pd ? wi(cg(e, n)) : Tn(r) ? bg(r, n) : wi(mg(wn(e)));
}
function yg(e) {
  var r = fa(Oo(e)), n = ["absolute", "fixed"].indexOf(Ar(e).position) >= 0, a = n && kr(e) ? el(e) : e;
  return Tn(a) ? r.filter(function(t) {
    return Tn(t) && gg(t, a) && Hr(t) !== "body";
  }) : [];
}
function wg(e, r, n, a) {
  var t = r === "clippingParents" ? yg(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = Gl(e, u, a);
    return s.top = va(d.top, s.top), s.right = jl(d.right, s.right), s.bottom = jl(d.bottom, s.bottom), s.left = va(d.left, s.left), s;
  }, Gl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ya(e) {
  return e.split("-")[1];
}
function Cg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function wd(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? Wr(a) : null, o = a ? Ya(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
  switch (t) {
    case jr:
      s = {
        x: l,
        y: r.y - n.height
      };
      break;
    case mn:
      s = {
        x: l,
        y: r.y + r.height
      };
      break;
    case $n:
      s = {
        x: r.x + r.width,
        y: i
      };
      break;
    case sn:
      s = {
        x: r.x - n.width,
        y: i
      };
      break;
    default:
      s = {
        x: r.x,
        y: r.y
      };
  }
  var u = t ? Cg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case Po:
        s[u] = s[u] - (r[d] / 2 - n[d] / 2);
        break;
      case Ha:
        s[u] = s[u] + (r[d] / 2 - n[d] / 2);
        break;
    }
  }
  return s;
}
function Sg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function kg(e) {
  return Object.assign({}, Sg(), e);
}
function $g(e, r) {
  return r.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
function Cd(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? rg : i, u = n.rootBoundary, d = u === void 0 ? pd : u, v = n.elementContext, f = v === void 0 ? ia : v, m = n.altBoundary, y = m === void 0 ? !1 : m, g = n.padding, h = g === void 0 ? 0 : g, w = kg(typeof h != "number" ? h : $g(h, To)), O = f === ia ? ng : ia, P = e.rects.popper, S = e.elements[y ? O : f], E = wg(Tn(S) ? S : S.contextElement || wn(e.elements.popper), s, d, l), I = Jn(e.elements.reference), N = wd({
    reference: I,
    element: P,
    strategy: "absolute",
    placement: t
  }), b = wi(Object.assign({}, P, N)), $ = f === ia ? b : I, U = {
    top: E.top - $.top + w.top,
    bottom: $.bottom - E.bottom + w.bottom,
    left: E.left - $.left + w.left,
    right: $.right - E.right + w.right
  }, D = e.modifiersData.offset;
  if (f === ia && D) {
    var L = D[t];
    Object.keys(U).forEach(function(K) {
      var oe = [$n, mn].indexOf(K) >= 0 ? 1 : -1, _ = [jr, mn].indexOf(K) >= 0 ? "y" : "x";
      U[K] += L[_] * oe;
    });
  }
  return U;
}
function Tg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? gd : s, d = Ya(a), v = d ? i ? Yl : Yl.filter(function(y) {
    return Ya(y) === d;
  }) : To, f = v.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(y, g) {
    return y[g] = Cd(e, {
      placement: g,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Wr(g)], y;
  }, {});
  return Object.keys(m).sort(function(y, g) {
    return m[y] - m[g];
  });
}
function Pg(e) {
  if (Wr(e) === $o)
    return [];
  var r = Jt(e);
  return [Fl(e), r, Fl(r)];
}
function Og(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, y = m === void 0 ? !0 : m, g = n.allowedAutoPlacements, h = r.options.placement, w = Wr(h), O = w === h, P = s || (O || !y ? [Jt(h)] : Pg(h)), S = [h].concat(P).reduce(function(Z, re) {
      return Z.concat(Wr(re) === $o ? Tg(r, {
        placement: re,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: g
      }) : re);
    }, []), E = r.rects.reference, I = r.rects.popper, N = /* @__PURE__ */ new Map(), b = !0, $ = S[0], U = 0; U < S.length; U++) {
      var D = S[U], L = Wr(D), K = Ya(D) === Po, oe = [jr, mn].indexOf(L) >= 0, _ = oe ? "width" : "height", H = Cd(r, {
        placement: D,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), F = oe ? K ? $n : sn : K ? mn : jr;
      E[_] > I[_] && (F = Jt(F));
      var j = Jt(F), M = [];
      if (o && M.push(H[L] <= 0), i && M.push(H[F] <= 0, H[j] <= 0), M.every(function(Z) {
        return Z;
      })) {
        $ = D, b = !1;
        break;
      }
      N.set(D, M);
    }
    if (b)
      for (var B = y ? 3 : 1, J = function(re) {
        var ce = S.find(function(ke) {
          var Ee = N.get(ke);
          if (Ee)
            return Ee.slice(0, re).every(function(se) {
              return se;
            });
        });
        if (ce)
          return $ = ce, "break";
      }, q = B; q > 0; q--) {
        var X = J(q);
        if (X === "break")
          break;
      }
    r.placement !== $ && (r.modifiersData[a]._skip = !0, r.placement = $, r.reset = !0);
  }
}
const Ig = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Og,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Mg(e, r, n) {
  var a = Wr(e), t = [sn, jr].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, r, {
    placement: e
  })) : n, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [sn, $n].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Bg(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = gd.reduce(function(d, v) {
    return d[v] = Mg(v, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const Eg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Bg
};
var Vg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ng(e) {
  var r = e.x, n = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Zn(r * t) / t || 0,
    y: Zn(n * t) / t || 0
  };
}
function ql(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, y = l.y, g = y === void 0 ? 0 : y, h = typeof d == "function" ? d({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  m = h.x, g = h.y;
  var w = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), P = sn, S = jr, E = window;
  if (u) {
    var I = el(n), N = "clientHeight", b = "clientWidth";
    if (I === Mr(n) && (I = wn(n), Ar(I).position !== "static" && i === "absolute" && (N = "scrollHeight", b = "scrollWidth")), I = I, t === jr || (t === sn || t === $n) && o === Ha) {
      S = mn;
      var $ = v && I === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[N]
      );
      g -= $ - a.height, g *= s ? 1 : -1;
    }
    if (t === sn || (t === jr || t === mn) && o === Ha) {
      P = $n;
      var U = v && I === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[b]
      );
      m -= U - a.width, m *= s ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: i
  }, u && Vg), L = d === !0 ? Ng({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  if (m = L.x, g = L.y, s) {
    var K;
    return Object.assign({}, D, (K = {}, K[S] = O ? "0" : "", K[P] = w ? "0" : "", K.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", K));
  }
  return Object.assign({}, D, (r = {}, r[S] = O ? g + "px" : "", r[P] = w ? m + "px" : "", r.transform = "", r));
}
function Dg(e) {
  var r = e.state, n = e.options, a = n.gpuAcceleration, t = a === void 0 ? !0 : a, o = n.adaptive, l = o === void 0 ? !0 : o, i = n.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = Ar(r.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Wr(r.placement),
    variation: Ya(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: t,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, ql(Object.assign({}, d, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, ql(Object.assign({}, d, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const Sd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Dg,
  data: {}
};
function Ag(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function zg(e) {
  return e === Mr(e) || !kr(e) ? Qi(e) : Ag(e);
}
function Lg(e) {
  var r = e.getBoundingClientRect(), n = Zn(r.width) / e.offsetWidth || 1, a = Zn(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function Rg(e, r, n) {
  n === void 0 && (n = !1);
  var a = kr(r), t = kr(r) && Lg(r), o = wn(r), l = Jn(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Hr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  xi(o)) && (i = zg(r)), kr(r) ? (s = Jn(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = _i(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Ug(e) {
  var r = Jn(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - a) <= 1 && (a = r.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function Hg(e) {
  var r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(o) {
    r.set(o.name, o);
  });
  function t(o) {
    n.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function(i) {
      if (!n.has(i)) {
        var s = r.get(i);
        s && t(s);
      }
    }), a.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || t(o);
  }), a;
}
function Yg(e) {
  var r = Hg(e);
  return bi.reduce(function(n, a) {
    return n.concat(r.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Fg(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(n) {
      Promise.resolve().then(function() {
        r = void 0, n(e());
      });
    })), r;
  };
}
function Qr(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return [].concat(n).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Cn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', jg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Xl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Wg(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), Xl).filter(function(n, a, t) {
      return t.indexOf(n) === a;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof r.name != "string" && console.error(Qr(Cn, String(r.name), '"name"', '"string"', '"' + String(r.name) + '"'));
          break;
        case "enabled":
          typeof r.enabled != "boolean" && console.error(Qr(Cn, r.name, '"enabled"', '"boolean"', '"' + String(r.enabled) + '"'));
          break;
        case "phase":
          bi.indexOf(r.phase) < 0 && console.error(Qr(Cn, r.name, '"phase"', "either " + bi.join(", "), '"' + String(r.phase) + '"'));
          break;
        case "fn":
          typeof r.fn != "function" && console.error(Qr(Cn, r.name, '"fn"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "effect":
          r.effect != null && typeof r.effect != "function" && console.error(Qr(Cn, r.name, '"effect"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "requires":
          r.requires != null && !Array.isArray(r.requires) && console.error(Qr(Cn, r.name, '"requires"', '"array"', '"' + String(r.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(r.requiresIfExists) || console.error(Qr(Cn, r.name, '"requiresIfExists"', '"array"', '"' + String(r.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + Xl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      r.requires && r.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Qr(jg, String(r.name), a, a));
      });
    });
  });
}
function Gg(e, r) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = r(a);
    if (!n.has(t))
      return n.add(t), !0;
  });
}
function qg(e) {
  var r = e.reduce(function(n, a) {
    var t = n[a.name];
    return n[a.name] = t ? Object.assign({}, t, a, {
      options: Object.assign({}, t.options, a.options),
      data: Object.assign({}, t.data, a.data)
    }) : a, n;
  }, {});
  return Object.keys(r).map(function(n) {
    return r[n];
  });
}
var Kl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Xg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Zl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Jl() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return !r.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Kg(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? Zl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Zl, o),
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
        var O = typeof w == "function" ? w(d.options) : w;
        g(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: Tn(i) ? fa(i) : i.contextElement ? fa(i.contextElement) : [],
          popper: fa(s)
        };
        var P = Yg(qg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = P.filter(function(D) {
          return D.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Gg([].concat(P, d.options.modifiers), function(D) {
            var L = D.name;
            return L;
          });
          if (Wg(S), Wr(d.options.placement) === $o) {
            var E = d.orderedModifiers.find(function(D) {
              var L = D.name;
              return L === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var I = Ar(s), N = I.marginTop, b = I.marginRight, $ = I.marginBottom, U = I.marginLeft;
          [N, b, $, U].some(function(D) {
            return parseFloat(D);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return y(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var w = d.elements, O = w.reference, P = w.popper;
          if (!Jl(O, P)) {
            process.env.NODE_ENV !== "production" && console.error(Kl);
            return;
          }
          d.rects = {
            reference: Rg(O, el(P), d.options.strategy === "fixed"),
            popper: Ug(P)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(D) {
            return d.modifiersData[D.name] = Object.assign({}, D.data);
          });
          for (var S = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(Xg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var I = d.orderedModifiers[E], N = I.fn, b = I.options, $ = b === void 0 ? {} : b, U = I.name;
            typeof N == "function" && (d = N({
              state: d,
              options: $,
              name: U,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Fg(function() {
        return new Promise(function(h) {
          m.forceUpdate(), h(d);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Jl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Kl), m;
    m.setOptions(u).then(function(h) {
      !f && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function y() {
      d.orderedModifiers.forEach(function(h) {
        var w = h.name, O = h.options, P = O === void 0 ? {} : O, S = h.effect;
        if (typeof S == "function") {
          var E = S({
            state: d,
            name: w,
            instance: m,
            options: P
          }), I = function() {
          };
          v.push(E || I);
        }
      });
    }
    function g() {
      v.forEach(function(h) {
        return h();
      }), v = [];
    }
    return m;
  };
}
var Ft = {
  passive: !0
};
function Zg(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Mr(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Ft);
  }), i && s.addEventListener("resize", n.update, Ft), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Ft);
    }), i && s.removeEventListener("resize", n.update, Ft);
  };
}
const Jg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Zg,
  data: {}
};
function Qg(e) {
  var r = e.state, n = e.name;
  r.modifiersData[n] = wd({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const _g = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Qg,
  data: {}
};
function xg(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(n) {
    var a = r.styles[n] || {}, t = r.attributes[n] || {}, o = r.elements[n];
    !kr(o) || !Hr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function eb(e) {
  var r = e.state, n = {
    popper: {
      position: r.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(r.elements.popper.style, n.popper), r.styles = n, r.elements.arrow && Object.assign(r.elements.arrow.style, n.arrow), function() {
    Object.keys(r.elements).forEach(function(a) {
      var t = r.elements[a], o = r.attributes[a] || {}, l = Object.keys(r.styles.hasOwnProperty(a) ? r.styles[a] : n[a]), i = l.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !kr(t) || !Hr(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const rb = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: xg,
  effect: eb,
  requires: ["computeStyles"]
};
var nb = [Jg, _g, Sd, rb], ab = /* @__PURE__ */ Kg({
  defaultModifiers: nb
});
function ca() {
  return ca = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ca.apply(this, arguments);
}
function Ql(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function _l(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Ql(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ql(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function kd(e) {
  var r = k(null), n = k(null), a = k({
    width: 0,
    height: 0
  }), t = ga(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit($, U) {
      U ? (I(), C(e.onOpen)) : C(e.onClose);
    }
  }), {
    zIndex: o
  } = Bt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: $,
      height: U
    } = Vn(r.value);
    a.value = {
      width: He($),
      height: He(U)
    };
  }, d = () => {
    switch (e.placement) {
      case "top":
      case "cover-bottom":
        return "bottom";
      case "top-start":
      case "right-end":
      case "cover-bottom-start":
        return "bottom left";
      case "top-end":
      case "left-end":
      case "cover-bottom-end":
        return "bottom right";
      case "bottom":
      case "cover-top":
        return "top";
      case "bottom-start":
      case "right-start":
      case "cover-top-start":
        return "top left";
      case "bottom-end":
      case "left-start":
      case "cover-top-end":
        return "top right";
      case "left":
      case "cover-right":
        return "right";
      case "right":
      case "cover-left":
        return "left";
    }
  }, v = () => {
    e.trigger === "hover" && (s = !0, N());
  }, f = /* @__PURE__ */ function() {
    var $ = _l(function* () {
      e.trigger === "hover" && (s = !1, yield dr(), !i && b());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), m = () => {
    e.trigger === "hover" && (i = !0);
  }, y = /* @__PURE__ */ function() {
    var $ = _l(function* () {
      e.trigger === "hover" && (i = !1, yield dr(), !s && b());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), g = () => {
    e.closeOnClickReference && t.value ? b() : N();
  }, h = () => {
    b();
  }, w = ($) => {
    e.trigger === "click" && (h(), C(e.onClickOutside, $));
  }, O = () => {
    I(), C(e.onClosed);
  }, P = () => {
    var {
      offsetX: $,
      offsetY: U,
      placement: D
    } = e;
    u();
    var L = {
      x: He($),
      y: He(U)
    };
    switch (D) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: L.x,
          distance: L.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: L.x,
          distance: L.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: L.x,
          distance: L.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: L.x,
          distance: -L.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: L.x,
          distance: -L.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: L.x,
          distance: -L.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: L.y,
          distance: L.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: L.y,
          distance: -L.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: D,
          skidding: L.y,
          distance: -L.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: D,
          skidding: L.x,
          distance: -L.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: D,
          skidding: L.x,
          distance: L.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: D,
          skidding: L.y,
          distance: L.x
        };
    }
  }, S = () => {
    var {
      placement: $,
      skidding: U,
      distance: D
    } = P(), L = [ca({}, Ig, {
      enabled: t.value
    }), ca({}, Eg, {
      options: {
        offset: [U, D]
      }
    }), ca({}, Sd, {
      options: {
        adaptive: !1,
        gpuAcceleration: !1
      },
      enabled: t.value
    }), {
      name: "applyTransformOrigin",
      enabled: t.value,
      phase: "beforeWrite",
      fn(K) {
        var {
          state: oe
        } = K;
        oe.styles.popper.transformOrigin = d();
      }
    }];
    return {
      placement: $,
      modifiers: L,
      strategy: e.strategy
    };
  }, E = () => e.reference ? r.value.querySelector(e.reference) : r.value, I = () => {
    l.setOptions(S());
  }, N = () => {
    var {
      disabled: $
    } = e;
    $ || (t.value = !0, C(e["onUpdate:show"], !0));
  }, b = () => {
    t.value = !1, C(e["onUpdate:show"], !1);
  };
  return Vs(E, "click", w), de(() => [e.offsetX, e.offsetY, e.placement, e.strategy], I), de(() => e.disabled, b), kt(() => {
    var $;
    l = ab(($ = E()) != null ? $ : r.value, n.value, S());
  }), $t(() => {
    l.destroy();
  }), {
    show: t,
    popover: n,
    zIndex: o,
    host: r,
    hostSize: a,
    handleHostClick: g,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: h,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: y,
    handleClosed: O,
    resize: I,
    open: N,
    close: b
  };
}
var tb = {
  type: {
    type: String,
    default: "default"
  },
  color: String,
  content: String,
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  reference: String,
  placement: {
    type: String,
    default: "bottom"
  },
  strategy: {
    type: String,
    default: "absolute"
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
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  closeOnClickReference: Boolean,
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  onClickOutside: R(),
  "onUpdate:show": R()
}, {
  n: ob,
  classes: ib
} = ae("tooltip");
function lb(e, r) {
  return p(), T(
    "div",
    {
      ref: "host",
      class: c(e.classes(e.n(), e.n("$--box"))),
      onClick: r[3] || (r[3] = function() {
        return e.handleHostClick && e.handleHostClick(...arguments);
      }),
      onMouseenter: r[4] || (r[4] = function() {
        return e.handleHostMouseenter && e.handleHostMouseenter(...arguments);
      }),
      onMouseleave: r[5] || (r[5] = function() {
        return e.handleHostMouseleave && e.handleHostMouseleave(...arguments);
      })
    },
    [Y(e.$slots, "default"), (p(), Se(Zr, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [x(je, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: me(() => [Te(V(
        "div",
        {
          ref: "popover",
          class: c(e.classes(e.n("tooltip"), e.n("$--box"))),
          style: W({
            zIndex: e.zIndex
          }),
          onClick: r[0] || (r[0] = Tr(() => {
          }, ["stop"])),
          onMouseenter: r[1] || (r[1] = function() {
            return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
          }),
          onMouseleave: r[2] || (r[2] = function() {
            return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
          })
        },
        [V(
          "div",
          {
            style: W({
              background: e.color,
              width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
            }),
            class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
          },
          [Y(e.$slots, "content", {}, () => [$e(
            le(e.content),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[Lr, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var $d = ne({
  name: "VarTooltip",
  props: tb,
  setup(e) {
    var {
      disabled: r
    } = oa(), {
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      handleHostClick: i,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: y,
      // expose
      close: g,
      // expose
      resize: h
    } = kd(e);
    return {
      toSizeUnit: Ce,
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      teleportDisabled: r,
      n: ob,
      classes: ib,
      handleHostClick: i,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handleClosed: m,
      resize: h,
      open: y,
      close: g
    };
  }
});
$d.render = lb;
const Qn = $d;
ie(Qn);
var YS = Qn, sb = {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
function Ci() {
  return Ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ci.apply(this, arguments);
}
var {
  n: ub,
  classes: db
} = ae("ellipsis"), vb = {
  key: 0
};
function fb(e, r) {
  var n = ue("var-tooltip");
  return p(), Se(
    n,
    Ot(fo(e.tooltip)),
    {
      content: me(() => [Y(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), T(
          "span",
          vb,
          le(e.tooltip.content),
          1
          /* TEXT */
        )) : Y(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: me(() => [V(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: W(e.rootStyles),
          onClick: r[0] || (r[0] = function() {
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
var Td = ne({
  name: "VarEllipsis",
  components: {
    VarTooltip: Qn
  },
  props: sb,
  setup(e) {
    var r = k(!1), n = A(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = A(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Ci({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (r.value = !r.value);
    };
    return {
      n: ub,
      classes: db,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
Td.render = fb;
const Fa = Td;
ie(Fa);
var FS = Fa, cb = {
  active: Boolean,
  show: {
    type: Boolean,
    default: !0
  },
  drag: {
    type: [Object, Boolean],
    default: !1
  },
  type: {
    type: String,
    default: "primary"
  },
  position: {
    type: String,
    default: "right-bottom"
  },
  direction: {
    type: String,
    default: "top"
  },
  trigger: {
    type: String,
    default: "click"
  },
  disabled: Boolean,
  color: String,
  inactiveIcon: {
    type: String,
    default: "plus"
  },
  activeIcon: {
    type: String,
    default: "window-close"
  },
  inactiveIconSize: [Number, String],
  activeIconSize: [Number, String],
  fixed: {
    type: Boolean,
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  top: [Number, String],
  bottom: [Number, String],
  left: [Number, String],
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  safeArea: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: R(),
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:active": R()
};
function mb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Tt(e);
}
var {
  classes: Ao,
  n: gr
} = ae("fab");
const ja = ne({
  name: "VarFab",
  inheritAttrs: !1,
  props: cb,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = ga(e, "active"), o = k(null), l = k(null), i = (v, f, m) => {
      if (v.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (m === 0) {
          C(e.onClick, t.value, v);
          return;
        }
        t.value = f, C(e.onClick, t.value, v), C(t.value ? e.onOpen : e.onClose);
      }
    }, s = (v, f) => {
      e.trigger !== "hover" || e.disabled || f === 0 || (t.value = v, C(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, C(e.onClose));
    }, d = () => n.trigger ? e.show ? n.trigger({
      active: t.value
    }) : null : Te(x(vr, {
      "var-fab-cover": !0,
      class: gr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      elevation: e.elevation,
      round: !0
    }, {
      default: () => [x(Ae, {
        "var-fab-cover": !0,
        class: Ao([t.value, gr("trigger-active-icon"), gr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: gr("--trigger-icon-animation")
      }, null)]
    }), [[Lr, e.show]]);
    return de(() => e.trigger, () => {
      t.value = !1;
    }), de(() => e.disabled, () => {
      t.value = !1;
    }), de(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var v;
      (v = l.value) == null || v.reset();
    }), Vs(o, "click", u), () => {
      var v, f, m = Ns((f = C(n.default)) != null ? f : []), y = Ni(e.drag) ? {} : e.drag;
      return x(Kn, ze({
        ref: l,
        class: Ao(gr("--position-" + e.position), [!e.fixed, gr("--absolute")]),
        style: {
          top: Ce(e.top),
          bottom: Ce(e.bottom),
          left: Ce(e.left),
          right: Ce(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: y.direction,
        attraction: y.attraction,
        boundary: y.boundary,
        onClick: (g) => i(g, !t.value, m.length)
      }, a), {
        default: () => [x("div", {
          class: Ao(gr(), gr("--direction-" + e.direction), [e.safeArea, gr("--safe-area")]),
          ref: o,
          onMouseleave: () => s(!1, m.length),
          onMouseenter: () => s(!0, m.length)
        }, [x(je, {
          name: gr("--active-transition")
        }, mb(v = d()) ? v : {
          default: () => [v]
        }), x(je, {
          name: gr("--actions-transition-" + e.direction),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Te(x("div", {
            class: gr("actions"),
            onClick: (g) => g.stopPropagation()
          }, [m.map((g) => x("div", {
            class: gr("action")
          }, [g]))]), [[Lr, e.show && t.value && m.length]])]
        })])]
      });
    };
  }
});
ie(ja);
var jS = ja, hb = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: R(),
  onReset: R()
};
function xl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function es(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: pb
} = ae("form");
function gb(e, r) {
  return p(), T(
    "form",
    {
      class: c(e.n()),
      onSubmit: r[0] || (r[0] = function() {
        return e.handleSubmit && e.handleSubmit(...arguments);
      }),
      onReset: r[1] || (r[1] = function() {
        return e.handleReset && e.handleReset(...arguments);
      })
    },
    [Y(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Pd = ne({
  name: "VarForm",
  props: hb,
  setup(e) {
    var r = A(() => e.disabled), n = A(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = zm(), o = (f) => {
      setTimeout(() => {
        var m = vn(f), y = m === window ? 0 : pl(m), g = pl(f) - y - He(e.scrollToErrorOffsetY);
        ya(m, {
          top: g,
          animation: qo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var f = es(function* (m) {
        m.preventDefault();
        var y = yield s();
        C(e.onSubmit, y);
      });
      return function(y) {
        return f.apply(this, arguments);
      };
    }(), i = (f) => {
      f.preventDefault(), u(), C(e.onReset);
    }, s = /* @__PURE__ */ function() {
      var f = es(function* () {
        var m = yield Promise.all(a.map((O) => {
          var {
            validate: P
          } = O;
          return P();
        }));
        if (e.scrollToError) {
          var [, y] = tf(m, (O) => O === !1, e.scrollToError), g = y > -1;
          if (g) {
            var h, w = (h = a[y].instance.proxy) == null ? void 0 : h.$el;
            o(w);
          }
          return !g;
        }
        return m.every((O) => O === !0);
      });
      return function() {
        return f.apply(this, arguments);
      };
    }(), u = () => a.forEach((f) => {
      var {
        reset: m
      } = f;
      return m();
    }), d = () => a.forEach((f) => {
      var {
        resetValidation: m
      } = f;
      return m();
    }), v = {
      disabled: r,
      readonly: n
    };
    return t(v), {
      n: pb,
      handleSubmit: l,
      handleReset: i,
      validate: s,
      reset: u,
      resetValidation: d
    };
  }
});
Pd.render = gb;
const Pn = Pd;
Pn.useValidation = Or;
Pn.useForm = Ir;
ie(Pn);
var WS = Pn, bb = {
  src: String,
  fit: {
    type: String,
    default: "fill"
  },
  alt: String,
  title: String,
  width: [String, Number],
  height: [String, Number],
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: String,
  error: String,
  lazy: Boolean,
  ripple: Boolean,
  block: {
    type: Boolean,
    default: !0
  },
  onClick: R(),
  onLoad: R(),
  onError: R()
}, {
  n: yb,
  classes: wb
} = ae("image"), Cb = ["alt", "title", "lazy-loading", "lazy-error"], Sb = ["alt", "title", "src"];
function kb(e, r) {
  var n = Le("lazy"), a = Le("ripple");
  return Te((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: W({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? Te((p(), T("img", {
      key: 0,
      class: c(e.n("image")),
      alt: e.alt,
      title: e.title,
      "lazy-loading": e.loading,
      "lazy-error": e.error,
      style: W({
        objectFit: e.fit
      }),
      onLoad: r[0] || (r[0] = function() {
        return e.handleLoad && e.handleLoad(...arguments);
      }),
      onClick: r[1] || (r[1] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    }, null, 46, Cb)), [[n, e.src]]) : ee("v-if", !0), !e.lazy && !e.showErrorSlot ? (p(), T("img", {
      key: 1,
      class: c(e.n("image")),
      alt: e.alt,
      title: e.title,
      style: W({
        objectFit: e.fit
      }),
      src: e.src,
      onLoad: r[2] || (r[2] = function() {
        return e.handleLoad && e.handleLoad(...arguments);
      }),
      onError: r[3] || (r[3] = function() {
        return e.handleError && e.handleError(...arguments);
      }),
      onClick: r[4] || (r[4] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    }, null, 46, Sb)) : ee("v-if", !0), e.showErrorSlot ? Y(e.$slots, "error", {
      key: 2
    }) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Od = ne({
  name: "VarImage",
  directives: {
    Lazy: Ca,
    Ripple: Xe
  },
  props: bb,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(!1), t = (i) => {
      a.value = !!n.error, C(e.onError, i);
    }, o = (i) => {
      var s = i.currentTarget;
      if (e.lazy) {
        if (s._lazy.state === "success") {
          C(e.onLoad, i);
          return;
        }
        s._lazy.state === "error" && t(i);
      } else
        C(e.onLoad, i);
    }, l = (i) => {
      C(e.onClick, i);
    };
    return de(() => e.src, () => {
      a.value = !1;
    }), {
      n: yb,
      classes: wb,
      showErrorSlot: a,
      toSizeUnit: Ce,
      handleLoad: o,
      handleError: t,
      handleClick: l
    };
  }
});
Od.render = kb;
const Wa = Od;
ie(Wa);
var GS = Wa, Id = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function $b() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ir(Id);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Md = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: [String, Number],
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
  indicatorColor: String,
  vertical: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: R()
};
function rs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function An(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        rs(o, a, t, l, i, "next", s);
      }
      function i(s) {
        rs(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var Tb = 250, Pb = 20, {
  n: Ob,
  classes: Ib
} = ae("swipe"), Mb = ["onClick"];
function Bb(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [V(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: W({
          width: e.vertical ? void 0 : e.trackSize + "px",
          height: e.vertical ? e.trackSize + "px" : void 0,
          transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.trackTranslate + "px)",
          transitionDuration: e.lockDuration ? "0ms" : e.toNumber(e.duration) + "ms"
        }),
        onTouchstart: r[0] || (r[0] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: r[1] || (r[1] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: r[2] || (r[2] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [Y(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), Y(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), T(
        Ve,
        null,
        Ge(e.length, (n, a) => (p(), T("div", {
          class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
          style: W({
            background: e.indicatorColor
          }),
          key: n,
          onClick: (t) => e.to(a)
        }, null, 14, Mb))),
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
var Bd = ne({
  name: "VarSwipe",
  props: Md,
  setup(e) {
    var r = k(null), n = k(0), a = A(() => e.vertical), t = k(0), o = k(0), l = k(!1), i = k(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = $b(), {
      popup: v,
      bindPopup: f
    } = wf(), {
      deltaX: m,
      deltaY: y,
      moveX: g,
      moveY: h,
      offsetX: w,
      offsetY: O,
      touching: P,
      direction: S,
      startTime: E,
      startTouch: I,
      moveTouch: N,
      endTouch: b
    } = mo(), $ = A(() => S.value === (e.vertical ? "vertical" : "horizontal")), U = !1, D = -1, L = (G) => s.find((te) => {
      var {
        index: ge
      } = te;
      return ge.value === G;
    }), K = () => {
      e.loop && (o.value >= 0 && L(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && L(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (L(d.value - 1).setTranslate(0), L(0).setTranslate(0)));
    }, oe = (G) => {
      var te = mr(G) ? G : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: ge
      } = e;
      return te <= -1 ? ge ? -1 : 0 : te >= d.value ? ge ? d.value : d.value - 1 : te;
    }, _ = (G) => {
      var {
        loop: te
      } = e;
      return G === -1 ? te ? d.value - 1 : 0 : G === d.value ? te ? 0 : d.value - 1 : G;
    }, H = (G) => e.loop ? G < 0 ? d.value + G : G >= d.value ? G - d.value : G : un(G, 0, d.value - 1), F = /* @__PURE__ */ function() {
      var G = An(function* () {
        var te = o.value >= n.value, ge = o.value <= -t.value, Me = 0, Oe = -(t.value - n.value);
        l.value = !0, (te || ge) && (l.value = !0, o.value = ge ? Me : Oe, L(0).setTranslate(0), L(d.value - 1).setTranslate(0)), yield dr(), l.value = !1;
      });
      return function() {
        return G.apply(this, arguments);
      };
    }(), j = () => {
      U || (i.value = H(z(e.initialIndex)), U = !0);
    }, M = () => {
      var {
        autoplay: G
      } = e;
      !G || d.value <= 1 || (B(), D = window.setTimeout(() => {
        ce(), M();
      }, z(G)));
    }, B = () => {
      D && clearTimeout(D);
    }, J = (G) => {
      o.value = G, K();
    }, q = /* @__PURE__ */ function() {
      var G = An(function* (te) {
        d.value <= 1 || !e.touchable || (I(te), B(), yield F(), l.value = !0);
      });
      return function(ge) {
        return G.apply(this, arguments);
      };
    }(), X = (G) => {
      var {
        touchable: te,
        vertical: ge
      } = e;
      !P.value || !te || (N(G), $.value && (G.preventDefault(), J(o.value + (ge ? h.value : g.value))));
    }, Z = () => {
      if (P.value && (b(), !!$.value)) {
        var {
          vertical: G,
          onChange: te
        } = e, ge = G ? y.value < 0 : m.value < 0, Me = G ? O.value : w.value, Oe = performance.now() - E.value <= Tb && Me >= Pb, Re = Oe ? oe(ge ? i.value + 1 : i.value - 1) : oe();
        l.value = !1, J(Re * -n.value);
        var Fe = i.value;
        i.value = _(Re), M(), Fe !== i.value && C(te, i.value);
      }
    }, re = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((G) => {
        G.setTranslate(0);
      }), M(), setTimeout(() => {
        l.value = !1;
      }));
    }, ce = /* @__PURE__ */ function() {
      var G = An(function* (te) {
        if (!(d.value <= 1)) {
          j();
          var {
            loop: ge,
            onChange: Me
          } = e, Oe = i.value;
          if (i.value = H(Oe + 1), (te == null ? void 0 : te.event) !== !1 && C(Me, i.value), yield F(), Oe === d.value - 1 && ge) {
            L(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          Oe !== d.value - 1 && (o.value = i.value * -n.value);
        }
      });
      return function(ge) {
        return G.apply(this, arguments);
      };
    }(), ke = /* @__PURE__ */ function() {
      var G = An(function* (te) {
        if (!(d.value <= 1)) {
          j();
          var {
            loop: ge,
            onChange: Me
          } = e, Oe = i.value;
          if (i.value = H(Oe - 1), (te == null ? void 0 : te.event) !== !1 && C(Me, i.value), yield F(), Oe === 0 && ge) {
            L(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          Oe !== 0 && (o.value = i.value * -n.value);
        }
      });
      return function(ge) {
        return G.apply(this, arguments);
      };
    }(), Ee = (G, te) => {
      if (!(d.value <= 1 || G === i.value)) {
        G = G < 0 ? 0 : G, G = G >= d.value ? d.value : G;
        var ge = G > i.value ? ce : ke, Me = Math.abs(G - i.value);
        Array.from({
          length: Me
        }).forEach((Oe, Re) => {
          ge({
            event: Re === Me - 1 ? te == null ? void 0 : te.event : !1
          });
        });
      }
    }, se = {
      size: n,
      vertical: a
    };
    return u(se), C(f, null), de(() => d.value, /* @__PURE__ */ An(function* () {
      yield dr(), j(), re();
    })), v && de(() => v.show.value, /* @__PURE__ */ function() {
      var G = An(function* (te) {
        te ? (yield dr(), re()) : B();
      });
      return function(te) {
        return G.apply(this, arguments);
      };
    }()), hn(re), co(B), It(re), {
      n: Ob,
      classes: Ib,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      trackTranslate: o,
      lockDuration: l,
      handleTouchstart: q,
      handleTouchmove: X,
      handleTouchend: Z,
      next: ce,
      prev: ke,
      to: Ee,
      resize: re,
      toNumber: z
    };
  }
});
Bd.render = Bb;
const On = Bd;
ie(On);
var qS = On;
function Eb() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = or(Id);
  return e || Pr("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Vb
} = ae("swipe-item");
function Nb(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n()),
      style: W({
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
var Ed = ne({
  name: "VarSwipeItem",
  setup() {
    var e = k(0), {
      swipe: r,
      bindSwipe: n,
      index: a
    } = Eb(), {
      size: t,
      vertical: o
    } = r, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return n(i), {
      n: Vb,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Ed.render = Nb;
const In = Ed;
ie(In);
var XS = In;
function Si() {
  return Si = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Si.apply(this, arguments);
}
var Db = Si({
  show: Boolean,
  imagePreventDefault: Boolean,
  images: {
    type: Array,
    default: () => []
  },
  /** @deprecated Use initialIndex to instead. */
  current: String,
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: Boolean,
  "onUpdate:show": R(),
  onLongPress: R()
}, xe(Md, ["loop", "indicator", "onChange"]), xe(Mt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: ns,
  classes: Ab
} = ae("image-preview"), zo = 12, as = 200, zb = 350, ts = 200, Lb = 500, Rb = ["onTouchstart"], Ub = ["src", "alt"];
function Hb(e, r) {
  var n = ue("var-swipe-item"), a = ue("var-swipe"), t = ue("var-icon"), o = ue("var-popup");
  return p(), Se(o, {
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
  }, {
    default: me(() => [x(a, ze({
      ref: "swipeRef",
      class: e.n("swipe"),
      "var-image-preview-cover": "",
      touchable: e.canSwipe,
      indicator: e.indicator && e.images.length > 1,
      "initial-index": e.initialIndex,
      loop: e.loop,
      onChange: e.onChange
    }, e.$attrs), {
      default: me(() => [(p(!0), T(
        Ve,
        null,
        Ge(e.images, (l, i) => (p(), Se(n, {
          class: c(e.n("swipe-item")),
          "var-image-preview-cover": "",
          key: l
        }, {
          default: me(() => [V("div", {
            class: c(e.n("zoom-container")),
            style: W({
              transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
              transitionTimingFunction: e.transitionTimingFunction,
              transitionDuration: e.transitionDuration
            }),
            onTouchstart: (s) => e.handleTouchstart(s, i),
            onTouchmove: r[0] || (r[0] = function() {
              return e.handleTouchmove && e.handleTouchmove(...arguments);
            }),
            onTouchend: r[1] || (r[1] = function() {
              return e.handleTouchend && e.handleTouchend(...arguments);
            }),
            onTouchcancel: r[2] || (r[2] = function() {
              return e.handleTouchcancel && e.handleTouchcancel(...arguments);
            })
          }, [V("img", {
            class: c(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: l,
            alt: l
          }, null, 10, Ub)], 46, Rb)]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["class"]))),
        128
        /* KEYED_FRAGMENT */
      ))]),
      indicator: me((l) => {
        var {
          index: i,
          length: s
        } = l;
        return [Y(e.$slots, "indicator", {
          index: i,
          length: s
        }, () => [e.indicator && e.images.length > 1 ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("indicators"))
          },
          le(i + 1) + " / " + le(s),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)])];
      }),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]), Y(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), Se(t, {
      key: 0,
      class: c(e.n("close-icon")),
      name: "close-circle",
      "var-image-preview-cover": "",
      onClick: e.close
    }, null, 8, ["class", "onClick"])) : ee("v-if", !0)]), V(
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
  }, 8, ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
var Vd = ne({
  name: "VarImagePreview",
  components: {
    VarSwipe: On,
    VarSwipeItem: In,
    VarPopup: Rr,
    VarIcon: Ae
  },
  inheritAttrs: !1,
  props: Db,
  setup(e) {
    var r = k(!1), n = k(1), a = k(0), t = k(0), o = k(void 0), l = k(void 0), i = k(!0), s = k(null), {
      moveX: u,
      moveY: d,
      distance: v,
      startTime: f,
      startTouch: m,
      moveTouch: y,
      endTouch: g
    } = mo(), h = {
      start: null,
      prev: null
    }, w = null, O = null, P = !1, S = A(() => {
      var {
        images: q,
        current: X,
        initialIndex: Z
      } = e;
      if (Z != null)
        return z(Z);
      var re = q.findIndex((ce) => ce === X);
      return Math.max(re, 0);
    }), E = A(() => {
      var {
        imagePreventDefault: q,
        show: X
      } = e;
      return X && q;
    }), I = () => {
      n.value = z(e.zoom), i.value = !1, h.prev = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, ts);
    }, N = () => {
      n.value = 1, a.value = 0, t.value = 0, i.value = !0, h.prev = null, o.value = void 0, l.value = void 0;
    }, b = (q) => h.prev ? v.value <= zo && performance.now() - f.value <= as && h.prev === q : !1, $ = (q) => !q || !h.start || !h.prev ? !1 : v.value <= zo && performance.now() - f.value < zb && (q === h.start || q.parentNode === h.start), U = () => {
      g(), window.clearTimeout(O), P = !1, h.start = null;
    }, D = (q) => {
      if (g(), window.clearTimeout(O), P) {
        P = !1;
        return;
      }
      var X = $(q.target);
      w = window.setTimeout(() => {
        X && F(), h.start = null;
      }, as);
    }, L = (q, X) => {
      window.clearTimeout(w), window.clearTimeout(O);
      var Z = q.currentTarget;
      if (h.start = Z, O = window.setTimeout(() => {
        P = !0, C(e.onLongPress, X);
      }, Lb), b(Z)) {
        n.value > 1 ? N() : I();
        return;
      }
      m(q), h.prev = Z;
    }, K = (q) => {
      var {
        offsetWidth: X,
        offsetHeight: Z
      } = q, {
        naturalWidth: re,
        naturalHeight: ce
      } = q.querySelector("." + ns("image"));
      return {
        width: X,
        height: Z,
        imageRadio: ce / re,
        rootRadio: Z / X,
        zoom: z(e.zoom)
      };
    }, oe = (q) => {
      var {
        zoom: X,
        imageRadio: Z,
        rootRadio: re,
        width: ce,
        height: ke
      } = K(q);
      if (!Z)
        return 0;
      var Ee = Z > re ? ke / Z : ce;
      return Math.max(0, (X * Ee - ce) / 2) / X;
    }, _ = (q) => {
      var {
        zoom: X,
        imageRadio: Z,
        rootRadio: re,
        width: ce,
        height: ke
      } = K(q);
      if (!Z)
        return 0;
      var Ee = Z > re ? ke : ce * Z;
      return Math.max(0, (X * Ee - ke) / 2) / X;
    }, H = (q) => {
      if (h.prev) {
        y(q);
        var X = q.currentTarget;
        if (v.value > zo && window.clearTimeout(O), n.value > 1) {
          var Z = oe(X), re = _(X);
          a.value = un(a.value + u.value, -Z, Z), t.value = un(t.value + d.value, -re, re);
        }
        h.prev = X;
      }
    }, F = () => {
      if (n.value > 1) {
        N(), setTimeout(() => C(e["onUpdate:show"], !1), ts);
        return;
      }
      C(e["onUpdate:show"], !1);
    }, j = (q) => {
      var X;
      (X = s.value) == null || X.prev(q);
    }, M = (q) => {
      var X;
      (X = s.value) == null || X.next(q);
    }, B = (q, X) => {
      var Z;
      (Z = s.value) == null || Z.to(q, X);
    }, J = (q) => {
      e.imagePreventDefault && e.show && q.preventDefault();
    };
    return dn(() => document, "contextmenu", J), de(() => e.show, (q) => {
      r.value = q;
    }, {
      immediate: !0
    }), {
      n: ns,
      classes: Ab,
      swipeRef: s,
      isPreventDefault: E,
      initialIndex: S,
      popupShow: r,
      scale: n,
      translateX: a,
      translateY: t,
      canSwipe: i,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: L,
      handleTouchmove: H,
      handleTouchend: D,
      handleTouchcancel: U,
      close: F,
      prev: j,
      next: M,
      to: B
    };
  }
});
Vd.render = Hb;
const Dt = Vd;
function ma() {
  return ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ma.apply(this, arguments);
}
var an, ha = {};
function Yb(e) {
  return e === void 0 && (e = {}), Je(e) ? ma({}, ha, {
    images: [e]
  }) : Be(e) ? ma({}, ha, {
    images: e
  }) : ma({}, ha, e);
}
function zr(e) {
  if (bn()) {
    zr.close();
    var r = Yb(e), n = Ye(r);
    n.teleport = "body", an = n;
    var {
      unmountInstance: a
    } = ta(Dt, n, {
      onClose: () => C(n.onClose),
      onClosed: () => {
        C(n.onClosed), a(), an === n && (an = null);
      },
      onRouteChange: () => {
        a(), an === n && (an = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }
}
zr.close = () => {
  if (an != null) {
    var e = an;
    an = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
zr.setDefaultOptions = (e) => {
  ha = e;
};
zr.resetDefaultOptions = () => {
  ha = {};
};
zr.Component = Dt;
ie(Dt);
ie(Dt, zr);
var KS = Dt, Qt = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: Boolean,
  disabled: Boolean,
  onScroll: R()
};
function os(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function is(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: Fb,
  classes: jb
} = ae("sticky");
function Wb(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: W({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [V(
      "div",
      {
        class: c(e.n("wrapper")),
        ref: "wrapperEl",
        style: W({
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
var Nd = ne({
  name: "VarSticky",
  props: Qt,
  setup(e) {
    var r = k(null), n = k(null), a = k(!1), t = k("0px"), o = k("0px"), l = k("auto"), i = k("auto"), s = k("auto"), u = k("auto"), d = A(() => !e.disabled && e.cssMode), v = A(() => !e.disabled && !e.cssMode && a.value), f = A(() => He(e.offsetTop)), m, y = () => {
      var {
        cssMode: P,
        disabled: S
      } = e;
      if (!S) {
        var E = 0;
        if (m !== window) {
          var {
            top: I
          } = Qe(m);
          E = I;
        }
        var N = n.value, b = r.value, {
          top: $,
          left: U
        } = Qe(b), D = $ - E;
        return D <= f.value ? (P || (l.value = b.offsetWidth + "px", i.value = b.offsetHeight + "px", t.value = E + f.value + "px", o.value = U + "px", s.value = N.offsetWidth + "px", u.value = N.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: D,
          isFixed: !1
        });
      }
    }, g = () => {
      if (m) {
        var P = y();
        P && C(e.onScroll, P.offsetTop, P.isFixed);
      }
    }, h = /* @__PURE__ */ function() {
      var P = is(function* () {
        a.value = !1, yield qt(), y();
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var P = is(function* () {
        yield dr(), m = vn(r.value), m !== window && m.addEventListener("scroll", g), g();
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), O = () => {
      m !== window && m.removeEventListener("scroll", g);
    };
    return de(() => e.disabled, h), tr(w), co(O), It(h), dn(() => window, "scroll", g), {
      n: Fb,
      classes: jb,
      resize: h,
      stickyEl: r,
      wrapperEl: n,
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
Nd.render = Wb;
const Mn = Nd;
ie(Mn);
var ZS = Mn, Dd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Gb() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = ir(Dd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function qb() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Dd);
  return n || Pr("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Xb = {
  index: [Number, String]
}, {
  n: Kb,
  classes: Zb
} = ae("index-anchor");
function Jb(e, r) {
  return p(), Se(na(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: me(() => [V(
      "div",
      ze({
        class: e.n()
      }, e.$attrs),
      [Y(e.$slots, "default", {}, () => [$e(
        le(e.name),
        1
        /* TEXT */
      )])],
      16
      /* FULL_PROPS */
    )]),
    _: 3
    /* FORWARDED */
  }, 8, ["offset-top", "z-index", "disabled", "css-mode"]);
}
var Ad = ne({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Mn
  },
  inheritAttrs: !1,
  props: Xb,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = qb(), t = k(0), o = k(!1), l = A(() => e.index), i = k(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = n, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, y = (h) => {
      o.value = h;
    }, g = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: y
    };
    return a(g), {
      n: Kb,
      classes: Zb,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: je
    };
  }
});
Ad.render = Jb;
const Ga = Ad;
ie(Ga);
var JS = Ga, Qb = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  /** @deprecated Use stickyCssMode to instead. */
  cssMode: Boolean,
  stickyCssMode: Boolean,
  hideList: Boolean,
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: String,
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: R(),
  onChange: R()
};
function ls(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function jt(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: _b,
  classes: xb
} = ae("index-bar"), e0 = ["onClick"];
function r0(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [Y(e.$slots, "default"), V(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: W({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), T(
        Ve,
        null,
        Ge(e.anchorNameList, (n) => (p(), T("li", {
          key: n,
          class: c(e.classes(e.n("anchor-item"), [e.active === n, e.n("anchor-item--active")])),
          style: W({
            color: e.active === n && e.highlightColor ? e.highlightColor : ""
          }),
          onClick: (a) => e.anchorClick({
            anchorName: n,
            manualCall: !0
          })
        }, le(n), 15, e0))),
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
var zd = ne({
  name: "VarIndexBar",
  props: Qb,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = Gb(), t = k(""), o = k(null), l = k([]), i = k(), s = A(() => e.sticky), u = A(() => e.stickyCssMode || e.cssMode), d = A(() => He(e.stickyOffsetTop)), v = A(() => e.zIndex), f = null, m = !1, y = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(y);
    var g = (N, b) => {
      var $ = Di(N) ? N.name.value : N;
      $ === i.value || $ === void 0 || (i.value = $, (b == null ? void 0 : b.event) !== !1 && C(e.onChange, $));
    }, h = () => {
      if (Ai(f))
        return 0;
      var {
        top: N
      } = Qe(f), {
        scrollTop: b
      } = f, {
        top: $
      } = Qe(o.value);
      return b - N + $;
    }, w = () => {
      var N = ba(f), b = f === window ? document.body.scrollHeight : f.scrollHeight, $ = h();
      n.forEach((U, D) => {
        var L = U.ownTop.value, K = N - L + d.value - $, oe = D === n.length - 1 ? b : n[D + 1].ownTop.value - U.ownTop.value;
        U.setDisabled(!0), K >= 0 && K < oe && t.value === "" && (U.setDisabled(!1), g(U));
      });
    }, O = /* @__PURE__ */ function() {
      var N = jt(function* (b) {
        var {
          anchorName: $,
          manualCall: U = !1,
          options: D
        } = b;
        if (U && C(e.onClick, $), !($ === i.value && !m)) {
          var L = n.find((H) => {
            var {
              name: F
            } = H;
            return $ === F.value;
          });
          if (L) {
            var K = h(), oe = L.ownTop.value - d.value + K, _ = Li(f);
            t.value = $, g($, D), yield ya(f, {
              left: _,
              top: oe,
              animation: Zs,
              duration: z(e.duration)
            }), yield dr(), t.value = "";
          }
        }
      });
      return function($) {
        return N.apply(this, arguments);
      };
    }(), P = /* @__PURE__ */ function() {
      var N = jt(function* () {
        yield dr(), f = vn(o.value);
      });
      return function() {
        return N.apply(this, arguments);
      };
    }(), S = () => {
      f.addEventListener("scroll", w);
    }, E = () => {
      f.removeEventListener("scroll", w);
    }, I = (N, b) => {
      pa(() => O({
        anchorName: N,
        options: b
      }));
    };
    return de(() => r.value, /* @__PURE__ */ jt(function* () {
      yield dr(), n.forEach((N) => {
        var {
          name: b,
          setOwnTop: $
        } = N;
        b.value && l.value.push(b.value), $();
      });
    })), tr(/* @__PURE__ */ jt(function* () {
      yield P(), S();
    })), vo(E), ea(() => {
      m = !0, E();
    }), hn(() => {
      !m || i.value === void 0 || (O({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: _b,
      classes: xb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: z,
      scrollTo: I,
      anchorClick: O
    };
  }
});
zd.render = r0;
const qa = zd;
ie(qa);
var QS = qa, rl = {
  value: {
    type: null,
    required: !0
  },
  id: {
    type: String,
    default: ""
  },
  isFocus: Boolean,
  size: {
    type: String,
    default: "normal"
  },
  variant: {
    type: String,
    default: "standard"
  },
  placeholder: String,
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: String,
  focusColor: String,
  blurColor: String,
  errorMessage: String,
  formDisabled: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  cursor: String,
  composing: Boolean,
  onClick: R(),
  onClear: R()
}, {
  n: Lo,
  classes: n0
} = ae("field-decorator"), a0 = ["for"];
function t0(e, r) {
  var n = ue("var-icon");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [V(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: W({
          color: e.color,
          cursor: e.cursor,
          overflow: e.isFloating ? "visible" : "hidden"
        })
      },
      [V(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [Y(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), V(
        "div",
        {
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      ), e.placeholder && e.hint ? (p(), T("label", {
        key: 0,
        class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], e.computePlaceholderState())),
        style: W({
          color: e.color
        }),
        for: e.id
      }, [V(
        "span",
        null,
        le(e.placeholder),
        1
        /* TEXT */
      )], 14, a0)) : ee("v-if", !0), V(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (p(), Se(n, {
          key: 0,
          class: c(e.n("clear-icon")),
          "var-field-decorator-cover": "",
          name: "close-circle",
          onClick: e.handleClear
        }, null, 8, ["class", "onClick"])) : ee("v-if", !0), Y(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), T(
      Ve,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), T(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: W({
            borderColor: e.color
          })
        },
        [V(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: W({
              width: e.legendWidth
            })
          },
          [e.placeholder && e.hint ? (p(), Se(Zr, {
            key: 0,
            to: "body"
          }, [V(
            "span",
            {
              ref: "placeholderTextEl",
              class: c(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
            },
            le(e.placeholder),
            3
            /* TEXT, CLASS */
          )])) : ee("v-if", !0)],
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )) : (p(), T(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: W({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [V(
          "div",
          {
            class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
            style: W({
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
      64
      /* STABLE_FRAGMENT */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ld = ne({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Ae
  },
  props: rl,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(null), t = k(""), o = A(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = A(() => e.hint && (!Yr(e.value) || e.isFocus || n["prepend-icon"])), i = () => {
      var {
        hint: v,
        value: f,
        composing: m
      } = e;
      if (!v && (!Yr(f) || m))
        return Lo("--placeholder-hidden");
      if (l.value)
        return Lo("--placeholder-hint");
    }, s = () => {
      var {
        size: v,
        hint: f,
        variant: m,
        placeholder: y
      } = e;
      if (!y || !f || m !== "outlined") {
        t.value = "";
        return;
      }
      var g = Vn(a.value), h = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
      t.value = "calc(" + g.width + " * 0.75 + " + h + " * 2)";
    }, u = (v) => {
      C(e.onClear, v);
    }, d = (v) => {
      C(e.onClick, v);
    };
    return It(s), tr(s), Pt(s), {
      placeholderTextEl: a,
      color: o,
      legendWidth: t,
      isFloating: l,
      computePlaceholderState: i,
      n: Lo,
      classes: n0,
      isEmpty: Yr,
      handleClear: u,
      handleClick: d
    };
  }
});
Ld.render = t0;
const Rd = Ld;
function ki() {
  return ki = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ki.apply(this, arguments);
}
var o0 = ki({
  modelValue: String,
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text"
  },
  textarea: Boolean,
  rows: {
    type: [String, Number],
    default: 8
  },
  maxlength: [String, Number],
  readonly: Boolean,
  resize: Boolean,
  autofocus: Boolean,
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: Array,
  enterkeyhint: String,
  onFocus: R(),
  onBlur: R(),
  onInput: R(),
  onChange: R(),
  onClear: R(),
  "onUpdate:modelValue": R()
}, xe(rl, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: i0,
  classes: l0
} = ae("input"), s0 = ["placeholder", "enterkeyhint"], u0 = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], d0 = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function v0(e, r) {
  var n = ue("var-field-decorator"), a = ue("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[13] || (r[13] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [x(
      n,
      Ot(fo({
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
        onClick: e.handleClick,
        onClear: e.handleClear
      })),
      _t({
        "append-icon": me(() => [Y(e.$slots, "append-icon")]),
        default: me(() => [e.normalizedType === "password" ? (p(), T("input", {
          key: 0,
          tabindex: "-1",
          class: c(e.n("autocomplete")),
          placeholder: e.hint ? void 0 : e.placeholder,
          style: W({
            "--input-placeholder-color": e.placeholderColor
          }),
          enterkeyhint: e.enterkeyhint
        }, null, 14, s0)) : ee("v-if", !0), e.textarea ? (p(), T("textarea", {
          key: 1,
          class: c(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
          ref: "el",
          autocomplete: "new-password",
          id: e.id,
          disabled: e.formDisabled || e.disabled,
          readonly: e.formReadonly || e.readonly,
          type: e.normalizedType,
          value: e.modelValue,
          placeholder: e.hint ? void 0 : e.placeholder,
          maxlength: e.maxlength,
          rows: e.rows,
          enterkeyhint: e.enterkeyhint,
          inputmode: e.type === "number" ? "numeric" : void 0,
          style: W({
            color: e.errorMessage ? void 0 : e.textColor,
            caretColor: e.errorMessage ? void 0 : e.focusColor,
            resize: e.resize ? "vertical" : "none",
            "--input-placeholder-color": e.placeholderColor
          }),
          onFocus: r[0] || (r[0] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          }),
          onBlur: r[1] || (r[1] = function() {
            return e.handleBlur && e.handleBlur(...arguments);
          }),
          onInput: r[2] || (r[2] = function() {
            return e.handleInput && e.handleInput(...arguments);
          }),
          onChange: r[3] || (r[3] = function() {
            return e.handleChange && e.handleChange(...arguments);
          }),
          onCompositionstart: r[4] || (r[4] = function() {
            return e.handleCompositionStart && e.handleCompositionStart(...arguments);
          }),
          onCompositionend: r[5] || (r[5] = function() {
            return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
          })
        }, `
      `, 46, u0)) : (p(), T("input", {
          key: 2,
          class: c(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
          ref: "el",
          autocomplete: "new-password",
          id: e.id,
          disabled: e.formDisabled || e.disabled,
          readonly: e.formReadonly || e.readonly,
          type: e.normalizedType,
          value: e.modelValue,
          placeholder: e.hint ? void 0 : e.placeholder,
          maxlength: e.maxlength,
          enterkeyhint: e.enterkeyhint,
          inputmode: e.type === "number" ? "numeric" : void 0,
          style: W({
            color: e.errorMessage ? void 0 : e.textColor,
            caretColor: e.errorMessage ? void 0 : e.focusColor,
            "--input-placeholder-color": e.placeholderColor
          }),
          onFocus: r[6] || (r[6] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          }),
          onBlur: r[7] || (r[7] = function() {
            return e.handleBlur && e.handleBlur(...arguments);
          }),
          onInput: r[8] || (r[8] = function() {
            return e.handleInput && e.handleInput(...arguments);
          }),
          onChange: r[9] || (r[9] = function() {
            return e.handleChange && e.handleChange(...arguments);
          }),
          onCompositionstart: r[10] || (r[10] = function() {
            return e.handleCompositionStart && e.handleCompositionStart(...arguments);
          }),
          onCompositionend: r[11] || (r[11] = function() {
            return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
          })
        }, null, 46, d0))]),
        _: 2
        /* DYNAMIC */
      }, [e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: me(() => [Y(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0]),
      1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
    ), x(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText,
      onMousedown: r[12] || (r[12] = Tr(() => {
      }, ["stop"]))
    }, _t({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: me(() => [Y(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"])],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Ud = ne({
  name: "VarInput",
  components: {
    VarFormDetails: nr,
    VarFieldDecorator: Rd
  },
  props: o0,
  setup(e) {
    var r = k("var-input-" + ra().uid), n = k(null), a = k(!1), t = k(!1), o = A(() => e.type === "number" ? "text" : e.type), l = A(() => {
      var {
        maxlength: j,
        modelValue: M
      } = e;
      return j ? Yr(M) ? "0 / " + j : String(M).length + "/" + j : "";
    }), i = A(() => e.disabled || e.readonly ? "" : "text"), s = A(() => {
      var {
        hint: j,
        blurColor: M,
        focusColor: B
      } = e;
      if (!j)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? B || "var(--field-decorator-focus-color)" : M || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Ir(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: y
    } = Or(), g = (j) => {
      Ue(() => {
        var {
          validateTrigger: M,
          rules: B,
          modelValue: J
        } = e;
        f(M, j, B, J);
      });
    }, h = (j) => {
      a.value = !0, C(e.onFocus, j), g("onFocus");
    }, w = (j) => {
      a.value = !1, C(e.onBlur, j), g("onBlur");
    }, O = (j) => {
      var M = j.target, {
        value: B
      } = M;
      return e.type === "number" && (B = $(B)), D(U(B));
    }, P = () => {
      t.value = !0;
    }, S = (j) => {
      t.value && (t.value = !1, j.target.dispatchEvent(new Event("input")));
    }, E = (j) => {
      if (!t.value) {
        var M = O(j);
        C(e["onUpdate:modelValue"], M), C(e.onInput, M, j), g("onInput");
      }
    }, I = (j) => {
      var M = O(j);
      C(e.onChange, M, j), g("onChange");
    }, N = () => {
      var {
        disabled: j,
        readonly: M,
        clearable: B,
        onClear: J
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || j || M || !B || (C(e["onUpdate:modelValue"], ""), C(J, ""), g("onClear"));
    }, b = (j) => {
      var {
        disabled: M,
        onClick: B
      } = e;
      d != null && d.disabled.value || M || (C(B, j), g("onClick"));
    }, $ = (j) => {
      var M = j.indexOf("-"), B = j.indexOf(".");
      return M > -1 && (j = M === 0 ? "-" + j.replace(/-/g, "") : j.replace(/-/g, "")), B > -1 && (j = j.slice(0, B + 1) + j.slice(B).replace(/\./g, "")), j.replace(/[^-0-9.]/g, "");
    }, U = (j) => e.modelModifiers.trim ? j.trim() : j, D = (j) => e.maxlength ? j.slice(0, z(e.maxlength)) : j, L = (j) => {
      var {
        disabled: M
      } = e;
      d != null && d.disabled.value || M || j.target === n.value || (_(), j.preventDefault());
    }, K = () => {
      C(e["onUpdate:modelValue"], ""), y();
    }, oe = () => m(e.rules, e.modelValue), _ = () => {
      var j;
      (j = n.value) == null || j.focus();
    }, H = () => {
      n.value.blur();
    }, F = {
      reset: K,
      validate: oe,
      resetValidation: y
    };
    return C(u, F), tr(() => {
      e.autofocus && _();
    }), {
      el: n,
      id: r,
      isFocus: a,
      isComposing: t,
      errorMessage: v,
      placeholderColor: s,
      normalizedType: o,
      cursor: i,
      maxlengthText: l,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      n: i0,
      classes: l0,
      isEmpty: Yr,
      handleFocus: h,
      handleBlur: w,
      handleInput: E,
      handleChange: I,
      handleClear: N,
      handleClick: b,
      handleCompositionStart: P,
      handleCompositionEnd: S,
      handleMousedown: L,
      validate: oe,
      resetValidation: y,
      reset: K,
      focus: _,
      blur: H
    };
  }
});
Ud.render = v0;
const _n = Ud;
ie(_n);
var _S = _n, f0 = {
  type: {
    type: String,
    default: "default"
  },
  href: String,
  target: String,
  rel: String,
  to: [String, Object],
  replace: Boolean,
  underline: {
    type: String,
    default: "always"
  },
  disabled: Boolean,
  textSize: [String, Number],
  textColor: String,
  onClick: R()
}, {
  n: c0,
  classes: m0
} = ae("link");
function h0(e, r) {
  return p(), Se(na(e.tag), ze(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick
  }), {
    default: me(() => [Y(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
var Hd = ne({
  name: "VarLink",
  props: f0,
  setup(e) {
    var r = A(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), n = A(() => {
      var {
        disabled: t,
        href: o,
        target: l,
        to: i,
        replace: s,
        rel: u
      } = e;
      return t ? {} : o ? {
        href: o,
        target: l,
        rel: u
      } : i ? {
        to: i,
        target: l,
        replace: s
      } : {};
    }), a = (t) => {
      e.disabled || C(e.onClick, t);
    };
    return {
      n: c0,
      classes: m0,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: Ce
    };
  }
});
Hd.render = h0;
const Xa = Hd;
ie(Xa);
var xS = Xa, p0 = {
  loading: Boolean,
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: Boolean,
  error: Boolean,
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: String,
  finishedText: String,
  errorText: String,
  onLoad: R(),
  "onUpdate:loading": R(),
  "onUpdate:error": R()
}, Yd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function g0() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(Yd);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Fd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function b0() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = or(Yd);
  return r || Pr("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function y0() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = ir(Fd);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function w0() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = or(Fd);
  return {
    index: n,
    tabItem: e,
    bindTabItem: r
  };
}
function ss(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function C0(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: S0,
  classes: k0
} = ae("list");
function $0(e, r) {
  var n = ue("var-loading"), a = Le("ripple");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [Y(e.$slots, "default"), e.loading ? Y(e.$slots, "loading", {
      key: 0
    }, () => [V(
      "div",
      {
        class: c(e.n("loading"))
      },
      [V(
        "div",
        {
          class: c(e.n("loading-text"))
        },
        le(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), x(n, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : ee("v-if", !0), e.finished ? Y(e.$slots, "finished", {
      key: 1
    }, () => [V(
      "div",
      {
        class: c(e.n("finished"))
      },
      le(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : ee("v-if", !0), e.error ? Y(e.$slots, "error", {
      key: 2
    }, () => [Te((p(), T(
      "div",
      {
        class: c(e.n("error")),
        onClick: r[0] || (r[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [$e(
        le(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : ee("v-if", !0), V(
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
var jd = ne({
  name: "VarList",
  directives: {
    Ripple: Xe
  },
  components: {
    VarLoading: fn
  },
  props: p0,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = w0(), a = k(null), t = k(null), o, l = () => {
      C(e["onUpdate:error"], !1), C(e["onUpdate:loading"], !0), C(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = Qe(o), {
        bottom: v
      } = Qe(t.value);
      return Math.floor(v) - He(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = C0(function* () {
        yield Ue(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return C(n, {}), r && de(() => r.current.value, u), de(() => [e.loading, e.error, e.finished], u), tr(() => {
      o = vn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), co(s), {
      pack: _e,
      listEl: a,
      detectorEl: t,
      dt: po,
      isNumber: mr,
      load: l,
      check: u,
      n: S0,
      classes: k0
    };
  }
});
jd.render = $0;
const Ka = jd;
ie(Ka);
var ek = Ka, T0 = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: Boolean,
  color: String,
  errorColor: String,
  height: [Number, String],
  top: [Number, String]
}, {
  classes: P0,
  n: us
} = ae("loading-bar");
const O0 = ne({
  name: "VarLoadingBar",
  props: T0,
  setup(e) {
    return () => x("div", {
      class: P0(us(), [e.error, us("--error")]),
      style: {
        zIndex: yr.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: Ce(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Ce(e.top)
      }
    }, null);
  }
});
var Wd, Gd, Io, qd, ds, Xd = {}, I0 = {
  value: 0,
  opacity: 0,
  error: !1
}, er = Ye(I0), M0 = (e) => {
  Object.assign(er, e);
}, B0 = (e) => {
  Object.assign(er, e), Xd = e;
}, E0 = () => {
  Object.keys(Xd).forEach((e) => {
    er[e] !== void 0 && (er[e] = void 0);
  });
}, Kd = () => {
  ds || (ds = !0, ta(O0, er));
}, nl = () => {
  Wd = window.setTimeout(() => {
    if (!(er.value >= 95)) {
      var e = Math.random();
      er.value < 70 && (e = Math.round(5 * Math.random())), er.value += e, nl();
    }
  }, 200);
}, al = () => {
  window.clearTimeout(Gd), window.clearTimeout(Wd), window.clearTimeout(Io), window.clearTimeout(qd);
}, V0 = () => {
  al(), er.error = !1, er.value = 0, Kd(), Io = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), nl();
}, Zd = () => {
  al(), er.value = 100, Io = window.setTimeout(() => {
    er.opacity = 0, Gd = window.setTimeout(() => {
      er.error = !1;
    }, 250);
  }, 300);
}, N0 = () => {
  al(), er.error = !0, er.value === 100 && (er.value = 0), Kd(), Io = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), nl(), qd = window.setTimeout(Zd, 300);
}, Jd = {
  start: V0,
  finish: Zd,
  error: N0,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: M0,
  setDefaultOptions: B0,
  resetDefaultOptions: E0
}, rk = Jd;
const $i = Jd;
var D0 = {
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "click"
  },
  reference: String,
  placement: {
    type: String,
    default: "cover-top-start"
  },
  strategy: {
    type: String,
    default: "absolute"
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
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  popoverClass: String,
  closeOnClickReference: Boolean,
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  onClickOutside: R(),
  "onUpdate:show": R()
}, {
  n: A0,
  classes: z0
} = ae("menu");
function L0(e, r) {
  return p(), T(
    "div",
    {
      ref: "host",
      class: c(e.classes(e.n(), e.n("$--box"))),
      onClick: r[3] || (r[3] = function() {
        return e.handleHostClick && e.handleHostClick(...arguments);
      }),
      onMouseenter: r[4] || (r[4] = function() {
        return e.handleHostMouseenter && e.handleHostMouseenter(...arguments);
      }),
      onMouseleave: r[5] || (r[5] = function() {
        return e.handleHostMouseleave && e.handleHostMouseleave(...arguments);
      })
    },
    [Y(e.$slots, "default"), (p(), Se(Zr, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [x(je, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: me(() => [Te(V(
        "div",
        {
          ref: "popover",
          style: W({
            zIndex: e.zIndex,
            width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
          }),
          class: c(e.classes(e.n("menu"), e.n("$--box"), e.popoverClass, [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
          onClick: r[0] || (r[0] = Tr(() => {
          }, ["stop"])),
          onMouseenter: r[1] || (r[1] = function() {
            return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
          }),
          onMouseleave: r[2] || (r[2] = function() {
            return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
          })
        },
        [Y(e.$slots, "menu")],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[Lr, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Qd = ne({
  name: "VarMenu",
  props: D0,
  setup(e) {
    var {
      disabled: r
    } = oa(), {
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      handleHostClick: i,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: y,
      // expose
      close: g,
      // expose
      resize: h
    } = kd(e);
    return {
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      teleportDisabled: r,
      formatElevation: pr,
      toSizeUnit: Ce,
      n: A0,
      classes: z0,
      handleHostClick: i,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      resize: h,
      open: y,
      close: g
    };
  }
});
Qd.render = L0;
const Bn = Qd;
ie(Bn);
var nk = Bn, _d = Symbol("SELECT_BIND_OPTION_KEY");
function R0() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = ir(_d);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function U0() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = or(_d);
  return n || Pr("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var H0 = {
  label: {},
  value: {}
}, {
  n: Y0,
  classes: F0
} = ae("option");
function j0(e, r) {
  var n = ue("var-checkbox"), a = ue("var-hover-overlay"), t = Le("ripple"), o = Le("hover");
  return Te((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: W({
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: r[2] || (r[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [V(
      "div",
      {
        class: c(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: W({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (p(), Se(n, {
      key: 0,
      ref: "checkbox",
      "checked-color": e.focusColor,
      modelValue: e.optionSelected,
      "onUpdate:modelValue": r[0] || (r[0] = (l) => e.optionSelected = l),
      onClick: r[1] || (r[1] = Tr(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["checked-color", "modelValue", "onChange"])) : ee("v-if", !0), V(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [Y(e.$slots, "default", {}, () => [$e(
        le(e.label),
        1
        /* TEXT */
      )])],
      2
      /* CLASS */
    ), x(a, {
      hovering: e.hovering
    }, null, 8, ["hovering"])],
    6
    /* CLASS, STYLE */
  )), [[t], [o, e.handleHovering, "desktop"]]);
}
var xd = ne({
  name: "VarOption",
  directives: {
    Ripple: Xe,
    Hover: Dr
  },
  components: {
    VarCheckbox: Wn,
    VarHoverOverlay: wr
  },
  props: H0,
  setup(e) {
    var r = k(!1), n = A(() => r.value), a = A(() => e.label), t = A(() => e.value), {
      select: o,
      bindSelect: l
    } = U0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, {
      hovering: v,
      handleHovering: f
    } = qr(), m = () => {
      i.value && (r.value = !r.value), u(h);
    }, y = () => u(h), g = (w) => {
      r.value = w;
    }, h = {
      label: a,
      value: t,
      selected: n,
      sync: g
    };
    return de([() => e.label, () => e.value], d), l(h), {
      n: Y0,
      classes: F0,
      optionSelected: r,
      multiple: i,
      focusColor: s,
      hovering: v,
      handleHovering: f,
      handleClick: m,
      handleSelect: y
    };
  }
});
xd.render = j0;
const Za = xd;
ie(Za);
var ak = Za, W0 = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  onClick: R(),
  "onUpdate:show": R()
};
function G0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Tt(e);
}
var {
  n: vs
} = ae("overlay");
const Ja = ne({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: W0,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Bt(() => e.show, 1), {
      disabled: o
    } = oa(), l = () => {
      C(e.onClick), C(e["onUpdate:show"], !1);
    };
    ho(() => e.show, () => e.lockScroll);
    var i = () => x("div", ze({
      class: vs(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [C(n.default)]), s = () => {
      var {
        show: u
      } = e;
      return x(je, {
        name: vs("--fade")
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
        return x(Zr, {
          to: u,
          disabled: o.value
        }, G0(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
ie(Ja);
var tk = Ja, q0 = {
  current: [Number, String],
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
  disabled: Boolean,
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: Boolean,
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: Function,
  onChange: R(),
  "onUpdate:current": R(),
  "onUpdate:size": R()
}, {
  n: X0,
  classes: K0
} = ae("pagination"), Z0 = ["item-mode", "onClick"];
function J0(e, r) {
  var n = ue("var-icon"), a = ue("var-input"), t = ue("var-cell"), o = ue("var-menu"), l = Le("ripple");
  return p(), T(
    "ul",
    {
      class: c(e.n())
    },
    [Te((p(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[0] || (r[0] = (i) => e.clickItem("prev"))
      },
      [Y(e.$slots, "prev", {}, () => [x(n, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), T(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [x(a, {
        "var-pagination-cover": "",
        hint: !1,
        disabled: e.disabled,
        modelValue: e.simpleCurrentValue,
        "onUpdate:modelValue": r[1] || (r[1] = (i) => e.simpleCurrentValue = i),
        onBlur: r[2] || (r[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
        onKeydown: r[3] || (r[3] = ll((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
      }, null, 8, ["disabled", "modelValue"]), V("span", null, [$e(
        " / " + le(e.pageCount) + " ",
        1
        /* TEXT */
      ), V(
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
    )) : (p(!0), T(
      Ve,
      {
        key: 1
      },
      Ge(e.pageList, (i, s) => Te((p(), T("li", {
        key: s,
        "item-mode": e.getMode(i, s),
        class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
        onClick: (u) => e.clickItem(i, s)
      }, [$e(
        le(i),
        1
        /* TEXT */
      )], 10, Z0)), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Te((p(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[4] || (r[4] = (i) => e.clickItem("next"))
      },
      [Y(e.$slots, "next", {}, () => [x(n, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), T(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [x(o, {
        placement: "cover-top",
        disabled: e.disabled,
        show: e.menuVisible,
        "onUpdate:show": r[6] || (r[6] = (i) => e.menuVisible = i)
      }, {
        menu: me(() => [(p(!0), T(
          Ve,
          null,
          Ge(e.sizeOption, (i, s) => Te((p(), Se(t, {
            class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
            key: s,
            onClick: (u) => e.clickSize(i)
          }, {
            default: me(() => [$e(
              le(i) + le(e.pack.paginationItem) + " / " + le(e.pack.paginationPage),
              1
              /* TEXT */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["class", "onClick"])), [[l]])),
          128
          /* KEYED_FRAGMENT */
        ))]),
        default: me(() => [V(
          "div",
          {
            class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
            onClick: r[5] || (r[5] = Tr(function() {
              return e.showMenu && e.showMenu(...arguments);
            }, ["stop"]))
          },
          [V(
            "span",
            null,
            le(e.size) + le(e.pack.paginationItem) + " / " + le(e.pack.paginationPage),
            1
            /* TEXT */
          ), x(n, {
            class: c(e.n("size--open-icon")),
            "var-pagination-cover": "",
            name: "menu-down"
          }, null, 8, ["class"])],
          2
          /* CLASS */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["disabled", "show"])],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.showQuickJumper && !e.simple ? (p(), T(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
      },
      [$e(
        le(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), x(a, {
        modelValue: e.quickJumperValue,
        "onUpdate:modelValue": r[7] || (r[7] = (i) => e.quickJumperValue = i),
        disabled: e.disabled,
        "var-pagination-cover": "",
        onBlur: r[8] || (r[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
        onKeydown: r[9] || (r[9] = ll((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
      }, null, 8, ["modelValue", "disabled"])],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.totalText ? (p(), T(
      "li",
      {
        key: 4,
        class: c(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
      },
      le(e.totalText),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var ev = ne({
  name: "VarPagination",
  components: {
    VarMenu: Bn,
    VarIcon: Ae,
    VarCell: jn,
    VarInput: _n
  },
  directives: {
    Ripple: Xe
  },
  props: q0,
  setup(e) {
    var r = k(!1), n = k(""), a = k("1"), t = k(!1), o = k(!1), l = k(z(e.current) || 1), i = k(z(e.size) || 10), s = k([]), u = A(() => Math.ceil(e.maxPagerCount / 2)), d = A(() => Math.ceil(z(e.total) / z(i.value))), v = A(() => {
      var S = i.value * (l.value - 1) + 1, E = Math.min(i.value * l.value, z(e.total));
      return [S, E];
    }), f = A(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), m = (S, E) => mr(S) ? !1 : E === 1 ? t.value : o.value, y = (S, E) => mr(S) ? "basic" : E === 1 ? "head" : "tail", g = (S, E) => {
      if (!(S === l.value || e.disabled)) {
        if (S === "...") {
          l.value = E === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
          return;
        }
        if (S === "prev") {
          l.value = O(l.value - 1);
          return;
        }
        if (S === "next") {
          l.value = O(l.value + 1);
          return;
        }
        mr(S) && (l.value = S);
      }
    }, h = () => {
      e.disabled || (r.value = !0);
    }, w = (S) => {
      i.value = S, r.value = !1;
      var E = O(l.value);
      a.value = String(E), l.value = E;
    }, O = (S) => S > d.value ? d.value : S < 1 ? 1 : S, P = (S, E, I) => {
      I.target.blur();
      var N = O(z(E));
      a.value = String(N), l.value = N, S === "quick" && (n.value = "");
    };
    return de([() => e.current, () => e.size], (S) => {
      var [E, I] = S;
      l.value = z(E) || 1, i.value = z(I || 10);
    }), de([l, i, d], (S, E) => {
      var [I, N, b] = S, [$, U] = E, D = [], {
        maxPagerCount: L,
        total: K,
        onChange: oe
      } = e, _ = Math.ceil(z(K) / z(U)), H = b - (L - u.value) - 1;
      if (a.value = "" + I, b - 2 > L) {
        if ($ === void 0 || b !== _)
          for (var F = 2; F < L + 2; F++)
            D.push(F);
        if (I <= L && I < H) {
          D = [];
          for (var j = 1; j < L + 1; j++)
            D.push(j + 1);
          t.value = !0, o.value = !1;
        }
        if (I > L && I < H) {
          D = [];
          for (var M = 1; M < L + 1; M++)
            D.push(I + M - u.value);
          t.value = I === 2 && L === 1, o.value = !1;
        }
        if (I >= H) {
          D = [];
          for (var B = 1; B < L + 1; B++)
            D.push(b - (L - B) - 1);
          t.value = !1, o.value = !0;
        }
        D = [1, "...", ...D, "...", b];
      } else
        for (var J = 1; J <= b; J++)
          D.push(J);
      s.value = D, $ != null && b > 0 && C(oe, I, N), C(e["onUpdate:current"], I), C(e["onUpdate:size"], N);
    }, {
      immediate: !0
    }), {
      n: X0,
      classes: K0,
      pack: _e,
      current: l,
      menuVisible: r,
      size: i,
      pageCount: d,
      pageList: s,
      quickJumperValue: n,
      simpleCurrentValue: a,
      totalText: f,
      getMode: y,
      isHideEllipsis: m,
      clickItem: g,
      showMenu: h,
      clickSize: w,
      setPage: P,
      toNumber: z,
      formatElevation: pr
    };
  }
});
ev.render = J0;
const Qa = ev;
ie(Qa);
var ok = Qa, Q0 = {
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  ripple: Boolean,
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  onClick: R()
}, {
  n: _0,
  classes: x0
} = ae("paper");
function ey(e, r) {
  var n = Le("ripple");
  return Te((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: W({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[n, {
    disabled: !e.ripple
  }]]);
}
var rv = ne({
  name: "VarPaper",
  directives: {
    Ripple: Xe
  },
  props: Q0,
  setup(e) {
    var r = (n) => {
      C(e.onClick, n);
    };
    return {
      n: _0,
      classes: x0,
      formatElevation: pr,
      toSizeUnit: Ce,
      handleClick: r
    };
  }
});
rv.render = ey;
const _a = rv;
ie(_a);
var ik = _a;
function Ti() {
  return Ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ti.apply(this, arguments);
}
var ry = Ti({
  columns: {
    type: Array,
    default: () => []
  },
  title: String,
  textKey: {
    type: String,
    default: "text"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: Boolean,
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
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  // dynamic internal
  dynamic: Boolean,
  textFormatter: {
    type: Function,
    default: (e) => e
  },
  onChange: R(),
  onConfirm: R(),
  onCancel: R()
}, xe(Mt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: ny,
  classes: ay
} = ae("picker"), fs = 300, ty = 15, cs = 200, oy = 1e3, ms = 0, iy = ["onTouchstartPassive", "onTouchmove", "onTouchend"], ly = ["onTransitionend"], sy = ["onClick"];
function uy(e, r) {
  var n = ue("var-button");
  return p(), Se(
    na(e.dynamic ? e.n("$-popup") : e.Transition),
    ze(e.dynamic ? {
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
      default: me(() => [V(
        "div",
        ze({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [Y(e.$slots, "cancel", {}, () => [x(n, {
            class: c(e.n("cancel-button")),
            "var-picker-cover": "",
            text: "",
            "text-color": e.cancelButtonTextColor,
            onClick: e.cancel
          }, {
            default: me(() => [$e(
              le(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])]), Y(e.$slots, "title", {}, () => [V(
            "div",
            {
              class: c(e.n("title"))
            },
            le(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), Y(e.$slots, "confirm", {}, () => [x(n, {
            class: c(e.n("confirm-button")),
            text: "",
            "var-picker-cover": "",
            "text-color": e.confirmButtonTextColor,
            onClick: e.confirm
          }, {
            default: me(() => [$e(
              le(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])])],
          2
          /* CLASS */
        )) : ee("v-if", !0), V(
          "div",
          {
            class: c(e.n("columns")),
            style: W({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), T(
            Ve,
            null,
            Ge(e.scrollColumns, (a) => (p(), T("div", {
              class: c(e.n("column")),
              key: a.id,
              onTouchstartPassive: (t) => e.handleTouchstart(t, a),
              onTouchmove: Tr((t) => e.handleTouchmove(t, a), ["prevent"]),
              onTouchend: (t) => e.handleTouchend(a)
            }, [V("div", {
              class: c(e.n("scroller")),
              ref_for: !0,
              ref: (t) => e.setScrollEl(t, a),
              style: W({
                transform: "translateY(" + a.translate + "px)",
                transitionDuration: a.duration + "ms",
                transitionProperty: a.duration ? "transform" : "none"
              }),
              onTransitionend: (t) => e.handleTransitionend(a)
            }, [(p(!0), T(
              Ve,
              null,
              Ge(a.column.texts, (t, o) => (p(), T("div", {
                class: c(e.n("option")),
                style: W({
                  height: e.optionHeight + "px"
                }),
                key: t,
                onClick: (l) => e.handleClick(a, o)
              }, [V(
                "div",
                {
                  class: c(e.n("text"))
                },
                le(e.textFormatter(t, a.columnIndex)),
                3
                /* TEXT, CLASS */
              )], 14, sy))),
              128
              /* KEYED_FRAGMENT */
            ))], 46, ly)], 42, iy))),
            128
            /* KEYED_FRAGMENT */
          )), V(
            "div",
            {
              class: c(e.n("picked")),
              style: W({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), V(
            "div",
            {
              class: c(e.n("mask")),
              style: W({
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
var nv = ne({
  name: "VarPicker",
  components: {
    VarButton: vr,
    VarPopup: Rr
  },
  inheritAttrs: !1,
  props: ry,
  setup(e) {
    var r = k([]), n = A(() => He(e.optionHeight)), a = A(() => He(e.optionCount)), t = A(() => a.value * n.value / 2 - n.value / 2), o = A(() => a.value * n.value), l = [], {
      prevY: i,
      moveY: s,
      dragging: u,
      startTouch: d,
      moveTouch: v,
      endTouch: f
    } = mo(), m = (M, B) => {
      B.scrollEl = M;
    }, y = (M) => {
      C(e["onUpdate:show"], M);
    }, g = (M) => {
      var B = t.value - M.column.texts.length * n.value, J = n.value + t.value;
      M.translate = un(M.translate, B, J);
    }, h = (M, B) => {
      var J = Math.round((t.value - B) / n.value);
      return of(J, M.column.texts);
    }, w = (M) => (M.translate = t.value - M.index * n.value, M.translate), O = () => {
      var M = r.value.map((J) => J.column.texts[J.index]), B = r.value.map((J) => J.index);
      return {
        texts: M,
        indexes: B
      };
    }, P = function(M, B) {
      B === void 0 && (B = 0), w(M), M.duration = B;
    }, S = (M, B, J) => {
      M.translate += Math.abs(B / J) / 3e-3 * (B < 0 ? -1 : 1);
    }, E = (M, B) => {
      u.value || (M.index = B, M.scrolling = !0, P(M, cs));
    }, I = (M, B) => {
      B.touching = !0, B.translate = No(B.scrollEl), d(M);
    }, N = (M, B) => {
      if (B.touching) {
        v(M), B.scrolling = !1, B.duration = 0, B.prevY = i.value, B.translate += s.value, g(B);
        var J = performance.now();
        J - B.momentumTime > fs && (B.momentumTime = J, B.momentumPrevY = B.translate);
      }
    }, b = (M) => {
      f(), M.touching = !1, M.prevY = 0;
      var B = M.translate - M.momentumPrevY, J = performance.now() - M.momentumTime, q = Math.abs(B) >= ty && J <= fs;
      q && S(M, B, J), M.index = h(M, M.translate);
      var X = M.translate, Z = w(M);
      M.scrolling = Z !== X, P(M, q ? oy : cs), M.scrolling || _(M);
    }, $ = (M) => {
      M.scrolling = !1, _(M);
    }, U = (M) => M.map((B, J) => {
      var q, X = Be(B) ? {
        texts: B
      } : B, Z = {
        id: ms++,
        prevY: 0,
        momentumPrevY: 0,
        touching: !1,
        translate: t.value,
        index: (q = X.initialIndex) != null ? q : 0,
        columnIndex: J,
        duration: 0,
        momentumTime: 0,
        column: X,
        scrollEl: null,
        scrolling: !1
      };
      return P(Z), Z;
    }), D = (M) => {
      var B = [];
      return L(B, M, 0, !0), B;
    }, L = function(M, B, J, q) {
      if (q === void 0 && (q = !1), Be(B) && B.length) {
        var X, Z = q && (X = e.cascadeInitialIndexes[M.length]) != null ? X : 0, re = {
          id: ms++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: t.value,
          index: Z,
          columnIndex: J,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: B.map((ce) => ce[e.textKey])
          },
          columns: B,
          scrollEl: null,
          scrolling: !1
        };
        M.push(re), P(re), L(M, re.columns[re.index].children, J + 1, q);
      }
    }, K = (M) => {
      r.value.splice(r.value.indexOf(M) + 1), L(r.value, M.columns[M.index].children, M.columnIndex + 1);
    }, oe = () => {
      var {
        indexes: M
      } = O();
      return M.every((B, J) => B === l[J]);
    }, _ = (M) => {
      var {
        cascade: B,
        onChange: J
      } = e;
      if (!oe()) {
        B && K(M);
        var q = r.value.some((re) => re.scrolling);
        if (!q) {
          var {
            texts: X,
            indexes: Z
          } = O();
          l = [...Z], C(J, X, Z);
        }
      }
    }, H = () => {
      if (e.cascade) {
        var M = r.value.find((B) => B.scrolling);
        M && (M.index = h(M, No(M.scrollEl)), M.scrolling = !1, P(M), K(M));
      } else
        r.value.forEach((B) => {
          B.index = h(B, No(B.scrollEl)), P(B);
        });
    }, F = () => {
      H();
      var {
        texts: M,
        indexes: B
      } = O();
      l = [...B], C(e.onConfirm, M, B);
    }, j = () => {
      H();
      var {
        texts: M,
        indexes: B
      } = O();
      l = [...B], C(e.onCancel, M, B);
    };
    return de(() => e.columns, (M) => {
      r.value = e.cascade ? D(sl(M)) : U(sl(M));
      var {
        indexes: B
      } = O();
      l = [...B];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: ny,
      classes: ay,
      pack: _e,
      optionHeight: n,
      optionCount: a,
      scrollColumns: r,
      columnHeight: o,
      center: t,
      Transition: je,
      setScrollEl: m,
      handlePopupUpdateShow: y,
      handleTouchstart: I,
      handleTouchmove: N,
      handleTouchend: b,
      handleTransitionend: $,
      confirm: F,
      cancel: j,
      dt: po,
      handleClick: E
    };
  }
});
nv.render = uy;
const At = nv;
var fr;
function En(e) {
  return new Promise((r) => {
    En.close();
    var n = Be(e) ? {
      columns: e
    } : e, a = Ye(n);
    a.dynamic = !0, a.teleport = "body", fr = a;
    var {
      unmountInstance: t
    } = ta(At, a, {
      onConfirm: (o, l) => {
        C(a.onConfirm, o, l), r({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, fr === a && (fr = null);
      },
      onCancel: (o, l) => {
        C(a.onCancel, o, l), r({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, fr === a && (fr = null);
      },
      onClose: () => {
        C(a.onClose), r({
          state: "close"
        }), fr === a && (fr = null);
      },
      onClosed: () => {
        C(a.onClosed), t(), fr === a && (fr = null);
      },
      onRouteChange: () => {
        t(), fr === a && (fr = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
En.close = function() {
  if (fr != null) {
    var e = fr;
    fr = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
En.Component = At;
ie(At);
ie(At, En);
var lk = At, dy = {
  mode: {
    type: String,
    default: "linear"
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: String,
  trackColor: String,
  ripple: Boolean,
  value: {
    type: [Number, String],
    default: 0
  },
  label: Boolean,
  labelClass: String,
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
  },
  indeterminate: Boolean,
  type: {
    type: String,
    default: "primary"
  }
}, {
  n: vy,
  classes: fy
} = ae("progress"), cy = ["viewBox"], my = ["r", "stroke-width", "stroke-dasharray"], hy = ["r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function py(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [V(
        "div",
        {
          class: c(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
          style: W({
            height: e.toSizeUnit(e.lineWidth),
            background: e.trackColor
          })
        },
        [e.indeterminate ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
          },
          [V(
            "div",
            {
              class: c(e.classes(e.n("linear--" + e.type))),
              style: W({
                background: e.color
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), V(
            "div",
            {
              class: c(e.classes(e.n("linear--" + e.type))),
              style: W({
                background: e.color
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          2
          /* CLASS */
        )) : (p(), T(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("linear-certain"), e.n("linear--" + e.type), [e.ripple, e.n("linear-ripple")])),
            style: W({
              background: e.color,
              width: e.linearProps.width
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ))],
        6
        /* CLASS, STYLE */
      ), e.label ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [$e(
          le(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.mode === "circle" ? (p(), T(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: W({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), T("svg", {
        class: c(e.n("circle-svg")),
        style: W({
          transform: "rotate(" + (e.rotate - 90) + "deg)"
        }),
        viewBox: e.circleProps.viewBox
      }, [e.track ? (p(), T("circle", {
        key: 0,
        class: c(e.n("circle-background")),
        cx: "50%",
        cy: "50%",
        r: e.RADIUS,
        fill: "transparent",
        "stroke-width": e.circleProps.strokeWidth,
        "stroke-dasharray": e.CIRCUMFERENCE,
        style: W({
          stroke: e.trackColor
        })
      }, null, 14, my)) : ee("v-if", !0), V("circle", {
        class: c(e.classes(e.n("circle-certain"), e.n("circle--" + e.type), [e.indeterminate, e.n("circle-overlay")])),
        cx: "50%",
        cy: "50%",
        r: e.RADIUS,
        fill: "transparent",
        "stroke-width": e.circleProps.strokeWidth,
        "stroke-dasharray": e.CIRCUMFERENCE,
        "stroke-dashoffset": e.circleProps.strokeOffset,
        style: W({
          stroke: e.color
        })
      }, null, 14, hy)], 14, cy)), e.label ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [$e(
          le(e.circleProps.roundValue),
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
var av = ne({
  name: "VarProgress",
  props: dy,
  setup(e) {
    var r = 100, n = 20, a = 2 * Math.PI * n, t = A(() => {
      var l = z(e.value), i = l > r ? r : l, s = l > r ? r : Math.round(l);
      return {
        width: i + "%",
        roundValue: s + "%"
      };
    }), o = A(() => {
      var {
        size: l,
        lineWidth: i,
        value: s
      } = e, u = n / (1 - He(i) / He(l)) * 2, d = "0 0 " + u + " " + u, v = z(s) > r ? r : Math.round(z(s)), f = "" + (r - v) / r * a, m = He(i) / He(l) * u;
      return {
        strokeWidth: m,
        viewBox: d,
        strokeOffset: f,
        roundValue: v + "%"
      };
    });
    return {
      n: vy,
      classes: fy,
      toSizeUnit: Ce,
      linearProps: t,
      CIRCUMFERENCE: a,
      RADIUS: n,
      circleProps: o
    };
  }
});
av.render = py;
const xa = av;
ie(xa);
var sk = xa, gy = {
  modelValue: Boolean,
  disabled: Boolean,
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: String,
  successBgColor: String,
  color: String,
  successColor: String,
  target: [String, Object],
  onRefresh: R(),
  "onUpdate:modelValue": R()
};
function hs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function ps(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        hs(o, a, t, l, i, "next", s);
      }
      function i(s) {
        hs(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: gs,
  classes: by
} = ae("pull-refresh"), bs = 150;
function yy(e, r) {
  var n = ue("var-icon");
  return p(), T(
    "div",
    {
      ref: "freshNode",
      class: c(e.n()),
      onTouchstart: r[0] || (r[0] = function() {
        return e.touchStart && e.touchStart(...arguments);
      }),
      onTouchend: r[1] || (r[1] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      }),
      onTouchcancel: r[2] || (r[2] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      })
    },
    [V(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: W(e.controlStyle)
      },
      [x(n, {
        name: e.iconName,
        transition: e.ICON_TRANSITION,
        class: c(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
        "var-pull-refresh-cover": ""
      }, null, 8, ["name", "transition", "class"])],
      6
      /* CLASS, STYLE */
    ), Y(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var tv = ne({
  name: "VarPullRefresh",
  components: {
    VarIcon: Ae
  },
  props: gy,
  setup(e) {
    var r = k(0), n = k(null), a = k(null), t = k(0), o = k("-125%"), l = k("arrow-down"), i = k("default"), s = k(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var b = ps(function* ($) {
        if (l.value !== $)
          return l.value = $, new Promise((U) => {
            window.setTimeout(U, bs);
          });
      });
      return function(U) {
        return b.apply(this, arguments);
      };
    }(), y = A(() => i.value !== "loading" && i.value !== "success" && !e.disabled), g = A(() => ({
      transform: "translate3d(0px, " + (Je(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), h = A(() => Math.abs(2 * r.value)), w = A(() => i.value === "success"), O = (b) => {
      var $ = "classList" in u ? u : document.body;
      $.classList[b](gs() + "--lock");
    }, P = (b) => {
      if (r.value === 0) {
        var {
          width: $
        } = Qe(a.value);
        r.value = -($ + $ * 0.25);
      }
      v = b.touches[0].clientY, f = 0, d = vn(b.target);
    }, S = (b) => {
      if (!(!y.value || !d) && !(d !== u && ba(d) > 0)) {
        var $ = ba(u);
        if (!($ > 0)) {
          var U = $ === 0, D = b.touches[0];
          f = D.clientY - v, U && f >= 0 && b.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = b.touches[0].clientY), U && mr(o.value) && o.value > r.value && O("add");
          var L = (b.touches[0].clientY - t.value) / 2 + r.value;
          o.value = L >= h.value ? h.value : L, m(o.value >= h.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, E = /* @__PURE__ */ function() {
      var b = ps(function* () {
        y.value && (s.value = !0, z(o.value) >= h.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = h.value * 0.3, C(e["onUpdate:modelValue"], !0), Ue(() => {
          C(e.onRefresh);
        }), O("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, z(e.animationDuration))), d = null);
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), I = () => {
      u = e.target ? Ys(e.target, "PullRefresh") : vn(n.value);
    }, N = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, z(e.animationDuration));
    };
    return de(() => e.modelValue, (b) => {
      b === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, N();
      }, z(e.successDuration)));
    }), tr(I), dn(n, "touchmove", S), {
      n: gs,
      classes: by,
      ICON_TRANSITION: bs,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: P,
      touchMove: S,
      touchEnd: E,
      iconName: l,
      controlStyle: g,
      isSuccess: w
    };
  }
});
tv.render = yy;
const et = tv;
ie(et);
var uk = et, wy = {
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
  disabled: Boolean,
  readonly: Boolean,
  checkedColor: String,
  uncheckedColor: String,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onClick: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, ov = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function Cy() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(ov);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function Sy() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = or(ov);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: ky,
  classes: $y
} = ae("radio");
function Ty(e, r) {
  var n = ue("var-icon"), a = ue("var-hover-overlay"), t = ue("var-form-details"), o = Le("ripple"), l = Le("hover");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [V(
      "div",
      ze({
        class: e.n(),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Te((p(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: W({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [x(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-marked",
          size: e.iconSize
        }, null, 8, ["class", "size"])]) : Y(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [x(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-blank",
          size: e.iconSize
        }, null, 8, ["class", "size"])]), x(a, {
          hovering: !e.disabled && !e.formDisabled && e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[o, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }], [l, e.handleHovering, "desktop"]]), V(
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
    ), x(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var iv = ne({
  name: "VarRadio",
  directives: {
    Ripple: Xe,
    Hover: Dr
  },
  components: {
    VarIcon: Ae,
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  inheritAttrs: !1,
  props: wy,
  setup(e) {
    var r = ga(e, "modelValue"), n = A(() => r.value === e.checkedValue), a = k(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = Sy(), {
      hovering: l,
      handleHovering: i
    } = qr(), {
      form: s,
      bindForm: u
    } = Ir(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Or(), y = (I) => {
      Ue(() => {
        var {
          validateTrigger: N,
          rules: b,
          modelValue: $
        } = e;
        v(N, I, b, $);
      });
    }, g = (I) => {
      var {
        checkedValue: N,
        onChange: b
      } = e;
      t && r.value === N || (r.value = I, C(b, r.value), t == null || t.onToggle(N), y("onChange"));
    }, h = (I) => {
      var {
        disabled: N,
        readonly: b,
        uncheckedValue: $,
        checkedValue: U,
        onClick: D
      } = e;
      s != null && s.disabled.value || N || (C(D, I), !(s != null && s.readonly.value || b) && (a.value = !0, g(n.value ? $ : U)));
    }, w = (I) => {
      var {
        checkedValue: N,
        uncheckedValue: b
      } = e;
      r.value = I === N ? N : b;
    }, O = () => {
      r.value = e.uncheckedValue, m();
    }, P = () => f(e.rules, e.modelValue), S = (I) => {
      var {
        uncheckedValue: N,
        checkedValue: b
      } = e, $ = ![N, b].includes(I);
      $ && (I = n.value ? N : b), g(I);
    }, E = {
      sync: w,
      validate: P,
      resetValidation: m,
      reset: O
    };
    return C(o, E), C(u, E), {
      withAnimation: a,
      checked: n,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: ky,
      classes: $y,
      handleClick: h,
      toggle: S,
      reset: O,
      validate: P,
      resetValidation: m
    };
  }
});
iv.render = Ty;
const rt = iv;
ie(rt);
var dk = rt, Py = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: Oy,
  classes: Iy
} = ae("radio-group");
function My(e, r) {
  var n = ue("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [V(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), x(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var lv = ne({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: nr
  },
  props: Py,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = Cy(), {
      bindForm: t
    } = Ir(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Or(), u = A(() => o.value), d = (h) => {
      Ue(() => {
        var {
          validateTrigger: w,
          rules: O,
          modelValue: P
        } = e;
        l(w, h, O, P);
      });
    }, v = () => n.forEach((h) => {
      var {
        sync: w
      } = h;
      return w(e.modelValue);
    }), f = (h) => {
      C(e["onUpdate:modelValue"], h), C(e.onChange, h), d("onChange");
    }, m = () => i(e.rules, e.modelValue), y = () => {
      C(e["onUpdate:modelValue"], void 0), s();
    };
    de(() => e.modelValue, v), de(() => r.value, v);
    var g = {
      onToggle: f,
      validate: m,
      reset: y,
      resetValidation: s,
      errorMessage: u
    };
    return C(t, g), a(g), {
      errorMessage: o,
      n: Oy,
      classes: Iy,
      reset: y,
      validate: m,
      resetValidation: s
    };
  }
});
lv.render = My;
const nt = lv;
ie(nt);
var vk = nt, By = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: String,
  icon: {
    type: String,
    default: "star"
  },
  emptyColor: String,
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  size: [String, Number],
  gap: [String, Number],
  namespace: String,
  half: Boolean,
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  disabled: Boolean,
  disabledColor: String,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  clearable: Boolean,
  rules: Array,
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: la
} = ae("rate"), Ey = ["onClick"];
function Vy(e, r) {
  var n = ue("var-icon"), a = ue("var-hover-overlay"), t = ue("var-form-details"), o = Le("ripple"), l = Le("hover");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [V(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), T(
        Ve,
        null,
        Ge(e.toNumber(e.count), (i) => Te((p(), T("div", {
          key: i,
          style: W(e.getStyle(i)),
          class: c(e.getClass(i)),
          onClick: (s) => e.handleClick(i, s)
        }, [x(n, {
          class: c(e.n("content-icon")),
          "var-rate-cover": "",
          transition: 0,
          namespace: e.namespace,
          name: e.getCurrentState(i).name,
          style: W({
            fontSize: e.toSizeUnit(e.size)
          })
        }, null, 8, ["class", "namespace", "name", "style"]), x(a, {
          hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])], 14, Ey)), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), x(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var sv = ne({
  name: "VarRate",
  components: {
    VarIcon: Ae,
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: Xe,
    Hover: Dr
  },
  props: By,
  setup(e) {
    var {
      form: r,
      bindForm: n
    } = Ir(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Or(), {
      hovering: i
    } = qr(), s = k(-1), u = Number(e.modelValue), d = (S) => {
      var {
        count: E,
        gap: I
      } = e;
      return {
        color: f(S).color,
        marginRight: S !== z(E) ? Ce(I) : 0
      };
    }, v = (S) => {
      var {
        name: E,
        color: I
      } = f(S);
      return {
        [la("content")]: !0,
        [la("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [la("--error")]: a.value,
        [la("--primary")]: E !== e.emptyIcon && !I
      };
    }, f = (S) => {
      var {
        modelValue: E,
        disabled: I,
        disabledColor: N,
        color: b,
        half: $,
        emptyColor: U,
        icon: D,
        halfIcon: L,
        emptyIcon: K
      } = e, oe = b;
      return (I || r != null && r.disabled.value) && (oe = N), S <= z(E) ? {
        color: oe,
        name: D
      } : $ && S <= z(E) + 0.5 ? {
        color: oe,
        name: L
      } : {
        color: I || r != null && r.disabled.value ? N : U,
        name: K
      };
    }, m = (S, E) => {
      var {
        half: I,
        clearable: N
      } = e, {
        offsetWidth: b
      } = E.target;
      I && E.offsetX <= Math.floor(b / 2) && (S -= 0.5), u === S && N && (S = 0), u = S, C(e["onUpdate:modelValue"], S);
    }, y = () => o(e.rules, z(e.modelValue)), g = () => Ue(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = (S, E) => {
      var {
        readonly: I,
        disabled: N,
        onChange: b
      } = e;
      I || N || r != null && r.disabled.value || r != null && r.readonly.value || (m(S, E), C(b, S), g());
    }, w = (S) => (E) => {
      s.value = S, i.value = E;
    }, O = () => {
      C(e["onUpdate:modelValue"], 0), l();
    }, P = {
      reset: O,
      validate: y,
      resetValidation: l
    };
    return C(n, P), {
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      getStyle: d,
      getClass: v,
      getCurrentState: f,
      handleClick: h,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: w,
      reset: O,
      validate: y,
      resetValidation: l,
      toSizeUnit: Ce,
      toNumber: z,
      n: la
    };
  }
});
sv.render = Vy;
const at = sv;
ie(at);
var fk = at, Ny = (e) => (pn(""), e = e(), gn(), e), Dy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Ay = /* @__PURE__ */ Ny(() => /* @__PURE__ */ V(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), zy = [Ay];
function Ly(e, r) {
  return p(), T("svg", Dy, zy);
}
var uv = ne({});
uv.render = Ly;
const Ry = uv;
var Uy = (e) => (pn(""), e = e(), gn(), e), Hy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, Yy = /* @__PURE__ */ Uy(() => /* @__PURE__ */ V(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), Fy = [Yy];
function jy(e, r) {
  return p(), T("svg", Hy, Fy);
}
var dv = ne({});
dv.render = jy;
const Wy = dv;
var Gy = (e) => (pn(""), e = e(), gn(), e), qy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, Xy = /* @__PURE__ */ Gy(() => /* @__PURE__ */ V(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), Ky = [Xy];
function Zy(e, r) {
  return p(), T("svg", qy, Ky);
}
var vv = ne({});
vv.render = Zy;
const Jy = vv;
var {
  n: Qy,
  classes: _y
} = ae("result");
function xy(e, r) {
  return p(), T(
    Ve,
    null,
    [V(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), V(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-tip"))),
        style: W({
          animationDuration: e.animation ? "760ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), V(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-long"))),
        style: W({
          animationDuration: e.animation ? "770ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), V(
      "span",
      {
        ref: "circle",
        class: c(e.n("success-circle")),
        style: W({
          left: "-" + e.borderSize,
          top: "-" + e.borderSize,
          borderWidth: e.borderSize
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), V(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), V(
      "span",
      {
        class: c(e.n("success-cover-right")),
        style: W({
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
var fv = ne({
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
      n: Qy,
      classes: _y,
      toNumber: z
    };
  }
});
fv.render = xy;
const e1 = fv;
var r1 = (e) => (pn(""), e = e(), gn(), e), n1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, a1 = /* @__PURE__ */ r1(() => /* @__PURE__ */ V(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), t1 = [a1];
function o1(e, r) {
  return p(), T("svg", n1, t1);
}
var cv = ne({});
cv.render = o1;
const i1 = cv;
var l1 = (e) => (pn(""), e = e(), gn(), e), s1 = {
  viewBox: "-4 -4 32 32"
}, u1 = /* @__PURE__ */ l1(() => /* @__PURE__ */ V(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), d1 = [u1];
function v1(e, r) {
  return p(), T("svg", s1, d1);
}
var mv = ne({});
mv.render = v1;
const f1 = mv;
var c1 = {
  imageSize: [String, Number],
  type: {
    type: String,
    default: "success"
  },
  title: String,
  description: String,
  animation: {
    type: Boolean,
    default: !0
  }
}, {
  n: m1,
  classes: h1
} = ae("result");
function p1(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "image", {}, () => [e.type ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [V(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: W({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(p(), Se(na(e.type), {
          "border-size": e.borderSize,
          animation: e.animation
        }, null, 8, ["border-size", "animation"]))],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0)]), Y(e.$slots, "title", {}, () => [e.title ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      le(e.title),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      le(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), e.$slots.footer ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [Y(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var hv = ne({
  name: "VarResult",
  components: {
    Info: Ry,
    Success: e1,
    Warning: Jy,
    Error: Wy,
    Question: i1,
    Empty: f1
  },
  props: c1,
  setup(e) {
    var r = A(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? Ce(a) : "var(--result-image-size)") + " * 0.9)";
    }), n = A(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? Ce(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: m1,
      classes: h1,
      toNumber: z,
      toPxNum: He,
      toSizeUnit: Ce,
      circleSize: r,
      borderSize: n
    };
  }
});
hv.render = p1;
const tt = hv;
ie(tt);
var ck = tt, g1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: {
    type: String,
    default: "flex-start"
  },
  onClick: R()
}, {
  n: b1,
  classes: y1
} = ae("row");
function w1(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: W({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var pv = ne({
  name: "VarRow",
  props: g1,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = Km(), t = A(() => {
      var s = He(e.gutter);
      return s / 2;
    }), o = () => {
      r.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      C(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return de(() => a.value, o), de(() => e.gutter, o), n(i), {
      n: b1,
      classes: y1,
      average: t,
      handleClick: l,
      padStartFlex: ro
    };
  }
});
pv.render = w1;
const ot = pv;
ie(ot);
var mk = ot;
function Pi() {
  return Pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Pi.apply(this, arguments);
}
var C1 = Pi({
  modelValue: {
    default: void 0
  },
  multiple: Boolean,
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: Boolean,
  readonly: Boolean,
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: Array,
  onFocus: R(),
  onBlur: R(),
  onClose: R(),
  onChange: R(),
  onClear: R(),
  "onUpdate:modelValue": R()
}, xe(rl, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: S1,
  classes: k1
} = ae("select"), $1 = {
  key: 1
};
function T1(e, r) {
  var n = ue("var-chip"), a = ue("var-icon"), t = ue("var-field-decorator"), o = ue("var-menu"), l = ue("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.n()),
      onClick: r[3] || (r[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [x(o, {
      "var-select-cover": "",
      "same-width": "",
      "close-on-click-reference": "",
      show: e.showMenu,
      "onUpdate:show": r[1] || (r[1] = (i) => e.showMenu = i),
      class: c(e.n("menu")),
      "popover-class": e.variant === "standard" && e.hint ? e.n("--standard-menu-margin") : void 0,
      "offset-y": e.offsetY,
      disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
      placement: e.placement,
      "default-style": !1,
      onClickOutside: e.handleBlur
    }, {
      menu: me(() => [V(
        "div",
        {
          ref: "menuEl",
          class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
        },
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      )]),
      default: me(() => [x(
        t,
        Ot(fo({
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
        _t({
          "append-icon": me(() => [Y(e.$slots, "append-icon")]),
          default: me(() => [V(
            "div",
            {
              class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
              style: W({
                textAlign: e.textAlign,
                color: e.textColor
              })
            },
            [V(
              "div",
              {
                class: c(e.n("label"))
              },
              [e.isEmptyModelValue ? ee("v-if", !0) : Y(e.$slots, "selected", {
                key: 0
              }, () => [e.multiple ? (p(), T(
                Ve,
                {
                  key: 0
                },
                [e.chip ? (p(), T(
                  "div",
                  {
                    key: 0,
                    class: c(e.n("chips"))
                  },
                  [(p(!0), T(
                    Ve,
                    null,
                    Ge(e.labels, (i) => (p(), Se(n, {
                      class: c(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: i,
                      onClick: r[0] || (r[0] = Tr(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(i)
                    }, {
                      default: me(() => [$e(
                        le(i),
                        1
                        /* TEXT */
                      )]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["class", "type", "onClose"]))),
                    128
                    /* KEYED_FRAGMENT */
                  ))],
                  2
                  /* CLASS */
                )) : (p(), T(
                  "div",
                  {
                    key: 1,
                    class: c(e.n("values"))
                  },
                  le(e.labels.join(e.separator)),
                  3
                  /* TEXT, CLASS */
                ))],
                64
                /* STABLE_FRAGMENT */
              )) : (p(), T(
                "span",
                $1,
                le(e.label),
                1
                /* TEXT */
              ))])],
              2
              /* CLASS */
            ), e.enableCustomPlaceholder ? (p(), T(
              "span",
              {
                key: 0,
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                style: W({
                  color: e.placeholderColor
                })
              },
              le(e.placeholder),
              7
              /* TEXT, CLASS, STYLE */
            )) : ee("v-if", !0), Y(e.$slots, "arrow-icon", {
              focus: e.showMenu
            }, () => [x(a, {
              class: c(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
              "var-select-cover": "",
              name: "menu-down",
              transition: 300
            }, null, 8, ["class"])])],
            6
            /* CLASS, STYLE */
          )]),
          _: 2
          /* DYNAMIC */
        }, [e.$slots["prepend-icon"] ? {
          name: "prepend-icon",
          fn: me(() => [Y(e.$slots, "prepend-icon")]),
          key: "0"
        } : void 0]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      )]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]), x(l, {
      "error-message": e.errorMessage,
      onClick: r[2] || (r[2] = Tr(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var gv = ne({
  name: "VarSelect",
  components: {
    VarIcon: Ae,
    VarMenu: Bn,
    VarChip: Gn,
    VarFieldDecorator: Rd,
    VarFormDetails: nr
  },
  props: C1,
  setup(e) {
    var r = k(!1), n = k(!1), a = A(() => e.multiple), t = A(() => e.focusColor), o = k(""), l = k([]), i = A(() => Yr(e.modelValue)), s = A(() => e.disabled || e.readonly ? "" : "pointer"), u = k(0), {
      bindForm: d,
      form: v
    } = Ir(), {
      length: f,
      options: m,
      bindOptions: y
    } = R0(), {
      errorMessage: g,
      validateWithTrigger: h,
      validate: w,
      // expose
      resetValidation: O
    } = Or(), P = k(null), S = A(() => e.variant === "outlined" ? "bottom" : "cover-top"), E = A(() => {
      var {
        hint: X,
        blurColor: Z,
        focusColor: re
      } = e;
      if (!X)
        return g.value ? "var(--field-decorator-error-color)" : r.value ? re || "var(--field-decorator-focus-color)" : Z || "var(--field-decorator-blur-color)";
    }), I = A(() => !e.hint && Yr(e.modelValue)), N = () => {
      var {
        multiple: X,
        modelValue: Z
      } = e;
      if (X) {
        var re = Z;
        l.value = re.map(U);
      }
      !X && !Yr(Z) && (o.value = U(Z)), !X && Yr(Z) && (o.value = "");
    }, b = (X) => {
      Ue(() => {
        var {
          validateTrigger: Z,
          rules: re,
          modelValue: ce
        } = e;
        h(Z, X, re, ce);
      });
    }, $ = (X) => {
      var {
        value: Z,
        label: re
      } = X;
      return Z.value != null ? Z.value : re.value;
    }, U = (X) => {
      var Z, re, ce = m.find((ke) => {
        var {
          value: Ee
        } = ke;
        return Ee.value === X;
      });
      return ce || (ce = m.find((ke) => {
        var {
          label: Ee
        } = ke;
        return Ee.value === X;
      })), (Z = (re = ce) == null ? void 0 : re.label.value) != null ? Z : "";
    }, D = () => {
      var {
        disabled: X,
        readonly: Z,
        onFocus: re
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || X || Z || (u.value = He(e.offsetY), r.value = !0, C(re), b("onFocus"));
    }, L = () => {
      var {
        disabled: X,
        readonly: Z,
        onBlur: re
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || X || Z || (M(), C(re), b("onBlur"));
    }, K = (X) => {
      var {
        disabled: Z,
        readonly: re,
        multiple: ce,
        onChange: ke
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || re)) {
        var Ee = ce ? m.filter((se) => {
          var {
            selected: G
          } = se;
          return G.value;
        }).map($) : $(X);
        C(e["onUpdate:modelValue"], Ee), C(ke, Ee), b("onChange"), ce || M();
      }
    }, oe = () => {
      var {
        disabled: X,
        readonly: Z,
        multiple: re,
        clearable: ce,
        onClear: ke
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || X || Z || !ce)) {
        var Ee = re ? [] : void 0;
        C(e["onUpdate:modelValue"], Ee), C(ke, Ee), b("onClear");
      }
    }, _ = (X) => {
      var {
        disabled: Z,
        onClick: re
      } = e;
      v != null && v.disabled.value || Z || (C(re, X), b("onClick"));
    }, H = (X) => {
      var {
        disabled: Z,
        readonly: re,
        modelValue: ce,
        onClose: ke
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || re)) {
        var Ee = ce, se = m.find((te) => {
          var {
            label: ge
          } = te;
          return ge.value === X;
        }), G = Ee.filter((te) => {
          var ge;
          return te !== ((ge = se.value.value) != null ? ge : se.label.value);
        });
        C(e["onUpdate:modelValue"], G), C(ke, G), b("onClose");
      }
    }, F = () => {
      var {
        multiple: X,
        modelValue: Z
      } = e;
      if (X) {
        var re = Z;
        m.forEach((ce) => ce.sync(re.includes($(ce))));
      } else
        m.forEach((ce) => ce.sync(Z === $(ce)));
      N();
    }, j = () => {
      u.value = He(e.offsetY), r.value = !0, n.value = !0;
    }, M = () => {
      r.value = !1, n.value = !1;
    }, B = () => w(e.rules, e.modelValue), J = () => {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    };
    de(() => e.multiple, () => {
      var {
        multiple: X,
        modelValue: Z
      } = e;
      X && !Be(Z) && Pr("Select", "The modelValue must be an array when multiple is true");
    }), de(() => e.modelValue, F, {
      deep: !0
    }), de(() => f.value, F);
    var q = {
      multiple: a,
      focusColor: t,
      computeLabel: N,
      onSelect: K,
      reset: J,
      validate: B,
      resetValidation: O
    };
    return y(q), C(d, q), {
      offsetY: u,
      isFocus: r,
      showMenu: n,
      errorMessage: g,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: P,
      placement: S,
      cursor: s,
      placeholderColor: E,
      enableCustomPlaceholder: I,
      n: S1,
      classes: k1,
      handleFocus: D,
      handleBlur: L,
      handleClear: oe,
      handleClick: _,
      handleClose: H,
      reset: J,
      validate: B,
      resetValidation: O,
      focus: j,
      blur: M
    };
  }
});
gv.render = T1;
const it = gv;
ie(it);
var hk = it, P1 = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: Boolean,
  card: Boolean,
  avatar: Boolean,
  fullscreen: Boolean,
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: [Number, String],
  cardHeight: [Number, String],
  avatarSize: [Number, String],
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, {
  n: O1,
  classes: I1
} = ae("skeleton");
function M1(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? ee("v-if", !0) : (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), T(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: W({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [V(
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
      )) : ee("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), T(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: W({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [V(
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
        )) : ee("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), T(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (p(), T(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: W({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [V(
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
          )) : ee("v-if", !0), (p(!0), T(
            Ve,
            null,
            Ge(e.toNumber(e.rows), (n, a) => (p(), T(
              "div",
              {
                class: c(e.n("row")),
                key: n,
                style: W({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [V(
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
    )) : ee("v-if", !0), e.loading && e.fullscreen ? (p(), T(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: W({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [V(
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
var bv = ne({
  name: "VarSkeleton",
  props: P1,
  setup() {
    return {
      n: O1,
      classes: I1,
      toSizeUnit: Ce,
      toNumber: z
    };
  }
});
bv.render = M1;
const lt = bv;
ie(lt);
var pk = lt, qe = /* @__PURE__ */ function(e) {
  return e.First = "1", e.Second = "2", e;
}({}), B1 = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: Boolean,
  labelVisible: {
    type: String,
    default: "normal"
  },
  activeColor: String,
  trackColor: String,
  thumbColor: String,
  labelColor: String,
  labelTextColor: String,
  trackHeight: [String, Number],
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  rules: Array,
  onChange: R(),
  onStart: R(),
  onEnd: R(),
  "onUpdate:modelValue": R()
}, {
  n: ys,
  classes: E1
} = ae("slider"), V1 = ["onTouchstart"];
function N1(e, r) {
  var n = ue("var-hover-overlay"), a = ue("var-form-details"), t = Le("hover");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [V(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(e.direction + "--error")])),
        ref: "sliderEl",
        onClick: r[0] || (r[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [V(
        "div",
        {
          class: c(e.n(e.direction + "-track"))
        },
        [V(
          "div",
          {
            class: c(e.n(e.direction + "-track-background")),
            style: W({
              background: e.trackColor,
              height: e.isVertical ? "100%" : e.multiplySizeUnit(e.trackHeight),
              width: e.isVertical ? e.multiplySizeUnit(e.trackHeight) : "100%"
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), V(
          "div",
          {
            class: c(e.n(e.direction + "-track-fill")),
            style: W(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), T(
        Ve,
        null,
        Ge(e.thumbList, (o) => (p(), T("div", {
          class: c(e.n(e.direction + "-thumb")),
          key: o.enumValue,
          style: W(e.thumbStyle(o)),
          onTouchstart: Tr((l) => e.start(l, o.enumValue), ["stop"])
        }, [Y(e.$slots, "button", {
          currentValue: o.text
        }, () => [Te(V(
          "div",
          {
            class: c(e.n(e.direction + "-thumb-block")),
            style: W({
              background: e.thumbColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), [[t, (l) => e.hover(l, o), "desktop"]]), V(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n(e.direction + "-thumb-ripple--active")])),
            style: W({
              background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
            })
          },
          [x(n, {
            hovering: o.hovering
          }, null, 8, ["hovering"])],
          6
          /* CLASS, STYLE */
        ), V(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-thumb-label"), [e.showLabel(o.enumValue), e.n(e.direction + "-thumb-label--active")])),
            style: W({
              background: e.labelColor,
              color: e.labelTextColor,
              height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
              width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
            })
          },
          [V(
            "span",
            null,
            le(o.text),
            1
            /* TEXT */
          )],
          6
          /* CLASS, STYLE */
        )])], 46, V1))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), x(a, {
      "error-message": e.errorMessage,
      class: c(e.n("form")),
      "var-slider-cover": ""
    }, null, 8, ["error-message", "class"])],
    2
    /* CLASS */
  );
}
var yv = ne({
  name: "VarSlider",
  components: {
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  directives: {
    Hover: Dr
  },
  props: B1,
  setup(e) {
    var {
      bindForm: r,
      form: n
    } = Ir(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Or(), {
      hovering: i,
      handleHovering: s
    } = qr(), {
      hovering: u,
      handleHovering: d
    } = qr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => Ue(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = k(null), g = k(0), h = k(!1), w = Ye({
      [qe.First]: f(),
      [qe.Second]: f()
    }), O = A(() => z(e.max) - z(e.min)), P = A(() => g.value / O.value * z(e.step)), S = A(() => {
      var {
        modelValue: se,
        range: G
      } = e, te = [];
      return G && Be(se) ? te = [{
        value: K(se[0]),
        enumValue: qe.First,
        text: oe(se[0]),
        hovering: ua(i),
        handleHovering: s
      }, {
        value: K(se[1]),
        enumValue: qe.Second,
        text: oe(se[1]),
        hovering: ua(u),
        handleHovering: d
      }] : mr(se) && (te = [{
        value: K(se),
        enumValue: qe.First,
        text: oe(se),
        hovering: ua(i),
        handleHovering: s
      }]), te;
    }), E = A(() => {
      var {
        activeColor: se,
        range: G,
        modelValue: te
      } = e, ge = G && Be(te) ? K(Math.min(te[0], te[1])) : 0, Me = G && Be(te) ? K(Math.max(te[0], te[1])) - ge : K(te);
      return b.value ? {
        left: "0px",
        height: Me + "%",
        bottom: ge + "%",
        background: se
      } : {
        top: "0px",
        width: Me + "%",
        left: ge + "%",
        background: se
      };
    }), I = A(() => e.disabled || (n == null ? void 0 : n.disabled.value)), N = A(() => e.readonly || (n == null ? void 0 : n.readonly.value)), b = A(() => e.direction === "vertical"), $, U = (se) => {
      var G = se.currentTarget;
      return G ? b.value ? g.value - (se.clientY - Qe(G).top) : se.clientX - Sf(G) : 0;
    }, D = (se) => {
      var G = b.value ? "bottom" : "left";
      return {
        [G]: se.value + "%",
        zIndex: w[se.enumValue].active ? 1 : void 0
      };
    }, L = (se) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[se].active, K = (se) => {
      var {
        min: G,
        max: te
      } = e;
      return se < z(G) ? 0 : se > z(te) ? 100 : (se - z(G)) / O.value * 100;
    }, oe = (se) => {
      if (!mr(se))
        return 0;
      var G = se;
      G < Number(e.min) && (G = Number(e.min)), G > Number(e.max) && (G = Number(e.max));
      var te = parseInt("" + G, 10) === G;
      return te ? G : z(G.toPrecision(5));
    }, _ = (se, G) => {
      I.value || G.handleHovering(se);
    }, H = (se, G) => {
      var te = [], {
        step: ge,
        range: Me,
        modelValue: Oe,
        onChange: Re,
        min: Fe
      } = e, ve = z(ge), we = Math.round(se / P.value), be = we * ve + z(Fe), Pe = w[G].percentValue * ve + z(Fe);
      if (w[G].percentValue = we, Me && Be(Oe) && (te = G === qe.First ? [be, Oe[1]] : [Oe[0], be]), Pe !== be) {
        var Ie = Me ? te.map((We) => oe(We)) : oe(be);
        C(Re, Ie), C(e["onUpdate:modelValue"], Ie), m();
      }
    }, F = (se) => {
      if (!e.range)
        return qe.First;
      var G = w[qe.First].percentValue * P.value, te = w[qe.Second].percentValue * P.value, ge = Math.abs(se - G), Me = Math.abs(se - te);
      return ge <= Me ? qe.First : qe.Second;
    }, j = () => {
      document.addEventListener("touchmove", J, {
        passive: !1
      }), document.addEventListener("touchend", q), document.addEventListener("touchcancel", q);
    }, M = () => {
      document.removeEventListener("touchmove", J), document.removeEventListener("touchend", q), document.removeEventListener("touchcancel", q);
    }, B = (se, G) => {
      if (g.value || (g.value = y.value.offsetWidth), I.value || (w[G].active = !0), $ = G, j(), !(I.value || N.value)) {
        C(e.onStart), h.value = !0;
        var {
          clientX: te,
          clientY: ge
        } = se.touches[0];
        w[G].startPosition = b.value ? ge : te;
      }
    }, J = (se) => {
      if (se.preventDefault(), !(I.value || N.value || !h.value)) {
        var {
          startPosition: G,
          currentOffset: te
        } = w[$], {
          clientX: ge,
          clientY: Me
        } = se.touches[0], Oe = (b.value ? G - Me : ge - G) + te;
        Oe <= 0 ? Oe = 0 : Oe >= g.value && (Oe = g.value), H(Oe, $);
      }
    }, q = () => {
      M();
      var {
        range: se,
        modelValue: G,
        onEnd: te,
        step: ge,
        min: Me
      } = e;
      if (I.value || (w[$].active = !1), !(I.value || N.value)) {
        var Oe = [];
        w[$].currentOffset = w[$].percentValue * P.value;
        var Re = w[$].percentValue * z(ge) + z(Me);
        se && Be(G) && (Oe = $ === qe.First ? [Re, G[1]] : [G[0], Re]), C(te, se ? Oe : Re), h.value = !1;
      }
    }, X = (se) => {
      if (!(I.value || N.value) && !se.target.closest("." + ys("thumb"))) {
        var G = U(se), te = F(G);
        $ = te, H(G, te), q();
      }
    }, Z = () => {
      var se = z(e.step);
      return isNaN(se) ? (hl("Slider", 'type of prop "step" should be Number'), !1) : se < 0 ? (hl("Slider", '"step" should be > 0'), !1) : !0;
    }, re = () => {
      var {
        range: se,
        modelValue: G
      } = e;
      return se && !Be(G) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !se && Be(G) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : se && Be(G) && G.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, ce = function(se, G) {
      se === void 0 && (se = e.modelValue), G === void 0 && (G = z(e.step));
      var te = (ge) => {
        var {
          min: Me,
          max: Oe
        } = e;
        return ge < z(Me) ? 0 : ge > z(Oe) ? O.value / G : (ge - z(Me)) / G;
      };
      e.range && Be(se) ? (w[qe.First].percentValue = te(se[0]), w[qe.First].currentOffset = w[qe.First].percentValue * P.value, w[qe.Second].percentValue = te(se[1]), w[qe.Second].currentOffset = w[qe.Second].percentValue * P.value) : mr(se) && (w[qe.First].currentOffset = te(se) * P.value);
    }, ke = () => {
      var se = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], se), l();
    }, Ee = {
      reset: ke,
      validate: v,
      resetValidation: l
    };
    return C(r, Ee), de([() => e.modelValue, () => e.step], (se) => {
      var [G, te] = se;
      !Z() || !re() || h.value || ce(G, z(te));
    }), de(g, () => ce()), tr(() => {
      !Z() || !re() || (g.value = y.value[b.value ? "offsetHeight" : "offsetWidth"]);
    }), vo(() => {
      M();
    }), {
      n: ys,
      classes: E1,
      Thumbs: qe,
      sliderEl: y,
      getFillStyle: E,
      isDisabled: I,
      isVertical: b,
      thumbStyle: D,
      errorMessage: a,
      thumbsProps: w,
      thumbList: S,
      hover: _,
      multiplySizeUnit: sr,
      toNumber: z,
      showLabel: L,
      start: B,
      move: J,
      end: q,
      click: X
    };
  }
});
yv.render = N1;
const st = yv;
ie(st);
var gk = st;
function Oi() {
  return Oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Oi.apply(this, arguments);
}
var wv = {
  type: String,
  position: {
    type: String,
    default: "top"
  },
  content: {
    type: [String, Function, Object]
  },
  contentClass: String,
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: Boolean,
  loadingType: xe(tn, "type"),
  loadingSize: xe(tn, "size"),
  loadingRadius: xe(tn, "radius"),
  loadingColor: Oi({}, xe(tn, "color"), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:show": R(),
  _update: String
}, {
  n: D1,
  classes: A1
} = ae("snackbar"), z1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function L1(e, r) {
  var n = ue("var-icon"), a = ue("var-loading");
  return Te((p(), T(
    "div",
    {
      class: c(e.n()),
      style: W({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [V(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: W({
          zIndex: e.zIndex
        })
      },
      [V(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [Y(e.$slots, "default", {}, () => [$e(
          le(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), V(
        "div",
        {
          class: c([e.n("icon")])
        },
        [e.iconName ? (p(), Se(n, {
          key: 0,
          name: e.iconName
        }, null, 8, ["name"])) : ee("v-if", !0), e.type === "loading" ? (p(), Se(a, {
          key: 1,
          type: e.loadingType,
          size: e.loadingSize,
          color: e.loadingColor,
          radius: e.loadingRadius
        }, null, 8, ["type", "size", "color", "radius"])) : ee("v-if", !0), Y(e.$slots, "icon")],
        2
        /* CLASS */
      ), V(
        "div",
        {
          class: c(e.n("action"))
        },
        [Y(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Lr, e.show]]);
}
var Cv = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: fn,
    VarIcon: Ae
  },
  props: wv,
  setup(e) {
    var r = k(null), {
      zIndex: n
    } = Bt(() => e.show, 1);
    ho(() => e.show, () => e.lockScroll);
    var a = A(() => e.type === "loading" || e.forbidClick), t = A(() => e.type ? z1[e.type] : ""), o = () => {
      r.value = setTimeout(() => {
        e.type !== "loading" && C(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return de(() => e.show, (l) => {
      l ? (C(e.onOpen), o()) : l === !1 && (clearTimeout(r.value), C(e.onClose));
    }), de(() => e._update, () => {
      clearTimeout(r.value), o();
    }), tr(() => {
      e.show && (C(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: $v,
      n: D1,
      classes: A1,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
Cv.render = L1;
const Sv = Cv;
var {
  n: R1
} = ae("snackbar");
function U1(e, r) {
  var n = ue("var-snackbar-core");
  return p(), Se(Zr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [x(je, {
    name: e.n() + "-fade",
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: me(() => [x(n, ze(e.$props, {
      class: e.n("transition")
    }), {
      icon: me(() => [Y(e.$slots, "icon")]),
      action: me(() => [Y(e.$slots, "action")]),
      default: me(() => [Y(e.$slots, "default", {}, () => [$e(
        le(e.content),
        1
        /* TEXT */
      )])]),
      _: 3
      /* FORWARDED */
    }, 16, ["class"])]),
    _: 3
    /* FORWARDED */
  }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]);
}
var kv = ne({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Sv
  },
  props: wv,
  setup() {
    var {
      disabled: e
    } = oa();
    return {
      n: R1,
      disabled: e
    };
  }
});
kv.render = U1;
const Mo = kv;
function ut() {
  return ut = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ut.apply(this, arguments);
}
function H1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Tt(e);
}
var $v = ["loading", "success", "warning", "info", "error"], ws = 0, Ii = !1, Tv, xn = !1, Pv = {
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
}, $r = Ye([]), tl = Pv, Y1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Ro = (e) => () => aa(e) ? e() : e, F1 = {
  setup() {
    return () => {
      var e = $r.map((r) => {
        var {
          id: n,
          reactiveSnackOptions: a,
          _update: t
        } = r, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), xn && (a.position = "top");
        var l = xn ? "relative" : "absolute", i = ut({
          position: l
        }, K1(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Ro(s),
          icon: Ro(u),
          action: Ro(d)
        };
        return x(Sv, ze(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return x(xv, ze(Y1, {
        style: {
          zIndex: yr.zIndex
        },
        onAfterEnter: j1,
        onAfterLeave: W1
      }), H1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Kr = function(e) {
  var r = q1(e), n = Ye(ut({}, tl, r));
  n.show = !0, Ii || (Ii = !0, Tv = ta(F1).unmountInstance);
  var {
    length: a
  } = $r, t = {
    id: ws++,
    reactiveSnackOptions: n
  };
  if (a === 0 || xn)
    G1(t);
  else {
    var o = "update-" + ws;
    X1(n, o);
  }
  return {
    clear() {
      !xn && $r.length ? $r[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
$v.forEach((e) => {
  Kr[e] = (r) => (Di(r) ? r.type = e : r = {
    content: r,
    type: e
  }, Kr(r));
});
Kr.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== xn && ($r.forEach((r) => {
    r.reactiveSnackOptions.show = !1;
  }), xn = e);
};
Kr.clear = function() {
  $r.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Kr.setDefaultOptions = function(e) {
  tl = e;
};
Kr.resetDefaultOptions = function() {
  tl = Pv;
};
function j1(e) {
  var r = e.getAttribute("data-id"), n = $r.find((a) => a.id === z(r));
  n && C(n.reactiveSnackOptions.onOpened);
}
function W1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = $r.find((t) => t.id === z(r));
  n && (n.animationEnd = !0, C(n.reactiveSnackOptions.onClosed));
  var a = $r.every((t) => t.animationEnd);
  a && (C(Tv), $r = Ye([]), Ii = !1);
}
function G1(e) {
  $r.push(e);
}
function q1(e) {
  return e === void 0 && (e = {}), Je(e) ? {
    content: e
  } : e;
}
function X1(e, r) {
  var [n] = $r;
  n.reactiveSnackOptions = ut({}, n.reactiveSnackOptions, e), n._update = r;
}
function K1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Kr.Component = Mo;
ie(Mo);
ie(Mo, Kr);
var bk = Mo;
const Mi = Kr;
var Z1 = {
  size: {
    type: [String, Number, Array],
    default: "normal"
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
    default: "flex-start"
  },
  align: String,
  inline: Boolean
};
function br(e) {
  return "calc(" + e + " / 2)";
}
function J1(e, r, n) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = n, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = br(e) + " " + r + " " + br(e) + " 0" : i = br(e) + " 0" : t === "space-around" ? i = br(e) + " " + br(r) : t === "space-between" && (o === 0 ? i = br(e) + " " + br(r) + " " + br(e) + " 0" : o === l ? i = br(e) + " 0 " + br(e) + " " + br(r) : i = br(e) + " " + br(r))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var Q1 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  n: Uo,
  classes: _1
} = ae("space");
const dt = ne({
  name: "VarSpace",
  props: Z1,
  setup(e, r) {
    var {
      slots: n
    } = r, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Be(t) ? t.map(Ce) : [Ce(t), Ce(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = C(n.default)) != null ? t : [], [f, m] = a(d, Q1(d));
      v = Ns(v);
      var y = v.length - 1, g = v.map((h, w) => {
        var O = J1(f, m, {
          direction: u,
          justify: l,
          index: w,
          lastIndex: y
        });
        return x("div", {
          style: {
            margin: O
          }
        }, [h]);
      });
      return x("div", {
        class: _1(Uo(), Uo("$--box"), [o, Uo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: ro(l),
          alignItems: ro(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + f + " / 2) 0" : void 0
        }
      }, [g]);
    };
  }
});
ie(dt);
var yk = dt, x1 = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: String,
  inactiveIcon: String
}, Ov = Symbol("STEPS_BIND_STEP_KEY");
function ew() {
  var {
    bindChildren: e,
    childProviders: r
  } = ir(Ov);
  return {
    step: r,
    bindStep: e
  };
}
function rw() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Ov);
  return n || Pr("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: nw,
  classes: aw
} = ae("step"), tw = {
  key: 3
};
function ow(e, r) {
  var n = ue("var-icon");
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [V(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [V(
        "div",
        {
          class: c(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
          style: W({
            backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
          }),
          onClick: r[0] || (r[0] = function() {
            return e.click && e.click(...arguments);
          })
        },
        [e.isActive ? (p(), Se(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.activeIcon
        }, null, 8, ["class", "name"])) : e.isCurrent && e.currentIcon ? (p(), Se(n, {
          key: 1,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.currentIcon
        }, null, 8, ["class", "name"])) : e.inactiveIcon ? (p(), Se(n, {
          key: 2,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.inactiveIcon
        }, null, 8, ["class", "name"])) : (p(), T(
          "span",
          tw,
          le(e.index + 1),
          1
          /* TEXT */
        ))],
        6
        /* CLASS, STYLE */
      ), V(
        "div",
        {
          class: c(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
          onClick: r[1] || (r[1] = function() {
            return e.click && e.click(...arguments);
          })
        },
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      ), V(
        "div",
        {
          class: c(e.n(e.direction + "-line"))
        },
        null,
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var Iv = ne({
  name: "VarStep",
  components: {
    VarIcon: Ae
  },
  props: x1,
  setup() {
    var {
      index: e,
      steps: r,
      bindSteps: n
    } = rw(), {
      active: a,
      activeColor: t,
      inactiveColor: o,
      direction: l,
      clickStep: i
    } = r, s = A(() => a.value === e.value), u = A(() => e.value !== -1 && z(a.value) > e.value), d = {
      index: e
    }, v = () => i(e.value);
    return n(d), {
      n: nw,
      classes: aw,
      index: e,
      isActive: u,
      isCurrent: s,
      direction: l,
      activeColor: t,
      inactiveColor: o,
      click: v
    };
  }
});
Iv.render = ow;
const vt = Iv;
ie(vt);
var wk = vt, iw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  activeColor: String,
  inactiveColor: String,
  onClickStep: R()
}, {
  n: lw
} = ae("steps");
function sw(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n()),
      style: W({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Mv = ne({
  name: "VarSteps",
  props: iw,
  setup(e) {
    var r = A(() => e.active), n = A(() => e.activeColor), a = A(() => e.inactiveColor), t = A(() => e.direction), {
      bindStep: o
    } = ew(), l = (s) => {
      C(e.onClickStep, s);
    }, i = {
      active: r,
      direction: t,
      activeColor: n,
      inactiveColor: a,
      clickStep: l
    };
    return o(i), {
      n: lw
    };
  }
});
Mv.render = sw;
const ft = Mv;
ie(ft);
var Ck = ft, uw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: dw
} = ae("style-provider"), vw = ne({
  name: "VarStyleProvider",
  props: uw,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => Is(e.tag, {
      class: dw(),
      style: Xs(e.styleVars)
    }, C(n.default));
  }
});
const Bo = vw;
var Ho = [];
function ct(e) {
  Ho.forEach((n) => document.documentElement.style.removeProperty(n)), Ho.length = 0;
  var r = Xs(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Ho.push(a);
  });
}
ct.Component = Bo;
ie(Bo);
ie(Bo, ct);
var Sk = Bo, fw = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  disabled: Boolean,
  readonly: Boolean,
  loading: Boolean,
  color: String,
  loadingColor: String,
  closeColor: String,
  size: [String, Number],
  rules: Array,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: cw,
  classes: mw
} = ae("switch"), hw = (e) => (pn(""), e = e(), gn(), e), pw = /* @__PURE__ */ hw(() => /* @__PURE__ */ V(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ V("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), gw = [pw];
function bw(e, r) {
  var n = ue("var-hover-overlay"), a = ue("var-form-details"), t = Le("ripple"), o = Le("hover");
  return Te((p(), T(
    "div",
    {
      class: c(e.n())
    },
    [V(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: r[0] || (r[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: W(e.styleComputed.switch)
      },
      [V(
        "div",
        {
          style: W(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), Te((p(), T(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: W(e.styleComputed.ripple)
        },
        [V(
          "div",
          {
            style: W(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (p(), T(
            "span",
            {
              key: 0,
              class: c(e.n("loading")),
              style: W({
                width: e.radius,
                height: e.radius
              })
            },
            gw,
            6
            /* CLASS, STYLE */
          )) : ee("v-if", !0)],
          6
          /* CLASS, STYLE */
        ), x(n, {
          hovering: e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), x(a, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  )), [[o, e.hover, "desktop"]]);
}
var Bv = ne({
  name: "VarSwitch",
  components: {
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: Xe,
    Hover: Dr
  },
  props: fw,
  setup(e) {
    var {
      bindForm: r,
      form: n
    } = Ir(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Or(), {
      hovering: i,
      handleHovering: s
    } = qr(), u = () => o(e.rules, e.modelValue), d = () => Ue(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = A(() => {
      var {
        size: w,
        modelValue: O,
        color: P,
        closeColor: S,
        loadingColor: E,
        activeValue: I
      } = e;
      return {
        handle: {
          width: sr(w),
          height: sr(w),
          backgroundColor: O === I ? P : S,
          color: E
        },
        ripple: {
          left: O === I ? sr(w, 0.5) : "-" + sr(w, 0.5),
          color: O === I ? P : S || "#999",
          width: sr(w, 2),
          height: sr(w, 2)
        },
        track: {
          height: sr(w, 0.72),
          width: sr(w, 1.9),
          borderRadius: sr(w, 2 / 3),
          filter: O === I || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: O === I ? P : S
        },
        switch: {
          height: sr(w, 1.2),
          width: sr(w, 2)
        }
      };
    }), f = A(() => sr(e.size, 0.8)), m = (w) => {
      var {
        onClick: O,
        onChange: P,
        disabled: S,
        loading: E,
        readonly: I,
        modelValue: N,
        activeValue: b,
        inactiveValue: $,
        "onUpdate:modelValue": U
      } = e;
      if (C(O, w), !(S || E || I || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var D = N === b ? $ : b;
        C(P, D), C(U, D), d();
      }
    }, y = (w) => {
      e.disabled || n != null && n.disabled.value || s(w);
    }, g = () => {
      C(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, h = {
      reset: g,
      validate: u,
      resetValidation: l
    };
    return C(r, h), {
      n: cw,
      classes: mw,
      hovering: i,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      multiplySizeUnit: sr,
      switchActive: m,
      hover: y
    };
  }
});
Bv.render = bw;
const mt = Bv;
ie(mt);
var kk = mt, yw = {
  name: [String, Number],
  disabled: Boolean,
  onClick: R()
}, Ev = Symbol("TABS_BIND_TAB_KEY");
function ww() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = ir(Ev);
  return {
    length: n,
    tabList: e,
    bindTabList: r
  };
}
function Cw() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = or(Ev);
  return r || Pr("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: n,
    tabs: e,
    bindTabs: r
  };
}
var {
  n: Wt,
  classes: Sw
} = ae("tab");
function kw(e, r) {
  var n = Le("ripple");
  return Te((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: W({
        color: e.computeColorStyle()
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[n, {
    disabled: e.disabled
  }]]);
}
var Vv = ne({
  name: "VarTab",
  directives: {
    Ripple: Xe
  },
  props: yw,
  setup(e) {
    var r = k(null), n = A(() => e.name), a = A(() => e.disabled), t = A(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = Cw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: y
    } = l, g = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(g);
    var h = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : h() ? d.value : v.value, O = () => e.disabled ? Wt("$-tab--disabled") : h() ? Wt("$-tab--active") : Wt("$-tab--inactive"), P = (S) => {
      var {
        disabled: E,
        name: I,
        onClick: N
      } = e;
      E || (C(N, I ?? o.value, S), s(g));
    };
    return de(() => e.name, y), de(() => e.disabled, y), {
      n: Wt,
      classes: Sw,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: O,
      handleClick: P
    };
  }
});
Vv.render = kw;
const ht = Vv;
ie(ht);
var $k = ht, $w = {
  name: [String, Number]
}, {
  n: Tw,
  classes: Pw
} = ae("tab-item");
function Ow(e, r) {
  var n = ue("var-swipe-item");
  return p(), Se(n, {
    class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: me(() => [Y(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
var Nv = ne({
  name: "VarTabItem",
  components: {
    VarSwipeItem: In
  },
  props: $w,
  setup(e) {
    var r = k(!1), n = A(() => e.name), {
      index: a,
      bindTabsItems: t
    } = b0(), {
      bindLists: o
    } = y0(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: A(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: Tw,
      classes: Pw,
      current: r
    };
  }
});
Nv.render = Ow;
const pt = Nv;
ie(pt);
var Tk = pt, Iw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: Mw,
  classes: Bw
} = ae("table");
function Ew(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [V(
      "div",
      {
        class: c(e.n("main"))
      },
      [V(
        "table",
        {
          class: c(e.n("table")),
          style: W({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [Y(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [Y(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Dv = ne({
  name: "VarTable",
  props: Iw,
  setup() {
    return {
      toSizeUnit: Ce,
      n: Mw,
      classes: Bw,
      formatElevation: pr
    };
  }
});
Dv.render = Ew;
const gt = Dv;
ie(gt);
var Pk = gt, Vw = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal"
  },
  itemDirection: {
    type: String,
    default: "horizontal"
  },
  fixedBottom: Boolean,
  activeColor: String,
  inactiveColor: String,
  disabledColor: String,
  color: String,
  indicatorColor: String,
  indicatorSize: [String, Number],
  elevation: {
    type: [Boolean, String, Number],
    default: !1
  },
  scrollable: {
    type: String,
    default: "auto"
  },
  indicatorPosition: {
    type: String,
    default: "normal"
  },
  safeArea: Boolean,
  sticky: Boolean,
  stickyCssMode: xe(Qt, "cssMode"),
  stickyZIndex: xe(Qt, "zIndex"),
  offsetTop: xe(Qt, "offsetTop"),
  onClick: R(),
  onChange: R(),
  "onUpdate:active": R()
};
function Cs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ss(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Cs(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Cs(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Nw,
  classes: Dw
} = ae("tabs");
function Aw(e, r) {
  return p(), Se(na(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: me(() => [V(
      "div",
      ze({
        class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
        style: {
          background: e.color
        }
      }, e.$attrs),
      [V(
        "div",
        {
          ref: "scrollerEl",
          class: c(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
        },
        [Y(e.$slots, "default"), V(
          "div",
          {
            class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
            style: W({
              width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
              height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
              transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
            })
          },
          [V(
            "div",
            {
              class: c(e.classes(e.n("indicator-inner"), e.n("--layout-" + e.layoutDirection + "-indicator-inner"))),
              style: W({
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
  }, 8, ["css-mode", "offset-top", "z-index"]);
}
var Av = ne({
  name: "VarTabs",
  components: {
    VarSticky: Mn
  },
  inheritAttrs: !1,
  props: Vw,
  setup(e) {
    var r = k("0px"), n = k("0px"), a = k("0px"), t = k("0px"), o = k(!1), l = k(null), i = A(() => e.active), s = A(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = A(() => e.activeColor), d = A(() => e.inactiveColor), v = A(() => e.disabledColor), f = A(() => e.itemDirection), m = k(null), {
      tabList: y,
      bindTabList: g,
      length: h
    } = ww(), w = (D) => {
      var L, K = (L = D.name.value) != null ? L : D.index.value, {
        active: oe,
        onChange: _,
        onClick: H
      } = e;
      C(e["onUpdate:active"], K), C(H, K), K !== oe && C(_, K);
    }, O = () => y.find((D) => {
      var {
        name: L
      } = D;
      return e.active === L.value;
    }), P = (D) => y.find((L) => {
      var {
        index: K
      } = L;
      return (D ?? e.active) === K.value;
    }), S = () => {
      if (h.value !== 0) {
        var {
          active: D
        } = e;
        if (mr(D)) {
          var L = un(D, 0, h.value - 1);
          return C(e["onUpdate:active"], L), P(L);
        }
      }
    }, E = () => {
      o.value = e.scrollable === "always" || y.length >= 5;
    }, I = (D) => {
      var {
        element: L
      } = D, K = L.value;
      K && (e.layoutDirection === "horizontal" ? (r.value = K.offsetWidth + "px", a.value = K.offsetLeft + "px") : (n.value = K.offsetHeight + "px", t.value = K.offsetTop + "px"));
    }, N = (D) => {
      var {
        element: L
      } = D;
      if (o.value) {
        var K = l.value, oe = L.value;
        if (e.layoutDirection === "horizontal") {
          var _ = oe.offsetLeft + oe.offsetWidth / 2 - K.offsetWidth / 2;
          ya(K, {
            left: _,
            animation: qo
          });
        } else {
          var H = oe.offsetTop + oe.offsetHeight / 2 - K.offsetHeight / 2;
          ya(K, {
            top: H,
            animation: qo
          });
        }
      }
    }, b = () => {
      var D = O() || P() || S();
      !D || D.disabled.value || (E(), I(D), N(D));
    }, $ = /* @__PURE__ */ function() {
      var D = Ss(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return D.apply(this, arguments);
      };
    }(), U = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: b,
      onTabClick: w
    };
    return g(U), de(() => h.value, /* @__PURE__ */ Ss(function* () {
      yield dr(), b();
    })), de(() => e.active, b), de(() => e.scrollable, b), hn(b), It(b), {
      stickyComponent: m,
      indicatorWidth: r,
      indicatorHeight: n,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: je,
      toSizeUnit: Ce,
      n: Nw,
      classes: Dw,
      resize: b,
      resizeSticky: $,
      formatElevation: pr
    };
  }
});
Av.render = Aw;
const bt = Av;
ie(bt);
var Ok = bt, zw = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": R()
};
function ks(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Lw(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        ks(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ks(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Rw
} = ae("tabs-items");
function Uw(e, r) {
  var n = ue("var-swipe");
  return p(), Se(n, {
    class: c(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: me(() => [Y(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
var zv = ne({
  name: "VarTabsItems",
  components: {
    VarSwipe: On
  },
  props: zw,
  setup(e) {
    var r = k(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = g0(), o = (v) => n.find((f) => {
      var {
        name: m
      } = f;
      return v === m.value;
    }), l = (v) => n.find((f) => {
      var {
        index: m
      } = f;
      return v === m.value;
    }), i = (v) => o(v) || l(v), s = (v) => {
      var f, m = i(v);
      m && (n.forEach((y) => {
        var {
          setCurrent: g
        } = y;
        return g(!1);
      }), m.setCurrent(!0), (f = r.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = n.find((g) => {
        var {
          index: h
        } = g;
        return h.value === v;
      }), y = (f = m.name.value) != null ? f : m.index.value;
      C(e["onUpdate:active"], y);
    }, d = () => r.value;
    return a({}), de(() => e.active, s), de(() => t.value, /* @__PURE__ */ Lw(function* () {
      yield dr(), s(e.active);
    })), {
      swipe: r,
      n: Rw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
zv.render = Uw;
const yt = zv;
ie(yt);
var Ik = yt;
const Hw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Yw = {
  "--badge-default-color": "#555"
}, Fw = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, jw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Ww = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Gw = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, qw = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, Xw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Kw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, Zw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, Jw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, Qw = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, _w = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, xw = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, eC = {
  "--popup-content-background-color": "#1e1e1e"
}, rC = {
  "--pull-refresh-background": "#303030"
}, nC = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, aC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, tC = {
  "--select-scroller-background": "#303030"
}, oC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, iC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, lC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, sC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, uC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, dC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, vC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, fC = {
  "--tabs-background": "#1e1e1e"
}, cC = {
  "--app-bar-color": "#272727"
}, mC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, hC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, pC = {
  "--menu-background-color": "#272727"
}, gC = {
  "--breadcrumb-inactive-color": "#aaa"
}, bC = {
  "--paper-background": "#303030"
}, yC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, wC = {
  "--link-default-color": "#fff"
}, CC = {
  "--progress-label-color": "#fff"
}, SC = {
  "--options-text-color": "#fff"
}, kC = {
  "--countdown-text-color": "#fff"
}, $C = {
  "--watermark-content-color": "#ffffff"
};
function Bi() {
  return Bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Bi.apply(this, arguments);
}
const TC = Bi({
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
}, Fw, Ww, jw, dC, Kw, oC, fC, sC, eC, Zw, Hw, qw, Yw, vC, Xw, rC, lC, iC, _w, uC, Qw, tC, nC, Gw, Jw, xw, cC, mC, hC, pC, aC, gC, bC, yC, wC, CC, SC, kC, $C);
var PC = {
  dark: TC
}, Mk = null;
const Ei = PC;
var Sr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], ur = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], $s = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], OC = {
  modelValue: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  color: String,
  headerColor: String,
  format: {
    type: String,
    default: "ampm"
  },
  allowedTime: Object,
  min: String,
  max: String,
  useSeconds: Boolean,
  readonly: Boolean,
  "onUpdate:modelValue": R(),
  onChange: R()
}, Lv = (e, r) => e === "24hr" || r === "am", ol = (e, r, n) => {
  var a = Sr.findIndex((o) => z(o) === z(n)), t = Lv(e, r) ? n : ur[a];
  return {
    hourStr: t,
    hourNum: z(t)
  };
}, cr = (e) => {
  var [r, n, a] = e.split(":");
  return {
    hour: z(r),
    minute: z(n),
    second: z(a)
  };
}, Rv = (e) => {
  var r, n, {
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
  } = ol(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: y,
      minute: g
    } = cr(i);
    f = y === v && a > g;
  }
  if (!i && s) {
    var {
      hour: h,
      minute: w
    } = cr(s);
    f = h === v && a < w;
  }
  if (i && s) {
    var {
      hour: O,
      minute: P
    } = cr(i), {
      hour: S,
      minute: E
    } = cr(s);
    f = S === v && a < E || O === v && a > P;
  }
  return (r = e.allowedTime) != null && r.minutes && (m = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), f || m;
}, Uv = (e) => {
  var r, n, {
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
  } = ol(t, o, l), m = !1, y = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: g,
      minute: h,
      second: w
    } = cr(s);
    m = g === f && h < i || h === i && a > w;
  }
  if (!s && u) {
    var {
      hour: O,
      minute: P,
      second: S
    } = cr(u);
    m = O === f && P > i || P === i && a > S;
  }
  if (s && u) {
    var {
      hour: E,
      minute: I,
      second: N
    } = cr(s), {
      hour: b,
      minute: $,
      second: U
    } = cr(u);
    m = E === f && I < i || b === f && $ > i || E === f && I === i && a > N || b === f && $ === i && a < U;
  }
  return (r = e.allowedTime) != null && r.seconds && (y = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || y;
}, {
  n: IC,
  classes: MC
} = ae("time-picker");
function BC(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n("clock"))
    },
    [V(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: W(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (p(!0), T(
      Ve,
      null,
      Ge(e.timeScales, (n, a) => (p(), T(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
          key: n,
          style: W(e.getStyle(a, n, !1))
        },
        le(n),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), T(
        Ve,
        null,
        Ge(e.hours24, (n, a) => (p(), T(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
            key: n,
            style: W(e.getStyle(a, n, !0))
          },
          le(n),
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
var Hv = ne({
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
  setup(e, r) {
    var {
      emit: n
    } = r, a = k(null), t = k([]), o = k([]), l = A(() => ({
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = A(() => {
      if (e.rad !== void 0) {
        var h = e.rad / 30;
        return h >= 0 ? h : h + 12;
      }
    }), s = A(() => e.type === "hour" ? Sr : $s), u = (h, w) => {
      var O;
      h = (O = h) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var P = e.type === "minute" ? Rv : Uv, S = {
        time: z(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty(S, "minute"), P(S);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var h = e.isInner ? ur[i.value] : s.value[i.value];
      return s.value === $s ? u() ? "#bdbdbd" : e.color : f(h) ? "#bdbdbd" : e.color;
    }, v = (h, w) => w ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), f = (h) => {
      if (e.type === "hour") {
        if (Lv(e.format, e.ampm))
          return t.value.includes(h);
        var w = Sr.findIndex((O) => O === h);
        return o.value.includes(w);
      }
      return u(h, !0);
    }, m = (h, w, O) => {
      var P = 2 * Math.PI / 12 * h - Math.PI / 2, S = 50 * (1 + Math.cos(P)), E = 50 * (1 + Math.sin(P)), I = () => v(h, O) ? f(w) ? {
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
        color: b
      } = I();
      return {
        left: S + "%",
        top: E + "%",
        backgroundColor: N,
        color: b
      };
    }, y = () => {
      var {
        width: h,
        height: w
      } = Qe(a.value);
      return {
        width: h,
        height: w
      };
    }, g = () => {
      if (i.value !== void 0) {
        var h = e.ampm === "am" ? Sr : ur;
        return kn(h[i.value], 2, "0");
      }
    };
    return de([i, () => e.isInner], (h, w) => {
      var [O, P] = h, [S, E] = w, I = O === S && P === E;
      if (!(I || e.type !== "hour" || i.value === void 0)) {
        var N = P ? ur[i.value] : g(), b = e.useSeconds ? ":" + e.time.second : "", $ = N + ":" + e.time.minute + b;
        e.preventNextUpdate || n("update", $), n("change-prevent-update");
      }
    }), de(() => e.rad, (h, w) => {
      if (!(e.type === "hour" || h === void 0 || w === void 0)) {
        var O = h / 6 >= 0 ? h / 6 : h / 6 + 60, P = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (O !== P) {
          var S, {
            hourStr: E
          } = ol(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var I = fe().minute(O).format("mm"), N = e.useSeconds ? ":" + e.time.second : "";
            S = E + ":" + I + N;
          }
          if (e.type === "second") {
            var b = fe().second(O).format("ss"), $ = e.useSeconds ? ":" + b : "";
            S = E + ":" + e.time.minute + $;
          }
          n("update", S);
        }
      }
    }), de([() => e.max, () => e.min, () => e.allowedTime], (h) => {
      var [w, O, P] = h;
      if (t.value = [], w && !O) {
        var {
          hour: S
        } = cr(w), E = Sr.filter((F) => z(F) > S), I = ur.filter((F) => z(F) > S);
        t.value = [...E, ...I];
      }
      if (!w && O) {
        var {
          hour: N
        } = cr(O), b = Sr.filter((F) => z(F) < N), $ = ur.filter((F) => z(F) < N);
        t.value = [...b, ...$];
      }
      if (w && O) {
        var {
          hour: U
        } = cr(w), {
          hour: D
        } = cr(O), L = Sr.filter((F) => z(F) < D || z(F) > U), K = ur.filter((F) => z(F) < D || z(F) > U);
        t.value = [...L, ...K];
      }
      if (P != null && P.hours) {
        var {
          hours: oe
        } = P, _ = Sr.filter((F) => !oe(z(F))), H = ur.filter((F) => !oe(z(F)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ..._, ...H])];
      }
      o.value = t.value.map((F) => ur.findIndex((j) => F === j)).filter((F) => F >= 0);
    }, {
      immediate: !0
    }), {
      n: IC,
      classes: MC,
      hours24: ur,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: y,
      getStyle: m,
      activeItemIndex: i
    };
  }
});
Hv.render = BC;
const EC = Hv;
var {
  n: VC,
  classes: NC
} = ae("time-picker"), DC = (e) => (pn(""), e = e(), gn(), e), AC = /* @__PURE__ */ DC(() => /* @__PURE__ */ V(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), zC = {
  key: 0
};
function LC(e, r) {
  var n = ue("clock");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [V(
      "div",
      {
        class: c(e.n("title")),
        style: W({
          background: e.headerColor || e.color
        })
      },
      [V(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [V(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: r[0] || (r[0] = (a) => e.checkPanel("hour"))
          },
          le(e.time.hour),
          3
          /* TEXT, CLASS */
        ), AC, V(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          le(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), T("span", zC, ":")) : ee("v-if", !0), e.useSeconds ? (p(), T(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: r[2] || (r[2] = (a) => e.checkPanel("second"))
          },
          le(e.time.second),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [V(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: r[3] || (r[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), V(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: r[4] || (r[4] = (a) => e.checkAmpm("pm"))
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
    ), V(
      "div",
      {
        class: c(e.n("body"))
      },
      [V(
        "div",
        {
          class: c(e.n("clock-container")),
          onTouchstart: r[5] || (r[5] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchmove: r[6] || (r[6] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchend: r[7] || (r[7] = function() {
            return e.end && e.end(...arguments);
          }),
          ref: "container"
        },
        [x(je, {
          name: e.n() + "-panel-fade"
        }, {
          default: me(() => [(p(), Se(n, {
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
          }, null, 8, ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]))]),
          _: 1
          /* STABLE */
        }, 8, ["name"])],
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
var Yv = ne({
  name: "VarTimePicker",
  components: {
    Clock: EC
  },
  props: OC,
  setup(e) {
    var r = k(null), n = k(null), a = k(null), t = k(!1), o = k(!1), l = k(!1), i = k(!1), s = k(!1), u = k(void 0), d = k(0), v = k(0), f = k("hour"), m = k("am"), y = k(!1), g = k(!1), h = k({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ye({
      x: 0,
      y: 0
    }), O = Ye({
      x: [],
      y: []
    }), P = A(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (B) => {
      C(e["onUpdate:modelValue"], B), C(e.onChange, B);
    }, E = (B) => B * 57.29577951308232, I = (B) => {
      i.value = !1, g.value = !1, f.value = B;
    }, N = (B) => {
      var {
        disableHour: J
      } = a.value, q = Sr.findIndex((re) => z(re) === z(h.value.hour)), X = B === "am" ? Sr : ur, Z = [...X.slice(q), ...X.slice(0, q)];
      return Z.find((re, ce) => (o.value = ce !== 0, !J.includes(re)));
    }, b = (B) => {
      if (!e.readonly) {
        m.value = B;
        var J = N(B);
        if (J) {
          var q = e.useSeconds ? ":" + h.value.second : "", X = kn(J, 2, "0") + ":" + h.value.minute + q;
          S(X);
        }
      }
    }, $ = (B, J) => {
      var q = B >= O.x[0] && B <= O.x[1], X = J >= O.y[0] && J <= O.y[1];
      return q && X;
    }, U = (B) => {
      var J = e.format === "24hr" ? "HH" : "hh", {
        hour: q,
        minute: X,
        second: Z
      } = cr(B);
      return {
        hour: fe().hour(q).format(J),
        minute: fe().minute(X).format("mm"),
        second: fe().second(Z).format("ss")
      };
    }, D = (B) => {
      var J = B / 30;
      return J >= 0 ? J : J + 12;
    }, L = () => {
      var {
        width: B,
        height: J
      } = a.value.getSize(), q = w.x - B / 2 - 8, X = w.x + B / 2 + 8, Z = w.y - J / 2 - 8, re = w.y + J / 2 + 8;
      return {
        rangeXMin: q,
        rangeXMax: X,
        rangeYMin: Z,
        rangeYMax: re
      };
    }, K = (B, J, q) => {
      var {
        disableHour: X
      } = a.value;
      l.value = $(B, J);
      var Z = Math.round(q / 30) * 30 + 90, re = D(Z), ce = t.value ? Sr[re] : ur[re];
      if (X.includes(ce) || (t.value = e.format === "24hr" ? $(B, J) : !1), t.value === l.value) {
        var ke = t.value || m.value === "pm" ? ur[re] : Sr[re];
        y.value = X.includes(ke), !y.value && (u.value = Z, i.value = !0);
      }
    }, oe = (B) => {
      var {
        disableHour: J
      } = a.value, q = Math.round(B / 6) * 6 + 90, X = q / 6 >= 0 ? q / 6 : q / 6 + 60, Z = {
        time: X,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      g.value = Rv(Z), !g.value && (d.value = q, s.value = !0);
    }, _ = (B) => {
      var {
        disableHour: J
      } = a.value, q = Math.round(B / 6) * 6 + 90, X = q / 6 >= 0 ? q / 6 : q / 6 + 60, Z = {
        time: X,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        minute: z(h.value.minute),
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      Uv(Z) || (v.value = q);
    }, H = () => {
      var {
        left: B,
        top: J,
        width: q,
        height: X
      } = Qe(r.value);
      if (w.x = B + q / 2, w.y = J + X / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Z,
          rangeXMax: re,
          rangeYMin: ce,
          rangeYMax: ke
        } = L();
        O.x = [Z, re], O.y = [ce, ke];
      }
    }, F = (B) => {
      if (B.preventDefault(), !e.readonly) {
        H();
        var {
          clientX: J,
          clientY: q
        } = B.touches[0], X = J - w.x, Z = q - w.y, re = Math.round(E(Math.atan2(Z, X)));
        f.value === "hour" ? K(J, q, re) : f.value === "minute" ? oe(re) : _(re);
      }
    }, j = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, M = () => {
      o.value = !1;
    };
    return de(() => e.modelValue, (B) => {
      if (B) {
        var {
          hour: J,
          minute: q,
          second: X
        } = cr(B), Z = fe().hour(J).format("hh"), re = fe().hour(J).format("HH"), ce = fe().minute(q).format("mm"), ke = fe().second(X).format("ss");
        u.value = (Z === "12" ? 0 : z(Z)) * 30, d.value = z(ce) * 6, v.value = z(ke) * 6, h.value = U(B), e.format !== "24hr" && (m.value = kn("" + J, 2, "0") === re && ur.includes(re) ? "pm" : "am"), t.value = e.format === "24hr" && ur.includes(re);
      }
    }, {
      immediate: !0
    }), {
      n: VC,
      classes: NC,
      getRad: P,
      time: h,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: F,
      checkPanel: I,
      checkAmpm: b,
      end: j,
      update: S,
      changePreventUpdate: M,
      formatElevation: pr
    };
  }
});
Yv.render = LC;
const wt = Yv;
ie(wt);
var Bk = wt, RC = {
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
  multiple: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: [Number, String],
  maxsize: [Number, String],
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
  rules: Array,
  hideList: Boolean,
  onBeforeFilter: R(),
  onBeforeRead: R(),
  onAfterRead: R(),
  onBeforeRemove: R(),
  onRemove: R(),
  onOversize: R(),
  "onUpdate:modelValue": R()
};
function Ts(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Yo(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Ts(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ts(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: UC,
  classes: HC
} = ae("uploader"), YC = 0, FC = ["onClick"], jC = ["onClick"], WC = ["src", "alt"], GC = ["multiple", "accept", "capture", "disabled"], qC = ["src"];
function XC(e, r) {
  var n = ue("var-icon"), a = ue("var-hover-overlay"), t = ue("var-form-details"), o = ue("var-popup"), l = Le("ripple"), i = Le("hover");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [V(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), T(
        Ve,
        null,
        Ge(e.files, (s) => Te((p(), T("div", {
          class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
          key: s.id,
          onClick: (u) => e.preview(s)
        }, [V(
          "div",
          {
            class: c(e.n("file-name"))
          },
          le(s.name || s.url),
          3
          /* TEXT, CLASS */
        ), e.removable ? (p(), T("div", {
          key: 0,
          class: c(e.n("file-close")),
          onClick: Tr((u) => e.handleRemove(s), ["stop"])
        }, [x(n, {
          class: c(e.n("file-close-icon")),
          "var-uploader-cover": "",
          name: "delete"
        }, null, 8, ["class"])], 10, jC)) : ee("v-if", !0), s.cover ? (p(), T("img", {
          key: 1,
          class: c(e.n("file-cover")),
          style: W({
            objectFit: s.fit
          }),
          src: s.cover,
          alt: s.name
        }, null, 14, WC)) : ee("v-if", !0), V(
          "div",
          {
            class: c(e.n("file-indicator"))
          },
          [V(
            "div",
            {
              class: c(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
              style: W({
                width: s.state === "success" || s.state === "error" ? "100%" : s.progress + "%"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          2
          /* CLASS */
        )], 10, FC)), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Te((p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: r[1] || (r[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [V("input", {
          ref: "input",
          type: "file",
          class: c(e.n("action-input")),
          multiple: e.multiple,
          accept: e.accept,
          capture: e.capture,
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
          onChange: r[0] || (r[0] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        }, null, 42, GC), Y(e.$slots, "default", {}, () => [x(n, {
          class: c(e.n("action-icon")),
          "var-uploader-cover": "",
          name: "plus"
        }, null, 8, ["class"]), x(a, {
          hovering: e.hovering && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])])],
        2
        /* CLASS */
      )), [[l, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }], [i, e.handleHovering, "desktop"]]) : ee("v-if", !0)],
      2
      /* CLASS */
    ), x(t, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, _t({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: me(() => [Y(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]), x(o, {
      class: c(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      show: e.showPreview,
      "onUpdate:show": r[2] || (r[2] = (s) => e.showPreview = s),
      onClosed: r[3] || (r[3] = (s) => e.currentPreview = null)
    }, {
      default: me(() => {
        var s, u;
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), T("video", {
          key: 0,
          class: c(e.n("preview-video")),
          playsinline: "true",
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
          controls: "",
          src: (u = e.currentPreview) == null ? void 0 : u.url
        }, null, 10, qC)) : ee("v-if", !0)];
      }),
      _: 1
      /* STABLE */
    }, 8, ["class", "show"])],
    2
    /* CLASS */
  );
}
var Fv = ne({
  name: "VarUploader",
  directives: {
    Ripple: Xe,
    Hover: Dr
  },
  components: {
    VarIcon: Ae,
    VarPopup: Rr,
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  props: RC,
  setup(e) {
    var r = k(null), n = k(!1), a = k(null), t = A(() => {
      var {
        maxlength: F,
        modelValue: {
          length: j
        }
      } = e;
      return mr(F) ? j + " / " + F : "";
    }), {
      form: o,
      bindForm: l
    } = Ir(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Or(), {
      hovering: v,
      handleHovering: f
    } = qr(), m = A(() => {
      var {
        modelValue: F,
        hideList: j
      } = e;
      return j ? [] : F;
    }), y = (F) => {
      var {
        disabled: j,
        readonly: M,
        previewed: B
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || j || M || !B)) {
        var {
          url: J
        } = F;
        if (Je(J) && bl(J)) {
          zr(J);
          return;
        }
        Je(J) && yl(J) && (a.value = F, n.value = !0);
      }
    }, g = (F) => ({
      id: YC++,
      url: "",
      cover: "",
      name: F.name,
      file: F,
      progress: 0
    }), h = (F) => {
      var j = F.target, {
        files: M
      } = j;
      return Array.from(M);
    }, w = (F) => new Promise((j) => {
      if (!F.file.type.startsWith("image")) {
        j(F);
        return;
      }
      var M = new FileReader();
      M.onload = () => {
        var B = M.result;
        F.cover = B, F.url = B, j(F);
      }, M.readAsDataURL(F.file);
    }), O = (F) => F.map(w), P = (F) => {
      var {
        onBeforeRead: j
      } = e;
      return F.map((M) => new Promise((B) => {
        j || B({
          valid: !0,
          varFile: M
        });
        var J = Gt(C(j, Ye(M)));
        Promise.all(J).then((q) => {
          B({
            valid: q.every(Boolean),
            varFile: M
          });
        });
      }));
    }, S = /* @__PURE__ */ function() {
      var F = Yo(function* (j) {
        var {
          maxsize: M,
          maxlength: B,
          modelValue: J,
          onOversize: q,
          onAfterRead: X,
          onBeforeFilter: Z,
          readonly: re,
          disabled: ce
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || ce || re)) {
          var ke = (Re) => Re.filter((Fe) => Fe.file.size > z(M) ? (C(q, Ye(Fe)), !1) : !0), Ee = (Re) => {
            var Fe = Math.min(Re.length, z(B) - J.length);
            return Re.slice(0, Fe);
          }, se = /* @__PURE__ */ function() {
            var Re = Yo(function* (Fe) {
              if (!Z)
                return Fe;
              var ve = Gt(Z);
              for (var we of ve)
                Fe = yield we(Fe);
              return Fe;
            });
            return function(ve) {
              return Re.apply(this, arguments);
            };
          }(), G = h(j), te = G.map(g);
          te = yield se(te), te = M != null ? ke(te) : te, te = B != null ? Ee(te) : te;
          var ge = yield Promise.all(O(te)), Me = yield Promise.all(P(ge)), Oe = Me.filter((Re) => {
            var {
              valid: Fe
            } = Re;
            return Fe;
          }).map((Re) => {
            var {
              varFile: Fe
            } = Re;
            return Fe;
          });
          C(e["onUpdate:modelValue"], [...J, ...Oe]), j.target.value = "", Oe.forEach((Re) => C(X, Ye(Re)));
        }
      });
      return function(M) {
        return F.apply(this, arguments);
      };
    }(), E = /* @__PURE__ */ function() {
      var F = Yo(function* (j) {
        var {
          disabled: M,
          readonly: B,
          modelValue: J,
          onBeforeRemove: q,
          onRemove: X
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || M || B)) {
          if (q) {
            var Z = Gt(C(q, Ye(j)));
            if ((yield Promise.all(Z)).some((ce) => !ce))
              return;
          }
          var re = J.filter((ce) => ce !== j);
          C(X, Ye(j)), L("onRemove"), C(e["onUpdate:modelValue"], re);
        }
      });
      return function(M) {
        return F.apply(this, arguments);
      };
    }(), I = () => e.modelValue.filter((F) => F.state === "success"), N = () => e.modelValue.filter((F) => F.state === "error"), b = () => e.modelValue.filter((F) => F.state === "loading"), $ = () => {
      r.value.click();
    }, U = () => {
      a.value = null, n.value = !1, zr.close();
    }, D = {
      getSuccess: I,
      getError: N,
      getLoading: b
    }, L = (F) => {
      Ue(() => {
        var {
          validateTrigger: j,
          rules: M,
          modelValue: B
        } = e;
        s(j, F, M, B, D);
      });
    }, K = !1, oe = () => u(e.rules, e.modelValue, D), _ = () => {
      K = !0, C(e["onUpdate:modelValue"], []), d();
    }, H = {
      validate: oe,
      resetValidation: d,
      reset: _
    };
    return C(l, H), de(() => e.modelValue, () => {
      !K && L("onChange"), K = !1;
    }, {
      deep: !0
    }), {
      n: UC,
      classes: HC,
      formatElevation: pr,
      input: r,
      files: m,
      showPreview: n,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      hovering: v,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      toNumber: z,
      handleHovering: f,
      isHTMLSupportVideo: yl,
      isHTMLSupportImage: bl,
      preview: y,
      handleChange: S,
      handleRemove: E,
      getSuccess: I,
      getError: N,
      getLoading: b,
      validate: oe,
      resetValidation: d,
      reset: _,
      chooseFile: $,
      closePreview: U,
      toSizeUnit: Ce
    };
  }
});
Fv.render = XC;
const Ct = Fv;
ie(Ct);
var Ek = Ct, KC = {
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  },
  content: String,
  image: String,
  rotate: {
    type: Number,
    default: -22
  },
  offsetX: {
    type: Number,
    default: 0
  },
  offsetY: {
    type: Number,
    default: 0
  },
  gapX: {
    type: Number,
    default: 0
  },
  gapY: {
    type: Number,
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 10
  },
  opacity: {
    type: [Number, String],
    default: 0.5
  },
  fullscreen: Boolean,
  font: {
    type: Object,
    default: () => ({
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      fontSize: 14
    })
  }
};
function Ps(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Os(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Ps(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ps(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Vi() {
  return Vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Vi.apply(this, arguments);
}
var {
  n: ZC,
  classes: JC
} = ae("watermark"), QC = {
  ref: "svgRef"
}, _C = ["viewBox", "width", "height"], xC = ["width", "height"], eS = ["href", "xlink:href", "x", "y", "width", "height"];
function rS(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default"), (p(), Se(Zr, {
      to: "body",
      disabled: !e.fullscreen
    }, [V(
      "div",
      {
        ref: "containerRef",
        class: c(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
        style: W({
          backgroundImage: "url(" + e.watermarkUrl + ")",
          zIndex: e.zIndex
        })
      },
      [Te(V(
        "div",
        QC,
        [(p(), T("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          viewBox: "0 0 " + (e.width + e.gapX) + " " + (e.height + e.gapY),
          width: "" + (e.width + e.gapX),
          height: "" + (e.height + e.gapY),
          style: W({
            padding: "0 " + e.gapX + "px " + e.gapY + "px 0",
            opacity: e.opacity
          })
        }, [e.showContent() ? (p(), T("foreignObject", {
          key: 0,
          x: "0",
          y: "0",
          width: e.width,
          height: e.height
        }, [V(
          "div",
          {
            xmlns: "http://www.w3.org/1999/xhtml",
            style: W({
              transform: "translate(" + e.offsetX + "px, " + e.offsetY + "px) rotate(" + e.rotate + "deg)",
              transformOrigin: "center"
            })
          },
          [Y(e.$slots, "content", {}, () => [V(
            "span",
            {
              style: W(Vi({}, e.font, {
                fontSize: e.font.fontSize + "px",
                color: e.textColor
              }))
            },
            le(e.content),
            5
            /* TEXT, STYLE */
          )])],
          4
          /* STYLE */
        )], 8, xC)) : ee("v-if", !0), !e.$slots.content && e.image ? (p(), T("image", {
          key: 1,
          href: e.imageUrl,
          "xlink:href": e.imageUrl,
          x: e.offsetX,
          y: e.offsetY,
          width: e.width,
          height: e.height,
          style: W({
            transform: "rotate(" + e.rotate + "deg)",
            transformOrigin: "center"
          })
        }, null, 12, eS)) : ee("v-if", !0)], 12, _C))],
        512
        /* NEED_PATCH */
      ), [[Lr, !1]])],
      6
      /* CLASS, STYLE */
    )], 8, ["disabled"]))],
    2
    /* CLASS */
  );
}
var jv = ne({
  name: "VarWatermark",
  props: KC,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(""), t = k(""), o = k(""), l = k(null), i = k(null), s = () => !!(n.content || e.content && !e.image), u = /* @__PURE__ */ function() {
      var m = Os(function* () {
        return new Promise((y) => {
          var g = document.createElement("canvas"), h = g.getContext("2d"), w = new Image();
          w.crossOrigin = "anonymous", w.referrerPolicy = "no-referrer", w.src = e.image, w.onload = () => {
            g.width = w.width, g.height = w.height, h.drawImage(w, 0, 0), y(g.toDataURL());
          };
        });
      });
      return function() {
        return m.apply(this, arguments);
      };
    }(), d = (m) => {
      var y = new Blob([m], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(y);
    }, v = () => {
      a.value && URL.revokeObjectURL(a.value);
    }, f = /* @__PURE__ */ function() {
      var m = Os(function* () {
        o.value = Vn(i.value).color, e.image && (t.value = yield u()), yield Ue(), v(), a.value = d(l.value.innerHTML);
      });
      return function() {
        return m.apply(this, arguments);
      };
    }();
    return de(() => [e.image, e.font, e.content, e.height, e.width, e.rotate, e.gapX, e.gapY, e.offsetX, e.offsetY, e.opacity], f, {
      deep: !0
    }), kt(f), $t(v), {
      n: ZC,
      classes: JC,
      svgRef: l,
      containerRef: i,
      watermarkUrl: a,
      imageUrl: t,
      textColor: o,
      showContent: s,
      resize: f
    };
  }
});
jv.render = rS;
const St = jv;
ie(St);
var Vk = St;
const nS = "2.16.1";
function aS(e) {
  Gr.install && e.use(Gr), wa.install && e.use(wa), Sa.install && e.use(Sa), ka.install && e.use(ka), $a.install && e.use($a), Fn.install && e.use(Fn), Ta.install && e.use(Ta), Pa.install && e.use(Pa), Oa.install && e.use(Oa), Ia.install && e.use(Ia), vr.install && e.use(vr), Ma.install && e.use(Ma), Ba.install && e.use(Ba), jn.install && e.use(jn), Wn.install && e.use(Wn), Ea.install && e.use(Ea), Gn.install && e.use(Gn), Va.install && e.use(Va), Na.install && e.use(Na), Da.install && e.use(Da), yr.install && e.use(yr), Aa.install && e.use(Aa), La.install && e.use(La), Ra.install && e.use(Ra), Xr.install && e.use(Xr), Ua.install && e.use(Ua), Kn.install && e.use(Kn), Fa.install && e.use(Fa), ja.install && e.use(ja), Pn.install && e.use(Pn), nr.install && e.use(nr), Dr.install && e.use(Dr), wr.install && e.use(wr), Ae.install && e.use(Ae), Wa.install && e.use(Wa), zr.install && e.use(zr), Ga.install && e.use(Ga), qa.install && e.use(qa), _n.install && e.use(_n), Ca.install && e.use(Ca), Xa.install && e.use(Xa), Ka.install && e.use(Ka), fn.install && e.use(fn), $i.install && e.use($i), Ko.install && e.use(Ko), Bn.install && e.use(Bn), Za.install && e.use(Za), Ja.install && e.use(Ja), Qa.install && e.use(Qa), _a.install && e.use(_a), En.install && e.use(En), Rr.install && e.use(Rr), xa.install && e.use(xa), et.install && e.use(et), rt.install && e.use(rt), nt.install && e.use(nt), at.install && e.use(at), tt.install && e.use(tt), Xe.install && e.use(Xe), ot.install && e.use(ot), it.install && e.use(it), lt.install && e.use(lt), st.install && e.use(st), Mi.install && e.use(Mi), dt.install && e.use(dt), vt.install && e.use(vt), ft.install && e.use(ft), Mn.install && e.use(Mn), ct.install && e.use(ct), On.install && e.use(On), In.install && e.use(In), mt.install && e.use(mt), ht.install && e.use(ht), pt.install && e.use(pt), gt.install && e.use(gt), bt.install && e.use(bt), yt.install && e.use(yt), Ei.install && e.use(Ei), wt.install && e.use(wt), Qn.install && e.use(Qn), Ct.install && e.use(Ct), St.install && e.use(St);
}
const Nk = {
  version: nS,
  install: aS,
  ActionSheet: Gr,
  AppBar: wa,
  Avatar: Sa,
  AvatarGroup: ka,
  BackTop: $a,
  Badge: Fn,
  BottomNavigation: Ta,
  BottomNavigationItem: Pa,
  Breadcrumb: Oa,
  Breadcrumbs: Ia,
  Button: vr,
  ButtonGroup: Ma,
  Card: Ba,
  Cell: jn,
  Checkbox: Wn,
  CheckboxGroup: Ea,
  Chip: Gn,
  Col: Va,
  Collapse: Na,
  CollapseItem: Da,
  Context: yr,
  Countdown: Aa,
  Counter: La,
  DatePicker: Ra,
  Dialog: Xr,
  Divider: Ua,
  Drag: Kn,
  Ellipsis: Fa,
  Fab: ja,
  Form: Pn,
  FormDetails: nr,
  Hover: Dr,
  HoverOverlay: wr,
  Icon: Ae,
  Image: Wa,
  ImagePreview: zr,
  IndexAnchor: Ga,
  IndexBar: qa,
  Input: _n,
  Lazy: Ca,
  Link: Xa,
  List: Ka,
  Loading: fn,
  LoadingBar: $i,
  Locale: Ko,
  Menu: Bn,
  Option: Za,
  Overlay: Ja,
  Pagination: Qa,
  Paper: _a,
  Picker: En,
  Popup: Rr,
  Progress: xa,
  PullRefresh: et,
  Radio: rt,
  RadioGroup: nt,
  Rate: at,
  Result: tt,
  Ripple: Xe,
  Row: ot,
  Select: it,
  Skeleton: lt,
  Slider: st,
  Snackbar: Mi,
  Space: dt,
  Step: vt,
  Steps: ft,
  Sticky: Mn,
  StyleProvider: ct,
  Swipe: On,
  SwipeItem: In,
  Switch: mt,
  Tab: ht,
  TabItem: pt,
  Table: gt,
  Tabs: bt,
  TabsItems: yt,
  Themes: Ei,
  TimePicker: wt,
  Tooltip: Qn,
  Uploader: Ct,
  Watermark: St
};
export {
  Gr as ActionSheet,
  wa as AppBar,
  Sa as Avatar,
  ka as AvatarGroup,
  $a as BackTop,
  Fn as Badge,
  Ta as BottomNavigation,
  Pa as BottomNavigationItem,
  Oa as Breadcrumb,
  Ia as Breadcrumbs,
  vr as Button,
  Ma as ButtonGroup,
  Ba as Card,
  jn as Cell,
  Wn as Checkbox,
  Ea as CheckboxGroup,
  Gn as Chip,
  Va as Col,
  Na as Collapse,
  Da as CollapseItem,
  yr as Context,
  Aa as Countdown,
  La as Counter,
  Ra as DatePicker,
  Xr as Dialog,
  Ua as Divider,
  Kn as Drag,
  Fa as Ellipsis,
  ja as Fab,
  Pn as Form,
  nr as FormDetails,
  Dr as Hover,
  wr as HoverOverlay,
  Ae as Icon,
  Wa as Image,
  zr as ImagePreview,
  Ga as IndexAnchor,
  qa as IndexBar,
  _n as Input,
  Ca as Lazy,
  Xa as Link,
  Ka as List,
  fn as Loading,
  $i as LoadingBar,
  Ko as Locale,
  Bn as Menu,
  Za as Option,
  Ja as Overlay,
  Qo as PIXEL,
  Qa as Pagination,
  _a as Paper,
  En as Picker,
  Rr as Popup,
  xa as Progress,
  et as PullRefresh,
  rt as Radio,
  nt as RadioGroup,
  at as Rate,
  tt as Result,
  Xe as Ripple,
  ot as Row,
  $v as SNACKBAR_TYPE,
  it as Select,
  lt as Skeleton,
  st as Slider,
  Mi as Snackbar,
  dt as Space,
  vt as Step,
  ft as Steps,
  Mn as Sticky,
  ct as StyleProvider,
  On as Swipe,
  In as SwipeItem,
  mt as Switch,
  ht as Tab,
  pt as TabItem,
  gt as Table,
  bt as Tabs,
  yt as TabsItems,
  Ei as Themes,
  wt as TimePicker,
  Qn as Tooltip,
  Ct as Uploader,
  St as Watermark,
  dS as _ActionSheetComponent,
  vS as _AppBarComponent,
  cS as _AvatarComponent,
  mS as _AvatarGroupComponent,
  yS as _BackTopComponent,
  wS as _BadgeComponent,
  CS as _BottomNavigationComponent,
  SS as _BottomNavigationItemComponent,
  kS as _BreadcrumbComponent,
  $S as _BreadcrumbsComponent,
  bS as _ButtonComponent,
  TS as _ButtonGroupComponent,
  PS as _CardComponent,
  OS as _CellComponent,
  MS as _CheckboxComponent,
  BS as _CheckboxGroupComponent,
  ES as _ChipComponent,
  VS as _ColComponent,
  NS as _CollapseComponent,
  DS as _CollapseItemComponent,
  oS as _ContextComponent,
  AS as _CountdownComponent,
  zS as _CounterComponent,
  LS as _DatePickerComponent,
  RS as _DialogComponent,
  US as _DividerComponent,
  HS as _DragComponent,
  FS as _EllipsisComponent,
  jS as _FabComponent,
  WS as _FormComponent,
  IS as _FormDetailsComponent,
  gS as _HoverComponent,
  pS as _HoverOverlayComponent,
  sS as _IconComponent,
  GS as _ImageComponent,
  KS as _ImagePreviewComponent,
  JS as _IndexAnchorComponent,
  QS as _IndexBarComponent,
  _S as _InputComponent,
  fS as _LazyComponent,
  xS as _LinkComponent,
  ek as _ListComponent,
  rk as _LoadingBarComponent,
  hS as _LoadingComponent,
  uS as _LocaleComponent,
  nk as _MenuComponent,
  ak as _OptionComponent,
  tk as _OverlayComponent,
  ok as _PaginationComponent,
  ik as _PaperComponent,
  lk as _PickerComponent,
  lS as _PopupComponent,
  sk as _ProgressComponent,
  uk as _PullRefreshComponent,
  dk as _RadioComponent,
  vk as _RadioGroupComponent,
  fk as _RateComponent,
  ck as _ResultComponent,
  iS as _RippleComponent,
  mk as _RowComponent,
  hk as _SelectComponent,
  pk as _SkeletonComponent,
  gk as _SliderComponent,
  bk as _SnackbarComponent,
  yk as _SpaceComponent,
  wk as _StepComponent,
  Ck as _StepsComponent,
  ZS as _StickyComponent,
  Sk as _StyleProviderComponent,
  qS as _SwipeComponent,
  XS as _SwipeItemComponent,
  kk as _SwitchComponent,
  $k as _TabComponent,
  Tk as _TabItemComponent,
  Pk as _TableComponent,
  Ok as _TabsComponent,
  Ik as _TabsItemsComponent,
  Mk as _ThemesComponent,
  Bk as _TimePickerComponent,
  YS as _TooltipComponent,
  Ek as _UploaderComponent,
  Vk as _WatermarkComponent,
  Df as actionSheetProps,
  Hi as add,
  Yf as appBarProps,
  fc as avatarGroupProps,
  oc as avatarProps,
  Uc as backTopProps,
  jc as badgeProps,
  xc as bottomNavigationItemProps,
  Xc as bottomNavigationProps,
  om as breadcrumbProps,
  vm as breadcrumbsProps,
  Vc as buttonProps,
  bm as cardProps,
  $m as cellProps,
  Hm as checkboxGroupProps,
  Nm as checkboxProps,
  Wm as chipProps,
  Xm as colProps,
  ah as collapseItemProps,
  xm as collapseProps,
  lh as countdownProps,
  ap as counterProps,
  kp as datePickerProps,
  Nk as default,
  Ke as defaultLazyOptions,
  Hp as dialogProps,
  Gp as dividerProps,
  Zp as dragProps,
  Js as enUS,
  Im as formDetailsProps,
  hb as formProps,
  Hs as iconProps,
  ru as imageCache,
  Db as imagePreviewProps,
  bb as imageProps,
  Xb as indexAnchorProps,
  Qb as indexBarProps,
  o0 as inputProps,
  aS as install,
  f0 as linkProps,
  p0 as listProps,
  T0 as loadingBarProps,
  tn as loadingProps,
  D0 as menuProps,
  _s as merge,
  H0 as optionProps,
  W0 as overlayProps,
  _e as pack,
  Qs as packs,
  q0 as paginationProps,
  Q0 as paperProps,
  ry as pickerProps,
  Mt as popupProps,
  dy as progressProps,
  gy as pullRefreshProps,
  Py as radioGroupProps,
  wy as radioProps,
  By as rateProps,
  c1 as resultProps,
  g1 as rowProps,
  C1 as selectProps,
  P1 as skeletonProps,
  B1 as sliderProps,
  wv as snackbarProps,
  Z1 as spaceProps,
  x1 as stepProps,
  iw as stepsProps,
  Qt as stickyProps,
  uw as styleProviderProps,
  Md as swipeProps,
  fw as switchProps,
  $w as tabItemProps,
  yw as tabProps,
  Iw as tableProps,
  zw as tabsItemsProps,
  Vw as tabsProps,
  OC as timePickerProps,
  tb as tooltipProps,
  RC as uploaderProps,
  Yi as use,
  qr as useHoverOverlay,
  Ui as useLocale,
  nS as version,
  Ri as zhCN
};
