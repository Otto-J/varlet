import { reactive as je, onMounted as $o, nextTick as Fe, onActivated as mt, isRef as Hv, watch as fe, onBeforeUnmount as mr, onDeactivated as Wt, onUnmounted as wo, inject as Fv, getCurrentInstance as qt, computed as V, ref as w, unref as eo, provide as Yv, isVNode as jv, Comment as Wv, Fragment as Be, createApp as qv, h as bd, onBeforeMount as Gv, defineComponent as ne, createVNode as J, Teleport as Xn, Transition as Ye, withDirectives as Oe, vShow as Rn, mergeProps as Ne, openBlock as h, createBlock as Se, resolveDynamicComponent as Gt, normalizeClass as v, normalizeStyle as F, resolveComponent as ae, resolveDirective as Le, withCtx as ve, createElementVNode as N, renderSlot as R, toDisplayString as re, createElementBlock as S, renderList as Ge, createCommentVNode as _, onUpdated as So, createTextVNode as Te, pushScopeId as pt, popScopeId as ht, withModifiers as On, normalizeProps as it, guardReactiveProps as Co, vModelText as Xv, createSlots as Qo, withKeys as rs, toRaw as as, TransitionGroup as Kv } from "vue";
const yd = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, FT = je(yd);
var wn = je(yd), Zv = Object.defineProperty, Jv = Object.defineProperties, Qv = Object.getOwnPropertyDescriptors, is = Object.getOwnPropertySymbols, _v = Object.prototype.hasOwnProperty, xv = Object.prototype.propertyIsEnumerable, ls = (e, n, t) => n in e ? Zv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, em = (e, n) => {
  for (var t in n || (n = {}))
    _v.call(n, t) && ls(e, t, n[t]);
  if (is)
    for (var t of is(n))
      xv.call(n, t) && ls(e, t, n[t]);
  return e;
}, nm = (e, n) => Jv(e, Qv(n)), Qe = (e) => typeof e == "string", pi = (e) => typeof e == "boolean", vn = (e) => typeof e == "number", hi = (e) => Object.prototype.toString.call(e) === "[object Object]", tm = (e) => typeof e == "object" && e !== null, Xt = (e) => typeof e == "function", Me = (e) => Array.isArray(e), om = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Fn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, gi = (e) => e === window, rm = () => gt() && "ontouchstart" in window, A = (e) => e == null ? 0 : Qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : pi(e) ? Number(e) : e, _o = (e, n) => {
  if (e.length) {
    const t = e.indexOf(n);
    if (t > -1)
      return e.splice(t, 1);
  }
}, bi = (e, n = 200) => {
  let t, o = 0;
  return function r(...a) {
    const i = Date.now(), l = i - o;
    o || (o = i), t && window.clearTimeout(t), l >= n ? (e.apply(this, a), o = i) : t = window.setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
}, gt = () => typeof window < "u", ss = (e) => [...new Set(e)], am = (e) => yi(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), yi = (e) => e.replace(/-(\w)/g, (n, t) => t.toUpperCase()), im = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), lm = (e, n, t = "start") => {
  let o = t === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && o >= 0 && o <= e.length - 1; ) {
    if (n(e[o], o, e))
      return [e[o], o];
    t === "start" ? o++ : o--;
  }
  return [null, -1];
}, Wo = (e) => Me(e) ? e : [e], st = (e, n, t) => Math.min(t, Math.max(n, e)), sm = (e, n) => st(e, 0, n.length - 1), $d = () => typeof globalThis < "u" ? globalThis : gt() ? window : typeof global < "u" ? global : self, ao = (e) => {
  const n = $d();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, us = (e) => {
  const n = $d();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, qo = () => new Promise((e) => {
  ao(e);
}), dn = () => new Promise((e) => {
  ao(() => {
    ao(e);
  });
}), Ot = (e) => window.getComputedStyle(e), _e = (e) => {
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
    return nm(em({}, o), {
      toJSON: () => o
    });
  }
  return e.getBoundingClientRect();
}, um = (e) => {
  const { top: n, bottom: t, left: o, right: r } = _e(e), { width: a, height: i } = _e(window), l = o <= a && r >= 0, s = n <= i && t >= 0;
  return l && s;
}, dm = Object.defineProperty, xo = Object.getOwnPropertySymbols, wd = Object.prototype.hasOwnProperty, Sd = Object.prototype.propertyIsEnumerable, ds = (e, n, t) => n in e ? dm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, cm = (e, n) => {
  for (var t in n || (n = {}))
    wd.call(n, t) && ds(e, t, n[t]);
  if (xo)
    for (var t of xo(n))
      Sd.call(n, t) && ds(e, t, n[t]);
  return e;
}, fm = (e, n) => {
  var t = {};
  for (var o in e)
    wd.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && xo)
    for (var o of xo(e))
      n.indexOf(o) < 0 && Sd.call(e, o) && (t[o] = e[o]);
  return t;
};
function rn(e) {
  let n = !1;
  $o(() => {
    e(), Fe(() => {
      n = !0;
    });
  }), mt(() => {
    n && e();
  });
}
function ut(e, n, t, o = {}) {
  if (!gt())
    return;
  const { passive: r = !1, capture: a = !1 } = o;
  let i = !1, l = !1;
  const s = (m) => Xt(m) ? m() : eo(m), u = (m) => {
    if (i || l)
      return;
    const b = s(m);
    b && (b.addEventListener(n, t, {
      passive: r,
      capture: a
    }), i = !0);
  }, d = (m) => {
    if (!i || l)
      return;
    const b = s(m);
    b && (b.removeEventListener(n, t, {
      capture: a
    }), i = !1);
  };
  let c;
  Hv(e) && (c = fe(
    () => e.value,
    (m, b) => {
      d(b), u(m);
    }
  ));
  const f = () => {
    c == null || c(), d(e), l = !0;
  };
  return rn(() => {
    u(e);
  }), mr(() => {
    d(e);
  }), Wt(() => {
    d(e);
  }), f;
}
function Cd(e, n, t) {
  if (!gt())
    return;
  ut(document, n, (r) => {
    const a = Xt(e) ? e() : eo(e);
    a && !a.contains(r.target) && t(r);
  });
}
function pr(e) {
  wo(() => {
    e();
  }), Wt(() => {
    e();
  });
}
function vm(e) {
  const n = qt();
  return e in n.provides;
}
function an(e) {
  if (!vm(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const t = Fv(e), { childInstances: o, collect: r, clear: a } = t, i = fm(t, ["childInstances", "collect", "clear"]), l = qt();
  return {
    index: V(() => o.indexOf(l)),
    parentProvider: i,
    bindParent: (d) => {
      $o(() => {
        Fe().then(() => {
          r(l, d);
        });
      }), mr(() => {
        Fe().then(() => {
          a(l, d);
        });
      });
    }
  };
}
function mm(e) {
  const n = [], t = (o) => {
    if (o != null && o.component) {
      t(o == null ? void 0 : o.component.subTree);
      return;
    }
    Array.isArray(o == null ? void 0 : o.children) && o.children.forEach((r) => {
      jv(r) && (n.push(r), t(r));
    });
  };
  return t(e), n;
}
function ln(e) {
  const n = qt(), t = je([]), o = [], r = V(() => t.length), a = () => {
    const u = mm(n.subTree);
    t.sort((d, c) => u.indexOf(d.vnode) - u.indexOf(c.vnode));
  }, i = (u, d) => {
    t.push(u), o.push(d), a();
  }, l = (u, d) => {
    _o(t, u), _o(o, d);
  };
  return {
    length: r,
    childProviders: o,
    bindChildren: (u) => {
      Yv(e, cm({
        childInstances: t,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function ko(e) {
  ut(() => window, "resize", e, { passive: !0 }), ut(() => window, "orientationchange", e, { passive: !0 });
}
function pm(e, n) {
  const t = w(!1);
  return fe(
    e,
    (o) => {
      n === o && (t.value = !0);
    },
    { immediate: !0 }
  ), t;
}
function hm(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function hr() {
  const e = w(0), n = w(0), t = w(0), o = w(0), r = w(0), a = w(0), i = w(0), l = w(0), s = w(0), u = w(0), d = w(), c = w(!1), f = w(!1), m = w(0), b = w(0);
  let p = null;
  const g = () => {
    e.value = 0, n.value = 0, t.value = 0, o.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, d.value = void 0, c.value = !1, f.value = !1, m.value = 0, b.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: t,
    deltaY: o,
    offsetX: r,
    offsetY: a,
    prevX: i,
    prevY: l,
    moveX: s,
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
      e.value = C, n.value = I, i.value = C, l.value = I, c.value = !0, m.value = performance.now(), f.value = !1, p && window.cancelAnimationFrame(p);
    },
    moveTouch: ($) => {
      const { clientX: C, clientY: I } = $.touches[0];
      f.value = !0, t.value = C - e.value, o.value = I - n.value, r.value = Math.abs(t.value), a.value = Math.abs(o.value), b.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = C - i.value, u.value = I - l.value, d.value || (d.value = hm(r.value, a.value)), i.value = C, l.value = I;
    },
    endTouch: () => {
      c.value = !1, p = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    }
  };
}
var gm = Object.defineProperty, cs = Object.getOwnPropertySymbols, bm = Object.prototype.hasOwnProperty, ym = Object.prototype.propertyIsEnumerable, fs = (e, n, t) => n in e ? gm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, vs = (e, n) => {
  for (var t in n || (n = {}))
    bm.call(n, t) && fs(e, t, n[t]);
  if (cs)
    for (var t of cs(n))
      ym.call(n, t) && fs(e, t, n[t]);
  return e;
}, ms = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
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
function $m(e) {
  const n = qv(e), t = document.createElement("div");
  return document.body.appendChild(t), {
    instance: n.mount(t),
    unmount() {
      n.unmount(), document.body.removeChild(t);
    }
  };
}
function Kt(e, n = {}, t = {}) {
  const o = {
    setup() {
      return () => bd(e, vs(vs({}, n), t));
    }
  }, { unmount: r } = $m(o);
  return { unmountInstance: r };
}
function kd(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.type !== Wv) {
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
  const e = w(""), n = (r, a, i) => ms(this, null, function* () {
    return !Me(r) || !r.length ? !0 : !(yield Promise.all(r.map((s) => s(a, i)))).some((s) => s !== !0 ? (e.value = String(s), !0) : !1);
  });
  return {
    errorMessage: e,
    validate: n,
    resetValidation: () => {
      e.value = "";
    },
    validateWithTrigger: (r, a, i, l, s) => ms(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function wm(e) {
  ut(() => window, "hashchange", e), ut(() => window, "popstate", e);
}
function Zt() {
  const e = w(!1);
  return mt(() => {
    e.value = !1;
  }), Wt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function te(e) {
  const n = "var", t = `${n}-${e}`, o = (a) => a ? a[0] === "$" ? a.replace("$", n) : a.startsWith("--") ? `${t}${a}` : `${t}__${a}` : t, r = (...a) => a.map((i) => {
    if (Me(i)) {
      const [l, s, u = null] = i;
      return l ? s : u;
    }
    return i;
  });
  return {
    name: am(t),
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
function io(e, n, t = {}) {
  const { passive: o = !0, eventName: r, defaultValue: a, emit: i } = t, l = r ?? `onUpdate:${n.toString()}`, s = () => e[n] != null ? e[n] : a;
  if (!o)
    return V({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : y(e[l], d);
      }
    });
  const u = w(s());
  return fe(
    () => e[n],
    () => {
      u.value = s();
    }
  ), fe(
    () => u.value,
    (d) => {
      i ? i(l, d) : y(e[l], d);
    }
  ), u;
}
var Sm = Object.defineProperty, Cm = Object.defineProperties, km = Object.getOwnPropertyDescriptors, ps = Object.getOwnPropertySymbols, Pm = Object.prototype.hasOwnProperty, Om = Object.prototype.propertyIsEnumerable, hs = (e, n, t) => n in e ? Sm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Pd = (e, n) => {
  for (var t in n || (n = {}))
    Pm.call(n, t) && hs(e, t, n[t]);
  if (ps)
    for (var t of ps(n))
      Om.call(n, t) && hs(e, t, n[t]);
  return e;
}, Tm = (e, n) => Cm(e, km(n));
const { n: Od } = te("ripple"), gs = 250;
function Em(e) {
  const { zIndex: n, position: t } = Ot(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", t === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Im(e, n) {
  const { top: t, left: o } = _e(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = n.touches[0].clientX - o, u = n.touches[0].clientY - t, d = (r - i * 2) / 2, c = (a - i * 2) / 2, f = s - i, m = u - i;
  return { x: f, y: m, centerX: d, centerY: c, size: l };
}
function Td(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !wn.enableRipple)
    return;
  const t = () => {
    n.tasker = null;
    const { x: o, y: r, centerX: a, centerY: i, size: l } = Im(this, e), s = document.createElement("div");
    s.classList.add(Od()), s.style.opacity = "0", s.style.transform = `translate(${o}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Em(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(t, 30);
}
function Gr() {
  const e = this._ripple, n = () => {
    const t = this.querySelectorAll(`.${Od()}`);
    if (!t.length)
      return;
    const o = t[t.length - 1], r = gs - performance.now() + Number(o.dataset.createdAt);
    window.setTimeout(() => {
      o.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = o.parentNode) == null ? void 0 : a.removeChild(o);
      }, gs);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Ed() {
  if (!rm() || !wn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
function Mm(e, n) {
  var t;
  e._ripple = Tm(Pd({
    tasker: null
  }, (t = n.value) != null ? t : {}), {
    removeRipple: Gr.bind(e)
  }), e.addEventListener("touchstart", Td, { passive: !0 }), e.addEventListener("touchmove", Ed, { passive: !0 }), e.addEventListener("dragstart", Gr, { passive: !0 }), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 });
}
function Dm(e) {
  e.removeEventListener("touchstart", Td), e.removeEventListener("touchmove", Ed), e.removeEventListener("dragstart", Gr), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Bm(e, n) {
  var t, o, r, a, i, l;
  const s = {
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = Pd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const Id = {
  mounted: Mm,
  unmounted: Dm,
  updated: Bm,
  install(e) {
    e.directive("ripple", this);
  }
}, YT = Id;
var Ke = Id;
const Po = {
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
function Md() {
  Object.keys(wn.locks).length <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Vo(e) {
  wn.locks[e] = 1, Md();
}
function Ao(e) {
  delete wn.locks[e], Md();
}
function gr(e, n) {
  const { uid: t } = qt();
  n && fe(n, (o) => {
    o === !1 ? Ao(t) : o === !0 && e() === !0 && Vo(t);
  }), fe(e, (o) => {
    n && n() === !1 || (o === !0 ? Vo(t) : Ao(t));
  }), Gv(() => {
    n && n() === !1 || e() === !0 && Vo(t);
  }), wo(() => {
    n && n() === !1 || e() === !0 && Ao(t);
  }), mt(() => {
    n && n() === !1 || e() === !0 && Vo(t);
  }), Wt(() => {
    n && n() === !1 || e() === !0 && Ao(t);
  });
}
function Oo(e, n) {
  const t = w(wn.zIndex);
  return fe(
    e,
    (o) => {
      o && (wn.zIndex += n, t.value = wn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: t };
}
const Dd = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Nm() {
  const { bindParent: e, parentProvider: n, index: t } = an(Dd);
  return {
    index: t,
    popup: n,
    bindPopup: e
  };
}
function Vm() {
  const { bindChildren: e, childProviders: n, length: t } = ln(Dd);
  return {
    length: t,
    popupItems: n,
    bindPopupItems: e
  };
}
var Am = Object.defineProperty, bs = Object.getOwnPropertySymbols, zm = Object.prototype.hasOwnProperty, Lm = Object.prototype.propertyIsEnumerable, ys = (e, n, t) => n in e ? Am(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Rm = (e, n) => {
  for (var t in n || (n = {}))
    zm.call(n, t) && ys(e, t, n[t]);
  if (bs)
    for (var t of bs(n))
      Lm.call(n, t) && ys(e, t, n[t]);
  return e;
};
const {
  name: Um,
  n: Bn,
  classes: Br
} = te("popup");
var $i = ne({
  name: Um,
  inheritAttrs: !1,
  props: Po,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = pm(() => e.show, !0), {
      zIndex: r
    } = Oo(() => e.show, 3), {
      disabled: a
    } = Zt(), {
      bindPopupItems: i
    } = Vm();
    gr(() => e.show, () => e.lockScroll), fe(() => e.show, (c) => {
      y(c ? e.onOpen : e.onClose);
    }), i({
      show: V(() => e.show)
    }), wm(() => y(e.onRouteChange));
    function l() {
      const {
        closeOnClickOverlay: c,
        onClickOverlay: f
      } = e;
      y(f), c && y(e["onUpdate:show"], !1);
    }
    function s() {
      const {
        overlayClass: c = "",
        overlayStyle: f
      } = e;
      return J("div", {
        class: Br(Bn("overlay"), c),
        style: Rm({
          zIndex: r.value - 1
        }, f),
        onClick: l
      }, null);
    }
    function u() {
      return Oe(J("div", Ne({
        class: Br(Bn("content"), Bn(`--${e.position}`), [e.defaultStyle, Bn("--content-background-color")], [e.defaultStyle, Bn("$-elevation--3")], [e.safeArea, Bn("--safe-area")], [e.safeAreaTop, Bn("--safe-area-top")]),
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
          class: Br(Bn("$--box"), Bn()),
          style: {
            zIndex: r.value - 2
          }
        }, [e.overlay && s(), J(Ye, {
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
      return c ? J(Xn, {
        to: c,
        disabled: a.value
      }, {
        default: () => [d()]
      }) : d();
    };
  }
});
oe($i);
const jT = $i;
var dt = $i;
const Bd = {
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
function $s(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function Hm(e) {
  const { left: n } = _e(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function ws(e) {
  const { top: n } = _e(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function lo(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function wi(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Nr(e) {
  const { transform: n } = Ot(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function ct(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const t = /(scroll|auto)/, { overflowY: o, overflow: r } = Ot(n);
    if (t.test(o) || t.test(r))
      return n;
  }
  return window;
}
function Fm(e) {
  const n = [];
  let t = e;
  for (; !gi(t); )
    t = ct(t), n.push(t);
  return n;
}
function Nd(e, n) {
  if (Qe(e)) {
    const t = document.querySelector(e);
    return t || Tn(n, "target element cannot found"), t;
  }
  if (tm(e))
    return e;
  Tn(n, 'type of prop "target" should be a selector or an element object');
}
function Ym() {
  const { width: e, height: n } = _e(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const Vd = (e) => Qe(e) && e.endsWith("rem"), jm = (e) => Qe(e) && e.endsWith("em") && !e.endsWith("rem"), Wm = (e) => Qe(e) && e.endsWith("px") || vn(e), qm = (e) => Qe(e) && e.endsWith("%"), Ad = (e) => Qe(e) && e.endsWith("vw"), zd = (e) => Qe(e) && e.endsWith("vh"), Ld = (e) => Qe(e) && e.endsWith("vmin"), Rd = (e) => Qe(e) && e.endsWith("vmax"), Gm = (e) => Qe(e) && e.startsWith("calc("), Xm = (e) => Qe(e) && e.startsWith("var("), He = (e) => {
  if (vn(e))
    return e;
  if (Wm(e))
    return +e.replace("px", "");
  if (!gt())
    return 0;
  const { vw: n, vh: t, vMin: o, vMax: r } = Ym();
  if (Ad(e))
    return +e.replace("vw", "") * n / 100;
  if (zd(e))
    return +e.replace("vh", "") * t / 100;
  if (Ld(e))
    return +e.replace("vmin", "") * o / 100;
  if (Rd(e))
    return +e.replace("vmax", "") * r / 100;
  if (Vd(e)) {
    const a = +e.replace("rem", ""), i = Ot(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return Qe(e) ? A(e) : 0;
}, we = (e) => {
  if (e != null)
    return qm(e) || Ad(e) || zd(e) || jm(e) || Vd(e) || Gm(e) || Xm(e) || Ld(e) || Rd(e) ? e : `${He(e)}px`;
}, sn = (e, n = 1) => {
  if (e == null)
    return;
  const t = we(e), o = t.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(t) * n}${o}`;
};
function so(e, { top: n = 0, left: t = 0, duration: o = 300, animation: r }) {
  const a = Date.now(), i = lo(e), l = wi(e);
  return new Promise((s) => {
    const u = () => {
      const d = (Date.now() - a) / o;
      if (d < 1) {
        const c = i + (n - i) * r(d), f = l + (t - l) * r(d);
        e.scrollTo(f, c), requestAnimationFrame(u);
      } else
        e.scrollTo(t, n), s();
    };
    requestAnimationFrame(u);
  });
}
function Ud(e) {
  return Object.entries(e ?? {}).reduce((n, [t, o]) => {
    const r = t.startsWith("--") ? t : `--${im(t)}`;
    return n[r] = o, n;
  }, {});
}
function er(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
var Km = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: Zm, n: Jm, classes: Qm } = te("icon");
function _m(e, n) {
  return h(), Se(Gt(e.isURL(e.name) ? "img" : "i"), {
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
const Hd = ne({
  name: Zm,
  props: Bd,
  setup(e) {
    const n = w(""), t = w(!1);
    fe(() => e.name, o, { immediate: !0 });
    function o(r, a) {
      return Km(this, null, function* () {
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
      n: Jm,
      classes: Qm,
      isURL: om,
      toNumber: A,
      toSizeUnit: we
    };
  }
});
Hd.render = _m;
var Si = Hd;
oe(Si);
const WT = Si;
var Ue = Si, xm = Object.defineProperty, Ss = Object.getOwnPropertySymbols, ep = Object.prototype.hasOwnProperty, np = Object.prototype.propertyIsEnumerable, Cs = (e, n, t) => n in e ? xm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, tp = (e, n) => {
  for (var t in n || (n = {}))
    ep.call(n, t) && Cs(e, t, n[t]);
  if (Ss)
    for (var t of Ss(n))
      np.call(n, t) && Cs(e, t, n[t]);
  return e;
};
const op = tp({
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
}, en(Po, [
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
}, Fd = {
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
}, rp = Object.defineProperty, ks = Object.getOwnPropertySymbols, ap = Object.prototype.hasOwnProperty, ip = Object.prototype.propertyIsEnumerable, Ps = (e, n, t) => n in e ? rp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Os = (e, n) => {
  for (var t in n || (n = {}))
    ap.call(n, t) && Ps(e, t, n[t]);
  if (ks)
    for (var t of ks(n))
      ip.call(n, t) && Ps(e, t, n[t]);
  return e;
};
function ki() {
  const e = {}, n = w({}), t = (a, i) => {
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
      e[a] = Os(Os({}, e[a]), i), o(a);
    }
  };
}
const { packs: Yd, pack: xe, add: Pi, use: Oi, merge: jd } = ki();
Pi("zh-CN", Ci);
Oi("zh-CN");
const qT = { zhCN: Ci, enUS: Fd, packs: Yd, pack: xe, add: Pi, use: Oi, merge: jd, useLocale: ki };
var Xr = {
  zhCN: Ci,
  enUS: Fd,
  packs: Yd,
  pack: xe,
  add: Pi,
  use: Oi,
  merge: jd,
  useLocale: ki
};
const { name: lp, n: sp, classes: up } = te("action-sheet"), dp = ["onClick"];
function cp(e, n) {
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
            (h(!0), S(
              Be,
              null,
              Ge(e.actions, (a) => Oe((h(), S("div", {
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
                }, null, 8, ["class", "name", "size"])) : _("v-if", !0),
                N(
                  "div",
                  {
                    class: v(e.n("action-name"))
                  },
                  re(a.name),
                  3
                  /* TEXT, CLASS */
                )
              ], 14, dp)), [
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
const Wd = ne({
  name: lp,
  directives: { Ripple: Ke },
  components: {
    VarPopup: dt,
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: op,
  setup(e) {
    const n = w(!1);
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
      n: sp,
      classes: up,
      handlePopupUpdateShow: o,
      handleSelect: t
    };
  }
});
Wd.render = cp;
var To = Wd, fp = Object.defineProperty, Ts = Object.getOwnPropertySymbols, vp = Object.prototype.hasOwnProperty, mp = Object.prototype.propertyIsEnumerable, Es = (e, n, t) => n in e ? fp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Is = (e, n) => {
  for (var t in n || (n = {}))
    vp.call(n, t) && Es(e, t, n[t]);
  if (Ts)
    for (var t of Ts(n))
      mp.call(n, t) && Es(e, t, n[t]);
  return e;
};
let et, Ti = {};
function pp(e = {}) {
  return Is(Is({}, Ti), e);
}
function Tt(e) {
  return gt() ? new Promise((n) => {
    Tt.close();
    const t = je(pp(e));
    t.teleport = "body", et = t;
    const { unmountInstance: o } = Kt(To, t, {
      onSelect: (r) => {
        y(t.onSelect, r), n(r);
      },
      onClose: () => {
        y(t.onClose), n("close");
      },
      onClosed: () => {
        y(t.onClosed), o(), et === t && (et = null);
      },
      onRouteChange: () => {
        o(), et === t && (et = null);
      },
      "onUpdate:show": (r) => {
        t.show = r;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
Tt.setDefaultOptions = function(e) {
  Ti = e;
};
Tt.resetDefaultOptions = function() {
  Ti = {};
};
Tt.close = function() {
  if (et != null) {
    const e = et;
    et = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
Tt.Component = To;
oe(To);
oe(To, Tt);
const GT = To;
var Kr = Tt;
const hp = {
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
}, { name: gp, n: bp, classes: yp } = te("app-bar");
function $p(e, n) {
  return h(), S(
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
              e.titlePosition === "left" ? (h(), S(
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
              )) : _("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.titlePosition === "center" ? (h(), S(
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
          )) : _("v-if", !0),
          N(
            "div",
            {
              class: v(e.n("right"))
            },
            [
              e.titlePosition === "right" ? (h(), S(
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
              )) : _("v-if", !0),
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
const qd = ne({
  name: gp,
  props: hp,
  setup(e, { slots: n }) {
    const t = w(), o = w(), r = V(() => {
      const { image: i, color: l, textColor: s, imageLinearGradient: u } = e;
      return i != null ? {
        "background-image": `${u ? `linear-gradient(${u}), ` : ""}url(${i})`,
        "background-position": "center center",
        "background-size": "cover"
      } : {
        background: l,
        color: s
      };
    });
    rn(a), So(a);
    function a() {
      t.value = n.left ? 0 : void 0, o.value = n.right ? 0 : void 0;
    }
    return {
      rootStyles: r,
      paddingLeft: t,
      paddingRight: o,
      n: bp,
      classes: yp,
      formatElevation: gn
    };
  }
});
qd.render = $p;
var Ei = qd;
oe(Ei);
const XT = Ei;
var Zr = Ei;
const Ms = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ds = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), wp = (e) => {
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
      this.has(t) && _o(this.cache, t);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Jr = (e) => e, Bs = (e) => e ** 3, Gd = (e) => e < 0.5 ? Bs(e * 2) / 2 : 1 - Bs((1 - e) * 2) / 2, Ct = (e = "", n, t = "") => {
  if (e.length >= n)
    return e;
  const o = n - e.length, r = Math.floor(o / t.length);
  return t.repeat(r) + t.slice(0, o % t.length) + e;
};
var Sp = Object.defineProperty, Ns = Object.getOwnPropertySymbols, Cp = Object.prototype.hasOwnProperty, kp = Object.prototype.propertyIsEnumerable, Vs = (e, n, t) => n in e ? Sp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Pp = (e, n) => {
  for (var t in n || (n = {}))
    Cp.call(n, t) && Vs(e, t, n[t]);
  if (Ns)
    for (var t of Ns(n))
      kp.call(n, t) && Vs(e, t, n[t]);
  return e;
}, br = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const Op = "background-image", Tp = "lazy-loading", Ep = "lazy-error", As = "lazy-attempt", Ip = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Qr = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Lt = [], nr = [], Xd = wp(100), Ze = {
  loading: Qr,
  error: Qr,
  attempt: 3,
  throttleWait: 300,
  events: Ip
};
let Ii = bi(Eo, Ze.throttleWait);
function yr(e, n) {
  e._lazy.arg === Op ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Mp(e) {
  e._lazy.loading && yr(e, e._lazy.loading), Eo();
}
function Dp(e) {
  e._lazy.error && yr(e, e._lazy.error), e._lazy.state = "error", Di(e), Eo();
}
function Kd(e, n) {
  yr(e, n), e._lazy.state = "success", Di(e), Eo();
}
function Bp(e) {
  var n;
  nr.includes(e) || (nr.push(e), (n = Ze.events) == null || n.forEach((t) => {
    e.addEventListener(t, Ii, { passive: !0 });
  }));
}
function Np() {
  nr.forEach((e) => {
    var n;
    (n = Ze.events) == null || n.forEach((t) => {
      e.removeEventListener(t, Ii);
    });
  }), nr.length = 0;
}
function Vp(e, n) {
  var t, o;
  const r = {
    loading: (t = e.getAttribute(Tp)) != null ? t : Ze.loading,
    error: (o = e.getAttribute(Ep)) != null ? o : Ze.error,
    attempt: e.getAttribute(As) ? Number(e.getAttribute(As)) : Ze.attempt
  };
  e._lazy = Pp({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), yr(e, Qr), y(Ze.filter, e._lazy);
}
function Ap(e, n) {
  const t = new Image();
  t.src = n, e._lazy.preloadImage = t, t.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Xd.add(n), Kd(e, n);
  }), t.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Dp(e) : Zd(e);
  });
}
function Zd(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (Xd.has(n)) {
    Kd(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Mp(e), Ap(e, n);
}
function Mi(e) {
  return br(this, null, function* () {
    yield dn(), um(e) && Zd(e);
  });
}
function Eo() {
  Lt.forEach((e) => Mi(e));
}
function zp(e) {
  return br(this, null, function* () {
    !Lt.includes(e) && Lt.push(e), Fm(e).forEach(Bp), yield Mi(e);
  });
}
function Di(e) {
  _o(Lt, e), Lt.length === 0 && Np();
}
function Lp(e, n) {
  const { src: t, arg: o } = e._lazy;
  return t !== n.value || o !== n.arg;
}
function Jd(e, n) {
  return br(this, null, function* () {
    Vp(e, n), yield zp(e);
  });
}
function Rp(e, n) {
  return br(this, null, function* () {
    if (!Lp(e, n)) {
      Lt.includes(e) && (yield Mi(e));
      return;
    }
    yield Jd(e, n);
  });
}
function Up(e = {}) {
  const { events: n, loading: t, error: o, attempt: r, throttleWait: a, filter: i } = e;
  Ze.events = n ?? Ze.events, Ze.loading = t ?? Ze.loading, Ze.error = o ?? Ze.error, Ze.attempt = r ?? Ze.attempt, Ze.throttleWait = a ?? Ze.throttleWait, Ze.filter = i;
}
const Qd = {
  mounted: Jd,
  unmounted: Di,
  updated: Rp,
  install(e, n) {
    Up(n), Ii = bi(Eo, Ze.throttleWait), e.directive("lazy", this);
  }
}, KT = Qd;
var uo = Qd;
const Hp = {
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
}, Fp = (e) => ["mini", "small", "normal", "large"].includes(e), { name: Yp, n: jp, classes: Wp } = te("avatar"), qp = ["src", "alt", "lazy-loading", "lazy-error"], Gp = ["src", "alt"];
function Xp(e, n) {
  const t = Le("lazy");
  return h(), S(
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
      e.src ? (h(), S(
        Be,
        { key: 0 },
        [
          e.lazy ? Oe((h(), S("img", {
            key: 0,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: F({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...o) => e.handleLoad && e.handleLoad(...o))
          }, null, 46, qp)), [
            [t, e.src]
          ]) : (h(), S("img", {
            key: 1,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: F({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...o) => e.handleLoad && e.handleLoad(...o)),
            onError: n[2] || (n[2] = (...o) => e.handleError && e.handleError(...o))
          }, null, 46, Gp))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (h(), S(
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
const _d = ne({
  name: Yp,
  directives: { Lazy: uo },
  props: Hp,
  setup(e) {
    const n = w(null), t = w(null), o = w(1);
    rn(r), So(r);
    function r() {
      if (!n.value || !t.value) {
        o.value = 1;
        return;
      }
      const s = n.value.offsetWidth, u = t.value.offsetWidth;
      s > u ? o.value = 1 : o.value = s / u;
    }
    function a(s) {
      const u = s.currentTarget, { lazy: d, onLoad: c, onError: f } = e;
      d ? (u._lazy.state === "success" && y(c, s), u._lazy.state === "error" && y(f, s)) : y(c, s);
    }
    function i(s) {
      y(e.onError, s);
    }
    function l(s) {
      y(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: t,
      scale: o,
      n: jp,
      classes: Wp,
      isInternalSize: Fp,
      toSizeUnit: we,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
_d.render = Xp;
var Bi = _d;
oe(Bi);
const ZT = Bi;
var _r = Bi;
const Kp = {
  offset: [Number, String],
  vertical: Boolean
}, { name: Zp, n: Jp, classes: Qp } = te("avatar-group");
function _p(e, n) {
  return h(), S(
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
const xd = ne({
  name: Zp,
  props: Kp,
  setup(e) {
    return {
      rootStyles: V(() => e.offset == null ? {} : {
        "--avatar-group-offset": we(e.offset)
      }),
      n: Jp,
      classes: Qp,
      toSizeUnit: we
    };
  }
});
xd.render = _p;
var Ni = xd;
oe(Ni);
const JT = Ni;
var xr = Ni;
const ot = {
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
}, { name: xp, n: eh, classes: nh } = te("loading"), th = (e) => (pt(""), e = e(), ht(), e), oh = /* @__PURE__ */ th(() => /* @__PURE__ */ N(
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
)), rh = [
  oh
];
function ah(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      e.$slots.default ? (h(), S(
        "div",
        {
          key: 0,
          class: v(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          R(e.$slots, "default"),
          e.loading ? (h(), S(
            "div",
            {
              key: 0,
              class: v(e.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : _("v-if", !0)
        ],
        2
        /* CLASS */
      )) : _("v-if", !0),
      e.isShow ? (h(), S(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (h(), S(
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
                rh,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : _("v-if", !0),
          (h(!0), S(
            Be,
            null,
            Ge(e.loadingTypeDict, (t, o) => (h(), S(
              Be,
              { key: o },
              [
                e.type === o ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.classes(e.n(o), e.n(`${o}--${e.size}`)))
                  },
                  [
                    (h(!0), S(
                      Be,
                      null,
                      Ge(t, (r) => (h(), S(
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
                )) : _("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          e.$slots.description || e.description ? (h(), S(
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
          )) : _("v-if", !0)
        ],
        2
        /* CLASS */
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const ec = ne({
  name: xp,
  props: ot,
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
      n: eh,
      classes: nh,
      multiplySizeUnit: sn
    };
  }
});
ec.render = ah;
var Vi = ec;
oe(Vi);
const QT = Vi;
var Rt = Vi;
const ih = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, { name: lh, n: sh, classes: uh } = te("hover-overlay");
function dh(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
const nc = ne({
  name: lh,
  props: ih,
  setup: () => ({
    n: sh,
    classes: uh
  })
});
nc.render = dh;
var Ai = nc;
oe(Ai);
function qn() {
  const e = w(!1);
  return {
    hovering: e,
    handleHovering: (t) => {
      e.value = t;
    }
  };
}
const _T = Ai;
var zn = Ai;
function tc(e) {
  if (!e)
    return !1;
  const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function ch(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((t, o) => {
    const [r, a] = o.split(":").map((i) => i.trim());
    return t[yi(r)] = a, t;
  }, {}) : {};
}
function fh(e) {
  const { value: n } = e._hover, t = ch(e);
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
function vh(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function oc(e) {
  vh(e), zi(e, e._hover.rawStyle);
}
function rc() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Xt(e)) {
    e(this._hover.hovering);
    return;
  }
  zi(this, e);
}
function ac() {
  if (this._hover.hovering = !1, Xt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  oc(this);
}
function ic(e, n) {
  var t, o;
  const { arg: r, value: a } = n;
  tc(r) || (e._hover = {
    value: a,
    hovering: (o = (t = e._hover) == null ? void 0 : t.hovering) != null ? o : !1,
    rawStyle: {}
  }, fh(e), e.addEventListener("mouseenter", rc), e.addEventListener("mouseleave", ac));
}
function lc(e, n) {
  tc(n.arg) || (oc(e), e.removeEventListener("mouseenter", rc), e.removeEventListener("mouseleave", ac));
}
function mh(e, n) {
  e._hover && lc(e, n);
}
function ph(e, n) {
  return !Xt(n.value) && e._hover.hovering;
}
function hh(e, n) {
  ic(e, n), ph(e, n) && zi(e, n.value);
}
const sc = {
  mounted: ic,
  unmounted: lc,
  beforeUpdate: mh,
  updated: hh,
  install(e) {
    e.directive("hover", this);
  }
}, xT = sc;
var En = sc, gh = Object.defineProperty, bh = Object.defineProperties, yh = Object.getOwnPropertyDescriptors, zs = Object.getOwnPropertySymbols, $h = Object.prototype.hasOwnProperty, wh = Object.prototype.propertyIsEnumerable, Ls = (e, n, t) => n in e ? gh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Sh = (e, n) => {
  for (var t in n || (n = {}))
    $h.call(n, t) && Ls(e, t, n[t]);
  if (zs)
    for (var t of zs(n))
      wh.call(n, t) && Ls(e, t, n[t]);
  return e;
}, Ch = (e, n) => bh(e, yh(n));
const kh = {
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
  loadingType: en(ot, "type"),
  loadingSize: en(ot, "size"),
  loadingColor: Ch(Sh({}, en(ot, "color")), {
    default: "currentColor"
  }),
  onClick: z(),
  onTouchstart: z()
}, uc = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Ph() {
  const { bindChildren: e, childProviders: n, length: t } = ln(uc);
  return {
    length: t,
    buttons: n,
    bindButtons: e
  };
}
function Oh() {
  const { bindParent: e, parentProvider: n, index: t } = an(uc);
  return {
    index: t,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: Th, n: Eh, classes: Ih } = te("button"), Mh = ["type", "disabled"];
function Dh(e, n) {
  const t = ae("var-loading"), o = ae("var-hover-overlay"), r = Le("ripple"), a = Le("hover");
  return Oe((h(), S("button", {
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
    }, null, 8, ["class", "color", "type", "size", "radius"])) : _("v-if", !0),
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
  ], 46, Mh)), [
    [r, { disabled: e.disabled || !e.ripple }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const dc = ne({
  name: Th,
  components: {
    VarLoading: Rt,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Ke, Hover: En },
  props: kh,
  setup(e) {
    const n = w(!1), { buttonGroup: t } = Oh(), { hovering: o, handleHovering: r } = qn(), a = V(() => {
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
    function l(u) {
      const { loading: d, disabled: c, onClick: f } = e;
      !f || d || c || n.value || i(y(f, u));
    }
    function s(u) {
      const { loading: d, disabled: c, onTouchstart: f } = e;
      !f || d || c || n.value || i(y(f, u));
    }
    return {
      pending: n,
      states: a,
      hovering: o,
      n: Eh,
      classes: Ih,
      handleHovering: r,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
dc.render = Dh;
var Li = dc;
oe(Li);
const eE = Li;
var mn = Li;
const Bh = {
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
}, { name: Nh, n: Vh, classes: Ah } = te("back-top");
function zh(e, n) {
  const t = ae("var-icon"), o = ae("var-button");
  return h(), Se(Xn, {
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
const cc = ne({
  name: Nh,
  components: {
    VarButton: mn,
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: Bh,
  setup(e) {
    const n = w(!1), t = w(null), o = w(!0);
    let r;
    const a = bi(() => {
      n.value = lo(r) >= He(e.visibilityHeight);
    }, 200);
    $o(() => {
      l(), s(), o.value = !1;
    }), mt(s), pr(u);
    function i(d) {
      y(e.onClick, d);
      const c = wi(r);
      so(r, {
        left: c,
        duration: e.duration,
        animation: Gd
      });
    }
    function l() {
      r = e.target ? Nd(e.target, "BackTop") : ct(t.value);
    }
    function s() {
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
      n: Vh,
      classes: Ah,
      handleClick: i
    };
  }
});
cc.render = zh;
var Ri = cc;
oe(Ri);
const nE = Ri;
var ea = Ri;
const Lh = {
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
}, { name: Rh, n: Uh, classes: Hh } = te("badge");
function Fh(e, n) {
  const t = ae("var-icon");
  return h(), S(
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
              }, null, 8, ["class", "name"])) : _("v-if", !0),
              R(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (h(), S(
                  "span",
                  {
                    key: 0,
                    class: v(e.n("value"))
                  },
                  re(e.value),
                  3
                  /* TEXT, CLASS */
                )) : _("v-if", !0)
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
const fc = ne({
  name: Rh,
  components: { VarIcon: Ue },
  inheritAttrs: !1,
  props: Lh,
  setup(e) {
    return {
      value: V(() => {
        const { value: t, maxValue: o } = e;
        return t != null && o != null && A(t) > A(o) ? `${o}+` : t;
      }),
      n: Uh,
      classes: Hh
    };
  }
});
fc.render = Fh;
var Ui = fc;
oe(Ui);
const tE = Ui;
var tr = Ui;
const Yh = {
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
}, vc = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function jh() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    vc
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: t
  };
}
var Wh = Object.defineProperty, Rs = Object.getOwnPropertySymbols, qh = Object.prototype.hasOwnProperty, Gh = Object.prototype.propertyIsEnumerable, Us = (e, n, t) => n in e ? Wh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Hs = (e, n) => {
  for (var t in n || (n = {}))
    qh.call(n, t) && Us(e, t, n[t]);
  if (Rs)
    for (var t of Rs(n))
      Gh.call(n, t) && Us(e, t, n[t]);
  return e;
};
const { name: Xh, n: Kh, classes: Zh } = te("bottom-navigation"), { n: $r } = te("bottom-navigation-item"), Fs = $r("--right-half-space"), Ys = $r("--left-half-space"), js = $r("--right-space"), Jh = {
  type: "primary"
};
function Qh(e, n) {
  const t = ae("var-button");
  return h(), S(
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
      }, 16, ["class", "onClick"])) : _("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const mc = ne({
  name: Xh,
  components: { VarButton: mn },
  props: Yh,
  setup(e, { slots: n }) {
    const t = w(null), o = V(() => e.active), r = V(() => e.activeColor), a = V(() => e.inactiveColor), i = w({}), { length: l, bottomNavigationItems: s, bindBottomNavigationItem: u } = jh();
    u({
      active: o,
      activeColor: r,
      inactiveColor: a,
      onToggle: p
    }), fe(() => l.value, c), fe(
      () => e.fabProps,
      (P) => {
        i.value = Hs(Hs({}, Jh), P);
      },
      { immediate: !0, deep: !0 }
    ), rn(() => {
      n.fab && O(l.value);
    }), So(() => {
      T(), n.fab && O(l.value);
    });
    function c() {
      l.value === 0 || f() || m() || b();
    }
    function f() {
      return s.find(({ name: P }) => o.value === P.value);
    }
    function m() {
      return s.find(({ index: P }) => o.value === P.value);
    }
    function b() {
      vn(o.value) && (o.value < 0 ? y(e["onUpdate:active"], 0) : o.value > l.value - 1 && y(e["onUpdate:active"], l.value - 1));
    }
    function p(P) {
      o.value !== P && (e.onBeforeChange ? g(P) : k(P));
    }
    function g(P) {
      const D = Wo(y(e.onBeforeChange, P));
      Promise.all(D).then((E) => {
        E.every(Boolean) && k(P);
      });
    }
    function k(P) {
      y(e["onUpdate:active"], P), y(e.onChange, P);
    }
    function T() {
      C().forEach((D) => {
        D.classList.remove(Fs, Ys, js);
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
        D.classList.add(js);
        return;
      }
      const U = E === H / 2 - 1, ie = E === H / 2;
      U ? D.classList.add(Fs) : ie && D.classList.add(Ys);
    }
    function C() {
      return Array.from(t.value.querySelectorAll(`.${$r()}`));
    }
    function I() {
      y(e.onFabClick);
    }
    return {
      length: l,
      bottomNavigationDom: t,
      fabProps: i,
      n: Kh,
      classes: Zh,
      handleFabClick: I
    };
  }
});
mc.render = Qh;
var Hi = mc;
oe(Hi);
const oE = Hi;
var na = Hi;
const _h = {
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
function xh() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    vc
  );
  return t || Tn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: t
  };
}
const { name: eg, n: ng, classes: tg } = te("bottom-navigation-item"), og = {
  type: "danger",
  dot: !0
};
function rg(e, n) {
  const t = ae("var-icon"), o = ae("var-badge"), r = Le("ripple");
  return Oe((h(), S(
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
      }, null, 8, ["name", "namespace", "class"])) : _("v-if", !0),
      R(e.$slots, "icon", {
        active: e.active === e.index || e.active === e.name
      }),
      e.badge ? (h(), Se(o, Ne({ key: 1 }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }), null, 16, ["class"])) : _("v-if", !0),
      N(
        "span",
        {
          class: v(e.n("label"))
        },
        [
          e.$slots.default ? _("v-if", !0) : (h(), S(
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
const pc = ne({
  name: eg,
  components: {
    VarBadge: tr,
    VarIcon: Ue
  },
  directives: { Ripple: Ke },
  props: _h,
  setup(e) {
    const n = V(() => e.name), t = V(() => e.badge), o = w({}), { index: r, bottomNavigation: a, bindBottomNavigation: i } = xh(), { active: l, activeColor: s, inactiveColor: u } = a;
    i({
      name: n,
      index: r
    }), fe(
      () => t.value,
      (m) => {
        o.value = m === !0 ? og : t.value;
      },
      { immediate: !0 }
    );
    function c() {
      return l.value === n.value || l.value === r.value ? s.value : u.value;
    }
    function f() {
      var m;
      const b = (m = n.value) != null ? m : r.value;
      y(e.onClick, b), y(a.onToggle, b);
    }
    return {
      index: r,
      active: l,
      badge: t,
      badgeProps: o,
      n: ng,
      classes: tg,
      computeColorStyle: c,
      handleClick: f
    };
  }
});
pc.render = rg;
var Fi = pc;
oe(Fi);
const rE = Fi;
var ta = Fi;
const ag = {
  separator: String,
  onClick: z()
}, hc = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function ig() {
  const { childProviders: e, bindChildren: n, length: t } = ln(
    hc
  );
  return {
    length: t,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function lg() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    hc
  );
  return n || Tn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: t,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: sg, n: ug, classes: dg } = te("breadcrumb");
function cg(e, n) {
  return h(), S(
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
      e.isLast ? _("v-if", !0) : R(e.$slots, "separator", { key: 0 }, () => {
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
const gc = ne({
  name: sg,
  props: ag,
  setup(e) {
    const { index: n, breadcrumb: t, bindBreadcrumb: o } = lg(), r = V(() => n.value === t.length.value - 1), a = V(() => t.separator.value);
    o(null);
    function i(l) {
      r.value || y(e.onClick, l);
    }
    return {
      n: ug,
      classes: dg,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
gc.render = cg;
var Yi = gc;
oe(Yi);
const aE = Yi;
var oa = Yi;
const fg = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: vg, n: mg } = te("breadcrumbs");
function pg(e, n) {
  return h(), S(
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
const bc = ne({
  name: vg,
  props: fg,
  setup(e) {
    const n = V(() => e.separator), { bindBreadcrumbList: t, length: o } = ig();
    return t({
      length: o,
      separator: n
    }), { n: mg };
  }
});
bc.render = pg;
var ji = bc;
oe(ji);
const iE = ji;
var ra = ji;
const hg = {
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
}, { name: gg, n: bg, classes: yg } = te("button-group");
function $g(e, n) {
  return h(), S(
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
const yc = ne({
  name: gg,
  props: hg,
  setup(e) {
    const { bindButtons: n } = Ph(), t = {
      elevation: V(() => e.elevation),
      type: V(() => e.type),
      size: V(() => e.size),
      color: V(() => e.color),
      textColor: V(() => e.textColor),
      mode: V(() => e.mode)
    };
    return n(t), {
      n: bg,
      classes: yg,
      formatElevation: gn
    };
  }
});
yc.render = $g;
var Wi = yc;
oe(Wi);
const lE = Wi;
var aa = Wi;
const wg = {
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
var Ws = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: Sg, n: Cg, classes: kg } = te("card"), Pg = 500, Og = ["src", "alt"];
function Tg(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = Le("ripple");
  return Oe((h(), S(
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
            e.src ? (h(), S("img", {
              key: 0,
              class: v(e.n("image")),
              style: F({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, Og)) : _("v-if", !0)
          ]),
          N(
            "div",
            {
              class: v(e.n("container"))
            },
            [
              R(e.$slots, "title", {}, () => [
                e.title ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("title"))
                  },
                  re(e.title),
                  3
                  /* TEXT, CLASS */
                )) : _("v-if", !0)
              ]),
              R(e.$slots, "subtitle", {}, () => [
                e.subtitle ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("subtitle"))
                  },
                  re(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : _("v-if", !0)
              ]),
              R(e.$slots, "description", {}, () => [
                e.description ? (h(), S(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("description"))
                  },
                  re(e.description),
                  3
                  /* TEXT, CLASS */
                )) : _("v-if", !0)
              ]),
              e.$slots.extra ? (h(), S(
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
              )) : _("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (h(), S(
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
              )) : _("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (h(), S(
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
          )) : _("v-if", !0)
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
const $c = ne({
  name: Sg,
  directives: { Ripple: Ke },
  components: {
    VarIcon: Ue,
    VarButton: mn
  },
  props: wg,
  setup(e) {
    const n = w(null), t = w(null), o = w("auto"), r = w("auto"), a = w("100%"), i = w("100%"), l = w("auto"), s = w("auto"), u = w(void 0), d = w("hidden"), c = w("0px"), f = w("0"), m = V(() => e.layout === "row"), b = w(!1), p = w(!1), { zIndex: g } = Oo(() => e.floating, 1);
    let k = "auto", T = "auto", O = null;
    const $ = w(null);
    gr(
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
      return Ws(this, null, function* () {
        clearTimeout($.value), clearTimeout(O), $.value = null, $.value = setTimeout(
          () => Ws(this, null, function* () {
            const { width: E, height: H, left: L, top: U } = _e(n.value);
            o.value = we(E), r.value = we(H), a.value = o.value, i.value = r.value, l.value = we(U), s.value = we(L), u.value = "fixed", k = l.value, T = s.value, b.value = !0, yield dn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", p.value = !0;
          }),
          e.ripple ? Pg : 0
        );
      });
    }
    function I() {
      clearTimeout(O), clearTimeout($.value), $.value = null, a.value = o.value, i.value = r.value, l.value = k, s.value = T, c.value = "0px", f.value = "0", b.value = !1, O = setTimeout(() => {
        o.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", k = "auto", T = "auto", d.value = "hidden", u.value = void 0, p.value = !1;
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
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: c,
      opacity: f,
      zIndex: g,
      isRow: m,
      showFloatingButtons: b,
      floated: p,
      n: Cg,
      classes: kg,
      toSizeUnit: we,
      close: P,
      formatElevation: gn,
      handleClick: D
    };
  }
});
$c.render = Tg;
var qi = $c;
oe(qi);
const sE = qi;
var ia = qi;
const Eg = {
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
}, { name: Ig, n: Mg, classes: Dg } = te("cell");
function Bg(e, n) {
  const t = ae("var-icon"), o = Le("ripple");
  return Oe((h(), S(
    "div",
    {
      class: v(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: F(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      R(e.$slots, "icon", {}, () => [
        e.icon ? (h(), S(
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
        )) : _("v-if", !0)
      ]),
      N(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          R(e.$slots, "default", {}, () => [
            e.title ? (h(), S(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("title"), e.titleClass))
              },
              re(e.title),
              3
              /* TEXT, CLASS */
            )) : _("v-if", !0)
          ]),
          R(e.$slots, "description", {}, () => [
            e.description ? (h(), S(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("description"), e.descriptionClass))
              },
              re(e.description),
              3
              /* TEXT, CLASS */
            )) : _("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (h(), S(
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
      )) : _("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const wc = ne({
  name: Ig,
  components: { VarIcon: Ue },
  directives: { Ripple: Ke },
  props: Eg,
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
      n: Mg,
      classes: Dg,
      toSizeUnit: we,
      handleClick: t
    };
  }
});
wc.render = Bg;
var Gi = wc;
oe(Gi);
const uE = Gi;
var or = Gi;
const Ng = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Vg, n: Ag } = te("form-details"), zg = { key: 0 }, Lg = { key: 0 };
function Rg(e, n) {
  return h(), Se(Ye, {
    name: e.n()
  }, {
    default: ve(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), S(
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
                  e.errorMessage ? (h(), S(
                    "div",
                    zg,
                    re(e.errorMessage),
                    1
                    /* TEXT */
                  )) : _("v-if", !0)
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
                    e.extraMessage ? (h(), S(
                      "div",
                      Lg,
                      re(e.extraMessage),
                      1
                      /* TEXT */
                    )) : _("v-if", !0)
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
      )) : _("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Sc = ne({
  name: Vg,
  props: Ng,
  setup: () => ({ n: Ag })
});
Sc.render = Rg;
var Xi = Sc;
oe(Xi);
const dE = Xi;
var pn = Xi;
const Ug = {
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
}, Cc = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Hg() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    Cc
  );
  return {
    length: t,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Fg() {
  const { bindParent: e, parentProvider: n, index: t } = an(
    Cc
  );
  return {
    index: t,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var Yg = Object.defineProperty, jg = Object.defineProperties, Wg = Object.getOwnPropertyDescriptors, qs = Object.getOwnPropertySymbols, qg = Object.prototype.hasOwnProperty, Gg = Object.prototype.propertyIsEnumerable, Gs = (e, n, t) => n in e ? Yg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Xg = (e, n) => {
  for (var t in n || (n = {}))
    qg.call(n, t) && Gs(e, t, n[t]);
  if (qs)
    for (var t of qs(n))
      Gg.call(n, t) && Gs(e, t, n[t]);
  return e;
}, Kg = (e, n) => jg(e, Wg(n));
const kc = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Mn() {
  const { parentProvider: e, index: n, bindParent: t } = an(kc), o = qt();
  return {
    index: n,
    form: e,
    bindForm: t ? (a) => {
      t(Kg(Xg({}, a), { instance: o }));
    } : null
  };
}
function Zg() {
  const { childProviders: e, length: n, bindChildren: t } = ln(kc);
  return {
    length: n,
    formItems: e,
    bindFormItems: t
  };
}
const { name: Jg, n: Qg, classes: _g } = te("checkbox");
function xg(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = Le("hover"), i = Le("ripple");
  return h(), S(
    "div",
    {
      class: v(e.n("wrap")),
      onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
    },
    [
      N(
        "div",
        {
          class: v(e.n())
        },
        [
          Oe((h(), S(
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
              ]) : _("v-if", !0),
              e.checked && !e.isIndeterminate ? R(e.$slots, "checked-icon", { key: 1 }, () => [
                J(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-marked",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : _("v-if", !0),
              !e.checked && !e.isIndeterminate ? R(e.$slots, "unchecked-icon", { key: 2 }, () => [
                J(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-blank-outline",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : _("v-if", !0),
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
const Pc = ne({
  name: Jg,
  directives: { Ripple: Ke, Hover: En },
  components: {
    VarIcon: Ue,
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  props: Ug,
  setup(e) {
    const n = io(e, "modelValue"), t = io(e, "indeterminate"), o = V(() => n.value === e.checkedValue), r = V(() => e.checkedValue), a = w(!1), { checkboxGroup: i, bindCheckboxGroup: l } = Fg(), { hovering: s, handleHovering: u } = qn(), { form: d, bindForm: c } = Mn(), {
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
    y(l, g), y(c, g);
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
      hovering: s,
      n: Qg,
      classes: _g,
      handleHovering: u,
      handleClick: O,
      toggle: P,
      reset: I,
      validate: D,
      resetValidation: p
    };
  }
});
Pc.render = xg;
var Ki = Pc;
oe(Ki);
const cE = Ki;
var rr = Ki;
const e0 = {
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
}, { name: n0, n: t0, classes: o0 } = te("checkbox-group");
function r0(e, n) {
  const t = ae("var-form-details");
  return h(), S(
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
const Oc = ne({
  name: n0,
  components: { VarFormDetails: pn },
  props: e0,
  setup(e) {
    const n = V(() => e.max), t = V(() => e.modelValue.length), { length: o, checkboxes: r, bindCheckboxes: a } = Hg(), { bindForm: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = In(), c = V(() => l.value), f = {
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
        s(D, P, E, H);
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
      const P = r.map(({ checkedValue: E }) => E.value), D = ss(P);
      return T(), y(e["onUpdate:modelValue"], D), D;
    }
    function $() {
      const P = r.filter(({ checked: E }) => !E.value).map(({ checkedValue: E }) => E.value), D = ss(P);
      return T(), y(e["onUpdate:modelValue"], D), D;
    }
    function C() {
      y(e["onUpdate:modelValue"], []), d();
    }
    function I() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: t0,
      classes: o0,
      checkAll: O,
      inverseAll: $,
      reset: C,
      validate: I,
      resetValidation: d
    };
  }
});
Oc.render = r0;
var Zi = Oc;
oe(Zi);
const fE = Zi;
var la = Zi;
const a0 = {
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
  iconName: en(Bd, "name"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  block: Boolean,
  closable: Boolean,
  onClose: z()
}, { name: i0, n: Kn, classes: l0 } = te("chip");
function s0(e, n) {
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
          e.closable ? (h(), S(
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
          )) : _("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Tc = ne({
  name: i0,
  components: {
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: a0,
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
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = Kn(a ? "$--flex" : "$--inline-flex"), d = l ? `${Kn("plain")} ${Kn(`plain-${i}`)}` : Kn(`--${i}`), c = s ? Kn("--round") : null;
      return [Kn(`--${r}`), u, d, c];
    });
    function o(r) {
      y(e.onClose, r);
    }
    return {
      chipStyles: n,
      contentClass: t,
      n: Kn,
      classes: l0,
      handleClose: o
    };
  }
});
Tc.render = s0;
var Ji = Tc;
oe(Ji);
const vE = Ji;
var ar = Ji;
const u0 = {
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
}, Ec = Symbol("ROW_BIND_COL_KEY");
function d0() {
  const { bindChildren: e, childProviders: n, length: t } = ln(Ec);
  return {
    length: t,
    cols: n,
    bindCols: e
  };
}
function c0() {
  const { parentProvider: e, index: n, bindParent: t } = an(Ec);
  return {
    index: n,
    row: e,
    bindRow: t
  };
}
const { name: f0, n: zo, classes: v0 } = te("col");
function m0(e, n) {
  return h(), S(
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
const Ic = ne({
  name: f0,
  props: u0,
  setup(e) {
    const n = V(() => A(e.span)), t = V(() => A(e.offset)), o = w({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = c0(), i = {
      setPadding(u) {
        o.value = u;
      }
    };
    fe([() => e.span, () => e.offset], () => {
      r == null || r.computePadding();
    }), y(a, i);
    function l(u, d) {
      const c = [];
      if (d == null)
        return c;
      if (hi(d)) {
        const { offset: f, span: m } = d;
        Number(m) >= 0 && c.push(zo(`--span-${u}-${m}`)), f && c.push(zo(`--offset-${u}-${f}`));
      } else
        Number(d) >= 0 && c.push(zo(`--span-${u}-${d}`));
      return c;
    }
    function s(u) {
      y(e.onClick, u);
    }
    return {
      span: n,
      offset: t,
      padding: o,
      n: zo,
      classes: v0,
      toNumber: A,
      toSizeUnit: we,
      getSize: l,
      handleClick: s,
      padStartFlex: er
    };
  }
});
Ic.render = m0;
var Qi = Ic;
oe(Qi);
const mE = Qi;
var sa = Qi;
const Mc = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function p0() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    Mc
  );
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: t
  };
}
const h0 = {
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
}, { name: g0, n: b0 } = te("collapse");
function y0(e, n) {
  return h(), S(
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
const Dc = ne({
  name: g0,
  props: h0,
  setup(e) {
    const n = V(() => e.modelValue), t = V(() => e.offset), o = V(() => e.divider), r = V(() => e.elevation), { length: a, collapseItem: i, bindCollapseItem: l } = p0(), s = {
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
    ), l(s);
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
      n: b0
    };
  }
});
Dc.render = y0;
var _i = Dc;
oe(_i);
const pE = _i;
var ua = _i;
function $0() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    Mc
  );
  return t || Tn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: t
  };
}
const w0 = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var Xs = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: S0, n: C0, classes: k0 } = te("collapse-item");
function P0(e, n) {
  const t = ae("var-icon");
  return h(), S(
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
const Bc = ne({
  name: S0,
  components: {
    VarIcon: Ue
  },
  props: w0,
  setup(e) {
    const n = w(!1), t = w(!1), o = w(null), r = V(() => e.name), { index: a, collapse: i, bindCollapse: l } = $0(), { active: s, offset: u, divider: d, elevation: c, updateItem: f } = i, m = {
      index: a,
      name: r,
      init: k
    };
    let b = !0;
    fe(n, (C) => {
      C ? p() : g();
    }), l(m);
    function p() {
      return Xs(this, null, function* () {
        if (!o.value || (o.value.style.height = "", t.value = !0, yield qo(), !o.value))
          return;
        const { offsetHeight: C } = o.value;
        o.value.style.height = "0px", yield qo(), o.value && (o.value.style.height = C + "px", b && (yield dn(), b && $()));
      });
    }
    function g() {
      return Xs(this, null, function* () {
        if (!o.value)
          return;
        const { offsetHeight: C } = o.value;
        o.value.style.height = C + "px", yield qo(), o.value.style.height = "0px";
      });
    }
    function k(C, I) {
      s.value === void 0 || C && Me(s.value) || I === n.value || (n.value = I, T(!0));
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
      n: C0,
      start: O,
      classes: k0,
      toggle: T,
      transitionend: $,
      formatElevation: gn
    };
  }
});
Bc.render = P0;
var xi = Bc;
oe(xi);
const hE = xi;
var da = xi;
const O0 = {
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
}, { name: T0, n: E0 } = te("countdown"), ca = 1e3, fa = 60 * ca, va = 60 * fa, Ks = 24 * va;
function I0(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default", it(Co(e.timeData)), () => [
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
const Nc = ne({
  name: T0,
  props: O0,
  setup(e) {
    const n = w(""), t = w({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let o = 0, r = !1, a = 0, i = 0, l;
    fe(
      () => e.time,
      () => {
        m(), e.autoStart && c();
      },
      { immediate: !0 }
    ), mt(() => {
      l != null && (r = l, r === !0 && c(!0));
    }), Wt(() => {
      l = r, f();
    }), wo(f);
    function s(b, p) {
      const g = Object.values(p), k = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (k.forEach((O, $) => {
        b.includes(O) ? b = b.replace(O, Ct(`${g[$]}`, 2, "0")) : g[$ + 1] += g[$] * T[$];
      }), b.includes("S")) {
        const O = Ct(`${g[g.length - 1]}`, 3, "0");
        b.includes("SSS") ? b = b.replace("SSS", O) : b.includes("SS") ? b = b.replace("SS", O.slice(0, 2)) : b = b.replace("S", O.slice(0, 1));
      }
      return b;
    }
    function u(b) {
      const p = Math.floor(b / Ks), g = Math.floor(b % Ks / va), k = Math.floor(b % va / fa), T = Math.floor(b % fa / ca), O = Math.floor(b % ca), $ = {
        days: p,
        hours: g,
        minutes: k,
        seconds: T,
        milliseconds: O
      };
      t.value = $, y(e.onChange, t.value), n.value = s(e.format, $);
    }
    function d() {
      const { time: b, onEnd: p } = e, g = performance.now();
      if (o || (o = g + A(b)), i = o - g, i < 0 && (i = 0), u(i), i === 0) {
        y(p);
        return;
      }
      r && (a = ao(d));
    }
    function c(b = !1) {
      r && !b || (r = !0, o = performance.now() + (i || A(e.time)), d());
    }
    function f() {
      r = !1, us(a);
    }
    function m() {
      o = 0, r = !1, us(a), d();
    }
    return {
      showTime: n,
      timeData: t,
      n: E0,
      start: c,
      pause: f,
      reset: m
    };
  }
});
Nc.render = I0;
var el = Nc;
oe(el);
const gE = el;
var ma = el;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Bt = 9e15, bt = 1e9, pa = "0123456789abcdef", ir = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", lr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ha = {
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
  minE: -Bt,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Bt,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Vc, Yn, ye = !0, wr = "[DecimalError] ", ft = wr + "Invalid argument: ", Ac = wr + "Precision limit exceeded", zc = wr + "crypto unavailable", Lc = "[object Decimal]", on = Math.floor, Je = Math.pow, M0 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, D0 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, B0 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Rc = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, An = 1e7, ge = 7, N0 = 9007199254740991, V0 = ir.length - 1, ga = lr.length - 1, K = { toStringTag: Lc };
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
    throw Error(ft + n);
  return t = o.cmp(e), t < 0 ? e : o.cmp(n) > 0 ? n : new r(o);
};
K.comparedTo = K.cmp = function(e) {
  var n, t, o, r, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0])
    return i[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (a.e !== e.e)
    return a.e > e.e ^ s < 0 ? 1 : -1;
  for (o = i.length, r = l.length, n = 0, t = o < r ? o : r; n < t; ++n)
    if (i[n] !== l[n])
      return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return o === r ? 0 : o > r ^ s < 0 ? 1 : -1;
};
K.cosine = K.cos = function() {
  var e, n, t = this, o = t.constructor;
  return t.d ? t.d[0] ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + ge, o.rounding = 1, t = A0(o, jc(o, t)), o.precision = e, o.rounding = n, me(Yn == 2 || Yn == 3 ? t.neg() : t, e, n, !0)) : new o(1) : new o(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, t, o, r, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new c(d);
  for (ye = !1, a = d.s * Je(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (t = tn(d.d), e = d.e, (a = (e - t.length + 1) % 3) && (t += a == 1 || a == -2 ? "0" : "00"), a = Je(t, 1 / 3), e = on((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), o = new c(t), o.s = d.s) : o = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = o, s = l.times(l).times(l), u = s.plus(d), o = ze(u.plus(d).times(l), u.plus(s), i + 2, 1), tn(l.d).slice(0, i) === (t = tn(o.d)).slice(0, i))
      if (t = t.slice(i - 3, i + 1), t == "9999" || !r && t == "4999") {
        if (!r && (me(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          o = l;
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
  var e, n, t, o, r, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite())
    return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return l;
  t = i.precision, o = i.rounding, i.precision = t + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / Cr(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = Ut(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return me(a, i.precision = t, i.rounding = o, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, t, o, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero())
    return new a(r);
  if (n = a.precision, t = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, o = r.d.length, o < 3)
    r = Ut(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(o), e = e > 16 ? 16 : e | 0, r = r.times(1 / Cr(5, e)), r = Ut(a, 2, r, r, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(l.plus(i.times(s.times(i).plus(u))));
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
  var e, n, t, o, r, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && c + 4 <= ga)
      return i = Vn(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (c + 4 <= ga)
      return i = Vn(d, c + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = c + 10, d.rounding = 1, t = Math.min(28, l / ge + 2 | 0), e = t; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ye = !1, n = Math.ceil(l / ge), o = 1, s = u.times(u), i = new d(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(o += 2)), r = r.times(s), i = a.plus(r.div(o += 2)), i.d[n] !== void 0)
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
  var n, t, o, r, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding, m = 5;
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
  if (ye = !1, l = c + m, i = rt(u, l), o = n ? sr(d, l + 10) : rt(e, l), s = ze(i, o, l, 1), co(s.d, r = c, f))
    do
      if (l += 10, i = rt(u, l), o = n ? sr(d, l + 10) : rt(e, l), s = ze(i, o, l, 1), !a) {
        +tn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = me(s, c + 1, 0));
        break;
      }
    while (co(s.d, r += 10, f));
  return ye = !0, me(s, c, f);
};
K.minus = K.sub = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c, f, m = this, b = m.constructor;
  if (e = new b(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new b(NaN) : m.d ? e.s = -e.s : e = new b(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = b.precision, s = b.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new b(m);
    else
      return new b(s === 3 ? -0 : 0);
    return ye ? me(e, l, s) : e;
  }
  if (t = on(e.e / ge), d = on(m.e / ge), u = u.slice(), a = d - t, a) {
    for (c = a < 0, c ? (n = u, a = -a, i = f.length) : (n = f, t = d, i = u.length), o = Math.max(Math.ceil(l / ge), i) + 2, a > o && (a = o, n.length = 1), n.reverse(), o = a; o--; )
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
  return u[0] ? (e.d = u, e.e = Sr(u, t), ye ? me(e, l, s) : e) : new b(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, t = this, o = t.constructor;
  return e = new o(e), !t.d || !e.s || e.d && !e.d[0] ? new o(NaN) : !e.d || t.d && !t.d[0] ? me(new o(t), o.precision, o.rounding) : (ye = !1, o.modulo == 9 ? (n = ze(t, e.abs(), 0, 3, 1), n.s *= e.s) : n = ze(t, e, 0, o.modulo, 1), n = n.times(e), ye = !0, t.minus(n));
};
K.naturalExponential = K.exp = function() {
  return ba(this);
};
K.naturalLogarithm = K.ln = function() {
  return rt(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, me(e);
};
K.plus = K.add = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), ye ? me(e, l, s) : e;
  if (a = on(c.e / ge), o = on(e.e / ge), u = u.slice(), r = a - o, r) {
    for (r < 0 ? (t = u, r = -r, i = d.length) : (t = d, o = a, i = u.length), a = Math.ceil(l / ge), i = a > i ? a + 1 : i + 1, r > i && (r = i, t.length = 1), t.reverse(); r--; )
      t.push(0);
    t.reverse();
  }
  for (i = u.length, r = d.length, i - r < 0 && (r = i, t = d, d = u, u = t), n = 0; r; )
    n = (u[--r] = u[r] + d[r] + n) / An | 0, u[r] %= An;
  for (n && (u.unshift(n), ++o), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = Sr(u, o), ye ? me(e, l, s) : e;
};
K.precision = K.sd = function(e) {
  var n, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(ft + e);
  return t.d ? (n = Uc(t.d), e && t.e + 1 > n && (n = t.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return me(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + ge, o.rounding = 1, t = L0(o, jc(o, t)), o.precision = e, o.rounding = n, me(Yn > 2 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, t, o, r, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (ye = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = tn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = on((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), o = new d(n)) : o = new d(u.toString()), t = (s = d.precision) + 3; ; )
    if (a = o, o = a.plus(ze(i, a, t + 2, 1)).times(0.5), tn(a.d).slice(0, t) === (n = tn(o.d)).slice(0, t))
      if (n = n.slice(t - 3, t + 1), n == "9999" || !r && n == "4999") {
        if (!r && (me(a, s + 1, 0), a.times(a).eq(i))) {
          o = a;
          break;
        }
        t += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (me(o, s + 1, 1), e = !o.times(o).eq(i));
        break;
      }
  return ye = !0, me(o, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 10, o.rounding = 1, t = t.sin(), t.s = 1, t = ze(t, new o(1).minus(t.times(t)).sqrt(), e + 10, 0), o.precision = e, o.rounding = n, me(Yn == 2 || Yn == 4 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
K.times = K.mul = function(e) {
  var n, t, o, r, a, i, l, s, u, d = this, c = d.constructor, f = d.d, m = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new c(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (t = on(d.e / ge) + on(e.e / ge), s = f.length, u = m.length, s < u && (a = f, f = m, m = a, i = s, s = u, u = i), a = [], i = s + u, o = i; o--; )
    a.push(0);
  for (o = u; --o >= 0; ) {
    for (n = 0, r = s + o; r > o; )
      l = a[r] + m[o] * f[r - o - 1] + n, a[r--] = l % An | 0, n = l / An | 0;
    a[r] = (a[r] + n) % An | 0;
  }
  for (; !a[--i]; )
    a.pop();
  return n ? ++t : a.shift(), e.d = a, e.e = Sr(a, t), ye ? me(e, c.precision, c.rounding) : e;
};
K.toBinary = function(e, n) {
  return nl(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var t = this, o = t.constructor;
  return t = new o(t), e === void 0 ? t : (hn(e, 0, bt), n === void 0 ? n = o.rounding : hn(n, 0, 8), me(t, e + t.e + 1, n));
};
K.toExponential = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Un(o, !0) : (hn(e, 0, bt), n === void 0 ? n = r.rounding : hn(n, 0, 8), o = me(new r(o), e + 1, n), t = Un(o, !0, e + 1)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toFixed = function(e, n) {
  var t, o, r = this, a = r.constructor;
  return e === void 0 ? t = Un(r) : (hn(e, 0, bt), n === void 0 ? n = a.rounding : hn(n, 0, 8), o = me(new a(r), e + r.e + 1, n), t = Un(o, !1, e + o.e + 1)), r.isNeg() && !r.isZero() ? "-" + t : t;
};
K.toFraction = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c, f, m = this, b = m.d, p = m.constructor;
  if (!b)
    return new p(m);
  if (u = t = new p(1), o = s = new p(0), n = new p(o), a = n.e = Uc(b) - m.e - 1, i = a % ge, n.d[0] = Je(10, i < 0 ? ge + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new p(e), !l.isInt() || l.lt(u))
      throw Error(ft + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (ye = !1, l = new p(tn(b)), d = p.precision, p.precision = a = b.length * ge * 2; c = ze(l, n, 0, 1, 1), r = t.plus(c.times(o)), r.cmp(e) != 1; )
    t = o, o = r, r = u, u = s.plus(c.times(r)), s = r, r = n, n = l.minus(c.times(r)), l = r;
  return r = ze(e.minus(t), o, 0, 1, 1), s = s.plus(r.times(u)), t = t.plus(r.times(o)), s.s = u.s = m.s, f = ze(u, o, a, 1).minus(m).abs().cmp(ze(s, t, a, 1).minus(m).abs()) < 1 ? [u, o] : [s, t], p.precision = d, ye = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return nl(this, 16, e, n);
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
  return nl(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, t, o, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Je(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (o = s.precision, a = s.rounding, e.eq(1))
    return me(l, o, a);
  if (n = on(e.e / ge), n >= e.d.length - 1 && (t = u < 0 ? -u : u) <= N0)
    return r = Hc(s, l, t, o), e.s < 0 ? new s(1).div(r) : me(r, o, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return t = Je(+l, u), n = t == 0 || !isFinite(t) ? on(u * (Math.log("0." + tn(l.d)) / Math.LN10 + l.e + 1)) : new s(t + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (ye = !1, s.rounding = l.s = 1, t = Math.min(12, (n + "").length), r = ba(e.times(rt(l, o + t)), o), r.d && (r = me(r, o + 5, 1), co(r.d, o, a) && (n = o + 10, r = me(ba(e.times(rt(l, n + t)), n), n + 5, 1), +tn(r.d).slice(o + 1, o + 15) + 1 == 1e14 && (r = me(r, o + 1, 0)))), r.s = i, ye = !0, s.rounding = a, me(r, o, a));
};
K.toPrecision = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Un(o, o.e <= r.toExpNeg || o.e >= r.toExpPos) : (hn(e, 1, bt), n === void 0 ? n = r.rounding : hn(n, 0, 8), o = me(new r(o), e, n), t = Un(o, e <= o.e || o.e <= r.toExpNeg, e)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var t = this, o = t.constructor;
  return e === void 0 ? (e = o.precision, n = o.rounding) : (hn(e, 1, bt), n === void 0 ? n = o.rounding : hn(n, 0, 8)), me(new o(t), e, n);
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
      o = e[n] + "", t = ge - o.length, t && (a += Qn(t)), a += o;
    i = e[n], o = i + "", t = ge - o.length, t && (a += Qn(t));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return a + i;
}
function hn(e, n, t) {
  if (e !== ~~e || e < n || e > t)
    throw Error(ft + e);
}
function co(e, n, t, o) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10)
    --n;
  return --n < 0 ? (n += ge, r = 0) : (r = Math.ceil((n + 1) / ge), n %= ge), a = Je(10, ge - n), l = e[r] % a | 0, o == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = t < 4 && l == 99999 || t > 3 && l == 49999 || l == 5e4 || l == 0) : i = (t < 4 && l + 1 == a || t > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == Je(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (o || t < 4) && l == 9999 || !o && t > 3 && l == 4999) : i = ((o || t < 4) && l + 1 == a || !o && t > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == Je(10, n - 3) - 1, i;
}
function Go(e, n, t) {
  for (var o, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; )
      r[a] *= n;
    for (r[0] += pa.indexOf(e.charAt(i++)), o = 0; o < r.length; o++)
      r[o] > t - 1 && (r[o + 1] === void 0 && (r[o + 1] = 0), r[o + 1] += r[o] / t | 0, r[o] %= t);
  }
  return r.reverse();
}
function A0(e, n) {
  var t, o, r;
  if (n.isZero())
    return n;
  o = n.d.length, o < 32 ? (t = Math.ceil(o / 3), r = (1 / Cr(4, t)).toString()) : (t = 16, r = "2.3283064365386962890625e-10"), e.precision += t, n = Ut(e, 1, n.times(r), new e(1));
  for (var a = t; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= t, n;
}
var ze = function() {
  function e(o, r, a) {
    var i, l = 0, s = o.length;
    for (o = o.slice(); s--; )
      i = o[s] * r + l, o[s] = i % a | 0, l = i / a | 0;
    return l && o.unshift(l), o;
  }
  function n(o, r, a, i) {
    var l, s;
    if (a != i)
      s = a > i ? 1 : -1;
    else
      for (l = s = 0; l < a; l++)
        if (o[l] != r[l]) {
          s = o[l] > r[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function t(o, r, a, i) {
    for (var l = 0; a--; )
      o[a] -= l, l = o[a] < r[a] ? 1 : 0, o[a] = l * i + o[a] - r[a];
    for (; !o[0] && o.length > 1; )
      o.shift();
  }
  return function(o, r, a, i, l, s) {
    var u, d, c, f, m, b, p, g, k, T, O, $, C, I, P, D, E, H, L, U, ie = o.constructor, G = o.s == r.s ? 1 : -1, W = o.d, Z = r.d;
    if (!W || !W[0] || !Z || !Z[0])
      return new ie(
        // Return NaN if either NaN, or both Infinity or 0.
        !o.s || !r.s || (W ? Z && W[0] == Z[0] : !Z) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          W && W[0] == 0 || !Z ? G * 0 : G / 0
        )
      );
    for (s ? (m = 1, d = o.e - r.e) : (s = An, m = ge, d = on(o.e / m) - on(r.e / m)), L = Z.length, E = W.length, k = new ie(G), T = k.d = [], c = 0; Z[c] == (W[c] || 0); c++)
      ;
    if (Z[c] > (W[c] || 0) && d--, a == null ? (I = a = ie.precision, i = ie.rounding) : l ? I = a + (o.e - r.e) + 1 : I = a, I < 0)
      T.push(1), b = !0;
    else {
      if (I = I / m + 2 | 0, c = 0, L == 1) {
        for (f = 0, Z = Z[0], I++; (c < E || f) && I--; c++)
          P = f * s + (W[c] || 0), T[c] = P / Z | 0, f = P % Z | 0;
        b = f || c < E;
      } else {
        for (f = s / (Z[0] + 1) | 0, f > 1 && (Z = e(Z, f, s), W = e(W, f, s), L = Z.length, E = W.length), D = L, O = W.slice(0, L), $ = O.length; $ < L; )
          O[$++] = 0;
        U = Z.slice(), U.unshift(0), H = Z[0], Z[1] >= s / 2 && ++H;
        do
          f = 0, u = n(Z, O, L, $), u < 0 ? (C = O[0], L != $ && (C = C * s + (O[1] || 0)), f = C / H | 0, f > 1 ? (f >= s && (f = s - 1), p = e(Z, f, s), g = p.length, $ = O.length, u = n(p, O, g, $), u == 1 && (f--, t(p, L < g ? U : Z, g, s))) : (f == 0 && (u = f = 1), p = Z.slice()), g = p.length, g < $ && p.unshift(0), t(O, p, $, s), u == -1 && ($ = O.length, u = n(Z, O, L, $), u < 1 && (f++, t(O, L < $ ? U : Z, $, s))), $ = O.length) : u === 0 && (f++, O = [0]), T[c++] = f, u && O[0] ? O[$++] = W[D] || 0 : (O = [W[D]], $ = 1);
        while ((D++ < E || O[0] !== void 0) && I--);
        b = O[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (m == 1)
      k.e = d, Vc = b;
    else {
      for (c = 1, f = T[0]; f >= 10; f /= 10)
        c++;
      k.e = c + d * m - 1, me(k, l ? a + k.e + 1 : a, i, b);
    }
    return k;
  };
}();
function me(e, n, t, o) {
  var r, a, i, l, s, u, d, c, f, m = e.constructor;
  e:
    if (n != null) {
      if (c = e.d, !c)
        return e;
      for (r = 1, l = c[0]; l >= 10; l /= 10)
        r++;
      if (a = n - r, a < 0)
        a += ge, i = n, d = c[f = 0], s = d / Je(10, r - i - 1) % 10 | 0;
      else if (f = Math.ceil((a + 1) / ge), l = c.length, f >= l)
        if (o) {
          for (; l++ <= f; )
            c.push(0);
          d = s = 0, r = 1, a %= ge, i = a - ge + 1;
        } else
          break e;
      else {
        for (d = l = c[f], r = 1; l >= 10; l /= 10)
          r++;
        a %= ge, i = a - ge + r, s = i < 0 ? 0 : d / Je(10, r - i - 1) % 10 | 0;
      }
      if (o = o || n < 0 || c[f + 1] !== void 0 || (i < 0 ? d : d % Je(10, r - i - 1)), u = t < 4 ? (s || o) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (t == 4 || o || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? i > 0 ? d / Je(10, r - i) : 0 : c[f - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), n < 1 || !c[0])
        return c.length = 0, u ? (n -= e.e + 1, c[0] = Je(10, (ge - n % ge) % ge), e.e = -n || 0) : c[0] = e.e = 0, e;
      if (a == 0 ? (c.length = f, l = 1, f--) : (c.length = f + 1, l = Je(10, ge - a), c[f] = i > 0 ? (d / Je(10, r - i) % Je(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (a = 1, i = c[0]; i >= 10; i /= 10)
              a++;
            for (i = c[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            a != l && (e.e++, c[0] == An && (c[0] = 1));
            break;
          } else {
            if (c[f] += l, c[f] != An)
              break;
            c[f--] = 0, l = 1;
          }
      for (a = c.length; c[--a] === 0; )
        c.pop();
    }
  return ye && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Un(e, n, t) {
  if (!e.isFinite())
    return Yc(e);
  var o, r = e.e, a = tn(e.d), i = a.length;
  return n ? (t && (o = t - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Qn(o) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + Qn(-r - 1) + a, t && (o = t - i) > 0 && (a += Qn(o))) : r >= i ? (a += Qn(r + 1 - i), t && (o = t - r - 1) > 0 && (a = a + "." + Qn(o))) : ((o = r + 1) < i && (a = a.slice(0, o) + "." + a.slice(o)), t && (o = t - i) > 0 && (r + 1 === i && (a += "."), a += Qn(o))), a;
}
function Sr(e, n) {
  var t = e[0];
  for (n *= ge; t >= 10; t /= 10)
    n++;
  return n;
}
function sr(e, n, t) {
  if (n > V0)
    throw ye = !0, t && (e.precision = t), Error(Ac);
  return me(new e(ir), n, 1, !0);
}
function Vn(e, n, t) {
  if (n > ga)
    throw Error(Ac);
  return me(new e(lr), n, t, !0);
}
function Uc(e) {
  var n = e.length - 1, t = n * ge + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      t--;
    for (n = e[0]; n >= 10; n /= 10)
      t++;
  }
  return t;
}
function Qn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Hc(e, n, t, o) {
  var r, a = new e(1), i = Math.ceil(o / ge + 4);
  for (ye = !1; ; ) {
    if (t % 2 && (a = a.times(n), Js(a.d, i) && (r = !0)), t = on(t / 2), t === 0) {
      t = a.d.length - 1, r && a.d[t] === 0 && ++a.d[t];
      break;
    }
    n = n.times(n), Js(n.d, i);
  }
  return ye = !0, a;
}
function Zs(e) {
  return e.d[e.d.length - 1] & 1;
}
function Fc(e, n, t) {
  for (var o, r = new e(n[0]), a = 0; ++a < n.length; )
    if (o = new e(n[a]), o.s)
      r[t](o) && (r = o);
    else {
      r = o;
      break;
    }
  return r;
}
function ba(e, n) {
  var t, o, r, a, i, l, s, u = 0, d = 0, c = 0, f = e.constructor, m = f.rounding, b = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ye = !1, s = b) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (o = Math.log(Je(2, c)) / Math.LN10 * 2 + 5 | 0, s += o, t = a = i = new f(1), f.precision = s; ; ) {
    if (a = me(a.times(e), s, 1), t = t.times(++d), l = i.plus(ze(a, t, s, 1)), tn(l.d).slice(0, s) === tn(i.d).slice(0, s)) {
      for (r = c; r--; )
        i = me(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && co(i.d, s - o, m, u))
          f.precision = s += 10, t = a = l = new f(1), d = 0, u++;
        else
          return me(i, f.precision = b, m, ye = !0);
      else
        return f.precision = b, i;
    }
    i = l;
  }
}
function rt(e, n) {
  var t, o, r, a, i, l, s, u, d, c, f, m = 1, b = 10, p = e, g = p.d, k = p.constructor, T = k.rounding, O = k.precision;
  if (p.s < 0 || !g || !g[0] || !p.e && g[0] == 1 && g.length == 1)
    return new k(g && !g[0] ? -1 / 0 : p.s != 1 ? NaN : g ? 0 : p);
  if (n == null ? (ye = !1, d = O) : d = n, k.precision = d += b, t = tn(g), o = t.charAt(0), Math.abs(a = p.e) < 15e14) {
    for (; o < 7 && o != 1 || o == 1 && t.charAt(1) > 3; )
      p = p.times(e), t = tn(p.d), o = t.charAt(0), m++;
    a = p.e, o > 1 ? (p = new k("0." + t), a++) : p = new k(o + "." + t.slice(1));
  } else
    return u = sr(k, d + 2, O).times(a + ""), p = rt(new k(o + "." + t.slice(1)), d - b).plus(u), k.precision = O, n == null ? me(p, O, T, ye = !0) : p;
  for (c = p, s = i = p = ze(p.minus(1), p.plus(1), d, 1), f = me(p.times(p), d, 1), r = 3; ; ) {
    if (i = me(i.times(f), d, 1), u = s.plus(ze(i, new k(r), d, 1)), tn(u.d).slice(0, d) === tn(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(sr(k, d + 2, O).times(a + ""))), s = ze(s, new k(m), d, 1), n == null)
        if (co(s.d, d - b, T, l))
          k.precision = d += b, u = i = p = ze(c.minus(1), c.plus(1), d, 1), f = me(p.times(p), d, 1), r = l = 1;
        else
          return me(s, k.precision = O, T, ye = !0);
      else
        return k.precision = O, s;
    s = u, r += 2;
  }
}
function Yc(e) {
  return String(e.s * e.s / 0);
}
function ya(e, n) {
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
function z0(e, n) {
  var t, o, r, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Rc.test(n))
      return ya(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (D0.test(n))
    t = 16, n = n.toLowerCase();
  else if (M0.test(n))
    t = 2;
  else if (B0.test(n))
    t = 8;
  else
    throw Error(ft + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, o = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = Hc(o, new o(t), a, a * 2)), u = Go(n, t, An), d = u.length - 1, a = d; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new o(e.s * 0) : (e.e = Sr(u, d), e.d = u, ye = !1, i && (e = ze(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Je(2, s) : at.pow(2, s))), ye = !0, e);
}
function L0(e, n) {
  var t, o = n.d.length;
  if (o < 3)
    return n.isZero() ? n : Ut(e, 2, n, n);
  t = 1.4 * Math.sqrt(o), t = t > 16 ? 16 : t | 0, n = n.times(1 / Cr(5, t)), n = Ut(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); t--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function Ut(e, n, t, o, r) {
  var a, i, l, s, u = e.precision, d = Math.ceil(u / ge);
  for (ye = !1, s = t.times(t), l = new e(o); ; ) {
    if (i = ze(l.times(s), new e(n++ * n++), u, 1), l = r ? o.plus(i) : o.minus(i), o = ze(i.times(s), new e(n++ * n++), u, 1), i = l.plus(o), i.d[d] !== void 0) {
      for (a = d; i.d[a] === l.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = l, l = o, o = i, i = a;
  }
  return ye = !0, i.d.length = d + 1, i;
}
function Cr(e, n) {
  for (var t = e; --n; )
    t *= e;
  return t;
}
function jc(e, n) {
  var t, o = n.s < 0, r = Vn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return Yn = o ? 4 : 1, n;
  if (t = n.divToInt(r), t.isZero())
    Yn = o ? 3 : 2;
  else {
    if (n = n.minus(t.times(r)), n.lte(a))
      return Yn = Zs(t) ? o ? 2 : 3 : o ? 4 : 1, n;
    Yn = Zs(t) ? o ? 1 : 4 : o ? 3 : 2;
  }
  return n.minus(r).abs();
}
function nl(e, n, t, o) {
  var r, a, i, l, s, u, d, c, f, m = e.constructor, b = t !== void 0;
  if (b ? (hn(t, 1, bt), o === void 0 ? o = m.rounding : hn(o, 0, 8)) : (t = m.precision, o = m.rounding), !e.isFinite())
    d = Yc(e);
  else {
    for (d = Un(e), i = d.indexOf("."), b ? (r = 2, n == 16 ? t = t * 4 - 3 : n == 8 && (t = t * 3 - 2)) : r = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Go(Un(f), 10, r), f.e = f.d.length), c = Go(d, 10, r), a = s = c.length; c[--s] == 0; )
      c.pop();
    if (!c[0])
      d = b ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new m(e), e.d = c, e.e = a, e = ze(e, f, t, o, 0, r), c = e.d, a = e.e, u = Vc), i = c[t], l = r / 2, u = u || c[t + 1] !== void 0, u = o < 4 ? (i !== void 0 || u) && (o === 0 || o === (e.s < 0 ? 3 : 2)) : i > l || i === l && (o === 4 || u || o === 6 && c[t - 1] & 1 || o === (e.s < 0 ? 8 : 7)), c.length = t, u)
        for (; ++c[--t] > r - 1; )
          c[t] = 0, t || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += pa.charAt(c[i]);
      if (b) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (c = Go(d, r, n), s = c.length; !c[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += pa.charAt(c[i]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; )
          d = "0" + d;
        d = "0." + d;
      } else if (++a > s)
        for (a -= s; a--; )
          d += "0";
      else
        a < s && (d = d.slice(0, a) + "." + d.slice(a));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function Js(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function R0(e) {
  return new this(e).abs();
}
function U0(e) {
  return new this(e).acos();
}
function H0(e) {
  return new this(e).acosh();
}
function F0(e, n) {
  return new this(e).plus(n);
}
function Y0(e) {
  return new this(e).asin();
}
function j0(e) {
  return new this(e).asinh();
}
function W0(e) {
  return new this(e).atan();
}
function q0(e) {
  return new this(e).atanh();
}
function G0(e, n) {
  e = new this(e), n = new this(n);
  var t, o = this.precision, r = this.rounding, a = o + 4;
  return !e.s || !n.s ? t = new this(NaN) : !e.d && !n.d ? (t = Vn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), t.s = e.s) : !n.d || e.isZero() ? (t = n.s < 0 ? Vn(this, o, r) : new this(0), t.s = e.s) : !e.d || n.isZero() ? (t = Vn(this, a, 1).times(0.5), t.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, t = this.atan(ze(e, n, a, 1)), n = Vn(this, a, 1), this.precision = o, this.rounding = r, t = e.s < 0 ? t.minus(n) : t.plus(n)) : t = this.atan(ze(e, n, a, 1)), t;
}
function X0(e) {
  return new this(e).cbrt();
}
function K0(e) {
  return me(e = new this(e), e.e + 1, 2);
}
function Z0(e, n, t) {
  return new this(e).clamp(n, t);
}
function J0(e) {
  if (!e || typeof e != "object")
    throw Error(wr + "Object expected");
  var n, t, o, r = e.defaults === !0, a = [
    "precision",
    1,
    bt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Bt,
    0,
    "toExpPos",
    0,
    Bt,
    "maxE",
    0,
    Bt,
    "minE",
    -Bt,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (t = a[n], r && (this[t] = ha[t]), (o = e[t]) !== void 0)
      if (on(o) === o && o >= a[n + 1] && o <= a[n + 2])
        this[t] = o;
      else
        throw Error(ft + t + ": " + o);
  if (t = "crypto", r && (this[t] = ha[t]), (o = e[t]) !== void 0)
    if (o === !0 || o === !1 || o === 0 || o === 1)
      if (o)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(zc);
      else
        this[t] = !1;
    else
      throw Error(ft + t + ": " + o);
  return this;
}
function Q0(e) {
  return new this(e).cos();
}
function _0(e) {
  return new this(e).cosh();
}
function Wc(e) {
  var n, t, o;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r))
      return new r(a);
    if (u.constructor = r, Qs(a)) {
      u.s = a.s, ye ? !a.d || a.e > r.maxE ? (u.e = NaN, u.d = null) : a.e < r.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10)
          i++;
        ye ? i > r.maxE ? (u.e = NaN, u.d = null) : i < r.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return ya(u, a.toString());
    } else if (s !== "string")
      throw Error(ft + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), Rc.test(a) ? ya(u, a) : z0(u, a);
  }
  if (r.prototype = K, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = J0, r.clone = Wc, r.isDecimal = Qs, r.abs = R0, r.acos = U0, r.acosh = H0, r.add = F0, r.asin = Y0, r.asinh = j0, r.atan = W0, r.atanh = q0, r.atan2 = G0, r.cbrt = X0, r.ceil = K0, r.clamp = Z0, r.cos = Q0, r.cosh = _0, r.div = x0, r.exp = eb, r.floor = nb, r.hypot = tb, r.ln = ob, r.log = rb, r.log10 = ib, r.log2 = ab, r.max = lb, r.min = sb, r.mod = ub, r.mul = db, r.pow = cb, r.random = fb, r.round = vb, r.sign = mb, r.sin = pb, r.sinh = hb, r.sqrt = gb, r.sub = bb, r.sum = yb, r.tan = $b, r.tanh = wb, r.trunc = Sb, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (o = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < o.length; )
      e.hasOwnProperty(t = o[n++]) || (e[t] = this[t]);
  return r.config(e), r;
}
function x0(e, n) {
  return new this(e).div(n);
}
function eb(e) {
  return new this(e).exp();
}
function nb(e) {
  return me(e = new this(e), e.e + 1, 3);
}
function tb() {
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
function Qs(e) {
  return e instanceof at || e && e.toStringTag === Lc || !1;
}
function ob(e) {
  return new this(e).ln();
}
function rb(e, n) {
  return new this(e).log(n);
}
function ab(e) {
  return new this(e).log(2);
}
function ib(e) {
  return new this(e).log(10);
}
function lb() {
  return Fc(this, arguments, "lt");
}
function sb() {
  return Fc(this, arguments, "gt");
}
function ub(e, n) {
  return new this(e).mod(n);
}
function db(e, n) {
  return new this(e).mul(n);
}
function cb(e, n) {
  return new this(e).pow(n);
}
function fb(e) {
  var n, t, o, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : hn(e, 1, bt), o = Math.ceil(e / ge), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(o)); a < o; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(o *= 4); a < o; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = o / 4;
    } else
      throw Error(zc);
  else
    for (; a < o; )
      l[a++] = Math.random() * 1e7 | 0;
  for (o = l[--a], e %= ge, o && e && (r = Je(10, ge - e), l[a] = (o / r | 0) * r); l[a] === 0; a--)
    l.pop();
  if (a < 0)
    t = 0, l = [0];
  else {
    for (t = -1; l[0] === 0; t -= ge)
      l.shift();
    for (o = 1, r = l[0]; r >= 10; r /= 10)
      o++;
    o < ge && (t -= ge - o);
  }
  return i.e = t, i.d = l, i;
}
function vb(e) {
  return me(e = new this(e), e.e + 1, this.rounding);
}
function mb(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function pb(e) {
  return new this(e).sin();
}
function hb(e) {
  return new this(e).sinh();
}
function gb(e) {
  return new this(e).sqrt();
}
function bb(e, n) {
  return new this(e).sub(n);
}
function yb() {
  var e = 0, n = arguments, t = new this(n[e]);
  for (ye = !1; t.s && ++e < n.length; )
    t = t.plus(n[e]);
  return ye = !0, me(t, this.precision, this.rounding);
}
function $b(e) {
  return new this(e).tan();
}
function wb(e) {
  return new this(e).tanh();
}
function Sb(e) {
  return me(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var at = K.constructor = Wc(ha);
ir = new at(ir);
lr = new at(lr);
const Cb = {
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
}, _s = 100, xs = 600, { name: kb, n: Pb, classes: Ob } = te("counter"), Tb = ["inputmode", "readonly", "disabled"];
function Eb(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = ae("var-form-details");
  return h(), S(
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
          }, null, 46, Tb), [
            [Xv, e.inputValue]
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
const qc = ne({
  name: kb,
  components: {
    VarButton: mn,
    VarIcon: Ue,
    VarFormDetails: pn
  },
  directives: { Ripple: Ke },
  inheritAttrs: !1,
  props: Cb,
  setup(e) {
    const n = w(""), { bindForm: t, form: o } = Mn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = In(), { readonly: s, disabled: u } = o ?? {}, d = V(() => {
      const { max: Z, modelValue: Q } = e;
      return Z != null && A(Q) >= A(Z);
    }), c = V(() => {
      const { min: Z, modelValue: Q } = e;
      return Z != null && A(Q) <= A(Z);
    });
    let f, m, b, p;
    y(t, {
      reset: O,
      validate: k,
      resetValidation: l
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
        const { validateTrigger: Q, rules: j, modelValue: B } = e;
        a(Q, Z, j, B);
      });
    }
    function O() {
      const { min: Z } = e;
      y(e["onUpdate:modelValue"], Z != null ? A(Z) : 0), l();
    }
    function $(Z) {
      const { decimalLength: Q, max: j, min: B } = e;
      let M = A(Z);
      return j != null && M > A(j) && (M = A(j)), B != null && M < A(B) && (M = A(B)), Z = String(M), Q != null && (Z = M.toFixed(A(Q))), Z;
    }
    function C(Z) {
      const { lazyChange: Q, onBeforeChange: j } = e, { value: B } = Z.target, M = $(B);
      Q ? y(j, A(M), W) : G(M), T("onInputChange");
    }
    function I() {
      const {
        disabled: Z,
        readonly: Q,
        disableDecrement: j,
        decrementButton: B,
        lazyChange: M,
        step: x,
        modelValue: q,
        onDecrement: Y,
        onBeforeChange: X
      } = e;
      if (u != null && u.value || s != null && s.value || Z || Q || j || !B || c.value)
        return;
      const ee = new at(A(q)).minus(new at(A(x))).toString(), pe = $(ee), ke = A(pe);
      y(Y, ke), M ? y(X, ke, W) : (G(pe), T("onDecrement"));
    }
    function P() {
      const {
        disabled: Z,
        readonly: Q,
        disableIncrement: j,
        incrementButton: B,
        lazyChange: M,
        step: x,
        modelValue: q,
        onIncrement: Y,
        onBeforeChange: X
      } = e;
      if (u != null && u.value || s != null && s.value || Z || Q || j || !B || d.value)
        return;
      const ee = new at(A(q)).plus(new at(A(x))).toString(), pe = $(ee), ke = A(pe);
      y(Y, ke), M ? y(X, ke, W) : (G(pe), T("onIncrement"));
    }
    function D() {
      const { press: Z, lazyChange: Q } = e;
      !Z || Q || (p = window.setTimeout(() => {
        ie();
      }, xs));
    }
    function E() {
      const { press: Z, lazyChange: Q } = e;
      !Z || Q || (b = window.setTimeout(() => {
        U();
      }, xs));
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
      }, _s);
    }
    function ie() {
      m = window.setTimeout(() => {
        I(), ie();
      }, _s);
    }
    function G(Z) {
      n.value = Z;
      const Q = A(Z);
      y(e["onUpdate:modelValue"], Q);
    }
    function W(Z) {
      G($(String(Z))), T("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: Pb,
      classes: Ob,
      formatElevation: gn,
      validate: k,
      reset: O,
      resetValidation: l,
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
qc.render = Eb;
var tl = qc;
oe(tl);
const bE = tl;
var $a = tl, Gc = 60, Xc = Gc * 60, Kc = Xc * 24, Ib = Kc * 7, Ht = 1e3, Vr = Gc * Ht, eu = Xc * Ht, Mb = Kc * Ht, Db = Ib * Ht, ol = "millisecond", Nt = "second", Vt = "minute", At = "hour", _n = "day", Xo = "week", Nn = "month", Zc = "quarter", xn = "year", zt = "date", Bb = "YYYY-MM-DDTHH:mm:ssZ", nu = "Invalid Date", Nb = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Vb = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Ab = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var wa = function(n, t, o) {
  var r = String(n);
  return !r || r.length >= t ? n : "" + Array(t + 1 - r.length).join(o) + n;
}, zb = function(n) {
  var t = -n.utcOffset(), o = Math.abs(t), r = Math.floor(o / 60), a = o % 60;
  return (t <= 0 ? "+" : "-") + wa(r, 2, "0") + ":" + wa(a, 2, "0");
}, Lb = function e(n, t) {
  if (n.date() < t.date())
    return -e(t, n);
  var o = (t.year() - n.year()) * 12 + (t.month() - n.month()), r = n.clone().add(o, Nn), a = t - r < 0, i = n.clone().add(o + (a ? -1 : 1), Nn);
  return +(-(o + (t - r) / (a ? r - i : i - r)) || 0);
}, Rb = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Ub = function(n) {
  var t = {
    M: Nn,
    y: xn,
    w: Xo,
    d: _n,
    D: zt,
    h: At,
    m: Vt,
    s: Nt,
    ms: ol,
    Q: Zc
  };
  return t[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Hb = function(n) {
  return n === void 0;
};
const Fb = {
  s: wa,
  z: zb,
  m: Lb,
  a: Rb,
  p: Ub,
  u: Hb
};
var no = "en", St = {};
St[no] = Ab;
var rl = function(n) {
  return n instanceof kr;
}, ur = function e(n, t, o) {
  var r;
  if (!n)
    return no;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    St[a] && (r = a), t && (St[a] = t, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    St[l] = n, r = l;
  }
  return !o && r && (no = r), r || !o && no;
}, ce = function(n, t) {
  if (rl(n))
    return n.clone();
  var o = typeof t == "object" ? t : {};
  return o.date = n, o.args = arguments, new kr(o);
}, Yb = function(n, t) {
  return ce(n, {
    locale: t.$L,
    utc: t.$u,
    x: t.$x,
    $offset: t.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ae = Fb;
Ae.l = ur;
Ae.i = rl;
Ae.w = Yb;
var jb = function(n) {
  var t = n.date, o = n.utc;
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ae.u(t))
    return /* @__PURE__ */ new Date();
  if (t instanceof Date)
    return new Date(t);
  if (typeof t == "string" && !/Z$/i.test(t)) {
    var r = t.match(Nb);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return o ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(t);
}, kr = /* @__PURE__ */ function() {
  function e(t) {
    this.$L = ur(t.locale, null, !0), this.parse(t);
  }
  var n = e.prototype;
  return n.parse = function(o) {
    this.$d = jb(o), this.$x = o.x || {}, this.init();
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
    var a = this, i = Ae.u(r) ? !0 : r, l = Ae.p(o), s = function(k, T) {
      var O = Ae.w(a.$u ? Date.UTC(a.$y, T, k) : new Date(a.$y, T, k), a);
      return i ? O : O.endOf(_n);
    }, u = function(k, T) {
      var O = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Ae.w(a.toDate()[k].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? O : $).slice(T)
      ), a);
    }, d = this.$W, c = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case xn:
        return i ? s(1, 0) : s(31, 11);
      case Nn:
        return i ? s(1, c) : s(0, c + 1);
      case Xo: {
        var b = this.$locale().weekStart || 0, p = (d < b ? d + 7 : d) - b;
        return s(i ? f - p : f + (6 - p), c);
      }
      case _n:
      case zt:
        return u(m + "Hours", 0);
      case At:
        return u(m + "Minutes", 1);
      case Vt:
        return u(m + "Seconds", 2);
      case Nt:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(o) {
    return this.startOf(o, !1);
  }, n.$set = function(o, r) {
    var a, i = Ae.p(o), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[_n] = l + "Date", a[zt] = l + "Date", a[Nn] = l + "Month", a[xn] = l + "FullYear", a[At] = l + "Hours", a[Vt] = l + "Minutes", a[Nt] = l + "Seconds", a[ol] = l + "Milliseconds", a)[i], u = i === _n ? this.$D + (r - this.$W) : r;
    if (i === Nn || i === xn) {
      var d = this.clone().set(zt, 1);
      d.$d[s](u), d.init(), this.$d = d.set(zt, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(o, r) {
    return this.clone().$set(o, r);
  }, n.get = function(o) {
    return this[Ae.p(o)]();
  }, n.add = function(o, r) {
    var a = this, i;
    o = Number(o);
    var l = Ae.p(r), s = function(f) {
      var m = ce(a);
      return Ae.w(m.date(m.date() + Math.round(f * o)), a);
    };
    if (l === Nn)
      return this.set(Nn, this.$M + o);
    if (l === xn)
      return this.set(xn, this.$y + o);
    if (l === _n)
      return s(1);
    if (l === Xo)
      return s(7);
    var u = (i = {}, i[Vt] = Vr, i[At] = eu, i[Nt] = Ht, i)[l] || 1, d = this.$d.getTime() + o * u;
    return Ae.w(d, this);
  }, n.subtract = function(o, r) {
    return this.add(o * -1, r);
  }, n.format = function(o) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || nu;
    var i = o || Bb, l = Ae.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, m = a.meridiem, b = function(O, $, C, I) {
      return O && (O[$] || O(r, i)) || C[$].slice(0, I);
    }, p = function(O) {
      return Ae.s(s % 12 || 12, O, "0");
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
      H: String(s),
      HH: Ae.s(s, 2, "0"),
      h: p(1),
      hh: p(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Ae.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ae.s(this.$s, 2, "0"),
      SSS: Ae.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(Vb, function(T, O) {
      return O || k[T] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(o, r, a) {
    var i, l = Ae.p(r), s = ce(o), u = (s.utcOffset() - this.utcOffset()) * Vr, d = this - s, c = Ae.m(this, s);
    return c = (i = {}, i[xn] = c / 12, i[Nn] = c, i[Zc] = c / 3, i[Xo] = (d - u) / Db, i[_n] = (d - u) / Mb, i[At] = d / eu, i[Vt] = d / Vr, i[Nt] = d / Ht, i)[l] || d, a ? c : Ae.a(c);
  }, n.daysInMonth = function() {
    return this.endOf(Nn).$D;
  }, n.$locale = function() {
    return St[this.$L];
  }, n.locale = function(o, r) {
    if (!o)
      return this.$L;
    var a = this.clone(), i = ur(o, r, !0);
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
}(), Jc = kr.prototype;
ce.prototype = Jc;
[["$ms", ol], ["$s", Nt], ["$m", Vt], ["$H", At], ["$W", _n], ["$M", Nn], ["$y", xn], ["$D", zt]].forEach(function(e) {
  Jc[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ce.extend = function(e, n) {
  return e.$i || (e(n, kr, ce), e.$i = !0), ce;
};
ce.locale = ur;
ce.isDayjs = rl;
ce.unix = function(e) {
  return ce(e * 1e3);
};
ce.en = St[no];
ce.Ls = St;
ce.p = {};
const Qc = function(e, n) {
  n.prototype.isSameOrBefore = function(t, o) {
    return this.isSame(t, o) || this.isBefore(t, o);
  };
}, _c = function(e, n) {
  n.prototype.isSameOrAfter = function(t, o) {
    return this.isSame(t, o) || this.isAfter(t, o);
  };
}, Ko = [
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
], xt = [
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
], Wb = {
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
}, { n: qb } = te("picker-header");
function Gb(e, n) {
  const t = ae("var-icon"), o = ae("var-button");
  return h(), S(
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
              (h(), S(
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
const xc = ne({
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
    const t = w(!1), o = w(0), r = V(() => {
      var i;
      const { date: l, type: s } = e, { previewMonth: u, previewYear: d } = l;
      if (s === "month")
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
      n: qb,
      reverse: t,
      showDate: r,
      checkDate: a
    };
  }
});
xc.render = Gb;
var ef = xc, Xb = Object.defineProperty, tu = Object.getOwnPropertySymbols, Kb = Object.prototype.hasOwnProperty, Zb = Object.prototype.propertyIsEnumerable, ou = (e, n, t) => n in e ? Xb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Jb = (e, n) => {
  for (var t in n || (n = {}))
    Kb.call(n, t) && ou(e, t, n[t]);
  if (tu)
    for (var t of tu(n))
      Zb.call(n, t) && ou(e, t, n[t]);
  return e;
};
ce.extend(Qc);
ce.extend(_c);
const { n: Lo, classes: Qb } = te("month-picker"), { n: Ro } = te("date-picker");
function _b(e, n) {
  const t = ae("panel-header"), o = ae("var-button");
  return h(), S(
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
              (h(), S("ul", { key: e.panelKey }, [
                (h(!0), S(
                  Be,
                  null,
                  Ge(e.MONTH_LIST, (r) => (h(), S("li", {
                    key: r.index
                  }, [
                    J(o, Ne({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, Jb({}, e.buttonProps(r.index)), {
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
const nf = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: mn,
    PanelHeader: ef
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
    const [t, o] = e.current.split("-"), r = w(!1), a = w(0), i = w(null), l = je({
      left: !1,
      right: !1
    }), s = V(() => e.choose.chooseYear === e.preview.previewYear), u = V(() => e.preview.previewYear === t), d = (k) => {
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
      } = e, D = `${O}-${k}`, E = () => P || I ? f(D) : (T == null ? void 0 : T.index) === k && s.value, L = (() => c(k) ? $ ? !$(D) : !1 : !0)(), U = () => L ? !0 : P || I ? !f(D) : !s.value || (T == null ? void 0 : T.index) !== k, ie = () => u.value && o === k && e.componentProps.showCurrent ? (P || I || s.value) && L ? !0 : P || I ? !f(D) : s.value ? (T == null ? void 0 : T.index) !== o : !0 : !1, G = () => L ? "" : ie() ? C ?? "" : E() ? "" : `${Ro()}-color-cover`, W = G().startsWith(Ro());
      return {
        outline: ie(),
        text: U(),
        color: U() ? "" : C,
        textColor: W ? "" : G(),
        [`${Ro()}-color-cover`]: W,
        class: Qb(Lo("button"), [L, Lo("button--disabled")]),
        disabled: L
      };
    }, b = (k, T) => {
      T.currentTarget.classList.contains(Lo("button--disabled")) || n("choose-month", k);
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
        O && (l.right = !ce(`${A(k) + 1}`).isSameOrBefore(ce(O), "year")), T && (l.left = !ce(`${A(k) - 1}`).isSameOrAfter(ce(T), "year"));
      },
      { immediate: !0 }
    ), {
      n: Lo,
      nDate: Ro,
      pack: xe,
      MONTH_LIST: Ko,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: g,
      buttonProps: m,
      getMonthAbbr: d,
      chooseMonth: b,
      checkDate: p
    };
  }
});
nf.render = _b;
var xb = nf;
const { n: ru, classes: ey } = te("year-picker"), ny = ["onClick"];
function ty(e, n) {
  return h(), S(
    "ul",
    {
      class: v(e.n())
    },
    [
      (h(!0), S(
        Be,
        null,
        Ge(e.yearList, (t) => (h(), S("li", {
          key: t,
          class: v(e.classes(e.n("item"), [t === e.toNumber(e.preview), e.n("item--active")])),
          style: F({ color: t === e.toNumber(e.preview) ? e.componentProps.color : "" }),
          onClick: (o) => e.chooseYear(t)
        }, re(t), 15, ny))),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
const tf = ne({
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
        componentProps: { max: i, min: l }
      } = e;
      if (!a)
        return r;
      let s = [A(a) + 100, A(a) - 100];
      if (i) {
        const u = ce(i).format("YYYY-MM-D"), d = A(u.split("-")[0]);
        if (d < s[0] && d > s[1] && (s = [d, s[1]]), d <= s[1])
          return [d];
      }
      if (l) {
        const u = ce(l).format("YYYY-MM-D"), d = A(u.split("-")[0]);
        if (d < s[0] && d > s[1] && (s = [s[0], d]), d >= s[0])
          return [d];
      }
      for (let u = s[0]; u >= s[1]; u--)
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
      classes: ey,
      yearList: t,
      chooseYear: o,
      toNumber: A
    };
  }
});
tf.render = ty;
var oy = tf, ry = Object.defineProperty, au = Object.getOwnPropertySymbols, ay = Object.prototype.hasOwnProperty, iy = Object.prototype.propertyIsEnumerable, iu = (e, n, t) => n in e ? ry(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ly = (e, n) => {
  for (var t in n || (n = {}))
    ay.call(n, t) && iu(e, t, n[t]);
  if (au)
    for (var t of au(n))
      iy.call(n, t) && iu(e, t, n[t]);
  return e;
};
ce.extend(Qc);
ce.extend(_c);
const { n: Mt, classes: sy } = te("day-picker"), { n: Uo } = te("date-picker");
function uy(e, n) {
  const t = ae("panel-header"), o = ae("var-button");
  return h(), S(
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
              (h(), S("div", { key: e.panelKey }, [
                N(
                  "ul",
                  {
                    class: v(e.n("head"))
                  },
                  [
                    (h(!0), S(
                      Be,
                      null,
                      Ge(e.sortWeekList, (r) => (h(), S(
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
                    (h(!0), S(
                      Be,
                      null,
                      Ge(e.days, (r, a) => (h(), S("li", { key: a }, [
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
const of = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: mn,
    PanelHeader: ef
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
    const [t, o, r] = e.current.split("-"), a = w([]), i = w(!1), l = w(0), s = w(null), u = je({
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
      const P = xt.findIndex((D) => D.index === e.componentProps.firstDayOfWeek);
      return P === -1 || P === 0 ? xt : xt.slice(P).concat(xt.slice(0, P));
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
          class: Mt("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: D },
        preview: { previewYear: E, previewMonth: H },
        componentProps: { allowedDates: L, color: U, multiple: ie, range: G }
      } = e, W = `${E}-${H.index}-${P}`, Z = () => G || ie ? T(W) : A(D) === P && c.value, j = (() => k(P) ? L ? !L(W) : !1 : !0)(), B = () => j ? !0 : G || ie ? !T(W) : !c.value || A(D) !== P, M = () => d.value && A(r) === P && e.componentProps.showCurrent ? (G || ie || c.value) && j ? !0 : G || ie ? !T(W) : c.value ? D !== r : !0 : !1, x = () => j ? "" : M() ? U ?? "" : Z() ? "" : `${Uo()}-color-cover`, q = x().startsWith(Uo());
      return {
        text: B(),
        outline: M(),
        textColor: q ? "" : x(),
        [`${Uo()}-color-cover`]: q,
        class: sy(Mt("button"), Mt("button--usable"), [j, Mt("button--disabled")]),
        disabled: j
      };
    }, $ = (P) => {
      i.value = P === "prev", l.value += P === "prev" ? -1 : 1, n("check-preview", "month", P);
    }, C = (P, D) => {
      D.currentTarget.classList.contains(Mt("button--disabled")) || n("choose-day", P);
    }, I = (P) => {
      s.value.checkDate(P);
    };
    return rn(() => {
      p(), g();
    }), fe(
      () => e.preview,
      () => {
        p(), g();
      }
    ), {
      n: Mt,
      nDate: Uo,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
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
of.render = uy;
var dy = of, cy = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: fy, n: vy, classes: my } = te("date-picker");
function py(e, n) {
  const t = ae("year-picker-panel"), o = ae("month-picker-panel"), r = ae("day-picker-panel");
  return h(), S(
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
                  var a, i, l;
                  return [
                    e.type === "month" ? (h(), S("div", {
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
                    ])) : (h(), S("div", {
                      key: `${e.chooseYear}${(l = e.chooseMonth) == null ? void 0 : l.index}${e.chooseDay}`
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
                      ]) : R(e.$slots, "date", it(Ne({ key: 2 }, e.slotProps)), () => [
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
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : _("v-if", !0)
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
const rf = ne({
  name: fy,
  components: {
    MonthPickerPanel: xb,
    YearPickerPanel: oy,
    DayPickerPanel: dy
  },
  props: Wb,
  setup(e) {
    const n = ce().format("YYYY-MM-D"), [t, o] = n.split("-"), r = Ko.find((ue) => ue.index === o), a = w(!1), i = w(!1), l = w(!0), s = w(), u = w(), d = w(), c = w(r), f = w(t), m = w(!1), b = w([]), p = w([]), g = w([]), k = w([]), T = w(null), O = w(null), $ = je({
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
      chooseMonth: s.value,
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
      return s.value && (Ee = ($e = (ue = xe.value.datePickerMonthDict) == null ? void 0 : ue[s.value.index].name) != null ? $e : ""), be ? `${b.value.length}${xe.value.datePickerSelected}` : Ee;
    }), D = V(() => {
      var ue, $e, be, Ie;
      const { multiple: Ee, range: Xe } = e;
      if (Xe) {
        const Jt = k.value.map((Uv) => ce(Uv).format("YYYY-MM-DD"));
        return Jt.length ? `${Jt[0]} ~ ${Jt[1]}` : "";
      }
      if (Ee)
        return `${p.value.length}${xe.value.datePickerSelected}`;
      if (!u.value || !s.value || !d.value)
        return "";
      const bn = ce(`${u.value}-${s.value.index}-${d.value}`).day(), Sn = xt.find((Jt) => Jt.index === `${bn}`), $t = ($e = (ue = xe.value.datePickerWeekDict) == null ? void 0 : ue[Sn.index].name) != null ? $e : "", Lv = (Ie = (be = xe.value.datePickerMonthDict) == null ? void 0 : be[s.value.index].name) != null ? Ie : "", Rv = Ct(d.value, 2, "0");
      return xe.value.lang === "zh-CN" ? `${s.value.index}-${Rv} ${$t.slice(0, 3)}` : `${$t.slice(0, 3)}, ${Lv.slice(0, 3)} ${d.value}`;
    }), E = V(() => a.value ? "year" : e.type === "month" || i.value ? "month" : e.type === "date" ? "date" : ""), H = V(() => !e.touchable || ["", "year"].includes(E.value)), L = V(() => {
      var ue, $e, be, Ie;
      const Ee = ce(`${u.value}-${(ue = s.value) == null ? void 0 : ue.index}-${d.value}`).day(), Xe = d.value ? Ct(d.value, 2, "0") : "";
      return {
        week: `${Ee}`,
        year: ($e = u.value) != null ? $e : "",
        month: (Ie = (be = s.value) == null ? void 0 : be.index) != null ? Ie : "",
        date: Xe
      };
    }), U = V(
      () => C.value.chooseRangeDay.map((ue) => ce(ue).format("YYYY-MM-DD"))
    ), ie = V(() => u.value === f.value), G = V(() => {
      var ue;
      return ((ue = s.value) == null ? void 0 : ue.index) === c.value.index;
    });
    let W = 0, Z = 0, Q = "", j;
    fe(
      () => e.modelValue,
      (ue) => {
        if (!(!Ce() || Ve(ue) || !ue))
          if (e.range) {
            if (!Me(ue))
              return;
            l.value = ue.length !== 1, se(ue, e.type);
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
      j = x(Math.abs(Ie), Math.abs(Ee)), Q = Ie > 0 ? "prev" : "next";
    }
    function Y() {
      return cy(this, null, function* () {
        if (H.value || j !== "x")
          return;
        const ue = E.value === "month" ? T : O;
        yield dn(), ue.value.forwardRef(Q), We();
      });
    }
    function X(ue, $e) {
      const be = $e === "month" ? g : k;
      if (be.value = l.value ? [ue, ue] : [be.value[0], ue], l.value = !l.value, l.value) {
        const Ee = ce(be.value[0]).isAfter(be.value[1]) ? [be.value[1], be.value[0]] : [...be.value];
        y(e["onUpdate:modelValue"], Ee), y(e.onChange, Ee);
      }
    }
    function ee(ue, $e) {
      const be = $e === "month" ? b : p, Ie = $e === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ee = be.value.map((bn) => ce(bn).format(Ie)), Xe = Ee.findIndex((bn) => bn === ue);
      Xe === -1 ? Ee.push(ue) : Ee.splice(Xe, 1), y(e["onUpdate:modelValue"], Ee), y(e.onChange, Ee);
    }
    function pe(ue, $e) {
      return !u.value || !s.value ? !1 : ie.value ? ue === "month" ? $e.index < s.value.index : G.value ? $e < A(d.value) : s.value.index > c.value.index : u.value > f.value;
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
        const $t = `${f.value}-${ue.index}`;
        Ie ? X($t, "month") : Ee ? ee($t, "month") : (y(Sn, $t), y(Xe, $t));
      } else
        c.value = ue, y(bn, A(f.value), A(c.value.index));
      i.value = !1;
    }
    function le(ue) {
      f.value = `${ue}`, a.value = !1, i.value = !0, y(e.onPreview, A(f.value), A(c.value.index));
    }
    function de(ue, $e) {
      const be = $e === "prev" ? -1 : 1;
      if (ue === "year")
        f.value = `${A(f.value) + be}`;
      else {
        let Ie = A(c.value.index) + be;
        Ie < 1 && (f.value = `${A(f.value) - 1}`, Ie = 12), Ie > 12 && (f.value = `${A(f.value) + 1}`, Ie = 1), c.value = Ko.find((Ee) => A(Ee.index) === Ie);
      }
      y(e.onPreview, A(f.value), A(c.value.index));
    }
    function Ce() {
      return (e.multiple || e.range) && !Me(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Me(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function Ve(ue) {
      return Me(ue) ? !1 : ue === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function se(ue, $e) {
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
      const [be, Ie, Ee] = $e.split("-"), Xe = Ko.find((bn) => bn.index === Ie);
      s.value = Xe, u.value = be, d.value = Ee, c.value = Xe, f.value = be;
    }
    function We() {
      Z = 0, W = 0, Q = "", j = void 0;
    }
    return {
      monthPanelEl: T,
      dayPanelEl: O,
      reverse: m,
      currentDate: n,
      chooseMonth: s,
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
      n: vy,
      classes: my,
      clickEl: B,
      handleTouchstart: M,
      handleTouchmove: q,
      handleTouchend: Y,
      getChooseDay: ke,
      getChooseMonth: Re,
      getChooseYear: le,
      checkPreview: de,
      formatElevation: gn
    };
  }
});
rf.render = py;
var al = rf;
oe(al);
const yE = al;
var Sa = al, hy = Object.defineProperty, lu = Object.getOwnPropertySymbols, gy = Object.prototype.hasOwnProperty, by = Object.prototype.propertyIsEnumerable, su = (e, n, t) => n in e ? hy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, yy = (e, n) => {
  for (var t in n || (n = {}))
    gy.call(n, t) && su(e, t, n[t]);
  if (lu)
    for (var t of lu(n))
      by.call(n, t) && su(e, t, n[t]);
  return e;
};
const $y = yy({
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
}, en(Po, [
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
var wy = Object.defineProperty, uu = Object.getOwnPropertySymbols, Sy = Object.prototype.hasOwnProperty, Cy = Object.prototype.propertyIsEnumerable, du = (e, n, t) => n in e ? wy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ky = (e, n) => {
  for (var t in n || (n = {}))
    Sy.call(n, t) && du(e, t, n[t]);
  if (uu)
    for (var t of uu(n))
      Cy.call(n, t) && du(e, t, n[t]);
  return e;
};
const { name: Py, n: Oy, classes: Ty } = te("dialog");
function Ey(e, n) {
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
          style: ky({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
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
              }, 8, ["class", "text-color", "color", "onClick"])) : _("v-if", !0),
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
              }, 8, ["class", "text-color", "color", "onClick"])) : _("v-if", !0)
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
const af = ne({
  name: Py,
  components: {
    VarPopup: dt,
    VarButton: mn
  },
  inheritAttrs: !1,
  props: $y,
  setup(e) {
    const n = w(!1), t = w(!1);
    fe(
      () => e.show,
      (l) => {
        n.value = l;
      },
      { immediate: !0 }
    ), fe(
      () => e.closeOnClickOverlay,
      (l) => {
        if (e.onBeforeClose != null) {
          t.value = !1;
          return;
        }
        t.value = l;
      },
      { immediate: !0 }
    );
    function o() {
      return y(e["onUpdate:show"], !1);
    }
    function r() {
      const { closeOnClickOverlay: l, onClickOverlay: s, onBeforeClose: u } = e;
      if (y(s), !!l) {
        if (u != null) {
          y(u, "close", o);
          return;
        }
        y(e["onUpdate:show"], !1);
      }
    }
    function a() {
      const { onBeforeClose: l, onConfirm: s } = e;
      if (y(s), l != null) {
        y(l, "confirm", o);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    function i() {
      const { onBeforeClose: l, onCancel: s } = e;
      if (y(s), l != null) {
        y(l, "cancel", o);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    return {
      pack: xe,
      popupShow: n,
      popupCloseOnClickOverlay: t,
      n: Oy,
      classes: Ty,
      handleClickOverlay: r,
      confirm: a,
      cancel: i,
      toSizeUnit: we
    };
  }
});
af.render = Ey;
var Io = af, Iy = Object.defineProperty, My = Object.defineProperties, Dy = Object.getOwnPropertyDescriptors, cu = Object.getOwnPropertySymbols, By = Object.prototype.hasOwnProperty, Ny = Object.prototype.propertyIsEnumerable, fu = (e, n, t) => n in e ? Iy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ar = (e, n) => {
  for (var t in n || (n = {}))
    By.call(n, t) && fu(e, t, n[t]);
  if (cu)
    for (var t of cu(n))
      Ny.call(n, t) && fu(e, t, n[t]);
  return e;
}, Vy = (e, n) => My(e, Dy(n));
let nt, dr = {};
function Ay(e = {}) {
  return Qe(e) ? Vy(Ar({}, dr), { message: e }) : Ar(Ar({}, dr), e);
}
function Et(e) {
  return gt() ? new Promise((n) => {
    Et.close();
    const t = Ay(e), o = je(t);
    o.teleport = "body", nt = o;
    const { unmountInstance: r } = Kt(Io, o, {
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
        y(o.onClosed), r(), nt === o && (nt = null);
      },
      onRouteChange: () => {
        r(), nt === o && (nt = null);
      },
      "onUpdate:show": (a) => {
        o.show = a;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Et.setDefaultOptions = function(e) {
  dr = e;
};
Et.resetDefaultOptions = function() {
  dr = {};
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
const $E = Io;
var Ca = Et;
const zy = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: Ly, n: Ry, classes: Uy } = te("divider");
function Hy(e, n) {
  return h(), S(
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
      e.vertical ? _("v-if", !0) : R(e.$slots, "default", { key: 0 }, () => [
        e.description ? (h(), S(
          "span",
          {
            key: 0,
            class: v(e.n("text"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const lf = ne({
  name: Ly,
  props: zy,
  setup(e, { slots: n }) {
    const t = w(!1), o = V(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = V(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (pi(i) || l)
        return { margin: s };
      const u = A(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${we(d)})`,
        left: u > 0 ? we(d) : we(0)
      };
    });
    rn(a), So(a);
    function a() {
      const { description: i, vertical: l } = e;
      t.value = (n.default || i != null) && !l;
    }
    return {
      n: Ry,
      classes: Uy,
      withText: t,
      style: r,
      withPresetInset: o
    };
  }
});
lf.render = Hy;
var il = lf;
oe(il);
const wE = il;
var ka = il;
const Fy = {
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
var Yy = Object.defineProperty, jy = Object.defineProperties, Wy = Object.getOwnPropertyDescriptors, vu = Object.getOwnPropertySymbols, qy = Object.prototype.hasOwnProperty, Gy = Object.prototype.propertyIsEnumerable, mu = (e, n, t) => n in e ? Yy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, pu = (e, n) => {
  for (var t in n || (n = {}))
    qy.call(n, t) && mu(e, t, n[t]);
  if (vu)
    for (var t of vu(n))
      Gy.call(n, t) && mu(e, t, n[t]);
  return e;
}, hu = (e, n) => jy(e, Wy(n)), Xy = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: Ky, n: Zy, classes: Jy } = te("drag");
function Qy(e, n) {
  return h(), Se(Xn, {
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
const sf = ne({
  name: Ky,
  inheritAttrs: !1,
  props: Fy,
  setup(e, { attrs: n }) {
    const t = w(null), o = w(0), r = w(0), a = w(!1), i = w(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: m, resetTouch: b } = hr(), { disabled: p } = Zt(), g = je({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    fe(() => e.boundary, H), ko(U), rn(() => {
      H(), U();
    });
    function k(G) {
      e.disabled || (c(G), C());
    }
    function T(G) {
      return Xy(this, null, function* () {
        !l.value || e.disabled || (f(G), G.preventDefault(), i.value = !1, a.value = !0, e.direction.includes("x") && (o.value += u.value), e.direction.includes("y") && (r.value += d.value), E());
      });
    }
    function O() {
      e.disabled || (m(), i.value = !0, D());
    }
    function $(G) {
      s.value || y(e.onClick, G);
    }
    function C() {
      const { left: G, top: W } = I();
      o.value = G, r.value = W;
    }
    function I() {
      const G = _e(t.value), W = _e(window), Z = G.top - W.top, Q = W.bottom - G.bottom, j = G.left - W.left, B = W.right - G.right, { width: M, height: x } = G, { width: q, height: Y } = W;
      return {
        top: Z,
        bottom: Q,
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
      const G = I(), W = g.left, Z = G.windowWidth - g.right - G.width, Q = g.top, j = G.windowHeight - g.bottom - G.height;
      return {
        minX: W,
        minY: Q,
        // fallback the drag element overflows boundary
        maxX: W < Z ? Z : W,
        maxY: Q < j ? j : Q
      };
    }
    function D() {
      if (e.attraction == null)
        return;
      const { halfWidth: G, halfHeight: W, top: Z, bottom: Q, left: j, right: B } = I(), { minX: M, minY: x, maxX: q, maxY: Y } = P(), X = j + G - g.left, ee = B + G - g.right, pe = Z + W - g.top, ke = Q + W - g.bottom, Re = X <= ee, le = pe <= ke;
      e.attraction.includes("x") && (o.value = Re ? M : q), e.attraction.includes("y") && (r.value = le ? x : Y);
    }
    function E() {
      const { minX: G, minY: W, maxX: Z, maxY: Q } = P();
      o.value = st(o.value, G, Z), r.value = st(r.value, W, Q);
    }
    function H() {
      const { top: G = 0, bottom: W = 0, left: Z = 0, right: Q = 0 } = e.boundary;
      g.top = He(G), g.bottom = He(W), g.left = He(Z), g.right = He(Q);
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
      dragging: s,
      teleportDisabled: p,
      n: Zy,
      classes: Jy,
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
sf.render = Qy;
var ll = sf;
oe(ll);
const SE = ll;
var cr = ll, _y = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zo(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return _y[n];
  });
}
var jn = "top", vt = "bottom", kt = "right", lt = "left", Pr = "auto", Or = [jn, vt, kt, lt], Tr = "start", fo = "end", xy = "clippingParents", uf = "viewport", Qt = "popper", e1 = "reference", gu = /* @__PURE__ */ Or.reduce(function(e, n) {
  return e.concat([n + "-" + Tr, n + "-" + fo]);
}, []), df = /* @__PURE__ */ [].concat(Or, [Pr]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Tr, n + "-" + fo]);
}, []), n1 = "beforeRead", t1 = "read", o1 = "afterRead", r1 = "beforeMain", a1 = "main", i1 = "afterMain", l1 = "beforeWrite", s1 = "write", u1 = "afterWrite", Pa = [n1, t1, o1, r1, a1, i1, l1, s1, u1];
function Wn(e) {
  return e.split("-")[0];
}
var d1 = {
  start: "end",
  end: "start"
};
function bu(e) {
  return e.replace(/start|end/g, function(n) {
    return d1[n];
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
function Pt(e) {
  var n = Dn(e).Element;
  return e instanceof n || e instanceof Element;
}
function kn(e) {
  var n = Dn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function sl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Dn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function yt(e) {
  return ((Pt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var to = Math.max, yu = Math.min, Ft = Math.round;
function Oa() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function cf() {
  return !/^((?!chrome|android).)*safari/i.test(Oa());
}
function Yt(e, n, t) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  n && kn(e) && (r = e.offsetWidth > 0 && Ft(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ft(o.height) / e.offsetHeight || 1);
  var i = Pt(e) ? Dn(e) : window, l = i.visualViewport, s = !cf() && t, u = (o.left + (s && l ? l.offsetLeft : 0)) / r, d = (o.top + (s && l ? l.offsetTop : 0)) / a, c = o.width / r, f = o.height / a;
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
function ul(e) {
  var n = Dn(e), t = n.pageXOffset, o = n.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function dl(e) {
  return Yt(yt(e)).left + ul(e).scrollLeft;
}
function c1(e, n) {
  var t = Dn(e), o = yt(e), r = t.visualViewport, a = o.clientWidth, i = o.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = cf();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + dl(e),
    y: s
  };
}
function Ln(e) {
  return Dn(e).getComputedStyle(e);
}
function f1(e) {
  var n, t = yt(e), o = ul(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = to(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = to(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + dl(e), s = -o.scrollTop;
  return Ln(r || t).direction === "rtl" && (l += to(t.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function Hn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Er(e) {
  return Hn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (sl(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    yt(e)
  );
}
function cl(e) {
  var n = Ln(e), t = n.overflow, o = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + r + o);
}
function ff(e) {
  return ["html", "body", "#document"].indexOf(Hn(e)) >= 0 ? e.ownerDocument.body : kn(e) && cl(e) ? e : ff(Er(e));
}
function oo(e, n) {
  var t;
  n === void 0 && (n = []);
  var o = ff(e), r = o === ((t = e.ownerDocument) == null ? void 0 : t.body), a = Dn(o), i = r ? [a].concat(a.visualViewport || [], cl(o) ? o : []) : o, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(oo(Er(i)))
  );
}
function v1(e) {
  return ["table", "td", "th"].indexOf(Hn(e)) >= 0;
}
function $u(e) {
  return !kn(e) || // https://github.com/popperjs/popper-core/issues/837
  Ln(e).position === "fixed" ? null : e.offsetParent;
}
function m1(e) {
  var n = /firefox/i.test(Oa()), t = /Trident/i.test(Oa());
  if (t && kn(e)) {
    var o = Ln(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Er(e);
  for (sl(r) && (r = r.host); kn(r) && ["html", "body"].indexOf(Hn(r)) < 0; ) {
    var a = Ln(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function fl(e) {
  for (var n = Dn(e), t = $u(e); t && v1(t) && Ln(t).position === "static"; )
    t = $u(t);
  return t && (Hn(t) === "html" || Hn(t) === "body" && Ln(t).position === "static") ? n : t || m1(e) || n;
}
function p1(e, n) {
  var t = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (t && sl(t)) {
    var o = n;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Ta(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function h1(e, n) {
  var t = Yt(e, !1, n === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function wu(e, n, t) {
  return n === uf ? Ta(c1(e, t)) : Pt(n) ? h1(n, t) : Ta(f1(yt(e)));
}
function g1(e) {
  var n = oo(Er(e)), t = ["absolute", "fixed"].indexOf(Ln(e).position) >= 0, o = t && kn(e) ? fl(e) : e;
  return Pt(o) ? n.filter(function(r) {
    return Pt(r) && p1(r, o) && Hn(r) !== "body";
  }) : [];
}
function b1(e, n, t, o) {
  var r = n === "clippingParents" ? g1(e) : [].concat(n), a = [].concat(r, [t]), i = a[0], l = a.reduce(function(s, u) {
    var d = wu(e, u, o);
    return s.top = to(d.top, s.top), s.right = yu(d.right, s.right), s.bottom = yu(d.bottom, s.bottom), s.left = to(d.left, s.left), s;
  }, wu(e, i, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function vo(e) {
  return e.split("-")[1];
}
function y1(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vf(e) {
  var n = e.reference, t = e.element, o = e.placement, r = o ? Wn(o) : null, a = o ? vo(o) : null, i = n.x + n.width / 2 - t.width / 2, l = n.y + n.height / 2 - t.height / 2, s;
  switch (r) {
    case jn:
      s = {
        x: i,
        y: n.y - t.height
      };
      break;
    case vt:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case kt:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case lt:
      s = {
        x: n.x - t.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = r ? y1(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Tr:
        s[u] = s[u] - (n[d] / 2 - t[d] / 2);
        break;
      case fo:
        s[u] = s[u] + (n[d] / 2 - t[d] / 2);
        break;
    }
  }
  return s;
}
function $1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function w1(e) {
  return Object.assign({}, $1(), e);
}
function S1(e, n) {
  return n.reduce(function(t, o) {
    return t[o] = e, t;
  }, {});
}
function mf(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = o === void 0 ? e.placement : o, a = t.strategy, i = a === void 0 ? e.strategy : a, l = t.boundary, s = l === void 0 ? xy : l, u = t.rootBoundary, d = u === void 0 ? uf : u, c = t.elementContext, f = c === void 0 ? Qt : c, m = t.altBoundary, b = m === void 0 ? !1 : m, p = t.padding, g = p === void 0 ? 0 : p, k = w1(typeof g != "number" ? g : S1(g, Or)), T = f === Qt ? e1 : Qt, O = e.rects.popper, $ = e.elements[b ? T : f], C = b1(Pt($) ? $ : $.contextElement || yt(e.elements.popper), s, d, i), I = Yt(e.elements.reference), P = vf({
    reference: I,
    element: O,
    strategy: "absolute",
    placement: r
  }), D = Ta(Object.assign({}, O, P)), E = f === Qt ? D : I, H = {
    top: C.top - E.top + k.top,
    bottom: E.bottom - C.bottom + k.bottom,
    left: C.left - E.left + k.left,
    right: E.right - C.right + k.right
  }, L = e.modifiersData.offset;
  if (f === Qt && L) {
    var U = L[r];
    Object.keys(H).forEach(function(ie) {
      var G = [kt, vt].indexOf(ie) >= 0 ? 1 : -1, W = [jn, vt].indexOf(ie) >= 0 ? "y" : "x";
      H[ie] += U[W] * G;
    });
  }
  return H;
}
function C1(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = t.boundary, a = t.rootBoundary, i = t.padding, l = t.flipVariations, s = t.allowedAutoPlacements, u = s === void 0 ? df : s, d = vo(o), c = d ? l ? gu : gu.filter(function(b) {
    return vo(b) === d;
  }) : Or, f = c.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  f.length === 0 && (f = c, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(b, p) {
    return b[p] = mf(e, {
      placement: p,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[Wn(p)], b;
  }, {});
  return Object.keys(m).sort(function(b, p) {
    return m[b] - m[p];
  });
}
function k1(e) {
  if (Wn(e) === Pr)
    return [];
  var n = Zo(e);
  return [bu(e), n, bu(n)];
}
function P1(e) {
  var n = e.state, t = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var r = t.mainAxis, a = r === void 0 ? !0 : r, i = t.altAxis, l = i === void 0 ? !0 : i, s = t.fallbackPlacements, u = t.padding, d = t.boundary, c = t.rootBoundary, f = t.altBoundary, m = t.flipVariations, b = m === void 0 ? !0 : m, p = t.allowedAutoPlacements, g = n.options.placement, k = Wn(g), T = k === g, O = s || (T || !b ? [Zo(g)] : k1(g)), $ = [g].concat(O).reduce(function(X, ee) {
      return X.concat(Wn(ee) === Pr ? C1(n, {
        placement: ee,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: p
      }) : ee);
    }, []), C = n.rects.reference, I = n.rects.popper, P = /* @__PURE__ */ new Map(), D = !0, E = $[0], H = 0; H < $.length; H++) {
      var L = $[H], U = Wn(L), ie = vo(L) === Tr, G = [jn, vt].indexOf(U) >= 0, W = G ? "width" : "height", Z = mf(n, {
        placement: L,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), Q = G ? ie ? kt : lt : ie ? vt : jn;
      C[W] > I[W] && (Q = Zo(Q));
      var j = Zo(Q), B = [];
      if (a && B.push(Z[U] <= 0), l && B.push(Z[Q] <= 0, Z[j] <= 0), B.every(function(X) {
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
            return Re.slice(0, ee).every(function(le) {
              return le;
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
const O1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: P1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function T1(e, n, t) {
  var o = Wn(e), r = [lt, jn].indexOf(o) >= 0 ? -1 : 1, a = typeof t == "function" ? t(Object.assign({}, n, {
    placement: e
  })) : t, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [lt, kt].indexOf(o) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function E1(e) {
  var n = e.state, t = e.options, o = e.name, r = t.offset, a = r === void 0 ? [0, 0] : r, i = df.reduce(function(d, c) {
    return d[c] = T1(c, n.rects, a), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[o] = i;
}
const I1 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: E1
};
var M1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function D1(e) {
  var n = e.x, t = e.y, o = window, r = o.devicePixelRatio || 1;
  return {
    x: Ft(n * r) / r || 0,
    y: Ft(t * r) / r || 0
  };
}
function Su(e) {
  var n, t = e.popper, o = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, b = i.y, p = b === void 0 ? 0 : b, g = typeof d == "function" ? d({
    x: m,
    y: p
  }) : {
    x: m,
    y: p
  };
  m = g.x, p = g.y;
  var k = i.hasOwnProperty("x"), T = i.hasOwnProperty("y"), O = lt, $ = jn, C = window;
  if (u) {
    var I = fl(t), P = "clientHeight", D = "clientWidth";
    if (I === Dn(t) && (I = yt(t), Ln(I).position !== "static" && l === "absolute" && (P = "scrollHeight", D = "scrollWidth")), I = I, r === jn || (r === lt || r === kt) && a === fo) {
      $ = vt;
      var E = c && I === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[P]
      );
      p -= E - o.height, p *= s ? 1 : -1;
    }
    if (r === lt || (r === jn || r === vt) && a === fo) {
      O = kt;
      var H = c && I === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[D]
      );
      m -= H - o.width, m *= s ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: l
  }, u && M1), U = d === !0 ? D1({
    x: m,
    y: p
  }) : {
    x: m,
    y: p
  };
  if (m = U.x, p = U.y, s) {
    var ie;
    return Object.assign({}, L, (ie = {}, ie[$] = T ? "0" : "", ie[O] = k ? "0" : "", ie.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", ie));
  }
  return Object.assign({}, L, (n = {}, n[$] = T ? p + "px" : "", n[O] = k ? m + "px" : "", n.transform = "", n));
}
function B1(e) {
  var n = e.state, t = e.options, o = t.gpuAcceleration, r = o === void 0 ? !0 : o, a = t.adaptive, i = a === void 0 ? !0 : a, l = t.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = Ln(n.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(c) {
      return u.indexOf(c) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Wn(n.placement),
    variation: vo(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Su(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Su(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const pf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: B1,
  data: {}
};
function N1(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function V1(e) {
  return e === Dn(e) || !kn(e) ? ul(e) : N1(e);
}
function A1(e) {
  var n = e.getBoundingClientRect(), t = Ft(n.width) / e.offsetWidth || 1, o = Ft(n.height) / e.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function z1(e, n, t) {
  t === void 0 && (t = !1);
  var o = kn(n), r = kn(n) && A1(n), a = yt(n), i = Yt(e, r, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((Hn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  cl(a)) && (l = V1(n)), kn(n) ? (s = Yt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = dl(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function L1(e) {
  var n = Yt(e), t = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(n.width - t) <= 1 && (t = n.width), Math.abs(n.height - o) <= 1 && (o = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: t,
    height: o
  };
}
function R1(e) {
  var n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    n.set(a.name, a);
  });
  function r(a) {
    t.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(l) {
      if (!t.has(l)) {
        var s = n.get(l);
        s && r(s);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    t.has(a.name) || r(a);
  }), o;
}
function U1(e) {
  var n = R1(e);
  return Pa.reduce(function(t, o) {
    return t.concat(n.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function H1(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(t) {
      Promise.resolve().then(function() {
        n = void 0, t(e());
      });
    })), n;
  };
}
function Zn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    t[o - 1] = arguments[o];
  return [].concat(t).reduce(function(r, a) {
    return r.replace(/%s/, a);
  }, e);
}
var wt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', F1 = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Cu = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Y1(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Cu).filter(function(t, o, r) {
      return r.indexOf(t) === o;
    }).forEach(function(t) {
      switch (t) {
        case "name":
          typeof n.name != "string" && console.error(Zn(wt, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Zn(wt, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Pa.indexOf(n.phase) < 0 && console.error(Zn(wt, n.name, '"phase"', "either " + Pa.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Zn(wt, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Zn(wt, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Zn(wt, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Zn(wt, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
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
        }) == null && console.error(Zn(F1, String(n.name), o, o));
      });
    });
  });
}
function j1(e, n) {
  var t = /* @__PURE__ */ new Set();
  return e.filter(function(o) {
    var r = n(o);
    if (!t.has(r))
      return t.add(r), !0;
  });
}
function W1(e) {
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
var ku = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", q1 = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Pu = {
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
function G1(e) {
  e === void 0 && (e = {});
  var n = e, t = n.defaultModifiers, o = t === void 0 ? [] : t, r = n.defaultOptions, a = r === void 0 ? Pu : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Pu, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, c = [], f = !1, m = {
      state: d,
      setOptions: function(k) {
        var T = typeof k == "function" ? k(d.options) : k;
        p(), d.options = Object.assign({}, a, d.options, T), d.scrollParents = {
          reference: Pt(l) ? oo(l) : l.contextElement ? oo(l.contextElement) : [],
          popper: oo(s)
        };
        var O = U1(W1([].concat(o, d.options.modifiers)));
        if (d.orderedModifiers = O.filter(function(L) {
          return L.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = j1([].concat(O, d.options.modifiers), function(L) {
            var U = L.name;
            return U;
          });
          if (Y1($), Wn(d.options.placement) === Pr) {
            var C = d.orderedModifiers.find(function(L) {
              var U = L.name;
              return U === "flip";
            });
            C || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var I = Ln(s), P = I.marginTop, D = I.marginRight, E = I.marginBottom, H = I.marginLeft;
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
            reference: z1(T, fl(O), d.options.strategy === "fixed"),
            popper: L1(O)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(L) {
            return d.modifiersData[L.name] = Object.assign({}, L.data);
          });
          for (var $ = 0, C = 0; C < d.orderedModifiers.length; C++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(q1);
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
      update: H1(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        p(), f = !0;
      }
    };
    if (!Ou(l, s))
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
var Ho = {
  passive: !0
};
function X1(e) {
  var n = e.state, t = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, i = o.resize, l = i === void 0 ? !0 : i, s = Dn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", t.update, Ho);
  }), l && s.addEventListener("resize", t.update, Ho), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", t.update, Ho);
    }), l && s.removeEventListener("resize", t.update, Ho);
  };
}
const K1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: X1,
  data: {}
};
function Z1(e) {
  var n = e.state, t = e.name;
  n.modifiersData[t] = vf({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const J1 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Z1,
  data: {}
};
function Q1(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(t) {
    var o = n.styles[t] || {}, r = n.attributes[t] || {}, a = n.elements[t];
    !kn(a) || !Hn(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function _1(e) {
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
      var r = n.elements[o], a = n.attributes[o] || {}, i = Object.keys(n.styles.hasOwnProperty(o) ? n.styles[o] : t[o]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !kn(r) || !Hn(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const x1 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Q1,
  effect: _1,
  requires: ["computeStyles"]
};
var e$ = [K1, J1, pf, x1], n$ = /* @__PURE__ */ G1({
  defaultModifiers: e$
}), t$ = Object.defineProperty, o$ = Object.defineProperties, r$ = Object.getOwnPropertyDescriptors, Tu = Object.getOwnPropertySymbols, a$ = Object.prototype.hasOwnProperty, i$ = Object.prototype.propertyIsEnumerable, Eu = (e, n, t) => n in e ? t$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, zr = (e, n) => {
  for (var t in n || (n = {}))
    a$.call(n, t) && Eu(e, t, n[t]);
  if (Tu)
    for (var t of Tu(n))
      i$.call(n, t) && Eu(e, t, n[t]);
  return e;
}, Lr = (e, n) => o$(e, r$(n)), Iu = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
function hf(e) {
  const n = w(null), t = w(null), o = w({ width: 0, height: 0 }), r = io(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(E, H) {
      H ? (I(), y(e.onOpen)) : y(e.onClose);
    }
  }), { zIndex: a } = Oo(() => r.value, 1);
  let i = null, l = !1, s = !1;
  const u = () => {
    const { width: E, height: H } = Ot(n.value);
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
    e.trigger === "hover" && (s = !0, P());
  }, f = () => Iu(this, null, function* () {
    e.trigger === "hover" && (s = !1, yield dn(), !l && D());
  }), m = () => {
    e.trigger === "hover" && (l = !0);
  }, b = () => Iu(this, null, function* () {
    e.trigger === "hover" && (l = !1, yield dn(), !s && D());
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
      Lr(zr({}, O1), {
        enabled: r.value
      }),
      Lr(zr({}, I1), {
        options: {
          offset: [H, L]
        }
      }),
      Lr(zr({}, pf), {
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
  return Cd(C, "click", k), fe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], I), fe(() => e.disabled, D), $o(() => {
    var E;
    i = n$((E = C()) != null ? E : n.value, t.value, $());
  }), wo(() => {
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
}, { name: s$, n: u$, classes: d$ } = te("tooltip");
function c$(e, n) {
  return h(), S(
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
      (h(), Se(Xn, {
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
const gf = ne({
  name: s$,
  props: l$,
  setup(e) {
    const { disabled: n } = Zt(), {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
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
    } = hf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: we,
      n: u$,
      classes: d$,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
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
gf.render = c$;
var vl = gf;
oe(vl);
const CE = vl;
var fr = vl;
const f$ = {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
var v$ = Object.defineProperty, Mu = Object.getOwnPropertySymbols, m$ = Object.prototype.hasOwnProperty, p$ = Object.prototype.propertyIsEnumerable, Du = (e, n, t) => n in e ? v$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, h$ = (e, n) => {
  for (var t in n || (n = {}))
    m$.call(n, t) && Du(e, t, n[t]);
  if (Mu)
    for (var t of Mu(n))
      p$.call(n, t) && Du(e, t, n[t]);
  return e;
};
const { name: g$, n: b$, classes: y$ } = te("ellipsis"), $$ = { key: 0 };
function w$(e, n) {
  const t = ae("var-tooltip");
  return h(), Se(
    t,
    it(Co(e.tooltip)),
    {
      content: ve(() => [
        R(e.$slots, "tooltip-content", {}, () => {
          var o;
          return [
            (o = e.tooltip) != null && o.content ? (h(), S(
              "span",
              $$,
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
const bf = ne({
  name: g$,
  components: { VarTooltip: fr },
  props: f$,
  setup(e) {
    const n = w(!1), t = V(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), o = V(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : h$({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltip: o,
      expanding: n,
      rootStyles: t,
      n: b$,
      classes: y$,
      handleClick: r
    };
  }
});
bf.render = w$;
var ml = bf;
oe(ml);
const kE = ml;
var Ea = ml;
const S$ = {
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
  name: C$,
  classes: Rr,
  n: yn
} = te("fab");
var pl = ne({
  name: C$,
  inheritAttrs: !1,
  props: S$,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = io(e, "active"), r = w(null), a = w(null);
    fe(() => e.trigger, () => {
      o.value = !1;
    }), fe(() => e.disabled, () => {
      o.value = !1;
    }), fe(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var d;
      (d = a.value) == null || d.reset();
    }), Cd(r, "click", s);
    function i(d, c, f) {
      if (d.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          y(e.onClick, o.value, d);
          return;
        }
        o.value = c, y(e.onClick, o.value, d), y(o.value ? e.onOpen : e.onClose);
      }
    }
    function l(d, c) {
      e.trigger !== "hover" || e.disabled || c === 0 || (o.value = d, y(o.value ? e.onOpen : e.onClose));
    }
    function s() {
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
          class: Rr([o.value, yn("trigger-active-icon"), yn("trigger-inactive-icon")]),
          name: o.value ? e.activeIcon : e.inactiveIcon,
          size: o.value ? e.inactiveIconSize : e.activeIconSize,
          transition: 200,
          animationClass: yn("--trigger-icon-animation")
        }, null)]
      }), [[Rn, e.show]]);
    }
    return () => {
      var d;
      const c = kd((d = y(n.default)) != null ? d : []), f = pi(e.drag) ? {} : e.drag;
      return J(cr, Ne({
        ref: a,
        class: Rr(yn(`--position-${e.position}`), [!e.fixed, yn("--absolute")]),
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
          class: Rr(yn(), yn(`--direction-${e.direction}`), [e.safeArea, yn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, c.length),
          onMouseenter: () => l(!0, c.length)
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
oe(pl);
const PE = pl;
var Ia = pl;
const k$ = {
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
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: P$, n: O$ } = te("form");
function T$(e, n) {
  return h(), S(
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
const yf = ne({
  name: P$,
  props: k$,
  setup(e) {
    const n = V(() => e.disabled), t = V(() => e.readonly), { formItems: o, bindFormItems: r } = Zg();
    r({
      disabled: n,
      readonly: t
    });
    function i(f) {
      setTimeout(() => {
        const m = ct(f), b = m === window ? 0 : ws(m), p = ws(f) - b - He(e.scrollToErrorOffsetY);
        so(m, {
          top: p,
          animation: Jr
        });
      }, 300);
    }
    function l(f) {
      return Bu(this, null, function* () {
        f.preventDefault();
        const m = yield u();
        y(e.onSubmit, m);
      });
    }
    function s(f) {
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
      n: O$,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: d,
      resetValidation: c
    };
  }
});
yf.render = T$;
var Mo = yf;
Mo.useValidation = In;
Mo.useForm = Mn;
oe(Mo);
const OE = Mo;
var Ma = Mo;
const E$ = {
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
}, { name: I$, n: M$, classes: D$ } = te("image"), B$ = ["alt", "title", "lazy-loading", "lazy-error"], N$ = ["alt", "title", "src"];
function V$(e, n) {
  var t;
  const o = Le("lazy"), r = Le("ripple");
  return Oe((h(), S(
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
      e.lazy && !e.showErrorSlot ? Oe((h(), S("img", {
        key: 0,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: F({ objectFit: e.fit }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, B$)), [
        [o, (t = e.src) != null ? t : ""]
      ]) : _("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (h(), S("img", {
        key: 1,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: F({ objectFit: e.fit }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, N$)) : _("v-if", !0),
      e.showErrorSlot ? R(e.$slots, "error", { key: 2 }) : _("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const $f = ne({
  name: I$,
  directives: {
    Lazy: uo,
    Ripple: Ke
  },
  props: E$,
  setup(e, { slots: n }) {
    const t = w(!1);
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
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          y(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && o(i);
      } else
        y(e.onLoad, i);
    }
    function a(i) {
      y(e.onClick, i);
    }
    return {
      showErrorSlot: t,
      n: M$,
      classes: D$,
      toSizeUnit: we,
      handleLoad: r,
      handleError: o,
      handleClick: a
    };
  }
});
$f.render = V$;
var hl = $f;
oe(hl);
const TE = hl;
var Da = hl;
const wf = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function A$() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    wf
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: t
  };
}
const Sf = {
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
var Dt = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const z$ = 250, L$ = 20, { name: R$, n: Ur, classes: U$ } = te("swipe"), H$ = ["onClick"];
function F$(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = Le("hover");
  return Oe((h(), S(
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
      e.navigation ? R(e.$slots, "prev", it(Ne({ key: 0 }, {
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
            e.navigation === !0 || e.hovering ? (h(), S(
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
            )) : _("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : _("v-if", !0),
      e.navigation ? R(e.$slots, "next", it(Ne({ key: 1 }, {
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
            e.navigation === !0 || e.hovering ? (h(), S(
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
            )) : _("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : _("v-if", !0),
      R(e.$slots, "indicator", it(Co({
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        e.indicator && e.length ? (h(), S(
          "div",
          {
            key: 0,
            class: v(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (h(!0), S(
              Be,
              null,
              Ge(e.length, (a, i) => (h(), S("div", {
                class: v(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: F({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, H$))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : _("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [r, e.handleHovering]
  ]);
}
const Cf = ne({
  name: R$,
  directives: { Hover: En },
  components: { VarButton: mn, VarIcon: Ue },
  props: Sf,
  setup(e) {
    const n = w(null), t = w(0), o = V(() => e.vertical), r = w(0), a = w(0), i = w(!1), l = w(0), s = w(!1), { swipeItems: u, bindSwipeItems: d, length: c } = A$(), { popup: f, bindPopup: m } = Nm(), {
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
    } = hr(), H = V(() => C.value === (e.vertical ? "vertical" : "horizontal"));
    let L = !1, U = -1;
    d({
      size: t,
      vertical: o
    }), y(m, null), fe(
      () => c.value,
      () => Dt(this, null, function* () {
        yield dn(), M(), ke();
      })
    ), f && fe(
      () => f.show.value,
      (se) => Dt(this, null, function* () {
        se ? (yield dn(), ke()) : q();
      })
    ), mt(ke), pr(q), ko(ke);
    function G(se) {
      return u.find(({ index: he }) => he.value === se);
    }
    function W() {
      e.loop && (a.value >= 0 && G(c.value - 1).setTranslate(-r.value), a.value <= -(r.value - t.value) && G(0).setTranslate(r.value), a.value > -(r.value - t.value) && a.value < 0 && (G(c.value - 1).setTranslate(0), G(0).setTranslate(0)));
    }
    function Z(se) {
      const he = vn(se) ? se : Math.floor((a.value - t.value / 2) / -t.value), { loop: De } = e;
      return he <= -1 ? De ? -1 : 0 : he >= c.value ? De ? c.value : c.value - 1 : he;
    }
    function Q(se) {
      const { loop: he } = e;
      return se === -1 ? he ? c.value - 1 : 0 : se === c.value ? he ? 0 : c.value - 1 : se;
    }
    function j(se) {
      return e.loop ? se < 0 ? c.value + se : se >= c.value ? se - c.value : se : st(se, 0, c.value - 1);
    }
    function B() {
      return Dt(this, null, function* () {
        const se = a.value >= t.value, he = a.value <= -r.value, De = 0, We = -(r.value - t.value);
        i.value = !0, (se || he) && (i.value = !0, a.value = he ? De : We, G(0).setTranslate(0), G(c.value - 1).setTranslate(0)), yield dn(), i.value = !1;
      });
    }
    function M() {
      L || (l.value = j(A(e.initialIndex)), L = !0);
    }
    function x() {
      const { autoplay: se } = e;
      !se || c.value <= 1 || (q(), U = window.setTimeout(() => {
        Re(), x();
      }, A(se)));
    }
    function q() {
      U && clearTimeout(U);
    }
    function Y(se) {
      a.value = se, W();
    }
    function X(se) {
      return Dt(this, null, function* () {
        c.value <= 1 || !e.touchable || (P(se), q(), yield B(), i.value = !0);
      });
    }
    function ee(se) {
      const { touchable: he, vertical: De } = e;
      !$.value || !he || (D(se), H.value && (se.preventDefault(), Y(a.value + (De ? k.value : g.value))));
    }
    function pe() {
      if (!$.value || (E(), !H.value))
        return;
      const { vertical: se, onChange: he } = e, De = se ? p.value < 0 : b.value < 0, We = se ? O.value : T.value, $e = performance.now() - I.value <= z$ && We >= L$ ? Z(De ? l.value + 1 : l.value - 1) : Z();
      i.value = !1, Y($e * -t.value);
      const be = l.value;
      l.value = Q($e), x(), be !== l.value && y(he, l.value);
    }
    function ke() {
      n.value && (i.value = !0, t.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = t.value * c.value, a.value = l.value * -t.value, u.forEach((se) => {
        se.setTranslate(0);
      }), x(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function Re(se) {
      return Dt(this, null, function* () {
        if (c.value <= 1)
          return;
        M();
        const { loop: he, onChange: De } = e, We = l.value;
        if (l.value = j(We + 1), (se == null ? void 0 : se.event) !== !1 && y(De, l.value), yield B(), We === c.value - 1 && he) {
          G(0).setTranslate(r.value), a.value = c.value * -t.value;
          return;
        }
        We !== c.value - 1 && (a.value = l.value * -t.value);
      });
    }
    function le(se) {
      return Dt(this, null, function* () {
        if (c.value <= 1)
          return;
        M();
        const { loop: he, onChange: De } = e, We = l.value;
        if (l.value = j(We - 1), (se == null ? void 0 : se.event) !== !1 && y(De, l.value), yield B(), We === 0 && he) {
          G(c.value - 1).setTranslate(-r.value), a.value = t.value;
          return;
        }
        We !== 0 && (a.value = l.value * -t.value);
      });
    }
    function de(se, he) {
      if (c.value <= 1 || se === l.value)
        return;
      se = se < 0 ? 0 : se, se = se >= c.value ? c.value : se;
      const De = se > l.value ? Re : le, We = Math.abs(se - l.value);
      Array.from({ length: We }).forEach((ue, $e) => {
        De({ event: $e === We - 1 ? he == null ? void 0 : he.event : !1 });
      });
    }
    const Ce = (se) => {
      e.navigation === "hover" && (s.value = se);
    };
    function Ve(se) {
      return e.navigation !== "hover" ? "" : e.vertical ? Ur(`--navigation-vertical-${se}-animation`) : Ur(`--navigation-${se}-animation`);
    }
    return {
      length: c,
      index: l,
      swipeEl: n,
      trackSize: r,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: Ur,
      classes: U$,
      handleTouchstart: X,
      handleTouchmove: ee,
      handleTouchend: pe,
      next: Re,
      prev: le,
      to: de,
      resize: ke,
      toNumber: A,
      handleHovering: Ce,
      getNavigationAnimation: Ve
    };
  }
});
Cf.render = F$;
var gl = Cf;
oe(gl);
const EE = gl;
var mo = gl;
function Y$() {
  const { bindParent: e, index: n, parentProvider: t } = an(wf);
  return e || Tn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: t,
    bindSwipe: e
  };
}
const { name: j$, n: W$ } = te("swipe-item");
function q$(e, n) {
  return h(), S(
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
const kf = ne({
  name: j$,
  setup() {
    const e = w(0), { swipe: n, bindSwipe: t, index: o } = Y$(), { size: r, vertical: a } = n;
    t({
      index: o,
      setTranslate: l
    });
    function l(s) {
      e.value = s;
    }
    return {
      n: W$,
      size: r,
      vertical: a,
      translate: e
    };
  }
});
kf.render = q$;
var bl = kf;
oe(bl);
const IE = bl;
var po = bl, G$ = Object.defineProperty, Nu = Object.getOwnPropertySymbols, X$ = Object.prototype.hasOwnProperty, K$ = Object.prototype.propertyIsEnumerable, Vu = (e, n, t) => n in e ? G$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Au = (e, n) => {
  for (var t in n || (n = {}))
    X$.call(n, t) && Vu(e, t, n[t]);
  if (Nu)
    for (var t of Nu(n))
      K$.call(n, t) && Vu(e, t, n[t]);
  return e;
};
const Z$ = Au(Au({
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
}, en(Sf, ["loop", "indicator", "onChange"])), en(Po, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), { name: J$, n: zu, classes: Q$ } = te("image-preview"), Hr = 12, Lu = 200, _$ = 350, Ru = 200, x$ = 500, ew = ["onTouchstart"], nw = ["src", "alt"];
function tw(e, n) {
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
          (h(!0), S(
            Be,
            null,
            Ge(e.images, (i, l) => (h(), Se(t, {
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
                  onTouchstart: (s) => e.handleTouchstart(s, l),
                  onTouchmove: n[0] || (n[0] = (...s) => e.handleTouchmove && e.handleTouchmove(...s)),
                  onTouchend: n[1] || (n[1] = (...s) => e.handleTouchend && e.handleTouchend(...s)),
                  onTouchcancel: n[2] || (n[2] = (...s) => e.handleTouchcancel && e.handleTouchcancel(...s))
                }, [
                  N("img", {
                    class: v(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, nw)
                ], 46, ew)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: ve(({ index: i, length: l }) => [
          R(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (h(), S(
              "div",
              {
                key: 0,
                class: v(e.n("indicators"))
              },
              re(i + 1) + " / " + re(l),
              3
              /* TEXT, CLASS */
            )) : _("v-if", !0)
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
        }, null, 8, ["class", "onClick"])) : _("v-if", !0)
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
const Pf = ne({
  name: J$,
  components: {
    VarSwipe: mo,
    VarSwipeItem: po,
    VarPopup: dt,
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: Z$,
  setup(e) {
    const n = w(!1), t = w(1), o = w(0), r = w(0), a = w(), i = w(), l = w(!0), s = w(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: m, moveTouch: b, endTouch: p } = hr(), g = V(() => {
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
    ut(() => document, "contextmenu", x), fe(
      () => e.show,
      (q) => {
        n.value = q;
      },
      { immediate: !0 }
    );
    function I() {
      t.value = A(e.zoom), l.value = !1, C.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Ru);
    }
    function P() {
      t.value = 1, o.value = 0, r.value = 0, l.value = !0, C.prev = null, a.value = void 0, i.value = void 0;
    }
    function D(q) {
      return C.prev ? c.value <= Hr && performance.now() - f.value <= Lu && C.prev === q : !1;
    }
    function E(q) {
      return !q || !C.start || !C.prev ? !1 : c.value <= Hr && performance.now() - f.value < _$ && (q === C.start || q.parentNode === C.start);
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
        Y && Q(), C.start = null;
      }, Lu);
    }
    function U(q, Y) {
      window.clearTimeout(T), window.clearTimeout(O);
      const X = q.currentTarget;
      if (C.start = X, O = window.setTimeout(() => {
        $ = !0, y(e.onLongPress, Y);
      }, x$), D(X)) {
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
      if (c.value > Hr && window.clearTimeout(O), t.value > 1) {
        const X = G(Y), ee = W(Y);
        o.value = st(o.value + u.value, -X, X), r.value = st(r.value + d.value, -ee, ee);
      }
      C.prev = Y;
    }
    function Q() {
      if (t.value > 1) {
        P(), setTimeout(() => y(e["onUpdate:show"], !1), Ru);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    function j(q) {
      var Y;
      (Y = s.value) == null || Y.prev(q);
    }
    function B(q) {
      var Y;
      (Y = s.value) == null || Y.next(q);
    }
    function M(q, Y) {
      var X;
      (X = s.value) == null || X.to(q, Y);
    }
    function x(q) {
      e.imagePreventDefault && e.show && q.preventDefault();
    }
    return {
      swipeRef: s,
      isPreventDefault: k,
      initialIndex: g,
      popupShow: n,
      scale: t,
      translateX: o,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: zu,
      classes: Q$,
      handleTouchstart: U,
      handleTouchmove: Z,
      handleTouchend: L,
      handleTouchcancel: H,
      close: Q,
      prev: j,
      next: B,
      to: M
    };
  }
});
Pf.render = tw;
var Do = Pf, ow = Object.defineProperty, rw = Object.defineProperties, aw = Object.getOwnPropertyDescriptors, Uu = Object.getOwnPropertySymbols, iw = Object.prototype.hasOwnProperty, lw = Object.prototype.propertyIsEnumerable, Hu = (e, n, t) => n in e ? ow(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Fo = (e, n) => {
  for (var t in n || (n = {}))
    iw.call(n, t) && Hu(e, t, n[t]);
  if (Uu)
    for (var t of Uu(n))
      lw.call(n, t) && Hu(e, t, n[t]);
  return e;
}, Fu = (e, n) => rw(e, aw(n));
let tt, ro = {};
function sw(e = {}) {
  return Qe(e) ? Fu(Fo({}, ro), { images: [e] }) : Me(e) ? Fu(Fo({}, ro), { images: e }) : Fo(Fo({}, ro), e);
}
function It(e) {
  if (!gt())
    return;
  It.close();
  const n = sw(e), t = je(n);
  t.teleport = "body", tt = t;
  const { unmountInstance: o } = Kt(Do, t, {
    onClose: () => y(t.onClose),
    onClosed: () => {
      y(t.onClosed), o(), tt === t && (tt = null);
    },
    onRouteChange: () => {
      o(), tt === t && (tt = null);
    },
    "onUpdate:show": (r) => {
      t.show = r;
    }
  });
  t.show = !0;
}
It.close = () => {
  if (tt != null) {
    const e = tt;
    tt = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
It.setDefaultOptions = (e) => {
  ro = e;
};
It.resetDefaultOptions = () => {
  ro = {};
};
It.Component = Do;
oe(Do);
oe(Do, It);
const ME = Do;
var ho = It;
const Jo = {
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
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: uw, n: dw, classes: cw } = te("sticky");
function fw(e, n) {
  return h(), S(
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
const Of = ne({
  name: uw,
  props: Jo,
  setup(e) {
    const n = w(null), t = w(null), o = w(!1), r = w("0px"), a = w("0px"), i = w("auto"), l = w("auto"), s = w("auto"), u = w("auto"), d = V(() => !e.disabled && e.cssMode), c = V(() => !e.disabled && !e.cssMode && o.value), f = V(() => He(e.offsetTop));
    let m;
    fe(() => e.disabled, g), rn(k), pr(T), ko(g), ut(() => window, "scroll", p);
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
      return H <= f.value ? (O || (i.value = `${P.offsetWidth}px`, l.value = `${P.offsetHeight}px`, r.value = `${C + f.value}px`, a.value = `${E}px`, s.value = `${I.offsetWidth}px`, u.value = `${I.offsetHeight}px`, o.value = !0), {
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
        o.value = !1, yield qo(), b();
      });
    }
    function k() {
      return Yu(this, null, function* () {
        yield dn(), m = ct(n.value), m !== window && m.addEventListener("scroll", p), p();
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
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: c,
      n: dw,
      classes: cw,
      resize: g,
      toNumber: A
    };
  }
});
Of.render = fw;
var yl = Of;
oe(yl);
const DE = yl;
var go = yl;
const Tf = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function vw() {
  const { bindChildren: e, length: n, childProviders: t } = ln(
    Tf
  );
  return {
    length: n,
    indexAnchors: t,
    bindIndexAnchors: e
  };
}
function mw() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    Tf
  );
  return t || Tn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: t
  };
}
const pw = {
  index: [Number, String]
}, { name: hw, n: gw, classes: bw } = te("index-anchor");
function yw(e, n) {
  return h(), Se(Gt(e.sticky ? e.n("$-sticky") : e.Transition), {
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
const Ef = ne({
  name: hw,
  components: { VarSticky: go },
  inheritAttrs: !1,
  props: pw,
  setup(e) {
    const n = w(0), t = w(!1), o = V(() => e.index), r = w(null), { index: a, indexBar: i, bindIndexBar: l } = mw(), { active: s, sticky: u, cssMode: d, stickyOffsetTop: c, zIndex: f } = i;
    l({
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
      n: gw,
      classes: bw,
      name: o,
      anchorEl: r,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: t,
      cssMode: d,
      stickyOffsetTop: c,
      Transition: Ye
    };
  }
});
Ef.render = yw;
var $l = Ef;
oe($l);
const BE = $l;
var Ba = $l;
const $w = {
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
var Yo = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: ww, n: Sw, classes: Cw } = te("index-bar"), kw = ["onClick"];
function Pw(e, n) {
  return h(), S(
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
          (h(!0), S(
            Be,
            null,
            Ge(e.anchorNameList, (t) => (h(), S("li", {
              key: t,
              class: v(e.classes(e.n("anchor-item"), [e.active === t, e.n("anchor-item--active")])),
              style: F({ color: e.active === t && e.highlightColor ? e.highlightColor : "" }),
              onClick: (o) => e.anchorClick({ anchorName: t, manualCall: !0 })
            }, re(t), 15, kw))),
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
const If = ne({
  name: ww,
  props: $w,
  setup(e) {
    const n = w(""), t = w(null), o = w([]), r = w(), a = V(() => e.sticky), i = V(() => e.stickyCssMode || e.cssMode), l = V(() => He(e.stickyOffsetTop)), s = V(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = vw();
    let f = null, m = !1;
    const b = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    fe(
      () => u.value,
      () => Yo(this, null, function* () {
        yield dn(), d.forEach(({ name: P, setOwnTop: D }) => {
          P.value && o.value.push(P.value), D();
        });
      })
    ), rn(() => Yo(this, null, function* () {
      yield O(), $();
    })), mr(C), Wt(() => {
      m = !0, C();
    }), mt(() => {
      !m || r.value === void 0 || (T({
        anchorName: r.value,
        options: { event: !1 }
      }), m = !1);
    }), c(b);
    function p(P, D) {
      const E = hi(P) ? P.name.value : P;
      E === r.value || E === void 0 || (r.value = E, (D == null ? void 0 : D.event) !== !1 && y(e.onChange, E));
    }
    function g() {
      if (gi(f))
        return 0;
      const { top: P } = _e(f), { scrollTop: D } = f, { top: E } = _e(t.value);
      return D - P + E;
    }
    function k() {
      const P = lo(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, E = g();
      d.forEach((H, L) => {
        const U = H.ownTop.value, ie = P - U + l.value - E, G = L === d.length - 1 ? D : d[L + 1].ownTop.value - H.ownTop.value;
        H.setDisabled(!0), ie >= 0 && ie < G && n.value === "" && (H.setDisabled(!1), p(H));
      });
    }
    function T(P) {
      return Yo(this, arguments, function* ({ anchorName: D, manualCall: E = !1, options: H }) {
        if (E && y(e.onClick, D), D === r.value && !m)
          return;
        const L = d.find(({ name: W }) => D === W.value);
        if (!L)
          return;
        const U = g(), ie = L.ownTop.value - l.value + U, G = wi(f);
        n.value = D, p(D, H), yield so(f, {
          left: G,
          top: ie,
          animation: Gd,
          duration: A(e.duration)
        }), yield dn(), n.value = "";
      });
    }
    function O() {
      return Yo(this, null, function* () {
        yield dn(), f = ct(t.value);
      });
    }
    function $() {
      f.addEventListener("scroll", k);
    }
    function C() {
      f.removeEventListener("scroll", k);
    }
    function I(P, D) {
      ao(() => T({ anchorName: P, options: D }));
    }
    return {
      barEl: t,
      active: r,
      zIndex: s,
      anchorNameList: o,
      n: Sw,
      classes: Cw,
      toNumber: A,
      scrollTo: I,
      anchorClick: T
    };
  }
});
If.render = Pw;
var wl = If;
oe(wl);
const NE = wl;
var Na = wl;
const Sl = {
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
}, { name: Ow, n: Fr, classes: Tw } = te("field-decorator"), Ew = ["for"];
function Iw(e, n) {
  const t = ae("var-icon");
  return h(), S(
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
          e.placeholder && e.hint ? (h(), S("label", {
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
          ], 14, Ew)) : _("v-if", !0),
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
              }, null, 8, ["class", "onClick"])) : _("v-if", !0),
              R(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (h(), S(
        Be,
        { key: 0 },
        [
          e.variant === "outlined" ? (h(), S(
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
                  e.placeholder && e.hint ? (h(), Se(Xn, {
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
                  ])) : _("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : (h(), S(
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
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Mf = ne({
  name: Ow,
  components: { VarIcon: Ue },
  props: Sl,
  setup(e, { slots: n }) {
    const t = w(null), o = w(""), r = V(() => e.hint && (!Fn(e.value) || e.isFocus || n["prepend-icon"])), a = V(
      () => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
    );
    ko(l), rn(l), So(l);
    function i() {
      const { hint: d, value: c, composing: f } = e;
      if (!d && (!Fn(c) || f))
        return Fr("--placeholder-hidden");
      if (r.value)
        return Fr("--placeholder-hint");
    }
    function l() {
      const { size: d, hint: c, variant: f, placeholder: m } = e;
      if (!m || !c || f !== "outlined") {
        o.value = "";
        return;
      }
      const b = Ot(t.value), p = `var(--field-decorator-outlined-${d}-placeholder-space)`;
      o.value = `calc(${b.width} * 0.75 + ${p} * 2)`;
    }
    function s(d) {
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
      n: Fr,
      classes: Tw,
      isEmpty: Fn,
      handleClear: s,
      handleClick: u
    };
  }
});
Mf.render = Iw;
var Df = Mf, Mw = Object.defineProperty, ju = Object.getOwnPropertySymbols, Dw = Object.prototype.hasOwnProperty, Bw = Object.prototype.propertyIsEnumerable, Wu = (e, n, t) => n in e ? Mw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Nw = (e, n) => {
  for (var t in n || (n = {}))
    Dw.call(n, t) && Wu(e, t, n[t]);
  if (ju)
    for (var t of ju(n))
      Bw.call(n, t) && Wu(e, t, n[t]);
  return e;
};
const Vw = Nw({
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
}, en(Sl, [
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
])), { name: Aw, n: zw, classes: Lw } = te("input"), Rw = ["placeholder", "enterkeyhint"], Uw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Hw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Fw(e, n) {
  const t = ae("var-field-decorator"), o = ae("var-form-details");
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[13] || (n[13] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      J(
        t,
        it(Co({
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
        Qo({
          "append-icon": ve(() => [
            R(e.$slots, "append-icon")
          ]),
          default: ve(() => [
            e.normalizedType === "password" ? (h(), S("input", {
              key: 0,
              tabindex: "-1",
              class: v(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: F({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, Rw)) : _("v-if", !0),
            e.textarea ? (h(), S("textarea", {
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
      `, 46, Uw)) : (h(), S("input", {
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
            }, null, 46, Hw))
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
      }, Qo({
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
const Bf = ne({
  name: Aw,
  components: {
    VarFormDetails: pn,
    VarFieldDecorator: Df
  },
  props: Vw,
  setup(e) {
    const n = w(`var-input-${qt().uid}`), t = w(null), o = w(!1), r = w(!1), { bindForm: a, form: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = In(), c = V(() => e.disabled || e.readonly ? "" : "text"), f = V(() => e.type === "number" ? "text" : e.type), m = V(() => {
      const { maxlength: j, modelValue: B } = e;
      return j ? Fn(B) ? `0 / ${j}` : `${String(B).length}/${j}` : "";
    }), b = V(() => {
      const { hint: j, blurColor: B, focusColor: M } = e;
      if (!j)
        return l.value ? "var(--field-decorator-error-color)" : o.value ? M || "var(--field-decorator-focus-color)" : B || "var(--field-decorator-blur-color)";
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
        s(B, j, M, x);
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
    function Q() {
      t.value.blur();
    }
    return {
      el: t,
      id: n,
      isFocus: o,
      isComposing: r,
      errorMessage: l,
      placeholderColor: b,
      normalizedType: f,
      cursor: c,
      maxlengthText: m,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: zw,
      classes: Lw,
      isEmpty: Fn,
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
      blur: Q
    };
  }
});
Bf.render = Fw;
var Cl = Bf;
oe(Cl);
const VE = Cl;
var vr = Cl;
const Yw = {
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
}, { name: jw, n: Ww, classes: qw } = te("link");
function Gw(e, n) {
  return h(), Se(Gt(e.tag), Ne(e.linkProps, {
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
const Nf = ne({
  name: jw,
  props: Yw,
  setup(e) {
    const n = V(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), t = V(() => {
      const { disabled: r, href: a, target: i, to: l, replace: s, rel: u } = e;
      return r ? {} : a ? { href: a, target: i, rel: u } : l ? { to: l, target: i, replace: s } : {};
    });
    function o(r) {
      e.disabled || y(e.onClick, r);
    }
    return {
      tag: n,
      linkProps: t,
      n: Ww,
      classes: qw,
      handleClick: o,
      toSizeUnit: we
    };
  }
});
Nf.render = Gw;
var kl = Nf;
oe(kl);
const AE = kl;
var Va = kl;
const Xw = {
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
}, Vf = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Kw() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    Vf
  );
  return {
    length: t,
    tabItemList: n,
    bindTabItem: e
  };
}
const Af = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Zw() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    Vf
  );
  return n || Tn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: t,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Jw() {
  const { childProviders: e, bindChildren: n, length: t } = ln(Af);
  return {
    length: t,
    lists: e,
    bindLists: n
  };
}
function Qw() {
  const { parentProvider: e, bindParent: n, index: t } = an(Af);
  return {
    index: t,
    tabItem: e,
    bindTabItem: n
  };
}
var _w = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: xw, n: eS, classes: nS } = te("list");
function tS(e, n) {
  const t = ae("var-loading"), o = Le("ripple");
  return h(), S(
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
      }) : _("v-if", !0),
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
      }) : _("v-if", !0),
      e.error ? R(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Oe((h(), S(
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
      }) : _("v-if", !0),
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
const zf = ne({
  name: xw,
  directives: { Ripple: Ke },
  components: { VarLoading: Rt },
  props: Xw,
  setup(e) {
    const n = w(null), t = w(null), { tabItem: o, bindTabItem: r } = Qw();
    let a;
    y(r, {}), o && fe(() => o.current.value, u), fe(() => [e.loading, e.error, e.finished], u), rn(() => {
      a = ct(n.value), a.addEventListener("scroll", u), e.immediateCheck && u();
    }), pr(s);
    function i() {
      y(e["onUpdate:error"], !1), y(e["onUpdate:loading"], !0), y(e.onLoad);
    }
    function l() {
      const { bottom: d } = _e(a), { bottom: c } = _e(t.value);
      return Math.floor(c) - He(e.offset) <= d;
    }
    function s() {
      a.removeEventListener("scroll", u);
    }
    function u() {
      return _w(this, null, function* () {
        yield Fe(), !(e.loading || e.finished || e.error || (o == null ? void 0 : o.current.value) === !1 || !l()) && i();
      });
    }
    return {
      pack: xe,
      listEl: n,
      detectorEl: t,
      isNumber: vn,
      load: i,
      check: u,
      n: eS,
      classes: nS
    };
  }
});
zf.render = tS;
var Pl = zf;
oe(Pl);
const zE = Pl;
var Aa = Pl;
const oS = {
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
  name: rS,
  classes: aS,
  n: qu
} = te("loading-bar");
var iS = ne({
  name: rS,
  props: oS,
  setup(e) {
    return () => J("div", {
      class: aS(qu(), [e.error, qu("--error")]),
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
let Lf, Rf, Ir, Uf, Gu, Hf = {};
const lS = {
  value: 0,
  opacity: 0,
  error: !1
}, nn = je(lS), sS = (e) => {
  Object.assign(nn, e);
}, uS = (e) => {
  Object.assign(nn, e), Hf = e;
}, dS = () => {
  Object.keys(Hf).forEach((e) => {
    nn[e] !== void 0 && (nn[e] = void 0);
  });
}, Ff = () => {
  Gu || (Gu = !0, Kt(iS, nn));
}, Ol = () => {
  Lf = window.setTimeout(() => {
    if (nn.value >= 95)
      return;
    let e = Math.random();
    nn.value < 70 && (e = Math.round(5 * Math.random())), nn.value += e, Ol();
  }, 200);
}, Tl = () => {
  window.clearTimeout(Rf), window.clearTimeout(Lf), window.clearTimeout(Ir), window.clearTimeout(Uf);
}, cS = () => {
  Tl(), nn.error = !1, nn.value = 0, Ff(), Ir = window.setTimeout(() => {
    nn.opacity = 1;
  }, 200), Ol();
}, Yf = () => {
  Tl(), nn.value = 100, Ir = window.setTimeout(() => {
    nn.opacity = 0, Rf = window.setTimeout(() => {
      nn.error = !1;
    }, 250);
  }, 300);
}, fS = () => {
  Tl(), nn.error = !0, nn.value === 100 && (nn.value = 0), Ff(), Ir = window.setTimeout(() => {
    nn.opacity = 1;
  }, 200), Ol(), Uf = window.setTimeout(Yf, 300);
}, jf = {
  start: cS,
  finish: Yf,
  error: fS,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: sS,
  setDefaultOptions: uS,
  resetDefaultOptions: dS
}, LE = jf;
var za = jf;
const vS = {
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
}, { name: mS, n: pS, classes: hS } = te("menu");
function gS(e, n) {
  return h(), S(
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
      (h(), Se(Xn, {
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
const Wf = ne({
  name: mS,
  props: vS,
  setup(e) {
    const { disabled: n } = Zt(), {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
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
    } = hf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: gn,
      toSizeUnit: we,
      n: pS,
      classes: hS,
      handleHostClick: l,
      handleHostMouseenter: s,
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
Wf.render = gS;
var El = Wf;
oe(El);
const RE = El;
var bo = El;
const qf = Symbol("SELECT_BIND_OPTION_KEY");
function bS() {
  const { length: e, childProviders: n, bindChildren: t } = ln(qf);
  return {
    length: e,
    options: n,
    bindOptions: t
  };
}
function yS() {
  const { index: e, parentProvider: n, bindParent: t } = an(qf);
  return t || Tn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: t
  };
}
const $S = {
  label: {},
  value: {}
}, { name: wS, n: SS, classes: CS } = te("option");
function kS(e, n) {
  const t = ae("var-checkbox"), o = ae("var-hover-overlay"), r = Le("ripple"), a = Le("hover");
  return Oe((h(), S(
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
      }, null, 8, ["checked-color", "modelValue", "onChange"])) : _("v-if", !0),
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
const Gf = ne({
  name: wS,
  directives: { Ripple: Ke, Hover: En },
  components: {
    VarCheckbox: rr,
    VarHoverOverlay: zn
  },
  props: $S,
  setup(e) {
    const n = w(!1), t = V(() => n.value), o = V(() => e.label), r = V(() => e.value), { select: a, bindSelect: i } = yS(), { multiple: l, focusColor: s, onSelect: u, computeLabel: d } = a, { hovering: c, handleHovering: f } = qn(), m = {
      label: o,
      value: r,
      selected: t,
      sync: g
    };
    fe([() => e.label, () => e.value], d), i(m);
    function b() {
      l.value && (n.value = !n.value), u(m);
    }
    function p() {
      return u(m);
    }
    function g(k) {
      n.value = k;
    }
    return {
      n: SS,
      classes: CS,
      optionSelected: n,
      multiple: l,
      focusColor: s,
      hovering: c,
      handleHovering: f,
      handleClick: b,
      handleSelect: p
    };
  }
});
Gf.render = kS;
var Il = Gf;
oe(Il);
const UE = Il;
var La = Il;
const PS = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  onClick: z(),
  "onUpdate:show": z()
}, {
  name: OS,
  n: Xu
} = te("overlay");
var Ml = ne({
  name: OS,
  inheritAttrs: !1,
  props: PS,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const {
      zIndex: o
    } = Oo(() => e.show, 1), {
      disabled: r
    } = Zt();
    gr(() => e.show, () => e.lockScroll);
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
    function l() {
      return J(Ye, {
        name: Xu("--fade")
      }, {
        default: () => [e.show && i()]
      });
    }
    return () => {
      const {
        teleport: s
      } = e;
      return s ? J(Xn, {
        to: s,
        disabled: r.value
      }, {
        default: () => [l()]
      }) : l();
    };
  }
});
oe(Ml);
const HE = Ml;
var Ra = Ml;
const TS = {
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
}, { name: ES, n: IS, classes: MS } = te("pagination"), DS = ["item-mode", "onClick"];
function BS(e, n) {
  const t = ae("var-icon"), o = ae("var-input"), r = ae("var-cell"), a = ae("var-menu"), i = Le("ripple");
  return h(), S(
    "ul",
    {
      class: v(e.n())
    },
    [
      Oe((h(), S(
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
          onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
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
      e.simple ? (h(), S(
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
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = rs((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
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
      )) : (h(!0), S(
        Be,
        { key: 1 },
        Ge(e.pageList, (l, s) => Oe((h(), S("li", {
          key: s,
          "item-mode": e.getMode(l, s),
          class: v(
            e.classes(
              e.n("item"),
              e.formatElevation(e.elevation, 2),
              [l === e.current && !e.disabled, e.n("item--active")],
              [e.isHideEllipsis(l, s), e.n("item--hide")],
              [e.disabled, e.n("item--disabled")],
              [l === e.current && e.disabled, e.n("item--disabled--active")]
            )
          ),
          onClick: (u) => e.clickItem(l, s)
        }, [
          Te(
            re(l),
            1
            /* TEXT */
          )
        ], 10, DS)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Oe((h(), S(
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
          onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
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
      e.showSizeChanger ? (h(), S(
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
            "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l)
          }, {
            menu: ve(() => [
              (h(!0), S(
                Be,
                null,
                Ge(e.sizeOption, (l, s) => Oe((h(), Se(r, {
                  class: v(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                  key: s,
                  onClick: (u) => e.clickSize(l)
                }, {
                  default: ve(() => [
                    Te(
                      re(l) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
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
                  onClick: n[5] || (n[5] = On((...l) => e.showMenu && e.showMenu(...l), ["stop"]))
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
      )) : _("v-if", !0),
      e.showQuickJumper && !e.simple ? (h(), S(
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
            "onUpdate:modelValue": n[7] || (n[7] = (l) => e.quickJumperValue = l),
            disabled: e.disabled,
            "var-pagination-cover": "",
            onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.quickJumperValue, l)),
            onKeydown: n[9] || (n[9] = rs((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : _("v-if", !0),
      e.totalText ? (h(), S(
        "li",
        {
          key: 4,
          class: v(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        re(e.totalText),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Xf = ne({
  name: ES,
  components: {
    VarMenu: bo,
    VarIcon: Ue,
    VarCell: or,
    VarInput: vr
  },
  directives: { Ripple: Ke },
  props: TS,
  setup(e) {
    const n = w(!1), t = w(""), o = w("1"), r = w(!1), a = w(!1), i = w(A(e.current) || 1), l = w(A(e.size) || 10), s = w([]), u = V(() => Math.ceil(e.maxPagerCount / 2)), d = V(() => Math.ceil(A(e.total) / A(l.value))), c = V(() => {
      const $ = l.value * (i.value - 1) + 1, C = Math.min(l.value * i.value, A(e.total));
      return [$, C];
    }), f = V(() => e.showTotal ? e.showTotal(A(e.total), c.value) : "");
    fe([() => e.current, () => e.size], ([$, C]) => {
      i.value = A($) || 1, l.value = A(C || 10);
    }), fe(
      [i, l, d],
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
        s.value = E, P != null && I > 0 && y(U, $, C), y(e["onUpdate:current"], $), y(e["onUpdate:size"], C);
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
      l.value = $, n.value = !1;
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
      size: l,
      pageCount: d,
      pageList: s,
      quickJumperValue: t,
      simpleCurrentValue: o,
      totalText: f,
      n: IS,
      classes: MS,
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
Xf.render = BS;
var Dl = Xf;
oe(Dl);
const FE = Dl;
var Ua = Dl;
const NS = {
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
}, { name: VS, n: AS, classes: zS } = te("paper");
function LS(e, n) {
  const t = Le("ripple");
  return Oe((h(), S(
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
const Kf = ne({
  name: VS,
  directives: { Ripple: Ke },
  props: NS,
  setup(e) {
    function n(t) {
      y(e.onClick, t);
    }
    return {
      n: AS,
      classes: zS,
      formatElevation: gn,
      toSizeUnit: we,
      handleClick: n
    };
  }
});
Kf.render = LS;
var Bl = Kf;
oe(Bl);
const YE = Bl;
var Ha = Bl, RS = Object.defineProperty, Ku = Object.getOwnPropertySymbols, US = Object.prototype.hasOwnProperty, HS = Object.prototype.propertyIsEnumerable, Zu = (e, n, t) => n in e ? RS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, FS = (e, n) => {
  for (var t in n || (n = {}))
    US.call(n, t) && Zu(e, t, n[t]);
  if (Ku)
    for (var t of Ku(n))
      HS.call(n, t) && Zu(e, t, n[t]);
  return e;
};
const YS = FS({
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
}, en(Po, [
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
])), { name: jS, n: WS, classes: qS } = te("picker"), Ju = 300, GS = 15, Qu = 200, XS = 1e3;
let _u = 0;
const KS = ["onTouchstartPassive", "onTouchmove", "onTouchend"], ZS = ["onTransitionend"], JS = ["onClick"];
function QS(e, n) {
  const t = ae("var-button");
  return h(), Se(
    Gt(e.dynamic ? e.n("$-popup") : e.Transition),
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
            e.toolbar ? (h(), S(
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
            )) : _("v-if", !0),
            N(
              "div",
              {
                class: v(e.n("columns")),
                style: F({ height: `${e.columnHeight}px` })
              },
              [
                (h(!0), S(
                  Be,
                  null,
                  Ge(e.scrollColumns, (o) => (h(), S("div", {
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
                      (h(!0), S(
                        Be,
                        null,
                        Ge(o.column.texts, (r, a) => (h(), S("div", {
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
                        ], 14, JS))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, ZS)
                  ], 42, KS))),
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
const Zf = ne({
  name: jS,
  components: {
    VarButton: mn,
    VarPopup: dt
  },
  inheritAttrs: !1,
  props: YS,
  setup(e) {
    const n = w([]), t = V(() => He(e.optionHeight)), o = V(() => He(e.optionCount)), r = V(() => o.value * t.value / 2 - t.value / 2), a = V(() => o.value * t.value), { prevY: i, moveY: l, dragging: s, startTouch: u, moveTouch: d, endTouch: c } = hr();
    let f = [];
    fe(
      () => e.columns,
      (B) => {
        n.value = e.cascade ? L(as(B)) : H(as(B));
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
      B.translate = st(B.translate, M, x);
    }
    function g(B, M) {
      const x = Math.round((r.value - M) / t.value);
      return sm(x, B.column.texts);
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
      s.value || (B.index = M, B.scrolling = !0, O(B, Qu));
    }
    function I(B, M) {
      M.touching = !0, M.translate = Nr(M.scrollEl), u(B);
    }
    function P(B, M) {
      if (!M.touching)
        return;
      d(B), M.scrolling = !1, M.duration = 0, M.prevY = i.value, M.translate += l.value, p(M);
      const x = performance.now();
      x - M.momentumTime > Ju && (M.momentumTime = x, M.momentumPrevY = M.translate);
    }
    function D(B) {
      c(), B.touching = !1, B.prevY = 0;
      const M = B.translate - B.momentumPrevY, x = performance.now() - B.momentumTime, q = Math.abs(M) >= GS && x <= Ju;
      q && $(B, M, x), B.index = g(B, B.translate);
      const Y = B.translate, X = k(B);
      B.scrolling = X !== Y, O(B, q ? XS : Qu), B.scrolling || W(B);
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
        B && (B.index = g(B, Nr(B.scrollEl)), B.scrolling = !1, O(B), ie(B));
      } else
        n.value.forEach((B) => {
          B.index = g(B, Nr(B.scrollEl)), O(B);
        });
    }
    function Q() {
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
      n: WS,
      classes: qS,
      setScrollEl: m,
      handlePopupUpdateShow: b,
      handleTouchstart: I,
      handleTouchmove: P,
      handleTouchend: D,
      handleTransitionend: E,
      confirm: Q,
      cancel: j,
      handleClick: C
    };
  }
});
Zf.render = QS;
var Bo = Zf;
let cn;
function No(e) {
  return new Promise((n) => {
    No.close();
    const t = Me(e) ? { columns: e } : e, o = je(t);
    o.dynamic = !0, o.teleport = "body", cn = o;
    const { unmountInstance: r } = Kt(Bo, o, {
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
No.close = function() {
  if (cn != null) {
    const e = cn;
    cn = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
No.Component = Bo;
oe(Bo);
oe(Bo, No);
const jE = Bo;
var Fa = No;
const _S = {
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
}, Jn = 100, Ya = 20, xu = 2 * Math.PI * Ya, { name: xS, n: eC, classes: nC } = te("progress"), tC = ["viewBox"], oC = ["r", "stroke-width", "stroke-dasharray"], rC = ["r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function aC(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      e.mode === "linear" ? (h(), S(
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
              e.indeterminate ? (h(), S(
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
                      style: F({ background: e.color })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  ),
                  N(
                    "div",
                    {
                      class: v(e.classes(e.n(`linear--${e.type}`))),
                      style: F({ background: e.color })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )) : (h(), S(
                "div",
                {
                  key: 1,
                  class: v(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`), [e.ripple, e.n("linear-ripple")])),
                  style: F({ background: e.color, width: e.linearProps.width })
                },
                null,
                6
                /* CLASS, STYLE */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          e.label ? (h(), S(
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
          )) : _("v-if", !0)
        ],
        2
        /* CLASS */
      )) : _("v-if", !0),
      e.mode === "circle" ? (h(), S(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
          style: F({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
        },
        [
          (h(), S("svg", {
            class: v(e.n("circle-svg")),
            style: F({ transform: `rotate(${e.rotate - 90}deg)` }),
            viewBox: e.circleProps.viewBox
          }, [
            e.track ? (h(), S("circle", {
              key: 0,
              class: v(e.n("circle-background")),
              cx: "50%",
              cy: "50%",
              r: e.RADIUS,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              style: F({
                stroke: e.trackColor
              })
            }, null, 14, oC)) : _("v-if", !0),
            N("circle", {
              class: v(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
              cx: "50%",
              cy: "50%",
              r: e.RADIUS,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              "stroke-dashoffset": e.circleProps.strokeOffset,
              style: F({
                stroke: e.color
              })
            }, null, 14, rC)
          ], 14, tC)),
          e.label ? (h(), S(
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
          )) : _("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Jf = ne({
  name: xS,
  props: _S,
  setup(e) {
    const n = V(() => {
      const o = A(e.value), r = o > Jn ? Jn : o, a = o > Jn ? Jn : Math.round(o);
      return {
        width: `${r}%`,
        roundValue: `${a}%`
      };
    }), t = V(() => {
      const { size: o, lineWidth: r, value: a } = e, i = Ya / (1 - He(r) / He(o)) * 2, l = `0 0 ${i} ${i}`, s = A(a) > Jn ? Jn : Math.round(A(a)), u = `${(Jn - s) / Jn * xu}`;
      return {
        strokeWidth: He(r) / He(o) * i,
        viewBox: l,
        strokeOffset: u,
        roundValue: `${s}%`
      };
    });
    return {
      linearProps: n,
      CIRCUMFERENCE: xu,
      RADIUS: Ya,
      circleProps: t,
      n: eC,
      classes: nC,
      toSizeUnit: we
    };
  }
});
Jf.render = aC;
var Nl = Jf;
oe(Nl);
const WE = Nl;
var ja = Nl;
const iC = {
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
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: lC, n: nd, classes: sC } = te("pull-refresh"), td = 150;
function uC(e, n) {
  const t = ae("var-icon");
  return h(), S(
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
const Qf = ne({
  name: lC,
  components: { VarIcon: Ue },
  props: iC,
  setup(e) {
    const n = w(0), t = w(null), o = w(null), r = w(0), a = w("-125%"), i = w("arrow-down"), l = w("default"), s = w(!1), u = V(() => Math.abs(2 * n.value)), d = V(() => l.value === "success"), c = V(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = V(() => ({
      transform: `translate3d(0px, ${Qe(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    }));
    let m, b, p = 0, g = 0;
    fe(
      () => e.modelValue,
      (D) => {
        D === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, P();
        }, A(e.successDuration)));
      }
    ), rn(I), ut(t, "touchmove", $);
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
      p = D.touches[0].clientY, g = 0, b = ct(D.target);
    }
    function $(D) {
      if (!c.value || !b || b !== m && lo(b) > 0)
        return;
      const E = lo(m);
      if (E > 0)
        return;
      const H = E === 0;
      g = D.touches[0].clientY - p, H && g >= 0 && D.preventDefault(), l.value !== "pulling" && (l.value = "pulling", r.value = D.touches[0].clientY), H && vn(a.value) && a.value > n.value && T("add");
      const U = (D.touches[0].clientY - r.value) / 2 + n.value;
      a.value = U >= u.value ? u.value : U, k(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function C() {
      return ed(this, null, function* () {
        c.value && (s.value = !0, A(a.value) >= u.value * 0.2 ? (yield k("refresh"), l.value = "loading", a.value = u.value * 0.3, y(e["onUpdate:modelValue"], !0), Fe(() => {
          y(e.onRefresh);
        }), T("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, T("remove");
        }, A(e.animationDuration))), b = null);
      });
    }
    function I() {
      m = e.target ? Nd(e.target, "PullRefresh") : ct(t.value);
    }
    function P() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, A(e.animationDuration));
    }
    return {
      ICON_TRANSITION: td,
      refreshStatus: l,
      freshNode: t,
      controlNode: o,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: nd,
      classes: sC,
      touchStart: O,
      touchMove: $,
      touchEnd: C
    };
  }
});
Qf.render = uC;
var Vl = Qf;
oe(Vl);
const qE = Vl;
var Wa = Vl;
const dC = {
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
}, _f = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function cC() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    _f
  );
  return {
    length: t,
    radios: n,
    bindRadios: e
  };
}
function fC() {
  const { bindParent: e, parentProvider: n, index: t } = an(_f);
  return {
    index: t,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: vC, n: mC, classes: pC } = te("radio");
function hC(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = Le("ripple"), i = Le("hover");
  return h(), S(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      N(
        "div",
        Ne({
          class: e.n(),
          onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Oe((h(), S(
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
const xf = ne({
  name: vC,
  directives: { Ripple: Ke, Hover: En },
  components: {
    VarIcon: Ue,
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  inheritAttrs: !1,
  props: dC,
  setup(e) {
    const n = io(e, "modelValue"), t = V(() => n.value === e.checkedValue), o = w(!1), { radioGroup: r, bindRadioGroup: a } = fC(), { hovering: i, handleHovering: l } = qn(), { form: s, bindForm: u } = Mn(), {
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
      s != null && s.disabled.value || P || (y(L, I), !(s != null && s.readonly.value || D) && (o.value = !0, g(t.value ? E : H)));
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
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: i,
      handleHovering: l,
      n: mC,
      classes: pC,
      handleClick: k,
      toggle: C,
      reset: O,
      validate: $,
      resetValidation: m
    };
  }
});
xf.render = hC;
var Al = xf;
oe(Al);
const GE = Al;
var qa = Al;
const gC = {
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
}, { name: bC, n: yC, classes: $C } = te("radio-group");
function wC(e, n) {
  const t = ae("var-form-details");
  return h(), S(
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
const ev = ne({
  name: bC,
  components: { VarFormDetails: pn },
  props: gC,
  setup(e) {
    const { length: n, radios: t, bindRadios: o } = cC(), { bindForm: r } = Mn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = In(), u = V(() => a.value), d = {
      onToggle: m,
      validate: b,
      reset: p,
      resetValidation: s,
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
      return l(e.rules, e.modelValue);
    }
    function p() {
      y(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: yC,
      classes: $C,
      reset: p,
      validate: b,
      resetValidation: s
    };
  }
});
ev.render = wC;
var zl = ev;
oe(zl);
const XE = zl;
var Ga = zl;
const SC = {
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
}, { name: CC, n: _t } = te("rate"), kC = ["onClick"];
function PC(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = Le("ripple"), i = Le("hover");
  return h(), S(
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
          (h(!0), S(
            Be,
            null,
            Ge(e.toNumber(e.count), (l) => Oe((h(), S("div", {
              key: l,
              style: F(e.getStyle(l)),
              class: v(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              J(t, {
                class: v(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.namespace,
                name: e.getCurrentState(l).name,
                style: F({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              J(o, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, kC)), [
              [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
              [i, e.createHoverHandler(l), "desktop"]
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
const nv = ne({
  name: CC,
  components: {
    VarIcon: Ue,
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Ke, Hover: En },
  props: SC,
  setup(e) {
    const n = w(-1), { form: t, bindForm: o } = Mn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = In(), { hovering: s } = qn();
    let u = Number(e.modelValue);
    y(o, {
      reset: O,
      validate: p,
      resetValidation: l
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
        [_t("content")]: !0,
        [_t("--disabled")]: (t == null ? void 0 : t.disabled.value) || e.disabled,
        [_t("--error")]: r.value,
        [_t("--primary")]: C !== e.emptyIcon && !I
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
        n.value = $, s.value = C;
      };
    }
    function O() {
      y(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: r,
      formDisabled: t == null ? void 0 : t.disabled,
      formReadonly: t == null ? void 0 : t.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: c,
      getClass: f,
      getCurrentState: m,
      handleClick: k,
      createHoverHandler: T,
      reset: O,
      validate: p,
      resetValidation: l,
      toSizeUnit: we,
      toNumber: A,
      n: _t
    };
  }
});
nv.render = PC;
var Ll = nv;
oe(Ll);
const KE = Ll;
var Xa = Ll;
const OC = (e) => (pt(""), e = e(), ht(), e), TC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, EC = /* @__PURE__ */ OC(() => /* @__PURE__ */ N(
  "path",
  { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
  null,
  -1
  /* HOISTED */
)), IC = [
  EC
];
function MC(e, n) {
  return h(), S("svg", TC, IC);
}
const tv = ne({});
tv.render = MC;
var DC = tv;
const BC = (e) => (pt(""), e = e(), ht(), e), NC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, VC = /* @__PURE__ */ BC(() => /* @__PURE__ */ N(
  "path",
  { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
  null,
  -1
  /* HOISTED */
)), AC = [
  VC
];
function zC(e, n) {
  return h(), S("svg", NC, AC);
}
const ov = ne({});
ov.render = zC;
var LC = ov;
const RC = (e) => (pt(""), e = e(), ht(), e), UC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, HC = /* @__PURE__ */ RC(() => /* @__PURE__ */ N(
  "path",
  { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
  null,
  -1
  /* HOISTED */
)), FC = [
  HC
];
function YC(e, n) {
  return h(), S("svg", UC, FC);
}
const rv = ne({});
rv.render = YC;
var jC = rv;
const { n: WC, classes: qC } = te("result");
function GC(e, n) {
  return h(), S(
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
const av = ne({
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
      n: WC,
      classes: qC,
      toNumber: A
    };
  }
});
av.render = GC;
var XC = av;
const KC = (e) => (pt(""), e = e(), ht(), e), ZC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, JC = /* @__PURE__ */ KC(() => /* @__PURE__ */ N(
  "path",
  { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
  null,
  -1
  /* HOISTED */
)), QC = [
  JC
];
function _C(e, n) {
  return h(), S("svg", ZC, QC);
}
const iv = ne({});
iv.render = _C;
var xC = iv;
const ek = (e) => (pt(""), e = e(), ht(), e), nk = { viewBox: "-4 -4 32 32" }, tk = /* @__PURE__ */ ek(() => /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), ok = [
  tk
];
function rk(e, n) {
  return h(), S("svg", nk, ok);
}
const lv = ne({});
lv.render = rk;
var ak = lv;
const ik = {
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
}, { name: lk, n: sk, classes: uk } = te("result");
function dk(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      R(e.$slots, "image", {}, () => [
        e.type ? (h(), S(
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
                (h(), Se(Gt(e.type), {
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
        )) : _("v-if", !0)
      ]),
      R(e.$slots, "title", {}, () => [
        e.title ? (h(), S(
          "div",
          {
            key: 0,
            class: v(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)
      ]),
      R(e.$slots, "description", {}, () => [
        e.description ? (h(), S(
          "div",
          {
            key: 0,
            class: v(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)
      ]),
      e.$slots.footer ? (h(), S(
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
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const sv = ne({
  name: lk,
  components: {
    Info: DC,
    Success: XC,
    Warning: jC,
    Error: LC,
    Question: xC,
    Empty: ak
  },
  props: ik,
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
      n: sk,
      classes: uk,
      toNumber: A,
      toPxNum: He
    };
  }
});
sv.render = dk;
var Rl = sv;
oe(Rl);
const ZE = Rl;
var Ka = Rl;
const ck = {
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
}, { name: fk, n: vk, classes: mk } = te("row");
function pk(e, n) {
  return h(), S(
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
const uv = ne({
  name: fk,
  props: ck,
  setup(e) {
    const n = V(
      () => Me(e.gutter) ? e.gutter.map((s) => He(s) / 2) : [0, He(e.gutter) / 2]
    ), { cols: t, bindCols: o, length: r } = d0(), a = { computePadding: i };
    fe(() => r.value, i), fe(() => e.gutter, i), o(a);
    function i() {
      t.forEach((s) => {
        const [u, d] = n.value;
        s.setPadding({ left: d, right: d, top: u, bottom: u });
      });
    }
    function l(s) {
      y(e.onClick, s);
    }
    return {
      average: n,
      n: vk,
      classes: mk,
      handleClick: l,
      padStartFlex: er
    };
  }
});
uv.render = pk;
var Ul = uv;
oe(Ul);
const JE = Ul;
var Za = Ul, hk = Object.defineProperty, od = Object.getOwnPropertySymbols, gk = Object.prototype.hasOwnProperty, bk = Object.prototype.propertyIsEnumerable, rd = (e, n, t) => n in e ? hk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, yk = (e, n) => {
  for (var t in n || (n = {}))
    gk.call(n, t) && rd(e, t, n[t]);
  if (od)
    for (var t of od(n))
      bk.call(n, t) && rd(e, t, n[t]);
  return e;
};
const $k = yk({
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
}, en(Sl, [
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
])), { name: wk, n: Sk, classes: Ck } = te("select"), kk = { key: 1 };
function Pk(e, n) {
  const t = ae("var-chip"), o = ae("var-icon"), r = ae("var-field-decorator"), a = ae("var-menu"), i = ae("var-form-details");
  return h(), S(
    "div",
    {
      class: v(e.n()),
      onClick: n[3] || (n[3] = (...l) => e.handleFocus && e.handleFocus(...l))
    },
    [
      J(a, {
        "var-select-cover": "",
        "same-width": "",
        "close-on-click-reference": "",
        show: e.showMenu,
        "onUpdate:show": n[1] || (n[1] = (l) => e.showMenu = l),
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
            it(Co({
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
            Qo({
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
                        e.isEmptyModelValue ? _("v-if", !0) : R(e.$slots, "selected", { key: 0 }, () => [
                          e.multiple ? (h(), S(
                            Be,
                            { key: 0 },
                            [
                              e.chip ? (h(), S(
                                "div",
                                {
                                  key: 0,
                                  class: v(e.n("chips"))
                                },
                                [
                                  (h(!0), S(
                                    Be,
                                    null,
                                    Ge(e.labels, (l) => (h(), Se(t, {
                                      class: v(e.n("chip")),
                                      "var-select-cover": "",
                                      closable: "",
                                      size: "small",
                                      type: e.errorMessage ? "danger" : void 0,
                                      key: l,
                                      onClick: n[0] || (n[0] = On(() => {
                                      }, ["stop"])),
                                      onClose: () => e.handleClose(l)
                                    }, {
                                      default: ve(() => [
                                        Te(
                                          re(l),
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
                              )) : (h(), S(
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
                          )) : (h(), S(
                            "span",
                            kk,
                            re(e.label),
                            1
                            /* TEXT */
                          ))
                        ])
                      ],
                      2
                      /* CLASS */
                    ),
                    e.enableCustomPlaceholder ? (h(), S(
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
                    )) : _("v-if", !0),
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
const dv = ne({
  name: wk,
  components: {
    VarIcon: Ue,
    VarMenu: bo,
    VarChip: ar,
    VarFieldDecorator: Df,
    VarFormDetails: pn
  },
  props: $k,
  setup(e) {
    const n = w(!1), t = w(!1), o = V(() => e.multiple), r = V(() => e.focusColor), a = w(""), i = w([]), l = V(() => Fn(e.modelValue)), s = V(() => e.disabled || e.readonly ? "" : "pointer"), u = w(0), { bindForm: d, form: c } = Mn(), { length: f, options: m, bindOptions: b } = bS(), {
      errorMessage: p,
      validateWithTrigger: g,
      validate: k,
      // expose
      resetValidation: T
    } = In(), O = w(null), $ = V(() => e.variant === "outlined" ? "bottom" : "cover-top"), C = V(() => {
      const { hint: Y, blurColor: X, focusColor: ee } = e;
      if (!Y)
        return p.value ? "var(--field-decorator-error-color)" : n.value ? ee || "var(--field-decorator-focus-color)" : X || "var(--field-decorator-blur-color)";
    }), I = V(() => !e.hint && Fn(e.modelValue)), P = {
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
      !Y && !Fn(X) && (a.value = L(X)), !Y && Fn(X) && (a.value = "");
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
      const Re = pe ? m.filter(({ selected: le }) => le.value).map(H) : H(Y);
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
    function Q(Y) {
      const { disabled: X, readonly: ee, modelValue: pe, onClose: ke } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || X || ee)
        return;
      const Re = pe, le = m.find(({ label: Ce }) => Ce.value === Y), de = Re.filter((Ce) => {
        var Ve;
        return Ce !== ((Ve = le.value.value) != null ? Ve : le.label.value);
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
      isEmptyModelValue: l,
      menuEl: O,
      placement: $,
      cursor: s,
      placeholderColor: C,
      enableCustomPlaceholder: I,
      n: Sk,
      classes: Ck,
      handleFocus: U,
      handleBlur: ie,
      handleClear: W,
      handleClick: Z,
      handleClose: Q,
      reset: q,
      validate: x,
      resetValidation: T,
      focus: B,
      blur: M
    };
  }
});
dv.render = Pk;
var Hl = dv;
oe(Hl);
const QE = Hl;
var Ja = Hl;
const Ok = {
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
}, { name: Tk, n: Ek, classes: Ik } = te("skeleton");
function Mk(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? _("v-if", !0) : (h(), S(
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
      e.loading && !e.fullscreen ? (h(), S(
        "div",
        {
          key: 1,
          class: v(e.n("content"))
        },
        [
          e.card ? (h(), S(
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
          )) : _("v-if", !0),
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), S(
            "div",
            {
              key: 1,
              class: v(e.n("article"))
            },
            [
              e.avatar ? (h(), S(
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
              )) : _("v-if", !0),
              e.title || e.toNumber(e.rows) > 0 ? (h(), S(
                "div",
                {
                  key: 1,
                  class: v(e.n("section"))
                },
                [
                  e.title ? (h(), S(
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
                  )) : _("v-if", !0),
                  (h(!0), S(
                    Be,
                    null,
                    Ge(e.toNumber(e.rows), (t, o) => (h(), S(
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
              )) : _("v-if", !0)
            ],
            2
            /* CLASS */
          )) : _("v-if", !0)
        ],
        2
        /* CLASS */
      )) : _("v-if", !0),
      e.loading && e.fullscreen ? (h(), S(
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
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const cv = ne({
  name: Tk,
  props: Ok,
  setup: () => ({
    n: Ek,
    classes: Ik,
    toSizeUnit: we,
    toNumber: A
  })
});
cv.render = Mk;
var Fl = cv;
oe(Fl);
const _E = Fl;
var Qa = Fl, qe = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(qe || {});
const Dk = {
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
}, { name: Bk, n: ad, classes: Nk } = te("slider"), Vk = ["onTouchstart"];
function Ak(e, n) {
  const t = ae("var-hover-overlay"), o = ae("var-form-details"), r = Le("hover");
  return h(), S(
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
          (h(!0), S(
            Be,
            null,
            Ge(e.thumbList, (a) => (h(), S("div", {
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
            ], 46, Vk))),
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
const fv = ne({
  name: Bk,
  components: {
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  directives: { Hover: En },
  props: Dk,
  setup(e) {
    const n = w(0), t = w(null), o = w(!1), r = V(() => A(e.max) - A(e.min)), a = V(() => n.value / r.value * A(e.step)), i = V(() => e.disabled || (d == null ? void 0 : d.disabled.value)), l = V(() => e.readonly || (d == null ? void 0 : d.readonly.value)), s = V(() => e.direction === "vertical"), { bindForm: u, form: d } = Mn(), { errorMessage: c, validateWithTrigger: f, validate: m, resetValidation: b } = In(), { hovering: p, handleHovering: g } = qn(), { hovering: k, handleHovering: T } = qn(), O = V(() => {
      const { modelValue: le, range: de } = e;
      let Ce = [];
      return de && Me(le) ? Ce = [
        {
          value: G(le[0]),
          enumValue: qe.First,
          text: W(le[0]),
          hovering: eo(p),
          handleHovering: g
        },
        {
          value: G(le[1]),
          enumValue: qe.Second,
          text: W(le[1]),
          hovering: eo(k),
          handleHovering: T
        }
      ] : vn(le) && (Ce = [
        {
          value: G(le),
          enumValue: qe.First,
          text: W(le),
          hovering: eo(p),
          handleHovering: g
        }
      ]), Ce;
    }), $ = V(() => {
      const { activeColor: le, range: de, modelValue: Ce } = e, Ve = de && Me(Ce) ? G(Math.min(Ce[0], Ce[1])) : 0, se = de && Me(Ce) ? G(Math.max(Ce[0], Ce[1])) - Ve : G(Ce);
      return s.value ? {
        left: "0px",
        height: `${se}%`,
        bottom: `${Ve}%`,
        background: le
      } : {
        top: "0px",
        width: `${se}%`,
        left: `${Ve}%`,
        background: le
      };
    }), C = je({
      [qe.First]: E(),
      [qe.Second]: E()
    });
    let I;
    y(u, {
      reset: Re,
      validate: D,
      resetValidation: b
    }), fe([() => e.modelValue, () => e.step], ([le, de]) => {
      !ee() || !pe() || o.value || ke(le, A(de));
    }), fe(n, () => ke()), rn(() => {
      !ee() || !pe() || (n.value = t.value[s.value ? "offsetHeight" : "offsetWidth"]);
    }), mr(() => {
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
    function L(le) {
      const de = le.currentTarget;
      return de ? s.value ? n.value - (le.clientY - _e(de).top) : le.clientX - Hm(de) : 0;
    }
    function U(le) {
      return {
        [s.value ? "bottom" : "left"]: `${le.value}%`,
        zIndex: C[le.enumValue].active ? 1 : void 0
      };
    }
    function ie(le) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : C[le].active;
    }
    function G(le) {
      const { min: de, max: Ce } = e;
      return le < A(de) ? 0 : le > A(Ce) ? 100 : (le - A(de)) / r.value * 100;
    }
    function W(le) {
      if (!vn(le))
        return 0;
      let de = le;
      return de < Number(e.min) && (de = Number(e.min)), de > Number(e.max) && (de = Number(e.max)), parseInt(`${de}`, 10) === de ? de : A(de.toPrecision(5));
    }
    function Z(le, de) {
      i.value || de.handleHovering(le);
    }
    function Q(le, de) {
      let Ce = [];
      const { step: Ve, range: se, modelValue: he, onChange: De, min: We } = e, ue = A(Ve), $e = Math.round(le / a.value), be = $e * ue + A(We), Ie = C[de].percentValue * ue + A(We);
      if (C[de].percentValue = $e, se && Me(he) && (Ce = de === qe.First ? [be, he[1]] : [he[0], be]), Ie !== be) {
        const Ee = se ? Ce.map((Xe) => W(Xe)) : W(be);
        y(De, Ee), y(e["onUpdate:modelValue"], Ee), H();
      }
    }
    function j(le) {
      if (!e.range)
        return qe.First;
      const de = C[qe.First].percentValue * a.value, Ce = C[qe.Second].percentValue * a.value, Ve = Math.abs(le - de), se = Math.abs(le - Ce);
      return Ve <= se ? qe.First : qe.Second;
    }
    function B() {
      document.addEventListener("touchmove", q, { passive: !1 }), document.addEventListener("touchend", Y), document.addEventListener("touchcancel", Y);
    }
    function M() {
      document.removeEventListener("touchmove", q), document.removeEventListener("touchend", Y), document.removeEventListener("touchcancel", Y);
    }
    function x(le, de) {
      if (n.value || (n.value = t.value.offsetWidth), i.value || (C[de].active = !0), I = de, B(), i.value || l.value)
        return;
      y(e.onStart), o.value = !0;
      const { clientX: Ce, clientY: Ve } = le.touches[0];
      C[de].startPosition = s.value ? Ve : Ce;
    }
    function q(le) {
      if (le.preventDefault(), i.value || l.value || !o.value)
        return;
      const { startPosition: de, currentOffset: Ce } = C[I], { clientX: Ve, clientY: se } = le.touches[0];
      let he = (s.value ? de - se : Ve - de) + Ce;
      he <= 0 ? he = 0 : he >= n.value && (he = n.value), Q(he, I);
    }
    function Y() {
      M();
      const { range: le, modelValue: de, onEnd: Ce, step: Ve, min: se } = e;
      if (i.value || (C[I].active = !1), i.value || l.value)
        return;
      let he = [];
      C[I].currentOffset = C[I].percentValue * a.value;
      const De = C[I].percentValue * A(Ve) + A(se);
      le && Me(de) && (he = I === qe.First ? [De, de[1]] : [de[0], De]), y(Ce, le ? he : De), o.value = !1;
    }
    function X(le) {
      if (i.value || l.value || le.target.closest(`.${ad("thumb")}`))
        return;
      const de = L(le), Ce = j(de);
      I = Ce, Q(de, Ce), Y();
    }
    function ee() {
      const le = A(e.step);
      return isNaN(le) ? ($s("Slider", 'type of prop "step" should be Number'), !1) : le < 0 ? ($s("Slider", '"step" should be > 0'), !1) : !0;
    }
    function pe() {
      const { range: le, modelValue: de } = e;
      return le && !Me(de) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !le && Me(de) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : le && Me(de) && de.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function ke(le = e.modelValue, de = A(e.step)) {
      const Ce = (Ve) => {
        const { min: se, max: he } = e;
        return Ve < A(se) ? 0 : Ve > A(he) ? r.value / de : (Ve - A(se)) / de;
      };
      e.range && Me(le) ? (C[qe.First].percentValue = Ce(le[0]), C[qe.First].currentOffset = C[qe.First].percentValue * a.value, C[qe.Second].percentValue = Ce(le[1]), C[qe.Second].currentOffset = C[qe.Second].percentValue * a.value) : vn(le) && (C[qe.First].currentOffset = Ce(le) * a.value);
    }
    function Re() {
      const le = e.range ? [0, 0] : 0;
      y(e["onUpdate:modelValue"], le), b();
    }
    return {
      Thumbs: qe,
      sliderEl: t,
      getFillStyle: $,
      isDisabled: i,
      isVertical: s,
      errorMessage: c,
      thumbsProps: C,
      thumbList: O,
      n: ad,
      classes: Nk,
      thumbStyle: U,
      hover: Z,
      multiplySizeUnit: sn,
      toNumber: A,
      showLabel: ie,
      start: x,
      move: q,
      end: Y,
      click: X
    };
  }
});
fv.render = Ak;
var Yl = fv;
oe(Yl);
const xE = Yl;
var _a = Yl, zk = Object.defineProperty, Lk = Object.defineProperties, Rk = Object.getOwnPropertyDescriptors, id = Object.getOwnPropertySymbols, Uk = Object.prototype.hasOwnProperty, Hk = Object.prototype.propertyIsEnumerable, ld = (e, n, t) => n in e ? zk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Fk = (e, n) => {
  for (var t in n || (n = {}))
    Uk.call(n, t) && ld(e, t, n[t]);
  if (id)
    for (var t of id(n))
      Hk.call(n, t) && ld(e, t, n[t]);
  return e;
}, Yk = (e, n) => Lk(e, Rk(n));
const vv = {
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
  loadingType: en(ot, "type"),
  loadingSize: en(ot, "size"),
  loadingRadius: en(ot, "radius"),
  loadingColor: Yk(Fk({}, en(ot, "color")), {
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
}, { n: jk, classes: Wk } = te("snackbar"), qk = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Gk(e, n) {
  const t = ae("var-icon"), o = ae("var-loading");
  return Oe((h(), S(
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
              }, null, 8, ["name"])) : _("v-if", !0),
              e.type === "loading" ? (h(), Se(o, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : _("v-if", !0),
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
const mv = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Rt,
    VarIcon: Ue
  },
  props: vv,
  setup(e) {
    const n = w(null), { zIndex: t } = Oo(() => e.show, 1);
    gr(
      () => e.show,
      () => e.lockScroll
    );
    const o = V(() => e.type === "loading" || e.forbidClick), r = V(() => e.type ? qk[e.type] : ""), a = () => {
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
      SNACKBAR_TYPE: gv,
      n: jk,
      classes: Wk,
      zIndex: t,
      iconName: r,
      isForbidClick: o
    };
  }
});
mv.render = Gk;
var pv = mv;
const { name: Xk, n: Kk } = te("snackbar");
function Zk(e, n) {
  const t = ae("var-snackbar-core");
  return h(), Se(Xn, {
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
const hv = ne({
  name: Xk,
  components: { VarSnackbarCore: pv },
  props: vv,
  setup() {
    const { disabled: e } = Zt();
    return {
      disabled: e,
      n: Kk
    };
  }
});
hv.render = Zk;
var Mr = hv, Jk = Object.defineProperty, sd = Object.getOwnPropertySymbols, Qk = Object.prototype.hasOwnProperty, _k = Object.prototype.propertyIsEnumerable, ud = (e, n, t) => n in e ? Jk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, yo = (e, n) => {
  for (var t in n || (n = {}))
    Qk.call(n, t) && ud(e, t, n[t]);
  if (sd)
    for (var t of sd(n))
      _k.call(n, t) && ud(e, t, n[t]);
  return e;
};
const gv = ["loading", "success", "warning", "info", "error"];
let dd = 0, xa = !1, bv, jt = !1;
const yv = {
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
let Pn = je([]), jl = yv;
const xk = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Yr = (e) => () => Xt(e) ? e() : e, eP = {
  setup() {
    return () => {
      const e = Pn.map(({
        id: n,
        reactiveSnackOptions: t,
        _update: o
      }) => {
        const r = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto"), jt && (t.position = "top");
        const i = yo({
          position: jt ? "relative" : "absolute"
        }, iP(t.position)), {
          content: l,
          icon: s,
          action: u
        } = t, d = {
          default: Yr(l),
          icon: Yr(s),
          action: Yr(u)
        };
        return J(pv, Ne(t, {
          key: n,
          style: i,
          "data-id": n,
          _update: o,
          show: t.show,
          "onUpdate:show": (c) => t.show = c
        }), d);
      });
      return J(Kv, Ne(xk, {
        style: {
          zIndex: wn.zIndex
        },
        onAfterEnter: nP,
        onAfterLeave: tP
      }), {
        default: () => [e]
      });
    };
  }
}, Gn = function(e) {
  const n = rP(e), t = je(yo(yo({}, jl), n));
  t.show = !0, xa || (xa = !0, bv = Kt(eP).unmountInstance);
  const {
    length: o
  } = Pn, r = {
    id: dd++,
    reactiveSnackOptions: t
  };
  if (o === 0 || jt)
    oP(r);
  else {
    const a = `update-${dd}`;
    aP(t, a);
  }
  return {
    clear() {
      !jt && Pn.length ? Pn[0].reactiveSnackOptions.show = !1 : t.show = !1;
    }
  };
};
gv.forEach((e) => {
  Gn[e] = (n) => (hi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Gn(n));
});
Gn.allowMultiple = function(e = !1) {
  e !== jt && (Pn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), jt = e);
};
Gn.clear = function() {
  Pn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Gn.setDefaultOptions = function(e) {
  jl = e;
};
Gn.resetDefaultOptions = function() {
  jl = yv;
};
function nP(e) {
  const n = e.getAttribute("data-id"), t = Pn.find((o) => o.id === A(n));
  t && y(t.reactiveSnackOptions.onOpened);
}
function tP(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), t = Pn.find((r) => r.id === A(n));
  t && (t.animationEnd = !0, y(t.reactiveSnackOptions.onClosed)), Pn.every((r) => r.animationEnd) && (y(bv), Pn = je([]), xa = !1);
}
function oP(e) {
  Pn.push(e);
}
function rP(e = {}) {
  return Qe(e) ? {
    content: e
  } : e;
}
function aP(e, n) {
  const [t] = Pn;
  t.reactiveSnackOptions = yo(yo({}, t.reactiveSnackOptions), e), t._update = n;
}
function iP(e = "top") {
  return e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Gn.Component = Mr;
oe(Mr);
oe(Mr, Gn);
const eI = Mr;
var ei = Gn;
const lP = {
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
function sP(e, n, t) {
  const { direction: o, justify: r, index: a, lastIndex: i } = t;
  let l = "0";
  return o === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${$n(e)} ${n} ${$n(e)} 0` : l = `${$n(e)} 0` : r === "space-around" ? l = `${$n(e)} ${$n(n)}` : r === "space-between" && (a === 0 ? l = `${$n(e)} ${$n(n)} ${$n(e)} 0` : a === i ? l = `${$n(e)} 0 ${$n(e)} ${$n(n)}` : l = `${$n(e)} ${$n(n)}`)), o === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const uP = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: dP,
  n: jr,
  classes: cP
} = te("space");
function fP(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Me(e) ? e.map(we) : [we(e), we(e)];
}
var Wl = ne({
  name: dP,
  props: lP,
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
        direction: l,
        size: s
      } = e;
      let u = (t = y(n.default)) != null ? t : [];
      const [d, c] = fP(s, uP(s));
      u = kd(u);
      const f = u.length - 1, m = u.map((b, p) => {
        const g = sP(d, c, {
          direction: l,
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
        class: cP(jr(), jr("$--box"), [o, jr("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: er(r),
          alignItems: er(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${d} / 2) 0` : void 0
        }
      }, [m]);
    };
  }
});
oe(Wl);
const nI = Wl;
var ni = Wl;
const vP = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: String,
  inactiveIcon: String
}, $v = Symbol("STEPS_BIND_STEP_KEY");
function mP() {
  const { bindChildren: e, childProviders: n } = ln($v);
  return {
    step: n,
    bindStep: e
  };
}
function pP() {
  const { parentProvider: e, index: n, bindParent: t } = an($v);
  return t || Tn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: t
  };
}
const { name: hP, n: gP, classes: bP } = te("step"), yP = { key: 3 };
function $P(e, n) {
  const t = ae("var-icon");
  return h(), S(
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
              }, null, 8, ["class", "name"])) : (h(), S(
                "span",
                yP,
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
const wv = ne({
  name: hP,
  components: { VarIcon: Ue },
  props: vP,
  setup() {
    const { index: e, steps: n, bindSteps: t } = pP(), { active: o, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = V(() => o.value === e.value), u = V(() => e.value !== -1 && A(o.value) > e.value);
    t({ index: e });
    function c() {
      return l(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: s,
      direction: i,
      activeColor: r,
      inactiveColor: a,
      n: gP,
      classes: bP,
      click: c
    };
  }
});
wv.render = $P;
var ql = wv;
oe(ql);
const tI = ql;
var ti = ql;
const wP = {
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
}, { name: SP, n: CP } = te("steps");
function kP(e, n) {
  return h(), S(
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
const Sv = ne({
  name: SP,
  props: wP,
  setup(e) {
    const n = V(() => e.active), t = V(() => e.activeColor), o = V(() => e.inactiveColor), r = V(() => e.direction), { bindStep: a } = mP();
    a({
      active: n,
      direction: r,
      activeColor: t,
      inactiveColor: o,
      clickStep: l
    });
    function l(s) {
      y(e.onClickStep, s);
    }
    return { n: CP };
  }
});
Sv.render = kP;
var Gl = Sv;
oe(Gl);
const oI = Gl;
var oi = Gl;
const PP = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: OP, n: TP } = te("style-provider"), EP = ne({
  name: OP,
  props: PP,
  setup(e, { slots: n }) {
    return () => bd(
      e.tag,
      {
        class: TP(),
        style: Ud(e.styleVars)
      },
      y(n.default)
    );
  }
});
var Dr = EP;
const Wr = [];
function Xl(e) {
  Wr.forEach((t) => document.documentElement.style.removeProperty(t)), Wr.length = 0;
  const n = Ud(e ?? {});
  Object.entries(n).forEach(([t, o]) => {
    document.documentElement.style.setProperty(t, o), Wr.push(t);
  });
}
Xl.Component = Dr;
oe(Dr);
oe(Dr, Xl);
const rI = Dr;
var ri = Xl;
const IP = {
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
}, { name: MP, n: DP, classes: BP } = te("switch"), NP = (e) => (pt(""), e = e(), ht(), e), VP = /* @__PURE__ */ NP(() => /* @__PURE__ */ N(
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
)), AP = [
  VP
];
function zP(e, n) {
  const t = ae("var-hover-overlay"), o = ae("var-form-details"), r = Le("ripple"), a = Le("hover");
  return Oe((h(), S(
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
          Oe((h(), S(
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
                  e.loading ? (h(), S(
                    "span",
                    {
                      key: 0,
                      class: v(e.n("loading")),
                      style: F({
                        width: e.radius,
                        height: e.radius
                      })
                    },
                    AP,
                    6
                    /* CLASS, STYLE */
                  )) : _("v-if", !0)
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
const Cv = ne({
  name: MP,
  components: {
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Ke, Hover: En },
  props: IP,
  setup(e) {
    const { bindForm: n, form: t } = Mn(), { errorMessage: o, validateWithTrigger: r, validate: a, resetValidation: i } = In(), { hovering: l, handleHovering: s } = qn(), u = V(() => {
      const { size: k, modelValue: T, color: O, closeColor: $, loadingColor: C, activeValue: I } = e;
      return {
        handle: {
          width: sn(k),
          height: sn(k),
          backgroundColor: T === I ? O : $,
          color: C
        },
        ripple: {
          left: T === I ? sn(k, 0.5) : `-${sn(k, 0.5)}`,
          color: T === I ? O : $ || "#999",
          width: sn(k, 2),
          height: sn(k, 2)
        },
        track: {
          height: sn(k, 0.72),
          width: sn(k, 1.9),
          borderRadius: sn(k, 2 / 3),
          filter: T === I || o != null && o.value ? void 0 : "brightness(.6)",
          backgroundColor: T === I ? O : $
        },
        switch: {
          height: sn(k, 1.2),
          width: sn(k, 2)
        }
      };
    }), d = V(() => sn(e.size, 0.8));
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
      e.disabled || t != null && t.disabled.value || s(k);
    }
    function g() {
      y(e["onUpdate:modelValue"], e.inactiveValue), i();
    }
    return {
      hovering: l,
      radius: d,
      styleComputed: u,
      errorMessage: o,
      formDisabled: t == null ? void 0 : t.disabled,
      formReadonly: t == null ? void 0 : t.readonly,
      n: DP,
      classes: BP,
      multiplySizeUnit: sn,
      switchActive: b,
      hover: p
    };
  }
});
Cv.render = zP;
var Kl = Cv;
oe(Kl);
const aI = Kl;
var ai = Kl;
const LP = {
  name: [String, Number],
  disabled: Boolean,
  onClick: z()
}, kv = Symbol("TABS_BIND_TAB_KEY");
function RP() {
  const { childProviders: e, bindChildren: n, length: t } = ln(kv);
  return {
    length: t,
    tabList: e,
    bindTabList: n
  };
}
function UP() {
  const { parentProvider: e, bindParent: n, index: t } = an(kv);
  return n || Tn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: t,
    tabs: e,
    bindTabs: n
  };
}
const { name: HP, n: jo, classes: FP } = te("tab");
function YP(e, n) {
  const t = Le("ripple");
  return Oe((h(), S(
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
const Pv = ne({
  name: HP,
  directives: { Ripple: Ke },
  props: LP,
  setup(e) {
    const n = w(null), t = V(() => n.value), o = V(() => e.name), r = V(() => e.disabled), { index: a, tabs: i, bindTabs: l } = UP(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: m, resize: b } = i, p = {
      name: o,
      index: a,
      disabled: r,
      element: t
    };
    l(p), fe(() => [e.name, e.disabled], b);
    function g() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function k() {
      return e.disabled ? f.value : g() ? d.value : c.value;
    }
    function T() {
      return e.disabled ? jo("$-tab--disabled") : g() ? jo("$-tab--active") : jo("$-tab--inactive");
    }
    function O($) {
      const { disabled: C, name: I, onClick: P } = e;
      C || (y(P, I ?? a.value, $), s(p));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: m,
      n: jo,
      classes: FP,
      computeColorStyle: k,
      computeColorClass: T,
      handleClick: O
    };
  }
});
Pv.render = YP;
var Zl = Pv;
oe(Zl);
const iI = Zl;
var ii = Zl;
const jP = {
  name: [String, Number]
}, { name: WP, n: qP, classes: GP } = te("tab-item");
function XP(e, n) {
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
const Ov = ne({
  name: WP,
  components: { VarSwipeItem: po },
  props: jP,
  setup(e) {
    const n = w(!1), t = V(() => e.name), { index: o, bindTabsItems: r } = Zw(), { bindLists: a } = Jw(), i = {
      index: o,
      name: t,
      current: V(() => n.value),
      setCurrent: l
    };
    r(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: qP,
      classes: GP
    };
  }
});
Ov.render = XP;
var Jl = Ov;
oe(Jl);
const lI = Jl;
var li = Jl;
const KP = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, { name: ZP, n: JP, classes: QP } = te("table");
function _P(e, n) {
  return h(), S(
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
      e.$slots.footer ? (h(), S(
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
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Tv = ne({
  name: ZP,
  props: KP,
  setup: () => ({
    toSizeUnit: we,
    n: JP,
    classes: QP,
    formatElevation: gn
  })
});
Tv.render = _P;
var Ql = Tv;
oe(Ql);
const sI = Ql;
var si = Ql;
const xP = {
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
  stickyCssMode: en(Jo, "cssMode"),
  stickyZIndex: en(Jo, "zIndex"),
  offsetTop: en(Jo, "offsetTop"),
  onClick: z(),
  onChange: z(),
  "onUpdate:active": z()
};
var cd = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: eO, n: nO, classes: tO } = te("tabs");
function oO(e, n) {
  return h(), Se(Gt(e.sticky ? e.n("$-sticky") : e.Transition), {
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
const Ev = ne({
  name: eO,
  components: { VarSticky: go },
  inheritAttrs: !1,
  props: xP,
  setup(e) {
    const n = w("0px"), t = w("0px"), o = w("0px"), r = w("0px"), a = w(!1), i = w(null), l = V(() => e.active), s = V(() => e.activeColor), u = V(() => e.inactiveColor), d = V(() => e.disabledColor), c = V(() => e.itemDirection), f = w(null), m = V(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: b, bindTabList: p, length: g } = RP();
    p({
      active: l,
      activeColor: s,
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
    ), fe(() => [e.active, e.scrollable], E), mt(E), ko(E);
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
        const U = st(L, 0, g.value - 1);
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
        so(U, {
          left: G,
          animation: Jr
        });
      } else {
        const G = ie.offsetTop + ie.offsetHeight / 2 - U.offsetHeight / 2;
        so(U, {
          top: G,
          animation: Jr
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
      n: nO,
      classes: tO,
      resize: E,
      resizeSticky: H,
      formatElevation: gn
    };
  }
});
Ev.render = oO;
var _l = Ev;
oe(_l);
const uI = _l;
var ui = _l;
const rO = {
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
var aO = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: iO, n: lO } = te("tabs-items");
function sO(e, n) {
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
const Iv = ne({
  name: iO,
  components: { VarSwipe: mo },
  props: rO,
  setup(e) {
    const n = w(null), { tabItemList: t, bindTabItem: o, length: r } = Kw();
    o({}), fe(() => e.active, s), fe(
      () => r.value,
      () => aO(this, null, function* () {
        yield dn(), s(e.active);
      })
    );
    function a(c) {
      return t.find(({ name: f }) => c === f.value);
    }
    function i(c) {
      return t.find(({ index: f }) => c === f.value);
    }
    function l(c) {
      return a(c) || i(c);
    }
    function s(c) {
      var f;
      const m = l(c);
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
      n: lO,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Iv.render = sO;
var xl = Iv;
oe(xl);
const dI = xl;
var di = xl, uO = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, dO = {
  "--badge-default-color": "#555"
}, cO = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, fO = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, vO = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, mO = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, pO = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, hO = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, gO = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, bO = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, yO = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, $O = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, wO = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, SO = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, CO = {
  "--popup-content-background-color": "#1e1e1e"
}, kO = {
  "--pull-refresh-background": "#303030"
}, PO = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, OO = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, TO = {
  "--select-scroller-background": "#303030"
}, EO = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, IO = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, MO = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, DO = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, BO = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, NO = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, VO = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, AO = {
  "--tabs-background": "#1e1e1e"
}, zO = {
  "--app-bar-color": "#272727"
}, LO = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, RO = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, UO = {
  "--menu-background-color": "#272727"
}, HO = {
  "--breadcrumb-inactive-color": "#aaa"
}, FO = {
  "--paper-background": "#303030"
}, YO = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, jO = {
  "--link-default-color": "#fff"
}, WO = {
  "--progress-label-color": "#fff"
}, qO = {
  "--options-text-color": "#fff"
}, GO = {
  "--countdown-text-color": "#fff"
}, XO = {
  "--watermark-content-color": "#ffffff"
}, KO = Object.defineProperty, fd = Object.getOwnPropertySymbols, ZO = Object.prototype.hasOwnProperty, JO = Object.prototype.propertyIsEnumerable, vd = (e, n, t) => n in e ? KO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Pe = (e, n) => {
  for (var t in n || (n = {}))
    ZO.call(n, t) && vd(e, t, n[t]);
  if (fd)
    for (var t of fd(n))
      JO.call(n, t) && vd(e, t, n[t]);
  return e;
}, QO = Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe({
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
}, cO), vO), fO), NO), gO), EO), AO), DO), CO), bO), uO), pO), dO), VO), hO), kO), MO), IO), wO), BO), $O), TO), PO), mO), yO), SO), zO), LO), RO), UO), OO), HO), FO), YO), jO), WO), qO), GO), XO);
const _O = { dark: QO }, cI = null;
var ci = _O;
const Cn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], un = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], md = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], xO = {
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
}, Mv = (e, n) => e === "24hr" || n === "am", es = (e, n, t) => {
  const o = Cn.findIndex((a) => A(a) === A(t)), r = Mv(e, n) ? t : un[o];
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
}, Dv = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = es(r, a, i);
  let f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    const { hour: b, minute: p } = fn(l);
    f = b === c && o > p;
  }
  if (!l && s) {
    const { hour: b, minute: p } = fn(s);
    f = b === c && o < p;
  }
  if (l && s) {
    const { hour: b, minute: p } = fn(l), { hour: g, minute: k } = fn(s);
    f = g === c && o < k || b === c && o > p;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (t = e.allowedTime) == null ? void 0 : t.minutes(o)), f || m;
}, Bv = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = es(r, a, i);
  let m = !1, b = !1;
  if (d.includes(c))
    return !0;
  if (s && !u) {
    const { hour: p, minute: g, second: k } = fn(s);
    m = p === f && g < l || g === l && o > k;
  }
  if (!s && u) {
    const { hour: p, minute: g, second: k } = fn(u);
    m = p === f && g > l || g === l && o > k;
  }
  if (s && u) {
    const { hour: p, minute: g, second: k } = fn(s), { hour: T, minute: O, second: $ } = fn(u);
    m = p === f && g < l || T === f && O > l || p === f && g === l && o > k || T === f && O === l && o < $;
  }
  return (n = e.allowedTime) != null && n.seconds && (b = (t = e.allowedTime) == null ? void 0 : t.seconds(o)), m || b;
}, { n: eT, classes: nT } = te("time-picker");
function tT(e, n) {
  return h(), S(
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
      (h(!0), S(
        Be,
        null,
        Ge(e.timeScales, (t, o) => (h(), S(
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
      e.format === "24hr" && e.type === "hour" ? (h(), S(
        "div",
        {
          key: 0,
          class: v(e.n("clock-inner")),
          ref: "inner"
        },
        [
          (h(!0), S(
            Be,
            null,
            Ge(e.hours24, (t, o) => (h(), S(
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
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Nv = ne({
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
    const t = w(null), o = w([]), r = w([]), a = V(() => ({
      transform: `rotate(${A(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = V(() => {
      if (e.rad === void 0)
        return;
      const p = e.rad / 30;
      return p >= 0 ? p : p + 12;
    }), l = V(() => e.type === "hour" ? Cn : md), s = (p, g) => {
      p = p ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const k = e.type === "minute" ? Dv : Bv, T = {
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
      const p = e.isInner ? un[i.value] : l.value[i.value];
      return l.value === md ? s() ? "#bdbdbd" : e.color : c(p) ? "#bdbdbd" : e.color;
    }, d = (p, g) => g ? i.value === p && e.isInner : i.value === p && (!e.isInner || e.type !== "hour"), c = (p) => {
      if (e.type === "hour") {
        if (Mv(e.format, e.ampm))
          return o.value.includes(p);
        const g = Cn.findIndex((k) => k === p);
        return r.value.includes(g);
      }
      return s(p, !0);
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
      return Ct(p[i.value], 2, "0");
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
        const { hourStr: $ } = es(e.format, e.ampm, e.time.hour);
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
      n: eT,
      classes: nT,
      hours24: un,
      timeScales: l,
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
Nv.render = tT;
var oT = Nv;
const { name: rT, n: aT, classes: iT } = te("time-picker"), lT = (e) => (pt(""), e = e(), ht(), e), sT = /* @__PURE__ */ lT(() => /* @__PURE__ */ N(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), uT = { key: 0 };
function dT(e, n) {
  const t = ae("clock");
  return h(), S(
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
              sT,
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
              e.useSeconds ? (h(), S("span", uT, ":")) : _("v-if", !0),
              e.useSeconds ? (h(), S(
                "div",
                {
                  key: 1,
                  class: v(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                  onClick: n[2] || (n[2] = (o) => e.checkPanel("second"))
                },
                re(e.time.second),
                3
                /* TEXT, CLASS */
              )) : _("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.format === "ampm" ? (h(), S(
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
          )) : _("v-if", !0)
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
const Vv = ne({
  name: rT,
  components: { Clock: oT },
  props: xO,
  setup(e) {
    const n = w(null), t = w(null), o = w(null), r = w(!1), a = w(!1), i = w(!1), l = w(!1), s = w(!1), u = w(!1), d = w(!1), c = w(0), f = w(0), m = w(), b = w("hour"), p = w("am"), g = w({
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
          m.value = (X === "12" ? 0 : A(X)) * 30, c.value = A(pe) * 6, f.value = A(ke) * 6, g.value = H(M), e.format !== "24hr" && (p.value = Ct(`${x}`, 2, "0") === ee && un.includes(ee) ? "pm" : "am"), r.value = e.format === "24hr" && un.includes(ee);
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
      l.value = !1, d.value = !1, b.value = M;
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
      const q = e.useSeconds ? `:${g.value.second}` : "", Y = `${Ct(x, 2, "0")}:${g.value.minute}${q}`;
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
      u.value = Y.includes(ke), !u.value && (m.value = X, l.value = !0);
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
      d.value = Dv(X), !d.value && (c.value = q, s.value = !0);
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
      Bv(X) || (f.value = q);
    }
    function Z() {
      const { left: M, top: x, width: q, height: Y } = _e(n.value);
      if (k.x = M + q / 2, k.y = x + Y / 2, b.value === "hour" && e.format === "24hr") {
        const { rangeXMin: X, rangeXMax: ee, rangeYMin: pe, rangeYMax: ke } = U();
        T.x = [X, ee], T.y = [pe, ke];
      }
    }
    function Q(M) {
      if (M.preventDefault(), e.readonly)
        return;
      Z();
      const { clientX: x, clientY: q } = M.touches[0], Y = x - k.x, X = q - k.y, ee = Math.round(C(Math.atan2(X, Y)));
      b.value === "hour" ? ie(x, q, ee) : b.value === "minute" ? G(ee) : W(ee);
    }
    function j() {
      if (!e.readonly) {
        if (b.value === "hour" && l.value) {
          b.value = "minute";
          return;
        }
        b.value === "minute" && e.useSeconds && s.value && (b.value = "second");
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
      n: aT,
      classes: iT,
      moveHand: Q,
      checkPanel: I,
      checkAmpm: D,
      end: j,
      update: $,
      changePreventUpdate: B,
      formatElevation: gn
    };
  }
});
Vv.render = dT;
var ns = Vv;
oe(ns);
const fI = ns;
var fi = ns;
const cT = {
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
var qr = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: fT, n: vT, classes: mT } = te("uploader");
let pT = 0;
const hT = ["onClick"], gT = ["onClick"], bT = ["src", "alt"], yT = ["multiple", "accept", "capture", "disabled"], $T = ["src"];
function wT(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = ae("var-popup"), i = Le("ripple"), l = Le("hover");
  return h(), S(
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
          (h(!0), S(
            Be,
            null,
            Ge(e.files, (s) => Oe((h(), S("div", {
              class: v(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              N(
                "div",
                {
                  class: v(e.n("file-name"))
                },
                re(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (h(), S("div", {
                key: 0,
                class: v(e.n("file-close")),
                onClick: On((u) => e.handleRemove(s), ["stop"])
              }, [
                J(t, {
                  class: v(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, gT)) : _("v-if", !0),
              s.cover ? (h(), S("img", {
                key: 1,
                class: v(e.n("file-cover")),
                style: F({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, bT)) : _("v-if", !0),
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
                        e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])
                      ),
                      style: F({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )
            ], 10, hT)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Oe((h(), S(
            "div",
            {
              key: 0,
              class: v(
                e.classes(
                  [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`],
                  [e.disabled || e.formDisabled, e.n("--disabled")]
                )
              ),
              onClick: n[1] || (n[1] = (...s) => e.chooseFile && e.chooseFile(...s))
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
                onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s))
              }, null, 42, yT),
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
            [l, e.handleHovering, "desktop"]
          ]) : _("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      J(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, Qo({
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
        "onUpdate:show": n[2] || (n[2] = (s) => e.showPreview = s),
        onClosed: n[3] || (n[3] = (s) => e.currentPreview = null)
      }, {
        default: ve(() => {
          var s, u;
          return [
            e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (h(), S("video", {
              key: 0,
              class: v(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, $T)) : _("v-if", !0)
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
const Av = ne({
  name: fT,
  directives: { Ripple: Ke, Hover: En },
  components: {
    VarIcon: Ue,
    VarPopup: dt,
    VarFormDetails: pn,
    VarHoverOverlay: zn
  },
  props: cT,
  setup(e) {
    const n = w(null), t = w(!1), o = w(null), r = V(() => {
      const {
        maxlength: Q,
        modelValue: { length: j }
      } = e;
      return vn(Q) ? `${j} / ${Q}` : "";
    }), { form: a, bindForm: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = In(), { hovering: c, handleHovering: f } = qn(), m = V(() => {
      const { modelValue: Q, hideList: j } = e;
      return j ? [] : Q;
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
    function k(Q) {
      const { disabled: j, previewed: B } = e;
      if (a != null && a.disabled.value || j || !B)
        return;
      const { url: M } = Q;
      if (Qe(M) && Ms(M)) {
        ho(M);
        return;
      }
      Qe(M) && Ds(M) && (o.value = Q, t.value = !0);
    }
    function T(Q) {
      return {
        id: pT++,
        url: "",
        cover: "",
        name: Q.name,
        file: Q,
        progress: 0
      };
    }
    function O(Q) {
      const j = Q.target, { files: B } = j;
      return Array.from(B);
    }
    function $(Q) {
      return new Promise((j) => {
        if (!Q.file.type.startsWith("image")) {
          j(Q);
          return;
        }
        const B = new FileReader();
        B.onload = () => {
          const M = B.result;
          Q.cover = M, Q.url = M, j(Q);
        }, B.readAsDataURL(Q.file);
      });
    }
    function C(Q) {
      return Q.map($);
    }
    function I(Q) {
      const { onBeforeRead: j } = e;
      return Q.map(
        (B) => new Promise((M) => {
          j || M({
            valid: !0,
            varFile: B
          });
          const x = Wo(y(j, je(B)));
          Promise.all(x).then((q) => {
            M({
              valid: q.every(Boolean),
              varFile: B
            });
          });
        })
      );
    }
    function P(Q) {
      return qr(this, null, function* () {
        const { maxsize: j, maxlength: B, modelValue: M, onOversize: x, onAfterRead: q, onBeforeFilter: Y, readonly: X, disabled: ee } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || ee || X)
          return;
        const pe = (he) => he.filter((De) => De.file.size > A(j) ? (y(x, je(De)), !1) : !0), ke = (he) => {
          const De = Math.min(he.length, A(B) - M.length);
          return he.slice(0, De);
        }, Re = (he) => qr(this, null, function* () {
          if (!Y)
            return he;
          const De = Wo(Y);
          for (const We of De)
            he = yield We(he);
          return he;
        });
        let de = O(Q).map(T);
        de = yield Re(de), de = j != null ? pe(de) : de, de = B != null ? ke(de) : de;
        const Ce = yield Promise.all(C(de)), se = (yield Promise.all(I(Ce))).filter(({ valid: he }) => he).map(({ varFile: he }) => he);
        y(e["onUpdate:modelValue"], [...M, ...se]), Q.target.value = "", se.forEach((he) => y(q, je(he)));
      });
    }
    function D(Q) {
      return qr(this, null, function* () {
        const { disabled: j, readonly: B, modelValue: M, onBeforeRemove: x, onRemove: q } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || j || B)
          return;
        if (x) {
          const X = Wo(y(x, je(Q)));
          if ((yield Promise.all(X)).some((ee) => !ee))
            return;
        }
        const Y = M.filter((X) => X !== Q);
        y(q, je(Q)), G("onRemove"), y(e["onUpdate:modelValue"], Y);
      });
    }
    function E() {
      return e.modelValue.filter((Q) => Q.state === "success");
    }
    function H() {
      return e.modelValue.filter((Q) => Q.state === "error");
    }
    function L() {
      return e.modelValue.filter((Q) => Q.state === "loading");
    }
    function U() {
      n.value.click();
    }
    function ie() {
      o.value = null, t.value = !1, ho.close();
    }
    function G(Q) {
      Fe(() => {
        const { validateTrigger: j, rules: B, modelValue: M } = e;
        s(j, Q, B, M, p);
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
      errorMessage: l,
      maxlengthText: r,
      hovering: c,
      formDisabled: a == null ? void 0 : a.disabled,
      formReadonly: a == null ? void 0 : a.readonly,
      n: vT,
      classes: mT,
      formatElevation: gn,
      toNumber: A,
      handleHovering: f,
      isHTMLSupportVideo: Ds,
      isHTMLSupportImage: Ms,
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
Av.render = wT;
var ts = Av;
oe(ts);
const vI = ts;
var vi = ts;
const ST = {
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
var CT = Object.defineProperty, kT = Object.defineProperties, PT = Object.getOwnPropertyDescriptors, pd = Object.getOwnPropertySymbols, OT = Object.prototype.hasOwnProperty, TT = Object.prototype.propertyIsEnumerable, hd = (e, n, t) => n in e ? CT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ET = (e, n) => {
  for (var t in n || (n = {}))
    OT.call(n, t) && hd(e, t, n[t]);
  if (pd)
    for (var t of pd(n))
      TT.call(n, t) && hd(e, t, n[t]);
  return e;
}, IT = (e, n) => kT(e, PT(n)), gd = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: MT, n: DT, classes: BT } = te("watermark"), NT = { ref: "svgRef" }, VT = ["viewBox", "width", "height"], AT = ["width", "height"], zT = ["href", "xlink:href", "x", "y", "width", "height"];
function LT(e, n) {
  return h(), S(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default"),
      (h(), Se(Xn, {
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
              NT,
              [
                (h(), S("svg", {
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
                  e.showContent() ? (h(), S("foreignObject", {
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
                              style: F(IT(ET({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
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
                  ], 8, AT)) : _("v-if", !0),
                  !e.$slots.content && e.image ? (h(), S("image", {
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
                  }, null, 12, zT)) : _("v-if", !0)
                ], 12, VT))
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
const zv = ne({
  name: MT,
  props: ST,
  setup(e, { slots: n }) {
    const t = w(""), o = w(""), r = w(""), a = w(null), i = w(null);
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
    ), $o(c), wo(d);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
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
        r.value = Ot(i.value).color, e.image && (o.value = yield s()), yield Fe(), d(), t.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: t,
      imageUrl: o,
      textColor: r,
      n: DT,
      classes: BT,
      showContent: l,
      resize: c
    };
  }
});
zv.render = LT;
var os = zv;
oe(os);
const mI = os;
var mi = os;
const RT = "2.16.7";
function UT(e) {
  Kr.install && e.use(Kr), Zr.install && e.use(Zr), _r.install && e.use(_r), xr.install && e.use(xr), ea.install && e.use(ea), tr.install && e.use(tr), na.install && e.use(na), ta.install && e.use(ta), oa.install && e.use(oa), ra.install && e.use(ra), mn.install && e.use(mn), aa.install && e.use(aa), ia.install && e.use(ia), or.install && e.use(or), rr.install && e.use(rr), la.install && e.use(la), ar.install && e.use(ar), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), wn.install && e.use(wn), ma.install && e.use(ma), $a.install && e.use($a), Sa.install && e.use(Sa), Ca.install && e.use(Ca), ka.install && e.use(ka), cr.install && e.use(cr), Ea.install && e.use(Ea), Ia.install && e.use(Ia), Ma.install && e.use(Ma), pn.install && e.use(pn), En.install && e.use(En), zn.install && e.use(zn), Ue.install && e.use(Ue), Da.install && e.use(Da), ho.install && e.use(ho), Ba.install && e.use(Ba), Na.install && e.use(Na), vr.install && e.use(vr), uo.install && e.use(uo), Va.install && e.use(Va), Aa.install && e.use(Aa), Rt.install && e.use(Rt), za.install && e.use(za), Xr.install && e.use(Xr), bo.install && e.use(bo), La.install && e.use(La), Ra.install && e.use(Ra), Ua.install && e.use(Ua), Ha.install && e.use(Ha), Fa.install && e.use(Fa), dt.install && e.use(dt), ja.install && e.use(ja), Wa.install && e.use(Wa), qa.install && e.use(qa), Ga.install && e.use(Ga), Xa.install && e.use(Xa), Ka.install && e.use(Ka), Ke.install && e.use(Ke), Za.install && e.use(Za), Ja.install && e.use(Ja), Qa.install && e.use(Qa), _a.install && e.use(_a), ei.install && e.use(ei), ni.install && e.use(ni), ti.install && e.use(ti), oi.install && e.use(oi), go.install && e.use(go), ri.install && e.use(ri), mo.install && e.use(mo), po.install && e.use(po), ai.install && e.use(ai), ii.install && e.use(ii), li.install && e.use(li), si.install && e.use(si), ui.install && e.use(ui), di.install && e.use(di), ci.install && e.use(ci), fi.install && e.use(fi), fr.install && e.use(fr), vi.install && e.use(vi), mi.install && e.use(mi);
}
const pI = {
  version: RT,
  install: UT,
  ActionSheet: Kr,
  AppBar: Zr,
  Avatar: _r,
  AvatarGroup: xr,
  BackTop: ea,
  Badge: tr,
  BottomNavigation: na,
  BottomNavigationItem: ta,
  Breadcrumb: oa,
  Breadcrumbs: ra,
  Button: mn,
  ButtonGroup: aa,
  Card: ia,
  Cell: or,
  Checkbox: rr,
  CheckboxGroup: la,
  Chip: ar,
  Col: sa,
  Collapse: ua,
  CollapseItem: da,
  Context: wn,
  Countdown: ma,
  Counter: $a,
  DatePicker: Sa,
  Dialog: Ca,
  Divider: ka,
  Drag: cr,
  Ellipsis: Ea,
  Fab: Ia,
  Form: Ma,
  FormDetails: pn,
  Hover: En,
  HoverOverlay: zn,
  Icon: Ue,
  Image: Da,
  ImagePreview: ho,
  IndexAnchor: Ba,
  IndexBar: Na,
  Input: vr,
  Lazy: uo,
  Link: Va,
  List: Aa,
  Loading: Rt,
  LoadingBar: za,
  Locale: Xr,
  Menu: bo,
  Option: La,
  Overlay: Ra,
  Pagination: Ua,
  Paper: Ha,
  Picker: Fa,
  Popup: dt,
  Progress: ja,
  PullRefresh: Wa,
  Radio: qa,
  RadioGroup: Ga,
  Rate: Xa,
  Result: Ka,
  Ripple: Ke,
  Row: Za,
  Select: Ja,
  Skeleton: Qa,
  Slider: _a,
  Snackbar: ei,
  Space: ni,
  Step: ti,
  Steps: oi,
  Sticky: go,
  StyleProvider: ri,
  Swipe: mo,
  SwipeItem: po,
  Switch: ai,
  Tab: ii,
  TabItem: li,
  Table: si,
  Tabs: ui,
  TabsItems: di,
  Themes: ci,
  TimePicker: fi,
  Tooltip: fr,
  Uploader: vi,
  Watermark: mi
};
export {
  Kr as ActionSheet,
  Zr as AppBar,
  _r as Avatar,
  xr as AvatarGroup,
  ea as BackTop,
  tr as Badge,
  na as BottomNavigation,
  ta as BottomNavigationItem,
  oa as Breadcrumb,
  ra as Breadcrumbs,
  mn as Button,
  aa as ButtonGroup,
  ia as Card,
  or as Cell,
  rr as Checkbox,
  la as CheckboxGroup,
  ar as Chip,
  sa as Col,
  ua as Collapse,
  da as CollapseItem,
  wn as Context,
  ma as Countdown,
  $a as Counter,
  Sa as DatePicker,
  Ca as Dialog,
  ka as Divider,
  cr as Drag,
  Ea as Ellipsis,
  Ia as Fab,
  Ma as Form,
  pn as FormDetails,
  En as Hover,
  zn as HoverOverlay,
  Ue as Icon,
  Da as Image,
  ho as ImagePreview,
  Ba as IndexAnchor,
  Na as IndexBar,
  vr as Input,
  uo as Lazy,
  Va as Link,
  Aa as List,
  Rt as Loading,
  za as LoadingBar,
  Xr as Locale,
  bo as Menu,
  La as Option,
  Ra as Overlay,
  Qr as PIXEL,
  Ua as Pagination,
  Ha as Paper,
  Fa as Picker,
  dt as Popup,
  ja as Progress,
  Wa as PullRefresh,
  qa as Radio,
  Ga as RadioGroup,
  Xa as Rate,
  Ka as Result,
  Ke as Ripple,
  Za as Row,
  gv as SNACKBAR_TYPE,
  Ja as Select,
  Qa as Skeleton,
  _a as Slider,
  ei as Snackbar,
  ni as Space,
  ti as Step,
  oi as Steps,
  go as Sticky,
  ri as StyleProvider,
  mo as Swipe,
  po as SwipeItem,
  ai as Switch,
  ii as Tab,
  li as TabItem,
  si as Table,
  ui as Tabs,
  di as TabsItems,
  ci as Themes,
  fi as TimePicker,
  fr as Tooltip,
  vi as Uploader,
  mi as Watermark,
  GT as _ActionSheetComponent,
  XT as _AppBarComponent,
  ZT as _AvatarComponent,
  JT as _AvatarGroupComponent,
  nE as _BackTopComponent,
  tE as _BadgeComponent,
  oE as _BottomNavigationComponent,
  rE as _BottomNavigationItemComponent,
  aE as _BreadcrumbComponent,
  iE as _BreadcrumbsComponent,
  eE as _ButtonComponent,
  lE as _ButtonGroupComponent,
  sE as _CardComponent,
  uE as _CellComponent,
  cE as _CheckboxComponent,
  fE as _CheckboxGroupComponent,
  vE as _ChipComponent,
  mE as _ColComponent,
  pE as _CollapseComponent,
  hE as _CollapseItemComponent,
  FT as _ContextComponent,
  gE as _CountdownComponent,
  bE as _CounterComponent,
  yE as _DatePickerComponent,
  $E as _DialogComponent,
  wE as _DividerComponent,
  SE as _DragComponent,
  kE as _EllipsisComponent,
  PE as _FabComponent,
  OE as _FormComponent,
  dE as _FormDetailsComponent,
  xT as _HoverComponent,
  _T as _HoverOverlayComponent,
  WT as _IconComponent,
  TE as _ImageComponent,
  ME as _ImagePreviewComponent,
  BE as _IndexAnchorComponent,
  NE as _IndexBarComponent,
  VE as _InputComponent,
  KT as _LazyComponent,
  AE as _LinkComponent,
  zE as _ListComponent,
  LE as _LoadingBarComponent,
  QT as _LoadingComponent,
  qT as _LocaleComponent,
  RE as _MenuComponent,
  UE as _OptionComponent,
  HE as _OverlayComponent,
  FE as _PaginationComponent,
  YE as _PaperComponent,
  jE as _PickerComponent,
  jT as _PopupComponent,
  WE as _ProgressComponent,
  qE as _PullRefreshComponent,
  GE as _RadioComponent,
  XE as _RadioGroupComponent,
  KE as _RateComponent,
  ZE as _ResultComponent,
  YT as _RippleComponent,
  JE as _RowComponent,
  QE as _SelectComponent,
  _E as _SkeletonComponent,
  xE as _SliderComponent,
  eI as _SnackbarComponent,
  nI as _SpaceComponent,
  tI as _StepComponent,
  oI as _StepsComponent,
  DE as _StickyComponent,
  rI as _StyleProviderComponent,
  EE as _SwipeComponent,
  IE as _SwipeItemComponent,
  aI as _SwitchComponent,
  iI as _TabComponent,
  lI as _TabItemComponent,
  sI as _TableComponent,
  uI as _TabsComponent,
  dI as _TabsItemsComponent,
  cI as _ThemesComponent,
  fI as _TimePickerComponent,
  CE as _TooltipComponent,
  vI as _UploaderComponent,
  mI as _WatermarkComponent,
  op as actionSheetProps,
  Pi as add,
  hp as appBarProps,
  Kp as avatarGroupProps,
  Hp as avatarProps,
  Bh as backTopProps,
  Lh as badgeProps,
  _h as bottomNavigationItemProps,
  Yh as bottomNavigationProps,
  ag as breadcrumbProps,
  fg as breadcrumbsProps,
  kh as buttonProps,
  wg as cardProps,
  Eg as cellProps,
  e0 as checkboxGroupProps,
  Ug as checkboxProps,
  a0 as chipProps,
  u0 as colProps,
  w0 as collapseItemProps,
  h0 as collapseProps,
  O0 as countdownProps,
  Cb as counterProps,
  Wb as datePickerProps,
  pI as default,
  Ze as defaultLazyOptions,
  $y as dialogProps,
  zy as dividerProps,
  Fy as dragProps,
  Fd as enUS,
  Ng as formDetailsProps,
  k$ as formProps,
  Bd as iconProps,
  Xd as imageCache,
  Z$ as imagePreviewProps,
  E$ as imageProps,
  pw as indexAnchorProps,
  $w as indexBarProps,
  Vw as inputProps,
  UT as install,
  Yw as linkProps,
  Xw as listProps,
  oS as loadingBarProps,
  ot as loadingProps,
  vS as menuProps,
  jd as merge,
  $S as optionProps,
  PS as overlayProps,
  xe as pack,
  Yd as packs,
  TS as paginationProps,
  NS as paperProps,
  YS as pickerProps,
  Po as popupProps,
  _S as progressProps,
  iC as pullRefreshProps,
  gC as radioGroupProps,
  dC as radioProps,
  SC as rateProps,
  ik as resultProps,
  ck as rowProps,
  $k as selectProps,
  Ok as skeletonProps,
  Dk as sliderProps,
  vv as snackbarProps,
  lP as spaceProps,
  vP as stepProps,
  wP as stepsProps,
  Jo as stickyProps,
  PP as styleProviderProps,
  Sf as swipeProps,
  IP as switchProps,
  jP as tabItemProps,
  LP as tabProps,
  KP as tableProps,
  rO as tabsItemsProps,
  xP as tabsProps,
  xO as timePickerProps,
  l$ as tooltipProps,
  cT as uploaderProps,
  Oi as use,
  qn as useHoverOverlay,
  ki as useLocale,
  RT as version,
  Ci as zhCN
};
