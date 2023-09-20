import { reactive as je, onMounted as $o, nextTick as Fe, onActivated as mt, isRef as Lv, watch as fe, onBeforeUnmount as mr, onDeactivated as jt, onUnmounted as wo, inject as Rv, getCurrentInstance as Wt, computed as V, ref as S, unref as xt, provide as Uv, isVNode as Hv, Comment as Fv, Fragment as De, createApp as Yv, h as vd, onBeforeMount as jv, defineComponent as ne, createVNode as J, Teleport as Xn, Transition as Ye, withDirectives as Oe, vShow as Ln, mergeProps as Ne, openBlock as p, createBlock as Se, resolveDynamicComponent as qt, normalizeClass as v, normalizeStyle as F, resolveComponent as ae, resolveDirective as Le, withCtx as ve, createElementVNode as N, renderSlot as L, toDisplayString as re, createElementBlock as w, renderList as qe, createCommentVNode as Q, onUpdated as So, createTextVNode as Te, pushScopeId as ht, popScopeId as pt, withModifiers as On, normalizeProps as at, guardReactiveProps as Co, vModelText as Wv, createSlots as Qo, withKeys as ns, toRaw as ts, TransitionGroup as qv } from "vue";
const md = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, LT = je(md);
var wn = je(md), Gv = Object.defineProperty, Xv = Object.defineProperties, Kv = Object.getOwnPropertyDescriptors, os = Object.getOwnPropertySymbols, Zv = Object.prototype.hasOwnProperty, Jv = Object.prototype.propertyIsEnumerable, rs = (e, n, t) => n in e ? Gv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Qv = (e, n) => {
  for (var t in n || (n = {}))
    Zv.call(n, t) && rs(e, t, n[t]);
  if (os)
    for (var t of os(n))
      Jv.call(n, t) && rs(e, t, n[t]);
  return e;
}, _v = (e, n) => Xv(e, Kv(n)), Qe = (e) => typeof e == "string", fi = (e) => typeof e == "boolean", vn = (e) => typeof e == "number", ro = (e) => Object.prototype.toString.call(e) === "[object Object]", xv = (e) => typeof e == "object" && e !== null, Gt = (e) => typeof e == "function", Me = (e) => Array.isArray(e), em = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Fn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, vi = (e) => e === window, nm = () => gt() && "ontouchstart" in window, A = (e) => e == null ? 0 : Qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : fi(e) ? Number(e) : e, _o = (e, n) => {
  if (e.length) {
    const t = e.indexOf(n);
    if (t > -1)
      return e.splice(t, 1);
  }
}, mi = (e, n = 200) => {
  let t, o = 0;
  return function r(...a) {
    const i = Date.now(), l = i - o;
    o || (o = i), t && window.clearTimeout(t), l >= n ? (e.apply(this, a), o = i) : t = window.setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
}, gt = () => typeof window < "u", as = (e) => [...new Set(e)], tm = (e) => hi(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), hi = (e) => e.replace(/-(\w)/g, (n, t) => t.toUpperCase()), hd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), om = (e, n, t = "start") => {
  let o = t === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && o >= 0 && o <= e.length - 1; ) {
    if (n(e[o], o, e))
      return [e[o], o];
    t === "start" ? o++ : o--;
  }
  return [null, -1];
}, Wo = (e) => Me(e) ? e : [e], st = (e, n, t) => Math.min(t, Math.max(n, e)), rm = (e, n) => st(e, 0, n.length - 1), pd = () => typeof globalThis < "u" ? globalThis : gt() ? window : typeof global < "u" ? global : self, ao = (e) => {
  const n = pd();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, is = (e) => {
  const n = pd();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, qo = () => new Promise((e) => {
  ao(e);
}), dn = () => new Promise((e) => {
  ao(() => {
    ao(e);
  });
}), Pt = (e) => window.getComputedStyle(e), _e = (e) => {
  if (vi(e)) {
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
    return _v(Qv({}, o), {
      toJSON: () => o
    });
  }
  return e.getBoundingClientRect();
}, am = (e) => {
  const { top: n, bottom: t, left: o, right: r } = _e(e), { width: a, height: i } = _e(window), l = o <= a && r >= 0, s = n <= i && t >= 0;
  return l && s;
}, im = Object.defineProperty, xo = Object.getOwnPropertySymbols, gd = Object.prototype.hasOwnProperty, bd = Object.prototype.propertyIsEnumerable, ls = (e, n, t) => n in e ? im(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, lm = (e, n) => {
  for (var t in n || (n = {}))
    gd.call(n, t) && ls(e, t, n[t]);
  if (xo)
    for (var t of xo(n))
      bd.call(n, t) && ls(e, t, n[t]);
  return e;
}, sm = (e, n) => {
  var t = {};
  for (var o in e)
    gd.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && xo)
    for (var o of xo(e))
      n.indexOf(o) < 0 && bd.call(e, o) && (t[o] = e[o]);
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
  const s = (m) => Gt(m) ? m() : xt(m), u = (m) => {
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
  Lv(e) && (c = fe(
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
  }), jt(() => {
    d(e);
  }), f;
}
function yd(e, n, t) {
  if (!gt())
    return;
  ut(document, n, (r) => {
    const a = Gt(e) ? e() : xt(e);
    a && !a.contains(r.target) && t(r);
  });
}
function hr(e) {
  wo(() => {
    e();
  }), jt(() => {
    e();
  });
}
function um(e) {
  const n = Wt();
  return e in n.provides;
}
function an(e) {
  if (!um(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const t = Rv(e), { childInstances: o, collect: r, clear: a } = t, i = sm(t, ["childInstances", "collect", "clear"]), l = Wt();
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
function dm(e) {
  const n = [], t = (o) => {
    if (o != null && o.component) {
      t(o == null ? void 0 : o.component.subTree);
      return;
    }
    Array.isArray(o == null ? void 0 : o.children) && o.children.forEach((r) => {
      Hv(r) && (n.push(r), t(r));
    });
  };
  return t(e), n;
}
function ln(e) {
  const n = Wt(), t = je([]), o = [], r = V(() => t.length), a = () => {
    const u = dm(n.subTree);
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
      Uv(e, lm({
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
function cm(e, n) {
  const t = S(!1);
  return fe(
    e,
    (o) => {
      n === o && (t.value = !0);
    },
    { immediate: !0 }
  ), t;
}
function fm(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function pr() {
  const e = S(0), n = S(0), t = S(0), o = S(0), r = S(0), a = S(0), i = S(0), l = S(0), s = S(0), u = S(0), d = S(), c = S(!1), f = S(!1), m = S(0), b = S(0);
  let h = null;
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
      const { clientX: k, clientY: M } = $.touches[0];
      e.value = k, n.value = M, i.value = k, l.value = M, c.value = !0, m.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: ($) => {
      const { clientX: k, clientY: M } = $.touches[0];
      f.value = !0, t.value = k - e.value, o.value = M - n.value, r.value = Math.abs(t.value), a.value = Math.abs(o.value), b.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = k - i.value, u.value = M - l.value, d.value || (d.value = fm(r.value, a.value)), i.value = k, l.value = M;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    }
  };
}
function $d() {
  const e = S(), n = Wt(), t = hd(n.type.name);
  return e.value = `${t}-${n.uid}`, e;
}
var vm = Object.defineProperty, ss = Object.getOwnPropertySymbols, mm = Object.prototype.hasOwnProperty, hm = Object.prototype.propertyIsEnumerable, us = (e, n, t) => n in e ? vm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ds = (e, n) => {
  for (var t in n || (n = {}))
    mm.call(n, t) && us(e, t, n[t]);
  if (ss)
    for (var t of ss(n))
      hm.call(n, t) && us(e, t, n[t]);
  return e;
}, cs = (e, n, t) => new Promise((o, r) => {
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
function pm(e) {
  const n = Yv(e), t = document.createElement("div");
  return document.body.appendChild(t), {
    instance: n.mount(t),
    unmount() {
      n.unmount(), document.body.removeChild(t);
    }
  };
}
function Xt(e, n = {}, t = {}) {
  const o = {
    setup() {
      return () => vd(e, ds(ds({}, n), t));
    }
  }, { unmount: r } = pm(o);
  return { unmountInstance: r };
}
function wd(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.type !== Fv) {
      if (t.type === De && Me(t.children)) {
        t.children.forEach((o) => {
          n.push(o);
        });
        return;
      }
      n.push(t);
    }
  }), n;
}
function En() {
  const e = S(""), n = (r, a, i) => cs(this, null, function* () {
    return !Me(r) || !r.length ? !0 : !(yield Promise.all(r.map((s) => s(a, i)))).some((s) => s !== !0 ? (e.value = String(s), !0) : !1);
  });
  return {
    errorMessage: e,
    validate: n,
    resetValidation: () => {
      e.value = "";
    },
    validateWithTrigger: (r, a, i, l, s) => cs(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function gm(e) {
  ut(() => window, "hashchange", e), ut(() => window, "popstate", e);
}
function Kt() {
  const e = S(!1);
  return mt(() => {
    e.value = !1;
  }), jt(() => {
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
    name: tm(t),
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
  const u = S(s());
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
var bm = Object.defineProperty, ym = Object.defineProperties, $m = Object.getOwnPropertyDescriptors, fs = Object.getOwnPropertySymbols, wm = Object.prototype.hasOwnProperty, Sm = Object.prototype.propertyIsEnumerable, vs = (e, n, t) => n in e ? bm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Sd = (e, n) => {
  for (var t in n || (n = {}))
    wm.call(n, t) && vs(e, t, n[t]);
  if (fs)
    for (var t of fs(n))
      Sm.call(n, t) && vs(e, t, n[t]);
  return e;
}, Cm = (e, n) => ym(e, $m(n));
const { n: Cd } = te("ripple"), ms = 250;
function km(e) {
  const { zIndex: n, position: t } = Pt(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", t === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Pm(e, n) {
  const { top: t, left: o } = _e(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = n.touches[0].clientX - o, u = n.touches[0].clientY - t, d = (r - i * 2) / 2, c = (a - i * 2) / 2, f = s - i, m = u - i;
  return { x: f, y: m, centerX: d, centerY: c, size: l };
}
function kd(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !wn.enableRipple)
    return;
  const t = () => {
    n.tasker = null;
    const { x: o, y: r, centerX: a, centerY: i, size: l } = Pm(this, e), s = document.createElement("div");
    s.classList.add(Cd()), s.style.opacity = "0", s.style.transform = `translate(${o}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), km(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(t, 30);
}
function qr() {
  const e = this._ripple, n = () => {
    const t = this.querySelectorAll(`.${Cd()}`);
    if (!t.length)
      return;
    const o = t[t.length - 1], r = ms - performance.now() + Number(o.dataset.createdAt);
    window.setTimeout(() => {
      o.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = o.parentNode) == null ? void 0 : a.removeChild(o);
      }, ms);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Pd() {
  if (!nm() || !wn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
function Om(e, n) {
  var t;
  e._ripple = Cm(Sd({
    tasker: null
  }, (t = n.value) != null ? t : {}), {
    removeRipple: qr.bind(e)
  }), e.addEventListener("touchstart", kd, { passive: !0 }), e.addEventListener("touchmove", Pd, { passive: !0 }), e.addEventListener("dragstart", qr, { passive: !0 }), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 });
}
function Tm(e) {
  e.removeEventListener("touchstart", kd), e.removeEventListener("touchmove", Pd), e.removeEventListener("dragstart", qr), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Im(e, n) {
  var t, o, r, a, i, l;
  const s = {
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = Sd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const Od = {
  mounted: Om,
  unmounted: Tm,
  updated: Im,
  install(e) {
    e.directive("ripple", this);
  }
}, RT = Od;
var Ke = Od;
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
function Td() {
  Object.keys(wn.locks).length <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Vo(e) {
  wn.locks[e] = 1, Td();
}
function Ao(e) {
  delete wn.locks[e], Td();
}
function gr(e, n) {
  const { uid: t } = Wt();
  n && fe(n, (o) => {
    o === !1 ? Ao(t) : o === !0 && e() === !0 && Vo(t);
  }), fe(e, (o) => {
    n && n() === !1 || (o === !0 ? Vo(t) : Ao(t));
  }), jv(() => {
    n && n() === !1 || e() === !0 && Vo(t);
  }), wo(() => {
    n && n() === !1 || e() === !0 && Ao(t);
  }), mt(() => {
    n && n() === !1 || e() === !0 && Vo(t);
  }), jt(() => {
    n && n() === !1 || e() === !0 && Ao(t);
  });
}
function Oo(e, n) {
  const t = S(wn.zIndex);
  return fe(
    e,
    (o) => {
      o && (wn.zIndex += n, t.value = wn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: t };
}
const Id = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Em() {
  const { bindParent: e, parentProvider: n, index: t } = an(Id);
  return {
    index: t,
    popup: n,
    bindPopup: e
  };
}
function Mm() {
  const { bindChildren: e, childProviders: n, length: t } = ln(Id);
  return {
    length: t,
    popupItems: n,
    bindPopupItems: e
  };
}
var Bm = Object.defineProperty, hs = Object.getOwnPropertySymbols, Dm = Object.prototype.hasOwnProperty, Nm = Object.prototype.propertyIsEnumerable, ps = (e, n, t) => n in e ? Bm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Vm = (e, n) => {
  for (var t in n || (n = {}))
    Dm.call(n, t) && ps(e, t, n[t]);
  if (hs)
    for (var t of hs(n))
      Nm.call(n, t) && ps(e, t, n[t]);
  return e;
};
const {
  name: Am,
  n: Dn,
  classes: Br
} = te("popup");
var pi = ne({
  name: Am,
  inheritAttrs: !1,
  props: Po,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = cm(() => e.show, !0), {
      zIndex: r
    } = Oo(() => e.show, 3), {
      disabled: a
    } = Kt(), {
      bindPopupItems: i
    } = Mm();
    gr(() => e.show, () => e.lockScroll), fe(() => e.show, (c) => {
      y(c ? e.onOpen : e.onClose);
    }), i({
      show: V(() => e.show)
    }), gm(() => y(e.onRouteChange));
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
        class: Br(Dn("overlay"), c),
        style: Vm({
          zIndex: r.value - 1
        }, f),
        onClick: l
      }, null);
    }
    function u() {
      return Oe(J("div", Ne({
        class: Br(Dn("content"), Dn(`--${e.position}`), [e.defaultStyle, Dn("--content-background-color")], [e.defaultStyle, Dn("$-elevation--3")], [e.safeArea, Dn("--safe-area")], [e.safeAreaTop, Dn("--safe-area-top")]),
        style: {
          zIndex: r.value
        }
      }, t), [o.value && y(n.default)]), [[Ln, e.show]]);
    }
    function d() {
      return J(Ye, {
        name: Dn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Oe(J("div", {
          class: Br(Dn("$--box"), Dn()),
          style: {
            zIndex: r.value - 2
          }
        }, [e.overlay && s(), J(Ye, {
          name: e.transition || Dn(`$-pop-${e.position}`)
        }, {
          default: () => [u()]
        })]), [[Ln, e.show]])]
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
oe(pi);
const UT = pi;
var dt = pi;
const Ed = {
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
function gs(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function zm(e) {
  const { left: n } = _e(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function bs(e) {
  const { top: n } = _e(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function lo(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function gi(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Dr(e) {
  const { transform: n } = Pt(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function ct(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const t = /(scroll|auto)/, { overflowY: o, overflow: r } = Pt(n);
    if (t.test(o) || t.test(r))
      return n;
  }
  return window;
}
function Lm(e) {
  const n = [];
  let t = e;
  for (; !vi(t); )
    t = ct(t), n.push(t);
  return n;
}
function Md(e, n) {
  if (Qe(e)) {
    const t = document.querySelector(e);
    return t || Tn(n, "target element cannot found"), t;
  }
  if (xv(e))
    return e;
  Tn(n, 'type of prop "target" should be a selector or an element object');
}
function Rm() {
  const { width: e, height: n } = _e(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const Bd = (e) => Qe(e) && e.endsWith("rem"), Um = (e) => Qe(e) && e.endsWith("em") && !e.endsWith("rem"), Hm = (e) => Qe(e) && e.endsWith("px") || vn(e), Fm = (e) => Qe(e) && e.endsWith("%"), Dd = (e) => Qe(e) && e.endsWith("vw"), Nd = (e) => Qe(e) && e.endsWith("vh"), Vd = (e) => Qe(e) && e.endsWith("vmin"), Ad = (e) => Qe(e) && e.endsWith("vmax"), Ym = (e) => Qe(e) && e.startsWith("calc("), jm = (e) => Qe(e) && e.startsWith("var("), He = (e) => {
  if (vn(e))
    return e;
  if (Hm(e))
    return +e.replace("px", "");
  if (!gt())
    return 0;
  const { vw: n, vh: t, vMin: o, vMax: r } = Rm();
  if (Dd(e))
    return +e.replace("vw", "") * n / 100;
  if (Nd(e))
    return +e.replace("vh", "") * t / 100;
  if (Vd(e))
    return +e.replace("vmin", "") * o / 100;
  if (Ad(e))
    return +e.replace("vmax", "") * r / 100;
  if (Bd(e)) {
    const a = +e.replace("rem", ""), i = Pt(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return Qe(e) ? A(e) : 0;
}, we = (e) => {
  if (e != null)
    return Fm(e) || Dd(e) || Nd(e) || Um(e) || Bd(e) || Ym(e) || jm(e) || Vd(e) || Ad(e) ? e : `${He(e)}px`;
}, sn = (e, n = 1) => {
  if (e == null)
    return;
  const t = we(e), o = t.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(t) * n}${o}`;
};
function so(e, { top: n = 0, left: t = 0, duration: o = 300, animation: r }) {
  const a = Date.now(), i = lo(e), l = gi(e);
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
function zd(e) {
  return Object.entries(e ?? {}).reduce((n, [t, o]) => {
    const r = t.startsWith("--") ? t : `--${hd(t)}`;
    return n[r] = o, n;
  }, {});
}
function er(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
var Wm = (e, n, t) => new Promise((o, r) => {
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
const { name: qm, n: Gm, classes: Xm } = te("icon");
function Km(e, n) {
  return p(), Se(qt(e.isURL(e.name) ? "img" : "i"), {
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
const Ld = ne({
  name: qm,
  props: Ed,
  setup(e) {
    const n = S(""), t = S(!1);
    fe(() => e.name, o, { immediate: !0 });
    function o(r, a) {
      return Wm(this, null, function* () {
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
      n: Gm,
      classes: Xm,
      isURL: em,
      toNumber: A,
      toSizeUnit: we
    };
  }
});
Ld.render = Km;
var bi = Ld;
oe(bi);
const HT = bi;
var Ue = bi, Zm = Object.defineProperty, ys = Object.getOwnPropertySymbols, Jm = Object.prototype.hasOwnProperty, Qm = Object.prototype.propertyIsEnumerable, $s = (e, n, t) => n in e ? Zm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, _m = (e, n) => {
  for (var t in n || (n = {}))
    Jm.call(n, t) && $s(e, t, n[t]);
  if (ys)
    for (var t of ys(n))
      Qm.call(n, t) && $s(e, t, n[t]);
  return e;
};
const xm = _m({
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
var yi = {
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
}, Rd = {
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
}, eh = Object.defineProperty, ws = Object.getOwnPropertySymbols, nh = Object.prototype.hasOwnProperty, th = Object.prototype.propertyIsEnumerable, Ss = (e, n, t) => n in e ? eh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Cs = (e, n) => {
  for (var t in n || (n = {}))
    nh.call(n, t) && Ss(e, t, n[t]);
  if (ws)
    for (var t of ws(n))
      th.call(n, t) && Ss(e, t, n[t]);
  return e;
};
function $i() {
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
      e[a] = Cs(Cs({}, e[a]), i), o(a);
    }
  };
}
const { packs: Ud, pack: xe, add: wi, use: Si, merge: Hd } = $i();
wi("zh-CN", yi);
Si("zh-CN");
const FT = { zhCN: yi, enUS: Rd, packs: Ud, pack: xe, add: wi, use: Si, merge: Hd, useLocale: $i };
var Gr = {
  zhCN: yi,
  enUS: Rd,
  packs: Ud,
  pack: xe,
  add: wi,
  use: Si,
  merge: Hd,
  useLocale: $i
};
const { name: oh, n: rh, classes: ah } = te("action-sheet"), ih = ["onClick"];
function lh(e, n) {
  const t = ae("var-icon"), o = ae("var-popup"), r = Le("ripple");
  return p(), Se(o, Ne({
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
          L(e.$slots, "title", {}, () => {
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
          L(e.$slots, "actions", {}, () => [
            (p(!0), w(
              De,
              null,
              qe(e.actions, (a) => Oe((p(), w("div", {
                class: v(e.classes(e.n("action-item"), a.className, [a.disabled, e.n("--disabled")])),
                key: a.name,
                style: F({ color: a.color }),
                onClick: (i) => e.handleSelect(a)
              }, [
                a.icon ? (p(), Se(t, {
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
              ], 14, ih)), [
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
const Fd = ne({
  name: oh,
  directives: { Ripple: Ke },
  components: {
    VarPopup: dt,
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: xm,
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
      n: rh,
      classes: ah,
      handlePopupUpdateShow: o,
      handleSelect: t
    };
  }
});
Fd.render = lh;
var To = Fd, sh = Object.defineProperty, ks = Object.getOwnPropertySymbols, uh = Object.prototype.hasOwnProperty, dh = Object.prototype.propertyIsEnumerable, Ps = (e, n, t) => n in e ? sh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Os = (e, n) => {
  for (var t in n || (n = {}))
    uh.call(n, t) && Ps(e, t, n[t]);
  if (ks)
    for (var t of ks(n))
      dh.call(n, t) && Ps(e, t, n[t]);
  return e;
};
let xn, Ci = {};
function ch(e = {}) {
  return Os(Os({}, Ci), e);
}
function Ot(e) {
  return gt() ? new Promise((n) => {
    Ot.close();
    const t = je(ch(e));
    t.teleport = "body", xn = t;
    const { unmountInstance: o } = Xt(To, t, {
      onSelect: (r) => {
        y(t.onSelect, r), n(r);
      },
      onClose: () => {
        y(t.onClose), n("close");
      },
      onClosed: () => {
        y(t.onClosed), o(), xn === t && (xn = null);
      },
      onRouteChange: () => {
        o(), xn === t && (xn = null);
      },
      "onUpdate:show": (r) => {
        t.show = r;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
Ot.setDefaultOptions = function(e) {
  Ci = e;
};
Ot.resetDefaultOptions = function() {
  Ci = {};
};
Ot.close = function() {
  if (xn != null) {
    const e = xn;
    xn = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
Ot.Component = To;
oe(To);
oe(To, Ot);
const YT = To;
var Xr = Ot;
const fh = {
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
}, { name: vh, n: mh, classes: hh } = te("app-bar");
function ph(e, n) {
  return p(), w(
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
              L(e.$slots, "left"),
              e.titlePosition === "left" ? (p(), w(
                "div",
                {
                  key: 0,
                  class: v(e.n("title")),
                  style: F({ paddingLeft: e.paddingLeft })
                },
                [
                  L(e.$slots, "default", {}, () => [
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
          e.titlePosition === "center" ? (p(), w(
            "div",
            {
              key: 0,
              class: v(e.n("title"))
            },
            [
              L(e.$slots, "default", {}, () => [
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
              e.titlePosition === "right" ? (p(), w(
                "div",
                {
                  key: 0,
                  class: v(e.n("title")),
                  style: F({ paddingRight: e.paddingRight })
                },
                [
                  L(e.$slots, "default", {}, () => [
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
              L(e.$slots, "right")
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      L(e.$slots, "content")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Yd = ne({
  name: vh,
  props: fh,
  setup(e, { slots: n }) {
    const t = S(), o = S(), r = V(() => {
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
      n: mh,
      classes: hh,
      formatElevation: gn
    };
  }
});
Yd.render = ph;
var ki = Yd;
oe(ki);
const jT = ki;
var Kr = ki;
const Ts = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Is = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), gh = (e) => {
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
}, Zr = (e) => e, Es = (e) => e ** 3, jd = (e) => e < 0.5 ? Es(e * 2) / 2 : 1 - Es((1 - e) * 2) / 2, St = (e = "", n, t = "") => {
  if (e.length >= n)
    return e;
  const o = n - e.length, r = Math.floor(o / t.length);
  return t.repeat(r) + t.slice(0, o % t.length) + e;
};
var bh = Object.defineProperty, Ms = Object.getOwnPropertySymbols, yh = Object.prototype.hasOwnProperty, $h = Object.prototype.propertyIsEnumerable, Bs = (e, n, t) => n in e ? bh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, wh = (e, n) => {
  for (var t in n || (n = {}))
    yh.call(n, t) && Bs(e, t, n[t]);
  if (Ms)
    for (var t of Ms(n))
      $h.call(n, t) && Bs(e, t, n[t]);
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
const Sh = "background-image", Ch = "lazy-loading", kh = "lazy-error", Ds = "lazy-attempt", Ph = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Jr = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", zt = [], nr = [], Wd = gh(100), Ze = {
  loading: Jr,
  error: Jr,
  attempt: 3,
  throttleWait: 300,
  events: Ph
};
let Pi = mi(Io, Ze.throttleWait);
function yr(e, n) {
  e._lazy.arg === Sh ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Oh(e) {
  e._lazy.loading && yr(e, e._lazy.loading), Io();
}
function Th(e) {
  e._lazy.error && yr(e, e._lazy.error), e._lazy.state = "error", Ti(e), Io();
}
function qd(e, n) {
  yr(e, n), e._lazy.state = "success", Ti(e), Io();
}
function Ih(e) {
  var n;
  nr.includes(e) || (nr.push(e), (n = Ze.events) == null || n.forEach((t) => {
    e.addEventListener(t, Pi, { passive: !0 });
  }));
}
function Eh() {
  nr.forEach((e) => {
    var n;
    (n = Ze.events) == null || n.forEach((t) => {
      e.removeEventListener(t, Pi);
    });
  }), nr.length = 0;
}
function Mh(e, n) {
  var t, o;
  const r = {
    loading: (t = e.getAttribute(Ch)) != null ? t : Ze.loading,
    error: (o = e.getAttribute(kh)) != null ? o : Ze.error,
    attempt: e.getAttribute(Ds) ? Number(e.getAttribute(Ds)) : Ze.attempt
  };
  e._lazy = wh({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), yr(e, Jr), y(Ze.filter, e._lazy);
}
function Bh(e, n) {
  const t = new Image();
  t.src = n, e._lazy.preloadImage = t, t.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Wd.add(n), qd(e, n);
  }), t.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Th(e) : Gd(e);
  });
}
function Gd(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (Wd.has(n)) {
    qd(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Oh(e), Bh(e, n);
}
function Oi(e) {
  return br(this, null, function* () {
    yield dn(), am(e) && Gd(e);
  });
}
function Io() {
  zt.forEach((e) => Oi(e));
}
function Dh(e) {
  return br(this, null, function* () {
    !zt.includes(e) && zt.push(e), Lm(e).forEach(Ih), yield Oi(e);
  });
}
function Ti(e) {
  _o(zt, e), zt.length === 0 && Eh();
}
function Nh(e, n) {
  const { src: t, arg: o } = e._lazy;
  return t !== n.value || o !== n.arg;
}
function Xd(e, n) {
  return br(this, null, function* () {
    Mh(e, n), yield Dh(e);
  });
}
function Vh(e, n) {
  return br(this, null, function* () {
    if (!Nh(e, n)) {
      zt.includes(e) && (yield Oi(e));
      return;
    }
    yield Xd(e, n);
  });
}
function Ah(e = {}) {
  const { events: n, loading: t, error: o, attempt: r, throttleWait: a, filter: i } = e;
  Ze.events = n ?? Ze.events, Ze.loading = t ?? Ze.loading, Ze.error = o ?? Ze.error, Ze.attempt = r ?? Ze.attempt, Ze.throttleWait = a ?? Ze.throttleWait, Ze.filter = i;
}
const Kd = {
  mounted: Xd,
  unmounted: Ti,
  updated: Vh,
  install(e, n) {
    Ah(n), Pi = mi(Io, Ze.throttleWait), e.directive("lazy", this);
  }
}, WT = Kd;
var uo = Kd;
const zh = {
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
}, Lh = (e) => ["mini", "small", "normal", "large"].includes(e), { name: Rh, n: Uh, classes: Hh } = te("avatar"), Fh = ["src", "alt", "lazy-loading", "lazy-error"], Yh = ["src", "alt"];
function jh(e, n) {
  const t = Le("lazy");
  return p(), w(
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
      e.src ? (p(), w(
        De,
        { key: 0 },
        [
          e.lazy ? Oe((p(), w("img", {
            key: 0,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: F({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...o) => e.handleLoad && e.handleLoad(...o))
          }, null, 46, Fh)), [
            [t, e.src]
          ]) : (p(), w("img", {
            key: 1,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: F({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...o) => e.handleLoad && e.handleLoad(...o)),
            onError: n[2] || (n[2] = (...o) => e.handleError && e.handleError(...o))
          }, null, 46, Yh))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (p(), w(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: v(e.n("text")),
          style: F({ transform: `scale(${e.scale})` })
        },
        [
          L(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const Zd = ne({
  name: Rh,
  directives: { Lazy: uo },
  props: zh,
  setup(e) {
    const n = S(null), t = S(null), o = S(1);
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
      n: Uh,
      classes: Hh,
      isInternalSize: Lh,
      toSizeUnit: we,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
Zd.render = jh;
var Ii = Zd;
oe(Ii);
const qT = Ii;
var Qr = Ii;
const Wh = {
  offset: [Number, String],
  vertical: Boolean
}, { name: qh, n: Gh, classes: Xh } = te("avatar-group");
function Kh(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: F(e.rootStyles)
    },
    [
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Jd = ne({
  name: qh,
  props: Wh,
  setup(e) {
    return {
      rootStyles: V(() => e.offset == null ? {} : {
        "--avatar-group-offset": we(e.offset)
      }),
      n: Gh,
      classes: Xh,
      toSizeUnit: we
    };
  }
});
Jd.render = Kh;
var Ei = Jd;
oe(Ei);
const GT = Ei;
var _r = Ei;
const tt = {
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
}, { name: Zh, n: Jh, classes: Qh } = te("loading"), _h = (e) => (ht(""), e = e(), pt(), e), xh = /* @__PURE__ */ _h(() => /* @__PURE__ */ N(
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
)), ep = [
  xh
];
function np(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      e.$slots.default ? (p(), w(
        "div",
        {
          key: 0,
          class: v(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          L(e.$slots, "default"),
          e.loading ? (p(), w(
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
      e.isShow ? (p(), w(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (p(), w(
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
                ep,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0),
          (p(!0), w(
            De,
            null,
            qe(e.loadingTypeDict, (t, o) => (p(), w(
              De,
              { key: o },
              [
                e.type === o ? (p(), w(
                  "div",
                  {
                    key: 0,
                    class: v(e.classes(e.n(o), e.n(`${o}--${e.size}`)))
                  },
                  [
                    (p(!0), w(
                      De,
                      null,
                      qe(t, (r) => (p(), w(
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
          e.$slots.description || e.description ? (p(), w(
            "div",
            {
              key: 1,
              class: v(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: F({ color: e.color })
            },
            [
              L(e.$slots, "description", {}, () => [
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
const Qd = ne({
  name: Zh,
  props: tt,
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
      n: Jh,
      classes: Qh,
      multiplySizeUnit: sn
    };
  }
});
Qd.render = np;
var Mi = Qd;
oe(Mi);
const XT = Mi;
var Lt = Mi;
const tp = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, { name: op, n: rp, classes: ap } = te("hover-overlay");
function ip(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
const _d = ne({
  name: op,
  props: tp,
  setup: () => ({
    n: rp,
    classes: ap
  })
});
_d.render = ip;
var Bi = _d;
oe(Bi);
function Wn() {
  const e = S(!1);
  return {
    hovering: e,
    handleHovering: (t) => {
      e.value = t;
    }
  };
}
const KT = Bi;
var zn = Bi;
function xd(e) {
  if (!e)
    return !1;
  const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function lp(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((t, o) => {
    const [r, a] = o.split(":").map((i) => i.trim());
    return t[hi(r)] = a, t;
  }, {}) : {};
}
function sp(e) {
  const { value: n } = e._hover, t = lp(e);
  Object.keys(n).forEach((o) => {
    const r = hi(o);
    n[r] != null && t[r] && (e._hover.rawStyle[r] = t[r]);
  });
}
function Di(e, n) {
  Object.keys(n).forEach((t) => {
    const o = n[t];
    o != null && (e.style[t] = o);
  });
}
function up(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function ec(e) {
  up(e), Di(e, e._hover.rawStyle);
}
function nc() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Gt(e)) {
    e(this._hover.hovering);
    return;
  }
  Di(this, e);
}
function tc() {
  if (this._hover.hovering = !1, Gt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  ec(this);
}
function oc(e, n) {
  var t, o;
  const { arg: r, value: a } = n;
  xd(r) || (e._hover = {
    value: a,
    hovering: (o = (t = e._hover) == null ? void 0 : t.hovering) != null ? o : !1,
    rawStyle: {}
  }, sp(e), e.addEventListener("mouseenter", nc), e.addEventListener("mouseleave", tc));
}
function rc(e, n) {
  xd(n.arg) || (ec(e), e.removeEventListener("mouseenter", nc), e.removeEventListener("mouseleave", tc));
}
function dp(e, n) {
  e._hover && rc(e, n);
}
function cp(e, n) {
  return !Gt(n.value) && e._hover.hovering;
}
function fp(e, n) {
  oc(e, n), cp(e, n) && Di(e, n.value);
}
const ac = {
  mounted: oc,
  unmounted: rc,
  beforeUpdate: dp,
  updated: fp,
  install(e) {
    e.directive("hover", this);
  }
}, ZT = ac;
var In = ac, vp = Object.defineProperty, mp = Object.defineProperties, hp = Object.getOwnPropertyDescriptors, Ns = Object.getOwnPropertySymbols, pp = Object.prototype.hasOwnProperty, gp = Object.prototype.propertyIsEnumerable, Vs = (e, n, t) => n in e ? vp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, bp = (e, n) => {
  for (var t in n || (n = {}))
    pp.call(n, t) && Vs(e, t, n[t]);
  if (Ns)
    for (var t of Ns(n))
      gp.call(n, t) && Vs(e, t, n[t]);
  return e;
}, yp = (e, n) => mp(e, hp(n));
const $p = {
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
  loadingType: en(tt, "type"),
  loadingSize: en(tt, "size"),
  loadingColor: yp(bp({}, en(tt, "color")), {
    default: "currentColor"
  }),
  onClick: z(),
  onTouchstart: z()
}, ic = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function wp() {
  const { bindChildren: e, childProviders: n, length: t } = ln(ic);
  return {
    length: t,
    buttons: n,
    bindButtons: e
  };
}
function Sp() {
  const { bindParent: e, parentProvider: n, index: t } = an(ic);
  return {
    index: t,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: Cp, n: kp, classes: Pp } = te("button"), Op = ["type", "disabled"];
function Tp(e, n) {
  const t = ae("var-loading"), o = ae("var-hover-overlay"), r = Le("ripple"), a = Le("hover");
  return Oe((p(), w("button", {
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
    e.loading || e.pending ? (p(), Se(t, {
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
        L(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    J(o, {
      hovering: e.disabled ? !1 : e.hovering
    }, null, 8, ["hovering"])
  ], 46, Op)), [
    [r, { disabled: e.disabled || !e.ripple }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const lc = ne({
  name: Cp,
  components: {
    VarLoading: Lt,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Ke, Hover: In },
  props: $p,
  setup(e) {
    const n = S(!1), { buttonGroup: t } = Sp(), { hovering: o, handleHovering: r } = Wn(), a = V(() => {
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
      n: kp,
      classes: Pp,
      handleHovering: r,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
lc.render = Tp;
var Ni = lc;
oe(Ni);
const JT = Ni;
var mn = Ni;
const Ip = {
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
}, { name: Ep, n: Mp, classes: Bp } = te("back-top");
function Dp(e, n) {
  const t = ae("var-icon"), o = ae("var-button");
  return p(), Se(Xn, {
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
        L(e.$slots, "default", {}, () => [
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
const sc = ne({
  name: Ep,
  components: {
    VarButton: mn,
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: Ip,
  setup(e) {
    const n = S(!1), t = S(null), o = S(!0);
    let r;
    const a = mi(() => {
      n.value = lo(r) >= He(e.visibilityHeight);
    }, 200);
    $o(() => {
      l(), s(), o.value = !1;
    }), mt(s), hr(u);
    function i(d) {
      y(e.onClick, d);
      const c = gi(r);
      so(r, {
        left: c,
        duration: e.duration,
        animation: jd
      });
    }
    function l() {
      r = e.target ? Md(e.target, "BackTop") : ct(t.value);
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
      n: Mp,
      classes: Bp,
      handleClick: i
    };
  }
});
sc.render = Dp;
var Vi = sc;
oe(Vi);
const QT = Vi;
var xr = Vi;
const Np = {
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
}, { name: Vp, n: Ap, classes: zp } = te("badge");
function Lp(e, n) {
  const t = ae("var-icon");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      L(e.$slots, "default"),
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
              e.icon ? (p(), Se(t, {
                key: 0,
                class: v(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon
              }, null, 8, ["class", "name"])) : Q("v-if", !0),
              L(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (p(), w(
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
            [Ln, !e.hidden]
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
const uc = ne({
  name: Vp,
  components: { VarIcon: Ue },
  inheritAttrs: !1,
  props: Np,
  setup(e) {
    return {
      value: V(() => {
        const { value: t, maxValue: o } = e;
        return t != null && o != null && A(t) > A(o) ? `${o}+` : t;
      }),
      n: Ap,
      classes: zp
    };
  }
});
uc.render = Lp;
var Ai = uc;
oe(Ai);
const _T = Ai;
var tr = Ai;
const Rp = {
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
}, dc = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function Up() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    dc
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: t
  };
}
var Hp = Object.defineProperty, As = Object.getOwnPropertySymbols, Fp = Object.prototype.hasOwnProperty, Yp = Object.prototype.propertyIsEnumerable, zs = (e, n, t) => n in e ? Hp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ls = (e, n) => {
  for (var t in n || (n = {}))
    Fp.call(n, t) && zs(e, t, n[t]);
  if (As)
    for (var t of As(n))
      Yp.call(n, t) && zs(e, t, n[t]);
  return e;
};
const { name: jp, n: Wp, classes: qp } = te("bottom-navigation"), { n: $r } = te("bottom-navigation-item"), Rs = $r("--right-half-space"), Us = $r("--left-half-space"), Hs = $r("--right-space"), Gp = {
  type: "primary"
};
function Xp(e, n) {
  const t = ae("var-button");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: F(`z-index:${e.zIndex}`)
    },
    [
      L(e.$slots, "default"),
      e.$slots.fab ? (p(), Se(t, Ne({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, { round: "" }), {
        default: ve(() => [
          L(e.$slots, "fab")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "onClick"])) : Q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const cc = ne({
  name: jp,
  components: { VarButton: mn },
  props: Rp,
  setup(e, { slots: n }) {
    const t = S(null), o = V(() => e.active), r = V(() => e.activeColor), a = V(() => e.inactiveColor), i = S({}), { length: l, bottomNavigationItems: s, bindBottomNavigationItem: u } = Up();
    u({
      active: o,
      activeColor: r,
      inactiveColor: a,
      onToggle: h
    }), fe(() => l.value, c), fe(
      () => e.fabProps,
      (P) => {
        i.value = Ls(Ls({}, Gp), P);
      },
      { immediate: !0, deep: !0 }
    ), rn(() => {
      n.fab && T(l.value);
    }), So(() => {
      O(), n.fab && T(l.value);
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
    function h(P) {
      o.value !== P && (e.onBeforeChange ? g(P) : C(P));
    }
    function g(P) {
      const D = Wo(y(e.onBeforeChange, P));
      Promise.all(D).then((I) => {
        I.every(Boolean) && C(P);
      });
    }
    function C(P) {
      y(e["onUpdate:active"], P), y(e.onChange, P);
    }
    function O() {
      k().forEach((D) => {
        D.classList.remove(Rs, Us, Hs);
      });
    }
    function T(P) {
      const D = k(), I = D.length, U = P % 2 === 0;
      D.forEach((R, H) => {
        $(U, R, H, I);
      });
    }
    function $(P, D, I, U) {
      const R = I === U - 1;
      if (!P && R) {
        D.classList.add(Hs);
        return;
      }
      const H = I === U / 2 - 1, ie = I === U / 2;
      H ? D.classList.add(Rs) : ie && D.classList.add(Us);
    }
    function k() {
      return Array.from(t.value.querySelectorAll(`.${$r()}`));
    }
    function M() {
      y(e.onFabClick);
    }
    return {
      length: l,
      bottomNavigationDom: t,
      fabProps: i,
      n: Wp,
      classes: qp,
      handleFabClick: M
    };
  }
});
cc.render = Xp;
var zi = cc;
oe(zi);
const xT = zi;
var ea = zi;
const Kp = {
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
function Zp() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    dc
  );
  return t || Tn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: t
  };
}
const { name: Jp, n: Qp, classes: _p } = te("bottom-navigation-item"), xp = {
  type: "danger",
  dot: !0
};
function eg(e, n) {
  const t = ae("var-icon"), o = ae("var-badge"), r = Le("ripple");
  return Oe((p(), w(
    "button",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: F({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      e.icon && !e.$slots.icon ? (p(), Se(t, {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: v(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      }, null, 8, ["name", "namespace", "class"])) : Q("v-if", !0),
      L(e.$slots, "icon", {
        active: e.active === e.index || e.active === e.name
      }),
      e.badge ? (p(), Se(o, Ne({ key: 1 }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }), null, 16, ["class"])) : Q("v-if", !0),
      N(
        "span",
        {
          class: v(e.n("label"))
        },
        [
          e.$slots.default ? Q("v-if", !0) : (p(), w(
            De,
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
          L(e.$slots, "default")
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
const fc = ne({
  name: Jp,
  components: {
    VarBadge: tr,
    VarIcon: Ue
  },
  directives: { Ripple: Ke },
  props: Kp,
  setup(e) {
    const n = V(() => e.name), t = V(() => e.badge), o = S({}), { index: r, bottomNavigation: a, bindBottomNavigation: i } = Zp(), { active: l, activeColor: s, inactiveColor: u } = a;
    i({
      name: n,
      index: r
    }), fe(
      () => t.value,
      (m) => {
        o.value = m === !0 ? xp : t.value;
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
      n: Qp,
      classes: _p,
      computeColorStyle: c,
      handleClick: f
    };
  }
});
fc.render = eg;
var Li = fc;
oe(Li);
const eI = Li;
var na = Li;
const ng = {
  separator: String,
  onClick: z()
}, vc = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function tg() {
  const { childProviders: e, bindChildren: n, length: t } = ln(
    vc
  );
  return {
    length: t,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function og() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    vc
  );
  return n || Tn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: t,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: rg, n: ag, classes: ig } = te("breadcrumb");
function lg(e, n) {
  return p(), w(
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
          L(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? Q("v-if", !0) : L(e.$slots, "separator", { key: 0 }, () => {
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
const mc = ne({
  name: rg,
  props: ng,
  setup(e) {
    const { index: n, breadcrumb: t, bindBreadcrumb: o } = og(), r = V(() => n.value === t.length.value - 1), a = V(() => t.separator.value);
    o(null);
    function i(l) {
      r.value || y(e.onClick, l);
    }
    return {
      n: ag,
      classes: ig,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
mc.render = lg;
var Ri = mc;
oe(Ri);
const nI = Ri;
var ta = Ri;
const sg = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: ug, n: dg } = te("breadcrumbs");
function cg(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      L(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const hc = ne({
  name: ug,
  props: sg,
  setup(e) {
    const n = V(() => e.separator), { bindBreadcrumbList: t, length: o } = tg();
    return t({
      length: o,
      separator: n
    }), { n: dg };
  }
});
hc.render = cg;
var Ui = hc;
oe(Ui);
const tI = Ui;
var oa = Ui;
const fg = {
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
}, { name: vg, n: mg, classes: hg } = te("button-group");
function pg(e, n) {
  return p(), w(
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
      L(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const pc = ne({
  name: vg,
  props: fg,
  setup(e) {
    const { bindButtons: n } = wp(), t = {
      elevation: V(() => e.elevation),
      type: V(() => e.type),
      size: V(() => e.size),
      color: V(() => e.color),
      textColor: V(() => e.textColor),
      mode: V(() => e.mode)
    };
    return n(t), {
      n: mg,
      classes: hg,
      formatElevation: gn
    };
  }
});
pc.render = pg;
var Hi = pc;
oe(Hi);
const oI = Hi;
var ra = Hi;
const gg = {
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
var Fs = (e, n, t) => new Promise((o, r) => {
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
const { name: bg, n: yg, classes: $g } = te("card"), wg = 500, Sg = ["src", "alt"];
function Cg(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = Le("ripple");
  return Oe((p(), w(
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
          L(e.$slots, "image", {}, () => [
            e.src ? (p(), w("img", {
              key: 0,
              class: v(e.n("image")),
              style: F({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, Sg)) : Q("v-if", !0)
          ]),
          N(
            "div",
            {
              class: v(e.n("container"))
            },
            [
              L(e.$slots, "title", {}, () => [
                e.title ? (p(), w(
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
              L(e.$slots, "subtitle", {}, () => [
                e.subtitle ? (p(), w(
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
              L(e.$slots, "description", {}, () => [
                e.description ? (p(), w(
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
              e.$slots.extra ? (p(), w(
                "div",
                {
                  key: 0,
                  class: v(e.n("footer"))
                },
                [
                  L(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : Q("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (p(), w(
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
                  L(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (p(), w(
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
              L(e.$slots, "close-button", {}, () => [
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
const gc = ne({
  name: bg,
  directives: { Ripple: Ke },
  components: {
    VarIcon: Ue,
    VarButton: mn
  },
  props: gg,
  setup(e) {
    const n = S(null), t = S(null), o = S("auto"), r = S("auto"), a = S("100%"), i = S("100%"), l = S("auto"), s = S("auto"), u = S(void 0), d = S("hidden"), c = S("0px"), f = S("0"), m = V(() => e.layout === "row"), b = S(!1), h = S(!1), { zIndex: g } = Oo(() => e.floating, 1);
    let C = "auto", O = "auto", T = null;
    const $ = S(null);
    gr(
      () => e.floating,
      () => !m.value
    ), fe(
      () => e.floating,
      (I) => {
        m.value || Fe(() => {
          I ? k() : M();
        });
      },
      { immediate: !0 }
    );
    function k() {
      return Fs(this, null, function* () {
        clearTimeout($.value), clearTimeout(T), $.value = null, $.value = setTimeout(
          () => Fs(this, null, function* () {
            const { width: I, height: U, left: R, top: H } = _e(n.value);
            o.value = we(I), r.value = we(U), a.value = o.value, i.value = r.value, l.value = we(H), s.value = we(R), u.value = "fixed", C = l.value, O = s.value, b.value = !0, yield dn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", h.value = !0;
          }),
          e.ripple ? wg : 0
        );
      });
    }
    function M() {
      clearTimeout(T), clearTimeout($.value), $.value = null, a.value = o.value, i.value = r.value, l.value = C, s.value = O, c.value = "0px", f.value = "0", b.value = !1, T = setTimeout(() => {
        o.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", C = "auto", O = "auto", d.value = "hidden", u.value = void 0, h.value = !1;
      }, e.floatingDuration);
    }
    function P() {
      y(e["onUpdate:floating"], !1);
    }
    function D(I) {
      y(e.onClick, I);
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
      floated: h,
      n: yg,
      classes: $g,
      toSizeUnit: we,
      close: P,
      formatElevation: gn,
      handleClick: D
    };
  }
});
gc.render = Cg;
var Fi = gc;
oe(Fi);
const rI = Fi;
var aa = Fi;
const kg = {
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
}, { name: Pg, n: Og, classes: Tg } = te("cell");
function Ig(e, n) {
  const t = ae("var-icon"), o = Le("ripple");
  return Oe((p(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: F(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      L(e.$slots, "icon", {}, () => [
        e.icon ? (p(), w(
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
          L(e.$slots, "default", {}, () => [
            e.title ? (p(), w(
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
          L(e.$slots, "description", {}, () => [
            e.description ? (p(), w(
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
      e.$slots.extra ? (p(), w(
        "div",
        {
          key: 0,
          class: v(e.classes(e.n("extra"), e.extraClass))
        },
        [
          L(e.$slots, "extra")
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
const bc = ne({
  name: Pg,
  components: { VarIcon: Ue },
  directives: { Ripple: Ke },
  props: kg,
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
      n: Og,
      classes: Tg,
      toSizeUnit: we,
      handleClick: t
    };
  }
});
bc.render = Ig;
var Yi = bc;
oe(Yi);
const aI = Yi;
var or = Yi;
const Eg = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Mg, n: Bg } = te("form-details"), Dg = { key: 0 }, Ng = { key: 0 };
function Vg(e, n) {
  return p(), Se(Ye, {
    name: e.n()
  }, {
    default: ve(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (p(), w(
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
                  e.errorMessage ? (p(), w(
                    "div",
                    Dg,
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
                  L(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (p(), w(
                      "div",
                      Ng,
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
const yc = ne({
  name: Mg,
  props: Eg,
  setup: () => ({ n: Bg })
});
yc.render = Vg;
var ji = yc;
oe(ji);
const iI = ji;
var hn = ji;
const Ag = {
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
}, $c = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function zg() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    $c
  );
  return {
    length: t,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Lg() {
  const { bindParent: e, parentProvider: n, index: t } = an(
    $c
  );
  return {
    index: t,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var Rg = Object.defineProperty, Ug = Object.defineProperties, Hg = Object.getOwnPropertyDescriptors, Ys = Object.getOwnPropertySymbols, Fg = Object.prototype.hasOwnProperty, Yg = Object.prototype.propertyIsEnumerable, js = (e, n, t) => n in e ? Rg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, jg = (e, n) => {
  for (var t in n || (n = {}))
    Fg.call(n, t) && js(e, t, n[t]);
  if (Ys)
    for (var t of Ys(n))
      Yg.call(n, t) && js(e, t, n[t]);
  return e;
}, Wg = (e, n) => Ug(e, Hg(n));
const wc = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Mn() {
  const { parentProvider: e, index: n, bindParent: t } = an(wc), o = Wt();
  return {
    index: n,
    form: e,
    bindForm: t ? (a) => {
      t(Wg(jg({}, a), { instance: o }));
    } : null
  };
}
function qg() {
  const { childProviders: e, length: n, bindChildren: t } = ln(wc);
  return {
    length: n,
    formItems: e,
    bindFormItems: t
  };
}
const { name: Gg, n: Xg, classes: Kg } = te("checkbox");
function Zg(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = Le("hover"), i = Le("ripple");
  return p(), w(
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
          Oe((p(), w(
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
              e.isIndeterminate ? L(e.$slots, "indeterminate-icon", { key: 0 }, () => [
                J(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "minus-box",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : Q("v-if", !0),
              e.checked && !e.isIndeterminate ? L(e.$slots, "checked-icon", { key: 1 }, () => [
                J(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-marked",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : Q("v-if", !0),
              !e.checked && !e.isIndeterminate ? L(e.$slots, "unchecked-icon", { key: 2 }, () => [
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
              L(e.$slots, "default")
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
const Sc = ne({
  name: Gg,
  directives: { Ripple: Ke, Hover: In },
  components: {
    VarIcon: Ue,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  props: Ag,
  setup(e) {
    const n = io(e, "modelValue"), t = io(e, "indeterminate"), o = V(() => n.value === e.checkedValue), r = V(() => e.checkedValue), a = S(!1), { checkboxGroup: i, bindCheckboxGroup: l } = Lg(), { hovering: s, handleHovering: u } = Wn(), { form: d, bindForm: c } = Mn(), {
      errorMessage: f,
      validateWithTrigger: m,
      validate: b,
      // expose
      resetValidation: h
    } = En(), g = {
      checkedValue: r,
      checked: o,
      sync: $,
      validate: D,
      resetValidation: h,
      reset: M,
      resetWithAnimation: k
    };
    y(l, g), y(c, g);
    function C(I) {
      Fe(() => {
        const { validateTrigger: U, rules: R, modelValue: H } = e;
        m(U, I, R, H);
      });
    }
    function O(I) {
      const { checkedValue: U, onChange: R } = e;
      n.value = I, t.value = !1, y(R, n.value), C("onChange"), I === U ? i == null || i.onChecked(U) : i == null || i.onUnchecked(U);
    }
    function T(I) {
      const { disabled: U, readonly: R, checkedValue: H, uncheckedValue: ie, onClick: G } = e;
      if (d != null && d.disabled.value || U || (y(G, I), d != null && d.readonly.value || R))
        return;
      a.value = !0;
      const W = i ? i.checkedCount.value >= Number(i.max.value) : !1;
      !o.value && W || O(o.value ? ie : H);
    }
    function $(I) {
      const { checkedValue: U, uncheckedValue: R } = e;
      n.value = I.includes(U) ? U : R;
    }
    function k() {
      a.value = !1;
    }
    function M() {
      n.value = e.uncheckedValue, h();
    }
    function P(I) {
      const { checkedValue: U, uncheckedValue: R } = e;
      ![U, R].includes(I) && (I = o.value ? R : U), O(I);
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
      n: Xg,
      classes: Kg,
      handleHovering: u,
      handleClick: T,
      toggle: P,
      reset: M,
      validate: D,
      resetValidation: h
    };
  }
});
Sc.render = Zg;
var Wi = Sc;
oe(Wi);
const lI = Wi;
var rr = Wi;
const Jg = {
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
}, { name: Qg, n: _g, classes: xg } = te("checkbox-group");
function e0(e, n) {
  const t = ae("var-form-details");
  return p(), w(
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
          L(e.$slots, "default")
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
const Cc = ne({
  name: Qg,
  components: { VarFormDetails: hn },
  props: Jg,
  setup(e) {
    const n = V(() => e.max), t = V(() => e.modelValue.length), { length: o, checkboxes: r, bindCheckboxes: a } = zg(), { bindForm: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = En(), c = V(() => l.value), f = {
      max: n,
      checkedCount: t,
      onChecked: h,
      onUnchecked: g,
      validate: M,
      resetValidation: d,
      reset: k,
      errorMessage: c
    };
    fe(() => e.modelValue, C, { deep: !0 }), fe(() => o.value, C), a(f), y(i, f);
    function m(P) {
      Fe(() => {
        const { validateTrigger: D, rules: I, modelValue: U } = e;
        s(D, P, I, U);
      });
    }
    function b(P) {
      y(e["onUpdate:modelValue"], P), y(e.onChange, P), m("onChange");
    }
    function h(P) {
      const { modelValue: D } = e;
      D.includes(P) || b([...D, P]);
    }
    function g(P) {
      const { modelValue: D } = e;
      D.includes(P) && b(D.filter((I) => I !== P));
    }
    function C() {
      return r.forEach(({ sync: P }) => P(e.modelValue));
    }
    function O() {
      r.forEach((P) => P.resetWithAnimation());
    }
    function T() {
      const P = r.map(({ checkedValue: I }) => I.value), D = as(P);
      return O(), y(e["onUpdate:modelValue"], D), D;
    }
    function $() {
      const P = r.filter(({ checked: I }) => !I.value).map(({ checkedValue: I }) => I.value), D = as(P);
      return O(), y(e["onUpdate:modelValue"], D), D;
    }
    function k() {
      y(e["onUpdate:modelValue"], []), d();
    }
    function M() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: _g,
      classes: xg,
      checkAll: T,
      inverseAll: $,
      reset: k,
      validate: M,
      resetValidation: d
    };
  }
});
Cc.render = e0;
var qi = Cc;
oe(qi);
const sI = qi;
var ia = qi;
const n0 = {
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
  iconName: en(Ed, "name"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  block: Boolean,
  closable: Boolean,
  onClose: z()
}, { name: t0, n: Kn, classes: o0 } = te("chip");
function r0(e, n) {
  const t = ae("var-icon");
  return p(), Se(Ye, {
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
          L(e.$slots, "left"),
          N(
            "span",
            {
              class: v(e.n(`text-${e.size}`))
            },
            [
              L(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          L(e.$slots, "right"),
          e.closable ? (p(), w(
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
const kc = ne({
  name: t0,
  components: {
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: n0,
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
      classes: o0,
      handleClose: o
    };
  }
});
kc.render = r0;
var Gi = kc;
oe(Gi);
const uI = Gi;
var ar = Gi;
const a0 = {
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
}, Pc = Symbol("ROW_BIND_COL_KEY");
function i0() {
  const { bindChildren: e, childProviders: n, length: t } = ln(Pc);
  return {
    length: t,
    cols: n,
    bindCols: e
  };
}
function l0() {
  const { parentProvider: e, index: n, bindParent: t } = an(Pc);
  return {
    index: n,
    row: e,
    bindRow: t
  };
}
const { name: s0, n: zo, classes: u0 } = te("col");
function d0(e, n) {
  return p(), w(
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
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Oc = ne({
  name: s0,
  props: a0,
  setup(e) {
    const n = V(() => A(e.span)), t = V(() => A(e.offset)), o = S({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = l0(), i = {
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
      if (ro(d)) {
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
      classes: u0,
      toNumber: A,
      toSizeUnit: we,
      getSize: l,
      handleClick: s,
      padStartFlex: er
    };
  }
});
Oc.render = d0;
var Xi = Oc;
oe(Xi);
const dI = Xi;
var la = Xi;
const Tc = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function c0() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    Tc
  );
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: t
  };
}
const f0 = {
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
}, { name: v0, n: m0 } = te("collapse");
function h0(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      L(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Ic = ne({
  name: v0,
  props: f0,
  setup(e) {
    const n = V(() => e.modelValue), t = V(() => e.offset), o = V(() => e.divider), r = V(() => e.elevation), { length: a, collapseItem: i, bindCollapseItem: l } = c0(), s = {
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
    function d(h, g) {
      return u() ? g ? e.accordion ? h : [...e.modelValue, h] : e.accordion ? null : e.modelValue.filter((C) => C !== h) : null;
    }
    function c(h, g) {
      const C = d(h, g);
      y(e["onUpdate:modelValue"], C), y(e.onChange, C);
    }
    function f() {
      if (e.accordion)
        return i.find(({ name: g }) => e.modelValue === g.value);
      const h = i.filter(({ name: g }) => g.value === void 0 ? !1 : e.modelValue.includes(g.value));
      return h.length ? h : void 0;
    }
    function m() {
      return e.accordion ? i.find(
        ({ index: h, name: g }) => g.value === void 0 && e.modelValue === h.value
      ) : i.filter(
        ({ index: h, name: g }) => g.value === void 0 && e.modelValue.includes(h.value)
      );
    }
    function b() {
      if (!u())
        return;
      const h = f() || m();
      if (e.accordion && !h || !e.accordion && !h.length) {
        i.forEach((g) => {
          g.init(e.accordion, !1);
        });
        return;
      }
      i.forEach((g) => {
        const C = e.accordion ? h === g : h.includes(g);
        g.init(e.accordion, C);
      });
    }
    return {
      divider: o,
      n: m0
    };
  }
});
Ic.render = h0;
var Ki = Ic;
oe(Ki);
const cI = Ki;
var sa = Ki;
function p0() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    Tc
  );
  return t || Tn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: t
  };
}
const g0 = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
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
const { name: b0, n: y0, classes: $0 } = te("collapse-item");
function w0(e, n) {
  const t = ae("var-icon");
  return p(), w(
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
              L(e.$slots, "title", {}, () => [
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
              L(e.$slots, "icon", {}, () => [
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
              L(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      ), [
        [Ln, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Ec = ne({
  name: b0,
  components: {
    VarIcon: Ue
  },
  props: g0,
  setup(e) {
    const n = S(!1), t = S(!1), o = S(null), r = V(() => e.name), { index: a, collapse: i, bindCollapse: l } = p0(), { active: s, offset: u, divider: d, elevation: c, updateItem: f } = i, m = {
      index: a,
      name: r,
      init: C
    };
    let b = !0;
    fe(n, (k) => {
      k ? h() : g();
    }), l(m);
    function h() {
      return Ws(this, null, function* () {
        if (!o.value || (o.value.style.height = "", t.value = !0, yield qo(), !o.value))
          return;
        const { offsetHeight: k } = o.value;
        o.value.style.height = "0px", yield qo(), o.value && (o.value.style.height = k + "px", b && (yield dn(), b && $()));
      });
    }
    function g() {
      return Ws(this, null, function* () {
        if (!o.value)
          return;
        const { offsetHeight: k } = o.value;
        o.value.style.height = k + "px", yield qo(), o.value.style.height = "0px";
      });
    }
    function C(k, M) {
      s.value === void 0 || k && Me(s.value) || M === n.value || (n.value = M, O(!0));
    }
    function O(k) {
      e.disabled || k || f(e.name || a.value, !n.value);
    }
    function T() {
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
      n: y0,
      start: T,
      classes: $0,
      toggle: O,
      transitionend: $,
      formatElevation: gn
    };
  }
});
Ec.render = w0;
var Zi = Ec;
oe(Zi);
const fI = Zi;
var ua = Zi;
const S0 = {
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
}, { name: C0, n: k0 } = te("countdown"), da = 1e3, ca = 60 * da, fa = 60 * ca, qs = 24 * fa;
function P0(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      L(e.$slots, "default", at(Co(e.timeData)), () => [
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
const Mc = ne({
  name: C0,
  props: S0,
  setup(e) {
    const n = S(""), t = S({
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
    }), jt(() => {
      l = r, f();
    }), wo(f);
    function s(b, h) {
      const g = Object.values(h), C = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (C.forEach((T, $) => {
        b.includes(T) ? b = b.replace(T, St(`${g[$]}`, 2, "0")) : g[$ + 1] += g[$] * O[$];
      }), b.includes("S")) {
        const T = St(`${g[g.length - 1]}`, 3, "0");
        b.includes("SSS") ? b = b.replace("SSS", T) : b.includes("SS") ? b = b.replace("SS", T.slice(0, 2)) : b = b.replace("S", T.slice(0, 1));
      }
      return b;
    }
    function u(b) {
      const h = Math.floor(b / qs), g = Math.floor(b % qs / fa), C = Math.floor(b % fa / ca), O = Math.floor(b % ca / da), T = Math.floor(b % da), $ = {
        days: h,
        hours: g,
        minutes: C,
        seconds: O,
        milliseconds: T
      };
      t.value = $, y(e.onChange, t.value), n.value = s(e.format, $);
    }
    function d() {
      const { time: b, onEnd: h } = e, g = performance.now();
      if (o || (o = g + A(b)), i = o - g, i < 0 && (i = 0), u(i), i === 0) {
        y(h);
        return;
      }
      r && (a = ao(d));
    }
    function c(b = !1) {
      r && !b || (r = !0, o = performance.now() + (i || A(e.time)), d());
    }
    function f() {
      r = !1, is(a);
    }
    function m() {
      o = 0, r = !1, is(a), d();
    }
    return {
      showTime: n,
      timeData: t,
      n: k0,
      start: c,
      pause: f,
      reset: m
    };
  }
});
Mc.render = P0;
var Ji = Mc;
oe(Ji);
const vI = Ji;
var va = Ji;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Bt = 9e15, bt = 1e9, ma = "0123456789abcdef", ir = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", lr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ha = {
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
}, Bc, Yn, ye = !0, wr = "[DecimalError] ", ft = wr + "Invalid argument: ", Dc = wr + "Precision limit exceeded", Nc = wr + "crypto unavailable", Vc = "[object Decimal]", on = Math.floor, Je = Math.pow, O0 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, T0 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, I0 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ac = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, An = 1e7, ge = 7, E0 = 9007199254740991, M0 = ir.length - 1, pa = lr.length - 1, K = { toStringTag: Vc };
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
  return t.d ? t.d[0] ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + ge, o.rounding = 1, t = B0(o, Hc(o, t)), o.precision = e, o.rounding = n, me(Yn == 2 || Yn == 3 ? t.neg() : t, e, n, !0)) : new o(1) : new o(NaN);
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
  t = i.precision, o = i.rounding, i.precision = t + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / Cr(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = Rt(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return me(a, i.precision = t, i.rounding = o, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, t, o, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero())
    return new a(r);
  if (n = a.precision, t = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, o = r.d.length, o < 3)
    r = Rt(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(o), e = e > 16 ? 16 : e | 0, r = r.times(1 / Cr(5, e)), r = Rt(a, 2, r, r, !0);
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
    if (u.abs().eq(1) && c + 4 <= pa)
      return i = Vn(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (c + 4 <= pa)
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
  if (ye = !1, l = c + m, i = ot(u, l), o = n ? sr(d, l + 10) : ot(e, l), s = ze(i, o, l, 1), co(s.d, r = c, f))
    do
      if (l += 10, i = ot(u, l), o = n ? sr(d, l + 10) : ot(e, l), s = ze(i, o, l, 1), !a) {
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
  return ga(this);
};
K.naturalLogarithm = K.ln = function() {
  return ot(this);
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
  return t.d ? (n = zc(t.d), e && t.e + 1 > n && (n = t.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return me(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + ge, o.rounding = 1, t = N0(o, Hc(o, t)), o.precision = e, o.rounding = n, me(Yn > 2 ? t.neg() : t, e, n, !0)) : new o(NaN);
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
  return Qi(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var t = this, o = t.constructor;
  return t = new o(t), e === void 0 ? t : (pn(e, 0, bt), n === void 0 ? n = o.rounding : pn(n, 0, 8), me(t, e + t.e + 1, n));
};
K.toExponential = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Rn(o, !0) : (pn(e, 0, bt), n === void 0 ? n = r.rounding : pn(n, 0, 8), o = me(new r(o), e + 1, n), t = Rn(o, !0, e + 1)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toFixed = function(e, n) {
  var t, o, r = this, a = r.constructor;
  return e === void 0 ? t = Rn(r) : (pn(e, 0, bt), n === void 0 ? n = a.rounding : pn(n, 0, 8), o = me(new a(r), e + r.e + 1, n), t = Rn(o, !1, e + o.e + 1)), r.isNeg() && !r.isZero() ? "-" + t : t;
};
K.toFraction = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c, f, m = this, b = m.d, h = m.constructor;
  if (!b)
    return new h(m);
  if (u = t = new h(1), o = s = new h(0), n = new h(o), a = n.e = zc(b) - m.e - 1, i = a % ge, n.d[0] = Je(10, i < 0 ? ge + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u))
      throw Error(ft + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (ye = !1, l = new h(tn(b)), d = h.precision, h.precision = a = b.length * ge * 2; c = ze(l, n, 0, 1, 1), r = t.plus(c.times(o)), r.cmp(e) != 1; )
    t = o, o = r, r = u, u = s.plus(c.times(r)), s = r, r = n, n = l.minus(c.times(r)), l = r;
  return r = ze(e.minus(t), o, 0, 1, 1), s = s.plus(r.times(u)), t = t.plus(r.times(o)), s.s = u.s = m.s, f = ze(u, o, a, 1).minus(m).abs().cmp(ze(s, t, a, 1).minus(m).abs()) < 1 ? [u, o] : [s, t], h.precision = d, ye = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return Qi(this, 16, e, n);
};
K.toNearest = function(e, n) {
  var t = this, o = t.constructor;
  if (t = new o(t), e == null) {
    if (!t.d)
      return t;
    e = new o(1), n = o.rounding;
  } else {
    if (e = new o(e), n === void 0 ? n = o.rounding : pn(n, 0, 8), !t.d)
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
  return Qi(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, t, o, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Je(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (o = s.precision, a = s.rounding, e.eq(1))
    return me(l, o, a);
  if (n = on(e.e / ge), n >= e.d.length - 1 && (t = u < 0 ? -u : u) <= E0)
    return r = Lc(s, l, t, o), e.s < 0 ? new s(1).div(r) : me(r, o, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return t = Je(+l, u), n = t == 0 || !isFinite(t) ? on(u * (Math.log("0." + tn(l.d)) / Math.LN10 + l.e + 1)) : new s(t + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (ye = !1, s.rounding = l.s = 1, t = Math.min(12, (n + "").length), r = ga(e.times(ot(l, o + t)), o), r.d && (r = me(r, o + 5, 1), co(r.d, o, a) && (n = o + 10, r = me(ga(e.times(ot(l, n + t)), n), n + 5, 1), +tn(r.d).slice(o + 1, o + 15) + 1 == 1e14 && (r = me(r, o + 1, 0)))), r.s = i, ye = !0, s.rounding = a, me(r, o, a));
};
K.toPrecision = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Rn(o, o.e <= r.toExpNeg || o.e >= r.toExpPos) : (pn(e, 1, bt), n === void 0 ? n = r.rounding : pn(n, 0, 8), o = me(new r(o), e, n), t = Rn(o, e <= o.e || o.e <= r.toExpNeg, e)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var t = this, o = t.constructor;
  return e === void 0 ? (e = o.precision, n = o.rounding) : (pn(e, 1, bt), n === void 0 ? n = o.rounding : pn(n, 0, 8)), me(new o(t), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, t = Rn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
K.truncated = K.trunc = function() {
  return me(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, t = Rn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function tn(e) {
  var n, t, o, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      o = e[n] + "", t = ge - o.length, t && (a += Jn(t)), a += o;
    i = e[n], o = i + "", t = ge - o.length, t && (a += Jn(t));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return a + i;
}
function pn(e, n, t) {
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
    for (r[0] += ma.indexOf(e.charAt(i++)), o = 0; o < r.length; o++)
      r[o] > t - 1 && (r[o + 1] === void 0 && (r[o + 1] = 0), r[o + 1] += r[o] / t | 0, r[o] %= t);
  }
  return r.reverse();
}
function B0(e, n) {
  var t, o, r;
  if (n.isZero())
    return n;
  o = n.d.length, o < 32 ? (t = Math.ceil(o / 3), r = (1 / Cr(4, t)).toString()) : (t = 16, r = "2.3283064365386962890625e-10"), e.precision += t, n = Rt(e, 1, n.times(r), new e(1));
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
    var u, d, c, f, m, b, h, g, C, O, T, $, k, M, P, D, I, U, R, H, ie = o.constructor, G = o.s == r.s ? 1 : -1, W = o.d, Z = r.d;
    if (!W || !W[0] || !Z || !Z[0])
      return new ie(
        // Return NaN if either NaN, or both Infinity or 0.
        !o.s || !r.s || (W ? Z && W[0] == Z[0] : !Z) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          W && W[0] == 0 || !Z ? G * 0 : G / 0
        )
      );
    for (s ? (m = 1, d = o.e - r.e) : (s = An, m = ge, d = on(o.e / m) - on(r.e / m)), R = Z.length, I = W.length, C = new ie(G), O = C.d = [], c = 0; Z[c] == (W[c] || 0); c++)
      ;
    if (Z[c] > (W[c] || 0) && d--, a == null ? (M = a = ie.precision, i = ie.rounding) : l ? M = a + (o.e - r.e) + 1 : M = a, M < 0)
      O.push(1), b = !0;
    else {
      if (M = M / m + 2 | 0, c = 0, R == 1) {
        for (f = 0, Z = Z[0], M++; (c < I || f) && M--; c++)
          P = f * s + (W[c] || 0), O[c] = P / Z | 0, f = P % Z | 0;
        b = f || c < I;
      } else {
        for (f = s / (Z[0] + 1) | 0, f > 1 && (Z = e(Z, f, s), W = e(W, f, s), R = Z.length, I = W.length), D = R, T = W.slice(0, R), $ = T.length; $ < R; )
          T[$++] = 0;
        H = Z.slice(), H.unshift(0), U = Z[0], Z[1] >= s / 2 && ++U;
        do
          f = 0, u = n(Z, T, R, $), u < 0 ? (k = T[0], R != $ && (k = k * s + (T[1] || 0)), f = k / U | 0, f > 1 ? (f >= s && (f = s - 1), h = e(Z, f, s), g = h.length, $ = T.length, u = n(h, T, g, $), u == 1 && (f--, t(h, R < g ? H : Z, g, s))) : (f == 0 && (u = f = 1), h = Z.slice()), g = h.length, g < $ && h.unshift(0), t(T, h, $, s), u == -1 && ($ = T.length, u = n(Z, T, R, $), u < 1 && (f++, t(T, R < $ ? H : Z, $, s))), $ = T.length) : u === 0 && (f++, T = [0]), O[c++] = f, u && T[0] ? T[$++] = W[D] || 0 : (T = [W[D]], $ = 1);
        while ((D++ < I || T[0] !== void 0) && M--);
        b = T[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (m == 1)
      C.e = d, Bc = b;
    else {
      for (c = 1, f = O[0]; f >= 10; f /= 10)
        c++;
      C.e = c + d * m - 1, me(C, l ? a + C.e + 1 : a, i, b);
    }
    return C;
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
function Rn(e, n, t) {
  if (!e.isFinite())
    return Uc(e);
  var o, r = e.e, a = tn(e.d), i = a.length;
  return n ? (t && (o = t - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Jn(o) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + Jn(-r - 1) + a, t && (o = t - i) > 0 && (a += Jn(o))) : r >= i ? (a += Jn(r + 1 - i), t && (o = t - r - 1) > 0 && (a = a + "." + Jn(o))) : ((o = r + 1) < i && (a = a.slice(0, o) + "." + a.slice(o)), t && (o = t - i) > 0 && (r + 1 === i && (a += "."), a += Jn(o))), a;
}
function Sr(e, n) {
  var t = e[0];
  for (n *= ge; t >= 10; t /= 10)
    n++;
  return n;
}
function sr(e, n, t) {
  if (n > M0)
    throw ye = !0, t && (e.precision = t), Error(Dc);
  return me(new e(ir), n, 1, !0);
}
function Vn(e, n, t) {
  if (n > pa)
    throw Error(Dc);
  return me(new e(lr), n, t, !0);
}
function zc(e) {
  var n = e.length - 1, t = n * ge + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      t--;
    for (n = e[0]; n >= 10; n /= 10)
      t++;
  }
  return t;
}
function Jn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Lc(e, n, t, o) {
  var r, a = new e(1), i = Math.ceil(o / ge + 4);
  for (ye = !1; ; ) {
    if (t % 2 && (a = a.times(n), Xs(a.d, i) && (r = !0)), t = on(t / 2), t === 0) {
      t = a.d.length - 1, r && a.d[t] === 0 && ++a.d[t];
      break;
    }
    n = n.times(n), Xs(n.d, i);
  }
  return ye = !0, a;
}
function Gs(e) {
  return e.d[e.d.length - 1] & 1;
}
function Rc(e, n, t) {
  for (var o, r = new e(n[0]), a = 0; ++a < n.length; )
    if (o = new e(n[a]), o.s)
      r[t](o) && (r = o);
    else {
      r = o;
      break;
    }
  return r;
}
function ga(e, n) {
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
function ot(e, n) {
  var t, o, r, a, i, l, s, u, d, c, f, m = 1, b = 10, h = e, g = h.d, C = h.constructor, O = C.rounding, T = C.precision;
  if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1)
    return new C(g && !g[0] ? -1 / 0 : h.s != 1 ? NaN : g ? 0 : h);
  if (n == null ? (ye = !1, d = T) : d = n, C.precision = d += b, t = tn(g), o = t.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; o < 7 && o != 1 || o == 1 && t.charAt(1) > 3; )
      h = h.times(e), t = tn(h.d), o = t.charAt(0), m++;
    a = h.e, o > 1 ? (h = new C("0." + t), a++) : h = new C(o + "." + t.slice(1));
  } else
    return u = sr(C, d + 2, T).times(a + ""), h = ot(new C(o + "." + t.slice(1)), d - b).plus(u), C.precision = T, n == null ? me(h, T, O, ye = !0) : h;
  for (c = h, s = i = h = ze(h.minus(1), h.plus(1), d, 1), f = me(h.times(h), d, 1), r = 3; ; ) {
    if (i = me(i.times(f), d, 1), u = s.plus(ze(i, new C(r), d, 1)), tn(u.d).slice(0, d) === tn(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(sr(C, d + 2, T).times(a + ""))), s = ze(s, new C(m), d, 1), n == null)
        if (co(s.d, d - b, O, l))
          C.precision = d += b, u = i = h = ze(c.minus(1), c.plus(1), d, 1), f = me(h.times(h), d, 1), r = l = 1;
        else
          return me(s, C.precision = T, O, ye = !0);
      else
        return C.precision = T, s;
    s = u, r += 2;
  }
}
function Uc(e) {
  return String(e.s * e.s / 0);
}
function ba(e, n) {
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
function D0(e, n) {
  var t, o, r, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Ac.test(n))
      return ba(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (T0.test(n))
    t = 16, n = n.toLowerCase();
  else if (O0.test(n))
    t = 2;
  else if (I0.test(n))
    t = 8;
  else
    throw Error(ft + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, o = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = Lc(o, new o(t), a, a * 2)), u = Go(n, t, An), d = u.length - 1, a = d; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new o(e.s * 0) : (e.e = Sr(u, d), e.d = u, ye = !1, i && (e = ze(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Je(2, s) : rt.pow(2, s))), ye = !0, e);
}
function N0(e, n) {
  var t, o = n.d.length;
  if (o < 3)
    return n.isZero() ? n : Rt(e, 2, n, n);
  t = 1.4 * Math.sqrt(o), t = t > 16 ? 16 : t | 0, n = n.times(1 / Cr(5, t)), n = Rt(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); t--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function Rt(e, n, t, o, r) {
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
function Hc(e, n) {
  var t, o = n.s < 0, r = Vn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return Yn = o ? 4 : 1, n;
  if (t = n.divToInt(r), t.isZero())
    Yn = o ? 3 : 2;
  else {
    if (n = n.minus(t.times(r)), n.lte(a))
      return Yn = Gs(t) ? o ? 2 : 3 : o ? 4 : 1, n;
    Yn = Gs(t) ? o ? 1 : 4 : o ? 3 : 2;
  }
  return n.minus(r).abs();
}
function Qi(e, n, t, o) {
  var r, a, i, l, s, u, d, c, f, m = e.constructor, b = t !== void 0;
  if (b ? (pn(t, 1, bt), o === void 0 ? o = m.rounding : pn(o, 0, 8)) : (t = m.precision, o = m.rounding), !e.isFinite())
    d = Uc(e);
  else {
    for (d = Rn(e), i = d.indexOf("."), b ? (r = 2, n == 16 ? t = t * 4 - 3 : n == 8 && (t = t * 3 - 2)) : r = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Go(Rn(f), 10, r), f.e = f.d.length), c = Go(d, 10, r), a = s = c.length; c[--s] == 0; )
      c.pop();
    if (!c[0])
      d = b ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new m(e), e.d = c, e.e = a, e = ze(e, f, t, o, 0, r), c = e.d, a = e.e, u = Bc), i = c[t], l = r / 2, u = u || c[t + 1] !== void 0, u = o < 4 ? (i !== void 0 || u) && (o === 0 || o === (e.s < 0 ? 3 : 2)) : i > l || i === l && (o === 4 || u || o === 6 && c[t - 1] & 1 || o === (e.s < 0 ? 8 : 7)), c.length = t, u)
        for (; ++c[--t] > r - 1; )
          c[t] = 0, t || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += ma.charAt(c[i]);
      if (b) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (c = Go(d, r, n), s = c.length; !c[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += ma.charAt(c[i]);
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
function Xs(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function V0(e) {
  return new this(e).abs();
}
function A0(e) {
  return new this(e).acos();
}
function z0(e) {
  return new this(e).acosh();
}
function L0(e, n) {
  return new this(e).plus(n);
}
function R0(e) {
  return new this(e).asin();
}
function U0(e) {
  return new this(e).asinh();
}
function H0(e) {
  return new this(e).atan();
}
function F0(e) {
  return new this(e).atanh();
}
function Y0(e, n) {
  e = new this(e), n = new this(n);
  var t, o = this.precision, r = this.rounding, a = o + 4;
  return !e.s || !n.s ? t = new this(NaN) : !e.d && !n.d ? (t = Vn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), t.s = e.s) : !n.d || e.isZero() ? (t = n.s < 0 ? Vn(this, o, r) : new this(0), t.s = e.s) : !e.d || n.isZero() ? (t = Vn(this, a, 1).times(0.5), t.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, t = this.atan(ze(e, n, a, 1)), n = Vn(this, a, 1), this.precision = o, this.rounding = r, t = e.s < 0 ? t.minus(n) : t.plus(n)) : t = this.atan(ze(e, n, a, 1)), t;
}
function j0(e) {
  return new this(e).cbrt();
}
function W0(e) {
  return me(e = new this(e), e.e + 1, 2);
}
function q0(e, n, t) {
  return new this(e).clamp(n, t);
}
function G0(e) {
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
          throw Error(Nc);
      else
        this[t] = !1;
    else
      throw Error(ft + t + ": " + o);
  return this;
}
function X0(e) {
  return new this(e).cos();
}
function K0(e) {
  return new this(e).cosh();
}
function Fc(e) {
  var n, t, o;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r))
      return new r(a);
    if (u.constructor = r, Ks(a)) {
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
      return ba(u, a.toString());
    } else if (s !== "string")
      throw Error(ft + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), Ac.test(a) ? ba(u, a) : D0(u, a);
  }
  if (r.prototype = K, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = G0, r.clone = Fc, r.isDecimal = Ks, r.abs = V0, r.acos = A0, r.acosh = z0, r.add = L0, r.asin = R0, r.asinh = U0, r.atan = H0, r.atanh = F0, r.atan2 = Y0, r.cbrt = j0, r.ceil = W0, r.clamp = q0, r.cos = X0, r.cosh = K0, r.div = Z0, r.exp = J0, r.floor = Q0, r.hypot = _0, r.ln = x0, r.log = eb, r.log10 = tb, r.log2 = nb, r.max = ob, r.min = rb, r.mod = ab, r.mul = ib, r.pow = lb, r.random = sb, r.round = ub, r.sign = db, r.sin = cb, r.sinh = fb, r.sqrt = vb, r.sub = mb, r.sum = hb, r.tan = pb, r.tanh = gb, r.trunc = bb, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (o = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < o.length; )
      e.hasOwnProperty(t = o[n++]) || (e[t] = this[t]);
  return r.config(e), r;
}
function Z0(e, n) {
  return new this(e).div(n);
}
function J0(e) {
  return new this(e).exp();
}
function Q0(e) {
  return me(e = new this(e), e.e + 1, 3);
}
function _0() {
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
function Ks(e) {
  return e instanceof rt || e && e.toStringTag === Vc || !1;
}
function x0(e) {
  return new this(e).ln();
}
function eb(e, n) {
  return new this(e).log(n);
}
function nb(e) {
  return new this(e).log(2);
}
function tb(e) {
  return new this(e).log(10);
}
function ob() {
  return Rc(this, arguments, "lt");
}
function rb() {
  return Rc(this, arguments, "gt");
}
function ab(e, n) {
  return new this(e).mod(n);
}
function ib(e, n) {
  return new this(e).mul(n);
}
function lb(e, n) {
  return new this(e).pow(n);
}
function sb(e) {
  var n, t, o, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : pn(e, 1, bt), o = Math.ceil(e / ge), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(o)); a < o; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(o *= 4); a < o; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = o / 4;
    } else
      throw Error(Nc);
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
function ub(e) {
  return me(e = new this(e), e.e + 1, this.rounding);
}
function db(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function cb(e) {
  return new this(e).sin();
}
function fb(e) {
  return new this(e).sinh();
}
function vb(e) {
  return new this(e).sqrt();
}
function mb(e, n) {
  return new this(e).sub(n);
}
function hb() {
  var e = 0, n = arguments, t = new this(n[e]);
  for (ye = !1; t.s && ++e < n.length; )
    t = t.plus(n[e]);
  return ye = !0, me(t, this.precision, this.rounding);
}
function pb(e) {
  return new this(e).tan();
}
function gb(e) {
  return new this(e).tanh();
}
function bb(e) {
  return me(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var rt = K.constructor = Fc(ha);
ir = new rt(ir);
lr = new rt(lr);
const yb = {
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
}, Zs = 100, Js = 600, { name: $b, n: wb, classes: Sb } = te("counter"), Cb = ["inputmode", "readonly", "disabled"];
function kb(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = ae("var-form-details");
  return p(), w(
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
          }, null, 46, Cb), [
            [Wv, e.inputValue]
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
const Yc = ne({
  name: $b,
  components: {
    VarButton: mn,
    VarIcon: Ue,
    VarFormDetails: hn
  },
  directives: { Ripple: Ke },
  inheritAttrs: !1,
  props: yb,
  setup(e) {
    const n = S(""), { bindForm: t, form: o } = Mn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = En(), { readonly: s, disabled: u } = o ?? {}, d = V(() => {
      const { max: Z, modelValue: _ } = e;
      return Z != null && A(_) >= A(Z);
    }), c = V(() => {
      const { min: Z, modelValue: _ } = e;
      return Z != null && A(_) <= A(Z);
    });
    let f, m, b, h;
    y(t, {
      reset: T,
      validate: C,
      resetValidation: l
    }), fe(
      () => e.modelValue,
      (Z) => {
        G($(String(Z))), y(e.onChange, A(Z));
      }
    ), G($(String(e.modelValue)));
    function C() {
      return i(e.rules, e.modelValue);
    }
    function O(Z) {
      Fe(() => {
        const { validateTrigger: _, rules: j, modelValue: B } = e;
        a(_, Z, j, B);
      });
    }
    function T() {
      const { min: Z } = e;
      y(e["onUpdate:modelValue"], Z != null ? A(Z) : 0), l();
    }
    function $(Z) {
      const { decimalLength: _, max: j, min: B } = e;
      let E = A(Z);
      return j != null && E > A(j) && (E = A(j)), B != null && E < A(B) && (E = A(B)), Z = String(E), _ != null && (Z = E.toFixed(A(_))), Z;
    }
    function k(Z) {
      const { lazyChange: _, onBeforeChange: j } = e, { value: B } = Z.target, E = $(B);
      _ ? y(j, A(E), W) : G(E), O("onInputChange");
    }
    function M() {
      const {
        disabled: Z,
        readonly: _,
        disableDecrement: j,
        decrementButton: B,
        lazyChange: E,
        step: x,
        modelValue: q,
        onDecrement: Y,
        onBeforeChange: X
      } = e;
      if (u != null && u.value || s != null && s.value || Z || _ || j || !B || c.value)
        return;
      const ee = new rt(A(q)).minus(new rt(A(x))).toString(), he = $(ee), ke = A(he);
      y(Y, ke), E ? y(X, ke, W) : (G(he), O("onDecrement"));
    }
    function P() {
      const {
        disabled: Z,
        readonly: _,
        disableIncrement: j,
        incrementButton: B,
        lazyChange: E,
        step: x,
        modelValue: q,
        onIncrement: Y,
        onBeforeChange: X
      } = e;
      if (u != null && u.value || s != null && s.value || Z || _ || j || !B || d.value)
        return;
      const ee = new rt(A(q)).plus(new rt(A(x))).toString(), he = $(ee), ke = A(he);
      y(Y, ke), E ? y(X, ke, W) : (G(he), O("onIncrement"));
    }
    function D() {
      const { press: Z, lazyChange: _ } = e;
      !Z || _ || (h = window.setTimeout(() => {
        ie();
      }, Js));
    }
    function I() {
      const { press: Z, lazyChange: _ } = e;
      !Z || _ || (b = window.setTimeout(() => {
        H();
      }, Js));
    }
    function U() {
      m && clearTimeout(m), h && clearTimeout(h);
    }
    function R() {
      f && clearTimeout(f), b && clearTimeout(b);
    }
    function H() {
      f = window.setTimeout(() => {
        P(), H();
      }, Zs);
    }
    function ie() {
      m = window.setTimeout(() => {
        M(), ie();
      }, Zs);
    }
    function G(Z) {
      n.value = Z;
      const _ = A(Z);
      y(e["onUpdate:modelValue"], _);
    }
    function W(Z) {
      G($(String(Z))), O("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: wb,
      classes: Sb,
      formatElevation: gn,
      validate: C,
      reset: T,
      resetValidation: l,
      handleChange: k,
      decrement: M,
      increment: P,
      pressDecrement: D,
      pressIncrement: I,
      releaseDecrement: U,
      releaseIncrement: R,
      toSizeUnit: we,
      toNumber: A
    };
  }
});
Yc.render = kb;
var _i = Yc;
oe(_i);
const mI = _i;
var ya = _i, jc = 60, Wc = jc * 60, qc = Wc * 24, Pb = qc * 7, Ut = 1e3, Nr = jc * Ut, Qs = Wc * Ut, Ob = qc * Ut, Tb = Pb * Ut, xi = "millisecond", Dt = "second", Nt = "minute", Vt = "hour", Qn = "day", Xo = "week", Nn = "month", Gc = "quarter", _n = "year", At = "date", Ib = "YYYY-MM-DDTHH:mm:ssZ", _s = "Invalid Date", Eb = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Mb = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Bb = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var $a = function(n, t, o) {
  var r = String(n);
  return !r || r.length >= t ? n : "" + Array(t + 1 - r.length).join(o) + n;
}, Db = function(n) {
  var t = -n.utcOffset(), o = Math.abs(t), r = Math.floor(o / 60), a = o % 60;
  return (t <= 0 ? "+" : "-") + $a(r, 2, "0") + ":" + $a(a, 2, "0");
}, Nb = function e(n, t) {
  if (n.date() < t.date())
    return -e(t, n);
  var o = (t.year() - n.year()) * 12 + (t.month() - n.month()), r = n.clone().add(o, Nn), a = t - r < 0, i = n.clone().add(o + (a ? -1 : 1), Nn);
  return +(-(o + (t - r) / (a ? r - i : i - r)) || 0);
}, Vb = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Ab = function(n) {
  var t = {
    M: Nn,
    y: _n,
    w: Xo,
    d: Qn,
    D: At,
    h: Vt,
    m: Nt,
    s: Dt,
    ms: xi,
    Q: Gc
  };
  return t[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, zb = function(n) {
  return n === void 0;
};
const Lb = {
  s: $a,
  z: Db,
  m: Nb,
  a: Vb,
  p: Ab,
  u: zb
};
var eo = "en", wt = {};
wt[eo] = Bb;
var el = function(n) {
  return n instanceof kr;
}, ur = function e(n, t, o) {
  var r;
  if (!n)
    return eo;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    wt[a] && (r = a), t && (wt[a] = t, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    wt[l] = n, r = l;
  }
  return !o && r && (eo = r), r || !o && eo;
}, ce = function(n, t) {
  if (el(n))
    return n.clone();
  var o = typeof t == "object" ? t : {};
  return o.date = n, o.args = arguments, new kr(o);
}, Rb = function(n, t) {
  return ce(n, {
    locale: t.$L,
    utc: t.$u,
    x: t.$x,
    $offset: t.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ae = Lb;
Ae.l = ur;
Ae.i = el;
Ae.w = Rb;
var Ub = function(n) {
  var t = n.date, o = n.utc;
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ae.u(t))
    return /* @__PURE__ */ new Date();
  if (t instanceof Date)
    return new Date(t);
  if (typeof t == "string" && !/Z$/i.test(t)) {
    var r = t.match(Eb);
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
    this.$d = Ub(o), this.$x = o.x || {}, this.init();
  }, n.init = function() {
    var o = this.$d;
    this.$y = o.getFullYear(), this.$M = o.getMonth(), this.$D = o.getDate(), this.$W = o.getDay(), this.$H = o.getHours(), this.$m = o.getMinutes(), this.$s = o.getSeconds(), this.$ms = o.getMilliseconds();
  }, n.$utils = function() {
    return Ae;
  }, n.isValid = function() {
    return this.$d.toString() !== _s;
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
    var a = this, i = Ae.u(r) ? !0 : r, l = Ae.p(o), s = function(C, O) {
      var T = Ae.w(a.$u ? Date.UTC(a.$y, O, C) : new Date(a.$y, O, C), a);
      return i ? T : T.endOf(Qn);
    }, u = function(C, O) {
      var T = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Ae.w(a.toDate()[C].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? T : $).slice(O)
      ), a);
    }, d = this.$W, c = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case _n:
        return i ? s(1, 0) : s(31, 11);
      case Nn:
        return i ? s(1, c) : s(0, c + 1);
      case Xo: {
        var b = this.$locale().weekStart || 0, h = (d < b ? d + 7 : d) - b;
        return s(i ? f - h : f + (6 - h), c);
      }
      case Qn:
      case At:
        return u(m + "Hours", 0);
      case Vt:
        return u(m + "Minutes", 1);
      case Nt:
        return u(m + "Seconds", 2);
      case Dt:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(o) {
    return this.startOf(o, !1);
  }, n.$set = function(o, r) {
    var a, i = Ae.p(o), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[Qn] = l + "Date", a[At] = l + "Date", a[Nn] = l + "Month", a[_n] = l + "FullYear", a[Vt] = l + "Hours", a[Nt] = l + "Minutes", a[Dt] = l + "Seconds", a[xi] = l + "Milliseconds", a)[i], u = i === Qn ? this.$D + (r - this.$W) : r;
    if (i === Nn || i === _n) {
      var d = this.clone().set(At, 1);
      d.$d[s](u), d.init(), this.$d = d.set(At, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (l === _n)
      return this.set(_n, this.$y + o);
    if (l === Qn)
      return s(1);
    if (l === Xo)
      return s(7);
    var u = (i = {}, i[Nt] = Nr, i[Vt] = Qs, i[Dt] = Ut, i)[l] || 1, d = this.$d.getTime() + o * u;
    return Ae.w(d, this);
  }, n.subtract = function(o, r) {
    return this.add(o * -1, r);
  }, n.format = function(o) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || _s;
    var i = o || Ib, l = Ae.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, m = a.meridiem, b = function(T, $, k, M) {
      return T && (T[$] || T(r, i)) || k[$].slice(0, M);
    }, h = function(T) {
      return Ae.s(s % 12 || 12, T, "0");
    }, g = m || function(O, T, $) {
      var k = O < 12 ? "AM" : "PM";
      return $ ? k.toLowerCase() : k;
    }, C = {
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
      h: h(1),
      hh: h(2),
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
    return i.replace(Mb, function(O, T) {
      return T || C[O] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(o, r, a) {
    var i, l = Ae.p(r), s = ce(o), u = (s.utcOffset() - this.utcOffset()) * Nr, d = this - s, c = Ae.m(this, s);
    return c = (i = {}, i[_n] = c / 12, i[Nn] = c, i[Gc] = c / 3, i[Xo] = (d - u) / Tb, i[Qn] = (d - u) / Ob, i[Vt] = d / Qs, i[Nt] = d / Nr, i[Dt] = d / Ut, i)[l] || d, a ? c : Ae.a(c);
  }, n.daysInMonth = function() {
    return this.endOf(Nn).$D;
  }, n.$locale = function() {
    return wt[this.$L];
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
}(), Xc = kr.prototype;
ce.prototype = Xc;
[["$ms", xi], ["$s", Dt], ["$m", Nt], ["$H", Vt], ["$W", Qn], ["$M", Nn], ["$y", _n], ["$D", At]].forEach(function(e) {
  Xc[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ce.extend = function(e, n) {
  return e.$i || (e(n, kr, ce), e.$i = !0), ce;
};
ce.locale = ur;
ce.isDayjs = el;
ce.unix = function(e) {
  return ce(e * 1e3);
};
ce.en = wt[eo];
ce.Ls = wt;
ce.p = {};
const Kc = function(e, n) {
  n.prototype.isSameOrBefore = function(t, o) {
    return this.isSame(t, o) || this.isBefore(t, o);
  };
}, Zc = function(e, n) {
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
], _t = [
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
], Hb = {
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
}, { n: Fb } = te("picker-header");
function Yb(e, n) {
  const t = ae("var-icon"), o = ae("var-button");
  return p(), w(
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
              (p(), w(
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
const Jc = ne({
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
      n: Fb,
      reverse: t,
      showDate: r,
      checkDate: a
    };
  }
});
Jc.render = Yb;
var Qc = Jc, jb = Object.defineProperty, xs = Object.getOwnPropertySymbols, Wb = Object.prototype.hasOwnProperty, qb = Object.prototype.propertyIsEnumerable, eu = (e, n, t) => n in e ? jb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Gb = (e, n) => {
  for (var t in n || (n = {}))
    Wb.call(n, t) && eu(e, t, n[t]);
  if (xs)
    for (var t of xs(n))
      qb.call(n, t) && eu(e, t, n[t]);
  return e;
};
ce.extend(Kc);
ce.extend(Zc);
const { n: Lo, classes: Xb } = te("month-picker"), { n: Ro } = te("date-picker");
function Kb(e, n) {
  const t = ae("panel-header"), o = ae("var-button");
  return p(), w(
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
              (p(), w("ul", { key: e.panelKey }, [
                (p(!0), w(
                  De,
                  null,
                  qe(e.MONTH_LIST, (r) => (p(), w("li", {
                    key: r.index
                  }, [
                    J(o, Ne({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, Gb({}, e.buttonProps(r.index)), {
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
const _c = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: mn,
    PanelHeader: Qc
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
    const [t, o] = e.current.split("-"), r = S(!1), a = S(0), i = S(null), l = je({
      left: !1,
      right: !1
    }), s = V(() => e.choose.chooseYear === e.preview.previewYear), u = V(() => e.preview.previewYear === t), d = (C) => {
      var O, T;
      return (T = (O = xe.value.datePickerMonthDict) == null ? void 0 : O[C].abbr) != null ? T : "";
    }, c = (C) => {
      const {
        preview: { previewYear: O },
        componentProps: { min: T, max: $ }
      } = e;
      let k = !0, M = !0;
      const P = `${O}-${C}`;
      return $ && (k = ce(P).isSameOrBefore(ce($), "month")), T && (M = ce(P).isSameOrAfter(ce(T), "month")), k && M;
    }, f = (C) => {
      const {
        choose: { chooseMonths: O, chooseDays: T, chooseRangeMonth: $ },
        componentProps: { type: k, range: M }
      } = e;
      if (M) {
        if (!$.length)
          return !1;
        const P = ce(C).isSameOrBefore(ce($[1]), "month"), D = ce(C).isSameOrAfter(ce($[0]), "month");
        return P && D;
      }
      return k === "month" ? O.includes(C) : T.some((P) => P.includes(C));
    }, m = (C) => {
      const {
        choose: { chooseMonth: O },
        preview: { previewYear: T },
        componentProps: { allowedDates: $, color: k, multiple: M, range: P }
      } = e, D = `${T}-${C}`, I = () => P || M ? f(D) : (O == null ? void 0 : O.index) === C && s.value, R = (() => c(C) ? $ ? !$(D) : !1 : !0)(), H = () => R ? !0 : P || M ? !f(D) : !s.value || (O == null ? void 0 : O.index) !== C, ie = () => u.value && o === C && e.componentProps.showCurrent ? (P || M || s.value) && R ? !0 : P || M ? !f(D) : s.value ? (O == null ? void 0 : O.index) !== o : !0 : !1, G = () => R ? "" : ie() ? k ?? "" : I() ? "" : `${Ro()}-color-cover`, W = G().startsWith(Ro());
      return {
        outline: ie(),
        text: H(),
        color: H() ? "" : k,
        textColor: W ? "" : G(),
        [`${Ro()}-color-cover`]: W,
        class: Xb(Lo("button"), [R, Lo("button--disabled")]),
        disabled: R
      };
    }, b = (C, O) => {
      O.currentTarget.classList.contains(Lo("button--disabled")) || n("choose-month", C);
    }, h = (C) => {
      r.value = C === "prev", a.value += C === "prev" ? -1 : 1, n("check-preview", "year", C);
    }, g = (C) => {
      i.value.checkDate(C);
    };
    return fe(
      () => e.preview.previewYear,
      (C) => {
        const {
          componentProps: { min: O, max: T }
        } = e;
        T && (l.right = !ce(`${A(C) + 1}`).isSameOrBefore(ce(T), "year")), O && (l.left = !ce(`${A(C) - 1}`).isSameOrAfter(ce(O), "year"));
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
      checkDate: h
    };
  }
});
_c.render = Kb;
var Zb = _c;
const { n: nu, classes: Jb } = te("year-picker"), Qb = ["onClick"];
function _b(e, n) {
  return p(), w(
    "ul",
    {
      class: v(e.n())
    },
    [
      (p(!0), w(
        De,
        null,
        qe(e.yearList, (t) => (p(), w("li", {
          key: t,
          class: v(e.classes(e.n("item"), [t === e.toNumber(e.preview), e.n("item--active")])),
          style: F({ color: t === e.toNumber(e.preview) ? e.componentProps.color : "" }),
          onClick: (o) => e.chooseYear(t)
        }, re(t), 15, Qb))),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
const xc = ne({
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
      const r = document.querySelector(`.${nu("item--active")}`);
      r == null || r.scrollIntoView({
        block: "center"
      });
    }), {
      n: nu,
      classes: Jb,
      yearList: t,
      chooseYear: o,
      toNumber: A
    };
  }
});
xc.render = _b;
var xb = xc, ey = Object.defineProperty, tu = Object.getOwnPropertySymbols, ny = Object.prototype.hasOwnProperty, ty = Object.prototype.propertyIsEnumerable, ou = (e, n, t) => n in e ? ey(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, oy = (e, n) => {
  for (var t in n || (n = {}))
    ny.call(n, t) && ou(e, t, n[t]);
  if (tu)
    for (var t of tu(n))
      ty.call(n, t) && ou(e, t, n[t]);
  return e;
};
ce.extend(Kc);
ce.extend(Zc);
const { n: Et, classes: ry } = te("day-picker"), { n: Uo } = te("date-picker");
function ay(e, n) {
  const t = ae("panel-header"), o = ae("var-button");
  return p(), w(
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
              (p(), w("div", { key: e.panelKey }, [
                N(
                  "ul",
                  {
                    class: v(e.n("head"))
                  },
                  [
                    (p(!0), w(
                      De,
                      null,
                      qe(e.sortWeekList, (r) => (p(), w(
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
                    (p(!0), w(
                      De,
                      null,
                      qe(e.days, (r, a) => (p(), w("li", { key: a }, [
                        J(o, Ne({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation
                        }, oy({}, e.buttonProps(r)), {
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
const ef = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: mn,
    PanelHeader: Qc
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
    const [t, o, r] = e.current.split("-"), a = S([]), i = S(!1), l = S(0), s = S(null), u = je({
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
      const P = _t.findIndex((D) => D.index === e.componentProps.firstDayOfWeek);
      return P === -1 || P === 0 ? _t : _t.slice(P).concat(_t.slice(0, P));
    }), m = (P) => {
      var D, I;
      return (I = (D = xe.value.datePickerWeekDict) == null ? void 0 : D[P].abbr) != null ? I : "";
    }, b = (P) => P > 0 ? P : "", h = () => {
      const {
        preview: { previewMonth: P, previewYear: D }
      } = e, I = ce(`${D}-${P.index}`).daysInMonth(), U = ce(`${D}-${P.index}-01`).day(), R = f.value.findIndex((H) => H.index === `${U}`);
      a.value = [...Array(R).fill(-1), ...Array.from(Array(I + 1).keys())].filter((H) => H);
    }, g = () => {
      const {
        preview: { previewYear: P, previewMonth: D },
        componentProps: { max: I, min: U }
      } = e;
      if (I) {
        const R = `${P}-${A(D.index) + 1}`;
        u.right = !ce(R).isSameOrBefore(ce(I), "month");
      }
      if (U) {
        const R = `${P}-${A(D.index) - 1}`;
        u.left = !ce(R).isSameOrAfter(ce(U), "month");
      }
    }, C = (P) => {
      const {
        preview: { previewYear: D, previewMonth: I },
        componentProps: { min: U, max: R }
      } = e;
      let H = !0, ie = !0;
      const G = `${D}-${I.index}-${P}`;
      return R && (H = ce(G).isSameOrBefore(ce(R), "day")), U && (ie = ce(G).isSameOrAfter(ce(U), "day")), H && ie;
    }, O = (P) => {
      const {
        choose: { chooseDays: D, chooseRangeDay: I },
        componentProps: { range: U }
      } = e;
      if (U) {
        if (!I.length)
          return !1;
        const R = ce(P).isSameOrBefore(ce(I[1]), "day"), H = ce(P).isSameOrAfter(ce(I[0]), "day");
        return R && H;
      }
      return D.includes(P);
    }, T = (P) => {
      if (P < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Et("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: D },
        preview: { previewYear: I, previewMonth: U },
        componentProps: { allowedDates: R, color: H, multiple: ie, range: G }
      } = e, W = `${I}-${U.index}-${P}`, Z = () => G || ie ? O(W) : A(D) === P && c.value, j = (() => C(P) ? R ? !R(W) : !1 : !0)(), B = () => j ? !0 : G || ie ? !O(W) : !c.value || A(D) !== P, E = () => d.value && A(r) === P && e.componentProps.showCurrent ? (G || ie || c.value) && j ? !0 : G || ie ? !O(W) : c.value ? D !== r : !0 : !1, x = () => j ? "" : E() ? H ?? "" : Z() ? "" : `${Uo()}-color-cover`, q = x().startsWith(Uo());
      return {
        text: B(),
        outline: E(),
        textColor: q ? "" : x(),
        [`${Uo()}-color-cover`]: q,
        class: ry(Et("button"), Et("button--usable"), [j, Et("button--disabled")]),
        disabled: j
      };
    }, $ = (P) => {
      i.value = P === "prev", l.value += P === "prev" ? -1 : 1, n("check-preview", "month", P);
    }, k = (P, D) => {
      D.currentTarget.classList.contains(Et("button--disabled")) || n("choose-day", P);
    }, M = (P) => {
      s.value.checkDate(P);
    };
    return rn(() => {
      h(), g();
    }), fe(
      () => e.preview,
      () => {
        h(), g();
      }
    ), {
      n: Et,
      nDate: Uo,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: f,
      panelBtnDisabled: u,
      forwardRef: M,
      filterDay: b,
      getDayAbbr: m,
      checkDate: $,
      chooseDay: k,
      buttonProps: T
    };
  }
});
ef.render = ay;
var iy = ef, ly = (e, n, t) => new Promise((o, r) => {
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
const { name: sy, n: uy, classes: dy } = te("date-picker");
function cy(e, n) {
  const t = ae("year-picker-panel"), o = ae("month-picker-panel"), r = ae("day-picker-panel");
  return p(), w(
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
              L(e.$slots, "year", { year: e.chooseYear }, () => [
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
                    e.type === "month" ? (p(), w("div", {
                      key: `${e.chooseYear}${(a = e.chooseMonth) == null ? void 0 : a.index}`
                    }, [
                      e.range ? L(e.$slots, "range", {
                        key: 0,
                        choose: e.getChoose.chooseRangeMonth
                      }, () => [
                        Te(
                          re(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ]) : e.multiple ? L(e.$slots, "multiple", {
                        key: 1,
                        choose: e.getChoose.chooseMonths
                      }, () => [
                        Te(
                          re(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ]) : L(e.$slots, "month", {
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
                    ])) : (p(), w("div", {
                      key: `${e.chooseYear}${(l = e.chooseMonth) == null ? void 0 : l.index}${e.chooseDay}`
                    }, [
                      e.range ? L(e.$slots, "range", {
                        key: 0,
                        choose: e.formatRange
                      }, () => [
                        Te(
                          re(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ]) : e.multiple ? L(e.$slots, "multiple", {
                        key: 1,
                        choose: e.getChoose.chooseDays
                      }, () => [
                        Te(
                          re(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ]) : L(e.$slots, "date", at(Ne({ key: 2 }, e.slotProps)), () => [
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
              e.getPanelType === "year" ? (p(), Se(t, {
                key: 0,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (p(), Se(o, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (p(), Se(r, {
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
const nf = ne({
  name: sy,
  components: {
    MonthPickerPanel: Zb,
    YearPickerPanel: xb,
    DayPickerPanel: iy
  },
  props: Hb,
  setup(e) {
    const n = ce().format("YYYY-MM-D"), [t, o] = n.split("-"), r = Ko.find((ue) => ue.index === o), a = S(!1), i = S(!1), l = S(!0), s = S(), u = S(), d = S(), c = S(r), f = S(t), m = S(!1), b = S([]), h = S([]), g = S([]), C = S([]), O = S(null), T = S(null), $ = je({
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
    }), k = V(() => ({
      chooseMonth: s.value,
      chooseYear: u.value,
      chooseDay: d.value,
      chooseMonths: b.value,
      chooseDays: h.value,
      chooseRangeMonth: g.value,
      chooseRangeDay: C.value
    })), M = V(() => ({
      previewMonth: c.value,
      previewYear: f.value
    })), P = V(() => {
      var ue, $e;
      const { multiple: be, range: Ee } = e;
      if (Ee)
        return g.value.length ? `${g.value[0]} ~ ${g.value[1]}` : "";
      let Ie = "";
      return s.value && (Ie = ($e = (ue = xe.value.datePickerMonthDict) == null ? void 0 : ue[s.value.index].name) != null ? $e : ""), be ? `${b.value.length}${xe.value.datePickerSelected}` : Ie;
    }), D = V(() => {
      var ue, $e, be, Ee;
      const { multiple: Ie, range: Xe } = e;
      if (Xe) {
        const Zt = C.value.map((zv) => ce(zv).format("YYYY-MM-DD"));
        return Zt.length ? `${Zt[0]} ~ ${Zt[1]}` : "";
      }
      if (Ie)
        return `${h.value.length}${xe.value.datePickerSelected}`;
      if (!u.value || !s.value || !d.value)
        return "";
      const bn = ce(`${u.value}-${s.value.index}-${d.value}`).day(), Sn = _t.find((Zt) => Zt.index === `${bn}`), $t = ($e = (ue = xe.value.datePickerWeekDict) == null ? void 0 : ue[Sn.index].name) != null ? $e : "", Vv = (Ee = (be = xe.value.datePickerMonthDict) == null ? void 0 : be[s.value.index].name) != null ? Ee : "", Av = St(d.value, 2, "0");
      return xe.value.lang === "zh-CN" ? `${s.value.index}-${Av} ${$t.slice(0, 3)}` : `${$t.slice(0, 3)}, ${Vv.slice(0, 3)} ${d.value}`;
    }), I = V(() => a.value ? "year" : e.type === "month" || i.value ? "month" : e.type === "date" ? "date" : ""), U = V(() => !e.touchable || ["", "year"].includes(I.value)), R = V(() => {
      var ue, $e, be, Ee;
      const Ie = ce(`${u.value}-${(ue = s.value) == null ? void 0 : ue.index}-${d.value}`).day(), Xe = d.value ? St(d.value, 2, "0") : "";
      return {
        week: `${Ie}`,
        year: ($e = u.value) != null ? $e : "",
        month: (Ee = (be = s.value) == null ? void 0 : be.index) != null ? Ee : "",
        date: Xe
      };
    }), H = V(
      () => k.value.chooseRangeDay.map((ue) => ce(ue).format("YYYY-MM-DD"))
    ), ie = V(() => u.value === f.value), G = V(() => {
      var ue;
      return ((ue = s.value) == null ? void 0 : ue.index) === c.value.index;
    });
    let W = 0, Z = 0, _ = "", j;
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
            pe(ue, e.type);
          } else
            Be(ue);
      },
      { immediate: !0 }
    ), fe(I, We);
    function B(ue) {
      ue === "year" ? a.value = !0 : ue === "month" ? i.value = !0 : (a.value = !1, i.value = !1);
    }
    function E(ue) {
      if (U.value)
        return;
      const { clientX: $e, clientY: be } = ue.touches[0];
      W = $e, Z = be;
    }
    function x(ue, $e) {
      return ue >= $e && ue > 20 ? "x" : "y";
    }
    function q(ue) {
      if (U.value)
        return;
      const { clientX: $e, clientY: be } = ue.touches[0], Ee = $e - W, Ie = be - Z;
      j = x(Math.abs(Ee), Math.abs(Ie)), _ = Ee > 0 ? "prev" : "next";
    }
    function Y() {
      return ly(this, null, function* () {
        if (U.value || j !== "x")
          return;
        const ue = I.value === "month" ? O : T;
        yield dn(), ue.value.forwardRef(_), We();
      });
    }
    function X(ue, $e) {
      const be = $e === "month" ? g : C;
      if (be.value = l.value ? [ue, ue] : [be.value[0], ue], l.value = !l.value, l.value) {
        const Ie = ce(be.value[0]).isAfter(be.value[1]) ? [be.value[1], be.value[0]] : [...be.value];
        y(e["onUpdate:modelValue"], Ie), y(e.onChange, Ie);
      }
    }
    function ee(ue, $e) {
      const be = $e === "month" ? b : h, Ee = $e === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ie = be.value.map((bn) => ce(bn).format(Ee)), Xe = Ie.findIndex((bn) => bn === ue);
      Xe === -1 ? Ie.push(ue) : Ie.splice(Xe, 1), y(e["onUpdate:modelValue"], Ie), y(e.onChange, Ie);
    }
    function he(ue, $e) {
      return !u.value || !s.value ? !1 : ie.value ? ue === "month" ? $e.index < s.value.index : G.value ? $e < A(d.value) : s.value.index > c.value.index : u.value > f.value;
    }
    function ke(ue) {
      const { readonly: $e, range: be, multiple: Ee, onChange: Ie, "onUpdate:modelValue": Xe } = e;
      if (ue < 0 || $e)
        return;
      m.value = he("day", ue);
      const bn = `${f.value}-${c.value.index}-${ue}`, Sn = ce(bn).format("YYYY-MM-DD");
      be ? X(Sn, "day") : Ee ? ee(Sn, "day") : (y(Xe, Sn), y(Ie, Sn));
    }
    function Re(ue) {
      const { type: $e, readonly: be, range: Ee, multiple: Ie, onChange: Xe, onPreview: bn, "onUpdate:modelValue": Sn } = e;
      if (m.value = he("month", ue), $e === "month" && !be) {
        const $t = `${f.value}-${ue.index}`;
        Ee ? X($t, "month") : Ie ? ee($t, "month") : (y(Sn, $t), y(Xe, $t));
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
        let Ee = A(c.value.index) + be;
        Ee < 1 && (f.value = `${A(f.value) - 1}`, Ee = 12), Ee > 12 && (f.value = `${A(f.value) + 1}`, Ee = 1), c.value = Ko.find((Ie) => A(Ie.index) === Ee);
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
      const be = $e === "month" ? g : C, Ee = $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Ie = ue.map((Sn) => ce(Sn).format(Ee)).slice(0, 2);
      if (be.value.some((Sn) => Ve(Sn)))
        return;
      be.value = Ie;
      const bn = ce(be.value[0]).isAfter(be.value[1]);
      be.value.length === 2 && bn && (be.value = [be.value[1], be.value[0]]);
    }
    function pe(ue, $e) {
      const be = $e === "month" ? b : h, Ee = $e === "month" ? "YYYY-MM" : "YYYY-MM-D", Ie = Array.from(new Set(ue.map((Xe) => ce(Xe).format(Ee))));
      be.value = Ie.filter((Xe) => Xe !== "Invalid Date");
    }
    function Be(ue) {
      const $e = ce(ue).format("YYYY-MM-D");
      if (Ve($e))
        return;
      const [be, Ee, Ie] = $e.split("-"), Xe = Ko.find((bn) => bn.index === Ee);
      s.value = Xe, u.value = be, d.value = Ie, c.value = Xe, f.value = be;
    }
    function We() {
      Z = 0, W = 0, _ = "", j = void 0;
    }
    return {
      monthPanelEl: O,
      dayPanelEl: T,
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
      getPanelType: I,
      getChoose: k,
      getPreview: M,
      componentProps: $,
      slotProps: R,
      formatRange: H,
      n: uy,
      classes: dy,
      clickEl: B,
      handleTouchstart: E,
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
nf.render = cy;
var nl = nf;
oe(nl);
const hI = nl;
var wa = nl, fy = Object.defineProperty, ru = Object.getOwnPropertySymbols, vy = Object.prototype.hasOwnProperty, my = Object.prototype.propertyIsEnumerable, au = (e, n, t) => n in e ? fy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, hy = (e, n) => {
  for (var t in n || (n = {}))
    vy.call(n, t) && au(e, t, n[t]);
  if (ru)
    for (var t of ru(n))
      my.call(n, t) && au(e, t, n[t]);
  return e;
};
const py = hy({
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
var gy = Object.defineProperty, iu = Object.getOwnPropertySymbols, by = Object.prototype.hasOwnProperty, yy = Object.prototype.propertyIsEnumerable, lu = (e, n, t) => n in e ? gy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, $y = (e, n) => {
  for (var t in n || (n = {}))
    by.call(n, t) && lu(e, t, n[t]);
  if (iu)
    for (var t of iu(n))
      yy.call(n, t) && lu(e, t, n[t]);
  return e;
};
const { name: wy, n: Sy, classes: Cy } = te("dialog");
function ky(e, n) {
  const t = ae("var-button"), o = ae("var-popup");
  return p(), Se(o, {
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
          style: $y({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          N(
            "div",
            {
              class: v(e.n("title"))
            },
            [
              L(e.$slots, "title", {}, () => {
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
              L(e.$slots, "default", {}, () => [
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
              e.cancelButton ? (p(), Se(t, {
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
              e.confirmButton ? (p(), Se(t, {
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
const tf = ne({
  name: wy,
  components: {
    VarPopup: dt,
    VarButton: mn
  },
  inheritAttrs: !1,
  props: py,
  setup(e) {
    const n = S(!1), t = S(!1);
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
      n: Sy,
      classes: Cy,
      handleClickOverlay: r,
      confirm: a,
      cancel: i,
      toSizeUnit: we
    };
  }
});
tf.render = ky;
var Eo = tf, Py = Object.defineProperty, Oy = Object.defineProperties, Ty = Object.getOwnPropertyDescriptors, su = Object.getOwnPropertySymbols, Iy = Object.prototype.hasOwnProperty, Ey = Object.prototype.propertyIsEnumerable, uu = (e, n, t) => n in e ? Py(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Vr = (e, n) => {
  for (var t in n || (n = {}))
    Iy.call(n, t) && uu(e, t, n[t]);
  if (su)
    for (var t of su(n))
      Ey.call(n, t) && uu(e, t, n[t]);
  return e;
}, My = (e, n) => Oy(e, Ty(n));
let et, dr = {};
function By(e = {}) {
  return Qe(e) ? My(Vr({}, dr), { message: e }) : Vr(Vr({}, dr), e);
}
function Tt(e) {
  return gt() ? new Promise((n) => {
    Tt.close();
    const t = By(e), o = je(t);
    o.teleport = "body", et = o;
    const { unmountInstance: r } = Xt(Eo, o, {
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
        y(o.onClosed), r(), et === o && (et = null);
      },
      onRouteChange: () => {
        r(), et === o && (et = null);
      },
      "onUpdate:show": (a) => {
        o.show = a;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Tt.setDefaultOptions = function(e) {
  dr = e;
};
Tt.resetDefaultOptions = function() {
  dr = {};
};
Tt.close = function() {
  if (et != null) {
    const e = et;
    et = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
Tt.Component = Eo;
oe(Eo);
oe(Eo, Tt);
const pI = Eo;
var Sa = Tt;
const Dy = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: Ny, n: Vy, classes: Ay } = te("divider");
function zy(e, n) {
  return p(), w(
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
      e.vertical ? Q("v-if", !0) : L(e.$slots, "default", { key: 0 }, () => [
        e.description ? (p(), w(
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
const of = ne({
  name: Ny,
  props: Dy,
  setup(e, { slots: n }) {
    const t = S(!1), o = V(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = V(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (fi(i) || l)
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
      n: Vy,
      classes: Ay,
      withText: t,
      style: r,
      withPresetInset: o
    };
  }
});
of.render = zy;
var tl = of;
oe(tl);
const gI = tl;
var Ca = tl;
const Ly = {
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
var Ry = Object.defineProperty, Uy = Object.defineProperties, Hy = Object.getOwnPropertyDescriptors, du = Object.getOwnPropertySymbols, Fy = Object.prototype.hasOwnProperty, Yy = Object.prototype.propertyIsEnumerable, cu = (e, n, t) => n in e ? Ry(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, fu = (e, n) => {
  for (var t in n || (n = {}))
    Fy.call(n, t) && cu(e, t, n[t]);
  if (du)
    for (var t of du(n))
      Yy.call(n, t) && cu(e, t, n[t]);
  return e;
}, vu = (e, n) => Uy(e, Hy(n)), jy = (e, n, t) => new Promise((o, r) => {
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
const { name: Wy, n: qy, classes: Gy } = te("drag");
function Xy(e, n) {
  return p(), Se(Xn, {
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
        L(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const rf = ne({
  name: Wy,
  inheritAttrs: !1,
  props: Ly,
  setup(e, { attrs: n }) {
    const t = S(null), o = S(0), r = S(0), a = S(!1), i = S(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: m, resetTouch: b } = pr(), { disabled: h } = Kt(), g = je({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    fe(() => e.boundary, U), ko(H), rn(() => {
      U(), H();
    });
    function C(G) {
      e.disabled || (c(G), k());
    }
    function O(G) {
      return jy(this, null, function* () {
        !l.value || e.disabled || (f(G), G.preventDefault(), i.value = !1, a.value = !0, e.direction.includes("x") && (o.value += u.value), e.direction.includes("y") && (r.value += d.value), I());
      });
    }
    function T() {
      e.disabled || (m(), i.value = !0, D());
    }
    function $(G) {
      s.value || y(e.onClick, G);
    }
    function k() {
      const { left: G, top: W } = M();
      o.value = G, r.value = W;
    }
    function M() {
      const G = _e(t.value), W = _e(window), Z = G.top - W.top, _ = W.bottom - G.bottom, j = G.left - W.left, B = W.right - G.right, { width: E, height: x } = G, { width: q, height: Y } = W;
      return {
        top: Z,
        bottom: _,
        left: j,
        right: B,
        width: E,
        height: x,
        halfWidth: E / 2,
        halfHeight: x / 2,
        windowWidth: q,
        windowHeight: Y
      };
    }
    function P() {
      const G = M(), W = g.left, Z = G.windowWidth - g.right - G.width, _ = g.top, j = G.windowHeight - g.bottom - G.height;
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
      const { halfWidth: G, halfHeight: W, top: Z, bottom: _, left: j, right: B } = M(), { minX: E, minY: x, maxX: q, maxY: Y } = P(), X = j + G - g.left, ee = B + G - g.right, he = Z + W - g.top, ke = _ + W - g.bottom, Re = X <= ee, le = he <= ke;
      e.attraction.includes("x") && (o.value = Re ? E : q), e.attraction.includes("y") && (r.value = le ? x : Y);
    }
    function I() {
      const { minX: G, minY: W, maxX: Z, maxY: _ } = P();
      o.value = st(o.value, G, Z), r.value = st(r.value, W, _);
    }
    function U() {
      const { top: G = 0, bottom: W = 0, left: Z = 0, right: _ = 0 } = e.boundary;
      g.top = He(G), g.bottom = He(W), g.left = He(Z), g.right = He(_);
    }
    function R() {
      var G;
      const W = (G = n.style) != null ? G : {};
      return vu(fu({}, n), {
        style: vu(fu({}, W), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : W.top,
          left: a.value ? 0 : W.left,
          right: a.value ? "auto" : W.right,
          bottom: a.value ? "auto" : W.bottom,
          transform: a.value ? `translate(${o.value}px, ${r.value}px)` : W.transform
        })
      });
    }
    function H() {
      a.value && (k(), I());
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
      teleportDisabled: h,
      n: qy,
      classes: Gy,
      getAttrs: R,
      handleTouchstart: C,
      handleTouchmove: O,
      handleTouchend: T,
      handleClick: $,
      resize: H,
      reset: ie
    };
  }
});
rf.render = Xy;
var ol = rf;
oe(ol);
const bI = ol;
var cr = ol, Ky = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zo(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Ky[n];
  });
}
var jn = "top", vt = "bottom", Ct = "right", it = "left", rl = "auto", Pr = [jn, vt, Ct, it], Or = "start", fo = "end", Zy = "clippingParents", af = "viewport", Jt = "popper", Jy = "reference", mu = /* @__PURE__ */ Pr.reduce(function(e, n) {
  return e.concat([n + "-" + Or, n + "-" + fo]);
}, []), lf = /* @__PURE__ */ [].concat(Pr, [rl]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Or, n + "-" + fo]);
}, []), Qy = "beforeRead", _y = "read", xy = "afterRead", e1 = "beforeMain", n1 = "main", t1 = "afterMain", o1 = "beforeWrite", r1 = "write", a1 = "afterWrite", i1 = [Qy, _y, xy, e1, n1, t1, o1, r1, a1];
function lt(e) {
  return e.split("-")[0];
}
var l1 = {
  start: "end",
  end: "start"
};
function hu(e) {
  return e.replace(/start|end/g, function(n) {
    return l1[n];
  });
}
function Bn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function kt(e) {
  var n = Bn(e).Element;
  return e instanceof n || e instanceof Element;
}
function kn(e) {
  var n = Bn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function al(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Bn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function yt(e) {
  return ((kt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var no = Math.max, pu = Math.min, Ht = Math.round;
function ka() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function sf() {
  return !/^((?!chrome|android).)*safari/i.test(ka());
}
function Ft(e, n, t) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  n && kn(e) && (r = e.offsetWidth > 0 && Ht(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ht(o.height) / e.offsetHeight || 1);
  var i = kt(e) ? Bn(e) : window, l = i.visualViewport, s = !sf() && t, u = (o.left + (s && l ? l.offsetLeft : 0)) / r, d = (o.top + (s && l ? l.offsetTop : 0)) / a, c = o.width / r, f = o.height / a;
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
function il(e) {
  var n = Bn(e), t = n.pageXOffset, o = n.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function ll(e) {
  return Ft(yt(e)).left + il(e).scrollLeft;
}
function s1(e, n) {
  var t = Bn(e), o = yt(e), r = t.visualViewport, a = o.clientWidth, i = o.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = sf();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + ll(e),
    y: s
  };
}
function qn(e) {
  return Bn(e).getComputedStyle(e);
}
function u1(e) {
  var n, t = yt(e), o = il(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = no(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = no(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + ll(e), s = -o.scrollTop;
  return qn(r || t).direction === "rtl" && (l += no(t.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function Un(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Tr(e) {
  return Un(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (al(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    yt(e)
  );
}
function sl(e) {
  var n = qn(e), t = n.overflow, o = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + r + o);
}
function uf(e) {
  return ["html", "body", "#document"].indexOf(Un(e)) >= 0 ? e.ownerDocument.body : kn(e) && sl(e) ? e : uf(Tr(e));
}
function to(e, n) {
  var t;
  n === void 0 && (n = []);
  var o = uf(e), r = o === ((t = e.ownerDocument) == null ? void 0 : t.body), a = Bn(o), i = r ? [a].concat(a.visualViewport || [], sl(o) ? o : []) : o, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(to(Tr(i)))
  );
}
function d1(e) {
  return ["table", "td", "th"].indexOf(Un(e)) >= 0;
}
function gu(e) {
  return !kn(e) || // https://github.com/popperjs/popper-core/issues/837
  qn(e).position === "fixed" ? null : e.offsetParent;
}
function c1(e) {
  var n = /firefox/i.test(ka()), t = /Trident/i.test(ka());
  if (t && kn(e)) {
    var o = qn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Tr(e);
  for (al(r) && (r = r.host); kn(r) && ["html", "body"].indexOf(Un(r)) < 0; ) {
    var a = qn(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function ul(e) {
  for (var n = Bn(e), t = gu(e); t && d1(t) && qn(t).position === "static"; )
    t = gu(t);
  return t && (Un(t) === "html" || Un(t) === "body" && qn(t).position === "static") ? n : t || c1(e) || n;
}
function f1(e, n) {
  var t = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (t && al(t)) {
    var o = n;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Pa(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function v1(e, n) {
  var t = Ft(e, !1, n === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function bu(e, n, t) {
  return n === af ? Pa(s1(e, t)) : kt(n) ? v1(n, t) : Pa(u1(yt(e)));
}
function m1(e) {
  var n = to(Tr(e)), t = ["absolute", "fixed"].indexOf(qn(e).position) >= 0, o = t && kn(e) ? ul(e) : e;
  return kt(o) ? n.filter(function(r) {
    return kt(r) && f1(r, o) && Un(r) !== "body";
  }) : [];
}
function h1(e, n, t, o) {
  var r = n === "clippingParents" ? m1(e) : [].concat(n), a = [].concat(r, [t]), i = a[0], l = a.reduce(function(s, u) {
    var d = bu(e, u, o);
    return s.top = no(d.top, s.top), s.right = pu(d.right, s.right), s.bottom = pu(d.bottom, s.bottom), s.left = no(d.left, s.left), s;
  }, bu(e, i, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function vo(e) {
  return e.split("-")[1];
}
function p1(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function df(e) {
  var n = e.reference, t = e.element, o = e.placement, r = o ? lt(o) : null, a = o ? vo(o) : null, i = n.x + n.width / 2 - t.width / 2, l = n.y + n.height / 2 - t.height / 2, s;
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
    case Ct:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case it:
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
  var u = r ? p1(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Or:
        s[u] = s[u] - (n[d] / 2 - t[d] / 2);
        break;
      case fo:
        s[u] = s[u] + (n[d] / 2 - t[d] / 2);
        break;
    }
  }
  return s;
}
function g1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function b1(e) {
  return Object.assign({}, g1(), e);
}
function y1(e, n) {
  return n.reduce(function(t, o) {
    return t[o] = e, t;
  }, {});
}
function cf(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = o === void 0 ? e.placement : o, a = t.strategy, i = a === void 0 ? e.strategy : a, l = t.boundary, s = l === void 0 ? Zy : l, u = t.rootBoundary, d = u === void 0 ? af : u, c = t.elementContext, f = c === void 0 ? Jt : c, m = t.altBoundary, b = m === void 0 ? !1 : m, h = t.padding, g = h === void 0 ? 0 : h, C = b1(typeof g != "number" ? g : y1(g, Pr)), O = f === Jt ? Jy : Jt, T = e.rects.popper, $ = e.elements[b ? O : f], k = h1(kt($) ? $ : $.contextElement || yt(e.elements.popper), s, d, i), M = Ft(e.elements.reference), P = df({
    reference: M,
    element: T,
    strategy: "absolute",
    placement: r
  }), D = Pa(Object.assign({}, T, P)), I = f === Jt ? D : M, U = {
    top: k.top - I.top + C.top,
    bottom: I.bottom - k.bottom + C.bottom,
    left: k.left - I.left + C.left,
    right: I.right - k.right + C.right
  }, R = e.modifiersData.offset;
  if (f === Jt && R) {
    var H = R[r];
    Object.keys(U).forEach(function(ie) {
      var G = [Ct, vt].indexOf(ie) >= 0 ? 1 : -1, W = [jn, vt].indexOf(ie) >= 0 ? "y" : "x";
      U[ie] += H[W] * G;
    });
  }
  return U;
}
function $1(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = t.boundary, a = t.rootBoundary, i = t.padding, l = t.flipVariations, s = t.allowedAutoPlacements, u = s === void 0 ? lf : s, d = vo(o), c = d ? l ? mu : mu.filter(function(b) {
    return vo(b) === d;
  }) : Pr, f = c.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  f.length === 0 && (f = c);
  var m = f.reduce(function(b, h) {
    return b[h] = cf(e, {
      placement: h,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[lt(h)], b;
  }, {});
  return Object.keys(m).sort(function(b, h) {
    return m[b] - m[h];
  });
}
function w1(e) {
  if (lt(e) === rl)
    return [];
  var n = Zo(e);
  return [hu(e), n, hu(n)];
}
function S1(e) {
  var n = e.state, t = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var r = t.mainAxis, a = r === void 0 ? !0 : r, i = t.altAxis, l = i === void 0 ? !0 : i, s = t.fallbackPlacements, u = t.padding, d = t.boundary, c = t.rootBoundary, f = t.altBoundary, m = t.flipVariations, b = m === void 0 ? !0 : m, h = t.allowedAutoPlacements, g = n.options.placement, C = lt(g), O = C === g, T = s || (O || !b ? [Zo(g)] : w1(g)), $ = [g].concat(T).reduce(function(X, ee) {
      return X.concat(lt(ee) === rl ? $1(n, {
        placement: ee,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: h
      }) : ee);
    }, []), k = n.rects.reference, M = n.rects.popper, P = /* @__PURE__ */ new Map(), D = !0, I = $[0], U = 0; U < $.length; U++) {
      var R = $[U], H = lt(R), ie = vo(R) === Or, G = [jn, vt].indexOf(H) >= 0, W = G ? "width" : "height", Z = cf(n, {
        placement: R,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), _ = G ? ie ? Ct : it : ie ? vt : jn;
      k[W] > M[W] && (_ = Zo(_));
      var j = Zo(_), B = [];
      if (a && B.push(Z[H] <= 0), l && B.push(Z[_] <= 0, Z[j] <= 0), B.every(function(X) {
        return X;
      })) {
        I = R, D = !1;
        break;
      }
      P.set(R, B);
    }
    if (D)
      for (var E = b ? 3 : 1, x = function(ee) {
        var he = $.find(function(ke) {
          var Re = P.get(ke);
          if (Re)
            return Re.slice(0, ee).every(function(le) {
              return le;
            });
        });
        if (he)
          return I = he, "break";
      }, q = E; q > 0; q--) {
        var Y = x(q);
        if (Y === "break")
          break;
      }
    n.placement !== I && (n.modifiersData[o]._skip = !0, n.placement = I, n.reset = !0);
  }
}
const C1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: S1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function k1(e, n, t) {
  var o = lt(e), r = [it, jn].indexOf(o) >= 0 ? -1 : 1, a = typeof t == "function" ? t(Object.assign({}, n, {
    placement: e
  })) : t, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [it, Ct].indexOf(o) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function P1(e) {
  var n = e.state, t = e.options, o = e.name, r = t.offset, a = r === void 0 ? [0, 0] : r, i = lf.reduce(function(d, c) {
    return d[c] = k1(c, n.rects, a), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[o] = i;
}
const O1 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: P1
};
var T1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function I1(e) {
  var n = e.x, t = e.y, o = window, r = o.devicePixelRatio || 1;
  return {
    x: Ht(n * r) / r || 0,
    y: Ht(t * r) / r || 0
  };
}
function yu(e) {
  var n, t = e.popper, o = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, b = i.y, h = b === void 0 ? 0 : b, g = typeof d == "function" ? d({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  m = g.x, h = g.y;
  var C = i.hasOwnProperty("x"), O = i.hasOwnProperty("y"), T = it, $ = jn, k = window;
  if (u) {
    var M = ul(t), P = "clientHeight", D = "clientWidth";
    if (M === Bn(t) && (M = yt(t), qn(M).position !== "static" && l === "absolute" && (P = "scrollHeight", D = "scrollWidth")), M = M, r === jn || (r === it || r === Ct) && a === fo) {
      $ = vt;
      var I = c && M === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[P]
      );
      h -= I - o.height, h *= s ? 1 : -1;
    }
    if (r === it || (r === jn || r === vt) && a === fo) {
      T = Ct;
      var U = c && M === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[D]
      );
      m -= U - o.width, m *= s ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: l
  }, u && T1), H = d === !0 ? I1({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  if (m = H.x, h = H.y, s) {
    var ie;
    return Object.assign({}, R, (ie = {}, ie[$] = O ? "0" : "", ie[T] = C ? "0" : "", ie.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + h + "px)" : "translate3d(" + m + "px, " + h + "px, 0)", ie));
  }
  return Object.assign({}, R, (n = {}, n[$] = O ? h + "px" : "", n[T] = C ? m + "px" : "", n.transform = "", n));
}
function E1(e) {
  var n = e.state, t = e.options, o = t.gpuAcceleration, r = o === void 0 ? !0 : o, a = t.adaptive, i = a === void 0 ? !0 : a, l = t.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: lt(n.placement),
    variation: vo(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, yu(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, yu(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const ff = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: E1,
  data: {}
};
function M1(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function B1(e) {
  return e === Bn(e) || !kn(e) ? il(e) : M1(e);
}
function D1(e) {
  var n = e.getBoundingClientRect(), t = Ht(n.width) / e.offsetWidth || 1, o = Ht(n.height) / e.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function N1(e, n, t) {
  t === void 0 && (t = !1);
  var o = kn(n), r = kn(n) && D1(n), a = yt(n), i = Ft(e, r, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((Un(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  sl(a)) && (l = B1(n)), kn(n) ? (s = Ft(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = ll(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function V1(e) {
  var n = Ft(e), t = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(n.width - t) <= 1 && (t = n.width), Math.abs(n.height - o) <= 1 && (o = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: t,
    height: o
  };
}
function A1(e) {
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
function z1(e) {
  var n = A1(e);
  return i1.reduce(function(t, o) {
    return t.concat(n.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function L1(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(t) {
      Promise.resolve().then(function() {
        n = void 0, t(e());
      });
    })), n;
  };
}
function R1(e) {
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
var $u = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function wu() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function U1(e) {
  e === void 0 && (e = {});
  var n = e, t = n.defaultModifiers, o = t === void 0 ? [] : t, r = n.defaultOptions, a = r === void 0 ? $u : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $u, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, c = [], f = !1, m = {
      state: d,
      setOptions: function(C) {
        var O = typeof C == "function" ? C(d.options) : C;
        h(), d.options = Object.assign({}, a, d.options, O), d.scrollParents = {
          reference: kt(l) ? to(l) : l.contextElement ? to(l.contextElement) : [],
          popper: to(s)
        };
        var T = z1(R1([].concat(o, d.options.modifiers)));
        return d.orderedModifiers = T.filter(function($) {
          return $.enabled;
        }), b(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var C = d.elements, O = C.reference, T = C.popper;
          if (wu(O, T)) {
            d.rects = {
              reference: N1(O, ul(T), d.options.strategy === "fixed"),
              popper: V1(T)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(U) {
              return d.modifiersData[U.name] = Object.assign({}, U.data);
            });
            for (var $ = 0; $ < d.orderedModifiers.length; $++) {
              if (d.reset === !0) {
                d.reset = !1, $ = -1;
                continue;
              }
              var k = d.orderedModifiers[$], M = k.fn, P = k.options, D = P === void 0 ? {} : P, I = k.name;
              typeof M == "function" && (d = M({
                state: d,
                options: D,
                name: I,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: L1(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!wu(l, s))
      return m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function b() {
      d.orderedModifiers.forEach(function(g) {
        var C = g.name, O = g.options, T = O === void 0 ? {} : O, $ = g.effect;
        if (typeof $ == "function") {
          var k = $({
            state: d,
            name: C,
            instance: m,
            options: T
          }), M = function() {
          };
          c.push(k || M);
        }
      });
    }
    function h() {
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
function H1(e) {
  var n = e.state, t = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, i = o.resize, l = i === void 0 ? !0 : i, s = Bn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", t.update, Ho);
  }), l && s.addEventListener("resize", t.update, Ho), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", t.update, Ho);
    }), l && s.removeEventListener("resize", t.update, Ho);
  };
}
const F1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: H1,
  data: {}
};
function Y1(e) {
  var n = e.state, t = e.name;
  n.modifiersData[t] = df({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const j1 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Y1,
  data: {}
};
function W1(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(t) {
    var o = n.styles[t] || {}, r = n.attributes[t] || {}, a = n.elements[t];
    !kn(a) || !Un(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function q1(e) {
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
      !kn(r) || !Un(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const G1 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: W1,
  effect: q1,
  requires: ["computeStyles"]
};
var X1 = [F1, j1, ff, G1], K1 = /* @__PURE__ */ U1({
  defaultModifiers: X1
}), Z1 = Object.defineProperty, J1 = Object.defineProperties, Q1 = Object.getOwnPropertyDescriptors, Su = Object.getOwnPropertySymbols, _1 = Object.prototype.hasOwnProperty, x1 = Object.prototype.propertyIsEnumerable, Cu = (e, n, t) => n in e ? Z1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ar = (e, n) => {
  for (var t in n || (n = {}))
    _1.call(n, t) && Cu(e, t, n[t]);
  if (Su)
    for (var t of Su(n))
      x1.call(n, t) && Cu(e, t, n[t]);
  return e;
}, zr = (e, n) => J1(e, Q1(n)), ku = (e, n, t) => new Promise((o, r) => {
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
function vf(e) {
  const n = S(null), t = S(null), o = S({ width: 0, height: 0 }), r = io(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(I, U) {
      U ? (M(), y(e.onOpen)) : y(e.onClose);
    }
  }), { zIndex: a } = Oo(() => r.value, 1);
  let i = null, l = !1, s = !1;
  const u = () => {
    const { width: I, height: U } = Pt(n.value);
    o.value = {
      width: He(I),
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
  }, c = () => {
    e.trigger === "hover" && (s = !0, P());
  }, f = () => ku(this, null, function* () {
    e.trigger === "hover" && (s = !1, yield dn(), !l && D());
  }), m = () => {
    e.trigger === "hover" && (l = !0);
  }, b = () => ku(this, null, function* () {
    e.trigger === "hover" && (l = !1, yield dn(), !s && D());
  }), h = () => {
    e.closeOnClickReference && r.value ? D() : P();
  }, g = () => {
    D();
  }, C = (I) => {
    e.trigger === "click" && (g(), y(e.onClickOutside, I));
  }, O = () => {
    M(), y(e.onClosed);
  }, T = () => {
    const { offsetX: I, offsetY: U, placement: R } = e;
    u();
    const H = {
      x: He(I),
      y: He(U)
    };
    switch (R) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: H.x,
          distance: H.y - o.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: H.x,
          distance: H.y - o.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: H.x,
          distance: H.y - o.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: H.x,
          distance: -H.y - o.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: H.x,
          distance: -H.y - o.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: H.x,
          distance: -H.y - o.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: H.y,
          distance: H.x - o.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: H.y,
          distance: -H.x - o.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: R,
          skidding: H.y,
          distance: -H.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: R,
          skidding: H.x,
          distance: -H.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: R,
          skidding: H.x,
          distance: H.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: R,
          skidding: H.y,
          distance: H.x
        };
    }
  }, $ = () => {
    const { placement: I, skidding: U, distance: R } = T(), H = [
      zr(Ar({}, C1), {
        enabled: r.value
      }),
      zr(Ar({}, O1), {
        options: {
          offset: [U, R]
        }
      }),
      zr(Ar({}, ff), {
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
      placement: I,
      modifiers: H,
      strategy: e.strategy
    };
  }, k = () => e.reference ? n.value.querySelector(e.reference) : n.value, M = () => {
    i.setOptions($());
  }, P = () => {
    const { disabled: I } = e;
    I || (r.value = !0, y(e["onUpdate:show"], !0));
  }, D = () => {
    r.value = !1, y(e["onUpdate:show"], !1);
  };
  return yd(k, "click", C), fe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], M), fe(() => e.disabled, D), $o(() => {
    var I;
    i = K1((I = k()) != null ? I : n.value, t.value, $());
  }), wo(() => {
    i.destroy();
  }), {
    show: r,
    popover: t,
    zIndex: a,
    host: n,
    hostSize: o,
    handleHostClick: h,
    handleHostMouseenter: c,
    handleHostMouseleave: f,
    handlePopoverClose: g,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: b,
    handleClosed: O,
    resize: M,
    open: P,
    close: D
  };
}
const e$ = {
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
}, { name: n$, n: t$, classes: o$ } = te("tooltip");
function r$(e, n) {
  return p(), w(
    "div",
    {
      ref: "host",
      class: v(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...t) => e.handleHostClick && e.handleHostClick(...t)),
      onMouseenter: n[4] || (n[4] = (...t) => e.handleHostMouseenter && e.handleHostMouseenter(...t)),
      onMouseleave: n[5] || (n[5] = (...t) => e.handleHostMouseleave && e.handleHostMouseleave(...t))
    },
    [
      L(e.$slots, "default"),
      (p(), Se(Xn, {
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
                    L(e.$slots, "content", {}, () => [
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
              [Ln, e.show]
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
const mf = ne({
  name: n$,
  props: e$,
  setup(e) {
    const { disabled: n } = Kt(), {
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
      close: h,
      // expose
      resize: g
    } = vf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: we,
      n: t$,
      classes: o$,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handleClosed: m,
      resize: g,
      open: b,
      close: h
    };
  }
});
mf.render = r$;
var dl = mf;
oe(dl);
const yI = dl;
var fr = dl;
const a$ = {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
var i$ = Object.defineProperty, Pu = Object.getOwnPropertySymbols, l$ = Object.prototype.hasOwnProperty, s$ = Object.prototype.propertyIsEnumerable, Ou = (e, n, t) => n in e ? i$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, u$ = (e, n) => {
  for (var t in n || (n = {}))
    l$.call(n, t) && Ou(e, t, n[t]);
  if (Pu)
    for (var t of Pu(n))
      s$.call(n, t) && Ou(e, t, n[t]);
  return e;
};
const { name: d$, n: c$, classes: f$ } = te("ellipsis"), v$ = { key: 0 };
function m$(e, n) {
  const t = ae("var-tooltip");
  return p(), Se(
    t,
    at(Co(e.tooltip)),
    {
      content: ve(() => [
        L(e.$slots, "tooltip-content", {}, () => {
          var o;
          return [
            (o = e.tooltip) != null && o.content ? (p(), w(
              "span",
              v$,
              re(e.tooltip.content),
              1
              /* TEXT */
            )) : L(e.$slots, "default", { key: 1 })
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
            L(e.$slots, "default")
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
const hf = ne({
  name: d$,
  components: { VarTooltip: fr },
  props: a$,
  setup(e) {
    const n = S(!1), t = V(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), o = V(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : u$({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltip: o,
      expanding: n,
      rootStyles: t,
      n: c$,
      classes: f$,
      handleClick: r
    };
  }
});
hf.render = m$;
var cl = hf;
oe(cl);
const $I = cl;
var Oa = cl;
const h$ = {
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
  name: p$,
  classes: Lr,
  n: yn
} = te("fab");
var fl = ne({
  name: p$,
  inheritAttrs: !1,
  props: h$,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = io(e, "active"), r = S(null), a = S(null);
    fe(() => e.trigger, () => {
      o.value = !1;
    }), fe(() => e.disabled, () => {
      o.value = !1;
    }), fe(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var d;
      (d = a.value) == null || d.reset();
    }), yd(r, "click", s);
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
          class: Lr([o.value, yn("trigger-active-icon"), yn("trigger-inactive-icon")]),
          name: o.value ? e.activeIcon : e.inactiveIcon,
          size: o.value ? e.inactiveIconSize : e.activeIconSize,
          transition: 200,
          animationClass: yn("--trigger-icon-animation")
        }, null)]
      }), [[Ln, e.show]]);
    }
    return () => {
      var d;
      const c = wd((d = y(n.default)) != null ? d : []), f = fi(e.drag) ? {} : e.drag;
      return J(cr, Ne({
        ref: a,
        class: Lr(yn(`--position-${e.position}`), [!e.fixed, yn("--absolute")]),
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
          class: Lr(yn(), yn(`--direction-${e.direction}`), [e.safeArea, yn("--safe-area")]),
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
          }, [m]))]), [[Ln, e.show && o.value && c.length]])]
        })])]
      });
    };
  }
});
oe(fl);
const wI = fl;
var Ta = fl;
const g$ = {
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
var Tu = (e, n, t) => new Promise((o, r) => {
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
const { name: b$, n: y$ } = te("form");
function $$(e, n) {
  return p(), w(
    "form",
    {
      class: v(e.n()),
      onSubmit: n[0] || (n[0] = (...t) => e.handleSubmit && e.handleSubmit(...t)),
      onReset: n[1] || (n[1] = (...t) => e.handleReset && e.handleReset(...t))
    },
    [
      L(e.$slots, "default")
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const pf = ne({
  name: b$,
  props: g$,
  setup(e) {
    const n = V(() => e.disabled), t = V(() => e.readonly), { formItems: o, bindFormItems: r } = qg();
    r({
      disabled: n,
      readonly: t
    });
    function i(f) {
      setTimeout(() => {
        const m = ct(f), b = m === window ? 0 : bs(m), h = bs(f) - b - He(e.scrollToErrorOffsetY);
        so(m, {
          top: h,
          animation: Zr
        });
      }, 300);
    }
    function l(f) {
      return Tu(this, null, function* () {
        f.preventDefault();
        const m = yield u();
        y(e.onSubmit, m);
      });
    }
    function s(f) {
      f.preventDefault(), d(), y(e.onReset);
    }
    function u() {
      return Tu(this, null, function* () {
        var f;
        const m = yield Promise.all(o.map(({ validate: b }) => b()));
        if (e.scrollToError) {
          const [, b] = om(m, (g) => g === !1, e.scrollToError), h = b > -1;
          if (h) {
            const g = (f = o[b].instance.proxy) == null ? void 0 : f.$el;
            i(g);
          }
          return !h;
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
      n: y$,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: d,
      resetValidation: c
    };
  }
});
pf.render = $$;
var Mo = pf;
Mo.useValidation = En;
Mo.useForm = Mn;
oe(Mo);
const SI = Mo;
var Ia = Mo;
const w$ = {
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
}, { name: S$, n: C$, classes: k$ } = te("image"), P$ = ["alt", "title", "lazy-loading", "lazy-error"], O$ = ["alt", "title", "src"];
function T$(e, n) {
  var t;
  const o = Le("lazy"), r = Le("ripple");
  return Oe((p(), w(
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
      e.lazy && !e.showErrorSlot ? Oe((p(), w("img", {
        key: 0,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: F({ objectFit: e.fit }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, P$)), [
        [o, (t = e.src) != null ? t : ""]
      ]) : Q("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (p(), w("img", {
        key: 1,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: F({ objectFit: e.fit }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, O$)) : Q("v-if", !0),
      e.showErrorSlot ? L(e.$slots, "error", { key: 2 }) : Q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const gf = ne({
  name: S$,
  directives: {
    Lazy: uo,
    Ripple: Ke
  },
  props: w$,
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
      n: C$,
      classes: k$,
      toSizeUnit: we,
      handleLoad: r,
      handleError: o,
      handleClick: a
    };
  }
});
gf.render = T$;
var vl = gf;
oe(vl);
const CI = vl;
var Ea = vl;
const bf = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function I$() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    bf
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: t
  };
}
const yf = {
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
var Mt = (e, n, t) => new Promise((o, r) => {
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
const E$ = 250, M$ = 20, { name: B$, n: Rr, classes: D$ } = te("swipe"), N$ = ["onClick"];
function V$(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = Le("hover");
  return Oe((p(), w(
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
          L(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ),
      e.navigation ? L(e.$slots, "prev", at(Ne({ key: 0 }, {
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
            e.navigation === !0 || e.hovering ? (p(), w(
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
      e.navigation ? L(e.$slots, "next", at(Ne({ key: 1 }, {
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
            e.navigation === !0 || e.hovering ? (p(), w(
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
      L(e.$slots, "indicator", at(Co({
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        e.indicator && e.length ? (p(), w(
          "div",
          {
            key: 0,
            class: v(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (p(!0), w(
              De,
              null,
              qe(e.length, (a, i) => (p(), w("div", {
                class: v(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: F({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, N$))),
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
const $f = ne({
  name: B$,
  directives: { Hover: In },
  components: { VarButton: mn, VarIcon: Ue },
  props: yf,
  setup(e) {
    const n = S(null), t = S(0), o = V(() => e.vertical), r = S(0), a = S(0), i = S(!1), l = S(0), s = S(!1), { swipeItems: u, bindSwipeItems: d, length: c } = I$(), { popup: f, bindPopup: m } = Em(), {
      deltaX: b,
      deltaY: h,
      moveX: g,
      moveY: C,
      offsetX: O,
      offsetY: T,
      touching: $,
      direction: k,
      startTime: M,
      startTouch: P,
      moveTouch: D,
      endTouch: I
    } = pr(), U = V(() => k.value === (e.vertical ? "vertical" : "horizontal"));
    let R = !1, H = -1;
    d({
      size: t,
      vertical: o
    }), y(m, null), fe(
      () => c.value,
      () => Mt(this, null, function* () {
        yield dn(), E(), ke();
      })
    ), f && fe(
      () => f.show.value,
      (se) => Mt(this, null, function* () {
        se ? (yield dn(), ke()) : q();
      })
    ), mt(ke), hr(q), ko(ke);
    function G(se) {
      return u.find(({ index: pe }) => pe.value === se);
    }
    function W() {
      e.loop && (a.value >= 0 && G(c.value - 1).setTranslate(-r.value), a.value <= -(r.value - t.value) && G(0).setTranslate(r.value), a.value > -(r.value - t.value) && a.value < 0 && (G(c.value - 1).setTranslate(0), G(0).setTranslate(0)));
    }
    function Z(se) {
      const pe = vn(se) ? se : Math.floor((a.value - t.value / 2) / -t.value), { loop: Be } = e;
      return pe <= -1 ? Be ? -1 : 0 : pe >= c.value ? Be ? c.value : c.value - 1 : pe;
    }
    function _(se) {
      const { loop: pe } = e;
      return se === -1 ? pe ? c.value - 1 : 0 : se === c.value ? pe ? 0 : c.value - 1 : se;
    }
    function j(se) {
      return e.loop ? se < 0 ? c.value + se : se >= c.value ? se - c.value : se : st(se, 0, c.value - 1);
    }
    function B() {
      return Mt(this, null, function* () {
        const se = a.value >= t.value, pe = a.value <= -r.value, Be = 0, We = -(r.value - t.value);
        i.value = !0, (se || pe) && (i.value = !0, a.value = pe ? Be : We, G(0).setTranslate(0), G(c.value - 1).setTranslate(0)), yield dn(), i.value = !1;
      });
    }
    function E() {
      R || (l.value = j(A(e.initialIndex)), R = !0);
    }
    function x() {
      const { autoplay: se } = e;
      !se || c.value <= 1 || (q(), H = window.setTimeout(() => {
        Re(), x();
      }, A(se)));
    }
    function q() {
      H && clearTimeout(H);
    }
    function Y(se) {
      a.value = se, W();
    }
    function X(se) {
      return Mt(this, null, function* () {
        c.value <= 1 || !e.touchable || (P(se), q(), yield B(), i.value = !0);
      });
    }
    function ee(se) {
      const { touchable: pe, vertical: Be } = e;
      !$.value || !pe || (D(se), U.value && (se.preventDefault(), Y(a.value + (Be ? C.value : g.value))));
    }
    function he() {
      if (!$.value || (I(), !U.value))
        return;
      const { vertical: se, onChange: pe } = e, Be = se ? h.value < 0 : b.value < 0, We = se ? T.value : O.value, $e = performance.now() - M.value <= E$ && We >= M$ ? Z(Be ? l.value + 1 : l.value - 1) : Z();
      i.value = !1, Y($e * -t.value);
      const be = l.value;
      l.value = _($e), x(), be !== l.value && y(pe, l.value);
    }
    function ke() {
      n.value && (i.value = !0, t.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = t.value * c.value, a.value = l.value * -t.value, u.forEach((se) => {
        se.setTranslate(0);
      }), x(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function Re(se) {
      return Mt(this, null, function* () {
        if (c.value <= 1)
          return;
        E();
        const { loop: pe, onChange: Be } = e, We = l.value;
        if (l.value = j(We + 1), (se == null ? void 0 : se.event) !== !1 && y(Be, l.value), yield B(), We === c.value - 1 && pe) {
          G(0).setTranslate(r.value), a.value = c.value * -t.value;
          return;
        }
        We !== c.value - 1 && (a.value = l.value * -t.value);
      });
    }
    function le(se) {
      return Mt(this, null, function* () {
        if (c.value <= 1)
          return;
        E();
        const { loop: pe, onChange: Be } = e, We = l.value;
        if (l.value = j(We - 1), (se == null ? void 0 : se.event) !== !1 && y(Be, l.value), yield B(), We === 0 && pe) {
          G(c.value - 1).setTranslate(-r.value), a.value = t.value;
          return;
        }
        We !== 0 && (a.value = l.value * -t.value);
      });
    }
    function de(se, pe) {
      if (c.value <= 1 || se === l.value)
        return;
      se = se < 0 ? 0 : se, se = se >= c.value ? c.value : se;
      const Be = se > l.value ? Re : le, We = Math.abs(se - l.value);
      Array.from({ length: We }).forEach((ue, $e) => {
        Be({ event: $e === We - 1 ? pe == null ? void 0 : pe.event : !1 });
      });
    }
    const Ce = (se) => {
      e.navigation === "hover" && (s.value = se);
    };
    function Ve(se) {
      return e.navigation !== "hover" ? "" : e.vertical ? Rr(`--navigation-vertical-${se}-animation`) : Rr(`--navigation-${se}-animation`);
    }
    return {
      length: c,
      index: l,
      swipeEl: n,
      trackSize: r,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: Rr,
      classes: D$,
      handleTouchstart: X,
      handleTouchmove: ee,
      handleTouchend: he,
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
$f.render = V$;
var ml = $f;
oe(ml);
const kI = ml;
var mo = ml;
function A$() {
  const { bindParent: e, index: n, parentProvider: t } = an(bf);
  return e || Tn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: t,
    bindSwipe: e
  };
}
const { name: z$, n: L$ } = te("swipe-item");
function R$(e, n) {
  return p(), w(
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
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const wf = ne({
  name: z$,
  setup() {
    const e = S(0), { swipe: n, bindSwipe: t, index: o } = A$(), { size: r, vertical: a } = n;
    t({
      index: o,
      setTranslate: l
    });
    function l(s) {
      e.value = s;
    }
    return {
      n: L$,
      size: r,
      vertical: a,
      translate: e
    };
  }
});
wf.render = R$;
var hl = wf;
oe(hl);
const PI = hl;
var ho = hl, U$ = Object.defineProperty, Iu = Object.getOwnPropertySymbols, H$ = Object.prototype.hasOwnProperty, F$ = Object.prototype.propertyIsEnumerable, Eu = (e, n, t) => n in e ? U$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Mu = (e, n) => {
  for (var t in n || (n = {}))
    H$.call(n, t) && Eu(e, t, n[t]);
  if (Iu)
    for (var t of Iu(n))
      F$.call(n, t) && Eu(e, t, n[t]);
  return e;
};
const Y$ = Mu(Mu({
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
}, en(yf, ["loop", "indicator", "onChange"])), en(Po, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), { name: j$, n: Bu, classes: W$ } = te("image-preview"), Ur = 12, Du = 200, q$ = 350, Nu = 200, G$ = 500, X$ = ["onTouchstart"], K$ = ["src", "alt"];
function Z$(e, n) {
  const t = ae("var-swipe-item"), o = ae("var-swipe"), r = ae("var-icon"), a = ae("var-popup");
  return p(), Se(a, {
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
          (p(!0), w(
            De,
            null,
            qe(e.images, (i, l) => (p(), Se(t, {
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
                  }, null, 10, K$)
                ], 46, X$)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: ve(({ index: i, length: l }) => [
          L(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (p(), w(
              "div",
              {
                key: 0,
                class: v(e.n("indicators"))
              },
              re(i + 1) + " / " + re(l),
              3
              /* TEXT, CLASS */
            )) : Q("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      L(e.$slots, "close-icon", {}, () => [
        e.closeable ? (p(), Se(r, {
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
          L(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
const Sf = ne({
  name: j$,
  components: {
    VarSwipe: mo,
    VarSwipeItem: ho,
    VarPopup: dt,
    VarIcon: Ue
  },
  inheritAttrs: !1,
  props: Y$,
  setup(e) {
    const n = S(!1), t = S(1), o = S(0), r = S(0), a = S(), i = S(), l = S(!0), s = S(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: m, moveTouch: b, endTouch: h } = pr(), g = V(() => {
      const { images: q, current: Y, initialIndex: X } = e;
      if (X != null)
        return A(X);
      const ee = q.findIndex((he) => he === Y);
      return Math.max(ee, 0);
    }), C = V(() => {
      const { imagePreventDefault: q, show: Y } = e;
      return Y && q;
    });
    let O = null, T = null, $ = !1;
    const k = {
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
    function M() {
      t.value = A(e.zoom), l.value = !1, k.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Nu);
    }
    function P() {
      t.value = 1, o.value = 0, r.value = 0, l.value = !0, k.prev = null, a.value = void 0, i.value = void 0;
    }
    function D(q) {
      return k.prev ? c.value <= Ur && performance.now() - f.value <= Du && k.prev === q : !1;
    }
    function I(q) {
      return !q || !k.start || !k.prev ? !1 : c.value <= Ur && performance.now() - f.value < q$ && (q === k.start || q.parentNode === k.start);
    }
    function U() {
      h(), window.clearTimeout(T), $ = !1, k.start = null;
    }
    function R(q) {
      if (h(), window.clearTimeout(T), $) {
        $ = !1;
        return;
      }
      const Y = I(q.target);
      O = window.setTimeout(() => {
        Y && _(), k.start = null;
      }, Du);
    }
    function H(q, Y) {
      window.clearTimeout(O), window.clearTimeout(T);
      const X = q.currentTarget;
      if (k.start = X, T = window.setTimeout(() => {
        $ = !0, y(e.onLongPress, Y);
      }, G$), D(X)) {
        t.value > 1 ? P() : M();
        return;
      }
      m(q), k.prev = X;
    }
    function ie(q) {
      const { offsetWidth: Y, offsetHeight: X } = q, { naturalWidth: ee, naturalHeight: he } = q.querySelector(`.${Bu("image")}`);
      return {
        width: Y,
        height: X,
        imageRadio: he / ee,
        rootRadio: X / Y,
        zoom: A(e.zoom)
      };
    }
    function G(q) {
      const { zoom: Y, imageRadio: X, rootRadio: ee, width: he, height: ke } = ie(q);
      if (!X)
        return 0;
      const Re = X > ee ? ke / X : he;
      return Math.max(0, (Y * Re - he) / 2) / Y;
    }
    function W(q) {
      const { zoom: Y, imageRadio: X, rootRadio: ee, width: he, height: ke } = ie(q);
      if (!X)
        return 0;
      const Re = X > ee ? ke : he * X;
      return Math.max(0, (Y * Re - ke) / 2) / Y;
    }
    function Z(q) {
      if (!k.prev)
        return;
      b(q);
      const Y = q.currentTarget;
      if (c.value > Ur && window.clearTimeout(T), t.value > 1) {
        const X = G(Y), ee = W(Y);
        o.value = st(o.value + u.value, -X, X), r.value = st(r.value + d.value, -ee, ee);
      }
      k.prev = Y;
    }
    function _() {
      if (t.value > 1) {
        P(), setTimeout(() => y(e["onUpdate:show"], !1), Nu);
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
    function E(q, Y) {
      var X;
      (X = s.value) == null || X.to(q, Y);
    }
    function x(q) {
      e.imagePreventDefault && e.show && q.preventDefault();
    }
    return {
      swipeRef: s,
      isPreventDefault: C,
      initialIndex: g,
      popupShow: n,
      scale: t,
      translateX: o,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: Bu,
      classes: W$,
      handleTouchstart: H,
      handleTouchmove: Z,
      handleTouchend: R,
      handleTouchcancel: U,
      close: _,
      prev: j,
      next: B,
      to: E
    };
  }
});
Sf.render = Z$;
var Bo = Sf, J$ = Object.defineProperty, Q$ = Object.defineProperties, _$ = Object.getOwnPropertyDescriptors, Vu = Object.getOwnPropertySymbols, x$ = Object.prototype.hasOwnProperty, ew = Object.prototype.propertyIsEnumerable, Au = (e, n, t) => n in e ? J$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Fo = (e, n) => {
  for (var t in n || (n = {}))
    x$.call(n, t) && Au(e, t, n[t]);
  if (Vu)
    for (var t of Vu(n))
      ew.call(n, t) && Au(e, t, n[t]);
  return e;
}, zu = (e, n) => Q$(e, _$(n));
let nt, oo = {};
function nw(e = {}) {
  return Qe(e) ? zu(Fo({}, oo), { images: [e] }) : Me(e) ? zu(Fo({}, oo), { images: e }) : Fo(Fo({}, oo), e);
}
function It(e) {
  if (!gt())
    return;
  It.close();
  const n = nw(e), t = je(n);
  t.teleport = "body", nt = t;
  const { unmountInstance: o } = Xt(Bo, t, {
    onClose: () => y(t.onClose),
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
}
It.close = () => {
  if (nt != null) {
    const e = nt;
    nt = null, Fe().then(() => {
      e.show = !1;
    });
  }
};
It.setDefaultOptions = (e) => {
  oo = e;
};
It.resetDefaultOptions = () => {
  oo = {};
};
It.Component = Bo;
oe(Bo);
oe(Bo, It);
const OI = Bo;
var po = It;
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
var Lu = (e, n, t) => new Promise((o, r) => {
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
const { name: tw, n: ow, classes: rw } = te("sticky");
function aw(e, n) {
  return p(), w(
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
          L(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const Cf = ne({
  name: tw,
  props: Jo,
  setup(e) {
    const n = S(null), t = S(null), o = S(!1), r = S("0px"), a = S("0px"), i = S("auto"), l = S("auto"), s = S("auto"), u = S("auto"), d = V(() => !e.disabled && e.cssMode), c = V(() => !e.disabled && !e.cssMode && o.value), f = V(() => He(e.offsetTop));
    let m;
    fe(() => e.disabled, g), rn(C), hr(O), ko(g), ut(() => window, "scroll", h);
    function b() {
      const { cssMode: T, disabled: $ } = e;
      if ($)
        return;
      let k = 0;
      if (m !== window) {
        const { top: R } = _e(m);
        k = R;
      }
      const M = t.value, P = n.value, { top: D, left: I } = _e(P), U = D - k;
      return U <= f.value ? (T || (i.value = `${P.offsetWidth}px`, l.value = `${P.offsetHeight}px`, r.value = `${k + f.value}px`, a.value = `${I}px`, s.value = `${M.offsetWidth}px`, u.value = `${M.offsetHeight}px`, o.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (o.value = !1, {
        offsetTop: U,
        isFixed: !1
      });
    }
    function h() {
      if (!m)
        return;
      const T = b();
      T && y(e.onScroll, T.offsetTop, T.isFixed);
    }
    function g() {
      return Lu(this, null, function* () {
        o.value = !1, yield qo(), b();
      });
    }
    function C() {
      return Lu(this, null, function* () {
        yield dn(), m = ct(n.value), m !== window && m.addEventListener("scroll", h), h();
      });
    }
    function O() {
      m !== window && m.removeEventListener("scroll", h);
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
      n: ow,
      classes: rw,
      resize: g,
      toNumber: A
    };
  }
});
Cf.render = aw;
var pl = Cf;
oe(pl);
const TI = pl;
var go = pl;
const kf = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function iw() {
  const { bindChildren: e, length: n, childProviders: t } = ln(
    kf
  );
  return {
    length: n,
    indexAnchors: t,
    bindIndexAnchors: e
  };
}
function lw() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    kf
  );
  return t || Tn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: t
  };
}
const sw = {
  index: [Number, String]
}, { name: uw, n: dw, classes: cw } = te("index-anchor");
function fw(e, n) {
  return p(), Se(qt(e.sticky ? e.n("$-sticky") : e.Transition), {
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
          L(e.$slots, "default", {}, () => [
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
const Pf = ne({
  name: uw,
  components: { VarSticky: go },
  inheritAttrs: !1,
  props: sw,
  setup(e) {
    const n = S(0), t = S(!1), o = V(() => e.index), r = S(null), { index: a, indexBar: i, bindIndexBar: l } = lw(), { active: s, sticky: u, cssMode: d, stickyOffsetTop: c, zIndex: f } = i;
    l({
      index: a,
      name: o,
      ownTop: n,
      setOwnTop: b,
      setDisabled: h
    });
    function b() {
      r.value && (n.value = r.value.$el ? r.value.$el.offsetTop : r.value.offsetTop);
    }
    function h(g) {
      t.value = g;
    }
    return {
      n: dw,
      classes: cw,
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
Pf.render = fw;
var gl = Pf;
oe(gl);
const II = gl;
var Ma = gl;
const vw = {
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
const { name: mw, n: hw, classes: pw } = te("index-bar"), gw = ["onClick"];
function bw(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n()),
      ref: "barEl"
    },
    [
      L(e.$slots, "default"),
      N(
        "ul",
        {
          class: v(e.n("anchor-list")),
          style: F({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (p(!0), w(
            De,
            null,
            qe(e.anchorNameList, (t) => (p(), w("li", {
              key: t,
              class: v(e.classes(e.n("anchor-item"), [e.active === t, e.n("anchor-item--active")])),
              style: F({ color: e.active === t && e.highlightColor ? e.highlightColor : "" }),
              onClick: (o) => e.anchorClick({ anchorName: t, manualCall: !0 })
            }, re(t), 15, gw))),
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
const Of = ne({
  name: mw,
  props: vw,
  setup(e) {
    const n = S(""), t = S(null), o = S([]), r = S(), a = V(() => e.sticky), i = V(() => e.stickyCssMode || e.cssMode), l = V(() => He(e.stickyOffsetTop)), s = V(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = iw();
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
      yield T(), $();
    })), mr(k), jt(() => {
      m = !0, k();
    }), mt(() => {
      !m || r.value === void 0 || (O({
        anchorName: r.value,
        options: { event: !1 }
      }), m = !1);
    }), c(b);
    function h(P, D) {
      const I = ro(P) ? P.name.value : P;
      I === r.value || I === void 0 || (r.value = I, (D == null ? void 0 : D.event) !== !1 && y(e.onChange, I));
    }
    function g() {
      if (vi(f))
        return 0;
      const { top: P } = _e(f), { scrollTop: D } = f, { top: I } = _e(t.value);
      return D - P + I;
    }
    function C() {
      const P = lo(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, I = g();
      d.forEach((U, R) => {
        const H = U.ownTop.value, ie = P - H + l.value - I, G = R === d.length - 1 ? D : d[R + 1].ownTop.value - U.ownTop.value;
        U.setDisabled(!0), ie >= 0 && ie < G && n.value === "" && (U.setDisabled(!1), h(U));
      });
    }
    function O(P) {
      return Yo(this, arguments, function* ({ anchorName: D, manualCall: I = !1, options: U }) {
        if (I && y(e.onClick, D), D === r.value && !m)
          return;
        const R = d.find(({ name: W }) => D === W.value);
        if (!R)
          return;
        const H = g(), ie = R.ownTop.value - l.value + H, G = gi(f);
        n.value = D, h(D, U), yield so(f, {
          left: G,
          top: ie,
          animation: jd,
          duration: A(e.duration)
        }), yield dn(), n.value = "";
      });
    }
    function T() {
      return Yo(this, null, function* () {
        yield dn(), f = ct(t.value);
      });
    }
    function $() {
      f.addEventListener("scroll", C);
    }
    function k() {
      f.removeEventListener("scroll", C);
    }
    function M(P, D) {
      ao(() => O({ anchorName: P, options: D }));
    }
    return {
      barEl: t,
      active: r,
      zIndex: s,
      anchorNameList: o,
      n: hw,
      classes: pw,
      toNumber: A,
      scrollTo: M,
      anchorClick: O
    };
  }
});
Of.render = bw;
var bl = Of;
oe(bl);
const EI = bl;
var Ba = bl;
const yl = {
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
}, { name: yw, n: Hr, classes: $w } = te("field-decorator"), ww = ["for"];
function Sw(e, n) {
  const t = ae("var-icon");
  return p(), w(
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
              L(e.$slots, "prepend-icon")
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
              L(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          e.placeholder && e.hint ? (p(), w("label", {
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
          ], 14, ww)) : Q("v-if", !0),
          N(
            "div",
            {
              class: v(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? (p(), Se(t, {
                key: 0,
                class: v(e.n("clear-icon")),
                "var-field-decorator-cover": "",
                name: "close-circle",
                onClick: e.handleClear
              }, null, 8, ["class", "onClick"])) : Q("v-if", !0),
              L(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (p(), w(
        De,
        { key: 0 },
        [
          e.variant === "outlined" ? (p(), w(
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
                  e.placeholder && e.hint ? (p(), Se(Xn, {
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
          )) : (p(), w(
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
const Tf = ne({
  name: yw,
  components: { VarIcon: Ue },
  props: yl,
  setup(e, { slots: n }) {
    const t = S(null), o = S(""), r = V(() => e.hint && (!Fn(e.value) || e.isFocus || n["prepend-icon"])), a = V(
      () => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
    );
    ko(l), rn(l), So(l);
    function i() {
      const { hint: d, value: c, composing: f } = e;
      if (!d && (!Fn(c) || f))
        return Hr("--placeholder-hidden");
      if (r.value)
        return Hr("--placeholder-hint");
    }
    function l() {
      const { size: d, hint: c, variant: f, placeholder: m } = e;
      if (!m || !c || f !== "outlined") {
        o.value = "";
        return;
      }
      const b = Pt(t.value), h = `var(--field-decorator-outlined-${d}-placeholder-space)`;
      o.value = `calc(${b.width} * 0.75 + ${h} * 2)`;
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
      n: Hr,
      classes: $w,
      isEmpty: Fn,
      handleClear: s,
      handleClick: u
    };
  }
});
Tf.render = Sw;
var If = Tf, Cw = Object.defineProperty, Ru = Object.getOwnPropertySymbols, kw = Object.prototype.hasOwnProperty, Pw = Object.prototype.propertyIsEnumerable, Uu = (e, n, t) => n in e ? Cw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ow = (e, n) => {
  for (var t in n || (n = {}))
    kw.call(n, t) && Uu(e, t, n[t]);
  if (Ru)
    for (var t of Ru(n))
      Pw.call(n, t) && Uu(e, t, n[t]);
  return e;
};
const Tw = Ow({
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
}, en(yl, [
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
])), { name: Iw, n: Ew, classes: Mw } = te("input"), Bw = ["placeholder", "enterkeyhint"], Dw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Nw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Vw(e, n) {
  const t = ae("var-field-decorator"), o = ae("var-form-details");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[13] || (n[13] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      J(
        t,
        at(Co({
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
            L(e.$slots, "append-icon")
          ]),
          default: ve(() => [
            e.normalizedType === "password" ? (p(), w("input", {
              key: 0,
              tabindex: "-1",
              class: v(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: F({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, Bw)) : Q("v-if", !0),
            e.textarea ? (p(), w("textarea", {
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
      `, 46, Dw)) : (p(), w("input", {
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
            }, null, 46, Nw))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ve(() => [
              L(e.$slots, "prepend-icon")
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
            L(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Ef = ne({
  name: Iw,
  components: {
    VarFormDetails: hn,
    VarFieldDecorator: If
  },
  props: Tw,
  setup(e) {
    const n = $d(), t = S(null), o = S(!1), r = S(!1), { bindForm: a, form: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = En(), c = V(() => e.disabled || e.readonly ? "" : "text"), f = V(() => e.type === "number" ? "text" : e.type), m = V(() => {
      const { maxlength: j, modelValue: B } = e;
      return j ? Fn(B) ? `0 / ${j}` : `${String(B).length}/${j}` : "";
    }), b = V(() => {
      const { hint: j, blurColor: B, focusColor: E } = e;
      if (!j)
        return l.value ? "var(--field-decorator-error-color)" : o.value ? E || "var(--field-decorator-focus-color)" : B || "var(--field-decorator-blur-color)";
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
        const { validateTrigger: B, rules: E, modelValue: x } = e;
        s(B, j, E, x);
      });
    }
    function C(j) {
      o.value = !0, y(e.onFocus, j), g("onFocus");
    }
    function O(j) {
      o.value = !1, y(e.onBlur, j), g("onBlur");
    }
    function T(j) {
      const B = j.target;
      let { value: E } = B;
      return e.type === "number" && (E = U(E)), H(R(E));
    }
    function $() {
      r.value = !0;
    }
    function k(j) {
      r.value && (r.value = !1, j.target.dispatchEvent(new Event("input")));
    }
    function M(j) {
      if (r.value)
        return;
      const B = T(j);
      y(e["onUpdate:modelValue"], B), y(e.onInput, B, j), g("onInput");
    }
    function P(j) {
      const B = T(j);
      y(e.onChange, B, j), g("onChange");
    }
    function D() {
      const { disabled: j, readonly: B, clearable: E, onClear: x } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || j || B || !E || (y(e["onUpdate:modelValue"], ""), y(x, ""), g("onClear"));
    }
    function I(j) {
      const { disabled: B, onClick: E } = e;
      i != null && i.disabled.value || B || (y(E, j), g("onClick"));
    }
    function U(j) {
      const B = j.indexOf("-"), E = j.indexOf(".");
      return B > -1 && (j = B === 0 ? "-" + j.replace(/-/g, "") : j.replace(/-/g, "")), E > -1 && (j = j.slice(0, E + 1) + j.slice(E).replace(/\./g, "")), j.replace(/[^-0-9.]/g, "");
    }
    function R(j) {
      return e.modelModifiers.trim ? j.trim() : j;
    }
    function H(j) {
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
      errorMessage: l,
      placeholderColor: b,
      normalizedType: f,
      cursor: c,
      maxlengthText: m,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: Ew,
      classes: Mw,
      isEmpty: Fn,
      handleFocus: C,
      handleBlur: O,
      handleInput: M,
      handleChange: P,
      handleClear: D,
      handleClick: I,
      handleCompositionStart: $,
      handleCompositionEnd: k,
      handleMousedown: ie,
      validate: W,
      resetValidation: d,
      reset: G,
      focus: Z,
      blur: _
    };
  }
});
Ef.render = Vw;
var $l = Ef;
oe($l);
const MI = $l;
var vr = $l;
const Aw = {
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
}, { name: zw, n: Lw, classes: Rw } = te("link");
function Uw(e, n) {
  return p(), Se(qt(e.tag), Ne(e.linkProps, {
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
      L(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const Mf = ne({
  name: zw,
  props: Aw,
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
      n: Lw,
      classes: Rw,
      handleClick: o,
      toSizeUnit: we
    };
  }
});
Mf.render = Uw;
var wl = Mf;
oe(wl);
const BI = wl;
var Da = wl;
const Hw = {
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
}, Bf = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Fw() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    Bf
  );
  return {
    length: t,
    tabItemList: n,
    bindTabItem: e
  };
}
const Df = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Yw() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    Bf
  );
  return n || Tn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: t,
    tabsItems: e,
    bindTabsItems: n
  };
}
function jw() {
  const { childProviders: e, bindChildren: n, length: t } = ln(Df);
  return {
    length: t,
    lists: e,
    bindLists: n
  };
}
function Ww() {
  const { parentProvider: e, bindParent: n, index: t } = an(Df);
  return {
    index: t,
    tabItem: e,
    bindTabItem: n
  };
}
var qw = (e, n, t) => new Promise((o, r) => {
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
const { name: Gw, n: Xw, classes: Kw } = te("list");
function Zw(e, n) {
  const t = ae("var-loading"), o = Le("ripple");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      L(e.$slots, "default"),
      e.loading ? L(e.$slots, "loading", { key: 0 }, () => {
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
      e.finished ? L(e.$slots, "finished", { key: 1 }, () => {
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
      e.error ? L(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Oe((p(), w(
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
const Nf = ne({
  name: Gw,
  directives: { Ripple: Ke },
  components: { VarLoading: Lt },
  props: Hw,
  setup(e) {
    const n = S(null), t = S(null), { tabItem: o, bindTabItem: r } = Ww();
    let a;
    y(r, {}), o && fe(() => o.current.value, u), fe(() => [e.loading, e.error, e.finished], u), rn(() => {
      a = ct(n.value), a.addEventListener("scroll", u), e.immediateCheck && u();
    }), hr(s);
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
      return qw(this, null, function* () {
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
      n: Xw,
      classes: Kw
    };
  }
});
Nf.render = Zw;
var Sl = Nf;
oe(Sl);
const DI = Sl;
var Na = Sl;
const Jw = {
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
  name: Qw,
  classes: _w,
  n: Hu
} = te("loading-bar");
var xw = ne({
  name: Qw,
  props: Jw,
  setup(e) {
    return () => J("div", {
      class: _w(Hu(), [e.error, Hu("--error")]),
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
let Vf, Af, Ir, zf, Fu, Lf = {};
const eS = {
  value: 0,
  opacity: 0,
  error: !1
}, nn = je(eS), nS = (e) => {
  Object.assign(nn, e);
}, tS = (e) => {
  Object.assign(nn, e), Lf = e;
}, oS = () => {
  Object.keys(Lf).forEach((e) => {
    nn[e] !== void 0 && (nn[e] = void 0);
  });
}, Rf = () => {
  Fu || (Fu = !0, Xt(xw, nn));
}, Cl = () => {
  Vf = window.setTimeout(() => {
    if (nn.value >= 95)
      return;
    let e = Math.random();
    nn.value < 70 && (e = Math.round(5 * Math.random())), nn.value += e, Cl();
  }, 200);
}, kl = () => {
  window.clearTimeout(Af), window.clearTimeout(Vf), window.clearTimeout(Ir), window.clearTimeout(zf);
}, rS = () => {
  kl(), nn.error = !1, nn.value = 0, Rf(), Ir = window.setTimeout(() => {
    nn.opacity = 1;
  }, 200), Cl();
}, Uf = () => {
  kl(), nn.value = 100, Ir = window.setTimeout(() => {
    nn.opacity = 0, Af = window.setTimeout(() => {
      nn.error = !1;
    }, 250);
  }, 300);
}, aS = () => {
  kl(), nn.error = !0, nn.value === 100 && (nn.value = 0), Rf(), Ir = window.setTimeout(() => {
    nn.opacity = 1;
  }, 200), Cl(), zf = window.setTimeout(Uf, 300);
}, Hf = {
  start: rS,
  finish: Uf,
  error: aS,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: nS,
  setDefaultOptions: tS,
  resetDefaultOptions: oS
}, NI = Hf;
var Va = Hf;
const iS = {
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
}, { name: lS, n: sS, classes: uS } = te("menu");
function dS(e, n) {
  return p(), w(
    "div",
    {
      ref: "host",
      class: v(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...t) => e.handleHostClick && e.handleHostClick(...t)),
      onMouseenter: n[4] || (n[4] = (...t) => e.handleHostMouseenter && e.handleHostMouseenter(...t)),
      onMouseleave: n[5] || (n[5] = (...t) => e.handleHostMouseleave && e.handleHostMouseleave(...t))
    },
    [
      L(e.$slots, "default"),
      (p(), Se(Xn, {
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
                L(e.$slots, "menu")
              ],
              38
              /* CLASS, STYLE, HYDRATE_EVENTS */
            ), [
              [Ln, e.show]
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
const Ff = ne({
  name: lS,
  props: iS,
  setup(e) {
    const { disabled: n } = Kt(), {
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
      close: h,
      // expose
      resize: g
    } = vf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: gn,
      toSizeUnit: we,
      n: sS,
      classes: uS,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handlePopoverClose: f,
      handleClosed: m,
      resize: g,
      open: b,
      close: h
    };
  }
});
Ff.render = dS;
var Pl = Ff;
oe(Pl);
const VI = Pl;
var bo = Pl;
const Yf = Symbol("SELECT_BIND_OPTION_KEY");
function cS() {
  const { length: e, childProviders: n, bindChildren: t } = ln(Yf);
  return {
    length: e,
    options: n,
    bindOptions: t
  };
}
function fS() {
  const { index: e, parentProvider: n, bindParent: t } = an(Yf);
  return t || Tn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: t
  };
}
const vS = {
  label: {},
  value: {}
}, { name: mS, n: hS, classes: pS } = te("option");
function gS(e, n) {
  const t = ae("var-checkbox"), o = ae("var-hover-overlay"), r = Le("ripple"), a = Le("hover");
  return Oe((p(), w(
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
      e.multiple ? (p(), Se(t, {
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
          L(e.$slots, "default", {}, () => [
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
const jf = ne({
  name: mS,
  directives: { Ripple: Ke, Hover: In },
  components: {
    VarCheckbox: rr,
    VarHoverOverlay: zn
  },
  props: vS,
  setup(e) {
    const n = S(!1), t = V(() => n.value), o = V(() => e.label), r = V(() => e.value), { select: a, bindSelect: i } = fS(), { multiple: l, focusColor: s, onSelect: u, computeLabel: d } = a, { hovering: c, handleHovering: f } = Wn(), m = {
      label: o,
      value: r,
      selected: t,
      sync: g
    };
    fe([() => e.label, () => e.value], d), i(m);
    function b() {
      l.value && (n.value = !n.value), u(m);
    }
    function h() {
      return u(m);
    }
    function g(C) {
      n.value = C;
    }
    return {
      n: hS,
      classes: pS,
      optionSelected: n,
      multiple: l,
      focusColor: s,
      hovering: c,
      handleHovering: f,
      handleClick: b,
      handleSelect: h
    };
  }
});
jf.render = gS;
var Ol = jf;
oe(Ol);
const AI = Ol;
var Aa = Ol;
const bS = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  onClick: z(),
  "onUpdate:show": z()
}, {
  name: yS,
  n: Yu
} = te("overlay");
var Tl = ne({
  name: yS,
  inheritAttrs: !1,
  props: bS,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const {
      zIndex: o
    } = Oo(() => e.show, 1), {
      disabled: r
    } = Kt();
    gr(() => e.show, () => e.lockScroll);
    function a() {
      y(e.onClick), y(e["onUpdate:show"], !1);
    }
    function i() {
      return J("div", Ne({
        class: Yu(),
        style: {
          zIndex: o.value - 1
        }
      }, t, {
        onClick: a
      }), [y(n.default)]);
    }
    function l() {
      return J(Ye, {
        name: Yu("--fade")
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
oe(Tl);
const zI = Tl;
var za = Tl;
const $S = {
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
}, { name: wS, n: SS, classes: CS } = te("pagination"), kS = ["item-mode", "onClick"];
function PS(e, n) {
  const t = ae("var-icon"), o = ae("var-input"), r = ae("var-cell"), a = ae("var-menu"), i = Le("ripple");
  return p(), w(
    "ul",
    {
      class: v(e.n())
    },
    [
      Oe((p(), w(
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
          L(e.$slots, "prev", {}, () => [
            J(t, { name: "chevron-left" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current <= 1 || e.disabled }]
      ]),
      e.simple ? (p(), w(
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
            onKeydown: n[3] || (n[3] = ns((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
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
      )) : (p(!0), w(
        De,
        { key: 1 },
        qe(e.pageList, (l, s) => Oe((p(), w("li", {
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
        ], 10, kS)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Oe((p(), w(
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
          L(e.$slots, "next", {}, () => [
            J(t, { name: "chevron-right" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current >= e.pageCount || e.disabled }]
      ]),
      e.showSizeChanger ? (p(), w(
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
              (p(!0), w(
                De,
                null,
                qe(e.sizeOption, (l, s) => Oe((p(), Se(r, {
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
      )) : Q("v-if", !0),
      e.showQuickJumper && !e.simple ? (p(), w(
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
            onKeydown: n[9] || (n[9] = ns((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.totalText ? (p(), w(
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
const Wf = ne({
  name: wS,
  components: {
    VarMenu: bo,
    VarIcon: Ue,
    VarCell: or,
    VarInput: vr
  },
  directives: { Ripple: Ke },
  props: $S,
  setup(e) {
    const n = S(!1), t = S(""), o = S("1"), r = S(!1), a = S(!1), i = S(A(e.current) || 1), l = S(A(e.size) || 10), s = S([]), u = V(() => Math.ceil(e.maxPagerCount / 2)), d = V(() => Math.ceil(A(e.total) / A(l.value))), c = V(() => {
      const $ = l.value * (i.value - 1) + 1, k = Math.min(l.value * i.value, A(e.total));
      return [$, k];
    }), f = V(() => e.showTotal ? e.showTotal(A(e.total), c.value) : "");
    fe([() => e.current, () => e.size], ([$, k]) => {
      i.value = A($) || 1, l.value = A(k || 10);
    }), fe(
      [i, l, d],
      ([$, k, M], [P, D]) => {
        let I = [];
        const { maxPagerCount: U, total: R, onChange: H } = e, ie = Math.ceil(A(R) / A(D)), G = M - (U - u.value) - 1;
        if (o.value = `${$}`, M - 2 > U) {
          if (P === void 0 || M !== ie)
            for (let W = 2; W < U + 2; W++)
              I.push(W);
          if ($ <= U && $ < G) {
            I = [];
            for (let W = 1; W < U + 1; W++)
              I.push(W + 1);
            r.value = !0, a.value = !1;
          }
          if ($ > U && $ < G) {
            I = [];
            for (let W = 1; W < U + 1; W++)
              I.push($ + W - u.value);
            r.value = $ === 2 && U === 1, a.value = !1;
          }
          if ($ >= G) {
            I = [];
            for (let W = 1; W < U + 1; W++)
              I.push(M - (U - W) - 1);
            r.value = !1, a.value = !0;
          }
          I = [1, "...", ...I, "...", M];
        } else
          for (let W = 1; W <= M; W++)
            I.push(W);
        s.value = I, P != null && M > 0 && y(H, $, k), y(e["onUpdate:current"], $), y(e["onUpdate:size"], k);
      },
      {
        immediate: !0
      }
    );
    function m($, k) {
      return vn($) ? !1 : k === 1 ? r.value : a.value;
    }
    function b($, k) {
      return vn($) ? "basic" : k === 1 ? "head" : "tail";
    }
    function h($, k) {
      if (!($ === i.value || e.disabled)) {
        if ($ === "...") {
          i.value = k === 1 ? Math.max(i.value - e.maxPagerCount, 1) : Math.min(i.value + e.maxPagerCount, d.value);
          return;
        }
        if ($ === "prev") {
          i.value = O(i.value - 1);
          return;
        }
        if ($ === "next") {
          i.value = O(i.value + 1);
          return;
        }
        vn($) && (i.value = $);
      }
    }
    function g() {
      e.disabled || (n.value = !0);
    }
    function C($) {
      l.value = $, n.value = !1;
      const k = O(i.value);
      o.value = String(k), i.value = k;
    }
    function O($) {
      return $ > d.value ? d.value : $ < 1 ? 1 : $;
    }
    function T($, k, M) {
      M.target.blur();
      const P = O(A(k));
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
      n: SS,
      classes: CS,
      getMode: b,
      isHideEllipsis: m,
      clickItem: h,
      showMenu: g,
      clickSize: C,
      setPage: T,
      toNumber: A,
      formatElevation: gn
    };
  }
});
Wf.render = PS;
var Il = Wf;
oe(Il);
const LI = Il;
var La = Il;
const OS = {
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
}, { name: TS, n: IS, classes: ES } = te("paper");
function MS(e, n) {
  const t = Le("ripple");
  return Oe((p(), w(
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
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const qf = ne({
  name: TS,
  directives: { Ripple: Ke },
  props: OS,
  setup(e) {
    function n(t) {
      y(e.onClick, t);
    }
    return {
      n: IS,
      classes: ES,
      formatElevation: gn,
      toSizeUnit: we,
      handleClick: n
    };
  }
});
qf.render = MS;
var El = qf;
oe(El);
const RI = El;
var Ra = El, BS = Object.defineProperty, ju = Object.getOwnPropertySymbols, DS = Object.prototype.hasOwnProperty, NS = Object.prototype.propertyIsEnumerable, Wu = (e, n, t) => n in e ? BS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, VS = (e, n) => {
  for (var t in n || (n = {}))
    DS.call(n, t) && Wu(e, t, n[t]);
  if (ju)
    for (var t of ju(n))
      NS.call(n, t) && Wu(e, t, n[t]);
  return e;
};
const AS = VS({
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
])), { name: zS, n: LS, classes: RS } = te("picker"), qu = 300, US = 15, Gu = 200, HS = 1e3;
let Xu = 0;
const FS = ["onTouchstartPassive", "onTouchmove", "onTouchend"], YS = ["onTransitionend"], jS = ["onClick"];
function WS(e, n) {
  const t = ae("var-button");
  return p(), Se(
    qt(e.dynamic ? e.n("$-popup") : e.Transition),
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
            e.toolbar ? (p(), w(
              "div",
              {
                key: 0,
                class: v(e.n("toolbar"))
              },
              [
                L(e.$slots, "cancel", {}, () => [
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
                L(e.$slots, "title", {}, () => {
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
                L(e.$slots, "confirm", {}, () => [
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
                (p(!0), w(
                  De,
                  null,
                  qe(e.scrollColumns, (o) => (p(), w("div", {
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
                      (p(!0), w(
                        De,
                        null,
                        qe(o.column.texts, (r, a) => (p(), w("div", {
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
                        ], 14, jS))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, YS)
                  ], 42, FS))),
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
const Gf = ne({
  name: zS,
  components: {
    VarButton: mn,
    VarPopup: dt
  },
  inheritAttrs: !1,
  props: AS,
  setup(e) {
    const n = S([]), t = V(() => He(e.optionHeight)), o = V(() => He(e.optionCount)), r = V(() => o.value * t.value / 2 - t.value / 2), a = V(() => o.value * t.value), { prevY: i, moveY: l, dragging: s, startTouch: u, moveTouch: d, endTouch: c } = pr();
    let f = [];
    fe(
      () => e.columns,
      (B) => {
        n.value = e.cascade ? R(ts(B)) : U(ts(B));
        const { indexes: E } = O();
        f = [...E];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function m(B, E) {
      E.scrollEl = B;
    }
    function b(B) {
      y(e["onUpdate:show"], B);
    }
    function h(B) {
      const E = r.value - B.column.texts.length * t.value, x = t.value + r.value;
      B.translate = st(B.translate, E, x);
    }
    function g(B, E) {
      const x = Math.round((r.value - E) / t.value);
      return rm(x, B.column.texts);
    }
    function C(B) {
      return B.translate = r.value - B.index * t.value, B.translate;
    }
    function O() {
      const B = n.value.map((x) => x.column.texts[x.index]), E = n.value.map((x) => x.index);
      return {
        texts: B,
        indexes: E
      };
    }
    function T(B, E = 0) {
      C(B), B.duration = E;
    }
    function $(B, E, x) {
      B.translate += Math.abs(E / x) / 3e-3 * (E < 0 ? -1 : 1);
    }
    function k(B, E) {
      s.value || (B.index = E, B.scrolling = !0, T(B, Gu));
    }
    function M(B, E) {
      E.touching = !0, E.translate = Dr(E.scrollEl), u(B);
    }
    function P(B, E) {
      if (!E.touching)
        return;
      d(B), E.scrolling = !1, E.duration = 0, E.prevY = i.value, E.translate += l.value, h(E);
      const x = performance.now();
      x - E.momentumTime > qu && (E.momentumTime = x, E.momentumPrevY = E.translate);
    }
    function D(B) {
      c(), B.touching = !1, B.prevY = 0;
      const E = B.translate - B.momentumPrevY, x = performance.now() - B.momentumTime, q = Math.abs(E) >= US && x <= qu;
      q && $(B, E, x), B.index = g(B, B.translate);
      const Y = B.translate, X = C(B);
      B.scrolling = X !== Y, T(B, q ? HS : Gu), B.scrolling || W(B);
    }
    function I(B) {
      B.scrolling = !1, W(B);
    }
    function U(B) {
      return B.map((E, x) => {
        var q;
        const Y = Me(E) ? { texts: E } : E, X = {
          id: Xu++,
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
        return T(X), X;
      });
    }
    function R(B) {
      const E = [];
      return H(E, B, 0, !0), E;
    }
    function H(B, E, x, q = !1) {
      var Y;
      if (Me(E) && E.length) {
        const X = q && (Y = e.cascadeInitialIndexes[B.length]) != null ? Y : 0, ee = {
          id: Xu++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: r.value,
          index: X,
          columnIndex: x,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: E.map((he) => he[e.textKey])
          },
          columns: E,
          scrollEl: null,
          scrolling: !1
        };
        B.push(ee), T(ee), H(
          B,
          ee.columns[ee.index].children,
          x + 1,
          q
        );
      }
    }
    function ie(B) {
      n.value.splice(n.value.indexOf(B) + 1), H(
        n.value,
        B.columns[B.index].children,
        B.columnIndex + 1
      );
    }
    function G() {
      const { indexes: B } = O();
      return B.every((E, x) => E === f[x]);
    }
    function W(B) {
      const { cascade: E, onChange: x } = e;
      if (G() || (E && ie(B), n.value.some((ee) => ee.scrolling)))
        return;
      const { texts: Y, indexes: X } = O();
      f = [...X], y(x, Y, X);
    }
    function Z() {
      if (e.cascade) {
        const B = n.value.find((E) => E.scrolling);
        B && (B.index = g(B, Dr(B.scrollEl)), B.scrolling = !1, T(B), ie(B));
      } else
        n.value.forEach((B) => {
          B.index = g(B, Dr(B.scrollEl)), T(B);
        });
    }
    function _() {
      Z();
      const { texts: B, indexes: E } = O();
      f = [...E], y(e.onConfirm, B, E);
    }
    function j() {
      Z();
      const { texts: B, indexes: E } = O();
      f = [...E], y(e.onCancel, B, E);
    }
    return {
      pack: xe,
      optionHeight: t,
      optionCount: o,
      scrollColumns: n,
      columnHeight: a,
      center: r,
      Transition: Ye,
      n: LS,
      classes: RS,
      setScrollEl: m,
      handlePopupUpdateShow: b,
      handleTouchstart: M,
      handleTouchmove: P,
      handleTouchend: D,
      handleTransitionend: I,
      confirm: _,
      cancel: j,
      handleClick: k
    };
  }
});
Gf.render = WS;
var Do = Gf;
let cn;
function No(e) {
  return new Promise((n) => {
    No.close();
    const t = Me(e) ? { columns: e } : e, o = je(t);
    o.dynamic = !0, o.teleport = "body", cn = o;
    const { unmountInstance: r } = Xt(Do, o, {
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
No.Component = Do;
oe(Do);
oe(Do, No);
const UI = Do;
var Ua = No;
const qS = {
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
}, Zn = 100, Hn = 20, Ku = 2 * Math.PI * Hn, { name: GS, n: XS, classes: KS } = te("progress"), ZS = ["viewBox"], JS = { key: 0 }, QS = ["id"], _S = ["offset", "stop-color"], xS = ["d", "stroke-width", "stroke-dasharray"], eC = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function nC(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      e.mode === "linear" ? (p(), w(
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
              e.indeterminate ? (p(), w(
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
              )) : (p(), w(
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
          e.label ? (p(), w(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
            },
            [
              L(e.$slots, "default", {}, () => [
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
      e.mode === "circle" ? (p(), w(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
          style: F({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
        },
        [
          (p(), w("svg", {
            class: v(e.n("circle-svg")),
            viewBox: e.circleProps.viewBox
          }, [
            e.isPlainObject(e.color) ? (p(), w("defs", JS, [
              N("linearGradient", {
                id: e.id,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "0%"
              }, [
                (p(!0), w(
                  De,
                  null,
                  qe(e.linearGradientProgress, (t, o) => (p(), w("stop", {
                    key: o,
                    offset: t,
                    "stop-color": e.color[t]
                  }, null, 8, _S))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, QS)
            ])) : Q("v-if", !0),
            e.track ? (p(), w("path", {
              key: 1,
              class: v(e.n("circle-background")),
              d: e.circleProps.path,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              style: F({
                stroke: e.trackColor
              })
            }, null, 14, xS)) : Q("v-if", !0),
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
            }, null, 14, eC)
          ], 10, ZS)),
          e.label ? (p(), w(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
            },
            [
              L(e.$slots, "default", {}, () => [
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
const Xf = ne({
  name: GS,
  props: qS,
  setup(e) {
    const n = $d(), t = V(() => {
      const i = A(e.value), l = i > Zn ? Zn : i, s = i > Zn ? Zn : Math.round(i);
      return {
        width: `${l}%`,
        roundValue: `${s}%`
      };
    }), o = V(() => {
      const { size: i, lineWidth: l, value: s } = e, u = Hn / (1 - He(l) / He(i)) * 2, d = `0 0 ${u} ${u}`, c = A(s) > Zn ? Zn : Math.round(A(s)), f = `${(Zn - c) / Zn * Ku}`, m = He(l) / He(i) * u, b = 0, h = -Hn, g = 0, C = -2 * Hn, O = `M ${u / 2} ${u / 2} m ${b} ${h} a ${Hn} ${Hn} 
        0 1 1 ${g} ${-C} a ${Hn} ${Hn} 0 1 1 ${-g} ${C}`;
      return {
        strokeWidth: m,
        viewBox: d,
        strokeOffset: f,
        roundValue: `${c}%`,
        path: O
      };
    }), r = V(() => ro(e.color) ? `url(#${n.value})` : e.color), a = V(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: t,
      CIRCUMFERENCE: Ku,
      RADIUS: Hn,
      circleProps: o,
      progressColor: r,
      linearGradientProgress: a,
      n: XS,
      classes: KS,
      toSizeUnit: we,
      isPlainObject: ro
    };
  }
});
Xf.render = nC;
var Ml = Xf;
oe(Ml);
const HI = Ml;
var Ha = Ml;
const tC = {
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
var Zu = (e, n, t) => new Promise((o, r) => {
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
const { name: oC, n: Ju, classes: rC } = te("pull-refresh"), Qu = 150;
function aC(e, n) {
  const t = ae("var-icon");
  return p(), w(
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
      L(e.$slots, "default")
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Kf = ne({
  name: oC,
  components: { VarIcon: Ue },
  props: tC,
  setup(e) {
    const n = S(0), t = S(null), o = S(null), r = S(0), a = S("-125%"), i = S("arrow-down"), l = S("default"), s = S(!1), u = V(() => Math.abs(2 * n.value)), d = V(() => l.value === "success"), c = V(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = V(() => ({
      transform: `translate3d(0px, ${Qe(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    }));
    let m, b, h = 0, g = 0;
    fe(
      () => e.modelValue,
      (D) => {
        D === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, P();
        }, A(e.successDuration)));
      }
    ), rn(M), ut(t, "touchmove", $);
    function C(D) {
      return Zu(this, null, function* () {
        if (i.value !== D)
          return i.value = D, new Promise((I) => {
            window.setTimeout(I, Qu);
          });
      });
    }
    function O(D) {
      ("classList" in m ? m : document.body).classList[D](`${Ju()}--lock`);
    }
    function T(D) {
      if (n.value === 0) {
        const { width: I } = _e(o.value);
        n.value = -(I + I * 0.25);
      }
      h = D.touches[0].clientY, g = 0, b = ct(D.target);
    }
    function $(D) {
      if (!c.value || !b || b !== m && lo(b) > 0)
        return;
      const I = lo(m);
      if (I > 0)
        return;
      const U = I === 0;
      g = D.touches[0].clientY - h, U && g >= 0 && D.preventDefault(), l.value !== "pulling" && (l.value = "pulling", r.value = D.touches[0].clientY), U && vn(a.value) && a.value > n.value && O("add");
      const H = (D.touches[0].clientY - r.value) / 2 + n.value;
      a.value = H >= u.value ? u.value : H, C(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function k() {
      return Zu(this, null, function* () {
        c.value && (s.value = !0, A(a.value) >= u.value * 0.2 ? (yield C("refresh"), l.value = "loading", a.value = u.value * 0.3, y(e["onUpdate:modelValue"], !0), Fe(() => {
          y(e.onRefresh);
        }), O("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, A(e.animationDuration))), b = null);
      });
    }
    function M() {
      m = e.target ? Md(e.target, "PullRefresh") : ct(t.value);
    }
    function P() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, A(e.animationDuration));
    }
    return {
      ICON_TRANSITION: Qu,
      refreshStatus: l,
      freshNode: t,
      controlNode: o,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: Ju,
      classes: rC,
      touchStart: T,
      touchMove: $,
      touchEnd: k
    };
  }
});
Kf.render = aC;
var Bl = Kf;
oe(Bl);
const FI = Bl;
var Fa = Bl;
const iC = {
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
}, Zf = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function lC() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    Zf
  );
  return {
    length: t,
    radios: n,
    bindRadios: e
  };
}
function sC() {
  const { bindParent: e, parentProvider: n, index: t } = an(Zf);
  return {
    index: t,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: uC, n: dC, classes: cC } = te("radio");
function fC(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = Le("ripple"), i = Le("hover");
  return p(), w(
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
          Oe((p(), w(
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
              e.checked ? L(e.$slots, "checked-icon", { key: 0 }, () => [
                J(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  "var-radio-cover": "",
                  name: "radio-marked",
                  size: e.iconSize
                }, null, 8, ["class", "size"])
              ]) : L(e.$slots, "unchecked-icon", { key: 1 }, () => [
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
              L(e.$slots, "default")
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
const Jf = ne({
  name: uC,
  directives: { Ripple: Ke, Hover: In },
  components: {
    VarIcon: Ue,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  inheritAttrs: !1,
  props: iC,
  setup(e) {
    const n = io(e, "modelValue"), t = V(() => n.value === e.checkedValue), o = S(!1), { radioGroup: r, bindRadioGroup: a } = sC(), { hovering: i, handleHovering: l } = Wn(), { form: s, bindForm: u } = Mn(), {
      errorMessage: d,
      validateWithTrigger: c,
      validate: f,
      // expose
      resetValidation: m
    } = En(), b = {
      sync: O,
      validate: $,
      resetValidation: m,
      reset: T
    };
    y(a, b), y(u, b);
    function h(M) {
      Fe(() => {
        const { validateTrigger: P, rules: D, modelValue: I } = e;
        c(P, M, D, I);
      });
    }
    function g(M) {
      const { checkedValue: P, onChange: D } = e;
      r && n.value === P || (n.value = M, y(D, n.value), r == null || r.onToggle(P), h("onChange"));
    }
    function C(M) {
      const { disabled: P, readonly: D, uncheckedValue: I, checkedValue: U, onClick: R } = e;
      s != null && s.disabled.value || P || (y(R, M), !(s != null && s.readonly.value || D) && (o.value = !0, g(t.value ? I : U)));
    }
    function O(M) {
      const { checkedValue: P, uncheckedValue: D } = e;
      n.value = M === P ? P : D;
    }
    function T() {
      n.value = e.uncheckedValue, m();
    }
    function $() {
      return f(e.rules, e.modelValue);
    }
    function k(M) {
      const { uncheckedValue: P, checkedValue: D } = e;
      ![P, D].includes(M) && (M = t.value ? P : D), g(M);
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
      n: dC,
      classes: cC,
      handleClick: C,
      toggle: k,
      reset: T,
      validate: $,
      resetValidation: m
    };
  }
});
Jf.render = fC;
var Dl = Jf;
oe(Dl);
const YI = Dl;
var Ya = Dl;
const vC = {
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
}, { name: mC, n: hC, classes: pC } = te("radio-group");
function gC(e, n) {
  const t = ae("var-form-details");
  return p(), w(
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
          L(e.$slots, "default")
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
const Qf = ne({
  name: mC,
  components: { VarFormDetails: hn },
  props: vC,
  setup(e) {
    const { length: n, radios: t, bindRadios: o } = lC(), { bindForm: r } = Mn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = En(), u = V(() => a.value), d = {
      onToggle: m,
      validate: b,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    fe(() => e.modelValue, f), fe(() => n.value, f), y(r, d), o(d);
    function c(g) {
      Fe(() => {
        const { validateTrigger: C, rules: O, modelValue: T } = e;
        i(C, g, O, T);
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
    function h() {
      y(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: hC,
      classes: pC,
      reset: h,
      validate: b,
      resetValidation: s
    };
  }
});
Qf.render = gC;
var Nl = Qf;
oe(Nl);
const jI = Nl;
var ja = Nl;
const bC = {
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
}, { name: yC, n: Qt } = te("rate"), $C = ["onClick"];
function wC(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = Le("ripple"), i = Le("hover");
  return p(), w(
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
          (p(!0), w(
            De,
            null,
            qe(e.toNumber(e.count), (l) => Oe((p(), w("div", {
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
            ], 14, $C)), [
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
const _f = ne({
  name: yC,
  components: {
    VarIcon: Ue,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Ke, Hover: In },
  props: bC,
  setup(e) {
    const n = S(-1), { form: t, bindForm: o } = Mn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = En(), { hovering: s } = Wn();
    let u = Number(e.modelValue);
    y(o, {
      reset: T,
      validate: h,
      resetValidation: l
    });
    function c($) {
      const { count: k, gap: M } = e;
      return {
        color: m($).color,
        marginRight: $ !== A(k) ? we(M) : 0
      };
    }
    function f($) {
      const { name: k, color: M } = m($);
      return {
        [Qt("content")]: !0,
        [Qt("--disabled")]: (t == null ? void 0 : t.disabled.value) || e.disabled,
        [Qt("--error")]: r.value,
        [Qt("--primary")]: k !== e.emptyIcon && !M
      };
    }
    function m($) {
      const { modelValue: k, disabled: M, disabledColor: P, color: D, half: I, emptyColor: U, icon: R, halfIcon: H, emptyIcon: ie } = e;
      let G = D;
      return (M || t != null && t.disabled.value) && (G = P), $ <= A(k) ? { color: G, name: R } : I && $ <= A(k) + 0.5 ? { color: G, name: H } : { color: M || t != null && t.disabled.value ? P : U, name: ie };
    }
    function b($, k) {
      const { half: M, clearable: P } = e, { offsetWidth: D } = k.target;
      M && k.offsetX <= Math.floor(D / 2) && ($ -= 0.5), u === $ && P && ($ = 0), u = $, y(e["onUpdate:modelValue"], $);
    }
    function h() {
      return i(e.rules, A(e.modelValue));
    }
    function g() {
      return Fe(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function C($, k) {
      const { readonly: M, disabled: P, onChange: D } = e;
      M || P || t != null && t.disabled.value || t != null && t.readonly.value || (b($, k), y(D, $), g());
    }
    function O($) {
      return (k) => {
        n.value = $, s.value = k;
      };
    }
    function T() {
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
      handleClick: C,
      createHoverHandler: O,
      reset: T,
      validate: h,
      resetValidation: l,
      toSizeUnit: we,
      toNumber: A,
      n: Qt
    };
  }
});
_f.render = wC;
var Vl = _f;
oe(Vl);
const WI = Vl;
var Wa = Vl;
const SC = (e) => (ht(""), e = e(), pt(), e), CC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, kC = /* @__PURE__ */ SC(() => /* @__PURE__ */ N(
  "path",
  { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
  null,
  -1
  /* HOISTED */
)), PC = [
  kC
];
function OC(e, n) {
  return p(), w("svg", CC, PC);
}
const xf = ne({});
xf.render = OC;
var TC = xf;
const IC = (e) => (ht(""), e = e(), pt(), e), EC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, MC = /* @__PURE__ */ IC(() => /* @__PURE__ */ N(
  "path",
  { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
  null,
  -1
  /* HOISTED */
)), BC = [
  MC
];
function DC(e, n) {
  return p(), w("svg", EC, BC);
}
const ev = ne({});
ev.render = DC;
var NC = ev;
const VC = (e) => (ht(""), e = e(), pt(), e), AC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, zC = /* @__PURE__ */ VC(() => /* @__PURE__ */ N(
  "path",
  { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
  null,
  -1
  /* HOISTED */
)), LC = [
  zC
];
function RC(e, n) {
  return p(), w("svg", AC, LC);
}
const nv = ne({});
nv.render = RC;
var UC = nv;
const { n: HC, classes: FC } = te("result");
function YC(e, n) {
  return p(), w(
    De,
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
const tv = ne({
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
      n: HC,
      classes: FC,
      toNumber: A
    };
  }
});
tv.render = YC;
var jC = tv;
const WC = (e) => (ht(""), e = e(), pt(), e), qC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, GC = /* @__PURE__ */ WC(() => /* @__PURE__ */ N(
  "path",
  { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
  null,
  -1
  /* HOISTED */
)), XC = [
  GC
];
function KC(e, n) {
  return p(), w("svg", qC, XC);
}
const ov = ne({});
ov.render = KC;
var ZC = ov;
const JC = (e) => (ht(""), e = e(), pt(), e), QC = { viewBox: "-4 -4 32 32" }, _C = /* @__PURE__ */ JC(() => /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), xC = [
  _C
];
function ek(e, n) {
  return p(), w("svg", QC, xC);
}
const rv = ne({});
rv.render = ek;
var nk = rv;
const tk = {
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
}, { name: ok, n: rk, classes: ak } = te("result");
function ik(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      L(e.$slots, "image", {}, () => [
        e.type ? (p(), w(
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
                (p(), Se(qt(e.type), {
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
      L(e.$slots, "title", {}, () => [
        e.title ? (p(), w(
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
      L(e.$slots, "description", {}, () => [
        e.description ? (p(), w(
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
      e.$slots.footer ? (p(), w(
        "div",
        {
          key: 0,
          class: v(e.n("footer"))
        },
        [
          L(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const av = ne({
  name: ok,
  components: {
    Info: TC,
    Success: jC,
    Warning: UC,
    Error: NC,
    Question: ZC,
    Empty: nk
  },
  props: tk,
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
      n: rk,
      classes: ak,
      toNumber: A,
      toPxNum: He
    };
  }
});
av.render = ik;
var Al = av;
oe(Al);
const qI = Al;
var qa = Al;
const lk = {
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
}, { name: sk, n: uk, classes: dk } = te("row");
function ck(e, n) {
  return p(), w(
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
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const iv = ne({
  name: sk,
  props: lk,
  setup(e) {
    const n = V(
      () => Me(e.gutter) ? e.gutter.map((s) => He(s) / 2) : [0, He(e.gutter) / 2]
    ), { cols: t, bindCols: o, length: r } = i0(), a = { computePadding: i };
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
      n: uk,
      classes: dk,
      handleClick: l,
      padStartFlex: er
    };
  }
});
iv.render = ck;
var zl = iv;
oe(zl);
const GI = zl;
var Ga = zl, fk = Object.defineProperty, _u = Object.getOwnPropertySymbols, vk = Object.prototype.hasOwnProperty, mk = Object.prototype.propertyIsEnumerable, xu = (e, n, t) => n in e ? fk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, hk = (e, n) => {
  for (var t in n || (n = {}))
    vk.call(n, t) && xu(e, t, n[t]);
  if (_u)
    for (var t of _u(n))
      mk.call(n, t) && xu(e, t, n[t]);
  return e;
};
const pk = hk({
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
}, en(yl, [
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
])), { name: gk, n: bk, classes: yk } = te("select"), $k = { key: 1 };
function wk(e, n) {
  const t = ae("var-chip"), o = ae("var-icon"), r = ae("var-field-decorator"), a = ae("var-menu"), i = ae("var-form-details");
  return p(), w(
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
              L(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ]),
        default: ve(() => [
          J(
            r,
            at(Co({
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
                L(e.$slots, "append-icon")
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
                        e.isEmptyModelValue ? Q("v-if", !0) : L(e.$slots, "selected", { key: 0 }, () => [
                          e.multiple ? (p(), w(
                            De,
                            { key: 0 },
                            [
                              e.chip ? (p(), w(
                                "div",
                                {
                                  key: 0,
                                  class: v(e.n("chips"))
                                },
                                [
                                  (p(!0), w(
                                    De,
                                    null,
                                    qe(e.labels, (l) => (p(), Se(t, {
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
                              )) : (p(), w(
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
                          )) : (p(), w(
                            "span",
                            $k,
                            re(e.label),
                            1
                            /* TEXT */
                          ))
                        ])
                      ],
                      2
                      /* CLASS */
                    ),
                    e.enableCustomPlaceholder ? (p(), w(
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
                    L(e.$slots, "arrow-icon", { focus: e.showMenu }, () => [
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
                  L(e.$slots, "prepend-icon")
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
const lv = ne({
  name: gk,
  components: {
    VarIcon: Ue,
    VarMenu: bo,
    VarChip: ar,
    VarFieldDecorator: If,
    VarFormDetails: hn
  },
  props: pk,
  setup(e) {
    const n = S(!1), t = S(!1), o = V(() => e.multiple), r = V(() => e.focusColor), a = S(""), i = S([]), l = V(() => Fn(e.modelValue)), s = V(() => e.disabled || e.readonly ? "" : "pointer"), u = S(0), { bindForm: d, form: c } = Mn(), { length: f, options: m, bindOptions: b } = cS(), {
      errorMessage: h,
      validateWithTrigger: g,
      validate: C,
      // expose
      resetValidation: O
    } = En(), T = S(null), $ = V(() => e.variant === "outlined" ? "bottom" : "cover-top"), k = V(() => {
      const { hint: Y, blurColor: X, focusColor: ee } = e;
      if (!Y)
        return h.value ? "var(--field-decorator-error-color)" : n.value ? ee || "var(--field-decorator-focus-color)" : X || "var(--field-decorator-blur-color)";
    }), M = V(() => !e.hint && Fn(e.modelValue)), P = {
      multiple: o,
      focusColor: r,
      computeLabel: D,
      onSelect: G,
      reset: q,
      validate: x,
      resetValidation: O
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
        i.value = ee.map(R);
      }
      !Y && !Fn(X) && (a.value = R(X)), !Y && Fn(X) && (a.value = "");
    }
    function I(Y) {
      Fe(() => {
        const { validateTrigger: X, rules: ee, modelValue: he } = e;
        g(X, Y, ee, he);
      });
    }
    function U({ value: Y, label: X }) {
      return Y.value != null ? Y.value : X.value;
    }
    function R(Y) {
      var X;
      let ee = m.find(({ value: he }) => he.value === Y);
      return ee || (ee = m.find(({ label: he }) => he.value === Y)), (X = ee == null ? void 0 : ee.label.value) != null ? X : "";
    }
    function H() {
      const { disabled: Y, readonly: X, onFocus: ee } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || Y || X || (u.value = He(e.offsetY), n.value = !0, y(ee), I("onFocus"));
    }
    function ie() {
      const { disabled: Y, readonly: X, onBlur: ee } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || Y || X || (E(), y(ee), I("onBlur"));
    }
    function G(Y) {
      const { disabled: X, readonly: ee, multiple: he, onChange: ke } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || X || ee)
        return;
      const Re = he ? m.filter(({ selected: le }) => le.value).map(U) : U(Y);
      y(e["onUpdate:modelValue"], Re), y(ke, Re), I("onChange"), he || E();
    }
    function W() {
      const { disabled: Y, readonly: X, multiple: ee, clearable: he, onClear: ke } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || Y || X || !he)
        return;
      const Re = ee ? [] : void 0;
      y(e["onUpdate:modelValue"], Re), y(ke, Re), I("onClear");
    }
    function Z(Y) {
      const { disabled: X, onClick: ee } = e;
      c != null && c.disabled.value || X || (y(ee, Y), I("onClick"));
    }
    function _(Y) {
      const { disabled: X, readonly: ee, modelValue: he, onClose: ke } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || X || ee)
        return;
      const Re = he, le = m.find(({ label: Ce }) => Ce.value === Y), de = Re.filter((Ce) => {
        var Ve;
        return Ce !== ((Ve = le.value.value) != null ? Ve : le.label.value);
      });
      y(e["onUpdate:modelValue"], de), y(ke, de), I("onClose");
    }
    function j() {
      const { multiple: Y, modelValue: X } = e;
      if (Y) {
        const ee = X;
        m.forEach((he) => he.sync(ee.includes(U(he))));
      } else
        m.forEach((ee) => ee.sync(X === U(ee)));
      D();
    }
    function B() {
      u.value = He(e.offsetY), n.value = !0, t.value = !0;
    }
    function E() {
      n.value = !1, t.value = !1;
    }
    function x() {
      return C(e.rules, e.modelValue);
    }
    function q() {
      y(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    }
    return {
      offsetY: u,
      isFocus: n,
      showMenu: t,
      errorMessage: h,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      label: a,
      labels: i,
      isEmptyModelValue: l,
      menuEl: T,
      placement: $,
      cursor: s,
      placeholderColor: k,
      enableCustomPlaceholder: M,
      n: bk,
      classes: yk,
      handleFocus: H,
      handleBlur: ie,
      handleClear: W,
      handleClick: Z,
      handleClose: _,
      reset: q,
      validate: x,
      resetValidation: O,
      focus: B,
      blur: E
    };
  }
});
lv.render = wk;
var Ll = lv;
oe(Ll);
const XI = Ll;
var Xa = Ll;
const Sk = {
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
}, { name: Ck, n: kk, classes: Pk } = te("skeleton");
function Ok(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? Q("v-if", !0) : (p(), w(
        "div",
        {
          key: 0,
          class: v(e.n("data"))
        },
        [
          L(e.$slots, "default")
        ],
        2
        /* CLASS */
      )),
      e.loading && !e.fullscreen ? (p(), w(
        "div",
        {
          key: 1,
          class: v(e.n("content"))
        },
        [
          e.card ? (p(), w(
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
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), w(
            "div",
            {
              key: 1,
              class: v(e.n("article"))
            },
            [
              e.avatar ? (p(), w(
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
              e.title || e.toNumber(e.rows) > 0 ? (p(), w(
                "div",
                {
                  key: 1,
                  class: v(e.n("section"))
                },
                [
                  e.title ? (p(), w(
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
                  (p(!0), w(
                    De,
                    null,
                    qe(e.toNumber(e.rows), (t, o) => (p(), w(
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
      e.loading && e.fullscreen ? (p(), w(
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
const sv = ne({
  name: Ck,
  props: Sk,
  setup: () => ({
    n: kk,
    classes: Pk,
    toSizeUnit: we,
    toNumber: A
  })
});
sv.render = Ok;
var Rl = sv;
oe(Rl);
const KI = Rl;
var Ka = Rl, Ge = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(Ge || {});
const Tk = {
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
}, { name: Ik, n: ed, classes: Ek } = te("slider"), Mk = ["onTouchstart"];
function Bk(e, n) {
  const t = ae("var-hover-overlay"), o = ae("var-form-details"), r = Le("hover");
  return p(), w(
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
          (p(!0), w(
            De,
            null,
            qe(e.thumbList, (a) => (p(), w("div", {
              class: v(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: F(e.thumbStyle(a)),
              onTouchstart: On((i) => e.start(i, a.enumValue), ["stop"])
            }, [
              L(e.$slots, "button", {
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
            ], 46, Mk))),
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
const uv = ne({
  name: Ik,
  components: {
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  directives: { Hover: In },
  props: Tk,
  setup(e) {
    const n = S(0), t = S(null), o = S(!1), r = V(() => A(e.max) - A(e.min)), a = V(() => n.value / r.value * A(e.step)), i = V(() => e.disabled || (d == null ? void 0 : d.disabled.value)), l = V(() => e.readonly || (d == null ? void 0 : d.readonly.value)), s = V(() => e.direction === "vertical"), { bindForm: u, form: d } = Mn(), { errorMessage: c, validateWithTrigger: f, validate: m, resetValidation: b } = En(), { hovering: h, handleHovering: g } = Wn(), { hovering: C, handleHovering: O } = Wn(), T = V(() => {
      const { modelValue: le, range: de } = e;
      let Ce = [];
      return de && Me(le) ? Ce = [
        {
          value: G(le[0]),
          enumValue: Ge.First,
          text: W(le[0]),
          hovering: xt(h),
          handleHovering: g
        },
        {
          value: G(le[1]),
          enumValue: Ge.Second,
          text: W(le[1]),
          hovering: xt(C),
          handleHovering: O
        }
      ] : vn(le) && (Ce = [
        {
          value: G(le),
          enumValue: Ge.First,
          text: W(le),
          hovering: xt(h),
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
    }), k = je({
      [Ge.First]: I(),
      [Ge.Second]: I()
    });
    let M;
    y(u, {
      reset: Re,
      validate: D,
      resetValidation: b
    }), fe([() => e.modelValue, () => e.step], ([le, de]) => {
      !ee() || !he() || o.value || ke(le, A(de));
    }), fe(n, () => ke()), rn(() => {
      !ee() || !he() || (n.value = t.value[s.value ? "offsetHeight" : "offsetWidth"]);
    }), mr(() => {
      E();
    });
    function D() {
      return m(e.rules, e.modelValue);
    }
    function I() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function U() {
      return Fe(() => f(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function R(le) {
      const de = le.currentTarget;
      return de ? s.value ? n.value - (le.clientY - _e(de).top) : le.clientX - zm(de) : 0;
    }
    function H(le) {
      return {
        [s.value ? "bottom" : "left"]: `${le.value}%`,
        zIndex: k[le.enumValue].active ? 1 : void 0
      };
    }
    function ie(le) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : k[le].active;
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
    function _(le, de) {
      let Ce = [];
      const { step: Ve, range: se, modelValue: pe, onChange: Be, min: We } = e, ue = A(Ve), $e = Math.round(le / a.value), be = $e * ue + A(We), Ee = k[de].percentValue * ue + A(We);
      if (k[de].percentValue = $e, se && Me(pe) && (Ce = de === Ge.First ? [be, pe[1]] : [pe[0], be]), Ee !== be) {
        const Ie = se ? Ce.map((Xe) => W(Xe)) : W(be);
        y(Be, Ie), y(e["onUpdate:modelValue"], Ie), U();
      }
    }
    function j(le) {
      if (!e.range)
        return Ge.First;
      const de = k[Ge.First].percentValue * a.value, Ce = k[Ge.Second].percentValue * a.value, Ve = Math.abs(le - de), se = Math.abs(le - Ce);
      return Ve <= se ? Ge.First : Ge.Second;
    }
    function B() {
      document.addEventListener("touchmove", q, { passive: !1 }), document.addEventListener("touchend", Y), document.addEventListener("touchcancel", Y);
    }
    function E() {
      document.removeEventListener("touchmove", q), document.removeEventListener("touchend", Y), document.removeEventListener("touchcancel", Y);
    }
    function x(le, de) {
      if (n.value || (n.value = t.value.offsetWidth), i.value || (k[de].active = !0), M = de, B(), i.value || l.value)
        return;
      y(e.onStart), o.value = !0;
      const { clientX: Ce, clientY: Ve } = le.touches[0];
      k[de].startPosition = s.value ? Ve : Ce;
    }
    function q(le) {
      if (le.preventDefault(), i.value || l.value || !o.value)
        return;
      const { startPosition: de, currentOffset: Ce } = k[M], { clientX: Ve, clientY: se } = le.touches[0];
      let pe = (s.value ? de - se : Ve - de) + Ce;
      pe <= 0 ? pe = 0 : pe >= n.value && (pe = n.value), _(pe, M);
    }
    function Y() {
      E();
      const { range: le, modelValue: de, onEnd: Ce, step: Ve, min: se } = e;
      if (i.value || (k[M].active = !1), i.value || l.value)
        return;
      let pe = [];
      k[M].currentOffset = k[M].percentValue * a.value;
      const Be = k[M].percentValue * A(Ve) + A(se);
      le && Me(de) && (pe = M === Ge.First ? [Be, de[1]] : [de[0], Be]), y(Ce, le ? pe : Be), o.value = !1;
    }
    function X(le) {
      if (i.value || l.value || le.target.closest(`.${ed("thumb")}`))
        return;
      const de = R(le), Ce = j(de);
      M = Ce, _(de, Ce), Y();
    }
    function ee() {
      const le = A(e.step);
      return isNaN(le) ? (gs("Slider", 'type of prop "step" should be Number'), !1) : le < 0 ? (gs("Slider", '"step" should be > 0'), !1) : !0;
    }
    function he() {
      const { range: le, modelValue: de } = e;
      return le && !Me(de) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !le && Me(de) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : le && Me(de) && de.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function ke(le = e.modelValue, de = A(e.step)) {
      const Ce = (Ve) => {
        const { min: se, max: pe } = e;
        return Ve < A(se) ? 0 : Ve > A(pe) ? r.value / de : (Ve - A(se)) / de;
      };
      e.range && Me(le) ? (k[Ge.First].percentValue = Ce(le[0]), k[Ge.First].currentOffset = k[Ge.First].percentValue * a.value, k[Ge.Second].percentValue = Ce(le[1]), k[Ge.Second].currentOffset = k[Ge.Second].percentValue * a.value) : vn(le) && (k[Ge.First].currentOffset = Ce(le) * a.value);
    }
    function Re() {
      const le = e.range ? [0, 0] : 0;
      y(e["onUpdate:modelValue"], le), b();
    }
    return {
      Thumbs: Ge,
      sliderEl: t,
      getFillStyle: $,
      isDisabled: i,
      isVertical: s,
      errorMessage: c,
      thumbsProps: k,
      thumbList: T,
      n: ed,
      classes: Ek,
      thumbStyle: H,
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
uv.render = Bk;
var Ul = uv;
oe(Ul);
const ZI = Ul;
var Za = Ul, Dk = Object.defineProperty, Nk = Object.defineProperties, Vk = Object.getOwnPropertyDescriptors, nd = Object.getOwnPropertySymbols, Ak = Object.prototype.hasOwnProperty, zk = Object.prototype.propertyIsEnumerable, td = (e, n, t) => n in e ? Dk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Lk = (e, n) => {
  for (var t in n || (n = {}))
    Ak.call(n, t) && td(e, t, n[t]);
  if (nd)
    for (var t of nd(n))
      zk.call(n, t) && td(e, t, n[t]);
  return e;
}, Rk = (e, n) => Nk(e, Vk(n));
const dv = {
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
  loadingType: en(tt, "type"),
  loadingSize: en(tt, "size"),
  loadingRadius: en(tt, "radius"),
  loadingColor: Rk(Lk({}, en(tt, "color")), {
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
}, { n: Uk, classes: Hk } = te("snackbar"), Fk = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Yk(e, n) {
  const t = ae("var-icon"), o = ae("var-loading");
  return Oe((p(), w(
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
              L(e.$slots, "default", {}, () => [
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
              e.iconName ? (p(), Se(t, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : Q("v-if", !0),
              e.type === "loading" ? (p(), Se(o, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : Q("v-if", !0),
              L(e.$slots, "icon")
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
              L(e.$slots, "action")
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
    [Ln, e.show]
  ]);
}
const cv = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Lt,
    VarIcon: Ue
  },
  props: dv,
  setup(e) {
    const n = S(null), { zIndex: t } = Oo(() => e.show, 1);
    gr(
      () => e.show,
      () => e.lockScroll
    );
    const o = V(() => e.type === "loading" || e.forbidClick), r = V(() => e.type ? Fk[e.type] : ""), a = () => {
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
      SNACKBAR_TYPE: mv,
      n: Uk,
      classes: Hk,
      zIndex: t,
      iconName: r,
      isForbidClick: o
    };
  }
});
cv.render = Yk;
var fv = cv;
const { name: jk, n: Wk } = te("snackbar");
function qk(e, n) {
  const t = ae("var-snackbar-core");
  return p(), Se(Xn, {
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
            L(e.$slots, "icon")
          ]),
          action: ve(() => [
            L(e.$slots, "action")
          ]),
          default: ve(() => [
            L(e.$slots, "default", {}, () => [
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
const vv = ne({
  name: jk,
  components: { VarSnackbarCore: fv },
  props: dv,
  setup() {
    const { disabled: e } = Kt();
    return {
      disabled: e,
      n: Wk
    };
  }
});
vv.render = qk;
var Er = vv, Gk = Object.defineProperty, od = Object.getOwnPropertySymbols, Xk = Object.prototype.hasOwnProperty, Kk = Object.prototype.propertyIsEnumerable, rd = (e, n, t) => n in e ? Gk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, yo = (e, n) => {
  for (var t in n || (n = {}))
    Xk.call(n, t) && rd(e, t, n[t]);
  if (od)
    for (var t of od(n))
      Kk.call(n, t) && rd(e, t, n[t]);
  return e;
};
const mv = ["loading", "success", "warning", "info", "error"];
let ad = 0, Ja = !1, hv, Yt = !1;
const pv = {
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
let Pn = je([]), Hl = pv;
const Zk = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Fr = (e) => () => Gt(e) ? e() : e, Jk = {
  setup() {
    return () => {
      const e = Pn.map(({
        id: n,
        reactiveSnackOptions: t,
        _update: o
      }) => {
        const r = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto"), Yt && (t.position = "top");
        const i = yo({
          position: Yt ? "relative" : "absolute"
        }, tP(t.position)), {
          content: l,
          icon: s,
          action: u
        } = t, d = {
          default: Fr(l),
          icon: Fr(s),
          action: Fr(u)
        };
        return J(fv, Ne(t, {
          key: n,
          style: i,
          "data-id": n,
          _update: o,
          show: t.show,
          "onUpdate:show": (c) => t.show = c
        }), d);
      });
      return J(qv, Ne(Zk, {
        style: {
          zIndex: wn.zIndex
        },
        onAfterEnter: Qk,
        onAfterLeave: _k
      }), {
        default: () => [e]
      });
    };
  }
}, Gn = function(e) {
  const n = eP(e), t = je(yo(yo({}, Hl), n));
  t.show = !0, Ja || (Ja = !0, hv = Xt(Jk).unmountInstance);
  const {
    length: o
  } = Pn, r = {
    id: ad++,
    reactiveSnackOptions: t
  };
  if (o === 0 || Yt)
    xk(r);
  else {
    const a = `update-${ad}`;
    nP(t, a);
  }
  return {
    clear() {
      !Yt && Pn.length ? Pn[0].reactiveSnackOptions.show = !1 : t.show = !1;
    }
  };
};
mv.forEach((e) => {
  Gn[e] = (n) => (ro(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Gn(n));
});
Gn.allowMultiple = function(e = !1) {
  e !== Yt && (Pn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Yt = e);
};
Gn.clear = function() {
  Pn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Gn.setDefaultOptions = function(e) {
  Hl = e;
};
Gn.resetDefaultOptions = function() {
  Hl = pv;
};
function Qk(e) {
  const n = e.getAttribute("data-id"), t = Pn.find((o) => o.id === A(n));
  t && y(t.reactiveSnackOptions.onOpened);
}
function _k(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), t = Pn.find((r) => r.id === A(n));
  t && (t.animationEnd = !0, y(t.reactiveSnackOptions.onClosed)), Pn.every((r) => r.animationEnd) && (y(hv), Pn = je([]), Ja = !1);
}
function xk(e) {
  Pn.push(e);
}
function eP(e = {}) {
  return Qe(e) ? {
    content: e
  } : e;
}
function nP(e, n) {
  const [t] = Pn;
  t.reactiveSnackOptions = yo(yo({}, t.reactiveSnackOptions), e), t._update = n;
}
function tP(e = "top") {
  return e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Gn.Component = Er;
oe(Er);
oe(Er, Gn);
const JI = Er;
var Qa = Gn;
const oP = {
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
function rP(e, n, t) {
  const { direction: o, justify: r, index: a, lastIndex: i } = t;
  let l = "0";
  return o === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${$n(e)} ${n} ${$n(e)} 0` : l = `${$n(e)} 0` : r === "space-around" ? l = `${$n(e)} ${$n(n)}` : r === "space-between" && (a === 0 ? l = `${$n(e)} ${$n(n)} ${$n(e)} 0` : a === i ? l = `${$n(e)} 0 ${$n(e)} ${$n(n)}` : l = `${$n(e)} ${$n(n)}`)), o === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const aP = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: iP,
  n: Yr,
  classes: lP
} = te("space");
function sP(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Me(e) ? e.map(we) : [we(e), we(e)];
}
var Fl = ne({
  name: iP,
  props: oP,
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
      const [d, c] = sP(s, aP(s));
      u = wd(u);
      const f = u.length - 1, m = u.map((b, h) => {
        const g = rP(d, c, {
          direction: l,
          justify: r,
          index: h,
          lastIndex: f
        });
        return J("div", {
          style: {
            margin: g
          }
        }, [b]);
      });
      return J("div", {
        class: lP(Yr(), Yr("$--box"), [o, Yr("--inline")]),
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
oe(Fl);
const QI = Fl;
var _a = Fl;
const uP = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: String,
  inactiveIcon: String
}, gv = Symbol("STEPS_BIND_STEP_KEY");
function dP() {
  const { bindChildren: e, childProviders: n } = ln(gv);
  return {
    step: n,
    bindStep: e
  };
}
function cP() {
  const { parentProvider: e, index: n, bindParent: t } = an(gv);
  return t || Tn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: t
  };
}
const { name: fP, n: vP, classes: mP } = te("step"), hP = { key: 3 };
function pP(e, n) {
  const t = ae("var-icon");
  return p(), w(
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
              e.isActive ? (p(), Se(t, {
                key: 0,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon
              }, null, 8, ["class", "name"])) : e.isCurrent && e.currentIcon ? (p(), Se(t, {
                key: 1,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon
              }, null, 8, ["class", "name"])) : e.inactiveIcon ? (p(), Se(t, {
                key: 2,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon
              }, null, 8, ["class", "name"])) : (p(), w(
                "span",
                hP,
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
              L(e.$slots, "default")
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
const bv = ne({
  name: fP,
  components: { VarIcon: Ue },
  props: uP,
  setup() {
    const { index: e, steps: n, bindSteps: t } = cP(), { active: o, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = V(() => o.value === e.value), u = V(() => e.value !== -1 && A(o.value) > e.value);
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
      n: vP,
      classes: mP,
      click: c
    };
  }
});
bv.render = pP;
var Yl = bv;
oe(Yl);
const _I = Yl;
var xa = Yl;
const gP = {
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
}, { name: bP, n: yP } = te("steps");
function $P(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n()),
      style: F({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const yv = ne({
  name: bP,
  props: gP,
  setup(e) {
    const n = V(() => e.active), t = V(() => e.activeColor), o = V(() => e.inactiveColor), r = V(() => e.direction), { bindStep: a } = dP();
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
    return { n: yP };
  }
});
yv.render = $P;
var jl = yv;
oe(jl);
const xI = jl;
var ei = jl;
const wP = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: SP, n: CP } = te("style-provider"), kP = ne({
  name: SP,
  props: wP,
  setup(e, { slots: n }) {
    return () => vd(
      e.tag,
      {
        class: CP(),
        style: zd(e.styleVars)
      },
      y(n.default)
    );
  }
});
var Mr = kP;
const jr = [];
function Wl(e) {
  jr.forEach((t) => document.documentElement.style.removeProperty(t)), jr.length = 0;
  const n = zd(e ?? {});
  Object.entries(n).forEach(([t, o]) => {
    document.documentElement.style.setProperty(t, o), jr.push(t);
  });
}
Wl.Component = Mr;
oe(Mr);
oe(Mr, Wl);
const eE = Mr;
var ni = Wl;
const PP = {
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
}, { name: OP, n: TP, classes: IP } = te("switch"), EP = (e) => (ht(""), e = e(), pt(), e), MP = /* @__PURE__ */ EP(() => /* @__PURE__ */ N(
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
)), BP = [
  MP
];
function DP(e, n) {
  const t = ae("var-hover-overlay"), o = ae("var-form-details"), r = Le("ripple"), a = Le("hover");
  return Oe((p(), w(
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
          Oe((p(), w(
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
                  e.loading ? (p(), w(
                    "span",
                    {
                      key: 0,
                      class: v(e.n("loading")),
                      style: F({
                        width: e.radius,
                        height: e.radius
                      })
                    },
                    BP,
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
const $v = ne({
  name: OP,
  components: {
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Ke, Hover: In },
  props: PP,
  setup(e) {
    const { bindForm: n, form: t } = Mn(), { errorMessage: o, validateWithTrigger: r, validate: a, resetValidation: i } = En(), { hovering: l, handleHovering: s } = Wn(), u = V(() => {
      const { size: C, modelValue: O, color: T, closeColor: $, loadingColor: k, activeValue: M } = e;
      return {
        handle: {
          width: sn(C),
          height: sn(C),
          backgroundColor: O === M ? T : $,
          color: k
        },
        ripple: {
          left: O === M ? sn(C, 0.5) : `-${sn(C, 0.5)}`,
          color: O === M ? T : $ || "#999",
          width: sn(C, 2),
          height: sn(C, 2)
        },
        track: {
          height: sn(C, 0.72),
          width: sn(C, 1.9),
          borderRadius: sn(C, 2 / 3),
          filter: O === M || o != null && o.value ? void 0 : "brightness(.6)",
          backgroundColor: O === M ? T : $
        },
        switch: {
          height: sn(C, 1.2),
          width: sn(C, 2)
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
    function b(C) {
      const {
        onClick: O,
        onChange: T,
        disabled: $,
        loading: k,
        readonly: M,
        modelValue: P,
        activeValue: D,
        inactiveValue: I,
        "onUpdate:modelValue": U
      } = e;
      if (y(O, C), $ || k || M || t != null && t.disabled.value || t != null && t.readonly.value)
        return;
      const R = P === D ? I : D;
      y(T, R), y(U, R), m();
    }
    function h(C) {
      e.disabled || t != null && t.disabled.value || s(C);
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
      n: TP,
      classes: IP,
      multiplySizeUnit: sn,
      switchActive: b,
      hover: h
    };
  }
});
$v.render = DP;
var ql = $v;
oe(ql);
const nE = ql;
var ti = ql;
const NP = {
  name: [String, Number],
  disabled: Boolean,
  onClick: z()
}, wv = Symbol("TABS_BIND_TAB_KEY");
function VP() {
  const { childProviders: e, bindChildren: n, length: t } = ln(wv);
  return {
    length: t,
    tabList: e,
    bindTabList: n
  };
}
function AP() {
  const { parentProvider: e, bindParent: n, index: t } = an(wv);
  return n || Tn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: t,
    tabs: e,
    bindTabs: n
  };
}
const { name: zP, n: jo, classes: LP } = te("tab");
function RP(e, n) {
  const t = Le("ripple");
  return Oe((p(), w(
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
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: e.disabled }]
  ]);
}
const Sv = ne({
  name: zP,
  directives: { Ripple: Ke },
  props: NP,
  setup(e) {
    const n = S(null), t = V(() => n.value), o = V(() => e.name), r = V(() => e.disabled), { index: a, tabs: i, bindTabs: l } = AP(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: m, resize: b } = i, h = {
      name: o,
      index: a,
      disabled: r,
      element: t
    };
    l(h), fe(() => [e.name, e.disabled], b);
    function g() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function C() {
      return e.disabled ? f.value : g() ? d.value : c.value;
    }
    function O() {
      return e.disabled ? jo("$-tab--disabled") : g() ? jo("$-tab--active") : jo("$-tab--inactive");
    }
    function T($) {
      const { disabled: k, name: M, onClick: P } = e;
      k || (y(P, M ?? a.value, $), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: m,
      n: jo,
      classes: LP,
      computeColorStyle: C,
      computeColorClass: O,
      handleClick: T
    };
  }
});
Sv.render = RP;
var Gl = Sv;
oe(Gl);
const tE = Gl;
var oi = Gl;
const UP = {
  name: [String, Number]
}, { name: HP, n: FP, classes: YP } = te("tab-item");
function jP(e, n) {
  const t = ae("var-swipe-item");
  return p(), Se(t, {
    class: v(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ve(() => [
      L(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const Cv = ne({
  name: HP,
  components: { VarSwipeItem: ho },
  props: UP,
  setup(e) {
    const n = S(!1), t = V(() => e.name), { index: o, bindTabsItems: r } = Yw(), { bindLists: a } = jw(), i = {
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
      n: FP,
      classes: YP
    };
  }
});
Cv.render = jP;
var Xl = Cv;
oe(Xl);
const oE = Xl;
var ri = Xl;
const WP = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, { name: qP, n: GP, classes: XP } = te("table");
function KP(e, n) {
  return p(), w(
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
              L(e.$slots, "default")
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        2
        /* CLASS */
      ),
      e.$slots.footer ? (p(), w(
        "div",
        {
          key: 0,
          class: v(e.n("footer"))
        },
        [
          L(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const kv = ne({
  name: qP,
  props: WP,
  setup: () => ({
    toSizeUnit: we,
    n: GP,
    classes: XP,
    formatElevation: gn
  })
});
kv.render = KP;
var Kl = kv;
oe(Kl);
const rE = Kl;
var ai = Kl;
const ZP = {
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
var id = (e, n, t) => new Promise((o, r) => {
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
const { name: JP, n: QP, classes: _P } = te("tabs");
function xP(e, n) {
  return p(), Se(qt(e.sticky ? e.n("$-sticky") : e.Transition), {
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
              L(e.$slots, "default"),
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
const Pv = ne({
  name: JP,
  components: { VarSticky: go },
  inheritAttrs: !1,
  props: ZP,
  setup(e) {
    const n = S("0px"), t = S("0px"), o = S("0px"), r = S("0px"), a = S(!1), i = S(null), l = V(() => e.active), s = V(() => e.activeColor), u = V(() => e.inactiveColor), d = V(() => e.disabledColor), c = V(() => e.itemDirection), f = S(null), m = V(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: b, bindTabList: h, length: g } = VP();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: I,
      onTabClick: O
    }), fe(
      () => g.value,
      () => id(this, null, function* () {
        yield dn(), I();
      })
    ), fe(() => [e.active, e.scrollable], I), mt(I), ko(I);
    function O(R) {
      var H;
      const ie = (H = R.name.value) != null ? H : R.index.value, { active: G, onChange: W, onClick: Z } = e;
      y(e["onUpdate:active"], ie), y(Z, ie), ie !== G && y(W, ie);
    }
    function T() {
      return b.find(({ name: R }) => e.active === R.value);
    }
    function $(R) {
      return b.find(({ index: H }) => (R ?? e.active) === H.value);
    }
    function k() {
      if (g.value === 0)
        return;
      const { active: R } = e;
      if (vn(R)) {
        const H = st(R, 0, g.value - 1);
        return y(e["onUpdate:active"], H), $(H);
      }
    }
    function M() {
      a.value = e.scrollable === "always" || b.length >= 5;
    }
    function P({ element: R }) {
      const H = R.value;
      H && (e.layoutDirection === "horizontal" ? (n.value = `${H.offsetWidth}px`, o.value = `${H.offsetLeft}px`) : (t.value = `${H.offsetHeight}px`, r.value = `${H.offsetTop}px`));
    }
    function D({ element: R }) {
      if (!a.value)
        return;
      const H = i.value, ie = R.value;
      if (e.layoutDirection === "horizontal") {
        const G = ie.offsetLeft + ie.offsetWidth / 2 - H.offsetWidth / 2;
        so(H, {
          left: G,
          animation: Zr
        });
      } else {
        const G = ie.offsetTop + ie.offsetHeight / 2 - H.offsetHeight / 2;
        so(H, {
          top: G,
          animation: Zr
        });
      }
    }
    function I() {
      const R = T() || $() || k();
      !R || R.disabled.value || (M(), P(R), D(R));
    }
    function U() {
      return id(this, null, function* () {
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
      n: QP,
      classes: _P,
      resize: I,
      resizeSticky: U,
      formatElevation: gn
    };
  }
});
Pv.render = xP;
var Zl = Pv;
oe(Zl);
const aE = Zl;
var ii = Zl;
const eO = {
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
var nO = (e, n, t) => new Promise((o, r) => {
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
const { name: tO, n: oO } = te("tabs-items");
function rO(e, n) {
  const t = ae("var-swipe");
  return p(), Se(t, {
    class: v(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ve(() => [
      L(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const Ov = ne({
  name: tO,
  components: { VarSwipe: mo },
  props: eO,
  setup(e) {
    const n = S(null), { tabItemList: t, bindTabItem: o, length: r } = Fw();
    o({}), fe(() => e.active, s), fe(
      () => r.value,
      () => nO(this, null, function* () {
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
      const m = t.find(({ index: h }) => h.value === c), b = (f = m.name.value) != null ? f : m.index.value;
      y(e["onUpdate:active"], b);
    }
    function d() {
      return n.value;
    }
    return {
      swipe: n,
      n: oO,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Ov.render = rO;
var Jl = Ov;
oe(Jl);
const iE = Jl;
var li = Jl, aO = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, iO = {
  "--badge-default-color": "#555"
}, lO = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, sO = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, uO = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, dO = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, cO = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, fO = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, vO = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, mO = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, hO = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, pO = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, gO = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, bO = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, yO = {
  "--popup-content-background-color": "#1e1e1e"
}, $O = {
  "--pull-refresh-background": "#303030"
}, wO = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, SO = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, CO = {
  "--select-scroller-background": "#303030"
}, kO = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, PO = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, OO = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, TO = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, IO = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, EO = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, MO = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, BO = {
  "--tabs-background": "#1e1e1e"
}, DO = {
  "--app-bar-color": "#272727"
}, NO = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, VO = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, AO = {
  "--menu-background-color": "#272727"
}, zO = {
  "--breadcrumb-inactive-color": "#aaa"
}, LO = {
  "--paper-background": "#303030"
}, RO = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, UO = {
  "--link-default-color": "#fff"
}, HO = {
  "--progress-label-color": "#fff"
}, FO = {
  "--options-text-color": "#fff"
}, YO = {
  "--countdown-text-color": "#fff"
}, jO = {
  "--watermark-content-color": "#ffffff"
}, WO = Object.defineProperty, ld = Object.getOwnPropertySymbols, qO = Object.prototype.hasOwnProperty, GO = Object.prototype.propertyIsEnumerable, sd = (e, n, t) => n in e ? WO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Pe = (e, n) => {
  for (var t in n || (n = {}))
    qO.call(n, t) && sd(e, t, n[t]);
  if (ld)
    for (var t of ld(n))
      GO.call(n, t) && sd(e, t, n[t]);
  return e;
}, XO = Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe(Pe({
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
}, lO), uO), sO), EO), vO), kO), BO), TO), yO), mO), aO), cO), iO), MO), fO), $O), OO), PO), gO), IO), pO), CO), wO), dO), hO), bO), DO), NO), VO), AO), SO), zO), LO), RO), UO), HO), FO), YO), jO);
const KO = { dark: XO }, lE = null;
var si = KO;
const Cn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], un = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ud = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], ZO = {
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
}, Tv = (e, n) => e === "24hr" || n === "am", Ql = (e, n, t) => {
  const o = Cn.findIndex((a) => A(a) === A(t)), r = Tv(e, n) ? t : un[o];
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
}, Iv = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = Ql(r, a, i);
  let f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    const { hour: b, minute: h } = fn(l);
    f = b === c && o > h;
  }
  if (!l && s) {
    const { hour: b, minute: h } = fn(s);
    f = b === c && o < h;
  }
  if (l && s) {
    const { hour: b, minute: h } = fn(l), { hour: g, minute: C } = fn(s);
    f = g === c && o < C || b === c && o > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (t = e.allowedTime) == null ? void 0 : t.minutes(o)), f || m;
}, Ev = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = Ql(r, a, i);
  let m = !1, b = !1;
  if (d.includes(c))
    return !0;
  if (s && !u) {
    const { hour: h, minute: g, second: C } = fn(s);
    m = h === f && g < l || g === l && o > C;
  }
  if (!s && u) {
    const { hour: h, minute: g, second: C } = fn(u);
    m = h === f && g > l || g === l && o > C;
  }
  if (s && u) {
    const { hour: h, minute: g, second: C } = fn(s), { hour: O, minute: T, second: $ } = fn(u);
    m = h === f && g < l || O === f && T > l || h === f && g === l && o > C || O === f && T === l && o < $;
  }
  return (n = e.allowedTime) != null && n.seconds && (b = (t = e.allowedTime) == null ? void 0 : t.seconds(o)), m || b;
}, { n: JO, classes: QO } = te("time-picker");
function _O(e, n) {
  return p(), w(
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
      (p(!0), w(
        De,
        null,
        qe(e.timeScales, (t, o) => (p(), w(
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
      e.format === "24hr" && e.type === "hour" ? (p(), w(
        "div",
        {
          key: 0,
          class: v(e.n("clock-inner")),
          ref: "inner"
        },
        [
          (p(!0), w(
            De,
            null,
            qe(e.hours24, (t, o) => (p(), w(
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
const Mv = ne({
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
      const h = e.rad / 30;
      return h >= 0 ? h : h + 12;
    }), l = V(() => e.type === "hour" ? Cn : ud), s = (h, g) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const C = e.type === "minute" ? Iv : Ev, O = {
        time: A(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: A(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: o.value
      };
      return g && e.type === "minute" && Reflect.deleteProperty(O, "minute"), C(O);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const h = e.isInner ? un[i.value] : l.value[i.value];
      return l.value === ud ? s() ? "#bdbdbd" : e.color : c(h) ? "#bdbdbd" : e.color;
    }, d = (h, g) => g ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (Tv(e.format, e.ampm))
          return o.value.includes(h);
        const g = Cn.findIndex((C) => C === h);
        return r.value.includes(g);
      }
      return s(h, !0);
    }, f = (h, g, C) => {
      const O = 2 * Math.PI / 12 * h - Math.PI / 2, T = 50 * (1 + Math.cos(O)), $ = 50 * (1 + Math.sin(O)), k = () => d(h, C) ? c(g) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: M, color: P } = k();
      return {
        left: `${T}%`,
        top: `${$}%`,
        backgroundColor: M,
        color: P
      };
    }, m = () => {
      const { width: h, height: g } = _e(t.value);
      return {
        width: h,
        height: g
      };
    }, b = () => {
      if (i.value === void 0)
        return;
      const h = e.ampm === "am" ? Cn : un;
      return St(h[i.value], 2, "0");
    };
    return fe([i, () => e.isInner], ([h, g], [C, O]) => {
      if (h === C && g === O || e.type !== "hour" || i.value === void 0)
        return;
      const $ = g ? un[i.value] : b(), k = e.useSeconds ? `:${e.time.second}` : "", M = `${$}:${e.time.minute}${k}`;
      e.preventNextUpdate || n("update", M), n("change-prevent-update");
    }), fe(
      () => e.rad,
      (h, g) => {
        if (e.type === "hour" || h === void 0 || g === void 0)
          return;
        const C = h / 6 >= 0 ? h / 6 : h / 6 + 60, O = g / 6 >= 0 ? g / 6 : g / 6 + 60;
        if (C === O)
          return;
        let T;
        const { hourStr: $ } = Ql(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const k = ce().minute(C).format("mm"), M = e.useSeconds ? `:${e.time.second}` : "";
          T = `${$}:${k}${M}`;
        }
        if (e.type === "second") {
          const k = ce().second(C).format("ss"), M = e.useSeconds ? `:${k}` : "";
          T = `${$}:${e.time.minute}${M}`;
        }
        n("update", T);
      }
    ), fe(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([h, g, C]) => {
        if (o.value = [], h && !g) {
          const { hour: O } = fn(h), T = Cn.filter((k) => A(k) > O), $ = un.filter((k) => A(k) > O);
          o.value = [...T, ...$];
        }
        if (!h && g) {
          const { hour: O } = fn(g), T = Cn.filter((k) => A(k) < O), $ = un.filter((k) => A(k) < O);
          o.value = [...T, ...$];
        }
        if (h && g) {
          const { hour: O } = fn(h), { hour: T } = fn(g), $ = Cn.filter((M) => A(M) < T || A(M) > O), k = un.filter((M) => A(M) < T || A(M) > O);
          o.value = [...$, ...k];
        }
        if (C != null && C.hours) {
          const { hours: O } = C, T = Cn.filter((k) => !O(A(k))), $ = un.filter((k) => !O(A(k)));
          o.value = [.../* @__PURE__ */ new Set([...o.value, ...T, ...$])];
        }
        r.value = o.value.map((O) => un.findIndex((T) => O === T)).filter((O) => O >= 0);
      },
      { immediate: !0 }
    ), {
      n: JO,
      classes: QO,
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
Mv.render = _O;
var xO = Mv;
const { name: eT, n: nT, classes: tT } = te("time-picker"), oT = (e) => (ht(""), e = e(), pt(), e), rT = /* @__PURE__ */ oT(() => /* @__PURE__ */ N(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), aT = { key: 0 };
function iT(e, n) {
  const t = ae("clock");
  return p(), w(
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
              rT,
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
              e.useSeconds ? (p(), w("span", aT, ":")) : Q("v-if", !0),
              e.useSeconds ? (p(), w(
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
          e.format === "ampm" ? (p(), w(
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
                  (p(), Se(t, {
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
const Bv = ne({
  name: eT,
  components: { Clock: xO },
  props: ZO,
  setup(e) {
    const n = S(null), t = S(null), o = S(null), r = S(!1), a = S(!1), i = S(!1), l = S(!1), s = S(!1), u = S(!1), d = S(!1), c = S(0), f = S(0), m = S(), b = S("hour"), h = S("am"), g = S({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = je({
      x: 0,
      y: 0
    }), O = je({
      x: [],
      y: []
    }), T = V(() => b.value === "hour" ? m.value : b.value === "minute" ? c.value : f.value);
    fe(
      () => e.modelValue,
      (E) => {
        if (E) {
          const { hour: x, minute: q, second: Y } = fn(E), X = ce().hour(x).format("hh"), ee = ce().hour(x).format("HH"), he = ce().minute(q).format("mm"), ke = ce().second(Y).format("ss");
          m.value = (X === "12" ? 0 : A(X)) * 30, c.value = A(he) * 6, f.value = A(ke) * 6, g.value = U(E), e.format !== "24hr" && (h.value = St(`${x}`, 2, "0") === ee && un.includes(ee) ? "pm" : "am"), r.value = e.format === "24hr" && un.includes(ee);
        }
      },
      { immediate: !0 }
    );
    function $(E) {
      y(e["onUpdate:modelValue"], E), y(e.onChange, E);
    }
    function k(E) {
      return E * 57.29577951308232;
    }
    function M(E) {
      l.value = !1, d.value = !1, b.value = E;
    }
    function P(E) {
      const { disableHour: x } = o.value, q = Cn.findIndex((ee) => A(ee) === A(g.value.hour)), Y = E === "am" ? Cn : un;
      return [...Y.slice(q), ...Y.slice(0, q)].find((ee, he) => (a.value = he !== 0, !x.includes(ee)));
    }
    function D(E) {
      if (e.readonly)
        return;
      h.value = E;
      const x = P(E);
      if (!x)
        return;
      const q = e.useSeconds ? `:${g.value.second}` : "", Y = `${St(x, 2, "0")}:${g.value.minute}${q}`;
      $(Y);
    }
    function I(E, x) {
      const q = E >= O.x[0] && E <= O.x[1], Y = x >= O.y[0] && x <= O.y[1];
      return q && Y;
    }
    function U(E) {
      const x = e.format === "24hr" ? "HH" : "hh", { hour: q, minute: Y, second: X } = fn(E);
      return {
        hour: ce().hour(q).format(x),
        minute: ce().minute(Y).format("mm"),
        second: ce().second(X).format("ss")
      };
    }
    function R(E) {
      const x = E / 30;
      return x >= 0 ? x : x + 12;
    }
    function H() {
      const { width: E, height: x } = o.value.getSize(), q = C.x - E / 2 - 8, Y = C.x + E / 2 + 8, X = C.y - x / 2 - 8, ee = C.y + x / 2 + 8;
      return {
        rangeXMin: q,
        rangeXMax: Y,
        rangeYMin: X,
        rangeYMax: ee
      };
    }
    function ie(E, x, q) {
      const { disableHour: Y } = o.value;
      i.value = I(E, x);
      const X = Math.round(q / 30) * 30 + 90, ee = R(X), he = r.value ? Cn[ee] : un[ee];
      if (Y.includes(he) || (r.value = e.format === "24hr" ? I(E, x) : !1), r.value !== i.value)
        return;
      const ke = r.value || h.value === "pm" ? un[ee] : Cn[ee];
      u.value = Y.includes(ke), !u.value && (m.value = X, l.value = !0);
    }
    function G(E) {
      const { disableHour: x } = o.value, q = Math.round(E / 6) * 6 + 90, X = {
        time: q / 6 >= 0 ? q / 6 : q / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: x,
        allowedTime: e.allowedTime
      };
      d.value = Iv(X), !d.value && (c.value = q, s.value = !0);
    }
    function W(E) {
      const { disableHour: x } = o.value, q = Math.round(E / 6) * 6 + 90, X = {
        time: q / 6 >= 0 ? q / 6 : q / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: g.value.hour,
        minute: A(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: x,
        allowedTime: e.allowedTime
      };
      Ev(X) || (f.value = q);
    }
    function Z() {
      const { left: E, top: x, width: q, height: Y } = _e(n.value);
      if (C.x = E + q / 2, C.y = x + Y / 2, b.value === "hour" && e.format === "24hr") {
        const { rangeXMin: X, rangeXMax: ee, rangeYMin: he, rangeYMax: ke } = H();
        O.x = [X, ee], O.y = [he, ke];
      }
    }
    function _(E) {
      if (E.preventDefault(), e.readonly)
        return;
      Z();
      const { clientX: x, clientY: q } = E.touches[0], Y = x - C.x, X = q - C.y, ee = Math.round(k(Math.atan2(X, Y)));
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
      getRad: T,
      time: g,
      container: n,
      inner: o,
      picker: t,
      isInner: r,
      type: b,
      ampm: h,
      isPreventNextUpdate: a,
      n: nT,
      classes: tT,
      moveHand: _,
      checkPanel: M,
      checkAmpm: D,
      end: j,
      update: $,
      changePreventUpdate: B,
      formatElevation: gn
    };
  }
});
Bv.render = iT;
var _l = Bv;
oe(_l);
const sE = _l;
var ui = _l;
const lT = {
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
var Wr = (e, n, t) => new Promise((o, r) => {
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
const { name: sT, n: uT, classes: dT } = te("uploader");
let cT = 0;
const fT = ["onClick"], vT = ["onClick"], mT = ["src", "alt"], hT = ["multiple", "accept", "capture", "disabled"], pT = ["src"];
function gT(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = ae("var-popup"), i = Le("ripple"), l = Le("hover");
  return p(), w(
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
          (p(!0), w(
            De,
            null,
            qe(e.files, (s) => Oe((p(), w("div", {
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
              e.removable ? (p(), w("div", {
                key: 0,
                class: v(e.n("file-close")),
                onClick: On((u) => e.handleRemove(s), ["stop"])
              }, [
                J(t, {
                  class: v(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, vT)) : Q("v-if", !0),
              s.cover ? (p(), w("img", {
                key: 1,
                class: v(e.n("file-cover")),
                style: F({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, mT)) : Q("v-if", !0),
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
            ], 10, fT)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Oe((p(), w(
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
              }, null, 42, hT),
              L(e.$slots, "default", {}, () => [
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
          ]) : Q("v-if", !0)
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
            L(e.$slots, "extra-message")
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
            e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), w("video", {
              key: 0,
              class: v(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, pT)) : Q("v-if", !0)
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
const Dv = ne({
  name: sT,
  directives: { Ripple: Ke, Hover: In },
  components: {
    VarIcon: Ue,
    VarPopup: dt,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  props: lT,
  setup(e) {
    const n = S(null), t = S(!1), o = S(null), r = V(() => {
      const {
        maxlength: _,
        modelValue: { length: j }
      } = e;
      return vn(_) ? `${j} / ${_}` : "";
    }), { form: a, bindForm: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = En(), { hovering: c, handleHovering: f } = Wn(), m = V(() => {
      const { modelValue: _, hideList: j } = e;
      return j ? [] : _;
    });
    let b = !1;
    const h = {
      getSuccess: I,
      getError: U,
      getLoading: R
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
    function C(_) {
      const { disabled: j, previewed: B } = e;
      if (a != null && a.disabled.value || j || !B)
        return;
      const { url: E } = _;
      if (Qe(E) && Ts(E)) {
        po(E);
        return;
      }
      Qe(E) && Is(E) && (o.value = _, t.value = !0);
    }
    function O(_) {
      return {
        id: cT++,
        url: "",
        cover: "",
        name: _.name,
        file: _,
        progress: 0
      };
    }
    function T(_) {
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
          const E = B.result;
          _.cover = E, _.url = E, j(_);
        }, B.readAsDataURL(_.file);
      });
    }
    function k(_) {
      return _.map($);
    }
    function M(_) {
      const { onBeforeRead: j } = e;
      return _.map(
        (B) => new Promise((E) => {
          j || E({
            valid: !0,
            varFile: B
          });
          const x = Wo(y(j, je(B)));
          Promise.all(x).then((q) => {
            E({
              valid: q.every(Boolean),
              varFile: B
            });
          });
        })
      );
    }
    function P(_) {
      return Wr(this, null, function* () {
        const { maxsize: j, maxlength: B, modelValue: E, onOversize: x, onAfterRead: q, onBeforeFilter: Y, readonly: X, disabled: ee } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || ee || X)
          return;
        const he = (pe) => pe.filter((Be) => Be.file.size > A(j) ? (y(x, je(Be)), !1) : !0), ke = (pe) => {
          const Be = Math.min(pe.length, A(B) - E.length);
          return pe.slice(0, Be);
        }, Re = (pe) => Wr(this, null, function* () {
          if (!Y)
            return pe;
          const Be = Wo(Y);
          for (const We of Be)
            pe = yield We(pe);
          return pe;
        });
        let de = T(_).map(O);
        de = yield Re(de), de = j != null ? he(de) : de, de = B != null ? ke(de) : de;
        const Ce = yield Promise.all(k(de)), se = (yield Promise.all(M(Ce))).filter(({ valid: pe }) => pe).map(({ varFile: pe }) => pe);
        y(e["onUpdate:modelValue"], [...E, ...se]), _.target.value = "", se.forEach((pe) => y(q, je(pe)));
      });
    }
    function D(_) {
      return Wr(this, null, function* () {
        const { disabled: j, readonly: B, modelValue: E, onBeforeRemove: x, onRemove: q } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || j || B)
          return;
        if (x) {
          const X = Wo(y(x, je(_)));
          if ((yield Promise.all(X)).some((ee) => !ee))
            return;
        }
        const Y = E.filter((X) => X !== _);
        y(q, je(_)), G("onRemove"), y(e["onUpdate:modelValue"], Y);
      });
    }
    function I() {
      return e.modelValue.filter((_) => _.state === "success");
    }
    function U() {
      return e.modelValue.filter((_) => _.state === "error");
    }
    function R() {
      return e.modelValue.filter((_) => _.state === "loading");
    }
    function H() {
      n.value.click();
    }
    function ie() {
      o.value = null, t.value = !1, po.close();
    }
    function G(_) {
      Fe(() => {
        const { validateTrigger: j, rules: B, modelValue: E } = e;
        s(j, _, B, E, h);
      });
    }
    function W() {
      return u(e.rules, e.modelValue, h);
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
      n: uT,
      classes: dT,
      formatElevation: gn,
      toNumber: A,
      handleHovering: f,
      isHTMLSupportVideo: Is,
      isHTMLSupportImage: Ts,
      preview: C,
      handleChange: P,
      handleRemove: D,
      getSuccess: I,
      getError: U,
      getLoading: R,
      validate: W,
      resetValidation: d,
      reset: Z,
      chooseFile: H,
      closePreview: ie,
      toSizeUnit: we
    };
  }
});
Dv.render = gT;
var xl = Dv;
oe(xl);
const uE = xl;
var di = xl;
const bT = {
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
var yT = Object.defineProperty, $T = Object.defineProperties, wT = Object.getOwnPropertyDescriptors, dd = Object.getOwnPropertySymbols, ST = Object.prototype.hasOwnProperty, CT = Object.prototype.propertyIsEnumerable, cd = (e, n, t) => n in e ? yT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, kT = (e, n) => {
  for (var t in n || (n = {}))
    ST.call(n, t) && cd(e, t, n[t]);
  if (dd)
    for (var t of dd(n))
      CT.call(n, t) && cd(e, t, n[t]);
  return e;
}, PT = (e, n) => $T(e, wT(n)), fd = (e, n, t) => new Promise((o, r) => {
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
const { name: OT, n: TT, classes: IT } = te("watermark"), ET = { ref: "svgRef" }, MT = ["viewBox", "width", "height"], BT = ["width", "height"], DT = ["href", "xlink:href", "x", "y", "width", "height"];
function NT(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      L(e.$slots, "default"),
      (p(), Se(Xn, {
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
              ET,
              [
                (p(), w("svg", {
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
                  e.showContent() ? (p(), w("foreignObject", {
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
                        L(e.$slots, "content", {}, () => [
                          N(
                            "span",
                            {
                              style: F(PT(kT({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
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
                  ], 8, BT)) : Q("v-if", !0),
                  !e.$slots.content && e.image ? (p(), w("image", {
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
                  }, null, 12, DT)) : Q("v-if", !0)
                ], 12, MT))
              ],
              512
              /* NEED_PATCH */
            ), [
              [Ln, !1]
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
const Nv = ne({
  name: OT,
  props: bT,
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
    ), $o(c), wo(d);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return fd(this, null, function* () {
        return new Promise((f) => {
          const m = document.createElement("canvas"), b = m.getContext("2d"), h = new Image();
          h.crossOrigin = "anonymous", h.referrerPolicy = "no-referrer", h.src = e.image, h.onload = () => {
            m.width = h.width, m.height = h.height, b.drawImage(h, 0, 0), f(m.toDataURL());
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
      return fd(this, null, function* () {
        r.value = Pt(i.value).color, e.image && (o.value = yield s()), yield Fe(), d(), t.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: t,
      imageUrl: o,
      textColor: r,
      n: TT,
      classes: IT,
      showContent: l,
      resize: c
    };
  }
});
Nv.render = NT;
var es = Nv;
oe(es);
const dE = es;
var ci = es;
const VT = "2.16.7";
function AT(e) {
  Xr.install && e.use(Xr), Kr.install && e.use(Kr), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), tr.install && e.use(tr), ea.install && e.use(ea), na.install && e.use(na), ta.install && e.use(ta), oa.install && e.use(oa), mn.install && e.use(mn), ra.install && e.use(ra), aa.install && e.use(aa), or.install && e.use(or), rr.install && e.use(rr), ia.install && e.use(ia), ar.install && e.use(ar), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), wn.install && e.use(wn), va.install && e.use(va), ya.install && e.use(ya), wa.install && e.use(wa), Sa.install && e.use(Sa), Ca.install && e.use(Ca), cr.install && e.use(cr), Oa.install && e.use(Oa), Ta.install && e.use(Ta), Ia.install && e.use(Ia), hn.install && e.use(hn), In.install && e.use(In), zn.install && e.use(zn), Ue.install && e.use(Ue), Ea.install && e.use(Ea), po.install && e.use(po), Ma.install && e.use(Ma), Ba.install && e.use(Ba), vr.install && e.use(vr), uo.install && e.use(uo), Da.install && e.use(Da), Na.install && e.use(Na), Lt.install && e.use(Lt), Va.install && e.use(Va), Gr.install && e.use(Gr), bo.install && e.use(bo), Aa.install && e.use(Aa), za.install && e.use(za), La.install && e.use(La), Ra.install && e.use(Ra), Ua.install && e.use(Ua), dt.install && e.use(dt), Ha.install && e.use(Ha), Fa.install && e.use(Fa), Ya.install && e.use(Ya), ja.install && e.use(ja), Wa.install && e.use(Wa), qa.install && e.use(qa), Ke.install && e.use(Ke), Ga.install && e.use(Ga), Xa.install && e.use(Xa), Ka.install && e.use(Ka), Za.install && e.use(Za), Qa.install && e.use(Qa), _a.install && e.use(_a), xa.install && e.use(xa), ei.install && e.use(ei), go.install && e.use(go), ni.install && e.use(ni), mo.install && e.use(mo), ho.install && e.use(ho), ti.install && e.use(ti), oi.install && e.use(oi), ri.install && e.use(ri), ai.install && e.use(ai), ii.install && e.use(ii), li.install && e.use(li), si.install && e.use(si), ui.install && e.use(ui), fr.install && e.use(fr), di.install && e.use(di), ci.install && e.use(ci);
}
const cE = {
  version: VT,
  install: AT,
  ActionSheet: Xr,
  AppBar: Kr,
  Avatar: Qr,
  AvatarGroup: _r,
  BackTop: xr,
  Badge: tr,
  BottomNavigation: ea,
  BottomNavigationItem: na,
  Breadcrumb: ta,
  Breadcrumbs: oa,
  Button: mn,
  ButtonGroup: ra,
  Card: aa,
  Cell: or,
  Checkbox: rr,
  CheckboxGroup: ia,
  Chip: ar,
  Col: la,
  Collapse: sa,
  CollapseItem: ua,
  Context: wn,
  Countdown: va,
  Counter: ya,
  DatePicker: wa,
  Dialog: Sa,
  Divider: Ca,
  Drag: cr,
  Ellipsis: Oa,
  Fab: Ta,
  Form: Ia,
  FormDetails: hn,
  Hover: In,
  HoverOverlay: zn,
  Icon: Ue,
  Image: Ea,
  ImagePreview: po,
  IndexAnchor: Ma,
  IndexBar: Ba,
  Input: vr,
  Lazy: uo,
  Link: Da,
  List: Na,
  Loading: Lt,
  LoadingBar: Va,
  Locale: Gr,
  Menu: bo,
  Option: Aa,
  Overlay: za,
  Pagination: La,
  Paper: Ra,
  Picker: Ua,
  Popup: dt,
  Progress: Ha,
  PullRefresh: Fa,
  Radio: Ya,
  RadioGroup: ja,
  Rate: Wa,
  Result: qa,
  Ripple: Ke,
  Row: Ga,
  Select: Xa,
  Skeleton: Ka,
  Slider: Za,
  Snackbar: Qa,
  Space: _a,
  Step: xa,
  Steps: ei,
  Sticky: go,
  StyleProvider: ni,
  Swipe: mo,
  SwipeItem: ho,
  Switch: ti,
  Tab: oi,
  TabItem: ri,
  Table: ai,
  Tabs: ii,
  TabsItems: li,
  Themes: si,
  TimePicker: ui,
  Tooltip: fr,
  Uploader: di,
  Watermark: ci
};
export {
  Xr as ActionSheet,
  Kr as AppBar,
  Qr as Avatar,
  _r as AvatarGroup,
  xr as BackTop,
  tr as Badge,
  ea as BottomNavigation,
  na as BottomNavigationItem,
  ta as Breadcrumb,
  oa as Breadcrumbs,
  mn as Button,
  ra as ButtonGroup,
  aa as Card,
  or as Cell,
  rr as Checkbox,
  ia as CheckboxGroup,
  ar as Chip,
  la as Col,
  sa as Collapse,
  ua as CollapseItem,
  wn as Context,
  va as Countdown,
  ya as Counter,
  wa as DatePicker,
  Sa as Dialog,
  Ca as Divider,
  cr as Drag,
  Oa as Ellipsis,
  Ta as Fab,
  Ia as Form,
  hn as FormDetails,
  In as Hover,
  zn as HoverOverlay,
  Ue as Icon,
  Ea as Image,
  po as ImagePreview,
  Ma as IndexAnchor,
  Ba as IndexBar,
  vr as Input,
  uo as Lazy,
  Da as Link,
  Na as List,
  Lt as Loading,
  Va as LoadingBar,
  Gr as Locale,
  bo as Menu,
  Aa as Option,
  za as Overlay,
  Jr as PIXEL,
  La as Pagination,
  Ra as Paper,
  Ua as Picker,
  dt as Popup,
  Ha as Progress,
  Fa as PullRefresh,
  Ya as Radio,
  ja as RadioGroup,
  Wa as Rate,
  qa as Result,
  Ke as Ripple,
  Ga as Row,
  mv as SNACKBAR_TYPE,
  Xa as Select,
  Ka as Skeleton,
  Za as Slider,
  Qa as Snackbar,
  _a as Space,
  xa as Step,
  ei as Steps,
  go as Sticky,
  ni as StyleProvider,
  mo as Swipe,
  ho as SwipeItem,
  ti as Switch,
  oi as Tab,
  ri as TabItem,
  ai as Table,
  ii as Tabs,
  li as TabsItems,
  si as Themes,
  ui as TimePicker,
  fr as Tooltip,
  di as Uploader,
  ci as Watermark,
  YT as _ActionSheetComponent,
  jT as _AppBarComponent,
  qT as _AvatarComponent,
  GT as _AvatarGroupComponent,
  QT as _BackTopComponent,
  _T as _BadgeComponent,
  xT as _BottomNavigationComponent,
  eI as _BottomNavigationItemComponent,
  nI as _BreadcrumbComponent,
  tI as _BreadcrumbsComponent,
  JT as _ButtonComponent,
  oI as _ButtonGroupComponent,
  rI as _CardComponent,
  aI as _CellComponent,
  lI as _CheckboxComponent,
  sI as _CheckboxGroupComponent,
  uI as _ChipComponent,
  dI as _ColComponent,
  cI as _CollapseComponent,
  fI as _CollapseItemComponent,
  LT as _ContextComponent,
  vI as _CountdownComponent,
  mI as _CounterComponent,
  hI as _DatePickerComponent,
  pI as _DialogComponent,
  gI as _DividerComponent,
  bI as _DragComponent,
  $I as _EllipsisComponent,
  wI as _FabComponent,
  SI as _FormComponent,
  iI as _FormDetailsComponent,
  ZT as _HoverComponent,
  KT as _HoverOverlayComponent,
  HT as _IconComponent,
  CI as _ImageComponent,
  OI as _ImagePreviewComponent,
  II as _IndexAnchorComponent,
  EI as _IndexBarComponent,
  MI as _InputComponent,
  WT as _LazyComponent,
  BI as _LinkComponent,
  DI as _ListComponent,
  NI as _LoadingBarComponent,
  XT as _LoadingComponent,
  FT as _LocaleComponent,
  VI as _MenuComponent,
  AI as _OptionComponent,
  zI as _OverlayComponent,
  LI as _PaginationComponent,
  RI as _PaperComponent,
  UI as _PickerComponent,
  UT as _PopupComponent,
  HI as _ProgressComponent,
  FI as _PullRefreshComponent,
  YI as _RadioComponent,
  jI as _RadioGroupComponent,
  WI as _RateComponent,
  qI as _ResultComponent,
  RT as _RippleComponent,
  GI as _RowComponent,
  XI as _SelectComponent,
  KI as _SkeletonComponent,
  ZI as _SliderComponent,
  JI as _SnackbarComponent,
  QI as _SpaceComponent,
  _I as _StepComponent,
  xI as _StepsComponent,
  TI as _StickyComponent,
  eE as _StyleProviderComponent,
  kI as _SwipeComponent,
  PI as _SwipeItemComponent,
  nE as _SwitchComponent,
  tE as _TabComponent,
  oE as _TabItemComponent,
  rE as _TableComponent,
  aE as _TabsComponent,
  iE as _TabsItemsComponent,
  lE as _ThemesComponent,
  sE as _TimePickerComponent,
  yI as _TooltipComponent,
  uE as _UploaderComponent,
  dE as _WatermarkComponent,
  xm as actionSheetProps,
  wi as add,
  fh as appBarProps,
  Wh as avatarGroupProps,
  zh as avatarProps,
  Ip as backTopProps,
  Np as badgeProps,
  Kp as bottomNavigationItemProps,
  Rp as bottomNavigationProps,
  ng as breadcrumbProps,
  sg as breadcrumbsProps,
  $p as buttonProps,
  gg as cardProps,
  kg as cellProps,
  Jg as checkboxGroupProps,
  Ag as checkboxProps,
  n0 as chipProps,
  a0 as colProps,
  g0 as collapseItemProps,
  f0 as collapseProps,
  S0 as countdownProps,
  yb as counterProps,
  Hb as datePickerProps,
  cE as default,
  Ze as defaultLazyOptions,
  py as dialogProps,
  Dy as dividerProps,
  Ly as dragProps,
  Rd as enUS,
  Eg as formDetailsProps,
  g$ as formProps,
  Ed as iconProps,
  Wd as imageCache,
  Y$ as imagePreviewProps,
  w$ as imageProps,
  sw as indexAnchorProps,
  vw as indexBarProps,
  Tw as inputProps,
  AT as install,
  Aw as linkProps,
  Hw as listProps,
  Jw as loadingBarProps,
  tt as loadingProps,
  iS as menuProps,
  Hd as merge,
  vS as optionProps,
  bS as overlayProps,
  xe as pack,
  Ud as packs,
  $S as paginationProps,
  OS as paperProps,
  AS as pickerProps,
  Po as popupProps,
  qS as progressProps,
  tC as pullRefreshProps,
  vC as radioGroupProps,
  iC as radioProps,
  bC as rateProps,
  tk as resultProps,
  lk as rowProps,
  pk as selectProps,
  Sk as skeletonProps,
  Tk as sliderProps,
  dv as snackbarProps,
  oP as spaceProps,
  uP as stepProps,
  gP as stepsProps,
  Jo as stickyProps,
  wP as styleProviderProps,
  yf as swipeProps,
  PP as switchProps,
  UP as tabItemProps,
  NP as tabProps,
  WP as tableProps,
  eO as tabsItemsProps,
  ZP as tabsProps,
  ZO as timePickerProps,
  e$ as tooltipProps,
  lT as uploaderProps,
  Si as use,
  Wn as useHoverOverlay,
  $i as useLocale,
  VT as version,
  yi as zhCN
};
