import { reactive as Fe, onMounted as Tt, nextTick as Ye, onActivated as gr, isRef as Zv, watch as fe, onBeforeUnmount as co, onDeactivated as ra, unref as va, onUnmounted as Ot, inject as Jv, getCurrentInstance as aa, computed as L, provide as Qv, isVNode as Pt, ref as S, Comment as _v, Fragment as Ve, createApp as xv, h as Ns, onBeforeMount as ef, defineComponent as ne, createVNode as Q, Teleport as Qn, Transition as We, withDirectives as Me, vShow as Un, mergeProps as Re, openBlock as h, createBlock as ke, resolveDynamicComponent as ta, normalizeClass as c, normalizeStyle as W, resolveComponent as le, resolveDirective as Ue, withCtx as me, createElementVNode as D, renderSlot as Y, toDisplayString as ie, createElementBlock as k, renderList as Ge, createCommentVNode as x, onUpdated as Mt, createTextVNode as Pe, pushScopeId as br, popScopeId as yr, withModifiers as Pn, normalizeProps as It, guardReactiveProps as mo, vModelText as nf, createSlots as eo, withKeys as dl, toRaw as vl, TransitionGroup as rf } from "vue";
var Ds = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, Dk = Fe(Ds);
const Cn = Fe(Ds), Qe = (e) => typeof e == "string", Ai = (e) => typeof e == "boolean", pn = (e) => typeof e == "number", zi = (e) => Object.prototype.toString.call(e) === "[object Object]", af = (e) => typeof e == "object" && e !== null, oa = (e) => typeof e == "function", De = (e) => Array.isArray(e), tf = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, jn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Li = (e) => e === window, of = () => wr() && "ontouchstart" in window, R = (e) => e == null ? 0 : Qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Ai(e) ? Number(e) : e, no = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Ri = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, wr = () => typeof window < "u", fl = (e) => [...new Set(e)], lf = (e) => Ui(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), Ui = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), sf = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), uf = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
}, Xt = (e) => De(e) ? e : [e], vr = (e, n, r) => Math.min(r, Math.max(n, e)), df = (e, n) => vr(e, 0, n.length - 1), Vs = () => typeof globalThis < "u" ? globalThis : wr() ? window : typeof global < "u" ? global : self, ba = (e) => {
  const n = Vs();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, cl = (e) => {
  const n = Vs();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, Kt = () => new Promise((e) => {
  ba(e);
}), fn = () => new Promise((e) => {
  ba(() => {
    ba(e);
  });
}), Vr = (e) => window.getComputedStyle(e), _e = (e) => {
  if (Li(e)) {
    const n = e.innerWidth, r = e.innerHeight, a = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: n,
      bottom: r,
      width: n,
      height: r
    };
    return Object.assign(Object.assign({}, a), { toJSON: () => a });
  }
  return e.getBoundingClientRect();
}, vf = (e) => {
  const { top: n, bottom: r, left: a, right: t } = _e(e), { width: o, height: i } = _e(window), l = a <= o && t >= 0, s = n <= i && r >= 0;
  return l && s;
};
function on(e) {
  let n = !1;
  Tt(() => {
    e(), Ye(() => {
      n = !0;
    });
  }), gr(() => {
    n && e();
  });
}
function fr(e, n, r, a = {}) {
  if (!wr())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let i = !1, l = !1;
  const s = (m) => oa(m) ? m() : va(m), u = (m) => {
    if (i || l)
      return;
    const p = s(m);
    p && (p.addEventListener(n, r, {
      passive: t,
      capture: o
    }), i = !0);
  }, d = (m) => {
    if (!i || l)
      return;
    const p = s(m);
    p && (p.removeEventListener(n, r, {
      capture: o
    }), i = !1);
  };
  let v;
  Zv(e) && (v = fe(() => e.value, (m, p) => {
    d(p), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), l = !0;
  };
  return on(() => {
    u(e);
  }), co(() => {
    d(e);
  }), ra(() => {
    d(e);
  }), f;
}
function As(e, n, r) {
  if (!wr())
    return;
  fr(document, n, (t) => {
    const o = oa(e) ? e() : va(e);
    o && !o.contains(t.target) && r(t);
  });
}
function ho(e) {
  Ot(() => {
    e();
  }), ra(() => {
    e();
  });
}
var ff = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function cf(e) {
  const n = aa();
  return e in n.provides;
}
function ln(e) {
  if (!cf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = Jv(e), { childInstances: r, collect: a, clear: t } = n, o = ff(n, ["childInstances", "collect", "clear"]), i = aa();
  return {
    index: L(() => r.indexOf(i)),
    parentProvider: o,
    bindParent: (u) => {
      Tt(() => {
        Ye().then(() => {
          a(i, u);
        });
      }), co(() => {
        Ye().then(() => {
          t(i, u);
        });
      });
    }
  };
}
function mf(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Pt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function sn(e) {
  const n = aa(), r = Fe([]), a = [], t = L(() => r.length), o = () => {
    const u = mf(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, i = (u, d) => {
    r.push(u), a.push(d), o();
  }, l = (u, d) => {
    no(r, u), no(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Qv(e, Object.assign({
        childInstances: r,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function Bt(e) {
  fr(() => window, "resize", e, { passive: !0 }), fr(() => window, "orientationchange", e, { passive: !0 });
}
function hf(e, n) {
  const r = S(!1);
  return fe(e, (a) => {
    n === a && (r.value = !0);
  }, { immediate: !0 }), r;
}
function pf(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function po() {
  const e = S(0), n = S(0), r = S(0), a = S(0), t = S(0), o = S(0), i = S(0), l = S(0), s = S(0), u = S(0), d = S(), v = S(!1), f = S(!1), m = S(0), p = S(0);
  let b = null;
  const g = () => {
    e.value = 0, n.value = 0, r.value = 0, a.value = 0, t.value = 0, o.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, d.value = void 0, v.value = !1, f.value = !1, m.value = 0, p.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: r,
    deltaY: a,
    offsetX: t,
    offsetY: o,
    prevX: i,
    prevY: l,
    moveX: s,
    moveY: u,
    direction: d,
    touching: v,
    dragging: f,
    startTime: m,
    distance: p,
    resetTouch: g,
    startTouch: (C) => {
      g();
      const { clientX: O, clientY: E } = C.touches[0];
      e.value = O, n.value = E, i.value = O, l.value = E, v.value = !0, m.value = performance.now(), f.value = !1, b && window.cancelAnimationFrame(b);
    },
    moveTouch: (C) => {
      const { clientX: O, clientY: E } = C.touches[0];
      f.value = !0, r.value = O - e.value, a.value = E - n.value, t.value = Math.abs(r.value), o.value = Math.abs(a.value), p.value = Math.sqrt(t.value ** 2 + o.value ** 2), s.value = O - i.value, u.value = E - l.value, d.value || (d.value = pf(t.value, o.value)), i.value = O, l.value = E;
    },
    endTouch: () => {
      v.value = !1, b = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    }
  };
}
function ml(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function hl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ml(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ml(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
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
function en(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function oe(e, n) {
  var r = n ?? e;
  return r.install = function(a) {
    var {
      name: t
    } = e;
    t && a.component(t, e);
  }, r;
}
function gf(e) {
  var n = xv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function ia(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => Ns(e, jo({}, n, r));
    }
  }, {
    unmount: t
  } = gf(a);
  return {
    unmountInstance: t
  };
}
function zs(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== _v) {
      if (r.type === Ve && De(r.children)) {
        r.children.forEach((a) => {
          n.push(a);
        });
        return;
      }
      n.push(r);
    }
  }), n;
}
function In() {
  var e = S(""), n = /* @__PURE__ */ function() {
    var t = hl(function* (o, i, l) {
      if (!De(o) || !o.length)
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
    var t = hl(function* (o, i, l, s, u) {
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
function bf(e) {
  fr(() => window, "hashchange", e), fr(() => window, "popstate", e);
}
function la() {
  var e = S(!1);
  return gr(() => {
    e.value = !1;
  }), ra(() => {
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
      if (De(s)) {
        var [u, d, v = null] = s;
        return u ? d : v;
      }
      return s;
    });
  };
  return {
    name: lf(r),
    n: a,
    classes: t
  };
}
function y(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (De(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function U(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function bn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), "var-elevation--" + e);
}
function ya(e, n, r) {
  r === void 0 && (r = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: i
  } = r, l = t ?? "onUpdate:" + n.toString(), s = () => e[n] != null ? e[n] : o;
  if (!a)
    return L({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : y(e[l], d);
      }
    });
  var u = S(s());
  return fe(() => e[n], () => {
    u.value = s();
  }), fe(() => u.value, (d) => {
    i ? i(l, d) : y(e[l], d);
  }), u;
}
function ro() {
  return ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ro.apply(this, arguments);
}
var {
  n: Ls
} = re("ripple"), pl = 250;
function yf(e) {
  var {
    zIndex: n,
    position: r
  } = Vr(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function wf(e, n) {
  var {
    top: r,
    left: a
  } = _e(e), {
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
function Rs(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker || !Cn.enableRipple)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: i,
        size: l
      } = wf(this, e), s = document.createElement("div");
      s.classList.add(Ls()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), yf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Wo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Ls());
    if (r.length) {
      var a = r[r.length - 1], t = pl - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, pl);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Us() {
  if (!(!of() || !Cn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function Cf(e, n) {
  var r;
  e._ripple = ro({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    removeRipple: Wo.bind(e)
  }), e.addEventListener("touchstart", Rs, {
    passive: !0
  }), e.addEventListener("touchmove", Us, {
    passive: !0
  }), e.addEventListener("dragstart", Wo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Sf(e) {
  e.removeEventListener("touchstart", Rs), e.removeEventListener("touchmove", Us), e.removeEventListener("dragstart", Wo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function kf(e, n) {
  var r, a, t, o, i = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (a = n.value) == null ? void 0 : a.disabled
  }, l = i.color !== ((t = e._ripple) == null ? void 0 : t.color) || i.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (l) {
    var s, u;
    e._ripple = ro({
      tasker: i.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, i);
  }
}
var Hs = {
  mounted: Cf,
  unmounted: Sf,
  updated: kf,
  install(e) {
    e.directive("ripple", this);
  }
}, Vk = Hs;
const Xe = Hs;
var Et = {
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOverlay: U(),
  "onUpdate:show": U(),
  // internal for Dialog
  onRouteChange: U()
};
function Ys() {
  var e = Object.keys(Cn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Rt(e) {
  Cn.locks[e] = 1, Ys();
}
function Ut(e) {
  delete Cn.locks[e], Ys();
}
function go(e, n) {
  var {
    uid: r
  } = aa();
  n && fe(n, (a) => {
    a === !1 ? Ut(r) : a === !0 && e() === !0 && Rt(r);
  }), fe(e, (a) => {
    n && n() === !1 || (a === !0 ? Rt(r) : Ut(r));
  }), ef(() => {
    n && n() === !1 || e() === !0 && Rt(r);
  }), Ot(() => {
    n && n() === !1 || e() === !0 && Ut(r);
  }), gr(() => {
    n && n() === !1 || e() === !0 && Rt(r);
  }), ra(() => {
    n && n() === !1 || e() === !0 && Ut(r);
  });
}
function Nt(e, n) {
  var r = S(Cn.zIndex);
  return fe(e, (a) => {
    a && (Cn.zIndex += n, r.value = Cn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
var Fs = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function $f() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = ln(Fs);
  return {
    index: r,
    popup: n,
    bindPopup: e
  };
}
function Tf() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = sn(Fs);
  return {
    length: r,
    popupItems: n,
    bindPopupItems: e
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
function gl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Pt(e);
}
var {
  name: Of,
  n: Nn,
  classes: Do
} = re("popup");
const Hn = ne({
  name: Of,
  inheritAttrs: !1,
  props: Et,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = hf(() => e.show, !0), {
      zIndex: o
    } = Nt(() => e.show, 3), {
      disabled: i
    } = la(), {
      bindPopupItems: l
    } = Tf();
    go(() => e.show, () => e.lockScroll), fe(() => e.show, (f) => {
      y(f ? e.onOpen : e.onClose);
    }), l({
      show: L(() => e.show)
    }), bf(() => y(e.onRouteChange));
    function s() {
      var {
        closeOnClickOverlay: f,
        onClickOverlay: m
      } = e;
      y(m), f && y(e["onUpdate:show"], !1);
    }
    function u() {
      var {
        overlayClass: f = "",
        overlayStyle: m
      } = e;
      return Q("div", {
        class: Do(Nn("overlay"), f),
        style: Go({
          zIndex: o.value - 1
        }, m),
        onClick: s
      }, null);
    }
    function d() {
      return Me(Q("div", Re({
        class: Do(Nn("content"), Nn("--" + e.position), [e.defaultStyle, Nn("--content-background-color")], [e.defaultStyle, Nn("$-elevation--3")], [e.safeArea, Nn("--safe-area")], [e.safeAreaTop, Nn("--safe-area-top")]),
        style: {
          zIndex: o.value
        }
      }, a), [t.value && y(r.default)]), [[Un, e.show]]);
    }
    function v() {
      var f;
      return Q(We, {
        name: Nn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Me(Q("div", {
          class: Do(Nn("$--box"), Nn()),
          style: {
            zIndex: o.value - 2
          }
        }, [e.overlay && u(), Q(We, {
          name: e.transition || Nn("$-pop-" + e.position)
        }, gl(f = d()) ? f : {
          default: () => [f]
        })]), [[Un, e.show]])]
      });
    }
    return () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Q(Qn, {
          to: f,
          disabled: i.value
        }, gl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
oe(Hn);
var Ak = Hn, js = {
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
  onClick: U()
};
function Mn(e, n) {
  throw Error("Varlet [" + e + "]: " + n);
}
function bl(e, n) {
  console.warn("Varlet [" + e + "]: " + n);
}
function Pf(e) {
  var {
    left: n
  } = _e(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function yl(e) {
  var {
    top: n
  } = _e(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function wa(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Hi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Vo(e) {
  var {
    transform: n
  } = Vr(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function cr(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = Vr(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function Mf(e) {
  for (var n = [], r = e; !Li(r); )
    r = cr(r), n.push(r);
  return n;
}
function Ws(e, n) {
  if (Qe(e)) {
    var r = document.querySelector(e);
    return r || Mn(n, "target element cannot found"), r;
  }
  if (af(e))
    return e;
  Mn(n, 'type of prop "target" should be a selector or an element object');
}
function If() {
  var {
    width: e,
    height: n
  } = _e(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
var Gs = (e) => Qe(e) && e.endsWith("rem"), Bf = (e) => Qe(e) && e.endsWith("em") && !e.endsWith("rem"), Ef = (e) => Qe(e) && e.endsWith("px") || pn(e), Nf = (e) => Qe(e) && e.endsWith("%"), qs = (e) => Qe(e) && e.endsWith("vw"), Xs = (e) => Qe(e) && e.endsWith("vh"), Ks = (e) => Qe(e) && e.endsWith("vmin"), Zs = (e) => Qe(e) && e.endsWith("vmax"), Df = (e) => Qe(e) && e.startsWith("calc("), Vf = (e) => Qe(e) && e.startsWith("var("), He = (e) => {
  if (pn(e))
    return e;
  if (Ef(e))
    return +e.replace("px", "");
  if (!wr())
    return 0;
  var {
    vw: n,
    vh: r,
    vMin: a,
    vMax: t
  } = If();
  if (qs(e))
    return +e.replace("vw", "") * n / 100;
  if (Xs(e))
    return +e.replace("vh", "") * r / 100;
  if (Ks(e))
    return +e.replace("vmin", "") * a / 100;
  if (Zs(e))
    return +e.replace("vmax", "") * t / 100;
  if (Gs(e)) {
    var o = +e.replace("rem", ""), i = Vr(document.documentElement).fontSize;
    return o * parseFloat(i);
  }
  return Qe(e) ? R(e) : 0;
}, Se = (e) => {
  if (e != null)
    return Nf(e) || qs(e) || Xs(e) || Bf(e) || Gs(e) || Df(e) || Vf(e) || Ks(e) || Zs(e) ? e : He(e) + "px";
}, dn = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = Se(e), a = r.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Ca(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, i = Date.now(), l = wa(e), s = Hi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - i) / t;
      if (v < 1) {
        var f = l + (r - l) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), requestAnimationFrame(d);
      } else
        e.scrollTo(a, r), u();
    };
    requestAnimationFrame(d);
  });
}
function Js(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + sf(a);
    return n[o] = t, n;
  }, {});
}
function ao(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function wl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Af(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        wl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        wl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  name: zf,
  n: Lf,
  classes: Rf
} = re("icon");
function Uf(e, n) {
  return h(), ke(ta(e.isURL(e.name) ? "img" : "i"), {
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
var Qs = ne({
  name: zf,
  props: js,
  setup(e) {
    var n = S(""), r = S(!1);
    fe(() => e.name, a, {
      immediate: !0
    });
    function a(o, i) {
      return t.apply(this, arguments);
    }
    function t() {
      return t = Af(function* (o, i) {
        var {
          transition: l
        } = e;
        if (i == null || R(l) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Ye(), setTimeout(() => {
          i != null && (n.value = o), r.value = !1;
        }, R(l));
      }), t.apply(this, arguments);
    }
    return {
      nextName: n,
      animateInProgress: r,
      n: Lf,
      classes: Rf,
      isURL: tf,
      toNumber: R,
      toSizeUnit: Se
    };
  }
});
Qs.render = Uf;
const Le = Qs;
oe(Le);
var zk = Le;
function qo() {
  return qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, qo.apply(this, arguments);
}
var Hf = qo({
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
  onSelect: U(),
  "onUpdate:show": U()
}, en(Et, [
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
const Yi = {
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
}, _s = {
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
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Xo.apply(this, arguments);
}
function Fi() {
  var e = {}, n = S({}), r = (o, i) => {
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
    e[o] = Xo({}, e[o], i), a(o);
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
  packs: xs,
  pack: xe,
  add: ji,
  use: Wi,
  merge: eu
} = Fi();
ji("zh-CN", Yi);
Wi("zh-CN");
var Lk = {
  zhCN: Yi,
  enUS: _s,
  packs: xs,
  pack: xe,
  add: ji,
  use: Wi,
  merge: eu,
  useLocale: Fi
};
const Ko = {
  zhCN: Yi,
  enUS: _s,
  packs: xs,
  pack: xe,
  add: ji,
  use: Wi,
  merge: eu,
  useLocale: Fi
};
var {
  name: Yf,
  n: Ff,
  classes: jf
} = re("action-sheet"), Wf = ["onClick"];
function Gf(e, n) {
  var r = le("var-icon"), a = le("var-popup"), t = Ue("ripple");
  return h(), ke(a, Re({
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
    default: me(() => [D(
      "div",
      Re({
        class: e.classes(e.n(), e.n("$--box"))
      }, e.$attrs),
      [Y(e.$slots, "title", {}, () => {
        var o;
        return [D(
          "div",
          {
            class: c(e.n("title"))
          },
          ie((o = e.title) != null ? o : e.pack.actionSheetTitle),
          3
          /* TEXT, CLASS */
        )];
      }), Y(e.$slots, "actions", {}, () => [(h(!0), k(
        Ve,
        null,
        Ge(e.actions, (o) => Me((h(), k("div", {
          class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
          key: o.name,
          style: W({
            color: o.color
          }),
          onClick: (i) => e.handleSelect(o)
        }, [o.icon ? (h(), ke(r, {
          key: 0,
          class: c(e.n("action-icon")),
          "var-action-sheet-cover": "",
          name: o.icon,
          size: o.iconSize
        }, null, 8, ["class", "name", "size"])) : x("v-if", !0), D(
          "div",
          {
            class: c(e.n("action-name"))
          },
          ie(o.name),
          3
          /* TEXT, CLASS */
        )], 14, Wf)), [[t, {
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
var nu = ne({
  name: Yf,
  directives: {
    Ripple: Xe
  },
  components: {
    VarPopup: Hn,
    VarIcon: Le
  },
  inheritAttrs: !1,
  props: Hf,
  setup(e) {
    var n = S(!1);
    fe(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    });
    function r(t) {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: i
        } = e;
        y(i, t), o && y(e["onUpdate:show"], !1);
      }
    }
    function a(t) {
      y(e["onUpdate:show"], t);
    }
    return {
      popupShow: n,
      pack: xe,
      n: Ff,
      classes: jf,
      handlePopupUpdateShow: a,
      handleSelect: r
    };
  }
});
nu.render = Gf;
const Dt = nu;
function Zo() {
  return Zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Zo.apply(this, arguments);
}
var tr, Gi = {};
function qf(e) {
  return e === void 0 && (e = {}), Zo({}, Gi, e);
}
function Xn(e) {
  return wr() ? new Promise((n) => {
    Xn.close();
    var r = Fe(qf(e));
    r.teleport = "body", tr = r;
    var {
      unmountInstance: a
    } = ia(Dt, r, {
      onSelect: (t) => {
        y(r.onSelect, t), n(t);
      },
      onClose: () => {
        y(r.onClose), n("close");
      },
      onClosed: () => {
        y(r.onClosed), a(), tr === r && (tr = null);
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
Xn.setDefaultOptions = function(e) {
  Gi = e;
};
Xn.resetDefaultOptions = function() {
  Gi = {};
};
Xn.close = function() {
  if (tr != null) {
    var e = tr;
    tr = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
Xn.Component = Dt;
oe(Dt);
oe(Dt, Xn);
var Rk = Dt, Xf = {
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
  name: Kf,
  n: Zf,
  classes: Jf
} = re("app-bar");
function Qf(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: W(e.rootStyles)
    },
    [D(
      "div",
      {
        class: c(e.n("toolbar"))
      },
      [D(
        "div",
        {
          class: c(e.n("left"))
        },
        [Y(e.$slots, "left"), e.titlePosition === "left" ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: W({
              paddingLeft: e.paddingLeft
            })
          },
          [Y(e.$slots, "default", {}, () => [Pe(
            ie(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [Y(e.$slots, "default", {}, () => [Pe(
          ie(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0), D(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: W({
              paddingRight: e.paddingRight
            })
          },
          [Y(e.$slots, "default", {}, () => [Pe(
            ie(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0), Y(e.$slots, "right")],
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
var ru = ne({
  name: Kf,
  props: Xf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = S(), t = S(), o = L(() => {
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
    on(i), Mt(i);
    function i() {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }
    return {
      rootStyles: o,
      paddingLeft: a,
      paddingRight: t,
      n: Zf,
      classes: Jf,
      formatElevation: bn
    };
  }
});
ru.render = Qf;
const Sa = ru;
oe(Sa);
var Uk = Sa, Cl = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Sl = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), _f = (e) => {
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
      this.has(r) && no(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Jo = (e) => e, kl = (e) => Math.pow(e, 3), au = (e) => e < 0.5 ? kl(e * 2) / 2 : 1 - kl((1 - e) * 2) / 2, Tr = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function $l(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function bo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        $l(o, a, t, i, l, "next", s);
      }
      function l(s) {
        $l(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
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
var xf = "background-image", ec = "lazy-loading", nc = "lazy-error", Tl = "lazy-attempt", rc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], _o = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", jr = [], to = [], tu = _f(100), Ze = {
  loading: _o,
  error: _o,
  attempt: 3,
  throttleWait: 300,
  events: rc
}, qi = Ri(Vt, Ze.throttleWait);
function yo(e, n) {
  e._lazy.arg === xf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function ac(e) {
  e._lazy.loading && yo(e, e._lazy.loading), Vt();
}
function tc(e) {
  e._lazy.error && yo(e, e._lazy.error), e._lazy.state = "error", Ki(e), Vt();
}
function ou(e, n) {
  yo(e, n), e._lazy.state = "success", Ki(e), Vt();
}
function oc(e) {
  var n;
  to.includes(e) || (to.push(e), (n = Ze.events) == null || n.forEach((r) => {
    e.addEventListener(r, qi, {
      passive: !0
    });
  }));
}
function ic() {
  to.forEach((e) => {
    var n;
    (n = Ze.events) == null || n.forEach((r) => {
      e.removeEventListener(r, qi);
    });
  }), to.length = 0;
}
function lc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(ec)) != null ? r : Ze.loading,
    error: (a = e.getAttribute(nc)) != null ? a : Ze.error,
    attempt: e.getAttribute(Tl) ? Number(e.getAttribute(Tl)) : Ze.attempt
  };
  e._lazy = Qo({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), yo(e, _o), y(Ze.filter, e._lazy);
}
function sc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, tu.add(n), ou(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? tc(e) : iu(e);
  });
}
function iu(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (tu.has(n)) {
      ou(e, n), e._lazy.attemptLock = !1;
      return;
    }
    ac(e), sc(e, n);
  }
}
function Xi(e) {
  return xo.apply(this, arguments);
}
function xo() {
  return xo = bo(function* (e) {
    yield fn(), vf(e) && iu(e);
  }), xo.apply(this, arguments);
}
function Vt() {
  jr.forEach((e) => Xi(e));
}
function uc(e) {
  return ei.apply(this, arguments);
}
function ei() {
  return ei = bo(function* (e) {
    !jr.includes(e) && jr.push(e), Mf(e).forEach(oc), yield Xi(e);
  }), ei.apply(this, arguments);
}
function Ki(e) {
  no(jr, e), jr.length === 0 && ic();
}
function dc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function lu(e, n) {
  return ni.apply(this, arguments);
}
function ni() {
  return ni = bo(function* (e, n) {
    lc(e, n), yield uc(e);
  }), ni.apply(this, arguments);
}
function vc(e, n) {
  return ri.apply(this, arguments);
}
function ri() {
  return ri = bo(function* (e, n) {
    if (!dc(e, n)) {
      jr.includes(e) && (yield Xi(e));
      return;
    }
    yield lu(e, n);
  }), ri.apply(this, arguments);
}
function fc(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: i
  } = e;
  Ze.events = n ?? Ze.events, Ze.loading = r ?? Ze.loading, Ze.error = a ?? Ze.error, Ze.attempt = t ?? Ze.attempt, Ze.throttleWait = o ?? Ze.throttleWait, Ze.filter = i;
}
var su = {
  mounted: lu,
  unmounted: Ki,
  updated: vc,
  install(e, n) {
    fc(n), qi = Ri(Vt, Ze.throttleWait), e.directive("lazy", this);
  }
}, Hk = su;
const ka = su;
var cc = {
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
  onClick: U(),
  onLoad: U(),
  onError: U()
}, mc = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: hc,
  n: pc,
  classes: gc
} = re("avatar"), bc = ["src", "alt", "lazy-loading", "lazy-error"], yc = ["src", "alt"];
function wc(e, n) {
  var r = Ue("lazy");
  return h(), k(
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
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (h(), k(
      Ve,
      {
        key: 0
      },
      [e.lazy ? Me((h(), k("img", {
        key: 0,
        class: c(e.n("image")),
        src: e.src,
        alt: e.alt,
        style: W({
          objectFit: e.fit
        }),
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        onLoad: n[0] || (n[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        })
      }, null, 46, bc)), [[r, e.src]]) : (h(), k("img", {
        key: 1,
        class: c(e.n("image")),
        src: e.src,
        alt: e.alt,
        style: W({
          objectFit: e.fit
        }),
        onLoad: n[1] || (n[1] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[2] || (n[2] = function() {
          return e.handleError && e.handleError(...arguments);
        })
      }, null, 46, yc))],
      64
      /* STABLE_FRAGMENT */
    )) : (h(), k(
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
var uu = ne({
  name: hc,
  directives: {
    Lazy: ka
  },
  props: cc,
  setup(e) {
    var n = S(null), r = S(null), a = S(1);
    on(t), Mt(t);
    function t() {
      if (!n.value || !r.value) {
        a.value = 1;
        return;
      }
      var s = n.value.offsetWidth, u = r.value.offsetWidth;
      s > u ? a.value = 1 : a.value = s / u;
    }
    function o(s) {
      var u = s.currentTarget, {
        lazy: d,
        onLoad: v,
        onError: f
      } = e;
      d ? (u._lazy.state === "success" && y(v, s), u._lazy.state === "error" && y(f, s)) : y(v, s);
    }
    function i(s) {
      y(e.onError, s);
    }
    function l(s) {
      y(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: r,
      scale: a,
      n: pc,
      classes: gc,
      isInternalSize: mc,
      toSizeUnit: Se,
      handleLoad: o,
      handleError: i,
      handleClick: l
    };
  }
});
uu.render = wc;
const $a = uu;
oe($a);
var Yk = $a, Cc = {
  offset: [Number, String],
  vertical: Boolean
}, {
  name: Sc,
  n: kc,
  classes: $c
} = re("avatar-group");
function Tc(e, n) {
  return h(), k(
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
var du = ne({
  name: Sc,
  props: Cc,
  setup(e) {
    var n = L(() => e.offset == null ? {} : {
      "--avatar-group-offset": Se(e.offset)
    });
    return {
      rootStyles: n,
      n: kc,
      classes: $c,
      toSizeUnit: Se
    };
  }
});
du.render = Tc;
const Ta = du;
oe(Ta);
var Fk = Ta, lr = {
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
  name: Oc,
  n: Pc,
  classes: Mc
} = re("loading"), Ic = (e) => (br(""), e = e(), yr(), e), Bc = /* @__PURE__ */ Ic(() => /* @__PURE__ */ D(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ D("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), Ec = [Bc];
function Nc(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [Y(e.$slots, "default"), e.loading ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.isShow ? (h(), k(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [D(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: W({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Ec,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (h(!0), k(
        Ve,
        null,
        Ge(e.loadingTypeDict, (r, a) => (h(), k(
          Ve,
          {
            key: a
          },
          [e.type === a ? (h(), k(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), k(
              Ve,
              null,
              Ge(r, (t) => (h(), k(
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
          )) : x("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (h(), k(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: W({
            color: e.color
          })
        },
        [Y(e.$slots, "description", {}, () => [Pe(
          ie(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var vu = ne({
  name: Oc,
  props: lr,
  setup(e, n) {
    var {
      slots: r
    } = n, a = L(() => y(r.default) ? e.loading : !0), t = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    };
    return {
      loadingTypeDict: t,
      isShow: a,
      n: Pc,
      classes: Mc,
      multiplySizeUnit: dn
    };
  }
});
vu.render = Nc;
const mr = vu;
oe(mr);
var jk = mr, Dc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  name: Vc,
  n: Ac,
  classes: zc
} = re("hover-overlay");
function Lc(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var fu = ne({
  name: Vc,
  props: Dc,
  setup: () => ({
    n: Ac,
    classes: zc
  })
});
fu.render = Lc;
const Sn = fu;
oe(Sn);
function Kn() {
  var e = S(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var Wk = Sn;
function cu(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function Rc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((i) => i.trim());
    return r[Ui(t)] = o, r;
  }, {}) : {};
}
function Uc(e) {
  var {
    value: n
  } = e._hover, r = Rc(e);
  Object.keys(n).forEach((a) => {
    var t = Ui(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Zi(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function Hc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function mu(e) {
  Hc(e), Zi(e, e._hover.rawStyle);
}
function hu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, oa(e)) {
    e(this._hover.hovering);
    return;
  }
  Zi(this, e);
}
function pu() {
  if (this._hover.hovering = !1, oa(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  mu(this);
}
function gu(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  cu(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, Uc(e), e.addEventListener("mouseenter", hu), e.addEventListener("mouseleave", pu));
}
function bu(e, n) {
  cu(n.arg) || (mu(e), e.removeEventListener("mouseenter", hu), e.removeEventListener("mouseleave", pu));
}
function Yc(e, n) {
  e._hover && bu(e, n);
}
function Fc(e, n) {
  return !oa(n.value) && e._hover.hovering;
}
function jc(e, n) {
  gu(e, n), Fc(e, n) && Zi(e, n.value);
}
var yu = {
  mounted: gu,
  unmounted: bu,
  beforeUpdate: Yc,
  updated: jc,
  install(e) {
    e.directive("hover", this);
  }
}, Gk = yu;
const zn = yu;
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
var Wc = {
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
  loadingType: en(lr, "type"),
  loadingSize: en(lr, "size"),
  loadingColor: ai({}, en(lr, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, wu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Gc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = sn(wu);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function qc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = ln(wu);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  name: Xc,
  n: Kc,
  classes: Zc
} = re("button"), Jc = ["type", "disabled"];
function Qc(e, n) {
  var r = le("var-loading"), a = le("var-hover-overlay"), t = Ue("ripple"), o = Ue("hover");
  return Me((h(), k("button", {
    class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.states.elevation], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
    style: W({
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
  }, [e.loading || e.pending ? (h(), ke(r, {
    key: 0,
    class: c(e.n("loading")),
    "var-button-cover": "",
    color: e.loadingColor,
    type: e.loadingType,
    size: e.loadingSize,
    radius: e.loadingRadius
  }, null, 8, ["class", "color", "type", "size", "radius"])) : x("v-if", !0), D(
    "div",
    {
      class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  ), Q(a, {
    hovering: e.disabled ? !1 : e.hovering
  }, null, 8, ["hovering"])], 46, Jc)), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var Cu = ne({
  name: Xc,
  components: {
    VarLoading: mr,
    VarHoverOverlay: Sn
  },
  directives: {
    Ripple: Xe,
    Hover: zn
  },
  props: Wc,
  setup(e) {
    var n = S(!1), {
      buttonGroup: r
    } = qc(), {
      hovering: a,
      handleHovering: t
    } = Kn(), o = L(() => {
      if (!r)
        return {
          elevation: bn(e.elevation, 2),
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
    });
    function i(u) {
      e.autoLoading && (n.value = !0, u = De(u) ? u : [u], Promise.all(u).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }
    function l(u) {
      var {
        loading: d,
        disabled: v,
        onClick: f
      } = e;
      !f || d || v || n.value || i(y(f, u));
    }
    function s(u) {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || i(y(f, u));
    }
    return {
      pending: n,
      states: o,
      hovering: a,
      n: Kc,
      classes: Zc,
      handleHovering: t,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
Cu.render = Qc;
const cn = Cu;
oe(cn);
var qk = cn, _c = {
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
  onClick: U()
}, {
  name: xc,
  n: em,
  classes: nm
} = re("back-top");
function rm(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return h(), ke(Qn, {
    to: "body",
    disabled: e.disabled
  }, [D(
    "div",
    Re({
      class: e.classes(e.n(), [e.show, e.n("--active")]),
      ref: "backTopEl",
      style: {
        right: e.toSizeUnit(e.right),
        bottom: e.toSizeUnit(e.bottom)
      }
    }, e.$attrs, {
      onClick: n[0] || (n[0] = Pn(function() {
        return e.handleClick && e.handleClick(...arguments);
      }, ["stop"]))
    }),
    [Y(e.$slots, "default", {}, () => [Q(a, {
      elevation: e.elevation,
      type: "primary",
      round: "",
      "var-back-top-cover": ""
    }, {
      default: me(() => [Q(r, {
        name: "chevron-up"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["elevation"])])],
    16
    /* FULL_PROPS */
  )], 8, ["disabled"]);
}
var Su = ne({
  name: xc,
  components: {
    VarButton: cn,
    VarIcon: Le
  },
  inheritAttrs: !1,
  props: _c,
  setup(e) {
    var n = S(!1), r = S(null), a = S(!0), t, o = Ri(() => {
      n.value = wa(t) >= He(e.visibilityHeight);
    }, 200);
    Tt(() => {
      l(), s(), a.value = !1;
    }), gr(s), ho(u);
    function i(d) {
      y(e.onClick, d);
      var v = Hi(t);
      Ca(t, {
        left: v,
        duration: e.duration,
        animation: au
      });
    }
    function l() {
      t = e.target ? Ws(e.target, "BackTop") : cr(r.value);
    }
    function s() {
      t.addEventListener("scroll", o);
    }
    function u() {
      t.removeEventListener("scroll", o);
    }
    return {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: Se,
      n: em,
      classes: nm,
      handleClick: i
    };
  }
});
Su.render = rm;
const Oa = Su;
oe(Oa);
var Xk = Oa, am = {
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
  name: tm,
  n: om,
  classes: im
} = re("badge");
function lm(e, n) {
  var r = le("var-icon");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "default"), Q(We, {
      name: e.n("$-badge-fade"),
      persisted: ""
    }, {
      default: me(() => [Me(D(
        "span",
        Re({
          class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [e.icon ? (h(), ke(r, {
          key: 0,
          class: c(e.n("icon")),
          "var-badge-cover": "",
          name: e.icon
        }, null, 8, ["class", "name"])) : x("v-if", !0), Y(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (h(), k(
          "span",
          {
            key: 0,
            class: c(e.n("value"))
          },
          ie(e.value),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)])],
        16
        /* FULL_PROPS */
      ), [[Un, !e.hidden]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name"])],
    2
    /* CLASS */
  );
}
var ku = ne({
  name: tm,
  components: {
    VarIcon: Le
  },
  inheritAttrs: !1,
  props: am,
  setup(e) {
    var n = L(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && R(r) > R(a) ? a + "+" : r;
    });
    return {
      value: n,
      n: om,
      classes: im
    };
  }
});
ku.render = lm;
const Wr = ku;
oe(Wr);
var Kk = Wr, sm = {
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
  onChange: U(),
  onBeforeChange: U(),
  onFabClick: U(),
  "onUpdate:active": U()
}, $u = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function um() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = sn($u);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
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
  name: dm,
  n: vm,
  classes: fm
} = re("bottom-navigation"), {
  n: wo
} = re("bottom-navigation-item"), Ol = wo("--right-half-space"), Pl = wo("--left-half-space"), Ml = wo("--right-space"), cm = {
  type: "primary"
};
function mm(e, n) {
  var r = le("var-button");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: W("z-index:" + e.zIndex)
    },
    [Y(e.$slots, "default"), e.$slots.fab ? (h(), ke(r, Re({
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
    }, 16, ["class", "onClick"])) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var Tu = ne({
  name: dm,
  components: {
    VarButton: cn
  },
  props: sm,
  setup(e, n) {
    var {
      slots: r
    } = n, a = S(null), t = L(() => e.active), o = L(() => e.activeColor), i = L(() => e.inactiveColor), l = S({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = um(), v = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: g
    };
    d(v), fe(() => s.value, f), fe(() => e.fabProps, (P) => {
      l.value = ti({}, cm, P);
    }, {
      immediate: !0,
      deep: !0
    }), on(() => {
      r.fab && C(s.value);
    }), Mt(() => {
      T(), r.fab && C(s.value);
    });
    function f() {
      s.value === 0 || m() || p() || b();
    }
    function m() {
      return u.find((P) => {
        var {
          name: I
        } = P;
        return t.value === I.value;
      });
    }
    function p() {
      return u.find((P) => {
        var {
          index: I
        } = P;
        return t.value === I.value;
      });
    }
    function b() {
      pn(t.value) && (t.value < 0 ? y(e["onUpdate:active"], 0) : t.value > s.value - 1 && y(e["onUpdate:active"], s.value - 1));
    }
    function g(P) {
      t.value !== P && (e.onBeforeChange ? w(P) : M(P));
    }
    function w(P) {
      var I = Xt(y(e.onBeforeChange, P));
      Promise.all(I).then((N) => {
        N.every(Boolean) && M(P);
      });
    }
    function M(P) {
      y(e["onUpdate:active"], P), y(e.onChange, P);
    }
    function T() {
      var P = E();
      P.forEach((I) => {
        I.classList.remove(Ol, Pl, Ml);
      });
    }
    function C(P) {
      var I = E(), N = I.length, V = P % 2 === 0;
      I.forEach((z, K) => {
        O(V, z, K, N);
      });
    }
    function O(P, I, N, V) {
      var z = N === V - 1;
      if (!P && z) {
        I.classList.add(Ml);
        return;
      }
      var K = N === V / 2 - 1, _ = N === V / 2;
      K ? I.classList.add(Ol) : _ && I.classList.add(Pl);
    }
    function E() {
      return Array.from(a.value.querySelectorAll("." + wo()));
    }
    function A() {
      y(e.onFabClick);
    }
    return {
      length: s,
      bottomNavigationDom: a,
      fabProps: l,
      n: vm,
      classes: fm,
      handleFabClick: A
    };
  }
});
Tu.render = mm;
const Pa = Tu;
oe(Pa);
var Zk = Pa, hm = {
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
  onClick: U()
};
function pm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln($u);
  return r || Mn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  name: gm,
  n: bm,
  classes: ym
} = re("bottom-navigation-item"), wm = {
  type: "danger",
  dot: !0
};
function Cm(e, n) {
  var r = le("var-icon"), a = le("var-badge"), t = Ue("ripple");
  return Me((h(), k(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: W({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (h(), ke(r, {
      key: 0,
      name: e.icon,
      namespace: e.namespace,
      class: c(e.n("icon")),
      "var-bottom-navigation-item-cover": ""
    }, null, 8, ["name", "namespace", "class"])) : x("v-if", !0), Y(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), ke(a, Re({
      key: 1
    }, e.badgeProps, {
      class: e.n("badge"),
      "var-bottom-navigation-item-cover": ""
    }), null, 16, ["class"])) : x("v-if", !0), D(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (h(), k(
        Ve,
        {
          key: 0
        },
        [Pe(
          ie(e.label),
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
var Ou = ne({
  name: gm,
  components: {
    VarBadge: Wr,
    VarIcon: Le
  },
  directives: {
    Ripple: Xe
  },
  props: hm,
  setup(e) {
    var n = L(() => e.name), r = L(() => e.badge), a = S({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = pm(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    };
    i(d), fe(() => r.value, (m) => {
      a.value = m === !0 ? wm : r.value;
    }, {
      immediate: !0
    });
    function v() {
      return l.value === n.value || l.value === t.value ? s.value : u.value;
    }
    function f() {
      var m, p = (m = n.value) != null ? m : t.value;
      y(e.onClick, p), y(o.onToggle, p);
    }
    return {
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      n: bm,
      classes: ym,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Ou.render = Cm;
const Ma = Ou;
oe(Ma);
var Jk = Ma, Sm = {
  separator: String,
  onClick: U()
}, Pu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function km() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = sn(Pu);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function $m() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ln(Pu);
  return n || Mn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  name: Tm,
  n: Om,
  classes: Pm
} = re("breadcrumb");
function Mm(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [D(
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
    ), e.isLast ? x("v-if", !0) : Y(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [D(
        "div",
        {
          class: c(e.n("separator"))
        },
        ie((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var Mu = ne({
  name: Tm,
  props: Sm,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = $m(), t = L(() => n.value === r.length.value - 1), o = L(() => r.separator.value);
    a(null);
    function i(l) {
      t.value || y(e.onClick, l);
    }
    return {
      n: Om,
      classes: Pm,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
Mu.render = Mm;
const Ia = Mu;
oe(Ia);
var Qk = Ia, Im = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  name: Bm,
  n: Em
} = re("breadcrumbs");
function Nm(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Iu = ne({
  name: Bm,
  props: Im,
  setup(e) {
    var n = L(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = km(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Em
    };
  }
});
Iu.render = Nm;
const Ba = Iu;
oe(Ba);
var _k = Ba, Dm = {
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
  name: Vm,
  n: Am,
  classes: zm
} = re("button-group");
function Lm(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Bu = ne({
  name: Vm,
  props: Dm,
  setup(e) {
    var {
      bindButtons: n
    } = Gc(), r = {
      elevation: L(() => e.elevation),
      type: L(() => e.type),
      size: L(() => e.size),
      color: L(() => e.color),
      textColor: L(() => e.textColor),
      mode: L(() => e.mode)
    };
    return n(r), {
      n: Am,
      classes: zm,
      formatElevation: bn
    };
  }
});
Bu.render = Lm;
const Ea = Bu;
oe(Ea);
var xk = Ea, Rm = {
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
  onClick: U(),
  "onUpdate:floating": U()
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
function Bl(e) {
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
  name: Um,
  n: Hm,
  classes: Ym
} = re("card"), Fm = 500, jm = ["src", "alt"];
function Wm(e, n) {
  var r = le("var-icon"), a = le("var-button"), t = Ue("ripple");
  return Me((h(), k(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: W({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
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
      [Y(e.$slots, "image", {}, () => [e.src ? (h(), k("img", {
        key: 0,
        class: c(e.n("image")),
        style: W({
          objectFit: e.fit,
          height: e.toSizeUnit(e.imageHeight),
          width: e.toSizeUnit(e.imageWidth)
        }),
        src: e.src,
        alt: e.alt
      }, null, 14, jm)) : x("v-if", !0)]), D(
        "div",
        {
          class: c(e.n("container"))
        },
        [Y(e.$slots, "title", {}, () => [e.title ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ie(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ie(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ie(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [Y(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), k(
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
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (h(), k(
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
        [Y(e.$slots, "close-button", {}, () => [Q(a, {
          "var-card-cover": "",
          round: "",
          class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
          onClick: Pn(e.close, ["stop"])
        }, {
          default: me(() => [Q(r, {
            "var-card-cover": "",
            name: "window-close",
            class: c(e.n("close-button-icon"))
          }, null, 8, ["class"])]),
          _: 1
          /* STABLE */
        }, 8, ["class", "onClick"])])],
        6
        /* CLASS, STYLE */
      )) : x("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), D(
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
var Eu = ne({
  name: Um,
  directives: {
    Ripple: Xe
  },
  components: {
    VarIcon: Le,
    VarButton: cn
  },
  props: Rm,
  setup(e) {
    var n = S(null), r = S(null), a = S("auto"), t = S("auto"), o = S("100%"), i = S("100%"), l = S("auto"), s = S("auto"), u = S(void 0), d = S("hidden"), v = S("0px"), f = S("0"), m = L(() => e.layout === "row"), p = S(!1), b = S(!1), {
      zIndex: g
    } = Nt(() => e.floating, 1), w = "auto", M = "auto", T = null, C = S(null);
    go(() => e.floating, () => !m.value), fe(() => e.floating, (N) => {
      m.value || Ye(() => {
        N ? O() : A();
      });
    }, {
      immediate: !0
    });
    function O() {
      return E.apply(this, arguments);
    }
    function E() {
      return E = Bl(function* () {
        clearTimeout(C.value), clearTimeout(T), C.value = null, C.value = setTimeout(/* @__PURE__ */ Bl(function* () {
          var {
            width: N,
            height: V,
            left: z,
            top: K
          } = _e(n.value);
          a.value = Se(N), t.value = Se(V), o.value = a.value, i.value = t.value, l.value = Se(K), s.value = Se(z), u.value = "fixed", w = l.value, M = s.value, p.value = !0, yield fn(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? Fm : 0);
      }), E.apply(this, arguments);
    }
    function A() {
      clearTimeout(T), clearTimeout(C.value), C.value = null, o.value = a.value, i.value = t.value, l.value = w, s.value = M, v.value = "0px", f.value = "0", p.value = !1, T = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", w = "auto", M = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }
    function P() {
      y(e["onUpdate:floating"], !1);
    }
    function I(N) {
      y(e.onClick, N);
    }
    return {
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: C,
      floaterWidth: o,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: g,
      isRow: m,
      showFloatingButtons: p,
      floated: b,
      n: Hm,
      classes: Ym,
      toSizeUnit: Se,
      close: P,
      formatElevation: bn,
      handleClick: I
    };
  }
});
Eu.render = Wm;
const Na = Eu;
oe(Na);
var e$ = Na, Gm = {
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
  onClick: U()
}, {
  name: qm,
  n: Xm,
  classes: Km
} = re("cell");
function Zm(e, n) {
  var r = le("var-icon"), a = Ue("ripple");
  return Me((h(), k(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: W(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "icon", {}, () => [e.icon ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [Q(r, {
        name: e.icon
      }, null, 8, ["name"])],
      2
      /* CLASS */
    )) : x("v-if", !0)]), D(
      "div",
      {
        class: c(e.n("content"))
      },
      [Y(e.$slots, "default", {}, () => [e.title ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ie(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ie(e.description),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [Y(e.$slots, "extra")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Nu = ne({
  name: qm,
  components: {
    VarIcon: Le
  },
  directives: {
    Ripple: Xe
  },
  props: Gm,
  setup(e) {
    var n = L(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Se(e.borderOffset),
      "--cell-border-right": Se(e.borderOffset)
    });
    function r(a) {
      y(e.onClick, a);
    }
    return {
      borderOffsetStyles: n,
      n: Xm,
      classes: Km,
      toSizeUnit: Se,
      handleClick: r
    };
  }
});
Nu.render = Zm;
const Gr = Nu;
oe(Gr);
var n$ = Gr, Jm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  name: Qm,
  n: _m
} = re("form-details"), xm = {
  key: 0
}, eh = {
  key: 0
};
function nh(e, n) {
  return h(), ke(We, {
    name: e.n()
  }, {
    default: me(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n())
      },
      [D(
        "div",
        {
          class: c(e.n("error-message"))
        },
        [Q(We, {
          name: e.n("message")
        }, {
          default: me(() => [e.errorMessage ? (h(), k(
            "div",
            xm,
            ie(e.errorMessage),
            1
            /* TEXT */
          )) : x("v-if", !0)]),
          _: 1
          /* STABLE */
        }, 8, ["name"])],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: c(e.n("extra-message"))
        },
        [Q(We, {
          name: e.n("message")
        }, {
          default: me(() => [Y(e.$slots, "extra-message", {}, () => [e.extraMessage ? (h(), k(
            "div",
            eh,
            ie(e.extraMessage),
            1
            /* TEXT */
          )) : x("v-if", !0)])]),
          _: 3
          /* FORWARDED */
        }, 8, ["name"])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    )) : x("v-if", !0)]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
var Du = ne({
  name: Qm,
  props: Jm,
  setup: () => ({
    n: _m
  })
});
Du.render = nh;
const an = Du;
oe(an);
var r$ = an, rh = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U(),
  "onUpdate:indeterminate": U()
}, Vu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function ah() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = sn(Vu);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function th() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = ln(Vu);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
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
var Au = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Bn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln(Au), a = aa(), t = r ? (o) => {
    r(oi({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: n,
    form: e,
    bindForm: t
  };
}
function oh() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = sn(Au);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  name: ih,
  n: lh,
  classes: sh
} = re("checkbox");
function uh(e, n) {
  var r = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = Ue("hover"), i = Ue("ripple");
  return h(), k(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: c(e.n())
      },
      [Me((h(), k(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: W({
            color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.isIndeterminate ? Y(e.$slots, "indeterminate-icon", {
          key: 0
        }, () => [Q(r, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "minus-box",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : x("v-if", !0), e.checked && !e.isIndeterminate ? Y(e.$slots, "checked-icon", {
          key: 1
        }, () => [Q(r, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-marked",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : x("v-if", !0), !e.checked && !e.isIndeterminate ? Y(e.$slots, "unchecked-icon", {
          key: 2
        }, () => [Q(r, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-blank-outline",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : x("v-if", !0), Q(a, {
          hovering: !e.disabled && !e.formDisabled && e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[o, e.handleHovering, "desktop"], [i, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), D(
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
    ), Q(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var zu = ne({
  name: ih,
  directives: {
    Ripple: Xe,
    Hover: zn
  },
  components: {
    VarIcon: Le,
    VarFormDetails: an,
    VarHoverOverlay: Sn
  },
  props: rh,
  setup(e) {
    var n = ya(e, "modelValue"), r = ya(e, "indeterminate"), a = L(() => n.value === e.checkedValue), t = L(() => e.checkedValue), o = S(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: l
    } = th(), {
      hovering: s,
      handleHovering: u
    } = Kn(), {
      form: d,
      bindForm: v
    } = Bn(), {
      errorMessage: f,
      validateWithTrigger: m,
      validate: p,
      // expose
      resetValidation: b
    } = In(), g = {
      checkedValue: t,
      checked: a,
      sync: C,
      validate: P,
      resetValidation: b,
      reset: E,
      resetWithAnimation: O
    };
    y(l, g), y(v, g);
    function w(I) {
      Ye(() => {
        var {
          validateTrigger: N,
          rules: V,
          modelValue: z
        } = e;
        m(N, I, V, z);
      });
    }
    function M(I) {
      var {
        checkedValue: N,
        onChange: V
      } = e;
      n.value = I, r.value = !1, y(V, n.value), w("onChange"), I === N ? i == null || i.onChecked(N) : i == null || i.onUnchecked(N);
    }
    function T(I) {
      var {
        disabled: N,
        readonly: V,
        checkedValue: z,
        uncheckedValue: K,
        onClick: _
      } = e;
      if (!(d != null && d.disabled.value || N) && (y(_, I), !(d != null && d.readonly.value || V))) {
        o.value = !0;
        var ae = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !a.value && ae || M(a.value ? K : z);
      }
    }
    function C(I) {
      var {
        checkedValue: N,
        uncheckedValue: V
      } = e;
      n.value = I.includes(N) ? N : V;
    }
    function O() {
      o.value = !1;
    }
    function E() {
      n.value = e.uncheckedValue, b();
    }
    function A(I) {
      var {
        checkedValue: N,
        uncheckedValue: V
      } = e, z = ![N, V].includes(I);
      z && (I = a.value ? V : N), M(I);
    }
    function P() {
      return p(e.rules, e.modelValue);
    }
    return {
      isIndeterminate: r,
      withAnimation: o,
      checked: a,
      errorMessage: f,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      hovering: s,
      n: lh,
      classes: sh,
      handleHovering: u,
      handleClick: T,
      toggle: A,
      reset: E,
      validate: P,
      resetValidation: b
    };
  }
});
zu.render = uh;
const qr = zu;
oe(qr);
var a$ = qr, dh = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  name: vh,
  n: fh,
  classes: ch
} = re("checkbox-group");
function mh(e, n) {
  var r = le("var-form-details");
  return h(), k(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(r, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var Lu = ne({
  name: vh,
  components: {
    VarFormDetails: an
  },
  props: dh,
  setup(e) {
    var n = L(() => e.max), r = L(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = ah(), {
      bindForm: i
    } = Bn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = In(), v = L(() => l.value), f = {
      max: n,
      checkedCount: r,
      onChecked: b,
      onUnchecked: g,
      validate: E,
      resetValidation: d,
      reset: O,
      errorMessage: v
    };
    fe(() => e.modelValue, w, {
      deep: !0
    }), fe(() => a.value, w), o(f), y(i, f);
    function m(A) {
      Ye(() => {
        var {
          validateTrigger: P,
          rules: I,
          modelValue: N
        } = e;
        s(P, A, I, N);
      });
    }
    function p(A) {
      y(e["onUpdate:modelValue"], A), y(e.onChange, A), m("onChange");
    }
    function b(A) {
      var {
        modelValue: P
      } = e;
      P.includes(A) || p([...P, A]);
    }
    function g(A) {
      var {
        modelValue: P
      } = e;
      P.includes(A) && p(P.filter((I) => I !== A));
    }
    function w() {
      return t.forEach((A) => {
        var {
          sync: P
        } = A;
        return P(e.modelValue);
      });
    }
    function M() {
      t.forEach((A) => A.resetWithAnimation());
    }
    function T() {
      var A = t.map((I) => {
        var {
          checkedValue: N
        } = I;
        return N.value;
      }), P = fl(A);
      return M(), y(e["onUpdate:modelValue"], P), P;
    }
    function C() {
      var A = t.filter((I) => {
        var {
          checked: N
        } = I;
        return !N.value;
      }).map((I) => {
        var {
          checkedValue: N
        } = I;
        return N.value;
      }), P = fl(A);
      return M(), y(e["onUpdate:modelValue"], P), P;
    }
    function O() {
      y(e["onUpdate:modelValue"], []), d();
    }
    function E() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: fh,
      classes: ch,
      checkAll: T,
      inverseAll: C,
      reset: O,
      validate: E,
      resetValidation: d
    };
  }
});
Lu.render = mh;
const Da = Lu;
oe(Da);
var t$ = Da, hh = {
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
  iconName: en(js, "name"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  block: Boolean,
  closable: Boolean,
  onClose: U()
}, {
  name: ph,
  n: _n,
  classes: gh
} = re("chip");
function bh(e, n) {
  var r = le("var-icon");
  return h(), ke(We, {
    name: e.n("$-fade")
  }, {
    default: me(() => [D(
      "span",
      Re({
        class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [Y(e.$slots, "left"), D(
        "span",
        {
          class: c(e.n("text-" + e.size))
        },
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      ), Y(e.$slots, "right"), e.closable ? (h(), k(
        "span",
        {
          key: 0,
          class: c(e.n("--close")),
          onClick: n[0] || (n[0] = function() {
            return e.handleClose && e.handleClose(...arguments);
          })
        },
        [Q(r, {
          name: "" + (e.iconName ? e.iconName : "close-circle")
        }, null, 8, ["name"])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      16
      /* FULL_PROPS */
    )]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
var Ru = ne({
  name: ph,
  components: {
    VarIcon: Le
  },
  inheritAttrs: !1,
  props: hh,
  setup(e) {
    var n = L(() => {
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
    }), r = L(() => {
      var {
        size: t,
        block: o,
        type: i,
        plain: l,
        round: s
      } = e, u = _n(o ? "$--flex" : "$--inline-flex"), d = l ? _n("plain") + " " + _n("plain-" + i) : _n("--" + i), v = s ? _n("--round") : null;
      return [_n("--" + t), u, d, v];
    });
    function a(t) {
      y(e.onClose, t);
    }
    return {
      chipStyles: n,
      contentClass: r,
      n: _n,
      classes: gh,
      handleClose: a
    };
  }
});
Ru.render = bh;
const Xr = Ru;
oe(Xr);
var o$ = Xr, yh = {
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
  onClick: U()
}, Uu = Symbol("ROW_BIND_COL_KEY");
function wh() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = sn(Uu);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Ch() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln(Uu);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  name: Sh,
  n: Ht,
  classes: kh
} = re("col");
function $h(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: W({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right),
        paddingTop: e.toSizeUnit(e.padding.top),
        paddingBottom: e.toSizeUnit(e.padding.bottom)
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
var Hu = ne({
  name: Sh,
  props: yh,
  setup(e) {
    var n = L(() => R(e.span)), r = L(() => R(e.offset)), a = S({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }), {
      row: t,
      bindRow: o
    } = Ch(), i = {
      setPadding(u) {
        a.value = u;
      }
    };
    fe([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), y(o, i);
    function l(u, d) {
      var v = [];
      if (d == null)
        return v;
      if (zi(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Ht("--span-" + u + "-" + m)), f && v.push(Ht("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Ht("--span-" + u + "-" + d));
      return v;
    }
    function s(u) {
      y(e.onClick, u);
    }
    return {
      span: n,
      offset: r,
      padding: a,
      n: Ht,
      classes: kh,
      toNumber: R,
      toSizeUnit: Se,
      getSize: l,
      handleClick: s,
      padStartFlex: ao
    };
  }
});
Hu.render = $h;
const Va = Hu;
oe(Va);
var i$ = Va, Yu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Th() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = sn(Yu);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var Oh = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  name: Ph,
  n: Mh
} = re("collapse");
function Ih(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Fu = ne({
  name: Ph,
  props: Oh,
  setup(e) {
    var n = L(() => e.modelValue), r = L(() => e.offset), a = L(() => e.divider), t = L(() => e.elevation), {
      length: o,
      collapseItem: i,
      bindCollapseItem: l
    } = Th(), s = {
      active: n,
      offset: r,
      divider: a,
      elevation: t,
      updateItem: v
    };
    fe(() => o.value, () => Ye().then(p)), fe(() => e.modelValue, () => Ye().then(p)), l(s);
    function u() {
      return !e.accordion && !De(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && De(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0;
    }
    function d(b, g) {
      return u() ? g ? e.accordion ? b : [...e.modelValue, b] : e.accordion ? null : e.modelValue.filter((w) => w !== b) : null;
    }
    function v(b, g) {
      var w = d(b, g);
      y(e["onUpdate:modelValue"], w), y(e.onChange, w);
    }
    function f() {
      if (e.accordion)
        return i.find((g) => {
          var {
            name: w
          } = g;
          return e.modelValue === w.value;
        });
      var b = i.filter((g) => {
        var {
          name: w
        } = g;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return b.length ? b : void 0;
    }
    function m() {
      return e.accordion ? i.find((b) => {
        var {
          index: g,
          name: w
        } = b;
        return w.value === void 0 && e.modelValue === g.value;
      }) : i.filter((b) => {
        var {
          index: g,
          name: w
        } = b;
        return w.value === void 0 && e.modelValue.includes(g.value);
      });
    }
    function p() {
      if (u()) {
        var b = f() || m();
        if (e.accordion && !b || !e.accordion && !b.length) {
          i.forEach((g) => {
            g.init(e.accordion, !1);
          });
          return;
        }
        i.forEach((g) => {
          var w = e.accordion ? b === g : b.includes(g);
          g.init(e.accordion, w);
        });
      }
    }
    return {
      divider: a,
      n: Mh
    };
  }
});
Fu.render = Ih;
const Aa = Fu;
oe(Aa);
var l$ = Aa;
function Bh() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln(Yu);
  return r || Mn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var Eh = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
function El(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Nl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        El(o, a, t, i, l, "next", s);
      }
      function l(s) {
        El(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  name: Nh,
  n: Dh,
  classes: Vh
} = re("collapse-item");
function Ah(e, n) {
  var r = le("var-icon");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: W("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
      },
      null,
      2
      /* CLASS */
    ), D(
      "div",
      {
        class: c(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [D(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [Y(e.$slots, "title", {}, () => [Pe(
          ie(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: c(e.n("header-icon"))
        },
        [Y(e.$slots, "icon", {}, () => [Q(r, {
          name: e.icon,
          transition: 250,
          class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
        }, null, 8, ["name", "class"])])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), Me(D(
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
      [D(
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
    ), [[Un, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var ju = ne({
  name: Nh,
  components: {
    VarIcon: Le
  },
  props: Eh,
  setup(e) {
    var n = S(!1), r = S(!1), a = S(null), t = L(() => e.name), {
      index: o,
      collapse: i,
      bindCollapse: l
    } = Bh(), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = i, m = {
      index: o,
      name: t,
      init: T
    }, p = !0;
    fe(n, (A) => {
      A ? b() : w();
    }), l(m);
    function b() {
      return g.apply(this, arguments);
    }
    function g() {
      return g = Nl(function* () {
        if (a.value && (a.value.style.height = "", r.value = !0, yield Kt(), !!a.value)) {
          var {
            offsetHeight: A
          } = a.value;
          a.value.style.height = "0px", yield Kt(), a.value && (a.value.style.height = A + "px", p && (yield fn(), p && E()));
        }
      }), g.apply(this, arguments);
    }
    function w() {
      return M.apply(this, arguments);
    }
    function M() {
      return M = Nl(function* () {
        if (a.value) {
          var {
            offsetHeight: A
          } = a.value;
          a.value.style.height = A + "px", yield Kt(), a.value.style.height = "0px";
        }
      }), M.apply(this, arguments);
    }
    function T(A, P) {
      s.value === void 0 || A && De(s.value) || P === n.value || (n.value = P, C(!0));
    }
    function C(A) {
      e.disabled || A || f(e.name || o.value, !n.value);
    }
    function O() {
      p = !1;
    }
    function E() {
      n.value || (r.value = !1), a.value.style.height = "";
    }
    return {
      isShow: n,
      showContent: r,
      offset: u,
      divider: d,
      elevation: v,
      contentEl: a,
      n: Dh,
      start: O,
      classes: Vh,
      toggle: C,
      transitionend: E,
      formatElevation: bn
    };
  }
});
ju.render = Ah;
const za = ju;
oe(za);
var s$ = za, zh = {
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
  onEnd: U(),
  onChange: U()
}, {
  name: Lh,
  n: Rh
} = re("countdown"), ii = 1e3, li = 60 * ii, si = 60 * li, Dl = 24 * si;
function Uh(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default", It(mo(e.timeData)), () => [Pe(
      ie(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Wu = ne({
  name: Lh,
  props: zh,
  setup(e) {
    var n = S(""), r = S({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, i = 0, l;
    fe(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), gr(() => {
      l != null && (t = l, t === !0 && v(!0));
    }), ra(() => {
      l = t, f();
    }), Ot(f);
    function s(p, b) {
      var g = Object.values(b), w = ["DD", "HH", "mm", "ss"], M = [24, 60, 60, 1e3];
      if (w.forEach((C, O) => {
        p.includes(C) ? p = p.replace(C, Tr("" + g[O], 2, "0")) : g[O + 1] += g[O] * M[O];
      }), p.includes("S")) {
        var T = Tr("" + g[g.length - 1], 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", T) : p.includes("SS") ? p = p.replace("SS", T.slice(0, 2)) : p = p.replace("S", T.slice(0, 1));
      }
      return p;
    }
    function u(p) {
      var b = Math.floor(p / Dl), g = Math.floor(p % Dl / si), w = Math.floor(p % si / li), M = Math.floor(p % li / ii), T = Math.floor(p % ii), C = {
        days: b,
        hours: g,
        minutes: w,
        seconds: M,
        milliseconds: T
      };
      r.value = C, y(e.onChange, r.value), n.value = s(e.format, C);
    }
    function d() {
      var {
        time: p,
        onEnd: b
      } = e, g = performance.now();
      if (a || (a = g + R(p)), i = a - g, i < 0 && (i = 0), u(i), i === 0) {
        y(b);
        return;
      }
      t && (o = ba(d));
    }
    function v(p) {
      p === void 0 && (p = !1), !(t && !p) && (t = !0, a = performance.now() + (i || R(e.time)), d());
    }
    function f() {
      t = !1, cl(o);
    }
    function m() {
      a = 0, t = !1, cl(o), d();
    }
    return {
      showTime: n,
      timeData: r,
      n: Rh,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Wu.render = Uh;
const La = Wu;
oe(La);
var u$ = La;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Rr = 9e15, Cr = 1e9, ui = "0123456789abcdef", oo = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", io = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", di = {
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
  minE: -Rr,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Rr,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Gu, Wn, we = !0, Co = "[DecimalError] ", hr = Co + "Invalid argument: ", qu = Co + "Precision limit exceeded", Xu = Co + "crypto unavailable", Ku = "[object Decimal]", tn = Math.floor, Je = Math.pow, Hh = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Yh = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Fh = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Zu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, An = 1e7, pe = 7, jh = 9007199254740991, Wh = oo.length - 1, vi = io.length - 1, Z = { toStringTag: Ku };
Z.absoluteValue = Z.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), he(e);
};
Z.ceil = function() {
  return he(new this.constructor(this), this.e + 1, 2);
};
Z.clampedTo = Z.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(hr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
Z.comparedTo = Z.cmp = function(e) {
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
Z.cosine = Z.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + pe, a.rounding = 1, r = Gh(a, ed(a, r)), a.precision = e, a.rounding = n, he(Wn == 2 || Wn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
Z.cubeRoot = Z.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (we = !1, o = d.s * Je(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = rn(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Je(r, 1 / 3), e = tn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = ze(u.plus(d).times(l), u.plus(s), i + 2, 1), rn(l.d).slice(0, i) === (r = rn(a.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !t && r == "4999") {
        if (!t && (he(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        i += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (he(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return we = !0, he(a, e, v.rounding, n);
};
Z.decimalPlaces = Z.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - tn(this.e / pe)) * pe, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
Z.dividedBy = Z.div = function(e) {
  return ze(this, new this.constructor(e));
};
Z.dividedToIntegerBy = Z.divToInt = function(e) {
  var n = this, r = n.constructor;
  return he(ze(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
Z.equals = Z.eq = function(e) {
  return this.cmp(e) === 0;
};
Z.floor = function() {
  return he(new this.constructor(this), this.e + 1, 3);
};
Z.greaterThan = Z.gt = function(e) {
  return this.cmp(e) > 0;
};
Z.greaterThanOrEqualTo = Z.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
Z.hyperbolicCosine = Z.cosh = function() {
  var e, n, r, a, t, o = this, i = o.constructor, l = new i(1);
  if (!o.isFinite())
    return new i(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return l;
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / ko(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Kr(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return he(o, i.precision = r, i.rounding = a, !0);
};
Z.hyperbolicSine = Z.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Kr(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / ko(5, e)), t = Kr(o, 2, t, t, !0);
    for (var i, l = new o(5), s = new o(16), u = new o(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return o.precision = n, o.rounding = r, he(t, n, r, !0);
};
Z.hyperbolicTangent = Z.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, ze(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
Z.inverseCosine = Z.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Vn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Vn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Vn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
Z.inverseHyperbolicCosine = Z.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, we = !1, r = r.times(r).minus(1).sqrt().plus(r), we = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
Z.inverseHyperbolicSine = Z.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, we = !1, r = r.times(r).plus(1).sqrt().plus(r), we = !0, a.precision = e, a.rounding = n, r.ln());
};
Z.inverseHyperbolicTangent = Z.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? he(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = ze(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
Z.inverseSine = Z.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Vn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
Z.inverseTangent = Z.atan = function() {
  var e, n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= vi)
      return i = Vn(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= vi)
      return i = Vn(d, v + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / pe + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (we = !1, n = Math.ceil(l / pe), a = 1, s = u.times(u), i = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = i.minus(t.div(a += 2)), t = t.times(s), i = o.plus(t.div(a += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === o.d[e] && e--; )
        ;
  return r && (i = i.times(2 << r - 1)), we = !0, he(i, d.precision = v, d.rounding = f, !0);
};
Z.isFinite = function() {
  return !!this.d;
};
Z.isInteger = Z.isInt = function() {
  return !!this.d && tn(this.e / pe) > this.d.length - 2;
};
Z.isNaN = function() {
  return !this.s;
};
Z.isNegative = Z.isNeg = function() {
  return this.s < 0;
};
Z.isPositive = Z.isPos = function() {
  return this.s > 0;
};
Z.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
Z.lessThan = Z.lt = function(e) {
  return this.cmp(e) < 0;
};
Z.lessThanOrEqualTo = Z.lte = function(e) {
  return this.cmp(e) < 1;
};
Z.logarithm = Z.log = function(e) {
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
  if (we = !1, l = v + m, i = sr(u, l), a = n ? lo(d, l + 10) : sr(e, l), s = ze(i, a, l, 1), Ra(s.d, t = v, f))
    do
      if (l += 10, i = sr(u, l), a = n ? lo(d, l + 10) : sr(e, l), s = ze(i, a, l, 1), !o) {
        +rn(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = he(s, v + 1, 0));
        break;
      }
    while (Ra(s.d, t += 10, f));
  return we = !0, he(s, v, f);
};
Z.minus = Z.sub = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, p = m.constructor;
  if (e = new p(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new p(NaN) : m.d ? e.s = -e.s : e = new p(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(m);
    else
      return new p(s === 3 ? -0 : 0);
    return we ? he(e, l, s) : e;
  }
  if (r = tn(e.e / pe), d = tn(m.e / pe), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, i = f.length) : (n = f, r = d, i = u.length), a = Math.max(Math.ceil(l / pe), i) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
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
        u[t] = An - 1;
      --u[t], u[a] += An;
    }
    u[a] -= f[a];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = So(u, r), we ? he(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
Z.modulo = Z.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? he(new a(r), a.precision, a.rounding) : (we = !1, a.modulo == 9 ? (n = ze(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = ze(r, e, 0, a.modulo, 1), n = n.times(e), we = !0, r.minus(n));
};
Z.naturalExponential = Z.exp = function() {
  return fi(this);
};
Z.naturalLogarithm = Z.ln = function() {
  return sr(this);
};
Z.negated = Z.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, he(e);
};
Z.plus = Z.add = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), we ? he(e, l, s) : e;
  if (o = tn(v.e / pe), a = tn(e.e / pe), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, a = o, i = u.length), o = Math.ceil(l / pe), i = o > i ? o + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / An | 0, u[t] %= An;
  for (n && (u.unshift(n), ++a), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = So(u, a), we ? he(e, l, s) : e;
};
Z.precision = Z.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(hr + e);
  return r.d ? (n = Ju(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
Z.round = function() {
  var e = this, n = e.constructor;
  return he(new n(e), e.e + 1, n.rounding);
};
Z.sine = Z.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + pe, a.rounding = 1, r = Xh(a, ed(a, r)), a.precision = e, a.rounding = n, he(Wn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
Z.squareRoot = Z.sqrt = function() {
  var e, n, r, a, t, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (we = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = rn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = tn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(ze(i, o, r + 2, 1)).times(0.5), rn(o.d).slice(0, r) === (n = rn(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (he(o, s + 1, 0), o.times(o).eq(i))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (he(a, s + 1, 1), e = !a.times(a).eq(i));
        break;
      }
  return we = !0, he(a, s, d.rounding, e);
};
Z.tangent = Z.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = ze(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, he(Wn == 2 || Wn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
Z.times = Z.mul = function(e) {
  var n, r, a, t, o, i, l, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = tn(d.e / pe) + tn(e.e / pe), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, i = s, s = u, u = i), o = [], i = s + u, a = i; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = o[t] + m[a] * f[t - a - 1] + n, o[t--] = l % An | 0, n = l / An | 0;
    o[t] = (o[t] + n) % An | 0;
  }
  for (; !o[--i]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = So(o, r), we ? he(e, v.precision, v.rounding) : e;
};
Z.toBinary = function(e, n) {
  return Ji(this, 2, e, n);
};
Z.toDecimalPlaces = Z.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (gn(e, 0, Cr), n === void 0 ? n = a.rounding : gn(n, 0, 8), he(r, e + r.e + 1, n));
};
Z.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Yn(a, !0) : (gn(e, 0, Cr), n === void 0 ? n = t.rounding : gn(n, 0, 8), a = he(new t(a), e + 1, n), r = Yn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
Z.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Yn(t) : (gn(e, 0, Cr), n === void 0 ? n = o.rounding : gn(n, 0, 8), a = he(new o(t), e + t.e + 1, n), r = Yn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
Z.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, p = m.d, b = m.constructor;
  if (!p)
    return new b(m);
  if (u = r = new b(1), a = s = new b(0), n = new b(a), o = n.e = Ju(p) - m.e - 1, i = o % pe, n.d[0] = Je(10, i < 0 ? pe + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new b(e), !l.isInt() || l.lt(u))
      throw Error(hr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (we = !1, l = new b(rn(p)), d = b.precision, b.precision = o = p.length * pe * 2; v = ze(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = ze(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = ze(u, a, o, 1).minus(m).abs().cmp(ze(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], b.precision = d, we = !0, f;
};
Z.toHexadecimal = Z.toHex = function(e, n) {
  return Ji(this, 16, e, n);
};
Z.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : gn(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (we = !1, r = ze(r, e, 0, n, 1).times(e), we = !0, he(r)) : (e.s = r.s, r = e), r;
};
Z.toNumber = function() {
  return +this;
};
Z.toOctal = function(e, n) {
  return Ji(this, 8, e, n);
};
Z.toPower = Z.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Je(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return he(l, a, o);
  if (n = tn(e.e / pe), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= jh)
    return t = Qu(s, l, r, a), e.s < 0 ? new s(1).div(t) : he(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Je(+l, u), n = r == 0 || !isFinite(r) ? tn(u * (Math.log("0." + rn(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (we = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = fi(e.times(sr(l, a + r)), a), t.d && (t = he(t, a + 5, 1), Ra(t.d, a, o) && (n = a + 10, t = he(fi(e.times(sr(l, n + r)), n), n + 5, 1), +rn(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = he(t, a + 1, 0)))), t.s = i, we = !0, s.rounding = o, he(t, a, o));
};
Z.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Yn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (gn(e, 1, Cr), n === void 0 ? n = t.rounding : gn(n, 0, 8), a = he(new t(a), e, n), r = Yn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
Z.toSignificantDigits = Z.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (gn(e, 1, Cr), n === void 0 ? n = a.rounding : gn(n, 0, 8)), he(new a(r), e, n);
};
Z.toString = function() {
  var e = this, n = e.constructor, r = Yn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
Z.truncated = Z.trunc = function() {
  return he(new this.constructor(this), this.e + 1, 1);
};
Z.valueOf = Z.toJSON = function() {
  var e = this, n = e.constructor, r = Yn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function rn(e) {
  var n, r, a, t = e.length - 1, o = "", i = e[0];
  if (t > 0) {
    for (o += i, n = 1; n < t; n++)
      a = e[n] + "", r = pe - a.length, r && (o += nr(r)), o += a;
    i = e[n], a = i + "", r = pe - a.length, r && (o += nr(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return o + i;
}
function gn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(hr + e);
}
function Ra(e, n, r, a) {
  var t, o, i, l;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += pe, t = 0) : (t = Math.ceil((n + 1) / pe), n %= pe), o = Je(10, pe - n), l = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Je(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : i = ((a || r < 4) && l + 1 == o || !a && r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Je(10, n - 3) - 1, i;
}
function Zt(e, n, r) {
  for (var a, t = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += ui.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Gh(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / ko(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Kr(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var ze = function() {
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
    var u, d, v, f, m, p, b, g, w, M, T, C, O, E, A, P, I, N, V, z, K = a.constructor, _ = a.s == t.s ? 1 : -1, ae = a.d, H = t.d;
    if (!ae || !ae[0] || !H || !H[0])
      return new K(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (ae ? H && ae[0] == H[0] : !H) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          ae && ae[0] == 0 || !H ? _ * 0 : _ / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = An, m = pe, d = tn(a.e / m) - tn(t.e / m)), V = H.length, I = ae.length, w = new K(_), M = w.d = [], v = 0; H[v] == (ae[v] || 0); v++)
      ;
    if (H[v] > (ae[v] || 0) && d--, o == null ? (E = o = K.precision, i = K.rounding) : l ? E = o + (a.e - t.e) + 1 : E = o, E < 0)
      M.push(1), p = !0;
    else {
      if (E = E / m + 2 | 0, v = 0, V == 1) {
        for (f = 0, H = H[0], E++; (v < I || f) && E--; v++)
          A = f * s + (ae[v] || 0), M[v] = A / H | 0, f = A % H | 0;
        p = f || v < I;
      } else {
        for (f = s / (H[0] + 1) | 0, f > 1 && (H = e(H, f, s), ae = e(ae, f, s), V = H.length, I = ae.length), P = V, T = ae.slice(0, V), C = T.length; C < V; )
          T[C++] = 0;
        z = H.slice(), z.unshift(0), N = H[0], H[1] >= s / 2 && ++N;
        do
          f = 0, u = n(H, T, V, C), u < 0 ? (O = T[0], V != C && (O = O * s + (T[1] || 0)), f = O / N | 0, f > 1 ? (f >= s && (f = s - 1), b = e(H, f, s), g = b.length, C = T.length, u = n(b, T, g, C), u == 1 && (f--, r(b, V < g ? z : H, g, s))) : (f == 0 && (u = f = 1), b = H.slice()), g = b.length, g < C && b.unshift(0), r(T, b, C, s), u == -1 && (C = T.length, u = n(H, T, V, C), u < 1 && (f++, r(T, V < C ? z : H, C, s))), C = T.length) : u === 0 && (f++, T = [0]), M[v++] = f, u && T[0] ? T[C++] = ae[P] || 0 : (T = [ae[P]], C = 1);
        while ((P++ < I || T[0] !== void 0) && E--);
        p = T[0] !== void 0;
      }
      M[0] || M.shift();
    }
    if (m == 1)
      w.e = d, Gu = p;
    else {
      for (v = 1, f = M[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, he(w, l ? o + w.e + 1 : o, i, p);
    }
    return w;
  };
}();
function he(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, l = v[0]; l >= 10; l /= 10)
        t++;
      if (o = n - t, o < 0)
        o += pe, i = n, d = v[f = 0], s = d / Je(10, t - i - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / pe), l = v.length, f >= l)
        if (a) {
          for (; l++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= pe, i = o - pe + 1;
        } else
          break e;
      else {
        for (d = l = v[f], t = 1; l >= 10; l /= 10)
          t++;
        o %= pe, i = o - pe + t, s = i < 0 ? 0 : d / Je(10, t - i - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (i < 0 ? d : d % Je(10, t - i - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? i > 0 ? d / Je(10, t - i) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Je(10, (pe - n % pe) % pe), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = Je(10, pe - o), v[f] = i > 0 ? (d / Je(10, t - i) % Je(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, i = v[0]; i >= 10; i /= 10)
              o++;
            for (i = v[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            o != l && (e.e++, v[0] == An && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != An)
              break;
            v[f--] = 0, l = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return we && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Yn(e, n, r) {
  if (!e.isFinite())
    return xu(e);
  var a, t = e.e, o = rn(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + nr(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + nr(-t - 1) + o, r && (a = r - i) > 0 && (o += nr(a))) : t >= i ? (o += nr(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + nr(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += nr(a))), o;
}
function So(e, n) {
  var r = e[0];
  for (n *= pe; r >= 10; r /= 10)
    n++;
  return n;
}
function lo(e, n, r) {
  if (n > Wh)
    throw we = !0, r && (e.precision = r), Error(qu);
  return he(new e(oo), n, 1, !0);
}
function Vn(e, n, r) {
  if (n > vi)
    throw Error(qu);
  return he(new e(io), n, r, !0);
}
function Ju(e) {
  var n = e.length - 1, r = n * pe + 1;
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
function Qu(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / pe + 4);
  for (we = !1; ; ) {
    if (r % 2 && (o = o.times(n), Al(o.d, i) && (t = !0)), r = tn(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), Al(n.d, i);
  }
  return we = !0, o;
}
function Vl(e) {
  return e.d[e.d.length - 1] & 1;
}
function _u(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function fi(e, n) {
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (we = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Je(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = he(o.times(e), s, 1), r = r.times(++d), l = i.plus(ze(o, r, s, 1)), rn(l.d).slice(0, s) === rn(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = he(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Ra(i.d, s - a, m, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return he(i, f.precision = p, m, we = !0);
      else
        return f.precision = p, i;
    }
    i = l;
  }
}
function sr(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, m = 1, p = 10, b = e, g = b.d, w = b.constructor, M = w.rounding, T = w.precision;
  if (b.s < 0 || !g || !g[0] || !b.e && g[0] == 1 && g.length == 1)
    return new w(g && !g[0] ? -1 / 0 : b.s != 1 ? NaN : g ? 0 : b);
  if (n == null ? (we = !1, d = T) : d = n, w.precision = d += p, r = rn(g), a = r.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      b = b.times(e), r = rn(b.d), a = r.charAt(0), m++;
    o = b.e, a > 1 ? (b = new w("0." + r), o++) : b = new w(a + "." + r.slice(1));
  } else
    return u = lo(w, d + 2, T).times(o + ""), b = sr(new w(a + "." + r.slice(1)), d - p).plus(u), w.precision = T, n == null ? he(b, T, M, we = !0) : b;
  for (v = b, s = i = b = ze(b.minus(1), b.plus(1), d, 1), f = he(b.times(b), d, 1), t = 3; ; ) {
    if (i = he(i.times(f), d, 1), u = s.plus(ze(i, new w(t), d, 1)), rn(u.d).slice(0, d) === rn(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(lo(w, d + 2, T).times(o + ""))), s = ze(s, new w(m), d, 1), n == null)
        if (Ra(s.d, d - p, M, l))
          w.precision = d += p, u = i = b = ze(v.minus(1), v.plus(1), d, 1), f = he(b.times(b), d, 1), t = l = 1;
        else
          return he(s, w.precision = T, M, we = !0);
      else
        return w.precision = T, s;
    s = u, t += 2;
  }
}
function xu(e) {
  return String(e.s * e.s / 0);
}
function ci(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % pe, r < 0 && (a += pe), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= pe; a < t; )
        e.d.push(+n.slice(a, a += pe));
      n = n.slice(a), a = pe - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), we && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function qh(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Zu.test(n))
      return ci(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Yh.test(n))
    r = 16, n = n.toLowerCase();
  else if (Hh.test(n))
    r = 2;
  else if (Fh.test(n))
    r = 8;
  else
    throw Error(hr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = Qu(a, new a(r), o, o * 2)), u = Zt(n, r, An), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = So(u, d), e.d = u, we = !1, i && (e = ze(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Je(2, s) : ur.pow(2, s))), we = !0, e);
}
function Xh(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Kr(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / ko(5, r)), n = Kr(e, 2, n, n);
  for (var t, o = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(i.times(t).minus(l))));
  return n;
}
function Kr(e, n, r, a, t) {
  var o, i, l, s, u = e.precision, d = Math.ceil(u / pe);
  for (we = !1, s = r.times(r), l = new e(a); ; ) {
    if (i = ze(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(i) : a.minus(i), a = ze(i.times(s), new e(n++ * n++), u, 1), i = l.plus(a), i.d[d] !== void 0) {
      for (o = d; i.d[o] === l.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = l, l = a, a = i, i = o;
  }
  return we = !0, i.d.length = d + 1, i;
}
function ko(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function ed(e, n) {
  var r, a = n.s < 0, t = Vn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Wn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Wn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Wn = Vl(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Wn = Vl(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ji(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, m = e.constructor, p = r !== void 0;
  if (p ? (gn(r, 1, Cr), a === void 0 ? a = m.rounding : gn(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = xu(e);
  else {
    for (d = Yn(e), i = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Zt(Yn(f), 10, t), f.e = f.d.length), v = Zt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = ze(e, f, r, a, 0, t), v = e.d, o = e.e, u = Gu), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += ui.charAt(v[i]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = Zt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += ui.charAt(v[i]);
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
function Al(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Kh(e) {
  return new this(e).abs();
}
function Zh(e) {
  return new this(e).acos();
}
function Jh(e) {
  return new this(e).acosh();
}
function Qh(e, n) {
  return new this(e).plus(n);
}
function _h(e) {
  return new this(e).asin();
}
function xh(e) {
  return new this(e).asinh();
}
function ep(e) {
  return new this(e).atan();
}
function np(e) {
  return new this(e).atanh();
}
function rp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Vn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Vn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Vn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(ze(e, n, o, 1)), n = Vn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(ze(e, n, o, 1)), r;
}
function ap(e) {
  return new this(e).cbrt();
}
function tp(e) {
  return he(e = new this(e), e.e + 1, 2);
}
function op(e, n, r) {
  return new this(e).clamp(n, r);
}
function ip(e) {
  if (!e || typeof e != "object")
    throw Error(Co + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Cr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Rr,
    0,
    "toExpPos",
    0,
    Rr,
    "maxE",
    0,
    Rr,
    "minE",
    -Rr,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = di[r]), (a = e[r]) !== void 0)
      if (tn(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(hr + r + ": " + a);
  if (r = "crypto", t && (this[r] = di[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Xu);
      else
        this[r] = !1;
    else
      throw Error(hr + r + ": " + a);
  return this;
}
function lp(e) {
  return new this(e).cos();
}
function sp(e) {
  return new this(e).cosh();
}
function nd(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, zl(o)) {
      u.s = o.s, we ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        we ? i > t.maxE ? (u.e = NaN, u.d = null) : i < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [o]) : (u.e = i, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return ci(u, o.toString());
    } else if (s !== "string")
      throw Error(hr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), Zu.test(o) ? ci(u, o) : qh(u, o);
  }
  if (t.prototype = Z, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = ip, t.clone = nd, t.isDecimal = zl, t.abs = Kh, t.acos = Zh, t.acosh = Jh, t.add = Qh, t.asin = _h, t.asinh = xh, t.atan = ep, t.atanh = np, t.atan2 = rp, t.cbrt = ap, t.ceil = tp, t.clamp = op, t.cos = lp, t.cosh = sp, t.div = up, t.exp = dp, t.floor = vp, t.hypot = fp, t.ln = cp, t.log = mp, t.log10 = pp, t.log2 = hp, t.max = gp, t.min = bp, t.mod = yp, t.mul = wp, t.pow = Cp, t.random = Sp, t.round = kp, t.sign = $p, t.sin = Tp, t.sinh = Op, t.sqrt = Pp, t.sub = Mp, t.sum = Ip, t.tan = Bp, t.tanh = Ep, t.trunc = Np, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function up(e, n) {
  return new this(e).div(n);
}
function dp(e) {
  return new this(e).exp();
}
function vp(e) {
  return he(e = new this(e), e.e + 1, 3);
}
function fp() {
  var e, n, r = new this(0);
  for (we = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return we = !0, new this(1 / 0);
      r = n;
    }
  return we = !0, r.sqrt();
}
function zl(e) {
  return e instanceof ur || e && e.toStringTag === Ku || !1;
}
function cp(e) {
  return new this(e).ln();
}
function mp(e, n) {
  return new this(e).log(n);
}
function hp(e) {
  return new this(e).log(2);
}
function pp(e) {
  return new this(e).log(10);
}
function gp() {
  return _u(this, arguments, "lt");
}
function bp() {
  return _u(this, arguments, "gt");
}
function yp(e, n) {
  return new this(e).mod(n);
}
function wp(e, n) {
  return new this(e).mul(n);
}
function Cp(e, n) {
  return new this(e).pow(n);
}
function Sp(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : gn(e, 1, Cr), a = Math.ceil(e / pe), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Xu);
  else
    for (; o < a; )
      l[o++] = Math.random() * 1e7 | 0;
  for (a = l[--o], e %= pe, a && e && (t = Je(10, pe - e), l[o] = (a / t | 0) * t); l[o] === 0; o--)
    l.pop();
  if (o < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= pe)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < pe && (r -= pe - a);
  }
  return i.e = r, i.d = l, i;
}
function kp(e) {
  return he(e = new this(e), e.e + 1, this.rounding);
}
function $p(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Tp(e) {
  return new this(e).sin();
}
function Op(e) {
  return new this(e).sinh();
}
function Pp(e) {
  return new this(e).sqrt();
}
function Mp(e, n) {
  return new this(e).sub(n);
}
function Ip() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (we = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return we = !0, he(r, this.precision, this.rounding);
}
function Bp(e) {
  return new this(e).tan();
}
function Ep(e) {
  return new this(e).tanh();
}
function Np(e) {
  return he(e = new this(e), e.e + 1, 1);
}
Z[Symbol.for("nodejs.util.inspect.custom")] = Z.toString;
Z[Symbol.toStringTag] = "Decimal";
var ur = Z.constructor = nd(di);
oo = new ur(oo);
io = new ur(io);
var Dp = {
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
  onBeforeChange: U(),
  onChange: U(),
  onIncrement: U(),
  onDecrement: U(),
  "onUpdate:modelValue": U()
}, Ll = 100, Rl = 600, {
  name: Vp,
  n: Ap,
  classes: zp
} = re("counter"), Lp = ["inputmode", "readonly", "disabled"];
function Rp(e, n) {
  var r = le("var-icon"), a = le("var-button"), t = le("var-form-details");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      Re({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Q(a, {
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
        default: me(() => [Q(r, {
          name: "minus"
        })]),
        _: 1
        /* STABLE */
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), Me(D("input", {
        class: c(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
        style: W({
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
      }, null, 46, Lp), [[nf, e.inputValue]]), Q(a, {
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
        default: me(() => [Q(r, {
          name: "plus"
        })]),
        _: 1
        /* STABLE */
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])],
      16
      /* FULL_PROPS */
    ), Q(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var rd = ne({
  name: Vp,
  components: {
    VarButton: cn,
    VarIcon: Le,
    VarFormDetails: an
  },
  directives: {
    Ripple: Xe
  },
  inheritAttrs: !1,
  props: Dp,
  setup(e) {
    var n = S(""), {
      bindForm: r,
      form: a
    } = Bn(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: i,
      // expose
      resetValidation: l
    } = In(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d = L(() => {
      var {
        max: H,
        modelValue: X
      } = e;
      return H != null && R(X) >= R(H);
    }), v = L(() => {
      var {
        min: H,
        modelValue: X
      } = e;
      return H != null && R(X) <= R(H);
    }), f, m, p, b, g = {
      reset: T,
      validate: w,
      resetValidation: l
    };
    y(r, g), fe(() => e.modelValue, (H) => {
      _(C(String(H))), y(e.onChange, R(H));
    }), _(C(String(e.modelValue)));
    function w() {
      return i(e.rules, e.modelValue);
    }
    function M(H) {
      Ye(() => {
        var {
          validateTrigger: X,
          rules: J,
          modelValue: $
        } = e;
        o(X, H, J, $);
      });
    }
    function T() {
      var {
        min: H
      } = e;
      y(e["onUpdate:modelValue"], H != null ? R(H) : 0), l();
    }
    function C(H) {
      var {
        decimalLength: X,
        max: J,
        min: $
      } = e, B = R(H);
      return J != null && B > R(J) && (B = R(J)), $ != null && B < R($) && (B = R($)), H = String(B), X != null && (H = B.toFixed(R(X))), H;
    }
    function O(H) {
      var {
        lazyChange: X,
        onBeforeChange: J
      } = e, {
        value: $
      } = H.target, B = C($);
      X ? y(J, R(B), ae) : _(B), M("onInputChange");
    }
    function E() {
      var {
        disabled: H,
        readonly: X,
        disableDecrement: J,
        decrementButton: $,
        lazyChange: B,
        step: q,
        modelValue: j,
        onDecrement: F,
        onBeforeChange: G
      } = e;
      if (!(u != null && u.value || s != null && s.value || H || X || J || !$) && !v.value) {
        var ee = new ur(R(j)).minus(new ur(R(q))).toString(), ce = C(ee), Ce = R(ce);
        y(F, Ce), B ? y(G, Ce, ae) : (_(ce), M("onDecrement"));
      }
    }
    function A() {
      var {
        disabled: H,
        readonly: X,
        disableIncrement: J,
        incrementButton: $,
        lazyChange: B,
        step: q,
        modelValue: j,
        onIncrement: F,
        onBeforeChange: G
      } = e;
      if (!(u != null && u.value || s != null && s.value || H || X || J || !$) && !d.value) {
        var ee = new ur(R(j)).plus(new ur(R(q))).toString(), ce = C(ee), Ce = R(ce);
        y(F, Ce), B ? y(G, Ce, ae) : (_(ce), M("onIncrement"));
      }
    }
    function P() {
      var {
        press: H,
        lazyChange: X
      } = e;
      !H || X || (b = window.setTimeout(() => {
        K();
      }, Rl));
    }
    function I() {
      var {
        press: H,
        lazyChange: X
      } = e;
      !H || X || (p = window.setTimeout(() => {
        z();
      }, Rl));
    }
    function N() {
      m && clearTimeout(m), b && clearTimeout(b);
    }
    function V() {
      f && clearTimeout(f), p && clearTimeout(p);
    }
    function z() {
      f = window.setTimeout(() => {
        A(), z();
      }, Ll);
    }
    function K() {
      m = window.setTimeout(() => {
        E(), K();
      }, Ll);
    }
    function _(H) {
      n.value = H;
      var X = R(H);
      y(e["onUpdate:modelValue"], X);
    }
    function ae(H) {
      _(C(String(H))), M("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: v,
      n: Ap,
      classes: zp,
      formatElevation: bn,
      validate: w,
      reset: T,
      resetValidation: l,
      handleChange: O,
      decrement: E,
      increment: A,
      pressDecrement: P,
      pressIncrement: I,
      releaseDecrement: N,
      releaseIncrement: V,
      toSizeUnit: Se,
      toNumber: R
    };
  }
});
rd.render = Rp;
const Ua = rd;
oe(Ua);
var d$ = Ua, ad = 60, td = ad * 60, od = td * 24, Up = od * 7, Zr = 1e3, Ao = ad * Zr, Ul = td * Zr, Hp = od * Zr, Yp = Up * Zr, Qi = "millisecond", Ur = "second", Hr = "minute", Yr = "hour", rr = "day", Jt = "week", Dn = "month", id = "quarter", ar = "year", Fr = "date", Fp = "YYYY-MM-DDTHH:mm:ssZ", Hl = "Invalid Date", jp = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Wp = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Gp = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var mi = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, qp = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + mi(t, 2, "0") + ":" + mi(o, 2, "0");
}, Xp = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Dn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), Dn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, Kp = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Zp = function(n) {
  var r = {
    M: Dn,
    y: ar,
    w: Jt,
    d: rr,
    D: Fr,
    h: Yr,
    m: Hr,
    s: Ur,
    ms: Qi,
    Q: id
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Jp = function(n) {
  return n === void 0;
};
const Qp = {
  s: mi,
  z: qp,
  m: Xp,
  a: Kp,
  p: Zp,
  u: Jp
};
var fa = "en", $r = {};
$r[fa] = Gp;
var _i = function(n) {
  return n instanceof $o;
}, so = function e(n, r, a) {
  var t;
  if (!n)
    return fa;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    $r[o] && (t = o), r && ($r[o] = r, t = o);
    var i = n.split("-");
    if (!t && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    $r[l] = n, t = l;
  }
  return !a && t && (fa = t), t || !a && fa;
}, ve = function(n, r) {
  if (_i(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new $o(a);
}, _p = function(n, r) {
  return ve(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ae = Qp;
Ae.l = so;
Ae.i = _i;
Ae.w = _p;
var xp = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ae.u(r))
    return /* @__PURE__ */ new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(jp);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, $o = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = so(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = xp(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Ae;
  }, n.isValid = function() {
    return this.$d.toString() !== Hl;
  }, n.isSame = function(a, t) {
    var o = ve(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return ve(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < ve(a);
  }, n.$g = function(a, t, o) {
    return Ae.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, i = Ae.u(t) ? !0 : t, l = Ae.p(a), s = function(w, M) {
      var T = Ae.w(o.$u ? Date.UTC(o.$y, M, w) : new Date(o.$y, M, w), o);
      return i ? T : T.endOf(rr);
    }, u = function(w, M) {
      var T = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return Ae.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? T : C).slice(M)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case ar:
        return i ? s(1, 0) : s(31, 11);
      case Dn:
        return i ? s(1, v) : s(0, v + 1);
      case Jt: {
        var p = this.$locale().weekStart || 0, b = (d < p ? d + 7 : d) - p;
        return s(i ? f - b : f + (6 - b), v);
      }
      case rr:
      case Fr:
        return u(m + "Hours", 0);
      case Yr:
        return u(m + "Minutes", 1);
      case Hr:
        return u(m + "Seconds", 2);
      case Ur:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, i = Ae.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[rr] = l + "Date", o[Fr] = l + "Date", o[Dn] = l + "Month", o[ar] = l + "FullYear", o[Yr] = l + "Hours", o[Hr] = l + "Minutes", o[Ur] = l + "Seconds", o[Qi] = l + "Milliseconds", o)[i], u = i === rr ? this.$D + (t - this.$W) : t;
    if (i === Dn || i === ar) {
      var d = this.clone().set(Fr, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Fr, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Ae.p(a)]();
  }, n.add = function(a, t) {
    var o = this, i;
    a = Number(a);
    var l = Ae.p(t), s = function(f) {
      var m = ve(o);
      return Ae.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (l === Dn)
      return this.set(Dn, this.$M + a);
    if (l === ar)
      return this.set(ar, this.$y + a);
    if (l === rr)
      return s(1);
    if (l === Jt)
      return s(7);
    var u = (i = {}, i[Hr] = Ao, i[Yr] = Ul, i[Ur] = Zr, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Ae.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Hl;
    var i = a || Fp, l = Ae.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, p = function(T, C, O, E) {
      return T && (T[C] || T(t, i)) || O[C].slice(0, E);
    }, b = function(T) {
      return Ae.s(s % 12 || 12, T, "0");
    }, g = m || function(M, T, C) {
      var O = M < 12 ? "AM" : "PM";
      return C ? O.toLowerCase() : O;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Ae.s(d + 1, 2, "0"),
      MMM: p(o.monthsShort, d, f, 3),
      MMMM: p(f, d),
      D: this.$D,
      DD: Ae.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(o.weekdaysMin, this.$W, v, 2),
      ddd: p(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Ae.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
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
    return i.replace(Wp, function(M, T) {
      return T || w[M] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Ae.p(t), s = ve(a), u = (s.utcOffset() - this.utcOffset()) * Ao, d = this - s, v = Ae.m(this, s);
    return v = (i = {}, i[ar] = v / 12, i[Dn] = v, i[id] = v / 3, i[Jt] = (d - u) / Yp, i[rr] = (d - u) / Hp, i[Yr] = d / Ul, i[Hr] = d / Ao, i[Ur] = d / Zr, i)[l] || d, o ? v : Ae.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Dn).$D;
  }, n.$locale = function() {
    return $r[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), i = so(a, t, !0);
    return i && (o.$L = i), o;
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
}(), ld = $o.prototype;
ve.prototype = ld;
[["$ms", Qi], ["$s", Ur], ["$m", Hr], ["$H", Yr], ["$W", rr], ["$M", Dn], ["$y", ar], ["$D", Fr]].forEach(function(e) {
  ld[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ve.extend = function(e, n) {
  return e.$i || (e(n, $o, ve), e.$i = !0), ve;
};
ve.locale = so;
ve.isDayjs = _i;
ve.unix = function(e) {
  return ve(e * 1e3);
};
ve.en = $r[fa];
ve.Ls = $r;
ve.p = {};
const sd = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, ud = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
var Qt = [{
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
}], da = [{
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
}], eg = {
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
  onPreview: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: ng
} = re("picker-header");
function rg(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [Q(a, {
      round: "",
      text: "",
      style: {
        filter: "opacity(0.54)"
      },
      disabled: e.disabled.left,
      onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
    }, {
      default: me(() => [Q(r, {
        name: "chevron-left"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"]), D(
      "div",
      {
        class: c(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [Q(We, {
        name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: me(() => [(h(), k(
          "div",
          {
            key: e.showDate
          },
          ie(e.showDate),
          1
          /* TEXT */
        ))]),
        _: 1
        /* STABLE */
      }, 8, ["name"])],
      2
      /* CLASS */
    ), Q(a, {
      round: "",
      text: "",
      style: {
        filter: "opacity(0.54)"
      },
      disabled: e.disabled.right,
      onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
    }, {
      default: me(() => [Q(r, {
        name: "chevron-right"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])],
    2
    /* CLASS */
  );
}
var dd = ne({
  name: "PanelHeader",
  components: {
    VarButton: cn,
    VarIcon: Le
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
    } = n, a = S(!1), t = S(0), o = L(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return R(v) + t.value;
      var f = (l = xe.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return xe.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return fe(() => e.date, () => {
      t.value = 0;
    }), {
      n: ng,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
dd.render = rg;
const vd = dd;
function hi() {
  return hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, hi.apply(this, arguments);
}
ve.extend(sd);
ve.extend(ud);
var {
  n: Yt,
  classes: ag
} = re("month-picker"), {
  n: Ft
} = re("date-picker");
function tg(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n("content"))
      },
      [Q(r, {
        ref: "headerEl",
        type: "month",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickYear,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), Q(We, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: me(() => [(h(), k("ul", {
          key: e.panelKey
        }, [(h(!0), k(
          Ve,
          null,
          Ge(e.MONTH_LIST, (t) => (h(), k("li", {
            key: t.index
          }, [Q(a, Re({
            type: "primary",
            "var-month-picker-cover": "",
            ripple: !1,
            elevation: e.componentProps.buttonElevation
          }, hi({}, e.buttonProps(t.index)), {
            onClick: (o) => e.chooseMonth(t, o)
          }), {
            default: me(() => [Pe(
              ie(e.getMonthAbbr(t.index)),
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
var fd = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: cn,
    PanelHeader: vd
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
    } = n, [a, t] = e.current.split("-"), o = S(!1), i = S(0), l = S(null), s = Fe({
      left: !1,
      right: !1
    }), u = L(() => e.choose.chooseYear === e.preview.previewYear), d = L(() => e.preview.previewYear === a), v = (M) => {
      var T, C;
      return (T = (C = xe.value.datePickerMonthDict) == null ? void 0 : C[M].abbr) != null ? T : "";
    }, f = (M) => {
      var {
        preview: {
          previewYear: T
        },
        componentProps: {
          min: C,
          max: O
        }
      } = e, E = !0, A = !0, P = T + "-" + M;
      return O && (E = ve(P).isSameOrBefore(ve(O), "month")), C && (A = ve(P).isSameOrAfter(ve(C), "month")), E && A;
    }, m = (M) => {
      var {
        choose: {
          chooseMonths: T,
          chooseDays: C,
          chooseRangeMonth: O
        },
        componentProps: {
          type: E,
          range: A
        }
      } = e;
      if (A) {
        if (!O.length)
          return !1;
        var P = ve(M).isSameOrBefore(ve(O[1]), "month"), I = ve(M).isSameOrAfter(ve(O[0]), "month");
        return P && I;
      }
      return E === "month" ? T.includes(M) : C.some((N) => N.includes(M));
    }, p = (M) => {
      var {
        choose: {
          chooseMonth: T
        },
        preview: {
          previewYear: C
        },
        componentProps: {
          allowedDates: O,
          color: E,
          multiple: A,
          range: P
        }
      } = e, I = C + "-" + M, N = () => P || A ? m(I) : (T == null ? void 0 : T.index) === M && u.value, V = () => f(M) ? O ? !O(I) : !1 : !0, z = V(), K = () => z ? !0 : P || A ? !m(I) : !u.value || (T == null ? void 0 : T.index) !== M, _ = () => d.value && t === M && e.componentProps.showCurrent ? (P || A || u.value) && z ? !0 : P || A ? !m(I) : u.value ? (T == null ? void 0 : T.index) !== t : !0 : !1, ae = () => z ? "" : _() ? E ?? "" : N() ? "" : Ft() + "-color-cover", H = ae().startsWith(Ft());
      return {
        outline: _(),
        text: K(),
        color: K() ? "" : E,
        textColor: H ? "" : ae(),
        [Ft() + "-color-cover"]: H,
        class: ag(Yt("button"), [z, Yt("button--disabled")]),
        disabled: z
      };
    }, b = (M, T) => {
      var C = T.currentTarget;
      C.classList.contains(Yt("button--disabled")) || r("choose-month", M);
    }, g = (M) => {
      o.value = M === "prev", i.value += M === "prev" ? -1 : 1, r("check-preview", "year", M);
    }, w = (M) => {
      l.value.checkDate(M);
    };
    return fe(() => e.preview.previewYear, (M) => {
      var {
        componentProps: {
          min: T,
          max: C
        }
      } = e;
      C && (s.right = !ve("" + (R(M) + 1)).isSameOrBefore(ve(C), "year")), T && (s.left = !ve("" + (R(M) - 1)).isSameOrAfter(ve(T), "year"));
    }, {
      immediate: !0
    }), {
      n: Yt,
      nDate: Ft,
      pack: xe,
      MONTH_LIST: Qt,
      headerEl: l,
      reverse: o,
      panelKey: i,
      panelBtnDisabled: s,
      forwardRef: w,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: g
    };
  }
});
fd.render = tg;
const og = fd;
var {
  n: Yl,
  classes: ig
} = re("year-picker"), lg = ["onClick"];
function sg(e, n) {
  return h(), k(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), k(
      Ve,
      null,
      Ge(e.yearList, (r) => (h(), k("li", {
        key: r,
        class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
        style: W({
          color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
        }),
        onClick: (a) => e.chooseYear(r)
      }, ie(r), 15, lg))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var cd = ne({
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
    } = n, a = L(() => {
      var o = [], {
        preview: i,
        componentProps: {
          max: l,
          min: s
        }
      } = e;
      if (!i)
        return o;
      var u = [R(i) + 100, R(i) - 100];
      if (l) {
        var d = ve(l).format("YYYY-MM-D"), v = R(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = ve(s).format("YYYY-MM-D"), m = R(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var p = u[0]; p >= u[1]; p--)
        o.push(p);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return on(() => {
      var o = document.querySelector("." + Yl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Yl,
      classes: ig,
      yearList: a,
      chooseYear: t,
      toNumber: R
    };
  }
});
cd.render = sg;
const ug = cd;
function pi() {
  return pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, pi.apply(this, arguments);
}
ve.extend(sd);
ve.extend(ud);
var {
  n: zr,
  classes: dg
} = re("day-picker"), {
  n: jt
} = re("date-picker");
function vg(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n("content"))
      },
      [Q(r, {
        ref: "headerEl",
        type: "day",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickMonth,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), Q(We, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: me(() => [(h(), k("div", {
          key: e.panelKey
        }, [D(
          "ul",
          {
            class: c(e.n("head"))
          },
          [(h(!0), k(
            Ve,
            null,
            Ge(e.sortWeekList, (t) => (h(), k(
              "li",
              {
                key: t.index
              },
              ie(e.getDayAbbr(t.index)),
              1
              /* TEXT */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        ), D(
          "ul",
          {
            class: c(e.n("body"))
          },
          [(h(!0), k(
            Ve,
            null,
            Ge(e.days, (t, o) => (h(), k("li", {
              key: o
            }, [Q(a, Re({
              type: "primary",
              "var-day-picker-cover": "",
              round: "",
              ripple: !1,
              elevation: e.componentProps.buttonElevation
            }, pi({}, e.buttonProps(t)), {
              onClick: (i) => e.chooseDay(t, i)
            }), {
              default: me(() => [Pe(
                ie(e.filterDay(t)),
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
var md = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: cn,
    PanelHeader: vd
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
    } = n, [a, t, o] = e.current.split("-"), i = S([]), l = S(!1), s = S(0), u = S(null), d = Fe({
      left: !1,
      right: !1
    }), v = L(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = L(() => {
      var P;
      return e.choose.chooseYear === e.preview.previewYear && ((P = e.choose.chooseMonth) == null ? void 0 : P.index) === e.preview.previewMonth.index;
    }), m = L(() => {
      var P = da.findIndex((I) => I.index === e.componentProps.firstDayOfWeek);
      return P === -1 || P === 0 ? da : da.slice(P).concat(da.slice(0, P));
    }), p = (P) => {
      var I, N;
      return (I = (N = xe.value.datePickerWeekDict) == null ? void 0 : N[P].abbr) != null ? I : "";
    }, b = (P) => P > 0 ? P : "", g = () => {
      var {
        preview: {
          previewMonth: P,
          previewYear: I
        }
      } = e, N = ve(I + "-" + P.index).daysInMonth(), V = ve(I + "-" + P.index + "-01").day(), z = m.value.findIndex((K) => K.index === "" + V);
      i.value = [...Array(z).fill(-1), ...Array.from(Array(N + 1).keys())].filter((K) => K);
    }, w = () => {
      var {
        preview: {
          previewYear: P,
          previewMonth: I
        },
        componentProps: {
          max: N,
          min: V
        }
      } = e;
      if (N) {
        var z = P + "-" + (R(I.index) + 1);
        d.right = !ve(z).isSameOrBefore(ve(N), "month");
      }
      if (V) {
        var K = P + "-" + (R(I.index) - 1);
        d.left = !ve(K).isSameOrAfter(ve(V), "month");
      }
    }, M = (P) => {
      var {
        preview: {
          previewYear: I,
          previewMonth: N
        },
        componentProps: {
          min: V,
          max: z
        }
      } = e, K = !0, _ = !0, ae = I + "-" + N.index + "-" + P;
      return z && (K = ve(ae).isSameOrBefore(ve(z), "day")), V && (_ = ve(ae).isSameOrAfter(ve(V), "day")), K && _;
    }, T = (P) => {
      var {
        choose: {
          chooseDays: I,
          chooseRangeDay: N
        },
        componentProps: {
          range: V
        }
      } = e;
      if (V) {
        if (!N.length)
          return !1;
        var z = ve(P).isSameOrBefore(ve(N[1]), "day"), K = ve(P).isSameOrAfter(ve(N[0]), "day");
        return z && K;
      }
      return I.includes(P);
    }, C = (P) => {
      if (P < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: zr("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: I
        },
        preview: {
          previewYear: N,
          previewMonth: V
        },
        componentProps: {
          allowedDates: z,
          color: K,
          multiple: _,
          range: ae
        }
      } = e, H = N + "-" + V.index + "-" + P, X = () => ae || _ ? T(H) : R(I) === P && f.value, J = () => M(P) ? z ? !z(H) : !1 : !0, $ = J(), B = () => $ ? !0 : ae || _ ? !T(H) : !f.value || R(I) !== P, q = () => v.value && R(o) === P && e.componentProps.showCurrent ? (ae || _ || f.value) && $ ? !0 : ae || _ ? !T(H) : f.value ? I !== o : !0 : !1, j = () => $ ? "" : q() ? K ?? "" : X() ? "" : jt() + "-color-cover", F = j().startsWith(jt());
      return {
        text: B(),
        outline: q(),
        textColor: F ? "" : j(),
        [jt() + "-color-cover"]: F,
        class: dg(zr("button"), zr("button--usable"), [$, zr("button--disabled")]),
        disabled: $
      };
    }, O = (P) => {
      l.value = P === "prev", s.value += P === "prev" ? -1 : 1, r("check-preview", "month", P);
    }, E = (P, I) => {
      var N = I.currentTarget;
      N.classList.contains(zr("button--disabled")) || r("choose-day", P);
    }, A = (P) => {
      u.value.checkDate(P);
    };
    return on(() => {
      g(), w();
    }), fe(() => e.preview, () => {
      g(), w();
    }), {
      n: zr,
      nDate: jt,
      days: i,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: A,
      filterDay: b,
      getDayAbbr: p,
      checkDate: O,
      chooseDay: E,
      buttonProps: C
    };
  }
});
md.render = vg;
const fg = md;
function Fl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function cg(e) {
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
  name: mg,
  n: hg,
  classes: pg
} = re("date-picker");
function gg(e, n) {
  var r = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [D(
      "div",
      {
        class: c(e.n("title")),
        style: W({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [Y(e.$slots, "year", {
          year: e.chooseYear
        }, () => [Pe(
          ie(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (o) => e.clickEl("date"))
        },
        [Q(We, {
          name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
        }, {
          default: me(() => {
            var o, i, l;
            return [e.type === "month" ? (h(), k("div", {
              key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
            }, [e.range ? Y(e.$slots, "range", {
              key: 0,
              choose: e.getChoose.chooseRangeMonth
            }, () => [Pe(
              ie(e.getMonthTitle),
              1
              /* TEXT */
            )]) : e.multiple ? Y(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseMonths
            }, () => [Pe(
              ie(e.getMonthTitle),
              1
              /* TEXT */
            )]) : Y(e.$slots, "month", {
              key: 2,
              month: (i = e.chooseMonth) == null ? void 0 : i.index,
              year: e.chooseYear
            }, () => [Pe(
              ie(e.getMonthTitle),
              1
              /* TEXT */
            )])])) : (h(), k("div", {
              key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
            }, [e.range ? Y(e.$slots, "range", {
              key: 0,
              choose: e.formatRange
            }, () => [Pe(
              ie(e.getDateTitle),
              1
              /* TEXT */
            )]) : e.multiple ? Y(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseDays
            }, () => [Pe(
              ie(e.getDateTitle),
              1
              /* TEXT */
            )]) : Y(e.$slots, "date", It(Re({
              key: 2
            }, e.slotProps)), () => [Pe(
              ie(e.getDateTitle),
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
    ), D(
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
      [Q(We, {
        name: e.n() + "-panel-fade"
      }, {
        default: me(() => [e.getPanelType === "year" ? (h(), ke(r, {
          key: 0,
          "component-props": e.componentProps,
          preview: e.previewYear,
          onChooseYear: e.getChooseYear
        }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), ke(a, {
          key: 1,
          ref: "monthPanelEl",
          current: e.currentDate,
          choose: e.getChoose,
          preview: e.getPreview,
          "click-year": () => e.clickEl("year"),
          "component-props": e.componentProps,
          onChooseMonth: e.getChooseMonth,
          onCheckPreview: e.checkPreview
        }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (h(), ke(t, {
          key: 2,
          ref: "dayPanelEl",
          current: e.currentDate,
          choose: e.getChoose,
          preview: e.getPreview,
          "component-props": e.componentProps,
          "click-month": () => e.clickEl("month"),
          onChooseDay: e.getChooseDay,
          onCheckPreview: e.checkPreview
        }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : x("v-if", !0)]),
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
var hd = ne({
  name: mg,
  components: {
    MonthPickerPanel: og,
    YearPickerPanel: ug,
    DayPickerPanel: fg
  },
  props: eg,
  setup(e) {
    var n = ve().format("YYYY-MM-D"), [r, a] = n.split("-"), t = Qt.find((se) => se.index === a), o = S(!1), i = S(!1), l = S(!0), s = S(), u = S(), d = S(), v = S(t), f = S(r), m = S(!1), p = S([]), b = S([]), g = S([]), w = S([]), M = S(null), T = S(null), C = Fe({
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
    }), O = L(() => ({
      chooseMonth: s.value,
      chooseYear: u.value,
      chooseDay: d.value,
      chooseMonths: p.value,
      chooseDays: b.value,
      chooseRangeMonth: g.value,
      chooseRangeDay: w.value
    })), E = L(() => ({
      previewMonth: v.value,
      previewYear: f.value
    })), A = L(() => {
      var {
        multiple: se,
        range: be
      } = e;
      if (be)
        return g.value.length ? g.value[0] + " ~ " + g.value[1] : "";
      var ye = "";
      if (s.value) {
        var Be, Ne;
        ye = (Be = (Ne = xe.value.datePickerMonthDict) == null ? void 0 : Ne[s.value.index].name) != null ? Be : "";
      }
      return se ? "" + p.value.length + xe.value.datePickerSelected : ye;
    }), P = L(() => {
      var se, be, ye, Be, {
        multiple: Ne,
        range: Ke
      } = e;
      if (Ke) {
        var un = w.value.map((No) => ve(No).format("YYYY-MM-DD"));
        return un.length ? un[0] + " ~ " + un[1] : "";
      }
      if (Ne)
        return "" + b.value.length + xe.value.datePickerSelected;
      if (!u.value || !s.value || !d.value)
        return "";
      var kn = ve(u.value + "-" + s.value.index + "-" + d.value).day(), Ar = da.find((No) => No.index === "" + kn), ul = (se = (be = xe.value.datePickerWeekDict) == null ? void 0 : be[Ar.index].name) != null ? se : "", Xv = (ye = (Be = xe.value.datePickerMonthDict) == null ? void 0 : Be[s.value.index].name) != null ? ye : "", Kv = Tr(d.value, 2, "0");
      return xe.value.lang === "zh-CN" ? s.value.index + "-" + Kv + " " + ul.slice(0, 3) : ul.slice(0, 3) + ", " + Xv.slice(0, 3) + " " + d.value;
    }), I = L(() => o.value ? "year" : e.type === "month" || i.value ? "month" : e.type === "date" ? "date" : ""), N = L(() => !e.touchable || ["", "year"].includes(I.value)), V = L(() => {
      var se, be, ye, Be, Ne = ve(u.value + "-" + ((se = s.value) == null ? void 0 : se.index) + "-" + d.value).day(), Ke = d.value ? Tr(d.value, 2, "0") : "";
      return {
        week: "" + Ne,
        year: (be = u.value) != null ? be : "",
        month: (ye = (Be = s.value) == null ? void 0 : Be.index) != null ? ye : "",
        date: Ke
      };
    }), z = L(() => O.value.chooseRangeDay.map((se) => ve(se).format("YYYY-MM-DD"))), K = L(() => u.value === f.value), _ = L(() => {
      var se;
      return ((se = s.value) == null ? void 0 : se.index) === v.value.index;
    }), ae = 0, H = 0, X = "", J;
    fe(() => e.modelValue, (se) => {
      if (!(!$e() || je(se) || !se))
        if (e.range) {
          if (!De(se))
            return;
          l.value = se.length !== 1, ue(se, e.type);
        } else if (e.multiple) {
          if (!De(se))
            return;
          Te(se, e.type);
        } else
          Ie(se);
    }, {
      immediate: !0
    }), fe(I, Oe);
    function $(se) {
      se === "year" ? o.value = !0 : se === "month" ? i.value = !0 : (o.value = !1, i.value = !1);
    }
    function B(se) {
      if (!N.value) {
        var {
          clientX: be,
          clientY: ye
        } = se.touches[0];
        ae = be, H = ye;
      }
    }
    function q(se, be) {
      return se >= be && se > 20 ? "x" : "y";
    }
    function j(se) {
      if (!N.value) {
        var {
          clientX: be,
          clientY: ye
        } = se.touches[0], Be = be - ae, Ne = ye - H;
        J = q(Math.abs(Be), Math.abs(Ne)), X = Be > 0 ? "prev" : "next";
      }
    }
    function F() {
      return G.apply(this, arguments);
    }
    function G() {
      return G = cg(function* () {
        if (!(N.value || J !== "x")) {
          var se = I.value === "month" ? M : T;
          yield fn(), se.value.forwardRef(X), Oe();
        }
      }), G.apply(this, arguments);
    }
    function ee(se, be) {
      var ye = be === "month" ? g : w;
      if (ye.value = l.value ? [se, se] : [ye.value[0], se], l.value = !l.value, l.value) {
        var Be = ve(ye.value[0]).isAfter(ye.value[1]), Ne = Be ? [ye.value[1], ye.value[0]] : [...ye.value];
        y(e["onUpdate:modelValue"], Ne), y(e.onChange, Ne);
      }
    }
    function ce(se, be) {
      var ye = be === "month" ? p : b, Be = be === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ne = ye.value.map((un) => ve(un).format(Be)), Ke = Ne.findIndex((un) => un === se);
      Ke === -1 ? Ne.push(se) : Ne.splice(Ke, 1), y(e["onUpdate:modelValue"], Ne), y(e.onChange, Ne);
    }
    function Ce(se, be) {
      return !u.value || !s.value ? !1 : K.value ? se === "month" ? be.index < s.value.index : _.value ? be < R(d.value) : s.value.index > v.value.index : u.value > f.value;
    }
    function Ee(se) {
      var {
        readonly: be,
        range: ye,
        multiple: Be,
        onChange: Ne,
        "onUpdate:modelValue": Ke
      } = e;
      if (!(se < 0 || be)) {
        m.value = Ce("day", se);
        var un = f.value + "-" + v.value.index + "-" + se, kn = ve(un).format("YYYY-MM-DD");
        ye ? ee(kn, "day") : Be ? ce(kn, "day") : (y(Ke, kn), y(Ne, kn));
      }
    }
    function te(se) {
      var {
        type: be,
        readonly: ye,
        range: Be,
        multiple: Ne,
        onChange: Ke,
        onPreview: un,
        "onUpdate:modelValue": kn
      } = e;
      if (m.value = Ce("month", se), be === "month" && !ye) {
        var Ar = f.value + "-" + se.index;
        Be ? ee(Ar, "month") : Ne ? ce(Ar, "month") : (y(kn, Ar), y(Ke, Ar));
      } else
        v.value = se, y(un, R(f.value), R(v.value.index));
      i.value = !1;
    }
    function de(se) {
      f.value = "" + se, o.value = !1, i.value = !0, y(e.onPreview, R(f.value), R(v.value.index));
    }
    function ge(se, be) {
      var ye = be === "prev" ? -1 : 1;
      if (se === "year")
        f.value = "" + (R(f.value) + ye);
      else {
        var Be = R(v.value.index) + ye;
        Be < 1 && (f.value = "" + (R(f.value) - 1), Be = 12), Be > 12 && (f.value = "" + (R(f.value) + 1), Be = 1), v.value = Qt.find((Ne) => R(Ne.index) === Be);
      }
      y(e.onPreview, R(f.value), R(v.value.index));
    }
    function $e() {
      return (e.multiple || e.range) && !De(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && De(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function je(se) {
      return De(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function ue(se, be) {
      var ye = be === "month" ? g : w, Be = be === "month" ? "YYYY-MM" : "YYYY-MM-D", Ne = se.map((kn) => ve(kn).format(Be)).slice(0, 2), Ke = ye.value.some((kn) => je(kn));
      if (!Ke) {
        ye.value = Ne;
        var un = ve(ye.value[0]).isAfter(ye.value[1]);
        ye.value.length === 2 && un && (ye.value = [ye.value[1], ye.value[0]]);
      }
    }
    function Te(se, be) {
      var ye = be === "month" ? p : b, Be = be === "month" ? "YYYY-MM" : "YYYY-MM-D", Ne = Array.from(new Set(se.map((Ke) => ve(Ke).format(Be))));
      ye.value = Ne.filter((Ke) => Ke !== "Invalid Date");
    }
    function Ie(se) {
      var be = ve(se).format("YYYY-MM-D");
      if (!je(be)) {
        var [ye, Be, Ne] = be.split("-"), Ke = Qt.find((un) => un.index === Be);
        s.value = Ke, u.value = ye, d.value = Ne, v.value = Ke, f.value = ye;
      }
    }
    function Oe() {
      H = 0, ae = 0, X = "", J = void 0;
    }
    return {
      monthPanelEl: M,
      dayPanelEl: T,
      reverse: m,
      currentDate: n,
      chooseMonth: s,
      chooseYear: u,
      chooseDay: d,
      previewYear: f,
      isYearPanel: o,
      isMonthPanel: i,
      getMonthTitle: A,
      getDateTitle: P,
      getPanelType: I,
      getChoose: O,
      getPreview: E,
      componentProps: C,
      slotProps: V,
      formatRange: z,
      n: hg,
      classes: pg,
      clickEl: $,
      handleTouchstart: B,
      handleTouchmove: j,
      handleTouchend: F,
      getChooseDay: Ee,
      getChooseMonth: te,
      getChooseYear: de,
      checkPreview: ge,
      formatElevation: bn
    };
  }
});
hd.render = gg;
const Ha = hd;
oe(Ha);
var v$ = Ha;
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
var bg = gi({
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
  onBeforeClose: U(),
  onConfirm: U(),
  onCancel: U(),
  "onUpdate:show": U()
}, en(Et, [
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
function bi() {
  return bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, bi.apply(this, arguments);
}
var {
  name: yg,
  n: wg,
  classes: Cg
} = re("dialog");
function Sg(e, n) {
  var r = le("var-button"), a = le("var-popup");
  return h(), ke(a, {
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
    default: me(() => [D(
      "div",
      Re({
        class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
        style: bi({
          width: e.toSizeUnit(e.width)
        }, e.dialogStyle)
      }, e.$attrs),
      [D(
        "div",
        {
          class: c(e.n("title"))
        },
        [Y(e.$slots, "title", {}, () => {
          var t;
          return [Pe(
            ie((t = e.title) != null ? t : e.pack.dialogTitle),
            1
            /* TEXT */
          )];
        })],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: c(e.n("message")),
          style: W({
            textAlign: e.messageAlign
          })
        },
        [Y(e.$slots, "default", {}, () => [Pe(
          ie(e.message),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      ), D(
        "div",
        {
          class: c(e.n("actions"))
        },
        [e.cancelButton ? (h(), ke(r, {
          key: 0,
          class: c(e.classes(e.n("button"), e.n("cancel-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.cancelButtonTextColor,
          color: e.cancelButtonColor,
          onClick: e.cancel
        }, {
          default: me(() => {
            var t;
            return [Pe(
              ie((t = e.cancelButtonText) != null ? t : e.pack.dialogCancelButtonText),
              1
              /* TEXT */
            )];
          }),
          _: 1
          /* STABLE */
        }, 8, ["class", "text-color", "color", "onClick"])) : x("v-if", !0), e.confirmButton ? (h(), ke(r, {
          key: 1,
          class: c(e.classes(e.n("button"), e.n("confirm-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.confirmButtonTextColor,
          color: e.confirmButtonColor,
          onClick: e.confirm
        }, {
          default: me(() => {
            var t;
            return [Pe(
              ie((t = e.confirmButtonText) != null ? t : e.pack.dialogConfirmButtonText),
              1
              /* TEXT */
            )];
          }),
          _: 1
          /* STABLE */
        }, 8, ["class", "text-color", "color", "onClick"])) : x("v-if", !0)],
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
var pd = ne({
  name: yg,
  components: {
    VarPopup: Hn,
    VarButton: cn
  },
  inheritAttrs: !1,
  props: bg,
  setup(e) {
    var n = S(!1), r = S(!1);
    fe(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), fe(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    });
    function a() {
      return y(e["onUpdate:show"], !1);
    }
    function t() {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (y(s), !!l) {
        if (u != null) {
          y(u, "close", a);
          return;
        }
        y(e["onUpdate:show"], !1);
      }
    }
    function o() {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (y(s), l != null) {
        y(l, "confirm", a);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    function i() {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (y(s), l != null) {
        y(l, "cancel", a);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    return {
      pack: xe,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      n: wg,
      classes: Cg,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: Se
    };
  }
});
pd.render = Sg;
const At = pd;
function uo() {
  return uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, uo.apply(this, arguments);
}
var or, vo = {};
function kg(e) {
  return e === void 0 && (e = {}), Qe(e) ? uo({}, vo, {
    message: e
  }) : uo({}, vo, e);
}
function Zn(e) {
  return wr() ? new Promise((n) => {
    Zn.close();
    var r = kg(e), a = Fe(r);
    a.teleport = "body", or = a;
    var {
      unmountInstance: t
    } = ia(At, a, {
      onConfirm: () => {
        y(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        y(a.onCancel), n("cancel");
      },
      onClose: () => {
        y(a.onClose), n("close");
      },
      onClosed: () => {
        y(a.onClosed), t(), or === a && (or = null);
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
Zn.setDefaultOptions = function(e) {
  vo = e;
};
Zn.resetDefaultOptions = function() {
  vo = {};
};
Zn.close = function() {
  if (or != null) {
    var e = or;
    or = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
Zn.Component = At;
oe(At);
oe(At, Zn);
var f$ = At, $g = {
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
  name: Tg,
  n: Og,
  classes: Pg
} = re("divider");
function Mg(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: W(e.style)
    },
    [e.vertical ? x("v-if", !0) : Y(e.$slots, "default", {
      key: 0
    }, () => [e.description ? (h(), k(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ie(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var gd = ne({
  name: Tg,
  props: $g,
  setup(e, n) {
    var {
      slots: r
    } = n, a = S(!1), t = L(() => {
      var {
        vertical: l,
        inset: s
      } = e;
      return !l && s === !0;
    }), o = L(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e;
      if (Ai(l) || s)
        return {
          margin: u
        };
      var d = R(l), v = Math.abs(d) + (l + "").replace(d + "", "");
      return {
        margin: u,
        width: "calc(100% - " + Se(v) + ")",
        left: d > 0 ? Se(v) : Se(0)
      };
    });
    on(i), Mt(i);
    function i() {
      var {
        description: l,
        vertical: s
      } = e;
      a.value = (r.default || l != null) && !s;
    }
    return {
      n: Og,
      classes: Pg,
      withText: a,
      style: o,
      withPresetInset: t
    };
  }
});
gd.render = Mg;
const Ya = gd;
oe(Ya);
var c$ = Ya, Ig = {
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
  onClick: U()
};
function fo() {
  return fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, fo.apply(this, arguments);
}
function jl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Bg(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        jl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        jl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  name: Eg,
  n: Ng,
  classes: Dg
} = re("drag");
function Vg(e, n) {
  return h(), ke(Qn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [D(
    "div",
    Re({
      ref: "drag",
      class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
      style: {
        "z-index": e.zIndex
      },
      onTouchstart: n[0] || (n[0] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      }),
      onTouchmove: n[1] || (n[1] = function() {
        return e.handleTouchmove && e.handleTouchmove(...arguments);
      }),
      onTouchend: n[2] || (n[2] = function() {
        return e.handleTouchend && e.handleTouchend(...arguments);
      }),
      onTouchcancel: n[3] || (n[3] = function() {
        return e.handleTouchend && e.handleTouchend(...arguments);
      }),
      onClick: n[4] || (n[4] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    }, e.getAttrs()),
    [Y(e.$slots, "default")],
    16
    /* FULL_PROPS */
  )], 8, ["to", "disabled"]);
}
var bd = ne({
  name: Eg,
  inheritAttrs: !1,
  props: Ig,
  setup(e, n) {
    var {
      attrs: r
    } = n, a = S(null), t = S(0), o = S(0), i = S(!1), l = S(!1), {
      touching: s,
      dragging: u,
      moveX: d,
      moveY: v,
      startTouch: f,
      moveTouch: m,
      endTouch: p,
      resetTouch: b
    } = po(), {
      disabled: g
    } = la(), w = Fe({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    fe(() => e.boundary, z), Bt(_), on(() => {
      z(), _();
    });
    function M(H) {
      e.disabled || (f(H), A());
    }
    function T(H) {
      return C.apply(this, arguments);
    }
    function C() {
      return C = Bg(function* (H) {
        !s.value || e.disabled || (m(H), H.preventDefault(), l.value = !1, i.value = !0, e.direction.includes("x") && (t.value += d.value), e.direction.includes("y") && (o.value += v.value), V());
      }), C.apply(this, arguments);
    }
    function O() {
      e.disabled || (p(), l.value = !0, N());
    }
    function E(H) {
      u.value || y(e.onClick, H);
    }
    function A() {
      var {
        left: H,
        top: X
      } = P();
      t.value = H, o.value = X;
    }
    function P() {
      var H = _e(a.value), X = _e(window), J = H.top - X.top, $ = X.bottom - H.bottom, B = H.left - X.left, q = X.right - H.right, {
        width: j,
        height: F
      } = H, {
        width: G,
        height: ee
      } = X;
      return {
        top: J,
        bottom: $,
        left: B,
        right: q,
        width: j,
        height: F,
        halfWidth: j / 2,
        halfHeight: F / 2,
        windowWidth: G,
        windowHeight: ee
      };
    }
    function I() {
      var H = P(), X = w.left, J = H.windowWidth - w.right - H.width, $ = w.top, B = H.windowHeight - w.bottom - H.height;
      return {
        minX: X,
        minY: $,
        // fallback the drag element overflows boundary
        maxX: X < J ? J : X,
        maxY: $ < B ? B : $
      };
    }
    function N() {
      if (e.attraction != null) {
        var {
          halfWidth: H,
          halfHeight: X,
          top: J,
          bottom: $,
          left: B,
          right: q
        } = P(), {
          minX: j,
          minY: F,
          maxX: G,
          maxY: ee
        } = I(), ce = B + H - w.left, Ce = q + H - w.right, Ee = J + X - w.top, te = $ + X - w.bottom, de = ce <= Ce, ge = Ee <= te;
        e.attraction.includes("x") && (t.value = de ? j : G), e.attraction.includes("y") && (o.value = ge ? F : ee);
      }
    }
    function V() {
      var {
        minX: H,
        minY: X,
        maxX: J,
        maxY: $
      } = I();
      t.value = vr(t.value, H, J), o.value = vr(o.value, X, $);
    }
    function z() {
      var {
        top: H = 0,
        bottom: X = 0,
        left: J = 0,
        right: $ = 0
      } = e.boundary;
      w.top = He(H), w.bottom = He(X), w.left = He(J), w.right = He($);
    }
    function K() {
      var H, X = (H = r.style) != null ? H : {};
      return fo({}, r, {
        style: fo({}, X, {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: i.value ? 0 : X.top,
          left: i.value ? 0 : X.left,
          right: i.value ? "auto" : X.right,
          bottom: i.value ? "auto" : X.bottom,
          transform: i.value ? "translate(" + t.value + "px, " + o.value + "px)" : X.transform
        })
      });
    }
    function _() {
      i.value && (A(), V());
    }
    function ae() {
      b(), l.value = !1, i.value = !1, t.value = 0, o.value = 0;
    }
    return {
      drag: a,
      x: t,
      y: o,
      enableTransition: l,
      dragging: u,
      teleportDisabled: g,
      n: Ng,
      classes: Dg,
      getAttrs: K,
      handleTouchstart: M,
      handleTouchmove: T,
      handleTouchend: O,
      handleClick: E,
      resize: _,
      reset: ae
    };
  }
});
bd.render = Vg;
const Jr = bd;
oe(Jr);
var m$ = Jr, Ag = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function _t(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Ag[n];
  });
}
var Gn = "top", pr = "bottom", Or = "right", dr = "left", To = "auto", Oo = [Gn, pr, Or, dr], Po = "start", Fa = "end", zg = "clippingParents", yd = "viewport", sa = "popper", Lg = "reference", Wl = /* @__PURE__ */ Oo.reduce(function(e, n) {
  return e.concat([n + "-" + Po, n + "-" + Fa]);
}, []), wd = /* @__PURE__ */ [].concat(Oo, [To]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Po, n + "-" + Fa]);
}, []), Rg = "beforeRead", Ug = "read", Hg = "afterRead", Yg = "beforeMain", Fg = "main", jg = "afterMain", Wg = "beforeWrite", Gg = "write", qg = "afterWrite", yi = [Rg, Ug, Hg, Yg, Fg, jg, Wg, Gg, qg];
function qn(e) {
  return e.split("-")[0];
}
var Xg = {
  start: "end",
  end: "start"
};
function Gl(e) {
  return e.replace(/start|end/g, function(n) {
    return Xg[n];
  });
}
function En(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Pr(e) {
  var n = En(e).Element;
  return e instanceof n || e instanceof Element;
}
function Tn(e) {
  var n = En(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function xi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = En(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Sr(e) {
  return ((Pr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var ca = Math.max, ql = Math.min, Qr = Math.round;
function wi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Cd() {
  return !/^((?!chrome|android).)*safari/i.test(wi());
}
function _r(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && Tn(e) && (t = e.offsetWidth > 0 && Qr(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Qr(a.height) / e.offsetHeight || 1);
  var i = Pr(e) ? En(e) : window, l = i.visualViewport, s = !Cd() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function el(e) {
  var n = En(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function nl(e) {
  return _r(Sr(e)).left + el(e).scrollLeft;
}
function Kg(e, n) {
  var r = En(e), a = Sr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = Cd();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + nl(e),
    y: s
  };
}
function Ln(e) {
  return En(e).getComputedStyle(e);
}
function Zg(e) {
  var n, r = Sr(e), a = el(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = ca(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = ca(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + nl(e), s = -a.scrollTop;
  return Ln(t || r).direction === "rtl" && (l += ca(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function Fn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Mo(e) {
  return Fn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (xi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Sr(e)
  );
}
function rl(e) {
  var n = Ln(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Sd(e) {
  return ["html", "body", "#document"].indexOf(Fn(e)) >= 0 ? e.ownerDocument.body : Tn(e) && rl(e) ? e : Sd(Mo(e));
}
function ma(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Sd(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = En(a), i = t ? [o].concat(o.visualViewport || [], rl(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(ma(Mo(i)))
  );
}
function Jg(e) {
  return ["table", "td", "th"].indexOf(Fn(e)) >= 0;
}
function Xl(e) {
  return !Tn(e) || // https://github.com/popperjs/popper-core/issues/837
  Ln(e).position === "fixed" ? null : e.offsetParent;
}
function Qg(e) {
  var n = /firefox/i.test(wi()), r = /Trident/i.test(wi());
  if (r && Tn(e)) {
    var a = Ln(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Mo(e);
  for (xi(t) && (t = t.host); Tn(t) && ["html", "body"].indexOf(Fn(t)) < 0; ) {
    var o = Ln(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function al(e) {
  for (var n = En(e), r = Xl(e); r && Jg(r) && Ln(r).position === "static"; )
    r = Xl(r);
  return r && (Fn(r) === "html" || Fn(r) === "body" && Ln(r).position === "static") ? n : r || Qg(e) || n;
}
function _g(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && xi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Ci(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function xg(e, n) {
  var r = _r(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Kl(e, n, r) {
  return n === yd ? Ci(Kg(e, r)) : Pr(n) ? xg(n, r) : Ci(Zg(Sr(e)));
}
function eb(e) {
  var n = ma(Mo(e)), r = ["absolute", "fixed"].indexOf(Ln(e).position) >= 0, a = r && Tn(e) ? al(e) : e;
  return Pr(a) ? n.filter(function(t) {
    return Pr(t) && _g(t, a) && Fn(t) !== "body";
  }) : [];
}
function nb(e, n, r, a) {
  var t = n === "clippingParents" ? eb(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = Kl(e, u, a);
    return s.top = ca(d.top, s.top), s.right = ql(d.right, s.right), s.bottom = ql(d.bottom, s.bottom), s.left = ca(d.left, s.left), s;
  }, Kl(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ja(e) {
  return e.split("-")[1];
}
function rb(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function kd(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? qn(a) : null, o = a ? ja(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Gn:
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case pr:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Or:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case dr:
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
  var u = t ? rb(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case Po:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Fa:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function ab() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function tb(e) {
  return Object.assign({}, ab(), e);
}
function ob(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function $d(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? zg : l, u = r.rootBoundary, d = u === void 0 ? yd : u, v = r.elementContext, f = v === void 0 ? sa : v, m = r.altBoundary, p = m === void 0 ? !1 : m, b = r.padding, g = b === void 0 ? 0 : b, w = tb(typeof g != "number" ? g : ob(g, Oo)), M = f === sa ? Lg : sa, T = e.rects.popper, C = e.elements[p ? M : f], O = nb(Pr(C) ? C : C.contextElement || Sr(e.elements.popper), s, d, i), E = _r(e.elements.reference), A = kd({
    reference: E,
    element: T,
    strategy: "absolute",
    placement: t
  }), P = Ci(Object.assign({}, T, A)), I = f === sa ? P : E, N = {
    top: O.top - I.top + w.top,
    bottom: I.bottom - O.bottom + w.bottom,
    left: O.left - I.left + w.left,
    right: I.right - O.right + w.right
  }, V = e.modifiersData.offset;
  if (f === sa && V) {
    var z = V[t];
    Object.keys(N).forEach(function(K) {
      var _ = [Or, pr].indexOf(K) >= 0 ? 1 : -1, ae = [Gn, pr].indexOf(K) >= 0 ? "y" : "x";
      N[K] += z[ae] * _;
    });
  }
  return N;
}
function ib(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? wd : s, d = ja(a), v = d ? l ? Wl : Wl.filter(function(p) {
    return ja(p) === d;
  }) : Oo, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(p, b) {
    return p[b] = $d(e, {
      placement: b,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[qn(b)], p;
  }, {});
  return Object.keys(m).sort(function(p, b) {
    return m[p] - m[b];
  });
}
function lb(e) {
  if (qn(e) === To)
    return [];
  var n = _t(e);
  return [Gl(e), n, Gl(n)];
}
function sb(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, b = r.allowedAutoPlacements, g = n.options.placement, w = qn(g), M = w === g, T = s || (M || !p ? [_t(g)] : lb(g)), C = [g].concat(T).reduce(function(G, ee) {
      return G.concat(qn(ee) === To ? ib(n, {
        placement: ee,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: b
      }) : ee);
    }, []), O = n.rects.reference, E = n.rects.popper, A = /* @__PURE__ */ new Map(), P = !0, I = C[0], N = 0; N < C.length; N++) {
      var V = C[N], z = qn(V), K = ja(V) === Po, _ = [Gn, pr].indexOf(z) >= 0, ae = _ ? "width" : "height", H = $d(n, {
        placement: V,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), X = _ ? K ? Or : dr : K ? pr : Gn;
      O[ae] > E[ae] && (X = _t(X));
      var J = _t(X), $ = [];
      if (o && $.push(H[z] <= 0), l && $.push(H[X] <= 0, H[J] <= 0), $.every(function(G) {
        return G;
      })) {
        I = V, P = !1;
        break;
      }
      A.set(V, $);
    }
    if (P)
      for (var B = p ? 3 : 1, q = function(ee) {
        var ce = C.find(function(Ce) {
          var Ee = A.get(Ce);
          if (Ee)
            return Ee.slice(0, ee).every(function(te) {
              return te;
            });
        });
        if (ce)
          return I = ce, "break";
      }, j = B; j > 0; j--) {
        var F = q(j);
        if (F === "break")
          break;
      }
    n.placement !== I && (n.modifiersData[a]._skip = !0, n.placement = I, n.reset = !0);
  }
}
const ub = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: sb,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function db(e, n, r) {
  var a = qn(e), t = [dr, Gn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [dr, Or].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function vb(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = wd.reduce(function(d, v) {
    return d[v] = db(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const fb = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: vb
};
var cb = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function mb(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Qr(n * t) / t || 0,
    y: Qr(r * t) / t || 0
  };
}
function Zl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, p = i.y, b = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = g.x, b = g.y;
  var w = i.hasOwnProperty("x"), M = i.hasOwnProperty("y"), T = dr, C = Gn, O = window;
  if (u) {
    var E = al(r), A = "clientHeight", P = "clientWidth";
    if (E === En(r) && (E = Sr(r), Ln(E).position !== "static" && l === "absolute" && (A = "scrollHeight", P = "scrollWidth")), E = E, t === Gn || (t === dr || t === Or) && o === Fa) {
      C = pr;
      var I = v && E === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[A]
      );
      b -= I - a.height, b *= s ? 1 : -1;
    }
    if (t === dr || (t === Gn || t === pr) && o === Fa) {
      T = Or;
      var N = v && E === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[P]
      );
      m -= N - a.width, m *= s ? 1 : -1;
    }
  }
  var V = Object.assign({
    position: l
  }, u && cb), z = d === !0 ? mb({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  if (m = z.x, b = z.y, s) {
    var K;
    return Object.assign({}, V, (K = {}, K[C] = M ? "0" : "", K[T] = w ? "0" : "", K.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", K));
  }
  return Object.assign({}, V, (n = {}, n[C] = M ? b + "px" : "", n[T] = w ? m + "px" : "", n.transform = "", n));
}
function hb(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, i = o === void 0 ? !0 : o, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = Ln(n.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: qn(n.placement),
    variation: ja(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Zl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Zl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Td = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: hb,
  data: {}
};
function pb(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function gb(e) {
  return e === En(e) || !Tn(e) ? el(e) : pb(e);
}
function bb(e) {
  var n = e.getBoundingClientRect(), r = Qr(n.width) / e.offsetWidth || 1, a = Qr(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function yb(e, n, r) {
  r === void 0 && (r = !1);
  var a = Tn(n), t = Tn(n) && bb(n), o = Sr(n), i = _r(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Fn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  rl(o)) && (l = gb(n)), Tn(n) ? (s = _r(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = nl(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function wb(e) {
  var n = _r(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Cb(e) {
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
function Sb(e) {
  var n = Cb(e);
  return yi.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function kb(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function xn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var kr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', $b = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Jl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Tb(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Jl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(xn(kr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(xn(kr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          yi.indexOf(n.phase) < 0 && console.error(xn(kr, n.name, '"phase"', "either " + yi.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(xn(kr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(xn(kr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(xn(kr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(xn(kr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Jl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(xn($b, String(n.name), a, a));
      });
    });
  });
}
function Ob(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Pb(e) {
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
var Ql = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Mb = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", _l = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function xl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Ib(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? _l : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, _l, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(w) {
        var M = typeof w == "function" ? w(d.options) : w;
        b(), d.options = Object.assign({}, o, d.options, M), d.scrollParents = {
          reference: Pr(l) ? ma(l) : l.contextElement ? ma(l.contextElement) : [],
          popper: ma(s)
        };
        var T = Sb(Pb([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = T.filter(function(V) {
          return V.enabled;
        }), process.env.NODE_ENV !== "production") {
          var C = Ob([].concat(T, d.options.modifiers), function(V) {
            var z = V.name;
            return z;
          });
          if (Tb(C), qn(d.options.placement) === To) {
            var O = d.orderedModifiers.find(function(V) {
              var z = V.name;
              return z === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var E = Ln(s), A = E.marginTop, P = E.marginRight, I = E.marginBottom, N = E.marginLeft;
          [A, P, I, N].some(function(V) {
            return parseFloat(V);
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
        if (!f) {
          var w = d.elements, M = w.reference, T = w.popper;
          if (!xl(M, T)) {
            process.env.NODE_ENV !== "production" && console.error(Ql);
            return;
          }
          d.rects = {
            reference: yb(M, al(T), d.options.strategy === "fixed"),
            popper: wb(T)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(V) {
            return d.modifiersData[V.name] = Object.assign({}, V.data);
          });
          for (var C = 0, O = 0; O < d.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (C += 1, C > 100)) {
              console.error(Mb);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, O = -1;
              continue;
            }
            var E = d.orderedModifiers[O], A = E.fn, P = E.options, I = P === void 0 ? {} : P, N = E.name;
            typeof A == "function" && (d = A({
              state: d,
              options: I,
              name: N,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: kb(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!xl(l, s))
      return process.env.NODE_ENV !== "production" && console.error(Ql), m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var w = g.name, M = g.options, T = M === void 0 ? {} : M, C = g.effect;
        if (typeof C == "function") {
          var O = C({
            state: d,
            name: w,
            instance: m,
            options: T
          }), E = function() {
          };
          v.push(O || E);
        }
      });
    }
    function b() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return m;
  };
}
var Wt = {
  passive: !0
};
function Bb(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = En(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Wt);
  }), l && s.addEventListener("resize", r.update, Wt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Wt);
    }), l && s.removeEventListener("resize", r.update, Wt);
  };
}
const Eb = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Bb,
  data: {}
};
function Nb(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = kd({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Db = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Nb,
  data: {}
};
function Vb(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !Tn(o) || !Fn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Ab(e) {
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
      !Tn(t) || !Fn(t) || (Object.assign(t.style, l), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const zb = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Vb,
  effect: Ab,
  requires: ["computeStyles"]
};
var Lb = [Eb, Db, Td, zb], Rb = /* @__PURE__ */ Ib({
  defaultModifiers: Lb
});
function ha() {
  return ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ha.apply(this, arguments);
}
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
function Od(e) {
  var n = S(null), r = S(null), a = S({
    width: 0,
    height: 0
  }), t = ya(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(I, N) {
      N ? (E(), y(e.onOpen)) : y(e.onClose);
    }
  }), {
    zIndex: o
  } = Nt(() => t.value, 1), i = null, l = !1, s = !1, u = () => {
    var {
      width: I,
      height: N
    } = Vr(n.value);
    a.value = {
      width: He(I),
      height: He(N)
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
    e.trigger === "hover" && (s = !0, A());
  }, f = /* @__PURE__ */ function() {
    var I = ns(function* () {
      e.trigger === "hover" && (s = !1, yield fn(), !l && P());
    });
    return function() {
      return I.apply(this, arguments);
    };
  }(), m = () => {
    e.trigger === "hover" && (l = !0);
  }, p = /* @__PURE__ */ function() {
    var I = ns(function* () {
      e.trigger === "hover" && (l = !1, yield fn(), !s && P());
    });
    return function() {
      return I.apply(this, arguments);
    };
  }(), b = () => {
    e.closeOnClickReference && t.value ? P() : A();
  }, g = () => {
    P();
  }, w = (I) => {
    e.trigger === "click" && (g(), y(e.onClickOutside, I));
  }, M = () => {
    E(), y(e.onClosed);
  }, T = () => {
    var {
      offsetX: I,
      offsetY: N,
      placement: V
    } = e;
    u();
    var z = {
      x: He(I),
      y: He(N)
    };
    switch (V) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: z.x,
          distance: z.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: z.x,
          distance: z.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: z.x,
          distance: z.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: z.x,
          distance: -z.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: z.x,
          distance: -z.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: z.x,
          distance: -z.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: z.y,
          distance: z.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: z.y,
          distance: -z.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: V,
          skidding: z.y,
          distance: -z.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: V,
          skidding: z.x,
          distance: -z.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: V,
          skidding: z.x,
          distance: z.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: V,
          skidding: z.y,
          distance: z.x
        };
    }
  }, C = () => {
    var {
      placement: I,
      skidding: N,
      distance: V
    } = T(), z = [ha({}, ub, {
      enabled: t.value
    }), ha({}, fb, {
      options: {
        offset: [N, V]
      }
    }), ha({}, Td, {
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
          state: _
        } = K;
        _.styles.popper.transformOrigin = d();
      }
    }];
    return {
      placement: I,
      modifiers: z,
      strategy: e.strategy
    };
  }, O = () => e.reference ? n.value.querySelector(e.reference) : n.value, E = () => {
    i.setOptions(C());
  }, A = () => {
    var {
      disabled: I
    } = e;
    I || (t.value = !0, y(e["onUpdate:show"], !0));
  }, P = () => {
    t.value = !1, y(e["onUpdate:show"], !1);
  };
  return As(O, "click", w), fe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], E), fe(() => e.disabled, P), Tt(() => {
    var I;
    i = Rb((I = O()) != null ? I : n.value, r.value, C());
  }), Ot(() => {
    i.destroy();
  }), {
    show: t,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: a,
    handleHostClick: b,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: g,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: p,
    handleClosed: M,
    resize: E,
    open: A,
    close: P
  };
}
var Ub = {
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOutside: U(),
  "onUpdate:show": U()
}, {
  name: Hb,
  n: Yb,
  classes: Fb
} = re("tooltip");
function jb(e, n) {
  return h(), k(
    "div",
    {
      ref: "host",
      class: c(e.classes(e.n(), e.n("$--box"))),
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
    [Y(e.$slots, "default"), (h(), ke(Qn, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [Q(We, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: me(() => [Me(D(
        "div",
        {
          ref: "popover",
          class: c(e.classes(e.n("tooltip"), e.n("$--box"))),
          style: W({
            zIndex: e.zIndex
          }),
          onClick: n[0] || (n[0] = Pn(() => {
          }, ["stop"])),
          onMouseenter: n[1] || (n[1] = function() {
            return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
          }),
          onMouseleave: n[2] || (n[2] = function() {
            return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
          })
        },
        [D(
          "div",
          {
            style: W({
              background: e.color,
              width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
            }),
            class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
          },
          [Y(e.$slots, "content", {}, () => [Pe(
            ie(e.content),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[Un, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Pd = ne({
  name: Hb,
  props: Ub,
  setup(e) {
    var {
      disabled: n
    } = la(), {
      popover: r,
      host: a,
      hostSize: t,
      show: o,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: p,
      // expose
      close: b,
      // expose
      resize: g
    } = Od(e);
    return {
      popover: r,
      host: a,
      hostSize: t,
      show: o,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Se,
      n: Yb,
      classes: Fb,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handleClosed: m,
      resize: g,
      open: p,
      close: b
    };
  }
});
Pd.render = jb;
const xr = Pd;
oe(xr);
var h$ = xr, Wb = {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
function Si() {
  return Si = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Si.apply(this, arguments);
}
var {
  name: Gb,
  n: qb,
  classes: Xb
} = re("ellipsis"), Kb = {
  key: 0
};
function Zb(e, n) {
  var r = le("var-tooltip");
  return h(), ke(
    r,
    It(mo(e.tooltip)),
    {
      content: me(() => [Y(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), k(
          "span",
          Kb,
          ie(e.tooltip.content),
          1
          /* TEXT */
        )) : Y(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: me(() => [D(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: W(e.rootStyles),
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
var Md = ne({
  name: Gb,
  components: {
    VarTooltip: xr
  },
  props: Wb,
  setup(e) {
    var n = S(!1), r = L(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = L(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Si({
      sameWidth: !0
    }, e.tooltip));
    function t() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltip: a,
      expanding: n,
      rootStyles: r,
      n: qb,
      classes: Xb,
      handleClick: t
    };
  }
});
Md.render = Zb;
const Wa = Md;
oe(Wa);
var p$ = Wa, Jb = {
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
  onClick: U(),
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:active": U()
};
function Qb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Pt(e);
}
var {
  name: _b,
  classes: zo,
  n: yn
} = re("fab");
const Ga = ne({
  name: _b,
  inheritAttrs: !1,
  props: Jb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = ya(e, "active"), o = S(null), i = S(null);
    fe(() => e.trigger, () => {
      t.value = !1;
    }), fe(() => e.disabled, () => {
      t.value = !1;
    }), fe(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var v;
      (v = i.value) == null || v.reset();
    }), As(o, "click", u);
    function l(v, f, m) {
      if (v.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (m === 0) {
          y(e.onClick, t.value, v);
          return;
        }
        t.value = f, y(e.onClick, t.value, v), y(t.value ? e.onOpen : e.onClose);
      }
    }
    function s(v, f) {
      e.trigger !== "hover" || e.disabled || f === 0 || (t.value = v, y(t.value ? e.onOpen : e.onClose));
    }
    function u() {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, y(e.onClose));
    }
    function d() {
      return r.trigger ? e.show ? r.trigger({
        active: t.value
      }) : null : Me(Q(cn, {
        "var-fab-cover": !0,
        class: yn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        round: !0
      }, {
        default: () => [Q(Le, {
          "var-fab-cover": !0,
          class: zo([t.value, yn("trigger-active-icon"), yn("trigger-inactive-icon")]),
          name: t.value ? e.activeIcon : e.inactiveIcon,
          size: t.value ? e.inactiveIconSize : e.activeIconSize,
          transition: 200,
          animationClass: yn("--trigger-icon-animation")
        }, null)]
      }), [[Un, e.show]]);
    }
    return () => {
      var v, f, m = zs((f = y(r.default)) != null ? f : []), p = Ai(e.drag) ? {} : e.drag;
      return Q(Jr, Re({
        ref: i,
        class: zo(yn("--position-" + e.position), [!e.fixed, yn("--absolute")]),
        style: {
          top: Se(e.top),
          bottom: Se(e.bottom),
          left: Se(e.left),
          right: Se(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: p.direction,
        attraction: p.attraction,
        boundary: p.boundary,
        onClick: (b) => l(b, !t.value, m.length)
      }, a), {
        default: () => [Q("div", {
          class: zo(yn(), yn("--direction-" + e.direction), [e.safeArea, yn("--safe-area")]),
          ref: o,
          onMouseleave: () => s(!1, m.length),
          onMouseenter: () => s(!0, m.length)
        }, [Q(We, {
          name: yn("--active-transition")
        }, Qb(v = d()) ? v : {
          default: () => [v]
        }), Q(We, {
          name: yn("--actions-transition-" + e.direction),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Me(Q("div", {
            class: yn("actions"),
            onClick: (b) => b.stopPropagation()
          }, [m.map((b) => Q("div", {
            class: yn("action")
          }, [b]))]), [[Un, e.show && t.value && m.length]])]
        })])]
      });
    };
  }
});
oe(Ga);
var g$ = Ga, xb = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: U(),
  onReset: U()
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
function as(e) {
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
  name: e0,
  n: n0
} = re("form");
function r0(e, n) {
  return h(), k(
    "form",
    {
      class: c(e.n()),
      onSubmit: n[0] || (n[0] = function() {
        return e.handleSubmit && e.handleSubmit(...arguments);
      }),
      onReset: n[1] || (n[1] = function() {
        return e.handleReset && e.handleReset(...arguments);
      })
    },
    [Y(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Id = ne({
  name: e0,
  props: xb,
  setup(e) {
    var n = L(() => e.disabled), r = L(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = oh(), o = {
      disabled: n,
      readonly: r
    };
    t(o);
    function i(p) {
      setTimeout(() => {
        var b = cr(p), g = b === window ? 0 : yl(b), w = yl(p) - g - He(e.scrollToErrorOffsetY);
        Ca(b, {
          top: w,
          animation: Jo
        });
      }, 300);
    }
    function l(p) {
      return s.apply(this, arguments);
    }
    function s() {
      return s = as(function* (p) {
        p.preventDefault();
        var b = yield d();
        y(e.onSubmit, b);
      }), s.apply(this, arguments);
    }
    function u(p) {
      p.preventDefault(), f(), y(e.onReset);
    }
    function d() {
      return v.apply(this, arguments);
    }
    function v() {
      return v = as(function* () {
        var p = yield Promise.all(a.map((T) => {
          var {
            validate: C
          } = T;
          return C();
        }));
        if (e.scrollToError) {
          var [, b] = uf(p, (T) => T === !1, e.scrollToError), g = b > -1;
          if (g) {
            var w, M = (w = a[b].instance.proxy) == null ? void 0 : w.$el;
            i(M);
          }
          return !g;
        }
        return p.every((T) => T === !0);
      }), v.apply(this, arguments);
    }
    function f() {
      return a.forEach((p) => {
        var {
          reset: b
        } = p;
        return b();
      });
    }
    function m() {
      return a.forEach((p) => {
        var {
          resetValidation: b
        } = p;
        return b();
      });
    }
    return {
      n: n0,
      handleSubmit: l,
      handleReset: u,
      validate: d,
      reset: f,
      resetValidation: m
    };
  }
});
Id.render = r0;
const Mr = Id;
Mr.useValidation = In;
Mr.useForm = Bn;
oe(Mr);
var b$ = Mr, a0 = {
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
  onClick: U(),
  onLoad: U(),
  onError: U()
}, {
  name: t0,
  n: o0,
  classes: i0
} = re("image"), l0 = ["alt", "title", "lazy-loading", "lazy-error"], s0 = ["alt", "title", "src"];
function u0(e, n) {
  var r, a = Ue("lazy"), t = Ue("ripple");
  return Me((h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: W({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? Me((h(), k("img", {
      key: 0,
      class: c(e.n("image")),
      alt: e.alt,
      title: e.title,
      "lazy-loading": e.loading,
      "lazy-error": e.error,
      style: W({
        objectFit: e.fit
      }),
      onLoad: n[0] || (n[0] = function() {
        return e.handleLoad && e.handleLoad(...arguments);
      }),
      onClick: n[1] || (n[1] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    }, null, 46, l0)), [[a, (r = e.src) != null ? r : ""]]) : x("v-if", !0), !e.lazy && !e.showErrorSlot ? (h(), k("img", {
      key: 1,
      class: c(e.n("image")),
      alt: e.alt,
      title: e.title,
      style: W({
        objectFit: e.fit
      }),
      src: e.src,
      onLoad: n[2] || (n[2] = function() {
        return e.handleLoad && e.handleLoad(...arguments);
      }),
      onError: n[3] || (n[3] = function() {
        return e.handleError && e.handleError(...arguments);
      }),
      onClick: n[4] || (n[4] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    }, null, 46, s0)) : x("v-if", !0), e.showErrorSlot ? Y(e.$slots, "error", {
      key: 2
    }) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[t, {
    disabled: !e.ripple
  }]]);
}
var Bd = ne({
  name: t0,
  directives: {
    Lazy: ka,
    Ripple: Xe
  },
  props: a0,
  setup(e, n) {
    var {
      slots: r
    } = n, a = S(!1);
    fe(() => e.src, () => {
      a.value = !1;
    });
    function t(l) {
      a.value = !!r.error, y(e.onError, l);
    }
    function o(l) {
      var s = l.currentTarget;
      if (e.lazy) {
        if (s._lazy.state === "success") {
          y(e.onLoad, l);
          return;
        }
        s._lazy.state === "error" && t(l);
      } else
        y(e.onLoad, l);
    }
    function i(l) {
      y(e.onClick, l);
    }
    return {
      showErrorSlot: a,
      n: o0,
      classes: i0,
      toSizeUnit: Se,
      handleLoad: o,
      handleError: t,
      handleClick: i
    };
  }
});
Bd.render = u0;
const qa = Bd;
oe(qa);
var y$ = qa, Ed = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function d0() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = sn(Ed);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var Nd = {
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
  onChange: U()
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
function Lr(e) {
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
var v0 = 250, f0 = 20, {
  name: c0,
  n: m0,
  classes: h0
} = re("swipe"), p0 = ["onClick"];
function g0(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: W({
          width: e.vertical ? void 0 : e.trackSize + "px",
          height: e.vertical ? e.trackSize + "px" : void 0,
          transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.trackTranslate + "px)",
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
      length: e.length,
      prev: e.prev,
      next: e.next,
      to: e.to
    }, () => [e.indicator && e.length ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), k(
        Ve,
        null,
        Ge(e.length, (r, a) => (h(), k("div", {
          class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
          style: W({
            background: e.indicatorColor
          }),
          key: r,
          onClick: (t) => e.to(a)
        }, null, 14, p0))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : x("v-if", !0)])],
    2
    /* CLASS */
  );
}
var Dd = ne({
  name: c0,
  props: Nd,
  setup(e) {
    var n = S(null), r = S(0), a = L(() => e.vertical), t = S(0), o = S(0), i = S(!1), l = S(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = d0(), {
      popup: v,
      bindPopup: f
    } = $f(), {
      deltaX: m,
      deltaY: p,
      moveX: b,
      moveY: g,
      offsetX: w,
      offsetY: M,
      touching: T,
      direction: C,
      startTime: O,
      startTouch: E,
      moveTouch: A,
      endTouch: P
    } = po(), I = L(() => C.value === (e.vertical ? "vertical" : "horizontal")), N = !1, V = -1, z = {
      size: r,
      vertical: a
    };
    u(z), y(f, null), fe(() => d.value, /* @__PURE__ */ Lr(function* () {
      yield fn(), B(), Ee();
    })), v && fe(() => v.show.value, /* @__PURE__ */ function() {
      var ue = Lr(function* (Te) {
        Te ? (yield fn(), Ee()) : j();
      });
      return function(Te) {
        return ue.apply(this, arguments);
      };
    }()), gr(Ee), ho(j), Bt(Ee);
    function K(ue) {
      return s.find((Te) => {
        var {
          index: Ie
        } = Te;
        return Ie.value === ue;
      });
    }
    function _() {
      e.loop && (o.value >= 0 && K(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && K(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (K(d.value - 1).setTranslate(0), K(0).setTranslate(0)));
    }
    function ae(ue) {
      var Te = pn(ue) ? ue : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: Ie
      } = e;
      return Te <= -1 ? Ie ? -1 : 0 : Te >= d.value ? Ie ? d.value : d.value - 1 : Te;
    }
    function H(ue) {
      var {
        loop: Te
      } = e;
      return ue === -1 ? Te ? d.value - 1 : 0 : ue === d.value ? Te ? 0 : d.value - 1 : ue;
    }
    function X(ue) {
      return e.loop ? ue < 0 ? d.value + ue : ue >= d.value ? ue - d.value : ue : vr(ue, 0, d.value - 1);
    }
    function J() {
      return $.apply(this, arguments);
    }
    function $() {
      return $ = Lr(function* () {
        var ue = o.value >= r.value, Te = o.value <= -t.value, Ie = 0, Oe = -(t.value - r.value);
        i.value = !0, (ue || Te) && (i.value = !0, o.value = Te ? Ie : Oe, K(0).setTranslate(0), K(d.value - 1).setTranslate(0)), yield fn(), i.value = !1;
      }), $.apply(this, arguments);
    }
    function B() {
      N || (l.value = X(R(e.initialIndex)), N = !0);
    }
    function q() {
      var {
        autoplay: ue
      } = e;
      !ue || d.value <= 1 || (j(), V = window.setTimeout(() => {
        te(), q();
      }, R(ue)));
    }
    function j() {
      V && clearTimeout(V);
    }
    function F(ue) {
      o.value = ue, _();
    }
    function G(ue) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return ee = Lr(function* (ue) {
        d.value <= 1 || !e.touchable || (E(ue), j(), yield J(), i.value = !0);
      }), ee.apply(this, arguments);
    }
    function ce(ue) {
      var {
        touchable: Te,
        vertical: Ie
      } = e;
      !T.value || !Te || (A(ue), I.value && (ue.preventDefault(), F(o.value + (Ie ? g.value : b.value))));
    }
    function Ce() {
      if (T.value && (P(), !!I.value)) {
        var {
          vertical: ue,
          onChange: Te
        } = e, Ie = ue ? p.value < 0 : m.value < 0, Oe = ue ? M.value : w.value, se = performance.now() - O.value <= v0 && Oe >= f0, be = se ? ae(Ie ? l.value + 1 : l.value - 1) : ae();
        i.value = !1, F(be * -r.value);
        var ye = l.value;
        l.value = H(be), q(), ye !== l.value && y(Te, l.value);
      }
    }
    function Ee() {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = l.value * -r.value, s.forEach((ue) => {
        ue.setTranslate(0);
      }), q(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function te(ue) {
      return de.apply(this, arguments);
    }
    function de() {
      return de = Lr(function* (ue) {
        if (!(d.value <= 1)) {
          B();
          var {
            loop: Te,
            onChange: Ie
          } = e, Oe = l.value;
          if (l.value = X(Oe + 1), (ue == null ? void 0 : ue.event) !== !1 && y(Ie, l.value), yield J(), Oe === d.value - 1 && Te) {
            K(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          Oe !== d.value - 1 && (o.value = l.value * -r.value);
        }
      }), de.apply(this, arguments);
    }
    function ge(ue) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return $e = Lr(function* (ue) {
        if (!(d.value <= 1)) {
          B();
          var {
            loop: Te,
            onChange: Ie
          } = e, Oe = l.value;
          if (l.value = X(Oe - 1), (ue == null ? void 0 : ue.event) !== !1 && y(Ie, l.value), yield J(), Oe === 0 && Te) {
            K(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          Oe !== 0 && (o.value = l.value * -r.value);
        }
      }), $e.apply(this, arguments);
    }
    function je(ue, Te) {
      if (!(d.value <= 1 || ue === l.value)) {
        ue = ue < 0 ? 0 : ue, ue = ue >= d.value ? d.value : ue;
        var Ie = ue > l.value ? te : ge, Oe = Math.abs(ue - l.value);
        Array.from({
          length: Oe
        }).forEach((se, be) => {
          Ie({
            event: be === Oe - 1 ? Te == null ? void 0 : Te.event : !1
          });
        });
      }
    }
    return {
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      trackTranslate: o,
      lockDuration: i,
      n: m0,
      classes: h0,
      handleTouchstart: G,
      handleTouchmove: ce,
      handleTouchend: Ce,
      next: te,
      prev: ge,
      to: je,
      resize: Ee,
      toNumber: R
    };
  }
});
Dd.render = g0;
const Ir = Dd;
oe(Ir);
var w$ = Ir;
function b0() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = ln(Ed);
  return e || Mn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  name: y0,
  n: w0
} = re("swipe-item");
function C0(e, n) {
  return h(), k(
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
var Vd = ne({
  name: y0,
  setup() {
    var e = S(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = b0(), {
      size: t,
      vertical: o
    } = n, i = {
      index: a,
      setTranslate: l
    };
    r(i);
    function l(s) {
      e.value = s;
    }
    return {
      n: w0,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Vd.render = C0;
const Br = Vd;
oe(Br);
var C$ = Br;
function ki() {
  return ki = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ki.apply(this, arguments);
}
var S0 = ki({
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
  "onUpdate:show": U(),
  onLongPress: U()
}, en(Nd, ["loop", "indicator", "onChange"]), en(Et, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  name: k0,
  n: os,
  classes: $0
} = re("image-preview"), Lo = 12, is = 200, T0 = 350, ls = 200, O0 = 500, P0 = ["onTouchstart"], M0 = ["src", "alt"];
function I0(e, n) {
  var r = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), o = le("var-popup");
  return h(), ke(o, {
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
    default: me(() => [Q(a, Re({
      ref: "swipeRef",
      class: e.n("swipe"),
      "var-image-preview-cover": "",
      touchable: e.canSwipe,
      indicator: e.indicator && e.images.length > 1,
      "initial-index": e.initialIndex,
      loop: e.loop,
      onChange: e.onChange
    }, e.$attrs), {
      default: me(() => [(h(!0), k(
        Ve,
        null,
        Ge(e.images, (i, l) => (h(), ke(r, {
          class: c(e.n("swipe-item")),
          "var-image-preview-cover": "",
          key: i
        }, {
          default: me(() => [D("div", {
            class: c(e.n("zoom-container")),
            style: W({
              transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
              transitionTimingFunction: e.transitionTimingFunction,
              transitionDuration: e.transitionDuration
            }),
            onTouchstart: (s) => e.handleTouchstart(s, l),
            onTouchmove: n[0] || (n[0] = function() {
              return e.handleTouchmove && e.handleTouchmove(...arguments);
            }),
            onTouchend: n[1] || (n[1] = function() {
              return e.handleTouchend && e.handleTouchend(...arguments);
            }),
            onTouchcancel: n[2] || (n[2] = function() {
              return e.handleTouchcancel && e.handleTouchcancel(...arguments);
            })
          }, [D("img", {
            class: c(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: i,
            alt: i
          }, null, 10, M0)], 46, P0)]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["class"]))),
        128
        /* KEYED_FRAGMENT */
      ))]),
      indicator: me((i) => {
        var {
          index: l,
          length: s
        } = i;
        return [Y(e.$slots, "indicator", {
          index: l,
          length: s
        }, () => [e.indicator && e.images.length > 1 ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("indicators"))
          },
          ie(l + 1) + " / " + ie(s),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)])];
      }),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]), Y(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), ke(t, {
      key: 0,
      class: c(e.n("close-icon")),
      name: "close-circle",
      "var-image-preview-cover": "",
      onClick: e.close
    }, null, 8, ["class", "onClick"])) : x("v-if", !0)]), D(
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
var Ad = ne({
  name: k0,
  components: {
    VarSwipe: Ir,
    VarSwipeItem: Br,
    VarPopup: Hn,
    VarIcon: Le
  },
  inheritAttrs: !1,
  props: S0,
  setup(e) {
    var n = S(!1), r = S(1), a = S(0), t = S(0), o = S(), i = S(), l = S(!0), s = S(null), {
      moveX: u,
      moveY: d,
      distance: v,
      startTime: f,
      startTouch: m,
      moveTouch: p,
      endTouch: b
    } = po(), g = L(() => {
      var {
        images: j,
        current: F,
        initialIndex: G
      } = e;
      if (G != null)
        return R(G);
      var ee = j.findIndex((ce) => ce === F);
      return Math.max(ee, 0);
    }), w = L(() => {
      var {
        imagePreventDefault: j,
        show: F
      } = e;
      return F && j;
    }), M = null, T = null, C = !1, O = {
      start: null,
      prev: null
    };
    fr(() => document, "contextmenu", q), fe(() => e.show, (j) => {
      n.value = j;
    }, {
      immediate: !0
    });
    function E() {
      r.value = R(e.zoom), l.value = !1, O.prev = null, window.setTimeout(() => {
        o.value = "linear", i.value = "0s";
      }, ls);
    }
    function A() {
      r.value = 1, a.value = 0, t.value = 0, l.value = !0, O.prev = null, o.value = void 0, i.value = void 0;
    }
    function P(j) {
      return O.prev ? v.value <= Lo && performance.now() - f.value <= is && O.prev === j : !1;
    }
    function I(j) {
      return !j || !O.start || !O.prev ? !1 : v.value <= Lo && performance.now() - f.value < T0 && (j === O.start || j.parentNode === O.start);
    }
    function N() {
      b(), window.clearTimeout(T), C = !1, O.start = null;
    }
    function V(j) {
      if (b(), window.clearTimeout(T), C) {
        C = !1;
        return;
      }
      var F = I(j.target);
      M = window.setTimeout(() => {
        F && X(), O.start = null;
      }, is);
    }
    function z(j, F) {
      window.clearTimeout(M), window.clearTimeout(T);
      var G = j.currentTarget;
      if (O.start = G, T = window.setTimeout(() => {
        C = !0, y(e.onLongPress, F);
      }, O0), P(G)) {
        r.value > 1 ? A() : E();
        return;
      }
      m(j), O.prev = G;
    }
    function K(j) {
      var {
        offsetWidth: F,
        offsetHeight: G
      } = j, {
        naturalWidth: ee,
        naturalHeight: ce
      } = j.querySelector("." + os("image"));
      return {
        width: F,
        height: G,
        imageRadio: ce / ee,
        rootRadio: G / F,
        zoom: R(e.zoom)
      };
    }
    function _(j) {
      var {
        zoom: F,
        imageRadio: G,
        rootRadio: ee,
        width: ce,
        height: Ce
      } = K(j);
      if (!G)
        return 0;
      var Ee = G > ee ? Ce / G : ce;
      return Math.max(0, (F * Ee - ce) / 2) / F;
    }
    function ae(j) {
      var {
        zoom: F,
        imageRadio: G,
        rootRadio: ee,
        width: ce,
        height: Ce
      } = K(j);
      if (!G)
        return 0;
      var Ee = G > ee ? Ce : ce * G;
      return Math.max(0, (F * Ee - Ce) / 2) / F;
    }
    function H(j) {
      if (O.prev) {
        p(j);
        var F = j.currentTarget;
        if (v.value > Lo && window.clearTimeout(T), r.value > 1) {
          var G = _(F), ee = ae(F);
          a.value = vr(a.value + u.value, -G, G), t.value = vr(t.value + d.value, -ee, ee);
        }
        O.prev = F;
      }
    }
    function X() {
      if (r.value > 1) {
        A(), setTimeout(() => y(e["onUpdate:show"], !1), ls);
        return;
      }
      y(e["onUpdate:show"], !1);
    }
    function J(j) {
      var F;
      (F = s.value) == null || F.prev(j);
    }
    function $(j) {
      var F;
      (F = s.value) == null || F.next(j);
    }
    function B(j, F) {
      var G;
      (G = s.value) == null || G.to(j, F);
    }
    function q(j) {
      e.imagePreventDefault && e.show && j.preventDefault();
    }
    return {
      swipeRef: s,
      isPreventDefault: w,
      initialIndex: g,
      popupShow: n,
      scale: r,
      translateX: a,
      translateY: t,
      canSwipe: l,
      transitionTimingFunction: o,
      transitionDuration: i,
      n: os,
      classes: $0,
      handleTouchstart: z,
      handleTouchmove: H,
      handleTouchend: V,
      handleTouchcancel: N,
      close: X,
      prev: J,
      next: $,
      to: B
    };
  }
});
Ad.render = I0;
const zt = Ad;
function pa() {
  return pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, pa.apply(this, arguments);
}
var ir, ga = {};
function B0(e) {
  return e === void 0 && (e = {}), Qe(e) ? pa({}, ga, {
    images: [e]
  }) : De(e) ? pa({}, ga, {
    images: e
  }) : pa({}, ga, e);
}
function Rn(e) {
  if (wr()) {
    Rn.close();
    var n = B0(e), r = Fe(n);
    r.teleport = "body", ir = r;
    var {
      unmountInstance: a
    } = ia(zt, r, {
      onClose: () => y(r.onClose),
      onClosed: () => {
        y(r.onClosed), a(), ir === r && (ir = null);
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
Rn.close = () => {
  if (ir != null) {
    var e = ir;
    ir = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
Rn.setDefaultOptions = (e) => {
  ga = e;
};
Rn.resetDefaultOptions = () => {
  ga = {};
};
Rn.Component = zt;
oe(zt);
oe(zt, Rn);
var S$ = zt, xt = {
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
  onScroll: U()
};
function ss(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function us(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ss(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ss(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  name: E0,
  n: N0,
  classes: D0
} = re("sticky");
function V0(e, n) {
  return h(), k(
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
    [D(
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
var zd = ne({
  name: E0,
  props: xt,
  setup(e) {
    var n = S(null), r = S(null), a = S(!1), t = S("0px"), o = S("0px"), i = S("auto"), l = S("auto"), s = S("auto"), u = S("auto"), d = L(() => !e.disabled && e.cssMode), v = L(() => !e.disabled && !e.cssMode && a.value), f = L(() => He(e.offsetTop)), m;
    fe(() => e.disabled, g), on(M), ho(C), Bt(g), fr(() => window, "scroll", b);
    function p() {
      var {
        cssMode: O,
        disabled: E
      } = e;
      if (!E) {
        var A = 0;
        if (m !== window) {
          var {
            top: P
          } = _e(m);
          A = P;
        }
        var I = r.value, N = n.value, {
          top: V,
          left: z
        } = _e(N), K = V - A;
        return K <= f.value ? (O || (i.value = N.offsetWidth + "px", l.value = N.offsetHeight + "px", t.value = A + f.value + "px", o.value = z + "px", s.value = I.offsetWidth + "px", u.value = I.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: K,
          isFixed: !1
        });
      }
    }
    function b() {
      if (m) {
        var O = p();
        O && y(e.onScroll, O.offsetTop, O.isFixed);
      }
    }
    function g() {
      return w.apply(this, arguments);
    }
    function w() {
      return w = us(function* () {
        a.value = !1, yield Kt(), p();
      }), w.apply(this, arguments);
    }
    function M() {
      return T.apply(this, arguments);
    }
    function T() {
      return T = us(function* () {
        yield fn(), m = cr(n.value), m !== window && m.addEventListener("scroll", b), b();
      }), T.apply(this, arguments);
    }
    function C() {
      m !== window && m.removeEventListener("scroll", b);
    }
    return {
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
      n: N0,
      classes: D0,
      resize: g,
      toNumber: R
    };
  }
});
zd.render = V0;
const Er = zd;
oe(Er);
var k$ = Er, Ld = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function A0() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = sn(Ld);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function z0() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln(Ld);
  return r || Mn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var L0 = {
  index: [Number, String]
}, {
  name: R0,
  n: U0,
  classes: H0
} = re("index-anchor");
function Y0(e, n) {
  return h(), ke(ta(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: me(() => [D(
      "div",
      Re({
        class: e.n()
      }, e.$attrs),
      [Y(e.$slots, "default", {}, () => [Pe(
        ie(e.name),
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
var Rd = ne({
  name: R0,
  components: {
    VarSticky: Er
  },
  inheritAttrs: !1,
  props: L0,
  setup(e) {
    var n = S(0), r = S(!1), a = L(() => e.index), t = S(null), {
      index: o,
      indexBar: i,
      bindIndexBar: l
    } = z0(), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = i, m = {
      index: o,
      name: a,
      ownTop: n,
      setOwnTop: p,
      setDisabled: b
    };
    l(m);
    function p() {
      t.value && (n.value = t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop);
    }
    function b(g) {
      r.value = g;
    }
    return {
      n: U0,
      classes: H0,
      name: a,
      anchorEl: t,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: r,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: We
    };
  }
});
Rd.render = Y0;
const Xa = Rd;
oe(Xa);
var $$ = Xa, F0 = {
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
  onClick: U(),
  onChange: U()
};
function ds(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Gt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ds(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ds(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  name: j0,
  n: W0,
  classes: G0
} = re("index-bar"), q0 = ["onClick"];
function X0(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [Y(e.$slots, "default"), D(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: W({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), k(
        Ve,
        null,
        Ge(e.anchorNameList, (r) => (h(), k("li", {
          key: r,
          class: c(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
          style: W({
            color: e.active === r && e.highlightColor ? e.highlightColor : ""
          }),
          onClick: (a) => e.anchorClick({
            anchorName: r,
            manualCall: !0
          })
        }, ie(r), 15, q0))),
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
var Ud = ne({
  name: j0,
  props: F0,
  setup(e) {
    var n = S(""), r = S(null), a = S([]), t = S(), o = L(() => e.sticky), i = L(() => e.stickyCssMode || e.cssMode), l = L(() => He(e.stickyOffsetTop)), s = L(() => e.zIndex), {
      length: u,
      indexAnchors: d,
      bindIndexAnchors: v
    } = A0(), f = null, m = !1, p = {
      active: t,
      sticky: o,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    fe(() => u.value, /* @__PURE__ */ Gt(function* () {
      yield fn(), d.forEach((I) => {
        var {
          name: N,
          setOwnTop: V
        } = I;
        N.value && a.value.push(N.value), V();
      });
    })), on(/* @__PURE__ */ Gt(function* () {
      yield C(), E();
    })), co(A), ra(() => {
      m = !0, A();
    }), gr(() => {
      !m || t.value === void 0 || (M({
        anchorName: t.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), v(p);
    function b(I, N) {
      var V = zi(I) ? I.name.value : I;
      V === t.value || V === void 0 || (t.value = V, (N == null ? void 0 : N.event) !== !1 && y(e.onChange, V));
    }
    function g() {
      if (Li(f))
        return 0;
      var {
        top: I
      } = _e(f), {
        scrollTop: N
      } = f, {
        top: V
      } = _e(r.value);
      return N - I + V;
    }
    function w() {
      var I = wa(f), N = f === window ? document.body.scrollHeight : f.scrollHeight, V = g();
      d.forEach((z, K) => {
        var _ = z.ownTop.value, ae = I - _ + l.value - V, H = K === d.length - 1 ? N : d[K + 1].ownTop.value - z.ownTop.value;
        z.setDisabled(!0), ae >= 0 && ae < H && n.value === "" && (z.setDisabled(!1), b(z));
      });
    }
    function M(I) {
      return T.apply(this, arguments);
    }
    function T() {
      return T = Gt(function* (I) {
        var {
          anchorName: N,
          manualCall: V = !1,
          options: z
        } = I;
        if (V && y(e.onClick, N), !(N === t.value && !m)) {
          var K = d.find((X) => {
            var {
              name: J
            } = X;
            return N === J.value;
          });
          if (K) {
            var _ = g(), ae = K.ownTop.value - l.value + _, H = Hi(f);
            n.value = N, b(N, z), yield Ca(f, {
              left: H,
              top: ae,
              animation: au,
              duration: R(e.duration)
            }), yield fn(), n.value = "";
          }
        }
      }), T.apply(this, arguments);
    }
    function C() {
      return O.apply(this, arguments);
    }
    function O() {
      return O = Gt(function* () {
        yield fn(), f = cr(r.value);
      }), O.apply(this, arguments);
    }
    function E() {
      f.addEventListener("scroll", w);
    }
    function A() {
      f.removeEventListener("scroll", w);
    }
    function P(I, N) {
      ba(() => M({
        anchorName: I,
        options: N
      }));
    }
    return {
      barEl: r,
      active: t,
      zIndex: s,
      anchorNameList: a,
      n: W0,
      classes: G0,
      toNumber: R,
      scrollTo: P,
      anchorClick: M
    };
  }
});
Ud.render = X0;
const Ka = Ud;
oe(Ka);
var T$ = Ka, tl = {
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
  onClick: U(),
  onClear: U()
}, {
  name: K0,
  n: Ro,
  classes: Z0
} = re("field-decorator"), J0 = ["for"];
function Q0(e, n) {
  var r = le("var-icon");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: W({
          color: e.color,
          cursor: e.cursor,
          overflow: e.isFloating ? "visible" : "hidden"
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [Y(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      ), e.placeholder && e.hint ? (h(), k("label", {
        key: 0,
        class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], e.computePlaceholderState())),
        style: W({
          color: e.color
        }),
        for: e.id
      }, [D(
        "span",
        null,
        ie(e.placeholder),
        1
        /* TEXT */
      )], 14, J0)) : x("v-if", !0), D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (h(), ke(r, {
          key: 0,
          class: c(e.n("clear-icon")),
          "var-field-decorator-cover": "",
          name: "close-circle",
          onClick: e.handleClear
        }, null, 8, ["class", "onClick"])) : x("v-if", !0), Y(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (h(), k(
      Ve,
      {
        key: 0
      },
      [e.variant === "outlined" ? (h(), k(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: W({
            borderColor: e.color
          })
        },
        [D(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: W({
              width: e.legendWidth
            })
          },
          [e.placeholder && e.hint ? (h(), ke(Qn, {
            key: 0,
            to: "body"
          }, [D(
            "span",
            {
              ref: "placeholderTextEl",
              class: c(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
            },
            ie(e.placeholder),
            3
            /* TEXT, CLASS */
          )])) : x("v-if", !0)],
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )) : (h(), k(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: W({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [D(
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
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Hd = ne({
  name: K0,
  components: {
    VarIcon: Le
  },
  props: tl,
  setup(e, n) {
    var {
      slots: r
    } = n, a = S(null), t = S(""), o = L(() => e.hint && (!jn(e.value) || e.isFocus || r["prepend-icon"])), i = L(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor);
    Bt(s), on(s), Mt(s);
    function l() {
      var {
        hint: v,
        value: f,
        composing: m
      } = e;
      if (!v && (!jn(f) || m))
        return Ro("--placeholder-hidden");
      if (o.value)
        return Ro("--placeholder-hint");
    }
    function s() {
      var {
        size: v,
        hint: f,
        variant: m,
        placeholder: p
      } = e;
      if (!p || !f || m !== "outlined") {
        t.value = "";
        return;
      }
      var b = Vr(a.value), g = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
      t.value = "calc(" + b.width + " * 0.75 + " + g + " * 2)";
    }
    function u(v) {
      y(e.onClear, v);
    }
    function d(v) {
      y(e.onClick, v);
    }
    return {
      placeholderTextEl: a,
      color: i,
      legendWidth: t,
      isFloating: o,
      computePlaceholderState: l,
      n: Ro,
      classes: Z0,
      isEmpty: jn,
      handleClear: u,
      handleClick: d
    };
  }
});
Hd.render = Q0;
const Yd = Hd;
function $i() {
  return $i = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, $i.apply(this, arguments);
}
var _0 = $i({
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
  onFocus: U(),
  onBlur: U(),
  onInput: U(),
  onChange: U(),
  onClear: U(),
  "onUpdate:modelValue": U()
}, en(tl, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  name: x0,
  n: ey,
  classes: ny
} = re("input"), ry = ["placeholder", "enterkeyhint"], ay = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], ty = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function oy(e, n) {
  var r = le("var-field-decorator"), a = le("var-form-details");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[13] || (n[13] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Q(
      r,
      It(mo({
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
      eo({
        "append-icon": me(() => [Y(e.$slots, "append-icon")]),
        default: me(() => [e.normalizedType === "password" ? (h(), k("input", {
          key: 0,
          tabindex: "-1",
          class: c(e.n("autocomplete")),
          placeholder: e.hint ? void 0 : e.placeholder,
          style: W({
            "--input-placeholder-color": e.placeholderColor
          }),
          enterkeyhint: e.enterkeyhint
        }, null, 14, ry)) : x("v-if", !0), e.textarea ? (h(), k("textarea", {
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
          onCompositionstart: n[4] || (n[4] = function() {
            return e.handleCompositionStart && e.handleCompositionStart(...arguments);
          }),
          onCompositionend: n[5] || (n[5] = function() {
            return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
          })
        }, `
      `, 46, ay)) : (h(), k("input", {
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
          onFocus: n[6] || (n[6] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          }),
          onBlur: n[7] || (n[7] = function() {
            return e.handleBlur && e.handleBlur(...arguments);
          }),
          onInput: n[8] || (n[8] = function() {
            return e.handleInput && e.handleInput(...arguments);
          }),
          onChange: n[9] || (n[9] = function() {
            return e.handleChange && e.handleChange(...arguments);
          }),
          onCompositionstart: n[10] || (n[10] = function() {
            return e.handleCompositionStart && e.handleCompositionStart(...arguments);
          }),
          onCompositionend: n[11] || (n[11] = function() {
            return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
          })
        }, null, 46, ty))]),
        _: 2
        /* DYNAMIC */
      }, [e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: me(() => [Y(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0]),
      1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
    ), Q(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText,
      onMousedown: n[12] || (n[12] = Pn(() => {
      }, ["stop"]))
    }, eo({
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
var Fd = ne({
  name: x0,
  components: {
    VarFormDetails: an,
    VarFieldDecorator: Yd
  },
  props: _0,
  setup(e) {
    var n = S("var-input-" + aa().uid), r = S(null), a = S(!1), t = S(!1), {
      bindForm: o,
      form: i
    } = Bn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = In(), v = L(() => e.disabled || e.readonly ? "" : "text"), f = L(() => e.type === "number" ? "text" : e.type), m = L(() => {
      var {
        maxlength: J,
        modelValue: $
      } = e;
      return J ? jn($) ? "0 / " + J : String($).length + "/" + J : "";
    }), p = L(() => {
      var {
        hint: J,
        blurColor: $,
        focusColor: B
      } = e;
      if (!J)
        return l.value ? "var(--field-decorator-error-color)" : a.value ? B || "var(--field-decorator-focus-color)" : $ || "var(--field-decorator-blur-color)";
    }), b = {
      reset: _,
      validate: ae,
      resetValidation: d
    };
    y(o, b), on(() => {
      e.autofocus && H();
    });
    function g(J) {
      Ye(() => {
        var {
          validateTrigger: $,
          rules: B,
          modelValue: q
        } = e;
        s($, J, B, q);
      });
    }
    function w(J) {
      a.value = !0, y(e.onFocus, J), g("onFocus");
    }
    function M(J) {
      a.value = !1, y(e.onBlur, J), g("onBlur");
    }
    function T(J) {
      var $ = J.target, {
        value: B
      } = $;
      return e.type === "number" && (B = N(B)), z(V(B));
    }
    function C() {
      t.value = !0;
    }
    function O(J) {
      t.value && (t.value = !1, J.target.dispatchEvent(new Event("input")));
    }
    function E(J) {
      if (!t.value) {
        var $ = T(J);
        y(e["onUpdate:modelValue"], $), y(e.onInput, $, J), g("onInput");
      }
    }
    function A(J) {
      var $ = T(J);
      y(e.onChange, $, J), g("onChange");
    }
    function P() {
      var {
        disabled: J,
        readonly: $,
        clearable: B,
        onClear: q
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || J || $ || !B || (y(e["onUpdate:modelValue"], ""), y(q, ""), g("onClear"));
    }
    function I(J) {
      var {
        disabled: $,
        onClick: B
      } = e;
      i != null && i.disabled.value || $ || (y(B, J), g("onClick"));
    }
    function N(J) {
      var $ = J.indexOf("-"), B = J.indexOf(".");
      return $ > -1 && (J = $ === 0 ? "-" + J.replace(/-/g, "") : J.replace(/-/g, "")), B > -1 && (J = J.slice(0, B + 1) + J.slice(B).replace(/\./g, "")), J.replace(/[^-0-9.]/g, "");
    }
    function V(J) {
      return e.modelModifiers.trim ? J.trim() : J;
    }
    function z(J) {
      return e.maxlength ? J.slice(0, R(e.maxlength)) : J;
    }
    function K(J) {
      var {
        disabled: $
      } = e;
      i != null && i.disabled.value || $ || J.target === r.value || (H(), J.preventDefault());
    }
    function _() {
      y(e["onUpdate:modelValue"], ""), d();
    }
    function ae() {
      return u(e.rules, e.modelValue);
    }
    function H() {
      var J;
      (J = r.value) == null || J.focus();
    }
    function X() {
      r.value.blur();
    }
    return {
      el: r,
      id: n,
      isFocus: a,
      isComposing: t,
      errorMessage: l,
      placeholderColor: p,
      normalizedType: f,
      cursor: v,
      maxlengthText: m,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: ey,
      classes: ny,
      isEmpty: jn,
      handleFocus: w,
      handleBlur: M,
      handleInput: E,
      handleChange: A,
      handleClear: P,
      handleClick: I,
      handleCompositionStart: C,
      handleCompositionEnd: O,
      handleMousedown: K,
      validate: ae,
      resetValidation: d,
      reset: _,
      focus: H,
      blur: X
    };
  }
});
Fd.render = oy;
const ea = Fd;
oe(ea);
var O$ = ea, iy = {
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
  onClick: U()
}, {
  name: ly,
  n: sy,
  classes: uy
} = re("link");
function dy(e, n) {
  return h(), ke(ta(e.tag), Re(e.linkProps, {
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
var jd = ne({
  name: ly,
  props: iy,
  setup(e) {
    var n = L(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = L(() => {
      var {
        disabled: t,
        href: o,
        target: i,
        to: l,
        replace: s,
        rel: u
      } = e;
      return t ? {} : o ? {
        href: o,
        target: i,
        rel: u
      } : l ? {
        to: l,
        target: i,
        replace: s
      } : {};
    });
    function a(t) {
      e.disabled || y(e.onClick, t);
    }
    return {
      tag: n,
      linkProps: r,
      n: sy,
      classes: uy,
      handleClick: a,
      toSizeUnit: Se
    };
  }
});
jd.render = dy;
const Za = jd;
oe(Za);
var P$ = Za, vy = {
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
  onLoad: U(),
  "onUpdate:loading": U(),
  "onUpdate:error": U()
}, Wd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function fy() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = sn(Wd);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var Gd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function cy() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ln(Wd);
  return n || Mn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function my() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = sn(Gd);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function hy() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ln(Gd);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
function vs(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function py(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        vs(o, a, t, i, l, "next", s);
      }
      function l(s) {
        vs(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  name: gy,
  n: by,
  classes: yy
} = re("list");
function wy(e, n) {
  var r = le("var-loading"), a = Ue("ripple");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [Y(e.$slots, "default"), e.loading ? Y(e.$slots, "loading", {
      key: 0
    }, () => {
      var t;
      return [D(
        "div",
        {
          class: c(e.n("loading"))
        },
        [D(
          "div",
          {
            class: c(e.n("loading-text"))
          },
          ie((t = e.loadingText) != null ? t : e.pack.listLoadingText),
          3
          /* TEXT, CLASS */
        ), Q(r, {
          size: "mini",
          radius: 10
        })],
        2
        /* CLASS */
      )];
    }) : x("v-if", !0), e.finished ? Y(e.$slots, "finished", {
      key: 1
    }, () => {
      var t;
      return [D(
        "div",
        {
          class: c(e.n("finished"))
        },
        ie((t = e.finishedText) != null ? t : e.pack.listFinishedText),
        3
        /* TEXT, CLASS */
      )];
    }) : x("v-if", !0), e.error ? Y(e.$slots, "error", {
      key: 2
    }, () => {
      var t;
      return [Me((h(), k(
        "div",
        {
          class: c(e.n("error")),
          onClick: n[0] || (n[0] = function() {
            return e.load && e.load(...arguments);
          })
        },
        [Pe(
          ie((t = e.errorText) != null ? t : e.pack.listErrorText),
          1
          /* TEXT */
        )],
        2
        /* CLASS */
      )), [[a]])];
    }) : x("v-if", !0), D(
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
var qd = ne({
  name: gy,
  directives: {
    Ripple: Xe
  },
  components: {
    VarLoading: mr
  },
  props: vy,
  setup(e) {
    var n = S(null), r = S(null), {
      tabItem: a,
      bindTabItem: t
    } = hy(), o;
    y(t, {}), a && fe(() => a.current.value, u), fe(() => [e.loading, e.error, e.finished], u), on(() => {
      o = cr(n.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), ho(s);
    function i() {
      y(e["onUpdate:error"], !1), y(e["onUpdate:loading"], !0), y(e.onLoad);
    }
    function l() {
      var {
        bottom: v
      } = _e(o), {
        bottom: f
      } = _e(r.value);
      return Math.floor(f) - He(e.offset) <= v;
    }
    function s() {
      o.removeEventListener("scroll", u);
    }
    function u() {
      return d.apply(this, arguments);
    }
    function d() {
      return d = py(function* () {
        yield Ye(), !(e.loading || e.finished || e.error || (a == null ? void 0 : a.current.value) === !1 || !l()) && i();
      }), d.apply(this, arguments);
    }
    return {
      pack: xe,
      listEl: n,
      detectorEl: r,
      isNumber: pn,
      load: i,
      check: u,
      n: by,
      classes: yy
    };
  }
});
qd.render = wy;
const Ja = qd;
oe(Ja);
var M$ = Ja, Cy = {
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
  name: Sy,
  classes: ky,
  n: fs
} = re("loading-bar");
const $y = ne({
  name: Sy,
  props: Cy,
  setup(e) {
    return () => Q("div", {
      class: ky(fs(), [e.error, fs("--error")]),
      style: {
        zIndex: Cn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: Se(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Se(e.top)
      }
    }, null);
  }
});
var Xd, Kd, Io, Zd, cs, Jd = {}, Ty = {
  value: 0,
  opacity: 0,
  error: !1
}, nn = Fe(Ty), Oy = (e) => {
  Object.assign(nn, e);
}, Py = (e) => {
  Object.assign(nn, e), Jd = e;
}, My = () => {
  Object.keys(Jd).forEach((e) => {
    nn[e] !== void 0 && (nn[e] = void 0);
  });
}, Qd = () => {
  cs || (cs = !0, ia($y, nn));
}, ol = () => {
  Xd = window.setTimeout(() => {
    if (!(nn.value >= 95)) {
      var e = Math.random();
      nn.value < 70 && (e = Math.round(5 * Math.random())), nn.value += e, ol();
    }
  }, 200);
}, il = () => {
  window.clearTimeout(Kd), window.clearTimeout(Xd), window.clearTimeout(Io), window.clearTimeout(Zd);
}, Iy = () => {
  il(), nn.error = !1, nn.value = 0, Qd(), Io = window.setTimeout(() => {
    nn.opacity = 1;
  }, 200), ol();
}, _d = () => {
  il(), nn.value = 100, Io = window.setTimeout(() => {
    nn.opacity = 0, Kd = window.setTimeout(() => {
      nn.error = !1;
    }, 250);
  }, 300);
}, By = () => {
  il(), nn.error = !0, nn.value === 100 && (nn.value = 0), Qd(), Io = window.setTimeout(() => {
    nn.opacity = 1;
  }, 200), ol(), Zd = window.setTimeout(_d, 300);
}, xd = {
  start: Iy,
  finish: _d,
  error: By,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Oy,
  setDefaultOptions: Py,
  resetDefaultOptions: My
}, I$ = xd;
const Ti = xd;
var Ey = {
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOutside: U(),
  "onUpdate:show": U()
}, {
  name: Ny,
  n: Dy,
  classes: Vy
} = re("menu");
function Ay(e, n) {
  return h(), k(
    "div",
    {
      ref: "host",
      class: c(e.classes(e.n(), e.n("$--box"))),
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
    [Y(e.$slots, "default"), (h(), ke(Qn, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [Q(We, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: me(() => [Me(D(
        "div",
        {
          ref: "popover",
          style: W({
            zIndex: e.zIndex,
            width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
          }),
          class: c(e.classes(e.n("menu"), e.n("$--box"), e.popoverClass, [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
          onClick: n[0] || (n[0] = Pn(() => {
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
      ), [[Un, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var ev = ne({
  name: Ny,
  props: Ey,
  setup(e) {
    var {
      disabled: n
    } = la(), {
      popover: r,
      host: a,
      hostSize: t,
      show: o,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: p,
      // expose
      close: b,
      // expose
      resize: g
    } = Od(e);
    return {
      popover: r,
      host: a,
      hostSize: t,
      show: o,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: bn,
      toSizeUnit: Se,
      n: Dy,
      classes: Vy,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      resize: g,
      open: p,
      close: b
    };
  }
});
ev.render = Ay;
const Nr = ev;
oe(Nr);
var B$ = Nr, nv = Symbol("SELECT_BIND_OPTION_KEY");
function zy() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = sn(nv);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function Ly() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = ln(nv);
  return r || Mn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var Ry = {
  label: {},
  value: {}
}, {
  name: Uy,
  n: Hy,
  classes: Yy
} = re("option");
function Fy(e, n) {
  var r = le("var-checkbox"), a = le("var-hover-overlay"), t = Ue("ripple"), o = Ue("hover");
  return Me((h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: W({
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
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
    ), e.multiple ? (h(), ke(r, {
      key: 0,
      ref: "checkbox",
      "checked-color": e.focusColor,
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
      onClick: n[1] || (n[1] = Pn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["checked-color", "modelValue", "onChange"])) : x("v-if", !0), D(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [Y(e.$slots, "default", {}, () => [Pe(
        ie(e.label),
        1
        /* TEXT */
      )])],
      2
      /* CLASS */
    ), Q(a, {
      hovering: e.hovering
    }, null, 8, ["hovering"])],
    6
    /* CLASS, STYLE */
  )), [[t], [o, e.handleHovering, "desktop"]]);
}
var rv = ne({
  name: Uy,
  directives: {
    Ripple: Xe,
    Hover: zn
  },
  components: {
    VarCheckbox: qr,
    VarHoverOverlay: Sn
  },
  props: Ry,
  setup(e) {
    var n = S(!1), r = L(() => n.value), a = L(() => e.label), t = L(() => e.value), {
      select: o,
      bindSelect: i
    } = Ly(), {
      multiple: l,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, {
      hovering: v,
      handleHovering: f
    } = Kn(), m = {
      label: a,
      value: t,
      selected: r,
      sync: g
    };
    fe([() => e.label, () => e.value], d), i(m);
    function p() {
      l.value && (n.value = !n.value), u(m);
    }
    function b() {
      return u(m);
    }
    function g(w) {
      n.value = w;
    }
    return {
      n: Hy,
      classes: Yy,
      optionSelected: n,
      multiple: l,
      focusColor: s,
      hovering: v,
      handleHovering: f,
      handleClick: p,
      handleSelect: b
    };
  }
});
rv.render = Fy;
const Qa = rv;
oe(Qa);
var E$ = Qa, jy = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  onClick: U(),
  "onUpdate:show": U()
};
function Wy(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Pt(e);
}
var {
  name: Gy,
  n: ms
} = re("overlay");
const _a = ne({
  name: Gy,
  inheritAttrs: !1,
  props: jy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Nt(() => e.show, 1), {
      disabled: o
    } = la();
    go(() => e.show, () => e.lockScroll);
    function i() {
      y(e.onClick), y(e["onUpdate:show"], !1);
    }
    function l() {
      return Q("div", Re({
        class: ms(),
        style: {
          zIndex: t.value - 1
        }
      }, a, {
        onClick: i
      }), [y(r.default)]);
    }
    function s() {
      return Q(We, {
        name: ms("--fade")
      }, {
        default: () => [e.show && l()]
      });
    }
    return () => {
      var {
        teleport: u
      } = e;
      if (u) {
        var d;
        return Q(Qn, {
          to: u,
          disabled: o.value
        }, Wy(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
oe(_a);
var N$ = _a, qy = {
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
  onChange: U(),
  "onUpdate:current": U(),
  "onUpdate:size": U()
}, {
  name: Xy,
  n: Ky,
  classes: Zy
} = re("pagination"), Jy = ["item-mode", "onClick"];
function Qy(e, n) {
  var r = le("var-icon"), a = le("var-input"), t = le("var-cell"), o = le("var-menu"), i = Ue("ripple");
  return h(), k(
    "ul",
    {
      class: c(e.n())
    },
    [Me((h(), k(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [Y(e.$slots, "prev", {}, () => [Q(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), k(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [Q(a, {
        "var-pagination-cover": "",
        hint: !1,
        disabled: e.disabled,
        modelValue: e.simpleCurrentValue,
        "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
        onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
        onKeydown: n[3] || (n[3] = dl((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
      }, null, 8, ["disabled", "modelValue"]), D("span", null, [Pe(
        " / " + ie(e.pageCount) + " ",
        1
        /* TEXT */
      ), D(
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
    )) : (h(!0), k(
      Ve,
      {
        key: 1
      },
      Ge(e.pageList, (l, s) => Me((h(), k("li", {
        key: s,
        "item-mode": e.getMode(l, s),
        class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
        onClick: (u) => e.clickItem(l, s)
      }, [Pe(
        ie(l),
        1
        /* TEXT */
      )], 10, Jy)), [[i, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Me((h(), k(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [Y(e.$slots, "next", {}, () => [Q(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), k(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [Q(o, {
        placement: "cover-top",
        disabled: e.disabled,
        show: e.menuVisible,
        "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l)
      }, {
        menu: me(() => [(h(!0), k(
          Ve,
          null,
          Ge(e.sizeOption, (l, s) => Me((h(), ke(t, {
            class: c(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
            key: s,
            onClick: (u) => e.clickSize(l)
          }, {
            default: me(() => [Pe(
              ie(l) + ie(e.pack.paginationItem) + " / " + ie(e.pack.paginationPage),
              1
              /* TEXT */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["class", "onClick"])), [[i]])),
          128
          /* KEYED_FRAGMENT */
        ))]),
        default: me(() => [D(
          "div",
          {
            class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
            onClick: n[5] || (n[5] = Pn(function() {
              return e.showMenu && e.showMenu(...arguments);
            }, ["stop"]))
          },
          [D(
            "span",
            null,
            ie(e.size) + ie(e.pack.paginationItem) + " / " + ie(e.pack.paginationPage),
            1
            /* TEXT */
          ), Q(r, {
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (h(), k(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
      },
      [Pe(
        ie(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), Q(a, {
        modelValue: e.quickJumperValue,
        "onUpdate:modelValue": n[7] || (n[7] = (l) => e.quickJumperValue = l),
        disabled: e.disabled,
        "var-pagination-cover": "",
        onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.quickJumperValue, l)),
        onKeydown: n[9] || (n[9] = dl((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
      }, null, 8, ["modelValue", "disabled"])],
      2
      /* CLASS */
    )) : x("v-if", !0), e.totalText ? (h(), k(
      "li",
      {
        key: 4,
        class: c(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
      },
      ie(e.totalText),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var av = ne({
  name: Xy,
  components: {
    VarMenu: Nr,
    VarIcon: Le,
    VarCell: Gr,
    VarInput: ea
  },
  directives: {
    Ripple: Xe
  },
  props: qy,
  setup(e) {
    var n = S(!1), r = S(""), a = S("1"), t = S(!1), o = S(!1), i = S(R(e.current) || 1), l = S(R(e.size) || 10), s = S([]), u = L(() => Math.ceil(e.maxPagerCount / 2)), d = L(() => Math.ceil(R(e.total) / R(l.value))), v = L(() => {
      var C = l.value * (i.value - 1) + 1, O = Math.min(l.value * i.value, R(e.total));
      return [C, O];
    }), f = L(() => e.showTotal ? e.showTotal(R(e.total), v.value) : "");
    fe([() => e.current, () => e.size], (C) => {
      var [O, E] = C;
      i.value = R(O) || 1, l.value = R(E || 10);
    }), fe([i, l, d], (C, O) => {
      var [E, A, P] = C, [I, N] = O, V = [], {
        maxPagerCount: z,
        total: K,
        onChange: _
      } = e, ae = Math.ceil(R(K) / R(N)), H = P - (z - u.value) - 1;
      if (a.value = "" + E, P - 2 > z) {
        if (I === void 0 || P !== ae)
          for (var X = 2; X < z + 2; X++)
            V.push(X);
        if (E <= z && E < H) {
          V = [];
          for (var J = 1; J < z + 1; J++)
            V.push(J + 1);
          t.value = !0, o.value = !1;
        }
        if (E > z && E < H) {
          V = [];
          for (var $ = 1; $ < z + 1; $++)
            V.push(E + $ - u.value);
          t.value = E === 2 && z === 1, o.value = !1;
        }
        if (E >= H) {
          V = [];
          for (var B = 1; B < z + 1; B++)
            V.push(P - (z - B) - 1);
          t.value = !1, o.value = !0;
        }
        V = [1, "...", ...V, "...", P];
      } else
        for (var q = 1; q <= P; q++)
          V.push(q);
      s.value = V, I != null && P > 0 && y(_, E, A), y(e["onUpdate:current"], E), y(e["onUpdate:size"], A);
    }, {
      immediate: !0
    });
    function m(C, O) {
      return pn(C) ? !1 : O === 1 ? t.value : o.value;
    }
    function p(C, O) {
      return pn(C) ? "basic" : O === 1 ? "head" : "tail";
    }
    function b(C, O) {
      if (!(C === i.value || e.disabled)) {
        if (C === "...") {
          i.value = O === 1 ? Math.max(i.value - e.maxPagerCount, 1) : Math.min(i.value + e.maxPagerCount, d.value);
          return;
        }
        if (C === "prev") {
          i.value = M(i.value - 1);
          return;
        }
        if (C === "next") {
          i.value = M(i.value + 1);
          return;
        }
        pn(C) && (i.value = C);
      }
    }
    function g() {
      e.disabled || (n.value = !0);
    }
    function w(C) {
      l.value = C, n.value = !1;
      var O = M(i.value);
      a.value = String(O), i.value = O;
    }
    function M(C) {
      return C > d.value ? d.value : C < 1 ? 1 : C;
    }
    function T(C, O, E) {
      E.target.blur();
      var A = M(R(O));
      a.value = String(A), i.value = A, C === "quick" && (r.value = "");
    }
    return {
      pack: xe,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      quickJumperValue: r,
      simpleCurrentValue: a,
      totalText: f,
      n: Ky,
      classes: Zy,
      getMode: p,
      isHideEllipsis: m,
      clickItem: b,
      showMenu: g,
      clickSize: w,
      setPage: T,
      toNumber: R,
      formatElevation: bn
    };
  }
});
av.render = Qy;
const xa = av;
oe(xa);
var D$ = xa, _y = {
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
  onClick: U()
}, {
  name: xy,
  n: e1,
  classes: n1
} = re("paper");
function r1(e, n) {
  var r = Ue("ripple");
  return Me((h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: W({
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
var tv = ne({
  name: xy,
  directives: {
    Ripple: Xe
  },
  props: _y,
  setup(e) {
    function n(r) {
      y(e.onClick, r);
    }
    return {
      n: e1,
      classes: n1,
      formatElevation: bn,
      toSizeUnit: Se,
      handleClick: n
    };
  }
});
tv.render = r1;
const et = tv;
oe(et);
var V$ = et;
function Oi() {
  return Oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Oi.apply(this, arguments);
}
var a1 = Oi({
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
  onChange: U(),
  onConfirm: U(),
  onCancel: U()
}, en(Et, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  name: t1,
  n: o1,
  classes: i1
} = re("picker"), hs = 300, l1 = 15, ps = 200, s1 = 1e3, gs = 0, u1 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], d1 = ["onTransitionend"], v1 = ["onClick"];
function f1(e, n) {
  var r = le("var-button");
  return h(), ke(
    ta(e.dynamic ? e.n("$-popup") : e.Transition),
    Re(e.dynamic ? {
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
      default: me(() => [D(
        "div",
        Re({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [Y(e.$slots, "cancel", {}, () => [Q(r, {
            class: c(e.n("cancel-button")),
            "var-picker-cover": "",
            text: "",
            "text-color": e.cancelButtonTextColor,
            onClick: e.cancel
          }, {
            default: me(() => {
              var a;
              return [Pe(
                ie((a = e.cancelButtonText) != null ? a : e.pack.pickerCancelButtonText),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])]), Y(e.$slots, "title", {}, () => {
            var a;
            return [D(
              "div",
              {
                class: c(e.n("title"))
              },
              ie((a = e.title) != null ? a : e.pack.pickerTitle),
              3
              /* TEXT, CLASS */
            )];
          }), Y(e.$slots, "confirm", {}, () => [Q(r, {
            class: c(e.n("confirm-button")),
            text: "",
            "var-picker-cover": "",
            "text-color": e.confirmButtonTextColor,
            onClick: e.confirm
          }, {
            default: me(() => {
              var a;
              return [Pe(
                ie((a = e.confirmButtonText) != null ? a : e.pack.pickerConfirmButtonText),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])])],
          2
          /* CLASS */
        )) : x("v-if", !0), D(
          "div",
          {
            class: c(e.n("columns")),
            style: W({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), k(
            Ve,
            null,
            Ge(e.scrollColumns, (a) => (h(), k("div", {
              class: c(e.n("column")),
              key: a.id,
              onTouchstartPassive: (t) => e.handleTouchstart(t, a),
              onTouchmove: Pn((t) => e.handleTouchmove(t, a), ["prevent"]),
              onTouchend: (t) => e.handleTouchend(a)
            }, [D("div", {
              class: c(e.n("scroller")),
              ref_for: !0,
              ref: (t) => e.setScrollEl(t, a),
              style: W({
                transform: "translateY(" + a.translate + "px)",
                transitionDuration: a.duration + "ms",
                transitionProperty: a.duration ? "transform" : "none"
              }),
              onTransitionend: (t) => e.handleTransitionend(a)
            }, [(h(!0), k(
              Ve,
              null,
              Ge(a.column.texts, (t, o) => (h(), k("div", {
                class: c(e.n("option")),
                style: W({
                  height: e.optionHeight + "px"
                }),
                key: t,
                onClick: (i) => e.handleClick(a, o)
              }, [D(
                "div",
                {
                  class: c(e.n("text"))
                },
                ie(e.textFormatter(t, a.columnIndex)),
                3
                /* TEXT, CLASS */
              )], 14, v1))),
              128
              /* KEYED_FRAGMENT */
            ))], 46, d1)], 42, u1))),
            128
            /* KEYED_FRAGMENT */
          )), D(
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
          ), D(
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
var ov = ne({
  name: t1,
  components: {
    VarButton: cn,
    VarPopup: Hn
  },
  inheritAttrs: !1,
  props: a1,
  setup(e) {
    var n = S([]), r = L(() => He(e.optionHeight)), a = L(() => He(e.optionCount)), t = L(() => a.value * r.value / 2 - r.value / 2), o = L(() => a.value * r.value), {
      prevY: i,
      moveY: l,
      dragging: s,
      startTouch: u,
      moveTouch: d,
      endTouch: v
    } = po(), f = [];
    fe(() => e.columns, ($) => {
      n.value = e.cascade ? V(vl($)) : N(vl($));
      var {
        indexes: B
      } = M();
      f = [...B];
    }, {
      immediate: !0,
      deep: !0
    });
    function m($, B) {
      B.scrollEl = $;
    }
    function p($) {
      y(e["onUpdate:show"], $);
    }
    function b($) {
      var B = t.value - $.column.texts.length * r.value, q = r.value + t.value;
      $.translate = vr($.translate, B, q);
    }
    function g($, B) {
      var q = Math.round((t.value - B) / r.value);
      return df(q, $.column.texts);
    }
    function w($) {
      return $.translate = t.value - $.index * r.value, $.translate;
    }
    function M() {
      var $ = n.value.map((q) => q.column.texts[q.index]), B = n.value.map((q) => q.index);
      return {
        texts: $,
        indexes: B
      };
    }
    function T($, B) {
      B === void 0 && (B = 0), w($), $.duration = B;
    }
    function C($, B, q) {
      $.translate += Math.abs(B / q) / 3e-3 * (B < 0 ? -1 : 1);
    }
    function O($, B) {
      s.value || ($.index = B, $.scrolling = !0, T($, ps));
    }
    function E($, B) {
      B.touching = !0, B.translate = Vo(B.scrollEl), u($);
    }
    function A($, B) {
      if (B.touching) {
        d($), B.scrolling = !1, B.duration = 0, B.prevY = i.value, B.translate += l.value, b(B);
        var q = performance.now();
        q - B.momentumTime > hs && (B.momentumTime = q, B.momentumPrevY = B.translate);
      }
    }
    function P($) {
      v(), $.touching = !1, $.prevY = 0;
      var B = $.translate - $.momentumPrevY, q = performance.now() - $.momentumTime, j = Math.abs(B) >= l1 && q <= hs;
      j && C($, B, q), $.index = g($, $.translate);
      var F = $.translate, G = w($);
      $.scrolling = G !== F, T($, j ? s1 : ps), $.scrolling || ae($);
    }
    function I($) {
      $.scrolling = !1, ae($);
    }
    function N($) {
      return $.map((B, q) => {
        var j, F = De(B) ? {
          texts: B
        } : B, G = {
          id: gs++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: t.value,
          index: (j = F.initialIndex) != null ? j : 0,
          columnIndex: q,
          duration: 0,
          momentumTime: 0,
          column: F,
          scrollEl: null,
          scrolling: !1
        };
        return T(G), G;
      });
    }
    function V($) {
      var B = [];
      return z(B, $, 0, !0), B;
    }
    function z($, B, q, j) {
      if (j === void 0 && (j = !1), De(B) && B.length) {
        var F, G = j && (F = e.cascadeInitialIndexes[$.length]) != null ? F : 0, ee = {
          id: gs++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: t.value,
          index: G,
          columnIndex: q,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: B.map((ce) => ce[e.textKey])
          },
          columns: B,
          scrollEl: null,
          scrolling: !1
        };
        $.push(ee), T(ee), z($, ee.columns[ee.index].children, q + 1, j);
      }
    }
    function K($) {
      n.value.splice(n.value.indexOf($) + 1), z(n.value, $.columns[$.index].children, $.columnIndex + 1);
    }
    function _() {
      var {
        indexes: $
      } = M();
      return $.every((B, q) => B === f[q]);
    }
    function ae($) {
      var {
        cascade: B,
        onChange: q
      } = e;
      if (!_()) {
        B && K($);
        var j = n.value.some((ee) => ee.scrolling);
        if (!j) {
          var {
            texts: F,
            indexes: G
          } = M();
          f = [...G], y(q, F, G);
        }
      }
    }
    function H() {
      if (e.cascade) {
        var $ = n.value.find((B) => B.scrolling);
        $ && ($.index = g($, Vo($.scrollEl)), $.scrolling = !1, T($), K($));
      } else
        n.value.forEach((B) => {
          B.index = g(B, Vo(B.scrollEl)), T(B);
        });
    }
    function X() {
      H();
      var {
        texts: $,
        indexes: B
      } = M();
      f = [...B], y(e.onConfirm, $, B);
    }
    function J() {
      H();
      var {
        texts: $,
        indexes: B
      } = M();
      f = [...B], y(e.onCancel, $, B);
    }
    return {
      pack: xe,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: We,
      n: o1,
      classes: i1,
      setScrollEl: m,
      handlePopupUpdateShow: p,
      handleTouchstart: E,
      handleTouchmove: A,
      handleTouchend: P,
      handleTransitionend: I,
      confirm: X,
      cancel: J,
      handleClick: O
    };
  }
});
ov.render = f1;
const Lt = ov;
var mn;
function Dr(e) {
  return new Promise((n) => {
    Dr.close();
    var r = De(e) ? {
      columns: e
    } : e, a = Fe(r);
    a.dynamic = !0, a.teleport = "body", mn = a;
    var {
      unmountInstance: t
    } = ia(Lt, a, {
      onConfirm: (o, i) => {
        y(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, mn === a && (mn = null);
      },
      onCancel: (o, i) => {
        y(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
        }), a.show = !1, mn === a && (mn = null);
      },
      onClose: () => {
        y(a.onClose), n({
          state: "close"
        }), mn === a && (mn = null);
      },
      onClosed: () => {
        y(a.onClosed), t(), mn === a && (mn = null);
      },
      onRouteChange: () => {
        t(), mn === a && (mn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
Dr.close = function() {
  if (mn != null) {
    var e = mn;
    mn = null, Ye().then(() => {
      e.show = !1;
    });
  }
};
Dr.Component = Lt;
oe(Lt);
oe(Lt, Dr);
var A$ = Lt, c1 = {
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
}, er = 100, Pi = 20, bs = 2 * Math.PI * Pi, {
  name: m1,
  n: h1,
  classes: p1
} = re("progress"), g1 = ["viewBox"], b1 = ["r", "stroke-width", "stroke-dasharray"], y1 = ["r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function w1(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
          style: W({
            height: e.toSizeUnit(e.lineWidth),
            background: e.trackColor
          })
        },
        [e.indeterminate ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
          },
          [D(
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
          ), D(
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
        )) : (h(), k(
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
      ), e.label ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Pe(
          ie(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.mode === "circle" ? (h(), k(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: W({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), k("svg", {
        class: c(e.n("circle-svg")),
        style: W({
          transform: "rotate(" + (e.rotate - 90) + "deg)"
        }),
        viewBox: e.circleProps.viewBox
      }, [e.track ? (h(), k("circle", {
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
      }, null, 14, b1)) : x("v-if", !0), D("circle", {
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
      }, null, 14, y1)], 14, g1)), e.label ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Pe(
          ie(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var iv = ne({
  name: m1,
  props: c1,
  setup(e) {
    var n = L(() => {
      var a = R(e.value), t = a > er ? er : a, o = a > er ? er : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = L(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, i = Pi / (1 - He(t) / He(a)) * 2, l = "0 0 " + i + " " + i, s = R(o) > er ? er : Math.round(R(o)), u = "" + (er - s) / er * bs, d = He(t) / He(a) * i;
      return {
        strokeWidth: d,
        viewBox: l,
        strokeOffset: u,
        roundValue: s + "%"
      };
    });
    return {
      linearProps: n,
      CIRCUMFERENCE: bs,
      RADIUS: Pi,
      circleProps: r,
      n: h1,
      classes: p1,
      toSizeUnit: Se
    };
  }
});
iv.render = w1;
const nt = iv;
oe(nt);
var z$ = nt, C1 = {
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
  onRefresh: U(),
  "onUpdate:modelValue": U()
};
function ys(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ws(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ys(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ys(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  name: S1,
  n: Cs,
  classes: k1
} = re("pull-refresh"), Ss = 150;
function $1(e, n) {
  var r = le("var-icon");
  return h(), k(
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
    [D(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: W(e.controlStyle)
      },
      [Q(r, {
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
var lv = ne({
  name: S1,
  components: {
    VarIcon: Le
  },
  props: C1,
  setup(e) {
    var n = S(0), r = S(null), a = S(null), t = S(0), o = S("-125%"), i = S("arrow-down"), l = S("default"), s = S(!1), u = L(() => Math.abs(2 * n.value)), d = L(() => l.value === "success"), v = L(() => l.value !== "loading" && l.value !== "success" && !e.disabled), f = L(() => ({
      transform: "translate3d(0px, " + (Qe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    })), m, p, b = 0, g = 0;
    fe(() => e.modelValue, (N) => {
      N === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, I();
      }, R(e.successDuration)));
    }), on(P), fr(r, "touchmove", O);
    function w(N) {
      return M.apply(this, arguments);
    }
    function M() {
      return M = ws(function* (N) {
        if (i.value !== N)
          return i.value = N, new Promise((V) => {
            window.setTimeout(V, Ss);
          });
      }), M.apply(this, arguments);
    }
    function T(N) {
      var V = "classList" in m ? m : document.body;
      V.classList[N](Cs() + "--lock");
    }
    function C(N) {
      if (n.value === 0) {
        var {
          width: V
        } = _e(a.value);
        n.value = -(V + V * 0.25);
      }
      b = N.touches[0].clientY, g = 0, p = cr(N.target);
    }
    function O(N) {
      if (!(!v.value || !p) && !(p !== m && wa(p) > 0)) {
        var V = wa(m);
        if (!(V > 0)) {
          var z = V === 0, K = N.touches[0];
          g = K.clientY - b, z && g >= 0 && N.preventDefault(), l.value !== "pulling" && (l.value = "pulling", t.value = N.touches[0].clientY), z && pn(o.value) && o.value > n.value && T("add");
          var _ = (N.touches[0].clientY - t.value) / 2 + n.value;
          o.value = _ >= u.value ? u.value : _, w(o.value >= u.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }
    function E() {
      return A.apply(this, arguments);
    }
    function A() {
      return A = ws(function* () {
        v.value && (s.value = !0, R(o.value) >= u.value * 0.2 ? (yield w("refresh"), l.value = "loading", o.value = u.value * 0.3, y(e["onUpdate:modelValue"], !0), Ye(() => {
          y(e.onRefresh);
        }), T("remove")) : (l.value = "loosing", i.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, T("remove");
        }, R(e.animationDuration))), p = null);
      }), A.apply(this, arguments);
    }
    function P() {
      m = e.target ? Ws(e.target, "PullRefresh") : cr(r.value);
    }
    function I() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, R(e.animationDuration));
    }
    return {
      ICON_TRANSITION: Ss,
      refreshStatus: l,
      freshNode: r,
      controlNode: a,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: Cs,
      classes: k1,
      touchStart: C,
      touchMove: O,
      touchEnd: E
    };
  }
});
lv.render = $1;
const rt = lv;
oe(rt);
var L$ = rt, T1 = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, sv = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function O1() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = sn(sv);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function P1() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = ln(sv);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  name: M1,
  n: I1,
  classes: B1
} = re("radio");
function E1(e, n) {
  var r = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = Ue("ripple"), i = Ue("hover");
  return h(), k(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      Re({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Me((h(), k(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: W({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(r, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-marked",
          size: e.iconSize
        }, null, 8, ["class", "size"])]) : Y(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [Q(r, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-blank",
          size: e.iconSize
        }, null, 8, ["class", "size"])]), Q(a, {
          hovering: !e.disabled && !e.formDisabled && e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[o, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }], [i, e.handleHovering, "desktop"]]), D(
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
    ), Q(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var uv = ne({
  name: M1,
  directives: {
    Ripple: Xe,
    Hover: zn
  },
  components: {
    VarIcon: Le,
    VarFormDetails: an,
    VarHoverOverlay: Sn
  },
  inheritAttrs: !1,
  props: T1,
  setup(e) {
    var n = ya(e, "modelValue"), r = L(() => n.value === e.checkedValue), a = S(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = P1(), {
      hovering: i,
      handleHovering: l
    } = Kn(), {
      form: s,
      bindForm: u
    } = Bn(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = In(), p = {
      sync: M,
      validate: C,
      resetValidation: m,
      reset: T
    };
    y(o, p), y(u, p);
    function b(E) {
      Ye(() => {
        var {
          validateTrigger: A,
          rules: P,
          modelValue: I
        } = e;
        v(A, E, P, I);
      });
    }
    function g(E) {
      var {
        checkedValue: A,
        onChange: P
      } = e;
      t && n.value === A || (n.value = E, y(P, n.value), t == null || t.onToggle(A), b("onChange"));
    }
    function w(E) {
      var {
        disabled: A,
        readonly: P,
        uncheckedValue: I,
        checkedValue: N,
        onClick: V
      } = e;
      s != null && s.disabled.value || A || (y(V, E), !(s != null && s.readonly.value || P) && (a.value = !0, g(r.value ? I : N)));
    }
    function M(E) {
      var {
        checkedValue: A,
        uncheckedValue: P
      } = e;
      n.value = E === A ? A : P;
    }
    function T() {
      n.value = e.uncheckedValue, m();
    }
    function C() {
      return f(e.rules, e.modelValue);
    }
    function O(E) {
      var {
        uncheckedValue: A,
        checkedValue: P
      } = e, I = ![A, P].includes(E);
      I && (E = r.value ? A : P), g(E);
    }
    return {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: i,
      handleHovering: l,
      n: I1,
      classes: B1,
      handleClick: w,
      toggle: O,
      reset: T,
      validate: C,
      resetValidation: m
    };
  }
});
uv.render = E1;
const at = uv;
oe(at);
var R$ = at, N1 = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  name: D1,
  n: V1,
  classes: A1
} = re("radio-group");
function z1(e, n) {
  var r = le("var-form-details");
  return h(), k(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(r, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var dv = ne({
  name: D1,
  components: {
    VarFormDetails: an
  },
  props: N1,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = O1(), {
      bindForm: t
    } = Bn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = In(), u = L(() => o.value), d = {
      onToggle: m,
      validate: p,
      reset: b,
      resetValidation: s,
      errorMessage: u
    };
    fe(() => e.modelValue, f), fe(() => n.value, f), y(t, d), a(d);
    function v(g) {
      Ye(() => {
        var {
          validateTrigger: w,
          rules: M,
          modelValue: T
        } = e;
        i(w, g, M, T);
      });
    }
    function f() {
      return r.forEach((g) => {
        var {
          sync: w
        } = g;
        return w(e.modelValue);
      });
    }
    function m(g) {
      y(e["onUpdate:modelValue"], g), y(e.onChange, g), v("onChange");
    }
    function p() {
      return l(e.rules, e.modelValue);
    }
    function b() {
      y(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: o,
      n: V1,
      classes: A1,
      reset: b,
      validate: p,
      resetValidation: s
    };
  }
});
dv.render = z1;
const tt = dv;
oe(tt);
var U$ = tt, L1 = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  name: R1,
  n: ua
} = re("rate"), U1 = ["onClick"];
function H1(e, n) {
  var r = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = Ue("ripple"), i = Ue("hover");
  return h(), k(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), k(
        Ve,
        null,
        Ge(e.toNumber(e.count), (l) => Me((h(), k("div", {
          key: l,
          style: W(e.getStyle(l)),
          class: c(e.getClass(l)),
          onClick: (s) => e.handleClick(l, s)
        }, [Q(r, {
          class: c(e.n("content-icon")),
          "var-rate-cover": "",
          transition: 0,
          namespace: e.namespace,
          name: e.getCurrentState(l).name,
          style: W({
            fontSize: e.toSizeUnit(e.size)
          })
        }, null, 8, ["class", "namespace", "name", "style"]), Q(a, {
          hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])], 14, U1)), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [i, e.createHoverHandler(l), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Q(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var vv = ne({
  name: R1,
  components: {
    VarIcon: Le,
    VarFormDetails: an,
    VarHoverOverlay: Sn
  },
  directives: {
    Ripple: Xe,
    Hover: zn
  },
  props: L1,
  setup(e) {
    var n = S(-1), {
      form: r,
      bindForm: a
    } = Bn(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: i,
      resetValidation: l
    } = In(), {
      hovering: s
    } = Kn(), u = Number(e.modelValue), d = {
      reset: T,
      validate: b,
      resetValidation: l
    };
    y(a, d);
    function v(C) {
      var {
        count: O,
        gap: E
      } = e;
      return {
        color: m(C).color,
        marginRight: C !== R(O) ? Se(E) : 0
      };
    }
    function f(C) {
      var {
        name: O,
        color: E
      } = m(C);
      return {
        [ua("content")]: !0,
        [ua("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [ua("--error")]: t.value,
        [ua("--primary")]: O !== e.emptyIcon && !E
      };
    }
    function m(C) {
      var {
        modelValue: O,
        disabled: E,
        disabledColor: A,
        color: P,
        half: I,
        emptyColor: N,
        icon: V,
        halfIcon: z,
        emptyIcon: K
      } = e, _ = P;
      return (E || r != null && r.disabled.value) && (_ = A), C <= R(O) ? {
        color: _,
        name: V
      } : I && C <= R(O) + 0.5 ? {
        color: _,
        name: z
      } : {
        color: E || r != null && r.disabled.value ? A : N,
        name: K
      };
    }
    function p(C, O) {
      var {
        half: E,
        clearable: A
      } = e, {
        offsetWidth: P
      } = O.target;
      E && O.offsetX <= Math.floor(P / 2) && (C -= 0.5), u === C && A && (C = 0), u = C, y(e["onUpdate:modelValue"], C);
    }
    function b() {
      return i(e.rules, R(e.modelValue));
    }
    function g() {
      return Ye(() => o(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function w(C, O) {
      var {
        readonly: E,
        disabled: A,
        onChange: P
      } = e;
      E || A || r != null && r.disabled.value || r != null && r.readonly.value || (p(C, O), y(P, C), g());
    }
    function M(C) {
      return (O) => {
        n.value = C, s.value = O;
      };
    }
    function T() {
      y(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: t,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: v,
      getClass: f,
      getCurrentState: m,
      handleClick: w,
      createHoverHandler: M,
      reset: T,
      validate: b,
      resetValidation: l,
      toSizeUnit: Se,
      toNumber: R,
      n: ua
    };
  }
});
vv.render = H1;
const ot = vv;
oe(ot);
var H$ = ot, Y1 = (e) => (br(""), e = e(), yr(), e), F1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, j1 = /* @__PURE__ */ Y1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), W1 = [j1];
function G1(e, n) {
  return h(), k("svg", F1, W1);
}
var fv = ne({});
fv.render = G1;
const q1 = fv;
var X1 = (e) => (br(""), e = e(), yr(), e), K1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, Z1 = /* @__PURE__ */ X1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), J1 = [Z1];
function Q1(e, n) {
  return h(), k("svg", K1, J1);
}
var cv = ne({});
cv.render = Q1;
const _1 = cv;
var x1 = (e) => (br(""), e = e(), yr(), e), ew = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, nw = /* @__PURE__ */ x1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), rw = [nw];
function aw(e, n) {
  return h(), k("svg", ew, rw);
}
var mv = ne({});
mv.render = aw;
const tw = mv;
var {
  n: ow,
  classes: iw
} = re("result");
function lw(e, n) {
  return h(), k(
    Ve,
    null,
    [D(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), D(
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
    ), D(
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
    ), D(
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
    ), D(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), D(
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
var hv = ne({
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
      n: ow,
      classes: iw,
      toNumber: R
    };
  }
});
hv.render = lw;
const sw = hv;
var uw = (e) => (br(""), e = e(), yr(), e), dw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, vw = /* @__PURE__ */ uw(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), fw = [vw];
function cw(e, n) {
  return h(), k("svg", dw, fw);
}
var pv = ne({});
pv.render = cw;
const mw = pv;
var hw = (e) => (br(""), e = e(), yr(), e), pw = {
  viewBox: "-4 -4 32 32"
}, gw = /* @__PURE__ */ hw(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), bw = [gw];
function yw(e, n) {
  return h(), k("svg", pw, bw);
}
var gv = ne({});
gv.render = yw;
const ww = gv;
var Cw = {
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
  name: Sw,
  n: kw,
  classes: $w
} = re("result");
function Tw(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "image", {}, () => [e.type ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: W({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), ke(ta(e.type), {
          "border-size": e.borderSize,
          animation: e.animation
        }, null, 8, ["border-size", "animation"]))],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : x("v-if", !0)]), Y(e.$slots, "title", {}, () => [e.title ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ie(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ie(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [Y(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var bv = ne({
  name: Sw,
  components: {
    Info: q1,
    Success: sw,
    Warning: tw,
    Error: _1,
    Question: mw,
    Empty: ww
  },
  props: Cw,
  setup(e) {
    var n = L(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? Se(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = L(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? Se(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      circleSize: n,
      borderSize: r,
      toSizeUnit: Se,
      n: kw,
      classes: $w,
      toNumber: R,
      toPxNum: He
    };
  }
});
bv.render = Tw;
const it = bv;
oe(it);
var Y$ = it, Ow = {
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
  onClick: U()
}, {
  name: Pw,
  n: Mw,
  classes: Iw
} = re("row");
function Bw(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: W({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: -e.average[0] + "px " + -e.average[1] + "px"
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
var yv = ne({
  name: Pw,
  props: Ow,
  setup(e) {
    var n = L(() => De(e.gutter) ? e.gutter.map((s) => He(s) / 2) : [0, He(e.gutter) / 2]), {
      cols: r,
      bindCols: a,
      length: t
    } = wh(), o = {
      computePadding: i
    };
    fe(() => t.value, i), fe(() => e.gutter, i), a(o);
    function i() {
      r.forEach((s) => {
        var [u, d] = n.value;
        s.setPadding({
          left: d,
          right: d,
          top: u,
          bottom: u
        });
      });
    }
    function l(s) {
      y(e.onClick, s);
    }
    return {
      average: n,
      n: Mw,
      classes: Iw,
      handleClick: l,
      padStartFlex: ao
    };
  }
});
yv.render = Bw;
const lt = yv;
oe(lt);
var F$ = lt;
function Mi() {
  return Mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Mi.apply(this, arguments);
}
var Ew = Mi({
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
  onFocus: U(),
  onBlur: U(),
  onClose: U(),
  onChange: U(),
  onClear: U(),
  "onUpdate:modelValue": U()
}, en(tl, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  name: Nw,
  n: Dw,
  classes: Vw
} = re("select"), Aw = {
  key: 1
};
function zw(e, n) {
  var r = le("var-chip"), a = le("var-icon"), t = le("var-field-decorator"), o = le("var-menu"), i = le("var-form-details");
  return h(), k(
    "div",
    {
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [Q(o, {
      "var-select-cover": "",
      "same-width": "",
      "close-on-click-reference": "",
      show: e.showMenu,
      "onUpdate:show": n[1] || (n[1] = (l) => e.showMenu = l),
      class: c(e.n("menu")),
      "popover-class": e.variant === "standard" && e.hint ? e.n("--standard-menu-margin") : void 0,
      "offset-y": e.offsetY,
      disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
      placement: e.placement,
      "default-style": !1,
      onClickOutside: e.handleBlur
    }, {
      menu: me(() => [D(
        "div",
        {
          ref: "menuEl",
          class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
        },
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      )]),
      default: me(() => [Q(
        t,
        It(mo({
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
        eo({
          "append-icon": me(() => [Y(e.$slots, "append-icon")]),
          default: me(() => [D(
            "div",
            {
              class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
              style: W({
                textAlign: e.textAlign,
                color: e.textColor
              })
            },
            [D(
              "div",
              {
                class: c(e.n("label"))
              },
              [e.isEmptyModelValue ? x("v-if", !0) : Y(e.$slots, "selected", {
                key: 0
              }, () => [e.multiple ? (h(), k(
                Ve,
                {
                  key: 0
                },
                [e.chip ? (h(), k(
                  "div",
                  {
                    key: 0,
                    class: c(e.n("chips"))
                  },
                  [(h(!0), k(
                    Ve,
                    null,
                    Ge(e.labels, (l) => (h(), ke(r, {
                      class: c(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: l,
                      onClick: n[0] || (n[0] = Pn(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(l)
                    }, {
                      default: me(() => [Pe(
                        ie(l),
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
                )) : (h(), k(
                  "div",
                  {
                    key: 1,
                    class: c(e.n("values"))
                  },
                  ie(e.labels.join(e.separator)),
                  3
                  /* TEXT, CLASS */
                ))],
                64
                /* STABLE_FRAGMENT */
              )) : (h(), k(
                "span",
                Aw,
                ie(e.label),
                1
                /* TEXT */
              ))])],
              2
              /* CLASS */
            ), e.enableCustomPlaceholder ? (h(), k(
              "span",
              {
                key: 0,
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                style: W({
                  color: e.placeholderColor
                })
              },
              ie(e.placeholder),
              7
              /* TEXT, CLASS, STYLE */
            )) : x("v-if", !0), Y(e.$slots, "arrow-icon", {
              focus: e.showMenu
            }, () => [Q(a, {
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
    }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]), Q(i, {
      "error-message": e.errorMessage,
      onClick: n[2] || (n[2] = Pn(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var wv = ne({
  name: Nw,
  components: {
    VarIcon: Le,
    VarMenu: Nr,
    VarChip: Xr,
    VarFieldDecorator: Yd,
    VarFormDetails: an
  },
  props: Ew,
  setup(e) {
    var n = S(!1), r = S(!1), a = L(() => e.multiple), t = L(() => e.focusColor), o = S(""), i = S([]), l = L(() => jn(e.modelValue)), s = L(() => e.disabled || e.readonly ? "" : "pointer"), u = S(0), {
      bindForm: d,
      form: v
    } = Bn(), {
      length: f,
      options: m,
      bindOptions: p
    } = zy(), {
      errorMessage: b,
      validateWithTrigger: g,
      validate: w,
      // expose
      resetValidation: M
    } = In(), T = S(null), C = L(() => e.variant === "outlined" ? "bottom" : "cover-top"), O = L(() => {
      var {
        hint: F,
        blurColor: G,
        focusColor: ee
      } = e;
      if (!F)
        return b.value ? "var(--field-decorator-error-color)" : n.value ? ee || "var(--field-decorator-focus-color)" : G || "var(--field-decorator-blur-color)";
    }), E = L(() => !e.hint && jn(e.modelValue)), A = {
      multiple: a,
      focusColor: t,
      computeLabel: P,
      onSelect: _,
      reset: j,
      validate: q,
      resetValidation: M
    };
    fe(() => e.multiple, () => {
      var {
        multiple: F,
        modelValue: G
      } = e;
      F && !De(G) && Mn("Select", "The modelValue must be an array when multiple is true");
    }), fe(() => e.modelValue, J, {
      deep: !0
    }), fe(() => f.value, J), p(A), y(d, A);
    function P() {
      var {
        multiple: F,
        modelValue: G
      } = e;
      if (F) {
        var ee = G;
        i.value = ee.map(V);
      }
      !F && !jn(G) && (o.value = V(G)), !F && jn(G) && (o.value = "");
    }
    function I(F) {
      Ye(() => {
        var {
          validateTrigger: G,
          rules: ee,
          modelValue: ce
        } = e;
        g(G, F, ee, ce);
      });
    }
    function N(F) {
      var {
        value: G,
        label: ee
      } = F;
      return G.value != null ? G.value : ee.value;
    }
    function V(F) {
      var G, ee, ce = m.find((Ce) => {
        var {
          value: Ee
        } = Ce;
        return Ee.value === F;
      });
      return ce || (ce = m.find((Ce) => {
        var {
          label: Ee
        } = Ce;
        return Ee.value === F;
      })), (G = (ee = ce) == null ? void 0 : ee.label.value) != null ? G : "";
    }
    function z() {
      var {
        disabled: F,
        readonly: G,
        onFocus: ee
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || F || G || (u.value = He(e.offsetY), n.value = !0, y(ee), I("onFocus"));
    }
    function K() {
      var {
        disabled: F,
        readonly: G,
        onBlur: ee
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || F || G || (B(), y(ee), I("onBlur"));
    }
    function _(F) {
      var {
        disabled: G,
        readonly: ee,
        multiple: ce,
        onChange: Ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || G || ee)) {
        var Ee = ce ? m.filter((te) => {
          var {
            selected: de
          } = te;
          return de.value;
        }).map(N) : N(F);
        y(e["onUpdate:modelValue"], Ee), y(Ce, Ee), I("onChange"), ce || B();
      }
    }
    function ae() {
      var {
        disabled: F,
        readonly: G,
        multiple: ee,
        clearable: ce,
        onClear: Ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || F || G || !ce)) {
        var Ee = ee ? [] : void 0;
        y(e["onUpdate:modelValue"], Ee), y(Ce, Ee), I("onClear");
      }
    }
    function H(F) {
      var {
        disabled: G,
        onClick: ee
      } = e;
      v != null && v.disabled.value || G || (y(ee, F), I("onClick"));
    }
    function X(F) {
      var {
        disabled: G,
        readonly: ee,
        modelValue: ce,
        onClose: Ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || G || ee)) {
        var Ee = ce, te = m.find((ge) => {
          var {
            label: $e
          } = ge;
          return $e.value === F;
        }), de = Ee.filter((ge) => {
          var $e;
          return ge !== (($e = te.value.value) != null ? $e : te.label.value);
        });
        y(e["onUpdate:modelValue"], de), y(Ce, de), I("onClose");
      }
    }
    function J() {
      var {
        multiple: F,
        modelValue: G
      } = e;
      if (F) {
        var ee = G;
        m.forEach((ce) => ce.sync(ee.includes(N(ce))));
      } else
        m.forEach((ce) => ce.sync(G === N(ce)));
      P();
    }
    function $() {
      u.value = He(e.offsetY), n.value = !0, r.value = !0;
    }
    function B() {
      n.value = !1, r.value = !1;
    }
    function q() {
      return w(e.rules, e.modelValue);
    }
    function j() {
      y(e["onUpdate:modelValue"], e.multiple ? [] : void 0), M();
    }
    return {
      offsetY: u,
      isFocus: n,
      showMenu: r,
      errorMessage: b,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: i,
      isEmptyModelValue: l,
      menuEl: T,
      placement: C,
      cursor: s,
      placeholderColor: O,
      enableCustomPlaceholder: E,
      n: Dw,
      classes: Vw,
      handleFocus: z,
      handleBlur: K,
      handleClear: ae,
      handleClick: H,
      handleClose: X,
      reset: j,
      validate: q,
      resetValidation: M,
      focus: $,
      blur: B
    };
  }
});
wv.render = zw;
const st = wv;
oe(st);
var j$ = st, Lw = {
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
  name: Rw,
  n: Uw,
  classes: Hw
} = re("skeleton");
function Yw(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), k(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: W({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [D(
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), k(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: W({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [D(
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), k(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (h(), k(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: W({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [D(
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
          )) : x("v-if", !0), (h(!0), k(
            Ve,
            null,
            Ge(e.toNumber(e.rows), (r, a) => (h(), k(
              "div",
              {
                class: c(e.n("row")),
                key: r,
                style: W({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [D(
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
        )) : x("v-if", !0)],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.loading && e.fullscreen ? (h(), k(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: W({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [D(
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
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Cv = ne({
  name: Rw,
  props: Lw,
  setup: () => ({
    n: Uw,
    classes: Hw,
    toSizeUnit: Se,
    toNumber: R
  })
});
Cv.render = Yw;
const ut = Cv;
oe(ut);
var W$ = ut, qe = /* @__PURE__ */ function(e) {
  return e.First = "1", e.Second = "2", e;
}({}), Fw = {
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
  onChange: U(),
  onStart: U(),
  onEnd: U(),
  "onUpdate:modelValue": U()
}, {
  name: jw,
  n: ks,
  classes: Ww
} = re("slider"), Gw = ["onTouchstart"];
function qw(e, n) {
  var r = le("var-hover-overlay"), a = le("var-form-details"), t = Ue("hover");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(e.direction + "--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [D(
        "div",
        {
          class: c(e.n(e.direction + "-track"))
        },
        [D(
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
        ), D(
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
      ), (h(!0), k(
        Ve,
        null,
        Ge(e.thumbList, (o) => (h(), k("div", {
          class: c(e.n(e.direction + "-thumb")),
          key: o.enumValue,
          style: W(e.thumbStyle(o)),
          onTouchstart: Pn((i) => e.start(i, o.enumValue), ["stop"])
        }, [Y(e.$slots, "button", {
          currentValue: o.text
        }, () => [Me(D(
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
        ), [[t, (i) => e.hover(i, o), "desktop"]]), D(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n(e.direction + "-thumb-ripple--active")])),
            style: W({
              background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
            })
          },
          [Q(r, {
            hovering: o.hovering
          }, null, 8, ["hovering"])],
          6
          /* CLASS, STYLE */
        ), D(
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
          [D(
            "span",
            null,
            ie(o.text),
            1
            /* TEXT */
          )],
          6
          /* CLASS, STYLE */
        )])], 46, Gw))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Q(a, {
      "error-message": e.errorMessage,
      class: c(e.n("form")),
      "var-slider-cover": ""
    }, null, 8, ["error-message", "class"])],
    2
    /* CLASS */
  );
}
var Sv = ne({
  name: jw,
  components: {
    VarFormDetails: an,
    VarHoverOverlay: Sn
  },
  directives: {
    Hover: zn
  },
  props: Fw,
  setup(e) {
    var n = S(0), r = S(null), a = S(!1), t = L(() => R(e.max) - R(e.min)), o = L(() => n.value / t.value * R(e.step)), i = L(() => e.disabled || (d == null ? void 0 : d.disabled.value)), l = L(() => e.readonly || (d == null ? void 0 : d.readonly.value)), s = L(() => e.direction === "vertical"), {
      bindForm: u,
      form: d
    } = Bn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      resetValidation: p
    } = In(), {
      hovering: b,
      handleHovering: g
    } = Kn(), {
      hovering: w,
      handleHovering: M
    } = Kn(), T = L(() => {
      var {
        modelValue: te,
        range: de
      } = e, ge = [];
      return de && De(te) ? ge = [{
        value: _(te[0]),
        enumValue: qe.First,
        text: ae(te[0]),
        hovering: va(b),
        handleHovering: g
      }, {
        value: _(te[1]),
        enumValue: qe.Second,
        text: ae(te[1]),
        hovering: va(w),
        handleHovering: M
      }] : pn(te) && (ge = [{
        value: _(te),
        enumValue: qe.First,
        text: ae(te),
        hovering: va(b),
        handleHovering: g
      }]), ge;
    }), C = L(() => {
      var {
        activeColor: te,
        range: de,
        modelValue: ge
      } = e, $e = de && De(ge) ? _(Math.min(ge[0], ge[1])) : 0, je = de && De(ge) ? _(Math.max(ge[0], ge[1])) - $e : _(ge);
      return s.value ? {
        left: "0px",
        height: je + "%",
        bottom: $e + "%",
        background: te
      } : {
        top: "0px",
        width: je + "%",
        left: $e + "%",
        background: te
      };
    }), O = Fe({
      [qe.First]: I(),
      [qe.Second]: I()
    }), E, A = {
      reset: Ee,
      validate: P,
      resetValidation: p
    };
    y(u, A), fe([() => e.modelValue, () => e.step], (te) => {
      var [de, ge] = te;
      !ee() || !ce() || a.value || Ce(de, R(ge));
    }), fe(n, () => Ce()), on(() => {
      !ee() || !ce() || (n.value = r.value[s.value ? "offsetHeight" : "offsetWidth"]);
    }), co(() => {
      B();
    });
    function P() {
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
    function N() {
      return Ye(() => f(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function V(te) {
      var de = te.currentTarget;
      return de ? s.value ? n.value - (te.clientY - _e(de).top) : te.clientX - Pf(de) : 0;
    }
    function z(te) {
      var de = s.value ? "bottom" : "left";
      return {
        [de]: te.value + "%",
        zIndex: O[te.enumValue].active ? 1 : void 0
      };
    }
    function K(te) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : O[te].active;
    }
    function _(te) {
      var {
        min: de,
        max: ge
      } = e;
      return te < R(de) ? 0 : te > R(ge) ? 100 : (te - R(de)) / t.value * 100;
    }
    function ae(te) {
      if (!pn(te))
        return 0;
      var de = te;
      de < Number(e.min) && (de = Number(e.min)), de > Number(e.max) && (de = Number(e.max));
      var ge = parseInt("" + de, 10) === de;
      return ge ? de : R(de.toPrecision(5));
    }
    function H(te, de) {
      i.value || de.handleHovering(te);
    }
    function X(te, de) {
      var ge = [], {
        step: $e,
        range: je,
        modelValue: ue,
        onChange: Te,
        min: Ie
      } = e, Oe = R($e), se = Math.round(te / o.value), be = se * Oe + R(Ie), ye = O[de].percentValue * Oe + R(Ie);
      if (O[de].percentValue = se, je && De(ue) && (ge = de === qe.First ? [be, ue[1]] : [ue[0], be]), ye !== be) {
        var Be = je ? ge.map((Ne) => ae(Ne)) : ae(be);
        y(Te, Be), y(e["onUpdate:modelValue"], Be), N();
      }
    }
    function J(te) {
      if (!e.range)
        return qe.First;
      var de = O[qe.First].percentValue * o.value, ge = O[qe.Second].percentValue * o.value, $e = Math.abs(te - de), je = Math.abs(te - ge);
      return $e <= je ? qe.First : qe.Second;
    }
    function $() {
      document.addEventListener("touchmove", j, {
        passive: !1
      }), document.addEventListener("touchend", F), document.addEventListener("touchcancel", F);
    }
    function B() {
      document.removeEventListener("touchmove", j), document.removeEventListener("touchend", F), document.removeEventListener("touchcancel", F);
    }
    function q(te, de) {
      if (n.value || (n.value = r.value.offsetWidth), i.value || (O[de].active = !0), E = de, $(), !(i.value || l.value)) {
        y(e.onStart), a.value = !0;
        var {
          clientX: ge,
          clientY: $e
        } = te.touches[0];
        O[de].startPosition = s.value ? $e : ge;
      }
    }
    function j(te) {
      if (te.preventDefault(), !(i.value || l.value || !a.value)) {
        var {
          startPosition: de,
          currentOffset: ge
        } = O[E], {
          clientX: $e,
          clientY: je
        } = te.touches[0], ue = (s.value ? de - je : $e - de) + ge;
        ue <= 0 ? ue = 0 : ue >= n.value && (ue = n.value), X(ue, E);
      }
    }
    function F() {
      B();
      var {
        range: te,
        modelValue: de,
        onEnd: ge,
        step: $e,
        min: je
      } = e;
      if (i.value || (O[E].active = !1), !(i.value || l.value)) {
        var ue = [];
        O[E].currentOffset = O[E].percentValue * o.value;
        var Te = O[E].percentValue * R($e) + R(je);
        te && De(de) && (ue = E === qe.First ? [Te, de[1]] : [de[0], Te]), y(ge, te ? ue : Te), a.value = !1;
      }
    }
    function G(te) {
      if (!(i.value || l.value) && !te.target.closest("." + ks("thumb"))) {
        var de = V(te), ge = J(de);
        E = ge, X(de, ge), F();
      }
    }
    function ee() {
      var te = R(e.step);
      return isNaN(te) ? (bl("Slider", 'type of prop "step" should be Number'), !1) : te < 0 ? (bl("Slider", '"step" should be > 0'), !1) : !0;
    }
    function ce() {
      var {
        range: te,
        modelValue: de
      } = e;
      return te && !De(de) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !te && De(de) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : te && De(de) && de.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function Ce(te, de) {
      te === void 0 && (te = e.modelValue), de === void 0 && (de = R(e.step));
      var ge = ($e) => {
        var {
          min: je,
          max: ue
        } = e;
        return $e < R(je) ? 0 : $e > R(ue) ? t.value / de : ($e - R(je)) / de;
      };
      e.range && De(te) ? (O[qe.First].percentValue = ge(te[0]), O[qe.First].currentOffset = O[qe.First].percentValue * o.value, O[qe.Second].percentValue = ge(te[1]), O[qe.Second].currentOffset = O[qe.Second].percentValue * o.value) : pn(te) && (O[qe.First].currentOffset = ge(te) * o.value);
    }
    function Ee() {
      var te = e.range ? [0, 0] : 0;
      y(e["onUpdate:modelValue"], te), p();
    }
    return {
      Thumbs: qe,
      sliderEl: r,
      getFillStyle: C,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: O,
      thumbList: T,
      n: ks,
      classes: Ww,
      thumbStyle: z,
      hover: H,
      multiplySizeUnit: dn,
      toNumber: R,
      showLabel: K,
      start: q,
      move: j,
      end: F,
      click: G
    };
  }
});
Sv.render = qw;
const dt = Sv;
oe(dt);
var G$ = dt;
function Ii() {
  return Ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ii.apply(this, arguments);
}
var kv = {
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
  loadingType: en(lr, "type"),
  loadingSize: en(lr, "size"),
  loadingRadius: en(lr, "radius"),
  loadingColor: Ii({}, en(lr, "color"), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U(),
  _update: String
}, {
  n: Xw,
  classes: Kw
} = re("snackbar"), Zw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Jw(e, n) {
  var r = le("var-icon"), a = le("var-loading");
  return Me((h(), k(
    "div",
    {
      class: c(e.n()),
      style: W({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: W({
          zIndex: e.zIndex
        })
      },
      [D(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [Y(e.$slots, "default", {}, () => [Pe(
          ie(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: c([e.n("icon")])
        },
        [e.iconName ? (h(), ke(r, {
          key: 0,
          name: e.iconName
        }, null, 8, ["name"])) : x("v-if", !0), e.type === "loading" ? (h(), ke(a, {
          key: 1,
          type: e.loadingType,
          size: e.loadingSize,
          color: e.loadingColor,
          radius: e.loadingRadius
        }, null, 8, ["type", "size", "color", "radius"])) : x("v-if", !0), Y(e.$slots, "icon")],
        2
        /* CLASS */
      ), D(
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
  )), [[Un, e.show]]);
}
var $v = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: mr,
    VarIcon: Le
  },
  props: kv,
  setup(e) {
    var n = S(null), {
      zIndex: r
    } = Nt(() => e.show, 1);
    go(() => e.show, () => e.lockScroll);
    var a = L(() => e.type === "loading" || e.forbidClick), t = L(() => e.type ? Zw[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && y(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return fe(() => e.show, (i) => {
      i ? (y(e.onOpen), o()) : i === !1 && (clearTimeout(n.value), y(e.onClose));
    }), fe(() => e._update, () => {
      clearTimeout(n.value), o();
    }), on(() => {
      e.show && (y(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Pv,
      n: Xw,
      classes: Kw,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
$v.render = Jw;
const Tv = $v;
var {
  name: Qw,
  n: _w
} = re("snackbar");
function xw(e, n) {
  var r = le("var-snackbar-core");
  return h(), ke(Qn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [Q(We, {
    name: e.n() + "-fade",
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: me(() => [Q(r, Re(e.$props, {
      class: e.n("transition")
    }), {
      icon: me(() => [Y(e.$slots, "icon")]),
      action: me(() => [Y(e.$slots, "action")]),
      default: me(() => [Y(e.$slots, "default", {}, () => [Pe(
        ie(e.content),
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
var Ov = ne({
  name: Qw,
  components: {
    VarSnackbarCore: Tv
  },
  props: kv,
  setup() {
    var {
      disabled: e
    } = la();
    return {
      disabled: e,
      n: _w
    };
  }
});
Ov.render = xw;
const Bo = Ov;
function vt() {
  return vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, vt.apply(this, arguments);
}
function eC(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Pt(e);
}
var Pv = ["loading", "success", "warning", "info", "error"], $s = 0, Bi = !1, Mv, na = !1, Iv = {
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
}, On = Fe([]), ll = Iv, nC = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Uo = (e) => () => oa(e) ? e() : e, rC = {
  setup() {
    return () => {
      var e = On.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), na && (a.position = "top");
        var i = na ? "relative" : "absolute", l = vt({
          position: i
        }, sC(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Uo(s),
          icon: Uo(u),
          action: Uo(d)
        };
        return Q(Tv, Re(a, {
          key: r,
          style: l,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Q(rf, Re(nC, {
        style: {
          zIndex: Cn.zIndex
        },
        onAfterEnter: aC,
        onAfterLeave: tC
      }), eC(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Jn = function(e) {
  var n = iC(e), r = Fe(vt({}, ll, n));
  r.show = !0, Bi || (Bi = !0, Mv = ia(rC).unmountInstance);
  var {
    length: a
  } = On, t = {
    id: $s++,
    reactiveSnackOptions: r
  };
  if (a === 0 || na)
    oC(t);
  else {
    var o = "update-" + $s;
    lC(r, o);
  }
  return {
    clear() {
      !na && On.length ? On[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Pv.forEach((e) => {
  Jn[e] = (n) => (zi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Jn(n));
});
Jn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== na && (On.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), na = e);
};
Jn.clear = function() {
  On.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Jn.setDefaultOptions = function(e) {
  ll = e;
};
Jn.resetDefaultOptions = function() {
  ll = Iv;
};
function aC(e) {
  var n = e.getAttribute("data-id"), r = On.find((a) => a.id === R(n));
  r && y(r.reactiveSnackOptions.onOpened);
}
function tC(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = On.find((t) => t.id === R(n));
  r && (r.animationEnd = !0, y(r.reactiveSnackOptions.onClosed));
  var a = On.every((t) => t.animationEnd);
  a && (y(Mv), On = Fe([]), Bi = !1);
}
function oC(e) {
  On.push(e);
}
function iC(e) {
  return e === void 0 && (e = {}), Qe(e) ? {
    content: e
  } : e;
}
function lC(e, n) {
  var [r] = On;
  r.reactiveSnackOptions = vt({}, r.reactiveSnackOptions, e), r._update = n;
}
function sC(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Jn.Component = Bo;
oe(Bo);
oe(Bo, Jn);
var q$ = Bo;
const Ei = Jn;
var uC = {
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
function wn(e) {
  return "calc(" + e + " / 2)";
}
function dC(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== i ? l = wn(e) + " " + n + " " + wn(e) + " 0" : l = wn(e) + " 0" : t === "space-around" ? l = wn(e) + " " + wn(n) : t === "space-between" && (o === 0 ? l = wn(e) + " " + wn(n) + " " + wn(e) + " 0" : o === i ? l = wn(e) + " 0 " + wn(e) + " " + wn(n) : l = wn(e) + " " + wn(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var vC = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: fC,
  n: Ho,
  classes: cC
} = re("space");
function mC(e, n) {
  return n ? ["var(--space-size-" + e + "-y)", "var(--space-size-" + e + "-x)"] : De(e) ? e.map(Se) : [Se(e), Se(e)];
}
const ft = ne({
  name: fC,
  props: uC,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => {
      var a, {
        inline: t,
        justify: o,
        align: i,
        wrap: l,
        direction: s,
        size: u
      } = e, d = (a = y(r.default)) != null ? a : [], [v, f] = mC(u, vC(u));
      d = zs(d);
      var m = d.length - 1, p = d.map((b, g) => {
        var w = dC(v, f, {
          direction: s,
          justify: o,
          index: g,
          lastIndex: m
        });
        return Q("div", {
          style: {
            margin: w
          }
        }, [b]);
      });
      return Q("div", {
        class: cC(Ho(), Ho("$--box"), [t, Ho("--inline")]),
        style: {
          flexDirection: s,
          justifyContent: ao(o),
          alignItems: ao(i),
          flexWrap: l ? "wrap" : "nowrap",
          margin: s === "row" ? "calc(-1 * " + v + " / 2) 0" : void 0
        }
      }, [p]);
    };
  }
});
oe(ft);
var X$ = ft, hC = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: String,
  inactiveIcon: String
}, Bv = Symbol("STEPS_BIND_STEP_KEY");
function pC() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Bv);
  return {
    step: n,
    bindStep: e
  };
}
function gC() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln(Bv);
  return r || Mn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  name: bC,
  n: yC,
  classes: wC
} = re("step"), CC = {
  key: 3
};
function SC(e, n) {
  var r = le("var-icon");
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
          style: W({
            backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
          }),
          onClick: n[0] || (n[0] = function() {
            return e.click && e.click(...arguments);
          })
        },
        [e.isActive ? (h(), ke(r, {
          key: 0,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.activeIcon
        }, null, 8, ["class", "name"])) : e.isCurrent && e.currentIcon ? (h(), ke(r, {
          key: 1,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.currentIcon
        }, null, 8, ["class", "name"])) : e.inactiveIcon ? (h(), ke(r, {
          key: 2,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.inactiveIcon
        }, null, 8, ["class", "name"])) : (h(), k(
          "span",
          CC,
          ie(e.index + 1),
          1
          /* TEXT */
        ))],
        6
        /* CLASS, STYLE */
      ), D(
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
      ), D(
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
var Ev = ne({
  name: bC,
  components: {
    VarIcon: Le
  },
  props: hC,
  setup() {
    var {
      index: e,
      steps: n,
      bindSteps: r
    } = gC(), {
      active: a,
      activeColor: t,
      inactiveColor: o,
      direction: i,
      clickStep: l
    } = n, s = L(() => a.value === e.value), u = L(() => e.value !== -1 && R(a.value) > e.value), d = {
      index: e
    };
    r(d);
    function v() {
      return l(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: s,
      direction: i,
      activeColor: t,
      inactiveColor: o,
      n: yC,
      classes: wC,
      click: v
    };
  }
});
Ev.render = SC;
const ct = Ev;
oe(ct);
var K$ = ct, kC = {
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
  onClickStep: U()
}, {
  name: $C,
  n: TC
} = re("steps");
function OC(e, n) {
  return h(), k(
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
var Nv = ne({
  name: $C,
  props: kC,
  setup(e) {
    var n = L(() => e.active), r = L(() => e.activeColor), a = L(() => e.inactiveColor), t = L(() => e.direction), {
      bindStep: o
    } = pC(), i = {
      active: n,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    o(i);
    function l(s) {
      y(e.onClickStep, s);
    }
    return {
      n: TC
    };
  }
});
Nv.render = OC;
const mt = Nv;
oe(mt);
var Z$ = mt, PC = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  name: MC,
  n: IC
} = re("style-provider"), BC = ne({
  name: MC,
  props: PC,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => Ns(e.tag, {
      class: IC(),
      style: Js(e.styleVars)
    }, y(r.default));
  }
});
const Eo = BC;
var Yo = [];
function ht(e) {
  Yo.forEach((r) => document.documentElement.style.removeProperty(r)), Yo.length = 0;
  var n = Js(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Yo.push(a);
  });
}
ht.Component = Eo;
oe(Eo);
oe(Eo, ht);
var J$ = Eo, EC = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  name: NC,
  n: DC,
  classes: VC
} = re("switch"), AC = (e) => (br(""), e = e(), yr(), e), zC = /* @__PURE__ */ AC(() => /* @__PURE__ */ D(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ D("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), LC = [zC];
function RC(e, n) {
  var r = le("var-hover-overlay"), a = le("var-form-details"), t = Ue("ripple"), o = Ue("hover");
  return Me((h(), k(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: W(e.styleComputed.switch)
      },
      [D(
        "div",
        {
          style: W(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), Me((h(), k(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: W(e.styleComputed.ripple)
        },
        [D(
          "div",
          {
            style: W(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (h(), k(
            "span",
            {
              key: 0,
              class: c(e.n("loading")),
              style: W({
                width: e.radius,
                height: e.radius
              })
            },
            LC,
            6
            /* CLASS, STYLE */
          )) : x("v-if", !0)],
          6
          /* CLASS, STYLE */
        ), Q(r, {
          hovering: e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), Q(a, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  )), [[o, e.hover, "desktop"]]);
}
var Dv = ne({
  name: NC,
  components: {
    VarFormDetails: an,
    VarHoverOverlay: Sn
  },
  directives: {
    Ripple: Xe,
    Hover: zn
  },
  props: EC,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = Bn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = In(), {
      hovering: l,
      handleHovering: s
    } = Kn(), u = L(() => {
      var {
        size: w,
        modelValue: M,
        color: T,
        closeColor: C,
        loadingColor: O,
        activeValue: E
      } = e;
      return {
        handle: {
          width: dn(w),
          height: dn(w),
          backgroundColor: M === E ? T : C,
          color: O
        },
        ripple: {
          left: M === E ? dn(w, 0.5) : "-" + dn(w, 0.5),
          color: M === E ? T : C || "#999",
          width: dn(w, 2),
          height: dn(w, 2)
        },
        track: {
          height: dn(w, 0.72),
          width: dn(w, 1.9),
          borderRadius: dn(w, 2 / 3),
          filter: M === E || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: M === E ? T : C
        },
        switch: {
          height: dn(w, 1.2),
          width: dn(w, 2)
        }
      };
    }), d = L(() => dn(e.size, 0.8)), v = {
      reset: g,
      validate: f,
      resetValidation: i
    };
    y(n, v);
    function f() {
      return o(e.rules, e.modelValue);
    }
    function m() {
      return Ye(() => t(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function p(w) {
      var {
        onClick: M,
        onChange: T,
        disabled: C,
        loading: O,
        readonly: E,
        modelValue: A,
        activeValue: P,
        inactiveValue: I,
        "onUpdate:modelValue": N
      } = e;
      if (y(M, w), !(C || O || E || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var V = A === P ? I : P;
        y(T, V), y(N, V), m();
      }
    }
    function b(w) {
      e.disabled || r != null && r.disabled.value || s(w);
    }
    function g() {
      y(e["onUpdate:modelValue"], e.inactiveValue), i();
    }
    return {
      hovering: l,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      n: DC,
      classes: VC,
      multiplySizeUnit: dn,
      switchActive: p,
      hover: b
    };
  }
});
Dv.render = RC;
const pt = Dv;
oe(pt);
var Q$ = pt, UC = {
  name: [String, Number],
  disabled: Boolean,
  onClick: U()
}, Vv = Symbol("TABS_BIND_TAB_KEY");
function HC() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = sn(Vv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function YC() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ln(Vv);
  return n || Mn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  name: FC,
  n: qt,
  classes: jC
} = re("tab");
function WC(e, n) {
  var r = Ue("ripple");
  return Me((h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: W({
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
var Av = ne({
  name: FC,
  directives: {
    Ripple: Xe
  },
  props: UC,
  setup(e) {
    var n = S(null), r = L(() => n.value), a = L(() => e.name), t = L(() => e.disabled), {
      index: o,
      tabs: i,
      bindTabs: l
    } = YC(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: p
    } = i, b = {
      name: a,
      index: o,
      disabled: t,
      element: r
    };
    l(b), fe(() => [e.name, e.disabled], p);
    function g() {
      return e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value);
    }
    function w() {
      return e.disabled ? f.value : g() ? d.value : v.value;
    }
    function M() {
      return e.disabled ? qt("$-tab--disabled") : g() ? qt("$-tab--active") : qt("$-tab--inactive");
    }
    function T(C) {
      var {
        disabled: O,
        name: E,
        onClick: A
      } = e;
      O || (y(A, E ?? o.value, C), s(b));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      n: qt,
      classes: jC,
      computeColorStyle: w,
      computeColorClass: M,
      handleClick: T
    };
  }
});
Av.render = WC;
const gt = Av;
oe(gt);
var _$ = gt, GC = {
  name: [String, Number]
}, {
  name: qC,
  n: XC,
  classes: KC
} = re("tab-item");
function ZC(e, n) {
  var r = le("var-swipe-item");
  return h(), ke(r, {
    class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: me(() => [Y(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
var zv = ne({
  name: qC,
  components: {
    VarSwipeItem: Br
  },
  props: GC,
  setup(e) {
    var n = S(!1), r = L(() => e.name), {
      index: a,
      bindTabsItems: t
    } = cy(), {
      bindLists: o
    } = my(), i = {
      index: a,
      name: r,
      current: L(() => n.value),
      setCurrent: l
    };
    t(i), o(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: XC,
      classes: KC
    };
  }
});
zv.render = ZC;
const bt = zv;
oe(bt);
var x$ = bt, JC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  name: QC,
  n: _C,
  classes: xC
} = re("table");
function eS(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: c(e.n("main"))
      },
      [D(
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
    ), e.$slots.footer ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [Y(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Lv = ne({
  name: QC,
  props: JC,
  setup: () => ({
    toSizeUnit: Se,
    n: _C,
    classes: xC,
    formatElevation: bn
  })
});
Lv.render = eS;
const yt = Lv;
oe(yt);
var e2 = yt, nS = {
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
  stickyCssMode: en(xt, "cssMode"),
  stickyZIndex: en(xt, "zIndex"),
  offsetTop: en(xt, "offsetTop"),
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
};
function Ts(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Os(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ts(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ts(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  name: rS,
  n: aS,
  classes: tS
} = re("tabs");
function oS(e, n) {
  return h(), ke(ta(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: me(() => [D(
      "div",
      Re({
        class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
        style: {
          background: e.color
        }
      }, e.$attrs),
      [D(
        "div",
        {
          ref: "scrollerEl",
          class: c(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
        },
        [Y(e.$slots, "default"), D(
          "div",
          {
            class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
            style: W({
              width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
              height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
              transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
            })
          },
          [D(
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
var Rv = ne({
  name: rS,
  components: {
    VarSticky: Er
  },
  inheritAttrs: !1,
  props: nS,
  setup(e) {
    var n = S("0px"), r = S("0px"), a = S("0px"), t = S("0px"), o = S(!1), i = S(null), l = L(() => e.active), s = L(() => e.activeColor), u = L(() => e.inactiveColor), d = L(() => e.disabledColor), v = L(() => e.itemDirection), f = S(null), m = L(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), {
      tabList: p,
      bindTabList: b,
      length: g
    } = HC(), w = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: I,
      onTabClick: M
    };
    b(w), fe(() => g.value, /* @__PURE__ */ Os(function* () {
      yield fn(), I();
    })), fe(() => [e.active, e.scrollable], I), gr(I), Bt(I);
    function M(z) {
      var K, _ = (K = z.name.value) != null ? K : z.index.value, {
        active: ae,
        onChange: H,
        onClick: X
      } = e;
      y(e["onUpdate:active"], _), y(X, _), _ !== ae && y(H, _);
    }
    function T() {
      return p.find((z) => {
        var {
          name: K
        } = z;
        return e.active === K.value;
      });
    }
    function C(z) {
      return p.find((K) => {
        var {
          index: _
        } = K;
        return (z ?? e.active) === _.value;
      });
    }
    function O() {
      if (g.value !== 0) {
        var {
          active: z
        } = e;
        if (pn(z)) {
          var K = vr(z, 0, g.value - 1);
          return y(e["onUpdate:active"], K), C(K);
        }
      }
    }
    function E() {
      o.value = e.scrollable === "always" || p.length >= 5;
    }
    function A(z) {
      var {
        element: K
      } = z, _ = K.value;
      _ && (e.layoutDirection === "horizontal" ? (n.value = _.offsetWidth + "px", a.value = _.offsetLeft + "px") : (r.value = _.offsetHeight + "px", t.value = _.offsetTop + "px"));
    }
    function P(z) {
      var {
        element: K
      } = z;
      if (o.value) {
        var _ = i.value, ae = K.value;
        if (e.layoutDirection === "horizontal") {
          var H = ae.offsetLeft + ae.offsetWidth / 2 - _.offsetWidth / 2;
          Ca(_, {
            left: H,
            animation: Jo
          });
        } else {
          var X = ae.offsetTop + ae.offsetHeight / 2 - _.offsetHeight / 2;
          Ca(_, {
            top: X,
            animation: Jo
          });
        }
      }
    }
    function I() {
      var z = T() || C() || O();
      !z || z.disabled.value || (E(), A(z), P(z));
    }
    function N() {
      return V.apply(this, arguments);
    }
    function V() {
      return V = Os(function* () {
        e.sticky && f.value && (yield f.value.resize());
      }), V.apply(this, arguments);
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: m,
      localScrollable: o,
      scrollerEl: i,
      Transition: We,
      toSizeUnit: Se,
      n: aS,
      classes: tS,
      resize: I,
      resizeSticky: N,
      formatElevation: bn
    };
  }
});
Rv.render = oS;
const wt = Rv;
oe(wt);
var n2 = wt, iS = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": U()
};
function Ps(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function lS(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ps(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ps(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  name: sS,
  n: uS
} = re("tabs-items");
function dS(e, n) {
  var r = le("var-swipe");
  return h(), ke(r, {
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
var Uv = ne({
  name: sS,
  components: {
    VarSwipe: Ir
  },
  props: iS,
  setup(e) {
    var n = S(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = fy();
    a({}), fe(() => e.active, s), fe(() => t.value, /* @__PURE__ */ lS(function* () {
      yield fn(), s(e.active);
    }));
    function o(v) {
      return r.find((f) => {
        var {
          name: m
        } = f;
        return v === m.value;
      });
    }
    function i(v) {
      return r.find((f) => {
        var {
          index: m
        } = f;
        return v === m.value;
      });
    }
    function l(v) {
      return o(v) || i(v);
    }
    function s(v) {
      var f, m = l(v);
      m && (r.forEach((p) => {
        var {
          setCurrent: b
        } = p;
        return b(!1);
      }), m.setCurrent(!0), (f = n.value) == null || f.to(m.index.value));
    }
    function u(v) {
      var f, m = r.find((b) => {
        var {
          index: g
        } = b;
        return g.value === v;
      }), p = (f = m.name.value) != null ? f : m.index.value;
      y(e["onUpdate:active"], p);
    }
    function d() {
      return n.value;
    }
    return {
      swipe: n,
      n: uS,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Uv.render = dS;
const Ct = Uv;
oe(Ct);
var r2 = Ct;
const vS = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, fS = {
  "--badge-default-color": "#555"
}, cS = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, mS = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, hS = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, pS = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, gS = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, bS = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, yS = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, wS = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, CS = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, SS = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, kS = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, $S = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, TS = {
  "--popup-content-background-color": "#1e1e1e"
}, OS = {
  "--pull-refresh-background": "#303030"
}, PS = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, MS = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, IS = {
  "--select-scroller-background": "#303030"
}, BS = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, ES = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, NS = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, DS = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, VS = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, AS = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, zS = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, LS = {
  "--tabs-background": "#1e1e1e"
}, RS = {
  "--app-bar-color": "#272727"
}, US = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, HS = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, YS = {
  "--menu-background-color": "#272727"
}, FS = {
  "--breadcrumb-inactive-color": "#aaa"
}, jS = {
  "--paper-background": "#303030"
}, WS = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, GS = {
  "--link-default-color": "#fff"
}, qS = {
  "--progress-label-color": "#fff"
}, XS = {
  "--options-text-color": "#fff"
}, KS = {
  "--countdown-text-color": "#fff"
}, ZS = {
  "--watermark-content-color": "#ffffff"
};
function Ni() {
  return Ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ni.apply(this, arguments);
}
const JS = Ni({
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
}, cS, hS, mS, AS, yS, BS, LS, DS, TS, wS, vS, gS, fS, zS, bS, OS, NS, ES, kS, VS, SS, IS, PS, pS, CS, $S, RS, US, HS, YS, MS, FS, jS, WS, GS, qS, XS, KS, ZS);
var QS = {
  dark: JS
}, a2 = null;
const Di = QS;
var $n = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], vn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Ms = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], _S = {
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
  "onUpdate:modelValue": U(),
  onChange: U()
}, Hv = (e, n) => e === "24hr" || n === "am", sl = (e, n, r) => {
  var a = $n.findIndex((o) => R(o) === R(r)), t = Hv(e, n) ? r : vn[a];
  return {
    hourStr: t,
    hourNum: R(t)
  };
}, hn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: R(n),
    minute: R(r),
    second: R(a)
  };
}, Yv = (e) => {
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
  } = sl(t, o, i), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: p,
      minute: b
    } = hn(l);
    f = p === v && a > b;
  }
  if (!l && s) {
    var {
      hour: g,
      minute: w
    } = hn(s);
    f = g === v && a < w;
  }
  if (l && s) {
    var {
      hour: M,
      minute: T
    } = hn(l), {
      hour: C,
      minute: O
    } = hn(s);
    f = C === v && a < O || M === v && a > T;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, Fv = (e) => {
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
  } = sl(t, o, i), m = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: g,
      second: w
    } = hn(s);
    m = b === f && g < l || g === l && a > w;
  }
  if (!s && u) {
    var {
      hour: M,
      minute: T,
      second: C
    } = hn(u);
    m = M === f && T > l || T === l && a > C;
  }
  if (s && u) {
    var {
      hour: O,
      minute: E,
      second: A
    } = hn(s), {
      hour: P,
      minute: I,
      second: N
    } = hn(u);
    m = O === f && E < l || P === f && I > l || O === f && E === l && a > A || P === f && I === l && a < N;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: xS,
  classes: ek
} = re("time-picker");
function nk(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n("clock"))
    },
    [D(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: W(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (h(!0), k(
      Ve,
      null,
      Ge(e.timeScales, (r, a) => (h(), k(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: W(e.getStyle(a, r, !1))
        },
        ie(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), k(
        Ve,
        null,
        Ge(e.hours24, (r, a) => (h(), k(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: W(e.getStyle(a, r, !0))
          },
          ie(r),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var jv = ne({
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
    } = n, a = S(null), t = S([]), o = S([]), i = L(() => ({
      transform: "rotate(" + R(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = L(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = L(() => e.type === "hour" ? $n : Ms), u = (g, w) => {
      var M;
      g = (M = g) != null ? M : e.type === "minute" ? e.time.minute : e.time.second;
      var T = e.type === "minute" ? Yv : Fv, C = {
        time: R(g),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: R(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty(C, "minute"), T(C);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var g = e.isInner ? vn[l.value] : s.value[l.value];
      return s.value === Ms ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, w) => w ? l.value === g && e.isInner : l.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (Hv(e.format, e.ampm))
          return t.value.includes(g);
        var w = $n.findIndex((M) => M === g);
        return o.value.includes(w);
      }
      return u(g, !0);
    }, m = (g, w, M) => {
      var T = 2 * Math.PI / 12 * g - Math.PI / 2, C = 50 * (1 + Math.cos(T)), O = 50 * (1 + Math.sin(T)), E = () => v(g, M) ? f(w) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: A,
        color: P
      } = E();
      return {
        left: C + "%",
        top: O + "%",
        backgroundColor: A,
        color: P
      };
    }, p = () => {
      var {
        width: g,
        height: w
      } = _e(a.value);
      return {
        width: g,
        height: w
      };
    }, b = () => {
      if (l.value !== void 0) {
        var g = e.ampm === "am" ? $n : vn;
        return Tr(g[l.value], 2, "0");
      }
    };
    return fe([l, () => e.isInner], (g, w) => {
      var [M, T] = g, [C, O] = w, E = M === C && T === O;
      if (!(E || e.type !== "hour" || l.value === void 0)) {
        var A = T ? vn[l.value] : b(), P = e.useSeconds ? ":" + e.time.second : "", I = A + ":" + e.time.minute + P;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), fe(() => e.rad, (g, w) => {
      if (!(e.type === "hour" || g === void 0 || w === void 0)) {
        var M = g / 6 >= 0 ? g / 6 : g / 6 + 60, T = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (M !== T) {
          var C, {
            hourStr: O
          } = sl(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var E = ve().minute(M).format("mm"), A = e.useSeconds ? ":" + e.time.second : "";
            C = O + ":" + E + A;
          }
          if (e.type === "second") {
            var P = ve().second(M).format("ss"), I = e.useSeconds ? ":" + P : "";
            C = O + ":" + e.time.minute + I;
          }
          r("update", C);
        }
      }
    }), fe([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [w, M, T] = g;
      if (t.value = [], w && !M) {
        var {
          hour: C
        } = hn(w), O = $n.filter((X) => R(X) > C), E = vn.filter((X) => R(X) > C);
        t.value = [...O, ...E];
      }
      if (!w && M) {
        var {
          hour: A
        } = hn(M), P = $n.filter((X) => R(X) < A), I = vn.filter((X) => R(X) < A);
        t.value = [...P, ...I];
      }
      if (w && M) {
        var {
          hour: N
        } = hn(w), {
          hour: V
        } = hn(M), z = $n.filter((X) => R(X) < V || R(X) > N), K = vn.filter((X) => R(X) < V || R(X) > N);
        t.value = [...z, ...K];
      }
      if (T != null && T.hours) {
        var {
          hours: _
        } = T, ae = $n.filter((X) => !_(R(X))), H = vn.filter((X) => !_(R(X)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...ae, ...H])];
      }
      o.value = t.value.map((X) => vn.findIndex((J) => X === J)).filter((X) => X >= 0);
    }, {
      immediate: !0
    }), {
      n: xS,
      classes: ek,
      hours24: vn,
      timeScales: s,
      inner: a,
      handStyle: i,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: p,
      getStyle: m,
      activeItemIndex: l
    };
  }
});
jv.render = nk;
const rk = jv;
var {
  name: ak,
  n: tk,
  classes: ok
} = re("time-picker"), ik = (e) => (br(""), e = e(), yr(), e), lk = /* @__PURE__ */ ik(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), sk = {
  key: 0
};
function uk(e, n) {
  var r = le("clock");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [D(
      "div",
      {
        class: c(e.n("title")),
        style: W({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          ie(e.time.hour),
          3
          /* TEXT, CLASS */
        ), lk, D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ie(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), k("span", sk, ":")) : x("v-if", !0), e.useSeconds ? (h(), k(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ie(e.time.second),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), D(
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
      )) : x("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), D(
      "div",
      {
        class: c(e.n("body"))
      },
      [D(
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
        [Q(We, {
          name: e.n() + "-panel-fade"
        }, {
          default: me(() => [(h(), ke(r, {
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
var Wv = ne({
  name: ak,
  components: {
    Clock: rk
  },
  props: _S,
  setup(e) {
    var n = S(null), r = S(null), a = S(null), t = S(!1), o = S(!1), i = S(!1), l = S(!1), s = S(!1), u = S(!1), d = S(!1), v = S(0), f = S(0), m = S(), p = S("hour"), b = S("am"), g = S({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Fe({
      x: 0,
      y: 0
    }), M = Fe({
      x: [],
      y: []
    }), T = L(() => p.value === "hour" ? m.value : p.value === "minute" ? v.value : f.value);
    fe(() => e.modelValue, (B) => {
      if (B) {
        var {
          hour: q,
          minute: j,
          second: F
        } = hn(B), G = ve().hour(q).format("hh"), ee = ve().hour(q).format("HH"), ce = ve().minute(j).format("mm"), Ce = ve().second(F).format("ss");
        m.value = (G === "12" ? 0 : R(G)) * 30, v.value = R(ce) * 6, f.value = R(Ce) * 6, g.value = N(B), e.format !== "24hr" && (b.value = Tr("" + q, 2, "0") === ee && vn.includes(ee) ? "pm" : "am"), t.value = e.format === "24hr" && vn.includes(ee);
      }
    }, {
      immediate: !0
    });
    function C(B) {
      y(e["onUpdate:modelValue"], B), y(e.onChange, B);
    }
    function O(B) {
      return B * 57.29577951308232;
    }
    function E(B) {
      l.value = !1, d.value = !1, p.value = B;
    }
    function A(B) {
      var {
        disableHour: q
      } = a.value, j = $n.findIndex((ee) => R(ee) === R(g.value.hour)), F = B === "am" ? $n : vn, G = [...F.slice(j), ...F.slice(0, j)];
      return G.find((ee, ce) => (o.value = ce !== 0, !q.includes(ee)));
    }
    function P(B) {
      if (!e.readonly) {
        b.value = B;
        var q = A(B);
        if (q) {
          var j = e.useSeconds ? ":" + g.value.second : "", F = Tr(q, 2, "0") + ":" + g.value.minute + j;
          C(F);
        }
      }
    }
    function I(B, q) {
      var j = B >= M.x[0] && B <= M.x[1], F = q >= M.y[0] && q <= M.y[1];
      return j && F;
    }
    function N(B) {
      var q = e.format === "24hr" ? "HH" : "hh", {
        hour: j,
        minute: F,
        second: G
      } = hn(B);
      return {
        hour: ve().hour(j).format(q),
        minute: ve().minute(F).format("mm"),
        second: ve().second(G).format("ss")
      };
    }
    function V(B) {
      var q = B / 30;
      return q >= 0 ? q : q + 12;
    }
    function z() {
      var {
        width: B,
        height: q
      } = a.value.getSize(), j = w.x - B / 2 - 8, F = w.x + B / 2 + 8, G = w.y - q / 2 - 8, ee = w.y + q / 2 + 8;
      return {
        rangeXMin: j,
        rangeXMax: F,
        rangeYMin: G,
        rangeYMax: ee
      };
    }
    function K(B, q, j) {
      var {
        disableHour: F
      } = a.value;
      i.value = I(B, q);
      var G = Math.round(j / 30) * 30 + 90, ee = V(G), ce = t.value ? $n[ee] : vn[ee];
      if (F.includes(ce) || (t.value = e.format === "24hr" ? I(B, q) : !1), t.value === i.value) {
        var Ce = t.value || b.value === "pm" ? vn[ee] : $n[ee];
        u.value = F.includes(Ce), !u.value && (m.value = G, l.value = !0);
      }
    }
    function _(B) {
      var {
        disableHour: q
      } = a.value, j = Math.round(B / 6) * 6 + 90, F = j / 6 >= 0 ? j / 6 : j / 6 + 60, G = {
        time: F,
        format: e.format,
        ampm: b.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: q,
        allowedTime: e.allowedTime
      };
      d.value = Yv(G), !d.value && (v.value = j, s.value = !0);
    }
    function ae(B) {
      var {
        disableHour: q
      } = a.value, j = Math.round(B / 6) * 6 + 90, F = j / 6 >= 0 ? j / 6 : j / 6 + 60, G = {
        time: F,
        format: e.format,
        ampm: b.value,
        hour: g.value.hour,
        minute: R(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: q,
        allowedTime: e.allowedTime
      };
      Fv(G) || (f.value = j);
    }
    function H() {
      var {
        left: B,
        top: q,
        width: j,
        height: F
      } = _e(n.value);
      if (w.x = B + j / 2, w.y = q + F / 2, p.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: G,
          rangeXMax: ee,
          rangeYMin: ce,
          rangeYMax: Ce
        } = z();
        M.x = [G, ee], M.y = [ce, Ce];
      }
    }
    function X(B) {
      if (B.preventDefault(), !e.readonly) {
        H();
        var {
          clientX: q,
          clientY: j
        } = B.touches[0], F = q - w.x, G = j - w.y, ee = Math.round(O(Math.atan2(G, F)));
        p.value === "hour" ? K(q, j, ee) : p.value === "minute" ? _(ee) : ae(ee);
      }
    }
    function J() {
      if (!e.readonly) {
        if (p.value === "hour" && l.value) {
          p.value = "minute";
          return;
        }
        p.value === "minute" && e.useSeconds && s.value && (p.value = "second");
      }
    }
    function $() {
      o.value = !1;
    }
    return {
      getRad: T,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: p,
      ampm: b,
      isPreventNextUpdate: o,
      n: tk,
      classes: ok,
      moveHand: X,
      checkPanel: E,
      checkAmpm: P,
      end: J,
      update: C,
      changePreventUpdate: $,
      formatElevation: bn
    };
  }
});
Wv.render = uk;
const St = Wv;
oe(St);
var t2 = St, dk = {
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
  onBeforeFilter: U(),
  onBeforeRead: U(),
  onAfterRead: U(),
  onBeforeRemove: U(),
  onRemove: U(),
  onOversize: U(),
  "onUpdate:modelValue": U()
};
function Is(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Fo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Is(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Is(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  name: vk,
  n: fk,
  classes: ck
} = re("uploader"), mk = 0, hk = ["onClick"], pk = ["onClick"], gk = ["src", "alt"], bk = ["multiple", "accept", "capture", "disabled"], yk = ["src"];
function wk(e, n) {
  var r = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = le("var-popup"), i = Ue("ripple"), l = Ue("hover");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), k(
        Ve,
        null,
        Ge(e.files, (s) => Me((h(), k("div", {
          class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
          key: s.id,
          onClick: (u) => e.preview(s)
        }, [D(
          "div",
          {
            class: c(e.n("file-name"))
          },
          ie(s.name || s.url),
          3
          /* TEXT, CLASS */
        ), e.removable ? (h(), k("div", {
          key: 0,
          class: c(e.n("file-close")),
          onClick: Pn((u) => e.handleRemove(s), ["stop"])
        }, [Q(r, {
          class: c(e.n("file-close-icon")),
          "var-uploader-cover": "",
          name: "delete"
        }, null, 8, ["class"])], 10, pk)) : x("v-if", !0), s.cover ? (h(), k("img", {
          key: 1,
          class: c(e.n("file-cover")),
          style: W({
            objectFit: s.fit
          }),
          src: s.cover,
          alt: s.name
        }, null, 14, gk)) : x("v-if", !0), D(
          "div",
          {
            class: c(e.n("file-indicator"))
          },
          [D(
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
        )], 10, hk)), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Me((h(), k(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [D("input", {
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
        }, null, 42, bk), Y(e.$slots, "default", {}, () => [Q(r, {
          class: c(e.n("action-icon")),
          "var-uploader-cover": "",
          name: "plus"
        }, null, 8, ["class"]), Q(a, {
          hovering: e.hovering && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])])],
        2
        /* CLASS */
      )), [[i, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }], [l, e.handleHovering, "desktop"]]) : x("v-if", !0)],
      2
      /* CLASS */
    ), Q(t, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, eo({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: me(() => [Y(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]), Q(o, {
      class: c(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      show: e.showPreview,
      "onUpdate:show": n[2] || (n[2] = (s) => e.showPreview = s),
      onClosed: n[3] || (n[3] = (s) => e.currentPreview = null)
    }, {
      default: me(() => {
        var s, u;
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (h(), k("video", {
          key: 0,
          class: c(e.n("preview-video")),
          playsinline: "true",
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
          controls: "",
          src: (u = e.currentPreview) == null ? void 0 : u.url
        }, null, 10, yk)) : x("v-if", !0)];
      }),
      _: 1
      /* STABLE */
    }, 8, ["class", "show"])],
    2
    /* CLASS */
  );
}
var Gv = ne({
  name: vk,
  directives: {
    Ripple: Xe,
    Hover: zn
  },
  components: {
    VarIcon: Le,
    VarPopup: Hn,
    VarFormDetails: an,
    VarHoverOverlay: Sn
  },
  props: dk,
  setup(e) {
    var n = S(null), r = S(!1), a = S(null), t = L(() => {
      var {
        maxlength: $,
        modelValue: {
          length: B
        }
      } = e;
      return pn($) ? B + " / " + $ : "";
    }), {
      form: o,
      bindForm: i
    } = Bn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = In(), {
      hovering: v,
      handleHovering: f
    } = Kn(), m = L(() => {
      var {
        modelValue: $,
        hideList: B
      } = e;
      return B ? [] : $;
    }), p = !1, b = {
      getSuccess: V,
      getError: z,
      getLoading: K
    }, g = {
      validate: X,
      resetValidation: d,
      reset: J
    };
    y(i, g), fe(() => e.modelValue, () => {
      !p && H("onChange"), p = !1;
    }, {
      deep: !0
    });
    function w($) {
      var {
        disabled: B,
        readonly: q,
        previewed: j
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || B || q || !j)) {
        var {
          url: F
        } = $;
        if (Qe(F) && Cl(F)) {
          Rn(F);
          return;
        }
        Qe(F) && Sl(F) && (a.value = $, r.value = !0);
      }
    }
    function M($) {
      return {
        id: mk++,
        url: "",
        cover: "",
        name: $.name,
        file: $,
        progress: 0
      };
    }
    function T($) {
      var B = $.target, {
        files: q
      } = B;
      return Array.from(q);
    }
    function C($) {
      return new Promise((B) => {
        if (!$.file.type.startsWith("image")) {
          B($);
          return;
        }
        var q = new FileReader();
        q.onload = () => {
          var j = q.result;
          $.cover = j, $.url = j, B($);
        }, q.readAsDataURL($.file);
      });
    }
    function O($) {
      return $.map(C);
    }
    function E($) {
      var {
        onBeforeRead: B
      } = e;
      return $.map((q) => new Promise((j) => {
        B || j({
          valid: !0,
          varFile: q
        });
        var F = Xt(y(B, Fe(q)));
        Promise.all(F).then((G) => {
          j({
            valid: G.every(Boolean),
            varFile: q
          });
        });
      }));
    }
    function A($) {
      return P.apply(this, arguments);
    }
    function P() {
      return P = Fo(function* ($) {
        var {
          maxsize: B,
          maxlength: q,
          modelValue: j,
          onOversize: F,
          onAfterRead: G,
          onBeforeFilter: ee,
          readonly: ce,
          disabled: Ce
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || Ce || ce)) {
          var Ee = (Ie) => Ie.filter((Oe) => Oe.file.size > R(B) ? (y(F, Fe(Oe)), !1) : !0), te = (Ie) => {
            var Oe = Math.min(Ie.length, R(q) - j.length);
            return Ie.slice(0, Oe);
          }, de = /* @__PURE__ */ function() {
            var Ie = Fo(function* (Oe) {
              if (!ee)
                return Oe;
              var se = Xt(ee);
              for (var be of se)
                Oe = yield be(Oe);
              return Oe;
            });
            return function(se) {
              return Ie.apply(this, arguments);
            };
          }(), ge = T($), $e = ge.map(M);
          $e = yield de($e), $e = B != null ? Ee($e) : $e, $e = q != null ? te($e) : $e;
          var je = yield Promise.all(O($e)), ue = yield Promise.all(E(je)), Te = ue.filter((Ie) => {
            var {
              valid: Oe
            } = Ie;
            return Oe;
          }).map((Ie) => {
            var {
              varFile: Oe
            } = Ie;
            return Oe;
          });
          y(e["onUpdate:modelValue"], [...j, ...Te]), $.target.value = "", Te.forEach((Ie) => y(G, Fe(Ie)));
        }
      }), P.apply(this, arguments);
    }
    function I($) {
      return N.apply(this, arguments);
    }
    function N() {
      return N = Fo(function* ($) {
        var {
          disabled: B,
          readonly: q,
          modelValue: j,
          onBeforeRemove: F,
          onRemove: G
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || B || q)) {
          if (F) {
            var ee = Xt(y(F, Fe($)));
            if ((yield Promise.all(ee)).some((Ce) => !Ce))
              return;
          }
          var ce = j.filter((Ce) => Ce !== $);
          y(G, Fe($)), H("onRemove"), y(e["onUpdate:modelValue"], ce);
        }
      }), N.apply(this, arguments);
    }
    function V() {
      return e.modelValue.filter(($) => $.state === "success");
    }
    function z() {
      return e.modelValue.filter(($) => $.state === "error");
    }
    function K() {
      return e.modelValue.filter(($) => $.state === "loading");
    }
    function _() {
      n.value.click();
    }
    function ae() {
      a.value = null, r.value = !1, Rn.close();
    }
    function H($) {
      Ye(() => {
        var {
          validateTrigger: B,
          rules: q,
          modelValue: j
        } = e;
        s(B, $, q, j, b);
      });
    }
    function X() {
      return u(e.rules, e.modelValue, b);
    }
    function J() {
      p = !0, y(e["onUpdate:modelValue"], []), d();
    }
    return {
      input: n,
      files: m,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      hovering: v,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: fk,
      classes: ck,
      formatElevation: bn,
      toNumber: R,
      handleHovering: f,
      isHTMLSupportVideo: Sl,
      isHTMLSupportImage: Cl,
      preview: w,
      handleChange: A,
      handleRemove: I,
      getSuccess: V,
      getError: z,
      getLoading: K,
      validate: X,
      resetValidation: d,
      reset: J,
      chooseFile: _,
      closePreview: ae,
      toSizeUnit: Se
    };
  }
});
Gv.render = wk;
const kt = Gv;
oe(kt);
var o2 = kt, Ck = {
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
function Bs(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Es(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Bs(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Bs(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Vi() {
  return Vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Vi.apply(this, arguments);
}
var {
  name: Sk,
  n: kk,
  classes: $k
} = re("watermark"), Tk = {
  ref: "svgRef"
}, Ok = ["viewBox", "width", "height"], Pk = ["width", "height"], Mk = ["href", "xlink:href", "x", "y", "width", "height"];
function Ik(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default"), (h(), ke(Qn, {
      to: "body",
      disabled: !e.fullscreen
    }, [D(
      "div",
      {
        ref: "containerRef",
        class: c(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
        style: W({
          backgroundImage: "url(" + e.watermarkUrl + ")",
          zIndex: e.zIndex
        })
      },
      [Me(D(
        "div",
        Tk,
        [(h(), k("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          viewBox: "0 0 " + (e.width + e.gapX) + " " + (e.height + e.gapY),
          width: "" + (e.width + e.gapX),
          height: "" + (e.height + e.gapY),
          style: W({
            padding: "0 " + e.gapX + "px " + e.gapY + "px 0",
            opacity: e.opacity
          })
        }, [e.showContent() ? (h(), k("foreignObject", {
          key: 0,
          x: "0",
          y: "0",
          width: e.width,
          height: e.height
        }, [D(
          "div",
          {
            xmlns: "http://www.w3.org/1999/xhtml",
            style: W({
              transform: "translate(" + e.offsetX + "px, " + e.offsetY + "px) rotate(" + e.rotate + "deg)",
              transformOrigin: "center"
            })
          },
          [Y(e.$slots, "content", {}, () => [D(
            "span",
            {
              style: W(Vi({}, e.font, {
                fontSize: e.font.fontSize + "px",
                color: e.textColor
              }))
            },
            ie(e.content),
            5
            /* TEXT, STYLE */
          )])],
          4
          /* STYLE */
        )], 8, Pk)) : x("v-if", !0), !e.$slots.content && e.image ? (h(), k("image", {
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
        }, null, 12, Mk)) : x("v-if", !0)], 12, Ok))],
        512
        /* NEED_PATCH */
      ), [[Un, !1]])],
      6
      /* CLASS, STYLE */
    )], 8, ["disabled"]))],
    2
    /* CLASS */
  );
}
var qv = ne({
  name: Sk,
  props: Ck,
  setup(e, n) {
    var {
      slots: r
    } = n, a = S(""), t = S(""), o = S(""), i = S(null), l = S(null);
    fe(() => [e.image, e.font, e.content, e.height, e.width, e.rotate, e.gapX, e.gapY, e.offsetX, e.offsetY, e.opacity], m, {
      deep: !0
    }), Tt(m), Ot(f);
    function s() {
      return !!(r.content || e.content && !e.image);
    }
    function u() {
      return d.apply(this, arguments);
    }
    function d() {
      return d = Es(function* () {
        return new Promise((b) => {
          var g = document.createElement("canvas"), w = g.getContext("2d"), M = new Image();
          M.crossOrigin = "anonymous", M.referrerPolicy = "no-referrer", M.src = e.image, M.onload = () => {
            g.width = M.width, g.height = M.height, w.drawImage(M, 0, 0), b(g.toDataURL());
          };
        });
      }), d.apply(this, arguments);
    }
    function v(b) {
      var g = new Blob([b], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(g);
    }
    function f() {
      a.value && URL.revokeObjectURL(a.value);
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return p = Es(function* () {
        o.value = Vr(l.value).color, e.image && (t.value = yield u()), yield Ye(), f(), a.value = v(i.value.innerHTML);
      }), p.apply(this, arguments);
    }
    return {
      svgRef: i,
      containerRef: l,
      watermarkUrl: a,
      imageUrl: t,
      textColor: o,
      n: kk,
      classes: $k,
      showContent: s,
      resize: m
    };
  }
});
qv.render = Ik;
const $t = qv;
oe($t);
var i2 = $t;
const Bk = "2.16.2";
function Ek(e) {
  Xn.install && e.use(Xn), Sa.install && e.use(Sa), $a.install && e.use($a), Ta.install && e.use(Ta), Oa.install && e.use(Oa), Wr.install && e.use(Wr), Pa.install && e.use(Pa), Ma.install && e.use(Ma), Ia.install && e.use(Ia), Ba.install && e.use(Ba), cn.install && e.use(cn), Ea.install && e.use(Ea), Na.install && e.use(Na), Gr.install && e.use(Gr), qr.install && e.use(qr), Da.install && e.use(Da), Xr.install && e.use(Xr), Va.install && e.use(Va), Aa.install && e.use(Aa), za.install && e.use(za), Cn.install && e.use(Cn), La.install && e.use(La), Ua.install && e.use(Ua), Ha.install && e.use(Ha), Zn.install && e.use(Zn), Ya.install && e.use(Ya), Jr.install && e.use(Jr), Wa.install && e.use(Wa), Ga.install && e.use(Ga), Mr.install && e.use(Mr), an.install && e.use(an), zn.install && e.use(zn), Sn.install && e.use(Sn), Le.install && e.use(Le), qa.install && e.use(qa), Rn.install && e.use(Rn), Xa.install && e.use(Xa), Ka.install && e.use(Ka), ea.install && e.use(ea), ka.install && e.use(ka), Za.install && e.use(Za), Ja.install && e.use(Ja), mr.install && e.use(mr), Ti.install && e.use(Ti), Ko.install && e.use(Ko), Nr.install && e.use(Nr), Qa.install && e.use(Qa), _a.install && e.use(_a), xa.install && e.use(xa), et.install && e.use(et), Dr.install && e.use(Dr), Hn.install && e.use(Hn), nt.install && e.use(nt), rt.install && e.use(rt), at.install && e.use(at), tt.install && e.use(tt), ot.install && e.use(ot), it.install && e.use(it), Xe.install && e.use(Xe), lt.install && e.use(lt), st.install && e.use(st), ut.install && e.use(ut), dt.install && e.use(dt), Ei.install && e.use(Ei), ft.install && e.use(ft), ct.install && e.use(ct), mt.install && e.use(mt), Er.install && e.use(Er), ht.install && e.use(ht), Ir.install && e.use(Ir), Br.install && e.use(Br), pt.install && e.use(pt), gt.install && e.use(gt), bt.install && e.use(bt), yt.install && e.use(yt), wt.install && e.use(wt), Ct.install && e.use(Ct), Di.install && e.use(Di), St.install && e.use(St), xr.install && e.use(xr), kt.install && e.use(kt), $t.install && e.use($t);
}
const l2 = {
  version: Bk,
  install: Ek,
  ActionSheet: Xn,
  AppBar: Sa,
  Avatar: $a,
  AvatarGroup: Ta,
  BackTop: Oa,
  Badge: Wr,
  BottomNavigation: Pa,
  BottomNavigationItem: Ma,
  Breadcrumb: Ia,
  Breadcrumbs: Ba,
  Button: cn,
  ButtonGroup: Ea,
  Card: Na,
  Cell: Gr,
  Checkbox: qr,
  CheckboxGroup: Da,
  Chip: Xr,
  Col: Va,
  Collapse: Aa,
  CollapseItem: za,
  Context: Cn,
  Countdown: La,
  Counter: Ua,
  DatePicker: Ha,
  Dialog: Zn,
  Divider: Ya,
  Drag: Jr,
  Ellipsis: Wa,
  Fab: Ga,
  Form: Mr,
  FormDetails: an,
  Hover: zn,
  HoverOverlay: Sn,
  Icon: Le,
  Image: qa,
  ImagePreview: Rn,
  IndexAnchor: Xa,
  IndexBar: Ka,
  Input: ea,
  Lazy: ka,
  Link: Za,
  List: Ja,
  Loading: mr,
  LoadingBar: Ti,
  Locale: Ko,
  Menu: Nr,
  Option: Qa,
  Overlay: _a,
  Pagination: xa,
  Paper: et,
  Picker: Dr,
  Popup: Hn,
  Progress: nt,
  PullRefresh: rt,
  Radio: at,
  RadioGroup: tt,
  Rate: ot,
  Result: it,
  Ripple: Xe,
  Row: lt,
  Select: st,
  Skeleton: ut,
  Slider: dt,
  Snackbar: Ei,
  Space: ft,
  Step: ct,
  Steps: mt,
  Sticky: Er,
  StyleProvider: ht,
  Swipe: Ir,
  SwipeItem: Br,
  Switch: pt,
  Tab: gt,
  TabItem: bt,
  Table: yt,
  Tabs: wt,
  TabsItems: Ct,
  Themes: Di,
  TimePicker: St,
  Tooltip: xr,
  Uploader: kt,
  Watermark: $t
};
export {
  Xn as ActionSheet,
  Sa as AppBar,
  $a as Avatar,
  Ta as AvatarGroup,
  Oa as BackTop,
  Wr as Badge,
  Pa as BottomNavigation,
  Ma as BottomNavigationItem,
  Ia as Breadcrumb,
  Ba as Breadcrumbs,
  cn as Button,
  Ea as ButtonGroup,
  Na as Card,
  Gr as Cell,
  qr as Checkbox,
  Da as CheckboxGroup,
  Xr as Chip,
  Va as Col,
  Aa as Collapse,
  za as CollapseItem,
  Cn as Context,
  La as Countdown,
  Ua as Counter,
  Ha as DatePicker,
  Zn as Dialog,
  Ya as Divider,
  Jr as Drag,
  Wa as Ellipsis,
  Ga as Fab,
  Mr as Form,
  an as FormDetails,
  zn as Hover,
  Sn as HoverOverlay,
  Le as Icon,
  qa as Image,
  Rn as ImagePreview,
  Xa as IndexAnchor,
  Ka as IndexBar,
  ea as Input,
  ka as Lazy,
  Za as Link,
  Ja as List,
  mr as Loading,
  Ti as LoadingBar,
  Ko as Locale,
  Nr as Menu,
  Qa as Option,
  _a as Overlay,
  _o as PIXEL,
  xa as Pagination,
  et as Paper,
  Dr as Picker,
  Hn as Popup,
  nt as Progress,
  rt as PullRefresh,
  at as Radio,
  tt as RadioGroup,
  ot as Rate,
  it as Result,
  Xe as Ripple,
  lt as Row,
  Pv as SNACKBAR_TYPE,
  st as Select,
  ut as Skeleton,
  dt as Slider,
  Ei as Snackbar,
  ft as Space,
  ct as Step,
  mt as Steps,
  Er as Sticky,
  ht as StyleProvider,
  Ir as Swipe,
  Br as SwipeItem,
  pt as Switch,
  gt as Tab,
  bt as TabItem,
  yt as Table,
  wt as Tabs,
  Ct as TabsItems,
  Di as Themes,
  St as TimePicker,
  xr as Tooltip,
  kt as Uploader,
  $t as Watermark,
  Rk as _ActionSheetComponent,
  Uk as _AppBarComponent,
  Yk as _AvatarComponent,
  Fk as _AvatarGroupComponent,
  Xk as _BackTopComponent,
  Kk as _BadgeComponent,
  Zk as _BottomNavigationComponent,
  Jk as _BottomNavigationItemComponent,
  Qk as _BreadcrumbComponent,
  _k as _BreadcrumbsComponent,
  qk as _ButtonComponent,
  xk as _ButtonGroupComponent,
  e$ as _CardComponent,
  n$ as _CellComponent,
  a$ as _CheckboxComponent,
  t$ as _CheckboxGroupComponent,
  o$ as _ChipComponent,
  i$ as _ColComponent,
  l$ as _CollapseComponent,
  s$ as _CollapseItemComponent,
  Dk as _ContextComponent,
  u$ as _CountdownComponent,
  d$ as _CounterComponent,
  v$ as _DatePickerComponent,
  f$ as _DialogComponent,
  c$ as _DividerComponent,
  m$ as _DragComponent,
  p$ as _EllipsisComponent,
  g$ as _FabComponent,
  b$ as _FormComponent,
  r$ as _FormDetailsComponent,
  Gk as _HoverComponent,
  Wk as _HoverOverlayComponent,
  zk as _IconComponent,
  y$ as _ImageComponent,
  S$ as _ImagePreviewComponent,
  $$ as _IndexAnchorComponent,
  T$ as _IndexBarComponent,
  O$ as _InputComponent,
  Hk as _LazyComponent,
  P$ as _LinkComponent,
  M$ as _ListComponent,
  I$ as _LoadingBarComponent,
  jk as _LoadingComponent,
  Lk as _LocaleComponent,
  B$ as _MenuComponent,
  E$ as _OptionComponent,
  N$ as _OverlayComponent,
  D$ as _PaginationComponent,
  V$ as _PaperComponent,
  A$ as _PickerComponent,
  Ak as _PopupComponent,
  z$ as _ProgressComponent,
  L$ as _PullRefreshComponent,
  R$ as _RadioComponent,
  U$ as _RadioGroupComponent,
  H$ as _RateComponent,
  Y$ as _ResultComponent,
  Vk as _RippleComponent,
  F$ as _RowComponent,
  j$ as _SelectComponent,
  W$ as _SkeletonComponent,
  G$ as _SliderComponent,
  q$ as _SnackbarComponent,
  X$ as _SpaceComponent,
  K$ as _StepComponent,
  Z$ as _StepsComponent,
  k$ as _StickyComponent,
  J$ as _StyleProviderComponent,
  w$ as _SwipeComponent,
  C$ as _SwipeItemComponent,
  Q$ as _SwitchComponent,
  _$ as _TabComponent,
  x$ as _TabItemComponent,
  e2 as _TableComponent,
  n2 as _TabsComponent,
  r2 as _TabsItemsComponent,
  a2 as _ThemesComponent,
  t2 as _TimePickerComponent,
  h$ as _TooltipComponent,
  o2 as _UploaderComponent,
  i2 as _WatermarkComponent,
  Hf as actionSheetProps,
  ji as add,
  Xf as appBarProps,
  Cc as avatarGroupProps,
  cc as avatarProps,
  _c as backTopProps,
  am as badgeProps,
  hm as bottomNavigationItemProps,
  sm as bottomNavigationProps,
  Sm as breadcrumbProps,
  Im as breadcrumbsProps,
  Wc as buttonProps,
  Rm as cardProps,
  Gm as cellProps,
  dh as checkboxGroupProps,
  rh as checkboxProps,
  hh as chipProps,
  yh as colProps,
  Eh as collapseItemProps,
  Oh as collapseProps,
  zh as countdownProps,
  Dp as counterProps,
  eg as datePickerProps,
  l2 as default,
  Ze as defaultLazyOptions,
  bg as dialogProps,
  $g as dividerProps,
  Ig as dragProps,
  _s as enUS,
  Jm as formDetailsProps,
  xb as formProps,
  js as iconProps,
  tu as imageCache,
  S0 as imagePreviewProps,
  a0 as imageProps,
  L0 as indexAnchorProps,
  F0 as indexBarProps,
  _0 as inputProps,
  Ek as install,
  iy as linkProps,
  vy as listProps,
  Cy as loadingBarProps,
  lr as loadingProps,
  Ey as menuProps,
  eu as merge,
  Ry as optionProps,
  jy as overlayProps,
  xe as pack,
  xs as packs,
  qy as paginationProps,
  _y as paperProps,
  a1 as pickerProps,
  Et as popupProps,
  c1 as progressProps,
  C1 as pullRefreshProps,
  N1 as radioGroupProps,
  T1 as radioProps,
  L1 as rateProps,
  Cw as resultProps,
  Ow as rowProps,
  Ew as selectProps,
  Lw as skeletonProps,
  Fw as sliderProps,
  kv as snackbarProps,
  uC as spaceProps,
  hC as stepProps,
  kC as stepsProps,
  xt as stickyProps,
  PC as styleProviderProps,
  Nd as swipeProps,
  EC as switchProps,
  GC as tabItemProps,
  UC as tabProps,
  JC as tableProps,
  iS as tabsItemsProps,
  nS as tabsProps,
  _S as timePickerProps,
  Ub as tooltipProps,
  dk as uploaderProps,
  Wi as use,
  Kn as useHoverOverlay,
  Fi as useLocale,
  Bk as version,
  Yi as zhCN
};
