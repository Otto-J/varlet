import { reactive as We, onMounted as Co, nextTick as Ye, onActivated as mt, isRef as Rv, watch as fe, onBeforeUnmount as gr, onDeactivated as Wt, onUnmounted as So, inject as Uv, getCurrentInstance as qt, computed as N, ref as C, unref as eo, provide as Hv, isVNode as Fv, Comment as Yv, Fragment as Ve, createApp as jv, h as hd, onBeforeMount as Wv, defineComponent as ee, createVNode as Z, Teleport as Xn, Transition as je, withDirectives as Ee, vShow as Ln, mergeProps as ze, openBlock as p, createBlock as ke, resolveDynamicComponent as Gt, normalizeClass as v, normalizeStyle as H, resolveComponent as le, resolveDirective as Ue, withCtx as he, createElementVNode as M, renderSlot as z, toDisplayString as ae, createElementBlock as w, renderList as Ge, createCommentVNode as x, onUpdated as ko, createTextVNode as Ie, pushScopeId as ht, popScopeId as pt, withModifiers as On, normalizeProps as at, guardReactiveProps as Po, vModelText as qv, createSlots as er, withKeys as rs, TransitionGroup as Gv } from "vue";
const pd = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, HT = We(pd);
var wn = We(pd), Xv = Object.defineProperty, Kv = Object.defineProperties, Zv = Object.getOwnPropertyDescriptors, as = Object.getOwnPropertySymbols, Jv = Object.prototype.hasOwnProperty, Qv = Object.prototype.propertyIsEnumerable, is = (e, n, t) => n in e ? Xv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, _v = (e, n) => {
  for (var t in n || (n = {}))
    Jv.call(n, t) && is(e, t, n[t]);
  if (as)
    for (var t of as(n))
      Qv.call(n, t) && is(e, t, n[t]);
  return e;
}, xv = (e, n) => Kv(e, Zv(n)), xe = (e) => typeof e == "string", mi = (e) => typeof e == "boolean", vn = (e) => typeof e == "number", ao = (e) => Object.prototype.toString.call(e) === "[object Object]", em = (e) => typeof e == "object" && e !== null, Xt = (e) => typeof e == "function", Ae = (e) => Array.isArray(e), nm = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Fn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, hi = (e) => e === window, tm = () => gt() && "ontouchstart" in window, V = (e) => e == null ? 0 : xe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : mi(e) ? Number(e) : e, nr = (e, n) => {
  if (e.length) {
    const t = e.indexOf(n);
    if (t > -1)
      return e.splice(t, 1);
  }
}, pi = (e, n = 200) => {
  let t, o = 0;
  return function r(...a) {
    const i = Date.now(), l = i - o;
    o || (o = i), t && window.clearTimeout(t), l >= n ? (e.apply(this, a), o = i) : t = window.setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
}, gt = () => typeof window < "u", ls = (e) => [...new Set(e)], om = (e) => gi(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), gi = (e) => e.replace(/-(\w)/g, (n, t) => t.toUpperCase()), gd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), rm = (e, n, t = "start") => {
  let o = t === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && o >= 0 && o <= e.length - 1; ) {
    if (n(e[o], o, e))
      return [e[o], o];
    t === "start" ? o++ : o--;
  }
  return [null, -1];
}, Xo = (e) => Ae(e) ? e : [e], st = (e, n, t) => Math.min(t, Math.max(n, e)), am = (e, n) => st(e, 0, n.length - 1), bd = () => typeof globalThis < "u" ? globalThis : gt() ? window : typeof global < "u" ? global : self, io = (e) => {
  const n = bd();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, ss = (e) => {
  const n = bd();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, Ko = () => new Promise((e) => {
  io(e);
}), cn = () => new Promise((e) => {
  io(() => {
    io(e);
  });
}), Pt = (e) => window.getComputedStyle(e), en = (e) => {
  if (hi(e)) {
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
    return xv(_v({}, o), {
      toJSON: () => o
    });
  }
  return e.getBoundingClientRect();
}, im = (e) => {
  const { top: n, bottom: t, left: o, right: r } = en(e), { width: a, height: i } = en(window), l = o <= a && r >= 0, s = n <= i && t >= 0;
  return l && s;
}, lm = (e) => new Promise((n) => {
  const t = new FileReader();
  t.onload = () => {
    n(t.result);
  }, t.readAsDataURL(e);
}), sm = Object.defineProperty, tr = Object.getOwnPropertySymbols, yd = Object.prototype.hasOwnProperty, $d = Object.prototype.propertyIsEnumerable, us = (e, n, t) => n in e ? sm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, um = (e, n) => {
  for (var t in n || (n = {}))
    yd.call(n, t) && us(e, t, n[t]);
  if (tr)
    for (var t of tr(n))
      $d.call(n, t) && us(e, t, n[t]);
  return e;
}, dm = (e, n) => {
  var t = {};
  for (var o in e)
    yd.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && tr)
    for (var o of tr(e))
      n.indexOf(o) < 0 && $d.call(e, o) && (t[o] = e[o]);
  return t;
};
function an(e) {
  let n = !1;
  Co(() => {
    e(), Ye(() => {
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
    const g = s(m);
    g && (g.addEventListener(n, t, {
      passive: r,
      capture: a
    }), i = !0);
  }, d = (m) => {
    if (!i || l)
      return;
    const g = s(m);
    g && (g.removeEventListener(n, t, {
      capture: a
    }), i = !1);
  };
  let c;
  Rv(e) && (c = fe(
    () => e.value,
    (m, g) => {
      d(g), u(m);
    }
  ));
  const f = () => {
    c == null || c(), d(e), l = !0;
  };
  return an(() => {
    u(e);
  }), gr(() => {
    d(e);
  }), Wt(() => {
    d(e);
  }), f;
}
function wd(e, n, t) {
  if (!gt())
    return;
  ut(document, n, (r) => {
    const a = Xt(e) ? e() : eo(e);
    a && !a.contains(r.target) && t(r);
  });
}
function br(e) {
  So(() => {
    e();
  }), Wt(() => {
    e();
  });
}
function cm(e) {
  const n = qt();
  return e in n.provides;
}
function ln(e) {
  if (!cm(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const t = Uv(e), { childInstances: o, collect: r, clear: a } = t, i = dm(t, ["childInstances", "collect", "clear"]), l = qt();
  return {
    index: N(() => o.indexOf(l)),
    parentProvider: i,
    bindParent: (d) => {
      Co(() => {
        Ye().then(() => {
          r(l, d);
        });
      }), gr(() => {
        Ye().then(() => {
          a(l, d);
        });
      });
    }
  };
}
function fm(e) {
  const n = [], t = (o) => {
    if (o != null && o.component) {
      t(o == null ? void 0 : o.component.subTree);
      return;
    }
    Array.isArray(o == null ? void 0 : o.children) && o.children.forEach((r) => {
      Fv(r) && (n.push(r), t(r));
    });
  };
  return t(e), n;
}
function sn(e) {
  const n = qt(), t = We([]), o = [], r = N(() => t.length), a = () => {
    const u = fm(n.subTree);
    t.sort((d, c) => u.indexOf(d.vnode) - u.indexOf(c.vnode));
  }, i = (u, d) => {
    t.push(u), o.push(d), a();
  }, l = (u, d) => {
    nr(t, u), nr(o, d);
  };
  return {
    length: r,
    childProviders: o,
    bindChildren: (u) => {
      Hv(e, um({
        childInstances: t,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function Oo(e) {
  ut(() => window, "resize", e, { passive: !0 }), ut(() => window, "orientationchange", e, { passive: !0 });
}
function vm(e, n) {
  const t = C(!1);
  return fe(
    e,
    (o) => {
      n === o && (t.value = !0);
    },
    { immediate: !0 }
  ), t;
}
function mm(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function yr() {
  const e = C(0), n = C(0), t = C(0), o = C(0), r = C(0), a = C(0), i = C(0), l = C(0), s = C(0), u = C(0), d = C(), c = C(!1), f = C(!1), m = C(0), g = C(0);
  let h = null;
  const b = () => {
    e.value = 0, n.value = 0, t.value = 0, o.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, d.value = void 0, c.value = !1, f.value = !1, m.value = 0, g.value = 0;
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
    distance: g,
    resetTouch: b,
    startTouch: ($) => {
      b();
      const { clientX: k, clientY: D } = $.touches[0];
      e.value = k, n.value = D, i.value = k, l.value = D, c.value = !0, m.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: ($) => {
      const { clientX: k, clientY: D } = $.touches[0];
      f.value = !0, t.value = k - e.value, o.value = D - n.value, r.value = Math.abs(t.value), a.value = Math.abs(o.value), g.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = k - i.value, u.value = D - l.value, d.value || (d.value = mm(r.value, a.value)), i.value = k, l.value = D;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    }
  };
}
function Cd() {
  const e = C(), n = qt(), t = gd(n.type.name);
  return e.value = `${t}-${n.uid}`, e;
}
var hm = Object.defineProperty, ds = Object.getOwnPropertySymbols, pm = Object.prototype.hasOwnProperty, gm = Object.prototype.propertyIsEnumerable, cs = (e, n, t) => n in e ? hm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, fs = (e, n) => {
  for (var t in n || (n = {}))
    pm.call(n, t) && cs(e, t, n[t]);
  if (ds)
    for (var t of ds(n))
      gm.call(n, t) && cs(e, t, n[t]);
  return e;
}, vs = (e, n, t) => new Promise((o, r) => {
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
function Te(e, n) {
  return Array.isArray(n) ? n.reduce((t, o) => (t[o] = e[o], t), {}) : e[n];
}
function re(e, n) {
  const t = n ?? e;
  return t.install = function(o) {
    const { name: r } = e;
    r && o.component(r, e);
  }, t;
}
function bm(e) {
  const n = jv(e), t = document.createElement("div");
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
      return () => hd(e, fs(fs({}, n), t));
    }
  }, { unmount: r } = bm(o);
  return { unmountInstance: r };
}
function Sd(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.type !== Yv) {
      if (t.type === Ve && Ae(t.children)) {
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
  const e = C(""), n = (r, a, i) => vs(this, null, function* () {
    return !Ae(r) || !r.length ? !0 : !(yield Promise.all(r.map((s) => s(a, i)))).some((s) => s !== !0 ? (e.value = String(s), !0) : !1);
  });
  return {
    errorMessage: e,
    validate: n,
    resetValidation: () => {
      e.value = "";
    },
    validateWithTrigger: (r, a, i, l, s) => vs(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function ym(e) {
  ut(() => window, "hashchange", e), ut(() => window, "popstate", e);
}
function Zt() {
  const e = C(!1);
  return mt(() => {
    e.value = !1;
  }), Wt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ne(e) {
  const n = "var", t = `${n}-${e}`, o = (a) => a ? a[0] === "$" ? a.replace("$", n) : a.startsWith("--") ? `${t}${a}` : `${t}__${a}` : t, r = (...a) => a.map((i) => {
    if (Ae(i)) {
      const [l, s, u = null] = i;
      return l ? s : u;
    }
    return i;
  });
  return {
    name: om(t),
    n: o,
    classes: r
  };
}
function y(e, ...n) {
  if (Ae(e))
    return e.map((t) => t(...n));
  if (e)
    return e(...n);
}
function A(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function gn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
function Lt(e, n, t = {}) {
  const { passive: o = !0, eventName: r, defaultValue: a, emit: i } = t, l = r ?? `onUpdate:${n.toString()}`, s = () => e[n] != null ? e[n] : a;
  if (!o)
    return N({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : y(e[l], d);
      }
    });
  const u = C(s());
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
var $m = Object.defineProperty, wm = Object.defineProperties, Cm = Object.getOwnPropertyDescriptors, ms = Object.getOwnPropertySymbols, Sm = Object.prototype.hasOwnProperty, km = Object.prototype.propertyIsEnumerable, hs = (e, n, t) => n in e ? $m(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, kd = (e, n) => {
  for (var t in n || (n = {}))
    Sm.call(n, t) && hs(e, t, n[t]);
  if (ms)
    for (var t of ms(n))
      km.call(n, t) && hs(e, t, n[t]);
  return e;
}, Pm = (e, n) => wm(e, Cm(n));
const { n: Pd } = ne("ripple"), ps = 250;
function Om(e) {
  const { zIndex: n, position: t } = Pt(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", t === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Tm(e, n) {
  const { top: t, left: o } = en(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = n.touches[0].clientX - o, u = n.touches[0].clientY - t, d = (r - i * 2) / 2, c = (a - i * 2) / 2, f = s - i, m = u - i;
  return { x: f, y: m, centerX: d, centerY: c, size: l };
}
function Od(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !wn.enableRipple)
    return;
  const t = () => {
    n.tasker = null;
    const { x: o, y: r, centerX: a, centerY: i, size: l } = Tm(this, e), s = document.createElement("div");
    s.classList.add(Pd()), s.style.opacity = "0", s.style.transform = `translate(${o}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Om(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(t, 30);
}
function Xr() {
  const e = this._ripple, n = () => {
    const t = this.querySelectorAll(`.${Pd()}`);
    if (!t.length)
      return;
    const o = t[t.length - 1], r = ps - performance.now() + Number(o.dataset.createdAt);
    window.setTimeout(() => {
      o.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = o.parentNode) == null ? void 0 : a.removeChild(o);
      }, ps);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Td() {
  if (!tm() || !wn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
function Em(e, n) {
  var t;
  e._ripple = Pm(kd({
    tasker: null
  }, (t = n.value) != null ? t : {}), {
    removeRipple: Xr.bind(e)
  }), e.addEventListener("touchstart", Od, { passive: !0 }), e.addEventListener("touchmove", Td, { passive: !0 }), e.addEventListener("dragstart", Xr, { passive: !0 }), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 });
}
function Im(e) {
  e.removeEventListener("touchstart", Od), e.removeEventListener("touchmove", Td), e.removeEventListener("dragstart", Xr), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Dm(e, n) {
  var t, o, r, a, i, l;
  const s = {
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = kd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const Ed = {
  mounted: Em,
  unmounted: Im,
  updated: Dm,
  install(e) {
    e.directive("ripple", this);
  }
}, FT = Ed;
var Je = Ed;
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
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOverlay: A(),
  "onUpdate:show": A(),
  // internal for Dialog
  onRouteChange: A()
};
function Id() {
  Object.keys(wn.locks).length <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function zo(e) {
  wn.locks[e] = 1, Id();
}
function Lo(e) {
  delete wn.locks[e], Id();
}
function $r(e, n) {
  const { uid: t } = qt();
  n && fe(n, (o) => {
    o === !1 ? Lo(t) : o === !0 && e() === !0 && zo(t);
  }), fe(e, (o) => {
    n && n() === !1 || (o === !0 ? zo(t) : Lo(t));
  }), Wv(() => {
    n && n() === !1 || e() === !0 && zo(t);
  }), So(() => {
    n && n() === !1 || e() === !0 && Lo(t);
  }), mt(() => {
    n && n() === !1 || e() === !0 && zo(t);
  }), Wt(() => {
    n && n() === !1 || e() === !0 && Lo(t);
  });
}
function Eo(e, n) {
  const t = C(wn.zIndex);
  return fe(
    e,
    (o) => {
      o && (wn.zIndex += n, t.value = wn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: t };
}
const Dd = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Bm() {
  const { bindParent: e, parentProvider: n, index: t } = ln(Dd);
  return {
    index: t,
    popup: n,
    bindPopup: e
  };
}
function Mm() {
  const { bindChildren: e, childProviders: n, length: t } = sn(Dd);
  return {
    length: t,
    popupItems: n,
    bindPopupItems: e
  };
}
var Nm = Object.defineProperty, gs = Object.getOwnPropertySymbols, Vm = Object.prototype.hasOwnProperty, Am = Object.prototype.propertyIsEnumerable, bs = (e, n, t) => n in e ? Nm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, zm = (e, n) => {
  for (var t in n || (n = {}))
    Vm.call(n, t) && bs(e, t, n[t]);
  if (gs)
    for (var t of gs(n))
      Am.call(n, t) && bs(e, t, n[t]);
  return e;
};
const {
  name: Lm,
  n: Mn,
  classes: Vr
} = ne("popup");
var bi = ee({
  name: Lm,
  inheritAttrs: !1,
  props: To,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = vm(() => e.show, !0), {
      zIndex: r
    } = Eo(() => e.show, 3), {
      disabled: a
    } = Zt(), {
      bindPopupItems: i
    } = Mm();
    $r(() => e.show, () => e.lockScroll), fe(() => e.show, (c) => {
      y(c ? e.onOpen : e.onClose);
    }), i({
      show: N(() => e.show)
    }), ym(() => y(e.onRouteChange));
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
      return Z("div", {
        class: Vr(Mn("overlay"), c),
        style: zm({
          zIndex: r.value - 1
        }, f),
        onClick: l
      }, null);
    }
    function u() {
      return Ee(Z("div", ze({
        class: Vr(Mn("content"), Mn(`--${e.position}`), [e.defaultStyle, Mn("--content-background-color")], [e.defaultStyle, Mn("$-elevation--3")], [e.safeArea, Mn("--safe-area")], [e.safeAreaTop, Mn("--safe-area-top")]),
        style: {
          zIndex: r.value
        }
      }, t), [o.value && y(n.default)]), [[Ln, e.show]]);
    }
    function d() {
      return Z(je, {
        name: Mn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ee(Z("div", {
          class: Vr(Mn("$--box"), Mn()),
          style: {
            zIndex: r.value - 2
          }
        }, [e.overlay && s(), Z(je, {
          name: e.transition || Mn(`$-pop-${e.position}`)
        }, {
          default: () => [u()]
        })]), [[Ln, e.show]])]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? Z(Xn, {
        to: c,
        disabled: a.value
      }, {
        default: () => [d()]
      }) : d();
    };
  }
});
re(bi);
const YT = bi;
var dt = bi;
const Ke = {
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
  onClick: A()
};
function Tn(e, n) {
  throw Error(`Varlet [${e}]: ${n}`);
}
function ys(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function Rm(e) {
  const { left: n } = en(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function $s(e) {
  const { top: n } = en(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function lo(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function yi(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Ar(e) {
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
function Um(e) {
  const n = [];
  let t = e;
  for (; !hi(t); )
    t = ct(t), n.push(t);
  return n;
}
function Bd(e, n) {
  if (xe(e)) {
    const t = document.querySelector(e);
    return t || Tn(n, "target element cannot found"), t;
  }
  if (em(e))
    return e;
  Tn(n, 'type of prop "target" should be a selector or an element object');
}
function Hm() {
  const { width: e, height: n } = en(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const Md = (e) => xe(e) && e.endsWith("rem"), Fm = (e) => xe(e) && e.endsWith("em") && !e.endsWith("rem"), Ym = (e) => xe(e) && e.endsWith("px") || vn(e), jm = (e) => xe(e) && e.endsWith("%"), Nd = (e) => xe(e) && e.endsWith("vw"), Vd = (e) => xe(e) && e.endsWith("vh"), Ad = (e) => xe(e) && e.endsWith("vmin"), zd = (e) => xe(e) && e.endsWith("vmax"), Wm = (e) => xe(e) && e.startsWith("calc("), qm = (e) => xe(e) && e.startsWith("var("), Fe = (e) => {
  if (vn(e))
    return e;
  if (Ym(e))
    return +e.replace("px", "");
  if (!gt())
    return 0;
  const { vw: n, vh: t, vMin: o, vMax: r } = Hm();
  if (Nd(e))
    return +e.replace("vw", "") * n / 100;
  if (Vd(e))
    return +e.replace("vh", "") * t / 100;
  if (Ad(e))
    return +e.replace("vmin", "") * o / 100;
  if (zd(e))
    return +e.replace("vmax", "") * r / 100;
  if (Md(e)) {
    const a = +e.replace("rem", ""), i = Pt(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return xe(e) ? V(e) : 0;
}, Se = (e) => {
  if (e != null)
    return jm(e) || Nd(e) || Vd(e) || Fm(e) || Md(e) || Wm(e) || qm(e) || Ad(e) || zd(e) ? e : `${Fe(e)}px`;
}, un = (e, n = 1) => {
  if (e == null)
    return;
  const t = Se(e), o = t.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(t) * n}${o}`;
};
function so(e, { top: n = 0, left: t = 0, duration: o = 300, animation: r }) {
  const a = Date.now(), i = lo(e), l = yi(e);
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
function Ld(e) {
  return Object.entries(e ?? {}).reduce((n, [t, o]) => {
    const r = t.startsWith("--") ? t : `--${gd(t)}`;
    return n[r] = o, n;
  }, {});
}
function or(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
var Gm = (e, n, t) => new Promise((o, r) => {
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
const { name: Xm, n: Km, classes: Zm } = ne("icon");
function Jm(e, n) {
  return p(), ke(Gt(e.isURL(e.name) ? "img" : "i"), {
    class: v(
      e.classes(
        e.n(),
        [e.namespace !== e.n(), e.namespace],
        `${e.namespace}--set`,
        [e.isURL(e.name), e.n("image"), `${e.namespace}-${e.nextName}`],
        [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass]
      )
    ),
    style: H({
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
const Rd = ee({
  name: Xm,
  props: Ke,
  setup(e) {
    const n = C(""), t = C(!1);
    fe(() => e.name, o, { immediate: !0 });
    function o(r, a) {
      return Gm(this, null, function* () {
        const { transition: i } = e;
        if (a == null || V(i) === 0) {
          n.value = r;
          return;
        }
        t.value = !0, yield Ye(), setTimeout(() => {
          a != null && (n.value = r), t.value = !1;
        }, V(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: t,
      n: Km,
      classes: Zm,
      isURL: nm,
      toNumber: V,
      toSizeUnit: Se
    };
  }
});
Rd.render = Jm;
var $i = Rd;
re($i);
const jT = $i;
var He = $i, Qm = Object.defineProperty, ws = Object.getOwnPropertySymbols, _m = Object.prototype.hasOwnProperty, xm = Object.prototype.propertyIsEnumerable, Cs = (e, n, t) => n in e ? Qm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, eh = (e, n) => {
  for (var t in n || (n = {}))
    _m.call(n, t) && Cs(e, t, n[t]);
  if (ws)
    for (var t of ws(n))
      xm.call(n, t) && Cs(e, t, n[t]);
  return e;
};
const nh = eh({
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
  onSelect: A(),
  "onUpdate:show": A()
}, Te(To, [
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
var wi = {
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
}, Ud = {
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
}, Hd = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "確認",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "請選擇",
  // List
  listLoadingText: "載入中",
  listFinishedText: "沒有更多了",
  listErrorText: "載入失敗",
  // Picker
  pickerTitle: "請選擇",
  pickerConfirmButtonText: "確認",
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
  datePickerSelected: "個被選擇",
  // pagination
  paginationItem: "條",
  paginationPage: "頁",
  paginationJump: "前往"
}, th = Hd, oh = Object.defineProperty, Ss = Object.getOwnPropertySymbols, rh = Object.prototype.hasOwnProperty, ah = Object.prototype.propertyIsEnumerable, ks = (e, n, t) => n in e ? oh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ps = (e, n) => {
  for (var t in n || (n = {}))
    rh.call(n, t) && ks(e, t, n[t]);
  if (Ss)
    for (var t of Ss(n))
      ah.call(n, t) && ks(e, t, n[t]);
  return e;
};
function Ci() {
  const e = {}, n = C({}), t = (a, i) => {
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
      e[a] = Ps(Ps({}, e[a]), i), o(a);
    }
  };
}
const { packs: Fd, pack: nn, add: Si, use: ki, merge: Yd } = Ci();
Si("zh-CN", wi);
ki("zh-CN");
const WT = { zhCN: wi, enUS: Ud, packs: Fd, pack: nn, add: Si, use: ki, merge: Yd, useLocale: Ci };
var Kr = {
  zhCN: wi,
  enUS: Ud,
  zhTW: Hd,
  zhHK: th,
  packs: Fd,
  pack: nn,
  add: Si,
  use: ki,
  merge: Yd,
  useLocale: Ci
};
const { name: ih, n: lh, classes: sh } = ne("action-sheet"), uh = ["onClick"];
function dh(e, n) {
  const t = le("var-icon"), o = le("var-popup"), r = Ue("ripple");
  return p(), ke(o, ze({
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
    default: he(() => [
      M(
        "div",
        ze({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          z(e.$slots, "title", {}, () => {
            var a;
            return [
              M(
                "div",
                {
                  class: v(e.n("title"))
                },
                ae((a = e.title) != null ? a : e.pack.actionSheetTitle),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          z(e.$slots, "actions", {}, () => [
            (p(!0), w(
              Ve,
              null,
              Ge(e.actions, (a) => Ee((p(), w("div", {
                class: v(e.classes(e.n("action-item"), a.className, [a.disabled, e.n("--disabled")])),
                key: a.name,
                style: H({ color: a.color }),
                onClick: (i) => e.handleSelect(a)
              }, [
                a.icon ? (p(), ke(t, {
                  key: 0,
                  class: v(e.n("action-icon")),
                  "var-action-sheet-cover": "",
                  namespace: a.namespace,
                  name: a.icon,
                  size: a.iconSize
                }, null, 8, ["class", "namespace", "name", "size"])) : x("v-if", !0),
                M(
                  "div",
                  {
                    class: v(e.n("action-name"))
                  },
                  ae(a.name),
                  3
                  /* TEXT, CLASS */
                )
              ], 14, uh)), [
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
const jd = ee({
  name: ih,
  directives: { Ripple: Je },
  components: {
    VarPopup: dt,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: nh,
  setup(e) {
    const n = C(!1);
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
      pack: nn,
      n: lh,
      classes: sh,
      handlePopupUpdateShow: o,
      handleSelect: t
    };
  }
});
jd.render = dh;
var Io = jd, ch = Object.defineProperty, Os = Object.getOwnPropertySymbols, fh = Object.prototype.hasOwnProperty, vh = Object.prototype.propertyIsEnumerable, Ts = (e, n, t) => n in e ? ch(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Es = (e, n) => {
  for (var t in n || (n = {}))
    fh.call(n, t) && Ts(e, t, n[t]);
  if (Os)
    for (var t of Os(n))
      vh.call(n, t) && Ts(e, t, n[t]);
  return e;
};
let xn, Pi = {};
function mh(e = {}) {
  return Es(Es({}, Pi), e);
}
function Ot(e) {
  return gt() ? new Promise((n) => {
    Ot.close();
    const t = We(mh(e));
    t.teleport = "body", xn = t;
    const { unmountInstance: o } = Kt(Io, t, {
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
  Pi = e;
};
Ot.resetDefaultOptions = function() {
  Pi = {};
};
Ot.close = function() {
  if (xn != null) {
    const e = xn;
    xn = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
Ot.Component = Io;
re(Io);
re(Io, Ot);
const qT = Io;
var Zr = Ot;
const hh = {
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
}, { name: ph, n: gh, classes: bh } = ne("app-bar");
function yh(e, n) {
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
      style: H(e.rootStyles)
    },
    [
      M(
        "div",
        {
          class: v(e.n("toolbar"))
        },
        [
          M(
            "div",
            {
              class: v(e.n("left"))
            },
            [
              z(e.$slots, "left"),
              e.titlePosition === "left" ? (p(), w(
                "div",
                {
                  key: 0,
                  class: v(e.n("title")),
                  style: H({ paddingLeft: e.paddingLeft })
                },
                [
                  z(e.$slots, "default", {}, () => [
                    Ie(
                      ae(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                6
                /* CLASS, STYLE */
              )) : x("v-if", !0)
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
              z(e.$slots, "default", {}, () => [
                Ie(
                  ae(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : x("v-if", !0),
          M(
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
                  style: H({ paddingRight: e.paddingRight })
                },
                [
                  z(e.$slots, "default", {}, () => [
                    Ie(
                      ae(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                6
                /* CLASS, STYLE */
              )) : x("v-if", !0),
              z(e.$slots, "right")
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      z(e.$slots, "content")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Wd = ee({
  name: ph,
  props: hh,
  setup(e, { slots: n }) {
    const t = C(), o = C(), r = N(() => {
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
    an(a), ko(a);
    function a() {
      t.value = n.left ? 0 : void 0, o.value = n.right ? 0 : void 0;
    }
    return {
      rootStyles: r,
      paddingLeft: t,
      paddingRight: o,
      n: gh,
      classes: bh,
      formatElevation: gn
    };
  }
});
Wd.render = yh;
var Oi = Wd;
re(Oi);
const GT = Oi;
var Jr = Oi;
const Is = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ds = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), $h = (e) => {
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
      this.has(t) && nr(this.cache, t);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Qr = (e) => e, Bs = (e) => e ** 3, qd = (e) => e < 0.5 ? Bs(e * 2) / 2 : 1 - Bs((1 - e) * 2) / 2, Ct = (e = "", n, t = "") => {
  if (e.length >= n)
    return e;
  const o = n - e.length, r = Math.floor(o / t.length);
  return t.repeat(r) + t.slice(0, o % t.length) + e;
};
var wh = Object.defineProperty, Ms = Object.getOwnPropertySymbols, Ch = Object.prototype.hasOwnProperty, Sh = Object.prototype.propertyIsEnumerable, Ns = (e, n, t) => n in e ? wh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, kh = (e, n) => {
  for (var t in n || (n = {}))
    Ch.call(n, t) && Ns(e, t, n[t]);
  if (Ms)
    for (var t of Ms(n))
      Sh.call(n, t) && Ns(e, t, n[t]);
  return e;
}, wr = (e, n, t) => new Promise((o, r) => {
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
const Ph = "background-image", Oh = "lazy-loading", Th = "lazy-error", Vs = "lazy-attempt", Eh = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], _r = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Rt = [], rr = [], Gd = $h(100), Qe = {
  loading: _r,
  error: _r,
  attempt: 3,
  throttleWait: 300,
  events: Eh
};
let Ti = pi(Do, Qe.throttleWait);
function Cr(e, n) {
  e._lazy.arg === Ph ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Ih(e) {
  e._lazy.loading && Cr(e, e._lazy.loading), Do();
}
function Dh(e) {
  e._lazy.error && Cr(e, e._lazy.error), e._lazy.state = "error", Ii(e), Do();
}
function Xd(e, n) {
  Cr(e, n), e._lazy.state = "success", Ii(e), Do();
}
function Bh(e) {
  var n;
  rr.includes(e) || (rr.push(e), (n = Qe.events) == null || n.forEach((t) => {
    e.addEventListener(t, Ti, { passive: !0 });
  }));
}
function Mh() {
  rr.forEach((e) => {
    var n;
    (n = Qe.events) == null || n.forEach((t) => {
      e.removeEventListener(t, Ti);
    });
  }), rr.length = 0;
}
function Nh(e, n) {
  var t, o;
  const r = {
    loading: (t = e.getAttribute(Oh)) != null ? t : Qe.loading,
    error: (o = e.getAttribute(Th)) != null ? o : Qe.error,
    attempt: e.getAttribute(Vs) ? Number(e.getAttribute(Vs)) : Qe.attempt
  };
  e._lazy = kh({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Cr(e, _r), y(Qe.filter, e._lazy);
}
function Vh(e, n) {
  const t = new Image();
  t.src = n, e._lazy.preloadImage = t, t.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Gd.add(n), Xd(e, n);
  }), t.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Dh(e) : Kd(e);
  });
}
function Kd(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (Gd.has(n)) {
    Xd(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Ih(e), Vh(e, n);
}
function Ei(e) {
  return wr(this, null, function* () {
    yield cn(), im(e) && Kd(e);
  });
}
function Do() {
  Rt.forEach((e) => Ei(e));
}
function Ah(e) {
  return wr(this, null, function* () {
    !Rt.includes(e) && Rt.push(e), Um(e).forEach(Bh), yield Ei(e);
  });
}
function Ii(e) {
  nr(Rt, e), Rt.length === 0 && Mh();
}
function zh(e, n) {
  const { src: t, arg: o } = e._lazy;
  return t !== n.value || o !== n.arg;
}
function Zd(e, n) {
  return wr(this, null, function* () {
    Nh(e, n), yield Ah(e);
  });
}
function Lh(e, n) {
  return wr(this, null, function* () {
    if (!zh(e, n)) {
      Rt.includes(e) && (yield Ei(e));
      return;
    }
    yield Zd(e, n);
  });
}
function Rh(e = {}) {
  const { events: n, loading: t, error: o, attempt: r, throttleWait: a, filter: i } = e;
  Qe.events = n ?? Qe.events, Qe.loading = t ?? Qe.loading, Qe.error = o ?? Qe.error, Qe.attempt = r ?? Qe.attempt, Qe.throttleWait = a ?? Qe.throttleWait, Qe.filter = i;
}
const Jd = {
  mounted: Zd,
  unmounted: Ii,
  updated: Lh,
  install(e, n) {
    Rh(n), Ti = pi(Do, Qe.throttleWait), e.directive("lazy", this);
  }
}, XT = Jd;
var uo = Jd;
const Uh = {
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
  onClick: A(),
  onLoad: A(),
  onError: A()
}, Hh = (e) => ["mini", "small", "normal", "large"].includes(e), { name: Fh, n: Yh, classes: jh } = ne("avatar"), Wh = ["src", "alt", "lazy-loading", "lazy-error"], qh = ["src", "alt"];
function Gh(e, n) {
  const t = Ue("lazy");
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
      style: H({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      e.src ? (p(), w(
        Ve,
        { key: 0 },
        [
          e.lazy ? Ee((p(), w("img", {
            key: 0,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: H({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...o) => e.handleLoad && e.handleLoad(...o))
          }, null, 46, Wh)), [
            [t, e.src]
          ]) : (p(), w("img", {
            key: 1,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: H({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...o) => e.handleLoad && e.handleLoad(...o)),
            onError: n[2] || (n[2] = (...o) => e.handleError && e.handleError(...o))
          }, null, 46, qh))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (p(), w(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: v(e.n("text")),
          style: H({ transform: `scale(${e.scale})` })
        },
        [
          z(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const Qd = ee({
  name: Fh,
  directives: { Lazy: uo },
  props: Uh,
  setup(e) {
    const n = C(null), t = C(null), o = C(1);
    an(r), ko(r);
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
      n: Yh,
      classes: jh,
      isInternalSize: Hh,
      toSizeUnit: Se,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
Qd.render = Gh;
var Di = Qd;
re(Di);
const KT = Di;
var xr = Di;
const Xh = {
  offset: [Number, String],
  vertical: Boolean
}, { name: Kh, n: Zh, classes: Jh } = ne("avatar-group");
function Qh(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: H(e.rootStyles)
    },
    [
      z(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const _d = ee({
  name: Kh,
  props: Xh,
  setup(e) {
    return {
      rootStyles: N(() => e.offset == null ? {} : {
        "--avatar-group-offset": Se(e.offset)
      }),
      n: Zh,
      classes: Jh,
      toSizeUnit: Se
    };
  }
});
_d.render = Qh;
var Bi = _d;
re(Bi);
const ZT = Bi;
var ea = Bi;
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
}, { name: _h, n: xh, classes: ep } = ne("loading"), np = (e) => (ht(""), e = e(), pt(), e), tp = /* @__PURE__ */ np(() => /* @__PURE__ */ M(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ M("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), op = [
  tp
];
function rp(e, n) {
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
          z(e.$slots, "default"),
          e.loading ? (p(), w(
            "div",
            {
              key: 0,
              class: v(e.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : x("v-if", !0)
        ],
        2
        /* CLASS */
      )) : x("v-if", !0),
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
              M(
                "span",
                {
                  class: v(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: H({
                    width: e.multiplySizeUnit(e.radius, 2),
                    height: e.multiplySizeUnit(e.radius, 2),
                    color: e.color
                  })
                },
                op,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : x("v-if", !0),
          (p(!0), w(
            Ve,
            null,
            Ge(e.loadingTypeDict, (t, o) => (p(), w(
              Ve,
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
                      Ve,
                      null,
                      Ge(t, (r) => (p(), w(
                        "div",
                        {
                          key: r + o,
                          style: H({ backgroundColor: e.color }),
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
                )) : x("v-if", !0)
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
              style: H({ color: e.color })
            },
            [
              z(e.$slots, "description", {}, () => [
                Ie(
                  ae(e.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : x("v-if", !0)
        ],
        2
        /* CLASS */
      )) : x("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const xd = ee({
  name: _h,
  props: tt,
  setup(e, { slots: n }) {
    const t = N(() => y(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: t,
      n: xh,
      classes: ep,
      multiplySizeUnit: un
    };
  }
});
xd.render = rp;
var Mi = xd;
re(Mi);
const JT = Mi;
var Ut = Mi;
const ap = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, { name: ip, n: lp, classes: sp } = ne("hover-overlay");
function up(e, n) {
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
const ec = ee({
  name: ip,
  props: ap,
  setup: () => ({
    n: lp,
    classes: sp
  })
});
ec.render = up;
var Ni = ec;
re(Ni);
function Wn() {
  const e = C(!1);
  return {
    hovering: e,
    handleHovering: (t) => {
      e.value = t;
    }
  };
}
const QT = Ni;
var zn = Ni;
function nc(e) {
  if (!e)
    return !1;
  const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function dp(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((t, o) => {
    const [r, a] = o.split(":").map((i) => i.trim());
    return t[gi(r)] = a, t;
  }, {}) : {};
}
function cp(e) {
  const { value: n } = e._hover, t = dp(e);
  Object.keys(n).forEach((o) => {
    const r = gi(o);
    n[r] != null && t[r] && (e._hover.rawStyle[r] = t[r]);
  });
}
function Vi(e, n) {
  Object.keys(n).forEach((t) => {
    const o = n[t];
    o != null && (e.style[t] = o);
  });
}
function fp(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function tc(e) {
  fp(e), Vi(e, e._hover.rawStyle);
}
function oc() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Xt(e)) {
    e(this._hover.hovering);
    return;
  }
  Vi(this, e);
}
function rc() {
  if (this._hover.hovering = !1, Xt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  tc(this);
}
function ac(e, n) {
  var t, o;
  const { arg: r, value: a } = n;
  nc(r) || (e._hover = {
    value: a,
    hovering: (o = (t = e._hover) == null ? void 0 : t.hovering) != null ? o : !1,
    rawStyle: {}
  }, cp(e), e.addEventListener("mouseenter", oc), e.addEventListener("mouseleave", rc));
}
function ic(e, n) {
  nc(n.arg) || (tc(e), e.removeEventListener("mouseenter", oc), e.removeEventListener("mouseleave", rc));
}
function vp(e, n) {
  e._hover && ic(e, n);
}
function mp(e, n) {
  return !Xt(n.value) && e._hover.hovering;
}
function hp(e, n) {
  ac(e, n), mp(e, n) && Vi(e, n.value);
}
const lc = {
  mounted: ac,
  unmounted: ic,
  beforeUpdate: vp,
  updated: hp,
  install(e) {
    e.directive("hover", this);
  }
}, _T = lc;
var En = lc, pp = Object.defineProperty, gp = Object.defineProperties, bp = Object.getOwnPropertyDescriptors, As = Object.getOwnPropertySymbols, yp = Object.prototype.hasOwnProperty, $p = Object.prototype.propertyIsEnumerable, zs = (e, n, t) => n in e ? pp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, wp = (e, n) => {
  for (var t in n || (n = {}))
    yp.call(n, t) && zs(e, t, n[t]);
  if (As)
    for (var t of As(n))
      $p.call(n, t) && zs(e, t, n[t]);
  return e;
}, Cp = (e, n) => gp(e, bp(n));
const Sp = {
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
  loadingType: Te(tt, "type"),
  loadingSize: Te(tt, "size"),
  loadingColor: Cp(wp({}, Te(tt, "color")), {
    default: "currentColor"
  }),
  onClick: A(),
  onTouchstart: A()
}, sc = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function kp() {
  const { bindChildren: e, childProviders: n, length: t } = sn(sc);
  return {
    length: t,
    buttons: n,
    bindButtons: e
  };
}
function Pp() {
  const { bindParent: e, parentProvider: n, index: t } = ln(sc);
  return {
    index: t,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: Op, n: Tp, classes: Ep } = ne("button"), Ip = ["type", "disabled"];
function Dp(e, n) {
  const t = le("var-loading"), o = le("var-hover-overlay"), r = Ue("ripple"), a = Ue("hover");
  return Ee((p(), w("button", {
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
    style: H({
      color: e.states.textColor,
      background: e.states.color
    }),
    type: e.nativeType,
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onTouchstart: n[1] || (n[1] = (...i) => e.handleTouchstart && e.handleTouchstart(...i))
  }, [
    e.loading || e.pending ? (p(), ke(t, {
      key: 0,
      class: v(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : x("v-if", !0),
    M(
      "div",
      {
        class: v(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        z(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    Z(o, {
      hovering: e.disabled ? !1 : e.hovering
    }, null, 8, ["hovering"])
  ], 46, Ip)), [
    [r, { disabled: e.disabled || !e.ripple }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const uc = ee({
  name: Op,
  components: {
    VarLoading: Ut,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Je, Hover: En },
  props: Sp,
  setup(e) {
    const n = C(!1), { buttonGroup: t } = Pp(), { hovering: o, handleHovering: r } = Wn(), a = N(() => {
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
      e.autoLoading && (n.value = !0, u = Ae(u) ? u : [u], Promise.all(u).then(() => {
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
      n: Tp,
      classes: Ep,
      handleHovering: r,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
uc.render = Dp;
var Ai = uc;
re(Ai);
const xT = Ai;
var mn = Ai;
const Bp = {
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
  onClick: A()
}, { name: Mp, n: Np, classes: Vp } = ne("back-top");
function Ap(e, n) {
  const t = le("var-icon"), o = le("var-button");
  return p(), ke(Xn, {
    to: "body",
    disabled: e.disabled
  }, [
    M(
      "div",
      ze({
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
        z(e.$slots, "default", {}, () => [
          Z(o, {
            elevation: e.elevation,
            type: "primary",
            round: "",
            "var-back-top-cover": ""
          }, {
            default: he(() => [
              Z(t, { name: "chevron-up" })
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
const dc = ee({
  name: Mp,
  components: {
    VarButton: mn,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: Bp,
  setup(e) {
    const n = C(!1), t = C(null), o = C(!0);
    let r;
    const a = pi(() => {
      n.value = lo(r) >= Fe(e.visibilityHeight);
    }, 200);
    Co(() => {
      l(), s(), o.value = !1;
    }), mt(s), br(u);
    function i(d) {
      y(e.onClick, d);
      const c = yi(r);
      so(r, {
        left: c,
        duration: e.duration,
        animation: qd
      });
    }
    function l() {
      r = e.target ? Bd(e.target, "BackTop") : ct(t.value);
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
      toSizeUnit: Se,
      n: Np,
      classes: Vp,
      handleClick: i
    };
  }
});
dc.render = Ap;
var zi = dc;
re(zi);
const eE = zi;
var na = zi;
const zp = {
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
  icon: Te(Ke, "name"),
  namespace: Te(Ke, "namespace"),
  color: String
}, { name: Lp, n: Rp, classes: Up } = ne("badge");
function Hp(e, n) {
  const t = le("var-icon");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      z(e.$slots, "default"),
      Z(je, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: he(() => [
          Ee(M(
            "span",
            ze({
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
              e.icon ? (p(), ke(t, {
                key: 0,
                class: v(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : x("v-if", !0),
              z(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (p(), w(
                  "span",
                  {
                    key: 0,
                    class: v(e.n("value"))
                  },
                  ae(e.value),
                  3
                  /* TEXT, CLASS */
                )) : x("v-if", !0)
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
const cc = ee({
  name: Lp,
  components: { VarIcon: He },
  inheritAttrs: !1,
  props: zp,
  setup(e) {
    return {
      value: N(() => {
        const { value: t, maxValue: o } = e;
        return t != null && o != null && V(t) > V(o) ? `${o}+` : t;
      }),
      n: Rp,
      classes: Up
    };
  }
});
cc.render = Hp;
var Li = cc;
re(Li);
const nE = Li;
var ar = Li;
const Fp = {
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
  onChange: A(),
  onBeforeChange: A(),
  onFabClick: A(),
  "onUpdate:active": A()
}, fc = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function Yp() {
  const { childProviders: e, length: n, bindChildren: t } = sn(
    fc
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: t
  };
}
var jp = Object.defineProperty, Ls = Object.getOwnPropertySymbols, Wp = Object.prototype.hasOwnProperty, qp = Object.prototype.propertyIsEnumerable, Rs = (e, n, t) => n in e ? jp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Us = (e, n) => {
  for (var t in n || (n = {}))
    Wp.call(n, t) && Rs(e, t, n[t]);
  if (Ls)
    for (var t of Ls(n))
      qp.call(n, t) && Rs(e, t, n[t]);
  return e;
};
const { name: Gp, n: Xp, classes: Kp } = ne("bottom-navigation"), { n: Sr } = ne("bottom-navigation-item"), Hs = Sr("--right-half-space"), Fs = Sr("--left-half-space"), Ys = Sr("--right-space"), Zp = {
  type: "primary"
};
function Jp(e, n) {
  const t = le("var-button");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: H(`z-index:${e.zIndex}`)
    },
    [
      z(e.$slots, "default"),
      e.$slots.fab ? (p(), ke(t, ze({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, { round: "" }), {
        default: he(() => [
          z(e.$slots, "fab")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "onClick"])) : x("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const vc = ee({
  name: Gp,
  components: { VarButton: mn },
  props: Fp,
  setup(e, { slots: n }) {
    const t = C(null), o = N(() => e.active), r = N(() => e.activeColor), a = N(() => e.inactiveColor), i = C({}), { length: l, bottomNavigationItems: s, bindBottomNavigationItem: u } = Yp();
    u({
      active: o,
      activeColor: r,
      inactiveColor: a,
      onToggle: h
    }), fe(() => l.value, c), fe(
      () => e.fabProps,
      (P) => {
        i.value = Us(Us({}, Zp), P);
      },
      { immediate: !0, deep: !0 }
    ), an(() => {
      n.fab && O(l.value);
    }), ko(() => {
      T(), n.fab && O(l.value);
    });
    function c() {
      l.value === 0 || f() || m() || g();
    }
    function f() {
      return s.find(({ name: P }) => o.value === P.value);
    }
    function m() {
      return s.find(({ index: P }) => o.value === P.value);
    }
    function g() {
      vn(o.value) && (o.value < 0 ? y(e["onUpdate:active"], 0) : o.value > l.value - 1 && y(e["onUpdate:active"], l.value - 1));
    }
    function h(P) {
      o.value !== P && (e.onBeforeChange ? b(P) : S(P));
    }
    function b(P) {
      const B = Xo(y(e.onBeforeChange, P));
      Promise.all(B).then((E) => {
        E.every(Boolean) && S(P);
      });
    }
    function S(P) {
      y(e["onUpdate:active"], P), y(e.onChange, P);
    }
    function T() {
      k().forEach((B) => {
        B.classList.remove(Hs, Fs, Ys);
      });
    }
    function O(P) {
      const B = k(), E = B.length, R = P % 2 === 0;
      B.forEach((L, U) => {
        $(R, L, U, E);
      });
    }
    function $(P, B, E, R) {
      const L = E === R - 1;
      if (!P && L) {
        B.classList.add(Ys);
        return;
      }
      const U = E === R / 2 - 1, oe = E === R / 2;
      U ? B.classList.add(Hs) : oe && B.classList.add(Fs);
    }
    function k() {
      return Array.from(t.value.querySelectorAll(`.${Sr()}`));
    }
    function D() {
      y(e.onFabClick);
    }
    return {
      length: l,
      bottomNavigationDom: t,
      fabProps: i,
      n: Xp,
      classes: Kp,
      handleFabClick: D
    };
  }
});
vc.render = Jp;
var Ri = vc;
re(Ri);
const tE = Ri;
var ta = Ri;
const Qp = {
  name: String,
  label: String,
  icon: Te(Ke, "name"),
  namespace: Te(Ke, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: A()
};
function _p() {
  const { parentProvider: e, index: n, bindParent: t } = ln(
    fc
  );
  return t || Tn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: t
  };
}
const { name: xp, n: eg, classes: ng } = ne("bottom-navigation-item"), tg = {
  type: "danger",
  dot: !0
};
function og(e, n) {
  const t = le("var-icon"), o = le("var-badge"), r = Ue("ripple");
  return Ee((p(), w(
    "button",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: H({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      e.icon && !e.$slots.icon ? (p(), ke(t, {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: v(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      }, null, 8, ["name", "namespace", "class"])) : x("v-if", !0),
      z(e.$slots, "icon", {
        active: e.active === e.index || e.active === e.name
      }),
      e.badge ? (p(), ke(o, ze({ key: 1 }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }), null, 16, ["class"])) : x("v-if", !0),
      M(
        "span",
        {
          class: v(e.n("label"))
        },
        [
          e.$slots.default ? x("v-if", !0) : (p(), w(
            Ve,
            { key: 0 },
            [
              Ie(
                ae(e.label),
                1
                /* TEXT */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          )),
          z(e.$slots, "default")
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
const mc = ee({
  name: xp,
  components: {
    VarBadge: ar,
    VarIcon: He
  },
  directives: { Ripple: Je },
  props: Qp,
  setup(e) {
    const n = N(() => e.name), t = N(() => e.badge), o = C({}), { index: r, bottomNavigation: a, bindBottomNavigation: i } = _p(), { active: l, activeColor: s, inactiveColor: u } = a;
    i({
      name: n,
      index: r
    }), fe(
      () => t.value,
      (m) => {
        o.value = m === !0 ? tg : t.value;
      },
      { immediate: !0 }
    );
    function c() {
      return l.value === n.value || l.value === r.value ? s.value : u.value;
    }
    function f() {
      var m;
      const g = (m = n.value) != null ? m : r.value;
      y(e.onClick, g), y(a.onToggle, g);
    }
    return {
      index: r,
      active: l,
      badge: t,
      badgeProps: o,
      n: eg,
      classes: ng,
      computeColorStyle: c,
      handleClick: f
    };
  }
});
mc.render = og;
var Ui = mc;
re(Ui);
const oE = Ui;
var oa = Ui;
const rg = {
  separator: String,
  onClick: A()
}, hc = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function ag() {
  const { childProviders: e, bindChildren: n, length: t } = sn(
    hc
  );
  return {
    length: t,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function ig() {
  const { parentProvider: e, bindParent: n, index: t } = ln(
    hc
  );
  return n || Tn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: t,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: lg, n: sg, classes: ug } = ne("breadcrumb");
function dg(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      M(
        "div",
        {
          class: v(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
        },
        [
          z(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? x("v-if", !0) : z(e.$slots, "separator", { key: 0 }, () => {
        var t;
        return [
          M(
            "div",
            {
              class: v(e.n("separator"))
            },
            ae((t = e.separator) != null ? t : e.parentSeparator),
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
const pc = ee({
  name: lg,
  props: rg,
  setup(e) {
    const { index: n, breadcrumb: t, bindBreadcrumb: o } = ig(), r = N(() => n.value === t.length.value - 1), a = N(() => t.separator.value);
    o(null);
    function i(l) {
      r.value || y(e.onClick, l);
    }
    return {
      n: sg,
      classes: ug,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
pc.render = dg;
var Hi = pc;
re(Hi);
const rE = Hi;
var ra = Hi;
const cg = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: fg, n: vg } = ne("breadcrumbs");
function mg(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      z(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const gc = ee({
  name: fg,
  props: cg,
  setup(e) {
    const n = N(() => e.separator), { bindBreadcrumbList: t, length: o } = ag();
    return t({
      length: o,
      separator: n
    }), { n: vg };
  }
});
gc.render = mg;
var Fi = gc;
re(Fi);
const aE = Fi;
var aa = Fi;
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
}, { name: pg, n: gg, classes: bg } = ne("button-group");
function yg(e, n) {
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
      z(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const bc = ee({
  name: pg,
  props: hg,
  setup(e) {
    const { bindButtons: n } = kp(), t = {
      elevation: N(() => e.elevation),
      type: N(() => e.type),
      size: N(() => e.size),
      color: N(() => e.color),
      textColor: N(() => e.textColor),
      mode: N(() => e.mode)
    };
    return n(t), {
      n: gg,
      classes: bg,
      formatElevation: gn
    };
  }
});
bc.render = yg;
var Yi = bc;
re(Yi);
const iE = Yi;
var ia = Yi;
const $g = {
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
  onClick: A(),
  "onUpdate:floating": A()
};
var js = (e, n, t) => new Promise((o, r) => {
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
const { name: wg, n: Cg, classes: Sg } = ne("card"), kg = 500, Pg = ["src", "alt"];
function Og(e, n) {
  const t = le("var-icon"), o = le("var-button"), r = Ue("ripple");
  return Ee((p(), w(
    "div",
    {
      ref: "card",
      class: v(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: H({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      M(
        "div",
        {
          ref: "cardFloater",
          class: v(e.n("floater")),
          style: H({
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
          z(e.$slots, "image", {}, () => [
            e.src ? (p(), w("img", {
              key: 0,
              class: v(e.n("image")),
              style: H({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, Pg)) : x("v-if", !0)
          ]),
          M(
            "div",
            {
              class: v(e.n("container"))
            },
            [
              z(e.$slots, "title", {}, () => [
                e.title ? (p(), w(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("title"))
                  },
                  ae(e.title),
                  3
                  /* TEXT, CLASS */
                )) : x("v-if", !0)
              ]),
              z(e.$slots, "subtitle", {}, () => [
                e.subtitle ? (p(), w(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("subtitle"))
                  },
                  ae(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : x("v-if", !0)
              ]),
              z(e.$slots, "description", {}, () => [
                e.description ? (p(), w(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("description"))
                  },
                  ae(e.description),
                  3
                  /* TEXT, CLASS */
                )) : x("v-if", !0)
              ]),
              e.$slots.extra ? (p(), w(
                "div",
                {
                  key: 0,
                  class: v(e.n("footer"))
                },
                [
                  z(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : x("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (p(), w(
                "div",
                {
                  key: 1,
                  class: v(e.n("floating-content")),
                  style: H({
                    height: e.contentHeight,
                    opacity: e.opacity,
                    transition: `opacity ${e.floatingDuration * 2}ms`
                  })
                },
                [
                  z(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : x("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (p(), w(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: H({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              z(e.$slots, "close-button", {}, () => [
                Z(o, {
                  "var-card-cover": "",
                  round: "",
                  class: v(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: On(e.close, ["stop"])
                }, {
                  default: he(() => [
                    Z(t, {
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
          )) : x("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      M(
        "div",
        {
          class: v(e.n("holder")),
          style: H({
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
const yc = ee({
  name: wg,
  directives: { Ripple: Je },
  components: {
    VarIcon: He,
    VarButton: mn
  },
  props: $g,
  setup(e) {
    const n = C(null), t = C(null), o = C("auto"), r = C("auto"), a = C("100%"), i = C("100%"), l = C("auto"), s = C("auto"), u = C(void 0), d = C("hidden"), c = C("0px"), f = C("0"), m = N(() => e.layout === "row"), g = C(!1), h = C(!1), { zIndex: b } = Eo(() => e.floating, 1);
    let S = "auto", T = "auto", O = null;
    const $ = C(null);
    $r(
      () => e.floating,
      () => !m.value
    ), fe(
      () => e.floating,
      (E) => {
        m.value || Ye(() => {
          E ? k() : D();
        });
      },
      { immediate: !0 }
    );
    function k() {
      return js(this, null, function* () {
        clearTimeout($.value), clearTimeout(O), $.value = null, $.value = setTimeout(
          () => js(this, null, function* () {
            const { width: E, height: R, left: L, top: U } = en(n.value);
            o.value = Se(E), r.value = Se(R), a.value = o.value, i.value = r.value, l.value = Se(U), s.value = Se(L), u.value = "fixed", S = l.value, T = s.value, g.value = !0, yield cn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", h.value = !0;
          }),
          e.ripple ? kg : 0
        );
      });
    }
    function D() {
      clearTimeout(O), clearTimeout($.value), $.value = null, a.value = o.value, i.value = r.value, l.value = S, s.value = T, c.value = "0px", f.value = "0", g.value = !1, O = setTimeout(() => {
        o.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", S = "auto", T = "auto", d.value = "hidden", u.value = void 0, h.value = !1;
      }, e.floatingDuration);
    }
    function P() {
      y(e["onUpdate:floating"], !1);
    }
    function B(E) {
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
      zIndex: b,
      isRow: m,
      showFloatingButtons: g,
      floated: h,
      n: Cg,
      classes: Sg,
      toSizeUnit: Se,
      close: P,
      formatElevation: gn,
      handleClick: B
    };
  }
});
yc.render = Og;
var ji = yc;
re(ji);
const lE = ji;
var la = ji;
const Tg = {
  title: [Number, String],
  icon: Te(Ke, "name"),
  namespace: Te(Ke, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: A()
}, { name: Eg, n: Ig, classes: Dg } = ne("cell");
function Bg(e, n) {
  const t = le("var-icon"), o = Ue("ripple");
  return Ee((p(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: H(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      z(e.$slots, "icon", {}, () => [
        e.icon ? (p(), w(
          "div",
          {
            key: 0,
            class: v(e.classes(e.n("icon"), e.iconClass))
          },
          [
            Z(t, {
              name: e.icon,
              namespace: e.namespace
            }, null, 8, ["name", "namespace"])
          ],
          2
          /* CLASS */
        )) : x("v-if", !0)
      ]),
      M(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          z(e.$slots, "default", {}, () => [
            e.title ? (p(), w(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("title"), e.titleClass))
              },
              ae(e.title),
              3
              /* TEXT, CLASS */
            )) : x("v-if", !0)
          ]),
          z(e.$slots, "description", {}, () => [
            e.description ? (p(), w(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("description"), e.descriptionClass))
              },
              ae(e.description),
              3
              /* TEXT, CLASS */
            )) : x("v-if", !0)
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
          z(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : x("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const $c = ee({
  name: Eg,
  components: { VarIcon: He },
  directives: { Ripple: Je },
  props: Tg,
  setup(e) {
    const n = N(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Se(e.borderOffset),
      "--cell-border-right": Se(e.borderOffset)
    });
    function t(o) {
      y(e.onClick, o);
    }
    return {
      borderOffsetStyles: n,
      n: Ig,
      classes: Dg,
      toSizeUnit: Se,
      handleClick: t
    };
  }
});
$c.render = Bg;
var Wi = $c;
re(Wi);
const sE = Wi;
var ir = Wi;
const Mg = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Ng, n: Vg } = ne("form-details"), Ag = { key: 0 }, zg = { key: 0 };
function Lg(e, n) {
  return p(), ke(je, {
    name: e.n()
  }, {
    default: he(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (p(), w(
        "div",
        {
          key: 0,
          class: v(e.n())
        },
        [
          M(
            "div",
            {
              class: v(e.n("error-message"))
            },
            [
              Z(je, {
                name: e.n("message")
              }, {
                default: he(() => [
                  e.errorMessage ? (p(), w(
                    "div",
                    Ag,
                    ae(e.errorMessage),
                    1
                    /* TEXT */
                  )) : x("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          ),
          M(
            "div",
            {
              class: v(e.n("extra-message"))
            },
            [
              Z(je, {
                name: e.n("message")
              }, {
                default: he(() => [
                  z(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (p(), w(
                      "div",
                      zg,
                      ae(e.extraMessage),
                      1
                      /* TEXT */
                    )) : x("v-if", !0)
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
      )) : x("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const wc = ee({
  name: Ng,
  props: Mg,
  setup: () => ({ n: Vg })
});
wc.render = Lg;
var qi = wc;
re(qi);
const uE = qi;
var hn = qi;
const Rg = {
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
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A(),
  "onUpdate:indeterminate": A()
}, Cc = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Ug() {
  const { bindChildren: e, childProviders: n, length: t } = sn(
    Cc
  );
  return {
    length: t,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Hg() {
  const { bindParent: e, parentProvider: n, index: t } = ln(
    Cc
  );
  return {
    index: t,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var Fg = Object.defineProperty, Yg = Object.defineProperties, jg = Object.getOwnPropertyDescriptors, Ws = Object.getOwnPropertySymbols, Wg = Object.prototype.hasOwnProperty, qg = Object.prototype.propertyIsEnumerable, qs = (e, n, t) => n in e ? Fg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Gg = (e, n) => {
  for (var t in n || (n = {}))
    Wg.call(n, t) && qs(e, t, n[t]);
  if (Ws)
    for (var t of Ws(n))
      qg.call(n, t) && qs(e, t, n[t]);
  return e;
}, Xg = (e, n) => Yg(e, jg(n));
const Sc = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Dn() {
  const { parentProvider: e, index: n, bindParent: t } = ln(Sc), o = qt();
  return {
    index: n,
    form: e,
    bindForm: t ? (a) => {
      t(Xg(Gg({}, a), { instance: o }));
    } : null
  };
}
function Kg() {
  const { childProviders: e, length: n, bindChildren: t } = sn(Sc);
  return {
    length: n,
    formItems: e,
    bindFormItems: t
  };
}
const { name: Zg, n: Jg, classes: Qg } = ne("checkbox");
function _g(e, n) {
  const t = le("var-icon"), o = le("var-hover-overlay"), r = le("var-form-details"), a = Ue("hover"), i = Ue("ripple");
  return p(), w(
    "div",
    {
      class: v(e.n("wrap")),
      onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
    },
    [
      M(
        "div",
        {
          class: v(e.n())
        },
        [
          Ee((p(), w(
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
              style: H({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
            },
            [
              e.isIndeterminate ? z(e.$slots, "indeterminate-icon", { key: 0 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "minus-box",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : x("v-if", !0),
              e.checked && !e.isIndeterminate ? z(e.$slots, "checked-icon", { key: 1 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-marked",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : x("v-if", !0),
              !e.checked && !e.isIndeterminate ? z(e.$slots, "unchecked-icon", { key: 2 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-blank-outline",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : x("v-if", !0),
              Z(o, {
                hovering: !e.disabled && !e.formDisabled && e.hovering
              }, null, 8, ["hovering"])
            ],
            6
            /* CLASS, STYLE */
          )), [
            [a, e.handleHovering, "desktop"],
            [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
          ]),
          M(
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
              z(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      Z(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const kc = ee({
  name: Zg,
  directives: { Ripple: Je, Hover: En },
  components: {
    VarIcon: He,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  props: Rg,
  setup(e) {
    const n = Lt(e, "modelValue"), t = Lt(e, "indeterminate"), o = N(() => n.value === e.checkedValue), r = N(() => e.checkedValue), a = C(!1), { checkboxGroup: i, bindCheckboxGroup: l } = Hg(), { hovering: s, handleHovering: u } = Wn(), { form: d, bindForm: c } = Dn(), {
      errorMessage: f,
      validateWithTrigger: m,
      validate: g,
      // expose
      resetValidation: h
    } = In(), b = {
      checkedValue: r,
      checked: o,
      sync: $,
      validate: B,
      resetValidation: h,
      reset: D,
      resetWithAnimation: k
    };
    y(l, b), y(c, b);
    function S(E) {
      Ye(() => {
        const { validateTrigger: R, rules: L, modelValue: U } = e;
        m(R, E, L, U);
      });
    }
    function T(E) {
      const { checkedValue: R, onChange: L } = e;
      n.value = E, t.value = !1, y(L, n.value), S("onChange"), E === R ? i == null || i.onChecked(R) : i == null || i.onUnchecked(R);
    }
    function O(E) {
      const { disabled: R, readonly: L, checkedValue: U, uncheckedValue: oe, onClick: G } = e;
      if (d != null && d.disabled.value || R || (y(G, E), d != null && d.readonly.value || L))
        return;
      a.value = !0;
      const j = i ? i.checkedCount.value >= Number(i.max.value) : !1;
      !o.value && j || T(o.value ? oe : U);
    }
    function $(E) {
      const { checkedValue: R, uncheckedValue: L } = e;
      n.value = E.includes(R) ? R : L;
    }
    function k() {
      a.value = !1;
    }
    function D() {
      n.value = e.uncheckedValue, h();
    }
    function P(E) {
      const { checkedValue: R, uncheckedValue: L } = e;
      ![R, L].includes(E) && (E = o.value ? L : R), T(E);
    }
    function B() {
      return g(e.rules, e.modelValue);
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
      n: Jg,
      classes: Qg,
      handleHovering: u,
      handleClick: O,
      toggle: P,
      reset: D,
      validate: B,
      resetValidation: h
    };
  }
});
kc.render = _g;
var Gi = kc;
re(Gi);
const dE = Gi;
var lr = Gi;
const xg = {
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
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: e0, n: n0, classes: t0 } = ne("checkbox-group");
function o0(e, n) {
  const t = le("var-form-details");
  return p(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      M(
        "div",
        {
          class: v(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          z(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      Z(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Pc = ee({
  name: e0,
  components: { VarFormDetails: hn },
  props: xg,
  setup(e) {
    const n = N(() => e.max), t = N(() => e.modelValue.length), { length: o, checkboxes: r, bindCheckboxes: a } = Ug(), { bindForm: i } = Dn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = In(), c = N(() => l.value), f = {
      max: n,
      checkedCount: t,
      onChecked: h,
      onUnchecked: b,
      validate: D,
      resetValidation: d,
      reset: k,
      errorMessage: c
    };
    fe(() => e.modelValue, S, { deep: !0 }), fe(() => o.value, S), a(f), y(i, f);
    function m(P) {
      Ye(() => {
        const { validateTrigger: B, rules: E, modelValue: R } = e;
        s(B, P, E, R);
      });
    }
    function g(P) {
      y(e["onUpdate:modelValue"], P), y(e.onChange, P), m("onChange");
    }
    function h(P) {
      const { modelValue: B } = e;
      B.includes(P) || g([...B, P]);
    }
    function b(P) {
      const { modelValue: B } = e;
      B.includes(P) && g(B.filter((E) => E !== P));
    }
    function S() {
      return r.forEach(({ sync: P }) => P(e.modelValue));
    }
    function T() {
      r.forEach((P) => P.resetWithAnimation());
    }
    function O() {
      const P = r.map(({ checkedValue: E }) => E.value), B = ls(P);
      return T(), y(e["onUpdate:modelValue"], B), B;
    }
    function $() {
      const P = r.filter(({ checked: E }) => !E.value).map(({ checkedValue: E }) => E.value), B = ls(P);
      return T(), y(e["onUpdate:modelValue"], B), B;
    }
    function k() {
      y(e["onUpdate:modelValue"], []), d();
    }
    function D() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: n0,
      classes: t0,
      checkAll: O,
      inverseAll: $,
      reset: k,
      validate: D,
      resetValidation: d
    };
  }
});
Pc.render = o0;
var Xi = Pc;
re(Xi);
const cE = Xi;
var sa = Xi;
const r0 = {
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
  iconName: Te(Ke, "name"),
  namespace: Te(Ke, "namespace"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  block: Boolean,
  closable: Boolean,
  onClose: A()
}, { name: a0, n: Kn, classes: i0 } = ne("chip");
function l0(e, n) {
  const t = le("var-icon");
  return p(), ke(je, {
    name: e.n("$-fade")
  }, {
    default: he(() => [
      M(
        "span",
        ze({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [
          z(e.$slots, "left"),
          M(
            "span",
            {
              class: v(e.n(`text-${e.size}`))
            },
            [
              z(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          z(e.$slots, "right"),
          e.closable ? (p(), w(
            "span",
            {
              key: 0,
              class: v(e.n("--close")),
              onClick: n[0] || (n[0] = (...o) => e.handleClose && e.handleClose(...o))
            },
            [
              Z(t, {
                name: `${e.iconName ? e.iconName : "close-circle"}`,
                namespace: e.namespace
              }, null, 8, ["name", "namespace"])
            ],
            2
            /* CLASS */
          )) : x("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Oc = ee({
  name: a0,
  components: {
    VarIcon: He
  },
  inheritAttrs: !1,
  props: r0,
  setup(e) {
    const n = N(() => {
      const { plain: r, textColor: a, color: i } = e;
      return r ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), t = N(() => {
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
      classes: i0,
      handleClose: o
    };
  }
});
Oc.render = l0;
var Ki = Oc;
re(Ki);
const fE = Ki;
var sr = Ki;
const s0 = {
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
  onClick: A()
}, Tc = Symbol("ROW_BIND_COL_KEY");
function u0() {
  const { bindChildren: e, childProviders: n, length: t } = sn(Tc);
  return {
    length: t,
    cols: n,
    bindCols: e
  };
}
function d0() {
  const { parentProvider: e, index: n, bindParent: t } = ln(Tc);
  return {
    index: n,
    row: e,
    bindRow: t
  };
}
const { name: c0, n: Ro, classes: f0 } = ne("col");
function v0(e, n) {
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
      style: H({
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
      z(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Ec = ee({
  name: c0,
  props: s0,
  setup(e) {
    const n = N(() => V(e.span)), t = N(() => V(e.offset)), o = C({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = d0(), i = {
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
      if (ao(d)) {
        const { offset: f, span: m } = d;
        Number(m) >= 0 && c.push(Ro(`--span-${u}-${m}`)), f && c.push(Ro(`--offset-${u}-${f}`));
      } else
        Number(d) >= 0 && c.push(Ro(`--span-${u}-${d}`));
      return c;
    }
    function s(u) {
      y(e.onClick, u);
    }
    return {
      span: n,
      offset: t,
      padding: o,
      n: Ro,
      classes: f0,
      toNumber: V,
      toSizeUnit: Se,
      getSize: l,
      handleClick: s,
      padStartFlex: or
    };
  }
});
Ec.render = v0;
var Zi = Ec;
re(Zi);
const vE = Zi;
var ua = Zi;
const Ic = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function m0() {
  const { childProviders: e, length: n, bindChildren: t } = sn(
    Ic
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
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: p0, n: g0 } = ne("collapse");
function b0(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      z(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Dc = ee({
  name: p0,
  props: h0,
  setup(e) {
    const n = N(() => e.modelValue), t = N(() => e.offset), o = N(() => e.divider), r = N(() => e.elevation), { length: a, collapseItem: i, bindCollapseItem: l } = m0(), s = {
      active: n,
      offset: t,
      divider: o,
      elevation: r,
      updateItem: c
    };
    fe(
      () => a.value,
      () => Ye().then(g)
    ), fe(
      () => e.modelValue,
      () => Ye().then(g)
    ), l(s);
    function u() {
      return !e.accordion && !Ae(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ae(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0;
    }
    function d(h, b) {
      return u() ? b ? e.accordion ? h : [...e.modelValue, h] : e.accordion ? null : e.modelValue.filter((S) => S !== h) : null;
    }
    function c(h, b) {
      const S = d(h, b);
      y(e["onUpdate:modelValue"], S), y(e.onChange, S);
    }
    function f() {
      if (e.accordion)
        return i.find(({ name: b }) => e.modelValue === b.value);
      const h = i.filter(({ name: b }) => b.value === void 0 ? !1 : e.modelValue.includes(b.value));
      return h.length ? h : void 0;
    }
    function m() {
      return e.accordion ? i.find(
        ({ index: h, name: b }) => b.value === void 0 && e.modelValue === h.value
      ) : i.filter(
        ({ index: h, name: b }) => b.value === void 0 && e.modelValue.includes(h.value)
      );
    }
    function g() {
      if (!u())
        return;
      const h = f() || m();
      if (e.accordion && !h || !e.accordion && !h.length) {
        i.forEach((b) => {
          b.init(e.accordion, !1);
        });
        return;
      }
      i.forEach((b) => {
        const S = e.accordion ? h === b : h.includes(b);
        b.init(e.accordion, S);
      });
    }
    return {
      divider: o,
      n: g0
    };
  }
});
Dc.render = b0;
var Ji = Dc;
re(Ji);
const mE = Ji;
var da = Ji;
function y0() {
  const { parentProvider: e, index: n, bindParent: t } = ln(
    Ic
  );
  return t || Tn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: t
  };
}
const $0 = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var Gs = (e, n, t) => new Promise((o, r) => {
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
const { name: w0, n: C0, classes: S0 } = ne("collapse-item");
function k0(e, n) {
  const t = le("var-icon");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: H(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      M(
        "div",
        {
          class: v(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      M(
        "div",
        {
          class: v(e.n("header")),
          onClick: n[0] || (n[0] = (o) => e.toggle())
        },
        [
          M(
            "div",
            {
              class: v(e.n("header-title"))
            },
            [
              z(e.$slots, "title", {}, () => [
                Ie(
                  ae(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          M(
            "div",
            {
              class: v(e.n("header-icon"))
            },
            [
              z(e.$slots, "icon", {}, () => [
                Z(t, {
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
      Ee(M(
        "div",
        {
          class: v(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...o) => e.transitionend && e.transitionend(...o)),
          onTransitionstart: n[2] || (n[2] = (...o) => e.start && e.start(...o))
        },
        [
          M(
            "div",
            {
              class: v(e.n("content-wrap"))
            },
            [
              z(e.$slots, "default")
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
const Bc = ee({
  name: w0,
  components: {
    VarIcon: He
  },
  props: $0,
  setup(e) {
    const n = C(!1), t = C(!1), o = C(null), r = N(() => e.name), { index: a, collapse: i, bindCollapse: l } = y0(), { active: s, offset: u, divider: d, elevation: c, updateItem: f } = i, m = {
      index: a,
      name: r,
      init: S
    };
    let g = !0;
    fe(n, (k) => {
      k ? h() : b();
    }), l(m);
    function h() {
      return Gs(this, null, function* () {
        if (!o.value || (o.value.style.height = "", t.value = !0, yield Ko(), !o.value))
          return;
        const { offsetHeight: k } = o.value;
        o.value.style.height = "0px", yield Ko(), o.value && (o.value.style.height = k + "px", g && (yield cn(), g && $()));
      });
    }
    function b() {
      return Gs(this, null, function* () {
        if (!o.value)
          return;
        const { offsetHeight: k } = o.value;
        o.value.style.height = k + "px", yield Ko(), o.value.style.height = "0px";
      });
    }
    function S(k, D) {
      s.value === void 0 || k && Ae(s.value) || D === n.value || (n.value = D, T(!0));
    }
    function T(k) {
      e.disabled || k || f(e.name || a.value, !n.value);
    }
    function O() {
      g = !1;
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
      classes: S0,
      toggle: T,
      transitionend: $,
      formatElevation: gn
    };
  }
});
Bc.render = k0;
var Qi = Bc;
re(Qi);
const hE = Qi;
var ca = Qi;
const P0 = {
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
  onEnd: A(),
  onChange: A()
}, { name: O0, n: T0 } = ne("countdown"), fa = 1e3, va = 60 * fa, ma = 60 * va, Xs = 24 * ma;
function E0(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      z(e.$slots, "default", at(Po(e.timeData)), () => [
        Ie(
          ae(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const Mc = ee({
  name: O0,
  props: P0,
  setup(e) {
    const n = C(""), t = C({
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
    }), So(f);
    function s(g, h) {
      const b = Object.values(h), S = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (S.forEach((O, $) => {
        g.includes(O) ? g = g.replace(O, Ct(`${b[$]}`, 2, "0")) : b[$ + 1] += b[$] * T[$];
      }), g.includes("S")) {
        const O = Ct(`${b[b.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", O) : g.includes("SS") ? g = g.replace("SS", O.slice(0, 2)) : g = g.replace("S", O.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const h = Math.floor(g / Xs), b = Math.floor(g % Xs / ma), S = Math.floor(g % ma / va), T = Math.floor(g % va / fa), O = Math.floor(g % fa), $ = {
        days: h,
        hours: b,
        minutes: S,
        seconds: T,
        milliseconds: O
      };
      t.value = $, y(e.onChange, t.value), n.value = s(e.format, $);
    }
    function d() {
      const { time: g, onEnd: h } = e, b = performance.now();
      if (o || (o = b + V(g)), i = o - b, i < 0 && (i = 0), u(i), i === 0) {
        y(h);
        return;
      }
      r && (a = io(d));
    }
    function c(g = !1) {
      r && !g || (r = !0, o = performance.now() + (i || V(e.time)), d());
    }
    function f() {
      r = !1, ss(a);
    }
    function m() {
      o = 0, r = !1, ss(a), d();
    }
    return {
      showTime: n,
      timeData: t,
      n: T0,
      start: c,
      pause: f,
      reset: m
    };
  }
});
Mc.render = E0;
var _i = Mc;
re(_i);
const pE = _i;
var ha = _i;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Bt = 9e15, bt = 1e9, pa = "0123456789abcdef", ur = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", dr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ga = {
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
}, Nc, Yn, $e = !0, kr = "[DecimalError] ", ft = kr + "Invalid argument: ", Vc = kr + "Precision limit exceeded", Ac = kr + "crypto unavailable", zc = "[object Decimal]", rn = Math.floor, _e = Math.pow, I0 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, D0 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, B0 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Lc = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, An = 1e7, be = 7, M0 = 9007199254740991, N0 = ur.length - 1, ba = dr.length - 1, K = { toStringTag: zc };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), pe(e);
};
K.ceil = function() {
  return pe(new this.constructor(this), this.e + 1, 2);
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
  return t.d ? t.d[0] ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + be, o.rounding = 1, t = V0(o, Yc(o, t)), o.precision = e, o.rounding = n, pe(Yn == 2 || Yn == 3 ? t.neg() : t, e, n, !0)) : new o(1) : new o(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, t, o, r, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new c(d);
  for ($e = !1, a = d.s * _e(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (t = on(d.d), e = d.e, (a = (e - t.length + 1) % 3) && (t += a == 1 || a == -2 ? "0" : "00"), a = _e(t, 1 / 3), e = rn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), o = new c(t), o.s = d.s) : o = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = o, s = l.times(l).times(l), u = s.plus(d), o = Re(u.plus(d).times(l), u.plus(s), i + 2, 1), on(l.d).slice(0, i) === (t = on(o.d)).slice(0, i))
      if (t = t.slice(i - 3, i + 1), t == "9999" || !r && t == "4999") {
        if (!r && (pe(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          o = l;
          break;
        }
        i += 4, r = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (pe(o, e + 1, 1), n = !o.times(o).times(o).eq(d));
        break;
      }
  return $e = !0, pe(o, e, c.rounding, n);
};
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, t = NaN;
  if (n) {
    if (e = n.length - 1, t = (e - rn(this.e / be)) * be, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
K.dividedBy = K.div = function(e) {
  return Re(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var n = this, t = n.constructor;
  return pe(Re(n, new t(e), 0, 1, 1), t.precision, t.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return pe(new this.constructor(this), this.e + 1, 3);
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
  t = i.precision, o = i.rounding, i.precision = t + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / Or(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = Ht(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return pe(a, i.precision = t, i.rounding = o, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, t, o, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero())
    return new a(r);
  if (n = a.precision, t = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, o = r.d.length, o < 3)
    r = Ht(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(o), e = e > 16 ? 16 : e | 0, r = r.times(1 / Or(5, e)), r = Ht(a, 2, r, r, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = t, pe(r, n, t, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 7, o.rounding = 1, Re(t.sinh(), t.cosh(), o.precision = e, o.rounding = n)) : new o(t.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, t = n.constructor, o = n.abs().cmp(1), r = t.precision, a = t.rounding;
  return o !== -1 ? o === 0 ? n.isNeg() ? Vn(t, r, a) : new t(0) : new t(NaN) : n.isZero() ? Vn(t, r + 4, a).times(0.5) : (t.precision = r + 6, t.rounding = 1, n = n.asin(), e = Vn(t, r + 4, a).times(0.5), t.precision = r, t.rounding = a, e.minus(n));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, n, t = this, o = t.constructor;
  return t.lte(1) ? new o(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, o.rounding = 1, $e = !1, t = t.times(t).minus(1).sqrt().plus(t), $e = !0, o.precision = e, o.rounding = n, t.ln()) : new o(t);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, n, t = this, o = t.constructor;
  return !t.isFinite() || t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, o.rounding = 1, $e = !1, t = t.times(t).plus(1).sqrt().plus(t), $e = !0, o.precision = e, o.rounding = n, t.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, n, t, o, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, o = r.sd(), Math.max(o, e) < 2 * -r.e - 1 ? pe(new a(r), e, n, !0) : (a.precision = t = o - r.e, r = Re(r.plus(1), new a(1).minus(r), t + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
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
    if (u.abs().eq(1) && c + 4 <= ba)
      return i = Vn(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (c + 4 <= ba)
      return i = Vn(d, c + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = c + 10, d.rounding = 1, t = Math.min(28, l / be + 2 | 0), e = t; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for ($e = !1, n = Math.ceil(l / be), o = 1, s = u.times(u), i = new d(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(o += 2)), r = r.times(s), i = a.plus(r.div(o += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === a.d[e] && e--; )
        ;
  return t && (i = i.times(2 << t - 1)), $e = !0, pe(i, d.precision = c, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && rn(this.e / be) > this.d.length - 2;
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
  if ($e = !1, l = c + m, i = ot(u, l), o = n ? cr(d, l + 10) : ot(e, l), s = Re(i, o, l, 1), co(s.d, r = c, f))
    do
      if (l += 10, i = ot(u, l), o = n ? cr(d, l + 10) : ot(e, l), s = Re(i, o, l, 1), !a) {
        +on(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = pe(s, c + 1, 0));
        break;
      }
    while (co(s.d, r += 10, f));
  return $e = !0, pe(s, c, f);
};
K.minus = K.sub = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c, f, m = this, g = m.constructor;
  if (e = new g(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new g(NaN) : m.d ? e.s = -e.s : e = new g(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new g(m);
    else
      return new g(s === 3 ? -0 : 0);
    return $e ? pe(e, l, s) : e;
  }
  if (t = rn(e.e / be), d = rn(m.e / be), u = u.slice(), a = d - t, a) {
    for (c = a < 0, c ? (n = u, a = -a, i = f.length) : (n = f, t = d, i = u.length), o = Math.max(Math.ceil(l / be), i) + 2, a > o && (a = o, n.length = 1), n.reverse(), o = a; o--; )
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
  return u[0] ? (e.d = u, e.e = Pr(u, t), $e ? pe(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, t = this, o = t.constructor;
  return e = new o(e), !t.d || !e.s || e.d && !e.d[0] ? new o(NaN) : !e.d || t.d && !t.d[0] ? pe(new o(t), o.precision, o.rounding) : ($e = !1, o.modulo == 9 ? (n = Re(t, e.abs(), 0, 3, 1), n.s *= e.s) : n = Re(t, e, 0, o.modulo, 1), n = n.times(e), $e = !0, t.minus(n));
};
K.naturalExponential = K.exp = function() {
  return ya(this);
};
K.naturalLogarithm = K.ln = function() {
  return ot(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, pe(e);
};
K.plus = K.add = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), $e ? pe(e, l, s) : e;
  if (a = rn(c.e / be), o = rn(e.e / be), u = u.slice(), r = a - o, r) {
    for (r < 0 ? (t = u, r = -r, i = d.length) : (t = d, o = a, i = u.length), a = Math.ceil(l / be), i = a > i ? a + 1 : i + 1, r > i && (r = i, t.length = 1), t.reverse(); r--; )
      t.push(0);
    t.reverse();
  }
  for (i = u.length, r = d.length, i - r < 0 && (r = i, t = d, d = u, u = t), n = 0; r; )
    n = (u[--r] = u[r] + d[r] + n) / An | 0, u[r] %= An;
  for (n && (u.unshift(n), ++o), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = Pr(u, o), $e ? pe(e, l, s) : e;
};
K.precision = K.sd = function(e) {
  var n, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(ft + e);
  return t.d ? (n = Rc(t.d), e && t.e + 1 > n && (n = t.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return pe(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + be, o.rounding = 1, t = z0(o, Yc(o, t)), o.precision = e, o.rounding = n, pe(Yn > 2 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, t, o, r, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for ($e = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = on(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = rn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), o = new d(n)) : o = new d(u.toString()), t = (s = d.precision) + 3; ; )
    if (a = o, o = a.plus(Re(i, a, t + 2, 1)).times(0.5), on(a.d).slice(0, t) === (n = on(o.d)).slice(0, t))
      if (n = n.slice(t - 3, t + 1), n == "9999" || !r && n == "4999") {
        if (!r && (pe(a, s + 1, 0), a.times(a).eq(i))) {
          o = a;
          break;
        }
        t += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (pe(o, s + 1, 1), e = !o.times(o).eq(i));
        break;
      }
  return $e = !0, pe(o, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 10, o.rounding = 1, t = t.sin(), t.s = 1, t = Re(t, new o(1).minus(t.times(t)).sqrt(), e + 10, 0), o.precision = e, o.rounding = n, pe(Yn == 2 || Yn == 4 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
K.times = K.mul = function(e) {
  var n, t, o, r, a, i, l, s, u, d = this, c = d.constructor, f = d.d, m = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new c(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (t = rn(d.e / be) + rn(e.e / be), s = f.length, u = m.length, s < u && (a = f, f = m, m = a, i = s, s = u, u = i), a = [], i = s + u, o = i; o--; )
    a.push(0);
  for (o = u; --o >= 0; ) {
    for (n = 0, r = s + o; r > o; )
      l = a[r] + m[o] * f[r - o - 1] + n, a[r--] = l % An | 0, n = l / An | 0;
    a[r] = (a[r] + n) % An | 0;
  }
  for (; !a[--i]; )
    a.pop();
  return n ? ++t : a.shift(), e.d = a, e.e = Pr(a, t), $e ? pe(e, c.precision, c.rounding) : e;
};
K.toBinary = function(e, n) {
  return xi(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var t = this, o = t.constructor;
  return t = new o(t), e === void 0 ? t : (pn(e, 0, bt), n === void 0 ? n = o.rounding : pn(n, 0, 8), pe(t, e + t.e + 1, n));
};
K.toExponential = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Rn(o, !0) : (pn(e, 0, bt), n === void 0 ? n = r.rounding : pn(n, 0, 8), o = pe(new r(o), e + 1, n), t = Rn(o, !0, e + 1)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toFixed = function(e, n) {
  var t, o, r = this, a = r.constructor;
  return e === void 0 ? t = Rn(r) : (pn(e, 0, bt), n === void 0 ? n = a.rounding : pn(n, 0, 8), o = pe(new a(r), e + r.e + 1, n), t = Rn(o, !1, e + o.e + 1)), r.isNeg() && !r.isZero() ? "-" + t : t;
};
K.toFraction = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c, f, m = this, g = m.d, h = m.constructor;
  if (!g)
    return new h(m);
  if (u = t = new h(1), o = s = new h(0), n = new h(o), a = n.e = Rc(g) - m.e - 1, i = a % be, n.d[0] = _e(10, i < 0 ? be + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u))
      throw Error(ft + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for ($e = !1, l = new h(on(g)), d = h.precision, h.precision = a = g.length * be * 2; c = Re(l, n, 0, 1, 1), r = t.plus(c.times(o)), r.cmp(e) != 1; )
    t = o, o = r, r = u, u = s.plus(c.times(r)), s = r, r = n, n = l.minus(c.times(r)), l = r;
  return r = Re(e.minus(t), o, 0, 1, 1), s = s.plus(r.times(u)), t = t.plus(r.times(o)), s.s = u.s = m.s, f = Re(u, o, a, 1).minus(m).abs().cmp(Re(s, t, a, 1).minus(m).abs()) < 1 ? [u, o] : [s, t], h.precision = d, $e = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return xi(this, 16, e, n);
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
  return e.d[0] ? ($e = !1, t = Re(t, e, 0, n, 1).times(e), $e = !0, pe(t)) : (e.s = t.s, t = e), t;
};
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, n) {
  return xi(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, t, o, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(_e(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (o = s.precision, a = s.rounding, e.eq(1))
    return pe(l, o, a);
  if (n = rn(e.e / be), n >= e.d.length - 1 && (t = u < 0 ? -u : u) <= M0)
    return r = Uc(s, l, t, o), e.s < 0 ? new s(1).div(r) : pe(r, o, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return t = _e(+l, u), n = t == 0 || !isFinite(t) ? rn(u * (Math.log("0." + on(l.d)) / Math.LN10 + l.e + 1)) : new s(t + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : ($e = !1, s.rounding = l.s = 1, t = Math.min(12, (n + "").length), r = ya(e.times(ot(l, o + t)), o), r.d && (r = pe(r, o + 5, 1), co(r.d, o, a) && (n = o + 10, r = pe(ya(e.times(ot(l, n + t)), n), n + 5, 1), +on(r.d).slice(o + 1, o + 15) + 1 == 1e14 && (r = pe(r, o + 1, 0)))), r.s = i, $e = !0, s.rounding = a, pe(r, o, a));
};
K.toPrecision = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Rn(o, o.e <= r.toExpNeg || o.e >= r.toExpPos) : (pn(e, 1, bt), n === void 0 ? n = r.rounding : pn(n, 0, 8), o = pe(new r(o), e, n), t = Rn(o, e <= o.e || o.e <= r.toExpNeg, e)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var t = this, o = t.constructor;
  return e === void 0 ? (e = o.precision, n = o.rounding) : (pn(e, 1, bt), n === void 0 ? n = o.rounding : pn(n, 0, 8)), pe(new o(t), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, t = Rn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
K.truncated = K.trunc = function() {
  return pe(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, t = Rn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function on(e) {
  var n, t, o, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      o = e[n] + "", t = be - o.length, t && (a += Jn(t)), a += o;
    i = e[n], o = i + "", t = be - o.length, t && (a += Jn(t));
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
  return --n < 0 ? (n += be, r = 0) : (r = Math.ceil((n + 1) / be), n %= be), a = _e(10, be - n), l = e[r] % a | 0, o == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = t < 4 && l == 99999 || t > 3 && l == 49999 || l == 5e4 || l == 0) : i = (t < 4 && l + 1 == a || t > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == _e(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (o || t < 4) && l == 9999 || !o && t > 3 && l == 4999) : i = ((o || t < 4) && l + 1 == a || !o && t > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == _e(10, n - 3) - 1, i;
}
function Zo(e, n, t) {
  for (var o, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; )
      r[a] *= n;
    for (r[0] += pa.indexOf(e.charAt(i++)), o = 0; o < r.length; o++)
      r[o] > t - 1 && (r[o + 1] === void 0 && (r[o + 1] = 0), r[o + 1] += r[o] / t | 0, r[o] %= t);
  }
  return r.reverse();
}
function V0(e, n) {
  var t, o, r;
  if (n.isZero())
    return n;
  o = n.d.length, o < 32 ? (t = Math.ceil(o / 3), r = (1 / Or(4, t)).toString()) : (t = 16, r = "2.3283064365386962890625e-10"), e.precision += t, n = Ht(e, 1, n.times(r), new e(1));
  for (var a = t; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= t, n;
}
var Re = function() {
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
    var u, d, c, f, m, g, h, b, S, T, O, $, k, D, P, B, E, R, L, U, oe = o.constructor, G = o.s == r.s ? 1 : -1, j = o.d, X = r.d;
    if (!j || !j[0] || !X || !X[0])
      return new oe(
        // Return NaN if either NaN, or both Infinity or 0.
        !o.s || !r.s || (j ? X && j[0] == X[0] : !X) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          j && j[0] == 0 || !X ? G * 0 : G / 0
        )
      );
    for (s ? (m = 1, d = o.e - r.e) : (s = An, m = be, d = rn(o.e / m) - rn(r.e / m)), L = X.length, E = j.length, S = new oe(G), T = S.d = [], c = 0; X[c] == (j[c] || 0); c++)
      ;
    if (X[c] > (j[c] || 0) && d--, a == null ? (D = a = oe.precision, i = oe.rounding) : l ? D = a + (o.e - r.e) + 1 : D = a, D < 0)
      T.push(1), g = !0;
    else {
      if (D = D / m + 2 | 0, c = 0, L == 1) {
        for (f = 0, X = X[0], D++; (c < E || f) && D--; c++)
          P = f * s + (j[c] || 0), T[c] = P / X | 0, f = P % X | 0;
        g = f || c < E;
      } else {
        for (f = s / (X[0] + 1) | 0, f > 1 && (X = e(X, f, s), j = e(j, f, s), L = X.length, E = j.length), B = L, O = j.slice(0, L), $ = O.length; $ < L; )
          O[$++] = 0;
        U = X.slice(), U.unshift(0), R = X[0], X[1] >= s / 2 && ++R;
        do
          f = 0, u = n(X, O, L, $), u < 0 ? (k = O[0], L != $ && (k = k * s + (O[1] || 0)), f = k / R | 0, f > 1 ? (f >= s && (f = s - 1), h = e(X, f, s), b = h.length, $ = O.length, u = n(h, O, b, $), u == 1 && (f--, t(h, L < b ? U : X, b, s))) : (f == 0 && (u = f = 1), h = X.slice()), b = h.length, b < $ && h.unshift(0), t(O, h, $, s), u == -1 && ($ = O.length, u = n(X, O, L, $), u < 1 && (f++, t(O, L < $ ? U : X, $, s))), $ = O.length) : u === 0 && (f++, O = [0]), T[c++] = f, u && O[0] ? O[$++] = j[B] || 0 : (O = [j[B]], $ = 1);
        while ((B++ < E || O[0] !== void 0) && D--);
        g = O[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (m == 1)
      S.e = d, Nc = g;
    else {
      for (c = 1, f = T[0]; f >= 10; f /= 10)
        c++;
      S.e = c + d * m - 1, pe(S, l ? a + S.e + 1 : a, i, g);
    }
    return S;
  };
}();
function pe(e, n, t, o) {
  var r, a, i, l, s, u, d, c, f, m = e.constructor;
  e:
    if (n != null) {
      if (c = e.d, !c)
        return e;
      for (r = 1, l = c[0]; l >= 10; l /= 10)
        r++;
      if (a = n - r, a < 0)
        a += be, i = n, d = c[f = 0], s = d / _e(10, r - i - 1) % 10 | 0;
      else if (f = Math.ceil((a + 1) / be), l = c.length, f >= l)
        if (o) {
          for (; l++ <= f; )
            c.push(0);
          d = s = 0, r = 1, a %= be, i = a - be + 1;
        } else
          break e;
      else {
        for (d = l = c[f], r = 1; l >= 10; l /= 10)
          r++;
        a %= be, i = a - be + r, s = i < 0 ? 0 : d / _e(10, r - i - 1) % 10 | 0;
      }
      if (o = o || n < 0 || c[f + 1] !== void 0 || (i < 0 ? d : d % _e(10, r - i - 1)), u = t < 4 ? (s || o) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (t == 4 || o || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? i > 0 ? d / _e(10, r - i) : 0 : c[f - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), n < 1 || !c[0])
        return c.length = 0, u ? (n -= e.e + 1, c[0] = _e(10, (be - n % be) % be), e.e = -n || 0) : c[0] = e.e = 0, e;
      if (a == 0 ? (c.length = f, l = 1, f--) : (c.length = f + 1, l = _e(10, be - a), c[f] = i > 0 ? (d / _e(10, r - i) % _e(10, i) | 0) * l : 0), u)
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
  return $e && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Rn(e, n, t) {
  if (!e.isFinite())
    return Fc(e);
  var o, r = e.e, a = on(e.d), i = a.length;
  return n ? (t && (o = t - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Jn(o) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + Jn(-r - 1) + a, t && (o = t - i) > 0 && (a += Jn(o))) : r >= i ? (a += Jn(r + 1 - i), t && (o = t - r - 1) > 0 && (a = a + "." + Jn(o))) : ((o = r + 1) < i && (a = a.slice(0, o) + "." + a.slice(o)), t && (o = t - i) > 0 && (r + 1 === i && (a += "."), a += Jn(o))), a;
}
function Pr(e, n) {
  var t = e[0];
  for (n *= be; t >= 10; t /= 10)
    n++;
  return n;
}
function cr(e, n, t) {
  if (n > N0)
    throw $e = !0, t && (e.precision = t), Error(Vc);
  return pe(new e(ur), n, 1, !0);
}
function Vn(e, n, t) {
  if (n > ba)
    throw Error(Vc);
  return pe(new e(dr), n, t, !0);
}
function Rc(e) {
  var n = e.length - 1, t = n * be + 1;
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
function Uc(e, n, t, o) {
  var r, a = new e(1), i = Math.ceil(o / be + 4);
  for ($e = !1; ; ) {
    if (t % 2 && (a = a.times(n), Zs(a.d, i) && (r = !0)), t = rn(t / 2), t === 0) {
      t = a.d.length - 1, r && a.d[t] === 0 && ++a.d[t];
      break;
    }
    n = n.times(n), Zs(n.d, i);
  }
  return $e = !0, a;
}
function Ks(e) {
  return e.d[e.d.length - 1] & 1;
}
function Hc(e, n, t) {
  for (var o, r = new e(n[0]), a = 0; ++a < n.length; )
    if (o = new e(n[a]), o.s)
      r[t](o) && (r = o);
    else {
      r = o;
      break;
    }
  return r;
}
function ya(e, n) {
  var t, o, r, a, i, l, s, u = 0, d = 0, c = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? ($e = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (o = Math.log(_e(2, c)) / Math.LN10 * 2 + 5 | 0, s += o, t = a = i = new f(1), f.precision = s; ; ) {
    if (a = pe(a.times(e), s, 1), t = t.times(++d), l = i.plus(Re(a, t, s, 1)), on(l.d).slice(0, s) === on(i.d).slice(0, s)) {
      for (r = c; r--; )
        i = pe(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && co(i.d, s - o, m, u))
          f.precision = s += 10, t = a = l = new f(1), d = 0, u++;
        else
          return pe(i, f.precision = g, m, $e = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function ot(e, n) {
  var t, o, r, a, i, l, s, u, d, c, f, m = 1, g = 10, h = e, b = h.d, S = h.constructor, T = S.rounding, O = S.precision;
  if (h.s < 0 || !b || !b[0] || !h.e && b[0] == 1 && b.length == 1)
    return new S(b && !b[0] ? -1 / 0 : h.s != 1 ? NaN : b ? 0 : h);
  if (n == null ? ($e = !1, d = O) : d = n, S.precision = d += g, t = on(b), o = t.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; o < 7 && o != 1 || o == 1 && t.charAt(1) > 3; )
      h = h.times(e), t = on(h.d), o = t.charAt(0), m++;
    a = h.e, o > 1 ? (h = new S("0." + t), a++) : h = new S(o + "." + t.slice(1));
  } else
    return u = cr(S, d + 2, O).times(a + ""), h = ot(new S(o + "." + t.slice(1)), d - g).plus(u), S.precision = O, n == null ? pe(h, O, T, $e = !0) : h;
  for (c = h, s = i = h = Re(h.minus(1), h.plus(1), d, 1), f = pe(h.times(h), d, 1), r = 3; ; ) {
    if (i = pe(i.times(f), d, 1), u = s.plus(Re(i, new S(r), d, 1)), on(u.d).slice(0, d) === on(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(cr(S, d + 2, O).times(a + ""))), s = Re(s, new S(m), d, 1), n == null)
        if (co(s.d, d - g, T, l))
          S.precision = d += g, u = i = h = Re(c.minus(1), c.plus(1), d, 1), f = pe(h.times(h), d, 1), r = l = 1;
        else
          return pe(s, S.precision = O, T, $e = !0);
      else
        return S.precision = O, s;
    s = u, r += 2;
  }
}
function Fc(e) {
  return String(e.s * e.s / 0);
}
function $a(e, n) {
  var t, o, r;
  for ((t = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (o = n.search(/e/i)) > 0 ? (t < 0 && (t = o), t += +n.slice(o + 1), n = n.substring(0, o)) : t < 0 && (t = n.length), o = 0; n.charCodeAt(o) === 48; o++)
    ;
  for (r = n.length; n.charCodeAt(r - 1) === 48; --r)
    ;
  if (n = n.slice(o, r), n) {
    if (r -= o, e.e = t = t - o - 1, e.d = [], o = (t + 1) % be, t < 0 && (o += be), o < r) {
      for (o && e.d.push(+n.slice(0, o)), r -= be; o < r; )
        e.d.push(+n.slice(o, o += be));
      n = n.slice(o), o = be - n.length;
    } else
      o -= r;
    for (; o--; )
      n += "0";
    e.d.push(+n), $e && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function A0(e, n) {
  var t, o, r, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Lc.test(n))
      return $a(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (D0.test(n))
    t = 16, n = n.toLowerCase();
  else if (I0.test(n))
    t = 2;
  else if (B0.test(n))
    t = 8;
  else
    throw Error(ft + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, o = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = Uc(o, new o(t), a, a * 2)), u = Zo(n, t, An), d = u.length - 1, a = d; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new o(e.s * 0) : (e.e = Pr(u, d), e.d = u, $e = !1, i && (e = Re(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? _e(2, s) : rt.pow(2, s))), $e = !0, e);
}
function z0(e, n) {
  var t, o = n.d.length;
  if (o < 3)
    return n.isZero() ? n : Ht(e, 2, n, n);
  t = 1.4 * Math.sqrt(o), t = t > 16 ? 16 : t | 0, n = n.times(1 / Or(5, t)), n = Ht(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); t--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function Ht(e, n, t, o, r) {
  var a, i, l, s, u = e.precision, d = Math.ceil(u / be);
  for ($e = !1, s = t.times(t), l = new e(o); ; ) {
    if (i = Re(l.times(s), new e(n++ * n++), u, 1), l = r ? o.plus(i) : o.minus(i), o = Re(i.times(s), new e(n++ * n++), u, 1), i = l.plus(o), i.d[d] !== void 0) {
      for (a = d; i.d[a] === l.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = l, l = o, o = i, i = a;
  }
  return $e = !0, i.d.length = d + 1, i;
}
function Or(e, n) {
  for (var t = e; --n; )
    t *= e;
  return t;
}
function Yc(e, n) {
  var t, o = n.s < 0, r = Vn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return Yn = o ? 4 : 1, n;
  if (t = n.divToInt(r), t.isZero())
    Yn = o ? 3 : 2;
  else {
    if (n = n.minus(t.times(r)), n.lte(a))
      return Yn = Ks(t) ? o ? 2 : 3 : o ? 4 : 1, n;
    Yn = Ks(t) ? o ? 1 : 4 : o ? 3 : 2;
  }
  return n.minus(r).abs();
}
function xi(e, n, t, o) {
  var r, a, i, l, s, u, d, c, f, m = e.constructor, g = t !== void 0;
  if (g ? (pn(t, 1, bt), o === void 0 ? o = m.rounding : pn(o, 0, 8)) : (t = m.precision, o = m.rounding), !e.isFinite())
    d = Fc(e);
  else {
    for (d = Rn(e), i = d.indexOf("."), g ? (r = 2, n == 16 ? t = t * 4 - 3 : n == 8 && (t = t * 3 - 2)) : r = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Zo(Rn(f), 10, r), f.e = f.d.length), c = Zo(d, 10, r), a = s = c.length; c[--s] == 0; )
      c.pop();
    if (!c[0])
      d = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new m(e), e.d = c, e.e = a, e = Re(e, f, t, o, 0, r), c = e.d, a = e.e, u = Nc), i = c[t], l = r / 2, u = u || c[t + 1] !== void 0, u = o < 4 ? (i !== void 0 || u) && (o === 0 || o === (e.s < 0 ? 3 : 2)) : i > l || i === l && (o === 4 || u || o === 6 && c[t - 1] & 1 || o === (e.s < 0 ? 8 : 7)), c.length = t, u)
        for (; ++c[--t] > r - 1; )
          c[t] = 0, t || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += pa.charAt(c[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (c = Zo(d, r, n), s = c.length; !c[s - 1]; --s)
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
function Zs(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function L0(e) {
  return new this(e).abs();
}
function R0(e) {
  return new this(e).acos();
}
function U0(e) {
  return new this(e).acosh();
}
function H0(e, n) {
  return new this(e).plus(n);
}
function F0(e) {
  return new this(e).asin();
}
function Y0(e) {
  return new this(e).asinh();
}
function j0(e) {
  return new this(e).atan();
}
function W0(e) {
  return new this(e).atanh();
}
function q0(e, n) {
  e = new this(e), n = new this(n);
  var t, o = this.precision, r = this.rounding, a = o + 4;
  return !e.s || !n.s ? t = new this(NaN) : !e.d && !n.d ? (t = Vn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), t.s = e.s) : !n.d || e.isZero() ? (t = n.s < 0 ? Vn(this, o, r) : new this(0), t.s = e.s) : !e.d || n.isZero() ? (t = Vn(this, a, 1).times(0.5), t.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, t = this.atan(Re(e, n, a, 1)), n = Vn(this, a, 1), this.precision = o, this.rounding = r, t = e.s < 0 ? t.minus(n) : t.plus(n)) : t = this.atan(Re(e, n, a, 1)), t;
}
function G0(e) {
  return new this(e).cbrt();
}
function X0(e) {
  return pe(e = new this(e), e.e + 1, 2);
}
function K0(e, n, t) {
  return new this(e).clamp(n, t);
}
function Z0(e) {
  if (!e || typeof e != "object")
    throw Error(kr + "Object expected");
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
    if (t = a[n], r && (this[t] = ga[t]), (o = e[t]) !== void 0)
      if (rn(o) === o && o >= a[n + 1] && o <= a[n + 2])
        this[t] = o;
      else
        throw Error(ft + t + ": " + o);
  if (t = "crypto", r && (this[t] = ga[t]), (o = e[t]) !== void 0)
    if (o === !0 || o === !1 || o === 0 || o === 1)
      if (o)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(Ac);
      else
        this[t] = !1;
    else
      throw Error(ft + t + ": " + o);
  return this;
}
function J0(e) {
  return new this(e).cos();
}
function Q0(e) {
  return new this(e).cosh();
}
function jc(e) {
  var n, t, o;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r))
      return new r(a);
    if (u.constructor = r, Js(a)) {
      u.s = a.s, $e ? !a.d || a.e > r.maxE ? (u.e = NaN, u.d = null) : a.e < r.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
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
        $e ? i > r.maxE ? (u.e = NaN, u.d = null) : i < r.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return $a(u, a.toString());
    } else if (s !== "string")
      throw Error(ft + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), Lc.test(a) ? $a(u, a) : A0(u, a);
  }
  if (r.prototype = K, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = Z0, r.clone = jc, r.isDecimal = Js, r.abs = L0, r.acos = R0, r.acosh = U0, r.add = H0, r.asin = F0, r.asinh = Y0, r.atan = j0, r.atanh = W0, r.atan2 = q0, r.cbrt = G0, r.ceil = X0, r.clamp = K0, r.cos = J0, r.cosh = Q0, r.div = _0, r.exp = x0, r.floor = eb, r.hypot = nb, r.ln = tb, r.log = ob, r.log10 = ab, r.log2 = rb, r.max = ib, r.min = lb, r.mod = sb, r.mul = ub, r.pow = db, r.random = cb, r.round = fb, r.sign = vb, r.sin = mb, r.sinh = hb, r.sqrt = pb, r.sub = gb, r.sum = bb, r.tan = yb, r.tanh = $b, r.trunc = wb, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (o = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < o.length; )
      e.hasOwnProperty(t = o[n++]) || (e[t] = this[t]);
  return r.config(e), r;
}
function _0(e, n) {
  return new this(e).div(n);
}
function x0(e) {
  return new this(e).exp();
}
function eb(e) {
  return pe(e = new this(e), e.e + 1, 3);
}
function nb() {
  var e, n, t = new this(0);
  for ($e = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      t.d && (t = t.plus(n.times(n)));
    else {
      if (n.s)
        return $e = !0, new this(1 / 0);
      t = n;
    }
  return $e = !0, t.sqrt();
}
function Js(e) {
  return e instanceof rt || e && e.toStringTag === zc || !1;
}
function tb(e) {
  return new this(e).ln();
}
function ob(e, n) {
  return new this(e).log(n);
}
function rb(e) {
  return new this(e).log(2);
}
function ab(e) {
  return new this(e).log(10);
}
function ib() {
  return Hc(this, arguments, "lt");
}
function lb() {
  return Hc(this, arguments, "gt");
}
function sb(e, n) {
  return new this(e).mod(n);
}
function ub(e, n) {
  return new this(e).mul(n);
}
function db(e, n) {
  return new this(e).pow(n);
}
function cb(e) {
  var n, t, o, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : pn(e, 1, bt), o = Math.ceil(e / be), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(o)); a < o; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(o *= 4); a < o; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = o / 4;
    } else
      throw Error(Ac);
  else
    for (; a < o; )
      l[a++] = Math.random() * 1e7 | 0;
  for (o = l[--a], e %= be, o && e && (r = _e(10, be - e), l[a] = (o / r | 0) * r); l[a] === 0; a--)
    l.pop();
  if (a < 0)
    t = 0, l = [0];
  else {
    for (t = -1; l[0] === 0; t -= be)
      l.shift();
    for (o = 1, r = l[0]; r >= 10; r /= 10)
      o++;
    o < be && (t -= be - o);
  }
  return i.e = t, i.d = l, i;
}
function fb(e) {
  return pe(e = new this(e), e.e + 1, this.rounding);
}
function vb(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function mb(e) {
  return new this(e).sin();
}
function hb(e) {
  return new this(e).sinh();
}
function pb(e) {
  return new this(e).sqrt();
}
function gb(e, n) {
  return new this(e).sub(n);
}
function bb() {
  var e = 0, n = arguments, t = new this(n[e]);
  for ($e = !1; t.s && ++e < n.length; )
    t = t.plus(n[e]);
  return $e = !0, pe(t, this.precision, this.rounding);
}
function yb(e) {
  return new this(e).tan();
}
function $b(e) {
  return new this(e).tanh();
}
function wb(e) {
  return pe(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var rt = K.constructor = jc(ga);
ur = new rt(ur);
dr = new rt(dr);
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
  onBeforeChange: A(),
  onChange: A(),
  onIncrement: A(),
  onDecrement: A(),
  "onUpdate:modelValue": A()
}, Qs = 100, _s = 600, { name: Sb, n: kb, classes: Pb } = ne("counter"), Ob = ["inputmode", "readonly", "disabled"];
function Tb(e, n) {
  const t = le("var-icon"), o = le("var-button"), r = le("var-form-details");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      M(
        "div",
        ze({
          class: e.classes(
            e.n("controller"),
            e.formatElevation(e.elevation, 2),
            [e.disabled || e.formDisabled, e.n("--disabled")],
            [e.errorMessage, e.n("--error")]
          ),
          style: { background: e.color ? e.color : void 0 }
        }, e.$attrs),
        [
          Z(o, {
            class: v(
              e.classes(
                e.n("decrement-button"),
                [!e.decrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: H({
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
            default: he(() => [
              Z(t, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Ee(M("input", {
            class: v(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: H({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, Ob), [
            [qv, e.inputValue]
          ]),
          Z(o, {
            class: v(
              e.classes(
                e.n("increment-button"),
                [!e.incrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: H({
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
            default: he(() => [
              Z(t, { name: "plus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])
        ],
        16
        /* FULL_PROPS */
      ),
      Z(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Wc = ee({
  name: Sb,
  components: {
    VarButton: mn,
    VarIcon: He,
    VarFormDetails: hn
  },
  directives: { Ripple: Je },
  inheritAttrs: !1,
  props: Cb,
  setup(e) {
    const n = C(""), { bindForm: t, form: o } = Dn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = In(), { readonly: s, disabled: u } = o ?? {}, d = N(() => {
      const { max: X, modelValue: Q } = e;
      return X != null && V(Q) >= V(X);
    }), c = N(() => {
      const { min: X, modelValue: Q } = e;
      return X != null && V(Q) <= V(X);
    });
    let f, m, g, h;
    y(t, {
      reset: O,
      validate: S,
      resetValidation: l
    }), fe(
      () => e.modelValue,
      (X) => {
        G($(String(X))), y(e.onChange, V(X));
      }
    ), G($(String(e.modelValue)));
    function S() {
      return i(e.rules, e.modelValue);
    }
    function T(X) {
      Ye(() => {
        const { validateTrigger: Q, rules: Y, modelValue: se } = e;
        a(Q, X, Y, se);
      });
    }
    function O() {
      const { min: X } = e;
      y(e["onUpdate:modelValue"], X != null ? V(X) : 0), l();
    }
    function $(X) {
      const { decimalLength: Q, max: Y, min: se } = e;
      let W = V(X);
      return Y != null && W > V(Y) && (W = V(Y)), se != null && W < V(se) && (W = V(se)), X = String(W), Q != null && (X = W.toFixed(V(Q))), X;
    }
    function k(X) {
      const { lazyChange: Q, onBeforeChange: Y } = e, { value: se } = X.target, W = $(se);
      Q ? y(Y, V(W), j) : G(W), T("onInputChange");
    }
    function D() {
      const {
        disabled: X,
        readonly: Q,
        disableDecrement: Y,
        decrementButton: se,
        lazyChange: W,
        step: de,
        modelValue: J,
        onDecrement: q,
        onBeforeChange: _
      } = e;
      if (u != null && u.value || s != null && s.value || X || Q || Y || !se || c.value)
        return;
      const I = new rt(V(J)).minus(new rt(V(de))).toString(), F = $(I), ve = V(F);
      y(q, ve), W ? y(_, ve, j) : (G(F), T("onDecrement"));
    }
    function P() {
      const {
        disabled: X,
        readonly: Q,
        disableIncrement: Y,
        incrementButton: se,
        lazyChange: W,
        step: de,
        modelValue: J,
        onIncrement: q,
        onBeforeChange: _
      } = e;
      if (u != null && u.value || s != null && s.value || X || Q || Y || !se || d.value)
        return;
      const I = new rt(V(J)).plus(new rt(V(de))).toString(), F = $(I), ve = V(F);
      y(q, ve), W ? y(_, ve, j) : (G(F), T("onIncrement"));
    }
    function B() {
      const { press: X, lazyChange: Q } = e;
      !X || Q || (h = window.setTimeout(() => {
        oe();
      }, _s));
    }
    function E() {
      const { press: X, lazyChange: Q } = e;
      !X || Q || (g = window.setTimeout(() => {
        U();
      }, _s));
    }
    function R() {
      m && clearTimeout(m), h && clearTimeout(h);
    }
    function L() {
      f && clearTimeout(f), g && clearTimeout(g);
    }
    function U() {
      f = window.setTimeout(() => {
        P(), U();
      }, Qs);
    }
    function oe() {
      m = window.setTimeout(() => {
        D(), oe();
      }, Qs);
    }
    function G(X) {
      n.value = X;
      const Q = V(X);
      y(e["onUpdate:modelValue"], Q);
    }
    function j(X) {
      G($(String(X))), T("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: kb,
      classes: Pb,
      formatElevation: gn,
      validate: S,
      reset: O,
      resetValidation: l,
      handleChange: k,
      decrement: D,
      increment: P,
      pressDecrement: B,
      pressIncrement: E,
      releaseDecrement: R,
      releaseIncrement: L,
      toSizeUnit: Se,
      toNumber: V
    };
  }
});
Wc.render = Tb;
var el = Wc;
re(el);
const gE = el;
var wa = el, qc = 60, Gc = qc * 60, Xc = Gc * 24, Eb = Xc * 7, Ft = 1e3, zr = qc * Ft, xs = Gc * Ft, Ib = Xc * Ft, Db = Eb * Ft, nl = "millisecond", Mt = "second", Nt = "minute", Vt = "hour", Qn = "day", Jo = "week", Nn = "month", Kc = "quarter", _n = "year", At = "date", Bb = "YYYY-MM-DDTHH:mm:ssZ", eu = "Invalid Date", Mb = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Nb = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Vb = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Ca = function(n, t, o) {
  var r = String(n);
  return !r || r.length >= t ? n : "" + Array(t + 1 - r.length).join(o) + n;
}, Ab = function(n) {
  var t = -n.utcOffset(), o = Math.abs(t), r = Math.floor(o / 60), a = o % 60;
  return (t <= 0 ? "+" : "-") + Ca(r, 2, "0") + ":" + Ca(a, 2, "0");
}, zb = function e(n, t) {
  if (n.date() < t.date())
    return -e(t, n);
  var o = (t.year() - n.year()) * 12 + (t.month() - n.month()), r = n.clone().add(o, Nn), a = t - r < 0, i = n.clone().add(o + (a ? -1 : 1), Nn);
  return +(-(o + (t - r) / (a ? r - i : i - r)) || 0);
}, Lb = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Rb = function(n) {
  var t = {
    M: Nn,
    y: _n,
    w: Jo,
    d: Qn,
    D: At,
    h: Vt,
    m: Nt,
    s: Mt,
    ms: nl,
    Q: Kc
  };
  return t[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Ub = function(n) {
  return n === void 0;
};
const Hb = {
  s: Ca,
  z: Ab,
  m: zb,
  a: Lb,
  p: Rb,
  u: Ub
};
var no = "en", wt = {};
wt[no] = Vb;
var tl = function(n) {
  return n instanceof Tr;
}, fr = function e(n, t, o) {
  var r;
  if (!n)
    return no;
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
  return !o && r && (no = r), r || !o && no;
}, me = function(n, t) {
  if (tl(n))
    return n.clone();
  var o = typeof t == "object" ? t : {};
  return o.date = n, o.args = arguments, new Tr(o);
}, Fb = function(n, t) {
  return me(n, {
    locale: t.$L,
    utc: t.$u,
    x: t.$x,
    $offset: t.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Le = Hb;
Le.l = fr;
Le.i = tl;
Le.w = Fb;
var Yb = function(n) {
  var t = n.date, o = n.utc;
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Le.u(t))
    return /* @__PURE__ */ new Date();
  if (t instanceof Date)
    return new Date(t);
  if (typeof t == "string" && !/Z$/i.test(t)) {
    var r = t.match(Mb);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return o ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(t);
}, Tr = /* @__PURE__ */ function() {
  function e(t) {
    this.$L = fr(t.locale, null, !0), this.parse(t);
  }
  var n = e.prototype;
  return n.parse = function(o) {
    this.$d = Yb(o), this.$x = o.x || {}, this.init();
  }, n.init = function() {
    var o = this.$d;
    this.$y = o.getFullYear(), this.$M = o.getMonth(), this.$D = o.getDate(), this.$W = o.getDay(), this.$H = o.getHours(), this.$m = o.getMinutes(), this.$s = o.getSeconds(), this.$ms = o.getMilliseconds();
  }, n.$utils = function() {
    return Le;
  }, n.isValid = function() {
    return this.$d.toString() !== eu;
  }, n.isSame = function(o, r) {
    var a = me(o);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(o, r) {
    return me(o) < this.startOf(r);
  }, n.isBefore = function(o, r) {
    return this.endOf(r) < me(o);
  }, n.$g = function(o, r, a) {
    return Le.u(o) ? this[r] : this.set(a, o);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(o, r) {
    var a = this, i = Le.u(r) ? !0 : r, l = Le.p(o), s = function(S, T) {
      var O = Le.w(a.$u ? Date.UTC(a.$y, T, S) : new Date(a.$y, T, S), a);
      return i ? O : O.endOf(Qn);
    }, u = function(S, T) {
      var O = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Le.w(a.toDate()[S].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? O : $).slice(T)
      ), a);
    }, d = this.$W, c = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case _n:
        return i ? s(1, 0) : s(31, 11);
      case Nn:
        return i ? s(1, c) : s(0, c + 1);
      case Jo: {
        var g = this.$locale().weekStart || 0, h = (d < g ? d + 7 : d) - g;
        return s(i ? f - h : f + (6 - h), c);
      }
      case Qn:
      case At:
        return u(m + "Hours", 0);
      case Vt:
        return u(m + "Minutes", 1);
      case Nt:
        return u(m + "Seconds", 2);
      case Mt:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(o) {
    return this.startOf(o, !1);
  }, n.$set = function(o, r) {
    var a, i = Le.p(o), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[Qn] = l + "Date", a[At] = l + "Date", a[Nn] = l + "Month", a[_n] = l + "FullYear", a[Vt] = l + "Hours", a[Nt] = l + "Minutes", a[Mt] = l + "Seconds", a[nl] = l + "Milliseconds", a)[i], u = i === Qn ? this.$D + (r - this.$W) : r;
    if (i === Nn || i === _n) {
      var d = this.clone().set(At, 1);
      d.$d[s](u), d.init(), this.$d = d.set(At, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(o, r) {
    return this.clone().$set(o, r);
  }, n.get = function(o) {
    return this[Le.p(o)]();
  }, n.add = function(o, r) {
    var a = this, i;
    o = Number(o);
    var l = Le.p(r), s = function(f) {
      var m = me(a);
      return Le.w(m.date(m.date() + Math.round(f * o)), a);
    };
    if (l === Nn)
      return this.set(Nn, this.$M + o);
    if (l === _n)
      return this.set(_n, this.$y + o);
    if (l === Qn)
      return s(1);
    if (l === Jo)
      return s(7);
    var u = (i = {}, i[Nt] = zr, i[Vt] = xs, i[Mt] = Ft, i)[l] || 1, d = this.$d.getTime() + o * u;
    return Le.w(d, this);
  }, n.subtract = function(o, r) {
    return this.add(o * -1, r);
  }, n.format = function(o) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || eu;
    var i = o || Bb, l = Le.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, m = a.meridiem, g = function(O, $, k, D) {
      return O && (O[$] || O(r, i)) || k[$].slice(0, D);
    }, h = function(O) {
      return Le.s(s % 12 || 12, O, "0");
    }, b = m || function(T, O, $) {
      var k = T < 12 ? "AM" : "PM";
      return $ ? k.toLowerCase() : k;
    }, S = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Le.s(d + 1, 2, "0"),
      MMM: g(a.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: Le.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(a.weekdaysMin, this.$W, c, 2),
      ddd: g(a.weekdaysShort, this.$W, c, 3),
      dddd: c[this.$W],
      H: String(s),
      HH: Le.s(s, 2, "0"),
      h: h(1),
      hh: h(2),
      a: b(s, u, !0),
      A: b(s, u, !1),
      m: String(u),
      mm: Le.s(u, 2, "0"),
      s: String(this.$s),
      ss: Le.s(this.$s, 2, "0"),
      SSS: Le.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(Nb, function(T, O) {
      return O || S[T] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(o, r, a) {
    var i, l = Le.p(r), s = me(o), u = (s.utcOffset() - this.utcOffset()) * zr, d = this - s, c = Le.m(this, s);
    return c = (i = {}, i[_n] = c / 12, i[Nn] = c, i[Kc] = c / 3, i[Jo] = (d - u) / Db, i[Qn] = (d - u) / Ib, i[Vt] = d / xs, i[Nt] = d / zr, i[Mt] = d / Ft, i)[l] || d, a ? c : Le.a(c);
  }, n.daysInMonth = function() {
    return this.endOf(Nn).$D;
  }, n.$locale = function() {
    return wt[this.$L];
  }, n.locale = function(o, r) {
    if (!o)
      return this.$L;
    var a = this.clone(), i = fr(o, r, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return Le.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Zc = Tr.prototype;
me.prototype = Zc;
[["$ms", nl], ["$s", Mt], ["$m", Nt], ["$H", Vt], ["$W", Qn], ["$M", Nn], ["$y", _n], ["$D", At]].forEach(function(e) {
  Zc[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
me.extend = function(e, n) {
  return e.$i || (e(n, Tr, me), e.$i = !0), me;
};
me.locale = fr;
me.isDayjs = tl;
me.unix = function(e) {
  return me(e * 1e3);
};
me.en = wt[no];
me.Ls = wt;
me.p = {};
const Jc = function(e, n) {
  n.prototype.isSameOrBefore = function(t, o) {
    return this.isSame(t, o) || this.isBefore(t, o);
  };
}, Qc = function(e, n) {
  n.prototype.isSameOrAfter = function(t, o) {
    return this.isSame(t, o) || this.isAfter(t, o);
  };
}, Qo = [
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
], jb = {
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
  onPreview: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { n: Wb } = ne("picker-header");
function qb(e, n) {
  const t = le("var-icon"), o = le("var-button");
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      Z(o, {
        round: "",
        text: "",
        style: { filter: "opacity(0.54)" },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (r) => e.checkDate("prev"))
      }, {
        default: he(() => [
          Z(t, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"]),
      M(
        "div",
        {
          class: v(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          Z(je, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: he(() => [
              (p(), w(
                "div",
                { key: e.showDate },
                ae(e.showDate),
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
      Z(o, {
        round: "",
        text: "",
        style: { filter: "opacity(0.54)" },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (r) => e.checkDate("next"))
      }, {
        default: he(() => [
          Z(t, { name: "chevron-right" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"])
    ],
    2
    /* CLASS */
  );
}
const _c = ee({
  name: "PanelHeader",
  components: {
    VarButton: mn,
    VarIcon: He
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
    const t = C(!1), o = C(0), r = N(() => {
      var i;
      const { date: l, type: s } = e, { previewMonth: u, previewYear: d } = l;
      if (s === "month")
        return V(d) + o.value;
      const c = (i = nn.value.datePickerMonthDict) == null ? void 0 : i[u.index].name;
      return nn.value.lang === "zh-CN" ? `${d} ${c}` : `${c} ${d}`;
    }), a = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), t.value = i === "prev", o.value += i === "prev" ? -1 : 1);
    };
    return fe(
      () => e.date,
      () => {
        o.value = 0;
      }
    ), {
      n: Wb,
      reverse: t,
      showDate: r,
      checkDate: a
    };
  }
});
_c.render = qb;
var xc = _c, Gb = Object.defineProperty, nu = Object.getOwnPropertySymbols, Xb = Object.prototype.hasOwnProperty, Kb = Object.prototype.propertyIsEnumerable, tu = (e, n, t) => n in e ? Gb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Zb = (e, n) => {
  for (var t in n || (n = {}))
    Xb.call(n, t) && tu(e, t, n[t]);
  if (nu)
    for (var t of nu(n))
      Kb.call(n, t) && tu(e, t, n[t]);
  return e;
};
me.extend(Jc);
me.extend(Qc);
const { n: Uo, classes: Jb } = ne("month-picker"), { n: Ho } = ne("date-picker");
function Qb(e, n) {
  const t = le("panel-header"), o = le("var-button");
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      M(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          Z(t, {
            ref: "headerEl",
            type: "month",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickYear,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          Z(je, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: he(() => [
              (p(), w("ul", { key: e.panelKey }, [
                (p(!0), w(
                  Ve,
                  null,
                  Ge(e.MONTH_LIST, (r) => (p(), w("li", {
                    key: r.index
                  }, [
                    Z(o, ze({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, Zb({}, e.buttonProps(r.index)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: he(() => [
                        Ie(
                          ae(e.getMonthAbbr(r.index)),
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
const ef = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: mn,
    PanelHeader: xc
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
    const [t, o] = e.current.split("-"), r = C(!1), a = C(0), i = C(null), l = We({
      left: !1,
      right: !1
    }), s = N(() => e.choose.chooseYear === e.preview.previewYear), u = N(() => e.preview.previewYear === t), d = (S) => {
      var T, O;
      return (O = (T = nn.value.datePickerMonthDict) == null ? void 0 : T[S].abbr) != null ? O : "";
    }, c = (S) => {
      const {
        preview: { previewYear: T },
        componentProps: { min: O, max: $ }
      } = e;
      let k = !0, D = !0;
      const P = `${T}-${S}`;
      return $ && (k = me(P).isSameOrBefore(me($), "month")), O && (D = me(P).isSameOrAfter(me(O), "month")), k && D;
    }, f = (S) => {
      const {
        choose: { chooseMonths: T, chooseDays: O, chooseRangeMonth: $ },
        componentProps: { type: k, range: D }
      } = e;
      if (D) {
        if (!$.length)
          return !1;
        const P = me(S).isSameOrBefore(me($[1]), "month"), B = me(S).isSameOrAfter(me($[0]), "month");
        return P && B;
      }
      return k === "month" ? T.includes(S) : O.some((P) => P.includes(S));
    }, m = (S) => {
      const {
        choose: { chooseMonth: T },
        preview: { previewYear: O },
        componentProps: { allowedDates: $, color: k, multiple: D, range: P }
      } = e, B = `${O}-${S}`, E = () => P || D ? f(B) : (T == null ? void 0 : T.index) === S && s.value, L = (() => c(S) ? $ ? !$(B) : !1 : !0)(), U = () => L ? !0 : P || D ? !f(B) : !s.value || (T == null ? void 0 : T.index) !== S, oe = () => u.value && o === S && e.componentProps.showCurrent ? (P || D || s.value) && L ? !0 : P || D ? !f(B) : s.value ? (T == null ? void 0 : T.index) !== o : !0 : !1, G = () => L ? "" : oe() ? k ?? "" : E() ? "" : `${Ho()}-color-cover`, j = G().startsWith(Ho());
      return {
        outline: oe(),
        text: U(),
        color: U() ? "" : k,
        textColor: j ? "" : G(),
        [`${Ho()}-color-cover`]: j,
        class: Jb(Uo("button"), [L, Uo("button--disabled")]),
        disabled: L
      };
    }, g = (S, T) => {
      T.currentTarget.classList.contains(Uo("button--disabled")) || n("choose-month", S);
    }, h = (S) => {
      r.value = S === "prev", a.value += S === "prev" ? -1 : 1, n("check-preview", "year", S);
    }, b = (S) => {
      i.value.checkDate(S);
    };
    return fe(
      () => e.preview.previewYear,
      (S) => {
        const {
          componentProps: { min: T, max: O }
        } = e;
        O && (l.right = !me(`${V(S) + 1}`).isSameOrBefore(me(O), "year")), T && (l.left = !me(`${V(S) - 1}`).isSameOrAfter(me(T), "year"));
      },
      { immediate: !0 }
    ), {
      n: Uo,
      nDate: Ho,
      pack: nn,
      MONTH_LIST: Qo,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: b,
      buttonProps: m,
      getMonthAbbr: d,
      chooseMonth: g,
      checkDate: h
    };
  }
});
ef.render = Qb;
var _b = ef;
const { n: ou, classes: xb } = ne("year-picker"), ey = ["onClick"];
function ny(e, n) {
  return p(), w(
    "ul",
    {
      class: v(e.n())
    },
    [
      (p(!0), w(
        Ve,
        null,
        Ge(e.yearList, (t) => (p(), w("li", {
          key: t,
          class: v(e.classes(e.n("item"), [t === e.toNumber(e.preview), e.n("item--active")])),
          style: H({ color: t === e.toNumber(e.preview) ? e.componentProps.color : "" }),
          onClick: (o) => e.chooseYear(t)
        }, ae(t), 15, ey))),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
const nf = ee({
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
    const t = N(() => {
      const r = [], {
        preview: a,
        componentProps: { max: i, min: l }
      } = e;
      if (!a)
        return r;
      let s = [V(a) + 100, V(a) - 100];
      if (i) {
        const u = me(i).format("YYYY-MM-D"), d = V(u.split("-")[0]);
        if (d < s[0] && d > s[1] && (s = [d, s[1]]), d <= s[1])
          return [d];
      }
      if (l) {
        const u = me(l).format("YYYY-MM-D"), d = V(u.split("-")[0]);
        if (d < s[0] && d > s[1] && (s = [s[0], d]), d >= s[0])
          return [d];
      }
      for (let u = s[0]; u >= s[1]; u--)
        r.push(u);
      return r;
    }), o = (r) => {
      n("choose-year", r);
    };
    return an(() => {
      const r = document.querySelector(`.${ou("item--active")}`);
      r == null || r.scrollIntoView({
        block: "center"
      });
    }), {
      n: ou,
      classes: xb,
      yearList: t,
      chooseYear: o,
      toNumber: V
    };
  }
});
nf.render = ny;
var ty = nf, oy = Object.defineProperty, ru = Object.getOwnPropertySymbols, ry = Object.prototype.hasOwnProperty, ay = Object.prototype.propertyIsEnumerable, au = (e, n, t) => n in e ? oy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, iy = (e, n) => {
  for (var t in n || (n = {}))
    ry.call(n, t) && au(e, t, n[t]);
  if (ru)
    for (var t of ru(n))
      ay.call(n, t) && au(e, t, n[t]);
  return e;
};
me.extend(Jc);
me.extend(Qc);
const { n: It, classes: ly } = ne("day-picker"), { n: Fo } = ne("date-picker");
function sy(e, n) {
  const t = le("panel-header"), o = le("var-button");
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      M(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          Z(t, {
            ref: "headerEl",
            type: "day",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickMonth,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          Z(je, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: he(() => [
              (p(), w("div", { key: e.panelKey }, [
                M(
                  "ul",
                  {
                    class: v(e.n("head"))
                  },
                  [
                    (p(!0), w(
                      Ve,
                      null,
                      Ge(e.sortWeekList, (r) => (p(), w(
                        "li",
                        {
                          key: r.index
                        },
                        ae(e.getDayAbbr(r.index)),
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
                M(
                  "ul",
                  {
                    class: v(e.n("body"))
                  },
                  [
                    (p(!0), w(
                      Ve,
                      null,
                      Ge(e.days, (r, a) => (p(), w("li", { key: a }, [
                        Z(o, ze({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation
                        }, iy({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: he(() => [
                            Ie(
                              ae(e.filterDay(r)),
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
const tf = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: mn,
    PanelHeader: xc
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
    const [t, o, r] = e.current.split("-"), a = C([]), i = C(!1), l = C(0), s = C(null), u = We({
      left: !1,
      right: !1
    }), d = N(
      () => e.preview.previewYear === t && e.preview.previewMonth.index === o
    ), c = N(
      () => {
        var P;
        return e.choose.chooseYear === e.preview.previewYear && ((P = e.choose.chooseMonth) == null ? void 0 : P.index) === e.preview.previewMonth.index;
      }
    ), f = N(() => {
      const P = xt.findIndex((B) => B.index === e.componentProps.firstDayOfWeek);
      return P === -1 || P === 0 ? xt : xt.slice(P).concat(xt.slice(0, P));
    }), m = (P) => {
      var B, E;
      return (E = (B = nn.value.datePickerWeekDict) == null ? void 0 : B[P].abbr) != null ? E : "";
    }, g = (P) => P > 0 ? P : "", h = () => {
      const {
        preview: { previewMonth: P, previewYear: B }
      } = e, E = me(`${B}-${P.index}`).daysInMonth(), R = me(`${B}-${P.index}-01`).day(), L = f.value.findIndex((U) => U.index === `${R}`);
      a.value = [...Array(L).fill(-1), ...Array.from(Array(E + 1).keys())].filter((U) => U);
    }, b = () => {
      const {
        preview: { previewYear: P, previewMonth: B },
        componentProps: { max: E, min: R }
      } = e;
      if (E) {
        const L = `${P}-${V(B.index) + 1}`;
        u.right = !me(L).isSameOrBefore(me(E), "month");
      }
      if (R) {
        const L = `${P}-${V(B.index) - 1}`;
        u.left = !me(L).isSameOrAfter(me(R), "month");
      }
    }, S = (P) => {
      const {
        preview: { previewYear: B, previewMonth: E },
        componentProps: { min: R, max: L }
      } = e;
      let U = !0, oe = !0;
      const G = `${B}-${E.index}-${P}`;
      return L && (U = me(G).isSameOrBefore(me(L), "day")), R && (oe = me(G).isSameOrAfter(me(R), "day")), U && oe;
    }, T = (P) => {
      const {
        choose: { chooseDays: B, chooseRangeDay: E },
        componentProps: { range: R }
      } = e;
      if (R) {
        if (!E.length)
          return !1;
        const L = me(P).isSameOrBefore(me(E[1]), "day"), U = me(P).isSameOrAfter(me(E[0]), "day");
        return L && U;
      }
      return B.includes(P);
    }, O = (P) => {
      if (P < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: It("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: B },
        preview: { previewYear: E, previewMonth: R },
        componentProps: { allowedDates: L, color: U, multiple: oe, range: G }
      } = e, j = `${E}-${R.index}-${P}`, X = () => G || oe ? T(j) : V(B) === P && c.value, Y = (() => S(P) ? L ? !L(j) : !1 : !0)(), se = () => Y ? !0 : G || oe ? !T(j) : !c.value || V(B) !== P, W = () => d.value && V(r) === P && e.componentProps.showCurrent ? (G || oe || c.value) && Y ? !0 : G || oe ? !T(j) : c.value ? B !== r : !0 : !1, de = () => Y ? "" : W() ? U ?? "" : X() ? "" : `${Fo()}-color-cover`, J = de().startsWith(Fo());
      return {
        text: se(),
        outline: W(),
        textColor: J ? "" : de(),
        [`${Fo()}-color-cover`]: J,
        class: ly(It("button"), It("button--usable"), [Y, It("button--disabled")]),
        disabled: Y
      };
    }, $ = (P) => {
      i.value = P === "prev", l.value += P === "prev" ? -1 : 1, n("check-preview", "month", P);
    }, k = (P, B) => {
      B.currentTarget.classList.contains(It("button--disabled")) || n("choose-day", P);
    }, D = (P) => {
      s.value.checkDate(P);
    };
    return an(() => {
      h(), b();
    }), fe(
      () => e.preview,
      () => {
        h(), b();
      }
    ), {
      n: It,
      nDate: Fo,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: f,
      panelBtnDisabled: u,
      forwardRef: D,
      filterDay: g,
      getDayAbbr: m,
      checkDate: $,
      chooseDay: k,
      buttonProps: O
    };
  }
});
tf.render = sy;
var uy = tf, dy = (e, n, t) => new Promise((o, r) => {
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
const { name: cy, n: fy, classes: vy } = ne("date-picker");
function my(e, n) {
  const t = le("year-picker-panel"), o = le("month-picker-panel"), r = le("day-picker-panel");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      M(
        "div",
        {
          class: v(e.n("title")),
          style: H({ background: e.headerColor || e.color })
        },
        [
          M(
            "div",
            {
              class: v(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
              onClick: n[0] || (n[0] = (a) => e.clickEl("year"))
            },
            [
              z(e.$slots, "year", { year: e.chooseYear }, () => [
                Ie(
                  ae(e.chooseYear),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          M(
            "div",
            {
              class: v(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
              onClick: n[1] || (n[1] = (a) => e.clickEl("date"))
            },
            [
              Z(je, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: he(() => {
                  var a, i, l;
                  return [
                    e.type === "month" ? (p(), w("div", {
                      key: `${e.chooseYear}${(a = e.chooseMonth) == null ? void 0 : a.index}`
                    }, [
                      e.range ? z(e.$slots, "range", {
                        key: 0,
                        choose: e.getChoose.chooseRangeMonth
                      }, () => [
                        Ie(
                          ae(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ]) : e.multiple ? z(e.$slots, "multiple", {
                        key: 1,
                        choose: e.getChoose.chooseMonths
                      }, () => [
                        Ie(
                          ae(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ]) : z(e.$slots, "month", {
                        key: 2,
                        month: (i = e.chooseMonth) == null ? void 0 : i.index,
                        year: e.chooseYear
                      }, () => [
                        Ie(
                          ae(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ])
                    ])) : (p(), w("div", {
                      key: `${e.chooseYear}${(l = e.chooseMonth) == null ? void 0 : l.index}${e.chooseDay}`
                    }, [
                      e.range ? z(e.$slots, "range", {
                        key: 0,
                        choose: e.formatRange
                      }, () => [
                        Ie(
                          ae(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ]) : e.multiple ? z(e.$slots, "multiple", {
                        key: 1,
                        choose: e.getChoose.chooseDays
                      }, () => [
                        Ie(
                          ae(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ]) : z(e.$slots, "date", at(ze({ key: 2 }, e.slotProps)), () => [
                        Ie(
                          ae(e.getDateTitle),
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
      M(
        "div",
        {
          class: v(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
          onTouchmove: n[3] || (n[3] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
          onTouchend: n[4] || (n[4] = (...a) => e.handleTouchend && e.handleTouchend(...a))
        },
        [
          Z(je, {
            name: `${e.n()}-panel-fade`
          }, {
            default: he(() => [
              e.getPanelType === "year" ? (p(), ke(t, {
                key: 0,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (p(), ke(o, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (p(), ke(r, {
                key: 2,
                ref: "dayPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "component-props": e.componentProps,
                "click-month": () => e.clickEl("month"),
                onChooseDay: e.getChooseDay,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : x("v-if", !0)
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
const of = ee({
  name: cy,
  components: {
    MonthPickerPanel: _b,
    YearPickerPanel: ty,
    DayPickerPanel: uy
  },
  props: jb,
  setup(e) {
    const n = me().format("YYYY-MM-D"), [t, o] = n.split("-"), r = Qo.find((ce) => ce.index === o), a = C(!1), i = C(!1), l = C(!0), s = C(), u = C(), d = C(), c = C(r), f = C(t), m = C(!1), g = C([]), h = C([]), b = C([]), S = C([]), T = C(null), O = C(null), $ = We({
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
    }), k = N(() => ({
      chooseMonth: s.value,
      chooseYear: u.value,
      chooseDay: d.value,
      chooseMonths: g.value,
      chooseDays: h.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: S.value
    })), D = N(() => ({
      previewMonth: c.value,
      previewYear: f.value
    })), P = N(() => {
      var ce, Ce;
      const { multiple: ye, range: Be } = e;
      if (Be)
        return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let De = "";
      return s.value && (De = (Ce = (ce = nn.value.datePickerMonthDict) == null ? void 0 : ce[s.value.index].name) != null ? Ce : ""), ye ? `${g.value.length}${nn.value.datePickerSelected}` : De;
    }), B = N(() => {
      var ce, Ce, ye, Be;
      const { multiple: De, range: Ze } = e;
      if (Ze) {
        const Jt = S.value.map((Lv) => me(Lv).format("YYYY-MM-DD"));
        return Jt.length ? `${Jt[0]} ~ ${Jt[1]}` : "";
      }
      if (De)
        return `${h.value.length}${nn.value.datePickerSelected}`;
      if (!u.value || !s.value || !d.value)
        return "";
      const bn = me(`${u.value}-${s.value.index}-${d.value}`).day(), Cn = xt.find((Jt) => Jt.index === `${bn}`), $t = (Ce = (ce = nn.value.datePickerWeekDict) == null ? void 0 : ce[Cn.index].name) != null ? Ce : "", Av = (Be = (ye = nn.value.datePickerMonthDict) == null ? void 0 : ye[s.value.index].name) != null ? Be : "", zv = Ct(d.value, 2, "0");
      return nn.value.lang === "zh-CN" ? `${s.value.index}-${zv} ${$t.slice(0, 3)}` : `${$t.slice(0, 3)}, ${Av.slice(0, 3)} ${d.value}`;
    }), E = N(() => a.value ? "year" : e.type === "month" || i.value ? "month" : e.type === "date" ? "date" : ""), R = N(() => !e.touchable || ["", "year"].includes(E.value)), L = N(() => {
      var ce, Ce, ye, Be;
      const De = me(`${u.value}-${(ce = s.value) == null ? void 0 : ce.index}-${d.value}`).day(), Ze = d.value ? Ct(d.value, 2, "0") : "";
      return {
        week: `${De}`,
        year: (Ce = u.value) != null ? Ce : "",
        month: (Be = (ye = s.value) == null ? void 0 : ye.index) != null ? Be : "",
        date: Ze
      };
    }), U = N(
      () => k.value.chooseRangeDay.map((ce) => me(ce).format("YYYY-MM-DD"))
    ), oe = N(() => u.value === f.value), G = N(() => {
      var ce;
      return ((ce = s.value) == null ? void 0 : ce.index) === c.value.index;
    });
    let j = 0, X = 0, Q = "", Y;
    fe(
      () => e.modelValue,
      (ce) => {
        if (!(!we() || Me(ce) || !ce))
          if (e.range) {
            if (!Ae(ce))
              return;
            l.value = ce.length !== 1, ie(ce, e.type);
          } else if (e.multiple) {
            if (!Ae(ce))
              return;
            ge(ce, e.type);
          } else
            Ne(ce);
      },
      { immediate: !0 }
    ), fe(E, qe);
    function se(ce) {
      ce === "year" ? a.value = !0 : ce === "month" ? i.value = !0 : (a.value = !1, i.value = !1);
    }
    function W(ce) {
      if (R.value)
        return;
      const { clientX: Ce, clientY: ye } = ce.touches[0];
      j = Ce, X = ye;
    }
    function de(ce, Ce) {
      return ce >= Ce && ce > 20 ? "x" : "y";
    }
    function J(ce) {
      if (R.value)
        return;
      const { clientX: Ce, clientY: ye } = ce.touches[0], Be = Ce - j, De = ye - X;
      Y = de(Math.abs(Be), Math.abs(De)), Q = Be > 0 ? "prev" : "next";
    }
    function q() {
      return dy(this, null, function* () {
        if (R.value || Y !== "x")
          return;
        const ce = E.value === "month" ? T : O;
        yield cn(), ce.value.forwardRef(Q), qe();
      });
    }
    function _(ce, Ce) {
      const ye = Ce === "month" ? b : S;
      if (ye.value = l.value ? [ce, ce] : [ye.value[0], ce], l.value = !l.value, l.value) {
        const De = me(ye.value[0]).isAfter(ye.value[1]) ? [ye.value[1], ye.value[0]] : [...ye.value];
        y(e["onUpdate:modelValue"], De), y(e.onChange, De);
      }
    }
    function I(ce, Ce) {
      const ye = Ce === "month" ? g : h, Be = Ce === "month" ? "YYYY-MM" : "YYYY-MM-DD", De = ye.value.map((bn) => me(bn).format(Be)), Ze = De.findIndex((bn) => bn === ce);
      Ze === -1 ? De.push(ce) : De.splice(Ze, 1), y(e["onUpdate:modelValue"], De), y(e.onChange, De);
    }
    function F(ce, Ce) {
      return !u.value || !s.value ? !1 : oe.value ? ce === "month" ? Ce.index < s.value.index : G.value ? Ce < V(d.value) : s.value.index > c.value.index : u.value > f.value;
    }
    function ve(ce) {
      const { readonly: Ce, range: ye, multiple: Be, onChange: De, "onUpdate:modelValue": Ze } = e;
      if (ce < 0 || Ce)
        return;
      m.value = F("day", ce);
      const bn = `${f.value}-${c.value.index}-${ce}`, Cn = me(bn).format("YYYY-MM-DD");
      ye ? _(Cn, "day") : Be ? I(Cn, "day") : (y(Ze, Cn), y(De, Cn));
    }
    function Pe(ce) {
      const { type: Ce, readonly: ye, range: Be, multiple: De, onChange: Ze, onPreview: bn, "onUpdate:modelValue": Cn } = e;
      if (m.value = F("month", ce), Ce === "month" && !ye) {
        const $t = `${f.value}-${ce.index}`;
        Be ? _($t, "month") : De ? I($t, "month") : (y(Cn, $t), y(Ze, $t));
      } else
        c.value = ce, y(bn, V(f.value), V(c.value.index));
      i.value = !1;
    }
    function te(ce) {
      f.value = `${ce}`, a.value = !1, i.value = !0, y(e.onPreview, V(f.value), V(c.value.index));
    }
    function ue(ce, Ce) {
      const ye = Ce === "prev" ? -1 : 1;
      if (ce === "year")
        f.value = `${V(f.value) + ye}`;
      else {
        let Be = V(c.value.index) + ye;
        Be < 1 && (f.value = `${V(f.value) - 1}`, Be = 12), Be > 12 && (f.value = `${V(f.value) + 1}`, Be = 1), c.value = Qo.find((De) => V(De.index) === Be);
      }
      y(e.onPreview, V(f.value), V(c.value.index));
    }
    function we() {
      return (e.multiple || e.range) && !Ae(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ae(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function Me(ce) {
      return Ae(ce) ? !1 : ce === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function ie(ce, Ce) {
      const ye = Ce === "month" ? b : S, Be = Ce === "month" ? "YYYY-MM" : "YYYY-MM-D", De = ce.map((Cn) => me(Cn).format(Be)).slice(0, 2);
      if (ye.value.some((Cn) => Me(Cn)))
        return;
      ye.value = De;
      const bn = me(ye.value[0]).isAfter(ye.value[1]);
      ye.value.length === 2 && bn && (ye.value = [ye.value[1], ye.value[0]]);
    }
    function ge(ce, Ce) {
      const ye = Ce === "month" ? g : h, Be = Ce === "month" ? "YYYY-MM" : "YYYY-MM-D", De = Array.from(new Set(ce.map((Ze) => me(Ze).format(Be))));
      ye.value = De.filter((Ze) => Ze !== "Invalid Date");
    }
    function Ne(ce) {
      const Ce = me(ce).format("YYYY-MM-D");
      if (Me(Ce))
        return;
      const [ye, Be, De] = Ce.split("-"), Ze = Qo.find((bn) => bn.index === Be);
      s.value = Ze, u.value = ye, d.value = De, c.value = Ze, f.value = ye;
    }
    function qe() {
      X = 0, j = 0, Q = "", Y = void 0;
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
      getDateTitle: B,
      getPanelType: E,
      getChoose: k,
      getPreview: D,
      componentProps: $,
      slotProps: L,
      formatRange: U,
      n: fy,
      classes: vy,
      clickEl: se,
      handleTouchstart: W,
      handleTouchmove: J,
      handleTouchend: q,
      getChooseDay: ve,
      getChooseMonth: Pe,
      getChooseYear: te,
      checkPreview: ue,
      formatElevation: gn
    };
  }
});
of.render = my;
var ol = of;
re(ol);
const bE = ol;
var Sa = ol, hy = Object.defineProperty, iu = Object.getOwnPropertySymbols, py = Object.prototype.hasOwnProperty, gy = Object.prototype.propertyIsEnumerable, lu = (e, n, t) => n in e ? hy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, by = (e, n) => {
  for (var t in n || (n = {}))
    py.call(n, t) && lu(e, t, n[t]);
  if (iu)
    for (var t of iu(n))
      gy.call(n, t) && lu(e, t, n[t]);
  return e;
};
const yy = by({
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
  onBeforeClose: A(),
  onConfirm: A(),
  onCancel: A(),
  "onUpdate:show": A()
}, Te(To, [
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
var $y = Object.defineProperty, su = Object.getOwnPropertySymbols, wy = Object.prototype.hasOwnProperty, Cy = Object.prototype.propertyIsEnumerable, uu = (e, n, t) => n in e ? $y(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Sy = (e, n) => {
  for (var t in n || (n = {}))
    wy.call(n, t) && uu(e, t, n[t]);
  if (su)
    for (var t of su(n))
      Cy.call(n, t) && uu(e, t, n[t]);
  return e;
};
const { name: ky, n: Py, classes: Oy } = ne("dialog");
function Ty(e, n) {
  const t = le("var-button"), o = le("var-popup");
  return p(), ke(o, {
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
    default: he(() => [
      M(
        "div",
        ze({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Sy({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          M(
            "div",
            {
              class: v(e.n("title"))
            },
            [
              z(e.$slots, "title", {}, () => {
                var r;
                return [
                  Ie(
                    ae((r = e.title) != null ? r : e.pack.dialogTitle),
                    1
                    /* TEXT */
                  )
                ];
              })
            ],
            2
            /* CLASS */
          ),
          M(
            "div",
            {
              class: v(e.n("message")),
              style: H({ textAlign: e.messageAlign })
            },
            [
              z(e.$slots, "default", {}, () => [
                Ie(
                  ae(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          M(
            "div",
            {
              class: v(e.n("actions"))
            },
            [
              e.cancelButton ? (p(), ke(t, {
                key: 0,
                class: v(e.classes(e.n("button"), e.n("cancel-button"))),
                "var-dialog-cover": "",
                text: "",
                "text-color": e.cancelButtonTextColor,
                color: e.cancelButtonColor,
                onClick: e.cancel
              }, {
                default: he(() => {
                  var r;
                  return [
                    Ie(
                      ae((r = e.cancelButtonText) != null ? r : e.pack.dialogCancelButtonText),
                      1
                      /* TEXT */
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class", "text-color", "color", "onClick"])) : x("v-if", !0),
              e.confirmButton ? (p(), ke(t, {
                key: 1,
                class: v(e.classes(e.n("button"), e.n("confirm-button"))),
                "var-dialog-cover": "",
                text: "",
                "text-color": e.confirmButtonTextColor,
                color: e.confirmButtonColor,
                onClick: e.confirm
              }, {
                default: he(() => {
                  var r;
                  return [
                    Ie(
                      ae((r = e.confirmButtonText) != null ? r : e.pack.dialogConfirmButtonText),
                      1
                      /* TEXT */
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class", "text-color", "color", "onClick"])) : x("v-if", !0)
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
const rf = ee({
  name: ky,
  components: {
    VarPopup: dt,
    VarButton: mn
  },
  inheritAttrs: !1,
  props: yy,
  setup(e) {
    const n = C(!1), t = C(!1);
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
      pack: nn,
      popupShow: n,
      popupCloseOnClickOverlay: t,
      n: Py,
      classes: Oy,
      handleClickOverlay: r,
      confirm: a,
      cancel: i,
      toSizeUnit: Se
    };
  }
});
rf.render = Ty;
var Bo = rf, Ey = Object.defineProperty, Iy = Object.defineProperties, Dy = Object.getOwnPropertyDescriptors, du = Object.getOwnPropertySymbols, By = Object.prototype.hasOwnProperty, My = Object.prototype.propertyIsEnumerable, cu = (e, n, t) => n in e ? Ey(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Lr = (e, n) => {
  for (var t in n || (n = {}))
    By.call(n, t) && cu(e, t, n[t]);
  if (du)
    for (var t of du(n))
      My.call(n, t) && cu(e, t, n[t]);
  return e;
}, Ny = (e, n) => Iy(e, Dy(n));
let et, vr = {};
function Vy(e = {}) {
  return xe(e) ? Ny(Lr({}, vr), { message: e }) : Lr(Lr({}, vr), e);
}
function Tt(e) {
  return gt() ? new Promise((n) => {
    Tt.close();
    const t = Vy(e), o = We(t);
    o.teleport = "body", et = o;
    const { unmountInstance: r } = Kt(Bo, o, {
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
  vr = e;
};
Tt.resetDefaultOptions = function() {
  vr = {};
};
Tt.close = function() {
  if (et != null) {
    const e = et;
    et = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
Tt.Component = Bo;
re(Bo);
re(Bo, Tt);
const yE = Bo;
var ka = Tt;
const Ay = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: zy, n: Ly, classes: Ry } = ne("divider");
function Uy(e, n) {
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
      style: H(e.style)
    },
    [
      e.vertical ? x("v-if", !0) : z(e.$slots, "default", { key: 0 }, () => [
        e.description ? (p(), w(
          "span",
          {
            key: 0,
            class: v(e.n("text"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const af = ee({
  name: zy,
  props: Ay,
  setup(e, { slots: n }) {
    const t = C(!1), o = N(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = N(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (mi(i) || l)
        return { margin: s };
      const u = V(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Se(d)})`,
        left: u > 0 ? Se(d) : Se(0)
      };
    });
    an(a), ko(a);
    function a() {
      const { description: i, vertical: l } = e;
      t.value = (n.default || i != null) && !l;
    }
    return {
      n: Ly,
      classes: Ry,
      withText: t,
      style: r,
      withPresetInset: o
    };
  }
});
af.render = Uy;
var rl = af;
re(rl);
const $E = rl;
var Pa = rl;
const Hy = {
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
  onClick: A()
};
var Fy = Object.defineProperty, Yy = Object.defineProperties, jy = Object.getOwnPropertyDescriptors, fu = Object.getOwnPropertySymbols, Wy = Object.prototype.hasOwnProperty, qy = Object.prototype.propertyIsEnumerable, vu = (e, n, t) => n in e ? Fy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, mu = (e, n) => {
  for (var t in n || (n = {}))
    Wy.call(n, t) && vu(e, t, n[t]);
  if (fu)
    for (var t of fu(n))
      qy.call(n, t) && vu(e, t, n[t]);
  return e;
}, hu = (e, n) => Yy(e, jy(n)), Gy = (e, n, t) => new Promise((o, r) => {
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
const { name: Xy, n: Ky, classes: Zy } = ne("drag");
function Jy(e, n) {
  return p(), ke(Xn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    M(
      "div",
      ze({
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
        z(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const lf = ee({
  name: Xy,
  inheritAttrs: !1,
  props: Hy,
  setup(e, { attrs: n }) {
    const t = C(null), o = C(0), r = C(0), a = C(!1), i = C(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: m, resetTouch: g } = yr(), { disabled: h } = Zt(), b = We({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    fe(() => e.boundary, R), Oo(U), an(() => {
      R(), U();
    });
    function S(G) {
      e.disabled || (c(G), k());
    }
    function T(G) {
      return Gy(this, null, function* () {
        !l.value || e.disabled || (f(G), G.preventDefault(), i.value = !1, a.value = !0, e.direction.includes("x") && (o.value += u.value), e.direction.includes("y") && (r.value += d.value), E());
      });
    }
    function O() {
      e.disabled || (m(), i.value = !0, B());
    }
    function $(G) {
      s.value || y(e.onClick, G);
    }
    function k() {
      const { left: G, top: j } = D();
      o.value = G, r.value = j;
    }
    function D() {
      const G = en(t.value), j = en(window), X = G.top - j.top, Q = j.bottom - G.bottom, Y = G.left - j.left, se = j.right - G.right, { width: W, height: de } = G, { width: J, height: q } = j;
      return {
        top: X,
        bottom: Q,
        left: Y,
        right: se,
        width: W,
        height: de,
        halfWidth: W / 2,
        halfHeight: de / 2,
        windowWidth: J,
        windowHeight: q
      };
    }
    function P() {
      const G = D(), j = b.left, X = G.windowWidth - b.right - G.width, Q = b.top, Y = G.windowHeight - b.bottom - G.height;
      return {
        minX: j,
        minY: Q,
        // fallback the drag element overflows boundary
        maxX: j < X ? X : j,
        maxY: Q < Y ? Y : Q
      };
    }
    function B() {
      if (e.attraction == null)
        return;
      const { halfWidth: G, halfHeight: j, top: X, bottom: Q, left: Y, right: se } = D(), { minX: W, minY: de, maxX: J, maxY: q } = P(), _ = Y + G - b.left, I = se + G - b.right, F = X + j - b.top, ve = Q + j - b.bottom, Pe = _ <= I, te = F <= ve;
      e.attraction.includes("x") && (o.value = Pe ? W : J), e.attraction.includes("y") && (r.value = te ? de : q);
    }
    function E() {
      const { minX: G, minY: j, maxX: X, maxY: Q } = P();
      o.value = st(o.value, G, X), r.value = st(r.value, j, Q);
    }
    function R() {
      const { top: G = 0, bottom: j = 0, left: X = 0, right: Q = 0 } = e.boundary;
      b.top = Fe(G), b.bottom = Fe(j), b.left = Fe(X), b.right = Fe(Q);
    }
    function L() {
      var G;
      const j = (G = n.style) != null ? G : {};
      return hu(mu({}, n), {
        style: hu(mu({}, j), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : j.top,
          left: a.value ? 0 : j.left,
          right: a.value ? "auto" : j.right,
          bottom: a.value ? "auto" : j.bottom,
          transform: a.value ? `translate(${o.value}px, ${r.value}px)` : j.transform
        })
      });
    }
    function U() {
      a.value && (k(), E());
    }
    function oe() {
      g(), i.value = !1, a.value = !1, o.value = 0, r.value = 0;
    }
    return {
      drag: t,
      x: o,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: h,
      n: Ky,
      classes: Zy,
      getAttrs: L,
      handleTouchstart: S,
      handleTouchmove: T,
      handleTouchend: O,
      handleClick: $,
      resize: U,
      reset: oe
    };
  }
});
lf.render = Jy;
var al = lf;
re(al);
const wE = al;
var mr = al, Qy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function _o(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Qy[n];
  });
}
var jn = "top", vt = "bottom", St = "right", it = "left", il = "auto", Er = [jn, vt, St, it], Ir = "start", fo = "end", _y = "clippingParents", sf = "viewport", Qt = "popper", xy = "reference", pu = /* @__PURE__ */ Er.reduce(function(e, n) {
  return e.concat([n + "-" + Ir, n + "-" + fo]);
}, []), uf = /* @__PURE__ */ [].concat(Er, [il]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Ir, n + "-" + fo]);
}, []), e1 = "beforeRead", n1 = "read", t1 = "afterRead", o1 = "beforeMain", r1 = "main", a1 = "afterMain", i1 = "beforeWrite", l1 = "write", s1 = "afterWrite", u1 = [e1, n1, t1, o1, r1, a1, i1, l1, s1];
function lt(e) {
  return e.split("-")[0];
}
var d1 = {
  start: "end",
  end: "start"
};
function gu(e) {
  return e.replace(/start|end/g, function(n) {
    return d1[n];
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
function ll(e) {
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
var to = Math.max, bu = Math.min, Yt = Math.round;
function Oa() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function df() {
  return !/^((?!chrome|android).)*safari/i.test(Oa());
}
function jt(e, n, t) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  n && kn(e) && (r = e.offsetWidth > 0 && Yt(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Yt(o.height) / e.offsetHeight || 1);
  var i = kt(e) ? Bn(e) : window, l = i.visualViewport, s = !df() && t, u = (o.left + (s && l ? l.offsetLeft : 0)) / r, d = (o.top + (s && l ? l.offsetTop : 0)) / a, c = o.width / r, f = o.height / a;
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
function sl(e) {
  var n = Bn(e), t = n.pageXOffset, o = n.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function ul(e) {
  return jt(yt(e)).left + sl(e).scrollLeft;
}
function c1(e, n) {
  var t = Bn(e), o = yt(e), r = t.visualViewport, a = o.clientWidth, i = o.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = df();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + ul(e),
    y: s
  };
}
function qn(e) {
  return Bn(e).getComputedStyle(e);
}
function f1(e) {
  var n, t = yt(e), o = sl(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = to(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = to(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + ul(e), s = -o.scrollTop;
  return qn(r || t).direction === "rtl" && (l += to(t.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function Un(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Dr(e) {
  return Un(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ll(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    yt(e)
  );
}
function dl(e) {
  var n = qn(e), t = n.overflow, o = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + r + o);
}
function cf(e) {
  return ["html", "body", "#document"].indexOf(Un(e)) >= 0 ? e.ownerDocument.body : kn(e) && dl(e) ? e : cf(Dr(e));
}
function oo(e, n) {
  var t;
  n === void 0 && (n = []);
  var o = cf(e), r = o === ((t = e.ownerDocument) == null ? void 0 : t.body), a = Bn(o), i = r ? [a].concat(a.visualViewport || [], dl(o) ? o : []) : o, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(oo(Dr(i)))
  );
}
function v1(e) {
  return ["table", "td", "th"].indexOf(Un(e)) >= 0;
}
function yu(e) {
  return !kn(e) || // https://github.com/popperjs/popper-core/issues/837
  qn(e).position === "fixed" ? null : e.offsetParent;
}
function m1(e) {
  var n = /firefox/i.test(Oa()), t = /Trident/i.test(Oa());
  if (t && kn(e)) {
    var o = qn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Dr(e);
  for (ll(r) && (r = r.host); kn(r) && ["html", "body"].indexOf(Un(r)) < 0; ) {
    var a = qn(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function cl(e) {
  for (var n = Bn(e), t = yu(e); t && v1(t) && qn(t).position === "static"; )
    t = yu(t);
  return t && (Un(t) === "html" || Un(t) === "body" && qn(t).position === "static") ? n : t || m1(e) || n;
}
function h1(e, n) {
  var t = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (t && ll(t)) {
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
function p1(e, n) {
  var t = jt(e, !1, n === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function $u(e, n, t) {
  return n === sf ? Ta(c1(e, t)) : kt(n) ? p1(n, t) : Ta(f1(yt(e)));
}
function g1(e) {
  var n = oo(Dr(e)), t = ["absolute", "fixed"].indexOf(qn(e).position) >= 0, o = t && kn(e) ? cl(e) : e;
  return kt(o) ? n.filter(function(r) {
    return kt(r) && h1(r, o) && Un(r) !== "body";
  }) : [];
}
function b1(e, n, t, o) {
  var r = n === "clippingParents" ? g1(e) : [].concat(n), a = [].concat(r, [t]), i = a[0], l = a.reduce(function(s, u) {
    var d = $u(e, u, o);
    return s.top = to(d.top, s.top), s.right = bu(d.right, s.right), s.bottom = bu(d.bottom, s.bottom), s.left = to(d.left, s.left), s;
  }, $u(e, i, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function vo(e) {
  return e.split("-")[1];
}
function y1(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ff(e) {
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
    case St:
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
  var u = r ? y1(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Ir:
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
function C1(e, n) {
  return n.reduce(function(t, o) {
    return t[o] = e, t;
  }, {});
}
function vf(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = o === void 0 ? e.placement : o, a = t.strategy, i = a === void 0 ? e.strategy : a, l = t.boundary, s = l === void 0 ? _y : l, u = t.rootBoundary, d = u === void 0 ? sf : u, c = t.elementContext, f = c === void 0 ? Qt : c, m = t.altBoundary, g = m === void 0 ? !1 : m, h = t.padding, b = h === void 0 ? 0 : h, S = w1(typeof b != "number" ? b : C1(b, Er)), T = f === Qt ? xy : Qt, O = e.rects.popper, $ = e.elements[g ? T : f], k = b1(kt($) ? $ : $.contextElement || yt(e.elements.popper), s, d, i), D = jt(e.elements.reference), P = ff({
    reference: D,
    element: O,
    strategy: "absolute",
    placement: r
  }), B = Ta(Object.assign({}, O, P)), E = f === Qt ? B : D, R = {
    top: k.top - E.top + S.top,
    bottom: E.bottom - k.bottom + S.bottom,
    left: k.left - E.left + S.left,
    right: E.right - k.right + S.right
  }, L = e.modifiersData.offset;
  if (f === Qt && L) {
    var U = L[r];
    Object.keys(R).forEach(function(oe) {
      var G = [St, vt].indexOf(oe) >= 0 ? 1 : -1, j = [jn, vt].indexOf(oe) >= 0 ? "y" : "x";
      R[oe] += U[j] * G;
    });
  }
  return R;
}
function S1(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = t.boundary, a = t.rootBoundary, i = t.padding, l = t.flipVariations, s = t.allowedAutoPlacements, u = s === void 0 ? uf : s, d = vo(o), c = d ? l ? pu : pu.filter(function(g) {
    return vo(g) === d;
  }) : Er, f = c.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = c);
  var m = f.reduce(function(g, h) {
    return g[h] = vf(e, {
      placement: h,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[lt(h)], g;
  }, {});
  return Object.keys(m).sort(function(g, h) {
    return m[g] - m[h];
  });
}
function k1(e) {
  if (lt(e) === il)
    return [];
  var n = _o(e);
  return [gu(e), n, gu(n)];
}
function P1(e) {
  var n = e.state, t = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var r = t.mainAxis, a = r === void 0 ? !0 : r, i = t.altAxis, l = i === void 0 ? !0 : i, s = t.fallbackPlacements, u = t.padding, d = t.boundary, c = t.rootBoundary, f = t.altBoundary, m = t.flipVariations, g = m === void 0 ? !0 : m, h = t.allowedAutoPlacements, b = n.options.placement, S = lt(b), T = S === b, O = s || (T || !g ? [_o(b)] : k1(b)), $ = [b].concat(O).reduce(function(_, I) {
      return _.concat(lt(I) === il ? S1(n, {
        placement: I,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : I);
    }, []), k = n.rects.reference, D = n.rects.popper, P = /* @__PURE__ */ new Map(), B = !0, E = $[0], R = 0; R < $.length; R++) {
      var L = $[R], U = lt(L), oe = vo(L) === Ir, G = [jn, vt].indexOf(U) >= 0, j = G ? "width" : "height", X = vf(n, {
        placement: L,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), Q = G ? oe ? St : it : oe ? vt : jn;
      k[j] > D[j] && (Q = _o(Q));
      var Y = _o(Q), se = [];
      if (a && se.push(X[U] <= 0), l && se.push(X[Q] <= 0, X[Y] <= 0), se.every(function(_) {
        return _;
      })) {
        E = L, B = !1;
        break;
      }
      P.set(L, se);
    }
    if (B)
      for (var W = g ? 3 : 1, de = function(I) {
        var F = $.find(function(ve) {
          var Pe = P.get(ve);
          if (Pe)
            return Pe.slice(0, I).every(function(te) {
              return te;
            });
        });
        if (F)
          return E = F, "break";
      }, J = W; J > 0; J--) {
        var q = de(J);
        if (q === "break")
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
  var o = lt(e), r = [it, jn].indexOf(o) >= 0 ? -1 : 1, a = typeof t == "function" ? t(Object.assign({}, n, {
    placement: e
  })) : t, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [it, St].indexOf(o) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function E1(e) {
  var n = e.state, t = e.options, o = e.name, r = t.offset, a = r === void 0 ? [0, 0] : r, i = uf.reduce(function(d, c) {
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
function wu(e) {
  var n, t = e.popper, o = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, g = i.y, h = g === void 0 ? 0 : g, b = typeof d == "function" ? d({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  m = b.x, h = b.y;
  var S = i.hasOwnProperty("x"), T = i.hasOwnProperty("y"), O = it, $ = jn, k = window;
  if (u) {
    var D = cl(t), P = "clientHeight", B = "clientWidth";
    if (D === Bn(t) && (D = yt(t), qn(D).position !== "static" && l === "absolute" && (P = "scrollHeight", B = "scrollWidth")), D = D, r === jn || (r === it || r === St) && a === fo) {
      $ = vt;
      var E = c && D === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        D[P]
      );
      h -= E - o.height, h *= s ? 1 : -1;
    }
    if (r === it || (r === jn || r === vt) && a === fo) {
      O = St;
      var R = c && D === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        D[B]
      );
      m -= R - o.width, m *= s ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: l
  }, u && D1), U = d === !0 ? B1({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  if (m = U.x, h = U.y, s) {
    var oe;
    return Object.assign({}, L, (oe = {}, oe[$] = T ? "0" : "", oe[O] = S ? "0" : "", oe.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + h + "px)" : "translate3d(" + m + "px, " + h + "px, 0)", oe));
  }
  return Object.assign({}, L, (n = {}, n[$] = T ? h + "px" : "", n[O] = S ? m + "px" : "", n.transform = "", n));
}
function M1(e) {
  var n = e.state, t = e.options, o = t.gpuAcceleration, r = o === void 0 ? !0 : o, a = t.adaptive, i = a === void 0 ? !0 : a, l = t.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: lt(n.placement),
    variation: vo(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, wu(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, wu(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const mf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: M1,
  data: {}
};
function N1(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function V1(e) {
  return e === Bn(e) || !kn(e) ? sl(e) : N1(e);
}
function A1(e) {
  var n = e.getBoundingClientRect(), t = Yt(n.width) / e.offsetWidth || 1, o = Yt(n.height) / e.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function z1(e, n, t) {
  t === void 0 && (t = !1);
  var o = kn(n), r = kn(n) && A1(n), a = yt(n), i = jt(e, r, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((Un(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  dl(a)) && (l = V1(n)), kn(n) ? (s = jt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = ul(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function L1(e) {
  var n = jt(e), t = e.offsetWidth, o = e.offsetHeight;
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
  return u1.reduce(function(t, o) {
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
function F1(e) {
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
var Cu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Su() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Y1(e) {
  e === void 0 && (e = {});
  var n = e, t = n.defaultModifiers, o = t === void 0 ? [] : t, r = n.defaultOptions, a = r === void 0 ? Cu : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Cu, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, c = [], f = !1, m = {
      state: d,
      setOptions: function(S) {
        var T = typeof S == "function" ? S(d.options) : S;
        h(), d.options = Object.assign({}, a, d.options, T), d.scrollParents = {
          reference: kt(l) ? oo(l) : l.contextElement ? oo(l.contextElement) : [],
          popper: oo(s)
        };
        var O = U1(F1([].concat(o, d.options.modifiers)));
        return d.orderedModifiers = O.filter(function($) {
          return $.enabled;
        }), g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var S = d.elements, T = S.reference, O = S.popper;
          if (Su(T, O)) {
            d.rects = {
              reference: z1(T, cl(O), d.options.strategy === "fixed"),
              popper: L1(O)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(R) {
              return d.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var $ = 0; $ < d.orderedModifiers.length; $++) {
              if (d.reset === !0) {
                d.reset = !1, $ = -1;
                continue;
              }
              var k = d.orderedModifiers[$], D = k.fn, P = k.options, B = P === void 0 ? {} : P, E = k.name;
              typeof D == "function" && (d = D({
                state: d,
                options: B,
                name: E,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: H1(function() {
        return new Promise(function(b) {
          m.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!Su(l, s))
      return m;
    m.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function g() {
      d.orderedModifiers.forEach(function(b) {
        var S = b.name, T = b.options, O = T === void 0 ? {} : T, $ = b.effect;
        if (typeof $ == "function") {
          var k = $({
            state: d,
            name: S,
            instance: m,
            options: O
          }), D = function() {
          };
          c.push(k || D);
        }
      });
    }
    function h() {
      c.forEach(function(b) {
        return b();
      }), c = [];
    }
    return m;
  };
}
var Yo = {
  passive: !0
};
function j1(e) {
  var n = e.state, t = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, i = o.resize, l = i === void 0 ? !0 : i, s = Bn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", t.update, Yo);
  }), l && s.addEventListener("resize", t.update, Yo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", t.update, Yo);
    }), l && s.removeEventListener("resize", t.update, Yo);
  };
}
const W1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: j1,
  data: {}
};
function q1(e) {
  var n = e.state, t = e.name;
  n.modifiersData[t] = ff({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const G1 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: q1,
  data: {}
};
function X1(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(t) {
    var o = n.styles[t] || {}, r = n.attributes[t] || {}, a = n.elements[t];
    !kn(a) || !Un(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function K1(e) {
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
const Z1 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: X1,
  effect: K1,
  requires: ["computeStyles"]
};
var J1 = [W1, G1, mf, Z1], Q1 = /* @__PURE__ */ Y1({
  defaultModifiers: J1
}), _1 = Object.defineProperty, x1 = Object.defineProperties, e$ = Object.getOwnPropertyDescriptors, ku = Object.getOwnPropertySymbols, n$ = Object.prototype.hasOwnProperty, t$ = Object.prototype.propertyIsEnumerable, Pu = (e, n, t) => n in e ? _1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Rr = (e, n) => {
  for (var t in n || (n = {}))
    n$.call(n, t) && Pu(e, t, n[t]);
  if (ku)
    for (var t of ku(n))
      t$.call(n, t) && Pu(e, t, n[t]);
  return e;
}, Ur = (e, n) => x1(e, e$(n)), Ou = (e, n, t) => new Promise((o, r) => {
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
  const n = C(null), t = C(null), o = C({ width: 0, height: 0 }), r = Lt(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(E, R) {
      R ? (D(), y(e.onOpen)) : y(e.onClose);
    }
  }), { zIndex: a } = Eo(() => r.value, 1);
  let i = null, l = !1, s = !1;
  const u = () => {
    const { width: E, height: R } = Pt(n.value);
    o.value = {
      width: Fe(E),
      height: Fe(R)
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
  }, f = () => Ou(this, null, function* () {
    e.trigger === "hover" && (s = !1, yield cn(), !l && B());
  }), m = () => {
    e.trigger === "hover" && (l = !0);
  }, g = () => Ou(this, null, function* () {
    e.trigger === "hover" && (l = !1, yield cn(), !s && B());
  }), h = () => {
    e.closeOnClickReference && r.value ? B() : P();
  }, b = () => {
    B();
  }, S = (E) => {
    e.trigger === "click" && (b(), y(e.onClickOutside, E));
  }, T = () => {
    D(), y(e.onClosed);
  }, O = () => {
    const { offsetX: E, offsetY: R, placement: L } = e;
    u();
    const U = {
      x: Fe(E),
      y: Fe(R)
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
    const { placement: E, skidding: R, distance: L } = O(), U = [
      Ur(Rr({}, O1), {
        enabled: r.value
      }),
      Ur(Rr({}, I1), {
        options: {
          offset: [R, L]
        }
      }),
      Ur(Rr({}, mf), {
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
        fn({ state: oe }) {
          oe.styles.popper.transformOrigin = d();
        }
      }
    ];
    return {
      placement: E,
      modifiers: U,
      strategy: e.strategy
    };
  }, k = () => e.reference ? n.value.querySelector(e.reference) : n.value, D = () => {
    i.setOptions($());
  }, P = () => {
    const { disabled: E } = e;
    E || (r.value = !0, y(e["onUpdate:show"], !0));
  }, B = () => {
    r.value = !1, y(e["onUpdate:show"], !1);
  };
  return wd(k, "click", S), fe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], D), fe(() => e.disabled, B), Co(() => {
    var E;
    i = Q1((E = k()) != null ? E : n.value, t.value, $());
  }), So(() => {
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
    handlePopoverClose: b,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: g,
    handleClosed: T,
    resize: D,
    open: P,
    close: B
  };
}
const o$ = {
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
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
}, { name: r$, n: a$, classes: i$ } = ne("tooltip");
function l$(e, n) {
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
      z(e.$slots, "default"),
      (p(), ke(Xn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        Z(je, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: he(() => [
            Ee(M(
              "div",
              {
                ref: "popover",
                class: v(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: H({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = On(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...t) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...t)),
                onMouseleave: n[2] || (n[2] = (...t) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...t))
              },
              [
                M(
                  "div",
                  {
                    style: H({ background: e.color, width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0 }),
                    class: v(e.classes(e.n("content-container"), e.n(`--${e.type}`)))
                  },
                  [
                    z(e.$slots, "content", {}, () => [
                      Ie(
                        ae(e.content),
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
const pf = ee({
  name: r$,
  props: o$,
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
      open: g,
      // expose
      close: h,
      // expose
      resize: b
    } = hf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Se,
      n: a$,
      classes: i$,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handleClosed: m,
      resize: b,
      open: g,
      close: h
    };
  }
});
pf.render = l$;
var fl = pf;
re(fl);
const CE = fl;
var hr = fl;
const s$ = {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
var u$ = Object.defineProperty, Tu = Object.getOwnPropertySymbols, d$ = Object.prototype.hasOwnProperty, c$ = Object.prototype.propertyIsEnumerable, Eu = (e, n, t) => n in e ? u$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, f$ = (e, n) => {
  for (var t in n || (n = {}))
    d$.call(n, t) && Eu(e, t, n[t]);
  if (Tu)
    for (var t of Tu(n))
      c$.call(n, t) && Eu(e, t, n[t]);
  return e;
};
const { name: v$, n: m$, classes: h$ } = ne("ellipsis"), p$ = { key: 0 };
function g$(e, n) {
  const t = le("var-tooltip");
  return p(), ke(
    t,
    at(Po(e.tooltip)),
    {
      content: he(() => [
        z(e.$slots, "tooltip-content", {}, () => {
          var o;
          return [
            (o = e.tooltip) != null && o.content ? (p(), w(
              "span",
              p$,
              ae(e.tooltip.content),
              1
              /* TEXT */
            )) : z(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: he(() => [
        M(
          "span",
          {
            class: v(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: H(e.rootStyles),
            onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
          },
          [
            z(e.$slots, "default")
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
const gf = ee({
  name: v$,
  components: { VarTooltip: hr },
  props: s$,
  setup(e) {
    const n = C(!1), t = N(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), o = N(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : f$({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltip: o,
      expanding: n,
      rootStyles: t,
      n: m$,
      classes: h$,
      handleClick: r
    };
  }
});
gf.render = g$;
var vl = gf;
re(vl);
const SE = vl;
var Ea = vl;
const b$ = {
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
  inactiveIconSize: Te(Ke, "size"),
  activeIconSize: Te(Ke, "size"),
  inactiveIconNamespace: Te(Ke, "namespace"),
  activeIconNamespace: Te(Ke, "namespace"),
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
  onClick: A(),
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  "onUpdate:active": A()
}, {
  name: y$,
  classes: Hr,
  n: yn
} = ne("fab");
var ml = ee({
  name: y$,
  inheritAttrs: !1,
  props: b$,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = Lt(e, "active"), r = C(null), a = C(null);
    fe(() => e.trigger, () => {
      o.value = !1;
    }), fe(() => e.disabled, () => {
      o.value = !1;
    }), fe(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var d;
      (d = a.value) == null || d.reset();
    }), wd(r, "click", s);
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
      }) : null : Ee(Z(mn, {
        "var-fab-cover": !0,
        class: yn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        round: !0
      }, {
        default: () => [Z(He, {
          "var-fab-cover": !0,
          class: Hr([o.value, yn("trigger-active-icon"), yn("trigger-inactive-icon")]),
          name: o.value ? e.activeIcon : e.inactiveIcon,
          size: o.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: o.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: yn("--trigger-icon-animation")
        }, null)]
      }), [[Ln, e.show]]);
    }
    return () => {
      var d;
      const c = Sd((d = y(n.default)) != null ? d : []), f = mi(e.drag) ? {} : e.drag;
      return Z(mr, ze({
        ref: a,
        class: Hr(yn(`--position-${e.position}`), [!e.fixed, yn("--absolute")]),
        style: {
          top: Se(e.top),
          bottom: Se(e.bottom),
          left: Se(e.left),
          right: Se(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: f.direction,
        attraction: f.attraction,
        boundary: f.boundary,
        onClick: (m) => i(m, !o.value, c.length)
      }, t), {
        default: () => [Z("div", {
          class: Hr(yn(), yn(`--direction-${e.direction}`), [e.safeArea, yn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, c.length),
          onMouseenter: () => l(!0, c.length)
        }, [Z(je, {
          name: yn("--active-transition")
        }, {
          default: () => [u()]
        }), Z(je, {
          name: yn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Ee(Z("div", {
            class: yn("actions"),
            onClick: (m) => m.stopPropagation()
          }, [c.map((m) => Z("div", {
            class: yn("action")
          }, [m]))]), [[Ln, e.show && o.value && c.length]])]
        })])]
      });
    };
  }
});
re(ml);
const kE = ml;
var Ia = ml;
const hl = {
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
  onClick: A(),
  onClear: A()
}, { name: $$, n: Fr, classes: w$ } = ne("field-decorator"), C$ = ["for"];
function S$(e, n) {
  const t = le("var-icon");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      M(
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
          style: H({
            color: e.color,
            cursor: e.cursor,
            overflow: e.isFloating ? "visible" : "hidden"
          })
        },
        [
          M(
            "div",
            {
              class: v(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              z(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          M(
            "div",
            {
              class: v(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              z(e.$slots, "default")
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
            style: H({
              color: e.color
            }),
            for: e.id
          }, [
            M(
              "span",
              null,
              ae(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, C$)) : x("v-if", !0),
          M(
            "div",
            {
              class: v(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? (p(), ke(t, {
                key: 0,
                class: v(e.n("clear-icon")),
                "var-field-decorator-cover": "",
                name: "close-circle",
                onClick: e.handleClear
              }, null, 8, ["class", "onClick"])) : x("v-if", !0),
              z(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (p(), w(
        Ve,
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
              style: H({ borderColor: e.color })
            },
            [
              M(
                "legend",
                {
                  class: v(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: H({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (p(), ke(Xn, {
                    key: 0,
                    to: "body"
                  }, [
                    M(
                      "span",
                      {
                        ref: "placeholderTextEl",
                        class: v(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      ae(e.placeholder),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : x("v-if", !0)
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
              style: H({ background: e.errorMessage ? void 0 : e.blurColor })
            },
            [
              M(
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
                  style: H({ background: e.errorMessage ? void 0 : e.focusColor })
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
      )) : x("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const bf = ee({
  name: $$,
  components: { VarIcon: He },
  props: hl,
  setup(e, { slots: n }) {
    const t = C(null), o = C(""), r = N(() => e.hint && (!Fn(e.value) || e.isFocus || n["prepend-icon"])), a = N(
      () => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
    );
    Oo(l), an(l), ko(l);
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
      const g = Pt(t.value), h = `var(--field-decorator-outlined-${d}-placeholder-space)`;
      o.value = `calc(${g.width} * 0.75 + ${h} * 2)`;
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
      classes: w$,
      isEmpty: Fn,
      handleClear: s,
      handleClick: u
    };
  }
});
bf.render = S$;
var pl = bf;
re(pl);
const PE = pl;
var mo = pl;
const k$ = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: A(),
  onReset: A()
};
var Iu = (e, n, t) => new Promise((o, r) => {
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
const { name: P$, n: O$ } = ne("form");
function T$(e, n) {
  return p(), w(
    "form",
    {
      class: v(e.n()),
      onSubmit: n[0] || (n[0] = (...t) => e.handleSubmit && e.handleSubmit(...t)),
      onReset: n[1] || (n[1] = (...t) => e.handleReset && e.handleReset(...t))
    },
    [
      z(e.$slots, "default")
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const yf = ee({
  name: P$,
  props: k$,
  setup(e) {
    const n = N(() => e.disabled), t = N(() => e.readonly), { formItems: o, bindFormItems: r } = Kg();
    r({
      disabled: n,
      readonly: t
    });
    function i(f) {
      setTimeout(() => {
        const m = ct(f), g = m === window ? 0 : $s(m), h = $s(f) - g - Fe(e.scrollToErrorOffsetY);
        so(m, {
          top: h,
          animation: Qr
        });
      }, 300);
    }
    function l(f) {
      return Iu(this, null, function* () {
        f.preventDefault();
        const m = yield u();
        y(e.onSubmit, m);
      });
    }
    function s(f) {
      f.preventDefault(), d(), y(e.onReset);
    }
    function u() {
      return Iu(this, null, function* () {
        var f;
        const m = yield Promise.all(o.map(({ validate: g }) => g()));
        if (e.scrollToError) {
          const [, g] = rm(m, (b) => b === !1, e.scrollToError), h = g > -1;
          if (h) {
            const b = (f = o[g].instance.proxy) == null ? void 0 : f.$el;
            i(b);
          }
          return !h;
        }
        return m.every((g) => g === !0);
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
Mo.useForm = Dn;
re(Mo);
const OE = Mo;
var Da = Mo;
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
  onClick: A(),
  onLoad: A(),
  onError: A()
}, { name: I$, n: D$, classes: B$ } = ne("image"), M$ = ["alt", "title", "lazy-loading", "lazy-error"], N$ = ["alt", "title", "src"];
function V$(e, n) {
  var t;
  const o = Ue("lazy"), r = Ue("ripple");
  return Ee((p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: H({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? Ee((p(), w("img", {
        key: 0,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: H({ objectFit: e.fit }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, M$)), [
        [o, (t = e.src) != null ? t : ""]
      ]) : x("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (p(), w("img", {
        key: 1,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: H({ objectFit: e.fit }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, N$)) : x("v-if", !0),
      e.showErrorSlot ? z(e.$slots, "error", { key: 2 }) : x("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const $f = ee({
  name: I$,
  directives: {
    Lazy: uo,
    Ripple: Je
  },
  props: E$,
  setup(e, { slots: n }) {
    const t = C(!1);
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
      n: D$,
      classes: B$,
      toSizeUnit: Se,
      handleLoad: r,
      handleError: o,
      handleClick: a
    };
  }
});
$f.render = V$;
var gl = $f;
re(gl);
const TE = gl;
var Ba = gl;
const wf = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function A$() {
  const { childProviders: e, length: n, bindChildren: t } = sn(
    wf
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: t
  };
}
const Cf = {
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
  onChange: A()
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
const z$ = 250, L$ = 20, { name: R$, n: Yr, classes: U$ } = ne("swipe"), H$ = ["onClick"];
function F$(e, n) {
  const t = le("var-icon"), o = le("var-button"), r = Ue("hover");
  return Ee((p(), w(
    "div",
    {
      class: v(e.n()),
      ref: "swipeEl"
    },
    [
      M(
        "div",
        {
          class: v(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
          style: H({
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
          z(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ),
      e.navigation ? z(e.$slots, "prev", at(ze({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        Z(je, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: he(() => [
            e.navigation === !0 || e.hovering ? (p(), w(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
              },
              [
                Z(o, {
                  "var-swipe-cover": "",
                  disabled: !e.loop && e.index === 0,
                  class: v(e.n("navigation-prev-button")),
                  onClick: n[3] || (n[3] = (a) => e.prev())
                }, {
                  default: he(() => [
                    Z(t, {
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
            )) : x("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : x("v-if", !0),
      e.navigation ? z(e.$slots, "next", at(ze({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        Z(je, {
          name: e.getNavigationAnimation("next")
        }, {
          default: he(() => [
            e.navigation === !0 || e.hovering ? (p(), w(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
              },
              [
                Z(o, {
                  "var-swipe-cover": "",
                  class: v(e.n("navigation-next-button")),
                  disabled: !e.loop && e.index === e.length - 1,
                  onClick: n[4] || (n[4] = (a) => e.next())
                }, {
                  default: he(() => [
                    Z(t, {
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
            )) : x("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : x("v-if", !0),
      z(e.$slots, "indicator", at(Po({
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
              Ve,
              null,
              Ge(e.length, (a, i) => (p(), w("div", {
                class: v(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: H({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, H$))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : x("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [r, e.handleHovering]
  ]);
}
const Sf = ee({
  name: R$,
  directives: { Hover: En },
  components: { VarButton: mn, VarIcon: He },
  props: Cf,
  setup(e) {
    const n = C(null), t = C(0), o = N(() => e.vertical), r = C(0), a = C(0), i = C(!1), l = C(0), s = C(!1), { swipeItems: u, bindSwipeItems: d, length: c } = A$(), { popup: f, bindPopup: m } = Bm(), {
      deltaX: g,
      deltaY: h,
      moveX: b,
      moveY: S,
      offsetX: T,
      offsetY: O,
      touching: $,
      direction: k,
      startTime: D,
      startTouch: P,
      moveTouch: B,
      endTouch: E
    } = yr(), R = N(() => k.value === (e.vertical ? "vertical" : "horizontal"));
    let L = !1, U = -1;
    d({
      size: t,
      vertical: o
    }), y(m, null), fe(
      () => c.value,
      () => Dt(this, null, function* () {
        yield cn(), W(), ve();
      })
    ), f && fe(
      () => f.show.value,
      (ie) => Dt(this, null, function* () {
        ie ? (yield cn(), ve()) : J();
      })
    ), mt(ve), br(J), Oo(ve);
    function G(ie) {
      return u.find(({ index: ge }) => ge.value === ie);
    }
    function j() {
      e.loop && (a.value >= 0 && G(c.value - 1).setTranslate(-r.value), a.value <= -(r.value - t.value) && G(0).setTranslate(r.value), a.value > -(r.value - t.value) && a.value < 0 && (G(c.value - 1).setTranslate(0), G(0).setTranslate(0)));
    }
    function X(ie) {
      const ge = vn(ie) ? ie : Math.floor((a.value - t.value / 2) / -t.value), { loop: Ne } = e;
      return ge <= -1 ? Ne ? -1 : 0 : ge >= c.value ? Ne ? c.value : c.value - 1 : ge;
    }
    function Q(ie) {
      const { loop: ge } = e;
      return ie === -1 ? ge ? c.value - 1 : 0 : ie === c.value ? ge ? 0 : c.value - 1 : ie;
    }
    function Y(ie) {
      return e.loop ? ie < 0 ? c.value + ie : ie >= c.value ? ie - c.value : ie : st(ie, 0, c.value - 1);
    }
    function se() {
      return Dt(this, null, function* () {
        const ie = a.value >= t.value, ge = a.value <= -r.value, Ne = 0, qe = -(r.value - t.value);
        i.value = !0, (ie || ge) && (i.value = !0, a.value = ge ? Ne : qe, G(0).setTranslate(0), G(c.value - 1).setTranslate(0)), yield cn(), i.value = !1;
      });
    }
    function W() {
      L || (l.value = Y(V(e.initialIndex)), L = !0);
    }
    function de() {
      const { autoplay: ie } = e;
      !ie || c.value <= 1 || (J(), U = window.setTimeout(() => {
        Pe(), de();
      }, V(ie)));
    }
    function J() {
      U && clearTimeout(U);
    }
    function q(ie) {
      a.value = ie, j();
    }
    function _(ie) {
      return Dt(this, null, function* () {
        c.value <= 1 || !e.touchable || (P(ie), J(), yield se(), i.value = !0);
      });
    }
    function I(ie) {
      const { touchable: ge, vertical: Ne } = e;
      !$.value || !ge || (B(ie), R.value && (ie.preventDefault(), q(a.value + (Ne ? S.value : b.value))));
    }
    function F() {
      if (!$.value || (E(), !R.value))
        return;
      const { vertical: ie, onChange: ge } = e, Ne = ie ? h.value < 0 : g.value < 0, qe = ie ? O.value : T.value, Ce = performance.now() - D.value <= z$ && qe >= L$ ? X(Ne ? l.value + 1 : l.value - 1) : X();
      i.value = !1, q(Ce * -t.value);
      const ye = l.value;
      l.value = Q(Ce), de(), ye !== l.value && y(ge, l.value);
    }
    function ve() {
      n.value && (i.value = !0, t.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = t.value * c.value, a.value = l.value * -t.value, u.forEach((ie) => {
        ie.setTranslate(0);
      }), de(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function Pe(ie) {
      return Dt(this, null, function* () {
        if (c.value <= 1)
          return;
        W();
        const { loop: ge, onChange: Ne } = e, qe = l.value;
        if (l.value = Y(qe + 1), (ie == null ? void 0 : ie.event) !== !1 && y(Ne, l.value), yield se(), qe === c.value - 1 && ge) {
          G(0).setTranslate(r.value), a.value = c.value * -t.value;
          return;
        }
        qe !== c.value - 1 && (a.value = l.value * -t.value);
      });
    }
    function te(ie) {
      return Dt(this, null, function* () {
        if (c.value <= 1)
          return;
        W();
        const { loop: ge, onChange: Ne } = e, qe = l.value;
        if (l.value = Y(qe - 1), (ie == null ? void 0 : ie.event) !== !1 && y(Ne, l.value), yield se(), qe === 0 && ge) {
          G(c.value - 1).setTranslate(-r.value), a.value = t.value;
          return;
        }
        qe !== 0 && (a.value = l.value * -t.value);
      });
    }
    function ue(ie, ge) {
      if (c.value <= 1 || ie === l.value)
        return;
      ie = ie < 0 ? 0 : ie, ie = ie >= c.value ? c.value : ie;
      const Ne = ie > l.value ? Pe : te, qe = Math.abs(ie - l.value);
      Array.from({ length: qe }).forEach((ce, Ce) => {
        Ne({ event: Ce === qe - 1 ? ge == null ? void 0 : ge.event : !1 });
      });
    }
    const we = (ie) => {
      e.navigation === "hover" && (s.value = ie);
    };
    function Me(ie) {
      return e.navigation !== "hover" ? "" : e.vertical ? Yr(`--navigation-vertical-${ie}-animation`) : Yr(`--navigation-${ie}-animation`);
    }
    return {
      length: c,
      index: l,
      swipeEl: n,
      trackSize: r,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: Yr,
      classes: U$,
      handleTouchstart: _,
      handleTouchmove: I,
      handleTouchend: F,
      next: Pe,
      prev: te,
      to: ue,
      resize: ve,
      toNumber: V,
      handleHovering: we,
      getNavigationAnimation: Me
    };
  }
});
Sf.render = F$;
var bl = Sf;
re(bl);
const EE = bl;
var ho = bl;
function Y$() {
  const { bindParent: e, index: n, parentProvider: t } = ln(wf);
  return e || Tn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: t,
    bindSwipe: e
  };
}
const { name: j$, n: W$ } = ne("swipe-item");
function q$(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n()),
      style: H({
        width: e.vertical ? void 0 : `${e.size}px`,
        height: e.vertical ? `${e.size}px` : void 0,
        transform: `translate${e.vertical ? "Y" : "X"}(${e.translate}px)`
      })
    },
    [
      z(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const kf = ee({
  name: j$,
  setup() {
    const e = C(0), { swipe: n, bindSwipe: t, index: o } = Y$(), { size: r, vertical: a } = n;
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
var yl = kf;
re(yl);
const IE = yl;
var po = yl, G$ = Object.defineProperty, Du = Object.getOwnPropertySymbols, X$ = Object.prototype.hasOwnProperty, K$ = Object.prototype.propertyIsEnumerable, Bu = (e, n, t) => n in e ? G$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Mu = (e, n) => {
  for (var t in n || (n = {}))
    X$.call(n, t) && Bu(e, t, n[t]);
  if (Du)
    for (var t of Du(n))
      K$.call(n, t) && Bu(e, t, n[t]);
  return e;
};
const Z$ = Mu(Mu({
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
  "onUpdate:show": A(),
  onLongPress: A()
}, Te(Cf, ["loop", "indicator", "onChange"])), Te(To, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), { name: J$, n: Nu, classes: Q$ } = ne("image-preview"), jr = 12, Vu = 200, _$ = 350, Au = 200, x$ = 500, ew = ["onTouchstart"], nw = ["src", "alt"];
function tw(e, n) {
  const t = le("var-swipe-item"), o = le("var-swipe"), r = le("var-icon"), a = le("var-popup");
  return p(), ke(a, {
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
    default: he(() => [
      Z(o, ze({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.initialIndex,
        loop: e.loop,
        onChange: e.onChange
      }, e.$attrs), {
        default: he(() => [
          (p(!0), w(
            Ve,
            null,
            Ge(e.images, (i, l) => (p(), ke(t, {
              class: v(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: he(() => [
                M("div", {
                  class: v(e.n("zoom-container")),
                  style: H({
                    transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
                    transitionTimingFunction: e.transitionTimingFunction,
                    transitionDuration: e.transitionDuration
                  }),
                  onTouchstart: (s) => e.handleTouchstart(s, l),
                  onTouchmove: n[0] || (n[0] = (...s) => e.handleTouchmove && e.handleTouchmove(...s)),
                  onTouchend: n[1] || (n[1] = (...s) => e.handleTouchend && e.handleTouchend(...s)),
                  onTouchcancel: n[2] || (n[2] = (...s) => e.handleTouchcancel && e.handleTouchcancel(...s))
                }, [
                  M("img", {
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
        indicator: he(({ index: i, length: l }) => [
          z(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (p(), w(
              "div",
              {
                key: 0,
                class: v(e.n("indicators"))
              },
              ae(i + 1) + " / " + ae(l),
              3
              /* TEXT, CLASS */
            )) : x("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      z(e.$slots, "close-icon", {}, () => [
        e.closeable ? (p(), ke(r, {
          key: 0,
          class: v(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : x("v-if", !0)
      ]),
      M(
        "div",
        {
          class: v(e.n("extra"))
        },
        [
          z(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
const Pf = ee({
  name: J$,
  components: {
    VarSwipe: ho,
    VarSwipeItem: po,
    VarPopup: dt,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: Z$,
  setup(e) {
    const n = C(!1), t = C(1), o = C(0), r = C(0), a = C(), i = C(), l = C(!0), s = C(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: m, moveTouch: g, endTouch: h } = yr(), b = N(() => {
      const { images: J, current: q, initialIndex: _ } = e;
      if (_ != null)
        return V(_);
      const I = J.findIndex((F) => F === q);
      return Math.max(I, 0);
    }), S = N(() => {
      const { imagePreventDefault: J, show: q } = e;
      return q && J;
    });
    let T = null, O = null, $ = !1;
    const k = {
      start: null,
      prev: null
    };
    ut(() => document, "contextmenu", de), fe(
      () => e.show,
      (J) => {
        n.value = J;
      },
      { immediate: !0 }
    );
    function D() {
      t.value = V(e.zoom), l.value = !1, k.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Au);
    }
    function P() {
      t.value = 1, o.value = 0, r.value = 0, l.value = !0, k.prev = null, a.value = void 0, i.value = void 0;
    }
    function B(J) {
      return k.prev ? c.value <= jr && performance.now() - f.value <= Vu && k.prev === J : !1;
    }
    function E(J) {
      return !J || !k.start || !k.prev ? !1 : c.value <= jr && performance.now() - f.value < _$ && (J === k.start || J.parentNode === k.start);
    }
    function R() {
      h(), window.clearTimeout(O), $ = !1, k.start = null;
    }
    function L(J) {
      if (h(), window.clearTimeout(O), $) {
        $ = !1;
        return;
      }
      const q = E(J.target);
      T = window.setTimeout(() => {
        q && Q(), k.start = null;
      }, Vu);
    }
    function U(J, q) {
      window.clearTimeout(T), window.clearTimeout(O);
      const _ = J.currentTarget;
      if (k.start = _, O = window.setTimeout(() => {
        $ = !0, y(e.onLongPress, q);
      }, x$), B(_)) {
        t.value > 1 ? P() : D();
        return;
      }
      m(J), k.prev = _;
    }
    function oe(J) {
      const { offsetWidth: q, offsetHeight: _ } = J, { naturalWidth: I, naturalHeight: F } = J.querySelector(`.${Nu("image")}`);
      return {
        width: q,
        height: _,
        imageRadio: F / I,
        rootRadio: _ / q,
        zoom: V(e.zoom)
      };
    }
    function G(J) {
      const { zoom: q, imageRadio: _, rootRadio: I, width: F, height: ve } = oe(J);
      if (!_)
        return 0;
      const Pe = _ > I ? ve / _ : F;
      return Math.max(0, (q * Pe - F) / 2) / q;
    }
    function j(J) {
      const { zoom: q, imageRadio: _, rootRadio: I, width: F, height: ve } = oe(J);
      if (!_)
        return 0;
      const Pe = _ > I ? ve : F * _;
      return Math.max(0, (q * Pe - ve) / 2) / q;
    }
    function X(J) {
      if (!k.prev)
        return;
      g(J);
      const q = J.currentTarget;
      if (c.value > jr && window.clearTimeout(O), t.value > 1) {
        const _ = G(q), I = j(q);
        o.value = st(o.value + u.value, -_, _), r.value = st(r.value + d.value, -I, I);
      }
      k.prev = q;
    }
    function Q() {
      if (t.value > 1) {
        P(), setTimeout(() => y(e["onUpdate:show"], !1), Au);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    function Y(J) {
      var q;
      (q = s.value) == null || q.prev(J);
    }
    function se(J) {
      var q;
      (q = s.value) == null || q.next(J);
    }
    function W(J, q) {
      var _;
      (_ = s.value) == null || _.to(J, q);
    }
    function de(J) {
      e.imagePreventDefault && e.show && J.preventDefault();
    }
    return {
      swipeRef: s,
      isPreventDefault: S,
      initialIndex: b,
      popupShow: n,
      scale: t,
      translateX: o,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: Nu,
      classes: Q$,
      handleTouchstart: U,
      handleTouchmove: X,
      handleTouchend: L,
      handleTouchcancel: R,
      close: Q,
      prev: Y,
      next: se,
      to: W
    };
  }
});
Pf.render = tw;
var No = Pf, ow = Object.defineProperty, rw = Object.defineProperties, aw = Object.getOwnPropertyDescriptors, zu = Object.getOwnPropertySymbols, iw = Object.prototype.hasOwnProperty, lw = Object.prototype.propertyIsEnumerable, Lu = (e, n, t) => n in e ? ow(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, jo = (e, n) => {
  for (var t in n || (n = {}))
    iw.call(n, t) && Lu(e, t, n[t]);
  if (zu)
    for (var t of zu(n))
      lw.call(n, t) && Lu(e, t, n[t]);
  return e;
}, Ru = (e, n) => rw(e, aw(n));
let nt, ro = {};
function sw(e = {}) {
  return xe(e) ? Ru(jo({}, ro), { images: [e] }) : Ae(e) ? Ru(jo({}, ro), { images: e }) : jo(jo({}, ro), e);
}
function Et(e) {
  if (!gt())
    return;
  Et.close();
  const n = sw(e), t = We(n);
  t.teleport = "body", nt = t;
  const { unmountInstance: o } = Kt(No, t, {
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
Et.close = () => {
  if (nt != null) {
    const e = nt;
    nt = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
Et.setDefaultOptions = (e) => {
  ro = e;
};
Et.resetDefaultOptions = () => {
  ro = {};
};
Et.Component = No;
re(No);
re(No, Et);
const DE = No;
var go = Et;
const xo = {
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
  onScroll: A()
};
var Uu = (e, n, t) => new Promise((o, r) => {
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
const { name: uw, n: dw, classes: cw } = ne("sticky");
function fw(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: H({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [
      M(
        "div",
        {
          class: v(e.n("wrapper")),
          ref: "wrapperEl",
          style: H({
            zIndex: e.toNumber(e.zIndex),
            position: e.enableFixedMode ? "fixed" : void 0,
            width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
            height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
            left: e.enableFixedMode ? e.fixedLeft : void 0,
            top: e.enableFixedMode ? e.fixedTop : void 0
          })
        },
        [
          z(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const Of = ee({
  name: uw,
  props: xo,
  setup(e) {
    const n = C(null), t = C(null), o = C(!1), r = C("0px"), a = C("0px"), i = C("auto"), l = C("auto"), s = C("auto"), u = C("auto"), d = N(() => !e.disabled && e.cssMode), c = N(() => !e.disabled && !e.cssMode && o.value), f = N(() => Fe(e.offsetTop));
    let m;
    fe(() => e.disabled, b), an(S), br(T), Oo(b), ut(() => window, "scroll", h);
    function g() {
      const { cssMode: O, disabled: $ } = e;
      if ($)
        return;
      let k = 0;
      if (m !== window) {
        const { top: L } = en(m);
        k = L;
      }
      const D = t.value, P = n.value, { top: B, left: E } = en(P), R = B - k;
      return R <= f.value ? (O || (i.value = `${P.offsetWidth}px`, l.value = `${P.offsetHeight}px`, r.value = `${k + f.value}px`, a.value = `${E}px`, s.value = `${D.offsetWidth}px`, u.value = `${D.offsetHeight}px`, o.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (o.value = !1, {
        offsetTop: R,
        isFixed: !1
      });
    }
    function h() {
      if (!m)
        return;
      const O = g();
      O && y(e.onScroll, O.offsetTop, O.isFixed);
    }
    function b() {
      return Uu(this, null, function* () {
        o.value = !1, yield Ko(), g();
      });
    }
    function S() {
      return Uu(this, null, function* () {
        yield cn(), m = ct(n.value), m !== window && m.addEventListener("scroll", h), h();
      });
    }
    function T() {
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
      n: dw,
      classes: cw,
      resize: b,
      toNumber: V
    };
  }
});
Of.render = fw;
var $l = Of;
re($l);
const BE = $l;
var bo = $l;
const Tf = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function vw() {
  const { bindChildren: e, length: n, childProviders: t } = sn(
    Tf
  );
  return {
    length: n,
    indexAnchors: t,
    bindIndexAnchors: e
  };
}
function mw() {
  const { parentProvider: e, index: n, bindParent: t } = ln(
    Tf
  );
  return t || Tn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: t
  };
}
const hw = {
  index: [Number, String]
}, { name: pw, n: gw, classes: bw } = ne("index-anchor");
function yw(e, n) {
  return p(), ke(Gt(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: he(() => [
      M(
        "div",
        ze({
          class: e.n()
        }, e.$attrs),
        [
          z(e.$slots, "default", {}, () => [
            Ie(
              ae(e.name),
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
const Ef = ee({
  name: pw,
  components: { VarSticky: bo },
  inheritAttrs: !1,
  props: hw,
  setup(e) {
    const n = C(0), t = C(!1), o = N(() => e.index), r = C(null), { index: a, indexBar: i, bindIndexBar: l } = mw(), { active: s, sticky: u, cssMode: d, stickyOffsetTop: c, zIndex: f } = i;
    l({
      index: a,
      name: o,
      ownTop: n,
      setOwnTop: g,
      setDisabled: h
    });
    function g() {
      r.value && (n.value = r.value.$el ? r.value.$el.offsetTop : r.value.offsetTop);
    }
    function h(b) {
      t.value = b;
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
      Transition: je
    };
  }
});
Ef.render = yw;
var wl = Ef;
re(wl);
const ME = wl;
var Ma = wl;
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
  onClick: A(),
  onChange: A()
};
var Wo = (e, n, t) => new Promise((o, r) => {
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
const { name: ww, n: Cw, classes: Sw } = ne("index-bar"), kw = ["onClick"];
function Pw(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n()),
      ref: "barEl"
    },
    [
      z(e.$slots, "default"),
      M(
        "ul",
        {
          class: v(e.n("anchor-list")),
          style: H({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (p(!0), w(
            Ve,
            null,
            Ge(e.anchorNameList, (t) => (p(), w("li", {
              key: t,
              class: v(e.classes(e.n("anchor-item"), [e.active === t, e.n("anchor-item--active")])),
              style: H({ color: e.active === t && e.highlightColor ? e.highlightColor : "" }),
              onClick: (o) => e.anchorClick({ anchorName: t, manualCall: !0 })
            }, ae(t), 15, kw))),
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
const If = ee({
  name: ww,
  props: $w,
  setup(e) {
    const n = C(""), t = C(null), o = C([]), r = C(), a = N(() => e.sticky), i = N(() => e.stickyCssMode || e.cssMode), l = N(() => Fe(e.stickyOffsetTop)), s = N(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = vw();
    let f = null, m = !1;
    const g = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    fe(
      () => u.value,
      () => Wo(this, null, function* () {
        yield cn(), d.forEach(({ name: P, setOwnTop: B }) => {
          P.value && o.value.push(P.value), B();
        });
      })
    ), an(() => Wo(this, null, function* () {
      yield O(), $();
    })), gr(k), Wt(() => {
      m = !0, k();
    }), mt(() => {
      !m || r.value === void 0 || (T({
        anchorName: r.value,
        options: { event: !1 }
      }), m = !1);
    }), c(g);
    function h(P, B) {
      const E = ao(P) ? P.name.value : P;
      E === r.value || E === void 0 || (r.value = E, (B == null ? void 0 : B.event) !== !1 && y(e.onChange, E));
    }
    function b() {
      if (hi(f))
        return 0;
      const { top: P } = en(f), { scrollTop: B } = f, { top: E } = en(t.value);
      return B - P + E;
    }
    function S() {
      const P = lo(f), B = f === window ? document.body.scrollHeight : f.scrollHeight, E = b();
      d.forEach((R, L) => {
        const U = R.ownTop.value, oe = P - U + l.value - E, G = L === d.length - 1 ? B : d[L + 1].ownTop.value - R.ownTop.value;
        R.setDisabled(!0), oe >= 0 && oe < G && n.value === "" && (R.setDisabled(!1), h(R));
      });
    }
    function T(P) {
      return Wo(this, arguments, function* ({ anchorName: B, manualCall: E = !1, options: R }) {
        if (E && y(e.onClick, B), B === r.value && !m)
          return;
        const L = d.find(({ name: j }) => B === j.value);
        if (!L)
          return;
        const U = b(), oe = L.ownTop.value - l.value + U, G = yi(f);
        n.value = B, h(B, R), yield so(f, {
          left: G,
          top: oe,
          animation: qd,
          duration: V(e.duration)
        }), yield cn(), n.value = "";
      });
    }
    function O() {
      return Wo(this, null, function* () {
        yield cn(), f = ct(t.value);
      });
    }
    function $() {
      f.addEventListener("scroll", S);
    }
    function k() {
      f.removeEventListener("scroll", S);
    }
    function D(P, B) {
      io(() => T({ anchorName: P, options: B }));
    }
    return {
      barEl: t,
      active: r,
      zIndex: s,
      anchorNameList: o,
      n: Cw,
      classes: Sw,
      toNumber: V,
      scrollTo: D,
      anchorClick: T
    };
  }
});
If.render = Pw;
var Cl = If;
re(Cl);
const NE = Cl;
var Na = Cl, Ow = Object.defineProperty, Hu = Object.getOwnPropertySymbols, Tw = Object.prototype.hasOwnProperty, Ew = Object.prototype.propertyIsEnumerable, Fu = (e, n, t) => n in e ? Ow(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Iw = (e, n) => {
  for (var t in n || (n = {}))
    Tw.call(n, t) && Fu(e, t, n[t]);
  if (Hu)
    for (var t of Hu(n))
      Ew.call(n, t) && Fu(e, t, n[t]);
  return e;
};
const Dw = Iw({
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
  onFocus: A(),
  onBlur: A(),
  onInput: A(),
  onChange: A(),
  onClear: A(),
  "onUpdate:modelValue": A()
}, Te(hl, [
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
])), { name: Bw, n: Mw, classes: Nw } = ne("input"), Vw = ["placeholder", "enterkeyhint"], Aw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], zw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Lw(e, n) {
  const t = le("var-field-decorator"), o = le("var-form-details");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[13] || (n[13] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      Z(
        t,
        at(Po({
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
        er({
          "append-icon": he(() => [
            z(e.$slots, "append-icon")
          ]),
          default: he(() => [
            e.normalizedType === "password" ? (p(), w("input", {
              key: 0,
              tabindex: "-1",
              class: v(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: H({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, Vw)) : x("v-if", !0),
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
              style: H({
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
      `, 46, Aw)) : (p(), w("input", {
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
              style: H({
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
            }, null, 46, zw))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: he(() => [
              z(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      Z(o, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[12] || (n[12] = On(() => {
        }, ["stop"]))
      }, er({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: he(() => [
            z(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Df = ee({
  name: Bw,
  components: {
    VarFormDetails: hn,
    VarFieldDecorator: mo
  },
  props: Dw,
  setup(e) {
    const n = Cd(), t = C(null), o = C(!1), r = C(!1), { bindForm: a, form: i } = Dn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = In(), c = N(() => e.disabled || e.readonly ? "" : "text"), f = N(() => e.type === "number" ? "text" : e.type), m = N(() => {
      const { maxlength: Y, modelValue: se } = e;
      return Y ? Fn(se) ? `0 / ${Y}` : `${String(se).length}/${Y}` : "";
    }), g = N(() => {
      const { hint: Y, blurColor: se, focusColor: W } = e;
      if (!Y)
        return l.value ? "var(--field-decorator-error-color)" : o.value ? W || "var(--field-decorator-focus-color)" : se || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    y(a, {
      reset: G,
      validate: j,
      resetValidation: d
    }), an(() => {
      e.autofocus && X();
    });
    function b(Y) {
      Ye(() => {
        const { validateTrigger: se, rules: W, modelValue: de } = e;
        s(se, Y, W, de);
      });
    }
    function S(Y) {
      o.value = !0, y(e.onFocus, Y), b("onFocus");
    }
    function T(Y) {
      o.value = !1, y(e.onBlur, Y), b("onBlur");
    }
    function O(Y) {
      const se = Y.target;
      let { value: W } = se;
      return e.type === "number" && (W = R(W)), U(L(W));
    }
    function $() {
      r.value = !0;
    }
    function k(Y) {
      r.value && (r.value = !1, Y.target.dispatchEvent(new Event("input")));
    }
    function D(Y) {
      if (r.value)
        return;
      const se = O(Y);
      y(e["onUpdate:modelValue"], se), y(e.onInput, se, Y), b("onInput");
    }
    function P(Y) {
      const se = O(Y);
      y(e.onChange, se, Y), b("onChange");
    }
    function B() {
      const { disabled: Y, readonly: se, clearable: W, onClear: de } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || Y || se || !W || (y(e["onUpdate:modelValue"], ""), y(de, ""), b("onClear"));
    }
    function E(Y) {
      const { disabled: se, onClick: W } = e;
      i != null && i.disabled.value || se || (y(W, Y), b("onClick"));
    }
    function R(Y) {
      const se = Y.indexOf("-"), W = Y.indexOf(".");
      return se > -1 && (Y = se === 0 ? "-" + Y.replace(/-/g, "") : Y.replace(/-/g, "")), W > -1 && (Y = Y.slice(0, W + 1) + Y.slice(W).replace(/\./g, "")), Y.replace(/[^-0-9.]/g, "");
    }
    function L(Y) {
      return e.modelModifiers.trim ? Y.trim() : Y;
    }
    function U(Y) {
      return e.maxlength ? Y.slice(0, V(e.maxlength)) : Y;
    }
    function oe(Y) {
      const { disabled: se } = e;
      i != null && i.disabled.value || se || Y.target === t.value || (X(), Y.preventDefault());
    }
    function G() {
      y(e["onUpdate:modelValue"], ""), d();
    }
    function j() {
      return u(e.rules, e.modelValue);
    }
    function X() {
      var Y;
      (Y = t.value) == null || Y.focus();
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
      placeholderColor: g,
      normalizedType: f,
      cursor: c,
      maxlengthText: m,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: Mw,
      classes: Nw,
      isEmpty: Fn,
      handleFocus: S,
      handleBlur: T,
      handleInput: D,
      handleChange: P,
      handleClear: B,
      handleClick: E,
      handleCompositionStart: $,
      handleCompositionEnd: k,
      handleMousedown: oe,
      validate: j,
      resetValidation: d,
      reset: G,
      focus: X,
      blur: Q
    };
  }
});
Df.render = Lw;
var Sl = Df;
re(Sl);
const VE = Sl;
var pr = Sl;
const Rw = {
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
  onClick: A()
}, { name: Uw, n: Hw, classes: Fw } = ne("link");
function Yw(e, n) {
  return p(), ke(Gt(e.tag), ze(e.linkProps, {
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
    default: he(() => [
      z(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const Bf = ee({
  name: Uw,
  props: Rw,
  setup(e) {
    const n = N(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), t = N(() => {
      const { disabled: r, href: a, target: i, to: l, replace: s, rel: u } = e;
      return r ? {} : a ? { href: a, target: i, rel: u } : l ? { to: l, target: i, replace: s } : {};
    });
    function o(r) {
      e.disabled || y(e.onClick, r);
    }
    return {
      tag: n,
      linkProps: t,
      n: Hw,
      classes: Fw,
      handleClick: o,
      toSizeUnit: Se
    };
  }
});
Bf.render = Yw;
var kl = Bf;
re(kl);
const AE = kl;
var Va = kl;
const jw = {
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
  onLoad: A(),
  "onUpdate:loading": A(),
  "onUpdate:error": A()
}, Mf = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Ww() {
  const { bindChildren: e, childProviders: n, length: t } = sn(
    Mf
  );
  return {
    length: t,
    tabItemList: n,
    bindTabItem: e
  };
}
const Nf = Symbol("TAB_ITEM_BIND_LIST_KEY");
function qw() {
  const { parentProvider: e, bindParent: n, index: t } = ln(
    Mf
  );
  return n || Tn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: t,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Gw() {
  const { childProviders: e, bindChildren: n, length: t } = sn(Nf);
  return {
    length: t,
    lists: e,
    bindLists: n
  };
}
function Xw() {
  const { parentProvider: e, bindParent: n, index: t } = ln(Nf);
  return {
    index: t,
    tabItem: e,
    bindTabItem: n
  };
}
var Kw = (e, n, t) => new Promise((o, r) => {
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
const { name: Zw, n: Jw, classes: Qw } = ne("list");
function _w(e, n) {
  const t = le("var-loading"), o = Ue("ripple");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      z(e.$slots, "default"),
      e.loading ? z(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          M(
            "div",
            {
              class: v(e.n("loading"))
            },
            [
              M(
                "div",
                {
                  class: v(e.n("loading-text"))
                },
                ae((r = e.loadingText) != null ? r : e.pack.listLoadingText),
                3
                /* TEXT, CLASS */
              ),
              Z(t, {
                size: "mini",
                radius: 10
              })
            ],
            2
            /* CLASS */
          )
        ];
      }) : x("v-if", !0),
      e.finished ? z(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          M(
            "div",
            {
              class: v(e.n("finished"))
            },
            ae((r = e.finishedText) != null ? r : e.pack.listFinishedText),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : x("v-if", !0),
      e.error ? z(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Ee((p(), w(
            "div",
            {
              class: v(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              Ie(
                ae((r = e.errorText) != null ? r : e.pack.listErrorText),
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
      }) : x("v-if", !0),
      M(
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
const Vf = ee({
  name: Zw,
  directives: { Ripple: Je },
  components: { VarLoading: Ut },
  props: jw,
  setup(e) {
    const n = C(null), t = C(null), { tabItem: o, bindTabItem: r } = Xw();
    let a;
    y(r, {}), o && fe(() => o.current.value, u), fe(() => [e.loading, e.error, e.finished], u), an(() => {
      a = ct(n.value), a.addEventListener("scroll", u), e.immediateCheck && u();
    }), br(s);
    function i() {
      y(e["onUpdate:error"], !1), y(e["onUpdate:loading"], !0), y(e.onLoad);
    }
    function l() {
      const { bottom: d } = en(a), { bottom: c } = en(t.value);
      return Math.floor(c) - Fe(e.offset) <= d;
    }
    function s() {
      a.removeEventListener("scroll", u);
    }
    function u() {
      return Kw(this, null, function* () {
        yield Ye(), !(e.loading || e.finished || e.error || (o == null ? void 0 : o.current.value) === !1 || !l()) && i();
      });
    }
    return {
      pack: nn,
      listEl: n,
      detectorEl: t,
      isNumber: vn,
      load: i,
      check: u,
      n: Jw,
      classes: Qw
    };
  }
});
Vf.render = _w;
var Pl = Vf;
re(Pl);
const zE = Pl;
var Aa = Pl;
const xw = {
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
  name: eC,
  classes: nC,
  n: Yu
} = ne("loading-bar");
var tC = ee({
  name: eC,
  props: xw,
  setup(e) {
    return () => Z("div", {
      class: nC(Yu(), [e.error, Yu("--error")]),
      style: {
        zIndex: wn.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: Se(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Se(e.top)
      }
    }, null);
  }
});
let Af, zf, Br, Lf, ju, Rf = {};
const oC = {
  value: 0,
  opacity: 0,
  error: !1
}, tn = We(oC), rC = (e) => {
  Object.assign(tn, e);
}, aC = (e) => {
  Object.assign(tn, e), Rf = e;
}, iC = () => {
  Object.keys(Rf).forEach((e) => {
    tn[e] !== void 0 && (tn[e] = void 0);
  });
}, Uf = () => {
  ju || (ju = !0, Kt(tC, tn));
}, Ol = () => {
  Af = window.setTimeout(() => {
    if (tn.value >= 95)
      return;
    let e = Math.random();
    tn.value < 70 && (e = Math.round(5 * Math.random())), tn.value += e, Ol();
  }, 200);
}, Tl = () => {
  window.clearTimeout(zf), window.clearTimeout(Af), window.clearTimeout(Br), window.clearTimeout(Lf);
}, lC = () => {
  Tl(), tn.error = !1, tn.value = 0, Uf(), Br = window.setTimeout(() => {
    tn.opacity = 1;
  }, 200), Ol();
}, Hf = () => {
  Tl(), tn.value = 100, Br = window.setTimeout(() => {
    tn.opacity = 0, zf = window.setTimeout(() => {
      tn.error = !1;
    }, 250);
  }, 300);
}, sC = () => {
  Tl(), tn.error = !0, tn.value === 100 && (tn.value = 0), Uf(), Br = window.setTimeout(() => {
    tn.opacity = 1;
  }, 200), Ol(), Lf = window.setTimeout(Hf, 300);
}, Ff = {
  start: lC,
  finish: Hf,
  error: sC,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: rC,
  setDefaultOptions: aC,
  resetDefaultOptions: iC
}, LE = Ff;
var za = Ff;
const uC = {
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
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
}, { name: dC, n: cC, classes: fC } = ne("menu");
function vC(e, n) {
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
      z(e.$slots, "default"),
      (p(), ke(Xn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        Z(je, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: he(() => [
            Ee(M(
              "div",
              {
                ref: "popover",
                style: H({
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
                z(e.$slots, "menu")
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
const Yf = ee({
  name: dC,
  props: uC,
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
      open: g,
      // expose
      close: h,
      // expose
      resize: b
    } = hf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: gn,
      toSizeUnit: Se,
      n: cC,
      classes: fC,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handlePopoverClose: f,
      handleClosed: m,
      resize: b,
      open: g,
      close: h
    };
  }
});
Yf.render = vC;
var El = Yf;
re(El);
const RE = El;
var yo = El;
const jf = Symbol("SELECT_BIND_OPTION_KEY");
function mC() {
  const { length: e, childProviders: n, bindChildren: t } = sn(jf);
  return {
    length: e,
    options: n,
    bindOptions: t
  };
}
function hC() {
  const { index: e, parentProvider: n, bindParent: t } = ln(jf);
  return t || Tn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: t
  };
}
const pC = {
  label: {},
  value: {}
}, { name: gC, n: bC, classes: yC } = ne("option");
function $C(e, n) {
  const t = le("var-checkbox"), o = le("var-hover-overlay"), r = Ue("ripple"), a = Ue("hover");
  return Ee((p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: H({
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = (...i) => e.handleClick && e.handleClick(...i))
    },
    [
      M(
        "div",
        {
          class: v(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
          style: H({
            background: e.optionSelected ? e.focusColor : void 0
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      e.multiple ? (p(), ke(t, {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
        onClick: n[1] || (n[1] = On(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      }, null, 8, ["checked-color", "modelValue", "onChange"])) : x("v-if", !0),
      M(
        "div",
        {
          class: v(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        [
          z(e.$slots, "default", {}, () => [
            Ie(
              ae(e.label),
              1
              /* TEXT */
            )
          ])
        ],
        2
        /* CLASS */
      ),
      Z(o, { hovering: e.hovering }, null, 8, ["hovering"])
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Wf = ee({
  name: gC,
  directives: { Ripple: Je, Hover: En },
  components: {
    VarCheckbox: lr,
    VarHoverOverlay: zn
  },
  props: pC,
  setup(e) {
    const n = C(!1), t = N(() => n.value), o = N(() => e.label), r = N(() => e.value), { select: a, bindSelect: i } = hC(), { multiple: l, focusColor: s, onSelect: u, computeLabel: d } = a, { hovering: c, handleHovering: f } = Wn(), m = {
      label: o,
      value: r,
      selected: t,
      sync: b
    };
    fe([() => e.label, () => e.value], d), i(m);
    function g() {
      l.value && (n.value = !n.value), u(m);
    }
    function h() {
      return u(m);
    }
    function b(S) {
      n.value = S;
    }
    return {
      n: bC,
      classes: yC,
      optionSelected: n,
      multiple: l,
      focusColor: s,
      hovering: c,
      handleHovering: f,
      handleClick: g,
      handleSelect: h
    };
  }
});
Wf.render = $C;
var Il = Wf;
re(Il);
const UE = Il;
var La = Il;
const wC = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  onClick: A(),
  "onUpdate:show": A()
}, {
  name: CC,
  n: Wu
} = ne("overlay");
var Dl = ee({
  name: CC,
  inheritAttrs: !1,
  props: wC,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const {
      zIndex: o
    } = Eo(() => e.show, 1), {
      disabled: r
    } = Zt();
    $r(() => e.show, () => e.lockScroll);
    function a() {
      y(e.onClick), y(e["onUpdate:show"], !1);
    }
    function i() {
      return Z("div", ze({
        class: Wu(),
        style: {
          zIndex: o.value - 1
        }
      }, t, {
        onClick: a
      }), [y(n.default)]);
    }
    function l() {
      return Z(je, {
        name: Wu("--fade")
      }, {
        default: () => [e.show && i()]
      });
    }
    return () => {
      const {
        teleport: s
      } = e;
      return s ? Z(Xn, {
        to: s,
        disabled: r.value
      }, {
        default: () => [l()]
      }) : l();
    };
  }
});
re(Dl);
const HE = Dl;
var Ra = Dl;
const SC = {
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
  onChange: A(),
  "onUpdate:current": A(),
  "onUpdate:size": A()
}, { name: kC, n: PC, classes: OC } = ne("pagination"), TC = ["item-mode", "onClick"];
function EC(e, n) {
  const t = le("var-icon"), o = le("var-input"), r = le("var-cell"), a = le("var-menu"), i = Ue("ripple");
  return p(), w(
    "ul",
    {
      class: v(e.n())
    },
    [
      Ee((p(), w(
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
          z(e.$slots, "prev", {}, () => [
            Z(t, { name: "chevron-left" })
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
          Z(o, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = rs((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          M("span", null, [
            Ie(
              " / " + ae(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            M(
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
        Ve,
        { key: 1 },
        Ge(e.pageList, (l, s) => Ee((p(), w("li", {
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
          Ie(
            ae(l),
            1
            /* TEXT */
          )
        ], 10, TC)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Ee((p(), w(
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
          z(e.$slots, "next", {}, () => [
            Z(t, { name: "chevron-right" })
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
          Z(a, {
            placement: "cover-top",
            disabled: e.disabled,
            show: e.menuVisible,
            "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l)
          }, {
            menu: he(() => [
              (p(!0), w(
                Ve,
                null,
                Ge(e.sizeOption, (l, s) => Ee((p(), ke(r, {
                  class: v(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                  key: s,
                  onClick: (u) => e.clickSize(l)
                }, {
                  default: he(() => [
                    Ie(
                      ae(l) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
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
            default: he(() => [
              M(
                "div",
                {
                  class: v(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
                  onClick: n[5] || (n[5] = On((...l) => e.showMenu && e.showMenu(...l), ["stop"]))
                },
                [
                  M(
                    "span",
                    null,
                    ae(e.size) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
                    1
                    /* TEXT */
                  ),
                  Z(t, {
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
      )) : x("v-if", !0),
      e.showQuickJumper && !e.simple ? (p(), w(
        "li",
        {
          key: 3,
          class: v(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Ie(
            ae(e.pack.paginationJump) + " ",
            1
            /* TEXT */
          ),
          Z(o, {
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
      )) : x("v-if", !0),
      e.totalText ? (p(), w(
        "li",
        {
          key: 4,
          class: v(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        ae(e.totalText),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const qf = ee({
  name: kC,
  components: {
    VarMenu: yo,
    VarIcon: He,
    VarCell: ir,
    VarInput: pr
  },
  directives: { Ripple: Je },
  props: SC,
  setup(e) {
    const n = C(!1), t = C(""), o = C("1"), r = C(!1), a = C(!1), i = C(V(e.current) || 1), l = C(V(e.size) || 10), s = C([]), u = N(() => Math.ceil(e.maxPagerCount / 2)), d = N(() => Math.ceil(V(e.total) / V(l.value))), c = N(() => {
      const $ = l.value * (i.value - 1) + 1, k = Math.min(l.value * i.value, V(e.total));
      return [$, k];
    }), f = N(() => e.showTotal ? e.showTotal(V(e.total), c.value) : "");
    fe([() => e.current, () => e.size], ([$, k]) => {
      i.value = V($) || 1, l.value = V(k || 10);
    }), fe(
      [i, l, d],
      ([$, k, D], [P, B]) => {
        let E = [];
        const { maxPagerCount: R, total: L, onChange: U } = e, oe = Math.ceil(V(L) / V(B)), G = D - (R - u.value) - 1;
        if (o.value = `${$}`, D - 2 > R) {
          if (P === void 0 || D !== oe)
            for (let j = 2; j < R + 2; j++)
              E.push(j);
          if ($ <= R && $ < G) {
            E = [];
            for (let j = 1; j < R + 1; j++)
              E.push(j + 1);
            r.value = !0, a.value = !1;
          }
          if ($ > R && $ < G) {
            E = [];
            for (let j = 1; j < R + 1; j++)
              E.push($ + j - u.value);
            r.value = $ === 2 && R === 1, a.value = !1;
          }
          if ($ >= G) {
            E = [];
            for (let j = 1; j < R + 1; j++)
              E.push(D - (R - j) - 1);
            r.value = !1, a.value = !0;
          }
          E = [1, "...", ...E, "...", D];
        } else
          for (let j = 1; j <= D; j++)
            E.push(j);
        s.value = E, P != null && D > 0 && y(U, $, k), y(e["onUpdate:current"], $), y(e["onUpdate:size"], k);
      },
      {
        immediate: !0
      }
    );
    function m($, k) {
      return vn($) ? !1 : k === 1 ? r.value : a.value;
    }
    function g($, k) {
      return vn($) ? "basic" : k === 1 ? "head" : "tail";
    }
    function h($, k) {
      if (!($ === i.value || e.disabled)) {
        if ($ === "...") {
          i.value = k === 1 ? Math.max(i.value - e.maxPagerCount, 1) : Math.min(i.value + e.maxPagerCount, d.value);
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
    function b() {
      e.disabled || (n.value = !0);
    }
    function S($) {
      l.value = $, n.value = !1;
      const k = T(i.value);
      o.value = String(k), i.value = k;
    }
    function T($) {
      return $ > d.value ? d.value : $ < 1 ? 1 : $;
    }
    function O($, k, D) {
      D.target.blur();
      const P = T(V(k));
      o.value = String(P), i.value = P, $ === "quick" && (t.value = "");
    }
    return {
      pack: nn,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      quickJumperValue: t,
      simpleCurrentValue: o,
      totalText: f,
      n: PC,
      classes: OC,
      getMode: g,
      isHideEllipsis: m,
      clickItem: h,
      showMenu: b,
      clickSize: S,
      setPage: O,
      toNumber: V,
      formatElevation: gn
    };
  }
});
qf.render = EC;
var Bl = qf;
re(Bl);
const FE = Bl;
var Ua = Bl;
const IC = {
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
  onClick: A()
}, { name: DC, n: BC, classes: MC } = ne("paper");
function NC(e, n) {
  const t = Ue("ripple");
  return Ee((p(), w(
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
      style: H({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      z(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const Gf = ee({
  name: DC,
  directives: { Ripple: Je },
  props: IC,
  setup(e) {
    function n(t) {
      y(e.onClick, t);
    }
    return {
      n: BC,
      classes: MC,
      formatElevation: gn,
      toSizeUnit: Se,
      handleClick: n
    };
  }
});
Gf.render = NC;
var Ml = Gf;
re(Ml);
const YE = Ml;
var Ha = Ml, VC = Object.defineProperty, qu = Object.getOwnPropertySymbols, AC = Object.prototype.hasOwnProperty, zC = Object.prototype.propertyIsEnumerable, Gu = (e, n, t) => n in e ? VC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, LC = (e, n) => {
  for (var t in n || (n = {}))
    AC.call(n, t) && Gu(e, t, n[t]);
  if (qu)
    for (var t of qu(n))
      zC.call(n, t) && Gu(e, t, n[t]);
  return e;
};
const RC = LC({
  modelValue: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  title: String,
  textKey: {
    type: String,
    default: "text"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: Boolean,
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
  onChange: A(),
  onConfirm: A(),
  onCancel: A(),
  "onUpdate:modelValue": A()
}, Te(To, [
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
])), { name: UC, n: HC, classes: FC } = ne("picker"), Xu = 300, YC = 15, Ku = 200, jC = 1e3;
let Zu = 0;
const WC = ["onTouchstartPassive", "onTouchmove", "onTouchend"], qC = ["onTransitionend"], GC = ["onClick"];
function XC(e, n) {
  const t = le("var-button");
  return p(), ke(
    Gt(e.dynamic ? e.n("$-popup") : e.Transition),
    ze(
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
      default: he(() => [
        M(
          "div",
          ze({
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
                z(e.$slots, "cancel", {}, () => [
                  Z(t, {
                    class: v(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: he(() => {
                      var o;
                      return [
                        Ie(
                          ae((o = e.cancelButtonText) != null ? o : e.pack.pickerCancelButtonText),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ]),
                z(e.$slots, "title", {}, () => {
                  var o;
                  return [
                    M(
                      "div",
                      {
                        class: v(e.n("title"))
                      },
                      ae((o = e.title) != null ? o : e.pack.pickerTitle),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                z(e.$slots, "confirm", {}, () => [
                  Z(t, {
                    class: v(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: he(() => {
                      var o;
                      return [
                        Ie(
                          ae((o = e.confirmButtonText) != null ? o : e.pack.pickerConfirmButtonText),
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
            )) : x("v-if", !0),
            M(
              "div",
              {
                class: v(e.n("columns")),
                style: H({ height: `${e.columnHeight}px` })
              },
              [
                (p(!0), w(
                  Ve,
                  null,
                  Ge(e.scrollColumns, (o) => (p(), w("div", {
                    class: v(e.n("column")),
                    key: o.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, o),
                    onTouchmove: On((r) => e.handleTouchmove(r, o), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(o)
                  }, [
                    M("div", {
                      class: v(e.n("scroller")),
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, o),
                      style: H({
                        transform: `translateY(${o.translate}px)`,
                        transitionDuration: `${o.duration}ms`,
                        transitionProperty: o.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(o)
                    }, [
                      (p(!0), w(
                        Ve,
                        null,
                        Ge(o.column, (r, a) => (p(), w("div", {
                          key: e.getValue(r),
                          class: v(e.classes(e.n("option"), r.className)),
                          style: H({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(o, a)
                        }, [
                          M(
                            "div",
                            {
                              class: v(e.classes(e.n("text"), r.textClassName))
                            },
                            ae(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, GC))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, qC)
                  ], 42, WC))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                M(
                  "div",
                  {
                    class: v(e.n("picked")),
                    style: H({
                      top: `${e.center}px`,
                      height: `${e.optionHeight}px`
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                M(
                  "div",
                  {
                    class: v(e.n("mask")),
                    style: H({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
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
const Xf = ee({
  name: UC,
  components: {
    VarButton: mn,
    VarPopup: dt
  },
  inheritAttrs: !1,
  props: RC,
  setup(e) {
    const n = Lt(e, "modelValue"), t = C([]), o = N(() => Fe(e.optionHeight)), r = N(() => Fe(e.optionCount)), a = N(() => r.value * o.value / 2 - o.value / 2), i = N(() => r.value * o.value), { prevY: l, moveY: s, dragging: u, startTouch: d, moveTouch: c, endTouch: f } = yr();
    let m = [];
    k(), fe(() => e.columns, k, { deep: !0 }), fe(() => n.value, D);
    function g(I) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[I];
    }
    function h(I) {
      var F;
      return (F = I[g("value")]) != null ? F : I[g("text")];
    }
    function b(I) {
      m = [...I];
    }
    function S(I) {
      return I.map((F) => {
        const ve = {
          id: Zu++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: F,
          scrollEl: null,
          scrolling: !1
        };
        return oe(ve), ve;
      });
    }
    function T(I) {
      const F = [];
      return O(F, I), F;
    }
    function O(I, F) {
      var ve;
      if (F.length) {
        const Pe = {
          id: Zu++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: F,
          scrollEl: null,
          scrolling: !1
        };
        I.push(Pe), oe(Pe), O(I, (ve = Pe.column[Pe.index][g("children")]) != null ? ve : []);
      }
    }
    function $(I) {
      var F;
      t.value.splice(t.value.indexOf(I) + 1), O(t.value, (F = I.column[I.index][g("children")]) != null ? F : []);
    }
    function k() {
      t.value = e.cascade ? T(e.columns) : S(e.columns), D();
    }
    function D() {
      t.value.forEach((F, ve) => {
        const Pe = F.column.findIndex((te) => n.value[ve] === h(te));
        F.index = Pe === -1 ? 0 : Pe, oe(F);
      });
      const { indexes: I } = U();
      b(I);
    }
    function P(I, F) {
      F.scrollEl = I;
    }
    function B(I) {
      y(e["onUpdate:show"], I);
    }
    function E(I) {
      const F = a.value - I.column.length * o.value, ve = o.value + a.value;
      I.translate = st(I.translate, F, ve);
    }
    function R(I, F) {
      const ve = Math.round((a.value - F) / o.value);
      return am(ve, I.column);
    }
    function L(I) {
      return I.translate = a.value - I.index * o.value, I.translate;
    }
    function U() {
      const I = [], F = [], ve = [];
      return t.value.forEach(({ column: Pe, index: te }) => {
        const ue = Pe[te];
        I.push(h(ue)), F.push(te), ve.push(ue);
      }), {
        values: I,
        indexes: F,
        options: ve
      };
    }
    function oe(I, F = 0) {
      L(I), I.duration = F;
    }
    function G(I, F, ve) {
      I.translate += Math.abs(F / ve) / 3e-3 * (F < 0 ? -1 : 1);
    }
    function j(I, F) {
      u.value || (I.index = F, oe(I, Ku));
    }
    function X(I, F) {
      F.touching = !0, F.translate = Ar(F.scrollEl), d(I);
    }
    function Q(I, F) {
      if (!F.touching)
        return;
      c(I), F.scrolling = !1, F.duration = 0, F.prevY = l.value, F.translate += s.value, E(F);
      const ve = performance.now();
      ve - F.momentumTime > Xu && (F.momentumTime = ve, F.momentumPrevY = F.translate);
    }
    function Y(I) {
      f(), I.touching = !1, I.prevY = 0;
      const F = I.translate - I.momentumPrevY, ve = performance.now() - I.momentumTime, Pe = Math.abs(F) >= YC && ve <= Xu, te = I.translate;
      Pe && G(I, F, ve), I.index = R(I, I.translate), oe(I, Pe ? jC : Ku), I.scrolling = I.translate !== te, I.scrolling || de(I);
    }
    function se(I) {
      I.scrolling = !1, de(I);
    }
    function W() {
      const { indexes: I } = U();
      return I.every((F, ve) => F === m[ve]);
    }
    function de(I) {
      const { cascade: F, onChange: ve } = e;
      if (W())
        return;
      F && $(I);
      const Pe = t.value.some((ie) => ie.scrolling), te = t.value.some((ie) => ie.touching);
      if (Pe || te)
        return;
      const { values: ue, indexes: we, options: Me } = U();
      b(we), y(ve, ue, we, Me), n.value = ue;
    }
    function J() {
      if (e.cascade) {
        const I = t.value.find((F) => F.scrolling);
        I && (I.index = R(I, Ar(I.scrollEl)), I.scrolling = !1, oe(I), $(I));
      } else
        t.value.forEach((I) => {
          I.index = R(I, Ar(I.scrollEl)), oe(I);
        });
    }
    function q() {
      J();
      const { values: I, indexes: F, options: ve } = U();
      b(F), y(e.onConfirm, I, F, ve);
    }
    function _() {
      J();
      const { values: I, indexes: F, options: ve } = U();
      b(F), y(e.onCancel, I, F, ve);
    }
    return {
      pack: nn,
      optionHeight: o,
      optionCount: r,
      scrollColumns: t,
      columnHeight: i,
      center: a,
      Transition: je,
      n: HC,
      classes: FC,
      setScrollEl: P,
      getOptionKey: g,
      getValue: h,
      handlePopupUpdateShow: B,
      handleTouchstart: X,
      handleTouchmove: Q,
      handleTouchend: Y,
      handleTransitionend: se,
      confirm: q,
      cancel: _,
      handleClick: j
    };
  }
});
Xf.render = XC;
var Vo = Xf;
let zt;
function Ao(e) {
  return new Promise((n) => {
    Ao.close();
    const t = Ae(e) ? { columns: e } : e, o = We(t);
    o.dynamic = !0, o.teleport = "body", zt = o;
    function r() {
      zt === o && (zt = null);
    }
    const { unmountInstance: a } = Kt(Vo, o, {
      onConfirm: (i, l, s) => {
        y(o.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), o.show = !1, r();
      },
      onCancel: (i, l, s) => {
        y(o.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), o.show = !1, r();
      },
      onClose: () => {
        y(o.onClose), n({
          state: "close"
        }), r();
      },
      onClosed: () => {
        y(o.onClosed), a(), r();
      },
      onRouteChange: () => {
        a(), r();
      },
      "onUpdate:show": (i) => {
        o.show = i;
      }
    });
    o.show = !0;
  });
}
Ao.close = function() {
  if (zt == null)
    return;
  const e = zt;
  zt = null, Ye().then(() => {
    e.show = !1;
  });
};
Ao.Component = Vo;
re(Vo);
re(Vo, Ao);
const jE = Vo;
var Fa = Ao;
const KC = {
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
}, Zn = 100, Hn = 20, Ju = 2 * Math.PI * Hn, { name: ZC, n: JC, classes: QC } = ne("progress"), _C = ["viewBox"], xC = { key: 0 }, eS = ["id"], nS = ["offset", "stop-color"], tS = ["d", "stroke-width", "stroke-dasharray"], oS = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function rS(e, n) {
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
          M(
            "div",
            {
              class: v(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
              style: H({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
            },
            [
              e.indeterminate ? (p(), w(
                "div",
                {
                  key: 0,
                  class: v(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
                },
                [
                  M(
                    "div",
                    {
                      class: v(e.classes(e.n(`linear--${e.type}`))),
                      style: H({ background: e.progressColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  ),
                  M(
                    "div",
                    {
                      class: v(e.classes(e.n(`linear--${e.type}`))),
                      style: H({ background: e.progressColor })
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
                  style: H({ background: e.progressColor, width: e.linearProps.width })
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
              z(e.$slots, "default", {}, () => [
                Ie(
                  ae(e.linearProps.roundValue),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : x("v-if", !0)
        ],
        2
        /* CLASS */
      )) : x("v-if", !0),
      e.mode === "circle" ? (p(), w(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
          style: H({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
        },
        [
          (p(), w("svg", {
            class: v(e.n("circle-svg")),
            viewBox: e.circleProps.viewBox
          }, [
            e.isPlainObject(e.color) ? (p(), w("defs", xC, [
              M("linearGradient", {
                id: e.id,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "0%"
              }, [
                (p(!0), w(
                  Ve,
                  null,
                  Ge(e.linearGradientProgress, (t, o) => (p(), w("stop", {
                    key: o,
                    offset: t,
                    "stop-color": e.color[t]
                  }, null, 8, nS))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, eS)
            ])) : x("v-if", !0),
            e.track ? (p(), w("path", {
              key: 1,
              class: v(e.n("circle-background")),
              d: e.circleProps.path,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              style: H({
                stroke: e.trackColor
              })
            }, null, 14, tS)) : x("v-if", !0),
            M("path", {
              class: v(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
              d: e.circleProps.path,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              "stroke-dashoffset": e.circleProps.strokeOffset,
              style: H({
                stroke: e.progressColor,
                transform: `rotateZ(${e.rotate}deg)`,
                transformOrigin: "50% 50%"
              })
            }, null, 14, oS)
          ], 10, _C)),
          e.label ? (p(), w(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
            },
            [
              z(e.$slots, "default", {}, () => [
                Ie(
                  ae(e.circleProps.roundValue),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : x("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )) : x("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Kf = ee({
  name: ZC,
  props: KC,
  setup(e) {
    const n = Cd(), t = N(() => {
      const i = V(e.value), l = i > Zn ? Zn : i, s = i > Zn ? Zn : Math.round(i);
      return {
        width: `${l}%`,
        roundValue: `${s}%`
      };
    }), o = N(() => {
      const { size: i, lineWidth: l, value: s } = e, u = Hn / (1 - Fe(l) / Fe(i)) * 2, d = `0 0 ${u} ${u}`, c = V(s) > Zn ? Zn : Math.round(V(s)), f = `${(Zn - c) / Zn * Ju}`, m = Fe(l) / Fe(i) * u, g = 0, h = -Hn, b = 0, S = -2 * Hn, T = `M ${u / 2} ${u / 2} m ${g} ${h} a ${Hn} ${Hn} 
        0 1 1 ${b} ${-S} a ${Hn} ${Hn} 0 1 1 ${-b} ${S}`;
      return {
        strokeWidth: m,
        viewBox: d,
        strokeOffset: f,
        roundValue: `${c}%`,
        path: T
      };
    }), r = N(() => ao(e.color) ? `url(#${n.value})` : e.color), a = N(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: t,
      CIRCUMFERENCE: Ju,
      RADIUS: Hn,
      circleProps: o,
      progressColor: r,
      linearGradientProgress: a,
      n: JC,
      classes: QC,
      toSizeUnit: Se,
      isPlainObject: ao
    };
  }
});
Kf.render = rS;
var Nl = Kf;
re(Nl);
const WE = Nl;
var Ya = Nl;
const aS = {
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
  onRefresh: A(),
  "onUpdate:modelValue": A()
};
var Qu = (e, n, t) => new Promise((o, r) => {
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
const { name: iS, n: _u, classes: lS } = ne("pull-refresh"), xu = 150;
function sS(e, n) {
  const t = le("var-icon");
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
      M(
        "div",
        {
          ref: "controlNode",
          class: v(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: H(e.controlStyle)
        },
        [
          Z(t, {
            name: e.iconName,
            transition: e.ICON_TRANSITION,
            class: v(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
            "var-pull-refresh-cover": ""
          }, null, 8, ["name", "transition", "class"])
        ],
        6
        /* CLASS, STYLE */
      ),
      z(e.$slots, "default")
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Zf = ee({
  name: iS,
  components: { VarIcon: He },
  props: aS,
  setup(e) {
    const n = C(0), t = C(null), o = C(null), r = C(0), a = C("-125%"), i = C("arrow-down"), l = C("default"), s = C(!1), u = N(() => Math.abs(2 * n.value)), d = N(() => l.value === "success"), c = N(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = N(() => ({
      transform: `translate3d(0px, ${xe(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    }));
    let m, g, h = 0, b = 0;
    fe(
      () => e.modelValue,
      (B) => {
        B === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, P();
        }, V(e.successDuration)));
      }
    ), an(D), ut(t, "touchmove", $);
    function S(B) {
      return Qu(this, null, function* () {
        if (i.value !== B)
          return i.value = B, new Promise((E) => {
            window.setTimeout(E, xu);
          });
      });
    }
    function T(B) {
      ("classList" in m ? m : document.body).classList[B](`${_u()}--lock`);
    }
    function O(B) {
      if (n.value === 0) {
        const { width: E } = en(o.value);
        n.value = -(E + E * 0.25);
      }
      h = B.touches[0].clientY, b = 0, g = ct(B.target);
    }
    function $(B) {
      if (!c.value || !g || g !== m && lo(g) > 0)
        return;
      const E = lo(m);
      if (E > 0)
        return;
      const R = E === 0;
      b = B.touches[0].clientY - h, R && b >= 0 && B.preventDefault(), l.value !== "pulling" && (l.value = "pulling", r.value = B.touches[0].clientY), R && vn(a.value) && a.value > n.value && T("add");
      const U = (B.touches[0].clientY - r.value) / 2 + n.value;
      a.value = U >= u.value ? u.value : U, S(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function k() {
      return Qu(this, null, function* () {
        c.value && (s.value = !0, V(a.value) >= u.value * 0.2 ? (yield S("refresh"), l.value = "loading", a.value = u.value * 0.3, y(e["onUpdate:modelValue"], !0), Ye(() => {
          y(e.onRefresh);
        }), T("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, T("remove");
        }, V(e.animationDuration))), g = null);
      });
    }
    function D() {
      m = e.target ? Bd(e.target, "PullRefresh") : ct(t.value);
    }
    function P() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, V(e.animationDuration));
    }
    return {
      ICON_TRANSITION: xu,
      refreshStatus: l,
      freshNode: t,
      controlNode: o,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: _u,
      classes: lS,
      touchStart: O,
      touchMove: $,
      touchEnd: k
    };
  }
});
Zf.render = sS;
var Vl = Zf;
re(Vl);
const qE = Vl;
var ja = Vl;
const uS = {
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
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, Jf = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function dS() {
  const { bindChildren: e, childProviders: n, length: t } = sn(
    Jf
  );
  return {
    length: t,
    radios: n,
    bindRadios: e
  };
}
function cS() {
  const { bindParent: e, parentProvider: n, index: t } = ln(Jf);
  return {
    index: t,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: fS, n: vS, classes: mS } = ne("radio");
function hS(e, n) {
  const t = le("var-icon"), o = le("var-hover-overlay"), r = le("var-form-details"), a = Ue("ripple"), i = Ue("hover");
  return p(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      M(
        "div",
        ze({
          class: e.n(),
          onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Ee((p(), w(
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
              style: H({ color: e.checked ? e.checkedColor : e.uncheckedColor })
            },
            [
              e.checked ? z(e.$slots, "checked-icon", { key: 0 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  "var-radio-cover": "",
                  name: "radio-marked",
                  size: e.iconSize
                }, null, 8, ["class", "size"])
              ]) : z(e.$slots, "unchecked-icon", { key: 1 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  "var-radio-cover": "",
                  name: "radio-blank",
                  size: e.iconSize
                }, null, 8, ["class", "size"])
              ]),
              Z(o, {
                hovering: !e.disabled && !e.formDisabled && e.hovering
              }, null, 8, ["hovering"])
            ],
            6
            /* CLASS, STYLE */
          )), [
            [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
            [i, e.handleHovering, "desktop"]
          ]),
          M(
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
              z(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      ),
      Z(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Qf = ee({
  name: fS,
  directives: { Ripple: Je, Hover: En },
  components: {
    VarIcon: He,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  inheritAttrs: !1,
  props: uS,
  setup(e) {
    const n = Lt(e, "modelValue"), t = N(() => n.value === e.checkedValue), o = C(!1), { radioGroup: r, bindRadioGroup: a } = cS(), { hovering: i, handleHovering: l } = Wn(), { form: s, bindForm: u } = Dn(), {
      errorMessage: d,
      validateWithTrigger: c,
      validate: f,
      // expose
      resetValidation: m
    } = In(), g = {
      sync: T,
      validate: $,
      resetValidation: m,
      reset: O
    };
    y(a, g), y(u, g);
    function h(D) {
      Ye(() => {
        const { validateTrigger: P, rules: B, modelValue: E } = e;
        c(P, D, B, E);
      });
    }
    function b(D) {
      const { checkedValue: P, onChange: B } = e;
      r && n.value === P || (n.value = D, y(B, n.value), r == null || r.onToggle(P), h("onChange"));
    }
    function S(D) {
      const { disabled: P, readonly: B, uncheckedValue: E, checkedValue: R, onClick: L } = e;
      s != null && s.disabled.value || P || (y(L, D), !(s != null && s.readonly.value || B) && (o.value = !0, b(t.value ? E : R)));
    }
    function T(D) {
      const { checkedValue: P, uncheckedValue: B } = e;
      n.value = D === P ? P : B;
    }
    function O() {
      n.value = e.uncheckedValue, m();
    }
    function $() {
      return f(e.rules, e.modelValue);
    }
    function k(D) {
      const { uncheckedValue: P, checkedValue: B } = e;
      ![P, B].includes(D) && (D = t.value ? P : B), b(D);
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
      n: vS,
      classes: mS,
      handleClick: S,
      toggle: k,
      reset: O,
      validate: $,
      resetValidation: m
    };
  }
});
Qf.render = hS;
var Al = Qf;
re(Al);
const GE = Al;
var Wa = Al;
const pS = {
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
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: gS, n: bS, classes: yS } = ne("radio-group");
function $S(e, n) {
  const t = le("var-form-details");
  return p(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      M(
        "div",
        {
          class: v(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          z(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      Z(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const _f = ee({
  name: gS,
  components: { VarFormDetails: hn },
  props: pS,
  setup(e) {
    const { length: n, radios: t, bindRadios: o } = dS(), { bindForm: r } = Dn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = In(), u = N(() => a.value), d = {
      onToggle: m,
      validate: g,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    fe(() => e.modelValue, f), fe(() => n.value, f), y(r, d), o(d);
    function c(b) {
      Ye(() => {
        const { validateTrigger: S, rules: T, modelValue: O } = e;
        i(S, b, T, O);
      });
    }
    function f() {
      return t.forEach(({ sync: b }) => b(e.modelValue));
    }
    function m(b) {
      y(e["onUpdate:modelValue"], b), y(e.onChange, b), c("onChange");
    }
    function g() {
      return l(e.rules, e.modelValue);
    }
    function h() {
      y(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: bS,
      classes: yS,
      reset: h,
      validate: g,
      resetValidation: s
    };
  }
});
_f.render = $S;
var zl = _f;
re(zl);
const XE = zl;
var qa = zl;
const wS = {
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
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  namespace: Te(Ke, "namespace"),
  emptyIconNamespace: Te(Ke, "namespace"),
  halfIconNamespace: Te(Ke, "namespace"),
  emptyColor: String,
  size: [String, Number],
  gap: [String, Number],
  half: Boolean,
  disabled: Boolean,
  disabledColor: String,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  clearable: Boolean,
  rules: Array,
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: CS, n: _t } = ne("rate"), SS = ["onClick"];
function kS(e, n) {
  const t = le("var-icon"), o = le("var-hover-overlay"), r = le("var-form-details"), a = Ue("ripple"), i = Ue("hover");
  return p(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      M(
        "div",
        {
          class: v(e.n())
        },
        [
          (p(!0), w(
            Ve,
            null,
            Ge(e.toNumber(e.count), (l) => Ee((p(), w("div", {
              key: l,
              style: H(e.getStyle(l)),
              class: v(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              Z(t, {
                class: v(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: H({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              Z(o, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, SS)), [
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
      Z(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const xf = ee({
  name: CS,
  components: {
    VarIcon: He,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Je, Hover: En },
  props: wS,
  setup(e) {
    const n = C(-1), { form: t, bindForm: o } = Dn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = In(), { hovering: s } = Wn();
    let u = Number(e.modelValue);
    y(o, {
      reset: O,
      validate: h,
      resetValidation: l
    });
    function c($) {
      const { count: k, gap: D } = e;
      return {
        color: m($).color,
        marginRight: $ !== V(k) ? Se(D) : 0
      };
    }
    function f($) {
      const { name: k, color: D } = m($);
      return {
        [_t("content")]: !0,
        [_t("--disabled")]: (t == null ? void 0 : t.disabled.value) || e.disabled,
        [_t("--error")]: r.value,
        [_t("--primary")]: k !== e.emptyIcon && !D
      };
    }
    function m($) {
      const {
        modelValue: k,
        disabled: D,
        disabledColor: P,
        color: B,
        half: E,
        emptyColor: R,
        icon: L,
        halfIcon: U,
        emptyIcon: oe,
        namespace: G,
        halfIconNamespace: j,
        emptyIconNamespace: X
      } = e;
      let Q = B;
      return (D || t != null && t.disabled.value) && (Q = P), $ <= V(k) ? { color: Q, name: L, namespace: G } : E && $ <= V(k) + 0.5 ? { color: Q, name: U, namespace: j } : {
        color: D || t != null && t.disabled.value ? P : R,
        name: oe,
        namespace: X
      };
    }
    function g($, k) {
      const { half: D, clearable: P } = e, { offsetWidth: B } = k.target;
      D && k.offsetX <= Math.floor(B / 2) && ($ -= 0.5), u === $ && P && ($ = 0), u = $, y(e["onUpdate:modelValue"], $);
    }
    function h() {
      return i(e.rules, V(e.modelValue));
    }
    function b() {
      return Ye(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function S($, k) {
      const { readonly: D, disabled: P, onChange: B } = e;
      D || P || t != null && t.disabled.value || t != null && t.readonly.value || (g($, k), y(B, $), b());
    }
    function T($) {
      return (k) => {
        n.value = $, s.value = k;
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
      handleClick: S,
      createHoverHandler: T,
      reset: O,
      validate: h,
      resetValidation: l,
      toSizeUnit: Se,
      toNumber: V,
      n: _t
    };
  }
});
xf.render = kS;
var Ll = xf;
re(Ll);
const KE = Ll;
var Ga = Ll;
const PS = (e) => (ht(""), e = e(), pt(), e), OS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, TS = /* @__PURE__ */ PS(() => /* @__PURE__ */ M(
  "path",
  { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
  null,
  -1
  /* HOISTED */
)), ES = [
  TS
];
function IS(e, n) {
  return p(), w("svg", OS, ES);
}
const ev = ee({});
ev.render = IS;
var DS = ev;
const BS = (e) => (ht(""), e = e(), pt(), e), MS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, NS = /* @__PURE__ */ BS(() => /* @__PURE__ */ M(
  "path",
  { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
  null,
  -1
  /* HOISTED */
)), VS = [
  NS
];
function AS(e, n) {
  return p(), w("svg", MS, VS);
}
const nv = ee({});
nv.render = AS;
var zS = nv;
const LS = (e) => (ht(""), e = e(), pt(), e), RS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, US = /* @__PURE__ */ LS(() => /* @__PURE__ */ M(
  "path",
  { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
  null,
  -1
  /* HOISTED */
)), HS = [
  US
];
function FS(e, n) {
  return p(), w("svg", RS, HS);
}
const tv = ee({});
tv.render = FS;
var YS = tv;
const { n: jS, classes: WS } = ne("result");
function qS(e, n) {
  return p(), w(
    Ve,
    null,
    [
      M(
        "span",
        {
          class: v(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      M(
        "span",
        {
          class: v(e.classes(e.n("success-line"), e.n("success-line-tip"))),
          style: H({
            animationDuration: e.animation ? "760ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      M(
        "span",
        {
          class: v(e.classes(e.n("success-line"), e.n("success-line-long"))),
          style: H({
            animationDuration: e.animation ? "770ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      M(
        "span",
        {
          ref: "circle",
          class: v(e.n("success-circle")),
          style: H({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      M(
        "span",
        {
          class: v(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      M(
        "span",
        {
          class: v(e.n("success-cover-right")),
          style: H({
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
const ov = ee({
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
      n: jS,
      classes: WS,
      toNumber: V
    };
  }
});
ov.render = qS;
var GS = ov;
const XS = (e) => (ht(""), e = e(), pt(), e), KS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, ZS = /* @__PURE__ */ XS(() => /* @__PURE__ */ M(
  "path",
  { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
  null,
  -1
  /* HOISTED */
)), JS = [
  ZS
];
function QS(e, n) {
  return p(), w("svg", KS, JS);
}
const rv = ee({});
rv.render = QS;
var _S = rv;
const xS = (e) => (ht(""), e = e(), pt(), e), ek = { viewBox: "-4 -4 32 32" }, nk = /* @__PURE__ */ xS(() => /* @__PURE__ */ M(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), tk = [
  nk
];
function ok(e, n) {
  return p(), w("svg", ek, tk);
}
const av = ee({});
av.render = ok;
var rk = av;
const ak = {
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
}, { name: ik, n: lk, classes: sk } = ne("result");
function uk(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      z(e.$slots, "image", {}, () => [
        e.type ? (p(), w(
          "div",
          {
            key: 0,
            class: v(e.n("image-container"))
          },
          [
            M(
              "div",
              {
                class: v(e.classes(e.n("image"), e.n(e.type))),
                style: H({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (p(), ke(Gt(e.type), {
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
        )) : x("v-if", !0)
      ]),
      z(e.$slots, "title", {}, () => [
        e.title ? (p(), w(
          "div",
          {
            key: 0,
            class: v(e.n("title"))
          },
          ae(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)
      ]),
      z(e.$slots, "description", {}, () => [
        e.description ? (p(), w(
          "div",
          {
            key: 0,
            class: v(e.n("description"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)
      ]),
      e.$slots.footer ? (p(), w(
        "div",
        {
          key: 0,
          class: v(e.n("footer"))
        },
        [
          z(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : x("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const iv = ee({
  name: ik,
  components: {
    Info: DS,
    Success: GS,
    Warning: YS,
    Error: zS,
    Question: _S,
    Empty: rk
  },
  props: ak,
  setup(e) {
    const n = N(() => {
      const { imageSize: o } = e;
      return `calc(${o ? Se(o) : "var(--result-image-size)"} * 0.9)`;
    }), t = N(() => {
      const { imageSize: o } = e;
      return `calc(${o ? Se(e.imageSize) : "var(--result-image-size)"} * 0.05)`;
    });
    return {
      circleSize: n,
      borderSize: t,
      toSizeUnit: Se,
      n: lk,
      classes: sk,
      toNumber: V,
      toPxNum: Fe
    };
  }
});
iv.render = uk;
var Rl = iv;
re(Rl);
const ZE = Rl;
var Xa = Rl;
const dk = {
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
  onClick: A()
}, { name: ck, n: fk, classes: vk } = ne("row");
function mk(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      style: H({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: `${-e.average[0]}px ${-e.average[1]}px`
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      z(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const lv = ee({
  name: ck,
  props: dk,
  setup(e) {
    const n = N(
      () => Ae(e.gutter) ? e.gutter.map((s) => Fe(s) / 2) : [0, Fe(e.gutter) / 2]
    ), { cols: t, bindCols: o, length: r } = u0(), a = { computePadding: i };
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
      n: fk,
      classes: vk,
      handleClick: l,
      padStartFlex: or
    };
  }
});
lv.render = mk;
var Ul = lv;
re(Ul);
const JE = Ul;
var Ka = Ul, hk = Object.defineProperty, ed = Object.getOwnPropertySymbols, pk = Object.prototype.hasOwnProperty, gk = Object.prototype.propertyIsEnumerable, nd = (e, n, t) => n in e ? hk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, bk = (e, n) => {
  for (var t in n || (n = {}))
    pk.call(n, t) && nd(e, t, n[t]);
  if (ed)
    for (var t of ed(n))
      gk.call(n, t) && nd(e, t, n[t]);
  return e;
};
const yk = bk({
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
  onFocus: A(),
  onBlur: A(),
  onClose: A(),
  onChange: A(),
  onClear: A(),
  "onUpdate:modelValue": A()
}, Te(hl, [
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
])), { name: $k, n: wk, classes: Ck } = ne("select"), Sk = { key: 1 };
function kk(e, n) {
  const t = le("var-chip"), o = le("var-icon"), r = le("var-field-decorator"), a = le("var-menu"), i = le("var-form-details");
  return p(), w(
    "div",
    {
      class: v(e.n()),
      onClick: n[3] || (n[3] = (...l) => e.handleFocus && e.handleFocus(...l))
    },
    [
      Z(a, {
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
        menu: he(() => [
          M(
            "div",
            {
              ref: "menuEl",
              class: v(e.classes(e.n("scroller"), e.n("$-elevation--3")))
            },
            [
              z(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ]),
        default: he(() => [
          Z(
            r,
            at(Po({
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
            er({
              "append-icon": he(() => [
                z(e.$slots, "append-icon")
              ]),
              default: he(() => [
                M(
                  "div",
                  {
                    class: v(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                    style: H({
                      textAlign: e.textAlign,
                      color: e.textColor
                    })
                  },
                  [
                    M(
                      "div",
                      {
                        class: v(e.n("label"))
                      },
                      [
                        e.isEmptyModelValue ? x("v-if", !0) : z(e.$slots, "selected", { key: 0 }, () => [
                          e.multiple ? (p(), w(
                            Ve,
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
                                    Ve,
                                    null,
                                    Ge(e.labels, (l) => (p(), ke(t, {
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
                                      default: he(() => [
                                        Ie(
                                          ae(l),
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
                                ae(e.labels.join(e.separator)),
                                3
                                /* TEXT, CLASS */
                              ))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (p(), w(
                            "span",
                            Sk,
                            ae(e.label),
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
                        style: H({
                          color: e.placeholderColor
                        })
                      },
                      ae(e.placeholder),
                      7
                      /* TEXT, CLASS, STYLE */
                    )) : x("v-if", !0),
                    z(e.$slots, "arrow-icon", { focus: e.showMenu }, () => [
                      Z(o, {
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
                fn: he(() => [
                  z(e.$slots, "prepend-icon")
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
      Z(i, {
        "error-message": e.errorMessage,
        onClick: n[2] || (n[2] = On(() => {
        }, ["stop"]))
      }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const sv = ee({
  name: $k,
  components: {
    VarIcon: He,
    VarMenu: yo,
    VarChip: sr,
    VarFieldDecorator: mo,
    VarFormDetails: hn
  },
  props: yk,
  setup(e) {
    const n = C(!1), t = C(!1), o = N(() => e.multiple), r = N(() => e.focusColor), a = C(""), i = C([]), l = N(() => Fn(e.modelValue)), s = N(() => e.disabled || e.readonly ? "" : "pointer"), u = C(0), { bindForm: d, form: c } = Dn(), { length: f, options: m, bindOptions: g } = mC(), {
      errorMessage: h,
      validateWithTrigger: b,
      validate: S,
      // expose
      resetValidation: T
    } = In(), O = C(null), $ = N(() => e.variant === "outlined" ? "bottom" : "cover-top"), k = N(() => {
      const { hint: q, blurColor: _, focusColor: I } = e;
      if (!q)
        return h.value ? "var(--field-decorator-error-color)" : n.value ? I || "var(--field-decorator-focus-color)" : _ || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), D = N(() => !e.hint && Fn(e.modelValue)), P = {
      multiple: o,
      focusColor: r,
      computeLabel: B,
      onSelect: G,
      reset: J,
      validate: de,
      resetValidation: T
    };
    fe(
      () => e.multiple,
      () => {
        const { multiple: q, modelValue: _ } = e;
        q && !Ae(_) && Tn("Select", "The modelValue must be an array when multiple is true");
      }
    ), fe(() => e.modelValue, Y, { deep: !0 }), fe(() => f.value, Y), g(P), y(d, P);
    function B() {
      const { multiple: q, modelValue: _ } = e;
      if (q) {
        const I = _;
        i.value = I.map(L);
      }
      !q && !Fn(_) && (a.value = L(_)), !q && Fn(_) && (a.value = "");
    }
    function E(q) {
      Ye(() => {
        const { validateTrigger: _, rules: I, modelValue: F } = e;
        b(_, q, I, F);
      });
    }
    function R({ value: q, label: _ }) {
      return q.value != null ? q.value : _.value;
    }
    function L(q) {
      var _;
      let I = m.find(({ value: F }) => F.value === q);
      return I || (I = m.find(({ label: F }) => F.value === q)), (_ = I == null ? void 0 : I.label.value) != null ? _ : "";
    }
    function U() {
      const { disabled: q, readonly: _, onFocus: I } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || q || _ || (u.value = Fe(e.offsetY), n.value = !0, y(I), E("onFocus"));
    }
    function oe() {
      const { disabled: q, readonly: _, onBlur: I } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || q || _ || (W(), y(I), E("onBlur"));
    }
    function G(q) {
      const { disabled: _, readonly: I, multiple: F, onChange: ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || _ || I)
        return;
      const Pe = F ? m.filter(({ selected: te }) => te.value).map(R) : R(q);
      y(e["onUpdate:modelValue"], Pe), y(ve, Pe), E("onChange"), F || W();
    }
    function j() {
      const { disabled: q, readonly: _, multiple: I, clearable: F, onClear: ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || q || _ || !F)
        return;
      const Pe = I ? [] : void 0;
      y(e["onUpdate:modelValue"], Pe), y(ve, Pe), E("onClear");
    }
    function X(q) {
      const { disabled: _, onClick: I } = e;
      c != null && c.disabled.value || _ || (y(I, q), E("onClick"));
    }
    function Q(q) {
      const { disabled: _, readonly: I, modelValue: F, onClose: ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || _ || I)
        return;
      const Pe = F, te = m.find(({ label: we }) => we.value === q), ue = Pe.filter((we) => {
        var Me;
        return we !== ((Me = te.value.value) != null ? Me : te.label.value);
      });
      y(e["onUpdate:modelValue"], ue), y(ve, ue), E("onClose");
    }
    function Y() {
      const { multiple: q, modelValue: _ } = e;
      if (q) {
        const I = _;
        m.forEach((F) => F.sync(I.includes(R(F))));
      } else
        m.forEach((I) => I.sync(_ === R(I)));
      B();
    }
    function se() {
      u.value = Fe(e.offsetY), n.value = !0, t.value = !0;
    }
    function W() {
      n.value = !1, t.value = !1;
    }
    function de() {
      return S(e.rules, e.modelValue);
    }
    function J() {
      y(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
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
      menuEl: O,
      placement: $,
      cursor: s,
      placeholderColor: k,
      enableCustomPlaceholder: D,
      n: wk,
      classes: Ck,
      handleFocus: U,
      handleBlur: oe,
      handleClear: j,
      handleClick: X,
      handleClose: Q,
      reset: J,
      validate: de,
      resetValidation: T,
      focus: se,
      blur: W
    };
  }
});
sv.render = kk;
var Hl = sv;
re(Hl);
const QE = Hl;
var Za = Hl;
const Pk = {
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
}, { name: Ok, n: Tk, classes: Ek } = ne("skeleton");
function Ik(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? x("v-if", !0) : (p(), w(
        "div",
        {
          key: 0,
          class: v(e.n("data"))
        },
        [
          z(e.$slots, "default")
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
              style: H({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              M(
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
          )) : x("v-if", !0),
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
                  style: H({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  M(
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
              )) : x("v-if", !0),
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
                      style: H({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      M(
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
                  )) : x("v-if", !0),
                  (p(!0), w(
                    Ve,
                    null,
                    Ge(e.toNumber(e.rows), (t, o) => (p(), w(
                      "div",
                      {
                        class: v(e.n("row")),
                        key: t,
                        style: H({ width: e.toSizeUnit(e.rowsWidth[o]) })
                      },
                      [
                        M(
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
              )) : x("v-if", !0)
            ],
            2
            /* CLASS */
          )) : x("v-if", !0)
        ],
        2
        /* CLASS */
      )) : x("v-if", !0),
      e.loading && e.fullscreen ? (p(), w(
        "div",
        {
          key: 2,
          class: v(e.n("fullscreen")),
          style: H({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          M(
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
      )) : x("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const uv = ee({
  name: Ok,
  props: Pk,
  setup: () => ({
    n: Tk,
    classes: Ek,
    toSizeUnit: Se,
    toNumber: V
  })
});
uv.render = Ik;
var Fl = uv;
re(Fl);
const _E = Fl;
var Ja = Fl, Xe = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(Xe || {});
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
  onChange: A(),
  onStart: A(),
  onEnd: A(),
  "onUpdate:modelValue": A()
}, { name: Bk, n: td, classes: Mk } = ne("slider"), Nk = ["onTouchstart"];
function Vk(e, n) {
  const t = le("var-hover-overlay"), o = le("var-form-details"), r = Ue("hover");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      M(
        "div",
        {
          class: v(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.click && e.click(...a))
        },
        [
          M(
            "div",
            {
              class: v(e.n(`${e.direction}-track`))
            },
            [
              M(
                "div",
                {
                  class: v(e.n(`${e.direction}-track-background`)),
                  style: H({
                    background: e.trackColor,
                    height: e.isVertical ? "100%" : e.multiplySizeUnit(e.trackHeight),
                    width: e.isVertical ? e.multiplySizeUnit(e.trackHeight) : "100%"
                  })
                },
                null,
                6
                /* CLASS, STYLE */
              ),
              M(
                "div",
                {
                  class: v(e.n(`${e.direction}-track-fill`)),
                  style: H(e.getFillStyle)
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
            Ve,
            null,
            Ge(e.thumbList, (a) => (p(), w("div", {
              class: v(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: H(e.thumbStyle(a)),
              onTouchstart: On((i) => e.start(i, a.enumValue), ["stop"])
            }, [
              z(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Ee(M(
                  "div",
                  {
                    class: v(e.n(`${e.direction}-thumb-block`)),
                    style: H({
                      background: e.thumbColor
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ), [
                  [r, (i) => e.hover(i, a), "desktop"]
                ]),
                M(
                  "div",
                  {
                    class: v(
                      e.classes(e.n(`${e.direction}-thumb-ripple`), [
                        e.thumbsProps[a.enumValue].active,
                        e.n(`${e.direction}-thumb-ripple--active`)
                      ])
                    ),
                    style: H({
                      background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0
                    })
                  },
                  [
                    Z(t, {
                      hovering: a.hovering
                    }, null, 8, ["hovering"])
                  ],
                  6
                  /* CLASS, STYLE */
                ),
                M(
                  "div",
                  {
                    class: v(
                      e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])
                    ),
                    style: H({
                      background: e.labelColor,
                      color: e.labelTextColor,
                      height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                      width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
                    })
                  },
                  [
                    M(
                      "span",
                      null,
                      ae(a.text),
                      1
                      /* TEXT */
                    )
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ])
            ], 46, Nk))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      Z(o, {
        "error-message": e.errorMessage,
        class: v(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const dv = ee({
  name: Bk,
  components: {
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  directives: { Hover: En },
  props: Dk,
  setup(e) {
    const n = C(0), t = C(null), o = C(!1), r = N(() => V(e.max) - V(e.min)), a = N(() => n.value / r.value * V(e.step)), i = N(() => e.disabled || (d == null ? void 0 : d.disabled.value)), l = N(() => e.readonly || (d == null ? void 0 : d.readonly.value)), s = N(() => e.direction === "vertical"), { bindForm: u, form: d } = Dn(), { errorMessage: c, validateWithTrigger: f, validate: m, resetValidation: g } = In(), { hovering: h, handleHovering: b } = Wn(), { hovering: S, handleHovering: T } = Wn(), O = N(() => {
      const { modelValue: te, range: ue } = e;
      let we = [];
      return ue && Ae(te) ? we = [
        {
          value: G(te[0]),
          enumValue: Xe.First,
          text: j(te[0]),
          hovering: eo(h),
          handleHovering: b
        },
        {
          value: G(te[1]),
          enumValue: Xe.Second,
          text: j(te[1]),
          hovering: eo(S),
          handleHovering: T
        }
      ] : vn(te) && (we = [
        {
          value: G(te),
          enumValue: Xe.First,
          text: j(te),
          hovering: eo(h),
          handleHovering: b
        }
      ]), we;
    }), $ = N(() => {
      const { activeColor: te, range: ue, modelValue: we } = e, Me = ue && Ae(we) ? G(Math.min(we[0], we[1])) : 0, ie = ue && Ae(we) ? G(Math.max(we[0], we[1])) - Me : G(we);
      return s.value ? {
        left: "0px",
        height: `${ie}%`,
        bottom: `${Me}%`,
        background: te
      } : {
        top: "0px",
        width: `${ie}%`,
        left: `${Me}%`,
        background: te
      };
    }), k = We({
      [Xe.First]: E(),
      [Xe.Second]: E()
    });
    let D;
    y(u, {
      reset: Pe,
      validate: B,
      resetValidation: g
    }), fe([() => e.modelValue, () => e.step], ([te, ue]) => {
      !I() || !F() || o.value || ve(te, V(ue));
    }), fe(n, () => ve()), an(() => {
      !I() || !F() || (n.value = t.value[s.value ? "offsetHeight" : "offsetWidth"]);
    }), gr(() => {
      W();
    });
    function B() {
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
    function R() {
      return Ye(() => f(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function L(te) {
      const ue = te.currentTarget;
      return ue ? s.value ? n.value - (te.clientY - en(ue).top) : te.clientX - Rm(ue) : 0;
    }
    function U(te) {
      return {
        [s.value ? "bottom" : "left"]: `${te.value}%`,
        zIndex: k[te.enumValue].active ? 1 : void 0
      };
    }
    function oe(te) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : k[te].active;
    }
    function G(te) {
      const { min: ue, max: we } = e;
      return te < V(ue) ? 0 : te > V(we) ? 100 : (te - V(ue)) / r.value * 100;
    }
    function j(te) {
      if (!vn(te))
        return 0;
      let ue = te;
      return ue < Number(e.min) && (ue = Number(e.min)), ue > Number(e.max) && (ue = Number(e.max)), parseInt(`${ue}`, 10) === ue ? ue : V(ue.toPrecision(5));
    }
    function X(te, ue) {
      i.value || ue.handleHovering(te);
    }
    function Q(te, ue) {
      let we = [];
      const { step: Me, range: ie, modelValue: ge, onChange: Ne, min: qe } = e, ce = V(Me), Ce = Math.round(te / a.value), ye = Ce * ce + V(qe), Be = k[ue].percentValue * ce + V(qe);
      if (k[ue].percentValue = Ce, ie && Ae(ge) && (we = ue === Xe.First ? [ye, ge[1]] : [ge[0], ye]), Be !== ye) {
        const De = ie ? we.map((Ze) => j(Ze)) : j(ye);
        y(Ne, De), y(e["onUpdate:modelValue"], De), R();
      }
    }
    function Y(te) {
      if (!e.range)
        return Xe.First;
      const ue = k[Xe.First].percentValue * a.value, we = k[Xe.Second].percentValue * a.value, Me = Math.abs(te - ue), ie = Math.abs(te - we);
      return Me <= ie ? Xe.First : Xe.Second;
    }
    function se() {
      document.addEventListener("touchmove", J, { passive: !1 }), document.addEventListener("touchend", q), document.addEventListener("touchcancel", q);
    }
    function W() {
      document.removeEventListener("touchmove", J), document.removeEventListener("touchend", q), document.removeEventListener("touchcancel", q);
    }
    function de(te, ue) {
      if (n.value || (n.value = t.value.offsetWidth), i.value || (k[ue].active = !0), D = ue, se(), i.value || l.value)
        return;
      y(e.onStart), o.value = !0;
      const { clientX: we, clientY: Me } = te.touches[0];
      k[ue].startPosition = s.value ? Me : we;
    }
    function J(te) {
      if (te.preventDefault(), i.value || l.value || !o.value)
        return;
      const { startPosition: ue, currentOffset: we } = k[D], { clientX: Me, clientY: ie } = te.touches[0];
      let ge = (s.value ? ue - ie : Me - ue) + we;
      ge <= 0 ? ge = 0 : ge >= n.value && (ge = n.value), Q(ge, D);
    }
    function q() {
      W();
      const { range: te, modelValue: ue, onEnd: we, step: Me, min: ie } = e;
      if (i.value || (k[D].active = !1), i.value || l.value)
        return;
      let ge = [];
      k[D].currentOffset = k[D].percentValue * a.value;
      const Ne = k[D].percentValue * V(Me) + V(ie);
      te && Ae(ue) && (ge = D === Xe.First ? [Ne, ue[1]] : [ue[0], Ne]), y(we, te ? ge : Ne), o.value = !1;
    }
    function _(te) {
      if (i.value || l.value || te.target.closest(`.${td("thumb")}`))
        return;
      const ue = L(te), we = Y(ue);
      D = we, Q(ue, we), q();
    }
    function I() {
      const te = V(e.step);
      return isNaN(te) ? (ys("Slider", 'type of prop "step" should be Number'), !1) : te < 0 ? (ys("Slider", '"step" should be > 0'), !1) : !0;
    }
    function F() {
      const { range: te, modelValue: ue } = e;
      return te && !Ae(ue) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !te && Ae(ue) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : te && Ae(ue) && ue.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function ve(te = e.modelValue, ue = V(e.step)) {
      const we = (Me) => {
        const { min: ie, max: ge } = e;
        return Me < V(ie) ? 0 : Me > V(ge) ? r.value / ue : (Me - V(ie)) / ue;
      };
      e.range && Ae(te) ? (k[Xe.First].percentValue = we(te[0]), k[Xe.First].currentOffset = k[Xe.First].percentValue * a.value, k[Xe.Second].percentValue = we(te[1]), k[Xe.Second].currentOffset = k[Xe.Second].percentValue * a.value) : vn(te) && (k[Xe.First].currentOffset = we(te) * a.value);
    }
    function Pe() {
      const te = e.range ? [0, 0] : 0;
      y(e["onUpdate:modelValue"], te), g();
    }
    return {
      Thumbs: Xe,
      sliderEl: t,
      getFillStyle: $,
      isDisabled: i,
      isVertical: s,
      errorMessage: c,
      thumbsProps: k,
      thumbList: O,
      n: td,
      classes: Mk,
      thumbStyle: U,
      hover: X,
      multiplySizeUnit: un,
      toNumber: V,
      showLabel: oe,
      start: de,
      move: J,
      end: q,
      click: _
    };
  }
});
dv.render = Vk;
var Yl = dv;
re(Yl);
const xE = Yl;
var Qa = Yl, Ak = Object.defineProperty, zk = Object.defineProperties, Lk = Object.getOwnPropertyDescriptors, od = Object.getOwnPropertySymbols, Rk = Object.prototype.hasOwnProperty, Uk = Object.prototype.propertyIsEnumerable, rd = (e, n, t) => n in e ? Ak(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Hk = (e, n) => {
  for (var t in n || (n = {}))
    Rk.call(n, t) && rd(e, t, n[t]);
  if (od)
    for (var t of od(n))
      Uk.call(n, t) && rd(e, t, n[t]);
  return e;
}, Fk = (e, n) => zk(e, Lk(n));
const cv = {
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
  loadingType: Te(tt, "type"),
  loadingSize: Te(tt, "size"),
  loadingRadius: Te(tt, "radius"),
  loadingColor: Fk(Hk({}, Te(tt, "color")), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  "onUpdate:show": A(),
  _update: String
}, { n: Yk, classes: jk } = ne("snackbar"), Wk = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function qk(e, n) {
  const t = le("var-icon"), o = le("var-loading");
  return Ee((p(), w(
    "div",
    {
      class: v(e.n()),
      style: H({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      M(
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
          style: H({ zIndex: e.zIndex })
        },
        [
          M(
            "div",
            {
              class: v([e.n("content"), e.contentClass])
            },
            [
              z(e.$slots, "default", {}, () => [
                Ie(
                  ae(e.content),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          M(
            "div",
            {
              class: v([e.n("icon")])
            },
            [
              e.iconName ? (p(), ke(t, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : x("v-if", !0),
              e.type === "loading" ? (p(), ke(o, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : x("v-if", !0),
              z(e.$slots, "icon")
            ],
            2
            /* CLASS */
          ),
          M(
            "div",
            {
              class: v(e.n("action"))
            },
            [
              z(e.$slots, "action")
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
const fv = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Ut,
    VarIcon: He
  },
  props: cv,
  setup(e) {
    const n = C(null), { zIndex: t } = Eo(() => e.show, 1);
    $r(
      () => e.show,
      () => e.lockScroll
    );
    const o = N(() => e.type === "loading" || e.forbidClick), r = N(() => e.type ? Wk[e.type] : ""), a = () => {
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
    ), an(() => {
      e.show && (y(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: hv,
      n: Yk,
      classes: jk,
      zIndex: t,
      iconName: r,
      isForbidClick: o
    };
  }
});
fv.render = qk;
var vv = fv;
const { name: Gk, n: Xk } = ne("snackbar");
function Kk(e, n) {
  const t = le("var-snackbar-core");
  return p(), ke(Xn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    Z(je, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: he(() => [
        Z(t, ze(e.$props, {
          class: e.n("transition")
        }), {
          icon: he(() => [
            z(e.$slots, "icon")
          ]),
          action: he(() => [
            z(e.$slots, "action")
          ]),
          default: he(() => [
            z(e.$slots, "default", {}, () => [
              Ie(
                ae(e.content),
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
const mv = ee({
  name: Gk,
  components: { VarSnackbarCore: vv },
  props: cv,
  setup() {
    const { disabled: e } = Zt();
    return {
      disabled: e,
      n: Xk
    };
  }
});
mv.render = Kk;
var Mr = mv, Zk = Object.defineProperty, ad = Object.getOwnPropertySymbols, Jk = Object.prototype.hasOwnProperty, Qk = Object.prototype.propertyIsEnumerable, id = (e, n, t) => n in e ? Zk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, $o = (e, n) => {
  for (var t in n || (n = {}))
    Jk.call(n, t) && id(e, t, n[t]);
  if (ad)
    for (var t of ad(n))
      Qk.call(n, t) && id(e, t, n[t]);
  return e;
};
const hv = ["loading", "success", "warning", "info", "error"];
let ld = 0, _a = !1, pv, wo = !1;
const gv = {
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
let Pn = We([]), jl = gv;
const _k = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Wr = (e) => () => Xt(e) ? e() : e, xk = {
  setup() {
    return () => {
      const e = Pn.map(({
        id: n,
        reactiveSnackOptions: t,
        _update: o
      }) => {
        const r = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = $o({
          position: wo ? "relative" : "absolute"
        }, aP(t.position)), {
          content: i,
          icon: l,
          action: s
        } = t, u = {
          default: Wr(i),
          icon: Wr(l),
          action: Wr(s)
        };
        return Z(vv, ze(t, {
          key: n,
          style: a,
          "data-id": n,
          _update: o,
          show: t.show,
          "onUpdate:show": (d) => t.show = d
        }), u);
      });
      return Z(Gv, ze(_k, {
        style: {
          zIndex: wn.zIndex
        },
        onAfterEnter: eP,
        onAfterLeave: nP
      }), {
        default: () => [e]
      });
    };
  }
}, Gn = function(e) {
  const n = oP(e), t = We($o($o({}, jl), n));
  t.show = !0, _a || (_a = !0, pv = Kt(xk).unmountInstance);
  const {
    length: o
  } = Pn, r = {
    id: ld++,
    reactiveSnackOptions: t
  };
  if (o === 0 || wo)
    tP(r);
  else {
    const a = `update-${ld}`;
    rP(t, a);
  }
  return {
    clear() {
      !wo && Pn.length ? Pn[0].reactiveSnackOptions.show = !1 : t.show = !1;
    }
  };
};
hv.forEach((e) => {
  Gn[e] = (n) => (ao(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Gn(n));
});
Gn.allowMultiple = function(e = !1) {
  e !== wo && (Pn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), wo = e);
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
  jl = gv;
};
function eP(e) {
  const n = e.getAttribute("data-id"), t = Pn.find((o) => o.id === V(n));
  t && y(t.reactiveSnackOptions.onOpened);
}
function nP(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), t = Pn.find((r) => r.id === V(n));
  t && (t.animationEnd = !0, y(t.reactiveSnackOptions.onClosed)), Pn.every((r) => r.animationEnd) && (y(pv), Pn = We([]), _a = !1);
}
function tP(e) {
  Pn.push(e);
}
function oP(e = {}) {
  return xe(e) ? {
    content: e
  } : e;
}
function rP(e, n) {
  const [t] = Pn;
  t.reactiveSnackOptions = $o($o({}, t.reactiveSnackOptions), e), t._update = n;
}
function aP(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Gn.Component = Mr;
re(Mr);
re(Mr, Gn);
const eI = Mr;
var xa = Gn;
const iP = {
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
function lP(e, n, t) {
  const { direction: o, justify: r, index: a, lastIndex: i } = t;
  let l = "0";
  return o === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${$n(e)} ${n} ${$n(e)} 0` : l = `${$n(e)} 0` : r === "space-around" ? l = `${$n(e)} ${$n(n)}` : r === "space-between" && (a === 0 ? l = `${$n(e)} ${$n(n)} ${$n(e)} 0` : a === i ? l = `${$n(e)} 0 ${$n(e)} ${$n(n)}` : l = `${$n(e)} ${$n(n)}`)), o === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const sP = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: uP,
  n: qr,
  classes: dP
} = ne("space");
function cP(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Ae(e) ? e.map(Se) : [Se(e), Se(e)];
}
var Wl = ee({
  name: uP,
  props: iP,
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
      const [d, c] = cP(s, sP(s));
      u = Sd(u);
      const f = u.length - 1, m = u.map((g, h) => {
        const b = lP(d, c, {
          direction: l,
          justify: r,
          index: h,
          lastIndex: f
        });
        return Z("div", {
          style: {
            margin: b
          }
        }, [g]);
      });
      return Z("div", {
        class: dP(qr(), qr("$--box"), [o, qr("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: or(r),
          alignItems: or(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${d} / 2) 0` : void 0
        }
      }, [m]);
    };
  }
});
re(Wl);
const nI = Wl;
var ei = Wl;
const fP = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Te(Ke, "name"),
  inactiveIcon: Te(Ke, "name"),
  activeIconNamespace: Te(Ke, "namespace"),
  currentIconNamespace: Te(Ke, "namespace"),
  inactiveIconNamespace: Te(Ke, "namespace")
}, bv = Symbol("STEPS_BIND_STEP_KEY");
function vP() {
  const { bindChildren: e, childProviders: n } = sn(bv);
  return {
    step: n,
    bindStep: e
  };
}
function mP() {
  const { parentProvider: e, index: n, bindParent: t } = ln(bv);
  return t || Tn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: t
  };
}
const { name: hP, n: pP, classes: gP } = ne("step"), bP = { key: 3 };
function yP(e, n) {
  const t = le("var-icon");
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      M(
        "div",
        {
          class: v(e.n(e.direction))
        },
        [
          M(
            "div",
            {
              class: v(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: H({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...o) => e.click && e.click(...o))
            },
            [
              e.isActive ? (p(), ke(t, {
                key: 0,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (p(), ke(t, {
                key: 1,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (p(), ke(t, {
                key: 2,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (p(), w(
                "span",
                bP,
                ae(e.index + 1),
                1
                /* TEXT */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          M(
            "div",
            {
              class: v(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...o) => e.click && e.click(...o))
            },
            [
              z(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          M(
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
const yv = ee({
  name: hP,
  components: { VarIcon: He },
  props: fP,
  setup() {
    const { index: e, steps: n, bindSteps: t } = mP(), { active: o, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = N(() => o.value === e.value), u = N(() => e.value !== -1 && V(o.value) > e.value);
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
      n: pP,
      classes: gP,
      click: c
    };
  }
});
yv.render = yP;
var ql = yv;
re(ql);
const tI = ql;
var ni = ql;
const $P = {
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
  onClickStep: A()
}, { name: wP, n: CP } = ne("steps");
function SP(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n()),
      style: H({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      z(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const $v = ee({
  name: wP,
  props: $P,
  setup(e) {
    const n = N(() => e.active), t = N(() => e.activeColor), o = N(() => e.inactiveColor), r = N(() => e.direction), { bindStep: a } = vP();
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
$v.render = SP;
var Gl = $v;
re(Gl);
const oI = Gl;
var ti = Gl;
const kP = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: PP, n: OP } = ne("style-provider"), TP = ee({
  name: PP,
  props: kP,
  setup(e, { slots: n }) {
    return () => hd(
      e.tag,
      {
        class: OP(),
        style: Ld(e.styleVars)
      },
      y(n.default)
    );
  }
});
var Nr = TP;
const Gr = [];
function Xl(e) {
  Gr.forEach((t) => document.documentElement.style.removeProperty(t)), Gr.length = 0;
  const n = Ld(e ?? {});
  Object.entries(n).forEach(([t, o]) => {
    document.documentElement.style.setProperty(t, o), Gr.push(t);
  });
}
Xl.Component = Nr;
re(Nr);
re(Nr, Xl);
const rI = Nr;
var oi = Xl;
const EP = {
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
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: IP, n: DP, classes: BP } = ne("switch"), MP = (e) => (ht(""), e = e(), pt(), e), NP = /* @__PURE__ */ MP(() => /* @__PURE__ */ M(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ M("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), VP = [
  NP
];
function AP(e, n) {
  const t = le("var-hover-overlay"), o = le("var-form-details"), r = Ue("ripple"), a = Ue("hover");
  return Ee((p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      M(
        "div",
        {
          class: v(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[0] || (n[0] = (...i) => e.switchActive && e.switchActive(...i)),
          style: H(e.styleComputed.switch)
        },
        [
          M(
            "div",
            {
              style: H(e.styleComputed.track),
              class: v(
                e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")])
              )
            },
            null,
            6
            /* CLASS, STYLE */
          ),
          Ee((p(), w(
            "div",
            {
              class: v(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
              style: H(e.styleComputed.ripple)
            },
            [
              M(
                "div",
                {
                  style: H(e.styleComputed.handle),
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
                      style: H({
                        width: e.radius,
                        height: e.radius
                      })
                    },
                    VP,
                    6
                    /* CLASS, STYLE */
                  )) : x("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              ),
              Z(t, { hovering: e.hovering }, null, 8, ["hovering"])
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
      Z(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  )), [
    [a, e.hover, "desktop"]
  ]);
}
const wv = ee({
  name: IP,
  components: {
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Je, Hover: En },
  props: EP,
  setup(e) {
    const { bindForm: n, form: t } = Dn(), { errorMessage: o, validateWithTrigger: r, validate: a, resetValidation: i } = In(), { hovering: l, handleHovering: s } = Wn(), u = N(() => {
      const { size: S, modelValue: T, color: O, closeColor: $, loadingColor: k, activeValue: D } = e;
      return {
        handle: {
          width: un(S),
          height: un(S),
          backgroundColor: T === D ? O : $,
          color: k
        },
        ripple: {
          left: T === D ? un(S, 0.5) : `-${un(S, 0.5)}`,
          color: T === D ? O : $ || "#999",
          width: un(S, 2),
          height: un(S, 2)
        },
        track: {
          height: un(S, 0.72),
          width: un(S, 1.9),
          borderRadius: un(S, 2 / 3),
          filter: T === D || o != null && o.value ? void 0 : "brightness(.6)",
          backgroundColor: T === D ? O : $
        },
        switch: {
          height: un(S, 1.2),
          width: un(S, 2)
        }
      };
    }), d = N(() => un(e.size, 0.8));
    y(n, {
      reset: b,
      validate: f,
      resetValidation: i
    });
    function f() {
      return a(e.rules, e.modelValue);
    }
    function m() {
      return Ye(() => r(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function g(S) {
      const {
        onClick: T,
        onChange: O,
        disabled: $,
        loading: k,
        readonly: D,
        modelValue: P,
        activeValue: B,
        inactiveValue: E,
        "onUpdate:modelValue": R
      } = e;
      if (y(T, S), $ || k || D || t != null && t.disabled.value || t != null && t.readonly.value)
        return;
      const L = P === B ? E : B;
      y(O, L), y(R, L), m();
    }
    function h(S) {
      e.disabled || t != null && t.disabled.value || s(S);
    }
    function b() {
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
      multiplySizeUnit: un,
      switchActive: g,
      hover: h
    };
  }
});
wv.render = AP;
var Kl = wv;
re(Kl);
const aI = Kl;
var ri = Kl;
const zP = {
  name: [String, Number],
  disabled: Boolean,
  onClick: A()
}, Cv = Symbol("TABS_BIND_TAB_KEY");
function LP() {
  const { childProviders: e, bindChildren: n, length: t } = sn(Cv);
  return {
    length: t,
    tabList: e,
    bindTabList: n
  };
}
function RP() {
  const { parentProvider: e, bindParent: n, index: t } = ln(Cv);
  return n || Tn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: t,
    tabs: e,
    bindTabs: n
  };
}
const { name: UP, n: qo, classes: HP } = ne("tab");
function FP(e, n) {
  const t = Ue("ripple");
  return Ee((p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: H({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      z(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: e.disabled }]
  ]);
}
const Sv = ee({
  name: UP,
  directives: { Ripple: Je },
  props: zP,
  setup(e) {
    const n = C(null), t = N(() => n.value), o = N(() => e.name), r = N(() => e.disabled), { index: a, tabs: i, bindTabs: l } = RP(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: m, resize: g } = i, h = {
      name: o,
      index: a,
      disabled: r,
      element: t
    };
    l(h), fe(() => [e.name, e.disabled], g);
    function b() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function S() {
      return e.disabled ? f.value : b() ? d.value : c.value;
    }
    function T() {
      return e.disabled ? qo("$-tab--disabled") : b() ? qo("$-tab--active") : qo("$-tab--inactive");
    }
    function O($) {
      const { disabled: k, name: D, onClick: P } = e;
      k || (y(P, D ?? a.value, $), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: m,
      n: qo,
      classes: HP,
      computeColorStyle: S,
      computeColorClass: T,
      handleClick: O
    };
  }
});
Sv.render = FP;
var Zl = Sv;
re(Zl);
const iI = Zl;
var ai = Zl;
const YP = {
  name: [String, Number]
}, { name: jP, n: WP, classes: qP } = ne("tab-item");
function GP(e, n) {
  const t = le("var-swipe-item");
  return p(), ke(t, {
    class: v(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: he(() => [
      z(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const kv = ee({
  name: jP,
  components: { VarSwipeItem: po },
  props: YP,
  setup(e) {
    const n = C(!1), t = N(() => e.name), { index: o, bindTabsItems: r } = qw(), { bindLists: a } = Gw(), i = {
      index: o,
      name: t,
      current: N(() => n.value),
      setCurrent: l
    };
    r(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: WP,
      classes: qP
    };
  }
});
kv.render = GP;
var Jl = kv;
re(Jl);
const lI = Jl;
var ii = Jl;
const XP = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, { name: KP, n: ZP, classes: JP } = ne("table");
function QP(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      M(
        "div",
        {
          class: v(e.n("main"))
        },
        [
          M(
            "table",
            {
              class: v(e.n("table")),
              style: H({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              z(e.$slots, "default")
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
          z(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : x("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Pv = ee({
  name: KP,
  props: XP,
  setup: () => ({
    toSizeUnit: Se,
    n: ZP,
    classes: JP,
    formatElevation: gn
  })
});
Pv.render = QP;
var Ql = Pv;
re(Ql);
const sI = Ql;
var li = Ql;
const _P = {
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
  stickyCssMode: Te(xo, "cssMode"),
  stickyZIndex: Te(xo, "zIndex"),
  offsetTop: Te(xo, "offsetTop"),
  onClick: A(),
  onChange: A(),
  "onUpdate:active": A()
};
var sd = (e, n, t) => new Promise((o, r) => {
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
const { name: xP, n: eO, classes: nO } = ne("tabs");
function tO(e, n) {
  return p(), ke(Gt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: he(() => [
      M(
        "div",
        ze({
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
          M(
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
              z(e.$slots, "default"),
              M(
                "div",
                {
                  class: v(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: H({
                    width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                    height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                    transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
                  })
                },
                [
                  M(
                    "div",
                    {
                      class: v(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
                      style: H({ background: e.indicatorColor || e.activeColor })
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
const Ov = ee({
  name: xP,
  components: { VarSticky: bo },
  inheritAttrs: !1,
  props: _P,
  setup(e) {
    const n = C("0px"), t = C("0px"), o = C("0px"), r = C("0px"), a = C(!1), i = C(null), l = N(() => e.active), s = N(() => e.activeColor), u = N(() => e.inactiveColor), d = N(() => e.disabledColor), c = N(() => e.itemDirection), f = C(null), m = N(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: h, length: b } = LP();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: E,
      onTabClick: T
    }), fe(
      () => b.value,
      () => sd(this, null, function* () {
        yield cn(), E();
      })
    ), fe(() => [e.active, e.scrollable], E), mt(E), Oo(E);
    function T(L) {
      var U;
      const oe = (U = L.name.value) != null ? U : L.index.value, { active: G, onChange: j, onClick: X } = e;
      y(e["onUpdate:active"], oe), y(X, oe), oe !== G && y(j, oe);
    }
    function O() {
      return g.find(({ name: L }) => e.active === L.value);
    }
    function $(L) {
      return g.find(({ index: U }) => (L ?? e.active) === U.value);
    }
    function k() {
      if (b.value === 0)
        return;
      const { active: L } = e;
      if (vn(L)) {
        const U = st(L, 0, b.value - 1);
        return y(e["onUpdate:active"], U), $(U);
      }
    }
    function D() {
      a.value = e.scrollable === "always" || g.length >= 5;
    }
    function P({ element: L }) {
      const U = L.value;
      U && (e.layoutDirection === "horizontal" ? (n.value = `${U.offsetWidth}px`, o.value = `${U.offsetLeft}px`) : (t.value = `${U.offsetHeight}px`, r.value = `${U.offsetTop}px`));
    }
    function B({ element: L }) {
      if (!a.value)
        return;
      const U = i.value, oe = L.value;
      if (e.layoutDirection === "horizontal") {
        const G = oe.offsetLeft + oe.offsetWidth / 2 - U.offsetWidth / 2;
        so(U, {
          left: G,
          animation: Qr
        });
      } else {
        const G = oe.offsetTop + oe.offsetHeight / 2 - U.offsetHeight / 2;
        so(U, {
          top: G,
          animation: Qr
        });
      }
    }
    function E() {
      const L = O() || $() || k();
      !L || L.disabled.value || (D(), P(L), B(L));
    }
    function R() {
      return sd(this, null, function* () {
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
      Transition: je,
      toSizeUnit: Se,
      n: eO,
      classes: nO,
      resize: E,
      resizeSticky: R,
      formatElevation: gn
    };
  }
});
Ov.render = tO;
var _l = Ov;
re(_l);
const uI = _l;
var si = _l;
const oO = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": A()
};
var rO = (e, n, t) => new Promise((o, r) => {
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
const { name: aO, n: iO } = ne("tabs-items");
function lO(e, n) {
  const t = le("var-swipe");
  return p(), ke(t, {
    class: v(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: he(() => [
      z(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const Tv = ee({
  name: aO,
  components: { VarSwipe: ho },
  props: oO,
  setup(e) {
    const n = C(null), { tabItemList: t, bindTabItem: o, length: r } = Ww();
    o({}), fe(() => e.active, s), fe(
      () => r.value,
      () => rO(this, null, function* () {
        yield cn(), s(e.active);
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
      m && (t.forEach(({ setCurrent: g }) => g(!1)), m.setCurrent(!0), (f = n.value) == null || f.to(m.index.value));
    }
    function u(c) {
      var f;
      const m = t.find(({ index: h }) => h.value === c), g = (f = m.name.value) != null ? f : m.index.value;
      y(e["onUpdate:active"], g);
    }
    function d() {
      return n.value;
    }
    return {
      swipe: n,
      n: iO,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Tv.render = lO;
var xl = Tv;
re(xl);
const dI = xl;
var ui = xl, sO = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, uO = {
  "--badge-default-color": "#555"
}, dO = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, cO = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, fO = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, vO = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, mO = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, hO = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, pO = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, gO = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, bO = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, yO = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, $O = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, wO = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, CO = {
  "--popup-content-background-color": "#1e1e1e"
}, SO = {
  "--pull-refresh-background": "#303030"
}, kO = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, PO = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, OO = {
  "--select-scroller-background": "#303030"
}, TO = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, EO = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, IO = {
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
}, MO = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, NO = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, VO = {
  "--tabs-background": "#1e1e1e"
}, AO = {
  "--app-bar-color": "#272727"
}, zO = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, LO = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, RO = {
  "--menu-background-color": "#272727"
}, UO = {
  "--breadcrumb-inactive-color": "#aaa"
}, HO = {
  "--paper-background": "#303030"
}, FO = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, YO = {
  "--link-default-color": "#fff"
}, jO = {
  "--progress-label-color": "#fff"
}, WO = {
  "--options-text-color": "#fff"
}, qO = {
  "--countdown-text-color": "#fff"
}, GO = {
  "--watermark-content-color": "#ffffff"
}, XO = Object.defineProperty, ud = Object.getOwnPropertySymbols, KO = Object.prototype.hasOwnProperty, ZO = Object.prototype.propertyIsEnumerable, dd = (e, n, t) => n in e ? XO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Oe = (e, n) => {
  for (var t in n || (n = {}))
    KO.call(n, t) && dd(e, t, n[t]);
  if (ud)
    for (var t of ud(n))
      ZO.call(n, t) && dd(e, t, n[t]);
  return e;
}, JO = Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe({
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
}, dO), fO), cO), MO), pO), TO), VO), DO), CO), gO), sO), mO), uO), NO), hO), SO), IO), EO), $O), BO), yO), OO), kO), vO), bO), wO), AO), zO), LO), RO), PO), UO), HO), FO), YO), jO), WO), qO), GO);
const QO = { dark: JO }, cI = null;
var di = QO;
const Sn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], dn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], cd = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], _O = {
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
  "onUpdate:modelValue": A(),
  onChange: A()
}, Ev = (e, n) => e === "24hr" || n === "am", es = (e, n, t) => {
  const o = Sn.findIndex((a) => V(a) === V(t)), r = Ev(e, n) ? t : dn[o];
  return {
    hourStr: r,
    hourNum: V(r)
  };
}, fn = (e) => {
  const [n, t, o] = e.split(":");
  return {
    hour: V(n),
    minute: V(t),
    second: V(o)
  };
}, Iv = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = es(r, a, i);
  let f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    const { hour: g, minute: h } = fn(l);
    f = g === c && o > h;
  }
  if (!l && s) {
    const { hour: g, minute: h } = fn(s);
    f = g === c && o < h;
  }
  if (l && s) {
    const { hour: g, minute: h } = fn(l), { hour: b, minute: S } = fn(s);
    f = b === c && o < S || g === c && o > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (t = e.allowedTime) == null ? void 0 : t.minutes(o)), f || m;
}, Dv = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = es(r, a, i);
  let m = !1, g = !1;
  if (d.includes(c))
    return !0;
  if (s && !u) {
    const { hour: h, minute: b, second: S } = fn(s);
    m = h === f && b < l || b === l && o > S;
  }
  if (!s && u) {
    const { hour: h, minute: b, second: S } = fn(u);
    m = h === f && b > l || b === l && o > S;
  }
  if (s && u) {
    const { hour: h, minute: b, second: S } = fn(s), { hour: T, minute: O, second: $ } = fn(u);
    m = h === f && b < l || T === f && O > l || h === f && b === l && o > S || T === f && O === l && o < $;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (t = e.allowedTime) == null ? void 0 : t.seconds(o)), m || g;
}, { n: xO, classes: eT } = ne("time-picker");
function nT(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n("clock"))
    },
    [
      M(
        "div",
        {
          class: v(e.n("clock-hand")),
          style: H(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (p(!0), w(
        Ve,
        null,
        Ge(e.timeScales, (t, o) => (p(), w(
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
            style: H(e.getStyle(o, t, !1))
          },
          ae(t),
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
            Ve,
            null,
            Ge(e.hours24, (t, o) => (p(), w(
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
                style: H(e.getStyle(o, t, !0))
              },
              ae(t),
              7
              /* TEXT, CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : x("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Bv = ee({
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
    const t = C(null), o = C([]), r = C([]), a = N(() => ({
      transform: `rotate(${V(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = N(() => {
      if (e.rad === void 0)
        return;
      const h = e.rad / 30;
      return h >= 0 ? h : h + 12;
    }), l = N(() => e.type === "hour" ? Sn : cd), s = (h, b) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const S = e.type === "minute" ? Iv : Dv, T = {
        time: V(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: V(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: o.value
      };
      return b && e.type === "minute" && Reflect.deleteProperty(T, "minute"), S(T);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const h = e.isInner ? dn[i.value] : l.value[i.value];
      return l.value === cd ? s() ? "#bdbdbd" : e.color : c(h) ? "#bdbdbd" : e.color;
    }, d = (h, b) => b ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (Ev(e.format, e.ampm))
          return o.value.includes(h);
        const b = Sn.findIndex((S) => S === h);
        return r.value.includes(b);
      }
      return s(h, !0);
    }, f = (h, b, S) => {
      const T = 2 * Math.PI / 12 * h - Math.PI / 2, O = 50 * (1 + Math.cos(T)), $ = 50 * (1 + Math.sin(T)), k = () => d(h, S) ? c(b) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: D, color: P } = k();
      return {
        left: `${O}%`,
        top: `${$}%`,
        backgroundColor: D,
        color: P
      };
    }, m = () => {
      const { width: h, height: b } = en(t.value);
      return {
        width: h,
        height: b
      };
    }, g = () => {
      if (i.value === void 0)
        return;
      const h = e.ampm === "am" ? Sn : dn;
      return Ct(h[i.value], 2, "0");
    };
    return fe([i, () => e.isInner], ([h, b], [S, T]) => {
      if (h === S && b === T || e.type !== "hour" || i.value === void 0)
        return;
      const $ = b ? dn[i.value] : g(), k = e.useSeconds ? `:${e.time.second}` : "", D = `${$}:${e.time.minute}${k}`;
      e.preventNextUpdate || n("update", D), n("change-prevent-update");
    }), fe(
      () => e.rad,
      (h, b) => {
        if (e.type === "hour" || h === void 0 || b === void 0)
          return;
        const S = h / 6 >= 0 ? h / 6 : h / 6 + 60, T = b / 6 >= 0 ? b / 6 : b / 6 + 60;
        if (S === T)
          return;
        let O;
        const { hourStr: $ } = es(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const k = me().minute(S).format("mm"), D = e.useSeconds ? `:${e.time.second}` : "";
          O = `${$}:${k}${D}`;
        }
        if (e.type === "second") {
          const k = me().second(S).format("ss"), D = e.useSeconds ? `:${k}` : "";
          O = `${$}:${e.time.minute}${D}`;
        }
        n("update", O);
      }
    ), fe(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([h, b, S]) => {
        if (o.value = [], h && !b) {
          const { hour: T } = fn(h), O = Sn.filter((k) => V(k) > T), $ = dn.filter((k) => V(k) > T);
          o.value = [...O, ...$];
        }
        if (!h && b) {
          const { hour: T } = fn(b), O = Sn.filter((k) => V(k) < T), $ = dn.filter((k) => V(k) < T);
          o.value = [...O, ...$];
        }
        if (h && b) {
          const { hour: T } = fn(h), { hour: O } = fn(b), $ = Sn.filter((D) => V(D) < O || V(D) > T), k = dn.filter((D) => V(D) < O || V(D) > T);
          o.value = [...$, ...k];
        }
        if (S != null && S.hours) {
          const { hours: T } = S, O = Sn.filter((k) => !T(V(k))), $ = dn.filter((k) => !T(V(k)));
          o.value = [.../* @__PURE__ */ new Set([...o.value, ...O, ...$])];
        }
        r.value = o.value.map((T) => dn.findIndex((O) => T === O)).filter((T) => T >= 0);
      },
      { immediate: !0 }
    ), {
      n: xO,
      classes: eT,
      hours24: dn,
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
Bv.render = nT;
var tT = Bv;
const { name: oT, n: rT, classes: aT } = ne("time-picker"), iT = (e) => (ht(""), e = e(), pt(), e), lT = /* @__PURE__ */ iT(() => /* @__PURE__ */ M(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), sT = { key: 0 };
function uT(e, n) {
  const t = le("clock");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      M(
        "div",
        {
          class: v(e.n("title")),
          style: H({ background: e.headerColor || e.color })
        },
        [
          M(
            "div",
            {
              class: v(e.n("title-time"))
            },
            [
              M(
                "div",
                {
                  class: v(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                  onClick: n[0] || (n[0] = (o) => e.checkPanel("hour"))
                },
                ae(e.time.hour),
                3
                /* TEXT, CLASS */
              ),
              lT,
              M(
                "div",
                {
                  class: v(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                  onClick: n[1] || (n[1] = (o) => e.checkPanel("minute"))
                },
                ae(e.time.minute),
                3
                /* TEXT, CLASS */
              ),
              e.useSeconds ? (p(), w("span", sT, ":")) : x("v-if", !0),
              e.useSeconds ? (p(), w(
                "div",
                {
                  key: 1,
                  class: v(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                  onClick: n[2] || (n[2] = (o) => e.checkPanel("second"))
                },
                ae(e.time.second),
                3
                /* TEXT, CLASS */
              )) : x("v-if", !0)
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
              M(
                "div",
                {
                  class: v(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                  onClick: n[3] || (n[3] = (o) => e.checkAmpm("am"))
                },
                "AM",
                2
                /* CLASS */
              ),
              M(
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
          )) : x("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      M(
        "div",
        {
          class: v(e.n("body"))
        },
        [
          M(
            "div",
            {
              class: v(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...o) => e.moveHand && e.moveHand(...o)),
              onTouchmove: n[6] || (n[6] = (...o) => e.moveHand && e.moveHand(...o)),
              onTouchend: n[7] || (n[7] = (...o) => e.end && e.end(...o)),
              ref: "container"
            },
            [
              Z(je, {
                name: `${e.n()}-panel-fade`
              }, {
                default: he(() => [
                  (p(), ke(t, {
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
const Mv = ee({
  name: oT,
  components: { Clock: tT },
  props: _O,
  setup(e) {
    const n = C(null), t = C(null), o = C(null), r = C(!1), a = C(!1), i = C(!1), l = C(!1), s = C(!1), u = C(!1), d = C(!1), c = C(0), f = C(0), m = C(), g = C("hour"), h = C("am"), b = C({
      hour: "00",
      minute: "00",
      second: "00"
    }), S = We({
      x: 0,
      y: 0
    }), T = We({
      x: [],
      y: []
    }), O = N(() => g.value === "hour" ? m.value : g.value === "minute" ? c.value : f.value);
    fe(
      () => e.modelValue,
      (W) => {
        if (W) {
          const { hour: de, minute: J, second: q } = fn(W), _ = me().hour(de).format("hh"), I = me().hour(de).format("HH"), F = me().minute(J).format("mm"), ve = me().second(q).format("ss");
          m.value = (_ === "12" ? 0 : V(_)) * 30, c.value = V(F) * 6, f.value = V(ve) * 6, b.value = R(W), e.format !== "24hr" && (h.value = Ct(`${de}`, 2, "0") === I && dn.includes(I) ? "pm" : "am"), r.value = e.format === "24hr" && dn.includes(I);
        }
      },
      { immediate: !0 }
    );
    function $(W) {
      y(e["onUpdate:modelValue"], W), y(e.onChange, W);
    }
    function k(W) {
      return W * 57.29577951308232;
    }
    function D(W) {
      l.value = !1, d.value = !1, g.value = W;
    }
    function P(W) {
      const { disableHour: de } = o.value, J = Sn.findIndex((I) => V(I) === V(b.value.hour)), q = W === "am" ? Sn : dn;
      return [...q.slice(J), ...q.slice(0, J)].find((I, F) => (a.value = F !== 0, !de.includes(I)));
    }
    function B(W) {
      if (e.readonly)
        return;
      h.value = W;
      const de = P(W);
      if (!de)
        return;
      const J = e.useSeconds ? `:${b.value.second}` : "", q = `${Ct(de, 2, "0")}:${b.value.minute}${J}`;
      $(q);
    }
    function E(W, de) {
      const J = W >= T.x[0] && W <= T.x[1], q = de >= T.y[0] && de <= T.y[1];
      return J && q;
    }
    function R(W) {
      const de = e.format === "24hr" ? "HH" : "hh", { hour: J, minute: q, second: _ } = fn(W);
      return {
        hour: me().hour(J).format(de),
        minute: me().minute(q).format("mm"),
        second: me().second(_).format("ss")
      };
    }
    function L(W) {
      const de = W / 30;
      return de >= 0 ? de : de + 12;
    }
    function U() {
      const { width: W, height: de } = o.value.getSize(), J = S.x - W / 2 - 8, q = S.x + W / 2 + 8, _ = S.y - de / 2 - 8, I = S.y + de / 2 + 8;
      return {
        rangeXMin: J,
        rangeXMax: q,
        rangeYMin: _,
        rangeYMax: I
      };
    }
    function oe(W, de, J) {
      const { disableHour: q } = o.value;
      i.value = E(W, de);
      const _ = Math.round(J / 30) * 30 + 90, I = L(_), F = r.value ? Sn[I] : dn[I];
      if (q.includes(F) || (r.value = e.format === "24hr" ? E(W, de) : !1), r.value !== i.value)
        return;
      const ve = r.value || h.value === "pm" ? dn[I] : Sn[I];
      u.value = q.includes(ve), !u.value && (m.value = _, l.value = !0);
    }
    function G(W) {
      const { disableHour: de } = o.value, J = Math.round(W / 6) * 6 + 90, _ = {
        time: J / 6 >= 0 ? J / 6 : J / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: b.value.hour,
        max: e.max,
        min: e.min,
        disableHour: de,
        allowedTime: e.allowedTime
      };
      d.value = Iv(_), !d.value && (c.value = J, s.value = !0);
    }
    function j(W) {
      const { disableHour: de } = o.value, J = Math.round(W / 6) * 6 + 90, _ = {
        time: J / 6 >= 0 ? J / 6 : J / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: b.value.hour,
        minute: V(b.value.minute),
        max: e.max,
        min: e.min,
        disableHour: de,
        allowedTime: e.allowedTime
      };
      Dv(_) || (f.value = J);
    }
    function X() {
      const { left: W, top: de, width: J, height: q } = en(n.value);
      if (S.x = W + J / 2, S.y = de + q / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: _, rangeXMax: I, rangeYMin: F, rangeYMax: ve } = U();
        T.x = [_, I], T.y = [F, ve];
      }
    }
    function Q(W) {
      if (W.preventDefault(), e.readonly)
        return;
      X();
      const { clientX: de, clientY: J } = W.touches[0], q = de - S.x, _ = J - S.y, I = Math.round(k(Math.atan2(_, q)));
      g.value === "hour" ? oe(de, J, I) : g.value === "minute" ? G(I) : j(I);
    }
    function Y() {
      if (!e.readonly) {
        if (g.value === "hour" && l.value) {
          g.value = "minute";
          return;
        }
        g.value === "minute" && e.useSeconds && s.value && (g.value = "second");
      }
    }
    function se() {
      a.value = !1;
    }
    return {
      getRad: O,
      time: b,
      container: n,
      inner: o,
      picker: t,
      isInner: r,
      type: g,
      ampm: h,
      isPreventNextUpdate: a,
      n: rT,
      classes: aT,
      moveHand: Q,
      checkPanel: D,
      checkAmpm: B,
      end: Y,
      update: $,
      changePreventUpdate: se,
      formatElevation: gn
    };
  }
});
Mv.render = uT;
var ns = Mv;
re(ns);
const fI = ns;
var ci = ns;
const dT = {
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
  resolveType: {
    type: String,
    default: "default"
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
  onBeforeFilter: A(),
  onBeforeRead: A(),
  onAfterRead: A(),
  onBeforeRemove: A(),
  onRemove: A(),
  onOversize: A(),
  "onUpdate:modelValue": A()
};
var Go = (e, n, t) => new Promise((o, r) => {
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
const { name: cT, n: fT, classes: vT } = ne("uploader");
let mT = 0;
const hT = ["onClick"], pT = ["onClick"], gT = ["src", "alt"], bT = ["multiple", "accept", "capture", "disabled"], yT = ["src"];
function $T(e, n) {
  const t = le("var-icon"), o = le("var-hover-overlay"), r = le("var-form-details"), a = le("var-popup"), i = Ue("ripple"), l = Ue("hover");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      M(
        "div",
        {
          class: v(e.n("file-list"))
        },
        [
          (p(!0), w(
            Ve,
            null,
            Ge(e.files, (s) => Ee((p(), w("div", {
              class: v(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              M(
                "div",
                {
                  class: v(e.n("file-name"))
                },
                ae(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (p(), w("div", {
                key: 0,
                class: v(e.n("file-close")),
                onClick: On((u) => e.handleRemove(s), ["stop"])
              }, [
                Z(t, {
                  class: v(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, pT)) : x("v-if", !0),
              s.cover ? (p(), w("img", {
                key: 1,
                class: v(e.n("file-cover")),
                style: H({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, gT)) : x("v-if", !0),
              M(
                "div",
                {
                  class: v(e.n("file-indicator"))
                },
                [
                  M(
                    "div",
                    {
                      class: v(
                        e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])
                      ),
                      style: H({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
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
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ee((p(), w(
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
              M("input", {
                ref: "input",
                type: "file",
                class: v(e.n("action-input")),
                multiple: e.multiple,
                accept: e.accept,
                capture: e.capture,
                disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
                onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s))
              }, null, 42, bT),
              z(e.$slots, "default", {}, () => [
                Z(t, {
                  class: v(e.n("action-icon")),
                  "var-uploader-cover": "",
                  name: "plus"
                }, null, 8, ["class"]),
                Z(o, {
                  hovering: e.hovering && !e.disabled && !e.formDisabled
                }, null, 8, ["hovering"])
              ])
            ],
            2
            /* CLASS */
          )), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : x("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      Z(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, er({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: he(() => [
            z(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      Z(a, {
        class: v(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (s) => e.showPreview = s),
        onClosed: n[3] || (n[3] = (s) => e.currentPreview = null)
      }, {
        default: he(() => {
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
            }, null, 10, yT)) : x("v-if", !0)
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
const Nv = ee({
  name: cT,
  directives: { Ripple: Je, Hover: En },
  components: {
    VarIcon: He,
    VarPopup: dt,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  props: dT,
  setup(e) {
    const n = C(null), t = C(!1), o = C(null), r = N(() => {
      const {
        maxlength: Q,
        modelValue: { length: Y }
      } = e;
      return vn(Q) ? `${Y} / ${Q}` : "";
    }), { form: a, bindForm: i } = Dn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = In(), { hovering: c, handleHovering: f } = Wn(), m = N(() => {
      const { modelValue: Q, hideList: Y } = e;
      return Y ? [] : Q;
    });
    let g = !1;
    const h = {
      getSuccess: E,
      getError: R,
      getLoading: L
    };
    y(i, {
      validate: j,
      resetValidation: d,
      reset: X
    }), fe(
      () => e.modelValue,
      () => {
        !g && G("onChange"), g = !1;
      },
      { deep: !0 }
    );
    function S(Q) {
      const { disabled: Y, previewed: se } = e;
      if (a != null && a.disabled.value || Y || !se)
        return;
      const { url: W } = Q;
      if (xe(W) && Is(W)) {
        go(W);
        return;
      }
      xe(W) && Ds(W) && (o.value = Q, t.value = !0);
    }
    function T(Q) {
      return {
        id: mT++,
        url: "",
        cover: "",
        name: Q.name,
        file: Q,
        progress: 0
      };
    }
    function O(Q) {
      const Y = Q.target, { files: se } = Y;
      return Array.from(se);
    }
    function $(Q) {
      return Go(this, null, function* () {
        if (e.resolveType === "data-url" || Q.file.type.startsWith("image") && e.resolveType === "default") {
          const Y = yield lm(Q.file);
          Q.cover = Y, Q.url = Y;
        }
        return Q;
      });
    }
    function k(Q) {
      return Q.map($);
    }
    function D(Q) {
      const { onBeforeRead: Y } = e;
      return Q.map(
        (se) => new Promise((W) => {
          Y || W({
            valid: !0,
            varFile: se
          });
          const de = Xo(y(Y, We(se)));
          Promise.all(de).then((J) => {
            W({
              valid: J.every(Boolean),
              varFile: se
            });
          });
        })
      );
    }
    function P(Q) {
      return Go(this, null, function* () {
        const { maxsize: Y, maxlength: se, modelValue: W, onOversize: de, onAfterRead: J, onBeforeFilter: q, readonly: _, disabled: I } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || I || _)
          return;
        const F = (ge) => ge.filter((Ne) => Ne.file.size > V(Y) ? (y(de, We(Ne)), !1) : !0), ve = (ge) => {
          const Ne = Math.min(ge.length, V(se) - W.length);
          return ge.slice(0, Ne);
        }, Pe = (ge) => Go(this, null, function* () {
          if (!q)
            return ge;
          const Ne = Xo(q);
          for (const qe of Ne)
            ge = yield qe(ge);
          return ge;
        });
        let ue = O(Q).map(T);
        ue = yield Pe(ue), ue = Y != null ? F(ue) : ue, ue = se != null ? ve(ue) : ue;
        const we = yield Promise.all(k(ue)), ie = (yield Promise.all(D(we))).filter(({ valid: ge }) => ge).map(({ varFile: ge }) => ge);
        y(e["onUpdate:modelValue"], [...W, ...ie]), Q.target.value = "", ie.forEach((ge) => y(J, We(ge)));
      });
    }
    function B(Q) {
      return Go(this, null, function* () {
        const { disabled: Y, readonly: se, modelValue: W, onBeforeRemove: de, onRemove: J } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || Y || se)
          return;
        if (de) {
          const _ = Xo(y(de, We(Q)));
          if ((yield Promise.all(_)).some((I) => !I))
            return;
        }
        const q = W.filter((_) => _ !== Q);
        y(J, We(Q)), G("onRemove"), y(e["onUpdate:modelValue"], q);
      });
    }
    function E() {
      return e.modelValue.filter((Q) => Q.state === "success");
    }
    function R() {
      return e.modelValue.filter((Q) => Q.state === "error");
    }
    function L() {
      return e.modelValue.filter((Q) => Q.state === "loading");
    }
    function U() {
      n.value.click();
    }
    function oe() {
      o.value = null, t.value = !1, go.close();
    }
    function G(Q) {
      Ye(() => {
        const { validateTrigger: Y, rules: se, modelValue: W } = e;
        s(Y, Q, se, W, h);
      });
    }
    function j() {
      return u(e.rules, e.modelValue, h);
    }
    function X() {
      g = !0, y(e["onUpdate:modelValue"], []), d();
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
      n: fT,
      classes: vT,
      formatElevation: gn,
      toNumber: V,
      handleHovering: f,
      isHTMLSupportVideo: Ds,
      isHTMLSupportImage: Is,
      preview: S,
      handleChange: P,
      handleRemove: B,
      getSuccess: E,
      getError: R,
      getLoading: L,
      validate: j,
      resetValidation: d,
      reset: X,
      chooseFile: U,
      closePreview: oe,
      toSizeUnit: Se
    };
  }
});
Nv.render = $T;
var ts = Nv;
re(ts);
const vI = ts;
var fi = ts;
const wT = {
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
var CT = Object.defineProperty, ST = Object.defineProperties, kT = Object.getOwnPropertyDescriptors, fd = Object.getOwnPropertySymbols, PT = Object.prototype.hasOwnProperty, OT = Object.prototype.propertyIsEnumerable, vd = (e, n, t) => n in e ? CT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, TT = (e, n) => {
  for (var t in n || (n = {}))
    PT.call(n, t) && vd(e, t, n[t]);
  if (fd)
    for (var t of fd(n))
      OT.call(n, t) && vd(e, t, n[t]);
  return e;
}, ET = (e, n) => ST(e, kT(n)), md = (e, n, t) => new Promise((o, r) => {
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
const { name: IT, n: DT, classes: BT } = ne("watermark"), MT = { ref: "svgRef" }, NT = ["viewBox", "width", "height"], VT = ["width", "height"], AT = ["href", "xlink:href", "x", "y", "width", "height"];
function zT(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      z(e.$slots, "default"),
      (p(), ke(Xn, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        M(
          "div",
          {
            ref: "containerRef",
            class: v(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: H({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            Ee(M(
              "div",
              MT,
              [
                (p(), w("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
                  width: `${e.width + e.gapX}`,
                  height: `${e.height + e.gapY}`,
                  style: H({
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
                    M(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: H({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        z(e.$slots, "content", {}, () => [
                          M(
                            "span",
                            {
                              style: H(ET(TT({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            ae(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, VT)) : x("v-if", !0),
                  !e.$slots.content && e.image ? (p(), w("image", {
                    key: 1,
                    href: e.imageUrl,
                    "xlink:href": e.imageUrl,
                    x: e.offsetX,
                    y: e.offsetY,
                    width: e.width,
                    height: e.height,
                    style: H({
                      transform: `rotate(${e.rotate}deg)`,
                      transformOrigin: "center"
                    })
                  }, null, 12, AT)) : x("v-if", !0)
                ], 12, NT))
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
const Vv = ee({
  name: IT,
  props: wT,
  setup(e, { slots: n }) {
    const t = C(""), o = C(""), r = C(""), a = C(null), i = C(null);
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
    ), Co(c), So(d);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return md(this, null, function* () {
        return new Promise((f) => {
          const m = document.createElement("canvas"), g = m.getContext("2d"), h = new Image();
          h.crossOrigin = "anonymous", h.referrerPolicy = "no-referrer", h.src = e.image, h.onload = () => {
            m.width = h.width, m.height = h.height, g.drawImage(h, 0, 0), f(m.toDataURL());
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
      return md(this, null, function* () {
        r.value = Pt(i.value).color, e.image && (o.value = yield s()), yield Ye(), d(), t.value = u(a.value.innerHTML);
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
Vv.render = zT;
var os = Vv;
re(os);
const mI = os;
var vi = os;
const LT = "2.16.7";
function RT(e) {
  Zr.install && e.use(Zr), Jr.install && e.use(Jr), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), ar.install && e.use(ar), ta.install && e.use(ta), oa.install && e.use(oa), ra.install && e.use(ra), aa.install && e.use(aa), mn.install && e.use(mn), ia.install && e.use(ia), la.install && e.use(la), ir.install && e.use(ir), lr.install && e.use(lr), sa.install && e.use(sa), sr.install && e.use(sr), ua.install && e.use(ua), da.install && e.use(da), ca.install && e.use(ca), wn.install && e.use(wn), ha.install && e.use(ha), wa.install && e.use(wa), Sa.install && e.use(Sa), ka.install && e.use(ka), Pa.install && e.use(Pa), mr.install && e.use(mr), Ea.install && e.use(Ea), Ia.install && e.use(Ia), mo.install && e.use(mo), Da.install && e.use(Da), hn.install && e.use(hn), En.install && e.use(En), zn.install && e.use(zn), He.install && e.use(He), Ba.install && e.use(Ba), go.install && e.use(go), Ma.install && e.use(Ma), Na.install && e.use(Na), pr.install && e.use(pr), uo.install && e.use(uo), Va.install && e.use(Va), Aa.install && e.use(Aa), Ut.install && e.use(Ut), za.install && e.use(za), Kr.install && e.use(Kr), yo.install && e.use(yo), La.install && e.use(La), Ra.install && e.use(Ra), Ua.install && e.use(Ua), Ha.install && e.use(Ha), Fa.install && e.use(Fa), dt.install && e.use(dt), Ya.install && e.use(Ya), ja.install && e.use(ja), Wa.install && e.use(Wa), qa.install && e.use(qa), Ga.install && e.use(Ga), Xa.install && e.use(Xa), Je.install && e.use(Je), Ka.install && e.use(Ka), Za.install && e.use(Za), Ja.install && e.use(Ja), Qa.install && e.use(Qa), xa.install && e.use(xa), ei.install && e.use(ei), ni.install && e.use(ni), ti.install && e.use(ti), bo.install && e.use(bo), oi.install && e.use(oi), ho.install && e.use(ho), po.install && e.use(po), ri.install && e.use(ri), ai.install && e.use(ai), ii.install && e.use(ii), li.install && e.use(li), si.install && e.use(si), ui.install && e.use(ui), di.install && e.use(di), ci.install && e.use(ci), hr.install && e.use(hr), fi.install && e.use(fi), vi.install && e.use(vi);
}
const hI = {
  version: LT,
  install: RT,
  ActionSheet: Zr,
  AppBar: Jr,
  Avatar: xr,
  AvatarGroup: ea,
  BackTop: na,
  Badge: ar,
  BottomNavigation: ta,
  BottomNavigationItem: oa,
  Breadcrumb: ra,
  Breadcrumbs: aa,
  Button: mn,
  ButtonGroup: ia,
  Card: la,
  Cell: ir,
  Checkbox: lr,
  CheckboxGroup: sa,
  Chip: sr,
  Col: ua,
  Collapse: da,
  CollapseItem: ca,
  Context: wn,
  Countdown: ha,
  Counter: wa,
  DatePicker: Sa,
  Dialog: ka,
  Divider: Pa,
  Drag: mr,
  Ellipsis: Ea,
  Fab: Ia,
  FieldDecorator: mo,
  Form: Da,
  FormDetails: hn,
  Hover: En,
  HoverOverlay: zn,
  Icon: He,
  Image: Ba,
  ImagePreview: go,
  IndexAnchor: Ma,
  IndexBar: Na,
  Input: pr,
  Lazy: uo,
  Link: Va,
  List: Aa,
  Loading: Ut,
  LoadingBar: za,
  Locale: Kr,
  Menu: yo,
  Option: La,
  Overlay: Ra,
  Pagination: Ua,
  Paper: Ha,
  Picker: Fa,
  Popup: dt,
  Progress: Ya,
  PullRefresh: ja,
  Radio: Wa,
  RadioGroup: qa,
  Rate: Ga,
  Result: Xa,
  Ripple: Je,
  Row: Ka,
  Select: Za,
  Skeleton: Ja,
  Slider: Qa,
  Snackbar: xa,
  Space: ei,
  Step: ni,
  Steps: ti,
  Sticky: bo,
  StyleProvider: oi,
  Swipe: ho,
  SwipeItem: po,
  Switch: ri,
  Tab: ai,
  TabItem: ii,
  Table: li,
  Tabs: si,
  TabsItems: ui,
  Themes: di,
  TimePicker: ci,
  Tooltip: hr,
  Uploader: fi,
  Watermark: vi
};
export {
  Zr as ActionSheet,
  Jr as AppBar,
  xr as Avatar,
  ea as AvatarGroup,
  na as BackTop,
  ar as Badge,
  ta as BottomNavigation,
  oa as BottomNavigationItem,
  ra as Breadcrumb,
  aa as Breadcrumbs,
  mn as Button,
  ia as ButtonGroup,
  la as Card,
  ir as Cell,
  lr as Checkbox,
  sa as CheckboxGroup,
  sr as Chip,
  ua as Col,
  da as Collapse,
  ca as CollapseItem,
  wn as Context,
  ha as Countdown,
  wa as Counter,
  Sa as DatePicker,
  ka as Dialog,
  Pa as Divider,
  mr as Drag,
  Ea as Ellipsis,
  Ia as Fab,
  mo as FieldDecorator,
  Da as Form,
  hn as FormDetails,
  En as Hover,
  zn as HoverOverlay,
  He as Icon,
  Ba as Image,
  go as ImagePreview,
  Ma as IndexAnchor,
  Na as IndexBar,
  pr as Input,
  uo as Lazy,
  Va as Link,
  Aa as List,
  Ut as Loading,
  za as LoadingBar,
  Kr as Locale,
  yo as Menu,
  La as Option,
  Ra as Overlay,
  _r as PIXEL,
  Ua as Pagination,
  Ha as Paper,
  Fa as Picker,
  dt as Popup,
  Ya as Progress,
  ja as PullRefresh,
  Wa as Radio,
  qa as RadioGroup,
  Ga as Rate,
  Xa as Result,
  Je as Ripple,
  Ka as Row,
  hv as SNACKBAR_TYPE,
  Za as Select,
  Ja as Skeleton,
  Qa as Slider,
  xa as Snackbar,
  ei as Space,
  ni as Step,
  ti as Steps,
  bo as Sticky,
  oi as StyleProvider,
  ho as Swipe,
  po as SwipeItem,
  ri as Switch,
  ai as Tab,
  ii as TabItem,
  li as Table,
  si as Tabs,
  ui as TabsItems,
  di as Themes,
  ci as TimePicker,
  hr as Tooltip,
  fi as Uploader,
  vi as Watermark,
  qT as _ActionSheetComponent,
  GT as _AppBarComponent,
  KT as _AvatarComponent,
  ZT as _AvatarGroupComponent,
  eE as _BackTopComponent,
  nE as _BadgeComponent,
  tE as _BottomNavigationComponent,
  oE as _BottomNavigationItemComponent,
  rE as _BreadcrumbComponent,
  aE as _BreadcrumbsComponent,
  xT as _ButtonComponent,
  iE as _ButtonGroupComponent,
  lE as _CardComponent,
  sE as _CellComponent,
  dE as _CheckboxComponent,
  cE as _CheckboxGroupComponent,
  fE as _ChipComponent,
  vE as _ColComponent,
  mE as _CollapseComponent,
  hE as _CollapseItemComponent,
  HT as _ContextComponent,
  pE as _CountdownComponent,
  gE as _CounterComponent,
  bE as _DatePickerComponent,
  yE as _DialogComponent,
  $E as _DividerComponent,
  wE as _DragComponent,
  SE as _EllipsisComponent,
  kE as _FabComponent,
  PE as _FieldDecoratorComponent,
  OE as _FormComponent,
  uE as _FormDetailsComponent,
  _T as _HoverComponent,
  QT as _HoverOverlayComponent,
  jT as _IconComponent,
  TE as _ImageComponent,
  DE as _ImagePreviewComponent,
  ME as _IndexAnchorComponent,
  NE as _IndexBarComponent,
  VE as _InputComponent,
  XT as _LazyComponent,
  AE as _LinkComponent,
  zE as _ListComponent,
  LE as _LoadingBarComponent,
  JT as _LoadingComponent,
  WT as _LocaleComponent,
  RE as _MenuComponent,
  UE as _OptionComponent,
  HE as _OverlayComponent,
  FE as _PaginationComponent,
  YE as _PaperComponent,
  jE as _PickerComponent,
  YT as _PopupComponent,
  WE as _ProgressComponent,
  qE as _PullRefreshComponent,
  GE as _RadioComponent,
  XE as _RadioGroupComponent,
  KE as _RateComponent,
  ZE as _ResultComponent,
  FT as _RippleComponent,
  JE as _RowComponent,
  QE as _SelectComponent,
  _E as _SkeletonComponent,
  xE as _SliderComponent,
  eI as _SnackbarComponent,
  nI as _SpaceComponent,
  tI as _StepComponent,
  oI as _StepsComponent,
  BE as _StickyComponent,
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
  nh as actionSheetProps,
  Si as add,
  hh as appBarProps,
  Xh as avatarGroupProps,
  Uh as avatarProps,
  Bp as backTopProps,
  zp as badgeProps,
  Qp as bottomNavigationItemProps,
  Fp as bottomNavigationProps,
  rg as breadcrumbProps,
  cg as breadcrumbsProps,
  Sp as buttonProps,
  $g as cardProps,
  Tg as cellProps,
  xg as checkboxGroupProps,
  Rg as checkboxProps,
  r0 as chipProps,
  s0 as colProps,
  $0 as collapseItemProps,
  h0 as collapseProps,
  P0 as countdownProps,
  Cb as counterProps,
  jb as datePickerProps,
  hI as default,
  Qe as defaultLazyOptions,
  yy as dialogProps,
  Ay as dividerProps,
  Hy as dragProps,
  Ud as enUS,
  hl as fieldDecoratorProps,
  Mg as formDetailsProps,
  k$ as formProps,
  Ke as iconProps,
  Gd as imageCache,
  Z$ as imagePreviewProps,
  E$ as imageProps,
  hw as indexAnchorProps,
  $w as indexBarProps,
  Dw as inputProps,
  RT as install,
  Rw as linkProps,
  jw as listProps,
  xw as loadingBarProps,
  tt as loadingProps,
  uC as menuProps,
  Yd as merge,
  pC as optionProps,
  wC as overlayProps,
  nn as pack,
  Fd as packs,
  SC as paginationProps,
  IC as paperProps,
  RC as pickerProps,
  To as popupProps,
  KC as progressProps,
  aS as pullRefreshProps,
  pS as radioGroupProps,
  uS as radioProps,
  wS as rateProps,
  ak as resultProps,
  dk as rowProps,
  yk as selectProps,
  Pk as skeletonProps,
  Dk as sliderProps,
  cv as snackbarProps,
  iP as spaceProps,
  fP as stepProps,
  $P as stepsProps,
  xo as stickyProps,
  kP as styleProviderProps,
  Cf as swipeProps,
  EP as switchProps,
  YP as tabItemProps,
  zP as tabProps,
  XP as tableProps,
  oO as tabsItemsProps,
  _P as tabsProps,
  _O as timePickerProps,
  o$ as tooltipProps,
  dT as uploaderProps,
  ki as use,
  Wn as useHoverOverlay,
  Ci as useLocale,
  LT as version,
  wi as zhCN
};
