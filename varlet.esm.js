import { reactive as je, onMounted as So, nextTick as Fe, onActivated as pt, isRef as Yv, watch as fe, onBeforeUnmount as hr, onDeactivated as qt, onUnmounted as Co, inject as jv, getCurrentInstance as Gt, computed as V, ref as S, unref as no, provide as Wv, isVNode as qv, Comment as Gv, Fragment as Be, createApp as Xv, h as bd, onBeforeMount as Kv, defineComponent as ne, createVNode as J, Teleport as Kn, Transition as Ye, withDirectives as Oe, vShow as Rn, mergeProps as Ne, openBlock as h, createBlock as Se, resolveDynamicComponent as Xt, normalizeClass as v, normalizeStyle as F, resolveComponent as ae, resolveDirective as Le, withCtx as ve, createElementVNode as N, renderSlot as R, toDisplayString as re, createElementBlock as w, renderList as qe, createCommentVNode as Q, onUpdated as ko, createTextVNode as Te, pushScopeId as ht, popScopeId as gt, withModifiers as On, normalizeProps as st, guardReactiveProps as Po, vModelText as Zv, createSlots as xo, withKeys as rl, toRaw as al, TransitionGroup as Jv } from "vue";
const yd = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, qT = je(yd);
var wn = je(yd), Qv = Object.defineProperty, _v = Object.defineProperties, xv = Object.getOwnPropertyDescriptors, il = Object.getOwnPropertySymbols, em = Object.prototype.hasOwnProperty, nm = Object.prototype.propertyIsEnumerable, sl = (e, n, t) => n in e ? Qv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, tm = (e, n) => {
  for (var t in n || (n = {}))
    em.call(n, t) && sl(e, t, n[t]);
  if (il)
    for (var t of il(n))
      nm.call(n, t) && sl(e, t, n[t]);
  return e;
}, om = (e, n) => _v(e, xv(n)), Qe = (e) => typeof e == "string", hi = (e) => typeof e == "boolean", vn = (e) => typeof e == "number", io = (e) => Object.prototype.toString.call(e) === "[object Object]", rm = (e) => typeof e == "object" && e !== null, Kt = (e) => typeof e == "function", Me = (e) => Array.isArray(e), am = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Yn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, gi = (e) => e === window, im = () => bt() && "ontouchstart" in window, A = (e) => e == null ? 0 : Qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : hi(e) ? Number(e) : e, er = (e, n) => {
  if (e.length) {
    const t = e.indexOf(n);
    if (t > -1)
      return e.splice(t, 1);
  }
}, bi = (e, n = 200) => {
  let t, o = 0;
  return function r(...a) {
    const i = Date.now(), s = i - o;
    o || (o = i), t && window.clearTimeout(t), s >= n ? (e.apply(this, a), o = i) : t = window.setTimeout(() => {
      r.apply(this, a);
    }, n - s);
  };
}, bt = () => typeof window < "u", ll = (e) => [...new Set(e)], sm = (e) => yi(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), yi = (e) => e.replace(/-(\w)/g, (n, t) => t.toUpperCase()), $d = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), lm = (e, n, t = "start") => {
  let o = t === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && o >= 0 && o <= e.length - 1; ) {
    if (n(e[o], o, e))
      return [e[o], o];
    t === "start" ? o++ : o--;
  }
  return [null, -1];
}, Go = (e) => Me(e) ? e : [e], ut = (e, n, t) => Math.min(t, Math.max(n, e)), um = (e, n) => ut(e, 0, n.length - 1), wd = () => typeof globalThis < "u" ? globalThis : bt() ? window : typeof global < "u" ? global : self, so = (e) => {
  const n = wd();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, ul = (e) => {
  const n = wd();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, Xo = () => new Promise((e) => {
  so(e);
}), dn = () => new Promise((e) => {
  so(() => {
    so(e);
  });
}), Tt = (e) => window.getComputedStyle(e), _e = (e) => {
  if (gi(e)) {
    const n = e.innerWidth, t = e.innerHeight, o = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: n,
      bottom: t,
      width: n,
      height: t
    };
    return om(tm({}, o), {
      toJSON: () => o
    });
  }
  return e.getBoundingClientRect();
}, dm = (e) => {
  const { top: n, bottom: t, left: o, right: r } = _e(e), { width: a, height: i } = _e(window), s = o <= a && r >= 0, l = n <= i && t >= 0;
  return s && l;
}, cm = Object.defineProperty, nr = Object.getOwnPropertySymbols, Sd = Object.prototype.hasOwnProperty, Cd = Object.prototype.propertyIsEnumerable, dl = (e, n, t) => n in e ? cm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, fm = (e, n) => {
  for (var t in n || (n = {}))
    Sd.call(n, t) && dl(e, t, n[t]);
  if (nr)
    for (var t of nr(n))
      Cd.call(n, t) && dl(e, t, n[t]);
  return e;
}, vm = (e, n) => {
  var t = {};
  for (var o in e)
    Sd.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && nr)
    for (var o of nr(e))
      n.indexOf(o) < 0 && Cd.call(e, o) && (t[o] = e[o]);
  return t;
};
function rn(e) {
  let n = !1;
  So(() => {
    e(), Fe(() => {
      n = !0;
    });
  }), pt(() => {
    n && e();
  });
}
function dt(e, n, t, o = {}) {
  if (!bt())
    return;
  const { passive: r = !1, capture: a = !1 } = o;
  let i = !1, s = !1;
  const l = (m) => Kt(m) ? m() : no(m), u = (m) => {
    if (i || s)
      return;
    const b = l(m);
    b && (b.addEventListener(n, t, {
      passive: r,
      capture: a
    }), i = !0);
  }, d = (m) => {
    if (!i || s)
      return;
    const b = l(m);
    b && (b.removeEventListener(n, t, {
      capture: a
    }), i = !1);
  };
  let c;
  Yv(e) && (c = fe(
    () => e.value,
    (m, b) => {
      d(b), u(m);
    }
  ));
  const f = () => {
    c == null || c(), d(e), s = !0;
  };
  return rn(() => {
    u(e);
  }), hr(() => {
    d(e);
  }), qt(() => {
    d(e);
  }), f;
}
function kd(e, n, t) {
  if (!bt())
    return;
  dt(document, n, (r) => {
    const a = Kt(e) ? e() : no(e);
    a && !a.contains(r.target) && t(r);
  });
}
function gr(e) {
  Co(() => {
    e();
  }), qt(() => {
    e();
  });
}
function mm(e) {
  const n = Gt();
  return e in n.provides;
}
function an(e) {
  if (!mm(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const t = jv(e), { childInstances: o, collect: r, clear: a } = t, i = vm(t, ["childInstances", "collect", "clear"]), s = Gt();
  return {
    index: V(() => o.indexOf(s)),
    parentProvider: i,
    bindParent: (d) => {
      So(() => {
        Fe().then(() => {
          r(s, d);
        });
      }), hr(() => {
        Fe().then(() => {
          a(s, d);
        });
      });
    }
  };
}
function pm(e) {
  const n = [], t = (o) => {
    if (o != null && o.component) {
      t(o == null ? void 0 : o.component.subTree);
      return;
    }
    Array.isArray(o == null ? void 0 : o.children) && o.children.forEach((r) => {
      qv(r) && (n.push(r), t(r));
    });
  };
  return t(e), n;
}
function sn(e) {
  const n = Gt(), t = je([]), o = [], r = V(() => t.length), a = () => {
    const u = pm(n.subTree);
    t.sort((d, c) => u.indexOf(d.vnode) - u.indexOf(c.vnode));
  }, i = (u, d) => {
    t.push(u), o.push(d), a();
  }, s = (u, d) => {
    er(t, u), er(o, d);
  };
  return {
    length: r,
    childProviders: o,
    bindChildren: (u) => {
      Wv(e, fm({
        childInstances: t,
        collect: i,
        clear: s
      }, u));
    }
  };
}
function Oo(e) {
  dt(() => window, "resize", e, { passive: !0 }), dt(() => window, "orientationchange", e, { passive: !0 });
}
function hm(e, n) {
  const t = S(!1);
  return fe(
    e,
    (o) => {
      n === o && (t.value = !0);
    },
    { immediate: !0 }
  ), t;
}
function gm(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function br() {
  const e = S(0), n = S(0), t = S(0), o = S(0), r = S(0), a = S(0), i = S(0), s = S(0), l = S(0), u = S(0), d = S(), c = S(!1), f = S(!1), m = S(0), b = S(0);
  let p = null;
  const g = () => {
    e.value = 0, n.value = 0, t.value = 0, o.value = 0, r.value = 0, a.value = 0, i.value = 0, s.value = 0, l.value = 0, u.value = 0, d.value = void 0, c.value = !1, f.value = !1, m.value = 0, b.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: t,
    deltaY: o,
    offsetX: r,
    offsetY: a,
    prevX: i,
    prevY: s,
    moveX: l,
    moveY: u,
    direction: d,
    touching: c,
    dragging: f,
    startTime: m,
    distance: b,
    resetTouch: g,
    startTouch: ($) => {
      g();
      const { clientX: C, clientY: I } = $.touches[0];
      e.value = C, n.value = I, i.value = C, s.value = I, c.value = !0, m.value = performance.now(), f.value = !1, p && window.cancelAnimationFrame(p);
    },
    moveTouch: ($) => {
      const { clientX: C, clientY: I } = $.touches[0];
      f.value = !0, t.value = C - e.value, o.value = I - n.value, r.value = Math.abs(t.value), a.value = Math.abs(o.value), b.value = Math.sqrt(r.value ** 2 + a.value ** 2), l.value = C - i.value, u.value = I - s.value, d.value || (d.value = gm(r.value, a.value)), i.value = C, s.value = I;
    },
    endTouch: () => {
      c.value = !1, p = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    }
  };
}
function Pd() {
  const e = S(), n = Gt(), t = $d(n.type.name);
  return e.value = process.env.NODE_ENV === "test" ? `${t}-mock-id` : `${t}-${n.uid}`, e;
}
var bm = Object.defineProperty, cl = Object.getOwnPropertySymbols, ym = Object.prototype.hasOwnProperty, $m = Object.prototype.propertyIsEnumerable, fl = (e, n, t) => n in e ? bm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, vl = (e, n) => {
  for (var t in n || (n = {}))
    ym.call(n, t) && fl(e, t, n[t]);
  if (cl)
    for (var t of cl(n))
      $m.call(n, t) && fl(e, t, n[t]);
  return e;
}, ml = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
function en(e, n) {
  return Array.isArray(n) ? n.reduce((t, o) => (t[o] = e[o], t), {}) : e[n];
}
function oe(e, n) {
  const t = n ?? e;
  return t.install = function(o) {
    const { name: r } = e;
    r && o.component(r, e);
  }, t;
}
function wm(e) {
  const n = Xv(e), t = document.createElement("div");
  return document.body.appendChild(t), {
    instance: n.mount(t),
    unmount() {
      n.unmount(), document.body.removeChild(t);
    }
  };
}
function Zt(e, n = {}, t = {}) {
  const o = {
    setup() {
      return () => bd(e, vl(vl({}, n), t));
    }
  }, { unmount: r } = wm(o);
  return { unmountInstance: r };
}
function Od(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.type !== Gv) {
      if (t.type === Be && Me(t.children)) {
        t.children.forEach((o) => {
          n.push(o);
        });
        return;
      }
      n.push(t);
    }
  }), n;
}
function In() {
  const e = S(""), n = (r, a, i) => ml(this, null, function* () {
    return !Me(r) || !r.length ? !0 : !(yield Promise.all(r.map((l) => l(a, i)))).some((l) => l !== !0 ? (e.value = String(l), !0) : !1);
  });
  return {
    errorMessage: e,
    validate: n,
    resetValidation: () => {
      e.value = "";
    },
    validateWithTrigger: (r, a, i, s, l) => ml(this, null, function* () {
      r.includes(a) && (yield n(i, s, l)) && (e.value = "");
    })
  };
}
function Sm(e) {
  dt(() => window, "hashchange", e), dt(() => window, "popstate", e);
}
function Jt() {
  const e = S(!1);
  return pt(() => {
    e.value = !1;
  }), qt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function te(e) {
  const n = "var", t = `${n}-${e}`, o = (a) => a ? a[0] === "$" ? a.replace("$", n) : a.startsWith("--") ? `${t}${a}` : `${t}__${a}` : t, r = (...a) => a.map((i) => {
    if (Me(i)) {
      const [s, l, u = null] = i;
      return s ? l : u;
    }
    return i;
  });
  return {
    name: sm(t),
    n: o,
    classes: r
  };
}
function y(e, ...n) {
  if (Me(e))
    return e.map((t) => t(...n));
  if (e)
    return e(...n);
}
function z(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function gn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
function lo(e, n, t = {}) {
  const { passive: o = !0, eventName: r, defaultValue: a, emit: i } = t, s = r ?? `onUpdate:${n.toString()}`, l = () => e[n] != null ? e[n] : a;
  if (!o)
    return V({
      get() {
        return l();
      },
      set(d) {
        i ? i(s, d) : y(e[s], d);
      }
    });
  const u = S(l());
  return fe(
    () => e[n],
    () => {
      u.value = l();
    }
  ), fe(
    () => u.value,
    (d) => {
      i ? i(s, d) : y(e[s], d);
    }
  ), u;
}
var Cm = Object.defineProperty, km = Object.defineProperties, Pm = Object.getOwnPropertyDescriptors, pl = Object.getOwnPropertySymbols, Om = Object.prototype.hasOwnProperty, Tm = Object.prototype.propertyIsEnumerable, hl = (e, n, t) => n in e ? Cm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Td = (e, n) => {
  for (var t in n || (n = {}))
    Om.call(n, t) && hl(e, t, n[t]);
  if (pl)
    for (var t of pl(n))
      Tm.call(n, t) && hl(e, t, n[t]);
  return e;
}, Em = (e, n) => km(e, Pm(n));
const { n: Ed } = te("ripple"), gl = 250;
function Im(e) {
  const { zIndex: n, position: t } = Tt(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", t === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Mm(e, n) {
  const { top: t, left: o } = _e(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, s = i * 2, l = n.touches[0].clientX - o, u = n.touches[0].clientY - t, d = (r - i * 2) / 2, c = (a - i * 2) / 2, f = l - i, m = u - i;
  return { x: f, y: m, centerX: d, centerY: c, size: s };
}
function Id(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !wn.enableRipple)
    return;
  const t = () => {
    n.tasker = null;
    const { x: o, y: r, centerX: a, centerY: i, size: s } = Mm(this, e), l = document.createElement("div");
    l.classList.add(Ed()), l.style.opacity = "0", l.style.transform = `translate(${o}px, ${r}px) scale3d(.3, .3, .3)`, l.style.width = `${s}px`, l.style.height = `${s}px`, n.color && (l.style.backgroundColor = n.color), l.dataset.createdAt = String(performance.now()), Im(this), this.appendChild(l), window.setTimeout(() => {
      l.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, l.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(t, 30);
}
function Kr() {
  const e = this._ripple, n = () => {
    const t = this.querySelectorAll(`.${Ed()}`);
    if (!t.length)
      return;
    const o = t[t.length - 1], r = gl - performance.now() + Number(o.dataset.createdAt);
    window.setTimeout(() => {
      o.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = o.parentNode) == null ? void 0 : a.removeChild(o);
      }, gl);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Md() {
  if (!im() || !wn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
function Dm(e, n) {
  var t;
  e._ripple = Em(Td({
    tasker: null
  }, (t = n.value) != null ? t : {}), {
    removeRipple: Kr.bind(e)
  }), e.addEventListener("touchstart", Id, { passive: !0 }), e.addEventListener("touchmove", Md, { passive: !0 }), e.addEventListener("dragstart", Kr, { passive: !0 }), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 });
}
function Bm(e) {
  e.removeEventListener("touchstart", Id), e.removeEventListener("touchmove", Md), e.removeEventListener("dragstart", Kr), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Nm(e, n) {
  var t, o, r, a, i, s;
  const l = {
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  };
  (l.color !== ((r = e._ripple) == null ? void 0 : r.color) || l.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = Td({
    tasker: l.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (s = e._ripple) == null ? void 0 : s.removeRipple
  }, l));
}
const Dd = {
  mounted: Dm,
  unmounted: Bm,
  updated: Nm,
  install(e) {
    e.directive("ripple", this);
  }
}, GT = Dd;
var Ke = Dd;
const To = {
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
  onOpen: z(),
  onOpened: z(),
  onClose: z(),
  onClosed: z(),
  onClickOverlay: z(),
  "onUpdate:show": z(),
  // internal for Dialog
  onRouteChange: z()
};
function Bd() {
  Object.keys(wn.locks).length <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function zo(e) {
  wn.locks[e] = 1, Bd();
}
function Lo(e) {
  delete wn.locks[e], Bd();
}
function yr(e, n) {
  const { uid: t } = Gt();
  n && fe(n, (o) => {
    o === !1 ? Lo(t) : o === !0 && e() === !0 && zo(t);
  }), fe(e, (o) => {
    n && n() === !1 || (o === !0 ? zo(t) : Lo(t));
  }), Kv(() => {
    n && n() === !1 || e() === !0 && zo(t);
  }), Co(() => {
    n && n() === !1 || e() === !0 && Lo(t);
  }), pt(() => {
    n && n() === !1 || e() === !0 && zo(t);
  }), qt(() => {
    n && n() === !1 || e() === !0 && Lo(t);
  });
}
function Eo(e, n) {
  const t = S(wn.zIndex);
  return fe(
    e,
    (o) => {
      o && (wn.zIndex += n, t.value = wn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: t };
}
const Nd = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Vm() {
  const { bindParent: e, parentProvider: n, index: t } = an(Nd);
  return {
    index: t,
    popup: n,
    bindPopup: e
  };
}
function Am() {
  const { bindChildren: e, childProviders: n, length: t } = sn(Nd);
  return {
    length: t,
    popupItems: n,
    bindPopupItems: e
  };
}
var zm = Object.defineProperty, bl = Object.getOwnPropertySymbols, Lm = Object.prototype.hasOwnProperty, Rm = Object.prototype.propertyIsEnumerable, yl = (e, n, t) => n in e ? zm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Um = (e, n) => {
  for (var t in n || (n = {}))
    Lm.call(n, t) && yl(e, t, n[t]);
  if (bl)
    for (var t of bl(n))
      Rm.call(n, t) && yl(e, t, n[t]);
  return e;
};
const {
  name: Hm,
  n: Bn,
  classes: Vr
} = te("popup");
var $i = ne({
  name: Hm,
  inheritAttrs: !1,
  props: To,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = hm(() => e.show, !0), {
      zIndex: r
    } = Eo(() => e.show, 3), {
      disabled: a
    } = Jt(), {
      bindPopupItems: i
    } = Am();
    yr(() => e.show, () => e.lockScroll), fe(() => e.show, (c) => {
      y(c ? e.onOpen : e.onClose);
    }), i({
      show: V(() => e.show)
    }), Sm(() => y(e.onRouteChange));
    function s() {
      const {
        closeOnClickOverlay: c,
        onClickOverlay: f
      } = e;
      y(f), c && y(e["onUpdate:show"], !1);
    }
    function l() {
      const {
        overlayClass: c = "",
        overlayStyle: f
      } = e;
      return J("div", {
        class: Vr(Bn("overlay"), c),
        style: Um({
          zIndex: r.value - 1
        }, f),
        onClick: s
      }, null);
    }
    function u() {
      return Oe(J("div", Ne({
        class: Vr(Bn("content"), Bn(`--${e.position}`), [e.defaultStyle, Bn("--content-background-color")], [e.defaultStyle, Bn("$-elevation--3")], [e.safeArea, Bn("--safe-area")], [e.safeAreaTop, Bn("--safe-area-top")]),
        style: {
          zIndex: r.value
        }
      }, t), [o.value && y(n.default)]), [[Rn, e.show]]);
    }
    function d() {
      return J(Ye, {
        name: Bn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Oe(J("div", {
          class: Vr(Bn("$--box"), Bn()),
          style: {
            zIndex: r.value - 2
          }
        }, [e.overlay && l(), J(Ye, {
          name: e.transition || Bn(`$-pop-${e.position}`)
        }, {
          default: () => [u()]
        })]), [[Rn, e.show]])]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? J(Kn, {
        to: c,
        disabled: a.value
      }, {
        default: () => [d()]
      }) : d();
    };
  }
});
oe($i);
const XT = $i;
var ct = $i;
const Vd = {
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
  onClick: z()
};
function Tn(e, n) {
  throw Error(`Varlet [${e}]: ${n}`);
}
function $l(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function Fm(e) {
  const { left: n } = _e(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function wl(e) {
  const { top: n } = _e(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function uo(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function wi(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Ar(e) {
  const { transform: n } = Tt(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function ft(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const t = /(scroll|auto)/, { overflowY: o, overflow: r } = Tt(n);
    if (t.test(o) || t.test(r))
      return n;
  }
  return window;
}
function Ym(e) {
  const n = [];
  let t = e;
  for (; !gi(t); )
    t = ft(t), n.push(t);
  return n;
}
function Ad(e, n) {
  if (Qe(e)) {
    const t = document.querySelector(e);
    return t || Tn(n, "target element cannot found"), t;
  }
  if (rm(e))
    return e;
  Tn(n, 'type of prop "target" should be a selector or an element object');
}
function jm() {
  const { width: e, height: n } = _e(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const zd = (e) => Qe(e) && e.endsWith("rem"), Wm = (e) => Qe(e) && e.endsWith("em") && !e.endsWith("rem"), qm = (e) => Qe(e) && e.endsWith("px") || vn(e), Gm = (e) => Qe(e) && e.endsWith("%"), Ld = (e) => Qe(e) && e.endsWith("vw"), Rd = (e) => Qe(e) && e.endsWith("vh"), Ud = (e) => Qe(e) && e.endsWith("vmin"), Hd = (e) => Qe(e) && e.endsWith("vmax"), Xm = (e) => Qe(e) && e.startsWith("calc("), Km = (e) => Qe(e) && e.startsWith("var("), He = (e) => {
  if (vn(e))
    return e;
  if (qm(e))
    return +e.replace("px", "");
  if (!bt())
    return 0;
  const { vw: n, vh: t, vMin: o, vMax: r } = jm();
  if (Ld(e))
    return +e.replace("vw", "") * n / 100;
  if (Rd(e))
    return +e.replace("vh", "") * t / 100;
  if (Ud(e))
    return +e.replace("vmin", "") * o / 100;
  if (Hd(e))
    return +e.replace("vmax", "") * r / 100;
  if (zd(e)) {
    const a = +e.replace("rem", ""), i = Tt(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return Qe(e) ? A(e) : 0;
}, we = (e) => {
  if (e != null)
    return Gm(e) || Ld(e) || Rd(e) || Wm(e) || zd(e) || Xm(e) || Km(e) || Ud(e) || Hd(e) ? e : `${He(e)}px`;
}, ln = (e, n = 1) => {
  if (e == null)
    return;
  const t = we(e), o = t.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(t) * n}${o}`;
};
function co(e, { top: n = 0, left: t = 0, duration: o = 300, animation: r }) {
  const a = Date.now(), i = uo(e), s = wi(e);
  return new Promise((l) => {
    const u = () => {
      const d = (Date.now() - a) / o;
      if (d < 1) {
        const c = i + (n - i) * r(d), f = s + (t - s) * r(d);
        e.scrollTo(f, c), requestAnimationFrame(u);
      } else
        e.scrollTo(t, n), l();
    };
    requestAnimationFrame(u);
  });
}
function Fd(e) {
  return Object.entries(e ?? {}).reduce((n, [t, o]) => {
    const r = t.startsWith("--") ? t : `--${$d(t)}`;
    return n[r] = o, n;
  }, {});
}
function tr(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
var Zm = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: Jm, n: Qm, classes: _m } = te("icon");
function xm(e, n) {
  return h(), Se(Xt(e.isURL(e.name) ? "img" : "i"), {
    class: v(
      e.classes(
        e.n(),
        [e.namespace !== e.n(), e.namespace],
        `${e.namespace}--set`,
        [e.isURL(e.name), e.n("image"), `${e.namespace}-${e.nextName}`],
        [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass]
      )
    ),
    style: F({
      color: e.color,
      "transition-duration": `${e.toNumber(e.transition)}ms`,
      width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      fontSize: e.toSizeUnit(e.size)
    }),
    src: e.isURL(e.name) ? e.nextName : null,
    onClick: e.onClick
  }, null, 8, ["class", "style", "src", "onClick"]);
}
const Yd = ne({
  name: Jm,
  props: Vd,
  setup(e) {
    const n = S(""), t = S(!1);
    fe(() => e.name, o, { immediate: !0 });
    function o(r, a) {
      return Zm(this, null, function* () {
        const { transition: i } = e;
        if (a == null || A(i) === 0) {
          n.value = r;
          return;
        }
        t.value = !0, yield Fe(), setTimeout(() => {
          a != null && (n.value = r), t.value = !1;
        }, A(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: t,
      n: Qm,
      classes: _m,
      isURL: am,
      toNumber: A,
      toSizeUnit: we
    };
  }
});
Yd.render = xm;
var Si = Yd;
oe(Si);
const KT = Si;
var Ue = Si, ep = Object.defineProperty, Sl = Object.getOwnPropertySymbols, np = Object.prototype.hasOwnProperty, tp = Object.prototype.propertyIsEnumerable, Cl = (e, n, t) => n in e ? ep(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, op = (e, n) => {
  for (var t in n || (n = {}))
    np.call(n, t) && Cl(e, t, n[t]);
  if (Sl)
    for (var t of Sl(n))
      tp.call(n, t) && Cl(e, t, n[t]);
  return e;
};
const rp = op({
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
  onSelect: z(),
  "onUpdate:show": z()
}, en(To, [
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
var Ci = {
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
}, jd = {
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
}, ap = Object.defineProperty, kl = Object.getOwnPropertySymbols, ip = Object.prototype.hasOwnProperty, sp = Object.prototype.propertyIsEnumerable, Pl = (e, n, t) => n in e ? ap(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ol = (e, n) => {
  for (var t in n || (n = {}))
    ip.call(n, t) && Pl(e, t, n[t]);
  if (kl)
    for (var t of kl(n))
      sp.call(n, t) && Pl(e, t, n[t]);
  return e;
};
function ki() {
  const e = {}, n = S({}), t = (a, i) => {
    i.lang = a, e[a] = i;
  }, o = (a) => {
    if (!e[a])
      return console.warn(`The ${a} does not exist. You can mount a language package using the add method`), {};
    n.value = e[a];
  };
  return {
    packs: e,
    pack: n,
    add: t,
    use: o,
    merge: (a, i) => {
      if (!e[a]) {
        console.warn(`The ${a} does not exist. You can mount a language package using the add method`);
        return;
      }
      e[a] = Ol(Ol({}, e[a]), i), o(a);
    }
  };
}
const { packs: Wd, pack: xe, add: Pi, use: Oi, merge: qd } = ki();
Pi("zh-CN", Ci);
Oi("zh-CN");
const ZT = { zhCN: Ci, enUS: jd, packs: Wd, pack: xe, add: Pi, use: Oi, merge: qd, useLocale: ki };
var Zr = {
  zhCN: Ci,
  enUS: jd,
  packs: Wd,
  pack: xe,
  add: Pi,
  use: Oi,
  merge: qd,
  useLocale: ki
};
const { name: lp, n: up, classes: dp } = te("action-sheet"), cp = ["onClick"];
function fp(e, n) {
  const t = ae("var-icon"), o = ae("var-popup"), r = Le("ripple");
  return h(), Se(o, Ne({
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
    default: ve(() => [
      N(
        "div",
        Ne({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          R(e.$slots, "title", {}, () => {
            var a;
            return [
              N(
                "div",
                {
                  class: v(e.n("title"))
                },
                re((a = e.title) != null ? a : e.pack.actionSheetTitle),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          R(e.$slots, "actions", {}, () => [
            (h(!0), w(
              Be,
              null,
              qe(e.actions, (a) => Oe((h(), w("div", {
                class: v(e.classes(e.n("action-item"), a.className, [a.disabled, e.n("--disabled")])),
                key: a.name,
                style: F({ color: a.color }),
                onClick: (i) => e.handleSelect(a)
              }, [
                a.icon ? (h(), Se(t, {
                  key: 0,
                  class: v(e.n("action-icon")),
                  "var-action-sheet-cover": "",
                  name: a.icon,
                  size: a.iconSize
                }, null, 8, ["class", "name", "size"])) : Q("v-if", !0),
                N(
                  "div",
                  {
                    class: v(e.n("action-name"))
                  },
                  re(a.name),
                  3
                  /* TEXT, CLASS */
                )
              ], 14, cp)), [
                [r, { disabled: a.disabled }]
              ])),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "safe-area", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
const Gd = ne({
  name: lp,
  directives: { Ripple: Ke },
  components: {
    VarPopup: ct,
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: rp,
  setup(e) {
    const n = S(!1);
    fe(
      () => e.show,
      (r) => {
        n.value = r;
      },
      { immediate: !0 }
    );
    function t(r) {
      if (r.disabled)
        return;
      const { closeOnClickAction: a, onSelect: i } = e;
      y(i, r), a && y(e["onUpdate:show"], !1);
    }
    function o(r) {
      y(e["onUpdate:show"], r);
    }
    return {
      popupShow: n,
      pack: xe,
      n: up,
      classes: dp,
      handlePopupUpdateShow: o,
      handleSelect: t
    };
  }
});
Gd.render = fp;
var Io = Gd, vp = Object.defineProperty, Tl = Object.getOwnPropertySymbols, mp = Object.prototype.hasOwnProperty, pp = Object.prototype.propertyIsEnumerable, El = (e, n, t) => n in e ? vp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Il = (e, n) => {
  for (var t in n || (n = {}))
    mp.call(n, t) && El(e, t, n[t]);
  if (Tl)
    for (var t of Tl(n))
      pp.call(n, t) && El(e, t, n[t]);
  return e;
};
let nt, Ti = {};
function hp(e = {}) {
  return Il(Il({}, Ti), e);
}
function Et(e) {
  return bt() ? new Promise((n) => {
    Et.close();
    const t = je(hp(e));
    t.teleport = "body", nt = t;
    const { unmountInstance: o } = Zt(Io, t, {
      onSelect: (r) => {
        y(t.onSelect, r), n(r);
      },
      onClose: () => {
        y(t.onClose), n("close");
      },
      onClosed: () => {
        y(t.onClosed), o(), nt === t && (nt = null);
      },
      onRouteChange: () => {
        o(), nt === t && (nt = null);
      },
      "onUpdate:show": (r) => {
        t.show = r;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
Et.setDefaultOptions = function(e) {
  Ti = e;
};
Et.resetDefaultOptions = function() {
  Ti = {};
};
Et.close = function() {
  if (nt != null) {
    const e = nt;
    nt = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
Et.Component = Io;
oe(Io);
oe(Io, Et);
const JT = Io;
var Jr = Et;
const gp = {
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
}, { name: bp, n: yp, classes: $p } = te("app-bar");
function wp(e, n) {
  return h(), w(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.safeAreaTop, e.n("--safe-area-top")],
          [e.round, e.n("--round")],
          e.formatElevation(e.elevation, 3)
        )
      ),
      style: F(e.rootStyles)
    },
    [
      N(
        "div",
        {
          class: v(e.n("toolbar"))
        },
        [
          N(
            "div",
            {
              class: v(e.n("left"))
            },
            [
              R(e.$slots, "left"),
              e.titlePosition === "left" ? (h(), w(
                "div",
                {
                  key: 0,
                  class: v(e.n("title")),
                  style: F({ paddingLeft: e.paddingLeft })
                },
                [
                  R(e.$slots, "default", {}, () => [
                    Te(
                      re(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.titlePosition === "center" ? (h(), w(
            "div",
            {
              key: 0,
              class: v(e.n("title"))
            },
            [
              R(e.$slots, "default", {}, () => [
                Te(
                  re(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0),
          N(
            "div",
            {
              class: v(e.n("right"))
            },
            [
              e.titlePosition === "right" ? (h(), w(
                "div",
                {
                  key: 0,
                  class: v(e.n("title")),
                  style: F({ paddingRight: e.paddingRight })
                },
                [
                  R(e.$slots, "default", {}, () => [
                    Te(
                      re(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0),
              R(e.$slots, "right")
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      R(e.$slots, "content")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Xd = ne({
  name: bp,
  props: gp,
  setup(e, { slots: n }) {
    const t = S(), o = S(), r = V(() => {
      const { image: i, color: s, textColor: l, imageLinearGradient: u } = e;
      return i != null ? {
        "background-image": `${u ? `linear-gradient(${u}), ` : ""}url(${i})`,
        "background-position": "center center",
        "background-size": "cover"
      } : {
        background: s,
        color: l
      };
    });
    rn(a), ko(a);
    function a() {
      t.value = n.left ? 0 : void 0, o.value = n.right ? 0 : void 0;
    }
    return {
      rootStyles: r,
      paddingLeft: t,
      paddingRight: o,
      n: yp,
      classes: $p,
      formatElevation: gn
    };
  }
});
Xd.render = wp;
var Ei = Xd;
oe(Ei);
const QT = Ei;
var Qr = Ei;
const Ml = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Dl = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Sp = (e) => {
  const n = [];
  return {
    cache: n,
    has(t) {
      return this.cache.includes(t);
    },
    add(t) {
      this.has(t) || (this.cache.length === e && n.shift(), this.cache.push(t));
    },
    remove(t) {
      this.has(t) && er(this.cache, t);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, _r = (e) => e, Bl = (e) => e ** 3, Kd = (e) => e < 0.5 ? Bl(e * 2) / 2 : 1 - Bl((1 - e) * 2) / 2, kt = (e = "", n, t = "") => {
  if (e.length >= n)
    return e;
  const o = n - e.length, r = Math.floor(o / t.length);
  return t.repeat(r) + t.slice(0, o % t.length) + e;
};
var Cp = Object.defineProperty, Nl = Object.getOwnPropertySymbols, kp = Object.prototype.hasOwnProperty, Pp = Object.prototype.propertyIsEnumerable, Vl = (e, n, t) => n in e ? Cp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Op = (e, n) => {
  for (var t in n || (n = {}))
    kp.call(n, t) && Vl(e, t, n[t]);
  if (Nl)
    for (var t of Nl(n))
      Pp.call(n, t) && Vl(e, t, n[t]);
  return e;
}, $r = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const Tp = "background-image", Ep = "lazy-loading", Ip = "lazy-error", Al = "lazy-attempt", Mp = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], xr = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Rt = [], or = [], Zd = Sp(100), Ze = {
  loading: xr,
  error: xr,
  attempt: 3,
  throttleWait: 300,
  events: Mp
};
let Ii = bi(Mo, Ze.throttleWait);
function wr(e, n) {
  e._lazy.arg === Tp ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Dp(e) {
  e._lazy.loading && wr(e, e._lazy.loading), Mo();
}
function Bp(e) {
  e._lazy.error && wr(e, e._lazy.error), e._lazy.state = "error", Di(e), Mo();
}
function Jd(e, n) {
  wr(e, n), e._lazy.state = "success", Di(e), Mo();
}
function Np(e) {
  var n;
  or.includes(e) || (or.push(e), (n = Ze.events) == null || n.forEach((t) => {
    e.addEventListener(t, Ii, { passive: !0 });
  }));
}
function Vp() {
  or.forEach((e) => {
    var n;
    (n = Ze.events) == null || n.forEach((t) => {
      e.removeEventListener(t, Ii);
    });
  }), or.length = 0;
}
function Ap(e, n) {
  var t, o;
  const r = {
    loading: (t = e.getAttribute(Ep)) != null ? t : Ze.loading,
    error: (o = e.getAttribute(Ip)) != null ? o : Ze.error,
    attempt: e.getAttribute(Al) ? Number(e.getAttribute(Al)) : Ze.attempt
  };
  e._lazy = Op({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), wr(e, xr), y(Ze.filter, e._lazy);
}
function zp(e, n) {
  const t = new Image();
  t.src = n, e._lazy.preloadImage = t, t.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Zd.add(n), Jd(e, n);
  }), t.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Bp(e) : Qd(e);
  });
}
function Qd(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (Zd.has(n)) {
    Jd(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Dp(e), zp(e, n);
}
function Mi(e) {
  return $r(this, null, function* () {
    yield dn(), dm(e) && Qd(e);
  });
}
function Mo() {
  Rt.forEach((e) => Mi(e));
}
function Lp(e) {
  return $r(this, null, function* () {
    !Rt.includes(e) && Rt.push(e), Ym(e).forEach(Np), yield Mi(e);
  });
}
function Di(e) {
  er(Rt, e), Rt.length === 0 && Vp();
}
function Rp(e, n) {
  const { src: t, arg: o } = e._lazy;
  return t !== n.value || o !== n.arg;
}
function _d(e, n) {
  return $r(this, null, function* () {
    Ap(e, n), yield Lp(e);
  });
}
function Up(e, n) {
  return $r(this, null, function* () {
    if (!Rp(e, n)) {
      Rt.includes(e) && (yield Mi(e));
      return;
    }
    yield _d(e, n);
  });
}
function Hp(e = {}) {
  const { events: n, loading: t, error: o, attempt: r, throttleWait: a, filter: i } = e;
  Ze.events = n ?? Ze.events, Ze.loading = t ?? Ze.loading, Ze.error = o ?? Ze.error, Ze.attempt = r ?? Ze.attempt, Ze.throttleWait = a ?? Ze.throttleWait, Ze.filter = i;
}
const xd = {
  mounted: _d,
  unmounted: Di,
  updated: Up,
  install(e, n) {
    Hp(n), Ii = bi(Mo, Ze.throttleWait), e.directive("lazy", this);
  }
}, _T = xd;
var fo = xd;
const Fp = {
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
  onClick: z(),
  onLoad: z(),
  onError: z()
}, Yp = (e) => ["mini", "small", "normal", "large"].includes(e), { name: jp, n: Wp, classes: qp } = te("avatar"), Gp = ["src", "alt", "lazy-loading", "lazy-error"], Xp = ["src", "alt"];
function Kp(e, n) {
  const t = Le("lazy");
  return h(), w(
    "div",
    {
      ref: "avatarElement",
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.isInternalSize(e.size), e.n(`--${e.size}`)],
          [e.round, e.n("--round")],
          [e.bordered, e.n("--bordered")]
        )
      ),
      style: F({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      e.src ? (h(), w(
        Be,
        { key: 0 },
        [
          e.lazy ? Oe((h(), w("img", {
            key: 0,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: F({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...o) => e.handleLoad && e.handleLoad(...o))
          }, null, 46, Gp)), [
            [t, e.src]
          ]) : (h(), w("img", {
            key: 1,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: F({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...o) => e.handleLoad && e.handleLoad(...o)),
            onError: n[2] || (n[2] = (...o) => e.handleError && e.handleError(...o))
          }, null, 46, Xp))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (h(), w(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: v(e.n("text")),
          style: F({ transform: `scale(${e.scale})` })
        },
        [
          R(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const ec = ne({
  name: jp,
  directives: { Lazy: fo },
  props: Fp,
  setup(e) {
    const n = S(null), t = S(null), o = S(1);
    rn(r), ko(r);
    function r() {
      if (!n.value || !t.value) {
        o.value = 1;
        return;
      }
      const l = n.value.offsetWidth, u = t.value.offsetWidth;
      l > u ? o.value = 1 : o.value = l / u;
    }
    function a(l) {
      const u = l.currentTarget, { lazy: d, onLoad: c, onError: f } = e;
      d ? (u._lazy.state === "success" && y(c, l), u._lazy.state === "error" && y(f, l)) : y(c, l);
    }
    function i(l) {
      y(e.onError, l);
    }
    function s(l) {
      y(e.onClick, l);
    }
    return {
      avatarElement: n,
      textElement: t,
      scale: o,
      n: Wp,
      classes: qp,
      isInternalSize: Yp,
      toSizeUnit: we,
      handleLoad: a,
      handleError: i,
      handleClick: s
    };
  }
});
ec.render = Kp;
var Bi = ec;
oe(Bi);
const xT = Bi;
var ea = Bi;
const Zp = {
  offset: [Number, String],
  vertical: Boolean
}, { name: Jp, n: Qp, classes: _p } = te("avatar-group");
function xp(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: F(e.rootStyles)
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const nc = ne({
  name: Jp,
  props: Zp,
  setup(e) {
    return {
      rootStyles: V(() => e.offset == null ? {} : {
        "--avatar-group-offset": we(e.offset)
      }),
      n: Qp,
      classes: _p,
      toSizeUnit: we
    };
  }
});
nc.render = xp;
var Ni = nc;
oe(Ni);
const eE = Ni;
var na = Ni;
const rt = {
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
}, { name: eh, n: nh, classes: th } = te("loading"), oh = (e) => (ht(""), e = e(), gt(), e), rh = /* @__PURE__ */ oh(() => /* @__PURE__ */ N(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ N("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), ah = [
  rh
];
function ih(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      e.$slots.default ? (h(), w(
        "div",
        {
          key: 0,
          class: v(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          R(e.$slots, "default"),
          e.loading ? (h(), w(
            "div",
            {
              key: 0,
              class: v(e.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.isShow ? (h(), w(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (h(), w(
            "div",
            {
              key: 0,
              class: v(e.n("circle"))
            },
            [
              N(
                "span",
                {
                  class: v(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: F({
                    width: e.multiplySizeUnit(e.radius, 2),
                    height: e.multiplySizeUnit(e.radius, 2),
                    color: e.color
                  })
                },
                ah,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0),
          (h(!0), w(
            Be,
            null,
            qe(e.loadingTypeDict, (t, o) => (h(), w(
              Be,
              { key: o },
              [
                e.type === o ? (h(), w(
                  "div",
                  {
                    key: 0,
                    class: v(e.classes(e.n(o), e.n(`${o}--${e.size}`)))
                  },
                  [
                    (h(!0), w(
                      Be,
                      null,
                      qe(t, (r) => (h(), w(
                        "div",
                        {
                          key: r + o,
                          style: F({ backgroundColor: e.color }),
                          class: v(e.classes(e.n(`${o}-item`), e.n(`${o}-item--${e.size}`)))
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )) : Q("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          e.$slots.description || e.description ? (h(), w(
            "div",
            {
              key: 1,
              class: v(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: F({ color: e.color })
            },
            [
              R(e.$slots, "description", {}, () => [
                Te(
                  re(e.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const tc = ne({
  name: eh,
  props: rt,
  setup(e, { slots: n }) {
    const t = V(() => y(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: t,
      n: nh,
      classes: th,
      multiplySizeUnit: ln
    };
  }
});
tc.render = ih;
var Vi = tc;
oe(Vi);
const nE = Vi;
var Ut = Vi;
const sh = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, { name: lh, n: uh, classes: dh } = te("hover-overlay");
function ch(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
const oc = ne({
  name: lh,
  props: sh,
  setup: () => ({
    n: uh,
    classes: dh
  })
});
oc.render = ch;
var Ai = oc;
oe(Ai);
function Gn() {
  const e = S(!1);
  return {
    hovering: e,
    handleHovering: (t) => {
      e.value = t;
    }
  };
}
const tE = Ai;
var zn = Ai;
function rc(e) {
  if (!e)
    return !1;
  const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function fh(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((t, o) => {
    const [r, a] = o.split(":").map((i) => i.trim());
    return t[yi(r)] = a, t;
  }, {}) : {};
}
function vh(e) {
  const { value: n } = e._hover, t = fh(e);
  Object.keys(n).forEach((o) => {
    const r = yi(o);
    n[r] != null && t[r] && (e._hover.rawStyle[r] = t[r]);
  });
}
function zi(e, n) {
  Object.keys(n).forEach((t) => {
    const o = n[t];
    o != null && (e.style[t] = o);
  });
}
function mh(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function ac(e) {
  mh(e), zi(e, e._hover.rawStyle);
}
function ic() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Kt(e)) {
    e(this._hover.hovering);
    return;
  }
  zi(this, e);
}
function sc() {
  if (this._hover.hovering = !1, Kt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  ac(this);
}
function lc(e, n) {
  var t, o;
  const { arg: r, value: a } = n;
  rc(r) || (e._hover = {
    value: a,
    hovering: (o = (t = e._hover) == null ? void 0 : t.hovering) != null ? o : !1,
    rawStyle: {}
  }, vh(e), e.addEventListener("mouseenter", ic), e.addEventListener("mouseleave", sc));
}
function uc(e, n) {
  rc(n.arg) || (ac(e), e.removeEventListener("mouseenter", ic), e.removeEventListener("mouseleave", sc));
}
function ph(e, n) {
  e._hover && uc(e, n);
}
function hh(e, n) {
  return !Kt(n.value) && e._hover.hovering;
}
function gh(e, n) {
  lc(e, n), hh(e, n) && zi(e, n.value);
}
const dc = {
  mounted: lc,
  unmounted: uc,
  beforeUpdate: ph,
  updated: gh,
  install(e) {
    e.directive("hover", this);
  }
}, oE = dc;
var En = dc, bh = Object.defineProperty, yh = Object.defineProperties, $h = Object.getOwnPropertyDescriptors, zl = Object.getOwnPropertySymbols, wh = Object.prototype.hasOwnProperty, Sh = Object.prototype.propertyIsEnumerable, Ll = (e, n, t) => n in e ? bh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ch = (e, n) => {
  for (var t in n || (n = {}))
    wh.call(n, t) && Ll(e, t, n[t]);
  if (zl)
    for (var t of zl(n))
      Sh.call(n, t) && Ll(e, t, n[t]);
  return e;
}, kh = (e, n) => yh(e, $h(n));
const Ph = {
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
  loadingType: en(rt, "type"),
  loadingSize: en(rt, "size"),
  loadingColor: kh(Ch({}, en(rt, "color")), {
    default: "currentColor"
  }),
  onClick: z(),
  onTouchstart: z()
}, cc = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Oh() {
  const { bindChildren: e, childProviders: n, length: t } = sn(cc);
  return {
    length: t,
    buttons: n,
    bindButtons: e
  };
}
function Th() {
  const { bindParent: e, parentProvider: n, index: t } = an(cc);
  return {
    index: t,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: Eh, n: Ih, classes: Mh } = te("button"), Dh = ["type", "disabled"];
function Bh(e, n) {
  const t = ae("var-loading"), o = ae("var-hover-overlay"), r = Le("ripple"), a = Le("hover");
  return Oe((h(), w("button", {
    class: v(
      e.classes(
        e.n(),
        e.n("$--box"),
        e.n(`--${e.states.size}`),
        [e.block, `${e.n("$--flex")} ${e.n("--block")}`, e.n("$--inline-flex")],
        [e.disabled, e.n("--disabled")],
        [e.states.text, `${e.n(`--text-${e.states.type}`)} ${e.n("--text")}`, `${e.n(`--${e.states.type}`)} ${e.states.elevation}`],
        [e.states.text && e.disabled, e.n("--text-disabled")],
        [e.round, e.n("--round")],
        [e.states.outline, e.n("--outline")]
      )
    ),
    style: F({
      color: e.states.textColor,
      background: e.states.color
    }),
    type: e.nativeType,
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onTouchstart: n[1] || (n[1] = (...i) => e.handleTouchstart && e.handleTouchstart(...i))
  }, [
    e.loading || e.pending ? (h(), Se(t, {
      key: 0,
      class: v(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : Q("v-if", !0),
    N(
      "div",
      {
        class: v(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        R(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    J(o, {
      hovering: e.disabled ? !1 : e.hovering
    }, null, 8, ["hovering"])
  ], 46, Dh)), [
    [r, { disabled: e.disabled || !e.ripple }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const fc = ne({
  name: Eh,
  components: {
    VarLoading: Ut,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Ke, Hover: En },
  props: Ph,
  setup(e) {
    const n = S(!1), { buttonGroup: t } = Th(), { hovering: o, handleHovering: r } = Gn(), a = V(() => {
      if (!t)
        return {
          elevation: gn(e.elevation, 2),
          type: e.type != null ? e.type : "default",
          size: e.size != null ? e.size : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline
        };
      const { type: u, size: d, color: c, textColor: f, mode: m } = t;
      return {
        elevation: "",
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : c.value,
        textColor: e.textColor != null ? e.textColor : f.value,
        text: m.value !== "normal",
        outline: m.value === "outline"
      };
    });
    function i(u) {
      e.autoLoading && (n.value = !0, u = Me(u) ? u : [u], Promise.all(u).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }
    function s(u) {
      const { loading: d, disabled: c, onClick: f } = e;
      !f || d || c || n.value || i(y(f, u));
    }
    function l(u) {
      const { loading: d, disabled: c, onTouchstart: f } = e;
      !f || d || c || n.value || i(y(f, u));
    }
    return {
      pending: n,
      states: a,
      hovering: o,
      n: Ih,
      classes: Mh,
      handleHovering: r,
      handleClick: s,
      handleTouchstart: l
    };
  }
});
fc.render = Bh;
var Li = fc;
oe(Li);
const rE = Li;
var mn = Li;
const Nh = {
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
  onClick: z()
}, { name: Vh, n: Ah, classes: zh } = te("back-top");
function Lh(e, n) {
  const t = ae("var-icon"), o = ae("var-button");
  return h(), Se(Kn, {
    to: "body",
    disabled: e.disabled
  }, [
    N(
      "div",
      Ne({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = On((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        R(e.$slots, "default", {}, () => [
          J(o, {
            elevation: e.elevation,
            type: "primary",
            round: "",
            "var-back-top-cover": ""
          }, {
            default: ve(() => [
              J(t, { name: "chevron-up" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["elevation"])
        ])
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["disabled"]);
}
const vc = ne({
  name: Vh,
  components: {
    VarButton: mn,
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: Nh,
  setup(e) {
    const n = S(!1), t = S(null), o = S(!0);
    let r;
    const a = bi(() => {
      n.value = uo(r) >= He(e.visibilityHeight);
    }, 200);
    So(() => {
      s(), l(), o.value = !1;
    }), pt(l), gr(u);
    function i(d) {
      y(e.onClick, d);
      const c = wi(r);
      co(r, {
        left: c,
        duration: e.duration,
        animation: Kd
      });
    }
    function s() {
      r = e.target ? Ad(e.target, "BackTop") : ft(t.value);
    }
    function l() {
      r.addEventListener("scroll", a);
    }
    function u() {
      r.removeEventListener("scroll", a);
    }
    return {
      disabled: o,
      show: n,
      backTopEl: t,
      toSizeUnit: we,
      n: Ah,
      classes: zh,
      handleClick: i
    };
  }
});
vc.render = Lh;
var Ri = vc;
oe(Ri);
const aE = Ri;
var ta = Ri;
const Rh = {
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
}, { name: Uh, n: Hh, classes: Fh } = te("badge");
function Yh(e, n) {
  const t = ae("var-icon");
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      R(e.$slots, "default"),
      J(Ye, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: ve(() => [
          Oe(N(
            "span",
            Ne({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`)],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: { background: e.color }
            }, e.$attrs),
            [
              e.icon ? (h(), Se(t, {
                key: 0,
                class: v(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon
              }, null, 8, ["class", "name"])) : Q("v-if", !0),
              R(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (h(), w(
                  "span",
                  {
                    key: 0,
                    class: v(e.n("value"))
                  },
                  re(e.value),
                  3
                  /* TEXT, CLASS */
                )) : Q("v-if", !0)
              ])
            ],
            16
            /* FULL_PROPS */
          ), [
            [Rn, !e.hidden]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ],
    2
    /* CLASS */
  );
}
const mc = ne({
  name: Uh,
  components: { VarIcon: Ue },
  inheritAttrs: !1,
  props: Rh,
  setup(e) {
    return {
      value: V(() => {
        const { value: t, maxValue: o } = e;
        return t != null && o != null && A(t) > A(o) ? `${o}+` : t;
      }),
      n: Hh,
      classes: Fh
    };
  }
});
mc.render = Yh;
var Ui = mc;
oe(Ui);
const iE = Ui;
var rr = Ui;
const jh = {
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
  onChange: z(),
  onBeforeChange: z(),
  onFabClick: z(),
  "onUpdate:active": z()
}, pc = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function Wh() {
  const { childProviders: e, length: n, bindChildren: t } = sn(
    pc
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: t
  };
}
var qh = Object.defineProperty, Rl = Object.getOwnPropertySymbols, Gh = Object.prototype.hasOwnProperty, Xh = Object.prototype.propertyIsEnumerable, Ul = (e, n, t) => n in e ? qh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Hl = (e, n) => {
  for (var t in n || (n = {}))
    Gh.call(n, t) && Ul(e, t, n[t]);
  if (Rl)
    for (var t of Rl(n))
      Xh.call(n, t) && Ul(e, t, n[t]);
  return e;
};
const { name: Kh, n: Zh, classes: Jh } = te("bottom-navigation"), { n: Sr } = te("bottom-navigation-item"), Fl = Sr("--right-half-space"), Yl = Sr("--left-half-space"), jl = Sr("--right-space"), Qh = {
  type: "primary"
};
function _h(e, n) {
  const t = ae("var-button");
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: F(`z-index:${e.zIndex}`)
    },
    [
      R(e.$slots, "default"),
      e.$slots.fab ? (h(), Se(t, Ne({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, { round: "" }), {
        default: ve(() => [
          R(e.$slots, "fab")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "onClick"])) : Q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const hc = ne({
  name: Kh,
  components: { VarButton: mn },
  props: jh,
  setup(e, { slots: n }) {
    const t = S(null), o = V(() => e.active), r = V(() => e.activeColor), a = V(() => e.inactiveColor), i = S({}), { length: s, bottomNavigationItems: l, bindBottomNavigationItem: u } = Wh();
    u({
      active: o,
      activeColor: r,
      inactiveColor: a,
      onToggle: p
    }), fe(() => s.value, c), fe(
      () => e.fabProps,
      (P) => {
        i.value = Hl(Hl({}, Qh), P);
      },
      { immediate: !0, deep: !0 }
    ), rn(() => {
      n.fab && O(s.value);
    }), ko(() => {
      T(), n.fab && O(s.value);
    });
    function c() {
      s.value === 0 || f() || m() || b();
    }
    function f() {
      return l.find(({ name: P }) => o.value === P.value);
    }
    function m() {
      return l.find(({ index: P }) => o.value === P.value);
    }
    function b() {
      vn(o.value) && (o.value < 0 ? y(e["onUpdate:active"], 0) : o.value > s.value - 1 && y(e["onUpdate:active"], s.value - 1));
    }
    function p(P) {
      o.value !== P && (e.onBeforeChange ? g(P) : k(P));
    }
    function g(P) {
      const D = Go(y(e.onBeforeChange, P));
      Promise.all(D).then((E) => {
        E.every(Boolean) && k(P);
      });
    }
    function k(P) {
      y(e["onUpdate:active"], P), y(e.onChange, P);
    }
    function T() {
      C().forEach((D) => {
        D.classList.remove(Fl, Yl, jl);
      });
    }
    function O(P) {
      const D = C(), E = D.length, H = P % 2 === 0;
      D.forEach((L, U) => {
        $(H, L, U, E);
      });
    }
    function $(P, D, E, H) {
      const L = E === H - 1;
      if (!P && L) {
        D.classList.add(jl);
        return;
      }
      const U = E === H / 2 - 1, ie = E === H / 2;
      U ? D.classList.add(Fl) : ie && D.classList.add(Yl);
    }
    function C() {
      return Array.from(t.value.querySelectorAll(`.${Sr()}`));
    }
    function I() {
      y(e.onFabClick);
    }
    return {
      length: s,
      bottomNavigationDom: t,
      fabProps: i,
      n: Zh,
      classes: Jh,
      handleFabClick: I
    };
  }
});
hc.render = _h;
var Hi = hc;
oe(Hi);
const sE = Hi;
var oa = Hi;
const xh = {
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
  onClick: z()
};
function eg() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    pc
  );
  return t || Tn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: t
  };
}
const { name: ng, n: tg, classes: og } = te("bottom-navigation-item"), rg = {
  type: "danger",
  dot: !0
};
function ag(e, n) {
  const t = ae("var-icon"), o = ae("var-badge"), r = Le("ripple");
  return Oe((h(), w(
    "button",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: F({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      e.icon && !e.$slots.icon ? (h(), Se(t, {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: v(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      }, null, 8, ["name", "namespace", "class"])) : Q("v-if", !0),
      R(e.$slots, "icon", {
        active: e.active === e.index || e.active === e.name
      }),
      e.badge ? (h(), Se(o, Ne({ key: 1 }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }), null, 16, ["class"])) : Q("v-if", !0),
      N(
        "span",
        {
          class: v(e.n("label"))
        },
        [
          e.$slots.default ? Q("v-if", !0) : (h(), w(
            Be,
            { key: 0 },
            [
              Te(
                re(e.label),
                1
                /* TEXT */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          )),
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r]
  ]);
}
const gc = ne({
  name: ng,
  components: {
    VarBadge: rr,
    VarIcon: Ue
  },
  directives: { Ripple: Ke },
  props: xh,
  setup(e) {
    const n = V(() => e.name), t = V(() => e.badge), o = S({}), { index: r, bottomNavigation: a, bindBottomNavigation: i } = eg(), { active: s, activeColor: l, inactiveColor: u } = a;
    i({
      name: n,
      index: r
    }), fe(
      () => t.value,
      (m) => {
        o.value = m === !0 ? rg : t.value;
      },
      { immediate: !0 }
    );
    function c() {
      return s.value === n.value || s.value === r.value ? l.value : u.value;
    }
    function f() {
      var m;
      const b = (m = n.value) != null ? m : r.value;
      y(e.onClick, b), y(a.onToggle, b);
    }
    return {
      index: r,
      active: s,
      badge: t,
      badgeProps: o,
      n: tg,
      classes: og,
      computeColorStyle: c,
      handleClick: f
    };
  }
});
gc.render = ag;
var Fi = gc;
oe(Fi);
const lE = Fi;
var ra = Fi;
const ig = {
  separator: String,
  onClick: z()
}, bc = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function sg() {
  const { childProviders: e, bindChildren: n, length: t } = sn(
    bc
  );
  return {
    length: t,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function lg() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    bc
  );
  return n || Tn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: t,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: ug, n: dg, classes: cg } = te("breadcrumb");
function fg(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? Q("v-if", !0) : R(e.$slots, "separator", { key: 0 }, () => {
        var t;
        return [
          N(
            "div",
            {
              class: v(e.n("separator"))
            },
            re((t = e.separator) != null ? t : e.parentSeparator),
            3
            /* TEXT, CLASS */
          )
        ];
      })
    ],
    2
    /* CLASS */
  );
}
const yc = ne({
  name: ug,
  props: ig,
  setup(e) {
    const { index: n, breadcrumb: t, bindBreadcrumb: o } = lg(), r = V(() => n.value === t.length.value - 1), a = V(() => t.separator.value);
    o(null);
    function i(s) {
      r.value || y(e.onClick, s);
    }
    return {
      n: dg,
      classes: cg,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
yc.render = fg;
var Yi = yc;
oe(Yi);
const uE = Yi;
var aa = Yi;
const vg = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: mg, n: pg } = te("breadcrumbs");
function hg(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const $c = ne({
  name: mg,
  props: vg,
  setup(e) {
    const n = V(() => e.separator), { bindBreadcrumbList: t, length: o } = sg();
    return t({
      length: o,
      separator: n
    }), { n: pg };
  }
});
$c.render = hg;
var ji = $c;
oe(ji);
const dE = ji;
var ia = ji;
const gg = {
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
}, { name: bg, n: yg, classes: $g } = te("button-group");
function wg(e, n) {
  return h(), w(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.mode, `${e.n(`--mode-${e.mode}`)}`],
          [e.vertical, e.n("--vertical"), e.n("--horizontal")],
          [e.mode === "normal", e.formatElevation(e.elevation, 2)]
        )
      )
    },
    [
      R(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const wc = ne({
  name: bg,
  props: gg,
  setup(e) {
    const { bindButtons: n } = Oh(), t = {
      elevation: V(() => e.elevation),
      type: V(() => e.type),
      size: V(() => e.size),
      color: V(() => e.color),
      textColor: V(() => e.textColor),
      mode: V(() => e.mode)
    };
    return n(t), {
      n: yg,
      classes: $g,
      formatElevation: gn
    };
  }
});
wc.render = wg;
var Wi = wc;
oe(Wi);
const cE = Wi;
var sa = Wi;
const Sg = {
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
  onClick: z(),
  "onUpdate:floating": z()
};
var Wl = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: Cg, n: kg, classes: Pg } = te("card"), Og = 500, Tg = ["src", "alt"];
function Eg(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = Le("ripple");
  return Oe((h(), w(
    "div",
    {
      ref: "card",
      class: v(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: F({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      N(
        "div",
        {
          ref: "cardFloater",
          class: v(e.n("floater")),
          style: F({
            width: e.floaterWidth,
            height: e.floaterHeight,
            top: e.floaterTop,
            left: e.floaterLeft,
            overflow: e.floaterOverflow,
            position: e.floaterPosition,
            transition: e.floated ? `background-color ${e.floatingDuration}ms, color ${e.floatingDuration}ms, width ${e.floatingDuration}ms, height ${e.floatingDuration}ms, top ${e.floatingDuration}ms, left ${e.floatingDuration}ms` : void 0
          })
        },
        [
          R(e.$slots, "image", {}, () => [
            e.src ? (h(), w("img", {
              key: 0,
              class: v(e.n("image")),
              style: F({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, Tg)) : Q("v-if", !0)
          ]),
          N(
            "div",
            {
              class: v(e.n("container"))
            },
            [
              R(e.$slots, "title", {}, () => [
                e.title ? (h(), w(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("title"))
                  },
                  re(e.title),
                  3
                  /* TEXT, CLASS */
                )) : Q("v-if", !0)
              ]),
              R(e.$slots, "subtitle", {}, () => [
                e.subtitle ? (h(), w(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("subtitle"))
                  },
                  re(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : Q("v-if", !0)
              ]),
              R(e.$slots, "description", {}, () => [
                e.description ? (h(), w(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("description"))
                  },
                  re(e.description),
                  3
                  /* TEXT, CLASS */
                )) : Q("v-if", !0)
              ]),
              e.$slots.extra ? (h(), w(
                "div",
                {
                  key: 0,
                  class: v(e.n("footer"))
                },
                [
                  R(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : Q("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (h(), w(
                "div",
                {
                  key: 1,
                  class: v(e.n("floating-content")),
                  style: F({
                    height: e.contentHeight,
                    opacity: e.opacity,
                    transition: `opacity ${e.floatingDuration * 2}ms`
                  })
                },
                [
                  R(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (h(), w(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: F({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              R(e.$slots, "close-button", {}, () => [
                J(o, {
                  "var-card-cover": "",
                  round: "",
                  class: v(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: On(e.close, ["stop"])
                }, {
                  default: ve(() => [
                    J(t, {
                      "var-card-cover": "",
                      name: "window-close",
                      class: v(e.n("close-button-icon"))
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "onClick"])
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : Q("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      N(
        "div",
        {
          class: v(e.n("holder")),
          style: F({
            width: e.holderWidth,
            height: e.holderHeight
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple || e.floater }]
  ]);
}
const Sc = ne({
  name: Cg,
  directives: { Ripple: Ke },
  components: {
    VarIcon: Ue,
    VarButton: mn
  },
  props: Sg,
  setup(e) {
    const n = S(null), t = S(null), o = S("auto"), r = S("auto"), a = S("100%"), i = S("100%"), s = S("auto"), l = S("auto"), u = S(void 0), d = S("hidden"), c = S("0px"), f = S("0"), m = V(() => e.layout === "row"), b = S(!1), p = S(!1), { zIndex: g } = Eo(() => e.floating, 1);
    let k = "auto", T = "auto", O = null;
    const $ = S(null);
    yr(
      () => e.floating,
      () => !m.value
    ), fe(
      () => e.floating,
      (E) => {
        m.value || Fe(() => {
          E ? C() : I();
        });
      },
      { immediate: !0 }
    );
    function C() {
      return Wl(this, null, function* () {
        clearTimeout($.value), clearTimeout(O), $.value = null, $.value = setTimeout(
          () => Wl(this, null, function* () {
            const { width: E, height: H, left: L, top: U } = _e(n.value);
            o.value = we(E), r.value = we(H), a.value = o.value, i.value = r.value, s.value = we(U), l.value = we(L), u.value = "fixed", k = s.value, T = l.value, b.value = !0, yield dn(), s.value = "0", l.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", p.value = !0;
          }),
          e.ripple ? Og : 0
        );
      });
    }
    function I() {
      clearTimeout(O), clearTimeout($.value), $.value = null, a.value = o.value, i.value = r.value, s.value = k, l.value = T, c.value = "0px", f.value = "0", b.value = !1, O = setTimeout(() => {
        o.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", s.value = "auto", l.value = "auto", k = "auto", T = "auto", d.value = "hidden", u.value = void 0, p.value = !1;
      }, e.floatingDuration);
    }
    function P() {
      y(e["onUpdate:floating"], !1);
    }
    function D(E) {
      y(e.onClick, E);
    }
    return {
      card: n,
      cardFloater: t,
      holderWidth: o,
      holderHeight: r,
      floater: $,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: s,
      floaterLeft: l,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: c,
      opacity: f,
      zIndex: g,
      isRow: m,
      showFloatingButtons: b,
      floated: p,
      n: kg,
      classes: Pg,
      toSizeUnit: we,
      close: P,
      formatElevation: gn,
      handleClick: D
    };
  }
});
Sc.render = Eg;
var qi = Sc;
oe(qi);
const fE = qi;
var la = qi;
const Ig = {
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
  onClick: z()
}, { name: Mg, n: Dg, classes: Bg } = te("cell");
function Ng(e, n) {
  const t = ae("var-icon"), o = Le("ripple");
  return Oe((h(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: F(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      R(e.$slots, "icon", {}, () => [
        e.icon ? (h(), w(
          "div",
          {
            key: 0,
            class: v(e.classes(e.n("icon"), e.iconClass))
          },
          [
            J(t, { name: e.icon }, null, 8, ["name"])
          ],
          2
          /* CLASS */
        )) : Q("v-if", !0)
      ]),
      N(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          R(e.$slots, "default", {}, () => [
            e.title ? (h(), w(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("title"), e.titleClass))
              },
              re(e.title),
              3
              /* TEXT, CLASS */
            )) : Q("v-if", !0)
          ]),
          R(e.$slots, "description", {}, () => [
            e.description ? (h(), w(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("description"), e.descriptionClass))
              },
              re(e.description),
              3
              /* TEXT, CLASS */
            )) : Q("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (h(), w(
        "div",
        {
          key: 0,
          class: v(e.classes(e.n("extra"), e.extraClass))
        },
        [
          R(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const Cc = ne({
  name: Mg,
  components: { VarIcon: Ue },
  directives: { Ripple: Ke },
  props: Ig,
  setup(e) {
    const n = V(() => e.borderOffset == null ? {} : {
      "--cell-border-left": we(e.borderOffset),
      "--cell-border-right": we(e.borderOffset)
    });
    function t(o) {
      y(e.onClick, o);
    }
    return {
      borderOffsetStyles: n,
      n: Dg,
      classes: Bg,
      toSizeUnit: we,
      handleClick: t
    };
  }
});
Cc.render = Ng;
var Gi = Cc;
oe(Gi);
const vE = Gi;
var ar = Gi;
const Vg = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Ag, n: zg } = te("form-details"), Lg = { key: 0 }, Rg = { key: 0 };
function Ug(e, n) {
  return h(), Se(Ye, {
    name: e.n()
  }, {
    default: ve(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), w(
        "div",
        {
          key: 0,
          class: v(e.n())
        },
        [
          N(
            "div",
            {
              class: v(e.n("error-message"))
            },
            [
              J(Ye, {
                name: e.n("message")
              }, {
                default: ve(() => [
                  e.errorMessage ? (h(), w(
                    "div",
                    Lg,
                    re(e.errorMessage),
                    1
                    /* TEXT */
                  )) : Q("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: v(e.n("extra-message"))
            },
            [
              J(Ye, {
                name: e.n("message")
              }, {
                default: ve(() => [
                  R(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (h(), w(
                      "div",
                      Rg,
                      re(e.extraMessage),
                      1
                      /* TEXT */
                    )) : Q("v-if", !0)
                  ])
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const kc = ne({
  name: Ag,
  props: Vg,
  setup: () => ({ n: zg })
});
kc.render = Ug;
var Xi = kc;
oe(Xi);
const mE = Xi;
var pn = Xi;
const Hg = {
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
  onClick: z(),
  onChange: z(),
  "onUpdate:modelValue": z(),
  "onUpdate:indeterminate": z()
}, Pc = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Fg() {
  const { bindChildren: e, childProviders: n, length: t } = sn(
    Pc
  );
  return {
    length: t,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Yg() {
  const { bindParent: e, parentProvider: n, index: t } = an(
    Pc
  );
  return {
    index: t,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var jg = Object.defineProperty, Wg = Object.defineProperties, qg = Object.getOwnPropertyDescriptors, ql = Object.getOwnPropertySymbols, Gg = Object.prototype.hasOwnProperty, Xg = Object.prototype.propertyIsEnumerable, Gl = (e, n, t) => n in e ? jg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Kg = (e, n) => {
  for (var t in n || (n = {}))
    Gg.call(n, t) && Gl(e, t, n[t]);
  if (ql)
    for (var t of ql(n))
      Xg.call(n, t) && Gl(e, t, n[t]);
  return e;
}, Zg = (e, n) => Wg(e, qg(n));
const Oc = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Mn() {
  const { parentProvider: e, index: n, bindParent: t } = an(Oc), o = Gt();
  return {
    index: n,
    form: e,
    bindForm: t ? (a) => {
      t(Zg(Kg({}, a), { instance: o }));
    } : null
  };
}
function Jg() {
  const { childProviders: e, length: n, bindChildren: t } = sn(Oc);
  return {
    length: n,
    formItems: e,
    bindFormItems: t
  };
}
const { name: Qg, n: _g, classes: xg } = te("checkbox");
function e0(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = Le("hover"), i = Le("ripple");
  return h(), w(
    "div",
    {
      class: v(e.n("wrap")),
      onClick: n[0] || (n[0] = (...s) => e.handleClick && e.handleClick(...s))
    },
    [
      N(
        "div",
        {
          class: v(e.n())
        },
        [
          Oe((h(), w(
            "div",
            {
              class: v(
                e.classes(
                  e.n("action"),
                  [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")],
                  [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              style: F({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
            },
            [
              e.isIndeterminate ? R(e.$slots, "indeterminate-icon", { key: 0 }, () => [
                J(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "minus-box",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : Q("v-if", !0),
              e.checked && !e.isIndeterminate ? R(e.$slots, "checked-icon", { key: 1 }, () => [
                J(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-marked",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : Q("v-if", !0),
              !e.checked && !e.isIndeterminate ? R(e.$slots, "unchecked-icon", { key: 2 }, () => [
                J(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-blank-outline",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : Q("v-if", !0),
              J(o, {
                hovering: !e.disabled && !e.formDisabled && e.hovering
              }, null, 8, ["hovering"])
            ],
            6
            /* CLASS, STYLE */
          )), [
            [a, e.handleHovering, "desktop"],
            [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
          ]),
          N(
            "div",
            {
              class: v(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              )
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      J(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Tc = ne({
  name: Qg,
  directives: { Ripple: Ke, Hover: En },
  components: {
    VarIcon: Ue,
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  props: Hg,
  setup(e) {
    const n = lo(e, "modelValue"), t = lo(e, "indeterminate"), o = V(() => n.value === e.checkedValue), r = V(() => e.checkedValue), a = S(!1), { checkboxGroup: i, bindCheckboxGroup: s } = Yg(), { hovering: l, handleHovering: u } = Gn(), { form: d, bindForm: c } = Mn(), {
      errorMessage: f,
      validateWithTrigger: m,
      validate: b,
      // expose
      resetValidation: p
    } = In(), g = {
      checkedValue: r,
      checked: o,
      sync: $,
      validate: D,
      resetValidation: p,
      reset: I,
      resetWithAnimation: C
    };
    y(s, g), y(c, g);
    function k(E) {
      Fe(() => {
        const { validateTrigger: H, rules: L, modelValue: U } = e;
        m(H, E, L, U);
      });
    }
    function T(E) {
      const { checkedValue: H, onChange: L } = e;
      n.value = E, t.value = !1, y(L, n.value), k("onChange"), E === H ? i == null || i.onChecked(H) : i == null || i.onUnchecked(H);
    }
    function O(E) {
      const { disabled: H, readonly: L, checkedValue: U, uncheckedValue: ie, onClick: G } = e;
      if (d != null && d.disabled.value || H || (y(G, E), d != null && d.readonly.value || L))
        return;
      a.value = !0;
      const W = i ? i.checkedCount.value >= Number(i.max.value) : !1;
      !o.value && W || T(o.value ? ie : U);
    }
    function $(E) {
      const { checkedValue: H, uncheckedValue: L } = e;
      n.value = E.includes(H) ? H : L;
    }
    function C() {
      a.value = !1;
    }
    function I() {
      n.value = e.uncheckedValue, p();
    }
    function P(E) {
      const { checkedValue: H, uncheckedValue: L } = e;
      ![H, L].includes(E) && (E = o.value ? L : H), T(E);
    }
    function D() {
      return b(e.rules, e.modelValue);
    }
    return {
      isIndeterminate: t,
      withAnimation: a,
      checked: o,
      errorMessage: f,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      hovering: l,
      n: _g,
      classes: xg,
      handleHovering: u,
      handleClick: O,
      toggle: P,
      reset: I,
      validate: D,
      resetValidation: p
    };
  }
});
Tc.render = e0;
var Ki = Tc;
oe(Ki);
const pE = Ki;
var ir = Ki;
const n0 = {
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
  onChange: z(),
  "onUpdate:modelValue": z()
}, { name: t0, n: o0, classes: r0 } = te("checkbox-group");
function a0(e, n) {
  const t = ae("var-form-details");
  return h(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      J(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Ec = ne({
  name: t0,
  components: { VarFormDetails: pn },
  props: n0,
  setup(e) {
    const n = V(() => e.max), t = V(() => e.modelValue.length), { length: o, checkboxes: r, bindCheckboxes: a } = Fg(), { bindForm: i } = Mn(), {
      errorMessage: s,
      validateWithTrigger: l,
      validate: u,
      // expose
      resetValidation: d
    } = In(), c = V(() => s.value), f = {
      max: n,
      checkedCount: t,
      onChecked: p,
      onUnchecked: g,
      validate: I,
      resetValidation: d,
      reset: C,
      errorMessage: c
    };
    fe(() => e.modelValue, k, { deep: !0 }), fe(() => o.value, k), a(f), y(i, f);
    function m(P) {
      Fe(() => {
        const { validateTrigger: D, rules: E, modelValue: H } = e;
        l(D, P, E, H);
      });
    }
    function b(P) {
      y(e["onUpdate:modelValue"], P), y(e.onChange, P), m("onChange");
    }
    function p(P) {
      const { modelValue: D } = e;
      D.includes(P) || b([...D, P]);
    }
    function g(P) {
      const { modelValue: D } = e;
      D.includes(P) && b(D.filter((E) => E !== P));
    }
    function k() {
      return r.forEach(({ sync: P }) => P(e.modelValue));
    }
    function T() {
      r.forEach((P) => P.resetWithAnimation());
    }
    function O() {
      const P = r.map(({ checkedValue: E }) => E.value), D = ll(P);
      return T(), y(e["onUpdate:modelValue"], D), D;
    }
    function $() {
      const P = r.filter(({ checked: E }) => !E.value).map(({ checkedValue: E }) => E.value), D = ll(P);
      return T(), y(e["onUpdate:modelValue"], D), D;
    }
    function C() {
      y(e["onUpdate:modelValue"], []), d();
    }
    function I() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: s,
      n: o0,
      classes: r0,
      checkAll: O,
      inverseAll: $,
      reset: C,
      validate: I,
      resetValidation: d
    };
  }
});
Ec.render = a0;
var Zi = Ec;
oe(Zi);
const hE = Zi;
var ua = Zi;
const i0 = {
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
  iconName: en(Vd, "name"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  block: Boolean,
  closable: Boolean,
  onClose: z()
}, { name: s0, n: Zn, classes: l0 } = te("chip");
function u0(e, n) {
  const t = ae("var-icon");
  return h(), Se(Ye, {
    name: e.n("$-fade")
  }, {
    default: ve(() => [
      N(
        "span",
        Ne({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [
          R(e.$slots, "left"),
          N(
            "span",
            {
              class: v(e.n(`text-${e.size}`))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          R(e.$slots, "right"),
          e.closable ? (h(), w(
            "span",
            {
              key: 0,
              class: v(e.n("--close")),
              onClick: n[0] || (n[0] = (...o) => e.handleClose && e.handleClose(...o))
            },
            [
              J(t, {
                name: `${e.iconName ? e.iconName : "close-circle"}`
              }, null, 8, ["name"])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Ic = ne({
  name: s0,
  components: {
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: i0,
  setup(e) {
    const n = V(() => {
      const { plain: r, textColor: a, color: i } = e;
      return r ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), t = V(() => {
      const { size: r, block: a, type: i, plain: s, round: l } = e, u = Zn(a ? "$--flex" : "$--inline-flex"), d = s ? `${Zn("plain")} ${Zn(`plain-${i}`)}` : Zn(`--${i}`), c = l ? Zn("--round") : null;
      return [Zn(`--${r}`), u, d, c];
    });
    function o(r) {
      y(e.onClose, r);
    }
    return {
      chipStyles: n,
      contentClass: t,
      n: Zn,
      classes: l0,
      handleClose: o
    };
  }
});
Ic.render = u0;
var Ji = Ic;
oe(Ji);
const gE = Ji;
var sr = Ji;
const d0 = {
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
  onClick: z()
}, Mc = Symbol("ROW_BIND_COL_KEY");
function c0() {
  const { bindChildren: e, childProviders: n, length: t } = sn(Mc);
  return {
    length: t,
    cols: n,
    bindCols: e
  };
}
function f0() {
  const { parentProvider: e, index: n, bindParent: t } = an(Mc);
  return {
    index: n,
    row: e,
    bindRow: t
  };
}
const { name: v0, n: Ro, classes: m0 } = te("col");
function p0(e, n) {
  return h(), w(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.span >= 0, e.n(`--span-${e.span}`)],
          [e.offset, e.n(`--offset-${e.offset}`)],
          ...e.getSize("xs", e.xs),
          ...e.getSize("sm", e.sm),
          ...e.getSize("md", e.md),
          ...e.getSize("lg", e.lg),
          ...e.getSize("xl", e.xl)
        )
      ),
      style: F({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right),
        paddingTop: e.toSizeUnit(e.padding.top),
        paddingBottom: e.toSizeUnit(e.padding.bottom)
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Dc = ne({
  name: v0,
  props: d0,
  setup(e) {
    const n = V(() => A(e.span)), t = V(() => A(e.offset)), o = S({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = f0(), i = {
      setPadding(u) {
        o.value = u;
      }
    };
    fe([() => e.span, () => e.offset], () => {
      r == null || r.computePadding();
    }), y(a, i);
    function s(u, d) {
      const c = [];
      if (d == null)
        return c;
      if (io(d)) {
        const { offset: f, span: m } = d;
        Number(m) >= 0 && c.push(Ro(`--span-${u}-${m}`)), f && c.push(Ro(`--offset-${u}-${f}`));
      } else
        Number(d) >= 0 && c.push(Ro(`--span-${u}-${d}`));
      return c;
    }
    function l(u) {
      y(e.onClick, u);
    }
    return {
      span: n,
      offset: t,
      padding: o,
      n: Ro,
      classes: m0,
      toNumber: A,
      toSizeUnit: we,
      getSize: s,
      handleClick: l,
      padStartFlex: tr
    };
  }
});
Dc.render = p0;
var Qi = Dc;
oe(Qi);
const bE = Qi;
var da = Qi;
const Bc = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function h0() {
  const { childProviders: e, length: n, bindChildren: t } = sn(
    Bc
  );
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: t
  };
}
const g0 = {
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
  onChange: z(),
  "onUpdate:modelValue": z()
}, { name: b0, n: y0 } = te("collapse");
function $0(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Nc = ne({
  name: b0,
  props: g0,
  setup(e) {
    const n = V(() => e.modelValue), t = V(() => e.offset), o = V(() => e.divider), r = V(() => e.elevation), { length: a, collapseItem: i, bindCollapseItem: s } = h0(), l = {
      active: n,
      offset: t,
      divider: o,
      elevation: r,
      updateItem: c
    };
    fe(
      () => a.value,
      () => Fe().then(b)
    ), fe(
      () => e.modelValue,
      () => Fe().then(b)
    ), s(l);
    function u() {
      return !e.accordion && !Me(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Me(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0;
    }
    function d(p, g) {
      return u() ? g ? e.accordion ? p : [...e.modelValue, p] : e.accordion ? null : e.modelValue.filter((k) => k !== p) : null;
    }
    function c(p, g) {
      const k = d(p, g);
      y(e["onUpdate:modelValue"], k), y(e.onChange, k);
    }
    function f() {
      if (e.accordion)
        return i.find(({ name: g }) => e.modelValue === g.value);
      const p = i.filter(({ name: g }) => g.value === void 0 ? !1 : e.modelValue.includes(g.value));
      return p.length ? p : void 0;
    }
    function m() {
      return e.accordion ? i.find(
        ({ index: p, name: g }) => g.value === void 0 && e.modelValue === p.value
      ) : i.filter(
        ({ index: p, name: g }) => g.value === void 0 && e.modelValue.includes(p.value)
      );
    }
    function b() {
      if (!u())
        return;
      const p = f() || m();
      if (e.accordion && !p || !e.accordion && !p.length) {
        i.forEach((g) => {
          g.init(e.accordion, !1);
        });
        return;
      }
      i.forEach((g) => {
        const k = e.accordion ? p === g : p.includes(g);
        g.init(e.accordion, k);
      });
    }
    return {
      divider: o,
      n: y0
    };
  }
});
Nc.render = $0;
var _i = Nc;
oe(_i);
const yE = _i;
var ca = _i;
function w0() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    Bc
  );
  return t || Tn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: t
  };
}
const S0 = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var Xl = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: C0, n: k0, classes: P0 } = te("collapse-item");
function O0(e, n) {
  const t = ae("var-icon");
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: F(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      N(
        "div",
        {
          class: v(e.n("header")),
          onClick: n[0] || (n[0] = (o) => e.toggle())
        },
        [
          N(
            "div",
            {
              class: v(e.n("header-title"))
            },
            [
              R(e.$slots, "title", {}, () => [
                Te(
                  re(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: v(e.n("header-icon"))
            },
            [
              R(e.$slots, "icon", {}, () => [
                J(t, {
                  name: e.icon,
                  transition: 250,
                  class: v(
                    e.classes(
                      e.n("header-icon"),
                      [e.isShow && e.icon === "chevron-down", e.n("header-open")],
                      [e.disabled, e.n("header--disable")]
                    )
                  )
                }, null, 8, ["name", "class"])
              ])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      Oe(N(
        "div",
        {
          class: v(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...o) => e.transitionend && e.transitionend(...o)),
          onTransitionstart: n[2] || (n[2] = (...o) => e.start && e.start(...o))
        },
        [
          N(
            "div",
            {
              class: v(e.n("content-wrap"))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      ), [
        [Rn, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Vc = ne({
  name: C0,
  components: {
    VarIcon: Ue
  },
  props: S0,
  setup(e) {
    const n = S(!1), t = S(!1), o = S(null), r = V(() => e.name), { index: a, collapse: i, bindCollapse: s } = w0(), { active: l, offset: u, divider: d, elevation: c, updateItem: f } = i, m = {
      index: a,
      name: r,
      init: k
    };
    let b = !0;
    fe(n, (C) => {
      C ? p() : g();
    }), s(m);
    function p() {
      return Xl(this, null, function* () {
        if (!o.value || (o.value.style.height = "", t.value = !0, yield Xo(), !o.value))
          return;
        const { offsetHeight: C } = o.value;
        o.value.style.height = "0px", yield Xo(), o.value && (o.value.style.height = C + "px", b && (yield dn(), b && $()));
      });
    }
    function g() {
      return Xl(this, null, function* () {
        if (!o.value)
          return;
        const { offsetHeight: C } = o.value;
        o.value.style.height = C + "px", yield Xo(), o.value.style.height = "0px";
      });
    }
    function k(C, I) {
      l.value === void 0 || C && Me(l.value) || I === n.value || (n.value = I, T(!0));
    }
    function T(C) {
      e.disabled || C || f(e.name || a.value, !n.value);
    }
    function O() {
      b = !1;
    }
    function $() {
      n.value || (t.value = !1), o.value.style.height = "";
    }
    return {
      isShow: n,
      showContent: t,
      offset: u,
      divider: d,
      elevation: c,
      contentEl: o,
      n: k0,
      start: O,
      classes: P0,
      toggle: T,
      transitionend: $,
      formatElevation: gn
    };
  }
});
Vc.render = O0;
var xi = Vc;
oe(xi);
const $E = xi;
var fa = xi;
const T0 = {
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
  onEnd: z(),
  onChange: z()
}, { name: E0, n: I0 } = te("countdown"), va = 1e3, ma = 60 * va, pa = 60 * ma, Kl = 24 * pa;
function M0(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default", st(Po(e.timeData)), () => [
        Te(
          re(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const Ac = ne({
  name: E0,
  props: T0,
  setup(e) {
    const n = S(""), t = S({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let o = 0, r = !1, a = 0, i = 0, s;
    fe(
      () => e.time,
      () => {
        m(), e.autoStart && c();
      },
      { immediate: !0 }
    ), pt(() => {
      s != null && (r = s, r === !0 && c(!0));
    }), qt(() => {
      s = r, f();
    }), Co(f);
    function l(b, p) {
      const g = Object.values(p), k = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (k.forEach((O, $) => {
        b.includes(O) ? b = b.replace(O, kt(`${g[$]}`, 2, "0")) : g[$ + 1] += g[$] * T[$];
      }), b.includes("S")) {
        const O = kt(`${g[g.length - 1]}`, 3, "0");
        b.includes("SSS") ? b = b.replace("SSS", O) : b.includes("SS") ? b = b.replace("SS", O.slice(0, 2)) : b = b.replace("S", O.slice(0, 1));
      }
      return b;
    }
    function u(b) {
      const p = Math.floor(b / Kl), g = Math.floor(b % Kl / pa), k = Math.floor(b % pa / ma), T = Math.floor(b % ma / va), O = Math.floor(b % va), $ = {
        days: p,
        hours: g,
        minutes: k,
        seconds: T,
        milliseconds: O
      };
      t.value = $, y(e.onChange, t.value), n.value = l(e.format, $);
    }
    function d() {
      const { time: b, onEnd: p } = e, g = performance.now();
      if (o || (o = g + A(b)), i = o - g, i < 0 && (i = 0), u(i), i === 0) {
        y(p);
        return;
      }
      r && (a = so(d));
    }
    function c(b = !1) {
      r && !b || (r = !0, o = performance.now() + (i || A(e.time)), d());
    }
    function f() {
      r = !1, ul(a);
    }
    function m() {
      o = 0, r = !1, ul(a), d();
    }
    return {
      showTime: n,
      timeData: t,
      n: I0,
      start: c,
      pause: f,
      reset: m
    };
  }
});
Ac.render = M0;
var es = Ac;
oe(es);
const wE = es;
var ha = es;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Nt = 9e15, yt = 1e9, ga = "0123456789abcdef", lr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ur = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ba = {
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
  minE: -Nt,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Nt,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, zc, jn, ye = !0, Cr = "[DecimalError] ", vt = Cr + "Invalid argument: ", Lc = Cr + "Precision limit exceeded", Rc = Cr + "crypto unavailable", Uc = "[object Decimal]", on = Math.floor, Je = Math.pow, D0 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, B0 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, N0 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Hc = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, An = 1e7, ge = 7, V0 = 9007199254740991, A0 = lr.length - 1, ya = ur.length - 1, K = { toStringTag: Uc };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), me(e);
};
K.ceil = function() {
  return me(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, n) {
  var t, o = this, r = o.constructor;
  if (e = new r(e), n = new r(n), !e.s || !n.s)
    return new r(NaN);
  if (e.gt(n))
    throw Error(vt + n);
  return t = o.cmp(e), t < 0 ? e : o.cmp(n) > 0 ? n : new r(o);
};
K.comparedTo = K.cmp = function(e) {
  var n, t, o, r, a = this, i = a.d, s = (e = new a.constructor(e)).d, l = a.s, u = e.s;
  if (!i || !s)
    return !l || !u ? NaN : l !== u ? l : i === s ? 0 : !i ^ l < 0 ? 1 : -1;
  if (!i[0] || !s[0])
    return i[0] ? l : s[0] ? -u : 0;
  if (l !== u)
    return l;
  if (a.e !== e.e)
    return a.e > e.e ^ l < 0 ? 1 : -1;
  for (o = i.length, r = s.length, n = 0, t = o < r ? o : r; n < t; ++n)
    if (i[n] !== s[n])
      return i[n] > s[n] ^ l < 0 ? 1 : -1;
  return o === r ? 0 : o > r ^ l < 0 ? 1 : -1;
};
K.cosine = K.cos = function() {
  var e, n, t = this, o = t.constructor;
  return t.d ? t.d[0] ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + ge, o.rounding = 1, t = z0(o, qc(o, t)), o.precision = e, o.rounding = n, me(jn == 2 || jn == 3 ? t.neg() : t, e, n, !0)) : new o(1) : new o(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, t, o, r, a, i, s, l, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new c(d);
  for (ye = !1, a = d.s * Je(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (t = tn(d.d), e = d.e, (a = (e - t.length + 1) % 3) && (t += a == 1 || a == -2 ? "0" : "00"), a = Je(t, 1 / 3), e = on((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), o = new c(t), o.s = d.s) : o = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (s = o, l = s.times(s).times(s), u = l.plus(d), o = ze(u.plus(d).times(s), u.plus(l), i + 2, 1), tn(s.d).slice(0, i) === (t = tn(o.d)).slice(0, i))
      if (t = t.slice(i - 3, i + 1), t == "9999" || !r && t == "4999") {
        if (!r && (me(s, e + 1, 0), s.times(s).times(s).eq(d))) {
          o = s;
          break;
        }
        i += 4, r = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (me(o, e + 1, 1), n = !o.times(o).times(o).eq(d));
        break;
      }
  return ye = !0, me(o, e, c.rounding, n);
};
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, t = NaN;
  if (n) {
    if (e = n.length - 1, t = (e - on(this.e / ge)) * ge, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
K.dividedBy = K.div = function(e) {
  return ze(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var n = this, t = n.constructor;
  return me(ze(n, new t(e), 0, 1, 1), t.precision, t.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return me(new this.constructor(this), this.e + 1, 3);
};
K.greaterThan = K.gt = function(e) {
  return this.cmp(e) > 0;
};
K.greaterThanOrEqualTo = K.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
K.hyperbolicCosine = K.cosh = function() {
  var e, n, t, o, r, a = this, i = a.constructor, s = new i(1);
  if (!a.isFinite())
    return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return s;
  t = i.precision, o = i.rounding, i.precision = t + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / Pr(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = Ht(i, 1, a.times(n), new i(1), !0);
  for (var l, u = e, d = new i(8); u--; )
    l = a.times(a), a = s.minus(l.times(d.minus(l.times(d))));
  return me(a, i.precision = t, i.rounding = o, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, t, o, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero())
    return new a(r);
  if (n = a.precision, t = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, o = r.d.length, o < 3)
    r = Ht(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(o), e = e > 16 ? 16 : e | 0, r = r.times(1 / Pr(5, e)), r = Ht(a, 2, r, r, !0);
    for (var i, s = new a(5), l = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(s.plus(i.times(l.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = t, me(r, n, t, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 7, o.rounding = 1, ze(t.sinh(), t.cosh(), o.precision = e, o.rounding = n)) : new o(t.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, t = n.constructor, o = n.abs().cmp(1), r = t.precision, a = t.rounding;
  return o !== -1 ? o === 0 ? n.isNeg() ? Vn(t, r, a) : new t(0) : new t(NaN) : n.isZero() ? Vn(t, r + 4, a).times(0.5) : (t.precision = r + 6, t.rounding = 1, n = n.asin(), e = Vn(t, r + 4, a).times(0.5), t.precision = r, t.rounding = a, e.minus(n));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, n, t = this, o = t.constructor;
  return t.lte(1) ? new o(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, o.rounding = 1, ye = !1, t = t.times(t).minus(1).sqrt().plus(t), ye = !0, o.precision = e, o.rounding = n, t.ln()) : new o(t);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, n, t = this, o = t.constructor;
  return !t.isFinite() || t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, o.rounding = 1, ye = !1, t = t.times(t).plus(1).sqrt().plus(t), ye = !0, o.precision = e, o.rounding = n, t.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, n, t, o, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, o = r.sd(), Math.max(o, e) < 2 * -r.e - 1 ? me(new a(r), e, n, !0) : (a.precision = t = o - r.e, r = ze(r.plus(1), new a(1).minus(r), t + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
K.inverseSine = K.asin = function() {
  var e, n, t, o, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), t = a.precision, o = a.rounding, n !== -1 ? n === 0 ? (e = Vn(a, t + 4, o).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = t + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = t, a.rounding = o, r.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, n, t, o, r, a, i, s, l, u = this, d = u.constructor, c = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && c + 4 <= ya)
      return i = Vn(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (c + 4 <= ya)
      return i = Vn(d, c + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = s = c + 10, d.rounding = 1, t = Math.min(28, s / ge + 2 | 0), e = t; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ye = !1, n = Math.ceil(s / ge), o = 1, l = u.times(u), i = new d(u), r = u; e !== -1; )
    if (r = r.times(l), a = i.minus(r.div(o += 2)), r = r.times(l), i = a.plus(r.div(o += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === a.d[e] && e--; )
        ;
  return t && (i = i.times(2 << t - 1)), ye = !0, me(i, d.precision = c, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && on(this.e / ge) > this.d.length - 2;
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
  var n, t, o, r, a, i, s, l, u = this, d = u.constructor, c = d.precision, f = d.rounding, m = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1))
      return new d(NaN);
    n = e.eq(10);
  }
  if (t = u.d, u.s < 0 || !t || !t[0] || u.eq(1))
    return new d(t && !t[0] ? -1 / 0 : u.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (n)
    if (t.length > 1)
      a = !0;
    else {
      for (r = t[0]; r % 10 === 0; )
        r /= 10;
      a = r !== 1;
    }
  if (ye = !1, s = c + m, i = at(u, s), o = n ? dr(d, s + 10) : at(e, s), l = ze(i, o, s, 1), vo(l.d, r = c, f))
    do
      if (s += 10, i = at(u, s), o = n ? dr(d, s + 10) : at(e, s), l = ze(i, o, s, 1), !a) {
        +tn(l.d).slice(r + 1, r + 15) + 1 == 1e14 && (l = me(l, c + 1, 0));
        break;
      }
    while (vo(l.d, r += 10, f));
  return ye = !0, me(l, c, f);
};
K.minus = K.sub = function(e) {
  var n, t, o, r, a, i, s, l, u, d, c, f, m = this, b = m.constructor;
  if (e = new b(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new b(NaN) : m.d ? e.s = -e.s : e = new b(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, s = b.precision, l = b.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new b(m);
    else
      return new b(l === 3 ? -0 : 0);
    return ye ? me(e, s, l) : e;
  }
  if (t = on(e.e / ge), d = on(m.e / ge), u = u.slice(), a = d - t, a) {
    for (c = a < 0, c ? (n = u, a = -a, i = f.length) : (n = f, t = d, i = u.length), o = Math.max(Math.ceil(s / ge), i) + 2, a > o && (a = o, n.length = 1), n.reverse(), o = a; o--; )
      n.push(0);
    n.reverse();
  } else {
    for (o = u.length, i = f.length, c = o < i, c && (i = o), o = 0; o < i; o++)
      if (u[o] != f[o]) {
        c = u[o] < f[o];
        break;
      }
    a = 0;
  }
  for (c && (n = u, u = f, f = n, e.s = -e.s), i = u.length, o = f.length - i; o > 0; --o)
    u[i++] = 0;
  for (o = f.length; o > a; ) {
    if (u[--o] < f[o]) {
      for (r = o; r && u[--r] === 0; )
        u[r] = An - 1;
      --u[r], u[o] += An;
    }
    u[o] -= f[o];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --t;
  return u[0] ? (e.d = u, e.e = kr(u, t), ye ? me(e, s, l) : e) : new b(l === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, t = this, o = t.constructor;
  return e = new o(e), !t.d || !e.s || e.d && !e.d[0] ? new o(NaN) : !e.d || t.d && !t.d[0] ? me(new o(t), o.precision, o.rounding) : (ye = !1, o.modulo == 9 ? (n = ze(t, e.abs(), 0, 3, 1), n.s *= e.s) : n = ze(t, e, 0, o.modulo, 1), n = n.times(e), ye = !0, t.minus(n));
};
K.naturalExponential = K.exp = function() {
  return $a(this);
};
K.naturalLogarithm = K.ln = function() {
  return at(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, me(e);
};
K.plus = K.add = function(e) {
  var n, t, o, r, a, i, s, l, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, s = f.precision, l = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), ye ? me(e, s, l) : e;
  if (a = on(c.e / ge), o = on(e.e / ge), u = u.slice(), r = a - o, r) {
    for (r < 0 ? (t = u, r = -r, i = d.length) : (t = d, o = a, i = u.length), a = Math.ceil(s / ge), i = a > i ? a + 1 : i + 1, r > i && (r = i, t.length = 1), t.reverse(); r--; )
      t.push(0);
    t.reverse();
  }
  for (i = u.length, r = d.length, i - r < 0 && (r = i, t = d, d = u, u = t), n = 0; r; )
    n = (u[--r] = u[r] + d[r] + n) / An | 0, u[r] %= An;
  for (n && (u.unshift(n), ++o), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = kr(u, o), ye ? me(e, s, l) : e;
};
K.precision = K.sd = function(e) {
  var n, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(vt + e);
  return t.d ? (n = Fc(t.d), e && t.e + 1 > n && (n = t.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return me(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + ge, o.rounding = 1, t = R0(o, qc(o, t)), o.precision = e, o.rounding = n, me(jn > 2 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, t, o, r, a, i = this, s = i.d, l = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !s || !s[0])
    return new d(!u || u < 0 && (!s || s[0]) ? NaN : s ? i : 1 / 0);
  for (ye = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = tn(s), (n.length + l) % 2 == 0 && (n += "0"), u = Math.sqrt(n), l = on((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? n = "5e" + l : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + l), o = new d(n)) : o = new d(u.toString()), t = (l = d.precision) + 3; ; )
    if (a = o, o = a.plus(ze(i, a, t + 2, 1)).times(0.5), tn(a.d).slice(0, t) === (n = tn(o.d)).slice(0, t))
      if (n = n.slice(t - 3, t + 1), n == "9999" || !r && n == "4999") {
        if (!r && (me(a, l + 1, 0), a.times(a).eq(i))) {
          o = a;
          break;
        }
        t += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (me(o, l + 1, 1), e = !o.times(o).eq(i));
        break;
      }
  return ye = !0, me(o, l, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 10, o.rounding = 1, t = t.sin(), t.s = 1, t = ze(t, new o(1).minus(t.times(t)).sqrt(), e + 10, 0), o.precision = e, o.rounding = n, me(jn == 2 || jn == 4 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
K.times = K.mul = function(e) {
  var n, t, o, r, a, i, s, l, u, d = this, c = d.constructor, f = d.d, m = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new c(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (t = on(d.e / ge) + on(e.e / ge), l = f.length, u = m.length, l < u && (a = f, f = m, m = a, i = l, l = u, u = i), a = [], i = l + u, o = i; o--; )
    a.push(0);
  for (o = u; --o >= 0; ) {
    for (n = 0, r = l + o; r > o; )
      s = a[r] + m[o] * f[r - o - 1] + n, a[r--] = s % An | 0, n = s / An | 0;
    a[r] = (a[r] + n) % An | 0;
  }
  for (; !a[--i]; )
    a.pop();
  return n ? ++t : a.shift(), e.d = a, e.e = kr(a, t), ye ? me(e, c.precision, c.rounding) : e;
};
K.toBinary = function(e, n) {
  return ns(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var t = this, o = t.constructor;
  return t = new o(t), e === void 0 ? t : (hn(e, 0, yt), n === void 0 ? n = o.rounding : hn(n, 0, 8), me(t, e + t.e + 1, n));
};
K.toExponential = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Un(o, !0) : (hn(e, 0, yt), n === void 0 ? n = r.rounding : hn(n, 0, 8), o = me(new r(o), e + 1, n), t = Un(o, !0, e + 1)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toFixed = function(e, n) {
  var t, o, r = this, a = r.constructor;
  return e === void 0 ? t = Un(r) : (hn(e, 0, yt), n === void 0 ? n = a.rounding : hn(n, 0, 8), o = me(new a(r), e + r.e + 1, n), t = Un(o, !1, e + o.e + 1)), r.isNeg() && !r.isZero() ? "-" + t : t;
};
K.toFraction = function(e) {
  var n, t, o, r, a, i, s, l, u, d, c, f, m = this, b = m.d, p = m.constructor;
  if (!b)
    return new p(m);
  if (u = t = new p(1), o = l = new p(0), n = new p(o), a = n.e = Fc(b) - m.e - 1, i = a % ge, n.d[0] = Je(10, i < 0 ? ge + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (s = new p(e), !s.isInt() || s.lt(u))
      throw Error(vt + s);
    e = s.gt(n) ? a > 0 ? n : u : s;
  }
  for (ye = !1, s = new p(tn(b)), d = p.precision, p.precision = a = b.length * ge * 2; c = ze(s, n, 0, 1, 1), r = t.plus(c.times(o)), r.cmp(e) != 1; )
    t = o, o = r, r = u, u = l.plus(c.times(r)), l = r, r = n, n = s.minus(c.times(r)), s = r;
  return r = ze(e.minus(t), o, 0, 1, 1), l = l.plus(r.times(u)), t = t.plus(r.times(o)), l.s = u.s = m.s, f = ze(u, o, a, 1).minus(m).abs().cmp(ze(l, t, a, 1).minus(m).abs()) < 1 ? [u, o] : [l, t], p.precision = d, ye = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return ns(this, 16, e, n);
};
K.toNearest = function(e, n) {
  var t = this, o = t.constructor;
  if (t = new o(t), e == null) {
    if (!t.d)
      return t;
    e = new o(1), n = o.rounding;
  } else {
    if (e = new o(e), n === void 0 ? n = o.rounding : hn(n, 0, 8), !t.d)
      return e.s ? t : e;
    if (!e.d)
      return e.s && (e.s = t.s), e;
  }
  return e.d[0] ? (ye = !1, t = ze(t, e, 0, n, 1).times(e), ye = !0, me(t)) : (e.s = t.s, t = e), t;
};
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, n) {
  return ns(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, t, o, r, a, i, s = this, l = s.constructor, u = +(e = new l(e));
  if (!s.d || !e.d || !s.d[0] || !e.d[0])
    return new l(Je(+s, u));
  if (s = new l(s), s.eq(1))
    return s;
  if (o = l.precision, a = l.rounding, e.eq(1))
    return me(s, o, a);
  if (n = on(e.e / ge), n >= e.d.length - 1 && (t = u < 0 ? -u : u) <= V0)
    return r = Yc(l, s, t, o), e.s < 0 ? new l(1).div(r) : me(r, o, a);
  if (i = s.s, i < 0) {
    if (n < e.d.length - 1)
      return new l(NaN);
    if (e.d[n] & 1 || (i = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1)
      return s.s = i, s;
  }
  return t = Je(+s, u), n = t == 0 || !isFinite(t) ? on(u * (Math.log("0." + tn(s.d)) / Math.LN10 + s.e + 1)) : new l(t + "").e, n > l.maxE + 1 || n < l.minE - 1 ? new l(n > 0 ? i / 0 : 0) : (ye = !1, l.rounding = s.s = 1, t = Math.min(12, (n + "").length), r = $a(e.times(at(s, o + t)), o), r.d && (r = me(r, o + 5, 1), vo(r.d, o, a) && (n = o + 10, r = me($a(e.times(at(s, n + t)), n), n + 5, 1), +tn(r.d).slice(o + 1, o + 15) + 1 == 1e14 && (r = me(r, o + 1, 0)))), r.s = i, ye = !0, l.rounding = a, me(r, o, a));
};
K.toPrecision = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Un(o, o.e <= r.toExpNeg || o.e >= r.toExpPos) : (hn(e, 1, yt), n === void 0 ? n = r.rounding : hn(n, 0, 8), o = me(new r(o), e, n), t = Un(o, e <= o.e || o.e <= r.toExpNeg, e)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var t = this, o = t.constructor;
  return e === void 0 ? (e = o.precision, n = o.rounding) : (hn(e, 1, yt), n === void 0 ? n = o.rounding : hn(n, 0, 8)), me(new o(t), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, t = Un(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
K.truncated = K.trunc = function() {
  return me(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, t = Un(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function tn(e) {
  var n, t, o, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      o = e[n] + "", t = ge - o.length, t && (a += _n(t)), a += o;
    i = e[n], o = i + "", t = ge - o.length, t && (a += _n(t));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return a + i;
}
function hn(e, n, t) {
  if (e !== ~~e || e < n || e > t)
    throw Error(vt + e);
}
function vo(e, n, t, o) {
  var r, a, i, s;
  for (a = e[0]; a >= 10; a /= 10)
    --n;
  return --n < 0 ? (n += ge, r = 0) : (r = Math.ceil((n + 1) / ge), n %= ge), a = Je(10, ge - n), s = e[r] % a | 0, o == null ? n < 3 ? (n == 0 ? s = s / 100 | 0 : n == 1 && (s = s / 10 | 0), i = t < 4 && s == 99999 || t > 3 && s == 49999 || s == 5e4 || s == 0) : i = (t < 4 && s + 1 == a || t > 3 && s + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == Je(10, n - 2) - 1 || (s == a / 2 || s == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? s = s / 1e3 | 0 : n == 1 ? s = s / 100 | 0 : n == 2 && (s = s / 10 | 0), i = (o || t < 4) && s == 9999 || !o && t > 3 && s == 4999) : i = ((o || t < 4) && s + 1 == a || !o && t > 3 && s + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == Je(10, n - 3) - 1, i;
}
function Ko(e, n, t) {
  for (var o, r = [0], a, i = 0, s = e.length; i < s; ) {
    for (a = r.length; a--; )
      r[a] *= n;
    for (r[0] += ga.indexOf(e.charAt(i++)), o = 0; o < r.length; o++)
      r[o] > t - 1 && (r[o + 1] === void 0 && (r[o + 1] = 0), r[o + 1] += r[o] / t | 0, r[o] %= t);
  }
  return r.reverse();
}
function z0(e, n) {
  var t, o, r;
  if (n.isZero())
    return n;
  o = n.d.length, o < 32 ? (t = Math.ceil(o / 3), r = (1 / Pr(4, t)).toString()) : (t = 16, r = "2.3283064365386962890625e-10"), e.precision += t, n = Ht(e, 1, n.times(r), new e(1));
  for (var a = t; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= t, n;
}
var ze = function() {
  function e(o, r, a) {
    var i, s = 0, l = o.length;
    for (o = o.slice(); l--; )
      i = o[l] * r + s, o[l] = i % a | 0, s = i / a | 0;
    return s && o.unshift(s), o;
  }
  function n(o, r, a, i) {
    var s, l;
    if (a != i)
      l = a > i ? 1 : -1;
    else
      for (s = l = 0; s < a; s++)
        if (o[s] != r[s]) {
          l = o[s] > r[s] ? 1 : -1;
          break;
        }
    return l;
  }
  function t(o, r, a, i) {
    for (var s = 0; a--; )
      o[a] -= s, s = o[a] < r[a] ? 1 : 0, o[a] = s * i + o[a] - r[a];
    for (; !o[0] && o.length > 1; )
      o.shift();
  }
  return function(o, r, a, i, s, l) {
    var u, d, c, f, m, b, p, g, k, T, O, $, C, I, P, D, E, H, L, U, ie = o.constructor, G = o.s == r.s ? 1 : -1, W = o.d, Z = r.d;
    if (!W || !W[0] || !Z || !Z[0])
      return new ie(
        // Return NaN if either NaN, or both Infinity or 0.
        !o.s || !r.s || (W ? Z && W[0] == Z[0] : !Z) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          W && W[0] == 0 || !Z ? G * 0 : G / 0
        )
      );
    for (l ? (m = 1, d = o.e - r.e) : (l = An, m = ge, d = on(o.e / m) - on(r.e / m)), L = Z.length, E = W.length, k = new ie(G), T = k.d = [], c = 0; Z[c] == (W[c] || 0); c++)
      ;
    if (Z[c] > (W[c] || 0) && d--, a == null ? (I = a = ie.precision, i = ie.rounding) : s ? I = a + (o.e - r.e) + 1 : I = a, I < 0)
      T.push(1), b = !0;
    else {
      if (I = I / m + 2 | 0, c = 0, L == 1) {
        for (f = 0, Z = Z[0], I++; (c < E || f) && I--; c++)
          P = f * l + (W[c] || 0), T[c] = P / Z | 0, f = P % Z | 0;
        b = f || c < E;
      } else {
        for (f = l / (Z[0] + 1) | 0, f > 1 && (Z = e(Z, f, l), W = e(W, f, l), L = Z.length, E = W.length), D = L, O = W.slice(0, L), $ = O.length; $ < L; )
          O[$++] = 0;
        U = Z.slice(), U.unshift(0), H = Z[0], Z[1] >= l / 2 && ++H;
        do
          f = 0, u = n(Z, O, L, $), u < 0 ? (C = O[0], L != $ && (C = C * l + (O[1] || 0)), f = C / H | 0, f > 1 ? (f >= l && (f = l - 1), p = e(Z, f, l), g = p.length, $ = O.length, u = n(p, O, g, $), u == 1 && (f--, t(p, L < g ? U : Z, g, l))) : (f == 0 && (u = f = 1), p = Z.slice()), g = p.length, g < $ && p.unshift(0), t(O, p, $, l), u == -1 && ($ = O.length, u = n(Z, O, L, $), u < 1 && (f++, t(O, L < $ ? U : Z, $, l))), $ = O.length) : u === 0 && (f++, O = [0]), T[c++] = f, u && O[0] ? O[$++] = W[D] || 0 : (O = [W[D]], $ = 1);
        while ((D++ < E || O[0] !== void 0) && I--);
        b = O[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (m == 1)
      k.e = d, zc = b;
    else {
      for (c = 1, f = T[0]; f >= 10; f /= 10)
        c++;
      k.e = c + d * m - 1, me(k, s ? a + k.e + 1 : a, i, b);
    }
    return k;
  };
}();
function me(e, n, t, o) {
  var r, a, i, s, l, u, d, c, f, m = e.constructor;
  e:
    if (n != null) {
      if (c = e.d, !c)
        return e;
      for (r = 1, s = c[0]; s >= 10; s /= 10)
        r++;
      if (a = n - r, a < 0)
        a += ge, i = n, d = c[f = 0], l = d / Je(10, r - i - 1) % 10 | 0;
      else if (f = Math.ceil((a + 1) / ge), s = c.length, f >= s)
        if (o) {
          for (; s++ <= f; )
            c.push(0);
          d = l = 0, r = 1, a %= ge, i = a - ge + 1;
        } else
          break e;
      else {
        for (d = s = c[f], r = 1; s >= 10; s /= 10)
          r++;
        a %= ge, i = a - ge + r, l = i < 0 ? 0 : d / Je(10, r - i - 1) % 10 | 0;
      }
      if (o = o || n < 0 || c[f + 1] !== void 0 || (i < 0 ? d : d % Je(10, r - i - 1)), u = t < 4 ? (l || o) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (t == 4 || o || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? i > 0 ? d / Je(10, r - i) : 0 : c[f - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), n < 1 || !c[0])
        return c.length = 0, u ? (n -= e.e + 1, c[0] = Je(10, (ge - n % ge) % ge), e.e = -n || 0) : c[0] = e.e = 0, e;
      if (a == 0 ? (c.length = f, s = 1, f--) : (c.length = f + 1, s = Je(10, ge - a), c[f] = i > 0 ? (d / Je(10, r - i) % Je(10, i) | 0) * s : 0), u)
        for (; ; )
          if (f == 0) {
            for (a = 1, i = c[0]; i >= 10; i /= 10)
              a++;
            for (i = c[0] += s, s = 1; i >= 10; i /= 10)
              s++;
            a != s && (e.e++, c[0] == An && (c[0] = 1));
            break;
          } else {
            if (c[f] += s, c[f] != An)
              break;
            c[f--] = 0, s = 1;
          }
      for (a = c.length; c[--a] === 0; )
        c.pop();
    }
  return ye && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Un(e, n, t) {
  if (!e.isFinite())
    return Wc(e);
  var o, r = e.e, a = tn(e.d), i = a.length;
  return n ? (t && (o = t - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + _n(o) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + _n(-r - 1) + a, t && (o = t - i) > 0 && (a += _n(o))) : r >= i ? (a += _n(r + 1 - i), t && (o = t - r - 1) > 0 && (a = a + "." + _n(o))) : ((o = r + 1) < i && (a = a.slice(0, o) + "." + a.slice(o)), t && (o = t - i) > 0 && (r + 1 === i && (a += "."), a += _n(o))), a;
}
function kr(e, n) {
  var t = e[0];
  for (n *= ge; t >= 10; t /= 10)
    n++;
  return n;
}
function dr(e, n, t) {
  if (n > A0)
    throw ye = !0, t && (e.precision = t), Error(Lc);
  return me(new e(lr), n, 1, !0);
}
function Vn(e, n, t) {
  if (n > ya)
    throw Error(Lc);
  return me(new e(ur), n, t, !0);
}
function Fc(e) {
  var n = e.length - 1, t = n * ge + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      t--;
    for (n = e[0]; n >= 10; n /= 10)
      t++;
  }
  return t;
}
function _n(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Yc(e, n, t, o) {
  var r, a = new e(1), i = Math.ceil(o / ge + 4);
  for (ye = !1; ; ) {
    if (t % 2 && (a = a.times(n), Jl(a.d, i) && (r = !0)), t = on(t / 2), t === 0) {
      t = a.d.length - 1, r && a.d[t] === 0 && ++a.d[t];
      break;
    }
    n = n.times(n), Jl(n.d, i);
  }
  return ye = !0, a;
}
function Zl(e) {
  return e.d[e.d.length - 1] & 1;
}
function jc(e, n, t) {
  for (var o, r = new e(n[0]), a = 0; ++a < n.length; )
    if (o = new e(n[a]), o.s)
      r[t](o) && (r = o);
    else {
      r = o;
      break;
    }
  return r;
}
function $a(e, n) {
  var t, o, r, a, i, s, l, u = 0, d = 0, c = 0, f = e.constructor, m = f.rounding, b = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ye = !1, l = b) : l = n, s = new f(0.03125); e.e > -2; )
    e = e.times(s), c += 5;
  for (o = Math.log(Je(2, c)) / Math.LN10 * 2 + 5 | 0, l += o, t = a = i = new f(1), f.precision = l; ; ) {
    if (a = me(a.times(e), l, 1), t = t.times(++d), s = i.plus(ze(a, t, l, 1)), tn(s.d).slice(0, l) === tn(i.d).slice(0, l)) {
      for (r = c; r--; )
        i = me(i.times(i), l, 1);
      if (n == null)
        if (u < 3 && vo(i.d, l - o, m, u))
          f.precision = l += 10, t = a = s = new f(1), d = 0, u++;
        else
          return me(i, f.precision = b, m, ye = !0);
      else
        return f.precision = b, i;
    }
    i = s;
  }
}
function at(e, n) {
  var t, o, r, a, i, s, l, u, d, c, f, m = 1, b = 10, p = e, g = p.d, k = p.constructor, T = k.rounding, O = k.precision;
  if (p.s < 0 || !g || !g[0] || !p.e && g[0] == 1 && g.length == 1)
    return new k(g && !g[0] ? -1 / 0 : p.s != 1 ? NaN : g ? 0 : p);
  if (n == null ? (ye = !1, d = O) : d = n, k.precision = d += b, t = tn(g), o = t.charAt(0), Math.abs(a = p.e) < 15e14) {
    for (; o < 7 && o != 1 || o == 1 && t.charAt(1) > 3; )
      p = p.times(e), t = tn(p.d), o = t.charAt(0), m++;
    a = p.e, o > 1 ? (p = new k("0." + t), a++) : p = new k(o + "." + t.slice(1));
  } else
    return u = dr(k, d + 2, O).times(a + ""), p = at(new k(o + "." + t.slice(1)), d - b).plus(u), k.precision = O, n == null ? me(p, O, T, ye = !0) : p;
  for (c = p, l = i = p = ze(p.minus(1), p.plus(1), d, 1), f = me(p.times(p), d, 1), r = 3; ; ) {
    if (i = me(i.times(f), d, 1), u = l.plus(ze(i, new k(r), d, 1)), tn(u.d).slice(0, d) === tn(l.d).slice(0, d))
      if (l = l.times(2), a !== 0 && (l = l.plus(dr(k, d + 2, O).times(a + ""))), l = ze(l, new k(m), d, 1), n == null)
        if (vo(l.d, d - b, T, s))
          k.precision = d += b, u = i = p = ze(c.minus(1), c.plus(1), d, 1), f = me(p.times(p), d, 1), r = s = 1;
        else
          return me(l, k.precision = O, T, ye = !0);
      else
        return k.precision = O, l;
    l = u, r += 2;
  }
}
function Wc(e) {
  return String(e.s * e.s / 0);
}
function wa(e, n) {
  var t, o, r;
  for ((t = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (o = n.search(/e/i)) > 0 ? (t < 0 && (t = o), t += +n.slice(o + 1), n = n.substring(0, o)) : t < 0 && (t = n.length), o = 0; n.charCodeAt(o) === 48; o++)
    ;
  for (r = n.length; n.charCodeAt(r - 1) === 48; --r)
    ;
  if (n = n.slice(o, r), n) {
    if (r -= o, e.e = t = t - o - 1, e.d = [], o = (t + 1) % ge, t < 0 && (o += ge), o < r) {
      for (o && e.d.push(+n.slice(0, o)), r -= ge; o < r; )
        e.d.push(+n.slice(o, o += ge));
      n = n.slice(o), o = ge - n.length;
    } else
      o -= r;
    for (; o--; )
      n += "0";
    e.d.push(+n), ye && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function L0(e, n) {
  var t, o, r, a, i, s, l, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Hc.test(n))
      return wa(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (B0.test(n))
    t = 16, n = n.toLowerCase();
  else if (D0.test(n))
    t = 2;
  else if (N0.test(n))
    t = 8;
  else
    throw Error(vt + n);
  for (a = n.search(/p/i), a > 0 ? (l = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, o = e.constructor, i && (n = n.replace(".", ""), s = n.length, a = s - a, r = Yc(o, new o(t), a, a * 2)), u = Ko(n, t, An), d = u.length - 1, a = d; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new o(e.s * 0) : (e.e = kr(u, d), e.d = u, ye = !1, i && (e = ze(e, r, s * 4)), l && (e = e.times(Math.abs(l) < 54 ? Je(2, l) : it.pow(2, l))), ye = !0, e);
}
function R0(e, n) {
  var t, o = n.d.length;
  if (o < 3)
    return n.isZero() ? n : Ht(e, 2, n, n);
  t = 1.4 * Math.sqrt(o), t = t > 16 ? 16 : t | 0, n = n.times(1 / Pr(5, t)), n = Ht(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), s = new e(20); t--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(s))));
  return n;
}
function Ht(e, n, t, o, r) {
  var a, i, s, l, u = e.precision, d = Math.ceil(u / ge);
  for (ye = !1, l = t.times(t), s = new e(o); ; ) {
    if (i = ze(s.times(l), new e(n++ * n++), u, 1), s = r ? o.plus(i) : o.minus(i), o = ze(i.times(l), new e(n++ * n++), u, 1), i = s.plus(o), i.d[d] !== void 0) {
      for (a = d; i.d[a] === s.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = s, s = o, o = i, i = a;
  }
  return ye = !0, i.d.length = d + 1, i;
}
function Pr(e, n) {
  for (var t = e; --n; )
    t *= e;
  return t;
}
function qc(e, n) {
  var t, o = n.s < 0, r = Vn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return jn = o ? 4 : 1, n;
  if (t = n.divToInt(r), t.isZero())
    jn = o ? 3 : 2;
  else {
    if (n = n.minus(t.times(r)), n.lte(a))
      return jn = Zl(t) ? o ? 2 : 3 : o ? 4 : 1, n;
    jn = Zl(t) ? o ? 1 : 4 : o ? 3 : 2;
  }
  return n.minus(r).abs();
}
function ns(e, n, t, o) {
  var r, a, i, s, l, u, d, c, f, m = e.constructor, b = t !== void 0;
  if (b ? (hn(t, 1, yt), o === void 0 ? o = m.rounding : hn(o, 0, 8)) : (t = m.precision, o = m.rounding), !e.isFinite())
    d = Wc(e);
  else {
    for (d = Un(e), i = d.indexOf("."), b ? (r = 2, n == 16 ? t = t * 4 - 3 : n == 8 && (t = t * 3 - 2)) : r = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Ko(Un(f), 10, r), f.e = f.d.length), c = Ko(d, 10, r), a = l = c.length; c[--l] == 0; )
      c.pop();
    if (!c[0])
      d = b ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new m(e), e.d = c, e.e = a, e = ze(e, f, t, o, 0, r), c = e.d, a = e.e, u = zc), i = c[t], s = r / 2, u = u || c[t + 1] !== void 0, u = o < 4 ? (i !== void 0 || u) && (o === 0 || o === (e.s < 0 ? 3 : 2)) : i > s || i === s && (o === 4 || u || o === 6 && c[t - 1] & 1 || o === (e.s < 0 ? 8 : 7)), c.length = t, u)
        for (; ++c[--t] > r - 1; )
          c[t] = 0, t || (++a, c.unshift(1));
      for (l = c.length; !c[l - 1]; --l)
        ;
      for (i = 0, d = ""; i < l; i++)
        d += ga.charAt(c[i]);
      if (b) {
        if (l > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --l; l % i; l++)
              d += "0";
            for (c = Ko(d, r, n), l = c.length; !c[l - 1]; --l)
              ;
            for (i = 1, d = "1."; i < l; i++)
              d += ga.charAt(c[i]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; )
          d = "0" + d;
        d = "0." + d;
      } else if (++a > l)
        for (a -= l; a--; )
          d += "0";
      else
        a < l && (d = d.slice(0, a) + "." + d.slice(a));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function Jl(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function U0(e) {
  return new this(e).abs();
}
function H0(e) {
  return new this(e).acos();
}
function F0(e) {
  return new this(e).acosh();
}
function Y0(e, n) {
  return new this(e).plus(n);
}
function j0(e) {
  return new this(e).asin();
}
function W0(e) {
  return new this(e).asinh();
}
function q0(e) {
  return new this(e).atan();
}
function G0(e) {
  return new this(e).atanh();
}
function X0(e, n) {
  e = new this(e), n = new this(n);
  var t, o = this.precision, r = this.rounding, a = o + 4;
  return !e.s || !n.s ? t = new this(NaN) : !e.d && !n.d ? (t = Vn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), t.s = e.s) : !n.d || e.isZero() ? (t = n.s < 0 ? Vn(this, o, r) : new this(0), t.s = e.s) : !e.d || n.isZero() ? (t = Vn(this, a, 1).times(0.5), t.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, t = this.atan(ze(e, n, a, 1)), n = Vn(this, a, 1), this.precision = o, this.rounding = r, t = e.s < 0 ? t.minus(n) : t.plus(n)) : t = this.atan(ze(e, n, a, 1)), t;
}
function K0(e) {
  return new this(e).cbrt();
}
function Z0(e) {
  return me(e = new this(e), e.e + 1, 2);
}
function J0(e, n, t) {
  return new this(e).clamp(n, t);
}
function Q0(e) {
  if (!e || typeof e != "object")
    throw Error(Cr + "Object expected");
  var n, t, o, r = e.defaults === !0, a = [
    "precision",
    1,
    yt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Nt,
    0,
    "toExpPos",
    0,
    Nt,
    "maxE",
    0,
    Nt,
    "minE",
    -Nt,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (t = a[n], r && (this[t] = ba[t]), (o = e[t]) !== void 0)
      if (on(o) === o && o >= a[n + 1] && o <= a[n + 2])
        this[t] = o;
      else
        throw Error(vt + t + ": " + o);
  if (t = "crypto", r && (this[t] = ba[t]), (o = e[t]) !== void 0)
    if (o === !0 || o === !1 || o === 0 || o === 1)
      if (o)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(Rc);
      else
        this[t] = !1;
    else
      throw Error(vt + t + ": " + o);
  return this;
}
function _0(e) {
  return new this(e).cos();
}
function x0(e) {
  return new this(e).cosh();
}
function Gc(e) {
  var n, t, o;
  function r(a) {
    var i, s, l, u = this;
    if (!(u instanceof r))
      return new r(a);
    if (u.constructor = r, Ql(a)) {
      u.s = a.s, ye ? !a.d || a.e > r.maxE ? (u.e = NaN, u.d = null) : a.e < r.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (l = typeof a, l === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, s = a; s >= 10; s /= 10)
          i++;
        ye ? i > r.maxE ? (u.e = NaN, u.d = null) : i < r.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return wa(u, a.toString());
    } else if (l !== "string")
      throw Error(vt + a);
    return (s = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (s === 43 && (a = a.slice(1)), u.s = 1), Hc.test(a) ? wa(u, a) : L0(u, a);
  }
  if (r.prototype = K, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = Q0, r.clone = Gc, r.isDecimal = Ql, r.abs = U0, r.acos = H0, r.acosh = F0, r.add = Y0, r.asin = j0, r.asinh = W0, r.atan = q0, r.atanh = G0, r.atan2 = X0, r.cbrt = K0, r.ceil = Z0, r.clamp = J0, r.cos = _0, r.cosh = x0, r.div = eb, r.exp = nb, r.floor = tb, r.hypot = ob, r.ln = rb, r.log = ab, r.log10 = sb, r.log2 = ib, r.max = lb, r.min = ub, r.mod = db, r.mul = cb, r.pow = fb, r.random = vb, r.round = mb, r.sign = pb, r.sin = hb, r.sinh = gb, r.sqrt = bb, r.sub = yb, r.sum = $b, r.tan = wb, r.tanh = Sb, r.trunc = Cb, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (o = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < o.length; )
      e.hasOwnProperty(t = o[n++]) || (e[t] = this[t]);
  return r.config(e), r;
}
function eb(e, n) {
  return new this(e).div(n);
}
function nb(e) {
  return new this(e).exp();
}
function tb(e) {
  return me(e = new this(e), e.e + 1, 3);
}
function ob() {
  var e, n, t = new this(0);
  for (ye = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      t.d && (t = t.plus(n.times(n)));
    else {
      if (n.s)
        return ye = !0, new this(1 / 0);
      t = n;
    }
  return ye = !0, t.sqrt();
}
function Ql(e) {
  return e instanceof it || e && e.toStringTag === Uc || !1;
}
function rb(e) {
  return new this(e).ln();
}
function ab(e, n) {
  return new this(e).log(n);
}
function ib(e) {
  return new this(e).log(2);
}
function sb(e) {
  return new this(e).log(10);
}
function lb() {
  return jc(this, arguments, "lt");
}
function ub() {
  return jc(this, arguments, "gt");
}
function db(e, n) {
  return new this(e).mod(n);
}
function cb(e, n) {
  return new this(e).mul(n);
}
function fb(e, n) {
  return new this(e).pow(n);
}
function vb(e) {
  var n, t, o, r, a = 0, i = new this(1), s = [];
  if (e === void 0 ? e = this.precision : hn(e, 1, yt), o = Math.ceil(e / ge), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(o)); a < o; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(o *= 4); a < o; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (s.push(r % 1e7), a += 4);
      a = o / 4;
    } else
      throw Error(Rc);
  else
    for (; a < o; )
      s[a++] = Math.random() * 1e7 | 0;
  for (o = s[--a], e %= ge, o && e && (r = Je(10, ge - e), s[a] = (o / r | 0) * r); s[a] === 0; a--)
    s.pop();
  if (a < 0)
    t = 0, s = [0];
  else {
    for (t = -1; s[0] === 0; t -= ge)
      s.shift();
    for (o = 1, r = s[0]; r >= 10; r /= 10)
      o++;
    o < ge && (t -= ge - o);
  }
  return i.e = t, i.d = s, i;
}
function mb(e) {
  return me(e = new this(e), e.e + 1, this.rounding);
}
function pb(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function hb(e) {
  return new this(e).sin();
}
function gb(e) {
  return new this(e).sinh();
}
function bb(e) {
  return new this(e).sqrt();
}
function yb(e, n) {
  return new this(e).sub(n);
}
function $b() {
  var e = 0, n = arguments, t = new this(n[e]);
  for (ye = !1; t.s && ++e < n.length; )
    t = t.plus(n[e]);
  return ye = !0, me(t, this.precision, this.rounding);
}
function wb(e) {
  return new this(e).tan();
}
function Sb(e) {
  return new this(e).tanh();
}
function Cb(e) {
  return me(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var it = K.constructor = Gc(ba);
lr = new it(lr);
ur = new it(ur);
const kb = {
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
  onBeforeChange: z(),
  onChange: z(),
  onIncrement: z(),
  onDecrement: z(),
  "onUpdate:modelValue": z()
}, _l = 100, xl = 600, { name: Pb, n: Ob, classes: Tb } = te("counter"), Eb = ["inputmode", "readonly", "disabled"];
function Ib(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = ae("var-form-details");
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      N(
        "div",
        Ne({
          class: e.classes(
            e.n("controller"),
            e.formatElevation(e.elevation, 2),
            [e.disabled || e.formDisabled, e.n("--disabled")],
            [e.errorMessage, e.n("--error")]
          ),
          style: { background: e.color ? e.color : void 0 }
        }, e.$attrs),
        [
          J(o, {
            class: v(
              e.classes(
                e.n("decrement-button"),
                [!e.decrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: F({
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
            default: ve(() => [
              J(t, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Oe(N("input", {
            class: v(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: F({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, Eb), [
            [Zv, e.inputValue]
          ]),
          J(o, {
            class: v(
              e.classes(
                e.n("increment-button"),
                [!e.incrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: F({
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
            default: ve(() => [
              J(t, { name: "plus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])
        ],
        16
        /* FULL_PROPS */
      ),
      J(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Xc = ne({
  name: Pb,
  components: {
    VarButton: mn,
    VarIcon: Ue,
    VarFormDetails: pn
  },
  directives: { Ripple: Ke },
  inheritAttrs: !1,
  props: kb,
  setup(e) {
    const n = S(""), { bindForm: t, form: o } = Mn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: s
    } = In(), { readonly: l, disabled: u } = o ?? {}, d = V(() => {
      const { max: Z, modelValue: _ } = e;
      return Z != null && A(_) >= A(Z);
    }), c = V(() => {
      const { min: Z, modelValue: _ } = e;
      return Z != null && A(_) <= A(Z);
    });
    let f, m, b, p;
    y(t, {
      reset: O,
      validate: k,
      resetValidation: s
    }), fe(
      () => e.modelValue,
      (Z) => {
        G($(String(Z))), y(e.onChange, A(Z));
      }
    ), G($(String(e.modelValue)));
    function k() {
      return i(e.rules, e.modelValue);
    }
    function T(Z) {
      Fe(() => {
        const { validateTrigger: _, rules: j, modelValue: B } = e;
        a(_, Z, j, B);
      });
    }
    function O() {
      const { min: Z } = e;
      y(e["onUpdate:modelValue"], Z != null ? A(Z) : 0), s();
    }
    function $(Z) {
      const { decimalLength: _, max: j, min: B } = e;
      let M = A(Z);
      return j != null && M > A(j) && (M = A(j)), B != null && M < A(B) && (M = A(B)), Z = String(M), _ != null && (Z = M.toFixed(A(_))), Z;
    }
    function C(Z) {
      const { lazyChange: _, onBeforeChange: j } = e, { value: B } = Z.target, M = $(B);
      _ ? y(j, A(M), W) : G(M), T("onInputChange");
    }
    function I() {
      const {
        disabled: Z,
        readonly: _,
        disableDecrement: j,
        decrementButton: B,
        lazyChange: M,
        step: x,
        modelValue: q,
        onDecrement: Y,
        onBeforeChange: X
      } = e;
      if (u != null && u.value || l != null && l.value || Z || _ || j || !B || c.value)
        return;
      const ee = new it(A(q)).minus(new it(A(x))).toString(), pe = $(ee), ke = A(pe);
      y(Y, ke), M ? y(X, ke, W) : (G(pe), T("onDecrement"));
    }
    function P() {
      const {
        disabled: Z,
        readonly: _,
        disableIncrement: j,
        incrementButton: B,
        lazyChange: M,
        step: x,
        modelValue: q,
        onIncrement: Y,
        onBeforeChange: X
      } = e;
      if (u != null && u.value || l != null && l.value || Z || _ || j || !B || d.value)
        return;
      const ee = new it(A(q)).plus(new it(A(x))).toString(), pe = $(ee), ke = A(pe);
      y(Y, ke), M ? y(X, ke, W) : (G(pe), T("onIncrement"));
    }
    function D() {
      const { press: Z, lazyChange: _ } = e;
      !Z || _ || (p = window.setTimeout(() => {
        ie();
      }, xl));
    }
    function E() {
      const { press: Z, lazyChange: _ } = e;
      !Z || _ || (b = window.setTimeout(() => {
        U();
      }, xl));
    }
    function H() {
      m && clearTimeout(m), p && clearTimeout(p);
    }
    function L() {
      f && clearTimeout(f), b && clearTimeout(b);
    }
    function U() {
      f = window.setTimeout(() => {
        P(), U();
      }, _l);
    }
    function ie() {
      m = window.setTimeout(() => {
        I(), ie();
      }, _l);
    }
    function G(Z) {
      n.value = Z;
      const _ = A(Z);
      y(e["onUpdate:modelValue"], _);
    }
    function W(Z) {
      G($(String(Z))), T("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: l,
      isMax: d,
      isMin: c,
      n: Ob,
      classes: Tb,
      formatElevation: gn,
      validate: k,
      reset: O,
      resetValidation: s,
      handleChange: C,
      decrement: I,
      increment: P,
      pressDecrement: D,
      pressIncrement: E,
      releaseDecrement: H,
      releaseIncrement: L,
      toSizeUnit: we,
      toNumber: A
    };
  }
});
Xc.render = Ib;
var ts = Xc;
oe(ts);
const SE = ts;
var Sa = ts, Kc = 60, Zc = Kc * 60, Jc = Zc * 24, Mb = Jc * 7, Ft = 1e3, zr = Kc * Ft, eu = Zc * Ft, Db = Jc * Ft, Bb = Mb * Ft, os = "millisecond", Vt = "second", At = "minute", zt = "hour", xn = "day", Zo = "week", Nn = "month", Qc = "quarter", et = "year", Lt = "date", Nb = "YYYY-MM-DDTHH:mm:ssZ", nu = "Invalid Date", Vb = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Ab = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const zb = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Ca = function(n, t, o) {
  var r = String(n);
  return !r || r.length >= t ? n : "" + Array(t + 1 - r.length).join(o) + n;
}, Lb = function(n) {
  var t = -n.utcOffset(), o = Math.abs(t), r = Math.floor(o / 60), a = o % 60;
  return (t <= 0 ? "+" : "-") + Ca(r, 2, "0") + ":" + Ca(a, 2, "0");
}, Rb = function e(n, t) {
  if (n.date() < t.date())
    return -e(t, n);
  var o = (t.year() - n.year()) * 12 + (t.month() - n.month()), r = n.clone().add(o, Nn), a = t - r < 0, i = n.clone().add(o + (a ? -1 : 1), Nn);
  return +(-(o + (t - r) / (a ? r - i : i - r)) || 0);
}, Ub = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Hb = function(n) {
  var t = {
    M: Nn,
    y: et,
    w: Zo,
    d: xn,
    D: Lt,
    h: zt,
    m: At,
    s: Vt,
    ms: os,
    Q: Qc
  };
  return t[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Fb = function(n) {
  return n === void 0;
};
const Yb = {
  s: Ca,
  z: Lb,
  m: Rb,
  a: Ub,
  p: Hb,
  u: Fb
};
var to = "en", Ct = {};
Ct[to] = zb;
var rs = function(n) {
  return n instanceof Or;
}, cr = function e(n, t, o) {
  var r;
  if (!n)
    return to;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    Ct[a] && (r = a), t && (Ct[a] = t, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var s = n.name;
    Ct[s] = n, r = s;
  }
  return !o && r && (to = r), r || !o && to;
}, ce = function(n, t) {
  if (rs(n))
    return n.clone();
  var o = typeof t == "object" ? t : {};
  return o.date = n, o.args = arguments, new Or(o);
}, jb = function(n, t) {
  return ce(n, {
    locale: t.$L,
    utc: t.$u,
    x: t.$x,
    $offset: t.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ae = Yb;
Ae.l = cr;
Ae.i = rs;
Ae.w = jb;
var Wb = function(n) {
  var t = n.date, o = n.utc;
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ae.u(t))
    return /* @__PURE__ */ new Date();
  if (t instanceof Date)
    return new Date(t);
  if (typeof t == "string" && !/Z$/i.test(t)) {
    var r = t.match(Vb);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return o ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(t);
}, Or = /* @__PURE__ */ function() {
  function e(t) {
    this.$L = cr(t.locale, null, !0), this.parse(t);
  }
  var n = e.prototype;
  return n.parse = function(o) {
    this.$d = Wb(o), this.$x = o.x || {}, this.init();
  }, n.init = function() {
    var o = this.$d;
    this.$y = o.getFullYear(), this.$M = o.getMonth(), this.$D = o.getDate(), this.$W = o.getDay(), this.$H = o.getHours(), this.$m = o.getMinutes(), this.$s = o.getSeconds(), this.$ms = o.getMilliseconds();
  }, n.$utils = function() {
    return Ae;
  }, n.isValid = function() {
    return this.$d.toString() !== nu;
  }, n.isSame = function(o, r) {
    var a = ce(o);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(o, r) {
    return ce(o) < this.startOf(r);
  }, n.isBefore = function(o, r) {
    return this.endOf(r) < ce(o);
  }, n.$g = function(o, r, a) {
    return Ae.u(o) ? this[r] : this.set(a, o);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(o, r) {
    var a = this, i = Ae.u(r) ? !0 : r, s = Ae.p(o), l = function(k, T) {
      var O = Ae.w(a.$u ? Date.UTC(a.$y, T, k) : new Date(a.$y, T, k), a);
      return i ? O : O.endOf(xn);
    }, u = function(k, T) {
      var O = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Ae.w(a.toDate()[k].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? O : $).slice(T)
      ), a);
    }, d = this.$W, c = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (s) {
      case et:
        return i ? l(1, 0) : l(31, 11);
      case Nn:
        return i ? l(1, c) : l(0, c + 1);
      case Zo: {
        var b = this.$locale().weekStart || 0, p = (d < b ? d + 7 : d) - b;
        return l(i ? f - p : f + (6 - p), c);
      }
      case xn:
      case Lt:
        return u(m + "Hours", 0);
      case zt:
        return u(m + "Minutes", 1);
      case At:
        return u(m + "Seconds", 2);
      case Vt:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(o) {
    return this.startOf(o, !1);
  }, n.$set = function(o, r) {
    var a, i = Ae.p(o), s = "set" + (this.$u ? "UTC" : ""), l = (a = {}, a[xn] = s + "Date", a[Lt] = s + "Date", a[Nn] = s + "Month", a[et] = s + "FullYear", a[zt] = s + "Hours", a[At] = s + "Minutes", a[Vt] = s + "Seconds", a[os] = s + "Milliseconds", a)[i], u = i === xn ? this.$D + (r - this.$W) : r;
    if (i === Nn || i === et) {
      var d = this.clone().set(Lt, 1);
      d.$d[l](u), d.init(), this.$d = d.set(Lt, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      l && this.$d[l](u);
    return this.init(), this;
  }, n.set = function(o, r) {
    return this.clone().$set(o, r);
  }, n.get = function(o) {
    return this[Ae.p(o)]();
  }, n.add = function(o, r) {
    var a = this, i;
    o = Number(o);
    var s = Ae.p(r), l = function(f) {
      var m = ce(a);
      return Ae.w(m.date(m.date() + Math.round(f * o)), a);
    };
    if (s === Nn)
      return this.set(Nn, this.$M + o);
    if (s === et)
      return this.set(et, this.$y + o);
    if (s === xn)
      return l(1);
    if (s === Zo)
      return l(7);
    var u = (i = {}, i[At] = zr, i[zt] = eu, i[Vt] = Ft, i)[s] || 1, d = this.$d.getTime() + o * u;
    return Ae.w(d, this);
  }, n.subtract = function(o, r) {
    return this.add(o * -1, r);
  }, n.format = function(o) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || nu;
    var i = o || Nb, s = Ae.z(this), l = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, m = a.meridiem, b = function(O, $, C, I) {
      return O && (O[$] || O(r, i)) || C[$].slice(0, I);
    }, p = function(O) {
      return Ae.s(l % 12 || 12, O, "0");
    }, g = m || function(T, O, $) {
      var C = T < 12 ? "AM" : "PM";
      return $ ? C.toLowerCase() : C;
    }, k = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Ae.s(d + 1, 2, "0"),
      MMM: b(a.monthsShort, d, f, 3),
      MMMM: b(f, d),
      D: this.$D,
      DD: Ae.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: b(a.weekdaysMin, this.$W, c, 2),
      ddd: b(a.weekdaysShort, this.$W, c, 3),
      dddd: c[this.$W],
      H: String(l),
      HH: Ae.s(l, 2, "0"),
      h: p(1),
      hh: p(2),
      a: g(l, u, !0),
      A: g(l, u, !1),
      m: String(u),
      mm: Ae.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ae.s(this.$s, 2, "0"),
      SSS: Ae.s(this.$ms, 3, "0"),
      Z: s
      // 'ZZ' logic below
    };
    return i.replace(Ab, function(T, O) {
      return O || k[T] || s.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(o, r, a) {
    var i, s = Ae.p(r), l = ce(o), u = (l.utcOffset() - this.utcOffset()) * zr, d = this - l, c = Ae.m(this, l);
    return c = (i = {}, i[et] = c / 12, i[Nn] = c, i[Qc] = c / 3, i[Zo] = (d - u) / Bb, i[xn] = (d - u) / Db, i[zt] = d / eu, i[At] = d / zr, i[Vt] = d / Ft, i)[s] || d, a ? c : Ae.a(c);
  }, n.daysInMonth = function() {
    return this.endOf(Nn).$D;
  }, n.$locale = function() {
    return Ct[this.$L];
  }, n.locale = function(o, r) {
    if (!o)
      return this.$L;
    var a = this.clone(), i = cr(o, r, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return Ae.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), _c = Or.prototype;
ce.prototype = _c;
[["$ms", os], ["$s", Vt], ["$m", At], ["$H", zt], ["$W", xn], ["$M", Nn], ["$y", et], ["$D", Lt]].forEach(function(e) {
  _c[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ce.extend = function(e, n) {
  return e.$i || (e(n, Or, ce), e.$i = !0), ce;
};
ce.locale = cr;
ce.isDayjs = rs;
ce.unix = function(e) {
  return ce(e * 1e3);
};
ce.en = Ct[to];
ce.Ls = Ct;
ce.p = {};
const xc = function(e, n) {
  n.prototype.isSameOrBefore = function(t, o) {
    return this.isSame(t, o) || this.isBefore(t, o);
  };
}, ef = function(e, n) {
  n.prototype.isSameOrAfter = function(t, o) {
    return this.isSame(t, o) || this.isAfter(t, o);
  };
}, Jo = [
  {
    index: "01"
  },
  {
    index: "02"
  },
  {
    index: "03"
  },
  {
    index: "04"
  },
  {
    index: "05"
  },
  {
    index: "06"
  },
  {
    index: "07"
  },
  {
    index: "08"
  },
  {
    index: "09"
  },
  {
    index: "10"
  },
  {
    index: "11"
  },
  {
    index: "12"
  }
], eo = [
  {
    index: "0"
  },
  {
    index: "1"
  },
  {
    index: "2"
  },
  {
    index: "3"
  },
  {
    index: "4"
  },
  {
    index: "5"
  },
  {
    index: "6"
  }
], qb = {
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
  onPreview: z(),
  onChange: z(),
  "onUpdate:modelValue": z()
}, { n: Gb } = te("picker-header");
function Xb(e, n) {
  const t = ae("var-icon"), o = ae("var-button");
  return h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      J(o, {
        round: "",
        text: "",
        style: { filter: "opacity(0.54)" },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (r) => e.checkDate("prev"))
      }, {
        default: ve(() => [
          J(t, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"]),
      N(
        "div",
        {
          class: v(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          J(Ye, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ve(() => [
              (h(), w(
                "div",
                { key: e.showDate },
                re(e.showDate),
                1
                /* TEXT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      ),
      J(o, {
        round: "",
        text: "",
        style: { filter: "opacity(0.54)" },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (r) => e.checkDate("next"))
      }, {
        default: ve(() => [
          J(t, { name: "chevron-right" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"])
    ],
    2
    /* CLASS */
  );
}
const nf = ne({
  name: "PanelHeader",
  components: {
    VarButton: mn,
    VarIcon: Ue
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
  setup(e, { emit: n }) {
    const t = S(!1), o = S(0), r = V(() => {
      var i;
      const { date: s, type: l } = e, { previewMonth: u, previewYear: d } = s;
      if (l === "month")
        return A(d) + o.value;
      const c = (i = xe.value.datePickerMonthDict) == null ? void 0 : i[u.index].name;
      return xe.value.lang === "zh-CN" ? `${d} ${c}` : `${c} ${d}`;
    }), a = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), t.value = i === "prev", o.value += i === "prev" ? -1 : 1);
    };
    return fe(
      () => e.date,
      () => {
        o.value = 0;
      }
    ), {
      n: Gb,
      reverse: t,
      showDate: r,
      checkDate: a
    };
  }
});
nf.render = Xb;
var tf = nf, Kb = Object.defineProperty, tu = Object.getOwnPropertySymbols, Zb = Object.prototype.hasOwnProperty, Jb = Object.prototype.propertyIsEnumerable, ou = (e, n, t) => n in e ? Kb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Qb = (e, n) => {
  for (var t in n || (n = {}))
    Zb.call(n, t) && ou(e, t, n[t]);
  if (tu)
    for (var t of tu(n))
      Jb.call(n, t) && ou(e, t, n[t]);
  return e;
};
ce.extend(xc);
ce.extend(ef);
const { n: Uo, classes: _b } = te("month-picker"), { n: Ho } = te("date-picker");
function xb(e, n) {
  const t = ae("panel-header"), o = ae("var-button");
  return h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      N(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          J(t, {
            ref: "headerEl",
            type: "month",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickYear,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          J(Ye, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ve(() => [
              (h(), w("ul", { key: e.panelKey }, [
                (h(!0), w(
                  Be,
                  null,
                  qe(e.MONTH_LIST, (r) => (h(), w("li", {
                    key: r.index
                  }, [
                    J(o, Ne({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, Qb({}, e.buttonProps(r.index)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: ve(() => [
                        Te(
                          re(e.getMonthAbbr(r.index)),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["elevation", "onClick"])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const of = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: mn,
    PanelHeader: tf
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
  setup(e, { emit: n }) {
    const [t, o] = e.current.split("-"), r = S(!1), a = S(0), i = S(null), s = je({
      left: !1,
      right: !1
    }), l = V(() => e.choose.chooseYear === e.preview.previewYear), u = V(() => e.preview.previewYear === t), d = (k) => {
      var T, O;
      return (O = (T = xe.value.datePickerMonthDict) == null ? void 0 : T[k].abbr) != null ? O : "";
    }, c = (k) => {
      const {
        preview: { previewYear: T },
        componentProps: { min: O, max: $ }
      } = e;
      let C = !0, I = !0;
      const P = `${T}-${k}`;
      return $ && (C = ce(P).isSameOrBefore(ce($), "month")), O && (I = ce(P).isSameOrAfter(ce(O), "month")), C && I;
    }, f = (k) => {
      const {
        choose: { chooseMonths: T, chooseDays: O, chooseRangeMonth: $ },
        componentProps: { type: C, range: I }
      } = e;
      if (I) {
        if (!$.length)
          return !1;
        const P = ce(k).isSameOrBefore(ce($[1]), "month"), D = ce(k).isSameOrAfter(ce($[0]), "month");
        return P && D;
      }
      return C === "month" ? T.includes(k) : O.some((P) => P.includes(k));
    }, m = (k) => {
      const {
        choose: { chooseMonth: T },
        preview: { previewYear: O },
        componentProps: { allowedDates: $, color: C, multiple: I, range: P }
      } = e, D = `${O}-${k}`, E = () => P || I ? f(D) : (T == null ? void 0 : T.index) === k && l.value, L = (() => c(k) ? $ ? !$(D) : !1 : !0)(), U = () => L ? !0 : P || I ? !f(D) : !l.value || (T == null ? void 0 : T.index) !== k, ie = () => u.value && o === k && e.componentProps.showCurrent ? (P || I || l.value) && L ? !0 : P || I ? !f(D) : l.value ? (T == null ? void 0 : T.index) !== o : !0 : !1, G = () => L ? "" : ie() ? C ?? "" : E() ? "" : `${Ho()}-color-cover`, W = G().startsWith(Ho());
      return {
        outline: ie(),
        text: U(),
        color: U() ? "" : C,
        textColor: W ? "" : G(),
        [`${Ho()}-color-cover`]: W,
        class: _b(Uo("button"), [L, Uo("button--disabled")]),
        disabled: L
      };
    }, b = (k, T) => {
      T.currentTarget.classList.contains(Uo("button--disabled")) || n("choose-month", k);
    }, p = (k) => {
      r.value = k === "prev", a.value += k === "prev" ? -1 : 1, n("check-preview", "year", k);
    }, g = (k) => {
      i.value.checkDate(k);
    };
    return fe(
      () => e.preview.previewYear,
      (k) => {
        const {
          componentProps: { min: T, max: O }
        } = e;
        O && (s.right = !ce(`${A(k) + 1}`).isSameOrBefore(ce(O), "year")), T && (s.left = !ce(`${A(k) - 1}`).isSameOrAfter(ce(T), "year"));
      },
      { immediate: !0 }
    ), {
      n: Uo,
      nDate: Ho,
      pack: xe,
      MONTH_LIST: Jo,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: s,
      forwardRef: g,
      buttonProps: m,
      getMonthAbbr: d,
      chooseMonth: b,
      checkDate: p
    };
  }
});
of.render = xb;
var ey = of;
const { n: ru, classes: ny } = te("year-picker"), ty = ["onClick"];
function oy(e, n) {
  return h(), w(
    "ul",
    {
      class: v(e.n())
    },
    [
      (h(!0), w(
        Be,
        null,
        qe(e.yearList, (t) => (h(), w("li", {
          key: t,
          class: v(e.classes(e.n("item"), [t === e.toNumber(e.preview), e.n("item--active")])),
          style: F({ color: t === e.toNumber(e.preview) ? e.componentProps.color : "" }),
          onClick: (o) => e.chooseYear(t)
        }, re(t), 15, ty))),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
const rf = ne({
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
  setup(e, { emit: n }) {
    const t = V(() => {
      const r = [], {
        preview: a,
        componentProps: { max: i, min: s }
      } = e;
      if (!a)
        return r;
      let l = [A(a) + 100, A(a) - 100];
      if (i) {
        const u = ce(i).format("YYYY-MM-D"), d = A(u.split("-")[0]);
        if (d < l[0] && d > l[1] && (l = [d, l[1]]), d <= l[1])
          return [d];
      }
      if (s) {
        const u = ce(s).format("YYYY-MM-D"), d = A(u.split("-")[0]);
        if (d < l[0] && d > l[1] && (l = [l[0], d]), d >= l[0])
          return [d];
      }
      for (let u = l[0]; u >= l[1]; u--)
        r.push(u);
      return r;
    }), o = (r) => {
      n("choose-year", r);
    };
    return rn(() => {
      const r = document.querySelector(`.${ru("item--active")}`);
      r == null || r.scrollIntoView({
        block: "center"
      });
    }), {
      n: ru,
      classes: ny,
      yearList: t,
      chooseYear: o,
      toNumber: A
    };
  }
});
rf.render = oy;
var ry = rf, ay = Object.defineProperty, au = Object.getOwnPropertySymbols, iy = Object.prototype.hasOwnProperty, sy = Object.prototype.propertyIsEnumerable, iu = (e, n, t) => n in e ? ay(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ly = (e, n) => {
  for (var t in n || (n = {}))
    iy.call(n, t) && iu(e, t, n[t]);
  if (au)
    for (var t of au(n))
      sy.call(n, t) && iu(e, t, n[t]);
  return e;
};
ce.extend(xc);
ce.extend(ef);
const { n: Dt, classes: uy } = te("day-picker"), { n: Fo } = te("date-picker");
function dy(e, n) {
  const t = ae("panel-header"), o = ae("var-button");
  return h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      N(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          J(t, {
            ref: "headerEl",
            type: "day",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickMonth,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          J(Ye, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: ve(() => [
              (h(), w("div", { key: e.panelKey }, [
                N(
                  "ul",
                  {
                    class: v(e.n("head"))
                  },
                  [
                    (h(!0), w(
                      Be,
                      null,
                      qe(e.sortWeekList, (r) => (h(), w(
                        "li",
                        {
                          key: r.index
                        },
                        re(e.getDayAbbr(r.index)),
                        1
                        /* TEXT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                ),
                N(
                  "ul",
                  {
                    class: v(e.n("body"))
                  },
                  [
                    (h(!0), w(
                      Be,
                      null,
                      qe(e.days, (r, a) => (h(), w("li", { key: a }, [
                        J(o, Ne({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation
                        }, ly({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: ve(() => [
                            Te(
                              re(e.filterDay(r)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1040, ["elevation", "onClick"])
                      ]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const af = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: mn,
    PanelHeader: tf
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
  setup(e, { emit: n }) {
    const [t, o, r] = e.current.split("-"), a = S([]), i = S(!1), s = S(0), l = S(null), u = je({
      left: !1,
      right: !1
    }), d = V(
      () => e.preview.previewYear === t && e.preview.previewMonth.index === o
    ), c = V(
      () => {
        var P;
        return e.choose.chooseYear === e.preview.previewYear && ((P = e.choose.chooseMonth) == null ? void 0 : P.index) === e.preview.previewMonth.index;
      }
    ), f = V(() => {
      const P = eo.findIndex((D) => D.index === e.componentProps.firstDayOfWeek);
      return P === -1 || P === 0 ? eo : eo.slice(P).concat(eo.slice(0, P));
    }), m = (P) => {
      var D, E;
      return (E = (D = xe.value.datePickerWeekDict) == null ? void 0 : D[P].abbr) != null ? E : "";
    }, b = (P) => P > 0 ? P : "", p = () => {
      const {
        preview: { previewMonth: P, previewYear: D }
      } = e, E = ce(`${D}-${P.index}`).daysInMonth(), H = ce(`${D}-${P.index}-01`).day(), L = f.value.findIndex((U) => U.index === `${H}`);
      a.value = [...Array(L).fill(-1), ...Array.from(Array(E + 1).keys())].filter((U) => U);
    }, g = () => {
      const {
        preview: { previewYear: P, previewMonth: D },
        componentProps: { max: E, min: H }
      } = e;
      if (E) {
        const L = `${P}-${A(D.index) + 1}`;
        u.right = !ce(L).isSameOrBefore(ce(E), "month");
      }
      if (H) {
        const L = `${P}-${A(D.index) - 1}`;
        u.left = !ce(L).isSameOrAfter(ce(H), "month");
      }
    }, k = (P) => {
      const {
        preview: { previewYear: D, previewMonth: E },
        componentProps: { min: H, max: L }
      } = e;
      let U = !0, ie = !0;
      const G = `${D}-${E.index}-${P}`;
      return L && (U = ce(G).isSameOrBefore(ce(L), "day")), H && (ie = ce(G).isSameOrAfter(ce(H), "day")), U && ie;
    }, T = (P) => {
      const {
        choose: { chooseDays: D, chooseRangeDay: E },
        componentProps: { range: H }
      } = e;
      if (H) {
        if (!E.length)
          return !1;
        const L = ce(P).isSameOrBefore(ce(E[1]), "day"), U = ce(P).isSameOrAfter(ce(E[0]), "day");
        return L && U;
      }
      return D.includes(P);
    }, O = (P) => {
      if (P < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Dt("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: D },
        preview: { previewYear: E, previewMonth: H },
        componentProps: { allowedDates: L, color: U, multiple: ie, range: G }
      } = e, W = `${E}-${H.index}-${P}`, Z = () => G || ie ? T(W) : A(D) === P && c.value, j = (() => k(P) ? L ? !L(W) : !1 : !0)(), B = () => j ? !0 : G || ie ? !T(W) : !c.value || A(D) !== P, M = () => d.value && A(r) === P && e.componentProps.showCurrent ? (G || ie || c.value) && j ? !0 : G || ie ? !T(W) : c.value ? D !== r : !0 : !1, x = () => j ? "" : M() ? U ?? "" : Z() ? "" : `${Fo()}-color-cover`, q = x().startsWith(Fo());
      return {
        text: B(),
        outline: M(),
        textColor: q ? "" : x(),
        [`${Fo()}-color-cover`]: q,
        class: uy(Dt("button"), Dt("button--usable"), [j, Dt("button--disabled")]),
        disabled: j
      };
    }, $ = (P) => {
      i.value = P === "prev", s.value += P === "prev" ? -1 : 1, n("check-preview", "month", P);
    }, C = (P, D) => {
      D.currentTarget.classList.contains(Dt("button--disabled")) || n("choose-day", P);
    }, I = (P) => {
      l.value.checkDate(P);
    };
    return rn(() => {
      p(), g();
    }), fe(
      () => e.preview,
      () => {
        p(), g();
      }
    ), {
      n: Dt,
      nDate: Fo,
      days: a,
      reverse: i,
      headerEl: l,
      panelKey: s,
      sortWeekList: f,
      panelBtnDisabled: u,
      forwardRef: I,
      filterDay: b,
      getDayAbbr: m,
      checkDate: $,
      chooseDay: C,
      buttonProps: O
    };
  }
});
af.render = dy;
var cy = af, fy = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: vy, n: my, classes: py } = te("date-picker");
function hy(e, n) {
  const t = ae("year-picker-panel"), o = ae("month-picker-panel"), r = ae("day-picker-panel");
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      N(
        "div",
        {
          class: v(e.n("title")),
          style: F({ background: e.headerColor || e.color })
        },
        [
          N(
            "div",
            {
              class: v(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
              onClick: n[0] || (n[0] = (a) => e.clickEl("year"))
            },
            [
              R(e.$slots, "year", { year: e.chooseYear }, () => [
                Te(
                  re(e.chooseYear),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: v(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
              onClick: n[1] || (n[1] = (a) => e.clickEl("date"))
            },
            [
              J(Ye, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: ve(() => {
                  var a, i, s;
                  return [
                    e.type === "month" ? (h(), w("div", {
                      key: `${e.chooseYear}${(a = e.chooseMonth) == null ? void 0 : a.index}`
                    }, [
                      e.range ? R(e.$slots, "range", {
                        key: 0,
                        choose: e.getChoose.chooseRangeMonth
                      }, () => [
                        Te(
                          re(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ]) : e.multiple ? R(e.$slots, "multiple", {
                        key: 1,
                        choose: e.getChoose.chooseMonths
                      }, () => [
                        Te(
                          re(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ]) : R(e.$slots, "month", {
                        key: 2,
                        month: (i = e.chooseMonth) == null ? void 0 : i.index,
                        year: e.chooseYear
                      }, () => [
                        Te(
                          re(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ])
                    ])) : (h(), w("div", {
                      key: `${e.chooseYear}${(s = e.chooseMonth) == null ? void 0 : s.index}${e.chooseDay}`
                    }, [
                      e.range ? R(e.$slots, "range", {
                        key: 0,
                        choose: e.formatRange
                      }, () => [
                        Te(
                          re(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ]) : e.multiple ? R(e.$slots, "multiple", {
                        key: 1,
                        choose: e.getChoose.chooseDays
                      }, () => [
                        Te(
                          re(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ]) : R(e.$slots, "date", st(Ne({ key: 2 }, e.slotProps)), () => [
                        Te(
                          re(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ])
                    ]))
                  ];
                }),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      N(
        "div",
        {
          class: v(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
          onTouchmove: n[3] || (n[3] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
          onTouchend: n[4] || (n[4] = (...a) => e.handleTouchend && e.handleTouchend(...a))
        },
        [
          J(Ye, {
            name: `${e.n()}-panel-fade`
          }, {
            default: ve(() => [
              e.getPanelType === "year" ? (h(), Se(t, {
                key: 0,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), Se(o, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (h(), Se(r, {
                key: 2,
                ref: "dayPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "component-props": e.componentProps,
                "click-month": () => e.clickEl("month"),
                onChooseDay: e.getChooseDay,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : Q("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      )
    ],
    2
    /* CLASS */
  );
}
const sf = ne({
  name: vy,
  components: {
    MonthPickerPanel: ey,
    YearPickerPanel: ry,
    DayPickerPanel: cy
  },
  props: qb,
  setup(e) {
    const n = ce().format("YYYY-MM-D"), [t, o] = n.split("-"), r = Jo.find((ue) => ue.index === o), a = S(!1), i = S(!1), s = S(!0), l = S(), u = S(), d = S(), c = S(r), f = S(t), m = S(!1), b = S([]), p = S([]), g = S([]), k = S([]), T = S(null), O = S(null), $ = je({
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
    }), C = V(() => ({
      chooseMonth: l.value,
      chooseYear: u.value,
      chooseDay: d.value,
      chooseMonths: b.value,
      chooseDays: p.value,
      chooseRangeMonth: g.value,
      chooseRangeDay: k.value
    })), I = V(() => ({
      previewMonth: c.value,
      previewYear: f.value
    })), P = V(() => {
      var ue, $e;
      const { multiple: be, range: Ie } = e;
      if (Ie)
        return g.value.length ? `${g.value[0]} ~ ${g.value[1]}` : "";
      let Ee = "";
      return l.value && (Ee = ($e = (ue = xe.value.datePickerMonthDict) == null ? void 0 : ue[l.value.index].name) != null ? $e : ""), be ? `${b.value.length}${xe.value.datePickerSelected}` : Ee;
    }), D = V(() => {
      var ue, $e, be, Ie;
      const { multiple: Ee, range: Xe } = e;
      if (Xe) {
        const Qt = k.value.map((Fv) => ce(Fv).format("YYYY-MM-DD"));
        return Qt.length ? `${Qt[0]} ~ ${Qt[1]}` : "";
      }
      if (Ee)
        return `${p.value.length}${xe.value.datePickerSelected}`;
      if (!u.value || !l.value || !d.value)
        return "";
      const bn = ce(`${u.value}-${l.value.index}-${d.value}`).day(), Sn = eo.find((Qt) => Qt.index === `${bn}`), wt = ($e = (ue = xe.value.datePickerWeekDict) == null ? void 0 : ue[Sn.index].name) != null ? $e : "", Uv = (Ie = (be = xe.value.datePickerMonthDict) == null ? void 0 : be[l.value.index].name) != null ? Ie : "", Hv = kt(d.value, 2, "0");
      return xe.value.lang === "zh-CN" ? `${l.value.index}-${Hv} ${wt.slice(0, 3)}` : `${wt.slice(0, 3)}, ${Uv.slice(0, 3)} ${d.value}`;
    }), E = V(() => a.value ? "year" : e.type === "month" || i.value ? "month" : e.type === "date" ? "date" : ""), H = V(() => !e.touchable || ["", "year"].includes(E.value)), L = V(() => {
      var ue, $e, be, Ie;
      const Ee = ce(`${u.value}-${(ue = l.value) == null ? void 0 : ue.index}-${d.value}`).day(), Xe = d.value ? kt(d.value, 2, "0") : "";
      return {
        week: `${Ee}`,
        year: ($e = u.value) != null ? $e : "",
        month: (Ie = (be = l.value) == null ? void 0 : be.index) != null ? Ie : "",
        date: Xe
      };
    }), U = V(
      () => C.value.chooseRangeDay.map((ue) => ce(ue).format("YYYY-MM-DD"))
    ), ie = V(() => u.value === f.value), G = V(() => {
      var ue;
      return ((ue = l.value) == null ? void 0 : ue.index) === c.value.index;
    });
    let W = 0, Z = 0, _ = "", j;
    fe(
      () => e.modelValue,
      (ue) => {
        if (!(!Ce() || Ve(ue) || !ue))
          if (e.range) {
            if (!Me(ue))
              return;
            s.value = ue.length !== 1, le(ue, e.type);
          } else if (e.multiple) {
            if (!Me(ue))
              return;
            he(ue, e.type);
          } else
            De(ue);
      },
      { immediate: !0 }
    ), fe(E, We);
    function B(ue) {
      ue === "year" ? a.value = !0 : ue === "month" ? i.value = !0 : (a.value = !1, i.value = !1);
    }
    function M(ue) {
      if (H.value)
        return;
      const { clientX: $e, clientY: be } = ue.touches[0];
      W = $e, Z = be;
    }
    function x(ue, $e) {
      return ue >= $e && ue > 20 ? "x" : "y";
    }
    function q(ue) {
      if (H.value)
        return;
      const { clientX: $e, clientY: be } = ue.touches[0], Ie = $e - W, Ee = be - Z;
      j = x(Math.abs(Ie), Math.abs(Ee)), _ = Ie > 0 ? "prev" : "next";
    }
    function Y() {
      return fy(this, null, function* () {
        if (H.value || j !== "x")
          return;
        const ue = E.value === "month" ? T : O;
        yield dn(), ue.value.forwardRef(_), We();
      });
    }
    function X(ue, $e) {
      const be = $e === "month" ? g : k;
      if (be.value = s.value ? [ue, ue] : [be.value[0], ue], s.value = !s.value, s.value) {
        const Ee = ce(be.value[0]).isAfter(be.value[1]) ? [be.value[1], be.value[0]] : [...be.value];
        y(e["onUpdate:modelValue"], Ee), y(e.onChange, Ee);
      }
    }
    function ee(ue, $e) {
      const be = $e === "month" ? b : p, Ie = $e === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ee = be.value.map((bn) => ce(bn).format(Ie)), Xe = Ee.findIndex((bn) => bn === ue);
      Xe === -1 ? Ee.push(ue) : Ee.splice(Xe, 1), y(e["onUpdate:modelValue"], Ee), y(e.onChange, Ee);
    }
    function pe(ue, $e) {
      return !u.value || !l.value ? !1 : ie.value ? ue === "month" ? $e.index < l.value.index : G.value ? $e < A(d.value) : l.value.index > c.value.index : u.value > f.value;
    }
    function ke(ue) {
      const { readonly: $e, range: be, multiple: Ie, onChange: Ee, "onUpdate:modelValue": Xe } = e;
      if (ue < 0 || $e)
        return;
      m.value = pe("day", ue);
      const bn = `${f.value}-${c.value.index}-${ue}`, Sn = ce(bn).format("YYYY-MM-DD");
      be ? X(Sn, "day") : Ie ? ee(Sn, "day") : (y(Xe, Sn), y(Ee, Sn));
    }
    function Re(ue) {
      const { type: $e, readonly: be, range: Ie, multiple: Ee, onChange: Xe, onPreview: bn, "onUpdate:modelValue": Sn } = e;
      if (m.value = pe("month", ue), $e === "month" && !be) {
        const wt = `${f.value}-${ue.index}`;
        Ie ? X(wt, "month") : Ee ? ee(wt, "month") : (y(Sn, wt), y(Xe, wt));
      } else
        c.value = ue, y(bn, A(f.value), A(c.value.index));
      i.value = !1;
    }
    function se(ue) {
      f.value = `${ue}`, a.value = !1, i.value = !0, y(e.onPreview, A(f.value), A(c.value.index));
    }
    function de(ue, $e) {
      const be = $e === "prev" ? -1 : 1;
      if (ue === "year")
        f.value = `${A(f.value) + be}`;
      else {
        let Ie = A(c.value.index) + be;
        Ie < 1 && (f.value = `${A(f.value) - 1}`, Ie = 12), Ie > 12 && (f.value = `${A(f.value) + 1}`, Ie = 1), c.value = Jo.find((Ee) => A(Ee.index) === Ie);
      }
      y(e.onPreview, A(f.value), A(c.value.index));
    }
    function Ce() {
      return (e.multiple || e.range) && !Me(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Me(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function Ve(ue) {
      return Me(ue) ? !1 : ue === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function le(ue, $e) {
      const be = $e === "month" ? g : k, Ie = $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Ee = ue.map((Sn) => ce(Sn).format(Ie)).slice(0, 2);
      if (be.value.some((Sn) => Ve(Sn)))
        return;
      be.value = Ee;
      const bn = ce(be.value[0]).isAfter(be.value[1]);
      be.value.length === 2 && bn && (be.value = [be.value[1], be.value[0]]);
    }
    function he(ue, $e) {
      const be = $e === "month" ? b : p, Ie = $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Ee = Array.from(new Set(ue.map((Xe) => ce(Xe).format(Ie))));
      be.value = Ee.filter((Xe) => Xe !== "Invalid Date");
    }
    function De(ue) {
      const $e = ce(ue).format("YYYY-MM-D");
      if (Ve($e))
        return;
      const [be, Ie, Ee] = $e.split("-"), Xe = Jo.find((bn) => bn.index === Ie);
      l.value = Xe, u.value = be, d.value = Ee, c.value = Xe, f.value = be;
    }
    function We() {
      Z = 0, W = 0, _ = "", j = void 0;
    }
    return {
      monthPanelEl: T,
      dayPanelEl: O,
      reverse: m,
      currentDate: n,
      chooseMonth: l,
      chooseYear: u,
      chooseDay: d,
      previewYear: f,
      isYearPanel: a,
      isMonthPanel: i,
      getMonthTitle: P,
      getDateTitle: D,
      getPanelType: E,
      getChoose: C,
      getPreview: I,
      componentProps: $,
      slotProps: L,
      formatRange: U,
      n: my,
      classes: py,
      clickEl: B,
      handleTouchstart: M,
      handleTouchmove: q,
      handleTouchend: Y,
      getChooseDay: ke,
      getChooseMonth: Re,
      getChooseYear: se,
      checkPreview: de,
      formatElevation: gn
    };
  }
});
sf.render = hy;
var as = sf;
oe(as);
const CE = as;
var ka = as, gy = Object.defineProperty, su = Object.getOwnPropertySymbols, by = Object.prototype.hasOwnProperty, yy = Object.prototype.propertyIsEnumerable, lu = (e, n, t) => n in e ? gy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, $y = (e, n) => {
  for (var t in n || (n = {}))
    by.call(n, t) && lu(e, t, n[t]);
  if (su)
    for (var t of su(n))
      yy.call(n, t) && lu(e, t, n[t]);
  return e;
};
const wy = $y({
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
  onBeforeClose: z(),
  onConfirm: z(),
  onCancel: z(),
  "onUpdate:show": z()
}, en(To, [
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
var Sy = Object.defineProperty, uu = Object.getOwnPropertySymbols, Cy = Object.prototype.hasOwnProperty, ky = Object.prototype.propertyIsEnumerable, du = (e, n, t) => n in e ? Sy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Py = (e, n) => {
  for (var t in n || (n = {}))
    Cy.call(n, t) && du(e, t, n[t]);
  if (uu)
    for (var t of uu(n))
      ky.call(n, t) && du(e, t, n[t]);
  return e;
};
const { name: Oy, n: Ty, classes: Ey } = te("dialog");
function Iy(e, n) {
  const t = ae("var-button"), o = ae("var-popup");
  return h(), Se(o, {
    class: v(e.n("popup")),
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
    default: ve(() => [
      N(
        "div",
        Ne({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Py({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          N(
            "div",
            {
              class: v(e.n("title"))
            },
            [
              R(e.$slots, "title", {}, () => {
                var r;
                return [
                  Te(
                    re((r = e.title) != null ? r : e.pack.dialogTitle),
                    1
                    /* TEXT */
                  )
                ];
              })
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: v(e.n("message")),
              style: F({ textAlign: e.messageAlign })
            },
            [
              R(e.$slots, "default", {}, () => [
                Te(
                  re(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          N(
            "div",
            {
              class: v(e.n("actions"))
            },
            [
              e.cancelButton ? (h(), Se(t, {
                key: 0,
                class: v(e.classes(e.n("button"), e.n("cancel-button"))),
                "var-dialog-cover": "",
                text: "",
                "text-color": e.cancelButtonTextColor,
                color: e.cancelButtonColor,
                onClick: e.cancel
              }, {
                default: ve(() => {
                  var r;
                  return [
                    Te(
                      re((r = e.cancelButtonText) != null ? r : e.pack.dialogCancelButtonText),
                      1
                      /* TEXT */
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class", "text-color", "color", "onClick"])) : Q("v-if", !0),
              e.confirmButton ? (h(), Se(t, {
                key: 1,
                class: v(e.classes(e.n("button"), e.n("confirm-button"))),
                "var-dialog-cover": "",
                text: "",
                "text-color": e.confirmButtonTextColor,
                color: e.confirmButtonColor,
                onClick: e.confirm
              }, {
                default: ve(() => {
                  var r;
                  return [
                    Te(
                      re((r = e.confirmButtonText) != null ? r : e.pack.dialogConfirmButtonText),
                      1
                      /* TEXT */
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class", "text-color", "color", "onClick"])) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]);
}
const lf = ne({
  name: Oy,
  components: {
    VarPopup: ct,
    VarButton: mn
  },
  inheritAttrs: !1,
  props: wy,
  setup(e) {
    const n = S(!1), t = S(!1);
    fe(
      () => e.show,
      (s) => {
        n.value = s;
      },
      { immediate: !0 }
    ), fe(
      () => e.closeOnClickOverlay,
      (s) => {
        if (e.onBeforeClose != null) {
          t.value = !1;
          return;
        }
        t.value = s;
      },
      { immediate: !0 }
    );
    function o() {
      return y(e["onUpdate:show"], !1);
    }
    function r() {
      const { closeOnClickOverlay: s, onClickOverlay: l, onBeforeClose: u } = e;
      if (y(l), !!s) {
        if (u != null) {
          y(u, "close", o);
          return;
        }
        y(e["onUpdate:show"], !1);
      }
    }
    function a() {
      const { onBeforeClose: s, onConfirm: l } = e;
      if (y(l), s != null) {
        y(s, "confirm", o);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    function i() {
      const { onBeforeClose: s, onCancel: l } = e;
      if (y(l), s != null) {
        y(s, "cancel", o);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    return {
      pack: xe,
      popupShow: n,
      popupCloseOnClickOverlay: t,
      n: Ty,
      classes: Ey,
      handleClickOverlay: r,
      confirm: a,
      cancel: i,
      toSizeUnit: we
    };
  }
});
lf.render = Iy;
var Do = lf, My = Object.defineProperty, Dy = Object.defineProperties, By = Object.getOwnPropertyDescriptors, cu = Object.getOwnPropertySymbols, Ny = Object.prototype.hasOwnProperty, Vy = Object.prototype.propertyIsEnumerable, fu = (e, n, t) => n in e ? My(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Lr = (e, n) => {
  for (var t in n || (n = {}))
    Ny.call(n, t) && fu(e, t, n[t]);
  if (cu)
    for (var t of cu(n))
      Vy.call(n, t) && fu(e, t, n[t]);
  return e;
}, Ay = (e, n) => Dy(e, By(n));
let tt, fr = {};
function zy(e = {}) {
  return Qe(e) ? Ay(Lr({}, fr), { message: e }) : Lr(Lr({}, fr), e);
}
function It(e) {
  return bt() ? new Promise((n) => {
    It.close();
    const t = zy(e), o = je(t);
    o.teleport = "body", tt = o;
    const { unmountInstance: r } = Zt(Do, o, {
      onConfirm: () => {
        y(o.onConfirm), n("confirm");
      },
      onCancel: () => {
        y(o.onCancel), n("cancel");
      },
      onClose: () => {
        y(o.onClose), n("close");
      },
      onClosed: () => {
        y(o.onClosed), r(), tt === o && (tt = null);
      },
      onRouteChange: () => {
        r(), tt === o && (tt = null);
      },
      "onUpdate:show": (a) => {
        o.show = a;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
It.setDefaultOptions = function(e) {
  fr = e;
};
It.resetDefaultOptions = function() {
  fr = {};
};
It.close = function() {
  if (tt != null) {
    const e = tt;
    tt = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
It.Component = Do;
oe(Do);
oe(Do, It);
const kE = Do;
var Pa = It;
const Ly = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: Ry, n: Uy, classes: Hy } = te("divider");
function Fy(e, n) {
  return h(), w(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.vertical, e.n("--vertical")],
          [e.withText, e.n("--with-text")],
          [e.withPresetInset, e.n("--inset")],
          [e.dashed, e.n("--dashed")],
          [e.hairline, e.n("--hairline")]
        )
      ),
      style: F(e.style)
    },
    [
      e.vertical ? Q("v-if", !0) : R(e.$slots, "default", { key: 0 }, () => [
        e.description ? (h(), w(
          "span",
          {
            key: 0,
            class: v(e.n("text"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const uf = ne({
  name: Ry,
  props: Ly,
  setup(e, { slots: n }) {
    const t = S(!1), o = V(() => {
      const { vertical: i, inset: s } = e;
      return !i && s === !0;
    }), r = V(() => {
      const { inset: i, vertical: s, margin: l } = e;
      if (hi(i) || s)
        return { margin: l };
      const u = A(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: l,
        width: `calc(100% - ${we(d)})`,
        left: u > 0 ? we(d) : we(0)
      };
    });
    rn(a), ko(a);
    function a() {
      const { description: i, vertical: s } = e;
      t.value = (n.default || i != null) && !s;
    }
    return {
      n: Uy,
      classes: Hy,
      withText: t,
      style: r,
      withPresetInset: o
    };
  }
});
uf.render = Fy;
var is = uf;
oe(is);
const PE = is;
var Oa = is;
const Yy = {
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
  onClick: z()
};
var jy = Object.defineProperty, Wy = Object.defineProperties, qy = Object.getOwnPropertyDescriptors, vu = Object.getOwnPropertySymbols, Gy = Object.prototype.hasOwnProperty, Xy = Object.prototype.propertyIsEnumerable, mu = (e, n, t) => n in e ? jy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, pu = (e, n) => {
  for (var t in n || (n = {}))
    Gy.call(n, t) && mu(e, t, n[t]);
  if (vu)
    for (var t of vu(n))
      Xy.call(n, t) && mu(e, t, n[t]);
  return e;
}, hu = (e, n) => Wy(e, qy(n)), Ky = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: Zy, n: Jy, classes: Qy } = te("drag");
function _y(e, n) {
  return h(), Se(Kn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    N(
      "div",
      Ne({
        ref: "drag",
        class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
        style: {
          "z-index": e.zIndex
        },
        onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
        onTouchmove: n[1] || (n[1] = (...t) => e.handleTouchmove && e.handleTouchmove(...t)),
        onTouchend: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
        onTouchcancel: n[3] || (n[3] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
        onClick: n[4] || (n[4] = (...t) => e.handleClick && e.handleClick(...t))
      }, e.getAttrs()),
      [
        R(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const df = ne({
  name: Zy,
  inheritAttrs: !1,
  props: Yy,
  setup(e, { attrs: n }) {
    const t = S(null), o = S(0), r = S(0), a = S(!1), i = S(!1), { touching: s, dragging: l, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: m, resetTouch: b } = br(), { disabled: p } = Jt(), g = je({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    fe(() => e.boundary, H), Oo(U), rn(() => {
      H(), U();
    });
    function k(G) {
      e.disabled || (c(G), C());
    }
    function T(G) {
      return Ky(this, null, function* () {
        !s.value || e.disabled || (f(G), G.preventDefault(), i.value = !1, a.value = !0, e.direction.includes("x") && (o.value += u.value), e.direction.includes("y") && (r.value += d.value), E());
      });
    }
    function O() {
      e.disabled || (m(), i.value = !0, D());
    }
    function $(G) {
      l.value || y(e.onClick, G);
    }
    function C() {
      const { left: G, top: W } = I();
      o.value = G, r.value = W;
    }
    function I() {
      const G = _e(t.value), W = _e(window), Z = G.top - W.top, _ = W.bottom - G.bottom, j = G.left - W.left, B = W.right - G.right, { width: M, height: x } = G, { width: q, height: Y } = W;
      return {
        top: Z,
        bottom: _,
        left: j,
        right: B,
        width: M,
        height: x,
        halfWidth: M / 2,
        halfHeight: x / 2,
        windowWidth: q,
        windowHeight: Y
      };
    }
    function P() {
      const G = I(), W = g.left, Z = G.windowWidth - g.right - G.width, _ = g.top, j = G.windowHeight - g.bottom - G.height;
      return {
        minX: W,
        minY: _,
        // fallback the drag element overflows boundary
        maxX: W < Z ? Z : W,
        maxY: _ < j ? j : _
      };
    }
    function D() {
      if (e.attraction == null)
        return;
      const { halfWidth: G, halfHeight: W, top: Z, bottom: _, left: j, right: B } = I(), { minX: M, minY: x, maxX: q, maxY: Y } = P(), X = j + G - g.left, ee = B + G - g.right, pe = Z + W - g.top, ke = _ + W - g.bottom, Re = X <= ee, se = pe <= ke;
      e.attraction.includes("x") && (o.value = Re ? M : q), e.attraction.includes("y") && (r.value = se ? x : Y);
    }
    function E() {
      const { minX: G, minY: W, maxX: Z, maxY: _ } = P();
      o.value = ut(o.value, G, Z), r.value = ut(r.value, W, _);
    }
    function H() {
      const { top: G = 0, bottom: W = 0, left: Z = 0, right: _ = 0 } = e.boundary;
      g.top = He(G), g.bottom = He(W), g.left = He(Z), g.right = He(_);
    }
    function L() {
      var G;
      const W = (G = n.style) != null ? G : {};
      return hu(pu({}, n), {
        style: hu(pu({}, W), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : W.top,
          left: a.value ? 0 : W.left,
          right: a.value ? "auto" : W.right,
          bottom: a.value ? "auto" : W.bottom,
          transform: a.value ? `translate(${o.value}px, ${r.value}px)` : W.transform
        })
      });
    }
    function U() {
      a.value && (C(), E());
    }
    function ie() {
      b(), i.value = !1, a.value = !1, o.value = 0, r.value = 0;
    }
    return {
      drag: t,
      x: o,
      y: r,
      enableTransition: i,
      dragging: l,
      teleportDisabled: p,
      n: Jy,
      classes: Qy,
      getAttrs: L,
      handleTouchstart: k,
      handleTouchmove: T,
      handleTouchend: O,
      handleClick: $,
      resize: U,
      reset: ie
    };
  }
});
df.render = _y;
var ss = df;
oe(ss);
const OE = ss;
var vr = ss, xy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qo(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return xy[n];
  });
}
var Wn = "top", mt = "bottom", Pt = "right", lt = "left", Tr = "auto", Er = [Wn, mt, Pt, lt], Ir = "start", mo = "end", e1 = "clippingParents", cf = "viewport", _t = "popper", n1 = "reference", gu = /* @__PURE__ */ Er.reduce(function(e, n) {
  return e.concat([n + "-" + Ir, n + "-" + mo]);
}, []), ff = /* @__PURE__ */ [].concat(Er, [Tr]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Ir, n + "-" + mo]);
}, []), t1 = "beforeRead", o1 = "read", r1 = "afterRead", a1 = "beforeMain", i1 = "main", s1 = "afterMain", l1 = "beforeWrite", u1 = "write", d1 = "afterWrite", Ta = [t1, o1, r1, a1, i1, s1, l1, u1, d1];
function qn(e) {
  return e.split("-")[0];
}
var c1 = {
  start: "end",
  end: "start"
};
function bu(e) {
  return e.replace(/start|end/g, function(n) {
    return c1[n];
  });
}
function Dn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ot(e) {
  var n = Dn(e).Element;
  return e instanceof n || e instanceof Element;
}
function kn(e) {
  var n = Dn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function ls(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Dn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function $t(e) {
  return ((Ot(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var oo = Math.max, yu = Math.min, Yt = Math.round;
function Ea() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function vf() {
  return !/^((?!chrome|android).)*safari/i.test(Ea());
}
function jt(e, n, t) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  n && kn(e) && (r = e.offsetWidth > 0 && Yt(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Yt(o.height) / e.offsetHeight || 1);
  var i = Ot(e) ? Dn(e) : window, s = i.visualViewport, l = !vf() && t, u = (o.left + (l && s ? s.offsetLeft : 0)) / r, d = (o.top + (l && s ? s.offsetTop : 0)) / a, c = o.width / r, f = o.height / a;
  return {
    width: c,
    height: f,
    top: d,
    right: u + c,
    bottom: d + f,
    left: u,
    x: u,
    y: d
  };
}
function us(e) {
  var n = Dn(e), t = n.pageXOffset, o = n.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function ds(e) {
  return jt($t(e)).left + us(e).scrollLeft;
}
function f1(e, n) {
  var t = Dn(e), o = $t(e), r = t.visualViewport, a = o.clientWidth, i = o.clientHeight, s = 0, l = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = vf();
    (u || !u && n === "fixed") && (s = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + ds(e),
    y: l
  };
}
function Ln(e) {
  return Dn(e).getComputedStyle(e);
}
function v1(e) {
  var n, t = $t(e), o = us(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = oo(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = oo(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + ds(e), l = -o.scrollTop;
  return Ln(r || t).direction === "rtl" && (s += oo(t.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function Hn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Mr(e) {
  return Hn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ls(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $t(e)
  );
}
function cs(e) {
  var n = Ln(e), t = n.overflow, o = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + r + o);
}
function mf(e) {
  return ["html", "body", "#document"].indexOf(Hn(e)) >= 0 ? e.ownerDocument.body : kn(e) && cs(e) ? e : mf(Mr(e));
}
function ro(e, n) {
  var t;
  n === void 0 && (n = []);
  var o = mf(e), r = o === ((t = e.ownerDocument) == null ? void 0 : t.body), a = Dn(o), i = r ? [a].concat(a.visualViewport || [], cs(o) ? o : []) : o, s = n.concat(i);
  return r ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ro(Mr(i)))
  );
}
function m1(e) {
  return ["table", "td", "th"].indexOf(Hn(e)) >= 0;
}
function $u(e) {
  return !kn(e) || // https://github.com/popperjs/popper-core/issues/837
  Ln(e).position === "fixed" ? null : e.offsetParent;
}
function p1(e) {
  var n = /firefox/i.test(Ea()), t = /Trident/i.test(Ea());
  if (t && kn(e)) {
    var o = Ln(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Mr(e);
  for (ls(r) && (r = r.host); kn(r) && ["html", "body"].indexOf(Hn(r)) < 0; ) {
    var a = Ln(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function fs(e) {
  for (var n = Dn(e), t = $u(e); t && m1(t) && Ln(t).position === "static"; )
    t = $u(t);
  return t && (Hn(t) === "html" || Hn(t) === "body" && Ln(t).position === "static") ? n : t || p1(e) || n;
}
function h1(e, n) {
  var t = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (t && ls(t)) {
    var o = n;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Ia(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function g1(e, n) {
  var t = jt(e, !1, n === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function wu(e, n, t) {
  return n === cf ? Ia(f1(e, t)) : Ot(n) ? g1(n, t) : Ia(v1($t(e)));
}
function b1(e) {
  var n = ro(Mr(e)), t = ["absolute", "fixed"].indexOf(Ln(e).position) >= 0, o = t && kn(e) ? fs(e) : e;
  return Ot(o) ? n.filter(function(r) {
    return Ot(r) && h1(r, o) && Hn(r) !== "body";
  }) : [];
}
function y1(e, n, t, o) {
  var r = n === "clippingParents" ? b1(e) : [].concat(n), a = [].concat(r, [t]), i = a[0], s = a.reduce(function(l, u) {
    var d = wu(e, u, o);
    return l.top = oo(d.top, l.top), l.right = yu(d.right, l.right), l.bottom = yu(d.bottom, l.bottom), l.left = oo(d.left, l.left), l;
  }, wu(e, i, o));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function po(e) {
  return e.split("-")[1];
}
function $1(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function pf(e) {
  var n = e.reference, t = e.element, o = e.placement, r = o ? qn(o) : null, a = o ? po(o) : null, i = n.x + n.width / 2 - t.width / 2, s = n.y + n.height / 2 - t.height / 2, l;
  switch (r) {
    case Wn:
      l = {
        x: i,
        y: n.y - t.height
      };
      break;
    case mt:
      l = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Pt:
      l = {
        x: n.x + n.width,
        y: s
      };
      break;
    case lt:
      l = {
        x: n.x - t.width,
        y: s
      };
      break;
    default:
      l = {
        x: n.x,
        y: n.y
      };
  }
  var u = r ? $1(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Ir:
        l[u] = l[u] - (n[d] / 2 - t[d] / 2);
        break;
      case mo:
        l[u] = l[u] + (n[d] / 2 - t[d] / 2);
        break;
    }
  }
  return l;
}
function w1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function S1(e) {
  return Object.assign({}, w1(), e);
}
function C1(e, n) {
  return n.reduce(function(t, o) {
    return t[o] = e, t;
  }, {});
}
function hf(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = o === void 0 ? e.placement : o, a = t.strategy, i = a === void 0 ? e.strategy : a, s = t.boundary, l = s === void 0 ? e1 : s, u = t.rootBoundary, d = u === void 0 ? cf : u, c = t.elementContext, f = c === void 0 ? _t : c, m = t.altBoundary, b = m === void 0 ? !1 : m, p = t.padding, g = p === void 0 ? 0 : p, k = S1(typeof g != "number" ? g : C1(g, Er)), T = f === _t ? n1 : _t, O = e.rects.popper, $ = e.elements[b ? T : f], C = y1(Ot($) ? $ : $.contextElement || $t(e.elements.popper), l, d, i), I = jt(e.elements.reference), P = pf({
    reference: I,
    element: O,
    strategy: "absolute",
    placement: r
  }), D = Ia(Object.assign({}, O, P)), E = f === _t ? D : I, H = {
    top: C.top - E.top + k.top,
    bottom: E.bottom - C.bottom + k.bottom,
    left: C.left - E.left + k.left,
    right: E.right - C.right + k.right
  }, L = e.modifiersData.offset;
  if (f === _t && L) {
    var U = L[r];
    Object.keys(H).forEach(function(ie) {
      var G = [Pt, mt].indexOf(ie) >= 0 ? 1 : -1, W = [Wn, mt].indexOf(ie) >= 0 ? "y" : "x";
      H[ie] += U[W] * G;
    });
  }
  return H;
}
function k1(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = t.boundary, a = t.rootBoundary, i = t.padding, s = t.flipVariations, l = t.allowedAutoPlacements, u = l === void 0 ? ff : l, d = po(o), c = d ? s ? gu : gu.filter(function(b) {
    return po(b) === d;
  }) : Er, f = c.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  f.length === 0 && (f = c, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(b, p) {
    return b[p] = hf(e, {
      placement: p,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[qn(p)], b;
  }, {});
  return Object.keys(m).sort(function(b, p) {
    return m[b] - m[p];
  });
}
function P1(e) {
  if (qn(e) === Tr)
    return [];
  var n = Qo(e);
  return [bu(e), n, bu(n)];
}
function O1(e) {
  var n = e.state, t = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var r = t.mainAxis, a = r === void 0 ? !0 : r, i = t.altAxis, s = i === void 0 ? !0 : i, l = t.fallbackPlacements, u = t.padding, d = t.boundary, c = t.rootBoundary, f = t.altBoundary, m = t.flipVariations, b = m === void 0 ? !0 : m, p = t.allowedAutoPlacements, g = n.options.placement, k = qn(g), T = k === g, O = l || (T || !b ? [Qo(g)] : P1(g)), $ = [g].concat(O).reduce(function(X, ee) {
      return X.concat(qn(ee) === Tr ? k1(n, {
        placement: ee,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: p
      }) : ee);
    }, []), C = n.rects.reference, I = n.rects.popper, P = /* @__PURE__ */ new Map(), D = !0, E = $[0], H = 0; H < $.length; H++) {
      var L = $[H], U = qn(L), ie = po(L) === Ir, G = [Wn, mt].indexOf(U) >= 0, W = G ? "width" : "height", Z = hf(n, {
        placement: L,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), _ = G ? ie ? Pt : lt : ie ? mt : Wn;
      C[W] > I[W] && (_ = Qo(_));
      var j = Qo(_), B = [];
      if (a && B.push(Z[U] <= 0), s && B.push(Z[_] <= 0, Z[j] <= 0), B.every(function(X) {
        return X;
      })) {
        E = L, D = !1;
        break;
      }
      P.set(L, B);
    }
    if (D)
      for (var M = b ? 3 : 1, x = function(ee) {
        var pe = $.find(function(ke) {
          var Re = P.get(ke);
          if (Re)
            return Re.slice(0, ee).every(function(se) {
              return se;
            });
        });
        if (pe)
          return E = pe, "break";
      }, q = M; q > 0; q--) {
        var Y = x(q);
        if (Y === "break")
          break;
      }
    n.placement !== E && (n.modifiersData[o]._skip = !0, n.placement = E, n.reset = !0);
  }
}
const T1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: O1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function E1(e, n, t) {
  var o = qn(e), r = [lt, Wn].indexOf(o) >= 0 ? -1 : 1, a = typeof t == "function" ? t(Object.assign({}, n, {
    placement: e
  })) : t, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * r, [lt, Pt].indexOf(o) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function I1(e) {
  var n = e.state, t = e.options, o = e.name, r = t.offset, a = r === void 0 ? [0, 0] : r, i = ff.reduce(function(d, c) {
    return d[c] = E1(c, n.rects, a), d;
  }, {}), s = i[n.placement], l = s.x, u = s.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += l, n.modifiersData.popperOffsets.y += u), n.modifiersData[o] = i;
}
const M1 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: I1
};
var D1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function B1(e) {
  var n = e.x, t = e.y, o = window, r = o.devicePixelRatio || 1;
  return {
    x: Yt(n * r) / r || 0,
    y: Yt(t * r) / r || 0
  };
}
function Su(e) {
  var n, t = e.popper, o = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, b = i.y, p = b === void 0 ? 0 : b, g = typeof d == "function" ? d({
    x: m,
    y: p
  }) : {
    x: m,
    y: p
  };
  m = g.x, p = g.y;
  var k = i.hasOwnProperty("x"), T = i.hasOwnProperty("y"), O = lt, $ = Wn, C = window;
  if (u) {
    var I = fs(t), P = "clientHeight", D = "clientWidth";
    if (I === Dn(t) && (I = $t(t), Ln(I).position !== "static" && s === "absolute" && (P = "scrollHeight", D = "scrollWidth")), I = I, r === Wn || (r === lt || r === Pt) && a === mo) {
      $ = mt;
      var E = c && I === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[P]
      );
      p -= E - o.height, p *= l ? 1 : -1;
    }
    if (r === lt || (r === Wn || r === mt) && a === mo) {
      O = Pt;
      var H = c && I === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[D]
      );
      m -= H - o.width, m *= l ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: s
  }, u && D1), U = d === !0 ? B1({
    x: m,
    y: p
  }) : {
    x: m,
    y: p
  };
  if (m = U.x, p = U.y, l) {
    var ie;
    return Object.assign({}, L, (ie = {}, ie[$] = T ? "0" : "", ie[O] = k ? "0" : "", ie.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", ie));
  }
  return Object.assign({}, L, (n = {}, n[$] = T ? p + "px" : "", n[O] = k ? m + "px" : "", n.transform = "", n));
}
function N1(e) {
  var n = e.state, t = e.options, o = t.gpuAcceleration, r = o === void 0 ? !0 : o, a = t.adaptive, i = a === void 0 ? !0 : a, s = t.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var u = Ln(n.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(c) {
      return u.indexOf(c) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: qn(n.placement),
    variation: po(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Su(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Su(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const gf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: N1,
  data: {}
};
function V1(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function A1(e) {
  return e === Dn(e) || !kn(e) ? us(e) : V1(e);
}
function z1(e) {
  var n = e.getBoundingClientRect(), t = Yt(n.width) / e.offsetWidth || 1, o = Yt(n.height) / e.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function L1(e, n, t) {
  t === void 0 && (t = !1);
  var o = kn(n), r = kn(n) && z1(n), a = $t(n), i = jt(e, r, t), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((Hn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  cs(a)) && (s = A1(n)), kn(n) ? (l = jt(n, !0), l.x += n.clientLeft, l.y += n.clientTop) : a && (l.x = ds(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function R1(e) {
  var n = jt(e), t = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(n.width - t) <= 1 && (t = n.width), Math.abs(n.height - o) <= 1 && (o = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: t,
    height: o
  };
}
function U1(e) {
  var n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    n.set(a.name, a);
  });
  function r(a) {
    t.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!t.has(s)) {
        var l = n.get(s);
        l && r(l);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    t.has(a.name) || r(a);
  }), o;
}
function H1(e) {
  var n = U1(e);
  return Ta.reduce(function(t, o) {
    return t.concat(n.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function F1(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(t) {
      Promise.resolve().then(function() {
        n = void 0, t(e());
      });
    })), n;
  };
}
function Jn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    t[o - 1] = arguments[o];
  return [].concat(t).reduce(function(r, a) {
    return r.replace(/%s/, a);
  }, e);
}
var St = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Y1 = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Cu = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function j1(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Cu).filter(function(t, o, r) {
      return r.indexOf(t) === o;
    }).forEach(function(t) {
      switch (t) {
        case "name":
          typeof n.name != "string" && console.error(Jn(St, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Jn(St, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Ta.indexOf(n.phase) < 0 && console.error(Jn(St, n.name, '"phase"', "either " + Ta.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Jn(St, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Jn(St, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Jn(St, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Jn(St, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Cu.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + t + '" was provided.');
      }
      n.requires && n.requires.forEach(function(o) {
        e.find(function(r) {
          return r.name === o;
        }) == null && console.error(Jn(Y1, String(n.name), o, o));
      });
    });
  });
}
function W1(e, n) {
  var t = /* @__PURE__ */ new Set();
  return e.filter(function(o) {
    var r = n(o);
    if (!t.has(r))
      return t.add(r), !0;
  });
}
function q1(e) {
  var n = e.reduce(function(t, o) {
    var r = t[o.name];
    return t[o.name] = r ? Object.assign({}, r, o, {
      options: Object.assign({}, r.options, o.options),
      data: Object.assign({}, r.data, o.data)
    }) : o, t;
  }, {});
  return Object.keys(n).map(function(t) {
    return n[t];
  });
}
var ku = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", G1 = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Pu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ou() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function X1(e) {
  e === void 0 && (e = {});
  var n = e, t = n.defaultModifiers, o = t === void 0 ? [] : t, r = n.defaultOptions, a = r === void 0 ? Pu : r;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Pu, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, c = [], f = !1, m = {
      state: d,
      setOptions: function(k) {
        var T = typeof k == "function" ? k(d.options) : k;
        p(), d.options = Object.assign({}, a, d.options, T), d.scrollParents = {
          reference: Ot(s) ? ro(s) : s.contextElement ? ro(s.contextElement) : [],
          popper: ro(l)
        };
        var O = H1(q1([].concat(o, d.options.modifiers)));
        if (d.orderedModifiers = O.filter(function(L) {
          return L.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = W1([].concat(O, d.options.modifiers), function(L) {
            var U = L.name;
            return U;
          });
          if (j1($), qn(d.options.placement) === Tr) {
            var C = d.orderedModifiers.find(function(L) {
              var U = L.name;
              return U === "flip";
            });
            C || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var I = Ln(l), P = I.marginTop, D = I.marginRight, E = I.marginBottom, H = I.marginLeft;
          [P, D, E, H].some(function(L) {
            return parseFloat(L);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return b(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var k = d.elements, T = k.reference, O = k.popper;
          if (!Ou(T, O)) {
            process.env.NODE_ENV !== "production" && console.error(ku);
            return;
          }
          d.rects = {
            reference: L1(T, fs(O), d.options.strategy === "fixed"),
            popper: R1(O)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(L) {
            return d.modifiersData[L.name] = Object.assign({}, L.data);
          });
          for (var $ = 0, C = 0; C < d.orderedModifiers.length; C++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(G1);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, C = -1;
              continue;
            }
            var I = d.orderedModifiers[C], P = I.fn, D = I.options, E = D === void 0 ? {} : D, H = I.name;
            typeof P == "function" && (d = P({
              state: d,
              options: E,
              name: H,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: F1(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        p(), f = !0;
      }
    };
    if (!Ou(s, l))
      return process.env.NODE_ENV !== "production" && console.error(ku), m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function b() {
      d.orderedModifiers.forEach(function(g) {
        var k = g.name, T = g.options, O = T === void 0 ? {} : T, $ = g.effect;
        if (typeof $ == "function") {
          var C = $({
            state: d,
            name: k,
            instance: m,
            options: O
          }), I = function() {
          };
          c.push(C || I);
        }
      });
    }
    function p() {
      c.forEach(function(g) {
        return g();
      }), c = [];
    }
    return m;
  };
}
var Yo = {
  passive: !0
};
function K1(e) {
  var n = e.state, t = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, i = o.resize, s = i === void 0 ? !0 : i, l = Dn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", t.update, Yo);
  }), s && l.addEventListener("resize", t.update, Yo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", t.update, Yo);
    }), s && l.removeEventListener("resize", t.update, Yo);
  };
}
const Z1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: K1,
  data: {}
};
function J1(e) {
  var n = e.state, t = e.name;
  n.modifiersData[t] = pf({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Q1 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: J1,
  data: {}
};
function _1(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(t) {
    var o = n.styles[t] || {}, r = n.attributes[t] || {}, a = n.elements[t];
    !kn(a) || !Hn(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(i) {
      var s = r[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function x1(e) {
  var n = e.state, t = {
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
  return Object.assign(n.elements.popper.style, t.popper), n.styles = t, n.elements.arrow && Object.assign(n.elements.arrow.style, t.arrow), function() {
    Object.keys(n.elements).forEach(function(o) {
      var r = n.elements[o], a = n.attributes[o] || {}, i = Object.keys(n.styles.hasOwnProperty(o) ? n.styles[o] : t[o]), s = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !kn(r) || !Hn(r) || (Object.assign(r.style, s), Object.keys(a).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
const e$ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: _1,
  effect: x1,
  requires: ["computeStyles"]
};
var n$ = [Z1, Q1, gf, e$], t$ = /* @__PURE__ */ X1({
  defaultModifiers: n$
}), o$ = Object.defineProperty, r$ = Object.defineProperties, a$ = Object.getOwnPropertyDescriptors, Tu = Object.getOwnPropertySymbols, i$ = Object.prototype.hasOwnProperty, s$ = Object.prototype.propertyIsEnumerable, Eu = (e, n, t) => n in e ? o$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Rr = (e, n) => {
  for (var t in n || (n = {}))
    i$.call(n, t) && Eu(e, t, n[t]);
  if (Tu)
    for (var t of Tu(n))
      s$.call(n, t) && Eu(e, t, n[t]);
  return e;
}, Ur = (e, n) => r$(e, a$(n)), Iu = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
function bf(e) {
  const n = S(null), t = S(null), o = S({ width: 0, height: 0 }), r = lo(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(E, H) {
      H ? (I(), y(e.onOpen)) : y(e.onClose);
    }
  }), { zIndex: a } = Eo(() => r.value, 1);
  let i = null, s = !1, l = !1;
  const u = () => {
    const { width: E, height: H } = Tt(n.value);
    o.value = {
      width: He(E),
      height: He(H)
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
  }, c = () => {
    e.trigger === "hover" && (l = !0, P());
  }, f = () => Iu(this, null, function* () {
    e.trigger === "hover" && (l = !1, yield dn(), !s && D());
  }), m = () => {
    e.trigger === "hover" && (s = !0);
  }, b = () => Iu(this, null, function* () {
    e.trigger === "hover" && (s = !1, yield dn(), !l && D());
  }), p = () => {
    e.closeOnClickReference && r.value ? D() : P();
  }, g = () => {
    D();
  }, k = (E) => {
    e.trigger === "click" && (g(), y(e.onClickOutside, E));
  }, T = () => {
    I(), y(e.onClosed);
  }, O = () => {
    const { offsetX: E, offsetY: H, placement: L } = e;
    u();
    const U = {
      x: He(E),
      y: He(H)
    };
    switch (L) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: U.x,
          distance: U.y - o.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: U.x,
          distance: U.y - o.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: U.x,
          distance: U.y - o.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: U.x,
          distance: -U.y - o.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: U.x,
          distance: -U.y - o.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: U.x,
          distance: -U.y - o.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: U.y,
          distance: U.x - o.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: U.y,
          distance: -U.x - o.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: L,
          skidding: U.y,
          distance: -U.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: L,
          skidding: U.x,
          distance: -U.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: L,
          skidding: U.x,
          distance: U.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: L,
          skidding: U.y,
          distance: U.x
        };
    }
  }, $ = () => {
    const { placement: E, skidding: H, distance: L } = O(), U = [
      Ur(Rr({}, T1), {
        enabled: r.value
      }),
      Ur(Rr({}, M1), {
        options: {
          offset: [H, L]
        }
      }),
      Ur(Rr({}, gf), {
        options: {
          adaptive: !1,
          gpuAcceleration: !1
        },
        enabled: r.value
      }),
      {
        name: "applyTransformOrigin",
        enabled: r.value,
        phase: "beforeWrite",
        fn({ state: ie }) {
          ie.styles.popper.transformOrigin = d();
        }
      }
    ];
    return {
      placement: E,
      modifiers: U,
      strategy: e.strategy
    };
  }, C = () => e.reference ? n.value.querySelector(e.reference) : n.value, I = () => {
    i.setOptions($());
  }, P = () => {
    const { disabled: E } = e;
    E || (r.value = !0, y(e["onUpdate:show"], !0));
  }, D = () => {
    r.value = !1, y(e["onUpdate:show"], !1);
  };
  return kd(C, "click", k), fe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], I), fe(() => e.disabled, D), So(() => {
    var E;
    i = t$((E = C()) != null ? E : n.value, t.value, $());
  }), Co(() => {
    i.destroy();
  }), {
    show: r,
    popover: t,
    zIndex: a,
    host: n,
    hostSize: o,
    handleHostClick: p,
    handleHostMouseenter: c,
    handleHostMouseleave: f,
    handlePopoverClose: g,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: b,
    handleClosed: T,
    resize: I,
    open: P,
    close: D
  };
}
const l$ = {
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
  onOpen: z(),
  onOpened: z(),
  onClose: z(),
  onClosed: z(),
  onClickOutside: z(),
  "onUpdate:show": z()
}, { name: u$, n: d$, classes: c$ } = te("tooltip");
function f$(e, n) {
  return h(), w(
    "div",
    {
      ref: "host",
      class: v(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...t) => e.handleHostClick && e.handleHostClick(...t)),
      onMouseenter: n[4] || (n[4] = (...t) => e.handleHostMouseenter && e.handleHostMouseenter(...t)),
      onMouseleave: n[5] || (n[5] = (...t) => e.handleHostMouseleave && e.handleHostMouseleave(...t))
    },
    [
      R(e.$slots, "default"),
      (h(), Se(Kn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        J(Ye, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ve(() => [
            Oe(N(
              "div",
              {
                ref: "popover",
                class: v(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: F({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = On(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...t) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...t)),
                onMouseleave: n[2] || (n[2] = (...t) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...t))
              },
              [
                N(
                  "div",
                  {
                    style: F({ background: e.color, width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0 }),
                    class: v(e.classes(e.n("content-container"), e.n(`--${e.type}`)))
                  },
                  [
                    R(e.$slots, "content", {}, () => [
                      Te(
                        re(e.content),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ],
              38
              /* CLASS, STYLE, HYDRATE_EVENTS */
            ), [
              [Rn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const yf = ne({
  name: u$,
  props: l$,
  setup(e) {
    const { disabled: n } = Jt(), {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: s,
      handleHostMouseenter: l,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: b,
      // expose
      close: p,
      // expose
      resize: g
    } = bf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: we,
      n: d$,
      classes: c$,
      handleHostClick: s,
      handlePopoverClose: f,
      handleHostMouseenter: l,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handleClosed: m,
      resize: g,
      open: b,
      close: p
    };
  }
});
yf.render = f$;
var vs = yf;
oe(vs);
const TE = vs;
var mr = vs;
const v$ = {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
var m$ = Object.defineProperty, Mu = Object.getOwnPropertySymbols, p$ = Object.prototype.hasOwnProperty, h$ = Object.prototype.propertyIsEnumerable, Du = (e, n, t) => n in e ? m$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, g$ = (e, n) => {
  for (var t in n || (n = {}))
    p$.call(n, t) && Du(e, t, n[t]);
  if (Mu)
    for (var t of Mu(n))
      h$.call(n, t) && Du(e, t, n[t]);
  return e;
};
const { name: b$, n: y$, classes: $$ } = te("ellipsis"), w$ = { key: 0 };
function S$(e, n) {
  const t = ae("var-tooltip");
  return h(), Se(
    t,
    st(Po(e.tooltip)),
    {
      content: ve(() => [
        R(e.$slots, "tooltip-content", {}, () => {
          var o;
          return [
            (o = e.tooltip) != null && o.content ? (h(), w(
              "span",
              w$,
              re(e.tooltip.content),
              1
              /* TEXT */
            )) : R(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: ve(() => [
        N(
          "span",
          {
            class: v(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: F(e.rootStyles),
            onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
          },
          [
            R(e.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const $f = ne({
  name: b$,
  components: { VarTooltip: mr },
  props: v$,
  setup(e) {
    const n = S(!1), t = V(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), o = V(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : g$({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltip: o,
      expanding: n,
      rootStyles: t,
      n: y$,
      classes: $$,
      handleClick: r
    };
  }
});
$f.render = S$;
var ms = $f;
oe(ms);
const EE = ms;
var Ma = ms;
const C$ = {
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
  onClick: z(),
  onOpen: z(),
  onOpened: z(),
  onClose: z(),
  onClosed: z(),
  "onUpdate:active": z()
}, {
  name: k$,
  classes: Hr,
  n: yn
} = te("fab");
var ps = ne({
  name: k$,
  inheritAttrs: !1,
  props: C$,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = lo(e, "active"), r = S(null), a = S(null);
    fe(() => e.trigger, () => {
      o.value = !1;
    }), fe(() => e.disabled, () => {
      o.value = !1;
    }), fe(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var d;
      (d = a.value) == null || d.reset();
    }), kd(r, "click", l);
    function i(d, c, f) {
      if (d.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          y(e.onClick, o.value, d);
          return;
        }
        o.value = c, y(e.onClick, o.value, d), y(o.value ? e.onOpen : e.onClose);
      }
    }
    function s(d, c) {
      e.trigger !== "hover" || e.disabled || c === 0 || (o.value = d, y(o.value ? e.onOpen : e.onClose));
    }
    function l() {
      e.trigger !== "click" || e.disabled || o.value !== !1 && (o.value = !1, y(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({
        active: o.value
      }) : null : Oe(J(mn, {
        "var-fab-cover": !0,
        class: yn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        round: !0
      }, {
        default: () => [J(Ue, {
          "var-fab-cover": !0,
          class: Hr([o.value, yn("trigger-active-icon"), yn("trigger-inactive-icon")]),
          name: o.value ? e.activeIcon : e.inactiveIcon,
          size: o.value ? e.inactiveIconSize : e.activeIconSize,
          transition: 200,
          animationClass: yn("--trigger-icon-animation")
        }, null)]
      }), [[Rn, e.show]]);
    }
    return () => {
      var d;
      const c = Od((d = y(n.default)) != null ? d : []), f = hi(e.drag) ? {} : e.drag;
      return J(vr, Ne({
        ref: a,
        class: Hr(yn(`--position-${e.position}`), [!e.fixed, yn("--absolute")]),
        style: {
          top: we(e.top),
          bottom: we(e.bottom),
          left: we(e.left),
          right: we(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: f.direction,
        attraction: f.attraction,
        boundary: f.boundary,
        onClick: (m) => i(m, !o.value, c.length)
      }, t), {
        default: () => [J("div", {
          class: Hr(yn(), yn(`--direction-${e.direction}`), [e.safeArea, yn("--safe-area")]),
          ref: r,
          onMouseleave: () => s(!1, c.length),
          onMouseenter: () => s(!0, c.length)
        }, [J(Ye, {
          name: yn("--active-transition")
        }, {
          default: () => [u()]
        }), J(Ye, {
          name: yn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Oe(J("div", {
            class: yn("actions"),
            onClick: (m) => m.stopPropagation()
          }, [c.map((m) => J("div", {
            class: yn("action")
          }, [m]))]), [[Rn, e.show && o.value && c.length]])]
        })])]
      });
    };
  }
});
oe(ps);
const IE = ps;
var Da = ps;
const P$ = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: z(),
  onReset: z()
};
var Bu = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: O$, n: T$ } = te("form");
function E$(e, n) {
  return h(), w(
    "form",
    {
      class: v(e.n()),
      onSubmit: n[0] || (n[0] = (...t) => e.handleSubmit && e.handleSubmit(...t)),
      onReset: n[1] || (n[1] = (...t) => e.handleReset && e.handleReset(...t))
    },
    [
      R(e.$slots, "default")
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const wf = ne({
  name: O$,
  props: P$,
  setup(e) {
    const n = V(() => e.disabled), t = V(() => e.readonly), { formItems: o, bindFormItems: r } = Jg();
    r({
      disabled: n,
      readonly: t
    });
    function i(f) {
      setTimeout(() => {
        const m = ft(f), b = m === window ? 0 : wl(m), p = wl(f) - b - He(e.scrollToErrorOffsetY);
        co(m, {
          top: p,
          animation: _r
        });
      }, 300);
    }
    function s(f) {
      return Bu(this, null, function* () {
        f.preventDefault();
        const m = yield u();
        y(e.onSubmit, m);
      });
    }
    function l(f) {
      f.preventDefault(), d(), y(e.onReset);
    }
    function u() {
      return Bu(this, null, function* () {
        var f;
        const m = yield Promise.all(o.map(({ validate: b }) => b()));
        if (e.scrollToError) {
          const [, b] = lm(m, (g) => g === !1, e.scrollToError), p = b > -1;
          if (p) {
            const g = (f = o[b].instance.proxy) == null ? void 0 : f.$el;
            i(g);
          }
          return !p;
        }
        return m.every((b) => b === !0);
      });
    }
    function d() {
      return o.forEach(({ reset: f }) => f());
    }
    function c() {
      return o.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: T$,
      handleSubmit: s,
      handleReset: l,
      validate: u,
      reset: d,
      resetValidation: c
    };
  }
});
wf.render = E$;
var Bo = wf;
Bo.useValidation = In;
Bo.useForm = Mn;
oe(Bo);
const ME = Bo;
var Ba = Bo;
const I$ = {
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
  onClick: z(),
  onLoad: z(),
  onError: z()
}, { name: M$, n: D$, classes: B$ } = te("image"), N$ = ["alt", "title", "lazy-loading", "lazy-error"], V$ = ["alt", "title", "src"];
function A$(e, n) {
  var t;
  const o = Le("lazy"), r = Le("ripple");
  return Oe((h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: F({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? Oe((h(), w("img", {
        key: 0,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: F({ objectFit: e.fit }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, N$)), [
        [o, (t = e.src) != null ? t : ""]
      ]) : Q("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (h(), w("img", {
        key: 1,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: F({ objectFit: e.fit }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, V$)) : Q("v-if", !0),
      e.showErrorSlot ? R(e.$slots, "error", { key: 2 }) : Q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const Sf = ne({
  name: M$,
  directives: {
    Lazy: fo,
    Ripple: Ke
  },
  props: I$,
  setup(e, { slots: n }) {
    const t = S(!1);
    fe(
      () => e.src,
      () => {
        t.value = !1;
      }
    );
    function o(i) {
      t.value = !!n.error, y(e.onError, i);
    }
    function r(i) {
      const s = i.currentTarget;
      if (e.lazy) {
        if (s._lazy.state === "success") {
          y(e.onLoad, i);
          return;
        }
        s._lazy.state === "error" && o(i);
      } else
        y(e.onLoad, i);
    }
    function a(i) {
      y(e.onClick, i);
    }
    return {
      showErrorSlot: t,
      n: D$,
      classes: B$,
      toSizeUnit: we,
      handleLoad: r,
      handleError: o,
      handleClick: a
    };
  }
});
Sf.render = A$;
var hs = Sf;
oe(hs);
const DE = hs;
var Na = hs;
const Cf = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function z$() {
  const { childProviders: e, length: n, bindChildren: t } = sn(
    Cf
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: t
  };
}
const kf = {
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
  navigation: {
    type: [Boolean, String],
    default: !1
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
  onChange: z()
};
var Bt = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const L$ = 250, R$ = 20, { name: U$, n: Fr, classes: H$ } = te("swipe"), F$ = ["onClick"];
function Y$(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = Le("hover");
  return Oe((h(), w(
    "div",
    {
      class: v(e.n()),
      ref: "swipeEl"
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
          style: F({
            width: e.vertical ? void 0 : `${e.trackSize}px`,
            height: e.vertical ? `${e.trackSize}px` : void 0,
            transform: `translate${e.vertical ? "Y" : "X"}(${e.trackTranslate}px)`,
            transitionDuration: e.lockDuration ? "0ms" : `${e.toNumber(e.duration)}ms`
          }),
          onTouchstart: n[0] || (n[0] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
          onTouchmove: n[1] || (n[1] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
          onTouchend: n[2] || (n[2] = (...a) => e.handleTouchend && e.handleTouchend(...a))
        },
        [
          R(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ),
      e.navigation ? R(e.$slots, "prev", st(Ne({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        J(Ye, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: ve(() => [
            e.navigation === !0 || e.hovering ? (h(), w(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
              },
              [
                J(o, {
                  "var-swipe-cover": "",
                  disabled: !e.loop && e.index === 0,
                  class: v(e.n("navigation-prev-button")),
                  onClick: n[3] || (n[3] = (a) => e.prev())
                }, {
                  default: ve(() => [
                    J(t, {
                      "var-swipe-cover": "",
                      class: v(e.n("navigation-prev-button-icon")),
                      name: e.vertical ? "chevron-up" : "chevron-left"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "class"])
              ],
              2
              /* CLASS */
            )) : Q("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : Q("v-if", !0),
      e.navigation ? R(e.$slots, "next", st(Ne({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        J(Ye, {
          name: e.getNavigationAnimation("next")
        }, {
          default: ve(() => [
            e.navigation === !0 || e.hovering ? (h(), w(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
              },
              [
                J(o, {
                  "var-swipe-cover": "",
                  class: v(e.n("navigation-next-button")),
                  disabled: !e.loop && e.index === e.length - 1,
                  onClick: n[4] || (n[4] = (a) => e.next())
                }, {
                  default: ve(() => [
                    J(t, {
                      "var-swipe-cover": "",
                      class: v(e.n("navigation-next-button-icon")),
                      name: e.vertical ? "chevron-down" : "chevron-right"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "disabled"])
              ],
              2
              /* CLASS */
            )) : Q("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : Q("v-if", !0),
      R(e.$slots, "indicator", st(Po({
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        e.indicator && e.length ? (h(), w(
          "div",
          {
            key: 0,
            class: v(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (h(!0), w(
              Be,
              null,
              qe(e.length, (a, i) => (h(), w("div", {
                class: v(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: F({ background: e.indicatorColor }),
                key: a,
                onClick: (s) => e.to(i)
              }, null, 14, F$))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : Q("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [r, e.handleHovering]
  ]);
}
const Pf = ne({
  name: U$,
  directives: { Hover: En },
  components: { VarButton: mn, VarIcon: Ue },
  props: kf,
  setup(e) {
    const n = S(null), t = S(0), o = V(() => e.vertical), r = S(0), a = S(0), i = S(!1), s = S(0), l = S(!1), { swipeItems: u, bindSwipeItems: d, length: c } = z$(), { popup: f, bindPopup: m } = Vm(), {
      deltaX: b,
      deltaY: p,
      moveX: g,
      moveY: k,
      offsetX: T,
      offsetY: O,
      touching: $,
      direction: C,
      startTime: I,
      startTouch: P,
      moveTouch: D,
      endTouch: E
    } = br(), H = V(() => C.value === (e.vertical ? "vertical" : "horizontal"));
    let L = !1, U = -1;
    d({
      size: t,
      vertical: o
    }), y(m, null), fe(
      () => c.value,
      () => Bt(this, null, function* () {
        yield dn(), M(), ke();
      })
    ), f && fe(
      () => f.show.value,
      (le) => Bt(this, null, function* () {
        le ? (yield dn(), ke()) : q();
      })
    ), pt(ke), gr(q), Oo(ke);
    function G(le) {
      return u.find(({ index: he }) => he.value === le);
    }
    function W() {
      e.loop && (a.value >= 0 && G(c.value - 1).setTranslate(-r.value), a.value <= -(r.value - t.value) && G(0).setTranslate(r.value), a.value > -(r.value - t.value) && a.value < 0 && (G(c.value - 1).setTranslate(0), G(0).setTranslate(0)));
    }
    function Z(le) {
      const he = vn(le) ? le : Math.floor((a.value - t.value / 2) / -t.value), { loop: De } = e;
      return he <= -1 ? De ? -1 : 0 : he >= c.value ? De ? c.value : c.value - 1 : he;
    }
    function _(le) {
      const { loop: he } = e;
      return le === -1 ? he ? c.value - 1 : 0 : le === c.value ? he ? 0 : c.value - 1 : le;
    }
    function j(le) {
      return e.loop ? le < 0 ? c.value + le : le >= c.value ? le - c.value : le : ut(le, 0, c.value - 1);
    }
    function B() {
      return Bt(this, null, function* () {
        const le = a.value >= t.value, he = a.value <= -r.value, De = 0, We = -(r.value - t.value);
        i.value = !0, (le || he) && (i.value = !0, a.value = he ? De : We, G(0).setTranslate(0), G(c.value - 1).setTranslate(0)), yield dn(), i.value = !1;
      });
    }
    function M() {
      L || (s.value = j(A(e.initialIndex)), L = !0);
    }
    function x() {
      const { autoplay: le } = e;
      !le || c.value <= 1 || (q(), U = window.setTimeout(() => {
        Re(), x();
      }, A(le)));
    }
    function q() {
      U && clearTimeout(U);
    }
    function Y(le) {
      a.value = le, W();
    }
    function X(le) {
      return Bt(this, null, function* () {
        c.value <= 1 || !e.touchable || (P(le), q(), yield B(), i.value = !0);
      });
    }
    function ee(le) {
      const { touchable: he, vertical: De } = e;
      !$.value || !he || (D(le), H.value && (le.preventDefault(), Y(a.value + (De ? k.value : g.value))));
    }
    function pe() {
      if (!$.value || (E(), !H.value))
        return;
      const { vertical: le, onChange: he } = e, De = le ? p.value < 0 : b.value < 0, We = le ? O.value : T.value, $e = performance.now() - I.value <= L$ && We >= R$ ? Z(De ? s.value + 1 : s.value - 1) : Z();
      i.value = !1, Y($e * -t.value);
      const be = s.value;
      s.value = _($e), x(), be !== s.value && y(he, s.value);
    }
    function ke() {
      n.value && (i.value = !0, t.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = t.value * c.value, a.value = s.value * -t.value, u.forEach((le) => {
        le.setTranslate(0);
      }), x(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function Re(le) {
      return Bt(this, null, function* () {
        if (c.value <= 1)
          return;
        M();
        const { loop: he, onChange: De } = e, We = s.value;
        if (s.value = j(We + 1), (le == null ? void 0 : le.event) !== !1 && y(De, s.value), yield B(), We === c.value - 1 && he) {
          G(0).setTranslate(r.value), a.value = c.value * -t.value;
          return;
        }
        We !== c.value - 1 && (a.value = s.value * -t.value);
      });
    }
    function se(le) {
      return Bt(this, null, function* () {
        if (c.value <= 1)
          return;
        M();
        const { loop: he, onChange: De } = e, We = s.value;
        if (s.value = j(We - 1), (le == null ? void 0 : le.event) !== !1 && y(De, s.value), yield B(), We === 0 && he) {
          G(c.value - 1).setTranslate(-r.value), a.value = t.value;
          return;
        }
        We !== 0 && (a.value = s.value * -t.value);
      });
    }
    function de(le, he) {
      if (c.value <= 1 || le === s.value)
        return;
      le = le < 0 ? 0 : le, le = le >= c.value ? c.value : le;
      const De = le > s.value ? Re : se, We = Math.abs(le - s.value);
      Array.from({ length: We }).forEach((ue, $e) => {
        De({ event: $e === We - 1 ? he == null ? void 0 : he.event : !1 });
      });
    }
    const Ce = (le) => {
      e.navigation === "hover" && (l.value = le);
    };
    function Ve(le) {
      return e.navigation !== "hover" ? "" : e.vertical ? Fr(`--navigation-vertical-${le}-animation`) : Fr(`--navigation-${le}-animation`);
    }
    return {
      length: c,
      index: s,
      swipeEl: n,
      trackSize: r,
      trackTranslate: a,
      lockDuration: i,
      hovering: l,
      n: Fr,
      classes: H$,
      handleTouchstart: X,
      handleTouchmove: ee,
      handleTouchend: pe,
      next: Re,
      prev: se,
      to: de,
      resize: ke,
      toNumber: A,
      handleHovering: Ce,
      getNavigationAnimation: Ve
    };
  }
});
Pf.render = Y$;
var gs = Pf;
oe(gs);
const BE = gs;
var ho = gs;
function j$() {
  const { bindParent: e, index: n, parentProvider: t } = an(Cf);
  return e || Tn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: t,
    bindSwipe: e
  };
}
const { name: W$, n: q$ } = te("swipe-item");
function G$(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.n()),
      style: F({
        width: e.vertical ? void 0 : `${e.size}px`,
        height: e.vertical ? `${e.size}px` : void 0,
        transform: `translate${e.vertical ? "Y" : "X"}(${e.translate}px)`
      })
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Of = ne({
  name: W$,
  setup() {
    const e = S(0), { swipe: n, bindSwipe: t, index: o } = j$(), { size: r, vertical: a } = n;
    t({
      index: o,
      setTranslate: s
    });
    function s(l) {
      e.value = l;
    }
    return {
      n: q$,
      size: r,
      vertical: a,
      translate: e
    };
  }
});
Of.render = G$;
var bs = Of;
oe(bs);
const NE = bs;
var go = bs, X$ = Object.defineProperty, Nu = Object.getOwnPropertySymbols, K$ = Object.prototype.hasOwnProperty, Z$ = Object.prototype.propertyIsEnumerable, Vu = (e, n, t) => n in e ? X$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Au = (e, n) => {
  for (var t in n || (n = {}))
    K$.call(n, t) && Vu(e, t, n[t]);
  if (Nu)
    for (var t of Nu(n))
      Z$.call(n, t) && Vu(e, t, n[t]);
  return e;
};
const J$ = Au(Au({
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
  "onUpdate:show": z(),
  onLongPress: z()
}, en(kf, ["loop", "indicator", "onChange"])), en(To, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), { name: Q$, n: zu, classes: _$ } = te("image-preview"), Yr = 12, Lu = 200, x$ = 350, Ru = 200, ew = 500, nw = ["onTouchstart"], tw = ["src", "alt"];
function ow(e, n) {
  const t = ae("var-swipe-item"), o = ae("var-swipe"), r = ae("var-icon"), a = ae("var-popup");
  return h(), Se(a, {
    class: v(e.n("popup")),
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
    default: ve(() => [
      J(o, Ne({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.initialIndex,
        loop: e.loop,
        onChange: e.onChange
      }, e.$attrs), {
        default: ve(() => [
          (h(!0), w(
            Be,
            null,
            qe(e.images, (i, s) => (h(), Se(t, {
              class: v(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: ve(() => [
                N("div", {
                  class: v(e.n("zoom-container")),
                  style: F({
                    transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
                    transitionTimingFunction: e.transitionTimingFunction,
                    transitionDuration: e.transitionDuration
                  }),
                  onTouchstart: (l) => e.handleTouchstart(l, s),
                  onTouchmove: n[0] || (n[0] = (...l) => e.handleTouchmove && e.handleTouchmove(...l)),
                  onTouchend: n[1] || (n[1] = (...l) => e.handleTouchend && e.handleTouchend(...l)),
                  onTouchcancel: n[2] || (n[2] = (...l) => e.handleTouchcancel && e.handleTouchcancel(...l))
                }, [
                  N("img", {
                    class: v(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, tw)
                ], 46, nw)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: ve(({ index: i, length: s }) => [
          R(e.$slots, "indicator", {
            index: i,
            length: s
          }, () => [
            e.indicator && e.images.length > 1 ? (h(), w(
              "div",
              {
                key: 0,
                class: v(e.n("indicators"))
              },
              re(i + 1) + " / " + re(s),
              3
              /* TEXT, CLASS */
            )) : Q("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      R(e.$slots, "close-icon", {}, () => [
        e.closeable ? (h(), Se(r, {
          key: 0,
          class: v(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : Q("v-if", !0)
      ]),
      N(
        "div",
        {
          class: v(e.n("extra"))
        },
        [
          R(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
const Tf = ne({
  name: Q$,
  components: {
    VarSwipe: ho,
    VarSwipeItem: go,
    VarPopup: ct,
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: J$,
  setup(e) {
    const n = S(!1), t = S(1), o = S(0), r = S(0), a = S(), i = S(), s = S(!0), l = S(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: m, moveTouch: b, endTouch: p } = br(), g = V(() => {
      const { images: q, current: Y, initialIndex: X } = e;
      if (X != null)
        return A(X);
      const ee = q.findIndex((pe) => pe === Y);
      return Math.max(ee, 0);
    }), k = V(() => {
      const { imagePreventDefault: q, show: Y } = e;
      return Y && q;
    });
    let T = null, O = null, $ = !1;
    const C = {
      start: null,
      prev: null
    };
    dt(() => document, "contextmenu", x), fe(
      () => e.show,
      (q) => {
        n.value = q;
      },
      { immediate: !0 }
    );
    function I() {
      t.value = A(e.zoom), s.value = !1, C.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Ru);
    }
    function P() {
      t.value = 1, o.value = 0, r.value = 0, s.value = !0, C.prev = null, a.value = void 0, i.value = void 0;
    }
    function D(q) {
      return C.prev ? c.value <= Yr && performance.now() - f.value <= Lu && C.prev === q : !1;
    }
    function E(q) {
      return !q || !C.start || !C.prev ? !1 : c.value <= Yr && performance.now() - f.value < x$ && (q === C.start || q.parentNode === C.start);
    }
    function H() {
      p(), window.clearTimeout(O), $ = !1, C.start = null;
    }
    function L(q) {
      if (p(), window.clearTimeout(O), $) {
        $ = !1;
        return;
      }
      const Y = E(q.target);
      T = window.setTimeout(() => {
        Y && _(), C.start = null;
      }, Lu);
    }
    function U(q, Y) {
      window.clearTimeout(T), window.clearTimeout(O);
      const X = q.currentTarget;
      if (C.start = X, O = window.setTimeout(() => {
        $ = !0, y(e.onLongPress, Y);
      }, ew), D(X)) {
        t.value > 1 ? P() : I();
        return;
      }
      m(q), C.prev = X;
    }
    function ie(q) {
      const { offsetWidth: Y, offsetHeight: X } = q, { naturalWidth: ee, naturalHeight: pe } = q.querySelector(`.${zu("image")}`);
      return {
        width: Y,
        height: X,
        imageRadio: pe / ee,
        rootRadio: X / Y,
        zoom: A(e.zoom)
      };
    }
    function G(q) {
      const { zoom: Y, imageRadio: X, rootRadio: ee, width: pe, height: ke } = ie(q);
      if (!X)
        return 0;
      const Re = X > ee ? ke / X : pe;
      return Math.max(0, (Y * Re - pe) / 2) / Y;
    }
    function W(q) {
      const { zoom: Y, imageRadio: X, rootRadio: ee, width: pe, height: ke } = ie(q);
      if (!X)
        return 0;
      const Re = X > ee ? ke : pe * X;
      return Math.max(0, (Y * Re - ke) / 2) / Y;
    }
    function Z(q) {
      if (!C.prev)
        return;
      b(q);
      const Y = q.currentTarget;
      if (c.value > Yr && window.clearTimeout(O), t.value > 1) {
        const X = G(Y), ee = W(Y);
        o.value = ut(o.value + u.value, -X, X), r.value = ut(r.value + d.value, -ee, ee);
      }
      C.prev = Y;
    }
    function _() {
      if (t.value > 1) {
        P(), setTimeout(() => y(e["onUpdate:show"], !1), Ru);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    function j(q) {
      var Y;
      (Y = l.value) == null || Y.prev(q);
    }
    function B(q) {
      var Y;
      (Y = l.value) == null || Y.next(q);
    }
    function M(q, Y) {
      var X;
      (X = l.value) == null || X.to(q, Y);
    }
    function x(q) {
      e.imagePreventDefault && e.show && q.preventDefault();
    }
    return {
      swipeRef: l,
      isPreventDefault: k,
      initialIndex: g,
      popupShow: n,
      scale: t,
      translateX: o,
      translateY: r,
      canSwipe: s,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: zu,
      classes: _$,
      handleTouchstart: U,
      handleTouchmove: Z,
      handleTouchend: L,
      handleTouchcancel: H,
      close: _,
      prev: j,
      next: B,
      to: M
    };
  }
});
Tf.render = ow;
var No = Tf, rw = Object.defineProperty, aw = Object.defineProperties, iw = Object.getOwnPropertyDescriptors, Uu = Object.getOwnPropertySymbols, sw = Object.prototype.hasOwnProperty, lw = Object.prototype.propertyIsEnumerable, Hu = (e, n, t) => n in e ? rw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, jo = (e, n) => {
  for (var t in n || (n = {}))
    sw.call(n, t) && Hu(e, t, n[t]);
  if (Uu)
    for (var t of Uu(n))
      lw.call(n, t) && Hu(e, t, n[t]);
  return e;
}, Fu = (e, n) => aw(e, iw(n));
let ot, ao = {};
function uw(e = {}) {
  return Qe(e) ? Fu(jo({}, ao), { images: [e] }) : Me(e) ? Fu(jo({}, ao), { images: e }) : jo(jo({}, ao), e);
}
function Mt(e) {
  if (!bt())
    return;
  Mt.close();
  const n = uw(e), t = je(n);
  t.teleport = "body", ot = t;
  const { unmountInstance: o } = Zt(No, t, {
    onClose: () => y(t.onClose),
    onClosed: () => {
      y(t.onClosed), o(), ot === t && (ot = null);
    },
    onRouteChange: () => {
      o(), ot === t && (ot = null);
    },
    "onUpdate:show": (r) => {
      t.show = r;
    }
  });
  t.show = !0;
}
Mt.close = () => {
  if (ot != null) {
    const e = ot;
    ot = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
Mt.setDefaultOptions = (e) => {
  ao = e;
};
Mt.resetDefaultOptions = () => {
  ao = {};
};
Mt.Component = No;
oe(No);
oe(No, Mt);
const VE = No;
var bo = Mt;
const _o = {
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
  onScroll: z()
};
var Yu = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: dw, n: cw, classes: fw } = te("sticky");
function vw(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: F({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [
      N(
        "div",
        {
          class: v(e.n("wrapper")),
          ref: "wrapperEl",
          style: F({
            zIndex: e.toNumber(e.zIndex),
            position: e.enableFixedMode ? "fixed" : void 0,
            width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
            height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
            left: e.enableFixedMode ? e.fixedLeft : void 0,
            top: e.enableFixedMode ? e.fixedTop : void 0
          })
        },
        [
          R(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const Ef = ne({
  name: dw,
  props: _o,
  setup(e) {
    const n = S(null), t = S(null), o = S(!1), r = S("0px"), a = S("0px"), i = S("auto"), s = S("auto"), l = S("auto"), u = S("auto"), d = V(() => !e.disabled && e.cssMode), c = V(() => !e.disabled && !e.cssMode && o.value), f = V(() => He(e.offsetTop));
    let m;
    fe(() => e.disabled, g), rn(k), gr(T), Oo(g), dt(() => window, "scroll", p);
    function b() {
      const { cssMode: O, disabled: $ } = e;
      if ($)
        return;
      let C = 0;
      if (m !== window) {
        const { top: L } = _e(m);
        C = L;
      }
      const I = t.value, P = n.value, { top: D, left: E } = _e(P), H = D - C;
      return H <= f.value ? (O || (i.value = `${P.offsetWidth}px`, s.value = `${P.offsetHeight}px`, r.value = `${C + f.value}px`, a.value = `${E}px`, l.value = `${I.offsetWidth}px`, u.value = `${I.offsetHeight}px`, o.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (o.value = !1, {
        offsetTop: H,
        isFixed: !1
      });
    }
    function p() {
      if (!m)
        return;
      const O = b();
      O && y(e.onScroll, O.offsetTop, O.isFixed);
    }
    function g() {
      return Yu(this, null, function* () {
        o.value = !1, yield Xo(), b();
      });
    }
    function k() {
      return Yu(this, null, function* () {
        yield dn(), m = ft(n.value), m !== window && m.addEventListener("scroll", p), p();
      });
    }
    function T() {
      m !== window && m.removeEventListener("scroll", p);
    }
    return {
      stickyEl: n,
      wrapperEl: t,
      isFixed: o,
      offsetTop: f,
      fixedTop: r,
      fixedLeft: a,
      fixedWidth: i,
      fixedHeight: s,
      fixedWrapperWidth: l,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: c,
      n: cw,
      classes: fw,
      resize: g,
      toNumber: A
    };
  }
});
Ef.render = vw;
var ys = Ef;
oe(ys);
const AE = ys;
var yo = ys;
const If = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function mw() {
  const { bindChildren: e, length: n, childProviders: t } = sn(
    If
  );
  return {
    length: n,
    indexAnchors: t,
    bindIndexAnchors: e
  };
}
function pw() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    If
  );
  return t || Tn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: t
  };
}
const hw = {
  index: [Number, String]
}, { name: gw, n: bw, classes: yw } = te("index-anchor");
function $w(e, n) {
  return h(), Se(Xt(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: ve(() => [
      N(
        "div",
        Ne({
          class: e.n()
        }, e.$attrs),
        [
          R(e.$slots, "default", {}, () => [
            Te(
              re(e.name),
              1
              /* TEXT */
            )
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["offset-top", "z-index", "disabled", "css-mode"]);
}
const Mf = ne({
  name: gw,
  components: { VarSticky: yo },
  inheritAttrs: !1,
  props: hw,
  setup(e) {
    const n = S(0), t = S(!1), o = V(() => e.index), r = S(null), { index: a, indexBar: i, bindIndexBar: s } = pw(), { active: l, sticky: u, cssMode: d, stickyOffsetTop: c, zIndex: f } = i;
    s({
      index: a,
      name: o,
      ownTop: n,
      setOwnTop: b,
      setDisabled: p
    });
    function b() {
      r.value && (n.value = r.value.$el ? r.value.$el.offsetTop : r.value.offsetTop);
    }
    function p(g) {
      t.value = g;
    }
    return {
      n: bw,
      classes: yw,
      name: o,
      anchorEl: r,
      active: l,
      sticky: u,
      zIndex: f,
      disabled: t,
      cssMode: d,
      stickyOffsetTop: c,
      Transition: Ye
    };
  }
});
Mf.render = $w;
var $s = Mf;
oe($s);
const zE = $s;
var Va = $s;
const ww = {
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
  onClick: z(),
  onChange: z()
};
var Wo = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: Sw, n: Cw, classes: kw } = te("index-bar"), Pw = ["onClick"];
function Ow(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.n()),
      ref: "barEl"
    },
    [
      R(e.$slots, "default"),
      N(
        "ul",
        {
          class: v(e.n("anchor-list")),
          style: F({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (h(!0), w(
            Be,
            null,
            qe(e.anchorNameList, (t) => (h(), w("li", {
              key: t,
              class: v(e.classes(e.n("anchor-item"), [e.active === t, e.n("anchor-item--active")])),
              style: F({ color: e.active === t && e.highlightColor ? e.highlightColor : "" }),
              onClick: (o) => e.anchorClick({ anchorName: t, manualCall: !0 })
            }, re(t), 15, Pw))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    2
    /* CLASS */
  );
}
const Df = ne({
  name: Sw,
  props: ww,
  setup(e) {
    const n = S(""), t = S(null), o = S([]), r = S(), a = V(() => e.sticky), i = V(() => e.stickyCssMode || e.cssMode), s = V(() => He(e.stickyOffsetTop)), l = V(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = mw();
    let f = null, m = !1;
    const b = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: s,
      zIndex: l
    };
    fe(
      () => u.value,
      () => Wo(this, null, function* () {
        yield dn(), d.forEach(({ name: P, setOwnTop: D }) => {
          P.value && o.value.push(P.value), D();
        });
      })
    ), rn(() => Wo(this, null, function* () {
      yield O(), $();
    })), hr(C), qt(() => {
      m = !0, C();
    }), pt(() => {
      !m || r.value === void 0 || (T({
        anchorName: r.value,
        options: { event: !1 }
      }), m = !1);
    }), c(b);
    function p(P, D) {
      const E = io(P) ? P.name.value : P;
      E === r.value || E === void 0 || (r.value = E, (D == null ? void 0 : D.event) !== !1 && y(e.onChange, E));
    }
    function g() {
      if (gi(f))
        return 0;
      const { top: P } = _e(f), { scrollTop: D } = f, { top: E } = _e(t.value);
      return D - P + E;
    }
    function k() {
      const P = uo(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, E = g();
      d.forEach((H, L) => {
        const U = H.ownTop.value, ie = P - U + s.value - E, G = L === d.length - 1 ? D : d[L + 1].ownTop.value - H.ownTop.value;
        H.setDisabled(!0), ie >= 0 && ie < G && n.value === "" && (H.setDisabled(!1), p(H));
      });
    }
    function T(P) {
      return Wo(this, arguments, function* ({ anchorName: D, manualCall: E = !1, options: H }) {
        if (E && y(e.onClick, D), D === r.value && !m)
          return;
        const L = d.find(({ name: W }) => D === W.value);
        if (!L)
          return;
        const U = g(), ie = L.ownTop.value - s.value + U, G = wi(f);
        n.value = D, p(D, H), yield co(f, {
          left: G,
          top: ie,
          animation: Kd,
          duration: A(e.duration)
        }), yield dn(), n.value = "";
      });
    }
    function O() {
      return Wo(this, null, function* () {
        yield dn(), f = ft(t.value);
      });
    }
    function $() {
      f.addEventListener("scroll", k);
    }
    function C() {
      f.removeEventListener("scroll", k);
    }
    function I(P, D) {
      so(() => T({ anchorName: P, options: D }));
    }
    return {
      barEl: t,
      active: r,
      zIndex: l,
      anchorNameList: o,
      n: Cw,
      classes: kw,
      toNumber: A,
      scrollTo: I,
      anchorClick: T
    };
  }
});
Df.render = Ow;
var ws = Df;
oe(ws);
const LE = ws;
var Aa = ws;
const Ss = {
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
  onClick: z(),
  onClear: z()
}, { name: Tw, n: jr, classes: Ew } = te("field-decorator"), Iw = ["for"];
function Mw(e, n) {
  const t = ae("var-icon");
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      N(
        "div",
        {
          class: v(
            e.classes(
              e.n("controller"),
              [e.isFocus, e.n("--focus")],
              [e.errorMessage, e.n("--error")],
              [e.formDisabled || e.disabled, e.n("--disabled")]
            )
          ),
          style: F({
            color: e.color,
            cursor: e.cursor,
            overflow: e.isFloating ? "visible" : "hidden"
          })
        },
        [
          N(
            "div",
            {
              class: v(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              R(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: v(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          e.placeholder && e.hint ? (h(), w("label", {
            key: 0,
            class: v(
              e.classes(
                e.n("placeholder"),
                e.n("$--ellipsis"),
                [e.isFocus, e.n("--focus")],
                [e.formDisabled || e.disabled, e.n("--disabled")],
                [e.errorMessage, e.n("--error")],
                e.computePlaceholderState()
              )
            ),
            style: F({
              color: e.color
            }),
            for: e.id
          }, [
            N(
              "span",
              null,
              re(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, Iw)) : Q("v-if", !0),
          N(
            "div",
            {
              class: v(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? (h(), Se(t, {
                key: 0,
                class: v(e.n("clear-icon")),
                "var-field-decorator-cover": "",
                name: "close-circle",
                onClick: e.handleClear
              }, null, 8, ["class", "onClick"])) : Q("v-if", !0),
              R(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (h(), w(
        Be,
        { key: 0 },
        [
          e.variant === "outlined" ? (h(), w(
            "fieldset",
            {
              key: 0,
              class: v(
                e.classes(
                  e.n("line"),
                  [e.isFocus, e.n("--line-focus")],
                  [e.errorMessage, e.n("--line-error")],
                  [e.formDisabled || e.disabled, e.n("--line-disabled")]
                )
              ),
              style: F({ borderColor: e.color })
            },
            [
              N(
                "legend",
                {
                  class: v(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: F({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (h(), Se(Kn, {
                    key: 0,
                    to: "body"
                  }, [
                    N(
                      "span",
                      {
                        ref: "placeholderTextEl",
                        class: v(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      re(e.placeholder),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : Q("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : (h(), w(
            "div",
            {
              key: 1,
              class: v(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
              style: F({ background: e.errorMessage ? void 0 : e.blurColor })
            },
            [
              N(
                "div",
                {
                  class: v(
                    e.classes(
                      e.n("dot"),
                      [e.isFocus, e.n("--line-focus")],
                      [e.formDisabled || e.disabled, e.n("--line-disabled")],
                      [e.errorMessage, e.n("--line-error")]
                    )
                  ),
                  style: F({ background: e.errorMessage ? void 0 : e.focusColor })
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          ))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Bf = ne({
  name: Tw,
  components: { VarIcon: Ue },
  props: Ss,
  setup(e, { slots: n }) {
    const t = S(null), o = S(""), r = V(() => e.hint && (!Yn(e.value) || e.isFocus || n["prepend-icon"])), a = V(
      () => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
    );
    Oo(s), rn(s), ko(s);
    function i() {
      const { hint: d, value: c, composing: f } = e;
      if (!d && (!Yn(c) || f))
        return jr("--placeholder-hidden");
      if (r.value)
        return jr("--placeholder-hint");
    }
    function s() {
      const { size: d, hint: c, variant: f, placeholder: m } = e;
      if (!m || !c || f !== "outlined") {
        o.value = "";
        return;
      }
      const b = Tt(t.value), p = `var(--field-decorator-outlined-${d}-placeholder-space)`;
      o.value = `calc(${b.width} * 0.75 + ${p} * 2)`;
    }
    function l(d) {
      y(e.onClear, d);
    }
    function u(d) {
      y(e.onClick, d);
    }
    return {
      placeholderTextEl: t,
      color: a,
      legendWidth: o,
      isFloating: r,
      computePlaceholderState: i,
      n: jr,
      classes: Ew,
      isEmpty: Yn,
      handleClear: l,
      handleClick: u
    };
  }
});
Bf.render = Mw;
var Nf = Bf, Dw = Object.defineProperty, ju = Object.getOwnPropertySymbols, Bw = Object.prototype.hasOwnProperty, Nw = Object.prototype.propertyIsEnumerable, Wu = (e, n, t) => n in e ? Dw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Vw = (e, n) => {
  for (var t in n || (n = {}))
    Bw.call(n, t) && Wu(e, t, n[t]);
  if (ju)
    for (var t of ju(n))
      Nw.call(n, t) && Wu(e, t, n[t]);
  return e;
};
const Aw = Vw({
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
  onFocus: z(),
  onBlur: z(),
  onInput: z(),
  onChange: z(),
  onClear: z(),
  "onUpdate:modelValue": z()
}, en(Ss, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), { name: zw, n: Lw, classes: Rw } = te("input"), Uw = ["placeholder", "enterkeyhint"], Hw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Fw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Yw(e, n) {
  const t = ae("var-field-decorator"), o = ae("var-form-details");
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[13] || (n[13] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      J(
        t,
        st(Po({
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
        xo({
          "append-icon": ve(() => [
            R(e.$slots, "append-icon")
          ]),
          default: ve(() => [
            e.normalizedType === "password" ? (h(), w("input", {
              key: 0,
              tabindex: "-1",
              class: v(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: F({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, Uw)) : Q("v-if", !0),
            e.textarea ? (h(), w("textarea", {
              key: 1,
              class: v(
                e.classes(
                  e.n("input"),
                  e.n("--textarea"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
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
              style: F({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                resize: e.resize ? "vertical" : "none",
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[0] || (n[0] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[1] || (n[1] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[2] || (n[2] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[3] || (n[3] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[4] || (n[4] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[5] || (n[5] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, `
      `, 46, Hw)) : (h(), w("input", {
              key: 2,
              class: v(
                e.classes(
                  e.n("input"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
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
              style: F({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[6] || (n[6] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[7] || (n[7] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[8] || (n[8] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[9] || (n[9] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[10] || (n[10] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[11] || (n[11] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, null, 46, Fw))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ve(() => [
              R(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      J(o, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[12] || (n[12] = On(() => {
        }, ["stop"]))
      }, xo({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ve(() => [
            R(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Vf = ne({
  name: zw,
  components: {
    VarFormDetails: pn,
    VarFieldDecorator: Nf
  },
  props: Aw,
  setup(e) {
    const n = Pd(), t = S(null), o = S(!1), r = S(!1), { bindForm: a, form: i } = Mn(), {
      errorMessage: s,
      validateWithTrigger: l,
      validate: u,
      // expose
      resetValidation: d
    } = In(), c = V(() => e.disabled || e.readonly ? "" : "text"), f = V(() => e.type === "number" ? "text" : e.type), m = V(() => {
      const { maxlength: j, modelValue: B } = e;
      return j ? Yn(B) ? `0 / ${j}` : `${String(B).length}/${j}` : "";
    }), b = V(() => {
      const { hint: j, blurColor: B, focusColor: M } = e;
      if (!j)
        return s.value ? "var(--field-decorator-error-color)" : o.value ? M || "var(--field-decorator-focus-color)" : B || "var(--field-decorator-blur-color)";
    });
    y(a, {
      reset: G,
      validate: W,
      resetValidation: d
    }), rn(() => {
      e.autofocus && Z();
    });
    function g(j) {
      Fe(() => {
        const { validateTrigger: B, rules: M, modelValue: x } = e;
        l(B, j, M, x);
      });
    }
    function k(j) {
      o.value = !0, y(e.onFocus, j), g("onFocus");
    }
    function T(j) {
      o.value = !1, y(e.onBlur, j), g("onBlur");
    }
    function O(j) {
      const B = j.target;
      let { value: M } = B;
      return e.type === "number" && (M = H(M)), U(L(M));
    }
    function $() {
      r.value = !0;
    }
    function C(j) {
      r.value && (r.value = !1, j.target.dispatchEvent(new Event("input")));
    }
    function I(j) {
      if (r.value)
        return;
      const B = O(j);
      y(e["onUpdate:modelValue"], B), y(e.onInput, B, j), g("onInput");
    }
    function P(j) {
      const B = O(j);
      y(e.onChange, B, j), g("onChange");
    }
    function D() {
      const { disabled: j, readonly: B, clearable: M, onClear: x } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || j || B || !M || (y(e["onUpdate:modelValue"], ""), y(x, ""), g("onClear"));
    }
    function E(j) {
      const { disabled: B, onClick: M } = e;
      i != null && i.disabled.value || B || (y(M, j), g("onClick"));
    }
    function H(j) {
      const B = j.indexOf("-"), M = j.indexOf(".");
      return B > -1 && (j = B === 0 ? "-" + j.replace(/-/g, "") : j.replace(/-/g, "")), M > -1 && (j = j.slice(0, M + 1) + j.slice(M).replace(/\./g, "")), j.replace(/[^-0-9.]/g, "");
    }
    function L(j) {
      return e.modelModifiers.trim ? j.trim() : j;
    }
    function U(j) {
      return e.maxlength ? j.slice(0, A(e.maxlength)) : j;
    }
    function ie(j) {
      const { disabled: B } = e;
      i != null && i.disabled.value || B || j.target === t.value || (Z(), j.preventDefault());
    }
    function G() {
      y(e["onUpdate:modelValue"], ""), d();
    }
    function W() {
      return u(e.rules, e.modelValue);
    }
    function Z() {
      var j;
      (j = t.value) == null || j.focus();
    }
    function _() {
      t.value.blur();
    }
    return {
      el: t,
      id: n,
      isFocus: o,
      isComposing: r,
      errorMessage: s,
      placeholderColor: b,
      normalizedType: f,
      cursor: c,
      maxlengthText: m,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: Lw,
      classes: Rw,
      isEmpty: Yn,
      handleFocus: k,
      handleBlur: T,
      handleInput: I,
      handleChange: P,
      handleClear: D,
      handleClick: E,
      handleCompositionStart: $,
      handleCompositionEnd: C,
      handleMousedown: ie,
      validate: W,
      resetValidation: d,
      reset: G,
      focus: Z,
      blur: _
    };
  }
});
Vf.render = Yw;
var Cs = Vf;
oe(Cs);
const RE = Cs;
var pr = Cs;
const jw = {
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
  onClick: z()
}, { name: Ww, n: qw, classes: Gw } = te("link");
function Xw(e, n) {
  return h(), Se(Xt(e.tag), Ne(e.linkProps, {
    class: e.classes(
      e.n(),
      e.n("$--box"),
      e.n("$--inline-flex"),
      e.n(`--${e.type}`),
      [e.underline !== "none", e.n(`--underline-${e.underline}`)],
      [e.disabled, e.n("--disabled")]
    ),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick
  }), {
    default: ve(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const Af = ne({
  name: Ww,
  props: jw,
  setup(e) {
    const n = V(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), t = V(() => {
      const { disabled: r, href: a, target: i, to: s, replace: l, rel: u } = e;
      return r ? {} : a ? { href: a, target: i, rel: u } : s ? { to: s, target: i, replace: l } : {};
    });
    function o(r) {
      e.disabled || y(e.onClick, r);
    }
    return {
      tag: n,
      linkProps: t,
      n: qw,
      classes: Gw,
      handleClick: o,
      toSizeUnit: we
    };
  }
});
Af.render = Xw;
var ks = Af;
oe(ks);
const UE = ks;
var za = ks;
const Kw = {
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
  onLoad: z(),
  "onUpdate:loading": z(),
  "onUpdate:error": z()
}, zf = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Zw() {
  const { bindChildren: e, childProviders: n, length: t } = sn(
    zf
  );
  return {
    length: t,
    tabItemList: n,
    bindTabItem: e
  };
}
const Lf = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Jw() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    zf
  );
  return n || Tn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: t,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Qw() {
  const { childProviders: e, bindChildren: n, length: t } = sn(Lf);
  return {
    length: t,
    lists: e,
    bindLists: n
  };
}
function _w() {
  const { parentProvider: e, bindParent: n, index: t } = an(Lf);
  return {
    index: t,
    tabItem: e,
    bindTabItem: n
  };
}
var xw = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: eS, n: nS, classes: tS } = te("list");
function oS(e, n) {
  const t = ae("var-loading"), o = Le("ripple");
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      R(e.$slots, "default"),
      e.loading ? R(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          N(
            "div",
            {
              class: v(e.n("loading"))
            },
            [
              N(
                "div",
                {
                  class: v(e.n("loading-text"))
                },
                re((r = e.loadingText) != null ? r : e.pack.listLoadingText),
                3
                /* TEXT, CLASS */
              ),
              J(t, {
                size: "mini",
                radius: 10
              })
            ],
            2
            /* CLASS */
          )
        ];
      }) : Q("v-if", !0),
      e.finished ? R(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          N(
            "div",
            {
              class: v(e.n("finished"))
            },
            re((r = e.finishedText) != null ? r : e.pack.listFinishedText),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : Q("v-if", !0),
      e.error ? R(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Oe((h(), w(
            "div",
            {
              class: v(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              Te(
                re((r = e.errorText) != null ? r : e.pack.listErrorText),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )), [
            [o]
          ])
        ];
      }) : Q("v-if", !0),
      N(
        "div",
        {
          class: v(e.n("detector")),
          ref: "detectorEl"
        },
        null,
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Rf = ne({
  name: eS,
  directives: { Ripple: Ke },
  components: { VarLoading: Ut },
  props: Kw,
  setup(e) {
    const n = S(null), t = S(null), { tabItem: o, bindTabItem: r } = _w();
    let a;
    y(r, {}), o && fe(() => o.current.value, u), fe(() => [e.loading, e.error, e.finished], u), rn(() => {
      a = ft(n.value), a.addEventListener("scroll", u), e.immediateCheck && u();
    }), gr(l);
    function i() {
      y(e["onUpdate:error"], !1), y(e["onUpdate:loading"], !0), y(e.onLoad);
    }
    function s() {
      const { bottom: d } = _e(a), { bottom: c } = _e(t.value);
      return Math.floor(c) - He(e.offset) <= d;
    }
    function l() {
      a.removeEventListener("scroll", u);
    }
    function u() {
      return xw(this, null, function* () {
        yield Fe(), !(e.loading || e.finished || e.error || (o == null ? void 0 : o.current.value) === !1 || !s()) && i();
      });
    }
    return {
      pack: xe,
      listEl: n,
      detectorEl: t,
      isNumber: vn,
      load: i,
      check: u,
      n: nS,
      classes: tS
    };
  }
});
Rf.render = oS;
var Ps = Rf;
oe(Ps);
const HE = Ps;
var La = Ps;
const rS = {
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
  name: aS,
  classes: iS,
  n: qu
} = te("loading-bar");
var sS = ne({
  name: aS,
  props: rS,
  setup(e) {
    return () => J("div", {
      class: iS(qu(), [e.error, qu("--error")]),
      style: {
        zIndex: wn.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: we(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: we(e.top)
      }
    }, null);
  }
});
let Uf, Hf, Dr, Ff, Gu, Yf = {};
const lS = {
  value: 0,
  opacity: 0,
  error: !1
}, nn = je(lS), uS = (e) => {
  Object.assign(nn, e);
}, dS = (e) => {
  Object.assign(nn, e), Yf = e;
}, cS = () => {
  Object.keys(Yf).forEach((e) => {
    nn[e] !== void 0 && (nn[e] = void 0);
  });
}, jf = () => {
  Gu || (Gu = !0, Zt(sS, nn));
}, Os = () => {
  Uf = window.setTimeout(() => {
    if (nn.value >= 95)
      return;
    let e = Math.random();
    nn.value < 70 && (e = Math.round(5 * Math.random())), nn.value += e, Os();
  }, 200);
}, Ts = () => {
  window.clearTimeout(Hf), window.clearTimeout(Uf), window.clearTimeout(Dr), window.clearTimeout(Ff);
}, fS = () => {
  Ts(), nn.error = !1, nn.value = 0, jf(), Dr = window.setTimeout(() => {
    nn.opacity = 1;
  }, 200), Os();
}, Wf = () => {
  Ts(), nn.value = 100, Dr = window.setTimeout(() => {
    nn.opacity = 0, Hf = window.setTimeout(() => {
      nn.error = !1;
    }, 250);
  }, 300);
}, vS = () => {
  Ts(), nn.error = !0, nn.value === 100 && (nn.value = 0), jf(), Dr = window.setTimeout(() => {
    nn.opacity = 1;
  }, 200), Os(), Ff = window.setTimeout(Wf, 300);
}, qf = {
  start: fS,
  finish: Wf,
  error: vS,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: uS,
  setDefaultOptions: dS,
  resetDefaultOptions: cS
}, FE = qf;
var Ra = qf;
const mS = {
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
  onOpen: z(),
  onOpened: z(),
  onClose: z(),
  onClosed: z(),
  onClickOutside: z(),
  "onUpdate:show": z()
}, { name: pS, n: hS, classes: gS } = te("menu");
function bS(e, n) {
  return h(), w(
    "div",
    {
      ref: "host",
      class: v(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...t) => e.handleHostClick && e.handleHostClick(...t)),
      onMouseenter: n[4] || (n[4] = (...t) => e.handleHostMouseenter && e.handleHostMouseenter(...t)),
      onMouseleave: n[5] || (n[5] = (...t) => e.handleHostMouseleave && e.handleHostMouseleave(...t))
    },
    [
      R(e.$slots, "default"),
      (h(), Se(Kn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        J(Ye, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: ve(() => [
            Oe(N(
              "div",
              {
                ref: "popover",
                style: F({
                  zIndex: e.zIndex,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: v(
                  e.classes(
                    e.n("menu"),
                    e.n("$--box"),
                    e.popoverClass,
                    [e.defaultStyle, e.n("--menu-background-color")],
                    [e.defaultStyle, e.formatElevation(e.elevation, 3)]
                  )
                ),
                onClick: n[0] || (n[0] = On(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...t) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...t)),
                onMouseleave: n[2] || (n[2] = (...t) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...t))
              },
              [
                R(e.$slots, "menu")
              ],
              38
              /* CLASS, STYLE, HYDRATE_EVENTS */
            ), [
              [Rn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Gf = ne({
  name: pS,
  props: mS,
  setup(e) {
    const { disabled: n } = Jt(), {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: s,
      handleHostMouseenter: l,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: b,
      // expose
      close: p,
      // expose
      resize: g
    } = bf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: gn,
      toSizeUnit: we,
      n: hS,
      classes: gS,
      handleHostClick: s,
      handleHostMouseenter: l,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handlePopoverClose: f,
      handleClosed: m,
      resize: g,
      open: b,
      close: p
    };
  }
});
Gf.render = bS;
var Es = Gf;
oe(Es);
const YE = Es;
var $o = Es;
const Xf = Symbol("SELECT_BIND_OPTION_KEY");
function yS() {
  const { length: e, childProviders: n, bindChildren: t } = sn(Xf);
  return {
    length: e,
    options: n,
    bindOptions: t
  };
}
function $S() {
  const { index: e, parentProvider: n, bindParent: t } = an(Xf);
  return t || Tn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: t
  };
}
const wS = {
  label: {},
  value: {}
}, { name: SS, n: CS, classes: kS } = te("option");
function PS(e, n) {
  const t = ae("var-checkbox"), o = ae("var-hover-overlay"), r = Le("ripple"), a = Le("hover");
  return Oe((h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: F({
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = (...i) => e.handleClick && e.handleClick(...i))
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
          style: F({
            background: e.optionSelected ? e.focusColor : void 0
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      e.multiple ? (h(), Se(t, {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
        onClick: n[1] || (n[1] = On(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      }, null, 8, ["checked-color", "modelValue", "onChange"])) : Q("v-if", !0),
      N(
        "div",
        {
          class: v(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        [
          R(e.$slots, "default", {}, () => [
            Te(
              re(e.label),
              1
              /* TEXT */
            )
          ])
        ],
        2
        /* CLASS */
      ),
      J(o, { hovering: e.hovering }, null, 8, ["hovering"])
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Kf = ne({
  name: SS,
  directives: { Ripple: Ke, Hover: En },
  components: {
    VarCheckbox: ir,
    VarHoverOverlay: zn
  },
  props: wS,
  setup(e) {
    const n = S(!1), t = V(() => n.value), o = V(() => e.label), r = V(() => e.value), { select: a, bindSelect: i } = $S(), { multiple: s, focusColor: l, onSelect: u, computeLabel: d } = a, { hovering: c, handleHovering: f } = Gn(), m = {
      label: o,
      value: r,
      selected: t,
      sync: g
    };
    fe([() => e.label, () => e.value], d), i(m);
    function b() {
      s.value && (n.value = !n.value), u(m);
    }
    function p() {
      return u(m);
    }
    function g(k) {
      n.value = k;
    }
    return {
      n: CS,
      classes: kS,
      optionSelected: n,
      multiple: s,
      focusColor: l,
      hovering: c,
      handleHovering: f,
      handleClick: b,
      handleSelect: p
    };
  }
});
Kf.render = PS;
var Is = Kf;
oe(Is);
const jE = Is;
var Ua = Is;
const OS = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  onClick: z(),
  "onUpdate:show": z()
}, {
  name: TS,
  n: Xu
} = te("overlay");
var Ms = ne({
  name: TS,
  inheritAttrs: !1,
  props: OS,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const {
      zIndex: o
    } = Eo(() => e.show, 1), {
      disabled: r
    } = Jt();
    yr(() => e.show, () => e.lockScroll);
    function a() {
      y(e.onClick), y(e["onUpdate:show"], !1);
    }
    function i() {
      return J("div", Ne({
        class: Xu(),
        style: {
          zIndex: o.value - 1
        }
      }, t, {
        onClick: a
      }), [y(n.default)]);
    }
    function s() {
      return J(Ye, {
        name: Xu("--fade")
      }, {
        default: () => [e.show && i()]
      });
    }
    return () => {
      const {
        teleport: l
      } = e;
      return l ? J(Kn, {
        to: l,
        disabled: r.value
      }, {
        default: () => [s()]
      }) : s();
    };
  }
});
oe(Ms);
const WE = Ms;
var Ha = Ms;
const ES = {
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
  onChange: z(),
  "onUpdate:current": z(),
  "onUpdate:size": z()
}, { name: IS, n: MS, classes: DS } = te("pagination"), BS = ["item-mode", "onClick"];
function NS(e, n) {
  const t = ae("var-icon"), o = ae("var-input"), r = ae("var-cell"), a = ae("var-menu"), i = Le("ripple");
  return h(), w(
    "ul",
    {
      class: v(e.n())
    },
    [
      Oe((h(), w(
        "li",
        {
          class: v(
            e.classes(
              e.n("item"),
              e.n("prev"),
              [e.current <= 1 || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[0] || (n[0] = (s) => e.clickItem("prev"))
        },
        [
          R(e.$slots, "prev", {}, () => [
            J(t, { name: "chevron-left" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current <= 1 || e.disabled }]
      ]),
      e.simple ? (h(), w(
        "li",
        {
          key: 0,
          class: v(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
        },
        [
          J(o, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (s) => e.simpleCurrentValue = s),
            onBlur: n[2] || (n[2] = (s) => e.setPage("simple", e.simpleCurrentValue, s)),
            onKeydown: n[3] || (n[3] = rl((s) => e.setPage("simple", e.simpleCurrentValue, s), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          N("span", null, [
            Te(
              " / " + re(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            N(
              "div",
              {
                class: v(e.n("simple-line"))
              },
              null,
              2
              /* CLASS */
            )
          ])
        ],
        2
        /* CLASS */
      )) : (h(!0), w(
        Be,
        { key: 1 },
        qe(e.pageList, (s, l) => Oe((h(), w("li", {
          key: l,
          "item-mode": e.getMode(s, l),
          class: v(
            e.classes(
              e.n("item"),
              e.formatElevation(e.elevation, 2),
              [s === e.current && !e.disabled, e.n("item--active")],
              [e.isHideEllipsis(s, l), e.n("item--hide")],
              [e.disabled, e.n("item--disabled")],
              [s === e.current && e.disabled, e.n("item--disabled--active")]
            )
          ),
          onClick: (u) => e.clickItem(s, l)
        }, [
          Te(
            re(s),
            1
            /* TEXT */
          )
        ], 10, BS)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Oe((h(), w(
        "li",
        {
          class: v(
            e.classes(
              e.n("item"),
              e.n("next"),
              [e.current >= e.pageCount || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[4] || (n[4] = (s) => e.clickItem("next"))
        },
        [
          R(e.$slots, "next", {}, () => [
            J(t, { name: "chevron-right" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current >= e.pageCount || e.disabled }]
      ]),
      e.showSizeChanger ? (h(), w(
        "li",
        {
          key: 2,
          class: v(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
        },
        [
          J(a, {
            placement: "cover-top",
            disabled: e.disabled,
            show: e.menuVisible,
            "onUpdate:show": n[6] || (n[6] = (s) => e.menuVisible = s)
          }, {
            menu: ve(() => [
              (h(!0), w(
                Be,
                null,
                qe(e.sizeOption, (s, l) => Oe((h(), Se(r, {
                  class: v(e.classes(e.n("list"), [e.size === s, e.n("list--active")])),
                  key: l,
                  onClick: (u) => e.clickSize(s)
                }, {
                  default: ve(() => [
                    Te(
                      re(s) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["class", "onClick"])), [
                  [i]
                ])),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            default: ve(() => [
              N(
                "div",
                {
                  class: v(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
                  onClick: n[5] || (n[5] = On((...s) => e.showMenu && e.showMenu(...s), ["stop"]))
                },
                [
                  N(
                    "span",
                    null,
                    re(e.size) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
                    1
                    /* TEXT */
                  ),
                  J(t, {
                    class: v(e.n("size--open-icon")),
                    "var-pagination-cover": "",
                    name: "menu-down"
                  }, null, 8, ["class"])
                ],
                2
                /* CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "show"])
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.showQuickJumper && !e.simple ? (h(), w(
        "li",
        {
          key: 3,
          class: v(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Te(
            re(e.pack.paginationJump) + " ",
            1
            /* TEXT */
          ),
          J(o, {
            modelValue: e.quickJumperValue,
            "onUpdate:modelValue": n[7] || (n[7] = (s) => e.quickJumperValue = s),
            disabled: e.disabled,
            "var-pagination-cover": "",
            onBlur: n[8] || (n[8] = (s) => e.setPage("quick", e.quickJumperValue, s)),
            onKeydown: n[9] || (n[9] = rl((s) => e.setPage("quick", e.quickJumperValue, s), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.totalText ? (h(), w(
        "li",
        {
          key: 4,
          class: v(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        re(e.totalText),
        3
        /* TEXT, CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Zf = ne({
  name: IS,
  components: {
    VarMenu: $o,
    VarIcon: Ue,
    VarCell: ar,
    VarInput: pr
  },
  directives: { Ripple: Ke },
  props: ES,
  setup(e) {
    const n = S(!1), t = S(""), o = S("1"), r = S(!1), a = S(!1), i = S(A(e.current) || 1), s = S(A(e.size) || 10), l = S([]), u = V(() => Math.ceil(e.maxPagerCount / 2)), d = V(() => Math.ceil(A(e.total) / A(s.value))), c = V(() => {
      const $ = s.value * (i.value - 1) + 1, C = Math.min(s.value * i.value, A(e.total));
      return [$, C];
    }), f = V(() => e.showTotal ? e.showTotal(A(e.total), c.value) : "");
    fe([() => e.current, () => e.size], ([$, C]) => {
      i.value = A($) || 1, s.value = A(C || 10);
    }), fe(
      [i, s, d],
      ([$, C, I], [P, D]) => {
        let E = [];
        const { maxPagerCount: H, total: L, onChange: U } = e, ie = Math.ceil(A(L) / A(D)), G = I - (H - u.value) - 1;
        if (o.value = `${$}`, I - 2 > H) {
          if (P === void 0 || I !== ie)
            for (let W = 2; W < H + 2; W++)
              E.push(W);
          if ($ <= H && $ < G) {
            E = [];
            for (let W = 1; W < H + 1; W++)
              E.push(W + 1);
            r.value = !0, a.value = !1;
          }
          if ($ > H && $ < G) {
            E = [];
            for (let W = 1; W < H + 1; W++)
              E.push($ + W - u.value);
            r.value = $ === 2 && H === 1, a.value = !1;
          }
          if ($ >= G) {
            E = [];
            for (let W = 1; W < H + 1; W++)
              E.push(I - (H - W) - 1);
            r.value = !1, a.value = !0;
          }
          E = [1, "...", ...E, "...", I];
        } else
          for (let W = 1; W <= I; W++)
            E.push(W);
        l.value = E, P != null && I > 0 && y(U, $, C), y(e["onUpdate:current"], $), y(e["onUpdate:size"], C);
      },
      {
        immediate: !0
      }
    );
    function m($, C) {
      return vn($) ? !1 : C === 1 ? r.value : a.value;
    }
    function b($, C) {
      return vn($) ? "basic" : C === 1 ? "head" : "tail";
    }
    function p($, C) {
      if (!($ === i.value || e.disabled)) {
        if ($ === "...") {
          i.value = C === 1 ? Math.max(i.value - e.maxPagerCount, 1) : Math.min(i.value + e.maxPagerCount, d.value);
          return;
        }
        if ($ === "prev") {
          i.value = T(i.value - 1);
          return;
        }
        if ($ === "next") {
          i.value = T(i.value + 1);
          return;
        }
        vn($) && (i.value = $);
      }
    }
    function g() {
      e.disabled || (n.value = !0);
    }
    function k($) {
      s.value = $, n.value = !1;
      const C = T(i.value);
      o.value = String(C), i.value = C;
    }
    function T($) {
      return $ > d.value ? d.value : $ < 1 ? 1 : $;
    }
    function O($, C, I) {
      I.target.blur();
      const P = T(A(C));
      o.value = String(P), i.value = P, $ === "quick" && (t.value = "");
    }
    return {
      pack: xe,
      current: i,
      menuVisible: n,
      size: s,
      pageCount: d,
      pageList: l,
      quickJumperValue: t,
      simpleCurrentValue: o,
      totalText: f,
      n: MS,
      classes: DS,
      getMode: b,
      isHideEllipsis: m,
      clickItem: p,
      showMenu: g,
      clickSize: k,
      setPage: O,
      toNumber: A,
      formatElevation: gn
    };
  }
});
Zf.render = NS;
var Ds = Zf;
oe(Ds);
const qE = Ds;
var Fa = Ds;
const VS = {
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
  onClick: z()
}, { name: AS, n: zS, classes: LS } = te("paper");
function RS(e, n) {
  const t = Le("ripple");
  return Oe((h(), w(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          e.formatElevation(e.elevation, 2),
          [e.onClick, e.n("--cursor")],
          [e.round, e.n("--round")],
          [e.inline, e.n("$--inline-flex")]
        )
      ),
      style: F({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const Jf = ne({
  name: AS,
  directives: { Ripple: Ke },
  props: VS,
  setup(e) {
    function n(t) {
      y(e.onClick, t);
    }
    return {
      n: zS,
      classes: LS,
      formatElevation: gn,
      toSizeUnit: we,
      handleClick: n
    };
  }
});
Jf.render = RS;
var Bs = Jf;
oe(Bs);
const GE = Bs;
var Ya = Bs, US = Object.defineProperty, Ku = Object.getOwnPropertySymbols, HS = Object.prototype.hasOwnProperty, FS = Object.prototype.propertyIsEnumerable, Zu = (e, n, t) => n in e ? US(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, YS = (e, n) => {
  for (var t in n || (n = {}))
    HS.call(n, t) && Zu(e, t, n[t]);
  if (Ku)
    for (var t of Ku(n))
      FS.call(n, t) && Zu(e, t, n[t]);
  return e;
};
const jS = YS({
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
  onChange: z(),
  onConfirm: z(),
  onCancel: z()
}, en(To, [
  "show",
  "onUpdate:show",
  "closeOnClickOverlay",
  "teleport",
  "safeArea",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange"
])), { name: WS, n: qS, classes: GS } = te("picker"), Ju = 300, XS = 15, Qu = 200, KS = 1e3;
let _u = 0;
const ZS = ["onTouchstartPassive", "onTouchmove", "onTouchend"], JS = ["onTransitionend"], QS = ["onClick"];
function _S(e, n) {
  const t = ae("var-button");
  return h(), Se(
    Xt(e.dynamic ? e.n("$-popup") : e.Transition),
    Ne(
      e.dynamic ? {
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
      } : null,
      { "var-picker-cover": "" }
    ),
    {
      default: ve(() => [
        N(
          "div",
          Ne({
            class: e.n()
          }, e.$attrs),
          [
            e.toolbar ? (h(), w(
              "div",
              {
                key: 0,
                class: v(e.n("toolbar"))
              },
              [
                R(e.$slots, "cancel", {}, () => [
                  J(t, {
                    class: v(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: ve(() => {
                      var o;
                      return [
                        Te(
                          re((o = e.cancelButtonText) != null ? o : e.pack.pickerCancelButtonText),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ]),
                R(e.$slots, "title", {}, () => {
                  var o;
                  return [
                    N(
                      "div",
                      {
                        class: v(e.n("title"))
                      },
                      re((o = e.title) != null ? o : e.pack.pickerTitle),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                R(e.$slots, "confirm", {}, () => [
                  J(t, {
                    class: v(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: ve(() => {
                      var o;
                      return [
                        Te(
                          re((o = e.confirmButtonText) != null ? o : e.pack.pickerConfirmButtonText),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ])
              ],
              2
              /* CLASS */
            )) : Q("v-if", !0),
            N(
              "div",
              {
                class: v(e.n("columns")),
                style: F({ height: `${e.columnHeight}px` })
              },
              [
                (h(!0), w(
                  Be,
                  null,
                  qe(e.scrollColumns, (o) => (h(), w("div", {
                    class: v(e.n("column")),
                    key: o.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, o),
                    onTouchmove: On((r) => e.handleTouchmove(r, o), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(o)
                  }, [
                    N("div", {
                      class: v(e.n("scroller")),
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, o),
                      style: F({
                        transform: `translateY(${o.translate}px)`,
                        transitionDuration: `${o.duration}ms`,
                        transitionProperty: o.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(o)
                    }, [
                      (h(!0), w(
                        Be,
                        null,
                        qe(o.column.texts, (r, a) => (h(), w("div", {
                          class: v(e.n("option")),
                          style: F({ height: `${e.optionHeight}px` }),
                          key: r,
                          onClick: (i) => e.handleClick(o, a)
                        }, [
                          N(
                            "div",
                            {
                              class: v(e.n("text"))
                            },
                            re(e.textFormatter(r, o.columnIndex)),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, QS))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, JS)
                  ], 42, ZS))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                N(
                  "div",
                  {
                    class: v(e.n("picked")),
                    style: F({
                      top: `${e.center}px`,
                      height: `${e.optionHeight}px`
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                N(
                  "div",
                  {
                    class: v(e.n("mask")),
                    style: F({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                )
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          16
          /* FULL_PROPS */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const Qf = ne({
  name: WS,
  components: {
    VarButton: mn,
    VarPopup: ct
  },
  inheritAttrs: !1,
  props: jS,
  setup(e) {
    const n = S([]), t = V(() => He(e.optionHeight)), o = V(() => He(e.optionCount)), r = V(() => o.value * t.value / 2 - t.value / 2), a = V(() => o.value * t.value), { prevY: i, moveY: s, dragging: l, startTouch: u, moveTouch: d, endTouch: c } = br();
    let f = [];
    fe(
      () => e.columns,
      (B) => {
        n.value = e.cascade ? L(al(B)) : H(al(B));
        const { indexes: M } = T();
        f = [...M];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function m(B, M) {
      M.scrollEl = B;
    }
    function b(B) {
      y(e["onUpdate:show"], B);
    }
    function p(B) {
      const M = r.value - B.column.texts.length * t.value, x = t.value + r.value;
      B.translate = ut(B.translate, M, x);
    }
    function g(B, M) {
      const x = Math.round((r.value - M) / t.value);
      return um(x, B.column.texts);
    }
    function k(B) {
      return B.translate = r.value - B.index * t.value, B.translate;
    }
    function T() {
      const B = n.value.map((x) => x.column.texts[x.index]), M = n.value.map((x) => x.index);
      return {
        texts: B,
        indexes: M
      };
    }
    function O(B, M = 0) {
      k(B), B.duration = M;
    }
    function $(B, M, x) {
      B.translate += Math.abs(M / x) / 3e-3 * (M < 0 ? -1 : 1);
    }
    function C(B, M) {
      l.value || (B.index = M, B.scrolling = !0, O(B, Qu));
    }
    function I(B, M) {
      M.touching = !0, M.translate = Ar(M.scrollEl), u(B);
    }
    function P(B, M) {
      if (!M.touching)
        return;
      d(B), M.scrolling = !1, M.duration = 0, M.prevY = i.value, M.translate += s.value, p(M);
      const x = performance.now();
      x - M.momentumTime > Ju && (M.momentumTime = x, M.momentumPrevY = M.translate);
    }
    function D(B) {
      c(), B.touching = !1, B.prevY = 0;
      const M = B.translate - B.momentumPrevY, x = performance.now() - B.momentumTime, q = Math.abs(M) >= XS && x <= Ju;
      q && $(B, M, x), B.index = g(B, B.translate);
      const Y = B.translate, X = k(B);
      B.scrolling = X !== Y, O(B, q ? KS : Qu), B.scrolling || W(B);
    }
    function E(B) {
      B.scrolling = !1, W(B);
    }
    function H(B) {
      return B.map((M, x) => {
        var q;
        const Y = Me(M) ? { texts: M } : M, X = {
          id: _u++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: r.value,
          index: (q = Y.initialIndex) != null ? q : 0,
          columnIndex: x,
          duration: 0,
          momentumTime: 0,
          column: Y,
          scrollEl: null,
          scrolling: !1
        };
        return O(X), X;
      });
    }
    function L(B) {
      const M = [];
      return U(M, B, 0, !0), M;
    }
    function U(B, M, x, q = !1) {
      var Y;
      if (Me(M) && M.length) {
        const X = q && (Y = e.cascadeInitialIndexes[B.length]) != null ? Y : 0, ee = {
          id: _u++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: r.value,
          index: X,
          columnIndex: x,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: M.map((pe) => pe[e.textKey])
          },
          columns: M,
          scrollEl: null,
          scrolling: !1
        };
        B.push(ee), O(ee), U(
          B,
          ee.columns[ee.index].children,
          x + 1,
          q
        );
      }
    }
    function ie(B) {
      n.value.splice(n.value.indexOf(B) + 1), U(
        n.value,
        B.columns[B.index].children,
        B.columnIndex + 1
      );
    }
    function G() {
      const { indexes: B } = T();
      return B.every((M, x) => M === f[x]);
    }
    function W(B) {
      const { cascade: M, onChange: x } = e;
      if (G() || (M && ie(B), n.value.some((ee) => ee.scrolling)))
        return;
      const { texts: Y, indexes: X } = T();
      f = [...X], y(x, Y, X);
    }
    function Z() {
      if (e.cascade) {
        const B = n.value.find((M) => M.scrolling);
        B && (B.index = g(B, Ar(B.scrollEl)), B.scrolling = !1, O(B), ie(B));
      } else
        n.value.forEach((B) => {
          B.index = g(B, Ar(B.scrollEl)), O(B);
        });
    }
    function _() {
      Z();
      const { texts: B, indexes: M } = T();
      f = [...M], y(e.onConfirm, B, M);
    }
    function j() {
      Z();
      const { texts: B, indexes: M } = T();
      f = [...M], y(e.onCancel, B, M);
    }
    return {
      pack: xe,
      optionHeight: t,
      optionCount: o,
      scrollColumns: n,
      columnHeight: a,
      center: r,
      Transition: Ye,
      n: qS,
      classes: GS,
      setScrollEl: m,
      handlePopupUpdateShow: b,
      handleTouchstart: I,
      handleTouchmove: P,
      handleTouchend: D,
      handleTransitionend: E,
      confirm: _,
      cancel: j,
      handleClick: C
    };
  }
});
Qf.render = _S;
var Vo = Qf;
let cn;
function Ao(e) {
  return new Promise((n) => {
    Ao.close();
    const t = Me(e) ? { columns: e } : e, o = je(t);
    o.dynamic = !0, o.teleport = "body", cn = o;
    const { unmountInstance: r } = Zt(Vo, o, {
      onConfirm: (a, i) => {
        y(o.onConfirm, a, i), n({
          state: "confirm",
          texts: a,
          indexes: i
        }), o.show = !1, cn === o && (cn = null);
      },
      onCancel: (a, i) => {
        y(o.onCancel, a, i), n({
          state: "cancel",
          texts: a,
          indexes: i
        }), o.show = !1, cn === o && (cn = null);
      },
      onClose: () => {
        y(o.onClose), n({
          state: "close"
        }), cn === o && (cn = null);
      },
      onClosed: () => {
        y(o.onClosed), r(), cn === o && (cn = null);
      },
      onRouteChange: () => {
        r(), cn === o && (cn = null);
      },
      "onUpdate:show": (a) => {
        o.show = a;
      }
    });
    o.show = !0;
  });
}
Ao.close = function() {
  if (cn != null) {
    const e = cn;
    cn = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
Ao.Component = Vo;
oe(Vo);
oe(Vo, Ao);
const XE = Vo;
var ja = Ao;
const xS = {
  mode: {
    type: String,
    default: "linear"
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: [String, Object],
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
}, Qn = 100, Fn = 20, xu = 2 * Math.PI * Fn, { name: eC, n: nC, classes: tC } = te("progress"), oC = ["viewBox"], rC = { key: 0 }, aC = ["id"], iC = ["offset", "stop-color"], sC = ["d", "stroke-width", "stroke-dasharray"], lC = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function uC(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      e.mode === "linear" ? (h(), w(
        "div",
        {
          key: 0,
          class: v(e.n("linear"))
        },
        [
          N(
            "div",
            {
              class: v(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
              style: F({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
            },
            [
              e.indeterminate ? (h(), w(
                "div",
                {
                  key: 0,
                  class: v(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
                },
                [
                  N(
                    "div",
                    {
                      class: v(e.classes(e.n(`linear--${e.type}`))),
                      style: F({ background: e.progressColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  ),
                  N(
                    "div",
                    {
                      class: v(e.classes(e.n(`linear--${e.type}`))),
                      style: F({ background: e.progressColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )) : (h(), w(
                "div",
                {
                  key: 1,
                  class: v(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`), [e.ripple, e.n("linear-ripple")])),
                  style: F({ background: e.progressColor, width: e.linearProps.width })
                },
                null,
                6
                /* CLASS, STYLE */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          e.label ? (h(), w(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
            },
            [
              R(e.$slots, "default", {}, () => [
                Te(
                  re(e.linearProps.roundValue),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.mode === "circle" ? (h(), w(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
          style: F({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
        },
        [
          (h(), w("svg", {
            class: v(e.n("circle-svg")),
            viewBox: e.circleProps.viewBox
          }, [
            e.isPlainObject(e.color) ? (h(), w("defs", rC, [
              N("linearGradient", {
                id: e.id,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "0%"
              }, [
                (h(!0), w(
                  Be,
                  null,
                  qe(e.linearGradientProgress, (t, o) => (h(), w("stop", {
                    key: o,
                    offset: t,
                    "stop-color": e.color[t]
                  }, null, 8, iC))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, aC)
            ])) : Q("v-if", !0),
            e.track ? (h(), w("path", {
              key: 1,
              class: v(e.n("circle-background")),
              d: e.circleProps.path,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              style: F({
                stroke: e.trackColor
              })
            }, null, 14, sC)) : Q("v-if", !0),
            N("path", {
              class: v(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
              d: e.circleProps.path,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              "stroke-dashoffset": e.circleProps.strokeOffset,
              style: F({
                stroke: e.progressColor,
                transform: `rotateZ(${e.rotate}deg)`,
                transformOrigin: "50% 50%"
              })
            }, null, 14, lC)
          ], 10, oC)),
          e.label ? (h(), w(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
            },
            [
              R(e.$slots, "default", {}, () => [
                Te(
                  re(e.circleProps.roundValue),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const _f = ne({
  name: eC,
  props: xS,
  setup(e) {
    const n = Pd(), t = V(() => {
      const i = A(e.value), s = i > Qn ? Qn : i, l = i > Qn ? Qn : Math.round(i);
      return {
        width: `${s}%`,
        roundValue: `${l}%`
      };
    }), o = V(() => {
      const { size: i, lineWidth: s, value: l } = e, u = Fn / (1 - He(s) / He(i)) * 2, d = `0 0 ${u} ${u}`, c = A(l) > Qn ? Qn : Math.round(A(l)), f = `${(Qn - c) / Qn * xu}`, m = He(s) / He(i) * u, b = 0, p = -Fn, g = 0, k = -2 * Fn, T = `M ${u / 2} ${u / 2} m ${b} ${p} a ${Fn} ${Fn} 
        0 1 1 ${g} ${-k} a ${Fn} ${Fn} 0 1 1 ${-g} ${k}`;
      return {
        strokeWidth: m,
        viewBox: d,
        strokeOffset: f,
        roundValue: `${c}%`,
        path: T
      };
    }), r = V(() => io(e.color) ? `url(#${n.value})` : e.color), a = V(
      () => Object.keys(e.color).sort((i, s) => parseFloat(i) - parseFloat(s))
    );
    return {
      id: n,
      linearProps: t,
      CIRCUMFERENCE: xu,
      RADIUS: Fn,
      circleProps: o,
      progressColor: r,
      linearGradientProgress: a,
      isPlainObject: io,
      n: nC,
      classes: tC,
      toSizeUnit: we
    };
  }
});
_f.render = uC;
var Ns = _f;
oe(Ns);
const KE = Ns;
var Wa = Ns;
const dC = {
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
  onRefresh: z(),
  "onUpdate:modelValue": z()
};
var ed = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: cC, n: nd, classes: fC } = te("pull-refresh"), td = 150;
function vC(e, n) {
  const t = ae("var-icon");
  return h(), w(
    "div",
    {
      ref: "freshNode",
      class: v(e.n()),
      onTouchstart: n[0] || (n[0] = (...o) => e.touchStart && e.touchStart(...o)),
      onTouchend: n[1] || (n[1] = (...o) => e.touchEnd && e.touchEnd(...o)),
      onTouchcancel: n[2] || (n[2] = (...o) => e.touchEnd && e.touchEnd(...o))
    },
    [
      N(
        "div",
        {
          ref: "controlNode",
          class: v(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: F(e.controlStyle)
        },
        [
          J(t, {
            name: e.iconName,
            transition: e.ICON_TRANSITION,
            class: v(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
            "var-pull-refresh-cover": ""
          }, null, 8, ["name", "transition", "class"])
        ],
        6
        /* CLASS, STYLE */
      ),
      R(e.$slots, "default")
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const xf = ne({
  name: cC,
  components: { VarIcon: Ue },
  props: dC,
  setup(e) {
    const n = S(0), t = S(null), o = S(null), r = S(0), a = S("-125%"), i = S("arrow-down"), s = S("default"), l = S(!1), u = V(() => Math.abs(2 * n.value)), d = V(() => s.value === "success"), c = V(
      () => s.value !== "loading" && s.value !== "success" && !e.disabled
    ), f = V(() => ({
      transform: `translate3d(0px, ${Qe(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: l.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    }));
    let m, b, p = 0, g = 0;
    fe(
      () => e.modelValue,
      (D) => {
        D === !1 && (l.value = !0, s.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, P();
        }, A(e.successDuration)));
      }
    ), rn(I), dt(t, "touchmove", $);
    function k(D) {
      return ed(this, null, function* () {
        if (i.value !== D)
          return i.value = D, new Promise((E) => {
            window.setTimeout(E, td);
          });
      });
    }
    function T(D) {
      ("classList" in m ? m : document.body).classList[D](`${nd()}--lock`);
    }
    function O(D) {
      if (n.value === 0) {
        const { width: E } = _e(o.value);
        n.value = -(E + E * 0.25);
      }
      p = D.touches[0].clientY, g = 0, b = ft(D.target);
    }
    function $(D) {
      if (!c.value || !b || b !== m && uo(b) > 0)
        return;
      const E = uo(m);
      if (E > 0)
        return;
      const H = E === 0;
      g = D.touches[0].clientY - p, H && g >= 0 && D.preventDefault(), s.value !== "pulling" && (s.value = "pulling", r.value = D.touches[0].clientY), H && vn(a.value) && a.value > n.value && T("add");
      const U = (D.touches[0].clientY - r.value) / 2 + n.value;
      a.value = U >= u.value ? u.value : U, k(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function C() {
      return ed(this, null, function* () {
        c.value && (l.value = !0, A(a.value) >= u.value * 0.2 ? (yield k("refresh"), s.value = "loading", a.value = u.value * 0.3, y(e["onUpdate:modelValue"], !0), Fe(() => {
          y(e.onRefresh);
        }), T("remove")) : (s.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          l.value = !1, T("remove");
        }, A(e.animationDuration))), b = null);
      });
    }
    function I() {
      m = e.target ? Ad(e.target, "PullRefresh") : ft(t.value);
    }
    function P() {
      setTimeout(() => {
        s.value = "default", i.value = "arrow-down", l.value = !1;
      }, A(e.animationDuration));
    }
    return {
      ICON_TRANSITION: td,
      refreshStatus: s,
      freshNode: t,
      controlNode: o,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: nd,
      classes: fC,
      touchStart: O,
      touchMove: $,
      touchEnd: C
    };
  }
});
xf.render = vC;
var Vs = xf;
oe(Vs);
const ZE = Vs;
var qa = Vs;
const mC = {
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
  onClick: z(),
  onChange: z(),
  "onUpdate:modelValue": z()
}, ev = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function pC() {
  const { bindChildren: e, childProviders: n, length: t } = sn(
    ev
  );
  return {
    length: t,
    radios: n,
    bindRadios: e
  };
}
function hC() {
  const { bindParent: e, parentProvider: n, index: t } = an(ev);
  return {
    index: t,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: gC, n: bC, classes: yC } = te("radio");
function $C(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = Le("ripple"), i = Le("hover");
  return h(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      N(
        "div",
        Ne({
          class: e.n(),
          onClick: n[0] || (n[0] = (...s) => e.handleClick && e.handleClick(...s))
        }, e.$attrs),
        [
          Oe((h(), w(
            "div",
            {
              class: v(
                e.classes(
                  e.n("action"),
                  [e.checked, e.n("--checked"), e.n("--unchecked")],
                  [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              style: F({ color: e.checked ? e.checkedColor : e.uncheckedColor })
            },
            [
              e.checked ? R(e.$slots, "checked-icon", { key: 0 }, () => [
                J(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  "var-radio-cover": "",
                  name: "radio-marked",
                  size: e.iconSize
                }, null, 8, ["class", "size"])
              ]) : R(e.$slots, "unchecked-icon", { key: 1 }, () => [
                J(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  "var-radio-cover": "",
                  name: "radio-blank",
                  size: e.iconSize
                }, null, 8, ["class", "size"])
              ]),
              J(o, {
                hovering: !e.disabled && !e.formDisabled && e.hovering
              }, null, 8, ["hovering"])
            ],
            6
            /* CLASS, STYLE */
          )), [
            [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
            [i, e.handleHovering, "desktop"]
          ]),
          N(
            "div",
            {
              class: v(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              )
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      ),
      J(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const nv = ne({
  name: gC,
  directives: { Ripple: Ke, Hover: En },
  components: {
    VarIcon: Ue,
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  inheritAttrs: !1,
  props: mC,
  setup(e) {
    const n = lo(e, "modelValue"), t = V(() => n.value === e.checkedValue), o = S(!1), { radioGroup: r, bindRadioGroup: a } = hC(), { hovering: i, handleHovering: s } = Gn(), { form: l, bindForm: u } = Mn(), {
      errorMessage: d,
      validateWithTrigger: c,
      validate: f,
      // expose
      resetValidation: m
    } = In(), b = {
      sync: T,
      validate: $,
      resetValidation: m,
      reset: O
    };
    y(a, b), y(u, b);
    function p(I) {
      Fe(() => {
        const { validateTrigger: P, rules: D, modelValue: E } = e;
        c(P, I, D, E);
      });
    }
    function g(I) {
      const { checkedValue: P, onChange: D } = e;
      r && n.value === P || (n.value = I, y(D, n.value), r == null || r.onToggle(P), p("onChange"));
    }
    function k(I) {
      const { disabled: P, readonly: D, uncheckedValue: E, checkedValue: H, onClick: L } = e;
      l != null && l.disabled.value || P || (y(L, I), !(l != null && l.readonly.value || D) && (o.value = !0, g(t.value ? E : H)));
    }
    function T(I) {
      const { checkedValue: P, uncheckedValue: D } = e;
      n.value = I === P ? P : D;
    }
    function O() {
      n.value = e.uncheckedValue, m();
    }
    function $() {
      return f(e.rules, e.modelValue);
    }
    function C(I) {
      const { uncheckedValue: P, checkedValue: D } = e;
      ![P, D].includes(I) && (I = t.value ? P : D), g(I);
    }
    return {
      withAnimation: o,
      checked: t,
      errorMessage: d,
      radioGroupErrorMessage: r == null ? void 0 : r.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      hovering: i,
      handleHovering: s,
      n: bC,
      classes: yC,
      handleClick: k,
      toggle: C,
      reset: O,
      validate: $,
      resetValidation: m
    };
  }
});
nv.render = $C;
var As = nv;
oe(As);
const JE = As;
var Ga = As;
const wC = {
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
  onChange: z(),
  "onUpdate:modelValue": z()
}, { name: SC, n: CC, classes: kC } = te("radio-group");
function PC(e, n) {
  const t = ae("var-form-details");
  return h(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      J(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const tv = ne({
  name: SC,
  components: { VarFormDetails: pn },
  props: wC,
  setup(e) {
    const { length: n, radios: t, bindRadios: o } = pC(), { bindForm: r } = Mn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: s,
      // expose
      resetValidation: l
    } = In(), u = V(() => a.value), d = {
      onToggle: m,
      validate: b,
      reset: p,
      resetValidation: l,
      errorMessage: u
    };
    fe(() => e.modelValue, f), fe(() => n.value, f), y(r, d), o(d);
    function c(g) {
      Fe(() => {
        const { validateTrigger: k, rules: T, modelValue: O } = e;
        i(k, g, T, O);
      });
    }
    function f() {
      return t.forEach(({ sync: g }) => g(e.modelValue));
    }
    function m(g) {
      y(e["onUpdate:modelValue"], g), y(e.onChange, g), c("onChange");
    }
    function b() {
      return s(e.rules, e.modelValue);
    }
    function p() {
      y(e["onUpdate:modelValue"], void 0), l();
    }
    return {
      errorMessage: a,
      n: CC,
      classes: kC,
      reset: p,
      validate: b,
      resetValidation: l
    };
  }
});
tv.render = PC;
var zs = tv;
oe(zs);
const QE = zs;
var Xa = zs;
const OC = {
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
  onChange: z(),
  "onUpdate:modelValue": z()
}, { name: TC, n: xt } = te("rate"), EC = ["onClick"];
function IC(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = Le("ripple"), i = Le("hover");
  return h(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      N(
        "div",
        {
          class: v(e.n())
        },
        [
          (h(!0), w(
            Be,
            null,
            qe(e.toNumber(e.count), (s) => Oe((h(), w("div", {
              key: s,
              style: F(e.getStyle(s)),
              class: v(e.getClass(s)),
              onClick: (l) => e.handleClick(s, l)
            }, [
              J(t, {
                class: v(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.namespace,
                name: e.getCurrentState(s).name,
                style: F({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              J(o, {
                hovering: e.hovering && s === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, EC)), [
              [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
              [i, e.createHoverHandler(s), "desktop"]
            ])),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      J(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const ov = ne({
  name: TC,
  components: {
    VarIcon: Ue,
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Ke, Hover: En },
  props: OC,
  setup(e) {
    const n = S(-1), { form: t, bindForm: o } = Mn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: s } = In(), { hovering: l } = Gn();
    let u = Number(e.modelValue);
    y(o, {
      reset: O,
      validate: p,
      resetValidation: s
    });
    function c($) {
      const { count: C, gap: I } = e;
      return {
        color: m($).color,
        marginRight: $ !== A(C) ? we(I) : 0
      };
    }
    function f($) {
      const { name: C, color: I } = m($);
      return {
        [xt("content")]: !0,
        [xt("--disabled")]: (t == null ? void 0 : t.disabled.value) || e.disabled,
        [xt("--error")]: r.value,
        [xt("--primary")]: C !== e.emptyIcon && !I
      };
    }
    function m($) {
      const { modelValue: C, disabled: I, disabledColor: P, color: D, half: E, emptyColor: H, icon: L, halfIcon: U, emptyIcon: ie } = e;
      let G = D;
      return (I || t != null && t.disabled.value) && (G = P), $ <= A(C) ? { color: G, name: L } : E && $ <= A(C) + 0.5 ? { color: G, name: U } : { color: I || t != null && t.disabled.value ? P : H, name: ie };
    }
    function b($, C) {
      const { half: I, clearable: P } = e, { offsetWidth: D } = C.target;
      I && C.offsetX <= Math.floor(D / 2) && ($ -= 0.5), u === $ && P && ($ = 0), u = $, y(e["onUpdate:modelValue"], $);
    }
    function p() {
      return i(e.rules, A(e.modelValue));
    }
    function g() {
      return Fe(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function k($, C) {
      const { readonly: I, disabled: P, onChange: D } = e;
      I || P || t != null && t.disabled.value || t != null && t.readonly.value || (b($, C), y(D, $), g());
    }
    function T($) {
      return (C) => {
        n.value = $, l.value = C;
      };
    }
    function O() {
      y(e["onUpdate:modelValue"], 0), s();
    }
    return {
      errorMessage: r,
      formDisabled: t == null ? void 0 : t.disabled,
      formReadonly: t == null ? void 0 : t.readonly,
      hovering: l,
      currentHoveringValue: n,
      getStyle: c,
      getClass: f,
      getCurrentState: m,
      handleClick: k,
      createHoverHandler: T,
      reset: O,
      validate: p,
      resetValidation: s,
      toSizeUnit: we,
      toNumber: A,
      n: xt
    };
  }
});
ov.render = IC;
var Ls = ov;
oe(Ls);
const _E = Ls;
var Ka = Ls;
const MC = (e) => (ht(""), e = e(), gt(), e), DC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, BC = /* @__PURE__ */ MC(() => /* @__PURE__ */ N(
  "path",
  { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
  null,
  -1
  /* HOISTED */
)), NC = [
  BC
];
function VC(e, n) {
  return h(), w("svg", DC, NC);
}
const rv = ne({});
rv.render = VC;
var AC = rv;
const zC = (e) => (ht(""), e = e(), gt(), e), LC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, RC = /* @__PURE__ */ zC(() => /* @__PURE__ */ N(
  "path",
  { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
  null,
  -1
  /* HOISTED */
)), UC = [
  RC
];
function HC(e, n) {
  return h(), w("svg", LC, UC);
}
const av = ne({});
av.render = HC;
var FC = av;
const YC = (e) => (ht(""), e = e(), gt(), e), jC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, WC = /* @__PURE__ */ YC(() => /* @__PURE__ */ N(
  "path",
  { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
  null,
  -1
  /* HOISTED */
)), qC = [
  WC
];
function GC(e, n) {
  return h(), w("svg", jC, qC);
}
const iv = ne({});
iv.render = GC;
var XC = iv;
const { n: KC, classes: ZC } = te("result");
function JC(e, n) {
  return h(), w(
    Be,
    null,
    [
      N(
        "span",
        {
          class: v(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      N(
        "span",
        {
          class: v(e.classes(e.n("success-line"), e.n("success-line-tip"))),
          style: F({
            animationDuration: e.animation ? "760ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      N(
        "span",
        {
          class: v(e.classes(e.n("success-line"), e.n("success-line-long"))),
          style: F({
            animationDuration: e.animation ? "770ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      N(
        "span",
        {
          ref: "circle",
          class: v(e.n("success-circle")),
          style: F({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      N(
        "span",
        {
          class: v(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      N(
        "span",
        {
          class: v(e.n("success-cover-right")),
          style: F({
            animationDuration: e.animation ? "4250ms" : "0ms"
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const sv = ne({
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
      n: KC,
      classes: ZC,
      toNumber: A
    };
  }
});
sv.render = JC;
var QC = sv;
const _C = (e) => (ht(""), e = e(), gt(), e), xC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, ek = /* @__PURE__ */ _C(() => /* @__PURE__ */ N(
  "path",
  { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
  null,
  -1
  /* HOISTED */
)), nk = [
  ek
];
function tk(e, n) {
  return h(), w("svg", xC, nk);
}
const lv = ne({});
lv.render = tk;
var ok = lv;
const rk = (e) => (ht(""), e = e(), gt(), e), ak = { viewBox: "-4 -4 32 32" }, ik = /* @__PURE__ */ rk(() => /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), sk = [
  ik
];
function lk(e, n) {
  return h(), w("svg", ak, sk);
}
const uv = ne({});
uv.render = lk;
var uk = uv;
const dk = {
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
}, { name: ck, n: fk, classes: vk } = te("result");
function mk(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      R(e.$slots, "image", {}, () => [
        e.type ? (h(), w(
          "div",
          {
            key: 0,
            class: v(e.n("image-container"))
          },
          [
            N(
              "div",
              {
                class: v(e.classes(e.n("image"), e.n(e.type))),
                style: F({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (h(), Se(Xt(e.type), {
                  "border-size": e.borderSize,
                  animation: e.animation
                }, null, 8, ["border-size", "animation"]))
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        )) : Q("v-if", !0)
      ]),
      R(e.$slots, "title", {}, () => [
        e.title ? (h(), w(
          "div",
          {
            key: 0,
            class: v(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)
      ]),
      R(e.$slots, "description", {}, () => [
        e.description ? (h(), w(
          "div",
          {
            key: 0,
            class: v(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)
      ]),
      e.$slots.footer ? (h(), w(
        "div",
        {
          key: 0,
          class: v(e.n("footer"))
        },
        [
          R(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const dv = ne({
  name: ck,
  components: {
    Info: AC,
    Success: QC,
    Warning: XC,
    Error: FC,
    Question: ok,
    Empty: uk
  },
  props: dk,
  setup(e) {
    const n = V(() => {
      const { imageSize: o } = e;
      return `calc(${o ? we(o) : "var(--result-image-size)"} * 0.9)`;
    }), t = V(() => {
      const { imageSize: o } = e;
      return `calc(${o ? we(e.imageSize) : "var(--result-image-size)"} * 0.05)`;
    });
    return {
      circleSize: n,
      borderSize: t,
      toSizeUnit: we,
      n: fk,
      classes: vk,
      toNumber: A,
      toPxNum: He
    };
  }
});
dv.render = mk;
var Rs = dv;
oe(Rs);
const xE = Rs;
var Za = Rs;
const pk = {
  gutter: {
    type: [String, Number, Array],
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
  onClick: z()
}, { name: hk, n: gk, classes: bk } = te("row");
function yk(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      style: F({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: `${-e.average[0]}px ${-e.average[1]}px`
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const cv = ne({
  name: hk,
  props: pk,
  setup(e) {
    const n = V(
      () => Me(e.gutter) ? e.gutter.map((l) => He(l) / 2) : [0, He(e.gutter) / 2]
    ), { cols: t, bindCols: o, length: r } = c0(), a = { computePadding: i };
    fe(() => r.value, i), fe(() => e.gutter, i), o(a);
    function i() {
      t.forEach((l) => {
        const [u, d] = n.value;
        l.setPadding({ left: d, right: d, top: u, bottom: u });
      });
    }
    function s(l) {
      y(e.onClick, l);
    }
    return {
      average: n,
      n: gk,
      classes: bk,
      handleClick: s,
      padStartFlex: tr
    };
  }
});
cv.render = yk;
var Us = cv;
oe(Us);
const eI = Us;
var Ja = Us, $k = Object.defineProperty, od = Object.getOwnPropertySymbols, wk = Object.prototype.hasOwnProperty, Sk = Object.prototype.propertyIsEnumerable, rd = (e, n, t) => n in e ? $k(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ck = (e, n) => {
  for (var t in n || (n = {}))
    wk.call(n, t) && rd(e, t, n[t]);
  if (od)
    for (var t of od(n))
      Sk.call(n, t) && rd(e, t, n[t]);
  return e;
};
const kk = Ck({
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
  onFocus: z(),
  onBlur: z(),
  onClose: z(),
  onChange: z(),
  onClear: z(),
  "onUpdate:modelValue": z()
}, en(Ss, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), { name: Pk, n: Ok, classes: Tk } = te("select"), Ek = { key: 1 };
function Ik(e, n) {
  const t = ae("var-chip"), o = ae("var-icon"), r = ae("var-field-decorator"), a = ae("var-menu"), i = ae("var-form-details");
  return h(), w(
    "div",
    {
      class: v(e.n()),
      onClick: n[3] || (n[3] = (...s) => e.handleFocus && e.handleFocus(...s))
    },
    [
      J(a, {
        "var-select-cover": "",
        "same-width": "",
        "close-on-click-reference": "",
        show: e.showMenu,
        "onUpdate:show": n[1] || (n[1] = (s) => e.showMenu = s),
        class: v(e.n("menu")),
        "popover-class": e.variant === "standard" && e.hint ? e.n("--standard-menu-margin") : void 0,
        "offset-y": e.offsetY,
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
        placement: e.placement,
        "default-style": !1,
        onClickOutside: e.handleBlur
      }, {
        menu: ve(() => [
          N(
            "div",
            {
              ref: "menuEl",
              class: v(e.classes(e.n("scroller"), e.n("$-elevation--3")))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ]),
        default: ve(() => [
          J(
            r,
            st(Po({
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
            xo({
              "append-icon": ve(() => [
                R(e.$slots, "append-icon")
              ]),
              default: ve(() => [
                N(
                  "div",
                  {
                    class: v(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                    style: F({
                      textAlign: e.textAlign,
                      color: e.textColor
                    })
                  },
                  [
                    N(
                      "div",
                      {
                        class: v(e.n("label"))
                      },
                      [
                        e.isEmptyModelValue ? Q("v-if", !0) : R(e.$slots, "selected", { key: 0 }, () => [
                          e.multiple ? (h(), w(
                            Be,
                            { key: 0 },
                            [
                              e.chip ? (h(), w(
                                "div",
                                {
                                  key: 0,
                                  class: v(e.n("chips"))
                                },
                                [
                                  (h(!0), w(
                                    Be,
                                    null,
                                    qe(e.labels, (s) => (h(), Se(t, {
                                      class: v(e.n("chip")),
                                      "var-select-cover": "",
                                      closable: "",
                                      size: "small",
                                      type: e.errorMessage ? "danger" : void 0,
                                      key: s,
                                      onClick: n[0] || (n[0] = On(() => {
                                      }, ["stop"])),
                                      onClose: () => e.handleClose(s)
                                    }, {
                                      default: ve(() => [
                                        Te(
                                          re(s),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    }, 1032, ["class", "type", "onClose"]))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ],
                                2
                                /* CLASS */
                              )) : (h(), w(
                                "div",
                                {
                                  key: 1,
                                  class: v(e.n("values"))
                                },
                                re(e.labels.join(e.separator)),
                                3
                                /* TEXT, CLASS */
                              ))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (h(), w(
                            "span",
                            Ek,
                            re(e.label),
                            1
                            /* TEXT */
                          ))
                        ])
                      ],
                      2
                      /* CLASS */
                    ),
                    e.enableCustomPlaceholder ? (h(), w(
                      "span",
                      {
                        key: 0,
                        class: v(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                        style: F({
                          color: e.placeholderColor
                        })
                      },
                      re(e.placeholder),
                      7
                      /* TEXT, CLASS, STYLE */
                    )) : Q("v-if", !0),
                    R(e.$slots, "arrow-icon", { focus: e.showMenu }, () => [
                      J(o, {
                        class: v(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
                        "var-select-cover": "",
                        name: "menu-down",
                        transition: 300
                      }, null, 8, ["class"])
                    ])
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, [
              e.$slots["prepend-icon"] ? {
                name: "prepend-icon",
                fn: ve(() => [
                  R(e.$slots, "prepend-icon")
                ]),
                key: "0"
              } : void 0
            ]),
            1040
            /* FULL_PROPS, DYNAMIC_SLOTS */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]),
      J(i, {
        "error-message": e.errorMessage,
        onClick: n[2] || (n[2] = On(() => {
        }, ["stop"]))
      }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const fv = ne({
  name: Pk,
  components: {
    VarIcon: Ue,
    VarMenu: $o,
    VarChip: sr,
    VarFieldDecorator: Nf,
    VarFormDetails: pn
  },
  props: kk,
  setup(e) {
    const n = S(!1), t = S(!1), o = V(() => e.multiple), r = V(() => e.focusColor), a = S(""), i = S([]), s = V(() => Yn(e.modelValue)), l = V(() => e.disabled || e.readonly ? "" : "pointer"), u = S(0), { bindForm: d, form: c } = Mn(), { length: f, options: m, bindOptions: b } = yS(), {
      errorMessage: p,
      validateWithTrigger: g,
      validate: k,
      // expose
      resetValidation: T
    } = In(), O = S(null), $ = V(() => e.variant === "outlined" ? "bottom" : "cover-top"), C = V(() => {
      const { hint: Y, blurColor: X, focusColor: ee } = e;
      if (!Y)
        return p.value ? "var(--field-decorator-error-color)" : n.value ? ee || "var(--field-decorator-focus-color)" : X || "var(--field-decorator-blur-color)";
    }), I = V(() => !e.hint && Yn(e.modelValue)), P = {
      multiple: o,
      focusColor: r,
      computeLabel: D,
      onSelect: G,
      reset: q,
      validate: x,
      resetValidation: T
    };
    fe(
      () => e.multiple,
      () => {
        const { multiple: Y, modelValue: X } = e;
        Y && !Me(X) && Tn("Select", "The modelValue must be an array when multiple is true");
      }
    ), fe(() => e.modelValue, j, { deep: !0 }), fe(() => f.value, j), b(P), y(d, P);
    function D() {
      const { multiple: Y, modelValue: X } = e;
      if (Y) {
        const ee = X;
        i.value = ee.map(L);
      }
      !Y && !Yn(X) && (a.value = L(X)), !Y && Yn(X) && (a.value = "");
    }
    function E(Y) {
      Fe(() => {
        const { validateTrigger: X, rules: ee, modelValue: pe } = e;
        g(X, Y, ee, pe);
      });
    }
    function H({ value: Y, label: X }) {
      return Y.value != null ? Y.value : X.value;
    }
    function L(Y) {
      var X;
      let ee = m.find(({ value: pe }) => pe.value === Y);
      return ee || (ee = m.find(({ label: pe }) => pe.value === Y)), (X = ee == null ? void 0 : ee.label.value) != null ? X : "";
    }
    function U() {
      const { disabled: Y, readonly: X, onFocus: ee } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || Y || X || (u.value = He(e.offsetY), n.value = !0, y(ee), E("onFocus"));
    }
    function ie() {
      const { disabled: Y, readonly: X, onBlur: ee } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || Y || X || (M(), y(ee), E("onBlur"));
    }
    function G(Y) {
      const { disabled: X, readonly: ee, multiple: pe, onChange: ke } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || X || ee)
        return;
      const Re = pe ? m.filter(({ selected: se }) => se.value).map(H) : H(Y);
      y(e["onUpdate:modelValue"], Re), y(ke, Re), E("onChange"), pe || M();
    }
    function W() {
      const { disabled: Y, readonly: X, multiple: ee, clearable: pe, onClear: ke } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || Y || X || !pe)
        return;
      const Re = ee ? [] : void 0;
      y(e["onUpdate:modelValue"], Re), y(ke, Re), E("onClear");
    }
    function Z(Y) {
      const { disabled: X, onClick: ee } = e;
      c != null && c.disabled.value || X || (y(ee, Y), E("onClick"));
    }
    function _(Y) {
      const { disabled: X, readonly: ee, modelValue: pe, onClose: ke } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || X || ee)
        return;
      const Re = pe, se = m.find(({ label: Ce }) => Ce.value === Y), de = Re.filter((Ce) => {
        var Ve;
        return Ce !== ((Ve = se.value.value) != null ? Ve : se.label.value);
      });
      y(e["onUpdate:modelValue"], de), y(ke, de), E("onClose");
    }
    function j() {
      const { multiple: Y, modelValue: X } = e;
      if (Y) {
        const ee = X;
        m.forEach((pe) => pe.sync(ee.includes(H(pe))));
      } else
        m.forEach((ee) => ee.sync(X === H(ee)));
      D();
    }
    function B() {
      u.value = He(e.offsetY), n.value = !0, t.value = !0;
    }
    function M() {
      n.value = !1, t.value = !1;
    }
    function x() {
      return k(e.rules, e.modelValue);
    }
    function q() {
      y(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    }
    return {
      offsetY: u,
      isFocus: n,
      showMenu: t,
      errorMessage: p,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      label: a,
      labels: i,
      isEmptyModelValue: s,
      menuEl: O,
      placement: $,
      cursor: l,
      placeholderColor: C,
      enableCustomPlaceholder: I,
      n: Ok,
      classes: Tk,
      handleFocus: U,
      handleBlur: ie,
      handleClear: W,
      handleClick: Z,
      handleClose: _,
      reset: q,
      validate: x,
      resetValidation: T,
      focus: B,
      blur: M
    };
  }
});
fv.render = Ik;
var Hs = fv;
oe(Hs);
const nI = Hs;
var Qa = Hs;
const Mk = {
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
}, { name: Dk, n: Bk, classes: Nk } = te("skeleton");
function Vk(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? Q("v-if", !0) : (h(), w(
        "div",
        {
          key: 0,
          class: v(e.n("data"))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      )),
      e.loading && !e.fullscreen ? (h(), w(
        "div",
        {
          key: 1,
          class: v(e.n("content"))
        },
        [
          e.card ? (h(), w(
            "div",
            {
              key: 0,
              class: v(e.n("card")),
              style: F({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              N(
                "div",
                {
                  class: v(e.n("--animation"))
                },
                null,
                2
                /* CLASS */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : Q("v-if", !0),
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), w(
            "div",
            {
              key: 1,
              class: v(e.n("article"))
            },
            [
              e.avatar ? (h(), w(
                "div",
                {
                  key: 0,
                  class: v(e.n("avatar")),
                  style: F({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  N(
                    "div",
                    {
                      class: v(e.n("--animation"))
                    },
                    null,
                    2
                    /* CLASS */
                  )
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0),
              e.title || e.toNumber(e.rows) > 0 ? (h(), w(
                "div",
                {
                  key: 1,
                  class: v(e.n("section"))
                },
                [
                  e.title ? (h(), w(
                    "div",
                    {
                      key: 0,
                      class: v(e.n("title")),
                      style: F({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      N(
                        "div",
                        {
                          class: v(e.n("--animation"))
                        },
                        null,
                        2
                        /* CLASS */
                      )
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : Q("v-if", !0),
                  (h(!0), w(
                    Be,
                    null,
                    qe(e.toNumber(e.rows), (t, o) => (h(), w(
                      "div",
                      {
                        class: v(e.n("row")),
                        key: t,
                        style: F({ width: e.toSizeUnit(e.rowsWidth[o]) })
                      },
                      [
                        N(
                          "div",
                          {
                            class: v(e.n("--animation"))
                          },
                          null,
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                2
                /* CLASS */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.loading && e.fullscreen ? (h(), w(
        "div",
        {
          key: 2,
          class: v(e.n("fullscreen")),
          style: F({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          N(
            "div",
            {
              class: v(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const vv = ne({
  name: Dk,
  props: Mk,
  setup: () => ({
    n: Bk,
    classes: Nk,
    toSizeUnit: we,
    toNumber: A
  })
});
vv.render = Vk;
var Fs = vv;
oe(Fs);
const tI = Fs;
var _a = Fs, Ge = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(Ge || {});
const Ak = {
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
  onChange: z(),
  onStart: z(),
  onEnd: z(),
  "onUpdate:modelValue": z()
}, { name: zk, n: ad, classes: Lk } = te("slider"), Rk = ["onTouchstart"];
function Uk(e, n) {
  const t = ae("var-hover-overlay"), o = ae("var-form-details"), r = Le("hover");
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.click && e.click(...a))
        },
        [
          N(
            "div",
            {
              class: v(e.n(`${e.direction}-track`))
            },
            [
              N(
                "div",
                {
                  class: v(e.n(`${e.direction}-track-background`)),
                  style: F({
                    background: e.trackColor,
                    height: e.isVertical ? "100%" : e.multiplySizeUnit(e.trackHeight),
                    width: e.isVertical ? e.multiplySizeUnit(e.trackHeight) : "100%"
                  })
                },
                null,
                6
                /* CLASS, STYLE */
              ),
              N(
                "div",
                {
                  class: v(e.n(`${e.direction}-track-fill`)),
                  style: F(e.getFillStyle)
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          ),
          (h(!0), w(
            Be,
            null,
            qe(e.thumbList, (a) => (h(), w("div", {
              class: v(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: F(e.thumbStyle(a)),
              onTouchstart: On((i) => e.start(i, a.enumValue), ["stop"])
            }, [
              R(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Oe(N(
                  "div",
                  {
                    class: v(e.n(`${e.direction}-thumb-block`)),
                    style: F({
                      background: e.thumbColor
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ), [
                  [r, (i) => e.hover(i, a), "desktop"]
                ]),
                N(
                  "div",
                  {
                    class: v(
                      e.classes(e.n(`${e.direction}-thumb-ripple`), [
                        e.thumbsProps[a.enumValue].active,
                        e.n(`${e.direction}-thumb-ripple--active`)
                      ])
                    ),
                    style: F({
                      background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0
                    })
                  },
                  [
                    J(t, {
                      hovering: a.hovering
                    }, null, 8, ["hovering"])
                  ],
                  6
                  /* CLASS, STYLE */
                ),
                N(
                  "div",
                  {
                    class: v(
                      e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])
                    ),
                    style: F({
                      background: e.labelColor,
                      color: e.labelTextColor,
                      height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                      width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
                    })
                  },
                  [
                    N(
                      "span",
                      null,
                      re(a.text),
                      1
                      /* TEXT */
                    )
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ])
            ], 46, Rk))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      J(o, {
        "error-message": e.errorMessage,
        class: v(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const mv = ne({
  name: zk,
  components: {
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  directives: { Hover: En },
  props: Ak,
  setup(e) {
    const n = S(0), t = S(null), o = S(!1), r = V(() => A(e.max) - A(e.min)), a = V(() => n.value / r.value * A(e.step)), i = V(() => e.disabled || (d == null ? void 0 : d.disabled.value)), s = V(() => e.readonly || (d == null ? void 0 : d.readonly.value)), l = V(() => e.direction === "vertical"), { bindForm: u, form: d } = Mn(), { errorMessage: c, validateWithTrigger: f, validate: m, resetValidation: b } = In(), { hovering: p, handleHovering: g } = Gn(), { hovering: k, handleHovering: T } = Gn(), O = V(() => {
      const { modelValue: se, range: de } = e;
      let Ce = [];
      return de && Me(se) ? Ce = [
        {
          value: G(se[0]),
          enumValue: Ge.First,
          text: W(se[0]),
          hovering: no(p),
          handleHovering: g
        },
        {
          value: G(se[1]),
          enumValue: Ge.Second,
          text: W(se[1]),
          hovering: no(k),
          handleHovering: T
        }
      ] : vn(se) && (Ce = [
        {
          value: G(se),
          enumValue: Ge.First,
          text: W(se),
          hovering: no(p),
          handleHovering: g
        }
      ]), Ce;
    }), $ = V(() => {
      const { activeColor: se, range: de, modelValue: Ce } = e, Ve = de && Me(Ce) ? G(Math.min(Ce[0], Ce[1])) : 0, le = de && Me(Ce) ? G(Math.max(Ce[0], Ce[1])) - Ve : G(Ce);
      return l.value ? {
        left: "0px",
        height: `${le}%`,
        bottom: `${Ve}%`,
        background: se
      } : {
        top: "0px",
        width: `${le}%`,
        left: `${Ve}%`,
        background: se
      };
    }), C = je({
      [Ge.First]: E(),
      [Ge.Second]: E()
    });
    let I;
    y(u, {
      reset: Re,
      validate: D,
      resetValidation: b
    }), fe([() => e.modelValue, () => e.step], ([se, de]) => {
      !ee() || !pe() || o.value || ke(se, A(de));
    }), fe(n, () => ke()), rn(() => {
      !ee() || !pe() || (n.value = t.value[l.value ? "offsetHeight" : "offsetWidth"]);
    }), hr(() => {
      M();
    });
    function D() {
      return m(e.rules, e.modelValue);
    }
    function E() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function H() {
      return Fe(() => f(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function L(se) {
      const de = se.currentTarget;
      return de ? l.value ? n.value - (se.clientY - _e(de).top) : se.clientX - Fm(de) : 0;
    }
    function U(se) {
      return {
        [l.value ? "bottom" : "left"]: `${se.value}%`,
        zIndex: C[se.enumValue].active ? 1 : void 0
      };
    }
    function ie(se) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : C[se].active;
    }
    function G(se) {
      const { min: de, max: Ce } = e;
      return se < A(de) ? 0 : se > A(Ce) ? 100 : (se - A(de)) / r.value * 100;
    }
    function W(se) {
      if (!vn(se))
        return 0;
      let de = se;
      return de < Number(e.min) && (de = Number(e.min)), de > Number(e.max) && (de = Number(e.max)), parseInt(`${de}`, 10) === de ? de : A(de.toPrecision(5));
    }
    function Z(se, de) {
      i.value || de.handleHovering(se);
    }
    function _(se, de) {
      let Ce = [];
      const { step: Ve, range: le, modelValue: he, onChange: De, min: We } = e, ue = A(Ve), $e = Math.round(se / a.value), be = $e * ue + A(We), Ie = C[de].percentValue * ue + A(We);
      if (C[de].percentValue = $e, le && Me(he) && (Ce = de === Ge.First ? [be, he[1]] : [he[0], be]), Ie !== be) {
        const Ee = le ? Ce.map((Xe) => W(Xe)) : W(be);
        y(De, Ee), y(e["onUpdate:modelValue"], Ee), H();
      }
    }
    function j(se) {
      if (!e.range)
        return Ge.First;
      const de = C[Ge.First].percentValue * a.value, Ce = C[Ge.Second].percentValue * a.value, Ve = Math.abs(se - de), le = Math.abs(se - Ce);
      return Ve <= le ? Ge.First : Ge.Second;
    }
    function B() {
      document.addEventListener("touchmove", q, { passive: !1 }), document.addEventListener("touchend", Y), document.addEventListener("touchcancel", Y);
    }
    function M() {
      document.removeEventListener("touchmove", q), document.removeEventListener("touchend", Y), document.removeEventListener("touchcancel", Y);
    }
    function x(se, de) {
      if (n.value || (n.value = t.value.offsetWidth), i.value || (C[de].active = !0), I = de, B(), i.value || s.value)
        return;
      y(e.onStart), o.value = !0;
      const { clientX: Ce, clientY: Ve } = se.touches[0];
      C[de].startPosition = l.value ? Ve : Ce;
    }
    function q(se) {
      if (se.preventDefault(), i.value || s.value || !o.value)
        return;
      const { startPosition: de, currentOffset: Ce } = C[I], { clientX: Ve, clientY: le } = se.touches[0];
      let he = (l.value ? de - le : Ve - de) + Ce;
      he <= 0 ? he = 0 : he >= n.value && (he = n.value), _(he, I);
    }
    function Y() {
      M();
      const { range: se, modelValue: de, onEnd: Ce, step: Ve, min: le } = e;
      if (i.value || (C[I].active = !1), i.value || s.value)
        return;
      let he = [];
      C[I].currentOffset = C[I].percentValue * a.value;
      const De = C[I].percentValue * A(Ve) + A(le);
      se && Me(de) && (he = I === Ge.First ? [De, de[1]] : [de[0], De]), y(Ce, se ? he : De), o.value = !1;
    }
    function X(se) {
      if (i.value || s.value || se.target.closest(`.${ad("thumb")}`))
        return;
      const de = L(se), Ce = j(de);
      I = Ce, _(de, Ce), Y();
    }
    function ee() {
      const se = A(e.step);
      return isNaN(se) ? ($l("Slider", 'type of prop "step" should be Number'), !1) : se < 0 ? ($l("Slider", '"step" should be > 0'), !1) : !0;
    }
    function pe() {
      const { range: se, modelValue: de } = e;
      return se && !Me(de) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !se && Me(de) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : se && Me(de) && de.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function ke(se = e.modelValue, de = A(e.step)) {
      const Ce = (Ve) => {
        const { min: le, max: he } = e;
        return Ve < A(le) ? 0 : Ve > A(he) ? r.value / de : (Ve - A(le)) / de;
      };
      e.range && Me(se) ? (C[Ge.First].percentValue = Ce(se[0]), C[Ge.First].currentOffset = C[Ge.First].percentValue * a.value, C[Ge.Second].percentValue = Ce(se[1]), C[Ge.Second].currentOffset = C[Ge.Second].percentValue * a.value) : vn(se) && (C[Ge.First].currentOffset = Ce(se) * a.value);
    }
    function Re() {
      const se = e.range ? [0, 0] : 0;
      y(e["onUpdate:modelValue"], se), b();
    }
    return {
      Thumbs: Ge,
      sliderEl: t,
      getFillStyle: $,
      isDisabled: i,
      isVertical: l,
      errorMessage: c,
      thumbsProps: C,
      thumbList: O,
      n: ad,
      classes: Lk,
      thumbStyle: U,
      hover: Z,
      multiplySizeUnit: ln,
      toNumber: A,
      showLabel: ie,
      start: x,
      move: q,
      end: Y,
      click: X
    };
  }
});
mv.render = Uk;
var Ys = mv;
oe(Ys);
const oI = Ys;
var xa = Ys, Hk = Object.defineProperty, Fk = Object.defineProperties, Yk = Object.getOwnPropertyDescriptors, id = Object.getOwnPropertySymbols, jk = Object.prototype.hasOwnProperty, Wk = Object.prototype.propertyIsEnumerable, sd = (e, n, t) => n in e ? Hk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, qk = (e, n) => {
  for (var t in n || (n = {}))
    jk.call(n, t) && sd(e, t, n[t]);
  if (id)
    for (var t of id(n))
      Wk.call(n, t) && sd(e, t, n[t]);
  return e;
}, Gk = (e, n) => Fk(e, Yk(n));
const pv = {
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
  loadingType: en(rt, "type"),
  loadingSize: en(rt, "size"),
  loadingRadius: en(rt, "radius"),
  loadingColor: Gk(qk({}, en(rt, "color")), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: z(),
  onOpened: z(),
  onClose: z(),
  onClosed: z(),
  "onUpdate:show": z(),
  _update: String
}, { n: Xk, classes: Kk } = te("snackbar"), Zk = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Jk(e, n) {
  const t = ae("var-icon"), o = ae("var-loading");
  return Oe((h(), w(
    "div",
    {
      class: v(e.n()),
      style: F({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      N(
        "div",
        {
          class: v(
            e.classes(
              e.n("wrapper"),
              e.n(`wrapper-${e.position}`),
              e.n("$-elevation--4"),
              [e.vertical, e.n("vertical")],
              [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)]
            )
          ),
          style: F({ zIndex: e.zIndex })
        },
        [
          N(
            "div",
            {
              class: v([e.n("content"), e.contentClass])
            },
            [
              R(e.$slots, "default", {}, () => [
                Te(
                  re(e.content),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: v([e.n("icon")])
            },
            [
              e.iconName ? (h(), Se(t, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : Q("v-if", !0),
              e.type === "loading" ? (h(), Se(o, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : Q("v-if", !0),
              R(e.$slots, "icon")
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: v(e.n("action"))
            },
            [
              R(e.$slots, "action")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [Rn, e.show]
  ]);
}
const hv = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Ut,
    VarIcon: Ue
  },
  props: pv,
  setup(e) {
    const n = S(null), { zIndex: t } = Eo(() => e.show, 1);
    yr(
      () => e.show,
      () => e.lockScroll
    );
    const o = V(() => e.type === "loading" || e.forbidClick), r = V(() => e.type ? Zk[e.type] : ""), a = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && y(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return fe(
      () => e.show,
      (i) => {
        i ? (y(e.onOpen), a()) : i === !1 && (clearTimeout(n.value), y(e.onClose));
      }
    ), fe(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), rn(() => {
      e.show && (y(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: yv,
      n: Xk,
      classes: Kk,
      zIndex: t,
      iconName: r,
      isForbidClick: o
    };
  }
});
hv.render = Jk;
var gv = hv;
const { name: Qk, n: _k } = te("snackbar");
function xk(e, n) {
  const t = ae("var-snackbar-core");
  return h(), Se(Kn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    J(Ye, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: ve(() => [
        J(t, Ne(e.$props, {
          class: e.n("transition")
        }), {
          icon: ve(() => [
            R(e.$slots, "icon")
          ]),
          action: ve(() => [
            R(e.$slots, "action")
          ]),
          default: ve(() => [
            R(e.$slots, "default", {}, () => [
              Te(
                re(e.content),
                1
                /* TEXT */
              )
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["class"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const bv = ne({
  name: Qk,
  components: { VarSnackbarCore: gv },
  props: pv,
  setup() {
    const { disabled: e } = Jt();
    return {
      disabled: e,
      n: _k
    };
  }
});
bv.render = xk;
var Br = bv, eP = Object.defineProperty, ld = Object.getOwnPropertySymbols, nP = Object.prototype.hasOwnProperty, tP = Object.prototype.propertyIsEnumerable, ud = (e, n, t) => n in e ? eP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, wo = (e, n) => {
  for (var t in n || (n = {}))
    nP.call(n, t) && ud(e, t, n[t]);
  if (ld)
    for (var t of ld(n))
      tP.call(n, t) && ud(e, t, n[t]);
  return e;
};
const yv = ["loading", "success", "warning", "info", "error"];
let dd = 0, ei = !1, $v, Wt = !1;
const wv = {
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
};
let Pn = je([]), js = wv;
const oP = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Wr = (e) => () => Kt(e) ? e() : e, rP = {
  setup() {
    return () => {
      const e = Pn.map(({
        id: n,
        reactiveSnackOptions: t,
        _update: o
      }) => {
        const r = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto"), Wt && (t.position = "top");
        const i = wo({
          position: Wt ? "relative" : "absolute"
        }, dP(t.position)), {
          content: s,
          icon: l,
          action: u
        } = t, d = {
          default: Wr(s),
          icon: Wr(l),
          action: Wr(u)
        };
        return J(gv, Ne(t, {
          key: n,
          style: i,
          "data-id": n,
          _update: o,
          show: t.show,
          "onUpdate:show": (c) => t.show = c
        }), d);
      });
      return J(Jv, Ne(oP, {
        style: {
          zIndex: wn.zIndex
        },
        onAfterEnter: aP,
        onAfterLeave: iP
      }), {
        default: () => [e]
      });
    };
  }
}, Xn = function(e) {
  const n = lP(e), t = je(wo(wo({}, js), n));
  t.show = !0, ei || (ei = !0, $v = Zt(rP).unmountInstance);
  const {
    length: o
  } = Pn, r = {
    id: dd++,
    reactiveSnackOptions: t
  };
  if (o === 0 || Wt)
    sP(r);
  else {
    const a = `update-${dd}`;
    uP(t, a);
  }
  return {
    clear() {
      !Wt && Pn.length ? Pn[0].reactiveSnackOptions.show = !1 : t.show = !1;
    }
  };
};
yv.forEach((e) => {
  Xn[e] = (n) => (io(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Xn(n));
});
Xn.allowMultiple = function(e = !1) {
  e !== Wt && (Pn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Wt = e);
};
Xn.clear = function() {
  Pn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Xn.setDefaultOptions = function(e) {
  js = e;
};
Xn.resetDefaultOptions = function() {
  js = wv;
};
function aP(e) {
  const n = e.getAttribute("data-id"), t = Pn.find((o) => o.id === A(n));
  t && y(t.reactiveSnackOptions.onOpened);
}
function iP(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), t = Pn.find((r) => r.id === A(n));
  t && (t.animationEnd = !0, y(t.reactiveSnackOptions.onClosed)), Pn.every((r) => r.animationEnd) && (y($v), Pn = je([]), ei = !1);
}
function sP(e) {
  Pn.push(e);
}
function lP(e = {}) {
  return Qe(e) ? {
    content: e
  } : e;
}
function uP(e, n) {
  const [t] = Pn;
  t.reactiveSnackOptions = wo(wo({}, t.reactiveSnackOptions), e), t._update = n;
}
function dP(e = "top") {
  return e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Xn.Component = Br;
oe(Br);
oe(Br, Xn);
const rI = Br;
var ni = Xn;
const cP = {
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
function $n(e) {
  return `calc(${e} / 2)`;
}
function fP(e, n, t) {
  const { direction: o, justify: r, index: a, lastIndex: i } = t;
  let s = "0";
  return o === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? s = `${$n(e)} ${n} ${$n(e)} 0` : s = `${$n(e)} 0` : r === "space-around" ? s = `${$n(e)} ${$n(n)}` : r === "space-between" && (a === 0 ? s = `${$n(e)} ${$n(n)} ${$n(e)} 0` : a === i ? s = `${$n(e)} 0 ${$n(e)} ${$n(n)}` : s = `${$n(e)} ${$n(n)}`)), o === "column" && a !== i && (s = `0 0 ${e} 0`), s;
}
const vP = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: mP,
  n: qr,
  classes: pP
} = te("space");
function hP(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Me(e) ? e.map(we) : [we(e), we(e)];
}
var Ws = ne({
  name: mP,
  props: cP,
  setup(e, {
    slots: n
  }) {
    return () => {
      var t;
      const {
        inline: o,
        justify: r,
        align: a,
        wrap: i,
        direction: s,
        size: l
      } = e;
      let u = (t = y(n.default)) != null ? t : [];
      const [d, c] = hP(l, vP(l));
      u = Od(u);
      const f = u.length - 1, m = u.map((b, p) => {
        const g = fP(d, c, {
          direction: s,
          justify: r,
          index: p,
          lastIndex: f
        });
        return J("div", {
          style: {
            margin: g
          }
        }, [b]);
      });
      return J("div", {
        class: pP(qr(), qr("$--box"), [o, qr("--inline")]),
        style: {
          flexDirection: s,
          justifyContent: tr(r),
          alignItems: tr(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: s === "row" ? `calc(-1 * ${d} / 2) 0` : void 0
        }
      }, [m]);
    };
  }
});
oe(Ws);
const aI = Ws;
var ti = Ws;
const gP = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: String,
  inactiveIcon: String
}, Sv = Symbol("STEPS_BIND_STEP_KEY");
function bP() {
  const { bindChildren: e, childProviders: n } = sn(Sv);
  return {
    step: n,
    bindStep: e
  };
}
function yP() {
  const { parentProvider: e, index: n, bindParent: t } = an(Sv);
  return t || Tn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: t
  };
}
const { name: $P, n: wP, classes: SP } = te("step"), CP = { key: 3 };
function kP(e, n) {
  const t = ae("var-icon");
  return h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      N(
        "div",
        {
          class: v(e.n(e.direction))
        },
        [
          N(
            "div",
            {
              class: v(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: F({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...o) => e.click && e.click(...o))
            },
            [
              e.isActive ? (h(), Se(t, {
                key: 0,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon
              }, null, 8, ["class", "name"])) : e.isCurrent && e.currentIcon ? (h(), Se(t, {
                key: 1,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon
              }, null, 8, ["class", "name"])) : e.inactiveIcon ? (h(), Se(t, {
                key: 2,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon
              }, null, 8, ["class", "name"])) : (h(), w(
                "span",
                CP,
                re(e.index + 1),
                1
                /* TEXT */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          N(
            "div",
            {
              class: v(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...o) => e.click && e.click(...o))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          N(
            "div",
            {
              class: v(e.n(`${e.direction}-line`))
            },
            null,
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Cv = ne({
  name: $P,
  components: { VarIcon: Ue },
  props: gP,
  setup() {
    const { index: e, steps: n, bindSteps: t } = yP(), { active: o, activeColor: r, inactiveColor: a, direction: i, clickStep: s } = n, l = V(() => o.value === e.value), u = V(() => e.value !== -1 && A(o.value) > e.value);
    t({ index: e });
    function c() {
      return s(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: l,
      direction: i,
      activeColor: r,
      inactiveColor: a,
      n: wP,
      classes: SP,
      click: c
    };
  }
});
Cv.render = kP;
var qs = Cv;
oe(qs);
const iI = qs;
var oi = qs;
const PP = {
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
  onClickStep: z()
}, { name: OP, n: TP } = te("steps");
function EP(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.n()),
      style: F({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const kv = ne({
  name: OP,
  props: PP,
  setup(e) {
    const n = V(() => e.active), t = V(() => e.activeColor), o = V(() => e.inactiveColor), r = V(() => e.direction), { bindStep: a } = bP();
    a({
      active: n,
      direction: r,
      activeColor: t,
      inactiveColor: o,
      clickStep: s
    });
    function s(l) {
      y(e.onClickStep, l);
    }
    return { n: TP };
  }
});
kv.render = EP;
var Gs = kv;
oe(Gs);
const sI = Gs;
var ri = Gs;
const IP = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: MP, n: DP } = te("style-provider"), BP = ne({
  name: MP,
  props: IP,
  setup(e, { slots: n }) {
    return () => bd(
      e.tag,
      {
        class: DP(),
        style: Fd(e.styleVars)
      },
      y(n.default)
    );
  }
});
var Nr = BP;
const Gr = [];
function Xs(e) {
  Gr.forEach((t) => document.documentElement.style.removeProperty(t)), Gr.length = 0;
  const n = Fd(e ?? {});
  Object.entries(n).forEach(([t, o]) => {
    document.documentElement.style.setProperty(t, o), Gr.push(t);
  });
}
Xs.Component = Nr;
oe(Nr);
oe(Nr, Xs);
const lI = Nr;
var ai = Xs;
const NP = {
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
  onClick: z(),
  onChange: z(),
  "onUpdate:modelValue": z()
}, { name: VP, n: AP, classes: zP } = te("switch"), LP = (e) => (ht(""), e = e(), gt(), e), RP = /* @__PURE__ */ LP(() => /* @__PURE__ */ N(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ N("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), UP = [
  RP
];
function HP(e, n) {
  const t = ae("var-hover-overlay"), o = ae("var-form-details"), r = Le("ripple"), a = Le("hover");
  return Oe((h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      N(
        "div",
        {
          class: v(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[0] || (n[0] = (...i) => e.switchActive && e.switchActive(...i)),
          style: F(e.styleComputed.switch)
        },
        [
          N(
            "div",
            {
              style: F(e.styleComputed.track),
              class: v(
                e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")])
              )
            },
            null,
            6
            /* CLASS, STYLE */
          ),
          Oe((h(), w(
            "div",
            {
              class: v(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
              style: F(e.styleComputed.ripple)
            },
            [
              N(
                "div",
                {
                  style: F(e.styleComputed.handle),
                  class: v(
                    e.classes(
                      e.n("handle"),
                      e.n("$-elevation--2"),
                      [e.modelValue === e.activeValue, e.n("handle--active")],
                      [e.errorMessage, e.n("handle--error")]
                    )
                  )
                },
                [
                  e.loading ? (h(), w(
                    "span",
                    {
                      key: 0,
                      class: v(e.n("loading")),
                      style: F({
                        width: e.radius,
                        height: e.radius
                      })
                    },
                    UP,
                    6
                    /* CLASS, STYLE */
                  )) : Q("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              ),
              J(t, { hovering: e.hovering }, null, 8, ["hovering"])
            ],
            6
            /* CLASS, STYLE */
          )), [
            [r, {
              disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
            }]
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      J(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  )), [
    [a, e.hover, "desktop"]
  ]);
}
const Pv = ne({
  name: VP,
  components: {
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Ke, Hover: En },
  props: NP,
  setup(e) {
    const { bindForm: n, form: t } = Mn(), { errorMessage: o, validateWithTrigger: r, validate: a, resetValidation: i } = In(), { hovering: s, handleHovering: l } = Gn(), u = V(() => {
      const { size: k, modelValue: T, color: O, closeColor: $, loadingColor: C, activeValue: I } = e;
      return {
        handle: {
          width: ln(k),
          height: ln(k),
          backgroundColor: T === I ? O : $,
          color: C
        },
        ripple: {
          left: T === I ? ln(k, 0.5) : `-${ln(k, 0.5)}`,
          color: T === I ? O : $ || "#999",
          width: ln(k, 2),
          height: ln(k, 2)
        },
        track: {
          height: ln(k, 0.72),
          width: ln(k, 1.9),
          borderRadius: ln(k, 2 / 3),
          filter: T === I || o != null && o.value ? void 0 : "brightness(.6)",
          backgroundColor: T === I ? O : $
        },
        switch: {
          height: ln(k, 1.2),
          width: ln(k, 2)
        }
      };
    }), d = V(() => ln(e.size, 0.8));
    y(n, {
      reset: g,
      validate: f,
      resetValidation: i
    });
    function f() {
      return a(e.rules, e.modelValue);
    }
    function m() {
      return Fe(() => r(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function b(k) {
      const {
        onClick: T,
        onChange: O,
        disabled: $,
        loading: C,
        readonly: I,
        modelValue: P,
        activeValue: D,
        inactiveValue: E,
        "onUpdate:modelValue": H
      } = e;
      if (y(T, k), $ || C || I || t != null && t.disabled.value || t != null && t.readonly.value)
        return;
      const L = P === D ? E : D;
      y(O, L), y(H, L), m();
    }
    function p(k) {
      e.disabled || t != null && t.disabled.value || l(k);
    }
    function g() {
      y(e["onUpdate:modelValue"], e.inactiveValue), i();
    }
    return {
      hovering: s,
      radius: d,
      styleComputed: u,
      errorMessage: o,
      formDisabled: t == null ? void 0 : t.disabled,
      formReadonly: t == null ? void 0 : t.readonly,
      n: AP,
      classes: zP,
      multiplySizeUnit: ln,
      switchActive: b,
      hover: p
    };
  }
});
Pv.render = HP;
var Ks = Pv;
oe(Ks);
const uI = Ks;
var ii = Ks;
const FP = {
  name: [String, Number],
  disabled: Boolean,
  onClick: z()
}, Ov = Symbol("TABS_BIND_TAB_KEY");
function YP() {
  const { childProviders: e, bindChildren: n, length: t } = sn(Ov);
  return {
    length: t,
    tabList: e,
    bindTabList: n
  };
}
function jP() {
  const { parentProvider: e, bindParent: n, index: t } = an(Ov);
  return n || Tn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: t,
    tabs: e,
    bindTabs: n
  };
}
const { name: WP, n: qo, classes: qP } = te("tab");
function GP(e, n) {
  const t = Le("ripple");
  return Oe((h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: F({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: e.disabled }]
  ]);
}
const Tv = ne({
  name: WP,
  directives: { Ripple: Ke },
  props: FP,
  setup(e) {
    const n = S(null), t = V(() => n.value), o = V(() => e.name), r = V(() => e.disabled), { index: a, tabs: i, bindTabs: s } = jP(), { onTabClick: l, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: m, resize: b } = i, p = {
      name: o,
      index: a,
      disabled: r,
      element: t
    };
    s(p), fe(() => [e.name, e.disabled], b);
    function g() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function k() {
      return e.disabled ? f.value : g() ? d.value : c.value;
    }
    function T() {
      return e.disabled ? qo("$-tab--disabled") : g() ? qo("$-tab--active") : qo("$-tab--inactive");
    }
    function O($) {
      const { disabled: C, name: I, onClick: P } = e;
      C || (y(P, I ?? a.value, $), l(p));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: m,
      n: qo,
      classes: qP,
      computeColorStyle: k,
      computeColorClass: T,
      handleClick: O
    };
  }
});
Tv.render = GP;
var Zs = Tv;
oe(Zs);
const dI = Zs;
var si = Zs;
const XP = {
  name: [String, Number]
}, { name: KP, n: ZP, classes: JP } = te("tab-item");
function QP(e, n) {
  const t = ae("var-swipe-item");
  return h(), Se(t, {
    class: v(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ve(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const Ev = ne({
  name: KP,
  components: { VarSwipeItem: go },
  props: XP,
  setup(e) {
    const n = S(!1), t = V(() => e.name), { index: o, bindTabsItems: r } = Jw(), { bindLists: a } = Qw(), i = {
      index: o,
      name: t,
      current: V(() => n.value),
      setCurrent: s
    };
    r(i), a(i);
    function s(l) {
      n.value = l;
    }
    return {
      current: n,
      n: ZP,
      classes: JP
    };
  }
});
Ev.render = QP;
var Js = Ev;
oe(Js);
const cI = Js;
var li = Js;
const _P = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, { name: xP, n: eO, classes: nO } = te("table");
function tO(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: v(e.n("main"))
        },
        [
          N(
            "table",
            {
              class: v(e.n("table")),
              style: F({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              R(e.$slots, "default")
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        2
        /* CLASS */
      ),
      e.$slots.footer ? (h(), w(
        "div",
        {
          key: 0,
          class: v(e.n("footer"))
        },
        [
          R(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Iv = ne({
  name: xP,
  props: _P,
  setup: () => ({
    toSizeUnit: we,
    n: eO,
    classes: nO,
    formatElevation: gn
  })
});
Iv.render = tO;
var Qs = Iv;
oe(Qs);
const fI = Qs;
var ui = Qs;
const oO = {
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
  stickyCssMode: en(_o, "cssMode"),
  stickyZIndex: en(_o, "zIndex"),
  offsetTop: en(_o, "offsetTop"),
  onClick: z(),
  onChange: z(),
  "onUpdate:active": z()
};
var cd = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: rO, n: aO, classes: iO } = te("tabs");
function sO(e, n) {
  return h(), Se(Xt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ve(() => [
      N(
        "div",
        Ne({
          class: e.classes(
            e.n(),
            e.n("$--box"),
            e.n(`--item-${e.itemDirection}`),
            e.n(`--layout-${e.layoutDirection}-padding`),
            e.formatElevation(e.elevation, 4),
            [e.fixedBottom, e.n("--fixed-bottom")],
            [e.safeArea, e.n("--safe-area")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          N(
            "div",
            {
              ref: "scrollerEl",
              class: v(
                e.classes(
                  e.n("tab-wrap"),
                  [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)],
                  e.n(`--layout-${e.layoutDirection}`)
                )
              )
            },
            [
              R(e.$slots, "default"),
              N(
                "div",
                {
                  class: v(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: F({
                    width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                    height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                    transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
                  })
                },
                [
                  N(
                    "div",
                    {
                      class: v(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
                      style: F({ background: e.indicatorColor || e.activeColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["css-mode", "offset-top", "z-index"]);
}
const Mv = ne({
  name: rO,
  components: { VarSticky: yo },
  inheritAttrs: !1,
  props: oO,
  setup(e) {
    const n = S("0px"), t = S("0px"), o = S("0px"), r = S("0px"), a = S(!1), i = S(null), s = V(() => e.active), l = V(() => e.activeColor), u = V(() => e.inactiveColor), d = V(() => e.disabledColor), c = V(() => e.itemDirection), f = S(null), m = V(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: b, bindTabList: p, length: g } = YP();
    p({
      active: s,
      activeColor: l,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: E,
      onTabClick: T
    }), fe(
      () => g.value,
      () => cd(this, null, function* () {
        yield dn(), E();
      })
    ), fe(() => [e.active, e.scrollable], E), pt(E), Oo(E);
    function T(L) {
      var U;
      const ie = (U = L.name.value) != null ? U : L.index.value, { active: G, onChange: W, onClick: Z } = e;
      y(e["onUpdate:active"], ie), y(Z, ie), ie !== G && y(W, ie);
    }
    function O() {
      return b.find(({ name: L }) => e.active === L.value);
    }
    function $(L) {
      return b.find(({ index: U }) => (L ?? e.active) === U.value);
    }
    function C() {
      if (g.value === 0)
        return;
      const { active: L } = e;
      if (vn(L)) {
        const U = ut(L, 0, g.value - 1);
        return y(e["onUpdate:active"], U), $(U);
      }
    }
    function I() {
      a.value = e.scrollable === "always" || b.length >= 5;
    }
    function P({ element: L }) {
      const U = L.value;
      U && (e.layoutDirection === "horizontal" ? (n.value = `${U.offsetWidth}px`, o.value = `${U.offsetLeft}px`) : (t.value = `${U.offsetHeight}px`, r.value = `${U.offsetTop}px`));
    }
    function D({ element: L }) {
      if (!a.value)
        return;
      const U = i.value, ie = L.value;
      if (e.layoutDirection === "horizontal") {
        const G = ie.offsetLeft + ie.offsetWidth / 2 - U.offsetWidth / 2;
        co(U, {
          left: G,
          animation: _r
        });
      } else {
        const G = ie.offsetTop + ie.offsetHeight / 2 - U.offsetHeight / 2;
        co(U, {
          top: G,
          animation: _r
        });
      }
    }
    function E() {
      const L = O() || $() || C();
      !L || L.disabled.value || (I(), P(L), D(L));
    }
    function H() {
      return cd(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: t,
      indicatorX: o,
      indicatorY: r,
      indicatorPosition: m,
      localScrollable: a,
      scrollerEl: i,
      Transition: Ye,
      toSizeUnit: we,
      n: aO,
      classes: iO,
      resize: E,
      resizeSticky: H,
      formatElevation: gn
    };
  }
});
Mv.render = sO;
var _s = Mv;
oe(_s);
const vI = _s;
var di = _s;
const lO = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": z()
};
var uO = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: dO, n: cO } = te("tabs-items");
function fO(e, n) {
  const t = ae("var-swipe");
  return h(), Se(t, {
    class: v(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ve(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const Dv = ne({
  name: dO,
  components: { VarSwipe: ho },
  props: lO,
  setup(e) {
    const n = S(null), { tabItemList: t, bindTabItem: o, length: r } = Zw();
    o({}), fe(() => e.active, l), fe(
      () => r.value,
      () => uO(this, null, function* () {
        yield dn(), l(e.active);
      })
    );
    function a(c) {
      return t.find(({ name: f }) => c === f.value);
    }
    function i(c) {
      return t.find(({ index: f }) => c === f.value);
    }
    function s(c) {
      return a(c) || i(c);
    }
    function l(c) {
      var f;
      const m = s(c);
      m && (t.forEach(({ setCurrent: b }) => b(!1)), m.setCurrent(!0), (f = n.value) == null || f.to(m.index.value));
    }
    function u(c) {
      var f;
      const m = t.find(({ index: p }) => p.value === c), b = (f = m.name.value) != null ? f : m.index.value;
      y(e["onUpdate:active"], b);
    }
    function d() {
      return n.value;
    }
    return {
      swipe: n,
      n: cO,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Dv.render = fO;
var xs = Dv;
oe(xs);
const mI = xs;
var ci = xs, vO = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, mO = {
  "--badge-default-color": "#555"
}, pO = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, hO = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, gO = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, bO = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, yO = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, $O = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, wO = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, SO = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, CO = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, kO = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, PO = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, OO = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, TO = {
  "--popup-content-background-color": "#1e1e1e"
}, EO = {
  "--pull-refresh-background": "#303030"
}, IO = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, MO = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, DO = {
  "--select-scroller-background": "#303030"
}, BO = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, NO = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, VO = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, AO = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, zO = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, LO = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, RO = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, UO = {
  "--tabs-background": "#1e1e1e"
}, HO = {
  "--app-bar-color": "#272727"
}, FO = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, YO = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, jO = {
  "--menu-background-color": "#272727"
}, WO = {
  "--breadcrumb-inactive-color": "#aaa"
}, qO = {
  "--paper-background": "#303030"
}, GO = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, XO = {
  "--link-default-color": "#fff"
}, KO = {
  "--progress-label-color": "#fff"
}, ZO = {
  "--options-text-color": "#fff"
}, JO = {
  "--countdown-text-color": "#fff"
}, QO = {
  "--watermark-content-color": "#ffffff"
}, _O = Object.defineProperty, fd = Object.getOwnPropertySymbols, xO = Object.prototype.hasOwnProperty, eT = Object.prototype.propertyIsEnumerable, vd = (e, n, t) => n in e ? _O(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Pe = (e, n) => {
  for (var t in n || (n = {}))
    xO.call(n, t) && vd(e, t, n[t]);
  if (fd)
    for (var t of fd(n))
      eT.call(n, t) && vd(e, t, n[t]);
  return e;
}, nT = Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe({
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
}, pO), gO), hO), LO), wO), BO), UO), AO), TO), SO), vO), yO), mO), RO), $O), EO), VO), NO), PO), zO), kO), DO), IO), bO), CO), OO), HO), FO), YO), jO), MO), WO), qO), GO), XO), KO), ZO), JO), QO);
const tT = { dark: nT }, pI = null;
var fi = tT;
const Cn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], un = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], md = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], oT = {
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
  "onUpdate:modelValue": z(),
  onChange: z()
}, Bv = (e, n) => e === "24hr" || n === "am", el = (e, n, t) => {
  const o = Cn.findIndex((a) => A(a) === A(t)), r = Bv(e, n) ? t : un[o];
  return {
    hourStr: r,
    hourNum: A(r)
  };
}, fn = (e) => {
  const [n, t, o] = e.split(":");
  return {
    hour: A(n),
    minute: A(t),
    second: A(o)
  };
}, Nv = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, max: s, min: l, disableHour: u } = e, { hourStr: d, hourNum: c } = el(r, a, i);
  let f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (s && !l) {
    const { hour: b, minute: p } = fn(s);
    f = b === c && o > p;
  }
  if (!s && l) {
    const { hour: b, minute: p } = fn(l);
    f = b === c && o < p;
  }
  if (s && l) {
    const { hour: b, minute: p } = fn(s), { hour: g, minute: k } = fn(l);
    f = g === c && o < k || b === c && o > p;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (t = e.allowedTime) == null ? void 0 : t.minutes(o)), f || m;
}, Vv = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, minute: s, max: l, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = el(r, a, i);
  let m = !1, b = !1;
  if (d.includes(c))
    return !0;
  if (l && !u) {
    const { hour: p, minute: g, second: k } = fn(l);
    m = p === f && g < s || g === s && o > k;
  }
  if (!l && u) {
    const { hour: p, minute: g, second: k } = fn(u);
    m = p === f && g > s || g === s && o > k;
  }
  if (l && u) {
    const { hour: p, minute: g, second: k } = fn(l), { hour: T, minute: O, second: $ } = fn(u);
    m = p === f && g < s || T === f && O > s || p === f && g === s && o > k || T === f && O === s && o < $;
  }
  return (n = e.allowedTime) != null && n.seconds && (b = (t = e.allowedTime) == null ? void 0 : t.seconds(o)), m || b;
}, { n: rT, classes: aT } = te("time-picker");
function iT(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.n("clock"))
    },
    [
      N(
        "div",
        {
          class: v(e.n("clock-hand")),
          style: F(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (h(!0), w(
        Be,
        null,
        qe(e.timeScales, (t, o) => (h(), w(
          "div",
          {
            class: v(
              e.classes(
                e.n("clock-item"),
                [e.isActive(o, !1), e.n("clock-item--active")],
                [e.isDisable(t), e.n("clock-item--disable")]
              )
            ),
            key: t,
            style: F(e.getStyle(o, t, !1))
          },
          re(t),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      )),
      e.format === "24hr" && e.type === "hour" ? (h(), w(
        "div",
        {
          key: 0,
          class: v(e.n("clock-inner")),
          ref: "inner"
        },
        [
          (h(!0), w(
            Be,
            null,
            qe(e.hours24, (t, o) => (h(), w(
              "div",
              {
                class: v(
                  e.classes(
                    e.n("clock-item"),
                    [e.isActive(o, !0), e.n("clock-item--active")],
                    [e.isDisable(t), e.n("clock-item--disable")]
                  )
                ),
                key: t,
                style: F(e.getStyle(o, t, !0))
              },
              re(t),
              7
              /* TEXT, CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Av = ne({
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
  setup(e, { emit: n }) {
    const t = S(null), o = S([]), r = S([]), a = V(() => ({
      transform: `rotate(${A(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = V(() => {
      if (e.rad === void 0)
        return;
      const p = e.rad / 30;
      return p >= 0 ? p : p + 12;
    }), s = V(() => e.type === "hour" ? Cn : md), l = (p, g) => {
      p = p ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const k = e.type === "minute" ? Nv : Vv, T = {
        time: A(p),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: A(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: o.value
      };
      return g && e.type === "minute" && Reflect.deleteProperty(T, "minute"), k(T);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const p = e.isInner ? un[i.value] : s.value[i.value];
      return s.value === md ? l() ? "#bdbdbd" : e.color : c(p) ? "#bdbdbd" : e.color;
    }, d = (p, g) => g ? i.value === p && e.isInner : i.value === p && (!e.isInner || e.type !== "hour"), c = (p) => {
      if (e.type === "hour") {
        if (Bv(e.format, e.ampm))
          return o.value.includes(p);
        const g = Cn.findIndex((k) => k === p);
        return r.value.includes(g);
      }
      return l(p, !0);
    }, f = (p, g, k) => {
      const T = 2 * Math.PI / 12 * p - Math.PI / 2, O = 50 * (1 + Math.cos(T)), $ = 50 * (1 + Math.sin(T)), C = () => d(p, k) ? c(g) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: I, color: P } = C();
      return {
        left: `${O}%`,
        top: `${$}%`,
        backgroundColor: I,
        color: P
      };
    }, m = () => {
      const { width: p, height: g } = _e(t.value);
      return {
        width: p,
        height: g
      };
    }, b = () => {
      if (i.value === void 0)
        return;
      const p = e.ampm === "am" ? Cn : un;
      return kt(p[i.value], 2, "0");
    };
    return fe([i, () => e.isInner], ([p, g], [k, T]) => {
      if (p === k && g === T || e.type !== "hour" || i.value === void 0)
        return;
      const $ = g ? un[i.value] : b(), C = e.useSeconds ? `:${e.time.second}` : "", I = `${$}:${e.time.minute}${C}`;
      e.preventNextUpdate || n("update", I), n("change-prevent-update");
    }), fe(
      () => e.rad,
      (p, g) => {
        if (e.type === "hour" || p === void 0 || g === void 0)
          return;
        const k = p / 6 >= 0 ? p / 6 : p / 6 + 60, T = g / 6 >= 0 ? g / 6 : g / 6 + 60;
        if (k === T)
          return;
        let O;
        const { hourStr: $ } = el(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const C = ce().minute(k).format("mm"), I = e.useSeconds ? `:${e.time.second}` : "";
          O = `${$}:${C}${I}`;
        }
        if (e.type === "second") {
          const C = ce().second(k).format("ss"), I = e.useSeconds ? `:${C}` : "";
          O = `${$}:${e.time.minute}${I}`;
        }
        n("update", O);
      }
    ), fe(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([p, g, k]) => {
        if (o.value = [], p && !g) {
          const { hour: T } = fn(p), O = Cn.filter((C) => A(C) > T), $ = un.filter((C) => A(C) > T);
          o.value = [...O, ...$];
        }
        if (!p && g) {
          const { hour: T } = fn(g), O = Cn.filter((C) => A(C) < T), $ = un.filter((C) => A(C) < T);
          o.value = [...O, ...$];
        }
        if (p && g) {
          const { hour: T } = fn(p), { hour: O } = fn(g), $ = Cn.filter((I) => A(I) < O || A(I) > T), C = un.filter((I) => A(I) < O || A(I) > T);
          o.value = [...$, ...C];
        }
        if (k != null && k.hours) {
          const { hours: T } = k, O = Cn.filter((C) => !T(A(C))), $ = un.filter((C) => !T(A(C)));
          o.value = [.../* @__PURE__ */ new Set([...o.value, ...O, ...$])];
        }
        r.value = o.value.map((T) => un.findIndex((O) => T === O)).filter((T) => T >= 0);
      },
      { immediate: !0 }
    ), {
      n: rT,
      classes: aT,
      hours24: un,
      timeScales: s,
      inner: t,
      handStyle: a,
      disableHour: o,
      isActive: d,
      isDisable: c,
      getSize: m,
      getStyle: f,
      activeItemIndex: i
    };
  }
});
Av.render = iT;
var sT = Av;
const { name: lT, n: uT, classes: dT } = te("time-picker"), cT = (e) => (ht(""), e = e(), gt(), e), fT = /* @__PURE__ */ cT(() => /* @__PURE__ */ N(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), vT = { key: 0 };
function mT(e, n) {
  const t = ae("clock");
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      N(
        "div",
        {
          class: v(e.n("title")),
          style: F({ background: e.headerColor || e.color })
        },
        [
          N(
            "div",
            {
              class: v(e.n("title-time"))
            },
            [
              N(
                "div",
                {
                  class: v(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                  onClick: n[0] || (n[0] = (o) => e.checkPanel("hour"))
                },
                re(e.time.hour),
                3
                /* TEXT, CLASS */
              ),
              fT,
              N(
                "div",
                {
                  class: v(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                  onClick: n[1] || (n[1] = (o) => e.checkPanel("minute"))
                },
                re(e.time.minute),
                3
                /* TEXT, CLASS */
              ),
              e.useSeconds ? (h(), w("span", vT, ":")) : Q("v-if", !0),
              e.useSeconds ? (h(), w(
                "div",
                {
                  key: 1,
                  class: v(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                  onClick: n[2] || (n[2] = (o) => e.checkPanel("second"))
                },
                re(e.time.second),
                3
                /* TEXT, CLASS */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.format === "ampm" ? (h(), w(
            "div",
            {
              key: 0,
              class: v(e.n("title-ampm"))
            },
            [
              N(
                "div",
                {
                  class: v(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                  onClick: n[3] || (n[3] = (o) => e.checkAmpm("am"))
                },
                "AM",
                2
                /* CLASS */
              ),
              N(
                "div",
                {
                  class: v(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
                  onClick: n[4] || (n[4] = (o) => e.checkAmpm("pm"))
                },
                "PM",
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      N(
        "div",
        {
          class: v(e.n("body"))
        },
        [
          N(
            "div",
            {
              class: v(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...o) => e.moveHand && e.moveHand(...o)),
              onTouchmove: n[6] || (n[6] = (...o) => e.moveHand && e.moveHand(...o)),
              onTouchend: n[7] || (n[7] = (...o) => e.end && e.end(...o)),
              ref: "container"
            },
            [
              J(Ye, {
                name: `${e.n()}-panel-fade`
              }, {
                default: ve(() => [
                  (h(), Se(t, {
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
                  }, null, 8, ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            34
            /* CLASS, HYDRATE_EVENTS */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const zv = ne({
  name: lT,
  components: { Clock: sT },
  props: oT,
  setup(e) {
    const n = S(null), t = S(null), o = S(null), r = S(!1), a = S(!1), i = S(!1), s = S(!1), l = S(!1), u = S(!1), d = S(!1), c = S(0), f = S(0), m = S(), b = S("hour"), p = S("am"), g = S({
      hour: "00",
      minute: "00",
      second: "00"
    }), k = je({
      x: 0,
      y: 0
    }), T = je({
      x: [],
      y: []
    }), O = V(() => b.value === "hour" ? m.value : b.value === "minute" ? c.value : f.value);
    fe(
      () => e.modelValue,
      (M) => {
        if (M) {
          const { hour: x, minute: q, second: Y } = fn(M), X = ce().hour(x).format("hh"), ee = ce().hour(x).format("HH"), pe = ce().minute(q).format("mm"), ke = ce().second(Y).format("ss");
          m.value = (X === "12" ? 0 : A(X)) * 30, c.value = A(pe) * 6, f.value = A(ke) * 6, g.value = H(M), e.format !== "24hr" && (p.value = kt(`${x}`, 2, "0") === ee && un.includes(ee) ? "pm" : "am"), r.value = e.format === "24hr" && un.includes(ee);
        }
      },
      { immediate: !0 }
    );
    function $(M) {
      y(e["onUpdate:modelValue"], M), y(e.onChange, M);
    }
    function C(M) {
      return M * 57.29577951308232;
    }
    function I(M) {
      s.value = !1, d.value = !1, b.value = M;
    }
    function P(M) {
      const { disableHour: x } = o.value, q = Cn.findIndex((ee) => A(ee) === A(g.value.hour)), Y = M === "am" ? Cn : un;
      return [...Y.slice(q), ...Y.slice(0, q)].find((ee, pe) => (a.value = pe !== 0, !x.includes(ee)));
    }
    function D(M) {
      if (e.readonly)
        return;
      p.value = M;
      const x = P(M);
      if (!x)
        return;
      const q = e.useSeconds ? `:${g.value.second}` : "", Y = `${kt(x, 2, "0")}:${g.value.minute}${q}`;
      $(Y);
    }
    function E(M, x) {
      const q = M >= T.x[0] && M <= T.x[1], Y = x >= T.y[0] && x <= T.y[1];
      return q && Y;
    }
    function H(M) {
      const x = e.format === "24hr" ? "HH" : "hh", { hour: q, minute: Y, second: X } = fn(M);
      return {
        hour: ce().hour(q).format(x),
        minute: ce().minute(Y).format("mm"),
        second: ce().second(X).format("ss")
      };
    }
    function L(M) {
      const x = M / 30;
      return x >= 0 ? x : x + 12;
    }
    function U() {
      const { width: M, height: x } = o.value.getSize(), q = k.x - M / 2 - 8, Y = k.x + M / 2 + 8, X = k.y - x / 2 - 8, ee = k.y + x / 2 + 8;
      return {
        rangeXMin: q,
        rangeXMax: Y,
        rangeYMin: X,
        rangeYMax: ee
      };
    }
    function ie(M, x, q) {
      const { disableHour: Y } = o.value;
      i.value = E(M, x);
      const X = Math.round(q / 30) * 30 + 90, ee = L(X), pe = r.value ? Cn[ee] : un[ee];
      if (Y.includes(pe) || (r.value = e.format === "24hr" ? E(M, x) : !1), r.value !== i.value)
        return;
      const ke = r.value || p.value === "pm" ? un[ee] : Cn[ee];
      u.value = Y.includes(ke), !u.value && (m.value = X, s.value = !0);
    }
    function G(M) {
      const { disableHour: x } = o.value, q = Math.round(M / 6) * 6 + 90, X = {
        time: q / 6 >= 0 ? q / 6 : q / 6 + 60,
        format: e.format,
        ampm: p.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: x,
        allowedTime: e.allowedTime
      };
      d.value = Nv(X), !d.value && (c.value = q, l.value = !0);
    }
    function W(M) {
      const { disableHour: x } = o.value, q = Math.round(M / 6) * 6 + 90, X = {
        time: q / 6 >= 0 ? q / 6 : q / 6 + 60,
        format: e.format,
        ampm: p.value,
        hour: g.value.hour,
        minute: A(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: x,
        allowedTime: e.allowedTime
      };
      Vv(X) || (f.value = q);
    }
    function Z() {
      const { left: M, top: x, width: q, height: Y } = _e(n.value);
      if (k.x = M + q / 2, k.y = x + Y / 2, b.value === "hour" && e.format === "24hr") {
        const { rangeXMin: X, rangeXMax: ee, rangeYMin: pe, rangeYMax: ke } = U();
        T.x = [X, ee], T.y = [pe, ke];
      }
    }
    function _(M) {
      if (M.preventDefault(), e.readonly)
        return;
      Z();
      const { clientX: x, clientY: q } = M.touches[0], Y = x - k.x, X = q - k.y, ee = Math.round(C(Math.atan2(X, Y)));
      b.value === "hour" ? ie(x, q, ee) : b.value === "minute" ? G(ee) : W(ee);
    }
    function j() {
      if (!e.readonly) {
        if (b.value === "hour" && s.value) {
          b.value = "minute";
          return;
        }
        b.value === "minute" && e.useSeconds && l.value && (b.value = "second");
      }
    }
    function B() {
      a.value = !1;
    }
    return {
      getRad: O,
      time: g,
      container: n,
      inner: o,
      picker: t,
      isInner: r,
      type: b,
      ampm: p,
      isPreventNextUpdate: a,
      n: uT,
      classes: dT,
      moveHand: _,
      checkPanel: I,
      checkAmpm: D,
      end: j,
      update: $,
      changePreventUpdate: B,
      formatElevation: gn
    };
  }
});
zv.render = mT;
var nl = zv;
oe(nl);
const hI = nl;
var vi = nl;
const pT = {
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
  onBeforeFilter: z(),
  onBeforeRead: z(),
  onAfterRead: z(),
  onBeforeRemove: z(),
  onRemove: z(),
  onOversize: z(),
  "onUpdate:modelValue": z()
};
var Xr = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: hT, n: gT, classes: bT } = te("uploader");
let yT = 0;
const $T = ["onClick"], wT = ["onClick"], ST = ["src", "alt"], CT = ["multiple", "accept", "capture", "disabled"], kT = ["src"];
function PT(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = ae("var-popup"), i = Le("ripple"), s = Le("hover");
  return h(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      N(
        "div",
        {
          class: v(e.n("file-list"))
        },
        [
          (h(!0), w(
            Be,
            null,
            qe(e.files, (l) => Oe((h(), w("div", {
              class: v(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [l.state === "loading", e.n("--loading")])),
              key: l.id,
              onClick: (u) => e.preview(l)
            }, [
              N(
                "div",
                {
                  class: v(e.n("file-name"))
                },
                re(l.name || l.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (h(), w("div", {
                key: 0,
                class: v(e.n("file-close")),
                onClick: On((u) => e.handleRemove(l), ["stop"])
              }, [
                J(t, {
                  class: v(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, wT)) : Q("v-if", !0),
              l.cover ? (h(), w("img", {
                key: 1,
                class: v(e.n("file-cover")),
                style: F({ objectFit: l.fit }),
                src: l.cover,
                alt: l.name
              }, null, 14, ST)) : Q("v-if", !0),
              N(
                "div",
                {
                  class: v(e.n("file-indicator"))
                },
                [
                  N(
                    "div",
                    {
                      class: v(
                        e.classes(e.n("progress"), [l.state === "success", e.n("--success")], [l.state === "error", e.n("--error")])
                      ),
                      style: F({ width: l.state === "success" || l.state === "error" ? "100%" : `${l.progress}%` })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )
            ], 10, $T)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Oe((h(), w(
            "div",
            {
              key: 0,
              class: v(
                e.classes(
                  [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`],
                  [e.disabled || e.formDisabled, e.n("--disabled")]
                )
              ),
              onClick: n[1] || (n[1] = (...l) => e.chooseFile && e.chooseFile(...l))
            },
            [
              N("input", {
                ref: "input",
                type: "file",
                class: v(e.n("action-input")),
                multiple: e.multiple,
                accept: e.accept,
                capture: e.capture,
                disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
                onChange: n[0] || (n[0] = (...l) => e.handleChange && e.handleChange(...l))
              }, null, 42, CT),
              R(e.$slots, "default", {}, () => [
                J(t, {
                  class: v(e.n("action-icon")),
                  "var-uploader-cover": "",
                  name: "plus"
                }, null, 8, ["class"]),
                J(o, {
                  hovering: e.hovering && !e.disabled && !e.formDisabled
                }, null, 8, ["hovering"])
              ])
            ],
            2
            /* CLASS */
          )), [
            [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default }],
            [s, e.handleHovering, "desktop"]
          ]) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      J(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, xo({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: ve(() => [
            R(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      J(a, {
        class: v(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (l) => e.showPreview = l),
        onClosed: n[3] || (n[3] = (l) => e.currentPreview = null)
      }, {
        default: ve(() => {
          var l, u;
          return [
            e.currentPreview && e.isHTMLSupportVideo((l = e.currentPreview) == null ? void 0 : l.url) ? (h(), w("video", {
              key: 0,
              class: v(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, kT)) : Q("v-if", !0)
          ];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class", "show"])
    ],
    2
    /* CLASS */
  );
}
const Lv = ne({
  name: hT,
  directives: { Ripple: Ke, Hover: En },
  components: {
    VarIcon: Ue,
    VarPopup: ct,
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  props: pT,
  setup(e) {
    const n = S(null), t = S(!1), o = S(null), r = V(() => {
      const {
        maxlength: _,
        modelValue: { length: j }
      } = e;
      return vn(_) ? `${j} / ${_}` : "";
    }), { form: a, bindForm: i } = Mn(), {
      errorMessage: s,
      validateWithTrigger: l,
      validate: u,
      // expose
      resetValidation: d
    } = In(), { hovering: c, handleHovering: f } = Gn(), m = V(() => {
      const { modelValue: _, hideList: j } = e;
      return j ? [] : _;
    });
    let b = !1;
    const p = {
      getSuccess: E,
      getError: H,
      getLoading: L
    };
    y(i, {
      validate: W,
      resetValidation: d,
      reset: Z
    }), fe(
      () => e.modelValue,
      () => {
        !b && G("onChange"), b = !1;
      },
      { deep: !0 }
    );
    function k(_) {
      const { disabled: j, previewed: B } = e;
      if (a != null && a.disabled.value || j || !B)
        return;
      const { url: M } = _;
      if (Qe(M) && Ml(M)) {
        bo(M);
        return;
      }
      Qe(M) && Dl(M) && (o.value = _, t.value = !0);
    }
    function T(_) {
      return {
        id: yT++,
        url: "",
        cover: "",
        name: _.name,
        file: _,
        progress: 0
      };
    }
    function O(_) {
      const j = _.target, { files: B } = j;
      return Array.from(B);
    }
    function $(_) {
      return new Promise((j) => {
        if (!_.file.type.startsWith("image")) {
          j(_);
          return;
        }
        const B = new FileReader();
        B.onload = () => {
          const M = B.result;
          _.cover = M, _.url = M, j(_);
        }, B.readAsDataURL(_.file);
      });
    }
    function C(_) {
      return _.map($);
    }
    function I(_) {
      const { onBeforeRead: j } = e;
      return _.map(
        (B) => new Promise((M) => {
          j || M({
            valid: !0,
            varFile: B
          });
          const x = Go(y(j, je(B)));
          Promise.all(x).then((q) => {
            M({
              valid: q.every(Boolean),
              varFile: B
            });
          });
        })
      );
    }
    function P(_) {
      return Xr(this, null, function* () {
        const { maxsize: j, maxlength: B, modelValue: M, onOversize: x, onAfterRead: q, onBeforeFilter: Y, readonly: X, disabled: ee } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || ee || X)
          return;
        const pe = (he) => he.filter((De) => De.file.size > A(j) ? (y(x, je(De)), !1) : !0), ke = (he) => {
          const De = Math.min(he.length, A(B) - M.length);
          return he.slice(0, De);
        }, Re = (he) => Xr(this, null, function* () {
          if (!Y)
            return he;
          const De = Go(Y);
          for (const We of De)
            he = yield We(he);
          return he;
        });
        let de = O(_).map(T);
        de = yield Re(de), de = j != null ? pe(de) : de, de = B != null ? ke(de) : de;
        const Ce = yield Promise.all(C(de)), le = (yield Promise.all(I(Ce))).filter(({ valid: he }) => he).map(({ varFile: he }) => he);
        y(e["onUpdate:modelValue"], [...M, ...le]), _.target.value = "", le.forEach((he) => y(q, je(he)));
      });
    }
    function D(_) {
      return Xr(this, null, function* () {
        const { disabled: j, readonly: B, modelValue: M, onBeforeRemove: x, onRemove: q } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || j || B)
          return;
        if (x) {
          const X = Go(y(x, je(_)));
          if ((yield Promise.all(X)).some((ee) => !ee))
            return;
        }
        const Y = M.filter((X) => X !== _);
        y(q, je(_)), G("onRemove"), y(e["onUpdate:modelValue"], Y);
      });
    }
    function E() {
      return e.modelValue.filter((_) => _.state === "success");
    }
    function H() {
      return e.modelValue.filter((_) => _.state === "error");
    }
    function L() {
      return e.modelValue.filter((_) => _.state === "loading");
    }
    function U() {
      n.value.click();
    }
    function ie() {
      o.value = null, t.value = !1, bo.close();
    }
    function G(_) {
      Fe(() => {
        const { validateTrigger: j, rules: B, modelValue: M } = e;
        l(j, _, B, M, p);
      });
    }
    function W() {
      return u(e.rules, e.modelValue, p);
    }
    function Z() {
      b = !0, y(e["onUpdate:modelValue"], []), d();
    }
    return {
      input: n,
      files: m,
      showPreview: t,
      currentPreview: o,
      errorMessage: s,
      maxlengthText: r,
      hovering: c,
      formDisabled: a == null ? void 0 : a.disabled,
      formReadonly: a == null ? void 0 : a.readonly,
      n: gT,
      classes: bT,
      formatElevation: gn,
      toNumber: A,
      handleHovering: f,
      isHTMLSupportVideo: Dl,
      isHTMLSupportImage: Ml,
      preview: k,
      handleChange: P,
      handleRemove: D,
      getSuccess: E,
      getError: H,
      getLoading: L,
      validate: W,
      resetValidation: d,
      reset: Z,
      chooseFile: U,
      closePreview: ie,
      toSizeUnit: we
    };
  }
});
Lv.render = PT;
var tl = Lv;
oe(tl);
const gI = tl;
var mi = tl;
const OT = {
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
var TT = Object.defineProperty, ET = Object.defineProperties, IT = Object.getOwnPropertyDescriptors, pd = Object.getOwnPropertySymbols, MT = Object.prototype.hasOwnProperty, DT = Object.prototype.propertyIsEnumerable, hd = (e, n, t) => n in e ? TT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, BT = (e, n) => {
  for (var t in n || (n = {}))
    MT.call(n, t) && hd(e, t, n[t]);
  if (pd)
    for (var t of pd(n))
      DT.call(n, t) && hd(e, t, n[t]);
  return e;
}, NT = (e, n) => ET(e, IT(n)), gd = (e, n, t) => new Promise((o, r) => {
  var a = (l) => {
    try {
      s(t.next(l));
    } catch (u) {
      r(u);
    }
  }, i = (l) => {
    try {
      s(t.throw(l));
    } catch (u) {
      r(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  s((t = t.apply(e, n)).next());
});
const { name: VT, n: AT, classes: zT } = te("watermark"), LT = { ref: "svgRef" }, RT = ["viewBox", "width", "height"], UT = ["width", "height"], HT = ["href", "xlink:href", "x", "y", "width", "height"];
function FT(e, n) {
  return h(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default"),
      (h(), Se(Kn, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        N(
          "div",
          {
            ref: "containerRef",
            class: v(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: F({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            Oe(N(
              "div",
              LT,
              [
                (h(), w("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
                  width: `${e.width + e.gapX}`,
                  height: `${e.height + e.gapY}`,
                  style: F({
                    padding: `0 ${e.gapX}px ${e.gapY}px 0`,
                    opacity: e.opacity
                  })
                }, [
                  e.showContent() ? (h(), w("foreignObject", {
                    key: 0,
                    x: "0",
                    y: "0",
                    width: e.width,
                    height: e.height
                  }, [
                    N(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: F({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        R(e.$slots, "content", {}, () => [
                          N(
                            "span",
                            {
                              style: F(NT(BT({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            re(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, UT)) : Q("v-if", !0),
                  !e.$slots.content && e.image ? (h(), w("image", {
                    key: 1,
                    href: e.imageUrl,
                    "xlink:href": e.imageUrl,
                    x: e.offsetX,
                    y: e.offsetY,
                    width: e.width,
                    height: e.height,
                    style: F({
                      transform: `rotate(${e.rotate}deg)`,
                      transformOrigin: "center"
                    })
                  }, null, 12, HT)) : Q("v-if", !0)
                ], 12, RT))
              ],
              512
              /* NEED_PATCH */
            ), [
              [Rn, !1]
            ])
          ],
          6
          /* CLASS, STYLE */
        )
      ], 8, ["disabled"]))
    ],
    2
    /* CLASS */
  );
}
const Rv = ne({
  name: VT,
  props: OT,
  setup(e, { slots: n }) {
    const t = S(""), o = S(""), r = S(""), a = S(null), i = S(null);
    fe(
      () => [
        e.image,
        e.font,
        e.content,
        e.height,
        e.width,
        e.rotate,
        e.gapX,
        e.gapY,
        e.offsetX,
        e.offsetY,
        e.opacity
      ],
      c,
      {
        deep: !0
      }
    ), So(c), Co(d);
    function s() {
      return !!(n.content || e.content && !e.image);
    }
    function l() {
      return gd(this, null, function* () {
        return new Promise((f) => {
          const m = document.createElement("canvas"), b = m.getContext("2d"), p = new Image();
          p.crossOrigin = "anonymous", p.referrerPolicy = "no-referrer", p.src = e.image, p.onload = () => {
            m.width = p.width, m.height = p.height, b.drawImage(p, 0, 0), f(m.toDataURL());
          };
        });
      });
    }
    function u(f) {
      const m = new Blob([f], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(m);
    }
    function d() {
      t.value && URL.revokeObjectURL(t.value);
    }
    function c() {
      return gd(this, null, function* () {
        r.value = Tt(i.value).color, e.image && (o.value = yield l()), yield Fe(), d(), t.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: t,
      imageUrl: o,
      textColor: r,
      n: AT,
      classes: zT,
      showContent: s,
      resize: c
    };
  }
});
Rv.render = FT;
var ol = Rv;
oe(ol);
const bI = ol;
var pi = ol;
const YT = "2.16.7";
function jT(e) {
  Jr.install && e.use(Jr), Qr.install && e.use(Qr), ea.install && e.use(ea), na.install && e.use(na), ta.install && e.use(ta), rr.install && e.use(rr), oa.install && e.use(oa), ra.install && e.use(ra), aa.install && e.use(aa), ia.install && e.use(ia), mn.install && e.use(mn), sa.install && e.use(sa), la.install && e.use(la), ar.install && e.use(ar), ir.install && e.use(ir), ua.install && e.use(ua), sr.install && e.use(sr), da.install && e.use(da), ca.install && e.use(ca), fa.install && e.use(fa), wn.install && e.use(wn), ha.install && e.use(ha), Sa.install && e.use(Sa), ka.install && e.use(ka), Pa.install && e.use(Pa), Oa.install && e.use(Oa), vr.install && e.use(vr), Ma.install && e.use(Ma), Da.install && e.use(Da), Ba.install && e.use(Ba), pn.install && e.use(pn), En.install && e.use(En), zn.install && e.use(zn), Ue.install && e.use(Ue), Na.install && e.use(Na), bo.install && e.use(bo), Va.install && e.use(Va), Aa.install && e.use(Aa), pr.install && e.use(pr), fo.install && e.use(fo), za.install && e.use(za), La.install && e.use(La), Ut.install && e.use(Ut), Ra.install && e.use(Ra), Zr.install && e.use(Zr), $o.install && e.use($o), Ua.install && e.use(Ua), Ha.install && e.use(Ha), Fa.install && e.use(Fa), Ya.install && e.use(Ya), ja.install && e.use(ja), ct.install && e.use(ct), Wa.install && e.use(Wa), qa.install && e.use(qa), Ga.install && e.use(Ga), Xa.install && e.use(Xa), Ka.install && e.use(Ka), Za.install && e.use(Za), Ke.install && e.use(Ke), Ja.install && e.use(Ja), Qa.install && e.use(Qa), _a.install && e.use(_a), xa.install && e.use(xa), ni.install && e.use(ni), ti.install && e.use(ti), oi.install && e.use(oi), ri.install && e.use(ri), yo.install && e.use(yo), ai.install && e.use(ai), ho.install && e.use(ho), go.install && e.use(go), ii.install && e.use(ii), si.install && e.use(si), li.install && e.use(li), ui.install && e.use(ui), di.install && e.use(di), ci.install && e.use(ci), fi.install && e.use(fi), vi.install && e.use(vi), mr.install && e.use(mr), mi.install && e.use(mi), pi.install && e.use(pi);
}
const yI = {
  version: YT,
  install: jT,
  ActionSheet: Jr,
  AppBar: Qr,
  Avatar: ea,
  AvatarGroup: na,
  BackTop: ta,
  Badge: rr,
  BottomNavigation: oa,
  BottomNavigationItem: ra,
  Breadcrumb: aa,
  Breadcrumbs: ia,
  Button: mn,
  ButtonGroup: sa,
  Card: la,
  Cell: ar,
  Checkbox: ir,
  CheckboxGroup: ua,
  Chip: sr,
  Col: da,
  Collapse: ca,
  CollapseItem: fa,
  Context: wn,
  Countdown: ha,
  Counter: Sa,
  DatePicker: ka,
  Dialog: Pa,
  Divider: Oa,
  Drag: vr,
  Ellipsis: Ma,
  Fab: Da,
  Form: Ba,
  FormDetails: pn,
  Hover: En,
  HoverOverlay: zn,
  Icon: Ue,
  Image: Na,
  ImagePreview: bo,
  IndexAnchor: Va,
  IndexBar: Aa,
  Input: pr,
  Lazy: fo,
  Link: za,
  List: La,
  Loading: Ut,
  LoadingBar: Ra,
  Locale: Zr,
  Menu: $o,
  Option: Ua,
  Overlay: Ha,
  Pagination: Fa,
  Paper: Ya,
  Picker: ja,
  Popup: ct,
  Progress: Wa,
  PullRefresh: qa,
  Radio: Ga,
  RadioGroup: Xa,
  Rate: Ka,
  Result: Za,
  Ripple: Ke,
  Row: Ja,
  Select: Qa,
  Skeleton: _a,
  Slider: xa,
  Snackbar: ni,
  Space: ti,
  Step: oi,
  Steps: ri,
  Sticky: yo,
  StyleProvider: ai,
  Swipe: ho,
  SwipeItem: go,
  Switch: ii,
  Tab: si,
  TabItem: li,
  Table: ui,
  Tabs: di,
  TabsItems: ci,
  Themes: fi,
  TimePicker: vi,
  Tooltip: mr,
  Uploader: mi,
  Watermark: pi
};
export {
  Jr as ActionSheet,
  Qr as AppBar,
  ea as Avatar,
  na as AvatarGroup,
  ta as BackTop,
  rr as Badge,
  oa as BottomNavigation,
  ra as BottomNavigationItem,
  aa as Breadcrumb,
  ia as Breadcrumbs,
  mn as Button,
  sa as ButtonGroup,
  la as Card,
  ar as Cell,
  ir as Checkbox,
  ua as CheckboxGroup,
  sr as Chip,
  da as Col,
  ca as Collapse,
  fa as CollapseItem,
  wn as Context,
  ha as Countdown,
  Sa as Counter,
  ka as DatePicker,
  Pa as Dialog,
  Oa as Divider,
  vr as Drag,
  Ma as Ellipsis,
  Da as Fab,
  Ba as Form,
  pn as FormDetails,
  En as Hover,
  zn as HoverOverlay,
  Ue as Icon,
  Na as Image,
  bo as ImagePreview,
  Va as IndexAnchor,
  Aa as IndexBar,
  pr as Input,
  fo as Lazy,
  za as Link,
  La as List,
  Ut as Loading,
  Ra as LoadingBar,
  Zr as Locale,
  $o as Menu,
  Ua as Option,
  Ha as Overlay,
  xr as PIXEL,
  Fa as Pagination,
  Ya as Paper,
  ja as Picker,
  ct as Popup,
  Wa as Progress,
  qa as PullRefresh,
  Ga as Radio,
  Xa as RadioGroup,
  Ka as Rate,
  Za as Result,
  Ke as Ripple,
  Ja as Row,
  yv as SNACKBAR_TYPE,
  Qa as Select,
  _a as Skeleton,
  xa as Slider,
  ni as Snackbar,
  ti as Space,
  oi as Step,
  ri as Steps,
  yo as Sticky,
  ai as StyleProvider,
  ho as Swipe,
  go as SwipeItem,
  ii as Switch,
  si as Tab,
  li as TabItem,
  ui as Table,
  di as Tabs,
  ci as TabsItems,
  fi as Themes,
  vi as TimePicker,
  mr as Tooltip,
  mi as Uploader,
  pi as Watermark,
  JT as _ActionSheetComponent,
  QT as _AppBarComponent,
  xT as _AvatarComponent,
  eE as _AvatarGroupComponent,
  aE as _BackTopComponent,
  iE as _BadgeComponent,
  sE as _BottomNavigationComponent,
  lE as _BottomNavigationItemComponent,
  uE as _BreadcrumbComponent,
  dE as _BreadcrumbsComponent,
  rE as _ButtonComponent,
  cE as _ButtonGroupComponent,
  fE as _CardComponent,
  vE as _CellComponent,
  pE as _CheckboxComponent,
  hE as _CheckboxGroupComponent,
  gE as _ChipComponent,
  bE as _ColComponent,
  yE as _CollapseComponent,
  $E as _CollapseItemComponent,
  qT as _ContextComponent,
  wE as _CountdownComponent,
  SE as _CounterComponent,
  CE as _DatePickerComponent,
  kE as _DialogComponent,
  PE as _DividerComponent,
  OE as _DragComponent,
  EE as _EllipsisComponent,
  IE as _FabComponent,
  ME as _FormComponent,
  mE as _FormDetailsComponent,
  oE as _HoverComponent,
  tE as _HoverOverlayComponent,
  KT as _IconComponent,
  DE as _ImageComponent,
  VE as _ImagePreviewComponent,
  zE as _IndexAnchorComponent,
  LE as _IndexBarComponent,
  RE as _InputComponent,
  _T as _LazyComponent,
  UE as _LinkComponent,
  HE as _ListComponent,
  FE as _LoadingBarComponent,
  nE as _LoadingComponent,
  ZT as _LocaleComponent,
  YE as _MenuComponent,
  jE as _OptionComponent,
  WE as _OverlayComponent,
  qE as _PaginationComponent,
  GE as _PaperComponent,
  XE as _PickerComponent,
  XT as _PopupComponent,
  KE as _ProgressComponent,
  ZE as _PullRefreshComponent,
  JE as _RadioComponent,
  QE as _RadioGroupComponent,
  _E as _RateComponent,
  xE as _ResultComponent,
  GT as _RippleComponent,
  eI as _RowComponent,
  nI as _SelectComponent,
  tI as _SkeletonComponent,
  oI as _SliderComponent,
  rI as _SnackbarComponent,
  aI as _SpaceComponent,
  iI as _StepComponent,
  sI as _StepsComponent,
  AE as _StickyComponent,
  lI as _StyleProviderComponent,
  BE as _SwipeComponent,
  NE as _SwipeItemComponent,
  uI as _SwitchComponent,
  dI as _TabComponent,
  cI as _TabItemComponent,
  fI as _TableComponent,
  vI as _TabsComponent,
  mI as _TabsItemsComponent,
  pI as _ThemesComponent,
  hI as _TimePickerComponent,
  TE as _TooltipComponent,
  gI as _UploaderComponent,
  bI as _WatermarkComponent,
  rp as actionSheetProps,
  Pi as add,
  gp as appBarProps,
  Zp as avatarGroupProps,
  Fp as avatarProps,
  Nh as backTopProps,
  Rh as badgeProps,
  xh as bottomNavigationItemProps,
  jh as bottomNavigationProps,
  ig as breadcrumbProps,
  vg as breadcrumbsProps,
  Ph as buttonProps,
  Sg as cardProps,
  Ig as cellProps,
  n0 as checkboxGroupProps,
  Hg as checkboxProps,
  i0 as chipProps,
  d0 as colProps,
  S0 as collapseItemProps,
  g0 as collapseProps,
  T0 as countdownProps,
  kb as counterProps,
  qb as datePickerProps,
  yI as default,
  Ze as defaultLazyOptions,
  wy as dialogProps,
  Ly as dividerProps,
  Yy as dragProps,
  jd as enUS,
  Vg as formDetailsProps,
  P$ as formProps,
  Vd as iconProps,
  Zd as imageCache,
  J$ as imagePreviewProps,
  I$ as imageProps,
  hw as indexAnchorProps,
  ww as indexBarProps,
  Aw as inputProps,
  jT as install,
  jw as linkProps,
  Kw as listProps,
  rS as loadingBarProps,
  rt as loadingProps,
  mS as menuProps,
  qd as merge,
  wS as optionProps,
  OS as overlayProps,
  xe as pack,
  Wd as packs,
  ES as paginationProps,
  VS as paperProps,
  jS as pickerProps,
  To as popupProps,
  xS as progressProps,
  dC as pullRefreshProps,
  wC as radioGroupProps,
  mC as radioProps,
  OC as rateProps,
  dk as resultProps,
  pk as rowProps,
  kk as selectProps,
  Mk as skeletonProps,
  Ak as sliderProps,
  pv as snackbarProps,
  cP as spaceProps,
  gP as stepProps,
  PP as stepsProps,
  _o as stickyProps,
  IP as styleProviderProps,
  kf as swipeProps,
  NP as switchProps,
  XP as tabItemProps,
  FP as tabProps,
  _P as tableProps,
  lO as tabsItemsProps,
  oO as tabsProps,
  oT as timePickerProps,
  l$ as tooltipProps,
  pT as uploaderProps,
  Oi as use,
  Gn as useHoverOverlay,
  ki as useLocale,
  YT as version,
  Ci as zhCN
};
