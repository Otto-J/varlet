import { reactive as je, onMounted as $o, nextTick as Ue, onActivated as vt, isRef as zv, watch as fe, onBeforeUnmount as mr, onDeactivated as jt, onUnmounted as wo, inject as Lv, getCurrentInstance as Wt, computed as N, ref as S, unref as xt, provide as Rv, isVNode as Uv, Comment as Hv, Fragment as Ne, createApp as Fv, h as fd, onBeforeMount as Yv, defineComponent as ee, createVNode as Z, Teleport as Gn, Transition as Ye, withDirectives as Te, vShow as zn, mergeProps as Ae, openBlock as p, createBlock as ke, resolveDynamicComponent as qt, normalizeClass as v, normalizeStyle as H, resolveComponent as se, resolveDirective as Re, withCtx as he, createElementVNode as D, renderSlot as z, toDisplayString as ie, createElementBlock as w, renderList as qe, createCommentVNode as _, onUpdated as So, createTextVNode as Ee, pushScopeId as mt, popScopeId as ht, withModifiers as Pn, normalizeProps as rt, guardReactiveProps as Co, vModelText as jv, createSlots as Qo, withKeys as ts, TransitionGroup as Wv } from "vue";
const vd = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, zT = je(vd);
var $n = je(vd), qv = Object.defineProperty, Gv = Object.defineProperties, Xv = Object.getOwnPropertyDescriptors, os = Object.getOwnPropertySymbols, Kv = Object.prototype.hasOwnProperty, Zv = Object.prototype.propertyIsEnumerable, rs = (e, n, t) => n in e ? qv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Jv = (e, n) => {
  for (var t in n || (n = {}))
    Kv.call(n, t) && rs(e, t, n[t]);
  if (os)
    for (var t of os(n))
      Zv.call(n, t) && rs(e, t, n[t]);
  return e;
}, Qv = (e, n) => Gv(e, Xv(n)), Qe = (e) => typeof e == "string", vi = (e) => typeof e == "boolean", fn = (e) => typeof e == "number", ro = (e) => Object.prototype.toString.call(e) === "[object Object]", _v = (e) => typeof e == "object" && e !== null, Gt = (e) => typeof e == "function", Ve = (e) => Array.isArray(e), xv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Hn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, mi = (e) => e === window, em = () => pt() && "ontouchstart" in window, V = (e) => e == null ? 0 : Qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : vi(e) ? Number(e) : e, _o = (e, n) => {
  if (e.length) {
    const t = e.indexOf(n);
    if (t > -1)
      return e.splice(t, 1);
  }
}, hi = (e, n = 200) => {
  let t, o = 0;
  return function r(...a) {
    const i = Date.now(), l = i - o;
    o || (o = i), t && window.clearTimeout(t), l >= n ? (e.apply(this, a), o = i) : t = window.setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
}, pt = () => typeof window < "u", as = (e) => [...new Set(e)], nm = (e) => pi(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), pi = (e) => e.replace(/-(\w)/g, (n, t) => t.toUpperCase()), md = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), tm = (e, n, t = "start") => {
  let o = t === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && o >= 0 && o <= e.length - 1; ) {
    if (n(e[o], o, e))
      return [e[o], o];
    t === "start" ? o++ : o--;
  }
  return [null, -1];
}, Wo = (e) => Ve(e) ? e : [e], lt = (e, n, t) => Math.min(t, Math.max(n, e)), om = (e, n) => lt(e, 0, n.length - 1), hd = () => typeof globalThis < "u" ? globalThis : pt() ? window : typeof global < "u" ? global : self, ao = (e) => {
  const n = hd();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, is = (e) => {
  const n = hd();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, qo = () => new Promise((e) => {
  ao(e);
}), dn = () => new Promise((e) => {
  ao(() => {
    ao(e);
  });
}), kt = (e) => window.getComputedStyle(e), _e = (e) => {
  if (mi(e)) {
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
    return Qv(Jv({}, o), {
      toJSON: () => o
    });
  }
  return e.getBoundingClientRect();
}, rm = (e) => {
  const { top: n, bottom: t, left: o, right: r } = _e(e), { width: a, height: i } = _e(window), l = o <= a && r >= 0, s = n <= i && t >= 0;
  return l && s;
}, am = Object.defineProperty, xo = Object.getOwnPropertySymbols, pd = Object.prototype.hasOwnProperty, gd = Object.prototype.propertyIsEnumerable, ls = (e, n, t) => n in e ? am(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, im = (e, n) => {
  for (var t in n || (n = {}))
    pd.call(n, t) && ls(e, t, n[t]);
  if (xo)
    for (var t of xo(n))
      gd.call(n, t) && ls(e, t, n[t]);
  return e;
}, lm = (e, n) => {
  var t = {};
  for (var o in e)
    pd.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && xo)
    for (var o of xo(e))
      n.indexOf(o) < 0 && gd.call(e, o) && (t[o] = e[o]);
  return t;
};
function rn(e) {
  let n = !1;
  $o(() => {
    e(), Ue(() => {
      n = !0;
    });
  }), vt(() => {
    n && e();
  });
}
function st(e, n, t, o = {}) {
  if (!pt())
    return;
  const { passive: r = !1, capture: a = !1 } = o;
  let i = !1, l = !1;
  const s = (m) => Gt(m) ? m() : xt(m), u = (m) => {
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
  zv(e) && (c = fe(
    () => e.value,
    (m, g) => {
      d(g), u(m);
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
function bd(e, n, t) {
  if (!pt())
    return;
  st(document, n, (r) => {
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
function sm(e) {
  const n = Wt();
  return e in n.provides;
}
function an(e) {
  if (!sm(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const t = Lv(e), { childInstances: o, collect: r, clear: a } = t, i = lm(t, ["childInstances", "collect", "clear"]), l = Wt();
  return {
    index: N(() => o.indexOf(l)),
    parentProvider: i,
    bindParent: (d) => {
      $o(() => {
        Ue().then(() => {
          r(l, d);
        });
      }), mr(() => {
        Ue().then(() => {
          a(l, d);
        });
      });
    }
  };
}
function um(e) {
  const n = [], t = (o) => {
    if (o != null && o.component) {
      t(o == null ? void 0 : o.component.subTree);
      return;
    }
    Array.isArray(o == null ? void 0 : o.children) && o.children.forEach((r) => {
      Uv(r) && (n.push(r), t(r));
    });
  };
  return t(e), n;
}
function ln(e) {
  const n = Wt(), t = je([]), o = [], r = N(() => t.length), a = () => {
    const u = um(n.subTree);
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
      Rv(e, im({
        childInstances: t,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function ko(e) {
  st(() => window, "resize", e, { passive: !0 }), st(() => window, "orientationchange", e, { passive: !0 });
}
function dm(e, n) {
  const t = S(!1);
  return fe(
    e,
    (o) => {
      n === o && (t.value = !0);
    },
    { immediate: !0 }
  ), t;
}
function cm(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function pr() {
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
      f.value = !0, t.value = k - e.value, o.value = M - n.value, r.value = Math.abs(t.value), a.value = Math.abs(o.value), g.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = k - i.value, u.value = M - l.value, d.value || (d.value = cm(r.value, a.value)), i.value = k, l.value = M;
    },
    endTouch: () => {
      c.value = !1, h = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    }
  };
}
function yd() {
  const e = S(), n = Wt(), t = md(n.type.name);
  return e.value = `${t}-${n.uid}`, e;
}
var fm = Object.defineProperty, ss = Object.getOwnPropertySymbols, vm = Object.prototype.hasOwnProperty, mm = Object.prototype.propertyIsEnumerable, us = (e, n, t) => n in e ? fm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ds = (e, n) => {
  for (var t in n || (n = {}))
    vm.call(n, t) && us(e, t, n[t]);
  if (ss)
    for (var t of ss(n))
      mm.call(n, t) && us(e, t, n[t]);
  return e;
}, qr = (e, n, t) => new Promise((o, r) => {
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
function re(e, n) {
  const t = n ?? e;
  return t.install = function(o) {
    const { name: r } = e;
    r && o.component(r, e);
  }, t;
}
function hm(e) {
  const n = Fv(e), t = document.createElement("div");
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
      return () => fd(e, ds(ds({}, n), t));
    }
  }, { unmount: r } = hm(o);
  return { unmountInstance: r };
}
function $d(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.type !== Hv) {
      if (t.type === Ne && Ve(t.children)) {
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
  const e = S(""), n = (r, a, i) => qr(this, null, function* () {
    return !Ve(r) || !r.length ? !0 : !(yield Promise.all(r.map((s) => s(a, i)))).some((s) => s !== !0 ? (e.value = String(s), !0) : !1);
  });
  return {
    errorMessage: e,
    validate: n,
    resetValidation: () => {
      e.value = "";
    },
    validateWithTrigger: (r, a, i, l, s) => qr(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function pm(e) {
  st(() => window, "hashchange", e), st(() => window, "popstate", e);
}
function Kt() {
  const e = S(!1);
  return vt(() => {
    e.value = !1;
  }), jt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ne(e) {
  const n = "var", t = `${n}-${e}`, o = (a) => a ? a[0] === "$" ? a.replace("$", n) : a.startsWith("--") ? `${t}${a}` : `${t}__${a}` : t, r = (...a) => a.map((i) => {
    if (Ve(i)) {
      const [l, s, u = null] = i;
      return l ? s : u;
    }
    return i;
  });
  return {
    name: nm(t),
    n: o,
    classes: r
  };
}
function y(e, ...n) {
  if (Ve(e))
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
function pn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
function zt(e, n, t = {}) {
  const { passive: o = !0, eventName: r, defaultValue: a, emit: i } = t, l = r ?? `onUpdate:${n.toString()}`, s = () => e[n] != null ? e[n] : a;
  if (!o)
    return N({
      get() {
        return s();
      },
      set(c) {
        i ? i(l, c) : y(e[l], c);
      }
    });
  const u = S(s());
  let d = !1;
  return fe(
    () => e[n],
    () => qr(this, null, function* () {
      d || (d = !0, u.value = s(), yield Ue(), d = !1);
    })
  ), fe(
    () => u.value,
    (c) => {
      d || (i ? i(l, c) : y(e[l], c));
    }
  ), u;
}
var gm = Object.defineProperty, bm = Object.defineProperties, ym = Object.getOwnPropertyDescriptors, cs = Object.getOwnPropertySymbols, $m = Object.prototype.hasOwnProperty, wm = Object.prototype.propertyIsEnumerable, fs = (e, n, t) => n in e ? gm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, wd = (e, n) => {
  for (var t in n || (n = {}))
    $m.call(n, t) && fs(e, t, n[t]);
  if (cs)
    for (var t of cs(n))
      wm.call(n, t) && fs(e, t, n[t]);
  return e;
}, Sm = (e, n) => bm(e, ym(n));
const { n: Sd } = ne("ripple"), vs = 250;
function Cm(e) {
  const { zIndex: n, position: t } = kt(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", t === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function km(e, n) {
  const { top: t, left: o } = _e(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = n.touches[0].clientX - o, u = n.touches[0].clientY - t, d = (r - i * 2) / 2, c = (a - i * 2) / 2, f = s - i, m = u - i;
  return { x: f, y: m, centerX: d, centerY: c, size: l };
}
function Cd(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !$n.enableRipple)
    return;
  const t = () => {
    n.tasker = null;
    const { x: o, y: r, centerX: a, centerY: i, size: l } = km(this, e), s = document.createElement("div");
    s.classList.add(Sd()), s.style.opacity = "0", s.style.transform = `translate(${o}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Cm(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(t, 30);
}
function Gr() {
  const e = this._ripple, n = () => {
    const t = this.querySelectorAll(`.${Sd()}`);
    if (!t.length)
      return;
    const o = t[t.length - 1], r = vs - performance.now() + Number(o.dataset.createdAt);
    window.setTimeout(() => {
      o.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = o.parentNode) == null ? void 0 : a.removeChild(o);
      }, vs);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function kd() {
  if (!em() || !$n.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
function Pm(e, n) {
  var t;
  e._ripple = Sm(wd({
    tasker: null
  }, (t = n.value) != null ? t : {}), {
    removeRipple: Gr.bind(e)
  }), e.addEventListener("touchstart", Cd, { passive: !0 }), e.addEventListener("touchmove", kd, { passive: !0 }), e.addEventListener("dragstart", Gr, { passive: !0 }), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 });
}
function Om(e) {
  e.removeEventListener("touchstart", Cd), e.removeEventListener("touchmove", kd), e.removeEventListener("dragstart", Gr), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Tm(e, n) {
  var t, o, r, a, i, l;
  const s = {
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = wd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const Pd = {
  mounted: Pm,
  unmounted: Om,
  updated: Tm,
  install(e) {
    e.directive("ripple", this);
  }
}, LT = Pd;
var Ke = Pd;
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
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOverlay: A(),
  "onUpdate:show": A(),
  // internal for Dialog
  onRouteChange: A()
};
function Od() {
  Object.keys($n.locks).length <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Vo(e) {
  $n.locks[e] = 1, Od();
}
function Ao(e) {
  delete $n.locks[e], Od();
}
function gr(e, n) {
  const { uid: t } = Wt();
  n && fe(n, (o) => {
    o === !1 ? Ao(t) : o === !0 && e() === !0 && Vo(t);
  }), fe(e, (o) => {
    n && n() === !1 || (o === !0 ? Vo(t) : Ao(t));
  }), Yv(() => {
    n && n() === !1 || e() === !0 && Vo(t);
  }), wo(() => {
    n && n() === !1 || e() === !0 && Ao(t);
  }), vt(() => {
    n && n() === !1 || e() === !0 && Vo(t);
  }), jt(() => {
    n && n() === !1 || e() === !0 && Ao(t);
  });
}
function Oo(e, n) {
  const t = S($n.zIndex);
  return fe(
    e,
    (o) => {
      o && ($n.zIndex += n, t.value = $n.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: t };
}
const Td = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Em() {
  const { bindParent: e, parentProvider: n, index: t } = an(Td);
  return {
    index: t,
    popup: n,
    bindPopup: e
  };
}
function Im() {
  const { bindChildren: e, childProviders: n, length: t } = ln(Td);
  return {
    length: t,
    popupItems: n,
    bindPopupItems: e
  };
}
var Mm = Object.defineProperty, ms = Object.getOwnPropertySymbols, Bm = Object.prototype.hasOwnProperty, Dm = Object.prototype.propertyIsEnumerable, hs = (e, n, t) => n in e ? Mm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Nm = (e, n) => {
  for (var t in n || (n = {}))
    Bm.call(n, t) && hs(e, t, n[t]);
  if (ms)
    for (var t of ms(n))
      Dm.call(n, t) && hs(e, t, n[t]);
  return e;
};
const {
  name: Vm,
  n: Bn,
  classes: Br
} = ne("popup");
var gi = ee({
  name: Vm,
  inheritAttrs: !1,
  props: Po,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = dm(() => e.show, !0), {
      zIndex: r
    } = Oo(() => e.show, 3), {
      disabled: a
    } = Kt(), {
      bindPopupItems: i
    } = Im();
    gr(() => e.show, () => e.lockScroll), fe(() => e.show, (c) => {
      y(c ? e.onOpen : e.onClose);
    }), i({
      show: N(() => e.show)
    }), pm(() => y(e.onRouteChange));
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
        class: Br(Bn("overlay"), c),
        style: Nm({
          zIndex: r.value - 1
        }, f),
        onClick: l
      }, null);
    }
    function u() {
      return Te(Z("div", Ae({
        class: Br(Bn("content"), Bn(`--${e.position}`), [e.defaultStyle, Bn("--content-background-color")], [e.defaultStyle, Bn("$-elevation--3")], [e.safeArea, Bn("--safe-area")], [e.safeAreaTop, Bn("--safe-area-top")]),
        style: {
          zIndex: r.value
        }
      }, t), [o.value && y(n.default)]), [[zn, e.show]]);
    }
    function d() {
      return Z(Ye, {
        name: Bn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Te(Z("div", {
          class: Br(Bn("$--box"), Bn()),
          style: {
            zIndex: r.value - 2
          }
        }, [e.overlay && s(), Z(Ye, {
          name: e.transition || Bn(`$-pop-${e.position}`)
        }, {
          default: () => [u()]
        })]), [[zn, e.show]])]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? Z(Gn, {
        to: c,
        disabled: a.value
      }, {
        default: () => [d()]
      }) : d();
    };
  }
});
re(gi);
const RT = gi;
var ut = gi;
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
  onClick: A()
};
function On(e, n) {
  throw Error(`Varlet [${e}]: ${n}`);
}
function ps(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function Am(e) {
  const { left: n } = _e(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function gs(e) {
  const { top: n } = _e(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function io(e) {
  const n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function bi(e) {
  const n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Dr(e) {
  const { transform: n } = kt(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function dt(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const t = /(scroll|auto)/, { overflowY: o, overflow: r } = kt(n);
    if (t.test(o) || t.test(r))
      return n;
  }
  return window;
}
function zm(e) {
  const n = [];
  let t = e;
  for (; !mi(t); )
    t = dt(t), n.push(t);
  return n;
}
function Id(e, n) {
  if (Qe(e)) {
    const t = document.querySelector(e);
    return t || On(n, "target element cannot found"), t;
  }
  if (_v(e))
    return e;
  On(n, 'type of prop "target" should be a selector or an element object');
}
function Lm() {
  const { width: e, height: n } = _e(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const Md = (e) => Qe(e) && e.endsWith("rem"), Rm = (e) => Qe(e) && e.endsWith("em") && !e.endsWith("rem"), Um = (e) => Qe(e) && e.endsWith("px") || fn(e), Hm = (e) => Qe(e) && e.endsWith("%"), Bd = (e) => Qe(e) && e.endsWith("vw"), Dd = (e) => Qe(e) && e.endsWith("vh"), Nd = (e) => Qe(e) && e.endsWith("vmin"), Vd = (e) => Qe(e) && e.endsWith("vmax"), Fm = (e) => Qe(e) && e.startsWith("calc("), Ym = (e) => Qe(e) && e.startsWith("var("), Fe = (e) => {
  if (fn(e))
    return e;
  if (Um(e))
    return +e.replace("px", "");
  if (!pt())
    return 0;
  const { vw: n, vh: t, vMin: o, vMax: r } = Lm();
  if (Bd(e))
    return +e.replace("vw", "") * n / 100;
  if (Dd(e))
    return +e.replace("vh", "") * t / 100;
  if (Nd(e))
    return +e.replace("vmin", "") * o / 100;
  if (Vd(e))
    return +e.replace("vmax", "") * r / 100;
  if (Md(e)) {
    const a = +e.replace("rem", ""), i = kt(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return Qe(e) ? V(e) : 0;
}, Ce = (e) => {
  if (e != null)
    return Hm(e) || Bd(e) || Dd(e) || Rm(e) || Md(e) || Fm(e) || Ym(e) || Nd(e) || Vd(e) ? e : `${Fe(e)}px`;
}, sn = (e, n = 1) => {
  if (e == null)
    return;
  const t = Ce(e), o = t.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(t) * n}${o}`;
};
function lo(e, { top: n = 0, left: t = 0, duration: o = 300, animation: r }) {
  const a = Date.now(), i = io(e), l = bi(e);
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
function Ad(e) {
  return Object.entries(e ?? {}).reduce((n, [t, o]) => {
    const r = t.startsWith("--") ? t : `--${md(t)}`;
    return n[r] = o, n;
  }, {});
}
function er(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
var jm = (e, n, t) => new Promise((o, r) => {
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
const { name: Wm, n: qm, classes: Gm } = ne("icon");
function Xm(e, n) {
  return p(), ke(qt(e.isURL(e.name) ? "img" : "i"), {
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
const zd = ee({
  name: Wm,
  props: Ed,
  setup(e) {
    const n = S(""), t = S(!1);
    fe(() => e.name, o, { immediate: !0 });
    function o(r, a) {
      return jm(this, null, function* () {
        const { transition: i } = e;
        if (a == null || V(i) === 0) {
          n.value = r;
          return;
        }
        t.value = !0, yield Ue(), setTimeout(() => {
          a != null && (n.value = r), t.value = !1;
        }, V(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: t,
      n: qm,
      classes: Gm,
      isURL: xv,
      toNumber: V,
      toSizeUnit: Ce
    };
  }
});
zd.render = Xm;
var yi = zd;
re(yi);
const UT = yi;
var He = yi, Km = Object.defineProperty, bs = Object.getOwnPropertySymbols, Zm = Object.prototype.hasOwnProperty, Jm = Object.prototype.propertyIsEnumerable, ys = (e, n, t) => n in e ? Km(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Qm = (e, n) => {
  for (var t in n || (n = {}))
    Zm.call(n, t) && ys(e, t, n[t]);
  if (bs)
    for (var t of bs(n))
      Jm.call(n, t) && ys(e, t, n[t]);
  return e;
};
const _m = Qm({
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
var $i = {
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
}, Ld = {
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
}, xm = Object.defineProperty, $s = Object.getOwnPropertySymbols, eh = Object.prototype.hasOwnProperty, nh = Object.prototype.propertyIsEnumerable, ws = (e, n, t) => n in e ? xm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ss = (e, n) => {
  for (var t in n || (n = {}))
    eh.call(n, t) && ws(e, t, n[t]);
  if ($s)
    for (var t of $s(n))
      nh.call(n, t) && ws(e, t, n[t]);
  return e;
};
function wi() {
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
      e[a] = Ss(Ss({}, e[a]), i), o(a);
    }
  };
}
const { packs: Rd, pack: xe, add: Si, use: Ci, merge: Ud } = wi();
Si("zh-CN", $i);
Ci("zh-CN");
const HT = { zhCN: $i, enUS: Ld, packs: Rd, pack: xe, add: Si, use: Ci, merge: Ud, useLocale: wi };
var Xr = {
  zhCN: $i,
  enUS: Ld,
  packs: Rd,
  pack: xe,
  add: Si,
  use: Ci,
  merge: Ud,
  useLocale: wi
};
const { name: th, n: oh, classes: rh } = ne("action-sheet"), ah = ["onClick"];
function ih(e, n) {
  const t = se("var-icon"), o = se("var-popup"), r = Re("ripple");
  return p(), ke(o, Ae({
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
        Ae({
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
              Ne,
              null,
              qe(e.actions, (a) => Te((p(), w("div", {
                class: v(e.classes(e.n("action-item"), a.className, [a.disabled, e.n("--disabled")])),
                key: a.name,
                style: H({ color: a.color }),
                onClick: (i) => e.handleSelect(a)
              }, [
                a.icon ? (p(), ke(t, {
                  key: 0,
                  class: v(e.n("action-icon")),
                  "var-action-sheet-cover": "",
                  name: a.icon,
                  size: a.iconSize
                }, null, 8, ["class", "name", "size"])) : _("v-if", !0),
                D(
                  "div",
                  {
                    class: v(e.n("action-name"))
                  },
                  ie(a.name),
                  3
                  /* TEXT, CLASS */
                )
              ], 14, ah)), [
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
const Hd = ee({
  name: th,
  directives: { Ripple: Ke },
  components: {
    VarPopup: ut,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: _m,
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
      n: oh,
      classes: rh,
      handlePopupUpdateShow: o,
      handleSelect: t
    };
  }
});
Hd.render = ih;
var To = Hd, lh = Object.defineProperty, Cs = Object.getOwnPropertySymbols, sh = Object.prototype.hasOwnProperty, uh = Object.prototype.propertyIsEnumerable, ks = (e, n, t) => n in e ? lh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ps = (e, n) => {
  for (var t in n || (n = {}))
    sh.call(n, t) && ks(e, t, n[t]);
  if (Cs)
    for (var t of Cs(n))
      uh.call(n, t) && ks(e, t, n[t]);
  return e;
};
let _n, ki = {};
function dh(e = {}) {
  return Ps(Ps({}, ki), e);
}
function Pt(e) {
  return pt() ? new Promise((n) => {
    Pt.close();
    const t = je(dh(e));
    t.teleport = "body", _n = t;
    const { unmountInstance: o } = Xt(To, t, {
      onSelect: (r) => {
        y(t.onSelect, r), n(r);
      },
      onClose: () => {
        y(t.onClose), n("close");
      },
      onClosed: () => {
        y(t.onClosed), o(), _n === t && (_n = null);
      },
      onRouteChange: () => {
        o(), _n === t && (_n = null);
      },
      "onUpdate:show": (r) => {
        t.show = r;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
Pt.setDefaultOptions = function(e) {
  ki = e;
};
Pt.resetDefaultOptions = function() {
  ki = {};
};
Pt.close = function() {
  if (_n != null) {
    const e = _n;
    _n = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
Pt.Component = To;
re(To);
re(To, Pt);
const FT = To;
var Kr = Pt;
const ch = {
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
}, { name: fh, n: vh, classes: mh } = ne("app-bar");
function hh(e, n) {
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
              )) : _("v-if", !0)
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
          )) : _("v-if", !0),
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
              )) : _("v-if", !0),
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
const Fd = ee({
  name: fh,
  props: ch,
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
    rn(a), So(a);
    function a() {
      t.value = n.left ? 0 : void 0, o.value = n.right ? 0 : void 0;
    }
    return {
      rootStyles: r,
      paddingLeft: t,
      paddingRight: o,
      n: vh,
      classes: mh,
      formatElevation: pn
    };
  }
});
Fd.render = hh;
var Pi = Fd;
re(Pi);
const YT = Pi;
var Zr = Pi;
const Os = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ts = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), ph = (e) => {
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
}, Jr = (e) => e, Es = (e) => e ** 3, Yd = (e) => e < 0.5 ? Es(e * 2) / 2 : 1 - Es((1 - e) * 2) / 2, wt = (e = "", n, t = "") => {
  if (e.length >= n)
    return e;
  const o = n - e.length, r = Math.floor(o / t.length);
  return t.repeat(r) + t.slice(0, o % t.length) + e;
};
var gh = Object.defineProperty, Is = Object.getOwnPropertySymbols, bh = Object.prototype.hasOwnProperty, yh = Object.prototype.propertyIsEnumerable, Ms = (e, n, t) => n in e ? gh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, $h = (e, n) => {
  for (var t in n || (n = {}))
    bh.call(n, t) && Ms(e, t, n[t]);
  if (Is)
    for (var t of Is(n))
      yh.call(n, t) && Ms(e, t, n[t]);
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
const wh = "background-image", Sh = "lazy-loading", Ch = "lazy-error", Bs = "lazy-attempt", kh = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Qr = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Lt = [], nr = [], jd = ph(100), Ze = {
  loading: Qr,
  error: Qr,
  attempt: 3,
  throttleWait: 300,
  events: kh
};
let Oi = hi(Eo, Ze.throttleWait);
function yr(e, n) {
  e._lazy.arg === wh ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function Ph(e) {
  e._lazy.loading && yr(e, e._lazy.loading), Eo();
}
function Oh(e) {
  e._lazy.error && yr(e, e._lazy.error), e._lazy.state = "error", Ei(e), Eo();
}
function Wd(e, n) {
  yr(e, n), e._lazy.state = "success", Ei(e), Eo();
}
function Th(e) {
  var n;
  nr.includes(e) || (nr.push(e), (n = Ze.events) == null || n.forEach((t) => {
    e.addEventListener(t, Oi, { passive: !0 });
  }));
}
function Eh() {
  nr.forEach((e) => {
    var n;
    (n = Ze.events) == null || n.forEach((t) => {
      e.removeEventListener(t, Oi);
    });
  }), nr.length = 0;
}
function Ih(e, n) {
  var t, o;
  const r = {
    loading: (t = e.getAttribute(Sh)) != null ? t : Ze.loading,
    error: (o = e.getAttribute(Ch)) != null ? o : Ze.error,
    attempt: e.getAttribute(Bs) ? Number(e.getAttribute(Bs)) : Ze.attempt
  };
  e._lazy = $h({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), yr(e, Qr), y(Ze.filter, e._lazy);
}
function Mh(e, n) {
  const t = new Image();
  t.src = n, e._lazy.preloadImage = t, t.addEventListener("load", () => {
    e._lazy.attemptLock = !1, jd.add(n), Wd(e, n);
  }), t.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Oh(e) : qd(e);
  });
}
function qd(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (jd.has(n)) {
    Wd(e, n), e._lazy.attemptLock = !1;
    return;
  }
  Ph(e), Mh(e, n);
}
function Ti(e) {
  return br(this, null, function* () {
    yield dn(), rm(e) && qd(e);
  });
}
function Eo() {
  Lt.forEach((e) => Ti(e));
}
function Bh(e) {
  return br(this, null, function* () {
    !Lt.includes(e) && Lt.push(e), zm(e).forEach(Th), yield Ti(e);
  });
}
function Ei(e) {
  _o(Lt, e), Lt.length === 0 && Eh();
}
function Dh(e, n) {
  const { src: t, arg: o } = e._lazy;
  return t !== n.value || o !== n.arg;
}
function Gd(e, n) {
  return br(this, null, function* () {
    Ih(e, n), yield Bh(e);
  });
}
function Nh(e, n) {
  return br(this, null, function* () {
    if (!Dh(e, n)) {
      Lt.includes(e) && (yield Ti(e));
      return;
    }
    yield Gd(e, n);
  });
}
function Vh(e = {}) {
  const { events: n, loading: t, error: o, attempt: r, throttleWait: a, filter: i } = e;
  Ze.events = n ?? Ze.events, Ze.loading = t ?? Ze.loading, Ze.error = o ?? Ze.error, Ze.attempt = r ?? Ze.attempt, Ze.throttleWait = a ?? Ze.throttleWait, Ze.filter = i;
}
const Xd = {
  mounted: Gd,
  unmounted: Ei,
  updated: Nh,
  install(e, n) {
    Vh(n), Oi = hi(Eo, Ze.throttleWait), e.directive("lazy", this);
  }
}, jT = Xd;
var so = Xd;
const Ah = {
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
}, zh = (e) => ["mini", "small", "normal", "large"].includes(e), { name: Lh, n: Rh, classes: Uh } = ne("avatar"), Hh = ["src", "alt", "lazy-loading", "lazy-error"], Fh = ["src", "alt"];
function Yh(e, n) {
  const t = Re("lazy");
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
        Ne,
        { key: 0 },
        [
          e.lazy ? Te((p(), w("img", {
            key: 0,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: H({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...o) => e.handleLoad && e.handleLoad(...o))
          }, null, 46, Hh)), [
            [t, e.src]
          ]) : (p(), w("img", {
            key: 1,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: H({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...o) => e.handleLoad && e.handleLoad(...o)),
            onError: n[2] || (n[2] = (...o) => e.handleError && e.handleError(...o))
          }, null, 46, Fh))
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
const Kd = ee({
  name: Lh,
  directives: { Lazy: so },
  props: Ah,
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
      n: Rh,
      classes: Uh,
      isInternalSize: zh,
      toSizeUnit: Ce,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
Kd.render = Yh;
var Ii = Kd;
re(Ii);
const WT = Ii;
var _r = Ii;
const jh = {
  offset: [Number, String],
  vertical: Boolean
}, { name: Wh, n: qh, classes: Gh } = ne("avatar-group");
function Xh(e, n) {
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
const Zd = ee({
  name: Wh,
  props: jh,
  setup(e) {
    return {
      rootStyles: N(() => e.offset == null ? {} : {
        "--avatar-group-offset": Ce(e.offset)
      }),
      n: qh,
      classes: Gh,
      toSizeUnit: Ce
    };
  }
});
Zd.render = Xh;
var Mi = Zd;
re(Mi);
const qT = Mi;
var xr = Mi;
const nt = {
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
}, { name: Kh, n: Zh, classes: Jh } = ne("loading"), Qh = (e) => (mt(""), e = e(), ht(), e), _h = /* @__PURE__ */ Qh(() => /* @__PURE__ */ D(
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
)), xh = [
  _h
];
function ep(e, n) {
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
          )) : _("v-if", !0)
        ],
        2
        /* CLASS */
      )) : _("v-if", !0),
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
                xh,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : _("v-if", !0),
          (p(!0), w(
            Ne,
            null,
            qe(e.loadingTypeDict, (t, o) => (p(), w(
              Ne,
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
                      Ne,
                      null,
                      qe(t, (r) => (p(), w(
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
                )) : _("v-if", !0)
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
const Jd = ee({
  name: Kh,
  props: nt,
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
      n: Zh,
      classes: Jh,
      multiplySizeUnit: sn
    };
  }
});
Jd.render = ep;
var Bi = Jd;
re(Bi);
const GT = Bi;
var Rt = Bi;
const np = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, { name: tp, n: op, classes: rp } = ne("hover-overlay");
function ap(e, n) {
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
const Qd = ee({
  name: tp,
  props: np,
  setup: () => ({
    n: op,
    classes: rp
  })
});
Qd.render = ap;
var Di = Qd;
re(Di);
function jn() {
  const e = S(!1);
  return {
    hovering: e,
    handleHovering: (t) => {
      e.value = t;
    }
  };
}
const XT = Di;
var An = Di;
function _d(e) {
  if (!e)
    return !1;
  const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function ip(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((t, o) => {
    const [r, a] = o.split(":").map((i) => i.trim());
    return t[pi(r)] = a, t;
  }, {}) : {};
}
function lp(e) {
  const { value: n } = e._hover, t = ip(e);
  Object.keys(n).forEach((o) => {
    const r = pi(o);
    n[r] != null && t[r] && (e._hover.rawStyle[r] = t[r]);
  });
}
function Ni(e, n) {
  Object.keys(n).forEach((t) => {
    const o = n[t];
    o != null && (e.style[t] = o);
  });
}
function sp(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function xd(e) {
  sp(e), Ni(e, e._hover.rawStyle);
}
function ec() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, Gt(e)) {
    e(this._hover.hovering);
    return;
  }
  Ni(this, e);
}
function nc() {
  if (this._hover.hovering = !1, Gt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  xd(this);
}
function tc(e, n) {
  var t, o;
  const { arg: r, value: a } = n;
  _d(r) || (e._hover = {
    value: a,
    hovering: (o = (t = e._hover) == null ? void 0 : t.hovering) != null ? o : !1,
    rawStyle: {}
  }, lp(e), e.addEventListener("mouseenter", ec), e.addEventListener("mouseleave", nc));
}
function oc(e, n) {
  _d(n.arg) || (xd(e), e.removeEventListener("mouseenter", ec), e.removeEventListener("mouseleave", nc));
}
function up(e, n) {
  e._hover && oc(e, n);
}
function dp(e, n) {
  return !Gt(n.value) && e._hover.hovering;
}
function cp(e, n) {
  tc(e, n), dp(e, n) && Ni(e, n.value);
}
const rc = {
  mounted: tc,
  unmounted: oc,
  beforeUpdate: up,
  updated: cp,
  install(e) {
    e.directive("hover", this);
  }
}, KT = rc;
var Tn = rc, fp = Object.defineProperty, vp = Object.defineProperties, mp = Object.getOwnPropertyDescriptors, Ds = Object.getOwnPropertySymbols, hp = Object.prototype.hasOwnProperty, pp = Object.prototype.propertyIsEnumerable, Ns = (e, n, t) => n in e ? fp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, gp = (e, n) => {
  for (var t in n || (n = {}))
    hp.call(n, t) && Ns(e, t, n[t]);
  if (Ds)
    for (var t of Ds(n))
      pp.call(n, t) && Ns(e, t, n[t]);
  return e;
}, bp = (e, n) => vp(e, mp(n));
const yp = {
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
  loadingType: en(nt, "type"),
  loadingSize: en(nt, "size"),
  loadingColor: bp(gp({}, en(nt, "color")), {
    default: "currentColor"
  }),
  onClick: A(),
  onTouchstart: A()
}, ac = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function $p() {
  const { bindChildren: e, childProviders: n, length: t } = ln(ac);
  return {
    length: t,
    buttons: n,
    bindButtons: e
  };
}
function wp() {
  const { bindParent: e, parentProvider: n, index: t } = an(ac);
  return {
    index: t,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: Sp, n: Cp, classes: kp } = ne("button"), Pp = ["type", "disabled"];
function Op(e, n) {
  const t = se("var-loading"), o = se("var-hover-overlay"), r = Re("ripple"), a = Re("hover");
  return Te((p(), w("button", {
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
    }, null, 8, ["class", "color", "type", "size", "radius"])) : _("v-if", !0),
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
  ], 46, Pp)), [
    [r, { disabled: e.disabled || !e.ripple }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const ic = ee({
  name: Sp,
  components: {
    VarLoading: Rt,
    VarHoverOverlay: An
  },
  directives: { Ripple: Ke, Hover: Tn },
  props: yp,
  setup(e) {
    const n = S(!1), { buttonGroup: t } = wp(), { hovering: o, handleHovering: r } = jn(), a = N(() => {
      if (!t)
        return {
          elevation: pn(e.elevation, 2),
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
      e.autoLoading && (n.value = !0, u = Ve(u) ? u : [u], Promise.all(u).then(() => {
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
      n: Cp,
      classes: kp,
      handleHovering: r,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
ic.render = Op;
var Vi = ic;
re(Vi);
const ZT = Vi;
var vn = Vi;
const Tp = {
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
}, { name: Ep, n: Ip, classes: Mp } = ne("back-top");
function Bp(e, n) {
  const t = se("var-icon"), o = se("var-button");
  return p(), ke(Gn, {
    to: "body",
    disabled: e.disabled
  }, [
    D(
      "div",
      Ae({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Pn((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
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
const lc = ee({
  name: Ep,
  components: {
    VarButton: vn,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: Tp,
  setup(e) {
    const n = S(!1), t = S(null), o = S(!0);
    let r;
    const a = hi(() => {
      n.value = io(r) >= Fe(e.visibilityHeight);
    }, 200);
    $o(() => {
      l(), s(), o.value = !1;
    }), vt(s), hr(u);
    function i(d) {
      y(e.onClick, d);
      const c = bi(r);
      lo(r, {
        left: c,
        duration: e.duration,
        animation: Yd
      });
    }
    function l() {
      r = e.target ? Id(e.target, "BackTop") : dt(t.value);
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
      n: Ip,
      classes: Mp,
      handleClick: i
    };
  }
});
lc.render = Bp;
var Ai = lc;
re(Ai);
const JT = Ai;
var ea = Ai;
const Dp = {
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
}, { name: Np, n: Vp, classes: Ap } = ne("badge");
function zp(e, n) {
  const t = se("var-icon");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      z(e.$slots, "default"),
      Z(Ye, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: he(() => [
          Te(D(
            "span",
            Ae({
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
                name: e.icon
              }, null, 8, ["class", "name"])) : _("v-if", !0),
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
                )) : _("v-if", !0)
              ])
            ],
            16
            /* FULL_PROPS */
          ), [
            [zn, !e.hidden]
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
const sc = ee({
  name: Np,
  components: { VarIcon: He },
  inheritAttrs: !1,
  props: Dp,
  setup(e) {
    return {
      value: N(() => {
        const { value: t, maxValue: o } = e;
        return t != null && o != null && V(t) > V(o) ? `${o}+` : t;
      }),
      n: Vp,
      classes: Ap
    };
  }
});
sc.render = zp;
var zi = sc;
re(zi);
const QT = zi;
var tr = zi;
const Lp = {
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
}, uc = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function Rp() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    uc
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: t
  };
}
var Up = Object.defineProperty, Vs = Object.getOwnPropertySymbols, Hp = Object.prototype.hasOwnProperty, Fp = Object.prototype.propertyIsEnumerable, As = (e, n, t) => n in e ? Up(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, zs = (e, n) => {
  for (var t in n || (n = {}))
    Hp.call(n, t) && As(e, t, n[t]);
  if (Vs)
    for (var t of Vs(n))
      Fp.call(n, t) && As(e, t, n[t]);
  return e;
};
const { name: Yp, n: jp, classes: Wp } = ne("bottom-navigation"), { n: $r } = ne("bottom-navigation-item"), Ls = $r("--right-half-space"), Rs = $r("--left-half-space"), Us = $r("--right-space"), qp = {
  type: "primary"
};
function Gp(e, n) {
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
      e.$slots.fab ? (p(), ke(t, Ae({
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
      }, 16, ["class", "onClick"])) : _("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const dc = ee({
  name: Yp,
  components: { VarButton: vn },
  props: Lp,
  setup(e, { slots: n }) {
    const t = S(null), o = N(() => e.active), r = N(() => e.activeColor), a = N(() => e.inactiveColor), i = S({}), { length: l, bottomNavigationItems: s, bindBottomNavigationItem: u } = Rp();
    u({
      active: o,
      activeColor: r,
      inactiveColor: a,
      onToggle: h
    }), fe(() => l.value, c), fe(
      () => e.fabProps,
      (P) => {
        i.value = zs(zs({}, qp), P);
      },
      { immediate: !0, deep: !0 }
    ), rn(() => {
      n.fab && O(l.value);
    }), So(() => {
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
      fn(o.value) && (o.value < 0 ? y(e["onUpdate:active"], 0) : o.value > l.value - 1 && y(e["onUpdate:active"], l.value - 1));
    }
    function h(P) {
      o.value !== P && (e.onBeforeChange ? b(P) : C(P));
    }
    function b(P) {
      const B = Wo(y(e.onBeforeChange, P));
      Promise.all(B).then((E) => {
        E.every(Boolean) && C(P);
      });
    }
    function C(P) {
      y(e["onUpdate:active"], P), y(e.onChange, P);
    }
    function T() {
      k().forEach((B) => {
        B.classList.remove(Ls, Rs, Us);
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
        B.classList.add(Us);
        return;
      }
      const U = E === R / 2 - 1, oe = E === R / 2;
      U ? B.classList.add(Ls) : oe && B.classList.add(Rs);
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
      n: jp,
      classes: Wp,
      handleFabClick: M
    };
  }
});
dc.render = Gp;
var Li = dc;
re(Li);
const _T = Li;
var na = Li;
const Xp = {
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
  onClick: A()
};
function Kp() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    uc
  );
  return t || On("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: t
  };
}
const { name: Zp, n: Jp, classes: Qp } = ne("bottom-navigation-item"), _p = {
  type: "danger",
  dot: !0
};
function xp(e, n) {
  const t = se("var-icon"), o = se("var-badge"), r = Re("ripple");
  return Te((p(), w(
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
      }, null, 8, ["name", "namespace", "class"])) : _("v-if", !0),
      z(e.$slots, "icon", {
        active: e.active === e.index || e.active === e.name
      }),
      e.badge ? (p(), ke(o, Ae({ key: 1 }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }), null, 16, ["class"])) : _("v-if", !0),
      D(
        "span",
        {
          class: v(e.n("label"))
        },
        [
          e.$slots.default ? _("v-if", !0) : (p(), w(
            Ne,
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
const cc = ee({
  name: Zp,
  components: {
    VarBadge: tr,
    VarIcon: He
  },
  directives: { Ripple: Ke },
  props: Xp,
  setup(e) {
    const n = N(() => e.name), t = N(() => e.badge), o = S({}), { index: r, bottomNavigation: a, bindBottomNavigation: i } = Kp(), { active: l, activeColor: s, inactiveColor: u } = a;
    i({
      name: n,
      index: r
    }), fe(
      () => t.value,
      (m) => {
        o.value = m === !0 ? _p : t.value;
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
      n: Jp,
      classes: Qp,
      computeColorStyle: c,
      handleClick: f
    };
  }
});
cc.render = xp;
var Ri = cc;
re(Ri);
const xT = Ri;
var ta = Ri;
const eg = {
  separator: String,
  onClick: A()
}, fc = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function ng() {
  const { childProviders: e, bindChildren: n, length: t } = ln(
    fc
  );
  return {
    length: t,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function tg() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    fc
  );
  return n || On("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: t,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: og, n: rg, classes: ag } = ne("breadcrumb");
function ig(e, n) {
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
      e.isLast ? _("v-if", !0) : z(e.$slots, "separator", { key: 0 }, () => {
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
const vc = ee({
  name: og,
  props: eg,
  setup(e) {
    const { index: n, breadcrumb: t, bindBreadcrumb: o } = tg(), r = N(() => n.value === t.length.value - 1), a = N(() => t.separator.value);
    o(null);
    function i(l) {
      r.value || y(e.onClick, l);
    }
    return {
      n: rg,
      classes: ag,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
vc.render = ig;
var Ui = vc;
re(Ui);
const eE = Ui;
var oa = Ui;
const lg = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: sg, n: ug } = ne("breadcrumbs");
function dg(e, n) {
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
const mc = ee({
  name: sg,
  props: lg,
  setup(e) {
    const n = N(() => e.separator), { bindBreadcrumbList: t, length: o } = ng();
    return t({
      length: o,
      separator: n
    }), { n: ug };
  }
});
mc.render = dg;
var Hi = mc;
re(Hi);
const nE = Hi;
var ra = Hi;
const cg = {
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
}, { name: fg, n: vg, classes: mg } = ne("button-group");
function hg(e, n) {
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
const hc = ee({
  name: fg,
  props: cg,
  setup(e) {
    const { bindButtons: n } = $p(), t = {
      elevation: N(() => e.elevation),
      type: N(() => e.type),
      size: N(() => e.size),
      color: N(() => e.color),
      textColor: N(() => e.textColor),
      mode: N(() => e.mode)
    };
    return n(t), {
      n: vg,
      classes: mg,
      formatElevation: pn
    };
  }
});
hc.render = hg;
var Fi = hc;
re(Fi);
const tE = Fi;
var aa = Fi;
const pg = {
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
var Hs = (e, n, t) => new Promise((o, r) => {
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
const { name: gg, n: bg, classes: yg } = ne("card"), $g = 500, wg = ["src", "alt"];
function Sg(e, n) {
  const t = se("var-icon"), o = se("var-button"), r = Re("ripple");
  return Te((p(), w(
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
            }, null, 14, wg)) : _("v-if", !0)
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
                )) : _("v-if", !0)
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
                )) : _("v-if", !0)
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
                )) : _("v-if", !0)
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
              )) : _("v-if", !0),
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
              )) : _("v-if", !0)
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
                  onClick: Pn(e.close, ["stop"])
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
          )) : _("v-if", !0)
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
const pc = ee({
  name: gg,
  directives: { Ripple: Ke },
  components: {
    VarIcon: He,
    VarButton: vn
  },
  props: pg,
  setup(e) {
    const n = S(null), t = S(null), o = S("auto"), r = S("auto"), a = S("100%"), i = S("100%"), l = S("auto"), s = S("auto"), u = S(void 0), d = S("hidden"), c = S("0px"), f = S("0"), m = N(() => e.layout === "row"), g = S(!1), h = S(!1), { zIndex: b } = Oo(() => e.floating, 1);
    let C = "auto", T = "auto", O = null;
    const $ = S(null);
    gr(
      () => e.floating,
      () => !m.value
    ), fe(
      () => e.floating,
      (E) => {
        m.value || Ue(() => {
          E ? k() : M();
        });
      },
      { immediate: !0 }
    );
    function k() {
      return Hs(this, null, function* () {
        clearTimeout($.value), clearTimeout(O), $.value = null, $.value = setTimeout(
          () => Hs(this, null, function* () {
            const { width: E, height: R, left: L, top: U } = _e(n.value);
            o.value = Ce(E), r.value = Ce(R), a.value = o.value, i.value = r.value, l.value = Ce(U), s.value = Ce(L), u.value = "fixed", C = l.value, T = s.value, g.value = !0, yield dn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", h.value = !0;
          }),
          e.ripple ? $g : 0
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
      n: bg,
      classes: yg,
      toSizeUnit: Ce,
      close: P,
      formatElevation: pn,
      handleClick: B
    };
  }
});
pc.render = Sg;
var Yi = pc;
re(Yi);
const oE = Yi;
var ia = Yi;
const Cg = {
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
  onClick: A()
}, { name: kg, n: Pg, classes: Og } = ne("cell");
function Tg(e, n) {
  const t = se("var-icon"), o = Re("ripple");
  return Te((p(), w(
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
            Z(t, { name: e.icon }, null, 8, ["name"])
          ],
          2
          /* CLASS */
        )) : _("v-if", !0)
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
            )) : _("v-if", !0)
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
            )) : _("v-if", !0)
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
      )) : _("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const gc = ee({
  name: kg,
  components: { VarIcon: He },
  directives: { Ripple: Ke },
  props: Cg,
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
      n: Pg,
      classes: Og,
      toSizeUnit: Ce,
      handleClick: t
    };
  }
});
gc.render = Tg;
var ji = gc;
re(ji);
const rE = ji;
var or = ji;
const Eg = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: Ig, n: Mg } = ne("form-details"), Bg = { key: 0 }, Dg = { key: 0 };
function Ng(e, n) {
  return p(), ke(Ye, {
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
              Z(Ye, {
                name: e.n("message")
              }, {
                default: he(() => [
                  e.errorMessage ? (p(), w(
                    "div",
                    Bg,
                    ie(e.errorMessage),
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
          D(
            "div",
            {
              class: v(e.n("extra-message"))
            },
            [
              Z(Ye, {
                name: e.n("message")
              }, {
                default: he(() => [
                  z(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (p(), w(
                      "div",
                      Dg,
                      ie(e.extraMessage),
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
const bc = ee({
  name: Ig,
  props: Eg,
  setup: () => ({ n: Mg })
});
bc.render = Ng;
var Wi = bc;
re(Wi);
const aE = Wi;
var mn = Wi;
const Vg = {
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
}, yc = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Ag() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    yc
  );
  return {
    length: t,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function zg() {
  const { bindParent: e, parentProvider: n, index: t } = an(
    yc
  );
  return {
    index: t,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var Lg = Object.defineProperty, Rg = Object.defineProperties, Ug = Object.getOwnPropertyDescriptors, Fs = Object.getOwnPropertySymbols, Hg = Object.prototype.hasOwnProperty, Fg = Object.prototype.propertyIsEnumerable, Ys = (e, n, t) => n in e ? Lg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Yg = (e, n) => {
  for (var t in n || (n = {}))
    Hg.call(n, t) && Ys(e, t, n[t]);
  if (Fs)
    for (var t of Fs(n))
      Fg.call(n, t) && Ys(e, t, n[t]);
  return e;
}, jg = (e, n) => Rg(e, Ug(n));
const $c = Symbol("FORM_BIND_FORM_ITEM_KEY");
function In() {
  const { parentProvider: e, index: n, bindParent: t } = an($c), o = Wt();
  return {
    index: n,
    form: e,
    bindForm: t ? (a) => {
      t(jg(Yg({}, a), { instance: o }));
    } : null
  };
}
function Wg() {
  const { childProviders: e, length: n, bindChildren: t } = ln($c);
  return {
    length: n,
    formItems: e,
    bindFormItems: t
  };
}
const { name: qg, n: Gg, classes: Xg } = ne("checkbox");
function Kg(e, n) {
  const t = se("var-icon"), o = se("var-hover-overlay"), r = se("var-form-details"), a = Re("hover"), i = Re("ripple");
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
          Te((p(), w(
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
              ]) : _("v-if", !0),
              e.checked && !e.isIndeterminate ? z(e.$slots, "checked-icon", { key: 1 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-marked",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : _("v-if", !0),
              !e.checked && !e.isIndeterminate ? z(e.$slots, "unchecked-icon", { key: 2 }, () => [
                Z(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-blank-outline",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : _("v-if", !0),
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
const wc = ee({
  name: qg,
  directives: { Ripple: Ke, Hover: Tn },
  components: {
    VarIcon: He,
    VarFormDetails: mn,
    VarHoverOverlay: An
  },
  props: Vg,
  setup(e) {
    const n = zt(e, "modelValue"), t = zt(e, "indeterminate"), o = N(() => n.value === e.checkedValue), r = N(() => e.checkedValue), a = S(!1), { checkboxGroup: i, bindCheckboxGroup: l } = zg(), { hovering: s, handleHovering: u } = jn(), { form: d, bindForm: c } = In(), {
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
    function C(E) {
      Ue(() => {
        const { validateTrigger: R, rules: L, modelValue: U } = e;
        m(R, E, L, U);
      });
    }
    function T(E) {
      const { checkedValue: R, onChange: L } = e;
      n.value = E, t.value = !1, y(L, n.value), C("onChange"), E === R ? i == null || i.onChecked(R) : i == null || i.onUnchecked(R);
    }
    function O(E) {
      const { disabled: R, readonly: L, checkedValue: U, uncheckedValue: oe, onClick: G } = e;
      if (d != null && d.disabled.value || R || (y(G, E), d != null && d.readonly.value || L))
        return;
      a.value = !0;
      const W = i ? i.checkedCount.value >= Number(i.max.value) : !1;
      !o.value && W || T(o.value ? oe : U);
    }
    function $(E) {
      const { checkedValue: R, uncheckedValue: L } = e;
      n.value = E.includes(R) ? R : L;
    }
    function k() {
      a.value = !1;
    }
    function M() {
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
      n: Gg,
      classes: Xg,
      handleHovering: u,
      handleClick: O,
      toggle: P,
      reset: M,
      validate: B,
      resetValidation: h
    };
  }
});
wc.render = Kg;
var qi = wc;
re(qi);
const iE = qi;
var rr = qi;
const Zg = {
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
}, { name: Jg, n: Qg, classes: _g } = ne("checkbox-group");
function xg(e, n) {
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
const Sc = ee({
  name: Jg,
  components: { VarFormDetails: mn },
  props: Zg,
  setup(e) {
    const n = N(() => e.max), t = N(() => e.modelValue.length), { length: o, checkboxes: r, bindCheckboxes: a } = Ag(), { bindForm: i } = In(), {
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
      Ue(() => {
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
    function C() {
      return r.forEach(({ sync: P }) => P(e.modelValue));
    }
    function T() {
      r.forEach((P) => P.resetWithAnimation());
    }
    function O() {
      const P = r.map(({ checkedValue: E }) => E.value), B = as(P);
      return T(), y(e["onUpdate:modelValue"], B), B;
    }
    function $() {
      const P = r.filter(({ checked: E }) => !E.value).map(({ checkedValue: E }) => E.value), B = as(P);
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
      n: Qg,
      classes: _g,
      checkAll: O,
      inverseAll: $,
      reset: k,
      validate: M,
      resetValidation: d
    };
  }
});
Sc.render = xg;
var Gi = Sc;
re(Gi);
const lE = Gi;
var la = Gi;
const e0 = {
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
  onClose: A()
}, { name: n0, n: Xn, classes: t0 } = ne("chip");
function o0(e, n) {
  const t = se("var-icon");
  return p(), ke(Ye, {
    name: e.n("$-fade")
  }, {
    default: he(() => [
      D(
        "span",
        Ae({
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
const Cc = ee({
  name: n0,
  components: {
    VarIcon: He
  },
  inheritAttrs: !1,
  props: e0,
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
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = Xn(a ? "$--flex" : "$--inline-flex"), d = l ? `${Xn("plain")} ${Xn(`plain-${i}`)}` : Xn(`--${i}`), c = s ? Xn("--round") : null;
      return [Xn(`--${r}`), u, d, c];
    });
    function o(r) {
      y(e.onClose, r);
    }
    return {
      chipStyles: n,
      contentClass: t,
      n: Xn,
      classes: t0,
      handleClose: o
    };
  }
});
Cc.render = o0;
var Xi = Cc;
re(Xi);
const sE = Xi;
var ar = Xi;
const r0 = {
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
}, kc = Symbol("ROW_BIND_COL_KEY");
function a0() {
  const { bindChildren: e, childProviders: n, length: t } = ln(kc);
  return {
    length: t,
    cols: n,
    bindCols: e
  };
}
function i0() {
  const { parentProvider: e, index: n, bindParent: t } = an(kc);
  return {
    index: n,
    row: e,
    bindRow: t
  };
}
const { name: l0, n: zo, classes: s0 } = ne("col");
function u0(e, n) {
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
const Pc = ee({
  name: l0,
  props: r0,
  setup(e) {
    const n = N(() => V(e.span)), t = N(() => V(e.offset)), o = S({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = i0(), i = {
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
      classes: s0,
      toNumber: V,
      toSizeUnit: Ce,
      getSize: l,
      handleClick: s,
      padStartFlex: er
    };
  }
});
Pc.render = u0;
var Ki = Pc;
re(Ki);
const uE = Ki;
var sa = Ki;
const Oc = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function d0() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    Oc
  );
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: t
  };
}
const c0 = {
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
}, { name: f0, n: v0 } = ne("collapse");
function m0(e, n) {
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
const Tc = ee({
  name: f0,
  props: c0,
  setup(e) {
    const n = N(() => e.modelValue), t = N(() => e.offset), o = N(() => e.divider), r = N(() => e.elevation), { length: a, collapseItem: i, bindCollapseItem: l } = d0(), s = {
      active: n,
      offset: t,
      divider: o,
      elevation: r,
      updateItem: c
    };
    fe(
      () => a.value,
      () => Ue().then(g)
    ), fe(
      () => e.modelValue,
      () => Ue().then(g)
    ), l(s);
    function u() {
      return !e.accordion && !Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0;
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
      n: v0
    };
  }
});
Tc.render = m0;
var Zi = Tc;
re(Zi);
const dE = Zi;
var ua = Zi;
function h0() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    Oc
  );
  return t || On("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: t
  };
}
const p0 = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
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
const { name: g0, n: b0, classes: y0 } = ne("collapse-item");
function $0(e, n) {
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
      Te(D(
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
        [zn, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Ec = ee({
  name: g0,
  components: {
    VarIcon: He
  },
  props: p0,
  setup(e) {
    const n = S(!1), t = S(!1), o = S(null), r = N(() => e.name), { index: a, collapse: i, bindCollapse: l } = h0(), { active: s, offset: u, divider: d, elevation: c, updateItem: f } = i, m = {
      index: a,
      name: r,
      init: C
    };
    let g = !0;
    fe(n, (k) => {
      k ? h() : b();
    }), l(m);
    function h() {
      return js(this, null, function* () {
        if (!o.value || (o.value.style.height = "", t.value = !0, yield qo(), !o.value))
          return;
        const { offsetHeight: k } = o.value;
        o.value.style.height = "0px", yield qo(), o.value && (o.value.style.height = k + "px", g && (yield dn(), g && $()));
      });
    }
    function b() {
      return js(this, null, function* () {
        if (!o.value)
          return;
        const { offsetHeight: k } = o.value;
        o.value.style.height = k + "px", yield qo(), o.value.style.height = "0px";
      });
    }
    function C(k, M) {
      s.value === void 0 || k && Ve(s.value) || M === n.value || (n.value = M, T(!0));
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
      n: b0,
      start: O,
      classes: y0,
      toggle: T,
      transitionend: $,
      formatElevation: pn
    };
  }
});
Ec.render = $0;
var Ji = Ec;
re(Ji);
const cE = Ji;
var da = Ji;
const w0 = {
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
}, { name: S0, n: C0 } = ne("countdown"), ca = 1e3, fa = 60 * ca, va = 60 * fa, Ws = 24 * va;
function k0(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      z(e.$slots, "default", rt(Co(e.timeData)), () => [
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
const Ic = ee({
  name: S0,
  props: w0,
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
    ), vt(() => {
      l != null && (r = l, r === !0 && c(!0));
    }), jt(() => {
      l = r, f();
    }), wo(f);
    function s(g, h) {
      const b = Object.values(h), C = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (C.forEach((O, $) => {
        g.includes(O) ? g = g.replace(O, wt(`${b[$]}`, 2, "0")) : b[$ + 1] += b[$] * T[$];
      }), g.includes("S")) {
        const O = wt(`${b[b.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", O) : g.includes("SS") ? g = g.replace("SS", O.slice(0, 2)) : g = g.replace("S", O.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const h = Math.floor(g / Ws), b = Math.floor(g % Ws / va), C = Math.floor(g % va / fa), T = Math.floor(g % fa / ca), O = Math.floor(g % ca), $ = {
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
      r && (a = ao(d));
    }
    function c(g = !1) {
      r && !g || (r = !0, o = performance.now() + (i || V(e.time)), d());
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
      n: C0,
      start: c,
      pause: f,
      reset: m
    };
  }
});
Ic.render = k0;
var Qi = Ic;
re(Qi);
const fE = Qi;
var ma = Qi;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Mt = 9e15, gt = 1e9, ha = "0123456789abcdef", ir = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", lr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", pa = {
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
  minE: -Mt,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Mt,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Mc, Fn, $e = !0, wr = "[DecimalError] ", ct = wr + "Invalid argument: ", Bc = wr + "Precision limit exceeded", Dc = wr + "crypto unavailable", Nc = "[object Decimal]", on = Math.floor, Je = Math.pow, P0 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, O0 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, T0 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Vc = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Vn = 1e7, be = 7, E0 = 9007199254740991, I0 = ir.length - 1, ga = lr.length - 1, X = { toStringTag: Nc };
X.absoluteValue = X.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), pe(e);
};
X.ceil = function() {
  return pe(new this.constructor(this), this.e + 1, 2);
};
X.clampedTo = X.clamp = function(e, n) {
  var t, o = this, r = o.constructor;
  if (e = new r(e), n = new r(n), !e.s || !n.s)
    return new r(NaN);
  if (e.gt(n))
    throw Error(ct + n);
  return t = o.cmp(e), t < 0 ? e : o.cmp(n) > 0 ? n : new r(o);
};
X.comparedTo = X.cmp = function(e) {
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
X.cosine = X.cos = function() {
  var e, n, t = this, o = t.constructor;
  return t.d ? t.d[0] ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + be, o.rounding = 1, t = M0(o, Uc(o, t)), o.precision = e, o.rounding = n, pe(Fn == 2 || Fn == 3 ? t.neg() : t, e, n, !0)) : new o(1) : new o(NaN);
};
X.cubeRoot = X.cbrt = function() {
  var e, n, t, o, r, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new c(d);
  for ($e = !1, a = d.s * Je(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (t = tn(d.d), e = d.e, (a = (e - t.length + 1) % 3) && (t += a == 1 || a == -2 ? "0" : "00"), a = Je(t, 1 / 3), e = on((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), o = new c(t), o.s = d.s) : o = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = o, s = l.times(l).times(l), u = s.plus(d), o = Le(u.plus(d).times(l), u.plus(s), i + 2, 1), tn(l.d).slice(0, i) === (t = tn(o.d)).slice(0, i))
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
X.decimalPlaces = X.dp = function() {
  var e, n = this.d, t = NaN;
  if (n) {
    if (e = n.length - 1, t = (e - on(this.e / be)) * be, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
X.dividedBy = X.div = function(e) {
  return Le(this, new this.constructor(e));
};
X.dividedToIntegerBy = X.divToInt = function(e) {
  var n = this, t = n.constructor;
  return pe(Le(n, new t(e), 0, 1, 1), t.precision, t.rounding);
};
X.equals = X.eq = function(e) {
  return this.cmp(e) === 0;
};
X.floor = function() {
  return pe(new this.constructor(this), this.e + 1, 3);
};
X.greaterThan = X.gt = function(e) {
  return this.cmp(e) > 0;
};
X.greaterThanOrEqualTo = X.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
X.hyperbolicCosine = X.cosh = function() {
  var e, n, t, o, r, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite())
    return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return l;
  t = i.precision, o = i.rounding, i.precision = t + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / Cr(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = Ut(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return pe(a, i.precision = t, i.rounding = o, !0);
};
X.hyperbolicSine = X.sinh = function() {
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
  return a.precision = n, a.rounding = t, pe(r, n, t, !0);
};
X.hyperbolicTangent = X.tanh = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 7, o.rounding = 1, Le(t.sinh(), t.cosh(), o.precision = e, o.rounding = n)) : new o(t.s);
};
X.inverseCosine = X.acos = function() {
  var e, n = this, t = n.constructor, o = n.abs().cmp(1), r = t.precision, a = t.rounding;
  return o !== -1 ? o === 0 ? n.isNeg() ? Nn(t, r, a) : new t(0) : new t(NaN) : n.isZero() ? Nn(t, r + 4, a).times(0.5) : (t.precision = r + 6, t.rounding = 1, n = n.asin(), e = Nn(t, r + 4, a).times(0.5), t.precision = r, t.rounding = a, e.minus(n));
};
X.inverseHyperbolicCosine = X.acosh = function() {
  var e, n, t = this, o = t.constructor;
  return t.lte(1) ? new o(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, o.rounding = 1, $e = !1, t = t.times(t).minus(1).sqrt().plus(t), $e = !0, o.precision = e, o.rounding = n, t.ln()) : new o(t);
};
X.inverseHyperbolicSine = X.asinh = function() {
  var e, n, t = this, o = t.constructor;
  return !t.isFinite() || t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, o.rounding = 1, $e = !1, t = t.times(t).plus(1).sqrt().plus(t), $e = !0, o.precision = e, o.rounding = n, t.ln());
};
X.inverseHyperbolicTangent = X.atanh = function() {
  var e, n, t, o, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, o = r.sd(), Math.max(o, e) < 2 * -r.e - 1 ? pe(new a(r), e, n, !0) : (a.precision = t = o - r.e, r = Le(r.plus(1), new a(1).minus(r), t + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
X.inverseSine = X.asin = function() {
  var e, n, t, o, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), t = a.precision, o = a.rounding, n !== -1 ? n === 0 ? (e = Nn(a, t + 4, o).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = t + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = t, a.rounding = o, r.times(2)));
};
X.inverseTangent = X.atan = function() {
  var e, n, t, o, r, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && c + 4 <= ga)
      return i = Nn(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (c + 4 <= ga)
      return i = Nn(d, c + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = c + 10, d.rounding = 1, t = Math.min(28, l / be + 2 | 0), e = t; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for ($e = !1, n = Math.ceil(l / be), o = 1, s = u.times(u), i = new d(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(o += 2)), r = r.times(s), i = a.plus(r.div(o += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === a.d[e] && e--; )
        ;
  return t && (i = i.times(2 << t - 1)), $e = !0, pe(i, d.precision = c, d.rounding = f, !0);
};
X.isFinite = function() {
  return !!this.d;
};
X.isInteger = X.isInt = function() {
  return !!this.d && on(this.e / be) > this.d.length - 2;
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
  if ($e = !1, l = c + m, i = tt(u, l), o = n ? sr(d, l + 10) : tt(e, l), s = Le(i, o, l, 1), uo(s.d, r = c, f))
    do
      if (l += 10, i = tt(u, l), o = n ? sr(d, l + 10) : tt(e, l), s = Le(i, o, l, 1), !a) {
        +tn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = pe(s, c + 1, 0));
        break;
      }
    while (uo(s.d, r += 10, f));
  return $e = !0, pe(s, c, f);
};
X.minus = X.sub = function(e) {
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
  if (t = on(e.e / be), d = on(m.e / be), u = u.slice(), a = d - t, a) {
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
        u[r] = Vn - 1;
      --u[r], u[o] += Vn;
    }
    u[o] -= f[o];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --t;
  return u[0] ? (e.d = u, e.e = Sr(u, t), $e ? pe(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
X.modulo = X.mod = function(e) {
  var n, t = this, o = t.constructor;
  return e = new o(e), !t.d || !e.s || e.d && !e.d[0] ? new o(NaN) : !e.d || t.d && !t.d[0] ? pe(new o(t), o.precision, o.rounding) : ($e = !1, o.modulo == 9 ? (n = Le(t, e.abs(), 0, 3, 1), n.s *= e.s) : n = Le(t, e, 0, o.modulo, 1), n = n.times(e), $e = !0, t.minus(n));
};
X.naturalExponential = X.exp = function() {
  return ba(this);
};
X.naturalLogarithm = X.ln = function() {
  return tt(this);
};
X.negated = X.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, pe(e);
};
X.plus = X.add = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), $e ? pe(e, l, s) : e;
  if (a = on(c.e / be), o = on(e.e / be), u = u.slice(), r = a - o, r) {
    for (r < 0 ? (t = u, r = -r, i = d.length) : (t = d, o = a, i = u.length), a = Math.ceil(l / be), i = a > i ? a + 1 : i + 1, r > i && (r = i, t.length = 1), t.reverse(); r--; )
      t.push(0);
    t.reverse();
  }
  for (i = u.length, r = d.length, i - r < 0 && (r = i, t = d, d = u, u = t), n = 0; r; )
    n = (u[--r] = u[r] + d[r] + n) / Vn | 0, u[r] %= Vn;
  for (n && (u.unshift(n), ++o), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = Sr(u, o), $e ? pe(e, l, s) : e;
};
X.precision = X.sd = function(e) {
  var n, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(ct + e);
  return t.d ? (n = Ac(t.d), e && t.e + 1 > n && (n = t.e + 1)) : n = NaN, n;
};
X.round = function() {
  var e = this, n = e.constructor;
  return pe(new n(e), e.e + 1, n.rounding);
};
X.sine = X.sin = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + be, o.rounding = 1, t = D0(o, Uc(o, t)), o.precision = e, o.rounding = n, pe(Fn > 2 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
X.squareRoot = X.sqrt = function() {
  var e, n, t, o, r, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for ($e = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = tn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = on((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), o = new d(n)) : o = new d(u.toString()), t = (s = d.precision) + 3; ; )
    if (a = o, o = a.plus(Le(i, a, t + 2, 1)).times(0.5), tn(a.d).slice(0, t) === (n = tn(o.d)).slice(0, t))
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
X.tangent = X.tan = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 10, o.rounding = 1, t = t.sin(), t.s = 1, t = Le(t, new o(1).minus(t.times(t)).sqrt(), e + 10, 0), o.precision = e, o.rounding = n, pe(Fn == 2 || Fn == 4 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
X.times = X.mul = function(e) {
  var n, t, o, r, a, i, l, s, u, d = this, c = d.constructor, f = d.d, m = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new c(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (t = on(d.e / be) + on(e.e / be), s = f.length, u = m.length, s < u && (a = f, f = m, m = a, i = s, s = u, u = i), a = [], i = s + u, o = i; o--; )
    a.push(0);
  for (o = u; --o >= 0; ) {
    for (n = 0, r = s + o; r > o; )
      l = a[r] + m[o] * f[r - o - 1] + n, a[r--] = l % Vn | 0, n = l / Vn | 0;
    a[r] = (a[r] + n) % Vn | 0;
  }
  for (; !a[--i]; )
    a.pop();
  return n ? ++t : a.shift(), e.d = a, e.e = Sr(a, t), $e ? pe(e, c.precision, c.rounding) : e;
};
X.toBinary = function(e, n) {
  return _i(this, 2, e, n);
};
X.toDecimalPlaces = X.toDP = function(e, n) {
  var t = this, o = t.constructor;
  return t = new o(t), e === void 0 ? t : (hn(e, 0, gt), n === void 0 ? n = o.rounding : hn(n, 0, 8), pe(t, e + t.e + 1, n));
};
X.toExponential = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Ln(o, !0) : (hn(e, 0, gt), n === void 0 ? n = r.rounding : hn(n, 0, 8), o = pe(new r(o), e + 1, n), t = Ln(o, !0, e + 1)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
X.toFixed = function(e, n) {
  var t, o, r = this, a = r.constructor;
  return e === void 0 ? t = Ln(r) : (hn(e, 0, gt), n === void 0 ? n = a.rounding : hn(n, 0, 8), o = pe(new a(r), e + r.e + 1, n), t = Ln(o, !1, e + o.e + 1)), r.isNeg() && !r.isZero() ? "-" + t : t;
};
X.toFraction = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c, f, m = this, g = m.d, h = m.constructor;
  if (!g)
    return new h(m);
  if (u = t = new h(1), o = s = new h(0), n = new h(o), a = n.e = Ac(g) - m.e - 1, i = a % be, n.d[0] = Je(10, i < 0 ? be + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new h(e), !l.isInt() || l.lt(u))
      throw Error(ct + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for ($e = !1, l = new h(tn(g)), d = h.precision, h.precision = a = g.length * be * 2; c = Le(l, n, 0, 1, 1), r = t.plus(c.times(o)), r.cmp(e) != 1; )
    t = o, o = r, r = u, u = s.plus(c.times(r)), s = r, r = n, n = l.minus(c.times(r)), l = r;
  return r = Le(e.minus(t), o, 0, 1, 1), s = s.plus(r.times(u)), t = t.plus(r.times(o)), s.s = u.s = m.s, f = Le(u, o, a, 1).minus(m).abs().cmp(Le(s, t, a, 1).minus(m).abs()) < 1 ? [u, o] : [s, t], h.precision = d, $e = !0, f;
};
X.toHexadecimal = X.toHex = function(e, n) {
  return _i(this, 16, e, n);
};
X.toNearest = function(e, n) {
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
  return e.d[0] ? ($e = !1, t = Le(t, e, 0, n, 1).times(e), $e = !0, pe(t)) : (e.s = t.s, t = e), t;
};
X.toNumber = function() {
  return +this;
};
X.toOctal = function(e, n) {
  return _i(this, 8, e, n);
};
X.toPower = X.pow = function(e) {
  var n, t, o, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Je(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (o = s.precision, a = s.rounding, e.eq(1))
    return pe(l, o, a);
  if (n = on(e.e / be), n >= e.d.length - 1 && (t = u < 0 ? -u : u) <= E0)
    return r = zc(s, l, t, o), e.s < 0 ? new s(1).div(r) : pe(r, o, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return t = Je(+l, u), n = t == 0 || !isFinite(t) ? on(u * (Math.log("0." + tn(l.d)) / Math.LN10 + l.e + 1)) : new s(t + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : ($e = !1, s.rounding = l.s = 1, t = Math.min(12, (n + "").length), r = ba(e.times(tt(l, o + t)), o), r.d && (r = pe(r, o + 5, 1), uo(r.d, o, a) && (n = o + 10, r = pe(ba(e.times(tt(l, n + t)), n), n + 5, 1), +tn(r.d).slice(o + 1, o + 15) + 1 == 1e14 && (r = pe(r, o + 1, 0)))), r.s = i, $e = !0, s.rounding = a, pe(r, o, a));
};
X.toPrecision = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Ln(o, o.e <= r.toExpNeg || o.e >= r.toExpPos) : (hn(e, 1, gt), n === void 0 ? n = r.rounding : hn(n, 0, 8), o = pe(new r(o), e, n), t = Ln(o, e <= o.e || o.e <= r.toExpNeg, e)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
X.toSignificantDigits = X.toSD = function(e, n) {
  var t = this, o = t.constructor;
  return e === void 0 ? (e = o.precision, n = o.rounding) : (hn(e, 1, gt), n === void 0 ? n = o.rounding : hn(n, 0, 8)), pe(new o(t), e, n);
};
X.toString = function() {
  var e = this, n = e.constructor, t = Ln(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
X.truncated = X.trunc = function() {
  return pe(new this.constructor(this), this.e + 1, 1);
};
X.valueOf = X.toJSON = function() {
  var e = this, n = e.constructor, t = Ln(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function tn(e) {
  var n, t, o, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      o = e[n] + "", t = be - o.length, t && (a += Zn(t)), a += o;
    i = e[n], o = i + "", t = be - o.length, t && (a += Zn(t));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return a + i;
}
function hn(e, n, t) {
  if (e !== ~~e || e < n || e > t)
    throw Error(ct + e);
}
function uo(e, n, t, o) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10)
    --n;
  return --n < 0 ? (n += be, r = 0) : (r = Math.ceil((n + 1) / be), n %= be), a = Je(10, be - n), l = e[r] % a | 0, o == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = t < 4 && l == 99999 || t > 3 && l == 49999 || l == 5e4 || l == 0) : i = (t < 4 && l + 1 == a || t > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == Je(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (o || t < 4) && l == 9999 || !o && t > 3 && l == 4999) : i = ((o || t < 4) && l + 1 == a || !o && t > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == Je(10, n - 3) - 1, i;
}
function Go(e, n, t) {
  for (var o, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; )
      r[a] *= n;
    for (r[0] += ha.indexOf(e.charAt(i++)), o = 0; o < r.length; o++)
      r[o] > t - 1 && (r[o + 1] === void 0 && (r[o + 1] = 0), r[o + 1] += r[o] / t | 0, r[o] %= t);
  }
  return r.reverse();
}
function M0(e, n) {
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
var Le = function() {
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
    var u, d, c, f, m, g, h, b, C, T, O, $, k, M, P, B, E, R, L, U, oe = o.constructor, G = o.s == r.s ? 1 : -1, W = o.d, K = r.d;
    if (!W || !W[0] || !K || !K[0])
      return new oe(
        // Return NaN if either NaN, or both Infinity or 0.
        !o.s || !r.s || (W ? K && W[0] == K[0] : !K) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          W && W[0] == 0 || !K ? G * 0 : G / 0
        )
      );
    for (s ? (m = 1, d = o.e - r.e) : (s = Vn, m = be, d = on(o.e / m) - on(r.e / m)), L = K.length, E = W.length, C = new oe(G), T = C.d = [], c = 0; K[c] == (W[c] || 0); c++)
      ;
    if (K[c] > (W[c] || 0) && d--, a == null ? (M = a = oe.precision, i = oe.rounding) : l ? M = a + (o.e - r.e) + 1 : M = a, M < 0)
      T.push(1), g = !0;
    else {
      if (M = M / m + 2 | 0, c = 0, L == 1) {
        for (f = 0, K = K[0], M++; (c < E || f) && M--; c++)
          P = f * s + (W[c] || 0), T[c] = P / K | 0, f = P % K | 0;
        g = f || c < E;
      } else {
        for (f = s / (K[0] + 1) | 0, f > 1 && (K = e(K, f, s), W = e(W, f, s), L = K.length, E = W.length), B = L, O = W.slice(0, L), $ = O.length; $ < L; )
          O[$++] = 0;
        U = K.slice(), U.unshift(0), R = K[0], K[1] >= s / 2 && ++R;
        do
          f = 0, u = n(K, O, L, $), u < 0 ? (k = O[0], L != $ && (k = k * s + (O[1] || 0)), f = k / R | 0, f > 1 ? (f >= s && (f = s - 1), h = e(K, f, s), b = h.length, $ = O.length, u = n(h, O, b, $), u == 1 && (f--, t(h, L < b ? U : K, b, s))) : (f == 0 && (u = f = 1), h = K.slice()), b = h.length, b < $ && h.unshift(0), t(O, h, $, s), u == -1 && ($ = O.length, u = n(K, O, L, $), u < 1 && (f++, t(O, L < $ ? U : K, $, s))), $ = O.length) : u === 0 && (f++, O = [0]), T[c++] = f, u && O[0] ? O[$++] = W[B] || 0 : (O = [W[B]], $ = 1);
        while ((B++ < E || O[0] !== void 0) && M--);
        g = O[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (m == 1)
      C.e = d, Mc = g;
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
        a += be, i = n, d = c[f = 0], s = d / Je(10, r - i - 1) % 10 | 0;
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
        a %= be, i = a - be + r, s = i < 0 ? 0 : d / Je(10, r - i - 1) % 10 | 0;
      }
      if (o = o || n < 0 || c[f + 1] !== void 0 || (i < 0 ? d : d % Je(10, r - i - 1)), u = t < 4 ? (s || o) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (t == 4 || o || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? i > 0 ? d / Je(10, r - i) : 0 : c[f - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), n < 1 || !c[0])
        return c.length = 0, u ? (n -= e.e + 1, c[0] = Je(10, (be - n % be) % be), e.e = -n || 0) : c[0] = e.e = 0, e;
      if (a == 0 ? (c.length = f, l = 1, f--) : (c.length = f + 1, l = Je(10, be - a), c[f] = i > 0 ? (d / Je(10, r - i) % Je(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (a = 1, i = c[0]; i >= 10; i /= 10)
              a++;
            for (i = c[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            a != l && (e.e++, c[0] == Vn && (c[0] = 1));
            break;
          } else {
            if (c[f] += l, c[f] != Vn)
              break;
            c[f--] = 0, l = 1;
          }
      for (a = c.length; c[--a] === 0; )
        c.pop();
    }
  return $e && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Ln(e, n, t) {
  if (!e.isFinite())
    return Rc(e);
  var o, r = e.e, a = tn(e.d), i = a.length;
  return n ? (t && (o = t - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Zn(o) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + Zn(-r - 1) + a, t && (o = t - i) > 0 && (a += Zn(o))) : r >= i ? (a += Zn(r + 1 - i), t && (o = t - r - 1) > 0 && (a = a + "." + Zn(o))) : ((o = r + 1) < i && (a = a.slice(0, o) + "." + a.slice(o)), t && (o = t - i) > 0 && (r + 1 === i && (a += "."), a += Zn(o))), a;
}
function Sr(e, n) {
  var t = e[0];
  for (n *= be; t >= 10; t /= 10)
    n++;
  return n;
}
function sr(e, n, t) {
  if (n > I0)
    throw $e = !0, t && (e.precision = t), Error(Bc);
  return pe(new e(ir), n, 1, !0);
}
function Nn(e, n, t) {
  if (n > ga)
    throw Error(Bc);
  return pe(new e(lr), n, t, !0);
}
function Ac(e) {
  var n = e.length - 1, t = n * be + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      t--;
    for (n = e[0]; n >= 10; n /= 10)
      t++;
  }
  return t;
}
function Zn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function zc(e, n, t, o) {
  var r, a = new e(1), i = Math.ceil(o / be + 4);
  for ($e = !1; ; ) {
    if (t % 2 && (a = a.times(n), Gs(a.d, i) && (r = !0)), t = on(t / 2), t === 0) {
      t = a.d.length - 1, r && a.d[t] === 0 && ++a.d[t];
      break;
    }
    n = n.times(n), Gs(n.d, i);
  }
  return $e = !0, a;
}
function qs(e) {
  return e.d[e.d.length - 1] & 1;
}
function Lc(e, n, t) {
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
  var t, o, r, a, i, l, s, u = 0, d = 0, c = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? ($e = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (o = Math.log(Je(2, c)) / Math.LN10 * 2 + 5 | 0, s += o, t = a = i = new f(1), f.precision = s; ; ) {
    if (a = pe(a.times(e), s, 1), t = t.times(++d), l = i.plus(Le(a, t, s, 1)), tn(l.d).slice(0, s) === tn(i.d).slice(0, s)) {
      for (r = c; r--; )
        i = pe(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && uo(i.d, s - o, m, u))
          f.precision = s += 10, t = a = l = new f(1), d = 0, u++;
        else
          return pe(i, f.precision = g, m, $e = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function tt(e, n) {
  var t, o, r, a, i, l, s, u, d, c, f, m = 1, g = 10, h = e, b = h.d, C = h.constructor, T = C.rounding, O = C.precision;
  if (h.s < 0 || !b || !b[0] || !h.e && b[0] == 1 && b.length == 1)
    return new C(b && !b[0] ? -1 / 0 : h.s != 1 ? NaN : b ? 0 : h);
  if (n == null ? ($e = !1, d = O) : d = n, C.precision = d += g, t = tn(b), o = t.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; o < 7 && o != 1 || o == 1 && t.charAt(1) > 3; )
      h = h.times(e), t = tn(h.d), o = t.charAt(0), m++;
    a = h.e, o > 1 ? (h = new C("0." + t), a++) : h = new C(o + "." + t.slice(1));
  } else
    return u = sr(C, d + 2, O).times(a + ""), h = tt(new C(o + "." + t.slice(1)), d - g).plus(u), C.precision = O, n == null ? pe(h, O, T, $e = !0) : h;
  for (c = h, s = i = h = Le(h.minus(1), h.plus(1), d, 1), f = pe(h.times(h), d, 1), r = 3; ; ) {
    if (i = pe(i.times(f), d, 1), u = s.plus(Le(i, new C(r), d, 1)), tn(u.d).slice(0, d) === tn(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(sr(C, d + 2, O).times(a + ""))), s = Le(s, new C(m), d, 1), n == null)
        if (uo(s.d, d - g, T, l))
          C.precision = d += g, u = i = h = Le(c.minus(1), c.plus(1), d, 1), f = pe(h.times(h), d, 1), r = l = 1;
        else
          return pe(s, C.precision = O, T, $e = !0);
      else
        return C.precision = O, s;
    s = u, r += 2;
  }
}
function Rc(e) {
  return String(e.s * e.s / 0);
}
function ya(e, n) {
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
function B0(e, n) {
  var t, o, r, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Vc.test(n))
      return ya(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (O0.test(n))
    t = 16, n = n.toLowerCase();
  else if (P0.test(n))
    t = 2;
  else if (T0.test(n))
    t = 8;
  else
    throw Error(ct + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, o = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = zc(o, new o(t), a, a * 2)), u = Go(n, t, Vn), d = u.length - 1, a = d; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new o(e.s * 0) : (e.e = Sr(u, d), e.d = u, $e = !1, i && (e = Le(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Je(2, s) : ot.pow(2, s))), $e = !0, e);
}
function D0(e, n) {
  var t, o = n.d.length;
  if (o < 3)
    return n.isZero() ? n : Ut(e, 2, n, n);
  t = 1.4 * Math.sqrt(o), t = t > 16 ? 16 : t | 0, n = n.times(1 / Cr(5, t)), n = Ut(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); t--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function Ut(e, n, t, o, r) {
  var a, i, l, s, u = e.precision, d = Math.ceil(u / be);
  for ($e = !1, s = t.times(t), l = new e(o); ; ) {
    if (i = Le(l.times(s), new e(n++ * n++), u, 1), l = r ? o.plus(i) : o.minus(i), o = Le(i.times(s), new e(n++ * n++), u, 1), i = l.plus(o), i.d[d] !== void 0) {
      for (a = d; i.d[a] === l.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = l, l = o, o = i, i = a;
  }
  return $e = !0, i.d.length = d + 1, i;
}
function Cr(e, n) {
  for (var t = e; --n; )
    t *= e;
  return t;
}
function Uc(e, n) {
  var t, o = n.s < 0, r = Nn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return Fn = o ? 4 : 1, n;
  if (t = n.divToInt(r), t.isZero())
    Fn = o ? 3 : 2;
  else {
    if (n = n.minus(t.times(r)), n.lte(a))
      return Fn = qs(t) ? o ? 2 : 3 : o ? 4 : 1, n;
    Fn = qs(t) ? o ? 1 : 4 : o ? 3 : 2;
  }
  return n.minus(r).abs();
}
function _i(e, n, t, o) {
  var r, a, i, l, s, u, d, c, f, m = e.constructor, g = t !== void 0;
  if (g ? (hn(t, 1, gt), o === void 0 ? o = m.rounding : hn(o, 0, 8)) : (t = m.precision, o = m.rounding), !e.isFinite())
    d = Rc(e);
  else {
    for (d = Ln(e), i = d.indexOf("."), g ? (r = 2, n == 16 ? t = t * 4 - 3 : n == 8 && (t = t * 3 - 2)) : r = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Go(Ln(f), 10, r), f.e = f.d.length), c = Go(d, 10, r), a = s = c.length; c[--s] == 0; )
      c.pop();
    if (!c[0])
      d = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new m(e), e.d = c, e.e = a, e = Le(e, f, t, o, 0, r), c = e.d, a = e.e, u = Mc), i = c[t], l = r / 2, u = u || c[t + 1] !== void 0, u = o < 4 ? (i !== void 0 || u) && (o === 0 || o === (e.s < 0 ? 3 : 2)) : i > l || i === l && (o === 4 || u || o === 6 && c[t - 1] & 1 || o === (e.s < 0 ? 8 : 7)), c.length = t, u)
        for (; ++c[--t] > r - 1; )
          c[t] = 0, t || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += ha.charAt(c[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (c = Go(d, r, n), s = c.length; !c[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += ha.charAt(c[i]);
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
function Gs(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function N0(e) {
  return new this(e).abs();
}
function V0(e) {
  return new this(e).acos();
}
function A0(e) {
  return new this(e).acosh();
}
function z0(e, n) {
  return new this(e).plus(n);
}
function L0(e) {
  return new this(e).asin();
}
function R0(e) {
  return new this(e).asinh();
}
function U0(e) {
  return new this(e).atan();
}
function H0(e) {
  return new this(e).atanh();
}
function F0(e, n) {
  e = new this(e), n = new this(n);
  var t, o = this.precision, r = this.rounding, a = o + 4;
  return !e.s || !n.s ? t = new this(NaN) : !e.d && !n.d ? (t = Nn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), t.s = e.s) : !n.d || e.isZero() ? (t = n.s < 0 ? Nn(this, o, r) : new this(0), t.s = e.s) : !e.d || n.isZero() ? (t = Nn(this, a, 1).times(0.5), t.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, t = this.atan(Le(e, n, a, 1)), n = Nn(this, a, 1), this.precision = o, this.rounding = r, t = e.s < 0 ? t.minus(n) : t.plus(n)) : t = this.atan(Le(e, n, a, 1)), t;
}
function Y0(e) {
  return new this(e).cbrt();
}
function j0(e) {
  return pe(e = new this(e), e.e + 1, 2);
}
function W0(e, n, t) {
  return new this(e).clamp(n, t);
}
function q0(e) {
  if (!e || typeof e != "object")
    throw Error(wr + "Object expected");
  var n, t, o, r = e.defaults === !0, a = [
    "precision",
    1,
    gt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Mt,
    0,
    "toExpPos",
    0,
    Mt,
    "maxE",
    0,
    Mt,
    "minE",
    -Mt,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (t = a[n], r && (this[t] = pa[t]), (o = e[t]) !== void 0)
      if (on(o) === o && o >= a[n + 1] && o <= a[n + 2])
        this[t] = o;
      else
        throw Error(ct + t + ": " + o);
  if (t = "crypto", r && (this[t] = pa[t]), (o = e[t]) !== void 0)
    if (o === !0 || o === !1 || o === 0 || o === 1)
      if (o)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(Dc);
      else
        this[t] = !1;
    else
      throw Error(ct + t + ": " + o);
  return this;
}
function G0(e) {
  return new this(e).cos();
}
function X0(e) {
  return new this(e).cosh();
}
function Hc(e) {
  var n, t, o;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r))
      return new r(a);
    if (u.constructor = r, Xs(a)) {
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
      return ya(u, a.toString());
    } else if (s !== "string")
      throw Error(ct + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), Vc.test(a) ? ya(u, a) : B0(u, a);
  }
  if (r.prototype = X, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = q0, r.clone = Hc, r.isDecimal = Xs, r.abs = N0, r.acos = V0, r.acosh = A0, r.add = z0, r.asin = L0, r.asinh = R0, r.atan = U0, r.atanh = H0, r.atan2 = F0, r.cbrt = Y0, r.ceil = j0, r.clamp = W0, r.cos = G0, r.cosh = X0, r.div = K0, r.exp = Z0, r.floor = J0, r.hypot = Q0, r.ln = _0, r.log = x0, r.log10 = nb, r.log2 = eb, r.max = tb, r.min = ob, r.mod = rb, r.mul = ab, r.pow = ib, r.random = lb, r.round = sb, r.sign = ub, r.sin = db, r.sinh = cb, r.sqrt = fb, r.sub = vb, r.sum = mb, r.tan = hb, r.tanh = pb, r.trunc = gb, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (o = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < o.length; )
      e.hasOwnProperty(t = o[n++]) || (e[t] = this[t]);
  return r.config(e), r;
}
function K0(e, n) {
  return new this(e).div(n);
}
function Z0(e) {
  return new this(e).exp();
}
function J0(e) {
  return pe(e = new this(e), e.e + 1, 3);
}
function Q0() {
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
function Xs(e) {
  return e instanceof ot || e && e.toStringTag === Nc || !1;
}
function _0(e) {
  return new this(e).ln();
}
function x0(e, n) {
  return new this(e).log(n);
}
function eb(e) {
  return new this(e).log(2);
}
function nb(e) {
  return new this(e).log(10);
}
function tb() {
  return Lc(this, arguments, "lt");
}
function ob() {
  return Lc(this, arguments, "gt");
}
function rb(e, n) {
  return new this(e).mod(n);
}
function ab(e, n) {
  return new this(e).mul(n);
}
function ib(e, n) {
  return new this(e).pow(n);
}
function lb(e) {
  var n, t, o, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : hn(e, 1, gt), o = Math.ceil(e / be), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(o)); a < o; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(o *= 4); a < o; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = o / 4;
    } else
      throw Error(Dc);
  else
    for (; a < o; )
      l[a++] = Math.random() * 1e7 | 0;
  for (o = l[--a], e %= be, o && e && (r = Je(10, be - e), l[a] = (o / r | 0) * r); l[a] === 0; a--)
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
function sb(e) {
  return pe(e = new this(e), e.e + 1, this.rounding);
}
function ub(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function db(e) {
  return new this(e).sin();
}
function cb(e) {
  return new this(e).sinh();
}
function fb(e) {
  return new this(e).sqrt();
}
function vb(e, n) {
  return new this(e).sub(n);
}
function mb() {
  var e = 0, n = arguments, t = new this(n[e]);
  for ($e = !1; t.s && ++e < n.length; )
    t = t.plus(n[e]);
  return $e = !0, pe(t, this.precision, this.rounding);
}
function hb(e) {
  return new this(e).tan();
}
function pb(e) {
  return new this(e).tanh();
}
function gb(e) {
  return pe(e = new this(e), e.e + 1, 1);
}
X[Symbol.for("nodejs.util.inspect.custom")] = X.toString;
X[Symbol.toStringTag] = "Decimal";
var ot = X.constructor = Hc(pa);
ir = new ot(ir);
lr = new ot(lr);
const bb = {
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
}, Ks = 100, Zs = 600, { name: yb, n: $b, classes: wb } = ne("counter"), Sb = ["inputmode", "readonly", "disabled"];
function Cb(e, n) {
  const t = se("var-icon"), o = se("var-button"), r = se("var-form-details");
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      D(
        "div",
        Ae({
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
          Te(D("input", {
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
          }, null, 46, Sb), [
            [jv, e.inputValue]
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
const Fc = ee({
  name: yb,
  components: {
    VarButton: vn,
    VarIcon: He,
    VarFormDetails: mn
  },
  directives: { Ripple: Ke },
  inheritAttrs: !1,
  props: bb,
  setup(e) {
    const n = S(""), { bindForm: t, form: o } = In(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = En(), { readonly: s, disabled: u } = o ?? {}, d = N(() => {
      const { max: K, modelValue: x } = e;
      return K != null && V(x) >= V(K);
    }), c = N(() => {
      const { min: K, modelValue: x } = e;
      return K != null && V(x) <= V(K);
    });
    let f, m, g, h;
    y(t, {
      reset: O,
      validate: C,
      resetValidation: l
    }), fe(
      () => e.modelValue,
      (K) => {
        G($(String(K))), y(e.onChange, V(K));
      }
    ), G($(String(e.modelValue)));
    function C() {
      return i(e.rules, e.modelValue);
    }
    function T(K) {
      Ue(() => {
        const { validateTrigger: x, rules: Y, modelValue: ae } = e;
        a(x, K, Y, ae);
      });
    }
    function O() {
      const { min: K } = e;
      y(e["onUpdate:modelValue"], K != null ? V(K) : 0), l();
    }
    function $(K) {
      const { decimalLength: x, max: Y, min: ae } = e;
      let j = V(K);
      return Y != null && j > V(Y) && (j = V(Y)), ae != null && j < V(ae) && (j = V(ae)), K = String(j), x != null && (K = j.toFixed(V(x))), K;
    }
    function k(K) {
      const { lazyChange: x, onBeforeChange: Y } = e, { value: ae } = K.target, j = $(ae);
      x ? y(Y, V(j), W) : G(j), T("onInputChange");
    }
    function M() {
      const {
        disabled: K,
        readonly: x,
        disableDecrement: Y,
        decrementButton: ae,
        lazyChange: j,
        step: de,
        modelValue: J,
        onDecrement: q,
        onBeforeChange: Q
      } = e;
      if (u != null && u.value || s != null && s.value || K || x || Y || !ae || c.value)
        return;
      const I = new ot(V(J)).minus(new ot(V(de))).toString(), F = $(I), ve = V(F);
      y(q, ve), j ? y(Q, ve, W) : (G(F), T("onDecrement"));
    }
    function P() {
      const {
        disabled: K,
        readonly: x,
        disableIncrement: Y,
        incrementButton: ae,
        lazyChange: j,
        step: de,
        modelValue: J,
        onIncrement: q,
        onBeforeChange: Q
      } = e;
      if (u != null && u.value || s != null && s.value || K || x || Y || !ae || d.value)
        return;
      const I = new ot(V(J)).plus(new ot(V(de))).toString(), F = $(I), ve = V(F);
      y(q, ve), j ? y(Q, ve, W) : (G(F), T("onIncrement"));
    }
    function B() {
      const { press: K, lazyChange: x } = e;
      !K || x || (h = window.setTimeout(() => {
        oe();
      }, Zs));
    }
    function E() {
      const { press: K, lazyChange: x } = e;
      !K || x || (g = window.setTimeout(() => {
        U();
      }, Zs));
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
      }, Ks);
    }
    function oe() {
      m = window.setTimeout(() => {
        M(), oe();
      }, Ks);
    }
    function G(K) {
      n.value = K;
      const x = V(K);
      y(e["onUpdate:modelValue"], x);
    }
    function W(K) {
      G($(String(K))), T("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: $b,
      classes: wb,
      formatElevation: pn,
      validate: C,
      reset: O,
      resetValidation: l,
      handleChange: k,
      decrement: M,
      increment: P,
      pressDecrement: B,
      pressIncrement: E,
      releaseDecrement: R,
      releaseIncrement: L,
      toSizeUnit: Ce,
      toNumber: V
    };
  }
});
Fc.render = Cb;
var xi = Fc;
re(xi);
const vE = xi;
var $a = xi, Yc = 60, jc = Yc * 60, Wc = jc * 24, kb = Wc * 7, Ht = 1e3, Nr = Yc * Ht, Js = jc * Ht, Pb = Wc * Ht, Ob = kb * Ht, el = "millisecond", Bt = "second", Dt = "minute", Nt = "hour", Jn = "day", Xo = "week", Dn = "month", qc = "quarter", Qn = "year", Vt = "date", Tb = "YYYY-MM-DDTHH:mm:ssZ", Qs = "Invalid Date", Eb = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Ib = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Mb = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var wa = function(n, t, o) {
  var r = String(n);
  return !r || r.length >= t ? n : "" + Array(t + 1 - r.length).join(o) + n;
}, Bb = function(n) {
  var t = -n.utcOffset(), o = Math.abs(t), r = Math.floor(o / 60), a = o % 60;
  return (t <= 0 ? "+" : "-") + wa(r, 2, "0") + ":" + wa(a, 2, "0");
}, Db = function e(n, t) {
  if (n.date() < t.date())
    return -e(t, n);
  var o = (t.year() - n.year()) * 12 + (t.month() - n.month()), r = n.clone().add(o, Dn), a = t - r < 0, i = n.clone().add(o + (a ? -1 : 1), Dn);
  return +(-(o + (t - r) / (a ? r - i : i - r)) || 0);
}, Nb = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Vb = function(n) {
  var t = {
    M: Dn,
    y: Qn,
    w: Xo,
    d: Jn,
    D: Vt,
    h: Nt,
    m: Dt,
    s: Bt,
    ms: el,
    Q: qc
  };
  return t[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Ab = function(n) {
  return n === void 0;
};
const zb = {
  s: wa,
  z: Bb,
  m: Db,
  a: Nb,
  p: Vb,
  u: Ab
};
var eo = "en", $t = {};
$t[eo] = Mb;
var nl = function(n) {
  return n instanceof kr;
}, ur = function e(n, t, o) {
  var r;
  if (!n)
    return eo;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    $t[a] && (r = a), t && ($t[a] = t, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    $t[l] = n, r = l;
  }
  return !o && r && (eo = r), r || !o && eo;
}, me = function(n, t) {
  if (nl(n))
    return n.clone();
  var o = typeof t == "object" ? t : {};
  return o.date = n, o.args = arguments, new kr(o);
}, Lb = function(n, t) {
  return me(n, {
    locale: t.$L,
    utc: t.$u,
    x: t.$x,
    $offset: t.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, ze = zb;
ze.l = ur;
ze.i = nl;
ze.w = Lb;
var Rb = function(n) {
  var t = n.date, o = n.utc;
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  if (ze.u(t))
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
    this.$d = Rb(o), this.$x = o.x || {}, this.init();
  }, n.init = function() {
    var o = this.$d;
    this.$y = o.getFullYear(), this.$M = o.getMonth(), this.$D = o.getDate(), this.$W = o.getDay(), this.$H = o.getHours(), this.$m = o.getMinutes(), this.$s = o.getSeconds(), this.$ms = o.getMilliseconds();
  }, n.$utils = function() {
    return ze;
  }, n.isValid = function() {
    return this.$d.toString() !== Qs;
  }, n.isSame = function(o, r) {
    var a = me(o);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(o, r) {
    return me(o) < this.startOf(r);
  }, n.isBefore = function(o, r) {
    return this.endOf(r) < me(o);
  }, n.$g = function(o, r, a) {
    return ze.u(o) ? this[r] : this.set(a, o);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(o, r) {
    var a = this, i = ze.u(r) ? !0 : r, l = ze.p(o), s = function(C, T) {
      var O = ze.w(a.$u ? Date.UTC(a.$y, T, C) : new Date(a.$y, T, C), a);
      return i ? O : O.endOf(Jn);
    }, u = function(C, T) {
      var O = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return ze.w(a.toDate()[C].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? O : $).slice(T)
      ), a);
    }, d = this.$W, c = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Qn:
        return i ? s(1, 0) : s(31, 11);
      case Dn:
        return i ? s(1, c) : s(0, c + 1);
      case Xo: {
        var g = this.$locale().weekStart || 0, h = (d < g ? d + 7 : d) - g;
        return s(i ? f - h : f + (6 - h), c);
      }
      case Jn:
      case Vt:
        return u(m + "Hours", 0);
      case Nt:
        return u(m + "Minutes", 1);
      case Dt:
        return u(m + "Seconds", 2);
      case Bt:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(o) {
    return this.startOf(o, !1);
  }, n.$set = function(o, r) {
    var a, i = ze.p(o), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[Jn] = l + "Date", a[Vt] = l + "Date", a[Dn] = l + "Month", a[Qn] = l + "FullYear", a[Nt] = l + "Hours", a[Dt] = l + "Minutes", a[Bt] = l + "Seconds", a[el] = l + "Milliseconds", a)[i], u = i === Jn ? this.$D + (r - this.$W) : r;
    if (i === Dn || i === Qn) {
      var d = this.clone().set(Vt, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Vt, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(o, r) {
    return this.clone().$set(o, r);
  }, n.get = function(o) {
    return this[ze.p(o)]();
  }, n.add = function(o, r) {
    var a = this, i;
    o = Number(o);
    var l = ze.p(r), s = function(f) {
      var m = me(a);
      return ze.w(m.date(m.date() + Math.round(f * o)), a);
    };
    if (l === Dn)
      return this.set(Dn, this.$M + o);
    if (l === Qn)
      return this.set(Qn, this.$y + o);
    if (l === Jn)
      return s(1);
    if (l === Xo)
      return s(7);
    var u = (i = {}, i[Dt] = Nr, i[Nt] = Js, i[Bt] = Ht, i)[l] || 1, d = this.$d.getTime() + o * u;
    return ze.w(d, this);
  }, n.subtract = function(o, r) {
    return this.add(o * -1, r);
  }, n.format = function(o) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || Qs;
    var i = o || Tb, l = ze.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, m = a.meridiem, g = function(O, $, k, M) {
      return O && (O[$] || O(r, i)) || k[$].slice(0, M);
    }, h = function(O) {
      return ze.s(s % 12 || 12, O, "0");
    }, b = m || function(T, O, $) {
      var k = T < 12 ? "AM" : "PM";
      return $ ? k.toLowerCase() : k;
    }, C = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: ze.s(d + 1, 2, "0"),
      MMM: g(a.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: ze.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(a.weekdaysMin, this.$W, c, 2),
      ddd: g(a.weekdaysShort, this.$W, c, 3),
      dddd: c[this.$W],
      H: String(s),
      HH: ze.s(s, 2, "0"),
      h: h(1),
      hh: h(2),
      a: b(s, u, !0),
      A: b(s, u, !1),
      m: String(u),
      mm: ze.s(u, 2, "0"),
      s: String(this.$s),
      ss: ze.s(this.$s, 2, "0"),
      SSS: ze.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(Ib, function(T, O) {
      return O || C[T] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(o, r, a) {
    var i, l = ze.p(r), s = me(o), u = (s.utcOffset() - this.utcOffset()) * Nr, d = this - s, c = ze.m(this, s);
    return c = (i = {}, i[Qn] = c / 12, i[Dn] = c, i[qc] = c / 3, i[Xo] = (d - u) / Ob, i[Jn] = (d - u) / Pb, i[Nt] = d / Js, i[Dt] = d / Nr, i[Bt] = d / Ht, i)[l] || d, a ? c : ze.a(c);
  }, n.daysInMonth = function() {
    return this.endOf(Dn).$D;
  }, n.$locale = function() {
    return $t[this.$L];
  }, n.locale = function(o, r) {
    if (!o)
      return this.$L;
    var a = this.clone(), i = ur(o, r, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return ze.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Gc = kr.prototype;
me.prototype = Gc;
[["$ms", el], ["$s", Bt], ["$m", Dt], ["$H", Nt], ["$W", Jn], ["$M", Dn], ["$y", Qn], ["$D", Vt]].forEach(function(e) {
  Gc[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
me.extend = function(e, n) {
  return e.$i || (e(n, kr, me), e.$i = !0), me;
};
me.locale = ur;
me.isDayjs = nl;
me.unix = function(e) {
  return me(e * 1e3);
};
me.en = $t[eo];
me.Ls = $t;
me.p = {};
const Xc = function(e, n) {
  n.prototype.isSameOrBefore = function(t, o) {
    return this.isSame(t, o) || this.isBefore(t, o);
  };
}, Kc = function(e, n) {
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
], Ub = {
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
}, { n: Hb } = ne("picker-header");
function Fb(e, n) {
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
          Z(Ye, {
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
const Zc = ee({
  name: "PanelHeader",
  components: {
    VarButton: vn,
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
      n: Hb,
      reverse: t,
      showDate: r,
      checkDate: a
    };
  }
});
Zc.render = Fb;
var Jc = Zc, Yb = Object.defineProperty, _s = Object.getOwnPropertySymbols, jb = Object.prototype.hasOwnProperty, Wb = Object.prototype.propertyIsEnumerable, xs = (e, n, t) => n in e ? Yb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, qb = (e, n) => {
  for (var t in n || (n = {}))
    jb.call(n, t) && xs(e, t, n[t]);
  if (_s)
    for (var t of _s(n))
      Wb.call(n, t) && xs(e, t, n[t]);
  return e;
};
me.extend(Xc);
me.extend(Kc);
const { n: Lo, classes: Gb } = ne("month-picker"), { n: Ro } = ne("date-picker");
function Xb(e, n) {
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
          Z(Ye, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: he(() => [
              (p(), w("ul", { key: e.panelKey }, [
                (p(!0), w(
                  Ne,
                  null,
                  qe(e.MONTH_LIST, (r) => (p(), w("li", {
                    key: r.index
                  }, [
                    Z(o, Ae({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, qb({}, e.buttonProps(r.index)), {
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
const Qc = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: vn,
    PanelHeader: Jc
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
    }), s = N(() => e.choose.chooseYear === e.preview.previewYear), u = N(() => e.preview.previewYear === t), d = (C) => {
      var T, O;
      return (O = (T = xe.value.datePickerMonthDict) == null ? void 0 : T[C].abbr) != null ? O : "";
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
      } = e, B = `${O}-${C}`, E = () => P || M ? f(B) : (T == null ? void 0 : T.index) === C && s.value, L = (() => c(C) ? $ ? !$(B) : !1 : !0)(), U = () => L ? !0 : P || M ? !f(B) : !s.value || (T == null ? void 0 : T.index) !== C, oe = () => u.value && o === C && e.componentProps.showCurrent ? (P || M || s.value) && L ? !0 : P || M ? !f(B) : s.value ? (T == null ? void 0 : T.index) !== o : !0 : !1, G = () => L ? "" : oe() ? k ?? "" : E() ? "" : `${Ro()}-color-cover`, W = G().startsWith(Ro());
      return {
        outline: oe(),
        text: U(),
        color: U() ? "" : k,
        textColor: W ? "" : G(),
        [`${Ro()}-color-cover`]: W,
        class: Gb(Lo("button"), [L, Lo("button--disabled")]),
        disabled: L
      };
    }, g = (C, T) => {
      T.currentTarget.classList.contains(Lo("button--disabled")) || n("choose-month", C);
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
      n: Lo,
      nDate: Ro,
      pack: xe,
      MONTH_LIST: Ko,
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
Qc.render = Xb;
var Kb = Qc;
const { n: eu, classes: Zb } = ne("year-picker"), Jb = ["onClick"];
function Qb(e, n) {
  return p(), w(
    "ul",
    {
      class: v(e.n())
    },
    [
      (p(!0), w(
        Ne,
        null,
        qe(e.yearList, (t) => (p(), w("li", {
          key: t,
          class: v(e.classes(e.n("item"), [t === e.toNumber(e.preview), e.n("item--active")])),
          style: H({ color: t === e.toNumber(e.preview) ? e.componentProps.color : "" }),
          onClick: (o) => e.chooseYear(t)
        }, ie(t), 15, Jb))),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
const _c = ee({
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
    return rn(() => {
      const r = document.querySelector(`.${eu("item--active")}`);
      r == null || r.scrollIntoView({
        block: "center"
      });
    }), {
      n: eu,
      classes: Zb,
      yearList: t,
      chooseYear: o,
      toNumber: V
    };
  }
});
_c.render = Qb;
var _b = _c, xb = Object.defineProperty, nu = Object.getOwnPropertySymbols, ey = Object.prototype.hasOwnProperty, ny = Object.prototype.propertyIsEnumerable, tu = (e, n, t) => n in e ? xb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ty = (e, n) => {
  for (var t in n || (n = {}))
    ey.call(n, t) && tu(e, t, n[t]);
  if (nu)
    for (var t of nu(n))
      ny.call(n, t) && tu(e, t, n[t]);
  return e;
};
me.extend(Xc);
me.extend(Kc);
const { n: Et, classes: oy } = ne("day-picker"), { n: Uo } = ne("date-picker");
function ry(e, n) {
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
          Z(Ye, {
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
                      Ne,
                      null,
                      qe(e.sortWeekList, (r) => (p(), w(
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
                      Ne,
                      null,
                      qe(e.days, (r, a) => (p(), w("li", { key: a }, [
                        Z(o, Ae({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation
                        }, ty({}, e.buttonProps(r)), {
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
const xc = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: vn,
    PanelHeader: Jc
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
    }), d = N(
      () => e.preview.previewYear === t && e.preview.previewMonth.index === o
    ), c = N(
      () => {
        var P;
        return e.choose.chooseYear === e.preview.previewYear && ((P = e.choose.chooseMonth) == null ? void 0 : P.index) === e.preview.previewMonth.index;
      }
    ), f = N(() => {
      const P = _t.findIndex((B) => B.index === e.componentProps.firstDayOfWeek);
      return P === -1 || P === 0 ? _t : _t.slice(P).concat(_t.slice(0, P));
    }), m = (P) => {
      var B, E;
      return (E = (B = xe.value.datePickerWeekDict) == null ? void 0 : B[P].abbr) != null ? E : "";
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
    }, C = (P) => {
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
          class: Et("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: B },
        preview: { previewYear: E, previewMonth: R },
        componentProps: { allowedDates: L, color: U, multiple: oe, range: G }
      } = e, W = `${E}-${R.index}-${P}`, K = () => G || oe ? T(W) : V(B) === P && c.value, Y = (() => C(P) ? L ? !L(W) : !1 : !0)(), ae = () => Y ? !0 : G || oe ? !T(W) : !c.value || V(B) !== P, j = () => d.value && V(r) === P && e.componentProps.showCurrent ? (G || oe || c.value) && Y ? !0 : G || oe ? !T(W) : c.value ? B !== r : !0 : !1, de = () => Y ? "" : j() ? U ?? "" : K() ? "" : `${Uo()}-color-cover`, J = de().startsWith(Uo());
      return {
        text: ae(),
        outline: j(),
        textColor: J ? "" : de(),
        [`${Uo()}-color-cover`]: J,
        class: oy(Et("button"), Et("button--usable"), [Y, Et("button--disabled")]),
        disabled: Y
      };
    }, $ = (P) => {
      i.value = P === "prev", l.value += P === "prev" ? -1 : 1, n("check-preview", "month", P);
    }, k = (P, B) => {
      B.currentTarget.classList.contains(Et("button--disabled")) || n("choose-day", P);
    }, M = (P) => {
      s.value.checkDate(P);
    };
    return rn(() => {
      h(), b();
    }), fe(
      () => e.preview,
      () => {
        h(), b();
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
      filterDay: g,
      getDayAbbr: m,
      checkDate: $,
      chooseDay: k,
      buttonProps: O
    };
  }
});
xc.render = ry;
var ay = xc, iy = (e, n, t) => new Promise((o, r) => {
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
const { name: ly, n: sy, classes: uy } = ne("date-picker");
function dy(e, n) {
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
              Z(Ye, {
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
                      ]) : z(e.$slots, "date", rt(Ae({ key: 2 }, e.slotProps)), () => [
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
          Z(Ye, {
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
const ef = ee({
  name: ly,
  components: {
    MonthPickerPanel: Kb,
    YearPickerPanel: _b,
    DayPickerPanel: ay
  },
  props: Ub,
  setup(e) {
    const n = me().format("YYYY-MM-D"), [t, o] = n.split("-"), r = Ko.find((ce) => ce.index === o), a = S(!1), i = S(!1), l = S(!0), s = S(), u = S(), d = S(), c = S(r), f = S(t), m = S(!1), g = S([]), h = S([]), b = S([]), C = S([]), T = S(null), O = S(null), $ = je({
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
      const { multiple: ye, range: Me } = e;
      if (Me)
        return b.value.length ? `${b.value[0]} ~ ${b.value[1]}` : "";
      let Ie = "";
      return s.value && (Ie = (Se = (ce = xe.value.datePickerMonthDict) == null ? void 0 : ce[s.value.index].name) != null ? Se : ""), ye ? `${g.value.length}${xe.value.datePickerSelected}` : Ie;
    }), B = N(() => {
      var ce, Se, ye, Me;
      const { multiple: Ie, range: Xe } = e;
      if (Xe) {
        const Zt = C.value.map((Av) => me(Av).format("YYYY-MM-DD"));
        return Zt.length ? `${Zt[0]} ~ ${Zt[1]}` : "";
      }
      if (Ie)
        return `${h.value.length}${xe.value.datePickerSelected}`;
      if (!u.value || !s.value || !d.value)
        return "";
      const gn = me(`${u.value}-${s.value.index}-${d.value}`).day(), wn = _t.find((Zt) => Zt.index === `${gn}`), yt = (Se = (ce = xe.value.datePickerWeekDict) == null ? void 0 : ce[wn.index].name) != null ? Se : "", Nv = (Me = (ye = xe.value.datePickerMonthDict) == null ? void 0 : ye[s.value.index].name) != null ? Me : "", Vv = wt(d.value, 2, "0");
      return xe.value.lang === "zh-CN" ? `${s.value.index}-${Vv} ${yt.slice(0, 3)}` : `${yt.slice(0, 3)}, ${Nv.slice(0, 3)} ${d.value}`;
    }), E = N(() => a.value ? "year" : e.type === "month" || i.value ? "month" : e.type === "date" ? "date" : ""), R = N(() => !e.touchable || ["", "year"].includes(E.value)), L = N(() => {
      var ce, Se, ye, Me;
      const Ie = me(`${u.value}-${(ce = s.value) == null ? void 0 : ce.index}-${d.value}`).day(), Xe = d.value ? wt(d.value, 2, "0") : "";
      return {
        week: `${Ie}`,
        year: (Se = u.value) != null ? Se : "",
        month: (Me = (ye = s.value) == null ? void 0 : ye.index) != null ? Me : "",
        date: Xe
      };
    }), U = N(
      () => k.value.chooseRangeDay.map((ce) => me(ce).format("YYYY-MM-DD"))
    ), oe = N(() => u.value === f.value), G = N(() => {
      var ce;
      return ((ce = s.value) == null ? void 0 : ce.index) === c.value.index;
    });
    let W = 0, K = 0, x = "", Y;
    fe(
      () => e.modelValue,
      (ce) => {
        if (!(!we() || Be(ce) || !ce))
          if (e.range) {
            if (!Ve(ce))
              return;
            l.value = ce.length !== 1, le(ce, e.type);
          } else if (e.multiple) {
            if (!Ve(ce))
              return;
            ge(ce, e.type);
          } else
            De(ce);
      },
      { immediate: !0 }
    ), fe(E, We);
    function ae(ce) {
      ce === "year" ? a.value = !0 : ce === "month" ? i.value = !0 : (a.value = !1, i.value = !1);
    }
    function j(ce) {
      if (R.value)
        return;
      const { clientX: Se, clientY: ye } = ce.touches[0];
      W = Se, K = ye;
    }
    function de(ce, Se) {
      return ce >= Se && ce > 20 ? "x" : "y";
    }
    function J(ce) {
      if (R.value)
        return;
      const { clientX: Se, clientY: ye } = ce.touches[0], Me = Se - W, Ie = ye - K;
      Y = de(Math.abs(Me), Math.abs(Ie)), x = Me > 0 ? "prev" : "next";
    }
    function q() {
      return iy(this, null, function* () {
        if (R.value || Y !== "x")
          return;
        const ce = E.value === "month" ? T : O;
        yield dn(), ce.value.forwardRef(x), We();
      });
    }
    function Q(ce, Se) {
      const ye = Se === "month" ? b : C;
      if (ye.value = l.value ? [ce, ce] : [ye.value[0], ce], l.value = !l.value, l.value) {
        const Ie = me(ye.value[0]).isAfter(ye.value[1]) ? [ye.value[1], ye.value[0]] : [...ye.value];
        y(e["onUpdate:modelValue"], Ie), y(e.onChange, Ie);
      }
    }
    function I(ce, Se) {
      const ye = Se === "month" ? g : h, Me = Se === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ie = ye.value.map((gn) => me(gn).format(Me)), Xe = Ie.findIndex((gn) => gn === ce);
      Xe === -1 ? Ie.push(ce) : Ie.splice(Xe, 1), y(e["onUpdate:modelValue"], Ie), y(e.onChange, Ie);
    }
    function F(ce, Se) {
      return !u.value || !s.value ? !1 : oe.value ? ce === "month" ? Se.index < s.value.index : G.value ? Se < V(d.value) : s.value.index > c.value.index : u.value > f.value;
    }
    function ve(ce) {
      const { readonly: Se, range: ye, multiple: Me, onChange: Ie, "onUpdate:modelValue": Xe } = e;
      if (ce < 0 || Se)
        return;
      m.value = F("day", ce);
      const gn = `${f.value}-${c.value.index}-${ce}`, wn = me(gn).format("YYYY-MM-DD");
      ye ? Q(wn, "day") : Me ? I(wn, "day") : (y(Xe, wn), y(Ie, wn));
    }
    function Pe(ce) {
      const { type: Se, readonly: ye, range: Me, multiple: Ie, onChange: Xe, onPreview: gn, "onUpdate:modelValue": wn } = e;
      if (m.value = F("month", ce), Se === "month" && !ye) {
        const yt = `${f.value}-${ce.index}`;
        Me ? Q(yt, "month") : Ie ? I(yt, "month") : (y(wn, yt), y(Xe, yt));
      } else
        c.value = ce, y(gn, V(f.value), V(c.value.index));
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
        let Me = V(c.value.index) + ye;
        Me < 1 && (f.value = `${V(f.value) - 1}`, Me = 12), Me > 12 && (f.value = `${V(f.value) + 1}`, Me = 1), c.value = Ko.find((Ie) => V(Ie.index) === Me);
      }
      y(e.onPreview, V(f.value), V(c.value.index));
    }
    function we() {
      return (e.multiple || e.range) && !Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function Be(ce) {
      return Ve(ce) ? !1 : ce === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function le(ce, Se) {
      const ye = Se === "month" ? b : C, Me = Se === "month" ? "YYYY-MM" : "YYYY-MM-D", Ie = ce.map((wn) => me(wn).format(Me)).slice(0, 2);
      if (ye.value.some((wn) => Be(wn)))
        return;
      ye.value = Ie;
      const gn = me(ye.value[0]).isAfter(ye.value[1]);
      ye.value.length === 2 && gn && (ye.value = [ye.value[1], ye.value[0]]);
    }
    function ge(ce, Se) {
      const ye = Se === "month" ? g : h, Me = Se === "month" ? "YYYY-MM" : "YYYY-MM-D", Ie = Array.from(new Set(ce.map((Xe) => me(Xe).format(Me))));
      ye.value = Ie.filter((Xe) => Xe !== "Invalid Date");
    }
    function De(ce) {
      const Se = me(ce).format("YYYY-MM-D");
      if (Be(Se))
        return;
      const [ye, Me, Ie] = Se.split("-"), Xe = Ko.find((gn) => gn.index === Me);
      s.value = Xe, u.value = ye, d.value = Ie, c.value = Xe, f.value = ye;
    }
    function We() {
      K = 0, W = 0, x = "", Y = void 0;
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
      getPreview: M,
      componentProps: $,
      slotProps: L,
      formatRange: U,
      n: sy,
      classes: uy,
      clickEl: ae,
      handleTouchstart: j,
      handleTouchmove: J,
      handleTouchend: q,
      getChooseDay: ve,
      getChooseMonth: Pe,
      getChooseYear: te,
      checkPreview: ue,
      formatElevation: pn
    };
  }
});
ef.render = dy;
var tl = ef;
re(tl);
const mE = tl;
var Sa = tl, cy = Object.defineProperty, ou = Object.getOwnPropertySymbols, fy = Object.prototype.hasOwnProperty, vy = Object.prototype.propertyIsEnumerable, ru = (e, n, t) => n in e ? cy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, my = (e, n) => {
  for (var t in n || (n = {}))
    fy.call(n, t) && ru(e, t, n[t]);
  if (ou)
    for (var t of ou(n))
      vy.call(n, t) && ru(e, t, n[t]);
  return e;
};
const hy = my({
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
var py = Object.defineProperty, au = Object.getOwnPropertySymbols, gy = Object.prototype.hasOwnProperty, by = Object.prototype.propertyIsEnumerable, iu = (e, n, t) => n in e ? py(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, yy = (e, n) => {
  for (var t in n || (n = {}))
    gy.call(n, t) && iu(e, t, n[t]);
  if (au)
    for (var t of au(n))
      by.call(n, t) && iu(e, t, n[t]);
  return e;
};
const { name: $y, n: wy, classes: Sy } = ne("dialog");
function Cy(e, n) {
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
        Ae({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: yy({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
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
              }, 8, ["class", "text-color", "color", "onClick"])) : _("v-if", !0),
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
const nf = ee({
  name: $y,
  components: {
    VarPopup: ut,
    VarButton: vn
  },
  inheritAttrs: !1,
  props: hy,
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
      n: wy,
      classes: Sy,
      handleClickOverlay: r,
      confirm: a,
      cancel: i,
      toSizeUnit: Ce
    };
  }
});
nf.render = Cy;
var Io = nf, ky = Object.defineProperty, Py = Object.defineProperties, Oy = Object.getOwnPropertyDescriptors, lu = Object.getOwnPropertySymbols, Ty = Object.prototype.hasOwnProperty, Ey = Object.prototype.propertyIsEnumerable, su = (e, n, t) => n in e ? ky(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Vr = (e, n) => {
  for (var t in n || (n = {}))
    Ty.call(n, t) && su(e, t, n[t]);
  if (lu)
    for (var t of lu(n))
      Ey.call(n, t) && su(e, t, n[t]);
  return e;
}, Iy = (e, n) => Py(e, Oy(n));
let xn, dr = {};
function My(e = {}) {
  return Qe(e) ? Iy(Vr({}, dr), { message: e }) : Vr(Vr({}, dr), e);
}
function Ot(e) {
  return pt() ? new Promise((n) => {
    Ot.close();
    const t = My(e), o = je(t);
    o.teleport = "body", xn = o;
    const { unmountInstance: r } = Xt(Io, o, {
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
        y(o.onClosed), r(), xn === o && (xn = null);
      },
      onRouteChange: () => {
        r(), xn === o && (xn = null);
      },
      "onUpdate:show": (a) => {
        o.show = a;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Ot.setDefaultOptions = function(e) {
  dr = e;
};
Ot.resetDefaultOptions = function() {
  dr = {};
};
Ot.close = function() {
  if (xn != null) {
    const e = xn;
    xn = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
Ot.Component = Io;
re(Io);
re(Io, Ot);
const hE = Io;
var Ca = Ot;
const By = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: Dy, n: Ny, classes: Vy } = ne("divider");
function Ay(e, n) {
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
      e.vertical ? _("v-if", !0) : z(e.$slots, "default", { key: 0 }, () => [
        e.description ? (p(), w(
          "span",
          {
            key: 0,
            class: v(e.n("text"))
          },
          ie(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const tf = ee({
  name: Dy,
  props: By,
  setup(e, { slots: n }) {
    const t = S(!1), o = N(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = N(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (vi(i) || l)
        return { margin: s };
      const u = V(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Ce(d)})`,
        left: u > 0 ? Ce(d) : Ce(0)
      };
    });
    rn(a), So(a);
    function a() {
      const { description: i, vertical: l } = e;
      t.value = (n.default || i != null) && !l;
    }
    return {
      n: Ny,
      classes: Vy,
      withText: t,
      style: r,
      withPresetInset: o
    };
  }
});
tf.render = Ay;
var ol = tf;
re(ol);
const pE = ol;
var ka = ol;
const zy = {
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
var Ly = Object.defineProperty, Ry = Object.defineProperties, Uy = Object.getOwnPropertyDescriptors, uu = Object.getOwnPropertySymbols, Hy = Object.prototype.hasOwnProperty, Fy = Object.prototype.propertyIsEnumerable, du = (e, n, t) => n in e ? Ly(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, cu = (e, n) => {
  for (var t in n || (n = {}))
    Hy.call(n, t) && du(e, t, n[t]);
  if (uu)
    for (var t of uu(n))
      Fy.call(n, t) && du(e, t, n[t]);
  return e;
}, fu = (e, n) => Ry(e, Uy(n)), Yy = (e, n, t) => new Promise((o, r) => {
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
const { name: jy, n: Wy, classes: qy } = ne("drag");
function Gy(e, n) {
  return p(), ke(Gn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    D(
      "div",
      Ae({
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
const of = ee({
  name: jy,
  inheritAttrs: !1,
  props: zy,
  setup(e, { attrs: n }) {
    const t = S(null), o = S(0), r = S(0), a = S(!1), i = S(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: m, resetTouch: g } = pr(), { disabled: h } = Kt(), b = je({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    fe(() => e.boundary, R), ko(U), rn(() => {
      R(), U();
    });
    function C(G) {
      e.disabled || (c(G), k());
    }
    function T(G) {
      return Yy(this, null, function* () {
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
      const { left: G, top: W } = M();
      o.value = G, r.value = W;
    }
    function M() {
      const G = _e(t.value), W = _e(window), K = G.top - W.top, x = W.bottom - G.bottom, Y = G.left - W.left, ae = W.right - G.right, { width: j, height: de } = G, { width: J, height: q } = W;
      return {
        top: K,
        bottom: x,
        left: Y,
        right: ae,
        width: j,
        height: de,
        halfWidth: j / 2,
        halfHeight: de / 2,
        windowWidth: J,
        windowHeight: q
      };
    }
    function P() {
      const G = M(), W = b.left, K = G.windowWidth - b.right - G.width, x = b.top, Y = G.windowHeight - b.bottom - G.height;
      return {
        minX: W,
        minY: x,
        // fallback the drag element overflows boundary
        maxX: W < K ? K : W,
        maxY: x < Y ? Y : x
      };
    }
    function B() {
      if (e.attraction == null)
        return;
      const { halfWidth: G, halfHeight: W, top: K, bottom: x, left: Y, right: ae } = M(), { minX: j, minY: de, maxX: J, maxY: q } = P(), Q = Y + G - b.left, I = ae + G - b.right, F = K + W - b.top, ve = x + W - b.bottom, Pe = Q <= I, te = F <= ve;
      e.attraction.includes("x") && (o.value = Pe ? j : J), e.attraction.includes("y") && (r.value = te ? de : q);
    }
    function E() {
      const { minX: G, minY: W, maxX: K, maxY: x } = P();
      o.value = lt(o.value, G, K), r.value = lt(r.value, W, x);
    }
    function R() {
      const { top: G = 0, bottom: W = 0, left: K = 0, right: x = 0 } = e.boundary;
      b.top = Fe(G), b.bottom = Fe(W), b.left = Fe(K), b.right = Fe(x);
    }
    function L() {
      var G;
      const W = (G = n.style) != null ? G : {};
      return fu(cu({}, n), {
        style: fu(cu({}, W), {
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
      n: Wy,
      classes: qy,
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
of.render = Gy;
var rl = of;
re(rl);
const gE = rl;
var cr = rl, Xy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zo(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Xy[n];
  });
}
var Yn = "top", ft = "bottom", St = "right", at = "left", al = "auto", Pr = [Yn, ft, St, at], Or = "start", co = "end", Ky = "clippingParents", rf = "viewport", Jt = "popper", Zy = "reference", vu = /* @__PURE__ */ Pr.reduce(function(e, n) {
  return e.concat([n + "-" + Or, n + "-" + co]);
}, []), af = /* @__PURE__ */ [].concat(Pr, [al]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Or, n + "-" + co]);
}, []), Jy = "beforeRead", Qy = "read", _y = "afterRead", xy = "beforeMain", e1 = "main", n1 = "afterMain", t1 = "beforeWrite", o1 = "write", r1 = "afterWrite", a1 = [Jy, Qy, _y, xy, e1, n1, t1, o1, r1];
function it(e) {
  return e.split("-")[0];
}
var i1 = {
  start: "end",
  end: "start"
};
function mu(e) {
  return e.replace(/start|end/g, function(n) {
    return i1[n];
  });
}
function Mn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ct(e) {
  var n = Mn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Cn(e) {
  var n = Mn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function il(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Mn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function bt(e) {
  return ((Ct(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var no = Math.max, hu = Math.min, Ft = Math.round;
function Pa() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function lf() {
  return !/^((?!chrome|android).)*safari/i.test(Pa());
}
function Yt(e, n, t) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  n && Cn(e) && (r = e.offsetWidth > 0 && Ft(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ft(o.height) / e.offsetHeight || 1);
  var i = Ct(e) ? Mn(e) : window, l = i.visualViewport, s = !lf() && t, u = (o.left + (s && l ? l.offsetLeft : 0)) / r, d = (o.top + (s && l ? l.offsetTop : 0)) / a, c = o.width / r, f = o.height / a;
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
function ll(e) {
  var n = Mn(e), t = n.pageXOffset, o = n.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function sl(e) {
  return Yt(bt(e)).left + ll(e).scrollLeft;
}
function l1(e, n) {
  var t = Mn(e), o = bt(e), r = t.visualViewport, a = o.clientWidth, i = o.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = lf();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + sl(e),
    y: s
  };
}
function Wn(e) {
  return Mn(e).getComputedStyle(e);
}
function s1(e) {
  var n, t = bt(e), o = ll(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = no(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = no(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + sl(e), s = -o.scrollTop;
  return Wn(r || t).direction === "rtl" && (l += no(t.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function Rn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Tr(e) {
  return Rn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (il(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    bt(e)
  );
}
function ul(e) {
  var n = Wn(e), t = n.overflow, o = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + r + o);
}
function sf(e) {
  return ["html", "body", "#document"].indexOf(Rn(e)) >= 0 ? e.ownerDocument.body : Cn(e) && ul(e) ? e : sf(Tr(e));
}
function to(e, n) {
  var t;
  n === void 0 && (n = []);
  var o = sf(e), r = o === ((t = e.ownerDocument) == null ? void 0 : t.body), a = Mn(o), i = r ? [a].concat(a.visualViewport || [], ul(o) ? o : []) : o, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(to(Tr(i)))
  );
}
function u1(e) {
  return ["table", "td", "th"].indexOf(Rn(e)) >= 0;
}
function pu(e) {
  return !Cn(e) || // https://github.com/popperjs/popper-core/issues/837
  Wn(e).position === "fixed" ? null : e.offsetParent;
}
function d1(e) {
  var n = /firefox/i.test(Pa()), t = /Trident/i.test(Pa());
  if (t && Cn(e)) {
    var o = Wn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Tr(e);
  for (il(r) && (r = r.host); Cn(r) && ["html", "body"].indexOf(Rn(r)) < 0; ) {
    var a = Wn(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function dl(e) {
  for (var n = Mn(e), t = pu(e); t && u1(t) && Wn(t).position === "static"; )
    t = pu(t);
  return t && (Rn(t) === "html" || Rn(t) === "body" && Wn(t).position === "static") ? n : t || d1(e) || n;
}
function c1(e, n) {
  var t = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (t && il(t)) {
    var o = n;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Oa(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function f1(e, n) {
  var t = Yt(e, !1, n === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function gu(e, n, t) {
  return n === rf ? Oa(l1(e, t)) : Ct(n) ? f1(n, t) : Oa(s1(bt(e)));
}
function v1(e) {
  var n = to(Tr(e)), t = ["absolute", "fixed"].indexOf(Wn(e).position) >= 0, o = t && Cn(e) ? dl(e) : e;
  return Ct(o) ? n.filter(function(r) {
    return Ct(r) && c1(r, o) && Rn(r) !== "body";
  }) : [];
}
function m1(e, n, t, o) {
  var r = n === "clippingParents" ? v1(e) : [].concat(n), a = [].concat(r, [t]), i = a[0], l = a.reduce(function(s, u) {
    var d = gu(e, u, o);
    return s.top = no(d.top, s.top), s.right = hu(d.right, s.right), s.bottom = hu(d.bottom, s.bottom), s.left = no(d.left, s.left), s;
  }, gu(e, i, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function fo(e) {
  return e.split("-")[1];
}
function h1(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function uf(e) {
  var n = e.reference, t = e.element, o = e.placement, r = o ? it(o) : null, a = o ? fo(o) : null, i = n.x + n.width / 2 - t.width / 2, l = n.y + n.height / 2 - t.height / 2, s;
  switch (r) {
    case Yn:
      s = {
        x: i,
        y: n.y - t.height
      };
      break;
    case ft:
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
    case at:
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
  var u = r ? h1(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Or:
        s[u] = s[u] - (n[d] / 2 - t[d] / 2);
        break;
      case co:
        s[u] = s[u] + (n[d] / 2 - t[d] / 2);
        break;
    }
  }
  return s;
}
function p1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function g1(e) {
  return Object.assign({}, p1(), e);
}
function b1(e, n) {
  return n.reduce(function(t, o) {
    return t[o] = e, t;
  }, {});
}
function df(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = o === void 0 ? e.placement : o, a = t.strategy, i = a === void 0 ? e.strategy : a, l = t.boundary, s = l === void 0 ? Ky : l, u = t.rootBoundary, d = u === void 0 ? rf : u, c = t.elementContext, f = c === void 0 ? Jt : c, m = t.altBoundary, g = m === void 0 ? !1 : m, h = t.padding, b = h === void 0 ? 0 : h, C = g1(typeof b != "number" ? b : b1(b, Pr)), T = f === Jt ? Zy : Jt, O = e.rects.popper, $ = e.elements[g ? T : f], k = m1(Ct($) ? $ : $.contextElement || bt(e.elements.popper), s, d, i), M = Yt(e.elements.reference), P = uf({
    reference: M,
    element: O,
    strategy: "absolute",
    placement: r
  }), B = Oa(Object.assign({}, O, P)), E = f === Jt ? B : M, R = {
    top: k.top - E.top + C.top,
    bottom: E.bottom - k.bottom + C.bottom,
    left: k.left - E.left + C.left,
    right: E.right - k.right + C.right
  }, L = e.modifiersData.offset;
  if (f === Jt && L) {
    var U = L[r];
    Object.keys(R).forEach(function(oe) {
      var G = [St, ft].indexOf(oe) >= 0 ? 1 : -1, W = [Yn, ft].indexOf(oe) >= 0 ? "y" : "x";
      R[oe] += U[W] * G;
    });
  }
  return R;
}
function y1(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = t.boundary, a = t.rootBoundary, i = t.padding, l = t.flipVariations, s = t.allowedAutoPlacements, u = s === void 0 ? af : s, d = fo(o), c = d ? l ? vu : vu.filter(function(g) {
    return fo(g) === d;
  }) : Pr, f = c.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = c);
  var m = f.reduce(function(g, h) {
    return g[h] = df(e, {
      placement: h,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[it(h)], g;
  }, {});
  return Object.keys(m).sort(function(g, h) {
    return m[g] - m[h];
  });
}
function $1(e) {
  if (it(e) === al)
    return [];
  var n = Zo(e);
  return [mu(e), n, mu(n)];
}
function w1(e) {
  var n = e.state, t = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var r = t.mainAxis, a = r === void 0 ? !0 : r, i = t.altAxis, l = i === void 0 ? !0 : i, s = t.fallbackPlacements, u = t.padding, d = t.boundary, c = t.rootBoundary, f = t.altBoundary, m = t.flipVariations, g = m === void 0 ? !0 : m, h = t.allowedAutoPlacements, b = n.options.placement, C = it(b), T = C === b, O = s || (T || !g ? [Zo(b)] : $1(b)), $ = [b].concat(O).reduce(function(Q, I) {
      return Q.concat(it(I) === al ? y1(n, {
        placement: I,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : I);
    }, []), k = n.rects.reference, M = n.rects.popper, P = /* @__PURE__ */ new Map(), B = !0, E = $[0], R = 0; R < $.length; R++) {
      var L = $[R], U = it(L), oe = fo(L) === Or, G = [Yn, ft].indexOf(U) >= 0, W = G ? "width" : "height", K = df(n, {
        placement: L,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), x = G ? oe ? St : at : oe ? ft : Yn;
      k[W] > M[W] && (x = Zo(x));
      var Y = Zo(x), ae = [];
      if (a && ae.push(K[U] <= 0), l && ae.push(K[x] <= 0, K[Y] <= 0), ae.every(function(Q) {
        return Q;
      })) {
        E = L, B = !1;
        break;
      }
      P.set(L, ae);
    }
    if (B)
      for (var j = g ? 3 : 1, de = function(I) {
        var F = $.find(function(ve) {
          var Pe = P.get(ve);
          if (Pe)
            return Pe.slice(0, I).every(function(te) {
              return te;
            });
        });
        if (F)
          return E = F, "break";
      }, J = j; J > 0; J--) {
        var q = de(J);
        if (q === "break")
          break;
      }
    n.placement !== E && (n.modifiersData[o]._skip = !0, n.placement = E, n.reset = !0);
  }
}
const S1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: w1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function C1(e, n, t) {
  var o = it(e), r = [at, Yn].indexOf(o) >= 0 ? -1 : 1, a = typeof t == "function" ? t(Object.assign({}, n, {
    placement: e
  })) : t, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [at, St].indexOf(o) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function k1(e) {
  var n = e.state, t = e.options, o = e.name, r = t.offset, a = r === void 0 ? [0, 0] : r, i = af.reduce(function(d, c) {
    return d[c] = C1(c, n.rects, a), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[o] = i;
}
const P1 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: k1
};
var O1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function T1(e) {
  var n = e.x, t = e.y, o = window, r = o.devicePixelRatio || 1;
  return {
    x: Ft(n * r) / r || 0,
    y: Ft(t * r) / r || 0
  };
}
function bu(e) {
  var n, t = e.popper, o = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, g = i.y, h = g === void 0 ? 0 : g, b = typeof d == "function" ? d({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  m = b.x, h = b.y;
  var C = i.hasOwnProperty("x"), T = i.hasOwnProperty("y"), O = at, $ = Yn, k = window;
  if (u) {
    var M = dl(t), P = "clientHeight", B = "clientWidth";
    if (M === Mn(t) && (M = bt(t), Wn(M).position !== "static" && l === "absolute" && (P = "scrollHeight", B = "scrollWidth")), M = M, r === Yn || (r === at || r === St) && a === co) {
      $ = ft;
      var E = c && M === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[P]
      );
      h -= E - o.height, h *= s ? 1 : -1;
    }
    if (r === at || (r === Yn || r === ft) && a === co) {
      O = St;
      var R = c && M === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[B]
      );
      m -= R - o.width, m *= s ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: l
  }, u && O1), U = d === !0 ? T1({
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
    placement: it(n.placement),
    variation: fo(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, bu(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, bu(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const cf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: E1,
  data: {}
};
function I1(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function M1(e) {
  return e === Mn(e) || !Cn(e) ? ll(e) : I1(e);
}
function B1(e) {
  var n = e.getBoundingClientRect(), t = Ft(n.width) / e.offsetWidth || 1, o = Ft(n.height) / e.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function D1(e, n, t) {
  t === void 0 && (t = !1);
  var o = Cn(n), r = Cn(n) && B1(n), a = bt(n), i = Yt(e, r, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((Rn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ul(a)) && (l = M1(n)), Cn(n) ? (s = Yt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = sl(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function N1(e) {
  var n = Yt(e), t = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(n.width - t) <= 1 && (t = n.width), Math.abs(n.height - o) <= 1 && (o = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: t,
    height: o
  };
}
function V1(e) {
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
function A1(e) {
  var n = V1(e);
  return a1.reduce(function(t, o) {
    return t.concat(n.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function z1(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(t) {
      Promise.resolve().then(function() {
        n = void 0, t(e());
      });
    })), n;
  };
}
function L1(e) {
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
var yu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function $u() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function R1(e) {
  e === void 0 && (e = {});
  var n = e, t = n.defaultModifiers, o = t === void 0 ? [] : t, r = n.defaultOptions, a = r === void 0 ? yu : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, yu, a),
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
          reference: Ct(l) ? to(l) : l.contextElement ? to(l.contextElement) : [],
          popper: to(s)
        };
        var O = A1(L1([].concat(o, d.options.modifiers)));
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
          if ($u(T, O)) {
            d.rects = {
              reference: D1(T, dl(O), d.options.strategy === "fixed"),
              popper: N1(O)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(R) {
              return d.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var $ = 0; $ < d.orderedModifiers.length; $++) {
              if (d.reset === !0) {
                d.reset = !1, $ = -1;
                continue;
              }
              var k = d.orderedModifiers[$], M = k.fn, P = k.options, B = P === void 0 ? {} : P, E = k.name;
              typeof M == "function" && (d = M({
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
      update: z1(function() {
        return new Promise(function(b) {
          m.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!$u(l, s))
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
var Ho = {
  passive: !0
};
function U1(e) {
  var n = e.state, t = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, i = o.resize, l = i === void 0 ? !0 : i, s = Mn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", t.update, Ho);
  }), l && s.addEventListener("resize", t.update, Ho), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", t.update, Ho);
    }), l && s.removeEventListener("resize", t.update, Ho);
  };
}
const H1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: U1,
  data: {}
};
function F1(e) {
  var n = e.state, t = e.name;
  n.modifiersData[t] = uf({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Y1 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: F1,
  data: {}
};
function j1(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(t) {
    var o = n.styles[t] || {}, r = n.attributes[t] || {}, a = n.elements[t];
    !Cn(a) || !Rn(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function W1(e) {
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
      !Cn(r) || !Rn(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const q1 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: j1,
  effect: W1,
  requires: ["computeStyles"]
};
var G1 = [H1, Y1, cf, q1], X1 = /* @__PURE__ */ R1({
  defaultModifiers: G1
}), K1 = Object.defineProperty, Z1 = Object.defineProperties, J1 = Object.getOwnPropertyDescriptors, wu = Object.getOwnPropertySymbols, Q1 = Object.prototype.hasOwnProperty, _1 = Object.prototype.propertyIsEnumerable, Su = (e, n, t) => n in e ? K1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ar = (e, n) => {
  for (var t in n || (n = {}))
    Q1.call(n, t) && Su(e, t, n[t]);
  if (wu)
    for (var t of wu(n))
      _1.call(n, t) && Su(e, t, n[t]);
  return e;
}, zr = (e, n) => Z1(e, J1(n)), Cu = (e, n, t) => new Promise((o, r) => {
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
function ff(e) {
  const n = S(null), t = S(null), o = S({ width: 0, height: 0 }), r = zt(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(E, R) {
      R ? (M(), y(e.onOpen)) : y(e.onClose);
    }
  }), { zIndex: a } = Oo(() => r.value, 1);
  let i = null, l = !1, s = !1;
  const u = () => {
    const { width: E, height: R } = kt(n.value);
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
  }, f = () => Cu(this, null, function* () {
    e.trigger === "hover" && (s = !1, yield dn(), !l && B());
  }), m = () => {
    e.trigger === "hover" && (l = !0);
  }, g = () => Cu(this, null, function* () {
    e.trigger === "hover" && (l = !1, yield dn(), !s && B());
  }), h = () => {
    e.closeOnClickReference && r.value ? B() : P();
  }, b = () => {
    B();
  }, C = (E) => {
    e.trigger === "click" && (b(), y(e.onClickOutside, E));
  }, T = () => {
    M(), y(e.onClosed);
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
      zr(Ar({}, S1), {
        enabled: r.value
      }),
      zr(Ar({}, P1), {
        options: {
          offset: [R, L]
        }
      }),
      zr(Ar({}, cf), {
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
  }, k = () => e.reference ? n.value.querySelector(e.reference) : n.value, M = () => {
    i.setOptions($());
  }, P = () => {
    const { disabled: E } = e;
    E || (r.value = !0, y(e["onUpdate:show"], !0));
  }, B = () => {
    r.value = !1, y(e["onUpdate:show"], !1);
  };
  return bd(k, "click", C), fe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], M), fe(() => e.disabled, B), $o(() => {
    var E;
    i = X1((E = k()) != null ? E : n.value, t.value, $());
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
    handlePopoverClose: b,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: g,
    handleClosed: T,
    resize: M,
    open: P,
    close: B
  };
}
const x1 = {
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
}, { name: e$, n: n$, classes: t$ } = ne("tooltip");
function o$(e, n) {
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
      (p(), ke(Gn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        Z(Ye, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: he(() => [
            Te(D(
              "div",
              {
                ref: "popover",
                class: v(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: H({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = Pn(() => {
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
              [zn, e.show]
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
const vf = ee({
  name: e$,
  props: x1,
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
      open: g,
      // expose
      close: h,
      // expose
      resize: b
    } = ff(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Ce,
      n: n$,
      classes: t$,
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
vf.render = o$;
var cl = vf;
re(cl);
const bE = cl;
var fr = cl;
const r$ = {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
var a$ = Object.defineProperty, ku = Object.getOwnPropertySymbols, i$ = Object.prototype.hasOwnProperty, l$ = Object.prototype.propertyIsEnumerable, Pu = (e, n, t) => n in e ? a$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, s$ = (e, n) => {
  for (var t in n || (n = {}))
    i$.call(n, t) && Pu(e, t, n[t]);
  if (ku)
    for (var t of ku(n))
      l$.call(n, t) && Pu(e, t, n[t]);
  return e;
};
const { name: u$, n: d$, classes: c$ } = ne("ellipsis"), f$ = { key: 0 };
function v$(e, n) {
  const t = se("var-tooltip");
  return p(), ke(
    t,
    rt(Co(e.tooltip)),
    {
      content: he(() => [
        z(e.$slots, "tooltip-content", {}, () => {
          var o;
          return [
            (o = e.tooltip) != null && o.content ? (p(), w(
              "span",
              f$,
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
const mf = ee({
  name: u$,
  components: { VarTooltip: fr },
  props: r$,
  setup(e) {
    const n = S(!1), t = N(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), o = N(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : s$({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltip: o,
      expanding: n,
      rootStyles: t,
      n: d$,
      classes: c$,
      handleClick: r
    };
  }
});
mf.render = v$;
var fl = mf;
re(fl);
const yE = fl;
var Ta = fl;
const m$ = {
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
  onClick: A(),
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  "onUpdate:active": A()
}, {
  name: h$,
  classes: Lr,
  n: bn
} = ne("fab");
var vl = ee({
  name: h$,
  inheritAttrs: !1,
  props: m$,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = zt(e, "active"), r = S(null), a = S(null);
    fe(() => e.trigger, () => {
      o.value = !1;
    }), fe(() => e.disabled, () => {
      o.value = !1;
    }), fe(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var d;
      (d = a.value) == null || d.reset();
    }), bd(r, "click", s);
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
      }) : null : Te(Z(vn, {
        "var-fab-cover": !0,
        class: bn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        round: !0
      }, {
        default: () => [Z(He, {
          "var-fab-cover": !0,
          class: Lr([o.value, bn("trigger-active-icon"), bn("trigger-inactive-icon")]),
          name: o.value ? e.activeIcon : e.inactiveIcon,
          size: o.value ? e.inactiveIconSize : e.activeIconSize,
          transition: 200,
          animationClass: bn("--trigger-icon-animation")
        }, null)]
      }), [[zn, e.show]]);
    }
    return () => {
      var d;
      const c = $d((d = y(n.default)) != null ? d : []), f = vi(e.drag) ? {} : e.drag;
      return Z(cr, Ae({
        ref: a,
        class: Lr(bn(`--position-${e.position}`), [!e.fixed, bn("--absolute")]),
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
          class: Lr(bn(), bn(`--direction-${e.direction}`), [e.safeArea, bn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, c.length),
          onMouseenter: () => l(!0, c.length)
        }, [Z(Ye, {
          name: bn("--active-transition")
        }, {
          default: () => [u()]
        }), Z(Ye, {
          name: bn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Te(Z("div", {
            class: bn("actions"),
            onClick: (m) => m.stopPropagation()
          }, [c.map((m) => Z("div", {
            class: bn("action")
          }, [m]))]), [[zn, e.show && o.value && c.length]])]
        })])]
      });
    };
  }
});
re(vl);
const $E = vl;
var Ea = vl;
const p$ = {
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
var Ou = (e, n, t) => new Promise((o, r) => {
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
const { name: g$, n: b$ } = ne("form");
function y$(e, n) {
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
const hf = ee({
  name: g$,
  props: p$,
  setup(e) {
    const n = N(() => e.disabled), t = N(() => e.readonly), { formItems: o, bindFormItems: r } = Wg();
    r({
      disabled: n,
      readonly: t
    });
    function i(f) {
      setTimeout(() => {
        const m = dt(f), g = m === window ? 0 : gs(m), h = gs(f) - g - Fe(e.scrollToErrorOffsetY);
        lo(m, {
          top: h,
          animation: Jr
        });
      }, 300);
    }
    function l(f) {
      return Ou(this, null, function* () {
        f.preventDefault();
        const m = yield u();
        y(e.onSubmit, m);
      });
    }
    function s(f) {
      f.preventDefault(), d(), y(e.onReset);
    }
    function u() {
      return Ou(this, null, function* () {
        var f;
        const m = yield Promise.all(o.map(({ validate: g }) => g()));
        if (e.scrollToError) {
          const [, g] = tm(m, (b) => b === !1, e.scrollToError), h = g > -1;
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
      n: b$,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: d,
      resetValidation: c
    };
  }
});
hf.render = y$;
var Mo = hf;
Mo.useValidation = En;
Mo.useForm = In;
re(Mo);
const wE = Mo;
var Ia = Mo;
const $$ = {
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
}, { name: w$, n: S$, classes: C$ } = ne("image"), k$ = ["alt", "title", "lazy-loading", "lazy-error"], P$ = ["alt", "title", "src"];
function O$(e, n) {
  var t;
  const o = Re("lazy"), r = Re("ripple");
  return Te((p(), w(
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
      e.lazy && !e.showErrorSlot ? Te((p(), w("img", {
        key: 0,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: H({ objectFit: e.fit }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, k$)), [
        [o, (t = e.src) != null ? t : ""]
      ]) : _("v-if", !0),
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
      }, null, 46, P$)) : _("v-if", !0),
      e.showErrorSlot ? z(e.$slots, "error", { key: 2 }) : _("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const pf = ee({
  name: w$,
  directives: {
    Lazy: so,
    Ripple: Ke
  },
  props: $$,
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
      n: S$,
      classes: C$,
      toSizeUnit: Ce,
      handleLoad: r,
      handleError: o,
      handleClick: a
    };
  }
});
pf.render = O$;
var ml = pf;
re(ml);
const SE = ml;
var Ma = ml;
const gf = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function T$() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    gf
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: t
  };
}
const bf = {
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
var It = (e, n, t) => new Promise((o, r) => {
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
const E$ = 250, I$ = 20, { name: M$, n: Rr, classes: B$ } = ne("swipe"), D$ = ["onClick"];
function N$(e, n) {
  const t = se("var-icon"), o = se("var-button"), r = Re("hover");
  return Te((p(), w(
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
      e.navigation ? z(e.$slots, "prev", rt(Ae({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        Z(Ye, {
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
            )) : _("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : _("v-if", !0),
      e.navigation ? z(e.$slots, "next", rt(Ae({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        Z(Ye, {
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
            )) : _("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : _("v-if", !0),
      z(e.$slots, "indicator", rt(Co({
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
              Ne,
              null,
              qe(e.length, (a, i) => (p(), w("div", {
                class: v(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: H({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, D$))),
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
const yf = ee({
  name: M$,
  directives: { Hover: Tn },
  components: { VarButton: vn, VarIcon: He },
  props: bf,
  setup(e) {
    const n = S(null), t = S(0), o = N(() => e.vertical), r = S(0), a = S(0), i = S(!1), l = S(0), s = S(!1), { swipeItems: u, bindSwipeItems: d, length: c } = T$(), { popup: f, bindPopup: m } = Em(), {
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
      endTouch: E
    } = pr(), R = N(() => k.value === (e.vertical ? "vertical" : "horizontal"));
    let L = !1, U = -1;
    d({
      size: t,
      vertical: o
    }), y(m, null), fe(
      () => c.value,
      () => It(this, null, function* () {
        yield dn(), j(), ve();
      })
    ), f && fe(
      () => f.show.value,
      (le) => It(this, null, function* () {
        le ? (yield dn(), ve()) : J();
      })
    ), vt(ve), hr(J), ko(ve);
    function G(le) {
      return u.find(({ index: ge }) => ge.value === le);
    }
    function W() {
      e.loop && (a.value >= 0 && G(c.value - 1).setTranslate(-r.value), a.value <= -(r.value - t.value) && G(0).setTranslate(r.value), a.value > -(r.value - t.value) && a.value < 0 && (G(c.value - 1).setTranslate(0), G(0).setTranslate(0)));
    }
    function K(le) {
      const ge = fn(le) ? le : Math.floor((a.value - t.value / 2) / -t.value), { loop: De } = e;
      return ge <= -1 ? De ? -1 : 0 : ge >= c.value ? De ? c.value : c.value - 1 : ge;
    }
    function x(le) {
      const { loop: ge } = e;
      return le === -1 ? ge ? c.value - 1 : 0 : le === c.value ? ge ? 0 : c.value - 1 : le;
    }
    function Y(le) {
      return e.loop ? le < 0 ? c.value + le : le >= c.value ? le - c.value : le : lt(le, 0, c.value - 1);
    }
    function ae() {
      return It(this, null, function* () {
        const le = a.value >= t.value, ge = a.value <= -r.value, De = 0, We = -(r.value - t.value);
        i.value = !0, (le || ge) && (i.value = !0, a.value = ge ? De : We, G(0).setTranslate(0), G(c.value - 1).setTranslate(0)), yield dn(), i.value = !1;
      });
    }
    function j() {
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
      a.value = le, W();
    }
    function Q(le) {
      return It(this, null, function* () {
        c.value <= 1 || !e.touchable || (P(le), J(), yield ae(), i.value = !0);
      });
    }
    function I(le) {
      const { touchable: ge, vertical: De } = e;
      !$.value || !ge || (B(le), R.value && (le.preventDefault(), q(a.value + (De ? C.value : b.value))));
    }
    function F() {
      if (!$.value || (E(), !R.value))
        return;
      const { vertical: le, onChange: ge } = e, De = le ? h.value < 0 : g.value < 0, We = le ? O.value : T.value, Se = performance.now() - M.value <= E$ && We >= I$ ? K(De ? l.value + 1 : l.value - 1) : K();
      i.value = !1, q(Se * -t.value);
      const ye = l.value;
      l.value = x(Se), de(), ye !== l.value && y(ge, l.value);
    }
    function ve() {
      n.value && (i.value = !0, t.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = t.value * c.value, a.value = l.value * -t.value, u.forEach((le) => {
        le.setTranslate(0);
      }), de(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function Pe(le) {
      return It(this, null, function* () {
        if (c.value <= 1)
          return;
        j();
        const { loop: ge, onChange: De } = e, We = l.value;
        if (l.value = Y(We + 1), (le == null ? void 0 : le.event) !== !1 && y(De, l.value), yield ae(), We === c.value - 1 && ge) {
          G(0).setTranslate(r.value), a.value = c.value * -t.value;
          return;
        }
        We !== c.value - 1 && (a.value = l.value * -t.value);
      });
    }
    function te(le) {
      return It(this, null, function* () {
        if (c.value <= 1)
          return;
        j();
        const { loop: ge, onChange: De } = e, We = l.value;
        if (l.value = Y(We - 1), (le == null ? void 0 : le.event) !== !1 && y(De, l.value), yield ae(), We === 0 && ge) {
          G(c.value - 1).setTranslate(-r.value), a.value = t.value;
          return;
        }
        We !== 0 && (a.value = l.value * -t.value);
      });
    }
    function ue(le, ge) {
      if (c.value <= 1 || le === l.value)
        return;
      le = le < 0 ? 0 : le, le = le >= c.value ? c.value : le;
      const De = le > l.value ? Pe : te, We = Math.abs(le - l.value);
      Array.from({ length: We }).forEach((ce, Se) => {
        De({ event: Se === We - 1 ? ge == null ? void 0 : ge.event : !1 });
      });
    }
    const we = (le) => {
      e.navigation === "hover" && (s.value = le);
    };
    function Be(le) {
      return e.navigation !== "hover" ? "" : e.vertical ? Rr(`--navigation-vertical-${le}-animation`) : Rr(`--navigation-${le}-animation`);
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
      classes: B$,
      handleTouchstart: Q,
      handleTouchmove: I,
      handleTouchend: F,
      next: Pe,
      prev: te,
      to: ue,
      resize: ve,
      toNumber: V,
      handleHovering: we,
      getNavigationAnimation: Be
    };
  }
});
yf.render = N$;
var hl = yf;
re(hl);
const CE = hl;
var vo = hl;
function V$() {
  const { bindParent: e, index: n, parentProvider: t } = an(gf);
  return e || On("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: t,
    bindSwipe: e
  };
}
const { name: A$, n: z$ } = ne("swipe-item");
function L$(e, n) {
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
const $f = ee({
  name: A$,
  setup() {
    const e = S(0), { swipe: n, bindSwipe: t, index: o } = V$(), { size: r, vertical: a } = n;
    t({
      index: o,
      setTranslate: l
    });
    function l(s) {
      e.value = s;
    }
    return {
      n: z$,
      size: r,
      vertical: a,
      translate: e
    };
  }
});
$f.render = L$;
var pl = $f;
re(pl);
const kE = pl;
var mo = pl, R$ = Object.defineProperty, Tu = Object.getOwnPropertySymbols, U$ = Object.prototype.hasOwnProperty, H$ = Object.prototype.propertyIsEnumerable, Eu = (e, n, t) => n in e ? R$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Iu = (e, n) => {
  for (var t in n || (n = {}))
    U$.call(n, t) && Eu(e, t, n[t]);
  if (Tu)
    for (var t of Tu(n))
      H$.call(n, t) && Eu(e, t, n[t]);
  return e;
};
const F$ = Iu(Iu({
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
}, en(bf, ["loop", "indicator", "onChange"])), en(Po, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), { name: Y$, n: Mu, classes: j$ } = ne("image-preview"), Ur = 12, Bu = 200, W$ = 350, Du = 200, q$ = 500, G$ = ["onTouchstart"], X$ = ["src", "alt"];
function K$(e, n) {
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
      Z(o, Ae({
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
            Ne,
            null,
            qe(e.images, (i, l) => (p(), ke(t, {
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
                  }, null, 10, X$)
                ], 46, G$)
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
            )) : _("v-if", !0)
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
        }, null, 8, ["class", "onClick"])) : _("v-if", !0)
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
const wf = ee({
  name: Y$,
  components: {
    VarSwipe: vo,
    VarSwipeItem: mo,
    VarPopup: ut,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: F$,
  setup(e) {
    const n = S(!1), t = S(1), o = S(0), r = S(0), a = S(), i = S(), l = S(!0), s = S(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: m, moveTouch: g, endTouch: h } = pr(), b = N(() => {
      const { images: J, current: q, initialIndex: Q } = e;
      if (Q != null)
        return V(Q);
      const I = J.findIndex((F) => F === q);
      return Math.max(I, 0);
    }), C = N(() => {
      const { imagePreventDefault: J, show: q } = e;
      return q && J;
    });
    let T = null, O = null, $ = !1;
    const k = {
      start: null,
      prev: null
    };
    st(() => document, "contextmenu", de), fe(
      () => e.show,
      (J) => {
        n.value = J;
      },
      { immediate: !0 }
    );
    function M() {
      t.value = V(e.zoom), l.value = !1, k.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, Du);
    }
    function P() {
      t.value = 1, o.value = 0, r.value = 0, l.value = !0, k.prev = null, a.value = void 0, i.value = void 0;
    }
    function B(J) {
      return k.prev ? c.value <= Ur && performance.now() - f.value <= Bu && k.prev === J : !1;
    }
    function E(J) {
      return !J || !k.start || !k.prev ? !1 : c.value <= Ur && performance.now() - f.value < W$ && (J === k.start || J.parentNode === k.start);
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
        q && x(), k.start = null;
      }, Bu);
    }
    function U(J, q) {
      window.clearTimeout(T), window.clearTimeout(O);
      const Q = J.currentTarget;
      if (k.start = Q, O = window.setTimeout(() => {
        $ = !0, y(e.onLongPress, q);
      }, q$), B(Q)) {
        t.value > 1 ? P() : M();
        return;
      }
      m(J), k.prev = Q;
    }
    function oe(J) {
      const { offsetWidth: q, offsetHeight: Q } = J, { naturalWidth: I, naturalHeight: F } = J.querySelector(`.${Mu("image")}`);
      return {
        width: q,
        height: Q,
        imageRadio: F / I,
        rootRadio: Q / q,
        zoom: V(e.zoom)
      };
    }
    function G(J) {
      const { zoom: q, imageRadio: Q, rootRadio: I, width: F, height: ve } = oe(J);
      if (!Q)
        return 0;
      const Pe = Q > I ? ve / Q : F;
      return Math.max(0, (q * Pe - F) / 2) / q;
    }
    function W(J) {
      const { zoom: q, imageRadio: Q, rootRadio: I, width: F, height: ve } = oe(J);
      if (!Q)
        return 0;
      const Pe = Q > I ? ve : F * Q;
      return Math.max(0, (q * Pe - ve) / 2) / q;
    }
    function K(J) {
      if (!k.prev)
        return;
      g(J);
      const q = J.currentTarget;
      if (c.value > Ur && window.clearTimeout(O), t.value > 1) {
        const Q = G(q), I = W(q);
        o.value = lt(o.value + u.value, -Q, Q), r.value = lt(r.value + d.value, -I, I);
      }
      k.prev = q;
    }
    function x() {
      if (t.value > 1) {
        P(), setTimeout(() => y(e["onUpdate:show"], !1), Du);
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
    function j(J, q) {
      var Q;
      (Q = s.value) == null || Q.to(J, q);
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
      n: Mu,
      classes: j$,
      handleTouchstart: U,
      handleTouchmove: K,
      handleTouchend: L,
      handleTouchcancel: R,
      close: x,
      prev: Y,
      next: ae,
      to: j
    };
  }
});
wf.render = K$;
var Bo = wf, Z$ = Object.defineProperty, J$ = Object.defineProperties, Q$ = Object.getOwnPropertyDescriptors, Nu = Object.getOwnPropertySymbols, _$ = Object.prototype.hasOwnProperty, x$ = Object.prototype.propertyIsEnumerable, Vu = (e, n, t) => n in e ? Z$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Fo = (e, n) => {
  for (var t in n || (n = {}))
    _$.call(n, t) && Vu(e, t, n[t]);
  if (Nu)
    for (var t of Nu(n))
      x$.call(n, t) && Vu(e, t, n[t]);
  return e;
}, Au = (e, n) => J$(e, Q$(n));
let et, oo = {};
function ew(e = {}) {
  return Qe(e) ? Au(Fo({}, oo), { images: [e] }) : Ve(e) ? Au(Fo({}, oo), { images: e }) : Fo(Fo({}, oo), e);
}
function Tt(e) {
  if (!pt())
    return;
  Tt.close();
  const n = ew(e), t = je(n);
  t.teleport = "body", et = t;
  const { unmountInstance: o } = Xt(Bo, t, {
    onClose: () => y(t.onClose),
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
}
Tt.close = () => {
  if (et != null) {
    const e = et;
    et = null, Ue().then(() => {
      e.show = !1;
    });
  }
};
Tt.setDefaultOptions = (e) => {
  oo = e;
};
Tt.resetDefaultOptions = () => {
  oo = {};
};
Tt.Component = Bo;
re(Bo);
re(Bo, Tt);
const PE = Bo;
var ho = Tt;
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
  onScroll: A()
};
var zu = (e, n, t) => new Promise((o, r) => {
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
const { name: nw, n: tw, classes: ow } = ne("sticky");
function rw(e, n) {
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
const Sf = ee({
  name: nw,
  props: Jo,
  setup(e) {
    const n = S(null), t = S(null), o = S(!1), r = S("0px"), a = S("0px"), i = S("auto"), l = S("auto"), s = S("auto"), u = S("auto"), d = N(() => !e.disabled && e.cssMode), c = N(() => !e.disabled && !e.cssMode && o.value), f = N(() => Fe(e.offsetTop));
    let m;
    fe(() => e.disabled, b), rn(C), hr(T), ko(b), st(() => window, "scroll", h);
    function g() {
      const { cssMode: O, disabled: $ } = e;
      if ($)
        return;
      let k = 0;
      if (m !== window) {
        const { top: L } = _e(m);
        k = L;
      }
      const M = t.value, P = n.value, { top: B, left: E } = _e(P), R = B - k;
      return R <= f.value ? (O || (i.value = `${P.offsetWidth}px`, l.value = `${P.offsetHeight}px`, r.value = `${k + f.value}px`, a.value = `${E}px`, s.value = `${M.offsetWidth}px`, u.value = `${M.offsetHeight}px`, o.value = !0), {
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
      return zu(this, null, function* () {
        o.value = !1, yield qo(), g();
      });
    }
    function C() {
      return zu(this, null, function* () {
        yield dn(), m = dt(n.value), m !== window && m.addEventListener("scroll", h), h();
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
      n: tw,
      classes: ow,
      resize: b,
      toNumber: V
    };
  }
});
Sf.render = rw;
var gl = Sf;
re(gl);
const OE = gl;
var po = gl;
const Cf = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function aw() {
  const { bindChildren: e, length: n, childProviders: t } = ln(
    Cf
  );
  return {
    length: n,
    indexAnchors: t,
    bindIndexAnchors: e
  };
}
function iw() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    Cf
  );
  return t || On("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: t
  };
}
const lw = {
  index: [Number, String]
}, { name: sw, n: uw, classes: dw } = ne("index-anchor");
function cw(e, n) {
  return p(), ke(qt(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: he(() => [
      D(
        "div",
        Ae({
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
const kf = ee({
  name: sw,
  components: { VarSticky: po },
  inheritAttrs: !1,
  props: lw,
  setup(e) {
    const n = S(0), t = S(!1), o = N(() => e.index), r = S(null), { index: a, indexBar: i, bindIndexBar: l } = iw(), { active: s, sticky: u, cssMode: d, stickyOffsetTop: c, zIndex: f } = i;
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
      n: uw,
      classes: dw,
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
kf.render = cw;
var bl = kf;
re(bl);
const TE = bl;
var Ba = bl;
const fw = {
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
const { name: vw, n: mw, classes: hw } = ne("index-bar"), pw = ["onClick"];
function gw(e, n) {
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
            Ne,
            null,
            qe(e.anchorNameList, (t) => (p(), w("li", {
              key: t,
              class: v(e.classes(e.n("anchor-item"), [e.active === t, e.n("anchor-item--active")])),
              style: H({ color: e.active === t && e.highlightColor ? e.highlightColor : "" }),
              onClick: (o) => e.anchorClick({ anchorName: t, manualCall: !0 })
            }, ie(t), 15, pw))),
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
const Pf = ee({
  name: vw,
  props: fw,
  setup(e) {
    const n = S(""), t = S(null), o = S([]), r = S(), a = N(() => e.sticky), i = N(() => e.stickyCssMode || e.cssMode), l = N(() => Fe(e.stickyOffsetTop)), s = N(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = aw();
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
      () => Yo(this, null, function* () {
        yield dn(), d.forEach(({ name: P, setOwnTop: B }) => {
          P.value && o.value.push(P.value), B();
        });
      })
    ), rn(() => Yo(this, null, function* () {
      yield O(), $();
    })), mr(k), jt(() => {
      m = !0, k();
    }), vt(() => {
      !m || r.value === void 0 || (T({
        anchorName: r.value,
        options: { event: !1 }
      }), m = !1);
    }), c(g);
    function h(P, B) {
      const E = ro(P) ? P.name.value : P;
      E === r.value || E === void 0 || (r.value = E, (B == null ? void 0 : B.event) !== !1 && y(e.onChange, E));
    }
    function b() {
      if (mi(f))
        return 0;
      const { top: P } = _e(f), { scrollTop: B } = f, { top: E } = _e(t.value);
      return B - P + E;
    }
    function C() {
      const P = io(f), B = f === window ? document.body.scrollHeight : f.scrollHeight, E = b();
      d.forEach((R, L) => {
        const U = R.ownTop.value, oe = P - U + l.value - E, G = L === d.length - 1 ? B : d[L + 1].ownTop.value - R.ownTop.value;
        R.setDisabled(!0), oe >= 0 && oe < G && n.value === "" && (R.setDisabled(!1), h(R));
      });
    }
    function T(P) {
      return Yo(this, arguments, function* ({ anchorName: B, manualCall: E = !1, options: R }) {
        if (E && y(e.onClick, B), B === r.value && !m)
          return;
        const L = d.find(({ name: W }) => B === W.value);
        if (!L)
          return;
        const U = b(), oe = L.ownTop.value - l.value + U, G = bi(f);
        n.value = B, h(B, R), yield lo(f, {
          left: G,
          top: oe,
          animation: Yd,
          duration: V(e.duration)
        }), yield dn(), n.value = "";
      });
    }
    function O() {
      return Yo(this, null, function* () {
        yield dn(), f = dt(t.value);
      });
    }
    function $() {
      f.addEventListener("scroll", C);
    }
    function k() {
      f.removeEventListener("scroll", C);
    }
    function M(P, B) {
      ao(() => T({ anchorName: P, options: B }));
    }
    return {
      barEl: t,
      active: r,
      zIndex: s,
      anchorNameList: o,
      n: mw,
      classes: hw,
      toNumber: V,
      scrollTo: M,
      anchorClick: T
    };
  }
});
Pf.render = gw;
var yl = Pf;
re(yl);
const EE = yl;
var Da = yl;
const $l = {
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
}, { name: bw, n: Hr, classes: yw } = ne("field-decorator"), $w = ["for"];
function ww(e, n) {
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
          ], 14, $w)) : _("v-if", !0),
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
              }, null, 8, ["class", "onClick"])) : _("v-if", !0),
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
        Ne,
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
                  e.placeholder && e.hint ? (p(), ke(Gn, {
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
                  ])) : _("v-if", !0)
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
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Of = ee({
  name: bw,
  components: { VarIcon: He },
  props: $l,
  setup(e, { slots: n }) {
    const t = S(null), o = S(""), r = N(() => e.hint && (!Hn(e.value) || e.isFocus || n["prepend-icon"])), a = N(
      () => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
    );
    ko(l), rn(l), So(l);
    function i() {
      const { hint: d, value: c, composing: f } = e;
      if (!d && (!Hn(c) || f))
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
      const g = kt(t.value), h = `var(--field-decorator-outlined-${d}-placeholder-space)`;
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
      classes: yw,
      isEmpty: Hn,
      handleClear: s,
      handleClick: u
    };
  }
});
Of.render = ww;
var Tf = Of, Sw = Object.defineProperty, Lu = Object.getOwnPropertySymbols, Cw = Object.prototype.hasOwnProperty, kw = Object.prototype.propertyIsEnumerable, Ru = (e, n, t) => n in e ? Sw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Pw = (e, n) => {
  for (var t in n || (n = {}))
    Cw.call(n, t) && Ru(e, t, n[t]);
  if (Lu)
    for (var t of Lu(n))
      kw.call(n, t) && Ru(e, t, n[t]);
  return e;
};
const Ow = Pw({
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
}, en($l, [
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
])), { name: Tw, n: Ew, classes: Iw } = ne("input"), Mw = ["placeholder", "enterkeyhint"], Bw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Dw = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Nw(e, n) {
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
        rt(Co({
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
            }, null, 14, Mw)) : _("v-if", !0),
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
      `, 46, Bw)) : (p(), w("input", {
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
            }, null, 46, Dw))
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
        onMousedown: n[12] || (n[12] = Pn(() => {
        }, ["stop"]))
      }, Qo({
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
  name: Tw,
  components: {
    VarFormDetails: mn,
    VarFieldDecorator: Tf
  },
  props: Ow,
  setup(e) {
    const n = yd(), t = S(null), o = S(!1), r = S(!1), { bindForm: a, form: i } = In(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = En(), c = N(() => e.disabled || e.readonly ? "" : "text"), f = N(() => e.type === "number" ? "text" : e.type), m = N(() => {
      const { maxlength: Y, modelValue: ae } = e;
      return Y ? Hn(ae) ? `0 / ${Y}` : `${String(ae).length}/${Y}` : "";
    }), g = N(() => {
      const { hint: Y, blurColor: ae, focusColor: j } = e;
      if (!Y)
        return l.value ? "var(--field-decorator-error-color)" : o.value ? j || "var(--field-decorator-focus-color)" : ae || "var(--field-decorator-blur-color)";
    });
    y(a, {
      reset: G,
      validate: W,
      resetValidation: d
    }), rn(() => {
      e.autofocus && K();
    });
    function b(Y) {
      Ue(() => {
        const { validateTrigger: ae, rules: j, modelValue: de } = e;
        s(ae, Y, j, de);
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
      let { value: j } = ae;
      return e.type === "number" && (j = R(j)), U(L(j));
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
      const { disabled: Y, readonly: ae, clearable: j, onClear: de } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || Y || ae || !j || (y(e["onUpdate:modelValue"], ""), y(de, ""), b("onClear"));
    }
    function E(Y) {
      const { disabled: ae, onClick: j } = e;
      i != null && i.disabled.value || ae || (y(j, Y), b("onClick"));
    }
    function R(Y) {
      const ae = Y.indexOf("-"), j = Y.indexOf(".");
      return ae > -1 && (Y = ae === 0 ? "-" + Y.replace(/-/g, "") : Y.replace(/-/g, "")), j > -1 && (Y = Y.slice(0, j + 1) + Y.slice(j).replace(/\./g, "")), Y.replace(/[^-0-9.]/g, "");
    }
    function L(Y) {
      return e.modelModifiers.trim ? Y.trim() : Y;
    }
    function U(Y) {
      return e.maxlength ? Y.slice(0, V(e.maxlength)) : Y;
    }
    function oe(Y) {
      const { disabled: ae } = e;
      i != null && i.disabled.value || ae || Y.target === t.value || (K(), Y.preventDefault());
    }
    function G() {
      y(e["onUpdate:modelValue"], ""), d();
    }
    function W() {
      return u(e.rules, e.modelValue);
    }
    function K() {
      var Y;
      (Y = t.value) == null || Y.focus();
    }
    function x() {
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
      classes: Iw,
      isEmpty: Hn,
      handleFocus: C,
      handleBlur: T,
      handleInput: M,
      handleChange: P,
      handleClear: B,
      handleClick: E,
      handleCompositionStart: $,
      handleCompositionEnd: k,
      handleMousedown: oe,
      validate: W,
      resetValidation: d,
      reset: G,
      focus: K,
      blur: x
    };
  }
});
Ef.render = Nw;
var wl = Ef;
re(wl);
const IE = wl;
var vr = wl;
const Vw = {
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
}, { name: Aw, n: zw, classes: Lw } = ne("link");
function Rw(e, n) {
  return p(), ke(qt(e.tag), Ae(e.linkProps, {
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
const If = ee({
  name: Aw,
  props: Vw,
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
      n: zw,
      classes: Lw,
      handleClick: o,
      toSizeUnit: Ce
    };
  }
});
If.render = Rw;
var Sl = If;
re(Sl);
const ME = Sl;
var Na = Sl;
const Uw = {
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
function Hw() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    Mf
  );
  return {
    length: t,
    tabItemList: n,
    bindTabItem: e
  };
}
const Bf = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Fw() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    Mf
  );
  return n || On("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: t,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Yw() {
  const { childProviders: e, bindChildren: n, length: t } = ln(Bf);
  return {
    length: t,
    lists: e,
    bindLists: n
  };
}
function jw() {
  const { parentProvider: e, bindParent: n, index: t } = an(Bf);
  return {
    index: t,
    tabItem: e,
    bindTabItem: n
  };
}
var Ww = (e, n, t) => new Promise((o, r) => {
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
const { name: qw, n: Gw, classes: Xw } = ne("list");
function Kw(e, n) {
  const t = se("var-loading"), o = Re("ripple");
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
      }) : _("v-if", !0),
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
      }) : _("v-if", !0),
      e.error ? z(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Te((p(), w(
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
      }) : _("v-if", !0),
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
const Df = ee({
  name: qw,
  directives: { Ripple: Ke },
  components: { VarLoading: Rt },
  props: Uw,
  setup(e) {
    const n = S(null), t = S(null), { tabItem: o, bindTabItem: r } = jw();
    let a;
    y(r, {}), o && fe(() => o.current.value, u), fe(() => [e.loading, e.error, e.finished], u), rn(() => {
      a = dt(n.value), a.addEventListener("scroll", u), e.immediateCheck && u();
    }), hr(s);
    function i() {
      y(e["onUpdate:error"], !1), y(e["onUpdate:loading"], !0), y(e.onLoad);
    }
    function l() {
      const { bottom: d } = _e(a), { bottom: c } = _e(t.value);
      return Math.floor(c) - Fe(e.offset) <= d;
    }
    function s() {
      a.removeEventListener("scroll", u);
    }
    function u() {
      return Ww(this, null, function* () {
        yield Ue(), !(e.loading || e.finished || e.error || (o == null ? void 0 : o.current.value) === !1 || !l()) && i();
      });
    }
    return {
      pack: xe,
      listEl: n,
      detectorEl: t,
      isNumber: fn,
      load: i,
      check: u,
      n: Gw,
      classes: Xw
    };
  }
});
Df.render = Kw;
var Cl = Df;
re(Cl);
const BE = Cl;
var Va = Cl;
const Zw = {
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
  name: Jw,
  classes: Qw,
  n: Uu
} = ne("loading-bar");
var _w = ee({
  name: Jw,
  props: Zw,
  setup(e) {
    return () => Z("div", {
      class: Qw(Uu(), [e.error, Uu("--error")]),
      style: {
        zIndex: $n.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: Ce(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Ce(e.top)
      }
    }, null);
  }
});
let Nf, Vf, Er, Af, Hu, zf = {};
const xw = {
  value: 0,
  opacity: 0,
  error: !1
}, nn = je(xw), eS = (e) => {
  Object.assign(nn, e);
}, nS = (e) => {
  Object.assign(nn, e), zf = e;
}, tS = () => {
  Object.keys(zf).forEach((e) => {
    nn[e] !== void 0 && (nn[e] = void 0);
  });
}, Lf = () => {
  Hu || (Hu = !0, Xt(_w, nn));
}, kl = () => {
  Nf = window.setTimeout(() => {
    if (nn.value >= 95)
      return;
    let e = Math.random();
    nn.value < 70 && (e = Math.round(5 * Math.random())), nn.value += e, kl();
  }, 200);
}, Pl = () => {
  window.clearTimeout(Vf), window.clearTimeout(Nf), window.clearTimeout(Er), window.clearTimeout(Af);
}, oS = () => {
  Pl(), nn.error = !1, nn.value = 0, Lf(), Er = window.setTimeout(() => {
    nn.opacity = 1;
  }, 200), kl();
}, Rf = () => {
  Pl(), nn.value = 100, Er = window.setTimeout(() => {
    nn.opacity = 0, Vf = window.setTimeout(() => {
      nn.error = !1;
    }, 250);
  }, 300);
}, rS = () => {
  Pl(), nn.error = !0, nn.value === 100 && (nn.value = 0), Lf(), Er = window.setTimeout(() => {
    nn.opacity = 1;
  }, 200), kl(), Af = window.setTimeout(Rf, 300);
}, Uf = {
  start: oS,
  finish: Rf,
  error: rS,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: eS,
  setDefaultOptions: nS,
  resetDefaultOptions: tS
}, DE = Uf;
var Aa = Uf;
const aS = {
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
}, { name: iS, n: lS, classes: sS } = ne("menu");
function uS(e, n) {
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
      (p(), ke(Gn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        Z(Ye, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: he(() => [
            Te(D(
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
                onClick: n[0] || (n[0] = Pn(() => {
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
              [zn, e.show]
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
const Hf = ee({
  name: iS,
  props: aS,
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
      open: g,
      // expose
      close: h,
      // expose
      resize: b
    } = ff(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: pn,
      toSizeUnit: Ce,
      n: lS,
      classes: sS,
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
Hf.render = uS;
var Ol = Hf;
re(Ol);
const NE = Ol;
var go = Ol;
const Ff = Symbol("SELECT_BIND_OPTION_KEY");
function dS() {
  const { length: e, childProviders: n, bindChildren: t } = ln(Ff);
  return {
    length: e,
    options: n,
    bindOptions: t
  };
}
function cS() {
  const { index: e, parentProvider: n, bindParent: t } = an(Ff);
  return t || On("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: t
  };
}
const fS = {
  label: {},
  value: {}
}, { name: vS, n: mS, classes: hS } = ne("option");
function pS(e, n) {
  const t = se("var-checkbox"), o = se("var-hover-overlay"), r = Re("ripple"), a = Re("hover");
  return Te((p(), w(
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
        onClick: n[1] || (n[1] = Pn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      }, null, 8, ["checked-color", "modelValue", "onChange"])) : _("v-if", !0),
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
const Yf = ee({
  name: vS,
  directives: { Ripple: Ke, Hover: Tn },
  components: {
    VarCheckbox: rr,
    VarHoverOverlay: An
  },
  props: fS,
  setup(e) {
    const n = S(!1), t = N(() => n.value), o = N(() => e.label), r = N(() => e.value), { select: a, bindSelect: i } = cS(), { multiple: l, focusColor: s, onSelect: u, computeLabel: d } = a, { hovering: c, handleHovering: f } = jn(), m = {
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
      n: mS,
      classes: hS,
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
Yf.render = pS;
var Tl = Yf;
re(Tl);
const VE = Tl;
var za = Tl;
const gS = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  onClick: A(),
  "onUpdate:show": A()
}, {
  name: bS,
  n: Fu
} = ne("overlay");
var El = ee({
  name: bS,
  inheritAttrs: !1,
  props: gS,
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
      return Z("div", Ae({
        class: Fu(),
        style: {
          zIndex: o.value - 1
        }
      }, t, {
        onClick: a
      }), [y(n.default)]);
    }
    function l() {
      return Z(Ye, {
        name: Fu("--fade")
      }, {
        default: () => [e.show && i()]
      });
    }
    return () => {
      const {
        teleport: s
      } = e;
      return s ? Z(Gn, {
        to: s,
        disabled: r.value
      }, {
        default: () => [l()]
      }) : l();
    };
  }
});
re(El);
const AE = El;
var La = El;
const yS = {
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
}, { name: $S, n: wS, classes: SS } = ne("pagination"), CS = ["item-mode", "onClick"];
function kS(e, n) {
  const t = se("var-icon"), o = se("var-input"), r = se("var-cell"), a = se("var-menu"), i = Re("ripple");
  return p(), w(
    "ul",
    {
      class: v(e.n())
    },
    [
      Te((p(), w(
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
            onKeydown: n[3] || (n[3] = ts((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
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
        Ne,
        { key: 1 },
        qe(e.pageList, (l, s) => Te((p(), w("li", {
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
        ], 10, CS)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Te((p(), w(
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
                Ne,
                null,
                qe(e.sizeOption, (l, s) => Te((p(), ke(r, {
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
                  onClick: n[5] || (n[5] = Pn((...l) => e.showMenu && e.showMenu(...l), ["stop"]))
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
      )) : _("v-if", !0),
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
            onKeydown: n[9] || (n[9] = ts((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : _("v-if", !0),
      e.totalText ? (p(), w(
        "li",
        {
          key: 4,
          class: v(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        ie(e.totalText),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const jf = ee({
  name: $S,
  components: {
    VarMenu: go,
    VarIcon: He,
    VarCell: or,
    VarInput: vr
  },
  directives: { Ripple: Ke },
  props: yS,
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
        let E = [];
        const { maxPagerCount: R, total: L, onChange: U } = e, oe = Math.ceil(V(L) / V(B)), G = M - (R - u.value) - 1;
        if (o.value = `${$}`, M - 2 > R) {
          if (P === void 0 || M !== oe)
            for (let W = 2; W < R + 2; W++)
              E.push(W);
          if ($ <= R && $ < G) {
            E = [];
            for (let W = 1; W < R + 1; W++)
              E.push(W + 1);
            r.value = !0, a.value = !1;
          }
          if ($ > R && $ < G) {
            E = [];
            for (let W = 1; W < R + 1; W++)
              E.push($ + W - u.value);
            r.value = $ === 2 && R === 1, a.value = !1;
          }
          if ($ >= G) {
            E = [];
            for (let W = 1; W < R + 1; W++)
              E.push(M - (R - W) - 1);
            r.value = !1, a.value = !0;
          }
          E = [1, "...", ...E, "...", M];
        } else
          for (let W = 1; W <= M; W++)
            E.push(W);
        s.value = E, P != null && M > 0 && y(U, $, k), y(e["onUpdate:current"], $), y(e["onUpdate:size"], k);
      },
      {
        immediate: !0
      }
    );
    function m($, k) {
      return fn($) ? !1 : k === 1 ? r.value : a.value;
    }
    function g($, k) {
      return fn($) ? "basic" : k === 1 ? "head" : "tail";
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
        fn($) && (i.value = $);
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
      pack: xe,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      quickJumperValue: t,
      simpleCurrentValue: o,
      totalText: f,
      n: wS,
      classes: SS,
      getMode: g,
      isHideEllipsis: m,
      clickItem: h,
      showMenu: b,
      clickSize: C,
      setPage: O,
      toNumber: V,
      formatElevation: pn
    };
  }
});
jf.render = kS;
var Il = jf;
re(Il);
const zE = Il;
var Ra = Il;
const PS = {
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
}, { name: OS, n: TS, classes: ES } = ne("paper");
function IS(e, n) {
  const t = Re("ripple");
  return Te((p(), w(
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
const Wf = ee({
  name: OS,
  directives: { Ripple: Ke },
  props: PS,
  setup(e) {
    function n(t) {
      y(e.onClick, t);
    }
    return {
      n: TS,
      classes: ES,
      formatElevation: pn,
      toSizeUnit: Ce,
      handleClick: n
    };
  }
});
Wf.render = IS;
var Ml = Wf;
re(Ml);
const LE = Ml;
var Ua = Ml, MS = Object.defineProperty, Yu = Object.getOwnPropertySymbols, BS = Object.prototype.hasOwnProperty, DS = Object.prototype.propertyIsEnumerable, ju = (e, n, t) => n in e ? MS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, NS = (e, n) => {
  for (var t in n || (n = {}))
    BS.call(n, t) && ju(e, t, n[t]);
  if (Yu)
    for (var t of Yu(n))
      DS.call(n, t) && ju(e, t, n[t]);
  return e;
};
const VS = NS({
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
])), { name: AS, n: zS, classes: LS } = ne("picker"), Wu = 300, RS = 15, qu = 200, US = 1e3;
let Gu = 0;
const HS = ["onTouchstartPassive", "onTouchmove", "onTouchend"], FS = ["onTransitionend"], YS = ["onClick"];
function jS(e, n) {
  const t = se("var-button");
  return p(), ke(
    qt(e.dynamic ? e.n("$-popup") : e.Transition),
    Ae(
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
          Ae({
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
            )) : _("v-if", !0),
            D(
              "div",
              {
                class: v(e.n("columns")),
                style: H({ height: `${e.columnHeight}px` })
              },
              [
                (p(!0), w(
                  Ne,
                  null,
                  qe(e.scrollColumns, (o) => (p(), w("div", {
                    class: v(e.n("column")),
                    key: o.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, o),
                    onTouchmove: Pn((r) => e.handleTouchmove(r, o), ["prevent"]),
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
                        Ne,
                        null,
                        qe(o.column, (r, a) => (p(), w("div", {
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
                        ], 14, YS))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, FS)
                  ], 42, HS))),
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
const qf = ee({
  name: AS,
  components: {
    VarButton: vn,
    VarPopup: ut
  },
  inheritAttrs: !1,
  props: VS,
  setup(e) {
    const n = zt(e, "modelValue"), t = S([]), o = N(() => Fe(e.optionHeight)), r = N(() => Fe(e.optionCount)), a = N(() => r.value * o.value / 2 - o.value / 2), i = N(() => r.value * o.value), { prevY: l, moveY: s, dragging: u, startTouch: d, moveTouch: c, endTouch: f } = pr();
    let m = [];
    k(), fe(() => e.columns, k, { deep: !0 }), fe(() => n.value, M);
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
    function C(I) {
      return I.map((F) => {
        const ve = {
          id: Gu++,
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
          id: Gu++,
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
      t.value = e.cascade ? T(e.columns) : C(e.columns), M();
    }
    function M() {
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
      I.translate = lt(I.translate, F, ve);
    }
    function R(I, F) {
      const ve = Math.round((a.value - F) / o.value);
      return om(ve, I.column);
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
    function W(I, F) {
      u.value || (I.index = F, oe(I, qu));
    }
    function K(I, F) {
      F.touching = !0, F.translate = Dr(F.scrollEl), d(I);
    }
    function x(I, F) {
      if (!F.touching)
        return;
      c(I), F.scrolling = !1, F.duration = 0, F.prevY = l.value, F.translate += s.value, E(F);
      const ve = performance.now();
      ve - F.momentumTime > Wu && (F.momentumTime = ve, F.momentumPrevY = F.translate);
    }
    function Y(I) {
      f(), I.touching = !1, I.prevY = 0;
      const F = I.translate - I.momentumPrevY, ve = performance.now() - I.momentumTime, Pe = Math.abs(F) >= RS && ve <= Wu, te = I.translate;
      Pe && G(I, F, ve), I.index = R(I, I.translate), oe(I, Pe ? US : qu), I.scrolling = I.translate !== te, I.scrolling || de(I);
    }
    function ae(I) {
      I.scrolling = !1, de(I);
    }
    function j() {
      const { indexes: I } = U();
      return I.every((F, ve) => F === m[ve]);
    }
    function de(I) {
      const { cascade: F, onChange: ve } = e;
      if (j())
        return;
      F && $(I);
      const Pe = t.value.some((le) => le.scrolling), te = t.value.some((le) => le.touching);
      if (Pe || te)
        return;
      const { values: ue, indexes: we, options: Be } = U();
      b(we), y(ve, ue, we, Be), n.value = ue;
    }
    function J() {
      if (e.cascade) {
        const I = t.value.find((F) => F.scrolling);
        I && (I.index = R(I, Dr(I.scrollEl)), I.scrolling = !1, oe(I), $(I));
      } else
        t.value.forEach((I) => {
          I.index = R(I, Dr(I.scrollEl)), oe(I);
        });
    }
    function q() {
      J();
      const { values: I, indexes: F, options: ve } = U();
      b(F), y(e.onConfirm, I, F, ve);
    }
    function Q() {
      J();
      const { values: I, indexes: F, options: ve } = U();
      b(F), y(e.onCancel, I, F, ve);
    }
    return {
      pack: xe,
      optionHeight: o,
      optionCount: r,
      scrollColumns: t,
      columnHeight: i,
      center: a,
      Transition: Ye,
      n: zS,
      classes: LS,
      setScrollEl: P,
      getOptionKey: g,
      getValue: h,
      handlePopupUpdateShow: B,
      handleTouchstart: K,
      handleTouchmove: x,
      handleTouchend: Y,
      handleTransitionend: ae,
      confirm: q,
      cancel: Q,
      handleClick: W
    };
  }
});
qf.render = jS;
var Do = qf;
let At;
function No(e) {
  return new Promise((n) => {
    No.close();
    const t = Ve(e) ? { columns: e } : e, o = je(t);
    o.dynamic = !0, o.teleport = "body", At = o;
    function r() {
      At === o && (At = null);
    }
    const { unmountInstance: a } = Xt(Do, o, {
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
No.close = function() {
  if (At == null)
    return;
  const e = At;
  At = null, Ue().then(() => {
    e.show = !1;
  });
};
No.Component = Do;
re(Do);
re(Do, No);
const RE = Do;
var Ha = No;
const WS = {
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
}, Kn = 100, Un = 20, Xu = 2 * Math.PI * Un, { name: qS, n: GS, classes: XS } = ne("progress"), KS = ["viewBox"], ZS = { key: 0 }, JS = ["id"], QS = ["offset", "stop-color"], _S = ["d", "stroke-width", "stroke-dasharray"], xS = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function eC(e, n) {
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
          )) : _("v-if", !0)
        ],
        2
        /* CLASS */
      )) : _("v-if", !0),
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
            e.isPlainObject(e.color) ? (p(), w("defs", ZS, [
              D("linearGradient", {
                id: e.id,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "0%"
              }, [
                (p(!0), w(
                  Ne,
                  null,
                  qe(e.linearGradientProgress, (t, o) => (p(), w("stop", {
                    key: o,
                    offset: t,
                    "stop-color": e.color[t]
                  }, null, 8, QS))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, JS)
            ])) : _("v-if", !0),
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
            }, null, 14, _S)) : _("v-if", !0),
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
            }, null, 14, xS)
          ], 10, KS)),
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
const Gf = ee({
  name: qS,
  props: WS,
  setup(e) {
    const n = yd(), t = N(() => {
      const i = V(e.value), l = i > Kn ? Kn : i, s = i > Kn ? Kn : Math.round(i);
      return {
        width: `${l}%`,
        roundValue: `${s}%`
      };
    }), o = N(() => {
      const { size: i, lineWidth: l, value: s } = e, u = Un / (1 - Fe(l) / Fe(i)) * 2, d = `0 0 ${u} ${u}`, c = V(s) > Kn ? Kn : Math.round(V(s)), f = `${(Kn - c) / Kn * Xu}`, m = Fe(l) / Fe(i) * u, g = 0, h = -Un, b = 0, C = -2 * Un, T = `M ${u / 2} ${u / 2} m ${g} ${h} a ${Un} ${Un} 
        0 1 1 ${b} ${-C} a ${Un} ${Un} 0 1 1 ${-b} ${C}`;
      return {
        strokeWidth: m,
        viewBox: d,
        strokeOffset: f,
        roundValue: `${c}%`,
        path: T
      };
    }), r = N(() => ro(e.color) ? `url(#${n.value})` : e.color), a = N(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: t,
      CIRCUMFERENCE: Xu,
      RADIUS: Un,
      circleProps: o,
      progressColor: r,
      linearGradientProgress: a,
      n: GS,
      classes: XS,
      toSizeUnit: Ce,
      isPlainObject: ro
    };
  }
});
Gf.render = eC;
var Bl = Gf;
re(Bl);
const UE = Bl;
var Fa = Bl;
const nC = {
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
var Ku = (e, n, t) => new Promise((o, r) => {
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
const { name: tC, n: Zu, classes: oC } = ne("pull-refresh"), Ju = 150;
function rC(e, n) {
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
const Xf = ee({
  name: tC,
  components: { VarIcon: He },
  props: nC,
  setup(e) {
    const n = S(0), t = S(null), o = S(null), r = S(0), a = S("-125%"), i = S("arrow-down"), l = S("default"), s = S(!1), u = N(() => Math.abs(2 * n.value)), d = N(() => l.value === "success"), c = N(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = N(() => ({
      transform: `translate3d(0px, ${Qe(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
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
    ), rn(M), st(t, "touchmove", $);
    function C(B) {
      return Ku(this, null, function* () {
        if (i.value !== B)
          return i.value = B, new Promise((E) => {
            window.setTimeout(E, Ju);
          });
      });
    }
    function T(B) {
      ("classList" in m ? m : document.body).classList[B](`${Zu()}--lock`);
    }
    function O(B) {
      if (n.value === 0) {
        const { width: E } = _e(o.value);
        n.value = -(E + E * 0.25);
      }
      h = B.touches[0].clientY, b = 0, g = dt(B.target);
    }
    function $(B) {
      if (!c.value || !g || g !== m && io(g) > 0)
        return;
      const E = io(m);
      if (E > 0)
        return;
      const R = E === 0;
      b = B.touches[0].clientY - h, R && b >= 0 && B.preventDefault(), l.value !== "pulling" && (l.value = "pulling", r.value = B.touches[0].clientY), R && fn(a.value) && a.value > n.value && T("add");
      const U = (B.touches[0].clientY - r.value) / 2 + n.value;
      a.value = U >= u.value ? u.value : U, C(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function k() {
      return Ku(this, null, function* () {
        c.value && (s.value = !0, V(a.value) >= u.value * 0.2 ? (yield C("refresh"), l.value = "loading", a.value = u.value * 0.3, y(e["onUpdate:modelValue"], !0), Ue(() => {
          y(e.onRefresh);
        }), T("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, T("remove");
        }, V(e.animationDuration))), g = null);
      });
    }
    function M() {
      m = e.target ? Id(e.target, "PullRefresh") : dt(t.value);
    }
    function P() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, V(e.animationDuration));
    }
    return {
      ICON_TRANSITION: Ju,
      refreshStatus: l,
      freshNode: t,
      controlNode: o,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: Zu,
      classes: oC,
      touchStart: O,
      touchMove: $,
      touchEnd: k
    };
  }
});
Xf.render = rC;
var Dl = Xf;
re(Dl);
const HE = Dl;
var Ya = Dl;
const aC = {
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
}, Kf = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function iC() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    Kf
  );
  return {
    length: t,
    radios: n,
    bindRadios: e
  };
}
function lC() {
  const { bindParent: e, parentProvider: n, index: t } = an(Kf);
  return {
    index: t,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: sC, n: uC, classes: dC } = ne("radio");
function cC(e, n) {
  const t = se("var-icon"), o = se("var-hover-overlay"), r = se("var-form-details"), a = Re("ripple"), i = Re("hover");
  return p(), w(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      D(
        "div",
        Ae({
          class: e.n(),
          onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Te((p(), w(
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
const Zf = ee({
  name: sC,
  directives: { Ripple: Ke, Hover: Tn },
  components: {
    VarIcon: He,
    VarFormDetails: mn,
    VarHoverOverlay: An
  },
  inheritAttrs: !1,
  props: aC,
  setup(e) {
    const n = zt(e, "modelValue"), t = N(() => n.value === e.checkedValue), o = S(!1), { radioGroup: r, bindRadioGroup: a } = lC(), { hovering: i, handleHovering: l } = jn(), { form: s, bindForm: u } = In(), {
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
      Ue(() => {
        const { validateTrigger: P, rules: B, modelValue: E } = e;
        c(P, M, B, E);
      });
    }
    function b(M) {
      const { checkedValue: P, onChange: B } = e;
      r && n.value === P || (n.value = M, y(B, n.value), r == null || r.onToggle(P), h("onChange"));
    }
    function C(M) {
      const { disabled: P, readonly: B, uncheckedValue: E, checkedValue: R, onClick: L } = e;
      s != null && s.disabled.value || P || (y(L, M), !(s != null && s.readonly.value || B) && (o.value = !0, b(t.value ? E : R)));
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
      n: uC,
      classes: dC,
      handleClick: C,
      toggle: k,
      reset: O,
      validate: $,
      resetValidation: m
    };
  }
});
Zf.render = cC;
var Nl = Zf;
re(Nl);
const FE = Nl;
var ja = Nl;
const fC = {
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
}, { name: vC, n: mC, classes: hC } = ne("radio-group");
function pC(e, n) {
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
const Jf = ee({
  name: vC,
  components: { VarFormDetails: mn },
  props: fC,
  setup(e) {
    const { length: n, radios: t, bindRadios: o } = iC(), { bindForm: r } = In(), {
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
      Ue(() => {
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
      n: mC,
      classes: hC,
      reset: h,
      validate: g,
      resetValidation: s
    };
  }
});
Jf.render = pC;
var Vl = Jf;
re(Vl);
const YE = Vl;
var Wa = Vl;
const gC = {
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
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: bC, n: Qt } = ne("rate"), yC = ["onClick"];
function $C(e, n) {
  const t = se("var-icon"), o = se("var-hover-overlay"), r = se("var-form-details"), a = Re("ripple"), i = Re("hover");
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
            Ne,
            null,
            qe(e.toNumber(e.count), (l) => Te((p(), w("div", {
              key: l,
              style: H(e.getStyle(l)),
              class: v(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              Z(t, {
                class: v(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.namespace,
                name: e.getCurrentState(l).name,
                style: H({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              Z(o, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, yC)), [
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
const Qf = ee({
  name: bC,
  components: {
    VarIcon: He,
    VarFormDetails: mn,
    VarHoverOverlay: An
  },
  directives: { Ripple: Ke, Hover: Tn },
  props: gC,
  setup(e) {
    const n = S(-1), { form: t, bindForm: o } = In(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = En(), { hovering: s } = jn();
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
        [Qt("content")]: !0,
        [Qt("--disabled")]: (t == null ? void 0 : t.disabled.value) || e.disabled,
        [Qt("--error")]: r.value,
        [Qt("--primary")]: k !== e.emptyIcon && !M
      };
    }
    function m($) {
      const { modelValue: k, disabled: M, disabledColor: P, color: B, half: E, emptyColor: R, icon: L, halfIcon: U, emptyIcon: oe } = e;
      let G = B;
      return (M || t != null && t.disabled.value) && (G = P), $ <= V(k) ? { color: G, name: L } : E && $ <= V(k) + 0.5 ? { color: G, name: U } : { color: M || t != null && t.disabled.value ? P : R, name: oe };
    }
    function g($, k) {
      const { half: M, clearable: P } = e, { offsetWidth: B } = k.target;
      M && k.offsetX <= Math.floor(B / 2) && ($ -= 0.5), u === $ && P && ($ = 0), u = $, y(e["onUpdate:modelValue"], $);
    }
    function h() {
      return i(e.rules, V(e.modelValue));
    }
    function b() {
      return Ue(() => a(["onChange"], "onChange", e.rules, e.modelValue));
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
      n: Qt
    };
  }
});
Qf.render = $C;
var Al = Qf;
re(Al);
const jE = Al;
var qa = Al;
const wC = (e) => (mt(""), e = e(), ht(), e), SC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, CC = /* @__PURE__ */ wC(() => /* @__PURE__ */ D(
  "path",
  { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
  null,
  -1
  /* HOISTED */
)), kC = [
  CC
];
function PC(e, n) {
  return p(), w("svg", SC, kC);
}
const _f = ee({});
_f.render = PC;
var OC = _f;
const TC = (e) => (mt(""), e = e(), ht(), e), EC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, IC = /* @__PURE__ */ TC(() => /* @__PURE__ */ D(
  "path",
  { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
  null,
  -1
  /* HOISTED */
)), MC = [
  IC
];
function BC(e, n) {
  return p(), w("svg", EC, MC);
}
const xf = ee({});
xf.render = BC;
var DC = xf;
const NC = (e) => (mt(""), e = e(), ht(), e), VC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, AC = /* @__PURE__ */ NC(() => /* @__PURE__ */ D(
  "path",
  { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
  null,
  -1
  /* HOISTED */
)), zC = [
  AC
];
function LC(e, n) {
  return p(), w("svg", VC, zC);
}
const ev = ee({});
ev.render = LC;
var RC = ev;
const { n: UC, classes: HC } = ne("result");
function FC(e, n) {
  return p(), w(
    Ne,
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
const nv = ee({
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
      n: UC,
      classes: HC,
      toNumber: V
    };
  }
});
nv.render = FC;
var YC = nv;
const jC = (e) => (mt(""), e = e(), ht(), e), WC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, qC = /* @__PURE__ */ jC(() => /* @__PURE__ */ D(
  "path",
  { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
  null,
  -1
  /* HOISTED */
)), GC = [
  qC
];
function XC(e, n) {
  return p(), w("svg", WC, GC);
}
const tv = ee({});
tv.render = XC;
var KC = tv;
const ZC = (e) => (mt(""), e = e(), ht(), e), JC = { viewBox: "-4 -4 32 32" }, QC = /* @__PURE__ */ ZC(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), _C = [
  QC
];
function xC(e, n) {
  return p(), w("svg", JC, _C);
}
const ov = ee({});
ov.render = xC;
var ek = ov;
const nk = {
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
}, { name: tk, n: ok, classes: rk } = ne("result");
function ak(e, n) {
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
                (p(), ke(qt(e.type), {
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
        )) : _("v-if", !0)
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
        )) : _("v-if", !0)
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
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const rv = ee({
  name: tk,
  components: {
    Info: OC,
    Success: YC,
    Warning: RC,
    Error: DC,
    Question: KC,
    Empty: ek
  },
  props: nk,
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
      n: ok,
      classes: rk,
      toNumber: V,
      toPxNum: Fe
    };
  }
});
rv.render = ak;
var zl = rv;
re(zl);
const WE = zl;
var Ga = zl;
const ik = {
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
}, { name: lk, n: sk, classes: uk } = ne("row");
function dk(e, n) {
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
const av = ee({
  name: lk,
  props: ik,
  setup(e) {
    const n = N(
      () => Ve(e.gutter) ? e.gutter.map((s) => Fe(s) / 2) : [0, Fe(e.gutter) / 2]
    ), { cols: t, bindCols: o, length: r } = a0(), a = { computePadding: i };
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
      n: sk,
      classes: uk,
      handleClick: l,
      padStartFlex: er
    };
  }
});
av.render = dk;
var Ll = av;
re(Ll);
const qE = Ll;
var Xa = Ll, ck = Object.defineProperty, Qu = Object.getOwnPropertySymbols, fk = Object.prototype.hasOwnProperty, vk = Object.prototype.propertyIsEnumerable, _u = (e, n, t) => n in e ? ck(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, mk = (e, n) => {
  for (var t in n || (n = {}))
    fk.call(n, t) && _u(e, t, n[t]);
  if (Qu)
    for (var t of Qu(n))
      vk.call(n, t) && _u(e, t, n[t]);
  return e;
};
const hk = mk({
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
}, en($l, [
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
])), { name: pk, n: gk, classes: bk } = ne("select"), yk = { key: 1 };
function $k(e, n) {
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
            rt(Co({
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
                        e.isEmptyModelValue ? _("v-if", !0) : z(e.$slots, "selected", { key: 0 }, () => [
                          e.multiple ? (p(), w(
                            Ne,
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
                                    Ne,
                                    null,
                                    qe(e.labels, (l) => (p(), ke(t, {
                                      class: v(e.n("chip")),
                                      "var-select-cover": "",
                                      closable: "",
                                      size: "small",
                                      type: e.errorMessage ? "danger" : void 0,
                                      key: l,
                                      onClick: n[0] || (n[0] = Pn(() => {
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
                            yk,
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
                    )) : _("v-if", !0),
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
        onClick: n[2] || (n[2] = Pn(() => {
        }, ["stop"]))
      }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const iv = ee({
  name: pk,
  components: {
    VarIcon: He,
    VarMenu: go,
    VarChip: ar,
    VarFieldDecorator: Tf,
    VarFormDetails: mn
  },
  props: hk,
  setup(e) {
    const n = S(!1), t = S(!1), o = N(() => e.multiple), r = N(() => e.focusColor), a = S(""), i = S([]), l = N(() => Hn(e.modelValue)), s = N(() => e.disabled || e.readonly ? "" : "pointer"), u = S(0), { bindForm: d, form: c } = In(), { length: f, options: m, bindOptions: g } = dS(), {
      errorMessage: h,
      validateWithTrigger: b,
      validate: C,
      // expose
      resetValidation: T
    } = En(), O = S(null), $ = N(() => e.variant === "outlined" ? "bottom" : "cover-top"), k = N(() => {
      const { hint: q, blurColor: Q, focusColor: I } = e;
      if (!q)
        return h.value ? "var(--field-decorator-error-color)" : n.value ? I || "var(--field-decorator-focus-color)" : Q || "var(--field-decorator-blur-color)";
    }), M = N(() => !e.hint && Hn(e.modelValue)), P = {
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
        const { multiple: q, modelValue: Q } = e;
        q && !Ve(Q) && On("Select", "The modelValue must be an array when multiple is true");
      }
    ), fe(() => e.modelValue, Y, { deep: !0 }), fe(() => f.value, Y), g(P), y(d, P);
    function B() {
      const { multiple: q, modelValue: Q } = e;
      if (q) {
        const I = Q;
        i.value = I.map(L);
      }
      !q && !Hn(Q) && (a.value = L(Q)), !q && Hn(Q) && (a.value = "");
    }
    function E(q) {
      Ue(() => {
        const { validateTrigger: Q, rules: I, modelValue: F } = e;
        b(Q, q, I, F);
      });
    }
    function R({ value: q, label: Q }) {
      return q.value != null ? q.value : Q.value;
    }
    function L(q) {
      var Q;
      let I = m.find(({ value: F }) => F.value === q);
      return I || (I = m.find(({ label: F }) => F.value === q)), (Q = I == null ? void 0 : I.label.value) != null ? Q : "";
    }
    function U() {
      const { disabled: q, readonly: Q, onFocus: I } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || q || Q || (u.value = Fe(e.offsetY), n.value = !0, y(I), E("onFocus"));
    }
    function oe() {
      const { disabled: q, readonly: Q, onBlur: I } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || q || Q || (j(), y(I), E("onBlur"));
    }
    function G(q) {
      const { disabled: Q, readonly: I, multiple: F, onChange: ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || Q || I)
        return;
      const Pe = F ? m.filter(({ selected: te }) => te.value).map(R) : R(q);
      y(e["onUpdate:modelValue"], Pe), y(ve, Pe), E("onChange"), F || j();
    }
    function W() {
      const { disabled: q, readonly: Q, multiple: I, clearable: F, onClear: ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || q || Q || !F)
        return;
      const Pe = I ? [] : void 0;
      y(e["onUpdate:modelValue"], Pe), y(ve, Pe), E("onClear");
    }
    function K(q) {
      const { disabled: Q, onClick: I } = e;
      c != null && c.disabled.value || Q || (y(I, q), E("onClick"));
    }
    function x(q) {
      const { disabled: Q, readonly: I, modelValue: F, onClose: ve } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || Q || I)
        return;
      const Pe = F, te = m.find(({ label: we }) => we.value === q), ue = Pe.filter((we) => {
        var Be;
        return we !== ((Be = te.value.value) != null ? Be : te.label.value);
      });
      y(e["onUpdate:modelValue"], ue), y(ve, ue), E("onClose");
    }
    function Y() {
      const { multiple: q, modelValue: Q } = e;
      if (q) {
        const I = Q;
        m.forEach((F) => F.sync(I.includes(R(F))));
      } else
        m.forEach((I) => I.sync(Q === R(I)));
      B();
    }
    function ae() {
      u.value = Fe(e.offsetY), n.value = !0, t.value = !0;
    }
    function j() {
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
      n: gk,
      classes: bk,
      handleFocus: U,
      handleBlur: oe,
      handleClear: W,
      handleClick: K,
      handleClose: x,
      reset: J,
      validate: de,
      resetValidation: T,
      focus: ae,
      blur: j
    };
  }
});
iv.render = $k;
var Rl = iv;
re(Rl);
const GE = Rl;
var Ka = Rl;
const wk = {
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
}, { name: Sk, n: Ck, classes: kk } = ne("skeleton");
function Pk(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? _("v-if", !0) : (p(), w(
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
          )) : _("v-if", !0),
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
              )) : _("v-if", !0),
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
                  )) : _("v-if", !0),
                  (p(!0), w(
                    Ne,
                    null,
                    qe(e.toNumber(e.rows), (t, o) => (p(), w(
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
              )) : _("v-if", !0)
            ],
            2
            /* CLASS */
          )) : _("v-if", !0)
        ],
        2
        /* CLASS */
      )) : _("v-if", !0),
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
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const lv = ee({
  name: Sk,
  props: wk,
  setup: () => ({
    n: Ck,
    classes: kk,
    toSizeUnit: Ce,
    toNumber: V
  })
});
lv.render = Pk;
var Ul = lv;
re(Ul);
const XE = Ul;
var Za = Ul, Ge = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(Ge || {});
const Ok = {
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
}, { name: Tk, n: xu, classes: Ek } = ne("slider"), Ik = ["onTouchstart"];
function Mk(e, n) {
  const t = se("var-hover-overlay"), o = se("var-form-details"), r = Re("hover");
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
            Ne,
            null,
            qe(e.thumbList, (a) => (p(), w("div", {
              class: v(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: H(e.thumbStyle(a)),
              onTouchstart: Pn((i) => e.start(i, a.enumValue), ["stop"])
            }, [
              z(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Te(D(
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
            ], 46, Ik))),
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
const sv = ee({
  name: Tk,
  components: {
    VarFormDetails: mn,
    VarHoverOverlay: An
  },
  directives: { Hover: Tn },
  props: Ok,
  setup(e) {
    const n = S(0), t = S(null), o = S(!1), r = N(() => V(e.max) - V(e.min)), a = N(() => n.value / r.value * V(e.step)), i = N(() => e.disabled || (d == null ? void 0 : d.disabled.value)), l = N(() => e.readonly || (d == null ? void 0 : d.readonly.value)), s = N(() => e.direction === "vertical"), { bindForm: u, form: d } = In(), { errorMessage: c, validateWithTrigger: f, validate: m, resetValidation: g } = En(), { hovering: h, handleHovering: b } = jn(), { hovering: C, handleHovering: T } = jn(), O = N(() => {
      const { modelValue: te, range: ue } = e;
      let we = [];
      return ue && Ve(te) ? we = [
        {
          value: G(te[0]),
          enumValue: Ge.First,
          text: W(te[0]),
          hovering: xt(h),
          handleHovering: b
        },
        {
          value: G(te[1]),
          enumValue: Ge.Second,
          text: W(te[1]),
          hovering: xt(C),
          handleHovering: T
        }
      ] : fn(te) && (we = [
        {
          value: G(te),
          enumValue: Ge.First,
          text: W(te),
          hovering: xt(h),
          handleHovering: b
        }
      ]), we;
    }), $ = N(() => {
      const { activeColor: te, range: ue, modelValue: we } = e, Be = ue && Ve(we) ? G(Math.min(we[0], we[1])) : 0, le = ue && Ve(we) ? G(Math.max(we[0], we[1])) - Be : G(we);
      return s.value ? {
        left: "0px",
        height: `${le}%`,
        bottom: `${Be}%`,
        background: te
      } : {
        top: "0px",
        width: `${le}%`,
        left: `${Be}%`,
        background: te
      };
    }), k = je({
      [Ge.First]: E(),
      [Ge.Second]: E()
    });
    let M;
    y(u, {
      reset: Pe,
      validate: B,
      resetValidation: g
    }), fe([() => e.modelValue, () => e.step], ([te, ue]) => {
      !I() || !F() || o.value || ve(te, V(ue));
    }), fe(n, () => ve()), rn(() => {
      !I() || !F() || (n.value = t.value[s.value ? "offsetHeight" : "offsetWidth"]);
    }), mr(() => {
      j();
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
      return Ue(() => f(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function L(te) {
      const ue = te.currentTarget;
      return ue ? s.value ? n.value - (te.clientY - _e(ue).top) : te.clientX - Am(ue) : 0;
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
    function W(te) {
      if (!fn(te))
        return 0;
      let ue = te;
      return ue < Number(e.min) && (ue = Number(e.min)), ue > Number(e.max) && (ue = Number(e.max)), parseInt(`${ue}`, 10) === ue ? ue : V(ue.toPrecision(5));
    }
    function K(te, ue) {
      i.value || ue.handleHovering(te);
    }
    function x(te, ue) {
      let we = [];
      const { step: Be, range: le, modelValue: ge, onChange: De, min: We } = e, ce = V(Be), Se = Math.round(te / a.value), ye = Se * ce + V(We), Me = k[ue].percentValue * ce + V(We);
      if (k[ue].percentValue = Se, le && Ve(ge) && (we = ue === Ge.First ? [ye, ge[1]] : [ge[0], ye]), Me !== ye) {
        const Ie = le ? we.map((Xe) => W(Xe)) : W(ye);
        y(De, Ie), y(e["onUpdate:modelValue"], Ie), R();
      }
    }
    function Y(te) {
      if (!e.range)
        return Ge.First;
      const ue = k[Ge.First].percentValue * a.value, we = k[Ge.Second].percentValue * a.value, Be = Math.abs(te - ue), le = Math.abs(te - we);
      return Be <= le ? Ge.First : Ge.Second;
    }
    function ae() {
      document.addEventListener("touchmove", J, { passive: !1 }), document.addEventListener("touchend", q), document.addEventListener("touchcancel", q);
    }
    function j() {
      document.removeEventListener("touchmove", J), document.removeEventListener("touchend", q), document.removeEventListener("touchcancel", q);
    }
    function de(te, ue) {
      if (n.value || (n.value = t.value.offsetWidth), i.value || (k[ue].active = !0), M = ue, ae(), i.value || l.value)
        return;
      y(e.onStart), o.value = !0;
      const { clientX: we, clientY: Be } = te.touches[0];
      k[ue].startPosition = s.value ? Be : we;
    }
    function J(te) {
      if (te.preventDefault(), i.value || l.value || !o.value)
        return;
      const { startPosition: ue, currentOffset: we } = k[M], { clientX: Be, clientY: le } = te.touches[0];
      let ge = (s.value ? ue - le : Be - ue) + we;
      ge <= 0 ? ge = 0 : ge >= n.value && (ge = n.value), x(ge, M);
    }
    function q() {
      j();
      const { range: te, modelValue: ue, onEnd: we, step: Be, min: le } = e;
      if (i.value || (k[M].active = !1), i.value || l.value)
        return;
      let ge = [];
      k[M].currentOffset = k[M].percentValue * a.value;
      const De = k[M].percentValue * V(Be) + V(le);
      te && Ve(ue) && (ge = M === Ge.First ? [De, ue[1]] : [ue[0], De]), y(we, te ? ge : De), o.value = !1;
    }
    function Q(te) {
      if (i.value || l.value || te.target.closest(`.${xu("thumb")}`))
        return;
      const ue = L(te), we = Y(ue);
      M = we, x(ue, we), q();
    }
    function I() {
      const te = V(e.step);
      return isNaN(te) ? (ps("Slider", 'type of prop "step" should be Number'), !1) : te < 0 ? (ps("Slider", '"step" should be > 0'), !1) : !0;
    }
    function F() {
      const { range: te, modelValue: ue } = e;
      return te && !Ve(ue) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !te && Ve(ue) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : te && Ve(ue) && ue.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function ve(te = e.modelValue, ue = V(e.step)) {
      const we = (Be) => {
        const { min: le, max: ge } = e;
        return Be < V(le) ? 0 : Be > V(ge) ? r.value / ue : (Be - V(le)) / ue;
      };
      e.range && Ve(te) ? (k[Ge.First].percentValue = we(te[0]), k[Ge.First].currentOffset = k[Ge.First].percentValue * a.value, k[Ge.Second].percentValue = we(te[1]), k[Ge.Second].currentOffset = k[Ge.Second].percentValue * a.value) : fn(te) && (k[Ge.First].currentOffset = we(te) * a.value);
    }
    function Pe() {
      const te = e.range ? [0, 0] : 0;
      y(e["onUpdate:modelValue"], te), g();
    }
    return {
      Thumbs: Ge,
      sliderEl: t,
      getFillStyle: $,
      isDisabled: i,
      isVertical: s,
      errorMessage: c,
      thumbsProps: k,
      thumbList: O,
      n: xu,
      classes: Ek,
      thumbStyle: U,
      hover: K,
      multiplySizeUnit: sn,
      toNumber: V,
      showLabel: oe,
      start: de,
      move: J,
      end: q,
      click: Q
    };
  }
});
sv.render = Mk;
var Hl = sv;
re(Hl);
const KE = Hl;
var Ja = Hl, Bk = Object.defineProperty, Dk = Object.defineProperties, Nk = Object.getOwnPropertyDescriptors, ed = Object.getOwnPropertySymbols, Vk = Object.prototype.hasOwnProperty, Ak = Object.prototype.propertyIsEnumerable, nd = (e, n, t) => n in e ? Bk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, zk = (e, n) => {
  for (var t in n || (n = {}))
    Vk.call(n, t) && nd(e, t, n[t]);
  if (ed)
    for (var t of ed(n))
      Ak.call(n, t) && nd(e, t, n[t]);
  return e;
}, Lk = (e, n) => Dk(e, Nk(n));
const uv = {
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
  loadingType: en(nt, "type"),
  loadingSize: en(nt, "size"),
  loadingRadius: en(nt, "radius"),
  loadingColor: Lk(zk({}, en(nt, "color")), {
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
}, { n: Rk, classes: Uk } = ne("snackbar"), Hk = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Fk(e, n) {
  const t = se("var-icon"), o = se("var-loading");
  return Te((p(), w(
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
              }, null, 8, ["name"])) : _("v-if", !0),
              e.type === "loading" ? (p(), ke(o, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : _("v-if", !0),
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
    [zn, e.show]
  ]);
}
const dv = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Rt,
    VarIcon: He
  },
  props: uv,
  setup(e) {
    const n = S(null), { zIndex: t } = Oo(() => e.show, 1);
    gr(
      () => e.show,
      () => e.lockScroll
    );
    const o = N(() => e.type === "loading" || e.forbidClick), r = N(() => e.type ? Hk[e.type] : ""), a = () => {
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
      SNACKBAR_TYPE: vv,
      n: Rk,
      classes: Uk,
      zIndex: t,
      iconName: r,
      isForbidClick: o
    };
  }
});
dv.render = Fk;
var cv = dv;
const { name: Yk, n: jk } = ne("snackbar");
function Wk(e, n) {
  const t = se("var-snackbar-core");
  return p(), ke(Gn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    Z(Ye, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: he(() => [
        Z(t, Ae(e.$props, {
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
const fv = ee({
  name: Yk,
  components: { VarSnackbarCore: cv },
  props: uv,
  setup() {
    const { disabled: e } = Kt();
    return {
      disabled: e,
      n: jk
    };
  }
});
fv.render = Wk;
var Ir = fv, qk = Object.defineProperty, td = Object.getOwnPropertySymbols, Gk = Object.prototype.hasOwnProperty, Xk = Object.prototype.propertyIsEnumerable, od = (e, n, t) => n in e ? qk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, bo = (e, n) => {
  for (var t in n || (n = {}))
    Gk.call(n, t) && od(e, t, n[t]);
  if (td)
    for (var t of td(n))
      Xk.call(n, t) && od(e, t, n[t]);
  return e;
};
const vv = ["loading", "success", "warning", "info", "error"];
let rd = 0, Qa = !1, mv, yo = !1;
const hv = {
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
let kn = je([]), Fl = hv;
const Kk = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Fr = (e) => () => Gt(e) ? e() : e, Zk = {
  setup() {
    return () => {
      const e = kn.map(({
        id: n,
        reactiveSnackOptions: t,
        _update: o
      }) => {
        const r = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = bo({
          position: yo ? "relative" : "absolute"
        }, nP(t.position)), {
          content: i,
          icon: l,
          action: s
        } = t, u = {
          default: Fr(i),
          icon: Fr(l),
          action: Fr(s)
        };
        return Z(cv, Ae(t, {
          key: n,
          style: a,
          "data-id": n,
          _update: o,
          show: t.show,
          "onUpdate:show": (d) => t.show = d
        }), u);
      });
      return Z(Wv, Ae(Kk, {
        style: {
          zIndex: $n.zIndex
        },
        onAfterEnter: Jk,
        onAfterLeave: Qk
      }), {
        default: () => [e]
      });
    };
  }
}, qn = function(e) {
  const n = xk(e), t = je(bo(bo({}, Fl), n));
  t.show = !0, Qa || (Qa = !0, mv = Xt(Zk).unmountInstance);
  const {
    length: o
  } = kn, r = {
    id: rd++,
    reactiveSnackOptions: t
  };
  if (o === 0 || yo)
    _k(r);
  else {
    const a = `update-${rd}`;
    eP(t, a);
  }
  return {
    clear() {
      !yo && kn.length ? kn[0].reactiveSnackOptions.show = !1 : t.show = !1;
    }
  };
};
vv.forEach((e) => {
  qn[e] = (n) => (ro(n) ? n.type = e : n = {
    content: n,
    type: e
  }, qn(n));
});
qn.allowMultiple = function(e = !1) {
  e !== yo && (kn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), yo = e);
};
qn.clear = function() {
  kn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
qn.setDefaultOptions = function(e) {
  Fl = e;
};
qn.resetDefaultOptions = function() {
  Fl = hv;
};
function Jk(e) {
  const n = e.getAttribute("data-id"), t = kn.find((o) => o.id === V(n));
  t && y(t.reactiveSnackOptions.onOpened);
}
function Qk(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), t = kn.find((r) => r.id === V(n));
  t && (t.animationEnd = !0, y(t.reactiveSnackOptions.onClosed)), kn.every((r) => r.animationEnd) && (y(mv), kn = je([]), Qa = !1);
}
function _k(e) {
  kn.push(e);
}
function xk(e = {}) {
  return Qe(e) ? {
    content: e
  } : e;
}
function eP(e, n) {
  const [t] = kn;
  t.reactiveSnackOptions = bo(bo({}, t.reactiveSnackOptions), e), t._update = n;
}
function nP(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
qn.Component = Ir;
re(Ir);
re(Ir, qn);
const ZE = Ir;
var _a = qn;
const tP = {
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
function yn(e) {
  return `calc(${e} / 2)`;
}
function oP(e, n, t) {
  const { direction: o, justify: r, index: a, lastIndex: i } = t;
  let l = "0";
  return o === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${yn(e)} ${n} ${yn(e)} 0` : l = `${yn(e)} 0` : r === "space-around" ? l = `${yn(e)} ${yn(n)}` : r === "space-between" && (a === 0 ? l = `${yn(e)} ${yn(n)} ${yn(e)} 0` : a === i ? l = `${yn(e)} 0 ${yn(e)} ${yn(n)}` : l = `${yn(e)} ${yn(n)}`)), o === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const rP = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: aP,
  n: Yr,
  classes: iP
} = ne("space");
function lP(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Ve(e) ? e.map(Ce) : [Ce(e), Ce(e)];
}
var Yl = ee({
  name: aP,
  props: tP,
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
      const [d, c] = lP(s, rP(s));
      u = $d(u);
      const f = u.length - 1, m = u.map((g, h) => {
        const b = oP(d, c, {
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
        class: iP(Yr(), Yr("$--box"), [o, Yr("--inline")]),
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
re(Yl);
const JE = Yl;
var xa = Yl;
const sP = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: String,
  inactiveIcon: String
}, pv = Symbol("STEPS_BIND_STEP_KEY");
function uP() {
  const { bindChildren: e, childProviders: n } = ln(pv);
  return {
    step: n,
    bindStep: e
  };
}
function dP() {
  const { parentProvider: e, index: n, bindParent: t } = an(pv);
  return t || On("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: t
  };
}
const { name: cP, n: fP, classes: vP } = ne("step"), mP = { key: 3 };
function hP(e, n) {
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
                name: e.activeIcon
              }, null, 8, ["class", "name"])) : e.isCurrent && e.currentIcon ? (p(), ke(t, {
                key: 1,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon
              }, null, 8, ["class", "name"])) : e.inactiveIcon ? (p(), ke(t, {
                key: 2,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon
              }, null, 8, ["class", "name"])) : (p(), w(
                "span",
                mP,
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
const gv = ee({
  name: cP,
  components: { VarIcon: He },
  props: sP,
  setup() {
    const { index: e, steps: n, bindSteps: t } = dP(), { active: o, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = N(() => o.value === e.value), u = N(() => e.value !== -1 && V(o.value) > e.value);
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
      n: fP,
      classes: vP,
      click: c
    };
  }
});
gv.render = hP;
var jl = gv;
re(jl);
const QE = jl;
var ei = jl;
const pP = {
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
}, { name: gP, n: bP } = ne("steps");
function yP(e, n) {
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
const bv = ee({
  name: gP,
  props: pP,
  setup(e) {
    const n = N(() => e.active), t = N(() => e.activeColor), o = N(() => e.inactiveColor), r = N(() => e.direction), { bindStep: a } = uP();
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
    return { n: bP };
  }
});
bv.render = yP;
var Wl = bv;
re(Wl);
const _E = Wl;
var ni = Wl;
const $P = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: wP, n: SP } = ne("style-provider"), CP = ee({
  name: wP,
  props: $P,
  setup(e, { slots: n }) {
    return () => fd(
      e.tag,
      {
        class: SP(),
        style: Ad(e.styleVars)
      },
      y(n.default)
    );
  }
});
var Mr = CP;
const jr = [];
function ql(e) {
  jr.forEach((t) => document.documentElement.style.removeProperty(t)), jr.length = 0;
  const n = Ad(e ?? {});
  Object.entries(n).forEach(([t, o]) => {
    document.documentElement.style.setProperty(t, o), jr.push(t);
  });
}
ql.Component = Mr;
re(Mr);
re(Mr, ql);
const xE = Mr;
var ti = ql;
const kP = {
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
}, { name: PP, n: OP, classes: TP } = ne("switch"), EP = (e) => (mt(""), e = e(), ht(), e), IP = /* @__PURE__ */ EP(() => /* @__PURE__ */ D(
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
)), MP = [
  IP
];
function BP(e, n) {
  const t = se("var-hover-overlay"), o = se("var-form-details"), r = Re("ripple"), a = Re("hover");
  return Te((p(), w(
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
          Te((p(), w(
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
                    MP,
                    6
                    /* CLASS, STYLE */
                  )) : _("v-if", !0)
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
const yv = ee({
  name: PP,
  components: {
    VarFormDetails: mn,
    VarHoverOverlay: An
  },
  directives: { Ripple: Ke, Hover: Tn },
  props: kP,
  setup(e) {
    const { bindForm: n, form: t } = In(), { errorMessage: o, validateWithTrigger: r, validate: a, resetValidation: i } = En(), { hovering: l, handleHovering: s } = jn(), u = N(() => {
      const { size: C, modelValue: T, color: O, closeColor: $, loadingColor: k, activeValue: M } = e;
      return {
        handle: {
          width: sn(C),
          height: sn(C),
          backgroundColor: T === M ? O : $,
          color: k
        },
        ripple: {
          left: T === M ? sn(C, 0.5) : `-${sn(C, 0.5)}`,
          color: T === M ? O : $ || "#999",
          width: sn(C, 2),
          height: sn(C, 2)
        },
        track: {
          height: sn(C, 0.72),
          width: sn(C, 1.9),
          borderRadius: sn(C, 2 / 3),
          filter: T === M || o != null && o.value ? void 0 : "brightness(.6)",
          backgroundColor: T === M ? O : $
        },
        switch: {
          height: sn(C, 1.2),
          width: sn(C, 2)
        }
      };
    }), d = N(() => sn(e.size, 0.8));
    y(n, {
      reset: b,
      validate: f,
      resetValidation: i
    });
    function f() {
      return a(e.rules, e.modelValue);
    }
    function m() {
      return Ue(() => r(["onChange"], "onChange", e.rules, e.modelValue));
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
        inactiveValue: E,
        "onUpdate:modelValue": R
      } = e;
      if (y(T, C), $ || k || M || t != null && t.disabled.value || t != null && t.readonly.value)
        return;
      const L = P === B ? E : B;
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
      n: OP,
      classes: TP,
      multiplySizeUnit: sn,
      switchActive: g,
      hover: h
    };
  }
});
yv.render = BP;
var Gl = yv;
re(Gl);
const eI = Gl;
var oi = Gl;
const DP = {
  name: [String, Number],
  disabled: Boolean,
  onClick: A()
}, $v = Symbol("TABS_BIND_TAB_KEY");
function NP() {
  const { childProviders: e, bindChildren: n, length: t } = ln($v);
  return {
    length: t,
    tabList: e,
    bindTabList: n
  };
}
function VP() {
  const { parentProvider: e, bindParent: n, index: t } = an($v);
  return n || On("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: t,
    tabs: e,
    bindTabs: n
  };
}
const { name: AP, n: jo, classes: zP } = ne("tab");
function LP(e, n) {
  const t = Re("ripple");
  return Te((p(), w(
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
const wv = ee({
  name: AP,
  directives: { Ripple: Ke },
  props: DP,
  setup(e) {
    const n = S(null), t = N(() => n.value), o = N(() => e.name), r = N(() => e.disabled), { index: a, tabs: i, bindTabs: l } = VP(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: m, resize: g } = i, h = {
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
      return e.disabled ? jo("$-tab--disabled") : b() ? jo("$-tab--active") : jo("$-tab--inactive");
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
      n: jo,
      classes: zP,
      computeColorStyle: C,
      computeColorClass: T,
      handleClick: O
    };
  }
});
wv.render = LP;
var Xl = wv;
re(Xl);
const nI = Xl;
var ri = Xl;
const RP = {
  name: [String, Number]
}, { name: UP, n: HP, classes: FP } = ne("tab-item");
function YP(e, n) {
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
const Sv = ee({
  name: UP,
  components: { VarSwipeItem: mo },
  props: RP,
  setup(e) {
    const n = S(!1), t = N(() => e.name), { index: o, bindTabsItems: r } = Fw(), { bindLists: a } = Yw(), i = {
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
      n: HP,
      classes: FP
    };
  }
});
Sv.render = YP;
var Kl = Sv;
re(Kl);
const tI = Kl;
var ai = Kl;
const jP = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, { name: WP, n: qP, classes: GP } = ne("table");
function XP(e, n) {
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
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Cv = ee({
  name: WP,
  props: jP,
  setup: () => ({
    toSizeUnit: Ce,
    n: qP,
    classes: GP,
    formatElevation: pn
  })
});
Cv.render = XP;
var Zl = Cv;
re(Zl);
const oI = Zl;
var ii = Zl;
const KP = {
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
  onClick: A(),
  onChange: A(),
  "onUpdate:active": A()
};
var ad = (e, n, t) => new Promise((o, r) => {
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
const { name: ZP, n: JP, classes: QP } = ne("tabs");
function _P(e, n) {
  return p(), ke(qt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: he(() => [
      D(
        "div",
        Ae({
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
const kv = ee({
  name: ZP,
  components: { VarSticky: po },
  inheritAttrs: !1,
  props: KP,
  setup(e) {
    const n = S("0px"), t = S("0px"), o = S("0px"), r = S("0px"), a = S(!1), i = S(null), l = N(() => e.active), s = N(() => e.activeColor), u = N(() => e.inactiveColor), d = N(() => e.disabledColor), c = N(() => e.itemDirection), f = S(null), m = N(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: h, length: b } = NP();
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
      () => ad(this, null, function* () {
        yield dn(), E();
      })
    ), fe(() => [e.active, e.scrollable], E), vt(E), ko(E);
    function T(L) {
      var U;
      const oe = (U = L.name.value) != null ? U : L.index.value, { active: G, onChange: W, onClick: K } = e;
      y(e["onUpdate:active"], oe), y(K, oe), oe !== G && y(W, oe);
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
      if (fn(L)) {
        const U = lt(L, 0, b.value - 1);
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
        lo(U, {
          left: G,
          animation: Jr
        });
      } else {
        const G = oe.offsetTop + oe.offsetHeight / 2 - U.offsetHeight / 2;
        lo(U, {
          top: G,
          animation: Jr
        });
      }
    }
    function E() {
      const L = O() || $() || k();
      !L || L.disabled.value || (M(), P(L), B(L));
    }
    function R() {
      return ad(this, null, function* () {
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
      toSizeUnit: Ce,
      n: JP,
      classes: QP,
      resize: E,
      resizeSticky: R,
      formatElevation: pn
    };
  }
});
kv.render = _P;
var Jl = kv;
re(Jl);
const rI = Jl;
var li = Jl;
const xP = {
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
var eO = (e, n, t) => new Promise((o, r) => {
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
const { name: nO, n: tO } = ne("tabs-items");
function oO(e, n) {
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
const Pv = ee({
  name: nO,
  components: { VarSwipe: vo },
  props: xP,
  setup(e) {
    const n = S(null), { tabItemList: t, bindTabItem: o, length: r } = Hw();
    o({}), fe(() => e.active, s), fe(
      () => r.value,
      () => eO(this, null, function* () {
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
      n: tO,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Pv.render = oO;
var Ql = Pv;
re(Ql);
const aI = Ql;
var si = Ql, rO = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, aO = {
  "--badge-default-color": "#555"
}, iO = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, lO = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, sO = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, uO = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, dO = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, cO = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, fO = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, vO = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, mO = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, hO = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, pO = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, gO = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, bO = {
  "--popup-content-background-color": "#1e1e1e"
}, yO = {
  "--pull-refresh-background": "#303030"
}, $O = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, wO = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, SO = {
  "--select-scroller-background": "#303030"
}, CO = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, kO = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, PO = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, OO = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, TO = {
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
}, IO = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, MO = {
  "--tabs-background": "#1e1e1e"
}, BO = {
  "--app-bar-color": "#272727"
}, DO = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, NO = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, VO = {
  "--menu-background-color": "#272727"
}, AO = {
  "--breadcrumb-inactive-color": "#aaa"
}, zO = {
  "--paper-background": "#303030"
}, LO = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, RO = {
  "--link-default-color": "#fff"
}, UO = {
  "--progress-label-color": "#fff"
}, HO = {
  "--options-text-color": "#fff"
}, FO = {
  "--countdown-text-color": "#fff"
}, YO = {
  "--watermark-content-color": "#ffffff"
}, jO = Object.defineProperty, id = Object.getOwnPropertySymbols, WO = Object.prototype.hasOwnProperty, qO = Object.prototype.propertyIsEnumerable, ld = (e, n, t) => n in e ? jO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Oe = (e, n) => {
  for (var t in n || (n = {}))
    WO.call(n, t) && ld(e, t, n[t]);
  if (id)
    for (var t of id(n))
      qO.call(n, t) && ld(e, t, n[t]);
  return e;
}, GO = Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe({
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
}, iO), sO), lO), EO), fO), CO), MO), OO), bO), vO), rO), dO), aO), IO), cO), yO), PO), kO), pO), TO), hO), SO), $O), uO), mO), gO), BO), DO), NO), VO), wO), AO), zO), LO), RO), UO), HO), FO), YO);
const XO = { dark: GO }, iI = null;
var ui = XO;
const Sn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], un = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], sd = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], KO = {
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
}, Ov = (e, n) => e === "24hr" || n === "am", _l = (e, n, t) => {
  const o = Sn.findIndex((a) => V(a) === V(t)), r = Ov(e, n) ? t : un[o];
  return {
    hourStr: r,
    hourNum: V(r)
  };
}, cn = (e) => {
  const [n, t, o] = e.split(":");
  return {
    hour: V(n),
    minute: V(t),
    second: V(o)
  };
}, Tv = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = _l(r, a, i);
  let f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    const { hour: g, minute: h } = cn(l);
    f = g === c && o > h;
  }
  if (!l && s) {
    const { hour: g, minute: h } = cn(s);
    f = g === c && o < h;
  }
  if (l && s) {
    const { hour: g, minute: h } = cn(l), { hour: b, minute: C } = cn(s);
    f = b === c && o < C || g === c && o > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (t = e.allowedTime) == null ? void 0 : t.minutes(o)), f || m;
}, Ev = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = _l(r, a, i);
  let m = !1, g = !1;
  if (d.includes(c))
    return !0;
  if (s && !u) {
    const { hour: h, minute: b, second: C } = cn(s);
    m = h === f && b < l || b === l && o > C;
  }
  if (!s && u) {
    const { hour: h, minute: b, second: C } = cn(u);
    m = h === f && b > l || b === l && o > C;
  }
  if (s && u) {
    const { hour: h, minute: b, second: C } = cn(s), { hour: T, minute: O, second: $ } = cn(u);
    m = h === f && b < l || T === f && O > l || h === f && b === l && o > C || T === f && O === l && o < $;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (t = e.allowedTime) == null ? void 0 : t.seconds(o)), m || g;
}, { n: ZO, classes: JO } = ne("time-picker");
function QO(e, n) {
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
        Ne,
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
            Ne,
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
      )) : _("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Iv = ee({
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
    }), l = N(() => e.type === "hour" ? Sn : sd), s = (h, b) => {
      h = h ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const C = e.type === "minute" ? Tv : Ev, T = {
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
      const h = e.isInner ? un[i.value] : l.value[i.value];
      return l.value === sd ? s() ? "#bdbdbd" : e.color : c(h) ? "#bdbdbd" : e.color;
    }, d = (h, b) => b ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), c = (h) => {
      if (e.type === "hour") {
        if (Ov(e.format, e.ampm))
          return o.value.includes(h);
        const b = Sn.findIndex((C) => C === h);
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
      const { width: h, height: b } = _e(t.value);
      return {
        width: h,
        height: b
      };
    }, g = () => {
      if (i.value === void 0)
        return;
      const h = e.ampm === "am" ? Sn : un;
      return wt(h[i.value], 2, "0");
    };
    return fe([i, () => e.isInner], ([h, b], [C, T]) => {
      if (h === C && b === T || e.type !== "hour" || i.value === void 0)
        return;
      const $ = b ? un[i.value] : g(), k = e.useSeconds ? `:${e.time.second}` : "", M = `${$}:${e.time.minute}${k}`;
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
        const { hourStr: $ } = _l(e.format, e.ampm, e.time.hour);
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
          const { hour: T } = cn(h), O = Sn.filter((k) => V(k) > T), $ = un.filter((k) => V(k) > T);
          o.value = [...O, ...$];
        }
        if (!h && b) {
          const { hour: T } = cn(b), O = Sn.filter((k) => V(k) < T), $ = un.filter((k) => V(k) < T);
          o.value = [...O, ...$];
        }
        if (h && b) {
          const { hour: T } = cn(h), { hour: O } = cn(b), $ = Sn.filter((M) => V(M) < O || V(M) > T), k = un.filter((M) => V(M) < O || V(M) > T);
          o.value = [...$, ...k];
        }
        if (C != null && C.hours) {
          const { hours: T } = C, O = Sn.filter((k) => !T(V(k))), $ = un.filter((k) => !T(V(k)));
          o.value = [.../* @__PURE__ */ new Set([...o.value, ...O, ...$])];
        }
        r.value = o.value.map((T) => un.findIndex((O) => T === O)).filter((T) => T >= 0);
      },
      { immediate: !0 }
    ), {
      n: ZO,
      classes: JO,
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
Iv.render = QO;
var _O = Iv;
const { name: xO, n: eT, classes: nT } = ne("time-picker"), tT = (e) => (mt(""), e = e(), ht(), e), oT = /* @__PURE__ */ tT(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), rT = { key: 0 };
function aT(e, n) {
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
              oT,
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
              e.useSeconds ? (p(), w("span", rT, ":")) : _("v-if", !0),
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
              )) : _("v-if", !0)
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
          )) : _("v-if", !0)
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
              Z(Ye, {
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
  name: xO,
  components: { Clock: _O },
  props: KO,
  setup(e) {
    const n = S(null), t = S(null), o = S(null), r = S(!1), a = S(!1), i = S(!1), l = S(!1), s = S(!1), u = S(!1), d = S(!1), c = S(0), f = S(0), m = S(), g = S("hour"), h = S("am"), b = S({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = je({
      x: 0,
      y: 0
    }), T = je({
      x: [],
      y: []
    }), O = N(() => g.value === "hour" ? m.value : g.value === "minute" ? c.value : f.value);
    fe(
      () => e.modelValue,
      (j) => {
        if (j) {
          const { hour: de, minute: J, second: q } = cn(j), Q = me().hour(de).format("hh"), I = me().hour(de).format("HH"), F = me().minute(J).format("mm"), ve = me().second(q).format("ss");
          m.value = (Q === "12" ? 0 : V(Q)) * 30, c.value = V(F) * 6, f.value = V(ve) * 6, b.value = R(j), e.format !== "24hr" && (h.value = wt(`${de}`, 2, "0") === I && un.includes(I) ? "pm" : "am"), r.value = e.format === "24hr" && un.includes(I);
        }
      },
      { immediate: !0 }
    );
    function $(j) {
      y(e["onUpdate:modelValue"], j), y(e.onChange, j);
    }
    function k(j) {
      return j * 57.29577951308232;
    }
    function M(j) {
      l.value = !1, d.value = !1, g.value = j;
    }
    function P(j) {
      const { disableHour: de } = o.value, J = Sn.findIndex((I) => V(I) === V(b.value.hour)), q = j === "am" ? Sn : un;
      return [...q.slice(J), ...q.slice(0, J)].find((I, F) => (a.value = F !== 0, !de.includes(I)));
    }
    function B(j) {
      if (e.readonly)
        return;
      h.value = j;
      const de = P(j);
      if (!de)
        return;
      const J = e.useSeconds ? `:${b.value.second}` : "", q = `${wt(de, 2, "0")}:${b.value.minute}${J}`;
      $(q);
    }
    function E(j, de) {
      const J = j >= T.x[0] && j <= T.x[1], q = de >= T.y[0] && de <= T.y[1];
      return J && q;
    }
    function R(j) {
      const de = e.format === "24hr" ? "HH" : "hh", { hour: J, minute: q, second: Q } = cn(j);
      return {
        hour: me().hour(J).format(de),
        minute: me().minute(q).format("mm"),
        second: me().second(Q).format("ss")
      };
    }
    function L(j) {
      const de = j / 30;
      return de >= 0 ? de : de + 12;
    }
    function U() {
      const { width: j, height: de } = o.value.getSize(), J = C.x - j / 2 - 8, q = C.x + j / 2 + 8, Q = C.y - de / 2 - 8, I = C.y + de / 2 + 8;
      return {
        rangeXMin: J,
        rangeXMax: q,
        rangeYMin: Q,
        rangeYMax: I
      };
    }
    function oe(j, de, J) {
      const { disableHour: q } = o.value;
      i.value = E(j, de);
      const Q = Math.round(J / 30) * 30 + 90, I = L(Q), F = r.value ? Sn[I] : un[I];
      if (q.includes(F) || (r.value = e.format === "24hr" ? E(j, de) : !1), r.value !== i.value)
        return;
      const ve = r.value || h.value === "pm" ? un[I] : Sn[I];
      u.value = q.includes(ve), !u.value && (m.value = Q, l.value = !0);
    }
    function G(j) {
      const { disableHour: de } = o.value, J = Math.round(j / 6) * 6 + 90, Q = {
        time: J / 6 >= 0 ? J / 6 : J / 6 + 60,
        format: e.format,
        ampm: h.value,
        hour: b.value.hour,
        max: e.max,
        min: e.min,
        disableHour: de,
        allowedTime: e.allowedTime
      };
      d.value = Tv(Q), !d.value && (c.value = J, s.value = !0);
    }
    function W(j) {
      const { disableHour: de } = o.value, J = Math.round(j / 6) * 6 + 90, Q = {
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
      Ev(Q) || (f.value = J);
    }
    function K() {
      const { left: j, top: de, width: J, height: q } = _e(n.value);
      if (C.x = j + J / 2, C.y = de + q / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: Q, rangeXMax: I, rangeYMin: F, rangeYMax: ve } = U();
        T.x = [Q, I], T.y = [F, ve];
      }
    }
    function x(j) {
      if (j.preventDefault(), e.readonly)
        return;
      K();
      const { clientX: de, clientY: J } = j.touches[0], q = de - C.x, Q = J - C.y, I = Math.round(k(Math.atan2(Q, q)));
      g.value === "hour" ? oe(de, J, I) : g.value === "minute" ? G(I) : W(I);
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
      n: eT,
      classes: nT,
      moveHand: x,
      checkPanel: M,
      checkAmpm: B,
      end: Y,
      update: $,
      changePreventUpdate: ae,
      formatElevation: pn
    };
  }
});
Mv.render = aT;
var xl = Mv;
re(xl);
const lI = xl;
var di = xl;
const iT = {
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
const { name: lT, n: sT, classes: uT } = ne("uploader");
let dT = 0;
const cT = ["onClick"], fT = ["onClick"], vT = ["src", "alt"], mT = ["multiple", "accept", "capture", "disabled"], hT = ["src"];
function pT(e, n) {
  const t = se("var-icon"), o = se("var-hover-overlay"), r = se("var-form-details"), a = se("var-popup"), i = Re("ripple"), l = Re("hover");
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
            Ne,
            null,
            qe(e.files, (s) => Te((p(), w("div", {
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
                onClick: Pn((u) => e.handleRemove(s), ["stop"])
              }, [
                Z(t, {
                  class: v(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, fT)) : _("v-if", !0),
              s.cover ? (p(), w("img", {
                key: 1,
                class: v(e.n("file-cover")),
                style: H({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, vT)) : _("v-if", !0),
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
            ], 10, cT)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Te((p(), w(
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
              }, null, 42, mT),
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
          ]) : _("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      Z(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, Qo({
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
            }, null, 10, hT)) : _("v-if", !0)
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
const Bv = ee({
  name: lT,
  directives: { Ripple: Ke, Hover: Tn },
  components: {
    VarIcon: He,
    VarPopup: ut,
    VarFormDetails: mn,
    VarHoverOverlay: An
  },
  props: iT,
  setup(e) {
    const n = S(null), t = S(!1), o = S(null), r = N(() => {
      const {
        maxlength: x,
        modelValue: { length: Y }
      } = e;
      return fn(x) ? `${Y} / ${x}` : "";
    }), { form: a, bindForm: i } = In(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = En(), { hovering: c, handleHovering: f } = jn(), m = N(() => {
      const { modelValue: x, hideList: Y } = e;
      return Y ? [] : x;
    });
    let g = !1;
    const h = {
      getSuccess: E,
      getError: R,
      getLoading: L
    };
    y(i, {
      validate: W,
      resetValidation: d,
      reset: K
    }), fe(
      () => e.modelValue,
      () => {
        !g && G("onChange"), g = !1;
      },
      { deep: !0 }
    );
    function C(x) {
      const { disabled: Y, previewed: ae } = e;
      if (a != null && a.disabled.value || Y || !ae)
        return;
      const { url: j } = x;
      if (Qe(j) && Os(j)) {
        ho(j);
        return;
      }
      Qe(j) && Ts(j) && (o.value = x, t.value = !0);
    }
    function T(x) {
      return {
        id: dT++,
        url: "",
        cover: "",
        name: x.name,
        file: x,
        progress: 0
      };
    }
    function O(x) {
      const Y = x.target, { files: ae } = Y;
      return Array.from(ae);
    }
    function $(x) {
      return new Promise((Y) => {
        if (!x.file.type.startsWith("image")) {
          Y(x);
          return;
        }
        const ae = new FileReader();
        ae.onload = () => {
          const j = ae.result;
          x.cover = j, x.url = j, Y(x);
        }, ae.readAsDataURL(x.file);
      });
    }
    function k(x) {
      return x.map($);
    }
    function M(x) {
      const { onBeforeRead: Y } = e;
      return x.map(
        (ae) => new Promise((j) => {
          Y || j({
            valid: !0,
            varFile: ae
          });
          const de = Wo(y(Y, je(ae)));
          Promise.all(de).then((J) => {
            j({
              valid: J.every(Boolean),
              varFile: ae
            });
          });
        })
      );
    }
    function P(x) {
      return Wr(this, null, function* () {
        const { maxsize: Y, maxlength: ae, modelValue: j, onOversize: de, onAfterRead: J, onBeforeFilter: q, readonly: Q, disabled: I } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || I || Q)
          return;
        const F = (ge) => ge.filter((De) => De.file.size > V(Y) ? (y(de, je(De)), !1) : !0), ve = (ge) => {
          const De = Math.min(ge.length, V(ae) - j.length);
          return ge.slice(0, De);
        }, Pe = (ge) => Wr(this, null, function* () {
          if (!q)
            return ge;
          const De = Wo(q);
          for (const We of De)
            ge = yield We(ge);
          return ge;
        });
        let ue = O(x).map(T);
        ue = yield Pe(ue), ue = Y != null ? F(ue) : ue, ue = ae != null ? ve(ue) : ue;
        const we = yield Promise.all(k(ue)), le = (yield Promise.all(M(we))).filter(({ valid: ge }) => ge).map(({ varFile: ge }) => ge);
        y(e["onUpdate:modelValue"], [...j, ...le]), x.target.value = "", le.forEach((ge) => y(J, je(ge)));
      });
    }
    function B(x) {
      return Wr(this, null, function* () {
        const { disabled: Y, readonly: ae, modelValue: j, onBeforeRemove: de, onRemove: J } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || Y || ae)
          return;
        if (de) {
          const Q = Wo(y(de, je(x)));
          if ((yield Promise.all(Q)).some((I) => !I))
            return;
        }
        const q = j.filter((Q) => Q !== x);
        y(J, je(x)), G("onRemove"), y(e["onUpdate:modelValue"], q);
      });
    }
    function E() {
      return e.modelValue.filter((x) => x.state === "success");
    }
    function R() {
      return e.modelValue.filter((x) => x.state === "error");
    }
    function L() {
      return e.modelValue.filter((x) => x.state === "loading");
    }
    function U() {
      n.value.click();
    }
    function oe() {
      o.value = null, t.value = !1, ho.close();
    }
    function G(x) {
      Ue(() => {
        const { validateTrigger: Y, rules: ae, modelValue: j } = e;
        s(Y, x, ae, j, h);
      });
    }
    function W() {
      return u(e.rules, e.modelValue, h);
    }
    function K() {
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
      n: sT,
      classes: uT,
      formatElevation: pn,
      toNumber: V,
      handleHovering: f,
      isHTMLSupportVideo: Ts,
      isHTMLSupportImage: Os,
      preview: C,
      handleChange: P,
      handleRemove: B,
      getSuccess: E,
      getError: R,
      getLoading: L,
      validate: W,
      resetValidation: d,
      reset: K,
      chooseFile: U,
      closePreview: oe,
      toSizeUnit: Ce
    };
  }
});
Bv.render = pT;
var es = Bv;
re(es);
const sI = es;
var ci = es;
const gT = {
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
var bT = Object.defineProperty, yT = Object.defineProperties, $T = Object.getOwnPropertyDescriptors, ud = Object.getOwnPropertySymbols, wT = Object.prototype.hasOwnProperty, ST = Object.prototype.propertyIsEnumerable, dd = (e, n, t) => n in e ? bT(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, CT = (e, n) => {
  for (var t in n || (n = {}))
    wT.call(n, t) && dd(e, t, n[t]);
  if (ud)
    for (var t of ud(n))
      ST.call(n, t) && dd(e, t, n[t]);
  return e;
}, kT = (e, n) => yT(e, $T(n)), cd = (e, n, t) => new Promise((o, r) => {
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
const { name: PT, n: OT, classes: TT } = ne("watermark"), ET = { ref: "svgRef" }, IT = ["viewBox", "width", "height"], MT = ["width", "height"], BT = ["href", "xlink:href", "x", "y", "width", "height"];
function DT(e, n) {
  return p(), w(
    "div",
    {
      class: v(e.n())
    },
    [
      z(e.$slots, "default"),
      (p(), ke(Gn, {
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
            Te(D(
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
                              style: H(kT(CT({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
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
                  ], 8, MT)) : _("v-if", !0),
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
                  }, null, 12, BT)) : _("v-if", !0)
                ], 12, IT))
              ],
              512
              /* NEED_PATCH */
            ), [
              [zn, !1]
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
const Dv = ee({
  name: PT,
  props: gT,
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
      return cd(this, null, function* () {
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
      return cd(this, null, function* () {
        r.value = kt(i.value).color, e.image && (o.value = yield s()), yield Ue(), d(), t.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: t,
      imageUrl: o,
      textColor: r,
      n: OT,
      classes: TT,
      showContent: l,
      resize: c
    };
  }
});
Dv.render = DT;
var ns = Dv;
re(ns);
const uI = ns;
var fi = ns;
const NT = "2.16.7";
function VT(e) {
  Kr.install && e.use(Kr), Zr.install && e.use(Zr), _r.install && e.use(_r), xr.install && e.use(xr), ea.install && e.use(ea), tr.install && e.use(tr), na.install && e.use(na), ta.install && e.use(ta), oa.install && e.use(oa), ra.install && e.use(ra), vn.install && e.use(vn), aa.install && e.use(aa), ia.install && e.use(ia), or.install && e.use(or), rr.install && e.use(rr), la.install && e.use(la), ar.install && e.use(ar), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), $n.install && e.use($n), ma.install && e.use(ma), $a.install && e.use($a), Sa.install && e.use(Sa), Ca.install && e.use(Ca), ka.install && e.use(ka), cr.install && e.use(cr), Ta.install && e.use(Ta), Ea.install && e.use(Ea), Ia.install && e.use(Ia), mn.install && e.use(mn), Tn.install && e.use(Tn), An.install && e.use(An), He.install && e.use(He), Ma.install && e.use(Ma), ho.install && e.use(ho), Ba.install && e.use(Ba), Da.install && e.use(Da), vr.install && e.use(vr), so.install && e.use(so), Na.install && e.use(Na), Va.install && e.use(Va), Rt.install && e.use(Rt), Aa.install && e.use(Aa), Xr.install && e.use(Xr), go.install && e.use(go), za.install && e.use(za), La.install && e.use(La), Ra.install && e.use(Ra), Ua.install && e.use(Ua), Ha.install && e.use(Ha), ut.install && e.use(ut), Fa.install && e.use(Fa), Ya.install && e.use(Ya), ja.install && e.use(ja), Wa.install && e.use(Wa), qa.install && e.use(qa), Ga.install && e.use(Ga), Ke.install && e.use(Ke), Xa.install && e.use(Xa), Ka.install && e.use(Ka), Za.install && e.use(Za), Ja.install && e.use(Ja), _a.install && e.use(_a), xa.install && e.use(xa), ei.install && e.use(ei), ni.install && e.use(ni), po.install && e.use(po), ti.install && e.use(ti), vo.install && e.use(vo), mo.install && e.use(mo), oi.install && e.use(oi), ri.install && e.use(ri), ai.install && e.use(ai), ii.install && e.use(ii), li.install && e.use(li), si.install && e.use(si), ui.install && e.use(ui), di.install && e.use(di), fr.install && e.use(fr), ci.install && e.use(ci), fi.install && e.use(fi);
}
const dI = {
  version: NT,
  install: VT,
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
  Button: vn,
  ButtonGroup: aa,
  Card: ia,
  Cell: or,
  Checkbox: rr,
  CheckboxGroup: la,
  Chip: ar,
  Col: sa,
  Collapse: ua,
  CollapseItem: da,
  Context: $n,
  Countdown: ma,
  Counter: $a,
  DatePicker: Sa,
  Dialog: Ca,
  Divider: ka,
  Drag: cr,
  Ellipsis: Ta,
  Fab: Ea,
  Form: Ia,
  FormDetails: mn,
  Hover: Tn,
  HoverOverlay: An,
  Icon: He,
  Image: Ma,
  ImagePreview: ho,
  IndexAnchor: Ba,
  IndexBar: Da,
  Input: vr,
  Lazy: so,
  Link: Na,
  List: Va,
  Loading: Rt,
  LoadingBar: Aa,
  Locale: Xr,
  Menu: go,
  Option: za,
  Overlay: La,
  Pagination: Ra,
  Paper: Ua,
  Picker: Ha,
  Popup: ut,
  Progress: Fa,
  PullRefresh: Ya,
  Radio: ja,
  RadioGroup: Wa,
  Rate: qa,
  Result: Ga,
  Ripple: Ke,
  Row: Xa,
  Select: Ka,
  Skeleton: Za,
  Slider: Ja,
  Snackbar: _a,
  Space: xa,
  Step: ei,
  Steps: ni,
  Sticky: po,
  StyleProvider: ti,
  Swipe: vo,
  SwipeItem: mo,
  Switch: oi,
  Tab: ri,
  TabItem: ai,
  Table: ii,
  Tabs: li,
  TabsItems: si,
  Themes: ui,
  TimePicker: di,
  Tooltip: fr,
  Uploader: ci,
  Watermark: fi
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
  vn as Button,
  aa as ButtonGroup,
  ia as Card,
  or as Cell,
  rr as Checkbox,
  la as CheckboxGroup,
  ar as Chip,
  sa as Col,
  ua as Collapse,
  da as CollapseItem,
  $n as Context,
  ma as Countdown,
  $a as Counter,
  Sa as DatePicker,
  Ca as Dialog,
  ka as Divider,
  cr as Drag,
  Ta as Ellipsis,
  Ea as Fab,
  Ia as Form,
  mn as FormDetails,
  Tn as Hover,
  An as HoverOverlay,
  He as Icon,
  Ma as Image,
  ho as ImagePreview,
  Ba as IndexAnchor,
  Da as IndexBar,
  vr as Input,
  so as Lazy,
  Na as Link,
  Va as List,
  Rt as Loading,
  Aa as LoadingBar,
  Xr as Locale,
  go as Menu,
  za as Option,
  La as Overlay,
  Qr as PIXEL,
  Ra as Pagination,
  Ua as Paper,
  Ha as Picker,
  ut as Popup,
  Fa as Progress,
  Ya as PullRefresh,
  ja as Radio,
  Wa as RadioGroup,
  qa as Rate,
  Ga as Result,
  Ke as Ripple,
  Xa as Row,
  vv as SNACKBAR_TYPE,
  Ka as Select,
  Za as Skeleton,
  Ja as Slider,
  _a as Snackbar,
  xa as Space,
  ei as Step,
  ni as Steps,
  po as Sticky,
  ti as StyleProvider,
  vo as Swipe,
  mo as SwipeItem,
  oi as Switch,
  ri as Tab,
  ai as TabItem,
  ii as Table,
  li as Tabs,
  si as TabsItems,
  ui as Themes,
  di as TimePicker,
  fr as Tooltip,
  ci as Uploader,
  fi as Watermark,
  FT as _ActionSheetComponent,
  YT as _AppBarComponent,
  WT as _AvatarComponent,
  qT as _AvatarGroupComponent,
  JT as _BackTopComponent,
  QT as _BadgeComponent,
  _T as _BottomNavigationComponent,
  xT as _BottomNavigationItemComponent,
  eE as _BreadcrumbComponent,
  nE as _BreadcrumbsComponent,
  ZT as _ButtonComponent,
  tE as _ButtonGroupComponent,
  oE as _CardComponent,
  rE as _CellComponent,
  iE as _CheckboxComponent,
  lE as _CheckboxGroupComponent,
  sE as _ChipComponent,
  uE as _ColComponent,
  dE as _CollapseComponent,
  cE as _CollapseItemComponent,
  zT as _ContextComponent,
  fE as _CountdownComponent,
  vE as _CounterComponent,
  mE as _DatePickerComponent,
  hE as _DialogComponent,
  pE as _DividerComponent,
  gE as _DragComponent,
  yE as _EllipsisComponent,
  $E as _FabComponent,
  wE as _FormComponent,
  aE as _FormDetailsComponent,
  KT as _HoverComponent,
  XT as _HoverOverlayComponent,
  UT as _IconComponent,
  SE as _ImageComponent,
  PE as _ImagePreviewComponent,
  TE as _IndexAnchorComponent,
  EE as _IndexBarComponent,
  IE as _InputComponent,
  jT as _LazyComponent,
  ME as _LinkComponent,
  BE as _ListComponent,
  DE as _LoadingBarComponent,
  GT as _LoadingComponent,
  HT as _LocaleComponent,
  NE as _MenuComponent,
  VE as _OptionComponent,
  AE as _OverlayComponent,
  zE as _PaginationComponent,
  LE as _PaperComponent,
  RE as _PickerComponent,
  RT as _PopupComponent,
  UE as _ProgressComponent,
  HE as _PullRefreshComponent,
  FE as _RadioComponent,
  YE as _RadioGroupComponent,
  jE as _RateComponent,
  WE as _ResultComponent,
  LT as _RippleComponent,
  qE as _RowComponent,
  GE as _SelectComponent,
  XE as _SkeletonComponent,
  KE as _SliderComponent,
  ZE as _SnackbarComponent,
  JE as _SpaceComponent,
  QE as _StepComponent,
  _E as _StepsComponent,
  OE as _StickyComponent,
  xE as _StyleProviderComponent,
  CE as _SwipeComponent,
  kE as _SwipeItemComponent,
  eI as _SwitchComponent,
  nI as _TabComponent,
  tI as _TabItemComponent,
  oI as _TableComponent,
  rI as _TabsComponent,
  aI as _TabsItemsComponent,
  iI as _ThemesComponent,
  lI as _TimePickerComponent,
  bE as _TooltipComponent,
  sI as _UploaderComponent,
  uI as _WatermarkComponent,
  _m as actionSheetProps,
  Si as add,
  ch as appBarProps,
  jh as avatarGroupProps,
  Ah as avatarProps,
  Tp as backTopProps,
  Dp as badgeProps,
  Xp as bottomNavigationItemProps,
  Lp as bottomNavigationProps,
  eg as breadcrumbProps,
  lg as breadcrumbsProps,
  yp as buttonProps,
  pg as cardProps,
  Cg as cellProps,
  Zg as checkboxGroupProps,
  Vg as checkboxProps,
  e0 as chipProps,
  r0 as colProps,
  p0 as collapseItemProps,
  c0 as collapseProps,
  w0 as countdownProps,
  bb as counterProps,
  Ub as datePickerProps,
  dI as default,
  Ze as defaultLazyOptions,
  hy as dialogProps,
  By as dividerProps,
  zy as dragProps,
  Ld as enUS,
  Eg as formDetailsProps,
  p$ as formProps,
  Ed as iconProps,
  jd as imageCache,
  F$ as imagePreviewProps,
  $$ as imageProps,
  lw as indexAnchorProps,
  fw as indexBarProps,
  Ow as inputProps,
  VT as install,
  Vw as linkProps,
  Uw as listProps,
  Zw as loadingBarProps,
  nt as loadingProps,
  aS as menuProps,
  Ud as merge,
  fS as optionProps,
  gS as overlayProps,
  xe as pack,
  Rd as packs,
  yS as paginationProps,
  PS as paperProps,
  VS as pickerProps,
  Po as popupProps,
  WS as progressProps,
  nC as pullRefreshProps,
  fC as radioGroupProps,
  aC as radioProps,
  gC as rateProps,
  nk as resultProps,
  ik as rowProps,
  hk as selectProps,
  wk as skeletonProps,
  Ok as sliderProps,
  uv as snackbarProps,
  tP as spaceProps,
  sP as stepProps,
  pP as stepsProps,
  Jo as stickyProps,
  $P as styleProviderProps,
  bf as swipeProps,
  kP as switchProps,
  RP as tabItemProps,
  DP as tabProps,
  jP as tableProps,
  xP as tabsItemsProps,
  KP as tabsProps,
  KO as timePickerProps,
  x1 as tooltipProps,
  iT as uploaderProps,
  Ci as use,
  jn as useHoverOverlay,
  wi as useLocale,
  NT as version,
  $i as zhCN
};
