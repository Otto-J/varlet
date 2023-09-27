import { reactive as We, onMounted as So, nextTick as Ye, onActivated as mt, isRef as Lv, watch as fe, onBeforeUnmount as pr, onDeactivated as Wt, onUnmounted as Co, inject as Rv, getCurrentInstance as qt, computed as N, ref as S, unref as eo, provide as Uv, isVNode as Hv, Comment as Fv, Fragment as Ve, createApp as Yv, h as hd, onBeforeMount as jv, defineComponent as ee, createVNode as Z, Teleport as Xn, Transition as je, withDirectives as Ie, vShow as Ln, mergeProps as ze, openBlock as p, createBlock as ke, resolveDynamicComponent as Gt, normalizeClass as v, normalizeStyle as H, resolveComponent as se, resolveDirective as Ue, withCtx as he, createElementVNode as D, renderSlot as z, toDisplayString as ie, createElementBlock as w, renderList as Ge, createCommentVNode as x, onUpdated as ko, createTextVNode as Ee, pushScopeId as ht, popScopeId as pt, withModifiers as On, normalizeProps as at, guardReactiveProps as Po, vModelText as Wv, createSlots as xo, withKeys as rs, TransitionGroup as qv } from "vue";
const pd = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, LT = We(pd);
var wn = We(pd), Gv = Object.defineProperty, Xv = Object.defineProperties, Kv = Object.getOwnPropertyDescriptors, as = Object.getOwnPropertySymbols, Zv = Object.prototype.hasOwnProperty, Jv = Object.prototype.propertyIsEnumerable, is = (e, n, t) => n in e ? Gv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Qv = (e, n) => {
  for (var t in n || (n = {}))
    Zv.call(n, t) && is(e, t, n[t]);
  if (as)
    for (var t of as(n))
      Jv.call(n, t) && is(e, t, n[t]);
  return e;
}, _v = (e, n) => Xv(e, Kv(n)), xe = (e) => typeof e == "string", mi = (e) => typeof e == "boolean", vn = (e) => typeof e == "number", ao = (e) => Object.prototype.toString.call(e) === "[object Object]", xv = (e) => typeof e == "object" && e !== null, Xt = (e) => typeof e == "function", Ae = (e) => Array.isArray(e), em = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Fn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, hi = (e) => e === window, nm = () => gt() && "ontouchstart" in window, V = (e) => e == null ? 0 : xe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : mi(e) ? Number(e) : e, er = (e, n) => {
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
}, gt = () => typeof window < "u", ls = (e) => [...new Set(e)], tm = (e) => gi(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), gi = (e) => e.replace(/-(\w)/g, (n, t) => t.toUpperCase()), gd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), om = (e, n, t = "start") => {
  let o = t === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && o >= 0 && o <= e.length - 1; ) {
    if (n(e[o], o, e))
      return [e[o], o];
    t === "start" ? o++ : o--;
  }
  return [null, -1];
}, Go = (e) => Ae(e) ? e : [e], st = (e, n, t) => Math.min(t, Math.max(n, e)), rm = (e, n) => st(e, 0, n.length - 1), bd = () => typeof globalThis < "u" ? globalThis : gt() ? window : typeof global < "u" ? global : self, io = (e) => {
  const n = bd();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, ss = (e) => {
  const n = bd();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, Xo = () => new Promise((e) => {
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
    return _v(Qv({}, o), {
      toJSON: () => o
    });
  }
  return e.getBoundingClientRect();
}, am = (e) => {
  const { top: n, bottom: t, left: o, right: r } = en(e), { width: a, height: i } = en(window), l = o <= a && r >= 0, s = n <= i && t >= 0;
  return l && s;
}, im = Object.defineProperty, nr = Object.getOwnPropertySymbols, yd = Object.prototype.hasOwnProperty, $d = Object.prototype.propertyIsEnumerable, us = (e, n, t) => n in e ? im(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, lm = (e, n) => {
  for (var t in n || (n = {}))
    yd.call(n, t) && us(e, t, n[t]);
  if (nr)
    for (var t of nr(n))
      $d.call(n, t) && us(e, t, n[t]);
  return e;
}, sm = (e, n) => {
  var t = {};
  for (var o in e)
    yd.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && nr)
    for (var o of nr(e))
      n.indexOf(o) < 0 && $d.call(e, o) && (t[o] = e[o]);
  return t;
};
function an(e) {
  let n = !1;
  So(() => {
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
  Lv(e) && (c = fe(
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
  }), pr(() => {
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
function gr(e) {
  Co(() => {
    e();
  }), Wt(() => {
    e();
  });
}
function um(e) {
  const n = qt();
  return e in n.provides;
}
function ln(e) {
  if (!um(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const t = Rv(e), { childInstances: o, collect: r, clear: a } = t, i = sm(t, ["childInstances", "collect", "clear"]), l = qt();
  return {
    index: N(() => o.indexOf(l)),
    parentProvider: i,
    bindParent: (d) => {
      So(() => {
        Ye().then(() => {
          r(l, d);
        });
      }), pr(() => {
        Ye().then(() => {
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
function sn(e) {
  const n = qt(), t = We([]), o = [], r = N(() => t.length), a = () => {
    const u = dm(n.subTree);
    t.sort((d, c) => u.indexOf(d.vnode) - u.indexOf(c.vnode));
  }, i = (u, d) => {
    t.push(u), o.push(d), a();
  }, l = (u, d) => {
    er(t, u), er(o, d);
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
function Oo(e) {
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
function br() {
  const e = S(0), n = S(0), t = S(0), o = S(0), r = S(0), a = S(0), i = S(0), l = S(0), s = S(0), u = S(0), d = S(), c = S(!1), f = S(!1), m = S(0), g = S(0);
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
      const { clientX: k, clientY: M } = $.touches[0];
      e.value = k, n.value = M, i.value = k, l.value = M, c.value = !0, m.value = performance.now(), f.value = !1, h && window.cancelAnimationFrame(h);
    },
    moveTouch: ($) => {
      const { clientX: k, clientY: M } = $.touches[0];
      f.value = !0, t.value = k - e.value, o.value = M - n.value, r.value = Math.abs(t.value), a.value = Math.abs(o.value), g.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = k - i.value, u.value = M - l.value, d.value || (d.value = fm(r.value, a.value)), i.value = k, l.value = M;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    }
  };
}
function Sd() {
  const e = S(), n = qt(), t = gd(n.type.name);
  return e.value = `${t}-${n.uid}`, e;
}
var vm = Object.defineProperty, ds = Object.getOwnPropertySymbols, mm = Object.prototype.hasOwnProperty, hm = Object.prototype.propertyIsEnumerable, cs = (e, n, t) => n in e ? vm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, fs = (e, n) => {
  for (var t in n || (n = {}))
    mm.call(n, t) && cs(e, t, n[t]);
  if (ds)
    for (var t of ds(n))
      hm.call(n, t) && cs(e, t, n[t]);
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
function pm(e) {
  const n = Yv(e), t = document.createElement("div");
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
  }, { unmount: r } = pm(o);
  return { unmountInstance: r };
}
function Cd(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.type !== Fv) {
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
function En() {
  const e = S(""), n = (r, a, i) => vs(this, null, function* () {
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
function gm(e) {
  ut(() => window, "hashchange", e), ut(() => window, "popstate", e);
}
function Zt() {
  const e = S(!1);
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
    name: tm(t),
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
var bm = Object.defineProperty, ym = Object.defineProperties, $m = Object.getOwnPropertyDescriptors, ms = Object.getOwnPropertySymbols, wm = Object.prototype.hasOwnProperty, Sm = Object.prototype.propertyIsEnumerable, hs = (e, n, t) => n in e ? bm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, kd = (e, n) => {
  for (var t in n || (n = {}))
    wm.call(n, t) && hs(e, t, n[t]);
  if (ms)
    for (var t of ms(n))
      Sm.call(n, t) && hs(e, t, n[t]);
  return e;
}, Cm = (e, n) => ym(e, $m(n));
const { n: Pd } = ne("ripple"), ps = 250;
function km(e) {
  const { zIndex: n, position: t } = Pt(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", t === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Pm(e, n) {
  const { top: t, left: o } = en(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = n.touches[0].clientX - o, u = n.touches[0].clientY - t, d = (r - i * 2) / 2, c = (a - i * 2) / 2, f = s - i, m = u - i;
  return { x: f, y: m, centerX: d, centerY: c, size: l };
}
function Od(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !wn.enableRipple)
    return;
  const t = () => {
    n.tasker = null;
    const { x: o, y: r, centerX: a, centerY: i, size: l } = Pm(this, e), s = document.createElement("div");
    s.classList.add(Pd()), s.style.opacity = "0", s.style.transform = `translate(${o}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), km(this), this.appendChild(s), window.setTimeout(() => {
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
  if (!nm() || !wn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
function Om(e, n) {
  var t;
  e._ripple = Cm(kd({
    tasker: null
  }, (t = n.value) != null ? t : {}), {
    removeRipple: Xr.bind(e)
  }), e.addEventListener("touchstart", Od, { passive: !0 }), e.addEventListener("touchmove", Td, { passive: !0 }), e.addEventListener("dragstart", Xr, { passive: !0 }), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 });
}
function Tm(e) {
  e.removeEventListener("touchstart", Od), e.removeEventListener("touchmove", Td), e.removeEventListener("dragstart", Xr), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Im(e, n) {
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
const Id = {
  mounted: Om,
  unmounted: Tm,
  updated: Im,
  install(e) {
    e.directive("ripple", this);
  }
}, RT = Id;
var Je = Id;
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
function Ed() {
  Object.keys(wn.locks).length <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function zo(e) {
  wn.locks[e] = 1, Ed();
}
function Lo(e) {
  delete wn.locks[e], Ed();
}
function yr(e, n) {
  const { uid: t } = qt();
  n && fe(n, (o) => {
    o === !1 ? Lo(t) : o === !0 && e() === !0 && zo(t);
  }), fe(e, (o) => {
    n && n() === !1 || (o === !0 ? zo(t) : Lo(t));
  }), jv(() => {
    n && n() === !1 || e() === !0 && zo(t);
  }), Co(() => {
    n && n() === !1 || e() === !0 && Lo(t);
  }), mt(() => {
    n && n() === !1 || e() === !0 && zo(t);
  }), Wt(() => {
    n && n() === !1 || e() === !0 && Lo(t);
  });
}
function Io(e, n) {
  const t = S(wn.zIndex);
  return fe(
    e,
    (o) => {
      o && (wn.zIndex += n, t.value = wn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: t };
}
const Md = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Em() {
  const { bindParent: e, parentProvider: n, index: t } = ln(Md);
  return {
    index: t,
    popup: n,
    bindPopup: e
  };
}
function Mm() {
  const { bindChildren: e, childProviders: n, length: t } = sn(Md);
  return {
    length: t,
    popupItems: n,
    bindPopupItems: e
  };
}
var Bm = Object.defineProperty, gs = Object.getOwnPropertySymbols, Dm = Object.prototype.hasOwnProperty, Nm = Object.prototype.propertyIsEnumerable, bs = (e, n, t) => n in e ? Bm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Vm = (e, n) => {
  for (var t in n || (n = {}))
    Dm.call(n, t) && bs(e, t, n[t]);
  if (gs)
    for (var t of gs(n))
      Nm.call(n, t) && bs(e, t, n[t]);
  return e;
};
const {
  name: Am,
  n: Dn,
  classes: Nr
} = ne("popup");
var bi = ee({
  name: Am,
  inheritAttrs: !1,
  props: To,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = cm(() => e.show, !0), {
      zIndex: r
    } = Io(() => e.show, 3), {
      disabled: a
    } = Zt(), {
      bindPopupItems: i
    } = Mm();
    yr(() => e.show, () => e.lockScroll), fe(() => e.show, (c) => {
      y(c ? e.onOpen : e.onClose);
    }), i({
      show: N(() => e.show)
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
      return Z("div", {
        class: Nr(Dn("overlay"), c),
        style: Vm({
          zIndex: r.value - 1
        }, f),
        onClick: l
      }, null);
    }
    function u() {
      return Ie(Z("div", ze({
        class: Nr(Dn("content"), Dn(`--${e.position}`), [e.defaultStyle, Dn("--content-background-color")], [e.defaultStyle, Dn("$-elevation--3")], [e.safeArea, Dn("--safe-area")], [e.safeAreaTop, Dn("--safe-area-top")]),
        style: {
          zIndex: r.value
        }
      }, t), [o.value && y(n.default)]), [[Ln, e.show]]);
    }
    function d() {
      return Z(je, {
        name: Dn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Ie(Z("div", {
          class: Nr(Dn("$--box"), Dn()),
          style: {
            zIndex: r.value - 2
          }
        }, [e.overlay && s(), Z(je, {
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
const UT = bi;
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
function zm(e) {
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
function Vr(e) {
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
  for (; !hi(t); )
    t = ct(t), n.push(t);
  return n;
}
function Bd(e, n) {
  if (xe(e)) {
    const t = document.querySelector(e);
    return t || Tn(n, "target element cannot found"), t;
  }
  if (xv(e))
    return e;
  Tn(n, 'type of prop "target" should be a selector or an element object');
}
function Rm() {
  const { width: e, height: n } = en(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const Dd = (e) => xe(e) && e.endsWith("rem"), Um = (e) => xe(e) && e.endsWith("em") && !e.endsWith("rem"), Hm = (e) => xe(e) && e.endsWith("px") || vn(e), Fm = (e) => xe(e) && e.endsWith("%"), Nd = (e) => xe(e) && e.endsWith("vw"), Vd = (e) => xe(e) && e.endsWith("vh"), Ad = (e) => xe(e) && e.endsWith("vmin"), zd = (e) => xe(e) && e.endsWith("vmax"), Ym = (e) => xe(e) && e.startsWith("calc("), jm = (e) => xe(e) && e.startsWith("var("), Fe = (e) => {
  if (vn(e))
    return e;
  if (Hm(e))
    return +e.replace("px", "");
  if (!gt())
    return 0;
  const { vw: n, vh: t, vMin: o, vMax: r } = Rm();
  if (Nd(e))
    return +e.replace("vw", "") * n / 100;
  if (Vd(e))
    return +e.replace("vh", "") * t / 100;
  if (Ad(e))
    return +e.replace("vmin", "") * o / 100;
  if (zd(e))
    return +e.replace("vmax", "") * r / 100;
  if (Dd(e)) {
    const a = +e.replace("rem", ""), i = Pt(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return xe(e) ? V(e) : 0;
}, Ce = (e) => {
  if (e != null)
    return Fm(e) || Nd(e) || Vd(e) || Um(e) || Dd(e) || Ym(e) || jm(e) || Ad(e) || zd(e) ? e : `${Fe(e)}px`;
}, un = (e, n = 1) => {
  if (e == null)
    return;
  const t = Ce(e), o = t.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
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
function tr(e) {
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
const { name: qm, n: Gm, classes: Xm } = ne("icon");
function Km(e, n) {
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
  name: qm,
  props: Ke,
  setup(e) {
    const n = S(""), t = S(!1);
    fe(() => e.name, o, { immediate: !0 });
    function o(r, a) {
      return Wm(this, null, function* () {
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
      n: Gm,
      classes: Xm,
      isURL: em,
      toNumber: V,
      toSizeUnit: Ce
    };
  }
});
Rd.render = Km;
var $i = Rd;
re($i);
const HT = $i;
var He = $i, Zm = Object.defineProperty, ws = Object.getOwnPropertySymbols, Jm = Object.prototype.hasOwnProperty, Qm = Object.prototype.propertyIsEnumerable, Ss = (e, n, t) => n in e ? Zm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, _m = (e, n) => {
  for (var t in n || (n = {}))
    Jm.call(n, t) && Ss(e, t, n[t]);
  if (ws)
    for (var t of ws(n))
      Qm.call(n, t) && Ss(e, t, n[t]);
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
}, eh = Object.defineProperty, Cs = Object.getOwnPropertySymbols, nh = Object.prototype.hasOwnProperty, th = Object.prototype.propertyIsEnumerable, ks = (e, n, t) => n in e ? eh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ps = (e, n) => {
  for (var t in n || (n = {}))
    nh.call(n, t) && ks(e, t, n[t]);
  if (Cs)
    for (var t of Cs(n))
      th.call(n, t) && ks(e, t, n[t]);
  return e;
};
function Si() {
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
      e[a] = Ps(Ps({}, e[a]), i), o(a);
    }
  };
}
const { packs: Hd, pack: nn, add: Ci, use: ki, merge: Fd } = Si();
Ci("zh-CN", wi);
ki("zh-CN");
const FT = { zhCN: wi, enUS: Ud, packs: Hd, pack: nn, add: Ci, use: ki, merge: Fd, useLocale: Si };
var Kr = {
  zhCN: wi,
  enUS: Ud,
  packs: Hd,
  pack: nn,
  add: Ci,
  use: ki,
  merge: Fd,
  useLocale: Si
};
const { name: oh, n: rh, classes: ah } = ne("action-sheet"), ih = ["onClick"];
function lh(e, n) {
  const t = se("var-icon"), o = se("var-popup"), r = Ue("ripple");
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
      D(
        "div",
        ze({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          z(e.$slots, "title", {}, () => {
            var a;
            return [
              D(
                "div",
                {
                  class: v(e.n("title"))
                },
                ie((a = e.title) != null ? a : e.pack.actionSheetTitle),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          z(e.$slots, "actions", {}, () => [
            (p(!0), w(
              Ve,
              null,
              Ge(e.actions, (a) => Ie((p(), w("div", {
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
                D(
                  "div",
                  {
                    class: v(e.n("action-name"))
                  },
                  ie(a.name),
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
const Yd = ee({
  name: oh,
  directives: { Ripple: Je },
  components: {
    VarPopup: dt,
    VarIcon: He
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
      pack: nn,
      n: rh,
      classes: ah,
      handlePopupUpdateShow: o,
      handleSelect: t
    };
  }
});
Yd.render = lh;
var Eo = Yd, sh = Object.defineProperty, Os = Object.getOwnPropertySymbols, uh = Object.prototype.hasOwnProperty, dh = Object.prototype.propertyIsEnumerable, Ts = (e, n, t) => n in e ? sh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Is = (e, n) => {
  for (var t in n || (n = {}))
    uh.call(n, t) && Ts(e, t, n[t]);
  if (Os)
    for (var t of Os(n))
      dh.call(n, t) && Ts(e, t, n[t]);
  return e;
};
let xn, Pi = {};
function ch(e = {}) {
  return Is(Is({}, Pi), e);
}
function Ot(e) {
  return gt() ? new Promise((n) => {
    Ot.close();
    const t = We(ch(e));
    t.teleport = "body", xn = t;
    const { unmountInstance: o } = Kt(Eo, t, {
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
Ot.Component = Eo;
re(Eo);
re(Eo, Ot);
const YT = Eo;
var Zr = Ot;
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
}, { name: vh, n: mh, classes: hh } = ne("app-bar");
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
      style: H(e.rootStyles)
    },
    [
      D(
        "div",
        {
          class: v(e.n("toolbar"))
        },
        [
          D(
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
                    Ee(
                      ie(e.title),
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
                Ee(
                  ie(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : x("v-if", !0),
          D(
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
                    Ee(
                      ie(e.title),
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
const jd = ee({
  name: vh,
  props: fh,
  setup(e, { slots: n }) {
    const t = S(), o = S(), r = N(() => {
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
      n: mh,
      classes: hh,
      formatElevation: gn
    };
  }
});
jd.render = ph;
var Oi = jd;
re(Oi);
const jT = Oi;
var Jr = Oi;
const Es = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ms = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), gh = (e) => {
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
}, Qr = (e) => e, Bs = (e) => e ** 3, Wd = (e) => e < 0.5 ? Bs(e * 2) / 2 : 1 - Bs((1 - e) * 2) / 2, St = (e = "", n, t = "") => {
  if (e.length >= n)
    return e;
  const o = n - e.length, r = Math.floor(o / t.length);
  return t.repeat(r) + t.slice(0, o % t.length) + e;
};
var bh = Object.defineProperty, Ds = Object.getOwnPropertySymbols, yh = Object.prototype.hasOwnProperty, $h = Object.prototype.propertyIsEnumerable, Ns = (e, n, t) => n in e ? bh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, wh = (e, n) => {
  for (var t in n || (n = {}))
    yh.call(n, t) && Ns(e, t, n[t]);
  if (Ds)
    for (var t of Ds(n))
      $h.call(n, t) && Ns(e, t, n[t]);
  return e;
}, $r = (e, n, t) => new Promise((o, r) => {
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
const Sh = "background-image", Ch = "lazy-loading", kh = "lazy-error", Vs = "lazy-attempt", Ph = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], _r = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Rt = [], or = [], qd = gh(100), Qe = {
  loading: _r,
  error: _r,
  attempt: 3,
  throttleWait: 300,
  events: Ph
};
let Ti = pi(Mo, Qe.throttleWait);
function wr(e, n) {
  e._lazy.arg === Sh ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Oh(e) {
  e._lazy.loading && wr(e, e._lazy.loading), Mo();
}
function Th(e) {
  e._lazy.error && wr(e, e._lazy.error), e._lazy.state = "error", Ei(e), Mo();
}
function Gd(e, n) {
  wr(e, n), e._lazy.state = "success", Ei(e), Mo();
}
function Ih(e) {
  var n;
  or.includes(e) || (or.push(e), (n = Qe.events) == null || n.forEach((t) => {
    e.addEventListener(t, Ti, { passive: !0 });
  }));
}
function Eh() {
  or.forEach((e) => {
    var n;
    (n = Qe.events) == null || n.forEach((t) => {
      e.removeEventListener(t, Ti);
    });
  }), or.length = 0;
}
function Mh(e, n) {
  var t, o;
  const r = {
    loading: (t = e.getAttribute(Ch)) != null ? t : Qe.loading,
    error: (o = e.getAttribute(kh)) != null ? o : Qe.error,
    attempt: e.getAttribute(Vs) ? Number(e.getAttribute(Vs)) : Qe.attempt
  };
  e._lazy = wh({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), wr(e, _r), y(Qe.filter, e._lazy);
}
function Bh(e, n) {
  const t = new Image();
  t.src = n, e._lazy.preloadImage = t, t.addEventListener("load", () => {
    e._lazy.attemptLock = !1, qd.add(n), Gd(e, n);
  }), t.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Th(e) : Xd(e);
  });
}
function Xd(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (qd.has(n)) {
    Gd(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Oh(e), Bh(e, n);
}
function Ii(e) {
  return $r(this, null, function* () {
    yield cn(), am(e) && Xd(e);
  });
}
function Mo() {
  Rt.forEach((e) => Ii(e));
}
function Dh(e) {
  return $r(this, null, function* () {
    !Rt.includes(e) && Rt.push(e), Lm(e).forEach(Ih), yield Ii(e);
  });
}
function Ei(e) {
  er(Rt, e), Rt.length === 0 && Eh();
}
function Nh(e, n) {
  const { src: t, arg: o } = e._lazy;
  return t !== n.value || o !== n.arg;
}
function Kd(e, n) {
  return $r(this, null, function* () {
    Mh(e, n), yield Dh(e);
  });
}
function Vh(e, n) {
  return $r(this, null, function* () {
    if (!Nh(e, n)) {
      Rt.includes(e) && (yield Ii(e));
      return;
    }
    yield Kd(e, n);
  });
}
function Ah(e = {}) {
  const { events: n, loading: t, error: o, attempt: r, throttleWait: a, filter: i } = e;
  Qe.events = n ?? Qe.events, Qe.loading = t ?? Qe.loading, Qe.error = o ?? Qe.error, Qe.attempt = r ?? Qe.attempt, Qe.throttleWait = a ?? Qe.throttleWait, Qe.filter = i;
}
const Zd = {
  mounted: Kd,
  unmounted: Ei,
  updated: Vh,
  install(e, n) {
    Ah(n), Ti = pi(Mo, Qe.throttleWait), e.directive("lazy", this);
  }
}, WT = Zd;
var uo = Zd;
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
  onClick: A(),
  onLoad: A(),
  onError: A()
}, Lh = (e) => ["mini", "small", "normal", "large"].includes(e), { name: Rh, n: Uh, classes: Hh } = ne("avatar"), Fh = ["src", "alt", "lazy-loading", "lazy-error"], Yh = ["src", "alt"];
function jh(e, n) {
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
          e.lazy ? Ie((p(), w("img", {
            key: 0,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: H({ objectFit: e.fit }),
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
            style: H({ objectFit: e.fit }),
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
const Jd = ee({
  name: Rh,
  directives: { Lazy: uo },
  props: zh,
  setup(e) {
    const n = S(null), t = S(null), o = S(1);
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
      n: Uh,
      classes: Hh,
      isInternalSize: Lh,
      toSizeUnit: Ce,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
Jd.render = jh;
var Mi = Jd;
re(Mi);
const qT = Mi;
var xr = Mi;
const Wh = {
  offset: [Number, String],
  vertical: Boolean
}, { name: qh, n: Gh, classes: Xh } = ne("avatar-group");
function Kh(e, n) {
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
const Qd = ee({
  name: qh,
  props: Wh,
  setup(e) {
    return {
      rootStyles: N(() => e.offset == null ? {} : {
        "--avatar-group-offset": Ce(e.offset)
      }),
      n: Gh,
      classes: Xh,
      toSizeUnit: Ce
    };
  }
});
Qd.render = Kh;
var Bi = Qd;
re(Bi);
const GT = Bi;
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
}, { name: Zh, n: Jh, classes: Qh } = ne("loading"), _h = (e) => (ht(""), e = e(), pt(), e), xh = /* @__PURE__ */ _h(() => /* @__PURE__ */ D(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ D("circle", {
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
              D(
                "span",
                {
                  class: v(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: H({
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
                Ee(
                  ie(e.description),
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
const _d = ee({
  name: Zh,
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
      n: Jh,
      classes: Qh,
      multiplySizeUnit: un
    };
  }
});
_d.render = np;
var Di = _d;
re(Di);
const XT = Di;
var Ut = Di;
const tp = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, { name: op, n: rp, classes: ap } = ne("hover-overlay");
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
const xd = ee({
  name: op,
  props: tp,
  setup: () => ({
    n: rp,
    classes: ap
  })
});
xd.render = ip;
var Ni = xd;
re(Ni);
function Wn() {
  const e = S(!1);
  return {
    hovering: e,
    handleHovering: (t) => {
      e.value = t;
    }
  };
}
const KT = Ni;
var zn = Ni;
function ec(e) {
  if (!e)
    return !1;
  const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function lp(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((t, o) => {
    const [r, a] = o.split(":").map((i) => i.trim());
    return t[gi(r)] = a, t;
  }, {}) : {};
}
function sp(e) {
  const { value: n } = e._hover, t = lp(e);
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
function up(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function nc(e) {
  up(e), Vi(e, e._hover.rawStyle);
}
function tc() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Xt(e)) {
    e(this._hover.hovering);
    return;
  }
  Vi(this, e);
}
function oc() {
  if (this._hover.hovering = !1, Xt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  nc(this);
}
function rc(e, n) {
  var t, o;
  const { arg: r, value: a } = n;
  ec(r) || (e._hover = {
    value: a,
    hovering: (o = (t = e._hover) == null ? void 0 : t.hovering) != null ? o : !1,
    rawStyle: {}
  }, sp(e), e.addEventListener("mouseenter", tc), e.addEventListener("mouseleave", oc));
}
function ac(e, n) {
  ec(n.arg) || (nc(e), e.removeEventListener("mouseenter", tc), e.removeEventListener("mouseleave", oc));
}
function dp(e, n) {
  e._hover && ac(e, n);
}
function cp(e, n) {
  return !Xt(n.value) && e._hover.hovering;
}
function fp(e, n) {
  rc(e, n), cp(e, n) && Vi(e, n.value);
}
const ic = {
  mounted: rc,
  unmounted: ac,
  beforeUpdate: dp,
  updated: fp,
  install(e) {
    e.directive("hover", this);
  }
}, ZT = ic;
var In = ic, vp = Object.defineProperty, mp = Object.defineProperties, hp = Object.getOwnPropertyDescriptors, As = Object.getOwnPropertySymbols, pp = Object.prototype.hasOwnProperty, gp = Object.prototype.propertyIsEnumerable, zs = (e, n, t) => n in e ? vp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, bp = (e, n) => {
  for (var t in n || (n = {}))
    pp.call(n, t) && zs(e, t, n[t]);
  if (As)
    for (var t of As(n))
      gp.call(n, t) && zs(e, t, n[t]);
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
  loadingType: Te(tt, "type"),
  loadingSize: Te(tt, "size"),
  loadingColor: yp(bp({}, Te(tt, "color")), {
    default: "currentColor"
  }),
  onClick: A(),
  onTouchstart: A()
}, lc = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function wp() {
  const { bindChildren: e, childProviders: n, length: t } = sn(lc);
  return {
    length: t,
    buttons: n,
    bindButtons: e
  };
}
function Sp() {
  const { bindParent: e, parentProvider: n, index: t } = ln(lc);
  return {
    index: t,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: Cp, n: kp, classes: Pp } = ne("button"), Op = ["type", "disabled"];
function Tp(e, n) {
  const t = se("var-loading"), o = se("var-hover-overlay"), r = Ue("ripple"), a = Ue("hover");
  return Ie((p(), w("button", {
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
    D(
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
  ], 46, Op)), [
    [r, { disabled: e.disabled || !e.ripple }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const sc = ee({
  name: Cp,
  components: {
    VarLoading: Ut,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Je, Hover: In },
  props: $p,
  setup(e) {
    const n = S(!1), { buttonGroup: t } = Sp(), { hovering: o, handleHovering: r } = Wn(), a = N(() => {
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
      n: kp,
      classes: Pp,
      handleHovering: r,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
sc.render = Tp;
var Ai = sc;
re(Ai);
const JT = Ai;
var mn = Ai;
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
  onClick: A()
}, { name: Ep, n: Mp, classes: Bp } = ne("back-top");
function Dp(e, n) {
  const t = se("var-icon"), o = se("var-button");
  return p(), ke(Xn, {
    to: "body",
    disabled: e.disabled
  }, [
    D(
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
const uc = ee({
  name: Ep,
  components: {
    VarButton: mn,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: Ip,
  setup(e) {
    const n = S(!1), t = S(null), o = S(!0);
    let r;
    const a = pi(() => {
      n.value = lo(r) >= Fe(e.visibilityHeight);
    }, 200);
    So(() => {
      l(), s(), o.value = !1;
    }), mt(s), gr(u);
    function i(d) {
      y(e.onClick, d);
      const c = yi(r);
      so(r, {
        left: c,
        duration: e.duration,
        animation: Wd
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
      toSizeUnit: Ce,
      n: Mp,
      classes: Bp,
      handleClick: i
    };
  }
});
uc.render = Dp;
var zi = uc;
re(zi);
const QT = zi;
var na = zi;
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
  icon: Te(Ke, "name"),
  namespace: Te(Ke, "namespace"),
  color: String
}, { name: Vp, n: Ap, classes: zp } = ne("badge");
function Lp(e, n) {
  const t = se("var-icon");
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
          Ie(D(
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
                  ie(e.value),
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
const dc = ee({
  name: Vp,
  components: { VarIcon: He },
  inheritAttrs: !1,
  props: Np,
  setup(e) {
    return {
      value: N(() => {
        const { value: t, maxValue: o } = e;
        return t != null && o != null && V(t) > V(o) ? `${o}+` : t;
      }),
      n: Ap,
      classes: zp
    };
  }
});
dc.render = Lp;
var Li = dc;
re(Li);
const _T = Li;
var rr = Li;
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
  onChange: A(),
  onBeforeChange: A(),
  onFabClick: A(),
  "onUpdate:active": A()
}, cc = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function Up() {
  const { childProviders: e, length: n, bindChildren: t } = sn(
    cc
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: t
  };
}
var Hp = Object.defineProperty, Ls = Object.getOwnPropertySymbols, Fp = Object.prototype.hasOwnProperty, Yp = Object.prototype.propertyIsEnumerable, Rs = (e, n, t) => n in e ? Hp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Us = (e, n) => {
  for (var t in n || (n = {}))
    Fp.call(n, t) && Rs(e, t, n[t]);
  if (Ls)
    for (var t of Ls(n))
      Yp.call(n, t) && Rs(e, t, n[t]);
  return e;
};
const { name: jp, n: Wp, classes: qp } = ne("bottom-navigation"), { n: Sr } = ne("bottom-navigation-item"), Hs = Sr("--right-half-space"), Fs = Sr("--left-half-space"), Ys = Sr("--right-space"), Gp = {
  type: "primary"
};
function Xp(e, n) {
  const t = se("var-button");
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
const fc = ee({
  name: jp,
  components: { VarButton: mn },
  props: Rp,
  setup(e, { slots: n }) {
    const t = S(null), o = N(() => e.active), r = N(() => e.activeColor), a = N(() => e.inactiveColor), i = S({}), { length: l, bottomNavigationItems: s, bindBottomNavigationItem: u } = Up();
    u({
      active: o,
      activeColor: r,
      inactiveColor: a,
      onToggle: h
    }), fe(() => l.value, c), fe(
      () => e.fabProps,
      (P) => {
        i.value = Us(Us({}, Gp), P);
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
      o.value !== P && (e.onBeforeChange ? b(P) : C(P));
    }
    function b(P) {
      const B = Go(y(e.onBeforeChange, P));
      Promise.all(B).then((I) => {
        I.every(Boolean) && C(P);
      });
    }
    function C(P) {
      y(e["onUpdate:active"], P), y(e.onChange, P);
    }
    function T() {
      k().forEach((B) => {
        B.classList.remove(Hs, Fs, Ys);
      });
    }
    function O(P) {
      const B = k(), I = B.length, R = P % 2 === 0;
      B.forEach((L, U) => {
        $(R, L, U, I);
      });
    }
    function $(P, B, I, R) {
      const L = I === R - 1;
      if (!P && L) {
        B.classList.add(Ys);
        return;
      }
      const U = I === R / 2 - 1, oe = I === R / 2;
      U ? B.classList.add(Hs) : oe && B.classList.add(Fs);
    }
    function k() {
      return Array.from(t.value.querySelectorAll(`.${Sr()}`));
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
fc.render = Xp;
var Ri = fc;
re(Ri);
const xT = Ri;
var ta = Ri;
const Kp = {
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
function Zp() {
  const { parentProvider: e, index: n, bindParent: t } = ln(
    cc
  );
  return t || Tn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: t
  };
}
const { name: Jp, n: Qp, classes: _p } = ne("bottom-navigation-item"), xp = {
  type: "danger",
  dot: !0
};
function eg(e, n) {
  const t = se("var-icon"), o = se("var-badge"), r = Ue("ripple");
  return Ie((p(), w(
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
      D(
        "span",
        {
          class: v(e.n("label"))
        },
        [
          e.$slots.default ? x("v-if", !0) : (p(), w(
            Ve,
            { key: 0 },
            [
              Ee(
                ie(e.label),
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
const vc = ee({
  name: Jp,
  components: {
    VarBadge: rr,
    VarIcon: He
  },
  directives: { Ripple: Je },
  props: Kp,
  setup(e) {
    const n = N(() => e.name), t = N(() => e.badge), o = S({}), { index: r, bottomNavigation: a, bindBottomNavigation: i } = Zp(), { active: l, activeColor: s, inactiveColor: u } = a;
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
      const g = (m = n.value) != null ? m : r.value;
      y(e.onClick, g), y(a.onToggle, g);
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
vc.render = eg;
var Ui = vc;
re(Ui);
const eI = Ui;
var oa = Ui;
const ng = {
  separator: String,
  onClick: A()
}, mc = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function tg() {
  const { childProviders: e, bindChildren: n, length: t } = sn(
    mc
  );
  return {
    length: t,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function og() {
  const { parentProvider: e, bindParent: n, index: t } = ln(
    mc
  );
  return n || Tn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: t,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: rg, n: ag, classes: ig } = ne("breadcrumb");
function lg(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      D(
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
          D(
            "div",
            {
              class: v(e.n("separator"))
            },
            ie((t = e.separator) != null ? t : e.parentSeparator),
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
const hc = ee({
  name: rg,
  props: ng,
  setup(e) {
    const { index: n, breadcrumb: t, bindBreadcrumb: o } = og(), r = N(() => n.value === t.length.value - 1), a = N(() => t.separator.value);
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
hc.render = lg;
var Hi = hc;
re(Hi);
const nI = Hi;
var ra = Hi;
const sg = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: ug, n: dg } = ne("breadcrumbs");
function cg(e, n) {
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
const pc = ee({
  name: ug,
  props: sg,
  setup(e) {
    const n = N(() => e.separator), { bindBreadcrumbList: t, length: o } = tg();
    return t({
      length: o,
      separator: n
    }), { n: dg };
  }
});
pc.render = cg;
var Fi = pc;
re(Fi);
const tI = Fi;
var aa = Fi;
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
}, { name: vg, n: mg, classes: hg } = ne("button-group");
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
      z(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const gc = ee({
  name: vg,
  props: fg,
  setup(e) {
    const { bindButtons: n } = wp(), t = {
      elevation: N(() => e.elevation),
      type: N(() => e.type),
      size: N(() => e.size),
      color: N(() => e.color),
      textColor: N(() => e.textColor),
      mode: N(() => e.mode)
    };
    return n(t), {
      n: mg,
      classes: hg,
      formatElevation: gn
    };
  }
});
gc.render = pg;
var Yi = gc;
re(Yi);
const oI = Yi;
var ia = Yi;
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
const { name: bg, n: yg, classes: $g } = ne("card"), wg = 500, Sg = ["src", "alt"];
function Cg(e, n) {
  const t = se("var-icon"), o = se("var-button"), r = Ue("ripple");
  return Ie((p(), w(
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
      D(
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
            }, null, 14, Sg)) : x("v-if", !0)
          ]),
          D(
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
                  ie(e.title),
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
                  ie(e.subtitle),
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
                  ie(e.description),
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
      D(
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
const bc = ee({
  name: bg,
  directives: { Ripple: Je },
  components: {
    VarIcon: He,
    VarButton: mn
  },
  props: gg,
  setup(e) {
    const n = S(null), t = S(null), o = S("auto"), r = S("auto"), a = S("100%"), i = S("100%"), l = S("auto"), s = S("auto"), u = S(void 0), d = S("hidden"), c = S("0px"), f = S("0"), m = N(() => e.layout === "row"), g = S(!1), h = S(!1), { zIndex: b } = Io(() => e.floating, 1);
    let C = "auto", T = "auto", O = null;
    const $ = S(null);
    yr(
      () => e.floating,
      () => !m.value
    ), fe(
      () => e.floating,
      (I) => {
        m.value || Ye(() => {
          I ? k() : M();
        });
      },
      { immediate: !0 }
    );
    function k() {
      return js(this, null, function* () {
        clearTimeout($.value), clearTimeout(O), $.value = null, $.value = setTimeout(
          () => js(this, null, function* () {
            const { width: I, height: R, left: L, top: U } = en(n.value);
            o.value = Ce(I), r.value = Ce(R), a.value = o.value, i.value = r.value, l.value = Ce(U), s.value = Ce(L), u.value = "fixed", C = l.value, T = s.value, g.value = !0, yield cn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", h.value = !0;
          }),
          e.ripple ? wg : 0
        );
      });
    }
    function M() {
      clearTimeout(O), clearTimeout($.value), $.value = null, a.value = o.value, i.value = r.value, l.value = C, s.value = T, c.value = "0px", f.value = "0", g.value = !1, O = setTimeout(() => {
        o.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", C = "auto", T = "auto", d.value = "hidden", u.value = void 0, h.value = !1;
      }, e.floatingDuration);
    }
    function P() {
      y(e["onUpdate:floating"], !1);
    }
    function B(I) {
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
      zIndex: b,
      isRow: m,
      showFloatingButtons: g,
      floated: h,
      n: yg,
      classes: $g,
      toSizeUnit: Ce,
      close: P,
      formatElevation: gn,
      handleClick: B
    };
  }
});
bc.render = Cg;
var ji = bc;
re(ji);
const rI = ji;
var la = ji;
const kg = {
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
}, { name: Pg, n: Og, classes: Tg } = ne("cell");
function Ig(e, n) {
  const t = se("var-icon"), o = Ue("ripple");
  return Ie((p(), w(
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
      D(
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
              ie(e.title),
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
              ie(e.description),
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
const yc = ee({
  name: Pg,
  components: { VarIcon: He },
  directives: { Ripple: Je },
  props: kg,
  setup(e) {
    const n = N(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Ce(e.borderOffset),
      "--cell-border-right": Ce(e.borderOffset)
    });
    function t(o) {
      y(e.onClick, o);
    }
    return {
      borderOffsetStyles: n,
      n: Og,
      classes: Tg,
      toSizeUnit: Ce,
      handleClick: t
    };
  }
});
yc.render = Ig;
var Wi = yc;
re(Wi);
const aI = Wi;
var ar = Wi;
const Eg = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Mg, n: Bg } = ne("form-details"), Dg = { key: 0 }, Ng = { key: 0 };
function Vg(e, n) {
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
          D(
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
                    Dg,
                    ie(e.errorMessage),
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
          D(
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
                      Ng,
                      ie(e.extraMessage),
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
const $c = ee({
  name: Mg,
  props: Eg,
  setup: () => ({ n: Bg })
});
$c.render = Vg;
var qi = $c;
re(qi);
const iI = qi;
var hn = qi;
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
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A(),
  "onUpdate:indeterminate": A()
}, wc = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function zg() {
  const { bindChildren: e, childProviders: n, length: t } = sn(
    wc
  );
  return {
    length: t,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Lg() {
  const { bindParent: e, parentProvider: n, index: t } = ln(
    wc
  );
  return {
    index: t,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var Rg = Object.defineProperty, Ug = Object.defineProperties, Hg = Object.getOwnPropertyDescriptors, Ws = Object.getOwnPropertySymbols, Fg = Object.prototype.hasOwnProperty, Yg = Object.prototype.propertyIsEnumerable, qs = (e, n, t) => n in e ? Rg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, jg = (e, n) => {
  for (var t in n || (n = {}))
    Fg.call(n, t) && qs(e, t, n[t]);
  if (Ws)
    for (var t of Ws(n))
      Yg.call(n, t) && qs(e, t, n[t]);
  return e;
}, Wg = (e, n) => Ug(e, Hg(n));
const Sc = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Mn() {
  const { parentProvider: e, index: n, bindParent: t } = ln(Sc), o = qt();
  return {
    index: n,
    form: e,
    bindForm: t ? (a) => {
      t(Wg(jg({}, a), { instance: o }));
    } : null
  };
}
function qg() {
  const { childProviders: e, length: n, bindChildren: t } = sn(Sc);
  return {
    length: n,
    formItems: e,
    bindFormItems: t
  };
}
const { name: Gg, n: Xg, classes: Kg } = ne("checkbox");
function Zg(e, n) {
  const t = se("var-icon"), o = se("var-hover-overlay"), r = se("var-form-details"), a = Ue("hover"), i = Ue("ripple");
  return p(), w(
    "div",
    {
      class: v(e.n("wrap")),
      onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
    },
    [
      D(
        "div",
        {
          class: v(e.n())
        },
        [
          Ie((p(), w(
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
          D(
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
const Cc = ee({
  name: Gg,
  directives: { Ripple: Je, Hover: In },
  components: {
    VarIcon: He,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  props: Ag,
  setup(e) {
    const n = Lt(e, "modelValue"), t = Lt(e, "indeterminate"), o = N(() => n.value === e.checkedValue), r = N(() => e.checkedValue), a = S(!1), { checkboxGroup: i, bindCheckboxGroup: l } = Lg(), { hovering: s, handleHovering: u } = Wn(), { form: d, bindForm: c } = Mn(), {
      errorMessage: f,
      validateWithTrigger: m,
      validate: g,
      // expose
      resetValidation: h
    } = En(), b = {
      checkedValue: r,
      checked: o,
      sync: $,
      validate: B,
      resetValidation: h,
      reset: M,
      resetWithAnimation: k
    };
    y(l, b), y(c, b);
    function C(I) {
      Ye(() => {
        const { validateTrigger: R, rules: L, modelValue: U } = e;
        m(R, I, L, U);
      });
    }
    function T(I) {
      const { checkedValue: R, onChange: L } = e;
      n.value = I, t.value = !1, y(L, n.value), C("onChange"), I === R ? i == null || i.onChecked(R) : i == null || i.onUnchecked(R);
    }
    function O(I) {
      const { disabled: R, readonly: L, checkedValue: U, uncheckedValue: oe, onClick: G } = e;
      if (d != null && d.disabled.value || R || (y(G, I), d != null && d.readonly.value || L))
        return;
      a.value = !0;
      const j = i ? i.checkedCount.value >= Number(i.max.value) : !1;
      !o.value && j || T(o.value ? oe : U);
    }
    function $(I) {
      const { checkedValue: R, uncheckedValue: L } = e;
      n.value = I.includes(R) ? R : L;
    }
    function k() {
      a.value = !1;
    }
    function M() {
      n.value = e.uncheckedValue, h();
    }
    function P(I) {
      const { checkedValue: R, uncheckedValue: L } = e;
      ![R, L].includes(I) && (I = o.value ? L : R), T(I);
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
      n: Xg,
      classes: Kg,
      handleHovering: u,
      handleClick: O,
      toggle: P,
      reset: M,
      validate: B,
      resetValidation: h
    };
  }
});
Cc.render = Zg;
var Gi = Cc;
re(Gi);
const lI = Gi;
var ir = Gi;
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
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: Qg, n: _g, classes: xg } = ne("checkbox-group");
function e0(e, n) {
  const t = se("var-form-details");
  return p(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      D(
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
const kc = ee({
  name: Qg,
  components: { VarFormDetails: hn },
  props: Jg,
  setup(e) {
    const n = N(() => e.max), t = N(() => e.modelValue.length), { length: o, checkboxes: r, bindCheckboxes: a } = zg(), { bindForm: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = En(), c = N(() => l.value), f = {
      max: n,
      checkedCount: t,
      onChecked: h,
      onUnchecked: b,
      validate: M,
      resetValidation: d,
      reset: k,
      errorMessage: c
    };
    fe(() => e.modelValue, C, { deep: !0 }), fe(() => o.value, C), a(f), y(i, f);
    function m(P) {
      Ye(() => {
        const { validateTrigger: B, rules: I, modelValue: R } = e;
        s(B, P, I, R);
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
      B.includes(P) && g(B.filter((I) => I !== P));
    }
    function C() {
      return r.forEach(({ sync: P }) => P(e.modelValue));
    }
    function T() {
      r.forEach((P) => P.resetWithAnimation());
    }
    function O() {
      const P = r.map(({ checkedValue: I }) => I.value), B = ls(P);
      return T(), y(e["onUpdate:modelValue"], B), B;
    }
    function $() {
      const P = r.filter(({ checked: I }) => !I.value).map(({ checkedValue: I }) => I.value), B = ls(P);
      return T(), y(e["onUpdate:modelValue"], B), B;
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
      checkAll: O,
      inverseAll: $,
      reset: k,
      validate: M,
      resetValidation: d
    };
  }
});
kc.render = e0;
var Xi = kc;
re(Xi);
const sI = Xi;
var sa = Xi;
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
}, { name: t0, n: Kn, classes: o0 } = ne("chip");
function r0(e, n) {
  const t = se("var-icon");
  return p(), ke(je, {
    name: e.n("$-fade")
  }, {
    default: he(() => [
      D(
        "span",
        ze({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [
          z(e.$slots, "left"),
          D(
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
const Pc = ee({
  name: t0,
  components: {
    VarIcon: He
  },
  inheritAttrs: !1,
  props: n0,
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
      classes: o0,
      handleClose: o
    };
  }
});
Pc.render = r0;
var Ki = Pc;
re(Ki);
const uI = Ki;
var lr = Ki;
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
  onClick: A()
}, Oc = Symbol("ROW_BIND_COL_KEY");
function i0() {
  const { bindChildren: e, childProviders: n, length: t } = sn(Oc);
  return {
    length: t,
    cols: n,
    bindCols: e
  };
}
function l0() {
  const { parentProvider: e, index: n, bindParent: t } = ln(Oc);
  return {
    index: n,
    row: e,
    bindRow: t
  };
}
const { name: s0, n: Ro, classes: u0 } = ne("col");
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
const Tc = ee({
  name: s0,
  props: a0,
  setup(e) {
    const n = N(() => V(e.span)), t = N(() => V(e.offset)), o = S({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = l0(), i = {
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
      classes: u0,
      toNumber: V,
      toSizeUnit: Ce,
      getSize: l,
      handleClick: s,
      padStartFlex: tr
    };
  }
});
Tc.render = d0;
var Zi = Tc;
re(Zi);
const dI = Zi;
var ua = Zi;
const Ic = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function c0() {
  const { childProviders: e, length: n, bindChildren: t } = sn(
    Ic
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
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: v0, n: m0 } = ne("collapse");
function h0(e, n) {
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
const Ec = ee({
  name: v0,
  props: f0,
  setup(e) {
    const n = N(() => e.modelValue), t = N(() => e.offset), o = N(() => e.divider), r = N(() => e.elevation), { length: a, collapseItem: i, bindCollapseItem: l } = c0(), s = {
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
      return u() ? b ? e.accordion ? h : [...e.modelValue, h] : e.accordion ? null : e.modelValue.filter((C) => C !== h) : null;
    }
    function c(h, b) {
      const C = d(h, b);
      y(e["onUpdate:modelValue"], C), y(e.onChange, C);
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
        const C = e.accordion ? h === b : h.includes(b);
        b.init(e.accordion, C);
      });
    }
    return {
      divider: o,
      n: m0
    };
  }
});
Ec.render = h0;
var Ji = Ec;
re(Ji);
const cI = Ji;
var da = Ji;
function p0() {
  const { parentProvider: e, index: n, bindParent: t } = ln(
    Ic
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
const { name: b0, n: y0, classes: $0 } = ne("collapse-item");
function w0(e, n) {
  const t = se("var-icon");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: H(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      D(
        "div",
        {
          class: v(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      D(
        "div",
        {
          class: v(e.n("header")),
          onClick: n[0] || (n[0] = (o) => e.toggle())
        },
        [
          D(
            "div",
            {
              class: v(e.n("header-title"))
            },
            [
              z(e.$slots, "title", {}, () => [
                Ee(
                  ie(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          D(
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
      Ie(D(
        "div",
        {
          class: v(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...o) => e.transitionend && e.transitionend(...o)),
          onTransitionstart: n[2] || (n[2] = (...o) => e.start && e.start(...o))
        },
        [
          D(
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
const Mc = ee({
  name: b0,
  components: {
    VarIcon: He
  },
  props: g0,
  setup(e) {
    const n = S(!1), t = S(!1), o = S(null), r = N(() => e.name), { index: a, collapse: i, bindCollapse: l } = p0(), { active: s, offset: u, divider: d, elevation: c, updateItem: f } = i, m = {
      index: a,
      name: r,
      init: C
    };
    let g = !0;
    fe(n, (k) => {
      k ? h() : b();
    }), l(m);
    function h() {
      return Gs(this, null, function* () {
        if (!o.value || (o.value.style.height = "", t.value = !0, yield Xo(), !o.value))
          return;
        const { offsetHeight: k } = o.value;
        o.value.style.height = "0px", yield Xo(), o.value && (o.value.style.height = k + "px", g && (yield cn(), g && $()));
      });
    }
    function b() {
      return Gs(this, null, function* () {
        if (!o.value)
          return;
        const { offsetHeight: k } = o.value;
        o.value.style.height = k + "px", yield Xo(), o.value.style.height = "0px";
      });
    }
    function C(k, M) {
      s.value === void 0 || k && Ae(s.value) || M === n.value || (n.value = M, T(!0));
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
      n: y0,
      start: O,
      classes: $0,
      toggle: T,
      transitionend: $,
      formatElevation: gn
    };
  }
});
Mc.render = w0;
var Qi = Mc;
re(Qi);
const fI = Qi;
var ca = Qi;
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
  onEnd: A(),
  onChange: A()
}, { name: C0, n: k0 } = ne("countdown"), fa = 1e3, va = 60 * fa, ma = 60 * va, Xs = 24 * ma;
function P0(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      z(e.$slots, "default", at(Po(e.timeData)), () => [
        Ee(
          ie(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const Bc = ee({
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
    }), Wt(() => {
      l = r, f();
    }), Co(f);
    function s(g, h) {
      const b = Object.values(h), C = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (C.forEach((O, $) => {
        g.includes(O) ? g = g.replace(O, St(`${b[$]}`, 2, "0")) : b[$ + 1] += b[$] * T[$];
      }), g.includes("S")) {
        const O = St(`${b[b.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", O) : g.includes("SS") ? g = g.replace("SS", O.slice(0, 2)) : g = g.replace("S", O.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const h = Math.floor(g / Xs), b = Math.floor(g % Xs / ma), C = Math.floor(g % ma / va), T = Math.floor(g % va / fa), O = Math.floor(g % fa), $ = {
        days: h,
        hours: b,
        minutes: C,
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
      n: k0,
      start: c,
      pause: f,
      reset: m
    };
  }
});
Bc.render = P0;
var _i = Bc;
re(_i);
const vI = _i;
var ha = _i;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Bt = 9e15, bt = 1e9, pa = "0123456789abcdef", sr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ur = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ga = {
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
}, Dc, Yn, $e = !0, Cr = "[DecimalError] ", ft = Cr + "Invalid argument: ", Nc = Cr + "Precision limit exceeded", Vc = Cr + "crypto unavailable", Ac = "[object Decimal]", rn = Math.floor, _e = Math.pow, O0 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, T0 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, I0 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, zc = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, An = 1e7, be = 7, E0 = 9007199254740991, M0 = sr.length - 1, ba = ur.length - 1, K = { toStringTag: Ac };
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
  return t.d ? t.d[0] ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + be, o.rounding = 1, t = B0(o, Fc(o, t)), o.precision = e, o.rounding = n, pe(Yn == 2 || Yn == 3 ? t.neg() : t, e, n, !0)) : new o(1) : new o(NaN);
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
  t = i.precision, o = i.rounding, i.precision = t + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / Pr(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = Ht(i, 1, a.times(n), new i(1), !0);
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
    e = 1.4 * Math.sqrt(o), e = e > 16 ? 16 : e | 0, r = r.times(1 / Pr(5, e)), r = Ht(a, 2, r, r, !0);
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
  if ($e = !1, l = c + m, i = ot(u, l), o = n ? dr(d, l + 10) : ot(e, l), s = Re(i, o, l, 1), co(s.d, r = c, f))
    do
      if (l += 10, i = ot(u, l), o = n ? dr(d, l + 10) : ot(e, l), s = Re(i, o, l, 1), !a) {
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
  return u[0] ? (e.d = u, e.e = kr(u, t), $e ? pe(e, l, s) : e) : new g(s === 3 ? -0 : 0);
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
  return e.d = u, e.e = kr(u, o), $e ? pe(e, l, s) : e;
};
K.precision = K.sd = function(e) {
  var n, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(ft + e);
  return t.d ? (n = Lc(t.d), e && t.e + 1 > n && (n = t.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return pe(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + be, o.rounding = 1, t = N0(o, Fc(o, t)), o.precision = e, o.rounding = n, pe(Yn > 2 ? t.neg() : t, e, n, !0)) : new o(NaN);
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
  return n ? ++t : a.shift(), e.d = a, e.e = kr(a, t), $e ? pe(e, c.precision, c.rounding) : e;
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
  if (u = t = new h(1), o = s = new h(0), n = new h(o), a = n.e = Lc(g) - m.e - 1, i = a % be, n.d[0] = _e(10, i < 0 ? be + i : i), e == null)
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
  if (n = rn(e.e / be), n >= e.d.length - 1 && (t = u < 0 ? -u : u) <= E0)
    return r = Rc(s, l, t, o), e.s < 0 ? new s(1).div(r) : pe(r, o, a);
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
function Ko(e, n, t) {
  for (var o, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; )
      r[a] *= n;
    for (r[0] += pa.indexOf(e.charAt(i++)), o = 0; o < r.length; o++)
      r[o] > t - 1 && (r[o + 1] === void 0 && (r[o + 1] = 0), r[o + 1] += r[o] / t | 0, r[o] %= t);
  }
  return r.reverse();
}
function B0(e, n) {
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
    var u, d, c, f, m, g, h, b, C, T, O, $, k, M, P, B, I, R, L, U, oe = o.constructor, G = o.s == r.s ? 1 : -1, j = o.d, X = r.d;
    if (!j || !j[0] || !X || !X[0])
      return new oe(
        // Return NaN if either NaN, or both Infinity or 0.
        !o.s || !r.s || (j ? X && j[0] == X[0] : !X) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          j && j[0] == 0 || !X ? G * 0 : G / 0
        )
      );
    for (s ? (m = 1, d = o.e - r.e) : (s = An, m = be, d = rn(o.e / m) - rn(r.e / m)), L = X.length, I = j.length, C = new oe(G), T = C.d = [], c = 0; X[c] == (j[c] || 0); c++)
      ;
    if (X[c] > (j[c] || 0) && d--, a == null ? (M = a = oe.precision, i = oe.rounding) : l ? M = a + (o.e - r.e) + 1 : M = a, M < 0)
      T.push(1), g = !0;
    else {
      if (M = M / m + 2 | 0, c = 0, L == 1) {
        for (f = 0, X = X[0], M++; (c < I || f) && M--; c++)
          P = f * s + (j[c] || 0), T[c] = P / X | 0, f = P % X | 0;
        g = f || c < I;
      } else {
        for (f = s / (X[0] + 1) | 0, f > 1 && (X = e(X, f, s), j = e(j, f, s), L = X.length, I = j.length), B = L, O = j.slice(0, L), $ = O.length; $ < L; )
          O[$++] = 0;
        U = X.slice(), U.unshift(0), R = X[0], X[1] >= s / 2 && ++R;
        do
          f = 0, u = n(X, O, L, $), u < 0 ? (k = O[0], L != $ && (k = k * s + (O[1] || 0)), f = k / R | 0, f > 1 ? (f >= s && (f = s - 1), h = e(X, f, s), b = h.length, $ = O.length, u = n(h, O, b, $), u == 1 && (f--, t(h, L < b ? U : X, b, s))) : (f == 0 && (u = f = 1), h = X.slice()), b = h.length, b < $ && h.unshift(0), t(O, h, $, s), u == -1 && ($ = O.length, u = n(X, O, L, $), u < 1 && (f++, t(O, L < $ ? U : X, $, s))), $ = O.length) : u === 0 && (f++, O = [0]), T[c++] = f, u && O[0] ? O[$++] = j[B] || 0 : (O = [j[B]], $ = 1);
        while ((B++ < I || O[0] !== void 0) && M--);
        g = O[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (m == 1)
      C.e = d, Dc = g;
    else {
      for (c = 1, f = T[0]; f >= 10; f /= 10)
        c++;
      C.e = c + d * m - 1, pe(C, l ? a + C.e + 1 : a, i, g);
    }
    return C;
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
    return Hc(e);
  var o, r = e.e, a = on(e.d), i = a.length;
  return n ? (t && (o = t - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Jn(o) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + Jn(-r - 1) + a, t && (o = t - i) > 0 && (a += Jn(o))) : r >= i ? (a += Jn(r + 1 - i), t && (o = t - r - 1) > 0 && (a = a + "." + Jn(o))) : ((o = r + 1) < i && (a = a.slice(0, o) + "." + a.slice(o)), t && (o = t - i) > 0 && (r + 1 === i && (a += "."), a += Jn(o))), a;
}
function kr(e, n) {
  var t = e[0];
  for (n *= be; t >= 10; t /= 10)
    n++;
  return n;
}
function dr(e, n, t) {
  if (n > M0)
    throw $e = !0, t && (e.precision = t), Error(Nc);
  return pe(new e(sr), n, 1, !0);
}
function Vn(e, n, t) {
  if (n > ba)
    throw Error(Nc);
  return pe(new e(ur), n, t, !0);
}
function Lc(e) {
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
function Rc(e, n, t, o) {
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
function Uc(e, n, t) {
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
  var t, o, r, a, i, l, s, u, d, c, f, m = 1, g = 10, h = e, b = h.d, C = h.constructor, T = C.rounding, O = C.precision;
  if (h.s < 0 || !b || !b[0] || !h.e && b[0] == 1 && b.length == 1)
    return new C(b && !b[0] ? -1 / 0 : h.s != 1 ? NaN : b ? 0 : h);
  if (n == null ? ($e = !1, d = O) : d = n, C.precision = d += g, t = on(b), o = t.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; o < 7 && o != 1 || o == 1 && t.charAt(1) > 3; )
      h = h.times(e), t = on(h.d), o = t.charAt(0), m++;
    a = h.e, o > 1 ? (h = new C("0." + t), a++) : h = new C(o + "." + t.slice(1));
  } else
    return u = dr(C, d + 2, O).times(a + ""), h = ot(new C(o + "." + t.slice(1)), d - g).plus(u), C.precision = O, n == null ? pe(h, O, T, $e = !0) : h;
  for (c = h, s = i = h = Re(h.minus(1), h.plus(1), d, 1), f = pe(h.times(h), d, 1), r = 3; ; ) {
    if (i = pe(i.times(f), d, 1), u = s.plus(Re(i, new C(r), d, 1)), on(u.d).slice(0, d) === on(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(dr(C, d + 2, O).times(a + ""))), s = Re(s, new C(m), d, 1), n == null)
        if (co(s.d, d - g, T, l))
          C.precision = d += g, u = i = h = Re(c.minus(1), c.plus(1), d, 1), f = pe(h.times(h), d, 1), r = l = 1;
        else
          return pe(s, C.precision = O, T, $e = !0);
      else
        return C.precision = O, s;
    s = u, r += 2;
  }
}
function Hc(e) {
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
function D0(e, n) {
  var t, o, r, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), zc.test(n))
      return $a(e, n);
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
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, o = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = Rc(o, new o(t), a, a * 2)), u = Ko(n, t, An), d = u.length - 1, a = d; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new o(e.s * 0) : (e.e = kr(u, d), e.d = u, $e = !1, i && (e = Re(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? _e(2, s) : rt.pow(2, s))), $e = !0, e);
}
function N0(e, n) {
  var t, o = n.d.length;
  if (o < 3)
    return n.isZero() ? n : Ht(e, 2, n, n);
  t = 1.4 * Math.sqrt(o), t = t > 16 ? 16 : t | 0, n = n.times(1 / Pr(5, t)), n = Ht(e, 2, n, n);
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
function Pr(e, n) {
  for (var t = e; --n; )
    t *= e;
  return t;
}
function Fc(e, n) {
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
    d = Hc(e);
  else {
    for (d = Rn(e), i = d.indexOf("."), g ? (r = 2, n == 16 ? t = t * 4 - 3 : n == 8 && (t = t * 3 - 2)) : r = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Ko(Rn(f), 10, r), f.e = f.d.length), c = Ko(d, 10, r), a = s = c.length; c[--s] == 0; )
      c.pop();
    if (!c[0])
      d = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new m(e), e.d = c, e.e = a, e = Re(e, f, t, o, 0, r), c = e.d, a = e.e, u = Dc), i = c[t], l = r / 2, u = u || c[t + 1] !== void 0, u = o < 4 ? (i !== void 0 || u) && (o === 0 || o === (e.s < 0 ? 3 : 2)) : i > l || i === l && (o === 4 || u || o === 6 && c[t - 1] & 1 || o === (e.s < 0 ? 8 : 7)), c.length = t, u)
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
            for (c = Ko(d, r, n), s = c.length; !c[s - 1]; --s)
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
  return !e.s || !n.s ? t = new this(NaN) : !e.d && !n.d ? (t = Vn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), t.s = e.s) : !n.d || e.isZero() ? (t = n.s < 0 ? Vn(this, o, r) : new this(0), t.s = e.s) : !e.d || n.isZero() ? (t = Vn(this, a, 1).times(0.5), t.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, t = this.atan(Re(e, n, a, 1)), n = Vn(this, a, 1), this.precision = o, this.rounding = r, t = e.s < 0 ? t.minus(n) : t.plus(n)) : t = this.atan(Re(e, n, a, 1)), t;
}
function j0(e) {
  return new this(e).cbrt();
}
function W0(e) {
  return pe(e = new this(e), e.e + 1, 2);
}
function q0(e, n, t) {
  return new this(e).clamp(n, t);
}
function G0(e) {
  if (!e || typeof e != "object")
    throw Error(Cr + "Object expected");
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
          throw Error(Vc);
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
function Yc(e) {
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
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), zc.test(a) ? $a(u, a) : D0(u, a);
  }
  if (r.prototype = K, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = G0, r.clone = Yc, r.isDecimal = Js, r.abs = V0, r.acos = A0, r.acosh = z0, r.add = L0, r.asin = R0, r.asinh = U0, r.atan = H0, r.atanh = F0, r.atan2 = Y0, r.cbrt = j0, r.ceil = W0, r.clamp = q0, r.cos = X0, r.cosh = K0, r.div = Z0, r.exp = J0, r.floor = Q0, r.hypot = _0, r.ln = x0, r.log = eb, r.log10 = tb, r.log2 = nb, r.max = ob, r.min = rb, r.mod = ab, r.mul = ib, r.pow = lb, r.random = sb, r.round = ub, r.sign = db, r.sin = cb, r.sinh = fb, r.sqrt = vb, r.sub = mb, r.sum = hb, r.tan = pb, r.tanh = gb, r.trunc = bb, e === void 0 && (e = {}), e && e.defaults !== !0)
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
  return pe(e = new this(e), e.e + 1, 3);
}
function _0() {
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
  return e instanceof rt || e && e.toStringTag === Ac || !1;
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
  return Uc(this, arguments, "lt");
}
function rb() {
  return Uc(this, arguments, "gt");
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
  if (e === void 0 ? e = this.precision : pn(e, 1, bt), o = Math.ceil(e / be), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(o)); a < o; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(o *= 4); a < o; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = o / 4;
    } else
      throw Error(Vc);
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
function ub(e) {
  return pe(e = new this(e), e.e + 1, this.rounding);
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
  for ($e = !1; t.s && ++e < n.length; )
    t = t.plus(n[e]);
  return $e = !0, pe(t, this.precision, this.rounding);
}
function pb(e) {
  return new this(e).tan();
}
function gb(e) {
  return new this(e).tanh();
}
function bb(e) {
  return pe(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var rt = K.constructor = Yc(ga);
sr = new rt(sr);
ur = new rt(ur);
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
  onBeforeChange: A(),
  onChange: A(),
  onIncrement: A(),
  onDecrement: A(),
  "onUpdate:modelValue": A()
}, Qs = 100, _s = 600, { name: $b, n: wb, classes: Sb } = ne("counter"), Cb = ["inputmode", "readonly", "disabled"];
function kb(e, n) {
  const t = se("var-icon"), o = se("var-button"), r = se("var-form-details");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      D(
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
          Ie(D("input", {
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
          }, null, 46, Cb), [
            [Wv, e.inputValue]
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
const jc = ee({
  name: $b,
  components: {
    VarButton: mn,
    VarIcon: He,
    VarFormDetails: hn
  },
  directives: { Ripple: Je },
  inheritAttrs: !1,
  props: yb,
  setup(e) {
    const n = S(""), { bindForm: t, form: o } = Mn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = En(), { readonly: s, disabled: u } = o ?? {}, d = N(() => {
      const { max: X, modelValue: Q } = e;
      return X != null && V(Q) >= V(X);
    }), c = N(() => {
      const { min: X, modelValue: Q } = e;
      return X != null && V(Q) <= V(X);
    });
    let f, m, g, h;
    y(t, {
      reset: O,
      validate: C,
      resetValidation: l
    }), fe(
      () => e.modelValue,
      (X) => {
        G($(String(X))), y(e.onChange, V(X));
      }
    ), G($(String(e.modelValue)));
    function C() {
      return i(e.rules, e.modelValue);
    }
    function T(X) {
      Ye(() => {
        const { validateTrigger: Q, rules: Y, modelValue: ae } = e;
        a(Q, X, Y, ae);
      });
    }
    function O() {
      const { min: X } = e;
      y(e["onUpdate:modelValue"], X != null ? V(X) : 0), l();
    }
    function $(X) {
      const { decimalLength: Q, max: Y, min: ae } = e;
      let W = V(X);
      return Y != null && W > V(Y) && (W = V(Y)), ae != null && W < V(ae) && (W = V(ae)), X = String(W), Q != null && (X = W.toFixed(V(Q))), X;
    }
    function k(X) {
      const { lazyChange: Q, onBeforeChange: Y } = e, { value: ae } = X.target, W = $(ae);
      Q ? y(Y, V(W), j) : G(W), T("onInputChange");
    }
    function M() {
      const {
        disabled: X,
        readonly: Q,
        disableDecrement: Y,
        decrementButton: ae,
        lazyChange: W,
        step: de,
        modelValue: J,
        onDecrement: q,
        onBeforeChange: _
      } = e;
      if (u != null && u.value || s != null && s.value || X || Q || Y || !ae || c.value)
        return;
      const E = new rt(V(J)).minus(new rt(V(de))).toString(), F = $(E), ve = V(F);
      y(q, ve), W ? y(_, ve, j) : (G(F), T("onDecrement"));
    }
    function P() {
      const {
        disabled: X,
        readonly: Q,
        disableIncrement: Y,
        incrementButton: ae,
        lazyChange: W,
        step: de,
        modelValue: J,
        onIncrement: q,
        onBeforeChange: _
      } = e;
      if (u != null && u.value || s != null && s.value || X || Q || Y || !ae || d.value)
        return;
      const E = new rt(V(J)).plus(new rt(V(de))).toString(), F = $(E), ve = V(F);
      y(q, ve), W ? y(_, ve, j) : (G(F), T("onIncrement"));
    }
    function B() {
      const { press: X, lazyChange: Q } = e;
      !X || Q || (h = window.setTimeout(() => {
        oe();
      }, _s));
    }
    function I() {
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
        M(), oe();
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
      n: wb,
      classes: Sb,
      formatElevation: gn,
      validate: C,
      reset: O,
      resetValidation: l,
      handleChange: k,
      decrement: M,
      increment: P,
      pressDecrement: B,
      pressIncrement: I,
      releaseDecrement: R,
      releaseIncrement: L,
      toSizeUnit: Ce,
      toNumber: V
    };
  }
});
jc.render = kb;
var el = jc;
re(el);
const mI = el;
var wa = el, Wc = 60, qc = Wc * 60, Gc = qc * 24, Pb = Gc * 7, Ft = 1e3, Ar = Wc * Ft, xs = qc * Ft, Ob = Gc * Ft, Tb = Pb * Ft, nl = "millisecond", Dt = "second", Nt = "minute", Vt = "hour", Qn = "day", Zo = "week", Nn = "month", Xc = "quarter", _n = "year", At = "date", Ib = "YYYY-MM-DDTHH:mm:ssZ", eu = "Invalid Date", Eb = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Mb = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Bb = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Sa = function(n, t, o) {
  var r = String(n);
  return !r || r.length >= t ? n : "" + Array(t + 1 - r.length).join(o) + n;
}, Db = function(n) {
  var t = -n.utcOffset(), o = Math.abs(t), r = Math.floor(o / 60), a = o % 60;
  return (t <= 0 ? "+" : "-") + Sa(r, 2, "0") + ":" + Sa(a, 2, "0");
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
    w: Zo,
    d: Qn,
    D: At,
    h: Vt,
    m: Nt,
    s: Dt,
    ms: nl,
    Q: Xc
  };
  return t[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, zb = function(n) {
  return n === void 0;
};
const Lb = {
  s: Sa,
  z: Db,
  m: Nb,
  a: Vb,
  p: Ab,
  u: zb
};
var no = "en", wt = {};
wt[no] = Bb;
var tl = function(n) {
  return n instanceof Or;
}, cr = function e(n, t, o) {
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
  return o.date = n, o.args = arguments, new Or(o);
}, Rb = function(n, t) {
  return me(n, {
    locale: t.$L,
    utc: t.$u,
    x: t.$x,
    $offset: t.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Le = Lb;
Le.l = cr;
Le.i = tl;
Le.w = Rb;
var Ub = function(n) {
  var t = n.date, o = n.utc;
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Le.u(t))
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
}, Or = /* @__PURE__ */ function() {
  function e(t) {
    this.$L = cr(t.locale, null, !0), this.parse(t);
  }
  var n = e.prototype;
  return n.parse = function(o) {
    this.$d = Ub(o), this.$x = o.x || {}, this.init();
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
    var a = this, i = Le.u(r) ? !0 : r, l = Le.p(o), s = function(C, T) {
      var O = Le.w(a.$u ? Date.UTC(a.$y, T, C) : new Date(a.$y, T, C), a);
      return i ? O : O.endOf(Qn);
    }, u = function(C, T) {
      var O = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Le.w(a.toDate()[C].apply(
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
      case Zo: {
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
      case Dt:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(o) {
    return this.startOf(o, !1);
  }, n.$set = function(o, r) {
    var a, i = Le.p(o), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[Qn] = l + "Date", a[At] = l + "Date", a[Nn] = l + "Month", a[_n] = l + "FullYear", a[Vt] = l + "Hours", a[Nt] = l + "Minutes", a[Dt] = l + "Seconds", a[nl] = l + "Milliseconds", a)[i], u = i === Qn ? this.$D + (r - this.$W) : r;
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
    if (l === Zo)
      return s(7);
    var u = (i = {}, i[Nt] = Ar, i[Vt] = xs, i[Dt] = Ft, i)[l] || 1, d = this.$d.getTime() + o * u;
    return Le.w(d, this);
  }, n.subtract = function(o, r) {
    return this.add(o * -1, r);
  }, n.format = function(o) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || eu;
    var i = o || Ib, l = Le.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, m = a.meridiem, g = function(O, $, k, M) {
      return O && (O[$] || O(r, i)) || k[$].slice(0, M);
    }, h = function(O) {
      return Le.s(s % 12 || 12, O, "0");
    }, b = m || function(T, O, $) {
      var k = T < 12 ? "AM" : "PM";
      return $ ? k.toLowerCase() : k;
    }, C = {
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
    return i.replace(Mb, function(T, O) {
      return O || C[T] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(o, r, a) {
    var i, l = Le.p(r), s = me(o), u = (s.utcOffset() - this.utcOffset()) * Ar, d = this - s, c = Le.m(this, s);
    return c = (i = {}, i[_n] = c / 12, i[Nn] = c, i[Xc] = c / 3, i[Zo] = (d - u) / Tb, i[Qn] = (d - u) / Ob, i[Vt] = d / xs, i[Nt] = d / Ar, i[Dt] = d / Ft, i)[l] || d, a ? c : Le.a(c);
  }, n.daysInMonth = function() {
    return this.endOf(Nn).$D;
  }, n.$locale = function() {
    return wt[this.$L];
  }, n.locale = function(o, r) {
    if (!o)
      return this.$L;
    var a = this.clone(), i = cr(o, r, !0);
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
}(), Kc = Or.prototype;
me.prototype = Kc;
[["$ms", nl], ["$s", Dt], ["$m", Nt], ["$H", Vt], ["$W", Qn], ["$M", Nn], ["$y", _n], ["$D", At]].forEach(function(e) {
  Kc[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
me.extend = function(e, n) {
  return e.$i || (e(n, Or, me), e.$i = !0), me;
};
me.locale = cr;
me.isDayjs = tl;
me.unix = function(e) {
  return me(e * 1e3);
};
me.en = wt[no];
me.Ls = wt;
me.p = {};
const Zc = function(e, n) {
  n.prototype.isSameOrBefore = function(t, o) {
    return this.isSame(t, o) || this.isBefore(t, o);
  };
}, Jc = function(e, n) {
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
  onPreview: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { n: Fb } = ne("picker-header");
function Yb(e, n) {
  const t = se("var-icon"), o = se("var-button");
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
      D(
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
                ie(e.showDate),
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
const Qc = ee({
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
    const t = S(!1), o = S(0), r = N(() => {
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
      n: Fb,
      reverse: t,
      showDate: r,
      checkDate: a
    };
  }
});
Qc.render = Yb;
var _c = Qc, jb = Object.defineProperty, nu = Object.getOwnPropertySymbols, Wb = Object.prototype.hasOwnProperty, qb = Object.prototype.propertyIsEnumerable, tu = (e, n, t) => n in e ? jb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Gb = (e, n) => {
  for (var t in n || (n = {}))
    Wb.call(n, t) && tu(e, t, n[t]);
  if (nu)
    for (var t of nu(n))
      qb.call(n, t) && tu(e, t, n[t]);
  return e;
};
me.extend(Zc);
me.extend(Jc);
const { n: Uo, classes: Xb } = ne("month-picker"), { n: Ho } = ne("date-picker");
function Kb(e, n) {
  const t = se("panel-header"), o = se("var-button");
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      D(
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
                    }, Gb({}, e.buttonProps(r.index)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: he(() => [
                        Ee(
                          ie(e.getMonthAbbr(r.index)),
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
const xc = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: mn,
    PanelHeader: _c
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
    const [t, o] = e.current.split("-"), r = S(!1), a = S(0), i = S(null), l = We({
      left: !1,
      right: !1
    }), s = N(() => e.choose.chooseYear === e.preview.previewYear), u = N(() => e.preview.previewYear === t), d = (C) => {
      var T, O;
      return (O = (T = nn.value.datePickerMonthDict) == null ? void 0 : T[C].abbr) != null ? O : "";
    }, c = (C) => {
      const {
        preview: { previewYear: T },
        componentProps: { min: O, max: $ }
      } = e;
      let k = !0, M = !0;
      const P = `${T}-${C}`;
      return $ && (k = me(P).isSameOrBefore(me($), "month")), O && (M = me(P).isSameOrAfter(me(O), "month")), k && M;
    }, f = (C) => {
      const {
        choose: { chooseMonths: T, chooseDays: O, chooseRangeMonth: $ },
        componentProps: { type: k, range: M }
      } = e;
      if (M) {
        if (!$.length)
          return !1;
        const P = me(C).isSameOrBefore(me($[1]), "month"), B = me(C).isSameOrAfter(me($[0]), "month");
        return P && B;
      }
      return k === "month" ? T.includes(C) : O.some((P) => P.includes(C));
    }, m = (C) => {
      const {
        choose: { chooseMonth: T },
        preview: { previewYear: O },
        componentProps: { allowedDates: $, color: k, multiple: M, range: P }
      } = e, B = `${O}-${C}`, I = () => P || M ? f(B) : (T == null ? void 0 : T.index) === C && s.value, L = (() => c(C) ? $ ? !$(B) : !1 : !0)(), U = () => L ? !0 : P || M ? !f(B) : !s.value || (T == null ? void 0 : T.index) !== C, oe = () => u.value && o === C && e.componentProps.showCurrent ? (P || M || s.value) && L ? !0 : P || M ? !f(B) : s.value ? (T == null ? void 0 : T.index) !== o : !0 : !1, G = () => L ? "" : oe() ? k ?? "" : I() ? "" : `${Ho()}-color-cover`, j = G().startsWith(Ho());
      return {
        outline: oe(),
        text: U(),
        color: U() ? "" : k,
        textColor: j ? "" : G(),
        [`${Ho()}-color-cover`]: j,
        class: Xb(Uo("button"), [L, Uo("button--disabled")]),
        disabled: L
      };
    }, g = (C, T) => {
      T.currentTarget.classList.contains(Uo("button--disabled")) || n("choose-month", C);
    }, h = (C) => {
      r.value = C === "prev", a.value += C === "prev" ? -1 : 1, n("check-preview", "year", C);
    }, b = (C) => {
      i.value.checkDate(C);
    };
    return fe(
      () => e.preview.previewYear,
      (C) => {
        const {
          componentProps: { min: T, max: O }
        } = e;
        O && (l.right = !me(`${V(C) + 1}`).isSameOrBefore(me(O), "year")), T && (l.left = !me(`${V(C) - 1}`).isSameOrAfter(me(T), "year"));
      },
      { immediate: !0 }
    ), {
      n: Uo,
      nDate: Ho,
      pack: nn,
      MONTH_LIST: Jo,
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
xc.render = Kb;
var Zb = xc;
const { n: ou, classes: Jb } = ne("year-picker"), Qb = ["onClick"];
function _b(e, n) {
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
        }, ie(t), 15, Qb))),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
const ef = ee({
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
      classes: Jb,
      yearList: t,
      chooseYear: o,
      toNumber: V
    };
  }
});
ef.render = _b;
var xb = ef, ey = Object.defineProperty, ru = Object.getOwnPropertySymbols, ny = Object.prototype.hasOwnProperty, ty = Object.prototype.propertyIsEnumerable, au = (e, n, t) => n in e ? ey(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, oy = (e, n) => {
  for (var t in n || (n = {}))
    ny.call(n, t) && au(e, t, n[t]);
  if (ru)
    for (var t of ru(n))
      ty.call(n, t) && au(e, t, n[t]);
  return e;
};
me.extend(Zc);
me.extend(Jc);
const { n: Et, classes: ry } = ne("day-picker"), { n: Fo } = ne("date-picker");
function ay(e, n) {
  const t = se("panel-header"), o = se("var-button");
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      D(
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
                D(
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
                        ie(e.getDayAbbr(r.index)),
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
                D(
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
                        }, oy({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: he(() => [
                            Ee(
                              ie(e.filterDay(r)),
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
const nf = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: mn,
    PanelHeader: _c
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
    const [t, o, r] = e.current.split("-"), a = S([]), i = S(!1), l = S(0), s = S(null), u = We({
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
      var B, I;
      return (I = (B = nn.value.datePickerWeekDict) == null ? void 0 : B[P].abbr) != null ? I : "";
    }, g = (P) => P > 0 ? P : "", h = () => {
      const {
        preview: { previewMonth: P, previewYear: B }
      } = e, I = me(`${B}-${P.index}`).daysInMonth(), R = me(`${B}-${P.index}-01`).day(), L = f.value.findIndex((U) => U.index === `${R}`);
      a.value = [...Array(L).fill(-1), ...Array.from(Array(I + 1).keys())].filter((U) => U);
    }, b = () => {
      const {
        preview: { previewYear: P, previewMonth: B },
        componentProps: { max: I, min: R }
      } = e;
      if (I) {
        const L = `${P}-${V(B.index) + 1}`;
        u.right = !me(L).isSameOrBefore(me(I), "month");
      }
      if (R) {
        const L = `${P}-${V(B.index) - 1}`;
        u.left = !me(L).isSameOrAfter(me(R), "month");
      }
    }, C = (P) => {
      const {
        preview: { previewYear: B, previewMonth: I },
        componentProps: { min: R, max: L }
      } = e;
      let U = !0, oe = !0;
      const G = `${B}-${I.index}-${P}`;
      return L && (U = me(G).isSameOrBefore(me(L), "day")), R && (oe = me(G).isSameOrAfter(me(R), "day")), U && oe;
    }, T = (P) => {
      const {
        choose: { chooseDays: B, chooseRangeDay: I },
        componentProps: { range: R }
      } = e;
      if (R) {
        if (!I.length)
          return !1;
        const L = me(P).isSameOrBefore(me(I[1]), "day"), U = me(P).isSameOrAfter(me(I[0]), "day");
        return L && U;
      }
      return B.includes(P);
    }, O = (P) => {
      if (P < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Et("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: B },
        preview: { previewYear: I, previewMonth: R },
        componentProps: { allowedDates: L, color: U, multiple: oe, range: G }
      } = e, j = `${I}-${R.index}-${P}`, X = () => G || oe ? T(j) : V(B) === P && c.value, Y = (() => C(P) ? L ? !L(j) : !1 : !0)(), ae = () => Y ? !0 : G || oe ? !T(j) : !c.value || V(B) !== P, W = () => d.value && V(r) === P && e.componentProps.showCurrent ? (G || oe || c.value) && Y ? !0 : G || oe ? !T(j) : c.value ? B !== r : !0 : !1, de = () => Y ? "" : W() ? U ?? "" : X() ? "" : `${Fo()}-color-cover`, J = de().startsWith(Fo());
      return {
        text: ae(),
        outline: W(),
        textColor: J ? "" : de(),
        [`${Fo()}-color-cover`]: J,
        class: ry(Et("button"), Et("button--usable"), [Y, Et("button--disabled")]),
        disabled: Y
      };
    }, $ = (P) => {
      i.value = P === "prev", l.value += P === "prev" ? -1 : 1, n("check-preview", "month", P);
    }, k = (P, B) => {
      B.currentTarget.classList.contains(Et("button--disabled")) || n("choose-day", P);
    }, M = (P) => {
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
      n: Et,
      nDate: Fo,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: f,
      panelBtnDisabled: u,
      forwardRef: M,
      filterDay: g,
      getDayAbbr: m,
      checkDate: $,
      chooseDay: k,
      buttonProps: O
    };
  }
});
nf.render = ay;
var iy = nf, ly = (e, n, t) => new Promise((o, r) => {
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
const { name: sy, n: uy, classes: dy } = ne("date-picker");
function cy(e, n) {
  const t = se("year-picker-panel"), o = se("month-picker-panel"), r = se("day-picker-panel");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      D(
        "div",
        {
          class: v(e.n("title")),
          style: H({ background: e.headerColor || e.color })
        },
        [
          D(
            "div",
            {
              class: v(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
              onClick: n[0] || (n[0] = (a) => e.clickEl("year"))
            },
            [
              z(e.$slots, "year", { year: e.chooseYear }, () => [
                Ee(
                  ie(e.chooseYear),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          D(
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
                        Ee(
                          ie(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ]) : e.multiple ? z(e.$slots, "multiple", {
                        key: 1,
                        choose: e.getChoose.chooseMonths
                      }, () => [
                        Ee(
                          ie(e.getMonthTitle),
                          1
                          /* TEXT */
                        )
                      ]) : z(e.$slots, "month", {
                        key: 2,
                        month: (i = e.chooseMonth) == null ? void 0 : i.index,
                        year: e.chooseYear
                      }, () => [
                        Ee(
                          ie(e.getMonthTitle),
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
                        Ee(
                          ie(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ]) : e.multiple ? z(e.$slots, "multiple", {
                        key: 1,
                        choose: e.getChoose.chooseDays
                      }, () => [
                        Ee(
                          ie(e.getDateTitle),
                          1
                          /* TEXT */
                        )
                      ]) : z(e.$slots, "date", at(ze({ key: 2 }, e.slotProps)), () => [
                        Ee(
                          ie(e.getDateTitle),
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
      D(
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
const tf = ee({
  name: sy,
  components: {
    MonthPickerPanel: Zb,
    YearPickerPanel: xb,
    DayPickerPanel: iy
  },
  props: Hb,
  setup(e) {
    const n = me().format("YYYY-MM-D"), [t, o] = n.split("-"), r = Jo.find((ce) => ce.index === o), a = S(!1), i = S(!1), l = S(!0), s = S(), u = S(), d = S(), c = S(r), f = S(t), m = S(!1), g = S([]), h = S([]), b = S([]), C = S([]), T = S(null), O = S(null), $ = We({
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
      chooseRangeDay: C.value
    })), M = N(() => ({
      previewMonth: c.value,
      previewYear: f.value
    })), P = N(() => {
      var ce, Se;
      const { multiple: ye, range: Be } = e;
      if (Be)
        return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let Me = "";
      return s.value && (Me = (Se = (ce = nn.value.datePickerMonthDict) == null ? void 0 : ce[s.value.index].name) != null ? Se : ""), ye ? `${g.value.length}${nn.value.datePickerSelected}` : Me;
    }), B = N(() => {
      var ce, Se, ye, Be;
      const { multiple: Me, range: Ze } = e;
      if (Ze) {
        const Jt = C.value.map((zv) => me(zv).format("YYYY-MM-DD"));
        return Jt.length ? `${Jt[0]} ~ ${Jt[1]}` : "";
      }
      if (Me)
        return `${h.value.length}${nn.value.datePickerSelected}`;
      if (!u.value || !s.value || !d.value)
        return "";
      const bn = me(`${u.value}-${s.value.index}-${d.value}`).day(), Sn = xt.find((Jt) => Jt.index === `${bn}`), $t = (Se = (ce = nn.value.datePickerWeekDict) == null ? void 0 : ce[Sn.index].name) != null ? Se : "", Vv = (Be = (ye = nn.value.datePickerMonthDict) == null ? void 0 : ye[s.value.index].name) != null ? Be : "", Av = St(d.value, 2, "0");
      return nn.value.lang === "zh-CN" ? `${s.value.index}-${Av} ${$t.slice(0, 3)}` : `${$t.slice(0, 3)}, ${Vv.slice(0, 3)} ${d.value}`;
    }), I = N(() => a.value ? "year" : e.type === "month" || i.value ? "month" : e.type === "date" ? "date" : ""), R = N(() => !e.touchable || ["", "year"].includes(I.value)), L = N(() => {
      var ce, Se, ye, Be;
      const Me = me(`${u.value}-${(ce = s.value) == null ? void 0 : ce.index}-${d.value}`).day(), Ze = d.value ? St(d.value, 2, "0") : "";
      return {
        week: `${Me}`,
        year: (Se = u.value) != null ? Se : "",
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
        if (!(!we() || De(ce) || !ce))
          if (e.range) {
            if (!Ae(ce))
              return;
            l.value = ce.length !== 1, le(ce, e.type);
          } else if (e.multiple) {
            if (!Ae(ce))
              return;
            ge(ce, e.type);
          } else
            Ne(ce);
      },
      { immediate: !0 }
    ), fe(I, qe);
    function ae(ce) {
      ce === "year" ? a.value = !0 : ce === "month" ? i.value = !0 : (a.value = !1, i.value = !1);
    }
    function W(ce) {
      if (R.value)
        return;
      const { clientX: Se, clientY: ye } = ce.touches[0];
      j = Se, X = ye;
    }
    function de(ce, Se) {
      return ce >= Se && ce > 20 ? "x" : "y";
    }
    function J(ce) {
      if (R.value)
        return;
      const { clientX: Se, clientY: ye } = ce.touches[0], Be = Se - j, Me = ye - X;
      Y = de(Math.abs(Be), Math.abs(Me)), Q = Be > 0 ? "prev" : "next";
    }
    function q() {
      return ly(this, null, function* () {
        if (R.value || Y !== "x")
          return;
        const ce = I.value === "month" ? T : O;
        yield cn(), ce.value.forwardRef(Q), qe();
      });
    }
    function _(ce, Se) {
      const ye = Se === "month" ? b : C;
      if (ye.value = l.value ? [ce, ce] : [ye.value[0], ce], l.value = !l.value, l.value) {
        const Me = me(ye.value[0]).isAfter(ye.value[1]) ? [ye.value[1], ye.value[0]] : [...ye.value];
        y(e["onUpdate:modelValue"], Me), y(e.onChange, Me);
      }
    }
    function E(ce, Se) {
      const ye = Se === "month" ? g : h, Be = Se === "month" ? "YYYY-MM" : "YYYY-MM-DD", Me = ye.value.map((bn) => me(bn).format(Be)), Ze = Me.findIndex((bn) => bn === ce);
      Ze === -1 ? Me.push(ce) : Me.splice(Ze, 1), y(e["onUpdate:modelValue"], Me), y(e.onChange, Me);
    }
    function F(ce, Se) {
      return !u.value || !s.value ? !1 : oe.value ? ce === "month" ? Se.index < s.value.index : G.value ? Se < V(d.value) : s.value.index > c.value.index : u.value > f.value;
    }
    function ve(ce) {
      const { readonly: Se, range: ye, multiple: Be, onChange: Me, "onUpdate:modelValue": Ze } = e;
      if (ce < 0 || Se)
        return;
      m.value = F("day", ce);
      const bn = `${f.value}-${c.value.index}-${ce}`, Sn = me(bn).format("YYYY-MM-DD");
      ye ? _(Sn, "day") : Be ? E(Sn, "day") : (y(Ze, Sn), y(Me, Sn));
    }
    function Pe(ce) {
      const { type: Se, readonly: ye, range: Be, multiple: Me, onChange: Ze, onPreview: bn, "onUpdate:modelValue": Sn } = e;
      if (m.value = F("month", ce), Se === "month" && !ye) {
        const $t = `${f.value}-${ce.index}`;
        Be ? _($t, "month") : Me ? E($t, "month") : (y(Sn, $t), y(Ze, $t));
      } else
        c.value = ce, y(bn, V(f.value), V(c.value.index));
      i.value = !1;
    }
    function te(ce) {
      f.value = `${ce}`, a.value = !1, i.value = !0, y(e.onPreview, V(f.value), V(c.value.index));
    }
    function ue(ce, Se) {
      const ye = Se === "prev" ? -1 : 1;
      if (ce === "year")
        f.value = `${V(f.value) + ye}`;
      else {
        let Be = V(c.value.index) + ye;
        Be < 1 && (f.value = `${V(f.value) - 1}`, Be = 12), Be > 12 && (f.value = `${V(f.value) + 1}`, Be = 1), c.value = Jo.find((Me) => V(Me.index) === Be);
      }
      y(e.onPreview, V(f.value), V(c.value.index));
    }
    function we() {
      return (e.multiple || e.range) && !Ae(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ae(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function De(ce) {
      return Ae(ce) ? !1 : ce === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function le(ce, Se) {
      const ye = Se === "month" ? b : C, Be = Se === "month" ? "YYYY-MM" : "YYYY-MM-D", Me = ce.map((Sn) => me(Sn).format(Be)).slice(0, 2);
      if (ye.value.some((Sn) => De(Sn)))
        return;
      ye.value = Me;
      const bn = me(ye.value[0]).isAfter(ye.value[1]);
      ye.value.length === 2 && bn && (ye.value = [ye.value[1], ye.value[0]]);
    }
    function ge(ce, Se) {
      const ye = Se === "month" ? g : h, Be = Se === "month" ? "YYYY-MM" : "YYYY-MM-D", Me = Array.from(new Set(ce.map((Ze) => me(Ze).format(Be))));
      ye.value = Me.filter((Ze) => Ze !== "Invalid Date");
    }
    function Ne(ce) {
      const Se = me(ce).format("YYYY-MM-D");
      if (De(Se))
        return;
      const [ye, Be, Me] = Se.split("-"), Ze = Jo.find((bn) => bn.index === Be);
      s.value = Ze, u.value = ye, d.value = Me, c.value = Ze, f.value = ye;
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
      getPanelType: I,
      getChoose: k,
      getPreview: M,
      componentProps: $,
      slotProps: L,
      formatRange: U,
      n: uy,
      classes: dy,
      clickEl: ae,
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
tf.render = cy;
var ol = tf;
re(ol);
const hI = ol;
var Ca = ol, fy = Object.defineProperty, iu = Object.getOwnPropertySymbols, vy = Object.prototype.hasOwnProperty, my = Object.prototype.propertyIsEnumerable, lu = (e, n, t) => n in e ? fy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, hy = (e, n) => {
  for (var t in n || (n = {}))
    vy.call(n, t) && lu(e, t, n[t]);
  if (iu)
    for (var t of iu(n))
      my.call(n, t) && lu(e, t, n[t]);
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
var gy = Object.defineProperty, su = Object.getOwnPropertySymbols, by = Object.prototype.hasOwnProperty, yy = Object.prototype.propertyIsEnumerable, uu = (e, n, t) => n in e ? gy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, $y = (e, n) => {
  for (var t in n || (n = {}))
    by.call(n, t) && uu(e, t, n[t]);
  if (su)
    for (var t of su(n))
      yy.call(n, t) && uu(e, t, n[t]);
  return e;
};
const { name: wy, n: Sy, classes: Cy } = ne("dialog");
function ky(e, n) {
  const t = se("var-button"), o = se("var-popup");
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
      D(
        "div",
        ze({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: $y({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          D(
            "div",
            {
              class: v(e.n("title"))
            },
            [
              z(e.$slots, "title", {}, () => {
                var r;
                return [
                  Ee(
                    ie((r = e.title) != null ? r : e.pack.dialogTitle),
                    1
                    /* TEXT */
                  )
                ];
              })
            ],
            2
            /* CLASS */
          ),
          D(
            "div",
            {
              class: v(e.n("message")),
              style: H({ textAlign: e.messageAlign })
            },
            [
              z(e.$slots, "default", {}, () => [
                Ee(
                  ie(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          D(
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
                    Ee(
                      ie((r = e.cancelButtonText) != null ? r : e.pack.dialogCancelButtonText),
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
                    Ee(
                      ie((r = e.confirmButtonText) != null ? r : e.pack.dialogConfirmButtonText),
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
const of = ee({
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
      pack: nn,
      popupShow: n,
      popupCloseOnClickOverlay: t,
      n: Sy,
      classes: Cy,
      handleClickOverlay: r,
      confirm: a,
      cancel: i,
      toSizeUnit: Ce
    };
  }
});
of.render = ky;
var Bo = of, Py = Object.defineProperty, Oy = Object.defineProperties, Ty = Object.getOwnPropertyDescriptors, du = Object.getOwnPropertySymbols, Iy = Object.prototype.hasOwnProperty, Ey = Object.prototype.propertyIsEnumerable, cu = (e, n, t) => n in e ? Py(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, zr = (e, n) => {
  for (var t in n || (n = {}))
    Iy.call(n, t) && cu(e, t, n[t]);
  if (du)
    for (var t of du(n))
      Ey.call(n, t) && cu(e, t, n[t]);
  return e;
}, My = (e, n) => Oy(e, Ty(n));
let et, fr = {};
function By(e = {}) {
  return xe(e) ? My(zr({}, fr), { message: e }) : zr(zr({}, fr), e);
}
function Tt(e) {
  return gt() ? new Promise((n) => {
    Tt.close();
    const t = By(e), o = We(t);
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
  fr = e;
};
Tt.resetDefaultOptions = function() {
  fr = {};
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
const pI = Bo;
var ka = Tt;
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
}, { name: Ny, n: Vy, classes: Ay } = ne("divider");
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
          ie(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const rf = ee({
  name: Ny,
  props: Dy,
  setup(e, { slots: n }) {
    const t = S(!1), o = N(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = N(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (mi(i) || l)
        return { margin: s };
      const u = V(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Ce(d)})`,
        left: u > 0 ? Ce(d) : Ce(0)
      };
    });
    an(a), ko(a);
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
rf.render = zy;
var rl = rf;
re(rl);
const gI = rl;
var Pa = rl;
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
  onClick: A()
};
var Ry = Object.defineProperty, Uy = Object.defineProperties, Hy = Object.getOwnPropertyDescriptors, fu = Object.getOwnPropertySymbols, Fy = Object.prototype.hasOwnProperty, Yy = Object.prototype.propertyIsEnumerable, vu = (e, n, t) => n in e ? Ry(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, mu = (e, n) => {
  for (var t in n || (n = {}))
    Fy.call(n, t) && vu(e, t, n[t]);
  if (fu)
    for (var t of fu(n))
      Yy.call(n, t) && vu(e, t, n[t]);
  return e;
}, hu = (e, n) => Uy(e, Hy(n)), jy = (e, n, t) => new Promise((o, r) => {
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
const { name: Wy, n: qy, classes: Gy } = ne("drag");
function Xy(e, n) {
  return p(), ke(Xn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    D(
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
const af = ee({
  name: Wy,
  inheritAttrs: !1,
  props: Ly,
  setup(e, { attrs: n }) {
    const t = S(null), o = S(0), r = S(0), a = S(!1), i = S(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: m, resetTouch: g } = br(), { disabled: h } = Zt(), b = We({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    fe(() => e.boundary, R), Oo(U), an(() => {
      R(), U();
    });
    function C(G) {
      e.disabled || (c(G), k());
    }
    function T(G) {
      return jy(this, null, function* () {
        !l.value || e.disabled || (f(G), G.preventDefault(), i.value = !1, a.value = !0, e.direction.includes("x") && (o.value += u.value), e.direction.includes("y") && (r.value += d.value), I());
      });
    }
    function O() {
      e.disabled || (m(), i.value = !0, B());
    }
    function $(G) {
      s.value || y(e.onClick, G);
    }
    function k() {
      const { left: G, top: j } = M();
      o.value = G, r.value = j;
    }
    function M() {
      const G = en(t.value), j = en(window), X = G.top - j.top, Q = j.bottom - G.bottom, Y = G.left - j.left, ae = j.right - G.right, { width: W, height: de } = G, { width: J, height: q } = j;
      return {
        top: X,
        bottom: Q,
        left: Y,
        right: ae,
        width: W,
        height: de,
        halfWidth: W / 2,
        halfHeight: de / 2,
        windowWidth: J,
        windowHeight: q
      };
    }
    function P() {
      const G = M(), j = b.left, X = G.windowWidth - b.right - G.width, Q = b.top, Y = G.windowHeight - b.bottom - G.height;
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
      const { halfWidth: G, halfHeight: j, top: X, bottom: Q, left: Y, right: ae } = M(), { minX: W, minY: de, maxX: J, maxY: q } = P(), _ = Y + G - b.left, E = ae + G - b.right, F = X + j - b.top, ve = Q + j - b.bottom, Pe = _ <= E, te = F <= ve;
      e.attraction.includes("x") && (o.value = Pe ? W : J), e.attraction.includes("y") && (r.value = te ? de : q);
    }
    function I() {
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
      a.value && (k(), I());
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
      n: qy,
      classes: Gy,
      getAttrs: L,
      handleTouchstart: C,
      handleTouchmove: T,
      handleTouchend: O,
      handleClick: $,
      resize: U,
      reset: oe
    };
  }
});
af.render = Xy;
var al = af;
re(al);
const bI = al;
var vr = al, Ky = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qo(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Ky[n];
  });
}
var jn = "top", vt = "bottom", Ct = "right", it = "left", il = "auto", Tr = [jn, vt, Ct, it], Ir = "start", fo = "end", Zy = "clippingParents", lf = "viewport", Qt = "popper", Jy = "reference", pu = /* @__PURE__ */ Tr.reduce(function(e, n) {
  return e.concat([n + "-" + Ir, n + "-" + fo]);
}, []), sf = /* @__PURE__ */ [].concat(Tr, [il]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Ir, n + "-" + fo]);
}, []), Qy = "beforeRead", _y = "read", xy = "afterRead", e1 = "beforeMain", n1 = "main", t1 = "afterMain", o1 = "beforeWrite", r1 = "write", a1 = "afterWrite", i1 = [Qy, _y, xy, e1, n1, t1, o1, r1, a1];
function lt(e) {
  return e.split("-")[0];
}
var l1 = {
  start: "end",
  end: "start"
};
function gu(e) {
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
function uf() {
  return !/^((?!chrome|android).)*safari/i.test(Oa());
}
function jt(e, n, t) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  n && kn(e) && (r = e.offsetWidth > 0 && Yt(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Yt(o.height) / e.offsetHeight || 1);
  var i = kt(e) ? Bn(e) : window, l = i.visualViewport, s = !uf() && t, u = (o.left + (s && l ? l.offsetLeft : 0)) / r, d = (o.top + (s && l ? l.offsetTop : 0)) / a, c = o.width / r, f = o.height / a;
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
function s1(e, n) {
  var t = Bn(e), o = yt(e), r = t.visualViewport, a = o.clientWidth, i = o.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = uf();
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
function u1(e) {
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
function Er(e) {
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
function df(e) {
  return ["html", "body", "#document"].indexOf(Un(e)) >= 0 ? e.ownerDocument.body : kn(e) && dl(e) ? e : df(Er(e));
}
function oo(e, n) {
  var t;
  n === void 0 && (n = []);
  var o = df(e), r = o === ((t = e.ownerDocument) == null ? void 0 : t.body), a = Bn(o), i = r ? [a].concat(a.visualViewport || [], dl(o) ? o : []) : o, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(oo(Er(i)))
  );
}
function d1(e) {
  return ["table", "td", "th"].indexOf(Un(e)) >= 0;
}
function yu(e) {
  return !kn(e) || // https://github.com/popperjs/popper-core/issues/837
  qn(e).position === "fixed" ? null : e.offsetParent;
}
function c1(e) {
  var n = /firefox/i.test(Oa()), t = /Trident/i.test(Oa());
  if (t && kn(e)) {
    var o = qn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Er(e);
  for (ll(r) && (r = r.host); kn(r) && ["html", "body"].indexOf(Un(r)) < 0; ) {
    var a = qn(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function cl(e) {
  for (var n = Bn(e), t = yu(e); t && d1(t) && qn(t).position === "static"; )
    t = yu(t);
  return t && (Un(t) === "html" || Un(t) === "body" && qn(t).position === "static") ? n : t || c1(e) || n;
}
function f1(e, n) {
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
function v1(e, n) {
  var t = jt(e, !1, n === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function $u(e, n, t) {
  return n === lf ? Ta(s1(e, t)) : kt(n) ? v1(n, t) : Ta(u1(yt(e)));
}
function m1(e) {
  var n = oo(Er(e)), t = ["absolute", "fixed"].indexOf(qn(e).position) >= 0, o = t && kn(e) ? cl(e) : e;
  return kt(o) ? n.filter(function(r) {
    return kt(r) && f1(r, o) && Un(r) !== "body";
  }) : [];
}
function h1(e, n, t, o) {
  var r = n === "clippingParents" ? m1(e) : [].concat(n), a = [].concat(r, [t]), i = a[0], l = a.reduce(function(s, u) {
    var d = $u(e, u, o);
    return s.top = to(d.top, s.top), s.right = bu(d.right, s.right), s.bottom = bu(d.bottom, s.bottom), s.left = to(d.left, s.left), s;
  }, $u(e, i, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function vo(e) {
  return e.split("-")[1];
}
function p1(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function cf(e) {
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
function ff(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = o === void 0 ? e.placement : o, a = t.strategy, i = a === void 0 ? e.strategy : a, l = t.boundary, s = l === void 0 ? Zy : l, u = t.rootBoundary, d = u === void 0 ? lf : u, c = t.elementContext, f = c === void 0 ? Qt : c, m = t.altBoundary, g = m === void 0 ? !1 : m, h = t.padding, b = h === void 0 ? 0 : h, C = b1(typeof b != "number" ? b : y1(b, Tr)), T = f === Qt ? Jy : Qt, O = e.rects.popper, $ = e.elements[g ? T : f], k = h1(kt($) ? $ : $.contextElement || yt(e.elements.popper), s, d, i), M = jt(e.elements.reference), P = cf({
    reference: M,
    element: O,
    strategy: "absolute",
    placement: r
  }), B = Ta(Object.assign({}, O, P)), I = f === Qt ? B : M, R = {
    top: k.top - I.top + C.top,
    bottom: I.bottom - k.bottom + C.bottom,
    left: k.left - I.left + C.left,
    right: I.right - k.right + C.right
  }, L = e.modifiersData.offset;
  if (f === Qt && L) {
    var U = L[r];
    Object.keys(R).forEach(function(oe) {
      var G = [Ct, vt].indexOf(oe) >= 0 ? 1 : -1, j = [jn, vt].indexOf(oe) >= 0 ? "y" : "x";
      R[oe] += U[j] * G;
    });
  }
  return R;
}
function $1(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = t.boundary, a = t.rootBoundary, i = t.padding, l = t.flipVariations, s = t.allowedAutoPlacements, u = s === void 0 ? sf : s, d = vo(o), c = d ? l ? pu : pu.filter(function(g) {
    return vo(g) === d;
  }) : Tr, f = c.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = c);
  var m = f.reduce(function(g, h) {
    return g[h] = ff(e, {
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
function w1(e) {
  if (lt(e) === il)
    return [];
  var n = Qo(e);
  return [gu(e), n, gu(n)];
}
function S1(e) {
  var n = e.state, t = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var r = t.mainAxis, a = r === void 0 ? !0 : r, i = t.altAxis, l = i === void 0 ? !0 : i, s = t.fallbackPlacements, u = t.padding, d = t.boundary, c = t.rootBoundary, f = t.altBoundary, m = t.flipVariations, g = m === void 0 ? !0 : m, h = t.allowedAutoPlacements, b = n.options.placement, C = lt(b), T = C === b, O = s || (T || !g ? [Qo(b)] : w1(b)), $ = [b].concat(O).reduce(function(_, E) {
      return _.concat(lt(E) === il ? $1(n, {
        placement: E,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : E);
    }, []), k = n.rects.reference, M = n.rects.popper, P = /* @__PURE__ */ new Map(), B = !0, I = $[0], R = 0; R < $.length; R++) {
      var L = $[R], U = lt(L), oe = vo(L) === Ir, G = [jn, vt].indexOf(U) >= 0, j = G ? "width" : "height", X = ff(n, {
        placement: L,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), Q = G ? oe ? Ct : it : oe ? vt : jn;
      k[j] > M[j] && (Q = Qo(Q));
      var Y = Qo(Q), ae = [];
      if (a && ae.push(X[U] <= 0), l && ae.push(X[Q] <= 0, X[Y] <= 0), ae.every(function(_) {
        return _;
      })) {
        I = L, B = !1;
        break;
      }
      P.set(L, ae);
    }
    if (B)
      for (var W = g ? 3 : 1, de = function(E) {
        var F = $.find(function(ve) {
          var Pe = P.get(ve);
          if (Pe)
            return Pe.slice(0, E).every(function(te) {
              return te;
            });
        });
        if (F)
          return I = F, "break";
      }, J = W; J > 0; J--) {
        var q = de(J);
        if (q === "break")
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
  var n = e.state, t = e.options, o = e.name, r = t.offset, a = r === void 0 ? [0, 0] : r, i = sf.reduce(function(d, c) {
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
  var C = i.hasOwnProperty("x"), T = i.hasOwnProperty("y"), O = it, $ = jn, k = window;
  if (u) {
    var M = cl(t), P = "clientHeight", B = "clientWidth";
    if (M === Bn(t) && (M = yt(t), qn(M).position !== "static" && l === "absolute" && (P = "scrollHeight", B = "scrollWidth")), M = M, r === jn || (r === it || r === Ct) && a === fo) {
      $ = vt;
      var I = c && M === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[P]
      );
      h -= I - o.height, h *= s ? 1 : -1;
    }
    if (r === it || (r === jn || r === vt) && a === fo) {
      O = Ct;
      var R = c && M === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[B]
      );
      m -= R - o.width, m *= s ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: l
  }, u && T1), U = d === !0 ? I1({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  if (m = U.x, h = U.y, s) {
    var oe;
    return Object.assign({}, L, (oe = {}, oe[$] = T ? "0" : "", oe[O] = C ? "0" : "", oe.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + h + "px)" : "translate3d(" + m + "px, " + h + "px, 0)", oe));
  }
  return Object.assign({}, L, (n = {}, n[$] = T ? h + "px" : "", n[O] = C ? m + "px" : "", n.transform = "", n));
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
const vf = {
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
  return e === Bn(e) || !kn(e) ? sl(e) : M1(e);
}
function D1(e) {
  var n = e.getBoundingClientRect(), t = Yt(n.width) / e.offsetWidth || 1, o = Yt(n.height) / e.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function N1(e, n, t) {
  t === void 0 && (t = !1);
  var o = kn(n), r = kn(n) && D1(n), a = yt(n), i = jt(e, r, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((Un(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  dl(a)) && (l = B1(n)), kn(n) ? (s = jt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = ul(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function V1(e) {
  var n = jt(e), t = e.offsetWidth, o = e.offsetHeight;
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
var Su = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Cu() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function U1(e) {
  e === void 0 && (e = {});
  var n = e, t = n.defaultModifiers, o = t === void 0 ? [] : t, r = n.defaultOptions, a = r === void 0 ? Su : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Su, a),
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
        var T = typeof C == "function" ? C(d.options) : C;
        h(), d.options = Object.assign({}, a, d.options, T), d.scrollParents = {
          reference: kt(l) ? oo(l) : l.contextElement ? oo(l.contextElement) : [],
          popper: oo(s)
        };
        var O = z1(R1([].concat(o, d.options.modifiers)));
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
          var C = d.elements, T = C.reference, O = C.popper;
          if (Cu(T, O)) {
            d.rects = {
              reference: N1(T, cl(O), d.options.strategy === "fixed"),
              popper: V1(O)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(R) {
              return d.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var $ = 0; $ < d.orderedModifiers.length; $++) {
              if (d.reset === !0) {
                d.reset = !1, $ = -1;
                continue;
              }
              var k = d.orderedModifiers[$], M = k.fn, P = k.options, B = P === void 0 ? {} : P, I = k.name;
              typeof M == "function" && (d = M({
                state: d,
                options: B,
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
        return new Promise(function(b) {
          m.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!Cu(l, s))
      return m;
    m.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function g() {
      d.orderedModifiers.forEach(function(b) {
        var C = b.name, T = b.options, O = T === void 0 ? {} : T, $ = b.effect;
        if (typeof $ == "function") {
          var k = $({
            state: d,
            name: C,
            instance: m,
            options: O
          }), M = function() {
          };
          c.push(k || M);
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
function H1(e) {
  var n = e.state, t = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, i = o.resize, l = i === void 0 ? !0 : i, s = Bn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", t.update, Yo);
  }), l && s.addEventListener("resize", t.update, Yo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", t.update, Yo);
    }), l && s.removeEventListener("resize", t.update, Yo);
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
  n.modifiersData[t] = cf({
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
var X1 = [F1, j1, vf, G1], K1 = /* @__PURE__ */ U1({
  defaultModifiers: X1
}), Z1 = Object.defineProperty, J1 = Object.defineProperties, Q1 = Object.getOwnPropertyDescriptors, ku = Object.getOwnPropertySymbols, _1 = Object.prototype.hasOwnProperty, x1 = Object.prototype.propertyIsEnumerable, Pu = (e, n, t) => n in e ? Z1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Lr = (e, n) => {
  for (var t in n || (n = {}))
    _1.call(n, t) && Pu(e, t, n[t]);
  if (ku)
    for (var t of ku(n))
      x1.call(n, t) && Pu(e, t, n[t]);
  return e;
}, Rr = (e, n) => J1(e, Q1(n)), Ou = (e, n, t) => new Promise((o, r) => {
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
function mf(e) {
  const n = S(null), t = S(null), o = S({ width: 0, height: 0 }), r = Lt(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(I, R) {
      R ? (M(), y(e.onOpen)) : y(e.onClose);
    }
  }), { zIndex: a } = Io(() => r.value, 1);
  let i = null, l = !1, s = !1;
  const u = () => {
    const { width: I, height: R } = Pt(n.value);
    o.value = {
      width: Fe(I),
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
  }, C = (I) => {
    e.trigger === "click" && (b(), y(e.onClickOutside, I));
  }, T = () => {
    M(), y(e.onClosed);
  }, O = () => {
    const { offsetX: I, offsetY: R, placement: L } = e;
    u();
    const U = {
      x: Fe(I),
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
    const { placement: I, skidding: R, distance: L } = O(), U = [
      Rr(Lr({}, C1), {
        enabled: r.value
      }),
      Rr(Lr({}, O1), {
        options: {
          offset: [R, L]
        }
      }),
      Rr(Lr({}, vf), {
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
      placement: I,
      modifiers: U,
      strategy: e.strategy
    };
  }, k = () => e.reference ? n.value.querySelector(e.reference) : n.value, M = () => {
    i.setOptions($());
  }, P = () => {
    const { disabled: I } = e;
    I || (r.value = !0, y(e["onUpdate:show"], !0));
  }, B = () => {
    r.value = !1, y(e["onUpdate:show"], !1);
  };
  return wd(k, "click", C), fe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], M), fe(() => e.disabled, B), So(() => {
    var I;
    i = K1((I = k()) != null ? I : n.value, t.value, $());
  }), Co(() => {
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
    resize: M,
    open: P,
    close: B
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
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
}, { name: n$, n: t$, classes: o$ } = ne("tooltip");
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
            Ie(D(
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
                D(
                  "div",
                  {
                    style: H({ background: e.color, width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0 }),
                    class: v(e.classes(e.n("content-container"), e.n(`--${e.type}`)))
                  },
                  [
                    z(e.$slots, "content", {}, () => [
                      Ee(
                        ie(e.content),
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
const hf = ee({
  name: n$,
  props: e$,
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
    } = mf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Ce,
      n: t$,
      classes: o$,
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
hf.render = r$;
var fl = hf;
re(fl);
const yI = fl;
var mr = fl;
const a$ = {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
var i$ = Object.defineProperty, Tu = Object.getOwnPropertySymbols, l$ = Object.prototype.hasOwnProperty, s$ = Object.prototype.propertyIsEnumerable, Iu = (e, n, t) => n in e ? i$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, u$ = (e, n) => {
  for (var t in n || (n = {}))
    l$.call(n, t) && Iu(e, t, n[t]);
  if (Tu)
    for (var t of Tu(n))
      s$.call(n, t) && Iu(e, t, n[t]);
  return e;
};
const { name: d$, n: c$, classes: f$ } = ne("ellipsis"), v$ = { key: 0 };
function m$(e, n) {
  const t = se("var-tooltip");
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
              v$,
              ie(e.tooltip.content),
              1
              /* TEXT */
            )) : z(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: he(() => [
        D(
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
const pf = ee({
  name: d$,
  components: { VarTooltip: mr },
  props: a$,
  setup(e) {
    const n = S(!1), t = N(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), o = N(() => e.tooltip === !1 ? {
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
pf.render = m$;
var vl = pf;
re(vl);
const $I = vl;
var Ia = vl;
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
  name: p$,
  classes: Ur,
  n: yn
} = ne("fab");
var ml = ee({
  name: p$,
  inheritAttrs: !1,
  props: h$,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = Lt(e, "active"), r = S(null), a = S(null);
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
      }) : null : Ie(Z(mn, {
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
          class: Ur([o.value, yn("trigger-active-icon"), yn("trigger-inactive-icon")]),
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
      const c = Cd((d = y(n.default)) != null ? d : []), f = mi(e.drag) ? {} : e.drag;
      return Z(vr, ze({
        ref: a,
        class: Ur(yn(`--position-${e.position}`), [!e.fixed, yn("--absolute")]),
        style: {
          top: Ce(e.top),
          bottom: Ce(e.bottom),
          left: Ce(e.left),
          right: Ce(e.right)
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
          class: Ur(yn(), yn(`--direction-${e.direction}`), [e.safeArea, yn("--safe-area")]),
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
          default: () => [Ie(Z("div", {
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
const wI = ml;
var Ea = ml;
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
}, { name: g$, n: Hr, classes: b$ } = ne("field-decorator"), y$ = ["for"];
function $$(e, n) {
  const t = se("var-icon");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      D(
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
          D(
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
          D(
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
            D(
              "span",
              null,
              ie(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, y$)) : x("v-if", !0),
          D(
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
              D(
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
                    D(
                      "span",
                      {
                        ref: "placeholderTextEl",
                        class: v(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      ie(e.placeholder),
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
              D(
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
const gf = ee({
  name: g$,
  components: { VarIcon: He },
  props: hl,
  setup(e, { slots: n }) {
    const t = S(null), o = S(""), r = N(() => e.hint && (!Fn(e.value) || e.isFocus || n["prepend-icon"])), a = N(
      () => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
    );
    Oo(l), an(l), ko(l);
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
      n: Hr,
      classes: b$,
      isEmpty: Fn,
      handleClear: s,
      handleClick: u
    };
  }
});
gf.render = $$;
var pl = gf;
re(pl);
const SI = pl;
var mo = pl;
const w$ = {
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
var Eu = (e, n, t) => new Promise((o, r) => {
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
const { name: S$, n: C$ } = ne("form");
function k$(e, n) {
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
const bf = ee({
  name: S$,
  props: w$,
  setup(e) {
    const n = N(() => e.disabled), t = N(() => e.readonly), { formItems: o, bindFormItems: r } = qg();
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
      return Eu(this, null, function* () {
        f.preventDefault();
        const m = yield u();
        y(e.onSubmit, m);
      });
    }
    function s(f) {
      f.preventDefault(), d(), y(e.onReset);
    }
    function u() {
      return Eu(this, null, function* () {
        var f;
        const m = yield Promise.all(o.map(({ validate: g }) => g()));
        if (e.scrollToError) {
          const [, g] = om(m, (b) => b === !1, e.scrollToError), h = g > -1;
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
      n: C$,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: d,
      resetValidation: c
    };
  }
});
bf.render = k$;
var Do = bf;
Do.useValidation = En;
Do.useForm = Mn;
re(Do);
const CI = Do;
var Ma = Do;
const P$ = {
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
}, { name: O$, n: T$, classes: I$ } = ne("image"), E$ = ["alt", "title", "lazy-loading", "lazy-error"], M$ = ["alt", "title", "src"];
function B$(e, n) {
  var t;
  const o = Ue("lazy"), r = Ue("ripple");
  return Ie((p(), w(
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
      e.lazy && !e.showErrorSlot ? Ie((p(), w("img", {
        key: 0,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: H({ objectFit: e.fit }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, E$)), [
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
      }, null, 46, M$)) : x("v-if", !0),
      e.showErrorSlot ? z(e.$slots, "error", { key: 2 }) : x("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const yf = ee({
  name: O$,
  directives: {
    Lazy: uo,
    Ripple: Je
  },
  props: P$,
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
      n: T$,
      classes: I$,
      toSizeUnit: Ce,
      handleLoad: r,
      handleError: o,
      handleClick: a
    };
  }
});
yf.render = B$;
var gl = yf;
re(gl);
const kI = gl;
var Ba = gl;
const $f = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function D$() {
  const { childProviders: e, length: n, bindChildren: t } = sn(
    $f
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: t
  };
}
const wf = {
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
const N$ = 250, V$ = 20, { name: A$, n: Fr, classes: z$ } = ne("swipe"), L$ = ["onClick"];
function R$(e, n) {
  const t = se("var-icon"), o = se("var-button"), r = Ue("hover");
  return Ie((p(), w(
    "div",
    {
      class: v(e.n()),
      ref: "swipeEl"
    },
    [
      D(
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
              }, null, 14, L$))),
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
  name: A$,
  directives: { Hover: In },
  components: { VarButton: mn, VarIcon: He },
  props: wf,
  setup(e) {
    const n = S(null), t = S(0), o = N(() => e.vertical), r = S(0), a = S(0), i = S(!1), l = S(0), s = S(!1), { swipeItems: u, bindSwipeItems: d, length: c } = D$(), { popup: f, bindPopup: m } = Em(), {
      deltaX: g,
      deltaY: h,
      moveX: b,
      moveY: C,
      offsetX: T,
      offsetY: O,
      touching: $,
      direction: k,
      startTime: M,
      startTouch: P,
      moveTouch: B,
      endTouch: I
    } = br(), R = N(() => k.value === (e.vertical ? "vertical" : "horizontal"));
    let L = !1, U = -1;
    d({
      size: t,
      vertical: o
    }), y(m, null), fe(
      () => c.value,
      () => Mt(this, null, function* () {
        yield cn(), W(), ve();
      })
    ), f && fe(
      () => f.show.value,
      (le) => Mt(this, null, function* () {
        le ? (yield cn(), ve()) : J();
      })
    ), mt(ve), gr(J), Oo(ve);
    function G(le) {
      return u.find(({ index: ge }) => ge.value === le);
    }
    function j() {
      e.loop && (a.value >= 0 && G(c.value - 1).setTranslate(-r.value), a.value <= -(r.value - t.value) && G(0).setTranslate(r.value), a.value > -(r.value - t.value) && a.value < 0 && (G(c.value - 1).setTranslate(0), G(0).setTranslate(0)));
    }
    function X(le) {
      const ge = vn(le) ? le : Math.floor((a.value - t.value / 2) / -t.value), { loop: Ne } = e;
      return ge <= -1 ? Ne ? -1 : 0 : ge >= c.value ? Ne ? c.value : c.value - 1 : ge;
    }
    function Q(le) {
      const { loop: ge } = e;
      return le === -1 ? ge ? c.value - 1 : 0 : le === c.value ? ge ? 0 : c.value - 1 : le;
    }
    function Y(le) {
      return e.loop ? le < 0 ? c.value + le : le >= c.value ? le - c.value : le : st(le, 0, c.value - 1);
    }
    function ae() {
      return Mt(this, null, function* () {
        const le = a.value >= t.value, ge = a.value <= -r.value, Ne = 0, qe = -(r.value - t.value);
        i.value = !0, (le || ge) && (i.value = !0, a.value = ge ? Ne : qe, G(0).setTranslate(0), G(c.value - 1).setTranslate(0)), yield cn(), i.value = !1;
      });
    }
    function W() {
      L || (l.value = Y(V(e.initialIndex)), L = !0);
    }
    function de() {
      const { autoplay: le } = e;
      !le || c.value <= 1 || (J(), U = window.setTimeout(() => {
        Pe(), de();
      }, V(le)));
    }
    function J() {
      U && clearTimeout(U);
    }
    function q(le) {
      a.value = le, j();
    }
    function _(le) {
      return Mt(this, null, function* () {
        c.value <= 1 || !e.touchable || (P(le), J(), yield ae(), i.value = !0);
      });
    }
    function E(le) {
      const { touchable: ge, vertical: Ne } = e;
      !$.value || !ge || (B(le), R.value && (le.preventDefault(), q(a.value + (Ne ? C.value : b.value))));
    }
    function F() {
      if (!$.value || (I(), !R.value))
        return;
      const { vertical: le, onChange: ge } = e, Ne = le ? h.value < 0 : g.value < 0, qe = le ? O.value : T.value, Se = performance.now() - M.value <= N$ && qe >= V$ ? X(Ne ? l.value + 1 : l.value - 1) : X();
      i.value = !1, q(Se * -t.value);
      const ye = l.value;
      l.value = Q(Se), de(), ye !== l.value && y(ge, l.value);
    }
    function ve() {
      n.value && (i.value = !0, t.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = t.value * c.value, a.value = l.value * -t.value, u.forEach((le) => {
        le.setTranslate(0);
      }), de(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function Pe(le) {
      return Mt(this, null, function* () {
        if (c.value <= 1)
          return;
        W();
        const { loop: ge, onChange: Ne } = e, qe = l.value;
        if (l.value = Y(qe + 1), (le == null ? void 0 : le.event) !== !1 && y(Ne, l.value), yield ae(), qe === c.value - 1 && ge) {
          G(0).setTranslate(r.value), a.value = c.value * -t.value;
          return;
        }
        qe !== c.value - 1 && (a.value = l.value * -t.value);
      });
    }
    function te(le) {
      return Mt(this, null, function* () {
        if (c.value <= 1)
          return;
        W();
        const { loop: ge, onChange: Ne } = e, qe = l.value;
        if (l.value = Y(qe - 1), (le == null ? void 0 : le.event) !== !1 && y(Ne, l.value), yield ae(), qe === 0 && ge) {
          G(c.value - 1).setTranslate(-r.value), a.value = t.value;
          return;
        }
        qe !== 0 && (a.value = l.value * -t.value);
      });
    }
    function ue(le, ge) {
      if (c.value <= 1 || le === l.value)
        return;
      le = le < 0 ? 0 : le, le = le >= c.value ? c.value : le;
      const Ne = le > l.value ? Pe : te, qe = Math.abs(le - l.value);
      Array.from({ length: qe }).forEach((ce, Se) => {
        Ne({ event: Se === qe - 1 ? ge == null ? void 0 : ge.event : !1 });
      });
    }
    const we = (le) => {
      e.navigation === "hover" && (s.value = le);
    };
    function De(le) {
      return e.navigation !== "hover" ? "" : e.vertical ? Fr(`--navigation-vertical-${le}-animation`) : Fr(`--navigation-${le}-animation`);
    }
    return {
      length: c,
      index: l,
      swipeEl: n,
      trackSize: r,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: Fr,
      classes: z$,
      handleTouchstart: _,
      handleTouchmove: E,
      handleTouchend: F,
      next: Pe,
      prev: te,
      to: ue,
      resize: ve,
      toNumber: V,
      handleHovering: we,
      getNavigationAnimation: De
    };
  }
});
Sf.render = R$;
var bl = Sf;
re(bl);
const PI = bl;
var ho = bl;
function U$() {
  const { bindParent: e, index: n, parentProvider: t } = ln($f);
  return e || Tn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: t,
    bindSwipe: e
  };
}
const { name: H$, n: F$ } = ne("swipe-item");
function Y$(e, n) {
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
const Cf = ee({
  name: H$,
  setup() {
    const e = S(0), { swipe: n, bindSwipe: t, index: o } = U$(), { size: r, vertical: a } = n;
    t({
      index: o,
      setTranslate: l
    });
    function l(s) {
      e.value = s;
    }
    return {
      n: F$,
      size: r,
      vertical: a,
      translate: e
    };
  }
});
Cf.render = Y$;
var yl = Cf;
re(yl);
const OI = yl;
var po = yl, j$ = Object.defineProperty, Mu = Object.getOwnPropertySymbols, W$ = Object.prototype.hasOwnProperty, q$ = Object.prototype.propertyIsEnumerable, Bu = (e, n, t) => n in e ? j$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Du = (e, n) => {
  for (var t in n || (n = {}))
    W$.call(n, t) && Bu(e, t, n[t]);
  if (Mu)
    for (var t of Mu(n))
      q$.call(n, t) && Bu(e, t, n[t]);
  return e;
};
const G$ = Du(Du({
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
}, Te(wf, ["loop", "indicator", "onChange"])), Te(To, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), { name: X$, n: Nu, classes: K$ } = ne("image-preview"), Yr = 12, Vu = 200, Z$ = 350, Au = 200, J$ = 500, Q$ = ["onTouchstart"], _$ = ["src", "alt"];
function x$(e, n) {
  const t = se("var-swipe-item"), o = se("var-swipe"), r = se("var-icon"), a = se("var-popup");
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
                D("div", {
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
                  D("img", {
                    class: v(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, _$)
                ], 46, Q$)
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
              ie(i + 1) + " / " + ie(l),
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
      D(
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
const kf = ee({
  name: X$,
  components: {
    VarSwipe: ho,
    VarSwipeItem: po,
    VarPopup: dt,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: G$,
  setup(e) {
    const n = S(!1), t = S(1), o = S(0), r = S(0), a = S(), i = S(), l = S(!0), s = S(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: m, moveTouch: g, endTouch: h } = br(), b = N(() => {
      const { images: J, current: q, initialIndex: _ } = e;
      if (_ != null)
        return V(_);
      const E = J.findIndex((F) => F === q);
      return Math.max(E, 0);
    }), C = N(() => {
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
    function M() {
      t.value = V(e.zoom), l.value = !1, k.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Au);
    }
    function P() {
      t.value = 1, o.value = 0, r.value = 0, l.value = !0, k.prev = null, a.value = void 0, i.value = void 0;
    }
    function B(J) {
      return k.prev ? c.value <= Yr && performance.now() - f.value <= Vu && k.prev === J : !1;
    }
    function I(J) {
      return !J || !k.start || !k.prev ? !1 : c.value <= Yr && performance.now() - f.value < Z$ && (J === k.start || J.parentNode === k.start);
    }
    function R() {
      h(), window.clearTimeout(O), $ = !1, k.start = null;
    }
    function L(J) {
      if (h(), window.clearTimeout(O), $) {
        $ = !1;
        return;
      }
      const q = I(J.target);
      T = window.setTimeout(() => {
        q && Q(), k.start = null;
      }, Vu);
    }
    function U(J, q) {
      window.clearTimeout(T), window.clearTimeout(O);
      const _ = J.currentTarget;
      if (k.start = _, O = window.setTimeout(() => {
        $ = !0, y(e.onLongPress, q);
      }, J$), B(_)) {
        t.value > 1 ? P() : M();
        return;
      }
      m(J), k.prev = _;
    }
    function oe(J) {
      const { offsetWidth: q, offsetHeight: _ } = J, { naturalWidth: E, naturalHeight: F } = J.querySelector(`.${Nu("image")}`);
      return {
        width: q,
        height: _,
        imageRadio: F / E,
        rootRadio: _ / q,
        zoom: V(e.zoom)
      };
    }
    function G(J) {
      const { zoom: q, imageRadio: _, rootRadio: E, width: F, height: ve } = oe(J);
      if (!_)
        return 0;
      const Pe = _ > E ? ve / _ : F;
      return Math.max(0, (q * Pe - F) / 2) / q;
    }
    function j(J) {
      const { zoom: q, imageRadio: _, rootRadio: E, width: F, height: ve } = oe(J);
      if (!_)
        return 0;
      const Pe = _ > E ? ve : F * _;
      return Math.max(0, (q * Pe - ve) / 2) / q;
    }
    function X(J) {
      if (!k.prev)
        return;
      g(J);
      const q = J.currentTarget;
      if (c.value > Yr && window.clearTimeout(O), t.value > 1) {
        const _ = G(q), E = j(q);
        o.value = st(o.value + u.value, -_, _), r.value = st(r.value + d.value, -E, E);
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
    function ae(J) {
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
      isPreventDefault: C,
      initialIndex: b,
      popupShow: n,
      scale: t,
      translateX: o,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: Nu,
      classes: K$,
      handleTouchstart: U,
      handleTouchmove: X,
      handleTouchend: L,
      handleTouchcancel: R,
      close: Q,
      prev: Y,
      next: ae,
      to: W
    };
  }
});
kf.render = x$;
var No = kf, ew = Object.defineProperty, nw = Object.defineProperties, tw = Object.getOwnPropertyDescriptors, zu = Object.getOwnPropertySymbols, ow = Object.prototype.hasOwnProperty, rw = Object.prototype.propertyIsEnumerable, Lu = (e, n, t) => n in e ? ew(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, jo = (e, n) => {
  for (var t in n || (n = {}))
    ow.call(n, t) && Lu(e, t, n[t]);
  if (zu)
    for (var t of zu(n))
      rw.call(n, t) && Lu(e, t, n[t]);
  return e;
}, Ru = (e, n) => nw(e, tw(n));
let nt, ro = {};
function aw(e = {}) {
  return xe(e) ? Ru(jo({}, ro), { images: [e] }) : Ae(e) ? Ru(jo({}, ro), { images: e }) : jo(jo({}, ro), e);
}
function It(e) {
  if (!gt())
    return;
  It.close();
  const n = aw(e), t = We(n);
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
It.close = () => {
  if (nt != null) {
    const e = nt;
    nt = null, Ye().then(() => {
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
It.Component = No;
re(No);
re(No, It);
const TI = No;
var go = It;
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
const { name: iw, n: lw, classes: sw } = ne("sticky");
function uw(e, n) {
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
      D(
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
const Pf = ee({
  name: iw,
  props: _o,
  setup(e) {
    const n = S(null), t = S(null), o = S(!1), r = S("0px"), a = S("0px"), i = S("auto"), l = S("auto"), s = S("auto"), u = S("auto"), d = N(() => !e.disabled && e.cssMode), c = N(() => !e.disabled && !e.cssMode && o.value), f = N(() => Fe(e.offsetTop));
    let m;
    fe(() => e.disabled, b), an(C), gr(T), Oo(b), ut(() => window, "scroll", h);
    function g() {
      const { cssMode: O, disabled: $ } = e;
      if ($)
        return;
      let k = 0;
      if (m !== window) {
        const { top: L } = en(m);
        k = L;
      }
      const M = t.value, P = n.value, { top: B, left: I } = en(P), R = B - k;
      return R <= f.value ? (O || (i.value = `${P.offsetWidth}px`, l.value = `${P.offsetHeight}px`, r.value = `${k + f.value}px`, a.value = `${I}px`, s.value = `${M.offsetWidth}px`, u.value = `${M.offsetHeight}px`, o.value = !0), {
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
        o.value = !1, yield Xo(), g();
      });
    }
    function C() {
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
      n: lw,
      classes: sw,
      resize: b,
      toNumber: V
    };
  }
});
Pf.render = uw;
var $l = Pf;
re($l);
const II = $l;
var bo = $l;
const Of = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function dw() {
  const { bindChildren: e, length: n, childProviders: t } = sn(
    Of
  );
  return {
    length: n,
    indexAnchors: t,
    bindIndexAnchors: e
  };
}
function cw() {
  const { parentProvider: e, index: n, bindParent: t } = ln(
    Of
  );
  return t || Tn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: t
  };
}
const fw = {
  index: [Number, String]
}, { name: vw, n: mw, classes: hw } = ne("index-anchor");
function pw(e, n) {
  return p(), ke(Gt(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: he(() => [
      D(
        "div",
        ze({
          class: e.n()
        }, e.$attrs),
        [
          z(e.$slots, "default", {}, () => [
            Ee(
              ie(e.name),
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
const Tf = ee({
  name: vw,
  components: { VarSticky: bo },
  inheritAttrs: !1,
  props: fw,
  setup(e) {
    const n = S(0), t = S(!1), o = N(() => e.index), r = S(null), { index: a, indexBar: i, bindIndexBar: l } = cw(), { active: s, sticky: u, cssMode: d, stickyOffsetTop: c, zIndex: f } = i;
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
      n: mw,
      classes: hw,
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
Tf.render = pw;
var wl = Tf;
re(wl);
const EI = wl;
var Da = wl;
const gw = {
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
const { name: bw, n: yw, classes: $w } = ne("index-bar"), ww = ["onClick"];
function Sw(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n()),
      ref: "barEl"
    },
    [
      z(e.$slots, "default"),
      D(
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
            }, ie(t), 15, ww))),
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
  name: bw,
  props: gw,
  setup(e) {
    const n = S(""), t = S(null), o = S([]), r = S(), a = N(() => e.sticky), i = N(() => e.stickyCssMode || e.cssMode), l = N(() => Fe(e.stickyOffsetTop)), s = N(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = dw();
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
    })), pr(k), Wt(() => {
      m = !0, k();
    }), mt(() => {
      !m || r.value === void 0 || (T({
        anchorName: r.value,
        options: { event: !1 }
      }), m = !1);
    }), c(g);
    function h(P, B) {
      const I = ao(P) ? P.name.value : P;
      I === r.value || I === void 0 || (r.value = I, (B == null ? void 0 : B.event) !== !1 && y(e.onChange, I));
    }
    function b() {
      if (hi(f))
        return 0;
      const { top: P } = en(f), { scrollTop: B } = f, { top: I } = en(t.value);
      return B - P + I;
    }
    function C() {
      const P = lo(f), B = f === window ? document.body.scrollHeight : f.scrollHeight, I = b();
      d.forEach((R, L) => {
        const U = R.ownTop.value, oe = P - U + l.value - I, G = L === d.length - 1 ? B : d[L + 1].ownTop.value - R.ownTop.value;
        R.setDisabled(!0), oe >= 0 && oe < G && n.value === "" && (R.setDisabled(!1), h(R));
      });
    }
    function T(P) {
      return Wo(this, arguments, function* ({ anchorName: B, manualCall: I = !1, options: R }) {
        if (I && y(e.onClick, B), B === r.value && !m)
          return;
        const L = d.find(({ name: j }) => B === j.value);
        if (!L)
          return;
        const U = b(), oe = L.ownTop.value - l.value + U, G = yi(f);
        n.value = B, h(B, R), yield so(f, {
          left: G,
          top: oe,
          animation: Wd,
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
      f.addEventListener("scroll", C);
    }
    function k() {
      f.removeEventListener("scroll", C);
    }
    function M(P, B) {
      io(() => T({ anchorName: P, options: B }));
    }
    return {
      barEl: t,
      active: r,
      zIndex: s,
      anchorNameList: o,
      n: yw,
      classes: $w,
      toNumber: V,
      scrollTo: M,
      anchorClick: T
    };
  }
});
If.render = Sw;
var Sl = If;
re(Sl);
const MI = Sl;
var Na = Sl, Cw = Object.defineProperty, Hu = Object.getOwnPropertySymbols, kw = Object.prototype.hasOwnProperty, Pw = Object.prototype.propertyIsEnumerable, Fu = (e, n, t) => n in e ? Cw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ow = (e, n) => {
  for (var t in n || (n = {}))
    kw.call(n, t) && Fu(e, t, n[t]);
  if (Hu)
    for (var t of Hu(n))
      Pw.call(n, t) && Fu(e, t, n[t]);
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
])), { name: Iw, n: Ew, classes: Mw } = ne("input"), Bw = ["placeholder", "enterkeyhint"], Dw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Nw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Vw(e, n) {
  const t = se("var-field-decorator"), o = se("var-form-details");
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
        xo({
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
            }, null, 14, Bw)) : x("v-if", !0),
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
            }, null, 46, Nw))
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
      }, xo({
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
const Ef = ee({
  name: Iw,
  components: {
    VarFormDetails: hn,
    VarFieldDecorator: mo
  },
  props: Tw,
  setup(e) {
    const n = Sd(), t = S(null), o = S(!1), r = S(!1), { bindForm: a, form: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = En(), c = N(() => e.disabled || e.readonly ? "" : "text"), f = N(() => e.type === "number" ? "text" : e.type), m = N(() => {
      const { maxlength: Y, modelValue: ae } = e;
      return Y ? Fn(ae) ? `0 / ${Y}` : `${String(ae).length}/${Y}` : "";
    }), g = N(() => {
      const { hint: Y, blurColor: ae, focusColor: W } = e;
      if (!Y)
        return l.value ? "var(--field-decorator-error-color)" : o.value ? W || "var(--field-decorator-focus-color)" : ae || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
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
        const { validateTrigger: ae, rules: W, modelValue: de } = e;
        s(ae, Y, W, de);
      });
    }
    function C(Y) {
      o.value = !0, y(e.onFocus, Y), b("onFocus");
    }
    function T(Y) {
      o.value = !1, y(e.onBlur, Y), b("onBlur");
    }
    function O(Y) {
      const ae = Y.target;
      let { value: W } = ae;
      return e.type === "number" && (W = R(W)), U(L(W));
    }
    function $() {
      r.value = !0;
    }
    function k(Y) {
      r.value && (r.value = !1, Y.target.dispatchEvent(new Event("input")));
    }
    function M(Y) {
      if (r.value)
        return;
      const ae = O(Y);
      y(e["onUpdate:modelValue"], ae), y(e.onInput, ae, Y), b("onInput");
    }
    function P(Y) {
      const ae = O(Y);
      y(e.onChange, ae, Y), b("onChange");
    }
    function B() {
      const { disabled: Y, readonly: ae, clearable: W, onClear: de } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || Y || ae || !W || (y(e["onUpdate:modelValue"], ""), y(de, ""), b("onClear"));
    }
    function I(Y) {
      const { disabled: ae, onClick: W } = e;
      i != null && i.disabled.value || ae || (y(W, Y), b("onClick"));
    }
    function R(Y) {
      const ae = Y.indexOf("-"), W = Y.indexOf(".");
      return ae > -1 && (Y = ae === 0 ? "-" + Y.replace(/-/g, "") : Y.replace(/-/g, "")), W > -1 && (Y = Y.slice(0, W + 1) + Y.slice(W).replace(/\./g, "")), Y.replace(/[^-0-9.]/g, "");
    }
    function L(Y) {
      return e.modelModifiers.trim ? Y.trim() : Y;
    }
    function U(Y) {
      return e.maxlength ? Y.slice(0, V(e.maxlength)) : Y;
    }
    function oe(Y) {
      const { disabled: ae } = e;
      i != null && i.disabled.value || ae || Y.target === t.value || (X(), Y.preventDefault());
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
      n: Ew,
      classes: Mw,
      isEmpty: Fn,
      handleFocus: C,
      handleBlur: T,
      handleInput: M,
      handleChange: P,
      handleClear: B,
      handleClick: I,
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
Ef.render = Vw;
var Cl = Ef;
re(Cl);
const BI = Cl;
var hr = Cl;
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
  onClick: A()
}, { name: zw, n: Lw, classes: Rw } = ne("link");
function Uw(e, n) {
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
const Mf = ee({
  name: zw,
  props: Aw,
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
      n: Lw,
      classes: Rw,
      handleClick: o,
      toSizeUnit: Ce
    };
  }
});
Mf.render = Uw;
var kl = Mf;
re(kl);
const DI = kl;
var Va = kl;
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
  onLoad: A(),
  "onUpdate:loading": A(),
  "onUpdate:error": A()
}, Bf = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Fw() {
  const { bindChildren: e, childProviders: n, length: t } = sn(
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
  const { parentProvider: e, bindParent: n, index: t } = ln(
    Bf
  );
  return n || Tn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: t,
    tabsItems: e,
    bindTabsItems: n
  };
}
function jw() {
  const { childProviders: e, bindChildren: n, length: t } = sn(Df);
  return {
    length: t,
    lists: e,
    bindLists: n
  };
}
function Ww() {
  const { parentProvider: e, bindParent: n, index: t } = ln(Df);
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
const { name: Gw, n: Xw, classes: Kw } = ne("list");
function Zw(e, n) {
  const t = se("var-loading"), o = Ue("ripple");
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
          D(
            "div",
            {
              class: v(e.n("loading"))
            },
            [
              D(
                "div",
                {
                  class: v(e.n("loading-text"))
                },
                ie((r = e.loadingText) != null ? r : e.pack.listLoadingText),
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
          D(
            "div",
            {
              class: v(e.n("finished"))
            },
            ie((r = e.finishedText) != null ? r : e.pack.listFinishedText),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : x("v-if", !0),
      e.error ? z(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Ie((p(), w(
            "div",
            {
              class: v(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              Ee(
                ie((r = e.errorText) != null ? r : e.pack.listErrorText),
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
      D(
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
const Nf = ee({
  name: Gw,
  directives: { Ripple: Je },
  components: { VarLoading: Ut },
  props: Hw,
  setup(e) {
    const n = S(null), t = S(null), { tabItem: o, bindTabItem: r } = Ww();
    let a;
    y(r, {}), o && fe(() => o.current.value, u), fe(() => [e.loading, e.error, e.finished], u), an(() => {
      a = ct(n.value), a.addEventListener("scroll", u), e.immediateCheck && u();
    }), gr(s);
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
      return qw(this, null, function* () {
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
      n: Xw,
      classes: Kw
    };
  }
});
Nf.render = Zw;
var Pl = Nf;
re(Pl);
const NI = Pl;
var Aa = Pl;
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
  n: Yu
} = ne("loading-bar");
var xw = ee({
  name: Qw,
  props: Jw,
  setup(e) {
    return () => Z("div", {
      class: _w(Yu(), [e.error, Yu("--error")]),
      style: {
        zIndex: wn.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: Ce(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Ce(e.top)
      }
    }, null);
  }
});
let Vf, Af, Mr, zf, ju, Lf = {};
const eS = {
  value: 0,
  opacity: 0,
  error: !1
}, tn = We(eS), nS = (e) => {
  Object.assign(tn, e);
}, tS = (e) => {
  Object.assign(tn, e), Lf = e;
}, oS = () => {
  Object.keys(Lf).forEach((e) => {
    tn[e] !== void 0 && (tn[e] = void 0);
  });
}, Rf = () => {
  ju || (ju = !0, Kt(xw, tn));
}, Ol = () => {
  Vf = window.setTimeout(() => {
    if (tn.value >= 95)
      return;
    let e = Math.random();
    tn.value < 70 && (e = Math.round(5 * Math.random())), tn.value += e, Ol();
  }, 200);
}, Tl = () => {
  window.clearTimeout(Af), window.clearTimeout(Vf), window.clearTimeout(Mr), window.clearTimeout(zf);
}, rS = () => {
  Tl(), tn.error = !1, tn.value = 0, Rf(), Mr = window.setTimeout(() => {
    tn.opacity = 1;
  }, 200), Ol();
}, Uf = () => {
  Tl(), tn.value = 100, Mr = window.setTimeout(() => {
    tn.opacity = 0, Af = window.setTimeout(() => {
      tn.error = !1;
    }, 250);
  }, 300);
}, aS = () => {
  Tl(), tn.error = !0, tn.value === 100 && (tn.value = 0), Rf(), Mr = window.setTimeout(() => {
    tn.opacity = 1;
  }, 200), Ol(), zf = window.setTimeout(Uf, 300);
}, Hf = {
  start: rS,
  finish: Uf,
  error: aS,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: nS,
  setDefaultOptions: tS,
  resetDefaultOptions: oS
}, VI = Hf;
var za = Hf;
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
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
}, { name: lS, n: sS, classes: uS } = ne("menu");
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
            Ie(D(
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
const Ff = ee({
  name: lS,
  props: iS,
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
    } = mf(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: gn,
      toSizeUnit: Ce,
      n: sS,
      classes: uS,
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
Ff.render = dS;
var Il = Ff;
re(Il);
const AI = Il;
var yo = Il;
const Yf = Symbol("SELECT_BIND_OPTION_KEY");
function cS() {
  const { length: e, childProviders: n, bindChildren: t } = sn(Yf);
  return {
    length: e,
    options: n,
    bindOptions: t
  };
}
function fS() {
  const { index: e, parentProvider: n, bindParent: t } = ln(Yf);
  return t || Tn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: t
  };
}
const vS = {
  label: {},
  value: {}
}, { name: mS, n: hS, classes: pS } = ne("option");
function gS(e, n) {
  const t = se("var-checkbox"), o = se("var-hover-overlay"), r = Ue("ripple"), a = Ue("hover");
  return Ie((p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: H({
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = (...i) => e.handleClick && e.handleClick(...i))
    },
    [
      D(
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
      D(
        "div",
        {
          class: v(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        [
          z(e.$slots, "default", {}, () => [
            Ee(
              ie(e.label),
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
const jf = ee({
  name: mS,
  directives: { Ripple: Je, Hover: In },
  components: {
    VarCheckbox: ir,
    VarHoverOverlay: zn
  },
  props: vS,
  setup(e) {
    const n = S(!1), t = N(() => n.value), o = N(() => e.label), r = N(() => e.value), { select: a, bindSelect: i } = fS(), { multiple: l, focusColor: s, onSelect: u, computeLabel: d } = a, { hovering: c, handleHovering: f } = Wn(), m = {
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
    function b(C) {
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
      handleClick: g,
      handleSelect: h
    };
  }
});
jf.render = gS;
var El = jf;
re(El);
const zI = El;
var La = El;
const bS = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  onClick: A(),
  "onUpdate:show": A()
}, {
  name: yS,
  n: Wu
} = ne("overlay");
var Ml = ee({
  name: yS,
  inheritAttrs: !1,
  props: bS,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const {
      zIndex: o
    } = Io(() => e.show, 1), {
      disabled: r
    } = Zt();
    yr(() => e.show, () => e.lockScroll);
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
re(Ml);
const LI = Ml;
var Ra = Ml;
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
  onChange: A(),
  "onUpdate:current": A(),
  "onUpdate:size": A()
}, { name: wS, n: SS, classes: CS } = ne("pagination"), kS = ["item-mode", "onClick"];
function PS(e, n) {
  const t = se("var-icon"), o = se("var-input"), r = se("var-cell"), a = se("var-menu"), i = Ue("ripple");
  return p(), w(
    "ul",
    {
      class: v(e.n())
    },
    [
      Ie((p(), w(
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
          D("span", null, [
            Ee(
              " / " + ie(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            D(
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
        Ge(e.pageList, (l, s) => Ie((p(), w("li", {
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
          Ee(
            ie(l),
            1
            /* TEXT */
          )
        ], 10, kS)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Ie((p(), w(
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
                Ge(e.sizeOption, (l, s) => Ie((p(), ke(r, {
                  class: v(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                  key: s,
                  onClick: (u) => e.clickSize(l)
                }, {
                  default: he(() => [
                    Ee(
                      ie(l) + ie(e.pack.paginationItem) + " / " + ie(e.pack.paginationPage),
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
              D(
                "div",
                {
                  class: v(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
                  onClick: n[5] || (n[5] = On((...l) => e.showMenu && e.showMenu(...l), ["stop"]))
                },
                [
                  D(
                    "span",
                    null,
                    ie(e.size) + ie(e.pack.paginationItem) + " / " + ie(e.pack.paginationPage),
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
          Ee(
            ie(e.pack.paginationJump) + " ",
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
        ie(e.totalText),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Wf = ee({
  name: wS,
  components: {
    VarMenu: yo,
    VarIcon: He,
    VarCell: ar,
    VarInput: hr
  },
  directives: { Ripple: Je },
  props: $S,
  setup(e) {
    const n = S(!1), t = S(""), o = S("1"), r = S(!1), a = S(!1), i = S(V(e.current) || 1), l = S(V(e.size) || 10), s = S([]), u = N(() => Math.ceil(e.maxPagerCount / 2)), d = N(() => Math.ceil(V(e.total) / V(l.value))), c = N(() => {
      const $ = l.value * (i.value - 1) + 1, k = Math.min(l.value * i.value, V(e.total));
      return [$, k];
    }), f = N(() => e.showTotal ? e.showTotal(V(e.total), c.value) : "");
    fe([() => e.current, () => e.size], ([$, k]) => {
      i.value = V($) || 1, l.value = V(k || 10);
    }), fe(
      [i, l, d],
      ([$, k, M], [P, B]) => {
        let I = [];
        const { maxPagerCount: R, total: L, onChange: U } = e, oe = Math.ceil(V(L) / V(B)), G = M - (R - u.value) - 1;
        if (o.value = `${$}`, M - 2 > R) {
          if (P === void 0 || M !== oe)
            for (let j = 2; j < R + 2; j++)
              I.push(j);
          if ($ <= R && $ < G) {
            I = [];
            for (let j = 1; j < R + 1; j++)
              I.push(j + 1);
            r.value = !0, a.value = !1;
          }
          if ($ > R && $ < G) {
            I = [];
            for (let j = 1; j < R + 1; j++)
              I.push($ + j - u.value);
            r.value = $ === 2 && R === 1, a.value = !1;
          }
          if ($ >= G) {
            I = [];
            for (let j = 1; j < R + 1; j++)
              I.push(M - (R - j) - 1);
            r.value = !1, a.value = !0;
          }
          I = [1, "...", ...I, "...", M];
        } else
          for (let j = 1; j <= M; j++)
            I.push(j);
        s.value = I, P != null && M > 0 && y(U, $, k), y(e["onUpdate:current"], $), y(e["onUpdate:size"], k);
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
    function C($) {
      l.value = $, n.value = !1;
      const k = T(i.value);
      o.value = String(k), i.value = k;
    }
    function T($) {
      return $ > d.value ? d.value : $ < 1 ? 1 : $;
    }
    function O($, k, M) {
      M.target.blur();
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
      n: SS,
      classes: CS,
      getMode: g,
      isHideEllipsis: m,
      clickItem: h,
      showMenu: b,
      clickSize: C,
      setPage: O,
      toNumber: V,
      formatElevation: gn
    };
  }
});
Wf.render = PS;
var Bl = Wf;
re(Bl);
const RI = Bl;
var Ua = Bl;
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
  onClick: A()
}, { name: TS, n: IS, classes: ES } = ne("paper");
function MS(e, n) {
  const t = Ue("ripple");
  return Ie((p(), w(
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
const qf = ee({
  name: TS,
  directives: { Ripple: Je },
  props: OS,
  setup(e) {
    function n(t) {
      y(e.onClick, t);
    }
    return {
      n: IS,
      classes: ES,
      formatElevation: gn,
      toSizeUnit: Ce,
      handleClick: n
    };
  }
});
qf.render = MS;
var Dl = qf;
re(Dl);
const UI = Dl;
var Ha = Dl, BS = Object.defineProperty, qu = Object.getOwnPropertySymbols, DS = Object.prototype.hasOwnProperty, NS = Object.prototype.propertyIsEnumerable, Gu = (e, n, t) => n in e ? BS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, VS = (e, n) => {
  for (var t in n || (n = {}))
    DS.call(n, t) && Gu(e, t, n[t]);
  if (qu)
    for (var t of qu(n))
      NS.call(n, t) && Gu(e, t, n[t]);
  return e;
};
const AS = VS({
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
])), { name: zS, n: LS, classes: RS } = ne("picker"), Xu = 300, US = 15, Ku = 200, HS = 1e3;
let Zu = 0;
const FS = ["onTouchstartPassive", "onTouchmove", "onTouchend"], YS = ["onTransitionend"], jS = ["onClick"];
function WS(e, n) {
  const t = se("var-button");
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
        D(
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
                        Ee(
                          ie((o = e.cancelButtonText) != null ? o : e.pack.pickerCancelButtonText),
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
                    D(
                      "div",
                      {
                        class: v(e.n("title"))
                      },
                      ie((o = e.title) != null ? o : e.pack.pickerTitle),
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
                        Ee(
                          ie((o = e.confirmButtonText) != null ? o : e.pack.pickerConfirmButtonText),
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
            D(
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
                    D("div", {
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
                          D(
                            "div",
                            {
                              class: v(e.classes(e.n("text"), r.textClassName))
                            },
                            ie(r[e.getOptionKey("text")]),
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
                D(
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
                D(
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
const Gf = ee({
  name: zS,
  components: {
    VarButton: mn,
    VarPopup: dt
  },
  inheritAttrs: !1,
  props: AS,
  setup(e) {
    const n = Lt(e, "modelValue"), t = S([]), o = N(() => Fe(e.optionHeight)), r = N(() => Fe(e.optionCount)), a = N(() => r.value * o.value / 2 - o.value / 2), i = N(() => r.value * o.value), { prevY: l, moveY: s, dragging: u, startTouch: d, moveTouch: c, endTouch: f } = br();
    let m = [];
    k(), fe(() => e.columns, k, { deep: !0 }), fe(() => n.value, M);
    function g(E) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[E];
    }
    function h(E) {
      var F;
      return (F = E[g("value")]) != null ? F : E[g("text")];
    }
    function b(E) {
      m = [...E];
    }
    function C(E) {
      return E.map((F) => {
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
    function T(E) {
      const F = [];
      return O(F, E), F;
    }
    function O(E, F) {
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
        E.push(Pe), oe(Pe), O(E, (ve = Pe.column[Pe.index][g("children")]) != null ? ve : []);
      }
    }
    function $(E) {
      var F;
      t.value.splice(t.value.indexOf(E) + 1), O(t.value, (F = E.column[E.index][g("children")]) != null ? F : []);
    }
    function k() {
      t.value = e.cascade ? T(e.columns) : C(e.columns), M();
    }
    function M() {
      t.value.forEach((F, ve) => {
        const Pe = F.column.findIndex((te) => n.value[ve] === h(te));
        F.index = Pe === -1 ? 0 : Pe, oe(F);
      });
      const { indexes: E } = U();
      b(E);
    }
    function P(E, F) {
      F.scrollEl = E;
    }
    function B(E) {
      y(e["onUpdate:show"], E);
    }
    function I(E) {
      const F = a.value - E.column.length * o.value, ve = o.value + a.value;
      E.translate = st(E.translate, F, ve);
    }
    function R(E, F) {
      const ve = Math.round((a.value - F) / o.value);
      return rm(ve, E.column);
    }
    function L(E) {
      return E.translate = a.value - E.index * o.value, E.translate;
    }
    function U() {
      const E = [], F = [], ve = [];
      return t.value.forEach(({ column: Pe, index: te }) => {
        const ue = Pe[te];
        E.push(h(ue)), F.push(te), ve.push(ue);
      }), {
        values: E,
        indexes: F,
        options: ve
      };
    }
    function oe(E, F = 0) {
      L(E), E.duration = F;
    }
    function G(E, F, ve) {
      E.translate += Math.abs(F / ve) / 3e-3 * (F < 0 ? -1 : 1);
    }
    function j(E, F) {
      u.value || (E.index = F, oe(E, Ku));
    }
    function X(E, F) {
      F.touching = !0, F.translate = Vr(F.scrollEl), d(E);
    }
    function Q(E, F) {
      if (!F.touching)
        return;
      c(E), F.scrolling = !1, F.duration = 0, F.prevY = l.value, F.translate += s.value, I(F);
      const ve = performance.now();
      ve - F.momentumTime > Xu && (F.momentumTime = ve, F.momentumPrevY = F.translate);
    }
    function Y(E) {
      f(), E.touching = !1, E.prevY = 0;
      const F = E.translate - E.momentumPrevY, ve = performance.now() - E.momentumTime, Pe = Math.abs(F) >= US && ve <= Xu, te = E.translate;
      Pe && G(E, F, ve), E.index = R(E, E.translate), oe(E, Pe ? HS : Ku), E.scrolling = E.translate !== te, E.scrolling || de(E);
    }
    function ae(E) {
      E.scrolling = !1, de(E);
    }
    function W() {
      const { indexes: E } = U();
      return E.every((F, ve) => F === m[ve]);
    }
    function de(E) {
      const { cascade: F, onChange: ve } = e;
      if (W())
        return;
      F && $(E);
      const Pe = t.value.some((le) => le.scrolling), te = t.value.some((le) => le.touching);
      if (Pe || te)
        return;
      const { values: ue, indexes: we, options: De } = U();
      b(we), y(ve, ue, we, De), n.value = ue;
    }
    function J() {
      if (e.cascade) {
        const E = t.value.find((F) => F.scrolling);
        E && (E.index = R(E, Vr(E.scrollEl)), E.scrolling = !1, oe(E), $(E));
      } else
        t.value.forEach((E) => {
          E.index = R(E, Vr(E.scrollEl)), oe(E);
        });
    }
    function q() {
      J();
      const { values: E, indexes: F, options: ve } = U();
      b(F), y(e.onConfirm, E, F, ve);
    }
    function _() {
      J();
      const { values: E, indexes: F, options: ve } = U();
      b(F), y(e.onCancel, E, F, ve);
    }
    return {
      pack: nn,
      optionHeight: o,
      optionCount: r,
      scrollColumns: t,
      columnHeight: i,
      center: a,
      Transition: je,
      n: LS,
      classes: RS,
      setScrollEl: P,
      getOptionKey: g,
      getValue: h,
      handlePopupUpdateShow: B,
      handleTouchstart: X,
      handleTouchmove: Q,
      handleTouchend: Y,
      handleTransitionend: ae,
      confirm: q,
      cancel: _,
      handleClick: j
    };
  }
});
Gf.render = WS;
var Vo = Gf;
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
const HI = Vo;
var Fa = Ao;
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
}, Zn = 100, Hn = 20, Ju = 2 * Math.PI * Hn, { name: GS, n: XS, classes: KS } = ne("progress"), ZS = ["viewBox"], JS = { key: 0 }, QS = ["id"], _S = ["offset", "stop-color"], xS = ["d", "stroke-width", "stroke-dasharray"], eC = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
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
          D(
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
                  D(
                    "div",
                    {
                      class: v(e.classes(e.n(`linear--${e.type}`))),
                      style: H({ background: e.progressColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  ),
                  D(
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
                Ee(
                  ie(e.linearProps.roundValue),
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
            e.isPlainObject(e.color) ? (p(), w("defs", JS, [
              D("linearGradient", {
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
                  }, null, 8, _S))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, QS)
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
            }, null, 14, xS)) : x("v-if", !0),
            D("path", {
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
            }, null, 14, eC)
          ], 10, ZS)),
          e.label ? (p(), w(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
            },
            [
              z(e.$slots, "default", {}, () => [
                Ee(
                  ie(e.circleProps.roundValue),
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
const Xf = ee({
  name: GS,
  props: qS,
  setup(e) {
    const n = Sd(), t = N(() => {
      const i = V(e.value), l = i > Zn ? Zn : i, s = i > Zn ? Zn : Math.round(i);
      return {
        width: `${l}%`,
        roundValue: `${s}%`
      };
    }), o = N(() => {
      const { size: i, lineWidth: l, value: s } = e, u = Hn / (1 - Fe(l) / Fe(i)) * 2, d = `0 0 ${u} ${u}`, c = V(s) > Zn ? Zn : Math.round(V(s)), f = `${(Zn - c) / Zn * Ju}`, m = Fe(l) / Fe(i) * u, g = 0, h = -Hn, b = 0, C = -2 * Hn, T = `M ${u / 2} ${u / 2} m ${g} ${h} a ${Hn} ${Hn} 
        0 1 1 ${b} ${-C} a ${Hn} ${Hn} 0 1 1 ${-b} ${C}`;
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
      n: XS,
      classes: KS,
      toSizeUnit: Ce,
      isPlainObject: ao
    };
  }
});
Xf.render = nC;
var Nl = Xf;
re(Nl);
const FI = Nl;
var Ya = Nl;
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
const { name: oC, n: _u, classes: rC } = ne("pull-refresh"), xu = 150;
function aC(e, n) {
  const t = se("var-icon");
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
      D(
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
const Kf = ee({
  name: oC,
  components: { VarIcon: He },
  props: tC,
  setup(e) {
    const n = S(0), t = S(null), o = S(null), r = S(0), a = S("-125%"), i = S("arrow-down"), l = S("default"), s = S(!1), u = N(() => Math.abs(2 * n.value)), d = N(() => l.value === "success"), c = N(
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
    ), an(M), ut(t, "touchmove", $);
    function C(B) {
      return Qu(this, null, function* () {
        if (i.value !== B)
          return i.value = B, new Promise((I) => {
            window.setTimeout(I, xu);
          });
      });
    }
    function T(B) {
      ("classList" in m ? m : document.body).classList[B](`${_u()}--lock`);
    }
    function O(B) {
      if (n.value === 0) {
        const { width: I } = en(o.value);
        n.value = -(I + I * 0.25);
      }
      h = B.touches[0].clientY, b = 0, g = ct(B.target);
    }
    function $(B) {
      if (!c.value || !g || g !== m && lo(g) > 0)
        return;
      const I = lo(m);
      if (I > 0)
        return;
      const R = I === 0;
      b = B.touches[0].clientY - h, R && b >= 0 && B.preventDefault(), l.value !== "pulling" && (l.value = "pulling", r.value = B.touches[0].clientY), R && vn(a.value) && a.value > n.value && T("add");
      const U = (B.touches[0].clientY - r.value) / 2 + n.value;
      a.value = U >= u.value ? u.value : U, C(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function k() {
      return Qu(this, null, function* () {
        c.value && (s.value = !0, V(a.value) >= u.value * 0.2 ? (yield C("refresh"), l.value = "loading", a.value = u.value * 0.3, y(e["onUpdate:modelValue"], !0), Ye(() => {
          y(e.onRefresh);
        }), T("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, T("remove");
        }, V(e.animationDuration))), g = null);
      });
    }
    function M() {
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
      classes: rC,
      touchStart: O,
      touchMove: $,
      touchEnd: k
    };
  }
});
Kf.render = aC;
var Vl = Kf;
re(Vl);
const YI = Vl;
var ja = Vl;
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
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, Zf = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function lC() {
  const { bindChildren: e, childProviders: n, length: t } = sn(
    Zf
  );
  return {
    length: t,
    radios: n,
    bindRadios: e
  };
}
function sC() {
  const { bindParent: e, parentProvider: n, index: t } = ln(Zf);
  return {
    index: t,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: uC, n: dC, classes: cC } = ne("radio");
function fC(e, n) {
  const t = se("var-icon"), o = se("var-hover-overlay"), r = se("var-form-details"), a = Ue("ripple"), i = Ue("hover");
  return p(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      D(
        "div",
        ze({
          class: e.n(),
          onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Ie((p(), w(
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
          D(
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
const Jf = ee({
  name: uC,
  directives: { Ripple: Je, Hover: In },
  components: {
    VarIcon: He,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  inheritAttrs: !1,
  props: iC,
  setup(e) {
    const n = Lt(e, "modelValue"), t = N(() => n.value === e.checkedValue), o = S(!1), { radioGroup: r, bindRadioGroup: a } = sC(), { hovering: i, handleHovering: l } = Wn(), { form: s, bindForm: u } = Mn(), {
      errorMessage: d,
      validateWithTrigger: c,
      validate: f,
      // expose
      resetValidation: m
    } = En(), g = {
      sync: T,
      validate: $,
      resetValidation: m,
      reset: O
    };
    y(a, g), y(u, g);
    function h(M) {
      Ye(() => {
        const { validateTrigger: P, rules: B, modelValue: I } = e;
        c(P, M, B, I);
      });
    }
    function b(M) {
      const { checkedValue: P, onChange: B } = e;
      r && n.value === P || (n.value = M, y(B, n.value), r == null || r.onToggle(P), h("onChange"));
    }
    function C(M) {
      const { disabled: P, readonly: B, uncheckedValue: I, checkedValue: R, onClick: L } = e;
      s != null && s.disabled.value || P || (y(L, M), !(s != null && s.readonly.value || B) && (o.value = !0, b(t.value ? I : R)));
    }
    function T(M) {
      const { checkedValue: P, uncheckedValue: B } = e;
      n.value = M === P ? P : B;
    }
    function O() {
      n.value = e.uncheckedValue, m();
    }
    function $() {
      return f(e.rules, e.modelValue);
    }
    function k(M) {
      const { uncheckedValue: P, checkedValue: B } = e;
      ![P, B].includes(M) && (M = t.value ? P : B), b(M);
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
      reset: O,
      validate: $,
      resetValidation: m
    };
  }
});
Jf.render = fC;
var Al = Jf;
re(Al);
const jI = Al;
var Wa = Al;
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
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: mC, n: hC, classes: pC } = ne("radio-group");
function gC(e, n) {
  const t = se("var-form-details");
  return p(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      D(
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
const Qf = ee({
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
    } = En(), u = N(() => a.value), d = {
      onToggle: m,
      validate: g,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    fe(() => e.modelValue, f), fe(() => n.value, f), y(r, d), o(d);
    function c(b) {
      Ye(() => {
        const { validateTrigger: C, rules: T, modelValue: O } = e;
        i(C, b, T, O);
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
      n: hC,
      classes: pC,
      reset: h,
      validate: g,
      resetValidation: s
    };
  }
});
Qf.render = gC;
var zl = Qf;
re(zl);
const WI = zl;
var qa = zl;
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
}, { name: yC, n: _t } = ne("rate"), $C = ["onClick"];
function wC(e, n) {
  const t = se("var-icon"), o = se("var-hover-overlay"), r = se("var-form-details"), a = Ue("ripple"), i = Ue("hover");
  return p(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      D(
        "div",
        {
          class: v(e.n())
        },
        [
          (p(!0), w(
            Ve,
            null,
            Ge(e.toNumber(e.count), (l) => Ie((p(), w("div", {
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
      Z(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const _f = ee({
  name: yC,
  components: {
    VarIcon: He,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Je, Hover: In },
  props: bC,
  setup(e) {
    const n = S(-1), { form: t, bindForm: o } = Mn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = En(), { hovering: s } = Wn();
    let u = Number(e.modelValue);
    y(o, {
      reset: O,
      validate: h,
      resetValidation: l
    });
    function c($) {
      const { count: k, gap: M } = e;
      return {
        color: m($).color,
        marginRight: $ !== V(k) ? Ce(M) : 0
      };
    }
    function f($) {
      const { name: k, color: M } = m($);
      return {
        [_t("content")]: !0,
        [_t("--disabled")]: (t == null ? void 0 : t.disabled.value) || e.disabled,
        [_t("--error")]: r.value,
        [_t("--primary")]: k !== e.emptyIcon && !M
      };
    }
    function m($) {
      const {
        modelValue: k,
        disabled: M,
        disabledColor: P,
        color: B,
        half: I,
        emptyColor: R,
        icon: L,
        halfIcon: U,
        emptyIcon: oe,
        namespace: G,
        halfIconNamespace: j,
        emptyIconNamespace: X
      } = e;
      let Q = B;
      return (M || t != null && t.disabled.value) && (Q = P), $ <= V(k) ? { color: Q, name: L, namespace: G } : I && $ <= V(k) + 0.5 ? { color: Q, name: U, namespace: j } : {
        color: M || t != null && t.disabled.value ? P : R,
        name: oe,
        namespace: X
      };
    }
    function g($, k) {
      const { half: M, clearable: P } = e, { offsetWidth: B } = k.target;
      M && k.offsetX <= Math.floor(B / 2) && ($ -= 0.5), u === $ && P && ($ = 0), u = $, y(e["onUpdate:modelValue"], $);
    }
    function h() {
      return i(e.rules, V(e.modelValue));
    }
    function b() {
      return Ye(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function C($, k) {
      const { readonly: M, disabled: P, onChange: B } = e;
      M || P || t != null && t.disabled.value || t != null && t.readonly.value || (g($, k), y(B, $), b());
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
      handleClick: C,
      createHoverHandler: T,
      reset: O,
      validate: h,
      resetValidation: l,
      toSizeUnit: Ce,
      toNumber: V,
      n: _t
    };
  }
});
_f.render = wC;
var Ll = _f;
re(Ll);
const qI = Ll;
var Ga = Ll;
const SC = (e) => (ht(""), e = e(), pt(), e), CC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, kC = /* @__PURE__ */ SC(() => /* @__PURE__ */ D(
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
const xf = ee({});
xf.render = OC;
var TC = xf;
const IC = (e) => (ht(""), e = e(), pt(), e), EC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, MC = /* @__PURE__ */ IC(() => /* @__PURE__ */ D(
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
const ev = ee({});
ev.render = DC;
var NC = ev;
const VC = (e) => (ht(""), e = e(), pt(), e), AC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, zC = /* @__PURE__ */ VC(() => /* @__PURE__ */ D(
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
const nv = ee({});
nv.render = RC;
var UC = nv;
const { n: HC, classes: FC } = ne("result");
function YC(e, n) {
  return p(), w(
    Ve,
    null,
    [
      D(
        "span",
        {
          class: v(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      D(
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
      D(
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
      D(
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
      D(
        "span",
        {
          class: v(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      D(
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
const tv = ee({
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
      toNumber: V
    };
  }
});
tv.render = YC;
var jC = tv;
const WC = (e) => (ht(""), e = e(), pt(), e), qC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, GC = /* @__PURE__ */ WC(() => /* @__PURE__ */ D(
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
const ov = ee({});
ov.render = KC;
var ZC = ov;
const JC = (e) => (ht(""), e = e(), pt(), e), QC = { viewBox: "-4 -4 32 32" }, _C = /* @__PURE__ */ JC(() => /* @__PURE__ */ D(
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
const rv = ee({});
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
}, { name: ok, n: rk, classes: ak } = ne("result");
function ik(e, n) {
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
            D(
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
          ie(e.title),
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
          ie(e.description),
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
const av = ee({
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
    const n = N(() => {
      const { imageSize: o } = e;
      return `calc(${o ? Ce(o) : "var(--result-image-size)"} * 0.9)`;
    }), t = N(() => {
      const { imageSize: o } = e;
      return `calc(${o ? Ce(e.imageSize) : "var(--result-image-size)"} * 0.05)`;
    });
    return {
      circleSize: n,
      borderSize: t,
      toSizeUnit: Ce,
      n: rk,
      classes: ak,
      toNumber: V,
      toPxNum: Fe
    };
  }
});
av.render = ik;
var Rl = av;
re(Rl);
const GI = Rl;
var Xa = Rl;
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
  onClick: A()
}, { name: sk, n: uk, classes: dk } = ne("row");
function ck(e, n) {
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
const iv = ee({
  name: sk,
  props: lk,
  setup(e) {
    const n = N(
      () => Ae(e.gutter) ? e.gutter.map((s) => Fe(s) / 2) : [0, Fe(e.gutter) / 2]
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
      padStartFlex: tr
    };
  }
});
iv.render = ck;
var Ul = iv;
re(Ul);
const XI = Ul;
var Ka = Ul, fk = Object.defineProperty, ed = Object.getOwnPropertySymbols, vk = Object.prototype.hasOwnProperty, mk = Object.prototype.propertyIsEnumerable, nd = (e, n, t) => n in e ? fk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, hk = (e, n) => {
  for (var t in n || (n = {}))
    vk.call(n, t) && nd(e, t, n[t]);
  if (ed)
    for (var t of ed(n))
      mk.call(n, t) && nd(e, t, n[t]);
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
])), { name: gk, n: bk, classes: yk } = ne("select"), $k = { key: 1 };
function wk(e, n) {
  const t = se("var-chip"), o = se("var-icon"), r = se("var-field-decorator"), a = se("var-menu"), i = se("var-form-details");
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
          D(
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
            xo({
              "append-icon": he(() => [
                z(e.$slots, "append-icon")
              ]),
              default: he(() => [
                D(
                  "div",
                  {
                    class: v(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                    style: H({
                      textAlign: e.textAlign,
                      color: e.textColor
                    })
                  },
                  [
                    D(
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
                                        Ee(
                                          ie(l),
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
                                ie(e.labels.join(e.separator)),
                                3
                                /* TEXT, CLASS */
                              ))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (p(), w(
                            "span",
                            $k,
                            ie(e.label),
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
                      ie(e.placeholder),
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
const lv = ee({
  name: gk,
  components: {
    VarIcon: He,
    VarMenu: yo,
    VarChip: lr,
    VarFieldDecorator: mo,
    VarFormDetails: hn
  },
  props: pk,
  setup(e) {
    const n = S(!1), t = S(!1), o = N(() => e.multiple), r = N(() => e.focusColor), a = S(""), i = S([]), l = N(() => Fn(e.modelValue)), s = N(() => e.disabled || e.readonly ? "" : "pointer"), u = S(0), { bindForm: d, form: c } = Mn(), { length: f, options: m, bindOptions: g } = cS(), {
      errorMessage: h,
      validateWithTrigger: b,
      validate: C,
      // expose
      resetValidation: T
    } = En(), O = S(null), $ = N(() => e.variant === "outlined" ? "bottom" : "cover-top"), k = N(() => {
      const { hint: q, blurColor: _, focusColor: E } = e;
      if (!q)
        return h.value ? "var(--field-decorator-error-color)" : n.value ? E || "var(--field-decorator-focus-color)" : _ || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), M = N(() => !e.hint && Fn(e.modelValue)), P = {
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
        const E = _;
        i.value = E.map(L);
      }
      !q && !Fn(_) && (a.value = L(_)), !q && Fn(_) && (a.value = "");
    }
    function I(q) {
      Ye(() => {
        const { validateTrigger: _, rules: E, modelValue: F } = e;
        b(_, q, E, F);
      });
    }
    function R({ value: q, label: _ }) {
      return q.value != null ? q.value : _.value;
    }
    function L(q) {
      var _;
      let E = m.find(({ value: F }) => F.value === q);
      return E || (E = m.find(({ label: F }) => F.value === q)), (_ = E == null ? void 0 : E.label.value) != null ? _ : "";
    }
    function U() {
      const { disabled: q, readonly: _, onFocus: E } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || q || _ || (u.value = Fe(e.offsetY), n.value = !0, y(E), I("onFocus"));
    }
    function oe() {
      const { disabled: q, readonly: _, onBlur: E } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || q || _ || (W(), y(E), I("onBlur"));
    }
    function G(q) {
      const { disabled: _, readonly: E, multiple: F, onChange: ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || _ || E)
        return;
      const Pe = F ? m.filter(({ selected: te }) => te.value).map(R) : R(q);
      y(e["onUpdate:modelValue"], Pe), y(ve, Pe), I("onChange"), F || W();
    }
    function j() {
      const { disabled: q, readonly: _, multiple: E, clearable: F, onClear: ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || q || _ || !F)
        return;
      const Pe = E ? [] : void 0;
      y(e["onUpdate:modelValue"], Pe), y(ve, Pe), I("onClear");
    }
    function X(q) {
      const { disabled: _, onClick: E } = e;
      c != null && c.disabled.value || _ || (y(E, q), I("onClick"));
    }
    function Q(q) {
      const { disabled: _, readonly: E, modelValue: F, onClose: ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || _ || E)
        return;
      const Pe = F, te = m.find(({ label: we }) => we.value === q), ue = Pe.filter((we) => {
        var De;
        return we !== ((De = te.value.value) != null ? De : te.label.value);
      });
      y(e["onUpdate:modelValue"], ue), y(ve, ue), I("onClose");
    }
    function Y() {
      const { multiple: q, modelValue: _ } = e;
      if (q) {
        const E = _;
        m.forEach((F) => F.sync(E.includes(R(F))));
      } else
        m.forEach((E) => E.sync(_ === R(E)));
      B();
    }
    function ae() {
      u.value = Fe(e.offsetY), n.value = !0, t.value = !0;
    }
    function W() {
      n.value = !1, t.value = !1;
    }
    function de() {
      return C(e.rules, e.modelValue);
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
      enableCustomPlaceholder: M,
      n: bk,
      classes: yk,
      handleFocus: U,
      handleBlur: oe,
      handleClear: j,
      handleClick: X,
      handleClose: Q,
      reset: J,
      validate: de,
      resetValidation: T,
      focus: ae,
      blur: W
    };
  }
});
lv.render = wk;
var Hl = lv;
re(Hl);
const KI = Hl;
var Za = Hl;
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
}, { name: Ck, n: kk, classes: Pk } = ne("skeleton");
function Ok(e, n) {
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
              D(
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
                  D(
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
                      D(
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
                        D(
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
          D(
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
const sv = ee({
  name: Ck,
  props: Sk,
  setup: () => ({
    n: kk,
    classes: Pk,
    toSizeUnit: Ce,
    toNumber: V
  })
});
sv.render = Ok;
var Fl = sv;
re(Fl);
const ZI = Fl;
var Ja = Fl, Xe = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(Xe || {});
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
  onChange: A(),
  onStart: A(),
  onEnd: A(),
  "onUpdate:modelValue": A()
}, { name: Ik, n: td, classes: Ek } = ne("slider"), Mk = ["onTouchstart"];
function Bk(e, n) {
  const t = se("var-hover-overlay"), o = se("var-form-details"), r = Ue("hover");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      D(
        "div",
        {
          class: v(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.click && e.click(...a))
        },
        [
          D(
            "div",
            {
              class: v(e.n(`${e.direction}-track`))
            },
            [
              D(
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
              D(
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
                Ie(D(
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
                D(
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
                D(
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
                    D(
                      "span",
                      null,
                      ie(a.text),
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
const uv = ee({
  name: Ik,
  components: {
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  directives: { Hover: In },
  props: Tk,
  setup(e) {
    const n = S(0), t = S(null), o = S(!1), r = N(() => V(e.max) - V(e.min)), a = N(() => n.value / r.value * V(e.step)), i = N(() => e.disabled || (d == null ? void 0 : d.disabled.value)), l = N(() => e.readonly || (d == null ? void 0 : d.readonly.value)), s = N(() => e.direction === "vertical"), { bindForm: u, form: d } = Mn(), { errorMessage: c, validateWithTrigger: f, validate: m, resetValidation: g } = En(), { hovering: h, handleHovering: b } = Wn(), { hovering: C, handleHovering: T } = Wn(), O = N(() => {
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
          hovering: eo(C),
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
      const { activeColor: te, range: ue, modelValue: we } = e, De = ue && Ae(we) ? G(Math.min(we[0], we[1])) : 0, le = ue && Ae(we) ? G(Math.max(we[0], we[1])) - De : G(we);
      return s.value ? {
        left: "0px",
        height: `${le}%`,
        bottom: `${De}%`,
        background: te
      } : {
        top: "0px",
        width: `${le}%`,
        left: `${De}%`,
        background: te
      };
    }), k = We({
      [Xe.First]: I(),
      [Xe.Second]: I()
    });
    let M;
    y(u, {
      reset: Pe,
      validate: B,
      resetValidation: g
    }), fe([() => e.modelValue, () => e.step], ([te, ue]) => {
      !E() || !F() || o.value || ve(te, V(ue));
    }), fe(n, () => ve()), an(() => {
      !E() || !F() || (n.value = t.value[s.value ? "offsetHeight" : "offsetWidth"]);
    }), pr(() => {
      W();
    });
    function B() {
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
    function R() {
      return Ye(() => f(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function L(te) {
      const ue = te.currentTarget;
      return ue ? s.value ? n.value - (te.clientY - en(ue).top) : te.clientX - zm(ue) : 0;
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
      const { step: De, range: le, modelValue: ge, onChange: Ne, min: qe } = e, ce = V(De), Se = Math.round(te / a.value), ye = Se * ce + V(qe), Be = k[ue].percentValue * ce + V(qe);
      if (k[ue].percentValue = Se, le && Ae(ge) && (we = ue === Xe.First ? [ye, ge[1]] : [ge[0], ye]), Be !== ye) {
        const Me = le ? we.map((Ze) => j(Ze)) : j(ye);
        y(Ne, Me), y(e["onUpdate:modelValue"], Me), R();
      }
    }
    function Y(te) {
      if (!e.range)
        return Xe.First;
      const ue = k[Xe.First].percentValue * a.value, we = k[Xe.Second].percentValue * a.value, De = Math.abs(te - ue), le = Math.abs(te - we);
      return De <= le ? Xe.First : Xe.Second;
    }
    function ae() {
      document.addEventListener("touchmove", J, { passive: !1 }), document.addEventListener("touchend", q), document.addEventListener("touchcancel", q);
    }
    function W() {
      document.removeEventListener("touchmove", J), document.removeEventListener("touchend", q), document.removeEventListener("touchcancel", q);
    }
    function de(te, ue) {
      if (n.value || (n.value = t.value.offsetWidth), i.value || (k[ue].active = !0), M = ue, ae(), i.value || l.value)
        return;
      y(e.onStart), o.value = !0;
      const { clientX: we, clientY: De } = te.touches[0];
      k[ue].startPosition = s.value ? De : we;
    }
    function J(te) {
      if (te.preventDefault(), i.value || l.value || !o.value)
        return;
      const { startPosition: ue, currentOffset: we } = k[M], { clientX: De, clientY: le } = te.touches[0];
      let ge = (s.value ? ue - le : De - ue) + we;
      ge <= 0 ? ge = 0 : ge >= n.value && (ge = n.value), Q(ge, M);
    }
    function q() {
      W();
      const { range: te, modelValue: ue, onEnd: we, step: De, min: le } = e;
      if (i.value || (k[M].active = !1), i.value || l.value)
        return;
      let ge = [];
      k[M].currentOffset = k[M].percentValue * a.value;
      const Ne = k[M].percentValue * V(De) + V(le);
      te && Ae(ue) && (ge = M === Xe.First ? [Ne, ue[1]] : [ue[0], Ne]), y(we, te ? ge : Ne), o.value = !1;
    }
    function _(te) {
      if (i.value || l.value || te.target.closest(`.${td("thumb")}`))
        return;
      const ue = L(te), we = Y(ue);
      M = we, Q(ue, we), q();
    }
    function E() {
      const te = V(e.step);
      return isNaN(te) ? (ys("Slider", 'type of prop "step" should be Number'), !1) : te < 0 ? (ys("Slider", '"step" should be > 0'), !1) : !0;
    }
    function F() {
      const { range: te, modelValue: ue } = e;
      return te && !Ae(ue) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !te && Ae(ue) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : te && Ae(ue) && ue.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function ve(te = e.modelValue, ue = V(e.step)) {
      const we = (De) => {
        const { min: le, max: ge } = e;
        return De < V(le) ? 0 : De > V(ge) ? r.value / ue : (De - V(le)) / ue;
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
      classes: Ek,
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
uv.render = Bk;
var Yl = uv;
re(Yl);
const JI = Yl;
var Qa = Yl, Dk = Object.defineProperty, Nk = Object.defineProperties, Vk = Object.getOwnPropertyDescriptors, od = Object.getOwnPropertySymbols, Ak = Object.prototype.hasOwnProperty, zk = Object.prototype.propertyIsEnumerable, rd = (e, n, t) => n in e ? Dk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Lk = (e, n) => {
  for (var t in n || (n = {}))
    Ak.call(n, t) && rd(e, t, n[t]);
  if (od)
    for (var t of od(n))
      zk.call(n, t) && rd(e, t, n[t]);
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
  loadingType: Te(tt, "type"),
  loadingSize: Te(tt, "size"),
  loadingRadius: Te(tt, "radius"),
  loadingColor: Rk(Lk({}, Te(tt, "color")), {
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
}, { n: Uk, classes: Hk } = ne("snackbar"), Fk = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Yk(e, n) {
  const t = se("var-icon"), o = se("var-loading");
  return Ie((p(), w(
    "div",
    {
      class: v(e.n()),
      style: H({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      D(
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
          D(
            "div",
            {
              class: v([e.n("content"), e.contentClass])
            },
            [
              z(e.$slots, "default", {}, () => [
                Ee(
                  ie(e.content),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          D(
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
          D(
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
const cv = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Ut,
    VarIcon: He
  },
  props: dv,
  setup(e) {
    const n = S(null), { zIndex: t } = Io(() => e.show, 1);
    yr(
      () => e.show,
      () => e.lockScroll
    );
    const o = N(() => e.type === "loading" || e.forbidClick), r = N(() => e.type ? Fk[e.type] : ""), a = () => {
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
const { name: jk, n: Wk } = ne("snackbar");
function qk(e, n) {
  const t = se("var-snackbar-core");
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
              Ee(
                ie(e.content),
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
const vv = ee({
  name: jk,
  components: { VarSnackbarCore: fv },
  props: dv,
  setup() {
    const { disabled: e } = Zt();
    return {
      disabled: e,
      n: Wk
    };
  }
});
vv.render = qk;
var Br = vv, Gk = Object.defineProperty, ad = Object.getOwnPropertySymbols, Xk = Object.prototype.hasOwnProperty, Kk = Object.prototype.propertyIsEnumerable, id = (e, n, t) => n in e ? Gk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, $o = (e, n) => {
  for (var t in n || (n = {}))
    Xk.call(n, t) && id(e, t, n[t]);
  if (ad)
    for (var t of ad(n))
      Kk.call(n, t) && id(e, t, n[t]);
  return e;
};
const mv = ["loading", "success", "warning", "info", "error"];
let ld = 0, _a = !1, hv, wo = !1;
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
let Pn = We([]), jl = pv;
const Zk = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, jr = (e) => () => Xt(e) ? e() : e, Jk = {
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
        }, tP(t.position)), {
          content: i,
          icon: l,
          action: s
        } = t, u = {
          default: jr(i),
          icon: jr(l),
          action: jr(s)
        };
        return Z(fv, ze(t, {
          key: n,
          style: a,
          "data-id": n,
          _update: o,
          show: t.show,
          "onUpdate:show": (d) => t.show = d
        }), u);
      });
      return Z(qv, ze(Zk, {
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
  const n = eP(e), t = We($o($o({}, jl), n));
  t.show = !0, _a || (_a = !0, hv = Kt(Jk).unmountInstance);
  const {
    length: o
  } = Pn, r = {
    id: ld++,
    reactiveSnackOptions: t
  };
  if (o === 0 || wo)
    xk(r);
  else {
    const a = `update-${ld}`;
    nP(t, a);
  }
  return {
    clear() {
      !wo && Pn.length ? Pn[0].reactiveSnackOptions.show = !1 : t.show = !1;
    }
  };
};
mv.forEach((e) => {
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
  jl = pv;
};
function Qk(e) {
  const n = e.getAttribute("data-id"), t = Pn.find((o) => o.id === V(n));
  t && y(t.reactiveSnackOptions.onOpened);
}
function _k(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), t = Pn.find((r) => r.id === V(n));
  t && (t.animationEnd = !0, y(t.reactiveSnackOptions.onClosed)), Pn.every((r) => r.animationEnd) && (y(hv), Pn = We([]), _a = !1);
}
function xk(e) {
  Pn.push(e);
}
function eP(e = {}) {
  return xe(e) ? {
    content: e
  } : e;
}
function nP(e, n) {
  const [t] = Pn;
  t.reactiveSnackOptions = $o($o({}, t.reactiveSnackOptions), e), t._update = n;
}
function tP(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Gn.Component = Br;
re(Br);
re(Br, Gn);
const QI = Br;
var xa = Gn;
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
  n: Wr,
  classes: lP
} = ne("space");
function sP(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Ae(e) ? e.map(Ce) : [Ce(e), Ce(e)];
}
var Wl = ee({
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
      u = Cd(u);
      const f = u.length - 1, m = u.map((g, h) => {
        const b = rP(d, c, {
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
        class: lP(Wr(), Wr("$--box"), [o, Wr("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: tr(r),
          alignItems: tr(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${d} / 2) 0` : void 0
        }
      }, [m]);
    };
  }
});
re(Wl);
const _I = Wl;
var ei = Wl;
const uP = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Te(Ke, "name"),
  inactiveIcon: Te(Ke, "name"),
  activeIconNamespace: Te(Ke, "namespace"),
  currentIconNamespace: Te(Ke, "namespace"),
  inactiveIconNamespace: Te(Ke, "namespace")
}, gv = Symbol("STEPS_BIND_STEP_KEY");
function dP() {
  const { bindChildren: e, childProviders: n } = sn(gv);
  return {
    step: n,
    bindStep: e
  };
}
function cP() {
  const { parentProvider: e, index: n, bindParent: t } = ln(gv);
  return t || Tn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: t
  };
}
const { name: fP, n: vP, classes: mP } = ne("step"), hP = { key: 3 };
function pP(e, n) {
  const t = se("var-icon");
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      D(
        "div",
        {
          class: v(e.n(e.direction))
        },
        [
          D(
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
                hP,
                ie(e.index + 1),
                1
                /* TEXT */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          D(
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
          D(
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
const bv = ee({
  name: fP,
  components: { VarIcon: He },
  props: uP,
  setup() {
    const { index: e, steps: n, bindSteps: t } = cP(), { active: o, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = N(() => o.value === e.value), u = N(() => e.value !== -1 && V(o.value) > e.value);
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
var ql = bv;
re(ql);
const xI = ql;
var ni = ql;
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
  onClickStep: A()
}, { name: bP, n: yP } = ne("steps");
function $P(e, n) {
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
const yv = ee({
  name: bP,
  props: gP,
  setup(e) {
    const n = N(() => e.active), t = N(() => e.activeColor), o = N(() => e.inactiveColor), r = N(() => e.direction), { bindStep: a } = dP();
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
var Gl = yv;
re(Gl);
const eE = Gl;
var ti = Gl;
const wP = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: SP, n: CP } = ne("style-provider"), kP = ee({
  name: SP,
  props: wP,
  setup(e, { slots: n }) {
    return () => hd(
      e.tag,
      {
        class: CP(),
        style: Ld(e.styleVars)
      },
      y(n.default)
    );
  }
});
var Dr = kP;
const qr = [];
function Xl(e) {
  qr.forEach((t) => document.documentElement.style.removeProperty(t)), qr.length = 0;
  const n = Ld(e ?? {});
  Object.entries(n).forEach(([t, o]) => {
    document.documentElement.style.setProperty(t, o), qr.push(t);
  });
}
Xl.Component = Dr;
re(Dr);
re(Dr, Xl);
const nE = Dr;
var oi = Xl;
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
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: OP, n: TP, classes: IP } = ne("switch"), EP = (e) => (ht(""), e = e(), pt(), e), MP = /* @__PURE__ */ EP(() => /* @__PURE__ */ D(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ D("circle", {
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
  const t = se("var-hover-overlay"), o = se("var-form-details"), r = Ue("ripple"), a = Ue("hover");
  return Ie((p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      D(
        "div",
        {
          class: v(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[0] || (n[0] = (...i) => e.switchActive && e.switchActive(...i)),
          style: H(e.styleComputed.switch)
        },
        [
          D(
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
          Ie((p(), w(
            "div",
            {
              class: v(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
              style: H(e.styleComputed.ripple)
            },
            [
              D(
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
                    BP,
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
const $v = ee({
  name: OP,
  components: {
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  directives: { Ripple: Je, Hover: In },
  props: PP,
  setup(e) {
    const { bindForm: n, form: t } = Mn(), { errorMessage: o, validateWithTrigger: r, validate: a, resetValidation: i } = En(), { hovering: l, handleHovering: s } = Wn(), u = N(() => {
      const { size: C, modelValue: T, color: O, closeColor: $, loadingColor: k, activeValue: M } = e;
      return {
        handle: {
          width: un(C),
          height: un(C),
          backgroundColor: T === M ? O : $,
          color: k
        },
        ripple: {
          left: T === M ? un(C, 0.5) : `-${un(C, 0.5)}`,
          color: T === M ? O : $ || "#999",
          width: un(C, 2),
          height: un(C, 2)
        },
        track: {
          height: un(C, 0.72),
          width: un(C, 1.9),
          borderRadius: un(C, 2 / 3),
          filter: T === M || o != null && o.value ? void 0 : "brightness(.6)",
          backgroundColor: T === M ? O : $
        },
        switch: {
          height: un(C, 1.2),
          width: un(C, 2)
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
    function g(C) {
      const {
        onClick: T,
        onChange: O,
        disabled: $,
        loading: k,
        readonly: M,
        modelValue: P,
        activeValue: B,
        inactiveValue: I,
        "onUpdate:modelValue": R
      } = e;
      if (y(T, C), $ || k || M || t != null && t.disabled.value || t != null && t.readonly.value)
        return;
      const L = P === B ? I : B;
      y(O, L), y(R, L), m();
    }
    function h(C) {
      e.disabled || t != null && t.disabled.value || s(C);
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
      n: TP,
      classes: IP,
      multiplySizeUnit: un,
      switchActive: g,
      hover: h
    };
  }
});
$v.render = DP;
var Kl = $v;
re(Kl);
const tE = Kl;
var ri = Kl;
const NP = {
  name: [String, Number],
  disabled: Boolean,
  onClick: A()
}, wv = Symbol("TABS_BIND_TAB_KEY");
function VP() {
  const { childProviders: e, bindChildren: n, length: t } = sn(wv);
  return {
    length: t,
    tabList: e,
    bindTabList: n
  };
}
function AP() {
  const { parentProvider: e, bindParent: n, index: t } = ln(wv);
  return n || Tn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: t,
    tabs: e,
    bindTabs: n
  };
}
const { name: zP, n: qo, classes: LP } = ne("tab");
function RP(e, n) {
  const t = Ue("ripple");
  return Ie((p(), w(
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
  name: zP,
  directives: { Ripple: Je },
  props: NP,
  setup(e) {
    const n = S(null), t = N(() => n.value), o = N(() => e.name), r = N(() => e.disabled), { index: a, tabs: i, bindTabs: l } = AP(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: m, resize: g } = i, h = {
      name: o,
      index: a,
      disabled: r,
      element: t
    };
    l(h), fe(() => [e.name, e.disabled], g);
    function b() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function C() {
      return e.disabled ? f.value : b() ? d.value : c.value;
    }
    function T() {
      return e.disabled ? qo("$-tab--disabled") : b() ? qo("$-tab--active") : qo("$-tab--inactive");
    }
    function O($) {
      const { disabled: k, name: M, onClick: P } = e;
      k || (y(P, M ?? a.value, $), s(h));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: m,
      n: qo,
      classes: LP,
      computeColorStyle: C,
      computeColorClass: T,
      handleClick: O
    };
  }
});
Sv.render = RP;
var Zl = Sv;
re(Zl);
const oE = Zl;
var ai = Zl;
const UP = {
  name: [String, Number]
}, { name: HP, n: FP, classes: YP } = ne("tab-item");
function jP(e, n) {
  const t = se("var-swipe-item");
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
const Cv = ee({
  name: HP,
  components: { VarSwipeItem: po },
  props: UP,
  setup(e) {
    const n = S(!1), t = N(() => e.name), { index: o, bindTabsItems: r } = Yw(), { bindLists: a } = jw(), i = {
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
      n: FP,
      classes: YP
    };
  }
});
Cv.render = jP;
var Jl = Cv;
re(Jl);
const rE = Jl;
var ii = Jl;
const WP = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, { name: qP, n: GP, classes: XP } = ne("table");
function KP(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      D(
        "div",
        {
          class: v(e.n("main"))
        },
        [
          D(
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
const kv = ee({
  name: qP,
  props: WP,
  setup: () => ({
    toSizeUnit: Ce,
    n: GP,
    classes: XP,
    formatElevation: gn
  })
});
kv.render = KP;
var Ql = kv;
re(Ql);
const aE = Ql;
var li = Ql;
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
  stickyCssMode: Te(_o, "cssMode"),
  stickyZIndex: Te(_o, "zIndex"),
  offsetTop: Te(_o, "offsetTop"),
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
const { name: JP, n: QP, classes: _P } = ne("tabs");
function xP(e, n) {
  return p(), ke(Gt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: he(() => [
      D(
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
          D(
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
              D(
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
                  D(
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
const Pv = ee({
  name: JP,
  components: { VarSticky: bo },
  inheritAttrs: !1,
  props: ZP,
  setup(e) {
    const n = S("0px"), t = S("0px"), o = S("0px"), r = S("0px"), a = S(!1), i = S(null), l = N(() => e.active), s = N(() => e.activeColor), u = N(() => e.inactiveColor), d = N(() => e.disabledColor), c = N(() => e.itemDirection), f = S(null), m = N(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: h, length: b } = VP();
    h({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: I,
      onTabClick: T
    }), fe(
      () => b.value,
      () => sd(this, null, function* () {
        yield cn(), I();
      })
    ), fe(() => [e.active, e.scrollable], I), mt(I), Oo(I);
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
    function M() {
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
    function I() {
      const L = O() || $() || k();
      !L || L.disabled.value || (M(), P(L), B(L));
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
      toSizeUnit: Ce,
      n: QP,
      classes: _P,
      resize: I,
      resizeSticky: R,
      formatElevation: gn
    };
  }
});
Pv.render = xP;
var _l = Pv;
re(_l);
const iE = _l;
var si = _l;
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
  "onUpdate:active": A()
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
const { name: tO, n: oO } = ne("tabs-items");
function rO(e, n) {
  const t = se("var-swipe");
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
const Ov = ee({
  name: tO,
  components: { VarSwipe: ho },
  props: eO,
  setup(e) {
    const n = S(null), { tabItemList: t, bindTabItem: o, length: r } = Fw();
    o({}), fe(() => e.active, s), fe(
      () => r.value,
      () => nO(this, null, function* () {
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
      n: oO,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Ov.render = rO;
var xl = Ov;
re(xl);
const lE = xl;
var ui = xl, aO = {
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
}, WO = Object.defineProperty, ud = Object.getOwnPropertySymbols, qO = Object.prototype.hasOwnProperty, GO = Object.prototype.propertyIsEnumerable, dd = (e, n, t) => n in e ? WO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Oe = (e, n) => {
  for (var t in n || (n = {}))
    qO.call(n, t) && dd(e, t, n[t]);
  if (ud)
    for (var t of ud(n))
      GO.call(n, t) && dd(e, t, n[t]);
  return e;
}, XO = Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe({
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
const KO = { dark: XO }, sE = null;
var di = KO;
const Cn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], dn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], cd = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], ZO = {
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
}, Tv = (e, n) => e === "24hr" || n === "am", es = (e, n, t) => {
  const o = Cn.findIndex((a) => V(a) === V(t)), r = Tv(e, n) ? t : dn[o];
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
    const { hour: g, minute: h } = fn(l), { hour: b, minute: C } = fn(s);
    f = b === c && o < C || g === c && o > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (t = e.allowedTime) == null ? void 0 : t.minutes(o)), f || m;
}, Ev = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = es(r, a, i);
  let m = !1, g = !1;
  if (d.includes(c))
    return !0;
  if (s && !u) {
    const { hour: h, minute: b, second: C } = fn(s);
    m = h === f && b < l || b === l && o > C;
  }
  if (!s && u) {
    const { hour: h, minute: b, second: C } = fn(u);
    m = h === f && b > l || b === l && o > C;
  }
  if (s && u) {
    const { hour: h, minute: b, second: C } = fn(s), { hour: T, minute: O, second: $ } = fn(u);
    m = h === f && b < l || T === f && O > l || h === f && b === l && o > C || T === f && O === l && o < $;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (t = e.allowedTime) == null ? void 0 : t.seconds(o)), m || g;
}, { n: JO, classes: QO } = ne("time-picker");
function _O(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n("clock"))
    },
    [
      D(
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
          ie(t),
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
              ie(t),
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
const Mv = ee({
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
    const t = S(null), o = S([]), r = S([]), a = N(() => ({
      transform: `rotate(${V(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = N(() => {
      if (e.rad === void 0)
        return;
      const h = e.rad / 30;
      return h >= 0 ? h : h + 12;
    }), l = N(() => e.type === "hour" ? Cn : cd), s = (h, b) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const C = e.type === "minute" ? Iv : Ev, T = {
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
      return b && e.type === "minute" && Reflect.deleteProperty(T, "minute"), C(T);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const h = e.isInner ? dn[i.value] : l.value[i.value];
      return l.value === cd ? s() ? "#bdbdbd" : e.color : c(h) ? "#bdbdbd" : e.color;
    }, d = (h, b) => b ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (Tv(e.format, e.ampm))
          return o.value.includes(h);
        const b = Cn.findIndex((C) => C === h);
        return r.value.includes(b);
      }
      return s(h, !0);
    }, f = (h, b, C) => {
      const T = 2 * Math.PI / 12 * h - Math.PI / 2, O = 50 * (1 + Math.cos(T)), $ = 50 * (1 + Math.sin(T)), k = () => d(h, C) ? c(b) ? {
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
        left: `${O}%`,
        top: `${$}%`,
        backgroundColor: M,
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
      const h = e.ampm === "am" ? Cn : dn;
      return St(h[i.value], 2, "0");
    };
    return fe([i, () => e.isInner], ([h, b], [C, T]) => {
      if (h === C && b === T || e.type !== "hour" || i.value === void 0)
        return;
      const $ = b ? dn[i.value] : g(), k = e.useSeconds ? `:${e.time.second}` : "", M = `${$}:${e.time.minute}${k}`;
      e.preventNextUpdate || n("update", M), n("change-prevent-update");
    }), fe(
      () => e.rad,
      (h, b) => {
        if (e.type === "hour" || h === void 0 || b === void 0)
          return;
        const C = h / 6 >= 0 ? h / 6 : h / 6 + 60, T = b / 6 >= 0 ? b / 6 : b / 6 + 60;
        if (C === T)
          return;
        let O;
        const { hourStr: $ } = es(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const k = me().minute(C).format("mm"), M = e.useSeconds ? `:${e.time.second}` : "";
          O = `${$}:${k}${M}`;
        }
        if (e.type === "second") {
          const k = me().second(C).format("ss"), M = e.useSeconds ? `:${k}` : "";
          O = `${$}:${e.time.minute}${M}`;
        }
        n("update", O);
      }
    ), fe(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([h, b, C]) => {
        if (o.value = [], h && !b) {
          const { hour: T } = fn(h), O = Cn.filter((k) => V(k) > T), $ = dn.filter((k) => V(k) > T);
          o.value = [...O, ...$];
        }
        if (!h && b) {
          const { hour: T } = fn(b), O = Cn.filter((k) => V(k) < T), $ = dn.filter((k) => V(k) < T);
          o.value = [...O, ...$];
        }
        if (h && b) {
          const { hour: T } = fn(h), { hour: O } = fn(b), $ = Cn.filter((M) => V(M) < O || V(M) > T), k = dn.filter((M) => V(M) < O || V(M) > T);
          o.value = [...$, ...k];
        }
        if (C != null && C.hours) {
          const { hours: T } = C, O = Cn.filter((k) => !T(V(k))), $ = dn.filter((k) => !T(V(k)));
          o.value = [.../* @__PURE__ */ new Set([...o.value, ...O, ...$])];
        }
        r.value = o.value.map((T) => dn.findIndex((O) => T === O)).filter((T) => T >= 0);
      },
      { immediate: !0 }
    ), {
      n: JO,
      classes: QO,
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
Mv.render = _O;
var xO = Mv;
const { name: eT, n: nT, classes: tT } = ne("time-picker"), oT = (e) => (ht(""), e = e(), pt(), e), rT = /* @__PURE__ */ oT(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), aT = { key: 0 };
function iT(e, n) {
  const t = se("clock");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      D(
        "div",
        {
          class: v(e.n("title")),
          style: H({ background: e.headerColor || e.color })
        },
        [
          D(
            "div",
            {
              class: v(e.n("title-time"))
            },
            [
              D(
                "div",
                {
                  class: v(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                  onClick: n[0] || (n[0] = (o) => e.checkPanel("hour"))
                },
                ie(e.time.hour),
                3
                /* TEXT, CLASS */
              ),
              rT,
              D(
                "div",
                {
                  class: v(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                  onClick: n[1] || (n[1] = (o) => e.checkPanel("minute"))
                },
                ie(e.time.minute),
                3
                /* TEXT, CLASS */
              ),
              e.useSeconds ? (p(), w("span", aT, ":")) : x("v-if", !0),
              e.useSeconds ? (p(), w(
                "div",
                {
                  key: 1,
                  class: v(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                  onClick: n[2] || (n[2] = (o) => e.checkPanel("second"))
                },
                ie(e.time.second),
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
              D(
                "div",
                {
                  class: v(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                  onClick: n[3] || (n[3] = (o) => e.checkAmpm("am"))
                },
                "AM",
                2
                /* CLASS */
              ),
              D(
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
      D(
        "div",
        {
          class: v(e.n("body"))
        },
        [
          D(
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
const Bv = ee({
  name: eT,
  components: { Clock: xO },
  props: ZO,
  setup(e) {
    const n = S(null), t = S(null), o = S(null), r = S(!1), a = S(!1), i = S(!1), l = S(!1), s = S(!1), u = S(!1), d = S(!1), c = S(0), f = S(0), m = S(), g = S("hour"), h = S("am"), b = S({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = We({
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
          const { hour: de, minute: J, second: q } = fn(W), _ = me().hour(de).format("hh"), E = me().hour(de).format("HH"), F = me().minute(J).format("mm"), ve = me().second(q).format("ss");
          m.value = (_ === "12" ? 0 : V(_)) * 30, c.value = V(F) * 6, f.value = V(ve) * 6, b.value = R(W), e.format !== "24hr" && (h.value = St(`${de}`, 2, "0") === E && dn.includes(E) ? "pm" : "am"), r.value = e.format === "24hr" && dn.includes(E);
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
    function M(W) {
      l.value = !1, d.value = !1, g.value = W;
    }
    function P(W) {
      const { disableHour: de } = o.value, J = Cn.findIndex((E) => V(E) === V(b.value.hour)), q = W === "am" ? Cn : dn;
      return [...q.slice(J), ...q.slice(0, J)].find((E, F) => (a.value = F !== 0, !de.includes(E)));
    }
    function B(W) {
      if (e.readonly)
        return;
      h.value = W;
      const de = P(W);
      if (!de)
        return;
      const J = e.useSeconds ? `:${b.value.second}` : "", q = `${St(de, 2, "0")}:${b.value.minute}${J}`;
      $(q);
    }
    function I(W, de) {
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
      const { width: W, height: de } = o.value.getSize(), J = C.x - W / 2 - 8, q = C.x + W / 2 + 8, _ = C.y - de / 2 - 8, E = C.y + de / 2 + 8;
      return {
        rangeXMin: J,
        rangeXMax: q,
        rangeYMin: _,
        rangeYMax: E
      };
    }
    function oe(W, de, J) {
      const { disableHour: q } = o.value;
      i.value = I(W, de);
      const _ = Math.round(J / 30) * 30 + 90, E = L(_), F = r.value ? Cn[E] : dn[E];
      if (q.includes(F) || (r.value = e.format === "24hr" ? I(W, de) : !1), r.value !== i.value)
        return;
      const ve = r.value || h.value === "pm" ? dn[E] : Cn[E];
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
      Ev(_) || (f.value = J);
    }
    function X() {
      const { left: W, top: de, width: J, height: q } = en(n.value);
      if (C.x = W + J / 2, C.y = de + q / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: _, rangeXMax: E, rangeYMin: F, rangeYMax: ve } = U();
        T.x = [_, E], T.y = [F, ve];
      }
    }
    function Q(W) {
      if (W.preventDefault(), e.readonly)
        return;
      X();
      const { clientX: de, clientY: J } = W.touches[0], q = de - C.x, _ = J - C.y, E = Math.round(k(Math.atan2(_, q)));
      g.value === "hour" ? oe(de, J, E) : g.value === "minute" ? G(E) : j(E);
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
    function ae() {
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
      n: nT,
      classes: tT,
      moveHand: Q,
      checkPanel: M,
      checkAmpm: B,
      end: Y,
      update: $,
      changePreventUpdate: ae,
      formatElevation: gn
    };
  }
});
Bv.render = iT;
var ns = Bv;
re(ns);
const uE = ns;
var ci = ns;
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
  onBeforeFilter: A(),
  onBeforeRead: A(),
  onAfterRead: A(),
  onBeforeRemove: A(),
  onRemove: A(),
  onOversize: A(),
  "onUpdate:modelValue": A()
};
var Gr = (e, n, t) => new Promise((o, r) => {
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
const { name: sT, n: uT, classes: dT } = ne("uploader");
let cT = 0;
const fT = ["onClick"], vT = ["onClick"], mT = ["src", "alt"], hT = ["multiple", "accept", "capture", "disabled"], pT = ["src"];
function gT(e, n) {
  const t = se("var-icon"), o = se("var-hover-overlay"), r = se("var-form-details"), a = se("var-popup"), i = Ue("ripple"), l = Ue("hover");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      D(
        "div",
        {
          class: v(e.n("file-list"))
        },
        [
          (p(!0), w(
            Ve,
            null,
            Ge(e.files, (s) => Ie((p(), w("div", {
              class: v(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              D(
                "div",
                {
                  class: v(e.n("file-name"))
                },
                ie(s.name || s.url),
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
              ], 10, vT)) : x("v-if", !0),
              s.cover ? (p(), w("img", {
                key: 1,
                class: v(e.n("file-cover")),
                style: H({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, mT)) : x("v-if", !0),
              D(
                "div",
                {
                  class: v(e.n("file-indicator"))
                },
                [
                  D(
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
            ], 10, fT)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Ie((p(), w(
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
              D("input", {
                ref: "input",
                type: "file",
                class: v(e.n("action-input")),
                multiple: e.multiple,
                accept: e.accept,
                capture: e.capture,
                disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
                onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s))
              }, null, 42, hT),
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
      }, xo({
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
            }, null, 10, pT)) : x("v-if", !0)
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
const Dv = ee({
  name: sT,
  directives: { Ripple: Je, Hover: In },
  components: {
    VarIcon: He,
    VarPopup: dt,
    VarFormDetails: hn,
    VarHoverOverlay: zn
  },
  props: lT,
  setup(e) {
    const n = S(null), t = S(!1), o = S(null), r = N(() => {
      const {
        maxlength: Q,
        modelValue: { length: Y }
      } = e;
      return vn(Q) ? `${Y} / ${Q}` : "";
    }), { form: a, bindForm: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = En(), { hovering: c, handleHovering: f } = Wn(), m = N(() => {
      const { modelValue: Q, hideList: Y } = e;
      return Y ? [] : Q;
    });
    let g = !1;
    const h = {
      getSuccess: I,
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
    function C(Q) {
      const { disabled: Y, previewed: ae } = e;
      if (a != null && a.disabled.value || Y || !ae)
        return;
      const { url: W } = Q;
      if (xe(W) && Es(W)) {
        go(W);
        return;
      }
      xe(W) && Ms(W) && (o.value = Q, t.value = !0);
    }
    function T(Q) {
      return {
        id: cT++,
        url: "",
        cover: "",
        name: Q.name,
        file: Q,
        progress: 0
      };
    }
    function O(Q) {
      const Y = Q.target, { files: ae } = Y;
      return Array.from(ae);
    }
    function $(Q) {
      return new Promise((Y) => {
        if (!Q.file.type.startsWith("image")) {
          Y(Q);
          return;
        }
        const ae = new FileReader();
        ae.onload = () => {
          const W = ae.result;
          Q.cover = W, Q.url = W, Y(Q);
        }, ae.readAsDataURL(Q.file);
      });
    }
    function k(Q) {
      return Q.map($);
    }
    function M(Q) {
      const { onBeforeRead: Y } = e;
      return Q.map(
        (ae) => new Promise((W) => {
          Y || W({
            valid: !0,
            varFile: ae
          });
          const de = Go(y(Y, We(ae)));
          Promise.all(de).then((J) => {
            W({
              valid: J.every(Boolean),
              varFile: ae
            });
          });
        })
      );
    }
    function P(Q) {
      return Gr(this, null, function* () {
        const { maxsize: Y, maxlength: ae, modelValue: W, onOversize: de, onAfterRead: J, onBeforeFilter: q, readonly: _, disabled: E } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || E || _)
          return;
        const F = (ge) => ge.filter((Ne) => Ne.file.size > V(Y) ? (y(de, We(Ne)), !1) : !0), ve = (ge) => {
          const Ne = Math.min(ge.length, V(ae) - W.length);
          return ge.slice(0, Ne);
        }, Pe = (ge) => Gr(this, null, function* () {
          if (!q)
            return ge;
          const Ne = Go(q);
          for (const qe of Ne)
            ge = yield qe(ge);
          return ge;
        });
        let ue = O(Q).map(T);
        ue = yield Pe(ue), ue = Y != null ? F(ue) : ue, ue = ae != null ? ve(ue) : ue;
        const we = yield Promise.all(k(ue)), le = (yield Promise.all(M(we))).filter(({ valid: ge }) => ge).map(({ varFile: ge }) => ge);
        y(e["onUpdate:modelValue"], [...W, ...le]), Q.target.value = "", le.forEach((ge) => y(J, We(ge)));
      });
    }
    function B(Q) {
      return Gr(this, null, function* () {
        const { disabled: Y, readonly: ae, modelValue: W, onBeforeRemove: de, onRemove: J } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || Y || ae)
          return;
        if (de) {
          const _ = Go(y(de, We(Q)));
          if ((yield Promise.all(_)).some((E) => !E))
            return;
        }
        const q = W.filter((_) => _ !== Q);
        y(J, We(Q)), G("onRemove"), y(e["onUpdate:modelValue"], q);
      });
    }
    function I() {
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
        const { validateTrigger: Y, rules: ae, modelValue: W } = e;
        s(Y, Q, ae, W, h);
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
      n: uT,
      classes: dT,
      formatElevation: gn,
      toNumber: V,
      handleHovering: f,
      isHTMLSupportVideo: Ms,
      isHTMLSupportImage: Es,
      preview: C,
      handleChange: P,
      handleRemove: B,
      getSuccess: I,
      getError: R,
      getLoading: L,
      validate: j,
      resetValidation: d,
      reset: X,
      chooseFile: U,
      closePreview: oe,
      toSizeUnit: Ce
    };
  }
});
Dv.render = gT;
var ts = Dv;
re(ts);
const dE = ts;
var fi = ts;
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
var yT = Object.defineProperty, $T = Object.defineProperties, wT = Object.getOwnPropertyDescriptors, fd = Object.getOwnPropertySymbols, ST = Object.prototype.hasOwnProperty, CT = Object.prototype.propertyIsEnumerable, vd = (e, n, t) => n in e ? yT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, kT = (e, n) => {
  for (var t in n || (n = {}))
    ST.call(n, t) && vd(e, t, n[t]);
  if (fd)
    for (var t of fd(n))
      CT.call(n, t) && vd(e, t, n[t]);
  return e;
}, PT = (e, n) => $T(e, wT(n)), md = (e, n, t) => new Promise((o, r) => {
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
const { name: OT, n: TT, classes: IT } = ne("watermark"), ET = { ref: "svgRef" }, MT = ["viewBox", "width", "height"], BT = ["width", "height"], DT = ["href", "xlink:href", "x", "y", "width", "height"];
function NT(e, n) {
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
        D(
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
            Ie(D(
              "div",
              ET,
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
                    D(
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
                          D(
                            "span",
                            {
                              style: H(PT(kT({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            ie(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, BT)) : x("v-if", !0),
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
                  }, null, 12, DT)) : x("v-if", !0)
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
const Nv = ee({
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
    ), So(c), Co(d);
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
      n: TT,
      classes: IT,
      showContent: l,
      resize: c
    };
  }
});
Nv.render = NT;
var os = Nv;
re(os);
const cE = os;
var vi = os;
const VT = "2.16.7";
function AT(e) {
  Zr.install && e.use(Zr), Jr.install && e.use(Jr), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), rr.install && e.use(rr), ta.install && e.use(ta), oa.install && e.use(oa), ra.install && e.use(ra), aa.install && e.use(aa), mn.install && e.use(mn), ia.install && e.use(ia), la.install && e.use(la), ar.install && e.use(ar), ir.install && e.use(ir), sa.install && e.use(sa), lr.install && e.use(lr), ua.install && e.use(ua), da.install && e.use(da), ca.install && e.use(ca), wn.install && e.use(wn), ha.install && e.use(ha), wa.install && e.use(wa), Ca.install && e.use(Ca), ka.install && e.use(ka), Pa.install && e.use(Pa), vr.install && e.use(vr), Ia.install && e.use(Ia), Ea.install && e.use(Ea), mo.install && e.use(mo), Ma.install && e.use(Ma), hn.install && e.use(hn), In.install && e.use(In), zn.install && e.use(zn), He.install && e.use(He), Ba.install && e.use(Ba), go.install && e.use(go), Da.install && e.use(Da), Na.install && e.use(Na), hr.install && e.use(hr), uo.install && e.use(uo), Va.install && e.use(Va), Aa.install && e.use(Aa), Ut.install && e.use(Ut), za.install && e.use(za), Kr.install && e.use(Kr), yo.install && e.use(yo), La.install && e.use(La), Ra.install && e.use(Ra), Ua.install && e.use(Ua), Ha.install && e.use(Ha), Fa.install && e.use(Fa), dt.install && e.use(dt), Ya.install && e.use(Ya), ja.install && e.use(ja), Wa.install && e.use(Wa), qa.install && e.use(qa), Ga.install && e.use(Ga), Xa.install && e.use(Xa), Je.install && e.use(Je), Ka.install && e.use(Ka), Za.install && e.use(Za), Ja.install && e.use(Ja), Qa.install && e.use(Qa), xa.install && e.use(xa), ei.install && e.use(ei), ni.install && e.use(ni), ti.install && e.use(ti), bo.install && e.use(bo), oi.install && e.use(oi), ho.install && e.use(ho), po.install && e.use(po), ri.install && e.use(ri), ai.install && e.use(ai), ii.install && e.use(ii), li.install && e.use(li), si.install && e.use(si), ui.install && e.use(ui), di.install && e.use(di), ci.install && e.use(ci), mr.install && e.use(mr), fi.install && e.use(fi), vi.install && e.use(vi);
}
const fE = {
  version: VT,
  install: AT,
  ActionSheet: Zr,
  AppBar: Jr,
  Avatar: xr,
  AvatarGroup: ea,
  BackTop: na,
  Badge: rr,
  BottomNavigation: ta,
  BottomNavigationItem: oa,
  Breadcrumb: ra,
  Breadcrumbs: aa,
  Button: mn,
  ButtonGroup: ia,
  Card: la,
  Cell: ar,
  Checkbox: ir,
  CheckboxGroup: sa,
  Chip: lr,
  Col: ua,
  Collapse: da,
  CollapseItem: ca,
  Context: wn,
  Countdown: ha,
  Counter: wa,
  DatePicker: Ca,
  Dialog: ka,
  Divider: Pa,
  Drag: vr,
  Ellipsis: Ia,
  Fab: Ea,
  FieldDecorator: mo,
  Form: Ma,
  FormDetails: hn,
  Hover: In,
  HoverOverlay: zn,
  Icon: He,
  Image: Ba,
  ImagePreview: go,
  IndexAnchor: Da,
  IndexBar: Na,
  Input: hr,
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
  Tooltip: mr,
  Uploader: fi,
  Watermark: vi
};
export {
  Zr as ActionSheet,
  Jr as AppBar,
  xr as Avatar,
  ea as AvatarGroup,
  na as BackTop,
  rr as Badge,
  ta as BottomNavigation,
  oa as BottomNavigationItem,
  ra as Breadcrumb,
  aa as Breadcrumbs,
  mn as Button,
  ia as ButtonGroup,
  la as Card,
  ar as Cell,
  ir as Checkbox,
  sa as CheckboxGroup,
  lr as Chip,
  ua as Col,
  da as Collapse,
  ca as CollapseItem,
  wn as Context,
  ha as Countdown,
  wa as Counter,
  Ca as DatePicker,
  ka as Dialog,
  Pa as Divider,
  vr as Drag,
  Ia as Ellipsis,
  Ea as Fab,
  mo as FieldDecorator,
  Ma as Form,
  hn as FormDetails,
  In as Hover,
  zn as HoverOverlay,
  He as Icon,
  Ba as Image,
  go as ImagePreview,
  Da as IndexAnchor,
  Na as IndexBar,
  hr as Input,
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
  mv as SNACKBAR_TYPE,
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
  mr as Tooltip,
  fi as Uploader,
  vi as Watermark,
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
  SI as _FieldDecoratorComponent,
  CI as _FormComponent,
  iI as _FormDetailsComponent,
  ZT as _HoverComponent,
  KT as _HoverOverlayComponent,
  HT as _IconComponent,
  kI as _ImageComponent,
  TI as _ImagePreviewComponent,
  EI as _IndexAnchorComponent,
  MI as _IndexBarComponent,
  BI as _InputComponent,
  WT as _LazyComponent,
  DI as _LinkComponent,
  NI as _ListComponent,
  VI as _LoadingBarComponent,
  XT as _LoadingComponent,
  FT as _LocaleComponent,
  AI as _MenuComponent,
  zI as _OptionComponent,
  LI as _OverlayComponent,
  RI as _PaginationComponent,
  UI as _PaperComponent,
  HI as _PickerComponent,
  UT as _PopupComponent,
  FI as _ProgressComponent,
  YI as _PullRefreshComponent,
  jI as _RadioComponent,
  WI as _RadioGroupComponent,
  qI as _RateComponent,
  GI as _ResultComponent,
  RT as _RippleComponent,
  XI as _RowComponent,
  KI as _SelectComponent,
  ZI as _SkeletonComponent,
  JI as _SliderComponent,
  QI as _SnackbarComponent,
  _I as _SpaceComponent,
  xI as _StepComponent,
  eE as _StepsComponent,
  II as _StickyComponent,
  nE as _StyleProviderComponent,
  PI as _SwipeComponent,
  OI as _SwipeItemComponent,
  tE as _SwitchComponent,
  oE as _TabComponent,
  rE as _TabItemComponent,
  aE as _TableComponent,
  iE as _TabsComponent,
  lE as _TabsItemsComponent,
  sE as _ThemesComponent,
  uE as _TimePickerComponent,
  yI as _TooltipComponent,
  dE as _UploaderComponent,
  cE as _WatermarkComponent,
  xm as actionSheetProps,
  Ci as add,
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
  fE as default,
  Qe as defaultLazyOptions,
  py as dialogProps,
  Dy as dividerProps,
  Ly as dragProps,
  Ud as enUS,
  hl as fieldDecoratorProps,
  Eg as formDetailsProps,
  w$ as formProps,
  Ke as iconProps,
  qd as imageCache,
  G$ as imagePreviewProps,
  P$ as imageProps,
  fw as indexAnchorProps,
  gw as indexBarProps,
  Tw as inputProps,
  AT as install,
  Aw as linkProps,
  Hw as listProps,
  Jw as loadingBarProps,
  tt as loadingProps,
  iS as menuProps,
  Fd as merge,
  vS as optionProps,
  bS as overlayProps,
  nn as pack,
  Hd as packs,
  $S as paginationProps,
  OS as paperProps,
  AS as pickerProps,
  To as popupProps,
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
  _o as stickyProps,
  wP as styleProviderProps,
  wf as swipeProps,
  PP as switchProps,
  UP as tabItemProps,
  NP as tabProps,
  WP as tableProps,
  eO as tabsItemsProps,
  ZP as tabsProps,
  ZO as timePickerProps,
  e$ as tooltipProps,
  lT as uploaderProps,
  ki as use,
  Wn as useHoverOverlay,
  Si as useLocale,
  VT as version,
  wi as zhCN
};
